var qJ=Object.create;var{getPrototypeOf:UJ,defineProperty:H6,getOwnPropertyNames:$J}=Object;var XJ=Object.prototype.hasOwnProperty;var r1=(J,K,U)=>{U=J!=null?qJ(UJ(J)):{};let G=K||!J||!J.__esModule?H6(U,"default",{value:J,enumerable:!0}):U;for(let D of $J(J))if(!XJ.call(G,D))H6(G,D,{get:()=>J[D],enumerable:!0});return G};var GJ=(J,K)=>()=>(K||J((K={exports:{}}).exports,K),K.exports);var A1=GJ((C1,y6)=>{function y0(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function jJ(J,K){var U=typeof Symbol!=="undefined"&&J[Symbol.iterator]||J["@@iterator"];if(U)return(U=U.call(J)).next.bind(U);if(Array.isArray(J)||(U=OJ(J))||K&&J&&typeof J.length==="number"){if(U)J=U;var G=0;return function(){if(G>=J.length)return{done:!0};return{done:!1,value:J[G++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OJ(J,K){if(!J)return;if(typeof J==="string")return d6(J,K);var U=Object.prototype.toString.call(J).slice(8,-1);if(U==="Object"&&J.constructor)U=J.constructor.name;if(U==="Map"||U==="Set")return Array.from(J);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return d6(J,K)}function d6(J,K){if(K==null||K>J.length)K=J.length;for(var U=0,G=new Array(K);U<K;U++)G[U]=J[U];return G}function z0(J,K){J.prototype=Object.create(K.prototype),J.prototype.constructor=J,e1(J,K)}function e1(J,K){return e1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function U(G,D){return G.__proto__=D,G},e1(J,K)}(function(J,K){typeof C1==="object"&&typeof y6!=="undefined"?K(C1):typeof define==="function"&&define.amd?define(["exports"],K):(J=typeof globalThis!=="undefined"?globalThis:J||self,K(J.ROT={}))})(C1,function(J){var K=0.00000000023283064365386963,U=function(){function Y(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var B=Y.prototype;return B.getSeed=function $(){return this._seed},B.setSeed=function $(z){return z=z<1?1/z:z,this._seed=z,this._s0=(z>>>0)*K,z=z*69069+1>>>0,this._s1=z*K,z=z*69069+1>>>0,this._s2=z*K,this._c=1,this},B.getUniform=function $(){var z=2091639*this._s0+this._c*K;return this._s0=this._s1,this._s1=this._s2,this._c=z|0,this._s2=z-this._c,this._s2},B.getUniformInt=function $(z,Z){var Q=Math.max(z,Z),V=Math.min(z,Z);return Math.floor(this.getUniform()*(Q-V+1))+V},B.getNormal=function $(z,Z){if(z===void 0)z=0;if(Z===void 0)Z=1;var Q,V,q;do Q=2*this.getUniform()-1,V=2*this.getUniform()-1,q=Q*Q+V*V;while(q>1||q==0);var X=Q*Math.sqrt(-2*Math.log(q)/q);return z+X*Z},B.getPercentage=function $(){return 1+Math.floor(this.getUniform()*100)},B.getItem=function $(z){if(!z.length)return null;return z[Math.floor(this.getUniform()*z.length)]},B.shuffle=function $(z){var Z=[],Q=z.slice();while(Q.length){var V=Q.indexOf(this.getItem(Q));Z.push(Q.splice(V,1)[0])}return Z},B.getWeightedValue=function $(z){var Z=0;for(var Q in z)Z+=z[Q];var V=this.getUniform()*Z,q,X=0;for(q in z)if(X+=z[q],V<X)return q;return q},B.getState=function $(){return[this._s0,this._s1,this._s2,this._c]},B.setState=function $(z){return this._s0=z[0],this._s1=z[1],this._s2=z[2],this._c=z[3],this},B.clone=function $(){var z=new Y;return z.setState(this.getState())},Y}(),G=new U().setSeed(Date.now()),D=function(){function Y(){}var B=Y.prototype;return B.getContainer=function $(){return null},B.setOptions=function $(z){this._options=z},Y}(),R=function(Y){z0(B,Y);function B(){var z=Y.call(this)||this;return z._ctx=document.createElement("canvas").getContext("2d"),z}var $=B.prototype;return $.schedule=function z(Z){requestAnimationFrame(Z)},$.getContainer=function z(){return this._ctx.canvas},$.setOptions=function z(Z){Y.prototype.setOptions.call(this,Z);var Q=Z.fontStyle?Z.fontStyle+" ":"",V=Q+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},$.clear=function z(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},$.eventToPosition=function z(Z,Q){var V=this._ctx.canvas,q=V.getBoundingClientRect();if(Z-=q.left,Q-=q.top,Z*=V.width/q.width,Q*=V.height/q.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},B}(D);function C(Y,B){return(Y%B+B)%B}function S(Y,B,$){if(B===void 0)B=0;if($===void 0)$=1;if(Y<B)return B;if(Y>$)return $;return Y}function N(Y){return Y.charAt(0).toUpperCase()+Y.substring(1)}function I(Y){for(var B=arguments.length,$=new Array(B>1?B-1:0),z=1;z<B;z++)$[z-1]=arguments[z];var Z=I.map,Q=function V(q,X,L,w){if(Y.charAt(w-1)=="%")return q.substring(1);if(!$.length)return q;var H=$[0],P=X||L,F=P.split(","),M=F.shift()||"",j=Z[M.toLowerCase()];if(!j)return q;H=$.shift();var O=H[j].apply(H,F),b=M.charAt(0);if(b!=b.toLowerCase())O=N(O);return O};return Y.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}I.map={s:"toString"};var c=Object.freeze({__proto__:null,mod:C,clamp:S,capitalize:N,format:I}),n=function(Y){z0(B,Y);function B(){var z=Y.call(this)||this;return z._spacingX=0,z._spacingY=0,z._hexSize=0,z}var $=B.prototype;return $.draw=function z(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4],H=[(V+1)*this._spacingX,q*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(Q)this._ctx.fillStyle=w,this._fill(H[0],H[1]);if(!X)return;this._ctx.fillStyle=L;var P=[].concat(X);for(var F=0;F<P.length;F++)this._ctx.fillText(P[F],H[0],Math.ceil(H[1]))},$.computeSize=function z(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=Math.floor(Z/this._spacingX)-1,q=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[V,q]},$.computeFontSize=function z(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,q=Q/(2+1.5*(this._options.height-1)),X=Math.min(V,q),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var H=w/100;X=Math.floor(X)+1;var P=2*X/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(P)-1},$._normalizedEventToPosition=function z(Z,Q){var V;if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var q=V/this._options.height;if(Q=Math.floor(Q/q),C(Q,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,Q]},$._fill=function z(Z,Q){var V=this._hexSize,q=this._options.border,X=this._ctx;if(X.beginPath(),this._options.transpose)X.moveTo(Z-V+q,Q),X.lineTo(Z-V/2+q,Q+this._spacingX-q),X.lineTo(Z+V/2-q,Q+this._spacingX-q),X.lineTo(Z+V-q,Q),X.lineTo(Z+V/2-q,Q-this._spacingX+q),X.lineTo(Z-V/2+q,Q-this._spacingX+q),X.lineTo(Z-V+q,Q);else X.moveTo(Z,Q-V+q),X.lineTo(Z+this._spacingX-q,Q-V/2+q),X.lineTo(Z+this._spacingX-q,Q+V/2-q),X.lineTo(Z,Q+V-q),X.lineTo(Z-this._spacingX+q,Q+V/2-q),X.lineTo(Z-this._spacingX+q,Q-V/2+q),X.lineTo(Z,Q-V+q);X.fill()},$._updateSize=function z(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,q;if(Z.transpose)V="height",q="width";else V="width",q="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[q]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},B}(R),Q0=function(Y){z0(B,Y);function B(){var z=Y.call(this)||this;return z._spacingX=0,z._spacingY=0,z._canvasCache={},z}var $=B.prototype;return $.setOptions=function z(Z){Y.prototype.setOptions.call(this,Z),this._canvasCache={}},$.draw=function z(Z,Q){if(B.cache)this._drawWithCache(Z);else this._drawNoCache(Z,Q)},$._drawWithCache=function z(Z){var Q=Z[0],V=Z[1],q=Z[2],X=Z[3],L=Z[4],w=""+q+X+L,H;if(w in this._canvasCache)H=this._canvasCache[w];else{var P=this._options.border;H=document.createElement("canvas");var F=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,F.fillStyle=L,F.fillRect(P,P,H.width-P,H.height-P),q){F.fillStyle=X,F.font=this._ctx.font,F.textAlign="center",F.textBaseline="middle";var M=[].concat(q);for(var j=0;j<M.length;j++)F.fillText(M[j],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[w]=H}this._ctx.drawImage(H,Q*this._spacingX,V*this._spacingY)},$._drawNoCache=function z(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4];if(Q){var H=this._options.border;this._ctx.fillStyle=w,this._ctx.fillRect(V*this._spacingX+H,q*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!X)return;this._ctx.fillStyle=L;var P=[].concat(X);for(var F=0;F<P.length;F++)this._ctx.fillText(P[F],(V+0.5)*this._spacingX,Math.ceil((q+0.5)*this._spacingY))},$.computeSize=function z(Z,Q){var V=Math.floor(Z/this._spacingX),q=Math.floor(Q/this._spacingY);return[V,q]},$.computeFontSize=function z(Z,Q){var V=Math.floor(Z/this._options.width),q=Math.floor(Q/this._options.height),X=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=X;var w=L/100,H=w*q/V;if(H>1)q=Math.floor(q/H);return Math.floor(q/this._options.spacing)},$._normalizedEventToPosition=function z(Z,Q){return[Math.floor(Z/this._spacingX),Math.floor(Q/this._spacingY)]},$._updateSize=function z(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*Q),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},B}(R);Q0.cache=!1;var l=function(Y){z0(B,Y);function B(){var z=Y.call(this)||this;return z._colorCanvas=document.createElement("canvas"),z}var $=B.prototype;return $.draw=function z(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4],H=this._options.tileWidth,P=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(V*H,q*P,H,P);else this._ctx.fillStyle=w,this._ctx.fillRect(V*H,q*P,H,P);if(!X)return;var F=[].concat(X),M=[].concat(L),j=[].concat(w);for(var O=0;O<F.length;O++){var b=this._options.tileMap[F[O]];if(!b)throw new Error('Char "'+F[O]+'" not found in tileMap');if(this._options.tileColorize){var g=this._colorCanvas,h=g.getContext("2d");h.globalCompositeOperation="source-over",h.clearRect(0,0,H,P);var p=M[O],t=j[O];if(h.drawImage(this._options.tileSet,b[0],b[1],H,P,0,0,H,P),p!="transparent")h.fillStyle=p,h.globalCompositeOperation="source-atop",h.fillRect(0,0,H,P);if(t!="transparent")h.fillStyle=t,h.globalCompositeOperation="destination-over",h.fillRect(0,0,H,P);this._ctx.drawImage(g,V*H,q*P,H,P)}else this._ctx.drawImage(this._options.tileSet,b[0],b[1],H,P,V*H,q*P,H,P)}},$.computeSize=function z(Z,Q){var V=Math.floor(Z/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[V,q]},$.computeFontSize=function z(){throw new Error("Tile backend does not understand font size")},$._normalizedEventToPosition=function z(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},$._updateSize=function z(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},B}(R);function m(Y){var B,$;if(Y in E)B=E[Y];else{if(Y.charAt(0)=="#"){var z=Y.match(/[0-9a-f]/gi)||[],Z=z.map(function(V){return parseInt(V,16)});if(Z.length==3)B=Z.map(function(V){return V*17});else{for(var Q=0;Q<3;Q++)Z[Q+1]+=16*Z[Q],Z.splice(Q,1);B=Z}}else if($=Y.match(/rgb\(([0-9, ]+)\)/i))B=$[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else B=[0,0,0];E[Y]=B}return B.slice()}function V0(Y){var B=Y.slice();for(var $=arguments.length,z=new Array($>1?$-1:0),Z=1;Z<$;Z++)z[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++)for(var V=0;V<z.length;V++)B[Q]+=z[V][Q];return B}function x(Y){for(var B=arguments.length,$=new Array(B>1?B-1:0),z=1;z<B;z++)$[z-1]=arguments[z];for(var Z=0;Z<3;Z++)for(var Q=0;Q<$.length;Q++)Y[Z]+=$[Q][Z];return Y}function _(Y){var B=Y.slice();for(var $=arguments.length,z=new Array($>1?$-1:0),Z=1;Z<$;Z++)z[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++){for(var V=0;V<z.length;V++)B[Q]*=z[V][Q]/255;B[Q]=Math.round(B[Q])}return B}function r(Y){for(var B=arguments.length,$=new Array(B>1?B-1:0),z=1;z<B;z++)$[z-1]=arguments[z];for(var Z=0;Z<3;Z++){for(var Q=0;Q<$.length;Q++)Y[Z]*=$[Q][Z]/255;Y[Z]=Math.round(Y[Z])}return Y}function U0(Y,B,$){if($===void 0)$=0.5;var z=Y.slice();for(var Z=0;Z<3;Z++)z[Z]=Math.round(z[Z]+$*(B[Z]-Y[Z]));return z}var o=U0;function A(Y,B,$){if($===void 0)$=0.5;var z=T(Y),Z=T(B);for(var Q=0;Q<3;Q++)z[Q]+=$*(Z[Q]-z[Q]);return i(z)}var f=A;function u(Y,B){if(!(B instanceof Array))B=Math.round(G.getNormal(0,B));var $=Y.slice();for(var z=0;z<3;z++)$[z]+=B instanceof Array?Math.round(G.getNormal(0,B[z])):B;return $}function T(Y){var B=Y[0]/255,$=Y[1]/255,z=Y[2]/255,Z=Math.max(B,$,z),Q=Math.min(B,$,z),V=0,q,X=(Z+Q)/2;if(Z==Q)q=0;else{var L=Z-Q;switch(q=X>0.5?L/(2-Z-Q):L/(Z+Q),Z){case B:V=($-z)/L+($<z?6:0);break;case $:V=(z-B)/L+2;break;case z:V=(B-$)/L+4;break}V/=6}return[V,q,X]}function e(Y,B,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return Y+(B-Y)*6*$;if($<0.5)return B;if($<0.6666666666666666)return Y+(B-Y)*(0.6666666666666666-$)*6;return Y}function i(Y){var B=Y[2];if(Y[1]==0)return B=Math.round(B*255),[B,B,B];else{var $=Y[1],z=B<0.5?B*(1+$):B+$-B*$,Z=2*B-z,Q=e(Z,z,Y[0]+0.3333333333333333),V=e(Z,z,Y[0]),q=e(Z,z,Y[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(V*255),Math.round(q*255)]}}function k(Y){var B=Y.map(function($){return S($,0,255)});return"rgb("+B.join(",")+")"}function v(Y){var B=Y.map(function($){return S($,0,255).toString(16).padStart(2,"0")});return"#"+B.join("")}var E={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},a=Object.freeze({__proto__:null,fromString:m,add:V0,add_:x,multiply:_,multiply_:r,interpolate:U0,lerp:o,interpolateHSL:A,lerpHSL:f,randomize:u,rgb2hsl:T,hsl2rgb:i,toRGB:k,toHex:v}),Z0=function(Y){z0(B,Y);function B(){var z=Y.call(this)||this;z._uniforms={};try{z._gl=z._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return z}B.isSupported=function z(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var $=B.prototype;return $.schedule=function z(Z){requestAnimationFrame(Z)},$.getContainer=function z(){return this._gl.canvas},$.setOptions=function z(Z){var Q=this;Y.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Q._updateTexture(V)});else this._updateTexture(V)},$.draw=function z(Z,Q){var V=this._gl,q=this._options,X=Z[0],L=Z[1],w=Z[2],H=Z[3],P=Z[4],F=V.canvas.height-(L+1)*q.tileHeight;if(V.scissor(X*q.tileWidth,F,q.tileWidth,q.tileHeight),Q){if(q.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,r0(P));V.clear(V.COLOR_BUFFER_BIT)}if(!w)return;var M=[].concat(w),j=[].concat(P),O=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[X,L]);for(var b=0;b<M.length;b++){var g=this._options.tileMap[M[b]];if(!g)throw new Error('Char "'+M[b]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,q.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,g),q.tileColorize)V.uniform4fv(this._uniforms.tint,r0(O[b])),V.uniform4fv(this._uniforms.bg,r0(j[b]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},$.clear=function z(){var Z=this._gl;Z.clearColor.apply(Z,r0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},$.computeSize=function z(Z,Q){var V=Math.floor(Z/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[V,q]},$.computeFontSize=function z(){throw new Error("Tile backend does not understand font size")},$.eventToPosition=function z(Z,Q){var V=this._gl.canvas,q=V.getBoundingClientRect();if(Z-=q.left,Q-=q.top,Z*=V.width/q.width,Q*=V.height/q.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},$._initWebGL=function z(){var Z=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var V=O0(Q,P0,X0);return Q.useProgram(V),L0(Q),K0.forEach(function(q){return Z._uniforms[q]=Q.getUniformLocation(V,q)}),this._program=V,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},$._normalizedEventToPosition=function z(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},$._updateSize=function z(){var Z=this._gl,Q=this._options,V=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},$._updateTexture=function z(Z){Z1(this._gl,Z)},B}(D),K0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],P0=`
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
}`.trim(),X0=`
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
}`.trim();function O0(Y,B,$){var z=Y.createShader(Y.VERTEX_SHADER);if(Y.shaderSource(z,B),Y.compileShader(z),!Y.getShaderParameter(z,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(z)||"");var Z=Y.createShader(Y.FRAGMENT_SHADER);if(Y.shaderSource(Z,$),Y.compileShader(Z),!Y.getShaderParameter(Z,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(Z)||"");var Q=Y.createProgram();if(Y.attachShader(Q,z),Y.attachShader(Q,Z),Y.linkProgram(Q),!Y.getProgramParameter(Q,Y.LINK_STATUS))throw new Error(Y.getProgramInfoLog(Q)||"");return Q}function L0(Y){var B=new Float32Array([0,0,1,0,0,1,1,1]),$=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,$),Y.bufferData(Y.ARRAY_BUFFER,B,Y.STATIC_DRAW),Y.enableVertexAttribArray(0),Y.vertexAttribPointer(0,2,Y.FLOAT,!1,0,0)}function Z1(Y,B){var $=Y.createTexture();return Y.bindTexture(Y.TEXTURE_2D,$),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MAG_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MIN_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_S,Y.REPEAT),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_T,Y.REPEAT),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,0),Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,Y.RGBA,Y.UNSIGNED_BYTE,B),$}var S0={};function r0(Y){if(!(Y in S0)){var B;if(Y=="transparent")B=[0,0,0,0];else if(Y.indexOf("rgba")>-1){B=(Y.match(/[\d.]+/g)||[]).map(Number);for(var $=0;$<3;$++)B[$]=B[$]/255}else B=m(Y).map(function(z){return z/255}),B.push(1);S0[Y]=B}return S0[Y]}function FZ(Y){return"\x1B[0;48;5;"+u1(Y)+"m\x1B[2J"}function RZ(Y,B){return"\x1B[0;38;5;"+u1(Y)+";48;5;"+u1(B)+"m"}function MZ(Y,B){return"\x1B["+(B+1)+";"+(Y+1)+"H"}function u1(Y){var B=256,$=6,z=$/B,Z=m(Y),Q=Math.floor(Z[0]*z),V=Math.floor(Z[1]*z),q=Math.floor(Z[2]*z);return Q*36+V*6+q*1+16}var K6=function(Y){z0(B,Y);function B(){var z=Y.call(this)||this;return z._offset=[0,0],z._cursor=[-1,-1],z._lastColor="",z}var $=B.prototype;return $.schedule=function z(Z){setTimeout(Z,16.666666666666668)},$.setOptions=function z(Z){Y.prototype.setOptions.call(this,Z);var Q=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(q,X){return Math.floor((q-Q[X])/2)})},$.clear=function z(){process.stdout.write(FZ(this._options.bg))},$.draw=function z(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4],H=this._offset[0]+V,P=this._offset[1]+q,F=this.computeSize();if(H<0||H>=F[0])return;if(P<0||P>=F[1])return;if(H!==this._cursor[0]||P!==this._cursor[1])process.stdout.write(MZ(H,P)),this._cursor[0]=H,this._cursor[1]=P;if(Q){if(!X)X=" "}if(!X)return;var M=RZ(L,w);if(M!==this._lastColor)process.stdout.write(M),this._lastColor=M;if(X!="\t"){var j=[].concat(X);process.stdout.write(j[0])}if(this._cursor[0]++,this._cursor[0]>=F[0])this._cursor[0]=0,this._cursor[1]++},$.computeFontSize=function z(){throw new Error("Terminal backend has no notion of font size")},$.eventToPosition=function z(Z,Q){return[Z,Q]},$.computeSize=function z(){return[process.stdout.columns,process.stdout.rows]},B}(D),jZ=/%([bc]){([^}]*)}/g,b0=0,h0=1,g1=2,T1=3;function OZ(Y,B){var $={width:0,height:1},z=h1(Y,B),Z=0;for(var Q=0;Q<z.length;Q++){var V=z[Q];switch(V.type){case b0:Z+=V.value.length;break;case h0:$.height++,$.width=Math.max($.width,Z),Z=0;break}}return $.width=Math.max($.width,Z),$}function h1(Y,B){var $=[],z=0;Y.replace(jZ,function(Q,V,q,X){var L=Y.substring(z,X);if(L.length)$.push({type:b0,value:L});return $.push({type:V=="c"?g1:T1,value:q.trim()}),z=X+Q.length,""});var Z=Y.substring(z);if(Z.length)$.push({type:b0,value:Z});return CZ($,B)}function CZ(Y,B){if(!B)B=1/0;var $=0,z=0,Z=-1;while($<Y.length){var Q=Y[$];if(Q.type==h0)z=0,Z=-1;if(Q.type!=b0){$++;continue}while(z==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var V=Q.value.indexOf(`
`);if(V!=-1){Q.value=B1(Y,$,V,!0);var q=Q.value.split("");while(q.length&&q[q.length-1]==" ")q.pop();Q.value=q.join("")}if(!Q.value.length){Y.splice($,1);continue}if(z+Q.value.length>B){var X=-1;while(!0){var L=Q.value.indexOf(" ",X+1);if(L==-1)break;if(z+L>B)break;X=L}if(X!=-1)Q.value=B1(Y,$,X,!0);else if(Z!=-1){var w=Y[Z],H=w.value.lastIndexOf(" ");w.value=B1(Y,Z,H,!0),$=Z}else Q.value=B1(Y,$,B-z,!1)}else if(z+=Q.value.length,Q.value.indexOf(" ")!=-1)Z=$;$++}Y.push({type:h0});var P=null;for(var F=0;F<Y.length;F++){var M=Y[F];switch(M.type){case b0:P=M;break;case h0:if(P){var j=P.value.split("");while(j.length&&j[j.length-1]==" ")j.pop();P.value=j.join("")}P=null;break}}return Y.pop(),Y}function B1(Y,B,$,z){var Z={type:h0},Q={type:b0,value:Y[B].value.substring($+(z?1:0))};return Y.splice(B+1,0,Z,Q),Y[B].value.substring(0,$)}var AZ=Object.freeze({__proto__:null,TYPE_TEXT:b0,TYPE_NEWLINE:h0,TYPE_FG:g1,TYPE_BG:T1,measure:OZ,tokenize:h1}),x1=80,_1=25,G0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},EZ={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},NZ={hex:n,rect:Q0,tile:l,"tile-gl":Z0,term:K6},vZ={width:x1,height:_1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},n0=function(){function Y($){if($===void 0)$={};this._data={},this._dirty=!1,this._options={},$=Object.assign({},vZ,$),this.setOptions($),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var B=Y.prototype;return B.DEBUG=function $(z,Z,Q){var V=[this._options.bg,this._options.fg];this.draw(z,Z,null,null,V[Q%V.length])},B.clear=function $(){this._data={},this._dirty=!0},B.setOptions=function $(z){if(Object.assign(this._options,z),z.width||z.height||z.fontSize||z.fontFamily||z.spacing||z.layout){if(z.layout){var Z=NZ[z.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},B.getOptions=function $(){return this._options},B.getContainer=function $(){return this._backend.getContainer()},B.computeSize=function $(z,Z){return this._backend.computeSize(z,Z)},B.computeFontSize=function $(z,Z){return this._backend.computeFontSize(z,Z)},B.computeTileSize=function $(z,Z){var Q=Math.floor(z/this._options.width),V=Math.floor(Z/this._options.height);return[Q,V]},B.eventToPosition=function $(z){var Z,Q;if("touches"in z)Z=z.touches[0].clientX,Q=z.touches[0].clientY;else Z=z.clientX,Q=z.clientY;return this._backend.eventToPosition(Z,Q)},B.draw=function $(z,Z,Q,V,q){if(!V)V=this._options.fg;if(!q)q=this._options.bg;var X=z+","+Z;if(this._data[X]=[z,Z,Q,V,q],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[X]=!0},B.drawOver=function $(z,Z,Q,V,q){var X=z+","+Z,L=this._data[X];if(L)L[2]=Q||L[2],L[3]=V||L[3],L[4]=q||L[4];else this.draw(z,Z,Q,V,q)},B.drawText=function $(z,Z,Q,V){var q=null,X=null,L=z,w=Z,H=1;if(!V)V=this._options.width-z;var P=h1(Q,V);while(P.length){var F=P.shift();switch(F.type){case b0:var M=!1,j=!1,O=!1,b=!1;for(var g=0;g<F.value.length;g++){var h=F.value.charCodeAt(g),p=F.value.charAt(g);if(this._options.layout==="term"){var t=h>>8,J0=t===17||t>=46&&t<=159||t>=172&&t<=215||h>=43360&&h<=43391;if(J0){this.draw(L+0,w,p,q,X),this.draw(L+1,w,"\t",q,X),L+=2;continue}}if(O=h>65280&&h<65377||h>65500&&h<65512||h>65518,M=p.charCodeAt(0)==32||p.charCodeAt(0)==12288,b&&!O&&!M)L++;if(O&&!j)L++;this.draw(L++,w,p,q,X),j=M,b=O}break;case g1:q=F.value||null;break;case T1:X=F.value||null;break;case h0:L=z,w++,H++;break}}return H},B._tick=function $(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var z in this._data)this._draw(z,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},B._draw=function $(z,Z){var Q=this._data[z];if(Q[4]!=this._options.bg)Z=!0;this._backend.draw(Q,Z)},Y}();n0.Rect=Q0,n0.Hex=n,n0.Tile=l,n0.TileGL=Z0,n0.Term=K6;var SZ=function(){function Y($){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,$),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var z=0;z<this._options.order;z++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var B=Y.prototype;return B.clear=function $(){this._data={},this._priorValues={}},B.generate=function $(){var z=[this._sample(this._prefix)];while(z[z.length-1]!=this._boundary)z.push(this._sample(z));return this._join(z.slice(0,-1))},B.observe=function $(z){var Z=this._split(z);for(var Q=0;Q<Z.length;Q++)this._priorValues[Z[Q]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var q=Z.slice(V-this._options.order,V),X=Z[V];for(var L=0;L<q.length;L++){var w=q.slice(L);this._observeEvent(w,X)}}},B.getStats=function $(){var z=[],Z=Object.keys(this._priorValues).length;Z--,z.push("distinct samples: "+Z);var Q=Object.keys(this._data).length,V=0;for(var q in this._data)V+=Object.keys(this._data[q]).length;return z.push("dictionary size (contexts): "+Q),z.push("dictionary size (events): "+V),z.join(", ")},B._split=function $(z){return z.split(this._options.words?/\s+/:"")},B._join=function $(z){return z.join(this._options.words?" ":"")},B._observeEvent=function $(z,Z){var Q=this._join(z);if(!(Q in this._data))this._data[Q]={};var V=this._data[Q];if(!(Z in V))V[Z]=0;V[Z]++},B._sample=function $(z){z=this._backoff(z);var Z=this._join(z),Q=this._data[Z],V={};if(this._options.prior){for(var q in this._priorValues)V[q]=this._priorValues[q];for(var X in Q)V[X]+=Q[X]}else V=Q;return G.getWeightedValue(V)},B._backoff=function $(z){if(z.length>this._options.order)z=z.slice(-this._options.order);else if(z.length<this._options.order)z=this._prefix.slice(0,this._options.order-z.length).concat(z);while(!(this._join(z)in this._data)&&z.length>0)z=z.slice(1);return z},Y}(),z6=function(){function Y(){this.heap=[],this.timestamp=0}var B=Y.prototype;return B.lessThan=function $(z,Z){return z.key==Z.key?z.timestamp<Z.timestamp:z.key<Z.key},B.shift=function $(z){this.heap=this.heap.map(function(Z){var{key:Q,value:V,timestamp:q}=Z;return{key:Q+z,value:V,timestamp:q}})},B.len=function $(){return this.heap.length},B.push=function $(z,Z){this.timestamp+=1;var Q=this.len();this.heap.push({value:z,timestamp:this.timestamp,key:Z}),this.updateUp(Q)},B.pop=function $(){if(this.len()==0)throw new Error("no element to pop");var z=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return z},B.find=function $(z){for(var Z=0;Z<this.len();Z++)if(z==this.heap[Z].value)return this.heap[Z];return null},B.remove=function $(z){var Z=null;for(var Q=0;Q<this.len();Q++)if(z==this.heap[Q].value)Z=Q;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=z)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},B.parentNode=function $(z){return Math.floor((z-1)/2)},B.leftChildNode=function $(z){return 2*z+1},B.rightChildNode=function $(z){return 2*z+2},B.existNode=function $(z){return z>=0&&z<this.heap.length},B.swap=function $(z,Z){var Q=this.heap[z];this.heap[z]=this.heap[Z],this.heap[Z]=Q},B.minNode=function $(z){var Z=z.filter(this.existNode.bind(this)),Q=Z[0];for(var V=jJ(Z),q;!(q=V()).done;){var X=q.value;if(this.lessThan(this.heap[X],this.heap[Q]))Q=X}return Q},B.updateUp=function $(z){if(z==0)return;var Z=this.parentNode(z);if(this.existNode(Z)&&this.lessThan(this.heap[z],this.heap[Z]))this.swap(z,Z),this.updateUp(Z)},B.updateDown=function $(z){var Z=this.leftChildNode(z),Q=this.rightChildNode(z);if(!this.existNode(Z))return;var V=this.minNode([z,Z,Q]);if(V!=z)this.swap(z,V),this.updateDown(V)},B.debugPrint=function $(){console.log(this.heap)},Y}(),q6=function(){function Y(){this._time=0,this._events=new z6}var B=Y.prototype;return B.getTime=function $(){return this._time},B.clear=function $(){return this._events=new z6,this},B.add=function $(z,Z){this._events.push(z,Z)},B.get=function $(){if(!this._events.len())return null;var z=this._events.pop(),Z=z.key,Q=z.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return Q},B.getEventTime=function $(z){var Z=this._events.find(z);if(Z){var Q=Z.key;return Q}return},B.remove=function $(z){return this._events.remove(z)},Y}(),m1=function(){function Y(){this._queue=new q6,this._repeat=[],this._current=null}var B=Y.prototype;return B.getTime=function $(){return this._queue.getTime()},B.add=function $(z,Z){if(Z)this._repeat.push(z);return this},B.getTimeOf=function $(z){return this._queue.getEventTime(z)},B.clear=function $(){return this._queue.clear(),this._repeat=[],this._current=null,this},B.remove=function $(z){var Z=this._queue.remove(z),Q=this._repeat.indexOf(z);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==z)this._current=null;return Z},B.next=function $(){return this._current=this._queue.get(),this._current},Y}(),bZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.add=function z(Z,Q){return this._queue.add(Z,0),Y.prototype.add.call(this,Z,Q)},$.next=function z(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return Y.prototype.next.call(this)},B}(m1),IZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.add=function z(Z,Q,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),Y.prototype.add.call(this,Z,Q)},$.next=function z(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return Y.prototype.next.call(this)},B}(m1),kZ=function(Y){z0(B,Y);function B(){var z=Y.call(this)||this;return z._defaultDuration=1,z._duration=z._defaultDuration,z}var $=B.prototype;return $.add=function z(Z,Q,V){return this._queue.add(Z,V||this._defaultDuration),Y.prototype.add.call(this,Z,Q)},$.clear=function z(){return this._duration=this._defaultDuration,Y.prototype.clear.call(this)},$.remove=function z(Z){if(Z==this._current)this._duration=this._defaultDuration;return Y.prototype.remove.call(this,Z)},$.next=function z(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return Y.prototype.next.call(this)},$.setDuration=function z(Z){if(this._current)this._duration=Z;return this},B}(m1),fZ={Simple:bZ,Speed:IZ,Action:kZ},c1=function(){function Y($,z){if(z===void 0)z={};this._lightPasses=$,this._options=Object.assign({topology:8},z)}var B=Y.prototype;return B._getCircle=function $(z,Z,Q){var V=[],q,X,L;switch(this._options.topology){case 4:X=1,L=[0,1],q=[G0[8][7],G0[8][1],G0[8][3],G0[8][5]];break;case 6:q=G0[6],X=1,L=[-1,1];break;case 8:q=G0[4],X=2,L=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var w=z+L[0]*Q,H=Z+L[1]*Q;for(var P=0;P<q.length;P++)for(var F=0;F<Q*X;F++)V.push([w,H]),w+=q[P][0],H+=q[P][1];return V},Y}(),uZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.compute=function z(Z,Q,V,q){if(q(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,H,P,F;for(var M=1;M<=V;M++){var j=this._getCircle(Z,Q,M),O=360/j.length;for(var b=0;b<j.length;b++){if(H=j[b][0],P=j[b][1],L=O*(b-0.5),w=L+O,F=!this._lightPasses(H,P),this._visibleCoords(Math.floor(L),Math.ceil(w),F,X))q(H,P,M,1);if(X.length==2&&X[0]==0&&X[1]==360)return}}},$._visibleCoords=function z(Z,Q,V,q){if(Z<0){var X=this._visibleCoords(0,Q,V,q),L=this._visibleCoords(360+Z,360,V,q);return X||L}var w=0;while(w<q.length&&q[w]<Z)w++;if(w==q.length){if(V)q.push(Z,Q);return!0}var H=0;if(w%2){while(w<q.length&&q[w]<Q)w++,H++;if(H==0)return!1;if(V)if(H%2)q.splice(w-H,H,Q);else q.splice(w-H,H);return!0}else{while(w<q.length&&q[w]<Q)w++,H++;if(Z==q[w-H]&&H==1)return!1;if(V)if(H%2)q.splice(w-H,H,Z);else q.splice(w-H,H,Z,Q);return!0}},B}(c1),gZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.compute=function z(Z,Q,V,q){if(q(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,H,P,F,M;for(var j=1;j<=V;j++){var O=this._getCircle(Z,Q,j),b=O.length;for(var g=0;g<b;g++){if(L=O[g][0],w=O[g][1],P=[g?2*g-1:2*b-1,2*b],F=[2*g+1,2*b],H=!this._lightPasses(L,w),M=this._checkVisibility(P,F,H,X),M)q(L,w,j,M);if(X.length==2&&X[0][0]==0&&X[1][0]==X[1][1])return}}},$._checkVisibility=function z(Z,Q,V,q){if(Z[0]>Q[0]){var X=this._checkVisibility(Z,[Z[1],Z[1]],V,q),L=this._checkVisibility([0,1],Q,V,q);return(X+L)/2}var w=0,H=!1;while(w<q.length){var P=q[w],F=P[0]*Z[1]-Z[0]*P[1];if(F>=0){if(F==0&&!(w%2))H=!0;break}w++}var M=q.length,j=!1;while(M--){var O=q[M],b=Q[0]*O[1]-O[0]*Q[1];if(b>=0){if(b==0&&M%2)j=!0;break}}var g=!0;if(w==M&&(H||j))g=!1;else if(H&&j&&w+1==M&&M%2)g=!1;else if(w>M&&w%2)g=!1;if(!g)return 0;var h,p=M-w+1;if(p%2)if(w%2){var t=q[w];if(h=(Q[0]*t[1]-t[0]*Q[1])/(t[1]*Q[1]),V)q.splice(w,p,Q)}else{var J0=q[M];if(h=(J0[0]*Z[1]-Z[0]*J0[1])/(Z[1]*J0[1]),V)q.splice(w,p,Z)}else if(w%2){var $0=q[w],H0=q[M];if(h=(H0[0]*$0[1]-$0[0]*H0[1])/($0[1]*H0[1]),V)q.splice(w,p)}else{if(V)q.splice(w,p,Z,Q);return 1}var C0=(Q[0]*Z[1]-Z[0]*Q[1])/(Z[1]*Q[1]);return h/C0},B}(c1),I0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],TZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.compute=function z(Z,Q,V,q){q(Z,Q,0,1);for(var X=0;X<I0.length;X++)this._renderOctant(Z,Q,I0[X],V,q)},$.compute180=function z(Z,Q,V,q,X){X(Z,Q,0,1);var L=(q-1+8)%8,w=(q-2+8)%8,H=(q+1+8)%8;this._renderOctant(Z,Q,I0[w],V,X),this._renderOctant(Z,Q,I0[L],V,X),this._renderOctant(Z,Q,I0[q],V,X),this._renderOctant(Z,Q,I0[H],V,X)},$.compute90=function z(Z,Q,V,q,X){X(Z,Q,0,1);var L=(q-1+8)%8;this._renderOctant(Z,Q,I0[q],V,X),this._renderOctant(Z,Q,I0[L],V,X)},$._renderOctant=function z(Z,Q,V,q,X){this._castVisibility(Z,Q,1,1,0,q+1,V[0],V[1],V[2],V[3],X)},$._castVisibility=function z(Z,Q,V,q,X,L,w,H,P,F,M){if(q<X)return;for(var j=V;j<=L;j++){var O=-j-1,b=-j,g=!1,h=0;while(O<=0){O+=1;var p=Z+O*w+b*H,t=Q+O*P+b*F,J0=(O-0.5)/(b+0.5),$0=(O+0.5)/(b-0.5);if($0>q)continue;if(J0<X)break;if(O*O+b*b<L*L)M(p,t,j,1);if(!g){if(!this._lightPasses(p,t)&&j<L)g=!0,this._castVisibility(Z,Q,j+1,q,J0,L,w,H,P,F,M),h=$0}else{if(!this._lightPasses(p,t)){h=$0;continue}g=!1,q=h}}if(g)break}},B}(c1),hZ={DiscreteShadowcasting:uZ,PreciseShadowcasting:gZ,RecursiveShadowcasting:TZ},x0=function(){function Y($,z){if($===void 0)$=x1;if(z===void 0)z=_1;this._width=$,this._height=z}var B=Y.prototype;return B._fillMap=function $(z){var Z=[];for(var Q=0;Q<this._width;Q++){Z.push([]);for(var V=0;V<this._height;V++)Z[Q].push(z)}return Z},Y}(),xZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.create=function z(Z){var Q=this._width-1,V=this._height-1;for(var q=0;q<=Q;q++)for(var X=0;X<=V;X++){var L=q&&X&&q<Q&&X<V;Z(q,X,L?0:1)}return this},B}(x0),U6=function(Y){z0(B,Y);function B(z,Z){var Q=Y.call(this,z,Z)||this;return Q._rooms=[],Q._corridors=[],Q}var $=B.prototype;return $.getRooms=function z(){return this._rooms},$.getCorridors=function z(){return this._corridors},B}(x0),$6=function Y(){},Y1=function(Y){z0(B,Y);function B(z,Z,Q,V,q,X){var L=Y.call(this)||this;if(L._x1=z,L._y1=Z,L._x2=Q,L._y2=V,L._doors={},q!==void 0&&X!==void 0)L.addDoor(q,X);return L}B.createRandomAt=function z(Z,Q,V,q,X){var L=X.roomWidth[0],w=X.roomWidth[1],H=G.getUniformInt(L,w);L=X.roomHeight[0],w=X.roomHeight[1];var P=G.getUniformInt(L,w);if(V==1){var F=Q-Math.floor(G.getUniform()*P);return new this(Z+1,F,Z+H,F+P-1,Z,Q)}if(V==-1){var M=Q-Math.floor(G.getUniform()*P);return new this(Z-H,M,Z-1,M+P-1,Z,Q)}if(q==1){var j=Z-Math.floor(G.getUniform()*H);return new this(j,Q+1,j+H-1,Q+P,Z,Q)}if(q==-1){var O=Z-Math.floor(G.getUniform()*H);return new this(O,Q-P,O+H-1,Q-1,Z,Q)}throw new Error("dx or dy must be 1 or -1")},B.createRandomCenter=function z(Z,Q,V){var q=V.roomWidth[0],X=V.roomWidth[1],L=G.getUniformInt(q,X);q=V.roomHeight[0],X=V.roomHeight[1];var w=G.getUniformInt(q,X),H=Z-Math.floor(G.getUniform()*L),P=Q-Math.floor(G.getUniform()*w),F=H+L-1,M=P+w-1;return new this(H,P,F,M)},B.createRandom=function z(Z,Q,V){var q=V.roomWidth[0],X=V.roomWidth[1],L=G.getUniformInt(q,X);q=V.roomHeight[0],X=V.roomHeight[1];var w=G.getUniformInt(q,X),H=Z-L-1,P=Q-w-1,F=1+Math.floor(G.getUniform()*H),M=1+Math.floor(G.getUniform()*P),j=F+L-1,O=M+w-1;return new this(F,M,j,O)};var $=B.prototype;return $.addDoor=function z(Z,Q){return this._doors[Z+","+Q]=1,this},$.getDoors=function z(Z){for(var Q in this._doors){var V=Q.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},$.clearDoors=function z(){return this._doors={},this},$.addDoors=function z(Z){var Q=this._x1-1,V=this._x2+1,q=this._y1-1,X=this._y2+1;for(var L=Q;L<=V;L++)for(var w=q;w<=X;w++){if(L!=Q&&L!=V&&w!=q&&w!=X)continue;if(Z(L,w))continue;this.addDoor(L,w)}return this},$.debug=function z(){console.log("room",this._x1,this._y1,this._x2,this._y2)},$.isValid=function z(Z,Q){var V=this._x1-1,q=this._x2+1,X=this._y1-1,L=this._y2+1;for(var w=V;w<=q;w++)for(var H=X;H<=L;H++)if(w==V||w==q||H==X||H==L){if(!Z(w,H))return!1}else if(!Q(w,H))return!1;return!0},$.create=function z(Z){var Q=this._x1-1,V=this._x2+1,q=this._y1-1,X=this._y2+1,L=0;for(var w=Q;w<=V;w++)for(var H=q;H<=X;H++){if(w+","+H in this._doors)L=2;else if(w==Q||w==V||H==q||H==X)L=1;else L=0;Z(w,H,L)}},$.getCenter=function z(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},$.getLeft=function z(){return this._x1},$.getRight=function z(){return this._x2},$.getTop=function z(){return this._y1},$.getBottom=function z(){return this._y2},B}($6),d1=function(Y){z0(B,Y);function B(z,Z,Q,V){var q=Y.call(this)||this;return q._startX=z,q._startY=Z,q._endX=Q,q._endY=V,q._endsWithAWall=!0,q}B.createRandomAt=function z(Z,Q,V,q,X){var L=X.corridorLength[0],w=X.corridorLength[1],H=G.getUniformInt(L,w);return new this(Z,Q,Z+V*H,Q+q*H)};var $=B.prototype;return $.debug=function z(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},$.isValid=function z(Z,Q){var V=this._startX,q=this._startY,X=this._endX-V,L=this._endY-q,w=1+Math.max(Math.abs(X),Math.abs(L));if(X)X=X/Math.abs(X);if(L)L=L/Math.abs(L);var H=L,P=-X,F=!0;for(var M=0;M<w;M++){var j=V+M*X,O=q+M*L;if(!Q(j,O))F=!1;if(!Z(j+H,O+P))F=!1;if(!Z(j-H,O-P))F=!1;if(!F){w=M,this._endX=j-X,this._endY=O-L;break}}if(w==0)return!1;if(w==1&&Z(this._endX+X,this._endY+L))return!1;var b=!Z(this._endX+X+H,this._endY+L+P),g=!Z(this._endX+X-H,this._endY+L-P);if(this._endsWithAWall=Z(this._endX+X,this._endY+L),(b||g)&&this._endsWithAWall)return!1;return!0},$.create=function z(Z){var Q=this._startX,V=this._startY,q=this._endX-Q,X=this._endY-V,L=1+Math.max(Math.abs(q),Math.abs(X));if(q)q=q/Math.abs(q);if(X)X=X/Math.abs(X);for(var w=0;w<L;w++){var H=Q+w*q,P=V+w*X;Z(H,P,0)}return!0},$.createPriorityWalls=function z(Z){if(!this._endsWithAWall)return;var Q=this._startX,V=this._startY,q=this._endX-Q,X=this._endY-V;if(q)q=q/Math.abs(q);if(X)X=X/Math.abs(X);var L=X,w=-q;Z(this._endX+q,this._endY+X),Z(this._endX+L,this._endY+w),Z(this._endX-L,this._endY-w)},B}($6),_Z=function(Y){z0(B,Y);function B(z,Z,Q){var V=Y.call(this,z,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Q),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(y0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(y0(V)),V._isWallCallback=V._isWallCallback.bind(y0(V)),V}var $=B.prototype;return $.create=function z(Z){var Q=Date.now();while(!0){var V=Date.now();if(V-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var q=0;q<this._width;q++)for(var X=0;X<this._height;X++)Z(q,X,this._map[q][X]);return this},$._generateRooms=function z(){var Z=this._width-2,Q=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*Q)>this._options.roomDugPercentage)break;while(V)},$._generateRoom=function z(){var Z=0;while(Z<this._roomAttempts){Z++;var Q=Y1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},$._generateCorridors=function z(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var V=this._rooms[Q];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=G.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var q=G.getItem(this._connected);if(!q)break;var X=this._closestRoom(this._unconnected,q);if(!X)break;var L=this._closestRoom(this._connected,X);if(!L)break;var w=this._connectRooms(X,L);if(!w)break;if(!this._unconnected.length)return!0}}return!1},$._closestRoom=function z(Z,Q){var V=1/0,q=Q.getCenter(),X=null;for(var L=0;L<Z.length;L++){var w=Z[L],H=w.getCenter(),P=H[0]-q[0],F=H[1]-q[1],M=P*P+F*F;if(M<V)V=M,X=w}return X},$._connectRooms=function z(Z,Q){var V=Z.getCenter(),q=Q.getCenter(),X=q[0]-V[0],L=q[1]-V[1],w,H,P,F,M,j,O;if(Math.abs(X)<Math.abs(L))P=L>0?2:0,F=(P+2)%4,M=Q.getLeft(),j=Q.getRight(),O=0;else P=X>0?1:3,F=(P+2)%4,M=Q.getTop(),j=Q.getBottom(),O=1;if(w=this._placeInWall(Z,P),!w)return!1;if(w[O]>=M&&w[O]<=j){H=w.slice();var b=0;switch(F){case 0:b=Q.getTop()-1;break;case 1:b=Q.getRight()+1;break;case 2:b=Q.getBottom()+1;break;case 3:b=Q.getLeft()-1;break}H[(O+1)%2]=b,this._digLine([w,H])}else if(w[O]<M-1||w[O]>j+1){var g=w[O]-q[O],h=0;switch(F){case 0:case 1:h=g<0?3:1;break;case 2:case 3:h=g<0?1:3;break}if(F=(F+h)%4,H=this._placeInWall(Q,F),!H)return!1;var p=[0,0];p[O]=w[O];var t=(O+1)%2;p[t]=H[t],this._digLine([w,p,H])}else{var J0=(O+1)%2;if(H=this._placeInWall(Q,F),!H)return!1;var $0=Math.round((H[J0]+w[J0])/2),H0=[0,0],C0=[0,0];H0[O]=w[O],H0[J0]=$0,C0[O]=H[O],C0[J0]=$0,this._digLine([w,H0,C0,H])}if(Z.addDoor(w[0],w[1]),Q.addDoor(H[0],H[1]),O=this._unconnected.indexOf(Z),O!=-1)this._unconnected.splice(O,1),this._connected.push(Z);if(O=this._unconnected.indexOf(Q),O!=-1)this._unconnected.splice(O,1),this._connected.push(Q);return!0},$._placeInWall=function z(Z,Q){var V=[0,0],q=[0,0],X=0;switch(Q){case 0:q=[1,0],V=[Z.getLeft(),Z.getTop()-1],X=Z.getRight()-Z.getLeft()+1;break;case 1:q=[0,1],V=[Z.getRight()+1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break;case 2:q=[1,0],V=[Z.getLeft(),Z.getBottom()+1],X=Z.getRight()-Z.getLeft()+1;break;case 3:q=[0,1],V=[Z.getLeft()-1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break}var L=[],w=-2;for(var H=0;H<X;H++){var P=V[0]+H*q[0],F=V[1]+H*q[1];L.push(null);var M=this._map[P][F]==1;if(M){if(w!=H-1)L[H]=[P,F]}else if(w=H,H)L[H-1]=null}for(var j=L.length-1;j>=0;j--)if(!L[j])L.splice(j,1);return L.length?G.getItem(L):null},$._digLine=function z(Z){for(var Q=1;Q<Z.length;Q++){var V=Z[Q-1],q=Z[Q],X=new d1(V[0],V[1],q[0],q[1]);X.create(this._digCallback),this._corridors.push(X)}},$._digCallback=function z(Z,Q,V){if(this._map[Z][Q]=V,V==0)this._dug++},$._isWallCallback=function z(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},$._canBeDugCallback=function z(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},B}(U6),mZ=function(Y){z0(B,Y);function B(z,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,z,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Q),V._dirs=G0[V._options.topology],V._map=V._fillMap(0),V}var $=B.prototype;return $.randomize=function z(Z){for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)this._map[Q][V]=G.getUniform()<Z?1:0;return this},$.setOptions=function z(Z){Object.assign(this._options,Z)},$.set=function z(Z,Q,V){this._map[Z][Q]=V},$.create=function z(Z){var Q=this._fillMap(0),V=this._options.born,q=this._options.survive;for(var X=0;X<this._height;X++){var L=1,w=0;if(this._options.topology==6)L=2,w=X%2;for(var H=w;H<this._width;H+=L){var P=this._map[H][X],F=this._getNeighbors(H,X);if(P&&q.indexOf(F)!=-1)Q[H][X]=1;else if(!P&&V.indexOf(F)!=-1)Q[H][X]=1}}this._map=Q,Z&&this._serviceCallback(Z)},$._serviceCallback=function z(Z){for(var Q=0;Q<this._height;Q++){var V=1,q=0;if(this._options.topology==6)V=2,q=Q%2;for(var X=q;X<this._width;X+=V)Z(X,Q,this._map[X][Q])}},$._getNeighbors=function z(Z,Q){var V=0;for(var q=0;q<this._dirs.length;q++){var X=this._dirs[q],L=Z+X[0],w=Q+X[1];if(L<0||L>=this._width||w<0||w>=this._height)continue;V+=this._map[L][w]==1?1:0}return V},$.connect=function z(Z,Q,V){if(!Q)Q=0;var q=[],X={},L=1,w=[0,0];if(this._options.topology==6)L=2,w=[0,1];for(var H=0;H<this._height;H++)for(var P=w[H%2];P<this._width;P+=L)if(this._freeSpace(P,H,Q)){var F=[P,H];X[this._pointKey(F)]=F,q.push([P,H])}var M=q[G.getUniformInt(0,q.length-1)],j=this._pointKey(M),O={};O[j]=M,delete X[j],this._findConnected(O,X,[M],!1,Q);while(Object.keys(X).length>0){var b=this._getFromTo(O,X),g=b[0],h=b[1],p={};p[this._pointKey(g)]=g,this._findConnected(p,X,[g],!0,Q);var t=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;t.call(this,h,g,O,X,Q,V);for(var J0 in p){var $0=p[J0];this._map[$0[0]][$0[1]]=Q,O[J0]=$0,delete X[J0]}}Z&&this._serviceCallback(Z)},$._getFromTo=function z(Z,Q){var V=[0,0],q=[0,0],X,L=Object.keys(Z),w=Object.keys(Q);for(var H=0;H<5;H++){if(L.length<w.length){var P=L;q=Z[P[G.getUniformInt(0,P.length-1)]],V=this._getClosest(q,Q)}else{var F=w;V=Q[F[G.getUniformInt(0,F.length-1)]],q=this._getClosest(V,Z)}if(X=(V[0]-q[0])*(V[0]-q[0])+(V[1]-q[1])*(V[1]-q[1]),X<64)break}return[V,q]},$._getClosest=function z(Z,Q){var V=null,q=null;for(var X in Q){var L=Q[X],w=(L[0]-Z[0])*(L[0]-Z[0])+(L[1]-Z[1])*(L[1]-Z[1]);if(q==null||w<q)q=w,V=L}return V},$._findConnected=function z(Z,Q,V,q,X){while(V.length>0){var L=V.splice(0,1)[0],w=void 0;if(this._options.topology==6)w=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else w=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var H=0;H<w.length;H++){var P=this._pointKey(w[H]);if(Z[P]==null&&this._freeSpace(w[H][0],w[H][1],X)){if(Z[P]=w[H],!q)delete Q[P];V.push(w[H])}}}},$._tunnelToConnected=function z(Z,Q,V,q,X,L){var w,H;if(Q[0]<Z[0])w=Q,H=Z;else w=Z,H=Q;for(var P=w[0];P<=H[0];P++){this._map[P][w[1]]=X;var F=[P,w[1]],M=this._pointKey(F);V[M]=F,delete q[M]}if(L&&w[0]<H[0])L(w,[H[0],w[1]]);var j=H[0];if(Q[1]<Z[1])w=Q,H=Z;else w=Z,H=Q;for(var O=w[1];O<H[1];O++){this._map[j][O]=X;var b=[j,O],g=this._pointKey(b);V[g]=b,delete q[g]}if(L&&w[1]<H[1])L([H[0],w[1]],[H[0],H[1]])},$._tunnelToConnected6=function z(Z,Q,V,q,X,L){var w,H;if(Q[0]<Z[0])w=Q,H=Z;else w=Z,H=Q;var P=w[0],F=w[1];while(!(P==H[0]&&F==H[1])){var M=2;if(F<H[1])F++,M=1;else if(F>H[1])F--,M=1;if(P<H[0])P+=M;else if(P>H[0])P-=M;else if(H[1]%2)P-=M;else P+=M;this._map[P][F]=X;var j=[P,F],O=this._pointKey(j);V[O]=j,delete q[O]}if(L)L(Q,Z)},$._freeSpace=function z(Z,Q,V){return Z>=0&&Z<this._width&&Q>=0&&Q<this._height&&this._map[Z][Q]==V},$._pointKey=function z(Z){return Z[0]+"."+Z[1]},B}(x0),cZ={room:Y1,corridor:d1},dZ=function(Y){z0(B,Y);function B(z,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,z,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(y0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(y0(V)),V._isWallCallback=V._isWallCallback.bind(y0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(y0(V)),V}var $=B.prototype;return $.create=function z(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),q;do{q=0;var X=Date.now();if(X-V>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var w=L.split(","),H=parseInt(w[0]),P=parseInt(w[1]),F=this._getDiggingDirection(H,P);if(!F)continue;var M=0;do if(M++,this._tryFeature(H,P,F[0],F[1])){this._removeSurroundingWalls(H,P),this._removeSurroundingWalls(H-F[0],P-F[1]);break}while(M<this._featureAttempts);for(var j in this._walls)if(this._walls[j]>1)q++}while(this._dug/Q<this._options.dugPercentage||q);if(this._addDoors(),Z)for(var O=0;O<this._width;O++)for(var b=0;b<this._height;b++)Z(O,b,this._map[O][b]);return this._walls={},this._map=[],this},$._digCallback=function z(Z,Q,V){if(V==0||V==2)this._map[Z][Q]=0,this._dug++;else this._walls[Z+","+Q]=1},$._isWallCallback=function z(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},$._canBeDugCallback=function z(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},$._priorityWallCallback=function z(Z,Q){this._walls[Z+","+Q]=2},$._firstRoom=function z(){var Z=Math.floor(this._width/2),Q=Math.floor(this._height/2),V=Y1.createRandomCenter(Z,Q,this._options);this._rooms.push(V),V.create(this._digCallback)},$._findWall=function z(){var Z=[],Q=[];for(var V in this._walls){var q=this._walls[V];if(q==2)Q.push(V);else Z.push(V)}var X=Q.length?Q:Z;if(!X.length)return null;var L=G.getItem(X.sort());return delete this._walls[L],L},$._tryFeature=function z(Z,Q,V,q){var X=G.getWeightedValue(this._features),L=cZ[X],w=L.createRandomAt(Z,Q,V,q,this._options);if(!w.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(w.create(this._digCallback),w instanceof Y1)this._rooms.push(w);if(w instanceof d1)w.createPriorityWalls(this._priorityWallCallback),this._corridors.push(w);return!0},$._removeSurroundingWalls=function z(Z,Q){var V=G0[4];for(var q=0;q<V.length;q++){var X=V[q],L=Z+X[0],w=Q+X[1];delete this._walls[L+","+w],L=Z+2*X[0],w=Q+2*X[1],delete this._walls[L+","+w]}},$._getDiggingDirection=function z(Z,Q){if(Z<=0||Q<=0||Z>=this._width-1||Q>=this._height-1)return null;var V=null,q=G0[4];for(var X=0;X<q.length;X++){var L=q[X],w=Z+L[0],H=Q+L[1];if(!this._map[w][H]){if(V)return null;V=L}}if(!V)return null;return[-V[0],-V[1]]},$._addDoors=function z(){var Z=this._map;function Q(X,L){return Z[X][L]==1}for(var V=0;V<this._rooms.length;V++){var q=this._rooms[V];q.clearDoors(),q.addDoors(Q)}},B}(U6);function X6(Y,B,$){$[B[Y+1]]=$[Y],B[$[Y]]=B[Y+1],$[Y]=Y+1,B[Y+1]=Y}function G6(Y,B,$){$[B[Y]]=$[Y],B[$[Y]]=B[Y],$[Y]=Y,B[Y]=Y}var yZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.create=function z(Z){var Q=this._fillMap(1),V=Math.ceil((this._width-2)/2),q=0.375,X=[],L=[];for(var w=0;w<V;w++)X.push(w),L.push(w);X.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var P=0;P<V;P++){var F=2*P+1,M=H;if(Q[F][M]=0,P!=X[P+1]&&G.getUniform()>q)X6(P,X,L),Q[F+1][M]=0;if(P!=X[P]&&G.getUniform()>q)G6(P,X,L);else Q[F][M+1]=0}for(var j=0;j<V;j++){var O=2*j+1,b=H;if(Q[O][b]=0,j!=X[j+1]&&(j==X[j]||G.getUniform()>q))X6(j,X,L),Q[O+1][b]=0;G6(j,X,L)}for(var g=0;g<this._width;g++)for(var h=0;h<this._height;h++)Z(g,h,Q[g][h]);return this},B}(x0),pZ=function(Y){z0(B,Y);function B(){var z=Y.apply(this,arguments)||this;return z._stack=[],z._map=[],z}var $=B.prototype;return $.create=function z(Z){var Q=this._width,V=this._height;this._map=[];for(var q=0;q<Q;q++){this._map.push([]);for(var X=0;X<V;X++){var L=q==0||X==0||q+1==Q||X+1==V;this._map[q].push(L?1:0)}}this._stack=[[1,1,Q-2,V-2]],this._process();for(var w=0;w<Q;w++)for(var H=0;H<V;H++)Z(w,H,this._map[w][H]);return this._map=[],this},$._process=function z(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},$._partitionRoom=function z(Z){var Q=[],V=[];for(var q=Z[0]+1;q<Z[2];q++){var X=this._map[q][Z[1]-1],L=this._map[q][Z[3]+1];if(X&&L&&!(q%2))Q.push(q)}for(var w=Z[1]+1;w<Z[3];w++){var H=this._map[Z[0]-1][w],P=this._map[Z[2]+1][w];if(H&&P&&!(w%2))V.push(w)}if(!Q.length||!V.length)return;var F=G.getItem(Q),M=G.getItem(V);this._map[F][M]=1;var j=[],O=[];j.push(O);for(var b=Z[0];b<F;b++)if(this._map[b][M]=1,b%2)O.push([b,M]);O=[],j.push(O);for(var g=F+1;g<=Z[2];g++)if(this._map[g][M]=1,g%2)O.push([g,M]);O=[],j.push(O);for(var h=Z[1];h<M;h++)if(this._map[F][h]=1,h%2)O.push([F,h]);O=[],j.push(O);for(var p=M+1;p<=Z[3];p++)if(this._map[F][p]=1,p%2)O.push([F,p]);var t=G.getItem(j);for(var J0=0;J0<j.length;J0++){var $0=j[J0];if($0==t)continue;var H0=G.getItem($0);this._map[H0[0]][H0[1]]=0}this._stack.push([Z[0],Z[1],F-1,M-1]),this._stack.push([F+1,Z[1],Z[2],M-1]),this._stack.push([Z[0],M+1,F-1,Z[3]]),this._stack.push([F+1,M+1,Z[2],Z[3]])},B}(x0),lZ=function(Y){z0(B,Y);function B(z,Z,Q){var V;if(Q===void 0)Q=0;return V=Y.call(this,z,Z)||this,V._regularity=Q,V._map=[],V}var $=B.prototype;return $.create=function z(Z){var Q=this._width,V=this._height,q=this._fillMap(1);Q-=Q%2?1:2,V-=V%2?1:2;var X=0,L=0,w=0,H=0,P=0,F=!1,M=[[0,0],[0,0],[0,0],[0,0]];do{if(X=1+2*Math.floor(G.getUniform()*(Q-1)/2),L=1+2*Math.floor(G.getUniform()*(V-1)/2),!P)q[X][L]=0;if(!q[X][L]){this._randomize(M);do{if(Math.floor(G.getUniform()*(this._regularity+1))==0)this._randomize(M);F=!0;for(var j=0;j<4;j++)if(w=X+M[j][0]*2,H=L+M[j][1]*2,this._isFree(q,w,H,Q,V)){q[w][H]=0,q[X+M[j][0]][L+M[j][1]]=0,X=w,L=H,F=!1,P++;break}}while(!F)}}while(P+1<Q*V/4);for(var O=0;O<this._width;O++)for(var b=0;b<this._height;b++)Z(O,b,q[O][b]);return this._map=[],this},$._randomize=function z(Z){for(var Q=0;Q<4;Q++)Z[Q][0]=0,Z[Q][1]=0;switch(Math.floor(G.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},$._isFree=function z(Z,Q,V,q,X){if(Q<1||V<1||Q>=q||V>=X)return!1;return Z[Q][V]},B}(x0),rZ=function(Y){z0(B,Y);function B(z,Z,Q){var V=Y.call(this,z,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=V._calculateRoomSize(V._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=V._calculateRoomSize(V._height,Q.cellHeight);return V._options=Q,V}var $=B.prototype;return $.create=function z(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)Z(Q,V,this.map[Q][V]);return this},$._calculateRoomSize=function z(Z,Q){var V=Math.floor(Z/Q*0.8),q=Math.floor(Z/Q*0.25);if(q<2)q=2;if(V<2)V=2;return[q,V]},$._initRooms=function z(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:Q})}},$._connectRooms=function z(){var Z=G.getUniformInt(0,this._options.cellWidth-1),Q=G.getUniformInt(0,this._options.cellHeight-1),V,q,X,L=!1,w,H,P;do{P=[0,2,4,6],P=G.shuffle(P);do{if(L=!1,V=P.pop(),q=Z+G0[8][V][0],X=Q+G0[8][V][1],q<0||q>=this._options.cellWidth)continue;if(X<0||X>=this._options.cellHeight)continue;if(w=this.rooms[Z][Q],w.connections.length>0){if(w.connections[0][0]==q&&w.connections[0][1]==X)break}if(H=this.rooms[q][X],H.connections.length==0)H.connections.push([Z,Q]),this.connectedCells.push([q,X]),Z=q,Q=X,L=!0}while(P.length>0&&L==!1)}while(P.length>0)},$._connectUnconnectedRooms=function z(){var Z=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=G.shuffle(this.connectedCells);var V,q,X;for(var L=0;L<this._options.cellWidth;L++)for(var w=0;w<this._options.cellHeight;w++)if(V=this.rooms[L][w],V.connections.length==0){var H=[0,2,4,6];H=G.shuffle(H),X=!1;do{var P=H.pop(),F=L+G0[8][P][0],M=w+G0[8][P][1];if(F<0||F>=Z||M<0||M>=Q)continue;if(q=this.rooms[F][M],X=!0,q.connections.length==0)break;for(var j=0;j<q.connections.length;j++)if(q.connections[j][0]==L&&q.connections[j][1]==w){X=!1;break}if(X)break}while(H.length);if(X)V.connections.push([q.cellx,q.celly]);else console.log("-- Unable to connect room.")}},$._createRandomRoomConnections=function z(){},$._createRooms=function z(){var Z=this._width,Q=this._height,V=this._options.cellWidth,q=this._options.cellHeight,X=Math.floor(this._width/V),L=Math.floor(this._height/q),w,H,P=this._options.roomWidth,F=this._options.roomHeight,M,j,O;for(var b=0;b<V;b++)for(var g=0;g<q;g++){if(M=X*b,j=L*g,M==0)M=1;if(j==0)j=1;if(w=G.getUniformInt(P[0],P[1]),H=G.getUniformInt(F[0],F[1]),g>0){O=this.rooms[b][g-1];while(j-(O.y+O.height)<3)j++}if(b>0){O=this.rooms[b-1][g];while(M-(O.x+O.width)<3)M++}var h=Math.round(G.getUniformInt(0,X-w)/2),p=Math.round(G.getUniformInt(0,L-H)/2);while(M+h+w>=Z)if(h)h--;else w--;while(j+p+H>=Q)if(p)p--;else H--;M=M+h,j=j+p,this.rooms[b][g].x=M,this.rooms[b][g].y=j,this.rooms[b][g].width=w,this.rooms[b][g].height=H;for(var t=M;t<M+w;t++)for(var J0=j;J0<j+H;J0++)this.map[t][J0]=0}},$._getWallPosition=function z(Z,Q){var V,q,X;if(Q==1||Q==3){if(V=G.getUniformInt(Z.x+1,Z.x+Z.width-2),Q==1)q=Z.y-2,X=q+1;else q=Z.y+Z.height+1,X=q-1;this.map[V][X]=0}else{if(q=G.getUniformInt(Z.y+1,Z.y+Z.height-2),Q==2)V=Z.x+Z.width+1,X=V-1;else V=Z.x-2,X=V+1;this.map[X][q]=0}return[V,q]},$._drawCorridor=function z(Z,Q){var V=Q[0]-Z[0],q=Q[1]-Z[1],X=Z[0],L=Z[1],w,H,P,F,M=[],j=Math.abs(V),O=Math.abs(q),b=G.getUniform(),g=b,h=1-b;if(H=V>0?2:6,P=q>0?4:0,j<O)w=Math.ceil(O*g),M.push([P,w]),M.push([H,j]),w=Math.floor(O*h),M.push([P,w]);else w=Math.ceil(j*g),M.push([H,w]),M.push([P,O]),w=Math.floor(j*h),M.push([H,w]);this.map[X][L]=0;while(M.length>0){F=M.pop();while(F[1]>0)X+=G0[8][F[0]][0],L+=G0[8][F[0]][1],this.map[X][L]=0,F[1]=F[1]-1}},$._createCorridors=function z(){var Z=this._options.cellWidth,Q=this._options.cellHeight,V,q,X,L,w;for(var H=0;H<Z;H++)for(var P=0;P<Q;P++){V=this.rooms[H][P];for(var F=0;F<V.connections.length;F++){if(q=V.connections[F],X=this.rooms[q[0]][q[1]],X.cellx>V.cellx)L=2,w=4;else if(X.cellx<V.cellx)L=4,w=2;else if(X.celly>V.celly)L=3,w=1;else L=1,w=3;this._drawCorridor(this._getWallPosition(V,L),this._getWallPosition(X,w))}}},B}(x0),nZ={Arena:xZ,Uniform:_Z,Cellular:mZ,Digger:dZ,EllerMaze:yZ,DividedMaze:pZ,IceyMaze:lZ,Rogue:rZ},sZ=function Y(){},oZ=0.5*(Math.sqrt(3)-1),J1=(3-Math.sqrt(3))/6,aZ=function(Y){z0(B,Y);function B(z){var Z;if(z===void 0)z=256;Z=Y.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var V=0;V<z;V++)Q.push(V);Q=G.shuffle(Q),Z._perms=[],Z._indexes=[];for(var q=0;q<2*z;q++)Z._perms.push(Q[q%z]),Z._indexes.push(Z._perms[q]%Z._gradients.length);return Z}var $=B.prototype;return $.get=function z(Z,Q){var V=this._perms,q=this._indexes,X=V.length/2,L=0,w=0,H=0,P,F=(Z+Q)*oZ,M=Math.floor(Z+F),j=Math.floor(Q+F),O=(M+j)*J1,b=M-O,g=j-O,h=Z-b,p=Q-g,t,J0;if(h>p)t=1,J0=0;else t=0,J0=1;var $0=h-t+J1,H0=p-J0+J1,C0=h-1+2*J1,y1=p-1+2*J1,p1=C(M,X),l1=C(j,X),Q1=0.5-h*h-p*p;if(Q1>=0){Q1*=Q1,P=q[p1+V[l1]];var Y6=this._gradients[P];L=Q1*Q1*(Y6[0]*h+Y6[1]*p)}var V1=0.5-$0*$0-H0*H0;if(V1>=0){V1*=V1,P=q[p1+t+V[l1+J0]];var w6=this._gradients[P];w=V1*V1*(w6[0]*$0+w6[1]*H0)}var K1=0.5-C0*C0-y1*y1;if(K1>=0){K1*=K1,P=q[p1+1+V[l1+1]];var L6=this._gradients[P];H=K1*K1*(L6[0]*C0+L6[1]*y1)}return 70*(L+w+H)},B}(sZ),iZ={Simplex:aZ},B6=function(){function Y($,z,Z,Q){if(Q===void 0)Q={};if(this._toX=$,this._toY=z,this._passableCallback=Z,this._options=Object.assign({topology:8},Q),this._dirs=G0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var B=Y.prototype;return B._getNeighbors=function $(z,Z){var Q=[];for(var V=0;V<this._dirs.length;V++){var q=this._dirs[V],X=z+q[0],L=Z+q[1];if(!this._passableCallback(X,L))continue;Q.push([X,L])}return Q},Y}(),tZ=function(Y){z0(B,Y);function B(z,Z,Q,V){var q=Y.call(this,z,Z,Q,V)||this;return q._computed={},q._todo=[],q._add(z,Z,null),q}var $=B.prototype;return $.compute=function z(Z,Q,V){var q=Z+","+Q;if(!(q in this._computed))this._compute(Z,Q);if(!(q in this._computed))return;var X=this._computed[q];while(X)V(X.x,X.y),X=X.prev},$._compute=function z(Z,Q){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==Q)return;var q=this._getNeighbors(V.x,V.y);for(var X=0;X<q.length;X++){var L=q[X],w=L[0],H=L[1],P=w+","+H;if(P in this._computed)continue;this._add(w,H,V)}}},$._add=function z(Z,Q,V){var q={x:Z,y:Q,prev:V};this._computed[Z+","+Q]=q,this._todo.push(q)},B}(B6),eZ=function(Y){z0(B,Y);function B(z,Z,Q,V){var q;if(V===void 0)V={};return q=Y.call(this,z,Z,Q,V)||this,q._todo=[],q._done={},q}var $=B.prototype;return $.compute=function z(Z,Q,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var q=this._todo.shift(),X=q.x+","+q.y;if(X in this._done)continue;if(this._done[X]=q,q.x==Z&&q.y==Q)break;var L=this._getNeighbors(q.x,q.y);for(var w=0;w<L.length;w++){var H=L[w],P=H[0],F=H[1],M=P+","+F;if(M in this._done)continue;this._add(P,F,q)}}var j=this._done[Z+","+Q];if(!j)return;while(j)V(j.x,j.y),j=j.prev},$._add=function z(Z,Q,V){var q=this._distance(Z,Q),X={x:Z,y:Q,prev:V,g:V?V.g+1:0,h:q},L=X.g+X.h;for(var w=0;w<this._todo.length;w++){var H=this._todo[w],P=H.g+H.h;if(L<P||L==P&&q<H.h){this._todo.splice(w,0,X);return}}this._todo.push(X)},$._distance=function z(Z,Q){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(Q-this._fromY);case 6:var V=Math.abs(Z-this._fromX),q=Math.abs(Q-this._fromY);return q+Math.max(0,(V-q)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(Q-this._fromY))}},B}(B6),ZJ={Dijkstra:tZ,AStar:eZ},JJ=function(){function Y($){this._scheduler=$,this._lock=1}var B=Y.prototype;return B.start=function $(){return this.unlock()},B.lock=function $(){return this._lock++,this},B.unlock=function $(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var z=this._scheduler.next();if(!z)return this.lock();var Z=z.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},Y}(),QJ=function(){function Y($,z){if(z===void 0)z={};this._reflectivityCallback=$,this._options={},z=Object.assign({passes:1,emissionThreshold:100,range:10},z),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(z)}var B=Y.prototype;return B.setOptions=function $(z){if(Object.assign(this._options,z),z&&z.range)this.reset();return this},B.setFOV=function $(z){return this._fov=z,this._fovCache={},this},B.setLight=function $(z,Z,Q){var V=z+","+Z;if(Q)this._lights[V]=typeof Q=="string"?m(Q):Q;else delete this._lights[V];return this},B.clearLights=function $(){this._lights={}},B.reset=function $(){return this._reflectivityCache={},this._fovCache={},this},B.compute=function $(z){var Z={},Q={},V={};for(var q in this._lights){var X=this._lights[q];Q[q]=[0,0,0],x(Q[q],X)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(Q,V,Z),L+1==this._options.passes)continue;Q=this._computeEmitters(V,Z)}for(var w in V){var H=w.split(","),P=parseInt(H[0]),F=parseInt(H[1]);z(P,F,V[w])}return this},B._emitLight=function $(z,Z,Q){for(var V in z){var q=V.split(","),X=parseInt(q[0]),L=parseInt(q[1]);this._emitLightFromCell(X,L,z[V],Z),Q[V]=1}return this},B._computeEmitters=function $(z,Z){var Q={};for(var V in z){if(V in Z)continue;var q=z[V],X=void 0;if(V in this._reflectivityCache)X=this._reflectivityCache[V];else{var L=V.split(","),w=parseInt(L[0]),H=parseInt(L[1]);X=this._reflectivityCallback(w,H),this._reflectivityCache[V]=X}if(X==0)continue;var P=[0,0,0],F=0;for(var M=0;M<3;M++){var j=Math.round(q[M]*X);P[M]=j,F+=j}if(F>this._options.emissionThreshold)Q[V]=P}return Q},B._emitLightFromCell=function $(z,Z,Q,V){var q=z+","+Z,X;if(q in this._fovCache)X=this._fovCache[q];else X=this._updateFOV(z,Z);for(var L in X){var w=X[L],H=void 0;if(L in V)H=V[L];else H=[0,0,0],V[L]=H;for(var P=0;P<3;P++)H[P]+=Math.round(Q[P]*w)}return this},B._updateFOV=function $(z,Z){var Q=z+","+Z,V={};this._fovCache[Q]=V;var q=this._options.range;function X(L,w,H,P){var F=L+","+w,M=P*(1-H/q);if(M==0)return;V[F]=M}return this._fov.compute(z,Z,q,X.bind(this)),V},Y}(),VJ=c,KJ=a,zJ=AZ;J.Color=KJ,J.DEFAULT_HEIGHT=_1,J.DEFAULT_WIDTH=x1,J.DIRS=G0,J.Display=n0,J.Engine=JJ,J.EventQueue=q6,J.FOV=hZ,J.KEYS=EZ,J.Lighting=QJ,J.Map=nZ,J.Noise=iZ,J.Path=ZJ,J.RNG=G,J.Scheduler=fZ,J.StringGenerator=SZ,J.Text=zJ,J.Util=VJ,Object.defineProperty(J,"__esModule",{value:!0})})});var BJ=typeof window!=="undefined"?window.innerWidth:0,YJ=typeof window!=="undefined"?window.innerHeight:0;var y={cameraWidth:Math.floor(BJ/16),cameraHeight:Math.floor(YJ/16),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,showTooltip:!0,showEnergy:1,uiEffectsMaxDisplaySize:8,zoom:1},n1={WIDTH:1024,HEIGHT:1024},Y0={width:Math.floor(y.cameraWidth*(1/y.zoom)),height:Math.floor(y.cameraHeight*(1/y.zoom)),bg:"transparent",fontSize:Math.floor(y.fontSize*y.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function D6(J,K){let U=J.entities[K];return`DEBUG: ${K} at ${U.mapId},${U.x},${U.y}`}class w1{name;description;energyDelta;constructor(J,K,U=0){this.name=J,this.description=K,this.energyDelta=U}}class z1{name;description;constructor(J,K){this.name=J,this.description=K}}class M0{key;description;constructor(J,K){this.key=J,this.description=K}}class k0{name;description;tooltip;icon;constructor(J,K,U="",G){this.name=J,this.description=K,this.tooltip=U,this.icon=G}}class D0{name;description;icon;color;energyMax;unlockCondition;constructor(J,K,U,G=100){this.name=J,this.description=K,this.icon=U,this.energyMax=G,this.color="white",this.unlockCondition=null}}class s0{name;description;color;constructor(J,K,U){this.name=J,this.description=K,this.color=U}}class B0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(J,K,U,G="cyberyellow",D=0,R=0,C=0,S=0,N=0,I=[]){this.name=J,this.description=K,this.icon=U,this.color=G,this.energyDelta=D,this.matter=R,this.gold=C,this.damage=S,this.energyCost=N,this.effects=I}}class s{name;description;tooltip;icon;fg;bg;energyDelta;constructor(J,K,U="",G=null,D="white",R="black",C=0){this.name=J,this.description=K,this.tooltip=U,this.icon=G,this.fg=D,this.bg=R,this.energyDelta=C}}var W={actions:{Enter:new w1("Enter","Enter a portal or plant atmosphere"),Launch:new w1("Launch","Launch into space",-10),Wait:new w1("Wait","Wait one turn in place")},ais:{aggrorange:new z1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new z1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new z1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new z1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",red:"#f00",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M0("N","Move/interact/combat north"),E:new M0("E","Move/interact/combat east"),S:new M0("S","Move/interact/combat south"),W:new M0("W","Move/interact/combat west"),A:new M0("A","Primary action, confirm"),B:new M0("B","Take a break, cancel"),"1":new M0("1","Secondary action, first quick slot"),"2":new M0("2","Tertiary action, second quick slot"),M:new M0("M","Menu"),"#":new M0("#","Open prompt")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{BioAbsorber:new k0("BioAbsorber","Gain energy while on trees","[Bio Absorber]: Regenerates energy on trees","fx_ba"),Recharger:new k0("Recharger","Doubles energy gained from chargepads","[Recharger]: Doubles energy gained from chargepads","fx_re"),RockCrusher:new k0("RockCrusher","Mines rock","[Rock Crusher]: Enables rock mining","fx_rc"),Screwing:new k0("Screwing","Unscrews the sewer portal covers","[Screwing]: Opens sewer gates","fx_sc"),WallCrusher:new k0("WallCrusher","Tears down weak walls","[Wall Crusher]: Enables weak wall destruction","fx_wc"),WaterImmunity:new k0("WaterImmunity","No damage taken from water","[Water Immunity]: Prevents water damage","fx_wi"),WaterShield:new k0("WaterShield","Reduces damage taken from water","[Water Shield]: Reduces water damage","fx_ws")},entities:{movableboulder:new D0("Boulder","A movable rock","o",2),movablebox:new D0("Box","A movable box","x",2),Spirit:new D0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new D0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new D0("WorkBot","Basic factory worker","B"),Cleaner:new D0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new D0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new D0("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new D0("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new D0("Graffiti","Writing on the wall","zy",2),Valkyrie:new D0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new D0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new D0("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new s0("Critters","Small pests","cyberyellow"),Enraged:new s0("Enraged","Always hostile faction","cybermagenta"),Spirits:new s0("Spirits","Default player faction","white"),Pyrates:new s0("Pyrates","Default enemy faction","cybermagenta"),Guardians:new s0("Guardians","Bot station guardians","cybercyan")},items:{battery:new B0("Battery","Increases maximum energy","b","cyberyellow",10),chest:new B0("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new B0("Energy","Energy pack","e","cyberyellow",10),gold:new B0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new B0("Goo","A minor matter source","goo","gray",0,1),junk:new B0("Junk","Broken bot","%","gray",0,1),matter:new B0("Matter","A pile of stuff","m","gray",0,100),broom:new B0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),cheat:new B0("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","RockCrusher","Screwing","WallCrusher","WaterShield"]),hammer:new B0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["WallCrusher"]),pickaxe:new B0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["RockCrusher"]),ratbite:new B0("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["WaterImmunity"]),shocker:new B0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new B0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["WaterShield"]),upgradeBioAbsorber:new B0("Bio Absorber Upgrade","Grants [BioAbsorber] effect","iu_ba","cyberyellow",0,0,0,0,0,["BioAbsorber"]),wrench:new B0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},maps:{bot_bar:`!
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
!!spawn 4 11 AeroBot faction=Spirits dialog=bot_dormitory_aerobot_up
!!spawn 23 27 AeroBot faction=Spirits dialog=bot_dormitory_aerobot_down ai=interactenrage equip=shocker
!!spawn 8 18 WorkBot faction=Spirits dialog=bot_dormitory_workbot_left ai=interactenrage
!!spawn 26 18 WorkBot faction=Spirits dialog=bot_dormitory_workbot_right
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
!!spawn 40 19 WorkBot faction=Spirits dialog=bot_factory_workbot_wrench
!!spawn 15 18 WorkBot faction=Spirits dialog=bot_factory_workbot_workwork
!!spawn 25 18 WorkBot faction=Spirits dialog=bot_factory_workbot_assembly
!!spawn 43 29 WorkBot faction=Spirits dialog=bot_factory_workbot_sewers
!!spawn 1 19 WorkBot faction=Spirits dialog=bot_factory_workbot_drain
!!spawn 35 3 WorkBot faction=Spirits name=ForeBot dialog=bot_factory_workbot_forebot equip=wrench ai=interactenrage
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
##O#############################################
`,bot_prison:`!
!!id bot_prison
!!size 48 34
!!spawn 18 11 Cleaner faction=Guardians ai=aggrorange
!!spawn 17 2 Cleaner faction=Guardians ai=aggrorange
!!spawn 24 5 Cleaner faction=Guardians ai=aggrorange
!!spawn 29 24 Cleaner faction=Guardians ai=aggrorangeshort
!!spawn 34 22 AeroBot faction=Spirits dialog=bot_prison_aerobot
!!spawn 9 22 WorkBot faction=Spirits dialog=bot_prison_workbot
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
_##############################################_
`,bot_stadium:`!
!!id bot_stadium
!!size 48 16
!!spawn 26 2 WorkBot faction=Spirits dialog=bot_stadium_botracing
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
##############################z#
`,bot_station_sewers:`!
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
!!spawn 4 26 Spirit faction=Spirits dialog=manual_spirit
!!spawn 4 27 AeroBot faction=Spirits dialog=manual_aerobot
!!spawn 4 28 WorkBot faction=Spirits dialog=manual_workbot
!!spawn 4 29 Cleaner faction=Spirits dialog=manual_cleaner
!!spawn 4 30 Pioneer faction=Spirits dialog=manual_pioneer equip=hammer ai=interactenrage
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
!!O portal botmos_hull_selection 1 19
!!Q portal solarsystem=1337 448 448
!!P portal solarsystem=1337 30 17
#O##################
#=.................#
#...............Q#.#
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
`,shop_instance:`!
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
`,square_falcon:`!
!!id square_falcon
!!size 7 6
!!_ voidtrue
!!# wall
!!O portalclosed
######_
#######
####O__
#######
######_
__##___
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:y.showGrid?new s("void","Just nothing here","",".","gray"):new s("void","Just nothing here"),voidtrue:new s("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new s("voidhidden","Looks like a wall, but isn't!","","#","gray","black"),water:new s("water","Rust and other dangers await","Water","~","cybercyan","cyberblue",-2),watersewage:new s("watersewage","Rust, goo and other dangers await","Sewage Water","~~","cyberyellow","cybergreen",-4),drain:new s("drain","Drains gold, matter and some of your energy","Drain","*","cybermagenta","black",-5),rock:new s("rock","Hidden treasures may await","Rock","'","white","gray"),tree:new s("tree","Lots of trees make a forest","Tree","t","brown","black"),wall:new s("wall","A strong wall","","#","gray","black"),wallstatueaerobot:new s("wallstatueaerobot","A small statue looking like an AeroBot","","sa","gray","black"),wallstatuecleaner:new s("wallstatuecleaner","A small statue looking like a Cleaner","","sc","gray","black"),wallstatuepioneer:new s("wallstatuepioneer","A small statue looking like a Pioneer","","sp","gray","black"),wallstatueworkbot:new s("wallstatueworkbot","A small statue looking like a WorkBot","","sb","gray","black"),wallweak:new s("wallweak","A weakened wall","Weak Wall","+","gray","black"),chargepad:new s("chargepad","Recharges energy and health","Chargepad","=","cyberyellow","black",2),movenorth:new s("movenorth","Moves you north","","^^","cyberyellow"),moveeast:new s("moveeast","Moves you east","",">>","cyberyellow"),movesouth:new s("movesouth","Moves you south","","vv","cyberyellow"),movewest:new s("movewest","Moves you west","","<<","cyberyellow"),portal:new s("portal","Gateway to another map","Portal","O","cyberyellow","gray"),portalclosed:new s("portalclosed","Closed gateway to another map","Closed Portal","Oc","black","gray"),portalhidden:new s("portalhidden","Hidden gateway to another map","","#","gray","black"),portallauncher:new s("portallauncher","Launches into space","Launch to Space","O","cyberyellow","gray"),portalsewers:new s("portalsewers","Needs some tool to open","Sewer Gate","#~","gray","black"),portalstartworkbot:new s("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB","white"),portalstartaerobot:new s("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA","white"),"_portalstart?":new s("_portalstart?","Not unlocked, yet!","?","O?","white"),spacerock:new s("spacerock","Mountains as seen from space, non-blocking!","","'s","white","gray"),spacetree:new s("spacetree","Forest as seen from space","","ts","brown","darkgray"),spacewater:new s("spacewater","Water as seen from space, not dangerous!","","~s","cybercyan","cyberblue"),spacevoid:new s("spacevoid","Void/ground as seen from space","",".s","darkgray","darkgray"),spacevoidstarwhite:new s("spacevoidstarwhite","Space with a white background star","",".f","white"),spacevoidstaryellow:new s("spacevoidstaryellow","Space with a yellow background star","",".y","cyberyellow"),star:new s("star","It's hot, really hot!","Star","§","cyberyellow","cyberyellow",-100),terminal:new s("terminal","A computer terminal","Terminal","$","cyberyellow"),tv:new s("tv","A big billboard screen","TV","!","black","cyberyellow")},uitexts:{}};function P6(J,K){return Object.values(J.effects[K])}function f0(J,K,U){return!!J.effects[K]&&J.effects[K].hasOwnProperty(U.name)}function W6(J){return J}function F6(J,K){if(K.oldEquippedItem){let U=K.oldEquippedItem.type;for(let G of U.effects){let D=W.effects[G];if(!!J.effects[K.entityId][D.name]&&J.effects[K.entityId][D.name].source===U)delete J.effects[K.entityId][D.name]}}if(K.newEquippedItem){let U=K.newEquippedItem.type;for(let G of U.effects){let D=W.effects[G];J.effects[K.entityId][D.name]={type:D,source:U}}}return J}function R6(J,K){let U=K.type;for(let G of U.effects)J.effects[K.entityId][G]={type:W.effects[G]};return J}function M6(J){if(Object.hasOwn(W.dialogs,J))return W.dialogs[J];return`FIXME: ${J} needs localization!`}function w0(J,K){return J.chatLog.push(K),J.chatLog=J.chatLog.slice(-y.chatLogMaxSize),J}function A0(J,K,U,G,D=0,R=0,C={}){let S={id:K,type:U,mapId:G,x:D,y:R,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:C};return J=D1(J,S,U),J.entities[S.id]=S,J}function L1(J,K){return J.entities[K]=void 0,delete J.entities[K],J.tools[K]=void 0,delete J.tools[K],J.effects[K]=void 0,delete J.effects[K],J}function _0(J,K){let U=Object.keys(J.entities),G=[];for(let D=0;D<U.length;D++){let R=J.entities[U[D]];if(R.mapId===K)G.push(R)}return G}function H1(J,K,U,G){let D=_0(J,K).filter((R)=>R.x===U&&R.y===G);if(D.length>0)return D[0];return null}function D1(J,K,U){if(K.type=U,K.energy=U.energyMax,K.energyMax=U.energyMax,K.gold=0,K.matter=0,!j0(K))J.tools[K.id]=void 0;return J.effects[K.id]={},J}function j6(J,K,U){if(K===U)return J;if(K.options.faction===U.options.faction||s1(U)){if(U.options.dialog){let G=U?.options?.name?U.options.name:U.type.name;J=w0(J,G+": "+M6(U.options.dialog)),U.interactions++}}else{let G=K.id,D=U.id;J._combatQueue.push({entityId:G,otherEntityId:D})}if(U.interactions>=3&&U.options?.ai===W.ais.interactenrage)U.options.faction=W.factions.Enraged;return J}function j0(J){return J.type===W.entities.movableboulder||J.type===W.entities.movablebox}function s1(J){return J.type===W.entities.Graffiticyan||J.type===W.entities.Graffitimagenta||J.type===W.entities.Graffitiyellow}function P1(J,K){let U={A:W.actions.Wait,B:W.actions.Wait};if(!!J.lastSpacePositionByEntity[K.id]&&K.energy>Math.abs(W.actions.Launch.energyDelta))U.A=W.actions.Launch;let D=J.maps[K.mapId].getTile(K.x,K.y);if(!!D.options.mapId&&"x"in D.options&&"y"in D.options)U.A=W.actions.Enter;return U}function o0(J,K,U){let G=J._eventSubscribers[K];if(G)for(let D=0;D<G.length;D++){let R=G[D];J=R(J,U)}return J}function q1(J,K,U){if(K in J._eventSubscribers);else J._eventSubscribers[K]=[];return J._eventSubscribers[K].push(U),J}function U1(J,K,U,G=0,D=0){let C={id:W1(U,G,D),type:K,mapId:U,x:G,y:D,energy:K.energyDelta,gold:K.gold,matter:K.matter};return J.items[C.id]=C,J}function C6(J,K,U,G=0,D=0){let R=W.items.junk,S={id:W1(U,G,D),type:R,mapId:U,x:G,y:D,energy:R.energyDelta,gold:R.gold,matter:K};return J.items[S.id]=S,J}function $1(J,K,U,G=0,D=0,R,C){let N={id:W1(U,G,D),type:K,mapId:U,x:G,y:D,energy:K.energyDelta,gold:R,matter:C};return J.items[N.id]=N,J}function W1(J,K,U){return"item,"+J+","+K+","+U}function o1(J,K){return J.items[K]=void 0,delete J.items[K],J}function F1(J,K){let U=Object.keys(J.items),G=[];for(let D=0;D<U.length;D++){let R=J.items[U[D]];if(R.mapId===K)G.push(R)}return G}function R1(J,K,U,G){let D=W1(K,U,G);if(D in J.items)return J.items[D];return null}function M1(J,K){return J.tools[K]}function A6(J,K,U){if(j0(K))return J;if(!LJ(K,U))return J;if(wJ(U))J=a1(J,K.id,U.type);else{if(U.type===W.items.battery)K.energyMax+=U.energy;if(J._energyQueue.push({entityId:K.id,energyDelta:U.energy}),K.id.startsWith("player"))J=w0(J,`Picked up ${U.type.name}.`);let G={entityId:K.id,type:U.type};J=o0(J,2,G)}return K.gold+=U.gold,K.matter+=U.matter,o1(J,U.id),J}function a1(J,K,U){let G=J.tools[K],D=void 0;if(U){if(D={type:U},J.tools[K]=D,K.startsWith("player"))J=w0(J,`Equipped ${U.name}.`)}else if(G){let C=G.type;if(J.tools[K]=D,K.startsWith("player"))J=w0(J,`Unequipped ${C}.`)}let R={entityId:K,oldEquippedItem:G,newEquippedItem:D};return J=o0(J,1,R),J}function wJ(J){return J.type.energyCost<0}function LJ(J,K){return J.gold+K.gold>=0&&J.matter+K.matter>=0}/*!
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
 */var HJ=function(J){var K={};function U(G){if(K[G])return K[G].exports;var D=K[G]={i:G,l:!1,exports:{}};return J[G].call(D.exports,D,D.exports,U),D.l=!0,D.exports}return U.m=J,U.c=K,U.d=function(G,D,R){U.o(G,D)||Object.defineProperty(G,D,{enumerable:!0,get:R})},U.r=function(G){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(G,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(G,"__esModule",{value:!0})},U.t=function(G,D){if(1&D&&(G=U(G)),8&D)return G;if(4&D&&typeof G=="object"&&G&&G.__esModule)return G;var R=Object.create(null);if(U.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:G}),2&D&&typeof G!="string")for(var C in G)U.d(R,C,function(S){return G[S]}.bind(null,C));return R},U.n=function(G){var D=G&&G.__esModule?function(){return G.default}:function(){return G};return U.d(D,"a",D),D},U.o=function(G,D){return Object.prototype.hasOwnProperty.call(G,D)},U.p="/bin/",U(U.s=0)}([function(J,K,U){var G={},D=U(1),R=U(2),C=U(3);J.exports=G;var S=1;G.js=function(){var N,I,c,n=!1,Q0={},l={},m={},V0={},x=!0,_={},r=[],U0=Number.MAX_VALUE,o=!1;this.setAcceptableTiles=function(k){k instanceof Array?c=k:!isNaN(parseFloat(k))&&isFinite(k)&&(c=[k])},this.enableSync=function(){n=!0},this.disableSync=function(){n=!1},this.enableDiagonals=function(){o=!0},this.disableDiagonals=function(){o=!1},this.setGrid=function(k){N=k;for(var v=0;v<N.length;v++)for(var E=0;E<N[0].length;E++)l[N[v][E]]||(l[N[v][E]]=1)},this.setTileCost=function(k,v){l[k]=v},this.setAdditionalPointCost=function(k,v,E){m[v]===void 0&&(m[v]={}),m[v][k]=E},this.removeAdditionalPointCost=function(k,v){m[v]!==void 0&&delete m[v][k]},this.removeAllAdditionalPointCosts=function(){m={}},this.setDirectionalCondition=function(k,v,E){V0[v]===void 0&&(V0[v]={}),V0[v][k]=E},this.removeAllDirectionalConditions=function(){V0={}},this.setIterationsPerCalculation=function(k){U0=k},this.avoidAdditionalPoint=function(k,v){Q0[v]===void 0&&(Q0[v]={}),Q0[v][k]=1},this.stopAvoidingAdditionalPoint=function(k,v){Q0[v]!==void 0&&delete Q0[v][k]},this.enableCornerCutting=function(){x=!0},this.disableCornerCutting=function(){x=!1},this.stopAvoidingAllAdditionalPoints=function(){Q0={}},this.findPath=function(k,v,E,a,Z0){var K0=function(S0){n?Z0(S0):setTimeout(function(){Z0(S0)})};if(c===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(k<0||v<0||E<0||a<0||k>N[0].length-1||v>N.length-1||E>N[0].length-1||a>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(k!==E||v!==a){for(var P0=N[a][E],X0=!1,O0=0;O0<c.length;O0++)if(P0===c[O0]){X0=!0;break}if(X0!==!1){var L0=new D;L0.openList=new C(function(S0,r0){return S0.bestGuessDistance()-r0.bestGuessDistance()}),L0.isDoneCalculating=!1,L0.nodeHash={},L0.startX=k,L0.startY=v,L0.endX=E,L0.endY=a,L0.callback=K0,L0.openList.push(e(L0,L0.startX,L0.startY,null,1));var Z1=S++;return _[Z1]=L0,r.push(Z1),Z1}K0(null)}else K0([])},this.cancelPath=function(k){return k in _&&(delete _[k],!0)},this.calculate=function(){if(r.length!==0&&N!==void 0&&c!==void 0)for(I=0;I<U0;I++){if(r.length===0)return;n&&(I=0);var k=r[0],v=_[k];if(v!==void 0)if(v.openList.size()!==0){var E=v.openList.pop();if(v.endX!==E.x||v.endY!==E.y)E.list=0,E.y>0&&A(v,E,0,-1,1*T(E.x,E.y-1)),E.x<N[0].length-1&&A(v,E,1,0,1*T(E.x+1,E.y)),E.y<N.length-1&&A(v,E,0,1,1*T(E.x,E.y+1)),E.x>0&&A(v,E,-1,0,1*T(E.x-1,E.y)),o&&(E.x>0&&E.y>0&&(x||f(N,c,E.x,E.y-1,E)&&f(N,c,E.x-1,E.y,E))&&A(v,E,-1,-1,1.4*T(E.x-1,E.y-1)),E.x<N[0].length-1&&E.y<N.length-1&&(x||f(N,c,E.x,E.y+1,E)&&f(N,c,E.x+1,E.y,E))&&A(v,E,1,1,1.4*T(E.x+1,E.y+1)),E.x<N[0].length-1&&E.y>0&&(x||f(N,c,E.x,E.y-1,E)&&f(N,c,E.x+1,E.y,E))&&A(v,E,1,-1,1.4*T(E.x+1,E.y-1)),E.x>0&&E.y<N.length-1&&(x||f(N,c,E.x,E.y+1,E)&&f(N,c,E.x-1,E.y,E))&&A(v,E,-1,1,1.4*T(E.x-1,E.y+1)));else{var a=[];a.push({x:E.x,y:E.y});for(var Z0=E.parent;Z0!=null;)a.push({x:Z0.x,y:Z0.y}),Z0=Z0.parent;a.reverse();var K0=a;v.callback(K0),delete _[k],r.shift()}}else v.callback(null),delete _[k],r.shift();else r.shift()}};var A=function(k,v,E,a,Z0){var K0=v.x+E,P0=v.y+a;if((Q0[P0]===void 0||Q0[P0][K0]===void 0)&&f(N,c,K0,P0,v)){var X0=e(k,K0,P0,v,Z0);X0.list===void 0?(X0.list=1,k.openList.push(X0)):v.costSoFar+Z0<X0.costSoFar&&(X0.costSoFar=v.costSoFar+Z0,X0.parent=v,k.openList.updateItem(X0))}},f=function(k,v,E,a,Z0){var K0=V0[a]&&V0[a][E];if(K0){var P0=u(Z0.x-E,Z0.y-a);if(!function(){for(var O0=0;O0<K0.length;O0++)if(K0[O0]===P0)return!0;return!1}())return!1}for(var X0=0;X0<v.length;X0++)if(k[a][E]===v[X0])return!0;return!1},u=function(k,v){if(k===0&&v===-1)return G.TOP;if(k===1&&v===-1)return G.TOP_RIGHT;if(k===1&&v===0)return G.RIGHT;if(k===1&&v===1)return G.BOTTOM_RIGHT;if(k===0&&v===1)return G.BOTTOM;if(k===-1&&v===1)return G.BOTTOM_LEFT;if(k===-1&&v===0)return G.LEFT;if(k===-1&&v===-1)return G.TOP_LEFT;throw new Error("These differences are not valid: "+k+", "+v)},T=function(k,v){return m[v]&&m[v][k]||l[N[v][k]]},e=function(k,v,E,a,Z0){if(k.nodeHash[E]!==void 0){if(k.nodeHash[E][v]!==void 0)return k.nodeHash[E][v]}else k.nodeHash[E]={};var K0=i(v,E,k.endX,k.endY);if(a!==null)var P0=a.costSoFar+Z0;else P0=0;var X0=new R(a,v,E,P0,K0);return k.nodeHash[E][v]=X0,X0},i=function(k,v,E,a){var Z0,K0;return o?(Z0=Math.abs(k-E))<(K0=Math.abs(v-a))?1.4*Z0+K0:1.4*K0+Z0:(Z0=Math.abs(k-E))+(K0=Math.abs(v-a))}},G.TOP="TOP",G.TOP_RIGHT="TOP_RIGHT",G.RIGHT="RIGHT",G.BOTTOM_RIGHT="BOTTOM_RIGHT",G.BOTTOM="BOTTOM",G.BOTTOM_LEFT="BOTTOM_LEFT",G.LEFT="LEFT",G.TOP_LEFT="TOP_LEFT"},function(J,K){J.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(J,K){J.exports=function(U,G,D,R,C){this.parent=U,this.x=G,this.y=D,this.costSoFar=R,this.simpleDistanceToTarget=C,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(J,K,U){J.exports=U(4)},function(J,K,U){var G,D,R;(function(){var C,S,N,I,c,n,Q0,l,m,V0,x,_,r,U0,o;N=Math.floor,V0=Math.min,S=function(A,f){return A<f?-1:A>f?1:0},m=function(A,f,u,T,e){var i;if(u==null&&(u=0),e==null&&(e=S),u<0)throw new Error("lo must be non-negative");for(T==null&&(T=A.length);u<T;)e(f,A[i=N((u+T)/2)])<0?T=i:u=i+1;return[].splice.apply(A,[u,u-u].concat(f)),f},n=function(A,f,u){return u==null&&(u=S),A.push(f),U0(A,0,A.length-1,u)},c=function(A,f){var u,T;return f==null&&(f=S),u=A.pop(),A.length?(T=A[0],A[0]=u,o(A,0,f)):T=u,T},l=function(A,f,u){var T;return u==null&&(u=S),T=A[0],A[0]=f,o(A,0,u),T},Q0=function(A,f,u){var T;return u==null&&(u=S),A.length&&u(A[0],f)<0&&(f=(T=[A[0],f])[0],A[0]=T[1],o(A,0,u)),f},I=function(A,f){var u,T,e,i,k,v;for(f==null&&(f=S),k=[],T=0,e=(i=function(){v=[];for(var E=0,a=N(A.length/2);0<=a?E<a:E>a;0<=a?E++:E--)v.push(E);return v}.apply(this).reverse()).length;T<e;T++)u=i[T],k.push(o(A,u,f));return k},r=function(A,f,u){var T;if(u==null&&(u=S),(T=A.indexOf(f))!==-1)return U0(A,0,T,u),o(A,T,u)},x=function(A,f,u){var T,e,i,k,v;if(u==null&&(u=S),!(e=A.slice(0,f)).length)return e;for(I(e,u),i=0,k=(v=A.slice(f)).length;i<k;i++)T=v[i],Q0(e,T,u);return e.sort(u).reverse()},_=function(A,f,u){var T,e,i,k,v,E,a,Z0,K0;if(u==null&&(u=S),10*f<=A.length){if(!(i=A.slice(0,f).sort(u)).length)return i;for(e=i[i.length-1],k=0,E=(a=A.slice(f)).length;k<E;k++)u(T=a[k],e)<0&&(m(i,T,0,null,u),i.pop(),e=i[i.length-1]);return i}for(I(A,u),K0=[],v=0,Z0=V0(f,A.length);0<=Z0?v<Z0:v>Z0;0<=Z0?++v:--v)K0.push(c(A,u));return K0},U0=function(A,f,u,T){var e,i,k;for(T==null&&(T=S),e=A[u];u>f&&T(e,i=A[k=u-1>>1])<0;)A[u]=i,u=k;return A[u]=e},o=function(A,f,u){var T,e,i,k,v;for(u==null&&(u=S),e=A.length,v=f,i=A[f],T=2*f+1;T<e;)(k=T+1)<e&&!(u(A[T],A[k])<0)&&(T=k),A[f]=A[T],T=2*(f=T)+1;return A[f]=i,U0(A,v,f,u)},C=function(){function A(f){this.cmp=f!=null?f:S,this.nodes=[]}return A.push=n,A.pop=c,A.replace=l,A.pushpop=Q0,A.heapify=I,A.updateItem=r,A.nlargest=x,A.nsmallest=_,A.prototype.push=function(f){return n(this.nodes,f,this.cmp)},A.prototype.pop=function(){return c(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(f){return this.nodes.indexOf(f)!==-1},A.prototype.replace=function(f){return l(this.nodes,f,this.cmp)},A.prototype.pushpop=function(f){return Q0(this.nodes,f,this.cmp)},A.prototype.heapify=function(){return I(this.nodes,this.cmp)},A.prototype.updateItem=function(f){return r(this.nodes,f,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var f;return(f=new A).nodes=this.nodes.slice(0),f},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),D=[],(R=typeof(G=function(){return C})=="function"?G.apply(K,D):G)===void 0||(J.exports=R)}).call(this)}]);function E6(J,K,U,G,D){let R=new HJ.js;R.setGrid(J),R.setAcceptableTiles([0]),R.enableSync();let C=null;return R.findPath(K,U,G,D,function(S){C=S}),R.calculate(),C}function W0(){return"player"}function N6(J,K,U,G){return Math.abs(J-U)+Math.abs(K-G)}function j1(J){return[...Array(J).keys()]}function v6(J){let K=DJ(J),U=J.entities[W0()];for(let G=0;G<K.length;G++){let D=K[G],R=J.entities[D],C=J._AIs[D],S=N6(U.x,U.y,R.x,R.y);if(U.options.faction!==R.options.faction&&S<=C.aggroRange){let N=J.maps[J.currentMapId].asMovementMap(),I=E6(N,R.x,R.y,U.x,U.y);if(I){if(I=I.slice(1),I.length>S)I=null}C.path=I}if(!!R.message&&R.message.includes("OBEY"));}for(let G=0;G<K.length;G++){let D=K[G],R=J.entities[D],C=J._AIs[D];if(C.path){let S=C.path[0],N=S.x-R.x,I=S.y-R.y;J=F0(J,R,N,I)}}return J}function DJ(J){let K=_0(J,J.currentMapId),U=[];for(let G=0;G<K.length;G++){let D=K[G];if(D.options.ai)U.push(D.id)}return U}function S6(J,K,U){let G=J.entities[K],D=8;switch(U){case W.ais.aggrorange:D=8;break;case W.ais.aggrorangeshort:D=2;break;case W.ais.guardian:D=1;break;case W.ais.interactenrage:D=2;break;default:}return J._AIs[K]={entityId:K,type:U,aggroRange:D,startMap:G.mapId,startX:G.x,startY:G.y,path:null},J}function O1(J,K){return J._AIs[K]=void 0,delete J._AIs[K],J}function I6(J){let K=void 0;while(typeof(K=J._despawnQueue.shift())!=="undefined")J=L1(J,K),J=O1(J,K);return J}function k6(J){return J}class E0{mapId;x;y;entityOrItemName;options;constructor(J,K,U,G,D={}){this.mapId=J,this.x=K,this.y=U,this.entityOrItemName=G,this.options=D}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function u0(J,K){if(PJ(K.entityOrItemName)){let U=K.options;if(Object.hasOwn(U,"ai"))U.ai=W.ais[U.ai];if(Object.hasOwn(U,"faction"))U.faction=W.factions[U.faction];let G=K.generateId();if(J=A0(J,G,W.entities[K.entityOrItemName],K.mapId,K.x,K.y,U),Object.hasOwn(U,"equip")&&b6(U.equip))J=a1(J,G,W.items[U.equip]);if(Object.hasOwn(U,"ai"))J=S6(J,G,U.ai)}else if(b6(K.entityOrItemName))J=U1(J,W.items[K.entityOrItemName],K.mapId,K.x,K.y);return J}function PJ(J){return Object.hasOwn(W.entities,J)}function b6(J){return Object.hasOwn(W.items,J)}function m0(J,K={}){return{type:J,options:K}}function f6(J){return J.type.name.startsWith("space")}function u6(J){for(let K in W.maps){let U=d0(W.maps[K]);J.maps[K]=U;for(let G of U._spawnCommands)J=u0(J,G);U._spawnCommands=[]}return J}function g6(J,K){let U=F1(J,K);for(let D=0;D<U.length;D++){let R=U[D];J=o1(J,R.id)}let G=_0(J,K);for(let D=0;D<G.length;D++){let R=G[D];J=L1(J,R.id),J=O1(J,R.id)}return J.maps[K]=void 0,delete J.maps[K],J}class c0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(J,K,U,G=[]){this.id=J,this.widthTiles=K,this.heightTiles=U,this.seed=null,this._tiles=G,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(J,K){if(J>=0&&J<this.widthTiles&&K>=0&&K<this.heightTiles){let U=K*this.widthTiles+J;return this._tiles[U]}return{}}setTile(J,K,U,G={}){this._cacheMovementMap=null;let D=K*this.widthTiles+J,R=this._tiles[D];return this._tiles[D]=m0(U,G),R}setTvMessage(J){if(this._tvCount){let K=0;for(let U of this._tiles)if(U.type===W.tiles.tv&&K<J.length)U.options.sign=J[K],K++;if(J==="")J=null;this.tvMessage=J}}pasteOnto(J,K=0,U=0){for(let G=0;G<J.heightTiles;G++)for(let D=0;D<J.widthTiles;D++){let R=J.getTile(D,G);if(R.type!==W.tiles.voidtrue)this.setTile(D+K,G+U,R.type,R.options)}return this}circular(){let J=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let K=-J;K<=J;K++)for(let U=-J;U<=J;U++)if(U*U+K*K>=J*J)this.setTile(U+J-1,K+J-1,W.tiles.voidtrue);return this}sample(J,K){let U=Math.floor(this.widthTiles/J),G=Math.floor(this.heightTiles/K),D=[];for(let R=0;R<K;R++)for(let C=0;C<J;C++){let S={};for(let l=0;l<G;l++)for(let m=0;m<U;m++){let V0=this.getTile(C*U+m,R*G+l);if(S[V0.type.name])S[V0.type.name]+=1;else S[V0.type.name]=1}let N="",I=0;for(let[l,m]of Object.entries(S))if(m>I)N=l,I=m;let c="space"+N,n=W.tiles[c]||W.tiles.spacevoid,Q0={mapId:this.id,x:C*U,y:R*G};D.push(m0(n,Q0))}return new c0("__sampled_"+J+"_"+K+"_"+this.id,J,K,D)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let J=new Array(this.heightTiles);for(let K=0;K<this.heightTiles;K++){J[K]=new Array(this.widthTiles);for(let U=0;U<this.widthTiles;U++){let G=K*this.widthTiles+U,R=this._tiles[G].type;if(J[K][U]=0,i1(R))J[K][U]=1}}return this._cacheMovementMap=J,J}}function d0(J){let K=J.split(/\r?\n/),U=J[0],G="",D=0,R=0,C={},S=[],N=[],I=0,c="";for(let Q0=0;Q0<K.length;Q0++){let l=K[Q0];if(l.startsWith(U)){if(l.startsWith(U+"!id"))G=l.slice(5);else if(l.startsWith(U+"!size")){let m=l.split(" ").slice(1);D=Number(m[0]),R=Number(m[1])}else if(l.startsWith(U+"!spawn")){let m=l.split(" ").slice(1),V0={};if(m.length>3){let x=m.slice(3);for(let _ of x){let r=_.split("=");V0[r[0]]=r[1]}}S.push(new E0(G,Number(m[0]),Number(m[1]),m[2],V0))}else if(l.startsWith(U+"!")){let m=l[2],V0=l.slice(4);C[m]=V0}}else for(let m=0;m<l.length;m++){let V0=l[m],x=C[V0];if(y.debug&&!x)console.log("DEBUG Broken map: "+G);let _=x.split(" "),r={};if(x.startsWith("portal ")||x.startsWith("portalhidden ")||x.startsWith("portalsewers ")||x.startsWith("portallauncher ")||x.startsWith("portalstart"))x=_[0],r.mapId=_[1],r.x=Number(_[2]),r.y=Number(_[3]);if(x.startsWith("wall ")&&_.length>=2)x="wall",r.sign=_[1];if(x.startsWith("terminal ")){if(x="terminal",_.length>=2)r.screen=_[1]}if(x.startsWith("tv ")&&_.length>=2){if(x="tv",_.length===3)c=_[2];I++}N.push(m0(W.tiles[x],r))}}if(y.debug&&!(I===0||I===12))console.log("DEBUG Broken map: "+G+" (invalid TV size "+I+", allowed are 0 or 12 characters per map)");let n=new c0(G,D,R,N);return n._tvCount=I,n.setTvMessage(c),n._spawnCommands=S,n}function i1(J){return J===W.tiles.rock||J===W.tiles.portalclosed||J===W.tiles.portalsewers||J===W.tiles.tv||J.name.startsWith("wall")}function t1(J){return J===W.tiles.water||J===W.tiles.watersewage}function x6(J,K,U){switch(U){case W.commands.N:J=F0(J,K,0,-1);break;case W.commands.W:J=F0(J,K,-1,0);break;case W.commands.S:J=F0(J,K,0,1);break;case W.commands.E:J=F0(J,K,1,0);break;case W.commands.A:J=T6(J,K,W.commands.A);break;case W.commands.B:J=T6(J,K,W.commands.B);break;default:}return J}function F0(J,K,U,G,D=0){let R=J.maps[K.mapId],C=H1(J,R.id,K.x+U,K.y+G),S=J.tools[K.id];if(K.message=R.tvMessage,C)if(j0(C)){if(!j0(K)&&D<1)J=F0(J,C,U,G,D++),J=F0(J,K,U,G,D++)}else J=j6(J,K,C);else if(FJ(R,K,U,G))J=h6(J,R,K,U,G),J._energyQueue.push({entityId:K.id,energyDelta:-1*D});else if(RJ(J,R,K,U,G)){if(R.setTile(K.x+U,K.y+G,W.tiles.void).type===W.tiles.rock){let I=J.rng.getPercentage();if(I<=1)J=U1(J,W.items.matter,R.id,K.x+U,K.y+G);else if(I<=34)J=U1(J,W.items.junk,R.id,K.x+U,K.y+G)}J._energyQueue.push({entityId:K.id,energyDelta:S.type.energyCost})}else if(MJ(J,R,K,U,G))J=h6(J,R,K,U,G),J._energyQueue.push({entityId:K.id,energyDelta:S.type.energyCost});return J}function T6(J,K,U){let D=P1(J,K)[U.key],C=J.maps[K.mapId].getTile(K.x,K.y);switch(D){case W.actions.Enter:J=_6(J,K,C);break;case W.actions.Launch:J=WJ(J,K,C);case W.actions.Wait:break;default:}return J}function h6(J,K,U,G,D){U.x+=G,U.y+=D;let R=R1(J,U.mapId,U.x,U.y);if(R)J=A6(J,U,R);let C=K.getTile(U.x,U.y);if(C.type.name.startsWith("portal"))J=_6(J,U,C);if(C.type===W.tiles.terminal)K.setTvMessage("OBEYWORKKILL");if(C.type.name.startsWith("move"))switch(C.type.name){case"movenorth":J=F0(J,U,0,-1);break;case"moveeast":J=F0(J,U,1,0);break;case"movesouth":J=F0(J,U,0,1);break;case"movewest":J=F0(J,U,-1,0);break;default:}return J}function _6(J,K,U){if(K.id.startsWith("player"))J.currentMapId=U.options.mapId;if(f6(U))J.lastSpacePositionByEntity[K.id]={mapId:K.mapId,x:K.x,y:K.y};else J.lastSpacePositionByEntity[K.id]=void 0,delete J.lastSpacePositionByEntity[K.id];let G={entityId:K.id,oldMapId:K.mapId,oldX:K.x,oldY:K.y,oldTileType:U.type,newMapId:U.options.mapId,newX:U.options.x,newY:U.options.y};return K.mapId=U.options.mapId,K.x=U.options.x,K.y=U.options.y,J=o0(J,0,G),J}function WJ(J,K,U){if(J.lastSpacePositionByEntity[K.id]){if(K.id.startsWith("player"))J.currentMapId=J.lastSpacePositionByEntity[K.id].mapId;let G={entityId:K.id,oldMapId:K.mapId,oldX:K.x,oldY:K.y,oldTileType:U.type,newMapId:J.lastSpacePositionByEntity[K.id].mapId,newX:J.lastSpacePositionByEntity[K.id].x,newY:J.lastSpacePositionByEntity[K.id].y};K.mapId=G.newMapId,K.x=G.newX,K.y=G.newY,J._energyQueue.push({entityId:K.id,energyDelta:W.actions.Launch.energyDelta}),J.lastSpacePositionByEntity[K.id]=void 0,delete J.lastSpacePositionByEntity[K.id],J=o0(J,0,G)}return J}function m6(J){for(let K in J.entities){let U=J.entities[K],D=J.maps[U.mapId].getTile(U.x,U.y),R=D.type.energyDelta;if(D.type===W.tiles.chargepad&&f0(J,K,W.effects.Recharger))R*=2;else if(D.type===W.tiles.tree&&f0(J,K,W.effects.BioAbsorber))R=1;else if(t1(D.type)&&f0(J,K,W.effects.WaterImmunity))R=0;else if(t1(D.type)&&f0(J,K,W.effects.WaterShield))R/=2;else if(D.type===W.tiles.drain){let C=Math.min(U.gold,W.constants.DRAIN_GOLD_COST),S=Math.min(U.matter,W.constants.DRAIN_MATTER_COST);U.gold-=C,U.matter-=S}if(R!==0)J._energyQueue.push({entityId:K,energyDelta:R})}return J}function c6(J,K){let U=J.entities[K.entityId];switch(K.oldTileType){case W.tiles.portalstartaerobot:J=D1(J,U,W.entities.AeroBot),J=w0(J,`Booting up as an ${W.entities.AeroBot.name}...`);break;case W.tiles.portalstartworkbot:J=D1(J,U,W.entities.WorkBot),J=w0(J,`Booting up as a ${W.entities.WorkBot.name}...`);break;default:}return J}function FJ(J,K,U,G){let D=K.x+U,R=K.y+G,C=J.getTile(D,R).type;return D>=0&&D<J.widthTiles&&R>=0&&R<J.heightTiles&&!i1(C)}function RJ(J,K,U,G,D){let R=U.x+G,C=U.y+D,S=K.getTile(R,C).type;return f0(J,U.id,W.effects.WallCrusher)&&S===W.tiles.wallweak||f0(J,U.id,W.effects.RockCrusher)&&S===W.tiles.rock}function MJ(J,K,U,G,D){let R=U.x+G,C=U.y+D,S=K.getTile(R,C).type;return f0(J,U.id,W.effects.Screwing)&&S===W.tiles.portalsewers}var p6=r1(A1(),1);class g0{seed;_rotRng;constructor(J=1337){this.seed=J,this._rotRng=p6.RNG.clone(),this._rotRng.setSeed(J)}getPercentage(){return this._rotRng.getPercentage()}getItem(J){return this._rotRng.getItem(J)}}function l6(J,K){if(K.seed===1337)J=u0(J,new E0(K.id,130,127,"Valkyrie",{faction:"Spirits"})),J=u0(J,new E0(K.id,124,127,"Valkyrie",{faction:"Spirits"})),J=u0(J,new E0(K.id,127,130,"trident"));else{let U=new g0(K.seed);for(let G=0;G<K.heightTiles;G++)for(let D=0;D<K.widthTiles;D++){let R=K.getTile(D,G);if(U.getPercentage()<=1&&(R.type===W.tiles.void||R.type===W.tiles.tree)){let C=U.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(C){case"Deviant":case"Pioneer":J=u0(J,new E0(K.id,D,G,C,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":J=u0(J,new E0(K.id,D,G,C));break}}}}return J}var E1=r1(A1(),1);var CJ=1337,r6=55;function n6(J,K=CJ){E1.RNG.setSeed(K);let U=new E1.Noise.Simplex,G=256,D=256,R=[];for(let N=0;N<D;N++)for(let I=0;I<G;I++){let c=U.get(I/r6,N/r6),n;if(c<=-0.5)n=W.tiles.water;else if(c<=0)n=W.tiles.void;else if(c<0.5)n=W.tiles.tree;else n=W.tiles.rock;R.push(m0(n))}let C="simplex="+K,S=new c0(C,G,D,R);return S.seed=K,J.maps[C]=S,J}var AJ=1337;function o6(J,K=AJ){let U=s6(1024,1024,W.tiles.void);U.id="solarsystem="+K,J.maps[U.id]=U;let G=new g0(K),D=new g0(K),R=G.getItem([2,3,4,5,6,7,8,9,10,11,12]),C=128,S=512-C,N=Math.floor(S/R);U=EJ(U,G);let I=s6(128,128,W.tiles.voidtrue);NJ(I,63,63,62,W.tiles.star),vJ(I,63,63,W.tiles.star),U.pasteOnto(I,448,448);for(let l=C;l<512;l+=N){let m=G.getItem([-1,1])*G.getItem(j1(l)),V0=G.getItem([-1,1])*Math.floor(Math.sqrt(l*l-m*m));m+=512,V0+=512;let x=G.getItem([16,24,32]),_=Math.floor(x/2)-1;J=n6(J,K);let r=J.maps["simplex="+K],U0=W.map_snippets.launcher;U0=U0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${U.id} ${m} ${V0}`);let o=d0(U0),A=D.getItem(j1(r.widthTiles-o.widthTiles)),f=D.getItem(j1(r.heightTiles-o.heightTiles));r.pasteOnto(o,A,f),J=l6(J,r);let u=r.sample(x,x).circular();U.pasteOnto(u,m-(_+1),V0-(_+1)),K++}let c=W.map_snippets.space_bot_station;c=c.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let n=d0(c);U.pasteOnto(n,583,398);let Q0=d0(W.map_snippets.square_falcon);return U.pasteOnto(Q0,590,373),J}function s6(J,K,U){let G=[];for(let C=0;C<J*K;C++)G.push(m0(U));return new c0("__temp",J,K,G)}function EJ(J,K){for(let U=0;U<J.heightTiles;U++)for(let G=0;G<J.widthTiles;G++)if(K.getPercentage()<=1)J.setTile(G,U,K.getItem([W.tiles.spacevoidstarwhite,W.tiles.spacevoidstaryellow]));return J}function NJ(J,K,U,G,D){let R=1-G,C=1,S=-2*G,N=0,I=G;J.setTile(K,U+G,D),J.setTile(K,U-G,D),J.setTile(K+G,U,D),J.setTile(K-G,U,D);while(N<I){if(R>=0)I-=1,S+=2,R+=S;N+=1,C+=2,R+=C,J.setTile(K+N,U+I,D),J.setTile(K-N,U+I,D),J.setTile(K+N,U-I,D),J.setTile(K-N,U-I,D),J.setTile(K+I,U+N,D),J.setTile(K-I,U+N,D),J.setTile(K+I,U-N,D),J.setTile(K-I,U-N,D)}return J}function vJ(J,K,U,G){let{widthTiles:D,heightTiles:R}=J,C=[];C.push({x:K,y:U});let S=void 0;while(typeof(S=C.shift())!=="undefined"){let N=S,I=S;if(S.x+1<D)I={x:S.x+1,y:S.y};while(J.getTile(N.x,N.y).type!==G){if(J.setTile(N.x,N.y,G),N.y+1<R){if(J.getTile(N.x,N.y+1).type!==G)C.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(J.getTile(N.x,N.y-1).type!==G)C.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(J.getTile(I.x,I.y).type!==G){if(J.setTile(I.x,I.y,G),I.y+1<R){if(J.getTile(I.x,I.y+1).type!==G)C.push({x:I.x,y:I.y+1})}if(I.y-1>=0){if(J.getTile(I.x,I.y-1).type!==G)C.push({x:I.x,y:I.y-1})}if(I.x+1<D)I.x+=1;else break}}return J}function a6(J,K){if(K?.oldMapId?.startsWith("shop_instance")){J=g6(J,K.oldMapId);let U=J.maps[K.newMapId],G=U.getTile(K.newX,K.newY);U.setTile(K.newX,K.newY,G.type,{mapId:"shop_instance",x:K.oldX,y:K.oldY})}if(K?.newMapId?.startsWith("shop_instance")){let U=d0(W.map_snippets.shop_instance);U.id+="_"+K.oldMapId+"_"+K.entityId,U.setTile(K.newX,K.newY,W.tiles.portal,{mapId:K.oldMapId,x:K.oldX,y:K.oldY}),J.maps[K.oldMapId].setTile(K.oldX,K.oldY,K.oldTileType,{mapId:U.id,x:K.newX,y:K.newY});let D=J.entities[K.entityId];if(D.id.startsWith("player"))J.currentMapId=U.id;if(D.mapId=U.id,D.x=K.newX,D.Y=K.newY,J.maps[U.id]=U,J=$1(J,W.items.hammer,U.id,4,4,0,-200),J=$1(J,W.items.pickaxe,U.id,4,6,0,-200),J=$1(J,W.items.battery,U.id,4,8,0,-200),J=$1(J,W.items.gold,U.id,4,10,1,-1e4),J=A0(J,U.id+"_shopkeeper",W.entities.AeroBot,U.id,6,2,{faction:D.options.faction,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),K?.oldMapId.startsWith("bot_stadium"))J=A0(J,U.id+"_shopper",W.entities.WorkBot,U.id,1,12,{faction:D.options.faction,dialog:"shop_instance_workbot_shopper"});else if(K?.oldMapId.startsWith("bot_bar"))J=A0(J,U.id+"_shopper",W.entities.AeroBot,U.id,4,11,{faction:D.options.faction,dialog:"shop_instance_aerobot_shopper"})}return J}function i6(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",effects:{},entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new g0,tools:{},tvs:{}}}function t6(J){let K=void 0;while(typeof(K=J._combatQueue.shift())!=="undefined"){let U=-1,G=-5,D=M1(J,K.entityId);if(D)U=D.type.energyCost,G=-1*Math.abs(D.type.damage);J._energyQueue.push({entityId:K.entityId,energyDelta:U}),J._energyQueue.push({entityId:K.otherEntityId,energyDelta:G});let R=J.entities[K.entityId],C=J.entities[K.otherEntityId],S=R?.options?.name?R.options.name:R.type.name,N=C?.options?.name?C.options.name:C.type.name;J=w0(J,`${S} did ${Math.abs(G)} damage to ${N} at cost of ${Math.abs(U)} energy.`)}return J}function e6(J){let K=void 0,U=new Set;while(typeof(K=J._energyQueue.shift())!=="undefined"){let G=J.entities[K.entityId];if(G.energy=Math.min(G.energy+K.energyDelta,G.energyMax),G.energy<=0)U.add(G.id)}for(let G of U){let D=J.entities[G];J._despawnQueue.push(G);let R=D?.options?.name?D.options.name:D.type.name;if(!j0(D)){let C=Math.max(1,Math.floor(D.energyMax/3));J=C6(J,C,D.mapId,D.x,D.y),J=w0(J,`${R} destroyed leaving behind Junk.`)}}return J}function ZZ(J){return J=v6(J),J=t6(J),J=m6(J),J=e6(J),J=W6(J),J=I6(J),J=k6(J),J}class N1{state;constructor(){}init(){return this.state=i6(),this.state=q1(this.state,0,c6),this.state=q1(this.state,0,a6),this.state=q1(this.state,1,F6),this.state=q1(this.state,2,R6),this.state=o6(this.state),this.state=u6(this.state),this.state.currentMapId="botmos_hull_selection",this.state=A0(this.state,W0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"}),this.state}update(J,K=!1){let U=this.state.entities[W0()];if(U){if(J){switch(J){case W.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case W.commands["#"]:this.state=w0(this.state,D6(this.state,W0()));break;default:this.state=x6(this.state,U,J),this.state=ZZ(this.state)}this.state.actionLog.push(J.key)}}else this.state=w0(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=A0(this.state,W0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"});return this.state}play(J){for(let K=0;K<J.length;K++){let U=J[K];this.update(W.commands[U],!0)}return this.state}}var d={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},Z6=[],v1=void 0,QZ=void 0,JZ=0;document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":d.up=!0,q0(J);break;case"a":case"ArrowLeft":d.left=!0,q0(J);break;case"s":case"ArrowDown":d.down=!0,q0(J);break;case"d":case"ArrowRight":d.right=!0,q0(J);break;case"x":d.a=!0,q0(J);break;case" ":case"y":case"z":d.b=!0,q0(J);break;case"m":d.menu=!0,q0(J);break;case"#":case"/":d.slash=!0,q0(J);break;default:}N0(VZ())});function N0(J){let K=Date.now();if(v1!==void 0&&K-JZ>=W.constants.MIN_TURN_SPEED_IN_MS)JZ=K,v1(J)}document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":d.up=!1,q0(J);break;case"a":case"ArrowLeft":d.left=!1,q0(J);break;case"s":case"ArrowDown":d.down=!1,q0(J);break;case"d":case"ArrowRight":d.right=!1,q0(J);break;case"x":d.a=!1,q0(J);break;case" ":case"y":case"z":d.b=!1,q0(J);break;case"m":d.menu=!1,q0(J);break;case"#":case"/":d.slash=!1,q0(J);default:}});document.body.addEventListener("click",function(J){let{clientX:K,clientY:U}=J,D=document.body.clientWidth/3,C=document.body.clientHeight/3;if(K>=D&&K<2*D&&U<C)N0(W.commands.N),q0(J);else if(K<D&&U<C)N0(W.commands.B),q0(J);else if(K>=2*D&&U<C)N0(W.commands.A),q0(J);else if(K<D&&U>=C&&U<2*C)N0(W.commands.W),q0(J);else if(K>=2*D&&U>=C&&U<2*C)N0(W.commands.E),q0(J);else if(K>=D&&K<2*D&&U>=2*C)N0(W.commands.S),q0(J);else if(K>=D&&K<2*D&&U>=C&&U<2*C)N0(W.commands.M),q0(J)});function q0(J){J.preventDefault(),J.stopPropagation()}var X1=null;function SJ(){let J=null;if(d.right)J=W.commands.E;if(d.left)J=W.commands.W;if(d.down)J=W.commands.S;if(d.up)J=W.commands.N;if(d.up&&d.right){if(J===W.commands.N&&X1===W.commands.N)J=W.commands.E}if(d.up&&d.left){if(J===W.commands.N&&X1===W.commands.N)J=W.commands.W}if(d.down&&d.right){if(J===W.commands.S&&X1===W.commands.S)J=W.commands.E}if(d.down&&d.left){if(J===W.commands.S&&X1===W.commands.S)J=W.commands.W}if(d.a)J=W.commands.A;if(d.b)J=W.commands.B;if(d.menu)J=W.commands.M;if(d.slash)J=W.commands["#"];if(X1=J,J!==null)Z6.push(J)}function VZ(){SJ();let J=Z6.shift()||null;return Z6=[],J}document.body.addEventListener("mousemove",function(J){if(J.defaultPrevented)return;if(v1!==void 0)QZ(J),q0(J)});var KZ=void 0;window.addEventListener("gamepadconnected",(J)=>{KZ=setInterval(function(){let K=navigator.getGamepads()[J.gamepad?.index];if(d.right=K.buttons[15].pressed,d.left=K.buttons[14].pressed,d.down=K.buttons[13].pressed,d.up=K.buttons[12].pressed,d.a=K.buttons[0].pressed||K.buttons[2].pressed,d.b=K.buttons[1].pressed||K.buttons[3].pressed,d.menu=K.buttons[9].pressed,d.right||d.left||d.down||d.up||d.a||d.b||d.menu)N0(VZ())},100)});window.addEventListener("gamepaddisconnected",(J)=>{clearInterval(KZ)});function zZ(J){v1=J}function qZ(J){QZ=J}var BZ=r1(A1(),1);var S1={__10:[0,0],__11:[16,0],__12:[32,0],__13:[48,0],__14:[64,0],__15:[80,0],__1:[96,0],_1:[112,0],__2:[128,0],_2:[144,0],__3:[160,0],_3:[176,0],__4:[192,0],_4:[208,0],__5:[224,0],_5:[240,0],__6:[256,0],_6:[272,0],__7:[288,0],_7:[304,0],__8:[320,0],_8:[336,0],__9:[352,0],_9:[368,0],AeroBot_a:[384,0],AeroBot:[400,0],battery:[416,0],BioAbsorber:[432,0],broom:[448,0],chargepad:[464,0],cheat:[480,0],chest:[496,0],Cleaner_a:[512,0],Cleaner:[528,0],Deviant:[544,0],drain:[560,0],energy:[576,0],gold:[592,0],goo:[608,0],Graffiticyan:[624,0],Graffitimagenta:[640,0],Graffitiyellow:[656,0],hammer:[672,0],junk:[688,0],matter:[704,0],movableboulder:[720,0],movablebox:[736,0],moveeast:[752,0],movenorth:[768,0],movesouth:[784,0],movewest:[800,0],pickaxe:[816,0],Pioneer_a:[832,0],Pioneer:[848,0],portalclosed:[864,0],portalhidden:[880,0],portallauncher:[896,0],portal:[912,0],portalsewers:[928,0],portalstartaerobot:[944,0],"_portalstart?":[960,0],portalstartworkbot:[976,0],Recharger:[992,0],RoboRat_a:[1008,0],RoboRat:[1024,0],RockCrusher:[1040,0],rock:[1056,0],Screwing:[1072,0],shocker:[1088,0],spacerock:[1104,0],spacetree:[1120,0],spacevoid:[1136,0],spacevoidstarwhite:[1152,0],spacevoidstaryellow:[1168,0],spacewater_a:[1184,0],spacewater:[1200,0],Spirit_a:[1216,0],Spirit:[1232,0],star:[1248,0],terminal:[1264,0],tree:[1280,0],trident:[1296,0],tv:[1312,0],upgradeBioAbsorber:[1328,0],Valkyrie_a:[1344,0],Valkyrie:[1360,0],voidhidden:[1376,0],void:[1392,0],voidtrue:[1408,0],wall0:[1424,0],wall1:[1440,0],wall2:[1456,0],walla_:[1472,0],wallA:[1488,0],wallb_:[1504,0],wallB:[1520,0],wallc_:[1536,0],wallC:[1552,0],WallCrusher:[1568,0],walld_:[1584,0],wallD:[1600,0],walle_:[1616,0],wallE:[1632,0],wallf_:[1648,0],wallF:[1664,0],wallg_:[1680,0],wallG:[1696,0],wallh_:[1712,0],wallH:[1728,0],walli_:[1744,0],wallI:[1760,0],wallj_:[1776,0],wallJ:[1792,0],wallk_:[1808,0],wallK:[1824,0],walll_:[1840,0],wallL:[1856,0],wallm_:[1872,0],wallM:[1888,0],walln_:[1904,0],wallN:[1920,0],wallo_:[1936,0],wallO:[1952,0],"wall(":[1968,0],"wall)":[1984,0],"wall+":[2000,0],"wall,":[2016,0],"wall.":[2032,0],wall:[2048,0],"wall:":[2064,0],wall_:[2080,0],"wall|":[2096,0],wallp_:[2112,0],wallP:[2128,0],wallq_:[2144,0],wallQ:[2160,0],wallr_:[2176,0],wallR:[2192,0],walls_:[2208,0],wallS:[2224,0],wallstatueaerobot:[2240,0],wallstatuecleaner:[2256,0],wallstatuepioneer:[2272,0],wallstatueworkbot:[2288,0],wallt_:[2304,0],wallT:[2320,0],wallu_:[2336,0],wallU:[2352,0],wallv_:[2368,0],wallV:[2384,0],wallweak:[2400,0],wallw_:[2416,0],wallW:[2432,0],wallx_:[2448,0],wallX:[2464,0],wally_:[2480,0],wallY:[2496,0],wallz_:[2512,0],wallZ:[2528,0],water_a:[2544,0],WaterImmunity:[2560,0],water:[2576,0],watersewage_a:[2592,0],watersewage:[2608,0],WaterShield:[2624,0],WorkBot_a:[2640,0],WorkBot:[2656,0],wrench:[2672,0]};var i0=document.createElement("div");i0.id="ui";document.body.appendChild(i0);var b1=V6(),a0=V6(),J6=bJ();J6.style.marginRight=`${y.fontSize/2}px`;var G1=[];for(let J=0;J<y.uiEffectsMaxDisplaySize;J++)G1.push(V6());var v0=document.createElement("div");v0.replaceChildren(b1,a0,J6,...G1);i0.replaceChildren(v0);var k1=document.createElement("div");k1.style.display="flex";k1.style.justifyContent="space-between";var I1=document.createElement("div");I1.id="uichatlog";var UZ=document.createElement("div");UZ.id="uitooltip";k1.replaceChildren(I1,UZ);i0.appendChild(k1);var Q6=document.createElement("div");Q6.id="uimousetooltip";document.body.appendChild(Q6);async function $Z(J,K=0){if(!y.showUI)return;let U=W0(),G=J.entities[U],D="";if(G){T0(b1,G.type.name),b1.dataset.tooltip="Player hull: "+G.type.name;let R="",C=M1(J,U);if(C){T0(a0,C.type.name.toLowerCase());let n=C.type;a0.dataset.tooltip=`Player tool: ${n.name} (${Math.abs(n.damage)} damage, ${n.energyCost} energy)`}else T0(a0,null),a0.dataset.tooltip=void 0;let S=P6(J,U);for(let n=0;n<y.uiEffectsMaxDisplaySize;n++){let Q0=S[n]?.type.name||null,l=S[n]?.type.tooltip||void 0;T0(G1[n],Q0),G1[n].dataset.tooltip=l}let N="";if(G.matter>0)N=`${G.matter}M `;let I="";if(G.gold>0)I=`${G.gold}G `;let c=P1(J,G);if(D=" "+G.energy+"/"+G.energyMax+" "+R+I+N+"Y:"+c.B.name+" X:"+c.A.name,i0.style.flexDirection="column-reverse",G.y-K>=Y0.height-3)i0.style.flexDirection="column";if(v0.style.background="#000",G.energy/G.energyMax<=0.2)v0.style.color="#000",v0.style.background="#f00";else v0.style.color="#74ee15",v0.style.background="#000"}else{T0(b1,null),T0(a0,null);for(let R=0;R<y.uiEffectsMaxDisplaySize;R++)T0(G1[R],null);D="Game over!",v0.style.color="#000",v0.style.background="#f00"}if(J6.innerText=D,J._menuOpen&&!!J.chatLog.length){let R=J.chatLog.slice(-y.chatLogMaxDisplaySize);I1.innerText=R.join(`
`)}else I1.innerText=""}function V6(){let J=document.createElement("span");return T0(J,null),J.style.height=`${y.fontSize}px`,J.style.display="inline-block",J}function bJ(){let J=document.createElement("span");return J.style.display="inline-block",J.style.marginLeft=`${y.fontSize/2}px`,J}function T0(J,K){if(K){let U=S1[K][0];J.style.background=`url('build/tiles.png') -${U}px 0`,J.style.width=`${y.fontSize}px`}else J.style.width="0px"}function XZ(){return Q6}var p0="_a",YZ=document.createElement("img");YZ.src="build/tiles.png";Y0.tileSet=YZ;Y0.tileMap=fJ();var e0=new BZ.Display(Y0);document.body.appendChild(e0.getContainer());var wZ=0,LZ=0,t0=void 0;function IJ(J,K,U=!1){t0=J;let G=J.currentMapId,D=J.maps[G],R=U?p0:"",C=0,S=0;if(D.widthTiles<K.width)C=Math.floor((K.width-D.widthTiles)/2),K.x=0;if(D.heightTiles<K.height)S=Math.floor((K.height-D.heightTiles)/2),K.y=0;wZ=K.x-C,LZ=K.y-S;let N={},I={},c={};for(let x=0;x<K.height;x++)for(let _=0;_<K.width;_++){let r=D.getTile(K.x+_,K.y+x),U0="";if(r?.type)if(r.options.sign)U0="#"+r.options.sign;else U0=r.type.icon;if(U0){let o=[C+_,S+x].toString();N[o]=[U0+R],I[o]=["transparent"],c[o]=["transparent"]}}let n=F1(J,G);for(let x=0;x<n.length;x++){let _=n[x],r=C+_.x-K.x,U0=S+_.y-K.y,o=[r,U0].toString();if(N[o])N[o].push(_.type.icon+R),I[o].push("transparent"),c[o].push("transparent");else N[o]=[_.type.icon+R],I[o]=["transparent"],c[o]=["transparent"]}let Q0=W0(),l=J.entities[Q0],m=((l||{}).options||{}).faction||void 0,V0=_0(J,G);for(let x=0;x<V0.length;x++){let _=V0[x],r=C+_.x-K.x,U0=S+_.y-K.y,o="transparent";if(y.highlightEnemy&&!!m&&!j0(_)&&!s1(_))o=m===_.options.faction?"rgba(116, 238, 21, 0.5)":"rgba(240, 0, 255, 0.5)";if(_===l)o="transparent";let A=[r,U0].toString();if(N[A])N[A].push(_.type.icon+R),I[A].push(o),c[A].push("transparent");else N[A]=[_.type.icon+R],I[A]=[o],c[A]=["transparent"];if(y.showEnergy!==0){let f=y.showEnergy===1?16:10,u=y.showEnergy===1?"__":"_",T=Math.ceil(_.energy/_.energyMax*f);if(T<f)N[A].push(u+T),I[A].push("transparent"),c[A].push("transparent")}}e0.clear();for(let[x,_]of Object.entries(N)){let r=x.split(",");e0.draw(Number(r[0]),Number(r[1]),_,I[x],c[x])}}var GZ={x:0,y:0},f1=0;async function l0(J){let K=J.entities[W0()],U=K?K:GZ,G=kJ(U);if(IJ(J,G,f1%2==0),$Z(J,G.y),GZ=U,f1++,f1>=128)f1=0}async function HZ(){e0._backend.setOptions(Y0)}function DZ(J){return[J[0]+wZ,J[1]+LZ]}function PZ(J){if(!t0)return{tile:null,entity:null,item:null};let K=t0.currentMapId,U=t0.maps[K],G=J[0],D=J[1],R=U.getTile(G,D),C=H1(t0,K,G,D),S=R1(t0,K,G,D);return{tile:R,entity:C,item:S}}function kJ(J){return{x:Math.min(Math.max(0,J.x-Math.floor(Y0.width/2)),n1.WIDTH-Y0.width),y:Math.min(Math.max(0,J.y-Math.floor(Y0.height/2)),n1.HEIGHT-Y0.height),width:Y0.width,height:Y0.height}}function fJ(){let J={};for(let[K,U]of Object.entries(S1)){let G=K.endsWith(p0),D="";if(G)K=K.substring(0,K.length-p0.length),D=p0;if(K.startsWith("wall")&&(K.length===5||K.length===6))J["#"+K.substring(4,5)+D]=U;else if(Object.hasOwn(W.tiles,K))J[W.tiles[K].icon+D]=U;else if(Object.hasOwn(W.entities,K))J[W.entities[K].icon+D]=U;else if(Object.hasOwn(W.items,K))J[W.items[K].icon+D]=U;else J[K+D]=U}for(let[K,U]of Object.entries(J))if(!K.endsWith(p0)&&!Object.hasOwn(J,K+p0))J[K+p0]=U;return J}async function WZ(J){if(!y.showUI||!y.showTooltip)return;let K="";if(J.target){if(J.target?.dataset?.tooltip)K+=J.target.dataset.tooltip}let U=e0.eventToPosition(J);if(U[0]!==-1){let C=DZ(U),S=PZ(C);if(S.entity){let N=S.entity?.options?.name?S.entity.options.name:S.entity.type.name;K+=N}if(S.item){if(K!=="")K+=`
`;K+=S.item.type.name}if(!!S?.tile?.type&&S.tile?.type.tooltip!==""){if(K!=="")K+=`
`;K+=S.tile.type.tooltip}}let G=typeof window!=="undefined"?window.innerHeight:0,D=Math.floor(G/2),R=XZ();if(K!==""){if(R.innerText=K,R.style.left=J.x+20+"px",R.style.top=J.y+20+"px",J.y>D)R.style.top=J.y-20+"px";R.style.display="inline-block"}else R.style.display="none"}var R0=new N1;window.onload=function(){l0(R0.init())};window.onresize=async function(){let J=typeof window!=="undefined"?window.innerWidth:0,K=typeof window!=="undefined"?window.innerHeight:0;y.cameraWidth=Math.floor(J/y.fontSize),y.cameraHeight=Math.floor(K/y.fontSize),Y0.width=Math.floor(y.cameraWidth*(1/y.zoom)),Y0.height=Math.floor(y.cameraHeight*(1/y.zoom)),await HZ(),l0(R0.state)};zZ(function(J){l0(R0.update(J))});qZ(WZ);if(!window.BMActionLog)window.BMActionLog=function(){return R0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(J){l0(R0.play(J))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){y.debug=!y.debug,l0(R0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){y.showUI=!y.showUI,l0(R0.state)};if(y.debug){if(!window.BMDebugState)window.BMDebugState=function(){return R0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let J=Object.keys(R0.state.maps).length,K=Object.keys(R0.state.entities).length,U=Object.keys(R0.state.items).length,G=Object.keys(R0.state.tools).length;return`Maps: ${J}, Entities: ${K}, Items: ${U}, Tools: ${G}`}}document.body.focus();
