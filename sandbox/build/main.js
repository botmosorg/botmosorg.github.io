var P6=Object.create;var{getPrototypeOf:j6,defineProperty:P0,getOwnPropertyNames:M6}=Object;var R6=Object.prototype.hasOwnProperty;var t1=(_,Q,K)=>{K=_!=null?P6(j6(_)):{};let z=Q||!_||!_.__esModule?P0(K,"default",{value:_,enumerable:!0}):K;for(let L of M6(_))if(!R6.call(z,L))P0(z,L,{get:()=>_[L],enumerable:!0});return z};var b6=(_,Q)=>()=>(Q||_((Q={exports:{}}).exports,Q),Q.exports);var k1=b6((E1,o0)=>{function y_(_){if(_===void 0)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function g6(_,Q){var K=typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(K)return(K=K.call(_)).next.bind(K);if(Array.isArray(_)||(K=T6(_))||Q&&_&&typeof _.length==="number"){if(K)_=K;var z=0;return function(){if(z>=_.length)return{done:!0};return{done:!1,value:_[z++]}}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T6(_,Q){if(!_)return;if(typeof _==="string")return s0(_,Q);var K=Object.prototype.toString.call(_).slice(8,-1);if(K==="Object"&&_.constructor)K=_.constructor.name;if(K==="Map"||K==="Set")return Array.from(_);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return s0(_,Q)}function s0(_,Q){if(Q==null||Q>_.length)Q=_.length;for(var K=0,z=Array(Q);K<Q;K++)z[K]=_[K];return z}function Z_(_,Q){_.prototype=Object.create(Q.prototype),_.prototype.constructor=_,Q0(_,Q)}function Q0(_,Q){return Q0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(z,L){return z.__proto__=L,z},Q0(_,Q)}(function(_,Q){typeof E1==="object"&&typeof o0<"u"?Q(E1):typeof define==="function"&&define.amd?define(["exports"],Q):(_=typeof globalThis<"u"?globalThis:_||self,Q(_.ROT={}))})(E1,function(_){var Q=0.00000000023283064365386963,K=function(){function X(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var B=X.prototype;return B.getSeed=function(){return this._seed},B.setSeed=function(V){return V=V<1?1/V:V,this._seed=V,this._s0=(V>>>0)*Q,V=V*69069+1>>>0,this._s1=V*Q,V=V*69069+1>>>0,this._s2=V*Q,this._c=1,this},B.getUniform=function(){var V=2091639*this._s0+this._c*Q;return this._s0=this._s1,this._s1=this._s2,this._c=V|0,this._s2=V-this._c,this._s2},B.getUniformInt=function(V,w){var Z=Math.max(V,w),J=Math.min(V,w);return Math.floor(this.getUniform()*(Z-J+1))+J},B.getNormal=function(V,w){if(V===void 0)V=0;if(w===void 0)w=1;var Z,J,q;do Z=2*this.getUniform()-1,J=2*this.getUniform()-1,q=Z*Z+J*J;while(q>1||q==0);var $=Z*Math.sqrt(-2*Math.log(q)/q);return V+$*w},B.getPercentage=function(){return 1+Math.floor(this.getUniform()*100)},B.getItem=function(V){if(!V.length)return null;return V[Math.floor(this.getUniform()*V.length)]},B.shuffle=function(V){var w=[],Z=V.slice();while(Z.length){var J=Z.indexOf(this.getItem(Z));w.push(Z.splice(J,1)[0])}return w},B.getWeightedValue=function(V){var w=0;for(var Z in V)w+=V[Z];var J=this.getUniform()*w,q,$=0;for(q in V)if($+=V[q],J<$)return q;return q},B.getState=function(){return[this._s0,this._s1,this._s2,this._c]},B.setState=function(V){return this._s0=V[0],this._s1=V[1],this._s2=V[2],this._c=V[3],this},B.clone=function(){var V=new X;return V.setState(this.getState())},X}(),z=new K().setSeed(Date.now()),L=function(){function X(){}var B=X.prototype;return B.getContainer=function(){return null},B.setOptions=function(V){this._options=V},X}(),D=function(X){Z_(B,X);function B(){var V=X.call(this)||this;return V._ctx=document.createElement("canvas").getContext("2d"),V}var U=B.prototype;return U.schedule=function(w){requestAnimationFrame(w)},U.getContainer=function(){return this._ctx.canvas},U.setOptions=function(w){X.prototype.setOptions.call(this,w);var Z=w.fontStyle?w.fontStyle+" ":"",J=Z+" "+w.fontSize+"px "+w.fontFamily;this._ctx.font=J,this._updateSize(),this._ctx.font=J,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},U.clear=function(){var w=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=w},U.eventToPosition=function(w,Z){var J=this._ctx.canvas,q=J.getBoundingClientRect();if(w-=q.left,Z-=q.top,w*=J.width/q.width,Z*=J.height/q.height,w<0||Z<0||w>=J.width||Z>=J.height)return[-1,-1];return this._normalizedEventToPosition(w,Z)},B}(L);function j(X,B){return(X%B+B)%B}function M(X,B,U){if(B===void 0)B=0;if(U===void 0)U=1;if(X<B)return B;if(X>U)return U;return X}function b(X){return X.charAt(0).toUpperCase()+X.substring(1)}function k(X){for(var B=arguments.length,U=Array(B>1?B-1:0),V=1;V<B;V++)U[V-1]=arguments[V];var w=k.map,Z=function(q,$,G,Y){if(X.charAt(Y-1)=="%")return q.substring(1);if(!U.length)return q;var H=U[0],W=$||G,P=W.split(","),R=P.shift()||"",C=w[R.toLowerCase()];if(!C)return q;H=U.shift();var O=H[C].apply(H,P),N=R.charAt(0);if(N!=N.toLowerCase())O=b(O);return O};return X.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Z)}k.map={s:"toString"};var f=Object.freeze({__proto__:null,mod:j,clamp:M,capitalize:b,format:k}),S=function(X){Z_(B,X);function B(){var V=X.call(this)||this;return V._spacingX=0,V._spacingY=0,V._hexSize=0,V}var U=B.prototype;return U.draw=function(w,Z){var J=w[0],q=w[1],$=w[2],G=w[3],Y=w[4],H=[(J+1)*this._spacingX,q*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(Z)this._ctx.fillStyle=Y,this._fill(H[0],H[1]);if(!$)return;this._ctx.fillStyle=G;var W=[].concat($);for(var P=0;P<W.length;P++)this._ctx.fillText(W[P],H[0],Math.ceil(H[1]))},U.computeSize=function(w,Z){if(this._options.transpose)w+=Z,Z=w-Z,w-=Z;var J=Math.floor(w/this._spacingX)-1,q=Math.floor((Z-2*this._hexSize)/this._spacingY+1);return[J,q]},U.computeFontSize=function(w,Z){if(this._options.transpose)w+=Z,Z=w-Z,w-=Z;var J=2*w/((this._options.width+1)*Math.sqrt(3))-1,q=Z/(2+1.5*(this._options.height-1)),$=Math.min(J,q),G=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var Y=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=G;var H=Y/100;$=Math.floor($)+1;var W=2*$/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(W)-1},U._normalizedEventToPosition=function(w,Z){var J;if(this._options.transpose)w+=Z,Z=w-Z,w-=Z,J=this._ctx.canvas.width;else J=this._ctx.canvas.height;var q=J/this._options.height;if(Z=Math.floor(Z/q),j(Z,2))w-=this._spacingX,w=1+2*Math.floor(w/(2*this._spacingX));else w=2*Math.floor(w/(2*this._spacingX));return[w,Z]},U._fill=function(w,Z){var J=this._hexSize,q=this._options.border,$=this._ctx;if($.beginPath(),this._options.transpose)$.moveTo(w-J+q,Z),$.lineTo(w-J/2+q,Z+this._spacingX-q),$.lineTo(w+J/2-q,Z+this._spacingX-q),$.lineTo(w+J-q,Z),$.lineTo(w+J/2-q,Z-this._spacingX+q),$.lineTo(w-J/2+q,Z-this._spacingX+q),$.lineTo(w-J+q,Z);else $.moveTo(w,Z-J+q),$.lineTo(w+this._spacingX-q,Z-J/2+q),$.lineTo(w+this._spacingX-q,Z+J/2-q),$.lineTo(w,Z+J-q),$.lineTo(w-this._spacingX+q,Z+J/2-q),$.lineTo(w-this._spacingX+q,Z-J/2+q),$.lineTo(w,Z-J+q);$.fill()},U._updateSize=function(){var w=this._options,Z=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(w.spacing*(w.fontSize+Z/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var J,q;if(w.transpose)J="height",q="width";else J="width",q="height";this._ctx.canvas[J]=Math.ceil((w.width+1)*this._spacingX),this._ctx.canvas[q]=Math.ceil((w.height-1)*this._spacingY+2*this._hexSize)},B}(D),h=function(X){Z_(B,X);function B(){var V=X.call(this)||this;return V._spacingX=0,V._spacingY=0,V._canvasCache={},V}var U=B.prototype;return U.setOptions=function(w){X.prototype.setOptions.call(this,w),this._canvasCache={}},U.draw=function(w,Z){if(B.cache)this._drawWithCache(w);else this._drawNoCache(w,Z)},U._drawWithCache=function(w){var Z=w[0],J=w[1],q=w[2],$=w[3],G=w[4],Y=""+q+$+G,H;if(Y in this._canvasCache)H=this._canvasCache[Y];else{var W=this._options.border;H=document.createElement("canvas");var P=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,P.fillStyle=G,P.fillRect(W,W,H.width-W,H.height-W),q){P.fillStyle=$,P.font=this._ctx.font,P.textAlign="center",P.textBaseline="middle";var R=[].concat(q);for(var C=0;C<R.length;C++)P.fillText(R[C],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[Y]=H}this._ctx.drawImage(H,Z*this._spacingX,J*this._spacingY)},U._drawNoCache=function(w,Z){var J=w[0],q=w[1],$=w[2],G=w[3],Y=w[4];if(Z){var H=this._options.border;this._ctx.fillStyle=Y,this._ctx.fillRect(J*this._spacingX+H,q*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!$)return;this._ctx.fillStyle=G;var W=[].concat($);for(var P=0;P<W.length;P++)this._ctx.fillText(W[P],(J+0.5)*this._spacingX,Math.ceil((q+0.5)*this._spacingY))},U.computeSize=function(w,Z){var J=Math.floor(w/this._spacingX),q=Math.floor(Z/this._spacingY);return[J,q]},U.computeFontSize=function(w,Z){var J=Math.floor(w/this._options.width),q=Math.floor(Z/this._options.height),$=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var G=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=$;var Y=G/100,H=Y*q/J;if(H>1)q=Math.floor(q/H);return Math.floor(q/this._options.spacing)},U._normalizedEventToPosition=function(w,Z){return[Math.floor(w/this._spacingX),Math.floor(Z/this._spacingY)]},U._updateSize=function(){var w=this._options,Z=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(w.spacing*Z),this._spacingY=Math.ceil(w.spacing*w.fontSize),w.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=w.width*this._spacingX,this._ctx.canvas.height=w.height*this._spacingY},B}(D);h.cache=!1;var m=function(X){Z_(B,X);function B(){var V=X.call(this)||this;return V._colorCanvas=document.createElement("canvas"),V}var U=B.prototype;return U.draw=function(w,Z){var J=w[0],q=w[1],$=w[2],G=w[3],Y=w[4],H=this._options.tileWidth,W=this._options.tileHeight;if(Z)if(this._options.tileColorize)this._ctx.clearRect(J*H,q*W,H,W);else this._ctx.fillStyle=Y,this._ctx.fillRect(J*H,q*W,H,W);if(!$)return;var P=[].concat($),R=[].concat(G),C=[].concat(Y);for(var O=0;O<P.length;O++){var N=this._options.tileMap[P[O]];if(!N)throw Error('Char "'+P[O]+'" not found in tileMap');if(this._options.tileColorize){var g=this._colorCanvas,x=g.getContext("2d");x.globalCompositeOperation="source-over",x.clearRect(0,0,H,W);var y=R[O],a=C[O];if(x.drawImage(this._options.tileSet,N[0],N[1],H,W,0,0,H,W),y!="transparent")x.fillStyle=y,x.globalCompositeOperation="source-atop",x.fillRect(0,0,H,W);if(a!="transparent")x.fillStyle=a,x.globalCompositeOperation="destination-over",x.fillRect(0,0,H,W);this._ctx.drawImage(g,J*H,q*W,H,W)}else this._ctx.drawImage(this._options.tileSet,N[0],N[1],H,W,J*H,q*W,H,W)}},U.computeSize=function(w,Z){var J=Math.floor(w/this._options.tileWidth),q=Math.floor(Z/this._options.tileHeight);return[J,q]},U.computeFontSize=function(){throw Error("Tile backend does not understand font size")},U._normalizedEventToPosition=function(w,Z){return[Math.floor(w/this._options.tileWidth),Math.floor(Z/this._options.tileHeight)]},U._updateSize=function(){var w=this._options;this._ctx.canvas.width=w.width*w.tileWidth,this._ctx.canvas.height=w.height*w.tileHeight,this._colorCanvas.width=w.tileWidth,this._colorCanvas.height=w.tileHeight},B}(D);function l(X){var B,U;if(X in v)B=v[X];else{if(X.charAt(0)=="#"){var V=X.match(/[0-9a-f]/gi)||[],w=V.map(function(J){return parseInt(J,16)});if(w.length==3)B=w.map(function(J){return J*17});else{for(var Z=0;Z<3;Z++)w[Z+1]+=16*w[Z],w.splice(Z,1);B=w}}else if(U=X.match(/rgb\(([0-9, ]+)\)/i))B=U[1].split(/\s*,\s*/).map(function(J){return parseInt(J)});else B=[0,0,0];v[X]=B}return B.slice()}function d(X){var B=X.slice();for(var U=arguments.length,V=Array(U>1?U-1:0),w=1;w<U;w++)V[w-1]=arguments[w];for(var Z=0;Z<3;Z++)for(var J=0;J<V.length;J++)B[Z]+=V[J][Z];return B}function __(X){for(var B=arguments.length,U=Array(B>1?B-1:0),V=1;V<B;V++)U[V-1]=arguments[V];for(var w=0;w<3;w++)for(var Z=0;Z<U.length;Z++)X[w]+=U[Z][w];return X}function z_(X){var B=X.slice();for(var U=arguments.length,V=Array(U>1?U-1:0),w=1;w<U;w++)V[w-1]=arguments[w];for(var Z=0;Z<3;Z++){for(var J=0;J<V.length;J++)B[Z]*=V[J][Z]/255;B[Z]=Math.round(B[Z])}return B}function J_(X){for(var B=arguments.length,U=Array(B>1?B-1:0),V=1;V<B;V++)U[V-1]=arguments[V];for(var w=0;w<3;w++){for(var Z=0;Z<U.length;Z++)X[w]*=U[Z][w]/255;X[w]=Math.round(X[w])}return X}function B_(X,B,U){if(U===void 0)U=0.5;var V=X.slice();for(var w=0;w<3;w++)V[w]=Math.round(V[w]+U*(B[w]-X[w]));return V}var K_=B_;function E(X,B,U){if(U===void 0)U=0.5;var V=c(X),w=c(B);for(var Z=0;Z<3;Z++)V[Z]+=U*(w[Z]-V[Z]);return o(V)}var I=E;function T(X,B){if(!(B instanceof Array))B=Math.round(z.getNormal(0,B));var U=X.slice();for(var V=0;V<3;V++)U[V]+=B instanceof Array?Math.round(z.getNormal(0,B[V])):B;return U}function c(X){var B=X[0]/255,U=X[1]/255,V=X[2]/255,w=Math.max(B,U,V),Z=Math.min(B,U,V),J=0,q,$=(w+Z)/2;if(w==Z)q=0;else{var G=w-Z;switch(q=$>0.5?G/(2-w-Z):G/(w+Z),w){case B:J=(U-V)/G+(U<V?6:0);break;case U:J=(V-B)/G+2;break;case V:J=(B-U)/G+4;break}J/=6}return[J,q,$]}function i(X,B,U){if(U<0)U+=1;if(U>1)U-=1;if(U<0.16666666666666666)return X+(B-X)*6*U;if(U<0.5)return B;if(U<0.6666666666666666)return X+(B-X)*(0.6666666666666666-U)*6;return X}function o(X){var B=X[2];if(X[1]==0)return B=Math.round(B*255),[B,B,B];else{var U=X[1],V=B<0.5?B*(1+U):B+U-B*U,w=2*B-V,Z=i(w,V,X[0]+0.3333333333333333),J=i(w,V,X[0]),q=i(w,V,X[0]-0.3333333333333333);return[Math.round(Z*255),Math.round(J*255),Math.round(q*255)]}}function u(X){var B=X.map(function(U){return M(U,0,255)});return"rgb("+B.join(",")+")"}function A(X){var B=X.map(function(U){return M(U,0,255).toString(16).padStart(2,"0")});return"#"+B.join("")}var v={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},s=Object.freeze({__proto__:null,fromString:l,add:d,add_:__,multiply:z_,multiply_:J_,interpolate:B_,lerp:K_,interpolateHSL:E,lerpHSL:I,randomize:T,rgb2hsl:c,hsl2rgb:o,toRGB:u,toHex:A}),t=function(X){Z_(B,X);function B(){var V=X.call(this)||this;V._uniforms={};try{V._gl=V._initWebGL()}catch(w){if(typeof w==="string")alert(w);else if(w instanceof Error)alert(w.message)}return V}B.isSupported=function(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var U=B.prototype;return U.schedule=function(w){requestAnimationFrame(w)},U.getContainer=function(){return this._gl.canvas},U.setOptions=function(w){var Z=this;X.prototype.setOptions.call(this,w),this._updateSize();var J=this._options.tileSet;if(J&&"complete"in J&&!J.complete)J.addEventListener("load",function(){return Z._updateTexture(J)});else this._updateTexture(J)},U.draw=function(w,Z){var J=this._gl,q=this._options,$=w[0],G=w[1],Y=w[2],H=w[3],W=w[4],P=J.canvas.height-(G+1)*q.tileHeight;if(J.scissor($*q.tileWidth,P,q.tileWidth,q.tileHeight),Z){if(q.tileColorize)J.clearColor(0,0,0,0);else J.clearColor.apply(J,s_(W));J.clear(J.COLOR_BUFFER_BIT)}if(!Y)return;var R=[].concat(Y),C=[].concat(W),O=[].concat(H);J.uniform2fv(this._uniforms.targetPosRel,[$,G]);for(var N=0;N<R.length;N++){var g=this._options.tileMap[R[N]];if(!g)throw Error('Char "'+R[N]+'" not found in tileMap');if(J.uniform1f(this._uniforms.colorize,q.tileColorize?1:0),J.uniform2fv(this._uniforms.tilesetPosAbs,g),q.tileColorize)J.uniform4fv(this._uniforms.tint,s_(O[N])),J.uniform4fv(this._uniforms.bg,s_(C[N]));J.drawArrays(J.TRIANGLE_STRIP,0,4)}},U.clear=function(){var w=this._gl;w.clearColor.apply(w,s_(this._options.bg)),w.scissor(0,0,w.canvas.width,w.canvas.height),w.clear(w.COLOR_BUFFER_BIT)},U.computeSize=function(w,Z){var J=Math.floor(w/this._options.tileWidth),q=Math.floor(Z/this._options.tileHeight);return[J,q]},U.computeFontSize=function(){throw Error("Tile backend does not understand font size")},U.eventToPosition=function(w,Z){var J=this._gl.canvas,q=J.getBoundingClientRect();if(w-=q.left,Z-=q.top,w*=J.width/q.width,Z*=J.height/q.height,w<0||Z<0||w>=J.width||Z>=J.height)return[-1,-1];return this._normalizedEventToPosition(w,Z)},U._initWebGL=function(){var w=this,Z=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Z;var J=O_(Z,H_,q_);return Z.useProgram(J),Y_(Z),w_.forEach(function(q){return w._uniforms[q]=Z.getUniformLocation(J,q)}),this._program=J,Z.enable(Z.BLEND),Z.blendFuncSeparate(Z.SRC_ALPHA,Z.ONE_MINUS_SRC_ALPHA,Z.ONE,Z.ONE_MINUS_SRC_ALPHA),Z.enable(Z.SCISSOR_TEST),Z},U._normalizedEventToPosition=function(w,Z){return[Math.floor(w/this._options.tileWidth),Math.floor(Z/this._options.tileHeight)]},U._updateSize=function(){var w=this._gl,Z=this._options,J=[Z.width*Z.tileWidth,Z.height*Z.tileHeight];w.canvas.width=J[0],w.canvas.height=J[1],w.viewport(0,0,J[0],J[1]),w.uniform2fv(this._uniforms.tileSize,[Z.tileWidth,Z.tileHeight]),w.uniform2fv(this._uniforms.targetSize,J)},U._updateTexture=function(w){V1(this._gl,w)},B}(L),w_=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],H_=`
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
}`.trim(),q_=`
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
}`.trim();function O_(X,B,U){var V=X.createShader(X.VERTEX_SHADER);if(X.shaderSource(V,B),X.compileShader(V),!X.getShaderParameter(V,X.COMPILE_STATUS))throw Error(X.getShaderInfoLog(V)||"");var w=X.createShader(X.FRAGMENT_SHADER);if(X.shaderSource(w,U),X.compileShader(w),!X.getShaderParameter(w,X.COMPILE_STATUS))throw Error(X.getShaderInfoLog(w)||"");var Z=X.createProgram();if(X.attachShader(Z,V),X.attachShader(Z,w),X.linkProgram(Z),!X.getProgramParameter(Z,X.LINK_STATUS))throw Error(X.getProgramInfoLog(Z)||"");return Z}function Y_(X){var B=new Float32Array([0,0,1,0,0,1,1,1]),U=X.createBuffer();X.bindBuffer(X.ARRAY_BUFFER,U),X.bufferData(X.ARRAY_BUFFER,B,X.STATIC_DRAW),X.enableVertexAttribArray(0),X.vertexAttribPointer(0,2,X.FLOAT,!1,0,0)}function V1(X,B){var U=X.createTexture();return X.bindTexture(X.TEXTURE_2D,U),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MAG_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MIN_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_S,X.REPEAT),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_T,X.REPEAT),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,0),X.texImage2D(X.TEXTURE_2D,0,X.RGBA,X.RGBA,X.UNSIGNED_BYTE,B),U}var I_={};function s_(X){if(!(X in I_)){var B;if(X=="transparent")B=[0,0,0,0];else if(X.indexOf("rgba")>-1){B=(X.match(/[\d.]+/g)||[]).map(Number);for(var U=0;U<3;U++)B[U]=B[U]/255}else B=l(X).map(function(V){return V/255}),B.push(1);I_[X]=B}return I_[X]}function Sw(X){return"\x1B[0;48;5;"+m1(X)+"m\x1B[2J"}function fw(X,B){return"\x1B[0;38;5;"+m1(X)+";48;5;"+m1(B)+"m"}function Iw(X,B){return"\x1B["+(B+1)+";"+(X+1)+"H"}function m1(X){var B=256,U=6,V=U/B,w=l(X),Z=Math.floor(w[0]*V),J=Math.floor(w[1]*V),q=Math.floor(w[2]*V);return Z*36+J*6+q*1+16}var U0=function(X){Z_(B,X);function B(){var V=X.call(this)||this;return V._offset=[0,0],V._cursor=[-1,-1],V._lastColor="",V}var U=B.prototype;return U.schedule=function(w){setTimeout(w,16.666666666666668)},U.setOptions=function(w){X.prototype.setOptions.call(this,w);var Z=[w.width,w.height],J=this.computeSize();this._offset=J.map(function(q,$){return Math.floor((q-Z[$])/2)})},U.clear=function(){process.stdout.write(Sw(this._options.bg))},U.draw=function(w,Z){var J=w[0],q=w[1],$=w[2],G=w[3],Y=w[4],H=this._offset[0]+J,W=this._offset[1]+q,P=this.computeSize();if(H<0||H>=P[0])return;if(W<0||W>=P[1])return;if(H!==this._cursor[0]||W!==this._cursor[1])process.stdout.write(Iw(H,W)),this._cursor[0]=H,this._cursor[1]=W;if(Z){if(!$)$=" "}if(!$)return;var R=fw(G,Y);if(R!==this._lastColor)process.stdout.write(R),this._lastColor=R;if($!="\t"){var C=[].concat($);process.stdout.write(C[0])}if(this._cursor[0]++,this._cursor[0]>=P[0])this._cursor[0]=0,this._cursor[1]++},U.computeFontSize=function(){throw Error("Terminal backend has no notion of font size")},U.eventToPosition=function(w,Z){return[w,Z]},U.computeSize=function(){return[process.stdout.columns,process.stdout.rows]},B}(L),gw=/%([bc]){([^}]*)}/g,g_=0,l_=1,l1=2,c1=3;function Tw(X,B){var U={width:0,height:1},V=p1(X,B),w=0;for(var Z=0;Z<V.length;Z++){var J=V[Z];switch(J.type){case g_:w+=J.value.length;break;case l_:U.height++,U.width=Math.max(U.width,w),w=0;break}}return U.width=Math.max(U.width,w),U}function p1(X,B){var U=[],V=0;X.replace(gw,function(Z,J,q,$){var G=X.substring(V,$);if(G.length)U.push({type:g_,value:G});return U.push({type:J=="c"?l1:c1,value:q.trim()}),V=$+Z.length,""});var w=X.substring(V);if(w.length)U.push({type:g_,value:w});return hw(U,B)}function hw(X,B){if(!B)B=1/0;var U=0,V=0,w=-1;while(U<X.length){var Z=X[U];if(Z.type==l_)V=0,w=-1;if(Z.type!=g_){U++;continue}while(V==0&&Z.value.charAt(0)==" ")Z.value=Z.value.substring(1);var J=Z.value.indexOf(`
`);if(J!=-1){Z.value=W1(X,U,J,!0);var q=Z.value.split("");while(q.length&&q[q.length-1]==" ")q.pop();Z.value=q.join("")}if(!Z.value.length){X.splice(U,1);continue}if(V+Z.value.length>B){var $=-1;while(!0){var G=Z.value.indexOf(" ",$+1);if(G==-1)break;if(V+G>B)break;$=G}if($!=-1)Z.value=W1(X,U,$,!0);else if(w!=-1){var Y=X[w],H=Y.value.lastIndexOf(" ");Y.value=W1(X,w,H,!0),U=w}else Z.value=W1(X,U,B-V,!1)}else if(V+=Z.value.length,Z.value.indexOf(" ")!=-1)w=U;U++}X.push({type:l_});var W=null;for(var P=0;P<X.length;P++){var R=X[P];switch(R.type){case g_:W=R;break;case l_:if(W){var C=W.value.split("");while(C.length&&C[C.length-1]==" ")C.pop();W.value=C.join("")}W=null;break}}return X.pop(),X}function W1(X,B,U,V){var w={type:l_},Z={type:g_,value:X[B].value.substring(U+(V?1:0))};return X.splice(B+1,0,w,Z),X[B].value.substring(0,U)}var xw=Object.freeze({__proto__:null,TYPE_TEXT:g_,TYPE_NEWLINE:l_,TYPE_FG:l1,TYPE_BG:c1,measure:Tw,tokenize:p1}),y1=80,d1=25,$_={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},mw={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},lw={hex:S,rect:h,tile:m,"tile-gl":t,term:U0},cw={width:y1,height:d1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},o_=function(){function X(U){if(U===void 0)U={};this._data={},this._dirty=!1,this._options={},U=Object.assign({},cw,U),this.setOptions(U),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var B=X.prototype;return B.DEBUG=function(V,w,Z){var J=[this._options.bg,this._options.fg];this.draw(V,w,null,null,J[Z%J.length])},B.clear=function(){this._data={},this._dirty=!0},B.setOptions=function(V){if(Object.assign(this._options,V),V.width||V.height||V.fontSize||V.fontFamily||V.spacing||V.layout){if(V.layout){var w=lw[V.layout];this._backend=new w}this._backend.setOptions(this._options),this._dirty=!0}return this},B.getOptions=function(){return this._options},B.getContainer=function(){return this._backend.getContainer()},B.computeSize=function(V,w){return this._backend.computeSize(V,w)},B.computeFontSize=function(V,w){return this._backend.computeFontSize(V,w)},B.computeTileSize=function(V,w){var Z=Math.floor(V/this._options.width),J=Math.floor(w/this._options.height);return[Z,J]},B.eventToPosition=function(V){var w,Z;if("touches"in V)w=V.touches[0].clientX,Z=V.touches[0].clientY;else w=V.clientX,Z=V.clientY;return this._backend.eventToPosition(w,Z)},B.draw=function(V,w,Z,J,q){if(!J)J=this._options.fg;if(!q)q=this._options.bg;var $=V+","+w;if(this._data[$]=[V,w,Z,J,q],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[$]=!0},B.drawOver=function(V,w,Z,J,q){var $=V+","+w,G=this._data[$];if(G)G[2]=Z||G[2],G[3]=J||G[3],G[4]=q||G[4];else this.draw(V,w,Z,J,q)},B.drawText=function(V,w,Z,J){var q=null,$=null,G=V,Y=w,H=1;if(!J)J=this._options.width-V;var W=p1(Z,J);while(W.length){var P=W.shift();switch(P.type){case g_:var R=!1,C=!1,O=!1,N=!1;for(var g=0;g<P.value.length;g++){var x=P.value.charCodeAt(g),y=P.value.charAt(g);if(this._options.layout==="term"){var a=x>>8,e=a===17||a>=46&&a<=159||a>=172&&a<=215||x>=43360&&x<=43391;if(e){this.draw(G+0,Y,y,q,$),this.draw(G+1,Y,"\t",q,$),G+=2;continue}}if(O=x>65280&&x<65377||x>65500&&x<65512||x>65518,R=y.charCodeAt(0)==32||y.charCodeAt(0)==12288,N&&!O&&!R)G++;if(O&&!C)G++;this.draw(G++,Y,y,q,$),C=R,N=O}break;case l1:q=P.value||null;break;case c1:$=P.value||null;break;case l_:G=V,Y++,H++;break}}return H},B._tick=function(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var V in this._data)this._draw(V,!1)}else for(var w in this._dirty)this._draw(w,!0);this._dirty=!1},B._draw=function(V,w){var Z=this._data[V];if(Z[4]!=this._options.bg)w=!0;this._backend.draw(Z,w)},X}();o_.Rect=h,o_.Hex=S,o_.Tile=m,o_.TileGL=t,o_.Term=U0;var pw=function(){function X(U){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,U),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var V=0;V<this._options.order;V++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var B=X.prototype;return B.clear=function(){this._data={},this._priorValues={}},B.generate=function(){var V=[this._sample(this._prefix)];while(V[V.length-1]!=this._boundary)V.push(this._sample(V));return this._join(V.slice(0,-1))},B.observe=function(V){var w=this._split(V);for(var Z=0;Z<w.length;Z++)this._priorValues[w[Z]]=this._options.prior;w=this._prefix.concat(w).concat(this._suffix);for(var J=this._options.order;J<w.length;J++){var q=w.slice(J-this._options.order,J),$=w[J];for(var G=0;G<q.length;G++){var Y=q.slice(G);this._observeEvent(Y,$)}}},B.getStats=function(){var V=[],w=Object.keys(this._priorValues).length;w--,V.push("distinct samples: "+w);var Z=Object.keys(this._data).length,J=0;for(var q in this._data)J+=Object.keys(this._data[q]).length;return V.push("dictionary size (contexts): "+Z),V.push("dictionary size (events): "+J),V.join(", ")},B._split=function(V){return V.split(this._options.words?/\s+/:"")},B._join=function(V){return V.join(this._options.words?" ":"")},B._observeEvent=function(V,w){var Z=this._join(V);if(!(Z in this._data))this._data[Z]={};var J=this._data[Z];if(!(w in J))J[w]=0;J[w]++},B._sample=function(V){V=this._backoff(V);var w=this._join(V),Z=this._data[w],J={};if(this._options.prior){for(var q in this._priorValues)J[q]=this._priorValues[q];for(var $ in Z)J[$]+=Z[$]}else J=Z;return z.getWeightedValue(J)},B._backoff=function(V){if(V.length>this._options.order)V=V.slice(-this._options.order);else if(V.length<this._options.order)V=this._prefix.slice(0,this._options.order-V.length).concat(V);while(!(this._join(V)in this._data)&&V.length>0)V=V.slice(1);return V},X}(),$0=function(){function X(){this.heap=[],this.timestamp=0}var B=X.prototype;return B.lessThan=function(V,w){return V.key==w.key?V.timestamp<w.timestamp:V.key<w.key},B.shift=function(V){this.heap=this.heap.map(function(w){var{key:Z,value:J,timestamp:q}=w;return{key:Z+V,value:J,timestamp:q}})},B.len=function(){return this.heap.length},B.push=function(V,w){this.timestamp+=1;var Z=this.len();this.heap.push({value:V,timestamp:this.timestamp,key:w}),this.updateUp(Z)},B.pop=function(){if(this.len()==0)throw Error("no element to pop");var V=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return V},B.find=function(V){for(var w=0;w<this.len();w++)if(V==this.heap[w].value)return this.heap[w];return null},B.remove=function(V){var w=null;for(var Z=0;Z<this.len();Z++)if(V==this.heap[Z].value)w=Z;if(w===null)return!1;if(this.len()>1){var J=this.heap.pop();if(J.value!=V)this.heap[w]=J,this.updateDown(w);return!0}else this.heap.pop();return!0},B.parentNode=function(V){return Math.floor((V-1)/2)},B.leftChildNode=function(V){return 2*V+1},B.rightChildNode=function(V){return 2*V+2},B.existNode=function(V){return V>=0&&V<this.heap.length},B.swap=function(V,w){var Z=this.heap[V];this.heap[V]=this.heap[w],this.heap[w]=Z},B.minNode=function(V){var w=V.filter(this.existNode.bind(this)),Z=w[0];for(var J=g6(w),q;!(q=J()).done;){var $=q.value;if(this.lessThan(this.heap[$],this.heap[Z]))Z=$}return Z},B.updateUp=function(V){if(V==0)return;var w=this.parentNode(V);if(this.existNode(w)&&this.lessThan(this.heap[V],this.heap[w]))this.swap(V,w),this.updateUp(w)},B.updateDown=function(V){var w=this.leftChildNode(V),Z=this.rightChildNode(V);if(!this.existNode(w))return;var J=this.minNode([V,w,Z]);if(J!=V)this.swap(V,J),this.updateDown(J)},B.debugPrint=function(){console.log(this.heap)},X}(),B0=function(){function X(){this._time=0,this._events=new $0}var B=X.prototype;return B.getTime=function(){return this._time},B.clear=function(){return this._events=new $0,this},B.add=function(V,w){this._events.push(V,w)},B.get=function(){if(!this._events.len())return null;var V=this._events.pop(),w=V.key,Z=V.value;if(w>0)this._time+=w,this._events.shift(-w);return Z},B.getEventTime=function(V){var w=this._events.find(V);if(w){var Z=w.key;return Z}return},B.remove=function(V){return this._events.remove(V)},X}(),r1=function(){function X(){this._queue=new B0,this._repeat=[],this._current=null}var B=X.prototype;return B.getTime=function(){return this._queue.getTime()},B.add=function(V,w){if(w)this._repeat.push(V);return this},B.getTimeOf=function(V){return this._queue.getEventTime(V)},B.clear=function(){return this._queue.clear(),this._repeat=[],this._current=null,this},B.remove=function(V){var w=this._queue.remove(V),Z=this._repeat.indexOf(V);if(Z!=-1)this._repeat.splice(Z,1);if(this._current==V)this._current=null;return w},B.next=function(){return this._current=this._queue.get(),this._current},X}(),yw=function(X){Z_(B,X);function B(){return X.apply(this,arguments)||this}var U=B.prototype;return U.add=function(w,Z){return this._queue.add(w,0),X.prototype.add.call(this,w,Z)},U.next=function(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return X.prototype.next.call(this)},B}(r1),dw=function(X){Z_(B,X);function B(){return X.apply(this,arguments)||this}var U=B.prototype;return U.add=function(w,Z,J){return this._queue.add(w,J!==void 0?J:1/w.getSpeed()),X.prototype.add.call(this,w,Z)},U.next=function(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return X.prototype.next.call(this)},B}(r1),rw=function(X){Z_(B,X);function B(){var V=X.call(this)||this;return V._defaultDuration=1,V._duration=V._defaultDuration,V}var U=B.prototype;return U.add=function(w,Z,J){return this._queue.add(w,J||this._defaultDuration),X.prototype.add.call(this,w,Z)},U.clear=function(){return this._duration=this._defaultDuration,X.prototype.clear.call(this)},U.remove=function(w){if(w==this._current)this._duration=this._defaultDuration;return X.prototype.remove.call(this,w)},U.next=function(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return X.prototype.next.call(this)},U.setDuration=function(w){if(this._current)this._duration=w;return this},B}(r1),nw={Simple:yw,Speed:dw,Action:rw},n1=function(){function X(U,V){if(V===void 0)V={};this._lightPasses=U,this._options=Object.assign({topology:8},V)}var B=X.prototype;return B._getCircle=function(V,w,Z){var J=[],q,$,G;switch(this._options.topology){case 4:$=1,G=[0,1],q=[$_[8][7],$_[8][1],$_[8][3],$_[8][5]];break;case 6:q=$_[6],$=1,G=[-1,1];break;case 8:q=$_[4],$=2,G=[-1,1];break;default:throw Error("Incorrect topology for FOV computation")}var Y=V+G[0]*Z,H=w+G[1]*Z;for(var W=0;W<q.length;W++)for(var P=0;P<Z*$;P++)J.push([Y,H]),Y+=q[W][0],H+=q[W][1];return J},X}(),sw=function(X){Z_(B,X);function B(){return X.apply(this,arguments)||this}var U=B.prototype;return U.compute=function(w,Z,J,q){if(q(w,Z,0,1),!this._lightPasses(w,Z))return;var $=[],G,Y,H,W,P;for(var R=1;R<=J;R++){var C=this._getCircle(w,Z,R),O=360/C.length;for(var N=0;N<C.length;N++){if(H=C[N][0],W=C[N][1],G=O*(N-0.5),Y=G+O,P=!this._lightPasses(H,W),this._visibleCoords(Math.floor(G),Math.ceil(Y),P,$))q(H,W,R,1);if($.length==2&&$[0]==0&&$[1]==360)return}}},U._visibleCoords=function(w,Z,J,q){if(w<0){var $=this._visibleCoords(0,Z,J,q),G=this._visibleCoords(360+w,360,J,q);return $||G}var Y=0;while(Y<q.length&&q[Y]<w)Y++;if(Y==q.length){if(J)q.push(w,Z);return!0}var H=0;if(Y%2){while(Y<q.length&&q[Y]<Z)Y++,H++;if(H==0)return!1;if(J)if(H%2)q.splice(Y-H,H,Z);else q.splice(Y-H,H);return!0}else{while(Y<q.length&&q[Y]<Z)Y++,H++;if(w==q[Y-H]&&H==1)return!1;if(J)if(H%2)q.splice(Y-H,H,w);else q.splice(Y-H,H,w,Z);return!0}},B}(n1),ow=function(X){Z_(B,X);function B(){return X.apply(this,arguments)||this}var U=B.prototype;return U.compute=function(w,Z,J,q){if(q(w,Z,0,1),!this._lightPasses(w,Z))return;var $=[],G,Y,H,W,P,R;for(var C=1;C<=J;C++){var O=this._getCircle(w,Z,C),N=O.length;for(var g=0;g<N;g++){if(G=O[g][0],Y=O[g][1],W=[g?2*g-1:2*N-1,2*N],P=[2*g+1,2*N],H=!this._lightPasses(G,Y),R=this._checkVisibility(W,P,H,$),R)q(G,Y,C,R);if($.length==2&&$[0][0]==0&&$[1][0]==$[1][1])return}}},U._checkVisibility=function(w,Z,J,q){if(w[0]>Z[0]){var $=this._checkVisibility(w,[w[1],w[1]],J,q),G=this._checkVisibility([0,1],Z,J,q);return($+G)/2}var Y=0,H=!1;while(Y<q.length){var W=q[Y],P=W[0]*w[1]-w[0]*W[1];if(P>=0){if(P==0&&!(Y%2))H=!0;break}Y++}var R=q.length,C=!1;while(R--){var O=q[R],N=Z[0]*O[1]-O[0]*Z[1];if(N>=0){if(N==0&&R%2)C=!0;break}}var g=!0;if(Y==R&&(H||C))g=!1;else if(H&&C&&Y+1==R&&R%2)g=!1;else if(Y>R&&Y%2)g=!1;if(!g)return 0;var x,y=R-Y+1;if(y%2)if(Y%2){var a=q[Y];if(x=(Z[0]*a[1]-a[0]*Z[1])/(a[1]*Z[1]),J)q.splice(Y,y,Z)}else{var e=q[R];if(x=(e[0]*w[1]-w[0]*e[1])/(w[1]*e[1]),J)q.splice(Y,y,w)}else if(Y%2){var V_=q[Y],G_=q[R];if(x=(G_[0]*V_[1]-V_[0]*G_[1])/(V_[1]*G_[1]),J)q.splice(Y,y)}else{if(J)q.splice(Y,y,w,Z);return 1}var v_=(Z[0]*w[1]-w[0]*Z[1])/(w[1]*Z[1]);return x/v_},B}(n1),T_=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],aw=function(X){Z_(B,X);function B(){return X.apply(this,arguments)||this}var U=B.prototype;return U.compute=function(w,Z,J,q){q(w,Z,0,1);for(var $=0;$<T_.length;$++)this._renderOctant(w,Z,T_[$],J,q)},U.compute180=function(w,Z,J,q,$){$(w,Z,0,1);var G=(q-1+8)%8,Y=(q-2+8)%8,H=(q+1+8)%8;this._renderOctant(w,Z,T_[Y],J,$),this._renderOctant(w,Z,T_[G],J,$),this._renderOctant(w,Z,T_[q],J,$),this._renderOctant(w,Z,T_[H],J,$)},U.compute90=function(w,Z,J,q,$){$(w,Z,0,1);var G=(q-1+8)%8;this._renderOctant(w,Z,T_[q],J,$),this._renderOctant(w,Z,T_[G],J,$)},U._renderOctant=function(w,Z,J,q,$){this._castVisibility(w,Z,1,1,0,q+1,J[0],J[1],J[2],J[3],$)},U._castVisibility=function(w,Z,J,q,$,G,Y,H,W,P,R){if(q<$)return;for(var C=J;C<=G;C++){var O=-C-1,N=-C,g=!1,x=0;while(O<=0){O+=1;var y=w+O*Y+N*H,a=Z+O*W+N*P,e=(O-0.5)/(N+0.5),V_=(O+0.5)/(N-0.5);if(V_>q)continue;if(e<$)break;if(O*O+N*N<G*G)R(y,a,C,1);if(!g){if(!this._lightPasses(y,a)&&C<G)g=!0,this._castVisibility(w,Z,C+1,q,e,G,Y,H,W,P,R),x=V_}else{if(!this._lightPasses(y,a)){x=V_;continue}g=!1,q=x}}if(g)break}},B}(n1),iw={DiscreteShadowcasting:sw,PreciseShadowcasting:ow,RecursiveShadowcasting:aw},c_=function(){function X(U,V){if(U===void 0)U=y1;if(V===void 0)V=d1;this._width=U,this._height=V}var B=X.prototype;return B._fillMap=function(V){var w=[];for(var Z=0;Z<this._width;Z++){w.push([]);for(var J=0;J<this._height;J++)w[Z].push(V)}return w},X}(),tw=function(X){Z_(B,X);function B(){return X.apply(this,arguments)||this}var U=B.prototype;return U.create=function(w){var Z=this._width-1,J=this._height-1;for(var q=0;q<=Z;q++)for(var $=0;$<=J;$++){var G=q&&$&&q<Z&&$<J;w(q,$,G?0:1)}return this},B}(c_),X0=function(X){Z_(B,X);function B(V,w){var Z=X.call(this,V,w)||this;return Z._rooms=[],Z._corridors=[],Z}var U=B.prototype;return U.getRooms=function(){return this._rooms},U.getCorridors=function(){return this._corridors},B}(c_),Y0=function(){},D1=function(X){Z_(B,X);function B(V,w,Z,J,q,$){var G=X.call(this)||this;if(G._x1=V,G._y1=w,G._x2=Z,G._y2=J,G._doors={},q!==void 0&&$!==void 0)G.addDoor(q,$);return G}B.createRandomAt=function(w,Z,J,q,$){var G=$.roomWidth[0],Y=$.roomWidth[1],H=z.getUniformInt(G,Y);G=$.roomHeight[0],Y=$.roomHeight[1];var W=z.getUniformInt(G,Y);if(J==1){var P=Z-Math.floor(z.getUniform()*W);return new this(w+1,P,w+H,P+W-1,w,Z)}if(J==-1){var R=Z-Math.floor(z.getUniform()*W);return new this(w-H,R,w-1,R+W-1,w,Z)}if(q==1){var C=w-Math.floor(z.getUniform()*H);return new this(C,Z+1,C+H-1,Z+W,w,Z)}if(q==-1){var O=w-Math.floor(z.getUniform()*H);return new this(O,Z-W,O+H-1,Z-1,w,Z)}throw Error("dx or dy must be 1 or -1")},B.createRandomCenter=function(w,Z,J){var q=J.roomWidth[0],$=J.roomWidth[1],G=z.getUniformInt(q,$);q=J.roomHeight[0],$=J.roomHeight[1];var Y=z.getUniformInt(q,$),H=w-Math.floor(z.getUniform()*G),W=Z-Math.floor(z.getUniform()*Y),P=H+G-1,R=W+Y-1;return new this(H,W,P,R)},B.createRandom=function(w,Z,J){var q=J.roomWidth[0],$=J.roomWidth[1],G=z.getUniformInt(q,$);q=J.roomHeight[0],$=J.roomHeight[1];var Y=z.getUniformInt(q,$),H=w-G-1,W=Z-Y-1,P=1+Math.floor(z.getUniform()*H),R=1+Math.floor(z.getUniform()*W),C=P+G-1,O=R+Y-1;return new this(P,R,C,O)};var U=B.prototype;return U.addDoor=function(w,Z){return this._doors[w+","+Z]=1,this},U.getDoors=function(w){for(var Z in this._doors){var J=Z.split(",");w(parseInt(J[0]),parseInt(J[1]))}return this},U.clearDoors=function(){return this._doors={},this},U.addDoors=function(w){var Z=this._x1-1,J=this._x2+1,q=this._y1-1,$=this._y2+1;for(var G=Z;G<=J;G++)for(var Y=q;Y<=$;Y++){if(G!=Z&&G!=J&&Y!=q&&Y!=$)continue;if(w(G,Y))continue;this.addDoor(G,Y)}return this},U.debug=function(){console.log("room",this._x1,this._y1,this._x2,this._y2)},U.isValid=function(w,Z){var J=this._x1-1,q=this._x2+1,$=this._y1-1,G=this._y2+1;for(var Y=J;Y<=q;Y++)for(var H=$;H<=G;H++)if(Y==J||Y==q||H==$||H==G){if(!w(Y,H))return!1}else if(!Z(Y,H))return!1;return!0},U.create=function(w){var Z=this._x1-1,J=this._x2+1,q=this._y1-1,$=this._y2+1,G=0;for(var Y=Z;Y<=J;Y++)for(var H=q;H<=$;H++){if(Y+","+H in this._doors)G=2;else if(Y==Z||Y==J||H==q||H==$)G=1;else G=0;w(Y,H,G)}},U.getCenter=function(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},U.getLeft=function(){return this._x1},U.getRight=function(){return this._x2},U.getTop=function(){return this._y1},U.getBottom=function(){return this._y2},B}(Y0),s1=function(X){Z_(B,X);function B(V,w,Z,J){var q=X.call(this)||this;return q._startX=V,q._startY=w,q._endX=Z,q._endY=J,q._endsWithAWall=!0,q}B.createRandomAt=function(w,Z,J,q,$){var G=$.corridorLength[0],Y=$.corridorLength[1],H=z.getUniformInt(G,Y);return new this(w,Z,w+J*H,Z+q*H)};var U=B.prototype;return U.debug=function(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},U.isValid=function(w,Z){var J=this._startX,q=this._startY,$=this._endX-J,G=this._endY-q,Y=1+Math.max(Math.abs($),Math.abs(G));if($)$=$/Math.abs($);if(G)G=G/Math.abs(G);var H=G,W=-$,P=!0;for(var R=0;R<Y;R++){var C=J+R*$,O=q+R*G;if(!Z(C,O))P=!1;if(!w(C+H,O+W))P=!1;if(!w(C-H,O-W))P=!1;if(!P){Y=R,this._endX=C-$,this._endY=O-G;break}}if(Y==0)return!1;if(Y==1&&w(this._endX+$,this._endY+G))return!1;var N=!w(this._endX+$+H,this._endY+G+W),g=!w(this._endX+$-H,this._endY+G-W);if(this._endsWithAWall=w(this._endX+$,this._endY+G),(N||g)&&this._endsWithAWall)return!1;return!0},U.create=function(w){var Z=this._startX,J=this._startY,q=this._endX-Z,$=this._endY-J,G=1+Math.max(Math.abs(q),Math.abs($));if(q)q=q/Math.abs(q);if($)$=$/Math.abs($);for(var Y=0;Y<G;Y++){var H=Z+Y*q,W=J+Y*$;w(H,W,0)}return!0},U.createPriorityWalls=function(w){if(!this._endsWithAWall)return;var Z=this._startX,J=this._startY,q=this._endX-Z,$=this._endY-J;if(q)q=q/Math.abs(q);if($)$=$/Math.abs($);var G=$,Y=-q;w(this._endX+q,this._endY+$),w(this._endX+G,this._endY+Y),w(this._endX-G,this._endY-Y)},B}(Y0),ew=function(X){Z_(B,X);function B(V,w,Z){var J=X.call(this,V,w)||this;return J._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(J._options,Z),J._map=[],J._dug=0,J._roomAttempts=20,J._corridorAttempts=20,J._connected=[],J._unconnected=[],J._digCallback=J._digCallback.bind(y_(J)),J._canBeDugCallback=J._canBeDugCallback.bind(y_(J)),J._isWallCallback=J._isWallCallback.bind(y_(J)),J}var U=B.prototype;return U.create=function(w){var Z=Date.now();while(!0){var J=Date.now();if(J-Z>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(w)for(var q=0;q<this._width;q++)for(var $=0;$<this._height;$++)w(q,$,this._map[q][$]);return this},U._generateRooms=function(){var w=this._width-2,Z=this._height-2,J;do if(J=this._generateRoom(),this._dug/(w*Z)>this._options.roomDugPercentage)break;while(J)},U._generateRoom=function(){var w=0;while(w<this._roomAttempts){w++;var Z=D1.createRandom(this._width,this._height,this._options);if(!Z.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Z.create(this._digCallback),this._rooms.push(Z),Z}return null},U._generateCorridors=function(){var w=0;while(w<this._corridorAttempts){w++,this._corridors=[],this._map=this._fillMap(1);for(var Z=0;Z<this._rooms.length;Z++){var J=this._rooms[Z];J.clearDoors(),J.create(this._digCallback)}if(this._unconnected=z.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var q=z.getItem(this._connected);if(!q)break;var $=this._closestRoom(this._unconnected,q);if(!$)break;var G=this._closestRoom(this._connected,$);if(!G)break;var Y=this._connectRooms($,G);if(!Y)break;if(!this._unconnected.length)return!0}}return!1},U._closestRoom=function(w,Z){var J=1/0,q=Z.getCenter(),$=null;for(var G=0;G<w.length;G++){var Y=w[G],H=Y.getCenter(),W=H[0]-q[0],P=H[1]-q[1],R=W*W+P*P;if(R<J)J=R,$=Y}return $},U._connectRooms=function(w,Z){var J=w.getCenter(),q=Z.getCenter(),$=q[0]-J[0],G=q[1]-J[1],Y,H,W,P,R,C,O;if(Math.abs($)<Math.abs(G))W=G>0?2:0,P=(W+2)%4,R=Z.getLeft(),C=Z.getRight(),O=0;else W=$>0?1:3,P=(W+2)%4,R=Z.getTop(),C=Z.getBottom(),O=1;if(Y=this._placeInWall(w,W),!Y)return!1;if(Y[O]>=R&&Y[O]<=C){H=Y.slice();var N=0;switch(P){case 0:N=Z.getTop()-1;break;case 1:N=Z.getRight()+1;break;case 2:N=Z.getBottom()+1;break;case 3:N=Z.getLeft()-1;break}H[(O+1)%2]=N,this._digLine([Y,H])}else if(Y[O]<R-1||Y[O]>C+1){var g=Y[O]-q[O],x=0;switch(P){case 0:case 1:x=g<0?3:1;break;case 2:case 3:x=g<0?1:3;break}if(P=(P+x)%4,H=this._placeInWall(Z,P),!H)return!1;var y=[0,0];y[O]=Y[O];var a=(O+1)%2;y[a]=H[a],this._digLine([Y,y,H])}else{var e=(O+1)%2;if(H=this._placeInWall(Z,P),!H)return!1;var V_=Math.round((H[e]+Y[e])/2),G_=[0,0],v_=[0,0];G_[O]=Y[O],G_[e]=V_,v_[O]=H[O],v_[e]=V_,this._digLine([Y,G_,v_,H])}if(w.addDoor(Y[0],Y[1]),Z.addDoor(H[0],H[1]),O=this._unconnected.indexOf(w),O!=-1)this._unconnected.splice(O,1),this._connected.push(w);if(O=this._unconnected.indexOf(Z),O!=-1)this._unconnected.splice(O,1),this._connected.push(Z);return!0},U._placeInWall=function(w,Z){var J=[0,0],q=[0,0],$=0;switch(Z){case 0:q=[1,0],J=[w.getLeft(),w.getTop()-1],$=w.getRight()-w.getLeft()+1;break;case 1:q=[0,1],J=[w.getRight()+1,w.getTop()],$=w.getBottom()-w.getTop()+1;break;case 2:q=[1,0],J=[w.getLeft(),w.getBottom()+1],$=w.getRight()-w.getLeft()+1;break;case 3:q=[0,1],J=[w.getLeft()-1,w.getTop()],$=w.getBottom()-w.getTop()+1;break}var G=[],Y=-2;for(var H=0;H<$;H++){var W=J[0]+H*q[0],P=J[1]+H*q[1];G.push(null);var R=this._map[W][P]==1;if(R){if(Y!=H-1)G[H]=[W,P]}else if(Y=H,H)G[H-1]=null}for(var C=G.length-1;C>=0;C--)if(!G[C])G.splice(C,1);return G.length?z.getItem(G):null},U._digLine=function(w){for(var Z=1;Z<w.length;Z++){var J=w[Z-1],q=w[Z],$=new s1(J[0],J[1],q[0],q[1]);$.create(this._digCallback),this._corridors.push($)}},U._digCallback=function(w,Z,J){if(this._map[w][Z]=J,J==0)this._dug++},U._isWallCallback=function(w,Z){if(w<0||Z<0||w>=this._width||Z>=this._height)return!1;return this._map[w][Z]==1},U._canBeDugCallback=function(w,Z){if(w<1||Z<1||w+1>=this._width||Z+1>=this._height)return!1;return this._map[w][Z]==1},B}(X0),_6=function(X){Z_(B,X);function B(V,w,Z){var J;if(Z===void 0)Z={};return J=X.call(this,V,w)||this,J._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},J.setOptions(Z),J._dirs=$_[J._options.topology],J._map=J._fillMap(0),J}var U=B.prototype;return U.randomize=function(w){for(var Z=0;Z<this._width;Z++)for(var J=0;J<this._height;J++)this._map[Z][J]=z.getUniform()<w?1:0;return this},U.setOptions=function(w){Object.assign(this._options,w)},U.set=function(w,Z,J){this._map[w][Z]=J},U.create=function(w){var Z=this._fillMap(0),J=this._options.born,q=this._options.survive;for(var $=0;$<this._height;$++){var G=1,Y=0;if(this._options.topology==6)G=2,Y=$%2;for(var H=Y;H<this._width;H+=G){var W=this._map[H][$],P=this._getNeighbors(H,$);if(W&&q.indexOf(P)!=-1)Z[H][$]=1;else if(!W&&J.indexOf(P)!=-1)Z[H][$]=1}}this._map=Z,w&&this._serviceCallback(w)},U._serviceCallback=function(w){for(var Z=0;Z<this._height;Z++){var J=1,q=0;if(this._options.topology==6)J=2,q=Z%2;for(var $=q;$<this._width;$+=J)w($,Z,this._map[$][Z])}},U._getNeighbors=function(w,Z){var J=0;for(var q=0;q<this._dirs.length;q++){var $=this._dirs[q],G=w+$[0],Y=Z+$[1];if(G<0||G>=this._width||Y<0||Y>=this._height)continue;J+=this._map[G][Y]==1?1:0}return J},U.connect=function(w,Z,J){if(!Z)Z=0;var q=[],$={},G=1,Y=[0,0];if(this._options.topology==6)G=2,Y=[0,1];for(var H=0;H<this._height;H++)for(var W=Y[H%2];W<this._width;W+=G)if(this._freeSpace(W,H,Z)){var P=[W,H];$[this._pointKey(P)]=P,q.push([W,H])}var R=q[z.getUniformInt(0,q.length-1)],C=this._pointKey(R),O={};O[C]=R,delete $[C],this._findConnected(O,$,[R],!1,Z);while(Object.keys($).length>0){var N=this._getFromTo(O,$),g=N[0],x=N[1],y={};y[this._pointKey(g)]=g,this._findConnected(y,$,[g],!0,Z);var a=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;a.call(this,x,g,O,$,Z,J);for(var e in y){var V_=y[e];this._map[V_[0]][V_[1]]=Z,O[e]=V_,delete $[e]}}w&&this._serviceCallback(w)},U._getFromTo=function(w,Z){var J=[0,0],q=[0,0],$,G=Object.keys(w),Y=Object.keys(Z);for(var H=0;H<5;H++){if(G.length<Y.length){var W=G;q=w[W[z.getUniformInt(0,W.length-1)]],J=this._getClosest(q,Z)}else{var P=Y;J=Z[P[z.getUniformInt(0,P.length-1)]],q=this._getClosest(J,w)}if($=(J[0]-q[0])*(J[0]-q[0])+(J[1]-q[1])*(J[1]-q[1]),$<64)break}return[J,q]},U._getClosest=function(w,Z){var J=null,q=null;for(var $ in Z){var G=Z[$],Y=(G[0]-w[0])*(G[0]-w[0])+(G[1]-w[1])*(G[1]-w[1]);if(q==null||Y<q)q=Y,J=G}return J},U._findConnected=function(w,Z,J,q,$){while(J.length>0){var G=J.splice(0,1)[0],Y=void 0;if(this._options.topology==6)Y=[[G[0]+2,G[1]],[G[0]+1,G[1]-1],[G[0]-1,G[1]-1],[G[0]-2,G[1]],[G[0]-1,G[1]+1],[G[0]+1,G[1]+1]];else Y=[[G[0]+1,G[1]],[G[0]-1,G[1]],[G[0],G[1]+1],[G[0],G[1]-1]];for(var H=0;H<Y.length;H++){var W=this._pointKey(Y[H]);if(w[W]==null&&this._freeSpace(Y[H][0],Y[H][1],$)){if(w[W]=Y[H],!q)delete Z[W];J.push(Y[H])}}}},U._tunnelToConnected=function(w,Z,J,q,$,G){var Y,H;if(Z[0]<w[0])Y=Z,H=w;else Y=w,H=Z;for(var W=Y[0];W<=H[0];W++){this._map[W][Y[1]]=$;var P=[W,Y[1]],R=this._pointKey(P);J[R]=P,delete q[R]}if(G&&Y[0]<H[0])G(Y,[H[0],Y[1]]);var C=H[0];if(Z[1]<w[1])Y=Z,H=w;else Y=w,H=Z;for(var O=Y[1];O<H[1];O++){this._map[C][O]=$;var N=[C,O],g=this._pointKey(N);J[g]=N,delete q[g]}if(G&&Y[1]<H[1])G([H[0],Y[1]],[H[0],H[1]])},U._tunnelToConnected6=function(w,Z,J,q,$,G){var Y,H;if(Z[0]<w[0])Y=Z,H=w;else Y=w,H=Z;var W=Y[0],P=Y[1];while(!(W==H[0]&&P==H[1])){var R=2;if(P<H[1])P++,R=1;else if(P>H[1])P--,R=1;if(W<H[0])W+=R;else if(W>H[0])W-=R;else if(H[1]%2)W-=R;else W+=R;this._map[W][P]=$;var C=[W,P],O=this._pointKey(C);J[O]=C,delete q[O]}if(G)G(Z,w)},U._freeSpace=function(w,Z,J){return w>=0&&w<this._width&&Z>=0&&Z<this._height&&this._map[w][Z]==J},U._pointKey=function(w){return w[0]+"."+w[1]},B}(c_),w6={room:D1,corridor:s1},Z6=function(X){Z_(B,X);function B(V,w,Z){var J;if(Z===void 0)Z={};return J=X.call(this,V,w)||this,J._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Z),J._features={room:4,corridor:4},J._map=[],J._featureAttempts=20,J._walls={},J._dug=0,J._digCallback=J._digCallback.bind(y_(J)),J._canBeDugCallback=J._canBeDugCallback.bind(y_(J)),J._isWallCallback=J._isWallCallback.bind(y_(J)),J._priorityWallCallback=J._priorityWallCallback.bind(y_(J)),J}var U=B.prototype;return U.create=function(w){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Z=(this._width-2)*(this._height-2);this._firstRoom();var J=Date.now(),q;do{q=0;var $=Date.now();if($-J>this._options.timeLimit)break;var G=this._findWall();if(!G)break;var Y=G.split(","),H=parseInt(Y[0]),W=parseInt(Y[1]),P=this._getDiggingDirection(H,W);if(!P)continue;var R=0;do if(R++,this._tryFeature(H,W,P[0],P[1])){this._removeSurroundingWalls(H,W),this._removeSurroundingWalls(H-P[0],W-P[1]);break}while(R<this._featureAttempts);for(var C in this._walls)if(this._walls[C]>1)q++}while(this._dug/Z<this._options.dugPercentage||q);if(this._addDoors(),w)for(var O=0;O<this._width;O++)for(var N=0;N<this._height;N++)w(O,N,this._map[O][N]);return this._walls={},this._map=[],this},U._digCallback=function(w,Z,J){if(J==0||J==2)this._map[w][Z]=0,this._dug++;else this._walls[w+","+Z]=1},U._isWallCallback=function(w,Z){if(w<0||Z<0||w>=this._width||Z>=this._height)return!1;return this._map[w][Z]==1},U._canBeDugCallback=function(w,Z){if(w<1||Z<1||w+1>=this._width||Z+1>=this._height)return!1;return this._map[w][Z]==1},U._priorityWallCallback=function(w,Z){this._walls[w+","+Z]=2},U._firstRoom=function(){var w=Math.floor(this._width/2),Z=Math.floor(this._height/2),J=D1.createRandomCenter(w,Z,this._options);this._rooms.push(J),J.create(this._digCallback)},U._findWall=function(){var w=[],Z=[];for(var J in this._walls){var q=this._walls[J];if(q==2)Z.push(J);else w.push(J)}var $=Z.length?Z:w;if(!$.length)return null;var G=z.getItem($.sort());return delete this._walls[G],G},U._tryFeature=function(w,Z,J,q){var $=z.getWeightedValue(this._features),G=w6[$],Y=G.createRandomAt(w,Z,J,q,this._options);if(!Y.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(Y.create(this._digCallback),Y instanceof D1)this._rooms.push(Y);if(Y instanceof s1)Y.createPriorityWalls(this._priorityWallCallback),this._corridors.push(Y);return!0},U._removeSurroundingWalls=function(w,Z){var J=$_[4];for(var q=0;q<J.length;q++){var $=J[q],G=w+$[0],Y=Z+$[1];delete this._walls[G+","+Y],G=w+2*$[0],Y=Z+2*$[1],delete this._walls[G+","+Y]}},U._getDiggingDirection=function(w,Z){if(w<=0||Z<=0||w>=this._width-1||Z>=this._height-1)return null;var J=null,q=$_[4];for(var $=0;$<q.length;$++){var G=q[$],Y=w+G[0],H=Z+G[1];if(!this._map[Y][H]){if(J)return null;J=G}}if(!J)return null;return[-J[0],-J[1]]},U._addDoors=function(){var w=this._map;function Z($,G){return w[$][G]==1}for(var J=0;J<this._rooms.length;J++){var q=this._rooms[J];q.clearDoors(),q.addDoors(Z)}},B}(X0);function G0(X,B,U){U[B[X+1]]=U[X],B[U[X]]=B[X+1],U[X]=X+1,B[X+1]=X}function L0(X,B,U){U[B[X]]=U[X],B[U[X]]=B[X],U[X]=X,B[X]=X}var Q6=function(X){Z_(B,X);function B(){return X.apply(this,arguments)||this}var U=B.prototype;return U.create=function(w){var Z=this._fillMap(1),J=Math.ceil((this._width-2)/2),q=0.375,$=[],G=[];for(var Y=0;Y<J;Y++)$.push(Y),G.push(Y);$.push(J-1);var H;for(H=1;H+3<this._height;H+=2)for(var W=0;W<J;W++){var P=2*W+1,R=H;if(Z[P][R]=0,W!=$[W+1]&&z.getUniform()>q)G0(W,$,G),Z[P+1][R]=0;if(W!=$[W]&&z.getUniform()>q)L0(W,$,G);else Z[P][R+1]=0}for(var C=0;C<J;C++){var O=2*C+1,N=H;if(Z[O][N]=0,C!=$[C+1]&&(C==$[C]||z.getUniform()>q))G0(C,$,G),Z[O+1][N]=0;L0(C,$,G)}for(var g=0;g<this._width;g++)for(var x=0;x<this._height;x++)w(g,x,Z[g][x]);return this},B}(c_),J6=function(X){Z_(B,X);function B(){var V=X.apply(this,arguments)||this;return V._stack=[],V._map=[],V}var U=B.prototype;return U.create=function(w){var Z=this._width,J=this._height;this._map=[];for(var q=0;q<Z;q++){this._map.push([]);for(var $=0;$<J;$++){var G=q==0||$==0||q+1==Z||$+1==J;this._map[q].push(G?1:0)}}this._stack=[[1,1,Z-2,J-2]],this._process();for(var Y=0;Y<Z;Y++)for(var H=0;H<J;H++)w(Y,H,this._map[Y][H]);return this._map=[],this},U._process=function(){while(this._stack.length){var w=this._stack.shift();this._partitionRoom(w)}},U._partitionRoom=function(w){var Z=[],J=[];for(var q=w[0]+1;q<w[2];q++){var $=this._map[q][w[1]-1],G=this._map[q][w[3]+1];if($&&G&&!(q%2))Z.push(q)}for(var Y=w[1]+1;Y<w[3];Y++){var H=this._map[w[0]-1][Y],W=this._map[w[2]+1][Y];if(H&&W&&!(Y%2))J.push(Y)}if(!Z.length||!J.length)return;var P=z.getItem(Z),R=z.getItem(J);this._map[P][R]=1;var C=[],O=[];C.push(O);for(var N=w[0];N<P;N++)if(this._map[N][R]=1,N%2)O.push([N,R]);O=[],C.push(O);for(var g=P+1;g<=w[2];g++)if(this._map[g][R]=1,g%2)O.push([g,R]);O=[],C.push(O);for(var x=w[1];x<R;x++)if(this._map[P][x]=1,x%2)O.push([P,x]);O=[],C.push(O);for(var y=R+1;y<=w[3];y++)if(this._map[P][y]=1,y%2)O.push([P,y]);var a=z.getItem(C);for(var e=0;e<C.length;e++){var V_=C[e];if(V_==a)continue;var G_=z.getItem(V_);this._map[G_[0]][G_[1]]=0}this._stack.push([w[0],w[1],P-1,R-1]),this._stack.push([P+1,w[1],w[2],R-1]),this._stack.push([w[0],R+1,P-1,w[3]]),this._stack.push([P+1,R+1,w[2],w[3]])},B}(c_),V6=function(X){Z_(B,X);function B(V,w,Z){var J;if(Z===void 0)Z=0;return J=X.call(this,V,w)||this,J._regularity=Z,J._map=[],J}var U=B.prototype;return U.create=function(w){var Z=this._width,J=this._height,q=this._fillMap(1);Z-=Z%2?1:2,J-=J%2?1:2;var $=0,G=0,Y=0,H=0,W=0,P=!1,R=[[0,0],[0,0],[0,0],[0,0]];do{if($=1+2*Math.floor(z.getUniform()*(Z-1)/2),G=1+2*Math.floor(z.getUniform()*(J-1)/2),!W)q[$][G]=0;if(!q[$][G]){this._randomize(R);do{if(Math.floor(z.getUniform()*(this._regularity+1))==0)this._randomize(R);P=!0;for(var C=0;C<4;C++)if(Y=$+R[C][0]*2,H=G+R[C][1]*2,this._isFree(q,Y,H,Z,J)){q[Y][H]=0,q[$+R[C][0]][G+R[C][1]]=0,$=Y,G=H,P=!1,W++;break}}while(!P)}}while(W+1<Z*J/4);for(var O=0;O<this._width;O++)for(var N=0;N<this._height;N++)w(O,N,q[O][N]);return this._map=[],this},U._randomize=function(w){for(var Z=0;Z<4;Z++)w[Z][0]=0,w[Z][1]=0;switch(Math.floor(z.getUniform()*4)){case 0:w[0][0]=-1,w[1][0]=1,w[2][1]=-1,w[3][1]=1;break;case 1:w[3][0]=-1,w[2][0]=1,w[1][1]=-1,w[0][1]=1;break;case 2:w[2][0]=-1,w[3][0]=1,w[0][1]=-1,w[1][1]=1;break;case 3:w[1][0]=-1,w[0][0]=1,w[3][1]=-1,w[2][1]=1;break}},U._isFree=function(w,Z,J,q,$){if(Z<1||J<1||Z>=q||J>=$)return!1;return w[Z][J]},B}(c_),K6=function(X){Z_(B,X);function B(V,w,Z){var J=X.call(this,V,w)||this;if(J.map=[],J.rooms=[],J.connectedCells=[],Z=Object.assign({cellWidth:3,cellHeight:3},Z),!Z.hasOwnProperty("roomWidth"))Z.roomWidth=J._calculateRoomSize(J._width,Z.cellWidth);if(!Z.hasOwnProperty("roomHeight"))Z.roomHeight=J._calculateRoomSize(J._height,Z.cellHeight);return J._options=Z,J}var U=B.prototype;return U.create=function(w){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),w)for(var Z=0;Z<this._width;Z++)for(var J=0;J<this._height;J++)w(Z,J,this.map[Z][J]);return this},U._calculateRoomSize=function(w,Z){var J=Math.floor(w/Z*0.8),q=Math.floor(w/Z*0.25);if(q<2)q=2;if(J<2)J=2;return[q,J]},U._initRooms=function(){for(var w=0;w<this._options.cellWidth;w++){this.rooms.push([]);for(var Z=0;Z<this._options.cellHeight;Z++)this.rooms[w].push({x:0,y:0,width:0,height:0,connections:[],cellx:w,celly:Z})}},U._connectRooms=function(){var w=z.getUniformInt(0,this._options.cellWidth-1),Z=z.getUniformInt(0,this._options.cellHeight-1),J,q,$,G=!1,Y,H,W;do{W=[0,2,4,6],W=z.shuffle(W);do{if(G=!1,J=W.pop(),q=w+$_[8][J][0],$=Z+$_[8][J][1],q<0||q>=this._options.cellWidth)continue;if($<0||$>=this._options.cellHeight)continue;if(Y=this.rooms[w][Z],Y.connections.length>0){if(Y.connections[0][0]==q&&Y.connections[0][1]==$)break}if(H=this.rooms[q][$],H.connections.length==0)H.connections.push([w,Z]),this.connectedCells.push([q,$]),w=q,Z=$,G=!0}while(W.length>0&&G==!1)}while(W.length>0)},U._connectUnconnectedRooms=function(){var w=this._options.cellWidth,Z=this._options.cellHeight;this.connectedCells=z.shuffle(this.connectedCells);var J,q,$;for(var G=0;G<this._options.cellWidth;G++)for(var Y=0;Y<this._options.cellHeight;Y++)if(J=this.rooms[G][Y],J.connections.length==0){var H=[0,2,4,6];H=z.shuffle(H),$=!1;do{var W=H.pop(),P=G+$_[8][W][0],R=Y+$_[8][W][1];if(P<0||P>=w||R<0||R>=Z)continue;if(q=this.rooms[P][R],$=!0,q.connections.length==0)break;for(var C=0;C<q.connections.length;C++)if(q.connections[C][0]==G&&q.connections[C][1]==Y){$=!1;break}if($)break}while(H.length);if($)J.connections.push([q.cellx,q.celly]);else console.log("-- Unable to connect room.")}},U._createRandomRoomConnections=function(){},U._createRooms=function(){var w=this._width,Z=this._height,J=this._options.cellWidth,q=this._options.cellHeight,$=Math.floor(this._width/J),G=Math.floor(this._height/q),Y,H,W=this._options.roomWidth,P=this._options.roomHeight,R,C,O;for(var N=0;N<J;N++)for(var g=0;g<q;g++){if(R=$*N,C=G*g,R==0)R=1;if(C==0)C=1;if(Y=z.getUniformInt(W[0],W[1]),H=z.getUniformInt(P[0],P[1]),g>0){O=this.rooms[N][g-1];while(C-(O.y+O.height)<3)C++}if(N>0){O=this.rooms[N-1][g];while(R-(O.x+O.width)<3)R++}var x=Math.round(z.getUniformInt(0,$-Y)/2),y=Math.round(z.getUniformInt(0,G-H)/2);while(R+x+Y>=w)if(x)x--;else Y--;while(C+y+H>=Z)if(y)y--;else H--;R=R+x,C=C+y,this.rooms[N][g].x=R,this.rooms[N][g].y=C,this.rooms[N][g].width=Y,this.rooms[N][g].height=H;for(var a=R;a<R+Y;a++)for(var e=C;e<C+H;e++)this.map[a][e]=0}},U._getWallPosition=function(w,Z){var J,q,$;if(Z==1||Z==3){if(J=z.getUniformInt(w.x+1,w.x+w.width-2),Z==1)q=w.y-2,$=q+1;else q=w.y+w.height+1,$=q-1;this.map[J][$]=0}else{if(q=z.getUniformInt(w.y+1,w.y+w.height-2),Z==2)J=w.x+w.width+1,$=J-1;else J=w.x-2,$=J+1;this.map[$][q]=0}return[J,q]},U._drawCorridor=function(w,Z){var J=Z[0]-w[0],q=Z[1]-w[1],$=w[0],G=w[1],Y,H,W,P,R=[],C=Math.abs(J),O=Math.abs(q),N=z.getUniform(),g=N,x=1-N;if(H=J>0?2:6,W=q>0?4:0,C<O)Y=Math.ceil(O*g),R.push([W,Y]),R.push([H,C]),Y=Math.floor(O*x),R.push([W,Y]);else Y=Math.ceil(C*g),R.push([H,Y]),R.push([W,O]),Y=Math.floor(C*x),R.push([H,Y]);this.map[$][G]=0;while(R.length>0){P=R.pop();while(P[1]>0)$+=$_[8][P[0]][0],G+=$_[8][P[0]][1],this.map[$][G]=0,P[1]=P[1]-1}},U._createCorridors=function(){var w=this._options.cellWidth,Z=this._options.cellHeight,J,q,$,G,Y;for(var H=0;H<w;H++)for(var W=0;W<Z;W++){J=this.rooms[H][W];for(var P=0;P<J.connections.length;P++){if(q=J.connections[P],$=this.rooms[q[0]][q[1]],$.cellx>J.cellx)G=2,Y=4;else if($.cellx<J.cellx)G=4,Y=2;else if($.celly>J.celly)G=3,Y=1;else G=1,Y=3;this._drawCorridor(this._getWallPosition(J,G),this._getWallPosition($,Y))}}},B}(c_),q6={Arena:tw,Uniform:ew,Cellular:_6,Digger:Z6,EllerMaze:Q6,DividedMaze:J6,IceyMaze:V6,Rogue:K6},z6=function(){},U6=0.5*(Math.sqrt(3)-1),K1=(3-Math.sqrt(3))/6,$6=function(X){Z_(B,X);function B(V){var w;if(V===void 0)V=256;w=X.call(this)||this,w._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Z=[];for(var J=0;J<V;J++)Z.push(J);Z=z.shuffle(Z),w._perms=[],w._indexes=[];for(var q=0;q<2*V;q++)w._perms.push(Z[q%V]),w._indexes.push(w._perms[q]%w._gradients.length);return w}var U=B.prototype;return U.get=function(w,Z){var J=this._perms,q=this._indexes,$=J.length/2,G=0,Y=0,H=0,W,P=(w+Z)*U6,R=Math.floor(w+P),C=Math.floor(Z+P),O=(R+C)*K1,N=R-O,g=C-O,x=w-N,y=Z-g,a,e;if(x>y)a=1,e=0;else a=0,e=1;var V_=x-a+K1,G_=y-e+K1,v_=x-1+2*K1,o1=y-1+2*K1,a1=j(R,$),i1=j(C,$),q1=0.5-x*x-y*y;if(q1>=0){q1*=q1,W=q[a1+J[i1]];var W0=this._gradients[W];G=q1*q1*(W0[0]*x+W0[1]*y)}var z1=0.5-V_*V_-G_*G_;if(z1>=0){z1*=z1,W=q[a1+a+J[i1+e]];var D0=this._gradients[W];Y=z1*z1*(D0[0]*V_+D0[1]*G_)}var U1=0.5-v_*v_-o1*o1;if(U1>=0){U1*=U1,W=q[a1+1+J[i1+1]];var F0=this._gradients[W];H=U1*U1*(F0[0]*v_+F0[1]*o1)}return 70*(G+Y+H)},B}(z6),B6={Simplex:$6},H0=function(){function X(U,V,w,Z){if(Z===void 0)Z={};if(this._toX=U,this._toY=V,this._passableCallback=w,this._options=Object.assign({topology:8},Z),this._dirs=$_[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var B=X.prototype;return B._getNeighbors=function(V,w){var Z=[];for(var J=0;J<this._dirs.length;J++){var q=this._dirs[J],$=V+q[0],G=w+q[1];if(!this._passableCallback($,G))continue;Z.push([$,G])}return Z},X}(),X6=function(X){Z_(B,X);function B(V,w,Z,J){var q=X.call(this,V,w,Z,J)||this;return q._computed={},q._todo=[],q._add(V,w,null),q}var U=B.prototype;return U.compute=function(w,Z,J){var q=w+","+Z;if(!(q in this._computed))this._compute(w,Z);if(!(q in this._computed))return;var $=this._computed[q];while($)J($.x,$.y),$=$.prev},U._compute=function(w,Z){while(this._todo.length){var J=this._todo.shift();if(J.x==w&&J.y==Z)return;var q=this._getNeighbors(J.x,J.y);for(var $=0;$<q.length;$++){var G=q[$],Y=G[0],H=G[1],W=Y+","+H;if(W in this._computed)continue;this._add(Y,H,J)}}},U._add=function(w,Z,J){var q={x:w,y:Z,prev:J};this._computed[w+","+Z]=q,this._todo.push(q)},B}(H0),Y6=function(X){Z_(B,X);function B(V,w,Z,J){var q;if(J===void 0)J={};return q=X.call(this,V,w,Z,J)||this,q._todo=[],q._done={},q}var U=B.prototype;return U.compute=function(w,Z,J){this._todo=[],this._done={},this._fromX=w,this._fromY=Z,this._add(this._toX,this._toY,null);while(this._todo.length){var q=this._todo.shift(),$=q.x+","+q.y;if($ in this._done)continue;if(this._done[$]=q,q.x==w&&q.y==Z)break;var G=this._getNeighbors(q.x,q.y);for(var Y=0;Y<G.length;Y++){var H=G[Y],W=H[0],P=H[1],R=W+","+P;if(R in this._done)continue;this._add(W,P,q)}}var C=this._done[w+","+Z];if(!C)return;while(C)J(C.x,C.y),C=C.prev},U._add=function(w,Z,J){var q=this._distance(w,Z),$={x:w,y:Z,prev:J,g:J?J.g+1:0,h:q},G=$.g+$.h;for(var Y=0;Y<this._todo.length;Y++){var H=this._todo[Y],W=H.g+H.h;if(G<W||G==W&&q<H.h){this._todo.splice(Y,0,$);return}}this._todo.push($)},U._distance=function(w,Z){switch(this._options.topology){case 4:return Math.abs(w-this._fromX)+Math.abs(Z-this._fromY);case 6:var J=Math.abs(w-this._fromX),q=Math.abs(Z-this._fromY);return q+Math.max(0,(J-q)/2);case 8:return Math.max(Math.abs(w-this._fromX),Math.abs(Z-this._fromY))}},B}(H0),G6={Dijkstra:X6,AStar:Y6},L6=function(){function X(U){this._scheduler=U,this._lock=1}var B=X.prototype;return B.start=function(){return this.unlock()},B.lock=function(){return this._lock++,this},B.unlock=function(){if(!this._lock)throw Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var V=this._scheduler.next();if(!V)return this.lock();var w=V.act();if(w&&w.then)this.lock(),w.then(this.unlock.bind(this))}return this},X}(),H6=function(){function X(U,V){if(V===void 0)V={};this._reflectivityCallback=U,this._options={},V=Object.assign({passes:1,emissionThreshold:100,range:10},V),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(V)}var B=X.prototype;return B.setOptions=function(V){if(Object.assign(this._options,V),V&&V.range)this.reset();return this},B.setFOV=function(V){return this._fov=V,this._fovCache={},this},B.setLight=function(V,w,Z){var J=V+","+w;if(Z)this._lights[J]=typeof Z=="string"?l(Z):Z;else delete this._lights[J];return this},B.clearLights=function(){this._lights={}},B.reset=function(){return this._reflectivityCache={},this._fovCache={},this},B.compute=function(V){var w={},Z={},J={};for(var q in this._lights){var $=this._lights[q];Z[q]=[0,0,0],__(Z[q],$)}for(var G=0;G<this._options.passes;G++){if(this._emitLight(Z,J,w),G+1==this._options.passes)continue;Z=this._computeEmitters(J,w)}for(var Y in J){var H=Y.split(","),W=parseInt(H[0]),P=parseInt(H[1]);V(W,P,J[Y])}return this},B._emitLight=function(V,w,Z){for(var J in V){var q=J.split(","),$=parseInt(q[0]),G=parseInt(q[1]);this._emitLightFromCell($,G,V[J],w),Z[J]=1}return this},B._computeEmitters=function(V,w){var Z={};for(var J in V){if(J in w)continue;var q=V[J],$=void 0;if(J in this._reflectivityCache)$=this._reflectivityCache[J];else{var G=J.split(","),Y=parseInt(G[0]),H=parseInt(G[1]);$=this._reflectivityCallback(Y,H),this._reflectivityCache[J]=$}if($==0)continue;var W=[0,0,0],P=0;for(var R=0;R<3;R++){var C=Math.round(q[R]*$);W[R]=C,P+=C}if(P>this._options.emissionThreshold)Z[J]=W}return Z},B._emitLightFromCell=function(V,w,Z,J){var q=V+","+w,$;if(q in this._fovCache)$=this._fovCache[q];else $=this._updateFOV(V,w);for(var G in $){var Y=$[G],H=void 0;if(G in J)H=J[G];else H=[0,0,0],J[G]=H;for(var W=0;W<3;W++)H[W]+=Math.round(Z[W]*Y)}return this},B._updateFOV=function(V,w){var Z=V+","+w,J={};this._fovCache[Z]=J;var q=this._options.range;function $(G,Y,H,W){var P=G+","+Y,R=W*(1-H/q);if(R==0)return;J[P]=R}return this._fov.compute(V,w,q,$.bind(this)),J},X}(),W6=f,D6=s,F6=xw;_.Color=D6,_.DEFAULT_HEIGHT=d1,_.DEFAULT_WIDTH=y1,_.DIRS=$_,_.Display=o_,_.Engine=L6,_.EventQueue=B0,_.FOV=iw,_.KEYS=mw,_.Lighting=H6,_.Map=q6,_.Noise=B6,_.Path=G6,_.RNG=z,_.Scheduler=nw,_.StringGenerator=pw,_.Text=F6,_.Util=W6,Object.defineProperty(_,"__esModule",{value:!0})})});function j0(_,Q){let K=_.components.position[Q];return`DEBUG: ${Q} at ${K.mapId},${K.x},${K.y}`}class a_{name;description;energyDelta;constructor(_,Q,K=0){this.name=_,this.description=Q,this.energyDelta=K}}class $1{name;description;constructor(_,Q){this.name=_,this.description=Q}}class j_{key;description;constructor(_,Q){this.key=_,this.description=Q}}class E_{name;description;tooltip;icon;constructor(_,Q,K="",z){this.name=_,this.description=Q,this.tooltip=K,this.icon=z}}class L_{name;description;icon;color;energyMax;unlockCondition;constructor(_,Q,K,z=100){this.name=_,this.description=Q,this.icon=K,this.energyMax=z,this.color="white",this.unlockCondition=null}}class h_{name;description;color;friendly;hostile;constructor(_,Q,K,z,L){this.name=_,this.description=Q,this.color=K,this.friendly=z,this.hostile=L}}class U_{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(_,Q,K,z="cyberyellow",L=0,D=0,j=0,M=0,b=0,k=[]){this.name=_,this.description=Q,this.icon=K,this.color=z,this.energyDelta=L,this.matter=D,this.gold=j,this.damage=M,this.energyCost=b,this.effects=k}}class n{name;description;tooltip;icon;isBlocking;isSpace;isWater;energyDelta;constructor(_,Q,K="",z=null,L={}){this.name=_,this.description=Q,this.tooltip=K,this.icon=z,this.isBlocking=L.isBlocking||!1,this.isSpace=L.isSpace||!1,this.isWater=L.isWater||!1,this.energyDelta=L.energyDelta||0}}var F={actions:{Drop:new a_("Drop","Drop current tool"),Enter:new a_("Enter","Enter a portal or plant atmosphere"),Launch:new a_("Launch","Launch into space",-10),Pickup:new a_("Pickup","Pickup an item or equip a tool"),Wait:new a_("Wait","Wait one turn in place")},ais:{aggrorange:new $1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new $1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new $1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new $1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",red:"#f00",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new j_("N","Move/interact/combat north"),E:new j_("E","Move/interact/combat east"),S:new j_("S","Move/interact/combat south"),W:new j_("W","Move/interact/combat west"),A:new j_("A","Primary action, confirm"),B:new j_("B","Take a break, cancel"),"1":new j_("1","Secondary action, first quick slot"),"2":new j_("2","Tertiary action, second quick slot"),M:new j_("M","Menu"),"#":new j_("#","Open prompt")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{BioAbsorber:new E_("BioAbsorber","Gain energy while on trees","[Bio Absorber]: Regenerates energy on trees","fx_ba"),Recharger:new E_("Recharger","Doubles energy gained from chargepads","[Recharger]: Doubles energy gained from chargepads","fx_re"),Recuperation:new E_("Recuperation","Reduces tool energy cost","[Recuperation]: Reduces tool energy cost (max. -1)","fx_cu"),RockCrusher:new E_("RockCrusher","Mines rock","[Rock Crusher]: Enables rock mining","fx_rc"),Screwing:new E_("Screwing","Unscrews the sewer portal covers","[Screwing]: Opens sewer gates","fx_sc"),WallCrusher:new E_("WallCrusher","Tears down weak walls","[Wall Crusher]: Enables weak wall destruction","fx_wc"),WaterImmunity:new E_("WaterImmunity","No damage taken from water","[Water Immunity]: Prevents water damage","fx_wi"),WaterShield:new E_("WaterShield","Reduces damage taken from water","[Water Shield]: Reduces water damage","fx_ws")},entities:{movableboulder:new L_("Boulder","A movable rock","o",2),movablebox:new L_("Box","A movable box","x",2),Spirit:new L_("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new L_("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new L_("WorkBot","Basic factory worker","B"),Cleaner:new L_("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new L_("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new L_("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new L_("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new L_("Graffiti","Writing on the wall","zy",2),Valkyrie:new L_("Valkyrie","Airbourne war logistics","V",160),Pioneer:new L_("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new L_("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new h_("Critters","Small pests","cyberyellow",new Set,new Set(["*"])),Drifters:new h_("Drifters","Bots disconnected from a mothership/overmind","cybergreen",new Set,new Set(["Guardians","Workers"])),Enraged:new h_("Enraged","Always hostile faction","cybermagenta",new Set,new Set(["*"])),Spirits:new h_("Spirits","Default player faction","white",new Set,new Set),Pyrates:new h_("Pyrates","Default enemy faction","cybermagenta",new Set,new Set(["*"])),Guardians:new h_("Guardians","Bot station guardians","cybercyan",new Set,new Set(["Workers"])),Workers:new h_("Workers","Bot station workers","white",new Set,new Set(["Guardians"]))},items:{battery:new U_("Battery","Increases maximum energy","b","cyberyellow",10),chest:new U_("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new U_("Energy","Energy pack","e","cyberyellow",10),gold:new U_("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new U_("Goo","A minor matter source","goo","gray",0,1),junk:new U_("Junk","Broken bot","%","gray",0,1),matter:new U_("Matter","A pile of stuff","m","gray",0,100),broom:new U_("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),cheat:new U_("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","RockCrusher","Screwing","WallCrusher","WaterShield"]),hammer:new U_("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["WallCrusher"]),pickaxe:new U_("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["RockCrusher"]),ratbite:new U_("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["WaterImmunity"]),shocker:new U_("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new U_("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["WaterShield"]),upgradeBioAbsorber:new U_("Bio Absorber Upgrade","Grants [BioAbsorber] effect","iu_ba","cyberyellow",0,0,0,0,0,["BioAbsorber"]),upgradeRecuperation:new U_("Recuperation Upgrade","Grants [Recuperation] effect","iu_cu","cyberyellow",0,0,0,0,0,["Recuperation"]),wrench:new U_("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:new n("void","Just nothing here","","."),voidtrue:new n("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new n("voidhidden","Looks like a wall, but isn't!","",".#"),water:new n("water","Rust and other dangers await","Water","~",{isWater:!0,energyDelta:-2}),watersewage:new n("watersewage","Rust, goo and other dangers await","Sewage Water","~~",{isWater:!0,energyDelta:-4}),drain:new n("drain","Drains gold, matter and some of your energy","Drain","*",{energyDelta:-5}),rock:new n("rock","Hidden treasures may await","Rock","'",{isBlocking:!0}),tree:new n("tree","Lots of trees make a forest","Tree","t"),wall:new n("wall","A strong wall","","#",{isBlocking:!0}),wallstatueaerobot:new n("wallstatueaerobot","A small statue looking like an AeroBot","","sa",{isBlocking:!0}),wallstatuecleaner:new n("wallstatuecleaner","A small statue looking like a Cleaner","","sc",{isBlocking:!0}),wallstatuepioneer:new n("wallstatuepioneer","A small statue looking like a Pioneer","","sp",{isBlocking:!0}),wallstatueworkbot:new n("wallstatueworkbot","A small statue looking like a WorkBot","","sb",{isBlocking:!0}),wallweak:new n("wallweak","A weakened wall","Weak Wall","+",{isBlocking:!0}),chargepad:new n("chargepad","Recharges energy and health","Chargepad","=",{energyDelta:2}),movenorth:new n("movenorth","Moves you north","","^^"),moveeast:new n("moveeast","Moves you east","",">>"),movesouth:new n("movesouth","Moves you south","","vv"),movewest:new n("movewest","Moves you west","","<<"),portal:new n("portal","Gateway to another map","Portal","O"),portalclosed:new n("portalclosed","Closed gateway to another map","Closed Portal","Oc",{isBlocking:!0}),portalhidden:new n("portalhidden","Hidden gateway to another map","","Oh"),portallauncher:new n("portallauncher","Launches into space","Launch to Space","Ol"),portalsewers:new n("portalsewers","Needs some tool to open","Sewer Gate","#~",{isBlocking:!0}),portalstartworkbot:new n("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB"),portalstartaerobot:new n("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA"),"_portalstart?":new n("_portalstart?","Not unlocked, yet!","?","O?"),spacerock:new n("spacerock","Mountains as seen from space, non-blocking!","","'s",{isSpace:!0}),spacetree:new n("spacetree","Forest as seen from space","","ts",{isSpace:!0}),spacewater:new n("spacewater","Water as seen from space, not dangerous!","","~s",{isSpace:!0}),spacevoid:new n("spacevoid","Void/ground as seen from space","",".s",{isSpace:!0}),spacevoidstarwhite:new n("spacevoidstarwhite","Space with a white background star","",".f"),spacevoidstaryellow:new n("spacevoidstaryellow","Space with a yellow background star","",".y"),star:new n("star","It's hot, really hot!","Star","§",{energyDelta:-100}),terminal:new n("terminal","A computer terminal","Terminal","$")},uitexts:{}};function M0(_,Q){return Object.values(_.effects[Q])}function M_(_,Q,K){return!!_.effects[Q]&&Object.hasOwn(_.effects[Q],K.name)}function R0(_){return _}function b0(_,Q){if(Q.oldEquippedItem){let K=Q.oldEquippedItem;for(let z of K.effects){let L=F.effects[z];if(!!_.effects[Q.entityId][L.name]&&_.effects[Q.entityId][L.name].source===K)delete _.effects[Q.entityId][L.name]}}if(Q.newEquippedItem){let K=Q.newEquippedItem;for(let z of K.effects){let L=F.effects[z];_.effects[Q.entityId][L.name]={type:L,source:K}}}return _}function C0(_,Q){let K=Q.type;for(let z of K.effects)_.effects[Q.entityId][z]={type:F.effects[z]};return _}function t_(_,Q){let K=i_(_),z=i_(Q);if(K===void 0||z===void 0)return 0;if(K===z)return 1;else if(K.friendly.has(z.name)||z.friendly.has(K.name))return 1;else if(K.hostile.has(z.name)||z.hostile.has(K.name))return 2;else if(K.friendly.has("*")||z.friendly.has("*"))return 1;else if(K.hostile.has("*")||z.hostile.has("*"))return 2;return 0}function i_(_){return((_||{}).options||{}).faction||void 0}function B1(_,Q){return _.options.faction=Q,_}function O0(_){if(Object.hasOwn(F.dialogs,_))return F.dialogs[_];return`FIXME: ${_} needs localization!`}var C6=typeof window<"u"?window.innerWidth:0,O6=typeof window<"u"?window.innerHeight:0;var r={cameraWidth:Math.floor(C6/16),cameraHeight:Math.floor(O6/16),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:16,highlightFriendEnemy:!0,showUI:!0,showTooltip:!0,showEnergy:1,uiEffectsMaxDisplaySize:8,zoom:1};var R_={width:Math.floor(r.cameraWidth*(1/r.zoom)),height:Math.floor(r.cameraHeight*(1/r.zoom)),bg:"transparent",fontSize:Math.floor(r.fontSize*r.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function X_(_,Q){return _.chatLog.push(Q),_.chatLog=_.chatLog.slice(-r.chatLogMaxSize),_}function k_(_,Q,K,z,L=0,D=0,j={}){let M={id:Q,interactions:0,options:j},b={mapId:z,x:L,y:D};_.components.position[Q]=b;let k={current:10,max:10};_.components.energy[Q]=k;let f={gold:0,matter:0};return _.components.currency[Q]=f,_=j1(_,M,K),_.entities[M.id]=M,_}function F1(_,Q){let K=_.components.position[Q];if(_.entities[Q]=void 0,delete _.entities[Q],K)delete _.components.position[Q];return delete _.components.energy[Q],delete _.components.currency[Q],delete _.components.inventory[Q],_.effects[Q]=void 0,delete _.effects[Q],_}function e_(_,Q){let K=[];for(let z in _.entities){let L=_.components.position[z];if(L&&L.mapId===Q)K.push(_.entities[z])}return K}function P1(_,Q,K,z){for(let L in _.entities){let D=_.components.position[L];if(D&&D.mapId===Q&&D.x===K&&D.y===z)return _.entities[L]}return null}function j1(_,Q,K){_.components.type[Q.id]={type:K};let z=_.components.energy[Q.id];if(z)z.current=K.energyMax,z.max=K.energyMax;let L=_.components.currency[Q.id];if(L)L.gold=0,L.matter=0;if(!b_(_,Q.id)){let D={tool:null};_.components.inventory[Q.id]=D}return _.effects[Q.id]={},_}function E0(_,Q,K){if(Q===K)return _;let z=t_(Q,K);if(z===1||e1(_,K.id)){if(K.options.dialog){let L=_.components.type[K.id]?.type,D=K?.options?.name?K.options.name:L.name;_=X_(_,D+": "+O0(K.options.dialog)),K.interactions++}}else if(z===2){let L=Q.id,D=K.id;_._combatQueue.push({entityId:L,otherEntityId:D})}if(K.interactions>=3&&K.options?.ai===F.ais.interactenrage)B1(K,F.factions.Enraged);return _}function b_(_,Q){let K=_.components.type[Q]?.type;return K===F.entities.movableboulder||K===F.entities.movablebox}function e1(_,Q){let K=_.components.type[Q]?.type;return K===F.entities.Graffiticyan||K===F.entities.Graffitimagenta||K===F.entities.Graffitiyellow}function M1(_,Q){let K={A:F.actions.Wait,B:F.actions.Wait},z=_.components.energy[Q.id];if(!!_.lastSpacePositionByEntity[Q.id]&&z.current>Math.abs(F.actions.Launch.energyDelta))K.A=F.actions.Launch;let L=_.components.position[Q.id],j=_.maps[L.mapId].getTile(L.x,L.y);if(!!j.options.mapId&&"x"in j.options&&"y"in j.options)K.A=F.actions.Enter;return K}function _1(_,Q,K){let z=_._eventSubscribers[Q];if(z)for(let L=0;L<z.length;L++){let D=z[L];_=D(_,K)}return _}function w1(_,Q,K){if(Q in _._eventSubscribers);else _._eventSubscribers[Q]=[];return _._eventSubscribers[Q].push(K),_}function X1(_,Q,K){let L={id:_0(K),energy:Q.energyDelta,gold:Q.gold,matter:Q.matter};return _.items[L.id]=L,_.components.position[L.id]=K,_.components.type[L.id]={type:Q},_}function A0(_,Q,K){let z=F.items.junk,D={id:_0(K),energy:z.energyDelta,gold:z.gold,matter:Q};return _.items[D.id]=D,_.components.position[D.id]=K,_.components.type[D.id]={type:z},_}function Y1(_,Q,K,z,L){let j={id:_0(K),energy:Q.energyDelta,gold:z,matter:L};return _.items[j.id]=j,_.components.position[j.id]=K,_.components.type[j.id]={type:Q},_}function _0(_){return"item,"+_.mapId+","+_.x+","+_.y}function w0(_,Q){if(!_.items[Q])return _;return _.items[Q]=void 0,delete _.items[Q],delete _.components.position[Q],delete _.components.type[Q],_}function R1(_,Q){let K=[];for(let z in _.items){let L=_.components.position[z];if(L&&L.mapId===Q)K.push(_.items[z])}return K}function b1(_,Q){for(let K in _.items){let z=_.components.position[K];if(z&&z.mapId===Q.mapId&&z.x===Q.x&&z.y===Q.y)return _.items[K]}return null}function C1(_,Q){return _.components.inventory[Q]?.tool}function N0(_,Q,K){let z=_.components.type[K.id]?.type;if(b_(_,Q.id))return _;if(!E6(_,Q,K))return _;if(v6(_,K))_=Z0(_,Q.id,z);else{if(z===F.items.battery){let j=_.components.energy[Q.id];if(j)j.max+=K.energy}if(_._energyQueue.push({entityId:Q.id,energyDelta:K.energy}),Q.id.startsWith("player"))_=X_(_,`Picked up ${z.name}.`);let D={entityId:Q.id,type:z};_=_1(_,2,D)}let L=_.components.currency[Q.id];if(L)L.gold+=K.gold,L.matter+=K.matter;return w0(_,K.id),_}function Z0(_,Q,K){let z=_.components.inventory[Q]?.tool,L=null;if(K){if(L=K,_.components.inventory[Q].tool=L,Q.startsWith("player"))_=X_(_,`Equipped ${K.name}.`)}else if(z){let j=z;if(_.components.inventory[Q].tool=L,Q.startsWith("player"))_=X_(_,`Unequipped ${j}.`)}let D={entityId:Q,oldEquippedItem:z,newEquippedItem:L};return _=_1(_,1,D),_}function v6(_,Q){let K=_.components.type[Q.id]?.type;if(K)return K.energyCost<0;return!1}function E6(_,Q,K){let z=_.components.currency[Q.id];if(!z)return!1;return z.gold+K.gold>=0&&z.matter+K.matter>=0}function A_(_,Q){return _.components.position[Q.id]}function I0(_,Q,K){switch(K){case F.commands.N:_=D_(_,Q,0,-1);break;case F.commands.W:_=D_(_,Q,-1,0);break;case F.commands.S:_=D_(_,Q,0,1);break;case F.commands.E:_=D_(_,Q,1,0);break;case F.commands.A:_=S0(_,Q,F.commands.A);break;case F.commands.B:_=S0(_,Q,F.commands.B);break;default:}return _}function D_(_,Q,K,z,L=0){let D=A_(_,Q),j=_.maps[D.mapId],M=P1(_,j.id,D.x+K,D.y+z),b=_.components.inventory[Q.id];if(M)if(b_(_,M.id)){if(!b_(_,Q.id)&&L<1)_=D_(_,M,K,z,L++),_=D_(_,Q,K,z,L++)}else _=E0(_,Q,M);else if(A6(_,j,Q,K,z))_=f0(_,j,Q,K,z),_._energyQueue.push({entityId:Q.id,energyDelta:-1*L});else if(N6(_,j,Q,K,z)){let k=j.setTile(D.x+K,D.y+z,F.tiles.void),f={mapId:j.id,x:D.x+K,y:D.y+z};if(k.type===F.tiles.rock){let S=_.rng.getPercentage();if(S<=1)_=X1(_,F.items.matter,f);else if(S<=34)_=X1(_,F.items.junk,f)}_._energyQueue.push({entityId:Q.id,energyDelta:u0(_,Q,b?.tool)})}else if(u6(_,j,Q,K,z))_=f0(_,j,Q,K,z),_._energyQueue.push({entityId:Q.id,energyDelta:u0(_,Q,b?.tool)});return _}function u0(_,Q,K){let z=K.energyCost;if(M_(_,Q.id,F.effects.Recuperation))z=Math.min(-1,z+1);return z}function S0(_,Q,K){let L=M1(_,Q)[K.key],D=A_(_,Q),M=_.maps[D.mapId].getTile(D.x,D.y);switch(L){case F.actions.Enter:_=g0(_,Q,M);break;case F.actions.Launch:_=k6(_,Q,M);case F.actions.Wait:break;default:}return _}function f0(_,Q,K,z,L){let D=A_(_,K);D.x+=z,D.y+=L;let j=b1(_,D);if(j)_=N0(_,K,j);let M=Q.getTile(D.x,D.y);if(M.type.name.startsWith("portal"))_=g0(_,K,M);if(M.type.name.startsWith("move"))switch(M.type.name){case"movenorth":_=D_(_,K,0,-1);break;case"moveeast":_=D_(_,K,1,0);break;case"movesouth":_=D_(_,K,0,1);break;case"movewest":_=D_(_,K,-1,0);break;default:}return _}function g0(_,Q,K){let z=A_(_,Q);if(Q.id.startsWith("player"))_.currentMapId=K.options.mapId;if(K.type.isSpace)_.lastSpacePositionByEntity[Q.id]={mapId:z.mapId,x:z.x,y:z.y};else _.lastSpacePositionByEntity[Q.id]=void 0,delete _.lastSpacePositionByEntity[Q.id];let L={entityId:Q.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:K.type,newMapId:K.options.mapId,newX:K.options.x,newY:K.options.y};return z.mapId=K.options.mapId,z.x=K.options.x,z.y=K.options.y,_=_1(_,0,L),_}function k6(_,Q,K){let z=A_(_,Q);if(_.lastSpacePositionByEntity[Q.id]){if(Q.id.startsWith("player"))_.currentMapId=_.lastSpacePositionByEntity[Q.id].mapId;let L={entityId:Q.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:K.type,newMapId:_.lastSpacePositionByEntity[Q.id].mapId,newX:_.lastSpacePositionByEntity[Q.id].x,newY:_.lastSpacePositionByEntity[Q.id].y};z.mapId=L.newMapId,z.x=L.newX,z.y=L.newY,_._energyQueue.push({entityId:Q.id,energyDelta:F.actions.Launch.energyDelta}),_.lastSpacePositionByEntity[Q.id]=void 0,delete _.lastSpacePositionByEntity[Q.id],_=_1(_,0,L)}return _}function T0(_){for(let Q in _.entities){let K=_.entities[Q],z=A_(_,K),D=_.maps[z.mapId].getTile(z.x,z.y),j=D.type.energyDelta;if(D.type===F.tiles.chargepad&&M_(_,Q,F.effects.Recharger))j*=2;else if(D.type===F.tiles.tree&&M_(_,Q,F.effects.BioAbsorber))j=1;else if(D.type.isWater&&M_(_,Q,F.effects.WaterImmunity))j=0;else if(D.type.isWater&&M_(_,Q,F.effects.WaterShield))j/=2;else if(D.type===F.tiles.drain){let M=_.components.currency[Q];if(M){let b=Math.min(M.gold,F.constants.DRAIN_GOLD_COST),k=Math.min(M.matter,F.constants.DRAIN_MATTER_COST);M.gold-=b,M.matter-=k}}if(j!==0)_._energyQueue.push({entityId:Q,energyDelta:j})}return _}function h0(_,Q){let K=_.entities[Q.entityId];switch(Q.oldTileType){case F.tiles.portalstartaerobot:_=j1(_,K,F.entities.AeroBot),B1(K,F.factions.Workers),_=X_(_,`Booting up as an ${F.entities.AeroBot.name}...`);break;case F.tiles.portalstartworkbot:_=j1(_,K,F.entities.WorkBot),B1(K,F.factions.Workers),_=X_(_,`Booting up as a ${F.entities.WorkBot.name}...`);break;default:}return _}function A6(_,Q,K,z,L){let D=A_(_,K),j=D.x+z,M=D.y+L,b=Q.getTile(j,M).type;return j>=0&&j<Q.widthTiles&&M>=0&&M<Q.heightTiles&&!b.isBlocking}function N6(_,Q,K,z,L){let D=A_(_,K),j=D.x+z,M=D.y+L,b=Q.getTile(j,M).type;return M_(_,K.id,F.effects.WallCrusher)&&b===F.tiles.wallweak||M_(_,K.id,F.effects.RockCrusher)&&b===F.tiles.rock}function u6(_,Q,K,z,L){let D=A_(_,K),j=D.x+z,M=D.y+L,b=Q.getTile(j,M).type;return M_(_,K.id,F.effects.Screwing)&&b===F.tiles.portalsewers}var N_={bot_bar:`!
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
#(##################`,bot_prison:`!
!!id bot_prison
!!size 48 34
!!spawn 18 11 Cleaner faction=Guardians ai=aggrorange
!!spawn 17 2 Cleaner faction=Guardians ai=aggrorange
!!spawn 24 5 Cleaner faction=Guardians ai=aggrorange
!!spawn 29 24 Cleaner faction=Guardians ai=aggrorangeshort
!!spawn 34 22 AeroBot faction=Workers dialog=bot_prison_aerobot
!!spawn 9 22 WorkBot faction=Workers dialog=bot_prison_workbot
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
##############################z#`,bot_station:`!
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
################################################################################`,playground:`!
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
!!~ water
!!D portal gen:dungeon=1337 31 31
!!V portal overworld=42 0 0
!!O portal botmos_hull_selection 1 19
!!Q portal solarsystem=1337 448 448
!!P portal solarsystem=1337 30 17
#O##################
#=.................#
#...........#D..Q#.#
#..................#
#..................#
#...........#V..P#.#
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
__#+___`};/*!
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
 */var S6=function(_){var Q={};function K(z){if(Q[z])return Q[z].exports;var L=Q[z]={i:z,l:!1,exports:{}};return _[z].call(L.exports,L,L.exports,K),L.l=!0,L.exports}return K.m=_,K.c=Q,K.d=function(z,L,D){K.o(z,L)||Object.defineProperty(z,L,{enumerable:!0,get:D})},K.r=function(z){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(z,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(z,"__esModule",{value:!0})},K.t=function(z,L){if(1&L&&(z=K(z)),8&L)return z;if(4&L&&typeof z=="object"&&z&&z.__esModule)return z;var D=Object.create(null);if(K.r(D),Object.defineProperty(D,"default",{enumerable:!0,value:z}),2&L&&typeof z!="string")for(var j in z)K.d(D,j,function(M){return z[M]}.bind(null,j));return D},K.n=function(z){var L=z&&z.__esModule?function(){return z.default}:function(){return z};return K.d(L,"a",L),L},K.o=function(z,L){return Object.prototype.hasOwnProperty.call(z,L)},K.p="/bin/",K(K.s=0)}([function(_,Q,K){var z={},L=K(1),D=K(2),j=K(3);_.exports=z;var M=1;z.js=function(){var b,k,f,S=!1,h={},m={},l={},d={},__=!0,z_={},J_=[],B_=Number.MAX_VALUE,K_=!1;this.setAcceptableTiles=function(u){u instanceof Array?f=u:!isNaN(parseFloat(u))&&isFinite(u)&&(f=[u])},this.enableSync=function(){S=!0},this.disableSync=function(){S=!1},this.enableDiagonals=function(){K_=!0},this.disableDiagonals=function(){K_=!1},this.setGrid=function(u){b=u;for(var A=0;A<b.length;A++)for(var v=0;v<b[0].length;v++)m[b[A][v]]||(m[b[A][v]]=1)},this.setTileCost=function(u,A){m[u]=A},this.setAdditionalPointCost=function(u,A,v){l[A]===void 0&&(l[A]={}),l[A][u]=v},this.removeAdditionalPointCost=function(u,A){l[A]!==void 0&&delete l[A][u]},this.removeAllAdditionalPointCosts=function(){l={}},this.setDirectionalCondition=function(u,A,v){d[A]===void 0&&(d[A]={}),d[A][u]=v},this.removeAllDirectionalConditions=function(){d={}},this.setIterationsPerCalculation=function(u){B_=u},this.avoidAdditionalPoint=function(u,A){h[A]===void 0&&(h[A]={}),h[A][u]=1},this.stopAvoidingAdditionalPoint=function(u,A){h[A]!==void 0&&delete h[A][u]},this.enableCornerCutting=function(){__=!0},this.disableCornerCutting=function(){__=!1},this.stopAvoidingAllAdditionalPoints=function(){h={}},this.findPath=function(u,A,v,s,t){var w_=function(I_){S?t(I_):setTimeout(function(){t(I_)})};if(f===void 0)throw Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(b===void 0)throw Error("You can't set a path without first calling setGrid() on EasyStar.");if(u<0||A<0||v<0||s<0||u>b[0].length-1||A>b.length-1||v>b[0].length-1||s>b.length-1)throw Error("Your start or end point is outside the scope of your grid.");if(u!==v||A!==s){for(var H_=b[s][v],q_=!1,O_=0;O_<f.length;O_++)if(H_===f[O_]){q_=!0;break}if(q_!==!1){var Y_=new L;Y_.openList=new j(function(I_,s_){return I_.bestGuessDistance()-s_.bestGuessDistance()}),Y_.isDoneCalculating=!1,Y_.nodeHash={},Y_.startX=u,Y_.startY=A,Y_.endX=v,Y_.endY=s,Y_.callback=w_,Y_.openList.push(i(Y_,Y_.startX,Y_.startY,null,1));var V1=M++;return z_[V1]=Y_,J_.push(V1),V1}w_(null)}else w_([])},this.cancelPath=function(u){return u in z_&&(delete z_[u],!0)},this.calculate=function(){if(J_.length!==0&&b!==void 0&&f!==void 0)for(k=0;k<B_;k++){if(J_.length===0)return;S&&(k=0);var u=J_[0],A=z_[u];if(A!==void 0)if(A.openList.size()!==0){var v=A.openList.pop();if(A.endX!==v.x||A.endY!==v.y)v.list=0,v.y>0&&E(A,v,0,-1,1*c(v.x,v.y-1)),v.x<b[0].length-1&&E(A,v,1,0,1*c(v.x+1,v.y)),v.y<b.length-1&&E(A,v,0,1,1*c(v.x,v.y+1)),v.x>0&&E(A,v,-1,0,1*c(v.x-1,v.y)),K_&&(v.x>0&&v.y>0&&(__||I(b,f,v.x,v.y-1,v)&&I(b,f,v.x-1,v.y,v))&&E(A,v,-1,-1,1.4*c(v.x-1,v.y-1)),v.x<b[0].length-1&&v.y<b.length-1&&(__||I(b,f,v.x,v.y+1,v)&&I(b,f,v.x+1,v.y,v))&&E(A,v,1,1,1.4*c(v.x+1,v.y+1)),v.x<b[0].length-1&&v.y>0&&(__||I(b,f,v.x,v.y-1,v)&&I(b,f,v.x+1,v.y,v))&&E(A,v,1,-1,1.4*c(v.x+1,v.y-1)),v.x>0&&v.y<b.length-1&&(__||I(b,f,v.x,v.y+1,v)&&I(b,f,v.x-1,v.y,v))&&E(A,v,-1,1,1.4*c(v.x-1,v.y+1)));else{var s=[];s.push({x:v.x,y:v.y});for(var t=v.parent;t!=null;)s.push({x:t.x,y:t.y}),t=t.parent;s.reverse();var w_=s;A.callback(w_),delete z_[u],J_.shift()}}else A.callback(null),delete z_[u],J_.shift();else J_.shift()}};var E=function(u,A,v,s,t){var w_=A.x+v,H_=A.y+s;if((h[H_]===void 0||h[H_][w_]===void 0)&&I(b,f,w_,H_,A)){var q_=i(u,w_,H_,A,t);q_.list===void 0?(q_.list=1,u.openList.push(q_)):A.costSoFar+t<q_.costSoFar&&(q_.costSoFar=A.costSoFar+t,q_.parent=A,u.openList.updateItem(q_))}},I=function(u,A,v,s,t){var w_=d[s]&&d[s][v];if(w_){var H_=T(t.x-v,t.y-s);if(!function(){for(var O_=0;O_<w_.length;O_++)if(w_[O_]===H_)return!0;return!1}())return!1}for(var q_=0;q_<A.length;q_++)if(u[s][v]===A[q_])return!0;return!1},T=function(u,A){if(u===0&&A===-1)return z.TOP;if(u===1&&A===-1)return z.TOP_RIGHT;if(u===1&&A===0)return z.RIGHT;if(u===1&&A===1)return z.BOTTOM_RIGHT;if(u===0&&A===1)return z.BOTTOM;if(u===-1&&A===1)return z.BOTTOM_LEFT;if(u===-1&&A===0)return z.LEFT;if(u===-1&&A===-1)return z.TOP_LEFT;throw Error("These differences are not valid: "+u+", "+A)},c=function(u,A){return l[A]&&l[A][u]||m[b[A][u]]},i=function(u,A,v,s,t){if(u.nodeHash[v]!==void 0){if(u.nodeHash[v][A]!==void 0)return u.nodeHash[v][A]}else u.nodeHash[v]={};var w_=o(A,v,u.endX,u.endY);if(s!==null)var H_=s.costSoFar+t;else H_=0;var q_=new D(s,A,v,H_,w_);return u.nodeHash[v][A]=q_,q_},o=function(u,A,v,s){var t,w_;return K_?(t=Math.abs(u-v))<(w_=Math.abs(A-s))?1.4*t+w_:1.4*w_+t:(t=Math.abs(u-v))+(w_=Math.abs(A-s))}},z.TOP="TOP",z.TOP_RIGHT="TOP_RIGHT",z.RIGHT="RIGHT",z.BOTTOM_RIGHT="BOTTOM_RIGHT",z.BOTTOM="BOTTOM",z.BOTTOM_LEFT="BOTTOM_LEFT",z.LEFT="LEFT",z.TOP_LEFT="TOP_LEFT"},function(_,Q){_.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(_,Q){_.exports=function(K,z,L,D,j){this.parent=K,this.x=z,this.y=L,this.costSoFar=D,this.simpleDistanceToTarget=j,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(_,Q,K){_.exports=K(4)},function(_,Q,K){var z,L,D;(function(){var j,M,b,k,f,S,h,m,l,d,__,z_,J_,B_,K_;b=Math.floor,d=Math.min,M=function(E,I){return E<I?-1:E>I?1:0},l=function(E,I,T,c,i){var o;if(T==null&&(T=0),i==null&&(i=M),T<0)throw Error("lo must be non-negative");for(c==null&&(c=E.length);T<c;)i(I,E[o=b((T+c)/2)])<0?c=o:T=o+1;return[].splice.apply(E,[T,T-T].concat(I)),I},S=function(E,I,T){return T==null&&(T=M),E.push(I),B_(E,0,E.length-1,T)},f=function(E,I){var T,c;return I==null&&(I=M),T=E.pop(),E.length?(c=E[0],E[0]=T,K_(E,0,I)):c=T,c},m=function(E,I,T){var c;return T==null&&(T=M),c=E[0],E[0]=I,K_(E,0,T),c},h=function(E,I,T){var c;return T==null&&(T=M),E.length&&T(E[0],I)<0&&(I=(c=[E[0],I])[0],E[0]=c[1],K_(E,0,T)),I},k=function(E,I){var T,c,i,o,u,A;for(I==null&&(I=M),u=[],c=0,i=(o=function(){A=[];for(var v=0,s=b(E.length/2);0<=s?v<s:v>s;0<=s?v++:v--)A.push(v);return A}.apply(this).reverse()).length;c<i;c++)T=o[c],u.push(K_(E,T,I));return u},J_=function(E,I,T){var c;if(T==null&&(T=M),(c=E.indexOf(I))!==-1)return B_(E,0,c,T),K_(E,c,T)},__=function(E,I,T){var c,i,o,u,A;if(T==null&&(T=M),!(i=E.slice(0,I)).length)return i;for(k(i,T),o=0,u=(A=E.slice(I)).length;o<u;o++)c=A[o],h(i,c,T);return i.sort(T).reverse()},z_=function(E,I,T){var c,i,o,u,A,v,s,t,w_;if(T==null&&(T=M),10*I<=E.length){if(!(o=E.slice(0,I).sort(T)).length)return o;for(i=o[o.length-1],u=0,v=(s=E.slice(I)).length;u<v;u++)T(c=s[u],i)<0&&(l(o,c,0,null,T),o.pop(),i=o[o.length-1]);return o}for(k(E,T),w_=[],A=0,t=d(I,E.length);0<=t?A<t:A>t;0<=t?++A:--A)w_.push(f(E,T));return w_},B_=function(E,I,T,c){var i,o,u;for(c==null&&(c=M),i=E[T];T>I&&c(i,o=E[u=T-1>>1])<0;)E[T]=o,T=u;return E[T]=i},K_=function(E,I,T){var c,i,o,u,A;for(T==null&&(T=M),i=E.length,A=I,o=E[I],c=2*I+1;c<i;)(u=c+1)<i&&!(T(E[c],E[u])<0)&&(c=u),E[I]=E[c],c=2*(I=c)+1;return E[I]=o,B_(E,A,I,T)},j=function(){function E(I){this.cmp=I!=null?I:M,this.nodes=[]}return E.push=S,E.pop=f,E.replace=m,E.pushpop=h,E.heapify=k,E.updateItem=J_,E.nlargest=__,E.nsmallest=z_,E.prototype.push=function(I){return S(this.nodes,I,this.cmp)},E.prototype.pop=function(){return f(this.nodes,this.cmp)},E.prototype.peek=function(){return this.nodes[0]},E.prototype.contains=function(I){return this.nodes.indexOf(I)!==-1},E.prototype.replace=function(I){return m(this.nodes,I,this.cmp)},E.prototype.pushpop=function(I){return h(this.nodes,I,this.cmp)},E.prototype.heapify=function(){return k(this.nodes,this.cmp)},E.prototype.updateItem=function(I){return J_(this.nodes,I,this.cmp)},E.prototype.clear=function(){return this.nodes=[]},E.prototype.empty=function(){return this.nodes.length===0},E.prototype.size=function(){return this.nodes.length},E.prototype.clone=function(){var I;return(I=new E).nodes=this.nodes.slice(0),I},E.prototype.toArray=function(){return this.nodes.slice(0)},E.prototype.insert=E.prototype.push,E.prototype.top=E.prototype.peek,E.prototype.front=E.prototype.peek,E.prototype.has=E.prototype.contains,E.prototype.copy=E.prototype.clone,E}(),L=[],(D=typeof(z=function(){return j})=="function"?z.apply(Q,L):z)===void 0||(_.exports=D)}).call(this)}]);function x0(_,Q,K,z,L){let D=new S6.js;D.setGrid(_),D.setAcceptableTiles([0]),D.enableSync();let j=null;return D.findPath(Q,K,z,L,function(M){j=M}),D.calculate(),j}function F_(){return"player"}function m0(_,Q,K,z){return Math.abs(_-K)+Math.abs(Q-z)}function Z1(_){return[...Array(_).keys()]}class O1{width;height;data;constructor(_,Q,K){this.width=_;this.height=Q;this.data=Array(this.width*this.height).fill(K)}isValid(_,Q){return _>=0&&_<this.width&&Q>=0&&Q<this.height}get(_,Q){if(!this.isValid(_,Q))return null;return this.data[Q*this.width+_]}set(_,Q,K){if(!this.isValid(_,Q))return;this.data[Q*this.width+_]=K}}function l0(_){let Q=f6(_),K=_.entities[F_()],z=_.components.position[K.id];for(let L=0;L<Q.length;L++){let D=Q[L],j=_.entities[D];if(K===j)continue;let M=_._AIs[D],b=_.components.position[j.id];if(M._pathCache.playerX!==z.x||M._pathCache.playerY!==z.y||M._pathCache.entityX!==b.x||M._pathCache.entityY!==b.y)M._pathCache={};let k=m0(z.x,z.y,b.x,b.y);if(t_(K,j)===2&&k<=M.aggroRange)if(M._pathCache.path)M.path=M._pathCache.path;else{let f=_.maps[_.currentMapId].asMovementMap(),S=x0(f,b.x,b.y,z.x,z.y);if(S){if(S=S.slice(1),S.length>k)S=null}M.path=S,M._pathCache={playerX:z.x,playerY:z.y,entityX:b.x,entityY:b.y,path:S}}}for(let L=0;L<Q.length;L++){let D=Q[L],j=_.entities[D],M=_._AIs[D];if(M.path){let b=M.path[0],k=_.components.position[j.id],f=b.x-k.x,S=b.y-k.y;_=D_(_,j,f,S)}}return _}function f6(_){let Q=e_(_,_.currentMapId),K=[];for(let z=0;z<Q.length;z++){let L=Q[z];if(L.options.ai)K.push(L.id)}return K}function c0(_,Q,K){let z=_.components.position[Q],L=8;switch(K){case F.ais.aggrorange:L=8;break;case F.ais.aggrorangeshort:L=2;break;case F.ais.guardian:L=1;break;case F.ais.interactenrage:L=2;break;default:}return _._AIs[Q]={entityId:Q,type:K,aggroRange:L,startMap:z.mapId,startX:z.x,startY:z.y,path:null,_pathCache:{}},_}function v1(_,Q){return _._AIs[Q]=void 0,delete _._AIs[Q],_}function y0(_){let Q=void 0;while(typeof(Q=_._despawnQueue.shift())<"u")_=F1(_,Q),_=v1(_,Q);return _}function d0(_){return _}class u_{mapId;x;y;entityOrItemName;options;constructor(_,Q,K,z,L={}){this.mapId=_,this.x=Q,this.y=K,this.entityOrItemName=z,this.options=L}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function x_(_,Q){if(I6(Q.entityOrItemName)){let K=Q.options;if(Object.hasOwn(K,"ai"))K.ai=F.ais[K.ai];if(Object.hasOwn(K,"faction"))K.faction=F.factions[K.faction];let z=Q.generateId();if(_=k_(_,z,F.entities[Q.entityOrItemName],Q.mapId,Q.x,Q.y,K),Object.hasOwn(K,"equip")&&p0(K.equip))_=Z0(_,z,F.items[K.equip]);if(Object.hasOwn(K,"ai"))_=c0(_,z,K.ai)}else if(p0(Q.entityOrItemName)){let K={mapId:Q.mapId,x:Q.x,y:Q.y};_=X1(_,F.items[Q.entityOrItemName],K)}return _}function I6(_){return Object.hasOwn(F.entities,_)}function p0(_){return Object.hasOwn(F.items,_)}function C_(_,Q={}){return{type:_,options:Q}}function r0(_){for(let Q in N_){let K=p_(N_[Q]);if(!K.isSnippet()){_.maps[Q]=K;for(let z of K._spawnCommands)_=x_(_,z);K._spawnCommands=[]}}return _}function n0(_,Q){let K=R1(_,Q);for(let L=0;L<K.length;L++){let D=K[L];_=w0(_,D.id)}let z=e_(_,Q);for(let L=0;L<z.length;L++){let D=z[L];_=F1(_,D.id),_=v1(_,D.id)}return _.maps[Q]=void 0,delete _.maps[Q],_}class W_{id;widthTiles;heightTiles;seed;_tiles;_initialTiles;entropy;_cacheMovementMap;_spawnCommands;constructor(_,Q,K,z=[]){if(this.id=_,this.widthTiles=Q,this.heightTiles=K,this.seed=null,this._tiles=new O1(Q,K,C_(F.tiles.voidtrue)),this._initialTiles=new O1(Q,K,C_(F.tiles.voidtrue)),z.length>0)for(let L=0;L<K;L++)for(let D=0;D<Q;D++){let j=z[L*Q+D];this._tiles.set(D,L,j),this._initialTiles.set(D,L,JSON.parse(JSON.stringify(j)))}this.entropy=0,this._cacheMovementMap=null,this._spawnCommands=[]}getTile(_,Q){let K=this._tiles.get(_,Q);if(K)return K;return{}}setTile(_,Q,K,z={}){this._cacheMovementMap=null;let L=this._tiles.get(_,Q);return this._tiles.set(_,Q,C_(K,z)),L}resetEntropy(){for(let _=0;_<this.heightTiles;_++)for(let Q=0;Q<this.widthTiles;Q++){let K=this._tiles.get(Q,_);if(K)this._initialTiles.set(Q,_,JSON.parse(JSON.stringify(K)))}this.entropy=0}pasteOnto(_,Q=0,K=0){for(let z=0;z<_.heightTiles;z++)for(let L=0;L<_.widthTiles;L++){let D=_.getTile(L,z);if(D.type!==F.tiles.voidtrue)this.setTile(L+Q,z+K,D.type,D.options)}return this}circular(){let _=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let Q=-_;Q<=_;Q++)for(let K=-_;K<=_;K++)if(K*K+Q*Q>=_*_)this.setTile(K+_-1,Q+_-1,F.tiles.voidtrue);return this}sample(_,Q){let K=Math.floor(this.widthTiles/_),z=Math.floor(this.heightTiles/Q),L=[];for(let D=0;D<Q;D++)for(let j=0;j<_;j++){let M={};for(let m=0;m<z;m++)for(let l=0;l<K;l++){let d=this.getTile(j*K+l,D*z+m);if(M[d.type.name])M[d.type.name]+=1;else M[d.type.name]=1}let b="",k=0;for(let[m,l]of Object.entries(M))if(l>k)b=m,k=l;let f="space"+b,S=F.tiles[f]||F.tiles.spacevoid,h={mapId:this.id,x:j*K,y:D*z};L.push(C_(S,h))}return new W_("__sampled_"+_+"_"+Q+"_"+this.id,_,Q,L)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let _=Array(this.heightTiles);for(let Q=0;Q<this.heightTiles;Q++){_[Q]=Array(this.widthTiles);for(let K=0;K<this.widthTiles;K++){let z=this._tiles.get(K,Q);if(_[Q][K]=0,z&&z.type.isBlocking)_[Q][K]=1}}return this._cacheMovementMap=_,_}isSnippet(){return this.id===void 0||this.id===null||this.id===""}static createEmptyMap(_,Q,K){let z=[];for(let D=0;D<_*Q;D++)z.push(C_(K));return new W_(null,_,Q,z)}}function p_(_){let Q=_.split(/\r?\n/),K=_[0],z="",L=0,D=0,j={},M=[],b=[];for(let f=0;f<Q.length;f++){let S=Q[f];if(S.startsWith(K)){if(S.startsWith(K+"!id"))z=S.slice(5);else if(S.startsWith(K+"!size")){let h=S.split(" ").slice(1);L=Number(h[0]),D=Number(h[1])}else if(S.startsWith(K+"!spawn")){let h=S.split(" ").slice(1),m={};if(h.length>3){let l=h.slice(3);for(let d of l){let __=d.split("=");m[__[0]]=__[1]}}M.push(new u_(z,Number(h[0]),Number(h[1]),h[2],m))}else if(S.startsWith(K+"!")){let h=S[2],m=S.slice(4);j[h]=m}}else for(let h=0;h<S.length;h++){let m=S[h],l=j[m];if(r.debug&&!l)console.log("DEBUG Broken map: "+z);let d=l.split(" "),__={};if(l.startsWith("portal ")||l.startsWith("portalhidden ")||l.startsWith("portalsewers ")||l.startsWith("portallauncher ")||l.startsWith("portalstart"))l=d[0],__.mapId=d[1],__.x=Number(d[2]),__.y=Number(d[3]);if(l.startsWith("wall ")&&d.length>=2)l="wall",__.sign=d[1];if(l.startsWith("terminal ")){if(l="terminal",d.length>=2)__.screen=d[1]}b.push(C_(F.tiles[l],__))}}let k=new W_(z,L,D,b);return k._spawnCommands=M,k}var a0=t1(k1(),1);class P_{seed;_rotRng;constructor(_=1337){this.seed=_,this._rotRng=a0.RNG.clone(),this._rotRng.setSeed(_)}getPercentage(){return this._rotRng.getPercentage()}getItem(_){return this._rotRng.getItem(_)}}function i0(_,Q=1337,K=64,z=4096){let L=W_.createEmptyMap(K,K,F.tiles.wall),D=new P_(Q),j=K/2-1,M={x:j,y:j};L.setTile(M.x,M.y,F.tiles.void);for(let b=0;b<z;b++){switch(D.getItem([0,1,2,3])){case 0:M=A1(M,0,-1,K);break;case 1:M=A1(M,1,0,K);break;case 2:M=A1(M,0,1,K);break;case 3:M=A1(M,-1,0,K);break}L.setTile(M.x,M.y,F.tiles.void)}return L.id=`gen:dungeon=${Q}`,_.maps[L.id]=L,_}function A1(_,Q,K,z){return{x:Math.max(0,Math.min(z-1,_.x+Q)),y:Math.max(0,Math.min(z-1,_.y+K))}}function t0(_,Q){if(Q?.newMapId?.startsWith("gen:dungeon")){let K=Q?.newMapId,z=Number(K?.split("=").at(-1));_=i0(_,z);let L=_.entities[Q.entityId];if(L.id.startsWith("player"))_.currentMapId=K;let D=_.components.position[L.id];D.mapId=K,D.x=Q.newX,D.y=Q.newY}return _}function e0(_,Q){if(Q.seed===1337)_=x_(_,new u_(Q.id,130,127,"Valkyrie",{faction:"Spirits"})),_=x_(_,new u_(Q.id,124,127,"Valkyrie",{faction:"Spirits"})),_=x_(_,new u_(Q.id,127,130,"trident"));else{let K=new P_(Q.seed);for(let z=0;z<Q.heightTiles;z++)for(let L=0;L<Q.widthTiles;L++){let D=Q.getTile(L,z);if(K.getPercentage()<=1&&(D.type===F.tiles.void||D.type===F.tiles.tree)){let j=K.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(j){case"Deviant":case"Pioneer":_=x_(_,new u_(Q.id,L,z,j,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":_=x_(_,new u_(Q.id,L,z,j));break}}}}return _}var N1=t1(k1(),1);var h6=1337,_w=55;function ww(_,Q=h6){N1.RNG.setSeed(Q);let K=new N1.Noise.Simplex,z=256,L=256,D=[];for(let b=0;b<L;b++)for(let k=0;k<z;k++){let f=K.get(k/_w,b/_w),S;if(f<=-0.5)S=F.tiles.water;else if(f<=0)S=F.tiles.void;else if(f<0.5)S=F.tiles.tree;else S=F.tiles.rock;D.push(C_(S))}let j="simplex="+Q,M=new W_(j,z,L,D);return M.seed=Q,_.maps[j]=M,_}var x6=1337;function Zw(_,Q=x6){let K=W_.createEmptyMap(1024,1024,F.tiles.void);K.id="solarsystem="+Q,_.maps[K.id]=K;let z=new P_(Q),L=new P_(Q),D=z.getItem([2,3,4,5,6,7,8,9,10,11,12]),j=128,M=512-j,b=Math.floor(M/D);K=m6(K,z);let k=W_.createEmptyMap(128,128,F.tiles.voidtrue);l6(k,63,63,62,F.tiles.star),c6(k,63,63,F.tiles.star),K.pasteOnto(k,448,448);for(let m=j;m<512;m+=b){let l=z.getItem([-1,1])*z.getItem(Z1(m)),d=z.getItem([-1,1])*Math.floor(Math.sqrt(m*m-l*l));l+=512,d+=512;let __=z.getItem([16,24,32]),z_=Math.floor(__/2)-1;_=ww(_,Q);let J_=_.maps["simplex="+Q],B_=N_.launcher;B_=B_.replace("!!O portallauncher space 0 0",`!!O portallauncher ${K.id} ${l} ${d}`);let K_=p_(B_),E=L.getItem(Z1(J_.widthTiles-K_.widthTiles)),I=L.getItem(Z1(J_.heightTiles-K_.heightTiles));J_.pasteOnto(K_,E,I),_=e0(_,J_);let T=J_.sample(__,__).circular();K.pasteOnto(T,l-(z_+1),d-(z_+1)),Q++}let f=N_.space_bot_station;f=f.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let S=p_(f);K.pasteOnto(S,583,398);let h=p_(N_.square_falcon);return K.pasteOnto(h,590,373),_}function m6(_,Q){for(let K=0;K<_.heightTiles;K++)for(let z=0;z<_.widthTiles;z++)if(Q.getPercentage()<=1)_.setTile(z,K,Q.getItem([F.tiles.spacevoidstarwhite,F.tiles.spacevoidstaryellow]));return _}function l6(_,Q,K,z,L){let D=1-z,j=1,M=-2*z,b=0,k=z;_.setTile(Q,K+z,L),_.setTile(Q,K-z,L),_.setTile(Q+z,K,L),_.setTile(Q-z,K,L);while(b<k){if(D>=0)k-=1,M+=2,D+=M;b+=1,j+=2,D+=j,_.setTile(Q+b,K+k,L),_.setTile(Q-b,K+k,L),_.setTile(Q+b,K-k,L),_.setTile(Q-b,K-k,L),_.setTile(Q+k,K+b,L),_.setTile(Q-k,K+b,L),_.setTile(Q+k,K-b,L),_.setTile(Q-k,K-b,L)}return _}function c6(_,Q,K,z){let{widthTiles:L,heightTiles:D}=_,j=[];j.push({x:Q,y:K});let M=void 0;while(typeof(M=j.shift())<"u"){let b=M,k=M;if(M.x+1<L)k={x:M.x+1,y:M.y};while(_.getTile(b.x,b.y).type!==z){if(_.setTile(b.x,b.y,z),b.y+1<D){if(_.getTile(b.x,b.y+1).type!==z)j.push({x:b.x,y:b.y+1})}if(b.y-1>=0){if(_.getTile(b.x,b.y-1).type!==z)j.push({x:b.x,y:b.y-1})}if(b.x-1>=0)b.x-=1;else break}while(_.getTile(k.x,k.y).type!==z){if(_.setTile(k.x,k.y,z),k.y+1<D){if(_.getTile(k.x,k.y+1).type!==z)j.push({x:k.x,y:k.y+1})}if(k.y-1>=0){if(_.getTile(k.x,k.y-1).type!==z)j.push({x:k.x,y:k.y-1})}if(k.x+1<L)k.x+=1;else break}}return _}function Qw(_,Q){if(Q?.oldMapId?.startsWith("shop_instance")){_=n0(_,Q.oldMapId);let K=_.maps[Q.newMapId],z=K.getTile(Q.newX,Q.newY);K.setTile(Q.newX,Q.newY,z.type,{mapId:"shop_instance",x:Q.oldX,y:Q.oldY})}if(Q?.newMapId?.startsWith("shop_instance")){let K=p_(N_.shop_instance);K.id="shop_instance_"+Q.oldMapId+"_"+Q.entityId,K.setTile(Q.newX,Q.newY,F.tiles.portal,{mapId:Q.oldMapId,x:Q.oldX,y:Q.oldY}),_.maps[Q.oldMapId].setTile(Q.oldX,Q.oldY,Q.oldTileType,{mapId:K.id,x:Q.newX,y:Q.newY});let L=_.entities[Q.entityId];if(L.id.startsWith("player"))_.currentMapId=K.id;let D=_.components.position[L.id];if(D.mapId=K.id,D.x=Q.newX,D.y=Q.newY,delete _.maps.shop_instance,_.maps[K.id]=K,_=Y1(_,F.items.hammer,{mapId:K.id,x:4,y:4},0,-200),_=Y1(_,F.items.pickaxe,{mapId:K.id,x:4,y:6},0,-200),_=Y1(_,F.items.battery,{mapId:K.id,x:4,y:8},0,-200),_=Y1(_,F.items.gold,{mapId:K.id,x:4,y:10},1,-1e4),_=k_(_,K.id+"_shopkeeper",F.entities.AeroBot,K.id,6,2,{faction:i_(L),dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),Q?.oldMapId.startsWith("bot_stadium"))_=k_(_,K.id+"_shopper",F.entities.WorkBot,K.id,1,12,{faction:i_(L),dialog:"shop_instance_workbot_shopper"});else if(Q?.oldMapId.startsWith("bot_bar"))_=k_(_,K.id+"_shopper",F.entities.AeroBot,K.id,4,11,{faction:i_(L),dialog:"shop_instance_aerobot_shopper"})}return _}function Jw(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",effects:{},entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new P_,components:{position:{},energy:{},currency:{},inventory:{},type:{}}}}function Vw(_){let Q=void 0;while(typeof(Q=_._combatQueue.shift())<"u"){let K=-1,z=-5,L=C1(_,Q.entityId);if(L){if(K=L.energyCost,M_(_,Q.entityId,F.effects.Recuperation))K=Math.min(-1,K+1);z=-1*Math.abs(L.damage)}_._energyQueue.push({entityId:Q.entityId,energyDelta:K}),_._energyQueue.push({entityId:Q.otherEntityId,energyDelta:z});let D=_.entities[Q.entityId],j=_.entities[Q.otherEntityId],M=_.components.type[D.id]?.type,b=_.components.type[j.id]?.type,k=D?.options?.name?D.options.name:M.name,f=j?.options?.name?j.options.name:b.name;_=X_(_,`${k} did ${Math.abs(z)} damage to ${f} at cost of ${Math.abs(K)} energy.`)}return _}function Kw(_){let Q=void 0,K=new Set;while(typeof(Q=_._energyQueue.shift())<"u"){let z=_.entities[Q.entityId],L=_.components.energy[Q.entityId];if(z&&L){if(L.current=Math.min(L.current+Q.energyDelta,L.max),L.current<=0)K.add(z.id)}}for(let z of K){let L=_.entities[z],D=_.components.type[z]?.type,j=_.components.position[z],M=_.components.energy[z];_._despawnQueue.push(z);let b=L?.options?.name?L.options.name:D.name;if(!b_(_,L.id)){let k=Math.max(1,Math.floor(M.max/3));_=A0(_,k,j),_=X_(_,`${b} destroyed leaving behind Junk.`)}}return _}function qw(_){return _=l0(_),_=Vw(_),_=T0(_),_=Kw(_),_=R0(_),_=y0(_),_=d0(_),_}class zw{p=[];constructor(_){this.p=Array(512);let Q=Array(256);for(let z=0;z<256;z++)Q[z]=z;let K=new P_(_);for(let z=255;z>0;z--){let L=K.getItem(Z1(z+1));[Q[z],Q[L]]=[Q[L],Q[z]]}for(let z=0;z<256;z++)this.p[z]=this.p[z+256]=Q[z]}fade(_){return _*_*_*(_*(_*6-15)+10)}lerp(_,Q,K){return Q+_*(K-Q)}grad(_,Q,K,z){let L=_&15,D=L<8?Q:K,j=L<4?K:L===12||L===14?Q:z;return((L&1)===0?D:-D)+((L&2)===0?j:-j)}noise(_,Q,K){let z=Math.floor(_)&255,L=Math.floor(Q)&255,D=Math.floor(K)&255;_-=Math.floor(_),Q-=Math.floor(Q),K-=Math.floor(K);let j=this.fade(_),M=this.fade(Q),b=this.fade(K),k=this.p[z]+L,f=this.p[k]+D,S=this.p[k+1]+D,h=this.p[z+1]+L,m=this.p[h]+D,l=this.p[h+1]+D;return(this.lerp(b,this.lerp(M,this.lerp(j,this.grad(this.p[f],_,Q,K),this.grad(this.p[m],_-1,Q,K)),this.lerp(j,this.grad(this.p[S],_,Q-1,K),this.grad(this.p[l],_-1,Q-1,K))),this.lerp(M,this.lerp(j,this.grad(this.p[f+1],_,Q,K-1),this.grad(this.p[m+1],_-1,Q,K-1)),this.lerp(j,this.grad(this.p[S+1],_,Q-1,K-1),this.grad(this.p[l+1],_-1,Q-1,K-1))))+1)/2}}class J0{width;height;seed;constructor(_,Q,K){this.width=_,this.height=Q,this.seed=K}generate(_,Q){let K=new zw(this.seed),z=[],L=F.tiles.void,D=F.tiles.water,j=F.tiles.tree,M=F.tiles.rock;for(let b=0;b<this.height;b++)for(let k=0;k<this.width;k++){let f=k/this.width*5-2.5,S=b/this.height*5-2.5,h=this.getOctaveNoise(K,f,S,0,4,0.5);h=(h-0.5)*2+0.5,h=Math.max(0,Math.min(1,h));let m;if(h<0.25)m=D;else if(h<0.5)m=L;else if(h<0.75)m=j;else m=M;z.push(C_(m))}return new W_(_,this.width,this.height,z)}getOctaveNoise(_,Q,K,z,L,D){let j=0,M=1,b=1,k=0;for(let f=0;f<L;f++)j+=_.noise(Q*M,K*M,z*M)*b,k+=b,b*=D,M*=2;return j/k}}var p6=42;function Uw(_,Q=p6){let z=new J0(256,256,Q).generate("overworld="+Q,"Overworld");return _.maps[z.id]=z,_}class u1{state;constructor(){}init(){return this.state=Jw(),this.state=w1(this.state,0,h0),this.state=w1(this.state,0,t0),this.state=w1(this.state,0,Qw),this.state=w1(this.state,1,b0),this.state=w1(this.state,2,C0),this.state=Zw(this.state),this.state=r0(this.state),this.state=Uw(this.state),this.state.currentMapId="botmos_hull_selection",this.state=k_(this.state,F_(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits,name:"Player"}),this.state}update(_,Q=!1){let K=this.state.entities[F_()];if(K){if(_){switch(_){case F.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case F.commands["#"]:this.state=X_(this.state,j0(this.state,F_()));break;default:this.state=I0(this.state,K,_),this.state=qw(this.state)}this.state.actionLog.push(_.key)}}else this.state=X_(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=k_(this.state,F_(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits,name:"Player"});return this.state}play(_){for(let Q=0;Q<_.length;Q++){let K=_[Q];this.update(F.commands[K],!0)}return this.state}}var p={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},V0=[],S1=void 0,Bw=void 0,$w=0;document.body.addEventListener("keydown",function(_){if(_.defaultPrevented)return;switch(_.key){case"w":case"ArrowUp":p.up=!0,Q_(_);break;case"a":case"ArrowLeft":p.left=!0,Q_(_);break;case"s":case"ArrowDown":p.down=!0,Q_(_);break;case"d":case"ArrowRight":p.right=!0,Q_(_);break;case"x":p.a=!0,Q_(_);break;case" ":case"y":case"z":p.b=!0,Q_(_);break;case"m":p.menu=!0,Q_(_);break;case"#":case"/":p.slash=!0,Q_(_);break;default:}S_(Xw())});function S_(_){let Q=Date.now();if(S1!==void 0&&Q-$w>=F.constants.MIN_TURN_SPEED_IN_MS)$w=Q,S1(_)}document.body.addEventListener("keyup",function(_){if(_.defaultPrevented)return;switch(_.key){case"w":case"ArrowUp":p.up=!1,Q_(_);break;case"a":case"ArrowLeft":p.left=!1,Q_(_);break;case"s":case"ArrowDown":p.down=!1,Q_(_);break;case"d":case"ArrowRight":p.right=!1,Q_(_);break;case"x":p.a=!1,Q_(_);break;case" ":case"y":case"z":p.b=!1,Q_(_);break;case"m":p.menu=!1,Q_(_);break;case"#":case"/":p.slash=!1,Q_(_);default:}});document.body.addEventListener("click",function(_){let{clientX:Q,clientY:K}=_,L=document.body.clientWidth/3,j=document.body.clientHeight/3;if(Q>=L&&Q<2*L&&K<j)S_(F.commands.N),Q_(_);else if(Q<L&&K<j)S_(F.commands.B),Q_(_);else if(Q>=2*L&&K<j)S_(F.commands.A),Q_(_);else if(Q<L&&K>=j&&K<2*j)S_(F.commands.W),Q_(_);else if(Q>=2*L&&K>=j&&K<2*j)S_(F.commands.E),Q_(_);else if(Q>=L&&Q<2*L&&K>=2*j)S_(F.commands.S),Q_(_);else if(Q>=L&&Q<2*L&&K>=j&&K<2*j)S_(F.commands.M),Q_(_)});function Q_(_){_.preventDefault(),_.stopPropagation()}var G1=null;function y6(){let _=null;if(p.right)_=F.commands.E;if(p.left)_=F.commands.W;if(p.down)_=F.commands.S;if(p.up)_=F.commands.N;if(p.up&&p.right){if(_===F.commands.N&&G1===F.commands.N)_=F.commands.E}if(p.up&&p.left){if(_===F.commands.N&&G1===F.commands.N)_=F.commands.W}if(p.down&&p.right){if(_===F.commands.S&&G1===F.commands.S)_=F.commands.E}if(p.down&&p.left){if(_===F.commands.S&&G1===F.commands.S)_=F.commands.W}if(p.a)_=F.commands.A;if(p.b)_=F.commands.B;if(p.menu)_=F.commands.M;if(p.slash)_=F.commands["#"];if(G1=_,_!==null)V0.push(_)}function Xw(){y6();let _=V0.shift()||null;return V0=[],_}document.body.addEventListener("mousemove",function(_){if(_.defaultPrevented)return;if(S1!==void 0)Bw(_),Q_(_)});var Yw=void 0;window.addEventListener("gamepadconnected",(_)=>{Yw=setInterval(function(){let Q=navigator.getGamepads()[_.gamepad?.index];if(p.right=Q.buttons[15].pressed,p.left=Q.buttons[14].pressed,p.down=Q.buttons[13].pressed,p.up=Q.buttons[12].pressed,p.a=Q.buttons[0].pressed||Q.buttons[2].pressed,p.b=Q.buttons[1].pressed||Q.buttons[3].pressed,p.menu=Q.buttons[9].pressed,p.right||p.left||p.down||p.up||p.a||p.b||p.menu)S_(Xw())},100)});window.addEventListener("gamepaddisconnected",(_)=>{clearInterval(Yw)});function Gw(_){S1=_}function Lw(_){Bw=_}var jw=t1(k1(),1);var f1={__10:[0,0],__11:[16,0],__12:[32,0],__13:[48,0],__14:[64,0],__15:[80,0],__1:[96,0],_1:[112,0],__2:[128,0],_2:[144,0],__3:[160,0],_3:[176,0],__4:[192,0],_4:[208,0],__5:[224,0],_5:[240,0],__6:[256,0],_6:[272,0],__7:[288,0],_7:[304,0],__8:[320,0],_8:[336,0],__9:[352,0],_9:[368,0],AeroBot_a:[384,0],AeroBot:[400,0],battery:[416,0],BioAbsorber:[432,0],broom:[448,0],chargepad:[464,0],cheat:[480,0],chest:[496,0],Cleaner_a:[512,0],Cleaner:[528,0],Deviant:[544,0],drain:[560,0],energy:[576,0],gold:[592,0],goo:[608,0],Graffiticyan:[624,0],Graffitimagenta:[640,0],Graffitiyellow:[656,0],hammer:[672,0],junk:[688,0],matter:[704,0],movableboulder:[720,0],movablebox:[736,0],moveeast:[752,0],movenorth:[768,0],movesouth:[784,0],movewest:[800,0],pickaxe:[816,0],Pioneer_a:[832,0],Pioneer:[848,0],portalclosed:[864,0],portalhidden:[880,0],portallauncher:[896,0],portal:[912,0],portalsewers:[928,0],portalstartaerobot:[944,0],"_portalstart?":[960,0],portalstartworkbot:[976,0],Recharger:[992,0],Recuperation:[1008,0],RoboRat_a:[1024,0],RoboRat:[1040,0],RockCrusher:[1056,0],rock:[1072,0],Screwing:[1088,0],shocker:[1104,0],spacerock:[1120,0],spacetree:[1136,0],spacevoid:[1152,0],spacevoidstarwhite:[1168,0],spacevoidstaryellow:[1184,0],spacewater_a:[1200,0],spacewater:[1216,0],Spirit_a:[1232,0],Spirit:[1248,0],star:[1264,0],terminal:[1280,0],tree:[1296,0],trident:[1312,0],upgradeBioAbsorber:[1328,0],upgradeRecuperation:[1344,0],Valkyrie_a:[1360,0],Valkyrie:[1376,0],voidhidden:[1392,0],void:[1408,0],voidtrue:[1424,0],wall0:[1440,0],wall1:[1456,0],wall2:[1472,0],walla_:[1488,0],wallA:[1504,0],wallb_:[1520,0],wallB:[1536,0],wallc_:[1552,0],wallC:[1568,0],WallCrusher:[1584,0],walld_:[1600,0],wallD:[1616,0],walle_:[1632,0],wallE:[1648,0],wallf_:[1664,0],wallF:[1680,0],wallg_:[1696,0],wallG:[1712,0],wallh_:[1728,0],wallH:[1744,0],walli_:[1760,0],wallI:[1776,0],wallj_:[1792,0],wallJ:[1808,0],wallk_:[1824,0],wallK:[1840,0],walll_:[1856,0],wallL:[1872,0],wallm_:[1888,0],wallM:[1904,0],walln_:[1920,0],wallN:[1936,0],wallo_:[1952,0],wallO:[1968,0],"wall(":[1984,0],"wall)":[2000,0],"wall+":[2016,0],"wall,":[2032,0],"wall.":[2048,0],wall:[2064,0],"wall:":[2080,0],wall_:[2096,0],"wall|":[2112,0],wallp_:[2128,0],wallP:[2144,0],wallq_:[2160,0],wallQ:[2176,0],wallr_:[2192,0],wallR:[2208,0],walls_:[2224,0],wallS:[2240,0],wallstatueaerobot:[2256,0],wallstatuecleaner:[2272,0],wallstatuepioneer:[2288,0],wallstatueworkbot:[2304,0],wallt_:[2320,0],wallT:[2336,0],wallu_:[2352,0],wallU:[2368,0],wallv_:[2384,0],wallV:[2400,0],wallweak:[2416,0],wallw_:[2432,0],wallW:[2448,0],wallx_:[2464,0],wallX:[2480,0],wally_:[2496,0],wallY:[2512,0],wallz_:[2528,0],wallZ:[2544,0],water_a:[2560,0],WaterImmunity:[2576,0],water:[2592,0],watersewage_a:[2608,0],watersewage:[2624,0],WaterShield:[2640,0],WorkBot_a:[2656,0],WorkBot:[2672,0],wrench:[2688,0]};var d6="#74ee15",Hw="#f00",I1="#000",r6=0.2,H1=document.createElement("div");H1.id="ui";document.body.appendChild(H1);var g1=z0(),Q1=z0(),K0=i6();K0.style.marginRight=`${r.fontSize/2}px`;var L1=[];for(let _=0;_<r.uiEffectsMaxDisplaySize;_++)L1.push(z0());var f_=document.createElement("div");f_.replaceChildren(g1,Q1,K0,...L1);H1.replaceChildren(f_);var h1=document.createElement("div");h1.style.display="flex";h1.style.justifyContent="space-between";var T1=document.createElement("div");T1.id="uichatlog";var Ww=document.createElement("div");Ww.id="uitooltip";h1.replaceChildren(T1,Ww);H1.appendChild(h1);var q0=document.createElement("div");q0.id="uimousetooltip";document.body.appendChild(q0);async function Dw(_){if(!r.showUI)return;let Q=F_(),K=_.entities[Q],z=_.components.energy[Q],L=_.components.currency[Q],D="";if(!!K&&!!z&&!!L)D=n6(_,Q),H1.style.flexDirection="column-reverse",o6(z);else s6(),D="Game over!",f_.style.color=I1,f_.style.background=Hw;K0.innerText=D,a6(_)}function n6(_,Q){let K=_.entities[Q],z=_.components.type[Q]?.type,L=_.components.energy[Q],D=_.components.currency[Q];m_(g1,z.name),g1.dataset.tooltip="Player hull: "+z.name;let j=C1(_,Q);if(j)m_(Q1,j.name.toLowerCase()),Q1.dataset.tooltip=`Player tool: ${j.name} (${Math.abs(j.damage)} damage, ${j.energyCost} energy)`;else m_(Q1,null),Q1.dataset.tooltip=void 0;let M=M0(_,Q);for(let S=0;S<r.uiEffectsMaxDisplaySize;S++){let h=M[S]?.type.name||null,m=M[S]?.type.tooltip||void 0;m_(L1[S],h),L1[S].dataset.tooltip=m}let b="";if(D.matter>0)b=`${D.matter}M `;let k="";if(D.gold>0)k=`${D.gold}G `;let f=M1(_,K);return" "+L.current+"/"+L.max+" "+k+b+"Y:"+f.B.name+" X:"+f.A.name}function s6(){m_(g1,null),m_(Q1,null);for(let _=0;_<r.uiEffectsMaxDisplaySize;_++)m_(L1[_],null)}function o6(_){if(f_.style.background=I1,_.current/_.max<=r6)f_.style.color=I1,f_.style.background=Hw;else f_.style.color=d6,f_.style.background=I1}function a6(_){if(_._menuOpen&&!!_.chatLog.length){let Q=_.chatLog.slice(-r.chatLogMaxDisplaySize);T1.innerText=Q.join(`
`)}else T1.innerText=""}function z0(){let _=document.createElement("span");return m_(_,null),_.style.height=`${r.fontSize}px`,_.style.display="inline-block",_}function i6(){let _=document.createElement("span");return _.style.display="inline-block",_.style.marginLeft=`${r.fontSize/2}px`,_}function m_(_,Q){if(Q){let K=f1[Q][0];_.style.background=`url('build/tiles.png') -${K}px 0`,_.style.width=`${r.fontSize}px`}else _.style.width="0px"}function Fw(){return q0}var d_="_a",Mw=document.createElement("img");Mw.src="build/tiles.png";R_.tileSet=Mw;R_.tileMap=V8();var J1=new jw.Display(R_);document.body.appendChild(J1.getContainer());var Rw=0,bw=0,r_=void 0;function t6(_,Q,K=!1){r_=_;let z=_.currentMapId,L=_.maps[z],D=K?d_:"",j=0,M=0;Rw=Q.x-j,bw=Q.y-M;let b=_8(Q.width,Q.height);w8(b,_,Q,j,M,D),Z8(b,_,Q,j,M,D),Q8(b,_,Q,j,M,D),J8(b)}var Pw={x:0,y:0},x1=0;async function n_(_){let Q=_.entities[F_()],K=Q?_.components.position[Q.id]:Pw,z=e6(K);if(t6(_,z,x1%2==0),Dw(_),Pw=K,x1++,x1>=128)x1=0}async function Cw(){J1._backend.setOptions(R_)}function Ow(_,Q){r.cameraWidth=Math.floor(_/r.fontSize),r.cameraHeight=Math.floor(Q/r.fontSize),R_.width=Math.floor(r.cameraWidth*(1/r.zoom)),R_.height=Math.floor(r.cameraHeight*(1/r.zoom))}function vw(_){return[_[0]+Rw,_[1]+bw]}function Ew(_){if(!r_)return{state:null,tile:null,entity:null,item:null};let Q=r_.currentMapId,K=r_.maps[Q],z=_[0],L=_[1],D=K.getTile(z,L),j=P1(r_,Q,z,L),M=b1(r_,{mapId:Q,x:z,y:L});return{state:r_,tile:D,entity:j,item:M}}function e6(_){return{x:_.x-Math.floor(R_.width/2),y:_.y-Math.floor(R_.height/2),width:R_.width,height:R_.height}}function _8(_,Q){let K=[];for(let z=0;z<Q;z++){K[z]=[];for(let L=0;L<_;L++)K[z][L]={chars:[],fg:[],bg:[]}}return K}function w8(_,Q,K,z,L,D){let j=Q.currentMapId,M=Q.maps[j];for(let b=0;b<K.height;b++)for(let k=0;k<K.width;k++){let f=M.getTile(K.x+k,K.y+b),S="";if(f?.type)if(f.options.sign)S="#"+f.options.sign;else S=f.type.icon;if(S){let h=z+k,m=L+b;if(_[m]&&_[m][h])_[m][h].chars.push(S+D),_[m][h].fg.push("transparent"),_[m][h].bg.push("transparent")}}}function Z8(_,Q,K,z,L,D){let j=Q.currentMapId,M=R1(Q,j);for(let b=0;b<M.length;b++){let k=M[b],f=Q.components.type[k.id]?.type,S=Q.components.position[k.id];if(!S)continue;let h=z+S.x-K.x,m=L+S.y-K.y;if(_[m]&&_[m][h])_[m][h].chars.push(f.icon+D),_[m][h].fg.push("transparent"),_[m][h].bg.push("transparent")}}function Q8(_,Q,K,z,L,D){let j=Q.currentMapId,M=F_(),b=Q.entities[M],k=e_(Q,j);for(let f=0;f<k.length;f++){let S=k[f],h=Q.components.type[S.id]?.type,m=Q.components.position[S.id];if(!m)continue;let l=z+m.x-K.x,d=L+m.y-K.y,__="transparent";if(r.highlightFriendEnemy&&!b_(Q,S.id)&&!e1(Q,S.id)&&S!==b)switch(t_(b,S)){case 1:break;case 2:__="rgba(255, 0, 0, 0.5)";break}if(_[d]&&_[d][l])_[d][l].chars.push(h.icon+D),_[d][l].fg.push(__),_[d][l].bg.push("transparent");let z_=Q.components.energy[S.id];if(z_&&r.showEnergy!==0){let J_=r.showEnergy===1?16:10,B_=r.showEnergy===1?"__":"_",K_=Math.ceil(z_.current/z_.max*J_);if(K_<J_){if(_[d]&&_[d][l])_[d][l].chars.push(B_+K_),_[d][l].fg.push("transparent"),_[d][l].bg.push("transparent")}}}}function J8(_){J1.clear();for(let Q=0;Q<_.length;Q++)for(let K=0;K<_[Q].length;K++){let z=_[Q][K];if(z.chars.length>0)J1.draw(K,Q,z.chars,z.fg,z.bg)}}function V8(){let _={};for(let[Q,K]of Object.entries(f1)){let z=Q.endsWith(d_),L="";if(z)Q=Q.substring(0,Q.length-d_.length),L=d_;if(Q.startsWith("wall")&&(Q.length===5||Q.length===6))_["#"+Q.substring(4,5)+L]=K;else if(Object.hasOwn(F.tiles,Q))_[F.tiles[Q].icon+L]=K;else if(Object.hasOwn(F.entities,Q))_[F.entities[Q].icon+L]=K;else if(Object.hasOwn(F.items,Q))_[F.items[Q].icon+L]=K;else if(Object.hasOwn(F.effects,Q))_[F.effects[Q].icon+L]=K;else _[Q+L]=K}for(let[Q,K]of Object.entries(_))if(!Q.endsWith(d_)&&!Object.hasOwn(_,Q+d_))_[Q+d_]=K;return _}async function kw(_){if(!r.showUI||!r.showTooltip)return;let Q="";if(_.target){if(_.target?.dataset?.tooltip)Q+=_.target.dataset.tooltip}let K=J1.eventToPosition(_);if(K[0]!==-1){let j=vw(K),M=Ew(j);if(M.entity){let b=M.state.components.type[M.entity.id]?.type,k=M.entity?.options?.name?M.entity.options.name:b.name;Q+=k}if(M.item){if(Q!=="")Q+=`
`;let b=M.state.components.type[M.item.id]?.type;Q+=b.name}if(!!M?.tile?.type&&M.tile?.type.tooltip!==""){if(Q!=="")Q+=`
`;Q+=M.tile.type.tooltip}}let z=typeof window<"u"?window.innerHeight:0,L=Math.floor(z/2),D=Fw();if(Q!==""){D.innerText=Q,D.style.display="inline-block";let{offsetWidth:j,offsetHeight:M}=D,b=window.innerWidth,k=window.innerHeight,f=_.x+20,S=_.y+20;if(f+j>b)f=_.x-j-20;if(S+M>k)S=_.y-M-20;D.style.left=f+"px",D.style.top=S+"px"}else D.style.display="none"}function Aw(_){window.onload=function(){n_(_.init())},window.onresize=async function(){let Q=typeof window<"u"?window.innerWidth:0,K=typeof window<"u"?window.innerHeight:0;Ow(Q,K),await Cw(),n_(_.state)},Gw(function(Q){n_(_.update(Q))}),Lw(kw),document.body.focus()}function Nw(_){if(!window.BMActionLog)window.BMActionLog=function(){return _.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(Q){n_(_.play(Q))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){r.debug=!r.debug,n_(_.state)};if(r.debug){if(!window.BMDebugState)window.BMDebugState=function(){return _.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let Q=Object.keys(_.state.maps).length,K=Object.keys(_.state.entities).length,z=Object.keys(_.state.items).length,L=Object.keys(_.state.components.inventory).length;return`Maps: ${Q}, Entities: ${K}, Items: ${z}, Inventories: ${L}`}}}var uw=new u1;Nw(uw);Aw(uw);
