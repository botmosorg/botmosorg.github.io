var S8=Object.create;var{getPrototypeOf:E8,defineProperty:Gw,getOwnPropertyNames:N8}=Object;var u8=Object.prototype.hasOwnProperty;function g8(_){return this[_]}var h8,I8,N0=(_,w,Q)=>{var K=_!=null&&typeof _==="object";if(K){var $=w?h8??=new WeakMap:I8??=new WeakMap,B=$.get(_);if(B)return B}Q=_!=null?S8(E8(_)):{};let R=w||!_||!_.__esModule?Gw(Q,"default",{value:_,enumerable:!0}):Q;for(let b of N8(_))if(!u8.call(R,b))Gw(R,b,{get:g8.bind(_,b),enumerable:!0});if(K)$.set(_,R);return R};var T8=(_,w)=>()=>(w||_((w={exports:{}}).exports,w),w.exports);var Q0=T8((J0,iw)=>{function w1(_){if(_===void 0)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function B7(_,w){var Q=typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(Q)return(Q=Q.call(_)).next.bind(Q);if(Array.isArray(_)||(Q=W7(_))||w&&_&&typeof _.length==="number"){if(Q)_=Q;var K=0;return function(){if(K>=_.length)return{done:!0};return{done:!1,value:_[K++]}}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W7(_,w){if(!_)return;if(typeof _==="string")return aw(_,w);var Q=Object.prototype.toString.call(_).slice(8,-1);if(Q==="Object"&&_.constructor)Q=_.constructor.name;if(Q==="Map"||Q==="Set")return Array.from(_);if(Q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q))return aw(_,w)}function aw(_,w){if(w==null||w>_.length)w=_.length;for(var Q=0,K=Array(w);Q<w;Q++)K[Q]=_[Q];return K}function Z_(_,w){_.prototype=Object.create(w.prototype),_.prototype.constructor=_,l0(_,w)}function l0(_,w){return l0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(K,$){return K.__proto__=$,K},l0(_,w)}(function(_,w){typeof J0==="object"&&typeof iw<"u"?w(J0):typeof define==="function"&&define.amd?define(["exports"],w):(_=typeof globalThis<"u"?globalThis:_||self,w(_.ROT={}))})(J0,function(_){var w=0.00000000023283064365386963,Q=function(){function G(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var U=G.prototype;return U.getSeed=function(){return this._seed},U.setSeed=function(q){return q=q<1?1/q:q,this._seed=q,this._s0=(q>>>0)*w,q=q*69069+1>>>0,this._s1=q*w,q=q*69069+1>>>0,this._s2=q*w,this._c=1,this},U.getUniform=function(){var q=2091639*this._s0+this._c*w;return this._s0=this._s1,this._s1=this._s2,this._c=q|0,this._s2=q-this._c,this._s2},U.getUniformInt=function(q,J){var Z=Math.max(q,J),V=Math.min(q,J);return Math.floor(this.getUniform()*(Z-V+1))+V},U.getNormal=function(q,J){if(q===void 0)q=0;if(J===void 0)J=1;var Z,V,z;do Z=2*this.getUniform()-1,V=2*this.getUniform()-1,z=Z*Z+V*V;while(z>1||z==0);var Y=Z*Math.sqrt(-2*Math.log(z)/z);return q+Y*J},U.getPercentage=function(){return 1+Math.floor(this.getUniform()*100)},U.getItem=function(q){if(!q.length)return null;return q[Math.floor(this.getUniform()*q.length)]},U.shuffle=function(q){var J=[],Z=q.slice();while(Z.length){var V=Z.indexOf(this.getItem(Z));J.push(Z.splice(V,1)[0])}return J},U.getWeightedValue=function(q){var J=0;for(var Z in q)J+=q[Z];var V=this.getUniform()*J,z,Y=0;for(z in q)if(Y+=q[z],V<Y)return z;return z},U.getState=function(){return[this._s0,this._s1,this._s2,this._c]},U.setState=function(q){return this._s0=q[0],this._s1=q[1],this._s2=q[2],this._c=q[3],this},U.clone=function(){var q=new G;return q.setState(this.getState())},G}(),K=new Q().setSeed(Date.now()),$=function(){function G(){}var U=G.prototype;return U.getContainer=function(){return null},U.setOptions=function(q){this._options=q},G}(),B=function(G){Z_(U,G);function U(){var q=G.call(this)||this;return q._ctx=document.createElement("canvas").getContext("2d"),q}var X=U.prototype;return X.schedule=function(J){requestAnimationFrame(J)},X.getContainer=function(){return this._ctx.canvas},X.setOptions=function(J){G.prototype.setOptions.call(this,J);var Z=J.fontStyle?J.fontStyle+" ":"",V=Z+" "+J.fontSize+"px "+J.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},X.clear=function(){var J=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=J},X.eventToPosition=function(J,Z){var V=this._ctx.canvas,z=V.getBoundingClientRect();if(J-=z.left,Z-=z.top,J*=V.width/z.width,Z*=V.height/z.height,J<0||Z<0||J>=V.width||Z>=V.height)return[-1,-1];return this._normalizedEventToPosition(J,Z)},U}($);function R(G,U){return(G%U+U)%U}function b(G,U,X){if(U===void 0)U=0;if(X===void 0)X=1;if(G<U)return U;if(G>X)return X;return G}function F(G){return G.charAt(0).toUpperCase()+G.substring(1)}function M(G){for(var U=arguments.length,X=Array(U>1?U-1:0),q=1;q<U;q++)X[q-1]=arguments[q];var J=M.map,Z=function(z,Y,H,W){if(G.charAt(W-1)=="%")return z.substring(1);if(!X.length)return z;var L=X[0],j=Y||H,v=j.split(","),P=v.shift()||"",C=J[P.toLowerCase()];if(!C)return z;L=X.shift();var O=L[C].apply(L,v),N=P.charAt(0);if(N!=N.toLowerCase())O=F(O);return O};return G.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Z)}M.map={s:"toString"};var k=Object.freeze({__proto__:null,mod:R,clamp:b,capitalize:F,format:M}),h=function(G){Z_(U,G);function U(){var q=G.call(this)||this;return q._spacingX=0,q._spacingY=0,q._hexSize=0,q}var X=U.prototype;return X.draw=function(J,Z){var V=J[0],z=J[1],Y=J[2],H=J[3],W=J[4],L=[(V+1)*this._spacingX,z*this._spacingY+this._hexSize];if(this._options.transpose)L.reverse();if(Z)this._ctx.fillStyle=W,this._fill(L[0],L[1]);if(!Y)return;this._ctx.fillStyle=H;var j=[].concat(Y);for(var v=0;v<j.length;v++)this._ctx.fillText(j[v],L[0],Math.ceil(L[1]))},X.computeSize=function(J,Z){if(this._options.transpose)J+=Z,Z=J-Z,J-=Z;var V=Math.floor(J/this._spacingX)-1,z=Math.floor((Z-2*this._hexSize)/this._spacingY+1);return[V,z]},X.computeFontSize=function(J,Z){if(this._options.transpose)J+=Z,Z=J-Z,J-=Z;var V=2*J/((this._options.width+1)*Math.sqrt(3))-1,z=Z/(2+1.5*(this._options.height-1)),Y=Math.min(V,z),H=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var W=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=H;var L=W/100;Y=Math.floor(Y)+1;var j=2*Y/(this._options.spacing*(1+L/Math.sqrt(3)));return Math.ceil(j)-1},X._normalizedEventToPosition=function(J,Z){var V;if(this._options.transpose)J+=Z,Z=J-Z,J-=Z,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var z=V/this._options.height;if(Z=Math.floor(Z/z),R(Z,2))J-=this._spacingX,J=1+2*Math.floor(J/(2*this._spacingX));else J=2*Math.floor(J/(2*this._spacingX));return[J,Z]},X._fill=function(J,Z){var V=this._hexSize,z=this._options.border,Y=this._ctx;if(Y.beginPath(),this._options.transpose)Y.moveTo(J-V+z,Z),Y.lineTo(J-V/2+z,Z+this._spacingX-z),Y.lineTo(J+V/2-z,Z+this._spacingX-z),Y.lineTo(J+V-z,Z),Y.lineTo(J+V/2-z,Z-this._spacingX+z),Y.lineTo(J-V/2+z,Z-this._spacingX+z),Y.lineTo(J-V+z,Z);else Y.moveTo(J,Z-V+z),Y.lineTo(J+this._spacingX-z,Z-V/2+z),Y.lineTo(J+this._spacingX-z,Z+V/2-z),Y.lineTo(J,Z+V-z),Y.lineTo(J-this._spacingX+z,Z+V/2-z),Y.lineTo(J-this._spacingX+z,Z-V/2+z),Y.lineTo(J,Z-V+z);Y.fill()},X._updateSize=function(){var J=this._options,Z=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(J.spacing*(J.fontSize+Z/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,z;if(J.transpose)V="height",z="width";else V="width",z="height";this._ctx.canvas[V]=Math.ceil((J.width+1)*this._spacingX),this._ctx.canvas[z]=Math.ceil((J.height-1)*this._spacingY+2*this._hexSize)},U}(B),E=function(G){Z_(U,G);function U(){var q=G.call(this)||this;return q._spacingX=0,q._spacingY=0,q._canvasCache={},q}var X=U.prototype;return X.setOptions=function(J){G.prototype.setOptions.call(this,J),this._canvasCache={}},X.draw=function(J,Z){if(U.cache)this._drawWithCache(J);else this._drawNoCache(J,Z)},X._drawWithCache=function(J){var Z=J[0],V=J[1],z=J[2],Y=J[3],H=J[4],W=""+z+Y+H,L;if(W in this._canvasCache)L=this._canvasCache[W];else{var j=this._options.border;L=document.createElement("canvas");var v=L.getContext("2d");if(L.width=this._spacingX,L.height=this._spacingY,v.fillStyle=H,v.fillRect(j,j,L.width-j,L.height-j),z){v.fillStyle=Y,v.font=this._ctx.font,v.textAlign="center",v.textBaseline="middle";var P=[].concat(z);for(var C=0;C<P.length;C++)v.fillText(P[C],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[W]=L}this._ctx.drawImage(L,Z*this._spacingX,V*this._spacingY)},X._drawNoCache=function(J,Z){var V=J[0],z=J[1],Y=J[2],H=J[3],W=J[4];if(Z){var L=this._options.border;this._ctx.fillStyle=W,this._ctx.fillRect(V*this._spacingX+L,z*this._spacingY+L,this._spacingX-L,this._spacingY-L)}if(!Y)return;this._ctx.fillStyle=H;var j=[].concat(Y);for(var v=0;v<j.length;v++)this._ctx.fillText(j[v],(V+0.5)*this._spacingX,Math.ceil((z+0.5)*this._spacingY))},X.computeSize=function(J,Z){var V=Math.floor(J/this._spacingX),z=Math.floor(Z/this._spacingY);return[V,z]},X.computeFontSize=function(J,Z){var V=Math.floor(J/this._options.width),z=Math.floor(Z/this._options.height),Y=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var H=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=Y;var W=H/100,L=W*z/V;if(L>1)z=Math.floor(z/L);return Math.floor(z/this._options.spacing)},X._normalizedEventToPosition=function(J,Z){return[Math.floor(J/this._spacingX),Math.floor(Z/this._spacingY)]},X._updateSize=function(){var J=this._options,Z=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(J.spacing*Z),this._spacingY=Math.ceil(J.spacing*J.fontSize),J.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=J.width*this._spacingX,this._ctx.canvas.height=J.height*this._spacingY},U}(B);E.cache=!1;var m=function(G){Z_(U,G);function U(){var q=G.call(this)||this;return q._colorCanvas=document.createElement("canvas"),q}var X=U.prototype;return X.draw=function(J,Z){var V=J[0],z=J[1],Y=J[2],H=J[3],W=J[4],L=this._options.tileWidth,j=this._options.tileHeight;if(Z)if(this._options.tileColorize)this._ctx.clearRect(V*L,z*j,L,j);else this._ctx.fillStyle=W,this._ctx.fillRect(V*L,z*j,L,j);if(!Y)return;var v=[].concat(Y),P=[].concat(H),C=[].concat(W);for(var O=0;O<v.length;O++){var N=this._options.tileMap[v[O]];if(!N)throw Error('Char "'+v[O]+'" not found in tileMap');if(this._options.tileColorize){var T=this._colorCanvas,l=T.getContext("2d");l.globalCompositeOperation="source-over",l.clearRect(0,0,L,j);var d=P[O],i=C[O];if(l.drawImage(this._options.tileSet,N[0],N[1],L,j,0,0,L,j),d!="transparent")l.fillStyle=d,l.globalCompositeOperation="source-atop",l.fillRect(0,0,L,j);if(i!="transparent")l.fillStyle=i,l.globalCompositeOperation="destination-over",l.fillRect(0,0,L,j);this._ctx.drawImage(T,V*L,z*j,L,j)}else this._ctx.drawImage(this._options.tileSet,N[0],N[1],L,j,V*L,z*j,L,j)}},X.computeSize=function(J,Z){var V=Math.floor(J/this._options.tileWidth),z=Math.floor(Z/this._options.tileHeight);return[V,z]},X.computeFontSize=function(){throw Error("Tile backend does not understand font size")},X._normalizedEventToPosition=function(J,Z){return[Math.floor(J/this._options.tileWidth),Math.floor(Z/this._options.tileHeight)]},X._updateSize=function(){var J=this._options;this._ctx.canvas.width=J.width*J.tileWidth,this._ctx.canvas.height=J.height*J.tileHeight,this._colorCanvas.width=J.tileWidth,this._colorCanvas.height=J.tileHeight},U}(B);function p(G){var U,X;if(G in f)U=f[G];else{if(G.charAt(0)=="#"){var q=G.match(/[0-9a-f]/gi)||[],J=q.map(function(V){return parseInt(V,16)});if(J.length==3)U=J.map(function(V){return V*17});else{for(var Z=0;Z<3;Z++)J[Z+1]+=16*J[Z],J.splice(Z,1);U=J}}else if(X=G.match(/rgb\(([0-9, ]+)\)/i))U=X[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else U=[0,0,0];f[G]=U}return U.slice()}function r(G){var U=G.slice();for(var X=arguments.length,q=Array(X>1?X-1:0),J=1;J<X;J++)q[J-1]=arguments[J];for(var Z=0;Z<3;Z++)for(var V=0;V<q.length;V++)U[Z]+=q[V][Z];return U}function s(G){for(var U=arguments.length,X=Array(U>1?U-1:0),q=1;q<U;q++)X[q-1]=arguments[q];for(var J=0;J<3;J++)for(var Z=0;Z<X.length;Z++)G[J]+=X[Z][J];return G}function Y_(G){var U=G.slice();for(var X=arguments.length,q=Array(X>1?X-1:0),J=1;J<X;J++)q[J-1]=arguments[J];for(var Z=0;Z<3;Z++){for(var V=0;V<q.length;V++)U[Z]*=q[V][Z]/255;U[Z]=Math.round(U[Z])}return U}function z_(G){for(var U=arguments.length,X=Array(U>1?U-1:0),q=1;q<U;q++)X[q-1]=arguments[q];for(var J=0;J<3;J++){for(var Z=0;Z<X.length;Z++)G[J]*=X[Z][J]/255;G[J]=Math.round(G[J])}return G}function B_(G,U,X){if(X===void 0)X=0.5;var q=G.slice();for(var J=0;J<3;J++)q[J]=Math.round(q[J]+X*(U[J]-G[J]));return q}var $_=B_;function A(G,U,X){if(X===void 0)X=0.5;var q=c(G),J=c(U);for(var Z=0;Z<3;Z++)q[Z]+=X*(J[Z]-q[Z]);return a(q)}var I=A;function x(G,U){if(!(U instanceof Array))U=Math.round(K.getNormal(0,U));var X=G.slice();for(var q=0;q<3;q++)X[q]+=U instanceof Array?Math.round(K.getNormal(0,U[q])):U;return X}function c(G){var U=G[0]/255,X=G[1]/255,q=G[2]/255,J=Math.max(U,X,q),Z=Math.min(U,X,q),V=0,z,Y=(J+Z)/2;if(J==Z)z=0;else{var H=J-Z;switch(z=Y>0.5?H/(2-J-Z):H/(J+Z),J){case U:V=(X-q)/H+(X<q?6:0);break;case X:V=(q-U)/H+2;break;case q:V=(U-X)/H+4;break}V/=6}return[V,z,Y]}function o(G,U,X){if(X<0)X+=1;if(X>1)X-=1;if(X<0.16666666666666666)return G+(U-G)*6*X;if(X<0.5)return U;if(X<0.6666666666666666)return G+(U-G)*(0.6666666666666666-X)*6;return G}function a(G){var U=G[2];if(G[1]==0)return U=Math.round(U*255),[U,U,U];else{var X=G[1],q=U<0.5?U*(1+X):U+X-U*X,J=2*U-q,Z=o(J,q,G[0]+0.3333333333333333),V=o(J,q,G[0]),z=o(J,q,G[0]-0.3333333333333333);return[Math.round(Z*255),Math.round(V*255),Math.round(z*255)]}}function u(G){var U=G.map(function(X){return b(X,0,255)});return"rgb("+U.join(",")+")"}function S(G){var U=G.map(function(X){return b(X,0,255).toString(16).padStart(2,"0")});return"#"+U.join("")}var f={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},n=Object.freeze({__proto__:null,fromString:p,add:r,add_:s,multiply:Y_,multiply_:z_,interpolate:B_,lerp:$_,interpolateHSL:A,lerpHSL:I,randomize:x,rgb2hsl:c,hsl2rgb:a,toRGB:u,toHex:S}),e=function(G){Z_(U,G);function U(){var q=G.call(this)||this;q._uniforms={};try{q._gl=q._initWebGL()}catch(J){if(typeof J==="string")alert(J);else if(J instanceof Error)alert(J.message)}return q}U.isSupported=function(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var X=U.prototype;return X.schedule=function(J){requestAnimationFrame(J)},X.getContainer=function(){return this._gl.canvas},X.setOptions=function(J){var Z=this;G.prototype.setOptions.call(this,J),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Z._updateTexture(V)});else this._updateTexture(V)},X.draw=function(J,Z){var V=this._gl,z=this._options,Y=J[0],H=J[1],W=J[2],L=J[3],j=J[4],v=V.canvas.height-(H+1)*z.tileHeight;if(V.scissor(Y*z.tileWidth,v,z.tileWidth,z.tileHeight),Z){if(z.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,V1(j));V.clear(V.COLOR_BUFFER_BIT)}if(!W)return;var P=[].concat(W),C=[].concat(j),O=[].concat(L);V.uniform2fv(this._uniforms.targetPosRel,[Y,H]);for(var N=0;N<P.length;N++){var T=this._options.tileMap[P[N]];if(!T)throw Error('Char "'+P[N]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,z.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,T),z.tileColorize)V.uniform4fv(this._uniforms.tint,V1(O[N])),V.uniform4fv(this._uniforms.bg,V1(C[N]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},X.clear=function(){var J=this._gl;J.clearColor.apply(J,V1(this._options.bg)),J.scissor(0,0,J.canvas.width,J.canvas.height),J.clear(J.COLOR_BUFFER_BIT)},X.computeSize=function(J,Z){var V=Math.floor(J/this._options.tileWidth),z=Math.floor(Z/this._options.tileHeight);return[V,z]},X.computeFontSize=function(){throw Error("Tile backend does not understand font size")},X.eventToPosition=function(J,Z){var V=this._gl.canvas,z=V.getBoundingClientRect();if(J-=z.left,Z-=z.top,J*=V.width/z.width,Z*=V.height/z.height,J<0||Z<0||J>=V.width||Z>=V.height)return[-1,-1];return this._normalizedEventToPosition(J,Z)},X._initWebGL=function(){var J=this,Z=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Z;var V=h_(Z,R_,X_);return Z.useProgram(V),H_(Z),Q_.forEach(function(z){return J._uniforms[z]=Z.getUniformLocation(V,z)}),this._program=V,Z.enable(Z.BLEND),Z.blendFuncSeparate(Z.SRC_ALPHA,Z.ONE_MINUS_SRC_ALPHA,Z.ONE,Z.ONE_MINUS_SRC_ALPHA),Z.enable(Z.SCISSOR_TEST),Z},X._normalizedEventToPosition=function(J,Z){return[Math.floor(J/this._options.tileWidth),Math.floor(Z/this._options.tileHeight)]},X._updateSize=function(){var J=this._gl,Z=this._options,V=[Z.width*Z.tileWidth,Z.height*Z.tileHeight];J.canvas.width=V[0],J.canvas.height=V[1],J.viewport(0,0,V[0],V[1]),J.uniform2fv(this._uniforms.tileSize,[Z.tileWidth,Z.tileHeight]),J.uniform2fv(this._uniforms.targetSize,V)},X._updateTexture=function(J){b1(this._gl,J)},U}($),Q_=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],R_=`
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
}`.trim(),X_=`
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
}`.trim();function h_(G,U,X){var q=G.createShader(G.VERTEX_SHADER);if(G.shaderSource(q,U),G.compileShader(q),!G.getShaderParameter(q,G.COMPILE_STATUS))throw Error(G.getShaderInfoLog(q)||"");var J=G.createShader(G.FRAGMENT_SHADER);if(G.shaderSource(J,X),G.compileShader(J),!G.getShaderParameter(J,G.COMPILE_STATUS))throw Error(G.getShaderInfoLog(J)||"");var Z=G.createProgram();if(G.attachShader(Z,q),G.attachShader(Z,J),G.linkProgram(Z),!G.getProgramParameter(Z,G.LINK_STATUS))throw Error(G.getProgramInfoLog(Z)||"");return Z}function H_(G){var U=new Float32Array([0,0,1,0,0,1,1,1]),X=G.createBuffer();G.bindBuffer(G.ARRAY_BUFFER,X),G.bufferData(G.ARRAY_BUFFER,U,G.STATIC_DRAW),G.enableVertexAttribArray(0),G.vertexAttribPointer(0,2,G.FLOAT,!1,0,0)}function b1(G,U){var X=G.createTexture();return G.bindTexture(G.TEXTURE_2D,X),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_MAG_FILTER,G.NEAREST),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_MIN_FILTER,G.NEAREST),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_WRAP_S,G.REPEAT),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_WRAP_T,G.REPEAT),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,0),G.texImage2D(G.TEXTURE_2D,0,G.RGBA,G.RGBA,G.UNSIGNED_BYTE,U),X}var l_={};function V1(G){if(!(G in l_)){var U;if(G=="transparent")U=[0,0,0,0];else if(G.indexOf("rgba")>-1){U=(G.match(/[\d.]+/g)||[]).map(Number);for(var X=0;X<3;X++)U[X]=U[X]/255}else U=p(G).map(function(q){return q/255}),U.push(1);l_[G]=U}return l_[G]}function d6(G){return"\x1B[0;48;5;"+F0(G)+"m\x1B[2J"}function y6(G,U){return"\x1B[0;38;5;"+F0(G)+";48;5;"+F0(U)+"m"}function r6(G,U){return"\x1B["+(U+1)+";"+(G+1)+"H"}function F0(G){var U=256,X=6,q=X/U,J=p(G),Z=Math.floor(J[0]*q),V=Math.floor(J[1]*q),z=Math.floor(J[2]*q);return Z*36+V*6+z*1+16}var Jw=function(G){Z_(U,G);function U(){var q=G.call(this)||this;return q._offset=[0,0],q._cursor=[-1,-1],q._lastColor="",q}var X=U.prototype;return X.schedule=function(J){setTimeout(J,16.666666666666668)},X.setOptions=function(J){G.prototype.setOptions.call(this,J);var Z=[J.width,J.height],V=this.computeSize();this._offset=V.map(function(z,Y){return Math.floor((z-Z[Y])/2)})},X.clear=function(){process.stdout.write(d6(this._options.bg))},X.draw=function(J,Z){var V=J[0],z=J[1],Y=J[2],H=J[3],W=J[4],L=this._offset[0]+V,j=this._offset[1]+z,v=this.computeSize();if(L<0||L>=v[0])return;if(j<0||j>=v[1])return;if(L!==this._cursor[0]||j!==this._cursor[1])process.stdout.write(r6(L,j)),this._cursor[0]=L,this._cursor[1]=j;if(Z){if(!Y)Y=" "}if(!Y)return;var P=y6(H,W);if(P!==this._lastColor)process.stdout.write(P),this._lastColor=P;if(Y!="\t"){var C=[].concat(Y);process.stdout.write(C[0])}if(this._cursor[0]++,this._cursor[0]>=v[0])this._cursor[0]=0,this._cursor[1]++},X.computeFontSize=function(){throw Error("Terminal backend has no notion of font size")},X.eventToPosition=function(J,Z){return[J,Z]},X.computeSize=function(){return[process.stdout.columns,process.stdout.rows]},U}($),n6=/%([bc]){([^}]*)}/g,c_=0,a_=1,b0=2,v0=3;function o6(G,U){var X={width:0,height:1},q=P0(G,U),J=0;for(var Z=0;Z<q.length;Z++){var V=q[Z];switch(V.type){case c_:J+=V.value.length;break;case a_:X.height++,X.width=Math.max(X.width,J),J=0;break}}return X.width=Math.max(X.width,J),X}function P0(G,U){var X=[],q=0;G.replace(n6,function(Z,V,z,Y){var H=G.substring(q,Y);if(H.length)X.push({type:c_,value:H});return X.push({type:V=="c"?b0:v0,value:z.trim()}),q=Y+Z.length,""});var J=G.substring(q);if(J.length)X.push({type:c_,value:J});return s6(X,U)}function s6(G,U){if(!U)U=1/0;var X=0,q=0,J=-1;while(X<G.length){var Z=G[X];if(Z.type==a_)q=0,J=-1;if(Z.type!=c_){X++;continue}while(q==0&&Z.value.charAt(0)==" ")Z.value=Z.value.substring(1);var V=Z.value.indexOf(`
`);if(V!=-1){Z.value=c1(G,X,V,!0);var z=Z.value.split("");while(z.length&&z[z.length-1]==" ")z.pop();Z.value=z.join("")}if(!Z.value.length){G.splice(X,1);continue}if(q+Z.value.length>U){var Y=-1;while(!0){var H=Z.value.indexOf(" ",Y+1);if(H==-1)break;if(q+H>U)break;Y=H}if(Y!=-1)Z.value=c1(G,X,Y,!0);else if(J!=-1){var W=G[J],L=W.value.lastIndexOf(" ");W.value=c1(G,J,L,!0),X=J}else Z.value=c1(G,X,U-q,!1)}else if(q+=Z.value.length,Z.value.indexOf(" ")!=-1)J=X;X++}G.push({type:a_});var j=null;for(var v=0;v<G.length;v++){var P=G[v];switch(P.type){case c_:j=P;break;case a_:if(j){var C=j.value.split("");while(C.length&&C[C.length-1]==" ")C.pop();j.value=C.join("")}j=null;break}}return G.pop(),G}function c1(G,U,X,q){var J={type:a_},Z={type:c_,value:G[U].value.substring(X+(q?1:0))};return G.splice(U+1,0,J,Z),G[U].value.substring(0,X)}var a6=Object.freeze({__proto__:null,TYPE_TEXT:c_,TYPE_NEWLINE:a_,TYPE_FG:b0,TYPE_BG:v0,measure:o6,tokenize:P0}),M0=80,C0=25,U_={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},i6={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},e6={hex:h,rect:E,tile:m,"tile-gl":e,term:Jw},t6={width:M0,height:C0,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},q1=function(){function G(X){if(X===void 0)X={};this._data={},this._dirty=!1,this._options={},X=Object.assign({},t6,X),this.setOptions(X),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var U=G.prototype;return U.DEBUG=function(q,J,Z){var V=[this._options.bg,this._options.fg];this.draw(q,J,null,null,V[Z%V.length])},U.clear=function(){this._data={},this._dirty=!0},U.setOptions=function(q){if(Object.assign(this._options,q),q.width||q.height||q.fontSize||q.fontFamily||q.spacing||q.layout){if(q.layout){var J=e6[q.layout];this._backend=new J}this._backend.setOptions(this._options),this._dirty=!0}return this},U.getOptions=function(){return this._options},U.getContainer=function(){return this._backend.getContainer()},U.computeSize=function(q,J){return this._backend.computeSize(q,J)},U.computeFontSize=function(q,J){return this._backend.computeFontSize(q,J)},U.computeTileSize=function(q,J){var Z=Math.floor(q/this._options.width),V=Math.floor(J/this._options.height);return[Z,V]},U.eventToPosition=function(q){var J,Z;if("touches"in q)J=q.touches[0].clientX,Z=q.touches[0].clientY;else J=q.clientX,Z=q.clientY;return this._backend.eventToPosition(J,Z)},U.draw=function(q,J,Z,V,z){if(!V)V=this._options.fg;if(!z)z=this._options.bg;var Y=q+","+J;if(this._data[Y]=[q,J,Z,V,z],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[Y]=!0},U.drawOver=function(q,J,Z,V,z){var Y=q+","+J,H=this._data[Y];if(H)H[2]=Z||H[2],H[3]=V||H[3],H[4]=z||H[4];else this.draw(q,J,Z,V,z)},U.drawText=function(q,J,Z,V){var z=null,Y=null,H=q,W=J,L=1;if(!V)V=this._options.width-q;var j=P0(Z,V);while(j.length){var v=j.shift();switch(v.type){case c_:var P=!1,C=!1,O=!1,N=!1;for(var T=0;T<v.value.length;T++){var l=v.value.charCodeAt(T),d=v.value.charAt(T);if(this._options.layout==="term"){var i=l>>8,t=i===17||i>=46&&i<=159||i>=172&&i<=215||l>=43360&&l<=43391;if(t){this.draw(H+0,W,d,z,Y),this.draw(H+1,W,"\t",z,Y),H+=2;continue}}if(O=l>65280&&l<65377||l>65500&&l<65512||l>65518,P=d.charCodeAt(0)==32||d.charCodeAt(0)==12288,N&&!O&&!P)H++;if(O&&!C)H++;this.draw(H++,W,d,z,Y),C=P,N=O}break;case b0:z=v.value||null;break;case v0:Y=v.value||null;break;case a_:H=q,W++,L++;break}}return L},U._tick=function(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var q in this._data)this._draw(q,!1)}else for(var J in this._dirty)this._draw(J,!0);this._dirty=!1},U._draw=function(q,J){var Z=this._data[q];if(Z[4]!=this._options.bg)J=!0;this._backend.draw(Z,J)},G}();q1.Rect=E,q1.Hex=h,q1.Tile=m,q1.TileGL=e,q1.Term=Jw;var _8=function(){function G(X){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,X),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var q=0;q<this._options.order;q++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var U=G.prototype;return U.clear=function(){this._data={},this._priorValues={}},U.generate=function(){var q=[this._sample(this._prefix)];while(q[q.length-1]!=this._boundary)q.push(this._sample(q));return this._join(q.slice(0,-1))},U.observe=function(q){var J=this._split(q);for(var Z=0;Z<J.length;Z++)this._priorValues[J[Z]]=this._options.prior;J=this._prefix.concat(J).concat(this._suffix);for(var V=this._options.order;V<J.length;V++){var z=J.slice(V-this._options.order,V),Y=J[V];for(var H=0;H<z.length;H++){var W=z.slice(H);this._observeEvent(W,Y)}}},U.getStats=function(){var q=[],J=Object.keys(this._priorValues).length;J--,q.push("distinct samples: "+J);var Z=Object.keys(this._data).length,V=0;for(var z in this._data)V+=Object.keys(this._data[z]).length;return q.push("dictionary size (contexts): "+Z),q.push("dictionary size (events): "+V),q.join(", ")},U._split=function(q){return q.split(this._options.words?/\s+/:"")},U._join=function(q){return q.join(this._options.words?" ":"")},U._observeEvent=function(q,J){var Z=this._join(q);if(!(Z in this._data))this._data[Z]={};var V=this._data[Z];if(!(J in V))V[J]=0;V[J]++},U._sample=function(q){q=this._backoff(q);var J=this._join(q),Z=this._data[J],V={};if(this._options.prior){for(var z in this._priorValues)V[z]=this._priorValues[z];for(var Y in Z)V[Y]+=Z[Y]}else V=Z;return K.getWeightedValue(V)},U._backoff=function(q){if(q.length>this._options.order)q=q.slice(-this._options.order);else if(q.length<this._options.order)q=this._prefix.slice(0,this._options.order-q.length).concat(q);while(!(this._join(q)in this._data)&&q.length>0)q=q.slice(1);return q},G}(),Qw=function(){function G(){this.heap=[],this.timestamp=0}var U=G.prototype;return U.lessThan=function(q,J){return q.key==J.key?q.timestamp<J.timestamp:q.key<J.key},U.shift=function(q){this.heap=this.heap.map(function(J){var{key:Z,value:V,timestamp:z}=J;return{key:Z+q,value:V,timestamp:z}})},U.len=function(){return this.heap.length},U.push=function(q,J){this.timestamp+=1;var Z=this.len();this.heap.push({value:q,timestamp:this.timestamp,key:J}),this.updateUp(Z)},U.pop=function(){if(this.len()==0)throw Error("no element to pop");var q=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return q},U.find=function(q){for(var J=0;J<this.len();J++)if(q==this.heap[J].value)return this.heap[J];return null},U.remove=function(q){var J=null;for(var Z=0;Z<this.len();Z++)if(q==this.heap[Z].value)J=Z;if(J===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=q)this.heap[J]=V,this.updateDown(J);return!0}else this.heap.pop();return!0},U.parentNode=function(q){return Math.floor((q-1)/2)},U.leftChildNode=function(q){return 2*q+1},U.rightChildNode=function(q){return 2*q+2},U.existNode=function(q){return q>=0&&q<this.heap.length},U.swap=function(q,J){var Z=this.heap[q];this.heap[q]=this.heap[J],this.heap[J]=Z},U.minNode=function(q){var J=q.filter(this.existNode.bind(this)),Z=J[0];for(var V=B7(J),z;!(z=V()).done;){var Y=z.value;if(this.lessThan(this.heap[Y],this.heap[Z]))Z=Y}return Z},U.updateUp=function(q){if(q==0)return;var J=this.parentNode(q);if(this.existNode(J)&&this.lessThan(this.heap[q],this.heap[J]))this.swap(q,J),this.updateUp(J)},U.updateDown=function(q){var J=this.leftChildNode(q),Z=this.rightChildNode(q);if(!this.existNode(J))return;var V=this.minNode([q,J,Z]);if(V!=q)this.swap(q,V),this.updateDown(V)},U.debugPrint=function(){console.log(this.heap)},G}(),Zw=function(){function G(){this._time=0,this._events=new Qw}var U=G.prototype;return U.getTime=function(){return this._time},U.clear=function(){return this._events=new Qw,this},U.add=function(q,J){this._events.push(q,J)},U.get=function(){if(!this._events.len())return null;var q=this._events.pop(),J=q.key,Z=q.value;if(J>0)this._time+=J,this._events.shift(-J);return Z},U.getEventTime=function(q){var J=this._events.find(q);if(J){var Z=J.key;return Z}return},U.remove=function(q){return this._events.remove(q)},G}(),O0=function(){function G(){this._queue=new Zw,this._repeat=[],this._current=null}var U=G.prototype;return U.getTime=function(){return this._queue.getTime()},U.add=function(q,J){if(J)this._repeat.push(q);return this},U.getTimeOf=function(q){return this._queue.getEventTime(q)},U.clear=function(){return this._queue.clear(),this._repeat=[],this._current=null,this},U.remove=function(q){var J=this._queue.remove(q),Z=this._repeat.indexOf(q);if(Z!=-1)this._repeat.splice(Z,1);if(this._current==q)this._current=null;return J},U.next=function(){return this._current=this._queue.get(),this._current},G}(),w8=function(G){Z_(U,G);function U(){return G.apply(this,arguments)||this}var X=U.prototype;return X.add=function(J,Z){return this._queue.add(J,0),G.prototype.add.call(this,J,Z)},X.next=function(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return G.prototype.next.call(this)},U}(O0),J8=function(G){Z_(U,G);function U(){return G.apply(this,arguments)||this}var X=U.prototype;return X.add=function(J,Z,V){return this._queue.add(J,V!==void 0?V:1/J.getSpeed()),G.prototype.add.call(this,J,Z)},X.next=function(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return G.prototype.next.call(this)},U}(O0),Q8=function(G){Z_(U,G);function U(){var q=G.call(this)||this;return q._defaultDuration=1,q._duration=q._defaultDuration,q}var X=U.prototype;return X.add=function(J,Z,V){return this._queue.add(J,V||this._defaultDuration),G.prototype.add.call(this,J,Z)},X.clear=function(){return this._duration=this._defaultDuration,G.prototype.clear.call(this)},X.remove=function(J){if(J==this._current)this._duration=this._defaultDuration;return G.prototype.remove.call(this,J)},X.next=function(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return G.prototype.next.call(this)},X.setDuration=function(J){if(this._current)this._duration=J;return this},U}(O0),Z8={Simple:w8,Speed:J8,Action:Q8},k0=function(){function G(X,q){if(q===void 0)q={};this._lightPasses=X,this._options=Object.assign({topology:8},q)}var U=G.prototype;return U._getCircle=function(q,J,Z){var V=[],z,Y,H;switch(this._options.topology){case 4:Y=1,H=[0,1],z=[U_[8][7],U_[8][1],U_[8][3],U_[8][5]];break;case 6:z=U_[6],Y=1,H=[-1,1];break;case 8:z=U_[4],Y=2,H=[-1,1];break;default:throw Error("Incorrect topology for FOV computation")}var W=q+H[0]*Z,L=J+H[1]*Z;for(var j=0;j<z.length;j++)for(var v=0;v<Z*Y;v++)V.push([W,L]),W+=z[j][0],L+=z[j][1];return V},G}(),K8=function(G){Z_(U,G);function U(){return G.apply(this,arguments)||this}var X=U.prototype;return X.compute=function(J,Z,V,z){if(z(J,Z,0,1),!this._lightPasses(J,Z))return;var Y=[],H,W,L,j,v;for(var P=1;P<=V;P++){var C=this._getCircle(J,Z,P),O=360/C.length;for(var N=0;N<C.length;N++){if(L=C[N][0],j=C[N][1],H=O*(N-0.5),W=H+O,v=!this._lightPasses(L,j),this._visibleCoords(Math.floor(H),Math.ceil(W),v,Y))z(L,j,P,1);if(Y.length==2&&Y[0]==0&&Y[1]==360)return}}},X._visibleCoords=function(J,Z,V,z){if(J<0){var Y=this._visibleCoords(0,Z,V,z),H=this._visibleCoords(360+J,360,V,z);return Y||H}var W=0;while(W<z.length&&z[W]<J)W++;if(W==z.length){if(V)z.push(J,Z);return!0}var L=0;if(W%2){while(W<z.length&&z[W]<Z)W++,L++;if(L==0)return!1;if(V)if(L%2)z.splice(W-L,L,Z);else z.splice(W-L,L);return!0}else{while(W<z.length&&z[W]<Z)W++,L++;if(J==z[W-L]&&L==1)return!1;if(V)if(L%2)z.splice(W-L,L,J);else z.splice(W-L,L,J,Z);return!0}},U}(k0),V8=function(G){Z_(U,G);function U(){return G.apply(this,arguments)||this}var X=U.prototype;return X.compute=function(J,Z,V,z){if(z(J,Z,0,1),!this._lightPasses(J,Z))return;var Y=[],H,W,L,j,v,P;for(var C=1;C<=V;C++){var O=this._getCircle(J,Z,C),N=O.length;for(var T=0;T<N;T++){if(H=O[T][0],W=O[T][1],j=[T?2*T-1:2*N-1,2*N],v=[2*T+1,2*N],L=!this._lightPasses(H,W),P=this._checkVisibility(j,v,L,Y),P)z(H,W,C,P);if(Y.length==2&&Y[0][0]==0&&Y[1][0]==Y[1][1])return}}},X._checkVisibility=function(J,Z,V,z){if(J[0]>Z[0]){var Y=this._checkVisibility(J,[J[1],J[1]],V,z),H=this._checkVisibility([0,1],Z,V,z);return(Y+H)/2}var W=0,L=!1;while(W<z.length){var j=z[W],v=j[0]*J[1]-J[0]*j[1];if(v>=0){if(v==0&&!(W%2))L=!0;break}W++}var P=z.length,C=!1;while(P--){var O=z[P],N=Z[0]*O[1]-O[0]*Z[1];if(N>=0){if(N==0&&P%2)C=!0;break}}var T=!0;if(W==P&&(L||C))T=!1;else if(L&&C&&W+1==P&&P%2)T=!1;else if(W>P&&W%2)T=!1;if(!T)return 0;var l,d=P-W+1;if(d%2)if(W%2){var i=z[W];if(l=(Z[0]*i[1]-i[0]*Z[1])/(i[1]*Z[1]),V)z.splice(W,d,Z)}else{var t=z[P];if(l=(t[0]*J[1]-J[0]*t[1])/(J[1]*t[1]),V)z.splice(W,d,J)}else if(W%2){var K_=z[W],L_=z[P];if(l=(L_[0]*K_[1]-K_[0]*L_[1])/(K_[1]*L_[1]),V)z.splice(W,d)}else{if(V)z.splice(W,d,J,Z);return 1}var I_=(Z[0]*J[1]-J[0]*Z[1])/(J[1]*Z[1]);return l/I_},U}(k0),p_=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],q8=function(G){Z_(U,G);function U(){return G.apply(this,arguments)||this}var X=U.prototype;return X.compute=function(J,Z,V,z){z(J,Z,0,1);for(var Y=0;Y<p_.length;Y++)this._renderOctant(J,Z,p_[Y],V,z)},X.compute180=function(J,Z,V,z,Y){Y(J,Z,0,1);var H=(z-1+8)%8,W=(z-2+8)%8,L=(z+1+8)%8;this._renderOctant(J,Z,p_[W],V,Y),this._renderOctant(J,Z,p_[H],V,Y),this._renderOctant(J,Z,p_[z],V,Y),this._renderOctant(J,Z,p_[L],V,Y)},X.compute90=function(J,Z,V,z,Y){Y(J,Z,0,1);var H=(z-1+8)%8;this._renderOctant(J,Z,p_[z],V,Y),this._renderOctant(J,Z,p_[H],V,Y)},X._renderOctant=function(J,Z,V,z,Y){this._castVisibility(J,Z,1,1,0,z+1,V[0],V[1],V[2],V[3],Y)},X._castVisibility=function(J,Z,V,z,Y,H,W,L,j,v,P){if(z<Y)return;for(var C=V;C<=H;C++){var O=-C-1,N=-C,T=!1,l=0;while(O<=0){O+=1;var d=J+O*W+N*L,i=Z+O*j+N*v,t=(O-0.5)/(N+0.5),K_=(O+0.5)/(N-0.5);if(K_>z)continue;if(t<Y)break;if(O*O+N*N<H*H)P(d,i,C,1);if(!T){if(!this._lightPasses(d,i)&&C<H)T=!0,this._castVisibility(J,Z,C+1,z,t,H,W,L,j,v,P),l=K_}else{if(!this._lightPasses(d,i)){l=K_;continue}T=!1,z=l}}if(T)break}},U}(k0),z8={DiscreteShadowcasting:K8,PreciseShadowcasting:V8,RecursiveShadowcasting:q8},i_=function(){function G(X,q){if(X===void 0)X=M0;if(q===void 0)q=C0;this._width=X,this._height=q}var U=G.prototype;return U._fillMap=function(q){var J=[];for(var Z=0;Z<this._width;Z++){J.push([]);for(var V=0;V<this._height;V++)J[Z].push(q)}return J},G}(),$8=function(G){Z_(U,G);function U(){return G.apply(this,arguments)||this}var X=U.prototype;return X.create=function(J){var Z=this._width-1,V=this._height-1;for(var z=0;z<=Z;z++)for(var Y=0;Y<=V;Y++){var H=z&&Y&&z<Z&&Y<V;J(z,Y,H?0:1)}return this},U}(i_),Kw=function(G){Z_(U,G);function U(q,J){var Z=G.call(this,q,J)||this;return Z._rooms=[],Z._corridors=[],Z}var X=U.prototype;return X.getRooms=function(){return this._rooms},X.getCorridors=function(){return this._corridors},U}(i_),Vw=function(){},p1=function(G){Z_(U,G);function U(q,J,Z,V,z,Y){var H=G.call(this)||this;if(H._x1=q,H._y1=J,H._x2=Z,H._y2=V,H._doors={},z!==void 0&&Y!==void 0)H.addDoor(z,Y);return H}U.createRandomAt=function(J,Z,V,z,Y){var H=Y.roomWidth[0],W=Y.roomWidth[1],L=K.getUniformInt(H,W);H=Y.roomHeight[0],W=Y.roomHeight[1];var j=K.getUniformInt(H,W);if(V==1){var v=Z-Math.floor(K.getUniform()*j);return new this(J+1,v,J+L,v+j-1,J,Z)}if(V==-1){var P=Z-Math.floor(K.getUniform()*j);return new this(J-L,P,J-1,P+j-1,J,Z)}if(z==1){var C=J-Math.floor(K.getUniform()*L);return new this(C,Z+1,C+L-1,Z+j,J,Z)}if(z==-1){var O=J-Math.floor(K.getUniform()*L);return new this(O,Z-j,O+L-1,Z-1,J,Z)}throw Error("dx or dy must be 1 or -1")},U.createRandomCenter=function(J,Z,V){var z=V.roomWidth[0],Y=V.roomWidth[1],H=K.getUniformInt(z,Y);z=V.roomHeight[0],Y=V.roomHeight[1];var W=K.getUniformInt(z,Y),L=J-Math.floor(K.getUniform()*H),j=Z-Math.floor(K.getUniform()*W),v=L+H-1,P=j+W-1;return new this(L,j,v,P)},U.createRandom=function(J,Z,V){var z=V.roomWidth[0],Y=V.roomWidth[1],H=K.getUniformInt(z,Y);z=V.roomHeight[0],Y=V.roomHeight[1];var W=K.getUniformInt(z,Y),L=J-H-1,j=Z-W-1,v=1+Math.floor(K.getUniform()*L),P=1+Math.floor(K.getUniform()*j),C=v+H-1,O=P+W-1;return new this(v,P,C,O)};var X=U.prototype;return X.addDoor=function(J,Z){return this._doors[J+","+Z]=1,this},X.getDoors=function(J){for(var Z in this._doors){var V=Z.split(",");J(parseInt(V[0]),parseInt(V[1]))}return this},X.clearDoors=function(){return this._doors={},this},X.addDoors=function(J){var Z=this._x1-1,V=this._x2+1,z=this._y1-1,Y=this._y2+1;for(var H=Z;H<=V;H++)for(var W=z;W<=Y;W++){if(H!=Z&&H!=V&&W!=z&&W!=Y)continue;if(J(H,W))continue;this.addDoor(H,W)}return this},X.debug=function(){console.log("room",this._x1,this._y1,this._x2,this._y2)},X.isValid=function(J,Z){var V=this._x1-1,z=this._x2+1,Y=this._y1-1,H=this._y2+1;for(var W=V;W<=z;W++)for(var L=Y;L<=H;L++)if(W==V||W==z||L==Y||L==H){if(!J(W,L))return!1}else if(!Z(W,L))return!1;return!0},X.create=function(J){var Z=this._x1-1,V=this._x2+1,z=this._y1-1,Y=this._y2+1,H=0;for(var W=Z;W<=V;W++)for(var L=z;L<=Y;L++){if(W+","+L in this._doors)H=2;else if(W==Z||W==V||L==z||L==Y)H=1;else H=0;J(W,L,H)}},X.getCenter=function(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},X.getLeft=function(){return this._x1},X.getRight=function(){return this._x2},X.getTop=function(){return this._y1},X.getBottom=function(){return this._y2},U}(Vw),f0=function(G){Z_(U,G);function U(q,J,Z,V){var z=G.call(this)||this;return z._startX=q,z._startY=J,z._endX=Z,z._endY=V,z._endsWithAWall=!0,z}U.createRandomAt=function(J,Z,V,z,Y){var H=Y.corridorLength[0],W=Y.corridorLength[1],L=K.getUniformInt(H,W);return new this(J,Z,J+V*L,Z+z*L)};var X=U.prototype;return X.debug=function(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},X.isValid=function(J,Z){var V=this._startX,z=this._startY,Y=this._endX-V,H=this._endY-z,W=1+Math.max(Math.abs(Y),Math.abs(H));if(Y)Y=Y/Math.abs(Y);if(H)H=H/Math.abs(H);var L=H,j=-Y,v=!0;for(var P=0;P<W;P++){var C=V+P*Y,O=z+P*H;if(!Z(C,O))v=!1;if(!J(C+L,O+j))v=!1;if(!J(C-L,O-j))v=!1;if(!v){W=P,this._endX=C-Y,this._endY=O-H;break}}if(W==0)return!1;if(W==1&&J(this._endX+Y,this._endY+H))return!1;var N=!J(this._endX+Y+L,this._endY+H+j),T=!J(this._endX+Y-L,this._endY+H-j);if(this._endsWithAWall=J(this._endX+Y,this._endY+H),(N||T)&&this._endsWithAWall)return!1;return!0},X.create=function(J){var Z=this._startX,V=this._startY,z=this._endX-Z,Y=this._endY-V,H=1+Math.max(Math.abs(z),Math.abs(Y));if(z)z=z/Math.abs(z);if(Y)Y=Y/Math.abs(Y);for(var W=0;W<H;W++){var L=Z+W*z,j=V+W*Y;J(L,j,0)}return!0},X.createPriorityWalls=function(J){if(!this._endsWithAWall)return;var Z=this._startX,V=this._startY,z=this._endX-Z,Y=this._endY-V;if(z)z=z/Math.abs(z);if(Y)Y=Y/Math.abs(Y);var H=Y,W=-z;J(this._endX+z,this._endY+Y),J(this._endX+H,this._endY+W),J(this._endX-H,this._endY-W)},U}(Vw),X8=function(G){Z_(U,G);function U(q,J,Z){var V=G.call(this,q,J)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Z),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(w1(V)),V._canBeDugCallback=V._canBeDugCallback.bind(w1(V)),V._isWallCallback=V._isWallCallback.bind(w1(V)),V}var X=U.prototype;return X.create=function(J){var Z=Date.now();while(!0){var V=Date.now();if(V-Z>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(J)for(var z=0;z<this._width;z++)for(var Y=0;Y<this._height;Y++)J(z,Y,this._map[z][Y]);return this},X._generateRooms=function(){var J=this._width-2,Z=this._height-2,V;do if(V=this._generateRoom(),this._dug/(J*Z)>this._options.roomDugPercentage)break;while(V)},X._generateRoom=function(){var J=0;while(J<this._roomAttempts){J++;var Z=p1.createRandom(this._width,this._height,this._options);if(!Z.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Z.create(this._digCallback),this._rooms.push(Z),Z}return null},X._generateCorridors=function(){var J=0;while(J<this._corridorAttempts){J++,this._corridors=[],this._map=this._fillMap(1);for(var Z=0;Z<this._rooms.length;Z++){var V=this._rooms[Z];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=K.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var z=K.getItem(this._connected);if(!z)break;var Y=this._closestRoom(this._unconnected,z);if(!Y)break;var H=this._closestRoom(this._connected,Y);if(!H)break;var W=this._connectRooms(Y,H);if(!W)break;if(!this._unconnected.length)return!0}}return!1},X._closestRoom=function(J,Z){var V=1/0,z=Z.getCenter(),Y=null;for(var H=0;H<J.length;H++){var W=J[H],L=W.getCenter(),j=L[0]-z[0],v=L[1]-z[1],P=j*j+v*v;if(P<V)V=P,Y=W}return Y},X._connectRooms=function(J,Z){var V=J.getCenter(),z=Z.getCenter(),Y=z[0]-V[0],H=z[1]-V[1],W,L,j,v,P,C,O;if(Math.abs(Y)<Math.abs(H))j=H>0?2:0,v=(j+2)%4,P=Z.getLeft(),C=Z.getRight(),O=0;else j=Y>0?1:3,v=(j+2)%4,P=Z.getTop(),C=Z.getBottom(),O=1;if(W=this._placeInWall(J,j),!W)return!1;if(W[O]>=P&&W[O]<=C){L=W.slice();var N=0;switch(v){case 0:N=Z.getTop()-1;break;case 1:N=Z.getRight()+1;break;case 2:N=Z.getBottom()+1;break;case 3:N=Z.getLeft()-1;break}L[(O+1)%2]=N,this._digLine([W,L])}else if(W[O]<P-1||W[O]>C+1){var T=W[O]-z[O],l=0;switch(v){case 0:case 1:l=T<0?3:1;break;case 2:case 3:l=T<0?1:3;break}if(v=(v+l)%4,L=this._placeInWall(Z,v),!L)return!1;var d=[0,0];d[O]=W[O];var i=(O+1)%2;d[i]=L[i],this._digLine([W,d,L])}else{var t=(O+1)%2;if(L=this._placeInWall(Z,v),!L)return!1;var K_=Math.round((L[t]+W[t])/2),L_=[0,0],I_=[0,0];L_[O]=W[O],L_[t]=K_,I_[O]=L[O],I_[t]=K_,this._digLine([W,L_,I_,L])}if(J.addDoor(W[0],W[1]),Z.addDoor(L[0],L[1]),O=this._unconnected.indexOf(J),O!=-1)this._unconnected.splice(O,1),this._connected.push(J);if(O=this._unconnected.indexOf(Z),O!=-1)this._unconnected.splice(O,1),this._connected.push(Z);return!0},X._placeInWall=function(J,Z){var V=[0,0],z=[0,0],Y=0;switch(Z){case 0:z=[1,0],V=[J.getLeft(),J.getTop()-1],Y=J.getRight()-J.getLeft()+1;break;case 1:z=[0,1],V=[J.getRight()+1,J.getTop()],Y=J.getBottom()-J.getTop()+1;break;case 2:z=[1,0],V=[J.getLeft(),J.getBottom()+1],Y=J.getRight()-J.getLeft()+1;break;case 3:z=[0,1],V=[J.getLeft()-1,J.getTop()],Y=J.getBottom()-J.getTop()+1;break}var H=[],W=-2;for(var L=0;L<Y;L++){var j=V[0]+L*z[0],v=V[1]+L*z[1];H.push(null);var P=this._map[j][v]==1;if(P){if(W!=L-1)H[L]=[j,v]}else if(W=L,L)H[L-1]=null}for(var C=H.length-1;C>=0;C--)if(!H[C])H.splice(C,1);return H.length?K.getItem(H):null},X._digLine=function(J){for(var Z=1;Z<J.length;Z++){var V=J[Z-1],z=J[Z],Y=new f0(V[0],V[1],z[0],z[1]);Y.create(this._digCallback),this._corridors.push(Y)}},X._digCallback=function(J,Z,V){if(this._map[J][Z]=V,V==0)this._dug++},X._isWallCallback=function(J,Z){if(J<0||Z<0||J>=this._width||Z>=this._height)return!1;return this._map[J][Z]==1},X._canBeDugCallback=function(J,Z){if(J<1||Z<1||J+1>=this._width||Z+1>=this._height)return!1;return this._map[J][Z]==1},U}(Kw),Y8=function(G){Z_(U,G);function U(q,J,Z){var V;if(Z===void 0)Z={};return V=G.call(this,q,J)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Z),V._dirs=U_[V._options.topology],V._map=V._fillMap(0),V}var X=U.prototype;return X.randomize=function(J){for(var Z=0;Z<this._width;Z++)for(var V=0;V<this._height;V++)this._map[Z][V]=K.getUniform()<J?1:0;return this},X.setOptions=function(J){Object.assign(this._options,J)},X.set=function(J,Z,V){this._map[J][Z]=V},X.create=function(J){var Z=this._fillMap(0),V=this._options.born,z=this._options.survive;for(var Y=0;Y<this._height;Y++){var H=1,W=0;if(this._options.topology==6)H=2,W=Y%2;for(var L=W;L<this._width;L+=H){var j=this._map[L][Y],v=this._getNeighbors(L,Y);if(j&&z.indexOf(v)!=-1)Z[L][Y]=1;else if(!j&&V.indexOf(v)!=-1)Z[L][Y]=1}}this._map=Z,J&&this._serviceCallback(J)},X._serviceCallback=function(J){for(var Z=0;Z<this._height;Z++){var V=1,z=0;if(this._options.topology==6)V=2,z=Z%2;for(var Y=z;Y<this._width;Y+=V)J(Y,Z,this._map[Y][Z])}},X._getNeighbors=function(J,Z){var V=0;for(var z=0;z<this._dirs.length;z++){var Y=this._dirs[z],H=J+Y[0],W=Z+Y[1];if(H<0||H>=this._width||W<0||W>=this._height)continue;V+=this._map[H][W]==1?1:0}return V},X.connect=function(J,Z,V){if(!Z)Z=0;var z=[],Y={},H=1,W=[0,0];if(this._options.topology==6)H=2,W=[0,1];for(var L=0;L<this._height;L++)for(var j=W[L%2];j<this._width;j+=H)if(this._freeSpace(j,L,Z)){var v=[j,L];Y[this._pointKey(v)]=v,z.push([j,L])}var P=z[K.getUniformInt(0,z.length-1)],C=this._pointKey(P),O={};O[C]=P,delete Y[C],this._findConnected(O,Y,[P],!1,Z);while(Object.keys(Y).length>0){var N=this._getFromTo(O,Y),T=N[0],l=N[1],d={};d[this._pointKey(T)]=T,this._findConnected(d,Y,[T],!0,Z);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,l,T,O,Y,Z,V);for(var t in d){var K_=d[t];this._map[K_[0]][K_[1]]=Z,O[t]=K_,delete Y[t]}}J&&this._serviceCallback(J)},X._getFromTo=function(J,Z){var V=[0,0],z=[0,0],Y,H=Object.keys(J),W=Object.keys(Z);for(var L=0;L<5;L++){if(H.length<W.length){var j=H;z=J[j[K.getUniformInt(0,j.length-1)]],V=this._getClosest(z,Z)}else{var v=W;V=Z[v[K.getUniformInt(0,v.length-1)]],z=this._getClosest(V,J)}if(Y=(V[0]-z[0])*(V[0]-z[0])+(V[1]-z[1])*(V[1]-z[1]),Y<64)break}return[V,z]},X._getClosest=function(J,Z){var V=null,z=null;for(var Y in Z){var H=Z[Y],W=(H[0]-J[0])*(H[0]-J[0])+(H[1]-J[1])*(H[1]-J[1]);if(z==null||W<z)z=W,V=H}return V},X._findConnected=function(J,Z,V,z,Y){while(V.length>0){var H=V.splice(0,1)[0],W=void 0;if(this._options.topology==6)W=[[H[0]+2,H[1]],[H[0]+1,H[1]-1],[H[0]-1,H[1]-1],[H[0]-2,H[1]],[H[0]-1,H[1]+1],[H[0]+1,H[1]+1]];else W=[[H[0]+1,H[1]],[H[0]-1,H[1]],[H[0],H[1]+1],[H[0],H[1]-1]];for(var L=0;L<W.length;L++){var j=this._pointKey(W[L]);if(J[j]==null&&this._freeSpace(W[L][0],W[L][1],Y)){if(J[j]=W[L],!z)delete Z[j];V.push(W[L])}}}},X._tunnelToConnected=function(J,Z,V,z,Y,H){var W,L;if(Z[0]<J[0])W=Z,L=J;else W=J,L=Z;for(var j=W[0];j<=L[0];j++){this._map[j][W[1]]=Y;var v=[j,W[1]],P=this._pointKey(v);V[P]=v,delete z[P]}if(H&&W[0]<L[0])H(W,[L[0],W[1]]);var C=L[0];if(Z[1]<J[1])W=Z,L=J;else W=J,L=Z;for(var O=W[1];O<L[1];O++){this._map[C][O]=Y;var N=[C,O],T=this._pointKey(N);V[T]=N,delete z[T]}if(H&&W[1]<L[1])H([L[0],W[1]],[L[0],L[1]])},X._tunnelToConnected6=function(J,Z,V,z,Y,H){var W,L;if(Z[0]<J[0])W=Z,L=J;else W=J,L=Z;var j=W[0],v=W[1];while(!(j==L[0]&&v==L[1])){var P=2;if(v<L[1])v++,P=1;else if(v>L[1])v--,P=1;if(j<L[0])j+=P;else if(j>L[0])j-=P;else if(L[1]%2)j-=P;else j+=P;this._map[j][v]=Y;var C=[j,v],O=this._pointKey(C);V[O]=C,delete z[O]}if(H)H(Z,J)},X._freeSpace=function(J,Z,V){return J>=0&&J<this._width&&Z>=0&&Z<this._height&&this._map[J][Z]==V},X._pointKey=function(J){return J[0]+"."+J[1]},U}(i_),U8={room:p1,corridor:f0},G8=function(G){Z_(U,G);function U(q,J,Z){var V;if(Z===void 0)Z={};return V=G.call(this,q,J)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Z),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(w1(V)),V._canBeDugCallback=V._canBeDugCallback.bind(w1(V)),V._isWallCallback=V._isWallCallback.bind(w1(V)),V._priorityWallCallback=V._priorityWallCallback.bind(w1(V)),V}var X=U.prototype;return X.create=function(J){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Z=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),z;do{z=0;var Y=Date.now();if(Y-V>this._options.timeLimit)break;var H=this._findWall();if(!H)break;var W=H.split(","),L=parseInt(W[0]),j=parseInt(W[1]),v=this._getDiggingDirection(L,j);if(!v)continue;var P=0;do if(P++,this._tryFeature(L,j,v[0],v[1])){this._removeSurroundingWalls(L,j),this._removeSurroundingWalls(L-v[0],j-v[1]);break}while(P<this._featureAttempts);for(var C in this._walls)if(this._walls[C]>1)z++}while(this._dug/Z<this._options.dugPercentage||z);if(this._addDoors(),J)for(var O=0;O<this._width;O++)for(var N=0;N<this._height;N++)J(O,N,this._map[O][N]);return this._walls={},this._map=[],this},X._digCallback=function(J,Z,V){if(V==0||V==2)this._map[J][Z]=0,this._dug++;else this._walls[J+","+Z]=1},X._isWallCallback=function(J,Z){if(J<0||Z<0||J>=this._width||Z>=this._height)return!1;return this._map[J][Z]==1},X._canBeDugCallback=function(J,Z){if(J<1||Z<1||J+1>=this._width||Z+1>=this._height)return!1;return this._map[J][Z]==1},X._priorityWallCallback=function(J,Z){this._walls[J+","+Z]=2},X._firstRoom=function(){var J=Math.floor(this._width/2),Z=Math.floor(this._height/2),V=p1.createRandomCenter(J,Z,this._options);this._rooms.push(V),V.create(this._digCallback)},X._findWall=function(){var J=[],Z=[];for(var V in this._walls){var z=this._walls[V];if(z==2)Z.push(V);else J.push(V)}var Y=Z.length?Z:J;if(!Y.length)return null;var H=K.getItem(Y.sort());return delete this._walls[H],H},X._tryFeature=function(J,Z,V,z){var Y=K.getWeightedValue(this._features),H=U8[Y],W=H.createRandomAt(J,Z,V,z,this._options);if(!W.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(W.create(this._digCallback),W instanceof p1)this._rooms.push(W);if(W instanceof f0)W.createPriorityWalls(this._priorityWallCallback),this._corridors.push(W);return!0},X._removeSurroundingWalls=function(J,Z){var V=U_[4];for(var z=0;z<V.length;z++){var Y=V[z],H=J+Y[0],W=Z+Y[1];delete this._walls[H+","+W],H=J+2*Y[0],W=Z+2*Y[1],delete this._walls[H+","+W]}},X._getDiggingDirection=function(J,Z){if(J<=0||Z<=0||J>=this._width-1||Z>=this._height-1)return null;var V=null,z=U_[4];for(var Y=0;Y<z.length;Y++){var H=z[Y],W=J+H[0],L=Z+H[1];if(!this._map[W][L]){if(V)return null;V=H}}if(!V)return null;return[-V[0],-V[1]]},X._addDoors=function(){var J=this._map;function Z(Y,H){return J[Y][H]==1}for(var V=0;V<this._rooms.length;V++){var z=this._rooms[V];z.clearDoors(),z.addDoors(Z)}},U}(Kw);function qw(G,U,X){X[U[G+1]]=X[G],U[X[G]]=U[G+1],X[G]=G+1,U[G+1]=G}function zw(G,U,X){X[U[G]]=X[G],U[X[G]]=U[G],X[G]=G,U[G]=G}var B8=function(G){Z_(U,G);function U(){return G.apply(this,arguments)||this}var X=U.prototype;return X.create=function(J){var Z=this._fillMap(1),V=Math.ceil((this._width-2)/2),z=0.375,Y=[],H=[];for(var W=0;W<V;W++)Y.push(W),H.push(W);Y.push(V-1);var L;for(L=1;L+3<this._height;L+=2)for(var j=0;j<V;j++){var v=2*j+1,P=L;if(Z[v][P]=0,j!=Y[j+1]&&K.getUniform()>z)qw(j,Y,H),Z[v+1][P]=0;if(j!=Y[j]&&K.getUniform()>z)zw(j,Y,H);else Z[v][P+1]=0}for(var C=0;C<V;C++){var O=2*C+1,N=L;if(Z[O][N]=0,C!=Y[C+1]&&(C==Y[C]||K.getUniform()>z))qw(C,Y,H),Z[O+1][N]=0;zw(C,Y,H)}for(var T=0;T<this._width;T++)for(var l=0;l<this._height;l++)J(T,l,Z[T][l]);return this},U}(i_),W8=function(G){Z_(U,G);function U(){var q=G.apply(this,arguments)||this;return q._stack=[],q._map=[],q}var X=U.prototype;return X.create=function(J){var Z=this._width,V=this._height;this._map=[];for(var z=0;z<Z;z++){this._map.push([]);for(var Y=0;Y<V;Y++){var H=z==0||Y==0||z+1==Z||Y+1==V;this._map[z].push(H?1:0)}}this._stack=[[1,1,Z-2,V-2]],this._process();for(var W=0;W<Z;W++)for(var L=0;L<V;L++)J(W,L,this._map[W][L]);return this._map=[],this},X._process=function(){while(this._stack.length){var J=this._stack.shift();this._partitionRoom(J)}},X._partitionRoom=function(J){var Z=[],V=[];for(var z=J[0]+1;z<J[2];z++){var Y=this._map[z][J[1]-1],H=this._map[z][J[3]+1];if(Y&&H&&!(z%2))Z.push(z)}for(var W=J[1]+1;W<J[3];W++){var L=this._map[J[0]-1][W],j=this._map[J[2]+1][W];if(L&&j&&!(W%2))V.push(W)}if(!Z.length||!V.length)return;var v=K.getItem(Z),P=K.getItem(V);this._map[v][P]=1;var C=[],O=[];C.push(O);for(var N=J[0];N<v;N++)if(this._map[N][P]=1,N%2)O.push([N,P]);O=[],C.push(O);for(var T=v+1;T<=J[2];T++)if(this._map[T][P]=1,T%2)O.push([T,P]);O=[],C.push(O);for(var l=J[1];l<P;l++)if(this._map[v][l]=1,l%2)O.push([v,l]);O=[],C.push(O);for(var d=P+1;d<=J[3];d++)if(this._map[v][d]=1,d%2)O.push([v,d]);var i=K.getItem(C);for(var t=0;t<C.length;t++){var K_=C[t];if(K_==i)continue;var L_=K.getItem(K_);this._map[L_[0]][L_[1]]=0}this._stack.push([J[0],J[1],v-1,P-1]),this._stack.push([v+1,J[1],J[2],P-1]),this._stack.push([J[0],P+1,v-1,J[3]]),this._stack.push([v+1,P+1,J[2],J[3]])},U}(i_),H8=function(G){Z_(U,G);function U(q,J,Z){var V;if(Z===void 0)Z=0;return V=G.call(this,q,J)||this,V._regularity=Z,V._map=[],V}var X=U.prototype;return X.create=function(J){var Z=this._width,V=this._height,z=this._fillMap(1);Z-=Z%2?1:2,V-=V%2?1:2;var Y=0,H=0,W=0,L=0,j=0,v=!1,P=[[0,0],[0,0],[0,0],[0,0]];do{if(Y=1+2*Math.floor(K.getUniform()*(Z-1)/2),H=1+2*Math.floor(K.getUniform()*(V-1)/2),!j)z[Y][H]=0;if(!z[Y][H]){this._randomize(P);do{if(Math.floor(K.getUniform()*(this._regularity+1))==0)this._randomize(P);v=!0;for(var C=0;C<4;C++)if(W=Y+P[C][0]*2,L=H+P[C][1]*2,this._isFree(z,W,L,Z,V)){z[W][L]=0,z[Y+P[C][0]][H+P[C][1]]=0,Y=W,H=L,v=!1,j++;break}}while(!v)}}while(j+1<Z*V/4);for(var O=0;O<this._width;O++)for(var N=0;N<this._height;N++)J(O,N,z[O][N]);return this._map=[],this},X._randomize=function(J){for(var Z=0;Z<4;Z++)J[Z][0]=0,J[Z][1]=0;switch(Math.floor(K.getUniform()*4)){case 0:J[0][0]=-1,J[1][0]=1,J[2][1]=-1,J[3][1]=1;break;case 1:J[3][0]=-1,J[2][0]=1,J[1][1]=-1,J[0][1]=1;break;case 2:J[2][0]=-1,J[3][0]=1,J[0][1]=-1,J[1][1]=1;break;case 3:J[1][0]=-1,J[0][0]=1,J[3][1]=-1,J[2][1]=1;break}},X._isFree=function(J,Z,V,z,Y){if(Z<1||V<1||Z>=z||V>=Y)return!1;return J[Z][V]},U}(i_),L8=function(G){Z_(U,G);function U(q,J,Z){var V=G.call(this,q,J)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Z=Object.assign({cellWidth:3,cellHeight:3},Z),!Z.hasOwnProperty("roomWidth"))Z.roomWidth=V._calculateRoomSize(V._width,Z.cellWidth);if(!Z.hasOwnProperty("roomHeight"))Z.roomHeight=V._calculateRoomSize(V._height,Z.cellHeight);return V._options=Z,V}var X=U.prototype;return X.create=function(J){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),J)for(var Z=0;Z<this._width;Z++)for(var V=0;V<this._height;V++)J(Z,V,this.map[Z][V]);return this},X._calculateRoomSize=function(J,Z){var V=Math.floor(J/Z*0.8),z=Math.floor(J/Z*0.25);if(z<2)z=2;if(V<2)V=2;return[z,V]},X._initRooms=function(){for(var J=0;J<this._options.cellWidth;J++){this.rooms.push([]);for(var Z=0;Z<this._options.cellHeight;Z++)this.rooms[J].push({x:0,y:0,width:0,height:0,connections:[],cellx:J,celly:Z})}},X._connectRooms=function(){var J=K.getUniformInt(0,this._options.cellWidth-1),Z=K.getUniformInt(0,this._options.cellHeight-1),V,z,Y,H=!1,W,L,j;do{j=[0,2,4,6],j=K.shuffle(j);do{if(H=!1,V=j.pop(),z=J+U_[8][V][0],Y=Z+U_[8][V][1],z<0||z>=this._options.cellWidth)continue;if(Y<0||Y>=this._options.cellHeight)continue;if(W=this.rooms[J][Z],W.connections.length>0){if(W.connections[0][0]==z&&W.connections[0][1]==Y)break}if(L=this.rooms[z][Y],L.connections.length==0)L.connections.push([J,Z]),this.connectedCells.push([z,Y]),J=z,Z=Y,H=!0}while(j.length>0&&H==!1)}while(j.length>0)},X._connectUnconnectedRooms=function(){var J=this._options.cellWidth,Z=this._options.cellHeight;this.connectedCells=K.shuffle(this.connectedCells);var V,z,Y;for(var H=0;H<this._options.cellWidth;H++)for(var W=0;W<this._options.cellHeight;W++)if(V=this.rooms[H][W],V.connections.length==0){var L=[0,2,4,6];L=K.shuffle(L),Y=!1;do{var j=L.pop(),v=H+U_[8][j][0],P=W+U_[8][j][1];if(v<0||v>=J||P<0||P>=Z)continue;if(z=this.rooms[v][P],Y=!0,z.connections.length==0)break;for(var C=0;C<z.connections.length;C++)if(z.connections[C][0]==H&&z.connections[C][1]==W){Y=!1;break}if(Y)break}while(L.length);if(Y)V.connections.push([z.cellx,z.celly]);else console.log("-- Unable to connect room.")}},X._createRandomRoomConnections=function(){},X._createRooms=function(){var J=this._width,Z=this._height,V=this._options.cellWidth,z=this._options.cellHeight,Y=Math.floor(this._width/V),H=Math.floor(this._height/z),W,L,j=this._options.roomWidth,v=this._options.roomHeight,P,C,O;for(var N=0;N<V;N++)for(var T=0;T<z;T++){if(P=Y*N,C=H*T,P==0)P=1;if(C==0)C=1;if(W=K.getUniformInt(j[0],j[1]),L=K.getUniformInt(v[0],v[1]),T>0){O=this.rooms[N][T-1];while(C-(O.y+O.height)<3)C++}if(N>0){O=this.rooms[N-1][T];while(P-(O.x+O.width)<3)P++}var l=Math.round(K.getUniformInt(0,Y-W)/2),d=Math.round(K.getUniformInt(0,H-L)/2);while(P+l+W>=J)if(l)l--;else W--;while(C+d+L>=Z)if(d)d--;else L--;P=P+l,C=C+d,this.rooms[N][T].x=P,this.rooms[N][T].y=C,this.rooms[N][T].width=W,this.rooms[N][T].height=L;for(var i=P;i<P+W;i++)for(var t=C;t<C+L;t++)this.map[i][t]=0}},X._getWallPosition=function(J,Z){var V,z,Y;if(Z==1||Z==3){if(V=K.getUniformInt(J.x+1,J.x+J.width-2),Z==1)z=J.y-2,Y=z+1;else z=J.y+J.height+1,Y=z-1;this.map[V][Y]=0}else{if(z=K.getUniformInt(J.y+1,J.y+J.height-2),Z==2)V=J.x+J.width+1,Y=V-1;else V=J.x-2,Y=V+1;this.map[Y][z]=0}return[V,z]},X._drawCorridor=function(J,Z){var V=Z[0]-J[0],z=Z[1]-J[1],Y=J[0],H=J[1],W,L,j,v,P=[],C=Math.abs(V),O=Math.abs(z),N=K.getUniform(),T=N,l=1-N;if(L=V>0?2:6,j=z>0?4:0,C<O)W=Math.ceil(O*T),P.push([j,W]),P.push([L,C]),W=Math.floor(O*l),P.push([j,W]);else W=Math.ceil(C*T),P.push([L,W]),P.push([j,O]),W=Math.floor(C*l),P.push([L,W]);this.map[Y][H]=0;while(P.length>0){v=P.pop();while(v[1]>0)Y+=U_[8][v[0]][0],H+=U_[8][v[0]][1],this.map[Y][H]=0,v[1]=v[1]-1}},X._createCorridors=function(){var J=this._options.cellWidth,Z=this._options.cellHeight,V,z,Y,H,W;for(var L=0;L<J;L++)for(var j=0;j<Z;j++){V=this.rooms[L][j];for(var v=0;v<V.connections.length;v++){if(z=V.connections[v],Y=this.rooms[z[0]][z[1]],Y.cellx>V.cellx)H=2,W=4;else if(Y.cellx<V.cellx)H=4,W=2;else if(Y.celly>V.celly)H=3,W=1;else H=1,W=3;this._drawCorridor(this._getWallPosition(V,H),this._getWallPosition(Y,W))}}},U}(i_),D8={Arena:$8,Uniform:X8,Cellular:Y8,Digger:G8,EllerMaze:B8,DividedMaze:W8,IceyMaze:H8,Rogue:L8},j8=function(){},R8=0.5*(Math.sqrt(3)-1),v1=(3-Math.sqrt(3))/6,F8=function(G){Z_(U,G);function U(q){var J;if(q===void 0)q=256;J=G.call(this)||this,J._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Z=[];for(var V=0;V<q;V++)Z.push(V);Z=K.shuffle(Z),J._perms=[],J._indexes=[];for(var z=0;z<2*q;z++)J._perms.push(Z[z%q]),J._indexes.push(J._perms[z]%J._gradients.length);return J}var X=U.prototype;return X.get=function(J,Z){var V=this._perms,z=this._indexes,Y=V.length/2,H=0,W=0,L=0,j,v=(J+Z)*R8,P=Math.floor(J+v),C=Math.floor(Z+v),O=(P+C)*v1,N=P-O,T=C-O,l=J-N,d=Z-T,i,t;if(l>d)i=1,t=0;else i=0,t=1;var K_=l-i+v1,L_=d-t+v1,I_=l-1+2*v1,A0=d-1+2*v1,S0=R(P,Y),E0=R(C,Y),P1=0.5-l*l-d*d;if(P1>=0){P1*=P1,j=z[S0+V[E0]];var Xw=this._gradients[j];H=P1*P1*(Xw[0]*l+Xw[1]*d)}var M1=0.5-K_*K_-L_*L_;if(M1>=0){M1*=M1,j=z[S0+i+V[E0+t]];var Yw=this._gradients[j];W=M1*M1*(Yw[0]*K_+Yw[1]*L_)}var C1=0.5-I_*I_-A0*A0;if(C1>=0){C1*=C1,j=z[S0+1+V[E0+1]];var Uw=this._gradients[j];L=C1*C1*(Uw[0]*I_+Uw[1]*A0)}return 70*(H+W+L)},U}(j8),b8={Simplex:F8},$w=function(){function G(X,q,J,Z){if(Z===void 0)Z={};if(this._toX=X,this._toY=q,this._passableCallback=J,this._options=Object.assign({topology:8},Z),this._dirs=U_[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var U=G.prototype;return U._getNeighbors=function(q,J){var Z=[];for(var V=0;V<this._dirs.length;V++){var z=this._dirs[V],Y=q+z[0],H=J+z[1];if(!this._passableCallback(Y,H))continue;Z.push([Y,H])}return Z},G}(),v8=function(G){Z_(U,G);function U(q,J,Z,V){var z=G.call(this,q,J,Z,V)||this;return z._computed={},z._todo=[],z._add(q,J,null),z}var X=U.prototype;return X.compute=function(J,Z,V){var z=J+","+Z;if(!(z in this._computed))this._compute(J,Z);if(!(z in this._computed))return;var Y=this._computed[z];while(Y)V(Y.x,Y.y),Y=Y.prev},X._compute=function(J,Z){while(this._todo.length){var V=this._todo.shift();if(V.x==J&&V.y==Z)return;var z=this._getNeighbors(V.x,V.y);for(var Y=0;Y<z.length;Y++){var H=z[Y],W=H[0],L=H[1],j=W+","+L;if(j in this._computed)continue;this._add(W,L,V)}}},X._add=function(J,Z,V){var z={x:J,y:Z,prev:V};this._computed[J+","+Z]=z,this._todo.push(z)},U}($w),P8=function(G){Z_(U,G);function U(q,J,Z,V){var z;if(V===void 0)V={};return z=G.call(this,q,J,Z,V)||this,z._todo=[],z._done={},z}var X=U.prototype;return X.compute=function(J,Z,V){this._todo=[],this._done={},this._fromX=J,this._fromY=Z,this._add(this._toX,this._toY,null);while(this._todo.length){var z=this._todo.shift(),Y=z.x+","+z.y;if(Y in this._done)continue;if(this._done[Y]=z,z.x==J&&z.y==Z)break;var H=this._getNeighbors(z.x,z.y);for(var W=0;W<H.length;W++){var L=H[W],j=L[0],v=L[1],P=j+","+v;if(P in this._done)continue;this._add(j,v,z)}}var C=this._done[J+","+Z];if(!C)return;while(C)V(C.x,C.y),C=C.prev},X._add=function(J,Z,V){var z=this._distance(J,Z),Y={x:J,y:Z,prev:V,g:V?V.g+1:0,h:z},H=Y.g+Y.h;for(var W=0;W<this._todo.length;W++){var L=this._todo[W],j=L.g+L.h;if(H<j||H==j&&z<L.h){this._todo.splice(W,0,Y);return}}this._todo.push(Y)},X._distance=function(J,Z){switch(this._options.topology){case 4:return Math.abs(J-this._fromX)+Math.abs(Z-this._fromY);case 6:var V=Math.abs(J-this._fromX),z=Math.abs(Z-this._fromY);return z+Math.max(0,(V-z)/2);case 8:return Math.max(Math.abs(J-this._fromX),Math.abs(Z-this._fromY))}},U}($w),M8={Dijkstra:v8,AStar:P8},C8=function(){function G(X){this._scheduler=X,this._lock=1}var U=G.prototype;return U.start=function(){return this.unlock()},U.lock=function(){return this._lock++,this},U.unlock=function(){if(!this._lock)throw Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var q=this._scheduler.next();if(!q)return this.lock();var J=q.act();if(J&&J.then)this.lock(),J.then(this.unlock.bind(this))}return this},G}(),O8=function(){function G(X,q){if(q===void 0)q={};this._reflectivityCallback=X,this._options={},q=Object.assign({passes:1,emissionThreshold:100,range:10},q),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(q)}var U=G.prototype;return U.setOptions=function(q){if(Object.assign(this._options,q),q&&q.range)this.reset();return this},U.setFOV=function(q){return this._fov=q,this._fovCache={},this},U.setLight=function(q,J,Z){var V=q+","+J;if(Z)this._lights[V]=typeof Z=="string"?p(Z):Z;else delete this._lights[V];return this},U.clearLights=function(){this._lights={}},U.reset=function(){return this._reflectivityCache={},this._fovCache={},this},U.compute=function(q){var J={},Z={},V={};for(var z in this._lights){var Y=this._lights[z];Z[z]=[0,0,0],s(Z[z],Y)}for(var H=0;H<this._options.passes;H++){if(this._emitLight(Z,V,J),H+1==this._options.passes)continue;Z=this._computeEmitters(V,J)}for(var W in V){var L=W.split(","),j=parseInt(L[0]),v=parseInt(L[1]);q(j,v,V[W])}return this},U._emitLight=function(q,J,Z){for(var V in q){var z=V.split(","),Y=parseInt(z[0]),H=parseInt(z[1]);this._emitLightFromCell(Y,H,q[V],J),Z[V]=1}return this},U._computeEmitters=function(q,J){var Z={};for(var V in q){if(V in J)continue;var z=q[V],Y=void 0;if(V in this._reflectivityCache)Y=this._reflectivityCache[V];else{var H=V.split(","),W=parseInt(H[0]),L=parseInt(H[1]);Y=this._reflectivityCallback(W,L),this._reflectivityCache[V]=Y}if(Y==0)continue;var j=[0,0,0],v=0;for(var P=0;P<3;P++){var C=Math.round(z[P]*Y);j[P]=C,v+=C}if(v>this._options.emissionThreshold)Z[V]=j}return Z},U._emitLightFromCell=function(q,J,Z,V){var z=q+","+J,Y;if(z in this._fovCache)Y=this._fovCache[z];else Y=this._updateFOV(q,J);for(var H in Y){var W=Y[H],L=void 0;if(H in V)L=V[H];else L=[0,0,0],V[H]=L;for(var j=0;j<3;j++)L[j]+=Math.round(Z[j]*W)}return this},U._updateFOV=function(q,J){var Z=q+","+J,V={};this._fovCache[Z]=V;var z=this._options.range;function Y(H,W,L,j){var v=H+","+W,P=j*(1-L/z);if(P==0)return;V[v]=P}return this._fov.compute(q,J,z,Y.bind(this)),V},G}(),k8=k,f8=n,A8=a6;_.Color=f8,_.DEFAULT_HEIGHT=C0,_.DEFAULT_WIDTH=M0,_.DIRS=U_,_.Display=q1,_.Engine=C8,_.EventQueue=Zw,_.FOV=z8,_.KEYS=i6,_.Lighting=O8,_.Map=D8,_.Noise=b8,_.Path=M8,_.RNG=K,_.Scheduler=Z8,_.StringGenerator=_8,_.Text=A8,_.Util=k8,Object.defineProperty(_,"__esModule",{value:!0})})});var{readFileSync:O7}=(()=>({}));function $1(_,w,Q){let K=z1(_,w),$=z1(_,Q);if(K===null||$===null)return 0;if(K===$)return 1;else if(K.friendly.has($.name)||$.friendly.has(K.name))return 1;else if(K.hostile.has($.name)||$.hostile.has(K.name))return 2;else if(K.friendly.has("*")||$.friendly.has("*"))return 1;else if(K.hostile.has("*")||$.hostile.has("*"))return 2;return 0}function z1(_,w){return(_.components.faction[w]||{}).faction||null}function X1(_,w,Q){return _.components.faction[w]={faction:Q},_}class d_{name;description;energyDelta;constructor(_,w,Q=0){this.name=_,this.description=w,this.energyDelta=Q}}class O1{name;description;constructor(_,w){this.name=_,this.description=w}}class O_{key;description;constructor(_,w){this.key=_,this.description=w}}class E_{name;description;tooltip;icon;constructor(_,w,Q="",K){this.name=_,this.description=w,this.tooltip=Q,this.icon=K}}class G_{name;description;icon;color;energyMax;unlockCondition;constructor(_,w,Q,K=100){this.name=_,this.description=w,this.icon=Q,this.energyMax=K,this.color="white",this.unlockCondition=null}}class y_{name;description;color;friendly;hostile;constructor(_,w,Q,K,$){this.name=_,this.description=w,this.color=Q,this.friendly=K,this.hostile=$}}class q_{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(_,w,Q,K="cyberyellow",$=0,B=0,R=0,b=0,F=0,M=[]){this.name=_,this.description=w,this.icon=Q,this.color=K,this.energyDelta=$,this.matter=B,this.gold=R,this.damage=b,this.energyCost=F,this.effects=M}}class y{name;description;tooltip;icon;isBlocking;isSpace;isWater;energyDelta;constructor(_,w,Q="",K=null,$={}){this.name=_,this.description=w,this.tooltip=Q,this.icon=K,this.isBlocking=$.isBlocking||!1,this.isSpace=$.isSpace||!1,this.isWater=$.isWater||!1,this.energyDelta=$.energyDelta||0}}var D={actions:{Buy:new d_("Buy","Buy an item or tool"),Drop:new d_("Drop","Drop current tool"),Enter:new d_("Enter","Enter a portal or plant atmosphere"),Launch:new d_("Launch","Launch into space",-10),Shift:new d_("Shift","Shifts a lever",-1),Take:new d_("Take","Pickup and equip a tool"),Wait:new d_("Wait","Wait one turn in place")},ais:{aggrorange:new O1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new O1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new O1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new O1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ef15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",red:"#f00",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new O_("N","Move/interact/combat north"),E:new O_("E","Move/interact/combat east"),S:new O_("S","Move/interact/combat south"),W:new O_("W","Move/interact/combat west"),A:new O_("A","Primary action, confirm"),B:new O_("B","Take a break, cancel"),X:new O_("X","Secondary action, combat-related"),Y:new O_("Y","Tertiary action, inventory or item related"),M:new O_("M","Hide/show message log"),"?":new O_("?","Contextual help")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_graffiti_gold:"Obtain gold and ascend!",bot_station_pioneer:"You shall not pass!",bot_station_spire_richbot:"All gold is MINE! MINE! MINE!",manual_botmoses:"Try the '?' in the bottom left corner if you are stuck.",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all...",unlocked_bugger:"DeciCheater: Unlocked Bugger."},effects:{BioAbsorber:new E_("BioAbsorber","Gain energy while on trees","[Bio Absorber]: Regenerates energy on trees","fx_ba"),GraffitiCleaner:new E_("GraffitiCleaner","Removes graffiti on contact","[Graffiti Cleaner]: Removes graffiti","fx_gc"),Recharger:new E_("Recharger","Doubles energy gained from chargepads","[Recharger]: Doubles energy gained from chargepads","fx_re"),Recuperation:new E_("Recuperation","Reduces tool energy cost","[Recuperation]: Reduces tool energy cost (max. -1)","fx_cu"),RockCrusher:new E_("RockCrusher","Mines rock","[Rock Crusher]: Enables rock mining","fx_rc"),Screwing:new E_("Screwing","Unscrews the sewer portal covers","[Screwing]: Opens sewer gates","fx_sc"),WallCrusher:new E_("WallCrusher","Tears down weak walls","[Wall Crusher]: Enables weak wall destruction","fx_wc"),WaterImmunity:new E_("WaterImmunity","No damage taken from water","[Water Immunity]: Prevents water damage","fx_wi"),WaterShield:new E_("WaterShield","Reduces damage taken from water","[Water Shield]: Reduces water damage","fx_ws")},entities:{movableboulder:new G_("Boulder","A movable rock","o",2),movablebox:new G_("Box","A movable box","x",2),Spirit:new G_("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new G_("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new G_("WorkBot","Basic factory worker","B"),Cleaner:new G_("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new G_("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new G_("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new G_("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new G_("Graffiti","Writing on the wall","zy",2),Valkyrie:new G_("Valkyrie","Airbourne war logistics","V",160),Pioneer:new G_("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RichBot:new G_("RichBot","Shiny metal a**, owns the bot station","R",500),RoboRat:new G_("RoboRat","Minor self-assembled critter","cr",5),Bugger:new G_("Bugger","Minor annoyance critter","cb",5),SageBot:new G_("SageBot","Guides the player","S",200)},factions:{Critters:new y_("Critters","Small pests","cyberyellow",new Set,new Set(["*"])),Drifters:new y_("Drifters","Bots disconnected from a mothership/overmind","cybergreen",new Set,new Set(["Guardians","Workers"])),Enraged:new y_("Enraged","Always hostile faction","cybermagenta",new Set,new Set(["*"])),Spirits:new y_("Spirits","Default player faction","white",new Set,new Set),Pyrates:new y_("Pyrates","Default enemy faction","cybermagenta",new Set,new Set(["*"])),Guardians:new y_("Guardians","Bot station guardians","cybercyan",new Set,new Set(["Workers"])),Workers:new y_("Workers","Bot station workers","white",new Set,new Set(["Guardians"]))},items:{battery:new q_("Battery","Increases maximum energy","b","cyberyellow",10),chest:new q_("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new q_("Energy","Energy pack","e","cyberyellow",10),gold:new q_("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new q_("Goo","A minor matter source","goo","gray",0,1),junk:new q_("Junk","Broken bot","%","gray",0,1),matter:new q_("Matter","A pile of stuff","m","gray",0,100),mop:new q_("Mop","Removes graffiti from walls","im","cyberyellow",0,0,0,-10,-1,["GraffitiCleaner"]),cheat:new q_("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","RockCrusher","Screwing","WallCrusher","WaterShield"]),hammer:new q_("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["WallCrusher"]),pickaxe:new q_("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["RockCrusher"]),ratbite:new q_("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["WaterImmunity"]),shocker:new q_("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new q_("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["WaterShield"]),upgradeBioAbsorber:new q_("Bio Absorber Upgrade","Grants [BioAbsorber] effect","iu_ba","cyberyellow",0,0,0,0,0,["BioAbsorber"]),upgradeRecuperation:new q_("Recuperation Upgrade","Grants [Recuperation] effect","iu_cu","cyberyellow",0,0,0,0,0,["Recuperation"]),wrench:new q_("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:new y("void","Just nothing here","","."),voidtrue:new y("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new y("voidhidden","Looks like a wall, but isn't!","",".#"),water:new y("water","Rust and other dangers await","Water","~",{isWater:!0,energyDelta:-2}),watersewage:new y("watersewage","Rust, goo and other dangers await","Sewage Water","~~",{isWater:!0,energyDelta:-4}),drain:new y("drain","Drains gold, matter and some of your energy","Drain","*",{energyDelta:-5}),rock:new y("rock","Hidden treasures may await","Rock","'",{isBlocking:!0}),tree:new y("tree","Lots of trees make a forest","Tree","t"),wall:new y("wall","A strong wall","","#",{isBlocking:!0}),wallstatueaerobot:new y("wallstatueaerobot","A small statue looking like an AeroBot","","sa",{isBlocking:!0}),wallstatuecleaner:new y("wallstatuecleaner","A small statue looking like a Cleaner","","sc",{isBlocking:!0}),wallstatuepioneer:new y("wallstatuepioneer","A small statue looking like a Pioneer","","sp",{isBlocking:!0}),wallstatueworkbot:new y("wallstatueworkbot","A small statue looking like a WorkBot","","sb",{isBlocking:!0}),wallweak:new y("wallweak","A weakened wall","Weak Wall","+",{isBlocking:!0}),chargepad:new y("chargepad","Recharges energy and health","Chargepad","=",{energyDelta:2}),leverleft:new y("leverleft","A lever (off)","Lever","l|"),leverright:new y("leverright","A lever (on)","Lever","l/"),movenorth:new y("movenorth","Moves you north","","^^"),moveeast:new y("moveeast","Moves you east","",">>"),movesouth:new y("movesouth","Moves you south","","vv"),movewest:new y("movewest","Moves you west","","<<"),portal:new y("portal","Gateway to another map","Portal","O"),portalclosed:new y("portalclosed","Closed gateway to another map","Closed Portal","Oc",{isBlocking:!0}),portalhidden:new y("portalhidden","Hidden gateway to another map","","Oh"),portallauncher:new y("portallauncher","Launches into space","Launch to Space","Ol"),portalsewers:new y("portalsewers","Needs some tool to open","Sewer Gate","#~",{isBlocking:!0}),portalstartworkbot:new y("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB"),portalstartaerobot:new y("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA"),portalstartbugger:new y("portalstartbugger","Start playing as a Bugger","Play as a Bugger","Ocb"),portalstartunknown:new y("portalstartunknown","Not unlocked, yet!","?","O?"),spacerock:new y("spacerock","Mountains as seen from space, non-blocking!","","'s",{isSpace:!0}),spacetree:new y("spacetree","Forest as seen from space","","ts",{isSpace:!0}),spacewater:new y("spacewater","Water as seen from space, not dangerous!","","~s",{isSpace:!0}),spacevoid:new y("spacevoid","Void/ground as seen from space","",".s",{isSpace:!0}),spacevoidstarwhite:new y("spacevoidstarwhite","Space with a white background star","",".f"),spacevoidstaryellow:new y("spacevoidstaryellow","Space with a yellow background star","",".y"),star:new y("star","It's hot, really hot!","Star","§",{energyDelta:-100}),terminal:new y("terminal","A computer terminal","Terminal","$")},triggersandactuators:{_tAction:0,_tDestruction:1,_tInteract:2,_tStep:4,_aDestroyEntity:0,_aPlaceTile:1,_aSpawnEntity:2,_aToggleTile:3},uitexts:{}};function d1(_){if(Object.hasOwn(D.dialogs,_))return D.dialogs[_];return`FIXME: ${_} needs localization!`}function Bw(_,w,Q,K){return Math.abs(_-Q)+Math.abs(w-K)}function Y1(_){return[...Array(_).keys()]}function Ww(){if(window.crypto&&crypto)return self.crypto.randomUUID();return""}class y1{width;height;data;constructor(_,w,Q){this.width=_;this.height=w;this.data=Array(this.width*this.height).fill(Q)}isValid(_,w){return _>=0&&_<this.width&&w>=0&&w<this.height}get(_,w){if(!this.isValid(_,w))return null;return this.data[w*this.width+_]}set(_,w,Q){if(!this.isValid(_,w))return;this.data[w*this.width+_]=Q}}function x8(_){if(_===void 0){if(typeof window>"u"||!window.location||!window.location.search)return 0;_=window.location.search}try{let w=new URLSearchParams(_),Q=w.get("bottom"),K=w.get("b"),$=Q!==null&&Q!==""?Q:K;if($!==null&&$!==""){let B=parseFloat($);if(!isNaN(B))return Math.max(0,B)}}catch{return 0}return 0}function m8(_){if(_===void 0)try{if(typeof window<"u"&&window.sessionStorage)_=window.sessionStorage;else if(typeof sessionStorage<"u")_=sessionStorage;else return{uploadToLeaderboard:!1,username:"",passwordHash:""}}catch{return{uploadToLeaderboard:!1,username:"",passwordHash:""}}try{let w=_?.getItem("botmos_session");if(w!==null&&w!==void 0){let Q=JSON.parse(w);if(Q&&typeof Q==="object"){let K=Q.uploadToLeaderboard,$=K===!0||K==="true"||K===1||K==="1",B=typeof Q.username==="string"?Q.username:"",R=typeof Q.passwordHash==="string"?Q.passwordHash:"";return{uploadToLeaderboard:$,username:B,passwordHash:R}}}return{uploadToLeaderboard:!1,username:"",passwordHash:""}}catch{return{uploadToLeaderboard:!1,username:"",passwordHash:""}}}function l8(_){if(_===void 0){if(typeof window>"u"||!window.location||!window.location.search)return"";_=window.location.search}try{let w=new URLSearchParams(_),Q=w.get("run"),K=w.get("r"),$=Q!==null&&Q!==""?Q:K;if($!==null&&$!==void 0){let B=$.trim();if(B.startsWith("https://"))return B}}catch{return""}return""}function c8(_){if(_===void 0){if(typeof window>"u"||!window.location||!window.location.search)return 10;_=window.location.search}try{let K=new URLSearchParams(_).get("tps");if(K!==null&&K!==""){let $=parseFloat(K);if(!isNaN($)&&$>0)return $}}catch{return 10}return 10}function f1(){if(typeof document<"u"&&document.body)if(document.body.style.position="relative",g.bottom>0)document.body.style.height=`calc(100% - ${g.bottom}px)`,document.body.style.marginBottom=`${g.bottom}px`,document.body.style.boxSizing="border-box";else document.body.style.height="100%",document.body.style.marginBottom="0px"}var Hw=x8(),p8=l8(),d8=c8(),r1=m8(),y8=r1.uploadToLeaderboard?Ww():"",r8=typeof window<"u"?window.innerWidth:0,n8=typeof window<"u"?Math.max(0,window.innerHeight-Hw):0,k1=16;var g={bottom:Hw,cameraWidth:Math.floor(r8/k1),cameraHeight:Math.floor(n8/k1),chatLogMaxSize:100,chatLogMaxDisplaySize:8,clientRunId:y8,debug:!0,fontSize:k1,highlightFriendEnemy:!0,leaderboardUploadUrl:"https://lively-fog-5c85.botmos.workers.dev",passwordHash:r1.passwordHash,run:p8,showUI:!0,showTooltip:!0,showEnergy:1,tps:d8,uiEffectsMaxDisplaySize:8,uiInventoryMaxDisplaySize:4,uiTouchGridThickness:1,uploadToLeaderboard:r1.uploadToLeaderboard,username:r1.username,version:"0.0.8-dev",zoom:1};var k_={width:Math.floor(g.cameraWidth*(1/g.zoom)),height:Math.floor(g.cameraHeight*(1/g.zoom)),bg:"transparent",fontSize:Math.floor(g.fontSize*g.zoom),layout:"tile-gl",tileWidth:k1,tileHeight:k1,tileSet:null,tileMap:null,tileColorize:!0};function w_(_,w){return _.chatLog.push(w),_.chatLog=_.chatLog.slice(-g.chatLogMaxSize),_}function Lw(_){let w;if(_._idManager.freeIds.length>0)w=_._idManager.freeIds.pop();else w=_._idManager.nextId++;return _._idManager.usedIds.add(w),w}function o8(_,w,Q,K){if(Q==="position")U1(_,w,K);else _.components[Q][w]=K}class r_{entityId;componentsToAdd=new Map;state;constructor(_,w){this.state=_,this.entityId=w??Lw(_).toString()}getEntityId(){return this.entityId}with(_,w){return this.componentsToAdd.set(_,w),this}build(){if(this.state.entities[this.entityId]=!0,!this.state.effects[this.entityId])this.state.effects[this.entityId]={};for(let[_,w]of this.componentsToAdd.entries())o8(this.state,this.entityId,_,w);return this.entityId}}function n1(_,w){let Q=_.components.actuator;if(!Q)return _;for(let[K,$]of Object.entries(Q)){if(!$||$.channel!==w.channel)continue;switch($.type){case 0:break;case 1:break;case 2:break;case 3:let B=_.components.position[K];if(B){let R=_.maps[B.mapId];if(R){let b=R.getTile(B.x,B.y),F=w.active?$.activate:$.deactivate;R.setTile(B.x,B.y,F,b.options)}}break;case 4:if(w.triggeredBy===J_())_=w_(_,d1(w.channel));case 5:if(w.triggeredBy===J_()){if(w.channel==="botmos_win_condition"){let R=o1(_,w.triggeredBy);if(_=w_(_,`Game won! ${R} turns.`),g.uploadToLeaderboard)_._uploadNow=!0}else if(w.channel==="botmos_lose_condition"){if(g.uploadToLeaderboard)_._uploadNow=!0}}break}}return _}function Dw(_){return _}function J_(){return"player"}function o1(_,w){return _.actionLog.filter((Q)=>Q!=="?"&&Q!=="M").length+1}function G1(_,w,Q,K){if(!_.statistics[w])_.statistics[w]={[0]:0,[1]:0,[2]:0};_.statistics[w][Q]+=K;let $=_.components.trigger;if(!$)return _;for(let[B,R]of Object.entries($)){if(!R||R.type!==3)continue;let{stat:b,statThreshold:F}=R;if(b===Q&&F!==void 0){if(_.statistics[w][b]>=F){if(R.triggered=!0,_=n1(_,{triggerId:B,channel:R.channel,active:R.triggered,triggeredBy:w}),R.once)_._despawnQueue.push(B)}}}return _}/*!
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
 */var a8=function(_){var w={};function Q(K){if(w[K])return w[K].exports;var $=w[K]={i:K,l:!1,exports:{}};return _[K].call($.exports,$,$.exports,Q),$.l=!0,$.exports}return Q.m=_,Q.c=w,Q.d=function(K,$,B){Q.o(K,$)||Object.defineProperty(K,$,{enumerable:!0,get:B})},Q.r=function(K){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(K,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(K,"__esModule",{value:!0})},Q.t=function(K,$){if(1&$&&(K=Q(K)),8&$)return K;if(4&$&&typeof K=="object"&&K&&K.__esModule)return K;var B=Object.create(null);if(Q.r(B),Object.defineProperty(B,"default",{enumerable:!0,value:K}),2&$&&typeof K!="string")for(var R in K)Q.d(B,R,function(b){return K[b]}.bind(null,R));return B},Q.n=function(K){var $=K&&K.__esModule?function(){return K.default}:function(){return K};return Q.d($,"a",$),$},Q.o=function(K,$){return Object.prototype.hasOwnProperty.call(K,$)},Q.p="/bin/",Q(Q.s=0)}([function(_,w,Q){var K={},$=Q(1),B=Q(2),R=Q(3);_.exports=K;var b=1;K.js=function(){var F,M,k,h=!1,E={},m={},p={},r={},s=!0,Y_={},z_=[],B_=Number.MAX_VALUE,$_=!1;this.setAcceptableTiles=function(u){u instanceof Array?k=u:!isNaN(parseFloat(u))&&isFinite(u)&&(k=[u])},this.enableSync=function(){h=!0},this.disableSync=function(){h=!1},this.enableDiagonals=function(){$_=!0},this.disableDiagonals=function(){$_=!1},this.setGrid=function(u){F=u;for(var S=0;S<F.length;S++)for(var f=0;f<F[0].length;f++)m[F[S][f]]||(m[F[S][f]]=1)},this.setTileCost=function(u,S){m[u]=S},this.setAdditionalPointCost=function(u,S,f){p[S]===void 0&&(p[S]={}),p[S][u]=f},this.removeAdditionalPointCost=function(u,S){p[S]!==void 0&&delete p[S][u]},this.removeAllAdditionalPointCosts=function(){p={}},this.setDirectionalCondition=function(u,S,f){r[S]===void 0&&(r[S]={}),r[S][u]=f},this.removeAllDirectionalConditions=function(){r={}},this.setIterationsPerCalculation=function(u){B_=u},this.avoidAdditionalPoint=function(u,S){E[S]===void 0&&(E[S]={}),E[S][u]=1},this.stopAvoidingAdditionalPoint=function(u,S){E[S]!==void 0&&delete E[S][u]},this.enableCornerCutting=function(){s=!0},this.disableCornerCutting=function(){s=!1},this.stopAvoidingAllAdditionalPoints=function(){E={}},this.findPath=function(u,S,f,n,e){var Q_=function(l_){h?e(l_):setTimeout(function(){e(l_)})};if(k===void 0)throw Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(F===void 0)throw Error("You can't set a path without first calling setGrid() on EasyStar.");if(u<0||S<0||f<0||n<0||u>F[0].length-1||S>F.length-1||f>F[0].length-1||n>F.length-1)throw Error("Your start or end point is outside the scope of your grid.");if(u!==f||S!==n){for(var R_=F[n][f],X_=!1,h_=0;h_<k.length;h_++)if(R_===k[h_]){X_=!0;break}if(X_!==!1){var H_=new $;H_.openList=new R(function(l_,V1){return l_.bestGuessDistance()-V1.bestGuessDistance()}),H_.isDoneCalculating=!1,H_.nodeHash={},H_.startX=u,H_.startY=S,H_.endX=f,H_.endY=n,H_.callback=Q_,H_.openList.push(o(H_,H_.startX,H_.startY,null,1));var b1=b++;return Y_[b1]=H_,z_.push(b1),b1}Q_(null)}else Q_([])},this.cancelPath=function(u){return u in Y_&&(delete Y_[u],!0)},this.calculate=function(){if(z_.length!==0&&F!==void 0&&k!==void 0)for(M=0;M<B_;M++){if(z_.length===0)return;h&&(M=0);var u=z_[0],S=Y_[u];if(S!==void 0)if(S.openList.size()!==0){var f=S.openList.pop();if(S.endX!==f.x||S.endY!==f.y)f.list=0,f.y>0&&A(S,f,0,-1,1*c(f.x,f.y-1)),f.x<F[0].length-1&&A(S,f,1,0,1*c(f.x+1,f.y)),f.y<F.length-1&&A(S,f,0,1,1*c(f.x,f.y+1)),f.x>0&&A(S,f,-1,0,1*c(f.x-1,f.y)),$_&&(f.x>0&&f.y>0&&(s||I(F,k,f.x,f.y-1,f)&&I(F,k,f.x-1,f.y,f))&&A(S,f,-1,-1,1.4*c(f.x-1,f.y-1)),f.x<F[0].length-1&&f.y<F.length-1&&(s||I(F,k,f.x,f.y+1,f)&&I(F,k,f.x+1,f.y,f))&&A(S,f,1,1,1.4*c(f.x+1,f.y+1)),f.x<F[0].length-1&&f.y>0&&(s||I(F,k,f.x,f.y-1,f)&&I(F,k,f.x+1,f.y,f))&&A(S,f,1,-1,1.4*c(f.x+1,f.y-1)),f.x>0&&f.y<F.length-1&&(s||I(F,k,f.x,f.y+1,f)&&I(F,k,f.x-1,f.y,f))&&A(S,f,-1,1,1.4*c(f.x-1,f.y+1)));else{var n=[];n.push({x:f.x,y:f.y});for(var e=f.parent;e!=null;)n.push({x:e.x,y:e.y}),e=e.parent;n.reverse();var Q_=n;S.callback(Q_),delete Y_[u],z_.shift()}}else S.callback(null),delete Y_[u],z_.shift();else z_.shift()}};var A=function(u,S,f,n,e){var Q_=S.x+f,R_=S.y+n;if((E[R_]===void 0||E[R_][Q_]===void 0)&&I(F,k,Q_,R_,S)){var X_=o(u,Q_,R_,S,e);X_.list===void 0?(X_.list=1,u.openList.push(X_)):S.costSoFar+e<X_.costSoFar&&(X_.costSoFar=S.costSoFar+e,X_.parent=S,u.openList.updateItem(X_))}},I=function(u,S,f,n,e){var Q_=r[n]&&r[n][f];if(Q_){var R_=x(e.x-f,e.y-n);if(!function(){for(var h_=0;h_<Q_.length;h_++)if(Q_[h_]===R_)return!0;return!1}())return!1}for(var X_=0;X_<S.length;X_++)if(u[n][f]===S[X_])return!0;return!1},x=function(u,S){if(u===0&&S===-1)return K.TOP;if(u===1&&S===-1)return K.TOP_RIGHT;if(u===1&&S===0)return K.RIGHT;if(u===1&&S===1)return K.BOTTOM_RIGHT;if(u===0&&S===1)return K.BOTTOM;if(u===-1&&S===1)return K.BOTTOM_LEFT;if(u===-1&&S===0)return K.LEFT;if(u===-1&&S===-1)return K.TOP_LEFT;throw Error("These differences are not valid: "+u+", "+S)},c=function(u,S){return p[S]&&p[S][u]||m[F[S][u]]},o=function(u,S,f,n,e){if(u.nodeHash[f]!==void 0){if(u.nodeHash[f][S]!==void 0)return u.nodeHash[f][S]}else u.nodeHash[f]={};var Q_=a(S,f,u.endX,u.endY);if(n!==null)var R_=n.costSoFar+e;else R_=0;var X_=new B(n,S,f,R_,Q_);return u.nodeHash[f][S]=X_,X_},a=function(u,S,f,n){var e,Q_;return $_?(e=Math.abs(u-f))<(Q_=Math.abs(S-n))?1.4*e+Q_:1.4*Q_+e:(e=Math.abs(u-f))+(Q_=Math.abs(S-n))}},K.TOP="TOP",K.TOP_RIGHT="TOP_RIGHT",K.RIGHT="RIGHT",K.BOTTOM_RIGHT="BOTTOM_RIGHT",K.BOTTOM="BOTTOM",K.BOTTOM_LEFT="BOTTOM_LEFT",K.LEFT="LEFT",K.TOP_LEFT="TOP_LEFT"},function(_,w){_.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(_,w){_.exports=function(Q,K,$,B,R){this.parent=Q,this.x=K,this.y=$,this.costSoFar=B,this.simpleDistanceToTarget=R,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(_,w,Q){_.exports=Q(4)},function(_,w,Q){var K,$,B;(function(){var R,b,F,M,k,h,E,m,p,r,s,Y_,z_,B_,$_;F=Math.floor,r=Math.min,b=function(A,I){return A<I?-1:A>I?1:0},p=function(A,I,x,c,o){var a;if(x==null&&(x=0),o==null&&(o=b),x<0)throw Error("lo must be non-negative");for(c==null&&(c=A.length);x<c;)o(I,A[a=F((x+c)/2)])<0?c=a:x=a+1;return[].splice.apply(A,[x,x-x].concat(I)),I},h=function(A,I,x){return x==null&&(x=b),A.push(I),B_(A,0,A.length-1,x)},k=function(A,I){var x,c;return I==null&&(I=b),x=A.pop(),A.length?(c=A[0],A[0]=x,$_(A,0,I)):c=x,c},m=function(A,I,x){var c;return x==null&&(x=b),c=A[0],A[0]=I,$_(A,0,x),c},E=function(A,I,x){var c;return x==null&&(x=b),A.length&&x(A[0],I)<0&&(I=(c=[A[0],I])[0],A[0]=c[1],$_(A,0,x)),I},M=function(A,I){var x,c,o,a,u,S;for(I==null&&(I=b),u=[],c=0,o=(a=function(){S=[];for(var f=0,n=F(A.length/2);0<=n?f<n:f>n;0<=n?f++:f--)S.push(f);return S}.apply(this).reverse()).length;c<o;c++)x=a[c],u.push($_(A,x,I));return u},z_=function(A,I,x){var c;if(x==null&&(x=b),(c=A.indexOf(I))!==-1)return B_(A,0,c,x),$_(A,c,x)},s=function(A,I,x){var c,o,a,u,S;if(x==null&&(x=b),!(o=A.slice(0,I)).length)return o;for(M(o,x),a=0,u=(S=A.slice(I)).length;a<u;a++)c=S[a],E(o,c,x);return o.sort(x).reverse()},Y_=function(A,I,x){var c,o,a,u,S,f,n,e,Q_;if(x==null&&(x=b),10*I<=A.length){if(!(a=A.slice(0,I).sort(x)).length)return a;for(o=a[a.length-1],u=0,f=(n=A.slice(I)).length;u<f;u++)x(c=n[u],o)<0&&(p(a,c,0,null,x),a.pop(),o=a[a.length-1]);return a}for(M(A,x),Q_=[],S=0,e=r(I,A.length);0<=e?S<e:S>e;0<=e?++S:--S)Q_.push(k(A,x));return Q_},B_=function(A,I,x,c){var o,a,u;for(c==null&&(c=b),o=A[x];x>I&&c(o,a=A[u=x-1>>1])<0;)A[x]=a,x=u;return A[x]=o},$_=function(A,I,x){var c,o,a,u,S;for(x==null&&(x=b),o=A.length,S=I,a=A[I],c=2*I+1;c<o;)(u=c+1)<o&&!(x(A[c],A[u])<0)&&(c=u),A[I]=A[c],c=2*(I=c)+1;return A[I]=a,B_(A,S,I,x)},R=function(){function A(I){this.cmp=I!=null?I:b,this.nodes=[]}return A.push=h,A.pop=k,A.replace=m,A.pushpop=E,A.heapify=M,A.updateItem=z_,A.nlargest=s,A.nsmallest=Y_,A.prototype.push=function(I){return h(this.nodes,I,this.cmp)},A.prototype.pop=function(){return k(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(I){return this.nodes.indexOf(I)!==-1},A.prototype.replace=function(I){return m(this.nodes,I,this.cmp)},A.prototype.pushpop=function(I){return E(this.nodes,I,this.cmp)},A.prototype.heapify=function(){return M(this.nodes,this.cmp)},A.prototype.updateItem=function(I){return z_(this.nodes,I,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var I;return(I=new A).nodes=this.nodes.slice(0),I},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),$=[],(B=typeof(K=function(){return R})=="function"?K.apply(w,$):K)===void 0||(_.exports=B)}).call(this)}]);function jw(_,w,Q,K,$){let B=new a8.js;B.setGrid(_),B.setAcceptableTiles([0]),B.enableSync();let R=null;return B.findPath(w,Q,K,$,function(b){R=b}),B.calculate(),R}function Rw(_,w){return Object.values(_.effects[w])}function v_(_,w,Q){return!!_.effects[w]&&Object.hasOwn(_.effects[w],Q.name)}function Fw(_){return _}function bw(_,w){if(w.oldEquippedItem){let Q=w.oldEquippedItem;for(let K of Q.effects){let $=D.effects[K];if(!!_.effects[w.entityId]?.[$.name]&&_.effects[w.entityId][$.name].source===Q){delete _.effects[w.entityId][$.name];let B=_.components.inventory[w.entityId]?.inventory.find((R)=>R.effects.includes(K));if(B)_.effects[w.entityId][$.name]={type:$,source:B}}}}if(w.newEquippedItem){let Q=w.newEquippedItem;for(let K of Q.effects){let $=D.effects[K];if(!_.effects[w.entityId])_.effects[w.entityId]={};_.effects[w.entityId][$.name]={type:$,source:Q}}}return _}function vw(_,w){let Q=w.type;for(let K of Q.effects)_.effects[w.entityId][K]={type:D.effects[K]};return _}function n_(_,w,Q){let K=_._eventSubscribers[w];if(K)for(let $=0;$<K.length;$++){let B=K[$];_=B(_,Q)}return _}function B1(_,w,Q){if(w in _._eventSubscribers);else _._eventSubscribers[w]=[];return _._eventSubscribers[w].push(Q),_}function g0(_,w,Q){return _1(_,w,Q),_}function Cw(_,w,Q){return fw(_,w,Q),_}function A1(_,w,Q,K,$){return Aw(_,w,Q,K,$),_}function s1(_,w){return _.components.inventory[w]?.inventory??[]}function Ow(_,w){let Q=_.components.inventory[w]?.inventory;if(!Q||Q.length===0)return null;let K=null,$=0;for(let B of Q){let R=Math.abs(B.damage);if(R>$)$=R,K=B}return K}function S1(_,w){let Q=_.components.inventory[w];if(!Q)return!1;return Q.inventory.length<Q.max}function e_(_){if(!_)return!1;return _.energyCost<0}function t_(_,w){let Q=_.components.currency[w];if(!Q)return!1;return Q.gold<0||Q.matter<0}function E1(_,w,Q){let K=_.components.currency[w],$=_.components.currency[Q];if(!K||!$)return!1;return K.gold+$.gold>=0&&K.matter+$.matter>=0}function i8(_,w,Q){let K=_.components.type[Q]?.type;if(!K)return _;if(!S1(_,w))return _;let $=_.components.currency[w],B=_.components.currency[Q];if($&&B)$.gold+=Math.max(0,B.gold),$.matter+=Math.max(0,B.matter);return _=N1(_,w,K),f_(_,Q),_}function e8(_,w,Q){let K=_.components.type[Q]?.type;if(!K)return _;let $=_.components.energy[Q];if(K===D.items.battery){let M=_.components.energy[w];if(M&&$)M.max+=$.current}if($&&$.current!==0)_._energyQueue.push({entityId:w,energyDelta:$.current});let B=_.components.currency[w],R=_.components.currency[Q],b=void 0;if(B&&R)b=B.gold,B.gold+=Math.max(0,R.gold),B.matter+=Math.max(0,R.matter);if(w.startsWith("player")){if(_=w_(_,`Picked up ${K.name}.`),B&&b!==void 0&&B.gold>b)_=G1(_,w,2,B.gold-b)}let F={entityId:w,type:K};return _=n_(_,2,F),f_(_,Q),_}function t8(_,w,Q){let K=_.components.type[Q]?.type;if(!K)return _;if(!S1(_,w))return _;if(!E1(_,w,Q))return _;let $=_.components.currency[w],B=_.components.currency[Q];if($&&B)$.gold+=B.gold,$.matter+=B.matter;return _=N1(_,w,K),f_(_,Q),_}function _7(_,w,Q){let K=_.components.type[Q]?.type;if(!K)return _;if(!E1(_,w,Q))return _;let $=_.components.currency[w],B=_.components.currency[Q],R=void 0;if($&&B)R=$.gold,$.gold+=B.gold,$.matter+=B.matter;let b=_.components.energy[Q];if(K===D.items.battery){let M=_.components.energy[w];if(M&&b)M.max+=b.current}if(b&&b.current!==0)_._energyQueue.push({entityId:w,energyDelta:b.current});if(w.startsWith("player")){if(_=w_(_,`Bought ${K.name}.`),$&&R!==void 0&&$.gold>R)_=G1(_,w,2,$.gold-R)}let F={entityId:w,type:K};return _=n_(_,2,F),f_(_,Q),_}function a1(_,w,Q){if(N_(_,w))return _;let K=_.components.type[Q]?.type;if(!K)return _;let $=t_(_,Q),B=e_(K);if($)if(B)return t8(_,w,Q);else return _7(_,w,Q);else if(B)return i8(_,w,Q);else return e8(_,w,Q)}function N1(_,w,Q){let K=_.components.inventory[w];if(!K||!Q)return _;if(K.inventory.length>=K.max)return _;if(K.inventory.push(Q),w.startsWith("player")){if(_=w_(_,`Equipped ${Q.name}.`),Q===D.items.cheat)_=G1(_,w,0,1)}let $={entityId:w,oldEquippedItem:null,newEquippedItem:Q};return _=n_(_,1,$),_}function kw(_,w){let Q=_.components.position[w],K=_.components.inventory[w];if(!K||K.inventory.length===0||!Q)return _;let $=K.inventory.pop();_1(_,$,{mapId:Q.mapId,x:Q.x,y:Q.y});let B={entityId:w,oldEquippedItem:$,newEquippedItem:null};if(_=n_(_,1,B),w===J_())_=w_(_,`Dropped ${$.name}.`);return _}function T_(_,w){return _.components.position[w]}function Ew(_,w,Q){switch(Q){case D.commands.N:_=P_(_,w,0,-1);break;case D.commands.W:_=P_(_,w,-1,0);break;case D.commands.S:_=P_(_,w,0,1);break;case D.commands.E:_=P_(_,w,1,0);break;case D.commands.A:_=i1(_,w,D.commands.A);break;case D.commands.B:_=i1(_,w,D.commands.B);break;case D.commands.X:_=i1(_,w,D.commands.X);break;case D.commands.Y:_=i1(_,w,D.commands.Y);break;default:}return _}function P_(_,w,Q,K,$=0){let B=T_(_,w),R=_.maps[B.mapId],b=A_(_,{mapId:R.id,x:B.x+Q,y:B.y+K}),F=hw(_,b);if(F)if(N_(_,F)){if(!N_(_,w)&&$<1)_=P_(_,F,Q,K,$++),_=P_(_,w,Q,K,$++)}else if(u1(_,F)&&v_(_,w,D.effects.GraffitiCleaner)){let M=_.components.type[F]?.type,k=_.components.name[F]?.name??M?.name??"Graffiti";_=w_(_,`${k} destroyed.`),f_(_,F);let h=h0(_,w,"GraffitiCleaner");_._energyQueue.push({entityId:w,energyDelta:I0(_,w,h)})}else _=Iw(_,w,F);else if(V7(_,R,w,Q,K))_=Sw(_,R,w,Q,K),_._energyQueue.push({entityId:w,energyDelta:-1*$});else if(q7(_,R,w,Q,K)){let M=R.setTile(B.x+Q,B.y+K,D.tiles.void),k={mapId:R.id,x:B.x+Q,y:B.y+K};if(M.type===D.tiles.rock){let m=_.rng.getPercentage();if(m<=1)_=g0(_,D.items.matter,k);else if(m<=34)_=g0(_,D.items.junk,k)}let h=M.type===D.tiles.rock?"RockCrusher":"WallCrusher",E=h0(_,w,h);_._energyQueue.push({entityId:w,energyDelta:I0(_,w,E)})}else if(z7(_,R,w,Q,K)){_=Sw(_,R,w,Q,K);let M=h0(_,w,"Screwing");_._energyQueue.push({entityId:w,energyDelta:I0(_,w,M)})}return _}function h0(_,w,Q){let K=_.components.inventory[w];if(!K)return;return K.inventory.find(($)=>$.effects.includes(Q))}function I0(_,w,Q){let K=Q?Q.energyCost:-1;if(v_(_,w,D.effects.Recuperation))K=Math.min(-1,K+1);return K}function i1(_,w,Q){let $=W1(_,w)[Q.key],B=T_(_,w),b=_.maps[B.mapId].getTile(B.x,B.y);switch($){case D.actions.Enter:_=Nw(_,w,b);break;case D.actions.Launch:_=Z7(_,w,b);break;case D.actions.Shift:_=K7(_,w);break;case D.actions.Take:_=J7(_,w,B);break;case D.actions.Buy:_=Q7(_,w,B);break;case D.actions.Drop:_=w7(_,w);break;case D.actions.Wait:break;default:}return _}function w7(_,w){return kw(_,w)}function J7(_,w,Q){let K=A_(_,Q);for(let $ of K)if(_.components.pickupable[$]){let B=_.components.type[$]?.type;if(e_(B)&&!t_(_,$)){_=a1(_,w,$);break}}return _}function Q7(_,w,Q){let K=A_(_,Q);for(let $ of K)if(_.components.pickupable[$]){if(t_(_,$)){_=a1(_,w,$);break}}return _}function Sw(_,w,Q,K,$){let B=T_(_,Q),R={...B,x:B.x+K,y:B.y+$};_=U1(_,Q,R);let b=A_(_,R);for(let M of b)if(_.components.pickupable[M]){let k=_.components.type[M]?.type;if(k&&!e_(k)&&!t_(_,M))_=a1(_,Q,M)}let F=w.getTile(R.x,R.y);if(F.type.name.startsWith("portal")&&F.options.mapId!==void 0&&F.options.x!==void 0&&F.options.y!==void 0)_=Nw(_,Q,F);if(F.type.name.startsWith("move"))switch(F.type.name){case"movenorth":_=P_(_,Q,0,-1);break;case"moveeast":_=P_(_,Q,1,0);break;case"movesouth":_=P_(_,Q,0,1);break;case"movewest":_=P_(_,Q,-1,0);break;default:}return _}function Nw(_,w,Q){let K=T_(_,w);if(w.startsWith("player"))_.currentMapId=Q.options.mapId;if(Q.type.isSpace)_.lastSpacePositionByEntity[w]={mapId:K.mapId,x:K.x,y:K.y};else _.lastSpacePositionByEntity[w]=void 0,delete _.lastSpacePositionByEntity[w];let $={entityId:w,oldMapId:K.mapId,oldX:K.x,oldY:K.y,oldTileType:Q.type,newMapId:Q.options.mapId,newX:Q.options.x,newY:Q.options.y},B={...K,mapId:Q.options.mapId,x:Q.options.x,y:Q.options.y};return _=U1(_,w,B),_=n_(_,0,$),_}function Z7(_,w,Q){let K=T_(_,w);if(_.lastSpacePositionByEntity[w]){if(w.startsWith("player"))_.currentMapId=_.lastSpacePositionByEntity[w].mapId;let $={entityId:w,oldMapId:K.mapId,oldX:K.x,oldY:K.y,oldTileType:Q.type,newMapId:_.lastSpacePositionByEntity[w].mapId,newX:_.lastSpacePositionByEntity[w].x,newY:_.lastSpacePositionByEntity[w].y},B={...K,mapId:$.newMapId,x:$.newX,y:$.newY};_=U1(_,w,B),_._energyQueue.push({entityId:w,energyDelta:D.actions.Launch.energyDelta}),_.lastSpacePositionByEntity[w]=void 0,delete _.lastSpacePositionByEntity[w],_=n_(_,0,$)}return _}function K7(_,w){let Q=A_(_,_.components.position[w]);for(let K of Q){let $=_.components.trigger[K];if($&&$.type==0){if($.triggered=!$.triggered,_=n1(_,{triggerId:K,channel:$.channel,active:$.triggered,triggeredBy:w}),$.once)_._despawnQueue.push(K);_._energyQueue.push({entityId:w,energyDelta:D.actions.Shift.energyDelta})}}return _}function uw(_){for(let w in _.entities){if(_.components.trigger[w])continue;if(_.components.actuator[w])continue;let Q=T_(_,w);if(!Q||Q.mapId!==_.currentMapId)continue;let $=_.maps[Q.mapId].getTile(Q.x,Q.y),B=$.type.energyDelta;if($.type===D.tiles.chargepad&&v_(_,w,D.effects.Recharger))B*=2;else if($.type===D.tiles.tree&&v_(_,w,D.effects.BioAbsorber))B=1;else if($.type.isWater&&v_(_,w,D.effects.WaterImmunity))B=0;else if($.type.isWater&&v_(_,w,D.effects.WaterShield))B/=2;else if($.type===D.tiles.drain){let R=_.components.currency[w];if(R){let b=Math.min(R.gold,D.constants.DRAIN_GOLD_COST),F=Math.min(R.matter,D.constants.DRAIN_MATTER_COST);R.gold-=b,R.matter-=F}}if(B!==0)_._energyQueue.push({entityId:w,energyDelta:B})}return _}function gw(_,w){switch(w.oldTileType){case D.tiles.portalstartaerobot:_=e1(_,w.entityId,D.entities.AeroBot),_=X1(_,w.entityId,D.factions.Workers),_=w_(_,`Booting up as an ${D.entities.AeroBot.name}...`);break;case D.tiles.portalstartbugger:_=e1(_,w.entityId,D.entities.Bugger),_=X1(_,w.entityId,D.factions.Critters),_=w_(_,`Booting up as a ${D.entities.Bugger.name}...`);break;case D.tiles.portalstartworkbot:_=e1(_,w.entityId,D.entities.WorkBot),_=X1(_,w.entityId,D.factions.Workers),_=w_(_,`Booting up as a ${D.entities.WorkBot.name}...`);break;default:}return _}function V7(_,w,Q,K,$){let B=T_(_,Q),R=B.x+K,b=B.y+$,F=w.getTile(R,b).type;return R>=0&&R<w.widthTiles&&b>=0&&b<w.heightTiles&&!F.isBlocking}function q7(_,w,Q,K,$){let B=T_(_,Q),R=B.x+K,b=B.y+$,F=w.getTile(R,b).type;return v_(_,Q,D.effects.WallCrusher)&&F===D.tiles.wallweak||v_(_,Q,D.effects.RockCrusher)&&F===D.tiles.rock}function z7(_,w,Q,K,$){let B=T_(_,Q),R=B.x+K,b=B.y+$,F=w.getTile(R,b).type;return v_(_,Q,D.effects.Screwing)&&F===D.tiles.portalsewers}function xw(_){let w=$7(_),Q=J_();if(!_.entities[Q])return _;let K=_.components.position[Q];for(let $=0;$<w.length;$++){let B=w[$];if(Q===B)continue;let R=_.components.ai[B],b=_.components.position[B];if(R._pathCache.playerX!==K.x||R._pathCache.playerY!==K.y||R._pathCache.entityX!==b.x||R._pathCache.entityY!==b.y)R._pathCache={};let F=Bw(K.x,K.y,b.x,b.y);if($1(_,Q,B)===2&&F<=R.aggroRange)if(R._pathCache.path)R.path=R._pathCache.path;else{let M=_.maps[_.currentMapId].asMovementMap(),k=jw(M,b.x,b.y,K.x,K.y);if(k){if(k=k.slice(1),k.length>F)k=null}R.path=k,R._pathCache={playerX:K.x,playerY:K.y,entityX:b.x,entityY:b.y,path:k}}}for(let $=0;$<w.length;$++){let B=w[$],R=_.components.ai[B];if(R.path){let b=R.path[0],F=_.components.position[B],M=b.x-F.x,k=b.y-F.y;_=P_(_,B,M,k)}}return _}function $7(_){let w=H1(_,_.currentMapId),Q=[];for(let K=0;K<w.length;K++){let $=w[K];if(_.components.ai[$])Q.push($)}return Q}function mw(_,w){let Q=8;switch(_){case D.ais.aggrorange:Q=8;break;case D.ais.aggrorangeshort:Q=2;break;case D.ais.guardian:Q=1;break;case D.ais.interactenrage:Q=2;break;default:}return{type:_,aggroRange:Q,startPosition:{mapId:w.mapId,x:w.x,y:w.y},path:null,_pathCache:{}}}function t1(_,w,Q,K={}){let $=new r_(_,K.id).with("type",{type:w}).with("collision",{collides:!0}).with("currency",{gold:0,matter:0}).with("energy",{current:w.energyMax,max:w.energyMax}).with("interaction",{interactions:0,messages:[]}).with("position",{mapId:Q.mapId,x:Q.x,y:Q.y});if(!x0(w))$.with("inventory",{inventory:[],max:K.inventoryMax??4});if(K.ai)$.with("ai",mw(K.ai,Q));if(K.dialog)$.with("dialog",{dialog:K.dialog});if(K.faction)$.with("faction",{faction:K.faction});if(K.name)$.with("name",{name:K.name});let B=$.build();if(K.equippedItem)N1(_,B,K.equippedItem);if(K.equippedItems)for(let R of K.equippedItems)N1(_,B,R);return B}function T0(_,w,Q,K,$=J_(),B={}){return X7(_,K,w,Q,$,{faction:D.factions.Spirits,name:g.username||"Player",...B})}function X7(_,w,Q,K,$,B={}){return t1(_,D.entities.Spirit,{mapId:w,x:Q,y:K},{id:$,...B})}function _1(_,w,Q,K=w.gold,$=w.matter){return new r_(_).with("type",{type:w}).with("position",{mapId:Q.mapId,x:Q.x,y:Q.y}).with("currency",{gold:K,matter:$}).with("energy",{current:w.energyDelta,max:w.energyDelta}).with("pickupable",{}).build()}function fw(_,w,Q){let K=D.items.junk;return _1(_,K,Q,K.gold,w)}function Aw(_,w,Q,K,$){return _1(_,w,Q,K,$)}function lw(_,w,Q){return new r_(_).with("position",w).with("trigger",Q).build()}function cw(_,w,Q){return new r_(_).with("position",w).with("actuator",Q).build()}function _0(_,w){return new r_(_).with("trigger",w).build()}function w0(_,w){return new r_(_).with("actuator",w).build()}function f_(_,w){let Q=_.components.position[w];if(Q)pw(_,w,Q.mapId,Q.x,Q.y);if(_.entities[w])_.entities[w]=void 0,delete _.entities[w];for(let K of Object.values(_.components))delete K[w];return _.effects[w]=void 0,delete _.effects[w],_}function U1(_,w,Q){let K=_.components.position[w];if(K)pw(_,w,K.mapId,K.x,K.y);return _.components.position[w]={...Q},Y7(_,w,Q.mapId,Q.x,Q.y),_}function Y7(_,w,Q,K,$){if(!_.cache.entitiesByMap[Q])_.cache.entitiesByMap[Q]=new Set;_.cache.entitiesByMap[Q].add(w);let B=`${Q},${K},${$}`;if(!_.cache.entitiesByLocation[B])_.cache.entitiesByLocation[B]=new Set;_.cache.entitiesByLocation[B].add(w)}function pw(_,w,Q,K,$){if(_.cache.entitiesByMap[Q])_.cache.entitiesByMap[Q].delete(w);let B=`${Q},${K},${$}`;if(_.cache.entitiesByLocation[B])_.cache.entitiesByLocation[B].delete(w)}function H1(_,w){let Q=_.cache.entitiesByMap[w];if(Q)return Array.from(Q);return[]}function A_(_,w){let Q=`${w.mapId},${w.x},${w.y}`,K=_.cache.entitiesByLocation[Q];if(K)return Array.from(K);return[]}function hw(_,w){for(let Q=0;Q<w.length;Q++){let K=w[Q],$=_.components.collision[K];if($&&$.collides)return K}return null}function e1(_,w,Q){_.components.type[w]={type:Q};let K=_.components.energy[w];if(K)K.current=Q.energyMax,K.max=Q.energyMax;let $=_.components.currency[w];if($)$.gold=0,$.matter=0;if(!N_(_,w)){let B={inventory:[],max:_.components.inventory[w]?.max??4};_.components.inventory[w]=B}return _.effects[w]={},_}function Iw(_,w,Q){if(w===Q)return _;let K=$1(_,w,Q);if(K===1||u1(_,Q)){if(_.components.dialog[Q]?.dialog){let $=_.components.type[Q]?.type,B=_.components.name[Q]?.name?_.components.name[Q].name:$.name;if(_=w_(_,B+": "+d1(_.components.dialog[Q].dialog)),_.components.interaction[Q])_.components.interaction[Q].interactions++}}else if(K===2)_._combatQueue.push({entityId:w,otherEntityId:Q});if(_.components.interaction[Q]?.interactions>=3&&_.components.ai[Q]?.type===D.ais.interactenrage)_=X1(_,Q,D.factions.Enraged);return _}function u1(_,w){let Q=_.components.type[w]?.type;return Q===D.entities.Graffiticyan||Q===D.entities.Graffitimagenta||Q===D.entities.Graffitiyellow}function dw(_,w){return _.components.type[w]?.type instanceof q_}function x0(_){return _===D.entities.movableboulder||_===D.entities.movablebox}function N_(_,w){let Q=_.components.type[w]?.type;return!!Q&&x0(Q)}function W1(_,w){let Q={A:D.actions.Wait,B:D.actions.Wait,X:D.actions.Wait,Y:D.actions.Wait},K=_.components.energy[w];if(!!_.lastSpacePositionByEntity[w]&&(K&&K.current>Math.abs(D.actions.Launch.energyDelta)))Q.A=D.actions.Launch;let $=_.components.position[w];if($){let B=_.maps[$.mapId];if(B){let M=B.getTile($.x,$.y);if(M&&!!M.options.mapId&&"x"in M.options&&"y"in M.options)Q.A=D.actions.Enter}let R=A_(_,$),b=0;for(let M of R){if(_.components.pickupable[M]){let E=_.components.type[M]?.type;if(t_(_,M)){if(e_(E)){if(E1(_,w,M)&&S1(_,w)){Q.Y=D.actions.Buy;break}}else if(E1(_,w,M)){Q.Y=D.actions.Buy;break}}else if(e_(E)){if(S1(_,w)){Q.Y=D.actions.Take;break}}}let k=_.components.trigger[M];if(k&&k.type==0&&(K&&K.current>Math.abs(D.actions.Shift.energyDelta)))Q.A=D.actions.Shift,b++;if(_.components.actuator[M])b++}if(s1(_,w).length>0&&R.length-b===1)Q.Y=D.actions.Drop}return Q}var S_={bot_bar:`!
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
!!0 portalstartunknown bot_station 27 16
!!? portalstartunknown
!!D portal bot_station 0 29
!!spawn 3 17 _aToggleTile channel=unlocked_bugger activate=portalstartbugger deactivate=portalstartunknown
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
#..0...............#
#~~~~~~~~~~~~~~~~~~#
#(##################`,bot_prison:`!
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
!!/ leverleft
!!O portal bot_station 26 7
!!Q portal
!!P portal
!!R portal
!!§ portalsewers bot_station_sewers 27 6
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
##############################z#`,bot_station_spire:`!
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
##############################z#`,credits:`!
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
!!spawn 18 16 mop
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
#_#`};function rw(_){let w=void 0;while(typeof(w=_._despawnQueue.shift())<"u")_=f_(_,w);return _}function nw(_){return _}class x_{mapId;x;y;entityName;options;constructor(_,w,Q,K,$={}){this.mapId=_,this.x=w,this.y=Q,this.entityName=K,this.options=$}}function M_(_,w){if(yw(w.entityName)){let Q=w.options,K=Object.hasOwn(Q,"ai")?D.ais[Q.ai]:void 0,$=Object.hasOwn(Q,"dialog")?Q.dialog:void 0,B=Object.hasOwn(Q,"equip")&&m0(Q.equip)?D.items[Q.equip]:null,R=Object.hasOwn(Q,"faction")?D.factions[Q.faction]:void 0,b=Object.hasOwn(Q,"name")?Q.name:void 0,F=D.entities[w.entityName];t1(_,F,{mapId:w.mapId,x:w.x,y:w.y},{ai:K,dialog:$,equippedItem:B,faction:R,name:b})}else if(m0(w.entityName)){let Q={mapId:w.mapId,x:w.x,y:w.y};_1(_,D.items[w.entityName],Q)}else if(U7(w.entityName)){let Q=w.options,K={mapId:w.mapId,x:w.x,y:w.y},$=D.triggersandactuators[w.entityName],B=Object.hasOwn(Q,"channel")?Q.channel:void 0,R=Object.hasOwn(Q,"triggered")?Q.triggered.toLowerCase()==="true":!1,b=Object.hasOwn(Q,"once")?Q.once.toLowerCase()==="true":!1;lw(_,K,{type:$,channel:B,triggered:R,once:b})}else if(G7(w.entityName)){let Q=w.options,K={mapId:w.mapId,x:w.x,y:w.y},$=D.triggersandactuators[w.entityName],B=Object.hasOwn(Q,"channel")?Q.channel:void 0,R=Object.hasOwn(Q,"activate")?D.tiles[Q.activate]:void 0,b=Object.hasOwn(Q,"deactivate")?D.tiles[Q.deactivate]:void 0,F=Object.hasOwn(Q,"spawn")?Q.spawn:void 0,M=void 0;if(yw(F))M=D.entities[F];else if(m0(F))M=D.items[F];cw(_,K,{type:$,channel:B,activate:R,deactivate:b,spawn:M})}return _}function yw(_){return Object.hasOwn(D.entities,_)}function m0(_){return Object.hasOwn(D.items,_)}function U7(_){return Object.hasOwn(D.triggersandactuators,_)&&_.startsWith("_t")}function G7(_){return Object.hasOwn(D.triggersandactuators,_)&&_.startsWith("_a")}function u_(_,w={}){return{type:_,options:w}}function ow(_){for(let w in S_){let Q=m_(S_[w]);if(!Q.isSnippet()){_.maps[w]=Q;for(let K of Q._spawnCommands)_=M_(_,K);Q._spawnCommands=[]}}return _}function sw(_,w){let Q=H1(_,w);for(let K=0;K<Q.length;K++){let $=Q[K];_=f_(_,$)}return _.maps[w]=void 0,delete _.maps[w],_}class F_{id;widthTiles;heightTiles;seed;_tiles;_initialTiles;entropy;_cacheMovementMap;_spawnCommands;constructor(_,w,Q,K=[]){if(this.id=_,this.widthTiles=w,this.heightTiles=Q,this.seed=null,this._tiles=new y1(w,Q,u_(D.tiles.voidtrue)),this._initialTiles=new y1(w,Q,u_(D.tiles.voidtrue)),K.length>0)for(let $=0;$<Q;$++)for(let B=0;B<w;B++){let R=K[$*w+B];this._tiles.set(B,$,R),this._initialTiles.set(B,$,JSON.parse(JSON.stringify(R)))}this.entropy=0,this._cacheMovementMap=null,this._spawnCommands=[]}getTile(_,w){let Q=this._tiles.get(_,w);if(Q)return Q;return{}}setTile(_,w,Q,K={}){this._cacheMovementMap=null;let $=this._tiles.get(_,w);return this._tiles.set(_,w,u_(Q,K)),$}resetEntropy(){for(let _=0;_<this.heightTiles;_++)for(let w=0;w<this.widthTiles;w++){let Q=this._tiles.get(w,_);if(Q)this._initialTiles.set(w,_,JSON.parse(JSON.stringify(Q)))}this.entropy=0}pasteOnto(_,w=0,Q=0){for(let K=0;K<_.heightTiles;K++)for(let $=0;$<_.widthTiles;$++){let B=_.getTile($,K);if(B.type!==D.tiles.voidtrue)this.setTile($+w,K+Q,B.type,B.options)}return this}circular(){let _=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let w=-_;w<=_;w++)for(let Q=-_;Q<=_;Q++)if(Q*Q+w*w>=_*_)this.setTile(Q+_-1,w+_-1,D.tiles.voidtrue);return this}sample(_,w){let Q=Math.floor(this.widthTiles/_),K=Math.floor(this.heightTiles/w),$=[];for(let B=0;B<w;B++)for(let R=0;R<_;R++){let b={};for(let m=0;m<K;m++)for(let p=0;p<Q;p++){let r=this.getTile(R*Q+p,B*K+m);if(b[r.type.name])b[r.type.name]+=1;else b[r.type.name]=1}let F="",M=0;for(let[m,p]of Object.entries(b))if(p>M)F=m,M=p;let k="space"+F,h=D.tiles[k]||D.tiles.spacevoid,E={mapId:this.id,x:R*Q,y:B*K};$.push(u_(h,E))}return new F_("__sampled_"+_+"_"+w+"_"+this.id,_,w,$)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let _=Array(this.heightTiles);for(let w=0;w<this.heightTiles;w++){_[w]=Array(this.widthTiles);for(let Q=0;Q<this.widthTiles;Q++){let K=this._tiles.get(Q,w);if(_[w][Q]=0,K&&K.type.isBlocking)_[w][Q]=1}}return this._cacheMovementMap=_,_}isSnippet(){return this.id===void 0||this.id===null||this.id===""}static createEmptyMap(_,w,Q){let K=[];for(let B=0;B<_*w;B++)K.push(u_(Q));return new F_(null,_,w,K)}}function m_(_){let w=_.split(/\r?\n/),Q=_[0],K="",$=0,B=0,R={},b=[],F=[];for(let k=0;k<w.length;k++){let h=w[k];if(h.startsWith(Q)){if(h.startsWith(Q+"!id"))K=h.slice(5);else if(h.startsWith(Q+"!size")){let E=h.split(" ").slice(1);$=Number(E[0]),B=Number(E[1])}else if(h.startsWith(Q+"!spawn")){let E=h.split(" ").slice(1),m={};if(E.length>3){let p=E.slice(3);for(let r of p){let s=r.split("=");m[s[0]]=s[1]}}b.push(new x_(K,Number(E[0]),Number(E[1]),E[2],m))}else if(h.startsWith(Q+"!")){let E=h[2],m=h.slice(4);R[E]=m}}else for(let E=0;E<h.length;E++){let m=h[E],p=R[m];if(g.debug&&!p)console.log("DEBUG Broken map: "+K);let r=p.split(" "),s={};if(p.startsWith("portal ")||p.startsWith("portalclosed ")||p.startsWith("portalhidden ")||p.startsWith("portalsewers ")||p.startsWith("portallauncher ")||p.startsWith("portalstart")){if(p=r[0],r.length===4)s.mapId=r[1],s.x=Number(r[2]),s.y=Number(r[3])}if(p.startsWith("wall ")&&r.length>=2)p="wall",s.sign=r[1];if(p.startsWith("terminal ")){if(p="terminal",r.length>=2)s.screen=r[1]}F.push(u_(D.tiles[p],s))}}let M=new F_(K,$,B,F);return M._spawnCommands=b,M}var ew=N0(Q0(),1);class C_{seed;_rotRng;constructor(_=1337){this.seed=_,this._rotRng=ew.RNG.clone(),this._rotRng.setSeed(_)}getPercentage(){return this._rotRng.getPercentage()}getItem(_){return this._rotRng.getItem(_)}}function tw(_,w=1337,Q=64,K=4096){let $=F_.createEmptyMap(Q,Q,D.tiles.wall),B=new C_(w),R=Q/2-1,b={x:R,y:R};$.setTile(b.x,b.y,D.tiles.void);for(let F=0;F<K;F++){switch(B.getItem([0,1,2,3])){case 0:b=Z0(b,0,-1,Q);break;case 1:b=Z0(b,1,0,Q);break;case 2:b=Z0(b,0,1,Q);break;case 3:b=Z0(b,-1,0,Q);break}$.setTile(b.x,b.y,D.tiles.void)}return $.id=`gen:dungeon=${w}`,_.maps[$.id]=$,_}function Z0(_,w,Q,K){return{x:Math.max(0,Math.min(K-1,_.x+w)),y:Math.max(0,Math.min(K-1,_.y+Q))}}function _6(_,w){if(w?.newMapId?.startsWith("gen:dungeon")){let Q=w?.newMapId,K=Number(Q?.split("=").at(-1));if(_=tw(_,K),w.entityId.startsWith("player"))_.currentMapId=Q;let $=_.components.position[w.entityId];$.mapId=Q,$.x=w.newX,$.y=w.newY}return _}function w6(_,w){if(w.seed===1337)_=M_(_,new x_(w.id,130,127,"Valkyrie",{faction:"Spirits"})),_=M_(_,new x_(w.id,124,127,"Valkyrie",{faction:"Spirits"})),_=M_(_,new x_(w.id,127,130,"trident"));else{let Q=new C_(w.seed);for(let K=0;K<w.heightTiles;K++)for(let $=0;$<w.widthTiles;$++){let B=w.getTile($,K);if(Q.getPercentage()<=1&&(B.type===D.tiles.void||B.type===D.tiles.tree)){let R=Q.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(R){case"Deviant":case"Pioneer":_=M_(_,new x_(w.id,$,K,R,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":_=M_(_,new x_(w.id,$,K,R));break}}}}return _}var K0=N0(Q0(),1);var H7=1337,J6=55;function Q6(_,w=H7){K0.RNG.setSeed(w);let Q=new K0.Noise.Simplex,K=256,$=256,B=[];for(let F=0;F<$;F++)for(let M=0;M<K;M++){let k=Q.get(M/J6,F/J6),h;if(k<=-0.5)h=D.tiles.water;else if(k<=0)h=D.tiles.void;else if(k<0.5)h=D.tiles.tree;else h=D.tiles.rock;B.push(u_(h))}let R="simplex="+w,b=new F_(R,K,$,B);return b.seed=w,_.maps[R]=b,_}var L7=1337;function Z6(_,w=L7){let Q=F_.createEmptyMap(1024,1024,D.tiles.void);Q.id="solarsystem="+w,_.maps[Q.id]=Q;let K=new C_(w),$=new C_(w),B=K.getItem([2,3,4,5,6,7,8,9,10,11,12]),R=128,b=512-R,F=Math.floor(b/B);Q=D7(Q,K);let M=F_.createEmptyMap(128,128,D.tiles.voidtrue);j7(M,63,63,62,D.tiles.star),R7(M,63,63,D.tiles.star),Q.pasteOnto(M,448,448);for(let r=R;r<512;r+=F){let s=K.getItem([-1,1])*K.getItem(Y1(r)),Y_=K.getItem([-1,1])*Math.floor(Math.sqrt(r*r-s*s));s+=512,Y_+=512;let z_=K.getItem([16,24,32]),B_=Math.floor(z_/2)-1;_=Q6(_,w);let $_=_.maps["simplex="+w],A=S_.launcher;A=A.replace("!!O portallauncher space 0 0",`!!O portallauncher ${Q.id} ${s} ${Y_}`);let I=m_(A),x=$.getItem(Y1($_.widthTiles-I.widthTiles)),c=$.getItem(Y1($_.heightTiles-I.heightTiles));$_.pasteOnto(I,x,c),_=w6(_,$_);let o=$_.sample(z_,z_).circular();Q.pasteOnto(o,s-(B_+1),Y_-(B_+1)),w++}let k=S_.space_bot_station;k=k.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let h=m_(k);Q.pasteOnto(h,583,398);let E=m_(S_.square_falcon);Q.pasteOnto(E,590,373);let m=m_(S_.vincent_rocket);Q.pasteOnto(m,512,430);let p=m_(S_.vincent_rocket);return Q.pasteOnto(p,520,432),_}function D7(_,w){for(let Q=0;Q<_.heightTiles;Q++)for(let K=0;K<_.widthTiles;K++)if(w.getPercentage()<=1)_.setTile(K,Q,w.getItem([D.tiles.spacevoidstarwhite,D.tiles.spacevoidstaryellow]));return _}function j7(_,w,Q,K,$){let B=1-K,R=1,b=-2*K,F=0,M=K;_.setTile(w,Q+K,$),_.setTile(w,Q-K,$),_.setTile(w+K,Q,$),_.setTile(w-K,Q,$);while(F<M){if(B>=0)M-=1,b+=2,B+=b;F+=1,R+=2,B+=R,_.setTile(w+F,Q+M,$),_.setTile(w-F,Q+M,$),_.setTile(w+F,Q-M,$),_.setTile(w-F,Q-M,$),_.setTile(w+M,Q+F,$),_.setTile(w-M,Q+F,$),_.setTile(w+M,Q-F,$),_.setTile(w-M,Q-F,$)}return _}function R7(_,w,Q,K){let{widthTiles:$,heightTiles:B}=_,R=[];R.push({x:w,y:Q});let b=void 0;while(typeof(b=R.shift())<"u"){let F=b,M=b;if(b.x+1<$)M={x:b.x+1,y:b.y};while(_.getTile(F.x,F.y).type!==K){if(_.setTile(F.x,F.y,K),F.y+1<B){if(_.getTile(F.x,F.y+1).type!==K)R.push({x:F.x,y:F.y+1})}if(F.y-1>=0){if(_.getTile(F.x,F.y-1).type!==K)R.push({x:F.x,y:F.y-1})}if(F.x-1>=0)F.x-=1;else break}while(_.getTile(M.x,M.y).type!==K){if(_.setTile(M.x,M.y,K),M.y+1<B){if(_.getTile(M.x,M.y+1).type!==K)R.push({x:M.x,y:M.y+1})}if(M.y-1>=0){if(_.getTile(M.x,M.y-1).type!==K)R.push({x:M.x,y:M.y-1})}if(M.x+1<$)M.x+=1;else break}}return _}function K6(_,w){if(w?.oldMapId?.startsWith("shop_instance")){_=sw(_,w.oldMapId);let Q=_.maps[w.newMapId],K=Q.getTile(w.newX,w.newY);Q.setTile(w.newX,w.newY,K.type,{mapId:"shop_instance",x:w.oldX,y:w.oldY})}if(w?.newMapId?.startsWith("shop_instance")){let Q=m_(S_.shop_instance);if(Q.id="shop_instance_"+w.oldMapId+"_"+w.entityId,Q.setTile(w.newX,w.newY,D.tiles.portal,{mapId:w.oldMapId,x:w.oldX,y:w.oldY}),_.maps[w.oldMapId].setTile(w.oldX,w.oldY,w.oldTileType,{mapId:Q.id,x:w.newX,y:w.newY}),w.entityId.startsWith("player"))_.currentMapId=Q.id;let $=_.components.position[w.entityId];if($.mapId=Q.id,$.x=w.newX,$.y=w.newY,delete _.maps.shop_instance,_.maps[Q.id]=Q,_=A1(_,D.items.hammer,{mapId:Q.id,x:4,y:4},0,-200),_=A1(_,D.items.pickaxe,{mapId:Q.id,x:4,y:6},0,-200),_=A1(_,D.items.battery,{mapId:Q.id,x:4,y:8},0,-200),_=A1(_,D.items.gold,{mapId:Q.id,x:4,y:10},1,-1e4),_=M_(_,{mapId:Q.id,x:6,y:2,entityName:"AeroBot",options:{faction:z1(_,w.entityId).name,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}}),w?.oldMapId.startsWith("bot_stadium"))_=M_(_,{mapId:Q.id,x:1,y:12,entityName:"WorkBot",options:{faction:z1(_,w.entityId).name,dialog:"shop_instance_workbot_shopper"}});else if(w?.oldMapId.startsWith("bot_bar"))_=M_(_,{mapId:Q.id,x:4,y:11,entityName:"AeroBot",options:{faction:z1(_,w.entityId).name,dialog:"shop_instance_aerobot_shopper"}})}return _}var F7=["actuator","ai","collision","currency","dialog","energy","faction","interaction","inventory","name","pickupable","position","trigger","type"];function V6(){let _={};for(let w of F7)_[w]={};return _}function q6(){return{_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_idManager:{nextId:1,usedIds:new Set,freeIds:[]},_menuOpen:!0,_uploadNow:!1,actionLog:[],chatLog:[],currentMapId:"",cache:{entitiesByMap:{},entitiesByLocation:{}},effects:{},entities:{},lastSpacePositionByEntity:{},maps:{},rng:new C_,statistics:{},components:V6()}}function z6(_){let w=void 0;while(typeof(w=_._combatQueue.shift())<"u"){let Q=-1,K=-5,$=Ow(_,w.entityId);if($){if(Q=$.energyCost,v_(_,w.entityId,D.effects.Recuperation))Q=Math.min(-1,Q+1);K=-1*Math.abs($.damage)}_._energyQueue.push({entityId:w.entityId,energyDelta:Q}),_._energyQueue.push({entityId:w.otherEntityId,energyDelta:K});let{entityId:B,otherEntityId:R}=w,b=_.components.type[B]?.type,F=_.components.type[R]?.type,M=_.components.name[B]?.name?_.components.name[B].name:b.name,k=_.components.name[R]?.name?_.components.name[R].name:F.name;_=w_(_,`${M} did ${Math.abs(K)} damage to ${k} at cost of ${Math.abs(Q)} energy.`)}return _}function $6(_){let w=void 0,Q=new Set;while(typeof(w=_._energyQueue.shift())<"u"){let K=!!_.entities[w.entityId],$=_.components.energy[w.entityId];if(K&&$&&!dw(_,w.entityId)){if($.current=Math.min($.current+w.energyDelta,$.max),$.current<=0)Q.add(w.entityId)}}for(let K of Q){let $=_.components.type[K]?.type,B=_.components.position[K],R=_.components.energy[K];_._despawnQueue.push(K);let b=_.components.name[K]?.name?_.components.name[K].name:$.name;if(!N_(_,K)){let F=Math.max(1,Math.floor(R.max/3));_=Cw(_,F,B),_=w_(_,`${b} destroyed leaving behind Junk.`)}if(K===J_()){let F=o1(_,K);_=w_(_,`Game over! ${F} turns.`),_=G1(_,K,1,1)}}return _}function X6(_){return _=xw(_),_=z6(_),_=uw(_),_=$6(_),_=Fw(_),_=Dw(_),_=rw(_),_=nw(_),_}class Y6{p=[];constructor(_){this.p=Array(512);let w=Array(256);for(let K=0;K<256;K++)w[K]=K;let Q=new C_(_);for(let K=255;K>0;K--){let $=Q.getItem(Y1(K+1));[w[K],w[$]]=[w[$],w[K]]}for(let K=0;K<256;K++)this.p[K]=this.p[K+256]=w[K]}fade(_){return _*_*_*(_*(_*6-15)+10)}lerp(_,w,Q){return w+_*(Q-w)}grad(_,w,Q,K){let $=_&15,B=$<8?w:Q,R=$<4?Q:$===12||$===14?w:K;return(($&1)===0?B:-B)+(($&2)===0?R:-R)}noise(_,w,Q){let K=Math.floor(_)&255,$=Math.floor(w)&255,B=Math.floor(Q)&255;_-=Math.floor(_),w-=Math.floor(w),Q-=Math.floor(Q);let R=this.fade(_),b=this.fade(w),F=this.fade(Q),M=this.p[K]+$,k=this.p[M]+B,h=this.p[M+1]+B,E=this.p[K+1]+$,m=this.p[E]+B,p=this.p[E+1]+B;return(this.lerp(F,this.lerp(b,this.lerp(R,this.grad(this.p[k],_,w,Q),this.grad(this.p[m],_-1,w,Q)),this.lerp(R,this.grad(this.p[h],_,w-1,Q),this.grad(this.p[p],_-1,w-1,Q))),this.lerp(b,this.lerp(R,this.grad(this.p[k+1],_,w,Q-1),this.grad(this.p[m+1],_-1,w,Q-1)),this.lerp(R,this.grad(this.p[h+1],_,w-1,Q-1),this.grad(this.p[p+1],_-1,w-1,Q-1))))+1)/2}}class c0{width;height;seed;constructor(_,w,Q){this.width=_,this.height=w,this.seed=Q}generate(_,w){let Q=new Y6(this.seed),K=[],$=D.tiles.void,B=D.tiles.water,R=D.tiles.tree,b=D.tiles.rock;for(let F=0;F<this.height;F++)for(let M=0;M<this.width;M++){let k=M/this.width*5-2.5,h=F/this.height*5-2.5,E=this.getOctaveNoise(Q,k,h,0,4,0.5);E=(E-0.5)*2+0.5,E=Math.max(0,Math.min(1,E));let m;if(E<0.25)m=B;else if(E<0.5)m=$;else if(E<0.75)m=R;else m=b;K.push(u_(m))}return new F_(_,this.width,this.height,K)}getOctaveNoise(_,w,Q,K,$,B){let R=0,b=1,F=1,M=0;for(let k=0;k<$;k++)R+=_.noise(w*b,Q*b,K*b)*F,M+=F,F*=B,b*=2;return R/M}}var b7=42;function U6(_,w=b7){let K=new c0(256,256,w).generate("overworld="+w,"Overworld");return _.maps[K.id]=K,_}function G6(_,w){let Q=_.components.position[w];if(g.debug&&!!Q)return`DEBUG: ${w} at ${Q.mapId},${Q.x},${Q.y}`;return""}async function p0(_){let w=v7(_);return fetch(g.leaderboardUploadUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)})}function v7(_){return{username:g.username,passwordHash:g.passwordHash,clientRunId:g.clientRunId,actionLog:_.actionLog.join(""),version:g.version}}var P7=1,L1=[],J1=null;function M7(){if(typeof document>"u")return null;if(!J1){if(J1=document.getElementById("uisyslog"),!J1)J1=document.createElement("div"),J1.id="uisyslog",document.body.appendChild(J1)}return J1}function B6(){let _=M7();if(!_)return;let w=L1.slice(-3);_.innerHTML="";for(let Q of w){let K=document.createElement("div");K.textContent=Q.text,_.appendChild(K)}}function V_(_){let w=P7++,Q=setTimeout(()=>{C7(w)},5000);L1.push({id:w,text:_,timerId:Q});while(L1.length>3){let K=L1.shift();if(K&&K.timerId)clearTimeout(K.timerId)}B6()}function C7(_){let w=L1.findIndex((Q)=>Q.id===_);if(w!==-1){let[Q]=L1.splice(w,1);if(Q&&Q.timerId)clearTimeout(Q.timerId);B6()}}function k7(_,w){_._menuOpen=!0,_=w_(_,"?: Prints this help."),_=w_(_,"M/Gamepad Start: Hide/show log.");let Q=W1(_,w);_=w_(_,`1/E/Gamepad A: ${Q.A.name}`),_=w_(_,`2/Q/Gamepad B: ${Q.B.name}`),_=w_(_,`3/X/Gamepad X: ${Q.X.name}`),_=w_(_,`4/Y/Z/Gamepad Y: ${Q.Y.name}`);let K=G6(_,w);if(K)_=w_(_,K);return _}function f7(_){let w="";if(typeof _==="string"){let $=O7(_,"utf-8"),B=JSON.parse($);if(B.version!==g.version)return;w=B.actionLog||""}else{if(_.version!==void 0&&_.version!==g.version)return;w=_.actionLog||""}let Q=new g1;Q.init(),Q.play(w);let K=Q.state.statistics[J_()]||{0:0,1:0,2:0};return console.log(JSON.stringify(K)),K}class g1{state;constructor(_=q6()){this.state=_}static runHeadless(_){return f7(_)}init(){return this.state=B1(this.state,0,gw),this.state=B1(this.state,0,_6),this.state=B1(this.state,0,K6),this.state=B1(this.state,1,bw),this.state=B1(this.state,2,vw),this.state=Z6(this.state),this.state=ow(this.state),this.state=U6(this.state),this.state.currentMapId="botmos_hull_selection",_0(this.state,{type:3,channel:"botmos_win_condition",triggered:!1,once:!1,stat:2,statThreshold:1}),_0(this.state,{type:3,channel:"botmos_lose_condition",triggered:!1,once:!1,stat:1,statThreshold:1}),w0(this.state,{type:5,channel:"botmos_win_condition"}),w0(this.state,{type:5,channel:"botmos_lose_condition"}),_0(this.state,{type:3,channel:"unlocked_bugger",triggered:!1,once:!0,stat:0,statThreshold:10}),w0(this.state,{type:4,channel:"unlocked_bugger"}),T0(this.state,9,5,this.state.currentMapId,J_()),this.state}update(_,w=!1){let Q=J_(),K=!!this.state.entities[Q];if(!K)this.state.currentMapId="botmos_hull_selection",T0(this.state,9,5,this.state.currentMapId,J_()),K=!0;if(K){if(_){switch(_){case D.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case D.commands["?"]:this.state=k7(this.state,Q);break;default:this.state=Ew(this.state,Q,_),this.state=X6(this.state)}if(this.state.actionLog.push(_.key),this.state._uploadNow&&!w){try{p0(this.state),V_("Run uploaded to leaderboard")}catch($){console.error($)}this.state._uploadNow=!1}}}return this.state}play(_){for(let w=0;w<_.length;w++){let Q=_[w];this.update(D.commands[Q],!0)}return this.state}}var A7=1,W_=null,b_=[],V0=!1,W6=void 0;function S7(){if(typeof document>"u"||!document.body)return null;if(W_)return W_;W_=document.createElement("div"),W_.id="ui-touch-overlay";let _=g.uiTouchGridThickness??A7,w=D.colors.cybergreen;Object.assign(W_.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"0px",boxSizing:"border-box",zIndex:"15",pointerEvents:"none",opacity:"0",transition:"opacity 0.25s ease-out"}),b_=[];for(let Q=0;Q<3;Q++){let K=[];for(let $=0;$<3;$++){let B=document.createElement("div");B.dataset.row=String(Q),B.dataset.col=String($),Object.assign(B.style,{border:`${_}px solid ${w}`,color:w,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",fontFamily:"monospace",fontSize:`${g.fontSize||16}px`,fontWeight:"bold",userSelect:"none",padding:"4px",boxSizing:"border-box"}),W_.appendChild(B),K.push(B)}b_.push(K)}return document.body.appendChild(W_),W_}function q0(){return V0}function H6(_){if(!W_&&typeof document<"u")S7();if(V0=!0,d0(_),W_)W_.style.display="grid",W_.offsetHeight,W_.style.opacity="1"}function z0(){if(V0=!1,W_)W_.style.opacity="0",W_.style.display="none"}function d0(_){if(_)W6=_;else _=W6;if(!V0||!b_||b_.length!==3)return;let w={A:D.actions.Wait,B:D.actions.Wait,X:D.actions.Wait,Y:D.actions.Wait};if(_){let Q=J_();if(_.entities[Q])w=W1(_,Q)}b_[0][0].innerText=`2: ${w.B.name}`,b_[0][1].innerText="▲",b_[0][2].innerText=`1: ${w.A.name}`,b_[1][0].innerText="◀",b_[1][1].innerText="",b_[1][2].innerText="▶",b_[2][0].innerText=`4: ${w.Y.name}`,b_[2][1].innerText="▼",b_[2][2].innerText=`3: ${w.X.name}`}var __={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,x:!1,y:!1,menu:!1,help:!1},o0=[],G0=void 0,s0=void 0,a0=-D.constants.MIN_TURN_SPEED_IN_MS;function j1(_,w=Date.now()){if(_===null)return!1;if(g.run)return!1;if(G0!==void 0&&w-a0>=D.constants.MIN_TURN_SPEED_IN_MS)return a0=w,h1=_,G0(_),!0;return!1}function D1(_){if(_&&_.preventDefault)_.preventDefault();if(_&&_.stopPropagation)_.stopPropagation()}var L6={w:"up",ArrowUp:"up",a:"left",ArrowLeft:"left",s:"down",ArrowDown:"down",d:"right",ArrowRight:"right","1":"a",e:"a","2":"b",q:"b"," ":"b","3":"x",x:"x","4":"y",y:"y",z:"y",m:"menu","?":"help"},h1=null;function E7(){let _=null;if(__.right)_=D.commands.E;if(__.left)_=D.commands.W;if(__.down)_=D.commands.S;if(__.up)_=D.commands.N;if(__.up&&__.right){if(_===D.commands.N&&h1===D.commands.N)_=D.commands.E}if(__.up&&__.left){if(_===D.commands.N&&h1===D.commands.N)_=D.commands.W}if(__.down&&__.right){if(_===D.commands.S&&h1===D.commands.S)_=D.commands.E}if(__.down&&__.left){if(_===D.commands.S&&h1===D.commands.S)_=D.commands.W}if(__.a)_=D.commands.A;if(__.b)_=D.commands.B;if(__.x)_=D.commands.X;if(__.y)_=D.commands.Y;if(__.menu)_=D.commands.M;if(__.help)_=D.commands["?"];if(_!==null)o0.push(_)}function R6(){E7();let _=o0.shift()||null;return o0=[],_}var X0=null,Y0=null,U0=!1,y0=0,$0=()=>{if(U0=!1,X0)clearTimeout(X0),X0=null;if(Y0)clearInterval(Y0),Y0=null};if(typeof document<"u"&&document.body){let w=function(Q,K,$){if(!q0())return!1;if(Q===1&&K===1)return z0(),D1($),y0=Date.now(),!0;return!1};document.body.addEventListener("keydown",function(Q){if(Q.defaultPrevented)return;let K=L6[Q.key];if(K)__[K]=!0,D1(Q),j1(R6())}),document.body.addEventListener("keyup",function(Q){if(Q.defaultPrevented)return;let K=L6[Q.key];if(K)__[K]=!1,D1(Q)});let _=[[D.commands.B,D.commands.N,D.commands.A],[D.commands.W,D.commands.M,D.commands.E],[D.commands.Y,D.commands.S,D.commands.X]];if(document.body.addEventListener("pointerdown",function(Q){if(Q.defaultPrevented)return;let K=typeof document<"u"?document.getElementById("uihelp"):null;if(K&&Q.target&&K.contains(Q.target))return;$0();let $=Math.floor(Q.clientX/document.body.clientWidth*3),B=Math.floor(Q.clientY/document.body.clientHeight*3);if(w(B,$,Q))return;let R=_[B]?.[$];if(R)U0=!0,y0=Date.now(),j1(R),D1(Q),X0=setTimeout(()=>{if(!U0)return;j1(R),Y0=setInterval(()=>{if(!U0)return;j1(R)},e0)},i0)}),typeof window<"u")window.addEventListener("pointerup",$0),window.addEventListener("pointercancel",$0),window.addEventListener("blur",$0);document.body.addEventListener("click",function(Q){if(Q.defaultPrevented||Date.now()-y0<300)return;let K=typeof document<"u"?document.getElementById("uihelp"):null;if(K&&Q.target&&K.contains(Q.target))return;let $=Math.floor(Q.clientX/document.body.clientWidth*3),B=Math.floor(Q.clientY/document.body.clientHeight*3);if(w(B,$,Q))return;let R=_[B]?.[$];if(R)j1(R),D1(Q)}),document.body.addEventListener("mousemove",function(Q){if(Q.defaultPrevented)return;if(G0!==void 0&&s0!==void 0)s0(Q),D1(Q)})}var i0=250,e0=80,N7=16,I1=0.5,D_={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,SELECT:8,START:9,DPAD_UP:12,DPAD_DOWN:13,DPAD_LEFT:14,DPAD_RIGHT:15};class F6{states={up:{pressed:!1,pressStartTime:0,lastTriggerTime:0},down:{pressed:!1,pressStartTime:0,lastTriggerTime:0},left:{pressed:!1,pressStartTime:0,lastTriggerTime:0},right:{pressed:!1,pressStartTime:0,lastTriggerTime:0},a:{pressed:!1,pressStartTime:0,lastTriggerTime:0},b:{pressed:!1,pressStartTime:0,lastTriggerTime:0},x:{pressed:!1,pressStartTime:0,lastTriggerTime:0},y:{pressed:!1,pressStartTime:0,lastTriggerTime:0},menu:{pressed:!1,pressStartTime:0,lastTriggerTime:0},help:{pressed:!1,pressStartTime:0,lastTriggerTime:0}};dirActive=!1;dirPressStartTime=0;lastDirTriggerTime=0;lastDirCombo="";reset(){let _=["up","down","left","right","a","b","x","y","menu","help"];for(let w of _)this.states[w]={pressed:!1,pressStartTime:0,lastTriggerTime:0};this.dirActive=!1,this.dirPressStartTime=0,this.lastDirTriggerTime=0,this.lastDirCombo=""}update(_,w=Date.now(),Q=!0){let K=!1,$=["a","b","x","y","menu","help"];for(let b of $){let F=_[b]||!1,M=this.states[b];if(F)if(!M.pressed)M.pressed=!0,M.pressStartTime=w,M.lastTriggerTime=w,K=!0;else{let k=w-M.pressStartTime,h=w-M.lastTriggerTime;if(k>=i0&&h>=e0)M.lastTriggerTime=w,K=!0}else M.pressed=!1}let B=`${_.up?"U":""}${_.down?"D":""}${_.left?"L":""}${_.right?"R":""}`;if(B.length>0){if(!this.dirActive)this.dirActive=!0,this.dirPressStartTime=w,this.lastDirTriggerTime=0,this.lastDirCombo="";let b=B!==this.lastDirCombo,F=w-this.dirPressStartTime,M=w-this.lastDirTriggerTime,k=F>=i0&&M>=e0;if(Q&&(b||k))this.lastDirCombo=B,this.lastDirTriggerTime=w,K=!0}else this.dirActive=!1,this.lastDirCombo="";return K}}var u7=new F6,D6=void 0,r0=void 0,j6=!1,T1=new Map;function j_(_){if(!_)return!1;if(typeof _==="boolean")return _;if(typeof _.pressed==="boolean")return _.pressed;if(typeof _.value==="number")return _.value>I1;return!1}function x1(_=Date.now()){if(typeof navigator>"u"||g.run)return;let w=navigator.getGamepads||navigator.webkitGetGamepads||navigator.mozGetGamepads,Q=w?w.call(navigator):null;if(Q){let k=Array.from(Q);for(let h=0;h<k.length;h++){let E=k[h];if(E&&E.connected!==!1)T1.set(E.index!==void 0?E.index:h,E);else if(E&&E.connected===!1)T1.delete(E.index!==void 0?E.index:h)}}let K=Array.from(T1.values()),$=!1,B={up:!1,down:!1,left:!1,right:!1,a:!1,b:!1,x:!1,y:!1,menu:!1,help:!1};for(let k=0;k<K.length;k++){let h=K[k];if(!h||h.connected===!1)continue;$=!0;let E=h.buttons||[],m=h.axes||[];if(j_(E[D_.DPAD_UP])||m[1]!==void 0&&m[1]<-I1)B.up=!0;if(j_(E[D_.DPAD_DOWN])||m[1]!==void 0&&m[1]>I1)B.down=!0;if(j_(E[D_.DPAD_LEFT])||m[0]!==void 0&&m[0]<-I1)B.left=!0;if(j_(E[D_.DPAD_RIGHT])||m[0]!==void 0&&m[0]>I1)B.right=!0;if(j_(E[D_.A]))B.a=!0;if(j_(E[D_.B]))B.b=!0;if(j_(E[D_.X]))B.x=!0;if(j_(E[D_.Y]))B.y=!0;if(j_(E[D_.LB])||j_(E[D_.RB])||j_(E[D_.LT])||j_(E[D_.RT]))B.help=!0;if(j_(E[D_.START])||j_(E[D_.SELECT]))B.menu=!0}if(!$)return;let R=B.up||B.down||B.left||B.right||B.a||B.b||B.x||B.y||B.menu||B.help,b=D.constants.MIN_TURN_SPEED_IN_MS,F=_-a0>=b,M=u7.update(B,_,F);if(R||j6)__.up=B.up,__.down=B.down,__.left=B.left,__.right=B.right,__.a=B.a,__.b=B.b,__.x=B.x,__.y=B.y,__.menu=B.menu,__.help=B.help,j6=R;if(M){let k=R6();if(k!==null)j1(k,_)}}function n0(_=N7){if(typeof window>"u")return;if(D6===void 0)D6=setInterval(()=>{x1()},_);if(r0===void 0&&typeof requestAnimationFrame<"u"){let w=()=>{x1(),r0=requestAnimationFrame(w)};r0=requestAnimationFrame(w)}}if(typeof window<"u"){n0();let _=(K)=>{if(K.gamepad)T1.set(K.gamepad.index!==void 0?K.gamepad.index:0,K.gamepad);V_("Gamepad connected."),n0(),x1()},w=(K)=>{if(K.gamepad)T1.delete(K.gamepad.index);V_("Gamepad disconnected."),x1()};window.addEventListener("gamepadconnected",_),window.addEventListener("gamepaddisconnected",w);let Q=()=>{n0(),x1()};window.addEventListener("pointerdown",Q,{passive:!0}),window.addEventListener("keydown",Q,{passive:!0}),window.addEventListener("focus",Q,{passive:!0})}function b6(_){G0=_}function v6(_){s0=_}var A6=N0(Q0(),1);var B0={__10:[0,0],__11:[16,0],__12:[32,0],__13:[48,0],__14:[64,0],__15:[80,0],__1:[96,0],_1:[112,0],__2:[128,0],_2:[144,0],__3:[160,0],_3:[176,0],__4:[192,0],_4:[208,0],__5:[224,0],_5:[240,0],__6:[256,0],_6:[272,0],__7:[288,0],_7:[304,0],__8:[320,0],_8:[336,0],__9:[352,0],_9:[368,0],AeroBot_a:[384,0],AeroBot:[400,0],battery:[416,0],BioAbsorber:[432,0],Bugger_a:[448,0],Bugger:[464,0],chargepad:[480,0],cheat:[496,0],chest:[512,0],Cleaner_a:[528,0],Cleaner:[544,0],Deviant:[560,0],drain:[576,0],energy:[592,0],gold:[608,0],goo:[624,0],GraffitiCleaner:[640,0],Graffiticyan:[656,0],Graffitimagenta:[672,0],Graffitiyellow:[688,0],hammer:[704,0],junk:[720,0],leverleft:[736,0],leverright:[752,0],matter:[768,0],mop:[784,0],movableboulder:[800,0],movablebox:[816,0],moveeast:[832,0],movenorth:[848,0],movesouth:[864,0],movewest:[880,0],pickaxe:[896,0],Pioneer_a:[912,0],Pioneer:[928,0],portalclosed:[944,0],portalhidden:[960,0],portallauncher:[976,0],portal:[992,0],portalsewers:[1008,0],portalstartaerobot:[1024,0],portalstartbugger:[1040,0],portalstartunknown:[1056,0],portalstartworkbot:[1072,0],Recharger:[1088,0],Recuperation:[1104,0],RichBot_a:[1120,0],RichBot:[1136,0],RoboRat_a:[1152,0],RoboRat:[1168,0],RockCrusher:[1184,0],rock:[1200,0],SageBot_a:[1216,0],SageBot:[1232,0],Screwing:[1248,0],shocker:[1264,0],spacerock:[1280,0],spacetree:[1296,0],spacevoid:[1312,0],spacevoidstarwhite:[1328,0],spacevoidstaryellow:[1344,0],spacewater_a:[1360,0],spacewater:[1376,0],Spirit_a:[1392,0],Spirit:[1408,0],star:[1424,0],terminal:[1440,0],tree:[1456,0],trident:[1472,0],upgradeBioAbsorber:[1488,0],upgradeRecuperation:[1504,0],Valkyrie_a:[1520,0],Valkyrie:[1536,0],voidhidden:[1552,0],void:[1568,0],voidtrue:[1584,0],wall0:[1600,0],wall1:[1616,0],wall2:[1632,0],walla_:[1648,0],wallA:[1664,0],wallb_:[1680,0],wallB:[1696,0],wallc_:[1712,0],wallC:[1728,0],WallCrusher:[1744,0],walld_:[1760,0],wallD:[1776,0],walle_:[1792,0],wallE:[1808,0],wallf_:[1824,0],wallF:[1840,0],wallg_:[1856,0],wallG:[1872,0],wallh_:[1888,0],wallH:[1904,0],walli_:[1920,0],wallI:[1936,0],wallj_:[1952,0],wallJ:[1968,0],wallk_:[1984,0],wallK:[2000,0],walll_:[2016,0],wallL:[2032,0],wallm_:[2048,0],wallM:[2064,0],walln_:[2080,0],wallN:[2096,0],wallo_:[2112,0],wallO:[2128,0],"wall(":[2144,0],"wall)":[2160,0],"wall+":[2176,0],"wall,":[2192,0],"wall.":[2208,0],wall:[2224,0],"wall:":[2240,0],wall_:[2256,0],"wall|":[2272,0],wallp_:[2288,0],wallP:[2304,0],wallq_:[2320,0],wallQ:[2336,0],wallr_:[2352,0],wallR:[2368,0],walls_:[2384,0],wallS:[2400,0],wallstatueaerobot:[2416,0],wallstatuecleaner:[2432,0],wallstatuepioneer:[2448,0],wallstatueworkbot:[2464,0],wallt_:[2480,0],wallT:[2496,0],wallu_:[2512,0],wallU:[2528,0],wallv_:[2544,0],wallV:[2560,0],wallweak:[2576,0],wallw_:[2592,0],wallW:[2608,0],wallx_:[2624,0],wallX:[2640,0],wally_:[2656,0],wallY:[2672,0],wallz_:[2688,0],wallZ:[2704,0],water_a:[2720,0],WaterImmunity:[2736,0],water:[2752,0],watersewage_a:[2768,0],watersewage:[2784,0],WaterShield:[2800,0],WorkBot_a:[2816,0],WorkBot:[2832,0],wrench:[2848,0]};var g7="#74ee15",P6="#f00",W0="#000",h7=0.2,l1=document.createElement("div");l1.id="ui";document.body.appendChild(l1);var Z1=O6(!1);Z1.id="uihelp";Z1.innerText="?";Z1.dataset.tooltip="Press '?' or click for help!";Z1.style.cursor="pointer";if(typeof document<"u"){let _=0,w=(Q)=>{if(Q&&Q.preventDefault)Q.preventDefault();if(Q&&Q.stopPropagation)Q.stopPropagation();let K=Date.now();if(K-_<300)return;if(_=K,q0())z0();else H6()};Z1.addEventListener("pointerdown",w),Z1.addEventListener("click",w)}var H0=ww(),Q1=[];for(let _=0;_<g.uiInventoryMaxDisplaySize;_++)Q1.push(ww());var t0=O6();t0.style.marginRight=`${g.fontSize/2}px`;var m1=[];for(let _=0;_<g.uiEffectsMaxDisplaySize;_++)m1.push(ww());var g_=document.createElement("div");g_.id="uiline";g_.replaceChildren(Z1,H0,...Q1,t0,...m1);l1.replaceChildren(g_);var D0=document.createElement("div");D0.style.display="flex";D0.style.justifyContent="space-between";var L0=document.createElement("div");L0.id="uichatlog";var M6=document.createElement("div");M6.id="uitooltip";D0.replaceChildren(L0,M6);l1.appendChild(D0);var _w=document.createElement("div");_w.id="uimousetooltip";document.body.appendChild(_w);async function C6(_){if(!g.showUI)return;let w=J_(),Q=_.entities[w],K=_.components.energy[w],$=_.components.currency[w],B="";if(!!Q&&!!K&&!!$)B=I7(_,w),l1.style.flexDirection="column-reverse",x7(K);else T7(),B="Game over!",g_.style.color=W0,g_.style.background=P6;t0.innerText=B,m7(_),d0(_)}function I7(_,w){let Q=_.components.type[w]?.type,K=_.components.energy[w],$=_.components.currency[w];o_(H0,Q.name),H0.dataset.tooltip="Hull: "+Q.name;let B=s1(_,w);for(let k=0;k<g.uiInventoryMaxDisplaySize;k++){let h=B[k];if(h)o_(Q1[k],h.name.toLowerCase()),Q1[k].dataset.tooltip=`${h.name} (${Math.abs(h.damage)} damage, ${h.energyCost} energy)`;else o_(Q1[k],null),Q1[k].dataset.tooltip=void 0}let R=Rw(_,w);for(let k=0;k<g.uiEffectsMaxDisplaySize;k++){let h=R[k]?.type.name||null,E=R[k]?.type.tooltip||void 0;o_(m1[k],h),m1[k].dataset.tooltip=E}let b=`${K.max}`;if(K.current<K.max)b=`${K.current}/${K.max}`;let F="";if($.matter>0)F=`${$.matter}M `;let M="";if($.gold>0)M=`${$.gold}G `;return(b+" "+M+F).trimEnd()}function T7(){o_(H0,null);for(let _=0;_<g.uiInventoryMaxDisplaySize;_++)o_(Q1[_],null);for(let _=0;_<g.uiEffectsMaxDisplaySize;_++)o_(m1[_],null)}function x7(_){if(g_.style.background=W0,_.current/_.max<=h7)g_.style.color=W0,g_.style.background=P6;else g_.style.color=g7,g_.style.background=W0}function m7(_){if(_._menuOpen&&!!_.chatLog.length){let w=_.chatLog.slice(-g.chatLogMaxDisplaySize);L0.innerText=w.join(`
`)}else L0.innerText=""}function ww(){let _=document.createElement("span");return o_(_,null),_.style.height=`${g.fontSize}px`,_.style.display="inline-block",_}function O6(_=!0){let w=document.createElement("span");if(w.style.display="inline",_)w.style.marginLeft=`${g.fontSize/2}px`;return w}function o_(_,w){if(w){let Q=B0[w][0];_.style.background=`url('build/tiles.png') -${Q}px 0`,_.style.width=`${g.fontSize}px`}else _.style.width="0px"}function k6(){return _w}var K1="_a",S6=document.createElement("img");S6.src="build/tiles.png";k_.tileSet=S6;k_.tileMap=n7();var F1=new A6.Display(k_);document.body.appendChild(F1.getContainer());var E6=0,N6=0,R1=void 0;function l7(_,w,Q=!1){R1=_;let K=_.currentMapId,$=_.maps[K],B=Q?K1:"",R=0,b=0;E6=w.x-R,N6=w.y-b;let F=p7(w.width,w.height);d7(F,_,w,R,b,B),y7(F,_,w,R,b,B),r7(F)}var f6={x:0,y:0},j0=0;async function s_(_){let w=J_(),K=_.entities[w]?_.components.position[w]:f6,$=c7(K);if(l7(_,$,j0%2==0),C6(_),f6=K,j0++,j0>=128)j0=0}async function u6(){F1._backend.setOptions(k_)}function g6(_,w){let Q=Math.max(0,w-g.bottom);g.cameraWidth=Math.floor(_/g.fontSize),g.cameraHeight=Math.floor(Q/g.fontSize),k_.width=Math.floor(g.cameraWidth*(1/g.zoom)),k_.height=Math.floor(g.cameraHeight*(1/g.zoom))}function h6(_){return[_[0]+E6,_[1]+N6]}function I6(_){if(!R1)return{state:null,tile:null,entities:[]};let w=R1.currentMapId,Q=R1.maps[w],K=_[0],$=_[1],B=Q.getTile(K,$),R=A_(R1,{mapId:w,x:K,y:$}),b=[];if(R)b.push(...R);return{state:R1,tile:B,entities:b}}function c7(_){return{x:_.x-Math.floor(k_.width/2),y:_.y-Math.floor(k_.height/2),width:k_.width,height:k_.height}}var R0=[];function p7(_,w){for(let Q=R0.length;Q<w;Q++)R0[Q]=[];for(let Q=0;Q<w;Q++){let K=R0[Q];for(let $=K.length;$<_;$++)K[$]={chars:[],fg:[],bg:[]};for(let $=0;$<_;$++)K[$].chars.length=0,K[$].fg.length=0,K[$].bg.length=0}return R0}function d7(_,w,Q,K,$,B){let R=w.currentMapId,b=w.maps[R];if(!b)return;for(let F=0;F<Q.height;F++)for(let M=0;M<Q.width;M++){let k=b.getTile(Q.x+M,Q.y+F),h="";if(k?.type)if(k.options.sign)h="#"+k.options.sign;else h=k.type.icon;if(h){let E=K+M,m=$+F;if(_[m]&&_[m][E])_[m][E].chars.push(h+B),_[m][E].fg.push("transparent"),_[m][E].bg.push("transparent")}}}function y7(_,w,Q,K,$,B){let R=w.currentMapId,b=J_(),F=H1(w,R);for(let M=0;M<F.length;M++){let k=F[M],h=w.components.type[k]?.type;if(!h)continue;let E=w.components.position[k];if(!E)continue;let m=K+E.x-Q.x,p=$+E.y-Q.y,r="transparent";if(g.highlightFriendEnemy&&!N_(w,k)&&!u1(w,k)&&k!==b)switch($1(w,b,k)){case 1:break;case 2:r="rgba(255, 0, 0, 0.5)";break}if(_[p]&&_[p][m])_[p][m].chars.push(h.icon+B),_[p][m].fg.push(r),_[p][m].bg.push("transparent");let s=w.components.energy[k];if(s&&g.showEnergy!==0){let Y_=g.showEnergy===1?16:10,z_=g.showEnergy===1?"__":"_",B_=Math.ceil(s.current/s.max*Y_);if(B_<Y_){if(_[p]&&_[p][m])_[p][m].chars.push(z_+B_),_[p][m].fg.push("transparent"),_[p][m].bg.push("transparent")}}}}function r7(_){F1.clear();for(let w=0;w<_.length;w++)for(let Q=0;Q<_[w].length;Q++){let K=_[w][Q];if(K.chars.length>0)F1.draw(Q,w,K.chars,K.fg,K.bg)}}function n7(){let _={};for(let[w,Q]of Object.entries(B0)){let K=w.endsWith(K1),$="";if(K)w=w.substring(0,w.length-K1.length),$=K1;if(w.startsWith("wall")&&(w.length===5||w.length===6))_["#"+w.substring(4,5)+$]=Q;else if(Object.hasOwn(D.tiles,w))_[D.tiles[w].icon+$]=Q;else if(Object.hasOwn(D.entities,w))_[D.entities[w].icon+$]=Q;else if(Object.hasOwn(D.items,w))_[D.items[w].icon+$]=Q;else if(Object.hasOwn(D.effects,w))_[D.effects[w].icon+$]=Q;else _[w+$]=Q}for(let[w,Q]of Object.entries(_))if(!w.endsWith(K1)&&!Object.hasOwn(_,w+K1))_[w+K1]=Q;return _}async function T6(_){if(!g.showUI||!g.showTooltip)return;let w="";if(_.target){if(_.target?.dataset?.tooltip)w+=_.target.dataset.tooltip}let Q=F1.eventToPosition(_);if(Q[0]!==-1){let R=h6(Q),b=I6(R);for(let F=0;F<b.entities.length;F++){let M=b.entities[F],k=b.state.components.type[M]?.type,h=b?.state.components.name[M]?.name?b.state.components.name[M].name:k.name;if(w!=="")w+=`
`;w+=h}if(!!b?.tile?.type&&b.tile?.type.tooltip!==""){if(w!=="")w+=`
`;w+=b.tile.type.tooltip}}let K=typeof window<"u"?Math.max(0,window.innerHeight-g.bottom):0,$=Math.floor(K/2),B=k6();if(w!==""){B.innerText=w,B.style.display="inline-block";let{offsetWidth:R,offsetHeight:b}=B,F=typeof window<"u"?window.innerWidth:0,M=K,k=_.x+20,h=_.y+20;if(k+R>F)k=_.x-R-20;if(h+b>M)h=_.y-b-20;B.style.left=k+"px",B.style.top=h+"px"}else B.style.display="none"}async function o7(_){if(!_||typeof _!=="string"||!_.startsWith("https://")){V_("Failed to fetch replay: URL must use HTTPS protocol");return}try{let w=await fetch(_);if(!w.ok){V_(`Failed to fetch replay: ${w.status} ${w.statusText}`);return}let Q=await w.json(),K=Q;if(Array.isArray(Q)){if(Q.length===0){V_("Replay JSON array is empty");return}let $=void 0;for(let B of Q)if(B&&typeof B==="object"&&typeof B.actionLog==="string"){if(!$||B.actionLog.length>=$.actionLog.length)$=B}K=$||Q[Q.length-1]}if(!K||typeof K!=="object"){V_("Invalid replay data format");return}if(typeof K.actionLog!=="string"){V_("Replay missing actionLog");return}return K}catch(w){V_(`Error loading replay: ${w instanceof Error?w.message:String(w)}`);return}}class x6{game;actionLog;tps;currentTurnIndex=0;drawFn;onTurn;onComplete;_timer=null;_isPlaying=!1;_isFinished=!1;constructor(_,w,Q=g.tps,K=()=>{},$,B){this.game=_,this.actionLog=w,this.tps=Q>0?Q:4,this.drawFn=K,this.onTurn=$,this.onComplete=B}get isPlaying(){return this._isPlaying}get isFinished(){return this._isFinished}get turnIndex(){return this.currentTurnIndex}get totalTurns(){return this.actionLog.length}start(){if(this._isFinished||this._isPlaying)return;this._isPlaying=!0;let _=Math.max(1,Math.round(1000/this.tps));this._timer=setInterval(()=>{this.step()},_)}pause(){if(!this._isPlaying)return;if(this._isPlaying=!1,this._timer!==null)clearInterval(this._timer),this._timer=null}resume(){this.start()}stop(){this.pause()}step(){if(this.currentTurnIndex>=this.actionLog.length)return this._isFinished=!0,this.pause(),this.onComplete?.(this.game.state),V_("Replay finished."),!1;let _=this.actionLog[this.currentTurnIndex],w=D.commands[_]||null;if(w)this.game.update(w,!0),this.drawFn(this.game.state);if(this.currentTurnIndex++,this.onTurn?.(this.currentTurnIndex,this.actionLog.length,w),this.currentTurnIndex>=this.actionLog.length)return this._isFinished=!0,this.pause(),this.onComplete?.(this.game.state),V_("Replay finished."),!1;return!0}}async function m6(_,w=()=>{}){if(!g.run)return;V_(`Fetching replay from ${g.run}...`);let Q=await o7(g.run);if(!Q){V_("Could not start replay: invalid or unreachable run file.");return}if(Q.version&&Q.version!==g.version)V_(`Warning: Replay version (${Q.version}) differs from current (${g.version})`);if(Q.username){g.username=Q.username;let $=J_();if(_.state.components.name[$])_.state.components.name[$].name=Q.username;w(_.state)}V_(`Replay started: ${Q.actionLog.length} turns @ ${g.tps} tps`);let K=new x6(_,Q.actionLog,g.tps,w);return K.start(),K}var s7=void 0;function l6(_){window.onload=async function(){if(f1(),s_(_.init()),g.run)s7=await m6(_,s_)},window.onresize=async function(){f1();let w=typeof window<"u"?window.innerWidth:0,Q=typeof window<"u"?window.innerHeight:0;g6(w,Q),await u6(),s_(_.state)},b6(function(w){s_(_.update(w))}),v6(T6),document.body.focus()}function c6(_){if(!window.BMActionLog)window.BMActionLog=function(){return _.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(w){s_(_.play(w))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){g.debug=!g.debug,s_(_.state)};if(g.debug){if(!window.BMDebugState)window.BMDebugState=function(){return _.state};if(!window.BMDebugPlayerStatistics)window.BMDebugPlayerStatistics=function(){return _.state.statistics[J_()]};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let w=Object.keys(_.state.maps).length,Q=Object.keys(_.state.entities).length,K=Object.keys(_.state.components.inventory).length;return`Maps: ${w}, Entities: ${Q}, Inventories: ${K}`}}}V_("BotMos v"+g.version);V_("Creating cosmos...");f1();var p6=new g1;c6(p6);l6(p6);
