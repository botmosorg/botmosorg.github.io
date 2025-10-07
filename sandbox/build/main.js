var L6=Object.create;var{getPrototypeOf:W6,defineProperty:Fw,getOwnPropertyNames:H6}=Object;var P6=Object.prototype.hasOwnProperty;var i1=(_,Z,K)=>{K=_!=null?L6(W6(_)):{};let U=Z||!_||!_.__esModule?Fw(K,"default",{value:_,enumerable:!0}):K;for(let W of H6(_))if(!P6.call(U,W))Fw(U,W,{get:()=>_[W],enumerable:!0});return U};var D6=(_,Z)=>()=>(Z||_((Z={exports:{}}).exports,Z),Z.exports);var A1=D6((E1,ow)=>{function d_(_){if(_===void 0)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function k6(_,Z){var K=typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(K)return(K=K.call(_)).next.bind(K);if(Array.isArray(_)||(K=u6(_))||Z&&_&&typeof _.length==="number"){if(K)_=K;var U=0;return function(){if(U>=_.length)return{done:!0};return{done:!1,value:_[U++]}}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u6(_,Z){if(!_)return;if(typeof _==="string")return sw(_,Z);var K=Object.prototype.toString.call(_).slice(8,-1);if(K==="Object"&&_.constructor)K=_.constructor.name;if(K==="Map"||K==="Set")return Array.from(_);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return sw(_,Z)}function sw(_,Z){if(Z==null||Z>_.length)Z=_.length;for(var K=0,U=Array(Z);K<Z;K++)U[K]=_[K];return U}function K_(_,Z){_.prototype=Object.create(Z.prototype),_.prototype.constructor=_,Zw(_,Z)}function Zw(_,Z){return Zw=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(U,W){return U.__proto__=W,U},Zw(_,Z)}(function(_,Z){typeof E1==="object"&&typeof ow<"u"?Z(E1):typeof define==="function"&&define.amd?define(["exports"],Z):(_=typeof globalThis<"u"?globalThis:_||self,Z(_.ROT={}))})(E1,function(_){var Z=0.00000000023283064365386963,K=function(){function G(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var B=G.prototype;return B.getSeed=function(){return this._seed},B.setSeed=function(V){return V=V<1?1/V:V,this._seed=V,this._s0=(V>>>0)*Z,V=V*69069+1>>>0,this._s1=V*Z,V=V*69069+1>>>0,this._s2=V*Z,this._c=1,this},B.getUniform=function(){var V=2091639*this._s0+this._c*Z;return this._s0=this._s1,this._s1=this._s2,this._c=V|0,this._s2=V-this._c,this._s2},B.getUniformInt=function(V,w){var Q=Math.max(V,w),J=Math.min(V,w);return Math.floor(this.getUniform()*(Q-J+1))+J},B.getNormal=function(V,w){if(V===void 0)V=0;if(w===void 0)w=1;var Q,J,q;do Q=2*this.getUniform()-1,J=2*this.getUniform()-1,q=Q*Q+J*J;while(q>1||q==0);var $=Q*Math.sqrt(-2*Math.log(q)/q);return V+$*w},B.getPercentage=function(){return 1+Math.floor(this.getUniform()*100)},B.getItem=function(V){if(!V.length)return null;return V[Math.floor(this.getUniform()*V.length)]},B.shuffle=function(V){var w=[],Q=V.slice();while(Q.length){var J=Q.indexOf(this.getItem(Q));w.push(Q.splice(J,1)[0])}return w},B.getWeightedValue=function(V){var w=0;for(var Q in V)w+=V[Q];var J=this.getUniform()*w,q,$=0;for(q in V)if($+=V[q],J<$)return q;return q},B.getState=function(){return[this._s0,this._s1,this._s2,this._c]},B.setState=function(V){return this._s0=V[0],this._s1=V[1],this._s2=V[2],this._c=V[3],this},B.clone=function(){var V=new G;return V.setState(this.getState())},G}(),U=new K().setSeed(Date.now()),W=function(){function G(){}var B=G.prototype;return B.getContainer=function(){return null},B.setOptions=function(V){this._options=V},G}(),P=function(G){K_(B,G);function B(){var V=G.call(this)||this;return V._ctx=document.createElement("canvas").getContext("2d"),V}var z=B.prototype;return z.schedule=function(w){requestAnimationFrame(w)},z.getContainer=function(){return this._ctx.canvas},z.setOptions=function(w){G.prototype.setOptions.call(this,w);var Q=w.fontStyle?w.fontStyle+" ":"",J=Q+" "+w.fontSize+"px "+w.fontFamily;this._ctx.font=J,this._updateSize(),this._ctx.font=J,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},z.clear=function(){var w=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=w},z.eventToPosition=function(w,Q){var J=this._ctx.canvas,q=J.getBoundingClientRect();if(w-=q.left,Q-=q.top,w*=J.width/q.width,Q*=J.height/q.height,w<0||Q<0||w>=J.width||Q>=J.height)return[-1,-1];return this._normalizedEventToPosition(w,Q)},B}(W);function R(G,B){return(G%B+B)%B}function O(G,B,z){if(B===void 0)B=0;if(z===void 0)z=1;if(G<B)return B;if(G>z)return z;return G}function b(G){return G.charAt(0).toUpperCase()+G.substring(1)}function N(G){for(var B=arguments.length,z=Array(B>1?B-1:0),V=1;V<B;V++)z[V-1]=arguments[V];var w=N.map,Q=function(q,$,Y,X){if(G.charAt(X-1)=="%")return q.substring(1);if(!z.length)return q;var L=z[0],H=$||Y,F=H.split(","),j=F.shift()||"",M=w[j.toLowerCase()];if(!M)return q;L=z.shift();var C=L[M].apply(L,F),k=j.charAt(0);if(k!=k.toLowerCase())C=b(C);return C};return G.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}N.map={s:"toString"};var g=Object.freeze({__proto__:null,mod:R,clamp:O,capitalize:b,format:N}),h=function(G){K_(B,G);function B(){var V=G.call(this)||this;return V._spacingX=0,V._spacingY=0,V._hexSize=0,V}var z=B.prototype;return z.draw=function(w,Q){var J=w[0],q=w[1],$=w[2],Y=w[3],X=w[4],L=[(J+1)*this._spacingX,q*this._spacingY+this._hexSize];if(this._options.transpose)L.reverse();if(Q)this._ctx.fillStyle=X,this._fill(L[0],L[1]);if(!$)return;this._ctx.fillStyle=Y;var H=[].concat($);for(var F=0;F<H.length;F++)this._ctx.fillText(H[F],L[0],Math.ceil(L[1]))},z.computeSize=function(w,Q){if(this._options.transpose)w+=Q,Q=w-Q,w-=Q;var J=Math.floor(w/this._spacingX)-1,q=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[J,q]},z.computeFontSize=function(w,Q){if(this._options.transpose)w+=Q,Q=w-Q,w-=Q;var J=2*w/((this._options.width+1)*Math.sqrt(3))-1,q=Q/(2+1.5*(this._options.height-1)),$=Math.min(J,q),Y=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var X=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=Y;var L=X/100;$=Math.floor($)+1;var H=2*$/(this._options.spacing*(1+L/Math.sqrt(3)));return Math.ceil(H)-1},z._normalizedEventToPosition=function(w,Q){var J;if(this._options.transpose)w+=Q,Q=w-Q,w-=Q,J=this._ctx.canvas.width;else J=this._ctx.canvas.height;var q=J/this._options.height;if(Q=Math.floor(Q/q),R(Q,2))w-=this._spacingX,w=1+2*Math.floor(w/(2*this._spacingX));else w=2*Math.floor(w/(2*this._spacingX));return[w,Q]},z._fill=function(w,Q){var J=this._hexSize,q=this._options.border,$=this._ctx;if($.beginPath(),this._options.transpose)$.moveTo(w-J+q,Q),$.lineTo(w-J/2+q,Q+this._spacingX-q),$.lineTo(w+J/2-q,Q+this._spacingX-q),$.lineTo(w+J-q,Q),$.lineTo(w+J/2-q,Q-this._spacingX+q),$.lineTo(w-J/2+q,Q-this._spacingX+q),$.lineTo(w-J+q,Q);else $.moveTo(w,Q-J+q),$.lineTo(w+this._spacingX-q,Q-J/2+q),$.lineTo(w+this._spacingX-q,Q+J/2-q),$.lineTo(w,Q+J-q),$.lineTo(w-this._spacingX+q,Q+J/2-q),$.lineTo(w-this._spacingX+q,Q-J/2+q),$.lineTo(w,Q-J+q);$.fill()},z._updateSize=function(){var w=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(w.spacing*(w.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var J,q;if(w.transpose)J="height",q="width";else J="width",q="height";this._ctx.canvas[J]=Math.ceil((w.width+1)*this._spacingX),this._ctx.canvas[q]=Math.ceil((w.height-1)*this._spacingY+2*this._hexSize)},B}(P),m=function(G){K_(B,G);function B(){var V=G.call(this)||this;return V._spacingX=0,V._spacingY=0,V._canvasCache={},V}var z=B.prototype;return z.setOptions=function(w){G.prototype.setOptions.call(this,w),this._canvasCache={}},z.draw=function(w,Q){if(B.cache)this._drawWithCache(w);else this._drawNoCache(w,Q)},z._drawWithCache=function(w){var Q=w[0],J=w[1],q=w[2],$=w[3],Y=w[4],X=""+q+$+Y,L;if(X in this._canvasCache)L=this._canvasCache[X];else{var H=this._options.border;L=document.createElement("canvas");var F=L.getContext("2d");if(L.width=this._spacingX,L.height=this._spacingY,F.fillStyle=Y,F.fillRect(H,H,L.width-H,L.height-H),q){F.fillStyle=$,F.font=this._ctx.font,F.textAlign="center",F.textBaseline="middle";var j=[].concat(q);for(var M=0;M<j.length;M++)F.fillText(j[M],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[X]=L}this._ctx.drawImage(L,Q*this._spacingX,J*this._spacingY)},z._drawNoCache=function(w,Q){var J=w[0],q=w[1],$=w[2],Y=w[3],X=w[4];if(Q){var L=this._options.border;this._ctx.fillStyle=X,this._ctx.fillRect(J*this._spacingX+L,q*this._spacingY+L,this._spacingX-L,this._spacingY-L)}if(!$)return;this._ctx.fillStyle=Y;var H=[].concat($);for(var F=0;F<H.length;F++)this._ctx.fillText(H[F],(J+0.5)*this._spacingX,Math.ceil((q+0.5)*this._spacingY))},z.computeSize=function(w,Q){var J=Math.floor(w/this._spacingX),q=Math.floor(Q/this._spacingY);return[J,q]},z.computeFontSize=function(w,Q){var J=Math.floor(w/this._options.width),q=Math.floor(Q/this._options.height),$=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var Y=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=$;var X=Y/100,L=X*q/J;if(L>1)q=Math.floor(q/L);return Math.floor(q/this._options.spacing)},z._normalizedEventToPosition=function(w,Q){return[Math.floor(w/this._spacingX),Math.floor(Q/this._spacingY)]},z._updateSize=function(){var w=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(w.spacing*Q),this._spacingY=Math.ceil(w.spacing*w.fontSize),w.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=w.width*this._spacingX,this._ctx.canvas.height=w.height*this._spacingY},B}(P);m.cache=!1;var y=function(G){K_(B,G);function B(){var V=G.call(this)||this;return V._colorCanvas=document.createElement("canvas"),V}var z=B.prototype;return z.draw=function(w,Q){var J=w[0],q=w[1],$=w[2],Y=w[3],X=w[4],L=this._options.tileWidth,H=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(J*L,q*H,L,H);else this._ctx.fillStyle=X,this._ctx.fillRect(J*L,q*H,L,H);if(!$)return;var F=[].concat($),j=[].concat(Y),M=[].concat(X);for(var C=0;C<F.length;C++){var k=this._options.tileMap[F[C]];if(!k)throw Error('Char "'+F[C]+'" not found in tileMap');if(this._options.tileColorize){var I=this._colorCanvas,T=I.getContext("2d");T.globalCompositeOperation="source-over",T.clearRect(0,0,L,H);var r=j[C],i=M[C];if(T.drawImage(this._options.tileSet,k[0],k[1],L,H,0,0,L,H),r!="transparent")T.fillStyle=r,T.globalCompositeOperation="source-atop",T.fillRect(0,0,L,H);if(i!="transparent")T.fillStyle=i,T.globalCompositeOperation="destination-over",T.fillRect(0,0,L,H);this._ctx.drawImage(I,J*L,q*H,L,H)}else this._ctx.drawImage(this._options.tileSet,k[0],k[1],L,H,J*L,q*H,L,H)}},z.computeSize=function(w,Q){var J=Math.floor(w/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[J,q]},z.computeFontSize=function(){throw Error("Tile backend does not understand font size")},z._normalizedEventToPosition=function(w,Q){return[Math.floor(w/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},z._updateSize=function(){var w=this._options;this._ctx.canvas.width=w.width*w.tileWidth,this._ctx.canvas.height=w.height*w.tileHeight,this._colorCanvas.width=w.tileWidth,this._colorCanvas.height=w.tileHeight},B}(P);function l(G){var B,z;if(G in v)B=v[G];else{if(G.charAt(0)=="#"){var V=G.match(/[0-9a-f]/gi)||[],w=V.map(function(J){return parseInt(J,16)});if(w.length==3)B=w.map(function(J){return J*17});else{for(var Q=0;Q<3;Q++)w[Q+1]+=16*w[Q],w.splice(Q,1);B=w}}else if(z=G.match(/rgb\(([0-9, ]+)\)/i))B=z[1].split(/\s*,\s*/).map(function(J){return parseInt(J)});else B=[0,0,0];v[G]=B}return B.slice()}function p(G){var B=G.slice();for(var z=arguments.length,V=Array(z>1?z-1:0),w=1;w<z;w++)V[w-1]=arguments[w];for(var Q=0;Q<3;Q++)for(var J=0;J<V.length;J++)B[Q]+=V[J][Q];return B}function c(G){for(var B=arguments.length,z=Array(B>1?B-1:0),V=1;V<B;V++)z[V-1]=arguments[V];for(var w=0;w<3;w++)for(var Q=0;Q<z.length;Q++)G[w]+=z[Q][w];return G}function J_(G){var B=G.slice();for(var z=arguments.length,V=Array(z>1?z-1:0),w=1;w<z;w++)V[w-1]=arguments[w];for(var Q=0;Q<3;Q++){for(var J=0;J<V.length;J++)B[Q]*=V[J][Q]/255;B[Q]=Math.round(B[Q])}return B}function Q_(G){for(var B=arguments.length,z=Array(B>1?B-1:0),V=1;V<B;V++)z[V-1]=arguments[V];for(var w=0;w<3;w++){for(var Q=0;Q<z.length;Q++)G[w]*=z[Q][w]/255;G[w]=Math.round(G[w])}return G}function __(G,B,z){if(z===void 0)z=0.5;var V=G.slice();for(var w=0;w<3;w++)V[w]=Math.round(V[w]+z*(B[w]-G[w]));return V}var Z_=__;function E(G,B,z){if(z===void 0)z=0.5;var V=x(G),w=x(B);for(var Q=0;Q<3;Q++)V[Q]+=z*(w[Q]-V[Q]);return a(V)}var S=E;function f(G,B){if(!(B instanceof Array))B=Math.round(U.getNormal(0,B));var z=G.slice();for(var V=0;V<3;V++)z[V]+=B instanceof Array?Math.round(U.getNormal(0,B[V])):B;return z}function x(G){var B=G[0]/255,z=G[1]/255,V=G[2]/255,w=Math.max(B,z,V),Q=Math.min(B,z,V),J=0,q,$=(w+Q)/2;if(w==Q)q=0;else{var Y=w-Q;switch(q=$>0.5?Y/(2-w-Q):Y/(w+Q),w){case B:J=(z-V)/Y+(z<V?6:0);break;case z:J=(V-B)/Y+2;break;case V:J=(B-z)/Y+4;break}J/=6}return[J,q,$]}function e(G,B,z){if(z<0)z+=1;if(z>1)z-=1;if(z<0.16666666666666666)return G+(B-G)*6*z;if(z<0.5)return B;if(z<0.6666666666666666)return G+(B-G)*(0.6666666666666666-z)*6;return G}function a(G){var B=G[2];if(G[1]==0)return B=Math.round(B*255),[B,B,B];else{var z=G[1],V=B<0.5?B*(1+z):B+z-B*z,w=2*B-V,Q=e(w,V,G[0]+0.3333333333333333),J=e(w,V,G[0]),q=e(w,V,G[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(J*255),Math.round(q*255)]}}function u(G){var B=G.map(function(z){return O(z,0,255)});return"rgb("+B.join(",")+")"}function A(G){var B=G.map(function(z){return O(z,0,255).toString(16).padStart(2,"0")});return"#"+B.join("")}var v={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},o=Object.freeze({__proto__:null,fromString:l,add:p,add_:c,multiply:J_,multiply_:Q_,interpolate:__,lerp:Z_,interpolateHSL:E,lerpHSL:S,randomize:f,rgb2hsl:x,hsl2rgb:a,toRGB:u,toHex:A}),t=function(G){K_(B,G);function B(){var V=G.call(this)||this;V._uniforms={};try{V._gl=V._initWebGL()}catch(w){if(typeof w==="string")alert(w);else if(w instanceof Error)alert(w.message)}return V}B.isSupported=function(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var z=B.prototype;return z.schedule=function(w){requestAnimationFrame(w)},z.getContainer=function(){return this._gl.canvas},z.setOptions=function(w){var Q=this;G.prototype.setOptions.call(this,w),this._updateSize();var J=this._options.tileSet;if(J&&"complete"in J&&!J.complete)J.addEventListener("load",function(){return Q._updateTexture(J)});else this._updateTexture(J)},z.draw=function(w,Q){var J=this._gl,q=this._options,$=w[0],Y=w[1],X=w[2],L=w[3],H=w[4],F=J.canvas.height-(Y+1)*q.tileHeight;if(J.scissor($*q.tileWidth,F,q.tileWidth,q.tileHeight),Q){if(q.tileColorize)J.clearColor(0,0,0,0);else J.clearColor.apply(J,n_(H));J.clear(J.COLOR_BUFFER_BIT)}if(!X)return;var j=[].concat(X),M=[].concat(H),C=[].concat(L);J.uniform2fv(this._uniforms.targetPosRel,[$,Y]);for(var k=0;k<j.length;k++){var I=this._options.tileMap[j[k]];if(!I)throw Error('Char "'+j[k]+'" not found in tileMap');if(J.uniform1f(this._uniforms.colorize,q.tileColorize?1:0),J.uniform2fv(this._uniforms.tilesetPosAbs,I),q.tileColorize)J.uniform4fv(this._uniforms.tint,n_(C[k])),J.uniform4fv(this._uniforms.bg,n_(M[k]));J.drawArrays(J.TRIANGLE_STRIP,0,4)}},z.clear=function(){var w=this._gl;w.clearColor.apply(w,n_(this._options.bg)),w.scissor(0,0,w.canvas.width,w.canvas.height),w.clear(w.COLOR_BUFFER_BIT)},z.computeSize=function(w,Q){var J=Math.floor(w/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[J,q]},z.computeFontSize=function(){throw Error("Tile backend does not understand font size")},z.eventToPosition=function(w,Q){var J=this._gl.canvas,q=J.getBoundingClientRect();if(w-=q.left,Q-=q.top,w*=J.width/q.width,Q*=J.height/q.height,w<0||Q<0||w>=J.width||Q>=J.height)return[-1,-1];return this._normalizedEventToPosition(w,Q)},z._initWebGL=function(){var w=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var J=v_(Q,H_,z_);return Q.useProgram(J),Y_(Q),V_.forEach(function(q){return w._uniforms[q]=Q.getUniformLocation(J,q)}),this._program=J,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},z._normalizedEventToPosition=function(w,Q){return[Math.floor(w/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},z._updateSize=function(){var w=this._gl,Q=this._options,J=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];w.canvas.width=J[0],w.canvas.height=J[1],w.viewport(0,0,J[0],J[1]),w.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),w.uniform2fv(this._uniforms.targetSize,J)},z._updateTexture=function(w){V1(this._gl,w)},B}(W),V_=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],H_=`
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
}`.trim();function v_(G,B,z){var V=G.createShader(G.VERTEX_SHADER);if(G.shaderSource(V,B),G.compileShader(V),!G.getShaderParameter(V,G.COMPILE_STATUS))throw Error(G.getShaderInfoLog(V)||"");var w=G.createShader(G.FRAGMENT_SHADER);if(G.shaderSource(w,z),G.compileShader(w),!G.getShaderParameter(w,G.COMPILE_STATUS))throw Error(G.getShaderInfoLog(w)||"");var Q=G.createProgram();if(G.attachShader(Q,V),G.attachShader(Q,w),G.linkProgram(Q),!G.getProgramParameter(Q,G.LINK_STATUS))throw Error(G.getProgramInfoLog(Q)||"");return Q}function Y_(G){var B=new Float32Array([0,0,1,0,0,1,1,1]),z=G.createBuffer();G.bindBuffer(G.ARRAY_BUFFER,z),G.bufferData(G.ARRAY_BUFFER,B,G.STATIC_DRAW),G.enableVertexAttribArray(0),G.vertexAttribPointer(0,2,G.FLOAT,!1,0,0)}function V1(G,B){var z=G.createTexture();return G.bindTexture(G.TEXTURE_2D,z),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_MAG_FILTER,G.NEAREST),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_MIN_FILTER,G.NEAREST),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_WRAP_S,G.REPEAT),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_WRAP_T,G.REPEAT),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,0),G.texImage2D(G.TEXTURE_2D,0,G.RGBA,G.RGBA,G.UNSIGNED_BYTE,B),z}var I_={};function n_(G){if(!(G in I_)){var B;if(G=="transparent")B=[0,0,0,0];else if(G.indexOf("rgba")>-1){B=(G.match(/[\d.]+/g)||[]).map(Number);for(var z=0;z<3;z++)B[z]=B[z]/255}else B=l(G).map(function(V){return V/255}),B.push(1);I_[G]=B}return I_[G]}function E0(G){return"\x1B[0;48;5;"+x1(G)+"m\x1B[2J"}function A0(G,B){return"\x1B[0;38;5;"+x1(G)+";48;5;"+x1(B)+"m"}function N0(G,B){return"\x1B["+(B+1)+";"+(G+1)+"H"}function x1(G){var B=256,z=6,V=z/B,w=l(G),Q=Math.floor(w[0]*V),J=Math.floor(w[1]*V),q=Math.floor(w[2]*V);return Q*36+J*6+q*1+16}var zw=function(G){K_(B,G);function B(){var V=G.call(this)||this;return V._offset=[0,0],V._cursor=[-1,-1],V._lastColor="",V}var z=B.prototype;return z.schedule=function(w){setTimeout(w,16.666666666666668)},z.setOptions=function(w){G.prototype.setOptions.call(this,w);var Q=[w.width,w.height],J=this.computeSize();this._offset=J.map(function(q,$){return Math.floor((q-Q[$])/2)})},z.clear=function(){process.stdout.write(E0(this._options.bg))},z.draw=function(w,Q){var J=w[0],q=w[1],$=w[2],Y=w[3],X=w[4],L=this._offset[0]+J,H=this._offset[1]+q,F=this.computeSize();if(L<0||L>=F[0])return;if(H<0||H>=F[1])return;if(L!==this._cursor[0]||H!==this._cursor[1])process.stdout.write(N0(L,H)),this._cursor[0]=L,this._cursor[1]=H;if(Q){if(!$)$=" "}if(!$)return;var j=A0(Y,X);if(j!==this._lastColor)process.stdout.write(j),this._lastColor=j;if($!="\t"){var M=[].concat($);process.stdout.write(M[0])}if(this._cursor[0]++,this._cursor[0]>=F[0])this._cursor[0]=0,this._cursor[1]++},z.computeFontSize=function(){throw Error("Terminal backend has no notion of font size")},z.eventToPosition=function(w,Q){return[w,Q]},z.computeSize=function(){return[process.stdout.columns,process.stdout.rows]},B}(W),k0=/%([bc]){([^}]*)}/g,g_=0,l_=1,m1=2,l1=3;function u0(G,B){var z={width:0,height:1},V=c1(G,B),w=0;for(var Q=0;Q<V.length;Q++){var J=V[Q];switch(J.type){case g_:w+=J.value.length;break;case l_:z.height++,z.width=Math.max(z.width,w),w=0;break}}return z.width=Math.max(z.width,w),z}function c1(G,B){var z=[],V=0;G.replace(k0,function(Q,J,q,$){var Y=G.substring(V,$);if(Y.length)z.push({type:g_,value:Y});return z.push({type:J=="c"?m1:l1,value:q.trim()}),V=$+Q.length,""});var w=G.substring(V);if(w.length)z.push({type:g_,value:w});return S0(z,B)}function S0(G,B){if(!B)B=1/0;var z=0,V=0,w=-1;while(z<G.length){var Q=G[z];if(Q.type==l_)V=0,w=-1;if(Q.type!=g_){z++;continue}while(V==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var J=Q.value.indexOf(`
`);if(J!=-1){Q.value=W1(G,z,J,!0);var q=Q.value.split("");while(q.length&&q[q.length-1]==" ")q.pop();Q.value=q.join("")}if(!Q.value.length){G.splice(z,1);continue}if(V+Q.value.length>B){var $=-1;while(!0){var Y=Q.value.indexOf(" ",$+1);if(Y==-1)break;if(V+Y>B)break;$=Y}if($!=-1)Q.value=W1(G,z,$,!0);else if(w!=-1){var X=G[w],L=X.value.lastIndexOf(" ");X.value=W1(G,w,L,!0),z=w}else Q.value=W1(G,z,B-V,!1)}else if(V+=Q.value.length,Q.value.indexOf(" ")!=-1)w=z;z++}G.push({type:l_});var H=null;for(var F=0;F<G.length;F++){var j=G[F];switch(j.type){case g_:H=j;break;case l_:if(H){var M=H.value.split("");while(M.length&&M[M.length-1]==" ")M.pop();H.value=M.join("")}H=null;break}}return G.pop(),G}function W1(G,B,z,V){var w={type:l_},Q={type:g_,value:G[B].value.substring(z+(V?1:0))};return G.splice(B+1,0,w,Q),G[B].value.substring(0,z)}var f0=Object.freeze({__proto__:null,TYPE_TEXT:g_,TYPE_NEWLINE:l_,TYPE_FG:m1,TYPE_BG:l1,measure:u0,tokenize:c1}),p1=80,d1=25,B_={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},I0={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},g0={hex:h,rect:m,tile:y,"tile-gl":t,term:zw},T0={width:p1,height:d1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},s_=function(){function G(z){if(z===void 0)z={};this._data={},this._dirty=!1,this._options={},z=Object.assign({},T0,z),this.setOptions(z),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var B=G.prototype;return B.DEBUG=function(V,w,Q){var J=[this._options.bg,this._options.fg];this.draw(V,w,null,null,J[Q%J.length])},B.clear=function(){this._data={},this._dirty=!0},B.setOptions=function(V){if(Object.assign(this._options,V),V.width||V.height||V.fontSize||V.fontFamily||V.spacing||V.layout){if(V.layout){var w=g0[V.layout];this._backend=new w}this._backend.setOptions(this._options),this._dirty=!0}return this},B.getOptions=function(){return this._options},B.getContainer=function(){return this._backend.getContainer()},B.computeSize=function(V,w){return this._backend.computeSize(V,w)},B.computeFontSize=function(V,w){return this._backend.computeFontSize(V,w)},B.computeTileSize=function(V,w){var Q=Math.floor(V/this._options.width),J=Math.floor(w/this._options.height);return[Q,J]},B.eventToPosition=function(V){var w,Q;if("touches"in V)w=V.touches[0].clientX,Q=V.touches[0].clientY;else w=V.clientX,Q=V.clientY;return this._backend.eventToPosition(w,Q)},B.draw=function(V,w,Q,J,q){if(!J)J=this._options.fg;if(!q)q=this._options.bg;var $=V+","+w;if(this._data[$]=[V,w,Q,J,q],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[$]=!0},B.drawOver=function(V,w,Q,J,q){var $=V+","+w,Y=this._data[$];if(Y)Y[2]=Q||Y[2],Y[3]=J||Y[3],Y[4]=q||Y[4];else this.draw(V,w,Q,J,q)},B.drawText=function(V,w,Q,J){var q=null,$=null,Y=V,X=w,L=1;if(!J)J=this._options.width-V;var H=c1(Q,J);while(H.length){var F=H.shift();switch(F.type){case g_:var j=!1,M=!1,C=!1,k=!1;for(var I=0;I<F.value.length;I++){var T=F.value.charCodeAt(I),r=F.value.charAt(I);if(this._options.layout==="term"){var i=T>>8,w_=i===17||i>=46&&i<=159||i>=172&&i<=215||T>=43360&&T<=43391;if(w_){this.draw(Y+0,X,r,q,$),this.draw(Y+1,X,"\t",q,$),Y+=2;continue}}if(C=T>65280&&T<65377||T>65500&&T<65512||T>65518,j=r.charCodeAt(0)==32||r.charCodeAt(0)==12288,k&&!C&&!j)Y++;if(C&&!M)Y++;this.draw(Y++,X,r,q,$),M=j,k=C}break;case m1:q=F.value||null;break;case l1:$=F.value||null;break;case l_:Y=V,X++,L++;break}}return L},B._tick=function(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var V in this._data)this._draw(V,!1)}else for(var w in this._dirty)this._draw(w,!0);this._dirty=!1},B._draw=function(V,w){var Q=this._data[V];if(Q[4]!=this._options.bg)w=!0;this._backend.draw(Q,w)},G}();s_.Rect=m,s_.Hex=h,s_.Tile=y,s_.TileGL=t,s_.Term=zw;var h0=function(){function G(z){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,z),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var V=0;V<this._options.order;V++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var B=G.prototype;return B.clear=function(){this._data={},this._priorValues={}},B.generate=function(){var V=[this._sample(this._prefix)];while(V[V.length-1]!=this._boundary)V.push(this._sample(V));return this._join(V.slice(0,-1))},B.observe=function(V){var w=this._split(V);for(var Q=0;Q<w.length;Q++)this._priorValues[w[Q]]=this._options.prior;w=this._prefix.concat(w).concat(this._suffix);for(var J=this._options.order;J<w.length;J++){var q=w.slice(J-this._options.order,J),$=w[J];for(var Y=0;Y<q.length;Y++){var X=q.slice(Y);this._observeEvent(X,$)}}},B.getStats=function(){var V=[],w=Object.keys(this._priorValues).length;w--,V.push("distinct samples: "+w);var Q=Object.keys(this._data).length,J=0;for(var q in this._data)J+=Object.keys(this._data[q]).length;return V.push("dictionary size (contexts): "+Q),V.push("dictionary size (events): "+J),V.join(", ")},B._split=function(V){return V.split(this._options.words?/\s+/:"")},B._join=function(V){return V.join(this._options.words?" ":"")},B._observeEvent=function(V,w){var Q=this._join(V);if(!(Q in this._data))this._data[Q]={};var J=this._data[Q];if(!(w in J))J[w]=0;J[w]++},B._sample=function(V){V=this._backoff(V);var w=this._join(V),Q=this._data[w],J={};if(this._options.prior){for(var q in this._priorValues)J[q]=this._priorValues[q];for(var $ in Q)J[$]+=Q[$]}else J=Q;return U.getWeightedValue(J)},B._backoff=function(V){if(V.length>this._options.order)V=V.slice(-this._options.order);else if(V.length<this._options.order)V=this._prefix.slice(0,this._options.order-V.length).concat(V);while(!(this._join(V)in this._data)&&V.length>0)V=V.slice(1);return V},G}(),$w=function(){function G(){this.heap=[],this.timestamp=0}var B=G.prototype;return B.lessThan=function(V,w){return V.key==w.key?V.timestamp<w.timestamp:V.key<w.key},B.shift=function(V){this.heap=this.heap.map(function(w){var{key:Q,value:J,timestamp:q}=w;return{key:Q+V,value:J,timestamp:q}})},B.len=function(){return this.heap.length},B.push=function(V,w){this.timestamp+=1;var Q=this.len();this.heap.push({value:V,timestamp:this.timestamp,key:w}),this.updateUp(Q)},B.pop=function(){if(this.len()==0)throw Error("no element to pop");var V=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return V},B.find=function(V){for(var w=0;w<this.len();w++)if(V==this.heap[w].value)return this.heap[w];return null},B.remove=function(V){var w=null;for(var Q=0;Q<this.len();Q++)if(V==this.heap[Q].value)w=Q;if(w===null)return!1;if(this.len()>1){var J=this.heap.pop();if(J.value!=V)this.heap[w]=J,this.updateDown(w);return!0}else this.heap.pop();return!0},B.parentNode=function(V){return Math.floor((V-1)/2)},B.leftChildNode=function(V){return 2*V+1},B.rightChildNode=function(V){return 2*V+2},B.existNode=function(V){return V>=0&&V<this.heap.length},B.swap=function(V,w){var Q=this.heap[V];this.heap[V]=this.heap[w],this.heap[w]=Q},B.minNode=function(V){var w=V.filter(this.existNode.bind(this)),Q=w[0];for(var J=k6(w),q;!(q=J()).done;){var $=q.value;if(this.lessThan(this.heap[$],this.heap[Q]))Q=$}return Q},B.updateUp=function(V){if(V==0)return;var w=this.parentNode(V);if(this.existNode(w)&&this.lessThan(this.heap[V],this.heap[w]))this.swap(V,w),this.updateUp(w)},B.updateDown=function(V){var w=this.leftChildNode(V),Q=this.rightChildNode(V);if(!this.existNode(w))return;var J=this.minNode([V,w,Q]);if(J!=V)this.swap(V,J),this.updateDown(J)},B.debugPrint=function(){console.log(this.heap)},G}(),Bw=function(){function G(){this._time=0,this._events=new $w}var B=G.prototype;return B.getTime=function(){return this._time},B.clear=function(){return this._events=new $w,this},B.add=function(V,w){this._events.push(V,w)},B.get=function(){if(!this._events.len())return null;var V=this._events.pop(),w=V.key,Q=V.value;if(w>0)this._time+=w,this._events.shift(-w);return Q},B.getEventTime=function(V){var w=this._events.find(V);if(w){var Q=w.key;return Q}return},B.remove=function(V){return this._events.remove(V)},G}(),y1=function(){function G(){this._queue=new Bw,this._repeat=[],this._current=null}var B=G.prototype;return B.getTime=function(){return this._queue.getTime()},B.add=function(V,w){if(w)this._repeat.push(V);return this},B.getTimeOf=function(V){return this._queue.getEventTime(V)},B.clear=function(){return this._queue.clear(),this._repeat=[],this._current=null,this},B.remove=function(V){var w=this._queue.remove(V),Q=this._repeat.indexOf(V);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==V)this._current=null;return w},B.next=function(){return this._current=this._queue.get(),this._current},G}(),x0=function(G){K_(B,G);function B(){return G.apply(this,arguments)||this}var z=B.prototype;return z.add=function(w,Q){return this._queue.add(w,0),G.prototype.add.call(this,w,Q)},z.next=function(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return G.prototype.next.call(this)},B}(y1),m0=function(G){K_(B,G);function B(){return G.apply(this,arguments)||this}var z=B.prototype;return z.add=function(w,Q,J){return this._queue.add(w,J!==void 0?J:1/w.getSpeed()),G.prototype.add.call(this,w,Q)},z.next=function(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return G.prototype.next.call(this)},B}(y1),l0=function(G){K_(B,G);function B(){var V=G.call(this)||this;return V._defaultDuration=1,V._duration=V._defaultDuration,V}var z=B.prototype;return z.add=function(w,Q,J){return this._queue.add(w,J||this._defaultDuration),G.prototype.add.call(this,w,Q)},z.clear=function(){return this._duration=this._defaultDuration,G.prototype.clear.call(this)},z.remove=function(w){if(w==this._current)this._duration=this._defaultDuration;return G.prototype.remove.call(this,w)},z.next=function(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return G.prototype.next.call(this)},z.setDuration=function(w){if(this._current)this._duration=w;return this},B}(y1),c0={Simple:x0,Speed:m0,Action:l0},r1=function(){function G(z,V){if(V===void 0)V={};this._lightPasses=z,this._options=Object.assign({topology:8},V)}var B=G.prototype;return B._getCircle=function(V,w,Q){var J=[],q,$,Y;switch(this._options.topology){case 4:$=1,Y=[0,1],q=[B_[8][7],B_[8][1],B_[8][3],B_[8][5]];break;case 6:q=B_[6],$=1,Y=[-1,1];break;case 8:q=B_[4],$=2,Y=[-1,1];break;default:throw Error("Incorrect topology for FOV computation")}var X=V+Y[0]*Q,L=w+Y[1]*Q;for(var H=0;H<q.length;H++)for(var F=0;F<Q*$;F++)J.push([X,L]),X+=q[H][0],L+=q[H][1];return J},G}(),p0=function(G){K_(B,G);function B(){return G.apply(this,arguments)||this}var z=B.prototype;return z.compute=function(w,Q,J,q){if(q(w,Q,0,1),!this._lightPasses(w,Q))return;var $=[],Y,X,L,H,F;for(var j=1;j<=J;j++){var M=this._getCircle(w,Q,j),C=360/M.length;for(var k=0;k<M.length;k++){if(L=M[k][0],H=M[k][1],Y=C*(k-0.5),X=Y+C,F=!this._lightPasses(L,H),this._visibleCoords(Math.floor(Y),Math.ceil(X),F,$))q(L,H,j,1);if($.length==2&&$[0]==0&&$[1]==360)return}}},z._visibleCoords=function(w,Q,J,q){if(w<0){var $=this._visibleCoords(0,Q,J,q),Y=this._visibleCoords(360+w,360,J,q);return $||Y}var X=0;while(X<q.length&&q[X]<w)X++;if(X==q.length){if(J)q.push(w,Q);return!0}var L=0;if(X%2){while(X<q.length&&q[X]<Q)X++,L++;if(L==0)return!1;if(J)if(L%2)q.splice(X-L,L,Q);else q.splice(X-L,L);return!0}else{while(X<q.length&&q[X]<Q)X++,L++;if(w==q[X-L]&&L==1)return!1;if(J)if(L%2)q.splice(X-L,L,w);else q.splice(X-L,L,w,Q);return!0}},B}(r1),d0=function(G){K_(B,G);function B(){return G.apply(this,arguments)||this}var z=B.prototype;return z.compute=function(w,Q,J,q){if(q(w,Q,0,1),!this._lightPasses(w,Q))return;var $=[],Y,X,L,H,F,j;for(var M=1;M<=J;M++){var C=this._getCircle(w,Q,M),k=C.length;for(var I=0;I<k;I++){if(Y=C[I][0],X=C[I][1],H=[I?2*I-1:2*k-1,2*k],F=[2*I+1,2*k],L=!this._lightPasses(Y,X),j=this._checkVisibility(H,F,L,$),j)q(Y,X,M,j);if($.length==2&&$[0][0]==0&&$[1][0]==$[1][1])return}}},z._checkVisibility=function(w,Q,J,q){if(w[0]>Q[0]){var $=this._checkVisibility(w,[w[1],w[1]],J,q),Y=this._checkVisibility([0,1],Q,J,q);return($+Y)/2}var X=0,L=!1;while(X<q.length){var H=q[X],F=H[0]*w[1]-w[0]*H[1];if(F>=0){if(F==0&&!(X%2))L=!0;break}X++}var j=q.length,M=!1;while(j--){var C=q[j],k=Q[0]*C[1]-C[0]*Q[1];if(k>=0){if(k==0&&j%2)M=!0;break}}var I=!0;if(X==j&&(L||M))I=!1;else if(L&&M&&X+1==j&&j%2)I=!1;else if(X>j&&X%2)I=!1;if(!I)return 0;var T,r=j-X+1;if(r%2)if(X%2){var i=q[X];if(T=(Q[0]*i[1]-i[0]*Q[1])/(i[1]*Q[1]),J)q.splice(X,r,Q)}else{var w_=q[j];if(T=(w_[0]*w[1]-w[0]*w_[1])/(w[1]*w_[1]),J)q.splice(X,r,w)}else if(X%2){var U_=q[X],L_=q[j];if(T=(L_[0]*U_[1]-U_[0]*L_[1])/(U_[1]*L_[1]),J)q.splice(X,r)}else{if(J)q.splice(X,r,w,Q);return 1}var E_=(Q[0]*w[1]-w[0]*Q[1])/(w[1]*Q[1]);return T/E_},B}(r1),T_=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],y0=function(G){K_(B,G);function B(){return G.apply(this,arguments)||this}var z=B.prototype;return z.compute=function(w,Q,J,q){q(w,Q,0,1);for(var $=0;$<T_.length;$++)this._renderOctant(w,Q,T_[$],J,q)},z.compute180=function(w,Q,J,q,$){$(w,Q,0,1);var Y=(q-1+8)%8,X=(q-2+8)%8,L=(q+1+8)%8;this._renderOctant(w,Q,T_[X],J,$),this._renderOctant(w,Q,T_[Y],J,$),this._renderOctant(w,Q,T_[q],J,$),this._renderOctant(w,Q,T_[L],J,$)},z.compute90=function(w,Q,J,q,$){$(w,Q,0,1);var Y=(q-1+8)%8;this._renderOctant(w,Q,T_[q],J,$),this._renderOctant(w,Q,T_[Y],J,$)},z._renderOctant=function(w,Q,J,q,$){this._castVisibility(w,Q,1,1,0,q+1,J[0],J[1],J[2],J[3],$)},z._castVisibility=function(w,Q,J,q,$,Y,X,L,H,F,j){if(q<$)return;for(var M=J;M<=Y;M++){var C=-M-1,k=-M,I=!1,T=0;while(C<=0){C+=1;var r=w+C*X+k*L,i=Q+C*H+k*F,w_=(C-0.5)/(k+0.5),U_=(C+0.5)/(k-0.5);if(U_>q)continue;if(w_<$)break;if(C*C+k*k<Y*Y)j(r,i,M,1);if(!I){if(!this._lightPasses(r,i)&&M<Y)I=!0,this._castVisibility(w,Q,M+1,q,w_,Y,X,L,H,F,j),T=U_}else{if(!this._lightPasses(r,i)){T=U_;continue}I=!1,q=T}}if(I)break}},B}(r1),r0={DiscreteShadowcasting:p0,PreciseShadowcasting:d0,RecursiveShadowcasting:y0},c_=function(){function G(z,V){if(z===void 0)z=p1;if(V===void 0)V=d1;this._width=z,this._height=V}var B=G.prototype;return B._fillMap=function(V){var w=[];for(var Q=0;Q<this._width;Q++){w.push([]);for(var J=0;J<this._height;J++)w[Q].push(V)}return w},G}(),n0=function(G){K_(B,G);function B(){return G.apply(this,arguments)||this}var z=B.prototype;return z.create=function(w){var Q=this._width-1,J=this._height-1;for(var q=0;q<=Q;q++)for(var $=0;$<=J;$++){var Y=q&&$&&q<Q&&$<J;w(q,$,Y?0:1)}return this},B}(c_),Gw=function(G){K_(B,G);function B(V,w){var Q=G.call(this,V,w)||this;return Q._rooms=[],Q._corridors=[],Q}var z=B.prototype;return z.getRooms=function(){return this._rooms},z.getCorridors=function(){return this._corridors},B}(c_),Xw=function(){},H1=function(G){K_(B,G);function B(V,w,Q,J,q,$){var Y=G.call(this)||this;if(Y._x1=V,Y._y1=w,Y._x2=Q,Y._y2=J,Y._doors={},q!==void 0&&$!==void 0)Y.addDoor(q,$);return Y}B.createRandomAt=function(w,Q,J,q,$){var Y=$.roomWidth[0],X=$.roomWidth[1],L=U.getUniformInt(Y,X);Y=$.roomHeight[0],X=$.roomHeight[1];var H=U.getUniformInt(Y,X);if(J==1){var F=Q-Math.floor(U.getUniform()*H);return new this(w+1,F,w+L,F+H-1,w,Q)}if(J==-1){var j=Q-Math.floor(U.getUniform()*H);return new this(w-L,j,w-1,j+H-1,w,Q)}if(q==1){var M=w-Math.floor(U.getUniform()*L);return new this(M,Q+1,M+L-1,Q+H,w,Q)}if(q==-1){var C=w-Math.floor(U.getUniform()*L);return new this(C,Q-H,C+L-1,Q-1,w,Q)}throw Error("dx or dy must be 1 or -1")},B.createRandomCenter=function(w,Q,J){var q=J.roomWidth[0],$=J.roomWidth[1],Y=U.getUniformInt(q,$);q=J.roomHeight[0],$=J.roomHeight[1];var X=U.getUniformInt(q,$),L=w-Math.floor(U.getUniform()*Y),H=Q-Math.floor(U.getUniform()*X),F=L+Y-1,j=H+X-1;return new this(L,H,F,j)},B.createRandom=function(w,Q,J){var q=J.roomWidth[0],$=J.roomWidth[1],Y=U.getUniformInt(q,$);q=J.roomHeight[0],$=J.roomHeight[1];var X=U.getUniformInt(q,$),L=w-Y-1,H=Q-X-1,F=1+Math.floor(U.getUniform()*L),j=1+Math.floor(U.getUniform()*H),M=F+Y-1,C=j+X-1;return new this(F,j,M,C)};var z=B.prototype;return z.addDoor=function(w,Q){return this._doors[w+","+Q]=1,this},z.getDoors=function(w){for(var Q in this._doors){var J=Q.split(",");w(parseInt(J[0]),parseInt(J[1]))}return this},z.clearDoors=function(){return this._doors={},this},z.addDoors=function(w){var Q=this._x1-1,J=this._x2+1,q=this._y1-1,$=this._y2+1;for(var Y=Q;Y<=J;Y++)for(var X=q;X<=$;X++){if(Y!=Q&&Y!=J&&X!=q&&X!=$)continue;if(w(Y,X))continue;this.addDoor(Y,X)}return this},z.debug=function(){console.log("room",this._x1,this._y1,this._x2,this._y2)},z.isValid=function(w,Q){var J=this._x1-1,q=this._x2+1,$=this._y1-1,Y=this._y2+1;for(var X=J;X<=q;X++)for(var L=$;L<=Y;L++)if(X==J||X==q||L==$||L==Y){if(!w(X,L))return!1}else if(!Q(X,L))return!1;return!0},z.create=function(w){var Q=this._x1-1,J=this._x2+1,q=this._y1-1,$=this._y2+1,Y=0;for(var X=Q;X<=J;X++)for(var L=q;L<=$;L++){if(X+","+L in this._doors)Y=2;else if(X==Q||X==J||L==q||L==$)Y=1;else Y=0;w(X,L,Y)}},z.getCenter=function(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},z.getLeft=function(){return this._x1},z.getRight=function(){return this._x2},z.getTop=function(){return this._y1},z.getBottom=function(){return this._y2},B}(Xw),n1=function(G){K_(B,G);function B(V,w,Q,J){var q=G.call(this)||this;return q._startX=V,q._startY=w,q._endX=Q,q._endY=J,q._endsWithAWall=!0,q}B.createRandomAt=function(w,Q,J,q,$){var Y=$.corridorLength[0],X=$.corridorLength[1],L=U.getUniformInt(Y,X);return new this(w,Q,w+J*L,Q+q*L)};var z=B.prototype;return z.debug=function(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},z.isValid=function(w,Q){var J=this._startX,q=this._startY,$=this._endX-J,Y=this._endY-q,X=1+Math.max(Math.abs($),Math.abs(Y));if($)$=$/Math.abs($);if(Y)Y=Y/Math.abs(Y);var L=Y,H=-$,F=!0;for(var j=0;j<X;j++){var M=J+j*$,C=q+j*Y;if(!Q(M,C))F=!1;if(!w(M+L,C+H))F=!1;if(!w(M-L,C-H))F=!1;if(!F){X=j,this._endX=M-$,this._endY=C-Y;break}}if(X==0)return!1;if(X==1&&w(this._endX+$,this._endY+Y))return!1;var k=!w(this._endX+$+L,this._endY+Y+H),I=!w(this._endX+$-L,this._endY+Y-H);if(this._endsWithAWall=w(this._endX+$,this._endY+Y),(k||I)&&this._endsWithAWall)return!1;return!0},z.create=function(w){var Q=this._startX,J=this._startY,q=this._endX-Q,$=this._endY-J,Y=1+Math.max(Math.abs(q),Math.abs($));if(q)q=q/Math.abs(q);if($)$=$/Math.abs($);for(var X=0;X<Y;X++){var L=Q+X*q,H=J+X*$;w(L,H,0)}return!0},z.createPriorityWalls=function(w){if(!this._endsWithAWall)return;var Q=this._startX,J=this._startY,q=this._endX-Q,$=this._endY-J;if(q)q=q/Math.abs(q);if($)$=$/Math.abs($);var Y=$,X=-q;w(this._endX+q,this._endY+$),w(this._endX+Y,this._endY+X),w(this._endX-Y,this._endY-X)},B}(Xw),s0=function(G){K_(B,G);function B(V,w,Q){var J=G.call(this,V,w)||this;return J._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(J._options,Q),J._map=[],J._dug=0,J._roomAttempts=20,J._corridorAttempts=20,J._connected=[],J._unconnected=[],J._digCallback=J._digCallback.bind(d_(J)),J._canBeDugCallback=J._canBeDugCallback.bind(d_(J)),J._isWallCallback=J._isWallCallback.bind(d_(J)),J}var z=B.prototype;return z.create=function(w){var Q=Date.now();while(!0){var J=Date.now();if(J-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(w)for(var q=0;q<this._width;q++)for(var $=0;$<this._height;$++)w(q,$,this._map[q][$]);return this},z._generateRooms=function(){var w=this._width-2,Q=this._height-2,J;do if(J=this._generateRoom(),this._dug/(w*Q)>this._options.roomDugPercentage)break;while(J)},z._generateRoom=function(){var w=0;while(w<this._roomAttempts){w++;var Q=H1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},z._generateCorridors=function(){var w=0;while(w<this._corridorAttempts){w++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var J=this._rooms[Q];J.clearDoors(),J.create(this._digCallback)}if(this._unconnected=U.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var q=U.getItem(this._connected);if(!q)break;var $=this._closestRoom(this._unconnected,q);if(!$)break;var Y=this._closestRoom(this._connected,$);if(!Y)break;var X=this._connectRooms($,Y);if(!X)break;if(!this._unconnected.length)return!0}}return!1},z._closestRoom=function(w,Q){var J=1/0,q=Q.getCenter(),$=null;for(var Y=0;Y<w.length;Y++){var X=w[Y],L=X.getCenter(),H=L[0]-q[0],F=L[1]-q[1],j=H*H+F*F;if(j<J)J=j,$=X}return $},z._connectRooms=function(w,Q){var J=w.getCenter(),q=Q.getCenter(),$=q[0]-J[0],Y=q[1]-J[1],X,L,H,F,j,M,C;if(Math.abs($)<Math.abs(Y))H=Y>0?2:0,F=(H+2)%4,j=Q.getLeft(),M=Q.getRight(),C=0;else H=$>0?1:3,F=(H+2)%4,j=Q.getTop(),M=Q.getBottom(),C=1;if(X=this._placeInWall(w,H),!X)return!1;if(X[C]>=j&&X[C]<=M){L=X.slice();var k=0;switch(F){case 0:k=Q.getTop()-1;break;case 1:k=Q.getRight()+1;break;case 2:k=Q.getBottom()+1;break;case 3:k=Q.getLeft()-1;break}L[(C+1)%2]=k,this._digLine([X,L])}else if(X[C]<j-1||X[C]>M+1){var I=X[C]-q[C],T=0;switch(F){case 0:case 1:T=I<0?3:1;break;case 2:case 3:T=I<0?1:3;break}if(F=(F+T)%4,L=this._placeInWall(Q,F),!L)return!1;var r=[0,0];r[C]=X[C];var i=(C+1)%2;r[i]=L[i],this._digLine([X,r,L])}else{var w_=(C+1)%2;if(L=this._placeInWall(Q,F),!L)return!1;var U_=Math.round((L[w_]+X[w_])/2),L_=[0,0],E_=[0,0];L_[C]=X[C],L_[w_]=U_,E_[C]=L[C],E_[w_]=U_,this._digLine([X,L_,E_,L])}if(w.addDoor(X[0],X[1]),Q.addDoor(L[0],L[1]),C=this._unconnected.indexOf(w),C!=-1)this._unconnected.splice(C,1),this._connected.push(w);if(C=this._unconnected.indexOf(Q),C!=-1)this._unconnected.splice(C,1),this._connected.push(Q);return!0},z._placeInWall=function(w,Q){var J=[0,0],q=[0,0],$=0;switch(Q){case 0:q=[1,0],J=[w.getLeft(),w.getTop()-1],$=w.getRight()-w.getLeft()+1;break;case 1:q=[0,1],J=[w.getRight()+1,w.getTop()],$=w.getBottom()-w.getTop()+1;break;case 2:q=[1,0],J=[w.getLeft(),w.getBottom()+1],$=w.getRight()-w.getLeft()+1;break;case 3:q=[0,1],J=[w.getLeft()-1,w.getTop()],$=w.getBottom()-w.getTop()+1;break}var Y=[],X=-2;for(var L=0;L<$;L++){var H=J[0]+L*q[0],F=J[1]+L*q[1];Y.push(null);var j=this._map[H][F]==1;if(j){if(X!=L-1)Y[L]=[H,F]}else if(X=L,L)Y[L-1]=null}for(var M=Y.length-1;M>=0;M--)if(!Y[M])Y.splice(M,1);return Y.length?U.getItem(Y):null},z._digLine=function(w){for(var Q=1;Q<w.length;Q++){var J=w[Q-1],q=w[Q],$=new n1(J[0],J[1],q[0],q[1]);$.create(this._digCallback),this._corridors.push($)}},z._digCallback=function(w,Q,J){if(this._map[w][Q]=J,J==0)this._dug++},z._isWallCallback=function(w,Q){if(w<0||Q<0||w>=this._width||Q>=this._height)return!1;return this._map[w][Q]==1},z._canBeDugCallback=function(w,Q){if(w<1||Q<1||w+1>=this._width||Q+1>=this._height)return!1;return this._map[w][Q]==1},B}(Gw),o0=function(G){K_(B,G);function B(V,w,Q){var J;if(Q===void 0)Q={};return J=G.call(this,V,w)||this,J._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},J.setOptions(Q),J._dirs=B_[J._options.topology],J._map=J._fillMap(0),J}var z=B.prototype;return z.randomize=function(w){for(var Q=0;Q<this._width;Q++)for(var J=0;J<this._height;J++)this._map[Q][J]=U.getUniform()<w?1:0;return this},z.setOptions=function(w){Object.assign(this._options,w)},z.set=function(w,Q,J){this._map[w][Q]=J},z.create=function(w){var Q=this._fillMap(0),J=this._options.born,q=this._options.survive;for(var $=0;$<this._height;$++){var Y=1,X=0;if(this._options.topology==6)Y=2,X=$%2;for(var L=X;L<this._width;L+=Y){var H=this._map[L][$],F=this._getNeighbors(L,$);if(H&&q.indexOf(F)!=-1)Q[L][$]=1;else if(!H&&J.indexOf(F)!=-1)Q[L][$]=1}}this._map=Q,w&&this._serviceCallback(w)},z._serviceCallback=function(w){for(var Q=0;Q<this._height;Q++){var J=1,q=0;if(this._options.topology==6)J=2,q=Q%2;for(var $=q;$<this._width;$+=J)w($,Q,this._map[$][Q])}},z._getNeighbors=function(w,Q){var J=0;for(var q=0;q<this._dirs.length;q++){var $=this._dirs[q],Y=w+$[0],X=Q+$[1];if(Y<0||Y>=this._width||X<0||X>=this._height)continue;J+=this._map[Y][X]==1?1:0}return J},z.connect=function(w,Q,J){if(!Q)Q=0;var q=[],$={},Y=1,X=[0,0];if(this._options.topology==6)Y=2,X=[0,1];for(var L=0;L<this._height;L++)for(var H=X[L%2];H<this._width;H+=Y)if(this._freeSpace(H,L,Q)){var F=[H,L];$[this._pointKey(F)]=F,q.push([H,L])}var j=q[U.getUniformInt(0,q.length-1)],M=this._pointKey(j),C={};C[M]=j,delete $[M],this._findConnected(C,$,[j],!1,Q);while(Object.keys($).length>0){var k=this._getFromTo(C,$),I=k[0],T=k[1],r={};r[this._pointKey(I)]=I,this._findConnected(r,$,[I],!0,Q);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,T,I,C,$,Q,J);for(var w_ in r){var U_=r[w_];this._map[U_[0]][U_[1]]=Q,C[w_]=U_,delete $[w_]}}w&&this._serviceCallback(w)},z._getFromTo=function(w,Q){var J=[0,0],q=[0,0],$,Y=Object.keys(w),X=Object.keys(Q);for(var L=0;L<5;L++){if(Y.length<X.length){var H=Y;q=w[H[U.getUniformInt(0,H.length-1)]],J=this._getClosest(q,Q)}else{var F=X;J=Q[F[U.getUniformInt(0,F.length-1)]],q=this._getClosest(J,w)}if($=(J[0]-q[0])*(J[0]-q[0])+(J[1]-q[1])*(J[1]-q[1]),$<64)break}return[J,q]},z._getClosest=function(w,Q){var J=null,q=null;for(var $ in Q){var Y=Q[$],X=(Y[0]-w[0])*(Y[0]-w[0])+(Y[1]-w[1])*(Y[1]-w[1]);if(q==null||X<q)q=X,J=Y}return J},z._findConnected=function(w,Q,J,q,$){while(J.length>0){var Y=J.splice(0,1)[0],X=void 0;if(this._options.topology==6)X=[[Y[0]+2,Y[1]],[Y[0]+1,Y[1]-1],[Y[0]-1,Y[1]-1],[Y[0]-2,Y[1]],[Y[0]-1,Y[1]+1],[Y[0]+1,Y[1]+1]];else X=[[Y[0]+1,Y[1]],[Y[0]-1,Y[1]],[Y[0],Y[1]+1],[Y[0],Y[1]-1]];for(var L=0;L<X.length;L++){var H=this._pointKey(X[L]);if(w[H]==null&&this._freeSpace(X[L][0],X[L][1],$)){if(w[H]=X[L],!q)delete Q[H];J.push(X[L])}}}},z._tunnelToConnected=function(w,Q,J,q,$,Y){var X,L;if(Q[0]<w[0])X=Q,L=w;else X=w,L=Q;for(var H=X[0];H<=L[0];H++){this._map[H][X[1]]=$;var F=[H,X[1]],j=this._pointKey(F);J[j]=F,delete q[j]}if(Y&&X[0]<L[0])Y(X,[L[0],X[1]]);var M=L[0];if(Q[1]<w[1])X=Q,L=w;else X=w,L=Q;for(var C=X[1];C<L[1];C++){this._map[M][C]=$;var k=[M,C],I=this._pointKey(k);J[I]=k,delete q[I]}if(Y&&X[1]<L[1])Y([L[0],X[1]],[L[0],L[1]])},z._tunnelToConnected6=function(w,Q,J,q,$,Y){var X,L;if(Q[0]<w[0])X=Q,L=w;else X=w,L=Q;var H=X[0],F=X[1];while(!(H==L[0]&&F==L[1])){var j=2;if(F<L[1])F++,j=1;else if(F>L[1])F--,j=1;if(H<L[0])H+=j;else if(H>L[0])H-=j;else if(L[1]%2)H-=j;else H+=j;this._map[H][F]=$;var M=[H,F],C=this._pointKey(M);J[C]=M,delete q[C]}if(Y)Y(Q,w)},z._freeSpace=function(w,Q,J){return w>=0&&w<this._width&&Q>=0&&Q<this._height&&this._map[w][Q]==J},z._pointKey=function(w){return w[0]+"."+w[1]},B}(c_),a0={room:H1,corridor:n1},i0=function(G){K_(B,G);function B(V,w,Q){var J;if(Q===void 0)Q={};return J=G.call(this,V,w)||this,J._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),J._features={room:4,corridor:4},J._map=[],J._featureAttempts=20,J._walls={},J._dug=0,J._digCallback=J._digCallback.bind(d_(J)),J._canBeDugCallback=J._canBeDugCallback.bind(d_(J)),J._isWallCallback=J._isWallCallback.bind(d_(J)),J._priorityWallCallback=J._priorityWallCallback.bind(d_(J)),J}var z=B.prototype;return z.create=function(w){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var J=Date.now(),q;do{q=0;var $=Date.now();if($-J>this._options.timeLimit)break;var Y=this._findWall();if(!Y)break;var X=Y.split(","),L=parseInt(X[0]),H=parseInt(X[1]),F=this._getDiggingDirection(L,H);if(!F)continue;var j=0;do if(j++,this._tryFeature(L,H,F[0],F[1])){this._removeSurroundingWalls(L,H),this._removeSurroundingWalls(L-F[0],H-F[1]);break}while(j<this._featureAttempts);for(var M in this._walls)if(this._walls[M]>1)q++}while(this._dug/Q<this._options.dugPercentage||q);if(this._addDoors(),w)for(var C=0;C<this._width;C++)for(var k=0;k<this._height;k++)w(C,k,this._map[C][k]);return this._walls={},this._map=[],this},z._digCallback=function(w,Q,J){if(J==0||J==2)this._map[w][Q]=0,this._dug++;else this._walls[w+","+Q]=1},z._isWallCallback=function(w,Q){if(w<0||Q<0||w>=this._width||Q>=this._height)return!1;return this._map[w][Q]==1},z._canBeDugCallback=function(w,Q){if(w<1||Q<1||w+1>=this._width||Q+1>=this._height)return!1;return this._map[w][Q]==1},z._priorityWallCallback=function(w,Q){this._walls[w+","+Q]=2},z._firstRoom=function(){var w=Math.floor(this._width/2),Q=Math.floor(this._height/2),J=H1.createRandomCenter(w,Q,this._options);this._rooms.push(J),J.create(this._digCallback)},z._findWall=function(){var w=[],Q=[];for(var J in this._walls){var q=this._walls[J];if(q==2)Q.push(J);else w.push(J)}var $=Q.length?Q:w;if(!$.length)return null;var Y=U.getItem($.sort());return delete this._walls[Y],Y},z._tryFeature=function(w,Q,J,q){var $=U.getWeightedValue(this._features),Y=a0[$],X=Y.createRandomAt(w,Q,J,q,this._options);if(!X.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(X.create(this._digCallback),X instanceof H1)this._rooms.push(X);if(X instanceof n1)X.createPriorityWalls(this._priorityWallCallback),this._corridors.push(X);return!0},z._removeSurroundingWalls=function(w,Q){var J=B_[4];for(var q=0;q<J.length;q++){var $=J[q],Y=w+$[0],X=Q+$[1];delete this._walls[Y+","+X],Y=w+2*$[0],X=Q+2*$[1],delete this._walls[Y+","+X]}},z._getDiggingDirection=function(w,Q){if(w<=0||Q<=0||w>=this._width-1||Q>=this._height-1)return null;var J=null,q=B_[4];for(var $=0;$<q.length;$++){var Y=q[$],X=w+Y[0],L=Q+Y[1];if(!this._map[X][L]){if(J)return null;J=Y}}if(!J)return null;return[-J[0],-J[1]]},z._addDoors=function(){var w=this._map;function Q($,Y){return w[$][Y]==1}for(var J=0;J<this._rooms.length;J++){var q=this._rooms[J];q.clearDoors(),q.addDoors(Q)}},B}(Gw);function Yw(G,B,z){z[B[G+1]]=z[G],B[z[G]]=B[G+1],z[G]=G+1,B[G+1]=G}function Lw(G,B,z){z[B[G]]=z[G],B[z[G]]=B[G],z[G]=G,B[G]=G}var e0=function(G){K_(B,G);function B(){return G.apply(this,arguments)||this}var z=B.prototype;return z.create=function(w){var Q=this._fillMap(1),J=Math.ceil((this._width-2)/2),q=0.375,$=[],Y=[];for(var X=0;X<J;X++)$.push(X),Y.push(X);$.push(J-1);var L;for(L=1;L+3<this._height;L+=2)for(var H=0;H<J;H++){var F=2*H+1,j=L;if(Q[F][j]=0,H!=$[H+1]&&U.getUniform()>q)Yw(H,$,Y),Q[F+1][j]=0;if(H!=$[H]&&U.getUniform()>q)Lw(H,$,Y);else Q[F][j+1]=0}for(var M=0;M<J;M++){var C=2*M+1,k=L;if(Q[C][k]=0,M!=$[M+1]&&(M==$[M]||U.getUniform()>q))Yw(M,$,Y),Q[C+1][k]=0;Lw(M,$,Y)}for(var I=0;I<this._width;I++)for(var T=0;T<this._height;T++)w(I,T,Q[I][T]);return this},B}(c_),t0=function(G){K_(B,G);function B(){var V=G.apply(this,arguments)||this;return V._stack=[],V._map=[],V}var z=B.prototype;return z.create=function(w){var Q=this._width,J=this._height;this._map=[];for(var q=0;q<Q;q++){this._map.push([]);for(var $=0;$<J;$++){var Y=q==0||$==0||q+1==Q||$+1==J;this._map[q].push(Y?1:0)}}this._stack=[[1,1,Q-2,J-2]],this._process();for(var X=0;X<Q;X++)for(var L=0;L<J;L++)w(X,L,this._map[X][L]);return this._map=[],this},z._process=function(){while(this._stack.length){var w=this._stack.shift();this._partitionRoom(w)}},z._partitionRoom=function(w){var Q=[],J=[];for(var q=w[0]+1;q<w[2];q++){var $=this._map[q][w[1]-1],Y=this._map[q][w[3]+1];if($&&Y&&!(q%2))Q.push(q)}for(var X=w[1]+1;X<w[3];X++){var L=this._map[w[0]-1][X],H=this._map[w[2]+1][X];if(L&&H&&!(X%2))J.push(X)}if(!Q.length||!J.length)return;var F=U.getItem(Q),j=U.getItem(J);this._map[F][j]=1;var M=[],C=[];M.push(C);for(var k=w[0];k<F;k++)if(this._map[k][j]=1,k%2)C.push([k,j]);C=[],M.push(C);for(var I=F+1;I<=w[2];I++)if(this._map[I][j]=1,I%2)C.push([I,j]);C=[],M.push(C);for(var T=w[1];T<j;T++)if(this._map[F][T]=1,T%2)C.push([F,T]);C=[],M.push(C);for(var r=j+1;r<=w[3];r++)if(this._map[F][r]=1,r%2)C.push([F,r]);var i=U.getItem(M);for(var w_=0;w_<M.length;w_++){var U_=M[w_];if(U_==i)continue;var L_=U.getItem(U_);this._map[L_[0]][L_[1]]=0}this._stack.push([w[0],w[1],F-1,j-1]),this._stack.push([F+1,w[1],w[2],j-1]),this._stack.push([w[0],j+1,F-1,w[3]]),this._stack.push([F+1,j+1,w[2],w[3]])},B}(c_),_6=function(G){K_(B,G);function B(V,w,Q){var J;if(Q===void 0)Q=0;return J=G.call(this,V,w)||this,J._regularity=Q,J._map=[],J}var z=B.prototype;return z.create=function(w){var Q=this._width,J=this._height,q=this._fillMap(1);Q-=Q%2?1:2,J-=J%2?1:2;var $=0,Y=0,X=0,L=0,H=0,F=!1,j=[[0,0],[0,0],[0,0],[0,0]];do{if($=1+2*Math.floor(U.getUniform()*(Q-1)/2),Y=1+2*Math.floor(U.getUniform()*(J-1)/2),!H)q[$][Y]=0;if(!q[$][Y]){this._randomize(j);do{if(Math.floor(U.getUniform()*(this._regularity+1))==0)this._randomize(j);F=!0;for(var M=0;M<4;M++)if(X=$+j[M][0]*2,L=Y+j[M][1]*2,this._isFree(q,X,L,Q,J)){q[X][L]=0,q[$+j[M][0]][Y+j[M][1]]=0,$=X,Y=L,F=!1,H++;break}}while(!F)}}while(H+1<Q*J/4);for(var C=0;C<this._width;C++)for(var k=0;k<this._height;k++)w(C,k,q[C][k]);return this._map=[],this},z._randomize=function(w){for(var Q=0;Q<4;Q++)w[Q][0]=0,w[Q][1]=0;switch(Math.floor(U.getUniform()*4)){case 0:w[0][0]=-1,w[1][0]=1,w[2][1]=-1,w[3][1]=1;break;case 1:w[3][0]=-1,w[2][0]=1,w[1][1]=-1,w[0][1]=1;break;case 2:w[2][0]=-1,w[3][0]=1,w[0][1]=-1,w[1][1]=1;break;case 3:w[1][0]=-1,w[0][0]=1,w[3][1]=-1,w[2][1]=1;break}},z._isFree=function(w,Q,J,q,$){if(Q<1||J<1||Q>=q||J>=$)return!1;return w[Q][J]},B}(c_),w6=function(G){K_(B,G);function B(V,w,Q){var J=G.call(this,V,w)||this;if(J.map=[],J.rooms=[],J.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=J._calculateRoomSize(J._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=J._calculateRoomSize(J._height,Q.cellHeight);return J._options=Q,J}var z=B.prototype;return z.create=function(w){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),w)for(var Q=0;Q<this._width;Q++)for(var J=0;J<this._height;J++)w(Q,J,this.map[Q][J]);return this},z._calculateRoomSize=function(w,Q){var J=Math.floor(w/Q*0.8),q=Math.floor(w/Q*0.25);if(q<2)q=2;if(J<2)J=2;return[q,J]},z._initRooms=function(){for(var w=0;w<this._options.cellWidth;w++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[w].push({x:0,y:0,width:0,height:0,connections:[],cellx:w,celly:Q})}},z._connectRooms=function(){var w=U.getUniformInt(0,this._options.cellWidth-1),Q=U.getUniformInt(0,this._options.cellHeight-1),J,q,$,Y=!1,X,L,H;do{H=[0,2,4,6],H=U.shuffle(H);do{if(Y=!1,J=H.pop(),q=w+B_[8][J][0],$=Q+B_[8][J][1],q<0||q>=this._options.cellWidth)continue;if($<0||$>=this._options.cellHeight)continue;if(X=this.rooms[w][Q],X.connections.length>0){if(X.connections[0][0]==q&&X.connections[0][1]==$)break}if(L=this.rooms[q][$],L.connections.length==0)L.connections.push([w,Q]),this.connectedCells.push([q,$]),w=q,Q=$,Y=!0}while(H.length>0&&Y==!1)}while(H.length>0)},z._connectUnconnectedRooms=function(){var w=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=U.shuffle(this.connectedCells);var J,q,$;for(var Y=0;Y<this._options.cellWidth;Y++)for(var X=0;X<this._options.cellHeight;X++)if(J=this.rooms[Y][X],J.connections.length==0){var L=[0,2,4,6];L=U.shuffle(L),$=!1;do{var H=L.pop(),F=Y+B_[8][H][0],j=X+B_[8][H][1];if(F<0||F>=w||j<0||j>=Q)continue;if(q=this.rooms[F][j],$=!0,q.connections.length==0)break;for(var M=0;M<q.connections.length;M++)if(q.connections[M][0]==Y&&q.connections[M][1]==X){$=!1;break}if($)break}while(L.length);if($)J.connections.push([q.cellx,q.celly]);else console.log("-- Unable to connect room.")}},z._createRandomRoomConnections=function(){},z._createRooms=function(){var w=this._width,Q=this._height,J=this._options.cellWidth,q=this._options.cellHeight,$=Math.floor(this._width/J),Y=Math.floor(this._height/q),X,L,H=this._options.roomWidth,F=this._options.roomHeight,j,M,C;for(var k=0;k<J;k++)for(var I=0;I<q;I++){if(j=$*k,M=Y*I,j==0)j=1;if(M==0)M=1;if(X=U.getUniformInt(H[0],H[1]),L=U.getUniformInt(F[0],F[1]),I>0){C=this.rooms[k][I-1];while(M-(C.y+C.height)<3)M++}if(k>0){C=this.rooms[k-1][I];while(j-(C.x+C.width)<3)j++}var T=Math.round(U.getUniformInt(0,$-X)/2),r=Math.round(U.getUniformInt(0,Y-L)/2);while(j+T+X>=w)if(T)T--;else X--;while(M+r+L>=Q)if(r)r--;else L--;j=j+T,M=M+r,this.rooms[k][I].x=j,this.rooms[k][I].y=M,this.rooms[k][I].width=X,this.rooms[k][I].height=L;for(var i=j;i<j+X;i++)for(var w_=M;w_<M+L;w_++)this.map[i][w_]=0}},z._getWallPosition=function(w,Q){var J,q,$;if(Q==1||Q==3){if(J=U.getUniformInt(w.x+1,w.x+w.width-2),Q==1)q=w.y-2,$=q+1;else q=w.y+w.height+1,$=q-1;this.map[J][$]=0}else{if(q=U.getUniformInt(w.y+1,w.y+w.height-2),Q==2)J=w.x+w.width+1,$=J-1;else J=w.x-2,$=J+1;this.map[$][q]=0}return[J,q]},z._drawCorridor=function(w,Q){var J=Q[0]-w[0],q=Q[1]-w[1],$=w[0],Y=w[1],X,L,H,F,j=[],M=Math.abs(J),C=Math.abs(q),k=U.getUniform(),I=k,T=1-k;if(L=J>0?2:6,H=q>0?4:0,M<C)X=Math.ceil(C*I),j.push([H,X]),j.push([L,M]),X=Math.floor(C*T),j.push([H,X]);else X=Math.ceil(M*I),j.push([L,X]),j.push([H,C]),X=Math.floor(M*T),j.push([L,X]);this.map[$][Y]=0;while(j.length>0){F=j.pop();while(F[1]>0)$+=B_[8][F[0]][0],Y+=B_[8][F[0]][1],this.map[$][Y]=0,F[1]=F[1]-1}},z._createCorridors=function(){var w=this._options.cellWidth,Q=this._options.cellHeight,J,q,$,Y,X;for(var L=0;L<w;L++)for(var H=0;H<Q;H++){J=this.rooms[L][H];for(var F=0;F<J.connections.length;F++){if(q=J.connections[F],$=this.rooms[q[0]][q[1]],$.cellx>J.cellx)Y=2,X=4;else if($.cellx<J.cellx)Y=4,X=2;else if($.celly>J.celly)Y=3,X=1;else Y=1,X=3;this._drawCorridor(this._getWallPosition(J,Y),this._getWallPosition($,X))}}},B}(c_),Q6={Arena:n0,Uniform:s0,Cellular:o0,Digger:i0,EllerMaze:e0,DividedMaze:t0,IceyMaze:_6,Rogue:w6},Z6=function(){},J6=0.5*(Math.sqrt(3)-1),K1=(3-Math.sqrt(3))/6,V6=function(G){K_(B,G);function B(V){var w;if(V===void 0)V=256;w=G.call(this)||this,w._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var J=0;J<V;J++)Q.push(J);Q=U.shuffle(Q),w._perms=[],w._indexes=[];for(var q=0;q<2*V;q++)w._perms.push(Q[q%V]),w._indexes.push(w._perms[q]%w._gradients.length);return w}var z=B.prototype;return z.get=function(w,Q){var J=this._perms,q=this._indexes,$=J.length/2,Y=0,X=0,L=0,H,F=(w+Q)*J6,j=Math.floor(w+F),M=Math.floor(Q+F),C=(j+M)*K1,k=j-C,I=M-C,T=w-k,r=Q-I,i,w_;if(T>r)i=1,w_=0;else i=0,w_=1;var U_=T-i+K1,L_=r-w_+K1,E_=T-1+2*K1,s1=r-1+2*K1,o1=R(j,$),a1=R(M,$),q1=0.5-T*T-r*r;if(q1>=0){q1*=q1,H=q[o1+J[a1]];var Hw=this._gradients[H];Y=q1*q1*(Hw[0]*T+Hw[1]*r)}var U1=0.5-U_*U_-L_*L_;if(U1>=0){U1*=U1,H=q[o1+i+J[a1+w_]];var Pw=this._gradients[H];X=U1*U1*(Pw[0]*U_+Pw[1]*L_)}var z1=0.5-E_*E_-s1*s1;if(z1>=0){z1*=z1,H=q[o1+1+J[a1+1]];var Dw=this._gradients[H];L=z1*z1*(Dw[0]*E_+Dw[1]*s1)}return 70*(Y+X+L)},B}(Z6),K6={Simplex:V6},Ww=function(){function G(z,V,w,Q){if(Q===void 0)Q={};if(this._toX=z,this._toY=V,this._passableCallback=w,this._options=Object.assign({topology:8},Q),this._dirs=B_[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var B=G.prototype;return B._getNeighbors=function(V,w){var Q=[];for(var J=0;J<this._dirs.length;J++){var q=this._dirs[J],$=V+q[0],Y=w+q[1];if(!this._passableCallback($,Y))continue;Q.push([$,Y])}return Q},G}(),q6=function(G){K_(B,G);function B(V,w,Q,J){var q=G.call(this,V,w,Q,J)||this;return q._computed={},q._todo=[],q._add(V,w,null),q}var z=B.prototype;return z.compute=function(w,Q,J){var q=w+","+Q;if(!(q in this._computed))this._compute(w,Q);if(!(q in this._computed))return;var $=this._computed[q];while($)J($.x,$.y),$=$.prev},z._compute=function(w,Q){while(this._todo.length){var J=this._todo.shift();if(J.x==w&&J.y==Q)return;var q=this._getNeighbors(J.x,J.y);for(var $=0;$<q.length;$++){var Y=q[$],X=Y[0],L=Y[1],H=X+","+L;if(H in this._computed)continue;this._add(X,L,J)}}},z._add=function(w,Q,J){var q={x:w,y:Q,prev:J};this._computed[w+","+Q]=q,this._todo.push(q)},B}(Ww),U6=function(G){K_(B,G);function B(V,w,Q,J){var q;if(J===void 0)J={};return q=G.call(this,V,w,Q,J)||this,q._todo=[],q._done={},q}var z=B.prototype;return z.compute=function(w,Q,J){this._todo=[],this._done={},this._fromX=w,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var q=this._todo.shift(),$=q.x+","+q.y;if($ in this._done)continue;if(this._done[$]=q,q.x==w&&q.y==Q)break;var Y=this._getNeighbors(q.x,q.y);for(var X=0;X<Y.length;X++){var L=Y[X],H=L[0],F=L[1],j=H+","+F;if(j in this._done)continue;this._add(H,F,q)}}var M=this._done[w+","+Q];if(!M)return;while(M)J(M.x,M.y),M=M.prev},z._add=function(w,Q,J){var q=this._distance(w,Q),$={x:w,y:Q,prev:J,g:J?J.g+1:0,h:q},Y=$.g+$.h;for(var X=0;X<this._todo.length;X++){var L=this._todo[X],H=L.g+L.h;if(Y<H||Y==H&&q<L.h){this._todo.splice(X,0,$);return}}this._todo.push($)},z._distance=function(w,Q){switch(this._options.topology){case 4:return Math.abs(w-this._fromX)+Math.abs(Q-this._fromY);case 6:var J=Math.abs(w-this._fromX),q=Math.abs(Q-this._fromY);return q+Math.max(0,(J-q)/2);case 8:return Math.max(Math.abs(w-this._fromX),Math.abs(Q-this._fromY))}},B}(Ww),z6={Dijkstra:q6,AStar:U6},$6=function(){function G(z){this._scheduler=z,this._lock=1}var B=G.prototype;return B.start=function(){return this.unlock()},B.lock=function(){return this._lock++,this},B.unlock=function(){if(!this._lock)throw Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var V=this._scheduler.next();if(!V)return this.lock();var w=V.act();if(w&&w.then)this.lock(),w.then(this.unlock.bind(this))}return this},G}(),B6=function(){function G(z,V){if(V===void 0)V={};this._reflectivityCallback=z,this._options={},V=Object.assign({passes:1,emissionThreshold:100,range:10},V),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(V)}var B=G.prototype;return B.setOptions=function(V){if(Object.assign(this._options,V),V&&V.range)this.reset();return this},B.setFOV=function(V){return this._fov=V,this._fovCache={},this},B.setLight=function(V,w,Q){var J=V+","+w;if(Q)this._lights[J]=typeof Q=="string"?l(Q):Q;else delete this._lights[J];return this},B.clearLights=function(){this._lights={}},B.reset=function(){return this._reflectivityCache={},this._fovCache={},this},B.compute=function(V){var w={},Q={},J={};for(var q in this._lights){var $=this._lights[q];Q[q]=[0,0,0],c(Q[q],$)}for(var Y=0;Y<this._options.passes;Y++){if(this._emitLight(Q,J,w),Y+1==this._options.passes)continue;Q=this._computeEmitters(J,w)}for(var X in J){var L=X.split(","),H=parseInt(L[0]),F=parseInt(L[1]);V(H,F,J[X])}return this},B._emitLight=function(V,w,Q){for(var J in V){var q=J.split(","),$=parseInt(q[0]),Y=parseInt(q[1]);this._emitLightFromCell($,Y,V[J],w),Q[J]=1}return this},B._computeEmitters=function(V,w){var Q={};for(var J in V){if(J in w)continue;var q=V[J],$=void 0;if(J in this._reflectivityCache)$=this._reflectivityCache[J];else{var Y=J.split(","),X=parseInt(Y[0]),L=parseInt(Y[1]);$=this._reflectivityCallback(X,L),this._reflectivityCache[J]=$}if($==0)continue;var H=[0,0,0],F=0;for(var j=0;j<3;j++){var M=Math.round(q[j]*$);H[j]=M,F+=M}if(F>this._options.emissionThreshold)Q[J]=H}return Q},B._emitLightFromCell=function(V,w,Q,J){var q=V+","+w,$;if(q in this._fovCache)$=this._fovCache[q];else $=this._updateFOV(V,w);for(var Y in $){var X=$[Y],L=void 0;if(Y in J)L=J[Y];else L=[0,0,0],J[Y]=L;for(var H=0;H<3;H++)L[H]+=Math.round(Q[H]*X)}return this},B._updateFOV=function(V,w){var Q=V+","+w,J={};this._fovCache[Q]=J;var q=this._options.range;function $(Y,X,L,H){var F=Y+","+X,j=H*(1-L/q);if(j==0)return;J[F]=j}return this._fov.compute(V,w,q,$.bind(this)),J},G}(),G6=g,X6=o,Y6=f0;_.Color=X6,_.DEFAULT_HEIGHT=d1,_.DEFAULT_WIDTH=p1,_.DIRS=B_,_.Display=s_,_.Engine=$6,_.EventQueue=Bw,_.FOV=r0,_.KEYS=I0,_.Lighting=B6,_.Map=Q6,_.Noise=K6,_.Path=z6,_.RNG=U,_.Scheduler=c0,_.StringGenerator=h0,_.Text=Y6,_.Util=G6,Object.defineProperty(_,"__esModule",{value:!0})})});var F6=typeof window<"u"?window.innerWidth:0,R6=typeof window<"u"?window.innerHeight:0;var n={cameraWidth:Math.floor(F6/16),cameraHeight:Math.floor(R6/16),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:16,highlightFriendEnemy:!0,showUI:!0,showTooltip:!0,showEnergy:1,uiEffectsMaxDisplaySize:8,zoom:1},e1={WIDTH:1024,HEIGHT:1024},G_={width:Math.floor(n.cameraWidth*(1/n.zoom)),height:Math.floor(n.cameraHeight*(1/n.zoom)),bg:"transparent",fontSize:Math.floor(n.fontSize*n.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function Rw(_,Z){let K=_.entities[Z];return`DEBUG: ${Z} at ${K.mapId},${K.x},${K.y}`}class P1{name;description;energyDelta;constructor(_,Z,K=0){this.name=_,this.description=Z,this.energyDelta=K}}class $1{name;description;constructor(_,Z){this.name=_,this.description=Z}}class M_{key;description;constructor(_,Z){this.key=_,this.description=Z}}class A_{name;description;tooltip;icon;constructor(_,Z,K="",U){this.name=_,this.description=Z,this.tooltip=K,this.icon=U}}class W_{name;description;icon;color;energyMax;unlockCondition;constructor(_,Z,K,U=100){this.name=_,this.description=Z,this.icon=K,this.energyMax=U,this.color="white",this.unlockCondition=null}}class h_{name;description;color;friendly;hostile;constructor(_,Z,K,U,W){this.name=_,this.description=Z,this.color=K,this.friendly=U,this.hostile=W}}class $_{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(_,Z,K,U="cyberyellow",W=0,P=0,R=0,O=0,b=0,N=[]){this.name=_,this.description=Z,this.icon=K,this.color=U,this.energyDelta=W,this.matter=P,this.gold=R,this.damage=O,this.energyCost=b,this.effects=N}}class s{name;description;tooltip;icon;isBlocking;isSpace;isWater;energyDelta;constructor(_,Z,K="",U=null,W={}){this.name=_,this.description=Z,this.tooltip=K,this.icon=U,this.isBlocking=W.isBlocking||!1,this.isSpace=W.isSpace||!1,this.isWater=W.isWater||!1,this.energyDelta=W.energyDelta||0}}var D={actions:{Enter:new P1("Enter","Enter a portal or plant atmosphere"),Launch:new P1("Launch","Launch into space",-10),Wait:new P1("Wait","Wait one turn in place")},ais:{aggrorange:new $1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new $1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new $1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new $1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",red:"#f00",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M_("N","Move/interact/combat north"),E:new M_("E","Move/interact/combat east"),S:new M_("S","Move/interact/combat south"),W:new M_("W","Move/interact/combat west"),A:new M_("A","Primary action, confirm"),B:new M_("B","Take a break, cancel"),"1":new M_("1","Secondary action, first quick slot"),"2":new M_("2","Tertiary action, second quick slot"),M:new M_("M","Menu"),"#":new M_("#","Open prompt")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{BioAbsorber:new A_("BioAbsorber","Gain energy while on trees","[Bio Absorber]: Regenerates energy on trees","fx_ba"),Recharger:new A_("Recharger","Doubles energy gained from chargepads","[Recharger]: Doubles energy gained from chargepads","fx_re"),Recuperation:new A_("Recuperation","Reduces tool energy cost","[Recuperation]: Reduces tool energy cost (max. -1)","fx_cu"),RockCrusher:new A_("RockCrusher","Mines rock","[Rock Crusher]: Enables rock mining","fx_rc"),Screwing:new A_("Screwing","Unscrews the sewer portal covers","[Screwing]: Opens sewer gates","fx_sc"),WallCrusher:new A_("WallCrusher","Tears down weak walls","[Wall Crusher]: Enables weak wall destruction","fx_wc"),WaterImmunity:new A_("WaterImmunity","No damage taken from water","[Water Immunity]: Prevents water damage","fx_wi"),WaterShield:new A_("WaterShield","Reduces damage taken from water","[Water Shield]: Reduces water damage","fx_ws")},entities:{movableboulder:new W_("Boulder","A movable rock","o",2),movablebox:new W_("Box","A movable box","x",2),Spirit:new W_("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new W_("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new W_("WorkBot","Basic factory worker","B"),Cleaner:new W_("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new W_("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new W_("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new W_("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new W_("Graffiti","Writing on the wall","zy",2),Valkyrie:new W_("Valkyrie","Airbourne war logistics","V",160),Pioneer:new W_("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new W_("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new h_("Critters","Small pests","cyberyellow",new Set,new Set(["*"])),Drifters:new h_("Drifters","Bots disconnected from a mothership/overmind","cybergreen",new Set,new Set(["Guardians","Workers"])),Enraged:new h_("Enraged","Always hostile faction","cybermagenta",new Set,new Set(["*"])),Spirits:new h_("Spirits","Default player faction","white",new Set,new Set),Pyrates:new h_("Pyrates","Default enemy faction","cybermagenta",new Set,new Set(["*"])),Guardians:new h_("Guardians","Bot station guardians","cybercyan",new Set,new Set(["Workers"])),Workers:new h_("Workers","Bot station workers","white",new Set,new Set(["Guardians"]))},items:{battery:new $_("Battery","Increases maximum energy","b","cyberyellow",10),chest:new $_("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new $_("Energy","Energy pack","e","cyberyellow",10),gold:new $_("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new $_("Goo","A minor matter source","goo","gray",0,1),junk:new $_("Junk","Broken bot","%","gray",0,1),matter:new $_("Matter","A pile of stuff","m","gray",0,100),broom:new $_("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),cheat:new $_("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","RockCrusher","Screwing","WallCrusher","WaterShield"]),hammer:new $_("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["WallCrusher"]),pickaxe:new $_("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["RockCrusher"]),ratbite:new $_("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["WaterImmunity"]),shocker:new $_("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new $_("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["WaterShield"]),upgradeBioAbsorber:new $_("Bio Absorber Upgrade","Grants [BioAbsorber] effect","iu_ba","cyberyellow",0,0,0,0,0,["BioAbsorber"]),upgradeRecuperation:new $_("Recuperation Upgrade","Grants [Recuperation] effect","iu_cu","cyberyellow",0,0,0,0,0,["Recuperation"]),wrench:new $_("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:new s("void","Just nothing here","","."),voidtrue:new s("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new s("voidhidden","Looks like a wall, but isn't!","",".#"),water:new s("water","Rust and other dangers await","Water","~",{isWater:!0,energyDelta:-2}),watersewage:new s("watersewage","Rust, goo and other dangers await","Sewage Water","~~",{isWater:!0,energyDelta:-4}),drain:new s("drain","Drains gold, matter and some of your energy","Drain","*",{energyDelta:-5}),rock:new s("rock","Hidden treasures may await","Rock","'",{isBlocking:!0}),tree:new s("tree","Lots of trees make a forest","Tree","t"),wall:new s("wall","A strong wall","","#",{isBlocking:!0}),wallstatueaerobot:new s("wallstatueaerobot","A small statue looking like an AeroBot","","sa",{isBlocking:!0}),wallstatuecleaner:new s("wallstatuecleaner","A small statue looking like a Cleaner","","sc",{isBlocking:!0}),wallstatuepioneer:new s("wallstatuepioneer","A small statue looking like a Pioneer","","sp",{isBlocking:!0}),wallstatueworkbot:new s("wallstatueworkbot","A small statue looking like a WorkBot","","sb",{isBlocking:!0}),wallweak:new s("wallweak","A weakened wall","Weak Wall","+",{isBlocking:!0}),chargepad:new s("chargepad","Recharges energy and health","Chargepad","=",{energyDelta:2}),movenorth:new s("movenorth","Moves you north","","^^"),moveeast:new s("moveeast","Moves you east","",">>"),movesouth:new s("movesouth","Moves you south","","vv"),movewest:new s("movewest","Moves you west","","<<"),portal:new s("portal","Gateway to another map","Portal","O"),portalclosed:new s("portalclosed","Closed gateway to another map","Closed Portal","Oc",{isBlocking:!0}),portalhidden:new s("portalhidden","Hidden gateway to another map","","Oh"),portallauncher:new s("portallauncher","Launches into space","Launch to Space","Ol"),portalsewers:new s("portalsewers","Needs some tool to open","Sewer Gate","#~",{isBlocking:!0}),portalstartworkbot:new s("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB"),portalstartaerobot:new s("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA"),"_portalstart?":new s("_portalstart?","Not unlocked, yet!","?","O?"),spacerock:new s("spacerock","Mountains as seen from space, non-blocking!","","'s",{isSpace:!0}),spacetree:new s("spacetree","Forest as seen from space","","ts",{isSpace:!0}),spacewater:new s("spacewater","Water as seen from space, not dangerous!","","~s",{isSpace:!0}),spacevoid:new s("spacevoid","Void/ground as seen from space","",".s",{isSpace:!0}),spacevoidstarwhite:new s("spacevoidstarwhite","Space with a white background star","",".f"),spacevoidstaryellow:new s("spacevoidstaryellow","Space with a yellow background star","",".y"),star:new s("star","It's hot, really hot!","Star","§",{energyDelta:-100}),terminal:new s("terminal","A computer terminal","Terminal","$")},uitexts:{}};function jw(_,Z){return Object.values(_.effects[Z])}function O_(_,Z,K){return!!_.effects[Z]&&Object.hasOwn(_.effects[Z],K.name)}function Mw(_){return _}function Ow(_,Z){if(Z.oldEquippedItem){let K=Z.oldEquippedItem.type;for(let U of K.effects){let W=D.effects[U];if(!!_.effects[Z.entityId][W.name]&&_.effects[Z.entityId][W.name].source===K)delete _.effects[Z.entityId][W.name]}}if(Z.newEquippedItem){let K=Z.newEquippedItem.type;for(let U of K.effects){let W=D.effects[U];_.effects[Z.entityId][W.name]={type:W,source:K}}}return _}function Cw(_,Z){let K=Z.type;for(let U of K.effects)_.effects[Z.entityId][U]={type:D.effects[U]};return _}function a_(_,Z){let K=o_(_),U=o_(Z);if(K===void 0||U===void 0)return 0;if(K===U)return 1;else if(K.friendly.has(U.name)||U.friendly.has(K.name))return 1;else if(K.hostile.has(U.name)||U.hostile.has(K.name))return 2;else if(K.friendly.has("*")||U.friendly.has("*"))return 1;else if(K.hostile.has("*")||U.hostile.has("*"))return 2;return 0}function o_(_){return((_||{}).options||{}).faction||void 0}function B1(_,Z){return _.options.faction=Z,_}function bw(_){if(Object.hasOwn(D.dialogs,_))return D.dialogs[_];return`FIXME: ${_} needs localization!`}function X_(_,Z){return _.chatLog.push(Z),_.chatLog=_.chatLog.slice(-n.chatLogMaxSize),_}function N_(_,Z,K,U,W=0,P=0,R={}){let O={id:Z,type:K,mapId:U,x:W,y:P,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:R};if(_=R1(_,O,K),_.entities[O.id]=O,!_.entitiesByMapId[U])_.entitiesByMapId[U]={};if(_.entitiesByMapId[U][O.id]=O,!_.entitiesByMapPosition[U])_.entitiesByMapPosition[U]={};return _.entitiesByMapPosition[U][`${W},${P}`]=O,_}function D1(_,Z){_.entities[Z]=void 0,delete _.entities[Z];for(let K in _.entitiesByMapId)if(_.entitiesByMapId[K][Z]){let U=_.entitiesByMapId[K][Z];delete _.entitiesByMapId[K][Z],delete _.entitiesByMapPosition[K][`${U.x},${U.y}`];break}return _.tools[Z]=void 0,delete _.tools[Z],_.effects[Z]=void 0,delete _.effects[Z],_}function i_(_,Z){if(!_.entitiesByMapId[Z])return[];return Object.values(_.entitiesByMapId[Z])}function F1(_,Z,K,U){if(!_.entitiesByMapPosition[Z])return null;return _.entitiesByMapPosition[Z][`${K},${U}`]||null}function R1(_,Z,K){if(Z.type=K,Z.energy=K.energyMax,Z.energyMax=K.energyMax,Z.gold=0,Z.matter=0,!C_(Z))_.tools[Z.id]=void 0;return _.effects[Z.id]={},_}function Ew(_,Z,K){if(Z===K)return _;let U=a_(Z,K);if(U===1||t1(K)){if(K.options.dialog){let W=K?.options?.name?K.options.name:K.type.name;_=X_(_,W+": "+bw(K.options.dialog)),K.interactions++}}else if(U===2){let W=Z.id,P=K.id;_._combatQueue.push({entityId:W,otherEntityId:P})}if(K.interactions>=3&&K.options?.ai===D.ais.interactenrage)B1(K,D.factions.Enraged);return _}function C_(_){return _.type===D.entities.movableboulder||_.type===D.entities.movablebox}function t1(_){return _.type===D.entities.Graffiticyan||_.type===D.entities.Graffitimagenta||_.type===D.entities.Graffitiyellow}function j1(_,Z){let K={A:D.actions.Wait,B:D.actions.Wait};if(!!_.lastSpacePositionByEntity[Z.id]&&Z.energy>Math.abs(D.actions.Launch.energyDelta))K.A=D.actions.Launch;let W=_.maps[Z.mapId].getTile(Z.x,Z.y);if(!!W.options.mapId&&"x"in W.options&&"y"in W.options)K.A=D.actions.Enter;return K}function e_(_,Z,K){let U=_._eventSubscribers[Z];if(U)for(let W=0;W<U.length;W++){let P=U[W];_=P(_,K)}return _}function t_(_,Z,K){if(Z in _._eventSubscribers);else _._eventSubscribers[Z]=[];return _._eventSubscribers[Z].push(K),_}function G1(_,Z,K,U=0,W=0){let R={id:_w(K,U,W),type:Z,mapId:K,x:U,y:W,energy:Z.energyDelta,gold:Z.gold,matter:Z.matter};if(_.items[R.id]=R,!_.itemsByMapId[K])_.itemsByMapId[K]={};if(_.itemsByMapId[K][R.id]=R,!_.itemsByMapPosition[K])_.itemsByMapPosition[K]={};return _.itemsByMapPosition[K][`${U},${W}`]=R,_}function Nw(_,Z,K,U=0,W=0){let P=D.items.junk,O={id:_w(K,U,W),type:P,mapId:K,x:U,y:W,energy:P.energyDelta,gold:P.gold,matter:Z};if(_.items[O.id]=O,!_.itemsByMapId[K])_.itemsByMapId[K]={};if(_.itemsByMapId[K][O.id]=O,!_.itemsByMapPosition[K])_.itemsByMapPosition[K]={};return _.itemsByMapPosition[K][`${U},${W}`]=O,_}function X1(_,Z,K,U=0,W=0,P,R){let b={id:_w(K,U,W),type:Z,mapId:K,x:U,y:W,energy:Z.energyDelta,gold:P,matter:R};if(_.items[b.id]=b,!_.itemsByMapId[K])_.itemsByMapId[K]={};if(_.itemsByMapId[K][b.id]=b,!_.itemsByMapPosition[K])_.itemsByMapPosition[K]={};return _.itemsByMapPosition[K][`${U},${W}`]=b,_}function _w(_,Z,K){return"item,"+_+","+Z+","+K}function ww(_,Z){_.items[Z]=void 0,delete _.items[Z];for(let K in _.itemsByMapId)if(_.itemsByMapId[K][Z]){let U=_.itemsByMapId[K][Z];delete _.itemsByMapId[K][Z],delete _.itemsByMapPosition[K][`${U.x},${U.y}`];break}return _}function M1(_,Z){if(!_.itemsByMapId[Z])return[];return Object.values(_.itemsByMapId[Z])}function O1(_,Z,K,U){if(!_.itemsByMapPosition[Z])return null;return _.itemsByMapPosition[Z][`${K},${U}`]||null}function C1(_,Z){return _.tools[Z]}function kw(_,Z,K){if(C_(Z))return _;if(!M6(Z,K))return _;if(j6(K))_=Qw(_,Z.id,K.type);else{if(K.type===D.items.battery)Z.energyMax+=K.energy;if(_._energyQueue.push({entityId:Z.id,energyDelta:K.energy}),Z.id.startsWith("player"))_=X_(_,`Picked up ${K.type.name}.`);let U={entityId:Z.id,type:K.type};_=e_(_,2,U)}return Z.gold+=K.gold,Z.matter+=K.matter,ww(_,K.id),_}function Qw(_,Z,K){let U=_.tools[Z],W=void 0;if(K){if(W={type:K},_.tools[Z]=W,Z.startsWith("player"))_=X_(_,`Equipped ${K.name}.`)}else if(U){let R=U.type;if(_.tools[Z]=W,Z.startsWith("player"))_=X_(_,`Unequipped ${R}.`)}let P={entityId:Z,oldEquippedItem:U,newEquippedItem:W};return _=e_(_,1,P),_}function j6(_){return _.type.energyCost<0}function M6(_,Z){return _.gold+Z.gold>=0&&_.matter+Z.matter>=0}function Iw(_,Z,K){switch(K){case D.commands.N:_=D_(_,Z,0,-1);break;case D.commands.W:_=D_(_,Z,-1,0);break;case D.commands.S:_=D_(_,Z,0,1);break;case D.commands.E:_=D_(_,Z,1,0);break;case D.commands.A:_=Sw(_,Z,D.commands.A);break;case D.commands.B:_=Sw(_,Z,D.commands.B);break;default:}return _}function D_(_,Z,K,U,W=0){let P=_.maps[Z.mapId],R=F1(_,P.id,Z.x+K,Z.y+U),O=_.tools[Z.id];if(R)if(C_(R)){if(!C_(Z)&&W<1)_=D_(_,R,K,U,W++),_=D_(_,Z,K,U,W++)}else _=Ew(_,Z,R);else if(C6(P,Z,K,U))_=fw(_,P,Z,K,U),_._energyQueue.push({entityId:Z.id,energyDelta:-1*W});else if(b6(_,P,Z,K,U)){if(P.setTile(Z.x+K,Z.y+U,D.tiles.void).type===D.tiles.rock){let N=_.rng.getPercentage();if(N<=1)_=G1(_,D.items.matter,P.id,Z.x+K,Z.y+U);else if(N<=34)_=G1(_,D.items.junk,P.id,Z.x+K,Z.y+U)}_._energyQueue.push({entityId:Z.id,energyDelta:uw(_,Z,O)})}else if(v6(_,P,Z,K,U))_=fw(_,P,Z,K,U),_._energyQueue.push({entityId:Z.id,energyDelta:uw(_,Z,O)});return _}function uw(_,Z,K){let U=K.type.energyCost;if(O_(_,Z.id,D.effects.Recuperation))U=Math.min(-1,U+1);return U}function Sw(_,Z,K){let W=j1(_,Z)[K.key],R=_.maps[Z.mapId].getTile(Z.x,Z.y);switch(W){case D.actions.Enter:_=gw(_,Z,R);break;case D.actions.Launch:_=O6(_,Z,R);case D.actions.Wait:break;default:}return _}function fw(_,Z,K,U,W){delete _.entitiesByMapPosition[K.mapId][`${K.x},${K.y}`],K.x+=U,K.y+=W,_.entitiesByMapPosition[K.mapId][`${K.x},${K.y}`]=K;let P=O1(_,K.mapId,K.x,K.y);if(P)_=kw(_,K,P);let R=Z.getTile(K.x,K.y);if(R.type.name.startsWith("portal"))_=gw(_,K,R);if(R.type.name.startsWith("move"))switch(R.type.name){case"movenorth":_=D_(_,K,0,-1);break;case"moveeast":_=D_(_,K,1,0);break;case"movesouth":_=D_(_,K,0,1);break;case"movewest":_=D_(_,K,-1,0);break;default:}return _}function gw(_,Z,K){if(Z.id.startsWith("player"))_.currentMapId=K.options.mapId;if(K.type.isSpace)_.lastSpacePositionByEntity[Z.id]={mapId:Z.mapId,x:Z.x,y:Z.y};else _.lastSpacePositionByEntity[Z.id]=void 0,delete _.lastSpacePositionByEntity[Z.id];let U={entityId:Z.id,oldMapId:Z.mapId,oldX:Z.x,oldY:Z.y,oldTileType:K.type,newMapId:K.options.mapId,newX:K.options.x,newY:K.options.y};if(delete _.entitiesByMapId[Z.mapId][Z.id],delete _.entitiesByMapPosition[Z.mapId][`${Z.x},${Z.y}`],Z.mapId=K.options.mapId,Z.x=K.options.x,Z.y=K.options.y,!_.entitiesByMapId[Z.mapId])_.entitiesByMapId[Z.mapId]={};if(_.entitiesByMapId[Z.mapId][Z.id]=Z,!_.entitiesByMapPosition[Z.mapId])_.entitiesByMapPosition[Z.mapId]={};return _.entitiesByMapPosition[Z.mapId][`${Z.x},${Z.y}`]=Z,_=e_(_,0,U),_}function O6(_,Z,K){if(_.lastSpacePositionByEntity[Z.id]){if(Z.id.startsWith("player"))_.currentMapId=_.lastSpacePositionByEntity[Z.id].mapId;let U={entityId:Z.id,oldMapId:Z.mapId,oldX:Z.x,oldY:Z.y,oldTileType:K.type,newMapId:_.lastSpacePositionByEntity[Z.id].mapId,newX:_.lastSpacePositionByEntity[Z.id].x,newY:_.lastSpacePositionByEntity[Z.id].y};if(delete _.entitiesByMapId[Z.mapId][Z.id],delete _.entitiesByMapPosition[Z.mapId][`${Z.x},${Z.y}`],Z.mapId=U.newMapId,Z.x=U.newX,Z.y=U.newY,_._energyQueue.push({entityId:Z.id,energyDelta:D.actions.Launch.energyDelta}),!_.entitiesByMapId[Z.mapId])_.entitiesByMapId[Z.mapId]={};if(_.entitiesByMapId[Z.mapId][Z.id]=Z,!_.entitiesByMapPosition[Z.mapId])_.entitiesByMapPosition[Z.mapId]={};_.entitiesByMapPosition[Z.mapId][`${Z.x},${Z.y}`]=Z,_.lastSpacePositionByEntity[Z.id]=void 0,delete _.lastSpacePositionByEntity[Z.id],_=e_(_,0,U)}return _}function Tw(_){for(let Z in _.entities){let K=_.entities[Z],W=_.maps[K.mapId].getTile(K.x,K.y),P=W.type.energyDelta;if(W.type===D.tiles.chargepad&&O_(_,Z,D.effects.Recharger))P*=2;else if(W.type===D.tiles.tree&&O_(_,Z,D.effects.BioAbsorber))P=1;else if(W.type.isWater&&O_(_,Z,D.effects.WaterImmunity))P=0;else if(W.type.isWater&&O_(_,Z,D.effects.WaterShield))P/=2;else if(W.type===D.tiles.drain){let R=Math.min(K.gold,D.constants.DRAIN_GOLD_COST),O=Math.min(K.matter,D.constants.DRAIN_MATTER_COST);K.gold-=R,K.matter-=O}if(P!==0)_._energyQueue.push({entityId:Z,energyDelta:P})}return _}function hw(_,Z){let K=_.entities[Z.entityId];switch(Z.oldTileType){case D.tiles.portalstartaerobot:_=R1(_,K,D.entities.AeroBot),B1(K,D.factions.Workers),_=X_(_,`Booting up as an ${D.entities.AeroBot.name}...`);break;case D.tiles.portalstartworkbot:_=R1(_,K,D.entities.WorkBot),B1(K,D.factions.Workers),_=X_(_,`Booting up as a ${D.entities.WorkBot.name}...`);break;default:}return _}function C6(_,Z,K,U){let W=Z.x+K,P=Z.y+U,R=_.getTile(W,P).type;return W>=0&&W<_.widthTiles&&P>=0&&P<_.heightTiles&&!R.isBlocking}function b6(_,Z,K,U,W){let P=K.x+U,R=K.y+W,O=Z.getTile(P,R).type;return O_(_,K.id,D.effects.WallCrusher)&&O===D.tiles.wallweak||O_(_,K.id,D.effects.RockCrusher)&&O===D.tiles.rock}function v6(_,Z,K,U,W){let P=K.x+U,R=K.y+W,O=Z.getTile(P,R).type;return O_(_,K.id,D.effects.Screwing)&&O===D.tiles.portalsewers}var k_={bot_bar:`!
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
 */var E6=function(_){var Z={};function K(U){if(Z[U])return Z[U].exports;var W=Z[U]={i:U,l:!1,exports:{}};return _[U].call(W.exports,W,W.exports,K),W.l=!0,W.exports}return K.m=_,K.c=Z,K.d=function(U,W,P){K.o(U,W)||Object.defineProperty(U,W,{enumerable:!0,get:P})},K.r=function(U){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(U,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(U,"__esModule",{value:!0})},K.t=function(U,W){if(1&W&&(U=K(U)),8&W)return U;if(4&W&&typeof U=="object"&&U&&U.__esModule)return U;var P=Object.create(null);if(K.r(P),Object.defineProperty(P,"default",{enumerable:!0,value:U}),2&W&&typeof U!="string")for(var R in U)K.d(P,R,function(O){return U[O]}.bind(null,R));return P},K.n=function(U){var W=U&&U.__esModule?function(){return U.default}:function(){return U};return K.d(W,"a",W),W},K.o=function(U,W){return Object.prototype.hasOwnProperty.call(U,W)},K.p="/bin/",K(K.s=0)}([function(_,Z,K){var U={},W=K(1),P=K(2),R=K(3);_.exports=U;var O=1;U.js=function(){var b,N,g,h=!1,m={},y={},l={},p={},c=!0,J_={},Q_=[],__=Number.MAX_VALUE,Z_=!1;this.setAcceptableTiles=function(u){u instanceof Array?g=u:!isNaN(parseFloat(u))&&isFinite(u)&&(g=[u])},this.enableSync=function(){h=!0},this.disableSync=function(){h=!1},this.enableDiagonals=function(){Z_=!0},this.disableDiagonals=function(){Z_=!1},this.setGrid=function(u){b=u;for(var A=0;A<b.length;A++)for(var v=0;v<b[0].length;v++)y[b[A][v]]||(y[b[A][v]]=1)},this.setTileCost=function(u,A){y[u]=A},this.setAdditionalPointCost=function(u,A,v){l[A]===void 0&&(l[A]={}),l[A][u]=v},this.removeAdditionalPointCost=function(u,A){l[A]!==void 0&&delete l[A][u]},this.removeAllAdditionalPointCosts=function(){l={}},this.setDirectionalCondition=function(u,A,v){p[A]===void 0&&(p[A]={}),p[A][u]=v},this.removeAllDirectionalConditions=function(){p={}},this.setIterationsPerCalculation=function(u){__=u},this.avoidAdditionalPoint=function(u,A){m[A]===void 0&&(m[A]={}),m[A][u]=1},this.stopAvoidingAdditionalPoint=function(u,A){m[A]!==void 0&&delete m[A][u]},this.enableCornerCutting=function(){c=!0},this.disableCornerCutting=function(){c=!1},this.stopAvoidingAllAdditionalPoints=function(){m={}},this.findPath=function(u,A,v,o,t){var V_=function(I_){h?t(I_):setTimeout(function(){t(I_)})};if(g===void 0)throw Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(b===void 0)throw Error("You can't set a path without first calling setGrid() on EasyStar.");if(u<0||A<0||v<0||o<0||u>b[0].length-1||A>b.length-1||v>b[0].length-1||o>b.length-1)throw Error("Your start or end point is outside the scope of your grid.");if(u!==v||A!==o){for(var H_=b[o][v],z_=!1,v_=0;v_<g.length;v_++)if(H_===g[v_]){z_=!0;break}if(z_!==!1){var Y_=new W;Y_.openList=new R(function(I_,n_){return I_.bestGuessDistance()-n_.bestGuessDistance()}),Y_.isDoneCalculating=!1,Y_.nodeHash={},Y_.startX=u,Y_.startY=A,Y_.endX=v,Y_.endY=o,Y_.callback=V_,Y_.openList.push(e(Y_,Y_.startX,Y_.startY,null,1));var V1=O++;return J_[V1]=Y_,Q_.push(V1),V1}V_(null)}else V_([])},this.cancelPath=function(u){return u in J_&&(delete J_[u],!0)},this.calculate=function(){if(Q_.length!==0&&b!==void 0&&g!==void 0)for(N=0;N<__;N++){if(Q_.length===0)return;h&&(N=0);var u=Q_[0],A=J_[u];if(A!==void 0)if(A.openList.size()!==0){var v=A.openList.pop();if(A.endX!==v.x||A.endY!==v.y)v.list=0,v.y>0&&E(A,v,0,-1,1*x(v.x,v.y-1)),v.x<b[0].length-1&&E(A,v,1,0,1*x(v.x+1,v.y)),v.y<b.length-1&&E(A,v,0,1,1*x(v.x,v.y+1)),v.x>0&&E(A,v,-1,0,1*x(v.x-1,v.y)),Z_&&(v.x>0&&v.y>0&&(c||S(b,g,v.x,v.y-1,v)&&S(b,g,v.x-1,v.y,v))&&E(A,v,-1,-1,1.4*x(v.x-1,v.y-1)),v.x<b[0].length-1&&v.y<b.length-1&&(c||S(b,g,v.x,v.y+1,v)&&S(b,g,v.x+1,v.y,v))&&E(A,v,1,1,1.4*x(v.x+1,v.y+1)),v.x<b[0].length-1&&v.y>0&&(c||S(b,g,v.x,v.y-1,v)&&S(b,g,v.x+1,v.y,v))&&E(A,v,1,-1,1.4*x(v.x+1,v.y-1)),v.x>0&&v.y<b.length-1&&(c||S(b,g,v.x,v.y+1,v)&&S(b,g,v.x-1,v.y,v))&&E(A,v,-1,1,1.4*x(v.x-1,v.y+1)));else{var o=[];o.push({x:v.x,y:v.y});for(var t=v.parent;t!=null;)o.push({x:t.x,y:t.y}),t=t.parent;o.reverse();var V_=o;A.callback(V_),delete J_[u],Q_.shift()}}else A.callback(null),delete J_[u],Q_.shift();else Q_.shift()}};var E=function(u,A,v,o,t){var V_=A.x+v,H_=A.y+o;if((m[H_]===void 0||m[H_][V_]===void 0)&&S(b,g,V_,H_,A)){var z_=e(u,V_,H_,A,t);z_.list===void 0?(z_.list=1,u.openList.push(z_)):A.costSoFar+t<z_.costSoFar&&(z_.costSoFar=A.costSoFar+t,z_.parent=A,u.openList.updateItem(z_))}},S=function(u,A,v,o,t){var V_=p[o]&&p[o][v];if(V_){var H_=f(t.x-v,t.y-o);if(!function(){for(var v_=0;v_<V_.length;v_++)if(V_[v_]===H_)return!0;return!1}())return!1}for(var z_=0;z_<A.length;z_++)if(u[o][v]===A[z_])return!0;return!1},f=function(u,A){if(u===0&&A===-1)return U.TOP;if(u===1&&A===-1)return U.TOP_RIGHT;if(u===1&&A===0)return U.RIGHT;if(u===1&&A===1)return U.BOTTOM_RIGHT;if(u===0&&A===1)return U.BOTTOM;if(u===-1&&A===1)return U.BOTTOM_LEFT;if(u===-1&&A===0)return U.LEFT;if(u===-1&&A===-1)return U.TOP_LEFT;throw Error("These differences are not valid: "+u+", "+A)},x=function(u,A){return l[A]&&l[A][u]||y[b[A][u]]},e=function(u,A,v,o,t){if(u.nodeHash[v]!==void 0){if(u.nodeHash[v][A]!==void 0)return u.nodeHash[v][A]}else u.nodeHash[v]={};var V_=a(A,v,u.endX,u.endY);if(o!==null)var H_=o.costSoFar+t;else H_=0;var z_=new P(o,A,v,H_,V_);return u.nodeHash[v][A]=z_,z_},a=function(u,A,v,o){var t,V_;return Z_?(t=Math.abs(u-v))<(V_=Math.abs(A-o))?1.4*t+V_:1.4*V_+t:(t=Math.abs(u-v))+(V_=Math.abs(A-o))}},U.TOP="TOP",U.TOP_RIGHT="TOP_RIGHT",U.RIGHT="RIGHT",U.BOTTOM_RIGHT="BOTTOM_RIGHT",U.BOTTOM="BOTTOM",U.BOTTOM_LEFT="BOTTOM_LEFT",U.LEFT="LEFT",U.TOP_LEFT="TOP_LEFT"},function(_,Z){_.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(_,Z){_.exports=function(K,U,W,P,R){this.parent=K,this.x=U,this.y=W,this.costSoFar=P,this.simpleDistanceToTarget=R,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(_,Z,K){_.exports=K(4)},function(_,Z,K){var U,W,P;(function(){var R,O,b,N,g,h,m,y,l,p,c,J_,Q_,__,Z_;b=Math.floor,p=Math.min,O=function(E,S){return E<S?-1:E>S?1:0},l=function(E,S,f,x,e){var a;if(f==null&&(f=0),e==null&&(e=O),f<0)throw Error("lo must be non-negative");for(x==null&&(x=E.length);f<x;)e(S,E[a=b((f+x)/2)])<0?x=a:f=a+1;return[].splice.apply(E,[f,f-f].concat(S)),S},h=function(E,S,f){return f==null&&(f=O),E.push(S),__(E,0,E.length-1,f)},g=function(E,S){var f,x;return S==null&&(S=O),f=E.pop(),E.length?(x=E[0],E[0]=f,Z_(E,0,S)):x=f,x},y=function(E,S,f){var x;return f==null&&(f=O),x=E[0],E[0]=S,Z_(E,0,f),x},m=function(E,S,f){var x;return f==null&&(f=O),E.length&&f(E[0],S)<0&&(S=(x=[E[0],S])[0],E[0]=x[1],Z_(E,0,f)),S},N=function(E,S){var f,x,e,a,u,A;for(S==null&&(S=O),u=[],x=0,e=(a=function(){A=[];for(var v=0,o=b(E.length/2);0<=o?v<o:v>o;0<=o?v++:v--)A.push(v);return A}.apply(this).reverse()).length;x<e;x++)f=a[x],u.push(Z_(E,f,S));return u},Q_=function(E,S,f){var x;if(f==null&&(f=O),(x=E.indexOf(S))!==-1)return __(E,0,x,f),Z_(E,x,f)},c=function(E,S,f){var x,e,a,u,A;if(f==null&&(f=O),!(e=E.slice(0,S)).length)return e;for(N(e,f),a=0,u=(A=E.slice(S)).length;a<u;a++)x=A[a],m(e,x,f);return e.sort(f).reverse()},J_=function(E,S,f){var x,e,a,u,A,v,o,t,V_;if(f==null&&(f=O),10*S<=E.length){if(!(a=E.slice(0,S).sort(f)).length)return a;for(e=a[a.length-1],u=0,v=(o=E.slice(S)).length;u<v;u++)f(x=o[u],e)<0&&(l(a,x,0,null,f),a.pop(),e=a[a.length-1]);return a}for(N(E,f),V_=[],A=0,t=p(S,E.length);0<=t?A<t:A>t;0<=t?++A:--A)V_.push(g(E,f));return V_},__=function(E,S,f,x){var e,a,u;for(x==null&&(x=O),e=E[f];f>S&&x(e,a=E[u=f-1>>1])<0;)E[f]=a,f=u;return E[f]=e},Z_=function(E,S,f){var x,e,a,u,A;for(f==null&&(f=O),e=E.length,A=S,a=E[S],x=2*S+1;x<e;)(u=x+1)<e&&!(f(E[x],E[u])<0)&&(x=u),E[S]=E[x],x=2*(S=x)+1;return E[S]=a,__(E,A,S,f)},R=function(){function E(S){this.cmp=S!=null?S:O,this.nodes=[]}return E.push=h,E.pop=g,E.replace=y,E.pushpop=m,E.heapify=N,E.updateItem=Q_,E.nlargest=c,E.nsmallest=J_,E.prototype.push=function(S){return h(this.nodes,S,this.cmp)},E.prototype.pop=function(){return g(this.nodes,this.cmp)},E.prototype.peek=function(){return this.nodes[0]},E.prototype.contains=function(S){return this.nodes.indexOf(S)!==-1},E.prototype.replace=function(S){return y(this.nodes,S,this.cmp)},E.prototype.pushpop=function(S){return m(this.nodes,S,this.cmp)},E.prototype.heapify=function(){return N(this.nodes,this.cmp)},E.prototype.updateItem=function(S){return Q_(this.nodes,S,this.cmp)},E.prototype.clear=function(){return this.nodes=[]},E.prototype.empty=function(){return this.nodes.length===0},E.prototype.size=function(){return this.nodes.length},E.prototype.clone=function(){var S;return(S=new E).nodes=this.nodes.slice(0),S},E.prototype.toArray=function(){return this.nodes.slice(0)},E.prototype.insert=E.prototype.push,E.prototype.top=E.prototype.peek,E.prototype.front=E.prototype.peek,E.prototype.has=E.prototype.contains,E.prototype.copy=E.prototype.clone,E}(),W=[],(P=typeof(U=function(){return R})=="function"?U.apply(Z,W):U)===void 0||(_.exports=P)}).call(this)}]);function xw(_,Z,K,U,W){let P=new E6.js;P.setGrid(_),P.setAcceptableTiles([0]),P.enableSync();let R=null;return P.findPath(Z,K,U,W,function(O){R=O}),P.calculate(),R}function F_(){return"player"}function mw(_,Z,K,U){return Math.abs(_-K)+Math.abs(Z-U)}function _1(_){return[...Array(_).keys()]}class b1{width;height;data;constructor(_,Z,K){this.width=_;this.height=Z;this.data=Array(this.width*this.height).fill(K)}isValid(_,Z){return _>=0&&_<this.width&&Z>=0&&Z<this.height}get(_,Z){if(!this.isValid(_,Z))return null;return this.data[Z*this.width+_]}set(_,Z,K){if(!this.isValid(_,Z))return;this.data[Z*this.width+_]=K}}function lw(_){let Z=A6(_),K=_.entities[F_()];for(let U=0;U<Z.length;U++){let W=Z[U],P=_.entities[W];if(K===P)continue;let R=_._AIs[W];if(R._pathCache.playerX!==K.x||R._pathCache.playerY!==K.y||R._pathCache.entityX!==P.x||R._pathCache.entityY!==P.y)R._pathCache={};let O=mw(K.x,K.y,P.x,P.y);if(a_(K,P)===2&&O<=R.aggroRange)if(R._pathCache.path)R.path=R._pathCache.path;else{let b=_.maps[_.currentMapId].asMovementMap(),N=xw(b,P.x,P.y,K.x,K.y);if(N){if(N=N.slice(1),N.length>O)N=null}R.path=N,R._pathCache={playerX:K.x,playerY:K.y,entityX:P.x,entityY:P.y,path:N}}}for(let U=0;U<Z.length;U++){let W=Z[U],P=_.entities[W],R=_._AIs[W];if(R.path){let O=R.path[0],b=O.x-P.x,N=O.y-P.y;_=D_(_,P,b,N)}}return _}function A6(_){let Z=i_(_,_.currentMapId),K=[];for(let U=0;U<Z.length;U++){let W=Z[U];if(W.options.ai)K.push(W.id)}return K}function cw(_,Z,K){let U=_.entities[Z],W=8;switch(K){case D.ais.aggrorange:W=8;break;case D.ais.aggrorangeshort:W=2;break;case D.ais.guardian:W=1;break;case D.ais.interactenrage:W=2;break;default:}return _._AIs[Z]={entityId:Z,type:K,aggroRange:W,startMap:U.mapId,startX:U.x,startY:U.y,path:null,_pathCache:{}},_}function v1(_,Z){return _._AIs[Z]=void 0,delete _._AIs[Z],_}function dw(_){let Z=void 0;while(typeof(Z=_._despawnQueue.shift())<"u")_=D1(_,Z),_=v1(_,Z);return _}function yw(_){return _}class u_{mapId;x;y;entityOrItemName;options;constructor(_,Z,K,U,W={}){this.mapId=_,this.x=Z,this.y=K,this.entityOrItemName=U,this.options=W}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function x_(_,Z){if(N6(Z.entityOrItemName)){let K=Z.options;if(Object.hasOwn(K,"ai"))K.ai=D.ais[K.ai];if(Object.hasOwn(K,"faction"))K.faction=D.factions[K.faction];let U=Z.generateId();if(_=N_(_,U,D.entities[Z.entityOrItemName],Z.mapId,Z.x,Z.y,K),Object.hasOwn(K,"equip")&&pw(K.equip))_=Qw(_,U,D.items[K.equip]);if(Object.hasOwn(K,"ai"))_=cw(_,U,K.ai)}else if(pw(Z.entityOrItemName))_=G1(_,D.items[Z.entityOrItemName],Z.mapId,Z.x,Z.y);return _}function N6(_){return Object.hasOwn(D.entities,_)}function pw(_){return Object.hasOwn(D.items,_)}function b_(_,Z={}){return{type:_,options:Z}}function rw(_){for(let Z in k_){let K=p_(k_[Z]);if(!K.isSnippet()){_.maps[Z]=K;for(let U of K._spawnCommands)_=x_(_,U);K._spawnCommands=[]}}return _}function nw(_,Z){let K=M1(_,Z);for(let W=0;W<K.length;W++){let P=K[W];delete _.itemsByMapId[Z][P.id],_=ww(_,P.id)}let U=i_(_,Z);for(let W=0;W<U.length;W++){let P=U[W];delete _.entitiesByMapId[Z][P.id],_=D1(_,P.id),_=v1(_,P.id)}return _.maps[Z]=void 0,delete _.maps[Z],_}class P_{id;widthTiles;heightTiles;seed;_tiles;_initialTiles;entropy;_cacheMovementMap;_spawnCommands;constructor(_,Z,K,U=[]){if(this.id=_,this.widthTiles=Z,this.heightTiles=K,this.seed=null,this._tiles=new b1(Z,K,b_(D.tiles.voidtrue)),this._initialTiles=new b1(Z,K,b_(D.tiles.voidtrue)),U.length>0)for(let W=0;W<K;W++)for(let P=0;P<Z;P++){let R=U[W*Z+P];this._tiles.set(P,W,R),this._initialTiles.set(P,W,JSON.parse(JSON.stringify(R)))}this.entropy=0,this._cacheMovementMap=null,this._spawnCommands=[]}getTile(_,Z){let K=this._tiles.get(_,Z);if(K)return K;return{}}setTile(_,Z,K,U={}){this._cacheMovementMap=null;let W=this._tiles.get(_,Z);return this._tiles.set(_,Z,b_(K,U)),W}resetEntropy(){for(let _=0;_<this.heightTiles;_++)for(let Z=0;Z<this.widthTiles;Z++){let K=this._tiles.get(Z,_);if(K)this._initialTiles.set(Z,_,JSON.parse(JSON.stringify(K)))}this.entropy=0}pasteOnto(_,Z=0,K=0){for(let U=0;U<_.heightTiles;U++)for(let W=0;W<_.widthTiles;W++){let P=_.getTile(W,U);if(P.type!==D.tiles.voidtrue)this.setTile(W+Z,U+K,P.type,P.options)}return this}circular(){let _=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let Z=-_;Z<=_;Z++)for(let K=-_;K<=_;K++)if(K*K+Z*Z>=_*_)this.setTile(K+_-1,Z+_-1,D.tiles.voidtrue);return this}sample(_,Z){let K=Math.floor(this.widthTiles/_),U=Math.floor(this.heightTiles/Z),W=[];for(let P=0;P<Z;P++)for(let R=0;R<_;R++){let O={};for(let y=0;y<U;y++)for(let l=0;l<K;l++){let p=this.getTile(R*K+l,P*U+y);if(O[p.type.name])O[p.type.name]+=1;else O[p.type.name]=1}let b="",N=0;for(let[y,l]of Object.entries(O))if(l>N)b=y,N=l;let g="space"+b,h=D.tiles[g]||D.tiles.spacevoid,m={mapId:this.id,x:R*K,y:P*U};W.push(b_(h,m))}return new P_("__sampled_"+_+"_"+Z+"_"+this.id,_,Z,W)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let _=Array(this.heightTiles);for(let Z=0;Z<this.heightTiles;Z++){_[Z]=Array(this.widthTiles);for(let K=0;K<this.widthTiles;K++){let U=this._tiles.get(K,Z);if(_[Z][K]=0,U&&U.type.isBlocking)_[Z][K]=1}}return this._cacheMovementMap=_,_}isSnippet(){return this.id===void 0||this.id===null||this.id===""}static createEmptyMap(_,Z,K){let U=[];for(let P=0;P<_*Z;P++)U.push(b_(K));return new P_(null,_,Z,U)}}function p_(_){let Z=_.split(/\r?\n/),K=_[0],U="",W=0,P=0,R={},O=[],b=[];for(let g=0;g<Z.length;g++){let h=Z[g];if(h.startsWith(K)){if(h.startsWith(K+"!id"))U=h.slice(5);else if(h.startsWith(K+"!size")){let m=h.split(" ").slice(1);W=Number(m[0]),P=Number(m[1])}else if(h.startsWith(K+"!spawn")){let m=h.split(" ").slice(1),y={};if(m.length>3){let l=m.slice(3);for(let p of l){let c=p.split("=");y[c[0]]=c[1]}}O.push(new u_(U,Number(m[0]),Number(m[1]),m[2],y))}else if(h.startsWith(K+"!")){let m=h[2],y=h.slice(4);R[m]=y}}else for(let m=0;m<h.length;m++){let y=h[m],l=R[y];if(n.debug&&!l)console.log("DEBUG Broken map: "+U);let p=l.split(" "),c={};if(l.startsWith("portal ")||l.startsWith("portalhidden ")||l.startsWith("portalsewers ")||l.startsWith("portallauncher ")||l.startsWith("portalstart"))l=p[0],c.mapId=p[1],c.x=Number(p[2]),c.y=Number(p[3]);if(l.startsWith("wall ")&&p.length>=2)l="wall",c.sign=p[1];if(l.startsWith("terminal ")){if(l="terminal",p.length>=2)c.screen=p[1]}b.push(b_(D.tiles[l],c))}}let N=new P_(U,W,P,b);return N._spawnCommands=O,N}var aw=i1(A1(),1);class R_{seed;_rotRng;constructor(_=1337){this.seed=_,this._rotRng=aw.RNG.clone(),this._rotRng.setSeed(_)}getPercentage(){return this._rotRng.getPercentage()}getItem(_){return this._rotRng.getItem(_)}}function iw(_,Z=1337,K=64,U=4096){let W=P_.createEmptyMap(K,K,D.tiles.wall),P=new R_(Z),R=K/2-1,O={x:R,y:R};W.setTile(O.x,O.y,D.tiles.void);for(let b=0;b<U;b++){switch(P.getItem([0,1,2,3])){case 0:O=N1(O,0,-1,K);break;case 1:O=N1(O,1,0,K);break;case 2:O=N1(O,0,1,K);break;case 3:O=N1(O,-1,0,K);break}W.setTile(O.x,O.y,D.tiles.void)}return W.id=`gen:dungeon=${Z}`,_.maps[W.id]=W,_}function N1(_,Z,K,U){return{x:Math.max(0,Math.min(U-1,_.x+Z)),y:Math.max(0,Math.min(U-1,_.y+K))}}function ew(_,Z){if(Z?.newMapId?.startsWith("gen:dungeon")){let K=Z?.newMapId,U=Number(K?.split("=").at(-1));_=iw(_,U);let W=_.entities[Z.entityId];if(W.id.startsWith("player"))_.currentMapId=K;W.mapId=K,W.x=Z.newX,W.Y=Z.newY}return _}function tw(_,Z){if(Z.seed===1337)_=x_(_,new u_(Z.id,130,127,"Valkyrie",{faction:"Spirits"})),_=x_(_,new u_(Z.id,124,127,"Valkyrie",{faction:"Spirits"})),_=x_(_,new u_(Z.id,127,130,"trident"));else{let K=new R_(Z.seed);for(let U=0;U<Z.heightTiles;U++)for(let W=0;W<Z.widthTiles;W++){let P=Z.getTile(W,U);if(K.getPercentage()<=1&&(P.type===D.tiles.void||P.type===D.tiles.tree)){let R=K.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(R){case"Deviant":case"Pioneer":_=x_(_,new u_(Z.id,W,U,R,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":_=x_(_,new u_(Z.id,W,U,R));break}}}}return _}var k1=i1(A1(),1);var S6=1337,_0=55;function w0(_,Z=S6){k1.RNG.setSeed(Z);let K=new k1.Noise.Simplex,U=256,W=256,P=[];for(let b=0;b<W;b++)for(let N=0;N<U;N++){let g=K.get(N/_0,b/_0),h;if(g<=-0.5)h=D.tiles.water;else if(g<=0)h=D.tiles.void;else if(g<0.5)h=D.tiles.tree;else h=D.tiles.rock;P.push(b_(h))}let R="simplex="+Z,O=new P_(R,U,W,P);return O.seed=Z,_.maps[R]=O,_}var f6=1337;function Q0(_,Z=f6){let K=P_.createEmptyMap(1024,1024,D.tiles.void);K.id="solarsystem="+Z,_.maps[K.id]=K;let U=new R_(Z),W=new R_(Z),P=U.getItem([2,3,4,5,6,7,8,9,10,11,12]),R=128,O=512-R,b=Math.floor(O/P);K=I6(K,U);let N=P_.createEmptyMap(128,128,D.tiles.voidtrue);g6(N,63,63,62,D.tiles.star),T6(N,63,63,D.tiles.star),K.pasteOnto(N,448,448);for(let y=R;y<512;y+=b){let l=U.getItem([-1,1])*U.getItem(_1(y)),p=U.getItem([-1,1])*Math.floor(Math.sqrt(y*y-l*l));l+=512,p+=512;let c=U.getItem([16,24,32]),J_=Math.floor(c/2)-1;_=w0(_,Z);let Q_=_.maps["simplex="+Z],__=k_.launcher;__=__.replace("!!O portallauncher space 0 0",`!!O portallauncher ${K.id} ${l} ${p}`);let Z_=p_(__),E=W.getItem(_1(Q_.widthTiles-Z_.widthTiles)),S=W.getItem(_1(Q_.heightTiles-Z_.heightTiles));Q_.pasteOnto(Z_,E,S),_=tw(_,Q_);let f=Q_.sample(c,c).circular();K.pasteOnto(f,l-(J_+1),p-(J_+1)),Z++}let g=k_.space_bot_station;g=g.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let h=p_(g);K.pasteOnto(h,583,398);let m=p_(k_.square_falcon);return K.pasteOnto(m,590,373),_}function I6(_,Z){for(let K=0;K<_.heightTiles;K++)for(let U=0;U<_.widthTiles;U++)if(Z.getPercentage()<=1)_.setTile(U,K,Z.getItem([D.tiles.spacevoidstarwhite,D.tiles.spacevoidstaryellow]));return _}function g6(_,Z,K,U,W){let P=1-U,R=1,O=-2*U,b=0,N=U;_.setTile(Z,K+U,W),_.setTile(Z,K-U,W),_.setTile(Z+U,K,W),_.setTile(Z-U,K,W);while(b<N){if(P>=0)N-=1,O+=2,P+=O;b+=1,R+=2,P+=R,_.setTile(Z+b,K+N,W),_.setTile(Z-b,K+N,W),_.setTile(Z+b,K-N,W),_.setTile(Z-b,K-N,W),_.setTile(Z+N,K+b,W),_.setTile(Z-N,K+b,W),_.setTile(Z+N,K-b,W),_.setTile(Z-N,K-b,W)}return _}function T6(_,Z,K,U){let{widthTiles:W,heightTiles:P}=_,R=[];R.push({x:Z,y:K});let O=void 0;while(typeof(O=R.shift())<"u"){let b=O,N=O;if(O.x+1<W)N={x:O.x+1,y:O.y};while(_.getTile(b.x,b.y).type!==U){if(_.setTile(b.x,b.y,U),b.y+1<P){if(_.getTile(b.x,b.y+1).type!==U)R.push({x:b.x,y:b.y+1})}if(b.y-1>=0){if(_.getTile(b.x,b.y-1).type!==U)R.push({x:b.x,y:b.y-1})}if(b.x-1>=0)b.x-=1;else break}while(_.getTile(N.x,N.y).type!==U){if(_.setTile(N.x,N.y,U),N.y+1<P){if(_.getTile(N.x,N.y+1).type!==U)R.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(_.getTile(N.x,N.y-1).type!==U)R.push({x:N.x,y:N.y-1})}if(N.x+1<W)N.x+=1;else break}}return _}function Z0(_,Z){if(Z?.oldMapId?.startsWith("shop_instance")){_=nw(_,Z.oldMapId);let K=_.maps[Z.newMapId],U=K.getTile(Z.newX,Z.newY);K.setTile(Z.newX,Z.newY,U.type,{mapId:"shop_instance",x:Z.oldX,y:Z.oldY})}if(Z?.newMapId?.startsWith("shop_instance")){let K=p_(k_.shop_instance);K.id="shop_instance_"+Z.oldMapId+"_"+Z.entityId,K.setTile(Z.newX,Z.newY,D.tiles.portal,{mapId:Z.oldMapId,x:Z.oldX,y:Z.oldY}),_.maps[Z.oldMapId].setTile(Z.oldX,Z.oldY,Z.oldTileType,{mapId:K.id,x:Z.newX,y:Z.newY});let W=_.entities[Z.entityId];if(W.id.startsWith("player"))_.currentMapId=K.id;if(W.mapId=K.id,W.x=Z.newX,W.y=Z.newY,!_.entitiesByMapId[W.mapId])_.entitiesByMapId[W.mapId]={};if(_.entitiesByMapId[W.mapId][W.id]=W,!_.entitiesByMapPosition[W.mapId])_.entitiesByMapPosition[W.mapId]={};if(_.entitiesByMapPosition[W.mapId][`${W.x},${W.y}`]=W,delete _.entitiesByMapId.shop_instance,delete _.entitiesByMapPosition.shop_instance,delete _.maps.shop_instance,_.maps[K.id]=K,_=X1(_,D.items.hammer,K.id,4,4,0,-200),_=X1(_,D.items.pickaxe,K.id,4,6,0,-200),_=X1(_,D.items.battery,K.id,4,8,0,-200),_=X1(_,D.items.gold,K.id,4,10,1,-1e4),_=N_(_,K.id+"_shopkeeper",D.entities.AeroBot,K.id,6,2,{faction:o_(W),dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),Z?.oldMapId.startsWith("bot_stadium"))_=N_(_,K.id+"_shopper",D.entities.WorkBot,K.id,1,12,{faction:o_(W),dialog:"shop_instance_workbot_shopper"});else if(Z?.oldMapId.startsWith("bot_bar"))_=N_(_,K.id+"_shopper",D.entities.AeroBot,K.id,4,11,{faction:o_(W),dialog:"shop_instance_aerobot_shopper"})}return _}function J0(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",effects:{},entities:{},entitiesByMapId:{},entitiesByMapPosition:{},items:{},itemsByMapId:{},itemsByMapPosition:{},lastSpacePositionByEntity:{},maps:{},rng:new R_,tools:{}}}function V0(_){let Z=void 0;while(typeof(Z=_._combatQueue.shift())<"u"){let K=-1,U=-5,W=C1(_,Z.entityId);if(W){if(K=W.type.energyCost,O_(_,Z.entityId,D.effects.Recuperation))K=Math.min(-1,K+1);U=-1*Math.abs(W.type.damage)}_._energyQueue.push({entityId:Z.entityId,energyDelta:K}),_._energyQueue.push({entityId:Z.otherEntityId,energyDelta:U});let P=_.entities[Z.entityId],R=_.entities[Z.otherEntityId],O=P?.options?.name?P.options.name:P.type.name,b=R?.options?.name?R.options.name:R.type.name;_=X_(_,`${O} did ${Math.abs(U)} damage to ${b} at cost of ${Math.abs(K)} energy.`)}return _}function K0(_){let Z=void 0,K=new Set;while(typeof(Z=_._energyQueue.shift())<"u"){let U=_.entities[Z.entityId];if(U.energy=Math.min(U.energy+Z.energyDelta,U.energyMax),U.energy<=0)K.add(U.id)}for(let U of K){let W=_.entities[U];_._despawnQueue.push(U);let P=W?.options?.name?W.options.name:W.type.name;if(!C_(W)){let R=Math.max(1,Math.floor(W.energyMax/3));_=Nw(_,R,W.mapId,W.x,W.y),_=X_(_,`${P} destroyed leaving behind Junk.`)}}return _}function q0(_){return _=lw(_),_=V0(_),_=Tw(_),_=K0(_),_=Mw(_),_=dw(_),_=yw(_),_}class U0{p=[];constructor(_){this.p=Array(512);let Z=Array(256);for(let U=0;U<256;U++)Z[U]=U;let K=new R_(_);for(let U=255;U>0;U--){let W=K.getItem(_1(U+1));[Z[U],Z[W]]=[Z[W],Z[U]]}for(let U=0;U<256;U++)this.p[U]=this.p[U+256]=Z[U]}fade(_){return _*_*_*(_*(_*6-15)+10)}lerp(_,Z,K){return Z+_*(K-Z)}grad(_,Z,K,U){let W=_&15,P=W<8?Z:K,R=W<4?K:W===12||W===14?Z:U;return((W&1)===0?P:-P)+((W&2)===0?R:-R)}noise(_,Z,K){let U=Math.floor(_)&255,W=Math.floor(Z)&255,P=Math.floor(K)&255;_-=Math.floor(_),Z-=Math.floor(Z),K-=Math.floor(K);let R=this.fade(_),O=this.fade(Z),b=this.fade(K),N=this.p[U]+W,g=this.p[N]+P,h=this.p[N+1]+P,m=this.p[U+1]+W,y=this.p[m]+P,l=this.p[m+1]+P;return(this.lerp(b,this.lerp(O,this.lerp(R,this.grad(this.p[g],_,Z,K),this.grad(this.p[y],_-1,Z,K)),this.lerp(R,this.grad(this.p[h],_,Z-1,K),this.grad(this.p[l],_-1,Z-1,K))),this.lerp(O,this.lerp(R,this.grad(this.p[g+1],_,Z,K-1),this.grad(this.p[y+1],_-1,Z,K-1)),this.lerp(R,this.grad(this.p[h+1],_,Z-1,K-1),this.grad(this.p[l+1],_-1,Z-1,K-1))))+1)/2}}class Jw{width;height;seed;constructor(_,Z,K){this.width=_,this.height=Z,this.seed=K}generate(_,Z){let K=new U0(this.seed),U=[],W=D.tiles.void,P=D.tiles.water,R=D.tiles.tree,O=D.tiles.rock;for(let b=0;b<this.height;b++)for(let N=0;N<this.width;N++){let g=N/this.width*5-2.5,h=b/this.height*5-2.5,m=this.getOctaveNoise(K,g,h,0,4,0.5);m=(m-0.5)*2+0.5,m=Math.max(0,Math.min(1,m));let y;if(m<0.25)y=P;else if(m<0.5)y=W;else if(m<0.75)y=R;else y=O;U.push(b_(y))}return new P_(_,this.width,this.height,U)}getOctaveNoise(_,Z,K,U,W,P){let R=0,O=1,b=1,N=0;for(let g=0;g<W;g++)R+=_.noise(Z*O,K*O,U*O)*b,N+=b,b*=P,O*=2;return R/N}}var h6=42;function z0(_,Z=h6){let U=new Jw(256,256,Z).generate("overworld="+Z,"Overworld");return _.maps[U.id]=U,_}class u1{state;constructor(){}init(){return this.state=J0(),this.state=t_(this.state,0,hw),this.state=t_(this.state,0,ew),this.state=t_(this.state,0,Z0),this.state=t_(this.state,1,Ow),this.state=t_(this.state,2,Cw),this.state=Q0(this.state),this.state=rw(this.state),this.state=z0(this.state),this.state.currentMapId="botmos_hull_selection",this.state=N_(this.state,F_(),D.entities.Spirit,this.state.currentMapId,9,5,{faction:D.factions.Spirits,name:"Player"}),this.state}update(_,Z=!1){let K=this.state.entities[F_()];if(K){if(_){switch(_){case D.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case D.commands["#"]:this.state=X_(this.state,Rw(this.state,F_()));break;default:this.state=Iw(this.state,K,_),this.state=q0(this.state)}this.state.actionLog.push(_.key)}}else this.state=X_(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=N_(this.state,F_(),D.entities.Spirit,this.state.currentMapId,9,5,{faction:D.factions.Spirits,name:"Player"});return this.state}play(_){for(let Z=0;Z<_.length;Z++){let K=_[Z];this.update(D.commands[K],!0)}return this.state}}var d={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},Vw=[],S1=void 0,B0=void 0,$0=0;document.body.addEventListener("keydown",function(_){if(_.defaultPrevented)return;switch(_.key){case"w":case"ArrowUp":d.up=!0,q_(_);break;case"a":case"ArrowLeft":d.left=!0,q_(_);break;case"s":case"ArrowDown":d.down=!0,q_(_);break;case"d":case"ArrowRight":d.right=!0,q_(_);break;case"x":d.a=!0,q_(_);break;case" ":case"y":case"z":d.b=!0,q_(_);break;case"m":d.menu=!0,q_(_);break;case"#":case"/":d.slash=!0,q_(_);break;default:}S_(G0())});function S_(_){let Z=Date.now();if(S1!==void 0&&Z-$0>=D.constants.MIN_TURN_SPEED_IN_MS)$0=Z,S1(_)}document.body.addEventListener("keyup",function(_){if(_.defaultPrevented)return;switch(_.key){case"w":case"ArrowUp":d.up=!1,q_(_);break;case"a":case"ArrowLeft":d.left=!1,q_(_);break;case"s":case"ArrowDown":d.down=!1,q_(_);break;case"d":case"ArrowRight":d.right=!1,q_(_);break;case"x":d.a=!1,q_(_);break;case" ":case"y":case"z":d.b=!1,q_(_);break;case"m":d.menu=!1,q_(_);break;case"#":case"/":d.slash=!1,q_(_);default:}});document.body.addEventListener("click",function(_){let{clientX:Z,clientY:K}=_,W=document.body.clientWidth/3,R=document.body.clientHeight/3;if(Z>=W&&Z<2*W&&K<R)S_(D.commands.N),q_(_);else if(Z<W&&K<R)S_(D.commands.B),q_(_);else if(Z>=2*W&&K<R)S_(D.commands.A),q_(_);else if(Z<W&&K>=R&&K<2*R)S_(D.commands.W),q_(_);else if(Z>=2*W&&K>=R&&K<2*R)S_(D.commands.E),q_(_);else if(Z>=W&&Z<2*W&&K>=2*R)S_(D.commands.S),q_(_);else if(Z>=W&&Z<2*W&&K>=R&&K<2*R)S_(D.commands.M),q_(_)});function q_(_){_.preventDefault(),_.stopPropagation()}var Y1=null;function x6(){let _=null;if(d.right)_=D.commands.E;if(d.left)_=D.commands.W;if(d.down)_=D.commands.S;if(d.up)_=D.commands.N;if(d.up&&d.right){if(_===D.commands.N&&Y1===D.commands.N)_=D.commands.E}if(d.up&&d.left){if(_===D.commands.N&&Y1===D.commands.N)_=D.commands.W}if(d.down&&d.right){if(_===D.commands.S&&Y1===D.commands.S)_=D.commands.E}if(d.down&&d.left){if(_===D.commands.S&&Y1===D.commands.S)_=D.commands.W}if(d.a)_=D.commands.A;if(d.b)_=D.commands.B;if(d.menu)_=D.commands.M;if(d.slash)_=D.commands["#"];if(Y1=_,_!==null)Vw.push(_)}function G0(){x6();let _=Vw.shift()||null;return Vw=[],_}document.body.addEventListener("mousemove",function(_){if(_.defaultPrevented)return;if(S1!==void 0)B0(_),q_(_)});var X0=void 0;window.addEventListener("gamepadconnected",(_)=>{X0=setInterval(function(){let Z=navigator.getGamepads()[_.gamepad?.index];if(d.right=Z.buttons[15].pressed,d.left=Z.buttons[14].pressed,d.down=Z.buttons[13].pressed,d.up=Z.buttons[12].pressed,d.a=Z.buttons[0].pressed||Z.buttons[2].pressed,d.b=Z.buttons[1].pressed||Z.buttons[3].pressed,d.menu=Z.buttons[9].pressed,d.right||d.left||d.down||d.up||d.a||d.b||d.menu)S_(G0())},100)});window.addEventListener("gamepaddisconnected",(_)=>{clearInterval(X0)});function Y0(_){S1=_}function L0(_){B0=_}var F0=i1(A1(),1);var f1={__10:[0,0],__11:[16,0],__12:[32,0],__13:[48,0],__14:[64,0],__15:[80,0],__1:[96,0],_1:[112,0],__2:[128,0],_2:[144,0],__3:[160,0],_3:[176,0],__4:[192,0],_4:[208,0],__5:[224,0],_5:[240,0],__6:[256,0],_6:[272,0],__7:[288,0],_7:[304,0],__8:[320,0],_8:[336,0],__9:[352,0],_9:[368,0],AeroBot_a:[384,0],AeroBot:[400,0],battery:[416,0],BioAbsorber:[432,0],broom:[448,0],chargepad:[464,0],cheat:[480,0],chest:[496,0],Cleaner_a:[512,0],Cleaner:[528,0],Deviant:[544,0],drain:[560,0],energy:[576,0],gold:[592,0],goo:[608,0],Graffiticyan:[624,0],Graffitimagenta:[640,0],Graffitiyellow:[656,0],hammer:[672,0],junk:[688,0],matter:[704,0],movableboulder:[720,0],movablebox:[736,0],moveeast:[752,0],movenorth:[768,0],movesouth:[784,0],movewest:[800,0],pickaxe:[816,0],Pioneer_a:[832,0],Pioneer:[848,0],portalclosed:[864,0],portalhidden:[880,0],portallauncher:[896,0],portal:[912,0],portalsewers:[928,0],portalstartaerobot:[944,0],"_portalstart?":[960,0],portalstartworkbot:[976,0],Recharger:[992,0],Recuperation:[1008,0],RoboRat_a:[1024,0],RoboRat:[1040,0],RockCrusher:[1056,0],rock:[1072,0],Screwing:[1088,0],shocker:[1104,0],spacerock:[1120,0],spacetree:[1136,0],spacevoid:[1152,0],spacevoidstarwhite:[1168,0],spacevoidstaryellow:[1184,0],spacewater_a:[1200,0],spacewater:[1216,0],Spirit_a:[1232,0],Spirit:[1248,0],star:[1264,0],terminal:[1280,0],tree:[1296,0],trident:[1312,0],upgradeBioAbsorber:[1328,0],upgradeRecuperation:[1344,0],Valkyrie_a:[1360,0],Valkyrie:[1376,0],voidhidden:[1392,0],void:[1408,0],voidtrue:[1424,0],wall0:[1440,0],wall1:[1456,0],wall2:[1472,0],walla_:[1488,0],wallA:[1504,0],wallb_:[1520,0],wallB:[1536,0],wallc_:[1552,0],wallC:[1568,0],WallCrusher:[1584,0],walld_:[1600,0],wallD:[1616,0],walle_:[1632,0],wallE:[1648,0],wallf_:[1664,0],wallF:[1680,0],wallg_:[1696,0],wallG:[1712,0],wallh_:[1728,0],wallH:[1744,0],walli_:[1760,0],wallI:[1776,0],wallj_:[1792,0],wallJ:[1808,0],wallk_:[1824,0],wallK:[1840,0],walll_:[1856,0],wallL:[1872,0],wallm_:[1888,0],wallM:[1904,0],walln_:[1920,0],wallN:[1936,0],wallo_:[1952,0],wallO:[1968,0],"wall(":[1984,0],"wall)":[2000,0],"wall+":[2016,0],"wall,":[2032,0],"wall.":[2048,0],wall:[2064,0],"wall:":[2080,0],wall_:[2096,0],"wall|":[2112,0],wallp_:[2128,0],wallP:[2144,0],wallq_:[2160,0],wallQ:[2176,0],wallr_:[2192,0],wallR:[2208,0],walls_:[2224,0],wallS:[2240,0],wallstatueaerobot:[2256,0],wallstatuecleaner:[2272,0],wallstatuepioneer:[2288,0],wallstatueworkbot:[2304,0],wallt_:[2320,0],wallT:[2336,0],wallu_:[2352,0],wallU:[2368,0],wallv_:[2384,0],wallV:[2400,0],wallweak:[2416,0],wallw_:[2432,0],wallW:[2448,0],wallx_:[2464,0],wallX:[2480,0],wally_:[2496,0],wallY:[2512,0],wallz_:[2528,0],wallZ:[2544,0],water_a:[2560,0],WaterImmunity:[2576,0],water:[2592,0],watersewage_a:[2608,0],watersewage:[2624,0],WaterShield:[2640,0],WorkBot_a:[2656,0],WorkBot:[2672,0],wrench:[2688,0]};var Q1=document.createElement("div");Q1.id="ui";document.body.appendChild(Q1);var I1=Uw(),w1=Uw(),Kw=m6();Kw.style.marginRight=`${n.fontSize/2}px`;var L1=[];for(let _=0;_<n.uiEffectsMaxDisplaySize;_++)L1.push(Uw());var f_=document.createElement("div");f_.replaceChildren(I1,w1,Kw,...L1);Q1.replaceChildren(f_);var T1=document.createElement("div");T1.style.display="flex";T1.style.justifyContent="space-between";var g1=document.createElement("div");g1.id="uichatlog";var W0=document.createElement("div");W0.id="uitooltip";T1.replaceChildren(g1,W0);Q1.appendChild(T1);var qw=document.createElement("div");qw.id="uimousetooltip";document.body.appendChild(qw);async function H0(_,Z=0){if(!n.showUI)return;let K=F_(),U=_.entities[K],W="";if(U){m_(I1,U.type.name),I1.dataset.tooltip="Player hull: "+U.type.name;let P="",R=C1(_,K);if(R){m_(w1,R.type.name.toLowerCase());let h=R.type;w1.dataset.tooltip=`Player tool: ${h.name} (${Math.abs(h.damage)} damage, ${h.energyCost} energy)`}else m_(w1,null),w1.dataset.tooltip=void 0;let O=jw(_,K);for(let h=0;h<n.uiEffectsMaxDisplaySize;h++){let m=O[h]?.type.name||null,y=O[h]?.type.tooltip||void 0;m_(L1[h],m),L1[h].dataset.tooltip=y}let b="";if(U.matter>0)b=`${U.matter}M `;let N="";if(U.gold>0)N=`${U.gold}G `;let g=j1(_,U);if(W=" "+U.energy+"/"+U.energyMax+" "+P+N+b+"Y:"+g.B.name+" X:"+g.A.name,Q1.style.flexDirection="column-reverse",U.y-Z>=G_.height-3)Q1.style.flexDirection="column";if(f_.style.background="#000",U.energy/U.energyMax<=0.2)f_.style.color="#000",f_.style.background="#f00";else f_.style.color="#74ee15",f_.style.background="#000"}else{m_(I1,null),m_(w1,null);for(let P=0;P<n.uiEffectsMaxDisplaySize;P++)m_(L1[P],null);W="Game over!",f_.style.color="#000",f_.style.background="#f00"}if(Kw.innerText=W,_._menuOpen&&!!_.chatLog.length){let P=_.chatLog.slice(-n.chatLogMaxDisplaySize);g1.innerText=P.join(`
`)}else g1.innerText=""}function Uw(){let _=document.createElement("span");return m_(_,null),_.style.height=`${n.fontSize}px`,_.style.display="inline-block",_}function m6(){let _=document.createElement("span");return _.style.display="inline-block",_.style.marginLeft=`${n.fontSize/2}px`,_}function m_(_,Z){if(Z){let K=f1[Z][0];_.style.background=`url('build/tiles.png') -${K}px 0`,_.style.width=`${n.fontSize}px`}else _.style.width="0px"}function P0(){return qw}var y_="_a",R0=document.createElement("img");R0.src="build/tiles.png";G_.tileSet=R0;G_.tileMap=p6();var J1=new F0.Display(G_);document.body.appendChild(J1.getContainer());var j0=0,M0=0,Z1=void 0;function l6(_,Z,K=!1){Z1=_;let U=_.currentMapId,W=_.maps[U],P=K?y_:"",R=0,O=0;if(W.widthTiles<Z.width)R=Math.floor((Z.width-W.widthTiles)/2),Z.x=0;if(W.heightTiles<Z.height)O=Math.floor((Z.height-W.heightTiles)/2),Z.y=0;j0=Z.x-R,M0=Z.y-O;let b={},N={},g={};for(let p=0;p<Z.height;p++)for(let c=0;c<Z.width;c++){let J_=W.getTile(Z.x+c,Z.y+p),Q_="";if(J_?.type)if(J_.options.sign)Q_="#"+J_.options.sign;else Q_=J_.type.icon;if(Q_){let __=[R+c,O+p].toString();b[__]=[Q_+P],N[__]=["transparent"],g[__]=["transparent"]}}let h=M1(_,U);for(let p=0;p<h.length;p++){let c=h[p],J_=R+c.x-Z.x,Q_=O+c.y-Z.y,__=[J_,Q_].toString();if(b[__])b[__].push(c.type.icon+P),N[__].push("transparent"),g[__].push("transparent");else b[__]=[c.type.icon+P],N[__]=["transparent"],g[__]=["transparent"]}let m=F_(),y=_.entities[m],l=i_(_,U);for(let p=0;p<l.length;p++){let c=l[p],J_=R+c.x-Z.x,Q_=O+c.y-Z.y,__="transparent";if(n.highlightFriendEnemy&&!C_(c)&&!t1(c)&&c!==y)switch(a_(y,c)){case 1:break;case 2:__="rgba(255, 0, 0, 0.5)";break}let Z_=[J_,Q_].toString();if(b[Z_])b[Z_].push(c.type.icon+P),N[Z_].push(__),g[Z_].push("transparent");else b[Z_]=[c.type.icon+P],N[Z_]=[__],g[Z_]=["transparent"];if(n.showEnergy!==0){let E=n.showEnergy===1?16:10,S=n.showEnergy===1?"__":"_",f=Math.ceil(c.energy/c.energyMax*E);if(f<E)b[Z_].push(S+f),N[Z_].push("transparent"),g[Z_].push("transparent")}}J1.clear();for(let[p,c]of Object.entries(b)){let J_=p.split(",");J1.draw(Number(J_[0]),Number(J_[1]),c,N[p],g[p])}}var D0={x:0,y:0},h1=0;async function r_(_){let Z=_.entities[F_()],K=Z?Z:D0,U=c6(K);if(l6(_,U,h1%2==0),H0(_,U.y),D0=K,h1++,h1>=128)h1=0}async function O0(){J1._backend.setOptions(G_)}function C0(_){return[_[0]+j0,_[1]+M0]}function b0(_){if(!Z1)return{tile:null,entity:null,item:null};let Z=Z1.currentMapId,K=Z1.maps[Z],U=_[0],W=_[1],P=K.getTile(U,W),R=F1(Z1,Z,U,W),O=O1(Z1,Z,U,W);return{tile:P,entity:R,item:O}}function c6(_){return{x:Math.min(Math.max(0,_.x-Math.floor(G_.width/2)),e1.WIDTH-G_.width),y:Math.min(Math.max(0,_.y-Math.floor(G_.height/2)),e1.HEIGHT-G_.height),width:G_.width,height:G_.height}}function p6(){let _={};for(let[Z,K]of Object.entries(f1)){let U=Z.endsWith(y_),W="";if(U)Z=Z.substring(0,Z.length-y_.length),W=y_;if(Z.startsWith("wall")&&(Z.length===5||Z.length===6))_["#"+Z.substring(4,5)+W]=K;else if(Object.hasOwn(D.tiles,Z))_[D.tiles[Z].icon+W]=K;else if(Object.hasOwn(D.entities,Z))_[D.entities[Z].icon+W]=K;else if(Object.hasOwn(D.items,Z))_[D.items[Z].icon+W]=K;else if(Object.hasOwn(D.effects,Z))_[D.effects[Z].icon+W]=K;else _[Z+W]=K}for(let[Z,K]of Object.entries(_))if(!Z.endsWith(y_)&&!Object.hasOwn(_,Z+y_))_[Z+y_]=K;return _}async function v0(_){if(!n.showUI||!n.showTooltip)return;let Z="";if(_.target){if(_.target?.dataset?.tooltip)Z+=_.target.dataset.tooltip}let K=J1.eventToPosition(_);if(K[0]!==-1){let R=C0(K),O=b0(R);if(O.entity){let b=O.entity?.options?.name?O.entity.options.name:O.entity.type.name;Z+=b}if(O.item){if(Z!=="")Z+=`
`;Z+=O.item.type.name}if(!!O?.tile?.type&&O.tile?.type.tooltip!==""){if(Z!=="")Z+=`
`;Z+=O.tile.type.tooltip}}let U=typeof window<"u"?window.innerHeight:0,W=Math.floor(U/2),P=P0();if(Z!==""){P.innerText=Z,P.style.display="inline-block";let{offsetWidth:R,offsetHeight:O}=P,b=window.innerWidth,N=window.innerHeight,g=_.x+20,h=_.y+20;if(g+R>b)g=_.x-R-20;if(h+O>N)h=_.y-O-20;P.style.left=g+"px",P.style.top=h+"px"}else P.style.display="none"}var j_=new u1;window.onload=function(){r_(j_.init())};window.onresize=async function(){let _=typeof window<"u"?window.innerWidth:0,Z=typeof window<"u"?window.innerHeight:0;n.cameraWidth=Math.floor(_/n.fontSize),n.cameraHeight=Math.floor(Z/n.fontSize),G_.width=Math.floor(n.cameraWidth*(1/n.zoom)),G_.height=Math.floor(n.cameraHeight*(1/n.zoom)),await O0(),r_(j_.state)};Y0(function(_){r_(j_.update(_))});L0(v0);if(!window.BMActionLog)window.BMActionLog=function(){return j_.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(_){r_(j_.play(_))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){n.debug=!n.debug,r_(j_.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){n.showUI=!n.showUI,r_(j_.state)};if(n.debug){if(!window.BMDebugState)window.BMDebugState=function(){return j_.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let _=Object.keys(j_.state.maps).length,Z=Object.keys(j_.state.entities).length,K=Object.keys(j_.state.items).length,U=Object.keys(j_.state.tools).length;return`Maps: ${_}, Entities: ${Z}, Items: ${K}, Tools: ${U}`}}document.body.focus();
