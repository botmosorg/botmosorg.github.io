var fZ=Object.create;var{getPrototypeOf:vZ,defineProperty:i1,getOwnPropertyNames:bZ}=Object;var uZ=Object.prototype.hasOwnProperty;var S1=(Q,q,B)=>{B=Q!=null?fZ(vZ(Q)):{};let X=q||!Q||!Q.__esModule?i1(B,"default",{value:Q,enumerable:!0}):B;for(let P of bZ(Q))if(!uZ.call(X,P))i1(X,P,{get:()=>Q[P],enumerable:!0});return X};var kZ=(Q,q)=>()=>(q||Q((q={exports:{}}).exports,q),q.exports);var w1=kZ((Y1,O6)=>{function h0(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q}function nZ(Q,q){var B=typeof Symbol!=="undefined"&&Q[Symbol.iterator]||Q["@@iterator"];if(B)return(B=B.call(Q)).next.bind(B);if(Array.isArray(Q)||(B=rZ(Q))||q&&Q&&typeof Q.length==="number"){if(B)Q=B;var X=0;return function(){if(X>=Q.length)return{done:!0};return{done:!1,value:Q[X++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rZ(Q,q){if(!Q)return;if(typeof Q==="string")return M6(Q,q);var B=Object.prototype.toString.call(Q).slice(8,-1);if(B==="Object"&&Q.constructor)B=Q.constructor.name;if(B==="Map"||B==="Set")return Array.from(Q);if(B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B))return M6(Q,q)}function M6(Q,q){if(q==null||q>Q.length)q=Q.length;for(var B=0,X=new Array(q);B<q;B++)X[B]=Q[B];return X}function K0(Q,q){Q.prototype=Object.create(q.prototype),Q.prototype.constructor=Q,g1(Q,q)}function g1(Q,q){return g1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function B(X,P){return X.__proto__=P,X},g1(Q,q)}(function(Q,q){typeof Y1==="object"&&typeof O6!=="undefined"?q(Y1):typeof define==="function"&&define.amd?define(["exports"],q):(Q=typeof globalThis!=="undefined"?globalThis:Q||self,q(Q.ROT={}))})(Y1,function(Q){var q=0.00000000023283064365386963,B=function(){function L(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var G=L.prototype;return G.getSeed=function z(){return this._seed},G.setSeed=function z(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*q,K=K*69069+1>>>0,this._s1=K*q,K=K*69069+1>>>0,this._s2=K*q,this._c=1,this},G.getUniform=function z(){var K=2091639*this._s0+this._c*q;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},G.getUniformInt=function z(K,Z){var J=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(J-V+1))+V},G.getNormal=function z(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var J,V,U;do J=2*this.getUniform()-1,V=2*this.getUniform()-1,U=J*J+V*V;while(U>1||U==0);var $=J*Math.sqrt(-2*Math.log(U)/U);return K+$*Z},G.getPercentage=function z(){return 1+Math.floor(this.getUniform()*100)},G.getItem=function z(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},G.shuffle=function z(K){var Z=[],J=K.slice();while(J.length){var V=J.indexOf(this.getItem(J));Z.push(J.splice(V,1)[0])}return Z},G.getWeightedValue=function z(K){var Z=0;for(var J in K)Z+=K[J];var V=this.getUniform()*Z,U,$=0;for(U in K)if($+=K[U],V<$)return U;return U},G.getState=function z(){return[this._s0,this._s1,this._s2,this._c]},G.setState=function z(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},G.clone=function z(){var K=new L;return K.setState(this.getState())},L}(),X=new B().setSeed(Date.now()),P=function(){function L(){}var G=L.prototype;return G.getContainer=function z(){return null},G.setOptions=function z(K){this._options=K},L}(),O=function(L){K0(G,L);function G(){var K=L.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var z=G.prototype;return z.schedule=function K(Z){requestAnimationFrame(Z)},z.getContainer=function K(){return this._ctx.canvas},z.setOptions=function K(Z){L.prototype.setOptions.call(this,Z);var J=Z.fontStyle?Z.fontStyle+" ":"",V=J+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},z.clear=function K(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},z.eventToPosition=function K(Z,J){var V=this._ctx.canvas,U=V.getBoundingClientRect();if(Z-=U.left,J-=U.top,Z*=V.width/U.width,J*=V.height/U.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},G}(P);function E(L,G){return(L%G+G)%G}function v(L,G,z){if(G===void 0)G=0;if(z===void 0)z=1;if(L<G)return G;if(L>z)return z;return L}function N(L){return L.charAt(0).toUpperCase()+L.substring(1)}function b(L){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];var Z=b.map,J=function V(U,$,w,Y){if(L.charAt(Y-1)=="%")return U.substring(1);if(!z.length)return U;var H=z[0],F=$||w,D=F.split(","),M=D.shift()||"",R=Z[M.toLowerCase()];if(!R)return U;H=z.shift();var j=H[R].apply(H,D),S=M.charAt(0);if(S!=S.toLowerCase())j=N(j);return j};return L.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,J)}b.map={s:"toString"};var y=Object.freeze({__proto__:null,mod:E,clamp:v,capitalize:N,format:b}),e=function(L){K0(G,L);function G(){var K=L.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var z=G.prototype;return z.draw=function K(Z,J){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],Y=Z[4],H=[(V+1)*this._spacingX,U*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(J)this._ctx.fillStyle=Y,this._fill(H[0],H[1]);if(!$)return;this._ctx.fillStyle=w;var F=[].concat($);for(var D=0;D<F.length;D++)this._ctx.fillText(F[D],H[0],Math.ceil(H[1]))},z.computeSize=function K(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=Math.floor(Z/this._spacingX)-1,U=Math.floor((J-2*this._hexSize)/this._spacingY+1);return[V,U]},z.computeFontSize=function K(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,U=J/(2+1.5*(this._options.height-1)),$=Math.min(V,U),w=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var Y=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=w;var H=Y/100;$=Math.floor($)+1;var F=2*$/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(F)-1},z._normalizedEventToPosition=function K(Z,J){var V;if(this._options.transpose)Z+=J,J=Z-J,Z-=J,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var U=V/this._options.height;if(J=Math.floor(J/U),E(J,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,J]},z._fill=function K(Z,J){var V=this._hexSize,U=this._options.border,$=this._ctx;if($.beginPath(),this._options.transpose)$.moveTo(Z-V+U,J),$.lineTo(Z-V/2+U,J+this._spacingX-U),$.lineTo(Z+V/2-U,J+this._spacingX-U),$.lineTo(Z+V-U,J),$.lineTo(Z+V/2-U,J-this._spacingX+U),$.lineTo(Z-V/2+U,J-this._spacingX+U),$.lineTo(Z-V+U,J);else $.moveTo(Z,J-V+U),$.lineTo(Z+this._spacingX-U,J-V/2+U),$.lineTo(Z+this._spacingX-U,J+V/2-U),$.lineTo(Z,J+V-U),$.lineTo(Z-this._spacingX+U,J+V/2-U),$.lineTo(Z-this._spacingX+U,J-V/2+U),$.lineTo(Z,J-V+U);$.fill()},z._updateSize=function K(){var Z=this._options,J=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+J/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,U;if(Z.transpose)V="height",U="width";else V="width",U="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[U]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},G}(O),s=function(L){K0(G,L);function G(){var K=L.call(this)||this;return K._spacingX=0,K._spacingY=0,K._canvasCache={},K}var z=G.prototype;return z.setOptions=function K(Z){L.prototype.setOptions.call(this,Z),this._canvasCache={}},z.draw=function K(Z,J){if(G.cache)this._drawWithCache(Z);else this._drawNoCache(Z,J)},z._drawWithCache=function K(Z){var J=Z[0],V=Z[1],U=Z[2],$=Z[3],w=Z[4],Y=""+U+$+w,H;if(Y in this._canvasCache)H=this._canvasCache[Y];else{var F=this._options.border;H=document.createElement("canvas");var D=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,D.fillStyle=w,D.fillRect(F,F,H.width-F,H.height-F),U){D.fillStyle=$,D.font=this._ctx.font,D.textAlign="center",D.textBaseline="middle";var M=[].concat(U);for(var R=0;R<M.length;R++)D.fillText(M[R],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[Y]=H}this._ctx.drawImage(H,J*this._spacingX,V*this._spacingY)},z._drawNoCache=function K(Z,J){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],Y=Z[4];if(J){var H=this._options.border;this._ctx.fillStyle=Y,this._ctx.fillRect(V*this._spacingX+H,U*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!$)return;this._ctx.fillStyle=w;var F=[].concat($);for(var D=0;D<F.length;D++)this._ctx.fillText(F[D],(V+0.5)*this._spacingX,Math.ceil((U+0.5)*this._spacingY))},z.computeSize=function K(Z,J){var V=Math.floor(Z/this._spacingX),U=Math.floor(J/this._spacingY);return[V,U]},z.computeFontSize=function K(Z,J){var V=Math.floor(Z/this._options.width),U=Math.floor(J/this._options.height),$=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=$;var Y=w/100,H=Y*U/V;if(H>1)U=Math.floor(U/H);return Math.floor(U/this._options.spacing)},z._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._spacingX),Math.floor(J/this._spacingY)]},z._updateSize=function K(){var Z=this._options,J=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*J),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},G}(O);s.cache=!1;var n=function(L){K0(G,L);function G(){var K=L.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var z=G.prototype;return z.draw=function K(Z,J){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],Y=Z[4],H=this._options.tileWidth,F=this._options.tileHeight;if(J)if(this._options.tileColorize)this._ctx.clearRect(V*H,U*F,H,F);else this._ctx.fillStyle=Y,this._ctx.fillRect(V*H,U*F,H,F);if(!$)return;var D=[].concat($),M=[].concat(w),R=[].concat(Y);for(var j=0;j<D.length;j++){var S=this._options.tileMap[D[j]];if(!S)throw new Error('Char "'+D[j]+'" not found in tileMap');if(this._options.tileColorize){var k=this._colorCanvas,h=k.getContext("2d");h.globalCompositeOperation="source-over",h.clearRect(0,0,H,F);var d=M[j],i=R[j];if(h.drawImage(this._options.tileSet,S[0],S[1],H,F,0,0,H,F),d!="transparent")h.fillStyle=d,h.globalCompositeOperation="source-atop",h.fillRect(0,0,H,F);if(i!="transparent")h.fillStyle=i,h.globalCompositeOperation="destination-over",h.fillRect(0,0,H,F);this._ctx.drawImage(k,V*H,U*F,H,F)}else this._ctx.drawImage(this._options.tileSet,S[0],S[1],H,F,V*H,U*F,H,F)}},z.computeSize=function K(Z,J){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(J/this._options.tileHeight);return[V,U]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},z._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},G}(O);function g(L){var G,z;if(L in C)G=C[L];else{if(L.charAt(0)=="#"){var K=L.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)G=Z.map(function(V){return V*17});else{for(var J=0;J<3;J++)Z[J+1]+=16*Z[J],Z.splice(J,1);G=Z}}else if(z=L.match(/rgb\(([0-9, ]+)\)/i))G=z[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else G=[0,0,0];C[L]=G}return G.slice()}function _(L){var G=L.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),Z=1;Z<z;Z++)K[Z-1]=arguments[Z];for(var J=0;J<3;J++)for(var V=0;V<K.length;V++)G[J]+=K[V][J];return G}function p(L){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var J=0;J<z.length;J++)L[Z]+=z[J][Z];return L}function l(L){var G=L.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),Z=1;Z<z;Z++)K[Z-1]=arguments[Z];for(var J=0;J<3;J++){for(var V=0;V<K.length;V++)G[J]*=K[V][J]/255;G[J]=Math.round(G[J])}return G}function c(L){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var J=0;J<z.length;J++)L[Z]*=z[J][Z]/255;L[Z]=Math.round(L[Z])}return L}function q0(L,G,z){if(z===void 0)z=0.5;var K=L.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+z*(G[Z]-L[Z]));return K}var G0=q0;function A(L,G,z){if(z===void 0)z=0.5;var K=x(L),Z=x(G);for(var J=0;J<3;J++)K[J]+=z*(Z[J]-K[J]);return a(K)}var u=A;function T(L,G){if(!(G instanceof Array))G=Math.round(X.getNormal(0,G));var z=L.slice();for(var K=0;K<3;K++)z[K]+=G instanceof Array?Math.round(X.getNormal(0,G[K])):G;return z}function x(L){var G=L[0]/255,z=L[1]/255,K=L[2]/255,Z=Math.max(G,z,K),J=Math.min(G,z,K),V=0,U,$=(Z+J)/2;if(Z==J)U=0;else{var w=Z-J;switch(U=$>0.5?w/(2-Z-J):w/(Z+J),Z){case G:V=(z-K)/w+(z<K?6:0);break;case z:V=(K-G)/w+2;break;case K:V=(G-z)/w+4;break}V/=6}return[V,U,$]}function Z0(L,G,z){if(z<0)z+=1;if(z>1)z-=1;if(z<0.16666666666666666)return L+(G-L)*6*z;if(z<0.5)return G;if(z<0.6666666666666666)return L+(G-L)*(0.6666666666666666-z)*6;return L}function a(L){var G=L[2];if(L[1]==0)return G=Math.round(G*255),[G,G,G];else{var z=L[1],K=G<0.5?G*(1+z):G+z-G*z,Z=2*G-K,J=Z0(Z,K,L[0]+0.3333333333333333),V=Z0(Z,K,L[0]),U=Z0(Z,K,L[0]-0.3333333333333333);return[Math.round(J*255),Math.round(V*255),Math.round(U*255)]}}function f(L){var G=L.map(function(z){return v(z,0,255)});return"rgb("+G.join(",")+")"}function I(L){var G=L.map(function(z){return v(z,0,255).toString(16).padStart(2,"0")});return"#"+G.join("")}var C={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},o=Object.freeze({__proto__:null,fromString:g,add:_,add_:p,multiply:l,multiply_:c,interpolate:q0,lerp:G0,interpolateHSL:A,lerpHSL:u,randomize:T,rgb2hsl:x,hsl2rgb:a,toRGB:f,toHex:I}),J0=function(L){K0(G,L);function G(){var K=L.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return K}G.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var z=G.prototype;return z.schedule=function K(Z){requestAnimationFrame(Z)},z.getContainer=function K(){return this._gl.canvas},z.setOptions=function K(Z){var J=this;L.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return J._updateTexture(V)});else this._updateTexture(V)},z.draw=function K(Z,J){var V=this._gl,U=this._options,$=Z[0],w=Z[1],Y=Z[2],H=Z[3],F=Z[4],D=V.canvas.height-(w+1)*U.tileHeight;if(V.scissor($*U.tileWidth,D,U.tileWidth,U.tileHeight),J){if(U.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,_0(F));V.clear(V.COLOR_BUFFER_BIT)}if(!Y)return;var M=[].concat(Y),R=[].concat(F),j=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[$,w]);for(var S=0;S<M.length;S++){var k=this._options.tileMap[M[S]];if(!k)throw new Error('Char "'+M[S]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,U.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,k),U.tileColorize)V.uniform4fv(this._uniforms.tint,_0(j[S])),V.uniform4fv(this._uniforms.bg,_0(R[S]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},z.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,_0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},z.computeSize=function K(Z,J){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(J/this._options.tileHeight);return[V,U]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z.eventToPosition=function K(Z,J){var V=this._gl.canvas,U=V.getBoundingClientRect();if(Z-=U.left,J-=U.top,Z*=V.width/U.width,J*=V.height/U.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},z._initWebGL=function K(){var Z=this,J=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=J;var V=E0(J,H0,$0);return J.useProgram(V),L0(J),V0.forEach(function(U){return Z._uniforms[U]=J.getUniformLocation(V,U)}),this._program=V,J.enable(J.BLEND),J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA),J.enable(J.SCISSOR_TEST),J},z._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},z._updateSize=function K(){var Z=this._gl,J=this._options,V=[J.width*J.tileWidth,J.height*J.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[J.tileWidth,J.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},z._updateTexture=function K(Z){d0(this._gl,Z)},G}(P),V0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],H0=`
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
}`.trim(),$0=`
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
}`.trim();function E0(L,G,z){var K=L.createShader(L.VERTEX_SHADER);if(L.shaderSource(K,G),L.compileShader(K),!L.getShaderParameter(K,L.COMPILE_STATUS))throw new Error(L.getShaderInfoLog(K)||"");var Z=L.createShader(L.FRAGMENT_SHADER);if(L.shaderSource(Z,z),L.compileShader(Z),!L.getShaderParameter(Z,L.COMPILE_STATUS))throw new Error(L.getShaderInfoLog(Z)||"");var J=L.createProgram();if(L.attachShader(J,K),L.attachShader(J,Z),L.linkProgram(J),!L.getProgramParameter(J,L.LINK_STATUS))throw new Error(L.getProgramInfoLog(J)||"");return J}function L0(L){var G=new Float32Array([0,0,1,0,0,1,1,1]),z=L.createBuffer();L.bindBuffer(L.ARRAY_BUFFER,z),L.bufferData(L.ARRAY_BUFFER,G,L.STATIC_DRAW),L.enableVertexAttribArray(0),L.vertexAttribPointer(0,2,L.FLOAT,!1,0,0)}function d0(L,G){var z=L.createTexture();return L.bindTexture(L.TEXTURE_2D,z),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_WRAP_S,L.REPEAT),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_WRAP_T,L.REPEAT),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,0),L.texImage2D(L.TEXTURE_2D,0,L.RGBA,L.RGBA,L.UNSIGNED_BYTE,G),z}var N0={};function _0(L){if(!(L in N0)){var G;if(L=="transparent")G=[0,0,0,0];else if(L.indexOf("rgba")>-1){G=(L.match(/[\d.]+/g)||[]).map(Number);for(var z=0;z<3;z++)G[z]=G[z]/255}else G=g(L).map(function(K){return K/255}),G.push(1);N0[L]=G}return N0[L]}function c6(L){return"\x1B[0;48;5;"+F1(L)+"m\x1B[2J"}function d6(L,G){return"\x1B[0;38;5;"+F1(L)+";48;5;"+F1(G)+"m"}function l6(L,G){return"\x1B["+(G+1)+";"+(L+1)+"H"}function F1(L){var G=256,z=6,K=z/G,Z=g(L),J=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),U=Math.floor(Z[2]*K);return J*36+V*6+U*1+16}var m1=function(L){K0(G,L);function G(){var K=L.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var z=G.prototype;return z.schedule=function K(Z){setTimeout(Z,16.666666666666668)},z.setOptions=function K(Z){L.prototype.setOptions.call(this,Z);var J=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(U,$){return Math.floor((U-J[$])/2)})},z.clear=function K(){process.stdout.write(c6(this._options.bg))},z.draw=function K(Z,J){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],Y=Z[4],H=this._offset[0]+V,F=this._offset[1]+U,D=this.computeSize();if(H<0||H>=D[0])return;if(F<0||F>=D[1])return;if(H!==this._cursor[0]||F!==this._cursor[1])process.stdout.write(l6(H,F)),this._cursor[0]=H,this._cursor[1]=F;if(J){if(!$)$=" "}if(!$)return;var M=d6(w,Y);if(M!==this._lastColor)process.stdout.write(M),this._lastColor=M;if($!="\t"){var R=[].concat($);process.stdout.write(R[0])}if(this._cursor[0]++,this._cursor[0]>=D[0])this._cursor[0]=0,this._cursor[1]++},z.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},z.eventToPosition=function K(Z,J){return[Z,J]},z.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},G}(P),n6=/%([bc]){([^}]*)}/g,I0=0,v0=1,D1=2,W1=3;function r6(L,G){var z={width:0,height:1},K=M1(L,G),Z=0;for(var J=0;J<K.length;J++){var V=K[J];switch(V.type){case I0:Z+=V.value.length;break;case v0:z.height++,z.width=Math.max(z.width,Z),Z=0;break}}return z.width=Math.max(z.width,Z),z}function M1(L,G){var z=[],K=0;L.replace(n6,function(J,V,U,$){var w=L.substring(K,$);if(w.length)z.push({type:I0,value:w});return z.push({type:V=="c"?D1:W1,value:U.trim()}),K=$+J.length,""});var Z=L.substring(K);if(Z.length)z.push({type:I0,value:Z});return s6(z,G)}function s6(L,G){if(!G)G=1/0;var z=0,K=0,Z=-1;while(z<L.length){var J=L[z];if(J.type==v0)K=0,Z=-1;if(J.type!=I0){z++;continue}while(K==0&&J.value.charAt(0)==" ")J.value=J.value.substring(1);var V=J.value.indexOf(`
`);if(V!=-1){J.value=e0(L,z,V,!0);var U=J.value.split("");while(U.length&&U[U.length-1]==" ")U.pop();J.value=U.join("")}if(!J.value.length){L.splice(z,1);continue}if(K+J.value.length>G){var $=-1;while(!0){var w=J.value.indexOf(" ",$+1);if(w==-1)break;if(K+w>G)break;$=w}if($!=-1)J.value=e0(L,z,$,!0);else if(Z!=-1){var Y=L[Z],H=Y.value.lastIndexOf(" ");Y.value=e0(L,Z,H,!0),z=Z}else J.value=e0(L,z,G-K,!1)}else if(K+=J.value.length,J.value.indexOf(" ")!=-1)Z=z;z++}L.push({type:v0});var F=null;for(var D=0;D<L.length;D++){var M=L[D];switch(M.type){case I0:F=M;break;case v0:if(F){var R=F.value.split("");while(R.length&&R[R.length-1]==" ")R.pop();F.value=R.join("")}F=null;break}}return L.pop(),L}function e0(L,G,z,K){var Z={type:v0},J={type:I0,value:L[G].value.substring(z+(K?1:0))};return L.splice(G+1,0,Z,J),L[G].value.substring(0,z)}var o6=Object.freeze({__proto__:null,TYPE_TEXT:I0,TYPE_NEWLINE:v0,TYPE_FG:D1,TYPE_BG:W1,measure:r6,tokenize:M1}),O1=80,R1=25,B0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},a6={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},i6={hex:e,rect:s,tile:n,"tile-gl":J0,term:m1},t6={width:O1,height:R1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},m0=function(){function L(z){if(z===void 0)z={};this._data={},this._dirty=!1,this._options={},z=Object.assign({},t6,z),this.setOptions(z),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var G=L.prototype;return G.DEBUG=function z(K,Z,J){var V=[this._options.bg,this._options.fg];this.draw(K,Z,null,null,V[J%V.length])},G.clear=function z(){this._data={},this._dirty=!0},G.setOptions=function z(K){if(Object.assign(this._options,K),K.width||K.height||K.fontSize||K.fontFamily||K.spacing||K.layout){if(K.layout){var Z=i6[K.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},G.getOptions=function z(){return this._options},G.getContainer=function z(){return this._backend.getContainer()},G.computeSize=function z(K,Z){return this._backend.computeSize(K,Z)},G.computeFontSize=function z(K,Z){return this._backend.computeFontSize(K,Z)},G.computeTileSize=function z(K,Z){var J=Math.floor(K/this._options.width),V=Math.floor(Z/this._options.height);return[J,V]},G.eventToPosition=function z(K){var Z,J;if("touches"in K)Z=K.touches[0].clientX,J=K.touches[0].clientY;else Z=K.clientX,J=K.clientY;return this._backend.eventToPosition(Z,J)},G.draw=function z(K,Z,J,V,U){if(!V)V=this._options.fg;if(!U)U=this._options.bg;var $=K+","+Z;if(this._data[$]=[K,Z,J,V,U],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[$]=!0},G.drawOver=function z(K,Z,J,V,U){var $=K+","+Z,w=this._data[$];if(w)w[2]=J||w[2],w[3]=V||w[3],w[4]=U||w[4];else this.draw(K,Z,J,V,U)},G.drawText=function z(K,Z,J,V){var U=null,$=null,w=K,Y=Z,H=1;if(!V)V=this._options.width-K;var F=M1(J,V);while(F.length){var D=F.shift();switch(D.type){case I0:var M=!1,R=!1,j=!1,S=!1;for(var k=0;k<D.value.length;k++){var h=D.value.charCodeAt(k),d=D.value.charAt(k);if(this._options.layout==="term"){var i=h>>8,Q0=i===17||i>=46&&i<=159||i>=172&&i<=215||h>=43360&&h<=43391;if(Q0){this.draw(w+0,Y,d,U,$),this.draw(w+1,Y,"\t",U,$),w+=2;continue}}if(j=h>65280&&h<65377||h>65500&&h<65512||h>65518,M=d.charCodeAt(0)==32||d.charCodeAt(0)==12288,S&&!j&&!M)w++;if(j&&!R)w++;this.draw(w++,Y,d,U,$),R=M,S=j}break;case D1:U=D.value||null;break;case W1:$=D.value||null;break;case v0:w=K,Y++,H++;break}}return H},G._tick=function z(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var K in this._data)this._draw(K,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},G._draw=function z(K,Z){var J=this._data[K];if(J[4]!=this._options.bg)Z=!0;this._backend.draw(J,Z)},L}();m0.Rect=s,m0.Hex=e,m0.Tile=n,m0.TileGL=J0,m0.Term=m1;var e6=function(){function L(z){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,z),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var G=L.prototype;return G.clear=function z(){this._data={},this._priorValues={}},G.generate=function z(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},G.observe=function z(K){var Z=this._split(K);for(var J=0;J<Z.length;J++)this._priorValues[Z[J]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var U=Z.slice(V-this._options.order,V),$=Z[V];for(var w=0;w<U.length;w++){var Y=U.slice(w);this._observeEvent(Y,$)}}},G.getStats=function z(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var J=Object.keys(this._data).length,V=0;for(var U in this._data)V+=Object.keys(this._data[U]).length;return K.push("dictionary size (contexts): "+J),K.push("dictionary size (events): "+V),K.join(", ")},G._split=function z(K){return K.split(this._options.words?/\s+/:"")},G._join=function z(K){return K.join(this._options.words?" ":"")},G._observeEvent=function z(K,Z){var J=this._join(K);if(!(J in this._data))this._data[J]={};var V=this._data[J];if(!(Z in V))V[Z]=0;V[Z]++},G._sample=function z(K){K=this._backoff(K);var Z=this._join(K),J=this._data[Z],V={};if(this._options.prior){for(var U in this._priorValues)V[U]=this._priorValues[U];for(var $ in J)V[$]+=J[$]}else V=J;return X.getWeightedValue(V)},G._backoff=function z(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},L}(),y1=function(){function L(){this.heap=[],this.timestamp=0}var G=L.prototype;return G.lessThan=function z(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},G.shift=function z(K){this.heap=this.heap.map(function(Z){var{key:J,value:V,timestamp:U}=Z;return{key:J+K,value:V,timestamp:U}})},G.len=function z(){return this.heap.length},G.push=function z(K,Z){this.timestamp+=1;var J=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(J)},G.pop=function z(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},G.find=function z(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},G.remove=function z(K){var Z=null;for(var J=0;J<this.len();J++)if(K==this.heap[J].value)Z=J;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},G.parentNode=function z(K){return Math.floor((K-1)/2)},G.leftChildNode=function z(K){return 2*K+1},G.rightChildNode=function z(K){return 2*K+2},G.existNode=function z(K){return K>=0&&K<this.heap.length},G.swap=function z(K,Z){var J=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=J},G.minNode=function z(K){var Z=K.filter(this.existNode.bind(this)),J=Z[0];for(var V=nZ(Z),U;!(U=V()).done;){var $=U.value;if(this.lessThan(this.heap[$],this.heap[J]))J=$}return J},G.updateUp=function z(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},G.updateDown=function z(K){var Z=this.leftChildNode(K),J=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,J]);if(V!=K)this.swap(K,V),this.updateDown(V)},G.debugPrint=function z(){console.log(this.heap)},L}(),p1=function(){function L(){this._time=0,this._events=new y1}var G=L.prototype;return G.getTime=function z(){return this._time},G.clear=function z(){return this._events=new y1,this},G.add=function z(K,Z){this._events.push(K,Z)},G.get=function z(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,J=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return J},G.getEventTime=function z(K){var Z=this._events.find(K);if(Z){var J=Z.key;return J}return},G.remove=function z(K){return this._events.remove(K)},L}(),j1=function(){function L(){this._queue=new p1,this._repeat=[],this._current=null}var G=L.prototype;return G.getTime=function z(){return this._queue.getTime()},G.add=function z(K,Z){if(Z)this._repeat.push(K);return this},G.getTimeOf=function z(K){return this._queue.getEventTime(K)},G.clear=function z(){return this._queue.clear(),this._repeat=[],this._current=null,this},G.remove=function z(K){var Z=this._queue.remove(K),J=this._repeat.indexOf(K);if(J!=-1)this._repeat.splice(J,1);if(this._current==K)this._current=null;return Z},G.next=function z(){return this._current=this._queue.get(),this._current},L}(),ZZ=function(L){K0(G,L);function G(){return L.apply(this,arguments)||this}var z=G.prototype;return z.add=function K(Z,J){return this._queue.add(Z,0),L.prototype.add.call(this,Z,J)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return L.prototype.next.call(this)},G}(j1),JZ=function(L){K0(G,L);function G(){return L.apply(this,arguments)||this}var z=G.prototype;return z.add=function K(Z,J,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),L.prototype.add.call(this,Z,J)},z.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return L.prototype.next.call(this)},G}(j1),QZ=function(L){K0(G,L);function G(){var K=L.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var z=G.prototype;return z.add=function K(Z,J,V){return this._queue.add(Z,V||this._defaultDuration),L.prototype.add.call(this,Z,J)},z.clear=function K(){return this._duration=this._defaultDuration,L.prototype.clear.call(this)},z.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return L.prototype.remove.call(this,Z)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return L.prototype.next.call(this)},z.setDuration=function K(Z){if(this._current)this._duration=Z;return this},G}(j1),VZ={Simple:ZZ,Speed:JZ,Action:QZ},E1=function(){function L(z,K){if(K===void 0)K={};this._lightPasses=z,this._options=Object.assign({topology:8},K)}var G=L.prototype;return G._getCircle=function z(K,Z,J){var V=[],U,$,w;switch(this._options.topology){case 4:$=1,w=[0,1],U=[B0[8][7],B0[8][1],B0[8][3],B0[8][5]];break;case 6:U=B0[6],$=1,w=[-1,1];break;case 8:U=B0[4],$=2,w=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var Y=K+w[0]*J,H=Z+w[1]*J;for(var F=0;F<U.length;F++)for(var D=0;D<J*$;D++)V.push([Y,H]),Y+=U[F][0],H+=U[F][1];return V},L}(),KZ=function(L){K0(G,L);function G(){return L.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(Z,J,V,U){if(U(Z,J,0,1),!this._lightPasses(Z,J))return;var $=[],w,Y,H,F,D;for(var M=1;M<=V;M++){var R=this._getCircle(Z,J,M),j=360/R.length;for(var S=0;S<R.length;S++){if(H=R[S][0],F=R[S][1],w=j*(S-0.5),Y=w+j,D=!this._lightPasses(H,F),this._visibleCoords(Math.floor(w),Math.ceil(Y),D,$))U(H,F,M,1);if($.length==2&&$[0]==0&&$[1]==360)return}}},z._visibleCoords=function K(Z,J,V,U){if(Z<0){var $=this._visibleCoords(0,J,V,U),w=this._visibleCoords(360+Z,360,V,U);return $||w}var Y=0;while(Y<U.length&&U[Y]<Z)Y++;if(Y==U.length){if(V)U.push(Z,J);return!0}var H=0;if(Y%2){while(Y<U.length&&U[Y]<J)Y++,H++;if(H==0)return!1;if(V)if(H%2)U.splice(Y-H,H,J);else U.splice(Y-H,H);return!0}else{while(Y<U.length&&U[Y]<J)Y++,H++;if(Z==U[Y-H]&&H==1)return!1;if(V)if(H%2)U.splice(Y-H,H,Z);else U.splice(Y-H,H,Z,J);return!0}},G}(E1),UZ=function(L){K0(G,L);function G(){return L.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(Z,J,V,U){if(U(Z,J,0,1),!this._lightPasses(Z,J))return;var $=[],w,Y,H,F,D,M;for(var R=1;R<=V;R++){var j=this._getCircle(Z,J,R),S=j.length;for(var k=0;k<S;k++){if(w=j[k][0],Y=j[k][1],F=[k?2*k-1:2*S-1,2*S],D=[2*k+1,2*S],H=!this._lightPasses(w,Y),M=this._checkVisibility(F,D,H,$),M)U(w,Y,R,M);if($.length==2&&$[0][0]==0&&$[1][0]==$[1][1])return}}},z._checkVisibility=function K(Z,J,V,U){if(Z[0]>J[0]){var $=this._checkVisibility(Z,[Z[1],Z[1]],V,U),w=this._checkVisibility([0,1],J,V,U);return($+w)/2}var Y=0,H=!1;while(Y<U.length){var F=U[Y],D=F[0]*Z[1]-Z[0]*F[1];if(D>=0){if(D==0&&!(Y%2))H=!0;break}Y++}var M=U.length,R=!1;while(M--){var j=U[M],S=J[0]*j[1]-j[0]*J[1];if(S>=0){if(S==0&&M%2)R=!0;break}}var k=!0;if(Y==M&&(H||R))k=!1;else if(H&&R&&Y+1==M&&M%2)k=!1;else if(Y>M&&Y%2)k=!1;if(!k)return 0;var h,d=M-Y+1;if(d%2)if(Y%2){var i=U[Y];if(h=(J[0]*i[1]-i[0]*J[1])/(i[1]*J[1]),V)U.splice(Y,d,J)}else{var Q0=U[M];if(h=(Q0[0]*Z[1]-Z[0]*Q0[1])/(Z[1]*Q0[1]),V)U.splice(Y,d,Z)}else if(Y%2){var z0=U[Y],w0=U[M];if(h=(w0[0]*z0[1]-z0[0]*w0[1])/(z0[1]*w0[1]),V)U.splice(Y,d)}else{if(V)U.splice(Y,d,Z,J);return 1}var C0=(J[0]*Z[1]-Z[0]*J[1])/(Z[1]*J[1]);return h/C0},G}(E1),S0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],qZ=function(L){K0(G,L);function G(){return L.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(Z,J,V,U){U(Z,J,0,1);for(var $=0;$<S0.length;$++)this._renderOctant(Z,J,S0[$],V,U)},z.compute180=function K(Z,J,V,U,$){$(Z,J,0,1);var w=(U-1+8)%8,Y=(U-2+8)%8,H=(U+1+8)%8;this._renderOctant(Z,J,S0[Y],V,$),this._renderOctant(Z,J,S0[w],V,$),this._renderOctant(Z,J,S0[U],V,$),this._renderOctant(Z,J,S0[H],V,$)},z.compute90=function K(Z,J,V,U,$){$(Z,J,0,1);var w=(U-1+8)%8;this._renderOctant(Z,J,S0[U],V,$),this._renderOctant(Z,J,S0[w],V,$)},z._renderOctant=function K(Z,J,V,U,$){this._castVisibility(Z,J,1,1,0,U+1,V[0],V[1],V[2],V[3],$)},z._castVisibility=function K(Z,J,V,U,$,w,Y,H,F,D,M){if(U<$)return;for(var R=V;R<=w;R++){var j=-R-1,S=-R,k=!1,h=0;while(j<=0){j+=1;var d=Z+j*Y+S*H,i=J+j*F+S*D,Q0=(j-0.5)/(S+0.5),z0=(j+0.5)/(S-0.5);if(z0>U)continue;if(Q0<$)break;if(j*j+S*S<w*w)M(d,i,R,1);if(!k){if(!this._lightPasses(d,i)&&R<w)k=!0,this._castVisibility(Z,J,R+1,U,Q0,w,Y,H,F,D,M),h=z0}else{if(!this._lightPasses(d,i)){h=z0;continue}k=!1,U=h}}if(k)break}},G}(E1),zZ={DiscreteShadowcasting:KZ,PreciseShadowcasting:UZ,RecursiveShadowcasting:qZ},b0=function(){function L(z,K){if(z===void 0)z=O1;if(K===void 0)K=R1;this._width=z,this._height=K}var G=L.prototype;return G._fillMap=function z(K){var Z=[];for(var J=0;J<this._width;J++){Z.push([]);for(var V=0;V<this._height;V++)Z[J].push(K)}return Z},L}(),$Z=function(L){K0(G,L);function G(){return L.apply(this,arguments)||this}var z=G.prototype;return z.create=function K(Z){var J=this._width-1,V=this._height-1;for(var U=0;U<=J;U++)for(var $=0;$<=V;$++){var w=U&&$&&U<J&&$<V;Z(U,$,w?0:1)}return this},G}(b0),c1=function(L){K0(G,L);function G(K,Z){var J=L.call(this,K,Z)||this;return J._rooms=[],J._corridors=[],J}var z=G.prototype;return z.getRooms=function K(){return this._rooms},z.getCorridors=function K(){return this._corridors},G}(b0),d1=function L(){},Z1=function(L){K0(G,L);function G(K,Z,J,V,U,$){var w=L.call(this)||this;if(w._x1=K,w._y1=Z,w._x2=J,w._y2=V,w._doors={},U!==void 0&&$!==void 0)w.addDoor(U,$);return w}G.createRandomAt=function K(Z,J,V,U,$){var w=$.roomWidth[0],Y=$.roomWidth[1],H=X.getUniformInt(w,Y);w=$.roomHeight[0],Y=$.roomHeight[1];var F=X.getUniformInt(w,Y);if(V==1){var D=J-Math.floor(X.getUniform()*F);return new this(Z+1,D,Z+H,D+F-1,Z,J)}if(V==-1){var M=J-Math.floor(X.getUniform()*F);return new this(Z-H,M,Z-1,M+F-1,Z,J)}if(U==1){var R=Z-Math.floor(X.getUniform()*H);return new this(R,J+1,R+H-1,J+F,Z,J)}if(U==-1){var j=Z-Math.floor(X.getUniform()*H);return new this(j,J-F,j+H-1,J-1,Z,J)}throw new Error("dx or dy must be 1 or -1")},G.createRandomCenter=function K(Z,J,V){var U=V.roomWidth[0],$=V.roomWidth[1],w=X.getUniformInt(U,$);U=V.roomHeight[0],$=V.roomHeight[1];var Y=X.getUniformInt(U,$),H=Z-Math.floor(X.getUniform()*w),F=J-Math.floor(X.getUniform()*Y),D=H+w-1,M=F+Y-1;return new this(H,F,D,M)},G.createRandom=function K(Z,J,V){var U=V.roomWidth[0],$=V.roomWidth[1],w=X.getUniformInt(U,$);U=V.roomHeight[0],$=V.roomHeight[1];var Y=X.getUniformInt(U,$),H=Z-w-1,F=J-Y-1,D=1+Math.floor(X.getUniform()*H),M=1+Math.floor(X.getUniform()*F),R=D+w-1,j=M+Y-1;return new this(D,M,R,j)};var z=G.prototype;return z.addDoor=function K(Z,J){return this._doors[Z+","+J]=1,this},z.getDoors=function K(Z){for(var J in this._doors){var V=J.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},z.clearDoors=function K(){return this._doors={},this},z.addDoors=function K(Z){var J=this._x1-1,V=this._x2+1,U=this._y1-1,$=this._y2+1;for(var w=J;w<=V;w++)for(var Y=U;Y<=$;Y++){if(w!=J&&w!=V&&Y!=U&&Y!=$)continue;if(Z(w,Y))continue;this.addDoor(w,Y)}return this},z.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},z.isValid=function K(Z,J){var V=this._x1-1,U=this._x2+1,$=this._y1-1,w=this._y2+1;for(var Y=V;Y<=U;Y++)for(var H=$;H<=w;H++)if(Y==V||Y==U||H==$||H==w){if(!Z(Y,H))return!1}else if(!J(Y,H))return!1;return!0},z.create=function K(Z){var J=this._x1-1,V=this._x2+1,U=this._y1-1,$=this._y2+1,w=0;for(var Y=J;Y<=V;Y++)for(var H=U;H<=$;H++){if(Y+","+H in this._doors)w=2;else if(Y==J||Y==V||H==U||H==$)w=1;else w=0;Z(Y,H,w)}},z.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},z.getLeft=function K(){return this._x1},z.getRight=function K(){return this._x2},z.getTop=function K(){return this._y1},z.getBottom=function K(){return this._y2},G}(d1),C1=function(L){K0(G,L);function G(K,Z,J,V){var U=L.call(this)||this;return U._startX=K,U._startY=Z,U._endX=J,U._endY=V,U._endsWithAWall=!0,U}G.createRandomAt=function K(Z,J,V,U,$){var w=$.corridorLength[0],Y=$.corridorLength[1],H=X.getUniformInt(w,Y);return new this(Z,J,Z+V*H,J+U*H)};var z=G.prototype;return z.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},z.isValid=function K(Z,J){var V=this._startX,U=this._startY,$=this._endX-V,w=this._endY-U,Y=1+Math.max(Math.abs($),Math.abs(w));if($)$=$/Math.abs($);if(w)w=w/Math.abs(w);var H=w,F=-$,D=!0;for(var M=0;M<Y;M++){var R=V+M*$,j=U+M*w;if(!J(R,j))D=!1;if(!Z(R+H,j+F))D=!1;if(!Z(R-H,j-F))D=!1;if(!D){Y=M,this._endX=R-$,this._endY=j-w;break}}if(Y==0)return!1;if(Y==1&&Z(this._endX+$,this._endY+w))return!1;var S=!Z(this._endX+$+H,this._endY+w+F),k=!Z(this._endX+$-H,this._endY+w-F);if(this._endsWithAWall=Z(this._endX+$,this._endY+w),(S||k)&&this._endsWithAWall)return!1;return!0},z.create=function K(Z){var J=this._startX,V=this._startY,U=this._endX-J,$=this._endY-V,w=1+Math.max(Math.abs(U),Math.abs($));if(U)U=U/Math.abs(U);if($)$=$/Math.abs($);for(var Y=0;Y<w;Y++){var H=J+Y*U,F=V+Y*$;Z(H,F,0)}return!0},z.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var J=this._startX,V=this._startY,U=this._endX-J,$=this._endY-V;if(U)U=U/Math.abs(U);if($)$=$/Math.abs($);var w=$,Y=-U;Z(this._endX+U,this._endY+$),Z(this._endX+w,this._endY+Y),Z(this._endX-w,this._endY-Y)},G}(d1),BZ=function(L){K0(G,L);function G(K,Z,J){var V=L.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,J),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(h0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(h0(V)),V._isWallCallback=V._isWallCallback.bind(h0(V)),V}var z=G.prototype;return z.create=function K(Z){var J=Date.now();while(!0){var V=Date.now();if(V-J>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var U=0;U<this._width;U++)for(var $=0;$<this._height;$++)Z(U,$,this._map[U][$]);return this},z._generateRooms=function K(){var Z=this._width-2,J=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*J)>this._options.roomDugPercentage)break;while(V)},z._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var J=Z1.createRandom(this._width,this._height,this._options);if(!J.isValid(this._isWallCallback,this._canBeDugCallback))continue;return J.create(this._digCallback),this._rooms.push(J),J}return null},z._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var J=0;J<this._rooms.length;J++){var V=this._rooms[J];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=X.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var U=X.getItem(this._connected);if(!U)break;var $=this._closestRoom(this._unconnected,U);if(!$)break;var w=this._closestRoom(this._connected,$);if(!w)break;var Y=this._connectRooms($,w);if(!Y)break;if(!this._unconnected.length)return!0}}return!1},z._closestRoom=function K(Z,J){var V=1/0,U=J.getCenter(),$=null;for(var w=0;w<Z.length;w++){var Y=Z[w],H=Y.getCenter(),F=H[0]-U[0],D=H[1]-U[1],M=F*F+D*D;if(M<V)V=M,$=Y}return $},z._connectRooms=function K(Z,J){var V=Z.getCenter(),U=J.getCenter(),$=U[0]-V[0],w=U[1]-V[1],Y,H,F,D,M,R,j;if(Math.abs($)<Math.abs(w))F=w>0?2:0,D=(F+2)%4,M=J.getLeft(),R=J.getRight(),j=0;else F=$>0?1:3,D=(F+2)%4,M=J.getTop(),R=J.getBottom(),j=1;if(Y=this._placeInWall(Z,F),!Y)return!1;if(Y[j]>=M&&Y[j]<=R){H=Y.slice();var S=0;switch(D){case 0:S=J.getTop()-1;break;case 1:S=J.getRight()+1;break;case 2:S=J.getBottom()+1;break;case 3:S=J.getLeft()-1;break}H[(j+1)%2]=S,this._digLine([Y,H])}else if(Y[j]<M-1||Y[j]>R+1){var k=Y[j]-U[j],h=0;switch(D){case 0:case 1:h=k<0?3:1;break;case 2:case 3:h=k<0?1:3;break}if(D=(D+h)%4,H=this._placeInWall(J,D),!H)return!1;var d=[0,0];d[j]=Y[j];var i=(j+1)%2;d[i]=H[i],this._digLine([Y,d,H])}else{var Q0=(j+1)%2;if(H=this._placeInWall(J,D),!H)return!1;var z0=Math.round((H[Q0]+Y[Q0])/2),w0=[0,0],C0=[0,0];w0[j]=Y[j],w0[Q0]=z0,C0[j]=H[j],C0[Q0]=z0,this._digLine([Y,w0,C0,H])}if(Z.addDoor(Y[0],Y[1]),J.addDoor(H[0],H[1]),j=this._unconnected.indexOf(Z),j!=-1)this._unconnected.splice(j,1),this._connected.push(Z);if(j=this._unconnected.indexOf(J),j!=-1)this._unconnected.splice(j,1),this._connected.push(J);return!0},z._placeInWall=function K(Z,J){var V=[0,0],U=[0,0],$=0;switch(J){case 0:U=[1,0],V=[Z.getLeft(),Z.getTop()-1],$=Z.getRight()-Z.getLeft()+1;break;case 1:U=[0,1],V=[Z.getRight()+1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break;case 2:U=[1,0],V=[Z.getLeft(),Z.getBottom()+1],$=Z.getRight()-Z.getLeft()+1;break;case 3:U=[0,1],V=[Z.getLeft()-1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break}var w=[],Y=-2;for(var H=0;H<$;H++){var F=V[0]+H*U[0],D=V[1]+H*U[1];w.push(null);var M=this._map[F][D]==1;if(M){if(Y!=H-1)w[H]=[F,D]}else if(Y=H,H)w[H-1]=null}for(var R=w.length-1;R>=0;R--)if(!w[R])w.splice(R,1);return w.length?X.getItem(w):null},z._digLine=function K(Z){for(var J=1;J<Z.length;J++){var V=Z[J-1],U=Z[J],$=new C1(V[0],V[1],U[0],U[1]);$.create(this._digCallback),this._corridors.push($)}},z._digCallback=function K(Z,J,V){if(this._map[Z][J]=V,V==0)this._dug++},z._isWallCallback=function K(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},z._canBeDugCallback=function K(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},G}(c1),XZ=function(L){K0(G,L);function G(K,Z,J){var V;if(J===void 0)J={};return V=L.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(J),V._dirs=B0[V._options.topology],V._map=V._fillMap(0),V}var z=G.prototype;return z.randomize=function K(Z){for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)this._map[J][V]=X.getUniform()<Z?1:0;return this},z.setOptions=function K(Z){Object.assign(this._options,Z)},z.set=function K(Z,J,V){this._map[Z][J]=V},z.create=function K(Z){var J=this._fillMap(0),V=this._options.born,U=this._options.survive;for(var $=0;$<this._height;$++){var w=1,Y=0;if(this._options.topology==6)w=2,Y=$%2;for(var H=Y;H<this._width;H+=w){var F=this._map[H][$],D=this._getNeighbors(H,$);if(F&&U.indexOf(D)!=-1)J[H][$]=1;else if(!F&&V.indexOf(D)!=-1)J[H][$]=1}}this._map=J,Z&&this._serviceCallback(Z)},z._serviceCallback=function K(Z){for(var J=0;J<this._height;J++){var V=1,U=0;if(this._options.topology==6)V=2,U=J%2;for(var $=U;$<this._width;$+=V)Z($,J,this._map[$][J])}},z._getNeighbors=function K(Z,J){var V=0;for(var U=0;U<this._dirs.length;U++){var $=this._dirs[U],w=Z+$[0],Y=J+$[1];if(w<0||w>=this._width||Y<0||Y>=this._height)continue;V+=this._map[w][Y]==1?1:0}return V},z.connect=function K(Z,J,V){if(!J)J=0;var U=[],$={},w=1,Y=[0,0];if(this._options.topology==6)w=2,Y=[0,1];for(var H=0;H<this._height;H++)for(var F=Y[H%2];F<this._width;F+=w)if(this._freeSpace(F,H,J)){var D=[F,H];$[this._pointKey(D)]=D,U.push([F,H])}var M=U[X.getUniformInt(0,U.length-1)],R=this._pointKey(M),j={};j[R]=M,delete $[R],this._findConnected(j,$,[M],!1,J);while(Object.keys($).length>0){var S=this._getFromTo(j,$),k=S[0],h=S[1],d={};d[this._pointKey(k)]=k,this._findConnected(d,$,[k],!0,J);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,h,k,j,$,J,V);for(var Q0 in d){var z0=d[Q0];this._map[z0[0]][z0[1]]=J,j[Q0]=z0,delete $[Q0]}}Z&&this._serviceCallback(Z)},z._getFromTo=function K(Z,J){var V=[0,0],U=[0,0],$,w=Object.keys(Z),Y=Object.keys(J);for(var H=0;H<5;H++){if(w.length<Y.length){var F=w;U=Z[F[X.getUniformInt(0,F.length-1)]],V=this._getClosest(U,J)}else{var D=Y;V=J[D[X.getUniformInt(0,D.length-1)]],U=this._getClosest(V,Z)}if($=(V[0]-U[0])*(V[0]-U[0])+(V[1]-U[1])*(V[1]-U[1]),$<64)break}return[V,U]},z._getClosest=function K(Z,J){var V=null,U=null;for(var $ in J){var w=J[$],Y=(w[0]-Z[0])*(w[0]-Z[0])+(w[1]-Z[1])*(w[1]-Z[1]);if(U==null||Y<U)U=Y,V=w}return V},z._findConnected=function K(Z,J,V,U,$){while(V.length>0){var w=V.splice(0,1)[0],Y=void 0;if(this._options.topology==6)Y=[[w[0]+2,w[1]],[w[0]+1,w[1]-1],[w[0]-1,w[1]-1],[w[0]-2,w[1]],[w[0]-1,w[1]+1],[w[0]+1,w[1]+1]];else Y=[[w[0]+1,w[1]],[w[0]-1,w[1]],[w[0],w[1]+1],[w[0],w[1]-1]];for(var H=0;H<Y.length;H++){var F=this._pointKey(Y[H]);if(Z[F]==null&&this._freeSpace(Y[H][0],Y[H][1],$)){if(Z[F]=Y[H],!U)delete J[F];V.push(Y[H])}}}},z._tunnelToConnected=function K(Z,J,V,U,$,w){var Y,H;if(J[0]<Z[0])Y=J,H=Z;else Y=Z,H=J;for(var F=Y[0];F<=H[0];F++){this._map[F][Y[1]]=$;var D=[F,Y[1]],M=this._pointKey(D);V[M]=D,delete U[M]}if(w&&Y[0]<H[0])w(Y,[H[0],Y[1]]);var R=H[0];if(J[1]<Z[1])Y=J,H=Z;else Y=Z,H=J;for(var j=Y[1];j<H[1];j++){this._map[R][j]=$;var S=[R,j],k=this._pointKey(S);V[k]=S,delete U[k]}if(w&&Y[1]<H[1])w([H[0],Y[1]],[H[0],H[1]])},z._tunnelToConnected6=function K(Z,J,V,U,$,w){var Y,H;if(J[0]<Z[0])Y=J,H=Z;else Y=Z,H=J;var F=Y[0],D=Y[1];while(!(F==H[0]&&D==H[1])){var M=2;if(D<H[1])D++,M=1;else if(D>H[1])D--,M=1;if(F<H[0])F+=M;else if(F>H[0])F-=M;else if(H[1]%2)F-=M;else F+=M;this._map[F][D]=$;var R=[F,D],j=this._pointKey(R);V[j]=R,delete U[j]}if(w)w(J,Z)},z._freeSpace=function K(Z,J,V){return Z>=0&&Z<this._width&&J>=0&&J<this._height&&this._map[Z][J]==V},z._pointKey=function K(Z){return Z[0]+"."+Z[1]},G}(b0),GZ={room:Z1,corridor:C1},LZ=function(L){K0(G,L);function G(K,Z,J){var V;if(J===void 0)J={};return V=L.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},J),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(h0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(h0(V)),V._isWallCallback=V._isWallCallback.bind(h0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(h0(V)),V}var z=G.prototype;return z.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var J=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),U;do{U=0;var $=Date.now();if($-V>this._options.timeLimit)break;var w=this._findWall();if(!w)break;var Y=w.split(","),H=parseInt(Y[0]),F=parseInt(Y[1]),D=this._getDiggingDirection(H,F);if(!D)continue;var M=0;do if(M++,this._tryFeature(H,F,D[0],D[1])){this._removeSurroundingWalls(H,F),this._removeSurroundingWalls(H-D[0],F-D[1]);break}while(M<this._featureAttempts);for(var R in this._walls)if(this._walls[R]>1)U++}while(this._dug/J<this._options.dugPercentage||U);if(this._addDoors(),Z)for(var j=0;j<this._width;j++)for(var S=0;S<this._height;S++)Z(j,S,this._map[j][S]);return this._walls={},this._map=[],this},z._digCallback=function K(Z,J,V){if(V==0||V==2)this._map[Z][J]=0,this._dug++;else this._walls[Z+","+J]=1},z._isWallCallback=function K(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},z._canBeDugCallback=function K(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},z._priorityWallCallback=function K(Z,J){this._walls[Z+","+J]=2},z._firstRoom=function K(){var Z=Math.floor(this._width/2),J=Math.floor(this._height/2),V=Z1.createRandomCenter(Z,J,this._options);this._rooms.push(V),V.create(this._digCallback)},z._findWall=function K(){var Z=[],J=[];for(var V in this._walls){var U=this._walls[V];if(U==2)J.push(V);else Z.push(V)}var $=J.length?J:Z;if(!$.length)return null;var w=X.getItem($.sort());return delete this._walls[w],w},z._tryFeature=function K(Z,J,V,U){var $=X.getWeightedValue(this._features),w=GZ[$],Y=w.createRandomAt(Z,J,V,U,this._options);if(!Y.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(Y.create(this._digCallback),Y instanceof Z1)this._rooms.push(Y);if(Y instanceof C1)Y.createPriorityWalls(this._priorityWallCallback),this._corridors.push(Y);return!0},z._removeSurroundingWalls=function K(Z,J){var V=B0[4];for(var U=0;U<V.length;U++){var $=V[U],w=Z+$[0],Y=J+$[1];delete this._walls[w+","+Y],w=Z+2*$[0],Y=J+2*$[1],delete this._walls[w+","+Y]}},z._getDiggingDirection=function K(Z,J){if(Z<=0||J<=0||Z>=this._width-1||J>=this._height-1)return null;var V=null,U=B0[4];for(var $=0;$<U.length;$++){var w=U[$],Y=Z+w[0],H=J+w[1];if(!this._map[Y][H]){if(V)return null;V=w}}if(!V)return null;return[-V[0],-V[1]]},z._addDoors=function K(){var Z=this._map;function J($,w){return Z[$][w]==1}for(var V=0;V<this._rooms.length;V++){var U=this._rooms[V];U.clearDoors(),U.addDoors(J)}},G}(c1);function l1(L,G,z){z[G[L+1]]=z[L],G[z[L]]=G[L+1],z[L]=L+1,G[L+1]=L}function n1(L,G,z){z[G[L]]=z[L],G[z[L]]=G[L],z[L]=L,G[L]=L}var YZ=function(L){K0(G,L);function G(){return L.apply(this,arguments)||this}var z=G.prototype;return z.create=function K(Z){var J=this._fillMap(1),V=Math.ceil((this._width-2)/2),U=0.375,$=[],w=[];for(var Y=0;Y<V;Y++)$.push(Y),w.push(Y);$.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var F=0;F<V;F++){var D=2*F+1,M=H;if(J[D][M]=0,F!=$[F+1]&&X.getUniform()>U)l1(F,$,w),J[D+1][M]=0;if(F!=$[F]&&X.getUniform()>U)n1(F,$,w);else J[D][M+1]=0}for(var R=0;R<V;R++){var j=2*R+1,S=H;if(J[j][S]=0,R!=$[R+1]&&(R==$[R]||X.getUniform()>U))l1(R,$,w),J[j+1][S]=0;n1(R,$,w)}for(var k=0;k<this._width;k++)for(var h=0;h<this._height;h++)Z(k,h,J[k][h]);return this},G}(b0),wZ=function(L){K0(G,L);function G(){var K=L.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var z=G.prototype;return z.create=function K(Z){var J=this._width,V=this._height;this._map=[];for(var U=0;U<J;U++){this._map.push([]);for(var $=0;$<V;$++){var w=U==0||$==0||U+1==J||$+1==V;this._map[U].push(w?1:0)}}this._stack=[[1,1,J-2,V-2]],this._process();for(var Y=0;Y<J;Y++)for(var H=0;H<V;H++)Z(Y,H,this._map[Y][H]);return this._map=[],this},z._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},z._partitionRoom=function K(Z){var J=[],V=[];for(var U=Z[0]+1;U<Z[2];U++){var $=this._map[U][Z[1]-1],w=this._map[U][Z[3]+1];if($&&w&&!(U%2))J.push(U)}for(var Y=Z[1]+1;Y<Z[3];Y++){var H=this._map[Z[0]-1][Y],F=this._map[Z[2]+1][Y];if(H&&F&&!(Y%2))V.push(Y)}if(!J.length||!V.length)return;var D=X.getItem(J),M=X.getItem(V);this._map[D][M]=1;var R=[],j=[];R.push(j);for(var S=Z[0];S<D;S++)if(this._map[S][M]=1,S%2)j.push([S,M]);j=[],R.push(j);for(var k=D+1;k<=Z[2];k++)if(this._map[k][M]=1,k%2)j.push([k,M]);j=[],R.push(j);for(var h=Z[1];h<M;h++)if(this._map[D][h]=1,h%2)j.push([D,h]);j=[],R.push(j);for(var d=M+1;d<=Z[3];d++)if(this._map[D][d]=1,d%2)j.push([D,d]);var i=X.getItem(R);for(var Q0=0;Q0<R.length;Q0++){var z0=R[Q0];if(z0==i)continue;var w0=X.getItem(z0);this._map[w0[0]][w0[1]]=0}this._stack.push([Z[0],Z[1],D-1,M-1]),this._stack.push([D+1,Z[1],Z[2],M-1]),this._stack.push([Z[0],M+1,D-1,Z[3]]),this._stack.push([D+1,M+1,Z[2],Z[3]])},G}(b0),HZ=function(L){K0(G,L);function G(K,Z,J){var V;if(J===void 0)J=0;return V=L.call(this,K,Z)||this,V._regularity=J,V._map=[],V}var z=G.prototype;return z.create=function K(Z){var J=this._width,V=this._height,U=this._fillMap(1);J-=J%2?1:2,V-=V%2?1:2;var $=0,w=0,Y=0,H=0,F=0,D=!1,M=[[0,0],[0,0],[0,0],[0,0]];do{if($=1+2*Math.floor(X.getUniform()*(J-1)/2),w=1+2*Math.floor(X.getUniform()*(V-1)/2),!F)U[$][w]=0;if(!U[$][w]){this._randomize(M);do{if(Math.floor(X.getUniform()*(this._regularity+1))==0)this._randomize(M);D=!0;for(var R=0;R<4;R++)if(Y=$+M[R][0]*2,H=w+M[R][1]*2,this._isFree(U,Y,H,J,V)){U[Y][H]=0,U[$+M[R][0]][w+M[R][1]]=0,$=Y,w=H,D=!1,F++;break}}while(!D)}}while(F+1<J*V/4);for(var j=0;j<this._width;j++)for(var S=0;S<this._height;S++)Z(j,S,U[j][S]);return this._map=[],this},z._randomize=function K(Z){for(var J=0;J<4;J++)Z[J][0]=0,Z[J][1]=0;switch(Math.floor(X.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},z._isFree=function K(Z,J,V,U,$){if(J<1||V<1||J>=U||V>=$)return!1;return Z[J][V]},G}(b0),PZ=function(L){K0(G,L);function G(K,Z,J){var V=L.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],J=Object.assign({cellWidth:3,cellHeight:3},J),!J.hasOwnProperty("roomWidth"))J.roomWidth=V._calculateRoomSize(V._width,J.cellWidth);if(!J.hasOwnProperty("roomHeight"))J.roomHeight=V._calculateRoomSize(V._height,J.cellHeight);return V._options=J,V}var z=G.prototype;return z.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)Z(J,V,this.map[J][V]);return this},z._calculateRoomSize=function K(Z,J){var V=Math.floor(Z/J*0.8),U=Math.floor(Z/J*0.25);if(U<2)U=2;if(V<2)V=2;return[U,V]},z._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var J=0;J<this._options.cellHeight;J++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:J})}},z._connectRooms=function K(){var Z=X.getUniformInt(0,this._options.cellWidth-1),J=X.getUniformInt(0,this._options.cellHeight-1),V,U,$,w=!1,Y,H,F;do{F=[0,2,4,6],F=X.shuffle(F);do{if(w=!1,V=F.pop(),U=Z+B0[8][V][0],$=J+B0[8][V][1],U<0||U>=this._options.cellWidth)continue;if($<0||$>=this._options.cellHeight)continue;if(Y=this.rooms[Z][J],Y.connections.length>0){if(Y.connections[0][0]==U&&Y.connections[0][1]==$)break}if(H=this.rooms[U][$],H.connections.length==0)H.connections.push([Z,J]),this.connectedCells.push([U,$]),Z=U,J=$,w=!0}while(F.length>0&&w==!1)}while(F.length>0)},z._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,J=this._options.cellHeight;this.connectedCells=X.shuffle(this.connectedCells);var V,U,$;for(var w=0;w<this._options.cellWidth;w++)for(var Y=0;Y<this._options.cellHeight;Y++)if(V=this.rooms[w][Y],V.connections.length==0){var H=[0,2,4,6];H=X.shuffle(H),$=!1;do{var F=H.pop(),D=w+B0[8][F][0],M=Y+B0[8][F][1];if(D<0||D>=Z||M<0||M>=J)continue;if(U=this.rooms[D][M],$=!0,U.connections.length==0)break;for(var R=0;R<U.connections.length;R++)if(U.connections[R][0]==w&&U.connections[R][1]==Y){$=!1;break}if($)break}while(H.length);if($)V.connections.push([U.cellx,U.celly]);else console.log("-- Unable to connect room.")}},z._createRandomRoomConnections=function K(){},z._createRooms=function K(){var Z=this._width,J=this._height,V=this._options.cellWidth,U=this._options.cellHeight,$=Math.floor(this._width/V),w=Math.floor(this._height/U),Y,H,F=this._options.roomWidth,D=this._options.roomHeight,M,R,j;for(var S=0;S<V;S++)for(var k=0;k<U;k++){if(M=$*S,R=w*k,M==0)M=1;if(R==0)R=1;if(Y=X.getUniformInt(F[0],F[1]),H=X.getUniformInt(D[0],D[1]),k>0){j=this.rooms[S][k-1];while(R-(j.y+j.height)<3)R++}if(S>0){j=this.rooms[S-1][k];while(M-(j.x+j.width)<3)M++}var h=Math.round(X.getUniformInt(0,$-Y)/2),d=Math.round(X.getUniformInt(0,w-H)/2);while(M+h+Y>=Z)if(h)h--;else Y--;while(R+d+H>=J)if(d)d--;else H--;M=M+h,R=R+d,this.rooms[S][k].x=M,this.rooms[S][k].y=R,this.rooms[S][k].width=Y,this.rooms[S][k].height=H;for(var i=M;i<M+Y;i++)for(var Q0=R;Q0<R+H;Q0++)this.map[i][Q0]=0}},z._getWallPosition=function K(Z,J){var V,U,$;if(J==1||J==3){if(V=X.getUniformInt(Z.x+1,Z.x+Z.width-2),J==1)U=Z.y-2,$=U+1;else U=Z.y+Z.height+1,$=U-1;this.map[V][$]=0}else{if(U=X.getUniformInt(Z.y+1,Z.y+Z.height-2),J==2)V=Z.x+Z.width+1,$=V-1;else V=Z.x-2,$=V+1;this.map[$][U]=0}return[V,U]},z._drawCorridor=function K(Z,J){var V=J[0]-Z[0],U=J[1]-Z[1],$=Z[0],w=Z[1],Y,H,F,D,M=[],R=Math.abs(V),j=Math.abs(U),S=X.getUniform(),k=S,h=1-S;if(H=V>0?2:6,F=U>0?4:0,R<j)Y=Math.ceil(j*k),M.push([F,Y]),M.push([H,R]),Y=Math.floor(j*h),M.push([F,Y]);else Y=Math.ceil(R*k),M.push([H,Y]),M.push([F,j]),Y=Math.floor(R*h),M.push([H,Y]);this.map[$][w]=0;while(M.length>0){D=M.pop();while(D[1]>0)$+=B0[8][D[0]][0],w+=B0[8][D[0]][1],this.map[$][w]=0,D[1]=D[1]-1}},z._createCorridors=function K(){var Z=this._options.cellWidth,J=this._options.cellHeight,V,U,$,w,Y;for(var H=0;H<Z;H++)for(var F=0;F<J;F++){V=this.rooms[H][F];for(var D=0;D<V.connections.length;D++){if(U=V.connections[D],$=this.rooms[U[0]][U[1]],$.cellx>V.cellx)w=2,Y=4;else if($.cellx<V.cellx)w=4,Y=2;else if($.celly>V.celly)w=3,Y=1;else w=1,Y=3;this._drawCorridor(this._getWallPosition(V,w),this._getWallPosition($,Y))}}},G}(b0),FZ={Arena:$Z,Uniform:BZ,Cellular:XZ,Digger:LZ,EllerMaze:YZ,DividedMaze:wZ,IceyMaze:HZ,Rogue:PZ},DZ=function L(){},WZ=0.5*(Math.sqrt(3)-1),l0=(3-Math.sqrt(3))/6,MZ=function(L){K0(G,L);function G(K){var Z;if(K===void 0)K=256;Z=L.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var J=[];for(var V=0;V<K;V++)J.push(V);J=X.shuffle(J),Z._perms=[],Z._indexes=[];for(var U=0;U<2*K;U++)Z._perms.push(J[U%K]),Z._indexes.push(Z._perms[U]%Z._gradients.length);return Z}var z=G.prototype;return z.get=function K(Z,J){var V=this._perms,U=this._indexes,$=V.length/2,w=0,Y=0,H=0,F,D=(Z+J)*WZ,M=Math.floor(Z+D),R=Math.floor(J+D),j=(M+R)*l0,S=M-j,k=R-j,h=Z-S,d=J-k,i,Q0;if(h>d)i=1,Q0=0;else i=0,Q0=1;var z0=h-i+l0,w0=d-Q0+l0,C0=h-1+2*l0,A1=d-1+2*l0,N1=E(M,$),I1=E(R,$),n0=0.5-h*h-d*d;if(n0>=0){n0*=n0,F=U[N1+V[I1]];var s1=this._gradients[F];w=n0*n0*(s1[0]*h+s1[1]*d)}var r0=0.5-z0*z0-w0*w0;if(r0>=0){r0*=r0,F=U[N1+i+V[I1+Q0]];var o1=this._gradients[F];Y=r0*r0*(o1[0]*z0+o1[1]*w0)}var s0=0.5-C0*C0-A1*A1;if(s0>=0){s0*=s0,F=U[N1+1+V[I1+1]];var a1=this._gradients[F];H=s0*s0*(a1[0]*C0+a1[1]*A1)}return 70*(w+Y+H)},G}(DZ),OZ={Simplex:MZ},r1=function(){function L(z,K,Z,J){if(J===void 0)J={};if(this._toX=z,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},J),this._dirs=B0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var G=L.prototype;return G._getNeighbors=function z(K,Z){var J=[];for(var V=0;V<this._dirs.length;V++){var U=this._dirs[V],$=K+U[0],w=Z+U[1];if(!this._passableCallback($,w))continue;J.push([$,w])}return J},L}(),RZ=function(L){K0(G,L);function G(K,Z,J,V){var U=L.call(this,K,Z,J,V)||this;return U._computed={},U._todo=[],U._add(K,Z,null),U}var z=G.prototype;return z.compute=function K(Z,J,V){var U=Z+","+J;if(!(U in this._computed))this._compute(Z,J);if(!(U in this._computed))return;var $=this._computed[U];while($)V($.x,$.y),$=$.prev},z._compute=function K(Z,J){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==J)return;var U=this._getNeighbors(V.x,V.y);for(var $=0;$<U.length;$++){var w=U[$],Y=w[0],H=w[1],F=Y+","+H;if(F in this._computed)continue;this._add(Y,H,V)}}},z._add=function K(Z,J,V){var U={x:Z,y:J,prev:V};this._computed[Z+","+J]=U,this._todo.push(U)},G}(r1),jZ=function(L){K0(G,L);function G(K,Z,J,V){var U;if(V===void 0)V={};return U=L.call(this,K,Z,J,V)||this,U._todo=[],U._done={},U}var z=G.prototype;return z.compute=function K(Z,J,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=J,this._add(this._toX,this._toY,null);while(this._todo.length){var U=this._todo.shift(),$=U.x+","+U.y;if($ in this._done)continue;if(this._done[$]=U,U.x==Z&&U.y==J)break;var w=this._getNeighbors(U.x,U.y);for(var Y=0;Y<w.length;Y++){var H=w[Y],F=H[0],D=H[1],M=F+","+D;if(M in this._done)continue;this._add(F,D,U)}}var R=this._done[Z+","+J];if(!R)return;while(R)V(R.x,R.y),R=R.prev},z._add=function K(Z,J,V){var U=this._distance(Z,J),$={x:Z,y:J,prev:V,g:V?V.g+1:0,h:U},w=$.g+$.h;for(var Y=0;Y<this._todo.length;Y++){var H=this._todo[Y],F=H.g+H.h;if(w<F||w==F&&U<H.h){this._todo.splice(Y,0,$);return}}this._todo.push($)},z._distance=function K(Z,J){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(J-this._fromY);case 6:var V=Math.abs(Z-this._fromX),U=Math.abs(J-this._fromY);return U+Math.max(0,(V-U)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(J-this._fromY))}},G}(r1),EZ={Dijkstra:RZ,AStar:jZ},CZ=function(){function L(z){this._scheduler=z,this._lock=1}var G=L.prototype;return G.start=function z(){return this.unlock()},G.lock=function z(){return this._lock++,this},G.unlock=function z(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},L}(),AZ=function(){function L(z,K){if(K===void 0)K={};this._reflectivityCallback=z,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var G=L.prototype;return G.setOptions=function z(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},G.setFOV=function z(K){return this._fov=K,this._fovCache={},this},G.setLight=function z(K,Z,J){var V=K+","+Z;if(J)this._lights[V]=typeof J=="string"?g(J):J;else delete this._lights[V];return this},G.clearLights=function z(){this._lights={}},G.reset=function z(){return this._reflectivityCache={},this._fovCache={},this},G.compute=function z(K){var Z={},J={},V={};for(var U in this._lights){var $=this._lights[U];J[U]=[0,0,0],p(J[U],$)}for(var w=0;w<this._options.passes;w++){if(this._emitLight(J,V,Z),w+1==this._options.passes)continue;J=this._computeEmitters(V,Z)}for(var Y in V){var H=Y.split(","),F=parseInt(H[0]),D=parseInt(H[1]);K(F,D,V[Y])}return this},G._emitLight=function z(K,Z,J){for(var V in K){var U=V.split(","),$=parseInt(U[0]),w=parseInt(U[1]);this._emitLightFromCell($,w,K[V],Z),J[V]=1}return this},G._computeEmitters=function z(K,Z){var J={};for(var V in K){if(V in Z)continue;var U=K[V],$=void 0;if(V in this._reflectivityCache)$=this._reflectivityCache[V];else{var w=V.split(","),Y=parseInt(w[0]),H=parseInt(w[1]);$=this._reflectivityCallback(Y,H),this._reflectivityCache[V]=$}if($==0)continue;var F=[0,0,0],D=0;for(var M=0;M<3;M++){var R=Math.round(U[M]*$);F[M]=R,D+=R}if(D>this._options.emissionThreshold)J[V]=F}return J},G._emitLightFromCell=function z(K,Z,J,V){var U=K+","+Z,$;if(U in this._fovCache)$=this._fovCache[U];else $=this._updateFOV(K,Z);for(var w in $){var Y=$[w],H=void 0;if(w in V)H=V[w];else H=[0,0,0],V[w]=H;for(var F=0;F<3;F++)H[F]+=Math.round(J[F]*Y)}return this},G._updateFOV=function z(K,Z){var J=K+","+Z,V={};this._fovCache[J]=V;var U=this._options.range;function $(w,Y,H,F){var D=w+","+Y,M=F*(1-H/U);if(M==0)return;V[D]=M}return this._fov.compute(K,Z,U,$.bind(this)),V},L}(),NZ=y,IZ=o,SZ=o6;Q.Color=IZ,Q.DEFAULT_HEIGHT=R1,Q.DEFAULT_WIDTH=O1,Q.DIRS=B0,Q.Display=m0,Q.Engine=CZ,Q.EventQueue=p1,Q.FOV=zZ,Q.KEYS=a6,Q.Lighting=AZ,Q.Map=FZ,Q.Noise=OZ,Q.Path=EZ,Q.RNG=X,Q.Scheduler=VZ,Q.StringGenerator=e6,Q.Text=SZ,Q.Util=NZ,Object.defineProperty(Q,"__esModule",{value:!0})})});var TZ=typeof window!=="undefined"?window.innerWidth:0,gZ=typeof window!=="undefined"?window.innerHeight:0;var t={cameraWidth:Math.floor(TZ/16),cameraHeight:Math.floor(gZ/16),chatLogMaxSize:100,chatLogMaxDisplaySize:10,debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},f1={WIDTH:1024,HEIGHT:1024},X0={width:Math.floor(t.cameraWidth*(1/t.zoom)),height:Math.floor(t.cameraHeight*(1/t.zoom)),bg:"transparent",fontSize:Math.floor(t.fontSize*t.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function t1(Q,q){let B=Q.entities[q];return`DEBUG: ${q} at ${B.mapId},${B.x},${B.y}`}class J1{name;description;energyDelta;constructor(Q,q,B=0){this.name=Q,this.description=q,this.energyDelta=B}}class Q1{name;description;constructor(Q,q){this.name=Q,this.description=q}}class O0{key;description;constructor(Q,q){this.key=Q,this.description=q}}class o0{name;description;constructor(Q,q){this.name=Q,this.description=q}}class R0{name;description;icon;color;energyMax;unlockCondition;constructor(Q,q,B,X=100){this.name=Q,this.description=q,this.icon=B,this.energyMax=X,this.color="white",this.unlockCondition=null}}class V1{name;description;color;constructor(Q,q,B){this.name=Q,this.description=q,this.color=B}}class P0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(Q,q,B,X="cyberyellow",P=0,O=0,E=0,v=0,N=0,b=[]){this.name=Q,this.description=q,this.icon=B,this.color=X,this.energyDelta=P,this.matter=O,this.gold=E,this.damage=v,this.energyCost=N,this.effects=b}}class r{name;description;icon;fg;bg;energyDelta;constructor(Q,q,B=null,X="white",P="black",O=0){this.name=Q,this.description=q,this.icon=B,this.fg=X,this.bg=P,this.energyDelta=O}}var W={actions:{Enter:new J1("Enter","Enter a portal or plant atmosphere"),Launch:new J1("Launch","Launch into space",-10),Wait:new J1("Wait","Wait one turn in place")},ais:{aggrorange:new Q1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new Q1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new Q1("guardian","Idles at a position and only fights back if engaged")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new O0("N","Move/interact/combat north"),E:new O0("E","Move/interact/combat east"),S:new O0("S","Move/interact/combat south"),W:new O0("W","Move/interact/combat west"),A:new O0("A","Primary action, confirm"),B:new O0("B","Take a break, cancel"),"1":new O0("1","Secondary action, first quick slot"),"2":new O0("2","Tertiary action, second quick slot"),M:new O0("M","Menu"),"#":new O0("#","Open prompt")},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{Recharger:new o0("Recharger","Doubles energy gained from chargepads"),RockCrusher:new o0("Rock Crusher","Mines rock"),WallCrusher:new o0("Wall Crusher","Tears down weak walls"),WaterShield:new o0("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new R0("Boulder","A movable rock","o",2),movablebox:new R0("Box","A movable box","x",2),Spirit:new R0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new R0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new R0("WorkBot","Basic factory worker","B"),Cleaner:new R0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new R0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Valkyrie:new R0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new R0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200)},factions:{Spirits:new V1("Spirits","Default player faction","white"),Pyrates:new V1("Pyrates","Default enemy faction","cybermagenta"),Guardians:new V1("Guardians","Bot station guardians","cybercyan")},items:{battery:new P0("Battery","Increases maximum energy","b","cyberyellow",10),energy:new P0("Energy","Energy pack","e","cyberyellow",10),gold:new P0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new P0("Goo","A minor matter source","goo","gray",0,1),junk:new P0("Junk","Broken bot","%","gray",0,1),matter:new P0("Matter","A pile of stuff","m","gray",0,100),broom:new P0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),hammer:new P0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new P0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),shocker:new P0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new P0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new P0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1)},maps:{bot_bar:`!
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
!!spawn 4 11 AeroBot faction=Spirits
!!spawn 23 27 AeroBot faction=Spirits
!!spawn 8 18 WorkBot faction=Spirits
!!spawn 26 18 WorkBot faction=Spirits
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
!!spawn 40 19 WorkBot faction=Spirits
!!spawn 15 18 WorkBot faction=Spirits
!!spawn 25 18 WorkBot faction=Spirits
!!spawn 43 29 WorkBot faction=Spirits
!!spawn 35 3 WorkBot faction=Spirits
!!# wall
!!+ wallweak
!!~ water
!!. void
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!$ terminal
!!O portal bot_station 4 28
!!P portal bot_station 13 25
!!h portal bot_station 5 21
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
#++#+###########################################
#+++.>.>.>.>.>.>.>.>.>~>.>.>.>.>.>.>.>.>.>.>.>.#
#+++.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>~>.>.>.>.P
#++#+###########################################
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
!!s portalhidden bot_station_sewers 0 11
!!w portalhidden bot_station_sewers 1 0
!!r portalhidden bot_station_sewers 31 1
!!z portalhidden bot_station_sewers 30 31
#w############°°°°##############
#~..##########°°°°##########..~r
#.......##$###°°°°######.......#
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
##############################z#
`,bot_station_sewers:`!
!!id bot_station_sewers
!!size 32 32
!!spawn 25 17 battery
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
#w##############################
#-~~########################~~-r
#-~~~~~~################~~~~~~-#
#-~~~~~~~~~~########~~~~~~~~~~-#
#-~~####~~~~~~~##~~~~~~~~####~-#
#-~~#~~#~~~~~~~~~~~~~~~~~#~~#~-#
#-~~~~~#~~~~~~~~~~~~~~~~~#~~#~-#
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
#~~#~#########~~~~~~~#~####~#~-#
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:t.showGrid?new r("void","Just nothing here",".","gray"):new r("void","Just nothing here"),voidtrue:new r("voidtrue","Really nothing here and you shouldn't get there ever!","_"),voidhidden:new r("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new r("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),watersewage:new r("watersewage","Rust, goo and other dangers await","~~","cyberyellow","cybergreen",-4),rock:new r("rock","Hidden treasures may await","'","white","gray"),tree:new r("tree","Lots of trees make a forest","t","brown","black"),wall:new r("wall","A strong wall","#","gray","black"),wallstatueaerobot:new r("wallstatueaerobot","A small statue looking like an AeroBot","sa","gray","black"),wallstatuecleaner:new r("wallstatuecleaner","A small statue looking like a Cleaner","sc","gray","black"),wallstatuepioneer:new r("wallstatuepioneer","A small statue looking like a Pioneer","sp","gray","black"),wallstatueworkbot:new r("wallstatueworkbot","A small statue looking like a WorkBot","sb","gray","black"),wallweak:new r("wallweak","A weakened wall","+","gray","black"),chargepad:new r("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new r("movenorth","Moves you north","^^","cyberyellow"),moveeast:new r("moveeast","Moves you east",">>","cyberyellow"),movesouth:new r("movesouth","Moves you south","vv","cyberyellow"),movewest:new r("movewest","Moves you west","<<","cyberyellow"),portal:new r("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new r("portalclosed","Closed gateway to another map","Oc","black","gray"),portalhidden:new r("portalhidden","Hidden gateway to another map","#","gray","black"),portallauncher:new r("portallauncher","Launches into space","O","cyberyellow","gray"),portalstartworkbot:new r("portalstartworkbot","Start playing as a WorkBot","OB","white"),portalstartaerobot:new r("portalstartaerobot","Start playing as a AeroBot","OA","white"),"_portalstart?":new r("_portalstart?","Not unlocked, yet!","O?","white"),spacerock:new r("spacerock","Mountains as seen from space, non-blocking!","'s","white","gray"),spacetree:new r("spacetree","Forest as seen from space","ts","brown","darkgray"),spacewater:new r("spacewater","Water as seen from space, not dangerous!","~s","cybercyan","cyberblue"),spacevoid:new r("spacevoid","Void/ground as seen from space",".s","darkgray","darkgray"),spacevoidstarwhite:new r("spacevoidstarwhite","Space with a white background star",".w","white"),spacevoidstaryellow:new r("spacevoidstaryellow","Space with a yellow background star",".y","cyberyellow"),sun:new r("sun","It's hot, really hot!","§","cyberyellow","cyberyellow",-100),terminal:new r("terminal","A computer terminal","$","cyberyellow"),tv:new r("tv","A big billboard screen","!","black","cyberyellow")},uitexts:{}};function e1(Q){if(Object.hasOwn(W.dialogs,Q))return W.dialogs[Q];return`TODO: ${Q} needs localization!`}function Y0(Q,q){return Q.chatLog.push(q),Q.chatLog=Q.chatLog.slice(-t.chatLogMaxSize),Q}function F0(Q,q,B,X,P=0,O=0,E={}){let v={id:q,type:B,mapId:X,x:P,y:O,energy:10,energyMax:10,gold:0,matter:0,message:null,options:E};return Q=U1(Q,v,B),Q.entities[v.id]=v,Q}function K1(Q,q){return Q.entities[q]=void 0,delete Q.entities[q],Q.tools[q]=void 0,Q}function u0(Q,q){let B=Object.keys(Q.entities),X=[];for(let P=0;P<B.length;P++){let O=Q.entities[B[P]];if(O.mapId===q)X.push(O)}return X}function Z6(Q,q,B,X){let P=u0(Q,q).filter((O)=>O.x===B&&O.y===X);if(P.length>0)return P[0];return null}function U1(Q,q,B){if(q.type=B,q.energy=B.energyMax,q.energyMax=B.energyMax,q.gold=0,q.matter=0,!j0(q))Q.tools[q.id]=void 0;return Q}function J6(Q,q,B){if(q.options.faction===B.options.faction){if(B.options.dialog){let X=B?.options?.name?B.options.name:B.type.name;Q=Y0(Q,X+": "+e1(B.options.dialog))}}else{let X=q.id,P=B.id;Q._combatQueue.push({entityId:X,otherEntityId:P})}return Q}function j0(Q){return Q.type===W.entities.movableboulder||Q.type===W.entities.movablebox}function q1(Q,q){let B={A:W.actions.Wait,B:W.actions.Wait};if(!!Q.lastSpacePositionByEntity[q.id]&&q.energy>Math.abs(W.actions.Launch.energyDelta))B.A=W.actions.Launch;let P=Q.maps[q.mapId].getTile(q.x,q.y);if(!!P.options.mapId&&"x"in P.options&&"y"in P.options)B.A=W.actions.Enter;return B}function v1(Q,q,B){let X=Q._eventSubscribers[q];if(X)for(let P=0;P<X.length;P++){let O=X[P];Q=O(Q,B)}return Q}function b1(Q,q,B){if(q in Q._eventSubscribers);else Q._eventSubscribers[q]=[];return Q._eventSubscribers[q].push(B),Q}function k0(Q,q,B,X=0,P=0){let E={id:z1(B,X,P),type:q,mapId:B,x:X,y:P,energy:q.energyDelta,gold:q.gold,matter:q.matter};return Q.items[E.id]=E,Q}function Q6(Q,q,B,X=0,P=0){let O=W.items.junk,v={id:z1(B,X,P),type:O,mapId:B,x:X,y:P,energy:O.energyDelta,gold:O.gold,matter:q};return Q.items[v.id]=v,Q}function a0(Q,q,B,X=0,P=0,O,E){let N={id:z1(B,X,P),type:q,mapId:B,x:X,y:P,energy:q.energyDelta,gold:O,matter:E};return Q.items[N.id]=N,Q}function z1(Q,q,B){return"item,"+Q+","+q+","+B}function u1(Q,q){return Q.items[q]=void 0,delete Q.items[q],Q}function $1(Q,q){let B=Object.keys(Q.items),X=[];for(let P=0;P<B.length;P++){let O=Q.items[B[P]];if(O.mapId===q)X.push(O)}return X}function V6(Q,q,B,X){let P=z1(q,B,X);if(P in Q.items)return Q.items[P];return null}function B1(Q,q){return Q.tools[q]}function K6(Q,q,B){if(j0(q))return Q;if(!xZ(q,B))return Q;if(hZ(B))Q=k1(Q,q.id,B.type);else{if(B.type===W.items.battery)q.energyMax+=B.energy;if(Q._energyQueue.push({entityId:q.id,energyDelta:B.energy}),q.id.startsWith("player"))Q=Y0(Q,`Picked up ${B.type.name}.`)}return q.gold+=B.gold,q.matter+=B.matter,u1(Q,B.id),Q}function k1(Q,q,B){let X={type:B};if(Q.tools[q]=X,q.startsWith("player"))Q=Y0(Q,`Equipped ${B.name}.`);return Q}function hZ(Q){return Q.type.energyCost<0}function xZ(Q,q){return Q.gold+q.gold>=0&&Q.matter+q.matter>=0}/*!
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
 */var _Z=function(Q){var q={};function B(X){if(q[X])return q[X].exports;var P=q[X]={i:X,l:!1,exports:{}};return Q[X].call(P.exports,P,P.exports,B),P.l=!0,P.exports}return B.m=Q,B.c=q,B.d=function(X,P,O){B.o(X,P)||Object.defineProperty(X,P,{enumerable:!0,get:O})},B.r=function(X){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(X,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(X,"__esModule",{value:!0})},B.t=function(X,P){if(1&P&&(X=B(X)),8&P)return X;if(4&P&&typeof X=="object"&&X&&X.__esModule)return X;var O=Object.create(null);if(B.r(O),Object.defineProperty(O,"default",{enumerable:!0,value:X}),2&P&&typeof X!="string")for(var E in X)B.d(O,E,function(v){return X[v]}.bind(null,E));return O},B.n=function(X){var P=X&&X.__esModule?function(){return X.default}:function(){return X};return B.d(P,"a",P),P},B.o=function(X,P){return Object.prototype.hasOwnProperty.call(X,P)},B.p="/bin/",B(B.s=0)}([function(Q,q,B){var X={},P=B(1),O=B(2),E=B(3);Q.exports=X;var v=1;X.js=function(){var N,b,y,e=!1,s={},n={},g={},_={},p=!0,l={},c=[],q0=Number.MAX_VALUE,G0=!1;this.setAcceptableTiles=function(f){f instanceof Array?y=f:!isNaN(parseFloat(f))&&isFinite(f)&&(y=[f])},this.enableSync=function(){e=!0},this.disableSync=function(){e=!1},this.enableDiagonals=function(){G0=!0},this.disableDiagonals=function(){G0=!1},this.setGrid=function(f){N=f;for(var I=0;I<N.length;I++)for(var C=0;C<N[0].length;C++)n[N[I][C]]||(n[N[I][C]]=1)},this.setTileCost=function(f,I){n[f]=I},this.setAdditionalPointCost=function(f,I,C){g[I]===void 0&&(g[I]={}),g[I][f]=C},this.removeAdditionalPointCost=function(f,I){g[I]!==void 0&&delete g[I][f]},this.removeAllAdditionalPointCosts=function(){g={}},this.setDirectionalCondition=function(f,I,C){_[I]===void 0&&(_[I]={}),_[I][f]=C},this.removeAllDirectionalConditions=function(){_={}},this.setIterationsPerCalculation=function(f){q0=f},this.avoidAdditionalPoint=function(f,I){s[I]===void 0&&(s[I]={}),s[I][f]=1},this.stopAvoidingAdditionalPoint=function(f,I){s[I]!==void 0&&delete s[I][f]},this.enableCornerCutting=function(){p=!0},this.disableCornerCutting=function(){p=!1},this.stopAvoidingAllAdditionalPoints=function(){s={}},this.findPath=function(f,I,C,o,J0){var V0=function(N0){e?J0(N0):setTimeout(function(){J0(N0)})};if(y===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(f<0||I<0||C<0||o<0||f>N[0].length-1||I>N.length-1||C>N[0].length-1||o>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(f!==C||I!==o){for(var H0=N[o][C],$0=!1,E0=0;E0<y.length;E0++)if(H0===y[E0]){$0=!0;break}if($0!==!1){var L0=new P;L0.openList=new E(function(N0,_0){return N0.bestGuessDistance()-_0.bestGuessDistance()}),L0.isDoneCalculating=!1,L0.nodeHash={},L0.startX=f,L0.startY=I,L0.endX=C,L0.endY=o,L0.callback=V0,L0.openList.push(Z0(L0,L0.startX,L0.startY,null,1));var d0=v++;return l[d0]=L0,c.push(d0),d0}V0(null)}else V0([])},this.cancelPath=function(f){return f in l&&(delete l[f],!0)},this.calculate=function(){if(c.length!==0&&N!==void 0&&y!==void 0)for(b=0;b<q0;b++){if(c.length===0)return;e&&(b=0);var f=c[0],I=l[f];if(I!==void 0)if(I.openList.size()!==0){var C=I.openList.pop();if(I.endX!==C.x||I.endY!==C.y)C.list=0,C.y>0&&A(I,C,0,-1,1*x(C.x,C.y-1)),C.x<N[0].length-1&&A(I,C,1,0,1*x(C.x+1,C.y)),C.y<N.length-1&&A(I,C,0,1,1*x(C.x,C.y+1)),C.x>0&&A(I,C,-1,0,1*x(C.x-1,C.y)),G0&&(C.x>0&&C.y>0&&(p||u(N,y,C.x,C.y-1,C)&&u(N,y,C.x-1,C.y,C))&&A(I,C,-1,-1,1.4*x(C.x-1,C.y-1)),C.x<N[0].length-1&&C.y<N.length-1&&(p||u(N,y,C.x,C.y+1,C)&&u(N,y,C.x+1,C.y,C))&&A(I,C,1,1,1.4*x(C.x+1,C.y+1)),C.x<N[0].length-1&&C.y>0&&(p||u(N,y,C.x,C.y-1,C)&&u(N,y,C.x+1,C.y,C))&&A(I,C,1,-1,1.4*x(C.x+1,C.y-1)),C.x>0&&C.y<N.length-1&&(p||u(N,y,C.x,C.y+1,C)&&u(N,y,C.x-1,C.y,C))&&A(I,C,-1,1,1.4*x(C.x-1,C.y+1)));else{var o=[];o.push({x:C.x,y:C.y});for(var J0=C.parent;J0!=null;)o.push({x:J0.x,y:J0.y}),J0=J0.parent;o.reverse();var V0=o;I.callback(V0),delete l[f],c.shift()}}else I.callback(null),delete l[f],c.shift();else c.shift()}};var A=function(f,I,C,o,J0){var V0=I.x+C,H0=I.y+o;if((s[H0]===void 0||s[H0][V0]===void 0)&&u(N,y,V0,H0,I)){var $0=Z0(f,V0,H0,I,J0);$0.list===void 0?($0.list=1,f.openList.push($0)):I.costSoFar+J0<$0.costSoFar&&($0.costSoFar=I.costSoFar+J0,$0.parent=I,f.openList.updateItem($0))}},u=function(f,I,C,o,J0){var V0=_[o]&&_[o][C];if(V0){var H0=T(J0.x-C,J0.y-o);if(!function(){for(var E0=0;E0<V0.length;E0++)if(V0[E0]===H0)return!0;return!1}())return!1}for(var $0=0;$0<I.length;$0++)if(f[o][C]===I[$0])return!0;return!1},T=function(f,I){if(f===0&&I===-1)return X.TOP;if(f===1&&I===-1)return X.TOP_RIGHT;if(f===1&&I===0)return X.RIGHT;if(f===1&&I===1)return X.BOTTOM_RIGHT;if(f===0&&I===1)return X.BOTTOM;if(f===-1&&I===1)return X.BOTTOM_LEFT;if(f===-1&&I===0)return X.LEFT;if(f===-1&&I===-1)return X.TOP_LEFT;throw new Error("These differences are not valid: "+f+", "+I)},x=function(f,I){return g[I]&&g[I][f]||n[N[I][f]]},Z0=function(f,I,C,o,J0){if(f.nodeHash[C]!==void 0){if(f.nodeHash[C][I]!==void 0)return f.nodeHash[C][I]}else f.nodeHash[C]={};var V0=a(I,C,f.endX,f.endY);if(o!==null)var H0=o.costSoFar+J0;else H0=0;var $0=new O(o,I,C,H0,V0);return f.nodeHash[C][I]=$0,$0},a=function(f,I,C,o){var J0,V0;return G0?(J0=Math.abs(f-C))<(V0=Math.abs(I-o))?1.4*J0+V0:1.4*V0+J0:(J0=Math.abs(f-C))+(V0=Math.abs(I-o))}},X.TOP="TOP",X.TOP_RIGHT="TOP_RIGHT",X.RIGHT="RIGHT",X.BOTTOM_RIGHT="BOTTOM_RIGHT",X.BOTTOM="BOTTOM",X.BOTTOM_LEFT="BOTTOM_LEFT",X.LEFT="LEFT",X.TOP_LEFT="TOP_LEFT"},function(Q,q){Q.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(Q,q){Q.exports=function(B,X,P,O,E){this.parent=B,this.x=X,this.y=P,this.costSoFar=O,this.simpleDistanceToTarget=E,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(Q,q,B){Q.exports=B(4)},function(Q,q,B){var X,P,O;(function(){var E,v,N,b,y,e,s,n,g,_,p,l,c,q0,G0;N=Math.floor,_=Math.min,v=function(A,u){return A<u?-1:A>u?1:0},g=function(A,u,T,x,Z0){var a;if(T==null&&(T=0),Z0==null&&(Z0=v),T<0)throw new Error("lo must be non-negative");for(x==null&&(x=A.length);T<x;)Z0(u,A[a=N((T+x)/2)])<0?x=a:T=a+1;return[].splice.apply(A,[T,T-T].concat(u)),u},e=function(A,u,T){return T==null&&(T=v),A.push(u),q0(A,0,A.length-1,T)},y=function(A,u){var T,x;return u==null&&(u=v),T=A.pop(),A.length?(x=A[0],A[0]=T,G0(A,0,u)):x=T,x},n=function(A,u,T){var x;return T==null&&(T=v),x=A[0],A[0]=u,G0(A,0,T),x},s=function(A,u,T){var x;return T==null&&(T=v),A.length&&T(A[0],u)<0&&(u=(x=[A[0],u])[0],A[0]=x[1],G0(A,0,T)),u},b=function(A,u){var T,x,Z0,a,f,I;for(u==null&&(u=v),f=[],x=0,Z0=(a=function(){I=[];for(var C=0,o=N(A.length/2);0<=o?C<o:C>o;0<=o?C++:C--)I.push(C);return I}.apply(this).reverse()).length;x<Z0;x++)T=a[x],f.push(G0(A,T,u));return f},c=function(A,u,T){var x;if(T==null&&(T=v),(x=A.indexOf(u))!==-1)return q0(A,0,x,T),G0(A,x,T)},p=function(A,u,T){var x,Z0,a,f,I;if(T==null&&(T=v),!(Z0=A.slice(0,u)).length)return Z0;for(b(Z0,T),a=0,f=(I=A.slice(u)).length;a<f;a++)x=I[a],s(Z0,x,T);return Z0.sort(T).reverse()},l=function(A,u,T){var x,Z0,a,f,I,C,o,J0,V0;if(T==null&&(T=v),10*u<=A.length){if(!(a=A.slice(0,u).sort(T)).length)return a;for(Z0=a[a.length-1],f=0,C=(o=A.slice(u)).length;f<C;f++)T(x=o[f],Z0)<0&&(g(a,x,0,null,T),a.pop(),Z0=a[a.length-1]);return a}for(b(A,T),V0=[],I=0,J0=_(u,A.length);0<=J0?I<J0:I>J0;0<=J0?++I:--I)V0.push(y(A,T));return V0},q0=function(A,u,T,x){var Z0,a,f;for(x==null&&(x=v),Z0=A[T];T>u&&x(Z0,a=A[f=T-1>>1])<0;)A[T]=a,T=f;return A[T]=Z0},G0=function(A,u,T){var x,Z0,a,f,I;for(T==null&&(T=v),Z0=A.length,I=u,a=A[u],x=2*u+1;x<Z0;)(f=x+1)<Z0&&!(T(A[x],A[f])<0)&&(x=f),A[u]=A[x],x=2*(u=x)+1;return A[u]=a,q0(A,I,u,T)},E=function(){function A(u){this.cmp=u!=null?u:v,this.nodes=[]}return A.push=e,A.pop=y,A.replace=n,A.pushpop=s,A.heapify=b,A.updateItem=c,A.nlargest=p,A.nsmallest=l,A.prototype.push=function(u){return e(this.nodes,u,this.cmp)},A.prototype.pop=function(){return y(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(u){return this.nodes.indexOf(u)!==-1},A.prototype.replace=function(u){return n(this.nodes,u,this.cmp)},A.prototype.pushpop=function(u){return s(this.nodes,u,this.cmp)},A.prototype.heapify=function(){return b(this.nodes,this.cmp)},A.prototype.updateItem=function(u){return c(this.nodes,u,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var u;return(u=new A).nodes=this.nodes.slice(0),u},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),P=[],(O=typeof(X=function(){return E})=="function"?X.apply(q,P):X)===void 0||(Q.exports=O)}).call(this)}]);function U6(Q,q,B,X,P){let O=new _Z.js;O.setGrid(Q),O.setAcceptableTiles([0]),O.enableSync();let E=null;return O.findPath(q,B,X,P,function(v){E=v}),O.calculate(),E}function D0(){return"player"}function q6(Q,q,B,X){return Math.abs(Q-B)+Math.abs(q-X)}function X1(Q){return[...Array(Q).keys()]}function z6(Q){let q=mZ(Q),B=Q.entities[D0()];for(let X=0;X<q.length;X++){let P=q[X],O=Q.entities[P],E=Q._AIs[P],v=q6(B.x,B.y,O.x,O.y);if(B.options.faction!==O.options.faction&&v<=E.aggroRange){let N=Q.maps[Q.currentMapId].asMovementMap(),b=U6(N,O.x,O.y,B.x,B.y);if(b){if(b=b.slice(1),b.length>v)b=null}E.path=b}if(!!O.message&&O.message.includes("OBEY"));}for(let X=0;X<q.length;X++){let P=q[X],O=Q.entities[P],E=Q._AIs[P];if(E.path){let v=E.path[0],N=v.x-O.x,b=v.y-O.y;Q=W0(Q,O,N,b)}}return Q}function mZ(Q){let q=u0(Q,Q.currentMapId),B=[];for(let X=0;X<q.length;X++){let P=q[X];if(P.options.ai)B.push(P.id)}return B}function $6(Q,q,B){let X=Q.entities[q],P=8;switch(B){case W.ais.aggrorange:P=8;break;case W.ais.aggrorangeshort:P=2;break;case W.ais.guardian:P=1;break;default:}return Q._AIs[q]={entityId:q,type:B,aggroRange:P,startMap:X.mapId,startX:X.x,startY:X.y,path:null},Q}function G1(Q,q){return Q._AIs[q]=void 0,delete Q._AIs[q],Q}function X6(Q){let q=void 0;while(typeof(q=Q._despawnQueue.shift())!=="undefined")Q=K1(Q,q),Q=G1(Q,q);return Q}function G6(Q){return Q}class y0{mapId;x;y;entityOrItemName;options;constructor(Q,q,B,X,P={}){this.mapId=Q,this.x=q,this.y=B,this.entityOrItemName=X,this.options=P}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function i0(Q,q){if(yZ(q.entityOrItemName)){let B=q.options;if(Object.hasOwn(B,"ai"))B.ai=W.ais[B.ai];if(Object.hasOwn(B,"faction"))B.faction=W.factions[B.faction];let X=q.generateId();if(Q=F0(Q,X,W.entities[q.entityOrItemName],q.mapId,q.x,q.y,B),Object.hasOwn(B,"equip")&&B6(B.equip))Q=k1(Q,X,W.items[B.equip]);if(Object.hasOwn(B,"ai"))Q=$6(Q,X,B.ai)}else if(B6(q.entityOrItemName))Q=k0(Q,W.items[q.entityOrItemName],q.mapId,q.x,q.y);return Q}function yZ(Q){return Object.hasOwn(W.entities,Q)}function B6(Q){return Object.hasOwn(W.items,Q)}var L1={width:16,height:16},T1=L1;function T0(Q,q={}){return{type:Q,options:q}}function L6(Q){return Q.type.name.startsWith("space")}function Y6(Q){for(let q in W.maps){let B=p0(W.maps[q]);Q.maps[q]=B;for(let X of B._spawnCommands)Q=i0(Q,X);B._spawnCommands=[]}return Q}function w6(Q,q){let B=$1(Q,q);for(let P=0;P<B.length;P++){let O=B[P];Q=u1(Q,O.id)}let X=u0(Q,q);for(let P=0;P<X.length;P++){let O=X[P];Q=K1(Q,O.id),Q=G1(Q,O.id)}return Q.maps[q]=void 0,delete Q.maps[q],Q}class g0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(Q,q,B,X=[]){this.id=Q,this.widthTiles=q,this.heightTiles=B,this.seed=null,this._tiles=X,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(Q,q){if(Q>=0&&Q<this.widthTiles&&q>=0&&q<this.heightTiles){let B=q*this.widthTiles+Q;return this._tiles[B]}return{}}setTile(Q,q,B,X={}){this._cacheMovementMap=null;let P=q*this.widthTiles+Q,O=this._tiles[P];return this._tiles[P]=T0(B,X),O}setTvMessage(Q){if(this._tvCount){let q=0;for(let B of this._tiles)if(B.type===W.tiles.tv&&q<Q.length)B.options.sign=Q[q],q++;if(Q==="")Q=null;this.tvMessage=Q}}pasteOnto(Q,q=0,B=0){for(let X=0;X<Q.heightTiles;X++)for(let P=0;P<Q.widthTiles;P++){let O=Q.getTile(P,X);if(O.type!==W.tiles.voidtrue)this.setTile(P+q,X+B,O.type,O.options)}return this}circular(){let Q=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let q=-Q;q<=Q;q++)for(let B=-Q;B<=Q;B++)if(B*B+q*q>=Q*Q)this.setTile(B+Q-1,q+Q-1,W.tiles.voidtrue);return this}sample(Q,q){let B=Math.floor(this.widthTiles/Q),X=Math.floor(this.heightTiles/q),P=[];for(let O=0;O<q;O++)for(let E=0;E<Q;E++){let v={};for(let n=0;n<X;n++)for(let g=0;g<B;g++){let _=this.getTile(E*B+g,O*X+n);if(v[_.type.name])v[_.type.name]+=1;else v[_.type.name]=1}let N="",b=0;for(let[n,g]of Object.entries(v))if(g>b)N=n,b=g;let y="space"+N,e=W.tiles[y]||W.tiles.spacevoid,s={mapId:this.id,x:E*B,y:O*X};P.push(T0(e,s))}return new g0("__sampled_"+Q+"_"+q+"_"+this.id,Q,q,P)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let Q=new Array(this.heightTiles);for(let q=0;q<this.heightTiles;q++){Q[q]=new Array(this.widthTiles);for(let B=0;B<this.widthTiles;B++){let X=q*this.widthTiles+B,O=this._tiles[X].type;if(Q[q][B]=0,O===W.tiles.rock||O===W.tiles.portalclosed||O===W.tiles.tv||O.name.startsWith("wall"))Q[q][B]=1}}return this._cacheMovementMap=Q,Q}}function p0(Q){let q=Q.split(/\r?\n/),B=Q[0],X="",P=0,O=0,E={},v=[],N=[],b=0,y="";for(let s=0;s<q.length;s++){let n=q[s];if(n.startsWith(B)){if(n.startsWith(B+"!id"))X=n.slice(5);else if(n.startsWith(B+"!size")){let g=n.split(" ").slice(1);P=Number(g[0]),O=Number(g[1])}else if(n.startsWith(B+"!spawn")){let g=n.split(" ").slice(1),_={};if(g.length>3){let p=g.slice(3);for(let l of p){let c=l.split("=");_[c[0]]=c[1]}}v.push(new y0(X,Number(g[0]),Number(g[1]),g[2],_))}else if(n.startsWith(B+"!")){let g=n[2],_=n.slice(4);E[g]=_}}else for(let g=0;g<n.length;g++){let _=n[g],p=E[_];if(t.debug&&!p)console.log("DEBUG Broken map: "+X);let l=p.split(" "),c={};if(p.startsWith("portal ")||p.startsWith("portalhidden ")||p.startsWith("portallauncher ")||p.startsWith("portalstart"))p=l[0],c.mapId=l[1],c.x=Number(l[2]),c.y=Number(l[3]);if(p.startsWith("wall ")&&l.length>=2)p="wall",c.sign=l[1];if(p.startsWith("terminal ")){if(p="terminal",l.length>=2)c.screen=l[1]}if(p.startsWith("tv ")&&l.length>=2){if(p="tv",l.length===3)y=l[2];b++}N.push(T0(W.tiles[p],c))}}if(t.debug&&!(b===0||b===12))console.log("DEBUG Broken map: "+X+" (invalid TV size "+b+", allowed are 0 or 12 characters per map)");let e=new g0(X,P,O,N);return e._tvCount=b,e.setTvMessage(y),e._spawnCommands=v,e}function P6(Q,q,B){switch(B){case W.commands.N:Q=W0(Q,q,0,-1);break;case W.commands.W:Q=W0(Q,q,-1,0);break;case W.commands.S:Q=W0(Q,q,0,1);break;case W.commands.E:Q=W0(Q,q,1,0);break;case W.commands.A:Q=H6(Q,q,W.commands.A);break;case W.commands.B:Q=H6(Q,q,W.commands.B);break;default:}return Q}function W0(Q,q,B,X,P=0){let O=Q.maps[q.mapId],E=Z6(Q,O.id,q.x+B,q.y+X),v=Q.tools[q.id];if(q.message=O.tvMessage,E)if(j0(E)){if(!j0(q)&&P<1)Q=W0(Q,E,B,X,P++),Q=W0(Q,q,B,X,P++)}else Q=J6(Q,q,E);else if(dZ(O,q,B,X))Q=pZ(Q,O,q,B,X),Q._energyQueue.push({entityId:q.id,energyDelta:-1*P});else if(lZ(O,q,v,B,X)){if(O.setTile(q.x+B,q.y+X,W.tiles.void).type===W.tiles.rock){let b=Q.rng.getPercentage();if(b<=1)Q=k0(Q,W.items.matter,O.id,q.x+B,q.y+X);else if(b<=34)Q=k0(Q,W.items.junk,O.id,q.x+B,q.y+X)}Q._energyQueue.push({entityId:q.id,energyDelta:v.type.energyCost})}return Q}function H6(Q,q,B){let P=q1(Q,q)[B.key],E=Q.maps[q.mapId].getTile(q.x,q.y);switch(P){case W.actions.Enter:Q=F6(Q,q,E);break;case W.actions.Launch:Q=cZ(Q,q,E);case W.actions.Wait:break;default:}return Q}function pZ(Q,q,B,X,P){B.x+=X,B.y+=P;let O=V6(Q,B.mapId,B.x,B.y);if(O)Q=K6(Q,B,O);let E=q.getTile(B.x,B.y);if(E.type.name.startsWith("portal"))Q=F6(Q,B,E);if(E.type===W.tiles.terminal)q.setTvMessage("OBEYWORKKILL");if(E.type.name.startsWith("move"))switch(E.type.name){case"movenorth":Q=W0(Q,B,0,-1);break;case"moveeast":Q=W0(Q,B,1,0);break;case"movesouth":Q=W0(Q,B,0,1);break;case"movewest":Q=W0(Q,B,-1,0);break;default:}return Q}function F6(Q,q,B){if(q.id.startsWith("player"))Q.currentMapId=B.options.mapId;if(L6(B))Q.lastSpacePositionByEntity[q.id]={mapId:q.mapId,x:q.x,y:q.y};else Q.lastSpacePositionByEntity[q.id]=void 0,delete Q.lastSpacePositionByEntity[q.id];let X={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:B.type,newMapId:B.options.mapId,newX:B.options.x,newY:B.options.y};return q.mapId=B.options.mapId,q.x=B.options.x,q.y=B.options.y,Q=v1(Q,"entitymap.updated.event",X),Q}function cZ(Q,q,B){if(Q.lastSpacePositionByEntity[q.id]){if(q.id.startsWith("player"))Q.currentMapId=Q.lastSpacePositionByEntity[q.id].mapId;let X={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:B.type,newMapId:Q.lastSpacePositionByEntity[q.id].mapId,newX:Q.lastSpacePositionByEntity[q.id].x,newY:Q.lastSpacePositionByEntity[q.id].y};q.mapId=X.newMapId,q.x=X.newX,q.y=X.newY,Q._energyQueue.push({entityId:q.id,energyDelta:W.actions.Launch.energyDelta}),Q.lastSpacePositionByEntity[q.id]=void 0,delete Q.lastSpacePositionByEntity[q.id],Q=v1(Q,"entitymap.updated.event",X)}return Q}function D6(Q){for(let q in Q.entities){let B=Q.entities[q],X=Q.tools[q],O=Q.maps[B.mapId].getTile(B.x,B.y),E=O.type.energyDelta;if(O.type===W.tiles.chargepad&&X?.type.effects.includes(W.effects.Recharger.name))E*=2;else if((O.type===W.tiles.water||O.type===W.tiles.watersewage)&&X?.type.effects.includes(W.effects.WaterShield.name))E/=2;if(E!==0)Q._energyQueue.push({entityId:q,energyDelta:E})}return Q}function W6(Q,q){let B=Q.entities[q.entityId];switch(q.oldTileType){case W.tiles.portalstartaerobot:Q=U1(Q,B,W.entities.AeroBot),Q=Y0(Q,`Booting up as an ${W.entities.AeroBot.name}...`);break;case W.tiles.portalstartworkbot:Q=U1(Q,B,W.entities.WorkBot),Q=Y0(Q,`Booting up as a ${W.entities.WorkBot.name}...`);break;default:}return Q}function dZ(Q,q,B,X){let P=q.x+B,O=q.y+X,E=Q.getTile(P,O).type;return P>=0&&P<Q.widthTiles&&O>=0&&O<Q.heightTiles&&!(E===W.tiles.rock||E===W.tiles.portalclosed||E===W.tiles.tv||E.name.startsWith("wall"))}function lZ(Q,q,B,X,P){let O=q.x+X,E=q.y+P,v=Q.getTile(O,E).type;if(B)return B.type.effects.includes(W.effects.WallCrusher.name)&&v===W.tiles.wallweak||B.type.effects.includes(W.effects.RockCrusher.name)&&v===W.tiles.rock;return!1}var R6=S1(w1(),1);class f0{seed;_rotRng;constructor(Q=1337){this.seed=Q,this._rotRng=R6.RNG.clone(),this._rotRng.setSeed(Q)}getPercentage(){return this._rotRng.getPercentage()}getItem(Q){return this._rotRng.getItem(Q)}}function j6(Q,q){if(q.seed===1337)Q=F0(Q,"batteryvalkyrie0",W.entities.Valkyrie,q.id,130,127,{faction:W.factions.Spirits}),Q=F0(Q,"batteryvalkyrie1",W.entities.Valkyrie,q.id,124,127,{faction:W.factions.Spirits}),Q=k0(Q,W.items.trident,q.id,127,130);else{let B=new f0(q.seed);for(let X=0;X<q.heightTiles;X++)for(let P=0;P<q.widthTiles;P++){let O=q.getTile(P,X);if(B.getPercentage()<=1&&(O.type===W.tiles.void||O.type===W.tiles.tree)){let E=B.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(E){case"Deviant":case"Pioneer":Q=i0(Q,new y0(q.id,P,X,E,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":Q=i0(Q,new y0(q.id,P,X,E));break}}}}return Q}var H1=S1(w1(),1);var sZ=1337,E6=55;function C6(Q,q=sZ){H1.RNG.setSeed(q);let B=new H1.Noise.Simplex,X=L1.width*T1.width,P=L1.height*T1.height,O=[];for(let N=0;N<P;N++)for(let b=0;b<X;b++){let y=B.get(b/E6,N/E6),e;if(y<=-0.5)e=W.tiles.water;else if(y<=0)e=W.tiles.void;else if(y<0.5)e=W.tiles.tree;else e=W.tiles.rock;O.push(T0(e))}let E="simplex="+q,v=new g0(E,X,P,O);return v.seed=q,Q.maps[E]=v,Q}var oZ=1337;function N6(Q,q=oZ){let B=A6(1024,1024,W.tiles.void);B.id="solarsystem="+q,Q.maps[B.id]=B;let X=new f0(q),P=new f0(q),O=X.getItem([2,3,4,5,6,7,8,9,10,11,12]),E=128,v=512-E,N=Math.floor(v/O);B=aZ(B,X);let b=A6(128,128,W.tiles.voidtrue);iZ(b,63,63,62,W.tiles.sun),tZ(b,63,63,W.tiles.sun),B.pasteOnto(b,448,448);for(let s=E;s<512;s+=N){let n=X.getItem([-1,1])*X.getItem(X1(s)),g=X.getItem([-1,1])*Math.floor(Math.sqrt(s*s-n*n));n+=512,g+=512;let _=X.getItem([16,24,32]),p=Math.floor(_/2)-1;Q=C6(Q,q);let l=Q.maps["simplex="+q],c=W.map_snippets.launcher;c=c.replace("!!O portallauncher space 0 0",`!!O portallauncher ${B.id} ${n} ${g}`);let q0=p0(c),G0=P.getItem(X1(l.widthTiles-q0.widthTiles)),A=P.getItem(X1(l.heightTiles-q0.heightTiles));l.pasteOnto(q0,G0,A),Q=j6(Q,l);let u=l.sample(_,_).circular();B.pasteOnto(u,n-(p+1),g-(p+1)),q++}let y=W.map_snippets.space_bot_station;y=y.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let e=p0(y);return B.pasteOnto(e,583,398),Q}function A6(Q,q,B){let X=[];for(let E=0;E<Q*q;E++)X.push(T0(B));return new g0("__temp",Q,q,X)}function aZ(Q,q){for(let B=0;B<Q.heightTiles;B++)for(let X=0;X<Q.widthTiles;X++)if(q.getPercentage()<=1)Q.setTile(X,B,q.getItem([W.tiles.spacevoidstarwhite,W.tiles.spacevoidstaryellow]));return Q}function iZ(Q,q,B,X,P){let O=1-X,E=1,v=-2*X,N=0,b=X;Q.setTile(q,B+X,P),Q.setTile(q,B-X,P),Q.setTile(q+X,B,P),Q.setTile(q-X,B,P);while(N<b){if(O>=0)b-=1,v+=2,O+=v;N+=1,E+=2,O+=E,Q.setTile(q+N,B+b,P),Q.setTile(q-N,B+b,P),Q.setTile(q+N,B-b,P),Q.setTile(q-N,B-b,P),Q.setTile(q+b,B+N,P),Q.setTile(q-b,B+N,P),Q.setTile(q+b,B-N,P),Q.setTile(q-b,B-N,P)}return Q}function tZ(Q,q,B,X){let{widthTiles:P,heightTiles:O}=Q,E=[];E.push({x:q,y:B});let v=void 0;while(typeof(v=E.shift())!=="undefined"){let N=v,b=v;if(v.x+1<P)b={x:v.x+1,y:v.y};while(Q.getTile(N.x,N.y).type!==X){if(Q.setTile(N.x,N.y,X),N.y+1<O){if(Q.getTile(N.x,N.y+1).type!==X)E.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(Q.getTile(N.x,N.y-1).type!==X)E.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(Q.getTile(b.x,b.y).type!==X){if(Q.setTile(b.x,b.y,X),b.y+1<O){if(Q.getTile(b.x,b.y+1).type!==X)E.push({x:b.x,y:b.y+1})}if(b.y-1>=0){if(Q.getTile(b.x,b.y-1).type!==X)E.push({x:b.x,y:b.y-1})}if(b.x+1<P)b.x+=1;else break}}return Q}var eZ=`!
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
`;function I6(Q,q){if(q?.oldMapId?.startsWith("shop_instance")){Q=w6(Q,q.oldMapId);let B=Q.maps[q.newMapId],X=B.getTile(q.newX,q.newY);B.setTile(q.newX,q.newY,X.type,{mapId:"shop_instance",x:q.oldX,y:q.oldY})}if(q?.newMapId?.startsWith("shop_instance")){let B=p0(eZ);B.id+="_"+q.oldMapId+"_"+q.entityId,B.setTile(q.newX,q.newY,W.tiles.portal,{mapId:q.oldMapId,x:q.oldX,y:q.oldY}),Q.maps[q.oldMapId].setTile(q.oldX,q.oldY,q.oldTileType,{mapId:B.id,x:q.newX,y:q.newY});let P=Q.entities[q.entityId];if(P.id.startsWith("player"))Q.currentMapId=B.id;if(P.mapId=B.id,P.x=q.newX,P.Y=q.newY,Q.maps[B.id]=B,Q=a0(Q,W.items.hammer,B.id,4,4,0,-200),Q=a0(Q,W.items.pickaxe,B.id,4,6,0,-200),Q=a0(Q,W.items.battery,B.id,4,8,0,-200),Q=a0(Q,W.items.gold,B.id,4,10,0,-1e4),Q=F0(Q,B.id+"_shopkeeper",W.entities.AeroBot,B.id,6,2,{faction:P.options.faction,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),q?.oldMapId.startsWith("bot_stadium"))Q=F0(Q,B.id+"_shopper",W.entities.WorkBot,B.id,1,12,{faction:P.options.faction,dialog:"shop_instance_workbot_shopper"});else if(q?.oldMapId.startsWith("bot_bar"))Q=F0(Q,B.id+"_shopper",W.entities.AeroBot,B.id,4,11,{faction:P.options.faction,dialog:"shop_instance_aerobot_shopper"})}return Q}function S6(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new f0,tools:{},tvs:{}}}function f6(Q){let q=void 0;while(typeof(q=Q._combatQueue.shift())!=="undefined"){let B=-1,X=-5,P=B1(Q,q.entityId);if(P)B=P.type.energyCost,X=-1*Math.abs(P.type.damage);Q._energyQueue.push({entityId:q.entityId,energyDelta:B}),Q._energyQueue.push({entityId:q.otherEntityId,energyDelta:X});let O=Q.entities[q.entityId],E=Q.entities[q.otherEntityId],v=O?.options?.name?O.options.name:O.type.name,N=E?.options?.name?E.options.name:E.type.name;Q=Y0(Q,`${v} did ${Math.abs(X)} damage to ${N} at cost of ${Math.abs(B)} energy.`)}return Q}function v6(Q){let q=void 0,B=new Set;while(typeof(q=Q._energyQueue.shift())!=="undefined"){let X=Q.entities[q.entityId];if(X.energy=Math.min(X.energy+q.energyDelta,X.energyMax),X.energy<=0)B.add(X.id)}for(let X of B){let P=Q.entities[X];Q._despawnQueue.push(X);let O=P?.options?.name?P.options.name:P.type.name;if(!j0(P)){let E=Math.max(1,Math.floor(P.energyMax/3));Q=Q6(Q,E,P.mapId,P.x,P.y),Q=Y0(Q,`${O} destroyed leaving behind Junk.`)}}return Q}function b6(Q){return Q=z6(Q),Q=f6(Q),Q=D6(Q),Q=v6(Q),Q=X6(Q),Q=G6(Q),Q}class P1{state;constructor(){}init(){return this.state=S6(),this.state=b1(this.state,"entitymap.updated.event",W6),this.state=b1(this.state,"entitymap.updated.event",I6),this.state=N6(this.state),this.state=Y6(this.state),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,D0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"}),this.state}update(Q,q=!1){let B=this.state.entities[D0()];if(B){if(Q){switch(Q){case W.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case W.commands["#"]:this.state=Y0(this.state,t1(this.state,D0()));break;default:this.state=P6(this.state,B,Q),this.state=b6(this.state)}this.state.actionLog.push(Q.key)}}else this.state=Y0(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,D0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"});return this.state}play(Q){for(let q=0;q<Q.length;q++){let B=Q[q];this.update(W.commands[B],!0)}return this.state}}var m={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},h1=[],x1=void 0,u6=0;document.body.addEventListener("keydown",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":m.up=!0,U0(Q);break;case"a":case"ArrowLeft":m.left=!0,U0(Q);break;case"s":case"ArrowDown":m.down=!0,U0(Q);break;case"d":case"ArrowRight":m.right=!0,U0(Q);break;case"x":m.a=!0,U0(Q);break;case" ":case"y":case"z":m.b=!0,U0(Q);break;case"m":m.menu=!0,U0(Q);break;case"#":case"/":m.slash=!0,U0(Q);break;default:}A0(k6())});function A0(Q){let q=Date.now();if(x1!==void 0&&q-u6>=80)u6=q,x1(Q)}document.body.addEventListener("keyup",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":m.up=!1,U0(Q);break;case"a":case"ArrowLeft":m.left=!1,U0(Q);break;case"s":case"ArrowDown":m.down=!1,U0(Q);break;case"d":case"ArrowRight":m.right=!1,U0(Q);break;case"x":m.a=!1,U0(Q);break;case" ":case"y":case"z":m.b=!1,U0(Q);break;case"m":m.menu=!1,U0(Q);break;case"#":case"/":m.slash=!1,U0(Q);default:}});document.body.addEventListener("click",function(Q){let{clientX:q,clientY:B}=Q,P=document.body.clientWidth/3,E=document.body.clientHeight/3;if(q>=P&&q<2*P&&B<E)A0(W.commands.N),U0(Q);else if(q<P&&B<E)A0(W.commands.B),U0(Q);else if(q>=2*P&&B<E)A0(W.commands.A),U0(Q);else if(q<P&&B>=E&&B<2*E)A0(W.commands.W),U0(Q);else if(q>=2*P&&B>=E&&B<2*E)A0(W.commands.E),U0(Q);else if(q>=P&&q<2*P&&B>=2*E)A0(W.commands.S),U0(Q);else if(q>=P&&q<2*P&&B>=E&&B<2*E)A0(W.commands.M),U0(Q)});function U0(Q){Q.preventDefault(),Q.stopPropagation()}var t0=null;function ZJ(){let Q=null;if(m.right)Q=W.commands.E;if(m.left)Q=W.commands.W;if(m.down)Q=W.commands.S;if(m.up)Q=W.commands.N;if(m.up&&m.right){if(Q===W.commands.N&&t0===W.commands.N)Q=W.commands.E}if(m.up&&m.left){if(Q===W.commands.N&&t0===W.commands.N)Q=W.commands.W}if(m.down&&m.right){if(Q===W.commands.S&&t0===W.commands.S)Q=W.commands.E}if(m.down&&m.left){if(Q===W.commands.S&&t0===W.commands.S)Q=W.commands.W}if(m.a)Q=W.commands.A;if(m.b)Q=W.commands.B;if(m.menu)Q=W.commands.M;if(m.slash)Q=W.commands["#"];if(t0=Q,Q!==null)h1.push(Q)}function k6(){ZJ();let Q=h1.shift()||null;return h1=[],Q}var T6=void 0;window.addEventListener("gamepadconnected",(Q)=>{T6=setInterval(function(){let q=navigator.getGamepads()[Q.gamepad?.index];if(m.right=q.buttons[15].pressed,m.left=q.buttons[14].pressed,m.down=q.buttons[13].pressed,m.up=q.buttons[12].pressed,m.a=q.buttons[0].pressed||q.buttons[2].pressed,m.b=q.buttons[1].pressed||q.buttons[3].pressed,m.menu=q.buttons[9].pressed,m.right||m.left||m.down||m.up||m.a||m.b||m.menu)A0(k6())},100)});window.addEventListener("gamepaddisconnected",(Q)=>{clearInterval(T6)});function g6(Q){x1=Q}var m6=S1(w1(),1);var h6={AeroBot:[0,0],battery:[16,0],broom:[32,0],chargepad:[48,0],Cleaner:[64,0],Deviant:[80,0],energy:[96,0],gold:[112,0],goo:[128,0],hammer:[144,0],junk:[160,0],matter:[176,0],movableboulder:[192,0],movablebox:[208,0],moveeast:[224,0],movenorth:[240,0],movesouth:[256,0],movewest:[272,0],pickaxe:[288,0],Pioneer:[304,0],portalclosed:[320,0],portalhidden:[336,0],portallauncher:[352,0],portal:[368,0],portalstartaerobot:[384,0],"_portalstart?":[400,0],portalstartworkbot:[416,0],rock:[432,0],shocker:[448,0],spacerock:[464,0],spacetree:[480,0],spacevoid:[496,0],spacevoidstarwhite:[512,0],spacevoidstaryellow:[528,0],spacewater:[544,0],Spirit:[560,0],sun:[576,0],terminal:[592,0],tree:[608,0],trident:[624,0],tv:[640,0],Valkyrie:[656,0],voidhidden:[672,0],void:[688,0],voidtrue:[704,0],wall0:[720,0],wall1:[736,0],wall2:[752,0],walla_:[768,0],wallA:[784,0],wallb_:[800,0],wallB:[816,0],wallc_:[832,0],wallC:[848,0],walld_:[864,0],wallD:[880,0],walle_:[896,0],wallE:[912,0],wallf_:[928,0],wallF:[944,0],wallg_:[960,0],wallG:[976,0],wallh_:[992,0],wallH:[1008,0],walli_:[1024,0],wallI:[1040,0],wallj_:[1056,0],wallJ:[1072,0],wallk_:[1088,0],wallK:[1104,0],walll_:[1120,0],wallL:[1136,0],wallm_:[1152,0],wallM:[1168,0],walln_:[1184,0],wallN:[1200,0],wallo_:[1216,0],wallO:[1232,0],"wall(":[1248,0],"wall)":[1264,0],"wall+":[1280,0],"wall,":[1296,0],"wall.":[1312,0],wall:[1328,0],"wall:":[1344,0],wall_:[1360,0],"wall|":[1376,0],wallp_:[1392,0],wallP:[1408,0],wallq_:[1424,0],wallQ:[1440,0],wallr_:[1456,0],wallR:[1472,0],walls_:[1488,0],wallS:[1504,0],wallstatueaerobot:[1520,0],wallstatuecleaner:[1536,0],wallstatuepioneer:[1552,0],wallstatueworkbot:[1568,0],wallt_:[1584,0],wallT:[1600,0],wallu_:[1616,0],wallU:[1632,0],wallv_:[1648,0],wallV:[1664,0],wallweak:[1680,0],wallw_:[1696,0],wallW:[1712,0],wallx_:[1728,0],wallX:[1744,0],wally_:[1760,0],wallY:[1776,0],wallz_:[1792,0],wallZ:[1808,0],water:[1824,0],watersewage:[1840,0],WorkBot:[1856,0],wrench:[1872,0]};var c0=document.createElement("div");c0.id="ui";document.body.appendChild(c0);async function x6(Q,q=0){let B=D0(),X=Q.entities[B];if(!!X&&t.showUI){let P="",O=B1(Q,B);if(O)P=O.type.name+" ";let E="";if(X.matter>0)E=`${X.matter}M `;let v="";if(X.gold>0)v=`${X.gold}G `;let N=q1(Q,X),b=X.type.name+" "+X.energy+"/"+X.energyMax+" "+P+v+E+"Y:"+N.B.name+" X:"+N.A.name;if(c0.style.flexDirection="column-reverse",X.y-q>=X0.height-3)c0.style.flexDirection="column";let y=document.createElement("span");if(y.innerText=b,y.style.background="#000",c0.replaceChildren(y),X.energy/X.energyMax<=0.2)y.style.color="#000",y.style.background="#f00";else y.style.color="#74ee15",y.style.background="#000";if(Q._menuOpen&&!!Q.chatLog.length){let e=Q.chatLog.slice(-t.chatLogMaxDisplaySize),s=document.createElement("div");s.id="uichatlog",s.innerText=e.join(`
`),c0.appendChild(s)}}}var y6=document.createElement("img");y6.src="build/tiles.png";X0.tileSet=y6;X0.tileMap=VJ();var _1=new m6.Display(X0);document.body.appendChild(_1.getContainer());function JJ(Q,q){let B=Q.currentMapId,X=Q.maps[B],P=0,O=0;if(X.widthTiles<q.width)P=Math.floor((q.width-X.widthTiles)/2),q.x=0;if(X.heightTiles<q.height)O=Math.floor((q.height-X.heightTiles)/2),q.y=0;let E={},v={},N={};for(let g=0;g<q.height;g++)for(let _=0;_<q.width;_++){let p=X.getTile(q.x+_,q.y+g),l="";if(!!p&&!!p.type)if(p.options.sign)l="#"+p.options.sign;else l=p.type.icon;if(l){let c=[P+_,O+g].toString();E[c]=[l],v[c]=["transparent"],N[c]=["transparent"]}}let b=$1(Q,B);for(let g=0;g<b.length;g++){let _=b[g],p=P+_.x-q.x,l=O+_.y-q.y,c=[p,l].toString();if(E[c])E[c].push(_.type.icon),v[c].push("transparent"),N[c].push("transparent");else E[c]=[_.type.icon],v[c]=["transparent"],N[c]=["transparent"]}let y=D0(),e=Q.entities[y],s=((e||{}).options||{}).faction||void 0,n=u0(Q,B);for(let g=0;g<n.length;g++){let _=n[g],p=P+_.x-q.x,l=O+_.y-q.y,c="transparent";if(t.highlightEnemy&&!j0(_))c=s===_.options.faction?"rgba(116, 238, 21, 0.5)":"rgba(240, 0, 255, 0.5)";if(_===e)c="transparent";let q0=[p,l].toString();if(E[q0])E[q0].push(_.type.icon),v[q0].push(c),N[q0].push("transparent");else E[q0]=[_.type.icon],v[q0]=[c],N[q0]=["transparent"]}_1.clear();for(let[g,_]of Object.entries(E)){let p=g.split(",");_1.draw(Number(p[0]),Number(p[1]),_,v[g],N[g])}}var _6={x:0,y:0};async function x0(Q){let q=Q.entities[D0()],B=q?q:_6,X=QJ(B);JJ(Q,X),x6(Q,X.y),_6=B}async function p6(Q){}function QJ(Q){return{x:Math.min(Math.max(0,Q.x-Math.floor(X0.width/2)),f1.WIDTH-X0.width),y:Math.min(Math.max(0,Q.y-Math.floor(X0.height/2)),f1.HEIGHT-X0.height),width:X0.width,height:X0.height}}function VJ(){let Q={};for(let[q,B]of Object.entries(h6))if(q.startsWith("wall")&&(q.length===5||q.length===6))Q["#"+q.substring(4,5)]=B;else if(Object.hasOwn(W.tiles,q))Q[W.tiles[q].icon]=B;else if(Object.hasOwn(W.entities,q))Q[W.entities[q].icon]=B;else if(Object.hasOwn(W.items,q))Q[W.items[q].icon]=B;return Q}var M0=new P1;window.onload=function(){x0(M0.init())};window.onresize=function(){let Q=typeof window!=="undefined"?window.innerWidth:0,q=typeof window!=="undefined"?window.innerHeight:0;t.cameraWidth=Math.floor(Q/t.fontSize),t.cameraHeight=Math.floor(q/t.fontSize),X0.width=Math.floor(t.cameraWidth*(1/t.zoom)),X0.height=Math.floor(t.cameraHeight*(1/t.zoom)),p6(X0),x0(M0.state)};g6(function(Q){x0(M0.update(Q))});if(!window.BMActionLog)window.BMActionLog=function(){return M0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(Q){x0(M0.play(Q))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){t.debug=!t.debug,x0(M0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){t.showUI=!t.showUI,x0(M0.state)};if(t.debug){if(!window.BMDebugState)window.BMDebugState=function(){return M0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let Q=Object.keys(M0.state.maps).length,q=Object.keys(M0.state.entities).length,B=Object.keys(M0.state.items).length,X=Object.keys(M0.state.tools).length;return`Maps: ${Q}, Entities: ${q}, Items: ${B}, Tools: ${X}`}}document.body.focus();
