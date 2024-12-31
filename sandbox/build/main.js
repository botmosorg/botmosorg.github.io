var jQ=Object.create;var{getPrototypeOf:CQ,defineProperty:oZ,getOwnPropertyNames:NQ}=Object;var AQ=Object.prototype.hasOwnProperty;var IZ=(Q,q,B)=>{B=Q!=null?jQ(CQ(Q)):{};let H=q||!Q||!Q.__esModule?oZ(B,"default",{value:Q,enumerable:!0}):B;for(let D of NQ(Q))if(!AQ.call(H,D))oZ(H,D,{get:()=>Q[D],enumerable:!0});return H};var IQ=(Q,q)=>()=>(q||Q((q={exports:{}}).exports,q),q.exports);var GZ=IQ((LZ,DJ)=>{function H0(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q}function U0(Q,q){Q.prototype=Object.create(q.prototype),Q.prototype.constructor=Q,Q.__proto__=q}(function(Q,q){typeof LZ==="object"&&typeof DJ!=="undefined"?q(LZ):typeof define==="function"&&define.amd?define(["exports"],q):q(Q.ROT={})})(LZ,function(Q){var q=0.00000000023283064365386963,B=function(){function X(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var L=X.prototype;return L.getSeed=function $(){return this._seed},L.setSeed=function $(U){return U=U<1?1/U:U,this._seed=U,this._s0=(U>>>0)*q,U=U*69069+1>>>0,this._s1=U*q,U=U*69069+1>>>0,this._s2=U*q,this._c=1,this},L.getUniform=function $(){var U=2091639*this._s0+this._c*q;return this._s0=this._s1,this._s1=this._s2,this._c=U|0,this._s2=U-this._c,this._s2},L.getUniformInt=function $(U,Z){var J=Math.max(U,Z),V=Math.min(U,Z);return Math.floor(this.getUniform()*(J-V+1))+V},L.getNormal=function $(U,Z){if(U===void 0)U=0;if(Z===void 0)Z=1;var J,V,K;do J=2*this.getUniform()-1,V=2*this.getUniform()-1,K=J*J+V*V;while(K>1||K==0);var z=J*Math.sqrt(-2*Math.log(K)/K);return U+z*Z},L.getPercentage=function $(){return 1+Math.floor(this.getUniform()*100)},L.getItem=function $(U){if(!U.length)return null;return U[Math.floor(this.getUniform()*U.length)]},L.shuffle=function $(U){var Z=[],J=U.slice();while(J.length){var V=J.indexOf(this.getItem(J));Z.push(J.splice(V,1)[0])}return Z},L.getWeightedValue=function $(U){var Z=0;for(var J in U)Z+=U[J];var V=this.getUniform()*Z,K,z=0;for(K in U)if(z+=U[K],V<z)return K;return K},L.getState=function $(){return[this._s0,this._s1,this._s2,this._c]},L.setState=function $(U){return this._s0=U[0],this._s1=U[1],this._s2=U[2],this._c=U[3],this},L.clone=function $(){var U=new X;return U.setState(this.getState())},X}(),H=new B().setSeed(Date.now()),D=function(){function X(){}var L=X.prototype;return L.getContainer=function $(){return null},L.setOptions=function $(U){this._options=U},X}(),R=function(X){U0(L,X);function L(){var U=X.call(this)||this;return U._ctx=document.createElement("canvas").getContext("2d"),U}var $=L.prototype;return $.schedule=function U(Z){requestAnimationFrame(Z)},$.getContainer=function U(){return this._ctx.canvas},$.setOptions=function U(Z){X.prototype.setOptions.call(this,Z);var J=Z.fontStyle?Z.fontStyle+" ":"",V=J+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},$.clear=function U(){this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height)},$.eventToPosition=function U(Z,J){var V=this._ctx.canvas,K=V.getBoundingClientRect();if(Z-=K.left,J-=K.top,Z*=V.width/K.width,J*=V.height/K.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},L}(D);function C(X,L){return(X%L+L)%L}function k(X,L,$){if(L===void 0)L=0;if($===void 0)$=1;if(X<L)return L;if(X>$)return $;return X}function S(X){return X.charAt(0).toUpperCase()+X.substring(1)}function b(X){for(var L=arguments.length,$=new Array(L>1?L-1:0),U=1;U<L;U++)$[U-1]=arguments[U];var Z=b.map,J=function V(K,z,Y,G){if(X.charAt(G-1)=="%")return K.substring(1);if(!$.length)return K;var P=$[0],F=z||Y,M=F.split(","),w=M.shift()||"",O=Z[w.toLowerCase()];if(!O)return K;P=$.shift();var E=P[O].apply(P,M),I=w.charAt(0);if(I!=I.toLowerCase())E=S(E);return E};return X.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,J)}b.map={s:"toString"};var l=Object.freeze({mod:C,clamp:k,capitalize:S,format:b}),J0=function(X){U0(L,X);function L(){var U=X.call(this)||this;return U._spacingX=0,U._spacingY=0,U._hexSize=0,U}var $=L.prototype;return $.draw=function U(Z,J){var V=Z[0],K=Z[1],z=Z[2],Y=Z[3],G=Z[4],P=[(V+1)*this._spacingX,K*this._spacingY+this._hexSize];if(this._options.transpose)P.reverse();if(J)this._ctx.fillStyle=G,this._fill(P[0],P[1]);if(!z)return;this._ctx.fillStyle=Y;var F=[].concat(z);for(var M=0;M<F.length;M++)this._ctx.fillText(F[M],P[0],Math.ceil(P[1]))},$.computeSize=function U(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=Math.floor(Z/this._spacingX)-1,K=Math.floor((J-2*this._hexSize)/this._spacingY+1);return[V,K]},$.computeFontSize=function U(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,K=J/(2+1.5*(this._options.height-1)),z=Math.min(V,K),Y=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var G=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=Y;var P=G/100;z=Math.floor(z)+1;var F=2*z/(this._options.spacing*(1+P/Math.sqrt(3)));return Math.ceil(F)-1},$._normalizedEventToPosition=function U(Z,J){var V;if(this._options.transpose)Z+=J,J=Z-J,Z-=J,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var K=V/this._options.height;if(J=Math.floor(J/K),C(J,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,J]},$._fill=function U(Z,J){var V=this._hexSize,K=this._options.border,z=this._ctx;if(z.beginPath(),this._options.transpose)z.moveTo(Z-V+K,J),z.lineTo(Z-V/2+K,J+this._spacingX-K),z.lineTo(Z+V/2-K,J+this._spacingX-K),z.lineTo(Z+V-K,J),z.lineTo(Z+V/2-K,J-this._spacingX+K),z.lineTo(Z-V/2+K,J-this._spacingX+K),z.lineTo(Z-V+K,J);else z.moveTo(Z,J-V+K),z.lineTo(Z+this._spacingX-K,J-V/2+K),z.lineTo(Z+this._spacingX-K,J+V/2-K),z.lineTo(Z,J+V-K),z.lineTo(Z-this._spacingX+K,J+V/2-K),z.lineTo(Z-this._spacingX+K,J-V/2+K),z.lineTo(Z,J-V+K);z.fill()},$._updateSize=function U(){var Z=this._options,J=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+J/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,K;if(Z.transpose)V="height",K="width";else V="width",K="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[K]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},L}(R),y=function(){var X=function(L){U0($,L);function $(){var Z=L.call(this)||this;return Z._spacingX=0,Z._spacingY=0,Z._canvasCache={},Z}var U=$.prototype;return U.setOptions=function Z(J){L.prototype.setOptions.call(this,J),this._canvasCache={}},U.draw=function Z(J,V){if($.cache)this._drawWithCache(J);else this._drawNoCache(J,V)},U._drawWithCache=function Z(J){var V=J[0],K=J[1],z=J[2],Y=J[3],G=J[4],P=""+z+Y+G,F;if(P in this._canvasCache)F=this._canvasCache[P];else{var M=this._options.border;F=document.createElement("canvas");var w=F.getContext("2d");if(F.width=this._spacingX,F.height=this._spacingY,w.fillStyle=G,w.fillRect(M,M,F.width-M,F.height-M),z){w.fillStyle=Y,w.font=this._ctx.font,w.textAlign="center",w.textBaseline="middle";var O=[].concat(z);for(var E=0;E<O.length;E++)w.fillText(O[E],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[P]=F}this._ctx.drawImage(F,V*this._spacingX,K*this._spacingY)},U._drawNoCache=function Z(J,V){var K=J[0],z=J[1],Y=J[2],G=J[3],P=J[4];if(V){var F=this._options.border;this._ctx.fillStyle=P,this._ctx.fillRect(K*this._spacingX+F,z*this._spacingY+F,this._spacingX-F,this._spacingY-F)}if(!Y)return;this._ctx.fillStyle=G;var M=[].concat(Y);for(var w=0;w<M.length;w++)this._ctx.fillText(M[w],(K+0.5)*this._spacingX,Math.ceil((z+0.5)*this._spacingY))},U.computeSize=function Z(J,V){var K=Math.floor(J/this._spacingX),z=Math.floor(V/this._spacingY);return[K,z]},U.computeFontSize=function Z(J,V){var K=Math.floor(J/this._options.width),z=Math.floor(V/this._options.height),Y=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var G=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=Y;var P=G/100,F=P*z/K;if(F>1)z=Math.floor(z/F);return Math.floor(z/this._options.spacing)},U._normalizedEventToPosition=function Z(J,V){return[Math.floor(J/this._spacingX),Math.floor(V/this._spacingY)]},U._updateSize=function Z(){var J=this._options,V=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(J.spacing*V),this._spacingY=Math.ceil(J.spacing*J.fontSize),J.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=J.width*this._spacingX,this._ctx.canvas.height=J.height*this._spacingY},$}(R);return X.cache=!1,X}(),d=function(X){U0(L,X);function L(){var U=X.call(this)||this;return U._colorCanvas=document.createElement("canvas"),U}var $=L.prototype;return $.draw=function U(Z,J){var V=Z[0],K=Z[1],z=Z[2],Y=Z[3],G=Z[4],P=this._options.tileWidth,F=this._options.tileHeight;if(J)if(this._options.tileColorize)this._ctx.clearRect(V*P,K*F,P,F);else this._ctx.fillStyle=G,this._ctx.fillRect(V*P,K*F,P,F);if(!z)return;var M=[].concat(z),w=[].concat(Y),O=[].concat(G);for(var E=0;E<M.length;E++){var I=this._options.tileMap[M[E]];if(!I)throw new Error('Char "'+M[E]+'" not found in tileMap');if(this._options.tileColorize){var u=this._colorCanvas,x=u.getContext("2d");x.globalCompositeOperation="source-over",x.clearRect(0,0,P,F);var m=w[E],t=O[E];if(x.drawImage(this._options.tileSet,I[0],I[1],P,F,0,0,P,F),m!="transparent")x.fillStyle=m,x.globalCompositeOperation="source-atop",x.fillRect(0,0,P,F);if(t!="transparent")x.fillStyle=t,x.globalCompositeOperation="destination-over",x.fillRect(0,0,P,F);this._ctx.drawImage(u,V*P,K*F,P,F)}else this._ctx.drawImage(this._options.tileSet,I[0],I[1],P,F,V*P,K*F,P,F)}},$.computeSize=function U(Z,J){var V=Math.floor(Z/this._options.tileWidth),K=Math.floor(J/this._options.tileHeight);return[V,K]},$.computeFontSize=function U(){throw new Error("Tile backend does not understand font size")},$._normalizedEventToPosition=function U(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},$._updateSize=function U(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},L}(R);function p(X){var L,$;if(X in j)L=j[X];else{if(X.charAt(0)=="#"){var U=X.match(/[0-9a-f]/gi)||[],Z=U.map(function(V){return parseInt(V,16)});if(Z.length==3)L=Z.map(function(V){return V*17});else{for(var J=0;J<3;J++)Z[J+1]+=16*Z[J],Z.splice(J,1);L=Z}}else if($=X.match(/rgb\(([0-9, ]+)\)/i))L=$[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else L=[0,0,0];j[X]=L}return L.slice()}function _(X){var L=X.slice();for(var $=arguments.length,U=new Array($>1?$-1:0),Z=1;Z<$;Z++)U[Z-1]=arguments[Z];for(var J=0;J<3;J++)for(var V=0;V<U.length;V++)L[J]+=U[V][J];return L}function g(X){for(var L=arguments.length,$=new Array(L>1?L-1:0),U=1;U<L;U++)$[U-1]=arguments[U];for(var Z=0;Z<3;Z++)for(var J=0;J<$.length;J++)X[Z]+=$[J][Z];return X}function n(X){var L=X.slice();for(var $=arguments.length,U=new Array($>1?$-1:0),Z=1;Z<$;Z++)U[Z-1]=arguments[Z];for(var J=0;J<3;J++){for(var V=0;V<U.length;V++)L[J]*=U[V][J]/255;L[J]=Math.round(L[J])}return L}function Q0(X){for(var L=arguments.length,$=new Array(L>1?L-1:0),U=1;U<L;U++)$[U-1]=arguments[U];for(var Z=0;Z<3;Z++){for(var J=0;J<$.length;J++)X[Z]*=$[J][Z]/255;X[Z]=Math.round(X[Z])}return X}function $0(X,L,$){if($===void 0)$=0.5;var U=X.slice();for(var Z=0;Z<3;Z++)U[Z]=Math.round(U[Z]+$*(L[Z]-X[Z]));return U}var X0=$0;function N(X,L,$){if($===void 0)$=0.5;var U=h(X),Z=h(L);for(var J=0;J<3;J++)U[J]+=$*(Z[J]-U[J]);return o(U)}var v=N;function T(X,L){if(!(L instanceof Array))L=Math.round(H.getNormal(0,L));var $=X.slice();for(var U=0;U<3;U++)$[U]+=L instanceof Array?Math.round(H.getNormal(0,L[U])):L;return $}function h(X){var L=X[0]/255,$=X[1]/255,U=X[2]/255,Z=Math.max(L,$,U),J=Math.min(L,$,U),V=0,K,z=(Z+J)/2;if(Z==J)K=0;else{var Y=Z-J;switch(K=z>0.5?Y/(2-Z-J):Y/(Z+J),Z){case L:V=($-U)/Y+($<U?6:0);break;case $:V=(U-L)/Y+2;break;case U:V=(L-$)/Y+4;break}V/=6}return[V,K,z]}function i(X,L,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return X+(L-X)*6*$;if($<0.5)return L;if($<0.6666666666666666)return X+(L-X)*(0.6666666666666666-$)*6;return X}function o(X){var L=X[2];if(X[1]==0)return L=Math.round(L*255),[L,L,L];else{var $=X[1],U=L<0.5?L*(1+$):L+$-L*$,Z=2*L-U,J=i(Z,U,X[0]+0.3333333333333333),V=i(Z,U,X[0]),K=i(Z,U,X[0]-0.3333333333333333);return[Math.round(J*255),Math.round(V*255),Math.round(K*255)]}}function f(X){var L=X.map(function($){return k($,0,255)});return"rgb("+L.join(",")+")"}function A(X){var L=X.map(function($){return k($,0,255).toString(16).padStart(2,"0")});return"#"+L.join("")}var j={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},r=Object.freeze({fromString:p,add:_,add_:g,multiply:n,multiply_:Q0,interpolate:$0,lerp:X0,interpolateHSL:N,lerpHSL:v,randomize:T,rgb2hsl:h,hsl2rgb:o,toRGB:f,toHex:A}),e=function(X){U0(L,X);function L(){var U=X.call(this)||this;U._uniforms={};try{U._gl=U._initWebGL()}catch(Z){alert(Z.message)}return U}L.isSupported=function U(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var $=L.prototype;return $.schedule=function U(Z){requestAnimationFrame(Z)},$.getContainer=function U(){return this._gl.canvas},$.setOptions=function U(Z){var J=this;X.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return J._updateTexture(V)});else this._updateTexture(V)},$.draw=function U(Z,J){var V=this._gl,K=this._options,z=Z[0],Y=Z[1],G=Z[2],P=Z[3],F=Z[4],M=V.canvas.height-(Y+1)*K.tileHeight;if(V.scissor(z*K.tileWidth,M,K.tileWidth,K.tileHeight),J){if(K.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,_0(F));V.clear(V.COLOR_BUFFER_BIT)}if(!G)return;var w=[].concat(G),O=[].concat(F),E=[].concat(P);V.uniform2fv(this._uniforms.targetPosRel,[z,Y]);for(var I=0;I<w.length;I++){var u=this._options.tileMap[w[I]];if(!u)throw new Error('Char "'+w[I]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,K.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,u),K.tileColorize)V.uniform4fv(this._uniforms.tint,_0(E[I])),V.uniform4fv(this._uniforms.bg,_0(O[I]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},$.clear=function U(){var Z=this._gl;Z.clearColor.apply(Z,_0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},$.computeSize=function U(Z,J){var V=Math.floor(Z/this._options.tileWidth),K=Math.floor(J/this._options.tileHeight);return[V,K]},$.computeFontSize=function U(){throw new Error("Tile backend does not understand font size")},$.eventToPosition=function U(Z,J){var V=this._gl.canvas,K=V.getBoundingClientRect();if(Z-=K.left,J-=K.top,Z*=V.width/K.width,J*=V.height/K.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},$._initWebGL=function U(){var Z=this,J=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=J;var V=E0(J,P0,z0);return J.useProgram(V),L0(J),V0.forEach(function(K){return Z._uniforms[K]=J.getUniformLocation(V,K)}),this._program=V,J.enable(J.BLEND),J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA),J.enable(J.SCISSOR_TEST),J},$._normalizedEventToPosition=function U(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},$._updateSize=function U(){var Z=this._gl,J=this._options,V=[J.width*J.tileWidth,J.height*J.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[J.tileWidth,J.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},$._updateTexture=function U(Z){c0(this._gl,Z)},L}(D),V0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],P0=`
#version 300 es

in vec2 tilePosRel;
out vec2 tilesetPosPx;

uniform vec2 tilesetPosAbs;
uniform vec2 tileSize;
uniform vec2 targetSize;
uniform vec2 targetPosRel;

void main() {
\tvec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;
\tvec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;
\ttargetPosNdc.y *= -1.0;

\tgl_Position = vec4(targetPosNdc, 0.0, 1.0);
\ttilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;
}`.trim(),z0=`
#version 300 es
precision highp float;

in vec2 tilesetPosPx;
out vec4 fragColor;
uniform sampler2D image;
uniform bool colorize;
uniform vec4 bg;
uniform vec4 tint;

void main() {
\tfragColor = vec4(0, 0, 0, 1);

\tvec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);

\tif (colorize) {
\t\ttexel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;
\t\tfragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;
\t\tfragColor.a = texel.a + (1.0-texel.a)*bg.a;
\t} else {
\t\tfragColor = texel;
\t}
}`.trim();function E0(X,L,$){var U=X.createShader(X.VERTEX_SHADER);if(X.shaderSource(U,L),X.compileShader(U),!X.getShaderParameter(U,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(U)||"");var Z=X.createShader(X.FRAGMENT_SHADER);if(X.shaderSource(Z,$),X.compileShader(Z),!X.getShaderParameter(Z,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(Z)||"");var J=X.createProgram();if(X.attachShader(J,U),X.attachShader(J,Z),X.linkProgram(J),!X.getProgramParameter(J,X.LINK_STATUS))throw new Error(X.getProgramInfoLog(J)||"");return J}function L0(X){var L=new Float32Array([0,0,1,0,0,1,1,1]),$=X.createBuffer();X.bindBuffer(X.ARRAY_BUFFER,$),X.bufferData(X.ARRAY_BUFFER,L,X.STATIC_DRAW),X.enableVertexAttribArray(0),X.vertexAttribPointer(0,2,X.FLOAT,!1,0,0)}function c0(X,L){var $=X.createTexture();return X.bindTexture(X.TEXTURE_2D,$),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MAG_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MIN_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_S,X.REPEAT),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_T,X.REPEAT),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,0),X.texImage2D(X.TEXTURE_2D,0,X.RGBA,X.RGBA,X.UNSIGNED_BYTE,L),$}var A0={};function _0(X){if(!(X in A0)){var L;if(X=="transparent")L=[0,0,0,0];else if(X.indexOf("rgba")>-1){L=(X.match(/[\d.]+/g)||[]).map(Number);for(var $=0;$<3;$++)L[$]=L[$]/255}else L=p(X).map(function(U){return U/255}),L.push(1);A0[X]=L}return A0[X]}function gJ(X){return"\x1B[0;48;5;"+FZ(X)+"m\x1B[2J"}function hJ(X,L){return"\x1B[0;38;5;"+FZ(X)+";48;5;"+FZ(L)+"m"}function xJ(X,L){return"\x1B["+(L+1)+";"+(X+1)+"H"}function FZ(X){var L=256,$=6,U=$/L,Z=p(X),J=Math.floor(Z[0]*U),V=Math.floor(Z[1]*U),K=Math.floor(Z[2]*U);return J*36+V*6+K*1+16}var xZ=function(X){U0(L,X);function L(){var U=X.call(this)||this;return U._offset=[0,0],U._cursor=[-1,-1],U._lastColor="",U}var $=L.prototype;return $.schedule=function U(Z){setTimeout(Z,16.666666666666668)},$.setOptions=function U(Z){X.prototype.setOptions.call(this,Z);var J=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(K,z){return Math.floor((K-J[z])/2)})},$.clear=function U(){process.stdout.write(gJ(this._options.bg))},$.draw=function U(Z,J){var V=Z[0],K=Z[1],z=Z[2],Y=Z[3],G=Z[4],P=this._offset[0]+V,F=this._offset[1]+K,M=this.computeSize();if(P<0||P>=M[0])return;if(F<0||F>=M[1])return;if(P!==this._cursor[0]||F!==this._cursor[1])process.stdout.write(xJ(P,F)),this._cursor[0]=P,this._cursor[1]=F;if(J){if(!z)z=" "}if(!z)return;var w=hJ(Y,G);if(w!==this._lastColor)process.stdout.write(w),this._lastColor=w;if(z!="\t"){var O=[].concat(z);process.stdout.write(O[0])}if(this._cursor[0]++,this._cursor[0]>=M[0])this._cursor[0]=0,this._cursor[1]++},$.computeFontSize=function U(){throw new Error("Terminal backend has no notion of font size")},$.eventToPosition=function U(Z,J){return[Z,J]},$.computeSize=function U(){return[process.stdout.columns,process.stdout.rows]},L}(D),_J=/%([bc]){([^}]*)}/g,I0=0,v0=1,DZ=2,wZ=3;function mJ(X,L){var $={width:0,height:1},U=MZ(X,L),Z=0;for(var J=0;J<U.length;J++){var V=U[J];switch(V.type){case I0:Z+=V.value.length;break;case v0:$.height++,$.width=Math.max($.width,Z),Z=0;break}}return $.width=Math.max($.width,Z),$}function MZ(X,L){var $=[],U=0;X.replace(_J,function(J,V,K,z){var Y=X.substring(U,z);if(Y.length)$.push({type:I0,value:Y});return $.push({type:V=="c"?DZ:wZ,value:K.trim()}),U=z+J.length,""});var Z=X.substring(U);if(Z.length)$.push({type:I0,value:Z});return yJ($,L)}function yJ(X,L){if(!L)L=1/0;var $=0,U=0,Z=-1;while($<X.length){var J=X[$];if(J.type==v0)U=0,Z=-1;if(J.type!=I0){$++;continue}while(U==0&&J.value.charAt(0)==" ")J.value=J.value.substring(1);var V=J.value.indexOf(`
`);if(V!=-1){J.value=e0(X,$,V,!0);var K=J.value.split("");while(K.length&&K[K.length-1]==" ")K.pop();J.value=K.join("")}if(!J.value.length){X.splice($,1);continue}if(U+J.value.length>L){var z=-1;while(!0){var Y=J.value.indexOf(" ",z+1);if(Y==-1)break;if(U+Y>L)break;z=Y}if(z!=-1)J.value=e0(X,$,z,!0);else if(Z!=-1){var G=X[Z],P=G.value.lastIndexOf(" ");G.value=e0(X,Z,P,!0),$=Z}else J.value=e0(X,$,L-U,!1)}else if(U+=J.value.length,J.value.indexOf(" ")!=-1)Z=$;$++}X.push({type:v0});var F=null;for(var M=0;M<X.length;M++){var w=X[M];switch(w.type){case I0:F=w;break;case v0:if(F){var O=F.value.split("");while(O.length&&O[O.length-1]==" ")O.pop();F.value=O.join("")}F=null;break}}return X.pop(),X}function e0(X,L,$,U){var Z={type:v0},J={type:I0,value:X[L].value.substring($+(U?1:0))};return X.splice(L+1,0,Z,J),X[L].value.substring(0,$)}var pJ=Object.freeze({TYPE_TEXT:I0,TYPE_NEWLINE:v0,TYPE_FG:DZ,TYPE_BG:wZ,measure:mJ,tokenize:MZ}),WZ=80,OZ=25,B0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},cJ={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},dJ={hex:J0,rect:y,tile:d,"tile-gl":e,term:xZ},lJ={width:WZ,height:OZ,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},nJ=function(){var X=function(){function L(U){if(U===void 0)U={};this._data={},this._dirty=!1,this._options={},U=Object.assign({},lJ,U),this.setOptions(U),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var $=L.prototype;return $.DEBUG=function U(Z,J,V){var K=[this._options.bg,this._options.fg];this.draw(Z,J,null,null,K[V%K.length])},$.clear=function U(){this._data={},this._dirty=!0},$.setOptions=function U(Z){if(Object.assign(this._options,Z),Z.width||Z.height||Z.fontSize||Z.fontFamily||Z.spacing||Z.layout){if(Z.layout){var J=dJ[Z.layout];this._backend=new J}this._backend.setOptions(this._options),this._dirty=!0}return this},$.getOptions=function U(){return this._options},$.getContainer=function U(){return this._backend.getContainer()},$.computeSize=function U(Z,J){return this._backend.computeSize(Z,J)},$.computeFontSize=function U(Z,J){return this._backend.computeFontSize(Z,J)},$.computeTileSize=function U(Z,J){var V=Math.floor(Z/this._options.width),K=Math.floor(J/this._options.height);return[V,K]},$.eventToPosition=function U(Z){var J,V;if("touches"in Z)J=Z.touches[0].clientX,V=Z.touches[0].clientY;else J=Z.clientX,V=Z.clientY;return this._backend.eventToPosition(J,V)},$.draw=function U(Z,J,V,K,z){if(!K)K=this._options.fg;if(!z)z=this._options.bg;var Y=Z+","+J;if(this._data[Y]=[Z,J,V,K,z],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[Y]=!0},$.drawOver=function U(Z,J,V,K,z){var Y=Z+","+J,G=this._data[Y];if(G)G[2]=V||G[2],G[3]=K||G[3],G[4]=z||G[4];else this.draw(Z,J,V,K,z)},$.drawText=function U(Z,J,V,K){var z=null,Y=null,G=Z,P=J,F=1;if(!K)K=this._options.width-Z;var M=MZ(V,K);while(M.length){var w=M.shift();switch(w.type){case I0:var O=!1,E=!1,I=!1,u=!1;for(var x=0;x<w.value.length;x++){var m=w.value.charCodeAt(x),t=w.value.charAt(x);if(this._options.layout==="term"){var s=m>>8,K0=s===17||s>=46&&s<=159||s>=172&&s<=215||m>=43360&&m<=43391;if(K0){this.draw(G+0,P,t,z,Y),this.draw(G+1,P,"\t",z,Y),G+=2;continue}}if(I=m>65280&&m<65377||m>65500&&m<65512||m>65518,O=t.charCodeAt(0)==32||t.charCodeAt(0)==12288,u&&!I&&!O)G++;if(I&&!E)G++;this.draw(G++,P,t,z,Y),E=O,u=I}break;case DZ:z=w.value||null;break;case wZ:Y=w.value||null;break;case v0:G=Z,P++,F++;break}}return F},$._tick=function U(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var Z in this._data)this._draw(Z,!1)}else for(var J in this._dirty)this._draw(J,!0);this._dirty=!1},$._draw=function U(Z,J){var V=this._data[Z];if(V[4]!=this._options.bg)J=!0;this._backend.draw(V,J)},L}();return X.Rect=y,X.Hex=J0,X.Tile=d,X.TileGL=e,X.Term=xZ,X}(),rJ=function(){function X($){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,$),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var U=0;U<this._options.order;U++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var L=X.prototype;return L.clear=function $(){this._data={},this._priorValues={}},L.generate=function $(){var U=[this._sample(this._prefix)];while(U[U.length-1]!=this._boundary)U.push(this._sample(U));return this._join(U.slice(0,-1))},L.observe=function $(U){var Z=this._split(U);for(var J=0;J<Z.length;J++)this._priorValues[Z[J]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var K=Z.slice(V-this._options.order,V),z=Z[V];for(var Y=0;Y<K.length;Y++){var G=K.slice(Y);this._observeEvent(G,z)}}},L.getStats=function $(){var U=[],Z=Object.keys(this._priorValues).length;Z--,U.push("distinct samples: "+Z);var J=Object.keys(this._data).length,V=0;for(var K in this._data)V+=Object.keys(this._data[K]).length;return U.push("dictionary size (contexts): "+J),U.push("dictionary size (events): "+V),U.join(", ")},L._split=function $(U){return U.split(this._options.words?/\s+/:"")},L._join=function $(U){return U.join(this._options.words?" ":"")},L._observeEvent=function $(U,Z){var J=this._join(U);if(!(J in this._data))this._data[J]={};var V=this._data[J];if(!(Z in V))V[Z]=0;V[Z]++},L._sample=function $(U){U=this._backoff(U);var Z=this._join(U),J=this._data[Z],V={};if(this._options.prior){for(var K in this._priorValues)V[K]=this._priorValues[K];for(var z in J)V[z]+=J[z]}else V=J;return H.getWeightedValue(V)},L._backoff=function $(U){if(U.length>this._options.order)U=U.slice(-this._options.order);else if(U.length<this._options.order)U=this._prefix.slice(0,this._options.order-U.length).concat(U);while(!(this._join(U)in this._data)&&U.length>0)U=U.slice(1);return U},X}(),_Z=function(){function X(){this.heap=[],this.timestamp=0}var L=X.prototype;return L.lessThan=function $(U,Z){return U.key==Z.key?U.timestamp<Z.timestamp:U.key<Z.key},L.shift=function $(U){this.heap=this.heap.map(function(Z){var{key:J,value:V,timestamp:K}=Z;return{key:J+U,value:V,timestamp:K}})},L.len=function $(){return this.heap.length},L.push=function $(U,Z){this.timestamp+=1;var J=this.len();this.heap.push({value:U,timestamp:this.timestamp,key:Z}),this.updateUp(J)},L.pop=function $(){if(this.len()==0)throw new Error("no element to pop");var U=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return U},L.find=function $(U){for(var Z=0;Z<this.len();Z++)if(U==this.heap[Z].value)return this.heap[Z];return null},L.remove=function $(U){var Z=null;for(var J=0;J<this.len();J++)if(U==this.heap[J].value)Z=J;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=U)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},L.parentNode=function $(U){return Math.floor((U-1)/2)},L.leftChildNode=function $(U){return 2*U+1},L.rightChildNode=function $(U){return 2*U+2},L.existNode=function $(U){return U>=0&&U<this.heap.length},L.swap=function $(U,Z){var J=this.heap[U];this.heap[U]=this.heap[Z],this.heap[Z]=J},L.minNode=function $(U){var Z=U.filter(this.existNode.bind(this)),J=Z[0];for(var z=Z,V=Array.isArray(z),K=0,z=V?z:z[Symbol.iterator]();;){var Y;if(V){if(K>=z.length)break;Y=z[K++]}else{if(K=z.next(),K.done)break;Y=K.value}var G=Y;if(this.lessThan(this.heap[G],this.heap[J]))J=G}return J},L.updateUp=function $(U){if(U==0)return;var Z=this.parentNode(U);if(this.existNode(Z)&&this.lessThan(this.heap[U],this.heap[Z]))this.swap(U,Z),this.updateUp(Z)},L.updateDown=function $(U){var Z=this.leftChildNode(U),J=this.rightChildNode(U);if(!this.existNode(Z))return;var V=this.minNode([U,Z,J]);if(V!=U)this.swap(U,V),this.updateDown(V)},L.debugPrint=function $(){console.log(this.heap)},X}(),mZ=function(){function X(){this._time=0,this._events=new _Z}var L=X.prototype;return L.getTime=function $(){return this._time},L.clear=function $(){return this._events=new _Z,this},L.add=function $(U,Z){this._events.push(U,Z)},L.get=function $(){if(!this._events.len())return null;var U=this._events.pop(),Z=U.key,J=U.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return J},L.getEventTime=function $(U){var Z=this._events.find(U);if(Z){var J=Z.key;return J}return},L.remove=function $(U){return this._events.remove(U)},X}(),RZ=function(){function X(){this._queue=new mZ,this._repeat=[],this._current=null}var L=X.prototype;return L.getTime=function $(){return this._queue.getTime()},L.add=function $(U,Z){if(Z)this._repeat.push(U);return this},L.getTimeOf=function $(U){return this._queue.getEventTime(U)},L.clear=function $(){return this._queue.clear(),this._repeat=[],this._current=null,this},L.remove=function $(U){var Z=this._queue.remove(U),J=this._repeat.indexOf(U);if(J!=-1)this._repeat.splice(J,1);if(this._current==U)this._current=null;return Z},L.next=function $(){return this._current=this._queue.get(),this._current},X}(),sJ=function(X){U0(L,X);function L(){return X.apply(this,arguments)||this}var $=L.prototype;return $.add=function U(Z,J){return this._queue.add(Z,0),X.prototype.add.call(this,Z,J)},$.next=function U(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return X.prototype.next.call(this)},L}(RZ),oJ=function(X){U0(L,X);function L(){return X.apply(this,arguments)||this}var $=L.prototype;return $.add=function U(Z,J,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),X.prototype.add.call(this,Z,J)},$.next=function U(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return X.prototype.next.call(this)},L}(RZ),aJ=function(X){U0(L,X);function L(){var U=X.call(this)||this;return U._defaultDuration=1,U._duration=U._defaultDuration,U}var $=L.prototype;return $.add=function U(Z,J,V){return this._queue.add(Z,V||this._defaultDuration),X.prototype.add.call(this,Z,J)},$.clear=function U(){return this._duration=this._defaultDuration,X.prototype.clear.call(this)},$.remove=function U(Z){if(Z==this._current)this._duration=this._defaultDuration;return X.prototype.remove.call(this,Z)},$.next=function U(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return X.prototype.next.call(this)},$.setDuration=function U(Z){if(this._current)this._duration=Z;return this},L}(RZ),iJ={Simple:sJ,Speed:oJ,Action:aJ},EZ=function(){function X($,U){if(U===void 0)U={};this._lightPasses=$,this._options=Object.assign({topology:8},U)}var L=X.prototype;return L._getCircle=function $(U,Z,J){var V=[],K,z,Y;switch(this._options.topology){case 4:z=1,Y=[0,1],K=[B0[8][7],B0[8][1],B0[8][3],B0[8][5]];break;case 6:K=B0[6],z=1,Y=[-1,1];break;case 8:K=B0[4],z=2,Y=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var G=U+Y[0]*J,P=Z+Y[1]*J;for(var F=0;F<K.length;F++)for(var M=0;M<J*z;M++)V.push([G,P]),G+=K[F][0],P+=K[F][1];return V},X}(),eJ=function(X){U0(L,X);function L(){return X.apply(this,arguments)||this}var $=L.prototype;return $.compute=function U(Z,J,V,K){if(K(Z,J,0,1),!this._lightPasses(Z,J))return;var z=[],Y,G,P,F,M;for(var w=1;w<=V;w++){var O=this._getCircle(Z,J,w),E=360/O.length;for(var I=0;I<O.length;I++){if(P=O[I][0],F=O[I][1],Y=E*(I-0.5),G=Y+E,M=!this._lightPasses(P,F),this._visibleCoords(Math.floor(Y),Math.ceil(G),M,z))K(P,F,w,1);if(z.length==2&&z[0]==0&&z[1]==360)return}}},$._visibleCoords=function U(Z,J,V,K){if(Z<0){var z=this._visibleCoords(0,J,V,K),Y=this._visibleCoords(360+Z,360,V,K);return z||Y}var G=0;while(G<K.length&&K[G]<Z)G++;if(G==K.length){if(V)K.push(Z,J);return!0}var P=0;if(G%2){while(G<K.length&&K[G]<J)G++,P++;if(P==0)return!1;if(V)if(P%2)K.splice(G-P,P,J);else K.splice(G-P,P);return!0}else{while(G<K.length&&K[G]<J)G++,P++;if(Z==K[G-P]&&P==1)return!1;if(V)if(P%2)K.splice(G-P,P,Z);else K.splice(G-P,P,Z,J);return!0}},L}(EZ),tJ=function(X){U0(L,X);function L(){return X.apply(this,arguments)||this}var $=L.prototype;return $.compute=function U(Z,J,V,K){if(K(Z,J,0,1),!this._lightPasses(Z,J))return;var z=[],Y,G,P,F,M,w;for(var O=1;O<=V;O++){var E=this._getCircle(Z,J,O),I=E.length;for(var u=0;u<I;u++){if(Y=E[u][0],G=E[u][1],F=[u?2*u-1:2*I-1,2*I],M=[2*u+1,2*I],P=!this._lightPasses(Y,G),w=this._checkVisibility(F,M,P,z),w)K(Y,G,O,w);if(z.length==2&&z[0][0]==0&&z[1][0]==z[1][1])return}}},$._checkVisibility=function U(Z,J,V,K){if(Z[0]>J[0]){var z=this._checkVisibility(Z,[Z[1],Z[1]],V,K),Y=this._checkVisibility([0,1],J,V,K);return(z+Y)/2}var G=0,P=!1;while(G<K.length){var F=K[G],M=F[0]*Z[1]-Z[0]*F[1];if(M>=0){if(M==0&&!(G%2))P=!0;break}G++}var w=K.length,O=!1;while(w--){var E=K[w],I=J[0]*E[1]-E[0]*J[1];if(I>=0){if(I==0&&w%2)O=!0;break}}var u=!0;if(G==w&&(P||O))u=!1;else if(P&&O&&G+1==w&&w%2)u=!1;else if(G>w&&G%2)u=!1;if(!u)return 0;var x,m=w-G+1;if(m%2)if(G%2){var t=K[G];if(x=(J[0]*t[1]-t[0]*J[1])/(t[1]*J[1]),V)K.splice(G,m,J)}else{var s=K[w];if(x=(s[0]*Z[1]-Z[0]*s[1])/(Z[1]*s[1]),V)K.splice(G,m,Z)}else if(G%2){var K0=K[G],G0=K[w];if(x=(G0[0]*K0[1]-K0[0]*G0[1])/(K0[1]*G0[1]),V)K.splice(G,m)}else{if(V)K.splice(G,m,Z,J);return 1}var j0=(J[0]*Z[1]-Z[0]*J[1])/(Z[1]*J[1]);return x/j0},L}(EZ),S0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],ZQ=function(X){U0(L,X);function L(){return X.apply(this,arguments)||this}var $=L.prototype;return $.compute=function U(Z,J,V,K){K(Z,J,0,1);for(var z=0;z<S0.length;z++)this._renderOctant(Z,J,S0[z],V,K)},$.compute180=function U(Z,J,V,K,z){z(Z,J,0,1);var Y=(K-1+8)%8,G=(K-2+8)%8,P=(K+1+8)%8;this._renderOctant(Z,J,S0[G],V,z),this._renderOctant(Z,J,S0[Y],V,z),this._renderOctant(Z,J,S0[K],V,z),this._renderOctant(Z,J,S0[P],V,z)},$.compute90=function U(Z,J,V,K,z){z(Z,J,0,1);var Y=(K-1+8)%8;this._renderOctant(Z,J,S0[K],V,z),this._renderOctant(Z,J,S0[Y],V,z)},$._renderOctant=function U(Z,J,V,K,z){this._castVisibility(Z,J,1,1,0,K+1,V[0],V[1],V[2],V[3],z)},$._castVisibility=function U(Z,J,V,K,z,Y,G,P,F,M,w){if(K<z)return;for(var O=V;O<=Y;O++){var E=-O-1,I=-O,u=!1,x=0;while(E<=0){E+=1;var m=Z+E*G+I*P,t=J+E*F+I*M,s=(E-0.5)/(I+0.5),K0=(E+0.5)/(I-0.5);if(K0>K)continue;if(s<z)break;if(E*E+I*I<Y*Y)w(m,t,O,1);if(!u){if(!this._lightPasses(m,t)&&O<Y)u=!0,this._castVisibility(Z,J,O+1,K,s,Y,G,P,F,M,w),x=K0}else{if(!this._lightPasses(m,t)){x=K0;continue}u=!1,K=x}}if(u)break}},L}(EZ),JQ={DiscreteShadowcasting:eJ,PreciseShadowcasting:tJ,RecursiveShadowcasting:ZQ},k0=function(){function X($,U){if($===void 0)$=WZ;if(U===void 0)U=OZ;this._width=$,this._height=U}var L=X.prototype;return L._fillMap=function $(U){var Z=[];for(var J=0;J<this._width;J++){Z.push([]);for(var V=0;V<this._height;V++)Z[J].push(U)}return Z},X}(),QQ=function(X){U0(L,X);function L(){return X.apply(this,arguments)||this}var $=L.prototype;return $.create=function U(Z){var J=this._width-1,V=this._height-1;for(var K=0;K<=J;K++)for(var z=0;z<=V;z++){var Y=K&&z&&K<J&&z<V;Z(K,z,Y?0:1)}return this},L}(k0),yZ=function(X){U0(L,X);function L(U,Z){var J=X.call(this,U,Z)||this;return J._rooms=[],J._corridors=[],J}var $=L.prototype;return $.getRooms=function U(){return this._rooms},$.getCorridors=function U(){return this._corridors},L}(k0),pZ=function X(){},t0=function(X){U0(L,X);function L(U,Z,J,V,K,z){var Y=X.call(this)||this;if(Y._x1=U,Y._y1=Z,Y._x2=J,Y._y2=V,Y._doors={},K!==void 0&&z!==void 0)Y.addDoor(K,z);return Y}L.createRandomAt=function U(Z,J,V,K,z){var Y=z.roomWidth[0],G=z.roomWidth[1],P=H.getUniformInt(Y,G);Y=z.roomHeight[0],G=z.roomHeight[1];var F=H.getUniformInt(Y,G);if(V==1){var M=J-Math.floor(H.getUniform()*F);return new this(Z+1,M,Z+P,M+F-1,Z,J)}if(V==-1){var w=J-Math.floor(H.getUniform()*F);return new this(Z-P,w,Z-1,w+F-1,Z,J)}if(K==1){var O=Z-Math.floor(H.getUniform()*P);return new this(O,J+1,O+P-1,J+F,Z,J)}if(K==-1){var E=Z-Math.floor(H.getUniform()*P);return new this(E,J-F,E+P-1,J-1,Z,J)}throw new Error("dx or dy must be 1 or -1")},L.createRandomCenter=function U(Z,J,V){var K=V.roomWidth[0],z=V.roomWidth[1],Y=H.getUniformInt(K,z);K=V.roomHeight[0],z=V.roomHeight[1];var G=H.getUniformInt(K,z),P=Z-Math.floor(H.getUniform()*Y),F=J-Math.floor(H.getUniform()*G),M=P+Y-1,w=F+G-1;return new this(P,F,M,w)},L.createRandom=function U(Z,J,V){var K=V.roomWidth[0],z=V.roomWidth[1],Y=H.getUniformInt(K,z);K=V.roomHeight[0],z=V.roomHeight[1];var G=H.getUniformInt(K,z),P=Z-Y-1,F=J-G-1,M=1+Math.floor(H.getUniform()*P),w=1+Math.floor(H.getUniform()*F),O=M+Y-1,E=w+G-1;return new this(M,w,O,E)};var $=L.prototype;return $.addDoor=function U(Z,J){return this._doors[Z+","+J]=1,this},$.getDoors=function U(Z){for(var J in this._doors){var V=J.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},$.clearDoors=function U(){return this._doors={},this},$.addDoors=function U(Z){var J=this._x1-1,V=this._x2+1,K=this._y1-1,z=this._y2+1;for(var Y=J;Y<=V;Y++)for(var G=K;G<=z;G++){if(Y!=J&&Y!=V&&G!=K&&G!=z)continue;if(Z(Y,G))continue;this.addDoor(Y,G)}return this},$.debug=function U(){console.log("room",this._x1,this._y1,this._x2,this._y2)},$.isValid=function U(Z,J){var V=this._x1-1,K=this._x2+1,z=this._y1-1,Y=this._y2+1;for(var G=V;G<=K;G++)for(var P=z;P<=Y;P++)if(G==V||G==K||P==z||P==Y){if(!Z(G,P))return!1}else if(!J(G,P))return!1;return!0},$.create=function U(Z){var J=this._x1-1,V=this._x2+1,K=this._y1-1,z=this._y2+1,Y=0;for(var G=J;G<=V;G++)for(var P=K;P<=z;P++){if(G+","+P in this._doors)Y=2;else if(G==J||G==V||P==K||P==z)Y=1;else Y=0;Z(G,P,Y)}},$.getCenter=function U(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},$.getLeft=function U(){return this._x1},$.getRight=function U(){return this._x2},$.getTop=function U(){return this._y1},$.getBottom=function U(){return this._y2},L}(pZ),jZ=function(X){U0(L,X);function L(U,Z,J,V){var K=X.call(this)||this;return K._startX=U,K._startY=Z,K._endX=J,K._endY=V,K._endsWithAWall=!0,K}L.createRandomAt=function U(Z,J,V,K,z){var Y=z.corridorLength[0],G=z.corridorLength[1],P=H.getUniformInt(Y,G);return new this(Z,J,Z+V*P,J+K*P)};var $=L.prototype;return $.debug=function U(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},$.isValid=function U(Z,J){var V=this._startX,K=this._startY,z=this._endX-V,Y=this._endY-K,G=1+Math.max(Math.abs(z),Math.abs(Y));if(z)z=z/Math.abs(z);if(Y)Y=Y/Math.abs(Y);var P=Y,F=-z,M=!0;for(var w=0;w<G;w++){var O=V+w*z,E=K+w*Y;if(!J(O,E))M=!1;if(!Z(O+P,E+F))M=!1;if(!Z(O-P,E-F))M=!1;if(!M){G=w,this._endX=O-z,this._endY=E-Y;break}}if(G==0)return!1;if(G==1&&Z(this._endX+z,this._endY+Y))return!1;var I=!Z(this._endX+z+P,this._endY+Y+F),u=!Z(this._endX+z-P,this._endY+Y-F);if(this._endsWithAWall=Z(this._endX+z,this._endY+Y),(I||u)&&this._endsWithAWall)return!1;return!0},$.create=function U(Z){var J=this._startX,V=this._startY,K=this._endX-J,z=this._endY-V,Y=1+Math.max(Math.abs(K),Math.abs(z));if(K)K=K/Math.abs(K);if(z)z=z/Math.abs(z);for(var G=0;G<Y;G++){var P=J+G*K,F=V+G*z;Z(P,F,0)}return!0},$.createPriorityWalls=function U(Z){if(!this._endsWithAWall)return;var J=this._startX,V=this._startY,K=this._endX-J,z=this._endY-V;if(K)K=K/Math.abs(K);if(z)z=z/Math.abs(z);var Y=z,G=-K;Z(this._endX+K,this._endY+z),Z(this._endX+Y,this._endY+G),Z(this._endX-Y,this._endY-G)},L}(pZ),VQ=function(X){U0(L,X);function L(U,Z,J){var V=X.call(this,U,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,J),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(H0(H0(V))),V._canBeDugCallback=V._canBeDugCallback.bind(H0(H0(V))),V._isWallCallback=V._isWallCallback.bind(H0(H0(V))),V}var $=L.prototype;return $.create=function U(Z){var J=Date.now();while(!0){var V=Date.now();if(V-J>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var K=0;K<this._width;K++)for(var z=0;z<this._height;z++)Z(K,z,this._map[K][z]);return this},$._generateRooms=function U(){var Z=this._width-2,J=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*J)>this._options.roomDugPercentage)break;while(V)},$._generateRoom=function U(){var Z=0;while(Z<this._roomAttempts){Z++;var J=t0.createRandom(this._width,this._height,this._options);if(!J.isValid(this._isWallCallback,this._canBeDugCallback))continue;return J.create(this._digCallback),this._rooms.push(J),J}return null},$._generateCorridors=function U(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var J=0;J<this._rooms.length;J++){var V=this._rooms[J];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=H.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var K=H.getItem(this._connected);if(!K)break;var z=this._closestRoom(this._unconnected,K);if(!z)break;var Y=this._closestRoom(this._connected,z);if(!Y)break;var G=this._connectRooms(z,Y);if(!G)break;if(!this._unconnected.length)return!0}}return!1},$._closestRoom=function U(Z,J){var V=1/0,K=J.getCenter(),z=null;for(var Y=0;Y<Z.length;Y++){var G=Z[Y],P=G.getCenter(),F=P[0]-K[0],M=P[1]-K[1],w=F*F+M*M;if(w<V)V=w,z=G}return z},$._connectRooms=function U(Z,J){var V=Z.getCenter(),K=J.getCenter(),z=K[0]-V[0],Y=K[1]-V[1],G,P,F,M,w,O,E;if(Math.abs(z)<Math.abs(Y))F=Y>0?2:0,M=(F+2)%4,w=J.getLeft(),O=J.getRight(),E=0;else F=z>0?1:3,M=(F+2)%4,w=J.getTop(),O=J.getBottom(),E=1;if(G=this._placeInWall(Z,F),!G)return!1;if(G[E]>=w&&G[E]<=O){P=G.slice();var I=0;switch(M){case 0:I=J.getTop()-1;break;case 1:I=J.getRight()+1;break;case 2:I=J.getBottom()+1;break;case 3:I=J.getLeft()-1;break}P[(E+1)%2]=I,this._digLine([G,P])}else if(G[E]<w-1||G[E]>O+1){var u=G[E]-K[E],x=0;switch(M){case 0:case 1:x=u<0?3:1;break;case 2:case 3:x=u<0?1:3;break}if(M=(M+x)%4,P=this._placeInWall(J,M),!P)return!1;var m=[0,0];m[E]=G[E];var t=(E+1)%2;m[t]=P[t],this._digLine([G,m,P])}else{var s=(E+1)%2;if(P=this._placeInWall(J,M),!P)return!1;var K0=Math.round((P[s]+G[s])/2),G0=[0,0],j0=[0,0];G0[E]=G[E],G0[s]=K0,j0[E]=P[E],j0[s]=K0,this._digLine([G,G0,j0,P])}if(Z.addDoor(G[0],G[1]),J.addDoor(P[0],P[1]),E=this._unconnected.indexOf(Z),E!=-1)this._unconnected.splice(E,1),this._connected.push(Z);if(E=this._unconnected.indexOf(J),E!=-1)this._unconnected.splice(E,1),this._connected.push(J);return!0},$._placeInWall=function U(Z,J){var V=[0,0],K=[0,0],z=0;switch(J){case 0:K=[1,0],V=[Z.getLeft(),Z.getTop()-1],z=Z.getRight()-Z.getLeft()+1;break;case 1:K=[0,1],V=[Z.getRight()+1,Z.getTop()],z=Z.getBottom()-Z.getTop()+1;break;case 2:K=[1,0],V=[Z.getLeft(),Z.getBottom()+1],z=Z.getRight()-Z.getLeft()+1;break;case 3:K=[0,1],V=[Z.getLeft()-1,Z.getTop()],z=Z.getBottom()-Z.getTop()+1;break}var Y=[],G=-2;for(var P=0;P<z;P++){var F=V[0]+P*K[0],M=V[1]+P*K[1];Y.push(null);var w=this._map[F][M]==1;if(w){if(G!=P-1)Y[P]=[F,M]}else if(G=P,P)Y[P-1]=null}for(var O=Y.length-1;O>=0;O--)if(!Y[O])Y.splice(O,1);return Y.length?H.getItem(Y):null},$._digLine=function U(Z){for(var J=1;J<Z.length;J++){var V=Z[J-1],K=Z[J],z=new jZ(V[0],V[1],K[0],K[1]);z.create(this._digCallback),this._corridors.push(z)}},$._digCallback=function U(Z,J,V){if(this._map[Z][J]=V,V==0)this._dug++},$._isWallCallback=function U(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},$._canBeDugCallback=function U(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},L}(yZ),UQ=function(X){U0(L,X);function L(U,Z,J){var V;if(J===void 0)J={};return V=X.call(this,U,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(J),V._dirs=B0[V._options.topology],V._map=V._fillMap(0),V}var $=L.prototype;return $.randomize=function U(Z){for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)this._map[J][V]=H.getUniform()<Z?1:0;return this},$.setOptions=function U(Z){Object.assign(this._options,Z)},$.set=function U(Z,J,V){this._map[Z][J]=V},$.create=function U(Z){var J=this._fillMap(0),V=this._options.born,K=this._options.survive;for(var z=0;z<this._height;z++){var Y=1,G=0;if(this._options.topology==6)Y=2,G=z%2;for(var P=G;P<this._width;P+=Y){var F=this._map[P][z],M=this._getNeighbors(P,z);if(F&&K.indexOf(M)!=-1)J[P][z]=1;else if(!F&&V.indexOf(M)!=-1)J[P][z]=1}}this._map=J,Z&&this._serviceCallback(Z)},$._serviceCallback=function U(Z){for(var J=0;J<this._height;J++){var V=1,K=0;if(this._options.topology==6)V=2,K=J%2;for(var z=K;z<this._width;z+=V)Z(z,J,this._map[z][J])}},$._getNeighbors=function U(Z,J){var V=0;for(var K=0;K<this._dirs.length;K++){var z=this._dirs[K],Y=Z+z[0],G=J+z[1];if(Y<0||Y>=this._width||G<0||G>=this._height)continue;V+=this._map[Y][G]==1?1:0}return V},$.connect=function U(Z,J,V){if(!J)J=0;var K=[],z={},Y=1,G=[0,0];if(this._options.topology==6)Y=2,G=[0,1];for(var P=0;P<this._height;P++)for(var F=G[P%2];F<this._width;F+=Y)if(this._freeSpace(F,P,J)){var M=[F,P];z[this._pointKey(M)]=M,K.push([F,P])}var w=K[H.getUniformInt(0,K.length-1)],O=this._pointKey(w),E={};E[O]=w,delete z[O],this._findConnected(E,z,[w],!1,J);while(Object.keys(z).length>0){var I=this._getFromTo(E,z),u=I[0],x=I[1],m={};m[this._pointKey(u)]=u,this._findConnected(m,z,[u],!0,J);var t=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;t.call(this,x,u,E,z,J,V);for(var s in m){var K0=m[s];this._map[K0[0]][K0[1]]=J,E[s]=K0,delete z[s]}}Z&&this._serviceCallback(Z)},$._getFromTo=function U(Z,J){var V=[0,0],K=[0,0],z,Y=Object.keys(Z),G=Object.keys(J);for(var P=0;P<5;P++){if(Y.length<G.length){var F=Y;K=Z[F[H.getUniformInt(0,F.length-1)]],V=this._getClosest(K,J)}else{var M=G;V=J[M[H.getUniformInt(0,M.length-1)]],K=this._getClosest(V,Z)}if(z=(V[0]-K[0])*(V[0]-K[0])+(V[1]-K[1])*(V[1]-K[1]),z<64)break}return[V,K]},$._getClosest=function U(Z,J){var V=null,K=null;for(var z in J){var Y=J[z],G=(Y[0]-Z[0])*(Y[0]-Z[0])+(Y[1]-Z[1])*(Y[1]-Z[1]);if(K==null||G<K)K=G,V=Y}return V},$._findConnected=function U(Z,J,V,K,z){while(V.length>0){var Y=V.splice(0,1)[0],G=void 0;if(this._options.topology==6)G=[[Y[0]+2,Y[1]],[Y[0]+1,Y[1]-1],[Y[0]-1,Y[1]-1],[Y[0]-2,Y[1]],[Y[0]-1,Y[1]+1],[Y[0]+1,Y[1]+1]];else G=[[Y[0]+1,Y[1]],[Y[0]-1,Y[1]],[Y[0],Y[1]+1],[Y[0],Y[1]-1]];for(var P=0;P<G.length;P++){var F=this._pointKey(G[P]);if(Z[F]==null&&this._freeSpace(G[P][0],G[P][1],z)){if(Z[F]=G[P],!K)delete J[F];V.push(G[P])}}}},$._tunnelToConnected=function U(Z,J,V,K,z,Y){var G,P;if(J[0]<Z[0])G=J,P=Z;else G=Z,P=J;for(var F=G[0];F<=P[0];F++){this._map[F][G[1]]=z;var M=[F,G[1]],w=this._pointKey(M);V[w]=M,delete K[w]}if(Y&&G[0]<P[0])Y(G,[P[0],G[1]]);var O=P[0];if(J[1]<Z[1])G=J,P=Z;else G=Z,P=J;for(var E=G[1];E<P[1];E++){this._map[O][E]=z;var I=[O,E],u=this._pointKey(I);V[u]=I,delete K[u]}if(Y&&G[1]<P[1])Y([P[0],G[1]],[P[0],P[1]])},$._tunnelToConnected6=function U(Z,J,V,K,z,Y){var G,P;if(J[0]<Z[0])G=J,P=Z;else G=Z,P=J;var F=G[0],M=G[1];while(!(F==P[0]&&M==P[1])){var w=2;if(M<P[1])M++,w=1;else if(M>P[1])M--,w=1;if(F<P[0])F+=w;else if(F>P[0])F-=w;else if(P[1]%2)F-=w;else F+=w;this._map[F][M]=z;var O=[F,M],E=this._pointKey(O);V[E]=O,delete K[E]}if(Y)Y(J,Z)},$._freeSpace=function U(Z,J,V){return Z>=0&&Z<this._width&&J>=0&&J<this._height&&this._map[Z][J]==V},$._pointKey=function U(Z){return Z[0]+"."+Z[1]},L}(k0),KQ={room:t0,corridor:jZ},qQ=function(X){U0(L,X);function L(U,Z,J){var V;if(J===void 0)J={};return V=X.call(this,U,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},J),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(H0(H0(V))),V._canBeDugCallback=V._canBeDugCallback.bind(H0(H0(V))),V._isWallCallback=V._isWallCallback.bind(H0(H0(V))),V._priorityWallCallback=V._priorityWallCallback.bind(H0(H0(V))),V}var $=L.prototype;return $.create=function U(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var J=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),K;do{K=0;var z=Date.now();if(z-V>this._options.timeLimit)break;var Y=this._findWall();if(!Y)break;var G=Y.split(","),P=parseInt(G[0]),F=parseInt(G[1]),M=this._getDiggingDirection(P,F);if(!M)continue;var w=0;do if(w++,this._tryFeature(P,F,M[0],M[1])){this._removeSurroundingWalls(P,F),this._removeSurroundingWalls(P-M[0],F-M[1]);break}while(w<this._featureAttempts);for(var O in this._walls)if(this._walls[O]>1)K++}while(this._dug/J<this._options.dugPercentage||K);if(this._addDoors(),Z)for(var E=0;E<this._width;E++)for(var I=0;I<this._height;I++)Z(E,I,this._map[E][I]);return this._walls={},this._map=[],this},$._digCallback=function U(Z,J,V){if(V==0||V==2)this._map[Z][J]=0,this._dug++;else this._walls[Z+","+J]=1},$._isWallCallback=function U(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},$._canBeDugCallback=function U(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},$._priorityWallCallback=function U(Z,J){this._walls[Z+","+J]=2},$._firstRoom=function U(){var Z=Math.floor(this._width/2),J=Math.floor(this._height/2),V=t0.createRandomCenter(Z,J,this._options);this._rooms.push(V),V.create(this._digCallback)},$._findWall=function U(){var Z=[],J=[];for(var V in this._walls){var K=this._walls[V];if(K==2)J.push(V);else Z.push(V)}var z=J.length?J:Z;if(!z.length)return null;var Y=H.getItem(z.sort());return delete this._walls[Y],Y},$._tryFeature=function U(Z,J,V,K){var z=H.getWeightedValue(this._features),Y=KQ[z],G=Y.createRandomAt(Z,J,V,K,this._options);if(!G.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(G.create(this._digCallback),G instanceof t0)this._rooms.push(G);if(G instanceof jZ)G.createPriorityWalls(this._priorityWallCallback),this._corridors.push(G);return!0},$._removeSurroundingWalls=function U(Z,J){var V=B0[4];for(var K=0;K<V.length;K++){var z=V[K],Y=Z+z[0],G=J+z[1];delete this._walls[Y+","+G],Y=Z+2*z[0],G=J+2*z[1],delete this._walls[Y+","+G]}},$._getDiggingDirection=function U(Z,J){if(Z<=0||J<=0||Z>=this._width-1||J>=this._height-1)return null;var V=null,K=B0[4];for(var z=0;z<K.length;z++){var Y=K[z],G=Z+Y[0],P=J+Y[1];if(!this._map[G][P]){if(V)return null;V=Y}}if(!V)return null;return[-V[0],-V[1]]},$._addDoors=function U(){var Z=this._map;function J(z,Y){return Z[z][Y]==1}for(var V=0;V<this._rooms.length;V++){var K=this._rooms[V];K.clearDoors(),K.addDoors(J)}},L}(yZ);function cZ(X,L,$){$[L[X+1]]=$[X],L[$[X]]=L[X+1],$[X]=X+1,L[X+1]=X}function dZ(X,L,$){$[L[X]]=$[X],L[$[X]]=L[X],$[X]=X,L[X]=X}var zQ=function(X){U0(L,X);function L(){return X.apply(this,arguments)||this}var $=L.prototype;return $.create=function U(Z){var J=this._fillMap(1),V=Math.ceil((this._width-2)/2),K=0.375,z=[],Y=[];for(var G=0;G<V;G++)z.push(G),Y.push(G);z.push(V-1);var P;for(P=1;P+3<this._height;P+=2)for(var F=0;F<V;F++){var M=2*F+1,w=P;if(J[M][w]=0,F!=z[F+1]&&H.getUniform()>K)cZ(F,z,Y),J[M+1][w]=0;if(F!=z[F]&&H.getUniform()>K)dZ(F,z,Y);else J[M][w+1]=0}for(var O=0;O<V;O++){var E=2*O+1,I=P;if(J[E][I]=0,O!=z[O+1]&&(O==z[O]||H.getUniform()>K))cZ(O,z,Y),J[E+1][I]=0;dZ(O,z,Y)}for(var u=0;u<this._width;u++)for(var x=0;x<this._height;x++)Z(u,x,J[u][x]);return this},L}(k0),$Q=function(X){U0(L,X);function L(){var U=X.apply(this,arguments)||this;return U._stack=[],U._map=[],U}var $=L.prototype;return $.create=function U(Z){var J=this._width,V=this._height;this._map=[];for(var K=0;K<J;K++){this._map.push([]);for(var z=0;z<V;z++){var Y=K==0||z==0||K+1==J||z+1==V;this._map[K].push(Y?1:0)}}this._stack=[[1,1,J-2,V-2]],this._process();for(var G=0;G<J;G++)for(var P=0;P<V;P++)Z(G,P,this._map[G][P]);return this._map=[],this},$._process=function U(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},$._partitionRoom=function U(Z){var J=[],V=[];for(var K=Z[0]+1;K<Z[2];K++){var z=this._map[K][Z[1]-1],Y=this._map[K][Z[3]+1];if(z&&Y&&!(K%2))J.push(K)}for(var G=Z[1]+1;G<Z[3];G++){var P=this._map[Z[0]-1][G],F=this._map[Z[2]+1][G];if(P&&F&&!(G%2))V.push(G)}if(!J.length||!V.length)return;var M=H.getItem(J),w=H.getItem(V);this._map[M][w]=1;var O=[],E=[];O.push(E);for(var I=Z[0];I<M;I++)if(this._map[I][w]=1,I%2)E.push([I,w]);E=[],O.push(E);for(var u=M+1;u<=Z[2];u++)if(this._map[u][w]=1,u%2)E.push([u,w]);E=[],O.push(E);for(var x=Z[1];x<w;x++)if(this._map[M][x]=1,x%2)E.push([M,x]);E=[],O.push(E);for(var m=w+1;m<=Z[3];m++)if(this._map[M][m]=1,m%2)E.push([M,m]);var t=H.getItem(O);for(var s=0;s<O.length;s++){var K0=O[s];if(K0==t)continue;var G0=H.getItem(K0);this._map[G0[0]][G0[1]]=0}this._stack.push([Z[0],Z[1],M-1,w-1]),this._stack.push([M+1,Z[1],Z[2],w-1]),this._stack.push([Z[0],w+1,M-1,Z[3]]),this._stack.push([M+1,w+1,Z[2],Z[3]])},L}(k0),BQ=function(X){U0(L,X);function L(U,Z,J){var V;if(J===void 0)J=0;return V=X.call(this,U,Z)||this,V._regularity=J,V._map=[],V}var $=L.prototype;return $.create=function U(Z){var J=this._width,V=this._height,K=this._fillMap(1);J-=J%2?1:2,V-=V%2?1:2;var z=0,Y=0,G=0,P=0,F=0,M=!1,w=[[0,0],[0,0],[0,0],[0,0]];do{if(z=1+2*Math.floor(H.getUniform()*(J-1)/2),Y=1+2*Math.floor(H.getUniform()*(V-1)/2),!F)K[z][Y]=0;if(!K[z][Y]){this._randomize(w);do{if(Math.floor(H.getUniform()*(this._regularity+1))==0)this._randomize(w);M=!0;for(var O=0;O<4;O++)if(G=z+w[O][0]*2,P=Y+w[O][1]*2,this._isFree(K,G,P,J,V)){K[G][P]=0,K[z+w[O][0]][Y+w[O][1]]=0,z=G,Y=P,M=!1,F++;break}}while(!M)}}while(F+1<J*V/4);for(var E=0;E<this._width;E++)for(var I=0;I<this._height;I++)Z(E,I,K[E][I]);return this._map=[],this},$._randomize=function U(Z){for(var J=0;J<4;J++)Z[J][0]=0,Z[J][1]=0;switch(Math.floor(H.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},$._isFree=function U(Z,J,V,K,z){if(J<1||V<1||J>=K||V>=z)return!1;return Z[J][V]},L}(k0),XQ=function(X){U0(L,X);function L(U,Z,J){var V=X.call(this,U,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],J=Object.assign({cellWidth:3,cellHeight:3},J),!J.hasOwnProperty("roomWidth"))J.roomWidth=V._calculateRoomSize(V._width,J.cellWidth);if(!J.hasOwnProperty("roomHeight"))J.roomHeight=V._calculateRoomSize(V._height,J.cellHeight);return V._options=J,V}var $=L.prototype;return $.create=function U(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)Z(J,V,this.map[J][V]);return this},$._calculateRoomSize=function U(Z,J){var V=Math.floor(Z/J*0.8),K=Math.floor(Z/J*0.25);if(K<2)K=2;if(V<2)V=2;return[K,V]},$._initRooms=function U(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var J=0;J<this._options.cellHeight;J++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:J})}},$._connectRooms=function U(){var Z=H.getUniformInt(0,this._options.cellWidth-1),J=H.getUniformInt(0,this._options.cellHeight-1),V,K,z,Y=!1,G,P,F;do{F=[0,2,4,6],F=H.shuffle(F);do{if(Y=!1,V=F.pop(),K=Z+B0[8][V][0],z=J+B0[8][V][1],K<0||K>=this._options.cellWidth)continue;if(z<0||z>=this._options.cellHeight)continue;if(G=this.rooms[Z][J],G.connections.length>0){if(G.connections[0][0]==K&&G.connections[0][1]==z)break}if(P=this.rooms[K][z],P.connections.length==0)P.connections.push([Z,J]),this.connectedCells.push([K,z]),Z=K,J=z,Y=!0}while(F.length>0&&Y==!1)}while(F.length>0)},$._connectUnconnectedRooms=function U(){var Z=this._options.cellWidth,J=this._options.cellHeight;this.connectedCells=H.shuffle(this.connectedCells);var V,K,z;for(var Y=0;Y<this._options.cellWidth;Y++)for(var G=0;G<this._options.cellHeight;G++)if(V=this.rooms[Y][G],V.connections.length==0){var P=[0,2,4,6];P=H.shuffle(P),z=!1;do{var F=P.pop(),M=Y+B0[8][F][0],w=G+B0[8][F][1];if(M<0||M>=Z||w<0||w>=J)continue;if(K=this.rooms[M][w],z=!0,K.connections.length==0)break;for(var O=0;O<K.connections.length;O++)if(K.connections[O][0]==Y&&K.connections[O][1]==G){z=!1;break}if(z)break}while(P.length);if(z)V.connections.push([K.cellx,K.celly]);else console.log("-- Unable to connect room.")}},$._createRandomRoomConnections=function U(){},$._createRooms=function U(){var Z=this._width,J=this._height,V=this._options.cellWidth,K=this._options.cellHeight,z=Math.floor(this._width/V),Y=Math.floor(this._height/K),G,P,F=this._options.roomWidth,M=this._options.roomHeight,w,O,E;for(var I=0;I<V;I++)for(var u=0;u<K;u++){if(w=z*I,O=Y*u,w==0)w=1;if(O==0)O=1;if(G=H.getUniformInt(F[0],F[1]),P=H.getUniformInt(M[0],M[1]),u>0){E=this.rooms[I][u-1];while(O-(E.y+E.height)<3)O++}if(I>0){E=this.rooms[I-1][u];while(w-(E.x+E.width)<3)w++}var x=Math.round(H.getUniformInt(0,z-G)/2),m=Math.round(H.getUniformInt(0,Y-P)/2);while(w+x+G>=Z)if(x)x--;else G--;while(O+m+P>=J)if(m)m--;else P--;w=w+x,O=O+m,this.rooms[I][u].x=w,this.rooms[I][u].y=O,this.rooms[I][u].width=G,this.rooms[I][u].height=P;for(var t=w;t<w+G;t++)for(var s=O;s<O+P;s++)this.map[t][s]=0}},$._getWallPosition=function U(Z,J){var V,K,z;if(J==1||J==3){if(V=H.getUniformInt(Z.x+1,Z.x+Z.width-2),J==1)K=Z.y-2,z=K+1;else K=Z.y+Z.height+1,z=K-1;this.map[V][z]=0}else{if(K=H.getUniformInt(Z.y+1,Z.y+Z.height-2),J==2)V=Z.x+Z.width+1,z=V-1;else V=Z.x-2,z=V+1;this.map[z][K]=0}return[V,K]},$._drawCorridor=function U(Z,J){var V=J[0]-Z[0],K=J[1]-Z[1],z=Z[0],Y=Z[1],G,P,F,M,w=[],O=Math.abs(V),E=Math.abs(K),I=H.getUniform(),u=I,x=1-I;if(P=V>0?2:6,F=K>0?4:0,O<E)G=Math.ceil(E*u),w.push([F,G]),w.push([P,O]),G=Math.floor(E*x),w.push([F,G]);else G=Math.ceil(O*u),w.push([P,G]),w.push([F,E]),G=Math.floor(O*x),w.push([P,G]);this.map[z][Y]=0;while(w.length>0){M=w.pop();while(M[1]>0)z+=B0[8][M[0]][0],Y+=B0[8][M[0]][1],this.map[z][Y]=0,M[1]=M[1]-1}},$._createCorridors=function U(){var Z=this._options.cellWidth,J=this._options.cellHeight,V,K,z,Y,G;for(var P=0;P<Z;P++)for(var F=0;F<J;F++){V=this.rooms[P][F];for(var M=0;M<V.connections.length;M++){if(K=V.connections[M],z=this.rooms[K[0]][K[1]],z.cellx>V.cellx)Y=2,G=4;else if(z.cellx<V.cellx)Y=4,G=2;else if(z.celly>V.celly)Y=3,G=1;else Y=1,G=3;this._drawCorridor(this._getWallPosition(V,Y),this._getWallPosition(z,G))}}},L}(k0),LQ={Arena:QQ,Uniform:VQ,Cellular:UQ,Digger:qQ,EllerMaze:zQ,DividedMaze:$Q,IceyMaze:BQ,Rogue:XQ},GQ=function X(){},YQ=0.5*(Math.sqrt(3)-1),d0=(3-Math.sqrt(3))/6,HQ=function(X){U0(L,X);function L(U){var Z;if(U===void 0)U=256;Z=X.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var J=[];for(var V=0;V<U;V++)J.push(V);J=H.shuffle(J),Z._perms=[],Z._indexes=[];for(var K=0;K<2*U;K++)Z._perms.push(J[K%U]),Z._indexes.push(Z._perms[K]%Z._gradients.length);return Z}var $=L.prototype;return $.get=function U(Z,J){var V=this._perms,K=this._indexes,z=V.length/2,Y=0,G=0,P=0,F,M=(Z+J)*YQ,w=Math.floor(Z+M),O=Math.floor(J+M),E=(w+O)*d0,I=w-E,u=O-E,x=Z-I,m=J-u,t,s;if(x>m)t=1,s=0;else t=0,s=1;var K0=x-t+d0,G0=m-s+d0,j0=x-1+2*d0,CZ=m-1+2*d0,NZ=C(w,z),AZ=C(O,z),l0=0.5-x*x-m*m;if(l0>=0){l0*=l0,F=K[NZ+V[AZ]];var nZ=this._gradients[F];Y=l0*l0*(nZ[0]*x+nZ[1]*m)}var n0=0.5-K0*K0-G0*G0;if(n0>=0){n0*=n0,F=K[NZ+t+V[AZ+s]];var rZ=this._gradients[F];G=n0*n0*(rZ[0]*K0+rZ[1]*G0)}var r0=0.5-j0*j0-CZ*CZ;if(r0>=0){r0*=r0,F=K[NZ+1+V[AZ+1]];var sZ=this._gradients[F];P=r0*r0*(sZ[0]*j0+sZ[1]*CZ)}return 70*(Y+G+P)},L}(GQ),PQ={Simplex:HQ},lZ=function(){function X($,U,Z,J){if(J===void 0)J={};if(this._toX=$,this._toY=U,this._passableCallback=Z,this._options=Object.assign({topology:8},J),this._dirs=B0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var L=X.prototype;return L._getNeighbors=function $(U,Z){var J=[];for(var V=0;V<this._dirs.length;V++){var K=this._dirs[V],z=U+K[0],Y=Z+K[1];if(!this._passableCallback(z,Y))continue;J.push([z,Y])}return J},X}(),FQ=function(X){U0(L,X);function L(U,Z,J,V){var K=X.call(this,U,Z,J,V)||this;return K._computed={},K._todo=[],K._add(U,Z,null),K}var $=L.prototype;return $.compute=function U(Z,J,V){var K=Z+","+J;if(!(K in this._computed))this._compute(Z,J);if(!(K in this._computed))return;var z=this._computed[K];while(z)V(z.x,z.y),z=z.prev},$._compute=function U(Z,J){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==J)return;var K=this._getNeighbors(V.x,V.y);for(var z=0;z<K.length;z++){var Y=K[z],G=Y[0],P=Y[1],F=G+","+P;if(F in this._computed)continue;this._add(G,P,V)}}},$._add=function U(Z,J,V){var K={x:Z,y:J,prev:V};this._computed[Z+","+J]=K,this._todo.push(K)},L}(lZ),DQ=function(X){U0(L,X);function L(U,Z,J,V){var K;if(V===void 0)V={};return K=X.call(this,U,Z,J,V)||this,K._todo=[],K._done={},K}var $=L.prototype;return $.compute=function U(Z,J,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=J,this._add(this._toX,this._toY,null);while(this._todo.length){var K=this._todo.shift(),z=K.x+","+K.y;if(z in this._done)continue;if(this._done[z]=K,K.x==Z&&K.y==J)break;var Y=this._getNeighbors(K.x,K.y);for(var G=0;G<Y.length;G++){var P=Y[G],F=P[0],M=P[1],w=F+","+M;if(w in this._done)continue;this._add(F,M,K)}}var O=this._done[Z+","+J];if(!O)return;while(O)V(O.x,O.y),O=O.prev},$._add=function U(Z,J,V){var K=this._distance(Z,J),z={x:Z,y:J,prev:V,g:V?V.g+1:0,h:K},Y=z.g+z.h;for(var G=0;G<this._todo.length;G++){var P=this._todo[G],F=P.g+P.h;if(Y<F||Y==F&&K<P.h){this._todo.splice(G,0,z);return}}this._todo.push(z)},$._distance=function U(Z,J){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(J-this._fromY);case 6:var V=Math.abs(Z-this._fromX),K=Math.abs(J-this._fromY);return K+Math.max(0,(V-K)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(J-this._fromY))}},L}(lZ),wQ={Dijkstra:FQ,AStar:DQ},MQ=function(){function X($){this._scheduler=$,this._lock=1}var L=X.prototype;return L.start=function $(){return this.unlock()},L.lock=function $(){return this._lock++,this},L.unlock=function $(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var U=this._scheduler.next();if(!U)return this.lock();var Z=U.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},X}(),WQ=function(){function X($,U){if(U===void 0)U={};this._reflectivityCallback=$,this._options={},U=Object.assign({passes:1,emissionThreshold:100,range:10},U),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(U)}var L=X.prototype;return L.setOptions=function $(U){if(Object.assign(this._options,U),U&&U.range)this.reset();return this},L.setFOV=function $(U){return this._fov=U,this._fovCache={},this},L.setLight=function $(U,Z,J){var V=U+","+Z;if(J)this._lights[V]=typeof J=="string"?p(J):J;else delete this._lights[V];return this},L.clearLights=function $(){this._lights={}},L.reset=function $(){return this._reflectivityCache={},this._fovCache={},this},L.compute=function $(U){var Z={},J={},V={};for(var K in this._lights){var z=this._lights[K];J[K]=[0,0,0],g(J[K],z)}for(var Y=0;Y<this._options.passes;Y++){if(this._emitLight(J,V,Z),Y+1==this._options.passes)continue;J=this._computeEmitters(V,Z)}for(var G in V){var P=G.split(","),F=parseInt(P[0]),M=parseInt(P[1]);U(F,M,V[G])}return this},L._emitLight=function $(U,Z,J){for(var V in U){var K=V.split(","),z=parseInt(K[0]),Y=parseInt(K[1]);this._emitLightFromCell(z,Y,U[V],Z),J[V]=1}return this},L._computeEmitters=function $(U,Z){var J={};for(var V in U){if(V in Z)continue;var K=U[V],z=void 0;if(V in this._reflectivityCache)z=this._reflectivityCache[V];else{var Y=V.split(","),G=parseInt(Y[0]),P=parseInt(Y[1]);z=this._reflectivityCallback(G,P),this._reflectivityCache[V]=z}if(z==0)continue;var F=[0,0,0],M=0;for(var w=0;w<3;w++){var O=Math.round(K[w]*z);F[w]=O,M+=O}if(M>this._options.emissionThreshold)J[V]=F}return J},L._emitLightFromCell=function $(U,Z,J,V){var K=U+","+Z,z;if(K in this._fovCache)z=this._fovCache[K];else z=this._updateFOV(U,Z);for(var Y in z){var G=z[Y],P=void 0;if(Y in V)P=V[Y];else P=[0,0,0],V[Y]=P;for(var F=0;F<3;F++)P[F]+=Math.round(J[F]*G)}return this},L._updateFOV=function $(U,Z){var J=U+","+Z,V={};this._fovCache[J]=V;var K=this._options.range;function z(Y,G,P,F){var M=Y+","+G,w=F*(1-P/K);if(w==0)return;V[M]=w}return this._fov.compute(U,Z,K,z.bind(this)),V},X}(),OQ=l,RQ=r,EQ=pJ;Q.Util=OQ,Q.Color=RQ,Q.Text=EQ,Q.RNG=H,Q.Display=nJ,Q.StringGenerator=rJ,Q.EventQueue=mZ,Q.Scheduler=iJ,Q.FOV=JQ,Q.Map=LQ,Q.Noise=PQ,Q.Path=wQ,Q.Engine=MQ,Q.Lighting=WQ,Q.DEFAULT_WIDTH=WZ,Q.DEFAULT_HEIGHT=OZ,Q.DIRS=B0,Q.KEYS=cJ,Object.defineProperty(Q,"__esModule",{value:!0})})});var SQ=typeof window!=="undefined"?window.innerWidth:0,fQ=typeof window!=="undefined"?window.innerHeight:0,Z0={cameraWidth:Math.floor(SQ/18),cameraHeight:Math.floor(fQ/18),debug:!0,fontSize:18,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},SZ={WIDTH:1024,HEIGHT:1024},Y0={width:Math.floor(Z0.cameraWidth*(1/Z0.zoom)),height:Math.floor(Z0.cameraHeight*(1/Z0.zoom)),bg:"transparent",fontSize:Math.floor(Z0.fontSize*Z0.zoom),forceSquareRatio:!0};function aZ(Q){if(Z0.debug)console.log(Q)}var fZ=[];class ZZ{name;description;energyDelta;constructor(Q,q,B=0){this.name=Q,this.description=q,this.energyDelta=B}}class JZ{name;description;constructor(Q,q){this.name=Q,this.description=q}}class W0{key;description;constructor(Q,q){this.key=Q,this.description=q}}class QZ{name;description;constructor(Q,q){this.name=Q,this.description=q}}class O0{name;description;icon;color;energyMax;unlockCondition;constructor(Q,q,B,H=100){this.name=Q,this.description=q,this.icon=B,this.energyMax=H,this.color="white",this.unlockCondition=null}}class m0{name;description;color;constructor(Q,q,B){this.name=Q,this.description=q,this.color=B}}class F0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(Q,q,B,H="cyberyellow",D=0,R=0,C=0,k=0,S=0,b=[]){this.name=Q,this.description=q,this.icon=B,this.color=H,this.energyDelta=D,this.matter=R,this.gold=C,this.damage=k,this.energyCost=S,this.effects=b}}class a{name;description;icon;fg;bg;energyDelta;constructor(Q,q,B=null,H="white",D="black",R=0){this.name=Q,this.description=q,this.icon=B,this.fg=H,this.bg=D,this.energyDelta=R}}var W={actions:{Enter:new ZZ("Enter","Enter a portal or plant atmosphere"),Launch:new ZZ("Launch","Launch into space",-10),Wait:new ZZ("Wait","Wait one turn in place")},ais:{aggrorange:new JZ("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new JZ("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new JZ("guardian","Idles at a position and only fights back if engaged")},colors:{black:"#000",brown:"brown",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new W0("N","Move/interact/combat north"),E:new W0("E","Move/interact/combat east"),S:new W0("S","Move/interact/combat south"),W:new W0("W","Move/interact/combat west"),A:new W0("A","Primary action, confirm"),B:new W0("B","Take a break, cancel"),"1":new W0("1","Secondary action, first quick slot"),"2":new W0("2","Tertiary action, second quick slot"),M:new W0("M","Menu")},effects:{RockCrusher:new QZ("Rock Crusher","Mines rock"),WallCrusher:new QZ("Wall Crusher","Tears down weak walls"),WaterShield:new QZ("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new O0("movableboulder","A movable rock","o",2),movablebox:new O0("movablebox","A movable box","x",2),Spirit:new O0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new O0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new O0("WorkBot","Basic factory worker","B"),Cleaner:new O0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new O0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Valkyrie:new O0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new O0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200)},factions:{Equipment:new m0("Equipment","For boxes etc.","gray"),Spirits:new m0("Spirits","Default player faction","white"),Pyrates:new m0("Pyrates","Default enemy faction","cybermagenta"),Gaia:new m0("Gaia","For rocks etc.","brown"),Guardians:new m0("Guardians","Bot station guardians","cybercyan")},items:{battery:new F0("Battery","Increases maximum energy","b","cyberyellow",10),energy:new F0("Energy","Energy pack","e","cyberyellow",10),gold:new F0("Gold","Precious shiny!","g","cyberyellow",0,0,1),goo:new F0("Goo","A minor matter source","g","gray",0,1),junk:new F0("Junk","Broken bot","%","gray",0,1),matter:new F0("Matter","A pile of stuff","m","gray",0,100),broom:new F0("Broom","Sweeps the floor","i","cyberyellow",0,0,0,-10,-1),hammer:new F0("Hammer","Tears down weak walls","i","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new F0("Pickaxe","Mines rock","i","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),shocker:new F0("Shocker","Injects Bots with new energy, basic AeroBot tool","i","cyberyellow",0,0,0,10,-1),trident:new F0("Trident","Traverse water with less energy cost","i","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new F0("Wrench","Basic WorkBot tool","i","cyberyellow",0,0,0,-10,-1)},maps:{bot_bar:`!
!!id bot_bar
!!size 28 16
!!spawn 14 3 movablebox
!!spawn 14 12 movablebox
!!spawn 2 4 AeroBot faction=Spirits
!!spawn 4 8 AeroBot faction=Spirits
!!spawn 10 7 AeroBot faction=Spirits
!!spawn 21 3 AeroBot faction=Spirits
!!spawn 21 5 AeroBot faction=Spirits
!!spawn 10 11 shocker
!!. void
!!_ voidtrue
!!~ water
!!# wall
!!s wallstatue
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
!!s wallstatue
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
!!# wall
!!+ wallweak
!!~ water
!!. void
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!O portal bot_station 4 28
!!P portal bot_station 13 25
!!h portal bot_station 5 21
##########h#####################################
#~.....................+~......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
#..vv.<.<.<<...........+.......................#
#..vv.<.<.<<...........+.......................#
#..............................................#
#..............................................#
#++#+###########################################
#+++.>.>.>.>.>.>.>.>.>~>.>.>.>.>.>.>.>.>.>.>.>.#
#+++.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>~>.>.>.>.P
#++#+###########################################
#..............................................#
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
#............................................~~#
##O#############################################
`,bot_prison:`!
!!id bot_prison
!!size 48 34
!!spawn 18 11 Cleaner faction=Guardians ai=aggrorange
!!spawn 17 2 Cleaner faction=Guardians ai=aggrorange
!!spawn 24 5 Cleaner faction=Guardians ai=aggrorange
!!spawn 29 24 Cleaner faction=Guardians ai=aggrorangeshort
!!spawn 34 22 AeroBot faction=Spirits
!!spawn 9 22 WorkBot faction=Spirits
!!spawn 28 1 broom
!!spawn 43 30 battery
!!spawn 9 30 matter
!!spawn 9 21 pickaxe
!!# wall
!!+ wallweak
!!s wallstatue
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
____________________#,#_____#.#_________________
____________________#,#####_#.#_________________
____________________#,,,,,#_#.#_________________
____________________#####,#_#.#_________________
################____#,,,,,#_#.#_################
#~...#~...#...~#____#,#####_#.#_#~...#...~#...~#
#....#....#....#____#,#####_#.#_#....#....#....#
#++C+++C++++C++######,#######.###++C++++C+++C++#
#..............P................R..............#
#..............######,###########..............#
#..............#__###,#_________#..............#
#..............#__###,#_________#..............#
#++C+++C++++C++#__#,,,#_________#++C++++C+++C++#
#....#....#....#__#,###_________#....#....#....#
#~...#~...#...~#__#,###_________#~...#...~#...~#
##,####,#####,#####,##############,#####,####,##
_#,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,#_
_##############################################_
`,bot_stadium:`!
!Now this is botracing!
!!id bot_stadium
!!size 48 16
!!# wall
!!+ wallweak
!!. void
!!= chargepad
!!~ water
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!s wallstatue
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
!!spawn 8 3 Pioneer faction=Guardians ai=aggrorangeshort equip=hammer
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
##############°°°°##############
#...##########°°°°##########...#
#.......##$###°°°°######.......#
#...........########...........#
#...####.++....CC........####..#
#...####.++..............####..#
#...e###.++..............####..#
#...####.++..............#A##..#
#........++....................#
#+++++++++.....................#
#+++++++++.+.+.+.+.+.+.+.+.+.++#
#~............................~#
#..............................#
#..#.#.#.#.#...................#
#..#########...................#
#..#########...........####....#
#..#######S#.>.>.>.>.>.B###....#
#.>.>.>.>...^....^.....####....#
#.....................v####....#
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
################################
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
!!, wall ,
!!/ wall /
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
#^|...........................................................................^#
#^............................................................................^#
#^|...........................................................................^#
#^..>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.^#
#^|...........................................................................^#
#^............................................................................^#
################################################################################
`,manual:`!
!!id manual
!!size 80 54
!!spawn 4 26 Spirit faction=Spirits
!!spawn 4 27 AeroBot faction=Spirits
!!spawn 4 28 WorkBot faction=Spirits
!!spawn 4 29 Cleaner faction=Spirits
!!spawn 4 30 Pioneer faction=Spirits
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
!!/ wall /
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
#^..M_or_click/touch_on_the_screen_center_to_open_the_menu....................^#
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
!!spawn 9 17 trident
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
!!. void
!!# wall
!!= chargepad
!!~ water
!!O portal botmos_hull_selection 1 19
!!Q portal solarsystem=1337 448 448
!!P portal solarsystem=1337 30 17
#O##################
#=.................#
#................Q.#
#..................#
#..................#
#................P.#
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired PioneerBot, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:Z0.showGrid?new a("void","Just nothing here",".","gray"):new a("void","Just nothing here"),voidtrue:new a("voidtrue","Really nothing here and you shouldn't get there ever!"),voidhidden:new a("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new a("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),rock:new a("rock","Hidden treasures may await","^","white","gray"),tree:new a("tree","Lots of trees make a forest","t","brown","black"),wall:new a("wall","A strong wall","#","gray","black"),wallstatue:new a("wallstatue","A small statue","s","gray","black"),wallweak:new a("wallweak","A weakened wall","+","gray","black"),chargepad:new a("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new a("movenorth","Moves you north","^","cyberyellow"),moveeast:new a("moveeast","Moves you east",">","cyberyellow"),movesouth:new a("movesouth","Moves you south","v","cyberyellow"),movewest:new a("movewest","Moves you west","<","cyberyellow"),portal:new a("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new a("portalclosed","Closed gateway to another map","O","black","gray"),portalhidden:new a("portalhidden","Hidden gateway to another map","#","gray","black"),portallauncher:new a("portallauncher","Launches into space","O","cyberyellow","gray"),portalstartworkbot:new a("portalstartworkbot","Start playing as a WorkBot","B","white"),portalstartaerobot:new a("portalstartaerobot","Start playing as a AeroBot","A","white"),"_portalstart?":new a("_portalstart?","Not unlocked, yet!","?","white"),spacerock:new a("spacerock","Mountains as seen from space, non-blocking!","^","white","gray"),spacetree:new a("spacetree","Forest as seen from space","t","brown","darkgray"),spacewater:new a("spacewater","Water as seen from space, not dangerous!","~","cybercyan","cyberblue"),spacevoid:new a("spacevoid","Void/ground as seen from space","","darkgray","darkgray"),spacevoidstarwhite:new a("spacevoidstarwhite","Space with a white background star",".","white"),spacevoidstaryellow:new a("spacevoidstaryellow","Space with a yellow background star",".","cyberyellow"),sun:new a("sun","It's hot, really hot!","","cyberyellow","cyberyellow",-100),terminal:new a("terminal","A computer terminal","$","cyberyellow"),tv:new a("tv","A big billboard screen","","black","cyberyellow")}};function D0(Q,q,B,H,D=0,R=0,C={}){let k={id:q,type:B,mapId:H,x:D,y:R,energy:10,energyMax:10,gold:0,matter:0,message:null,options:C};return Q=UZ(Q,k,B),Q.entities[k.id]=k,Q}function VZ(Q,q){return Q.entities[q]=void 0,delete Q.entities[q],Q.tools[q]=void 0,Q}function u0(Q,q){let B=Object.keys(Q.entities),H=[];for(let D=0;D<B.length;D++){let R=Q.entities[B[D]];if(R.mapId===q)H.push(R)}return H}function iZ(Q,q,B,H){let D=u0(Q,q).filter((R)=>R.x===B&&R.y===H);if(D.length>0)return D[0];return null}function UZ(Q,q,B){if(q.type=B,q.energy=B.energyMax,q.energyMax=B.energyMax,q.gold=0,q.matter=0,!R0(q))Q.tools[q.id]=void 0;return Q}function eZ(Q,q,B){if(q.options.faction===B.options.faction);else{let H=q.id,D=B.id;Q._combatQueue.push({entityId:H,otherEntityId:D})}return Q}function R0(Q){return Q.type===W.entities.movableboulder||Q.type===W.entities.movablebox}function KZ(Q,q){let B={A:W.actions.Wait,B:W.actions.Wait};if(!!Q.lastSpacePositionByEntity[q.id]&&q.energy>Math.abs(W.actions.Launch.energyDelta))B.A=W.actions.Launch;let D=Q.maps[q.mapId].getTile(q.x,q.y);if(!!D.options.mapId&&"x"in D.options&&"y"in D.options)B.A=W.actions.Enter;return B}function bZ(Q,q,B){let H=Q._eventSubscribers[q];if(H)for(let D=0;D<H.length;D++){let R=H[D];Q=R(Q,B)}return Q}function vZ(Q,q,B){if(q in Q._eventSubscribers);else Q._eventSubscribers[q]=[];return Q._eventSubscribers[q].push(B),Q}function T0(Q,q,B,H=0,D=0){let C={id:qZ(B,H,D),type:q,mapId:B,x:H,y:D,energy:q.energyDelta,gold:q.gold,matter:q.matter};return Q.items[C.id]=C,Q}function tZ(Q,q,B,H=0,D=0){let R=W.items.junk,k={id:qZ(B,H,D),type:R,mapId:B,x:H,y:D,energy:R.energyDelta,gold:R.gold,matter:q};return Q.items[k.id]=k,Q}function s0(Q,q,B,H=0,D=0,R,C){let S={id:qZ(B,H,D),type:q,mapId:B,x:H,y:D,energy:q.energyDelta,gold:R,matter:C};return Q.items[S.id]=S,Q}function qZ(Q,q,B){return"item,"+Q+","+q+","+B}function kZ(Q,q){return Q.items[q]=void 0,delete Q.items[q],Q}function zZ(Q,q){let B=Object.keys(Q.items),H=[];for(let D=0;D<B.length;D++){let R=Q.items[B[D]];if(R.mapId===q)H.push(R)}return H}function ZJ(Q,q,B,H){let D=qZ(q,B,H);if(D in Q.items)return Q.items[D];return null}function o0(Q,q){return Q.tools[q]}function JJ(Q,q,B){if(R0(q))return Q;if(!vQ(q,B))return Q;if(bQ(B))Q=uZ(Q,q.id,B.type);else{if(B.type===W.items.battery)q.energyMax+=B.energy;Q._energyQueue.push({entityId:q.id,energyDelta:B.energy})}return q.gold+=B.gold,q.matter+=B.matter,kZ(Q,B.id),Q}function uZ(Q,q,B){let H={type:B};return Q.tools[q]=H,Q}function bQ(Q){return Q.type.energyCost<0}function vQ(Q,q){return Q.gold+q.gold>=0&&Q.matter+q.matter>=0}/*!
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
 */var kQ=function(Q){var q={};function B(H){if(q[H])return q[H].exports;var D=q[H]={i:H,l:!1,exports:{}};return Q[H].call(D.exports,D,D.exports,B),D.l=!0,D.exports}return B.m=Q,B.c=q,B.d=function(H,D,R){B.o(H,D)||Object.defineProperty(H,D,{enumerable:!0,get:R})},B.r=function(H){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(H,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(H,"__esModule",{value:!0})},B.t=function(H,D){if(1&D&&(H=B(H)),8&D)return H;if(4&D&&typeof H=="object"&&H&&H.__esModule)return H;var R=Object.create(null);if(B.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:H}),2&D&&typeof H!="string")for(var C in H)B.d(R,C,function(k){return H[k]}.bind(null,C));return R},B.n=function(H){var D=H&&H.__esModule?function(){return H.default}:function(){return H};return B.d(D,"a",D),D},B.o=function(H,D){return Object.prototype.hasOwnProperty.call(H,D)},B.p="/bin/",B(B.s=0)}([function(Q,q,B){var H={},D=B(1),R=B(2),C=B(3);Q.exports=H;var k=1;H.js=function(){var S,b,l,J0=!1,y={},d={},p={},_={},g=!0,n={},Q0=[],$0=Number.MAX_VALUE,X0=!1;this.setAcceptableTiles=function(f){f instanceof Array?l=f:!isNaN(parseFloat(f))&&isFinite(f)&&(l=[f])},this.enableSync=function(){J0=!0},this.disableSync=function(){J0=!1},this.enableDiagonals=function(){X0=!0},this.disableDiagonals=function(){X0=!1},this.setGrid=function(f){S=f;for(var A=0;A<S.length;A++)for(var j=0;j<S[0].length;j++)d[S[A][j]]||(d[S[A][j]]=1)},this.setTileCost=function(f,A){d[f]=A},this.setAdditionalPointCost=function(f,A,j){p[A]===void 0&&(p[A]={}),p[A][f]=j},this.removeAdditionalPointCost=function(f,A){p[A]!==void 0&&delete p[A][f]},this.removeAllAdditionalPointCosts=function(){p={}},this.setDirectionalCondition=function(f,A,j){_[A]===void 0&&(_[A]={}),_[A][f]=j},this.removeAllDirectionalConditions=function(){_={}},this.setIterationsPerCalculation=function(f){$0=f},this.avoidAdditionalPoint=function(f,A){y[A]===void 0&&(y[A]={}),y[A][f]=1},this.stopAvoidingAdditionalPoint=function(f,A){y[A]!==void 0&&delete y[A][f]},this.enableCornerCutting=function(){g=!0},this.disableCornerCutting=function(){g=!1},this.stopAvoidingAllAdditionalPoints=function(){y={}},this.findPath=function(f,A,j,r,e){var V0=function(A0){J0?e(A0):setTimeout(function(){e(A0)})};if(l===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(S===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(f<0||A<0||j<0||r<0||f>S[0].length-1||A>S.length-1||j>S[0].length-1||r>S.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(f!==j||A!==r){for(var P0=S[r][j],z0=!1,E0=0;E0<l.length;E0++)if(P0===l[E0]){z0=!0;break}if(z0!==!1){var L0=new D;L0.openList=new C(function(A0,_0){return A0.bestGuessDistance()-_0.bestGuessDistance()}),L0.isDoneCalculating=!1,L0.nodeHash={},L0.startX=f,L0.startY=A,L0.endX=j,L0.endY=r,L0.callback=V0,L0.openList.push(i(L0,L0.startX,L0.startY,null,1));var c0=k++;return n[c0]=L0,Q0.push(c0),c0}V0(null)}else V0([])},this.cancelPath=function(f){return f in n&&(delete n[f],!0)},this.calculate=function(){if(Q0.length!==0&&S!==void 0&&l!==void 0)for(b=0;b<$0;b++){if(Q0.length===0)return;J0&&(b=0);var f=Q0[0],A=n[f];if(A!==void 0)if(A.openList.size()!==0){var j=A.openList.pop();if(A.endX!==j.x||A.endY!==j.y)j.list=0,j.y>0&&N(A,j,0,-1,1*h(j.x,j.y-1)),j.x<S[0].length-1&&N(A,j,1,0,1*h(j.x+1,j.y)),j.y<S.length-1&&N(A,j,0,1,1*h(j.x,j.y+1)),j.x>0&&N(A,j,-1,0,1*h(j.x-1,j.y)),X0&&(j.x>0&&j.y>0&&(g||v(S,l,j.x,j.y-1,j)&&v(S,l,j.x-1,j.y,j))&&N(A,j,-1,-1,1.4*h(j.x-1,j.y-1)),j.x<S[0].length-1&&j.y<S.length-1&&(g||v(S,l,j.x,j.y+1,j)&&v(S,l,j.x+1,j.y,j))&&N(A,j,1,1,1.4*h(j.x+1,j.y+1)),j.x<S[0].length-1&&j.y>0&&(g||v(S,l,j.x,j.y-1,j)&&v(S,l,j.x+1,j.y,j))&&N(A,j,1,-1,1.4*h(j.x+1,j.y-1)),j.x>0&&j.y<S.length-1&&(g||v(S,l,j.x,j.y+1,j)&&v(S,l,j.x-1,j.y,j))&&N(A,j,-1,1,1.4*h(j.x-1,j.y+1)));else{var r=[];r.push({x:j.x,y:j.y});for(var e=j.parent;e!=null;)r.push({x:e.x,y:e.y}),e=e.parent;r.reverse();var V0=r;A.callback(V0),delete n[f],Q0.shift()}}else A.callback(null),delete n[f],Q0.shift();else Q0.shift()}};var N=function(f,A,j,r,e){var V0=A.x+j,P0=A.y+r;if((y[P0]===void 0||y[P0][V0]===void 0)&&v(S,l,V0,P0,A)){var z0=i(f,V0,P0,A,e);z0.list===void 0?(z0.list=1,f.openList.push(z0)):A.costSoFar+e<z0.costSoFar&&(z0.costSoFar=A.costSoFar+e,z0.parent=A,f.openList.updateItem(z0))}},v=function(f,A,j,r,e){var V0=_[r]&&_[r][j];if(V0){var P0=T(e.x-j,e.y-r);if(!function(){for(var E0=0;E0<V0.length;E0++)if(V0[E0]===P0)return!0;return!1}())return!1}for(var z0=0;z0<A.length;z0++)if(f[r][j]===A[z0])return!0;return!1},T=function(f,A){if(f===0&&A===-1)return H.TOP;if(f===1&&A===-1)return H.TOP_RIGHT;if(f===1&&A===0)return H.RIGHT;if(f===1&&A===1)return H.BOTTOM_RIGHT;if(f===0&&A===1)return H.BOTTOM;if(f===-1&&A===1)return H.BOTTOM_LEFT;if(f===-1&&A===0)return H.LEFT;if(f===-1&&A===-1)return H.TOP_LEFT;throw new Error("These differences are not valid: "+f+", "+A)},h=function(f,A){return p[A]&&p[A][f]||d[S[A][f]]},i=function(f,A,j,r,e){if(f.nodeHash[j]!==void 0){if(f.nodeHash[j][A]!==void 0)return f.nodeHash[j][A]}else f.nodeHash[j]={};var V0=o(A,j,f.endX,f.endY);if(r!==null)var P0=r.costSoFar+e;else P0=0;var z0=new R(r,A,j,P0,V0);return f.nodeHash[j][A]=z0,z0},o=function(f,A,j,r){var e,V0;return X0?(e=Math.abs(f-j))<(V0=Math.abs(A-r))?1.4*e+V0:1.4*V0+e:(e=Math.abs(f-j))+(V0=Math.abs(A-r))}},H.TOP="TOP",H.TOP_RIGHT="TOP_RIGHT",H.RIGHT="RIGHT",H.BOTTOM_RIGHT="BOTTOM_RIGHT",H.BOTTOM="BOTTOM",H.BOTTOM_LEFT="BOTTOM_LEFT",H.LEFT="LEFT",H.TOP_LEFT="TOP_LEFT"},function(Q,q){Q.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(Q,q){Q.exports=function(B,H,D,R,C){this.parent=B,this.x=H,this.y=D,this.costSoFar=R,this.simpleDistanceToTarget=C,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(Q,q,B){Q.exports=B(4)},function(Q,q,B){var H,D,R;(function(){var C,k,S,b,l,J0,y,d,p,_,g,n,Q0,$0,X0;S=Math.floor,_=Math.min,k=function(N,v){return N<v?-1:N>v?1:0},p=function(N,v,T,h,i){var o;if(T==null&&(T=0),i==null&&(i=k),T<0)throw new Error("lo must be non-negative");for(h==null&&(h=N.length);T<h;)i(v,N[o=S((T+h)/2)])<0?h=o:T=o+1;return[].splice.apply(N,[T,T-T].concat(v)),v},J0=function(N,v,T){return T==null&&(T=k),N.push(v),$0(N,0,N.length-1,T)},l=function(N,v){var T,h;return v==null&&(v=k),T=N.pop(),N.length?(h=N[0],N[0]=T,X0(N,0,v)):h=T,h},d=function(N,v,T){var h;return T==null&&(T=k),h=N[0],N[0]=v,X0(N,0,T),h},y=function(N,v,T){var h;return T==null&&(T=k),N.length&&T(N[0],v)<0&&(v=(h=[N[0],v])[0],N[0]=h[1],X0(N,0,T)),v},b=function(N,v){var T,h,i,o,f,A;for(v==null&&(v=k),f=[],h=0,i=(o=function(){A=[];for(var j=0,r=S(N.length/2);0<=r?j<r:j>r;0<=r?j++:j--)A.push(j);return A}.apply(this).reverse()).length;h<i;h++)T=o[h],f.push(X0(N,T,v));return f},Q0=function(N,v,T){var h;if(T==null&&(T=k),(h=N.indexOf(v))!==-1)return $0(N,0,h,T),X0(N,h,T)},g=function(N,v,T){var h,i,o,f,A;if(T==null&&(T=k),!(i=N.slice(0,v)).length)return i;for(b(i,T),o=0,f=(A=N.slice(v)).length;o<f;o++)h=A[o],y(i,h,T);return i.sort(T).reverse()},n=function(N,v,T){var h,i,o,f,A,j,r,e,V0;if(T==null&&(T=k),10*v<=N.length){if(!(o=N.slice(0,v).sort(T)).length)return o;for(i=o[o.length-1],f=0,j=(r=N.slice(v)).length;f<j;f++)T(h=r[f],i)<0&&(p(o,h,0,null,T),o.pop(),i=o[o.length-1]);return o}for(b(N,T),V0=[],A=0,e=_(v,N.length);0<=e?A<e:A>e;0<=e?++A:--A)V0.push(l(N,T));return V0},$0=function(N,v,T,h){var i,o,f;for(h==null&&(h=k),i=N[T];T>v&&h(i,o=N[f=T-1>>1])<0;)N[T]=o,T=f;return N[T]=i},X0=function(N,v,T){var h,i,o,f,A;for(T==null&&(T=k),i=N.length,A=v,o=N[v],h=2*v+1;h<i;)(f=h+1)<i&&!(T(N[h],N[f])<0)&&(h=f),N[v]=N[h],h=2*(v=h)+1;return N[v]=o,$0(N,A,v,T)},C=function(){function N(v){this.cmp=v!=null?v:k,this.nodes=[]}return N.push=J0,N.pop=l,N.replace=d,N.pushpop=y,N.heapify=b,N.updateItem=Q0,N.nlargest=g,N.nsmallest=n,N.prototype.push=function(v){return J0(this.nodes,v,this.cmp)},N.prototype.pop=function(){return l(this.nodes,this.cmp)},N.prototype.peek=function(){return this.nodes[0]},N.prototype.contains=function(v){return this.nodes.indexOf(v)!==-1},N.prototype.replace=function(v){return d(this.nodes,v,this.cmp)},N.prototype.pushpop=function(v){return y(this.nodes,v,this.cmp)},N.prototype.heapify=function(){return b(this.nodes,this.cmp)},N.prototype.updateItem=function(v){return Q0(this.nodes,v,this.cmp)},N.prototype.clear=function(){return this.nodes=[]},N.prototype.empty=function(){return this.nodes.length===0},N.prototype.size=function(){return this.nodes.length},N.prototype.clone=function(){var v;return(v=new N).nodes=this.nodes.slice(0),v},N.prototype.toArray=function(){return this.nodes.slice(0)},N.prototype.insert=N.prototype.push,N.prototype.top=N.prototype.peek,N.prototype.front=N.prototype.peek,N.prototype.has=N.prototype.contains,N.prototype.copy=N.prototype.clone,N}(),D=[],(R=typeof(H=function(){return C})=="function"?H.apply(q,D):H)===void 0||(Q.exports=R)}).call(this)}]);function QJ(Q,q,B,H,D){let R=new kQ.js;R.setGrid(Q),R.setAcceptableTiles([0]),R.enableSync();let C=null;return R.findPath(q,B,H,D,function(k){C=k}),R.calculate(),C}function C0(){return"player"}function VJ(Q,q,B,H){return Math.abs(Q-B)+Math.abs(q-H)}function $Z(Q){return[...Array(Q).keys()]}function UJ(Q){let q=uQ(Q),B=Q.entities[C0()];for(let H=0;H<q.length;H++){let D=q[H],R=Q.entities[D],C=Q._AIs[D],k=VJ(B.x,B.y,R.x,R.y);if(B.options.faction!==R.options.faction&&k<=C.aggroRange){let S=Q.maps[Q.currentMapId].asMovementMap(),b=QJ(S,R.x,R.y,B.x,B.y);if(b){if(b=b.slice(1),b.length>k)b=null}C.path=b}if(!!R.message&&R.message.includes("OBEY"));}for(let H=0;H<q.length;H++){let D=q[H],R=Q.entities[D],C=Q._AIs[D];if(C.path){let k=C.path[0],S=k.x-R.x,b=k.y-R.y;Q=w0(Q,R,S,b)}}return Q}function uQ(Q){let q=u0(Q,Q.currentMapId),B=[];for(let H=0;H<q.length;H++){let D=q[H];if(D.options.ai)B.push(D.id)}return B}function KJ(Q,q,B){let H=Q.entities[q],D=8;switch(B){case W.ais.aggrorange:D=8;break;case W.ais.aggrorangeshort:D=2;break;case W.ais.guardian:D=1;break;default:}return Q._AIs[q]={entityId:q,type:B,aggroRange:D,startMap:H.mapId,startX:H.x,startY:H.y,path:null},Q}function BZ(Q,q){return Q._AIs[q]=void 0,delete Q._AIs[q],Q}function zJ(Q){let q=void 0;while(typeof(q=Q._despawnQueue.shift())!=="undefined")Q=VZ(Q,q),Q=BZ(Q,q);return Q}function $J(Q){return Q}class y0{mapId;x;y;entityOrItemName;options;constructor(Q,q,B,H,D={}){if(this.mapId=Q,this.x=q,this.y=B,this.entityOrItemName=H,this.options=D,H==="movablebox"&&!Object.hasOwn(this.options,"faction"))this.options.faction="Equipment";else if(H==="movableboulder"&&!Object.hasOwn(this.options,"faction"))this.options.faction="Gaia"}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function a0(Q,q){if(TQ(q.entityOrItemName)){let B=q.options;if(Object.hasOwn(B,"ai"))B.ai=W.ais[B.ai];if(Object.hasOwn(B,"faction"))B.faction=W.factions[B.faction];let H=q.generateId();if(Q=D0(Q,H,W.entities[q.entityOrItemName],q.mapId,q.x,q.y,B),Object.hasOwn(B,"equip")&&qJ(B.equip))Q=uZ(Q,H,W.items[B.equip]);if(Object.hasOwn(B,"ai"))Q=KJ(Q,H,B.ai)}else if(qJ(q.entityOrItemName))Q=T0(Q,W.items[q.entityOrItemName],q.mapId,q.x,q.y);return Q}function TQ(Q){return Object.hasOwn(W.entities,Q)}function qJ(Q){return Object.hasOwn(W.items,Q)}var XZ={width:16,height:16},TZ=XZ;function g0(Q,q={}){return{type:Q,options:q}}function BJ(Q){return Q.type.name.startsWith("space")}function XJ(Q){for(let q in W.maps){let B=p0(W.maps[q]);Q.maps[q]=B;for(let H of B._spawnCommands)Q=a0(Q,H);B._spawnCommands=[]}return Q}function LJ(Q,q){let B=zZ(Q,q);for(let D=0;D<B.length;D++){let R=B[D];Q=kZ(Q,R.id)}let H=u0(Q,q);for(let D=0;D<H.length;D++){let R=H[D];Q=VZ(Q,R.id),Q=BZ(Q,R.id)}return Q.maps[q]=void 0,delete Q.maps[q],Q}class h0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(Q,q,B,H=[]){this.id=Q,this.widthTiles=q,this.heightTiles=B,this.seed=null,this._tiles=H,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(Q,q){if(Q>=0&&Q<this.widthTiles&&q>=0&&q<this.heightTiles){let B=q*this.widthTiles+Q;return this._tiles[B]}return{}}setTile(Q,q,B,H={}){this._cacheMovementMap=null;let D=q*this.widthTiles+Q,R=this._tiles[D];return this._tiles[D]=g0(B,H),R}setTvMessage(Q){if(this._tvCount){let q=0;for(let B of this._tiles)if(B.type===W.tiles.tv&&q<Q.length)B.options.sign=Q[q],q++;if(Q==="")Q=null;this.tvMessage=Q}}pasteOnto(Q,q=0,B=0){for(let H=0;H<Q.heightTiles;H++)for(let D=0;D<Q.widthTiles;D++){let R=Q.getTile(D,H);if(R.type!==W.tiles.voidtrue)this.setTile(D+q,H+B,R.type,R.options)}return this}circular(){let Q=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let q=-Q;q<=Q;q++)for(let B=-Q;B<=Q;B++)if(B*B+q*q>=Q*Q)this.setTile(B+Q-1,q+Q-1,W.tiles.voidtrue);return this}sample(Q,q){let B=Math.floor(this.widthTiles/Q),H=Math.floor(this.heightTiles/q),D=[];for(let R=0;R<q;R++)for(let C=0;C<Q;C++){let k={};for(let d=0;d<H;d++)for(let p=0;p<B;p++){let _=this.getTile(C*B+p,R*H+d);if(k[_.type.name])k[_.type.name]+=1;else k[_.type.name]=1}let S="",b=0;for(let[d,p]of Object.entries(k))if(p>b)S=d,b=p;let l="space"+S,J0=W.tiles[l]||W.tiles.spacevoid,y={mapId:this.id,x:C*B,y:R*H};D.push(g0(J0,y))}return new h0("__sampled_"+Q+"_"+q+"_"+this.id,Q,q,D)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let Q=new Array(this.heightTiles);for(let q=0;q<this.heightTiles;q++){Q[q]=new Array(this.widthTiles);for(let B=0;B<this.widthTiles;B++){let H=q*this.widthTiles+B,R=this._tiles[H].type;if(Q[q][B]=0,R===W.tiles.rock||R===W.tiles.portalclosed||R===W.tiles.tv||R.name.startsWith("wall"))Q[q][B]=1}}return this._cacheMovementMap=Q,Q}}function p0(Q){let q=Q.split(/\r?\n/),B=Q[0],H="",D=0,R=0,C={},k=[],S=[],b=0,l="";for(let y=0;y<q.length;y++){let d=q[y];if(d.startsWith(B)){if(d.startsWith(B+"!id"))H=d.slice(5);else if(d.startsWith(B+"!size")){let p=d.split(" ").slice(1);D=Number(p[0]),R=Number(p[1])}else if(d.startsWith(B+"!spawn")){let p=d.split(" ").slice(1),_={};if(p.length>3){let g=p.slice(3);for(let n of g){let Q0=n.split("=");_[Q0[0]]=Q0[1]}}k.push(new y0(H,Number(p[0]),Number(p[1]),p[2],_))}else if(d.startsWith(B+"!")){let p=d[2],_=d.slice(4);C[p]=_}}else for(let p=0;p<d.length;p++){let _=d[p],g=C[_];if(Z0.debug&&!g)console.log("DEBUG Broken map: "+H);let n=g.split(" "),Q0={};if(g.startsWith("portal ")||g.startsWith("portalhidden ")||g.startsWith("portallauncher ")||g.startsWith("portalstart"))g=n[0],Q0.mapId=n[1],Q0.x=Number(n[2]),Q0.y=Number(n[3]);if(g.startsWith("wall ")&&n.length>=2)g="wall",Q0.sign=n[1];if(g.startsWith("terminal ")&&n.length>=2)g="terminal",Q0.screen=n[1];if(g.startsWith("tv ")&&n.length>=2){if(g="tv",n.length===3)l=n[2];b++}S.push(g0(W.tiles[g],Q0))}}if(Z0.debug&&!(b===0||b===12))console.log("DEBUG Broken map: "+H+" (invalid TV size "+b+", allowed are 0 or 12 characters per map)");let J0=new h0(H,D,R,S);return J0._tvCount=b,J0.setTvMessage(l),J0._spawnCommands=k,J0}function YJ(Q,q,B){switch(B){case W.commands.N:Q=w0(Q,q,0,-1);break;case W.commands.W:Q=w0(Q,q,-1,0);break;case W.commands.S:Q=w0(Q,q,0,1);break;case W.commands.E:Q=w0(Q,q,1,0);break;case W.commands.A:Q=GJ(Q,q,W.commands.A);break;case W.commands.B:Q=GJ(Q,q,W.commands.B);break;default:}return Q}function w0(Q,q,B,H,D=0){let R=Q.maps[q.mapId],C=iZ(Q,R.id,q.x+B,q.y+H),k=Q.tools[q.id];if(q.message=R.tvMessage,C)if(R0(C)){if(!R0(q)&&D<1)Q=w0(Q,C,B,H,D++),Q=w0(Q,q,B,H,D++)}else Q=eZ(Q,q,C);else if(xQ(R,q,B,H))Q=gQ(Q,R,q,B,H),Q._energyQueue.push({entityId:q.id,energyDelta:-1*D});else if(_Q(R,q,k,B,H)){if(R.setTile(q.x+B,q.y+H,W.tiles.void).type===W.tiles.rock){let b=Q.rng.getPercentage();if(b<=1)Q=T0(Q,W.items.matter,R.id,q.x+B,q.y+H);else if(b<=34)Q=T0(Q,W.items.junk,R.id,q.x+B,q.y+H)}Q._energyQueue.push({entityId:q.id,energyDelta:k.type.energyCost})}return Q}function GJ(Q,q,B){let D=KZ(Q,q)[B.key],C=Q.maps[q.mapId].getTile(q.x,q.y);switch(D){case W.actions.Enter:Q=HJ(Q,q,C);break;case W.actions.Launch:Q=hQ(Q,q,C);case W.actions.Wait:break;default:}return Q}function gQ(Q,q,B,H,D){B.x+=H,B.y+=D;let R=ZJ(Q,B.mapId,B.x,B.y);if(R)Q=JJ(Q,B,R);let C=q.getTile(B.x,B.y);if(C.type.name.startsWith("portal"))Q=HJ(Q,B,C);if(C.type===W.tiles.terminal)q.setTvMessage("OBEYWORKKILL");if(C.type.name.startsWith("move"))switch(C.type.name){case"movenorth":Q=w0(Q,B,0,-1);break;case"moveeast":Q=w0(Q,B,1,0);break;case"movesouth":Q=w0(Q,B,0,1);break;case"movewest":Q=w0(Q,B,-1,0);break;default:}return Q}function HJ(Q,q,B){if(q.id.startsWith("player"))Q.currentMapId=B.options.mapId;if(BJ(B))Q.lastSpacePositionByEntity[q.id]={mapId:q.mapId,x:q.x,y:q.y};else Q.lastSpacePositionByEntity[q.id]=void 0,delete Q.lastSpacePositionByEntity[q.id];let H={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:B.type,newMapId:B.options.mapId,newX:B.options.x,newY:B.options.y};return q.mapId=B.options.mapId,q.x=B.options.x,q.y=B.options.y,Q=bZ(Q,"entitymap.updated.event",H),Q}function hQ(Q,q,B){if(Q.lastSpacePositionByEntity[q.id]){if(q.id.startsWith("player"))Q.currentMapId=Q.lastSpacePositionByEntity[q.id].mapId;let H={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:B.type,newMapId:Q.lastSpacePositionByEntity[q.id].mapId,newX:Q.lastSpacePositionByEntity[q.id].x,newY:Q.lastSpacePositionByEntity[q.id].y};q.mapId=H.newMapId,q.x=H.newX,q.y=H.newY,Q._energyQueue.push({entityId:q.id,energyDelta:W.actions.Launch.energyDelta}),Q.lastSpacePositionByEntity[q.id]=void 0,delete Q.lastSpacePositionByEntity[q.id],Q=bZ(Q,"entitymap.updated.event",H)}return Q}function PJ(Q){for(let q in Q.entities){let B=Q.entities[q],H=Q.tools[q],R=Q.maps[B.mapId].getTile(B.x,B.y),C=R.type.energyDelta;if(R.type===W.tiles.water&&H?.type.effects.includes(W.effects.WaterShield.name))C/=2;Q._energyQueue.push({entityId:q,energyDelta:C})}return Q}function FJ(Q,q){let B=Q.entities[q.entityId];switch(q.oldTileType){case W.tiles.portalstartaerobot:Q=UZ(Q,B,W.entities.AeroBot);break;case W.tiles.portalstartworkbot:Q=UZ(Q,B,W.entities.WorkBot);break;default:}return Q}function xQ(Q,q,B,H){let D=q.x+B,R=q.y+H,C=Q.getTile(D,R).type;return D>=0&&D<Q.widthTiles&&R>=0&&R<Q.heightTiles&&!(C===W.tiles.rock||C===W.tiles.portalclosed||C===W.tiles.tv||C.name.startsWith("wall"))}function _Q(Q,q,B,H,D){let R=q.x+H,C=q.y+D,k=Q.getTile(R,C).type;if(B)return B.type.effects.includes(W.effects.WallCrusher.name)&&k===W.tiles.wallweak||B.type.effects.includes(W.effects.RockCrusher.name)&&k===W.tiles.rock;return!1}var wJ=IZ(GZ(),1);class f0{seed;_rotRng;constructor(Q=1337){this.seed=Q,this._rotRng=wJ.RNG.clone(),this._rotRng.setSeed(Q)}getPercentage(){return this._rotRng.getPercentage()}getItem(Q){return this._rotRng.getItem(Q)}}function MJ(Q,q){if(q.seed===1337)Q=D0(Q,"batteryvalkyrie0",W.entities.Valkyrie,q.id,130,127,{faction:W.factions.Spirits}),Q=D0(Q,"batteryvalkyrie1",W.entities.Valkyrie,q.id,124,127,{faction:W.factions.Spirits}),Q=T0(Q,W.items.trident,q.id,127,130);else{let B=new f0(q.seed);for(let H=0;H<q.heightTiles;H++)for(let D=0;D<q.widthTiles;D++){let R=q.getTile(D,H);if(B.getPercentage()<=1&&(R.type===W.tiles.void||R.type===W.tiles.tree)){let C=B.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(C){case"Deviant":case"Pioneer":Q=a0(Q,new y0(q.id,D,H,C,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":Q=a0(Q,new y0(q.id,D,H,C));break}}}}return Q}var YZ=IZ(GZ(),1);var mQ=1337,WJ=55;function OJ(Q,q=mQ){YZ.RNG.setSeed(q);let B=new YZ.Noise.Simplex,H=XZ.width*TZ.width,D=XZ.height*TZ.height,R=[];for(let S=0;S<D;S++)for(let b=0;b<H;b++){let l=B.get(b/WJ,S/WJ),J0;if(l<=-0.5)J0=W.tiles.water;else if(l<=0)J0=W.tiles.void;else if(l<0.5)J0=W.tiles.tree;else J0=W.tiles.rock;R.push(g0(J0))}let C="simplex="+q,k=new h0(C,H,D,R);return k.seed=q,Q.maps[C]=k,Q}var yQ=1337;function EJ(Q,q=yQ){let B=RJ(1024,1024,W.tiles.void);B.id="solarsystem="+q,Q.maps[B.id]=B;let H=new f0(q),D=new f0(q),R=H.getItem([2,3,4,5,6,7,8,9,10,11,12]),C=128,k=512-C,S=Math.floor(k/R);B=pQ(B,H);let b=RJ(128,128,W.tiles.voidtrue);cQ(b,63,63,62,W.tiles.sun),dQ(b,63,63,W.tiles.sun),B.pasteOnto(b,448,448);for(let y=C;y<512;y+=S){let d=H.getItem([-1,1])*H.getItem($Z(y)),p=H.getItem([-1,1])*Math.floor(Math.sqrt(y*y-d*d));d+=512,p+=512;let _=H.getItem([16,24,32]),g=Math.floor(_/2)-1;Q=OJ(Q,q);let n=Q.maps["simplex="+q],Q0=W.map_snippets.launcher;Q0=Q0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${B.id} ${d} ${p}`);let $0=p0(Q0),X0=D.getItem($Z(n.widthTiles-$0.widthTiles)),N=D.getItem($Z(n.heightTiles-$0.heightTiles));n.pasteOnto($0,X0,N),Q=MJ(Q,n);let v=n.sample(_,_).circular();B.pasteOnto(v,d-(g+1),p-(g+1)),q++}let l=W.map_snippets.space_bot_station;l=l.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let J0=p0(l);return B.pasteOnto(J0,583,398),Q}function RJ(Q,q,B){let H=[];for(let C=0;C<Q*q;C++)H.push(g0(B));return new h0("__temp",Q,q,H)}function pQ(Q,q){for(let B=0;B<Q.heightTiles;B++)for(let H=0;H<Q.widthTiles;H++)if(q.getPercentage()<=1)Q.setTile(H,B,q.getItem([W.tiles.spacevoidstarwhite,W.tiles.spacevoidstaryellow]));return Q}function cQ(Q,q,B,H,D){let R=1-H,C=1,k=-2*H,S=0,b=H;Q.setTile(q,B+H,D),Q.setTile(q,B-H,D),Q.setTile(q+H,B,D),Q.setTile(q-H,B,D);while(S<b){if(R>=0)b-=1,k+=2,R+=k;S+=1,C+=2,R+=C,Q.setTile(q+S,B+b,D),Q.setTile(q-S,B+b,D),Q.setTile(q+S,B-b,D),Q.setTile(q-S,B-b,D),Q.setTile(q+b,B+S,D),Q.setTile(q-b,B+S,D),Q.setTile(q+b,B-S,D),Q.setTile(q-b,B-S,D)}return Q}function dQ(Q,q,B,H){let{widthTiles:D,heightTiles:R}=Q,C=[];C.push({x:q,y:B});let k=void 0;while(typeof(k=C.shift())!=="undefined"){let S=k,b=k;if(k.x+1<D)b={x:k.x+1,y:k.y};while(Q.getTile(S.x,S.y).type!==H){if(Q.setTile(S.x,S.y,H),S.y+1<R){if(Q.getTile(S.x,S.y+1).type!==H)C.push({x:S.x,y:S.y+1})}if(S.y-1>=0){if(Q.getTile(S.x,S.y-1).type!==H)C.push({x:S.x,y:S.y-1})}if(S.x-1>=0)S.x-=1;else break}while(Q.getTile(b.x,b.y).type!==H){if(Q.setTile(b.x,b.y,H),b.y+1<R){if(Q.getTile(b.x,b.y+1).type!==H)C.push({x:b.x,y:b.y+1})}if(b.y-1>=0){if(Q.getTile(b.x,b.y-1).type!==H)C.push({x:b.x,y:b.y-1})}if(b.x+1<D)b.x+=1;else break}}return Q}var lQ=`!
!!id shop_instance
!!size 48 16
!!# wall
!!. void
!!; wallstatue
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
`;function jJ(Q,q){if(q?.oldMapId?.startsWith("shop_instance")){Q=LJ(Q,q.oldMapId);let B=Q.maps[q.newMapId],H=B.getTile(q.newX,q.newY);B.setTile(q.newX,q.newY,H.type,{mapId:"shop_instance",x:q.oldX,y:q.oldY})}if(q?.newMapId?.startsWith("shop_instance")){let B=p0(lQ);B.id+="_"+q.oldMapId+"_"+q.entityId,B.setTile(q.newX,q.newY,W.tiles.portal,{mapId:q.oldMapId,x:q.oldX,y:q.oldY}),Q.maps[q.oldMapId].setTile(q.oldX,q.oldY,q.oldTileType,{mapId:B.id,x:q.newX,y:q.newY});let D=Q.entities[q.entityId];if(D.id.startsWith("player"))Q.currentMapId=B.id;if(D.mapId=B.id,D.x=q.newX,D.Y=q.newY,Q.maps[B.id]=B,Q=s0(Q,W.items.hammer,B.id,4,4,0,-200),Q=s0(Q,W.items.pickaxe,B.id,4,6,0,-200),Q=s0(Q,W.items.battery,B.id,4,8,0,-200),Q=s0(Q,W.items.gold,B.id,4,10,0,-1e4),Q=D0(Q,B.id+"_shopkeeper",W.entities.AeroBot,B.id,6,2,{faction:D.options.faction}),q?.oldMapId.startsWith("bot_stadium"))Q=D0(Q,B.id+"_shopper",W.entities.WorkBot,B.id,1,12,{faction:D.options.faction});else if(q?.oldMapId.startsWith("bot_bar"))Q=D0(Q,B.id+"_shopper",W.entities.AeroBot,B.id,4,11,{faction:D.options.faction})}return Q}function CJ(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!1,actionLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new f0,tools:{},tvs:{}}}function NJ(Q){let q=void 0;while(typeof(q=Q._combatQueue.shift())!=="undefined"){let B=-1,H=-5,D=o0(Q,q.entityId);if(D)B=D.type.energyCost,H=-1*Math.abs(D.type.damage);Q._energyQueue.push({entityId:q.entityId,energyDelta:B}),Q._energyQueue.push({entityId:q.otherEntityId,energyDelta:H})}return Q}function AJ(Q){let q=void 0;while(typeof(q=Q._energyQueue.shift())!=="undefined"){let B=Q.entities[q.entityId];if(B.energy=Math.min(B.energy+q.energyDelta,B.energyMax),B.energy<=0){if(Q._despawnQueue.push(B.id),!R0(B)){let H=Math.max(1,Math.floor(B.energyMax/3));Q=tZ(Q,H,B.mapId,B.x,B.y)}}}return Q}function IJ(Q){return Q=UJ(Q),Q=NJ(Q),Q=PJ(Q),Q=AJ(Q),Q=zJ(Q),Q=$J(Q),Q}class HZ{state;constructor(){}init(){return this.state=CJ(),this.state=vZ(this.state,"entitymap.updated.event",FJ),this.state=vZ(this.state,"entitymap.updated.event",jJ),this.state=EJ(this.state),this.state=XJ(this.state),this.state.currentMapId="botmos_hull_selection",this.state=D0(this.state,C0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits}),this.state}update(Q){let q=this.state.entities[C0()];if(q){if(Q){if(Q===W.commands.M)this.state._menuOpen=!this.state._menuOpen;else this.state=YJ(this.state,q,Q),this.state=IJ(this.state);this.state.actionLog.push(Q.key)}}else aZ("Game over! "+this.state.actionLog.length+" Turns: "+this.state.actionLog.join("")),this.state.currentMapId="botmos_hull_selection",this.state=D0(this.state,C0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits});return this.state}play(Q){for(let q=0;q<Q.length;q++){let B=Q[q];this.update(W.commands[B])}return this.state}}var c={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1},gZ=[],hZ=void 0,SJ=0;document.body.addEventListener("keydown",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":c.up=!0,q0(Q);break;case"a":case"ArrowLeft":c.left=!0,q0(Q);break;case"s":case"ArrowDown":c.down=!0,q0(Q);break;case"d":case"ArrowRight":c.right=!0,q0(Q);break;case"x":c.a=!0,q0(Q);break;case" ":case"y":case"z":c.b=!0,q0(Q);break;case"m":c.menu=!0,q0(Q);break;default:}N0(fJ())});function N0(Q){let q=Date.now();if(hZ!==void 0&&q-SJ>=80)SJ=q,hZ(Q)}document.body.addEventListener("keyup",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":c.up=!1,q0(Q);break;case"a":case"ArrowLeft":c.left=!1,q0(Q);break;case"s":case"ArrowDown":c.down=!1,q0(Q);break;case"d":case"ArrowRight":c.right=!1,q0(Q);break;case"x":c.a=!1,q0(Q);break;case" ":case"y":case"z":c.b=!1,q0(Q);break;case"m":c.menu=!1,q0(Q);break;default:}});document.body.addEventListener("click",function(Q){let{clientX:q,clientY:B}=Q,D=document.body.clientWidth/3,C=document.body.clientHeight/3;if(q>=D&&q<2*D&&B<C)N0(W.commands.N),q0(Q);else if(q<D&&B<C)N0(W.commands.B),q0(Q);else if(q>=2*D&&B<C)N0(W.commands.A),q0(Q);else if(q<D&&B>=C&&B<2*C)N0(W.commands.W),q0(Q);else if(q>=2*D&&B>=C&&B<2*C)N0(W.commands.E),q0(Q);else if(q>=D&&q<2*D&&B>=2*C)N0(W.commands.S),q0(Q);else if(q>=D&&q<2*D&&B>=C&&B<2*C)N0(W.commands.M),q0(Q)});function q0(Q){Q.preventDefault(),Q.stopPropagation()}var i0=null;function nQ(){let Q=null;if(c.right)Q=W.commands.E;if(c.left)Q=W.commands.W;if(c.down)Q=W.commands.S;if(c.up)Q=W.commands.N;if(c.up&&c.right){if(Q===W.commands.N&&i0===W.commands.N)Q=W.commands.E}if(c.up&&c.left){if(Q===W.commands.N&&i0===W.commands.N)Q=W.commands.W}if(c.down&&c.right){if(Q===W.commands.S&&i0===W.commands.S)Q=W.commands.E}if(c.down&&c.left){if(Q===W.commands.S&&i0===W.commands.S)Q=W.commands.W}if(c.a)Q=W.commands.A;if(c.b)Q=W.commands.B;if(c.menu)Q=W.commands.M;if(i0=Q,Q!==null)gZ.push(Q)}function fJ(){nQ();let Q=gZ.shift()||null;return gZ=[],Q}var bJ=void 0;window.addEventListener("gamepadconnected",(Q)=>{bJ=setInterval(function(){let q=navigator.getGamepads()[Q.gamepad?.index];if(c.right=q.buttons[15].pressed,c.left=q.buttons[14].pressed,c.down=q.buttons[13].pressed,c.up=q.buttons[12].pressed,c.a=q.buttons[0].pressed||q.buttons[2].pressed,c.b=q.buttons[1].pressed||q.buttons[3].pressed,c.menu=q.buttons[9].pressed,c.right||c.left||c.down||c.up||c.a||c.b||c.menu)N0(fJ())},100)});window.addEventListener("gamepaddisconnected",(Q)=>{clearInterval(bJ)});function vJ(Q){hZ=Q}var uJ=IZ(GZ(),1);var b0=new uJ.Display(Y0);document.body.appendChild(b0.getContainer());function PZ(Q){return W.colors[Q]}function rQ(Q,q){let B=Q.currentMapId,H=Q.maps[B];for(var D=0;D<q.height;D++)for(var R=0;R<q.width;R++){var C=H.getTile(q.x+R,q.y+D),k=W.colors.black,S=W.colors.white,b="";if(!!C&&!!C.type)k=PZ(C.type.bg),S=PZ(C.type.fg),b=C.options.sign||C.type.icon;b0.draw(R,D,b,S,k)}let l=zZ(Q,B);for(let _=0;_<l.length;_++){let g=l[_];b0.drawOver(g.x-q.x,g.y-q.y,g.type.icon,PZ(g.type.color))}let J0=C0(),y=Q.entities[J0],d=((y||{}).options||{}).faction||void 0,p=u0(Q,B);for(let _=0;_<p.length;_++){let g=p[_],n=d===g.options.faction?W.colors.white:PZ(g.options.faction.color);if(Z0.highlightEnemy&&!R0(g))n=d===g.options.faction?W.colors.cybergreen:W.colors.cybermagenta;if(g===y)n=W.colors.white;b0.drawOver(g.x-q.x,g.y-q.y,g.type.icon,n)}if(!!y&&Z0.showUI){let _="",g=o0(Q,J0);if(g)_+=g.type.name+" ";let n=KZ(Q,y),Q0=y.type.icon+" "+y.energy+"/"+y.energyMax+" "+_+"X:"+n.A.name+" Y:"+n.B.name,$0=Y0.height-1;if(y.y-q.y>=Y0.height-3)$0=0;b0.drawText(0,$0,"%c{white}%b{black}"+Q0,q.width)}if(Q._menuOpen){let _=[];if(_.push("BotMos Menu"),_.push(""),y){_.push("Hull: "+y.type.icon+" ("+y.type.name+")"),_.push("Energy: "+y.energy+"/"+y.energyMax),_.push("Gold: "+y.gold),_.push("Matter: "+y.matter);let g=o0(Q,J0);if(g)_.push("Tool: "+g.type.name);if(Z0.debug)_.push("DEBUG Position: "+y.x+","+y.y),_.push("DEBUG Map: "+y.mapId)}for(let g=0;g<_.length;g++)b0.drawText(0,g,"%c{#74ee15}%b{black}"+_[g],q.width)}for(let _=0;_<fZ.length;_++){let g=fZ[_];b0.drawText(0,_,"%c{green}%b{black}"+g,q.width)}}var kJ={x:0,y:0};async function x0(Q){let q=Q.entities[C0()],B=q?q:kJ,H=sQ(B);rQ(Q,H),kJ=B}async function TJ(Q){b0.setOptions(Q)}function sQ(Q){return{x:Math.min(Math.max(0,Q.x-Math.floor(Y0.width/2)),SZ.WIDTH-Y0.width),y:Math.min(Math.max(0,Q.y-Math.floor(Y0.height/2)),SZ.HEIGHT-Y0.height),width:Y0.width,height:Y0.height}}var M0=new HZ;window.onload=function(){x0(M0.init())};window.onresize=function(){let Q=typeof window!=="undefined"?window.innerWidth:0,q=typeof window!=="undefined"?window.innerHeight:0;Z0.cameraWidth=Math.floor(Q/Z0.fontSize),Z0.cameraHeight=Math.floor(q/Z0.fontSize),Y0.width=Math.floor(Z0.cameraWidth*(1/Z0.zoom)),Y0.height=Math.floor(Z0.cameraHeight*(1/Z0.zoom)),TJ(Y0),x0(M0.state)};vJ(function(Q){x0(M0.update(Q))});if(!window.BMActionLog)window.BMActionLog=function(){return M0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(Q){x0(M0.play(Q))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){Z0.debug=!Z0.debug,x0(M0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){Z0.showUI=!Z0.showUI,x0(M0.state)};if(Z0.debug){if(!window.BMDebugState)window.BMDebugState=function(){return M0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let Q=Object.keys(M0.state.maps).length,q=Object.keys(M0.state.entities).length,B=Object.keys(M0.state.items).length,H=Object.keys(M0.state.tools).length;return`Maps: ${Q}, Entities: ${q}, Items: ${B}, Tools: ${H}`}}window.focus();
