var AZ=Object.create;var{getPrototypeOf:NZ,defineProperty:o6,getOwnPropertyNames:SZ}=Object;var IZ=Object.prototype.hasOwnProperty;var N6=(Q,q,B)=>{B=Q!=null?AZ(NZ(Q)):{};let w=q||!Q||!Q.__esModule?o6(B,"default",{value:Q,enumerable:!0}):B;for(let F of SZ(Q))if(!IZ.call(w,F))o6(w,F,{get:()=>Q[F],enumerable:!0});return w};var fZ=(Q,q)=>()=>(q||Q((q={exports:{}}).exports,q),q.exports);var L6=fZ((G6,F1)=>{function w0(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q}function K0(Q,q){Q.prototype=Object.create(q.prototype),Q.prototype.constructor=Q,Q.__proto__=q}(function(Q,q){typeof G6==="object"&&typeof F1!=="undefined"?q(G6):typeof define==="function"&&define.amd?define(["exports"],q):q(Q.ROT={})})(G6,function(Q){var q=0.00000000023283064365386963,B=function(){function X(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var G=X.prototype;return G.getSeed=function z(){return this._seed},G.setSeed=function z(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*q,K=K*69069+1>>>0,this._s1=K*q,K=K*69069+1>>>0,this._s2=K*q,this._c=1,this},G.getUniform=function z(){var K=2091639*this._s0+this._c*q;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},G.getUniformInt=function z(K,Z){var J=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(J-V+1))+V},G.getNormal=function z(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var J,V,U;do J=2*this.getUniform()-1,V=2*this.getUniform()-1,U=J*J+V*V;while(U>1||U==0);var $=J*Math.sqrt(-2*Math.log(U)/U);return K+$*Z},G.getPercentage=function z(){return 1+Math.floor(this.getUniform()*100)},G.getItem=function z(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},G.shuffle=function z(K){var Z=[],J=K.slice();while(J.length){var V=J.indexOf(this.getItem(J));Z.push(J.splice(V,1)[0])}return Z},G.getWeightedValue=function z(K){var Z=0;for(var J in K)Z+=K[J];var V=this.getUniform()*Z,U,$=0;for(U in K)if($+=K[U],V<$)return U;return U},G.getState=function z(){return[this._s0,this._s1,this._s2,this._c]},G.setState=function z(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},G.clone=function z(){var K=new X;return K.setState(this.getState())},X}(),w=new B().setSeed(Date.now()),F=function(){function X(){}var G=X.prototype;return G.getContainer=function z(){return null},G.setOptions=function z(K){this._options=K},X}(),R=function(X){K0(G,X);function G(){var K=X.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var z=G.prototype;return z.schedule=function K(Z){requestAnimationFrame(Z)},z.getContainer=function K(){return this._ctx.canvas},z.setOptions=function K(Z){X.prototype.setOptions.call(this,Z);var J=Z.fontStyle?Z.fontStyle+" ":"",V=J+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},z.clear=function K(){this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height)},z.eventToPosition=function K(Z,J){var V=this._ctx.canvas,U=V.getBoundingClientRect();if(Z-=U.left,J-=U.top,Z*=V.width/U.width,J*=V.height/U.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},G}(F);function C(X,G){return(X%G+G)%G}function k(X,G,z){if(G===void 0)G=0;if(z===void 0)z=1;if(X<G)return G;if(X>z)return z;return X}function f(X){return X.charAt(0).toUpperCase()+X.substring(1)}function S(X){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];var Z=S.map,J=function V(U,$,Y,L){if(X.charAt(L-1)=="%")return U.substring(1);if(!z.length)return U;var H=z[0],P=$||Y,W=P.split(","),D=W.shift()||"",O=Z[D.toLowerCase()];if(!O)return U;H=z.shift();var j=H[O].apply(H,W),I=D.charAt(0);if(I!=I.toLowerCase())j=f(j);return j};return X.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,J)}S.map={s:"toString"};var l=Object.freeze({mod:C,clamp:k,capitalize:f,format:S}),g=function(X){K0(G,X);function G(){var K=X.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var z=G.prototype;return z.draw=function K(Z,J){var V=Z[0],U=Z[1],$=Z[2],Y=Z[3],L=Z[4],H=[(V+1)*this._spacingX,U*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(J)this._ctx.fillStyle=L,this._fill(H[0],H[1]);if(!$)return;this._ctx.fillStyle=Y;var P=[].concat($);for(var W=0;W<P.length;W++)this._ctx.fillText(P[W],H[0],Math.ceil(H[1]))},z.computeSize=function K(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=Math.floor(Z/this._spacingX)-1,U=Math.floor((J-2*this._hexSize)/this._spacingY+1);return[V,U]},z.computeFontSize=function K(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,U=J/(2+1.5*(this._options.height-1)),$=Math.min(V,U),Y=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=Y;var H=L/100;$=Math.floor($)+1;var P=2*$/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(P)-1},z._normalizedEventToPosition=function K(Z,J){var V;if(this._options.transpose)Z+=J,J=Z-J,Z-=J,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var U=V/this._options.height;if(J=Math.floor(J/U),C(J,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,J]},z._fill=function K(Z,J){var V=this._hexSize,U=this._options.border,$=this._ctx;if($.beginPath(),this._options.transpose)$.moveTo(Z-V+U,J),$.lineTo(Z-V/2+U,J+this._spacingX-U),$.lineTo(Z+V/2-U,J+this._spacingX-U),$.lineTo(Z+V-U,J),$.lineTo(Z+V/2-U,J-this._spacingX+U),$.lineTo(Z-V/2+U,J-this._spacingX+U),$.lineTo(Z-V+U,J);else $.moveTo(Z,J-V+U),$.lineTo(Z+this._spacingX-U,J-V/2+U),$.lineTo(Z+this._spacingX-U,J+V/2-U),$.lineTo(Z,J+V-U),$.lineTo(Z-this._spacingX+U,J+V/2-U),$.lineTo(Z-this._spacingX+U,J-V/2+U),$.lineTo(Z,J-V+U);$.fill()},z._updateSize=function K(){var Z=this._options,J=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+J/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,U;if(Z.transpose)V="height",U="width";else V="width",U="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[U]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},G}(R),h=function(){var X=function(G){K0(z,G);function z(){var Z=G.call(this)||this;return Z._spacingX=0,Z._spacingY=0,Z._canvasCache={},Z}var K=z.prototype;return K.setOptions=function Z(J){G.prototype.setOptions.call(this,J),this._canvasCache={}},K.draw=function Z(J,V){if(z.cache)this._drawWithCache(J);else this._drawNoCache(J,V)},K._drawWithCache=function Z(J){var V=J[0],U=J[1],$=J[2],Y=J[3],L=J[4],H=""+$+Y+L,P;if(H in this._canvasCache)P=this._canvasCache[H];else{var W=this._options.border;P=document.createElement("canvas");var D=P.getContext("2d");if(P.width=this._spacingX,P.height=this._spacingY,D.fillStyle=L,D.fillRect(W,W,P.width-W,P.height-W),$){D.fillStyle=Y,D.font=this._ctx.font,D.textAlign="center",D.textBaseline="middle";var O=[].concat($);for(var j=0;j<O.length;j++)D.fillText(O[j],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[H]=P}this._ctx.drawImage(P,V*this._spacingX,U*this._spacingY)},K._drawNoCache=function Z(J,V){var U=J[0],$=J[1],Y=J[2],L=J[3],H=J[4];if(V){var P=this._options.border;this._ctx.fillStyle=H,this._ctx.fillRect(U*this._spacingX+P,$*this._spacingY+P,this._spacingX-P,this._spacingY-P)}if(!Y)return;this._ctx.fillStyle=L;var W=[].concat(Y);for(var D=0;D<W.length;D++)this._ctx.fillText(W[D],(U+0.5)*this._spacingX,Math.ceil(($+0.5)*this._spacingY))},K.computeSize=function Z(J,V){var U=Math.floor(J/this._spacingX),$=Math.floor(V/this._spacingY);return[U,$]},K.computeFontSize=function Z(J,V){var U=Math.floor(J/this._options.width),$=Math.floor(V/this._options.height),Y=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=Y;var H=L/100,P=H*$/U;if(P>1)$=Math.floor($/P);return Math.floor($/this._options.spacing)},K._normalizedEventToPosition=function Z(J,V){return[Math.floor(J/this._spacingX),Math.floor(V/this._spacingY)]},K._updateSize=function Z(){var J=this._options,V=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(J.spacing*V),this._spacingY=Math.ceil(J.spacing*J.fontSize),J.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=J.width*this._spacingX,this._ctx.canvas.height=J.height*this._spacingY},z}(R);return X.cache=!1,X}(),_=function(X){K0(G,X);function G(){var K=X.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var z=G.prototype;return z.draw=function K(Z,J){var V=Z[0],U=Z[1],$=Z[2],Y=Z[3],L=Z[4],H=this._options.tileWidth,P=this._options.tileHeight;if(J)if(this._options.tileColorize)this._ctx.clearRect(V*H,U*P,H,P);else this._ctx.fillStyle=L,this._ctx.fillRect(V*H,U*P,H,P);if(!$)return;var W=[].concat($),D=[].concat(Y),O=[].concat(L);for(var j=0;j<W.length;j++){var I=this._options.tileMap[W[j]];if(!I)throw new Error('Char "'+W[j]+'" not found in tileMap');if(this._options.tileColorize){var u=this._colorCanvas,m=u.getContext("2d");m.globalCompositeOperation="source-over",m.clearRect(0,0,H,P);var p=D[j],Z0=O[j];if(m.drawImage(this._options.tileSet,I[0],I[1],H,P,0,0,H,P),p!="transparent")m.fillStyle=p,m.globalCompositeOperation="source-atop",m.fillRect(0,0,H,P);if(Z0!="transparent")m.fillStyle=Z0,m.globalCompositeOperation="destination-over",m.fillRect(0,0,H,P);this._ctx.drawImage(u,V*H,U*P,H,P)}else this._ctx.drawImage(this._options.tileSet,I[0],I[1],H,P,V*H,U*P,H,P)}},z.computeSize=function K(Z,J){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(J/this._options.tileHeight);return[V,U]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},z._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},G}(R);function y(X){var G,z;if(X in E)G=E[X];else{if(X.charAt(0)=="#"){var K=X.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)G=Z.map(function(V){return V*17});else{for(var J=0;J<3;J++)Z[J+1]+=16*Z[J],Z.splice(J,1);G=Z}}else if(z=X.match(/rgb\(([0-9, ]+)\)/i))G=z[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else G=[0,0,0];E[X]=G}return G.slice()}function d(X){var G=X.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),Z=1;Z<z;Z++)K[Z-1]=arguments[Z];for(var J=0;J<3;J++)for(var V=0;V<K.length;V++)G[J]+=K[V][J];return G}function s(X){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var J=0;J<z.length;J++)X[Z]+=z[J][Z];return X}function i(X){var G=X.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),Z=1;Z<z;Z++)K[Z-1]=arguments[Z];for(var J=0;J<3;J++){for(var V=0;V<K.length;V++)G[J]*=K[V][J]/255;G[J]=Math.round(G[J])}return G}function Q0(X){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var J=0;J<z.length;J++)X[Z]*=z[J][Z]/255;X[Z]=Math.round(X[Z])}return X}function L0(X,G,z){if(z===void 0)z=0.5;var K=X.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+z*(G[Z]-X[Z]));return K}var B0=L0;function A(X,G,z){if(z===void 0)z=0.5;var K=x(X),Z=x(G);for(var J=0;J<3;J++)K[J]+=z*(Z[J]-K[J]);return o(K)}var b=A;function T(X,G){if(!(G instanceof Array))G=Math.round(w.getNormal(0,G));var z=X.slice();for(var K=0;K<3;K++)z[K]+=G instanceof Array?Math.round(w.getNormal(0,G[K])):G;return z}function x(X){var G=X[0]/255,z=X[1]/255,K=X[2]/255,Z=Math.max(G,z,K),J=Math.min(G,z,K),V=0,U,$=(Z+J)/2;if(Z==J)U=0;else{var Y=Z-J;switch(U=$>0.5?Y/(2-Z-J):Y/(Z+J),Z){case G:V=(z-K)/Y+(z<K?6:0);break;case z:V=(K-G)/Y+2;break;case K:V=(G-z)/Y+4;break}V/=6}return[V,U,$]}function t(X,G,z){if(z<0)z+=1;if(z>1)z-=1;if(z<0.16666666666666666)return X+(G-X)*6*z;if(z<0.5)return G;if(z<0.6666666666666666)return X+(G-X)*(0.6666666666666666-z)*6;return X}function o(X){var G=X[2];if(X[1]==0)return G=Math.round(G*255),[G,G,G];else{var z=X[1],K=G<0.5?G*(1+z):G+z-G*z,Z=2*G-K,J=t(Z,K,X[0]+0.3333333333333333),V=t(Z,K,X[0]),U=t(Z,K,X[0]-0.3333333333333333);return[Math.round(J*255),Math.round(V*255),Math.round(U*255)]}}function v(X){var G=X.map(function(z){return k(z,0,255)});return"rgb("+G.join(",")+")"}function N(X){var G=X.map(function(z){return k(z,0,255).toString(16).padStart(2,"0")});return"#"+G.join("")}var E={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},n=Object.freeze({fromString:y,add:d,add_:s,multiply:i,multiply_:Q0,interpolate:L0,lerp:B0,interpolateHSL:A,lerpHSL:b,randomize:T,rgb2hsl:x,hsl2rgb:o,toRGB:v,toHex:N}),e=function(X){K0(G,X);function G(){var K=X.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){alert(Z.message)}return K}G.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var z=G.prototype;return z.schedule=function K(Z){requestAnimationFrame(Z)},z.getContainer=function K(){return this._gl.canvas},z.setOptions=function K(Z){var J=this;X.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return J._updateTexture(V)});else this._updateTexture(V)},z.draw=function K(Z,J){var V=this._gl,U=this._options,$=Z[0],Y=Z[1],L=Z[2],H=Z[3],P=Z[4],W=V.canvas.height-(Y+1)*U.tileHeight;if(V.scissor($*U.tileWidth,W,U.tileWidth,U.tileHeight),J){if(U.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,_0(P));V.clear(V.COLOR_BUFFER_BIT)}if(!L)return;var D=[].concat(L),O=[].concat(P),j=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[$,Y]);for(var I=0;I<D.length;I++){var u=this._options.tileMap[D[I]];if(!u)throw new Error('Char "'+D[I]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,U.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,u),U.tileColorize)V.uniform4fv(this._uniforms.tint,_0(j[I])),V.uniform4fv(this._uniforms.bg,_0(O[I]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},z.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,_0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},z.computeSize=function K(Z,J){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(J/this._options.tileHeight);return[V,U]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z.eventToPosition=function K(Z,J){var V=this._gl.canvas,U=V.getBoundingClientRect();if(Z-=U.left,J-=U.top,Z*=V.width/U.width,J*=V.height/U.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},z._initWebGL=function K(){var Z=this,J=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=J;var V=R0(J,H0,$0);return J.useProgram(V),X0(J),V0.forEach(function(U){return Z._uniforms[U]=J.getUniformLocation(V,U)}),this._program=V,J.enable(J.BLEND),J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA),J.enable(J.SCISSOR_TEST),J},z._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},z._updateSize=function K(){var Z=this._gl,J=this._options,V=[J.width*J.tileWidth,J.height*J.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[J.tileWidth,J.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},z._updateTexture=function K(Z){c0(this._gl,Z)},G}(F),V0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],H0=`
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
}`.trim();function R0(X,G,z){var K=X.createShader(X.VERTEX_SHADER);if(X.shaderSource(K,G),X.compileShader(K),!X.getShaderParameter(K,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(K)||"");var Z=X.createShader(X.FRAGMENT_SHADER);if(X.shaderSource(Z,z),X.compileShader(Z),!X.getShaderParameter(Z,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(Z)||"");var J=X.createProgram();if(X.attachShader(J,K),X.attachShader(J,Z),X.linkProgram(J),!X.getProgramParameter(J,X.LINK_STATUS))throw new Error(X.getProgramInfoLog(J)||"");return J}function X0(X){var G=new Float32Array([0,0,1,0,0,1,1,1]),z=X.createBuffer();X.bindBuffer(X.ARRAY_BUFFER,z),X.bufferData(X.ARRAY_BUFFER,G,X.STATIC_DRAW),X.enableVertexAttribArray(0),X.vertexAttribPointer(0,2,X.FLOAT,!1,0,0)}function c0(X,G){var z=X.createTexture();return X.bindTexture(X.TEXTURE_2D,z),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MAG_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MIN_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_S,X.REPEAT),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_T,X.REPEAT),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,0),X.texImage2D(X.TEXTURE_2D,0,X.RGBA,X.RGBA,X.UNSIGNED_BYTE,G),z}var A0={};function _0(X){if(!(X in A0)){var G;if(X=="transparent")G=[0,0,0,0];else if(X.indexOf("rgba")>-1){G=(X.match(/[\d.]+/g)||[]).map(Number);for(var z=0;z<3;z++)G[z]=G[z]/255}else G=y(X).map(function(K){return K/255}),G.push(1);A0[X]=G}return A0[X]}function x1(X){return"\x1B[0;48;5;"+H6(X)+"m\x1B[2J"}function _1(X,G){return"\x1B[0;38;5;"+H6(X)+";48;5;"+H6(G)+"m"}function m1(X,G){return"\x1B["+(G+1)+";"+(X+1)+"H"}function H6(X){var G=256,z=6,K=z/G,Z=y(X),J=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),U=Math.floor(Z[2]*K);return J*36+V*6+U*1+16}var x6=function(X){K0(G,X);function G(){var K=X.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var z=G.prototype;return z.schedule=function K(Z){setTimeout(Z,16.666666666666668)},z.setOptions=function K(Z){X.prototype.setOptions.call(this,Z);var J=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(U,$){return Math.floor((U-J[$])/2)})},z.clear=function K(){process.stdout.write(x1(this._options.bg))},z.draw=function K(Z,J){var V=Z[0],U=Z[1],$=Z[2],Y=Z[3],L=Z[4],H=this._offset[0]+V,P=this._offset[1]+U,W=this.computeSize();if(H<0||H>=W[0])return;if(P<0||P>=W[1])return;if(H!==this._cursor[0]||P!==this._cursor[1])process.stdout.write(m1(H,P)),this._cursor[0]=H,this._cursor[1]=P;if(J){if(!$)$=" "}if(!$)return;var D=_1(Y,L);if(D!==this._lastColor)process.stdout.write(D),this._lastColor=D;if($!="\t"){var O=[].concat($);process.stdout.write(O[0])}if(this._cursor[0]++,this._cursor[0]>=W[0])this._cursor[0]=0,this._cursor[1]++},z.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},z.eventToPosition=function K(Z,J){return[Z,J]},z.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},G}(F),y1=/%([bc]){([^}]*)}/g,N0=0,v0=1,P6=2,F6=3;function p1(X,G){var z={width:0,height:1},K=D6(X,G),Z=0;for(var J=0;J<K.length;J++){var V=K[J];switch(V.type){case N0:Z+=V.value.length;break;case v0:z.height++,z.width=Math.max(z.width,Z),Z=0;break}}return z.width=Math.max(z.width,Z),z}function D6(X,G){var z=[],K=0;X.replace(y1,function(J,V,U,$){var Y=X.substring(K,$);if(Y.length)z.push({type:N0,value:Y});return z.push({type:V=="c"?P6:F6,value:U.trim()}),K=$+J.length,""});var Z=X.substring(K);if(Z.length)z.push({type:N0,value:Z});return c1(z,G)}function c1(X,G){if(!G)G=1/0;var z=0,K=0,Z=-1;while(z<X.length){var J=X[z];if(J.type==v0)K=0,Z=-1;if(J.type!=N0){z++;continue}while(K==0&&J.value.charAt(0)==" ")J.value=J.value.substring(1);var V=J.value.indexOf(`
`);if(V!=-1){J.value=t0(X,z,V,!0);var U=J.value.split("");while(U.length&&U[U.length-1]==" ")U.pop();J.value=U.join("")}if(!J.value.length){X.splice(z,1);continue}if(K+J.value.length>G){var $=-1;while(!0){var Y=J.value.indexOf(" ",$+1);if(Y==-1)break;if(K+Y>G)break;$=Y}if($!=-1)J.value=t0(X,z,$,!0);else if(Z!=-1){var L=X[Z],H=L.value.lastIndexOf(" ");L.value=t0(X,Z,H,!0),z=Z}else J.value=t0(X,z,G-K,!1)}else if(K+=J.value.length,J.value.indexOf(" ")!=-1)Z=z;z++}X.push({type:v0});var P=null;for(var W=0;W<X.length;W++){var D=X[W];switch(D.type){case N0:P=D;break;case v0:if(P){var O=P.value.split("");while(O.length&&O[O.length-1]==" ")O.pop();P.value=O.join("")}P=null;break}}return X.pop(),X}function t0(X,G,z,K){var Z={type:v0},J={type:N0,value:X[G].value.substring(z+(K?1:0))};return X.splice(G+1,0,Z,J),X[G].value.substring(0,z)}var d1=Object.freeze({TYPE_TEXT:N0,TYPE_NEWLINE:v0,TYPE_FG:P6,TYPE_BG:F6,measure:p1,tokenize:D6}),W6=80,M6=25,z0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},l1={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},n1={hex:g,rect:h,tile:_,"tile-gl":e,term:x6},r1={width:W6,height:M6,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},s1=function(){var X=function(){function G(K){if(K===void 0)K={};this._data={},this._dirty=!1,this._options={},K=Object.assign({},r1,K),this.setOptions(K),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var z=G.prototype;return z.DEBUG=function K(Z,J,V){var U=[this._options.bg,this._options.fg];this.draw(Z,J,null,null,U[V%U.length])},z.clear=function K(){this._data={},this._dirty=!0},z.setOptions=function K(Z){if(Object.assign(this._options,Z),Z.width||Z.height||Z.fontSize||Z.fontFamily||Z.spacing||Z.layout){if(Z.layout){var J=n1[Z.layout];this._backend=new J}this._backend.setOptions(this._options),this._dirty=!0}return this},z.getOptions=function K(){return this._options},z.getContainer=function K(){return this._backend.getContainer()},z.computeSize=function K(Z,J){return this._backend.computeSize(Z,J)},z.computeFontSize=function K(Z,J){return this._backend.computeFontSize(Z,J)},z.computeTileSize=function K(Z,J){var V=Math.floor(Z/this._options.width),U=Math.floor(J/this._options.height);return[V,U]},z.eventToPosition=function K(Z){var J,V;if("touches"in Z)J=Z.touches[0].clientX,V=Z.touches[0].clientY;else J=Z.clientX,V=Z.clientY;return this._backend.eventToPosition(J,V)},z.draw=function K(Z,J,V,U,$){if(!U)U=this._options.fg;if(!$)$=this._options.bg;var Y=Z+","+J;if(this._data[Y]=[Z,J,V,U,$],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[Y]=!0},z.drawOver=function K(Z,J,V,U,$){var Y=Z+","+J,L=this._data[Y];if(L)L[2]=V||L[2],L[3]=U||L[3],L[4]=$||L[4];else this.draw(Z,J,V,U,$)},z.drawText=function K(Z,J,V,U){var $=null,Y=null,L=Z,H=J,P=1;if(!U)U=this._options.width-Z;var W=D6(V,U);while(W.length){var D=W.shift();switch(D.type){case N0:var O=!1,j=!1,I=!1,u=!1;for(var m=0;m<D.value.length;m++){var p=D.value.charCodeAt(m),Z0=D.value.charAt(m);if(this._options.layout==="term"){var r=p>>8,U0=r===17||r>=46&&r<=159||r>=172&&r<=215||p>=43360&&p<=43391;if(U0){this.draw(L+0,H,Z0,$,Y),this.draw(L+1,H,"\t",$,Y),L+=2;continue}}if(I=p>65280&&p<65377||p>65500&&p<65512||p>65518,O=Z0.charCodeAt(0)==32||Z0.charCodeAt(0)==12288,u&&!I&&!O)L++;if(I&&!j)L++;this.draw(L++,H,Z0,$,Y),j=O,u=I}break;case P6:$=D.value||null;break;case F6:Y=D.value||null;break;case v0:L=Z,H++,P++;break}}return P},z._tick=function K(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var Z in this._data)this._draw(Z,!1)}else for(var J in this._dirty)this._draw(J,!0);this._dirty=!1},z._draw=function K(Z,J){var V=this._data[Z];if(V[4]!=this._options.bg)J=!0;this._backend.draw(V,J)},G}();return X.Rect=h,X.Hex=g,X.Tile=_,X.TileGL=e,X.Term=x6,X}(),o1=function(){function X(z){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,z),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var G=X.prototype;return G.clear=function z(){this._data={},this._priorValues={}},G.generate=function z(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},G.observe=function z(K){var Z=this._split(K);for(var J=0;J<Z.length;J++)this._priorValues[Z[J]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var U=Z.slice(V-this._options.order,V),$=Z[V];for(var Y=0;Y<U.length;Y++){var L=U.slice(Y);this._observeEvent(L,$)}}},G.getStats=function z(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var J=Object.keys(this._data).length,V=0;for(var U in this._data)V+=Object.keys(this._data[U]).length;return K.push("dictionary size (contexts): "+J),K.push("dictionary size (events): "+V),K.join(", ")},G._split=function z(K){return K.split(this._options.words?/\s+/:"")},G._join=function z(K){return K.join(this._options.words?" ":"")},G._observeEvent=function z(K,Z){var J=this._join(K);if(!(J in this._data))this._data[J]={};var V=this._data[J];if(!(Z in V))V[Z]=0;V[Z]++},G._sample=function z(K){K=this._backoff(K);var Z=this._join(K),J=this._data[Z],V={};if(this._options.prior){for(var U in this._priorValues)V[U]=this._priorValues[U];for(var $ in J)V[$]+=J[$]}else V=J;return w.getWeightedValue(V)},G._backoff=function z(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},X}(),_6=function(){function X(){this.heap=[],this.timestamp=0}var G=X.prototype;return G.lessThan=function z(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},G.shift=function z(K){this.heap=this.heap.map(function(Z){var{key:J,value:V,timestamp:U}=Z;return{key:J+K,value:V,timestamp:U}})},G.len=function z(){return this.heap.length},G.push=function z(K,Z){this.timestamp+=1;var J=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(J)},G.pop=function z(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},G.find=function z(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},G.remove=function z(K){var Z=null;for(var J=0;J<this.len();J++)if(K==this.heap[J].value)Z=J;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},G.parentNode=function z(K){return Math.floor((K-1)/2)},G.leftChildNode=function z(K){return 2*K+1},G.rightChildNode=function z(K){return 2*K+2},G.existNode=function z(K){return K>=0&&K<this.heap.length},G.swap=function z(K,Z){var J=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=J},G.minNode=function z(K){var Z=K.filter(this.existNode.bind(this)),J=Z[0];for(var $=Z,V=Array.isArray($),U=0,$=V?$:$[Symbol.iterator]();;){var Y;if(V){if(U>=$.length)break;Y=$[U++]}else{if(U=$.next(),U.done)break;Y=U.value}var L=Y;if(this.lessThan(this.heap[L],this.heap[J]))J=L}return J},G.updateUp=function z(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},G.updateDown=function z(K){var Z=this.leftChildNode(K),J=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,J]);if(V!=K)this.swap(K,V),this.updateDown(V)},G.debugPrint=function z(){console.log(this.heap)},X}(),m6=function(){function X(){this._time=0,this._events=new _6}var G=X.prototype;return G.getTime=function z(){return this._time},G.clear=function z(){return this._events=new _6,this},G.add=function z(K,Z){this._events.push(K,Z)},G.get=function z(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,J=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return J},G.getEventTime=function z(K){var Z=this._events.find(K);if(Z){var J=Z.key;return J}return},G.remove=function z(K){return this._events.remove(K)},X}(),O6=function(){function X(){this._queue=new m6,this._repeat=[],this._current=null}var G=X.prototype;return G.getTime=function z(){return this._queue.getTime()},G.add=function z(K,Z){if(Z)this._repeat.push(K);return this},G.getTimeOf=function z(K){return this._queue.getEventTime(K)},G.clear=function z(){return this._queue.clear(),this._repeat=[],this._current=null,this},G.remove=function z(K){var Z=this._queue.remove(K),J=this._repeat.indexOf(K);if(J!=-1)this._repeat.splice(J,1);if(this._current==K)this._current=null;return Z},G.next=function z(){return this._current=this._queue.get(),this._current},X}(),a1=function(X){K0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.add=function K(Z,J){return this._queue.add(Z,0),X.prototype.add.call(this,Z,J)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return X.prototype.next.call(this)},G}(O6),i1=function(X){K0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.add=function K(Z,J,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),X.prototype.add.call(this,Z,J)},z.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return X.prototype.next.call(this)},G}(O6),t1=function(X){K0(G,X);function G(){var K=X.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var z=G.prototype;return z.add=function K(Z,J,V){return this._queue.add(Z,V||this._defaultDuration),X.prototype.add.call(this,Z,J)},z.clear=function K(){return this._duration=this._defaultDuration,X.prototype.clear.call(this)},z.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return X.prototype.remove.call(this,Z)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return X.prototype.next.call(this)},z.setDuration=function K(Z){if(this._current)this._duration=Z;return this},G}(O6),e1={Simple:a1,Speed:i1,Action:t1},R6=function(){function X(z,K){if(K===void 0)K={};this._lightPasses=z,this._options=Object.assign({topology:8},K)}var G=X.prototype;return G._getCircle=function z(K,Z,J){var V=[],U,$,Y;switch(this._options.topology){case 4:$=1,Y=[0,1],U=[z0[8][7],z0[8][1],z0[8][3],z0[8][5]];break;case 6:U=z0[6],$=1,Y=[-1,1];break;case 8:U=z0[4],$=2,Y=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var L=K+Y[0]*J,H=Z+Y[1]*J;for(var P=0;P<U.length;P++)for(var W=0;W<J*$;W++)V.push([L,H]),L+=U[P][0],H+=U[P][1];return V},X}(),ZZ=function(X){K0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(Z,J,V,U){if(U(Z,J,0,1),!this._lightPasses(Z,J))return;var $=[],Y,L,H,P,W;for(var D=1;D<=V;D++){var O=this._getCircle(Z,J,D),j=360/O.length;for(var I=0;I<O.length;I++){if(H=O[I][0],P=O[I][1],Y=j*(I-0.5),L=Y+j,W=!this._lightPasses(H,P),this._visibleCoords(Math.floor(Y),Math.ceil(L),W,$))U(H,P,D,1);if($.length==2&&$[0]==0&&$[1]==360)return}}},z._visibleCoords=function K(Z,J,V,U){if(Z<0){var $=this._visibleCoords(0,J,V,U),Y=this._visibleCoords(360+Z,360,V,U);return $||Y}var L=0;while(L<U.length&&U[L]<Z)L++;if(L==U.length){if(V)U.push(Z,J);return!0}var H=0;if(L%2){while(L<U.length&&U[L]<J)L++,H++;if(H==0)return!1;if(V)if(H%2)U.splice(L-H,H,J);else U.splice(L-H,H);return!0}else{while(L<U.length&&U[L]<J)L++,H++;if(Z==U[L-H]&&H==1)return!1;if(V)if(H%2)U.splice(L-H,H,Z);else U.splice(L-H,H,Z,J);return!0}},G}(R6),JZ=function(X){K0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(Z,J,V,U){if(U(Z,J,0,1),!this._lightPasses(Z,J))return;var $=[],Y,L,H,P,W,D;for(var O=1;O<=V;O++){var j=this._getCircle(Z,J,O),I=j.length;for(var u=0;u<I;u++){if(Y=j[u][0],L=j[u][1],P=[u?2*u-1:2*I-1,2*I],W=[2*u+1,2*I],H=!this._lightPasses(Y,L),D=this._checkVisibility(P,W,H,$),D)U(Y,L,O,D);if($.length==2&&$[0][0]==0&&$[1][0]==$[1][1])return}}},z._checkVisibility=function K(Z,J,V,U){if(Z[0]>J[0]){var $=this._checkVisibility(Z,[Z[1],Z[1]],V,U),Y=this._checkVisibility([0,1],J,V,U);return($+Y)/2}var L=0,H=!1;while(L<U.length){var P=U[L],W=P[0]*Z[1]-Z[0]*P[1];if(W>=0){if(W==0&&!(L%2))H=!0;break}L++}var D=U.length,O=!1;while(D--){var j=U[D],I=J[0]*j[1]-j[0]*J[1];if(I>=0){if(I==0&&D%2)O=!0;break}}var u=!0;if(L==D&&(H||O))u=!1;else if(H&&O&&L+1==D&&D%2)u=!1;else if(L>D&&L%2)u=!1;if(!u)return 0;var m,p=D-L+1;if(p%2)if(L%2){var Z0=U[L];if(m=(J[0]*Z0[1]-Z0[0]*J[1])/(Z0[1]*J[1]),V)U.splice(L,p,J)}else{var r=U[D];if(m=(r[0]*Z[1]-Z[0]*r[1])/(Z[1]*r[1]),V)U.splice(L,p,Z)}else if(L%2){var U0=U[L],Y0=U[D];if(m=(Y0[0]*U0[1]-U0[0]*Y0[1])/(U0[1]*Y0[1]),V)U.splice(L,p)}else{if(V)U.splice(L,p,Z,J);return 1}var j0=(J[0]*Z[1]-Z[0]*J[1])/(Z[1]*J[1]);return m/j0},G}(R6),S0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],QZ=function(X){K0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(Z,J,V,U){U(Z,J,0,1);for(var $=0;$<S0.length;$++)this._renderOctant(Z,J,S0[$],V,U)},z.compute180=function K(Z,J,V,U,$){$(Z,J,0,1);var Y=(U-1+8)%8,L=(U-2+8)%8,H=(U+1+8)%8;this._renderOctant(Z,J,S0[L],V,$),this._renderOctant(Z,J,S0[Y],V,$),this._renderOctant(Z,J,S0[U],V,$),this._renderOctant(Z,J,S0[H],V,$)},z.compute90=function K(Z,J,V,U,$){$(Z,J,0,1);var Y=(U-1+8)%8;this._renderOctant(Z,J,S0[U],V,$),this._renderOctant(Z,J,S0[Y],V,$)},z._renderOctant=function K(Z,J,V,U,$){this._castVisibility(Z,J,1,1,0,U+1,V[0],V[1],V[2],V[3],$)},z._castVisibility=function K(Z,J,V,U,$,Y,L,H,P,W,D){if(U<$)return;for(var O=V;O<=Y;O++){var j=-O-1,I=-O,u=!1,m=0;while(j<=0){j+=1;var p=Z+j*L+I*H,Z0=J+j*P+I*W,r=(j-0.5)/(I+0.5),U0=(j+0.5)/(I-0.5);if(U0>U)continue;if(r<$)break;if(j*j+I*I<Y*Y)D(p,Z0,O,1);if(!u){if(!this._lightPasses(p,Z0)&&O<Y)u=!0,this._castVisibility(Z,J,O+1,U,r,Y,L,H,P,W,D),m=U0}else{if(!this._lightPasses(p,Z0)){m=U0;continue}u=!1,U=m}}if(u)break}},G}(R6),VZ={DiscreteShadowcasting:ZZ,PreciseShadowcasting:JZ,RecursiveShadowcasting:QZ},b0=function(){function X(z,K){if(z===void 0)z=W6;if(K===void 0)K=M6;this._width=z,this._height=K}var G=X.prototype;return G._fillMap=function z(K){var Z=[];for(var J=0;J<this._width;J++){Z.push([]);for(var V=0;V<this._height;V++)Z[J].push(K)}return Z},X}(),KZ=function(X){K0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.create=function K(Z){var J=this._width-1,V=this._height-1;for(var U=0;U<=J;U++)for(var $=0;$<=V;$++){var Y=U&&$&&U<J&&$<V;Z(U,$,Y?0:1)}return this},G}(b0),y6=function(X){K0(G,X);function G(K,Z){var J=X.call(this,K,Z)||this;return J._rooms=[],J._corridors=[],J}var z=G.prototype;return z.getRooms=function K(){return this._rooms},z.getCorridors=function K(){return this._corridors},G}(b0),p6=function X(){},e0=function(X){K0(G,X);function G(K,Z,J,V,U,$){var Y=X.call(this)||this;if(Y._x1=K,Y._y1=Z,Y._x2=J,Y._y2=V,Y._doors={},U!==void 0&&$!==void 0)Y.addDoor(U,$);return Y}G.createRandomAt=function K(Z,J,V,U,$){var Y=$.roomWidth[0],L=$.roomWidth[1],H=w.getUniformInt(Y,L);Y=$.roomHeight[0],L=$.roomHeight[1];var P=w.getUniformInt(Y,L);if(V==1){var W=J-Math.floor(w.getUniform()*P);return new this(Z+1,W,Z+H,W+P-1,Z,J)}if(V==-1){var D=J-Math.floor(w.getUniform()*P);return new this(Z-H,D,Z-1,D+P-1,Z,J)}if(U==1){var O=Z-Math.floor(w.getUniform()*H);return new this(O,J+1,O+H-1,J+P,Z,J)}if(U==-1){var j=Z-Math.floor(w.getUniform()*H);return new this(j,J-P,j+H-1,J-1,Z,J)}throw new Error("dx or dy must be 1 or -1")},G.createRandomCenter=function K(Z,J,V){var U=V.roomWidth[0],$=V.roomWidth[1],Y=w.getUniformInt(U,$);U=V.roomHeight[0],$=V.roomHeight[1];var L=w.getUniformInt(U,$),H=Z-Math.floor(w.getUniform()*Y),P=J-Math.floor(w.getUniform()*L),W=H+Y-1,D=P+L-1;return new this(H,P,W,D)},G.createRandom=function K(Z,J,V){var U=V.roomWidth[0],$=V.roomWidth[1],Y=w.getUniformInt(U,$);U=V.roomHeight[0],$=V.roomHeight[1];var L=w.getUniformInt(U,$),H=Z-Y-1,P=J-L-1,W=1+Math.floor(w.getUniform()*H),D=1+Math.floor(w.getUniform()*P),O=W+Y-1,j=D+L-1;return new this(W,D,O,j)};var z=G.prototype;return z.addDoor=function K(Z,J){return this._doors[Z+","+J]=1,this},z.getDoors=function K(Z){for(var J in this._doors){var V=J.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},z.clearDoors=function K(){return this._doors={},this},z.addDoors=function K(Z){var J=this._x1-1,V=this._x2+1,U=this._y1-1,$=this._y2+1;for(var Y=J;Y<=V;Y++)for(var L=U;L<=$;L++){if(Y!=J&&Y!=V&&L!=U&&L!=$)continue;if(Z(Y,L))continue;this.addDoor(Y,L)}return this},z.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},z.isValid=function K(Z,J){var V=this._x1-1,U=this._x2+1,$=this._y1-1,Y=this._y2+1;for(var L=V;L<=U;L++)for(var H=$;H<=Y;H++)if(L==V||L==U||H==$||H==Y){if(!Z(L,H))return!1}else if(!J(L,H))return!1;return!0},z.create=function K(Z){var J=this._x1-1,V=this._x2+1,U=this._y1-1,$=this._y2+1,Y=0;for(var L=J;L<=V;L++)for(var H=U;H<=$;H++){if(L+","+H in this._doors)Y=2;else if(L==J||L==V||H==U||H==$)Y=1;else Y=0;Z(L,H,Y)}},z.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},z.getLeft=function K(){return this._x1},z.getRight=function K(){return this._x2},z.getTop=function K(){return this._y1},z.getBottom=function K(){return this._y2},G}(p6),j6=function(X){K0(G,X);function G(K,Z,J,V){var U=X.call(this)||this;return U._startX=K,U._startY=Z,U._endX=J,U._endY=V,U._endsWithAWall=!0,U}G.createRandomAt=function K(Z,J,V,U,$){var Y=$.corridorLength[0],L=$.corridorLength[1],H=w.getUniformInt(Y,L);return new this(Z,J,Z+V*H,J+U*H)};var z=G.prototype;return z.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},z.isValid=function K(Z,J){var V=this._startX,U=this._startY,$=this._endX-V,Y=this._endY-U,L=1+Math.max(Math.abs($),Math.abs(Y));if($)$=$/Math.abs($);if(Y)Y=Y/Math.abs(Y);var H=Y,P=-$,W=!0;for(var D=0;D<L;D++){var O=V+D*$,j=U+D*Y;if(!J(O,j))W=!1;if(!Z(O+H,j+P))W=!1;if(!Z(O-H,j-P))W=!1;if(!W){L=D,this._endX=O-$,this._endY=j-Y;break}}if(L==0)return!1;if(L==1&&Z(this._endX+$,this._endY+Y))return!1;var I=!Z(this._endX+$+H,this._endY+Y+P),u=!Z(this._endX+$-H,this._endY+Y-P);if(this._endsWithAWall=Z(this._endX+$,this._endY+Y),(I||u)&&this._endsWithAWall)return!1;return!0},z.create=function K(Z){var J=this._startX,V=this._startY,U=this._endX-J,$=this._endY-V,Y=1+Math.max(Math.abs(U),Math.abs($));if(U)U=U/Math.abs(U);if($)$=$/Math.abs($);for(var L=0;L<Y;L++){var H=J+L*U,P=V+L*$;Z(H,P,0)}return!0},z.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var J=this._startX,V=this._startY,U=this._endX-J,$=this._endY-V;if(U)U=U/Math.abs(U);if($)$=$/Math.abs($);var Y=$,L=-U;Z(this._endX+U,this._endY+$),Z(this._endX+Y,this._endY+L),Z(this._endX-Y,this._endY-L)},G}(p6),UZ=function(X){K0(G,X);function G(K,Z,J){var V=X.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,J),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(w0(w0(V))),V._canBeDugCallback=V._canBeDugCallback.bind(w0(w0(V))),V._isWallCallback=V._isWallCallback.bind(w0(w0(V))),V}var z=G.prototype;return z.create=function K(Z){var J=Date.now();while(!0){var V=Date.now();if(V-J>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var U=0;U<this._width;U++)for(var $=0;$<this._height;$++)Z(U,$,this._map[U][$]);return this},z._generateRooms=function K(){var Z=this._width-2,J=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*J)>this._options.roomDugPercentage)break;while(V)},z._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var J=e0.createRandom(this._width,this._height,this._options);if(!J.isValid(this._isWallCallback,this._canBeDugCallback))continue;return J.create(this._digCallback),this._rooms.push(J),J}return null},z._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var J=0;J<this._rooms.length;J++){var V=this._rooms[J];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=w.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var U=w.getItem(this._connected);if(!U)break;var $=this._closestRoom(this._unconnected,U);if(!$)break;var Y=this._closestRoom(this._connected,$);if(!Y)break;var L=this._connectRooms($,Y);if(!L)break;if(!this._unconnected.length)return!0}}return!1},z._closestRoom=function K(Z,J){var V=1/0,U=J.getCenter(),$=null;for(var Y=0;Y<Z.length;Y++){var L=Z[Y],H=L.getCenter(),P=H[0]-U[0],W=H[1]-U[1],D=P*P+W*W;if(D<V)V=D,$=L}return $},z._connectRooms=function K(Z,J){var V=Z.getCenter(),U=J.getCenter(),$=U[0]-V[0],Y=U[1]-V[1],L,H,P,W,D,O,j;if(Math.abs($)<Math.abs(Y))P=Y>0?2:0,W=(P+2)%4,D=J.getLeft(),O=J.getRight(),j=0;else P=$>0?1:3,W=(P+2)%4,D=J.getTop(),O=J.getBottom(),j=1;if(L=this._placeInWall(Z,P),!L)return!1;if(L[j]>=D&&L[j]<=O){H=L.slice();var I=0;switch(W){case 0:I=J.getTop()-1;break;case 1:I=J.getRight()+1;break;case 2:I=J.getBottom()+1;break;case 3:I=J.getLeft()-1;break}H[(j+1)%2]=I,this._digLine([L,H])}else if(L[j]<D-1||L[j]>O+1){var u=L[j]-U[j],m=0;switch(W){case 0:case 1:m=u<0?3:1;break;case 2:case 3:m=u<0?1:3;break}if(W=(W+m)%4,H=this._placeInWall(J,W),!H)return!1;var p=[0,0];p[j]=L[j];var Z0=(j+1)%2;p[Z0]=H[Z0],this._digLine([L,p,H])}else{var r=(j+1)%2;if(H=this._placeInWall(J,W),!H)return!1;var U0=Math.round((H[r]+L[r])/2),Y0=[0,0],j0=[0,0];Y0[j]=L[j],Y0[r]=U0,j0[j]=H[j],j0[r]=U0,this._digLine([L,Y0,j0,H])}if(Z.addDoor(L[0],L[1]),J.addDoor(H[0],H[1]),j=this._unconnected.indexOf(Z),j!=-1)this._unconnected.splice(j,1),this._connected.push(Z);if(j=this._unconnected.indexOf(J),j!=-1)this._unconnected.splice(j,1),this._connected.push(J);return!0},z._placeInWall=function K(Z,J){var V=[0,0],U=[0,0],$=0;switch(J){case 0:U=[1,0],V=[Z.getLeft(),Z.getTop()-1],$=Z.getRight()-Z.getLeft()+1;break;case 1:U=[0,1],V=[Z.getRight()+1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break;case 2:U=[1,0],V=[Z.getLeft(),Z.getBottom()+1],$=Z.getRight()-Z.getLeft()+1;break;case 3:U=[0,1],V=[Z.getLeft()-1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break}var Y=[],L=-2;for(var H=0;H<$;H++){var P=V[0]+H*U[0],W=V[1]+H*U[1];Y.push(null);var D=this._map[P][W]==1;if(D){if(L!=H-1)Y[H]=[P,W]}else if(L=H,H)Y[H-1]=null}for(var O=Y.length-1;O>=0;O--)if(!Y[O])Y.splice(O,1);return Y.length?w.getItem(Y):null},z._digLine=function K(Z){for(var J=1;J<Z.length;J++){var V=Z[J-1],U=Z[J],$=new j6(V[0],V[1],U[0],U[1]);$.create(this._digCallback),this._corridors.push($)}},z._digCallback=function K(Z,J,V){if(this._map[Z][J]=V,V==0)this._dug++},z._isWallCallback=function K(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},z._canBeDugCallback=function K(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},G}(y6),qZ=function(X){K0(G,X);function G(K,Z,J){var V;if(J===void 0)J={};return V=X.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(J),V._dirs=z0[V._options.topology],V._map=V._fillMap(0),V}var z=G.prototype;return z.randomize=function K(Z){for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)this._map[J][V]=w.getUniform()<Z?1:0;return this},z.setOptions=function K(Z){Object.assign(this._options,Z)},z.set=function K(Z,J,V){this._map[Z][J]=V},z.create=function K(Z){var J=this._fillMap(0),V=this._options.born,U=this._options.survive;for(var $=0;$<this._height;$++){var Y=1,L=0;if(this._options.topology==6)Y=2,L=$%2;for(var H=L;H<this._width;H+=Y){var P=this._map[H][$],W=this._getNeighbors(H,$);if(P&&U.indexOf(W)!=-1)J[H][$]=1;else if(!P&&V.indexOf(W)!=-1)J[H][$]=1}}this._map=J,Z&&this._serviceCallback(Z)},z._serviceCallback=function K(Z){for(var J=0;J<this._height;J++){var V=1,U=0;if(this._options.topology==6)V=2,U=J%2;for(var $=U;$<this._width;$+=V)Z($,J,this._map[$][J])}},z._getNeighbors=function K(Z,J){var V=0;for(var U=0;U<this._dirs.length;U++){var $=this._dirs[U],Y=Z+$[0],L=J+$[1];if(Y<0||Y>=this._width||L<0||L>=this._height)continue;V+=this._map[Y][L]==1?1:0}return V},z.connect=function K(Z,J,V){if(!J)J=0;var U=[],$={},Y=1,L=[0,0];if(this._options.topology==6)Y=2,L=[0,1];for(var H=0;H<this._height;H++)for(var P=L[H%2];P<this._width;P+=Y)if(this._freeSpace(P,H,J)){var W=[P,H];$[this._pointKey(W)]=W,U.push([P,H])}var D=U[w.getUniformInt(0,U.length-1)],O=this._pointKey(D),j={};j[O]=D,delete $[O],this._findConnected(j,$,[D],!1,J);while(Object.keys($).length>0){var I=this._getFromTo(j,$),u=I[0],m=I[1],p={};p[this._pointKey(u)]=u,this._findConnected(p,$,[u],!0,J);var Z0=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;Z0.call(this,m,u,j,$,J,V);for(var r in p){var U0=p[r];this._map[U0[0]][U0[1]]=J,j[r]=U0,delete $[r]}}Z&&this._serviceCallback(Z)},z._getFromTo=function K(Z,J){var V=[0,0],U=[0,0],$,Y=Object.keys(Z),L=Object.keys(J);for(var H=0;H<5;H++){if(Y.length<L.length){var P=Y;U=Z[P[w.getUniformInt(0,P.length-1)]],V=this._getClosest(U,J)}else{var W=L;V=J[W[w.getUniformInt(0,W.length-1)]],U=this._getClosest(V,Z)}if($=(V[0]-U[0])*(V[0]-U[0])+(V[1]-U[1])*(V[1]-U[1]),$<64)break}return[V,U]},z._getClosest=function K(Z,J){var V=null,U=null;for(var $ in J){var Y=J[$],L=(Y[0]-Z[0])*(Y[0]-Z[0])+(Y[1]-Z[1])*(Y[1]-Z[1]);if(U==null||L<U)U=L,V=Y}return V},z._findConnected=function K(Z,J,V,U,$){while(V.length>0){var Y=V.splice(0,1)[0],L=void 0;if(this._options.topology==6)L=[[Y[0]+2,Y[1]],[Y[0]+1,Y[1]-1],[Y[0]-1,Y[1]-1],[Y[0]-2,Y[1]],[Y[0]-1,Y[1]+1],[Y[0]+1,Y[1]+1]];else L=[[Y[0]+1,Y[1]],[Y[0]-1,Y[1]],[Y[0],Y[1]+1],[Y[0],Y[1]-1]];for(var H=0;H<L.length;H++){var P=this._pointKey(L[H]);if(Z[P]==null&&this._freeSpace(L[H][0],L[H][1],$)){if(Z[P]=L[H],!U)delete J[P];V.push(L[H])}}}},z._tunnelToConnected=function K(Z,J,V,U,$,Y){var L,H;if(J[0]<Z[0])L=J,H=Z;else L=Z,H=J;for(var P=L[0];P<=H[0];P++){this._map[P][L[1]]=$;var W=[P,L[1]],D=this._pointKey(W);V[D]=W,delete U[D]}if(Y&&L[0]<H[0])Y(L,[H[0],L[1]]);var O=H[0];if(J[1]<Z[1])L=J,H=Z;else L=Z,H=J;for(var j=L[1];j<H[1];j++){this._map[O][j]=$;var I=[O,j],u=this._pointKey(I);V[u]=I,delete U[u]}if(Y&&L[1]<H[1])Y([H[0],L[1]],[H[0],H[1]])},z._tunnelToConnected6=function K(Z,J,V,U,$,Y){var L,H;if(J[0]<Z[0])L=J,H=Z;else L=Z,H=J;var P=L[0],W=L[1];while(!(P==H[0]&&W==H[1])){var D=2;if(W<H[1])W++,D=1;else if(W>H[1])W--,D=1;if(P<H[0])P+=D;else if(P>H[0])P-=D;else if(H[1]%2)P-=D;else P+=D;this._map[P][W]=$;var O=[P,W],j=this._pointKey(O);V[j]=O,delete U[j]}if(Y)Y(J,Z)},z._freeSpace=function K(Z,J,V){return Z>=0&&Z<this._width&&J>=0&&J<this._height&&this._map[Z][J]==V},z._pointKey=function K(Z){return Z[0]+"."+Z[1]},G}(b0),$Z={room:e0,corridor:j6},zZ=function(X){K0(G,X);function G(K,Z,J){var V;if(J===void 0)J={};return V=X.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},J),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(w0(w0(V))),V._canBeDugCallback=V._canBeDugCallback.bind(w0(w0(V))),V._isWallCallback=V._isWallCallback.bind(w0(w0(V))),V._priorityWallCallback=V._priorityWallCallback.bind(w0(w0(V))),V}var z=G.prototype;return z.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var J=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),U;do{U=0;var $=Date.now();if($-V>this._options.timeLimit)break;var Y=this._findWall();if(!Y)break;var L=Y.split(","),H=parseInt(L[0]),P=parseInt(L[1]),W=this._getDiggingDirection(H,P);if(!W)continue;var D=0;do if(D++,this._tryFeature(H,P,W[0],W[1])){this._removeSurroundingWalls(H,P),this._removeSurroundingWalls(H-W[0],P-W[1]);break}while(D<this._featureAttempts);for(var O in this._walls)if(this._walls[O]>1)U++}while(this._dug/J<this._options.dugPercentage||U);if(this._addDoors(),Z)for(var j=0;j<this._width;j++)for(var I=0;I<this._height;I++)Z(j,I,this._map[j][I]);return this._walls={},this._map=[],this},z._digCallback=function K(Z,J,V){if(V==0||V==2)this._map[Z][J]=0,this._dug++;else this._walls[Z+","+J]=1},z._isWallCallback=function K(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},z._canBeDugCallback=function K(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},z._priorityWallCallback=function K(Z,J){this._walls[Z+","+J]=2},z._firstRoom=function K(){var Z=Math.floor(this._width/2),J=Math.floor(this._height/2),V=e0.createRandomCenter(Z,J,this._options);this._rooms.push(V),V.create(this._digCallback)},z._findWall=function K(){var Z=[],J=[];for(var V in this._walls){var U=this._walls[V];if(U==2)J.push(V);else Z.push(V)}var $=J.length?J:Z;if(!$.length)return null;var Y=w.getItem($.sort());return delete this._walls[Y],Y},z._tryFeature=function K(Z,J,V,U){var $=w.getWeightedValue(this._features),Y=$Z[$],L=Y.createRandomAt(Z,J,V,U,this._options);if(!L.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(L.create(this._digCallback),L instanceof e0)this._rooms.push(L);if(L instanceof j6)L.createPriorityWalls(this._priorityWallCallback),this._corridors.push(L);return!0},z._removeSurroundingWalls=function K(Z,J){var V=z0[4];for(var U=0;U<V.length;U++){var $=V[U],Y=Z+$[0],L=J+$[1];delete this._walls[Y+","+L],Y=Z+2*$[0],L=J+2*$[1],delete this._walls[Y+","+L]}},z._getDiggingDirection=function K(Z,J){if(Z<=0||J<=0||Z>=this._width-1||J>=this._height-1)return null;var V=null,U=z0[4];for(var $=0;$<U.length;$++){var Y=U[$],L=Z+Y[0],H=J+Y[1];if(!this._map[L][H]){if(V)return null;V=Y}}if(!V)return null;return[-V[0],-V[1]]},z._addDoors=function K(){var Z=this._map;function J($,Y){return Z[$][Y]==1}for(var V=0;V<this._rooms.length;V++){var U=this._rooms[V];U.clearDoors(),U.addDoors(J)}},G}(y6);function c6(X,G,z){z[G[X+1]]=z[X],G[z[X]]=G[X+1],z[X]=X+1,G[X+1]=X}function d6(X,G,z){z[G[X]]=z[X],G[z[X]]=G[X],z[X]=X,G[X]=X}var BZ=function(X){K0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.create=function K(Z){var J=this._fillMap(1),V=Math.ceil((this._width-2)/2),U=0.375,$=[],Y=[];for(var L=0;L<V;L++)$.push(L),Y.push(L);$.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var P=0;P<V;P++){var W=2*P+1,D=H;if(J[W][D]=0,P!=$[P+1]&&w.getUniform()>U)c6(P,$,Y),J[W+1][D]=0;if(P!=$[P]&&w.getUniform()>U)d6(P,$,Y);else J[W][D+1]=0}for(var O=0;O<V;O++){var j=2*O+1,I=H;if(J[j][I]=0,O!=$[O+1]&&(O==$[O]||w.getUniform()>U))c6(O,$,Y),J[j+1][I]=0;d6(O,$,Y)}for(var u=0;u<this._width;u++)for(var m=0;m<this._height;m++)Z(u,m,J[u][m]);return this},G}(b0),XZ=function(X){K0(G,X);function G(){var K=X.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var z=G.prototype;return z.create=function K(Z){var J=this._width,V=this._height;this._map=[];for(var U=0;U<J;U++){this._map.push([]);for(var $=0;$<V;$++){var Y=U==0||$==0||U+1==J||$+1==V;this._map[U].push(Y?1:0)}}this._stack=[[1,1,J-2,V-2]],this._process();for(var L=0;L<J;L++)for(var H=0;H<V;H++)Z(L,H,this._map[L][H]);return this._map=[],this},z._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},z._partitionRoom=function K(Z){var J=[],V=[];for(var U=Z[0]+1;U<Z[2];U++){var $=this._map[U][Z[1]-1],Y=this._map[U][Z[3]+1];if($&&Y&&!(U%2))J.push(U)}for(var L=Z[1]+1;L<Z[3];L++){var H=this._map[Z[0]-1][L],P=this._map[Z[2]+1][L];if(H&&P&&!(L%2))V.push(L)}if(!J.length||!V.length)return;var W=w.getItem(J),D=w.getItem(V);this._map[W][D]=1;var O=[],j=[];O.push(j);for(var I=Z[0];I<W;I++)if(this._map[I][D]=1,I%2)j.push([I,D]);j=[],O.push(j);for(var u=W+1;u<=Z[2];u++)if(this._map[u][D]=1,u%2)j.push([u,D]);j=[],O.push(j);for(var m=Z[1];m<D;m++)if(this._map[W][m]=1,m%2)j.push([W,m]);j=[],O.push(j);for(var p=D+1;p<=Z[3];p++)if(this._map[W][p]=1,p%2)j.push([W,p]);var Z0=w.getItem(O);for(var r=0;r<O.length;r++){var U0=O[r];if(U0==Z0)continue;var Y0=w.getItem(U0);this._map[Y0[0]][Y0[1]]=0}this._stack.push([Z[0],Z[1],W-1,D-1]),this._stack.push([W+1,Z[1],Z[2],D-1]),this._stack.push([Z[0],D+1,W-1,Z[3]]),this._stack.push([W+1,D+1,Z[2],Z[3]])},G}(b0),GZ=function(X){K0(G,X);function G(K,Z,J){var V;if(J===void 0)J=0;return V=X.call(this,K,Z)||this,V._regularity=J,V._map=[],V}var z=G.prototype;return z.create=function K(Z){var J=this._width,V=this._height,U=this._fillMap(1);J-=J%2?1:2,V-=V%2?1:2;var $=0,Y=0,L=0,H=0,P=0,W=!1,D=[[0,0],[0,0],[0,0],[0,0]];do{if($=1+2*Math.floor(w.getUniform()*(J-1)/2),Y=1+2*Math.floor(w.getUniform()*(V-1)/2),!P)U[$][Y]=0;if(!U[$][Y]){this._randomize(D);do{if(Math.floor(w.getUniform()*(this._regularity+1))==0)this._randomize(D);W=!0;for(var O=0;O<4;O++)if(L=$+D[O][0]*2,H=Y+D[O][1]*2,this._isFree(U,L,H,J,V)){U[L][H]=0,U[$+D[O][0]][Y+D[O][1]]=0,$=L,Y=H,W=!1,P++;break}}while(!W)}}while(P+1<J*V/4);for(var j=0;j<this._width;j++)for(var I=0;I<this._height;I++)Z(j,I,U[j][I]);return this._map=[],this},z._randomize=function K(Z){for(var J=0;J<4;J++)Z[J][0]=0,Z[J][1]=0;switch(Math.floor(w.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},z._isFree=function K(Z,J,V,U,$){if(J<1||V<1||J>=U||V>=$)return!1;return Z[J][V]},G}(b0),LZ=function(X){K0(G,X);function G(K,Z,J){var V=X.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],J=Object.assign({cellWidth:3,cellHeight:3},J),!J.hasOwnProperty("roomWidth"))J.roomWidth=V._calculateRoomSize(V._width,J.cellWidth);if(!J.hasOwnProperty("roomHeight"))J.roomHeight=V._calculateRoomSize(V._height,J.cellHeight);return V._options=J,V}var z=G.prototype;return z.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)Z(J,V,this.map[J][V]);return this},z._calculateRoomSize=function K(Z,J){var V=Math.floor(Z/J*0.8),U=Math.floor(Z/J*0.25);if(U<2)U=2;if(V<2)V=2;return[U,V]},z._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var J=0;J<this._options.cellHeight;J++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:J})}},z._connectRooms=function K(){var Z=w.getUniformInt(0,this._options.cellWidth-1),J=w.getUniformInt(0,this._options.cellHeight-1),V,U,$,Y=!1,L,H,P;do{P=[0,2,4,6],P=w.shuffle(P);do{if(Y=!1,V=P.pop(),U=Z+z0[8][V][0],$=J+z0[8][V][1],U<0||U>=this._options.cellWidth)continue;if($<0||$>=this._options.cellHeight)continue;if(L=this.rooms[Z][J],L.connections.length>0){if(L.connections[0][0]==U&&L.connections[0][1]==$)break}if(H=this.rooms[U][$],H.connections.length==0)H.connections.push([Z,J]),this.connectedCells.push([U,$]),Z=U,J=$,Y=!0}while(P.length>0&&Y==!1)}while(P.length>0)},z._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,J=this._options.cellHeight;this.connectedCells=w.shuffle(this.connectedCells);var V,U,$;for(var Y=0;Y<this._options.cellWidth;Y++)for(var L=0;L<this._options.cellHeight;L++)if(V=this.rooms[Y][L],V.connections.length==0){var H=[0,2,4,6];H=w.shuffle(H),$=!1;do{var P=H.pop(),W=Y+z0[8][P][0],D=L+z0[8][P][1];if(W<0||W>=Z||D<0||D>=J)continue;if(U=this.rooms[W][D],$=!0,U.connections.length==0)break;for(var O=0;O<U.connections.length;O++)if(U.connections[O][0]==Y&&U.connections[O][1]==L){$=!1;break}if($)break}while(H.length);if($)V.connections.push([U.cellx,U.celly]);else console.log("-- Unable to connect room.")}},z._createRandomRoomConnections=function K(){},z._createRooms=function K(){var Z=this._width,J=this._height,V=this._options.cellWidth,U=this._options.cellHeight,$=Math.floor(this._width/V),Y=Math.floor(this._height/U),L,H,P=this._options.roomWidth,W=this._options.roomHeight,D,O,j;for(var I=0;I<V;I++)for(var u=0;u<U;u++){if(D=$*I,O=Y*u,D==0)D=1;if(O==0)O=1;if(L=w.getUniformInt(P[0],P[1]),H=w.getUniformInt(W[0],W[1]),u>0){j=this.rooms[I][u-1];while(O-(j.y+j.height)<3)O++}if(I>0){j=this.rooms[I-1][u];while(D-(j.x+j.width)<3)D++}var m=Math.round(w.getUniformInt(0,$-L)/2),p=Math.round(w.getUniformInt(0,Y-H)/2);while(D+m+L>=Z)if(m)m--;else L--;while(O+p+H>=J)if(p)p--;else H--;D=D+m,O=O+p,this.rooms[I][u].x=D,this.rooms[I][u].y=O,this.rooms[I][u].width=L,this.rooms[I][u].height=H;for(var Z0=D;Z0<D+L;Z0++)for(var r=O;r<O+H;r++)this.map[Z0][r]=0}},z._getWallPosition=function K(Z,J){var V,U,$;if(J==1||J==3){if(V=w.getUniformInt(Z.x+1,Z.x+Z.width-2),J==1)U=Z.y-2,$=U+1;else U=Z.y+Z.height+1,$=U-1;this.map[V][$]=0}else{if(U=w.getUniformInt(Z.y+1,Z.y+Z.height-2),J==2)V=Z.x+Z.width+1,$=V-1;else V=Z.x-2,$=V+1;this.map[$][U]=0}return[V,U]},z._drawCorridor=function K(Z,J){var V=J[0]-Z[0],U=J[1]-Z[1],$=Z[0],Y=Z[1],L,H,P,W,D=[],O=Math.abs(V),j=Math.abs(U),I=w.getUniform(),u=I,m=1-I;if(H=V>0?2:6,P=U>0?4:0,O<j)L=Math.ceil(j*u),D.push([P,L]),D.push([H,O]),L=Math.floor(j*m),D.push([P,L]);else L=Math.ceil(O*u),D.push([H,L]),D.push([P,j]),L=Math.floor(O*m),D.push([H,L]);this.map[$][Y]=0;while(D.length>0){W=D.pop();while(W[1]>0)$+=z0[8][W[0]][0],Y+=z0[8][W[0]][1],this.map[$][Y]=0,W[1]=W[1]-1}},z._createCorridors=function K(){var Z=this._options.cellWidth,J=this._options.cellHeight,V,U,$,Y,L;for(var H=0;H<Z;H++)for(var P=0;P<J;P++){V=this.rooms[H][P];for(var W=0;W<V.connections.length;W++){if(U=V.connections[W],$=this.rooms[U[0]][U[1]],$.cellx>V.cellx)Y=2,L=4;else if($.cellx<V.cellx)Y=4,L=2;else if($.celly>V.celly)Y=3,L=1;else Y=1,L=3;this._drawCorridor(this._getWallPosition(V,Y),this._getWallPosition($,L))}}},G}(b0),YZ={Arena:KZ,Uniform:UZ,Cellular:qZ,Digger:zZ,EllerMaze:BZ,DividedMaze:XZ,IceyMaze:GZ,Rogue:LZ},wZ=function X(){},HZ=0.5*(Math.sqrt(3)-1),d0=(3-Math.sqrt(3))/6,PZ=function(X){K0(G,X);function G(K){var Z;if(K===void 0)K=256;Z=X.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var J=[];for(var V=0;V<K;V++)J.push(V);J=w.shuffle(J),Z._perms=[],Z._indexes=[];for(var U=0;U<2*K;U++)Z._perms.push(J[U%K]),Z._indexes.push(Z._perms[U]%Z._gradients.length);return Z}var z=G.prototype;return z.get=function K(Z,J){var V=this._perms,U=this._indexes,$=V.length/2,Y=0,L=0,H=0,P,W=(Z+J)*HZ,D=Math.floor(Z+W),O=Math.floor(J+W),j=(D+O)*d0,I=D-j,u=O-j,m=Z-I,p=J-u,Z0,r;if(m>p)Z0=1,r=0;else Z0=0,r=1;var U0=m-Z0+d0,Y0=p-r+d0,j0=m-1+2*d0,E6=p-1+2*d0,C6=C(D,$),A6=C(O,$),l0=0.5-m*m-p*p;if(l0>=0){l0*=l0,P=U[C6+V[A6]];var n6=this._gradients[P];Y=l0*l0*(n6[0]*m+n6[1]*p)}var n0=0.5-U0*U0-Y0*Y0;if(n0>=0){n0*=n0,P=U[C6+Z0+V[A6+r]];var r6=this._gradients[P];L=n0*n0*(r6[0]*U0+r6[1]*Y0)}var r0=0.5-j0*j0-E6*E6;if(r0>=0){r0*=r0,P=U[C6+1+V[A6+1]];var s6=this._gradients[P];H=r0*r0*(s6[0]*j0+s6[1]*E6)}return 70*(Y+L+H)},G}(wZ),FZ={Simplex:PZ},l6=function(){function X(z,K,Z,J){if(J===void 0)J={};if(this._toX=z,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},J),this._dirs=z0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var G=X.prototype;return G._getNeighbors=function z(K,Z){var J=[];for(var V=0;V<this._dirs.length;V++){var U=this._dirs[V],$=K+U[0],Y=Z+U[1];if(!this._passableCallback($,Y))continue;J.push([$,Y])}return J},X}(),DZ=function(X){K0(G,X);function G(K,Z,J,V){var U=X.call(this,K,Z,J,V)||this;return U._computed={},U._todo=[],U._add(K,Z,null),U}var z=G.prototype;return z.compute=function K(Z,J,V){var U=Z+","+J;if(!(U in this._computed))this._compute(Z,J);if(!(U in this._computed))return;var $=this._computed[U];while($)V($.x,$.y),$=$.prev},z._compute=function K(Z,J){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==J)return;var U=this._getNeighbors(V.x,V.y);for(var $=0;$<U.length;$++){var Y=U[$],L=Y[0],H=Y[1],P=L+","+H;if(P in this._computed)continue;this._add(L,H,V)}}},z._add=function K(Z,J,V){var U={x:Z,y:J,prev:V};this._computed[Z+","+J]=U,this._todo.push(U)},G}(l6),WZ=function(X){K0(G,X);function G(K,Z,J,V){var U;if(V===void 0)V={};return U=X.call(this,K,Z,J,V)||this,U._todo=[],U._done={},U}var z=G.prototype;return z.compute=function K(Z,J,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=J,this._add(this._toX,this._toY,null);while(this._todo.length){var U=this._todo.shift(),$=U.x+","+U.y;if($ in this._done)continue;if(this._done[$]=U,U.x==Z&&U.y==J)break;var Y=this._getNeighbors(U.x,U.y);for(var L=0;L<Y.length;L++){var H=Y[L],P=H[0],W=H[1],D=P+","+W;if(D in this._done)continue;this._add(P,W,U)}}var O=this._done[Z+","+J];if(!O)return;while(O)V(O.x,O.y),O=O.prev},z._add=function K(Z,J,V){var U=this._distance(Z,J),$={x:Z,y:J,prev:V,g:V?V.g+1:0,h:U},Y=$.g+$.h;for(var L=0;L<this._todo.length;L++){var H=this._todo[L],P=H.g+H.h;if(Y<P||Y==P&&U<H.h){this._todo.splice(L,0,$);return}}this._todo.push($)},z._distance=function K(Z,J){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(J-this._fromY);case 6:var V=Math.abs(Z-this._fromX),U=Math.abs(J-this._fromY);return U+Math.max(0,(V-U)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(J-this._fromY))}},G}(l6),MZ={Dijkstra:DZ,AStar:WZ},OZ=function(){function X(z){this._scheduler=z,this._lock=1}var G=X.prototype;return G.start=function z(){return this.unlock()},G.lock=function z(){return this._lock++,this},G.unlock=function z(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},X}(),RZ=function(){function X(z,K){if(K===void 0)K={};this._reflectivityCallback=z,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var G=X.prototype;return G.setOptions=function z(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},G.setFOV=function z(K){return this._fov=K,this._fovCache={},this},G.setLight=function z(K,Z,J){var V=K+","+Z;if(J)this._lights[V]=typeof J=="string"?y(J):J;else delete this._lights[V];return this},G.clearLights=function z(){this._lights={}},G.reset=function z(){return this._reflectivityCache={},this._fovCache={},this},G.compute=function z(K){var Z={},J={},V={};for(var U in this._lights){var $=this._lights[U];J[U]=[0,0,0],s(J[U],$)}for(var Y=0;Y<this._options.passes;Y++){if(this._emitLight(J,V,Z),Y+1==this._options.passes)continue;J=this._computeEmitters(V,Z)}for(var L in V){var H=L.split(","),P=parseInt(H[0]),W=parseInt(H[1]);K(P,W,V[L])}return this},G._emitLight=function z(K,Z,J){for(var V in K){var U=V.split(","),$=parseInt(U[0]),Y=parseInt(U[1]);this._emitLightFromCell($,Y,K[V],Z),J[V]=1}return this},G._computeEmitters=function z(K,Z){var J={};for(var V in K){if(V in Z)continue;var U=K[V],$=void 0;if(V in this._reflectivityCache)$=this._reflectivityCache[V];else{var Y=V.split(","),L=parseInt(Y[0]),H=parseInt(Y[1]);$=this._reflectivityCallback(L,H),this._reflectivityCache[V]=$}if($==0)continue;var P=[0,0,0],W=0;for(var D=0;D<3;D++){var O=Math.round(U[D]*$);P[D]=O,W+=O}if(W>this._options.emissionThreshold)J[V]=P}return J},G._emitLightFromCell=function z(K,Z,J,V){var U=K+","+Z,$;if(U in this._fovCache)$=this._fovCache[U];else $=this._updateFOV(K,Z);for(var Y in $){var L=$[Y],H=void 0;if(Y in V)H=V[Y];else H=[0,0,0],V[Y]=H;for(var P=0;P<3;P++)H[P]+=Math.round(J[P]*L)}return this},G._updateFOV=function z(K,Z){var J=K+","+Z,V={};this._fovCache[J]=V;var U=this._options.range;function $(Y,L,H,P){var W=Y+","+L,D=P*(1-H/U);if(D==0)return;V[W]=D}return this._fov.compute(K,Z,U,$.bind(this)),V},X}(),jZ=l,EZ=n,CZ=d1;Q.Util=jZ,Q.Color=EZ,Q.Text=CZ,Q.RNG=w,Q.Display=s1,Q.StringGenerator=o1,Q.EventQueue=m6,Q.Scheduler=e1,Q.FOV=VZ,Q.Map=YZ,Q.Noise=FZ,Q.Path=MZ,Q.Engine=OZ,Q.Lighting=RZ,Q.DEFAULT_WIDTH=W6,Q.DEFAULT_HEIGHT=M6,Q.DIRS=z0,Q.KEYS=l1,Object.defineProperty(Q,"__esModule",{value:!0})})});var vZ=typeof window!=="undefined"?window.innerWidth:0,bZ=typeof window!=="undefined"?window.innerHeight:0;var J0={cameraWidth:Math.floor(vZ/16),cameraHeight:Math.floor(bZ/16),debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},S6={WIDTH:1024,HEIGHT:1024},G0={width:Math.floor(J0.cameraWidth*(1/J0.zoom)),height:Math.floor(J0.cameraHeight*(1/J0.zoom)),bg:"transparent",fontSize:Math.floor(J0.fontSize*J0.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null};function a6(Q){if(J0.debug)console.log(Q)}var I6=[];class Z6{name;description;energyDelta;constructor(Q,q,B=0){this.name=Q,this.description=q,this.energyDelta=B}}class J6{name;description;constructor(Q,q){this.name=Q,this.description=q}}class M0{key;description;constructor(Q,q){this.key=Q,this.description=q}}class Q6{name;description;constructor(Q,q){this.name=Q,this.description=q}}class O0{name;description;icon;color;energyMax;unlockCondition;constructor(Q,q,B,w=100){this.name=Q,this.description=q,this.icon=B,this.energyMax=w,this.color="white",this.unlockCondition=null}}class m0{name;description;color;constructor(Q,q,B){this.name=Q,this.description=q,this.color=B}}class P0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(Q,q,B,w="cyberyellow",F=0,R=0,C=0,k=0,f=0,S=[]){this.name=Q,this.description=q,this.icon=B,this.color=w,this.energyDelta=F,this.matter=R,this.gold=C,this.damage=k,this.energyCost=f,this.effects=S}}class a{name;description;icon;fg;bg;energyDelta;constructor(Q,q,B=null,w="white",F="black",R=0){this.name=Q,this.description=q,this.icon=B,this.fg=w,this.bg=F,this.energyDelta=R}}var M={actions:{Enter:new Z6("Enter","Enter a portal or plant atmosphere"),Launch:new Z6("Launch","Launch into space",-10),Wait:new Z6("Wait","Wait one turn in place")},ais:{aggrorange:new J6("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new J6("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new J6("guardian","Idles at a position and only fights back if engaged")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M0("N","Move/interact/combat north"),E:new M0("E","Move/interact/combat east"),S:new M0("S","Move/interact/combat south"),W:new M0("W","Move/interact/combat west"),A:new M0("A","Primary action, confirm"),B:new M0("B","Take a break, cancel"),"1":new M0("1","Secondary action, first quick slot"),"2":new M0("2","Tertiary action, second quick slot"),M:new M0("M","Menu")},effects:{RockCrusher:new Q6("Rock Crusher","Mines rock"),WallCrusher:new Q6("Wall Crusher","Tears down weak walls"),WaterShield:new Q6("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new O0("movableboulder","A movable rock","o",2),movablebox:new O0("movablebox","A movable box","x",2),Spirit:new O0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new O0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new O0("WorkBot","Basic factory worker","B"),Cleaner:new O0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new O0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Valkyrie:new O0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new O0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200)},factions:{Equipment:new m0("Equipment","For boxes etc.","gray"),Spirits:new m0("Spirits","Default player faction","white"),Pyrates:new m0("Pyrates","Default enemy faction","cybermagenta"),Gaia:new m0("Gaia","For rocks etc.","brown"),Guardians:new m0("Guardians","Bot station guardians","cybercyan")},items:{battery:new P0("Battery","Increases maximum energy","b","cyberyellow",10),energy:new P0("Energy","Energy pack","e","cyberyellow",10),gold:new P0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new P0("Goo","A minor matter source","goo","gray",0,1),junk:new P0("Junk","Broken bot","%","gray",0,1),matter:new P0("Matter","A pile of stuff","m","gray",0,100),broom:new P0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),hammer:new P0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new P0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),shocker:new P0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1),trident:new P0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new P0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1)},maps:{bot_bar:`!
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
`,botmos_hull_selection_tiles:`!
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
##_____Bo####_____##
#..................#
#..................#
#..................#
#..................#
#..................]
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
####################
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:J0.showGrid?new a("void","Just nothing here",".","gray"):new a("void","Just nothing here"),voidtrue:new a("voidtrue","Really nothing here and you shouldn't get there ever!","_"),voidhidden:new a("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new a("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),rock:new a("rock","Hidden treasures may await","'","white","gray"),tree:new a("tree","Lots of trees make a forest","t","brown","black"),wall:new a("wall","A strong wall","#","gray","black"),wallstatue:new a("wallstatue","A small statue","s","gray","black"),wallweak:new a("wallweak","A weakened wall","+","gray","black"),chargepad:new a("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new a("movenorth","Moves you north","^^","cyberyellow"),moveeast:new a("moveeast","Moves you east",">>","cyberyellow"),movesouth:new a("movesouth","Moves you south","vv","cyberyellow"),movewest:new a("movewest","Moves you west","<<","cyberyellow"),portal:new a("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new a("portalclosed","Closed gateway to another map","Oc","black","gray"),portalhidden:new a("portalhidden","Hidden gateway to another map","#","gray","black"),portallauncher:new a("portallauncher","Launches into space","O","cyberyellow","gray"),portalstartworkbot:new a("portalstartworkbot","Start playing as a WorkBot","OB","white"),portalstartaerobot:new a("portalstartaerobot","Start playing as a AeroBot","OA","white"),"_portalstart?":new a("_portalstart?","Not unlocked, yet!","O?","white"),spacerock:new a("spacerock","Mountains as seen from space, non-blocking!","'s","white","gray"),spacetree:new a("spacetree","Forest as seen from space","ts","brown","darkgray"),spacewater:new a("spacewater","Water as seen from space, not dangerous!","~s","cybercyan","cyberblue"),spacevoid:new a("spacevoid","Void/ground as seen from space",".s","darkgray","darkgray"),spacevoidstarwhite:new a("spacevoidstarwhite","Space with a white background star",".w","white"),spacevoidstaryellow:new a("spacevoidstaryellow","Space with a yellow background star",".y","cyberyellow"),sun:new a("sun","It's hot, really hot!","§","cyberyellow","cyberyellow",-100),terminal:new a("terminal","A computer terminal","$","cyberyellow"),tv:new a("tv","A big billboard screen","!","black","cyberyellow")}};function F0(Q,q,B,w,F=0,R=0,C={}){let k={id:q,type:B,mapId:w,x:F,y:R,energy:10,energyMax:10,gold:0,matter:0,message:null,options:C};return Q=K6(Q,k,B),Q.entities[k.id]=k,Q}function V6(Q,q){return Q.entities[q]=void 0,delete Q.entities[q],Q.tools[q]=void 0,Q}function k0(Q,q){let B=Object.keys(Q.entities),w=[];for(let F=0;F<B.length;F++){let R=Q.entities[B[F]];if(R.mapId===q)w.push(R)}return w}function i6(Q,q,B,w){let F=k0(Q,q).filter((R)=>R.x===B&&R.y===w);if(F.length>0)return F[0];return null}function K6(Q,q,B){if(q.type=B,q.energy=B.energyMax,q.energyMax=B.energyMax,q.gold=0,q.matter=0,!I0(q))Q.tools[q.id]=void 0;return Q}function t6(Q,q,B){if(q.options.faction===B.options.faction);else{let w=q.id,F=B.id;Q._combatQueue.push({entityId:w,otherEntityId:F})}return Q}function I0(Q){return Q.type===M.entities.movableboulder||Q.type===M.entities.movablebox}function U6(Q,q){let B={A:M.actions.Wait,B:M.actions.Wait};if(!!Q.lastSpacePositionByEntity[q.id]&&q.energy>Math.abs(M.actions.Launch.energyDelta))B.A=M.actions.Launch;let F=Q.maps[q.mapId].getTile(q.x,q.y);if(!!F.options.mapId&&"x"in F.options&&"y"in F.options)B.A=M.actions.Enter;return B}function f6(Q,q,B){let w=Q._eventSubscribers[q];if(w)for(let F=0;F<w.length;F++){let R=w[F];Q=R(Q,B)}return Q}function v6(Q,q,B){if(q in Q._eventSubscribers);else Q._eventSubscribers[q]=[];return Q._eventSubscribers[q].push(B),Q}function u0(Q,q,B,w=0,F=0){let C={id:q6(B,w,F),type:q,mapId:B,x:w,y:F,energy:q.energyDelta,gold:q.gold,matter:q.matter};return Q.items[C.id]=C,Q}function e6(Q,q,B,w=0,F=0){let R=M.items.junk,k={id:q6(B,w,F),type:R,mapId:B,x:w,y:F,energy:R.energyDelta,gold:R.gold,matter:q};return Q.items[k.id]=k,Q}function s0(Q,q,B,w=0,F=0,R,C){let f={id:q6(B,w,F),type:q,mapId:B,x:w,y:F,energy:q.energyDelta,gold:R,matter:C};return Q.items[f.id]=f,Q}function q6(Q,q,B){return"item,"+Q+","+q+","+B}function b6(Q,q){return Q.items[q]=void 0,delete Q.items[q],Q}function $6(Q,q){let B=Object.keys(Q.items),w=[];for(let F=0;F<B.length;F++){let R=Q.items[B[F]];if(R.mapId===q)w.push(R)}return w}function Z1(Q,q,B,w){let F=q6(q,B,w);if(F in Q.items)return Q.items[F];return null}function o0(Q,q){return Q.tools[q]}function J1(Q,q,B){if(I0(q))return Q;if(!uZ(q,B))return Q;if(kZ(B))Q=k6(Q,q.id,B.type);else{if(B.type===M.items.battery)q.energyMax+=B.energy;Q._energyQueue.push({entityId:q.id,energyDelta:B.energy})}return q.gold+=B.gold,q.matter+=B.matter,b6(Q,B.id),Q}function k6(Q,q,B){let w={type:B};return Q.tools[q]=w,Q}function kZ(Q){return Q.type.energyCost<0}function uZ(Q,q){return Q.gold+q.gold>=0&&Q.matter+q.matter>=0}/*!
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
 */var TZ=function(Q){var q={};function B(w){if(q[w])return q[w].exports;var F=q[w]={i:w,l:!1,exports:{}};return Q[w].call(F.exports,F,F.exports,B),F.l=!0,F.exports}return B.m=Q,B.c=q,B.d=function(w,F,R){B.o(w,F)||Object.defineProperty(w,F,{enumerable:!0,get:R})},B.r=function(w){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(w,"__esModule",{value:!0})},B.t=function(w,F){if(1&F&&(w=B(w)),8&F)return w;if(4&F&&typeof w=="object"&&w&&w.__esModule)return w;var R=Object.create(null);if(B.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:w}),2&F&&typeof w!="string")for(var C in w)B.d(R,C,function(k){return w[k]}.bind(null,C));return R},B.n=function(w){var F=w&&w.__esModule?function(){return w.default}:function(){return w};return B.d(F,"a",F),F},B.o=function(w,F){return Object.prototype.hasOwnProperty.call(w,F)},B.p="/bin/",B(B.s=0)}([function(Q,q,B){var w={},F=B(1),R=B(2),C=B(3);Q.exports=w;var k=1;w.js=function(){var f,S,l,g=!1,h={},_={},y={},d={},s=!0,i={},Q0=[],L0=Number.MAX_VALUE,B0=!1;this.setAcceptableTiles=function(v){v instanceof Array?l=v:!isNaN(parseFloat(v))&&isFinite(v)&&(l=[v])},this.enableSync=function(){g=!0},this.disableSync=function(){g=!1},this.enableDiagonals=function(){B0=!0},this.disableDiagonals=function(){B0=!1},this.setGrid=function(v){f=v;for(var N=0;N<f.length;N++)for(var E=0;E<f[0].length;E++)_[f[N][E]]||(_[f[N][E]]=1)},this.setTileCost=function(v,N){_[v]=N},this.setAdditionalPointCost=function(v,N,E){y[N]===void 0&&(y[N]={}),y[N][v]=E},this.removeAdditionalPointCost=function(v,N){y[N]!==void 0&&delete y[N][v]},this.removeAllAdditionalPointCosts=function(){y={}},this.setDirectionalCondition=function(v,N,E){d[N]===void 0&&(d[N]={}),d[N][v]=E},this.removeAllDirectionalConditions=function(){d={}},this.setIterationsPerCalculation=function(v){L0=v},this.avoidAdditionalPoint=function(v,N){h[N]===void 0&&(h[N]={}),h[N][v]=1},this.stopAvoidingAdditionalPoint=function(v,N){h[N]!==void 0&&delete h[N][v]},this.enableCornerCutting=function(){s=!0},this.disableCornerCutting=function(){s=!1},this.stopAvoidingAllAdditionalPoints=function(){h={}},this.findPath=function(v,N,E,n,e){var V0=function(A0){g?e(A0):setTimeout(function(){e(A0)})};if(l===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(f===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(v<0||N<0||E<0||n<0||v>f[0].length-1||N>f.length-1||E>f[0].length-1||n>f.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(v!==E||N!==n){for(var H0=f[n][E],$0=!1,R0=0;R0<l.length;R0++)if(H0===l[R0]){$0=!0;break}if($0!==!1){var X0=new F;X0.openList=new C(function(A0,_0){return A0.bestGuessDistance()-_0.bestGuessDistance()}),X0.isDoneCalculating=!1,X0.nodeHash={},X0.startX=v,X0.startY=N,X0.endX=E,X0.endY=n,X0.callback=V0,X0.openList.push(t(X0,X0.startX,X0.startY,null,1));var c0=k++;return i[c0]=X0,Q0.push(c0),c0}V0(null)}else V0([])},this.cancelPath=function(v){return v in i&&(delete i[v],!0)},this.calculate=function(){if(Q0.length!==0&&f!==void 0&&l!==void 0)for(S=0;S<L0;S++){if(Q0.length===0)return;g&&(S=0);var v=Q0[0],N=i[v];if(N!==void 0)if(N.openList.size()!==0){var E=N.openList.pop();if(N.endX!==E.x||N.endY!==E.y)E.list=0,E.y>0&&A(N,E,0,-1,1*x(E.x,E.y-1)),E.x<f[0].length-1&&A(N,E,1,0,1*x(E.x+1,E.y)),E.y<f.length-1&&A(N,E,0,1,1*x(E.x,E.y+1)),E.x>0&&A(N,E,-1,0,1*x(E.x-1,E.y)),B0&&(E.x>0&&E.y>0&&(s||b(f,l,E.x,E.y-1,E)&&b(f,l,E.x-1,E.y,E))&&A(N,E,-1,-1,1.4*x(E.x-1,E.y-1)),E.x<f[0].length-1&&E.y<f.length-1&&(s||b(f,l,E.x,E.y+1,E)&&b(f,l,E.x+1,E.y,E))&&A(N,E,1,1,1.4*x(E.x+1,E.y+1)),E.x<f[0].length-1&&E.y>0&&(s||b(f,l,E.x,E.y-1,E)&&b(f,l,E.x+1,E.y,E))&&A(N,E,1,-1,1.4*x(E.x+1,E.y-1)),E.x>0&&E.y<f.length-1&&(s||b(f,l,E.x,E.y+1,E)&&b(f,l,E.x-1,E.y,E))&&A(N,E,-1,1,1.4*x(E.x-1,E.y+1)));else{var n=[];n.push({x:E.x,y:E.y});for(var e=E.parent;e!=null;)n.push({x:e.x,y:e.y}),e=e.parent;n.reverse();var V0=n;N.callback(V0),delete i[v],Q0.shift()}}else N.callback(null),delete i[v],Q0.shift();else Q0.shift()}};var A=function(v,N,E,n,e){var V0=N.x+E,H0=N.y+n;if((h[H0]===void 0||h[H0][V0]===void 0)&&b(f,l,V0,H0,N)){var $0=t(v,V0,H0,N,e);$0.list===void 0?($0.list=1,v.openList.push($0)):N.costSoFar+e<$0.costSoFar&&($0.costSoFar=N.costSoFar+e,$0.parent=N,v.openList.updateItem($0))}},b=function(v,N,E,n,e){var V0=d[n]&&d[n][E];if(V0){var H0=T(e.x-E,e.y-n);if(!function(){for(var R0=0;R0<V0.length;R0++)if(V0[R0]===H0)return!0;return!1}())return!1}for(var $0=0;$0<N.length;$0++)if(v[n][E]===N[$0])return!0;return!1},T=function(v,N){if(v===0&&N===-1)return w.TOP;if(v===1&&N===-1)return w.TOP_RIGHT;if(v===1&&N===0)return w.RIGHT;if(v===1&&N===1)return w.BOTTOM_RIGHT;if(v===0&&N===1)return w.BOTTOM;if(v===-1&&N===1)return w.BOTTOM_LEFT;if(v===-1&&N===0)return w.LEFT;if(v===-1&&N===-1)return w.TOP_LEFT;throw new Error("These differences are not valid: "+v+", "+N)},x=function(v,N){return y[N]&&y[N][v]||_[f[N][v]]},t=function(v,N,E,n,e){if(v.nodeHash[E]!==void 0){if(v.nodeHash[E][N]!==void 0)return v.nodeHash[E][N]}else v.nodeHash[E]={};var V0=o(N,E,v.endX,v.endY);if(n!==null)var H0=n.costSoFar+e;else H0=0;var $0=new R(n,N,E,H0,V0);return v.nodeHash[E][N]=$0,$0},o=function(v,N,E,n){var e,V0;return B0?(e=Math.abs(v-E))<(V0=Math.abs(N-n))?1.4*e+V0:1.4*V0+e:(e=Math.abs(v-E))+(V0=Math.abs(N-n))}},w.TOP="TOP",w.TOP_RIGHT="TOP_RIGHT",w.RIGHT="RIGHT",w.BOTTOM_RIGHT="BOTTOM_RIGHT",w.BOTTOM="BOTTOM",w.BOTTOM_LEFT="BOTTOM_LEFT",w.LEFT="LEFT",w.TOP_LEFT="TOP_LEFT"},function(Q,q){Q.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(Q,q){Q.exports=function(B,w,F,R,C){this.parent=B,this.x=w,this.y=F,this.costSoFar=R,this.simpleDistanceToTarget=C,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(Q,q,B){Q.exports=B(4)},function(Q,q,B){var w,F,R;(function(){var C,k,f,S,l,g,h,_,y,d,s,i,Q0,L0,B0;f=Math.floor,d=Math.min,k=function(A,b){return A<b?-1:A>b?1:0},y=function(A,b,T,x,t){var o;if(T==null&&(T=0),t==null&&(t=k),T<0)throw new Error("lo must be non-negative");for(x==null&&(x=A.length);T<x;)t(b,A[o=f((T+x)/2)])<0?x=o:T=o+1;return[].splice.apply(A,[T,T-T].concat(b)),b},g=function(A,b,T){return T==null&&(T=k),A.push(b),L0(A,0,A.length-1,T)},l=function(A,b){var T,x;return b==null&&(b=k),T=A.pop(),A.length?(x=A[0],A[0]=T,B0(A,0,b)):x=T,x},_=function(A,b,T){var x;return T==null&&(T=k),x=A[0],A[0]=b,B0(A,0,T),x},h=function(A,b,T){var x;return T==null&&(T=k),A.length&&T(A[0],b)<0&&(b=(x=[A[0],b])[0],A[0]=x[1],B0(A,0,T)),b},S=function(A,b){var T,x,t,o,v,N;for(b==null&&(b=k),v=[],x=0,t=(o=function(){N=[];for(var E=0,n=f(A.length/2);0<=n?E<n:E>n;0<=n?E++:E--)N.push(E);return N}.apply(this).reverse()).length;x<t;x++)T=o[x],v.push(B0(A,T,b));return v},Q0=function(A,b,T){var x;if(T==null&&(T=k),(x=A.indexOf(b))!==-1)return L0(A,0,x,T),B0(A,x,T)},s=function(A,b,T){var x,t,o,v,N;if(T==null&&(T=k),!(t=A.slice(0,b)).length)return t;for(S(t,T),o=0,v=(N=A.slice(b)).length;o<v;o++)x=N[o],h(t,x,T);return t.sort(T).reverse()},i=function(A,b,T){var x,t,o,v,N,E,n,e,V0;if(T==null&&(T=k),10*b<=A.length){if(!(o=A.slice(0,b).sort(T)).length)return o;for(t=o[o.length-1],v=0,E=(n=A.slice(b)).length;v<E;v++)T(x=n[v],t)<0&&(y(o,x,0,null,T),o.pop(),t=o[o.length-1]);return o}for(S(A,T),V0=[],N=0,e=d(b,A.length);0<=e?N<e:N>e;0<=e?++N:--N)V0.push(l(A,T));return V0},L0=function(A,b,T,x){var t,o,v;for(x==null&&(x=k),t=A[T];T>b&&x(t,o=A[v=T-1>>1])<0;)A[T]=o,T=v;return A[T]=t},B0=function(A,b,T){var x,t,o,v,N;for(T==null&&(T=k),t=A.length,N=b,o=A[b],x=2*b+1;x<t;)(v=x+1)<t&&!(T(A[x],A[v])<0)&&(x=v),A[b]=A[x],x=2*(b=x)+1;return A[b]=o,L0(A,N,b,T)},C=function(){function A(b){this.cmp=b!=null?b:k,this.nodes=[]}return A.push=g,A.pop=l,A.replace=_,A.pushpop=h,A.heapify=S,A.updateItem=Q0,A.nlargest=s,A.nsmallest=i,A.prototype.push=function(b){return g(this.nodes,b,this.cmp)},A.prototype.pop=function(){return l(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(b){return this.nodes.indexOf(b)!==-1},A.prototype.replace=function(b){return _(this.nodes,b,this.cmp)},A.prototype.pushpop=function(b){return h(this.nodes,b,this.cmp)},A.prototype.heapify=function(){return S(this.nodes,this.cmp)},A.prototype.updateItem=function(b){return Q0(this.nodes,b,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var b;return(b=new A).nodes=this.nodes.slice(0),b},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),F=[],(R=typeof(w=function(){return C})=="function"?w.apply(q,F):w)===void 0||(Q.exports=R)}).call(this)}]);function Q1(Q,q,B,w,F){let R=new TZ.js;R.setGrid(Q),R.setAcceptableTiles([0]),R.enableSync();let C=null;return R.findPath(q,B,w,F,function(k){C=k}),R.calculate(),C}function E0(){return"player"}function V1(Q,q,B,w){return Math.abs(Q-B)+Math.abs(q-w)}function z6(Q){return[...Array(Q).keys()]}function K1(Q){let q=gZ(Q),B=Q.entities[E0()];for(let w=0;w<q.length;w++){let F=q[w],R=Q.entities[F],C=Q._AIs[F],k=V1(B.x,B.y,R.x,R.y);if(B.options.faction!==R.options.faction&&k<=C.aggroRange){let f=Q.maps[Q.currentMapId].asMovementMap(),S=Q1(f,R.x,R.y,B.x,B.y);if(S){if(S=S.slice(1),S.length>k)S=null}C.path=S}if(!!R.message&&R.message.includes("OBEY"));}for(let w=0;w<q.length;w++){let F=q[w],R=Q.entities[F],C=Q._AIs[F];if(C.path){let k=C.path[0],f=k.x-R.x,S=k.y-R.y;Q=D0(Q,R,f,S)}}return Q}function gZ(Q){let q=k0(Q,Q.currentMapId),B=[];for(let w=0;w<q.length;w++){let F=q[w];if(F.options.ai)B.push(F.id)}return B}function U1(Q,q,B){let w=Q.entities[q],F=8;switch(B){case M.ais.aggrorange:F=8;break;case M.ais.aggrorangeshort:F=2;break;case M.ais.guardian:F=1;break;default:}return Q._AIs[q]={entityId:q,type:B,aggroRange:F,startMap:w.mapId,startX:w.x,startY:w.y,path:null},Q}function B6(Q,q){return Q._AIs[q]=void 0,delete Q._AIs[q],Q}function $1(Q){let q=void 0;while(typeof(q=Q._despawnQueue.shift())!=="undefined")Q=V6(Q,q),Q=B6(Q,q);return Q}function z1(Q){return Q}class y0{mapId;x;y;entityOrItemName;options;constructor(Q,q,B,w,F={}){if(this.mapId=Q,this.x=q,this.y=B,this.entityOrItemName=w,this.options=F,w==="movablebox"&&!Object.hasOwn(this.options,"faction"))this.options.faction="Equipment";else if(w==="movableboulder"&&!Object.hasOwn(this.options,"faction"))this.options.faction="Gaia"}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function a0(Q,q){if(hZ(q.entityOrItemName)){let B=q.options;if(Object.hasOwn(B,"ai"))B.ai=M.ais[B.ai];if(Object.hasOwn(B,"faction"))B.faction=M.factions[B.faction];let w=q.generateId();if(Q=F0(Q,w,M.entities[q.entityOrItemName],q.mapId,q.x,q.y,B),Object.hasOwn(B,"equip")&&q1(B.equip))Q=k6(Q,w,M.items[B.equip]);if(Object.hasOwn(B,"ai"))Q=U1(Q,w,B.ai)}else if(q1(q.entityOrItemName))Q=u0(Q,M.items[q.entityOrItemName],q.mapId,q.x,q.y);return Q}function hZ(Q){return Object.hasOwn(M.entities,Q)}function q1(Q){return Object.hasOwn(M.items,Q)}var X6={width:16,height:16},u6=X6;function T0(Q,q={}){return{type:Q,options:q}}function B1(Q){return Q.type.name.startsWith("space")}function X1(Q){for(let q in M.maps){let B=p0(M.maps[q]);Q.maps[q]=B;for(let w of B._spawnCommands)Q=a0(Q,w);B._spawnCommands=[]}return Q}function G1(Q,q){let B=$6(Q,q);for(let F=0;F<B.length;F++){let R=B[F];Q=b6(Q,R.id)}let w=k0(Q,q);for(let F=0;F<w.length;F++){let R=w[F];Q=V6(Q,R.id),Q=B6(Q,R.id)}return Q.maps[q]=void 0,delete Q.maps[q],Q}class g0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(Q,q,B,w=[]){this.id=Q,this.widthTiles=q,this.heightTiles=B,this.seed=null,this._tiles=w,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(Q,q){if(Q>=0&&Q<this.widthTiles&&q>=0&&q<this.heightTiles){let B=q*this.widthTiles+Q;return this._tiles[B]}return{}}setTile(Q,q,B,w={}){this._cacheMovementMap=null;let F=q*this.widthTiles+Q,R=this._tiles[F];return this._tiles[F]=T0(B,w),R}setTvMessage(Q){if(this._tvCount){let q=0;for(let B of this._tiles)if(B.type===M.tiles.tv&&q<Q.length)B.options.sign=Q[q],q++;if(Q==="")Q=null;this.tvMessage=Q}}pasteOnto(Q,q=0,B=0){for(let w=0;w<Q.heightTiles;w++)for(let F=0;F<Q.widthTiles;F++){let R=Q.getTile(F,w);if(R.type!==M.tiles.voidtrue)this.setTile(F+q,w+B,R.type,R.options)}return this}circular(){let Q=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let q=-Q;q<=Q;q++)for(let B=-Q;B<=Q;B++)if(B*B+q*q>=Q*Q)this.setTile(B+Q-1,q+Q-1,M.tiles.voidtrue);return this}sample(Q,q){let B=Math.floor(this.widthTiles/Q),w=Math.floor(this.heightTiles/q),F=[];for(let R=0;R<q;R++)for(let C=0;C<Q;C++){let k={};for(let _=0;_<w;_++)for(let y=0;y<B;y++){let d=this.getTile(C*B+y,R*w+_);if(k[d.type.name])k[d.type.name]+=1;else k[d.type.name]=1}let f="",S=0;for(let[_,y]of Object.entries(k))if(y>S)f=_,S=y;let l="space"+f,g=M.tiles[l]||M.tiles.spacevoid,h={mapId:this.id,x:C*B,y:R*w};F.push(T0(g,h))}return new g0("__sampled_"+Q+"_"+q+"_"+this.id,Q,q,F)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let Q=new Array(this.heightTiles);for(let q=0;q<this.heightTiles;q++){Q[q]=new Array(this.widthTiles);for(let B=0;B<this.widthTiles;B++){let w=q*this.widthTiles+B,R=this._tiles[w].type;if(Q[q][B]=0,R===M.tiles.rock||R===M.tiles.portalclosed||R===M.tiles.tv||R.name.startsWith("wall"))Q[q][B]=1}}return this._cacheMovementMap=Q,Q}}function p0(Q){let q=Q.split(/\r?\n/),B=Q[0],w="",F=0,R=0,C={},k=[],f=[],S=0,l="";for(let h=0;h<q.length;h++){let _=q[h];if(_.startsWith(B)){if(_.startsWith(B+"!id"))w=_.slice(5);else if(_.startsWith(B+"!size")){let y=_.split(" ").slice(1);F=Number(y[0]),R=Number(y[1])}else if(_.startsWith(B+"!spawn")){let y=_.split(" ").slice(1),d={};if(y.length>3){let s=y.slice(3);for(let i of s){let Q0=i.split("=");d[Q0[0]]=Q0[1]}}k.push(new y0(w,Number(y[0]),Number(y[1]),y[2],d))}else if(_.startsWith(B+"!")){let y=_[2],d=_.slice(4);C[y]=d}}else for(let y=0;y<_.length;y++){let d=_[y],s=C[d];if(J0.debug&&!s)console.log("DEBUG Broken map: "+w);let i=s.split(" "),Q0={};if(s.startsWith("portal ")||s.startsWith("portalhidden ")||s.startsWith("portallauncher ")||s.startsWith("portalstart"))s=i[0],Q0.mapId=i[1],Q0.x=Number(i[2]),Q0.y=Number(i[3]);if(s.startsWith("wall ")&&i.length>=2)s="wall",Q0.sign=i[1];if(s.startsWith("terminal ")&&i.length>=2)s="terminal",Q0.screen=i[1];if(s.startsWith("tv ")&&i.length>=2){if(s="tv",i.length===3)l=i[2];S++}f.push(T0(M.tiles[s],Q0))}}if(J0.debug&&!(S===0||S===12))console.log("DEBUG Broken map: "+w+" (invalid TV size "+S+", allowed are 0 or 12 characters per map)");let g=new g0(w,F,R,f);return g._tvCount=S,g.setTvMessage(l),g._spawnCommands=k,g}function Y1(Q,q,B){switch(B){case M.commands.N:Q=D0(Q,q,0,-1);break;case M.commands.W:Q=D0(Q,q,-1,0);break;case M.commands.S:Q=D0(Q,q,0,1);break;case M.commands.E:Q=D0(Q,q,1,0);break;case M.commands.A:Q=L1(Q,q,M.commands.A);break;case M.commands.B:Q=L1(Q,q,M.commands.B);break;default:}return Q}function D0(Q,q,B,w,F=0){let R=Q.maps[q.mapId],C=i6(Q,R.id,q.x+B,q.y+w),k=Q.tools[q.id];if(q.message=R.tvMessage,C)if(I0(C)){if(!I0(q)&&F<1)Q=D0(Q,C,B,w,F++),Q=D0(Q,q,B,w,F++)}else Q=t6(Q,q,C);else if(mZ(R,q,B,w))Q=xZ(Q,R,q,B,w),Q._energyQueue.push({entityId:q.id,energyDelta:-1*F});else if(yZ(R,q,k,B,w)){if(R.setTile(q.x+B,q.y+w,M.tiles.void).type===M.tiles.rock){let S=Q.rng.getPercentage();if(S<=1)Q=u0(Q,M.items.matter,R.id,q.x+B,q.y+w);else if(S<=34)Q=u0(Q,M.items.junk,R.id,q.x+B,q.y+w)}Q._energyQueue.push({entityId:q.id,energyDelta:k.type.energyCost})}return Q}function L1(Q,q,B){let F=U6(Q,q)[B.key],C=Q.maps[q.mapId].getTile(q.x,q.y);switch(F){case M.actions.Enter:Q=w1(Q,q,C);break;case M.actions.Launch:Q=_Z(Q,q,C);case M.actions.Wait:break;default:}return Q}function xZ(Q,q,B,w,F){B.x+=w,B.y+=F;let R=Z1(Q,B.mapId,B.x,B.y);if(R)Q=J1(Q,B,R);let C=q.getTile(B.x,B.y);if(C.type.name.startsWith("portal"))Q=w1(Q,B,C);if(C.type===M.tiles.terminal)q.setTvMessage("OBEYWORKKILL");if(C.type.name.startsWith("move"))switch(C.type.name){case"movenorth":Q=D0(Q,B,0,-1);break;case"moveeast":Q=D0(Q,B,1,0);break;case"movesouth":Q=D0(Q,B,0,1);break;case"movewest":Q=D0(Q,B,-1,0);break;default:}return Q}function w1(Q,q,B){if(q.id.startsWith("player"))Q.currentMapId=B.options.mapId;if(B1(B))Q.lastSpacePositionByEntity[q.id]={mapId:q.mapId,x:q.x,y:q.y};else Q.lastSpacePositionByEntity[q.id]=void 0,delete Q.lastSpacePositionByEntity[q.id];let w={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:B.type,newMapId:B.options.mapId,newX:B.options.x,newY:B.options.y};return q.mapId=B.options.mapId,q.x=B.options.x,q.y=B.options.y,Q=f6(Q,"entitymap.updated.event",w),Q}function _Z(Q,q,B){if(Q.lastSpacePositionByEntity[q.id]){if(q.id.startsWith("player"))Q.currentMapId=Q.lastSpacePositionByEntity[q.id].mapId;let w={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:B.type,newMapId:Q.lastSpacePositionByEntity[q.id].mapId,newX:Q.lastSpacePositionByEntity[q.id].x,newY:Q.lastSpacePositionByEntity[q.id].y};q.mapId=w.newMapId,q.x=w.newX,q.y=w.newY,Q._energyQueue.push({entityId:q.id,energyDelta:M.actions.Launch.energyDelta}),Q.lastSpacePositionByEntity[q.id]=void 0,delete Q.lastSpacePositionByEntity[q.id],Q=f6(Q,"entitymap.updated.event",w)}return Q}function H1(Q){for(let q in Q.entities){let B=Q.entities[q],w=Q.tools[q],R=Q.maps[B.mapId].getTile(B.x,B.y),C=R.type.energyDelta;if(R.type===M.tiles.water&&w?.type.effects.includes(M.effects.WaterShield.name))C/=2;Q._energyQueue.push({entityId:q,energyDelta:C})}return Q}function P1(Q,q){let B=Q.entities[q.entityId];switch(q.oldTileType){case M.tiles.portalstartaerobot:Q=K6(Q,B,M.entities.AeroBot);break;case M.tiles.portalstartworkbot:Q=K6(Q,B,M.entities.WorkBot);break;default:}return Q}function mZ(Q,q,B,w){let F=q.x+B,R=q.y+w,C=Q.getTile(F,R).type;return F>=0&&F<Q.widthTiles&&R>=0&&R<Q.heightTiles&&!(C===M.tiles.rock||C===M.tiles.portalclosed||C===M.tiles.tv||C.name.startsWith("wall"))}function yZ(Q,q,B,w,F){let R=q.x+w,C=q.y+F,k=Q.getTile(R,C).type;if(B)return B.type.effects.includes(M.effects.WallCrusher.name)&&k===M.tiles.wallweak||B.type.effects.includes(M.effects.RockCrusher.name)&&k===M.tiles.rock;return!1}var D1=N6(L6(),1);class f0{seed;_rotRng;constructor(Q=1337){this.seed=Q,this._rotRng=D1.RNG.clone(),this._rotRng.setSeed(Q)}getPercentage(){return this._rotRng.getPercentage()}getItem(Q){return this._rotRng.getItem(Q)}}function W1(Q,q){if(q.seed===1337)Q=F0(Q,"batteryvalkyrie0",M.entities.Valkyrie,q.id,130,127,{faction:M.factions.Spirits}),Q=F0(Q,"batteryvalkyrie1",M.entities.Valkyrie,q.id,124,127,{faction:M.factions.Spirits}),Q=u0(Q,M.items.trident,q.id,127,130);else{let B=new f0(q.seed);for(let w=0;w<q.heightTiles;w++)for(let F=0;F<q.widthTiles;F++){let R=q.getTile(F,w);if(B.getPercentage()<=1&&(R.type===M.tiles.void||R.type===M.tiles.tree)){let C=B.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(C){case"Deviant":case"Pioneer":Q=a0(Q,new y0(q.id,F,w,C,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":Q=a0(Q,new y0(q.id,F,w,C));break}}}}return Q}var Y6=N6(L6(),1);var pZ=1337,M1=55;function O1(Q,q=pZ){Y6.RNG.setSeed(q);let B=new Y6.Noise.Simplex,w=X6.width*u6.width,F=X6.height*u6.height,R=[];for(let f=0;f<F;f++)for(let S=0;S<w;S++){let l=B.get(S/M1,f/M1),g;if(l<=-0.5)g=M.tiles.water;else if(l<=0)g=M.tiles.void;else if(l<0.5)g=M.tiles.tree;else g=M.tiles.rock;R.push(T0(g))}let C="simplex="+q,k=new g0(C,w,F,R);return k.seed=q,Q.maps[C]=k,Q}var cZ=1337;function j1(Q,q=cZ){let B=R1(1024,1024,M.tiles.void);B.id="solarsystem="+q,Q.maps[B.id]=B;let w=new f0(q),F=new f0(q),R=w.getItem([2,3,4,5,6,7,8,9,10,11,12]),C=128,k=512-C,f=Math.floor(k/R);B=dZ(B,w);let S=R1(128,128,M.tiles.voidtrue);lZ(S,63,63,62,M.tiles.sun),nZ(S,63,63,M.tiles.sun),B.pasteOnto(S,448,448);for(let h=C;h<512;h+=f){let _=w.getItem([-1,1])*w.getItem(z6(h)),y=w.getItem([-1,1])*Math.floor(Math.sqrt(h*h-_*_));_+=512,y+=512;let d=w.getItem([16,24,32]),s=Math.floor(d/2)-1;Q=O1(Q,q);let i=Q.maps["simplex="+q],Q0=M.map_snippets.launcher;Q0=Q0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${B.id} ${_} ${y}`);let L0=p0(Q0),B0=F.getItem(z6(i.widthTiles-L0.widthTiles)),A=F.getItem(z6(i.heightTiles-L0.heightTiles));i.pasteOnto(L0,B0,A),Q=W1(Q,i);let b=i.sample(d,d).circular();B.pasteOnto(b,_-(s+1),y-(s+1)),q++}let l=M.map_snippets.space_bot_station;l=l.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let g=p0(l);return B.pasteOnto(g,583,398),Q}function R1(Q,q,B){let w=[];for(let C=0;C<Q*q;C++)w.push(T0(B));return new g0("__temp",Q,q,w)}function dZ(Q,q){for(let B=0;B<Q.heightTiles;B++)for(let w=0;w<Q.widthTiles;w++)if(q.getPercentage()<=1)Q.setTile(w,B,q.getItem([M.tiles.spacevoidstarwhite,M.tiles.spacevoidstaryellow]));return Q}function lZ(Q,q,B,w,F){let R=1-w,C=1,k=-2*w,f=0,S=w;Q.setTile(q,B+w,F),Q.setTile(q,B-w,F),Q.setTile(q+w,B,F),Q.setTile(q-w,B,F);while(f<S){if(R>=0)S-=1,k+=2,R+=k;f+=1,C+=2,R+=C,Q.setTile(q+f,B+S,F),Q.setTile(q-f,B+S,F),Q.setTile(q+f,B-S,F),Q.setTile(q-f,B-S,F),Q.setTile(q+S,B+f,F),Q.setTile(q-S,B+f,F),Q.setTile(q+S,B-f,F),Q.setTile(q-S,B-f,F)}return Q}function nZ(Q,q,B,w){let{widthTiles:F,heightTiles:R}=Q,C=[];C.push({x:q,y:B});let k=void 0;while(typeof(k=C.shift())!=="undefined"){let f=k,S=k;if(k.x+1<F)S={x:k.x+1,y:k.y};while(Q.getTile(f.x,f.y).type!==w){if(Q.setTile(f.x,f.y,w),f.y+1<R){if(Q.getTile(f.x,f.y+1).type!==w)C.push({x:f.x,y:f.y+1})}if(f.y-1>=0){if(Q.getTile(f.x,f.y-1).type!==w)C.push({x:f.x,y:f.y-1})}if(f.x-1>=0)f.x-=1;else break}while(Q.getTile(S.x,S.y).type!==w){if(Q.setTile(S.x,S.y,w),S.y+1<R){if(Q.getTile(S.x,S.y+1).type!==w)C.push({x:S.x,y:S.y+1})}if(S.y-1>=0){if(Q.getTile(S.x,S.y-1).type!==w)C.push({x:S.x,y:S.y-1})}if(S.x+1<F)S.x+=1;else break}}return Q}var rZ=`!
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
`;function E1(Q,q){if(q?.oldMapId?.startsWith("shop_instance")){Q=G1(Q,q.oldMapId);let B=Q.maps[q.newMapId],w=B.getTile(q.newX,q.newY);B.setTile(q.newX,q.newY,w.type,{mapId:"shop_instance",x:q.oldX,y:q.oldY})}if(q?.newMapId?.startsWith("shop_instance")){let B=p0(rZ);B.id+="_"+q.oldMapId+"_"+q.entityId,B.setTile(q.newX,q.newY,M.tiles.portal,{mapId:q.oldMapId,x:q.oldX,y:q.oldY}),Q.maps[q.oldMapId].setTile(q.oldX,q.oldY,q.oldTileType,{mapId:B.id,x:q.newX,y:q.newY});let F=Q.entities[q.entityId];if(F.id.startsWith("player"))Q.currentMapId=B.id;if(F.mapId=B.id,F.x=q.newX,F.Y=q.newY,Q.maps[B.id]=B,Q=s0(Q,M.items.hammer,B.id,4,4,0,-200),Q=s0(Q,M.items.pickaxe,B.id,4,6,0,-200),Q=s0(Q,M.items.battery,B.id,4,8,0,-200),Q=s0(Q,M.items.gold,B.id,4,10,0,-1e4),Q=F0(Q,B.id+"_shopkeeper",M.entities.AeroBot,B.id,6,2,{faction:F.options.faction}),q?.oldMapId.startsWith("bot_stadium"))Q=F0(Q,B.id+"_shopper",M.entities.WorkBot,B.id,1,12,{faction:F.options.faction});else if(q?.oldMapId.startsWith("bot_bar"))Q=F0(Q,B.id+"_shopper",M.entities.AeroBot,B.id,4,11,{faction:F.options.faction})}return Q}function C1(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!1,actionLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new f0,tools:{},tvs:{}}}function A1(Q){let q=void 0;while(typeof(q=Q._combatQueue.shift())!=="undefined"){let B=-1,w=-5,F=o0(Q,q.entityId);if(F)B=F.type.energyCost,w=-1*Math.abs(F.type.damage);Q._energyQueue.push({entityId:q.entityId,energyDelta:B}),Q._energyQueue.push({entityId:q.otherEntityId,energyDelta:w})}return Q}function N1(Q){let q=void 0;while(typeof(q=Q._energyQueue.shift())!=="undefined"){let B=Q.entities[q.entityId];if(B.energy=Math.min(B.energy+q.energyDelta,B.energyMax),B.energy<=0){if(Q._despawnQueue.push(B.id),!I0(B)){let w=Math.max(1,Math.floor(B.energyMax/3));Q=e6(Q,w,B.mapId,B.x,B.y)}}}return Q}function S1(Q){return Q=K1(Q),Q=A1(Q),Q=H1(Q),Q=N1(Q),Q=$1(Q),Q=z1(Q),Q}class w6{state;constructor(){}init(){return this.state=C1(),this.state=v6(this.state,"entitymap.updated.event",P1),this.state=v6(this.state,"entitymap.updated.event",E1),this.state=j1(this.state),this.state=X1(this.state),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,E0(),M.entities.Spirit,this.state.currentMapId,9,5,{faction:M.factions.Spirits}),this.state}update(Q){let q=this.state.entities[E0()];if(q){if(Q){if(Q===M.commands.M)this.state._menuOpen=!this.state._menuOpen;else this.state=Y1(this.state,q,Q),this.state=S1(this.state);this.state.actionLog.push(Q.key)}}else a6("Game over! "+this.state.actionLog.length+" Turns: "+this.state.actionLog.join("")),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,E0(),M.entities.Spirit,this.state.currentMapId,9,5,{faction:M.factions.Spirits});return this.state}play(Q){for(let q=0;q<Q.length;q++){let B=Q[q];this.update(M.commands[B])}return this.state}}var c={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1},T6=[],g6=void 0,I1=0;document.body.addEventListener("keydown",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":c.up=!0,q0(Q);break;case"a":case"ArrowLeft":c.left=!0,q0(Q);break;case"s":case"ArrowDown":c.down=!0,q0(Q);break;case"d":case"ArrowRight":c.right=!0,q0(Q);break;case"x":c.a=!0,q0(Q);break;case" ":case"y":case"z":c.b=!0,q0(Q);break;case"m":c.menu=!0,q0(Q);break;default:}C0(f1())});function C0(Q){let q=Date.now();if(g6!==void 0&&q-I1>=80)I1=q,g6(Q)}document.body.addEventListener("keyup",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":c.up=!1,q0(Q);break;case"a":case"ArrowLeft":c.left=!1,q0(Q);break;case"s":case"ArrowDown":c.down=!1,q0(Q);break;case"d":case"ArrowRight":c.right=!1,q0(Q);break;case"x":c.a=!1,q0(Q);break;case" ":case"y":case"z":c.b=!1,q0(Q);break;case"m":c.menu=!1,q0(Q);break;default:}});document.body.addEventListener("click",function(Q){let{clientX:q,clientY:B}=Q,F=document.body.clientWidth/3,C=document.body.clientHeight/3;if(q>=F&&q<2*F&&B<C)C0(M.commands.N),q0(Q);else if(q<F&&B<C)C0(M.commands.B),q0(Q);else if(q>=2*F&&B<C)C0(M.commands.A),q0(Q);else if(q<F&&B>=C&&B<2*C)C0(M.commands.W),q0(Q);else if(q>=2*F&&B>=C&&B<2*C)C0(M.commands.E),q0(Q);else if(q>=F&&q<2*F&&B>=2*C)C0(M.commands.S),q0(Q);else if(q>=F&&q<2*F&&B>=C&&B<2*C)C0(M.commands.M),q0(Q)});function q0(Q){Q.preventDefault(),Q.stopPropagation()}var i0=null;function sZ(){let Q=null;if(c.right)Q=M.commands.E;if(c.left)Q=M.commands.W;if(c.down)Q=M.commands.S;if(c.up)Q=M.commands.N;if(c.up&&c.right){if(Q===M.commands.N&&i0===M.commands.N)Q=M.commands.E}if(c.up&&c.left){if(Q===M.commands.N&&i0===M.commands.N)Q=M.commands.W}if(c.down&&c.right){if(Q===M.commands.S&&i0===M.commands.S)Q=M.commands.E}if(c.down&&c.left){if(Q===M.commands.S&&i0===M.commands.S)Q=M.commands.W}if(c.a)Q=M.commands.A;if(c.b)Q=M.commands.B;if(c.menu)Q=M.commands.M;if(i0=Q,Q!==null)T6.push(Q)}function f1(){sZ();let Q=T6.shift()||null;return T6=[],Q}var v1=void 0;window.addEventListener("gamepadconnected",(Q)=>{v1=setInterval(function(){let q=navigator.getGamepads()[Q.gamepad?.index];if(c.right=q.buttons[15].pressed,c.left=q.buttons[14].pressed,c.down=q.buttons[13].pressed,c.up=q.buttons[12].pressed,c.a=q.buttons[0].pressed||q.buttons[2].pressed,c.b=q.buttons[1].pressed||q.buttons[3].pressed,c.menu=q.buttons[9].pressed,c.right||c.left||c.down||c.up||c.a||c.b||c.menu)C0(f1())},100)});window.addEventListener("gamepaddisconnected",(Q)=>{clearInterval(v1)});function b1(Q){g6=Q}var T1=N6(L6(),1);var k1={AeroBot:[0,0],battery:[16,0],broom:[32,0],chargepad:[48,0],Cleaner:[64,0],Deviant:[80,0],energy:[96,0],gold:[112,0],goo:[128,0],hammer:[144,0],junk:[160,0],matter:[176,0],movableboulder:[192,0],movablebox:[208,0],moveeast:[224,0],movenorth:[240,0],movesouth:[256,0],movewest:[272,0],pickaxe:[288,0],Pioneer:[304,0],portalclosed:[320,0],portalhidden:[336,0],portallauncher:[352,0],portal:[368,0],portalstartaerobot:[384,0],"_portalstart?":[400,0],portalstartworkbot:[416,0],rock:[432,0],shocker:[448,0],spacerock:[464,0],spacetree:[480,0],spacevoid:[496,0],spacevoidstarwhite:[512,0],spacevoidstaryellow:[528,0],spacewater:[544,0],Spirit:[560,0],sun:[576,0],terminal:[592,0],tree:[608,0],trident:[624,0],tv:[640,0],Valkyrie:[656,0],voidhidden:[672,0],void:[688,0],voidtrue:[704,0],wall0:[720,0],wall1:[736,0],wall2:[752,0],walla_:[768,0],wallA:[784,0],wallb_:[800,0],wallB:[816,0],wallc_:[832,0],wallC:[848,0],walld_:[864,0],wallD:[880,0],walle_:[896,0],wallE:[912,0],wallf_:[928,0],wallF:[944,0],wallg_:[960,0],wallG:[976,0],wallh_:[992,0],wallH:[1008,0],walli_:[1024,0],wallI:[1040,0],wallj_:[1056,0],wallJ:[1072,0],wallk_:[1088,0],wallK:[1104,0],walll_:[1120,0],wallL:[1136,0],wallm_:[1152,0],wallM:[1168,0],walln_:[1184,0],wallN:[1200,0],wallo_:[1216,0],wallO:[1232,0],"wall(":[1248,0],"wall)":[1264,0],"wall+":[1280,0],"wall,":[1296,0],"wall.":[1312,0],wall:[1328,0],"wall:":[1344,0],wall_:[1360,0],"wall|":[1376,0],wallp_:[1392,0],wallP:[1408,0],wallq_:[1424,0],wallQ:[1440,0],wallr_:[1456,0],wallR:[1472,0],walls_:[1488,0],wallS:[1504,0],wallstatue:[1520,0],wallt_:[1536,0],wallT:[1552,0],wallu_:[1568,0],wallU:[1584,0],wallv_:[1600,0],wallV:[1616,0],wallweak:[1632,0],wallw_:[1648,0],wallW:[1664,0],wallx_:[1680,0],wallX:[1696,0],wally_:[1712,0],wallY:[1728,0],wallz_:[1744,0],wallZ:[1760,0],water:[1776,0],WorkBot:[1792,0],wrench:[1808,0]};var g1=document.createElement("img");g1.src="build/tiles.png";G0.tileSet=g1;G0.tileMap=iZ();var h6=new T1.Display(G0);document.body.appendChild(h6.getContainer());var h0=document.createElement("div");h0.id="ui";document.body.appendChild(h0);function oZ(Q,q){let B=Q.currentMapId,w=Q.maps[B],F=0,R=0;if(w.widthTiles<q.width)F=Math.floor((q.width-w.widthTiles)/2),q.x=0;if(w.heightTiles<q.height)R=Math.floor((q.height-w.heightTiles)/2),q.y=0;let C={};for(let g=0;g<q.height;g++)for(let h=0;h<q.width;h++){let _=w.getTile(q.x+h,q.y+g),y="";if(!!_&&!!_.type)if(_.options.sign)y="#"+_.options.sign;else y=_.type.icon;if(y)C[[F+h,R+g].toString()]=[y]}let k=$6(Q,B);for(let g=0;g<k.length;g++){let h=k[g],_=F+h.x-q.x,y=R+h.y-q.y,d=[_,y].toString();if(C[d])C[d].push(h.type.icon);else C[d]=[h.type.icon]}let f=E0(),S=Q.entities[f],l=k0(Q,B);for(let g=0;g<l.length;g++){let h=l[g],_=F+h.x-q.x,y=R+h.y-q.y,d=[_,y].toString();if(C[d])C[d].push(h.type.icon);else C[d]=[h.type.icon]}h6.clear();for(let[g,h]of Object.entries(C)){let _=g.split(",");h6.draw(Number(_[0]),Number(_[1]),h)}if(!!S&&J0.showUI){let g="",h=o0(Q,f);if(h)g+=h.type.name+" ";let _=U6(Q,S),y=S.type.name+" "+S.energy+"/"+S.energyMax+" "+g+"Y:"+_.B.name+" X:"+_.A.name;if(h0.style.flexDirection="column-reverse",S.y-q.y>=G0.height-3)h0.style.flexDirection="column";let d=document.createElement("span");if(d.innerText=y,d.style.background="#000",h0.replaceChildren(d),S.energy/S.energyMax<=0.2)d.style.color="#000",d.style.background="#f00";else d.style.color="#74ee15",d.style.background="#000"}if(Q._menuOpen){let g=[];if(g.push("BotMos Menu"),g.push(""),S){g.push("Hull: "+S.type.name),g.push("Energy: "+S.energy+"/"+S.energyMax),g.push("Gold: "+S.gold),g.push("Matter: "+S.matter);let h=o0(Q,f);if(h)g.push("Tool: "+h.type.name);if(J0.debug)g.push("DEBUG Position: "+S.x+","+S.y),g.push("DEBUG Map: "+S.mapId)}for(let h=0;h<g.length;h++){let _=document.createElement("span");_.innerText=g[h],h0.appendChild(_)}}for(let g=0;g<I6.length;g++){let h=document.createElement("span");h.innerText=I6[g],h0.appendChild(h)}}var u1={x:0,y:0};async function x0(Q){let q=Q.entities[E0()],B=q?q:u1,w=aZ(B);oZ(Q,w),u1=B}async function h1(Q){}function aZ(Q){return{x:Math.min(Math.max(0,Q.x-Math.floor(G0.width/2)),S6.WIDTH-G0.width),y:Math.min(Math.max(0,Q.y-Math.floor(G0.height/2)),S6.HEIGHT-G0.height),width:G0.width,height:G0.height}}function iZ(){let Q={};for(let[q,B]of Object.entries(k1))if(q.startsWith("wall")&&(q.length===5||q.length===6))Q["#"+q.substring(4,5)]=B;else if(Object.hasOwn(M.tiles,q))Q[M.tiles[q].icon]=B;else if(Object.hasOwn(M.entities,q))Q[M.entities[q].icon]=B;else if(Object.hasOwn(M.items,q))Q[M.items[q].icon]=B;return Q}var W0=new w6;window.onload=function(){x0(W0.init())};window.onresize=function(){let Q=typeof window!=="undefined"?window.innerWidth:0,q=typeof window!=="undefined"?window.innerHeight:0;J0.cameraWidth=Math.floor(Q/J0.fontSize),J0.cameraHeight=Math.floor(q/J0.fontSize),G0.width=Math.floor(J0.cameraWidth*(1/J0.zoom)),G0.height=Math.floor(J0.cameraHeight*(1/J0.zoom)),h1(G0),x0(W0.state)};b1(function(Q){x0(W0.update(Q))});if(!window.BMActionLog)window.BMActionLog=function(){return W0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(Q){x0(W0.play(Q))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){J0.debug=!J0.debug,x0(W0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){J0.showUI=!J0.showUI,x0(W0.state)};if(J0.debug){if(!window.BMDebugState)window.BMDebugState=function(){return W0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let Q=Object.keys(W0.state.maps).length,q=Object.keys(W0.state.entities).length,B=Object.keys(W0.state.items).length,w=Object.keys(W0.state.tools).length;return`Maps: ${Q}, Entities: ${q}, Items: ${B}, Tools: ${w}`}}document.body.focus();
