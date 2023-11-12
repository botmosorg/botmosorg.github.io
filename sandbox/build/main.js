function U(z){console.log(z)}var T=[];var i=!0,g1=typeof window!=="undefined"?window.innerWidth:0,M1=typeof window!=="undefined"?window.innerHeight:0;var d=[Math.floor(g1/18)-1,Math.floor(M1/18)-1],_={WIDTH:256,HEIGHT:256},D={width:~~(d[0]*1),height:~~(d[1]*1),bg:"transparent",fontSize:~~18,forceSquareRatio:!0};class t{constructor(z,J){this.name=z,this.description=J}}class b{constructor(z,J){this.key=z,this.description=J}}class m{constructor(z,J,$){this.name=z,this.description=J,this.color=$}}class s{constructor(z,J,$,k="cyberyellow",W=0){this.name=z,this.description=J,this.icon=$,this.color=k,this.energyDelta=W}}class r{constructor(z,J,$){this.name=z,this.description=J,this.icon=$,this.color="white",this.unlockCondition=null}}class w{constructor(z,J,$=null,k="white",W="black",B=0){this.name=z,this.description=J,this.icon=$,this.fg=k,this.bg=W,this.energyDelta=B}}var V={ais:{aggrorange:new t("AggroRange","Idles at a position and engages the player when coming into range")},colors:{black:"#000",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",brown:"brown",gray:"#777",white:"#fff"},colorcoding:{cybermagenta:"Enemy color"},commands:{N:new b("N","Move/interact north"),E:new b("E","Move/interact east"),S:new b("S","Move/interact south"),W:new b("W","Move/interact west"),A:new b("A","Interact, primary action"),B:new b("B","Take a break, cancel"),X:new b("X","Secondary action"),Y:new b("Y","Tertiary action")},factions:{Spirits:new m("Spirits","Default player faction","white"),Pyrates:new m("Pyrates","Default enemy faction","cybermagenta")},items:{junk:new s("Junk","Broken bot","%","cyberyellow",1),energy:new s("Energy","Energy pack","\uD83D\uDDF2","cyberyellow",10)},maps:{bot_bar:`!
!!id bot_bar
!!size 16 16
!!. void
!!~ water
!!# wall
!!+ weakwall
!!= chargepad
!!O portal bot_station 23 16
################
#..............#
#..............#
#.....=..+++++.#
#.....=..+.....#
O.....=..+.....#
#..====..+.....#
#..=...........#
#..=.....+.....#
#..====..+.....#
#.....=..+.....#
#.....=..+.....#
#.....=..+++++.#
#..............#
#..............#
################
`,bot_dormitory:`!
!!id bot_dormitory
!!size 32 32
!!. void
!!~ water
!!# wall
!!= chargepad
!!O portal bot_station 22 28
!!Q portal bot_station 27 28
################################
#..............................#
#..............................#
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
`,bot_station:`!
!!id bot_station
!!size 32 32
!!. void
!!~ water
!!# wall
!!+ weakwall
!!= chargepad
!!C portalclosed
!!P portal preloader 15 13
!!O portal bot_dormitory 2 31
!!Q portal bot_dormitory 29 31
!!B portal bot_bar 0 5
################################
#...########################...#
#.......################.......#
#...........########...........#
#...####.++....CC........####..#
#...C###.++..............####..#
#...C###.++..............####..#
#...####.++..............#C##..#
#........++....................#
#+++++++++.....................#
#++++++++......................#
#..............................#
#..............................#
#..#.#.#.#.#...................#
#..#########...................#
#..#########...........####....#
#..#######C#...........B###....#
#......................####....#
#......................####....#
#...#.#.#.#.#..................#
#...#.#.#.#.#..................#
#..############......########..#
#..############......########..#
#..############......########..#
#..############......########..#
#..############......########..#
#..############......########..#
#..############......########..#
#..#C##########......#O####Q#..#
P..............................#
#..............................#
################################
`,preloader:`!
!!id preloader
!!size 16 16
!!. void
!!~ water
!!^ rock
!!t tree
!!# wall
!!+ weakwall
!!= chargepad
!!C portalclosed
!!O portal simplex=1337 126 121
!!A portal arena 1 0
!!D portal bot_station 0 29
################
#.============.#
O..............A
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
C..............D
#.~~~~~~~~~~~~.#
################
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired PioneerBot, who teaches the new player combat lessons",Oz:"A machinery wizard"},spirits:{Spirit:new r("Spirit","You are back in the machine mind, pick a new hull!","@"),WorkBot:new r("WorkBot","Basic pawn","B"),AeroBot:new r("AeroBot","Basic server, serving energy goo and such to bots","A")},tiles:{void:i?new w("void","Just nothing here",".","gray"):new w("void","Just nothing here"),water:new w("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),rock:new w("rock","Hidden treasures may await","^","white","gray"),tree:new w("tree","Lots of trees make a forest","t","brown","cybergreen"),wall:new w("wall","A strong wall","#","gray","black"),weakwall:new w("weakwall","A weakened wall","+","gray","black"),chargepad:new w("chargepad","Recharges energy and health","=","cyberyellow","black",2),portal:new w("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new w("portalclosed","Closed gateway to another map","O","black","gray")}};var q={currentMapId:"",playerId:"",entities:{},items:{},maps:{}};function C(z,J,$=0,k=0){return{id:e(J,$,k),type:z,mapId:J,x:$,y:k,energy:z.energyDelta}}var e=function(z,J,$){return"item"+z+J+$};function N1(z){q.items[z]=void 0,delete q.items[z]}function u(z){q.items[z.id]=z}function z1(z){let J=Object.keys(q.items),$=[];for(let k=0;k<J.length;k++){let W=q.items[J[k]];if(W.mapId===z)$.push(W)}return $}function J1(z,J,$){let k=e(z,J,$);if(k in q.items)return q.items[k];return null}function $1(z,J){U("Pickup item "+J.id+" by "+z.id),P(z.id,J.energy),N1(J.id)}function V1(z,J,$,k,W){let B=new EasyStar.js;B.setGrid(z),B.setAcceptableTiles([0]),B.enableSync();let G=null;return B.findPath(J,$,k,W,function(Q){G=Q}),B.calculate(),G}function g(z=null,J={}){return{type:z,options:J}}function N(z){q.currentMapId=z}function p(z){q.maps[z.id]=z}function k1(z){return q.maps[z]}function W1(z){let J=z.split(/\r?\n/),$=z[0],k="",W=0,B=0,G={},Q=[];for(let v=0;v<J.length;v++){let L=J[v];if(L.startsWith($)){if(L.startsWith($+"!id"))k=L.slice(5);else if(L.startsWith($+"!size")){let f=L.split(" ").slice(1);W=Number(f[0]),B=Number(f[1])}else if(L.startsWith($+"!")){let f=L[2],K=L.slice(4);G[f]=K}}else for(let f=0;f<L.length;f++){let K=L[f],Y=G[K],O={};if(Y.startsWith("portal ")){let o=Y.split(" ");Y="portal",O.mapId=o[1],O.x=Number(o[2]),O.y=Number(o[3])}Q.push(g(V.tiles[Y],O))}}return new M(k,W,B,Q)}var h={width:16,height:16},j=h;class M{constructor(z,J,$,k=[]){this.id=z,this.widthTiles=J,this.heightTiles=$,this._tiles=k,this._cacheMovementMap=null}getTile(z,J){if(z>=0&&z<this.widthTiles&&J>=0&&J<this.heightTiles){let $=J*this.widthTiles+z;return this._tiles[$]}return{}}setTile(z,J,$,k={}){this._cacheMovementMap=null;let W=J*this.widthTiles+z;this._tiles[W]=g($,k)}asMovementMap(){if(this._cacheMovementMap!==null)return this._cacheMovementMap;let z=new Array(this.heightTiles);for(let J=0;J<this.heightTiles;J++){z[J]=new Array(this.widthTiles);for(let $=0;$<this.widthTiles;$++){let k=J*this.widthTiles+$,B=this._tiles[k].type;if(z[J][$]=0,B===V.tiles.rock||B===V.tiles.wall||B===V.tiles.weakwall)z[J][$]=1}}return this._cacheMovementMap=z,z}}function q1(z,J){switch(J){case V.commands.N:x(z,0,-1);break;case V.commands.W:x(z,-1,0);break;case V.commands.S:x(z,0,1);break;case V.commands.E:x(z,1,0);break;default:}}function x(z,J,$){let k=q.maps[z.mapId],W=G1(k.id,z.x+J,z.y+$);if(W!==null)X1(z,W);else if(c1(k,z,J,$)){z.x+=J,z.y+=$;let B=J1(z.mapId,z.x,z.y);if(B)$1(z,B);let G=k.getTile(z.x,z.y);if(G.type===V.tiles.portal)N(G.options.mapId),z.x=G.options.x,z.y=G.options.y,z.mapId=G.options.mapId}}function B1(){for(let z in q.entities){let J=q.entities[z],k=q.maps[J.mapId].getTile(J.x,J.y);P(z,k.type.energyDelta)}}var c1=function(z,J,$,k){let W=J.x+$,B=J.y+k,G=z.getTile(W,B).type;return W>=0&&W<z.widthTiles&&B>=0&&B<z.heightTiles&&G!==V.tiles.rock&&G!==V.tiles.portalclosed&&G!==V.tiles.wall&&G!==V.tiles.weakwall};function Q1(z,J,$,k){return Math.abs(z-$)+Math.abs(J-k)}function K1(){let z=A1();for(let $=0;$<z.length;$++){let k=z[$];if(!F.hasOwnProperty(k))F[k]=E1(k,V.ais.aggrorange)}let J=c(q.playerId);for(let $=0;$<z.length;$++){let k=z[$],W=c(k),B=F[k],G=Q1(J.x,J.y,W.x,W.y);if(J.options.faction!==W.options.faction&&G<=B.aggroRange){let Q=k1(q.currentMapId).asMovementMap(),v=V1(Q,W.x,W.y,J.x,J.y);if(v!==null)v=v.slice(1);B.path=v}}for(let $=0;$<z.length;$++){let k=z[$],W=c(k),B=F[k];if(B.path!==null){let G=B.path[0],Q=G.x-W.x,v=G.y-W.y;x(W,Q,v)}}}var A1=function(){let z=A(q.currentMapId),J=[];for(let $=0;$<z.length;$++){let k=z[$];if(!k.id.startsWith("player"))J.push(k.id)}return J},E1=function(z,J){let $=c(z);return{entityId:z,type:J,aggroRange:8,startMap:$.mapId,startX:$.x,startY:$.y,path:null}};function Y1(z){F[z]=void 0,delete F[z]}var F={};function y(z){v1.push(z)}function f1(z){L1.push(z)}function w1(){let z=void 0;while(typeof(z=v1.shift())!=="undefined")H1(z),Y1(z)}function h1(){let z=void 0;while(typeof(z=L1.shift())!=="undefined")u(z)}var v1=[],L1=[];function P(z,J){R1.push([z,J])}function Z1(){let z=void 0;while(typeof(z=R1.shift())!=="undefined"){let J=q.entities[z[0]];if(J.energy=Math.min(J.energy+z[1],J.energyMax),J.energy<=0)y(J.id),f1(C(V.items.junk,J.mapId,J.x,J.y))}}var R1=[];function U1(z,J){b1.push([z,J])}function D1(){let z=void 0;while(typeof(z=b1.shift())!=="undefined")P(z[0],-1),P(z[1],-10)}var b1=[];function H(z,J,$,k=0,W=0,B={}){let G=10,Q=10;if(z.startsWith("player"))G=100,Q=100;return{id:z,type:J,mapId:$,x:k,y:W,energy:G,energyMax:Q,options:B}}function H1(z){q.entities[z]=void 0,delete q.entities[z]}function R(z){q.entities[z.id]=z}function c(z){return q.entities[z]}function A(z){let J=Object.keys(q.entities),$=[];for(let k=0;k<J.length;k++){let W=q.entities[J[k]];if(W.mapId===z)$.push(W)}return $}function G1(z,J,$){let k=A(z).filter((W)=>W.x===J&&W.y===$);if(k.length>0)return k[0];return null}function X1(z,J){if(z.options.faction===J.options.faction)U("Interaction!");else U("COMBAT!"),U1(z.id,J.id)}var Z=function(z){z.preventDefault(),z.stopPropagation()},S1=function(){let z=null;if(X.right)z=V.commands.E;if(X.left)z=V.commands.W;if(X.down)z=V.commands.S;if(X.up)z=V.commands.N;if(X.up&&X.right){if(z===V.commands.N&&E===V.commands.N)z=V.commands.E}if(X.up&&X.left){if(z===V.commands.N&&E===V.commands.N)z=V.commands.W}if(X.down&&X.right){if(z===V.commands.S&&E===V.commands.S)z=V.commands.E}if(X.down&&X.left){if(z===V.commands.S&&E===V.commands.S)z=V.commands.W}if(X.b)z=V.commands.B;E=z,a.push(z)};function P1(){S1();let z=a.shift()||null;return a=[],z}var X={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,c:!1,d:!1,menu:!1},a=[];document.body.addEventListener("keydown",function(z){if(z.defaultPrevented)return;switch(z.key){case"w":case"ArrowUp":X.up=!0,Z(z);break;case"a":case"ArrowLeft":X.left=!0,Z(z);break;case"s":case"ArrowDown":X.down=!0,Z(z);break;case"d":case"ArrowRight":X.right=!0,Z(z);break;case" ":X.b=!0,Z(z);break;default:}});document.body.addEventListener("keyup",function(z){if(z.defaultPrevented)return;switch(z.key){case"w":case"ArrowUp":X.up=!1,Z(z);break;case"a":case"ArrowLeft":X.left=!1,Z(z);break;case"s":case"ArrowDown":X.down=!1,Z(z);break;case"d":case"ArrowRight":X.right=!1,Z(z);break;case" ":X.b=!1,Z(z);break;default:}});var E=null;function C1(z=S){ROT.RNG.setSeed(z);let J=new ROT.Noise.Simplex,$=[];for(let W=0;W<h.height*j.height;W++)for(let B=0;B<h.width*j.width;B++){let G=J.get(B/O1,W/O1),Q;if(G<=-0.5)Q=V.tiles.water;else if(G<=0)Q=V.tiles.void;else if(G<0.5)Q=V.tiles.tree;else Q=V.tiles.rock;$.push(g(Q))}let k=new M("simplex="+z,j.width*h.width,j.height*h.height,$);return k.setTile(126,121,V.tiles.portal,{mapId:"preloader",x:0,y:2}),k}function u1(){let z=new ROT.Map.Arena(h.width,h.height),J=[];z.create(function(k,W,B){let G=B?V.tiles.wall:V.tiles.void;J[W*h.width+k]=g(G)});let $=new M("arena",h.width,h.height,J);return $.setTile(1,0,V.tiles.portal,{mapId:"preloader",x:15,y:2}),$}var S=1337,O1=55;function x1(){K1(),D1(),B1(),Z1(),w1(),h1()}class I{constructor(){this.turns=0}init(){p(u1()),p(C1());for(let z in V.maps)p(W1(V.maps[z]));R(H("npc0",V.spirits.AeroBot,"simplex="+S,130,127,{faction:V.factions.Spirits})),R(H("npc1",V.spirits.WorkBot,"simplex="+S,124,127,{faction:V.factions.Spirits})),u(C(V.items.energy,"simplex="+S,127,130)),R(H("enemy0",V.spirits.WorkBot,"arena",8,8,{faction:V.factions.Pyrates})),R(H("enemy1",V.spirits.WorkBot,"arena",9,8,{faction:V.factions.Pyrates})),R(H("enemy2",V.spirits.WorkBot,"arena",11,11,{faction:V.factions.Pyrates})),R(H("enemy3",V.spirits.WorkBot,"arena",6,6,{faction:V.factions.Pyrates})),R(H("enemy4",V.spirits.WorkBot,"arena",12,12,{faction:V.factions.Pyrates})),u(C(V.items.energy,"arena",7,7)),u(C(V.items.energy,"arena",14,14)),q.playerId="player",N("preloader"),R(H(q.playerId,V.spirits.Spirit,q.currentMapId,7,7,{faction:V.factions.Spirits}))}update(){let z=P1(),J=q.entities[q.playerId];if(J!==void 0){if(z!==null)q1(J,z),x1(),U("Trn: "+this.turns+", act: "+z.key+", plr: ("+J.energy+"/"+J.energyMax+" | "+J.x+","+J.y+")"),this.turns+=1}else N("preloader"),R(H(q.playerId,V.spirits.Spirit,q.currentMapId,7,7,{faction:V.factions.Spirits})),J=q.entities[q.playerId];return J}}var n=function(z){return V.colors[z]},l1=function(z){let J=q.maps[q.currentMapId];for(var $=0;$<z.height;$++)for(var k=0;k<z.width;k++){var W=J.getTile(z.x+k,z.y+$),B=V.colors.black,G=V.colors.white,Q="";if(W!=null&&W.type!=null)B=n(W.type.bg),G=n(W.type.fg),Q=W.type.icon;l.draw(k,$,Q,G,B)}let v=z1(q.currentMapId);for(let K=0;K<v.length;K++){let Y=v[K];l.drawOver(Y.x-z.x,Y.y-z.y,Y.type.icon,n(Y.type.color))}let L=((q.entities[q.playerId]||{}).options||{}).faction||void 0,f=A(q.currentMapId);for(let K=0;K<f.length;K++){let Y=f[K],O=L===Y.options.faction?V.colors.white:V.colors.cybermagenta;l.drawOver(Y.x-z.x,Y.y-z.y,Y.type.icon,O)}for(let K=0;K<T.length;K++){let Y=T[K];l.drawText(0,K,"%c{green}%b{black}"+Y,d[0])}};async function F1(z){l1(d1(z))}var d1=function(z){return{x:Math.min(Math.max(0,z.x-Math.floor(D.width/2)),_.WIDTH-D.width),y:Math.min(Math.max(0,z.y-Math.floor(D.height/2)),_.HEIGHT-D.height),width:D.width,height:D.height}},l=new ROT.Display(D);document.body.appendChild(l.getContainer());var r1=100,j1=new I;window.onload=j1.init();var K5=setInterval(function(){F1(j1.update())},r1);window.focus();
