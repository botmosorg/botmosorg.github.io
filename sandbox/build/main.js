var Y6=Object.create;var{getPrototypeOf:L6,defineProperty:Pw,getOwnPropertyNames:W6}=Object;var H6=Object.prototype.hasOwnProperty;var i1=(_,Z,q)=>{q=_!=null?Y6(L6(_)):{};let U=Z||!_||!_.__esModule?Pw(q,"default",{value:_,enumerable:!0}):q;for(let W of W6(_))if(!H6.call(U,W))Pw(U,W,{get:()=>_[W],enumerable:!0});return U};var D6=(_,Z)=>()=>(Z||_((Z={exports:{}}).exports,Z),Z.exports);var A1=D6((E1,sw)=>{function y_(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function N6(_,Z){var q=typeof Symbol!=="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(q)return(q=q.call(_)).next.bind(q);if(Array.isArray(_)||(q=k6(_))||Z&&_&&typeof _.length==="number"){if(q)_=q;var U=0;return function(){if(U>=_.length)return{done:!0};return{done:!1,value:_[U++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k6(_,Z){if(!_)return;if(typeof _==="string")return nw(_,Z);var q=Object.prototype.toString.call(_).slice(8,-1);if(q==="Object"&&_.constructor)q=_.constructor.name;if(q==="Map"||q==="Set")return Array.from(_);if(q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q))return nw(_,Z)}function nw(_,Z){if(Z==null||Z>_.length)Z=_.length;for(var q=0,U=new Array(Z);q<Z;q++)U[q]=_[q];return U}function V_(_,Z){_.prototype=Object.create(Z.prototype),_.prototype.constructor=_,Qw(_,Z)}function Qw(_,Z){return Qw=Object.setPrototypeOf?Object.setPrototypeOf.bind():function q(U,W){return U.__proto__=W,U},Qw(_,Z)}(function(_,Z){typeof E1==="object"&&typeof sw!=="undefined"?Z(E1):typeof define==="function"&&define.amd?define(["exports"],Z):(_=typeof globalThis!=="undefined"?globalThis:_||self,Z(_.ROT={}))})(E1,function(_){var Z=0.00000000023283064365386963,q=function(){function B(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var G=B.prototype;return G.getSeed=function z(){return this._seed},G.setSeed=function z(V){return V=V<1?1/V:V,this._seed=V,this._s0=(V>>>0)*Z,V=V*69069+1>>>0,this._s1=V*Z,V=V*69069+1>>>0,this._s2=V*Z,this._c=1,this},G.getUniform=function z(){var V=2091639*this._s0+this._c*Z;return this._s0=this._s1,this._s1=this._s2,this._c=V|0,this._s2=V-this._c,this._s2},G.getUniformInt=function z(V,w){var Q=Math.max(V,w),J=Math.min(V,w);return Math.floor(this.getUniform()*(Q-J+1))+J},G.getNormal=function z(V,w){if(V===void 0)V=0;if(w===void 0)w=1;var Q,J,K;do Q=2*this.getUniform()-1,J=2*this.getUniform()-1,K=Q*Q+J*J;while(K>1||K==0);var $=Q*Math.sqrt(-2*Math.log(K)/K);return V+$*w},G.getPercentage=function z(){return 1+Math.floor(this.getUniform()*100)},G.getItem=function z(V){if(!V.length)return null;return V[Math.floor(this.getUniform()*V.length)]},G.shuffle=function z(V){var w=[],Q=V.slice();while(Q.length){var J=Q.indexOf(this.getItem(Q));w.push(Q.splice(J,1)[0])}return w},G.getWeightedValue=function z(V){var w=0;for(var Q in V)w+=V[Q];var J=this.getUniform()*w,K,$=0;for(K in V)if($+=V[K],J<$)return K;return K},G.getState=function z(){return[this._s0,this._s1,this._s2,this._c]},G.setState=function z(V){return this._s0=V[0],this._s1=V[1],this._s2=V[2],this._c=V[3],this},G.clone=function z(){var V=new B;return V.setState(this.getState())},B}(),U=new q().setSeed(Date.now()),W=function(){function B(){}var G=B.prototype;return G.getContainer=function z(){return null},G.setOptions=function z(V){this._options=V},B}(),D=function(B){V_(G,B);function G(){var V=B.call(this)||this;return V._ctx=document.createElement("canvas").getContext("2d"),V}var z=G.prototype;return z.schedule=function V(w){requestAnimationFrame(w)},z.getContainer=function V(){return this._ctx.canvas},z.setOptions=function V(w){B.prototype.setOptions.call(this,w);var Q=w.fontStyle?w.fontStyle+" ":"",J=Q+" "+w.fontSize+"px "+w.fontFamily;this._ctx.font=J,this._updateSize(),this._ctx.font=J,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},z.clear=function V(){var w=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=w},z.eventToPosition=function V(w,Q){var J=this._ctx.canvas,K=J.getBoundingClientRect();if(w-=K.left,Q-=K.top,w*=J.width/K.width,Q*=J.height/K.height,w<0||Q<0||w>=J.width||Q>=J.height)return[-1,-1];return this._normalizedEventToPosition(w,Q)},G}(W);function j(B,G){return(B%G+G)%G}function b(B,G,z){if(G===void 0)G=0;if(z===void 0)z=1;if(B<G)return G;if(B>z)return z;return B}function C(B){return B.charAt(0).toUpperCase()+B.substring(1)}function A(B){for(var G=arguments.length,z=new Array(G>1?G-1:0),V=1;V<G;V++)z[V-1]=arguments[V];var w=A.map,Q=function J(K,$,Y,X){if(B.charAt(X-1)=="%")return K.substring(1);if(!z.length)return K;var L=z[0],H=$||Y,F=H.split(","),R=F.shift()||"",M=w[R.toLowerCase()];if(!M)return K;L=z.shift();var O=L[M].apply(L,F),k=R.charAt(0);if(k!=k.toLowerCase())O=C(O);return O};return B.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}A.map={s:"toString"};var h=Object.freeze({__proto__:null,mod:j,clamp:b,capitalize:C,format:A}),c=function(B){V_(G,B);function G(){var V=B.call(this)||this;return V._spacingX=0,V._spacingY=0,V._hexSize=0,V}var z=G.prototype;return z.draw=function V(w,Q){var J=w[0],K=w[1],$=w[2],Y=w[3],X=w[4],L=[(J+1)*this._spacingX,K*this._spacingY+this._hexSize];if(this._options.transpose)L.reverse();if(Q)this._ctx.fillStyle=X,this._fill(L[0],L[1]);if(!$)return;this._ctx.fillStyle=Y;var H=[].concat($);for(var F=0;F<H.length;F++)this._ctx.fillText(H[F],L[0],Math.ceil(L[1]))},z.computeSize=function V(w,Q){if(this._options.transpose)w+=Q,Q=w-Q,w-=Q;var J=Math.floor(w/this._spacingX)-1,K=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[J,K]},z.computeFontSize=function V(w,Q){if(this._options.transpose)w+=Q,Q=w-Q,w-=Q;var J=2*w/((this._options.width+1)*Math.sqrt(3))-1,K=Q/(2+1.5*(this._options.height-1)),$=Math.min(J,K),Y=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var X=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=Y;var L=X/100;$=Math.floor($)+1;var H=2*$/(this._options.spacing*(1+L/Math.sqrt(3)));return Math.ceil(H)-1},z._normalizedEventToPosition=function V(w,Q){var J;if(this._options.transpose)w+=Q,Q=w-Q,w-=Q,J=this._ctx.canvas.width;else J=this._ctx.canvas.height;var K=J/this._options.height;if(Q=Math.floor(Q/K),j(Q,2))w-=this._spacingX,w=1+2*Math.floor(w/(2*this._spacingX));else w=2*Math.floor(w/(2*this._spacingX));return[w,Q]},z._fill=function V(w,Q){var J=this._hexSize,K=this._options.border,$=this._ctx;if($.beginPath(),this._options.transpose)$.moveTo(w-J+K,Q),$.lineTo(w-J/2+K,Q+this._spacingX-K),$.lineTo(w+J/2-K,Q+this._spacingX-K),$.lineTo(w+J-K,Q),$.lineTo(w+J/2-K,Q-this._spacingX+K),$.lineTo(w-J/2+K,Q-this._spacingX+K),$.lineTo(w-J+K,Q);else $.moveTo(w,Q-J+K),$.lineTo(w+this._spacingX-K,Q-J/2+K),$.lineTo(w+this._spacingX-K,Q+J/2-K),$.lineTo(w,Q+J-K),$.lineTo(w-this._spacingX+K,Q+J/2-K),$.lineTo(w-this._spacingX+K,Q-J/2+K),$.lineTo(w,Q-J+K);$.fill()},z._updateSize=function V(){var w=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(w.spacing*(w.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var J,K;if(w.transpose)J="height",K="width";else J="width",K="height";this._ctx.canvas[J]=Math.ceil((w.width+1)*this._spacingX),this._ctx.canvas[K]=Math.ceil((w.height-1)*this._spacingY+2*this._hexSize)},G}(D),s=function(B){V_(G,B);function G(){var V=B.call(this)||this;return V._spacingX=0,V._spacingY=0,V._canvasCache={},V}var z=G.prototype;return z.setOptions=function V(w){B.prototype.setOptions.call(this,w),this._canvasCache={}},z.draw=function V(w,Q){if(G.cache)this._drawWithCache(w);else this._drawNoCache(w,Q)},z._drawWithCache=function V(w){var Q=w[0],J=w[1],K=w[2],$=w[3],Y=w[4],X=""+K+$+Y,L;if(X in this._canvasCache)L=this._canvasCache[X];else{var H=this._options.border;L=document.createElement("canvas");var F=L.getContext("2d");if(L.width=this._spacingX,L.height=this._spacingY,F.fillStyle=Y,F.fillRect(H,H,L.width-H,L.height-H),K){F.fillStyle=$,F.font=this._ctx.font,F.textAlign="center",F.textBaseline="middle";var R=[].concat(K);for(var M=0;M<R.length;M++)F.fillText(R[M],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[X]=L}this._ctx.drawImage(L,Q*this._spacingX,J*this._spacingY)},z._drawNoCache=function V(w,Q){var J=w[0],K=w[1],$=w[2],Y=w[3],X=w[4];if(Q){var L=this._options.border;this._ctx.fillStyle=X,this._ctx.fillRect(J*this._spacingX+L,K*this._spacingY+L,this._spacingX-L,this._spacingY-L)}if(!$)return;this._ctx.fillStyle=Y;var H=[].concat($);for(var F=0;F<H.length;F++)this._ctx.fillText(H[F],(J+0.5)*this._spacingX,Math.ceil((K+0.5)*this._spacingY))},z.computeSize=function V(w,Q){var J=Math.floor(w/this._spacingX),K=Math.floor(Q/this._spacingY);return[J,K]},z.computeFontSize=function V(w,Q){var J=Math.floor(w/this._options.width),K=Math.floor(Q/this._options.height),$=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var Y=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=$;var X=Y/100,L=X*K/J;if(L>1)K=Math.floor(K/L);return Math.floor(K/this._options.spacing)},z._normalizedEventToPosition=function V(w,Q){return[Math.floor(w/this._spacingX),Math.floor(Q/this._spacingY)]},z._updateSize=function V(){var w=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(w.spacing*Q),this._spacingY=Math.ceil(w.spacing*w.fontSize),w.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=w.width*this._spacingX,this._ctx.canvas.height=w.height*this._spacingY},G}(D);s.cache=!1;var x=function(B){V_(G,B);function G(){var V=B.call(this)||this;return V._colorCanvas=document.createElement("canvas"),V}var z=G.prototype;return z.draw=function V(w,Q){var J=w[0],K=w[1],$=w[2],Y=w[3],X=w[4],L=this._options.tileWidth,H=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(J*L,K*H,L,H);else this._ctx.fillStyle=X,this._ctx.fillRect(J*L,K*H,L,H);if(!$)return;var F=[].concat($),R=[].concat(Y),M=[].concat(X);for(var O=0;O<F.length;O++){var k=this._options.tileMap[F[O]];if(!k)throw new Error('Char "'+F[O]+'" not found in tileMap');if(this._options.tileColorize){var I=this._colorCanvas,T=I.getContext("2d");T.globalCompositeOperation="source-over",T.clearRect(0,0,L,H);var y=R[O],e=M[O];if(T.drawImage(this._options.tileSet,k[0],k[1],L,H,0,0,L,H),y!="transparent")T.fillStyle=y,T.globalCompositeOperation="source-atop",T.fillRect(0,0,L,H);if(e!="transparent")T.fillStyle=e,T.globalCompositeOperation="destination-over",T.fillRect(0,0,L,H);this._ctx.drawImage(I,J*L,K*H,L,H)}else this._ctx.drawImage(this._options.tileSet,k[0],k[1],L,H,J*L,K*H,L,H)}},z.computeSize=function V(w,Q){var J=Math.floor(w/this._options.tileWidth),K=Math.floor(Q/this._options.tileHeight);return[J,K]},z.computeFontSize=function V(){throw new Error("Tile backend does not understand font size")},z._normalizedEventToPosition=function V(w,Q){return[Math.floor(w/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},z._updateSize=function V(){var w=this._options;this._ctx.canvas.width=w.width*w.tileWidth,this._ctx.canvas.height=w.height*w.tileHeight,this._colorCanvas.width=w.tileWidth,this._colorCanvas.height=w.tileHeight},G}(D);function p(B){var G,z;if(B in E)G=E[B];else{if(B.charAt(0)=="#"){var V=B.match(/[0-9a-f]/gi)||[],w=V.map(function(J){return parseInt(J,16)});if(w.length==3)G=w.map(function(J){return J*17});else{for(var Q=0;Q<3;Q++)w[Q+1]+=16*w[Q],w.splice(Q,1);G=w}}else if(z=B.match(/rgb\(([0-9, ]+)\)/i))G=z[1].split(/\s*,\s*/).map(function(J){return parseInt(J)});else G=[0,0,0];E[B]=G}return G.slice()}function Q_(B){var G=B.slice();for(var z=arguments.length,V=new Array(z>1?z-1:0),w=1;w<z;w++)V[w-1]=arguments[w];for(var Q=0;Q<3;Q++)for(var J=0;J<V.length;J++)G[Q]+=V[J][Q];return G}function m(B){for(var G=arguments.length,z=new Array(G>1?G-1:0),V=1;V<G;V++)z[V-1]=arguments[V];for(var w=0;w<3;w++)for(var Q=0;Q<z.length;Q++)B[w]+=z[Q][w];return B}function l(B){var G=B.slice();for(var z=arguments.length,V=new Array(z>1?z-1:0),w=1;w<z;w++)V[w-1]=arguments[w];for(var Q=0;Q<3;Q++){for(var J=0;J<V.length;J++)G[Q]*=V[J][Q]/255;G[Q]=Math.round(G[Q])}return G}function n(B){for(var G=arguments.length,z=new Array(G>1?G-1:0),V=1;V<G;V++)z[V-1]=arguments[V];for(var w=0;w<3;w++){for(var Q=0;Q<z.length;Q++)B[w]*=z[Q][w]/255;B[w]=Math.round(B[w])}return B}function q_(B,G,z){if(z===void 0)z=0.5;var V=B.slice();for(var w=0;w<3;w++)V[w]=Math.round(V[w]+z*(G[w]-B[w]));return V}var a=q_;function v(B,G,z){if(z===void 0)z=0.5;var V=g(B),w=g(G);for(var Q=0;Q<3;Q++)V[Q]+=z*(w[Q]-V[Q]);return t(V)}var S=v;function f(B,G){if(!(G instanceof Array))G=Math.round(U.getNormal(0,G));var z=B.slice();for(var V=0;V<3;V++)z[V]+=G instanceof Array?Math.round(U.getNormal(0,G[V])):G;return z}function g(B){var G=B[0]/255,z=B[1]/255,V=B[2]/255,w=Math.max(G,z,V),Q=Math.min(G,z,V),J=0,K,$=(w+Q)/2;if(w==Q)K=0;else{var Y=w-Q;switch(K=$>0.5?Y/(2-w-Q):Y/(w+Q),w){case G:J=(z-V)/Y+(z<V?6:0);break;case z:J=(V-G)/Y+2;break;case V:J=(G-z)/Y+4;break}J/=6}return[J,K,$]}function __(B,G,z){if(z<0)z+=1;if(z>1)z-=1;if(z<0.16666666666666666)return B+(G-B)*6*z;if(z<0.5)return G;if(z<0.6666666666666666)return B+(G-B)*(0.6666666666666666-z)*6;return B}function t(B){var G=B[2];if(B[1]==0)return G=Math.round(G*255),[G,G,G];else{var z=B[1],V=G<0.5?G*(1+z):G+z-G*z,w=2*G-V,Q=__(w,V,B[0]+0.3333333333333333),J=__(w,V,B[0]),K=__(w,V,B[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(J*255),Math.round(K*255)]}}function u(B){var G=B.map(function(z){return b(z,0,255)});return"rgb("+G.join(",")+")"}function N(B){var G=B.map(function(z){return b(z,0,255).toString(16).padStart(2,"0")});return"#"+G.join("")}var E={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},i=Object.freeze({__proto__:null,fromString:p,add:Q_,add_:m,multiply:l,multiply_:n,interpolate:q_,lerp:a,interpolateHSL:v,lerpHSL:S,randomize:f,rgb2hsl:g,hsl2rgb:t,toRGB:u,toHex:N}),w_=function(B){V_(G,B);function G(){var V=B.call(this)||this;V._uniforms={};try{V._gl=V._initWebGL()}catch(w){if(typeof w==="string")alert(w);else if(w instanceof Error)alert(w.message)}return V}G.isSupported=function V(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var z=G.prototype;return z.schedule=function V(w){requestAnimationFrame(w)},z.getContainer=function V(){return this._gl.canvas},z.setOptions=function V(w){var Q=this;B.prototype.setOptions.call(this,w),this._updateSize();var J=this._options.tileSet;if(J&&"complete"in J&&!J.complete)J.addEventListener("load",function(){return Q._updateTexture(J)});else this._updateTexture(J)},z.draw=function V(w,Q){var J=this._gl,K=this._options,$=w[0],Y=w[1],X=w[2],L=w[3],H=w[4],F=J.canvas.height-(Y+1)*K.tileHeight;if(J.scissor($*K.tileWidth,F,K.tileWidth,K.tileHeight),Q){if(K.tileColorize)J.clearColor(0,0,0,0);else J.clearColor.apply(J,s_(H));J.clear(J.COLOR_BUFFER_BIT)}if(!X)return;var R=[].concat(X),M=[].concat(H),O=[].concat(L);J.uniform2fv(this._uniforms.targetPosRel,[$,Y]);for(var k=0;k<R.length;k++){var I=this._options.tileMap[R[k]];if(!I)throw new Error('Char "'+R[k]+'" not found in tileMap');if(J.uniform1f(this._uniforms.colorize,K.tileColorize?1:0),J.uniform2fv(this._uniforms.tilesetPosAbs,I),K.tileColorize)J.uniform4fv(this._uniforms.tint,s_(O[k])),J.uniform4fv(this._uniforms.bg,s_(M[k]));J.drawArrays(J.TRIANGLE_STRIP,0,4)}},z.clear=function V(){var w=this._gl;w.clearColor.apply(w,s_(this._options.bg)),w.scissor(0,0,w.canvas.width,w.canvas.height),w.clear(w.COLOR_BUFFER_BIT)},z.computeSize=function V(w,Q){var J=Math.floor(w/this._options.tileWidth),K=Math.floor(Q/this._options.tileHeight);return[J,K]},z.computeFontSize=function V(){throw new Error("Tile backend does not understand font size")},z.eventToPosition=function V(w,Q){var J=this._gl.canvas,K=J.getBoundingClientRect();if(w-=K.left,Q-=K.top,w*=J.width/K.width,Q*=J.height/K.height,w<0||Q<0||w>=J.width||Q>=J.height)return[-1,-1];return this._normalizedEventToPosition(w,Q)},z._initWebGL=function V(){var w=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var J=C_(Q,H_,z_);return Q.useProgram(J),Y_(Q),J_.forEach(function(K){return w._uniforms[K]=Q.getUniformLocation(J,K)}),this._program=J,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},z._normalizedEventToPosition=function V(w,Q){return[Math.floor(w/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},z._updateSize=function V(){var w=this._gl,Q=this._options,J=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];w.canvas.width=J[0],w.canvas.height=J[1],w.viewport(0,0,J[0],J[1]),w.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),w.uniform2fv(this._uniforms.targetSize,J)},z._updateTexture=function V(w){V1(this._gl,w)},G}(W),J_=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],H_=`
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
}`.trim(),z_=`
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
}`.trim();function C_(B,G,z){var V=B.createShader(B.VERTEX_SHADER);if(B.shaderSource(V,G),B.compileShader(V),!B.getShaderParameter(V,B.COMPILE_STATUS))throw new Error(B.getShaderInfoLog(V)||"");var w=B.createShader(B.FRAGMENT_SHADER);if(B.shaderSource(w,z),B.compileShader(w),!B.getShaderParameter(w,B.COMPILE_STATUS))throw new Error(B.getShaderInfoLog(w)||"");var Q=B.createProgram();if(B.attachShader(Q,V),B.attachShader(Q,w),B.linkProgram(Q),!B.getProgramParameter(Q,B.LINK_STATUS))throw new Error(B.getProgramInfoLog(Q)||"");return Q}function Y_(B){var G=new Float32Array([0,0,1,0,0,1,1,1]),z=B.createBuffer();B.bindBuffer(B.ARRAY_BUFFER,z),B.bufferData(B.ARRAY_BUFFER,G,B.STATIC_DRAW),B.enableVertexAttribArray(0),B.vertexAttribPointer(0,2,B.FLOAT,!1,0,0)}function V1(B,G){var z=B.createTexture();return B.bindTexture(B.TEXTURE_2D,z),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_MAG_FILTER,B.NEAREST),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_WRAP_S,B.REPEAT),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_WRAP_T,B.REPEAT),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,0),B.texImage2D(B.TEXTURE_2D,0,B.RGBA,B.RGBA,B.UNSIGNED_BYTE,G),z}var f_={};function s_(B){if(!(B in f_)){var G;if(B=="transparent")G=[0,0,0,0];else if(B.indexOf("rgba")>-1){G=(B.match(/[\d.]+/g)||[]).map(Number);for(var z=0;z<3;z++)G[z]=G[z]/255}else G=p(B).map(function(V){return V/255}),G.push(1);f_[B]=G}return f_[B]}function v0(B){return"\x1B[0;48;5;"+x1(B)+"m\x1B[2J"}function E0(B,G){return"\x1B[0;38;5;"+x1(B)+";48;5;"+x1(G)+"m"}function A0(B,G){return"\x1B["+(G+1)+";"+(B+1)+"H"}function x1(B){var G=256,z=6,V=z/G,w=p(B),Q=Math.floor(w[0]*V),J=Math.floor(w[1]*V),K=Math.floor(w[2]*V);return Q*36+J*6+K*1+16}var Uw=function(B){V_(G,B);function G(){var V=B.call(this)||this;return V._offset=[0,0],V._cursor=[-1,-1],V._lastColor="",V}var z=G.prototype;return z.schedule=function V(w){setTimeout(w,16.666666666666668)},z.setOptions=function V(w){B.prototype.setOptions.call(this,w);var Q=[w.width,w.height],J=this.computeSize();this._offset=J.map(function(K,$){return Math.floor((K-Q[$])/2)})},z.clear=function V(){process.stdout.write(v0(this._options.bg))},z.draw=function V(w,Q){var J=w[0],K=w[1],$=w[2],Y=w[3],X=w[4],L=this._offset[0]+J,H=this._offset[1]+K,F=this.computeSize();if(L<0||L>=F[0])return;if(H<0||H>=F[1])return;if(L!==this._cursor[0]||H!==this._cursor[1])process.stdout.write(A0(L,H)),this._cursor[0]=L,this._cursor[1]=H;if(Q){if(!$)$=" "}if(!$)return;var R=E0(Y,X);if(R!==this._lastColor)process.stdout.write(R),this._lastColor=R;if($!="\t"){var M=[].concat($);process.stdout.write(M[0])}if(this._cursor[0]++,this._cursor[0]>=F[0])this._cursor[0]=0,this._cursor[1]++},z.computeFontSize=function V(){throw new Error("Terminal backend has no notion of font size")},z.eventToPosition=function V(w,Q){return[w,Q]},z.computeSize=function V(){return[process.stdout.columns,process.stdout.rows]},G}(W),N0=/%([bc]){([^}]*)}/g,I_=0,l_=1,m1=2,l1=3;function k0(B,G){var z={width:0,height:1},V=c1(B,G),w=0;for(var Q=0;Q<V.length;Q++){var J=V[Q];switch(J.type){case I_:w+=J.value.length;break;case l_:z.height++,z.width=Math.max(z.width,w),w=0;break}}return z.width=Math.max(z.width,w),z}function c1(B,G){var z=[],V=0;B.replace(N0,function(Q,J,K,$){var Y=B.substring(V,$);if(Y.length)z.push({type:I_,value:Y});return z.push({type:J=="c"?m1:l1,value:K.trim()}),V=$+Q.length,""});var w=B.substring(V);if(w.length)z.push({type:I_,value:w});return u0(z,G)}function u0(B,G){if(!G)G=1/0;var z=0,V=0,w=-1;while(z<B.length){var Q=B[z];if(Q.type==l_)V=0,w=-1;if(Q.type!=I_){z++;continue}while(V==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var J=Q.value.indexOf(`
`);if(J!=-1){Q.value=W1(B,z,J,!0);var K=Q.value.split("");while(K.length&&K[K.length-1]==" ")K.pop();Q.value=K.join("")}if(!Q.value.length){B.splice(z,1);continue}if(V+Q.value.length>G){var $=-1;while(!0){var Y=Q.value.indexOf(" ",$+1);if(Y==-1)break;if(V+Y>G)break;$=Y}if($!=-1)Q.value=W1(B,z,$,!0);else if(w!=-1){var X=B[w],L=X.value.lastIndexOf(" ");X.value=W1(B,w,L,!0),z=w}else Q.value=W1(B,z,G-V,!1)}else if(V+=Q.value.length,Q.value.indexOf(" ")!=-1)w=z;z++}B.push({type:l_});var H=null;for(var F=0;F<B.length;F++){var R=B[F];switch(R.type){case I_:H=R;break;case l_:if(H){var M=H.value.split("");while(M.length&&M[M.length-1]==" ")M.pop();H.value=M.join("")}H=null;break}}return B.pop(),B}function W1(B,G,z,V){var w={type:l_},Q={type:I_,value:B[G].value.substring(z+(V?1:0))};return B.splice(G+1,0,w,Q),B[G].value.substring(0,z)}var S0=Object.freeze({__proto__:null,TYPE_TEXT:I_,TYPE_NEWLINE:l_,TYPE_FG:m1,TYPE_BG:l1,measure:k0,tokenize:c1}),p1=80,d1=25,G_={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},f0={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},I0={hex:c,rect:s,tile:x,"tile-gl":w_,term:Uw},g0={width:p1,height:d1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},o_=function(){function B(z){if(z===void 0)z={};this._data={},this._dirty=!1,this._options={},z=Object.assign({},g0,z),this.setOptions(z),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var G=B.prototype;return G.DEBUG=function z(V,w,Q){var J=[this._options.bg,this._options.fg];this.draw(V,w,null,null,J[Q%J.length])},G.clear=function z(){this._data={},this._dirty=!0},G.setOptions=function z(V){if(Object.assign(this._options,V),V.width||V.height||V.fontSize||V.fontFamily||V.spacing||V.layout){if(V.layout){var w=I0[V.layout];this._backend=new w}this._backend.setOptions(this._options),this._dirty=!0}return this},G.getOptions=function z(){return this._options},G.getContainer=function z(){return this._backend.getContainer()},G.computeSize=function z(V,w){return this._backend.computeSize(V,w)},G.computeFontSize=function z(V,w){return this._backend.computeFontSize(V,w)},G.computeTileSize=function z(V,w){var Q=Math.floor(V/this._options.width),J=Math.floor(w/this._options.height);return[Q,J]},G.eventToPosition=function z(V){var w,Q;if("touches"in V)w=V.touches[0].clientX,Q=V.touches[0].clientY;else w=V.clientX,Q=V.clientY;return this._backend.eventToPosition(w,Q)},G.draw=function z(V,w,Q,J,K){if(!J)J=this._options.fg;if(!K)K=this._options.bg;var $=V+","+w;if(this._data[$]=[V,w,Q,J,K],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[$]=!0},G.drawOver=function z(V,w,Q,J,K){var $=V+","+w,Y=this._data[$];if(Y)Y[2]=Q||Y[2],Y[3]=J||Y[3],Y[4]=K||Y[4];else this.draw(V,w,Q,J,K)},G.drawText=function z(V,w,Q,J){var K=null,$=null,Y=V,X=w,L=1;if(!J)J=this._options.width-V;var H=c1(Q,J);while(H.length){var F=H.shift();switch(F.type){case I_:var R=!1,M=!1,O=!1,k=!1;for(var I=0;I<F.value.length;I++){var T=F.value.charCodeAt(I),y=F.value.charAt(I);if(this._options.layout==="term"){var e=T>>8,Z_=e===17||e>=46&&e<=159||e>=172&&e<=215||T>=43360&&T<=43391;if(Z_){this.draw(Y+0,X,y,K,$),this.draw(Y+1,X,"\t",K,$),Y+=2;continue}}if(O=T>65280&&T<65377||T>65500&&T<65512||T>65518,R=y.charCodeAt(0)==32||y.charCodeAt(0)==12288,k&&!O&&!R)Y++;if(O&&!M)Y++;this.draw(Y++,X,y,K,$),M=R,k=O}break;case m1:K=F.value||null;break;case l1:$=F.value||null;break;case l_:Y=V,X++,L++;break}}return L},G._tick=function z(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var V in this._data)this._draw(V,!1)}else for(var w in this._dirty)this._draw(w,!0);this._dirty=!1},G._draw=function z(V,w){var Q=this._data[V];if(Q[4]!=this._options.bg)w=!0;this._backend.draw(Q,w)},B}();o_.Rect=s,o_.Hex=c,o_.Tile=x,o_.TileGL=w_,o_.Term=Uw;var T0=function(){function B(z){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,z),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var V=0;V<this._options.order;V++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var G=B.prototype;return G.clear=function z(){this._data={},this._priorValues={}},G.generate=function z(){var V=[this._sample(this._prefix)];while(V[V.length-1]!=this._boundary)V.push(this._sample(V));return this._join(V.slice(0,-1))},G.observe=function z(V){var w=this._split(V);for(var Q=0;Q<w.length;Q++)this._priorValues[w[Q]]=this._options.prior;w=this._prefix.concat(w).concat(this._suffix);for(var J=this._options.order;J<w.length;J++){var K=w.slice(J-this._options.order,J),$=w[J];for(var Y=0;Y<K.length;Y++){var X=K.slice(Y);this._observeEvent(X,$)}}},G.getStats=function z(){var V=[],w=Object.keys(this._priorValues).length;w--,V.push("distinct samples: "+w);var Q=Object.keys(this._data).length,J=0;for(var K in this._data)J+=Object.keys(this._data[K]).length;return V.push("dictionary size (contexts): "+Q),V.push("dictionary size (events): "+J),V.join(", ")},G._split=function z(V){return V.split(this._options.words?/\s+/:"")},G._join=function z(V){return V.join(this._options.words?" ":"")},G._observeEvent=function z(V,w){var Q=this._join(V);if(!(Q in this._data))this._data[Q]={};var J=this._data[Q];if(!(w in J))J[w]=0;J[w]++},G._sample=function z(V){V=this._backoff(V);var w=this._join(V),Q=this._data[w],J={};if(this._options.prior){for(var K in this._priorValues)J[K]=this._priorValues[K];for(var $ in Q)J[$]+=Q[$]}else J=Q;return U.getWeightedValue(J)},G._backoff=function z(V){if(V.length>this._options.order)V=V.slice(-this._options.order);else if(V.length<this._options.order)V=this._prefix.slice(0,this._options.order-V.length).concat(V);while(!(this._join(V)in this._data)&&V.length>0)V=V.slice(1);return V},B}(),zw=function(){function B(){this.heap=[],this.timestamp=0}var G=B.prototype;return G.lessThan=function z(V,w){return V.key==w.key?V.timestamp<w.timestamp:V.key<w.key},G.shift=function z(V){this.heap=this.heap.map(function(w){var{key:Q,value:J,timestamp:K}=w;return{key:Q+V,value:J,timestamp:K}})},G.len=function z(){return this.heap.length},G.push=function z(V,w){this.timestamp+=1;var Q=this.len();this.heap.push({value:V,timestamp:this.timestamp,key:w}),this.updateUp(Q)},G.pop=function z(){if(this.len()==0)throw new Error("no element to pop");var V=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return V},G.find=function z(V){for(var w=0;w<this.len();w++)if(V==this.heap[w].value)return this.heap[w];return null},G.remove=function z(V){var w=null;for(var Q=0;Q<this.len();Q++)if(V==this.heap[Q].value)w=Q;if(w===null)return!1;if(this.len()>1){var J=this.heap.pop();if(J.value!=V)this.heap[w]=J,this.updateDown(w);return!0}else this.heap.pop();return!0},G.parentNode=function z(V){return Math.floor((V-1)/2)},G.leftChildNode=function z(V){return 2*V+1},G.rightChildNode=function z(V){return 2*V+2},G.existNode=function z(V){return V>=0&&V<this.heap.length},G.swap=function z(V,w){var Q=this.heap[V];this.heap[V]=this.heap[w],this.heap[w]=Q},G.minNode=function z(V){var w=V.filter(this.existNode.bind(this)),Q=w[0];for(var J=N6(w),K;!(K=J()).done;){var $=K.value;if(this.lessThan(this.heap[$],this.heap[Q]))Q=$}return Q},G.updateUp=function z(V){if(V==0)return;var w=this.parentNode(V);if(this.existNode(w)&&this.lessThan(this.heap[V],this.heap[w]))this.swap(V,w),this.updateUp(w)},G.updateDown=function z(V){var w=this.leftChildNode(V),Q=this.rightChildNode(V);if(!this.existNode(w))return;var J=this.minNode([V,w,Q]);if(J!=V)this.swap(V,J),this.updateDown(J)},G.debugPrint=function z(){console.log(this.heap)},B}(),$w=function(){function B(){this._time=0,this._events=new zw}var G=B.prototype;return G.getTime=function z(){return this._time},G.clear=function z(){return this._events=new zw,this},G.add=function z(V,w){this._events.push(V,w)},G.get=function z(){if(!this._events.len())return null;var V=this._events.pop(),w=V.key,Q=V.value;if(w>0)this._time+=w,this._events.shift(-w);return Q},G.getEventTime=function z(V){var w=this._events.find(V);if(w){var Q=w.key;return Q}return},G.remove=function z(V){return this._events.remove(V)},B}(),y1=function(){function B(){this._queue=new $w,this._repeat=[],this._current=null}var G=B.prototype;return G.getTime=function z(){return this._queue.getTime()},G.add=function z(V,w){if(w)this._repeat.push(V);return this},G.getTimeOf=function z(V){return this._queue.getEventTime(V)},G.clear=function z(){return this._queue.clear(),this._repeat=[],this._current=null,this},G.remove=function z(V){var w=this._queue.remove(V),Q=this._repeat.indexOf(V);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==V)this._current=null;return w},G.next=function z(){return this._current=this._queue.get(),this._current},B}(),h0=function(B){V_(G,B);function G(){return B.apply(this,arguments)||this}var z=G.prototype;return z.add=function V(w,Q){return this._queue.add(w,0),B.prototype.add.call(this,w,Q)},z.next=function V(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return B.prototype.next.call(this)},G}(y1),x0=function(B){V_(G,B);function G(){return B.apply(this,arguments)||this}var z=G.prototype;return z.add=function V(w,Q,J){return this._queue.add(w,J!==void 0?J:1/w.getSpeed()),B.prototype.add.call(this,w,Q)},z.next=function V(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return B.prototype.next.call(this)},G}(y1),m0=function(B){V_(G,B);function G(){var V=B.call(this)||this;return V._defaultDuration=1,V._duration=V._defaultDuration,V}var z=G.prototype;return z.add=function V(w,Q,J){return this._queue.add(w,J||this._defaultDuration),B.prototype.add.call(this,w,Q)},z.clear=function V(){return this._duration=this._defaultDuration,B.prototype.clear.call(this)},z.remove=function V(w){if(w==this._current)this._duration=this._defaultDuration;return B.prototype.remove.call(this,w)},z.next=function V(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return B.prototype.next.call(this)},z.setDuration=function V(w){if(this._current)this._duration=w;return this},G}(y1),l0={Simple:h0,Speed:x0,Action:m0},r1=function(){function B(z,V){if(V===void 0)V={};this._lightPasses=z,this._options=Object.assign({topology:8},V)}var G=B.prototype;return G._getCircle=function z(V,w,Q){var J=[],K,$,Y;switch(this._options.topology){case 4:$=1,Y=[0,1],K=[G_[8][7],G_[8][1],G_[8][3],G_[8][5]];break;case 6:K=G_[6],$=1,Y=[-1,1];break;case 8:K=G_[4],$=2,Y=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var X=V+Y[0]*Q,L=w+Y[1]*Q;for(var H=0;H<K.length;H++)for(var F=0;F<Q*$;F++)J.push([X,L]),X+=K[H][0],L+=K[H][1];return J},B}(),c0=function(B){V_(G,B);function G(){return B.apply(this,arguments)||this}var z=G.prototype;return z.compute=function V(w,Q,J,K){if(K(w,Q,0,1),!this._lightPasses(w,Q))return;var $=[],Y,X,L,H,F;for(var R=1;R<=J;R++){var M=this._getCircle(w,Q,R),O=360/M.length;for(var k=0;k<M.length;k++){if(L=M[k][0],H=M[k][1],Y=O*(k-0.5),X=Y+O,F=!this._lightPasses(L,H),this._visibleCoords(Math.floor(Y),Math.ceil(X),F,$))K(L,H,R,1);if($.length==2&&$[0]==0&&$[1]==360)return}}},z._visibleCoords=function V(w,Q,J,K){if(w<0){var $=this._visibleCoords(0,Q,J,K),Y=this._visibleCoords(360+w,360,J,K);return $||Y}var X=0;while(X<K.length&&K[X]<w)X++;if(X==K.length){if(J)K.push(w,Q);return!0}var L=0;if(X%2){while(X<K.length&&K[X]<Q)X++,L++;if(L==0)return!1;if(J)if(L%2)K.splice(X-L,L,Q);else K.splice(X-L,L);return!0}else{while(X<K.length&&K[X]<Q)X++,L++;if(w==K[X-L]&&L==1)return!1;if(J)if(L%2)K.splice(X-L,L,w);else K.splice(X-L,L,w,Q);return!0}},G}(r1),p0=function(B){V_(G,B);function G(){return B.apply(this,arguments)||this}var z=G.prototype;return z.compute=function V(w,Q,J,K){if(K(w,Q,0,1),!this._lightPasses(w,Q))return;var $=[],Y,X,L,H,F,R;for(var M=1;M<=J;M++){var O=this._getCircle(w,Q,M),k=O.length;for(var I=0;I<k;I++){if(Y=O[I][0],X=O[I][1],H=[I?2*I-1:2*k-1,2*k],F=[2*I+1,2*k],L=!this._lightPasses(Y,X),R=this._checkVisibility(H,F,L,$),R)K(Y,X,M,R);if($.length==2&&$[0][0]==0&&$[1][0]==$[1][1])return}}},z._checkVisibility=function V(w,Q,J,K){if(w[0]>Q[0]){var $=this._checkVisibility(w,[w[1],w[1]],J,K),Y=this._checkVisibility([0,1],Q,J,K);return($+Y)/2}var X=0,L=!1;while(X<K.length){var H=K[X],F=H[0]*w[1]-w[0]*H[1];if(F>=0){if(F==0&&!(X%2))L=!0;break}X++}var R=K.length,M=!1;while(R--){var O=K[R],k=Q[0]*O[1]-O[0]*Q[1];if(k>=0){if(k==0&&R%2)M=!0;break}}var I=!0;if(X==R&&(L||M))I=!1;else if(L&&M&&X+1==R&&R%2)I=!1;else if(X>R&&X%2)I=!1;if(!I)return 0;var T,y=R-X+1;if(y%2)if(X%2){var e=K[X];if(T=(Q[0]*e[1]-e[0]*Q[1])/(e[1]*Q[1]),J)K.splice(X,y,Q)}else{var Z_=K[R];if(T=(Z_[0]*w[1]-w[0]*Z_[1])/(w[1]*Z_[1]),J)K.splice(X,y,w)}else if(X%2){var U_=K[X],L_=K[R];if(T=(L_[0]*U_[1]-U_[0]*L_[1])/(U_[1]*L_[1]),J)K.splice(X,y)}else{if(J)K.splice(X,y,w,Q);return 1}var v_=(Q[0]*w[1]-w[0]*Q[1])/(w[1]*Q[1]);return T/v_},G}(r1),g_=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],d0=function(B){V_(G,B);function G(){return B.apply(this,arguments)||this}var z=G.prototype;return z.compute=function V(w,Q,J,K){K(w,Q,0,1);for(var $=0;$<g_.length;$++)this._renderOctant(w,Q,g_[$],J,K)},z.compute180=function V(w,Q,J,K,$){$(w,Q,0,1);var Y=(K-1+8)%8,X=(K-2+8)%8,L=(K+1+8)%8;this._renderOctant(w,Q,g_[X],J,$),this._renderOctant(w,Q,g_[Y],J,$),this._renderOctant(w,Q,g_[K],J,$),this._renderOctant(w,Q,g_[L],J,$)},z.compute90=function V(w,Q,J,K,$){$(w,Q,0,1);var Y=(K-1+8)%8;this._renderOctant(w,Q,g_[K],J,$),this._renderOctant(w,Q,g_[Y],J,$)},z._renderOctant=function V(w,Q,J,K,$){this._castVisibility(w,Q,1,1,0,K+1,J[0],J[1],J[2],J[3],$)},z._castVisibility=function V(w,Q,J,K,$,Y,X,L,H,F,R){if(K<$)return;for(var M=J;M<=Y;M++){var O=-M-1,k=-M,I=!1,T=0;while(O<=0){O+=1;var y=w+O*X+k*L,e=Q+O*H+k*F,Z_=(O-0.5)/(k+0.5),U_=(O+0.5)/(k-0.5);if(U_>K)continue;if(Z_<$)break;if(O*O+k*k<Y*Y)R(y,e,M,1);if(!I){if(!this._lightPasses(y,e)&&M<Y)I=!0,this._castVisibility(w,Q,M+1,K,Z_,Y,X,L,H,F,R),T=U_}else{if(!this._lightPasses(y,e)){T=U_;continue}I=!1,K=T}}if(I)break}},G}(r1),y0={DiscreteShadowcasting:c0,PreciseShadowcasting:p0,RecursiveShadowcasting:d0},c_=function(){function B(z,V){if(z===void 0)z=p1;if(V===void 0)V=d1;this._width=z,this._height=V}var G=B.prototype;return G._fillMap=function z(V){var w=[];for(var Q=0;Q<this._width;Q++){w.push([]);for(var J=0;J<this._height;J++)w[Q].push(V)}return w},B}(),r0=function(B){V_(G,B);function G(){return B.apply(this,arguments)||this}var z=G.prototype;return z.create=function V(w){var Q=this._width-1,J=this._height-1;for(var K=0;K<=Q;K++)for(var $=0;$<=J;$++){var Y=K&&$&&K<Q&&$<J;w(K,$,Y?0:1)}return this},G}(c_),Gw=function(B){V_(G,B);function G(V,w){var Q=B.call(this,V,w)||this;return Q._rooms=[],Q._corridors=[],Q}var z=G.prototype;return z.getRooms=function V(){return this._rooms},z.getCorridors=function V(){return this._corridors},G}(c_),Bw=function B(){},H1=function(B){V_(G,B);function G(V,w,Q,J,K,$){var Y=B.call(this)||this;if(Y._x1=V,Y._y1=w,Y._x2=Q,Y._y2=J,Y._doors={},K!==void 0&&$!==void 0)Y.addDoor(K,$);return Y}G.createRandomAt=function V(w,Q,J,K,$){var Y=$.roomWidth[0],X=$.roomWidth[1],L=U.getUniformInt(Y,X);Y=$.roomHeight[0],X=$.roomHeight[1];var H=U.getUniformInt(Y,X);if(J==1){var F=Q-Math.floor(U.getUniform()*H);return new this(w+1,F,w+L,F+H-1,w,Q)}if(J==-1){var R=Q-Math.floor(U.getUniform()*H);return new this(w-L,R,w-1,R+H-1,w,Q)}if(K==1){var M=w-Math.floor(U.getUniform()*L);return new this(M,Q+1,M+L-1,Q+H,w,Q)}if(K==-1){var O=w-Math.floor(U.getUniform()*L);return new this(O,Q-H,O+L-1,Q-1,w,Q)}throw new Error("dx or dy must be 1 or -1")},G.createRandomCenter=function V(w,Q,J){var K=J.roomWidth[0],$=J.roomWidth[1],Y=U.getUniformInt(K,$);K=J.roomHeight[0],$=J.roomHeight[1];var X=U.getUniformInt(K,$),L=w-Math.floor(U.getUniform()*Y),H=Q-Math.floor(U.getUniform()*X),F=L+Y-1,R=H+X-1;return new this(L,H,F,R)},G.createRandom=function V(w,Q,J){var K=J.roomWidth[0],$=J.roomWidth[1],Y=U.getUniformInt(K,$);K=J.roomHeight[0],$=J.roomHeight[1];var X=U.getUniformInt(K,$),L=w-Y-1,H=Q-X-1,F=1+Math.floor(U.getUniform()*L),R=1+Math.floor(U.getUniform()*H),M=F+Y-1,O=R+X-1;return new this(F,R,M,O)};var z=G.prototype;return z.addDoor=function V(w,Q){return this._doors[w+","+Q]=1,this},z.getDoors=function V(w){for(var Q in this._doors){var J=Q.split(",");w(parseInt(J[0]),parseInt(J[1]))}return this},z.clearDoors=function V(){return this._doors={},this},z.addDoors=function V(w){var Q=this._x1-1,J=this._x2+1,K=this._y1-1,$=this._y2+1;for(var Y=Q;Y<=J;Y++)for(var X=K;X<=$;X++){if(Y!=Q&&Y!=J&&X!=K&&X!=$)continue;if(w(Y,X))continue;this.addDoor(Y,X)}return this},z.debug=function V(){console.log("room",this._x1,this._y1,this._x2,this._y2)},z.isValid=function V(w,Q){var J=this._x1-1,K=this._x2+1,$=this._y1-1,Y=this._y2+1;for(var X=J;X<=K;X++)for(var L=$;L<=Y;L++)if(X==J||X==K||L==$||L==Y){if(!w(X,L))return!1}else if(!Q(X,L))return!1;return!0},z.create=function V(w){var Q=this._x1-1,J=this._x2+1,K=this._y1-1,$=this._y2+1,Y=0;for(var X=Q;X<=J;X++)for(var L=K;L<=$;L++){if(X+","+L in this._doors)Y=2;else if(X==Q||X==J||L==K||L==$)Y=1;else Y=0;w(X,L,Y)}},z.getCenter=function V(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},z.getLeft=function V(){return this._x1},z.getRight=function V(){return this._x2},z.getTop=function V(){return this._y1},z.getBottom=function V(){return this._y2},G}(Bw),n1=function(B){V_(G,B);function G(V,w,Q,J){var K=B.call(this)||this;return K._startX=V,K._startY=w,K._endX=Q,K._endY=J,K._endsWithAWall=!0,K}G.createRandomAt=function V(w,Q,J,K,$){var Y=$.corridorLength[0],X=$.corridorLength[1],L=U.getUniformInt(Y,X);return new this(w,Q,w+J*L,Q+K*L)};var z=G.prototype;return z.debug=function V(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},z.isValid=function V(w,Q){var J=this._startX,K=this._startY,$=this._endX-J,Y=this._endY-K,X=1+Math.max(Math.abs($),Math.abs(Y));if($)$=$/Math.abs($);if(Y)Y=Y/Math.abs(Y);var L=Y,H=-$,F=!0;for(var R=0;R<X;R++){var M=J+R*$,O=K+R*Y;if(!Q(M,O))F=!1;if(!w(M+L,O+H))F=!1;if(!w(M-L,O-H))F=!1;if(!F){X=R,this._endX=M-$,this._endY=O-Y;break}}if(X==0)return!1;if(X==1&&w(this._endX+$,this._endY+Y))return!1;var k=!w(this._endX+$+L,this._endY+Y+H),I=!w(this._endX+$-L,this._endY+Y-H);if(this._endsWithAWall=w(this._endX+$,this._endY+Y),(k||I)&&this._endsWithAWall)return!1;return!0},z.create=function V(w){var Q=this._startX,J=this._startY,K=this._endX-Q,$=this._endY-J,Y=1+Math.max(Math.abs(K),Math.abs($));if(K)K=K/Math.abs(K);if($)$=$/Math.abs($);for(var X=0;X<Y;X++){var L=Q+X*K,H=J+X*$;w(L,H,0)}return!0},z.createPriorityWalls=function V(w){if(!this._endsWithAWall)return;var Q=this._startX,J=this._startY,K=this._endX-Q,$=this._endY-J;if(K)K=K/Math.abs(K);if($)$=$/Math.abs($);var Y=$,X=-K;w(this._endX+K,this._endY+$),w(this._endX+Y,this._endY+X),w(this._endX-Y,this._endY-X)},G}(Bw),n0=function(B){V_(G,B);function G(V,w,Q){var J=B.call(this,V,w)||this;return J._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(J._options,Q),J._map=[],J._dug=0,J._roomAttempts=20,J._corridorAttempts=20,J._connected=[],J._unconnected=[],J._digCallback=J._digCallback.bind(y_(J)),J._canBeDugCallback=J._canBeDugCallback.bind(y_(J)),J._isWallCallback=J._isWallCallback.bind(y_(J)),J}var z=G.prototype;return z.create=function V(w){var Q=Date.now();while(!0){var J=Date.now();if(J-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(w)for(var K=0;K<this._width;K++)for(var $=0;$<this._height;$++)w(K,$,this._map[K][$]);return this},z._generateRooms=function V(){var w=this._width-2,Q=this._height-2,J;do if(J=this._generateRoom(),this._dug/(w*Q)>this._options.roomDugPercentage)break;while(J)},z._generateRoom=function V(){var w=0;while(w<this._roomAttempts){w++;var Q=H1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},z._generateCorridors=function V(){var w=0;while(w<this._corridorAttempts){w++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var J=this._rooms[Q];J.clearDoors(),J.create(this._digCallback)}if(this._unconnected=U.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var K=U.getItem(this._connected);if(!K)break;var $=this._closestRoom(this._unconnected,K);if(!$)break;var Y=this._closestRoom(this._connected,$);if(!Y)break;var X=this._connectRooms($,Y);if(!X)break;if(!this._unconnected.length)return!0}}return!1},z._closestRoom=function V(w,Q){var J=1/0,K=Q.getCenter(),$=null;for(var Y=0;Y<w.length;Y++){var X=w[Y],L=X.getCenter(),H=L[0]-K[0],F=L[1]-K[1],R=H*H+F*F;if(R<J)J=R,$=X}return $},z._connectRooms=function V(w,Q){var J=w.getCenter(),K=Q.getCenter(),$=K[0]-J[0],Y=K[1]-J[1],X,L,H,F,R,M,O;if(Math.abs($)<Math.abs(Y))H=Y>0?2:0,F=(H+2)%4,R=Q.getLeft(),M=Q.getRight(),O=0;else H=$>0?1:3,F=(H+2)%4,R=Q.getTop(),M=Q.getBottom(),O=1;if(X=this._placeInWall(w,H),!X)return!1;if(X[O]>=R&&X[O]<=M){L=X.slice();var k=0;switch(F){case 0:k=Q.getTop()-1;break;case 1:k=Q.getRight()+1;break;case 2:k=Q.getBottom()+1;break;case 3:k=Q.getLeft()-1;break}L[(O+1)%2]=k,this._digLine([X,L])}else if(X[O]<R-1||X[O]>M+1){var I=X[O]-K[O],T=0;switch(F){case 0:case 1:T=I<0?3:1;break;case 2:case 3:T=I<0?1:3;break}if(F=(F+T)%4,L=this._placeInWall(Q,F),!L)return!1;var y=[0,0];y[O]=X[O];var e=(O+1)%2;y[e]=L[e],this._digLine([X,y,L])}else{var Z_=(O+1)%2;if(L=this._placeInWall(Q,F),!L)return!1;var U_=Math.round((L[Z_]+X[Z_])/2),L_=[0,0],v_=[0,0];L_[O]=X[O],L_[Z_]=U_,v_[O]=L[O],v_[Z_]=U_,this._digLine([X,L_,v_,L])}if(w.addDoor(X[0],X[1]),Q.addDoor(L[0],L[1]),O=this._unconnected.indexOf(w),O!=-1)this._unconnected.splice(O,1),this._connected.push(w);if(O=this._unconnected.indexOf(Q),O!=-1)this._unconnected.splice(O,1),this._connected.push(Q);return!0},z._placeInWall=function V(w,Q){var J=[0,0],K=[0,0],$=0;switch(Q){case 0:K=[1,0],J=[w.getLeft(),w.getTop()-1],$=w.getRight()-w.getLeft()+1;break;case 1:K=[0,1],J=[w.getRight()+1,w.getTop()],$=w.getBottom()-w.getTop()+1;break;case 2:K=[1,0],J=[w.getLeft(),w.getBottom()+1],$=w.getRight()-w.getLeft()+1;break;case 3:K=[0,1],J=[w.getLeft()-1,w.getTop()],$=w.getBottom()-w.getTop()+1;break}var Y=[],X=-2;for(var L=0;L<$;L++){var H=J[0]+L*K[0],F=J[1]+L*K[1];Y.push(null);var R=this._map[H][F]==1;if(R){if(X!=L-1)Y[L]=[H,F]}else if(X=L,L)Y[L-1]=null}for(var M=Y.length-1;M>=0;M--)if(!Y[M])Y.splice(M,1);return Y.length?U.getItem(Y):null},z._digLine=function V(w){for(var Q=1;Q<w.length;Q++){var J=w[Q-1],K=w[Q],$=new n1(J[0],J[1],K[0],K[1]);$.create(this._digCallback),this._corridors.push($)}},z._digCallback=function V(w,Q,J){if(this._map[w][Q]=J,J==0)this._dug++},z._isWallCallback=function V(w,Q){if(w<0||Q<0||w>=this._width||Q>=this._height)return!1;return this._map[w][Q]==1},z._canBeDugCallback=function V(w,Q){if(w<1||Q<1||w+1>=this._width||Q+1>=this._height)return!1;return this._map[w][Q]==1},G}(Gw),s0=function(B){V_(G,B);function G(V,w,Q){var J;if(Q===void 0)Q={};return J=B.call(this,V,w)||this,J._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},J.setOptions(Q),J._dirs=G_[J._options.topology],J._map=J._fillMap(0),J}var z=G.prototype;return z.randomize=function V(w){for(var Q=0;Q<this._width;Q++)for(var J=0;J<this._height;J++)this._map[Q][J]=U.getUniform()<w?1:0;return this},z.setOptions=function V(w){Object.assign(this._options,w)},z.set=function V(w,Q,J){this._map[w][Q]=J},z.create=function V(w){var Q=this._fillMap(0),J=this._options.born,K=this._options.survive;for(var $=0;$<this._height;$++){var Y=1,X=0;if(this._options.topology==6)Y=2,X=$%2;for(var L=X;L<this._width;L+=Y){var H=this._map[L][$],F=this._getNeighbors(L,$);if(H&&K.indexOf(F)!=-1)Q[L][$]=1;else if(!H&&J.indexOf(F)!=-1)Q[L][$]=1}}this._map=Q,w&&this._serviceCallback(w)},z._serviceCallback=function V(w){for(var Q=0;Q<this._height;Q++){var J=1,K=0;if(this._options.topology==6)J=2,K=Q%2;for(var $=K;$<this._width;$+=J)w($,Q,this._map[$][Q])}},z._getNeighbors=function V(w,Q){var J=0;for(var K=0;K<this._dirs.length;K++){var $=this._dirs[K],Y=w+$[0],X=Q+$[1];if(Y<0||Y>=this._width||X<0||X>=this._height)continue;J+=this._map[Y][X]==1?1:0}return J},z.connect=function V(w,Q,J){if(!Q)Q=0;var K=[],$={},Y=1,X=[0,0];if(this._options.topology==6)Y=2,X=[0,1];for(var L=0;L<this._height;L++)for(var H=X[L%2];H<this._width;H+=Y)if(this._freeSpace(H,L,Q)){var F=[H,L];$[this._pointKey(F)]=F,K.push([H,L])}var R=K[U.getUniformInt(0,K.length-1)],M=this._pointKey(R),O={};O[M]=R,delete $[M],this._findConnected(O,$,[R],!1,Q);while(Object.keys($).length>0){var k=this._getFromTo(O,$),I=k[0],T=k[1],y={};y[this._pointKey(I)]=I,this._findConnected(y,$,[I],!0,Q);var e=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;e.call(this,T,I,O,$,Q,J);for(var Z_ in y){var U_=y[Z_];this._map[U_[0]][U_[1]]=Q,O[Z_]=U_,delete $[Z_]}}w&&this._serviceCallback(w)},z._getFromTo=function V(w,Q){var J=[0,0],K=[0,0],$,Y=Object.keys(w),X=Object.keys(Q);for(var L=0;L<5;L++){if(Y.length<X.length){var H=Y;K=w[H[U.getUniformInt(0,H.length-1)]],J=this._getClosest(K,Q)}else{var F=X;J=Q[F[U.getUniformInt(0,F.length-1)]],K=this._getClosest(J,w)}if($=(J[0]-K[0])*(J[0]-K[0])+(J[1]-K[1])*(J[1]-K[1]),$<64)break}return[J,K]},z._getClosest=function V(w,Q){var J=null,K=null;for(var $ in Q){var Y=Q[$],X=(Y[0]-w[0])*(Y[0]-w[0])+(Y[1]-w[1])*(Y[1]-w[1]);if(K==null||X<K)K=X,J=Y}return J},z._findConnected=function V(w,Q,J,K,$){while(J.length>0){var Y=J.splice(0,1)[0],X=void 0;if(this._options.topology==6)X=[[Y[0]+2,Y[1]],[Y[0]+1,Y[1]-1],[Y[0]-1,Y[1]-1],[Y[0]-2,Y[1]],[Y[0]-1,Y[1]+1],[Y[0]+1,Y[1]+1]];else X=[[Y[0]+1,Y[1]],[Y[0]-1,Y[1]],[Y[0],Y[1]+1],[Y[0],Y[1]-1]];for(var L=0;L<X.length;L++){var H=this._pointKey(X[L]);if(w[H]==null&&this._freeSpace(X[L][0],X[L][1],$)){if(w[H]=X[L],!K)delete Q[H];J.push(X[L])}}}},z._tunnelToConnected=function V(w,Q,J,K,$,Y){var X,L;if(Q[0]<w[0])X=Q,L=w;else X=w,L=Q;for(var H=X[0];H<=L[0];H++){this._map[H][X[1]]=$;var F=[H,X[1]],R=this._pointKey(F);J[R]=F,delete K[R]}if(Y&&X[0]<L[0])Y(X,[L[0],X[1]]);var M=L[0];if(Q[1]<w[1])X=Q,L=w;else X=w,L=Q;for(var O=X[1];O<L[1];O++){this._map[M][O]=$;var k=[M,O],I=this._pointKey(k);J[I]=k,delete K[I]}if(Y&&X[1]<L[1])Y([L[0],X[1]],[L[0],L[1]])},z._tunnelToConnected6=function V(w,Q,J,K,$,Y){var X,L;if(Q[0]<w[0])X=Q,L=w;else X=w,L=Q;var H=X[0],F=X[1];while(!(H==L[0]&&F==L[1])){var R=2;if(F<L[1])F++,R=1;else if(F>L[1])F--,R=1;if(H<L[0])H+=R;else if(H>L[0])H-=R;else if(L[1]%2)H-=R;else H+=R;this._map[H][F]=$;var M=[H,F],O=this._pointKey(M);J[O]=M,delete K[O]}if(Y)Y(Q,w)},z._freeSpace=function V(w,Q,J){return w>=0&&w<this._width&&Q>=0&&Q<this._height&&this._map[w][Q]==J},z._pointKey=function V(w){return w[0]+"."+w[1]},G}(c_),o0={room:H1,corridor:n1},a0=function(B){V_(G,B);function G(V,w,Q){var J;if(Q===void 0)Q={};return J=B.call(this,V,w)||this,J._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),J._features={room:4,corridor:4},J._map=[],J._featureAttempts=20,J._walls={},J._dug=0,J._digCallback=J._digCallback.bind(y_(J)),J._canBeDugCallback=J._canBeDugCallback.bind(y_(J)),J._isWallCallback=J._isWallCallback.bind(y_(J)),J._priorityWallCallback=J._priorityWallCallback.bind(y_(J)),J}var z=G.prototype;return z.create=function V(w){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var J=Date.now(),K;do{K=0;var $=Date.now();if($-J>this._options.timeLimit)break;var Y=this._findWall();if(!Y)break;var X=Y.split(","),L=parseInt(X[0]),H=parseInt(X[1]),F=this._getDiggingDirection(L,H);if(!F)continue;var R=0;do if(R++,this._tryFeature(L,H,F[0],F[1])){this._removeSurroundingWalls(L,H),this._removeSurroundingWalls(L-F[0],H-F[1]);break}while(R<this._featureAttempts);for(var M in this._walls)if(this._walls[M]>1)K++}while(this._dug/Q<this._options.dugPercentage||K);if(this._addDoors(),w)for(var O=0;O<this._width;O++)for(var k=0;k<this._height;k++)w(O,k,this._map[O][k]);return this._walls={},this._map=[],this},z._digCallback=function V(w,Q,J){if(J==0||J==2)this._map[w][Q]=0,this._dug++;else this._walls[w+","+Q]=1},z._isWallCallback=function V(w,Q){if(w<0||Q<0||w>=this._width||Q>=this._height)return!1;return this._map[w][Q]==1},z._canBeDugCallback=function V(w,Q){if(w<1||Q<1||w+1>=this._width||Q+1>=this._height)return!1;return this._map[w][Q]==1},z._priorityWallCallback=function V(w,Q){this._walls[w+","+Q]=2},z._firstRoom=function V(){var w=Math.floor(this._width/2),Q=Math.floor(this._height/2),J=H1.createRandomCenter(w,Q,this._options);this._rooms.push(J),J.create(this._digCallback)},z._findWall=function V(){var w=[],Q=[];for(var J in this._walls){var K=this._walls[J];if(K==2)Q.push(J);else w.push(J)}var $=Q.length?Q:w;if(!$.length)return null;var Y=U.getItem($.sort());return delete this._walls[Y],Y},z._tryFeature=function V(w,Q,J,K){var $=U.getWeightedValue(this._features),Y=o0[$],X=Y.createRandomAt(w,Q,J,K,this._options);if(!X.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(X.create(this._digCallback),X instanceof H1)this._rooms.push(X);if(X instanceof n1)X.createPriorityWalls(this._priorityWallCallback),this._corridors.push(X);return!0},z._removeSurroundingWalls=function V(w,Q){var J=G_[4];for(var K=0;K<J.length;K++){var $=J[K],Y=w+$[0],X=Q+$[1];delete this._walls[Y+","+X],Y=w+2*$[0],X=Q+2*$[1],delete this._walls[Y+","+X]}},z._getDiggingDirection=function V(w,Q){if(w<=0||Q<=0||w>=this._width-1||Q>=this._height-1)return null;var J=null,K=G_[4];for(var $=0;$<K.length;$++){var Y=K[$],X=w+Y[0],L=Q+Y[1];if(!this._map[X][L]){if(J)return null;J=Y}}if(!J)return null;return[-J[0],-J[1]]},z._addDoors=function V(){var w=this._map;function Q($,Y){return w[$][Y]==1}for(var J=0;J<this._rooms.length;J++){var K=this._rooms[J];K.clearDoors(),K.addDoors(Q)}},G}(Gw);function Xw(B,G,z){z[G[B+1]]=z[B],G[z[B]]=G[B+1],z[B]=B+1,G[B+1]=B}function Yw(B,G,z){z[G[B]]=z[B],G[z[B]]=G[B],z[B]=B,G[B]=B}var i0=function(B){V_(G,B);function G(){return B.apply(this,arguments)||this}var z=G.prototype;return z.create=function V(w){var Q=this._fillMap(1),J=Math.ceil((this._width-2)/2),K=0.375,$=[],Y=[];for(var X=0;X<J;X++)$.push(X),Y.push(X);$.push(J-1);var L;for(L=1;L+3<this._height;L+=2)for(var H=0;H<J;H++){var F=2*H+1,R=L;if(Q[F][R]=0,H!=$[H+1]&&U.getUniform()>K)Xw(H,$,Y),Q[F+1][R]=0;if(H!=$[H]&&U.getUniform()>K)Yw(H,$,Y);else Q[F][R+1]=0}for(var M=0;M<J;M++){var O=2*M+1,k=L;if(Q[O][k]=0,M!=$[M+1]&&(M==$[M]||U.getUniform()>K))Xw(M,$,Y),Q[O+1][k]=0;Yw(M,$,Y)}for(var I=0;I<this._width;I++)for(var T=0;T<this._height;T++)w(I,T,Q[I][T]);return this},G}(c_),t0=function(B){V_(G,B);function G(){var V=B.apply(this,arguments)||this;return V._stack=[],V._map=[],V}var z=G.prototype;return z.create=function V(w){var Q=this._width,J=this._height;this._map=[];for(var K=0;K<Q;K++){this._map.push([]);for(var $=0;$<J;$++){var Y=K==0||$==0||K+1==Q||$+1==J;this._map[K].push(Y?1:0)}}this._stack=[[1,1,Q-2,J-2]],this._process();for(var X=0;X<Q;X++)for(var L=0;L<J;L++)w(X,L,this._map[X][L]);return this._map=[],this},z._process=function V(){while(this._stack.length){var w=this._stack.shift();this._partitionRoom(w)}},z._partitionRoom=function V(w){var Q=[],J=[];for(var K=w[0]+1;K<w[2];K++){var $=this._map[K][w[1]-1],Y=this._map[K][w[3]+1];if($&&Y&&!(K%2))Q.push(K)}for(var X=w[1]+1;X<w[3];X++){var L=this._map[w[0]-1][X],H=this._map[w[2]+1][X];if(L&&H&&!(X%2))J.push(X)}if(!Q.length||!J.length)return;var F=U.getItem(Q),R=U.getItem(J);this._map[F][R]=1;var M=[],O=[];M.push(O);for(var k=w[0];k<F;k++)if(this._map[k][R]=1,k%2)O.push([k,R]);O=[],M.push(O);for(var I=F+1;I<=w[2];I++)if(this._map[I][R]=1,I%2)O.push([I,R]);O=[],M.push(O);for(var T=w[1];T<R;T++)if(this._map[F][T]=1,T%2)O.push([F,T]);O=[],M.push(O);for(var y=R+1;y<=w[3];y++)if(this._map[F][y]=1,y%2)O.push([F,y]);var e=U.getItem(M);for(var Z_=0;Z_<M.length;Z_++){var U_=M[Z_];if(U_==e)continue;var L_=U.getItem(U_);this._map[L_[0]][L_[1]]=0}this._stack.push([w[0],w[1],F-1,R-1]),this._stack.push([F+1,w[1],w[2],R-1]),this._stack.push([w[0],R+1,F-1,w[3]]),this._stack.push([F+1,R+1,w[2],w[3]])},G}(c_),e0=function(B){V_(G,B);function G(V,w,Q){var J;if(Q===void 0)Q=0;return J=B.call(this,V,w)||this,J._regularity=Q,J._map=[],J}var z=G.prototype;return z.create=function V(w){var Q=this._width,J=this._height,K=this._fillMap(1);Q-=Q%2?1:2,J-=J%2?1:2;var $=0,Y=0,X=0,L=0,H=0,F=!1,R=[[0,0],[0,0],[0,0],[0,0]];do{if($=1+2*Math.floor(U.getUniform()*(Q-1)/2),Y=1+2*Math.floor(U.getUniform()*(J-1)/2),!H)K[$][Y]=0;if(!K[$][Y]){this._randomize(R);do{if(Math.floor(U.getUniform()*(this._regularity+1))==0)this._randomize(R);F=!0;for(var M=0;M<4;M++)if(X=$+R[M][0]*2,L=Y+R[M][1]*2,this._isFree(K,X,L,Q,J)){K[X][L]=0,K[$+R[M][0]][Y+R[M][1]]=0,$=X,Y=L,F=!1,H++;break}}while(!F)}}while(H+1<Q*J/4);for(var O=0;O<this._width;O++)for(var k=0;k<this._height;k++)w(O,k,K[O][k]);return this._map=[],this},z._randomize=function V(w){for(var Q=0;Q<4;Q++)w[Q][0]=0,w[Q][1]=0;switch(Math.floor(U.getUniform()*4)){case 0:w[0][0]=-1,w[1][0]=1,w[2][1]=-1,w[3][1]=1;break;case 1:w[3][0]=-1,w[2][0]=1,w[1][1]=-1,w[0][1]=1;break;case 2:w[2][0]=-1,w[3][0]=1,w[0][1]=-1,w[1][1]=1;break;case 3:w[1][0]=-1,w[0][0]=1,w[3][1]=-1,w[2][1]=1;break}},z._isFree=function V(w,Q,J,K,$){if(Q<1||J<1||Q>=K||J>=$)return!1;return w[Q][J]},G}(c_),_6=function(B){V_(G,B);function G(V,w,Q){var J=B.call(this,V,w)||this;if(J.map=[],J.rooms=[],J.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=J._calculateRoomSize(J._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=J._calculateRoomSize(J._height,Q.cellHeight);return J._options=Q,J}var z=G.prototype;return z.create=function V(w){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),w)for(var Q=0;Q<this._width;Q++)for(var J=0;J<this._height;J++)w(Q,J,this.map[Q][J]);return this},z._calculateRoomSize=function V(w,Q){var J=Math.floor(w/Q*0.8),K=Math.floor(w/Q*0.25);if(K<2)K=2;if(J<2)J=2;return[K,J]},z._initRooms=function V(){for(var w=0;w<this._options.cellWidth;w++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[w].push({x:0,y:0,width:0,height:0,connections:[],cellx:w,celly:Q})}},z._connectRooms=function V(){var w=U.getUniformInt(0,this._options.cellWidth-1),Q=U.getUniformInt(0,this._options.cellHeight-1),J,K,$,Y=!1,X,L,H;do{H=[0,2,4,6],H=U.shuffle(H);do{if(Y=!1,J=H.pop(),K=w+G_[8][J][0],$=Q+G_[8][J][1],K<0||K>=this._options.cellWidth)continue;if($<0||$>=this._options.cellHeight)continue;if(X=this.rooms[w][Q],X.connections.length>0){if(X.connections[0][0]==K&&X.connections[0][1]==$)break}if(L=this.rooms[K][$],L.connections.length==0)L.connections.push([w,Q]),this.connectedCells.push([K,$]),w=K,Q=$,Y=!0}while(H.length>0&&Y==!1)}while(H.length>0)},z._connectUnconnectedRooms=function V(){var w=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=U.shuffle(this.connectedCells);var J,K,$;for(var Y=0;Y<this._options.cellWidth;Y++)for(var X=0;X<this._options.cellHeight;X++)if(J=this.rooms[Y][X],J.connections.length==0){var L=[0,2,4,6];L=U.shuffle(L),$=!1;do{var H=L.pop(),F=Y+G_[8][H][0],R=X+G_[8][H][1];if(F<0||F>=w||R<0||R>=Q)continue;if(K=this.rooms[F][R],$=!0,K.connections.length==0)break;for(var M=0;M<K.connections.length;M++)if(K.connections[M][0]==Y&&K.connections[M][1]==X){$=!1;break}if($)break}while(L.length);if($)J.connections.push([K.cellx,K.celly]);else console.log("-- Unable to connect room.")}},z._createRandomRoomConnections=function V(){},z._createRooms=function V(){var w=this._width,Q=this._height,J=this._options.cellWidth,K=this._options.cellHeight,$=Math.floor(this._width/J),Y=Math.floor(this._height/K),X,L,H=this._options.roomWidth,F=this._options.roomHeight,R,M,O;for(var k=0;k<J;k++)for(var I=0;I<K;I++){if(R=$*k,M=Y*I,R==0)R=1;if(M==0)M=1;if(X=U.getUniformInt(H[0],H[1]),L=U.getUniformInt(F[0],F[1]),I>0){O=this.rooms[k][I-1];while(M-(O.y+O.height)<3)M++}if(k>0){O=this.rooms[k-1][I];while(R-(O.x+O.width)<3)R++}var T=Math.round(U.getUniformInt(0,$-X)/2),y=Math.round(U.getUniformInt(0,Y-L)/2);while(R+T+X>=w)if(T)T--;else X--;while(M+y+L>=Q)if(y)y--;else L--;R=R+T,M=M+y,this.rooms[k][I].x=R,this.rooms[k][I].y=M,this.rooms[k][I].width=X,this.rooms[k][I].height=L;for(var e=R;e<R+X;e++)for(var Z_=M;Z_<M+L;Z_++)this.map[e][Z_]=0}},z._getWallPosition=function V(w,Q){var J,K,$;if(Q==1||Q==3){if(J=U.getUniformInt(w.x+1,w.x+w.width-2),Q==1)K=w.y-2,$=K+1;else K=w.y+w.height+1,$=K-1;this.map[J][$]=0}else{if(K=U.getUniformInt(w.y+1,w.y+w.height-2),Q==2)J=w.x+w.width+1,$=J-1;else J=w.x-2,$=J+1;this.map[$][K]=0}return[J,K]},z._drawCorridor=function V(w,Q){var J=Q[0]-w[0],K=Q[1]-w[1],$=w[0],Y=w[1],X,L,H,F,R=[],M=Math.abs(J),O=Math.abs(K),k=U.getUniform(),I=k,T=1-k;if(L=J>0?2:6,H=K>0?4:0,M<O)X=Math.ceil(O*I),R.push([H,X]),R.push([L,M]),X=Math.floor(O*T),R.push([H,X]);else X=Math.ceil(M*I),R.push([L,X]),R.push([H,O]),X=Math.floor(M*T),R.push([L,X]);this.map[$][Y]=0;while(R.length>0){F=R.pop();while(F[1]>0)$+=G_[8][F[0]][0],Y+=G_[8][F[0]][1],this.map[$][Y]=0,F[1]=F[1]-1}},z._createCorridors=function V(){var w=this._options.cellWidth,Q=this._options.cellHeight,J,K,$,Y,X;for(var L=0;L<w;L++)for(var H=0;H<Q;H++){J=this.rooms[L][H];for(var F=0;F<J.connections.length;F++){if(K=J.connections[F],$=this.rooms[K[0]][K[1]],$.cellx>J.cellx)Y=2,X=4;else if($.cellx<J.cellx)Y=4,X=2;else if($.celly>J.celly)Y=3,X=1;else Y=1,X=3;this._drawCorridor(this._getWallPosition(J,Y),this._getWallPosition($,X))}}},G}(c_),w6={Arena:r0,Uniform:n0,Cellular:s0,Digger:a0,EllerMaze:i0,DividedMaze:t0,IceyMaze:e0,Rogue:_6},Q6=function B(){},Z6=0.5*(Math.sqrt(3)-1),K1=(3-Math.sqrt(3))/6,J6=function(B){V_(G,B);function G(V){var w;if(V===void 0)V=256;w=B.call(this)||this,w._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var J=0;J<V;J++)Q.push(J);Q=U.shuffle(Q),w._perms=[],w._indexes=[];for(var K=0;K<2*V;K++)w._perms.push(Q[K%V]),w._indexes.push(w._perms[K]%w._gradients.length);return w}var z=G.prototype;return z.get=function V(w,Q){var J=this._perms,K=this._indexes,$=J.length/2,Y=0,X=0,L=0,H,F=(w+Q)*Z6,R=Math.floor(w+F),M=Math.floor(Q+F),O=(R+M)*K1,k=R-O,I=M-O,T=w-k,y=Q-I,e,Z_;if(T>y)e=1,Z_=0;else e=0,Z_=1;var U_=T-e+K1,L_=y-Z_+K1,v_=T-1+2*K1,s1=y-1+2*K1,o1=j(R,$),a1=j(M,$),q1=0.5-T*T-y*y;if(q1>=0){q1*=q1,H=K[o1+J[a1]];var Ww=this._gradients[H];Y=q1*q1*(Ww[0]*T+Ww[1]*y)}var U1=0.5-U_*U_-L_*L_;if(U1>=0){U1*=U1,H=K[o1+e+J[a1+Z_]];var Hw=this._gradients[H];X=U1*U1*(Hw[0]*U_+Hw[1]*L_)}var z1=0.5-v_*v_-s1*s1;if(z1>=0){z1*=z1,H=K[o1+1+J[a1+1]];var Dw=this._gradients[H];L=z1*z1*(Dw[0]*v_+Dw[1]*s1)}return 70*(Y+X+L)},G}(Q6),V6={Simplex:J6},Lw=function(){function B(z,V,w,Q){if(Q===void 0)Q={};if(this._toX=z,this._toY=V,this._passableCallback=w,this._options=Object.assign({topology:8},Q),this._dirs=G_[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var G=B.prototype;return G._getNeighbors=function z(V,w){var Q=[];for(var J=0;J<this._dirs.length;J++){var K=this._dirs[J],$=V+K[0],Y=w+K[1];if(!this._passableCallback($,Y))continue;Q.push([$,Y])}return Q},B}(),K6=function(B){V_(G,B);function G(V,w,Q,J){var K=B.call(this,V,w,Q,J)||this;return K._computed={},K._todo=[],K._add(V,w,null),K}var z=G.prototype;return z.compute=function V(w,Q,J){var K=w+","+Q;if(!(K in this._computed))this._compute(w,Q);if(!(K in this._computed))return;var $=this._computed[K];while($)J($.x,$.y),$=$.prev},z._compute=function V(w,Q){while(this._todo.length){var J=this._todo.shift();if(J.x==w&&J.y==Q)return;var K=this._getNeighbors(J.x,J.y);for(var $=0;$<K.length;$++){var Y=K[$],X=Y[0],L=Y[1],H=X+","+L;if(H in this._computed)continue;this._add(X,L,J)}}},z._add=function V(w,Q,J){var K={x:w,y:Q,prev:J};this._computed[w+","+Q]=K,this._todo.push(K)},G}(Lw),q6=function(B){V_(G,B);function G(V,w,Q,J){var K;if(J===void 0)J={};return K=B.call(this,V,w,Q,J)||this,K._todo=[],K._done={},K}var z=G.prototype;return z.compute=function V(w,Q,J){this._todo=[],this._done={},this._fromX=w,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var K=this._todo.shift(),$=K.x+","+K.y;if($ in this._done)continue;if(this._done[$]=K,K.x==w&&K.y==Q)break;var Y=this._getNeighbors(K.x,K.y);for(var X=0;X<Y.length;X++){var L=Y[X],H=L[0],F=L[1],R=H+","+F;if(R in this._done)continue;this._add(H,F,K)}}var M=this._done[w+","+Q];if(!M)return;while(M)J(M.x,M.y),M=M.prev},z._add=function V(w,Q,J){var K=this._distance(w,Q),$={x:w,y:Q,prev:J,g:J?J.g+1:0,h:K},Y=$.g+$.h;for(var X=0;X<this._todo.length;X++){var L=this._todo[X],H=L.g+L.h;if(Y<H||Y==H&&K<L.h){this._todo.splice(X,0,$);return}}this._todo.push($)},z._distance=function V(w,Q){switch(this._options.topology){case 4:return Math.abs(w-this._fromX)+Math.abs(Q-this._fromY);case 6:var J=Math.abs(w-this._fromX),K=Math.abs(Q-this._fromY);return K+Math.max(0,(J-K)/2);case 8:return Math.max(Math.abs(w-this._fromX),Math.abs(Q-this._fromY))}},G}(Lw),U6={Dijkstra:K6,AStar:q6},z6=function(){function B(z){this._scheduler=z,this._lock=1}var G=B.prototype;return G.start=function z(){return this.unlock()},G.lock=function z(){return this._lock++,this},G.unlock=function z(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var V=this._scheduler.next();if(!V)return this.lock();var w=V.act();if(w&&w.then)this.lock(),w.then(this.unlock.bind(this))}return this},B}(),$6=function(){function B(z,V){if(V===void 0)V={};this._reflectivityCallback=z,this._options={},V=Object.assign({passes:1,emissionThreshold:100,range:10},V),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(V)}var G=B.prototype;return G.setOptions=function z(V){if(Object.assign(this._options,V),V&&V.range)this.reset();return this},G.setFOV=function z(V){return this._fov=V,this._fovCache={},this},G.setLight=function z(V,w,Q){var J=V+","+w;if(Q)this._lights[J]=typeof Q=="string"?p(Q):Q;else delete this._lights[J];return this},G.clearLights=function z(){this._lights={}},G.reset=function z(){return this._reflectivityCache={},this._fovCache={},this},G.compute=function z(V){var w={},Q={},J={};for(var K in this._lights){var $=this._lights[K];Q[K]=[0,0,0],m(Q[K],$)}for(var Y=0;Y<this._options.passes;Y++){if(this._emitLight(Q,J,w),Y+1==this._options.passes)continue;Q=this._computeEmitters(J,w)}for(var X in J){var L=X.split(","),H=parseInt(L[0]),F=parseInt(L[1]);V(H,F,J[X])}return this},G._emitLight=function z(V,w,Q){for(var J in V){var K=J.split(","),$=parseInt(K[0]),Y=parseInt(K[1]);this._emitLightFromCell($,Y,V[J],w),Q[J]=1}return this},G._computeEmitters=function z(V,w){var Q={};for(var J in V){if(J in w)continue;var K=V[J],$=void 0;if(J in this._reflectivityCache)$=this._reflectivityCache[J];else{var Y=J.split(","),X=parseInt(Y[0]),L=parseInt(Y[1]);$=this._reflectivityCallback(X,L),this._reflectivityCache[J]=$}if($==0)continue;var H=[0,0,0],F=0;for(var R=0;R<3;R++){var M=Math.round(K[R]*$);H[R]=M,F+=M}if(F>this._options.emissionThreshold)Q[J]=H}return Q},G._emitLightFromCell=function z(V,w,Q,J){var K=V+","+w,$;if(K in this._fovCache)$=this._fovCache[K];else $=this._updateFOV(V,w);for(var Y in $){var X=$[Y],L=void 0;if(Y in J)L=J[Y];else L=[0,0,0],J[Y]=L;for(var H=0;H<3;H++)L[H]+=Math.round(Q[H]*X)}return this},G._updateFOV=function z(V,w){var Q=V+","+w,J={};this._fovCache[Q]=J;var K=this._options.range;function $(Y,X,L,H){var F=Y+","+X,R=H*(1-L/K);if(R==0)return;J[F]=R}return this._fov.compute(V,w,K,$.bind(this)),J},B}(),G6=h,B6=i,X6=S0;_.Color=B6,_.DEFAULT_HEIGHT=d1,_.DEFAULT_WIDTH=p1,_.DIRS=G_,_.Display=o_,_.Engine=z6,_.EventQueue=$w,_.FOV=y0,_.KEYS=f0,_.Lighting=$6,_.Map=w6,_.Noise=V6,_.Path=U6,_.RNG=U,_.Scheduler=l0,_.StringGenerator=T0,_.Text=X6,_.Util=G6,Object.defineProperty(_,"__esModule",{value:!0})})});var P6=typeof window!=="undefined"?window.innerWidth:0,F6=typeof window!=="undefined"?window.innerHeight:0;var r={cameraWidth:Math.floor(P6/16),cameraHeight:Math.floor(F6/16),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:16,highlightFriendEnemy:!0,showUI:!0,showTooltip:!0,showEnergy:1,uiEffectsMaxDisplaySize:8,zoom:1},t1={WIDTH:1024,HEIGHT:1024},B_={width:Math.floor(r.cameraWidth*(1/r.zoom)),height:Math.floor(r.cameraHeight*(1/r.zoom)),bg:"transparent",fontSize:Math.floor(r.fontSize*r.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function Fw(_,Z){let q=_.entities[Z];return`DEBUG: ${Z} at ${q.mapId},${q.x},${q.y}`}class D1{name;description;energyDelta;constructor(_,Z,q=0){this.name=_,this.description=Z,this.energyDelta=q}}class $1{name;description;constructor(_,Z){this.name=_,this.description=Z}}class M_{key;description;constructor(_,Z){this.key=_,this.description=Z}}class E_{name;description;tooltip;icon;constructor(_,Z,q="",U){this.name=_,this.description=Z,this.tooltip=q,this.icon=U}}class W_{name;description;icon;color;energyMax;unlockCondition;constructor(_,Z,q,U=100){this.name=_,this.description=Z,this.icon=q,this.energyMax=U,this.color="white",this.unlockCondition=null}}class T_{name;description;color;friendly;hostile;constructor(_,Z,q,U,W){this.name=_,this.description=Z,this.color=q,this.friendly=U,this.hostile=W}}class $_{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(_,Z,q,U="cyberyellow",W=0,D=0,j=0,b=0,C=0,A=[]){this.name=_,this.description=Z,this.icon=q,this.color=U,this.energyDelta=W,this.matter=D,this.gold=j,this.damage=b,this.energyCost=C,this.effects=A}}class o{name;description;tooltip;icon;isBlocking;isSpace;isWater;energyDelta;constructor(_,Z,q="",U=null,W={}){this.name=_,this.description=Z,this.tooltip=q,this.icon=U,this.isBlocking=W.isBlocking||!1,this.isSpace=W.isSpace||!1,this.isWater=W.isWater||!1,this.energyDelta=W.energyDelta||0}}var P={actions:{Enter:new D1("Enter","Enter a portal or plant atmosphere"),Launch:new D1("Launch","Launch into space",-10),Wait:new D1("Wait","Wait one turn in place")},ais:{aggrorange:new $1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new $1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new $1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new $1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",red:"#f00",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M_("N","Move/interact/combat north"),E:new M_("E","Move/interact/combat east"),S:new M_("S","Move/interact/combat south"),W:new M_("W","Move/interact/combat west"),A:new M_("A","Primary action, confirm"),B:new M_("B","Take a break, cancel"),"1":new M_("1","Secondary action, first quick slot"),"2":new M_("2","Tertiary action, second quick slot"),M:new M_("M","Menu"),"#":new M_("#","Open prompt")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{BioAbsorber:new E_("BioAbsorber","Gain energy while on trees","[Bio Absorber]: Regenerates energy on trees","fx_ba"),Recharger:new E_("Recharger","Doubles energy gained from chargepads","[Recharger]: Doubles energy gained from chargepads","fx_re"),Recuperation:new E_("Recuperation","Reduces tool energy cost","[Recuperation]: Reduces tool energy cost (max. -1)","fx_cu"),RockCrusher:new E_("RockCrusher","Mines rock","[Rock Crusher]: Enables rock mining","fx_rc"),Screwing:new E_("Screwing","Unscrews the sewer portal covers","[Screwing]: Opens sewer gates","fx_sc"),WallCrusher:new E_("WallCrusher","Tears down weak walls","[Wall Crusher]: Enables weak wall destruction","fx_wc"),WaterImmunity:new E_("WaterImmunity","No damage taken from water","[Water Immunity]: Prevents water damage","fx_wi"),WaterShield:new E_("WaterShield","Reduces damage taken from water","[Water Shield]: Reduces water damage","fx_ws")},entities:{movableboulder:new W_("Boulder","A movable rock","o",2),movablebox:new W_("Box","A movable box","x",2),Spirit:new W_("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new W_("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new W_("WorkBot","Basic factory worker","B"),Cleaner:new W_("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new W_("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new W_("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new W_("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new W_("Graffiti","Writing on the wall","zy",2),Valkyrie:new W_("Valkyrie","Airbourne war logistics","V",160),Pioneer:new W_("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new W_("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new T_("Critters","Small pests","cyberyellow",new Set,new Set(["*"])),Drifters:new T_("Drifters","Bots disconnected from a mothership/overmind","cybergreen",new Set,new Set(["Guardians","Workers"])),Enraged:new T_("Enraged","Always hostile faction","cybermagenta",new Set,new Set(["*"])),Spirits:new T_("Spirits","Default player faction","white",new Set,new Set),Pyrates:new T_("Pyrates","Default enemy faction","cybermagenta",new Set,new Set(["*"])),Guardians:new T_("Guardians","Bot station guardians","cybercyan",new Set,new Set(["Workers"])),Workers:new T_("Workers","Bot station workers","white",new Set,new Set(["Guardians"]))},items:{battery:new $_("Battery","Increases maximum energy","b","cyberyellow",10),chest:new $_("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new $_("Energy","Energy pack","e","cyberyellow",10),gold:new $_("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new $_("Goo","A minor matter source","goo","gray",0,1),junk:new $_("Junk","Broken bot","%","gray",0,1),matter:new $_("Matter","A pile of stuff","m","gray",0,100),broom:new $_("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),cheat:new $_("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","RockCrusher","Screwing","WallCrusher","WaterShield"]),hammer:new $_("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["WallCrusher"]),pickaxe:new $_("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["RockCrusher"]),ratbite:new $_("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["WaterImmunity"]),shocker:new $_("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new $_("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["WaterShield"]),upgradeBioAbsorber:new $_("Bio Absorber Upgrade","Grants [BioAbsorber] effect","iu_ba","cyberyellow",0,0,0,0,0,["BioAbsorber"]),upgradeRecuperation:new $_("Recuperation Upgrade","Grants [Recuperation] effect","iu_cu","cyberyellow",0,0,0,0,0,["Recuperation"]),wrench:new $_("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:new o("void","Just nothing here","","."),voidtrue:new o("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new o("voidhidden","Looks like a wall, but isn't!","",".#"),water:new o("water","Rust and other dangers await","Water","~",{isWater:!0,energyDelta:-2}),watersewage:new o("watersewage","Rust, goo and other dangers await","Sewage Water","~~",{isWater:!0,energyDelta:-4}),drain:new o("drain","Drains gold, matter and some of your energy","Drain","*",{energyDelta:-5}),rock:new o("rock","Hidden treasures may await","Rock","'",{isBlocking:!0}),tree:new o("tree","Lots of trees make a forest","Tree","t"),wall:new o("wall","A strong wall","","#",{isBlocking:!0}),wallstatueaerobot:new o("wallstatueaerobot","A small statue looking like an AeroBot","","sa",{isBlocking:!0}),wallstatuecleaner:new o("wallstatuecleaner","A small statue looking like a Cleaner","","sc",{isBlocking:!0}),wallstatuepioneer:new o("wallstatuepioneer","A small statue looking like a Pioneer","","sp",{isBlocking:!0}),wallstatueworkbot:new o("wallstatueworkbot","A small statue looking like a WorkBot","","sb",{isBlocking:!0}),wallweak:new o("wallweak","A weakened wall","Weak Wall","+",{isBlocking:!0}),chargepad:new o("chargepad","Recharges energy and health","Chargepad","=",{energyDelta:2}),movenorth:new o("movenorth","Moves you north","","^^"),moveeast:new o("moveeast","Moves you east","",">>"),movesouth:new o("movesouth","Moves you south","","vv"),movewest:new o("movewest","Moves you west","","<<"),portal:new o("portal","Gateway to another map","Portal","O"),portalclosed:new o("portalclosed","Closed gateway to another map","Closed Portal","Oc",{isBlocking:!0}),portalhidden:new o("portalhidden","Hidden gateway to another map","","Oh"),portallauncher:new o("portallauncher","Launches into space","Launch to Space","Ol"),portalsewers:new o("portalsewers","Needs some tool to open","Sewer Gate","#~",{isBlocking:!0}),portalstartworkbot:new o("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB"),portalstartaerobot:new o("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA"),"_portalstart?":new o("_portalstart?","Not unlocked, yet!","?","O?"),spacerock:new o("spacerock","Mountains as seen from space, non-blocking!","","'s",{isSpace:!0}),spacetree:new o("spacetree","Forest as seen from space","","ts",{isSpace:!0}),spacewater:new o("spacewater","Water as seen from space, not dangerous!","","~s",{isSpace:!0}),spacevoid:new o("spacevoid","Void/ground as seen from space","",".s",{isSpace:!0}),spacevoidstarwhite:new o("spacevoidstarwhite","Space with a white background star","",".f"),spacevoidstaryellow:new o("spacevoidstaryellow","Space with a yellow background star","",".y"),star:new o("star","It's hot, really hot!","Star","§",{energyDelta:-100}),terminal:new o("terminal","A computer terminal","Terminal","$"),tv:new o("tv","A big billboard screen","TV","!",{isBlocking:!0})},uitexts:{}};function Rw(_,Z){return Object.values(_.effects[Z])}function O_(_,Z,q){return!!_.effects[Z]&&Object.hasOwn(_.effects[Z],q.name)}function jw(_){return _}function Mw(_,Z){if(Z.oldEquippedItem){let q=Z.oldEquippedItem.type;for(let U of q.effects){let W=P.effects[U];if(!!_.effects[Z.entityId][W.name]&&_.effects[Z.entityId][W.name].source===q)delete _.effects[Z.entityId][W.name]}}if(Z.newEquippedItem){let q=Z.newEquippedItem.type;for(let U of q.effects){let W=P.effects[U];_.effects[Z.entityId][W.name]={type:W,source:q}}}return _}function Ow(_,Z){let q=Z.type;for(let U of q.effects)_.effects[Z.entityId][U]={type:P.effects[U]};return _}function i_(_,Z){let q=a_(_),U=a_(Z);if(q===void 0||U===void 0)return 0;if(q===U)return 1;else if(q.friendly.has(U.name)||U.friendly.has(q.name))return 1;else if(q.hostile.has(U.name)||U.hostile.has(q.name))return 2;else if(q.friendly.has("*")||U.friendly.has("*"))return 1;else if(q.hostile.has("*")||U.hostile.has("*"))return 2;return 0}function a_(_){return((_||{}).options||{}).faction||void 0}function G1(_,Z){return _.options.faction=Z,_}function bw(_){if(Object.hasOwn(P.dialogs,_))return P.dialogs[_];return`FIXME: ${_} needs localization!`}function X_(_,Z){return _.chatLog.push(Z),_.chatLog=_.chatLog.slice(-r.chatLogMaxSize),_}function A_(_,Z,q,U,W=0,D=0,j={}){let b={id:Z,type:q,mapId:U,x:W,y:D,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:j};return _=R1(_,b,q),_.entities[b.id]=b,_}function P1(_,Z){return _.entities[Z]=void 0,delete _.entities[Z],_.tools[Z]=void 0,delete _.tools[Z],_.effects[Z]=void 0,delete _.effects[Z],_}function p_(_,Z){let q=Object.keys(_.entities),U=[];for(let W=0;W<q.length;W++){let D=_.entities[q[W]];if(D.mapId===Z)U.push(D)}return U}function F1(_,Z,q,U){let W=p_(_,Z).filter((D)=>D.x===q&&D.y===U);if(W.length>0)return W[0];return null}function R1(_,Z,q){if(Z.type=q,Z.energy=q.energyMax,Z.energyMax=q.energyMax,Z.gold=0,Z.matter=0,!b_(Z))_.tools[Z.id]=void 0;return _.effects[Z.id]={},_}function vw(_,Z,q){if(Z===q)return _;let U=i_(Z,q);if(U===1||e1(q)){if(q.options.dialog){let W=q?.options?.name?q.options.name:q.type.name;_=X_(_,W+": "+bw(q.options.dialog)),q.interactions++}}else if(U===2){let W=Z.id,D=q.id;_._combatQueue.push({entityId:W,otherEntityId:D})}if(q.interactions>=3&&q.options?.ai===P.ais.interactenrage)G1(q,P.factions.Enraged);return _}function b_(_){return _.type===P.entities.movableboulder||_.type===P.entities.movablebox}function e1(_){return _.type===P.entities.Graffiticyan||_.type===P.entities.Graffitimagenta||_.type===P.entities.Graffitiyellow}function j1(_,Z){let q={A:P.actions.Wait,B:P.actions.Wait};if(!!_.lastSpacePositionByEntity[Z.id]&&Z.energy>Math.abs(P.actions.Launch.energyDelta))q.A=P.actions.Launch;let W=_.maps[Z.mapId].getTile(Z.x,Z.y);if(!!W.options.mapId&&"x"in W.options&&"y"in W.options)q.A=P.actions.Enter;return q}function t_(_,Z,q){let U=_._eventSubscribers[Z];if(U)for(let W=0;W<U.length;W++){let D=U[W];_=D(_,q)}return _}function e_(_,Z,q){if(Z in _._eventSubscribers);else _._eventSubscribers[Z]=[];return _._eventSubscribers[Z].push(q),_}function B1(_,Z,q,U=0,W=0){let j={id:M1(q,U,W),type:Z,mapId:q,x:U,y:W,energy:Z.energyDelta,gold:Z.gold,matter:Z.matter};return _.items[j.id]=j,_}function Aw(_,Z,q,U=0,W=0){let D=P.items.junk,b={id:M1(q,U,W),type:D,mapId:q,x:U,y:W,energy:D.energyDelta,gold:D.gold,matter:Z};return _.items[b.id]=b,_}function X1(_,Z,q,U=0,W=0,D,j){let C={id:M1(q,U,W),type:Z,mapId:q,x:U,y:W,energy:Z.energyDelta,gold:D,matter:j};return _.items[C.id]=C,_}function M1(_,Z,q){return"item,"+_+","+Z+","+q}function _w(_,Z){return _.items[Z]=void 0,delete _.items[Z],_}function O1(_,Z){let q=Object.keys(_.items),U=[];for(let W=0;W<q.length;W++){let D=_.items[q[W]];if(D.mapId===Z)U.push(D)}return U}function b1(_,Z,q,U){let W=M1(Z,q,U);if(W in _.items)return _.items[W];return null}function C1(_,Z){return _.tools[Z]}function Nw(_,Z,q){if(b_(Z))return _;if(!j6(Z,q))return _;if(R6(q))_=ww(_,Z.id,q.type);else{if(q.type===P.items.battery)Z.energyMax+=q.energy;if(_._energyQueue.push({entityId:Z.id,energyDelta:q.energy}),Z.id.startsWith("player"))_=X_(_,`Picked up ${q.type.name}.`);let U={entityId:Z.id,type:q.type};_=t_(_,2,U)}return Z.gold+=q.gold,Z.matter+=q.matter,_w(_,q.id),_}function ww(_,Z,q){let U=_.tools[Z],W=void 0;if(q){if(W={type:q},_.tools[Z]=W,Z.startsWith("player"))_=X_(_,`Equipped ${q.name}.`)}else if(U){let j=U.type;if(_.tools[Z]=W,Z.startsWith("player"))_=X_(_,`Unequipped ${j}.`)}let D={entityId:Z,oldEquippedItem:U,newEquippedItem:W};return _=t_(_,1,D),_}function R6(_){return _.type.energyCost<0}function j6(_,Z){return _.gold+Z.gold>=0&&_.matter+Z.matter>=0}function fw(_,Z,q){switch(q){case P.commands.N:_=P_(_,Z,0,-1);break;case P.commands.W:_=P_(_,Z,-1,0);break;case P.commands.S:_=P_(_,Z,0,1);break;case P.commands.E:_=P_(_,Z,1,0);break;case P.commands.A:_=uw(_,Z,P.commands.A);break;case P.commands.B:_=uw(_,Z,P.commands.B);break;default:}return _}function P_(_,Z,q,U,W=0){let D=_.maps[Z.mapId],j=F1(_,D.id,Z.x+q,Z.y+U),b=_.tools[Z.id];if(Z.message=D.tvMessage,j)if(b_(j)){if(!b_(Z)&&W<1)_=P_(_,j,q,U,W++),_=P_(_,Z,q,U,W++)}else _=vw(_,Z,j);else if(O6(D,Z,q,U))_=Sw(_,D,Z,q,U),_._energyQueue.push({entityId:Z.id,energyDelta:-1*W});else if(b6(_,D,Z,q,U)){if(D.setTile(Z.x+q,Z.y+U,P.tiles.void).type===P.tiles.rock){let A=_.rng.getPercentage();if(A<=1)_=B1(_,P.items.matter,D.id,Z.x+q,Z.y+U);else if(A<=34)_=B1(_,P.items.junk,D.id,Z.x+q,Z.y+U)}_._energyQueue.push({entityId:Z.id,energyDelta:kw(_,Z,b)})}else if(C6(_,D,Z,q,U))_=Sw(_,D,Z,q,U),_._energyQueue.push({entityId:Z.id,energyDelta:kw(_,Z,b)});return _}function kw(_,Z,q){let U=q.type.energyCost;if(O_(_,Z.id,P.effects.Recuperation))U=Math.min(-1,U+1);return U}function uw(_,Z,q){let W=j1(_,Z)[q.key],j=_.maps[Z.mapId].getTile(Z.x,Z.y);switch(W){case P.actions.Enter:_=Iw(_,Z,j);break;case P.actions.Launch:_=M6(_,Z,j);case P.actions.Wait:break;default:}return _}function Sw(_,Z,q,U,W){q.x+=U,q.y+=W;let D=b1(_,q.mapId,q.x,q.y);if(D)_=Nw(_,q,D);let j=Z.getTile(q.x,q.y);if(j.type.name.startsWith("portal"))_=Iw(_,q,j);if(j.type===P.tiles.terminal)Z.setTvMessage("OBEYWORKKILL");if(j.type.name.startsWith("move"))switch(j.type.name){case"movenorth":_=P_(_,q,0,-1);break;case"moveeast":_=P_(_,q,1,0);break;case"movesouth":_=P_(_,q,0,1);break;case"movewest":_=P_(_,q,-1,0);break;default:}return _}function Iw(_,Z,q){if(Z.id.startsWith("player"))_.currentMapId=q.options.mapId;if(q.type.isSpace)_.lastSpacePositionByEntity[Z.id]={mapId:Z.mapId,x:Z.x,y:Z.y};else _.lastSpacePositionByEntity[Z.id]=void 0,delete _.lastSpacePositionByEntity[Z.id];let U={entityId:Z.id,oldMapId:Z.mapId,oldX:Z.x,oldY:Z.y,oldTileType:q.type,newMapId:q.options.mapId,newX:q.options.x,newY:q.options.y};return Z.mapId=q.options.mapId,Z.x=q.options.x,Z.y=q.options.y,_=t_(_,0,U),_}function M6(_,Z,q){if(_.lastSpacePositionByEntity[Z.id]){if(Z.id.startsWith("player"))_.currentMapId=_.lastSpacePositionByEntity[Z.id].mapId;let U={entityId:Z.id,oldMapId:Z.mapId,oldX:Z.x,oldY:Z.y,oldTileType:q.type,newMapId:_.lastSpacePositionByEntity[Z.id].mapId,newX:_.lastSpacePositionByEntity[Z.id].x,newY:_.lastSpacePositionByEntity[Z.id].y};Z.mapId=U.newMapId,Z.x=U.newX,Z.y=U.newY,_._energyQueue.push({entityId:Z.id,energyDelta:P.actions.Launch.energyDelta}),_.lastSpacePositionByEntity[Z.id]=void 0,delete _.lastSpacePositionByEntity[Z.id],_=t_(_,0,U)}return _}function gw(_){for(let Z in _.entities){let q=_.entities[Z],W=_.maps[q.mapId].getTile(q.x,q.y),D=W.type.energyDelta;if(W.type===P.tiles.chargepad&&O_(_,Z,P.effects.Recharger))D*=2;else if(W.type===P.tiles.tree&&O_(_,Z,P.effects.BioAbsorber))D=1;else if(W.type.isWater&&O_(_,Z,P.effects.WaterImmunity))D=0;else if(W.type.isWater&&O_(_,Z,P.effects.WaterShield))D/=2;else if(W.type===P.tiles.drain){let j=Math.min(q.gold,P.constants.DRAIN_GOLD_COST),b=Math.min(q.matter,P.constants.DRAIN_MATTER_COST);q.gold-=j,q.matter-=b}if(D!==0)_._energyQueue.push({entityId:Z,energyDelta:D})}return _}function Tw(_,Z){let q=_.entities[Z.entityId];switch(Z.oldTileType){case P.tiles.portalstartaerobot:_=R1(_,q,P.entities.AeroBot),G1(q,P.factions.Workers),_=X_(_,`Booting up as an ${P.entities.AeroBot.name}...`);break;case P.tiles.portalstartworkbot:_=R1(_,q,P.entities.WorkBot),G1(q,P.factions.Workers),_=X_(_,`Booting up as a ${P.entities.WorkBot.name}...`);break;default:}return _}function O6(_,Z,q,U){let W=Z.x+q,D=Z.y+U,j=_.getTile(W,D).type;return W>=0&&W<_.widthTiles&&D>=0&&D<_.heightTiles&&!j.isBlocking}function b6(_,Z,q,U,W){let D=q.x+U,j=q.y+W,b=Z.getTile(D,j).type;return O_(_,q.id,P.effects.WallCrusher)&&b===P.tiles.wallweak||O_(_,q.id,P.effects.RockCrusher)&&b===P.tiles.rock}function C6(_,Z,q,U,W){let D=q.x+U,j=q.y+W,b=Z.getTile(D,j).type;return O_(_,q.id,P.effects.Screwing)&&b===P.tiles.portalsewers}var N_={bot_bar:`!
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
!!O portalclosed
######_
#######
####O__
#######
######_
__##___`};/*!
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
 */var v6=function(_){var Z={};function q(U){if(Z[U])return Z[U].exports;var W=Z[U]={i:U,l:!1,exports:{}};return _[U].call(W.exports,W,W.exports,q),W.l=!0,W.exports}return q.m=_,q.c=Z,q.d=function(U,W,D){q.o(U,W)||Object.defineProperty(U,W,{enumerable:!0,get:D})},q.r=function(U){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(U,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(U,"__esModule",{value:!0})},q.t=function(U,W){if(1&W&&(U=q(U)),8&W)return U;if(4&W&&typeof U=="object"&&U&&U.__esModule)return U;var D=Object.create(null);if(q.r(D),Object.defineProperty(D,"default",{enumerable:!0,value:U}),2&W&&typeof U!="string")for(var j in U)q.d(D,j,function(b){return U[b]}.bind(null,j));return D},q.n=function(U){var W=U&&U.__esModule?function(){return U.default}:function(){return U};return q.d(W,"a",W),W},q.o=function(U,W){return Object.prototype.hasOwnProperty.call(U,W)},q.p="/bin/",q(q.s=0)}([function(_,Z,q){var U={},W=q(1),D=q(2),j=q(3);_.exports=U;var b=1;U.js=function(){var C,A,h,c=!1,s={},x={},p={},Q_={},m=!0,l={},n=[],q_=Number.MAX_VALUE,a=!1;this.setAcceptableTiles=function(u){u instanceof Array?h=u:!isNaN(parseFloat(u))&&isFinite(u)&&(h=[u])},this.enableSync=function(){c=!0},this.disableSync=function(){c=!1},this.enableDiagonals=function(){a=!0},this.disableDiagonals=function(){a=!1},this.setGrid=function(u){C=u;for(var N=0;N<C.length;N++)for(var E=0;E<C[0].length;E++)x[C[N][E]]||(x[C[N][E]]=1)},this.setTileCost=function(u,N){x[u]=N},this.setAdditionalPointCost=function(u,N,E){p[N]===void 0&&(p[N]={}),p[N][u]=E},this.removeAdditionalPointCost=function(u,N){p[N]!==void 0&&delete p[N][u]},this.removeAllAdditionalPointCosts=function(){p={}},this.setDirectionalCondition=function(u,N,E){Q_[N]===void 0&&(Q_[N]={}),Q_[N][u]=E},this.removeAllDirectionalConditions=function(){Q_={}},this.setIterationsPerCalculation=function(u){q_=u},this.avoidAdditionalPoint=function(u,N){s[N]===void 0&&(s[N]={}),s[N][u]=1},this.stopAvoidingAdditionalPoint=function(u,N){s[N]!==void 0&&delete s[N][u]},this.enableCornerCutting=function(){m=!0},this.disableCornerCutting=function(){m=!1},this.stopAvoidingAllAdditionalPoints=function(){s={}},this.findPath=function(u,N,E,i,w_){var J_=function(f_){c?w_(f_):setTimeout(function(){w_(f_)})};if(h===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(C===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(u<0||N<0||E<0||i<0||u>C[0].length-1||N>C.length-1||E>C[0].length-1||i>C.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(u!==E||N!==i){for(var H_=C[i][E],z_=!1,C_=0;C_<h.length;C_++)if(H_===h[C_]){z_=!0;break}if(z_!==!1){var Y_=new W;Y_.openList=new j(function(f_,s_){return f_.bestGuessDistance()-s_.bestGuessDistance()}),Y_.isDoneCalculating=!1,Y_.nodeHash={},Y_.startX=u,Y_.startY=N,Y_.endX=E,Y_.endY=i,Y_.callback=J_,Y_.openList.push(__(Y_,Y_.startX,Y_.startY,null,1));var V1=b++;return l[V1]=Y_,n.push(V1),V1}J_(null)}else J_([])},this.cancelPath=function(u){return u in l&&(delete l[u],!0)},this.calculate=function(){if(n.length!==0&&C!==void 0&&h!==void 0)for(A=0;A<q_;A++){if(n.length===0)return;c&&(A=0);var u=n[0],N=l[u];if(N!==void 0)if(N.openList.size()!==0){var E=N.openList.pop();if(N.endX!==E.x||N.endY!==E.y)E.list=0,E.y>0&&v(N,E,0,-1,1*g(E.x,E.y-1)),E.x<C[0].length-1&&v(N,E,1,0,1*g(E.x+1,E.y)),E.y<C.length-1&&v(N,E,0,1,1*g(E.x,E.y+1)),E.x>0&&v(N,E,-1,0,1*g(E.x-1,E.y)),a&&(E.x>0&&E.y>0&&(m||S(C,h,E.x,E.y-1,E)&&S(C,h,E.x-1,E.y,E))&&v(N,E,-1,-1,1.4*g(E.x-1,E.y-1)),E.x<C[0].length-1&&E.y<C.length-1&&(m||S(C,h,E.x,E.y+1,E)&&S(C,h,E.x+1,E.y,E))&&v(N,E,1,1,1.4*g(E.x+1,E.y+1)),E.x<C[0].length-1&&E.y>0&&(m||S(C,h,E.x,E.y-1,E)&&S(C,h,E.x+1,E.y,E))&&v(N,E,1,-1,1.4*g(E.x+1,E.y-1)),E.x>0&&E.y<C.length-1&&(m||S(C,h,E.x,E.y+1,E)&&S(C,h,E.x-1,E.y,E))&&v(N,E,-1,1,1.4*g(E.x-1,E.y+1)));else{var i=[];i.push({x:E.x,y:E.y});for(var w_=E.parent;w_!=null;)i.push({x:w_.x,y:w_.y}),w_=w_.parent;i.reverse();var J_=i;N.callback(J_),delete l[u],n.shift()}}else N.callback(null),delete l[u],n.shift();else n.shift()}};var v=function(u,N,E,i,w_){var J_=N.x+E,H_=N.y+i;if((s[H_]===void 0||s[H_][J_]===void 0)&&S(C,h,J_,H_,N)){var z_=__(u,J_,H_,N,w_);z_.list===void 0?(z_.list=1,u.openList.push(z_)):N.costSoFar+w_<z_.costSoFar&&(z_.costSoFar=N.costSoFar+w_,z_.parent=N,u.openList.updateItem(z_))}},S=function(u,N,E,i,w_){var J_=Q_[i]&&Q_[i][E];if(J_){var H_=f(w_.x-E,w_.y-i);if(!function(){for(var C_=0;C_<J_.length;C_++)if(J_[C_]===H_)return!0;return!1}())return!1}for(var z_=0;z_<N.length;z_++)if(u[i][E]===N[z_])return!0;return!1},f=function(u,N){if(u===0&&N===-1)return U.TOP;if(u===1&&N===-1)return U.TOP_RIGHT;if(u===1&&N===0)return U.RIGHT;if(u===1&&N===1)return U.BOTTOM_RIGHT;if(u===0&&N===1)return U.BOTTOM;if(u===-1&&N===1)return U.BOTTOM_LEFT;if(u===-1&&N===0)return U.LEFT;if(u===-1&&N===-1)return U.TOP_LEFT;throw new Error("These differences are not valid: "+u+", "+N)},g=function(u,N){return p[N]&&p[N][u]||x[C[N][u]]},__=function(u,N,E,i,w_){if(u.nodeHash[E]!==void 0){if(u.nodeHash[E][N]!==void 0)return u.nodeHash[E][N]}else u.nodeHash[E]={};var J_=t(N,E,u.endX,u.endY);if(i!==null)var H_=i.costSoFar+w_;else H_=0;var z_=new D(i,N,E,H_,J_);return u.nodeHash[E][N]=z_,z_},t=function(u,N,E,i){var w_,J_;return a?(w_=Math.abs(u-E))<(J_=Math.abs(N-i))?1.4*w_+J_:1.4*J_+w_:(w_=Math.abs(u-E))+(J_=Math.abs(N-i))}},U.TOP="TOP",U.TOP_RIGHT="TOP_RIGHT",U.RIGHT="RIGHT",U.BOTTOM_RIGHT="BOTTOM_RIGHT",U.BOTTOM="BOTTOM",U.BOTTOM_LEFT="BOTTOM_LEFT",U.LEFT="LEFT",U.TOP_LEFT="TOP_LEFT"},function(_,Z){_.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(_,Z){_.exports=function(q,U,W,D,j){this.parent=q,this.x=U,this.y=W,this.costSoFar=D,this.simpleDistanceToTarget=j,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(_,Z,q){_.exports=q(4)},function(_,Z,q){var U,W,D;(function(){var j,b,C,A,h,c,s,x,p,Q_,m,l,n,q_,a;C=Math.floor,Q_=Math.min,b=function(v,S){return v<S?-1:v>S?1:0},p=function(v,S,f,g,__){var t;if(f==null&&(f=0),__==null&&(__=b),f<0)throw new Error("lo must be non-negative");for(g==null&&(g=v.length);f<g;)__(S,v[t=C((f+g)/2)])<0?g=t:f=t+1;return[].splice.apply(v,[f,f-f].concat(S)),S},c=function(v,S,f){return f==null&&(f=b),v.push(S),q_(v,0,v.length-1,f)},h=function(v,S){var f,g;return S==null&&(S=b),f=v.pop(),v.length?(g=v[0],v[0]=f,a(v,0,S)):g=f,g},x=function(v,S,f){var g;return f==null&&(f=b),g=v[0],v[0]=S,a(v,0,f),g},s=function(v,S,f){var g;return f==null&&(f=b),v.length&&f(v[0],S)<0&&(S=(g=[v[0],S])[0],v[0]=g[1],a(v,0,f)),S},A=function(v,S){var f,g,__,t,u,N;for(S==null&&(S=b),u=[],g=0,__=(t=function(){N=[];for(var E=0,i=C(v.length/2);0<=i?E<i:E>i;0<=i?E++:E--)N.push(E);return N}.apply(this).reverse()).length;g<__;g++)f=t[g],u.push(a(v,f,S));return u},n=function(v,S,f){var g;if(f==null&&(f=b),(g=v.indexOf(S))!==-1)return q_(v,0,g,f),a(v,g,f)},m=function(v,S,f){var g,__,t,u,N;if(f==null&&(f=b),!(__=v.slice(0,S)).length)return __;for(A(__,f),t=0,u=(N=v.slice(S)).length;t<u;t++)g=N[t],s(__,g,f);return __.sort(f).reverse()},l=function(v,S,f){var g,__,t,u,N,E,i,w_,J_;if(f==null&&(f=b),10*S<=v.length){if(!(t=v.slice(0,S).sort(f)).length)return t;for(__=t[t.length-1],u=0,E=(i=v.slice(S)).length;u<E;u++)f(g=i[u],__)<0&&(p(t,g,0,null,f),t.pop(),__=t[t.length-1]);return t}for(A(v,f),J_=[],N=0,w_=Q_(S,v.length);0<=w_?N<w_:N>w_;0<=w_?++N:--N)J_.push(h(v,f));return J_},q_=function(v,S,f,g){var __,t,u;for(g==null&&(g=b),__=v[f];f>S&&g(__,t=v[u=f-1>>1])<0;)v[f]=t,f=u;return v[f]=__},a=function(v,S,f){var g,__,t,u,N;for(f==null&&(f=b),__=v.length,N=S,t=v[S],g=2*S+1;g<__;)(u=g+1)<__&&!(f(v[g],v[u])<0)&&(g=u),v[S]=v[g],g=2*(S=g)+1;return v[S]=t,q_(v,N,S,f)},j=function(){function v(S){this.cmp=S!=null?S:b,this.nodes=[]}return v.push=c,v.pop=h,v.replace=x,v.pushpop=s,v.heapify=A,v.updateItem=n,v.nlargest=m,v.nsmallest=l,v.prototype.push=function(S){return c(this.nodes,S,this.cmp)},v.prototype.pop=function(){return h(this.nodes,this.cmp)},v.prototype.peek=function(){return this.nodes[0]},v.prototype.contains=function(S){return this.nodes.indexOf(S)!==-1},v.prototype.replace=function(S){return x(this.nodes,S,this.cmp)},v.prototype.pushpop=function(S){return s(this.nodes,S,this.cmp)},v.prototype.heapify=function(){return A(this.nodes,this.cmp)},v.prototype.updateItem=function(S){return n(this.nodes,S,this.cmp)},v.prototype.clear=function(){return this.nodes=[]},v.prototype.empty=function(){return this.nodes.length===0},v.prototype.size=function(){return this.nodes.length},v.prototype.clone=function(){var S;return(S=new v).nodes=this.nodes.slice(0),S},v.prototype.toArray=function(){return this.nodes.slice(0)},v.prototype.insert=v.prototype.push,v.prototype.top=v.prototype.peek,v.prototype.front=v.prototype.peek,v.prototype.has=v.prototype.contains,v.prototype.copy=v.prototype.clone,v}(),W=[],(D=typeof(U=function(){return j})=="function"?U.apply(Z,W):U)===void 0||(_.exports=D)}).call(this)}]);function hw(_,Z,q,U,W){let D=new v6.js;D.setGrid(_),D.setAcceptableTiles([0]),D.enableSync();let j=null;return D.findPath(Z,q,U,W,function(b){j=b}),D.calculate(),j}function F_(){return"player"}function xw(_,Z,q,U){return Math.abs(_-q)+Math.abs(Z-U)}function _1(_){return[...Array(_).keys()]}function mw(_){let Z=E6(_),q=_.entities[F_()];for(let U=0;U<Z.length;U++){let W=Z[U],D=_.entities[W];if(q===D)continue;let j=_._AIs[W],b=xw(q.x,q.y,D.x,D.y);if(i_(q,D)===2&&b<=j.aggroRange){let C=_.maps[_.currentMapId].asMovementMap(),A=hw(C,D.x,D.y,q.x,q.y);if(A){if(A=A.slice(1),A.length>b)A=null}j.path=A}if(!!D.message&&D.message.includes("OBEY"));}for(let U=0;U<Z.length;U++){let W=Z[U],D=_.entities[W],j=_._AIs[W];if(j.path){let b=j.path[0],C=b.x-D.x,A=b.y-D.y;_=P_(_,D,C,A)}}return _}function E6(_){let Z=p_(_,_.currentMapId),q=[];for(let U=0;U<Z.length;U++){let W=Z[U];if(W.options.ai)q.push(W.id)}return q}function lw(_,Z,q){let U=_.entities[Z],W=8;switch(q){case P.ais.aggrorange:W=8;break;case P.ais.aggrorangeshort:W=2;break;case P.ais.guardian:W=1;break;case P.ais.interactenrage:W=2;break;default:}return _._AIs[Z]={entityId:Z,type:q,aggroRange:W,startMap:U.mapId,startX:U.x,startY:U.y,path:null},_}function v1(_,Z){return _._AIs[Z]=void 0,delete _._AIs[Z],_}function pw(_){let Z=void 0;while(typeof(Z=_._despawnQueue.shift())!=="undefined")_=P1(_,Z),_=v1(_,Z);return _}function dw(_){return _}class k_{mapId;x;y;entityOrItemName;options;constructor(_,Z,q,U,W={}){this.mapId=_,this.x=Z,this.y=q,this.entityOrItemName=U,this.options=W}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function h_(_,Z){if(A6(Z.entityOrItemName)){let q=Z.options;if(Object.hasOwn(q,"ai"))q.ai=P.ais[q.ai];if(Object.hasOwn(q,"faction"))q.faction=P.factions[q.faction];let U=Z.generateId();if(_=A_(_,U,P.entities[Z.entityOrItemName],Z.mapId,Z.x,Z.y,q),Object.hasOwn(q,"equip")&&cw(q.equip))_=ww(_,U,P.items[q.equip]);if(Object.hasOwn(q,"ai"))_=lw(_,U,q.ai)}else if(cw(Z.entityOrItemName))_=B1(_,P.items[Z.entityOrItemName],Z.mapId,Z.x,Z.y);return _}function A6(_){return Object.hasOwn(P.entities,_)}function cw(_){return Object.hasOwn(P.items,_)}function x_(_,Z={}){return{type:_,options:Z}}function yw(_){for(let Z in N_){let q=d_(N_[Z]);if(!q.isSnippet()){_.maps[Z]=q;for(let U of q._spawnCommands)_=h_(_,U);q._spawnCommands=[]}}return _}function rw(_,Z){let q=O1(_,Z);for(let W=0;W<q.length;W++){let D=q[W];_=_w(_,D.id)}let U=p_(_,Z);for(let W=0;W<U.length;W++){let D=U[W];_=P1(_,D.id),_=v1(_,D.id)}return _.maps[Z]=void 0,delete _.maps[Z],_}class D_{id;widthTiles;heightTiles;seed;_tiles;_initialTiles;entropy;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(_,Z,q,U=[]){this.id=_,this.widthTiles=Z,this.heightTiles=q,this.seed=null,this._tiles=U,this._initialTiles=JSON.parse(JSON.stringify(U)),this.entropy=0,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(_,Z){if(_>=0&&_<this.widthTiles&&Z>=0&&Z<this.heightTiles){let q=Z*this.widthTiles+_;return this._tiles[q]}return{}}setTile(_,Z,q,U={}){this._cacheMovementMap=null;let W=Z*this.widthTiles+_,D=this._tiles[W];return this._tiles[W]=x_(q,U),D}resetEntropy(){this._initialTiles=JSON.parse(JSON.stringify(this._tiles)),this.entropy=0}setTvMessage(_){if(this._tvCount){let Z=0;for(let q of this._tiles)if(q.type===P.tiles.tv&&Z<_.length)q.options.sign=_[Z],Z++;if(_==="")_=null;this.tvMessage=_}}pasteOnto(_,Z=0,q=0){for(let U=0;U<_.heightTiles;U++)for(let W=0;W<_.widthTiles;W++){let D=_.getTile(W,U);if(D.type!==P.tiles.voidtrue)this.setTile(W+Z,U+q,D.type,D.options)}return this}circular(){let _=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let Z=-_;Z<=_;Z++)for(let q=-_;q<=_;q++)if(q*q+Z*Z>=_*_)this.setTile(q+_-1,Z+_-1,P.tiles.voidtrue);return this}sample(_,Z){let q=Math.floor(this.widthTiles/_),U=Math.floor(this.heightTiles/Z),W=[];for(let D=0;D<Z;D++)for(let j=0;j<_;j++){let b={};for(let x=0;x<U;x++)for(let p=0;p<q;p++){let Q_=this.getTile(j*q+p,D*U+x);if(b[Q_.type.name])b[Q_.type.name]+=1;else b[Q_.type.name]=1}let C="",A=0;for(let[x,p]of Object.entries(b))if(p>A)C=x,A=p;let h="space"+C,c=P.tiles[h]||P.tiles.spacevoid,s={mapId:this.id,x:j*q,y:D*U};W.push(x_(c,s))}return new D_("__sampled_"+_+"_"+Z+"_"+this.id,_,Z,W)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let _=new Array(this.heightTiles);for(let Z=0;Z<this.heightTiles;Z++){_[Z]=new Array(this.widthTiles);for(let q=0;q<this.widthTiles;q++){let U=Z*this.widthTiles+q,D=this._tiles[U].type;if(_[Z][q]=0,D.isBlocking)_[Z][q]=1}}return this._cacheMovementMap=_,_}isSnippet(){return this.id===void 0||this.id===null||this.id===""}static createEmptyMap(_,Z,q){let U=[];for(let D=0;D<_*Z;D++)U.push(x_(q));return new D_(null,_,Z,U)}}function d_(_){let Z=_.split(/\r?\n/),q=_[0],U="",W=0,D=0,j={},b=[],C=[],A=0,h="";for(let s=0;s<Z.length;s++){let x=Z[s];if(x.startsWith(q)){if(x.startsWith(q+"!id"))U=x.slice(5);else if(x.startsWith(q+"!size")){let p=x.split(" ").slice(1);W=Number(p[0]),D=Number(p[1])}else if(x.startsWith(q+"!spawn")){let p=x.split(" ").slice(1),Q_={};if(p.length>3){let m=p.slice(3);for(let l of m){let n=l.split("=");Q_[n[0]]=n[1]}}b.push(new k_(U,Number(p[0]),Number(p[1]),p[2],Q_))}else if(x.startsWith(q+"!")){let p=x[2],Q_=x.slice(4);j[p]=Q_}}else for(let p=0;p<x.length;p++){let Q_=x[p],m=j[Q_];if(r.debug&&!m)console.log("DEBUG Broken map: "+U);let l=m.split(" "),n={};if(m.startsWith("portal ")||m.startsWith("portalhidden ")||m.startsWith("portalsewers ")||m.startsWith("portallauncher ")||m.startsWith("portalstart"))m=l[0],n.mapId=l[1],n.x=Number(l[2]),n.y=Number(l[3]);if(m.startsWith("wall ")&&l.length>=2)m="wall",n.sign=l[1];if(m.startsWith("terminal ")){if(m="terminal",l.length>=2)n.screen=l[1]}if(m.startsWith("tv ")&&l.length>=2){if(m="tv",l.length===3)h=l[2];A++}C.push(x_(P.tiles[m],n))}}if(r.debug&&!(A===0||A===12))console.log("DEBUG Broken map: "+U+" (invalid TV size "+A+", allowed are 0 or 12 characters per map)");let c=new D_(U,W,D,C);return c._tvCount=A,c.setTvMessage(h),c._spawnCommands=b,c}var ow=i1(A1(),1);class R_{seed;_rotRng;constructor(_=1337){this.seed=_,this._rotRng=ow.RNG.clone(),this._rotRng.setSeed(_)}getPercentage(){return this._rotRng.getPercentage()}getItem(_){return this._rotRng.getItem(_)}}function aw(_,Z=1337,q=64,U=4096){let W=D_.createEmptyMap(q,q,P.tiles.wall),D=new R_(Z),j=q/2-1,b={x:j,y:j};W.setTile(b.x,b.y,P.tiles.void);for(let C=0;C<U;C++){switch(D.getItem([0,1,2,3])){case 0:b=N1(b,0,-1,q);break;case 1:b=N1(b,1,0,q);break;case 2:b=N1(b,0,1,q);break;case 3:b=N1(b,-1,0,q);break}W.setTile(b.x,b.y,P.tiles.void)}return W.id=`gen:dungeon=${Z}`,_.maps[W.id]=W,_}function N1(_,Z,q,U){return{x:Math.max(0,Math.min(U-1,_.x+Z)),y:Math.max(0,Math.min(U-1,_.y+q))}}function iw(_,Z){if(Z?.newMapId?.startsWith("gen:dungeon")){let q=Z?.newMapId,U=Number(q?.split("=").at(-1));_=aw(_,U);let W=_.entities[Z.entityId];if(W.id.startsWith("player"))_.currentMapId=q;W.mapId=q,W.x=Z.newX,W.Y=Z.newY}return _}function tw(_,Z){if(Z.seed===1337)_=h_(_,new k_(Z.id,130,127,"Valkyrie",{faction:"Spirits"})),_=h_(_,new k_(Z.id,124,127,"Valkyrie",{faction:"Spirits"})),_=h_(_,new k_(Z.id,127,130,"trident"));else{let q=new R_(Z.seed);for(let U=0;U<Z.heightTiles;U++)for(let W=0;W<Z.widthTiles;W++){let D=Z.getTile(W,U);if(q.getPercentage()<=1&&(D.type===P.tiles.void||D.type===P.tiles.tree)){let j=q.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(j){case"Deviant":case"Pioneer":_=h_(_,new k_(Z.id,W,U,j,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":_=h_(_,new k_(Z.id,W,U,j));break}}}}return _}var k1=i1(A1(),1);var u6=1337,ew=55;function _0(_,Z=u6){k1.RNG.setSeed(Z);let q=new k1.Noise.Simplex,U=256,W=256,D=[];for(let C=0;C<W;C++)for(let A=0;A<U;A++){let h=q.get(A/ew,C/ew),c;if(h<=-0.5)c=P.tiles.water;else if(h<=0)c=P.tiles.void;else if(h<0.5)c=P.tiles.tree;else c=P.tiles.rock;D.push(x_(c))}let j="simplex="+Z,b=new D_(j,U,W,D);return b.seed=Z,_.maps[j]=b,_}var S6=1337;function w0(_,Z=S6){let q=D_.createEmptyMap(1024,1024,P.tiles.void);q.id="solarsystem="+Z,_.maps[q.id]=q;let U=new R_(Z),W=new R_(Z),D=U.getItem([2,3,4,5,6,7,8,9,10,11,12]),j=128,b=512-j,C=Math.floor(b/D);q=f6(q,U);let A=D_.createEmptyMap(128,128,P.tiles.voidtrue);I6(A,63,63,62,P.tiles.star),g6(A,63,63,P.tiles.star),q.pasteOnto(A,448,448);for(let x=j;x<512;x+=C){let p=U.getItem([-1,1])*U.getItem(_1(x)),Q_=U.getItem([-1,1])*Math.floor(Math.sqrt(x*x-p*p));p+=512,Q_+=512;let m=U.getItem([16,24,32]),l=Math.floor(m/2)-1;_=_0(_,Z);let n=_.maps["simplex="+Z],q_=N_.launcher;q_=q_.replace("!!O portallauncher space 0 0",`!!O portallauncher ${q.id} ${p} ${Q_}`);let a=d_(q_),v=W.getItem(_1(n.widthTiles-a.widthTiles)),S=W.getItem(_1(n.heightTiles-a.heightTiles));n.pasteOnto(a,v,S),_=tw(_,n);let f=n.sample(m,m).circular();q.pasteOnto(f,p-(l+1),Q_-(l+1)),Z++}let h=N_.space_bot_station;h=h.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let c=d_(h);q.pasteOnto(c,583,398);let s=d_(N_.square_falcon);return q.pasteOnto(s,590,373),_}function f6(_,Z){for(let q=0;q<_.heightTiles;q++)for(let U=0;U<_.widthTiles;U++)if(Z.getPercentage()<=1)_.setTile(U,q,Z.getItem([P.tiles.spacevoidstarwhite,P.tiles.spacevoidstaryellow]));return _}function I6(_,Z,q,U,W){let D=1-U,j=1,b=-2*U,C=0,A=U;_.setTile(Z,q+U,W),_.setTile(Z,q-U,W),_.setTile(Z+U,q,W),_.setTile(Z-U,q,W);while(C<A){if(D>=0)A-=1,b+=2,D+=b;C+=1,j+=2,D+=j,_.setTile(Z+C,q+A,W),_.setTile(Z-C,q+A,W),_.setTile(Z+C,q-A,W),_.setTile(Z-C,q-A,W),_.setTile(Z+A,q+C,W),_.setTile(Z-A,q+C,W),_.setTile(Z+A,q-C,W),_.setTile(Z-A,q-C,W)}return _}function g6(_,Z,q,U){let{widthTiles:W,heightTiles:D}=_,j=[];j.push({x:Z,y:q});let b=void 0;while(typeof(b=j.shift())!=="undefined"){let C=b,A=b;if(b.x+1<W)A={x:b.x+1,y:b.y};while(_.getTile(C.x,C.y).type!==U){if(_.setTile(C.x,C.y,U),C.y+1<D){if(_.getTile(C.x,C.y+1).type!==U)j.push({x:C.x,y:C.y+1})}if(C.y-1>=0){if(_.getTile(C.x,C.y-1).type!==U)j.push({x:C.x,y:C.y-1})}if(C.x-1>=0)C.x-=1;else break}while(_.getTile(A.x,A.y).type!==U){if(_.setTile(A.x,A.y,U),A.y+1<D){if(_.getTile(A.x,A.y+1).type!==U)j.push({x:A.x,y:A.y+1})}if(A.y-1>=0){if(_.getTile(A.x,A.y-1).type!==U)j.push({x:A.x,y:A.y-1})}if(A.x+1<W)A.x+=1;else break}}return _}function Q0(_,Z){if(Z?.oldMapId?.startsWith("shop_instance")){_=rw(_,Z.oldMapId);let q=_.maps[Z.newMapId],U=q.getTile(Z.newX,Z.newY);q.setTile(Z.newX,Z.newY,U.type,{mapId:"shop_instance",x:Z.oldX,y:Z.oldY})}if(Z?.newMapId?.startsWith("shop_instance")){let q=d_(N_.shop_instance);q.id="shop_instance_"+Z.oldMapId+"_"+Z.entityId,q.setTile(Z.newX,Z.newY,P.tiles.portal,{mapId:Z.oldMapId,x:Z.oldX,y:Z.oldY}),_.maps[Z.oldMapId].setTile(Z.oldX,Z.oldY,Z.oldTileType,{mapId:q.id,x:Z.newX,y:Z.newY});let W=_.entities[Z.entityId];if(W.id.startsWith("player"))_.currentMapId=q.id;if(W.mapId=q.id,W.x=Z.newX,W.Y=Z.newY,_.maps[q.id]=q,_=X1(_,P.items.hammer,q.id,4,4,0,-200),_=X1(_,P.items.pickaxe,q.id,4,6,0,-200),_=X1(_,P.items.battery,q.id,4,8,0,-200),_=X1(_,P.items.gold,q.id,4,10,1,-1e4),_=A_(_,q.id+"_shopkeeper",P.entities.AeroBot,q.id,6,2,{faction:a_(W),dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),Z?.oldMapId.startsWith("bot_stadium"))_=A_(_,q.id+"_shopper",P.entities.WorkBot,q.id,1,12,{faction:a_(W),dialog:"shop_instance_workbot_shopper"});else if(Z?.oldMapId.startsWith("bot_bar"))_=A_(_,q.id+"_shopper",P.entities.AeroBot,q.id,4,11,{faction:a_(W),dialog:"shop_instance_aerobot_shopper"})}return _}function Z0(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",effects:{},entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new R_,tools:{},tvs:{}}}function J0(_){let Z=void 0;while(typeof(Z=_._combatQueue.shift())!=="undefined"){let q=-1,U=-5,W=C1(_,Z.entityId);if(W){if(q=W.type.energyCost,O_(_,Z.entityId,P.effects.Recuperation))q=Math.min(-1,q+1);U=-1*Math.abs(W.type.damage)}_._energyQueue.push({entityId:Z.entityId,energyDelta:q}),_._energyQueue.push({entityId:Z.otherEntityId,energyDelta:U});let D=_.entities[Z.entityId],j=_.entities[Z.otherEntityId],b=D?.options?.name?D.options.name:D.type.name,C=j?.options?.name?j.options.name:j.type.name;_=X_(_,`${b} did ${Math.abs(U)} damage to ${C} at cost of ${Math.abs(q)} energy.`)}return _}function V0(_){let Z=void 0,q=new Set;while(typeof(Z=_._energyQueue.shift())!=="undefined"){let U=_.entities[Z.entityId];if(U.energy=Math.min(U.energy+Z.energyDelta,U.energyMax),U.energy<=0)q.add(U.id)}for(let U of q){let W=_.entities[U];_._despawnQueue.push(U);let D=W?.options?.name?W.options.name:W.type.name;if(!b_(W)){let j=Math.max(1,Math.floor(W.energyMax/3));_=Aw(_,j,W.mapId,W.x,W.y),_=X_(_,`${D} destroyed leaving behind Junk.`)}}return _}function K0(_){return _=mw(_),_=J0(_),_=gw(_),_=V0(_),_=jw(_),_=pw(_),_=dw(_),_}class q0{p=[];constructor(_){this.p=new Array(512);let Z=new Array(256);for(let U=0;U<256;U++)Z[U]=U;let q=new R_(_);for(let U=255;U>0;U--){let W=q.getItem(_1(U+1));[Z[U],Z[W]]=[Z[W],Z[U]]}for(let U=0;U<256;U++)this.p[U]=this.p[U+256]=Z[U]}fade(_){return _*_*_*(_*(_*6-15)+10)}lerp(_,Z,q){return Z+_*(q-Z)}grad(_,Z,q,U){let W=_&15,D=W<8?Z:q,j=W<4?q:W===12||W===14?Z:U;return((W&1)===0?D:-D)+((W&2)===0?j:-j)}noise(_,Z,q){let U=Math.floor(_)&255,W=Math.floor(Z)&255,D=Math.floor(q)&255;_-=Math.floor(_),Z-=Math.floor(Z),q-=Math.floor(q);let j=this.fade(_),b=this.fade(Z),C=this.fade(q),A=this.p[U]+W,h=this.p[A]+D,c=this.p[A+1]+D,s=this.p[U+1]+W,x=this.p[s]+D,p=this.p[s+1]+D;return(this.lerp(C,this.lerp(b,this.lerp(j,this.grad(this.p[h],_,Z,q),this.grad(this.p[x],_-1,Z,q)),this.lerp(j,this.grad(this.p[c],_,Z-1,q),this.grad(this.p[p],_-1,Z-1,q))),this.lerp(b,this.lerp(j,this.grad(this.p[h+1],_,Z,q-1),this.grad(this.p[x+1],_-1,Z,q-1)),this.lerp(j,this.grad(this.p[c+1],_,Z-1,q-1),this.grad(this.p[p+1],_-1,Z-1,q-1))))+1)/2}}class Zw{width;height;seed;constructor(_,Z,q){this.width=_,this.height=Z,this.seed=q}generate(_,Z){let q=new q0(this.seed),U=[],W=P.tiles.void,D=P.tiles.water,j=P.tiles.tree,b=P.tiles.rock;for(let C=0;C<this.height;C++)for(let A=0;A<this.width;A++){let h=A/this.width*5-2.5,c=C/this.height*5-2.5,s=this.getOctaveNoise(q,h,c,0,4,0.5);s=(s-0.5)*2+0.5,s=Math.max(0,Math.min(1,s));let x;if(s<0.25)x=D;else if(s<0.5)x=W;else if(s<0.75)x=j;else x=b;U.push(x_(x))}return new D_(_,this.width,this.height,U)}getOctaveNoise(_,Z,q,U,W,D){let j=0,b=1,C=1,A=0;for(let h=0;h<W;h++)j+=_.noise(Z*b,q*b,U*b)*C,A+=C,C*=D,b*=2;return j/A}}var T6=42;function U0(_,Z=T6){let U=new Zw(256,256,Z).generate("overworld="+Z,"Overworld");return _.maps[U.id]=U,_}class u1{state;constructor(){}init(){return this.state=Z0(),this.state=e_(this.state,0,Tw),this.state=e_(this.state,0,iw),this.state=e_(this.state,0,Q0),this.state=e_(this.state,1,Mw),this.state=e_(this.state,2,Ow),this.state=w0(this.state),this.state=yw(this.state),this.state=U0(this.state),this.state.currentMapId="botmos_hull_selection",this.state=A_(this.state,F_(),P.entities.Spirit,this.state.currentMapId,9,5,{faction:P.factions.Spirits,name:"Player"}),this.state}update(_,Z=!1){let q=this.state.entities[F_()];if(q){if(_){switch(_){case P.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case P.commands["#"]:this.state=X_(this.state,Fw(this.state,F_()));break;default:this.state=fw(this.state,q,_),this.state=K0(this.state)}this.state.actionLog.push(_.key)}}else this.state=X_(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=A_(this.state,F_(),P.entities.Spirit,this.state.currentMapId,9,5,{faction:P.factions.Spirits,name:"Player"});return this.state}play(_){for(let Z=0;Z<_.length;Z++){let q=_[Z];this.update(P.commands[q],!0)}return this.state}}var d={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},Jw=[],S1=void 0,$0=void 0,z0=0;document.body.addEventListener("keydown",function(_){if(_.defaultPrevented)return;switch(_.key){case"w":case"ArrowUp":d.up=!0,K_(_);break;case"a":case"ArrowLeft":d.left=!0,K_(_);break;case"s":case"ArrowDown":d.down=!0,K_(_);break;case"d":case"ArrowRight":d.right=!0,K_(_);break;case"x":d.a=!0,K_(_);break;case" ":case"y":case"z":d.b=!0,K_(_);break;case"m":d.menu=!0,K_(_);break;case"#":case"/":d.slash=!0,K_(_);break;default:}u_(G0())});function u_(_){let Z=Date.now();if(S1!==void 0&&Z-z0>=P.constants.MIN_TURN_SPEED_IN_MS)z0=Z,S1(_)}document.body.addEventListener("keyup",function(_){if(_.defaultPrevented)return;switch(_.key){case"w":case"ArrowUp":d.up=!1,K_(_);break;case"a":case"ArrowLeft":d.left=!1,K_(_);break;case"s":case"ArrowDown":d.down=!1,K_(_);break;case"d":case"ArrowRight":d.right=!1,K_(_);break;case"x":d.a=!1,K_(_);break;case" ":case"y":case"z":d.b=!1,K_(_);break;case"m":d.menu=!1,K_(_);break;case"#":case"/":d.slash=!1,K_(_);default:}});document.body.addEventListener("click",function(_){let{clientX:Z,clientY:q}=_,W=document.body.clientWidth/3,j=document.body.clientHeight/3;if(Z>=W&&Z<2*W&&q<j)u_(P.commands.N),K_(_);else if(Z<W&&q<j)u_(P.commands.B),K_(_);else if(Z>=2*W&&q<j)u_(P.commands.A),K_(_);else if(Z<W&&q>=j&&q<2*j)u_(P.commands.W),K_(_);else if(Z>=2*W&&q>=j&&q<2*j)u_(P.commands.E),K_(_);else if(Z>=W&&Z<2*W&&q>=2*j)u_(P.commands.S),K_(_);else if(Z>=W&&Z<2*W&&q>=j&&q<2*j)u_(P.commands.M),K_(_)});function K_(_){_.preventDefault(),_.stopPropagation()}var Y1=null;function h6(){let _=null;if(d.right)_=P.commands.E;if(d.left)_=P.commands.W;if(d.down)_=P.commands.S;if(d.up)_=P.commands.N;if(d.up&&d.right){if(_===P.commands.N&&Y1===P.commands.N)_=P.commands.E}if(d.up&&d.left){if(_===P.commands.N&&Y1===P.commands.N)_=P.commands.W}if(d.down&&d.right){if(_===P.commands.S&&Y1===P.commands.S)_=P.commands.E}if(d.down&&d.left){if(_===P.commands.S&&Y1===P.commands.S)_=P.commands.W}if(d.a)_=P.commands.A;if(d.b)_=P.commands.B;if(d.menu)_=P.commands.M;if(d.slash)_=P.commands["#"];if(Y1=_,_!==null)Jw.push(_)}function G0(){h6();let _=Jw.shift()||null;return Jw=[],_}document.body.addEventListener("mousemove",function(_){if(_.defaultPrevented)return;if(S1!==void 0)$0(_),K_(_)});var B0=void 0;window.addEventListener("gamepadconnected",(_)=>{B0=setInterval(function(){let Z=navigator.getGamepads()[_.gamepad?.index];if(d.right=Z.buttons[15].pressed,d.left=Z.buttons[14].pressed,d.down=Z.buttons[13].pressed,d.up=Z.buttons[12].pressed,d.a=Z.buttons[0].pressed||Z.buttons[2].pressed,d.b=Z.buttons[1].pressed||Z.buttons[3].pressed,d.menu=Z.buttons[9].pressed,d.right||d.left||d.down||d.up||d.a||d.b||d.menu)u_(G0())},100)});window.addEventListener("gamepaddisconnected",(_)=>{clearInterval(B0)});function X0(_){S1=_}function Y0(_){$0=_}var P0=i1(A1(),1);var f1={__10:[0,0],__11:[16,0],__12:[32,0],__13:[48,0],__14:[64,0],__15:[80,0],__1:[96,0],_1:[112,0],__2:[128,0],_2:[144,0],__3:[160,0],_3:[176,0],__4:[192,0],_4:[208,0],__5:[224,0],_5:[240,0],__6:[256,0],_6:[272,0],__7:[288,0],_7:[304,0],__8:[320,0],_8:[336,0],__9:[352,0],_9:[368,0],AeroBot_a:[384,0],AeroBot:[400,0],battery:[416,0],BioAbsorber:[432,0],broom:[448,0],chargepad:[464,0],cheat:[480,0],chest:[496,0],Cleaner_a:[512,0],Cleaner:[528,0],Deviant:[544,0],drain:[560,0],energy:[576,0],gold:[592,0],goo:[608,0],Graffiticyan:[624,0],Graffitimagenta:[640,0],Graffitiyellow:[656,0],hammer:[672,0],junk:[688,0],matter:[704,0],movableboulder:[720,0],movablebox:[736,0],moveeast:[752,0],movenorth:[768,0],movesouth:[784,0],movewest:[800,0],pickaxe:[816,0],Pioneer_a:[832,0],Pioneer:[848,0],portalclosed:[864,0],portalhidden:[880,0],portallauncher:[896,0],portal:[912,0],portalsewers:[928,0],portalstartaerobot:[944,0],"_portalstart?":[960,0],portalstartworkbot:[976,0],Recharger:[992,0],Recuperation:[1008,0],RoboRat_a:[1024,0],RoboRat:[1040,0],RockCrusher:[1056,0],rock:[1072,0],Screwing:[1088,0],shocker:[1104,0],spacerock:[1120,0],spacetree:[1136,0],spacevoid:[1152,0],spacevoidstarwhite:[1168,0],spacevoidstaryellow:[1184,0],spacewater_a:[1200,0],spacewater:[1216,0],Spirit_a:[1232,0],Spirit:[1248,0],star:[1264,0],terminal:[1280,0],tree:[1296,0],trident:[1312,0],tv:[1328,0],upgradeBioAbsorber:[1344,0],upgradeRecuperation:[1360,0],Valkyrie_a:[1376,0],Valkyrie:[1392,0],voidhidden:[1408,0],void:[1424,0],voidtrue:[1440,0],wall0:[1456,0],wall1:[1472,0],wall2:[1488,0],walla_:[1504,0],wallA:[1520,0],wallb_:[1536,0],wallB:[1552,0],wallc_:[1568,0],wallC:[1584,0],WallCrusher:[1600,0],walld_:[1616,0],wallD:[1632,0],walle_:[1648,0],wallE:[1664,0],wallf_:[1680,0],wallF:[1696,0],wallg_:[1712,0],wallG:[1728,0],wallh_:[1744,0],wallH:[1760,0],walli_:[1776,0],wallI:[1792,0],wallj_:[1808,0],wallJ:[1824,0],wallk_:[1840,0],wallK:[1856,0],walll_:[1872,0],wallL:[1888,0],wallm_:[1904,0],wallM:[1920,0],walln_:[1936,0],wallN:[1952,0],wallo_:[1968,0],wallO:[1984,0],"wall(":[2000,0],"wall)":[2016,0],"wall+":[2032,0],"wall,":[2048,0],"wall.":[2064,0],wall:[2080,0],"wall:":[2096,0],wall_:[2112,0],"wall|":[2128,0],wallp_:[2144,0],wallP:[2160,0],wallq_:[2176,0],wallQ:[2192,0],wallr_:[2208,0],wallR:[2224,0],walls_:[2240,0],wallS:[2256,0],wallstatueaerobot:[2272,0],wallstatuecleaner:[2288,0],wallstatuepioneer:[2304,0],wallstatueworkbot:[2320,0],wallt_:[2336,0],wallT:[2352,0],wallu_:[2368,0],wallU:[2384,0],wallv_:[2400,0],wallV:[2416,0],wallweak:[2432,0],wallw_:[2448,0],wallW:[2464,0],wallx_:[2480,0],wallX:[2496,0],wally_:[2512,0],wallY:[2528,0],wallz_:[2544,0],wallZ:[2560,0],water_a:[2576,0],WaterImmunity:[2592,0],water:[2608,0],watersewage_a:[2624,0],watersewage:[2640,0],WaterShield:[2656,0],WorkBot_a:[2672,0],WorkBot:[2688,0],wrench:[2704,0]};var Q1=document.createElement("div");Q1.id="ui";document.body.appendChild(Q1);var I1=qw(),w1=qw(),Vw=x6();Vw.style.marginRight=`${r.fontSize/2}px`;var L1=[];for(let _=0;_<r.uiEffectsMaxDisplaySize;_++)L1.push(qw());var S_=document.createElement("div");S_.replaceChildren(I1,w1,Vw,...L1);Q1.replaceChildren(S_);var T1=document.createElement("div");T1.style.display="flex";T1.style.justifyContent="space-between";var g1=document.createElement("div");g1.id="uichatlog";var L0=document.createElement("div");L0.id="uitooltip";T1.replaceChildren(g1,L0);Q1.appendChild(T1);var Kw=document.createElement("div");Kw.id="uimousetooltip";document.body.appendChild(Kw);async function W0(_,Z=0){if(!r.showUI)return;let q=F_(),U=_.entities[q],W="";if(U){m_(I1,U.type.name),I1.dataset.tooltip="Player hull: "+U.type.name;let D="",j=C1(_,q);if(j){m_(w1,j.type.name.toLowerCase());let c=j.type;w1.dataset.tooltip=`Player tool: ${c.name} (${Math.abs(c.damage)} damage, ${c.energyCost} energy)`}else m_(w1,null),w1.dataset.tooltip=void 0;let b=Rw(_,q);for(let c=0;c<r.uiEffectsMaxDisplaySize;c++){let s=b[c]?.type.name||null,x=b[c]?.type.tooltip||void 0;m_(L1[c],s),L1[c].dataset.tooltip=x}let C="";if(U.matter>0)C=`${U.matter}M `;let A="";if(U.gold>0)A=`${U.gold}G `;let h=j1(_,U);if(W=" "+U.energy+"/"+U.energyMax+" "+D+A+C+"Y:"+h.B.name+" X:"+h.A.name,Q1.style.flexDirection="column-reverse",U.y-Z>=B_.height-3)Q1.style.flexDirection="column";if(S_.style.background="#000",U.energy/U.energyMax<=0.2)S_.style.color="#000",S_.style.background="#f00";else S_.style.color="#74ee15",S_.style.background="#000"}else{m_(I1,null),m_(w1,null);for(let D=0;D<r.uiEffectsMaxDisplaySize;D++)m_(L1[D],null);W="Game over!",S_.style.color="#000",S_.style.background="#f00"}if(Vw.innerText=W,_._menuOpen&&!!_.chatLog.length){let D=_.chatLog.slice(-r.chatLogMaxDisplaySize);g1.innerText=D.join(`
`)}else g1.innerText=""}function qw(){let _=document.createElement("span");return m_(_,null),_.style.height=`${r.fontSize}px`,_.style.display="inline-block",_}function x6(){let _=document.createElement("span");return _.style.display="inline-block",_.style.marginLeft=`${r.fontSize/2}px`,_}function m_(_,Z){if(Z){let q=f1[Z][0];_.style.background=`url('build/tiles.png') -${q}px 0`,_.style.width=`${r.fontSize}px`}else _.style.width="0px"}function H0(){return Kw}var r_="_a",F0=document.createElement("img");F0.src="build/tiles.png";B_.tileSet=F0;B_.tileMap=c6();var J1=new P0.Display(B_);document.body.appendChild(J1.getContainer());var R0=0,j0=0,Z1=void 0;function m6(_,Z,q=!1){Z1=_;let U=_.currentMapId,W=_.maps[U],D=q?r_:"",j=0,b=0;if(W.widthTiles<Z.width)j=Math.floor((Z.width-W.widthTiles)/2),Z.x=0;if(W.heightTiles<Z.height)b=Math.floor((Z.height-W.heightTiles)/2),Z.y=0;R0=Z.x-j,j0=Z.y-b;let C={},A={},h={};for(let m=0;m<Z.height;m++)for(let l=0;l<Z.width;l++){let n=W.getTile(Z.x+l,Z.y+m),q_="";if(n?.type)if(n.options.sign)q_="#"+n.options.sign;else q_=n.type.icon;if(q_){let a=[j+l,b+m].toString();C[a]=[q_+D],A[a]=["transparent"],h[a]=["transparent"]}}let c=O1(_,U);for(let m=0;m<c.length;m++){let l=c[m],n=j+l.x-Z.x,q_=b+l.y-Z.y,a=[n,q_].toString();if(C[a])C[a].push(l.type.icon+D),A[a].push("transparent"),h[a].push("transparent");else C[a]=[l.type.icon+D],A[a]=["transparent"],h[a]=["transparent"]}let s=F_(),x=_.entities[s],p=((x||{}).options||{}).faction||void 0,Q_=p_(_,U);for(let m=0;m<Q_.length;m++){let l=Q_[m],n=j+l.x-Z.x,q_=b+l.y-Z.y,a="transparent";if(r.highlightFriendEnemy&&!b_(l)&&!e1(l)&&l!==x)switch(i_(x,l)){case 1:a="rgba(116, 238, 21, 0.5)";break;case 2:a="rgba(240, 0, 255, 0.5)";break}let v=[n,q_].toString();if(C[v])C[v].push(l.type.icon+D),A[v].push(a),h[v].push("transparent");else C[v]=[l.type.icon+D],A[v]=[a],h[v]=["transparent"];if(r.showEnergy!==0){let S=r.showEnergy===1?16:10,f=r.showEnergy===1?"__":"_",g=Math.ceil(l.energy/l.energyMax*S);if(g<S)C[v].push(f+g),A[v].push("transparent"),h[v].push("transparent")}}J1.clear();for(let[m,l]of Object.entries(C)){let n=m.split(",");J1.draw(Number(n[0]),Number(n[1]),l,A[m],h[m])}}var D0={x:0,y:0},h1=0;async function n_(_){let Z=_.entities[F_()],q=Z?Z:D0,U=l6(q);if(m6(_,U,h1%2==0),W0(_,U.y),D0=q,h1++,h1>=128)h1=0}async function M0(){J1._backend.setOptions(B_)}function O0(_){return[_[0]+R0,_[1]+j0]}function b0(_){if(!Z1)return{tile:null,entity:null,item:null};let Z=Z1.currentMapId,q=Z1.maps[Z],U=_[0],W=_[1],D=q.getTile(U,W),j=F1(Z1,Z,U,W),b=b1(Z1,Z,U,W);return{tile:D,entity:j,item:b}}function l6(_){return{x:Math.min(Math.max(0,_.x-Math.floor(B_.width/2)),t1.WIDTH-B_.width),y:Math.min(Math.max(0,_.y-Math.floor(B_.height/2)),t1.HEIGHT-B_.height),width:B_.width,height:B_.height}}function c6(){let _={};for(let[Z,q]of Object.entries(f1)){let U=Z.endsWith(r_),W="";if(U)Z=Z.substring(0,Z.length-r_.length),W=r_;if(Z.startsWith("wall")&&(Z.length===5||Z.length===6))_["#"+Z.substring(4,5)+W]=q;else if(Object.hasOwn(P.tiles,Z))_[P.tiles[Z].icon+W]=q;else if(Object.hasOwn(P.entities,Z))_[P.entities[Z].icon+W]=q;else if(Object.hasOwn(P.items,Z))_[P.items[Z].icon+W]=q;else if(Object.hasOwn(P.effects,Z))_[P.effects[Z].icon+W]=q;else _[Z+W]=q}for(let[Z,q]of Object.entries(_))if(!Z.endsWith(r_)&&!Object.hasOwn(_,Z+r_))_[Z+r_]=q;return _}async function C0(_){if(!r.showUI||!r.showTooltip)return;let Z="";if(_.target){if(_.target?.dataset?.tooltip)Z+=_.target.dataset.tooltip}let q=J1.eventToPosition(_);if(q[0]!==-1){let j=O0(q),b=b0(j);if(b.entity){let C=b.entity?.options?.name?b.entity.options.name:b.entity.type.name;Z+=C}if(b.item){if(Z!=="")Z+=`
`;Z+=b.item.type.name}if(!!b?.tile?.type&&b.tile?.type.tooltip!==""){if(Z!=="")Z+=`
`;Z+=b.tile.type.tooltip}}let U=typeof window!=="undefined"?window.innerHeight:0,W=Math.floor(U/2),D=H0();if(Z!==""){D.innerText=Z,D.style.display="inline-block";let{offsetWidth:j,offsetHeight:b}=D,C=window.innerWidth,A=window.innerHeight,h=_.x+20,c=_.y+20;if(h+j>C)h=_.x-j-20;if(c+b>A)c=_.y-b-20;D.style.left=h+"px",D.style.top=c+"px"}else D.style.display="none"}var j_=new u1;window.onload=function(){n_(j_.init())};window.onresize=async function(){let _=typeof window!=="undefined"?window.innerWidth:0,Z=typeof window!=="undefined"?window.innerHeight:0;r.cameraWidth=Math.floor(_/r.fontSize),r.cameraHeight=Math.floor(Z/r.fontSize),B_.width=Math.floor(r.cameraWidth*(1/r.zoom)),B_.height=Math.floor(r.cameraHeight*(1/r.zoom)),await M0(),n_(j_.state)};X0(function(_){n_(j_.update(_))});Y0(C0);if(!window.BMActionLog)window.BMActionLog=function(){return j_.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(_){n_(j_.play(_))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){r.debug=!r.debug,n_(j_.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){r.showUI=!r.showUI,n_(j_.state)};if(r.debug){if(!window.BMDebugState)window.BMDebugState=function(){return j_.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let _=Object.keys(j_.state.maps).length,Z=Object.keys(j_.state.entities).length,q=Object.keys(j_.state.items).length,U=Object.keys(j_.state.tools).length;return`Maps: ${_}, Entities: ${Z}, Items: ${q}, Tools: ${U}`}}document.body.focus();
