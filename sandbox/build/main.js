var T6=Object.create;var{getPrototypeOf:h6,defineProperty:C0,getOwnPropertyNames:x6}=Object;var m6=Object.prototype.hasOwnProperty;function l6(_){return this[_]}var c6,p6,_0=(_,Z,K)=>{var z=_!=null&&typeof _==="object";if(z){var Y=Z?c6??=new WeakMap:p6??=new WeakMap,D=Y.get(_);if(D)return D}K=_!=null?T6(h6(_)):{};let R=Z||!_||!_.__esModule?C0(K,"default",{value:_,enumerable:!0}):K;for(let O of x6(_))if(!m6.call(R,O))C0(R,O,{get:l6.bind(_,O),enumerable:!0});if(z)Y.set(_,R);return R};var y6=(_,Z)=>()=>(Z||_((Z={exports:{}}).exports,Z),Z.exports);var E1=y6((k1,zw)=>{function y_(_){if(_===void 0)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function V8(_,Z){var K=typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(K)return(K=K.call(_)).next.bind(K);if(Array.isArray(_)||(K=K8(_))||Z&&_&&typeof _.length==="number"){if(K)_=K;var z=0;return function(){if(z>=_.length)return{done:!0};return{done:!1,value:_[z++]}}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K8(_,Z){if(!_)return;if(typeof _==="string")return qw(_,Z);var K=Object.prototype.toString.call(_).slice(8,-1);if(K==="Object"&&_.constructor)K=_.constructor.name;if(K==="Map"||K==="Set")return Array.from(_);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return qw(_,Z)}function qw(_,Z){if(Z==null||Z>_.length)Z=_.length;for(var K=0,z=Array(Z);K<Z;K++)z[K]=_[K];return z}function w_(_,Z){_.prototype=Object.create(Z.prototype),_.prototype.constructor=_,q0(_,Z)}function q0(_,Z){return q0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(z,Y){return z.__proto__=Y,z},q0(_,Z)}(function(_,Z){typeof k1==="object"&&typeof zw<"u"?Z(k1):typeof define==="function"&&define.amd?define(["exports"],Z):(_=typeof globalThis<"u"?globalThis:_||self,Z(_.ROT={}))})(k1,function(_){var Z=0.00000000023283064365386963,K=function(){function B(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var X=B.prototype;return X.getSeed=function(){return this._seed},X.setSeed=function(V){return V=V<1?1/V:V,this._seed=V,this._s0=(V>>>0)*Z,V=V*69069+1>>>0,this._s1=V*Z,V=V*69069+1>>>0,this._s2=V*Z,this._c=1,this},X.getUniform=function(){var V=2091639*this._s0+this._c*Z;return this._s0=this._s1,this._s1=this._s2,this._c=V|0,this._s2=V-this._c,this._s2},X.getUniformInt=function(V,w){var Q=Math.max(V,w),J=Math.min(V,w);return Math.floor(this.getUniform()*(Q-J+1))+J},X.getNormal=function(V,w){if(V===void 0)V=0;if(w===void 0)w=1;var Q,J,q;do Q=2*this.getUniform()-1,J=2*this.getUniform()-1,q=Q*Q+J*J;while(q>1||q==0);var U=Q*Math.sqrt(-2*Math.log(q)/q);return V+U*w},X.getPercentage=function(){return 1+Math.floor(this.getUniform()*100)},X.getItem=function(V){if(!V.length)return null;return V[Math.floor(this.getUniform()*V.length)]},X.shuffle=function(V){var w=[],Q=V.slice();while(Q.length){var J=Q.indexOf(this.getItem(Q));w.push(Q.splice(J,1)[0])}return w},X.getWeightedValue=function(V){var w=0;for(var Q in V)w+=V[Q];var J=this.getUniform()*w,q,U=0;for(q in V)if(U+=V[q],J<U)return q;return q},X.getState=function(){return[this._s0,this._s1,this._s2,this._c]},X.setState=function(V){return this._s0=V[0],this._s1=V[1],this._s2=V[2],this._c=V[3],this},X.clone=function(){var V=new B;return V.setState(this.getState())},B}(),z=new K().setSeed(Date.now()),Y=function(){function B(){}var X=B.prototype;return X.getContainer=function(){return null},X.setOptions=function(V){this._options=V},B}(),D=function(B){w_(X,B);function X(){var V=B.call(this)||this;return V._ctx=document.createElement("canvas").getContext("2d"),V}var $=X.prototype;return $.schedule=function(w){requestAnimationFrame(w)},$.getContainer=function(){return this._ctx.canvas},$.setOptions=function(w){B.prototype.setOptions.call(this,w);var Q=w.fontStyle?w.fontStyle+" ":"",J=Q+" "+w.fontSize+"px "+w.fontFamily;this._ctx.font=J,this._updateSize(),this._ctx.font=J,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},$.clear=function(){var w=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=w},$.eventToPosition=function(w,Q){var J=this._ctx.canvas,q=J.getBoundingClientRect();if(w-=q.left,Q-=q.top,w*=J.width/q.width,Q*=J.height/q.height,w<0||Q<0||w>=J.width||Q>=J.height)return[-1,-1];return this._normalizedEventToPosition(w,Q)},X}(Y);function R(B,X){return(B%X+X)%X}function O(B,X,$){if(X===void 0)X=0;if($===void 0)$=1;if(B<X)return X;if(B>$)return $;return B}function P(B){return B.charAt(0).toUpperCase()+B.substring(1)}function C(B){for(var X=arguments.length,$=Array(X>1?X-1:0),V=1;V<X;V++)$[V-1]=arguments[V];var w=C.map,Q=function(q,U,L,G){if(B.charAt(G-1)=="%")return q.substring(1);if(!$.length)return q;var H=$[0],W=U||L,j=W.split(","),M=j.shift()||"",b=w[M.toLowerCase()];if(!b)return q;H=$.shift();var v=H[b].apply(H,j),S=M.charAt(0);if(S!=S.toLowerCase())v=P(v);return v};return B.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}C.map={s:"toString"};var f=Object.freeze({__proto__:null,mod:R,clamp:O,capitalize:P,format:C}),g=function(B){w_(X,B);function X(){var V=B.call(this)||this;return V._spacingX=0,V._spacingY=0,V._hexSize=0,V}var $=X.prototype;return $.draw=function(w,Q){var J=w[0],q=w[1],U=w[2],L=w[3],G=w[4],H=[(J+1)*this._spacingX,q*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(Q)this._ctx.fillStyle=G,this._fill(H[0],H[1]);if(!U)return;this._ctx.fillStyle=L;var W=[].concat(U);for(var j=0;j<W.length;j++)this._ctx.fillText(W[j],H[0],Math.ceil(H[1]))},$.computeSize=function(w,Q){if(this._options.transpose)w+=Q,Q=w-Q,w-=Q;var J=Math.floor(w/this._spacingX)-1,q=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[J,q]},$.computeFontSize=function(w,Q){if(this._options.transpose)w+=Q,Q=w-Q,w-=Q;var J=2*w/((this._options.width+1)*Math.sqrt(3))-1,q=Q/(2+1.5*(this._options.height-1)),U=Math.min(J,q),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var G=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var H=G/100;U=Math.floor(U)+1;var W=2*U/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(W)-1},$._normalizedEventToPosition=function(w,Q){var J;if(this._options.transpose)w+=Q,Q=w-Q,w-=Q,J=this._ctx.canvas.width;else J=this._ctx.canvas.height;var q=J/this._options.height;if(Q=Math.floor(Q/q),R(Q,2))w-=this._spacingX,w=1+2*Math.floor(w/(2*this._spacingX));else w=2*Math.floor(w/(2*this._spacingX));return[w,Q]},$._fill=function(w,Q){var J=this._hexSize,q=this._options.border,U=this._ctx;if(U.beginPath(),this._options.transpose)U.moveTo(w-J+q,Q),U.lineTo(w-J/2+q,Q+this._spacingX-q),U.lineTo(w+J/2-q,Q+this._spacingX-q),U.lineTo(w+J-q,Q),U.lineTo(w+J/2-q,Q-this._spacingX+q),U.lineTo(w-J/2+q,Q-this._spacingX+q),U.lineTo(w-J+q,Q);else U.moveTo(w,Q-J+q),U.lineTo(w+this._spacingX-q,Q-J/2+q),U.lineTo(w+this._spacingX-q,Q+J/2-q),U.lineTo(w,Q+J-q),U.lineTo(w-this._spacingX+q,Q+J/2-q),U.lineTo(w-this._spacingX+q,Q-J/2+q),U.lineTo(w,Q-J+q);U.fill()},$._updateSize=function(){var w=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(w.spacing*(w.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var J,q;if(w.transpose)J="height",q="width";else J="width",q="height";this._ctx.canvas[J]=Math.ceil((w.width+1)*this._spacingX),this._ctx.canvas[q]=Math.ceil((w.height-1)*this._spacingY+2*this._hexSize)},X}(D),I=function(B){w_(X,B);function X(){var V=B.call(this)||this;return V._spacingX=0,V._spacingY=0,V._canvasCache={},V}var $=X.prototype;return $.setOptions=function(w){B.prototype.setOptions.call(this,w),this._canvasCache={}},$.draw=function(w,Q){if(X.cache)this._drawWithCache(w);else this._drawNoCache(w,Q)},$._drawWithCache=function(w){var Q=w[0],J=w[1],q=w[2],U=w[3],L=w[4],G=""+q+U+L,H;if(G in this._canvasCache)H=this._canvasCache[G];else{var W=this._options.border;H=document.createElement("canvas");var j=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,j.fillStyle=L,j.fillRect(W,W,H.width-W,H.height-W),q){j.fillStyle=U,j.font=this._ctx.font,j.textAlign="center",j.textBaseline="middle";var M=[].concat(q);for(var b=0;b<M.length;b++)j.fillText(M[b],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[G]=H}this._ctx.drawImage(H,Q*this._spacingX,J*this._spacingY)},$._drawNoCache=function(w,Q){var J=w[0],q=w[1],U=w[2],L=w[3],G=w[4];if(Q){var H=this._options.border;this._ctx.fillStyle=G,this._ctx.fillRect(J*this._spacingX+H,q*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!U)return;this._ctx.fillStyle=L;var W=[].concat(U);for(var j=0;j<W.length;j++)this._ctx.fillText(W[j],(J+0.5)*this._spacingX,Math.ceil((q+0.5)*this._spacingY))},$.computeSize=function(w,Q){var J=Math.floor(w/this._spacingX),q=Math.floor(Q/this._spacingY);return[J,q]},$.computeFontSize=function(w,Q){var J=Math.floor(w/this._options.width),q=Math.floor(Q/this._options.height),U=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=U;var G=L/100,H=G*q/J;if(H>1)q=Math.floor(q/H);return Math.floor(q/this._options.spacing)},$._normalizedEventToPosition=function(w,Q){return[Math.floor(w/this._spacingX),Math.floor(Q/this._spacingY)]},$._updateSize=function(){var w=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(w.spacing*Q),this._spacingY=Math.ceil(w.spacing*w.fontSize),w.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=w.width*this._spacingX,this._ctx.canvas.height=w.height*this._spacingY},X}(D);I.cache=!1;var c=function(B){w_(X,B);function X(){var V=B.call(this)||this;return V._colorCanvas=document.createElement("canvas"),V}var $=X.prototype;return $.draw=function(w,Q){var J=w[0],q=w[1],U=w[2],L=w[3],G=w[4],H=this._options.tileWidth,W=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(J*H,q*W,H,W);else this._ctx.fillStyle=G,this._ctx.fillRect(J*H,q*W,H,W);if(!U)return;var j=[].concat(U),M=[].concat(L),b=[].concat(G);for(var v=0;v<j.length;v++){var S=this._options.tileMap[j[v]];if(!S)throw Error('Char "'+j[v]+'" not found in tileMap');if(this._options.tileColorize){var T=this._colorCanvas,x=T.getContext("2d");x.globalCompositeOperation="source-over",x.clearRect(0,0,H,W);var p=M[v],i=b[v];if(x.drawImage(this._options.tileSet,S[0],S[1],H,W,0,0,H,W),p!="transparent")x.fillStyle=p,x.globalCompositeOperation="source-atop",x.fillRect(0,0,H,W);if(i!="transparent")x.fillStyle=i,x.globalCompositeOperation="destination-over",x.fillRect(0,0,H,W);this._ctx.drawImage(T,J*H,q*W,H,W)}else this._ctx.drawImage(this._options.tileSet,S[0],S[1],H,W,J*H,q*W,H,W)}},$.computeSize=function(w,Q){var J=Math.floor(w/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[J,q]},$.computeFontSize=function(){throw Error("Tile backend does not understand font size")},$._normalizedEventToPosition=function(w,Q){return[Math.floor(w/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},$._updateSize=function(){var w=this._options;this._ctx.canvas.width=w.width*w.tileWidth,this._ctx.canvas.height=w.height*w.tileHeight,this._colorCanvas.width=w.tileWidth,this._colorCanvas.height=w.tileHeight},X}(D);function l(B){var X,$;if(B in k)X=k[B];else{if(B.charAt(0)=="#"){var V=B.match(/[0-9a-f]/gi)||[],w=V.map(function(J){return parseInt(J,16)});if(w.length==3)X=w.map(function(J){return J*17});else{for(var Q=0;Q<3;Q++)w[Q+1]+=16*w[Q],w.splice(Q,1);X=w}}else if($=B.match(/rgb\(([0-9, ]+)\)/i))X=$[1].split(/\s*,\s*/).map(function(J){return parseInt(J)});else X=[0,0,0];k[B]=X}return X.slice()}function d(B){var X=B.slice();for(var $=arguments.length,V=Array($>1?$-1:0),w=1;w<$;w++)V[w-1]=arguments[w];for(var Q=0;Q<3;Q++)for(var J=0;J<V.length;J++)X[Q]+=V[J][Q];return X}function o(B){for(var X=arguments.length,$=Array(X>1?X-1:0),V=1;V<X;V++)$[V-1]=arguments[V];for(var w=0;w<3;w++)for(var Q=0;Q<$.length;Q++)B[w]+=$[Q][w];return B}function z_(B){var X=B.slice();for(var $=arguments.length,V=Array($>1?$-1:0),w=1;w<$;w++)V[w-1]=arguments[w];for(var Q=0;Q<3;Q++){for(var J=0;J<V.length;J++)X[Q]*=V[J][Q]/255;X[Q]=Math.round(X[Q])}return X}function V_(B){for(var X=arguments.length,$=Array(X>1?X-1:0),V=1;V<X;V++)$[V-1]=arguments[V];for(var w=0;w<3;w++){for(var Q=0;Q<$.length;Q++)B[w]*=$[Q][w]/255;B[w]=Math.round(B[w])}return B}function X_(B,X,$){if($===void 0)$=0.5;var V=B.slice();for(var w=0;w<3;w++)V[w]=Math.round(V[w]+$*(X[w]-B[w]));return V}var K_=X_;function E(B,X,$){if($===void 0)$=0.5;var V=m(B),w=m(X);for(var Q=0;Q<3;Q++)V[Q]+=$*(w[Q]-V[Q]);return a(V)}var u=E;function h(B,X){if(!(X instanceof Array))X=Math.round(z.getNormal(0,X));var $=B.slice();for(var V=0;V<3;V++)$[V]+=X instanceof Array?Math.round(z.getNormal(0,X[V])):X;return $}function m(B){var X=B[0]/255,$=B[1]/255,V=B[2]/255,w=Math.max(X,$,V),Q=Math.min(X,$,V),J=0,q,U=(w+Q)/2;if(w==Q)q=0;else{var L=w-Q;switch(q=U>0.5?L/(2-w-Q):L/(w+Q),w){case X:J=($-V)/L+($<V?6:0);break;case $:J=(V-X)/L+2;break;case V:J=(X-$)/L+4;break}J/=6}return[J,q,U]}function s(B,X,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return B+(X-B)*6*$;if($<0.5)return X;if($<0.6666666666666666)return B+(X-B)*(0.6666666666666666-$)*6;return B}function a(B){var X=B[2];if(B[1]==0)return X=Math.round(X*255),[X,X,X];else{var $=B[1],V=X<0.5?X*(1+$):X+$-X*$,w=2*X-V,Q=s(w,V,B[0]+0.3333333333333333),J=s(w,V,B[0]),q=s(w,V,B[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(J*255),Math.round(q*255)]}}function N(B){var X=B.map(function($){return O($,0,255)});return"rgb("+X.join(",")+")"}function A(B){var X=B.map(function($){return O($,0,255).toString(16).padStart(2,"0")});return"#"+X.join("")}var k={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},n=Object.freeze({__proto__:null,fromString:l,add:d,add_:o,multiply:z_,multiply_:V_,interpolate:X_,lerp:K_,interpolateHSL:E,lerpHSL:u,randomize:h,rgb2hsl:m,hsl2rgb:a,toRGB:N,toHex:A}),e=function(B){w_(X,B);function X(){var V=B.call(this)||this;V._uniforms={};try{V._gl=V._initWebGL()}catch(w){if(typeof w==="string")alert(w);else if(w instanceof Error)alert(w.message)}return V}X.isSupported=function(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var $=X.prototype;return $.schedule=function(w){requestAnimationFrame(w)},$.getContainer=function(){return this._gl.canvas},$.setOptions=function(w){var Q=this;B.prototype.setOptions.call(this,w),this._updateSize();var J=this._options.tileSet;if(J&&"complete"in J&&!J.complete)J.addEventListener("load",function(){return Q._updateTexture(J)});else this._updateTexture(J)},$.draw=function(w,Q){var J=this._gl,q=this._options,U=w[0],L=w[1],G=w[2],H=w[3],W=w[4],j=J.canvas.height-(L+1)*q.tileHeight;if(J.scissor(U*q.tileWidth,j,q.tileWidth,q.tileHeight),Q){if(q.tileColorize)J.clearColor(0,0,0,0);else J.clearColor.apply(J,n_(W));J.clear(J.COLOR_BUFFER_BIT)}if(!G)return;var M=[].concat(G),b=[].concat(W),v=[].concat(H);J.uniform2fv(this._uniforms.targetPosRel,[U,L]);for(var S=0;S<M.length;S++){var T=this._options.tileMap[M[S]];if(!T)throw Error('Char "'+M[S]+'" not found in tileMap');if(J.uniform1f(this._uniforms.colorize,q.tileColorize?1:0),J.uniform2fv(this._uniforms.tilesetPosAbs,T),q.tileColorize)J.uniform4fv(this._uniforms.tint,n_(v[S])),J.uniform4fv(this._uniforms.bg,n_(b[S]));J.drawArrays(J.TRIANGLE_STRIP,0,4)}},$.clear=function(){var w=this._gl;w.clearColor.apply(w,n_(this._options.bg)),w.scissor(0,0,w.canvas.width,w.canvas.height),w.clear(w.COLOR_BUFFER_BIT)},$.computeSize=function(w,Q){var J=Math.floor(w/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[J,q]},$.computeFontSize=function(){throw Error("Tile backend does not understand font size")},$.eventToPosition=function(w,Q){var J=this._gl.canvas,q=J.getBoundingClientRect();if(w-=q.left,Q-=q.top,w*=J.width/q.width,Q*=J.height/q.height,w<0||Q<0||w>=J.width||Q>=J.height)return[-1,-1];return this._normalizedEventToPosition(w,Q)},$._initWebGL=function(){var w=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var J=A_(Q,H_,q_);return Q.useProgram(J),Y_(Q),__.forEach(function(q){return w._uniforms[q]=Q.getUniformLocation(J,q)}),this._program=J,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},$._normalizedEventToPosition=function(w,Q){return[Math.floor(w/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},$._updateSize=function(){var w=this._gl,Q=this._options,J=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];w.canvas.width=J[0],w.canvas.height=J[1],w.viewport(0,0,J[0],J[1]),w.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),w.uniform2fv(this._uniforms.targetSize,J)},$._updateTexture=function(w){z1(this._gl,w)},X}(Y),__=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],H_=`
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
}`.trim();function A_(B,X,$){var V=B.createShader(B.VERTEX_SHADER);if(B.shaderSource(V,X),B.compileShader(V),!B.getShaderParameter(V,B.COMPILE_STATUS))throw Error(B.getShaderInfoLog(V)||"");var w=B.createShader(B.FRAGMENT_SHADER);if(B.shaderSource(w,$),B.compileShader(w),!B.getShaderParameter(w,B.COMPILE_STATUS))throw Error(B.getShaderInfoLog(w)||"");var Q=B.createProgram();if(B.attachShader(Q,V),B.attachShader(Q,w),B.linkProgram(Q),!B.getProgramParameter(Q,B.LINK_STATUS))throw Error(B.getProgramInfoLog(Q)||"");return Q}function Y_(B){var X=new Float32Array([0,0,1,0,0,1,1,1]),$=B.createBuffer();B.bindBuffer(B.ARRAY_BUFFER,$),B.bufferData(B.ARRAY_BUFFER,X,B.STATIC_DRAW),B.enableVertexAttribArray(0),B.vertexAttribPointer(0,2,B.FLOAT,!1,0,0)}function z1(B,X){var $=B.createTexture();return B.bindTexture(B.TEXTURE_2D,$),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_MAG_FILTER,B.NEAREST),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_WRAP_S,B.REPEAT),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_WRAP_T,B.REPEAT),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,0),B.texImage2D(B.TEXTURE_2D,0,B.RGBA,B.RGBA,B.UNSIGNED_BYTE,X),$}var I_={};function n_(B){if(!(B in I_)){var X;if(B=="transparent")X=[0,0,0,0];else if(B.indexOf("rgba")>-1){X=(B.match(/[\d.]+/g)||[]).map(Number);for(var $=0;$<3;$++)X[$]=X[$]/255}else X=l(B).map(function(V){return V/255}),X.push(1);I_[B]=X}return I_[B]}function aw(B){return"\x1B[0;48;5;"+c1(B)+"m\x1B[2J"}function iw(B,X){return"\x1B[0;38;5;"+c1(B)+";48;5;"+c1(X)+"m"}function ew(B,X){return"\x1B["+(X+1)+";"+(B+1)+"H"}function c1(B){var X=256,$=6,V=$/X,w=l(B),Q=Math.floor(w[0]*V),J=Math.floor(w[1]*V),q=Math.floor(w[2]*V);return Q*36+J*6+q*1+16}var H0=function(B){w_(X,B);function X(){var V=B.call(this)||this;return V._offset=[0,0],V._cursor=[-1,-1],V._lastColor="",V}var $=X.prototype;return $.schedule=function(w){setTimeout(w,16.666666666666668)},$.setOptions=function(w){B.prototype.setOptions.call(this,w);var Q=[w.width,w.height],J=this.computeSize();this._offset=J.map(function(q,U){return Math.floor((q-Q[U])/2)})},$.clear=function(){process.stdout.write(aw(this._options.bg))},$.draw=function(w,Q){var J=w[0],q=w[1],U=w[2],L=w[3],G=w[4],H=this._offset[0]+J,W=this._offset[1]+q,j=this.computeSize();if(H<0||H>=j[0])return;if(W<0||W>=j[1])return;if(H!==this._cursor[0]||W!==this._cursor[1])process.stdout.write(ew(H,W)),this._cursor[0]=H,this._cursor[1]=W;if(Q){if(!U)U=" "}if(!U)return;var M=iw(L,G);if(M!==this._lastColor)process.stdout.write(M),this._lastColor=M;if(U!="\t"){var b=[].concat(U);process.stdout.write(b[0])}if(this._cursor[0]++,this._cursor[0]>=j[0])this._cursor[0]=0,this._cursor[1]++},$.computeFontSize=function(){throw Error("Terminal backend has no notion of font size")},$.eventToPosition=function(w,Q){return[w,Q]},$.computeSize=function(){return[process.stdout.columns,process.stdout.rows]},X}(Y),tw=/%([bc]){([^}]*)}/g,T_=0,c_=1,p1=2,y1=3;function _6(B,X){var $={width:0,height:1},V=d1(B,X),w=0;for(var Q=0;Q<V.length;Q++){var J=V[Q];switch(J.type){case T_:w+=J.value.length;break;case c_:$.height++,$.width=Math.max($.width,w),w=0;break}}return $.width=Math.max($.width,w),$}function d1(B,X){var $=[],V=0;B.replace(tw,function(Q,J,q,U){var L=B.substring(V,U);if(L.length)$.push({type:T_,value:L});return $.push({type:J=="c"?p1:y1,value:q.trim()}),V=U+Q.length,""});var w=B.substring(V);if(w.length)$.push({type:T_,value:w});return w6($,X)}function w6(B,X){if(!X)X=1/0;var $=0,V=0,w=-1;while($<B.length){var Q=B[$];if(Q.type==c_)V=0,w=-1;if(Q.type!=T_){$++;continue}while(V==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var J=Q.value.indexOf(`
`);if(J!=-1){Q.value=R1(B,$,J,!0);var q=Q.value.split("");while(q.length&&q[q.length-1]==" ")q.pop();Q.value=q.join("")}if(!Q.value.length){B.splice($,1);continue}if(V+Q.value.length>X){var U=-1;while(!0){var L=Q.value.indexOf(" ",U+1);if(L==-1)break;if(V+L>X)break;U=L}if(U!=-1)Q.value=R1(B,$,U,!0);else if(w!=-1){var G=B[w],H=G.value.lastIndexOf(" ");G.value=R1(B,w,H,!0),$=w}else Q.value=R1(B,$,X-V,!1)}else if(V+=Q.value.length,Q.value.indexOf(" ")!=-1)w=$;$++}B.push({type:c_});var W=null;for(var j=0;j<B.length;j++){var M=B[j];switch(M.type){case T_:W=M;break;case c_:if(W){var b=W.value.split("");while(b.length&&b[b.length-1]==" ")b.pop();W.value=b.join("")}W=null;break}}return B.pop(),B}function R1(B,X,$,V){var w={type:c_},Q={type:T_,value:B[X].value.substring($+(V?1:0))};return B.splice(X+1,0,w,Q),B[X].value.substring(0,$)}var Z6=Object.freeze({__proto__:null,TYPE_TEXT:T_,TYPE_NEWLINE:c_,TYPE_FG:p1,TYPE_BG:y1,measure:_6,tokenize:d1}),r1=80,n1=25,$_={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},Q6={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},J6={hex:g,rect:I,tile:c,"tile-gl":e,term:H0},V6={width:r1,height:n1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},s_=function(){function B($){if($===void 0)$={};this._data={},this._dirty=!1,this._options={},$=Object.assign({},V6,$),this.setOptions($),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var X=B.prototype;return X.DEBUG=function(V,w,Q){var J=[this._options.bg,this._options.fg];this.draw(V,w,null,null,J[Q%J.length])},X.clear=function(){this._data={},this._dirty=!0},X.setOptions=function(V){if(Object.assign(this._options,V),V.width||V.height||V.fontSize||V.fontFamily||V.spacing||V.layout){if(V.layout){var w=J6[V.layout];this._backend=new w}this._backend.setOptions(this._options),this._dirty=!0}return this},X.getOptions=function(){return this._options},X.getContainer=function(){return this._backend.getContainer()},X.computeSize=function(V,w){return this._backend.computeSize(V,w)},X.computeFontSize=function(V,w){return this._backend.computeFontSize(V,w)},X.computeTileSize=function(V,w){var Q=Math.floor(V/this._options.width),J=Math.floor(w/this._options.height);return[Q,J]},X.eventToPosition=function(V){var w,Q;if("touches"in V)w=V.touches[0].clientX,Q=V.touches[0].clientY;else w=V.clientX,Q=V.clientY;return this._backend.eventToPosition(w,Q)},X.draw=function(V,w,Q,J,q){if(!J)J=this._options.fg;if(!q)q=this._options.bg;var U=V+","+w;if(this._data[U]=[V,w,Q,J,q],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[U]=!0},X.drawOver=function(V,w,Q,J,q){var U=V+","+w,L=this._data[U];if(L)L[2]=Q||L[2],L[3]=J||L[3],L[4]=q||L[4];else this.draw(V,w,Q,J,q)},X.drawText=function(V,w,Q,J){var q=null,U=null,L=V,G=w,H=1;if(!J)J=this._options.width-V;var W=d1(Q,J);while(W.length){var j=W.shift();switch(j.type){case T_:var M=!1,b=!1,v=!1,S=!1;for(var T=0;T<j.value.length;T++){var x=j.value.charCodeAt(T),p=j.value.charAt(T);if(this._options.layout==="term"){var i=x>>8,t=i===17||i>=46&&i<=159||i>=172&&i<=215||x>=43360&&x<=43391;if(t){this.draw(L+0,G,p,q,U),this.draw(L+1,G,"\t",q,U),L+=2;continue}}if(v=x>65280&&x<65377||x>65500&&x<65512||x>65518,M=p.charCodeAt(0)==32||p.charCodeAt(0)==12288,S&&!v&&!M)L++;if(v&&!b)L++;this.draw(L++,G,p,q,U),b=M,S=v}break;case p1:q=j.value||null;break;case y1:U=j.value||null;break;case c_:L=V,G++,H++;break}}return H},X._tick=function(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var V in this._data)this._draw(V,!1)}else for(var w in this._dirty)this._draw(w,!0);this._dirty=!1},X._draw=function(V,w){var Q=this._data[V];if(Q[4]!=this._options.bg)w=!0;this._backend.draw(Q,w)},B}();s_.Rect=I,s_.Hex=g,s_.Tile=c,s_.TileGL=e,s_.Term=H0;var K6=function(){function B($){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,$),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var V=0;V<this._options.order;V++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var X=B.prototype;return X.clear=function(){this._data={},this._priorValues={}},X.generate=function(){var V=[this._sample(this._prefix)];while(V[V.length-1]!=this._boundary)V.push(this._sample(V));return this._join(V.slice(0,-1))},X.observe=function(V){var w=this._split(V);for(var Q=0;Q<w.length;Q++)this._priorValues[w[Q]]=this._options.prior;w=this._prefix.concat(w).concat(this._suffix);for(var J=this._options.order;J<w.length;J++){var q=w.slice(J-this._options.order,J),U=w[J];for(var L=0;L<q.length;L++){var G=q.slice(L);this._observeEvent(G,U)}}},X.getStats=function(){var V=[],w=Object.keys(this._priorValues).length;w--,V.push("distinct samples: "+w);var Q=Object.keys(this._data).length,J=0;for(var q in this._data)J+=Object.keys(this._data[q]).length;return V.push("dictionary size (contexts): "+Q),V.push("dictionary size (events): "+J),V.join(", ")},X._split=function(V){return V.split(this._options.words?/\s+/:"")},X._join=function(V){return V.join(this._options.words?" ":"")},X._observeEvent=function(V,w){var Q=this._join(V);if(!(Q in this._data))this._data[Q]={};var J=this._data[Q];if(!(w in J))J[w]=0;J[w]++},X._sample=function(V){V=this._backoff(V);var w=this._join(V),Q=this._data[w],J={};if(this._options.prior){for(var q in this._priorValues)J[q]=this._priorValues[q];for(var U in Q)J[U]+=Q[U]}else J=Q;return z.getWeightedValue(J)},X._backoff=function(V){if(V.length>this._options.order)V=V.slice(-this._options.order);else if(V.length<this._options.order)V=this._prefix.slice(0,this._options.order-V.length).concat(V);while(!(this._join(V)in this._data)&&V.length>0)V=V.slice(1);return V},B}(),W0=function(){function B(){this.heap=[],this.timestamp=0}var X=B.prototype;return X.lessThan=function(V,w){return V.key==w.key?V.timestamp<w.timestamp:V.key<w.key},X.shift=function(V){this.heap=this.heap.map(function(w){var{key:Q,value:J,timestamp:q}=w;return{key:Q+V,value:J,timestamp:q}})},X.len=function(){return this.heap.length},X.push=function(V,w){this.timestamp+=1;var Q=this.len();this.heap.push({value:V,timestamp:this.timestamp,key:w}),this.updateUp(Q)},X.pop=function(){if(this.len()==0)throw Error("no element to pop");var V=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return V},X.find=function(V){for(var w=0;w<this.len();w++)if(V==this.heap[w].value)return this.heap[w];return null},X.remove=function(V){var w=null;for(var Q=0;Q<this.len();Q++)if(V==this.heap[Q].value)w=Q;if(w===null)return!1;if(this.len()>1){var J=this.heap.pop();if(J.value!=V)this.heap[w]=J,this.updateDown(w);return!0}else this.heap.pop();return!0},X.parentNode=function(V){return Math.floor((V-1)/2)},X.leftChildNode=function(V){return 2*V+1},X.rightChildNode=function(V){return 2*V+2},X.existNode=function(V){return V>=0&&V<this.heap.length},X.swap=function(V,w){var Q=this.heap[V];this.heap[V]=this.heap[w],this.heap[w]=Q},X.minNode=function(V){var w=V.filter(this.existNode.bind(this)),Q=w[0];for(var J=V8(w),q;!(q=J()).done;){var U=q.value;if(this.lessThan(this.heap[U],this.heap[Q]))Q=U}return Q},X.updateUp=function(V){if(V==0)return;var w=this.parentNode(V);if(this.existNode(w)&&this.lessThan(this.heap[V],this.heap[w]))this.swap(V,w),this.updateUp(w)},X.updateDown=function(V){var w=this.leftChildNode(V),Q=this.rightChildNode(V);if(!this.existNode(w))return;var J=this.minNode([V,w,Q]);if(J!=V)this.swap(V,J),this.updateDown(J)},X.debugPrint=function(){console.log(this.heap)},B}(),D0=function(){function B(){this._time=0,this._events=new W0}var X=B.prototype;return X.getTime=function(){return this._time},X.clear=function(){return this._events=new W0,this},X.add=function(V,w){this._events.push(V,w)},X.get=function(){if(!this._events.len())return null;var V=this._events.pop(),w=V.key,Q=V.value;if(w>0)this._time+=w,this._events.shift(-w);return Q},X.getEventTime=function(V){var w=this._events.find(V);if(w){var Q=w.key;return Q}return},X.remove=function(V){return this._events.remove(V)},B}(),s1=function(){function B(){this._queue=new D0,this._repeat=[],this._current=null}var X=B.prototype;return X.getTime=function(){return this._queue.getTime()},X.add=function(V,w){if(w)this._repeat.push(V);return this},X.getTimeOf=function(V){return this._queue.getEventTime(V)},X.clear=function(){return this._queue.clear(),this._repeat=[],this._current=null,this},X.remove=function(V){var w=this._queue.remove(V),Q=this._repeat.indexOf(V);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==V)this._current=null;return w},X.next=function(){return this._current=this._queue.get(),this._current},B}(),q6=function(B){w_(X,B);function X(){return B.apply(this,arguments)||this}var $=X.prototype;return $.add=function(w,Q){return this._queue.add(w,0),B.prototype.add.call(this,w,Q)},$.next=function(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return B.prototype.next.call(this)},X}(s1),z6=function(B){w_(X,B);function X(){return B.apply(this,arguments)||this}var $=X.prototype;return $.add=function(w,Q,J){return this._queue.add(w,J!==void 0?J:1/w.getSpeed()),B.prototype.add.call(this,w,Q)},$.next=function(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return B.prototype.next.call(this)},X}(s1),$6=function(B){w_(X,B);function X(){var V=B.call(this)||this;return V._defaultDuration=1,V._duration=V._defaultDuration,V}var $=X.prototype;return $.add=function(w,Q,J){return this._queue.add(w,J||this._defaultDuration),B.prototype.add.call(this,w,Q)},$.clear=function(){return this._duration=this._defaultDuration,B.prototype.clear.call(this)},$.remove=function(w){if(w==this._current)this._duration=this._defaultDuration;return B.prototype.remove.call(this,w)},$.next=function(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return B.prototype.next.call(this)},$.setDuration=function(w){if(this._current)this._duration=w;return this},X}(s1),U6={Simple:q6,Speed:z6,Action:$6},o1=function(){function B($,V){if(V===void 0)V={};this._lightPasses=$,this._options=Object.assign({topology:8},V)}var X=B.prototype;return X._getCircle=function(V,w,Q){var J=[],q,U,L;switch(this._options.topology){case 4:U=1,L=[0,1],q=[$_[8][7],$_[8][1],$_[8][3],$_[8][5]];break;case 6:q=$_[6],U=1,L=[-1,1];break;case 8:q=$_[4],U=2,L=[-1,1];break;default:throw Error("Incorrect topology for FOV computation")}var G=V+L[0]*Q,H=w+L[1]*Q;for(var W=0;W<q.length;W++)for(var j=0;j<Q*U;j++)J.push([G,H]),G+=q[W][0],H+=q[W][1];return J},B}(),X6=function(B){w_(X,B);function X(){return B.apply(this,arguments)||this}var $=X.prototype;return $.compute=function(w,Q,J,q){if(q(w,Q,0,1),!this._lightPasses(w,Q))return;var U=[],L,G,H,W,j;for(var M=1;M<=J;M++){var b=this._getCircle(w,Q,M),v=360/b.length;for(var S=0;S<b.length;S++){if(H=b[S][0],W=b[S][1],L=v*(S-0.5),G=L+v,j=!this._lightPasses(H,W),this._visibleCoords(Math.floor(L),Math.ceil(G),j,U))q(H,W,M,1);if(U.length==2&&U[0]==0&&U[1]==360)return}}},$._visibleCoords=function(w,Q,J,q){if(w<0){var U=this._visibleCoords(0,Q,J,q),L=this._visibleCoords(360+w,360,J,q);return U||L}var G=0;while(G<q.length&&q[G]<w)G++;if(G==q.length){if(J)q.push(w,Q);return!0}var H=0;if(G%2){while(G<q.length&&q[G]<Q)G++,H++;if(H==0)return!1;if(J)if(H%2)q.splice(G-H,H,Q);else q.splice(G-H,H);return!0}else{while(G<q.length&&q[G]<Q)G++,H++;if(w==q[G-H]&&H==1)return!1;if(J)if(H%2)q.splice(G-H,H,w);else q.splice(G-H,H,w,Q);return!0}},X}(o1),Y6=function(B){w_(X,B);function X(){return B.apply(this,arguments)||this}var $=X.prototype;return $.compute=function(w,Q,J,q){if(q(w,Q,0,1),!this._lightPasses(w,Q))return;var U=[],L,G,H,W,j,M;for(var b=1;b<=J;b++){var v=this._getCircle(w,Q,b),S=v.length;for(var T=0;T<S;T++){if(L=v[T][0],G=v[T][1],W=[T?2*T-1:2*S-1,2*S],j=[2*T+1,2*S],H=!this._lightPasses(L,G),M=this._checkVisibility(W,j,H,U),M)q(L,G,b,M);if(U.length==2&&U[0][0]==0&&U[1][0]==U[1][1])return}}},$._checkVisibility=function(w,Q,J,q){if(w[0]>Q[0]){var U=this._checkVisibility(w,[w[1],w[1]],J,q),L=this._checkVisibility([0,1],Q,J,q);return(U+L)/2}var G=0,H=!1;while(G<q.length){var W=q[G],j=W[0]*w[1]-w[0]*W[1];if(j>=0){if(j==0&&!(G%2))H=!0;break}G++}var M=q.length,b=!1;while(M--){var v=q[M],S=Q[0]*v[1]-v[0]*Q[1];if(S>=0){if(S==0&&M%2)b=!0;break}}var T=!0;if(G==M&&(H||b))T=!1;else if(H&&b&&G+1==M&&M%2)T=!1;else if(G>M&&G%2)T=!1;if(!T)return 0;var x,p=M-G+1;if(p%2)if(G%2){var i=q[G];if(x=(Q[0]*i[1]-i[0]*Q[1])/(i[1]*Q[1]),J)q.splice(G,p,Q)}else{var t=q[M];if(x=(t[0]*w[1]-w[0]*t[1])/(w[1]*t[1]),J)q.splice(G,p,w)}else if(G%2){var Q_=q[G],B_=q[M];if(x=(B_[0]*Q_[1]-Q_[0]*B_[1])/(Q_[1]*B_[1]),J)q.splice(G,p)}else{if(J)q.splice(G,p,w,Q);return 1}var f_=(Q[0]*w[1]-w[0]*Q[1])/(w[1]*Q[1]);return x/f_},X}(o1),h_=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],B6=function(B){w_(X,B);function X(){return B.apply(this,arguments)||this}var $=X.prototype;return $.compute=function(w,Q,J,q){q(w,Q,0,1);for(var U=0;U<h_.length;U++)this._renderOctant(w,Q,h_[U],J,q)},$.compute180=function(w,Q,J,q,U){U(w,Q,0,1);var L=(q-1+8)%8,G=(q-2+8)%8,H=(q+1+8)%8;this._renderOctant(w,Q,h_[G],J,U),this._renderOctant(w,Q,h_[L],J,U),this._renderOctant(w,Q,h_[q],J,U),this._renderOctant(w,Q,h_[H],J,U)},$.compute90=function(w,Q,J,q,U){U(w,Q,0,1);var L=(q-1+8)%8;this._renderOctant(w,Q,h_[q],J,U),this._renderOctant(w,Q,h_[L],J,U)},$._renderOctant=function(w,Q,J,q,U){this._castVisibility(w,Q,1,1,0,q+1,J[0],J[1],J[2],J[3],U)},$._castVisibility=function(w,Q,J,q,U,L,G,H,W,j,M){if(q<U)return;for(var b=J;b<=L;b++){var v=-b-1,S=-b,T=!1,x=0;while(v<=0){v+=1;var p=w+v*G+S*H,i=Q+v*W+S*j,t=(v-0.5)/(S+0.5),Q_=(v+0.5)/(S-0.5);if(Q_>q)continue;if(t<U)break;if(v*v+S*S<L*L)M(p,i,b,1);if(!T){if(!this._lightPasses(p,i)&&b<L)T=!0,this._castVisibility(w,Q,b+1,q,t,L,G,H,W,j,M),x=Q_}else{if(!this._lightPasses(p,i)){x=Q_;continue}T=!1,q=x}}if(T)break}},X}(o1),G6={DiscreteShadowcasting:X6,PreciseShadowcasting:Y6,RecursiveShadowcasting:B6},p_=function(){function B($,V){if($===void 0)$=r1;if(V===void 0)V=n1;this._width=$,this._height=V}var X=B.prototype;return X._fillMap=function(V){var w=[];for(var Q=0;Q<this._width;Q++){w.push([]);for(var J=0;J<this._height;J++)w[Q].push(V)}return w},B}(),L6=function(B){w_(X,B);function X(){return B.apply(this,arguments)||this}var $=X.prototype;return $.create=function(w){var Q=this._width-1,J=this._height-1;for(var q=0;q<=Q;q++)for(var U=0;U<=J;U++){var L=q&&U&&q<Q&&U<J;w(q,U,L?0:1)}return this},X}(p_),F0=function(B){w_(X,B);function X(V,w){var Q=B.call(this,V,w)||this;return Q._rooms=[],Q._corridors=[],Q}var $=X.prototype;return $.getRooms=function(){return this._rooms},$.getCorridors=function(){return this._corridors},X}(p_),j0=function(){},P1=function(B){w_(X,B);function X(V,w,Q,J,q,U){var L=B.call(this)||this;if(L._x1=V,L._y1=w,L._x2=Q,L._y2=J,L._doors={},q!==void 0&&U!==void 0)L.addDoor(q,U);return L}X.createRandomAt=function(w,Q,J,q,U){var L=U.roomWidth[0],G=U.roomWidth[1],H=z.getUniformInt(L,G);L=U.roomHeight[0],G=U.roomHeight[1];var W=z.getUniformInt(L,G);if(J==1){var j=Q-Math.floor(z.getUniform()*W);return new this(w+1,j,w+H,j+W-1,w,Q)}if(J==-1){var M=Q-Math.floor(z.getUniform()*W);return new this(w-H,M,w-1,M+W-1,w,Q)}if(q==1){var b=w-Math.floor(z.getUniform()*H);return new this(b,Q+1,b+H-1,Q+W,w,Q)}if(q==-1){var v=w-Math.floor(z.getUniform()*H);return new this(v,Q-W,v+H-1,Q-1,w,Q)}throw Error("dx or dy must be 1 or -1")},X.createRandomCenter=function(w,Q,J){var q=J.roomWidth[0],U=J.roomWidth[1],L=z.getUniformInt(q,U);q=J.roomHeight[0],U=J.roomHeight[1];var G=z.getUniformInt(q,U),H=w-Math.floor(z.getUniform()*L),W=Q-Math.floor(z.getUniform()*G),j=H+L-1,M=W+G-1;return new this(H,W,j,M)},X.createRandom=function(w,Q,J){var q=J.roomWidth[0],U=J.roomWidth[1],L=z.getUniformInt(q,U);q=J.roomHeight[0],U=J.roomHeight[1];var G=z.getUniformInt(q,U),H=w-L-1,W=Q-G-1,j=1+Math.floor(z.getUniform()*H),M=1+Math.floor(z.getUniform()*W),b=j+L-1,v=M+G-1;return new this(j,M,b,v)};var $=X.prototype;return $.addDoor=function(w,Q){return this._doors[w+","+Q]=1,this},$.getDoors=function(w){for(var Q in this._doors){var J=Q.split(",");w(parseInt(J[0]),parseInt(J[1]))}return this},$.clearDoors=function(){return this._doors={},this},$.addDoors=function(w){var Q=this._x1-1,J=this._x2+1,q=this._y1-1,U=this._y2+1;for(var L=Q;L<=J;L++)for(var G=q;G<=U;G++){if(L!=Q&&L!=J&&G!=q&&G!=U)continue;if(w(L,G))continue;this.addDoor(L,G)}return this},$.debug=function(){console.log("room",this._x1,this._y1,this._x2,this._y2)},$.isValid=function(w,Q){var J=this._x1-1,q=this._x2+1,U=this._y1-1,L=this._y2+1;for(var G=J;G<=q;G++)for(var H=U;H<=L;H++)if(G==J||G==q||H==U||H==L){if(!w(G,H))return!1}else if(!Q(G,H))return!1;return!0},$.create=function(w){var Q=this._x1-1,J=this._x2+1,q=this._y1-1,U=this._y2+1,L=0;for(var G=Q;G<=J;G++)for(var H=q;H<=U;H++){if(G+","+H in this._doors)L=2;else if(G==Q||G==J||H==q||H==U)L=1;else L=0;w(G,H,L)}},$.getCenter=function(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},$.getLeft=function(){return this._x1},$.getRight=function(){return this._x2},$.getTop=function(){return this._y1},$.getBottom=function(){return this._y2},X}(j0),a1=function(B){w_(X,B);function X(V,w,Q,J){var q=B.call(this)||this;return q._startX=V,q._startY=w,q._endX=Q,q._endY=J,q._endsWithAWall=!0,q}X.createRandomAt=function(w,Q,J,q,U){var L=U.corridorLength[0],G=U.corridorLength[1],H=z.getUniformInt(L,G);return new this(w,Q,w+J*H,Q+q*H)};var $=X.prototype;return $.debug=function(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},$.isValid=function(w,Q){var J=this._startX,q=this._startY,U=this._endX-J,L=this._endY-q,G=1+Math.max(Math.abs(U),Math.abs(L));if(U)U=U/Math.abs(U);if(L)L=L/Math.abs(L);var H=L,W=-U,j=!0;for(var M=0;M<G;M++){var b=J+M*U,v=q+M*L;if(!Q(b,v))j=!1;if(!w(b+H,v+W))j=!1;if(!w(b-H,v-W))j=!1;if(!j){G=M,this._endX=b-U,this._endY=v-L;break}}if(G==0)return!1;if(G==1&&w(this._endX+U,this._endY+L))return!1;var S=!w(this._endX+U+H,this._endY+L+W),T=!w(this._endX+U-H,this._endY+L-W);if(this._endsWithAWall=w(this._endX+U,this._endY+L),(S||T)&&this._endsWithAWall)return!1;return!0},$.create=function(w){var Q=this._startX,J=this._startY,q=this._endX-Q,U=this._endY-J,L=1+Math.max(Math.abs(q),Math.abs(U));if(q)q=q/Math.abs(q);if(U)U=U/Math.abs(U);for(var G=0;G<L;G++){var H=Q+G*q,W=J+G*U;w(H,W,0)}return!0},$.createPriorityWalls=function(w){if(!this._endsWithAWall)return;var Q=this._startX,J=this._startY,q=this._endX-Q,U=this._endY-J;if(q)q=q/Math.abs(q);if(U)U=U/Math.abs(U);var L=U,G=-q;w(this._endX+q,this._endY+U),w(this._endX+L,this._endY+G),w(this._endX-L,this._endY-G)},X}(j0),H6=function(B){w_(X,B);function X(V,w,Q){var J=B.call(this,V,w)||this;return J._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(J._options,Q),J._map=[],J._dug=0,J._roomAttempts=20,J._corridorAttempts=20,J._connected=[],J._unconnected=[],J._digCallback=J._digCallback.bind(y_(J)),J._canBeDugCallback=J._canBeDugCallback.bind(y_(J)),J._isWallCallback=J._isWallCallback.bind(y_(J)),J}var $=X.prototype;return $.create=function(w){var Q=Date.now();while(!0){var J=Date.now();if(J-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(w)for(var q=0;q<this._width;q++)for(var U=0;U<this._height;U++)w(q,U,this._map[q][U]);return this},$._generateRooms=function(){var w=this._width-2,Q=this._height-2,J;do if(J=this._generateRoom(),this._dug/(w*Q)>this._options.roomDugPercentage)break;while(J)},$._generateRoom=function(){var w=0;while(w<this._roomAttempts){w++;var Q=P1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},$._generateCorridors=function(){var w=0;while(w<this._corridorAttempts){w++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var J=this._rooms[Q];J.clearDoors(),J.create(this._digCallback)}if(this._unconnected=z.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var q=z.getItem(this._connected);if(!q)break;var U=this._closestRoom(this._unconnected,q);if(!U)break;var L=this._closestRoom(this._connected,U);if(!L)break;var G=this._connectRooms(U,L);if(!G)break;if(!this._unconnected.length)return!0}}return!1},$._closestRoom=function(w,Q){var J=1/0,q=Q.getCenter(),U=null;for(var L=0;L<w.length;L++){var G=w[L],H=G.getCenter(),W=H[0]-q[0],j=H[1]-q[1],M=W*W+j*j;if(M<J)J=M,U=G}return U},$._connectRooms=function(w,Q){var J=w.getCenter(),q=Q.getCenter(),U=q[0]-J[0],L=q[1]-J[1],G,H,W,j,M,b,v;if(Math.abs(U)<Math.abs(L))W=L>0?2:0,j=(W+2)%4,M=Q.getLeft(),b=Q.getRight(),v=0;else W=U>0?1:3,j=(W+2)%4,M=Q.getTop(),b=Q.getBottom(),v=1;if(G=this._placeInWall(w,W),!G)return!1;if(G[v]>=M&&G[v]<=b){H=G.slice();var S=0;switch(j){case 0:S=Q.getTop()-1;break;case 1:S=Q.getRight()+1;break;case 2:S=Q.getBottom()+1;break;case 3:S=Q.getLeft()-1;break}H[(v+1)%2]=S,this._digLine([G,H])}else if(G[v]<M-1||G[v]>b+1){var T=G[v]-q[v],x=0;switch(j){case 0:case 1:x=T<0?3:1;break;case 2:case 3:x=T<0?1:3;break}if(j=(j+x)%4,H=this._placeInWall(Q,j),!H)return!1;var p=[0,0];p[v]=G[v];var i=(v+1)%2;p[i]=H[i],this._digLine([G,p,H])}else{var t=(v+1)%2;if(H=this._placeInWall(Q,j),!H)return!1;var Q_=Math.round((H[t]+G[t])/2),B_=[0,0],f_=[0,0];B_[v]=G[v],B_[t]=Q_,f_[v]=H[v],f_[t]=Q_,this._digLine([G,B_,f_,H])}if(w.addDoor(G[0],G[1]),Q.addDoor(H[0],H[1]),v=this._unconnected.indexOf(w),v!=-1)this._unconnected.splice(v,1),this._connected.push(w);if(v=this._unconnected.indexOf(Q),v!=-1)this._unconnected.splice(v,1),this._connected.push(Q);return!0},$._placeInWall=function(w,Q){var J=[0,0],q=[0,0],U=0;switch(Q){case 0:q=[1,0],J=[w.getLeft(),w.getTop()-1],U=w.getRight()-w.getLeft()+1;break;case 1:q=[0,1],J=[w.getRight()+1,w.getTop()],U=w.getBottom()-w.getTop()+1;break;case 2:q=[1,0],J=[w.getLeft(),w.getBottom()+1],U=w.getRight()-w.getLeft()+1;break;case 3:q=[0,1],J=[w.getLeft()-1,w.getTop()],U=w.getBottom()-w.getTop()+1;break}var L=[],G=-2;for(var H=0;H<U;H++){var W=J[0]+H*q[0],j=J[1]+H*q[1];L.push(null);var M=this._map[W][j]==1;if(M){if(G!=H-1)L[H]=[W,j]}else if(G=H,H)L[H-1]=null}for(var b=L.length-1;b>=0;b--)if(!L[b])L.splice(b,1);return L.length?z.getItem(L):null},$._digLine=function(w){for(var Q=1;Q<w.length;Q++){var J=w[Q-1],q=w[Q],U=new a1(J[0],J[1],q[0],q[1]);U.create(this._digCallback),this._corridors.push(U)}},$._digCallback=function(w,Q,J){if(this._map[w][Q]=J,J==0)this._dug++},$._isWallCallback=function(w,Q){if(w<0||Q<0||w>=this._width||Q>=this._height)return!1;return this._map[w][Q]==1},$._canBeDugCallback=function(w,Q){if(w<1||Q<1||w+1>=this._width||Q+1>=this._height)return!1;return this._map[w][Q]==1},X}(F0),W6=function(B){w_(X,B);function X(V,w,Q){var J;if(Q===void 0)Q={};return J=B.call(this,V,w)||this,J._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},J.setOptions(Q),J._dirs=$_[J._options.topology],J._map=J._fillMap(0),J}var $=X.prototype;return $.randomize=function(w){for(var Q=0;Q<this._width;Q++)for(var J=0;J<this._height;J++)this._map[Q][J]=z.getUniform()<w?1:0;return this},$.setOptions=function(w){Object.assign(this._options,w)},$.set=function(w,Q,J){this._map[w][Q]=J},$.create=function(w){var Q=this._fillMap(0),J=this._options.born,q=this._options.survive;for(var U=0;U<this._height;U++){var L=1,G=0;if(this._options.topology==6)L=2,G=U%2;for(var H=G;H<this._width;H+=L){var W=this._map[H][U],j=this._getNeighbors(H,U);if(W&&q.indexOf(j)!=-1)Q[H][U]=1;else if(!W&&J.indexOf(j)!=-1)Q[H][U]=1}}this._map=Q,w&&this._serviceCallback(w)},$._serviceCallback=function(w){for(var Q=0;Q<this._height;Q++){var J=1,q=0;if(this._options.topology==6)J=2,q=Q%2;for(var U=q;U<this._width;U+=J)w(U,Q,this._map[U][Q])}},$._getNeighbors=function(w,Q){var J=0;for(var q=0;q<this._dirs.length;q++){var U=this._dirs[q],L=w+U[0],G=Q+U[1];if(L<0||L>=this._width||G<0||G>=this._height)continue;J+=this._map[L][G]==1?1:0}return J},$.connect=function(w,Q,J){if(!Q)Q=0;var q=[],U={},L=1,G=[0,0];if(this._options.topology==6)L=2,G=[0,1];for(var H=0;H<this._height;H++)for(var W=G[H%2];W<this._width;W+=L)if(this._freeSpace(W,H,Q)){var j=[W,H];U[this._pointKey(j)]=j,q.push([W,H])}var M=q[z.getUniformInt(0,q.length-1)],b=this._pointKey(M),v={};v[b]=M,delete U[b],this._findConnected(v,U,[M],!1,Q);while(Object.keys(U).length>0){var S=this._getFromTo(v,U),T=S[0],x=S[1],p={};p[this._pointKey(T)]=T,this._findConnected(p,U,[T],!0,Q);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,x,T,v,U,Q,J);for(var t in p){var Q_=p[t];this._map[Q_[0]][Q_[1]]=Q,v[t]=Q_,delete U[t]}}w&&this._serviceCallback(w)},$._getFromTo=function(w,Q){var J=[0,0],q=[0,0],U,L=Object.keys(w),G=Object.keys(Q);for(var H=0;H<5;H++){if(L.length<G.length){var W=L;q=w[W[z.getUniformInt(0,W.length-1)]],J=this._getClosest(q,Q)}else{var j=G;J=Q[j[z.getUniformInt(0,j.length-1)]],q=this._getClosest(J,w)}if(U=(J[0]-q[0])*(J[0]-q[0])+(J[1]-q[1])*(J[1]-q[1]),U<64)break}return[J,q]},$._getClosest=function(w,Q){var J=null,q=null;for(var U in Q){var L=Q[U],G=(L[0]-w[0])*(L[0]-w[0])+(L[1]-w[1])*(L[1]-w[1]);if(q==null||G<q)q=G,J=L}return J},$._findConnected=function(w,Q,J,q,U){while(J.length>0){var L=J.splice(0,1)[0],G=void 0;if(this._options.topology==6)G=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else G=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var H=0;H<G.length;H++){var W=this._pointKey(G[H]);if(w[W]==null&&this._freeSpace(G[H][0],G[H][1],U)){if(w[W]=G[H],!q)delete Q[W];J.push(G[H])}}}},$._tunnelToConnected=function(w,Q,J,q,U,L){var G,H;if(Q[0]<w[0])G=Q,H=w;else G=w,H=Q;for(var W=G[0];W<=H[0];W++){this._map[W][G[1]]=U;var j=[W,G[1]],M=this._pointKey(j);J[M]=j,delete q[M]}if(L&&G[0]<H[0])L(G,[H[0],G[1]]);var b=H[0];if(Q[1]<w[1])G=Q,H=w;else G=w,H=Q;for(var v=G[1];v<H[1];v++){this._map[b][v]=U;var S=[b,v],T=this._pointKey(S);J[T]=S,delete q[T]}if(L&&G[1]<H[1])L([H[0],G[1]],[H[0],H[1]])},$._tunnelToConnected6=function(w,Q,J,q,U,L){var G,H;if(Q[0]<w[0])G=Q,H=w;else G=w,H=Q;var W=G[0],j=G[1];while(!(W==H[0]&&j==H[1])){var M=2;if(j<H[1])j++,M=1;else if(j>H[1])j--,M=1;if(W<H[0])W+=M;else if(W>H[0])W-=M;else if(H[1]%2)W-=M;else W+=M;this._map[W][j]=U;var b=[W,j],v=this._pointKey(b);J[v]=b,delete q[v]}if(L)L(Q,w)},$._freeSpace=function(w,Q,J){return w>=0&&w<this._width&&Q>=0&&Q<this._height&&this._map[w][Q]==J},$._pointKey=function(w){return w[0]+"."+w[1]},X}(p_),D6={room:P1,corridor:a1},F6=function(B){w_(X,B);function X(V,w,Q){var J;if(Q===void 0)Q={};return J=B.call(this,V,w)||this,J._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),J._features={room:4,corridor:4},J._map=[],J._featureAttempts=20,J._walls={},J._dug=0,J._digCallback=J._digCallback.bind(y_(J)),J._canBeDugCallback=J._canBeDugCallback.bind(y_(J)),J._isWallCallback=J._isWallCallback.bind(y_(J)),J._priorityWallCallback=J._priorityWallCallback.bind(y_(J)),J}var $=X.prototype;return $.create=function(w){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var J=Date.now(),q;do{q=0;var U=Date.now();if(U-J>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var G=L.split(","),H=parseInt(G[0]),W=parseInt(G[1]),j=this._getDiggingDirection(H,W);if(!j)continue;var M=0;do if(M++,this._tryFeature(H,W,j[0],j[1])){this._removeSurroundingWalls(H,W),this._removeSurroundingWalls(H-j[0],W-j[1]);break}while(M<this._featureAttempts);for(var b in this._walls)if(this._walls[b]>1)q++}while(this._dug/Q<this._options.dugPercentage||q);if(this._addDoors(),w)for(var v=0;v<this._width;v++)for(var S=0;S<this._height;S++)w(v,S,this._map[v][S]);return this._walls={},this._map=[],this},$._digCallback=function(w,Q,J){if(J==0||J==2)this._map[w][Q]=0,this._dug++;else this._walls[w+","+Q]=1},$._isWallCallback=function(w,Q){if(w<0||Q<0||w>=this._width||Q>=this._height)return!1;return this._map[w][Q]==1},$._canBeDugCallback=function(w,Q){if(w<1||Q<1||w+1>=this._width||Q+1>=this._height)return!1;return this._map[w][Q]==1},$._priorityWallCallback=function(w,Q){this._walls[w+","+Q]=2},$._firstRoom=function(){var w=Math.floor(this._width/2),Q=Math.floor(this._height/2),J=P1.createRandomCenter(w,Q,this._options);this._rooms.push(J),J.create(this._digCallback)},$._findWall=function(){var w=[],Q=[];for(var J in this._walls){var q=this._walls[J];if(q==2)Q.push(J);else w.push(J)}var U=Q.length?Q:w;if(!U.length)return null;var L=z.getItem(U.sort());return delete this._walls[L],L},$._tryFeature=function(w,Q,J,q){var U=z.getWeightedValue(this._features),L=D6[U],G=L.createRandomAt(w,Q,J,q,this._options);if(!G.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(G.create(this._digCallback),G instanceof P1)this._rooms.push(G);if(G instanceof a1)G.createPriorityWalls(this._priorityWallCallback),this._corridors.push(G);return!0},$._removeSurroundingWalls=function(w,Q){var J=$_[4];for(var q=0;q<J.length;q++){var U=J[q],L=w+U[0],G=Q+U[1];delete this._walls[L+","+G],L=w+2*U[0],G=Q+2*U[1],delete this._walls[L+","+G]}},$._getDiggingDirection=function(w,Q){if(w<=0||Q<=0||w>=this._width-1||Q>=this._height-1)return null;var J=null,q=$_[4];for(var U=0;U<q.length;U++){var L=q[U],G=w+L[0],H=Q+L[1];if(!this._map[G][H]){if(J)return null;J=L}}if(!J)return null;return[-J[0],-J[1]]},$._addDoors=function(){var w=this._map;function Q(U,L){return w[U][L]==1}for(var J=0;J<this._rooms.length;J++){var q=this._rooms[J];q.clearDoors(),q.addDoors(Q)}},X}(F0);function R0(B,X,$){$[X[B+1]]=$[B],X[$[B]]=X[B+1],$[B]=B+1,X[B+1]=B}function P0(B,X,$){$[X[B]]=$[B],X[$[B]]=X[B],$[B]=B,X[B]=B}var j6=function(B){w_(X,B);function X(){return B.apply(this,arguments)||this}var $=X.prototype;return $.create=function(w){var Q=this._fillMap(1),J=Math.ceil((this._width-2)/2),q=0.375,U=[],L=[];for(var G=0;G<J;G++)U.push(G),L.push(G);U.push(J-1);var H;for(H=1;H+3<this._height;H+=2)for(var W=0;W<J;W++){var j=2*W+1,M=H;if(Q[j][M]=0,W!=U[W+1]&&z.getUniform()>q)R0(W,U,L),Q[j+1][M]=0;if(W!=U[W]&&z.getUniform()>q)P0(W,U,L);else Q[j][M+1]=0}for(var b=0;b<J;b++){var v=2*b+1,S=H;if(Q[v][S]=0,b!=U[b+1]&&(b==U[b]||z.getUniform()>q))R0(b,U,L),Q[v+1][S]=0;P0(b,U,L)}for(var T=0;T<this._width;T++)for(var x=0;x<this._height;x++)w(T,x,Q[T][x]);return this},X}(p_),R6=function(B){w_(X,B);function X(){var V=B.apply(this,arguments)||this;return V._stack=[],V._map=[],V}var $=X.prototype;return $.create=function(w){var Q=this._width,J=this._height;this._map=[];for(var q=0;q<Q;q++){this._map.push([]);for(var U=0;U<J;U++){var L=q==0||U==0||q+1==Q||U+1==J;this._map[q].push(L?1:0)}}this._stack=[[1,1,Q-2,J-2]],this._process();for(var G=0;G<Q;G++)for(var H=0;H<J;H++)w(G,H,this._map[G][H]);return this._map=[],this},$._process=function(){while(this._stack.length){var w=this._stack.shift();this._partitionRoom(w)}},$._partitionRoom=function(w){var Q=[],J=[];for(var q=w[0]+1;q<w[2];q++){var U=this._map[q][w[1]-1],L=this._map[q][w[3]+1];if(U&&L&&!(q%2))Q.push(q)}for(var G=w[1]+1;G<w[3];G++){var H=this._map[w[0]-1][G],W=this._map[w[2]+1][G];if(H&&W&&!(G%2))J.push(G)}if(!Q.length||!J.length)return;var j=z.getItem(Q),M=z.getItem(J);this._map[j][M]=1;var b=[],v=[];b.push(v);for(var S=w[0];S<j;S++)if(this._map[S][M]=1,S%2)v.push([S,M]);v=[],b.push(v);for(var T=j+1;T<=w[2];T++)if(this._map[T][M]=1,T%2)v.push([T,M]);v=[],b.push(v);for(var x=w[1];x<M;x++)if(this._map[j][x]=1,x%2)v.push([j,x]);v=[],b.push(v);for(var p=M+1;p<=w[3];p++)if(this._map[j][p]=1,p%2)v.push([j,p]);var i=z.getItem(b);for(var t=0;t<b.length;t++){var Q_=b[t];if(Q_==i)continue;var B_=z.getItem(Q_);this._map[B_[0]][B_[1]]=0}this._stack.push([w[0],w[1],j-1,M-1]),this._stack.push([j+1,w[1],w[2],M-1]),this._stack.push([w[0],M+1,j-1,w[3]]),this._stack.push([j+1,M+1,w[2],w[3]])},X}(p_),P6=function(B){w_(X,B);function X(V,w,Q){var J;if(Q===void 0)Q=0;return J=B.call(this,V,w)||this,J._regularity=Q,J._map=[],J}var $=X.prototype;return $.create=function(w){var Q=this._width,J=this._height,q=this._fillMap(1);Q-=Q%2?1:2,J-=J%2?1:2;var U=0,L=0,G=0,H=0,W=0,j=!1,M=[[0,0],[0,0],[0,0],[0,0]];do{if(U=1+2*Math.floor(z.getUniform()*(Q-1)/2),L=1+2*Math.floor(z.getUniform()*(J-1)/2),!W)q[U][L]=0;if(!q[U][L]){this._randomize(M);do{if(Math.floor(z.getUniform()*(this._regularity+1))==0)this._randomize(M);j=!0;for(var b=0;b<4;b++)if(G=U+M[b][0]*2,H=L+M[b][1]*2,this._isFree(q,G,H,Q,J)){q[G][H]=0,q[U+M[b][0]][L+M[b][1]]=0,U=G,L=H,j=!1,W++;break}}while(!j)}}while(W+1<Q*J/4);for(var v=0;v<this._width;v++)for(var S=0;S<this._height;S++)w(v,S,q[v][S]);return this._map=[],this},$._randomize=function(w){for(var Q=0;Q<4;Q++)w[Q][0]=0,w[Q][1]=0;switch(Math.floor(z.getUniform()*4)){case 0:w[0][0]=-1,w[1][0]=1,w[2][1]=-1,w[3][1]=1;break;case 1:w[3][0]=-1,w[2][0]=1,w[1][1]=-1,w[0][1]=1;break;case 2:w[2][0]=-1,w[3][0]=1,w[0][1]=-1,w[1][1]=1;break;case 3:w[1][0]=-1,w[0][0]=1,w[3][1]=-1,w[2][1]=1;break}},$._isFree=function(w,Q,J,q,U){if(Q<1||J<1||Q>=q||J>=U)return!1;return w[Q][J]},X}(p_),M6=function(B){w_(X,B);function X(V,w,Q){var J=B.call(this,V,w)||this;if(J.map=[],J.rooms=[],J.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=J._calculateRoomSize(J._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=J._calculateRoomSize(J._height,Q.cellHeight);return J._options=Q,J}var $=X.prototype;return $.create=function(w){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),w)for(var Q=0;Q<this._width;Q++)for(var J=0;J<this._height;J++)w(Q,J,this.map[Q][J]);return this},$._calculateRoomSize=function(w,Q){var J=Math.floor(w/Q*0.8),q=Math.floor(w/Q*0.25);if(q<2)q=2;if(J<2)J=2;return[q,J]},$._initRooms=function(){for(var w=0;w<this._options.cellWidth;w++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[w].push({x:0,y:0,width:0,height:0,connections:[],cellx:w,celly:Q})}},$._connectRooms=function(){var w=z.getUniformInt(0,this._options.cellWidth-1),Q=z.getUniformInt(0,this._options.cellHeight-1),J,q,U,L=!1,G,H,W;do{W=[0,2,4,6],W=z.shuffle(W);do{if(L=!1,J=W.pop(),q=w+$_[8][J][0],U=Q+$_[8][J][1],q<0||q>=this._options.cellWidth)continue;if(U<0||U>=this._options.cellHeight)continue;if(G=this.rooms[w][Q],G.connections.length>0){if(G.connections[0][0]==q&&G.connections[0][1]==U)break}if(H=this.rooms[q][U],H.connections.length==0)H.connections.push([w,Q]),this.connectedCells.push([q,U]),w=q,Q=U,L=!0}while(W.length>0&&L==!1)}while(W.length>0)},$._connectUnconnectedRooms=function(){var w=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=z.shuffle(this.connectedCells);var J,q,U;for(var L=0;L<this._options.cellWidth;L++)for(var G=0;G<this._options.cellHeight;G++)if(J=this.rooms[L][G],J.connections.length==0){var H=[0,2,4,6];H=z.shuffle(H),U=!1;do{var W=H.pop(),j=L+$_[8][W][0],M=G+$_[8][W][1];if(j<0||j>=w||M<0||M>=Q)continue;if(q=this.rooms[j][M],U=!0,q.connections.length==0)break;for(var b=0;b<q.connections.length;b++)if(q.connections[b][0]==L&&q.connections[b][1]==G){U=!1;break}if(U)break}while(H.length);if(U)J.connections.push([q.cellx,q.celly]);else console.log("-- Unable to connect room.")}},$._createRandomRoomConnections=function(){},$._createRooms=function(){var w=this._width,Q=this._height,J=this._options.cellWidth,q=this._options.cellHeight,U=Math.floor(this._width/J),L=Math.floor(this._height/q),G,H,W=this._options.roomWidth,j=this._options.roomHeight,M,b,v;for(var S=0;S<J;S++)for(var T=0;T<q;T++){if(M=U*S,b=L*T,M==0)M=1;if(b==0)b=1;if(G=z.getUniformInt(W[0],W[1]),H=z.getUniformInt(j[0],j[1]),T>0){v=this.rooms[S][T-1];while(b-(v.y+v.height)<3)b++}if(S>0){v=this.rooms[S-1][T];while(M-(v.x+v.width)<3)M++}var x=Math.round(z.getUniformInt(0,U-G)/2),p=Math.round(z.getUniformInt(0,L-H)/2);while(M+x+G>=w)if(x)x--;else G--;while(b+p+H>=Q)if(p)p--;else H--;M=M+x,b=b+p,this.rooms[S][T].x=M,this.rooms[S][T].y=b,this.rooms[S][T].width=G,this.rooms[S][T].height=H;for(var i=M;i<M+G;i++)for(var t=b;t<b+H;t++)this.map[i][t]=0}},$._getWallPosition=function(w,Q){var J,q,U;if(Q==1||Q==3){if(J=z.getUniformInt(w.x+1,w.x+w.width-2),Q==1)q=w.y-2,U=q+1;else q=w.y+w.height+1,U=q-1;this.map[J][U]=0}else{if(q=z.getUniformInt(w.y+1,w.y+w.height-2),Q==2)J=w.x+w.width+1,U=J-1;else J=w.x-2,U=J+1;this.map[U][q]=0}return[J,q]},$._drawCorridor=function(w,Q){var J=Q[0]-w[0],q=Q[1]-w[1],U=w[0],L=w[1],G,H,W,j,M=[],b=Math.abs(J),v=Math.abs(q),S=z.getUniform(),T=S,x=1-S;if(H=J>0?2:6,W=q>0?4:0,b<v)G=Math.ceil(v*T),M.push([W,G]),M.push([H,b]),G=Math.floor(v*x),M.push([W,G]);else G=Math.ceil(b*T),M.push([H,G]),M.push([W,v]),G=Math.floor(b*x),M.push([H,G]);this.map[U][L]=0;while(M.length>0){j=M.pop();while(j[1]>0)U+=$_[8][j[0]][0],L+=$_[8][j[0]][1],this.map[U][L]=0,j[1]=j[1]-1}},$._createCorridors=function(){var w=this._options.cellWidth,Q=this._options.cellHeight,J,q,U,L,G;for(var H=0;H<w;H++)for(var W=0;W<Q;W++){J=this.rooms[H][W];for(var j=0;j<J.connections.length;j++){if(q=J.connections[j],U=this.rooms[q[0]][q[1]],U.cellx>J.cellx)L=2,G=4;else if(U.cellx<J.cellx)L=4,G=2;else if(U.celly>J.celly)L=3,G=1;else L=1,G=3;this._drawCorridor(this._getWallPosition(J,L),this._getWallPosition(U,G))}}},X}(p_),O6={Arena:L6,Uniform:H6,Cellular:W6,Digger:F6,EllerMaze:j6,DividedMaze:R6,IceyMaze:P6,Rogue:M6},b6=function(){},v6=0.5*(Math.sqrt(3)-1),$1=(3-Math.sqrt(3))/6,C6=function(B){w_(X,B);function X(V){var w;if(V===void 0)V=256;w=B.call(this)||this,w._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var J=0;J<V;J++)Q.push(J);Q=z.shuffle(Q),w._perms=[],w._indexes=[];for(var q=0;q<2*V;q++)w._perms.push(Q[q%V]),w._indexes.push(w._perms[q]%w._gradients.length);return w}var $=X.prototype;return $.get=function(w,Q){var J=this._perms,q=this._indexes,U=J.length/2,L=0,G=0,H=0,W,j=(w+Q)*v6,M=Math.floor(w+j),b=Math.floor(Q+j),v=(M+b)*$1,S=M-v,T=b-v,x=w-S,p=Q-T,i,t;if(x>p)i=1,t=0;else i=0,t=1;var Q_=x-i+$1,B_=p-t+$1,f_=x-1+2*$1,i1=p-1+2*$1,e1=R(M,U),t1=R(b,U),U1=0.5-x*x-p*p;if(U1>=0){U1*=U1,W=q[e1+J[t1]];var O0=this._gradients[W];L=U1*U1*(O0[0]*x+O0[1]*p)}var X1=0.5-Q_*Q_-B_*B_;if(X1>=0){X1*=X1,W=q[e1+i+J[t1+t]];var b0=this._gradients[W];G=X1*X1*(b0[0]*Q_+b0[1]*B_)}var Y1=0.5-f_*f_-i1*i1;if(Y1>=0){Y1*=Y1,W=q[e1+1+J[t1+1]];var v0=this._gradients[W];H=Y1*Y1*(v0[0]*f_+v0[1]*i1)}return 70*(L+G+H)},X}(b6),k6={Simplex:C6},M0=function(){function B($,V,w,Q){if(Q===void 0)Q={};if(this._toX=$,this._toY=V,this._passableCallback=w,this._options=Object.assign({topology:8},Q),this._dirs=$_[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var X=B.prototype;return X._getNeighbors=function(V,w){var Q=[];for(var J=0;J<this._dirs.length;J++){var q=this._dirs[J],U=V+q[0],L=w+q[1];if(!this._passableCallback(U,L))continue;Q.push([U,L])}return Q},B}(),E6=function(B){w_(X,B);function X(V,w,Q,J){var q=B.call(this,V,w,Q,J)||this;return q._computed={},q._todo=[],q._add(V,w,null),q}var $=X.prototype;return $.compute=function(w,Q,J){var q=w+","+Q;if(!(q in this._computed))this._compute(w,Q);if(!(q in this._computed))return;var U=this._computed[q];while(U)J(U.x,U.y),U=U.prev},$._compute=function(w,Q){while(this._todo.length){var J=this._todo.shift();if(J.x==w&&J.y==Q)return;var q=this._getNeighbors(J.x,J.y);for(var U=0;U<q.length;U++){var L=q[U],G=L[0],H=L[1],W=G+","+H;if(W in this._computed)continue;this._add(G,H,J)}}},$._add=function(w,Q,J){var q={x:w,y:Q,prev:J};this._computed[w+","+Q]=q,this._todo.push(q)},X}(M0),A6=function(B){w_(X,B);function X(V,w,Q,J){var q;if(J===void 0)J={};return q=B.call(this,V,w,Q,J)||this,q._todo=[],q._done={},q}var $=X.prototype;return $.compute=function(w,Q,J){this._todo=[],this._done={},this._fromX=w,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var q=this._todo.shift(),U=q.x+","+q.y;if(U in this._done)continue;if(this._done[U]=q,q.x==w&&q.y==Q)break;var L=this._getNeighbors(q.x,q.y);for(var G=0;G<L.length;G++){var H=L[G],W=H[0],j=H[1],M=W+","+j;if(M in this._done)continue;this._add(W,j,q)}}var b=this._done[w+","+Q];if(!b)return;while(b)J(b.x,b.y),b=b.prev},$._add=function(w,Q,J){var q=this._distance(w,Q),U={x:w,y:Q,prev:J,g:J?J.g+1:0,h:q},L=U.g+U.h;for(var G=0;G<this._todo.length;G++){var H=this._todo[G],W=H.g+H.h;if(L<W||L==W&&q<H.h){this._todo.splice(G,0,U);return}}this._todo.push(U)},$._distance=function(w,Q){switch(this._options.topology){case 4:return Math.abs(w-this._fromX)+Math.abs(Q-this._fromY);case 6:var J=Math.abs(w-this._fromX),q=Math.abs(Q-this._fromY);return q+Math.max(0,(J-q)/2);case 8:return Math.max(Math.abs(w-this._fromX),Math.abs(Q-this._fromY))}},X}(M0),f6={Dijkstra:E6,AStar:A6},S6=function(){function B($){this._scheduler=$,this._lock=1}var X=B.prototype;return X.start=function(){return this.unlock()},X.lock=function(){return this._lock++,this},X.unlock=function(){if(!this._lock)throw Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var V=this._scheduler.next();if(!V)return this.lock();var w=V.act();if(w&&w.then)this.lock(),w.then(this.unlock.bind(this))}return this},B}(),N6=function(){function B($,V){if(V===void 0)V={};this._reflectivityCallback=$,this._options={},V=Object.assign({passes:1,emissionThreshold:100,range:10},V),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(V)}var X=B.prototype;return X.setOptions=function(V){if(Object.assign(this._options,V),V&&V.range)this.reset();return this},X.setFOV=function(V){return this._fov=V,this._fovCache={},this},X.setLight=function(V,w,Q){var J=V+","+w;if(Q)this._lights[J]=typeof Q=="string"?l(Q):Q;else delete this._lights[J];return this},X.clearLights=function(){this._lights={}},X.reset=function(){return this._reflectivityCache={},this._fovCache={},this},X.compute=function(V){var w={},Q={},J={};for(var q in this._lights){var U=this._lights[q];Q[q]=[0,0,0],o(Q[q],U)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(Q,J,w),L+1==this._options.passes)continue;Q=this._computeEmitters(J,w)}for(var G in J){var H=G.split(","),W=parseInt(H[0]),j=parseInt(H[1]);V(W,j,J[G])}return this},X._emitLight=function(V,w,Q){for(var J in V){var q=J.split(","),U=parseInt(q[0]),L=parseInt(q[1]);this._emitLightFromCell(U,L,V[J],w),Q[J]=1}return this},X._computeEmitters=function(V,w){var Q={};for(var J in V){if(J in w)continue;var q=V[J],U=void 0;if(J in this._reflectivityCache)U=this._reflectivityCache[J];else{var L=J.split(","),G=parseInt(L[0]),H=parseInt(L[1]);U=this._reflectivityCallback(G,H),this._reflectivityCache[J]=U}if(U==0)continue;var W=[0,0,0],j=0;for(var M=0;M<3;M++){var b=Math.round(q[M]*U);W[M]=b,j+=b}if(j>this._options.emissionThreshold)Q[J]=W}return Q},X._emitLightFromCell=function(V,w,Q,J){var q=V+","+w,U;if(q in this._fovCache)U=this._fovCache[q];else U=this._updateFOV(V,w);for(var L in U){var G=U[L],H=void 0;if(L in J)H=J[L];else H=[0,0,0],J[L]=H;for(var W=0;W<3;W++)H[W]+=Math.round(Q[W]*G)}return this},X._updateFOV=function(V,w){var Q=V+","+w,J={};this._fovCache[Q]=J;var q=this._options.range;function U(L,G,H,W){var j=L+","+G,M=W*(1-H/q);if(M==0)return;J[j]=M}return this._fov.compute(V,w,q,U.bind(this)),J},B}(),u6=f,g6=n,I6=Z6;_.Color=g6,_.DEFAULT_HEIGHT=n1,_.DEFAULT_WIDTH=r1,_.DIRS=$_,_.Display=s_,_.Engine=S6,_.EventQueue=D0,_.FOV=G6,_.KEYS=Q6,_.Lighting=N6,_.Map=O6,_.Noise=k6,_.Path=f6,_.RNG=z,_.Scheduler=U6,_.StringGenerator=K6,_.Text=I6,_.Util=u6,Object.defineProperty(_,"__esModule",{value:!0})})});function a_(_,Z,K){let z=o_(_,Z),Y=o_(_,K);if(z===null||Y===null)return 0;if(z===Y)return 1;else if(z.friendly.has(Y.name)||Y.friendly.has(z.name))return 1;else if(z.hostile.has(Y.name)||Y.hostile.has(z.name))return 2;else if(z.friendly.has("*")||Y.friendly.has("*"))return 1;else if(z.hostile.has("*")||Y.hostile.has("*"))return 2;return 0}function o_(_,Z){return(_.components.faction[Z]||{}).faction||null}function B1(_,Z,K){return _.components.faction[Z]={faction:K},_}class i_{name;description;energyDelta;constructor(_,Z,K=0){this.name=_,this.description=Z,this.energyDelta=K}}class G1{name;description;constructor(_,Z){this.name=_,this.description=Z}}class P_{key;description;constructor(_,Z){this.key=_,this.description=Z}}class b_{name;description;tooltip;icon;constructor(_,Z,K="",z){this.name=_,this.description=Z,this.tooltip=K,this.icon=z}}class G_{name;description;icon;color;energyMax;unlockCondition;constructor(_,Z,K,z=100){this.name=_,this.description=Z,this.icon=K,this.energyMax=z,this.color="white",this.unlockCondition=null}}class x_{name;description;color;friendly;hostile;constructor(_,Z,K,z,Y){this.name=_,this.description=Z,this.color=K,this.friendly=z,this.hostile=Y}}class J_{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(_,Z,K,z="cyberyellow",Y=0,D=0,R=0,O=0,P=0,C=[]){this.name=_,this.description=Z,this.icon=K,this.color=z,this.energyDelta=Y,this.matter=D,this.gold=R,this.damage=O,this.energyCost=P,this.effects=C}}class r{name;description;tooltip;icon;isBlocking;isSpace;isWater;energyDelta;constructor(_,Z,K="",z=null,Y={}){this.name=_,this.description=Z,this.tooltip=K,this.icon=z,this.isBlocking=Y.isBlocking||!1,this.isSpace=Y.isSpace||!1,this.isWater=Y.isWater||!1,this.energyDelta=Y.energyDelta||0}}var F={actions:{Drop:new i_("Drop","Drop current tool"),Enter:new i_("Enter","Enter a portal or plant atmosphere"),Launch:new i_("Launch","Launch into space",-10),Pickup:new i_("Pickup","Pickup an item or equip a tool"),Wait:new i_("Wait","Wait one turn in place")},ais:{aggrorange:new G1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new G1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new G1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new G1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",red:"#f00",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new P_("N","Move/interact/combat north"),E:new P_("E","Move/interact/combat east"),S:new P_("S","Move/interact/combat south"),W:new P_("W","Move/interact/combat west"),A:new P_("A","Primary action, confirm"),B:new P_("B","Take a break, cancel"),"1":new P_("1","Secondary action, first quick slot"),"2":new P_("2","Tertiary action, second quick slot"),M:new P_("M","Menu"),"#":new P_("#","Open prompt")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{BioAbsorber:new b_("BioAbsorber","Gain energy while on trees","[Bio Absorber]: Regenerates energy on trees","fx_ba"),GraffitiCleaner:new b_("GraffitiCleaner","Removes graffiti on contact","[Graffiti Cleaner]: Removes graffiti","fx_gc"),Recharger:new b_("Recharger","Doubles energy gained from chargepads","[Recharger]: Doubles energy gained from chargepads","fx_re"),Recuperation:new b_("Recuperation","Reduces tool energy cost","[Recuperation]: Reduces tool energy cost (max. -1)","fx_cu"),RockCrusher:new b_("RockCrusher","Mines rock","[Rock Crusher]: Enables rock mining","fx_rc"),Screwing:new b_("Screwing","Unscrews the sewer portal covers","[Screwing]: Opens sewer gates","fx_sc"),WallCrusher:new b_("WallCrusher","Tears down weak walls","[Wall Crusher]: Enables weak wall destruction","fx_wc"),WaterImmunity:new b_("WaterImmunity","No damage taken from water","[Water Immunity]: Prevents water damage","fx_wi"),WaterShield:new b_("WaterShield","Reduces damage taken from water","[Water Shield]: Reduces water damage","fx_ws")},entities:{movableboulder:new G_("Boulder","A movable rock","o",2),movablebox:new G_("Box","A movable box","x",2),Spirit:new G_("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new G_("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new G_("WorkBot","Basic factory worker","B"),Cleaner:new G_("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new G_("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new G_("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new G_("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new G_("Graffiti","Writing on the wall","zy",2),Valkyrie:new G_("Valkyrie","Airbourne war logistics","V",160),Pioneer:new G_("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new G_("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new x_("Critters","Small pests","cyberyellow",new Set,new Set(["*"])),Drifters:new x_("Drifters","Bots disconnected from a mothership/overmind","cybergreen",new Set,new Set(["Guardians","Workers"])),Enraged:new x_("Enraged","Always hostile faction","cybermagenta",new Set,new Set(["*"])),Spirits:new x_("Spirits","Default player faction","white",new Set,new Set),Pyrates:new x_("Pyrates","Default enemy faction","cybermagenta",new Set,new Set(["*"])),Guardians:new x_("Guardians","Bot station guardians","cybercyan",new Set,new Set(["Workers"])),Workers:new x_("Workers","Bot station workers","white",new Set,new Set(["Guardians"]))},items:{battery:new J_("Battery","Increases maximum energy","b","cyberyellow",10),chest:new J_("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new J_("Energy","Energy pack","e","cyberyellow",10),gold:new J_("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new J_("Goo","A minor matter source","goo","gray",0,1),junk:new J_("Junk","Broken bot","%","gray",0,1),matter:new J_("Matter","A pile of stuff","m","gray",0,100),mop:new J_("Mop","Removes graffiti from walls","im","cyberyellow",0,0,0,-10,-1,["GraffitiCleaner"]),cheat:new J_("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","RockCrusher","Screwing","WallCrusher","WaterShield"]),hammer:new J_("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["WallCrusher"]),pickaxe:new J_("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["RockCrusher"]),ratbite:new J_("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["WaterImmunity"]),shocker:new J_("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new J_("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["WaterShield"]),upgradeBioAbsorber:new J_("Bio Absorber Upgrade","Grants [BioAbsorber] effect","iu_ba","cyberyellow",0,0,0,0,0,["BioAbsorber"]),upgradeRecuperation:new J_("Recuperation Upgrade","Grants [Recuperation] effect","iu_cu","cyberyellow",0,0,0,0,0,["Recuperation"]),wrench:new J_("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:new r("void","Just nothing here","","."),voidtrue:new r("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new r("voidhidden","Looks like a wall, but isn't!","",".#"),water:new r("water","Rust and other dangers await","Water","~",{isWater:!0,energyDelta:-2}),watersewage:new r("watersewage","Rust, goo and other dangers await","Sewage Water","~~",{isWater:!0,energyDelta:-4}),drain:new r("drain","Drains gold, matter and some of your energy","Drain","*",{energyDelta:-5}),rock:new r("rock","Hidden treasures may await","Rock","'",{isBlocking:!0}),tree:new r("tree","Lots of trees make a forest","Tree","t"),wall:new r("wall","A strong wall","","#",{isBlocking:!0}),wallstatueaerobot:new r("wallstatueaerobot","A small statue looking like an AeroBot","","sa",{isBlocking:!0}),wallstatuecleaner:new r("wallstatuecleaner","A small statue looking like a Cleaner","","sc",{isBlocking:!0}),wallstatuepioneer:new r("wallstatuepioneer","A small statue looking like a Pioneer","","sp",{isBlocking:!0}),wallstatueworkbot:new r("wallstatueworkbot","A small statue looking like a WorkBot","","sb",{isBlocking:!0}),wallweak:new r("wallweak","A weakened wall","Weak Wall","+",{isBlocking:!0}),chargepad:new r("chargepad","Recharges energy and health","Chargepad","=",{energyDelta:2}),movenorth:new r("movenorth","Moves you north","","^^"),moveeast:new r("moveeast","Moves you east","",">>"),movesouth:new r("movesouth","Moves you south","","vv"),movewest:new r("movewest","Moves you west","","<<"),portal:new r("portal","Gateway to another map","Portal","O"),portalclosed:new r("portalclosed","Closed gateway to another map","Closed Portal","Oc",{isBlocking:!0}),portalhidden:new r("portalhidden","Hidden gateway to another map","","Oh"),portallauncher:new r("portallauncher","Launches into space","Launch to Space","Ol"),portalsewers:new r("portalsewers","Needs some tool to open","Sewer Gate","#~",{isBlocking:!0}),portalstartworkbot:new r("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB"),portalstartaerobot:new r("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA"),"_portalstart?":new r("_portalstart?","Not unlocked, yet!","?","O?"),spacerock:new r("spacerock","Mountains as seen from space, non-blocking!","","'s",{isSpace:!0}),spacetree:new r("spacetree","Forest as seen from space","","ts",{isSpace:!0}),spacewater:new r("spacewater","Water as seen from space, not dangerous!","","~s",{isSpace:!0}),spacevoid:new r("spacevoid","Void/ground as seen from space","",".s",{isSpace:!0}),spacevoidstarwhite:new r("spacevoidstarwhite","Space with a white background star","",".f"),spacevoidstaryellow:new r("spacevoidstaryellow","Space with a yellow background star","",".y"),star:new r("star","It's hot, really hot!","Star","§",{energyDelta:-100}),terminal:new r("terminal","A computer terminal","Terminal","$")},uitexts:{}};function k0(_){if(Object.hasOwn(F.dialogs,_))return F.dialogs[_];return`FIXME: ${_} needs localization!`}var d6=typeof window<"u"?window.innerWidth:0,r6=typeof window<"u"?window.innerHeight:0;var y={cameraWidth:Math.floor(d6/16),cameraHeight:Math.floor(r6/16),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:16,highlightFriendEnemy:!0,showUI:!0,showTooltip:!0,showEnergy:1,uiEffectsMaxDisplaySize:8,zoom:1};var M_={width:Math.floor(y.cameraWidth*(1/y.zoom)),height:Math.floor(y.cameraHeight*(1/y.zoom)),bg:"transparent",fontSize:Math.floor(y.fontSize*y.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function U_(_,Z){return _.chatLog.push(Z),_.chatLog=_.chatLog.slice(-y.chatLogMaxSize),_}function m_(_,Z){let K=_.components.position[Z];if(K)A0(_,Z,K.mapId,K.x,K.y);if(_.entities[Z])_.entities[Z]=void 0,delete _.entities[Z];for(let z of Object.values(_.components))delete z[Z];return _.effects[Z]=void 0,delete _.effects[Z],_}function e_(_,Z,K){let z=_.components.position[Z];if(z)A0(_,Z,z.mapId,z.x,z.y);return _.components.position[Z]={...K},n6(_,Z,K.mapId,K.x,K.y),_}function n6(_,Z,K,z,Y){if(!_.cache.entitiesByMap[K])_.cache.entitiesByMap[K]=new Set;_.cache.entitiesByMap[K].add(Z);let D=`${K},${z},${Y}`;if(!_.cache.entitiesByLocation[D])_.cache.entitiesByLocation[D]=new Set;_.cache.entitiesByLocation[D].add(Z)}function A0(_,Z,K,z,Y){if(_.cache.entitiesByMap[K])_.cache.entitiesByMap[K].delete(Z);let D=`${K},${z},${Y}`;if(_.cache.entitiesByLocation[D])_.cache.entitiesByLocation[D].delete(Z)}function t_(_,Z){let K=_.cache.entitiesByMap[Z];if(K)return Array.from(K);return[]}function _1(_,Z){let K=`${Z.mapId},${Z.x},${Z.y}`,z=_.cache.entitiesByLocation[K];if(z)return Array.from(z);return[]}function f0(_,Z){for(let K=0;K<Z.length;K++){let z=Z[K],Y=_.components.collision[z];if(Y&&Y.collides)return z}return null}function w0(_,Z,K){_.components.type[Z]={type:K};let z=_.components.energy[Z];if(z)z.current=K.energyMax,z.max=K.energyMax;let Y=_.components.currency[Z];if(Y)Y.gold=0,Y.matter=0;if(!v_(_,Z)){let D={tool:null};_.components.inventory[Z]=D}return _.effects[Z]={},_}function S0(_,Z,K){if(Z===K)return _;let z=a_(_,Z,K);if(z===1||L1(_,K)){if(_.components.dialog[K]?.dialog){let Y=_.components.type[K]?.type,D=_.components.name[K]?.name?_.components.name[K].name:Y.name;if(_=U_(_,D+": "+k0(_.components.dialog[K].dialog)),_.components.interaction[K])_.components.interaction[K].interactions++}}else if(z===2)_._combatQueue.push({entityId:Z,otherEntityId:K});if(_.components.interaction[K]?.interactions>=3&&_.components.ai[K]?.type===F.ais.interactenrage)_=B1(_,K,F.factions.Enraged);return _}function L1(_,Z){let K=_.components.type[Z]?.type;return K===F.entities.Graffiticyan||K===F.entities.Graffitimagenta||K===F.entities.Graffitiyellow}function N0(_,Z){return _.components.type[Z]?.type instanceof J_}function Z0(_){return _===F.entities.movableboulder||_===F.entities.movablebox}function v_(_,Z){let K=_.components.type[Z]?.type;return!!K&&Z0(K)}function u0(_){let Z;if(_._idManager.freeIds.length>0)Z=_._idManager.freeIds.pop();else Z=_._idManager.nextId++;return _._idManager.usedIds.add(Z),Z}function s6(_,Z,K,z){if(K==="position")e_(_,Z,z);else _.components[K][Z]=z}class O1{entityId;componentsToAdd=new Map;state;constructor(_,Z){this.state=_,this.entityId=Z??u0(_).toString()}getEntityId(){return this.entityId}with(_,Z){return this.componentsToAdd.set(_,Z),this}build(){if(this.state.entities[this.entityId]=!0,!this.state.effects[this.entityId])this.state.effects[this.entityId]={};for(let[_,Z]of this.componentsToAdd.entries())s6(this.state,this.entityId,_,Z);return this.entityId}}function L_(){return"player"}/*!
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
 */var o6=function(_){var Z={};function K(z){if(Z[z])return Z[z].exports;var Y=Z[z]={i:z,l:!1,exports:{}};return _[z].call(Y.exports,Y,Y.exports,K),Y.l=!0,Y.exports}return K.m=_,K.c=Z,K.d=function(z,Y,D){K.o(z,Y)||Object.defineProperty(z,Y,{enumerable:!0,get:D})},K.r=function(z){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(z,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(z,"__esModule",{value:!0})},K.t=function(z,Y){if(1&Y&&(z=K(z)),8&Y)return z;if(4&Y&&typeof z=="object"&&z&&z.__esModule)return z;var D=Object.create(null);if(K.r(D),Object.defineProperty(D,"default",{enumerable:!0,value:z}),2&Y&&typeof z!="string")for(var R in z)K.d(D,R,function(O){return z[O]}.bind(null,R));return D},K.n=function(z){var Y=z&&z.__esModule?function(){return z.default}:function(){return z};return K.d(Y,"a",Y),Y},K.o=function(z,Y){return Object.prototype.hasOwnProperty.call(z,Y)},K.p="/bin/",K(K.s=0)}([function(_,Z,K){var z={},Y=K(1),D=K(2),R=K(3);_.exports=z;var O=1;z.js=function(){var P,C,f,g=!1,I={},c={},l={},d={},o=!0,z_={},V_=[],X_=Number.MAX_VALUE,K_=!1;this.setAcceptableTiles=function(N){N instanceof Array?f=N:!isNaN(parseFloat(N))&&isFinite(N)&&(f=[N])},this.enableSync=function(){g=!0},this.disableSync=function(){g=!1},this.enableDiagonals=function(){K_=!0},this.disableDiagonals=function(){K_=!1},this.setGrid=function(N){P=N;for(var A=0;A<P.length;A++)for(var k=0;k<P[0].length;k++)c[P[A][k]]||(c[P[A][k]]=1)},this.setTileCost=function(N,A){c[N]=A},this.setAdditionalPointCost=function(N,A,k){l[A]===void 0&&(l[A]={}),l[A][N]=k},this.removeAdditionalPointCost=function(N,A){l[A]!==void 0&&delete l[A][N]},this.removeAllAdditionalPointCosts=function(){l={}},this.setDirectionalCondition=function(N,A,k){d[A]===void 0&&(d[A]={}),d[A][N]=k},this.removeAllDirectionalConditions=function(){d={}},this.setIterationsPerCalculation=function(N){X_=N},this.avoidAdditionalPoint=function(N,A){I[A]===void 0&&(I[A]={}),I[A][N]=1},this.stopAvoidingAdditionalPoint=function(N,A){I[A]!==void 0&&delete I[A][N]},this.enableCornerCutting=function(){o=!0},this.disableCornerCutting=function(){o=!1},this.stopAvoidingAllAdditionalPoints=function(){I={}},this.findPath=function(N,A,k,n,e){var __=function(I_){g?e(I_):setTimeout(function(){e(I_)})};if(f===void 0)throw Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(P===void 0)throw Error("You can't set a path without first calling setGrid() on EasyStar.");if(N<0||A<0||k<0||n<0||N>P[0].length-1||A>P.length-1||k>P[0].length-1||n>P.length-1)throw Error("Your start or end point is outside the scope of your grid.");if(N!==k||A!==n){for(var H_=P[n][k],q_=!1,A_=0;A_<f.length;A_++)if(H_===f[A_]){q_=!0;break}if(q_!==!1){var Y_=new Y;Y_.openList=new R(function(I_,n_){return I_.bestGuessDistance()-n_.bestGuessDistance()}),Y_.isDoneCalculating=!1,Y_.nodeHash={},Y_.startX=N,Y_.startY=A,Y_.endX=k,Y_.endY=n,Y_.callback=__,Y_.openList.push(s(Y_,Y_.startX,Y_.startY,null,1));var z1=O++;return z_[z1]=Y_,V_.push(z1),z1}__(null)}else __([])},this.cancelPath=function(N){return N in z_&&(delete z_[N],!0)},this.calculate=function(){if(V_.length!==0&&P!==void 0&&f!==void 0)for(C=0;C<X_;C++){if(V_.length===0)return;g&&(C=0);var N=V_[0],A=z_[N];if(A!==void 0)if(A.openList.size()!==0){var k=A.openList.pop();if(A.endX!==k.x||A.endY!==k.y)k.list=0,k.y>0&&E(A,k,0,-1,1*m(k.x,k.y-1)),k.x<P[0].length-1&&E(A,k,1,0,1*m(k.x+1,k.y)),k.y<P.length-1&&E(A,k,0,1,1*m(k.x,k.y+1)),k.x>0&&E(A,k,-1,0,1*m(k.x-1,k.y)),K_&&(k.x>0&&k.y>0&&(o||u(P,f,k.x,k.y-1,k)&&u(P,f,k.x-1,k.y,k))&&E(A,k,-1,-1,1.4*m(k.x-1,k.y-1)),k.x<P[0].length-1&&k.y<P.length-1&&(o||u(P,f,k.x,k.y+1,k)&&u(P,f,k.x+1,k.y,k))&&E(A,k,1,1,1.4*m(k.x+1,k.y+1)),k.x<P[0].length-1&&k.y>0&&(o||u(P,f,k.x,k.y-1,k)&&u(P,f,k.x+1,k.y,k))&&E(A,k,1,-1,1.4*m(k.x+1,k.y-1)),k.x>0&&k.y<P.length-1&&(o||u(P,f,k.x,k.y+1,k)&&u(P,f,k.x-1,k.y,k))&&E(A,k,-1,1,1.4*m(k.x-1,k.y+1)));else{var n=[];n.push({x:k.x,y:k.y});for(var e=k.parent;e!=null;)n.push({x:e.x,y:e.y}),e=e.parent;n.reverse();var __=n;A.callback(__),delete z_[N],V_.shift()}}else A.callback(null),delete z_[N],V_.shift();else V_.shift()}};var E=function(N,A,k,n,e){var __=A.x+k,H_=A.y+n;if((I[H_]===void 0||I[H_][__]===void 0)&&u(P,f,__,H_,A)){var q_=s(N,__,H_,A,e);q_.list===void 0?(q_.list=1,N.openList.push(q_)):A.costSoFar+e<q_.costSoFar&&(q_.costSoFar=A.costSoFar+e,q_.parent=A,N.openList.updateItem(q_))}},u=function(N,A,k,n,e){var __=d[n]&&d[n][k];if(__){var H_=h(e.x-k,e.y-n);if(!function(){for(var A_=0;A_<__.length;A_++)if(__[A_]===H_)return!0;return!1}())return!1}for(var q_=0;q_<A.length;q_++)if(N[n][k]===A[q_])return!0;return!1},h=function(N,A){if(N===0&&A===-1)return z.TOP;if(N===1&&A===-1)return z.TOP_RIGHT;if(N===1&&A===0)return z.RIGHT;if(N===1&&A===1)return z.BOTTOM_RIGHT;if(N===0&&A===1)return z.BOTTOM;if(N===-1&&A===1)return z.BOTTOM_LEFT;if(N===-1&&A===0)return z.LEFT;if(N===-1&&A===-1)return z.TOP_LEFT;throw Error("These differences are not valid: "+N+", "+A)},m=function(N,A){return l[A]&&l[A][N]||c[P[A][N]]},s=function(N,A,k,n,e){if(N.nodeHash[k]!==void 0){if(N.nodeHash[k][A]!==void 0)return N.nodeHash[k][A]}else N.nodeHash[k]={};var __=a(A,k,N.endX,N.endY);if(n!==null)var H_=n.costSoFar+e;else H_=0;var q_=new D(n,A,k,H_,__);return N.nodeHash[k][A]=q_,q_},a=function(N,A,k,n){var e,__;return K_?(e=Math.abs(N-k))<(__=Math.abs(A-n))?1.4*e+__:1.4*__+e:(e=Math.abs(N-k))+(__=Math.abs(A-n))}},z.TOP="TOP",z.TOP_RIGHT="TOP_RIGHT",z.RIGHT="RIGHT",z.BOTTOM_RIGHT="BOTTOM_RIGHT",z.BOTTOM="BOTTOM",z.BOTTOM_LEFT="BOTTOM_LEFT",z.LEFT="LEFT",z.TOP_LEFT="TOP_LEFT"},function(_,Z){_.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(_,Z){_.exports=function(K,z,Y,D,R){this.parent=K,this.x=z,this.y=Y,this.costSoFar=D,this.simpleDistanceToTarget=R,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(_,Z,K){_.exports=K(4)},function(_,Z,K){var z,Y,D;(function(){var R,O,P,C,f,g,I,c,l,d,o,z_,V_,X_,K_;P=Math.floor,d=Math.min,O=function(E,u){return E<u?-1:E>u?1:0},l=function(E,u,h,m,s){var a;if(h==null&&(h=0),s==null&&(s=O),h<0)throw Error("lo must be non-negative");for(m==null&&(m=E.length);h<m;)s(u,E[a=P((h+m)/2)])<0?m=a:h=a+1;return[].splice.apply(E,[h,h-h].concat(u)),u},g=function(E,u,h){return h==null&&(h=O),E.push(u),X_(E,0,E.length-1,h)},f=function(E,u){var h,m;return u==null&&(u=O),h=E.pop(),E.length?(m=E[0],E[0]=h,K_(E,0,u)):m=h,m},c=function(E,u,h){var m;return h==null&&(h=O),m=E[0],E[0]=u,K_(E,0,h),m},I=function(E,u,h){var m;return h==null&&(h=O),E.length&&h(E[0],u)<0&&(u=(m=[E[0],u])[0],E[0]=m[1],K_(E,0,h)),u},C=function(E,u){var h,m,s,a,N,A;for(u==null&&(u=O),N=[],m=0,s=(a=function(){A=[];for(var k=0,n=P(E.length/2);0<=n?k<n:k>n;0<=n?k++:k--)A.push(k);return A}.apply(this).reverse()).length;m<s;m++)h=a[m],N.push(K_(E,h,u));return N},V_=function(E,u,h){var m;if(h==null&&(h=O),(m=E.indexOf(u))!==-1)return X_(E,0,m,h),K_(E,m,h)},o=function(E,u,h){var m,s,a,N,A;if(h==null&&(h=O),!(s=E.slice(0,u)).length)return s;for(C(s,h),a=0,N=(A=E.slice(u)).length;a<N;a++)m=A[a],I(s,m,h);return s.sort(h).reverse()},z_=function(E,u,h){var m,s,a,N,A,k,n,e,__;if(h==null&&(h=O),10*u<=E.length){if(!(a=E.slice(0,u).sort(h)).length)return a;for(s=a[a.length-1],N=0,k=(n=E.slice(u)).length;N<k;N++)h(m=n[N],s)<0&&(l(a,m,0,null,h),a.pop(),s=a[a.length-1]);return a}for(C(E,h),__=[],A=0,e=d(u,E.length);0<=e?A<e:A>e;0<=e?++A:--A)__.push(f(E,h));return __},X_=function(E,u,h,m){var s,a,N;for(m==null&&(m=O),s=E[h];h>u&&m(s,a=E[N=h-1>>1])<0;)E[h]=a,h=N;return E[h]=s},K_=function(E,u,h){var m,s,a,N,A;for(h==null&&(h=O),s=E.length,A=u,a=E[u],m=2*u+1;m<s;)(N=m+1)<s&&!(h(E[m],E[N])<0)&&(m=N),E[u]=E[m],m=2*(u=m)+1;return E[u]=a,X_(E,A,u,h)},R=function(){function E(u){this.cmp=u!=null?u:O,this.nodes=[]}return E.push=g,E.pop=f,E.replace=c,E.pushpop=I,E.heapify=C,E.updateItem=V_,E.nlargest=o,E.nsmallest=z_,E.prototype.push=function(u){return g(this.nodes,u,this.cmp)},E.prototype.pop=function(){return f(this.nodes,this.cmp)},E.prototype.peek=function(){return this.nodes[0]},E.prototype.contains=function(u){return this.nodes.indexOf(u)!==-1},E.prototype.replace=function(u){return c(this.nodes,u,this.cmp)},E.prototype.pushpop=function(u){return I(this.nodes,u,this.cmp)},E.prototype.heapify=function(){return C(this.nodes,this.cmp)},E.prototype.updateItem=function(u){return V_(this.nodes,u,this.cmp)},E.prototype.clear=function(){return this.nodes=[]},E.prototype.empty=function(){return this.nodes.length===0},E.prototype.size=function(){return this.nodes.length},E.prototype.clone=function(){var u;return(u=new E).nodes=this.nodes.slice(0),u},E.prototype.toArray=function(){return this.nodes.slice(0)},E.prototype.insert=E.prototype.push,E.prototype.top=E.prototype.peek,E.prototype.front=E.prototype.peek,E.prototype.has=E.prototype.contains,E.prototype.copy=E.prototype.clone,E}(),Y=[],(D=typeof(z=function(){return R})=="function"?z.apply(Z,Y):z)===void 0||(_.exports=D)}).call(this)}]);function g0(_,Z,K,z,Y){let D=new o6.js;D.setGrid(_),D.setAcceptableTiles([0]),D.enableSync();let R=null;return D.findPath(Z,K,z,Y,function(O){R=O}),D.calculate(),R}function b1(_,Z){let K={A:F.actions.Wait,B:F.actions.Wait},z=_.components.energy[Z];if(!!_.lastSpacePositionByEntity[Z]&&z.current>Math.abs(F.actions.Launch.energyDelta))K.A=F.actions.Launch;let Y=_.components.position[Z],R=_.maps[Y.mapId].getTile(Y.x,Y.y);if(!!R.options.mapId&&"x"in R.options&&"y"in R.options)K.A=F.actions.Enter;return K}function I0(_,Z){return Object.values(_.effects[Z])}function D_(_,Z,K){return!!_.effects[Z]&&Object.hasOwn(_.effects[Z],K.name)}function T0(_){return _}function h0(_,Z){if(Z.oldEquippedItem){let K=Z.oldEquippedItem;for(let z of K.effects){let Y=F.effects[z];if(!!_.effects[Z.entityId][Y.name]&&_.effects[Z.entityId][Y.name].source===K)delete _.effects[Z.entityId][Y.name]}}if(Z.newEquippedItem){let K=Z.newEquippedItem;for(let z of K.effects){let Y=F.effects[z];_.effects[Z.entityId][Y.name]={type:Y,source:K}}}return _}function x0(_,Z){let K=Z.type;for(let z of K.effects)_.effects[Z.entityId][z]={type:F.effects[z]};return _}function w1(_,Z,K){let z=_._eventSubscribers[Z];if(z)for(let Y=0;Y<z.length;Y++){let D=z[Y];_=D(_,K)}return _}function Z1(_,Z,K){if(Z in _._eventSubscribers);else _._eventSubscribers[Z]=[];return _._eventSubscribers[Z].push(K),_}function Q0(_,Z,K){return Q1(_,Z,K),_}function l0(_,Z,K){return y0(_,Z,K),_}function H1(_,Z,K,z,Y){return d0(_,Z,K,z,Y),_}function c0(_,Z){let K=_1(_,Z);for(let z of K)if(_.components.pickupable[z])return z;return null}function v1(_,Z){return _.components.inventory[Z]?.tool}function p0(_,Z,K){let z=_.components.type[K]?.type;if(v_(_,Z))return _;if(!i6(_,Z,K))return _;if(a6(_,K))_=J0(_,Z,z);else{let R=_.components.energy[K];if(z===F.items.battery){let P=_.components.energy[Z];if(P&&R)P.max+=R.current}if(R)_._energyQueue.push({entityId:Z,energyDelta:R.current});if(Z.startsWith("player"))_=U_(_,`Picked up ${z.name}.`);let O={entityId:Z,type:z};_=w1(_,2,O)}let Y=_.components.currency[Z],D=_.components.currency[K];if(Y&&D)Y.gold+=D.gold,Y.matter+=D.matter;return m_(_,K),_}function J0(_,Z,K){let z=_.components.inventory[Z]?.tool,Y=null;if(K){if(Y=K,_.components.inventory[Z].tool=Y,Z.startsWith("player"))_=U_(_,`Equipped ${K.name}.`)}else if(z){let R=z;if(_.components.inventory[Z].tool=Y,Z.startsWith("player"))_=U_(_,`Unequipped ${R}.`)}let D={entityId:Z,oldEquippedItem:z,newEquippedItem:Y};return _=w1(_,1,D),_}function a6(_,Z){let K=_.components.type[Z]?.type;if(K)return K.energyCost<0;return!1}function i6(_,Z,K){let z=_.components.currency[Z],Y=_.components.currency[K];if(!z||!Y)return!1;return z.gold+Y.gold>=0&&z.matter+Y.matter>=0}function S_(_,Z){return _.components.position[Z]}function s0(_,Z,K){switch(K){case F.commands.N:_=F_(_,Z,0,-1);break;case F.commands.W:_=F_(_,Z,-1,0);break;case F.commands.S:_=F_(_,Z,0,1);break;case F.commands.E:_=F_(_,Z,1,0);break;case F.commands.A:_=r0(_,Z,F.commands.A);break;case F.commands.B:_=r0(_,Z,F.commands.B);break;default:}return _}function F_(_,Z,K,z,Y=0){let D=S_(_,Z),R=_.maps[D.mapId],O=_1(_,{mapId:R.id,x:D.x+K,y:D.y+z}),P=f0(_,O),C=_.components.inventory[Z];if(P)if(v_(_,P)){if(!v_(_,Z)&&Y<1)_=F_(_,P,K,z,Y++),_=F_(_,Z,K,z,Y++)}else{let f=C?.tool;if(L1(_,P)&&D_(_,Z,F.effects.GraffitiCleaner)){let g=_.components.type[P]?.type,I=_.components.name[P]?.name??g?.name??"Graffiti";_=U_(_,`${I} destroyed.`),m_(_,P),_._energyQueue.push({entityId:Z,energyDelta:V0(_,Z,f)})}else _=S0(_,Z,P)}else if(t6(_,R,Z,K,z))_=n0(_,R,Z,K,z),_._energyQueue.push({entityId:Z,energyDelta:-1*Y});else if(_8(_,R,Z,K,z)){let f=R.setTile(D.x+K,D.y+z,F.tiles.void),g={mapId:R.id,x:D.x+K,y:D.y+z};if(f.type===F.tiles.rock){let I=_.rng.getPercentage();if(I<=1)_=Q0(_,F.items.matter,g);else if(I<=34)_=Q0(_,F.items.junk,g)}_._energyQueue.push({entityId:Z,energyDelta:V0(_,Z,C?.tool)})}else if(w8(_,R,Z,K,z))_=n0(_,R,Z,K,z),_._energyQueue.push({entityId:Z,energyDelta:V0(_,Z,C?.tool)});return _}function V0(_,Z,K){let z=K.energyCost;if(D_(_,Z,F.effects.Recuperation))z=Math.min(-1,z+1);return z}function r0(_,Z,K){let Y=b1(_,Z)[K.key],D=S_(_,Z),O=_.maps[D.mapId].getTile(D.x,D.y);switch(Y){case F.actions.Enter:_=o0(_,Z,O);break;case F.actions.Launch:_=e6(_,Z,O);case F.actions.Wait:break;default:}return _}function n0(_,Z,K,z,Y){let D=S_(_,K),R={...D,x:D.x+z,y:D.y+Y};_=e_(_,K,R);let O=c0(_,R);if(O)_=p0(_,K,O);let P=Z.getTile(R.x,R.y);if(P.type.name.startsWith("portal"))_=o0(_,K,P);if(P.type.name.startsWith("move"))switch(P.type.name){case"movenorth":_=F_(_,K,0,-1);break;case"moveeast":_=F_(_,K,1,0);break;case"movesouth":_=F_(_,K,0,1);break;case"movewest":_=F_(_,K,-1,0);break;default:}return _}function o0(_,Z,K){let z=S_(_,Z);if(Z.startsWith("player"))_.currentMapId=K.options.mapId;if(K.type.isSpace)_.lastSpacePositionByEntity[Z]={mapId:z.mapId,x:z.x,y:z.y};else _.lastSpacePositionByEntity[Z]=void 0,delete _.lastSpacePositionByEntity[Z];let Y={entityId:Z,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:K.type,newMapId:K.options.mapId,newX:K.options.x,newY:K.options.y},D={...z,mapId:K.options.mapId,x:K.options.x,y:K.options.y};return _=e_(_,Z,D),_=w1(_,0,Y),_}function e6(_,Z,K){let z=S_(_,Z);if(_.lastSpacePositionByEntity[Z]){if(Z.startsWith("player"))_.currentMapId=_.lastSpacePositionByEntity[Z].mapId;let Y={entityId:Z,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:K.type,newMapId:_.lastSpacePositionByEntity[Z].mapId,newX:_.lastSpacePositionByEntity[Z].x,newY:_.lastSpacePositionByEntity[Z].y},D={...z,mapId:Y.newMapId,x:Y.newX,y:Y.newY};_=e_(_,Z,D),_._energyQueue.push({entityId:Z,energyDelta:F.actions.Launch.energyDelta}),_.lastSpacePositionByEntity[Z]=void 0,delete _.lastSpacePositionByEntity[Z],_=w1(_,0,Y)}return _}function a0(_){for(let Z in _.entities){let K=S_(_,Z),Y=_.maps[K.mapId].getTile(K.x,K.y),D=Y.type.energyDelta;if(Y.type===F.tiles.chargepad&&D_(_,Z,F.effects.Recharger))D*=2;else if(Y.type===F.tiles.tree&&D_(_,Z,F.effects.BioAbsorber))D=1;else if(Y.type.isWater&&D_(_,Z,F.effects.WaterImmunity))D=0;else if(Y.type.isWater&&D_(_,Z,F.effects.WaterShield))D/=2;else if(Y.type===F.tiles.drain){let R=_.components.currency[Z];if(R){let O=Math.min(R.gold,F.constants.DRAIN_GOLD_COST),P=Math.min(R.matter,F.constants.DRAIN_MATTER_COST);R.gold-=O,R.matter-=P}}if(D!==0)_._energyQueue.push({entityId:Z,energyDelta:D})}return _}function i0(_,Z){switch(Z.oldTileType){case F.tiles.portalstartaerobot:_=w0(_,Z.entityId,F.entities.AeroBot),_=B1(_,Z.entityId,F.factions.Workers),_=U_(_,`Booting up as an ${F.entities.AeroBot.name}...`);break;case F.tiles.portalstartworkbot:_=w0(_,Z.entityId,F.entities.WorkBot),_=B1(_,Z.entityId,F.factions.Workers),_=U_(_,`Booting up as a ${F.entities.WorkBot.name}...`);break;default:}return _}function t6(_,Z,K,z,Y){let D=S_(_,K),R=D.x+z,O=D.y+Y,P=Z.getTile(R,O).type;return R>=0&&R<Z.widthTiles&&O>=0&&O<Z.heightTiles&&!P.isBlocking}function _8(_,Z,K,z,Y){let D=S_(_,K),R=D.x+z,O=D.y+Y,P=Z.getTile(R,O).type;return D_(_,K,F.effects.WallCrusher)&&P===F.tiles.wallweak||D_(_,K,F.effects.RockCrusher)&&P===F.tiles.rock}function w8(_,Z,K,z,Y){let D=S_(_,K),R=D.x+z,O=D.y+Y,P=Z.getTile(R,O).type;return D_(_,K,F.effects.Screwing)&&P===F.tiles.portalsewers}function e0(_,Z,K,z){return Math.abs(_-K)+Math.abs(Z-z)}function J1(_){return[...Array(_).keys()]}class C1{width;height;data;constructor(_,Z,K){this.width=_;this.height=Z;this.data=Array(this.width*this.height).fill(K)}isValid(_,Z){return _>=0&&_<this.width&&Z>=0&&Z<this.height}get(_,Z){if(!this.isValid(_,Z))return null;return this.data[Z*this.width+_]}set(_,Z,K){if(!this.isValid(_,Z))return;this.data[Z*this.width+_]=K}}function t0(_){let Z=Z8(_),K=L_();if(!_.entities[K])return _;let z=_.components.position[K];for(let Y=0;Y<Z.length;Y++){let D=Z[Y];if(K===D)continue;let R=_.components.ai[D],O=_.components.position[D];if(R._pathCache.playerX!==z.x||R._pathCache.playerY!==z.y||R._pathCache.entityX!==O.x||R._pathCache.entityY!==O.y)R._pathCache={};let P=e0(z.x,z.y,O.x,O.y);if(a_(_,K,D)===2&&P<=R.aggroRange)if(R._pathCache.path)R.path=R._pathCache.path;else{let C=_.maps[_.currentMapId].asMovementMap(),f=g0(C,O.x,O.y,z.x,z.y);if(f){if(f=f.slice(1),f.length>P)f=null}R.path=f,R._pathCache={playerX:z.x,playerY:z.y,entityX:O.x,entityY:O.y,path:f}}}for(let Y=0;Y<Z.length;Y++){let D=Z[Y],R=_.components.ai[D];if(R.path){let O=R.path[0],P=_.components.position[D],C=O.x-P.x,f=O.y-P.y;_=F_(_,D,C,f)}}return _}function Z8(_){let Z=t_(_,_.currentMapId),K=[];for(let z=0;z<Z.length;z++){let Y=Z[z];if(_.components.ai[Y])K.push(Y)}return K}function _w(_,Z){let K=8;switch(_){case F.ais.aggrorange:K=8;break;case F.ais.aggrorangeshort:K=2;break;case F.ais.guardian:K=1;break;case F.ais.interactenrage:K=2;break;default:}return{type:_,aggroRange:K,startPosition:{mapId:Z.mapId,x:Z.x,y:Z.y},path:null,_pathCache:{}}}function M1(_,Z,K,z={}){let Y=new O1(_,z.id).with("type",{type:Z}).with("collision",{collides:!0}).with("currency",{gold:0,matter:0}).with("energy",{current:Z.energyMax,max:Z.energyMax}).with("interaction",{interactions:0,messages:[]}).with("position",{mapId:K.mapId,x:K.x,y:K.y});if(!Z0(Z))Y.with("inventory",{tool:null});if(z.ai)Y.with("ai",_w(z.ai,K));if(z.dialog)Y.with("dialog",{dialog:z.dialog});if(z.faction)Y.with("faction",{faction:z.faction});if(z.name)Y.with("name",{name:z.name});let D=Y.build();if(z.equippedItem)J0(_,D,z.equippedItem);return D}function K0(_,Z,K,z,Y=L_()){return Q8(_,z,Z,K,Y,{faction:F.factions.Spirits,name:"Spirit"})}function Q8(_,Z,K,z,Y,D={}){return M1(_,F.entities.Spirit,{mapId:Z,x:K,y:z},{id:Y,...D})}function Q1(_,Z,K,z=Z.gold,Y=Z.matter){return new O1(_).with("type",{type:Z}).with("position",{mapId:K.mapId,x:K.x,y:K.y}).with("currency",{gold:z,matter:Y}).with("energy",{current:Z.energyDelta,max:Z.energyDelta}).with("pickupable",{}).build()}function y0(_,Z,K){let z=F.items.junk;return Q1(_,z,K,z.gold,Z)}function d0(_,Z,K,z,Y){return Q1(_,Z,K,z,Y)}function ww(_,Z){let K=_.components.position[Z];return`DEBUG: ${Z} at ${K.mapId},${K.x},${K.y}`}var O_={bot_bar:`!
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
!!spawn 18 16 mop
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
#_#`};function Qw(_){let Z=void 0;while(typeof(Z=_._despawnQueue.shift())<"u")_=m_(_,Z);return _}function Jw(_){return _}class N_{mapId;x;y;entityOrItemName;options;constructor(_,Z,K,z,Y={}){this.mapId=_,this.x=Z,this.y=K,this.entityOrItemName=z,this.options=Y}}function j_(_,Z){if(J8(Z.entityOrItemName)){let K=Z.options,z=Object.hasOwn(K,"ai")?F.ais[K.ai]:void 0,Y=Object.hasOwn(K,"dialog")?K.dialog:void 0,D=Object.hasOwn(K,"equip")&&Zw(K.equip)?F.items[K.equip]:null,R=Object.hasOwn(K,"faction")?F.factions[K.faction]:void 0,O=Object.hasOwn(K,"name")?K.name:void 0,P=F.entities[Z.entityOrItemName];M1(_,P,{mapId:Z.mapId,x:Z.x,y:Z.y},{ai:z,dialog:Y,equippedItem:D,faction:R,name:O})}else if(Zw(Z.entityOrItemName)){let K={mapId:Z.mapId,x:Z.x,y:Z.y};Q1(_,F.items[Z.entityOrItemName],K)}return _}function J8(_){return Object.hasOwn(F.entities,_)}function Zw(_){return Object.hasOwn(F.items,_)}function C_(_,Z={}){return{type:_,options:Z}}function Vw(_){for(let Z in O_){let K=u_(O_[Z]);if(!K.isSnippet()){_.maps[Z]=K;for(let z of K._spawnCommands)_=j_(_,z);K._spawnCommands=[]}}return _}function Kw(_,Z){let K=t_(_,Z);for(let z=0;z<K.length;z++){let Y=K[z];_=m_(_,Y)}return _.maps[Z]=void 0,delete _.maps[Z],_}class W_{id;widthTiles;heightTiles;seed;_tiles;_initialTiles;entropy;_cacheMovementMap;_spawnCommands;constructor(_,Z,K,z=[]){if(this.id=_,this.widthTiles=Z,this.heightTiles=K,this.seed=null,this._tiles=new C1(Z,K,C_(F.tiles.voidtrue)),this._initialTiles=new C1(Z,K,C_(F.tiles.voidtrue)),z.length>0)for(let Y=0;Y<K;Y++)for(let D=0;D<Z;D++){let R=z[Y*Z+D];this._tiles.set(D,Y,R),this._initialTiles.set(D,Y,JSON.parse(JSON.stringify(R)))}this.entropy=0,this._cacheMovementMap=null,this._spawnCommands=[]}getTile(_,Z){let K=this._tiles.get(_,Z);if(K)return K;return{}}setTile(_,Z,K,z={}){this._cacheMovementMap=null;let Y=this._tiles.get(_,Z);return this._tiles.set(_,Z,C_(K,z)),Y}resetEntropy(){for(let _=0;_<this.heightTiles;_++)for(let Z=0;Z<this.widthTiles;Z++){let K=this._tiles.get(Z,_);if(K)this._initialTiles.set(Z,_,JSON.parse(JSON.stringify(K)))}this.entropy=0}pasteOnto(_,Z=0,K=0){for(let z=0;z<_.heightTiles;z++)for(let Y=0;Y<_.widthTiles;Y++){let D=_.getTile(Y,z);if(D.type!==F.tiles.voidtrue)this.setTile(Y+Z,z+K,D.type,D.options)}return this}circular(){let _=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let Z=-_;Z<=_;Z++)for(let K=-_;K<=_;K++)if(K*K+Z*Z>=_*_)this.setTile(K+_-1,Z+_-1,F.tiles.voidtrue);return this}sample(_,Z){let K=Math.floor(this.widthTiles/_),z=Math.floor(this.heightTiles/Z),Y=[];for(let D=0;D<Z;D++)for(let R=0;R<_;R++){let O={};for(let c=0;c<z;c++)for(let l=0;l<K;l++){let d=this.getTile(R*K+l,D*z+c);if(O[d.type.name])O[d.type.name]+=1;else O[d.type.name]=1}let P="",C=0;for(let[c,l]of Object.entries(O))if(l>C)P=c,C=l;let f="space"+P,g=F.tiles[f]||F.tiles.spacevoid,I={mapId:this.id,x:R*K,y:D*z};Y.push(C_(g,I))}return new W_("__sampled_"+_+"_"+Z+"_"+this.id,_,Z,Y)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let _=Array(this.heightTiles);for(let Z=0;Z<this.heightTiles;Z++){_[Z]=Array(this.widthTiles);for(let K=0;K<this.widthTiles;K++){let z=this._tiles.get(K,Z);if(_[Z][K]=0,z&&z.type.isBlocking)_[Z][K]=1}}return this._cacheMovementMap=_,_}isSnippet(){return this.id===void 0||this.id===null||this.id===""}static createEmptyMap(_,Z,K){let z=[];for(let D=0;D<_*Z;D++)z.push(C_(K));return new W_(null,_,Z,z)}}function u_(_){let Z=_.split(/\r?\n/),K=_[0],z="",Y=0,D=0,R={},O=[],P=[];for(let f=0;f<Z.length;f++){let g=Z[f];if(g.startsWith(K)){if(g.startsWith(K+"!id"))z=g.slice(5);else if(g.startsWith(K+"!size")){let I=g.split(" ").slice(1);Y=Number(I[0]),D=Number(I[1])}else if(g.startsWith(K+"!spawn")){let I=g.split(" ").slice(1),c={};if(I.length>3){let l=I.slice(3);for(let d of l){let o=d.split("=");c[o[0]]=o[1]}}O.push(new N_(z,Number(I[0]),Number(I[1]),I[2],c))}else if(g.startsWith(K+"!")){let I=g[2],c=g.slice(4);R[I]=c}}else for(let I=0;I<g.length;I++){let c=g[I],l=R[c];if(y.debug&&!l)console.log("DEBUG Broken map: "+z);let d=l.split(" "),o={};if(l.startsWith("portal ")||l.startsWith("portalhidden ")||l.startsWith("portalsewers ")||l.startsWith("portallauncher ")||l.startsWith("portalstart"))l=d[0],o.mapId=d[1],o.x=Number(d[2]),o.y=Number(d[3]);if(l.startsWith("wall ")&&d.length>=2)l="wall",o.sign=d[1];if(l.startsWith("terminal ")){if(l="terminal",d.length>=2)o.screen=d[1]}P.push(C_(F.tiles[l],o))}}let C=new W_(z,Y,D,P);return C._spawnCommands=O,C}var $w=_0(E1(),1);class R_{seed;_rotRng;constructor(_=1337){this.seed=_,this._rotRng=$w.RNG.clone(),this._rotRng.setSeed(_)}getPercentage(){return this._rotRng.getPercentage()}getItem(_){return this._rotRng.getItem(_)}}function Uw(_,Z=1337,K=64,z=4096){let Y=W_.createEmptyMap(K,K,F.tiles.wall),D=new R_(Z),R=K/2-1,O={x:R,y:R};Y.setTile(O.x,O.y,F.tiles.void);for(let P=0;P<z;P++){switch(D.getItem([0,1,2,3])){case 0:O=A1(O,0,-1,K);break;case 1:O=A1(O,1,0,K);break;case 2:O=A1(O,0,1,K);break;case 3:O=A1(O,-1,0,K);break}Y.setTile(O.x,O.y,F.tiles.void)}return Y.id=`gen:dungeon=${Z}`,_.maps[Y.id]=Y,_}function A1(_,Z,K,z){return{x:Math.max(0,Math.min(z-1,_.x+Z)),y:Math.max(0,Math.min(z-1,_.y+K))}}function Xw(_,Z){if(Z?.newMapId?.startsWith("gen:dungeon")){let K=Z?.newMapId,z=Number(K?.split("=").at(-1));if(_=Uw(_,z),Z.entityId.startsWith("player"))_.currentMapId=K;let Y=_.components.position[Z.entityId];Y.mapId=K,Y.x=Z.newX,Y.y=Z.newY}return _}function Yw(_,Z){if(Z.seed===1337)_=j_(_,new N_(Z.id,130,127,"Valkyrie",{faction:"Spirits"})),_=j_(_,new N_(Z.id,124,127,"Valkyrie",{faction:"Spirits"})),_=j_(_,new N_(Z.id,127,130,"trident"));else{let K=new R_(Z.seed);for(let z=0;z<Z.heightTiles;z++)for(let Y=0;Y<Z.widthTiles;Y++){let D=Z.getTile(Y,z);if(K.getPercentage()<=1&&(D.type===F.tiles.void||D.type===F.tiles.tree)){let R=K.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(R){case"Deviant":case"Pioneer":_=j_(_,new N_(Z.id,Y,z,R,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":_=j_(_,new N_(Z.id,Y,z,R));break}}}}return _}var f1=_0(E1(),1);var q8=1337,Bw=55;function Gw(_,Z=q8){f1.RNG.setSeed(Z);let K=new f1.Noise.Simplex,z=256,Y=256,D=[];for(let P=0;P<Y;P++)for(let C=0;C<z;C++){let f=K.get(C/Bw,P/Bw),g;if(f<=-0.5)g=F.tiles.water;else if(f<=0)g=F.tiles.void;else if(f<0.5)g=F.tiles.tree;else g=F.tiles.rock;D.push(C_(g))}let R="simplex="+Z,O=new W_(R,z,Y,D);return O.seed=Z,_.maps[R]=O,_}var z8=1337;function Lw(_,Z=z8){let K=W_.createEmptyMap(1024,1024,F.tiles.void);K.id="solarsystem="+Z,_.maps[K.id]=K;let z=new R_(Z),Y=new R_(Z),D=z.getItem([2,3,4,5,6,7,8,9,10,11,12]),R=128,O=512-R,P=Math.floor(O/D);K=$8(K,z);let C=W_.createEmptyMap(128,128,F.tiles.voidtrue);U8(C,63,63,62,F.tiles.star),X8(C,63,63,F.tiles.star),K.pasteOnto(C,448,448);for(let d=R;d<512;d+=P){let o=z.getItem([-1,1])*z.getItem(J1(d)),z_=z.getItem([-1,1])*Math.floor(Math.sqrt(d*d-o*o));o+=512,z_+=512;let V_=z.getItem([16,24,32]),X_=Math.floor(V_/2)-1;_=Gw(_,Z);let K_=_.maps["simplex="+Z],E=O_.launcher;E=E.replace("!!O portallauncher space 0 0",`!!O portallauncher ${K.id} ${o} ${z_}`);let u=u_(E),h=Y.getItem(J1(K_.widthTiles-u.widthTiles)),m=Y.getItem(J1(K_.heightTiles-u.heightTiles));K_.pasteOnto(u,h,m),_=Yw(_,K_);let s=K_.sample(V_,V_).circular();K.pasteOnto(s,o-(X_+1),z_-(X_+1)),Z++}let f=O_.space_bot_station;f=f.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let g=u_(f);K.pasteOnto(g,583,398);let I=u_(O_.square_falcon);K.pasteOnto(I,590,373);let c=u_(O_.vincent_rocket);K.pasteOnto(c,512,430);let l=u_(O_.vincent_rocket);return K.pasteOnto(l,520,432),_}function $8(_,Z){for(let K=0;K<_.heightTiles;K++)for(let z=0;z<_.widthTiles;z++)if(Z.getPercentage()<=1)_.setTile(z,K,Z.getItem([F.tiles.spacevoidstarwhite,F.tiles.spacevoidstaryellow]));return _}function U8(_,Z,K,z,Y){let D=1-z,R=1,O=-2*z,P=0,C=z;_.setTile(Z,K+z,Y),_.setTile(Z,K-z,Y),_.setTile(Z+z,K,Y),_.setTile(Z-z,K,Y);while(P<C){if(D>=0)C-=1,O+=2,D+=O;P+=1,R+=2,D+=R,_.setTile(Z+P,K+C,Y),_.setTile(Z-P,K+C,Y),_.setTile(Z+P,K-C,Y),_.setTile(Z-P,K-C,Y),_.setTile(Z+C,K+P,Y),_.setTile(Z-C,K+P,Y),_.setTile(Z+C,K-P,Y),_.setTile(Z-C,K-P,Y)}return _}function X8(_,Z,K,z){let{widthTiles:Y,heightTiles:D}=_,R=[];R.push({x:Z,y:K});let O=void 0;while(typeof(O=R.shift())<"u"){let P=O,C=O;if(O.x+1<Y)C={x:O.x+1,y:O.y};while(_.getTile(P.x,P.y).type!==z){if(_.setTile(P.x,P.y,z),P.y+1<D){if(_.getTile(P.x,P.y+1).type!==z)R.push({x:P.x,y:P.y+1})}if(P.y-1>=0){if(_.getTile(P.x,P.y-1).type!==z)R.push({x:P.x,y:P.y-1})}if(P.x-1>=0)P.x-=1;else break}while(_.getTile(C.x,C.y).type!==z){if(_.setTile(C.x,C.y,z),C.y+1<D){if(_.getTile(C.x,C.y+1).type!==z)R.push({x:C.x,y:C.y+1})}if(C.y-1>=0){if(_.getTile(C.x,C.y-1).type!==z)R.push({x:C.x,y:C.y-1})}if(C.x+1<Y)C.x+=1;else break}}return _}function Hw(_,Z){if(Z?.oldMapId?.startsWith("shop_instance")){_=Kw(_,Z.oldMapId);let K=_.maps[Z.newMapId],z=K.getTile(Z.newX,Z.newY);K.setTile(Z.newX,Z.newY,z.type,{mapId:"shop_instance",x:Z.oldX,y:Z.oldY})}if(Z?.newMapId?.startsWith("shop_instance")){let K=u_(O_.shop_instance);if(K.id="shop_instance_"+Z.oldMapId+"_"+Z.entityId,K.setTile(Z.newX,Z.newY,F.tiles.portal,{mapId:Z.oldMapId,x:Z.oldX,y:Z.oldY}),_.maps[Z.oldMapId].setTile(Z.oldX,Z.oldY,Z.oldTileType,{mapId:K.id,x:Z.newX,y:Z.newY}),Z.entityId.startsWith("player"))_.currentMapId=K.id;let Y=_.components.position[Z.entityId];if(Y.mapId=K.id,Y.x=Z.newX,Y.y=Z.newY,delete _.maps.shop_instance,_.maps[K.id]=K,_=H1(_,F.items.hammer,{mapId:K.id,x:4,y:4},0,-200),_=H1(_,F.items.pickaxe,{mapId:K.id,x:4,y:6},0,-200),_=H1(_,F.items.battery,{mapId:K.id,x:4,y:8},0,-200),_=H1(_,F.items.gold,{mapId:K.id,x:4,y:10},1,-1e4),_=j_(_,{mapId:K.id,x:6,y:2,entityOrItemName:"AeroBot",options:{faction:o_(_,Z.entityId).name,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}}),Z?.oldMapId.startsWith("bot_stadium"))_=j_(_,{mapId:K.id,x:1,y:12,entityOrItemName:"WorkBot",options:{faction:o_(_,Z.entityId).name,dialog:"shop_instance_workbot_shopper"}});else if(Z?.oldMapId.startsWith("bot_bar"))_=j_(_,{mapId:K.id,x:4,y:11,entityOrItemName:"AeroBot",options:{faction:o_(_,Z.entityId).name,dialog:"shop_instance_aerobot_shopper"}})}return _}var Y8=["ai","collision","currency","dialog","energy","faction","interaction","inventory","name","pickupable","position","type"];function Ww(){let _={};for(let Z of Y8)_[Z]={};return _}function Dw(){return{_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_idManager:{nextId:1,usedIds:new Set,freeIds:[]},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",cache:{entitiesByMap:{},entitiesByLocation:{}},effects:{},entities:{},lastSpacePositionByEntity:{},maps:{},rng:new R_,components:Ww()}}function Fw(_){let Z=void 0;while(typeof(Z=_._combatQueue.shift())<"u"){let K=-1,z=-5,Y=v1(_,Z.entityId);if(Y){if(K=Y.energyCost,D_(_,Z.entityId,F.effects.Recuperation))K=Math.min(-1,K+1);z=-1*Math.abs(Y.damage)}_._energyQueue.push({entityId:Z.entityId,energyDelta:K}),_._energyQueue.push({entityId:Z.otherEntityId,energyDelta:z});let{entityId:D,otherEntityId:R}=Z,O=_.components.type[D]?.type,P=_.components.type[R]?.type,C=_.components.name[D]?.name?_.components.name[D].name:O.name,f=_.components.name[R]?.name?_.components.name[R].name:P.name;_=U_(_,`${C} did ${Math.abs(z)} damage to ${f} at cost of ${Math.abs(K)} energy.`)}return _}function jw(_){let Z=void 0,K=new Set;while(typeof(Z=_._energyQueue.shift())<"u"){let z=!!_.entities[Z.entityId],Y=_.components.energy[Z.entityId];if(z&&Y&&!N0(_,Z.entityId)){if(Y.current=Math.min(Y.current+Z.energyDelta,Y.max),Y.current<=0)K.add(Z.entityId)}}for(let z of K){let Y=_.components.type[z]?.type,D=_.components.position[z],R=_.components.energy[z];_._despawnQueue.push(z);let O=_.components.name[z]?.name?_.components.name[z].name:Y.name;if(!v_(_,z)){let P=Math.max(1,Math.floor(R.max/3));_=l0(_,P,D),_=U_(_,`${O} destroyed leaving behind Junk.`)}}return _}function Rw(_){return _=t0(_),_=Fw(_),_=a0(_),_=jw(_),_=T0(_),_=Qw(_),_=Jw(_),_}class Pw{p=[];constructor(_){this.p=Array(512);let Z=Array(256);for(let z=0;z<256;z++)Z[z]=z;let K=new R_(_);for(let z=255;z>0;z--){let Y=K.getItem(J1(z+1));[Z[z],Z[Y]]=[Z[Y],Z[z]]}for(let z=0;z<256;z++)this.p[z]=this.p[z+256]=Z[z]}fade(_){return _*_*_*(_*(_*6-15)+10)}lerp(_,Z,K){return Z+_*(K-Z)}grad(_,Z,K,z){let Y=_&15,D=Y<8?Z:K,R=Y<4?K:Y===12||Y===14?Z:z;return((Y&1)===0?D:-D)+((Y&2)===0?R:-R)}noise(_,Z,K){let z=Math.floor(_)&255,Y=Math.floor(Z)&255,D=Math.floor(K)&255;_-=Math.floor(_),Z-=Math.floor(Z),K-=Math.floor(K);let R=this.fade(_),O=this.fade(Z),P=this.fade(K),C=this.p[z]+Y,f=this.p[C]+D,g=this.p[C+1]+D,I=this.p[z+1]+Y,c=this.p[I]+D,l=this.p[I+1]+D;return(this.lerp(P,this.lerp(O,this.lerp(R,this.grad(this.p[f],_,Z,K),this.grad(this.p[c],_-1,Z,K)),this.lerp(R,this.grad(this.p[g],_,Z-1,K),this.grad(this.p[l],_-1,Z-1,K))),this.lerp(O,this.lerp(R,this.grad(this.p[f+1],_,Z,K-1),this.grad(this.p[c+1],_-1,Z,K-1)),this.lerp(R,this.grad(this.p[g+1],_,Z-1,K-1),this.grad(this.p[l+1],_-1,Z-1,K-1))))+1)/2}}class z0{width;height;seed;constructor(_,Z,K){this.width=_,this.height=Z,this.seed=K}generate(_,Z){let K=new Pw(this.seed),z=[],Y=F.tiles.void,D=F.tiles.water,R=F.tiles.tree,O=F.tiles.rock;for(let P=0;P<this.height;P++)for(let C=0;C<this.width;C++){let f=C/this.width*5-2.5,g=P/this.height*5-2.5,I=this.getOctaveNoise(K,f,g,0,4,0.5);I=(I-0.5)*2+0.5,I=Math.max(0,Math.min(1,I));let c;if(I<0.25)c=D;else if(I<0.5)c=Y;else if(I<0.75)c=R;else c=O;z.push(C_(c))}return new W_(_,this.width,this.height,z)}getOctaveNoise(_,Z,K,z,Y,D){let R=0,O=1,P=1,C=0;for(let f=0;f<Y;f++)R+=_.noise(Z*O,K*O,z*O)*P,C+=P,P*=D,O*=2;return R/C}}var B8=42;function Mw(_,Z=B8){let z=new z0(256,256,Z).generate("overworld="+Z,"Overworld");return _.maps[z.id]=z,_}class S1{state;constructor(_=Dw()){this.state=_}init(){return this.state=Z1(this.state,0,i0),this.state=Z1(this.state,0,Xw),this.state=Z1(this.state,0,Hw),this.state=Z1(this.state,1,h0),this.state=Z1(this.state,2,x0),this.state=Lw(this.state),this.state=Vw(this.state),this.state=Mw(this.state),this.state.currentMapId="botmos_hull_selection",K0(this.state,9,5,this.state.currentMapId,L_()),this.state}update(_,Z=!1){let K=L_();if(!!this.state.entities[K]){if(_){switch(_){case F.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case F.commands["#"]:this.state=U_(this.state,ww(this.state,L_()));break;default:this.state=s0(this.state,K,_),this.state=Rw(this.state)}this.state.actionLog.push(_.key)}}else this.state=U_(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",K0(this.state,9,5,this.state.currentMapId,L_());return this.state}play(_){for(let Z=0;Z<_.length;Z++){let K=_[Z];this.update(F.commands[K],!0)}return this.state}}var Z_={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},$0=[],u1=void 0,U0=void 0,X0=-F.constants.MIN_TURN_SPEED_IN_MS;function Y0(_,Z=Date.now()){if(_===null)return!1;if(u1!==void 0&&Z-X0>=F.constants.MIN_TURN_SPEED_IN_MS)return X0=Z,W1=_,u1(_),!0;return!1}function N1(_){if(_&&_.preventDefault)_.preventDefault();if(_&&_.stopPropagation)_.stopPropagation()}var Ow={w:"up",ArrowUp:"up",a:"left",ArrowLeft:"left",s:"down",ArrowDown:"down",d:"right",ArrowRight:"right",x:"a"," ":"b",y:"b",z:"b",m:"menu","#":"slash","/":"slash"},W1=null;function G8(){let _=null;if(Z_.right)_=F.commands.E;if(Z_.left)_=F.commands.W;if(Z_.down)_=F.commands.S;if(Z_.up)_=F.commands.N;if(Z_.up&&Z_.right){if(_===F.commands.N&&W1===F.commands.N)_=F.commands.E}if(Z_.up&&Z_.left){if(_===F.commands.N&&W1===F.commands.N)_=F.commands.W}if(Z_.down&&Z_.right){if(_===F.commands.S&&W1===F.commands.S)_=F.commands.E}if(Z_.down&&Z_.left){if(_===F.commands.S&&W1===F.commands.S)_=F.commands.W}if(Z_.a)_=F.commands.A;if(Z_.b)_=F.commands.B;if(Z_.menu)_=F.commands.M;if(Z_.slash)_=F.commands["#"];if(_!==null)$0.push(_)}function Ew(){G8();let _=$0.shift()||null;return $0=[],_}if(typeof document<"u"&&document.body){document.body.addEventListener("keydown",function(Z){if(Z.defaultPrevented)return;let K=Ow[Z.key];if(K)Z_[K]=!0,N1(Z),Y0(Ew())}),document.body.addEventListener("keyup",function(Z){if(Z.defaultPrevented)return;let K=Ow[Z.key];if(K)Z_[K]=!1,N1(Z)});let _=[[F.commands.B,F.commands.N,F.commands.A],[F.commands.W,F.commands.M,F.commands.E],[null,F.commands.S,null]];document.body.addEventListener("click",function(Z){let K=Math.floor(Z.clientX/document.body.clientWidth*3),z=Math.floor(Z.clientY/document.body.clientHeight*3),Y=_[z]?.[K];if(Y)Y0(Y),N1(Z)}),document.body.addEventListener("mousemove",function(Z){if(Z.defaultPrevented)return;if(u1!==void 0&&U0!==void 0)U0(Z),N1(Z)})}var bw=250,vw=80,L8=16,D1=0.5,k_={A:0,B:1,X:2,Y:3,SELECT:8,START:9,DPAD_UP:12,DPAD_DOWN:13,DPAD_LEFT:14,DPAD_RIGHT:15};class Aw{states={up:{pressed:!1,pressStartTime:0,lastTriggerTime:0},down:{pressed:!1,pressStartTime:0,lastTriggerTime:0},left:{pressed:!1,pressStartTime:0,lastTriggerTime:0},right:{pressed:!1,pressStartTime:0,lastTriggerTime:0},a:{pressed:!1,pressStartTime:0,lastTriggerTime:0},b:{pressed:!1,pressStartTime:0,lastTriggerTime:0},menu:{pressed:!1,pressStartTime:0,lastTriggerTime:0}};dirActive=!1;dirPressStartTime=0;lastDirTriggerTime=0;lastDirCombo="";reset(){let _=["up","down","left","right","a","b","menu"];for(let Z of _)this.states[Z]={pressed:!1,pressStartTime:0,lastTriggerTime:0};this.dirActive=!1,this.dirPressStartTime=0,this.lastDirTriggerTime=0,this.lastDirCombo=""}update(_,Z=Date.now(),K=!0){let z=!1,Y=["a","b","menu"];for(let O of Y){let P=_[O]||!1,C=this.states[O];if(P)if(!C.pressed)C.pressed=!0,C.pressStartTime=Z,C.lastTriggerTime=Z,z=!0;else{let f=Z-C.pressStartTime,g=Z-C.lastTriggerTime;if(f>=bw&&g>=vw)C.lastTriggerTime=Z,z=!0}else C.pressed=!1}let D=`${_.up?"U":""}${_.down?"D":""}${_.left?"L":""}${_.right?"R":""}`;if(D.length>0){if(!this.dirActive)this.dirActive=!0,this.dirPressStartTime=Z,this.lastDirTriggerTime=0,this.lastDirCombo="";let O=D!==this.lastDirCombo,P=Z-this.dirPressStartTime,C=Z-this.lastDirTriggerTime,f=P>=bw&&C>=vw;if(K&&(O||f))this.lastDirCombo=D,this.lastDirTriggerTime=Z,z=!0}else this.dirActive=!1,this.lastDirCombo="";return z}}var H8=new Aw,Cw=void 0,kw=!1;function E_(_){if(!_)return!1;if(typeof _==="boolean")return _;if(typeof _.pressed==="boolean")return _.pressed;if(typeof _.value==="number")return _.value>D1;return!1}function W8(_=Date.now()){if(typeof navigator>"u"||!navigator.getGamepads)return;let Z=navigator.getGamepads();if(!Z)return;let K=Array.from(Z),z=!1,Y={up:!1,down:!1,left:!1,right:!1,a:!1,b:!1,menu:!1};for(let C=0;C<K.length;C++){let f=K[C];if(!f)continue;z=!0;let g=f.buttons||[],I=f.axes||[];if(E_(g[k_.DPAD_UP])||I[1]!==void 0&&I[1]<-D1)Y.up=!0;if(E_(g[k_.DPAD_DOWN])||I[1]!==void 0&&I[1]>D1)Y.down=!0;if(E_(g[k_.DPAD_LEFT])||I[0]!==void 0&&I[0]<-D1)Y.left=!0;if(E_(g[k_.DPAD_RIGHT])||I[0]!==void 0&&I[0]>D1)Y.right=!0;if(E_(g[k_.A])||E_(g[k_.X]))Y.a=!0;if(E_(g[k_.B])||E_(g[k_.Y]))Y.b=!0;if(E_(g[k_.START])||E_(g[k_.SELECT]))Y.menu=!0}if(!z)return;let D=Y.up||Y.down||Y.left||Y.right||Y.a||Y.b||Y.menu,R=F.constants.MIN_TURN_SPEED_IN_MS,O=_-X0>=R,P=H8.update(Y,_,O);if(D||kw)Z_.up=Y.up,Z_.down=Y.down,Z_.left=Y.left,Z_.right=Y.right,Z_.a=Y.a,Z_.b=Y.b,Z_.menu=Y.menu,kw=D;if(P){let C=Ew();if(C!==null)Y0(C,_)}}function D8(_=L8){if(Cw!==void 0)return;Cw=setInterval(()=>{W8()},_)}if(typeof window<"u")D8(),window.addEventListener("gamepadconnected",(_)=>{console.log("Gamepad connected at index %d: %s. %d buttons, %d axes",_.gamepad?.index,_.gamepad?.id,_.gamepad?.buttons?.length,_.gamepad?.axes?.length)}),window.addEventListener("gamepaddisconnected",(_)=>{console.log("Gamepad disconnected from index %d: %s",_.gamepad?.index,_.gamepad?.id)});function fw(_){u1=_}function Sw(_){U0=_}var hw=_0(E1(),1);var g1={__10:[0,0],__11:[16,0],__12:[32,0],__13:[48,0],__14:[64,0],__15:[80,0],__1:[96,0],_1:[112,0],__2:[128,0],_2:[144,0],__3:[160,0],_3:[176,0],__4:[192,0],_4:[208,0],__5:[224,0],_5:[240,0],__6:[256,0],_6:[272,0],__7:[288,0],_7:[304,0],__8:[320,0],_8:[336,0],__9:[352,0],_9:[368,0],AeroBot_a:[384,0],AeroBot:[400,0],battery:[416,0],BioAbsorber:[432,0],chargepad:[448,0],cheat:[464,0],chest:[480,0],Cleaner_a:[496,0],Cleaner:[512,0],Deviant:[528,0],drain:[544,0],energy:[560,0],gold:[576,0],goo:[592,0],GraffitiCleaner:[608,0],Graffiticyan:[624,0],Graffitimagenta:[640,0],Graffitiyellow:[656,0],hammer:[672,0],junk:[688,0],matter:[704,0],mop:[720,0],movableboulder:[736,0],movablebox:[752,0],moveeast:[768,0],movenorth:[784,0],movesouth:[800,0],movewest:[816,0],pickaxe:[832,0],Pioneer_a:[848,0],Pioneer:[864,0],portalclosed:[880,0],portalhidden:[896,0],portallauncher:[912,0],portal:[928,0],portalsewers:[944,0],portalstartaerobot:[960,0],"_portalstart?":[976,0],portalstartworkbot:[992,0],Recharger:[1008,0],Recuperation:[1024,0],RoboRat_a:[1040,0],RoboRat:[1056,0],RockCrusher:[1072,0],rock:[1088,0],Screwing:[1104,0],shocker:[1120,0],spacerock:[1136,0],spacetree:[1152,0],spacevoid:[1168,0],spacevoidstarwhite:[1184,0],spacevoidstaryellow:[1200,0],spacewater_a:[1216,0],spacewater:[1232,0],Spirit_a:[1248,0],Spirit:[1264,0],star:[1280,0],terminal:[1296,0],tree:[1312,0],trident:[1328,0],upgradeBioAbsorber:[1344,0],upgradeRecuperation:[1360,0],Valkyrie_a:[1376,0],Valkyrie:[1392,0],voidhidden:[1408,0],void:[1424,0],voidtrue:[1440,0],wall0:[1456,0],wall1:[1472,0],wall2:[1488,0],walla_:[1504,0],wallA:[1520,0],wallb_:[1536,0],wallB:[1552,0],wallc_:[1568,0],wallC:[1584,0],WallCrusher:[1600,0],walld_:[1616,0],wallD:[1632,0],walle_:[1648,0],wallE:[1664,0],wallf_:[1680,0],wallF:[1696,0],wallg_:[1712,0],wallG:[1728,0],wallh_:[1744,0],wallH:[1760,0],walli_:[1776,0],wallI:[1792,0],wallj_:[1808,0],wallJ:[1824,0],wallk_:[1840,0],wallK:[1856,0],walll_:[1872,0],wallL:[1888,0],wallm_:[1904,0],wallM:[1920,0],walln_:[1936,0],wallN:[1952,0],wallo_:[1968,0],wallO:[1984,0],"wall(":[2000,0],"wall)":[2016,0],"wall+":[2032,0],"wall,":[2048,0],"wall.":[2064,0],wall:[2080,0],"wall:":[2096,0],wall_:[2112,0],"wall|":[2128,0],wallp_:[2144,0],wallP:[2160,0],wallq_:[2176,0],wallQ:[2192,0],wallr_:[2208,0],wallR:[2224,0],walls_:[2240,0],wallS:[2256,0],wallstatueaerobot:[2272,0],wallstatuecleaner:[2288,0],wallstatuepioneer:[2304,0],wallstatueworkbot:[2320,0],wallt_:[2336,0],wallT:[2352,0],wallu_:[2368,0],wallU:[2384,0],wallv_:[2400,0],wallV:[2416,0],wallweak:[2432,0],wallw_:[2448,0],wallW:[2464,0],wallx_:[2480,0],wallX:[2496,0],wally_:[2512,0],wallY:[2528,0],wallz_:[2544,0],wallZ:[2560,0],water_a:[2576,0],WaterImmunity:[2592,0],water:[2608,0],watersewage_a:[2624,0],watersewage:[2640,0],WaterShield:[2656,0],WorkBot_a:[2672,0],WorkBot:[2688,0],wrench:[2704,0]};var F8="#74ee15",Nw="#f00",I1="#000",j8=0.2,j1=document.createElement("div");j1.id="ui";document.body.appendChild(j1);var T1=L0(),V1=L0(),B0=b8();B0.style.marginRight=`${y.fontSize/2}px`;var F1=[];for(let _=0;_<y.uiEffectsMaxDisplaySize;_++)F1.push(L0());var g_=document.createElement("div");g_.replaceChildren(T1,V1,B0,...F1);j1.replaceChildren(g_);var x1=document.createElement("div");x1.style.display="flex";x1.style.justifyContent="space-between";var h1=document.createElement("div");h1.id="uichatlog";var uw=document.createElement("div");uw.id="uitooltip";x1.replaceChildren(h1,uw);j1.appendChild(x1);var G0=document.createElement("div");G0.id="uimousetooltip";document.body.appendChild(G0);async function gw(_){if(!y.showUI)return;let Z=L_(),K=_.entities[Z],z=_.components.energy[Z],Y=_.components.currency[Z],D="";if(!!K&&!!z&&!!Y)D=R8(_,Z),j1.style.flexDirection="column-reverse",M8(z);else P8(),D="Game over!",g_.style.color=I1,g_.style.background=Nw;B0.innerText=D,O8(_)}function R8(_,Z){let K=_.components.type[Z]?.type,z=_.components.energy[Z],Y=_.components.currency[Z];l_(T1,K.name),T1.dataset.tooltip="Player hull: "+K.name;let D=v1(_,Z);if(D)l_(V1,D.name.toLowerCase()),V1.dataset.tooltip=`Player tool: ${D.name} (${Math.abs(D.damage)} damage, ${D.energyCost} energy)`;else l_(V1,null),V1.dataset.tooltip=void 0;let R=I0(_,Z);for(let f=0;f<y.uiEffectsMaxDisplaySize;f++){let g=R[f]?.type.name||null,I=R[f]?.type.tooltip||void 0;l_(F1[f],g),F1[f].dataset.tooltip=I}let O="";if(Y.matter>0)O=`${Y.matter}M `;let P="";if(Y.gold>0)P=`${Y.gold}G `;let C=b1(_,Z);return" "+z.current+"/"+z.max+" "+P+O+"Y:"+C.B.name+" X:"+C.A.name}function P8(){l_(T1,null),l_(V1,null);for(let _=0;_<y.uiEffectsMaxDisplaySize;_++)l_(F1[_],null)}function M8(_){if(g_.style.background=I1,_.current/_.max<=j8)g_.style.color=I1,g_.style.background=Nw;else g_.style.color=F8,g_.style.background=I1}function O8(_){if(_._menuOpen&&!!_.chatLog.length){let Z=_.chatLog.slice(-y.chatLogMaxDisplaySize);h1.innerText=Z.join(`
`)}else h1.innerText=""}function L0(){let _=document.createElement("span");return l_(_,null),_.style.height=`${y.fontSize}px`,_.style.display="inline-block",_}function b8(){let _=document.createElement("span");return _.style.display="inline-block",_.style.marginLeft=`${y.fontSize/2}px`,_}function l_(_,Z){if(Z){let K=g1[Z][0];_.style.background=`url('build/tiles.png') -${K}px 0`,_.style.width=`${y.fontSize}px`}else _.style.width="0px"}function Iw(){return G0}var d_="_a",xw=document.createElement("img");xw.src="build/tiles.png";M_.tileSet=xw;M_.tileMap=S8();var q1=new hw.Display(M_);document.body.appendChild(q1.getContainer());var mw=0,lw=0,K1=void 0;function v8(_,Z,K=!1){K1=_;let z=_.currentMapId,Y=_.maps[z],D=K?d_:"",R=0,O=0;mw=Z.x-R,lw=Z.y-O;let P=k8(Z.width,Z.height);E8(P,_,Z,R,O,D),A8(P,_,Z,R,O,D),f8(P)}var Tw={x:0,y:0},m1=0;async function r_(_){let Z=L_(),z=_.entities[Z]?_.components.position[Z]:Tw,Y=C8(z);if(v8(_,Y,m1%2==0),gw(_),Tw=z,m1++,m1>=128)m1=0}async function cw(){q1._backend.setOptions(M_)}function pw(_,Z){y.cameraWidth=Math.floor(_/y.fontSize),y.cameraHeight=Math.floor(Z/y.fontSize),M_.width=Math.floor(y.cameraWidth*(1/y.zoom)),M_.height=Math.floor(y.cameraHeight*(1/y.zoom))}function yw(_){return[_[0]+mw,_[1]+lw]}function dw(_){if(!K1)return{state:null,tile:null,entities:[]};let Z=K1.currentMapId,K=K1.maps[Z],z=_[0],Y=_[1],D=K.getTile(z,Y),R=_1(K1,{mapId:Z,x:z,y:Y}),O=[];if(R)O.push(...R);return{state:K1,tile:D,entities:O}}function C8(_){return{x:_.x-Math.floor(M_.width/2),y:_.y-Math.floor(M_.height/2),width:M_.width,height:M_.height}}var l1=[];function k8(_,Z){for(let K=l1.length;K<Z;K++)l1[K]=[];for(let K=0;K<Z;K++){let z=l1[K];for(let Y=z.length;Y<_;Y++)z[Y]={chars:[],fg:[],bg:[]};for(let Y=0;Y<_;Y++)z[Y].chars.length=0,z[Y].fg.length=0,z[Y].bg.length=0}return l1}function E8(_,Z,K,z,Y,D){let R=Z.currentMapId,O=Z.maps[R];for(let P=0;P<K.height;P++)for(let C=0;C<K.width;C++){let f=O.getTile(K.x+C,K.y+P),g="";if(f?.type)if(f.options.sign)g="#"+f.options.sign;else g=f.type.icon;if(g){let I=z+C,c=Y+P;if(_[c]&&_[c][I])_[c][I].chars.push(g+D),_[c][I].fg.push("transparent"),_[c][I].bg.push("transparent")}}}function A8(_,Z,K,z,Y,D){let R=Z.currentMapId,O=L_(),P=t_(Z,R);for(let C=0;C<P.length;C++){let f=P[C],g=Z.components.type[f]?.type,I=Z.components.position[f];if(!I)continue;let c=z+I.x-K.x,l=Y+I.y-K.y,d="transparent";if(y.highlightFriendEnemy&&!v_(Z,f)&&!L1(Z,f)&&f!==O)switch(a_(Z,O,f)){case 1:break;case 2:d="rgba(255, 0, 0, 0.5)";break}if(_[l]&&_[l][c])_[l][c].chars.push(g.icon+D),_[l][c].fg.push(d),_[l][c].bg.push("transparent");let o=Z.components.energy[f];if(o&&y.showEnergy!==0){let z_=y.showEnergy===1?16:10,V_=y.showEnergy===1?"__":"_",X_=Math.ceil(o.current/o.max*z_);if(X_<z_){if(_[l]&&_[l][c])_[l][c].chars.push(V_+X_),_[l][c].fg.push("transparent"),_[l][c].bg.push("transparent")}}}}function f8(_){q1.clear();for(let Z=0;Z<_.length;Z++)for(let K=0;K<_[Z].length;K++){let z=_[Z][K];if(z.chars.length>0)q1.draw(K,Z,z.chars,z.fg,z.bg)}}function S8(){let _={};for(let[Z,K]of Object.entries(g1)){let z=Z.endsWith(d_),Y="";if(z)Z=Z.substring(0,Z.length-d_.length),Y=d_;if(Z.startsWith("wall")&&(Z.length===5||Z.length===6))_["#"+Z.substring(4,5)+Y]=K;else if(Object.hasOwn(F.tiles,Z))_[F.tiles[Z].icon+Y]=K;else if(Object.hasOwn(F.entities,Z))_[F.entities[Z].icon+Y]=K;else if(Object.hasOwn(F.items,Z))_[F.items[Z].icon+Y]=K;else if(Object.hasOwn(F.effects,Z))_[F.effects[Z].icon+Y]=K;else _[Z+Y]=K}for(let[Z,K]of Object.entries(_))if(!Z.endsWith(d_)&&!Object.hasOwn(_,Z+d_))_[Z+d_]=K;return _}async function rw(_){if(!y.showUI||!y.showTooltip)return;let Z="";if(_.target){if(_.target?.dataset?.tooltip)Z+=_.target.dataset.tooltip}let K=q1.eventToPosition(_);if(K[0]!==-1){let R=yw(K),O=dw(R);for(let P=0;P<O.entities.length;P++){let C=O.entities[P],f=O.state.components.type[C]?.type,g=O?.state.components.name[C]?.name?O.state.components.name[C].name:f.name;if(Z!=="")Z+=`
`;Z+=g}if(!!O?.tile?.type&&O.tile?.type.tooltip!==""){if(Z!=="")Z+=`
`;Z+=O.tile.type.tooltip}}let z=typeof window<"u"?window.innerHeight:0,Y=Math.floor(z/2),D=Iw();if(Z!==""){D.innerText=Z,D.style.display="inline-block";let{offsetWidth:R,offsetHeight:O}=D,P=window.innerWidth,C=window.innerHeight,f=_.x+20,g=_.y+20;if(f+R>P)f=_.x-R-20;if(g+O>C)g=_.y-O-20;D.style.left=f+"px",D.style.top=g+"px"}else D.style.display="none"}function nw(_){window.onload=function(){r_(_.init())},window.onresize=async function(){let Z=typeof window<"u"?window.innerWidth:0,K=typeof window<"u"?window.innerHeight:0;pw(Z,K),await cw(),r_(_.state)},fw(function(Z){r_(_.update(Z))}),Sw(rw),document.body.focus()}function sw(_){if(!window.BMActionLog)window.BMActionLog=function(){return _.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(Z){r_(_.play(Z))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){y.debug=!y.debug,r_(_.state)};if(y.debug){if(!window.BMDebugState)window.BMDebugState=function(){return _.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let Z=Object.keys(_.state.maps).length,K=Object.keys(_.state.entities).length,z=Object.keys(_.state.items).length,Y=Object.keys(_.state.components.inventory).length;return`Maps: ${Z}, Entities: ${K}, Items: ${z}, Inventories: ${Y}`}}}var ow=new S1;sw(ow);nw(ow);
