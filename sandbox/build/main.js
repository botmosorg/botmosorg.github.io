var B6=Object.create;var{getPrototypeOf:G6,defineProperty:Dw,getOwnPropertyNames:X6}=Object;var Y6=Object.prototype.hasOwnProperty;var i1=(w,J,z)=>{z=w!=null?B6(G6(w)):{};let U=J||!w||!w.__esModule?Dw(z,"default",{value:w,enumerable:!0}):z;for(let W of X6(w))if(!Y6.call(U,W))Dw(U,W,{get:()=>w[W],enumerable:!0});return U};var L6=(w,J)=>()=>(J||w((J={exports:{}}).exports,J),J.exports);var E1=L6((A1,nw)=>{function d_(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function v6(w,J){var z=typeof Symbol!=="undefined"&&w[Symbol.iterator]||w["@@iterator"];if(z)return(z=z.call(w)).next.bind(z);if(Array.isArray(w)||(z=A6(w))||J&&w&&typeof w.length==="number"){if(z)w=z;var U=0;return function(){if(U>=w.length)return{done:!0};return{done:!1,value:w[U++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A6(w,J){if(!w)return;if(typeof w==="string")return rw(w,J);var z=Object.prototype.toString.call(w).slice(8,-1);if(z==="Object"&&w.constructor)z=w.constructor.name;if(z==="Map"||z==="Set")return Array.from(w);if(z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z))return rw(w,J)}function rw(w,J){if(J==null||J>w.length)J=w.length;for(var z=0,U=new Array(J);z<J;z++)U[z]=w[z];return U}function V_(w,J){w.prototype=Object.create(J.prototype),w.prototype.constructor=w,Zw(w,J)}function Zw(w,J){return Zw=Object.setPrototypeOf?Object.setPrototypeOf.bind():function z(U,W){return U.__proto__=W,U},Zw(w,J)}(function(w,J){typeof A1==="object"&&typeof nw!=="undefined"?J(A1):typeof define==="function"&&define.amd?define(["exports"],J):(w=typeof globalThis!=="undefined"?globalThis:w||self,J(w.ROT={}))})(A1,function(w){var J=0.00000000023283064365386963,z=function(){function G(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var B=G.prototype;return B.getSeed=function q(){return this._seed},B.setSeed=function q(V){return V=V<1?1/V:V,this._seed=V,this._s0=(V>>>0)*J,V=V*69069+1>>>0,this._s1=V*J,V=V*69069+1>>>0,this._s2=V*J,this._c=1,this},B.getUniform=function q(){var V=2091639*this._s0+this._c*J;return this._s0=this._s1,this._s1=this._s2,this._c=V|0,this._s2=V-this._c,this._s2},B.getUniformInt=function q(V,_){var Z=Math.max(V,_),Q=Math.min(V,_);return Math.floor(this.getUniform()*(Z-Q+1))+Q},B.getNormal=function q(V,_){if(V===void 0)V=0;if(_===void 0)_=1;var Z,Q,K;do Z=2*this.getUniform()-1,Q=2*this.getUniform()-1,K=Z*Z+Q*Q;while(K>1||K==0);var $=Z*Math.sqrt(-2*Math.log(K)/K);return V+$*_},B.getPercentage=function q(){return 1+Math.floor(this.getUniform()*100)},B.getItem=function q(V){if(!V.length)return null;return V[Math.floor(this.getUniform()*V.length)]},B.shuffle=function q(V){var _=[],Z=V.slice();while(Z.length){var Q=Z.indexOf(this.getItem(Z));_.push(Z.splice(Q,1)[0])}return _},B.getWeightedValue=function q(V){var _=0;for(var Z in V)_+=V[Z];var Q=this.getUniform()*_,K,$=0;for(K in V)if($+=V[K],Q<$)return K;return K},B.getState=function q(){return[this._s0,this._s1,this._s2,this._c]},B.setState=function q(V){return this._s0=V[0],this._s1=V[1],this._s2=V[2],this._c=V[3],this},B.clone=function q(){var V=new G;return V.setState(this.getState())},G}(),U=new z().setSeed(Date.now()),W=function(){function G(){}var B=G.prototype;return B.getContainer=function q(){return null},B.setOptions=function q(V){this._options=V},G}(),D=function(G){V_(B,G);function B(){var V=G.call(this)||this;return V._ctx=document.createElement("canvas").getContext("2d"),V}var q=B.prototype;return q.schedule=function V(_){requestAnimationFrame(_)},q.getContainer=function V(){return this._ctx.canvas},q.setOptions=function V(_){G.prototype.setOptions.call(this,_);var Z=_.fontStyle?_.fontStyle+" ":"",Q=Z+" "+_.fontSize+"px "+_.fontFamily;this._ctx.font=Q,this._updateSize(),this._ctx.font=Q,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},q.clear=function V(){var _=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=_},q.eventToPosition=function V(_,Z){var Q=this._ctx.canvas,K=Q.getBoundingClientRect();if(_-=K.left,Z-=K.top,_*=Q.width/K.width,Z*=Q.height/K.height,_<0||Z<0||_>=Q.width||Z>=Q.height)return[-1,-1];return this._normalizedEventToPosition(_,Z)},B}(W);function O(G,B){return(G%B+B)%B}function C(G,B,q){if(B===void 0)B=0;if(q===void 0)q=1;if(G<B)return B;if(G>q)return q;return G}function A(G){return G.charAt(0).toUpperCase()+G.substring(1)}function N(G){for(var B=arguments.length,q=new Array(B>1?B-1:0),V=1;V<B;V++)q[V-1]=arguments[V];var _=N.map,Z=function Q(K,$,Y,X){if(G.charAt(X-1)=="%")return K.substring(1);if(!q.length)return K;var L=q[0],H=$||Y,F=H.split(","),R=F.shift()||"",j=_[R.toLowerCase()];if(!j)return K;L=q.shift();var M=L[j].apply(L,F),u=R.charAt(0);if(u!=u.toLowerCase())M=A(M);return M};return G.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Z)}N.map={s:"toString"};var m=Object.freeze({__proto__:null,mod:O,clamp:C,capitalize:A,format:N}),p=function(G){V_(B,G);function B(){var V=G.call(this)||this;return V._spacingX=0,V._spacingY=0,V._hexSize=0,V}var q=B.prototype;return q.draw=function V(_,Z){var Q=_[0],K=_[1],$=_[2],Y=_[3],X=_[4],L=[(Q+1)*this._spacingX,K*this._spacingY+this._hexSize];if(this._options.transpose)L.reverse();if(Z)this._ctx.fillStyle=X,this._fill(L[0],L[1]);if(!$)return;this._ctx.fillStyle=Y;var H=[].concat($);for(var F=0;F<H.length;F++)this._ctx.fillText(H[F],L[0],Math.ceil(L[1]))},q.computeSize=function V(_,Z){if(this._options.transpose)_+=Z,Z=_-Z,_-=Z;var Q=Math.floor(_/this._spacingX)-1,K=Math.floor((Z-2*this._hexSize)/this._spacingY+1);return[Q,K]},q.computeFontSize=function V(_,Z){if(this._options.transpose)_+=Z,Z=_-Z,_-=Z;var Q=2*_/((this._options.width+1)*Math.sqrt(3))-1,K=Z/(2+1.5*(this._options.height-1)),$=Math.min(Q,K),Y=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var X=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=Y;var L=X/100;$=Math.floor($)+1;var H=2*$/(this._options.spacing*(1+L/Math.sqrt(3)));return Math.ceil(H)-1},q._normalizedEventToPosition=function V(_,Z){var Q;if(this._options.transpose)_+=Z,Z=_-Z,_-=Z,Q=this._ctx.canvas.width;else Q=this._ctx.canvas.height;var K=Q/this._options.height;if(Z=Math.floor(Z/K),O(Z,2))_-=this._spacingX,_=1+2*Math.floor(_/(2*this._spacingX));else _=2*Math.floor(_/(2*this._spacingX));return[_,Z]},q._fill=function V(_,Z){var Q=this._hexSize,K=this._options.border,$=this._ctx;if($.beginPath(),this._options.transpose)$.moveTo(_-Q+K,Z),$.lineTo(_-Q/2+K,Z+this._spacingX-K),$.lineTo(_+Q/2-K,Z+this._spacingX-K),$.lineTo(_+Q-K,Z),$.lineTo(_+Q/2-K,Z-this._spacingX+K),$.lineTo(_-Q/2+K,Z-this._spacingX+K),$.lineTo(_-Q+K,Z);else $.moveTo(_,Z-Q+K),$.lineTo(_+this._spacingX-K,Z-Q/2+K),$.lineTo(_+this._spacingX-K,Z+Q/2-K),$.lineTo(_,Z+Q-K),$.lineTo(_-this._spacingX+K,Z+Q/2-K),$.lineTo(_-this._spacingX+K,Z-Q/2+K),$.lineTo(_,Z-Q+K);$.fill()},q._updateSize=function V(){var _=this._options,Z=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(_.spacing*(_.fontSize+Z/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var Q,K;if(_.transpose)Q="height",K="width";else Q="width",K="height";this._ctx.canvas[Q]=Math.ceil((_.width+1)*this._spacingX),this._ctx.canvas[K]=Math.ceil((_.height-1)*this._spacingY+2*this._hexSize)},B}(D),Z_=function(G){V_(B,G);function B(){var V=G.call(this)||this;return V._spacingX=0,V._spacingY=0,V._canvasCache={},V}var q=B.prototype;return q.setOptions=function V(_){G.prototype.setOptions.call(this,_),this._canvasCache={}},q.draw=function V(_,Z){if(B.cache)this._drawWithCache(_);else this._drawNoCache(_,Z)},q._drawWithCache=function V(_){var Z=_[0],Q=_[1],K=_[2],$=_[3],Y=_[4],X=""+K+$+Y,L;if(X in this._canvasCache)L=this._canvasCache[X];else{var H=this._options.border;L=document.createElement("canvas");var F=L.getContext("2d");if(L.width=this._spacingX,L.height=this._spacingY,F.fillStyle=Y,F.fillRect(H,H,L.width-H,L.height-H),K){F.fillStyle=$,F.font=this._ctx.font,F.textAlign="center",F.textBaseline="middle";var R=[].concat(K);for(var j=0;j<R.length;j++)F.fillText(R[j],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[X]=L}this._ctx.drawImage(L,Z*this._spacingX,Q*this._spacingY)},q._drawNoCache=function V(_,Z){var Q=_[0],K=_[1],$=_[2],Y=_[3],X=_[4];if(Z){var L=this._options.border;this._ctx.fillStyle=X,this._ctx.fillRect(Q*this._spacingX+L,K*this._spacingY+L,this._spacingX-L,this._spacingY-L)}if(!$)return;this._ctx.fillStyle=Y;var H=[].concat($);for(var F=0;F<H.length;F++)this._ctx.fillText(H[F],(Q+0.5)*this._spacingX,Math.ceil((K+0.5)*this._spacingY))},q.computeSize=function V(_,Z){var Q=Math.floor(_/this._spacingX),K=Math.floor(Z/this._spacingY);return[Q,K]},q.computeFontSize=function V(_,Z){var Q=Math.floor(_/this._options.width),K=Math.floor(Z/this._options.height),$=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var Y=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=$;var X=Y/100,L=X*K/Q;if(L>1)K=Math.floor(K/L);return Math.floor(K/this._options.spacing)},q._normalizedEventToPosition=function V(_,Z){return[Math.floor(_/this._spacingX),Math.floor(Z/this._spacingY)]},q._updateSize=function V(){var _=this._options,Z=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(_.spacing*Z),this._spacingY=Math.ceil(_.spacing*_.fontSize),_.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=_.width*this._spacingX,this._ctx.canvas.height=_.height*this._spacingY},B}(D);Z_.cache=!1;var r=function(G){V_(B,G);function B(){var V=G.call(this)||this;return V._colorCanvas=document.createElement("canvas"),V}var q=B.prototype;return q.draw=function V(_,Z){var Q=_[0],K=_[1],$=_[2],Y=_[3],X=_[4],L=this._options.tileWidth,H=this._options.tileHeight;if(Z)if(this._options.tileColorize)this._ctx.clearRect(Q*L,K*H,L,H);else this._ctx.fillStyle=X,this._ctx.fillRect(Q*L,K*H,L,H);if(!$)return;var F=[].concat($),R=[].concat(Y),j=[].concat(X);for(var M=0;M<F.length;M++){var u=this._options.tileMap[F[M]];if(!u)throw new Error('Char "'+F[M]+'" not found in tileMap');if(this._options.tileColorize){var I=this._colorCanvas,T=I.getContext("2d");T.globalCompositeOperation="source-over",T.clearRect(0,0,L,H);var d=R[M],t=j[M];if(T.drawImage(this._options.tileSet,u[0],u[1],L,H,0,0,L,H),d!="transparent")T.fillStyle=d,T.globalCompositeOperation="source-atop",T.fillRect(0,0,L,H);if(t!="transparent")T.fillStyle=t,T.globalCompositeOperation="destination-over",T.fillRect(0,0,L,H);this._ctx.drawImage(I,Q*L,K*H,L,H)}else this._ctx.drawImage(this._options.tileSet,u[0],u[1],L,H,Q*L,K*H,L,H)}},q.computeSize=function V(_,Z){var Q=Math.floor(_/this._options.tileWidth),K=Math.floor(Z/this._options.tileHeight);return[Q,K]},q.computeFontSize=function V(){throw new Error("Tile backend does not understand font size")},q._normalizedEventToPosition=function V(_,Z){return[Math.floor(_/this._options.tileWidth),Math.floor(Z/this._options.tileHeight)]},q._updateSize=function V(){var _=this._options;this._ctx.canvas.width=_.width*_.tileWidth,this._ctx.canvas.height=_.height*_.tileHeight,this._colorCanvas.width=_.tileWidth,this._colorCanvas.height=_.tileHeight},B}(D);function c(G){var B,q;if(G in v)B=v[G];else{if(G.charAt(0)=="#"){var V=G.match(/[0-9a-f]/gi)||[],_=V.map(function(Q){return parseInt(Q,16)});if(_.length==3)B=_.map(function(Q){return Q*17});else{for(var Z=0;Z<3;Z++)_[Z+1]+=16*_[Z],_.splice(Z,1);B=_}}else if(q=G.match(/rgb\(([0-9, ]+)\)/i))B=q[1].split(/\s*,\s*/).map(function(Q){return parseInt(Q)});else B=[0,0,0];v[G]=B}return B.slice()}function Q_(G){var B=G.slice();for(var q=arguments.length,V=new Array(q>1?q-1:0),_=1;_<q;_++)V[_-1]=arguments[_];for(var Z=0;Z<3;Z++)for(var Q=0;Q<V.length;Q++)B[Z]+=V[Q][Z];return B}function h(G){for(var B=arguments.length,q=new Array(B>1?B-1:0),V=1;V<B;V++)q[V-1]=arguments[V];for(var _=0;_<3;_++)for(var Z=0;Z<q.length;Z++)G[_]+=q[Z][_];return G}function x(G){var B=G.slice();for(var q=arguments.length,V=new Array(q>1?q-1:0),_=1;_<q;_++)V[_-1]=arguments[_];for(var Z=0;Z<3;Z++){for(var Q=0;Q<V.length;Q++)B[Z]*=V[Q][Z]/255;B[Z]=Math.round(B[Z])}return B}function n(G){for(var B=arguments.length,q=new Array(B>1?B-1:0),V=1;V<B;V++)q[V-1]=arguments[V];for(var _=0;_<3;_++){for(var Z=0;Z<q.length;Z++)G[_]*=q[Z][_]/255;G[_]=Math.round(G[_])}return G}function z_(G,B,q){if(q===void 0)q=0.5;var V=G.slice();for(var _=0;_<3;_++)V[_]=Math.round(V[_]+q*(B[_]-G[_]));return V}var o=z_;function b(G,B,q){if(q===void 0)q=0.5;var V=g(G),_=g(B);for(var Z=0;Z<3;Z++)V[Z]+=q*(_[Z]-V[Z]);return i(V)}var S=b;function f(G,B){if(!(B instanceof Array))B=Math.round(U.getNormal(0,B));var q=G.slice();for(var V=0;V<3;V++)q[V]+=B instanceof Array?Math.round(U.getNormal(0,B[V])):B;return q}function g(G){var B=G[0]/255,q=G[1]/255,V=G[2]/255,_=Math.max(B,q,V),Z=Math.min(B,q,V),Q=0,K,$=(_+Z)/2;if(_==Z)K=0;else{var Y=_-Z;switch(K=$>0.5?Y/(2-_-Z):Y/(_+Z),_){case B:Q=(q-V)/Y+(q<V?6:0);break;case q:Q=(V-B)/Y+2;break;case V:Q=(B-q)/Y+4;break}Q/=6}return[Q,K,$]}function e(G,B,q){if(q<0)q+=1;if(q>1)q-=1;if(q<0.16666666666666666)return G+(B-G)*6*q;if(q<0.5)return B;if(q<0.6666666666666666)return G+(B-G)*(0.6666666666666666-q)*6;return G}function i(G){var B=G[2];if(G[1]==0)return B=Math.round(B*255),[B,B,B];else{var q=G[1],V=B<0.5?B*(1+q):B+q-B*q,_=2*B-V,Z=e(_,V,G[0]+0.3333333333333333),Q=e(_,V,G[0]),K=e(_,V,G[0]-0.3333333333333333);return[Math.round(Z*255),Math.round(Q*255),Math.round(K*255)]}}function k(G){var B=G.map(function(q){return C(q,0,255)});return"rgb("+B.join(",")+")"}function E(G){var B=G.map(function(q){return C(q,0,255).toString(16).padStart(2,"0")});return"#"+B.join("")}var v={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},a=Object.freeze({__proto__:null,fromString:c,add:Q_,add_:h,multiply:x,multiply_:n,interpolate:z_,lerp:o,interpolateHSL:b,lerpHSL:S,randomize:f,rgb2hsl:g,hsl2rgb:i,toRGB:k,toHex:E}),__=function(G){V_(B,G);function B(){var V=G.call(this)||this;V._uniforms={};try{V._gl=V._initWebGL()}catch(_){if(typeof _==="string")alert(_);else if(_ instanceof Error)alert(_.message)}return V}B.isSupported=function V(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var q=B.prototype;return q.schedule=function V(_){requestAnimationFrame(_)},q.getContainer=function V(){return this._gl.canvas},q.setOptions=function V(_){var Z=this;G.prototype.setOptions.call(this,_),this._updateSize();var Q=this._options.tileSet;if(Q&&"complete"in Q&&!Q.complete)Q.addEventListener("load",function(){return Z._updateTexture(Q)});else this._updateTexture(Q)},q.draw=function V(_,Z){var Q=this._gl,K=this._options,$=_[0],Y=_[1],X=_[2],L=_[3],H=_[4],F=Q.canvas.height-(Y+1)*K.tileHeight;if(Q.scissor($*K.tileWidth,F,K.tileWidth,K.tileHeight),Z){if(K.tileColorize)Q.clearColor(0,0,0,0);else Q.clearColor.apply(Q,n_(H));Q.clear(Q.COLOR_BUFFER_BIT)}if(!X)return;var R=[].concat(X),j=[].concat(H),M=[].concat(L);Q.uniform2fv(this._uniforms.targetPosRel,[$,Y]);for(var u=0;u<R.length;u++){var I=this._options.tileMap[R[u]];if(!I)throw new Error('Char "'+R[u]+'" not found in tileMap');if(Q.uniform1f(this._uniforms.colorize,K.tileColorize?1:0),Q.uniform2fv(this._uniforms.tilesetPosAbs,I),K.tileColorize)Q.uniform4fv(this._uniforms.tint,n_(M[u])),Q.uniform4fv(this._uniforms.bg,n_(j[u]));Q.drawArrays(Q.TRIANGLE_STRIP,0,4)}},q.clear=function V(){var _=this._gl;_.clearColor.apply(_,n_(this._options.bg)),_.scissor(0,0,_.canvas.width,_.canvas.height),_.clear(_.COLOR_BUFFER_BIT)},q.computeSize=function V(_,Z){var Q=Math.floor(_/this._options.tileWidth),K=Math.floor(Z/this._options.tileHeight);return[Q,K]},q.computeFontSize=function V(){throw new Error("Tile backend does not understand font size")},q.eventToPosition=function V(_,Z){var Q=this._gl.canvas,K=Q.getBoundingClientRect();if(_-=K.left,Z-=K.top,_*=Q.width/K.width,Z*=Q.height/K.height,_<0||Z<0||_>=Q.width||Z>=Q.height)return[-1,-1];return this._normalizedEventToPosition(_,Z)},q._initWebGL=function V(){var _=this,Z=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Z;var Q=C_(Z,H_,U_);return Z.useProgram(Q),Y_(Z),J_.forEach(function(K){return _._uniforms[K]=Z.getUniformLocation(Q,K)}),this._program=Q,Z.enable(Z.BLEND),Z.blendFuncSeparate(Z.SRC_ALPHA,Z.ONE_MINUS_SRC_ALPHA,Z.ONE,Z.ONE_MINUS_SRC_ALPHA),Z.enable(Z.SCISSOR_TEST),Z},q._normalizedEventToPosition=function V(_,Z){return[Math.floor(_/this._options.tileWidth),Math.floor(Z/this._options.tileHeight)]},q._updateSize=function V(){var _=this._gl,Z=this._options,Q=[Z.width*Z.tileWidth,Z.height*Z.tileHeight];_.canvas.width=Q[0],_.canvas.height=Q[1],_.viewport(0,0,Q[0],Q[1]),_.uniform2fv(this._uniforms.tileSize,[Z.tileWidth,Z.tileHeight]),_.uniform2fv(this._uniforms.targetSize,Q)},q._updateTexture=function V(_){J1(this._gl,_)},B}(W),J_=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],H_=`
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
}`.trim(),U_=`
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
}`.trim();function C_(G,B,q){var V=G.createShader(G.VERTEX_SHADER);if(G.shaderSource(V,B),G.compileShader(V),!G.getShaderParameter(V,G.COMPILE_STATUS))throw new Error(G.getShaderInfoLog(V)||"");var _=G.createShader(G.FRAGMENT_SHADER);if(G.shaderSource(_,q),G.compileShader(_),!G.getShaderParameter(_,G.COMPILE_STATUS))throw new Error(G.getShaderInfoLog(_)||"");var Z=G.createProgram();if(G.attachShader(Z,V),G.attachShader(Z,_),G.linkProgram(Z),!G.getProgramParameter(Z,G.LINK_STATUS))throw new Error(G.getProgramInfoLog(Z)||"");return Z}function Y_(G){var B=new Float32Array([0,0,1,0,0,1,1,1]),q=G.createBuffer();G.bindBuffer(G.ARRAY_BUFFER,q),G.bufferData(G.ARRAY_BUFFER,B,G.STATIC_DRAW),G.enableVertexAttribArray(0),G.vertexAttribPointer(0,2,G.FLOAT,!1,0,0)}function J1(G,B){var q=G.createTexture();return G.bindTexture(G.TEXTURE_2D,q),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_MAG_FILTER,G.NEAREST),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_MIN_FILTER,G.NEAREST),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_WRAP_S,G.REPEAT),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_WRAP_T,G.REPEAT),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,0),G.texImage2D(G.TEXTURE_2D,0,G.RGBA,G.RGBA,G.UNSIGNED_BYTE,B),q}var f_={};function n_(G){if(!(G in f_)){var B;if(G=="transparent")B=[0,0,0,0];else if(G.indexOf("rgba")>-1){B=(G.match(/[\d.]+/g)||[]).map(Number);for(var q=0;q<3;q++)B[q]=B[q]/255}else B=c(G).map(function(V){return V/255}),B.push(1);f_[G]=B}return f_[G]}function O0(G){return"\x1B[0;48;5;"+x1(G)+"m\x1B[2J"}function b0(G,B){return"\x1B[0;38;5;"+x1(G)+";48;5;"+x1(B)+"m"}function C0(G,B){return"\x1B["+(B+1)+";"+(G+1)+"H"}function x1(G){var B=256,q=6,V=q/B,_=c(G),Z=Math.floor(_[0]*V),Q=Math.floor(_[1]*V),K=Math.floor(_[2]*V);return Z*36+Q*6+K*1+16}var zw=function(G){V_(B,G);function B(){var V=G.call(this)||this;return V._offset=[0,0],V._cursor=[-1,-1],V._lastColor="",V}var q=B.prototype;return q.schedule=function V(_){setTimeout(_,16.666666666666668)},q.setOptions=function V(_){G.prototype.setOptions.call(this,_);var Z=[_.width,_.height],Q=this.computeSize();this._offset=Q.map(function(K,$){return Math.floor((K-Z[$])/2)})},q.clear=function V(){process.stdout.write(O0(this._options.bg))},q.draw=function V(_,Z){var Q=_[0],K=_[1],$=_[2],Y=_[3],X=_[4],L=this._offset[0]+Q,H=this._offset[1]+K,F=this.computeSize();if(L<0||L>=F[0])return;if(H<0||H>=F[1])return;if(L!==this._cursor[0]||H!==this._cursor[1])process.stdout.write(C0(L,H)),this._cursor[0]=L,this._cursor[1]=H;if(Z){if(!$)$=" "}if(!$)return;var R=b0(Y,X);if(R!==this._lastColor)process.stdout.write(R),this._lastColor=R;if($!="\t"){var j=[].concat($);process.stdout.write(j[0])}if(this._cursor[0]++,this._cursor[0]>=F[0])this._cursor[0]=0,this._cursor[1]++},q.computeFontSize=function V(){throw new Error("Terminal backend has no notion of font size")},q.eventToPosition=function V(_,Z){return[_,Z]},q.computeSize=function V(){return[process.stdout.columns,process.stdout.rows]},B}(W),v0=/%([bc]){([^}]*)}/g,I_=0,m_=1,m1=2,l1=3;function A0(G,B){var q={width:0,height:1},V=c1(G,B),_=0;for(var Z=0;Z<V.length;Z++){var Q=V[Z];switch(Q.type){case I_:_+=Q.value.length;break;case m_:q.height++,q.width=Math.max(q.width,_),_=0;break}}return q.width=Math.max(q.width,_),q}function c1(G,B){var q=[],V=0;G.replace(v0,function(Z,Q,K,$){var Y=G.substring(V,$);if(Y.length)q.push({type:I_,value:Y});return q.push({type:Q=="c"?m1:l1,value:K.trim()}),V=$+Z.length,""});var _=G.substring(V);if(_.length)q.push({type:I_,value:_});return E0(q,B)}function E0(G,B){if(!B)B=1/0;var q=0,V=0,_=-1;while(q<G.length){var Z=G[q];if(Z.type==m_)V=0,_=-1;if(Z.type!=I_){q++;continue}while(V==0&&Z.value.charAt(0)==" ")Z.value=Z.value.substring(1);var Q=Z.value.indexOf(`
`);if(Q!=-1){Z.value=L1(G,q,Q,!0);var K=Z.value.split("");while(K.length&&K[K.length-1]==" ")K.pop();Z.value=K.join("")}if(!Z.value.length){G.splice(q,1);continue}if(V+Z.value.length>B){var $=-1;while(!0){var Y=Z.value.indexOf(" ",$+1);if(Y==-1)break;if(V+Y>B)break;$=Y}if($!=-1)Z.value=L1(G,q,$,!0);else if(_!=-1){var X=G[_],L=X.value.lastIndexOf(" ");X.value=L1(G,_,L,!0),q=_}else Z.value=L1(G,q,B-V,!1)}else if(V+=Z.value.length,Z.value.indexOf(" ")!=-1)_=q;q++}G.push({type:m_});var H=null;for(var F=0;F<G.length;F++){var R=G[F];switch(R.type){case I_:H=R;break;case m_:if(H){var j=H.value.split("");while(j.length&&j[j.length-1]==" ")j.pop();H.value=j.join("")}H=null;break}}return G.pop(),G}function L1(G,B,q,V){var _={type:m_},Z={type:I_,value:G[B].value.substring(q+(V?1:0))};return G.splice(B+1,0,_,Z),G[B].value.substring(0,q)}var u0=Object.freeze({__proto__:null,TYPE_TEXT:I_,TYPE_NEWLINE:m_,TYPE_FG:m1,TYPE_BG:l1,measure:A0,tokenize:c1}),p1=80,d1=25,B_={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},N0={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},k0={hex:p,rect:Z_,tile:r,"tile-gl":__,term:zw},S0={width:p1,height:d1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},s_=function(){function G(q){if(q===void 0)q={};this._data={},this._dirty=!1,this._options={},q=Object.assign({},S0,q),this.setOptions(q),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var B=G.prototype;return B.DEBUG=function q(V,_,Z){var Q=[this._options.bg,this._options.fg];this.draw(V,_,null,null,Q[Z%Q.length])},B.clear=function q(){this._data={},this._dirty=!0},B.setOptions=function q(V){if(Object.assign(this._options,V),V.width||V.height||V.fontSize||V.fontFamily||V.spacing||V.layout){if(V.layout){var _=k0[V.layout];this._backend=new _}this._backend.setOptions(this._options),this._dirty=!0}return this},B.getOptions=function q(){return this._options},B.getContainer=function q(){return this._backend.getContainer()},B.computeSize=function q(V,_){return this._backend.computeSize(V,_)},B.computeFontSize=function q(V,_){return this._backend.computeFontSize(V,_)},B.computeTileSize=function q(V,_){var Z=Math.floor(V/this._options.width),Q=Math.floor(_/this._options.height);return[Z,Q]},B.eventToPosition=function q(V){var _,Z;if("touches"in V)_=V.touches[0].clientX,Z=V.touches[0].clientY;else _=V.clientX,Z=V.clientY;return this._backend.eventToPosition(_,Z)},B.draw=function q(V,_,Z,Q,K){if(!Q)Q=this._options.fg;if(!K)K=this._options.bg;var $=V+","+_;if(this._data[$]=[V,_,Z,Q,K],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[$]=!0},B.drawOver=function q(V,_,Z,Q,K){var $=V+","+_,Y=this._data[$];if(Y)Y[2]=Z||Y[2],Y[3]=Q||Y[3],Y[4]=K||Y[4];else this.draw(V,_,Z,Q,K)},B.drawText=function q(V,_,Z,Q){var K=null,$=null,Y=V,X=_,L=1;if(!Q)Q=this._options.width-V;var H=c1(Z,Q);while(H.length){var F=H.shift();switch(F.type){case I_:var R=!1,j=!1,M=!1,u=!1;for(var I=0;I<F.value.length;I++){var T=F.value.charCodeAt(I),d=F.value.charAt(I);if(this._options.layout==="term"){var t=T>>8,w_=t===17||t>=46&&t<=159||t>=172&&t<=215||T>=43360&&T<=43391;if(w_){this.draw(Y+0,X,d,K,$),this.draw(Y+1,X,"\t",K,$),Y+=2;continue}}if(M=T>65280&&T<65377||T>65500&&T<65512||T>65518,R=d.charCodeAt(0)==32||d.charCodeAt(0)==12288,u&&!M&&!R)Y++;if(M&&!j)Y++;this.draw(Y++,X,d,K,$),j=R,u=M}break;case m1:K=F.value||null;break;case l1:$=F.value||null;break;case m_:Y=V,X++,L++;break}}return L},B._tick=function q(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var V in this._data)this._draw(V,!1)}else for(var _ in this._dirty)this._draw(_,!0);this._dirty=!1},B._draw=function q(V,_){var Z=this._data[V];if(Z[4]!=this._options.bg)_=!0;this._backend.draw(Z,_)},G}();s_.Rect=Z_,s_.Hex=p,s_.Tile=r,s_.TileGL=__,s_.Term=zw;var f0=function(){function G(q){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,q),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var V=0;V<this._options.order;V++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var B=G.prototype;return B.clear=function q(){this._data={},this._priorValues={}},B.generate=function q(){var V=[this._sample(this._prefix)];while(V[V.length-1]!=this._boundary)V.push(this._sample(V));return this._join(V.slice(0,-1))},B.observe=function q(V){var _=this._split(V);for(var Z=0;Z<_.length;Z++)this._priorValues[_[Z]]=this._options.prior;_=this._prefix.concat(_).concat(this._suffix);for(var Q=this._options.order;Q<_.length;Q++){var K=_.slice(Q-this._options.order,Q),$=_[Q];for(var Y=0;Y<K.length;Y++){var X=K.slice(Y);this._observeEvent(X,$)}}},B.getStats=function q(){var V=[],_=Object.keys(this._priorValues).length;_--,V.push("distinct samples: "+_);var Z=Object.keys(this._data).length,Q=0;for(var K in this._data)Q+=Object.keys(this._data[K]).length;return V.push("dictionary size (contexts): "+Z),V.push("dictionary size (events): "+Q),V.join(", ")},B._split=function q(V){return V.split(this._options.words?/\s+/:"")},B._join=function q(V){return V.join(this._options.words?" ":"")},B._observeEvent=function q(V,_){var Z=this._join(V);if(!(Z in this._data))this._data[Z]={};var Q=this._data[Z];if(!(_ in Q))Q[_]=0;Q[_]++},B._sample=function q(V){V=this._backoff(V);var _=this._join(V),Z=this._data[_],Q={};if(this._options.prior){for(var K in this._priorValues)Q[K]=this._priorValues[K];for(var $ in Z)Q[$]+=Z[$]}else Q=Z;return U.getWeightedValue(Q)},B._backoff=function q(V){if(V.length>this._options.order)V=V.slice(-this._options.order);else if(V.length<this._options.order)V=this._prefix.slice(0,this._options.order-V.length).concat(V);while(!(this._join(V)in this._data)&&V.length>0)V=V.slice(1);return V},G}(),qw=function(){function G(){this.heap=[],this.timestamp=0}var B=G.prototype;return B.lessThan=function q(V,_){return V.key==_.key?V.timestamp<_.timestamp:V.key<_.key},B.shift=function q(V){this.heap=this.heap.map(function(_){var{key:Z,value:Q,timestamp:K}=_;return{key:Z+V,value:Q,timestamp:K}})},B.len=function q(){return this.heap.length},B.push=function q(V,_){this.timestamp+=1;var Z=this.len();this.heap.push({value:V,timestamp:this.timestamp,key:_}),this.updateUp(Z)},B.pop=function q(){if(this.len()==0)throw new Error("no element to pop");var V=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return V},B.find=function q(V){for(var _=0;_<this.len();_++)if(V==this.heap[_].value)return this.heap[_];return null},B.remove=function q(V){var _=null;for(var Z=0;Z<this.len();Z++)if(V==this.heap[Z].value)_=Z;if(_===null)return!1;if(this.len()>1){var Q=this.heap.pop();if(Q.value!=V)this.heap[_]=Q,this.updateDown(_);return!0}else this.heap.pop();return!0},B.parentNode=function q(V){return Math.floor((V-1)/2)},B.leftChildNode=function q(V){return 2*V+1},B.rightChildNode=function q(V){return 2*V+2},B.existNode=function q(V){return V>=0&&V<this.heap.length},B.swap=function q(V,_){var Z=this.heap[V];this.heap[V]=this.heap[_],this.heap[_]=Z},B.minNode=function q(V){var _=V.filter(this.existNode.bind(this)),Z=_[0];for(var Q=v6(_),K;!(K=Q()).done;){var $=K.value;if(this.lessThan(this.heap[$],this.heap[Z]))Z=$}return Z},B.updateUp=function q(V){if(V==0)return;var _=this.parentNode(V);if(this.existNode(_)&&this.lessThan(this.heap[V],this.heap[_]))this.swap(V,_),this.updateUp(_)},B.updateDown=function q(V){var _=this.leftChildNode(V),Z=this.rightChildNode(V);if(!this.existNode(_))return;var Q=this.minNode([V,_,Z]);if(Q!=V)this.swap(V,Q),this.updateDown(Q)},B.debugPrint=function q(){console.log(this.heap)},G}(),Uw=function(){function G(){this._time=0,this._events=new qw}var B=G.prototype;return B.getTime=function q(){return this._time},B.clear=function q(){return this._events=new qw,this},B.add=function q(V,_){this._events.push(V,_)},B.get=function q(){if(!this._events.len())return null;var V=this._events.pop(),_=V.key,Z=V.value;if(_>0)this._time+=_,this._events.shift(-_);return Z},B.getEventTime=function q(V){var _=this._events.find(V);if(_){var Z=_.key;return Z}return},B.remove=function q(V){return this._events.remove(V)},G}(),y1=function(){function G(){this._queue=new Uw,this._repeat=[],this._current=null}var B=G.prototype;return B.getTime=function q(){return this._queue.getTime()},B.add=function q(V,_){if(_)this._repeat.push(V);return this},B.getTimeOf=function q(V){return this._queue.getEventTime(V)},B.clear=function q(){return this._queue.clear(),this._repeat=[],this._current=null,this},B.remove=function q(V){var _=this._queue.remove(V),Z=this._repeat.indexOf(V);if(Z!=-1)this._repeat.splice(Z,1);if(this._current==V)this._current=null;return _},B.next=function q(){return this._current=this._queue.get(),this._current},G}(),I0=function(G){V_(B,G);function B(){return G.apply(this,arguments)||this}var q=B.prototype;return q.add=function V(_,Z){return this._queue.add(_,0),G.prototype.add.call(this,_,Z)},q.next=function V(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return G.prototype.next.call(this)},B}(y1),g0=function(G){V_(B,G);function B(){return G.apply(this,arguments)||this}var q=B.prototype;return q.add=function V(_,Z,Q){return this._queue.add(_,Q!==void 0?Q:1/_.getSpeed()),G.prototype.add.call(this,_,Z)},q.next=function V(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return G.prototype.next.call(this)},B}(y1),T0=function(G){V_(B,G);function B(){var V=G.call(this)||this;return V._defaultDuration=1,V._duration=V._defaultDuration,V}var q=B.prototype;return q.add=function V(_,Z,Q){return this._queue.add(_,Q||this._defaultDuration),G.prototype.add.call(this,_,Z)},q.clear=function V(){return this._duration=this._defaultDuration,G.prototype.clear.call(this)},q.remove=function V(_){if(_==this._current)this._duration=this._defaultDuration;return G.prototype.remove.call(this,_)},q.next=function V(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return G.prototype.next.call(this)},q.setDuration=function V(_){if(this._current)this._duration=_;return this},B}(y1),h0={Simple:I0,Speed:g0,Action:T0},r1=function(){function G(q,V){if(V===void 0)V={};this._lightPasses=q,this._options=Object.assign({topology:8},V)}var B=G.prototype;return B._getCircle=function q(V,_,Z){var Q=[],K,$,Y;switch(this._options.topology){case 4:$=1,Y=[0,1],K=[B_[8][7],B_[8][1],B_[8][3],B_[8][5]];break;case 6:K=B_[6],$=1,Y=[-1,1];break;case 8:K=B_[4],$=2,Y=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var X=V+Y[0]*Z,L=_+Y[1]*Z;for(var H=0;H<K.length;H++)for(var F=0;F<Z*$;F++)Q.push([X,L]),X+=K[H][0],L+=K[H][1];return Q},G}(),x0=function(G){V_(B,G);function B(){return G.apply(this,arguments)||this}var q=B.prototype;return q.compute=function V(_,Z,Q,K){if(K(_,Z,0,1),!this._lightPasses(_,Z))return;var $=[],Y,X,L,H,F;for(var R=1;R<=Q;R++){var j=this._getCircle(_,Z,R),M=360/j.length;for(var u=0;u<j.length;u++){if(L=j[u][0],H=j[u][1],Y=M*(u-0.5),X=Y+M,F=!this._lightPasses(L,H),this._visibleCoords(Math.floor(Y),Math.ceil(X),F,$))K(L,H,R,1);if($.length==2&&$[0]==0&&$[1]==360)return}}},q._visibleCoords=function V(_,Z,Q,K){if(_<0){var $=this._visibleCoords(0,Z,Q,K),Y=this._visibleCoords(360+_,360,Q,K);return $||Y}var X=0;while(X<K.length&&K[X]<_)X++;if(X==K.length){if(Q)K.push(_,Z);return!0}var L=0;if(X%2){while(X<K.length&&K[X]<Z)X++,L++;if(L==0)return!1;if(Q)if(L%2)K.splice(X-L,L,Z);else K.splice(X-L,L);return!0}else{while(X<K.length&&K[X]<Z)X++,L++;if(_==K[X-L]&&L==1)return!1;if(Q)if(L%2)K.splice(X-L,L,_);else K.splice(X-L,L,_,Z);return!0}},B}(r1),m0=function(G){V_(B,G);function B(){return G.apply(this,arguments)||this}var q=B.prototype;return q.compute=function V(_,Z,Q,K){if(K(_,Z,0,1),!this._lightPasses(_,Z))return;var $=[],Y,X,L,H,F,R;for(var j=1;j<=Q;j++){var M=this._getCircle(_,Z,j),u=M.length;for(var I=0;I<u;I++){if(Y=M[I][0],X=M[I][1],H=[I?2*I-1:2*u-1,2*u],F=[2*I+1,2*u],L=!this._lightPasses(Y,X),R=this._checkVisibility(H,F,L,$),R)K(Y,X,j,R);if($.length==2&&$[0][0]==0&&$[1][0]==$[1][1])return}}},q._checkVisibility=function V(_,Z,Q,K){if(_[0]>Z[0]){var $=this._checkVisibility(_,[_[1],_[1]],Q,K),Y=this._checkVisibility([0,1],Z,Q,K);return($+Y)/2}var X=0,L=!1;while(X<K.length){var H=K[X],F=H[0]*_[1]-_[0]*H[1];if(F>=0){if(F==0&&!(X%2))L=!0;break}X++}var R=K.length,j=!1;while(R--){var M=K[R],u=Z[0]*M[1]-M[0]*Z[1];if(u>=0){if(u==0&&R%2)j=!0;break}}var I=!0;if(X==R&&(L||j))I=!1;else if(L&&j&&X+1==R&&R%2)I=!1;else if(X>R&&X%2)I=!1;if(!I)return 0;var T,d=R-X+1;if(d%2)if(X%2){var t=K[X];if(T=(Z[0]*t[1]-t[0]*Z[1])/(t[1]*Z[1]),Q)K.splice(X,d,Z)}else{var w_=K[R];if(T=(w_[0]*_[1]-_[0]*w_[1])/(_[1]*w_[1]),Q)K.splice(X,d,_)}else if(X%2){var q_=K[X],L_=K[R];if(T=(L_[0]*q_[1]-q_[0]*L_[1])/(q_[1]*L_[1]),Q)K.splice(X,d)}else{if(Q)K.splice(X,d,_,Z);return 1}var v_=(Z[0]*_[1]-_[0]*Z[1])/(_[1]*Z[1]);return T/v_},B}(r1),g_=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],l0=function(G){V_(B,G);function B(){return G.apply(this,arguments)||this}var q=B.prototype;return q.compute=function V(_,Z,Q,K){K(_,Z,0,1);for(var $=0;$<g_.length;$++)this._renderOctant(_,Z,g_[$],Q,K)},q.compute180=function V(_,Z,Q,K,$){$(_,Z,0,1);var Y=(K-1+8)%8,X=(K-2+8)%8,L=(K+1+8)%8;this._renderOctant(_,Z,g_[X],Q,$),this._renderOctant(_,Z,g_[Y],Q,$),this._renderOctant(_,Z,g_[K],Q,$),this._renderOctant(_,Z,g_[L],Q,$)},q.compute90=function V(_,Z,Q,K,$){$(_,Z,0,1);var Y=(K-1+8)%8;this._renderOctant(_,Z,g_[K],Q,$),this._renderOctant(_,Z,g_[Y],Q,$)},q._renderOctant=function V(_,Z,Q,K,$){this._castVisibility(_,Z,1,1,0,K+1,Q[0],Q[1],Q[2],Q[3],$)},q._castVisibility=function V(_,Z,Q,K,$,Y,X,L,H,F,R){if(K<$)return;for(var j=Q;j<=Y;j++){var M=-j-1,u=-j,I=!1,T=0;while(M<=0){M+=1;var d=_+M*X+u*L,t=Z+M*H+u*F,w_=(M-0.5)/(u+0.5),q_=(M+0.5)/(u-0.5);if(q_>K)continue;if(w_<$)break;if(M*M+u*u<Y*Y)R(d,t,j,1);if(!I){if(!this._lightPasses(d,t)&&j<Y)I=!0,this._castVisibility(_,Z,j+1,K,w_,Y,X,L,H,F,R),T=q_}else{if(!this._lightPasses(d,t)){T=q_;continue}I=!1,K=T}}if(I)break}},B}(r1),c0={DiscreteShadowcasting:x0,PreciseShadowcasting:m0,RecursiveShadowcasting:l0},l_=function(){function G(q,V){if(q===void 0)q=p1;if(V===void 0)V=d1;this._width=q,this._height=V}var B=G.prototype;return B._fillMap=function q(V){var _=[];for(var Z=0;Z<this._width;Z++){_.push([]);for(var Q=0;Q<this._height;Q++)_[Z].push(V)}return _},G}(),p0=function(G){V_(B,G);function B(){return G.apply(this,arguments)||this}var q=B.prototype;return q.create=function V(_){var Z=this._width-1,Q=this._height-1;for(var K=0;K<=Z;K++)for(var $=0;$<=Q;$++){var Y=K&&$&&K<Z&&$<Q;_(K,$,Y?0:1)}return this},B}(l_),$w=function(G){V_(B,G);function B(V,_){var Z=G.call(this,V,_)||this;return Z._rooms=[],Z._corridors=[],Z}var q=B.prototype;return q.getRooms=function V(){return this._rooms},q.getCorridors=function V(){return this._corridors},B}(l_),Bw=function G(){},W1=function(G){V_(B,G);function B(V,_,Z,Q,K,$){var Y=G.call(this)||this;if(Y._x1=V,Y._y1=_,Y._x2=Z,Y._y2=Q,Y._doors={},K!==void 0&&$!==void 0)Y.addDoor(K,$);return Y}B.createRandomAt=function V(_,Z,Q,K,$){var Y=$.roomWidth[0],X=$.roomWidth[1],L=U.getUniformInt(Y,X);Y=$.roomHeight[0],X=$.roomHeight[1];var H=U.getUniformInt(Y,X);if(Q==1){var F=Z-Math.floor(U.getUniform()*H);return new this(_+1,F,_+L,F+H-1,_,Z)}if(Q==-1){var R=Z-Math.floor(U.getUniform()*H);return new this(_-L,R,_-1,R+H-1,_,Z)}if(K==1){var j=_-Math.floor(U.getUniform()*L);return new this(j,Z+1,j+L-1,Z+H,_,Z)}if(K==-1){var M=_-Math.floor(U.getUniform()*L);return new this(M,Z-H,M+L-1,Z-1,_,Z)}throw new Error("dx or dy must be 1 or -1")},B.createRandomCenter=function V(_,Z,Q){var K=Q.roomWidth[0],$=Q.roomWidth[1],Y=U.getUniformInt(K,$);K=Q.roomHeight[0],$=Q.roomHeight[1];var X=U.getUniformInt(K,$),L=_-Math.floor(U.getUniform()*Y),H=Z-Math.floor(U.getUniform()*X),F=L+Y-1,R=H+X-1;return new this(L,H,F,R)},B.createRandom=function V(_,Z,Q){var K=Q.roomWidth[0],$=Q.roomWidth[1],Y=U.getUniformInt(K,$);K=Q.roomHeight[0],$=Q.roomHeight[1];var X=U.getUniformInt(K,$),L=_-Y-1,H=Z-X-1,F=1+Math.floor(U.getUniform()*L),R=1+Math.floor(U.getUniform()*H),j=F+Y-1,M=R+X-1;return new this(F,R,j,M)};var q=B.prototype;return q.addDoor=function V(_,Z){return this._doors[_+","+Z]=1,this},q.getDoors=function V(_){for(var Z in this._doors){var Q=Z.split(",");_(parseInt(Q[0]),parseInt(Q[1]))}return this},q.clearDoors=function V(){return this._doors={},this},q.addDoors=function V(_){var Z=this._x1-1,Q=this._x2+1,K=this._y1-1,$=this._y2+1;for(var Y=Z;Y<=Q;Y++)for(var X=K;X<=$;X++){if(Y!=Z&&Y!=Q&&X!=K&&X!=$)continue;if(_(Y,X))continue;this.addDoor(Y,X)}return this},q.debug=function V(){console.log("room",this._x1,this._y1,this._x2,this._y2)},q.isValid=function V(_,Z){var Q=this._x1-1,K=this._x2+1,$=this._y1-1,Y=this._y2+1;for(var X=Q;X<=K;X++)for(var L=$;L<=Y;L++)if(X==Q||X==K||L==$||L==Y){if(!_(X,L))return!1}else if(!Z(X,L))return!1;return!0},q.create=function V(_){var Z=this._x1-1,Q=this._x2+1,K=this._y1-1,$=this._y2+1,Y=0;for(var X=Z;X<=Q;X++)for(var L=K;L<=$;L++){if(X+","+L in this._doors)Y=2;else if(X==Z||X==Q||L==K||L==$)Y=1;else Y=0;_(X,L,Y)}},q.getCenter=function V(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},q.getLeft=function V(){return this._x1},q.getRight=function V(){return this._x2},q.getTop=function V(){return this._y1},q.getBottom=function V(){return this._y2},B}(Bw),n1=function(G){V_(B,G);function B(V,_,Z,Q){var K=G.call(this)||this;return K._startX=V,K._startY=_,K._endX=Z,K._endY=Q,K._endsWithAWall=!0,K}B.createRandomAt=function V(_,Z,Q,K,$){var Y=$.corridorLength[0],X=$.corridorLength[1],L=U.getUniformInt(Y,X);return new this(_,Z,_+Q*L,Z+K*L)};var q=B.prototype;return q.debug=function V(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},q.isValid=function V(_,Z){var Q=this._startX,K=this._startY,$=this._endX-Q,Y=this._endY-K,X=1+Math.max(Math.abs($),Math.abs(Y));if($)$=$/Math.abs($);if(Y)Y=Y/Math.abs(Y);var L=Y,H=-$,F=!0;for(var R=0;R<X;R++){var j=Q+R*$,M=K+R*Y;if(!Z(j,M))F=!1;if(!_(j+L,M+H))F=!1;if(!_(j-L,M-H))F=!1;if(!F){X=R,this._endX=j-$,this._endY=M-Y;break}}if(X==0)return!1;if(X==1&&_(this._endX+$,this._endY+Y))return!1;var u=!_(this._endX+$+L,this._endY+Y+H),I=!_(this._endX+$-L,this._endY+Y-H);if(this._endsWithAWall=_(this._endX+$,this._endY+Y),(u||I)&&this._endsWithAWall)return!1;return!0},q.create=function V(_){var Z=this._startX,Q=this._startY,K=this._endX-Z,$=this._endY-Q,Y=1+Math.max(Math.abs(K),Math.abs($));if(K)K=K/Math.abs(K);if($)$=$/Math.abs($);for(var X=0;X<Y;X++){var L=Z+X*K,H=Q+X*$;_(L,H,0)}return!0},q.createPriorityWalls=function V(_){if(!this._endsWithAWall)return;var Z=this._startX,Q=this._startY,K=this._endX-Z,$=this._endY-Q;if(K)K=K/Math.abs(K);if($)$=$/Math.abs($);var Y=$,X=-K;_(this._endX+K,this._endY+$),_(this._endX+Y,this._endY+X),_(this._endX-Y,this._endY-X)},B}(Bw),d0=function(G){V_(B,G);function B(V,_,Z){var Q=G.call(this,V,_)||this;return Q._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(Q._options,Z),Q._map=[],Q._dug=0,Q._roomAttempts=20,Q._corridorAttempts=20,Q._connected=[],Q._unconnected=[],Q._digCallback=Q._digCallback.bind(d_(Q)),Q._canBeDugCallback=Q._canBeDugCallback.bind(d_(Q)),Q._isWallCallback=Q._isWallCallback.bind(d_(Q)),Q}var q=B.prototype;return q.create=function V(_){var Z=Date.now();while(!0){var Q=Date.now();if(Q-Z>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(_)for(var K=0;K<this._width;K++)for(var $=0;$<this._height;$++)_(K,$,this._map[K][$]);return this},q._generateRooms=function V(){var _=this._width-2,Z=this._height-2,Q;do if(Q=this._generateRoom(),this._dug/(_*Z)>this._options.roomDugPercentage)break;while(Q)},q._generateRoom=function V(){var _=0;while(_<this._roomAttempts){_++;var Z=W1.createRandom(this._width,this._height,this._options);if(!Z.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Z.create(this._digCallback),this._rooms.push(Z),Z}return null},q._generateCorridors=function V(){var _=0;while(_<this._corridorAttempts){_++,this._corridors=[],this._map=this._fillMap(1);for(var Z=0;Z<this._rooms.length;Z++){var Q=this._rooms[Z];Q.clearDoors(),Q.create(this._digCallback)}if(this._unconnected=U.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var K=U.getItem(this._connected);if(!K)break;var $=this._closestRoom(this._unconnected,K);if(!$)break;var Y=this._closestRoom(this._connected,$);if(!Y)break;var X=this._connectRooms($,Y);if(!X)break;if(!this._unconnected.length)return!0}}return!1},q._closestRoom=function V(_,Z){var Q=1/0,K=Z.getCenter(),$=null;for(var Y=0;Y<_.length;Y++){var X=_[Y],L=X.getCenter(),H=L[0]-K[0],F=L[1]-K[1],R=H*H+F*F;if(R<Q)Q=R,$=X}return $},q._connectRooms=function V(_,Z){var Q=_.getCenter(),K=Z.getCenter(),$=K[0]-Q[0],Y=K[1]-Q[1],X,L,H,F,R,j,M;if(Math.abs($)<Math.abs(Y))H=Y>0?2:0,F=(H+2)%4,R=Z.getLeft(),j=Z.getRight(),M=0;else H=$>0?1:3,F=(H+2)%4,R=Z.getTop(),j=Z.getBottom(),M=1;if(X=this._placeInWall(_,H),!X)return!1;if(X[M]>=R&&X[M]<=j){L=X.slice();var u=0;switch(F){case 0:u=Z.getTop()-1;break;case 1:u=Z.getRight()+1;break;case 2:u=Z.getBottom()+1;break;case 3:u=Z.getLeft()-1;break}L[(M+1)%2]=u,this._digLine([X,L])}else if(X[M]<R-1||X[M]>j+1){var I=X[M]-K[M],T=0;switch(F){case 0:case 1:T=I<0?3:1;break;case 2:case 3:T=I<0?1:3;break}if(F=(F+T)%4,L=this._placeInWall(Z,F),!L)return!1;var d=[0,0];d[M]=X[M];var t=(M+1)%2;d[t]=L[t],this._digLine([X,d,L])}else{var w_=(M+1)%2;if(L=this._placeInWall(Z,F),!L)return!1;var q_=Math.round((L[w_]+X[w_])/2),L_=[0,0],v_=[0,0];L_[M]=X[M],L_[w_]=q_,v_[M]=L[M],v_[w_]=q_,this._digLine([X,L_,v_,L])}if(_.addDoor(X[0],X[1]),Z.addDoor(L[0],L[1]),M=this._unconnected.indexOf(_),M!=-1)this._unconnected.splice(M,1),this._connected.push(_);if(M=this._unconnected.indexOf(Z),M!=-1)this._unconnected.splice(M,1),this._connected.push(Z);return!0},q._placeInWall=function V(_,Z){var Q=[0,0],K=[0,0],$=0;switch(Z){case 0:K=[1,0],Q=[_.getLeft(),_.getTop()-1],$=_.getRight()-_.getLeft()+1;break;case 1:K=[0,1],Q=[_.getRight()+1,_.getTop()],$=_.getBottom()-_.getTop()+1;break;case 2:K=[1,0],Q=[_.getLeft(),_.getBottom()+1],$=_.getRight()-_.getLeft()+1;break;case 3:K=[0,1],Q=[_.getLeft()-1,_.getTop()],$=_.getBottom()-_.getTop()+1;break}var Y=[],X=-2;for(var L=0;L<$;L++){var H=Q[0]+L*K[0],F=Q[1]+L*K[1];Y.push(null);var R=this._map[H][F]==1;if(R){if(X!=L-1)Y[L]=[H,F]}else if(X=L,L)Y[L-1]=null}for(var j=Y.length-1;j>=0;j--)if(!Y[j])Y.splice(j,1);return Y.length?U.getItem(Y):null},q._digLine=function V(_){for(var Z=1;Z<_.length;Z++){var Q=_[Z-1],K=_[Z],$=new n1(Q[0],Q[1],K[0],K[1]);$.create(this._digCallback),this._corridors.push($)}},q._digCallback=function V(_,Z,Q){if(this._map[_][Z]=Q,Q==0)this._dug++},q._isWallCallback=function V(_,Z){if(_<0||Z<0||_>=this._width||Z>=this._height)return!1;return this._map[_][Z]==1},q._canBeDugCallback=function V(_,Z){if(_<1||Z<1||_+1>=this._width||Z+1>=this._height)return!1;return this._map[_][Z]==1},B}($w),y0=function(G){V_(B,G);function B(V,_,Z){var Q;if(Z===void 0)Z={};return Q=G.call(this,V,_)||this,Q._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},Q.setOptions(Z),Q._dirs=B_[Q._options.topology],Q._map=Q._fillMap(0),Q}var q=B.prototype;return q.randomize=function V(_){for(var Z=0;Z<this._width;Z++)for(var Q=0;Q<this._height;Q++)this._map[Z][Q]=U.getUniform()<_?1:0;return this},q.setOptions=function V(_){Object.assign(this._options,_)},q.set=function V(_,Z,Q){this._map[_][Z]=Q},q.create=function V(_){var Z=this._fillMap(0),Q=this._options.born,K=this._options.survive;for(var $=0;$<this._height;$++){var Y=1,X=0;if(this._options.topology==6)Y=2,X=$%2;for(var L=X;L<this._width;L+=Y){var H=this._map[L][$],F=this._getNeighbors(L,$);if(H&&K.indexOf(F)!=-1)Z[L][$]=1;else if(!H&&Q.indexOf(F)!=-1)Z[L][$]=1}}this._map=Z,_&&this._serviceCallback(_)},q._serviceCallback=function V(_){for(var Z=0;Z<this._height;Z++){var Q=1,K=0;if(this._options.topology==6)Q=2,K=Z%2;for(var $=K;$<this._width;$+=Q)_($,Z,this._map[$][Z])}},q._getNeighbors=function V(_,Z){var Q=0;for(var K=0;K<this._dirs.length;K++){var $=this._dirs[K],Y=_+$[0],X=Z+$[1];if(Y<0||Y>=this._width||X<0||X>=this._height)continue;Q+=this._map[Y][X]==1?1:0}return Q},q.connect=function V(_,Z,Q){if(!Z)Z=0;var K=[],$={},Y=1,X=[0,0];if(this._options.topology==6)Y=2,X=[0,1];for(var L=0;L<this._height;L++)for(var H=X[L%2];H<this._width;H+=Y)if(this._freeSpace(H,L,Z)){var F=[H,L];$[this._pointKey(F)]=F,K.push([H,L])}var R=K[U.getUniformInt(0,K.length-1)],j=this._pointKey(R),M={};M[j]=R,delete $[j],this._findConnected(M,$,[R],!1,Z);while(Object.keys($).length>0){var u=this._getFromTo(M,$),I=u[0],T=u[1],d={};d[this._pointKey(I)]=I,this._findConnected(d,$,[I],!0,Z);var t=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;t.call(this,T,I,M,$,Z,Q);for(var w_ in d){var q_=d[w_];this._map[q_[0]][q_[1]]=Z,M[w_]=q_,delete $[w_]}}_&&this._serviceCallback(_)},q._getFromTo=function V(_,Z){var Q=[0,0],K=[0,0],$,Y=Object.keys(_),X=Object.keys(Z);for(var L=0;L<5;L++){if(Y.length<X.length){var H=Y;K=_[H[U.getUniformInt(0,H.length-1)]],Q=this._getClosest(K,Z)}else{var F=X;Q=Z[F[U.getUniformInt(0,F.length-1)]],K=this._getClosest(Q,_)}if($=(Q[0]-K[0])*(Q[0]-K[0])+(Q[1]-K[1])*(Q[1]-K[1]),$<64)break}return[Q,K]},q._getClosest=function V(_,Z){var Q=null,K=null;for(var $ in Z){var Y=Z[$],X=(Y[0]-_[0])*(Y[0]-_[0])+(Y[1]-_[1])*(Y[1]-_[1]);if(K==null||X<K)K=X,Q=Y}return Q},q._findConnected=function V(_,Z,Q,K,$){while(Q.length>0){var Y=Q.splice(0,1)[0],X=void 0;if(this._options.topology==6)X=[[Y[0]+2,Y[1]],[Y[0]+1,Y[1]-1],[Y[0]-1,Y[1]-1],[Y[0]-2,Y[1]],[Y[0]-1,Y[1]+1],[Y[0]+1,Y[1]+1]];else X=[[Y[0]+1,Y[1]],[Y[0]-1,Y[1]],[Y[0],Y[1]+1],[Y[0],Y[1]-1]];for(var L=0;L<X.length;L++){var H=this._pointKey(X[L]);if(_[H]==null&&this._freeSpace(X[L][0],X[L][1],$)){if(_[H]=X[L],!K)delete Z[H];Q.push(X[L])}}}},q._tunnelToConnected=function V(_,Z,Q,K,$,Y){var X,L;if(Z[0]<_[0])X=Z,L=_;else X=_,L=Z;for(var H=X[0];H<=L[0];H++){this._map[H][X[1]]=$;var F=[H,X[1]],R=this._pointKey(F);Q[R]=F,delete K[R]}if(Y&&X[0]<L[0])Y(X,[L[0],X[1]]);var j=L[0];if(Z[1]<_[1])X=Z,L=_;else X=_,L=Z;for(var M=X[1];M<L[1];M++){this._map[j][M]=$;var u=[j,M],I=this._pointKey(u);Q[I]=u,delete K[I]}if(Y&&X[1]<L[1])Y([L[0],X[1]],[L[0],L[1]])},q._tunnelToConnected6=function V(_,Z,Q,K,$,Y){var X,L;if(Z[0]<_[0])X=Z,L=_;else X=_,L=Z;var H=X[0],F=X[1];while(!(H==L[0]&&F==L[1])){var R=2;if(F<L[1])F++,R=1;else if(F>L[1])F--,R=1;if(H<L[0])H+=R;else if(H>L[0])H-=R;else if(L[1]%2)H-=R;else H+=R;this._map[H][F]=$;var j=[H,F],M=this._pointKey(j);Q[M]=j,delete K[M]}if(Y)Y(Z,_)},q._freeSpace=function V(_,Z,Q){return _>=0&&_<this._width&&Z>=0&&Z<this._height&&this._map[_][Z]==Q},q._pointKey=function V(_){return _[0]+"."+_[1]},B}(l_),r0={room:W1,corridor:n1},n0=function(G){V_(B,G);function B(V,_,Z){var Q;if(Z===void 0)Z={};return Q=G.call(this,V,_)||this,Q._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Z),Q._features={room:4,corridor:4},Q._map=[],Q._featureAttempts=20,Q._walls={},Q._dug=0,Q._digCallback=Q._digCallback.bind(d_(Q)),Q._canBeDugCallback=Q._canBeDugCallback.bind(d_(Q)),Q._isWallCallback=Q._isWallCallback.bind(d_(Q)),Q._priorityWallCallback=Q._priorityWallCallback.bind(d_(Q)),Q}var q=B.prototype;return q.create=function V(_){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Z=(this._width-2)*(this._height-2);this._firstRoom();var Q=Date.now(),K;do{K=0;var $=Date.now();if($-Q>this._options.timeLimit)break;var Y=this._findWall();if(!Y)break;var X=Y.split(","),L=parseInt(X[0]),H=parseInt(X[1]),F=this._getDiggingDirection(L,H);if(!F)continue;var R=0;do if(R++,this._tryFeature(L,H,F[0],F[1])){this._removeSurroundingWalls(L,H),this._removeSurroundingWalls(L-F[0],H-F[1]);break}while(R<this._featureAttempts);for(var j in this._walls)if(this._walls[j]>1)K++}while(this._dug/Z<this._options.dugPercentage||K);if(this._addDoors(),_)for(var M=0;M<this._width;M++)for(var u=0;u<this._height;u++)_(M,u,this._map[M][u]);return this._walls={},this._map=[],this},q._digCallback=function V(_,Z,Q){if(Q==0||Q==2)this._map[_][Z]=0,this._dug++;else this._walls[_+","+Z]=1},q._isWallCallback=function V(_,Z){if(_<0||Z<0||_>=this._width||Z>=this._height)return!1;return this._map[_][Z]==1},q._canBeDugCallback=function V(_,Z){if(_<1||Z<1||_+1>=this._width||Z+1>=this._height)return!1;return this._map[_][Z]==1},q._priorityWallCallback=function V(_,Z){this._walls[_+","+Z]=2},q._firstRoom=function V(){var _=Math.floor(this._width/2),Z=Math.floor(this._height/2),Q=W1.createRandomCenter(_,Z,this._options);this._rooms.push(Q),Q.create(this._digCallback)},q._findWall=function V(){var _=[],Z=[];for(var Q in this._walls){var K=this._walls[Q];if(K==2)Z.push(Q);else _.push(Q)}var $=Z.length?Z:_;if(!$.length)return null;var Y=U.getItem($.sort());return delete this._walls[Y],Y},q._tryFeature=function V(_,Z,Q,K){var $=U.getWeightedValue(this._features),Y=r0[$],X=Y.createRandomAt(_,Z,Q,K,this._options);if(!X.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(X.create(this._digCallback),X instanceof W1)this._rooms.push(X);if(X instanceof n1)X.createPriorityWalls(this._priorityWallCallback),this._corridors.push(X);return!0},q._removeSurroundingWalls=function V(_,Z){var Q=B_[4];for(var K=0;K<Q.length;K++){var $=Q[K],Y=_+$[0],X=Z+$[1];delete this._walls[Y+","+X],Y=_+2*$[0],X=Z+2*$[1],delete this._walls[Y+","+X]}},q._getDiggingDirection=function V(_,Z){if(_<=0||Z<=0||_>=this._width-1||Z>=this._height-1)return null;var Q=null,K=B_[4];for(var $=0;$<K.length;$++){var Y=K[$],X=_+Y[0],L=Z+Y[1];if(!this._map[X][L]){if(Q)return null;Q=Y}}if(!Q)return null;return[-Q[0],-Q[1]]},q._addDoors=function V(){var _=this._map;function Z($,Y){return _[$][Y]==1}for(var Q=0;Q<this._rooms.length;Q++){var K=this._rooms[Q];K.clearDoors(),K.addDoors(Z)}},B}($w);function Gw(G,B,q){q[B[G+1]]=q[G],B[q[G]]=B[G+1],q[G]=G+1,B[G+1]=G}function Xw(G,B,q){q[B[G]]=q[G],B[q[G]]=B[G],q[G]=G,B[G]=G}var s0=function(G){V_(B,G);function B(){return G.apply(this,arguments)||this}var q=B.prototype;return q.create=function V(_){var Z=this._fillMap(1),Q=Math.ceil((this._width-2)/2),K=0.375,$=[],Y=[];for(var X=0;X<Q;X++)$.push(X),Y.push(X);$.push(Q-1);var L;for(L=1;L+3<this._height;L+=2)for(var H=0;H<Q;H++){var F=2*H+1,R=L;if(Z[F][R]=0,H!=$[H+1]&&U.getUniform()>K)Gw(H,$,Y),Z[F+1][R]=0;if(H!=$[H]&&U.getUniform()>K)Xw(H,$,Y);else Z[F][R+1]=0}for(var j=0;j<Q;j++){var M=2*j+1,u=L;if(Z[M][u]=0,j!=$[j+1]&&(j==$[j]||U.getUniform()>K))Gw(j,$,Y),Z[M+1][u]=0;Xw(j,$,Y)}for(var I=0;I<this._width;I++)for(var T=0;T<this._height;T++)_(I,T,Z[I][T]);return this},B}(l_),o0=function(G){V_(B,G);function B(){var V=G.apply(this,arguments)||this;return V._stack=[],V._map=[],V}var q=B.prototype;return q.create=function V(_){var Z=this._width,Q=this._height;this._map=[];for(var K=0;K<Z;K++){this._map.push([]);for(var $=0;$<Q;$++){var Y=K==0||$==0||K+1==Z||$+1==Q;this._map[K].push(Y?1:0)}}this._stack=[[1,1,Z-2,Q-2]],this._process();for(var X=0;X<Z;X++)for(var L=0;L<Q;L++)_(X,L,this._map[X][L]);return this._map=[],this},q._process=function V(){while(this._stack.length){var _=this._stack.shift();this._partitionRoom(_)}},q._partitionRoom=function V(_){var Z=[],Q=[];for(var K=_[0]+1;K<_[2];K++){var $=this._map[K][_[1]-1],Y=this._map[K][_[3]+1];if($&&Y&&!(K%2))Z.push(K)}for(var X=_[1]+1;X<_[3];X++){var L=this._map[_[0]-1][X],H=this._map[_[2]+1][X];if(L&&H&&!(X%2))Q.push(X)}if(!Z.length||!Q.length)return;var F=U.getItem(Z),R=U.getItem(Q);this._map[F][R]=1;var j=[],M=[];j.push(M);for(var u=_[0];u<F;u++)if(this._map[u][R]=1,u%2)M.push([u,R]);M=[],j.push(M);for(var I=F+1;I<=_[2];I++)if(this._map[I][R]=1,I%2)M.push([I,R]);M=[],j.push(M);for(var T=_[1];T<R;T++)if(this._map[F][T]=1,T%2)M.push([F,T]);M=[],j.push(M);for(var d=R+1;d<=_[3];d++)if(this._map[F][d]=1,d%2)M.push([F,d]);var t=U.getItem(j);for(var w_=0;w_<j.length;w_++){var q_=j[w_];if(q_==t)continue;var L_=U.getItem(q_);this._map[L_[0]][L_[1]]=0}this._stack.push([_[0],_[1],F-1,R-1]),this._stack.push([F+1,_[1],_[2],R-1]),this._stack.push([_[0],R+1,F-1,_[3]]),this._stack.push([F+1,R+1,_[2],_[3]])},B}(l_),a0=function(G){V_(B,G);function B(V,_,Z){var Q;if(Z===void 0)Z=0;return Q=G.call(this,V,_)||this,Q._regularity=Z,Q._map=[],Q}var q=B.prototype;return q.create=function V(_){var Z=this._width,Q=this._height,K=this._fillMap(1);Z-=Z%2?1:2,Q-=Q%2?1:2;var $=0,Y=0,X=0,L=0,H=0,F=!1,R=[[0,0],[0,0],[0,0],[0,0]];do{if($=1+2*Math.floor(U.getUniform()*(Z-1)/2),Y=1+2*Math.floor(U.getUniform()*(Q-1)/2),!H)K[$][Y]=0;if(!K[$][Y]){this._randomize(R);do{if(Math.floor(U.getUniform()*(this._regularity+1))==0)this._randomize(R);F=!0;for(var j=0;j<4;j++)if(X=$+R[j][0]*2,L=Y+R[j][1]*2,this._isFree(K,X,L,Z,Q)){K[X][L]=0,K[$+R[j][0]][Y+R[j][1]]=0,$=X,Y=L,F=!1,H++;break}}while(!F)}}while(H+1<Z*Q/4);for(var M=0;M<this._width;M++)for(var u=0;u<this._height;u++)_(M,u,K[M][u]);return this._map=[],this},q._randomize=function V(_){for(var Z=0;Z<4;Z++)_[Z][0]=0,_[Z][1]=0;switch(Math.floor(U.getUniform()*4)){case 0:_[0][0]=-1,_[1][0]=1,_[2][1]=-1,_[3][1]=1;break;case 1:_[3][0]=-1,_[2][0]=1,_[1][1]=-1,_[0][1]=1;break;case 2:_[2][0]=-1,_[3][0]=1,_[0][1]=-1,_[1][1]=1;break;case 3:_[1][0]=-1,_[0][0]=1,_[3][1]=-1,_[2][1]=1;break}},q._isFree=function V(_,Z,Q,K,$){if(Z<1||Q<1||Z>=K||Q>=$)return!1;return _[Z][Q]},B}(l_),i0=function(G){V_(B,G);function B(V,_,Z){var Q=G.call(this,V,_)||this;if(Q.map=[],Q.rooms=[],Q.connectedCells=[],Z=Object.assign({cellWidth:3,cellHeight:3},Z),!Z.hasOwnProperty("roomWidth"))Z.roomWidth=Q._calculateRoomSize(Q._width,Z.cellWidth);if(!Z.hasOwnProperty("roomHeight"))Z.roomHeight=Q._calculateRoomSize(Q._height,Z.cellHeight);return Q._options=Z,Q}var q=B.prototype;return q.create=function V(_){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),_)for(var Z=0;Z<this._width;Z++)for(var Q=0;Q<this._height;Q++)_(Z,Q,this.map[Z][Q]);return this},q._calculateRoomSize=function V(_,Z){var Q=Math.floor(_/Z*0.8),K=Math.floor(_/Z*0.25);if(K<2)K=2;if(Q<2)Q=2;return[K,Q]},q._initRooms=function V(){for(var _=0;_<this._options.cellWidth;_++){this.rooms.push([]);for(var Z=0;Z<this._options.cellHeight;Z++)this.rooms[_].push({x:0,y:0,width:0,height:0,connections:[],cellx:_,celly:Z})}},q._connectRooms=function V(){var _=U.getUniformInt(0,this._options.cellWidth-1),Z=U.getUniformInt(0,this._options.cellHeight-1),Q,K,$,Y=!1,X,L,H;do{H=[0,2,4,6],H=U.shuffle(H);do{if(Y=!1,Q=H.pop(),K=_+B_[8][Q][0],$=Z+B_[8][Q][1],K<0||K>=this._options.cellWidth)continue;if($<0||$>=this._options.cellHeight)continue;if(X=this.rooms[_][Z],X.connections.length>0){if(X.connections[0][0]==K&&X.connections[0][1]==$)break}if(L=this.rooms[K][$],L.connections.length==0)L.connections.push([_,Z]),this.connectedCells.push([K,$]),_=K,Z=$,Y=!0}while(H.length>0&&Y==!1)}while(H.length>0)},q._connectUnconnectedRooms=function V(){var _=this._options.cellWidth,Z=this._options.cellHeight;this.connectedCells=U.shuffle(this.connectedCells);var Q,K,$;for(var Y=0;Y<this._options.cellWidth;Y++)for(var X=0;X<this._options.cellHeight;X++)if(Q=this.rooms[Y][X],Q.connections.length==0){var L=[0,2,4,6];L=U.shuffle(L),$=!1;do{var H=L.pop(),F=Y+B_[8][H][0],R=X+B_[8][H][1];if(F<0||F>=_||R<0||R>=Z)continue;if(K=this.rooms[F][R],$=!0,K.connections.length==0)break;for(var j=0;j<K.connections.length;j++)if(K.connections[j][0]==Y&&K.connections[j][1]==X){$=!1;break}if($)break}while(L.length);if($)Q.connections.push([K.cellx,K.celly]);else console.log("-- Unable to connect room.")}},q._createRandomRoomConnections=function V(){},q._createRooms=function V(){var _=this._width,Z=this._height,Q=this._options.cellWidth,K=this._options.cellHeight,$=Math.floor(this._width/Q),Y=Math.floor(this._height/K),X,L,H=this._options.roomWidth,F=this._options.roomHeight,R,j,M;for(var u=0;u<Q;u++)for(var I=0;I<K;I++){if(R=$*u,j=Y*I,R==0)R=1;if(j==0)j=1;if(X=U.getUniformInt(H[0],H[1]),L=U.getUniformInt(F[0],F[1]),I>0){M=this.rooms[u][I-1];while(j-(M.y+M.height)<3)j++}if(u>0){M=this.rooms[u-1][I];while(R-(M.x+M.width)<3)R++}var T=Math.round(U.getUniformInt(0,$-X)/2),d=Math.round(U.getUniformInt(0,Y-L)/2);while(R+T+X>=_)if(T)T--;else X--;while(j+d+L>=Z)if(d)d--;else L--;R=R+T,j=j+d,this.rooms[u][I].x=R,this.rooms[u][I].y=j,this.rooms[u][I].width=X,this.rooms[u][I].height=L;for(var t=R;t<R+X;t++)for(var w_=j;w_<j+L;w_++)this.map[t][w_]=0}},q._getWallPosition=function V(_,Z){var Q,K,$;if(Z==1||Z==3){if(Q=U.getUniformInt(_.x+1,_.x+_.width-2),Z==1)K=_.y-2,$=K+1;else K=_.y+_.height+1,$=K-1;this.map[Q][$]=0}else{if(K=U.getUniformInt(_.y+1,_.y+_.height-2),Z==2)Q=_.x+_.width+1,$=Q-1;else Q=_.x-2,$=Q+1;this.map[$][K]=0}return[Q,K]},q._drawCorridor=function V(_,Z){var Q=Z[0]-_[0],K=Z[1]-_[1],$=_[0],Y=_[1],X,L,H,F,R=[],j=Math.abs(Q),M=Math.abs(K),u=U.getUniform(),I=u,T=1-u;if(L=Q>0?2:6,H=K>0?4:0,j<M)X=Math.ceil(M*I),R.push([H,X]),R.push([L,j]),X=Math.floor(M*T),R.push([H,X]);else X=Math.ceil(j*I),R.push([L,X]),R.push([H,M]),X=Math.floor(j*T),R.push([L,X]);this.map[$][Y]=0;while(R.length>0){F=R.pop();while(F[1]>0)$+=B_[8][F[0]][0],Y+=B_[8][F[0]][1],this.map[$][Y]=0,F[1]=F[1]-1}},q._createCorridors=function V(){var _=this._options.cellWidth,Z=this._options.cellHeight,Q,K,$,Y,X;for(var L=0;L<_;L++)for(var H=0;H<Z;H++){Q=this.rooms[L][H];for(var F=0;F<Q.connections.length;F++){if(K=Q.connections[F],$=this.rooms[K[0]][K[1]],$.cellx>Q.cellx)Y=2,X=4;else if($.cellx<Q.cellx)Y=4,X=2;else if($.celly>Q.celly)Y=3,X=1;else Y=1,X=3;this._drawCorridor(this._getWallPosition(Q,Y),this._getWallPosition($,X))}}},B}(l_),t0={Arena:p0,Uniform:d0,Cellular:y0,Digger:n0,EllerMaze:s0,DividedMaze:o0,IceyMaze:a0,Rogue:i0},e0=function G(){},_6=0.5*(Math.sqrt(3)-1),V1=(3-Math.sqrt(3))/6,w6=function(G){V_(B,G);function B(V){var _;if(V===void 0)V=256;_=G.call(this)||this,_._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Z=[];for(var Q=0;Q<V;Q++)Z.push(Q);Z=U.shuffle(Z),_._perms=[],_._indexes=[];for(var K=0;K<2*V;K++)_._perms.push(Z[K%V]),_._indexes.push(_._perms[K]%_._gradients.length);return _}var q=B.prototype;return q.get=function V(_,Z){var Q=this._perms,K=this._indexes,$=Q.length/2,Y=0,X=0,L=0,H,F=(_+Z)*_6,R=Math.floor(_+F),j=Math.floor(Z+F),M=(R+j)*V1,u=R-M,I=j-M,T=_-u,d=Z-I,t,w_;if(T>d)t=1,w_=0;else t=0,w_=1;var q_=T-t+V1,L_=d-w_+V1,v_=T-1+2*V1,s1=d-1+2*V1,o1=O(R,$),a1=O(j,$),K1=0.5-T*T-d*d;if(K1>=0){K1*=K1,H=K[o1+Q[a1]];var Lw=this._gradients[H];Y=K1*K1*(Lw[0]*T+Lw[1]*d)}var z1=0.5-q_*q_-L_*L_;if(z1>=0){z1*=z1,H=K[o1+t+Q[a1+w_]];var Ww=this._gradients[H];X=z1*z1*(Ww[0]*q_+Ww[1]*L_)}var q1=0.5-v_*v_-s1*s1;if(q1>=0){q1*=q1,H=K[o1+1+Q[a1+1]];var Hw=this._gradients[H];L=q1*q1*(Hw[0]*v_+Hw[1]*s1)}return 70*(Y+X+L)},B}(e0),Z6={Simplex:w6},Yw=function(){function G(q,V,_,Z){if(Z===void 0)Z={};if(this._toX=q,this._toY=V,this._passableCallback=_,this._options=Object.assign({topology:8},Z),this._dirs=B_[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var B=G.prototype;return B._getNeighbors=function q(V,_){var Z=[];for(var Q=0;Q<this._dirs.length;Q++){var K=this._dirs[Q],$=V+K[0],Y=_+K[1];if(!this._passableCallback($,Y))continue;Z.push([$,Y])}return Z},G}(),Q6=function(G){V_(B,G);function B(V,_,Z,Q){var K=G.call(this,V,_,Z,Q)||this;return K._computed={},K._todo=[],K._add(V,_,null),K}var q=B.prototype;return q.compute=function V(_,Z,Q){var K=_+","+Z;if(!(K in this._computed))this._compute(_,Z);if(!(K in this._computed))return;var $=this._computed[K];while($)Q($.x,$.y),$=$.prev},q._compute=function V(_,Z){while(this._todo.length){var Q=this._todo.shift();if(Q.x==_&&Q.y==Z)return;var K=this._getNeighbors(Q.x,Q.y);for(var $=0;$<K.length;$++){var Y=K[$],X=Y[0],L=Y[1],H=X+","+L;if(H in this._computed)continue;this._add(X,L,Q)}}},q._add=function V(_,Z,Q){var K={x:_,y:Z,prev:Q};this._computed[_+","+Z]=K,this._todo.push(K)},B}(Yw),J6=function(G){V_(B,G);function B(V,_,Z,Q){var K;if(Q===void 0)Q={};return K=G.call(this,V,_,Z,Q)||this,K._todo=[],K._done={},K}var q=B.prototype;return q.compute=function V(_,Z,Q){this._todo=[],this._done={},this._fromX=_,this._fromY=Z,this._add(this._toX,this._toY,null);while(this._todo.length){var K=this._todo.shift(),$=K.x+","+K.y;if($ in this._done)continue;if(this._done[$]=K,K.x==_&&K.y==Z)break;var Y=this._getNeighbors(K.x,K.y);for(var X=0;X<Y.length;X++){var L=Y[X],H=L[0],F=L[1],R=H+","+F;if(R in this._done)continue;this._add(H,F,K)}}var j=this._done[_+","+Z];if(!j)return;while(j)Q(j.x,j.y),j=j.prev},q._add=function V(_,Z,Q){var K=this._distance(_,Z),$={x:_,y:Z,prev:Q,g:Q?Q.g+1:0,h:K},Y=$.g+$.h;for(var X=0;X<this._todo.length;X++){var L=this._todo[X],H=L.g+L.h;if(Y<H||Y==H&&K<L.h){this._todo.splice(X,0,$);return}}this._todo.push($)},q._distance=function V(_,Z){switch(this._options.topology){case 4:return Math.abs(_-this._fromX)+Math.abs(Z-this._fromY);case 6:var Q=Math.abs(_-this._fromX),K=Math.abs(Z-this._fromY);return K+Math.max(0,(Q-K)/2);case 8:return Math.max(Math.abs(_-this._fromX),Math.abs(Z-this._fromY))}},B}(Yw),V6={Dijkstra:Q6,AStar:J6},K6=function(){function G(q){this._scheduler=q,this._lock=1}var B=G.prototype;return B.start=function q(){return this.unlock()},B.lock=function q(){return this._lock++,this},B.unlock=function q(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var V=this._scheduler.next();if(!V)return this.lock();var _=V.act();if(_&&_.then)this.lock(),_.then(this.unlock.bind(this))}return this},G}(),z6=function(){function G(q,V){if(V===void 0)V={};this._reflectivityCallback=q,this._options={},V=Object.assign({passes:1,emissionThreshold:100,range:10},V),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(V)}var B=G.prototype;return B.setOptions=function q(V){if(Object.assign(this._options,V),V&&V.range)this.reset();return this},B.setFOV=function q(V){return this._fov=V,this._fovCache={},this},B.setLight=function q(V,_,Z){var Q=V+","+_;if(Z)this._lights[Q]=typeof Z=="string"?c(Z):Z;else delete this._lights[Q];return this},B.clearLights=function q(){this._lights={}},B.reset=function q(){return this._reflectivityCache={},this._fovCache={},this},B.compute=function q(V){var _={},Z={},Q={};for(var K in this._lights){var $=this._lights[K];Z[K]=[0,0,0],h(Z[K],$)}for(var Y=0;Y<this._options.passes;Y++){if(this._emitLight(Z,Q,_),Y+1==this._options.passes)continue;Z=this._computeEmitters(Q,_)}for(var X in Q){var L=X.split(","),H=parseInt(L[0]),F=parseInt(L[1]);V(H,F,Q[X])}return this},B._emitLight=function q(V,_,Z){for(var Q in V){var K=Q.split(","),$=parseInt(K[0]),Y=parseInt(K[1]);this._emitLightFromCell($,Y,V[Q],_),Z[Q]=1}return this},B._computeEmitters=function q(V,_){var Z={};for(var Q in V){if(Q in _)continue;var K=V[Q],$=void 0;if(Q in this._reflectivityCache)$=this._reflectivityCache[Q];else{var Y=Q.split(","),X=parseInt(Y[0]),L=parseInt(Y[1]);$=this._reflectivityCallback(X,L),this._reflectivityCache[Q]=$}if($==0)continue;var H=[0,0,0],F=0;for(var R=0;R<3;R++){var j=Math.round(K[R]*$);H[R]=j,F+=j}if(F>this._options.emissionThreshold)Z[Q]=H}return Z},B._emitLightFromCell=function q(V,_,Z,Q){var K=V+","+_,$;if(K in this._fovCache)$=this._fovCache[K];else $=this._updateFOV(V,_);for(var Y in $){var X=$[Y],L=void 0;if(Y in Q)L=Q[Y];else L=[0,0,0],Q[Y]=L;for(var H=0;H<3;H++)L[H]+=Math.round(Z[H]*X)}return this},B._updateFOV=function q(V,_){var Z=V+","+_,Q={};this._fovCache[Z]=Q;var K=this._options.range;function $(Y,X,L,H){var F=Y+","+X,R=H*(1-L/K);if(R==0)return;Q[F]=R}return this._fov.compute(V,_,K,$.bind(this)),Q},G}(),q6=m,U6=a,$6=u0;w.Color=U6,w.DEFAULT_HEIGHT=d1,w.DEFAULT_WIDTH=p1,w.DIRS=B_,w.Display=s_,w.Engine=K6,w.EventQueue=Uw,w.FOV=c0,w.KEYS=N0,w.Lighting=z6,w.Map=t0,w.Noise=Z6,w.Path=V6,w.RNG=U,w.Scheduler=h0,w.StringGenerator=f0,w.Text=$6,w.Util=q6,Object.defineProperty(w,"__esModule",{value:!0})})});var W6=typeof window!=="undefined"?window.innerWidth:0,H6=typeof window!=="undefined"?window.innerHeight:0;var y={cameraWidth:Math.floor(W6/16),cameraHeight:Math.floor(H6/16),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:16,highlightFriendEnemy:!0,showUI:!0,showTooltip:!0,showEnergy:1,uiEffectsMaxDisplaySize:8,zoom:1},t1={WIDTH:1024,HEIGHT:1024},G_={width:Math.floor(y.cameraWidth*(1/y.zoom)),height:Math.floor(y.cameraHeight*(1/y.zoom)),bg:"transparent",fontSize:Math.floor(y.fontSize*y.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function Pw(w,J){let z=w.entities[J];return`DEBUG: ${J} at ${z.mapId},${z.x},${z.y}`}class H1{name;description;energyDelta;constructor(w,J,z=0){this.name=w,this.description=J,this.energyDelta=z}}class U1{name;description;constructor(w,J){this.name=w,this.description=J}}class R_{key;description;constructor(w,J){this.key=w,this.description=J}}class A_{name;description;tooltip;icon;constructor(w,J,z="",U){this.name=w,this.description=J,this.tooltip=z,this.icon=U}}class W_{name;description;icon;color;energyMax;unlockCondition;constructor(w,J,z,U=100){this.name=w,this.description=J,this.icon=z,this.energyMax=U,this.color="white",this.unlockCondition=null}}class T_{name;description;color;friendly;hostile;constructor(w,J,z,U,W){this.name=w,this.description=J,this.color=z,this.friendly=U,this.hostile=W}}class $_{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(w,J,z,U="cyberyellow",W=0,D=0,O=0,C=0,A=0,N=[]){this.name=w,this.description=J,this.icon=z,this.color=U,this.energyDelta=W,this.matter=D,this.gold=O,this.damage=C,this.energyCost=A,this.effects=N}}class s{name;description;tooltip;icon;isBlocking;isSpace;isWater;energyDelta;constructor(w,J,z="",U=null,W={}){this.name=w,this.description=J,this.tooltip=z,this.icon=U,this.isBlocking=W.isBlocking||!1,this.isSpace=W.isSpace||!1,this.isWater=W.isWater||!1,this.energyDelta=W.energyDelta||0}}var P={actions:{Enter:new H1("Enter","Enter a portal or plant atmosphere"),Launch:new H1("Launch","Launch into space",-10),Wait:new H1("Wait","Wait one turn in place")},ais:{aggrorange:new U1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new U1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new U1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new U1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",red:"#f00",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new R_("N","Move/interact/combat north"),E:new R_("E","Move/interact/combat east"),S:new R_("S","Move/interact/combat south"),W:new R_("W","Move/interact/combat west"),A:new R_("A","Primary action, confirm"),B:new R_("B","Take a break, cancel"),"1":new R_("1","Secondary action, first quick slot"),"2":new R_("2","Tertiary action, second quick slot"),M:new R_("M","Menu"),"#":new R_("#","Open prompt")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{BioAbsorber:new A_("BioAbsorber","Gain energy while on trees","[Bio Absorber]: Regenerates energy on trees","fx_ba"),Recharger:new A_("Recharger","Doubles energy gained from chargepads","[Recharger]: Doubles energy gained from chargepads","fx_re"),Recuperation:new A_("Recuperation","Reduces tool energy cost","[Recuperation]: Reduces tool energy cost (max. -1)","fx_cu"),RockCrusher:new A_("RockCrusher","Mines rock","[Rock Crusher]: Enables rock mining","fx_rc"),Screwing:new A_("Screwing","Unscrews the sewer portal covers","[Screwing]: Opens sewer gates","fx_sc"),WallCrusher:new A_("WallCrusher","Tears down weak walls","[Wall Crusher]: Enables weak wall destruction","fx_wc"),WaterImmunity:new A_("WaterImmunity","No damage taken from water","[Water Immunity]: Prevents water damage","fx_wi"),WaterShield:new A_("WaterShield","Reduces damage taken from water","[Water Shield]: Reduces water damage","fx_ws")},entities:{movableboulder:new W_("Boulder","A movable rock","o",2),movablebox:new W_("Box","A movable box","x",2),Spirit:new W_("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new W_("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new W_("WorkBot","Basic factory worker","B"),Cleaner:new W_("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new W_("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new W_("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new W_("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new W_("Graffiti","Writing on the wall","zy",2),Valkyrie:new W_("Valkyrie","Airbourne war logistics","V",160),Pioneer:new W_("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new W_("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new T_("Critters","Small pests","cyberyellow",new Set,new Set(["*"])),Drifters:new T_("Drifters","Bots disconnected from a mothership/overmind","cybergreen",new Set,new Set(["Guardians","Workers"])),Enraged:new T_("Enraged","Always hostile faction","cybermagenta",new Set,new Set(["*"])),Spirits:new T_("Spirits","Default player faction","white",new Set,new Set),Pyrates:new T_("Pyrates","Default enemy faction","cybermagenta",new Set,new Set(["*"])),Guardians:new T_("Guardians","Bot station guardians","cybercyan",new Set,new Set(["Workers"])),Workers:new T_("Workers","Bot station workers","white",new Set,new Set(["Guardians"]))},items:{battery:new $_("Battery","Increases maximum energy","b","cyberyellow",10),chest:new $_("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new $_("Energy","Energy pack","e","cyberyellow",10),gold:new $_("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new $_("Goo","A minor matter source","goo","gray",0,1),junk:new $_("Junk","Broken bot","%","gray",0,1),matter:new $_("Matter","A pile of stuff","m","gray",0,100),broom:new $_("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),cheat:new $_("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","RockCrusher","Screwing","WallCrusher","WaterShield"]),hammer:new $_("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["WallCrusher"]),pickaxe:new $_("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["RockCrusher"]),ratbite:new $_("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["WaterImmunity"]),shocker:new $_("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new $_("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["WaterShield"]),upgradeBioAbsorber:new $_("Bio Absorber Upgrade","Grants [BioAbsorber] effect","iu_ba","cyberyellow",0,0,0,0,0,["BioAbsorber"]),upgradeRecuperation:new $_("Recuperation Upgrade","Grants [Recuperation] effect","iu_cu","cyberyellow",0,0,0,0,0,["Recuperation"]),wrench:new $_("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:new s("void","Just nothing here","","."),voidtrue:new s("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new s("voidhidden","Looks like a wall, but isn't!","",".#"),water:new s("water","Rust and other dangers await","Water","~",{isWater:!0,energyDelta:-2}),watersewage:new s("watersewage","Rust, goo and other dangers await","Sewage Water","~~",{isWater:!0,energyDelta:-4}),drain:new s("drain","Drains gold, matter and some of your energy","Drain","*",{energyDelta:-5}),rock:new s("rock","Hidden treasures may await","Rock","'",{isBlocking:!0}),tree:new s("tree","Lots of trees make a forest","Tree","t"),wall:new s("wall","A strong wall","","#",{isBlocking:!0}),wallstatueaerobot:new s("wallstatueaerobot","A small statue looking like an AeroBot","","sa",{isBlocking:!0}),wallstatuecleaner:new s("wallstatuecleaner","A small statue looking like a Cleaner","","sc",{isBlocking:!0}),wallstatuepioneer:new s("wallstatuepioneer","A small statue looking like a Pioneer","","sp",{isBlocking:!0}),wallstatueworkbot:new s("wallstatueworkbot","A small statue looking like a WorkBot","","sb",{isBlocking:!0}),wallweak:new s("wallweak","A weakened wall","Weak Wall","+",{isBlocking:!0}),chargepad:new s("chargepad","Recharges energy and health","Chargepad","=",{energyDelta:2}),movenorth:new s("movenorth","Moves you north","","^^"),moveeast:new s("moveeast","Moves you east","",">>"),movesouth:new s("movesouth","Moves you south","","vv"),movewest:new s("movewest","Moves you west","","<<"),portal:new s("portal","Gateway to another map","Portal","O"),portalclosed:new s("portalclosed","Closed gateway to another map","Closed Portal","Oc",{isBlocking:!0}),portalhidden:new s("portalhidden","Hidden gateway to another map","","Oh"),portallauncher:new s("portallauncher","Launches into space","Launch to Space","Ol"),portalsewers:new s("portalsewers","Needs some tool to open","Sewer Gate","#~",{isBlocking:!0}),portalstartworkbot:new s("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB"),portalstartaerobot:new s("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA"),"_portalstart?":new s("_portalstart?","Not unlocked, yet!","?","O?"),spacerock:new s("spacerock","Mountains as seen from space, non-blocking!","","'s",{isSpace:!0}),spacetree:new s("spacetree","Forest as seen from space","","ts",{isSpace:!0}),spacewater:new s("spacewater","Water as seen from space, not dangerous!","","~s",{isSpace:!0}),spacevoid:new s("spacevoid","Void/ground as seen from space","",".s",{isSpace:!0}),spacevoidstarwhite:new s("spacevoidstarwhite","Space with a white background star","",".f"),spacevoidstaryellow:new s("spacevoidstaryellow","Space with a yellow background star","",".y"),star:new s("star","It's hot, really hot!","Star","§",{energyDelta:-100}),terminal:new s("terminal","A computer terminal","Terminal","$"),tv:new s("tv","A big billboard screen","TV","!",{isBlocking:!0})},uitexts:{}};function Fw(w,J){return Object.values(w.effects[J])}function j_(w,J,z){return!!w.effects[J]&&Object.hasOwn(w.effects[J],z.name)}function Rw(w){return w}function jw(w,J){if(J.oldEquippedItem){let z=J.oldEquippedItem.type;for(let U of z.effects){let W=P.effects[U];if(!!w.effects[J.entityId][W.name]&&w.effects[J.entityId][W.name].source===z)delete w.effects[J.entityId][W.name]}}if(J.newEquippedItem){let z=J.newEquippedItem.type;for(let U of z.effects){let W=P.effects[U];w.effects[J.entityId][W.name]={type:W,source:z}}}return w}function Mw(w,J){let z=J.type;for(let U of z.effects)w.effects[J.entityId][U]={type:P.effects[U]};return w}function a_(w,J){let z=o_(w),U=o_(J);if(z===void 0||U===void 0)return 0;if(z===U)return 1;else if(z.friendly.has(U.name)||U.friendly.has(z.name))return 1;else if(z.hostile.has(U.name)||U.hostile.has(z.name))return 2;else if(z.friendly.has("*")||U.friendly.has("*"))return 1;else if(z.hostile.has("*")||U.hostile.has("*"))return 2;return 0}function o_(w){return((w||{}).options||{}).faction||void 0}function $1(w,J){return w.options.faction=J,w}function Ow(w){if(Object.hasOwn(P.dialogs,w))return P.dialogs[w];return`FIXME: ${w} needs localization!`}function X_(w,J){return w.chatLog.push(J),w.chatLog=w.chatLog.slice(-y.chatLogMaxSize),w}function E_(w,J,z,U,W=0,D=0,O={}){let C={id:J,type:z,mapId:U,x:W,y:D,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:O};return w=F1(w,C,z),w.entities[C.id]=C,w}function D1(w,J){return w.entities[J]=void 0,delete w.entities[J],w.tools[J]=void 0,delete w.tools[J],w.effects[J]=void 0,delete w.effects[J],w}function c_(w,J){let z=Object.keys(w.entities),U=[];for(let W=0;W<z.length;W++){let D=w.entities[z[W]];if(D.mapId===J)U.push(D)}return U}function P1(w,J,z,U){let W=c_(w,J).filter((D)=>D.x===z&&D.y===U);if(W.length>0)return W[0];return null}function F1(w,J,z){if(J.type=z,J.energy=z.energyMax,J.energyMax=z.energyMax,J.gold=0,J.matter=0,!O_(J))w.tools[J.id]=void 0;return w.effects[J.id]={},w}function Cw(w,J,z){if(J===z)return w;let U=a_(J,z);if(U===1||e1(z)){if(z.options.dialog){let W=z?.options?.name?z.options.name:z.type.name;w=X_(w,W+": "+Ow(z.options.dialog)),z.interactions++}}else if(U===2){let W=J.id,D=z.id;w._combatQueue.push({entityId:W,otherEntityId:D})}if(z.interactions>=3&&z.options?.ai===P.ais.interactenrage)$1(z,P.factions.Enraged);return w}function O_(w){return w.type===P.entities.movableboulder||w.type===P.entities.movablebox}function e1(w){return w.type===P.entities.Graffiticyan||w.type===P.entities.Graffitimagenta||w.type===P.entities.Graffitiyellow}function R1(w,J){let z={A:P.actions.Wait,B:P.actions.Wait};if(!!w.lastSpacePositionByEntity[J.id]&&J.energy>Math.abs(P.actions.Launch.energyDelta))z.A=P.actions.Launch;let W=w.maps[J.mapId].getTile(J.x,J.y);if(!!W.options.mapId&&"x"in W.options&&"y"in W.options)z.A=P.actions.Enter;return z}function i_(w,J,z){let U=w._eventSubscribers[J];if(U)for(let W=0;W<U.length;W++){let D=U[W];w=D(w,z)}return w}function t_(w,J,z){if(J in w._eventSubscribers);else w._eventSubscribers[J]=[];return w._eventSubscribers[J].push(z),w}function B1(w,J,z,U=0,W=0){let O={id:j1(z,U,W),type:J,mapId:z,x:U,y:W,energy:J.energyDelta,gold:J.gold,matter:J.matter};return w.items[O.id]=O,w}function Aw(w,J,z,U=0,W=0){let D=P.items.junk,C={id:j1(z,U,W),type:D,mapId:z,x:U,y:W,energy:D.energyDelta,gold:D.gold,matter:J};return w.items[C.id]=C,w}function G1(w,J,z,U=0,W=0,D,O){let A={id:j1(z,U,W),type:J,mapId:z,x:U,y:W,energy:J.energyDelta,gold:D,matter:O};return w.items[A.id]=A,w}function j1(w,J,z){return"item,"+w+","+J+","+z}function _w(w,J){return w.items[J]=void 0,delete w.items[J],w}function M1(w,J){let z=Object.keys(w.items),U=[];for(let W=0;W<z.length;W++){let D=w.items[z[W]];if(D.mapId===J)U.push(D)}return U}function O1(w,J,z,U){let W=j1(J,z,U);if(W in w.items)return w.items[W];return null}function b1(w,J){return w.tools[J]}function Ew(w,J,z){if(O_(J))return w;if(!P6(J,z))return w;if(D6(z))w=ww(w,J.id,z.type);else{if(z.type===P.items.battery)J.energyMax+=z.energy;if(w._energyQueue.push({entityId:J.id,energyDelta:z.energy}),J.id.startsWith("player"))w=X_(w,`Picked up ${z.type.name}.`);let U={entityId:J.id,type:z.type};w=i_(w,2,U)}return J.gold+=z.gold,J.matter+=z.matter,_w(w,z.id),w}function ww(w,J,z){let U=w.tools[J],W=void 0;if(z){if(W={type:z},w.tools[J]=W,J.startsWith("player"))w=X_(w,`Equipped ${z.name}.`)}else if(U){let O=U.type;if(w.tools[J]=W,J.startsWith("player"))w=X_(w,`Unequipped ${O}.`)}let D={entityId:J,oldEquippedItem:U,newEquippedItem:W};return w=i_(w,1,D),w}function D6(w){return w.type.energyCost<0}function P6(w,J){return w.gold+J.gold>=0&&w.matter+J.matter>=0}function Sw(w,J,z){switch(z){case P.commands.N:w=D_(w,J,0,-1);break;case P.commands.W:w=D_(w,J,-1,0);break;case P.commands.S:w=D_(w,J,0,1);break;case P.commands.E:w=D_(w,J,1,0);break;case P.commands.A:w=Nw(w,J,P.commands.A);break;case P.commands.B:w=Nw(w,J,P.commands.B);break;default:}return w}function D_(w,J,z,U,W=0){let D=w.maps[J.mapId],O=P1(w,D.id,J.x+z,J.y+U),C=w.tools[J.id];if(J.message=D.tvMessage,O)if(O_(O)){if(!O_(J)&&W<1)w=D_(w,O,z,U,W++),w=D_(w,J,z,U,W++)}else w=Cw(w,J,O);else if(R6(D,J,z,U))w=kw(w,D,J,z,U),w._energyQueue.push({entityId:J.id,energyDelta:-1*W});else if(j6(w,D,J,z,U)){if(D.setTile(J.x+z,J.y+U,P.tiles.void).type===P.tiles.rock){let N=w.rng.getPercentage();if(N<=1)w=B1(w,P.items.matter,D.id,J.x+z,J.y+U);else if(N<=34)w=B1(w,P.items.junk,D.id,J.x+z,J.y+U)}w._energyQueue.push({entityId:J.id,energyDelta:uw(w,J,C)})}else if(M6(w,D,J,z,U))w=kw(w,D,J,z,U),w._energyQueue.push({entityId:J.id,energyDelta:uw(w,J,C)});return w}function uw(w,J,z){let U=z.type.energyCost;if(j_(w,J.id,P.effects.Recuperation))U=Math.min(-1,U+1);return U}function Nw(w,J,z){let W=R1(w,J)[z.key],O=w.maps[J.mapId].getTile(J.x,J.y);switch(W){case P.actions.Enter:w=fw(w,J,O);break;case P.actions.Launch:w=F6(w,J,O);case P.actions.Wait:break;default:}return w}function kw(w,J,z,U,W){z.x+=U,z.y+=W;let D=O1(w,z.mapId,z.x,z.y);if(D)w=Ew(w,z,D);let O=J.getTile(z.x,z.y);if(O.type.name.startsWith("portal"))w=fw(w,z,O);if(O.type===P.tiles.terminal)J.setTvMessage("OBEYWORKKILL");if(O.type.name.startsWith("move"))switch(O.type.name){case"movenorth":w=D_(w,z,0,-1);break;case"moveeast":w=D_(w,z,1,0);break;case"movesouth":w=D_(w,z,0,1);break;case"movewest":w=D_(w,z,-1,0);break;default:}return w}function fw(w,J,z){if(J.id.startsWith("player"))w.currentMapId=z.options.mapId;if(z.type.isSpace)w.lastSpacePositionByEntity[J.id]={mapId:J.mapId,x:J.x,y:J.y};else w.lastSpacePositionByEntity[J.id]=void 0,delete w.lastSpacePositionByEntity[J.id];let U={entityId:J.id,oldMapId:J.mapId,oldX:J.x,oldY:J.y,oldTileType:z.type,newMapId:z.options.mapId,newX:z.options.x,newY:z.options.y};return J.mapId=z.options.mapId,J.x=z.options.x,J.y=z.options.y,w=i_(w,0,U),w}function F6(w,J,z){if(w.lastSpacePositionByEntity[J.id]){if(J.id.startsWith("player"))w.currentMapId=w.lastSpacePositionByEntity[J.id].mapId;let U={entityId:J.id,oldMapId:J.mapId,oldX:J.x,oldY:J.y,oldTileType:z.type,newMapId:w.lastSpacePositionByEntity[J.id].mapId,newX:w.lastSpacePositionByEntity[J.id].x,newY:w.lastSpacePositionByEntity[J.id].y};J.mapId=U.newMapId,J.x=U.newX,J.y=U.newY,w._energyQueue.push({entityId:J.id,energyDelta:P.actions.Launch.energyDelta}),w.lastSpacePositionByEntity[J.id]=void 0,delete w.lastSpacePositionByEntity[J.id],w=i_(w,0,U)}return w}function Iw(w){for(let J in w.entities){let z=w.entities[J],W=w.maps[z.mapId].getTile(z.x,z.y),D=W.type.energyDelta;if(W.type===P.tiles.chargepad&&j_(w,J,P.effects.Recharger))D*=2;else if(W.type===P.tiles.tree&&j_(w,J,P.effects.BioAbsorber))D=1;else if(W.type.isWater&&j_(w,J,P.effects.WaterImmunity))D=0;else if(W.type.isWater&&j_(w,J,P.effects.WaterShield))D/=2;else if(W.type===P.tiles.drain){let O=Math.min(z.gold,P.constants.DRAIN_GOLD_COST),C=Math.min(z.matter,P.constants.DRAIN_MATTER_COST);z.gold-=O,z.matter-=C}if(D!==0)w._energyQueue.push({entityId:J,energyDelta:D})}return w}function gw(w,J){let z=w.entities[J.entityId];switch(J.oldTileType){case P.tiles.portalstartaerobot:w=F1(w,z,P.entities.AeroBot),$1(z,P.factions.Workers),w=X_(w,`Booting up as an ${P.entities.AeroBot.name}...`);break;case P.tiles.portalstartworkbot:w=F1(w,z,P.entities.WorkBot),$1(z,P.factions.Workers),w=X_(w,`Booting up as a ${P.entities.WorkBot.name}...`);break;default:}return w}function R6(w,J,z,U){let W=J.x+z,D=J.y+U,O=w.getTile(W,D).type;return W>=0&&W<w.widthTiles&&D>=0&&D<w.heightTiles&&!O.isBlocking}function j6(w,J,z,U,W){let D=z.x+U,O=z.y+W,C=J.getTile(D,O).type;return j_(w,z.id,P.effects.WallCrusher)&&C===P.tiles.wallweak||j_(w,z.id,P.effects.RockCrusher)&&C===P.tiles.rock}function M6(w,J,z,U,W){let D=z.x+U,O=z.y+W,C=J.getTile(D,O).type;return j_(w,z.id,P.effects.Screwing)&&C===P.tiles.portalsewers}var u_={bot_bar:`!
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
!!O portal botmos_hull_selection 1 19
!!Q portal solarsystem=1337 448 448
!!P portal solarsystem=1337 30 17
#O##################
#=.................#
#...........#D..Q#.#
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
 */var O6=function(w){var J={};function z(U){if(J[U])return J[U].exports;var W=J[U]={i:U,l:!1,exports:{}};return w[U].call(W.exports,W,W.exports,z),W.l=!0,W.exports}return z.m=w,z.c=J,z.d=function(U,W,D){z.o(U,W)||Object.defineProperty(U,W,{enumerable:!0,get:D})},z.r=function(U){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(U,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(U,"__esModule",{value:!0})},z.t=function(U,W){if(1&W&&(U=z(U)),8&W)return U;if(4&W&&typeof U=="object"&&U&&U.__esModule)return U;var D=Object.create(null);if(z.r(D),Object.defineProperty(D,"default",{enumerable:!0,value:U}),2&W&&typeof U!="string")for(var O in U)z.d(D,O,function(C){return U[C]}.bind(null,O));return D},z.n=function(U){var W=U&&U.__esModule?function(){return U.default}:function(){return U};return z.d(W,"a",W),W},z.o=function(U,W){return Object.prototype.hasOwnProperty.call(U,W)},z.p="/bin/",z(z.s=0)}([function(w,J,z){var U={},W=z(1),D=z(2),O=z(3);w.exports=U;var C=1;U.js=function(){var A,N,m,p=!1,Z_={},r={},c={},Q_={},h=!0,x={},n=[],z_=Number.MAX_VALUE,o=!1;this.setAcceptableTiles=function(k){k instanceof Array?m=k:!isNaN(parseFloat(k))&&isFinite(k)&&(m=[k])},this.enableSync=function(){p=!0},this.disableSync=function(){p=!1},this.enableDiagonals=function(){o=!0},this.disableDiagonals=function(){o=!1},this.setGrid=function(k){A=k;for(var E=0;E<A.length;E++)for(var v=0;v<A[0].length;v++)r[A[E][v]]||(r[A[E][v]]=1)},this.setTileCost=function(k,E){r[k]=E},this.setAdditionalPointCost=function(k,E,v){c[E]===void 0&&(c[E]={}),c[E][k]=v},this.removeAdditionalPointCost=function(k,E){c[E]!==void 0&&delete c[E][k]},this.removeAllAdditionalPointCosts=function(){c={}},this.setDirectionalCondition=function(k,E,v){Q_[E]===void 0&&(Q_[E]={}),Q_[E][k]=v},this.removeAllDirectionalConditions=function(){Q_={}},this.setIterationsPerCalculation=function(k){z_=k},this.avoidAdditionalPoint=function(k,E){Z_[E]===void 0&&(Z_[E]={}),Z_[E][k]=1},this.stopAvoidingAdditionalPoint=function(k,E){Z_[E]!==void 0&&delete Z_[E][k]},this.enableCornerCutting=function(){h=!0},this.disableCornerCutting=function(){h=!1},this.stopAvoidingAllAdditionalPoints=function(){Z_={}},this.findPath=function(k,E,v,a,__){var J_=function(f_){p?__(f_):setTimeout(function(){__(f_)})};if(m===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(A===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(k<0||E<0||v<0||a<0||k>A[0].length-1||E>A.length-1||v>A[0].length-1||a>A.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(k!==v||E!==a){for(var H_=A[a][v],U_=!1,C_=0;C_<m.length;C_++)if(H_===m[C_]){U_=!0;break}if(U_!==!1){var Y_=new W;Y_.openList=new O(function(f_,n_){return f_.bestGuessDistance()-n_.bestGuessDistance()}),Y_.isDoneCalculating=!1,Y_.nodeHash={},Y_.startX=k,Y_.startY=E,Y_.endX=v,Y_.endY=a,Y_.callback=J_,Y_.openList.push(e(Y_,Y_.startX,Y_.startY,null,1));var J1=C++;return x[J1]=Y_,n.push(J1),J1}J_(null)}else J_([])},this.cancelPath=function(k){return k in x&&(delete x[k],!0)},this.calculate=function(){if(n.length!==0&&A!==void 0&&m!==void 0)for(N=0;N<z_;N++){if(n.length===0)return;p&&(N=0);var k=n[0],E=x[k];if(E!==void 0)if(E.openList.size()!==0){var v=E.openList.pop();if(E.endX!==v.x||E.endY!==v.y)v.list=0,v.y>0&&b(E,v,0,-1,1*g(v.x,v.y-1)),v.x<A[0].length-1&&b(E,v,1,0,1*g(v.x+1,v.y)),v.y<A.length-1&&b(E,v,0,1,1*g(v.x,v.y+1)),v.x>0&&b(E,v,-1,0,1*g(v.x-1,v.y)),o&&(v.x>0&&v.y>0&&(h||S(A,m,v.x,v.y-1,v)&&S(A,m,v.x-1,v.y,v))&&b(E,v,-1,-1,1.4*g(v.x-1,v.y-1)),v.x<A[0].length-1&&v.y<A.length-1&&(h||S(A,m,v.x,v.y+1,v)&&S(A,m,v.x+1,v.y,v))&&b(E,v,1,1,1.4*g(v.x+1,v.y+1)),v.x<A[0].length-1&&v.y>0&&(h||S(A,m,v.x,v.y-1,v)&&S(A,m,v.x+1,v.y,v))&&b(E,v,1,-1,1.4*g(v.x+1,v.y-1)),v.x>0&&v.y<A.length-1&&(h||S(A,m,v.x,v.y+1,v)&&S(A,m,v.x-1,v.y,v))&&b(E,v,-1,1,1.4*g(v.x-1,v.y+1)));else{var a=[];a.push({x:v.x,y:v.y});for(var __=v.parent;__!=null;)a.push({x:__.x,y:__.y}),__=__.parent;a.reverse();var J_=a;E.callback(J_),delete x[k],n.shift()}}else E.callback(null),delete x[k],n.shift();else n.shift()}};var b=function(k,E,v,a,__){var J_=E.x+v,H_=E.y+a;if((Z_[H_]===void 0||Z_[H_][J_]===void 0)&&S(A,m,J_,H_,E)){var U_=e(k,J_,H_,E,__);U_.list===void 0?(U_.list=1,k.openList.push(U_)):E.costSoFar+__<U_.costSoFar&&(U_.costSoFar=E.costSoFar+__,U_.parent=E,k.openList.updateItem(U_))}},S=function(k,E,v,a,__){var J_=Q_[a]&&Q_[a][v];if(J_){var H_=f(__.x-v,__.y-a);if(!function(){for(var C_=0;C_<J_.length;C_++)if(J_[C_]===H_)return!0;return!1}())return!1}for(var U_=0;U_<E.length;U_++)if(k[a][v]===E[U_])return!0;return!1},f=function(k,E){if(k===0&&E===-1)return U.TOP;if(k===1&&E===-1)return U.TOP_RIGHT;if(k===1&&E===0)return U.RIGHT;if(k===1&&E===1)return U.BOTTOM_RIGHT;if(k===0&&E===1)return U.BOTTOM;if(k===-1&&E===1)return U.BOTTOM_LEFT;if(k===-1&&E===0)return U.LEFT;if(k===-1&&E===-1)return U.TOP_LEFT;throw new Error("These differences are not valid: "+k+", "+E)},g=function(k,E){return c[E]&&c[E][k]||r[A[E][k]]},e=function(k,E,v,a,__){if(k.nodeHash[v]!==void 0){if(k.nodeHash[v][E]!==void 0)return k.nodeHash[v][E]}else k.nodeHash[v]={};var J_=i(E,v,k.endX,k.endY);if(a!==null)var H_=a.costSoFar+__;else H_=0;var U_=new D(a,E,v,H_,J_);return k.nodeHash[v][E]=U_,U_},i=function(k,E,v,a){var __,J_;return o?(__=Math.abs(k-v))<(J_=Math.abs(E-a))?1.4*__+J_:1.4*J_+__:(__=Math.abs(k-v))+(J_=Math.abs(E-a))}},U.TOP="TOP",U.TOP_RIGHT="TOP_RIGHT",U.RIGHT="RIGHT",U.BOTTOM_RIGHT="BOTTOM_RIGHT",U.BOTTOM="BOTTOM",U.BOTTOM_LEFT="BOTTOM_LEFT",U.LEFT="LEFT",U.TOP_LEFT="TOP_LEFT"},function(w,J){w.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(w,J){w.exports=function(z,U,W,D,O){this.parent=z,this.x=U,this.y=W,this.costSoFar=D,this.simpleDistanceToTarget=O,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(w,J,z){w.exports=z(4)},function(w,J,z){var U,W,D;(function(){var O,C,A,N,m,p,Z_,r,c,Q_,h,x,n,z_,o;A=Math.floor,Q_=Math.min,C=function(b,S){return b<S?-1:b>S?1:0},c=function(b,S,f,g,e){var i;if(f==null&&(f=0),e==null&&(e=C),f<0)throw new Error("lo must be non-negative");for(g==null&&(g=b.length);f<g;)e(S,b[i=A((f+g)/2)])<0?g=i:f=i+1;return[].splice.apply(b,[f,f-f].concat(S)),S},p=function(b,S,f){return f==null&&(f=C),b.push(S),z_(b,0,b.length-1,f)},m=function(b,S){var f,g;return S==null&&(S=C),f=b.pop(),b.length?(g=b[0],b[0]=f,o(b,0,S)):g=f,g},r=function(b,S,f){var g;return f==null&&(f=C),g=b[0],b[0]=S,o(b,0,f),g},Z_=function(b,S,f){var g;return f==null&&(f=C),b.length&&f(b[0],S)<0&&(S=(g=[b[0],S])[0],b[0]=g[1],o(b,0,f)),S},N=function(b,S){var f,g,e,i,k,E;for(S==null&&(S=C),k=[],g=0,e=(i=function(){E=[];for(var v=0,a=A(b.length/2);0<=a?v<a:v>a;0<=a?v++:v--)E.push(v);return E}.apply(this).reverse()).length;g<e;g++)f=i[g],k.push(o(b,f,S));return k},n=function(b,S,f){var g;if(f==null&&(f=C),(g=b.indexOf(S))!==-1)return z_(b,0,g,f),o(b,g,f)},h=function(b,S,f){var g,e,i,k,E;if(f==null&&(f=C),!(e=b.slice(0,S)).length)return e;for(N(e,f),i=0,k=(E=b.slice(S)).length;i<k;i++)g=E[i],Z_(e,g,f);return e.sort(f).reverse()},x=function(b,S,f){var g,e,i,k,E,v,a,__,J_;if(f==null&&(f=C),10*S<=b.length){if(!(i=b.slice(0,S).sort(f)).length)return i;for(e=i[i.length-1],k=0,v=(a=b.slice(S)).length;k<v;k++)f(g=a[k],e)<0&&(c(i,g,0,null,f),i.pop(),e=i[i.length-1]);return i}for(N(b,f),J_=[],E=0,__=Q_(S,b.length);0<=__?E<__:E>__;0<=__?++E:--E)J_.push(m(b,f));return J_},z_=function(b,S,f,g){var e,i,k;for(g==null&&(g=C),e=b[f];f>S&&g(e,i=b[k=f-1>>1])<0;)b[f]=i,f=k;return b[f]=e},o=function(b,S,f){var g,e,i,k,E;for(f==null&&(f=C),e=b.length,E=S,i=b[S],g=2*S+1;g<e;)(k=g+1)<e&&!(f(b[g],b[k])<0)&&(g=k),b[S]=b[g],g=2*(S=g)+1;return b[S]=i,z_(b,E,S,f)},O=function(){function b(S){this.cmp=S!=null?S:C,this.nodes=[]}return b.push=p,b.pop=m,b.replace=r,b.pushpop=Z_,b.heapify=N,b.updateItem=n,b.nlargest=h,b.nsmallest=x,b.prototype.push=function(S){return p(this.nodes,S,this.cmp)},b.prototype.pop=function(){return m(this.nodes,this.cmp)},b.prototype.peek=function(){return this.nodes[0]},b.prototype.contains=function(S){return this.nodes.indexOf(S)!==-1},b.prototype.replace=function(S){return r(this.nodes,S,this.cmp)},b.prototype.pushpop=function(S){return Z_(this.nodes,S,this.cmp)},b.prototype.heapify=function(){return N(this.nodes,this.cmp)},b.prototype.updateItem=function(S){return n(this.nodes,S,this.cmp)},b.prototype.clear=function(){return this.nodes=[]},b.prototype.empty=function(){return this.nodes.length===0},b.prototype.size=function(){return this.nodes.length},b.prototype.clone=function(){var S;return(S=new b).nodes=this.nodes.slice(0),S},b.prototype.toArray=function(){return this.nodes.slice(0)},b.prototype.insert=b.prototype.push,b.prototype.top=b.prototype.peek,b.prototype.front=b.prototype.peek,b.prototype.has=b.prototype.contains,b.prototype.copy=b.prototype.clone,b}(),W=[],(D=typeof(U=function(){return O})=="function"?U.apply(J,W):U)===void 0||(w.exports=D)}).call(this)}]);function Tw(w,J,z,U,W){let D=new O6.js;D.setGrid(w),D.setAcceptableTiles([0]),D.enableSync();let O=null;return D.findPath(J,z,U,W,function(C){O=C}),D.calculate(),O}function P_(){return"player"}function hw(w,J,z,U){return Math.abs(w-z)+Math.abs(J-U)}function C1(w){return[...Array(w).keys()]}function xw(w){let J=b6(w),z=w.entities[P_()];for(let U=0;U<J.length;U++){let W=J[U],D=w.entities[W];if(z===D)continue;let O=w._AIs[W],C=hw(z.x,z.y,D.x,D.y);if(a_(z,D)===2&&C<=O.aggroRange){let A=w.maps[w.currentMapId].asMovementMap(),N=Tw(A,D.x,D.y,z.x,z.y);if(N){if(N=N.slice(1),N.length>C)N=null}O.path=N}if(!!D.message&&D.message.includes("OBEY"));}for(let U=0;U<J.length;U++){let W=J[U],D=w.entities[W],O=w._AIs[W];if(O.path){let C=O.path[0],A=C.x-D.x,N=C.y-D.y;w=D_(w,D,A,N)}}return w}function b6(w){let J=c_(w,w.currentMapId),z=[];for(let U=0;U<J.length;U++){let W=J[U];if(W.options.ai)z.push(W.id)}return z}function mw(w,J,z){let U=w.entities[J],W=8;switch(z){case P.ais.aggrorange:W=8;break;case P.ais.aggrorangeshort:W=2;break;case P.ais.guardian:W=1;break;case P.ais.interactenrage:W=2;break;default:}return w._AIs[J]={entityId:J,type:z,aggroRange:W,startMap:U.mapId,startX:U.x,startY:U.y,path:null},w}function v1(w,J){return w._AIs[J]=void 0,delete w._AIs[J],w}function cw(w){let J=void 0;while(typeof(J=w._despawnQueue.shift())!=="undefined")w=D1(w,J),w=v1(w,J);return w}function pw(w){return w}class N_{mapId;x;y;entityOrItemName;options;constructor(w,J,z,U,W={}){this.mapId=w,this.x=J,this.y=z,this.entityOrItemName=U,this.options=W}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function h_(w,J){if(C6(J.entityOrItemName)){let z=J.options;if(Object.hasOwn(z,"ai"))z.ai=P.ais[z.ai];if(Object.hasOwn(z,"faction"))z.faction=P.factions[z.faction];let U=J.generateId();if(w=E_(w,U,P.entities[J.entityOrItemName],J.mapId,J.x,J.y,z),Object.hasOwn(z,"equip")&&lw(z.equip))w=ww(w,U,P.items[z.equip]);if(Object.hasOwn(z,"ai"))w=mw(w,U,z.ai)}else if(lw(J.entityOrItemName))w=B1(w,P.items[J.entityOrItemName],J.mapId,J.x,J.y);return w}function C6(w){return Object.hasOwn(P.entities,w)}function lw(w){return Object.hasOwn(P.items,w)}function e_(w,J={}){return{type:w,options:J}}function dw(w){for(let J in u_){let z=p_(u_[J]);if(!z.isSnippet()){w.maps[J]=z;for(let U of z._spawnCommands)w=h_(w,U);z._spawnCommands=[]}}return w}function yw(w,J){let z=M1(w,J);for(let W=0;W<z.length;W++){let D=z[W];w=_w(w,D.id)}let U=c_(w,J);for(let W=0;W<U.length;W++){let D=U[W];w=D1(w,D.id),w=v1(w,D.id)}return w.maps[J]=void 0,delete w.maps[J],w}class M_{id;widthTiles;heightTiles;seed;_tiles;_initialTiles;entropy;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(w,J,z,U=[]){this.id=w,this.widthTiles=J,this.heightTiles=z,this.seed=null,this._tiles=U,this._initialTiles=JSON.parse(JSON.stringify(U)),this.entropy=0,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(w,J){if(w>=0&&w<this.widthTiles&&J>=0&&J<this.heightTiles){let z=J*this.widthTiles+w;return this._tiles[z]}return{}}setTile(w,J,z,U={}){this._cacheMovementMap=null;let W=J*this.widthTiles+w,D=this._tiles[W];return this._tiles[W]=e_(z,U),D}resetEntropy(){this._initialTiles=JSON.parse(JSON.stringify(this._tiles)),this.entropy=0}setTvMessage(w){if(this._tvCount){let J=0;for(let z of this._tiles)if(z.type===P.tiles.tv&&J<w.length)z.options.sign=w[J],J++;if(w==="")w=null;this.tvMessage=w}}pasteOnto(w,J=0,z=0){for(let U=0;U<w.heightTiles;U++)for(let W=0;W<w.widthTiles;W++){let D=w.getTile(W,U);if(D.type!==P.tiles.voidtrue)this.setTile(W+J,U+z,D.type,D.options)}return this}circular(){let w=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let J=-w;J<=w;J++)for(let z=-w;z<=w;z++)if(z*z+J*J>=w*w)this.setTile(z+w-1,J+w-1,P.tiles.voidtrue);return this}sample(w,J){let z=Math.floor(this.widthTiles/w),U=Math.floor(this.heightTiles/J),W=[];for(let D=0;D<J;D++)for(let O=0;O<w;O++){let C={};for(let r=0;r<U;r++)for(let c=0;c<z;c++){let Q_=this.getTile(O*z+c,D*U+r);if(C[Q_.type.name])C[Q_.type.name]+=1;else C[Q_.type.name]=1}let A="",N=0;for(let[r,c]of Object.entries(C))if(c>N)A=r,N=c;let m="space"+A,p=P.tiles[m]||P.tiles.spacevoid,Z_={mapId:this.id,x:O*z,y:D*U};W.push(e_(p,Z_))}return new M_("__sampled_"+w+"_"+J+"_"+this.id,w,J,W)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let w=new Array(this.heightTiles);for(let J=0;J<this.heightTiles;J++){w[J]=new Array(this.widthTiles);for(let z=0;z<this.widthTiles;z++){let U=J*this.widthTiles+z,D=this._tiles[U].type;if(w[J][z]=0,D.isBlocking)w[J][z]=1}}return this._cacheMovementMap=w,w}isSnippet(){return this.id===void 0||this.id===null||this.id===""}static createEmptyMap(w,J,z){let U=[];for(let D=0;D<w*J;D++)U.push(e_(z));return new M_(null,w,J,U)}}function p_(w){let J=w.split(/\r?\n/),z=w[0],U="",W=0,D=0,O={},C=[],A=[],N=0,m="";for(let Z_=0;Z_<J.length;Z_++){let r=J[Z_];if(r.startsWith(z)){if(r.startsWith(z+"!id"))U=r.slice(5);else if(r.startsWith(z+"!size")){let c=r.split(" ").slice(1);W=Number(c[0]),D=Number(c[1])}else if(r.startsWith(z+"!spawn")){let c=r.split(" ").slice(1),Q_={};if(c.length>3){let h=c.slice(3);for(let x of h){let n=x.split("=");Q_[n[0]]=n[1]}}C.push(new N_(U,Number(c[0]),Number(c[1]),c[2],Q_))}else if(r.startsWith(z+"!")){let c=r[2],Q_=r.slice(4);O[c]=Q_}}else for(let c=0;c<r.length;c++){let Q_=r[c],h=O[Q_];if(y.debug&&!h)console.log("DEBUG Broken map: "+U);let x=h.split(" "),n={};if(h.startsWith("portal ")||h.startsWith("portalhidden ")||h.startsWith("portalsewers ")||h.startsWith("portallauncher ")||h.startsWith("portalstart"))h=x[0],n.mapId=x[1],n.x=Number(x[2]),n.y=Number(x[3]);if(h.startsWith("wall ")&&x.length>=2)h="wall",n.sign=x[1];if(h.startsWith("terminal ")){if(h="terminal",x.length>=2)n.screen=x[1]}if(h.startsWith("tv ")&&x.length>=2){if(h="tv",x.length===3)m=x[2];N++}A.push(e_(P.tiles[h],n))}}if(y.debug&&!(N===0||N===12))console.log("DEBUG Broken map: "+U+" (invalid TV size "+N+", allowed are 0 or 12 characters per map)");let p=new M_(U,W,D,A);return p._tvCount=N,p.setTvMessage(m),p._spawnCommands=C,p}var sw=i1(E1(),1);class b_{seed;_rotRng;constructor(w=1337){this.seed=w,this._rotRng=sw.RNG.clone(),this._rotRng.setSeed(w)}getPercentage(){return this._rotRng.getPercentage()}getItem(w){return this._rotRng.getItem(w)}}function ow(w,J=1337,z=64,U=4096){let W=M_.createEmptyMap(z,z,P.tiles.wall),D=new b_(J),O=z/2-1,C={x:O,y:O};W.setTile(C.x,C.y,P.tiles.void);for(let A=0;A<U;A++){switch(D.getItem([0,1,2,3])){case 0:C=u1(C,0,-1,z);break;case 1:C=u1(C,1,0,z);break;case 2:C=u1(C,0,1,z);break;case 3:C=u1(C,-1,0,z);break}W.setTile(C.x,C.y,P.tiles.void)}return W.id=`gen:dungeon=${J}`,w.maps[W.id]=W,w}function u1(w,J,z,U){return{x:Math.max(0,Math.min(U-1,w.x+J)),y:Math.max(0,Math.min(U-1,w.y+z))}}function aw(w,J){if(J?.newMapId?.startsWith("gen:dungeon")){let z=J?.newMapId,U=Number(z?.split("=").at(-1));w=ow(w,U);let W=w.entities[J.entityId];if(W.id.startsWith("player"))w.currentMapId=z;W.mapId=z,W.x=J.newX,W.Y=J.newY}return w}function iw(w,J){if(J.seed===1337)w=h_(w,new N_(J.id,130,127,"Valkyrie",{faction:"Spirits"})),w=h_(w,new N_(J.id,124,127,"Valkyrie",{faction:"Spirits"})),w=h_(w,new N_(J.id,127,130,"trident"));else{let z=new b_(J.seed);for(let U=0;U<J.heightTiles;U++)for(let W=0;W<J.widthTiles;W++){let D=J.getTile(W,U);if(z.getPercentage()<=1&&(D.type===P.tiles.void||D.type===P.tiles.tree)){let O=z.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(O){case"Deviant":case"Pioneer":w=h_(w,new N_(J.id,W,U,O,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":w=h_(w,new N_(J.id,W,U,O));break}}}}return w}var N1=i1(E1(),1);var E6=1337,tw=55;function ew(w,J=E6){N1.RNG.setSeed(J);let z=new N1.Noise.Simplex,U=256,W=256,D=[];for(let A=0;A<W;A++)for(let N=0;N<U;N++){let m=z.get(N/tw,A/tw),p;if(m<=-0.5)p=P.tiles.water;else if(m<=0)p=P.tiles.void;else if(m<0.5)p=P.tiles.tree;else p=P.tiles.rock;D.push(e_(p))}let O="simplex="+J,C=new M_(O,U,W,D);return C.seed=J,w.maps[O]=C,w}var u6=1337;function _0(w,J=u6){let z=M_.createEmptyMap(1024,1024,P.tiles.void);z.id="solarsystem="+J,w.maps[z.id]=z;let U=new b_(J),W=new b_(J),D=U.getItem([2,3,4,5,6,7,8,9,10,11,12]),O=128,C=512-O,A=Math.floor(C/D);z=N6(z,U);let N=M_.createEmptyMap(128,128,P.tiles.voidtrue);k6(N,63,63,62,P.tiles.star),S6(N,63,63,P.tiles.star),z.pasteOnto(N,448,448);for(let r=O;r<512;r+=A){let c=U.getItem([-1,1])*U.getItem(C1(r)),Q_=U.getItem([-1,1])*Math.floor(Math.sqrt(r*r-c*c));c+=512,Q_+=512;let h=U.getItem([16,24,32]),x=Math.floor(h/2)-1;w=ew(w,J);let n=w.maps["simplex="+J],z_=u_.launcher;z_=z_.replace("!!O portallauncher space 0 0",`!!O portallauncher ${z.id} ${c} ${Q_}`);let o=p_(z_),b=W.getItem(C1(n.widthTiles-o.widthTiles)),S=W.getItem(C1(n.heightTiles-o.heightTiles));n.pasteOnto(o,b,S),w=iw(w,n);let f=n.sample(h,h).circular();z.pasteOnto(f,c-(x+1),Q_-(x+1)),J++}let m=u_.space_bot_station;m=m.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let p=p_(m);z.pasteOnto(p,583,398);let Z_=p_(u_.square_falcon);return z.pasteOnto(Z_,590,373),w}function N6(w,J){for(let z=0;z<w.heightTiles;z++)for(let U=0;U<w.widthTiles;U++)if(J.getPercentage()<=1)w.setTile(U,z,J.getItem([P.tiles.spacevoidstarwhite,P.tiles.spacevoidstaryellow]));return w}function k6(w,J,z,U,W){let D=1-U,O=1,C=-2*U,A=0,N=U;w.setTile(J,z+U,W),w.setTile(J,z-U,W),w.setTile(J+U,z,W),w.setTile(J-U,z,W);while(A<N){if(D>=0)N-=1,C+=2,D+=C;A+=1,O+=2,D+=O,w.setTile(J+A,z+N,W),w.setTile(J-A,z+N,W),w.setTile(J+A,z-N,W),w.setTile(J-A,z-N,W),w.setTile(J+N,z+A,W),w.setTile(J-N,z+A,W),w.setTile(J+N,z-A,W),w.setTile(J-N,z-A,W)}return w}function S6(w,J,z,U){let{widthTiles:W,heightTiles:D}=w,O=[];O.push({x:J,y:z});let C=void 0;while(typeof(C=O.shift())!=="undefined"){let A=C,N=C;if(C.x+1<W)N={x:C.x+1,y:C.y};while(w.getTile(A.x,A.y).type!==U){if(w.setTile(A.x,A.y,U),A.y+1<D){if(w.getTile(A.x,A.y+1).type!==U)O.push({x:A.x,y:A.y+1})}if(A.y-1>=0){if(w.getTile(A.x,A.y-1).type!==U)O.push({x:A.x,y:A.y-1})}if(A.x-1>=0)A.x-=1;else break}while(w.getTile(N.x,N.y).type!==U){if(w.setTile(N.x,N.y,U),N.y+1<D){if(w.getTile(N.x,N.y+1).type!==U)O.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(w.getTile(N.x,N.y-1).type!==U)O.push({x:N.x,y:N.y-1})}if(N.x+1<W)N.x+=1;else break}}return w}function w0(w,J){if(J?.oldMapId?.startsWith("shop_instance")){w=yw(w,J.oldMapId);let z=w.maps[J.newMapId],U=z.getTile(J.newX,J.newY);z.setTile(J.newX,J.newY,U.type,{mapId:"shop_instance",x:J.oldX,y:J.oldY})}if(J?.newMapId?.startsWith("shop_instance")){let z=p_(u_.shop_instance);z.id="shop_instance_"+J.oldMapId+"_"+J.entityId,z.setTile(J.newX,J.newY,P.tiles.portal,{mapId:J.oldMapId,x:J.oldX,y:J.oldY}),w.maps[J.oldMapId].setTile(J.oldX,J.oldY,J.oldTileType,{mapId:z.id,x:J.newX,y:J.newY});let W=w.entities[J.entityId];if(W.id.startsWith("player"))w.currentMapId=z.id;if(W.mapId=z.id,W.x=J.newX,W.Y=J.newY,w.maps[z.id]=z,w=G1(w,P.items.hammer,z.id,4,4,0,-200),w=G1(w,P.items.pickaxe,z.id,4,6,0,-200),w=G1(w,P.items.battery,z.id,4,8,0,-200),w=G1(w,P.items.gold,z.id,4,10,1,-1e4),w=E_(w,z.id+"_shopkeeper",P.entities.AeroBot,z.id,6,2,{faction:o_(W),dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),J?.oldMapId.startsWith("bot_stadium"))w=E_(w,z.id+"_shopper",P.entities.WorkBot,z.id,1,12,{faction:o_(W),dialog:"shop_instance_workbot_shopper"});else if(J?.oldMapId.startsWith("bot_bar"))w=E_(w,z.id+"_shopper",P.entities.AeroBot,z.id,4,11,{faction:o_(W),dialog:"shop_instance_aerobot_shopper"})}return w}function Z0(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",effects:{},entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new b_,tools:{},tvs:{}}}function Q0(w){let J=void 0;while(typeof(J=w._combatQueue.shift())!=="undefined"){let z=-1,U=-5,W=b1(w,J.entityId);if(W){if(z=W.type.energyCost,j_(w,J.entityId,P.effects.Recuperation))z=Math.min(-1,z+1);U=-1*Math.abs(W.type.damage)}w._energyQueue.push({entityId:J.entityId,energyDelta:z}),w._energyQueue.push({entityId:J.otherEntityId,energyDelta:U});let D=w.entities[J.entityId],O=w.entities[J.otherEntityId],C=D?.options?.name?D.options.name:D.type.name,A=O?.options?.name?O.options.name:O.type.name;w=X_(w,`${C} did ${Math.abs(U)} damage to ${A} at cost of ${Math.abs(z)} energy.`)}return w}function J0(w){let J=void 0,z=new Set;while(typeof(J=w._energyQueue.shift())!=="undefined"){let U=w.entities[J.entityId];if(U.energy=Math.min(U.energy+J.energyDelta,U.energyMax),U.energy<=0)z.add(U.id)}for(let U of z){let W=w.entities[U];w._despawnQueue.push(U);let D=W?.options?.name?W.options.name:W.type.name;if(!O_(W)){let O=Math.max(1,Math.floor(W.energyMax/3));w=Aw(w,O,W.mapId,W.x,W.y),w=X_(w,`${D} destroyed leaving behind Junk.`)}}return w}function V0(w){return w=xw(w),w=Q0(w),w=Iw(w),w=J0(w),w=Rw(w),w=cw(w),w=pw(w),w}class k1{state;constructor(){}init(){return this.state=Z0(),this.state=t_(this.state,0,gw),this.state=t_(this.state,0,aw),this.state=t_(this.state,0,w0),this.state=t_(this.state,1,jw),this.state=t_(this.state,2,Mw),this.state=_0(this.state),this.state=dw(this.state),this.state.currentMapId="botmos_hull_selection",this.state=E_(this.state,P_(),P.entities.Spirit,this.state.currentMapId,9,5,{faction:P.factions.Spirits,name:"Player"}),this.state}update(w,J=!1){let z=this.state.entities[P_()];if(z){if(w){switch(w){case P.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case P.commands["#"]:this.state=X_(this.state,Pw(this.state,P_()));break;default:this.state=Sw(this.state,z,w),this.state=V0(this.state)}this.state.actionLog.push(w.key)}}else this.state=X_(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=E_(this.state,P_(),P.entities.Spirit,this.state.currentMapId,9,5,{faction:P.factions.Spirits,name:"Player"});return this.state}play(w){for(let J=0;J<w.length;J++){let z=w[J];this.update(P.commands[z],!0)}return this.state}}var l={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},Qw=[],S1=void 0,z0=void 0,K0=0;document.body.addEventListener("keydown",function(w){if(w.defaultPrevented)return;switch(w.key){case"w":case"ArrowUp":l.up=!0,K_(w);break;case"a":case"ArrowLeft":l.left=!0,K_(w);break;case"s":case"ArrowDown":l.down=!0,K_(w);break;case"d":case"ArrowRight":l.right=!0,K_(w);break;case"x":l.a=!0,K_(w);break;case" ":case"y":case"z":l.b=!0,K_(w);break;case"m":l.menu=!0,K_(w);break;case"#":case"/":l.slash=!0,K_(w);break;default:}k_(q0())});function k_(w){let J=Date.now();if(S1!==void 0&&J-K0>=P.constants.MIN_TURN_SPEED_IN_MS)K0=J,S1(w)}document.body.addEventListener("keyup",function(w){if(w.defaultPrevented)return;switch(w.key){case"w":case"ArrowUp":l.up=!1,K_(w);break;case"a":case"ArrowLeft":l.left=!1,K_(w);break;case"s":case"ArrowDown":l.down=!1,K_(w);break;case"d":case"ArrowRight":l.right=!1,K_(w);break;case"x":l.a=!1,K_(w);break;case" ":case"y":case"z":l.b=!1,K_(w);break;case"m":l.menu=!1,K_(w);break;case"#":case"/":l.slash=!1,K_(w);default:}});document.body.addEventListener("click",function(w){let{clientX:J,clientY:z}=w,W=document.body.clientWidth/3,O=document.body.clientHeight/3;if(J>=W&&J<2*W&&z<O)k_(P.commands.N),K_(w);else if(J<W&&z<O)k_(P.commands.B),K_(w);else if(J>=2*W&&z<O)k_(P.commands.A),K_(w);else if(J<W&&z>=O&&z<2*O)k_(P.commands.W),K_(w);else if(J>=2*W&&z>=O&&z<2*O)k_(P.commands.E),K_(w);else if(J>=W&&J<2*W&&z>=2*O)k_(P.commands.S),K_(w);else if(J>=W&&J<2*W&&z>=O&&z<2*O)k_(P.commands.M),K_(w)});function K_(w){w.preventDefault(),w.stopPropagation()}var X1=null;function f6(){let w=null;if(l.right)w=P.commands.E;if(l.left)w=P.commands.W;if(l.down)w=P.commands.S;if(l.up)w=P.commands.N;if(l.up&&l.right){if(w===P.commands.N&&X1===P.commands.N)w=P.commands.E}if(l.up&&l.left){if(w===P.commands.N&&X1===P.commands.N)w=P.commands.W}if(l.down&&l.right){if(w===P.commands.S&&X1===P.commands.S)w=P.commands.E}if(l.down&&l.left){if(w===P.commands.S&&X1===P.commands.S)w=P.commands.W}if(l.a)w=P.commands.A;if(l.b)w=P.commands.B;if(l.menu)w=P.commands.M;if(l.slash)w=P.commands["#"];if(X1=w,w!==null)Qw.push(w)}function q0(){f6();let w=Qw.shift()||null;return Qw=[],w}document.body.addEventListener("mousemove",function(w){if(w.defaultPrevented)return;if(S1!==void 0)z0(w),K_(w)});var U0=void 0;window.addEventListener("gamepadconnected",(w)=>{U0=setInterval(function(){let J=navigator.getGamepads()[w.gamepad?.index];if(l.right=J.buttons[15].pressed,l.left=J.buttons[14].pressed,l.down=J.buttons[13].pressed,l.up=J.buttons[12].pressed,l.a=J.buttons[0].pressed||J.buttons[2].pressed,l.b=J.buttons[1].pressed||J.buttons[3].pressed,l.menu=J.buttons[9].pressed,l.right||l.left||l.down||l.up||l.a||l.b||l.menu)k_(q0())},100)});window.addEventListener("gamepaddisconnected",(w)=>{clearInterval(U0)});function $0(w){S1=w}function B0(w){z0=w}var W0=i1(E1(),1);var f1={__10:[0,0],__11:[16,0],__12:[32,0],__13:[48,0],__14:[64,0],__15:[80,0],__1:[96,0],_1:[112,0],__2:[128,0],_2:[144,0],__3:[160,0],_3:[176,0],__4:[192,0],_4:[208,0],__5:[224,0],_5:[240,0],__6:[256,0],_6:[272,0],__7:[288,0],_7:[304,0],__8:[320,0],_8:[336,0],__9:[352,0],_9:[368,0],AeroBot_a:[384,0],AeroBot:[400,0],battery:[416,0],BioAbsorber:[432,0],broom:[448,0],chargepad:[464,0],cheat:[480,0],chest:[496,0],Cleaner_a:[512,0],Cleaner:[528,0],Deviant:[544,0],drain:[560,0],energy:[576,0],gold:[592,0],goo:[608,0],Graffiticyan:[624,0],Graffitimagenta:[640,0],Graffitiyellow:[656,0],hammer:[672,0],junk:[688,0],matter:[704,0],movableboulder:[720,0],movablebox:[736,0],moveeast:[752,0],movenorth:[768,0],movesouth:[784,0],movewest:[800,0],pickaxe:[816,0],Pioneer_a:[832,0],Pioneer:[848,0],portalclosed:[864,0],portalhidden:[880,0],portallauncher:[896,0],portal:[912,0],portalsewers:[928,0],portalstartaerobot:[944,0],"_portalstart?":[960,0],portalstartworkbot:[976,0],Recharger:[992,0],Recuperation:[1008,0],RoboRat_a:[1024,0],RoboRat:[1040,0],RockCrusher:[1056,0],rock:[1072,0],Screwing:[1088,0],shocker:[1104,0],spacerock:[1120,0],spacetree:[1136,0],spacevoid:[1152,0],spacevoidstarwhite:[1168,0],spacevoidstaryellow:[1184,0],spacewater_a:[1200,0],spacewater:[1216,0],Spirit_a:[1232,0],Spirit:[1248,0],star:[1264,0],terminal:[1280,0],tree:[1296,0],trident:[1312,0],tv:[1328,0],upgradeBioAbsorber:[1344,0],upgradeRecuperation:[1360,0],Valkyrie_a:[1376,0],Valkyrie:[1392,0],voidhidden:[1408,0],void:[1424,0],voidtrue:[1440,0],wall0:[1456,0],wall1:[1472,0],wall2:[1488,0],walla_:[1504,0],wallA:[1520,0],wallb_:[1536,0],wallB:[1552,0],wallc_:[1568,0],wallC:[1584,0],WallCrusher:[1600,0],walld_:[1616,0],wallD:[1632,0],walle_:[1648,0],wallE:[1664,0],wallf_:[1680,0],wallF:[1696,0],wallg_:[1712,0],wallG:[1728,0],wallh_:[1744,0],wallH:[1760,0],walli_:[1776,0],wallI:[1792,0],wallj_:[1808,0],wallJ:[1824,0],wallk_:[1840,0],wallK:[1856,0],walll_:[1872,0],wallL:[1888,0],wallm_:[1904,0],wallM:[1920,0],walln_:[1936,0],wallN:[1952,0],wallo_:[1968,0],wallO:[1984,0],"wall(":[2000,0],"wall)":[2016,0],"wall+":[2032,0],"wall,":[2048,0],"wall.":[2064,0],wall:[2080,0],"wall:":[2096,0],wall_:[2112,0],"wall|":[2128,0],wallp_:[2144,0],wallP:[2160,0],wallq_:[2176,0],wallQ:[2192,0],wallr_:[2208,0],wallR:[2224,0],walls_:[2240,0],wallS:[2256,0],wallstatueaerobot:[2272,0],wallstatuecleaner:[2288,0],wallstatuepioneer:[2304,0],wallstatueworkbot:[2320,0],wallt_:[2336,0],wallT:[2352,0],wallu_:[2368,0],wallU:[2384,0],wallv_:[2400,0],wallV:[2416,0],wallweak:[2432,0],wallw_:[2448,0],wallW:[2464,0],wallx_:[2480,0],wallX:[2496,0],wally_:[2512,0],wallY:[2528,0],wallz_:[2544,0],wallZ:[2560,0],water_a:[2576,0],WaterImmunity:[2592,0],water:[2608,0],watersewage_a:[2624,0],watersewage:[2640,0],WaterShield:[2656,0],WorkBot_a:[2672,0],WorkBot:[2688,0],wrench:[2704,0]};var w1=document.createElement("div");w1.id="ui";document.body.appendChild(w1);var I1=Kw(),_1=Kw(),Jw=I6();Jw.style.marginRight=`${y.fontSize/2}px`;var Y1=[];for(let w=0;w<y.uiEffectsMaxDisplaySize;w++)Y1.push(Kw());var S_=document.createElement("div");S_.replaceChildren(I1,_1,Jw,...Y1);w1.replaceChildren(S_);var T1=document.createElement("div");T1.style.display="flex";T1.style.justifyContent="space-between";var g1=document.createElement("div");g1.id="uichatlog";var G0=document.createElement("div");G0.id="uitooltip";T1.replaceChildren(g1,G0);w1.appendChild(T1);var Vw=document.createElement("div");Vw.id="uimousetooltip";document.body.appendChild(Vw);async function X0(w,J=0){if(!y.showUI)return;let z=P_(),U=w.entities[z],W="";if(U){x_(I1,U.type.name),I1.dataset.tooltip="Player hull: "+U.type.name;let D="",O=b1(w,z);if(O){x_(_1,O.type.name.toLowerCase());let p=O.type;_1.dataset.tooltip=`Player tool: ${p.name} (${Math.abs(p.damage)} damage, ${p.energyCost} energy)`}else x_(_1,null),_1.dataset.tooltip=void 0;let C=Fw(w,z);for(let p=0;p<y.uiEffectsMaxDisplaySize;p++){let Z_=C[p]?.type.name||null,r=C[p]?.type.tooltip||void 0;x_(Y1[p],Z_),Y1[p].dataset.tooltip=r}let A="";if(U.matter>0)A=`${U.matter}M `;let N="";if(U.gold>0)N=`${U.gold}G `;let m=R1(w,U);if(W=" "+U.energy+"/"+U.energyMax+" "+D+N+A+"Y:"+m.B.name+" X:"+m.A.name,w1.style.flexDirection="column-reverse",U.y-J>=G_.height-3)w1.style.flexDirection="column";if(S_.style.background="#000",U.energy/U.energyMax<=0.2)S_.style.color="#000",S_.style.background="#f00";else S_.style.color="#74ee15",S_.style.background="#000"}else{x_(I1,null),x_(_1,null);for(let D=0;D<y.uiEffectsMaxDisplaySize;D++)x_(Y1[D],null);W="Game over!",S_.style.color="#000",S_.style.background="#f00"}if(Jw.innerText=W,w._menuOpen&&!!w.chatLog.length){let D=w.chatLog.slice(-y.chatLogMaxDisplaySize);g1.innerText=D.join(`
`)}else g1.innerText=""}function Kw(){let w=document.createElement("span");return x_(w,null),w.style.height=`${y.fontSize}px`,w.style.display="inline-block",w}function I6(){let w=document.createElement("span");return w.style.display="inline-block",w.style.marginLeft=`${y.fontSize/2}px`,w}function x_(w,J){if(J){let z=f1[J][0];w.style.background=`url('build/tiles.png') -${z}px 0`,w.style.width=`${y.fontSize}px`}else w.style.width="0px"}function Y0(){return Vw}var y_="_a",H0=document.createElement("img");H0.src="build/tiles.png";G_.tileSet=H0;G_.tileMap=h6();var Q1=new W0.Display(G_);document.body.appendChild(Q1.getContainer());var D0=0,P0=0,Z1=void 0;function g6(w,J,z=!1){Z1=w;let U=w.currentMapId,W=w.maps[U],D=z?y_:"",O=0,C=0;if(W.widthTiles<J.width)O=Math.floor((J.width-W.widthTiles)/2),J.x=0;if(W.heightTiles<J.height)C=Math.floor((J.height-W.heightTiles)/2),J.y=0;D0=J.x-O,P0=J.y-C;let A={},N={},m={};for(let h=0;h<J.height;h++)for(let x=0;x<J.width;x++){let n=W.getTile(J.x+x,J.y+h),z_="";if(n?.type)if(n.options.sign)z_="#"+n.options.sign;else z_=n.type.icon;if(z_){let o=[O+x,C+h].toString();A[o]=[z_+D],N[o]=["transparent"],m[o]=["transparent"]}}let p=M1(w,U);for(let h=0;h<p.length;h++){let x=p[h],n=O+x.x-J.x,z_=C+x.y-J.y,o=[n,z_].toString();if(A[o])A[o].push(x.type.icon+D),N[o].push("transparent"),m[o].push("transparent");else A[o]=[x.type.icon+D],N[o]=["transparent"],m[o]=["transparent"]}let Z_=P_(),r=w.entities[Z_],c=((r||{}).options||{}).faction||void 0,Q_=c_(w,U);for(let h=0;h<Q_.length;h++){let x=Q_[h],n=O+x.x-J.x,z_=C+x.y-J.y,o="transparent";if(y.highlightFriendEnemy&&!O_(x)&&!e1(x)&&x!==r)switch(a_(r,x)){case 1:o="rgba(116, 238, 21, 0.5)";break;case 2:o="rgba(240, 0, 255, 0.5)";break}let b=[n,z_].toString();if(A[b])A[b].push(x.type.icon+D),N[b].push(o),m[b].push("transparent");else A[b]=[x.type.icon+D],N[b]=[o],m[b]=["transparent"];if(y.showEnergy!==0){let S=y.showEnergy===1?16:10,f=y.showEnergy===1?"__":"_",g=Math.ceil(x.energy/x.energyMax*S);if(g<S)A[b].push(f+g),N[b].push("transparent"),m[b].push("transparent")}}Q1.clear();for(let[h,x]of Object.entries(A)){let n=h.split(",");Q1.draw(Number(n[0]),Number(n[1]),x,N[h],m[h])}}var L0={x:0,y:0},h1=0;async function r_(w){let J=w.entities[P_()],z=J?J:L0,U=T6(z);if(g6(w,U,h1%2==0),X0(w,U.y),L0=z,h1++,h1>=128)h1=0}async function F0(){Q1._backend.setOptions(G_)}function R0(w){return[w[0]+D0,w[1]+P0]}function j0(w){if(!Z1)return{tile:null,entity:null,item:null};let J=Z1.currentMapId,z=Z1.maps[J],U=w[0],W=w[1],D=z.getTile(U,W),O=P1(Z1,J,U,W),C=O1(Z1,J,U,W);return{tile:D,entity:O,item:C}}function T6(w){return{x:Math.min(Math.max(0,w.x-Math.floor(G_.width/2)),t1.WIDTH-G_.width),y:Math.min(Math.max(0,w.y-Math.floor(G_.height/2)),t1.HEIGHT-G_.height),width:G_.width,height:G_.height}}function h6(){let w={};for(let[J,z]of Object.entries(f1)){let U=J.endsWith(y_),W="";if(U)J=J.substring(0,J.length-y_.length),W=y_;if(J.startsWith("wall")&&(J.length===5||J.length===6))w["#"+J.substring(4,5)+W]=z;else if(Object.hasOwn(P.tiles,J))w[P.tiles[J].icon+W]=z;else if(Object.hasOwn(P.entities,J))w[P.entities[J].icon+W]=z;else if(Object.hasOwn(P.items,J))w[P.items[J].icon+W]=z;else if(Object.hasOwn(P.effects,J))w[P.effects[J].icon+W]=z;else w[J+W]=z}for(let[J,z]of Object.entries(w))if(!J.endsWith(y_)&&!Object.hasOwn(w,J+y_))w[J+y_]=z;return w}async function M0(w){if(!y.showUI||!y.showTooltip)return;let J="";if(w.target){if(w.target?.dataset?.tooltip)J+=w.target.dataset.tooltip}let z=Q1.eventToPosition(w);if(z[0]!==-1){let O=R0(z),C=j0(O);if(C.entity){let A=C.entity?.options?.name?C.entity.options.name:C.entity.type.name;J+=A}if(C.item){if(J!=="")J+=`
`;J+=C.item.type.name}if(!!C?.tile?.type&&C.tile?.type.tooltip!==""){if(J!=="")J+=`
`;J+=C.tile.type.tooltip}}let U=typeof window!=="undefined"?window.innerHeight:0,W=Math.floor(U/2),D=Y0();if(J!==""){D.innerText=J,D.style.display="inline-block";let{offsetWidth:O,offsetHeight:C}=D,A=window.innerWidth,N=window.innerHeight,m=w.x+20,p=w.y+20;if(m+O>A)m=w.x-O-20;if(p+C>N)p=w.y-C-20;D.style.left=m+"px",D.style.top=p+"px"}else D.style.display="none"}var F_=new k1;window.onload=function(){r_(F_.init())};window.onresize=async function(){let w=typeof window!=="undefined"?window.innerWidth:0,J=typeof window!=="undefined"?window.innerHeight:0;y.cameraWidth=Math.floor(w/y.fontSize),y.cameraHeight=Math.floor(J/y.fontSize),G_.width=Math.floor(y.cameraWidth*(1/y.zoom)),G_.height=Math.floor(y.cameraHeight*(1/y.zoom)),await F0(),r_(F_.state)};$0(function(w){r_(F_.update(w))});B0(M0);if(!window.BMActionLog)window.BMActionLog=function(){return F_.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(w){r_(F_.play(w))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){y.debug=!y.debug,r_(F_.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){y.showUI=!y.showUI,r_(F_.state)};if(y.debug){if(!window.BMDebugState)window.BMDebugState=function(){return F_.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let w=Object.keys(F_.state.maps).length,J=Object.keys(F_.state.entities).length,z=Object.keys(F_.state.items).length,U=Object.keys(F_.state.tools).length;return`Maps: ${w}, Entities: ${J}, Items: ${z}, Tools: ${U}`}}document.body.focus();
