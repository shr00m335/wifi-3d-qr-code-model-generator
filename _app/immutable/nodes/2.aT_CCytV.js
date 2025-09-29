import"../chunks/DsnmJJEf.js";import"../chunks/BRx9NvNL.js";import{_ as ro,i as en,n as rf,a0 as Gu,j as sf,V as of,g as nt,ai as we,X as af,Y as lf,Z as Vl,$ as so,m as lr,av as cf,az as uf,a1 as ba,a4 as hf,a2 as Wi,aD as Wu,s as Xu,ad as ee,aK as Gl,aL as ff,a5 as qu,a6 as df,aM as pf,aN as oo,aO as Yu,aP as mf,aQ as gf,ax as _f,aR as vf,aC as xf,aS as yf,al as bf,aT as ml,a7 as Mf,aU as Sf,aV as Ef,t as wf,D as Tf,b as Re,a8 as $u,aW as Af,J as Te,Q as Jt,R as Zt,S as Bt,M as qe,aX as ju,O as le,I as Br,aY as Ce,aZ as gl,ae as ne,P as zr,e as Cf,a_ as kr,T as As,K as tn,a$ as Wl,b0 as Xl}from"../chunks/BHf0c5pL.js";import{p as oe,b as _l,s as Tn,a as hn,c as Hr,i as _r}from"../chunks/BmX79wWy.js";import{i as Vr}from"../chunks/BjciS82h.js";import{w as Ys,s as yi,d as Gr}from"../chunks/MfGovFZh.js";import{a as Rf,b as Pf}from"../chunks/Cs8xx7LK.js";import{a as he,r as xi,s as If}from"../chunks/CQyeiHsg.js";function Lf(r,t){return t}function Df(r,t,e){for(var n=r.items,i=[],s=t.length,o=0;o<s;o++)vf(t[o].e,i,!0);var a=s>0&&i.length===0&&e!==null;if(a){var l=e.parentNode;xf(l),l.append(e),n.clear(),bn(r,t[0].prev,t[s-1].next)}yf(i,()=>{for(var c=0;c<s;c++){var h=t[c];a||(n.delete(h.k),bn(r,h.prev,h.next)),Yu(h.e,!a)}})}function Nf(r,t,e,n,i,s=null){var o=r,a={flags:t,items:new Map,first:null};{var l=r;o=en?ro(rf(l)):l.appendChild(Gu())}en&&sf();var c=null,h=!1,f=new Map,p=we(()=>{var m=e();return Xu(m)?m:m==null?[]:Wu(m)}),u,g;function _(){Uf(g,u,a,f,o,i,t,n,e),s!==null&&(u.length===0?c?qu(c):c=ba(()=>s(o)):c!==null&&df(c,()=>{c=null}))}of(()=>{g??=bf,u=nt(p);var m=u.length;if(h&&m===0)return;h=m===0;let d=!1;if(en){var y=af(o)===lf;y!==(m===0)&&(o=Vl(),ro(o),so(!1),d=!0)}if(en){for(var x=null,v,E=0;E<m;E++){if(lr.nodeType===cf&&lr.data===uf){o=lr,d=!0,so(!1);break}var A=u[E],T=n(A,E);v=Ma(lr,a,x,null,A,T,E,i,t,e),a.items.set(T,v),x=v}m>0&&ro(Vl())}if(en)m===0&&s&&(c=ba(()=>s(o)));else if(hf()){var P=new Set,S=Wi;for(E=0;E<m;E+=1){A=u[E],T=n(A,E);var w=a.items.get(T)??f.get(T);w?Zu(w,A,E):(v=Ma(null,a,null,null,A,T,E,i,t,e,!0),f.set(T,v)),P.add(T)}for(const[D,R]of a.items)P.has(D)||S.skipped_effects.add(R.e);S.add_callback(_)}else _();d&&so(!0),nt(p)}),en&&(o=lr)}function Uf(r,t,e,n,i,s,o,a,l){var c=t.length,h=e.items,f=e.first,p=f,u,g=null,_=[],m=[],d,y,x,v;for(v=0;v<c;v+=1){if(d=t[v],y=a(d,v),x=h.get(y),x===void 0){var E=n.get(y);if(E!==void 0){n.delete(y),h.set(y,E);var A=g?g.next:p;bn(e,g,E),bn(e,E,A),ao(E,A,i),g=E}else{var T=p?p.e.nodes_start:i;g=Ma(T,e,g,g===null?e.first:g.next,d,y,v,s,o,l)}h.set(y,g),_=[],m=[],p=g.next;continue}if(Zu(x,d,v),(x.e.f&oo)!==0&&qu(x.e),x!==p){if(u!==void 0&&u.has(x)){if(_.length<m.length){var P=m[0],S;g=P.prev;var w=_[0],D=_[_.length-1];for(S=0;S<_.length;S+=1)ao(_[S],P,i);for(S=0;S<m.length;S+=1)u.delete(m[S]);bn(e,w.prev,D.next),bn(e,g,w),bn(e,D,P),p=P,g=D,v-=1,_=[],m=[]}else u.delete(x),ao(x,p,i),bn(e,x.prev,x.next),bn(e,x,g===null?e.first:g.next),bn(e,g,x),g=x;continue}for(_=[],m=[];p!==null&&p.k!==y;)(p.e.f&oo)===0&&(u??=new Set).add(p),m.push(p),p=p.next;if(p===null)continue;x=p}_.push(x),g=x,p=x.next}if(p!==null||u!==void 0){for(var R=u===void 0?[]:Wu(u);p!==null;)(p.e.f&oo)===0&&R.push(p),p=p.next;var U=R.length;if(U>0){var b=c===0?i:null;Df(e,R,b)}}r.first=e.first&&e.first.e,r.last=g&&g.e;for(var F of n.values())Yu(F.e);n.clear()}function Zu(r,t,e,n){ff(r.v,t),r.i=e}function Ma(r,t,e,n,i,s,o,a,l,c,h){var f=(l&mf)!==0,p=(l&gf)===0,u=f?p?ee(i,!1,!1):Gl(i):i,g=(l&pf)===0?o:Gl(o),_={i:g,v:u,k:s,a:null,e:null,prev:e,next:n};try{if(r===null){var m=document.createDocumentFragment();m.append(r=Gu())}return _.e=ba(()=>a(r,u,g,c),en),_.e.prev=e&&e.e,_.e.next=n&&n.e,e===null?h||(t.first=_):(e.next=_,e.e.next=_.e),n!==null&&(n.prev=_,n.e.prev=_.e),_}finally{}}function ao(r,t,e){for(var n=r.next?r.next.e.nodes_start:e,i=t?t.e.nodes_start:e,s=r.e.nodes_start;s!==null&&s!==n;){var o=_f(s);i.before(s),s=o}}function bn(r,t,e){t===null?r.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function Of(r,t,e){var n=r==null?"":""+r;return n===""?null:n}function Ff(r,t){return r==null?null:String(r)}function lo(r,t,e,n,i,s){var o=r.__className;if(en||o!==e||o===void 0){var a=Of(e);(!en||a!==r.getAttribute("class"))&&(a==null?r.removeAttribute("class"):r.className=a),r.__className=e}return s}function Bf(r,t,e,n){var i=r.__style;if(en||i!==t){var s=Ff(t);(!en||s!==r.getAttribute("style"))&&(s==null?r.removeAttribute("style"):r.style.cssText=s),r.__style=t}return n}function Ku(r,t,e=!1){if(r.multiple){if(t==null)return;if(!Xu(t))return Sf();for(var n of r.options)n.selected=t.includes(Sr(n));return}for(n of r.options){var i=Sr(n);if(Ef(i,t)){n.selected=!0;return}}(!e||t!==void 0)&&(r.selectedIndex=-1)}function zf(r){var t=new MutationObserver(()=>{Ku(r,r.__value)});t.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),wf(()=>{t.disconnect()})}function Ju(r,t,e=t){var n=!0;ml(r,"change",i=>{var s=i?"[selected]":":checked",o;if(r.multiple)o=[].map.call(r.querySelectorAll(s),Sr);else{var a=r.querySelector(s)??r.querySelector("option:not([disabled])");o=a&&Sr(a)}e(o)}),Mf(()=>{var i=t();if(Ku(r,i,n),n&&i===void 0){var s=r.querySelector(":checked");s!==null&&(i=Sr(s),e(i))}r.__value=i,n=!1}),zf(r)}function Sr(r){return"__value"in r?r.__value:r.value}function Cr(r,t,e=t){var n=new WeakSet;ml(r,"input",async i=>{var s=i?r.defaultValue:r.value;if(s=co(r)?uo(s):s,e(s),Wi!==null&&n.add(Wi),await Tf(),s!==(s=t())){var o=r.selectionStart,a=r.selectionEnd;r.value=s??"",a!==null&&(r.selectionStart=o,r.selectionEnd=Math.min(a,r.value.length))}}),(en&&r.defaultValue!==r.value||Re(t)==null&&r.value)&&(e(co(r)?uo(r.value):r.value),Wi!==null&&n.add(Wi)),$u(()=>{var i=t();if(r===document.activeElement){var s=Af??Wi;if(n.has(s))return}co(r)&&i===uo(r.value)||r.type==="date"&&!i&&!r.value||i!==r.value&&(r.value=i??"")})}function Qu(r,t,e=t){ml(r,"change",n=>{var i=n?r.defaultChecked:r.checked;e(i)}),(en&&r.defaultChecked!==r.checked||Re(t)==null)&&e(r.checked),$u(()=>{var n=t();r.checked=!!n})}function co(r){var t=r.type;return t==="number"||t==="range"}function uo(r){return r===""?null:+r}const kf="always",Ob=Object.freeze(Object.defineProperty({__proto__:null,trailingSlash:kf},Symbol.toStringTag,{value:"Module"}));var nn=(r=>(r[r.WifiInfo=0]="WifiInfo",r[r.QRPreview=1]="QRPreview",r[r.ModelPreview=2]="ModelPreview",r[r.ExportOptions=3]="ExportOptions",r))(nn||{}),De=(r=>(r[r.GLTF=0]="GLTF",r[r.OBJ=1]="OBJ",r[r.PLY=2]="PLY",r[r.STL=3]="STL",r[r._3MF=4]="_3MF",r))(De||{}),Fn=(r=>(r[r.Separate=0]="Separate",r[r.CardContentAndStand=1]="CardContentAndStand",r[r.Single=2]="Single",r))(Fn||{});function ql(r){return(Rf||Pf)+r}var $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function th(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function jr(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ho={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Yl;function Hf(){return Yl||(Yl=1,(function(r,t){(function(e){r.exports=e()})(function(){return(function e(n,i,s){function o(c,h){if(!i[c]){if(!n[c]){var f=typeof jr=="function"&&jr;if(!h&&f)return f(c,!0);if(a)return a(c,!0);var p=new Error("Cannot find module '"+c+"'");throw p.code="MODULE_NOT_FOUND",p}var u=i[c]={exports:{}};n[c][0].call(u.exports,function(g){var _=n[c][1][g];return o(_||g)},u,u.exports,e,n,i,s)}return i[c].exports}for(var a=typeof jr=="function"&&jr,l=0;l<s.length;l++)o(s[l]);return o})({1:[function(e,n,i){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var c,h,f,p,u,g,_,m=[],d=0,y=l.length,x=y,v=s.getTypeOf(l)!=="string";d<l.length;)x=y-d,f=v?(c=l[d++],h=d<y?l[d++]:0,d<y?l[d++]:0):(c=l.charCodeAt(d++),h=d<y?l.charCodeAt(d++):0,d<y?l.charCodeAt(d++):0),p=c>>2,u=(3&c)<<4|h>>4,g=1<x?(15&h)<<2|f>>6:64,_=2<x?63&f:64,m.push(a.charAt(p)+a.charAt(u)+a.charAt(g)+a.charAt(_));return m.join("")},i.decode=function(l){var c,h,f,p,u,g,_=0,m=0,d="data:";if(l.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var y,x=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&x--,l.charAt(l.length-2)===a.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=o.uint8array?new Uint8Array(0|x):new Array(0|x);_<l.length;)c=a.indexOf(l.charAt(_++))<<2|(p=a.indexOf(l.charAt(_++)))>>4,h=(15&p)<<4|(u=a.indexOf(l.charAt(_++)))>>2,f=(3&u)<<6|(g=a.indexOf(l.charAt(_++))),y[m++]=c,u!==64&&(y[m++]=h),g!==64&&(y[m++]=f);return y}},{"./support":30,"./utils":32}],2:[function(e,n,i){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(h,f,p,u,g){this.compressedSize=h,this.uncompressedSize=f,this.crc32=p,this.compression=u,this.compressedContent=g}c.prototype={getContentWorker:function(){var h=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return h.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),h},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(h,f,p){return h.pipe(new a).pipe(new l("uncompressedSize")).pipe(f.compressWorker(p)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,i){var s=e("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,i){var s=e("./utils"),o=(function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var h=0;h<8;h++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l})();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?(function(c,h,f,p){var u=o,g=p+f;c^=-1;for(var _=p;_<g;_++)c=c>>>8^u[255&(c^h[_])];return-1^c})(0|l,a,a.length,0):(function(c,h,f,p){var u=o,g=p+f;c^=-1;for(var _=p;_<g;_++)c=c>>>8^u[255&(c^h.charCodeAt(_))];return-1^c})(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(e,n,i){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function h(f,p){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=p,this.meta={}}i.magic="\b\0",a.inherits(h,l),h.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,f.data),!1)},h.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(p){f.push({data:p,meta:f.meta})}},i.compressWorker=function(f){return new h("Deflate",f)},i.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,i){function s(u,g){var _,m="";for(_=0;_<g;_++)m+=String.fromCharCode(255&u),u>>>=8;return m}function o(u,g,_,m,d,y){var x,v,E=u.file,A=u.compression,T=y!==c.utf8encode,P=a.transformTo("string",y(E.name)),S=a.transformTo("string",c.utf8encode(E.name)),w=E.comment,D=a.transformTo("string",y(w)),R=a.transformTo("string",c.utf8encode(w)),U=S.length!==E.name.length,b=R.length!==w.length,F="",$="",V="",J=E.dir,tt=E.date,ut={crc32:0,compressedSize:0,uncompressedSize:0};g&&!_||(ut.crc32=u.crc32,ut.compressedSize=u.compressedSize,ut.uncompressedSize=u.uncompressedSize);var X=0;g&&(X|=8),T||!U&&!b||(X|=2048);var Z=0,xt=0;J&&(Z|=16),d==="UNIX"?(xt=798,Z|=(function(ft,st){var ct=ft;return ft||(ct=st?16893:33204),(65535&ct)<<16})(E.unixPermissions,J)):(xt=20,Z|=(function(ft){return 63&(ft||0)})(E.dosPermissions)),x=tt.getUTCHours(),x<<=6,x|=tt.getUTCMinutes(),x<<=5,x|=tt.getUTCSeconds()/2,v=tt.getUTCFullYear()-1980,v<<=4,v|=tt.getUTCMonth()+1,v<<=5,v|=tt.getUTCDate(),U&&($=s(1,1)+s(h(P),4)+S,F+="up"+s($.length,2)+$),b&&(V=s(1,1)+s(h(D),4)+R,F+="uc"+s(V.length,2)+V);var gt="";return gt+=`
\0`,gt+=s(X,2),gt+=A.magic,gt+=s(x,2),gt+=s(v,2),gt+=s(ut.crc32,4),gt+=s(ut.compressedSize,4),gt+=s(ut.uncompressedSize,4),gt+=s(P.length,2),gt+=s(F.length,2),{fileRecord:f.LOCAL_FILE_HEADER+gt+P+F,dirRecord:f.CENTRAL_FILE_HEADER+s(xt,2)+gt+s(D.length,2)+"\0\0\0\0"+s(Z,4)+s(m,4)+P+F+D}}var a=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),h=e("../crc32"),f=e("../signature");function p(u,g,_,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=_,this.encodeFileName=m,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(p,l),p.prototype.push=function(u){var g=u.meta.percent||0,_=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:_?(g+100*(_-m-1))/_:100}}))},p.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var g=this.streamFiles&&!u.file.dir;if(g){var _=o(u,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(u){this.accumulate=!1;var g=this.streamFiles&&!u.file.dir,_=o(u,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),g)this.push({data:(function(m){return f.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)})(u),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var u=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var _=this.bytesWritten-u,m=(function(d,y,x,v,E){var A=a.transformTo("string",E(v));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(d,2)+s(d,2)+s(y,4)+s(x,4)+s(A.length,2)+A})(this.dirRecords.length,_,u,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(u){this._sources.push(u);var g=this;return u.on("data",function(_){g.processChunk(_)}),u.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),u.on("error",function(_){g.error(_)}),this},p.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(u){var g=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var _=0;_<g.length;_++)try{g[_].error(u)}catch{}return!0},p.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,g=0;g<u.length;g++)u[g].lock()},n.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,i){var s=e("../compressions"),o=e("./ZipFileWorker");i.generateWorker=function(a,l,c){var h=new o(l.streamFiles,c,l.platform,l.encodeFileName),f=0;try{a.forEach(function(p,u){f++;var g=(function(y,x){var v=y||x,E=s[v];if(!E)throw new Error(v+" is not a valid compression method !");return E})(u.options.compression,l.compression),_=u.options.compressionOptions||l.compressionOptions||{},m=u.dir,d=u.date;u._compressWorker(g,_).withStreamInfo("file",{name:p,dir:m,date:d,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(h)}),h.entriesCount=f}catch(p){h.error(p)}return h}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,i){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),h=e("./nodejsUtils");function f(p){return new o.Promise(function(u,g){var _=p.decompressed.getContentWorker().pipe(new c);_.on("error",function(m){g(m)}).on("end",function(){_.streamInfo.crc32!==p.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}n.exports=function(p,u){var g=this;return u=s.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),h.isNode&&h.isStream(p)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",p,!0,u.optimizedBinaryString,u.base64).then(function(_){var m=new l(u);return m.load(_),m}).then(function(_){var m=[o.Promise.resolve(_)],d=_.files;if(u.checkCRC32)for(var y=0;y<d.length;y++)m.push(f(d[y]));return o.Promise.all(m)}).then(function(_){for(var m=_.shift(),d=m.files,y=0;y<d.length;y++){var x=d[y],v=x.fileNameStr,E=s.resolve(x.fileNameStr);g.file(E,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:u.createFolders}),x.dir||(g.file(E).unsafeOriginalName=v)}return m.zipComment.length&&(g.comment=m.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,i){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(h){c.push({data:h,meta:{percent:0}})}).on("error",function(h){c.isPaused?this.generatedError=h:c.error(h)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,i){var s=e("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var h=this;a.on("data",function(f,p){h.push(f)||h._helper.pause(),c&&c(p)}).on("error",function(f){h.emit("error",f)}).on("end",function(){h.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,i){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,i){function s(E,A,T){var P,S=a.getTypeOf(A),w=a.extend(T||{},h);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(E=d(E)),w.createFolders&&(P=m(E))&&y.call(this,P,!0);var D=S==="string"&&w.binary===!1&&w.base64===!1;T&&T.binary!==void 0||(w.binary=!D),(A instanceof f&&A.uncompressedSize===0||w.dir||!A||A.length===0)&&(w.base64=!1,w.binary=!0,A="",w.compression="STORE",S="string");var R=null;R=A instanceof f||A instanceof l?A:g.isNode&&g.isStream(A)?new _(E,A):a.prepareContent(E,A,w.binary,w.optimizedBinaryString,w.base64);var U=new p(E,R,w);this.files[E]=U}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),h=e("./defaults"),f=e("./compressedObject"),p=e("./zipObject"),u=e("./generate"),g=e("./nodejsUtils"),_=e("./nodejs/NodejsStreamInputAdapter"),m=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var A=E.lastIndexOf("/");return 0<A?E.substring(0,A):""},d=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},y=function(E,A){return A=A!==void 0?A:h.createFolders,E=d(E),this.files[E]||s.call(this,E,null,{dir:!0,createFolders:A}),this.files[E]};function x(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var v={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var A,T,P;for(A in this.files)P=this.files[A],(T=A.slice(this.root.length,A.length))&&A.slice(0,this.root.length)===this.root&&E(T,P)},filter:function(E){var A=[];return this.forEach(function(T,P){E(T,P)&&A.push(P)}),A},file:function(E,A,T){if(arguments.length!==1)return E=this.root+E,s.call(this,E,A,T),this;if(x(E)){var P=E;return this.filter(function(w,D){return!D.dir&&P.test(w)})}var S=this.files[this.root+E];return S&&!S.dir?S:null},folder:function(E){if(!E)return this;if(x(E))return this.filter(function(S,w){return w.dir&&E.test(S)});var A=this.root+E,T=y.call(this,A),P=this.clone();return P.root=T.name,P},remove:function(E){E=this.root+E;var A=this.files[E];if(A||(E.slice(-1)!=="/"&&(E+="/"),A=this.files[E]),A&&!A.dir)delete this.files[E];else for(var T=this.filter(function(S,w){return w.name.slice(0,E.length)===E}),P=0;P<T.length;P++)delete this.files[T[P].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var A,T={};try{if((T=a.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=T.type.toLowerCase(),T.compression=T.compression.toUpperCase(),T.type==="binarystring"&&(T.type="string"),!T.type)throw new Error("No output type specified.");a.checkSupport(T.type),T.platform!=="darwin"&&T.platform!=="freebsd"&&T.platform!=="linux"&&T.platform!=="sunos"||(T.platform="UNIX"),T.platform==="win32"&&(T.platform="DOS");var P=T.comment||this.comment||"";A=u.generateWorker(this,T,P)}catch(S){(A=new l("error")).error(S)}return new c(A,T.type||"string",T.mimeType)},generateAsync:function(E,A){return this.generateInternalStream(E).accumulate(A)},generateNodeStream:function(E,A){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(A)}};n.exports=v},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,i){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,i){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),h=a.charCodeAt(2),f=a.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===l&&this.data[p+1]===c&&this.data[p+2]===h&&this.data[p+3]===f)return p-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),h=a.charCodeAt(2),f=a.charCodeAt(3),p=this.readData(4);return l===p[0]&&c===p[1]&&h===p[2]&&f===p[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,i){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,i){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,i){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,i){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,i){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");n.exports=function(f){var p=s.getTypeOf(f);return s.checkSupport(p),p!=="string"||o.uint8array?p==="nodebuffer"?new c(f):o.uint8array?new h(s.transformTo("uint8array",f)):new a(s.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,i){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,i){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,i){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,i){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(h){c.dataIsReady=!0,c.data=h,c.max=h&&h.length||0,c.type=s.getTypeOf(h),c.isPaused||c._tickAndRepeat()},function(h){c.error(h)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,i){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,i){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),c=e("../support"),h=e("../external"),f=null;if(c.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(g,_){return new h.Promise(function(m,d){var y=[],x=g._internalType,v=g._outputType,E=g._mimeType;g.on("data",function(A,T){y.push(A),_&&_(T)}).on("error",function(A){y=[],d(A)}).on("end",function(){try{var A=(function(T,P,S){switch(T){case"blob":return s.newBlob(s.transformTo("arraybuffer",P),S);case"base64":return l.encode(P);default:return s.transformTo(T,P)}})(v,(function(T,P){var S,w=0,D=null,R=0;for(S=0;S<P.length;S++)R+=P[S].length;switch(T){case"string":return P.join("");case"array":return Array.prototype.concat.apply([],P);case"uint8array":for(D=new Uint8Array(R),S=0;S<P.length;S++)D.set(P[S],w),w+=P[S].length;return D;case"nodebuffer":return Buffer.concat(P);default:throw new Error("concat : unsupported type '"+T+"'")}})(x,y),E);m(A)}catch(T){d(T)}y=[]}).resume()})}function u(g,_,m){var d=_;switch(_){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=_,this._mimeType=m,s.checkSupport(d),this._worker=g.pipe(new o(d)),g.lock()}catch(y){this._worker=new a("error"),this._worker.error(y)}}u.prototype={accumulate:function(g){return p(this,g)},on:function(g,_){var m=this;return g==="data"?this._worker.on(g,function(d){_.call(m,d.data,d.meta)}):this._worker.on(g,function(){s.delay(_,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},g)}},n.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!e("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,i){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),h=0;h<256;h++)c[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;c[254]=c[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function p(){l.call(this,"utf-8 encode")}i.utf8encode=function(u){return o.nodebuffer?a.newBufferFrom(u,"utf-8"):(function(g){var _,m,d,y,x,v=g.length,E=0;for(y=0;y<v;y++)(64512&(m=g.charCodeAt(y)))==55296&&y+1<v&&(64512&(d=g.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),y++),E+=m<128?1:m<2048?2:m<65536?3:4;for(_=o.uint8array?new Uint8Array(E):new Array(E),y=x=0;x<E;y++)(64512&(m=g.charCodeAt(y)))==55296&&y+1<v&&(64512&(d=g.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),y++),m<128?_[x++]=m:(m<2048?_[x++]=192|m>>>6:(m<65536?_[x++]=224|m>>>12:(_[x++]=240|m>>>18,_[x++]=128|m>>>12&63),_[x++]=128|m>>>6&63),_[x++]=128|63&m);return _})(u)},i.utf8decode=function(u){return o.nodebuffer?s.transformTo("nodebuffer",u).toString("utf-8"):(function(g){var _,m,d,y,x=g.length,v=new Array(2*x);for(_=m=0;_<x;)if((d=g[_++])<128)v[m++]=d;else if(4<(y=c[d]))v[m++]=65533,_+=y-1;else{for(d&=y===2?31:y===3?15:7;1<y&&_<x;)d=d<<6|63&g[_++],y--;1<y?v[m++]=65533:d<65536?v[m++]=d:(d-=65536,v[m++]=55296|d>>10&1023,v[m++]=56320|1023&d)}return v.length!==m&&(v.subarray?v=v.subarray(0,m):v.length=m),s.applyFromCharCode(v)})(u=s.transformTo(o.uint8array?"uint8array":"array",u))},s.inherits(f,l),f.prototype.processChunk=function(u){var g=s.transformTo(o.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var _=g;(g=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),g.set(_,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var m=(function(y,x){var v;for((x=x||y.length)>y.length&&(x=y.length),v=x-1;0<=v&&(192&y[v])==128;)v--;return v<0||v===0?x:v+c[y[v]]>x?v:x})(g),d=g;m!==g.length&&(o.uint8array?(d=g.subarray(0,m),this.leftOver=g.subarray(m,g.length)):(d=g.slice(0,m),this.leftOver=g.slice(m,g.length))),this.push({data:i.utf8decode(d),meta:u.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=f,s.inherits(p,l),p.prototype.processChunk=function(u){this.push({data:i.utf8encode(u.data),meta:u.meta})},i.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,i){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function c(_){return _}function h(_,m){for(var d=0;d<_.length;++d)m[d]=255&_.charCodeAt(d);return m}e("setimmediate"),i.newBlob=function(_,m){i.checkSupport("blob");try{return new Blob([_],{type:m})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(_),d.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(_,m,d){var y=[],x=0,v=_.length;if(v<=d)return String.fromCharCode.apply(null,_);for(;x<v;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,_.slice(x,Math.min(x+d,v)))):y.push(String.fromCharCode.apply(null,_.subarray(x,Math.min(x+d,v)))),x+=d;return y.join("")},stringifyByChar:function(_){for(var m="",d=0;d<_.length;d++)m+=String.fromCharCode(_[d]);return m},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}})()}};function p(_){var m=65536,d=i.getTypeOf(_),y=!0;if(d==="uint8array"?y=f.applyCanBeUsed.uint8array:d==="nodebuffer"&&(y=f.applyCanBeUsed.nodebuffer),y)for(;1<m;)try{return f.stringifyByChunk(_,d,m)}catch{m=Math.floor(m/2)}return f.stringifyByChar(_)}function u(_,m){for(var d=0;d<_.length;d++)m[d]=_[d];return m}i.applyFromCharCode=p;var g={};g.string={string:c,array:function(_){return h(_,new Array(_.length))},arraybuffer:function(_){return g.string.uint8array(_).buffer},uint8array:function(_){return h(_,new Uint8Array(_.length))},nodebuffer:function(_){return h(_,a.allocBuffer(_.length))}},g.array={string:p,array:c,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(_)}},g.arraybuffer={string:function(_){return p(new Uint8Array(_))},array:function(_){return u(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:c,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(new Uint8Array(_))}},g.uint8array={string:p,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:c,nodebuffer:function(_){return a.newBufferFrom(_)}},g.nodebuffer={string:p,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return g.nodebuffer.uint8array(_).buffer},uint8array:function(_){return u(_,new Uint8Array(_.length))},nodebuffer:c},i.transformTo=function(_,m){if(m=m||"",!_)return m;i.checkSupport(_);var d=i.getTypeOf(m);return g[d][_](m)},i.resolve=function(_){for(var m=_.split("/"),d=[],y=0;y<m.length;y++){var x=m[y];x==="."||x===""&&y!==0&&y!==m.length-1||(x===".."?d.pop():d.push(x))}return d.join("/")},i.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(_)?"nodebuffer":s.uint8array&&_ instanceof Uint8Array?"uint8array":s.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(_){var m,d,y="";for(d=0;d<(_||"").length;d++)y+="\\x"+((m=_.charCodeAt(d))<16?"0":"")+m.toString(16).toUpperCase();return y},i.delay=function(_,m,d){setImmediate(function(){_.apply(d||null,m||[])})},i.inherits=function(_,m){function d(){}d.prototype=m.prototype,_.prototype=new d},i.extend=function(){var _,m,d={};for(_=0;_<arguments.length;_++)for(m in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],m)&&d[m]===void 0&&(d[m]=arguments[_][m]);return d},i.prepareContent=function(_,m,d,y,x){return l.Promise.resolve(m).then(function(v){return s.blob&&(v instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(v))!==-1)&&typeof FileReader<"u"?new l.Promise(function(E,A){var T=new FileReader;T.onload=function(P){E(P.target.result)},T.onerror=function(P){A(P.target.error)},T.readAsArrayBuffer(v)}):v}).then(function(v){var E=i.getTypeOf(v);return E?(E==="arraybuffer"?v=i.transformTo("uint8array",v):E==="string"&&(x?v=o.decode(v):d&&y!==!0&&(v=(function(A){return h(A,s.uint8array?new Uint8Array(A.length):new Array(A.length))})(v))),v):l.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,i){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),c=e("./support");function h(f){this.files=[],this.loadOptions=f}h.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(p)+", expected "+o.pretty(f)+")")}},isSignature:function(f,p){var u=this.reader.index;this.reader.setIndex(f);var g=this.reader.readString(4)===p;return this.reader.setIndex(u),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),p=c.uint8array?"uint8array":"array",u=o.transformTo(p,f);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,p,u,g=this.zip64EndOfCentralSize-44;0<g;)f=this.reader.readInt(2),p=this.reader.readInt(4),u=this.reader.readData(p),this.zip64ExtensibleData[f]={id:f,length:p,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,p;for(f=0;f<this.files.length;f++)p=this.files[f],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var p=f;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var g=p-u;if(0<g)this.isSignature(p,a.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,i){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),h=e("./compressions"),f=e("./support");function p(u,g){this.options=u,this.loadOptions=g}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var g,_;if(u.skip(22),this.fileNameLength=u.readInt(2),_=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(m){for(var d in h)if(Object.prototype.hasOwnProperty.call(h,d)&&h[d].magic===m)return h[d];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,g,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var g=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(g),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var g,_,m,d=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<d;)g=u.readInt(2),_=u.readInt(2),m=u.readData(_),this.extraFields[g]={id:g,length:_,value:m};u.setIndex(d)},handleUTF8:function(){var u=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var _=o.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var d=o.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var g=s(u.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var g=s(u.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(u.length-5))}return null}},n.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,i){function s(g,_,m){this.name=g,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=_,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),h=e("./stream/GenericWorker");s.prototype={internalStream:function(g){var _=null,m="string";try{if(!g)throw new Error("No output type specified.");var d=(m=g.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),_=this._decompressWorker();var y=!this._dataBinary;y&&!d&&(_=_.pipe(new l.Utf8EncodeWorker)),!y&&d&&(_=_.pipe(new l.Utf8DecodeWorker))}catch(x){(_=new h("error")).error(x)}return new o(_,m,"")},async:function(g,_){return this.internalStream(g).accumulate(_)},nodeStream:function(g,_){return this.internalStream(g||"nodebuffer").toNodejsStream(_)},_compressWorker:function(g,_){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,g,_)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof h?this._data:new a(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<f.length;u++)s.prototype[f[u]]=p;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,i){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,h=new l(g),f=s.document.createTextNode("");h.observe(f,{characterData:!0}),o=function(){f.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var _=s.document.createElement("script");_.onreadystatechange=function(){g(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},s.document.documentElement.appendChild(_)}:function(){setTimeout(g,0)};else{var p=new s.MessageChannel;p.port1.onmessage=g,o=function(){p.port2.postMessage(0)}}var u=[];function g(){var _,m;a=!0;for(var d=u.length;d;){for(m=u,u=[],_=-1;++_<d;)m[_]();d=u.length}a=!1}n.exports=function(_){u.push(_)!==1||a||o()}}).call(this,typeof $r<"u"?$r:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,i){var s=e("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],h=["PENDING"];function f(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,d!==o&&_(this,d)}function p(d,y,x){this.promise=d,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function u(d,y,x){s(function(){var v;try{v=y(x)}catch(E){return a.reject(d,E)}v===d?a.reject(d,new TypeError("Cannot resolve promise with itself")):a.resolve(d,v)})}function g(d){var y=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof y=="function")return function(){y.apply(d,arguments)}}function _(d,y){var x=!1;function v(T){x||(x=!0,a.reject(d,T))}function E(T){x||(x=!0,a.resolve(d,T))}var A=m(function(){y(E,v)});A.status==="error"&&v(A.value)}function m(d,y){var x={};try{x.value=d(y),x.status="success"}catch(v){x.status="error",x.value=v}return x}(n.exports=f).prototype.finally=function(d){if(typeof d!="function")return this;var y=this.constructor;return this.then(function(x){return y.resolve(d()).then(function(){return x})},function(x){return y.resolve(d()).then(function(){throw x})})},f.prototype.catch=function(d){return this.then(null,d)},f.prototype.then=function(d,y){if(typeof d!="function"&&this.state===c||typeof y!="function"&&this.state===l)return this;var x=new this.constructor(o);return this.state!==h?u(x,this.state===c?d:y,this.outcome):this.queue.push(new p(x,d,y)),x},p.prototype.callFulfilled=function(d){a.resolve(this.promise,d)},p.prototype.otherCallFulfilled=function(d){u(this.promise,this.onFulfilled,d)},p.prototype.callRejected=function(d){a.reject(this.promise,d)},p.prototype.otherCallRejected=function(d){u(this.promise,this.onRejected,d)},a.resolve=function(d,y){var x=m(g,y);if(x.status==="error")return a.reject(d,x.value);var v=x.value;if(v)_(d,v);else{d.state=c,d.outcome=y;for(var E=-1,A=d.queue.length;++E<A;)d.queue[E].callFulfilled(y)}return d},a.reject=function(d,y){d.state=l,d.outcome=y;for(var x=-1,v=d.queue.length;++x<v;)d.queue[x].callRejected(y);return d},f.resolve=function(d){return d instanceof this?d:a.resolve(new this(o),d)},f.reject=function(d){var y=new this(o);return a.reject(y,d)},f.all=function(d){var y=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,v=!1;if(!x)return this.resolve([]);for(var E=new Array(x),A=0,T=-1,P=new this(o);++T<x;)S(d[T],T);return P;function S(w,D){y.resolve(w).then(function(R){E[D]=R,++A!==x||v||(v=!0,a.resolve(P,E))},function(R){v||(v=!0,a.reject(P,R))})}},f.race=function(d){var y=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,v=!1;if(!x)return this.resolve([]);for(var E=-1,A=new this(o);++E<x;)T=d[E],y.resolve(T).then(function(P){v||(v=!0,a.resolve(A,P))},function(P){v||(v=!0,a.reject(A,P))});var T;return A}},{immediate:36}],38:[function(e,n,i){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,i){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),h=Object.prototype.toString,f=0,p=-1,u=0,g=8;function _(d){if(!(this instanceof _))return new _(d);this.options=o.assign({level:p,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},d||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var x=s.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(x!==f)throw new Error(l[x]);if(y.header&&s.deflateSetHeader(this.strm,y.header),y.dictionary){var v;if(v=typeof y.dictionary=="string"?a.string2buf(y.dictionary):h.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(x=s.deflateSetDictionary(this.strm,v))!==f)throw new Error(l[x]);this._dict_set=!0}}function m(d,y){var x=new _(y);if(x.push(d,!0),x.err)throw x.msg||l[x.err];return x.result}_.prototype.push=function(d,y){var x,v,E=this.strm,A=this.options.chunkSize;if(this.ended)return!1;v=y===~~y?y:y===!0?4:0,typeof d=="string"?E.input=a.string2buf(d):h.call(d)==="[object ArrayBuffer]"?E.input=new Uint8Array(d):E.input=d,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new o.Buf8(A),E.next_out=0,E.avail_out=A),(x=s.deflate(E,v))!==1&&x!==f)return this.onEnd(x),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||v!==4&&v!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(E.output,E.next_out))):this.onData(o.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&x!==1);return v===4?(x=s.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===f):v!==2||(this.onEnd(f),!(E.avail_out=0))},_.prototype.onData=function(d){this.chunks.push(d)},_.prototype.onEnd=function(d){d===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},i.Deflate=_,i.deflate=m,i.deflateRaw=function(d,y){return(y=y||{}).raw=!0,m(d,y)},i.gzip=function(d,y){return(y=y||{}).gzip=!0,m(d,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,i){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),h=e("./zlib/zstream"),f=e("./zlib/gzheader"),p=Object.prototype.toString;function u(_){if(!(this instanceof u))return new u(_);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},_||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||_&&_.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&(15&m.windowBits)==0&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var d=s.inflateInit2(this.strm,m.windowBits);if(d!==l.Z_OK)throw new Error(c[d]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function g(_,m){var d=new u(m);if(d.push(_,!0),d.err)throw d.msg||c[d.err];return d.result}u.prototype.push=function(_,m){var d,y,x,v,E,A,T=this.strm,P=this.options.chunkSize,S=this.options.dictionary,w=!1;if(this.ended)return!1;y=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof _=="string"?T.input=a.binstring2buf(_):p.call(_)==="[object ArrayBuffer]"?T.input=new Uint8Array(_):T.input=_,T.next_in=0,T.avail_in=T.input.length;do{if(T.avail_out===0&&(T.output=new o.Buf8(P),T.next_out=0,T.avail_out=P),(d=s.inflate(T,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&S&&(A=typeof S=="string"?a.string2buf(S):p.call(S)==="[object ArrayBuffer]"?new Uint8Array(S):S,d=s.inflateSetDictionary(this.strm,A)),d===l.Z_BUF_ERROR&&w===!0&&(d=l.Z_OK,w=!1),d!==l.Z_STREAM_END&&d!==l.Z_OK)return this.onEnd(d),!(this.ended=!0);T.next_out&&(T.avail_out!==0&&d!==l.Z_STREAM_END&&(T.avail_in!==0||y!==l.Z_FINISH&&y!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=a.utf8border(T.output,T.next_out),v=T.next_out-x,E=a.buf2string(T.output,x),T.next_out=v,T.avail_out=P-v,v&&o.arraySet(T.output,T.output,x,v,0),this.onData(E)):this.onData(o.shrinkBuf(T.output,T.next_out)))),T.avail_in===0&&T.avail_out===0&&(w=!0)}while((0<T.avail_in||T.avail_out===0)&&d!==l.Z_STREAM_END);return d===l.Z_STREAM_END&&(y=l.Z_FINISH),y===l.Z_FINISH?(d=s.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===l.Z_OK):y!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(T.avail_out=0))},u.prototype.onData=function(_){this.chunks.push(_)},u.prototype.onEnd=function(_){_===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},i.Inflate=u,i.inflate=g,i.inflateRaw=function(_,m){return(m=m||{}).raw=!0,g(_,m)},i.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var h=c.shift();if(h){if(typeof h!="object")throw new TypeError(h+"must be non-object");for(var f in h)h.hasOwnProperty(f)&&(l[f]=h[f])}}return l},i.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,h,f,p){if(c.subarray&&l.subarray)l.set(c.subarray(h,h+f),p);else for(var u=0;u<f;u++)l[p+u]=c[h+u]},flattenChunks:function(l){var c,h,f,p,u,g;for(c=f=0,h=l.length;c<h;c++)f+=l[c].length;for(g=new Uint8Array(f),c=p=0,h=l.length;c<h;c++)u=l[c],g.set(u,p),p+=u.length;return g}},a={arraySet:function(l,c,h,f,p){for(var u=0;u<f;u++)l[p+u]=c[h+u]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(s)},{}],42:[function(e,n,i){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function h(f,p){if(p<65537&&(f.subarray&&a||!f.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(f,p));for(var u="",g=0;g<p;g++)u+=String.fromCharCode(f[g]);return u}l[254]=l[254]=1,i.string2buf=function(f){var p,u,g,_,m,d=f.length,y=0;for(_=0;_<d;_++)(64512&(u=f.charCodeAt(_)))==55296&&_+1<d&&(64512&(g=f.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(g-56320),_++),y+=u<128?1:u<2048?2:u<65536?3:4;for(p=new s.Buf8(y),_=m=0;m<y;_++)(64512&(u=f.charCodeAt(_)))==55296&&_+1<d&&(64512&(g=f.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(g-56320),_++),u<128?p[m++]=u:(u<2048?p[m++]=192|u>>>6:(u<65536?p[m++]=224|u>>>12:(p[m++]=240|u>>>18,p[m++]=128|u>>>12&63),p[m++]=128|u>>>6&63),p[m++]=128|63&u);return p},i.buf2binstring=function(f){return h(f,f.length)},i.binstring2buf=function(f){for(var p=new s.Buf8(f.length),u=0,g=p.length;u<g;u++)p[u]=f.charCodeAt(u);return p},i.buf2string=function(f,p){var u,g,_,m,d=p||f.length,y=new Array(2*d);for(u=g=0;u<d;)if((_=f[u++])<128)y[g++]=_;else if(4<(m=l[_]))y[g++]=65533,u+=m-1;else{for(_&=m===2?31:m===3?15:7;1<m&&u<d;)_=_<<6|63&f[u++],m--;1<m?y[g++]=65533:_<65536?y[g++]=_:(_-=65536,y[g++]=55296|_>>10&1023,y[g++]=56320|1023&_)}return h(y,g)},i.utf8border=function(f,p){var u;for((p=p||f.length)>f.length&&(p=f.length),u=p-1;0<=u&&(192&f[u])==128;)u--;return u<0||u===0?p:u+l[f[u]]>p?u:p}},{"./common":41}],43:[function(e,n,i){n.exports=function(s,o,a,l){for(var c=65535&s|0,h=s>>>16&65535|0,f=0;a!==0;){for(a-=f=2e3<a?2e3:a;h=h+(c=c+o[l++]|0)|0,--f;);c%=65521,h%=65521}return c|h<<16|0}},{}],44:[function(e,n,i){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,i){var s=(function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a})();n.exports=function(o,a,l,c){var h=s,f=c+l;o^=-1;for(var p=c;p<f;p++)o=o>>>8^h[255&(o^a[p])];return-1^o}},{}],46:[function(e,n,i){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),c=e("./crc32"),h=e("./messages"),f=0,p=4,u=0,g=-2,_=-1,m=4,d=2,y=8,x=9,v=286,E=30,A=19,T=2*v+1,P=15,S=3,w=258,D=w+S+1,R=42,U=113,b=1,F=2,$=3,V=4;function J(M,G){return M.msg=h[G],G}function tt(M){return(M<<1)-(4<M?9:0)}function ut(M){for(var G=M.length;0<=--G;)M[G]=0}function X(M){var G=M.state,k=G.pending;k>M.avail_out&&(k=M.avail_out),k!==0&&(o.arraySet(M.output,G.pending_buf,G.pending_out,k,M.next_out),M.next_out+=k,G.pending_out+=k,M.total_out+=k,M.avail_out-=k,G.pending-=k,G.pending===0&&(G.pending_out=0))}function Z(M,G){a._tr_flush_block(M,0<=M.block_start?M.block_start:-1,M.strstart-M.block_start,G),M.block_start=M.strstart,X(M.strm)}function xt(M,G){M.pending_buf[M.pending++]=G}function gt(M,G){M.pending_buf[M.pending++]=G>>>8&255,M.pending_buf[M.pending++]=255&G}function ft(M,G){var k,L,N=M.max_chain_length,B=M.strstart,K=M.prev_length,rt=M.nice_match,W=M.strstart>M.w_size-D?M.strstart-(M.w_size-D):0,I=M.window,C=M.w_mask,z=M.prev,Y=M.strstart+w,ot=I[B+K-1],Q=I[B+K];M.prev_length>=M.good_match&&(N>>=2),rt>M.lookahead&&(rt=M.lookahead);do if(I[(k=G)+K]===Q&&I[k+K-1]===ot&&I[k]===I[B]&&I[++k]===I[B+1]){B+=2,k++;do;while(I[++B]===I[++k]&&I[++B]===I[++k]&&I[++B]===I[++k]&&I[++B]===I[++k]&&I[++B]===I[++k]&&I[++B]===I[++k]&&I[++B]===I[++k]&&I[++B]===I[++k]&&B<Y);if(L=w-(Y-B),B=Y-w,K<L){if(M.match_start=G,rt<=(K=L))break;ot=I[B+K-1],Q=I[B+K]}}while((G=z[G&C])>W&&--N!=0);return K<=M.lookahead?K:M.lookahead}function st(M){var G,k,L,N,B,K,rt,W,I,C,z=M.w_size;do{if(N=M.window_size-M.lookahead-M.strstart,M.strstart>=z+(z-D)){for(o.arraySet(M.window,M.window,z,z,0),M.match_start-=z,M.strstart-=z,M.block_start-=z,G=k=M.hash_size;L=M.head[--G],M.head[G]=z<=L?L-z:0,--k;);for(G=k=z;L=M.prev[--G],M.prev[G]=z<=L?L-z:0,--k;);N+=z}if(M.strm.avail_in===0)break;if(K=M.strm,rt=M.window,W=M.strstart+M.lookahead,I=N,C=void 0,C=K.avail_in,I<C&&(C=I),k=C===0?0:(K.avail_in-=C,o.arraySet(rt,K.input,K.next_in,C,W),K.state.wrap===1?K.adler=l(K.adler,rt,C,W):K.state.wrap===2&&(K.adler=c(K.adler,rt,C,W)),K.next_in+=C,K.total_in+=C,C),M.lookahead+=k,M.lookahead+M.insert>=S)for(B=M.strstart-M.insert,M.ins_h=M.window[B],M.ins_h=(M.ins_h<<M.hash_shift^M.window[B+1])&M.hash_mask;M.insert&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[B+S-1])&M.hash_mask,M.prev[B&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=B,B++,M.insert--,!(M.lookahead+M.insert<S)););}while(M.lookahead<D&&M.strm.avail_in!==0)}function ct(M,G){for(var k,L;;){if(M.lookahead<D){if(st(M),M.lookahead<D&&G===f)return b;if(M.lookahead===0)break}if(k=0,M.lookahead>=S&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+S-1])&M.hash_mask,k=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),k!==0&&M.strstart-k<=M.w_size-D&&(M.match_length=ft(M,k)),M.match_length>=S)if(L=a._tr_tally(M,M.strstart-M.match_start,M.match_length-S),M.lookahead-=M.match_length,M.match_length<=M.max_lazy_match&&M.lookahead>=S){for(M.match_length--;M.strstart++,M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+S-1])&M.hash_mask,k=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart,--M.match_length!=0;);M.strstart++}else M.strstart+=M.match_length,M.match_length=0,M.ins_h=M.window[M.strstart],M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+1])&M.hash_mask;else L=a._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++;if(L&&(Z(M,!1),M.strm.avail_out===0))return b}return M.insert=M.strstart<S-1?M.strstart:S-1,G===p?(Z(M,!0),M.strm.avail_out===0?$:V):M.last_lit&&(Z(M,!1),M.strm.avail_out===0)?b:F}function dt(M,G){for(var k,L,N;;){if(M.lookahead<D){if(st(M),M.lookahead<D&&G===f)return b;if(M.lookahead===0)break}if(k=0,M.lookahead>=S&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+S-1])&M.hash_mask,k=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),M.prev_length=M.match_length,M.prev_match=M.match_start,M.match_length=S-1,k!==0&&M.prev_length<M.max_lazy_match&&M.strstart-k<=M.w_size-D&&(M.match_length=ft(M,k),M.match_length<=5&&(M.strategy===1||M.match_length===S&&4096<M.strstart-M.match_start)&&(M.match_length=S-1)),M.prev_length>=S&&M.match_length<=M.prev_length){for(N=M.strstart+M.lookahead-S,L=a._tr_tally(M,M.strstart-1-M.prev_match,M.prev_length-S),M.lookahead-=M.prev_length-1,M.prev_length-=2;++M.strstart<=N&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+S-1])&M.hash_mask,k=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),--M.prev_length!=0;);if(M.match_available=0,M.match_length=S-1,M.strstart++,L&&(Z(M,!1),M.strm.avail_out===0))return b}else if(M.match_available){if((L=a._tr_tally(M,0,M.window[M.strstart-1]))&&Z(M,!1),M.strstart++,M.lookahead--,M.strm.avail_out===0)return b}else M.match_available=1,M.strstart++,M.lookahead--}return M.match_available&&(L=a._tr_tally(M,0,M.window[M.strstart-1]),M.match_available=0),M.insert=M.strstart<S-1?M.strstart:S-1,G===p?(Z(M,!0),M.strm.avail_out===0?$:V):M.last_lit&&(Z(M,!1),M.strm.avail_out===0)?b:F}function _t(M,G,k,L,N){this.good_length=M,this.max_lazy=G,this.nice_length=k,this.max_chain=L,this.func=N}function St(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*T),this.dyn_dtree=new o.Buf16(2*(2*E+1)),this.bl_tree=new o.Buf16(2*(2*A+1)),ut(this.dyn_ltree),ut(this.dyn_dtree),ut(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(P+1),this.heap=new o.Buf16(2*v+1),ut(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*v+1),ut(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ut(M){var G;return M&&M.state?(M.total_in=M.total_out=0,M.data_type=d,(G=M.state).pending=0,G.pending_out=0,G.wrap<0&&(G.wrap=-G.wrap),G.status=G.wrap?R:U,M.adler=G.wrap===2?0:1,G.last_flush=f,a._tr_init(G),u):J(M,g)}function jt(M){var G=Ut(M);return G===u&&(function(k){k.window_size=2*k.w_size,ut(k.head),k.max_lazy_match=s[k.level].max_lazy,k.good_match=s[k.level].good_length,k.nice_match=s[k.level].nice_length,k.max_chain_length=s[k.level].max_chain,k.strstart=0,k.block_start=0,k.lookahead=0,k.insert=0,k.match_length=k.prev_length=S-1,k.match_available=0,k.ins_h=0})(M.state),G}function H(M,G,k,L,N,B){if(!M)return g;var K=1;if(G===_&&(G=6),L<0?(K=0,L=-L):15<L&&(K=2,L-=16),N<1||x<N||k!==y||L<8||15<L||G<0||9<G||B<0||m<B)return J(M,g);L===8&&(L=9);var rt=new St;return(M.state=rt).strm=M,rt.wrap=K,rt.gzhead=null,rt.w_bits=L,rt.w_size=1<<rt.w_bits,rt.w_mask=rt.w_size-1,rt.hash_bits=N+7,rt.hash_size=1<<rt.hash_bits,rt.hash_mask=rt.hash_size-1,rt.hash_shift=~~((rt.hash_bits+S-1)/S),rt.window=new o.Buf8(2*rt.w_size),rt.head=new o.Buf16(rt.hash_size),rt.prev=new o.Buf16(rt.w_size),rt.lit_bufsize=1<<N+6,rt.pending_buf_size=4*rt.lit_bufsize,rt.pending_buf=new o.Buf8(rt.pending_buf_size),rt.d_buf=1*rt.lit_bufsize,rt.l_buf=3*rt.lit_bufsize,rt.level=G,rt.strategy=B,rt.method=k,jt(M)}s=[new _t(0,0,0,0,function(M,G){var k=65535;for(k>M.pending_buf_size-5&&(k=M.pending_buf_size-5);;){if(M.lookahead<=1){if(st(M),M.lookahead===0&&G===f)return b;if(M.lookahead===0)break}M.strstart+=M.lookahead,M.lookahead=0;var L=M.block_start+k;if((M.strstart===0||M.strstart>=L)&&(M.lookahead=M.strstart-L,M.strstart=L,Z(M,!1),M.strm.avail_out===0)||M.strstart-M.block_start>=M.w_size-D&&(Z(M,!1),M.strm.avail_out===0))return b}return M.insert=0,G===p?(Z(M,!0),M.strm.avail_out===0?$:V):(M.strstart>M.block_start&&(Z(M,!1),M.strm.avail_out),b)}),new _t(4,4,8,4,ct),new _t(4,5,16,8,ct),new _t(4,6,32,32,ct),new _t(4,4,16,16,dt),new _t(8,16,32,32,dt),new _t(8,16,128,128,dt),new _t(8,32,128,256,dt),new _t(32,128,258,1024,dt),new _t(32,258,258,4096,dt)],i.deflateInit=function(M,G){return H(M,G,y,15,8,0)},i.deflateInit2=H,i.deflateReset=jt,i.deflateResetKeep=Ut,i.deflateSetHeader=function(M,G){return M&&M.state?M.state.wrap!==2?g:(M.state.gzhead=G,u):g},i.deflate=function(M,G){var k,L,N,B;if(!M||!M.state||5<G||G<0)return M?J(M,g):g;if(L=M.state,!M.output||!M.input&&M.avail_in!==0||L.status===666&&G!==p)return J(M,M.avail_out===0?-5:g);if(L.strm=M,k=L.last_flush,L.last_flush=G,L.status===R)if(L.wrap===2)M.adler=0,xt(L,31),xt(L,139),xt(L,8),L.gzhead?(xt(L,(L.gzhead.text?1:0)+(L.gzhead.hcrc?2:0)+(L.gzhead.extra?4:0)+(L.gzhead.name?8:0)+(L.gzhead.comment?16:0)),xt(L,255&L.gzhead.time),xt(L,L.gzhead.time>>8&255),xt(L,L.gzhead.time>>16&255),xt(L,L.gzhead.time>>24&255),xt(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),xt(L,255&L.gzhead.os),L.gzhead.extra&&L.gzhead.extra.length&&(xt(L,255&L.gzhead.extra.length),xt(L,L.gzhead.extra.length>>8&255)),L.gzhead.hcrc&&(M.adler=c(M.adler,L.pending_buf,L.pending,0)),L.gzindex=0,L.status=69):(xt(L,0),xt(L,0),xt(L,0),xt(L,0),xt(L,0),xt(L,L.level===9?2:2<=L.strategy||L.level<2?4:0),xt(L,3),L.status=U);else{var K=y+(L.w_bits-8<<4)<<8;K|=(2<=L.strategy||L.level<2?0:L.level<6?1:L.level===6?2:3)<<6,L.strstart!==0&&(K|=32),K+=31-K%31,L.status=U,gt(L,K),L.strstart!==0&&(gt(L,M.adler>>>16),gt(L,65535&M.adler)),M.adler=1}if(L.status===69)if(L.gzhead.extra){for(N=L.pending;L.gzindex<(65535&L.gzhead.extra.length)&&(L.pending!==L.pending_buf_size||(L.gzhead.hcrc&&L.pending>N&&(M.adler=c(M.adler,L.pending_buf,L.pending-N,N)),X(M),N=L.pending,L.pending!==L.pending_buf_size));)xt(L,255&L.gzhead.extra[L.gzindex]),L.gzindex++;L.gzhead.hcrc&&L.pending>N&&(M.adler=c(M.adler,L.pending_buf,L.pending-N,N)),L.gzindex===L.gzhead.extra.length&&(L.gzindex=0,L.status=73)}else L.status=73;if(L.status===73)if(L.gzhead.name){N=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>N&&(M.adler=c(M.adler,L.pending_buf,L.pending-N,N)),X(M),N=L.pending,L.pending===L.pending_buf_size)){B=1;break}B=L.gzindex<L.gzhead.name.length?255&L.gzhead.name.charCodeAt(L.gzindex++):0,xt(L,B)}while(B!==0);L.gzhead.hcrc&&L.pending>N&&(M.adler=c(M.adler,L.pending_buf,L.pending-N,N)),B===0&&(L.gzindex=0,L.status=91)}else L.status=91;if(L.status===91)if(L.gzhead.comment){N=L.pending;do{if(L.pending===L.pending_buf_size&&(L.gzhead.hcrc&&L.pending>N&&(M.adler=c(M.adler,L.pending_buf,L.pending-N,N)),X(M),N=L.pending,L.pending===L.pending_buf_size)){B=1;break}B=L.gzindex<L.gzhead.comment.length?255&L.gzhead.comment.charCodeAt(L.gzindex++):0,xt(L,B)}while(B!==0);L.gzhead.hcrc&&L.pending>N&&(M.adler=c(M.adler,L.pending_buf,L.pending-N,N)),B===0&&(L.status=103)}else L.status=103;if(L.status===103&&(L.gzhead.hcrc?(L.pending+2>L.pending_buf_size&&X(M),L.pending+2<=L.pending_buf_size&&(xt(L,255&M.adler),xt(L,M.adler>>8&255),M.adler=0,L.status=U)):L.status=U),L.pending!==0){if(X(M),M.avail_out===0)return L.last_flush=-1,u}else if(M.avail_in===0&&tt(G)<=tt(k)&&G!==p)return J(M,-5);if(L.status===666&&M.avail_in!==0)return J(M,-5);if(M.avail_in!==0||L.lookahead!==0||G!==f&&L.status!==666){var rt=L.strategy===2?(function(W,I){for(var C;;){if(W.lookahead===0&&(st(W),W.lookahead===0)){if(I===f)return b;break}if(W.match_length=0,C=a._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++,C&&(Z(W,!1),W.strm.avail_out===0))return b}return W.insert=0,I===p?(Z(W,!0),W.strm.avail_out===0?$:V):W.last_lit&&(Z(W,!1),W.strm.avail_out===0)?b:F})(L,G):L.strategy===3?(function(W,I){for(var C,z,Y,ot,Q=W.window;;){if(W.lookahead<=w){if(st(W),W.lookahead<=w&&I===f)return b;if(W.lookahead===0)break}if(W.match_length=0,W.lookahead>=S&&0<W.strstart&&(z=Q[Y=W.strstart-1])===Q[++Y]&&z===Q[++Y]&&z===Q[++Y]){ot=W.strstart+w;do;while(z===Q[++Y]&&z===Q[++Y]&&z===Q[++Y]&&z===Q[++Y]&&z===Q[++Y]&&z===Q[++Y]&&z===Q[++Y]&&z===Q[++Y]&&Y<ot);W.match_length=w-(ot-Y),W.match_length>W.lookahead&&(W.match_length=W.lookahead)}if(W.match_length>=S?(C=a._tr_tally(W,1,W.match_length-S),W.lookahead-=W.match_length,W.strstart+=W.match_length,W.match_length=0):(C=a._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++),C&&(Z(W,!1),W.strm.avail_out===0))return b}return W.insert=0,I===p?(Z(W,!0),W.strm.avail_out===0?$:V):W.last_lit&&(Z(W,!1),W.strm.avail_out===0)?b:F})(L,G):s[L.level].func(L,G);if(rt!==$&&rt!==V||(L.status=666),rt===b||rt===$)return M.avail_out===0&&(L.last_flush=-1),u;if(rt===F&&(G===1?a._tr_align(L):G!==5&&(a._tr_stored_block(L,0,0,!1),G===3&&(ut(L.head),L.lookahead===0&&(L.strstart=0,L.block_start=0,L.insert=0))),X(M),M.avail_out===0))return L.last_flush=-1,u}return G!==p?u:L.wrap<=0?1:(L.wrap===2?(xt(L,255&M.adler),xt(L,M.adler>>8&255),xt(L,M.adler>>16&255),xt(L,M.adler>>24&255),xt(L,255&M.total_in),xt(L,M.total_in>>8&255),xt(L,M.total_in>>16&255),xt(L,M.total_in>>24&255)):(gt(L,M.adler>>>16),gt(L,65535&M.adler)),X(M),0<L.wrap&&(L.wrap=-L.wrap),L.pending!==0?u:1)},i.deflateEnd=function(M){var G;return M&&M.state?(G=M.state.status)!==R&&G!==69&&G!==73&&G!==91&&G!==103&&G!==U&&G!==666?J(M,g):(M.state=null,G===U?J(M,-3):u):g},i.deflateSetDictionary=function(M,G){var k,L,N,B,K,rt,W,I,C=G.length;if(!M||!M.state||(B=(k=M.state).wrap)===2||B===1&&k.status!==R||k.lookahead)return g;for(B===1&&(M.adler=l(M.adler,G,C,0)),k.wrap=0,C>=k.w_size&&(B===0&&(ut(k.head),k.strstart=0,k.block_start=0,k.insert=0),I=new o.Buf8(k.w_size),o.arraySet(I,G,C-k.w_size,k.w_size,0),G=I,C=k.w_size),K=M.avail_in,rt=M.next_in,W=M.input,M.avail_in=C,M.next_in=0,M.input=G,st(k);k.lookahead>=S;){for(L=k.strstart,N=k.lookahead-(S-1);k.ins_h=(k.ins_h<<k.hash_shift^k.window[L+S-1])&k.hash_mask,k.prev[L&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=L,L++,--N;);k.strstart=L,k.lookahead=S-1,st(k)}return k.strstart+=k.lookahead,k.block_start=k.strstart,k.insert=k.lookahead,k.lookahead=0,k.match_length=k.prev_length=S-1,k.match_available=0,M.next_in=rt,M.input=W,M.avail_in=K,k.wrap=B,u},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,i){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,i){n.exports=function(s,o){var a,l,c,h,f,p,u,g,_,m,d,y,x,v,E,A,T,P,S,w,D,R,U,b,F;a=s.state,l=s.next_in,b=s.input,c=l+(s.avail_in-5),h=s.next_out,F=s.output,f=h-(o-s.avail_out),p=h+(s.avail_out-257),u=a.dmax,g=a.wsize,_=a.whave,m=a.wnext,d=a.window,y=a.hold,x=a.bits,v=a.lencode,E=a.distcode,A=(1<<a.lenbits)-1,T=(1<<a.distbits)-1;t:do{x<15&&(y+=b[l++]<<x,x+=8,y+=b[l++]<<x,x+=8),P=v[y&A];e:for(;;){if(y>>>=S=P>>>24,x-=S,(S=P>>>16&255)===0)F[h++]=65535&P;else{if(!(16&S)){if((64&S)==0){P=v[(65535&P)+(y&(1<<S)-1)];continue e}if(32&S){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}w=65535&P,(S&=15)&&(x<S&&(y+=b[l++]<<x,x+=8),w+=y&(1<<S)-1,y>>>=S,x-=S),x<15&&(y+=b[l++]<<x,x+=8,y+=b[l++]<<x,x+=8),P=E[y&T];n:for(;;){if(y>>>=S=P>>>24,x-=S,!(16&(S=P>>>16&255))){if((64&S)==0){P=E[(65535&P)+(y&(1<<S)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(D=65535&P,x<(S&=15)&&(y+=b[l++]<<x,(x+=8)<S&&(y+=b[l++]<<x,x+=8)),u<(D+=y&(1<<S)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(y>>>=S,x-=S,(S=h-f)<D){if(_<(S=D-S)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(U=d,(R=0)===m){if(R+=g-S,S<w){for(w-=S;F[h++]=d[R++],--S;);R=h-D,U=F}}else if(m<S){if(R+=g+m-S,(S-=m)<w){for(w-=S;F[h++]=d[R++],--S;);if(R=0,m<w){for(w-=S=m;F[h++]=d[R++],--S;);R=h-D,U=F}}}else if(R+=m-S,S<w){for(w-=S;F[h++]=d[R++],--S;);R=h-D,U=F}for(;2<w;)F[h++]=U[R++],F[h++]=U[R++],F[h++]=U[R++],w-=3;w&&(F[h++]=U[R++],1<w&&(F[h++]=U[R++]))}else{for(R=h-D;F[h++]=F[R++],F[h++]=F[R++],F[h++]=F[R++],2<(w-=3););w&&(F[h++]=F[R++],1<w&&(F[h++]=F[R++]))}break}}break}}while(l<c&&h<p);l-=w=x>>3,y&=(1<<(x-=w<<3))-1,s.next_in=l,s.next_out=h,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=h<p?p-h+257:257-(h-p),a.hold=y,a.bits=x}},{}],49:[function(e,n,i){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),h=1,f=2,p=0,u=-2,g=1,_=852,m=592;function d(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(R){var U;return R&&R.state?(U=R.state,R.total_in=R.total_out=U.total=0,R.msg="",U.wrap&&(R.adler=1&U.wrap),U.mode=g,U.last=0,U.havedict=0,U.dmax=32768,U.head=null,U.hold=0,U.bits=0,U.lencode=U.lendyn=new s.Buf32(_),U.distcode=U.distdyn=new s.Buf32(m),U.sane=1,U.back=-1,p):u}function v(R){var U;return R&&R.state?((U=R.state).wsize=0,U.whave=0,U.wnext=0,x(R)):u}function E(R,U){var b,F;return R&&R.state?(F=R.state,U<0?(b=0,U=-U):(b=1+(U>>4),U<48&&(U&=15)),U&&(U<8||15<U)?u:(F.window!==null&&F.wbits!==U&&(F.window=null),F.wrap=b,F.wbits=U,v(R))):u}function A(R,U){var b,F;return R?(F=new y,(R.state=F).window=null,(b=E(R,U))!==p&&(R.state=null),b):u}var T,P,S=!0;function w(R){if(S){var U;for(T=new s.Buf32(512),P=new s.Buf32(32),U=0;U<144;)R.lens[U++]=8;for(;U<256;)R.lens[U++]=9;for(;U<280;)R.lens[U++]=7;for(;U<288;)R.lens[U++]=8;for(c(h,R.lens,0,288,T,0,R.work,{bits:9}),U=0;U<32;)R.lens[U++]=5;c(f,R.lens,0,32,P,0,R.work,{bits:5}),S=!1}R.lencode=T,R.lenbits=9,R.distcode=P,R.distbits=5}function D(R,U,b,F){var $,V=R.state;return V.window===null&&(V.wsize=1<<V.wbits,V.wnext=0,V.whave=0,V.window=new s.Buf8(V.wsize)),F>=V.wsize?(s.arraySet(V.window,U,b-V.wsize,V.wsize,0),V.wnext=0,V.whave=V.wsize):(F<($=V.wsize-V.wnext)&&($=F),s.arraySet(V.window,U,b-F,$,V.wnext),(F-=$)?(s.arraySet(V.window,U,b-F,F,0),V.wnext=F,V.whave=V.wsize):(V.wnext+=$,V.wnext===V.wsize&&(V.wnext=0),V.whave<V.wsize&&(V.whave+=$))),0}i.inflateReset=v,i.inflateReset2=E,i.inflateResetKeep=x,i.inflateInit=function(R){return A(R,15)},i.inflateInit2=A,i.inflate=function(R,U){var b,F,$,V,J,tt,ut,X,Z,xt,gt,ft,st,ct,dt,_t,St,Ut,jt,H,M,G,k,L,N=0,B=new s.Buf8(4),K=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return u;(b=R.state).mode===12&&(b.mode=13),J=R.next_out,$=R.output,ut=R.avail_out,V=R.next_in,F=R.input,tt=R.avail_in,X=b.hold,Z=b.bits,xt=tt,gt=ut,G=p;t:for(;;)switch(b.mode){case g:if(b.wrap===0){b.mode=13;break}for(;Z<16;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}if(2&b.wrap&&X===35615){B[b.check=0]=255&X,B[1]=X>>>8&255,b.check=a(b.check,B,2,0),Z=X=0,b.mode=2;break}if(b.flags=0,b.head&&(b.head.done=!1),!(1&b.wrap)||(((255&X)<<8)+(X>>8))%31){R.msg="incorrect header check",b.mode=30;break}if((15&X)!=8){R.msg="unknown compression method",b.mode=30;break}if(Z-=4,M=8+(15&(X>>>=4)),b.wbits===0)b.wbits=M;else if(M>b.wbits){R.msg="invalid window size",b.mode=30;break}b.dmax=1<<M,R.adler=b.check=1,b.mode=512&X?10:12,Z=X=0;break;case 2:for(;Z<16;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}if(b.flags=X,(255&b.flags)!=8){R.msg="unknown compression method",b.mode=30;break}if(57344&b.flags){R.msg="unknown header flags set",b.mode=30;break}b.head&&(b.head.text=X>>8&1),512&b.flags&&(B[0]=255&X,B[1]=X>>>8&255,b.check=a(b.check,B,2,0)),Z=X=0,b.mode=3;case 3:for(;Z<32;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}b.head&&(b.head.time=X),512&b.flags&&(B[0]=255&X,B[1]=X>>>8&255,B[2]=X>>>16&255,B[3]=X>>>24&255,b.check=a(b.check,B,4,0)),Z=X=0,b.mode=4;case 4:for(;Z<16;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}b.head&&(b.head.xflags=255&X,b.head.os=X>>8),512&b.flags&&(B[0]=255&X,B[1]=X>>>8&255,b.check=a(b.check,B,2,0)),Z=X=0,b.mode=5;case 5:if(1024&b.flags){for(;Z<16;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}b.length=X,b.head&&(b.head.extra_len=X),512&b.flags&&(B[0]=255&X,B[1]=X>>>8&255,b.check=a(b.check,B,2,0)),Z=X=0}else b.head&&(b.head.extra=null);b.mode=6;case 6:if(1024&b.flags&&(tt<(ft=b.length)&&(ft=tt),ft&&(b.head&&(M=b.head.extra_len-b.length,b.head.extra||(b.head.extra=new Array(b.head.extra_len)),s.arraySet(b.head.extra,F,V,ft,M)),512&b.flags&&(b.check=a(b.check,F,ft,V)),tt-=ft,V+=ft,b.length-=ft),b.length))break t;b.length=0,b.mode=7;case 7:if(2048&b.flags){if(tt===0)break t;for(ft=0;M=F[V+ft++],b.head&&M&&b.length<65536&&(b.head.name+=String.fromCharCode(M)),M&&ft<tt;);if(512&b.flags&&(b.check=a(b.check,F,ft,V)),tt-=ft,V+=ft,M)break t}else b.head&&(b.head.name=null);b.length=0,b.mode=8;case 8:if(4096&b.flags){if(tt===0)break t;for(ft=0;M=F[V+ft++],b.head&&M&&b.length<65536&&(b.head.comment+=String.fromCharCode(M)),M&&ft<tt;);if(512&b.flags&&(b.check=a(b.check,F,ft,V)),tt-=ft,V+=ft,M)break t}else b.head&&(b.head.comment=null);b.mode=9;case 9:if(512&b.flags){for(;Z<16;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}if(X!==(65535&b.check)){R.msg="header crc mismatch",b.mode=30;break}Z=X=0}b.head&&(b.head.hcrc=b.flags>>9&1,b.head.done=!0),R.adler=b.check=0,b.mode=12;break;case 10:for(;Z<32;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}R.adler=b.check=d(X),Z=X=0,b.mode=11;case 11:if(b.havedict===0)return R.next_out=J,R.avail_out=ut,R.next_in=V,R.avail_in=tt,b.hold=X,b.bits=Z,2;R.adler=b.check=1,b.mode=12;case 12:if(U===5||U===6)break t;case 13:if(b.last){X>>>=7&Z,Z-=7&Z,b.mode=27;break}for(;Z<3;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}switch(b.last=1&X,Z-=1,3&(X>>>=1)){case 0:b.mode=14;break;case 1:if(w(b),b.mode=20,U!==6)break;X>>>=2,Z-=2;break t;case 2:b.mode=17;break;case 3:R.msg="invalid block type",b.mode=30}X>>>=2,Z-=2;break;case 14:for(X>>>=7&Z,Z-=7&Z;Z<32;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}if((65535&X)!=(X>>>16^65535)){R.msg="invalid stored block lengths",b.mode=30;break}if(b.length=65535&X,Z=X=0,b.mode=15,U===6)break t;case 15:b.mode=16;case 16:if(ft=b.length){if(tt<ft&&(ft=tt),ut<ft&&(ft=ut),ft===0)break t;s.arraySet($,F,V,ft,J),tt-=ft,V+=ft,ut-=ft,J+=ft,b.length-=ft;break}b.mode=12;break;case 17:for(;Z<14;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}if(b.nlen=257+(31&X),X>>>=5,Z-=5,b.ndist=1+(31&X),X>>>=5,Z-=5,b.ncode=4+(15&X),X>>>=4,Z-=4,286<b.nlen||30<b.ndist){R.msg="too many length or distance symbols",b.mode=30;break}b.have=0,b.mode=18;case 18:for(;b.have<b.ncode;){for(;Z<3;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}b.lens[K[b.have++]]=7&X,X>>>=3,Z-=3}for(;b.have<19;)b.lens[K[b.have++]]=0;if(b.lencode=b.lendyn,b.lenbits=7,k={bits:b.lenbits},G=c(0,b.lens,0,19,b.lencode,0,b.work,k),b.lenbits=k.bits,G){R.msg="invalid code lengths set",b.mode=30;break}b.have=0,b.mode=19;case 19:for(;b.have<b.nlen+b.ndist;){for(;_t=(N=b.lencode[X&(1<<b.lenbits)-1])>>>16&255,St=65535&N,!((dt=N>>>24)<=Z);){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}if(St<16)X>>>=dt,Z-=dt,b.lens[b.have++]=St;else{if(St===16){for(L=dt+2;Z<L;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}if(X>>>=dt,Z-=dt,b.have===0){R.msg="invalid bit length repeat",b.mode=30;break}M=b.lens[b.have-1],ft=3+(3&X),X>>>=2,Z-=2}else if(St===17){for(L=dt+3;Z<L;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}Z-=dt,M=0,ft=3+(7&(X>>>=dt)),X>>>=3,Z-=3}else{for(L=dt+7;Z<L;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}Z-=dt,M=0,ft=11+(127&(X>>>=dt)),X>>>=7,Z-=7}if(b.have+ft>b.nlen+b.ndist){R.msg="invalid bit length repeat",b.mode=30;break}for(;ft--;)b.lens[b.have++]=M}}if(b.mode===30)break;if(b.lens[256]===0){R.msg="invalid code -- missing end-of-block",b.mode=30;break}if(b.lenbits=9,k={bits:b.lenbits},G=c(h,b.lens,0,b.nlen,b.lencode,0,b.work,k),b.lenbits=k.bits,G){R.msg="invalid literal/lengths set",b.mode=30;break}if(b.distbits=6,b.distcode=b.distdyn,k={bits:b.distbits},G=c(f,b.lens,b.nlen,b.ndist,b.distcode,0,b.work,k),b.distbits=k.bits,G){R.msg="invalid distances set",b.mode=30;break}if(b.mode=20,U===6)break t;case 20:b.mode=21;case 21:if(6<=tt&&258<=ut){R.next_out=J,R.avail_out=ut,R.next_in=V,R.avail_in=tt,b.hold=X,b.bits=Z,l(R,gt),J=R.next_out,$=R.output,ut=R.avail_out,V=R.next_in,F=R.input,tt=R.avail_in,X=b.hold,Z=b.bits,b.mode===12&&(b.back=-1);break}for(b.back=0;_t=(N=b.lencode[X&(1<<b.lenbits)-1])>>>16&255,St=65535&N,!((dt=N>>>24)<=Z);){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}if(_t&&(240&_t)==0){for(Ut=dt,jt=_t,H=St;_t=(N=b.lencode[H+((X&(1<<Ut+jt)-1)>>Ut)])>>>16&255,St=65535&N,!(Ut+(dt=N>>>24)<=Z);){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}X>>>=Ut,Z-=Ut,b.back+=Ut}if(X>>>=dt,Z-=dt,b.back+=dt,b.length=St,_t===0){b.mode=26;break}if(32&_t){b.back=-1,b.mode=12;break}if(64&_t){R.msg="invalid literal/length code",b.mode=30;break}b.extra=15&_t,b.mode=22;case 22:if(b.extra){for(L=b.extra;Z<L;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}b.length+=X&(1<<b.extra)-1,X>>>=b.extra,Z-=b.extra,b.back+=b.extra}b.was=b.length,b.mode=23;case 23:for(;_t=(N=b.distcode[X&(1<<b.distbits)-1])>>>16&255,St=65535&N,!((dt=N>>>24)<=Z);){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}if((240&_t)==0){for(Ut=dt,jt=_t,H=St;_t=(N=b.distcode[H+((X&(1<<Ut+jt)-1)>>Ut)])>>>16&255,St=65535&N,!(Ut+(dt=N>>>24)<=Z);){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}X>>>=Ut,Z-=Ut,b.back+=Ut}if(X>>>=dt,Z-=dt,b.back+=dt,64&_t){R.msg="invalid distance code",b.mode=30;break}b.offset=St,b.extra=15&_t,b.mode=24;case 24:if(b.extra){for(L=b.extra;Z<L;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}b.offset+=X&(1<<b.extra)-1,X>>>=b.extra,Z-=b.extra,b.back+=b.extra}if(b.offset>b.dmax){R.msg="invalid distance too far back",b.mode=30;break}b.mode=25;case 25:if(ut===0)break t;if(ft=gt-ut,b.offset>ft){if((ft=b.offset-ft)>b.whave&&b.sane){R.msg="invalid distance too far back",b.mode=30;break}st=ft>b.wnext?(ft-=b.wnext,b.wsize-ft):b.wnext-ft,ft>b.length&&(ft=b.length),ct=b.window}else ct=$,st=J-b.offset,ft=b.length;for(ut<ft&&(ft=ut),ut-=ft,b.length-=ft;$[J++]=ct[st++],--ft;);b.length===0&&(b.mode=21);break;case 26:if(ut===0)break t;$[J++]=b.length,ut--,b.mode=21;break;case 27:if(b.wrap){for(;Z<32;){if(tt===0)break t;tt--,X|=F[V++]<<Z,Z+=8}if(gt-=ut,R.total_out+=gt,b.total+=gt,gt&&(R.adler=b.check=b.flags?a(b.check,$,gt,J-gt):o(b.check,$,gt,J-gt)),gt=ut,(b.flags?X:d(X))!==b.check){R.msg="incorrect data check",b.mode=30;break}Z=X=0}b.mode=28;case 28:if(b.wrap&&b.flags){for(;Z<32;){if(tt===0)break t;tt--,X+=F[V++]<<Z,Z+=8}if(X!==(4294967295&b.total)){R.msg="incorrect length check",b.mode=30;break}Z=X=0}b.mode=29;case 29:G=1;break t;case 30:G=-3;break t;case 31:return-4;case 32:default:return u}return R.next_out=J,R.avail_out=ut,R.next_in=V,R.avail_in=tt,b.hold=X,b.bits=Z,(b.wsize||gt!==R.avail_out&&b.mode<30&&(b.mode<27||U!==4))&&D(R,R.output,R.next_out,gt-R.avail_out)?(b.mode=31,-4):(xt-=R.avail_in,gt-=R.avail_out,R.total_in+=xt,R.total_out+=gt,b.total+=gt,b.wrap&&gt&&(R.adler=b.check=b.flags?a(b.check,$,gt,R.next_out-gt):o(b.check,$,gt,R.next_out-gt)),R.data_type=b.bits+(b.last?64:0)+(b.mode===12?128:0)+(b.mode===20||b.mode===15?256:0),(xt==0&&gt===0||U===4)&&G===p&&(G=-5),G)},i.inflateEnd=function(R){if(!R||!R.state)return u;var U=R.state;return U.window&&(U.window=null),R.state=null,p},i.inflateGetHeader=function(R,U){var b;return R&&R.state?(2&(b=R.state).wrap)==0?u:((b.head=U).done=!1,p):u},i.inflateSetDictionary=function(R,U){var b,F=U.length;return R&&R.state?(b=R.state).wrap!==0&&b.mode!==11?u:b.mode===11&&o(1,U,F,0)!==b.check?-3:D(R,U,F,F)?(b.mode=31,-4):(b.havedict=1,p):u},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,i){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(h,f,p,u,g,_,m,d){var y,x,v,E,A,T,P,S,w,D=d.bits,R=0,U=0,b=0,F=0,$=0,V=0,J=0,tt=0,ut=0,X=0,Z=null,xt=0,gt=new s.Buf16(16),ft=new s.Buf16(16),st=null,ct=0;for(R=0;R<=15;R++)gt[R]=0;for(U=0;U<u;U++)gt[f[p+U]]++;for($=D,F=15;1<=F&&gt[F]===0;F--);if(F<$&&($=F),F===0)return g[_++]=20971520,g[_++]=20971520,d.bits=1,0;for(b=1;b<F&&gt[b]===0;b++);for($<b&&($=b),R=tt=1;R<=15;R++)if(tt<<=1,(tt-=gt[R])<0)return-1;if(0<tt&&(h===0||F!==1))return-1;for(ft[1]=0,R=1;R<15;R++)ft[R+1]=ft[R]+gt[R];for(U=0;U<u;U++)f[p+U]!==0&&(m[ft[f[p+U]]++]=U);if(T=h===0?(Z=st=m,19):h===1?(Z=o,xt-=257,st=a,ct-=257,256):(Z=l,st=c,-1),R=b,A=_,J=U=X=0,v=-1,E=(ut=1<<(V=$))-1,h===1&&852<ut||h===2&&592<ut)return 1;for(;;){for(P=R-J,w=m[U]<T?(S=0,m[U]):m[U]>T?(S=st[ct+m[U]],Z[xt+m[U]]):(S=96,0),y=1<<R-J,b=x=1<<V;g[A+(X>>J)+(x-=y)]=P<<24|S<<16|w|0,x!==0;);for(y=1<<R-1;X&y;)y>>=1;if(y!==0?(X&=y-1,X+=y):X=0,U++,--gt[R]==0){if(R===F)break;R=f[p+m[U]]}if($<R&&(X&E)!==v){for(J===0&&(J=$),A+=b,tt=1<<(V=R-J);V+J<F&&!((tt-=gt[V+J])<=0);)V++,tt<<=1;if(ut+=1<<V,h===1&&852<ut||h===2&&592<ut)return 1;g[v=X&E]=$<<24|V<<16|A-_|0}}return X!==0&&(g[A+X]=R-J<<24|64<<16|0),d.bits=$,0}},{"../utils/common":41}],51:[function(e,n,i){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,i){var s=e("../utils/common"),o=0,a=1;function l(N){for(var B=N.length;0<=--B;)N[B]=0}var c=0,h=29,f=256,p=f+1+h,u=30,g=19,_=2*p+1,m=15,d=16,y=7,x=256,v=16,E=17,A=18,T=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],P=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],S=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],D=new Array(2*(p+2));l(D);var R=new Array(2*u);l(R);var U=new Array(512);l(U);var b=new Array(256);l(b);var F=new Array(h);l(F);var $,V,J,tt=new Array(u);function ut(N,B,K,rt,W){this.static_tree=N,this.extra_bits=B,this.extra_base=K,this.elems=rt,this.max_length=W,this.has_stree=N&&N.length}function X(N,B){this.dyn_tree=N,this.max_code=0,this.stat_desc=B}function Z(N){return N<256?U[N]:U[256+(N>>>7)]}function xt(N,B){N.pending_buf[N.pending++]=255&B,N.pending_buf[N.pending++]=B>>>8&255}function gt(N,B,K){N.bi_valid>d-K?(N.bi_buf|=B<<N.bi_valid&65535,xt(N,N.bi_buf),N.bi_buf=B>>d-N.bi_valid,N.bi_valid+=K-d):(N.bi_buf|=B<<N.bi_valid&65535,N.bi_valid+=K)}function ft(N,B,K){gt(N,K[2*B],K[2*B+1])}function st(N,B){for(var K=0;K|=1&N,N>>>=1,K<<=1,0<--B;);return K>>>1}function ct(N,B,K){var rt,W,I=new Array(m+1),C=0;for(rt=1;rt<=m;rt++)I[rt]=C=C+K[rt-1]<<1;for(W=0;W<=B;W++){var z=N[2*W+1];z!==0&&(N[2*W]=st(I[z]++,z))}}function dt(N){var B;for(B=0;B<p;B++)N.dyn_ltree[2*B]=0;for(B=0;B<u;B++)N.dyn_dtree[2*B]=0;for(B=0;B<g;B++)N.bl_tree[2*B]=0;N.dyn_ltree[2*x]=1,N.opt_len=N.static_len=0,N.last_lit=N.matches=0}function _t(N){8<N.bi_valid?xt(N,N.bi_buf):0<N.bi_valid&&(N.pending_buf[N.pending++]=N.bi_buf),N.bi_buf=0,N.bi_valid=0}function St(N,B,K,rt){var W=2*B,I=2*K;return N[W]<N[I]||N[W]===N[I]&&rt[B]<=rt[K]}function Ut(N,B,K){for(var rt=N.heap[K],W=K<<1;W<=N.heap_len&&(W<N.heap_len&&St(B,N.heap[W+1],N.heap[W],N.depth)&&W++,!St(B,rt,N.heap[W],N.depth));)N.heap[K]=N.heap[W],K=W,W<<=1;N.heap[K]=rt}function jt(N,B,K){var rt,W,I,C,z=0;if(N.last_lit!==0)for(;rt=N.pending_buf[N.d_buf+2*z]<<8|N.pending_buf[N.d_buf+2*z+1],W=N.pending_buf[N.l_buf+z],z++,rt===0?ft(N,W,B):(ft(N,(I=b[W])+f+1,B),(C=T[I])!==0&&gt(N,W-=F[I],C),ft(N,I=Z(--rt),K),(C=P[I])!==0&&gt(N,rt-=tt[I],C)),z<N.last_lit;);ft(N,x,B)}function H(N,B){var K,rt,W,I=B.dyn_tree,C=B.stat_desc.static_tree,z=B.stat_desc.has_stree,Y=B.stat_desc.elems,ot=-1;for(N.heap_len=0,N.heap_max=_,K=0;K<Y;K++)I[2*K]!==0?(N.heap[++N.heap_len]=ot=K,N.depth[K]=0):I[2*K+1]=0;for(;N.heap_len<2;)I[2*(W=N.heap[++N.heap_len]=ot<2?++ot:0)]=1,N.depth[W]=0,N.opt_len--,z&&(N.static_len-=C[2*W+1]);for(B.max_code=ot,K=N.heap_len>>1;1<=K;K--)Ut(N,I,K);for(W=Y;K=N.heap[1],N.heap[1]=N.heap[N.heap_len--],Ut(N,I,1),rt=N.heap[1],N.heap[--N.heap_max]=K,N.heap[--N.heap_max]=rt,I[2*W]=I[2*K]+I[2*rt],N.depth[W]=(N.depth[K]>=N.depth[rt]?N.depth[K]:N.depth[rt])+1,I[2*K+1]=I[2*rt+1]=W,N.heap[1]=W++,Ut(N,I,1),2<=N.heap_len;);N.heap[--N.heap_max]=N.heap[1],(function(Q,Mt){var pt,At,Et,ht,Ct,kt,Dt=Mt.dyn_tree,Rt=Mt.max_code,Xt=Mt.stat_desc.static_tree,j=Mt.stat_desc.has_stree,yt=Mt.stat_desc.extra_bits,Tt=Mt.stat_desc.extra_base,Lt=Mt.stat_desc.max_length,vt=0;for(ht=0;ht<=m;ht++)Q.bl_count[ht]=0;for(Dt[2*Q.heap[Q.heap_max]+1]=0,pt=Q.heap_max+1;pt<_;pt++)Lt<(ht=Dt[2*Dt[2*(At=Q.heap[pt])+1]+1]+1)&&(ht=Lt,vt++),Dt[2*At+1]=ht,Rt<At||(Q.bl_count[ht]++,Ct=0,Tt<=At&&(Ct=yt[At-Tt]),kt=Dt[2*At],Q.opt_len+=kt*(ht+Ct),j&&(Q.static_len+=kt*(Xt[2*At+1]+Ct)));if(vt!==0){do{for(ht=Lt-1;Q.bl_count[ht]===0;)ht--;Q.bl_count[ht]--,Q.bl_count[ht+1]+=2,Q.bl_count[Lt]--,vt-=2}while(0<vt);for(ht=Lt;ht!==0;ht--)for(At=Q.bl_count[ht];At!==0;)Rt<(Et=Q.heap[--pt])||(Dt[2*Et+1]!==ht&&(Q.opt_len+=(ht-Dt[2*Et+1])*Dt[2*Et],Dt[2*Et+1]=ht),At--)}})(N,B),ct(I,ot,N.bl_count)}function M(N,B,K){var rt,W,I=-1,C=B[1],z=0,Y=7,ot=4;for(C===0&&(Y=138,ot=3),B[2*(K+1)+1]=65535,rt=0;rt<=K;rt++)W=C,C=B[2*(rt+1)+1],++z<Y&&W===C||(z<ot?N.bl_tree[2*W]+=z:W!==0?(W!==I&&N.bl_tree[2*W]++,N.bl_tree[2*v]++):z<=10?N.bl_tree[2*E]++:N.bl_tree[2*A]++,I=W,ot=(z=0)===C?(Y=138,3):W===C?(Y=6,3):(Y=7,4))}function G(N,B,K){var rt,W,I=-1,C=B[1],z=0,Y=7,ot=4;for(C===0&&(Y=138,ot=3),rt=0;rt<=K;rt++)if(W=C,C=B[2*(rt+1)+1],!(++z<Y&&W===C)){if(z<ot)for(;ft(N,W,N.bl_tree),--z!=0;);else W!==0?(W!==I&&(ft(N,W,N.bl_tree),z--),ft(N,v,N.bl_tree),gt(N,z-3,2)):z<=10?(ft(N,E,N.bl_tree),gt(N,z-3,3)):(ft(N,A,N.bl_tree),gt(N,z-11,7));I=W,ot=(z=0)===C?(Y=138,3):W===C?(Y=6,3):(Y=7,4)}}l(tt);var k=!1;function L(N,B,K,rt){gt(N,(c<<1)+(rt?1:0),3),(function(W,I,C,z){_t(W),xt(W,C),xt(W,~C),s.arraySet(W.pending_buf,W.window,I,C,W.pending),W.pending+=C})(N,B,K)}i._tr_init=function(N){k||((function(){var B,K,rt,W,I,C=new Array(m+1);for(W=rt=0;W<h-1;W++)for(F[W]=rt,B=0;B<1<<T[W];B++)b[rt++]=W;for(b[rt-1]=W,W=I=0;W<16;W++)for(tt[W]=I,B=0;B<1<<P[W];B++)U[I++]=W;for(I>>=7;W<u;W++)for(tt[W]=I<<7,B=0;B<1<<P[W]-7;B++)U[256+I++]=W;for(K=0;K<=m;K++)C[K]=0;for(B=0;B<=143;)D[2*B+1]=8,B++,C[8]++;for(;B<=255;)D[2*B+1]=9,B++,C[9]++;for(;B<=279;)D[2*B+1]=7,B++,C[7]++;for(;B<=287;)D[2*B+1]=8,B++,C[8]++;for(ct(D,p+1,C),B=0;B<u;B++)R[2*B+1]=5,R[2*B]=st(B,5);$=new ut(D,T,f+1,p,m),V=new ut(R,P,0,u,m),J=new ut(new Array(0),S,0,g,y)})(),k=!0),N.l_desc=new X(N.dyn_ltree,$),N.d_desc=new X(N.dyn_dtree,V),N.bl_desc=new X(N.bl_tree,J),N.bi_buf=0,N.bi_valid=0,dt(N)},i._tr_stored_block=L,i._tr_flush_block=function(N,B,K,rt){var W,I,C=0;0<N.level?(N.strm.data_type===2&&(N.strm.data_type=(function(z){var Y,ot=4093624447;for(Y=0;Y<=31;Y++,ot>>>=1)if(1&ot&&z.dyn_ltree[2*Y]!==0)return o;if(z.dyn_ltree[18]!==0||z.dyn_ltree[20]!==0||z.dyn_ltree[26]!==0)return a;for(Y=32;Y<f;Y++)if(z.dyn_ltree[2*Y]!==0)return a;return o})(N)),H(N,N.l_desc),H(N,N.d_desc),C=(function(z){var Y;for(M(z,z.dyn_ltree,z.l_desc.max_code),M(z,z.dyn_dtree,z.d_desc.max_code),H(z,z.bl_desc),Y=g-1;3<=Y&&z.bl_tree[2*w[Y]+1]===0;Y--);return z.opt_len+=3*(Y+1)+5+5+4,Y})(N),W=N.opt_len+3+7>>>3,(I=N.static_len+3+7>>>3)<=W&&(W=I)):W=I=K+5,K+4<=W&&B!==-1?L(N,B,K,rt):N.strategy===4||I===W?(gt(N,2+(rt?1:0),3),jt(N,D,R)):(gt(N,4+(rt?1:0),3),(function(z,Y,ot,Q){var Mt;for(gt(z,Y-257,5),gt(z,ot-1,5),gt(z,Q-4,4),Mt=0;Mt<Q;Mt++)gt(z,z.bl_tree[2*w[Mt]+1],3);G(z,z.dyn_ltree,Y-1),G(z,z.dyn_dtree,ot-1)})(N,N.l_desc.max_code+1,N.d_desc.max_code+1,C+1),jt(N,N.dyn_ltree,N.dyn_dtree)),dt(N),rt&&_t(N)},i._tr_tally=function(N,B,K){return N.pending_buf[N.d_buf+2*N.last_lit]=B>>>8&255,N.pending_buf[N.d_buf+2*N.last_lit+1]=255&B,N.pending_buf[N.l_buf+N.last_lit]=255&K,N.last_lit++,B===0?N.dyn_ltree[2*K]++:(N.matches++,B--,N.dyn_ltree[2*(b[K]+f+1)]++,N.dyn_dtree[2*Z(B)]++),N.last_lit===N.lit_bufsize-1},i._tr_align=function(N){gt(N,2,3),ft(N,x,D),(function(B){B.bi_valid===16?(xt(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(N)}},{"../utils/common":41}],53:[function(e,n,i){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,i){(function(s){(function(o,a){if(!o.setImmediate){var l,c,h,f,p=1,u={},g=!1,_=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,l={}.toString.call(o.process)==="[object process]"?function(v){process.nextTick(function(){y(v)})}:(function(){if(o.postMessage&&!o.importScripts){var v=!0,E=o.onmessage;return o.onmessage=function(){v=!1},o.postMessage("","*"),o.onmessage=E,v}})()?(f="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",x,!1):o.attachEvent("onmessage",x),function(v){o.postMessage(f+v,"*")}):o.MessageChannel?((h=new MessageChannel).port1.onmessage=function(v){y(v.data)},function(v){h.port2.postMessage(v)}):_&&"onreadystatechange"in _.createElement("script")?(c=_.documentElement,function(v){var E=_.createElement("script");E.onreadystatechange=function(){y(v),E.onreadystatechange=null,c.removeChild(E),E=null},c.appendChild(E)}):function(v){setTimeout(y,0,v)},m.setImmediate=function(v){typeof v!="function"&&(v=new Function(""+v));for(var E=new Array(arguments.length-1),A=0;A<E.length;A++)E[A]=arguments[A+1];var T={callback:v,args:E};return u[p]=T,l(p),p++},m.clearImmediate=d}function d(v){delete u[v]}function y(v){if(g)setTimeout(y,0,v);else{var E=u[v];if(E){g=!0;try{(function(A){var T=A.callback,P=A.args;switch(P.length){case 0:T();break;case 1:T(P[0]);break;case 2:T(P[0],P[1]);break;case 3:T(P[0],P[1],P[2]);break;default:T.apply(a,P)}})(E)}finally{d(v),g=!1}}}}function x(v){v.source===o&&typeof v.data=="string"&&v.data.indexOf(f)===0&&y(+v.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof $r<"u"?$r:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(ho)),ho.exports}var Vf=Hf();const eh=th(Vf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="180",$i={ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gf=0,$l=1,Wf=2,nh=1,Xf=2,On=3,ni=0,Ye=1,En=2,ti=0,ji=1,jl=2,Zl=3,Kl=4,qf=5,mi=100,Yf=101,$f=102,jf=103,Zf=104,Kf=200,Jf=201,Qf=202,td=203,Sa=204,Ea=205,ed=206,nd=207,id=208,rd=209,sd=210,od=211,ad=212,ld=213,cd=214,wa=0,Ta=1,Aa=2,Ji=3,Ca=4,Ra=5,Pa=6,Ia=7,ih=0,ud=1,hd=2,ei=0,fd=1,dd=2,pd=3,md=4,gd=5,_d=6,vd=7,rh=300,Qi=301,tr=302,La=303,Da=304,js=306,Os=1e3,Jn=1001,Fs=1002,dn=1003,sh=1004,vr=1005,vn=1006,Cs=1007,Qn=1008,Vn=1009,oh=1010,ah=1011,Rr=1012,vl=1013,bi=1014,zn=1015,Wr=1016,xl=1017,yl=1018,Pr=1020,lh=35902,ch=35899,uh=1021,hh=1022,fn=1023,Ir=1026,Lr=1027,fh=1028,bl=1029,dh=1030,Ml=1031,Sl=1033,Rs=33776,Ps=33777,Is=33778,Ls=33779,Na=35840,Ua=35841,Oa=35842,Fa=35843,Ba=36196,za=37492,ka=37496,Ha=37808,Va=37809,Ga=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,$a=37815,ja=37816,Za=37817,Ka=37818,Ja=37819,Qa=37820,tl=37821,el=36492,nl=36494,il=36495,rl=36283,sl=36284,ol=36285,al=36286,xd=2300,yd=2301,bd=3200,Md=3201,ph=0,Sd=1,Bn="",Oe="srgb",er="srgb-linear",Bs="linear",ue="srgb",Ri=7680,Jl=519,Ed=512,wd=513,Td=514,mh=515,Ad=516,Cd=517,Rd=518,Pd=519,Ql=35044,tc="300 es",wn=2e3,zs=2001;class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ec=1234567;const Zi=Math.PI/180,Dr=180/Math.PI;function wi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[r&255]+Ne[r>>8&255]+Ne[r>>16&255]+Ne[r>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function $t(r,t,e){return Math.max(t,Math.min(e,r))}function El(r,t){return(r%t+t)%t}function Id(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Ld(r,t,e){return r!==t?(e-r)/(t-r):0}function Er(r,t,e){return(1-e)*r+e*t}function Dd(r,t,e,n){return Er(r,t,1-Math.exp(-e*n))}function Nd(r,t=1){return t-Math.abs(El(r,t*2)-t)}function Ud(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Od(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Fd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Bd(r,t){return r+Math.random()*(t-r)}function zd(r){return r*(.5-Math.random())}function kd(r){r!==void 0&&(ec=r);let t=ec+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hd(r){return r*Zi}function Vd(r){return r*Dr}function Gd(r){return(r&r-1)===0&&r!==0}function Wd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Xd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qd(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),p=o((t-n)/2),u=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*f,l*p,a*c);break;case"YZY":r.set(l*p,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*p,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*u,a*c);break;case"YXY":r.set(l*u,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ze(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ks={DEG2RAD:Zi,RAD2DEG:Dr,generateUUID:wi,clamp:$t,euclideanModulo:El,mapLinear:Id,inverseLerp:Ld,lerp:Er,damp:Dd,pingpong:Nd,smoothstep:Ud,smootherstep:Od,randInt:Fd,randFloat:Bd,randFloatSpread:zd,seededRandom:kd,degToRad:Hd,radToDeg:Vd,isPowerOfTwo:Gd,ceilPowerOfTwo:Wd,floorPowerOfTwo:Xd,setQuaternionFromProperEuler:qd,normalize:ze,denormalize:Xi};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ii{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const p=s[o+0],u=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==p||c!==u||h!==g){let m=1-a;const d=l*p+c*u+h*g+f*_,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,d*y);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const v=a*y;if(l=l*m+p*v,c=c*m+u*v,h=h*m+g*v,f=f*m+_*v,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],p=s[o+1],u=s[o+2],g=s[o+3];return t[e]=a*g+h*f+l*u-c*p,t[e+1]=l*g+h*p+c*f-a*u,t[e+2]=c*g+h*u+a*p-l*f,t[e+3]=h*g-a*f-l*p-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),p=l(n/2),u=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=p*h*f+c*u*g,this._y=c*u*f-p*h*g,this._z=c*h*g+p*u*f,this._w=c*h*f-p*u*g;break;case"YXZ":this._x=p*h*f+c*u*g,this._y=c*u*f-p*h*g,this._z=c*h*g-p*u*f,this._w=c*h*f+p*u*g;break;case"ZXY":this._x=p*h*f-c*u*g,this._y=c*u*f+p*h*g,this._z=c*h*g+p*u*f,this._w=c*h*f-p*u*g;break;case"ZYX":this._x=p*h*f-c*u*g,this._y=c*u*f+p*h*g,this._z=c*h*g-p*u*f,this._w=c*h*f+p*u*g;break;case"YZX":this._x=p*h*f+c*u*g,this._y=c*u*f+p*h*g,this._z=c*h*g-p*u*f,this._w=c*h*f-p*u*g;break;case"XZY":this._x=p*h*f-c*u*g,this._y=c*u*f-p*h*g,this._z=c*h*g+p*u*f,this._w=c*h*f+p*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],p=n+a+f;if(p>0){const u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(s+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(s-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=i*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new q,nc=new ii;class Wt{constructor(t,e,n,i,s,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],p=n[2],u=n[5],g=n[8],_=i[0],m=i[3],d=i[6],y=i[1],x=i[4],v=i[7],E=i[2],A=i[5],T=i[8];return s[0]=o*_+a*y+l*E,s[3]=o*m+a*x+l*A,s[6]=o*d+a*v+l*T,s[1]=c*_+h*y+f*E,s[4]=c*m+h*x+f*A,s[7]=c*d+h*v+f*T,s[2]=p*_+u*y+g*E,s[5]=p*m+u*x+g*A,s[8]=p*d+u*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,p=a*l-h*s,u=c*s-o*l,g=e*f+n*p+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=p*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const po=new Wt;function gh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Hs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yd(){const r=Hs("canvas");return r.style.display="block",r}const ic={};function Nr(r){r in ic||(ic[r]=!0,console.warn(r))}function $d(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const rc=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jd(){const r={enabled:!0,workingColorSpace:er,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ue&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bn?Bs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[er]:{primaries:t,whitePoint:n,transfer:Bs,toXYZ:rc,fromXYZ:sc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:rc,fromXYZ:sc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),r}const ie=jd();function Hn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ki(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Pi;class _h{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Pi===void 0&&(Pi=Hs("canvas")),Pi.width=t.width,Pi.height=t.height;const i=Pi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Hn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zd=0;class Zs{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(mo(i[o].image)):s.push(mo(i[o]))}else s=mo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function mo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_h.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kd=0;const go=new q;class He extends Ei{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Jn,i=Jn,s=vn,o=Qn,a=fn,l=Vn,c=He.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=wi(),this.name="",this.source=new Zs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Os:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Fs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Os:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Fs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=rh;He.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,i=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],f=l[8],p=l[1],u=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(u+1)/2,E=(d+1)/2,A=(h+p)/4,T=(f+_)/4,P=(g+m)/4;return x>v&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=T/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=P/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=T/s,i=P/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(p-h)/y,this.w=Math.acos((c+u+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jd extends Ei{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new He(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Zs(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Jd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vh extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qd extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xr{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(s,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Kr.subVectors(this.max,cr),Ii.subVectors(t.a,cr),Li.subVectors(t.b,cr),Di.subVectors(t.c,cr),Wn.subVectors(Li,Ii),Xn.subVectors(Di,Li),ai.subVectors(Ii,Di);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ai.z,ai.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ai.z,0,-ai.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ai.y,ai.x,0];return!_o(e,Ii,Li,Di,Kr)||(e=[1,0,0,0,1,0,0,0,1],!_o(e,Ii,Li,Di,Kr))?!1:(Jr.crossVectors(Wn,Xn),e=[Jr.x,Jr.y,Jr.z],_o(e,Ii,Li,Di,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new q,new q,new q,new q,new q,new q,new q,new q],mn=new q,Zr=new Xr,Ii=new q,Li=new q,Di=new q,Wn=new q,Xn=new q,ai=new q,cr=new q,Kr=new q,Jr=new q,li=new q;function _o(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){li.fromArray(r,s);const a=i.x*Math.abs(li.x)+i.y*Math.abs(li.y)+i.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),h=n.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const tp=new Xr,ur=new q,vo=new q;class Ks{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);const e=ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ur,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(vo)),this.expandByPoint(ur.copy(t.center).sub(vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const In=new q,xo=new q,Qr=new q,qn=new q,yo=new q,ts=new q,bo=new q;class wl{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xo.copy(t).add(e).multiplyScalar(.5),Qr.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(xo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Qr),a=qn.dot(this.direction),l=-qn.dot(Qr),c=qn.lengthSq(),h=Math.abs(1-o*o);let f,p,u,g;if(h>0)if(f=o*l-a,p=o*a-l,g=s*h,f>=0)if(p>=-g)if(p<=g){const _=1/h;f*=_,p*=_,u=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=s,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-s,-l),s),u=p*(p+2*l)+c):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+p*(p+2*l)+c);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(xo).addScaledVector(Qr,p),u}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,i=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,i=(t.min.x-p.x)*c),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,s){yo.subVectors(e,t),ts.subVectors(n,t),bo.crossVectors(yo,ts);let o=this.direction.dot(bo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);const l=a*this.direction.dot(ts.crossVectors(qn,ts));if(l<0)return null;const c=a*this.direction.dot(yo.cross(qn));if(c<0||l+c>o)return null;const h=-a*qn.dot(bo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,i,s,o,a,l,c,h,f,p,u,g,_,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,p,u,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,f,p,u,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=p,d[3]=u,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=o*h,u=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+g*c,e[5]=p-_*c,e[9]=-a*l,e[2]=_-p*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*h,u=l*f,g=c*h,_=c*f;e[0]=p+_*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=_+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*h,u=l*f,g=c*h,_=c*f;e[0]=p-_*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*h,u=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-u,e[8]=p*c+_,e[1]=l*f,e[5]=_*c+p,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-p*f,e[8]=g*f+u,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*f+g,e[10]=p-_*f}else if(t.order==="XZY"){const p=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=p*f+_,e[5]=o*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*h,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ep,t,np)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Yn.crossVectors(n,Ke),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Yn.crossVectors(n,Ke)),Yn.normalize(),es.crossVectors(Ke,Yn),i[0]=Yn.x,i[4]=es.x,i[8]=Ke.x,i[1]=Yn.y,i[5]=es.y,i[9]=Ke.y,i[2]=Yn.z,i[6]=es.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],p=n[9],u=n[13],g=n[2],_=n[6],m=n[10],d=n[14],y=n[3],x=n[7],v=n[11],E=n[15],A=i[0],T=i[4],P=i[8],S=i[12],w=i[1],D=i[5],R=i[9],U=i[13],b=i[2],F=i[6],$=i[10],V=i[14],J=i[3],tt=i[7],ut=i[11],X=i[15];return s[0]=o*A+a*w+l*b+c*J,s[4]=o*T+a*D+l*F+c*tt,s[8]=o*P+a*R+l*$+c*ut,s[12]=o*S+a*U+l*V+c*X,s[1]=h*A+f*w+p*b+u*J,s[5]=h*T+f*D+p*F+u*tt,s[9]=h*P+f*R+p*$+u*ut,s[13]=h*S+f*U+p*V+u*X,s[2]=g*A+_*w+m*b+d*J,s[6]=g*T+_*D+m*F+d*tt,s[10]=g*P+_*R+m*$+d*ut,s[14]=g*S+_*U+m*V+d*X,s[3]=y*A+x*w+v*b+E*J,s[7]=y*T+x*D+v*F+E*tt,s[11]=y*P+x*R+v*$+E*ut,s[15]=y*S+x*U+v*V+E*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],p=t[10],u=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*f-i*c*f-s*a*p+n*c*p+i*a*u-n*l*u)+_*(+e*l*u-e*c*p+s*o*p-i*o*u+i*c*h-s*l*h)+m*(+e*c*f-e*a*u-s*o*f+n*o*u+s*a*h-n*c*h)+d*(-i*a*h-e*l*f+e*a*p+i*o*f-n*o*p+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],p=t[10],u=t[11],g=t[12],_=t[13],m=t[14],d=t[15],y=f*m*c-_*p*c+_*l*u-a*m*u-f*l*d+a*p*d,x=g*p*c-h*m*c-g*l*u+o*m*u+h*l*d-o*p*d,v=h*_*c-g*f*c+g*a*u-o*_*u-h*a*d+o*f*d,E=g*f*l-h*_*l-g*a*p+o*_*p+h*a*m-o*f*m,A=e*y+n*x+i*v+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=y*T,t[1]=(_*p*s-f*m*s-_*i*u+n*m*u+f*i*d-n*p*d)*T,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*d+n*l*d)*T,t[3]=(f*l*s-a*p*s-f*i*c+n*p*c+a*i*u-n*l*u)*T,t[4]=x*T,t[5]=(h*m*s-g*p*s+g*i*u-e*m*u-h*i*d+e*p*d)*T,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*d-e*l*d)*T,t[7]=(o*p*s-h*l*s+h*i*c-e*p*c-o*i*u+e*l*u)*T,t[8]=v*T,t[9]=(g*f*s-h*_*s-g*n*u+e*_*u+h*n*d-e*f*d)*T,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*d+e*a*d)*T,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*u-e*a*u)*T,t[12]=E*T,t[13]=(h*_*i-g*f*i+g*n*p-e*_*p-h*n*m+e*f*m)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*p+e*a*p)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,p=s*c,u=s*h,g=s*f,_=o*h,m=o*f,d=a*f,y=l*c,x=l*h,v=l*f,E=n.x,A=n.y,T=n.z;return i[0]=(1-(_+d))*E,i[1]=(u+v)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(u-v)*A,i[5]=(1-(p+d))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+x)*T,i[9]=(m-y)*T,i[10]=(1-(p+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ni.set(i[0],i[1],i[2]).length();const o=Ni.set(i[4],i[5],i[6]).length(),a=Ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],gn.copy(this);const c=1/s,h=1/o,f=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,e.setFromRotationMatrix(gn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=wn,l=!1){const c=this.elements,h=2*s/(e-t),f=2*s/(n-i),p=(e+t)/(e-t),u=(n+i)/(n-i);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===wn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===zs)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=wn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-i),p=-(e+t)/(e-t),u=-(n+i)/(n-i);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===wn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===zs)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new q,gn=new ge,ep=new q(0,0,0),np=new q(1,1,1),Yn=new q,es=new q,Ke=new q,oc=new ge,ac=new ii;class An{constructor(t=0,e=0,n=0,i=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],p=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ac.setFromEuler(this),this.setFromQuaternion(ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ip=0;const lc=new q,Ui=new ii,Ln=new ge,ns=new q,hr=new q,rp=new q,sp=new ii,cc=new q(1,0,0),uc=new q(0,1,0),hc=new q(0,0,1),fc={type:"added"},op={type:"removed"},Oi={type:"childadded",child:null},Mo={type:"childremoved",child:null};class $e extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new q,e=new An,n=new ii,i=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new Wt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(cc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(hc,t)}translateOnAxis(t,e){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(hr,ns,this.up):Ln.lookAt(ns,hr,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(op),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),p=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}$e.DEFAULT_UP=new q(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new q,Dn=new q,So=new q,Nn=new q,Fi=new q,Bi=new q,dc=new q,Eo=new q,wo=new q,To=new q,Ao=new Se,Co=new Se,Ro=new Se;class un{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){_n.subVectors(i,e),Dn.subVectors(n,e),So.subVectors(t,e);const o=_n.dot(_n),a=_n.dot(Dn),l=_n.dot(So),c=Dn.dot(Dn),h=Dn.dot(So),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,u=(c*l-a*h)*p,g=(o*h-a*l)*p;return s.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Ao.setScalar(0),Co.setScalar(0),Ro.setScalar(0),Ao.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,n),Ro.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ao,s.x),o.addScaledVector(Co,s.y),o.addScaledVector(Ro,s.z),o}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),Dn.subVectors(t,e),_n.cross(Dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),_n.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return un.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Fi.subVectors(i,n),Bi.subVectors(s,n),Eo.subVectors(t,n);const l=Fi.dot(Eo),c=Bi.dot(Eo);if(l<=0&&c<=0)return e.copy(n);wo.subVectors(t,i);const h=Fi.dot(wo),f=Bi.dot(wo);if(h>=0&&f<=h)return e.copy(i);const p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Fi,o);To.subVectors(t,s);const u=Fi.dot(To),g=Bi.dot(To);if(g>=0&&u<=g)return e.copy(s);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Bi,a);const m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return dc.subVectors(s,i),a=(f-h)/(f-h+(u-g)),e.copy(i).addScaledVector(dc,a);const d=1/(m+_+p);return o=_*d,a=p*d,e.copy(n).addScaledVector(Fi,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},is={h:0,s:0,l:0};function Po(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=El(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Po(o,s,t+1/3),this.g=Po(o,s,t),this.b=Po(o,s,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=Oe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return ie.workingToColorSpace(Ue.copy(this),t),Math.round($t(Ue.r*255,0,255))*65536+Math.round($t(Ue.g*255,0,255))*256+Math.round($t(Ue.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,s=Ue.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Oe){ie.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(is);const n=Er($n.h,is.h,e),i=Er($n.s,is.s,e),s=Er($n.l,is.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Qt;Qt.NAMES=yh;let ap=0;class sr extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=ji,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=Ea,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ea&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Tl extends sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new q,rs=new wt;let lp=0;class ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ql,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rs.fromBufferAttribute(this,e),rs.applyMatrix3(t),this.setXY(e,rs.x,rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ql&&(t.usage=this.usage),t}}class bh extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mh extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cp=0;const ln=new ge,Io=new $e,zi=new q,Je=new Xr,fr=new Xr,Le=new q;class sn extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gh(t)?Mh:bh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Je.min,fr.min),Je.expandByPoint(Le),Le.addVectors(Je.max,fr.max),Je.expandByPoint(Le)):(Je.expandByPoint(fr.min),Je.expandByPoint(fr.max))}Je.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Le.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(t,c),Le.add(zi)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ye(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new q,l[P]=new q;const c=new q,h=new q,f=new q,p=new wt,u=new wt,g=new wt,_=new q,m=new q;function d(P,S,w){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,w),p.fromBufferAttribute(s,P),u.fromBufferAttribute(s,S),g.fromBufferAttribute(s,w),h.sub(c),f.sub(c),u.sub(p),g.sub(p);const D=1/(u.x*g.y-g.x*u.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(D),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(D),a[P].add(_),a[S].add(_),a[w].add(_),l[P].add(m),l[S].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,S=y.length;P<S;++P){const w=y[P],D=w.start,R=w.count;for(let U=D,b=D+R;U<b;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const x=new q,v=new q,E=new q,A=new q;function T(P){E.fromBufferAttribute(i,P),A.copy(E);const S=a[P];x.copy(S),x.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(A,S);const D=v.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,D)}for(let P=0,S=y.length;P<S;++P){const w=y[P],D=w.start,R=w.count;for(let U=D,b=D+R;U<b;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);const i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,h=new q,f=new q;if(t)for(let p=0,u=t.count;p<u;p+=3){const g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,u=e.count;p<u;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h);let u=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let d=0;d<h;d++)p[g++]=c[u++]}return new ye(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const p=c[h],u=t(p,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){const u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let p=0,u=f.length;p<u;p++)h.push(f[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pc=new ge,ci=new wl,ss=new Ks,mc=new q,os=new q,as=new q,ls=new q,Lo=new q,cs=new q,gc=new q,us=new q;class Fe extends $e{constructor(t=new sn,e=new Tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Lo.fromBufferAttribute(f,t),o?cs.addScaledVector(Lo,h):cs.addScaledVector(Lo.sub(e),h))}e.add(cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(s),ci.copy(t.ray).recast(t.near),!(ss.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ss,mc)===null||ci.origin.distanceToSquared(mc)>(t.far-t.near)**2))&&(pc.copy(s).invert(),ci.copy(t.ray).applyMatrix4(pc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],d=o[m.materialIndex],y=Math.max(m.start,u.start),x=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,E=x;v<E;v+=3){const A=a.getX(v),T=a.getX(v+1),P=a.getX(v+2);i=hs(this,d,t,n,c,h,f,A,T,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=g,d=_;m<d;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=hs(this,o,t,n,c,h,f,y,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],d=o[m.materialIndex],y=Math.max(m.start,u.start),x=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=y,E=x;v<E;v+=3){const A=v,T=v+1,P=v+2;i=hs(this,d,t,n,c,h,f,A,T,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,d=_;m<d;m+=3){const y=m,x=m+1,v=m+2;i=hs(this,o,t,n,c,h,f,y,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function up(r,t,e,n,i,s,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ni,a),l===null)return null;us.copy(a),us.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(us);return c<e.near||c>e.far?null:{distance:c,point:us.clone(),object:r}}function hs(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,os),r.getVertexPosition(l,as),r.getVertexPosition(c,ls);const h=up(r,t,e,n,os,as,ls,gc);if(h){const f=new q;un.getBarycoord(gc,os,as,ls,f),i&&(h.uv=un.getInterpolatedAttribute(i,a,l,c,f,new wt)),s&&(h.uv1=un.getInterpolatedAttribute(s,a,l,c,f,new wt)),o&&(h.normal=un.getInterpolatedAttribute(o,a,l,c,f,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new q,materialIndex:0};un.getNormal(os,as,ls,p.normal),h.face=p,h.barycoord=f}return h}class kn extends sn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let p=0,u=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(f,2));function g(_,m,d,y,x,v,E,A,T,P,S){const w=v/T,D=E/P,R=v/2,U=E/2,b=A/2,F=T+1,$=P+1;let V=0,J=0;const tt=new q;for(let ut=0;ut<$;ut++){const X=ut*D-U;for(let Z=0;Z<F;Z++){const xt=Z*w-R;tt[_]=xt*y,tt[m]=X*x,tt[d]=b,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[d]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),f.push(Z/T),f.push(1-ut/P),V+=1}}for(let ut=0;ut<P;ut++)for(let X=0;X<T;X++){const Z=p+X+F*ut,xt=p+X+F*(ut+1),gt=p+(X+1)+F*(ut+1),ft=p+(X+1)+F*ut;l.push(Z,xt,ft),l.push(xt,gt,ft),J+=6}a.addGroup(u,J,S),u+=J,p+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ke(r){const t={};for(let e=0;e<r.length;e++){const n=nr(r[e]);for(const i in n)t[i]=n[i]}return t}function hp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Sh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const fp={clone:nr,merge:ke};var dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Eh extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new q,_c=new wt,vc=new wt;class cn extends Eh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,_c,vc),e.subVectors(vc,_c)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Hi=1;class mp extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(ki,Hi,t,e);i.layers=this.layers,this.add(i);const s=new cn(ki,Hi,t,e);s.layers=this.layers,this.add(s);const o=new cn(ki,Hi,t,e);o.layers=this.layers,this.add(o);const a=new cn(ki,Hi,t,e);a.layers=this.layers,this.add(a);const l=new cn(ki,Hi,t,e);l.layers=this.layers,this.add(l);const c=new cn(ki,Hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,p,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wh extends He{constructor(t=[],e=Qi,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gp extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new kn(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:ti});s.uniforms.tEquirect.value=e;const o=new Fe(i,s),a=e.minFilter;return e.minFilter===Qn&&(e.minFilter=vn),new mp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class xr extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _p={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&p>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Vs extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const No=new q,vp=new q,xp=new Wt;let Kn=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=No.subVectors(n,e).cross(vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(No),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xp.getNormalMatrix(t),i=this.coplanarPoint(No).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ui=new Ks,yp=new wt(.5,.5),fs=new q;class Th{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,s=new Kn,o=new Kn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],p=s[6],u=s[7],g=s[8],_=s[9],m=s[10],d=s[11],y=s[12],x=s[13],v=s[14],E=s[15];if(i[0].setComponents(c-o,u-h,d-g,E-y).normalize(),i[1].setComponents(c+o,u+h,d+g,E+y).normalize(),i[2].setComponents(c+a,u+f,d+_,E+x).normalize(),i[3].setComponents(c-a,u-f,d-_,E-x).normalize(),n)i[4].setComponents(l,p,m,v).normalize(),i[5].setComponents(c-l,u-p,d-m,E-v).normalize();else if(i[4].setComponents(c-l,u-p,d-m,E-v).normalize(),e===wn)i[5].setComponents(c+l,u+p,d+m,E+v).normalize();else if(e===zs)i[5].setComponents(l,p,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){ui.center.set(0,0,0);const e=yp.distanceTo(t.center);return ui.radius=.7071067811865476+e,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fs.x=i.normal.x>0?t.max.x:t.min.x,fs.y=i.normal.y>0?t.max.y:t.min.y,fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ds extends sr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gs=new q,Ws=new q,xc=new ge,dr=new wl,ds=new Ks,Uo=new q,yc=new q;class bp extends $e{constructor(t=new sn,e=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Gs.fromBufferAttribute(e,i-1),Ws.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Gs.distanceTo(Ws);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(i),ds.radius+=s,t.ray.intersectsSphere(ds)===!1)return;xc.copy(i).invert(),dr.copy(t.ray).applyMatrix4(xc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=c){const d=h.getX(_),y=h.getX(_+1),x=ps(this,t,dr,l,d,y,_);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(u),d=ps(this,t,dr,l,_,m,g-1);d&&e.push(d)}}else{const u=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=c){const d=ps(this,t,dr,l,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=ps(this,t,dr,l,g-1,u,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ps(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(Gs.fromBufferAttribute(a,i),Ws.fromBufferAttribute(a,s),e.distanceSqToSegment(Gs,Ws,Uo,yc)>n)return;Uo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Uo);if(!(c<t.near||c>t.far))return{distance:c,point:yc.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const bc=new q,Mc=new q;class ms extends bp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)bc.fromBufferAttribute(e,i),Mc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bc.distanceTo(Mc);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oo extends He{constructor(t,e,n,i,s,o,a,l,c,h,f,p){super(null,o,a,l,c,h,i,s,f,p),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Ah extends He{constructor(t,e,n=bi,i,s,o,a=dn,l=dn,c,h=Ir,f=1){if(h!==Ir&&h!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:f};super(p,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ch extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Al extends sn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],f=[],p=[],u=[];let g=0;const _=[],m=n/2;let d=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(p,3)),this.setAttribute("uv",new Ve(u,2));function y(){const v=new q,E=new q;let A=0;const T=(e-t)/n;for(let P=0;P<=s;P++){const S=[],w=P/s,D=w*(e-t)+t;for(let R=0;R<=i;R++){const U=R/i,b=U*l+a,F=Math.sin(b),$=Math.cos(b);E.x=D*F,E.y=-w*n+m,E.z=D*$,f.push(E.x,E.y,E.z),v.set(F,T,$).normalize(),p.push(v.x,v.y,v.z),u.push(U,1-w),S.push(g++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<s;S++){const w=_[S][P],D=_[S+1][P],R=_[S+1][P+1],U=_[S][P+1];(t>0||S!==0)&&(h.push(w,D,U),A+=3),(e>0||S!==s-1)&&(h.push(D,R,U),A+=3)}c.addGroup(d,A,0),d+=A}function x(v){const E=g,A=new wt,T=new q;let P=0;const S=v===!0?t:e,w=v===!0?1:-1;for(let R=1;R<=i;R++)f.push(0,m*w,0),p.push(0,w,0),u.push(.5,.5),g++;const D=g;for(let R=0;R<=i;R++){const b=R/i*l+a,F=Math.cos(b),$=Math.sin(b);T.x=S*$,T.y=m*w,T.z=S*F,f.push(T.x,T.y,T.z),p.push(0,w,0),A.x=F*.5+.5,A.y=$*.5*w+.5,u.push(A.x,A.y),g++}for(let R=0;R<i;R++){const U=E+R,b=D+R;v===!0?h.push(b,b+1,U):h.push(b+1,b,U),P+=3}c.addGroup(d,P,v===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const gs=new q,_s=new q,Fo=new q,vs=new un;class Bo extends sn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Zi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),p={},u=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:d}=vs;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),vs.getNormal(Fo),f[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,f[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,f[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=f[y],E=f[x],A=vs[h[y]],T=vs[h[x]],P=`${v}_${E}`,S=`${E}_${v}`;S in p&&p[S]?(Fo.dot(p[S].normal)<=s&&(u.push(A.x,A.y,A.z),u.push(T.x,T.y,T.z)),p[S]=null):P in p||(p[P]={index0:c[y],index1:c[x],normal:Fo.clone()})}}for(const g in p)if(p[g]){const{index0:_,index1:m}=p[g];gs.fromBufferAttribute(a,_),_s.fromBufferAttribute(a,m),u.push(gs.x,gs.y,gs.z),u.push(_s.x,_s.y,_s.z)}this.setAttribute("position",new Ve(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],p=n[i+1]-h,u=(o-h)/p;return(i+u)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new wt:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new q,i=[],s=[],o=[],a=new q,l=new ge;for(let u=0;u<=t;u++){const g=u/t;i[u]=this.getTangentAt(g,new q)}s[0]=new q,o[0]=new q;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($t(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(i[u],s[u])}if(e===!0){let u=Math.acos($t(s[0].dot(s[t]),-1,1));u/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(u=-u);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cl extends Cn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new wt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,u=c-this.aY;l=p*h-u*f+this.aX,c=p*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mp extends Cl{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rl(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let p=(o-s)/c-(a-s)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;p*=h,u*=h,i(o,a,p,u)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const xs=new q,zo=new Rl,ko=new Rl,Ho=new Rl;class Sp extends Cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new q){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(xs.subVectors(i[0],i[1]).add(i[0]),c=xs);const f=i[a%s],p=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(xs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=xs),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(p),u),m=Math.pow(p.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),zo.initNonuniformCatmullRom(c.x,f.x,p.x,h.x,g,_,m),ko.initNonuniformCatmullRom(c.y,f.y,p.y,h.y,g,_,m),Ho.initNonuniformCatmullRom(c.z,f.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(c.x,f.x,p.x,h.x,this.tension),ko.initCatmullRom(c.y,f.y,p.y,h.y,this.tension),Ho.initCatmullRom(c.z,f.z,p.z,h.z,this.tension));return n.set(zo.calc(l),ko.calc(l),Ho.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new q().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sc(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Ep(r,t){const e=1-r;return e*e*t}function wp(r,t){return 2*(1-r)*r*t}function Tp(r,t){return r*r*t}function wr(r,t,e,n){return Ep(r,t)+wp(r,e)+Tp(r,n)}function Ap(r,t){const e=1-r;return e*e*e*t}function Cp(r,t){const e=1-r;return 3*e*e*r*t}function Rp(r,t){return 3*(1-r)*r*r*t}function Pp(r,t){return r*r*r*t}function Tr(r,t,e,n,i){return Ap(r,t)+Cp(r,e)+Rp(r,n)+Pp(r,i)}class Rh extends Cn{constructor(t=new wt,e=new wt,n=new wt,i=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new wt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,i.x,s.x,o.x,a.x),Tr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ip extends Cn{constructor(t=new q,e=new q,n=new q,i=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new q){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,i.x,s.x,o.x,a.x),Tr(t,i.y,s.y,o.y,a.y),Tr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ph extends Cn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lp extends Cn{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ih extends Cn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(wr(t,i.x,s.x,o.x),wr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dp extends Cn{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(wr(t,i.x,s.x,o.x),wr(t,i.y,s.y,o.y),wr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lh extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Sc(a,l.x,c.x,h.x,f.x),Sc(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new wt().fromArray(i))}return this}}var ll=Object.freeze({__proto__:null,ArcCurve:Mp,CatmullRomCurve3:Sp,CubicBezierCurve:Rh,CubicBezierCurve3:Ip,EllipseCurve:Cl,LineCurve:Ph,LineCurve3:Lp,QuadraticBezierCurve:Ih,QuadraticBezierCurve3:Dp,SplineCurve:Lh});class Np extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ll[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ll[i.type]().fromJSON(i))}return this}}class cl extends Np{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ph(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Ih(this.currentPoint.clone(),new wt(t,e),new wt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Rh(this.currentPoint.clone(),new wt(t,e),new wt(n,i),new wt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Lh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Cl(t,e,n,i,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ar extends cl{constructor(t){super(t),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new cl().fromJSON(i))}return this}}function Up(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Dh(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=kp(r,t,s,e)),r.length>80*e){a=1/0,l=1/0;let h=-1/0,f=-1/0;for(let p=e;p<i;p+=e){const u=r[p],g=r[p+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Ur(s,o,e,a,l,c,0),o}function Dh(r,t,e,n,i){let s;if(i===Kp(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=Ec(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Ec(o/n|0,r[o],r[o+1],s);return s&&ir(s,s.next)&&(Fr(s),s=s.next),s}function Si(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(ir(e,e.next)||xe(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ur(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Xp(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Fp(r,n,i,s):Op(r)){t.push(l.i,r.i,c.i),Fr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Bp(Si(r),t),Ur(r,t,e,n,i,s,2)):o===2&&zp(r,t,e,n,i,s):Ur(Si(r),t,e,n,i,s,1);break}}}function Op(r){const t=r.prev,e=r,n=r.next;if(xe(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),f=Math.min(a,l,c),p=Math.max(i,s,o),u=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=f&&g.y<=u&&yr(i,a,s,l,o,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fp(r,t,e,n){const i=r.prev,s=r,o=r.next;if(xe(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,f=s.y,p=o.y,u=Math.min(a,l,c),g=Math.min(h,f,p),_=Math.max(a,l,c),m=Math.max(h,f,p),d=ul(u,g,t,e,n),y=ul(_,m,t,e,n);let x=r.prevZ,v=r.nextZ;for(;x&&x.z>=d&&v&&v.z<=y;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&yr(a,h,l,f,c,p,x.x,x.y)&&xe(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=u&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&yr(a,h,l,f,c,p,v.x,v.y)&&xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=d;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&yr(a,h,l,f,c,p,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&yr(a,h,l,f,c,p,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Bp(r,t){let e=r;do{const n=e.prev,i=e.next.next;!ir(n,i)&&Uh(n,e,e.next,i)&&Or(n,i)&&Or(i,n)&&(t.push(n.i,e.i,i.i),Fr(e),Fr(e.next),e=r=i),e=e.next}while(e!==r);return Si(e)}function zp(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$p(o,a)){let l=Oh(o,a);o=Si(o,o.next),l=Si(l,l.next),Ur(o,t,e,n,i,s,0),Ur(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function kp(r,t,e,n){const i=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Dh(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Yp(c))}i.sort(Hp);for(let s=0;s<i.length;s++)e=Vp(i[s],e);return e}function Hp(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Vp(r,t){const e=Gp(r,t);if(!e)return t;const n=Oh(e,r);return Si(n,n.next),Si(e,e.next)}function Gp(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;if(ir(r,e))return e;do{if(ir(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Nh(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){const f=Math.abs(i-e.y)/(n-e.x);Or(e,r)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Wp(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Wp(r,t){return xe(r.prev,r,t.prev)<0&&xe(t.next,r,r.next)<0}function Xp(r,t,e,n){let i=r;do i.z===0&&(i.z=ul(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,qp(i)}function qp(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function ul(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Yp(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Nh(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function yr(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&Nh(r,t,e,n,i,s,o,a)}function $p(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!jp(r,t)&&(Or(r,t)&&Or(t,r)&&Zp(r,t)&&(xe(r.prev,r,t.prev)||xe(r,t.prev,t))||ir(r,t)&&xe(r.prev,r,r.next)>0&&xe(t.prev,t,t.next)>0)}function xe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ir(r,t){return r.x===t.x&&r.y===t.y}function Uh(r,t,e,n){const i=bs(xe(r,t,e)),s=bs(xe(r,t,n)),o=bs(xe(e,n,r)),a=bs(xe(e,n,t));return!!(i!==s&&o!==a||i===0&&ys(r,e,t)||s===0&&ys(r,n,t)||o===0&&ys(e,r,n)||a===0&&ys(e,t,n))}function ys(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function bs(r){return r>0?1:r<0?-1:0}function jp(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Uh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Or(r,t){return xe(r.prev,r,r.next)<0?xe(r,t,r.next)>=0&&xe(r,r.prev,t)>=0:xe(r,t,r.prev)<0||xe(r,r.next,t)<0}function Zp(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Oh(r,t){const e=hl(r.i,r.x,r.y),n=hl(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Ec(r,t,e,n){const i=hl(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Fr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function hl(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kp(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Jp{static triangulate(t,e,n=2){return Up(t,e,n)}}class _i{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return _i.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];wc(t),Tc(n,t);let o=t.length;e.forEach(wc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Tc(n,e[l]);const a=Jp.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function wc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Tc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Js extends sn{constructor(t=new Ar([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Ve(i,3)),this.setAttribute("uv",new Ve(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Qp;let x,v=!1,E,A,T,P;d&&(x=d.getSpacedPoints(h),v=!0,p=!1,E=d.computeFrenetFrames(h,!1),A=new q,T=new q,P=new q),p||(m=0,u=0,g=0,_=0);const S=a.extractPoints(c);let w=S.shape;const D=S.holes;if(!_i.isClockWise(w)){w=w.reverse();for(let M=0,G=D.length;M<G;M++){const k=D[M];_i.isClockWise(k)&&(D[M]=k.reverse())}}function U(M){const k=10000000000000001e-36;let L=M[0];for(let N=1;N<=M.length;N++){const B=N%M.length,K=M[B],rt=K.x-L.x,W=K.y-L.y,I=rt*rt+W*W,C=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(L.x),Math.abs(L.y)),z=k*C*C;if(I<=z){M.splice(B,1),N--;continue}L=K}}U(w),D.forEach(U);const b=D.length,F=w;for(let M=0;M<b;M++){const G=D[M];w=w.concat(G)}function $(M,G,k){return G||console.error("THREE.ExtrudeGeometry: vec does not exist"),M.clone().addScaledVector(G,k)}const V=w.length;function J(M,G,k){let L,N,B;const K=M.x-G.x,rt=M.y-G.y,W=k.x-M.x,I=k.y-M.y,C=K*K+rt*rt,z=K*I-rt*W;if(Math.abs(z)>Number.EPSILON){const Y=Math.sqrt(C),ot=Math.sqrt(W*W+I*I),Q=G.x-rt/Y,Mt=G.y+K/Y,pt=k.x-I/ot,At=k.y+W/ot,Et=((pt-Q)*I-(At-Mt)*W)/(K*I-rt*W);L=Q+K*Et-M.x,N=Mt+rt*Et-M.y;const ht=L*L+N*N;if(ht<=2)return new wt(L,N);B=Math.sqrt(ht/2)}else{let Y=!1;K>Number.EPSILON?W>Number.EPSILON&&(Y=!0):K<-Number.EPSILON?W<-Number.EPSILON&&(Y=!0):Math.sign(rt)===Math.sign(I)&&(Y=!0),Y?(L=-rt,N=K,B=Math.sqrt(C)):(L=K,N=rt,B=Math.sqrt(C/2))}return new wt(L/B,N/B)}const tt=[];for(let M=0,G=F.length,k=G-1,L=M+1;M<G;M++,k++,L++)k===G&&(k=0),L===G&&(L=0),tt[M]=J(F[M],F[k],F[L]);const ut=[];let X,Z=tt.concat();for(let M=0,G=b;M<G;M++){const k=D[M];X=[];for(let L=0,N=k.length,B=N-1,K=L+1;L<N;L++,B++,K++)B===N&&(B=0),K===N&&(K=0),X[L]=J(k[L],k[B],k[K]);ut.push(X),Z=Z.concat(X)}let xt;if(m===0)xt=_i.triangulateShape(F,D);else{const M=[],G=[];for(let k=0;k<m;k++){const L=k/m,N=u*Math.cos(L*Math.PI/2),B=g*Math.sin(L*Math.PI/2)+_;for(let K=0,rt=F.length;K<rt;K++){const W=$(F[K],tt[K],B);_t(W.x,W.y,-N),L===0&&M.push(W)}for(let K=0,rt=b;K<rt;K++){const W=D[K];X=ut[K];const I=[];for(let C=0,z=W.length;C<z;C++){const Y=$(W[C],X[C],B);_t(Y.x,Y.y,-N),L===0&&I.push(Y)}L===0&&G.push(I)}}xt=_i.triangulateShape(M,G)}const gt=xt.length,ft=g+_;for(let M=0;M<V;M++){const G=p?$(w[M],Z[M],ft):w[M];v?(T.copy(E.normals[0]).multiplyScalar(G.x),A.copy(E.binormals[0]).multiplyScalar(G.y),P.copy(x[0]).add(T).add(A),_t(P.x,P.y,P.z)):_t(G.x,G.y,0)}for(let M=1;M<=h;M++)for(let G=0;G<V;G++){const k=p?$(w[G],Z[G],ft):w[G];v?(T.copy(E.normals[M]).multiplyScalar(k.x),A.copy(E.binormals[M]).multiplyScalar(k.y),P.copy(x[M]).add(T).add(A),_t(P.x,P.y,P.z)):_t(k.x,k.y,f/h*M)}for(let M=m-1;M>=0;M--){const G=M/m,k=u*Math.cos(G*Math.PI/2),L=g*Math.sin(G*Math.PI/2)+_;for(let N=0,B=F.length;N<B;N++){const K=$(F[N],tt[N],L);_t(K.x,K.y,f+k)}for(let N=0,B=D.length;N<B;N++){const K=D[N];X=ut[N];for(let rt=0,W=K.length;rt<W;rt++){const I=$(K[rt],X[rt],L);v?_t(I.x,I.y+x[h-1].y,x[h-1].x+k):_t(I.x,I.y,f+k)}}}st(),ct();function st(){const M=i.length/3;if(p){let G=0,k=V*G;for(let L=0;L<gt;L++){const N=xt[L];St(N[2]+k,N[1]+k,N[0]+k)}G=h+m*2,k=V*G;for(let L=0;L<gt;L++){const N=xt[L];St(N[0]+k,N[1]+k,N[2]+k)}}else{for(let G=0;G<gt;G++){const k=xt[G];St(k[2],k[1],k[0])}for(let G=0;G<gt;G++){const k=xt[G];St(k[0]+V*h,k[1]+V*h,k[2]+V*h)}}n.addGroup(M,i.length/3-M,0)}function ct(){const M=i.length/3;let G=0;dt(F,G),G+=F.length;for(let k=0,L=D.length;k<L;k++){const N=D[k];dt(N,G),G+=N.length}n.addGroup(M,i.length/3-M,1)}function dt(M,G){let k=M.length;for(;--k>=0;){const L=k;let N=k-1;N<0&&(N=M.length-1);for(let B=0,K=h+m*2;B<K;B++){const rt=V*B,W=V*(B+1),I=G+L+rt,C=G+N+rt,z=G+N+W,Y=G+L+W;Ut(I,C,z,Y)}}}function _t(M,G,k){l.push(M),l.push(G),l.push(k)}function St(M,G,k){jt(M),jt(G),jt(k);const L=i.length/3,N=y.generateTopUV(n,i,L-3,L-2,L-1);H(N[0]),H(N[1]),H(N[2])}function Ut(M,G,k,L){jt(M),jt(G),jt(L),jt(G),jt(k),jt(L);const N=i.length/3,B=y.generateSideWallUV(n,i,N-6,N-3,N-2,N-1);H(B[0]),H(B[1]),H(B[3]),H(B[1]),H(B[2]),H(B[3])}function jt(M){i.push(l[M*3+0]),i.push(l[M*3+1]),i.push(l[M*3+2])}function H(M){s.push(M.x),s.push(M.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return tm(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ll[i.type]().fromJSON(i)),new Js(n,t.options)}}const Qp={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new wt(s,o),new wt(a,l),new wt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],p=t[i*3],u=t[i*3+1],g=t[i*3+2],_=t[s*3],m=t[s*3+1],d=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new wt(o,1-l),new wt(c,1-f),new wt(p,1-g),new wt(_,1-d)]:[new wt(a,1-l),new wt(h,1-f),new wt(u,1-g),new wt(m,1-d)]}};function tm(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Qs extends sn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,p=e/l,u=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const y=d*p-o;for(let x=0;x<c;x++){const v=x*f-s;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const x=y+c*d,v=y+c*(d+1),E=y+1+c*(d+1),A=y+1+c*d;u.push(x,v,A),u.push(v,E,A)}this.setIndex(u),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.width,t.height,t.widthSegments,t.heightSegments)}}class pr extends sr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class em extends sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nm extends sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ac={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class im{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){const u=c[f],g=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const rm=new im;class Pl{constructor(t){this.manager=t!==void 0?t:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class sm extends Error{constructor(t,e){super(t),this.response=e}}class om extends Pl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Ac.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Un[t]!==void 0){Un[t].push({onLoad:e,onProgress:n,onError:i});return}Un[t]=[],Un[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Un[t],f=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=p?parseInt(p):0,g=u!==0;let _=0;const m=new ReadableStream({start(d){y();function y(){f.read().then(({done:x,value:v})=>{if(x)d.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:u});for(let A=0,T=h.length;A<T;A++){const P=h[A];P.onProgress&&P.onProgress(E)}d.enqueue(v),y()}},x=>{d.error(x)})}}});return new Response(m)}else throw new sm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),p=f&&f[1]?f[1].toLowerCase():void 0,u=new TextDecoder(p);return c.arrayBuffer().then(g=>u.decode(g))}}}).then(c=>{Ac.add(`file:${t}`,c);const h=Un[t];delete Un[t];for(let f=0,p=h.length;f<p;f++){const u=h[f];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=Un[t];if(h===void 0)throw this.manager.itemError(t),c;delete Un[t];for(let f=0,p=h.length;f<p;f++){const u=h[f];u.onError&&u.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class am extends Eh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lm extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Il="\\[\\]\\.:\\/",cm=new RegExp("["+Il+"]","g"),Ll="[^"+Il+"]",um="[^"+Il.replace("\\.","")+"]",hm=/((?:WC+[\/:])*)/.source.replace("WC",Ll),fm=/(WCOD+)?/.source.replace("WCOD",um),dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ll),pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ll),mm=new RegExp("^"+hm+fm+dm+pm+"$"),gm=["material","materials","bones","map"];class _m{constructor(t,e,n){const i=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class se{constructor(t,e,n){this.path=e,this.parsedPath=n||se.parseTrackName(e),this.node=se.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new se.Composite(t,e,n):new se(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cm,"")}static parseTrackName(t){const e=mm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);gm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=se.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}se.Composite=_m;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vm{constructor(){this.type="ShapePath",this.color=new Qt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new cl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const y=[];for(let x=0,v=d.length;x<v;x++){const E=d[x],A=new Ar;A.curves=E.curves,y.push(A)}return y}function n(d,y){const x=y.length;let v=!1;for(let E=x-1,A=0;A<x;E=A++){let T=y[E],P=y[A],S=P.x-T.x,w=P.y-T.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(T=y[A],S=-S,P=y[E],w=-w),d.y<T.y||d.y>P.y)continue;if(d.y===T.y){if(d.x===T.x)return!0}else{const D=w*(d.x-T.x)-S*(d.y-T.y);if(D===0)return!0;if(D<0)continue;v=!v}}else{if(d.y!==T.y)continue;if(P.x<=d.x&&d.x<=T.x||T.x<=d.x&&d.x<=P.x)return!0}}return v}const i=_i.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Ar,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=t?!h:h;const f=[],p=[];let u=[],g=0,_;p[g]=void 0,u[g]=[];for(let d=0,y=s.length;d<y;d++)a=s[d],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!h&&p[g]&&g++,p[g]={s:new Ar,p:_},p[g].s.curves=a.curves,h&&g++,u[g]=[]):u[g].push({h:a,p:_[0]});if(!p[0])return e(s);if(p.length>1){let d=!1,y=0;for(let x=0,v=p.length;x<v;x++)f[x]=[];for(let x=0,v=p.length;x<v;x++){const E=u[x];for(let A=0;A<E.length;A++){const T=E[A];let P=!0;for(let S=0;S<p.length;S++)n(T.p,p[S].p)&&(x!==S&&y++,P?(P=!1,f[S].push(T)):d=!0);P&&f[x].push(T)}}y>0&&d===!1&&(u=f)}let m;for(let d=0,y=p.length;d<y;d++){l=p[d].s,c.push(l),m=u[d];for(let x=0,v=m.length;x<v;x++)l.holes.push(m[x].h)}return c}}class xm extends Ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Rc(r,t,e,n){const i=ym(n);switch(e){case uh:return r*t;case fh:return r*t/i.components*i.byteLength;case bl:return r*t/i.components*i.byteLength;case dh:return r*t*2/i.components*i.byteLength;case Ml:return r*t*2/i.components*i.byteLength;case hh:return r*t*3/i.components*i.byteLength;case fn:return r*t*4/i.components*i.byteLength;case Sl:return r*t*4/i.components*i.byteLength;case Rs:case Ps:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Is:case Ls:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ua:case Fa:return Math.max(r,16)*Math.max(t,8)/4;case Na:case Oa:return Math.max(r,8)*Math.max(t,8)/2;case Ba:case za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ka:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Za:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case el:case nl:case il:return Math.ceil(r/4)*Math.ceil(t/4)*16;case rl:case sl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ol:case al:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ym(r){switch(r){case Vn:case oh:return{byteLength:1,components:1};case Rr:case ah:case Wr:return{byteLength:2,components:1};case xl:case yl:return{byteLength:2,components:4};case bi:case vl:case zn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function bm(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,p=r.createBuffer();r.bindBuffer(l,p),r.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((u,g)=>u.start-g.start);let p=0;for(let u=1;u<f.length;u++){const g=f[p],_=f[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,f[p]=_)}f.length=p+1;for(let u=0,g=f.length;u<g;u++){const _=f[u];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Um=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Om=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ig=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,h_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:Mm,alphahash_pars_fragment:Sm,alphamap_fragment:Em,alphamap_pars_fragment:wm,alphatest_fragment:Tm,alphatest_pars_fragment:Am,aomap_fragment:Cm,aomap_pars_fragment:Rm,batching_pars_vertex:Pm,batching_vertex:Im,begin_vertex:Lm,beginnormal_vertex:Dm,bsdfs:Nm,iridescence_fragment:Um,bumpmap_pars_fragment:Om,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:km,color_fragment:Hm,color_pars_fragment:Vm,color_pars_vertex:Gm,color_vertex:Wm,common:Xm,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:$m,displacementmap_vertex:jm,emissivemap_fragment:Zm,emissivemap_pars_fragment:Km,colorspace_fragment:Jm,colorspace_pars_fragment:Qm,envmap_fragment:tg,envmap_common_pars_fragment:eg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:pg,envmap_vertex:rg,fog_vertex:sg,fog_pars_vertex:og,fog_fragment:ag,fog_pars_fragment:lg,gradientmap_pars_fragment:cg,lightmap_pars_fragment:ug,lights_lambert_fragment:hg,lights_lambert_pars_fragment:fg,lights_pars_begin:dg,lights_toon_fragment:mg,lights_toon_pars_fragment:gg,lights_phong_fragment:_g,lights_phong_pars_fragment:vg,lights_physical_fragment:xg,lights_physical_pars_fragment:yg,lights_fragment_begin:bg,lights_fragment_maps:Mg,lights_fragment_end:Sg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:wg,logdepthbuf_pars_vertex:Tg,logdepthbuf_vertex:Ag,map_fragment:Cg,map_pars_fragment:Rg,map_particle_fragment:Pg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Dg,morphinstance_vertex:Ng,morphcolor_vertex:Ug,morphnormal_vertex:Og,morphtarget_pars_vertex:Fg,morphtarget_vertex:Bg,normal_fragment_begin:zg,normal_fragment_maps:kg,normal_pars_fragment:Hg,normal_pars_vertex:Vg,normal_vertex:Gg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:$g,opaque_fragment:jg,packing:Zg,premultiplied_alpha_fragment:Kg,project_vertex:Jg,dithering_fragment:Qg,dithering_pars_fragment:t_,roughnessmap_fragment:e_,roughnessmap_pars_fragment:n_,shadowmap_pars_fragment:i_,shadowmap_pars_vertex:r_,shadowmap_vertex:s_,shadowmask_pars_fragment:o_,skinbase_vertex:a_,skinning_pars_vertex:l_,skinning_vertex:c_,skinnormal_vertex:u_,specularmap_fragment:h_,specularmap_pars_fragment:f_,tonemapping_fragment:d_,tonemapping_pars_fragment:p_,transmission_fragment:m_,transmission_pars_fragment:g_,uv_pars_fragment:__,uv_pars_vertex:v_,uv_vertex:x_,worldpos_vertex:y_,background_vert:b_,background_frag:M_,backgroundCube_vert:S_,backgroundCube_frag:E_,cube_vert:w_,cube_frag:T_,depth_vert:A_,depth_frag:C_,distanceRGBA_vert:R_,distanceRGBA_frag:P_,equirect_vert:I_,equirect_frag:L_,linedashed_vert:D_,linedashed_frag:N_,meshbasic_vert:U_,meshbasic_frag:O_,meshlambert_vert:F_,meshlambert_frag:B_,meshmatcap_vert:z_,meshmatcap_frag:k_,meshnormal_vert:H_,meshnormal_frag:V_,meshphong_vert:G_,meshphong_frag:W_,meshphysical_vert:X_,meshphysical_frag:q_,meshtoon_vert:Y_,meshtoon_frag:$_,points_vert:j_,points_frag:Z_,shadow_vert:K_,shadow_frag:J_,sprite_vert:Q_,sprite_frag:t0},Pt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Mn={basic:{uniforms:ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:ke([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:ke([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:ke([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:ke([Pt.points,Pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:ke([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:ke([Pt.common,Pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:ke([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:ke([Pt.sprite,Pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:ke([Pt.common,Pt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:ke([Pt.lights,Pt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Mn.physical={uniforms:ke([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Ms={r:0,b:0,g:0},hi=new An,e0=new ge;function n0(r,t,e,n,i,s,o){const a=new Qt(0);let l=s===!0?0:1,c,h,f=null,p=0,u=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const E=g(x);E===null?d(a,l):E&&E.isColor&&(d(E,1),v=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===js)?(h===void 0&&(h=new Fe(new kn(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:nr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hi.copy(v.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(e0.makeRotationFromEuler(hi)),h.material.toneMapped=ie.getTransfer(E.colorSpace)!==ue,(f!==E||p!==E.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,f=E,p=E.version,u=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Fe(new Qs(2,2),new ri({name:"BackgroundMaterial",uniforms:nr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ie.getTransfer(E.colorSpace)!==ue,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||p!==E.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,f=E,p=E.version,u=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,v){x.getRGB(Ms,Sh(r)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:_,addToRenderList:m,dispose:y}}function i0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=p(null);let s=i,o=!1;function a(w,D,R,U,b){let F=!1;const $=f(U,R,D);s!==$&&(s=$,c(s.object)),F=u(w,U,R,b),F&&g(w,U,R,b),b!==null&&t.update(b,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(w,D,R,U),b!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(b).buffer))}function l(){return r.createVertexArray()}function c(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function f(w,D,R){const U=R.wireframe===!0;let b=n[w.id];b===void 0&&(b={},n[w.id]=b);let F=b[D.id];F===void 0&&(F={},b[D.id]=F);let $=F[U];return $===void 0&&($=p(l()),F[U]=$),$}function p(w){const D=[],R=[],U=[];for(let b=0;b<e;b++)D[b]=0,R[b]=0,U[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:R,attributeDivisors:U,object:w,attributes:{},index:null}}function u(w,D,R,U){const b=s.attributes,F=D.attributes;let $=0;const V=R.getAttributes();for(const J in V)if(V[J].location>=0){const ut=b[J];let X=F[J];if(X===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(X=w.instanceColor)),ut===void 0||ut.attribute!==X||X&&ut.data!==X.data)return!0;$++}return s.attributesNum!==$||s.index!==U}function g(w,D,R,U){const b={},F=D.attributes;let $=0;const V=R.getAttributes();for(const J in V)if(V[J].location>=0){let ut=F[J];ut===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor));const X={};X.attribute=ut,ut&&ut.data&&(X.data=ut.data),b[J]=X,$++}s.attributes=b,s.attributesNum=$,s.index=U}function _(){const w=s.newAttributes;for(let D=0,R=w.length;D<R;D++)w[D]=0}function m(w){d(w,0)}function d(w,D){const R=s.newAttributes,U=s.enabledAttributes,b=s.attributeDivisors;R[w]=1,U[w]===0&&(r.enableVertexAttribArray(w),U[w]=1),b[w]!==D&&(r.vertexAttribDivisor(w,D),b[w]=D)}function y(){const w=s.newAttributes,D=s.enabledAttributes;for(let R=0,U=D.length;R<U;R++)D[R]!==w[R]&&(r.disableVertexAttribArray(R),D[R]=0)}function x(w,D,R,U,b,F,$){$===!0?r.vertexAttribIPointer(w,D,R,b,F):r.vertexAttribPointer(w,D,R,U,b,F)}function v(w,D,R,U){_();const b=U.attributes,F=R.getAttributes(),$=D.defaultAttributeValues;for(const V in F){const J=F[V];if(J.location>=0){let tt=b[V];if(tt===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor)),tt!==void 0){const ut=tt.normalized,X=tt.itemSize,Z=t.get(tt);if(Z===void 0)continue;const xt=Z.buffer,gt=Z.type,ft=Z.bytesPerElement,st=gt===r.INT||gt===r.UNSIGNED_INT||tt.gpuType===vl;if(tt.isInterleavedBufferAttribute){const ct=tt.data,dt=ct.stride,_t=tt.offset;if(ct.isInstancedInterleavedBuffer){for(let St=0;St<J.locationSize;St++)d(J.location+St,ct.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let St=0;St<J.locationSize;St++)m(J.location+St);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let St=0;St<J.locationSize;St++)x(J.location+St,X/J.locationSize,gt,ut,dt*ft,(_t+X/J.locationSize*St)*ft,st)}else{if(tt.isInstancedBufferAttribute){for(let ct=0;ct<J.locationSize;ct++)d(J.location+ct,tt.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ct=0;ct<J.locationSize;ct++)m(J.location+ct);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let ct=0;ct<J.locationSize;ct++)x(J.location+ct,X/J.locationSize,gt,ut,X*ft,X/J.locationSize*ct*ft,st)}}else if($!==void 0){const ut=$[V];if(ut!==void 0)switch(ut.length){case 2:r.vertexAttrib2fv(J.location,ut);break;case 3:r.vertexAttrib3fv(J.location,ut);break;case 4:r.vertexAttrib4fv(J.location,ut);break;default:r.vertexAttrib1fv(J.location,ut)}}}}y()}function E(){P();for(const w in n){const D=n[w];for(const R in D){const U=D[R];for(const b in U)h(U[b].object),delete U[b];delete D[R]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const D=n[w.id];for(const R in D){const U=D[R];for(const b in U)h(U[b].object),delete U[b];delete D[R]}delete n[w.id]}function T(w){for(const D in n){const R=n[D];if(R[w.id]===void 0)continue;const U=R[w.id];for(const b in U)h(U[b].object),delete U[b];delete R[w.id]}}function P(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function r0(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];e.update(u,n,1)}function l(c,h,f,p){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*p[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function s0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==fn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Vn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==zn&&!P)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:A}}function o0(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Kn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const u=f.length!==0||p||n!==0||i;return i=p,n=f.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,u){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,x=y*4;let v=d.clippingState||null;l.value=v,v=h(g,p,x,u);for(let E=0;E!==x;++E)v[E]=e[E];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,p,u,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=u+_*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,v=u;x!==_;++x,v+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function a0(r){let t=new WeakMap;function e(o,a){return a===La?o.mapping=Qi:a===Da&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===La||a===Da)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gp(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Yi=4,Pc=[.125,.215,.35,.446,.526,.582],gi=20,Vo=new am,Ic=new Qt;let Go=null,Wo=0,Xo=0,qo=!1;const pi=(1+Math.sqrt(5))/2,Vi=1/pi,Lc=[new q(-pi,Vi,0),new q(pi,Vi,0),new q(-Vi,0,pi),new q(Vi,0,pi),new q(0,pi,-Vi),new q(0,pi,Vi),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],l0=new q;class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=l0}=s;Go=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Go,Wo,Xo),this._renderer.xr.enabled=qo,t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Go=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Wr,format:fn,colorSpace:er,depthBuffer:!1},i=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c0(s)),this._blurMaterial=u0(s,t,e)}return i}_compileMaterial(t){const e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,Vo)}_sceneToCubeUV(t,e,n,i,s){const l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,u=f.toneMapping;f.getClearColor(Ic),f.toneMapping=ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));const _=new Tl({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),m=new Fe(new kn,_);let d=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,d=!0):(_.color.copy(Ic),d=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const E=this._cubeSize;Ss(i,v*E,x>2?E:0,E,E),f.setRenderTarget(i),d&&f.render(m,l),f.render(t,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=p,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Qi||t.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Vo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lc[(i-s-1)%Lc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Fe(this._lodPlanes[i],c),p=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*gi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):gi;m>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const d=[];let y=0;for(let T=0;T<gi;++T){const P=T/_,S=Math.exp(-P*P/2);d.push(S),T===0?y+=S:T<m&&(y+=2*S)}for(let T=0;T<d.length;T++)d[T]=d[T]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;const v=this._sizeLods[i],E=3*v*(i>x-Yi?i-x+Yi:0),A=4*(this._cubeSize-v);Ss(e,E,A,3*v,2*v),l.setRenderTarget(e),l.render(f,Vo)}}function c0(r){const t=[],e=[],n=[];let i=r;const s=r-Yi+1+Pc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Yi?l=Pc[o-r+Yi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*u),x=new Float32Array(m*g*u),v=new Float32Array(d*g*u);for(let A=0;A<u;A++){const T=A%3*2/3-1,P=A>2?0:-1,S=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(S,_*g*A),x.set(p,m*g*A);const w=[A,A,A,A,A,A];v.set(w,d*g*A)}const E=new sn;E.setAttribute("position",new ye(y,_)),E.setAttribute("uv",new ye(x,m)),E.setAttribute("faceIndex",new ye(v,d)),t.push(E),i>Yi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(r,t,e){const n=new Mi(r,t,e);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function u0(r,t,e){const n=new Float32Array(gi),i=new q(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Uc(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Oc(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function h0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===La||l===Da,h=l===Qi||l===tr;if(c||h){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Dc(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const u=a.image;return c&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new Dc(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function f0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function d0(r,t,e,n){const i={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete i[p.id];const u=s.get(p);u&&(t.remove(u),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const u in p)t.update(p[u],r.ARRAY_BUFFER)}function c(f){const p=[],u=f.index,g=f.attributes.position;let _=0;if(u!==null){const y=u.array;_=u.version;for(let x=0,v=y.length;x<v;x+=3){const E=y[x+0],A=y[x+1],T=y[x+2];p.push(E,A,A,T,T,E)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const E=x+0,A=x+1,T=x+2;p.push(E,A,A,T,T,E)}}else return;const m=new(gh(p)?Mh:bh)(p,1);m.version=_;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function h(f){const p=s.get(f);if(p){const u=f.index;u!==null&&p.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function p0(r,t,e){let n;function i(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,u){r.drawElements(n,u,s,p*o),e.update(u,n,1)}function c(p,u,g){g!==0&&(r.drawElementsInstanced(n,u,s,p*o,g),e.update(u,n,g))}function h(p,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,p,0,g);let m=0;for(let d=0;d<g;d++)m+=u[d];e.update(m,n,1)}function f(p,u,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/o,u[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,s,p,0,_,0,g);let d=0;for(let y=0;y<g;y++)d+=u[y]*_[y];e.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function m0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function g0(r,t,e){const n=new WeakMap,i=new Se;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();const u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;u===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const A=new Float32Array(v*E*4*f),T=new vh(A,v,E,f);T.type=zn,T.needsUpdate=!0;const P=x*4;for(let w=0;w<f;w++){const D=m[w],R=d[w],U=y[w],b=v*E*4*w;for(let F=0;F<D.count;F++){const $=F*P;u===!0&&(i.fromBufferAttribute(D,F),A[b+$+0]=i.x,A[b+$+1]=i.y,A[b+$+2]=i.z,A[b+$+3]=0),g===!0&&(i.fromBufferAttribute(R,F),A[b+$+4]=i.x,A[b+$+5]=i.y,A[b+$+6]=i.z,A[b+$+7]=0),_===!0&&(i.fromBufferAttribute(U,F),A[b+$+8]=i.x,A[b+$+9]=i.y,A[b+$+10]=i.z,A[b+$+11]=U.itemSize===4?i.w:1)}}p={count:f,texture:T,size:new wt(v,E)},n.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];const g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:s}}function _0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Bh=new He,Fc=new Ah(1,1),zh=new vh,kh=new Qd,Hh=new wh,Bc=[],zc=[],kc=new Float32Array(16),Hc=new Float32Array(9),Vc=new Float32Array(4);function or(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Bc[i];if(s===void 0&&(s=new Float32Array(i),Bc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Pe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ie(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function to(r,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function v0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function x0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2fv(this.addr,t),Ie(e,t)}}function y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;r.uniform3fv(this.addr,t),Ie(e,t)}}function b0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4fv(this.addr,t),Ie(e,t)}}function M0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Vc.set(n),r.uniformMatrix2fv(this.addr,!1,Vc),Ie(e,n)}}function S0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Hc.set(n),r.uniformMatrix3fv(this.addr,!1,Hc),Ie(e,n)}}function E0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;kc.set(n),r.uniformMatrix4fv(this.addr,!1,kc),Ie(e,n)}}function w0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function T0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2iv(this.addr,t),Ie(e,t)}}function A0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3iv(this.addr,t),Ie(e,t)}}function C0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4iv(this.addr,t),Ie(e,t)}}function R0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function P0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2uiv(this.addr,t),Ie(e,t)}}function I0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3uiv(this.addr,t),Ie(e,t)}}function L0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4uiv(this.addr,t),Ie(e,t)}}function D0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Fc.compareFunction=mh,s=Fc):s=Bh,e.setTexture2D(t||s,i)}function N0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||kh,i)}function U0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Hh,i)}function O0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||zh,i)}function F0(r){switch(r){case 5126:return v0;case 35664:return x0;case 35665:return y0;case 35666:return b0;case 35674:return M0;case 35675:return S0;case 35676:return E0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return C0;case 5125:return R0;case 36294:return P0;case 36295:return I0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return O0}}function B0(r,t){r.uniform1fv(this.addr,t)}function z0(r,t){const e=or(t,this.size,2);r.uniform2fv(this.addr,e)}function k0(r,t){const e=or(t,this.size,3);r.uniform3fv(this.addr,e)}function H0(r,t){const e=or(t,this.size,4);r.uniform4fv(this.addr,e)}function V0(r,t){const e=or(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function G0(r,t){const e=or(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function W0(r,t){const e=or(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function X0(r,t){r.uniform1iv(this.addr,t)}function q0(r,t){r.uniform2iv(this.addr,t)}function Y0(r,t){r.uniform3iv(this.addr,t)}function $0(r,t){r.uniform4iv(this.addr,t)}function j0(r,t){r.uniform1uiv(this.addr,t)}function Z0(r,t){r.uniform2uiv(this.addr,t)}function K0(r,t){r.uniform3uiv(this.addr,t)}function J0(r,t){r.uniform4uiv(this.addr,t)}function Q0(r,t,e){const n=this.cache,i=t.length,s=to(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Bh,s[o])}function tv(r,t,e){const n=this.cache,i=t.length,s=to(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||kh,s[o])}function ev(r,t,e){const n=this.cache,i=t.length,s=to(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Hh,s[o])}function nv(r,t,e){const n=this.cache,i=t.length,s=to(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||zh,s[o])}function iv(r){switch(r){case 5126:return B0;case 35664:return z0;case 35665:return k0;case 35666:return H0;case 35674:return V0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return $0;case 5125:return j0;case 36294:return Z0;case 36295:return K0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return nv}}class rv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=F0(e.type)}}class sv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iv(e.type)}}class ov{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function Gc(r,t){r.seq.push(t),r.map[t.id]=t}function av(r,t,e){const n=r.name,i=n.length;for(Yo.lastIndex=0;;){const s=Yo.exec(n),o=Yo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Gc(e,c===void 0?new rv(a,r,t):new sv(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new ov(a),Gc(e,f)),e=f}}}class Ns{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);av(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Wc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const lv=37297;let cv=0;function uv(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Xc=new Wt;function hv(r){ie._getMatrix(Xc,ie.workingColorSpace,r);const t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(r)){case Bs:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function qc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+uv(r.getShaderSource(t),a)}else return s}function fv(r,t){const e=hv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dv(r,t){let e;switch(t){case fd:e="Linear";break;case dd:e="Reinhard";break;case pd:e="Cineon";break;case md:e="ACESFilmic";break;case _d:e="AgX";break;case vd:e="Neutral";break;case gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Es=new q;function pv(){ie.getLuminanceCoefficients(Es);const r=Es.x.toFixed(4),t=Es.y.toFixed(4),e=Es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function gv(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _v(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function br(r){return r!==""}function Yc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(r){return r.replace(vv,yv)}const xv=new Map;function yv(r,t){let e=Yt[t];if(e===void 0){const n=xv.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fl(e)}const bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(r){return r.replace(bv,Mv)}function Mv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===nh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function Ev(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qi:case tr:t="ENVMAP_TYPE_CUBE";break;case js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function Tv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ih:t="ENVMAP_BLENDING_MULTIPLY";break;case ud:t="ENVMAP_BLENDING_MIX";break;case hd:t="ENVMAP_BLENDING_ADD";break}return t}function Av(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cv(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Sv(e),c=Ev(e),h=wv(e),f=Tv(e),p=Av(e),u=mv(e),g=gv(s),_=i.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),d.length>0&&(d+=`
`)):(m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),d=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Yt.tonemapping_pars_fragment:"",e.toneMapping!==ei?dv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,fv("linearToOutputTexel",e.outputColorSpace),pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),o=fl(o),o=Yc(o,e),o=$c(o,e),a=fl(a),a=Yc(a,e),a=$c(a,e),o=jc(o),a=jc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=y+m+o,v=y+d+a,E=Wc(i,i.VERTEX_SHADER,x),A=Wc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,E),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(D){if(r.debug.checkShaderErrors){const R=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(E)||"",b=i.getShaderInfoLog(A)||"",F=R.trim(),$=U.trim(),V=b.trim();let J=!0,tt=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,A);else{const ut=qc(i,E,"vertex"),X=qc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+ut+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):($===""||V==="")&&(tt=!1);tt&&(D.diagnostics={runnable:J,programLog:F,vertexShader:{log:$,prefix:m},fragmentShader:{log:V,prefix:d}})}i.deleteShader(E),i.deleteShader(A),P=new Ns(i,_),S=_v(i,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,lv)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let Rv=0;class Pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Iv(t),e.set(t,n)),n}}class Iv{constructor(t){this.id=Rv++,this.code=t,this.usedTimes=0}}function Lv(r,t,e,n,i,s,o){const a=new xh,l=new Pv,c=new Set,h=[],f=i.logarithmicDepthBuffer,p=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,w,D,R,U){const b=R.fog,F=U.geometry,$=S.isMeshStandardMaterial?R.environment:null,V=(S.isMeshStandardMaterial?e:t).get(S.envMap||$),J=V&&V.mapping===js?V.image.height:null,tt=g[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const ut=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,X=ut!==void 0?ut.length:0;let Z=0;F.morphAttributes.position!==void 0&&(Z=1),F.morphAttributes.normal!==void 0&&(Z=2),F.morphAttributes.color!==void 0&&(Z=3);let xt,gt,ft,st;if(tt){const ae=Mn[tt];xt=ae.vertexShader,gt=ae.fragmentShader}else xt=S.vertexShader,gt=S.fragmentShader,l.update(S),ft=l.getVertexShaderID(S),st=l.getFragmentShaderID(S);const ct=r.getRenderTarget(),dt=r.state.buffers.depth.getReversed(),_t=U.isInstancedMesh===!0,St=U.isBatchedMesh===!0,Ut=!!S.map,jt=!!S.matcap,H=!!V,M=!!S.aoMap,G=!!S.lightMap,k=!!S.bumpMap,L=!!S.normalMap,N=!!S.displacementMap,B=!!S.emissiveMap,K=!!S.metalnessMap,rt=!!S.roughnessMap,W=S.anisotropy>0,I=S.clearcoat>0,C=S.dispersion>0,z=S.iridescence>0,Y=S.sheen>0,ot=S.transmission>0,Q=W&&!!S.anisotropyMap,Mt=I&&!!S.clearcoatMap,pt=I&&!!S.clearcoatNormalMap,At=I&&!!S.clearcoatRoughnessMap,Et=z&&!!S.iridescenceMap,ht=z&&!!S.iridescenceThicknessMap,Ct=Y&&!!S.sheenColorMap,kt=Y&&!!S.sheenRoughnessMap,Dt=!!S.specularMap,Rt=!!S.specularColorMap,Xt=!!S.specularIntensityMap,j=ot&&!!S.transmissionMap,yt=ot&&!!S.thicknessMap,Tt=!!S.gradientMap,Lt=!!S.alphaMap,vt=S.alphaTest>0,mt=!!S.alphaHash,Ft=!!S.extensions;let qt=ei;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(qt=r.toneMapping);const pe={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:xt,fragmentShader:gt,defines:S.defines,customVertexShaderID:ft,customFragmentShaderID:st,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:St,batchingColor:St&&U._colorsTexture!==null,instancing:_t,instancingColor:_t&&U.instanceColor!==null,instancingMorph:_t&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ct===null?r.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:er,alphaToCoverage:!!S.alphaToCoverage,map:Ut,matcap:jt,envMap:H,envMapMode:H&&V.mapping,envMapCubeUVHeight:J,aoMap:M,lightMap:G,bumpMap:k,normalMap:L,displacementMap:p&&N,emissiveMap:B,normalMapObjectSpace:L&&S.normalMapType===Sd,normalMapTangentSpace:L&&S.normalMapType===ph,metalnessMap:K,roughnessMap:rt,anisotropy:W,anisotropyMap:Q,clearcoat:I,clearcoatMap:Mt,clearcoatNormalMap:pt,clearcoatRoughnessMap:At,dispersion:C,iridescence:z,iridescenceMap:Et,iridescenceThicknessMap:ht,sheen:Y,sheenColorMap:Ct,sheenRoughnessMap:kt,specularMap:Dt,specularColorMap:Rt,specularIntensityMap:Xt,transmission:ot,transmissionMap:j,thicknessMap:yt,gradientMap:Tt,opaque:S.transparent===!1&&S.blending===ji&&S.alphaToCoverage===!1,alphaMap:Lt,alphaTest:vt,alphaHash:mt,combine:S.combine,mapUv:Ut&&_(S.map.channel),aoMapUv:M&&_(S.aoMap.channel),lightMapUv:G&&_(S.lightMap.channel),bumpMapUv:k&&_(S.bumpMap.channel),normalMapUv:L&&_(S.normalMap.channel),displacementMapUv:N&&_(S.displacementMap.channel),emissiveMapUv:B&&_(S.emissiveMap.channel),metalnessMapUv:K&&_(S.metalnessMap.channel),roughnessMapUv:rt&&_(S.roughnessMap.channel),anisotropyMapUv:Q&&_(S.anisotropyMap.channel),clearcoatMapUv:Mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:kt&&_(S.sheenRoughnessMap.channel),specularMapUv:Dt&&_(S.specularMap.channel),specularColorMapUv:Rt&&_(S.specularColorMap.channel),specularIntensityMapUv:Xt&&_(S.specularIntensityMap.channel),transmissionMapUv:j&&_(S.transmissionMap.channel),thicknessMapUv:yt&&_(S.thicknessMap.channel),alphaMapUv:Lt&&_(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(L||W),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Ut||Lt),fog:!!b,useFog:S.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:dt,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:qt,decodeVideoTexture:Ut&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===ue,decodeVideoTextureEmissive:B&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===ue,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===En,flipSided:S.side===Ye,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function d(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)w.push(D),w.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(y(w,S),x(w,S),w.push(r.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function y(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const w=g[S.type];let D;if(w){const R=Mn[w];D=fp.clone(R.uniforms)}else D=S.uniforms;return D}function E(S,w){let D;for(let R=0,U=h.length;R<U;R++){const b=h[R];if(b.cacheKey===w){D=b,++D.usedTimes;break}}return D===void 0&&(D=new Cv(r,w,S,s),h.push(D)),D}function A(S){if(--S.usedTimes===0){const w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function Dv(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Nv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Kc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Jc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,p,u,g,_,m){let d=r[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=u,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),t++,d}function a(f,p,u,g,_,m){const d=o(f,p,u,g,_,m);u.transmission>0?n.push(d):u.transparent===!0?i.push(d):e.push(d)}function l(f,p,u,g,_,m){const d=o(f,p,u,g,_,m);u.transmission>0?n.unshift(d):u.transparent===!0?i.unshift(d):e.unshift(d)}function c(f,p){e.length>1&&e.sort(f||Nv),n.length>1&&n.sort(p||Kc),i.length>1&&i.sort(p||Kc)}function h(){for(let f=t,p=r.length;f<p;f++){const u=r[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Uv(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Jc,r.set(n,[o])):i>=s.length?(o=new Jc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ov(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new Qt};break;case"SpotLight":e={position:new q,direction:new q,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=e,e}}}function Fv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Bv=0;function zv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function kv(r){const t=new Ov,e=Fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new ge,o=new ge;function a(c){let h=0,f=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,g=0,_=0,m=0,d=0,y=0,x=0,v=0,E=0,A=0,T=0;c.sort(zv);for(let S=0,w=c.length;S<w;S++){const D=c[S],R=D.color,U=D.intensity,b=D.distance,F=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=R.r*U,f+=R.g*U,p+=R.b*U;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],U);T++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const V=D.shadow,J=e.get(D);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,n.directionalShadow[u]=J,n.directionalShadowMap[u]=F,n.directionalShadowMatrix[u]=D.shadow.matrix,y++}n.directional[u]=$,u++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(R).multiplyScalar(U),$.distance=b,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[_]=$;const V=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,V.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=V.matrix,D.castShadow){const J=e.get(D);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=F,v++}_++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(R).multiplyScalar(U),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=$,m++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const V=D.shadow,J=e.get(D);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=$,g++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(U),$.groundColor.copy(D.groundColor).multiplyScalar(U),n.hemi[d]=$,d++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==u||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==E||P.numLightProbes!==T)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=u,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=E,P.numLightProbes=T,n.version=Bv++)}function l(c,h){let f=0,p=0,u=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const x=c[d];if(x.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(x.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Qc(r){const t=new kv(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Hv(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Qc(r),t.set(i,[a])):s>=o.length?(a=new Qc(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wv(r,t,e){let n=new Th;const i=new wt,s=new wt,o=new Se,a=new em({depthPacking:Md}),l=new nm,c={},h=e.maxTextureSize,f={[ni]:Ye,[Ye]:ni,[En]:En},p=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Vv,fragmentShader:Gv}),u=p.clone();u.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fe(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let d=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=r.getRenderTarget(),w=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),R=r.state;R.setBlending(ti),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const U=d!==On&&this.type===On,b=d===On&&this.type!==On;for(let F=0,$=A.length;F<$;F++){const V=A[F],J=V.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const tt=J.getFrameExtents();if(i.multiply(tt),s.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/tt.x),i.x=s.x*tt.x,J.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/tt.y),i.y=s.y*tt.y,J.mapSize.y=s.y)),J.map===null||U===!0||b===!0){const X=this.type!==On?{minFilter:dn,magFilter:dn}:{};J.map!==null&&J.map.dispose(),J.map=new Mi(i.x,i.y,X),J.map.texture.name=V.name+".shadowMap",J.camera.updateProjectionMatrix()}r.setRenderTarget(J.map),r.clear();const ut=J.getViewportCount();for(let X=0;X<ut;X++){const Z=J.getViewport(X);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),R.viewport(o),J.updateMatrices(V,X),n=J.getFrustum(),v(T,P,J.camera,V,this.type)}J.isPointLightShadow!==!0&&this.type===On&&y(J,P),J.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(S,w,D)};function y(A,T){const P=t.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Mi(i.x,i.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,P,p,_,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,P,u,_,null)}function x(A,T,P,S){let w=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)w=D;else if(w=P.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const R=w.uuid,U=T.uuid;let b=c[R];b===void 0&&(b={},c[R]=b);let F=b[U];F===void 0&&(F=w.clone(),b[U]=F,T.addEventListener("dispose",E)),w=F}if(w.visible=T.visible,w.wireframe=T.wireframe,S===On?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:f[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const R=r.properties.get(w);R.light=P}return w}function v(A,T,P,S,w){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===On)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const U=t.update(A),b=A.material;if(Array.isArray(b)){const F=U.groups;for(let $=0,V=F.length;$<V;$++){const J=F[$],tt=b[J.materialIndex];if(tt&&tt.visible){const ut=x(A,tt,S,w);A.onBeforeShadow(r,A,T,P,U,ut,J),r.renderBufferDirect(P,null,U,ut,A,J),A.onAfterShadow(r,A,T,P,U,ut,J)}}}else if(b.visible){const F=x(A,b,S,w);A.onBeforeShadow(r,A,T,P,U,F,null),r.renderBufferDirect(P,null,U,F,A,null),A.onAfterShadow(r,A,T,P,U,F,null)}}const R=A.children;for(let U=0,b=R.length;U<b;U++)v(R[U],T,P,S,w)}function E(A){A.target.removeEventListener("dispose",E);for(const P in c){const S=c[P],w=A.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const Xv={[wa]:Ta,[Aa]:Pa,[Ca]:Ia,[Ji]:Ra,[Ta]:wa,[Pa]:Aa,[Ia]:Ca,[Ra]:Ji};function qv(r,t){function e(){let j=!1;const yt=new Se;let Tt=null;const Lt=new Se(0,0,0,0);return{setMask:function(vt){Tt!==vt&&!j&&(r.colorMask(vt,vt,vt,vt),Tt=vt)},setLocked:function(vt){j=vt},setClear:function(vt,mt,Ft,qt,pe){pe===!0&&(vt*=qt,mt*=qt,Ft*=qt),yt.set(vt,mt,Ft,qt),Lt.equals(yt)===!1&&(r.clearColor(vt,mt,Ft,qt),Lt.copy(yt))},reset:function(){j=!1,Tt=null,Lt.set(-1,0,0,0)}}}function n(){let j=!1,yt=!1,Tt=null,Lt=null,vt=null;return{setReversed:function(mt){if(yt!==mt){const Ft=t.get("EXT_clip_control");mt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),yt=mt;const qt=vt;vt=null,this.setClear(qt)}},getReversed:function(){return yt},setTest:function(mt){mt?ct(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(mt){Tt!==mt&&!j&&(r.depthMask(mt),Tt=mt)},setFunc:function(mt){if(yt&&(mt=Xv[mt]),Lt!==mt){switch(mt){case wa:r.depthFunc(r.NEVER);break;case Ta:r.depthFunc(r.ALWAYS);break;case Aa:r.depthFunc(r.LESS);break;case Ji:r.depthFunc(r.LEQUAL);break;case Ca:r.depthFunc(r.EQUAL);break;case Ra:r.depthFunc(r.GEQUAL);break;case Pa:r.depthFunc(r.GREATER);break;case Ia:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Lt=mt}},setLocked:function(mt){j=mt},setClear:function(mt){vt!==mt&&(yt&&(mt=1-mt),r.clearDepth(mt),vt=mt)},reset:function(){j=!1,Tt=null,Lt=null,vt=null,yt=!1}}}function i(){let j=!1,yt=null,Tt=null,Lt=null,vt=null,mt=null,Ft=null,qt=null,pe=null;return{setTest:function(ae){j||(ae?ct(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(ae){yt!==ae&&!j&&(r.stencilMask(ae),yt=ae)},setFunc:function(ae,Rn,xn){(Tt!==ae||Lt!==Rn||vt!==xn)&&(r.stencilFunc(ae,Rn,xn),Tt=ae,Lt=Rn,vt=xn)},setOp:function(ae,Rn,xn){(mt!==ae||Ft!==Rn||qt!==xn)&&(r.stencilOp(ae,Rn,xn),mt=ae,Ft=Rn,qt=xn)},setLocked:function(ae){j=ae},setClear:function(ae){pe!==ae&&(r.clearStencil(ae),pe=ae)},reset:function(){j=!1,yt=null,Tt=null,Lt=null,vt=null,mt=null,Ft=null,qt=null,pe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},f={},p=new WeakMap,u=[],g=null,_=!1,m=null,d=null,y=null,x=null,v=null,E=null,A=null,T=new Qt(0,0,0),P=0,S=!1,w=null,D=null,R=null,U=null,b=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=V>=1):J.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=V>=2);let tt=null,ut={};const X=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),xt=new Se().fromArray(X),gt=new Se().fromArray(Z);function ft(j,yt,Tt,Lt){const vt=new Uint8Array(4),mt=r.createTexture();r.bindTexture(j,mt),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<Tt;Ft++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(yt,0,r.RGBA,1,1,Lt,0,r.RGBA,r.UNSIGNED_BYTE,vt):r.texImage2D(yt+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,vt);return mt}const st={};st[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),st[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),st[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(r.DEPTH_TEST),o.setFunc(Ji),k(!1),L($l),ct(r.CULL_FACE),M(ti);function ct(j){h[j]!==!0&&(r.enable(j),h[j]=!0)}function dt(j){h[j]!==!1&&(r.disable(j),h[j]=!1)}function _t(j,yt){return f[j]!==yt?(r.bindFramebuffer(j,yt),f[j]=yt,j===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=yt),j===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=yt),!0):!1}function St(j,yt){let Tt=u,Lt=!1;if(j){Tt=p.get(yt),Tt===void 0&&(Tt=[],p.set(yt,Tt));const vt=j.textures;if(Tt.length!==vt.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,Ft=vt.length;mt<Ft;mt++)Tt[mt]=r.COLOR_ATTACHMENT0+mt;Tt.length=vt.length,Lt=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,Lt=!0);Lt&&r.drawBuffers(Tt)}function Ut(j){return g!==j?(r.useProgram(j),g=j,!0):!1}const jt={[mi]:r.FUNC_ADD,[Yf]:r.FUNC_SUBTRACT,[$f]:r.FUNC_REVERSE_SUBTRACT};jt[jf]=r.MIN,jt[Zf]=r.MAX;const H={[Kf]:r.ZERO,[Jf]:r.ONE,[Qf]:r.SRC_COLOR,[Sa]:r.SRC_ALPHA,[sd]:r.SRC_ALPHA_SATURATE,[id]:r.DST_COLOR,[ed]:r.DST_ALPHA,[td]:r.ONE_MINUS_SRC_COLOR,[Ea]:r.ONE_MINUS_SRC_ALPHA,[rd]:r.ONE_MINUS_DST_COLOR,[nd]:r.ONE_MINUS_DST_ALPHA,[od]:r.CONSTANT_COLOR,[ad]:r.ONE_MINUS_CONSTANT_COLOR,[ld]:r.CONSTANT_ALPHA,[cd]:r.ONE_MINUS_CONSTANT_ALPHA};function M(j,yt,Tt,Lt,vt,mt,Ft,qt,pe,ae){if(j===ti){_===!0&&(dt(r.BLEND),_=!1);return}if(_===!1&&(ct(r.BLEND),_=!0),j!==qf){if(j!==m||ae!==S){if((d!==mi||v!==mi)&&(r.blendEquation(r.FUNC_ADD),d=mi,v=mi),ae)switch(j){case ji:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jl:r.blendFunc(r.ONE,r.ONE);break;case Zl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Zl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}y=null,x=null,E=null,A=null,T.set(0,0,0),P=0,m=j,S=ae}return}vt=vt||yt,mt=mt||Tt,Ft=Ft||Lt,(yt!==d||vt!==v)&&(r.blendEquationSeparate(jt[yt],jt[vt]),d=yt,v=vt),(Tt!==y||Lt!==x||mt!==E||Ft!==A)&&(r.blendFuncSeparate(H[Tt],H[Lt],H[mt],H[Ft]),y=Tt,x=Lt,E=mt,A=Ft),(qt.equals(T)===!1||pe!==P)&&(r.blendColor(qt.r,qt.g,qt.b,pe),T.copy(qt),P=pe),m=j,S=!1}function G(j,yt){j.side===En?dt(r.CULL_FACE):ct(r.CULL_FACE);let Tt=j.side===Ye;yt&&(Tt=!Tt),k(Tt),j.blending===ji&&j.transparent===!1?M(ti):M(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),s.setMask(j.colorWrite);const Lt=j.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),B(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ct(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function k(j){w!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),w=j)}function L(j){j!==Gf?(ct(r.CULL_FACE),j!==D&&(j===$l?r.cullFace(r.BACK):j===Wf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),D=j}function N(j){j!==R&&($&&r.lineWidth(j),R=j)}function B(j,yt,Tt){j?(ct(r.POLYGON_OFFSET_FILL),(U!==yt||b!==Tt)&&(r.polygonOffset(yt,Tt),U=yt,b=Tt)):dt(r.POLYGON_OFFSET_FILL)}function K(j){j?ct(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function rt(j){j===void 0&&(j=r.TEXTURE0+F-1),tt!==j&&(r.activeTexture(j),tt=j)}function W(j,yt,Tt){Tt===void 0&&(tt===null?Tt=r.TEXTURE0+F-1:Tt=tt);let Lt=ut[Tt];Lt===void 0&&(Lt={type:void 0,texture:void 0},ut[Tt]=Lt),(Lt.type!==j||Lt.texture!==yt)&&(tt!==Tt&&(r.activeTexture(Tt),tt=Tt),r.bindTexture(j,yt||st[j]),Lt.type=j,Lt.texture=yt)}function I(){const j=ut[tt];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function C(){try{r.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Y(){try{r.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ot(){try{r.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Q(){try{r.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Mt(){try{r.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pt(){try{r.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function At(){try{r.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Et(){try{r.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ht(){try{r.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ct(j){xt.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),xt.copy(j))}function kt(j){gt.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),gt.copy(j))}function Dt(j,yt){let Tt=c.get(yt);Tt===void 0&&(Tt=new WeakMap,c.set(yt,Tt));let Lt=Tt.get(j);Lt===void 0&&(Lt=r.getUniformBlockIndex(yt,j.name),Tt.set(j,Lt))}function Rt(j,yt){const Lt=c.get(yt).get(j);l.get(yt)!==Lt&&(r.uniformBlockBinding(yt,Lt,j.__bindingPointIndex),l.set(yt,Lt))}function Xt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},tt=null,ut={},f={},p=new WeakMap,u=[],g=null,_=!1,m=null,d=null,y=null,x=null,v=null,E=null,A=null,T=new Qt(0,0,0),P=0,S=!1,w=null,D=null,R=null,U=null,b=null,xt.set(0,0,r.canvas.width,r.canvas.height),gt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ct,disable:dt,bindFramebuffer:_t,drawBuffers:St,useProgram:Ut,setBlending:M,setMaterial:G,setFlipSided:k,setCullFace:L,setLineWidth:N,setPolygonOffset:B,setScissorTest:K,activeTexture:rt,bindTexture:W,unbindTexture:I,compressedTexImage2D:C,compressedTexImage3D:z,texImage2D:Et,texImage3D:ht,updateUBOMapping:Dt,uniformBlockBinding:Rt,texStorage2D:pt,texStorage3D:At,texSubImage2D:Y,texSubImage3D:ot,compressedTexSubImage2D:Q,compressedTexSubImage3D:Mt,scissor:Ct,viewport:kt,reset:Xt}}function Yv(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap;let f;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,C){return u?new OffscreenCanvas(I,C):Hs("canvas")}function _(I,C,z){let Y=1;const ot=W(I);if((ot.width>z||ot.height>z)&&(Y=z/Math.max(ot.width,ot.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Q=Math.floor(Y*ot.width),Mt=Math.floor(Y*ot.height);f===void 0&&(f=g(Q,Mt));const pt=C?g(Q,Mt):f;return pt.width=Q,pt.height=Mt,pt.getContext("2d").drawImage(I,0,0,Q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Q+"x"+Mt+")."),pt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),I;return I}function m(I){return I.generateMipmaps}function d(I){r.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(I,C,z,Y,ot=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=C;if(C===r.RED&&(z===r.FLOAT&&(Q=r.R32F),z===r.HALF_FLOAT&&(Q=r.R16F),z===r.UNSIGNED_BYTE&&(Q=r.R8)),C===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.R8UI),z===r.UNSIGNED_SHORT&&(Q=r.R16UI),z===r.UNSIGNED_INT&&(Q=r.R32UI),z===r.BYTE&&(Q=r.R8I),z===r.SHORT&&(Q=r.R16I),z===r.INT&&(Q=r.R32I)),C===r.RG&&(z===r.FLOAT&&(Q=r.RG32F),z===r.HALF_FLOAT&&(Q=r.RG16F),z===r.UNSIGNED_BYTE&&(Q=r.RG8)),C===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RG8UI),z===r.UNSIGNED_SHORT&&(Q=r.RG16UI),z===r.UNSIGNED_INT&&(Q=r.RG32UI),z===r.BYTE&&(Q=r.RG8I),z===r.SHORT&&(Q=r.RG16I),z===r.INT&&(Q=r.RG32I)),C===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),z===r.UNSIGNED_INT&&(Q=r.RGB32UI),z===r.BYTE&&(Q=r.RGB8I),z===r.SHORT&&(Q=r.RGB16I),z===r.INT&&(Q=r.RGB32I)),C===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),z===r.UNSIGNED_INT&&(Q=r.RGBA32UI),z===r.BYTE&&(Q=r.RGBA8I),z===r.SHORT&&(Q=r.RGBA16I),z===r.INT&&(Q=r.RGBA32I)),C===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),C===r.RGBA){const Mt=ot?Bs:ie.getTransfer(Y);z===r.FLOAT&&(Q=r.RGBA32F),z===r.HALF_FLOAT&&(Q=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Q=Mt===ue?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(I,C){let z;return I?C===null||C===bi||C===Pr?z=r.DEPTH24_STENCIL8:C===zn?z=r.DEPTH32F_STENCIL8:C===Rr&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===bi||C===Pr?z=r.DEPTH_COMPONENT24:C===zn?z=r.DEPTH_COMPONENT32F:C===Rr&&(z=r.DEPTH_COMPONENT16),z}function E(I,C){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==dn&&I.minFilter!==vn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function A(I){const C=I.target;C.removeEventListener("dispose",A),P(C),C.isVideoTexture&&h.delete(C)}function T(I){const C=I.target;C.removeEventListener("dispose",T),w(C)}function P(I){const C=n.get(I);if(C.__webglInit===void 0)return;const z=I.source,Y=p.get(z);if(Y){const ot=Y[C.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&S(I),Object.keys(Y).length===0&&p.delete(z)}n.remove(I)}function S(I){const C=n.get(I);r.deleteTexture(C.__webglTexture);const z=I.source,Y=p.get(z);delete Y[C.__cacheKey],o.memory.textures--}function w(I){const C=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(C.__webglFramebuffer[Y]))for(let ot=0;ot<C.__webglFramebuffer[Y].length;ot++)r.deleteFramebuffer(C.__webglFramebuffer[Y][ot]);else r.deleteFramebuffer(C.__webglFramebuffer[Y]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[Y])}else{if(Array.isArray(C.__webglFramebuffer))for(let Y=0;Y<C.__webglFramebuffer.length;Y++)r.deleteFramebuffer(C.__webglFramebuffer[Y]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Y=0;Y<C.__webglColorRenderbuffer.length;Y++)C.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[Y]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const z=I.textures;for(let Y=0,ot=z.length;Y<ot;Y++){const Q=n.get(z[Y]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(I)}let D=0;function R(){D=0}function U(){const I=D;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),D+=1,I}function b(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function F(I,C){const z=n.get(I);if(I.isVideoTexture&&K(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){const Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(z,I,C);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+C)}function $(I,C){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){st(z,I,C);return}e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+C)}function V(I,C){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){st(z,I,C);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+C)}function J(I,C){const z=n.get(I);if(I.version>0&&z.__version!==I.version){ct(z,I,C);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+C)}const tt={[Os]:r.REPEAT,[Jn]:r.CLAMP_TO_EDGE,[Fs]:r.MIRRORED_REPEAT},ut={[dn]:r.NEAREST,[sh]:r.NEAREST_MIPMAP_NEAREST,[vr]:r.NEAREST_MIPMAP_LINEAR,[vn]:r.LINEAR,[Cs]:r.LINEAR_MIPMAP_NEAREST,[Qn]:r.LINEAR_MIPMAP_LINEAR},X={[Ed]:r.NEVER,[Pd]:r.ALWAYS,[wd]:r.LESS,[mh]:r.LEQUAL,[Td]:r.EQUAL,[Rd]:r.GEQUAL,[Ad]:r.GREATER,[Cd]:r.NOTEQUAL};function Z(I,C){if(C.type===zn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===vn||C.magFilter===Cs||C.magFilter===vr||C.magFilter===Qn||C.minFilter===vn||C.minFilter===Cs||C.minFilter===vr||C.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,tt[C.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,tt[C.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,tt[C.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,ut[C.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,ut[C.minFilter]),C.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,X[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===dn||C.minFilter!==vr&&C.minFilter!==Qn||C.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function xt(I,C){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",A));const Y=C.source;let ot=p.get(Y);ot===void 0&&(ot={},p.set(Y,ot));const Q=b(C);if(Q!==I.__cacheKey){ot[Q]===void 0&&(ot[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ot[Q].usedTimes++;const Mt=ot[I.__cacheKey];Mt!==void 0&&(ot[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(C)),I.__cacheKey=Q,I.__webglTexture=ot[Q].texture}return z}function gt(I,C,z){return Math.floor(Math.floor(I/z)/C)}function ft(I,C,z,Y){const Q=I.updateRanges;if(Q.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,z,Y,C.data);else{Q.sort((ht,Ct)=>ht.start-Ct.start);let Mt=0;for(let ht=1;ht<Q.length;ht++){const Ct=Q[Mt],kt=Q[ht],Dt=Ct.start+Ct.count,Rt=gt(kt.start,C.width,4),Xt=gt(Ct.start,C.width,4);kt.start<=Dt+1&&Rt===Xt&&gt(kt.start+kt.count-1,C.width,4)===Rt?Ct.count=Math.max(Ct.count,kt.start+kt.count-Ct.start):(++Mt,Q[Mt]=kt)}Q.length=Mt+1;const pt=r.getParameter(r.UNPACK_ROW_LENGTH),At=r.getParameter(r.UNPACK_SKIP_PIXELS),Et=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let ht=0,Ct=Q.length;ht<Ct;ht++){const kt=Q[ht],Dt=Math.floor(kt.start/4),Rt=Math.ceil(kt.count/4),Xt=Dt%C.width,j=Math.floor(Dt/C.width),yt=Rt,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),e.texSubImage2D(r.TEXTURE_2D,0,Xt,j,yt,Tt,z,Y,C.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,pt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,At),r.pixelStorei(r.UNPACK_SKIP_ROWS,Et)}}function st(I,C,z){let Y=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Y=r.TEXTURE_3D);const ot=xt(I,C),Q=C.source;e.bindTexture(Y,I.__webglTexture,r.TEXTURE0+z);const Mt=n.get(Q);if(Q.version!==Mt.__version||ot===!0){e.activeTexture(r.TEXTURE0+z);const pt=ie.getPrimaries(ie.workingColorSpace),At=C.colorSpace===Bn?null:ie.getPrimaries(C.colorSpace),Et=C.colorSpace===Bn||pt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let ht=_(C.image,!1,i.maxTextureSize);ht=rt(C,ht);const Ct=s.convert(C.format,C.colorSpace),kt=s.convert(C.type);let Dt=x(C.internalFormat,Ct,kt,C.colorSpace,C.isVideoTexture);Z(Y,C);let Rt;const Xt=C.mipmaps,j=C.isVideoTexture!==!0,yt=Mt.__version===void 0||ot===!0,Tt=Q.dataReady,Lt=E(C,ht);if(C.isDepthTexture)Dt=v(C.format===Lr,C.type),yt&&(j?e.texStorage2D(r.TEXTURE_2D,1,Dt,ht.width,ht.height):e.texImage2D(r.TEXTURE_2D,0,Dt,ht.width,ht.height,0,Ct,kt,null));else if(C.isDataTexture)if(Xt.length>0){j&&yt&&e.texStorage2D(r.TEXTURE_2D,Lt,Dt,Xt[0].width,Xt[0].height);for(let vt=0,mt=Xt.length;vt<mt;vt++)Rt=Xt[vt],j?Tt&&e.texSubImage2D(r.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,Ct,kt,Rt.data):e.texImage2D(r.TEXTURE_2D,vt,Dt,Rt.width,Rt.height,0,Ct,kt,Rt.data);C.generateMipmaps=!1}else j?(yt&&e.texStorage2D(r.TEXTURE_2D,Lt,Dt,ht.width,ht.height),Tt&&ft(C,ht,Ct,kt)):e.texImage2D(r.TEXTURE_2D,0,Dt,ht.width,ht.height,0,Ct,kt,ht.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){j&&yt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,Dt,Xt[0].width,Xt[0].height,ht.depth);for(let vt=0,mt=Xt.length;vt<mt;vt++)if(Rt=Xt[vt],C.format!==fn)if(Ct!==null)if(j){if(Tt)if(C.layerUpdates.size>0){const Ft=Rc(Rt.width,Rt.height,C.format,C.type);for(const qt of C.layerUpdates){const pe=Rt.data.subarray(qt*Ft/Rt.data.BYTES_PER_ELEMENT,(qt+1)*Ft/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,vt,0,0,qt,Rt.width,Rt.height,1,Ct,pe)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,vt,0,0,0,Rt.width,Rt.height,ht.depth,Ct,Rt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,vt,Dt,Rt.width,Rt.height,ht.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Tt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,vt,0,0,0,Rt.width,Rt.height,ht.depth,Ct,kt,Rt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,vt,Dt,Rt.width,Rt.height,ht.depth,0,Ct,kt,Rt.data)}else{j&&yt&&e.texStorage2D(r.TEXTURE_2D,Lt,Dt,Xt[0].width,Xt[0].height);for(let vt=0,mt=Xt.length;vt<mt;vt++)Rt=Xt[vt],C.format!==fn?Ct!==null?j?Tt&&e.compressedTexSubImage2D(r.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(r.TEXTURE_2D,vt,Dt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Tt&&e.texSubImage2D(r.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,Ct,kt,Rt.data):e.texImage2D(r.TEXTURE_2D,vt,Dt,Rt.width,Rt.height,0,Ct,kt,Rt.data)}else if(C.isDataArrayTexture)if(j){if(yt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,Dt,ht.width,ht.height,ht.depth),Tt)if(C.layerUpdates.size>0){const vt=Rc(ht.width,ht.height,C.format,C.type);for(const mt of C.layerUpdates){const Ft=ht.data.subarray(mt*vt/ht.data.BYTES_PER_ELEMENT,(mt+1)*vt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,mt,ht.width,ht.height,1,Ct,kt,Ft)}C.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Ct,kt,ht.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,ht.width,ht.height,ht.depth,0,Ct,kt,ht.data);else if(C.isData3DTexture)j?(yt&&e.texStorage3D(r.TEXTURE_3D,Lt,Dt,ht.width,ht.height,ht.depth),Tt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Ct,kt,ht.data)):e.texImage3D(r.TEXTURE_3D,0,Dt,ht.width,ht.height,ht.depth,0,Ct,kt,ht.data);else if(C.isFramebufferTexture){if(yt)if(j)e.texStorage2D(r.TEXTURE_2D,Lt,Dt,ht.width,ht.height);else{let vt=ht.width,mt=ht.height;for(let Ft=0;Ft<Lt;Ft++)e.texImage2D(r.TEXTURE_2D,Ft,Dt,vt,mt,0,Ct,kt,null),vt>>=1,mt>>=1}}else if(Xt.length>0){if(j&&yt){const vt=W(Xt[0]);e.texStorage2D(r.TEXTURE_2D,Lt,Dt,vt.width,vt.height)}for(let vt=0,mt=Xt.length;vt<mt;vt++)Rt=Xt[vt],j?Tt&&e.texSubImage2D(r.TEXTURE_2D,vt,0,0,Ct,kt,Rt):e.texImage2D(r.TEXTURE_2D,vt,Dt,Ct,kt,Rt);C.generateMipmaps=!1}else if(j){if(yt){const vt=W(ht);e.texStorage2D(r.TEXTURE_2D,Lt,Dt,vt.width,vt.height)}Tt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,kt,ht)}else e.texImage2D(r.TEXTURE_2D,0,Dt,Ct,kt,ht);m(C)&&d(Y),Mt.__version=Q.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function ct(I,C,z){if(C.image.length!==6)return;const Y=xt(I,C),ot=C.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+z);const Q=n.get(ot);if(ot.version!==Q.__version||Y===!0){e.activeTexture(r.TEXTURE0+z);const Mt=ie.getPrimaries(ie.workingColorSpace),pt=C.colorSpace===Bn?null:ie.getPrimaries(C.colorSpace),At=C.colorSpace===Bn||Mt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Et=C.isCompressedTexture||C.image[0].isCompressedTexture,ht=C.image[0]&&C.image[0].isDataTexture,Ct=[];for(let mt=0;mt<6;mt++)!Et&&!ht?Ct[mt]=_(C.image[mt],!0,i.maxCubemapSize):Ct[mt]=ht?C.image[mt].image:C.image[mt],Ct[mt]=rt(C,Ct[mt]);const kt=Ct[0],Dt=s.convert(C.format,C.colorSpace),Rt=s.convert(C.type),Xt=x(C.internalFormat,Dt,Rt,C.colorSpace),j=C.isVideoTexture!==!0,yt=Q.__version===void 0||Y===!0,Tt=ot.dataReady;let Lt=E(C,kt);Z(r.TEXTURE_CUBE_MAP,C);let vt;if(Et){j&&yt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,Xt,kt.width,kt.height);for(let mt=0;mt<6;mt++){vt=Ct[mt].mipmaps;for(let Ft=0;Ft<vt.length;Ft++){const qt=vt[Ft];C.format!==fn?Dt!==null?j?Tt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,0,0,qt.width,qt.height,Dt,qt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,Xt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,0,0,qt.width,qt.height,Dt,Rt,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft,Xt,qt.width,qt.height,0,Dt,Rt,qt.data)}}}else{if(vt=C.mipmaps,j&&yt){vt.length>0&&Lt++;const mt=W(Ct[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,Xt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(ht){j?Tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ct[mt].width,Ct[mt].height,Dt,Rt,Ct[mt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Xt,Ct[mt].width,Ct[mt].height,0,Dt,Rt,Ct[mt].data);for(let Ft=0;Ft<vt.length;Ft++){const pe=vt[Ft].image[mt].image;j?Tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,0,0,pe.width,pe.height,Dt,Rt,pe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,Xt,pe.width,pe.height,0,Dt,Rt,pe.data)}}else{j?Tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Dt,Rt,Ct[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Xt,Dt,Rt,Ct[mt]);for(let Ft=0;Ft<vt.length;Ft++){const qt=vt[Ft];j?Tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,0,0,Dt,Rt,qt.image[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ft+1,Xt,Dt,Rt,qt.image[mt])}}}m(C)&&d(r.TEXTURE_CUBE_MAP),Q.__version=ot.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function dt(I,C,z,Y,ot,Q){const Mt=s.convert(z.format,z.colorSpace),pt=s.convert(z.type),At=x(z.internalFormat,Mt,pt,z.colorSpace),Et=n.get(C),ht=n.get(z);if(ht.__renderTarget=C,!Et.__hasExternalTextures){const Ct=Math.max(1,C.width>>Q),kt=Math.max(1,C.height>>Q);ot===r.TEXTURE_3D||ot===r.TEXTURE_2D_ARRAY?e.texImage3D(ot,Q,At,Ct,kt,C.depth,0,Mt,pt,null):e.texImage2D(ot,Q,At,Ct,kt,0,Mt,pt,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),B(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,ot,ht.__webglTexture,0,N(C)):(ot===r.TEXTURE_2D||ot>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,ot,ht.__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(I,C,z){if(r.bindRenderbuffer(r.RENDERBUFFER,I),C.depthBuffer){const Y=C.depthTexture,ot=Y&&Y.isDepthTexture?Y.type:null,Q=v(C.stencilBuffer,ot),Mt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=N(C);B(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt,Q,C.width,C.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,Q,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Q,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,I)}else{const Y=C.textures;for(let ot=0;ot<Y.length;ot++){const Q=Y[ot],Mt=s.convert(Q.format,Q.colorSpace),pt=s.convert(Q.type),At=x(Q.internalFormat,Mt,pt,Q.colorSpace),Et=N(C);z&&B(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,At,C.width,C.height):B(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et,At,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,At,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(C.depthTexture);Y.__renderTarget=C,(!Y.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),F(C.depthTexture,0);const ot=Y.__webglTexture,Q=N(C);if(C.depthTexture.format===Ir)B(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0);else if(C.depthTexture.format===Lr)B(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Ut(I){const C=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const Y=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Y){const ot=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Y.removeEventListener("dispose",ot)};Y.addEventListener("dispose",ot),C.__depthDisposeCallback=ot}C.__boundDepthTexture=Y}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Y=I.texture.mipmaps;Y&&Y.length>0?St(C.__webglFramebuffer[0],I):St(C.__webglFramebuffer,I)}else if(z){C.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[Y]),C.__webglDepthbuffer[Y]===void 0)C.__webglDepthbuffer[Y]=r.createRenderbuffer(),_t(C.__webglDepthbuffer[Y],I,!1);else{const ot=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=C.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,Q)}}else{const Y=I.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),_t(C.__webglDepthbuffer,I,!1);else{const ot=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,Q)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(I,C,z){const Y=n.get(I);C!==void 0&&dt(Y.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ut(I)}function H(I){const C=I.texture,z=n.get(I),Y=n.get(C);I.addEventListener("dispose",T);const ot=I.textures,Q=I.isWebGLCubeRenderTarget===!0,Mt=ot.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=C.version,o.memory.textures++),Q){z.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(C.mipmaps&&C.mipmaps.length>0){z.__webglFramebuffer[pt]=[];for(let At=0;At<C.mipmaps.length;At++)z.__webglFramebuffer[pt][At]=r.createFramebuffer()}else z.__webglFramebuffer[pt]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){z.__webglFramebuffer=[];for(let pt=0;pt<C.mipmaps.length;pt++)z.__webglFramebuffer[pt]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let pt=0,At=ot.length;pt<At;pt++){const Et=n.get(ot[pt]);Et.__webglTexture===void 0&&(Et.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&B(I)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pt=0;pt<ot.length;pt++){const At=ot[pt];z.__webglColorRenderbuffer[pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[pt]);const Et=s.convert(At.format,At.colorSpace),ht=s.convert(At.type),Ct=x(At.internalFormat,Et,ht,At.colorSpace,I.isXRRenderTarget===!0),kt=N(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,Ct,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,z.__webglColorRenderbuffer[pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),_t(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Z(r.TEXTURE_CUBE_MAP,C);for(let pt=0;pt<6;pt++)if(C.mipmaps&&C.mipmaps.length>0)for(let At=0;At<C.mipmaps.length;At++)dt(z.__webglFramebuffer[pt][At],I,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At);else dt(z.__webglFramebuffer[pt],I,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(C)&&d(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let pt=0,At=ot.length;pt<At;pt++){const Et=ot[pt],ht=n.get(Et);let Ct=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ct=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Ct,ht.__webglTexture),Z(Ct,Et),dt(z.__webglFramebuffer,I,Et,r.COLOR_ATTACHMENT0+pt,Ct,0),m(Et)&&d(Ct)}e.unbindTexture()}else{let pt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,Y.__webglTexture),Z(pt,C),C.mipmaps&&C.mipmaps.length>0)for(let At=0;At<C.mipmaps.length;At++)dt(z.__webglFramebuffer[At],I,C,r.COLOR_ATTACHMENT0,pt,At);else dt(z.__webglFramebuffer,I,C,r.COLOR_ATTACHMENT0,pt,0);m(C)&&d(pt),e.unbindTexture()}I.depthBuffer&&Ut(I)}function M(I){const C=I.textures;for(let z=0,Y=C.length;z<Y;z++){const ot=C[z];if(m(ot)){const Q=y(I),Mt=n.get(ot).__webglTexture;e.bindTexture(Q,Mt),d(Q),e.unbindTexture()}}}const G=[],k=[];function L(I){if(I.samples>0){if(B(I)===!1){const C=I.textures,z=I.width,Y=I.height;let ot=r.COLOR_BUFFER_BIT;const Q=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(I),pt=C.length>1;if(pt)for(let Et=0;Et<C.length;Et++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const At=I.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Et=0;Et<C.length;Et++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ot|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ot|=r.STENCIL_BUFFER_BIT)),pt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);const ht=n.get(C[Et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ht,0)}r.blitFramebuffer(0,0,z,Y,0,0,z,Y,ot,r.NEAREST),l===!0&&(G.length=0,k.length=0,G.push(r.COLOR_ATTACHMENT0+Et),I.depthBuffer&&I.resolveDepthBuffer===!1&&(G.push(Q),k.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,G))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pt)for(let Et=0;Et<C.length;Et++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[Et]);const ht=n.get(C[Et]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const C=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function N(I){return Math.min(i.maxSamples,I.samples)}function B(I){const C=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function K(I){const C=o.render.frame;h.get(I)!==C&&(h.set(I,C),I.update())}function rt(I,C){const z=I.colorSpace,Y=I.format,ot=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==er&&z!==Bn&&(ie.getTransfer(z)===ue?(Y!==fn||ot!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),C}function W(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=R,this.setTexture2D=F,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=J,this.rebindTextures=jt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=M,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=B}function $v(r,t){function e(n,i=Bn){let s;const o=ie.getTransfer(i);if(n===Vn)return r.UNSIGNED_BYTE;if(n===xl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return r.BYTE;if(n===ah)return r.SHORT;if(n===Rr)return r.UNSIGNED_SHORT;if(n===vl)return r.INT;if(n===bi)return r.UNSIGNED_INT;if(n===zn)return r.FLOAT;if(n===Wr)return r.HALF_FLOAT;if(n===uh)return r.ALPHA;if(n===hh)return r.RGB;if(n===fn)return r.RGBA;if(n===Ir)return r.DEPTH_COMPONENT;if(n===Lr)return r.DEPTH_STENCIL;if(n===fh)return r.RED;if(n===bl)return r.RED_INTEGER;if(n===dh)return r.RG;if(n===Ml)return r.RG_INTEGER;if(n===Sl)return r.RGBA_INTEGER;if(n===Rs||n===Ps||n===Is||n===Ls)if(o===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Ua||n===Oa||n===Fa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===za||n===ka)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ba||n===za)return o===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ka)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===ja||n===Za||n===Ka||n===Ja||n===Qa||n===tl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ha)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===nl||n===il)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===el)return o===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===sl||n===ol||n===al)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===rl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ch(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ri({vertexShader:jv,fragmentShader:Zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new Qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jv extends Ei{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,u=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Kv,d={},y=e.getContextAttributes();let x=null,v=null;const E=[],A=[],T=new wt;let P=null;const S=new cn;S.viewport=new Se;const w=new cn;w.viewport=new Se;const D=[S,w],R=new lm;let U=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ct=E[st];return ct===void 0&&(ct=new Do,E[st]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(st){let ct=E[st];return ct===void 0&&(ct=new Do,E[st]=ct),ct.getGripSpace()},this.getHand=function(st){let ct=E[st];return ct===void 0&&(ct=new Do,E[st]=ct),ct.getHandSpace()};function F(st){const ct=A.indexOf(st.inputSource);if(ct===-1)return;const dt=E[ct];dt!==void 0&&(dt.update(st.inputSource,st.frame,c||o),dt.dispatchEvent({type:st.type,data:st.inputSource}))}function $(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",V);for(let st=0;st<E.length;st++){const ct=A[st];ct!==null&&(A[st]=null,E[st].disconnect(ct))}U=null,b=null,m.reset();for(const st in d)delete d[st];t.setRenderTarget(x),u=null,p=null,f=null,i=null,v=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){s=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(st){if(i=st,i!==null){if(x=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",$),i.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,_t=null,St=null;y.depth&&(St=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=y.stencil?Lr:Ir,_t=y.stencil?Pr:bi);const Ut={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};f=this.getBinding(),p=f.createProjectionLayer(Ut),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new Mi(p.textureWidth,p.textureHeight,{format:fn,type:Vn,depthTexture:new Ah(p.textureWidth,p.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const dt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Mi(u.framebufferWidth,u.framebufferHeight,{format:fn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ft.setContext(i),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(st){for(let ct=0;ct<st.removed.length;ct++){const dt=st.removed[ct],_t=A.indexOf(dt);_t>=0&&(A[_t]=null,E[_t].disconnect(dt))}for(let ct=0;ct<st.added.length;ct++){const dt=st.added[ct];let _t=A.indexOf(dt);if(_t===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=A.length){A.push(dt),_t=Ut;break}else if(A[Ut]===null){A[Ut]=dt,_t=Ut;break}if(_t===-1)break}const St=E[_t];St&&St.connect(dt)}}const J=new q,tt=new q;function ut(st,ct,dt){J.setFromMatrixPosition(ct.matrixWorld),tt.setFromMatrixPosition(dt.matrixWorld);const _t=J.distanceTo(tt),St=ct.projectionMatrix.elements,Ut=dt.projectionMatrix.elements,jt=St[14]/(St[10]-1),H=St[14]/(St[10]+1),M=(St[9]+1)/St[5],G=(St[9]-1)/St[5],k=(St[8]-1)/St[0],L=(Ut[8]+1)/Ut[0],N=jt*k,B=jt*L,K=_t/(-k+L),rt=K*-k;if(ct.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(rt),st.translateZ(K),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),St[10]===-1)st.projectionMatrix.copy(ct.projectionMatrix),st.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const W=jt+K,I=H+K,C=N-rt,z=B+(_t-rt),Y=M*H/I*W,ot=G*H/I*W;st.projectionMatrix.makePerspective(C,z,Y,ot,W,I),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function X(st,ct){ct===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ct.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(i===null)return;let ct=st.near,dt=st.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),R.near=w.near=S.near=ct,R.far=w.far=S.far=dt,(U!==R.near||b!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,b=R.far),R.layers.mask=st.layers.mask|6,S.layers.mask=R.layers.mask&3,w.layers.mask=R.layers.mask&5;const _t=st.parent,St=R.cameras;X(R,_t);for(let Ut=0;Ut<St.length;Ut++)X(St[Ut],_t);St.length===2?ut(R,S,w):R.projectionMatrix.copy(S.projectionMatrix),Z(st,R,_t)};function Z(st,ct,dt){dt===null?st.matrix.copy(ct.matrixWorld):(st.matrix.copy(dt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ct.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ct.projectionMatrix),st.projectionMatrixInverse.copy(ct.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Dr*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&u===null))return l},this.setFoveation=function(st){l=st,p!==null&&(p.fixedFoveation=st),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=st)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(st){return d[st]};let xt=null;function gt(st,ct){if(h=ct.getViewerPose(c||o),g=ct,h!==null){const dt=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let _t=!1;dt.length!==R.cameras.length&&(R.cameras.length=0,_t=!0);for(let H=0;H<dt.length;H++){const M=dt[H];let G=null;if(u!==null)G=u.getViewport(M);else{const L=f.getViewSubImage(p,M);G=L.viewport,H===0&&(t.setRenderTargetTextures(v,L.colorTexture,L.depthStencilTexture),t.setRenderTarget(v))}let k=D[H];k===void 0&&(k=new cn,k.layers.enable(H),k.viewport=new Se,D[H]=k),k.matrix.fromArray(M.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(M.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(G.x,G.y,G.width,G.height),H===0&&(R.matrix.copy(k.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_t===!0&&R.cameras.push(k)}const St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const H=f.getDepthInformation(dt[0]);H&&H.isValid&&H.texture&&m.init(H,i.renderState)}if(St&&St.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let H=0;H<dt.length;H++){const M=dt[H].camera;if(M){let G=d[M];G||(G=new Ch,d[M]=G);const k=f.getCameraImage(M);G.sourceTexture=k}}}}for(let dt=0;dt<E.length;dt++){const _t=A[dt],St=E[dt];_t!==null&&St!==void 0&&St.update(_t,ct,c||o)}xt&&xt(st,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const ft=new Fh;ft.setAnimationLoop(gt),this.setAnimationLoop=function(st){xt=st},this.dispose=function(){}}}const fi=new An,Qv=new ge;function tx(r,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Sh(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,y,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&u(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ye&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ye&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,fi.copy(v),fi.x*=-1,fi.y*=-1,fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(fi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function u(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ye&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ex(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(y,E);const A=t.render.frame;s[y.id]!==A&&(p(y),s[y.id]=A)}function h(y){const x=f();y.__bindingPointIndex=x;const v=r.createBuffer(),E=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const x=i[y.id],v=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,T=v.length;A<T;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,w=P.length;S<w;S++){const D=P[S];if(u(D,A,S,E)===!0){const R=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let b=0;for(let F=0;F<U.length;F++){const $=U[F],V=_($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,R+b,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,b),b+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,x,v,E){const A=y.value,T=x+"_"+v;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{const P=E[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return E[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(y){const x=y.uniforms;let v=0;const E=16;for(let T=0,P=x.length;T<P;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,D=S.length;w<D;w++){const R=S[w],U=Array.isArray(R.value)?R.value:[R.value];for(let b=0,F=U.length;b<F;b++){const $=U[b],V=_($),J=v%E,tt=J%V.boundary,ut=J+tt;v+=tt,ut!==0&&E-ut<V.storage&&(v+=E-ut),R.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=v,v+=V.storage}}}const A=v%E;return A>0&&(v+=E-A),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}class nx{constructor(t={}){const{canvas:e=Yd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Oe;let A=0,T=0,P=null,S=-1,w=null;const D=new Se,R=new Se;let U=null;const b=new Qt(0);let F=0,$=e.width,V=e.height,J=1,tt=null,ut=null;const X=new Se(0,0,$,V),Z=new Se(0,0,$,V);let xt=!1;const gt=new Th;let ft=!1,st=!1;const ct=new ge,dt=new q,_t=new Se,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function jt(){return P===null?J:1}let H=n;function M(O,et){return e.getContext(O,et)}try{const O={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$s}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),H===null){const et="webgl2";if(H=M(et,O),H===null)throw M(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let G,k,L,N,B,K,rt,W,I,C,z,Y,ot,Q,Mt,pt,At,Et,ht,Ct,kt,Dt,Rt,Xt;function j(){G=new f0(H),G.init(),Dt=new $v(H,G),k=new s0(H,G,t,Dt),L=new qv(H,G),k.reversedDepthBuffer&&p&&L.buffers.depth.setReversed(!0),N=new m0(H),B=new Dv,K=new Yv(H,G,L,B,k,Dt,N),rt=new a0(v),W=new h0(v),I=new bm(H),Rt=new i0(H,I),C=new d0(H,I,N,Rt),z=new _0(H,C,I,N),ht=new g0(H,k,K),pt=new o0(B),Y=new Lv(v,rt,W,G,k,Rt,pt),ot=new tx(v,B),Q=new Uv,Mt=new Hv(G),Et=new n0(v,rt,W,L,z,u,l),At=new Wv(v,z,k),Xt=new ex(H,N,k,L),Ct=new r0(H,G,N),kt=new p0(H,G,N),N.programs=Y.programs,v.capabilities=k,v.extensions=G,v.properties=B,v.renderLists=Q,v.shadowMap=At,v.state=L,v.info=N}j();const yt=new Jv(v,H);this.xr=yt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const O=G.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=G.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(O){O!==void 0&&(J=O,this.setSize($,V,!1))},this.getSize=function(O){return O.set($,V)},this.setSize=function(O,et,at=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=O,V=et,e.width=Math.floor(O*J),e.height=Math.floor(et*J),at===!0&&(e.style.width=O+"px",e.style.height=et+"px"),this.setViewport(0,0,O,et)},this.getDrawingBufferSize=function(O){return O.set($*J,V*J).floor()},this.setDrawingBufferSize=function(O,et,at){$=O,V=et,J=at,e.width=Math.floor(O*at),e.height=Math.floor(et*at),this.setViewport(0,0,O,et)},this.getCurrentViewport=function(O){return O.copy(D)},this.getViewport=function(O){return O.copy(X)},this.setViewport=function(O,et,at,lt){O.isVector4?X.set(O.x,O.y,O.z,O.w):X.set(O,et,at,lt),L.viewport(D.copy(X).multiplyScalar(J).round())},this.getScissor=function(O){return O.copy(Z)},this.setScissor=function(O,et,at,lt){O.isVector4?Z.set(O.x,O.y,O.z,O.w):Z.set(O,et,at,lt),L.scissor(R.copy(Z).multiplyScalar(J).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(O){L.setScissorTest(xt=O)},this.setOpaqueSort=function(O){tt=O},this.setTransparentSort=function(O){ut=O},this.getClearColor=function(O){return O.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(O=!0,et=!0,at=!0){let lt=0;if(O){let it=!1;if(P!==null){const bt=P.texture.format;it=bt===Sl||bt===Ml||bt===bl}if(it){const bt=P.texture.type,It=bt===Vn||bt===bi||bt===Rr||bt===Pr||bt===xl||bt===yl,Ot=Et.getClearColor(),Nt=Et.getClearAlpha(),Vt=Ot.r,Gt=Ot.g,zt=Ot.b;It?(g[0]=Vt,g[1]=Gt,g[2]=zt,g[3]=Nt,H.clearBufferuiv(H.COLOR,0,g)):(_[0]=Vt,_[1]=Gt,_[2]=zt,_[3]=Nt,H.clearBufferiv(H.COLOR,0,_))}else lt|=H.COLOR_BUFFER_BIT}et&&(lt|=H.DEPTH_BUFFER_BIT),at&&(lt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Et.dispose(),Q.dispose(),Mt.dispose(),B.dispose(),rt.dispose(),W.dispose(),z.dispose(),Rt.dispose(),Xt.dispose(),Y.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",xn),yt.removeEventListener("sessionend",Ol),si.stop()};function Tt(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const O=N.autoReset,et=At.enabled,at=At.autoUpdate,lt=At.needsUpdate,it=At.type;j(),N.autoReset=O,At.enabled=et,At.autoUpdate=at,At.needsUpdate=lt,At.type=it}function vt(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function mt(O){const et=O.target;et.removeEventListener("dispose",mt),Ft(et)}function Ft(O){qt(O),B.remove(O)}function qt(O){const et=B.get(O).programs;et!==void 0&&(et.forEach(function(at){Y.releaseProgram(at)}),O.isShaderMaterial&&Y.releaseShaderCache(O))}this.renderBufferDirect=function(O,et,at,lt,it,bt){et===null&&(et=St);const It=it.isMesh&&it.matrixWorld.determinant()<0,Ot=Kh(O,et,at,lt,it);L.setMaterial(lt,It);let Nt=at.index,Vt=1;if(lt.wireframe===!0){if(Nt=C.getWireframeAttribute(at),Nt===void 0)return;Vt=2}const Gt=at.drawRange,zt=at.attributes.position;let te=Gt.start*Vt,ce=(Gt.start+Gt.count)*Vt;bt!==null&&(te=Math.max(te,bt.start*Vt),ce=Math.min(ce,(bt.start+bt.count)*Vt)),Nt!==null?(te=Math.max(te,0),ce=Math.min(ce,Nt.count)):zt!=null&&(te=Math.max(te,0),ce=Math.min(ce,zt.count));const be=ce-te;if(be<0||be===1/0)return;Rt.setup(it,lt,Ot,at,Nt);let me,de=Ct;if(Nt!==null&&(me=I.get(Nt),de=kt,de.setIndex(me)),it.isMesh)lt.wireframe===!0?(L.setLineWidth(lt.wireframeLinewidth*jt()),de.setMode(H.LINES)):de.setMode(H.TRIANGLES);else if(it.isLine){let Ht=lt.linewidth;Ht===void 0&&(Ht=1),L.setLineWidth(Ht*jt()),it.isLineSegments?de.setMode(H.LINES):it.isLineLoop?de.setMode(H.LINE_LOOP):de.setMode(H.LINE_STRIP)}else it.isPoints?de.setMode(H.POINTS):it.isSprite&&de.setMode(H.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)Nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))de.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Ht=it._multiDrawStarts,_e=it._multiDrawCounts,re=it._multiDrawCount,je=Nt?I.get(Nt).bytesPerElement:1,Ci=B.get(lt).currentProgram.getUniforms();for(let Ze=0;Ze<re;Ze++)Ci.setValue(H,"_gl_DrawID",Ze),de.render(Ht[Ze]/je,_e[Ze])}else if(it.isInstancedMesh)de.renderInstances(te,be,it.count);else if(at.isInstancedBufferGeometry){const Ht=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,_e=Math.min(at.instanceCount,Ht);de.renderInstances(te,be,_e)}else de.render(te,be)};function pe(O,et,at){O.transparent===!0&&O.side===En&&O.forceSinglePass===!1?(O.side=Ye,O.needsUpdate=!0,Yr(O,et,at),O.side=ni,O.needsUpdate=!0,Yr(O,et,at),O.side=En):Yr(O,et,at)}this.compile=function(O,et,at=null){at===null&&(at=O),d=Mt.get(at),d.init(et),x.push(d),at.traverseVisible(function(it){it.isLight&&it.layers.test(et.layers)&&(d.pushLight(it),it.castShadow&&d.pushShadow(it))}),O!==at&&O.traverseVisible(function(it){it.isLight&&it.layers.test(et.layers)&&(d.pushLight(it),it.castShadow&&d.pushShadow(it))}),d.setupLights();const lt=new Set;return O.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const bt=it.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){const Ot=bt[It];pe(Ot,at,it),lt.add(Ot)}else pe(bt,at,it),lt.add(bt)}),d=x.pop(),lt},this.compileAsync=function(O,et,at=null){const lt=this.compile(O,et,at);return new Promise(it=>{function bt(){if(lt.forEach(function(It){B.get(It).currentProgram.isReady()&&lt.delete(It)}),lt.size===0){it(O);return}setTimeout(bt,10)}G.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ae=null;function Rn(O){ae&&ae(O)}function xn(){si.stop()}function Ol(){si.start()}const si=new Fh;si.setAnimationLoop(Rn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(O){ae=O,yt.setAnimationLoop(O),O===null?si.stop():si.start()},yt.addEventListener("sessionstart",xn),yt.addEventListener("sessionend",Ol),this.render=function(O,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(et),et=yt.getCamera()),O.isScene===!0&&O.onBeforeRender(v,O,et,P),d=Mt.get(O,x.length),d.init(et),x.push(d),ct.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),gt.setFromProjectionMatrix(ct,wn,et.reversedDepth),st=this.localClippingEnabled,ft=pt.init(this.clippingPlanes,st),m=Q.get(O,y.length),m.init(),y.push(m),yt.enabled===!0&&yt.isPresenting===!0){const bt=v.xr.getDepthSensingMesh();bt!==null&&no(bt,et,-1/0,v.sortObjects)}no(O,et,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(tt,ut),Ut=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Ut&&Et.addToRenderList(m,O),this.info.render.frame++,ft===!0&&pt.beginShadows();const at=d.state.shadowsArray;At.render(at,O,et),ft===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=m.opaque,it=m.transmissive;if(d.setupLights(),et.isArrayCamera){const bt=et.cameras;if(it.length>0)for(let It=0,Ot=bt.length;It<Ot;It++){const Nt=bt[It];Bl(lt,it,O,Nt)}Ut&&Et.render(O);for(let It=0,Ot=bt.length;It<Ot;It++){const Nt=bt[It];Fl(m,O,Nt,Nt.viewport)}}else it.length>0&&Bl(lt,it,O,et),Ut&&Et.render(O),Fl(m,O,et);P!==null&&T===0&&(K.updateMultisampleRenderTarget(P),K.updateRenderTargetMipmap(P)),O.isScene===!0&&O.onAfterRender(v,O,et),Rt.resetDefaultState(),S=-1,w=null,x.pop(),x.length>0?(d=x[x.length-1],ft===!0&&pt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function no(O,et,at,lt){if(O.visible===!1)return;if(O.layers.test(et.layers)){if(O.isGroup)at=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(et);else if(O.isLight)d.pushLight(O),O.castShadow&&d.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||gt.intersectsSprite(O)){lt&&_t.setFromMatrixPosition(O.matrixWorld).applyMatrix4(ct);const It=z.update(O),Ot=O.material;Ot.visible&&m.push(O,It,Ot,at,_t.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||gt.intersectsObject(O))){const It=z.update(O),Ot=O.material;if(lt&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),_t.copy(O.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),_t.copy(It.boundingSphere.center)),_t.applyMatrix4(O.matrixWorld).applyMatrix4(ct)),Array.isArray(Ot)){const Nt=It.groups;for(let Vt=0,Gt=Nt.length;Vt<Gt;Vt++){const zt=Nt[Vt],te=Ot[zt.materialIndex];te&&te.visible&&m.push(O,It,te,at,_t.z,zt)}}else Ot.visible&&m.push(O,It,Ot,at,_t.z,null)}}const bt=O.children;for(let It=0,Ot=bt.length;It<Ot;It++)no(bt[It],et,at,lt)}function Fl(O,et,at,lt){const it=O.opaque,bt=O.transmissive,It=O.transparent;d.setupLightsView(at),ft===!0&&pt.setGlobalState(v.clippingPlanes,at),lt&&L.viewport(D.copy(lt)),it.length>0&&qr(it,et,at),bt.length>0&&qr(bt,et,at),It.length>0&&qr(It,et,at),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Bl(O,et,at,lt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[lt.id]===void 0&&(d.state.transmissionRenderTarget[lt.id]=new Mi(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?Wr:Vn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const bt=d.state.transmissionRenderTarget[lt.id],It=lt.viewport||D;bt.setSize(It.z*v.transmissionResolutionScale,It.w*v.transmissionResolutionScale);const Ot=v.getRenderTarget(),Nt=v.getActiveCubeFace(),Vt=v.getActiveMipmapLevel();v.setRenderTarget(bt),v.getClearColor(b),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),Ut&&Et.render(at);const Gt=v.toneMapping;v.toneMapping=ei;const zt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),d.setupLightsView(lt),ft===!0&&pt.setGlobalState(v.clippingPlanes,lt),qr(O,at,lt),K.updateMultisampleRenderTarget(bt),K.updateRenderTargetMipmap(bt),G.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ce=0,be=et.length;ce<be;ce++){const me=et[ce],de=me.object,Ht=me.geometry,_e=me.material,re=me.group;if(_e.side===En&&de.layers.test(lt.layers)){const je=_e.side;_e.side=Ye,_e.needsUpdate=!0,zl(de,at,lt,Ht,_e,re),_e.side=je,_e.needsUpdate=!0,te=!0}}te===!0&&(K.updateMultisampleRenderTarget(bt),K.updateRenderTargetMipmap(bt))}v.setRenderTarget(Ot,Nt,Vt),v.setClearColor(b,F),zt!==void 0&&(lt.viewport=zt),v.toneMapping=Gt}function qr(O,et,at){const lt=et.isScene===!0?et.overrideMaterial:null;for(let it=0,bt=O.length;it<bt;it++){const It=O[it],Ot=It.object,Nt=It.geometry,Vt=It.group;let Gt=It.material;Gt.allowOverride===!0&&lt!==null&&(Gt=lt),Ot.layers.test(at.layers)&&zl(Ot,et,at,Nt,Gt,Vt)}}function zl(O,et,at,lt,it,bt){O.onBeforeRender(v,et,at,lt,it,bt),O.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),it.onBeforeRender(v,et,at,lt,O,bt),it.transparent===!0&&it.side===En&&it.forceSinglePass===!1?(it.side=Ye,it.needsUpdate=!0,v.renderBufferDirect(at,et,lt,it,O,bt),it.side=ni,it.needsUpdate=!0,v.renderBufferDirect(at,et,lt,it,O,bt),it.side=En):v.renderBufferDirect(at,et,lt,it,O,bt),O.onAfterRender(v,et,at,lt,it,bt)}function Yr(O,et,at){et.isScene!==!0&&(et=St);const lt=B.get(O),it=d.state.lights,bt=d.state.shadowsArray,It=it.state.version,Ot=Y.getParameters(O,it.state,bt,et,at),Nt=Y.getProgramCacheKey(Ot);let Vt=lt.programs;lt.environment=O.isMeshStandardMaterial?et.environment:null,lt.fog=et.fog,lt.envMap=(O.isMeshStandardMaterial?W:rt).get(O.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&O.envMap===null?et.environmentRotation:O.envMapRotation,Vt===void 0&&(O.addEventListener("dispose",mt),Vt=new Map,lt.programs=Vt);let Gt=Vt.get(Nt);if(Gt!==void 0){if(lt.currentProgram===Gt&&lt.lightsStateVersion===It)return Hl(O,Ot),Gt}else Ot.uniforms=Y.getUniforms(O),O.onBeforeCompile(Ot,v),Gt=Y.acquireProgram(Ot,Nt),Vt.set(Nt,Gt),lt.uniforms=Ot.uniforms;const zt=lt.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(zt.clippingPlanes=pt.uniform),Hl(O,Ot),lt.needsLights=Qh(O),lt.lightsStateVersion=It,lt.needsLights&&(zt.ambientLightColor.value=it.state.ambient,zt.lightProbe.value=it.state.probe,zt.directionalLights.value=it.state.directional,zt.directionalLightShadows.value=it.state.directionalShadow,zt.spotLights.value=it.state.spot,zt.spotLightShadows.value=it.state.spotShadow,zt.rectAreaLights.value=it.state.rectArea,zt.ltc_1.value=it.state.rectAreaLTC1,zt.ltc_2.value=it.state.rectAreaLTC2,zt.pointLights.value=it.state.point,zt.pointLightShadows.value=it.state.pointShadow,zt.hemisphereLights.value=it.state.hemi,zt.directionalShadowMap.value=it.state.directionalShadowMap,zt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,zt.spotShadowMap.value=it.state.spotShadowMap,zt.spotLightMatrix.value=it.state.spotLightMatrix,zt.spotLightMap.value=it.state.spotLightMap,zt.pointShadowMap.value=it.state.pointShadowMap,zt.pointShadowMatrix.value=it.state.pointShadowMatrix),lt.currentProgram=Gt,lt.uniformsList=null,Gt}function kl(O){if(O.uniformsList===null){const et=O.currentProgram.getUniforms();O.uniformsList=Ns.seqWithValue(et.seq,O.uniforms)}return O.uniformsList}function Hl(O,et){const at=B.get(O);at.outputColorSpace=et.outputColorSpace,at.batching=et.batching,at.batchingColor=et.batchingColor,at.instancing=et.instancing,at.instancingColor=et.instancingColor,at.instancingMorph=et.instancingMorph,at.skinning=et.skinning,at.morphTargets=et.morphTargets,at.morphNormals=et.morphNormals,at.morphColors=et.morphColors,at.morphTargetsCount=et.morphTargetsCount,at.numClippingPlanes=et.numClippingPlanes,at.numIntersection=et.numClipIntersection,at.vertexAlphas=et.vertexAlphas,at.vertexTangents=et.vertexTangents,at.toneMapping=et.toneMapping}function Kh(O,et,at,lt,it){et.isScene!==!0&&(et=St),K.resetTextureUnits();const bt=et.fog,It=lt.isMeshStandardMaterial?et.environment:null,Ot=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:er,Nt=(lt.isMeshStandardMaterial?W:rt).get(lt.envMap||It),Vt=lt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Gt=!!at.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),zt=!!at.morphAttributes.position,te=!!at.morphAttributes.normal,ce=!!at.morphAttributes.color;let be=ei;lt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(be=v.toneMapping);const me=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,de=me!==void 0?me.length:0,Ht=B.get(lt),_e=d.state.lights;if(ft===!0&&(st===!0||O!==w)){const Be=O===w&&lt.id===S;pt.setState(lt,O,Be)}let re=!1;lt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==_e.state.version||Ht.outputColorSpace!==Ot||it.isBatchedMesh&&Ht.batching===!1||!it.isBatchedMesh&&Ht.batching===!0||it.isBatchedMesh&&Ht.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Ht.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Ht.instancing===!1||!it.isInstancedMesh&&Ht.instancing===!0||it.isSkinnedMesh&&Ht.skinning===!1||!it.isSkinnedMesh&&Ht.skinning===!0||it.isInstancedMesh&&Ht.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Ht.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Ht.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Ht.instancingMorph===!1&&it.morphTexture!==null||Ht.envMap!==Nt||lt.fog===!0&&Ht.fog!==bt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==pt.numPlanes||Ht.numIntersection!==pt.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Gt||Ht.morphTargets!==zt||Ht.morphNormals!==te||Ht.morphColors!==ce||Ht.toneMapping!==be||Ht.morphTargetsCount!==de)&&(re=!0):(re=!0,Ht.__version=lt.version);let je=Ht.currentProgram;re===!0&&(je=Yr(lt,et,it));let Ci=!1,Ze=!1,ar=!1;const ve=je.getUniforms(),on=Ht.uniforms;if(L.useProgram(je.program)&&(Ci=!0,Ze=!0,ar=!0),lt.id!==S&&(S=lt.id,Ze=!0),Ci||w!==O){L.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),ve.setValue(H,"projectionMatrix",O.projectionMatrix),ve.setValue(H,"viewMatrix",O.matrixWorldInverse);const Ge=ve.map.cameraPosition;Ge!==void 0&&Ge.setValue(H,dt.setFromMatrixPosition(O.matrixWorld)),k.logarithmicDepthBuffer&&ve.setValue(H,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&ve.setValue(H,"isOrthographic",O.isOrthographicCamera===!0),w!==O&&(w=O,Ze=!0,ar=!0)}if(it.isSkinnedMesh){ve.setOptional(H,it,"bindMatrix"),ve.setOptional(H,it,"bindMatrixInverse");const Be=it.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ve.setValue(H,"boneTexture",Be.boneTexture,K))}it.isBatchedMesh&&(ve.setOptional(H,it,"batchingTexture"),ve.setValue(H,"batchingTexture",it._matricesTexture,K),ve.setOptional(H,it,"batchingIdTexture"),ve.setValue(H,"batchingIdTexture",it._indirectTexture,K),ve.setOptional(H,it,"batchingColorTexture"),it._colorsTexture!==null&&ve.setValue(H,"batchingColorTexture",it._colorsTexture,K));const an=at.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&ht.update(it,at,je),(Ze||Ht.receiveShadow!==it.receiveShadow)&&(Ht.receiveShadow=it.receiveShadow,ve.setValue(H,"receiveShadow",it.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(on.envMap.value=Nt,on.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&et.environment!==null&&(on.envMapIntensity.value=et.environmentIntensity),Ze&&(ve.setValue(H,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&Jh(on,ar),bt&&lt.fog===!0&&ot.refreshFogUniforms(on,bt),ot.refreshMaterialUniforms(on,lt,J,V,d.state.transmissionRenderTarget[O.id]),Ns.upload(H,kl(Ht),on,K)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Ns.upload(H,kl(Ht),on,K),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&ve.setValue(H,"center",it.center),ve.setValue(H,"modelViewMatrix",it.modelViewMatrix),ve.setValue(H,"normalMatrix",it.normalMatrix),ve.setValue(H,"modelMatrix",it.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Be=lt.uniformsGroups;for(let Ge=0,io=Be.length;Ge<io;Ge++){const oi=Be[Ge];Xt.update(oi,je),Xt.bind(oi,je)}}return je}function Jh(O,et){O.ambientLightColor.needsUpdate=et,O.lightProbe.needsUpdate=et,O.directionalLights.needsUpdate=et,O.directionalLightShadows.needsUpdate=et,O.pointLights.needsUpdate=et,O.pointLightShadows.needsUpdate=et,O.spotLights.needsUpdate=et,O.spotLightShadows.needsUpdate=et,O.rectAreaLights.needsUpdate=et,O.hemisphereLights.needsUpdate=et}function Qh(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(O,et,at){const lt=B.get(O);lt.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),B.get(O.texture).__webglTexture=et,B.get(O.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:at,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,et){const at=B.get(O);at.__webglFramebuffer=et,at.__useDefaultFramebuffer=et===void 0};const tf=H.createFramebuffer();this.setRenderTarget=function(O,et=0,at=0){P=O,A=et,T=at;let lt=!0,it=null,bt=!1,It=!1;if(O){const Nt=B.get(O);if(Nt.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(H.FRAMEBUFFER,null),lt=!1;else if(Nt.__webglFramebuffer===void 0)K.setupRenderTarget(O);else if(Nt.__hasExternalTextures)K.rebindTextures(O,B.get(O.texture).__webglTexture,B.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const zt=O.depthTexture;if(Nt.__boundDepthTexture!==zt){if(zt!==null&&B.has(zt)&&(O.width!==zt.image.width||O.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(O)}}const Vt=O.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(It=!0);const Gt=B.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Gt[et])?it=Gt[et][at]:it=Gt[et],bt=!0):O.samples>0&&K.useMultisampledRTT(O)===!1?it=B.get(O).__webglMultisampledFramebuffer:Array.isArray(Gt)?it=Gt[at]:it=Gt,D.copy(O.viewport),R.copy(O.scissor),U=O.scissorTest}else D.copy(X).multiplyScalar(J).floor(),R.copy(Z).multiplyScalar(J).floor(),U=xt;if(at!==0&&(it=tf),L.bindFramebuffer(H.FRAMEBUFFER,it)&&lt&&L.drawBuffers(O,it),L.viewport(D),L.scissor(R),L.setScissorTest(U),bt){const Nt=B.get(O.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt.__webglTexture,at)}else if(It){const Nt=et;for(let Vt=0;Vt<O.textures.length;Vt++){const Gt=B.get(O.textures[Vt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Vt,Gt.__webglTexture,at,Nt)}}else if(O!==null&&at!==0){const Nt=B.get(O.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,at)}S=-1},this.readRenderTargetPixels=function(O,et,at,lt,it,bt,It,Ot=0){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=B.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt){L.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const Vt=O.textures[Ot],Gt=Vt.format,zt=Vt.type;if(!k.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=O.width-lt&&at>=0&&at<=O.height-it&&(O.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot),H.readPixels(et,at,lt,it,Dt.convert(Gt),Dt.convert(zt),bt))}finally{const Vt=P!==null?B.get(P).__webglFramebuffer:null;L.bindFramebuffer(H.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(O,et,at,lt,it,bt,It,Ot=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=B.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt)if(et>=0&&et<=O.width-lt&&at>=0&&at<=O.height-it){L.bindFramebuffer(H.FRAMEBUFFER,Nt);const Vt=O.textures[Ot],Gt=Vt.format,zt=Vt.type;if(!k.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,te),H.bufferData(H.PIXEL_PACK_BUFFER,bt.byteLength,H.STREAM_READ),O.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot),H.readPixels(et,at,lt,it,Dt.convert(Gt),Dt.convert(zt),0);const ce=P!==null?B.get(P).__webglFramebuffer:null;L.bindFramebuffer(H.FRAMEBUFFER,ce);const be=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await $d(H,be,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,te),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,bt),H.deleteBuffer(te),H.deleteSync(be),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,et=null,at=0){const lt=Math.pow(2,-at),it=Math.floor(O.image.width*lt),bt=Math.floor(O.image.height*lt),It=et!==null?et.x:0,Ot=et!==null?et.y:0;K.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,at,0,0,It,Ot,it,bt),L.unbindTexture()};const ef=H.createFramebuffer(),nf=H.createFramebuffer();this.copyTextureToTexture=function(O,et,at=null,lt=null,it=0,bt=null){bt===null&&(it!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=it,it=0):bt=0);let It,Ot,Nt,Vt,Gt,zt,te,ce,be;const me=O.isCompressedTexture?O.mipmaps[bt]:O.image;if(at!==null)It=at.max.x-at.min.x,Ot=at.max.y-at.min.y,Nt=at.isBox3?at.max.z-at.min.z:1,Vt=at.min.x,Gt=at.min.y,zt=at.isBox3?at.min.z:0;else{const an=Math.pow(2,-it);It=Math.floor(me.width*an),Ot=Math.floor(me.height*an),O.isDataArrayTexture?Nt=me.depth:O.isData3DTexture?Nt=Math.floor(me.depth*an):Nt=1,Vt=0,Gt=0,zt=0}lt!==null?(te=lt.x,ce=lt.y,be=lt.z):(te=0,ce=0,be=0);const de=Dt.convert(et.format),Ht=Dt.convert(et.type);let _e;et.isData3DTexture?(K.setTexture3D(et,0),_e=H.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(K.setTexture2DArray(et,0),_e=H.TEXTURE_2D_ARRAY):(K.setTexture2D(et,0),_e=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,et.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,et.unpackAlignment);const re=H.getParameter(H.UNPACK_ROW_LENGTH),je=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ci=H.getParameter(H.UNPACK_SKIP_PIXELS),Ze=H.getParameter(H.UNPACK_SKIP_ROWS),ar=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,me.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,me.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Vt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Gt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,zt);const ve=O.isDataArrayTexture||O.isData3DTexture,on=et.isDataArrayTexture||et.isData3DTexture;if(O.isDepthTexture){const an=B.get(O),Be=B.get(et),Ge=B.get(an.__renderTarget),io=B.get(Be.__renderTarget);L.bindFramebuffer(H.READ_FRAMEBUFFER,Ge.__webglFramebuffer),L.bindFramebuffer(H.DRAW_FRAMEBUFFER,io.__webglFramebuffer);for(let oi=0;oi<Nt;oi++)ve&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,B.get(O).__webglTexture,it,zt+oi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,B.get(et).__webglTexture,bt,be+oi)),H.blitFramebuffer(Vt,Gt,It,Ot,te,ce,It,Ot,H.DEPTH_BUFFER_BIT,H.NEAREST);L.bindFramebuffer(H.READ_FRAMEBUFFER,null),L.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(it!==0||O.isRenderTargetTexture||B.has(O)){const an=B.get(O),Be=B.get(et);L.bindFramebuffer(H.READ_FRAMEBUFFER,ef),L.bindFramebuffer(H.DRAW_FRAMEBUFFER,nf);for(let Ge=0;Ge<Nt;Ge++)ve?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,an.__webglTexture,it,zt+Ge):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,an.__webglTexture,it),on?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.__webglTexture,bt,be+Ge):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Be.__webglTexture,bt),it!==0?H.blitFramebuffer(Vt,Gt,It,Ot,te,ce,It,Ot,H.COLOR_BUFFER_BIT,H.NEAREST):on?H.copyTexSubImage3D(_e,bt,te,ce,be+Ge,Vt,Gt,It,Ot):H.copyTexSubImage2D(_e,bt,te,ce,Vt,Gt,It,Ot);L.bindFramebuffer(H.READ_FRAMEBUFFER,null),L.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else on?O.isDataTexture||O.isData3DTexture?H.texSubImage3D(_e,bt,te,ce,be,It,Ot,Nt,de,Ht,me.data):et.isCompressedArrayTexture?H.compressedTexSubImage3D(_e,bt,te,ce,be,It,Ot,Nt,de,me.data):H.texSubImage3D(_e,bt,te,ce,be,It,Ot,Nt,de,Ht,me):O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,bt,te,ce,It,Ot,de,Ht,me.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,bt,te,ce,me.width,me.height,de,me.data):H.texSubImage2D(H.TEXTURE_2D,bt,te,ce,It,Ot,de,Ht,me);H.pixelStorei(H.UNPACK_ROW_LENGTH,re),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,je),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ci),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ze),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ar),bt===0&&et.generateMipmaps&&H.generateMipmap(_e),L.unbindTexture()},this.initRenderTarget=function(O){B.get(O).__webglFramebuffer===void 0&&K.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?K.setTextureCube(O,0):O.isData3DTexture?K.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?K.setTexture2DArray(O,0):K.setTexture2D(O,0),L.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,L.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}function ix(r){return typeof r=="function"?r:Array.isArray(r)?t=>{for(const e of r)if(typeof e=="string"&&t===e||e instanceof RegExp&&e.test(t))return!0}:()=>!1}const rx=`
`;function sx(r,t){let e="";return t.format&&t.indentBy.length>0&&(e=rx),Vh(r,t,"",e)}function Vh(r,t,e,n){let i="",s=!1;for(let o=0;o<r.length;o++){const a=r[o],l=ox(a);if(l===void 0)continue;let c="";if(e.length===0?c=l:c=`${e}.${l}`,l===t.textNodeName){let g=a[l];ax(c,t)||(g=t.tagValueProcessor(l,g),g=Gh(g,t)),s&&(i+=n),i+=g,s=!1;continue}else if(l===t.cdataPropName){s&&(i+=n),i+=`<![CDATA[${a[l][0][t.textNodeName]}]]>`,s=!1;continue}else if(l===t.commentPropName){i+=n+`<!--${a[l][0][t.textNodeName]}-->`,s=!0;continue}else if(l[0]==="?"){const g=tu(a[":@"],t),_=l==="?xml"?"":n;let m=a[l][0][t.textNodeName];m=m.length!==0?" "+m:"",i+=_+`<${l}${m}${g}?>`,s=!0;continue}let h=n;h!==""&&(h+=t.indentBy);const f=tu(a[":@"],t),p=n+`<${l}${f}`,u=Vh(a[l],t,c,h);t.unpairedTags.indexOf(l)!==-1?t.suppressUnpairedNode?i+=p+">":i+=p+"/>":(!u||u.length===0)&&t.suppressEmptyNode?i+=p+"/>":u&&u.endsWith(">")?i+=p+`>${u}${n}</${l}>`:(i+=p+">",u&&n!==""&&(u.includes("/>")||u.includes("</"))?i+=n+t.indentBy+u+n:i+=u,i+=`</${l}>`),s=!0}return i}function ox(r){const t=Object.keys(r);for(let e=0;e<t.length;e++){const n=t[e];if(r.hasOwnProperty(n)&&n!==":@")return n}}function tu(r,t){let e="";if(r&&!t.ignoreAttributes)for(let n in r){if(!r.hasOwnProperty(n))continue;let i=t.attributeValueProcessor(n,r[n]);i=Gh(i,t),i===!0&&t.suppressBooleanAttributes?e+=` ${n.substr(t.attributeNamePrefix.length)}`:e+=` ${n.substr(t.attributeNamePrefix.length)}="${i}"`}return e}function ax(r,t){r=r.substr(0,r.length-t.textNodeName.length-1);let e=r.substr(r.lastIndexOf(".")+1);for(let n in t.stopNodes)if(t.stopNodes[n]===r||t.stopNodes[n]==="*."+e)return!0;return!1}function Gh(r,t){if(r&&r.length>0&&t.processEntities)for(let e=0;e<t.entities.length;e++){const n=t.entities[e];r=r.replace(n.regex,n.val)}return r}const lx={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(r,t){return t},attributeValueProcessor:function(r,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function Gn(r){this.options=Object.assign({},lx,r),this.options.ignoreAttributes===!0||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.ignoreAttributesFn=ix(this.options.ignoreAttributes),this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=hx),this.processTextOrObjNode=cx,this.options.format?(this.indentate=ux,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}Gn.prototype.build=function(r){return this.options.preserveOrder?sx(r,this.options):(Array.isArray(r)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(r={[this.options.arrayNodeName]:r}),this.j2x(r,0,[]).val)};Gn.prototype.j2x=function(r,t,e){let n="",i="";const s=e.join(".");for(let o in r)if(Object.prototype.hasOwnProperty.call(r,o))if(typeof r[o]>"u")this.isAttribute(o)&&(i+="");else if(r[o]===null)this.isAttribute(o)||o===this.options.cdataPropName?i+="":o[0]==="?"?i+=this.indentate(t)+"<"+o+"?"+this.tagEndChar:i+=this.indentate(t)+"<"+o+"/"+this.tagEndChar;else if(r[o]instanceof Date)i+=this.buildTextValNode(r[o],o,"",t);else if(typeof r[o]!="object"){const a=this.isAttribute(o);if(a&&!this.ignoreAttributesFn(a,s))n+=this.buildAttrPairStr(a,""+r[o]);else if(!a)if(o===this.options.textNodeName){let l=this.options.tagValueProcessor(o,""+r[o]);i+=this.replaceEntitiesValue(l)}else i+=this.buildTextValNode(r[o],o,"",t)}else if(Array.isArray(r[o])){const a=r[o].length;let l="",c="";for(let h=0;h<a;h++){const f=r[o][h];if(!(typeof f>"u"))if(f===null)o[0]==="?"?i+=this.indentate(t)+"<"+o+"?"+this.tagEndChar:i+=this.indentate(t)+"<"+o+"/"+this.tagEndChar;else if(typeof f=="object")if(this.options.oneListGroup){const p=this.j2x(f,t+1,e.concat(o));l+=p.val,this.options.attributesGroupName&&f.hasOwnProperty(this.options.attributesGroupName)&&(c+=p.attrStr)}else l+=this.processTextOrObjNode(f,o,t,e);else if(this.options.oneListGroup){let p=this.options.tagValueProcessor(o,f);p=this.replaceEntitiesValue(p),l+=p}else l+=this.buildTextValNode(f,o,"",t)}this.options.oneListGroup&&(l=this.buildObjectNode(l,o,c,t)),i+=l}else if(this.options.attributesGroupName&&o===this.options.attributesGroupName){const a=Object.keys(r[o]),l=a.length;for(let c=0;c<l;c++)n+=this.buildAttrPairStr(a[c],""+r[o][a[c]])}else i+=this.processTextOrObjNode(r[o],o,t,e);return{attrStr:n,val:i}};Gn.prototype.buildAttrPairStr=function(r,t){return t=this.options.attributeValueProcessor(r,""+t),t=this.replaceEntitiesValue(t),this.options.suppressBooleanAttributes&&t==="true"?" "+r:" "+r+'="'+t+'"'};function cx(r,t,e,n){const i=this.j2x(r,e+1,n.concat(t));return r[this.options.textNodeName]!==void 0&&Object.keys(r).length===1?this.buildTextValNode(r[this.options.textNodeName],t,i.attrStr,e):this.buildObjectNode(i.val,t,i.attrStr,e)}Gn.prototype.buildObjectNode=function(r,t,e,n){if(r==="")return t[0]==="?"?this.indentate(n)+"<"+t+e+"?"+this.tagEndChar:this.indentate(n)+"<"+t+e+this.closeTag(t)+this.tagEndChar;{let i="</"+t+this.tagEndChar,s="";return t[0]==="?"&&(s="?",i=""),(e||e==="")&&r.indexOf("<")===-1?this.indentate(n)+"<"+t+e+s+">"+r+i:this.options.commentPropName!==!1&&t===this.options.commentPropName&&s.length===0?this.indentate(n)+`<!--${r}-->`+this.newLine:this.indentate(n)+"<"+t+e+s+this.tagEndChar+r+this.indentate(n)+i}};Gn.prototype.closeTag=function(r){let t="";return this.options.unpairedTags.indexOf(r)!==-1?this.options.suppressUnpairedNode||(t="/"):this.options.suppressEmptyNode?t="/":t=`></${r}`,t};Gn.prototype.buildTextValNode=function(r,t,e,n){if(this.options.cdataPropName!==!1&&t===this.options.cdataPropName)return this.indentate(n)+`<![CDATA[${r}]]>`+this.newLine;if(this.options.commentPropName!==!1&&t===this.options.commentPropName)return this.indentate(n)+`<!--${r}-->`+this.newLine;if(t[0]==="?")return this.indentate(n)+"<"+t+e+"?"+this.tagEndChar;{let i=this.options.tagValueProcessor(t,r);return i=this.replaceEntitiesValue(i),i===""?this.indentate(n)+"<"+t+e+this.closeTag(t)+this.tagEndChar:this.indentate(n)+"<"+t+e+">"+i+"</"+t+this.tagEndChar}};Gn.prototype.replaceEntitiesValue=function(r){if(r&&r.length>0&&this.options.processEntities)for(let t=0;t<this.options.entities.length;t++){const e=this.options.entities[t];r=r.replace(e.regex,e.val)}return r};function ux(r){return this.options.indentBy.repeat(r)}function hx(r){return r.startsWith(this.options.attributeNamePrefix)&&r!==this.options.textNodeName?r.substr(this.attrPrefixLen):!1}const fx={printer_name:"Bambu Lab A1",filament:"Bambu PLA Basic @BBL A1",printableWidth:256,printableDepth:256,printableHeight:256,printableArea:["0x0","256x0","256x256","0x256"],printerSettingsId:"Bambu Lab A1 0.4 nozzle",printSettingsId:"0.20mm Standard @BBL A1"};async function dx(r,t){const n=new eh,i=Object.assign({},fx,t),s=[],o=[];Wh(r,s,o);const a=px(s),l=mx(a),c=gx(l,a,i),h=_x(1,s,c),f=vx(s),p=xx(1,s),u=yx(o,i);return n.file("_rels/.rels",eu({id:"rel-1",target:"/3D/3dmodel.model"})),n.file("3D/3dmodel.model",h),n.file("3D/_rels/3dmodel.model.rels",eu({id:"rel-1",target:"/3D/Objects/object-1.model"})),n.file("3D/Objects/object-1.model",f),n.file("Metadata/model_settings.config",p),n.file("Metadata/project_settings.config",u),n.file("[Content_Types].xml",bx()),await n.generateAsync({type:"blob",mimeType:"application/vnd.ms-package.3dmanufacturing-3dmodel+xml"})}function Wh(r,t,e){if(r.updateMatrixWorld(!0),r.type==="Mesh"){const n=r,i=n.geometry,s=i.attributes.position,o=i.index;let a=null;if(n.material){const u=new Qt;"color"in n.material&&n.material.color?u.copy(n.material.color):u.set(8421504);const g=e.find(_=>_.color.r===u.r&&_.color.g===u.g&&_.color.b===u.b);if(g)a=g;else{const _=e.length+1;a={id:e.length,color:u,name:n.name?`${n.name}_material`:`material_${e.length}`,extruder:_},e.push(a)}}const l=t.length,c={id:l,vertices:[],triangles:[],material:a,name:n.name||`Default-${l}`},h=new Map,f=n.matrixWorld,p=u=>{const g=new q;g.fromBufferAttribute(s,u),g.applyMatrix4(f);const _=`${g.x},${g.y},${g.z}`;return h.has(_)||(h.set(_,c.vertices.length),c.vertices.push({x:g.x,y:g.y,z:g.z})),h.get(_)};if(o)for(let u=0;u<o.count;u+=3){const g=p(o.getX(u)),_=p(o.getX(u+1)),m=p(o.getX(u+2));c.triangles.push({v1:g,v2:_,v3:m})}else for(let u=0;u<s.count;u+=3){const g=p(u),_=p(u+1),m=p(u+2);c.triangles.push({v1:g,v2:_,v3:m})}t.push(c)}r.children.forEach(n=>{Wh(n,t,e)})}function px(r){if(r.length===0)return{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}};const t=r[0].vertices[0]||{x:0,y:0,z:0},e={x:t.x,y:t.y,z:t.z},n={x:t.x,y:t.y,z:t.z};for(const i of r)for(const s of i.vertices)e.x=Math.min(e.x,s.x),e.y=Math.min(e.y,s.y),e.z=Math.min(e.z,s.z),n.x=Math.max(n.x,s.x),n.y=Math.max(n.y,s.y),n.z=Math.max(n.z,s.z);return{min:e,max:n}}function mx(r){return{x:(r.min.x+r.max.x)/2,y:(r.min.y+r.max.y)/2,z:(r.min.z+r.max.z)/2}}function gx(r,t,e){const n={x:e.printableWidth/2,y:e.printableDepth/2,z:0},i={x:n.x-r.x,y:n.y-r.y,z:n.z-t.min.z};return`1 0 0 0 1 0 0 0 1 ${i.x.toFixed(4)} ${i.y.toFixed(4)} ${i.z.toFixed(4)}`}function _x(r,t,e){const n={model:{"@_unit":"millimeter","@_xml:lang":"en-US","@_xmlns":"http://schemas.microsoft.com/3dmanufacturing/core/2015/02","@_xmlns:slic3rpe":"http://schemas.slic3r.org/3mf/2017/06","@_xmlns:p":"http://schemas.microsoft.com/3dmanufacturing/production/2015/06","@_requiredextensions":"p",metadata:[{"@_name":"Application","#text":"BambuStudio-01.07.04.52"},{"@_name":"Title","#text":"Exported 3D Model"},{"@_name":"CreationDate","#text":new Date().toString()},{"@_name":"Copyright","#text":"Copyright (c) 2023. All rights reserved."}],resources:{object:{"@_id":`${r}`,"@_p:uuid":Us(),"@_type":"model",components:{component:t.map(s=>({"@_p:path":`/3D/Objects/object-${r}.model`,"@_objectid":s.id.toString()}))}}},build:{"@_p:uuid":`${Us()}1`,item:{"@_objectid":`${r}`,"@_p:uuid":`${Us()}2`,"@_transform":e,"@_printable":"1"}}}};return`<?xml version="1.0" encoding="UTF-8"?>
${new Gn({attributeNamePrefix:"@_",ignoreAttributes:!1,format:!0,indentBy:"  "}).build(n)}`}function vx(r){const e={model:{"@_unit":"millimeter","@_xml:lang":"en-US","@_xmlns":"http://schemas.microsoft.com/3dmanufacturing/core/2015/02","@_xmlns:p":"http://schemas.microsoft.com/3dmanufacturing/production/2015/06",resources:r.map(i=>({object:{"@_id":i.id.toString(),"@_p:uuid":Us(),"@_type":"model",mesh:{vertices:{vertex:i.vertices.map(s=>({"@_x":s.x.toFixed(7),"@_y":s.y.toFixed(7),"@_z":s.z.toFixed(7)}))},triangles:{triangle:i.triangles.map(s=>({"@_v1":s.v1,"@_v2":s.v2,"@_v3":s.v3}))}}}})),build:{}}};return`<?xml version="1.0" encoding="UTF-8"?>
${new Gn({attributeNamePrefix:"@_",ignoreAttributes:!1,format:!0,indentBy:"  "}).build(e)}`}function xx(r,t){const e=t.map(n=>{const i=n.material?n.material.extruder:1;return`    <part id="${n.id}" subtype="normal_part">
      <metadata key="name" value="${n.name}"/>
      <metadata key="extruder" value="${i}"/>
      <mesh_stat edges_fixed="0" degenerate_facets="0" facets_removed="0" facets_reversed="0" backwards_edges="0"/>
    </part>`}).join(`
`);return`<?xml version="1.0" encoding="UTF-8"?>
<config>
  <object id="${r}">
    <metadata key="name" value="Exported3DModel.3mf"/>
    <metadata key="extruder" value="1"/>
    <metadata key="thumbnail_file" value=""/>
${e}
  </object>
  <plate>
    <metadata key="plater_id" value="1"/>
    <metadata key="plater_name" value="plate-1"/>
    <model_instance>
      <metadata key="object_id" value="${r}"/>
      <metadata key="instance_id" value="0"/>
    </model_instance>
  </plate>
  <assemble>
    <assemble_item object_id="${r}" instance_id="0" offset="0 0 0"/>
  </assemble>
</config>`}function yx(r,t){const e=r.map(i=>`#${i.color.getHexString()}`);for(;e.length<2;)e.push("#FFFFFF");const n={printable_area:t.printableArea,printable_height:t.printableHeight.toString(),bed_exclude_area:[],filament_colour:e,filament_settings_id:Array.from({length:e.length}).fill(t.filament),filament_diameter:Array.from({length:e.length}).fill("1.75"),filament_is_support:Array.from({length:e.length}).fill("0"),printer_model:t.printer_name,layer_height:"0.2",wall_loops:"2",sparse_infill_density:"15%",printer_settings_id:t.printerSettingsId,printer_variant:"0.4",nozzle_diameter:["0.4"],enable_support:"0",support_type:"normal(auto)",print_settings_id:t.printSettingsId};return JSON.stringify(n)}function bx(){return`<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" />
  <Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml" />
  <Default Extension="png" ContentType="image/png" />
  <Default Extension="gcode" ContentType="text/x.gcode"/>
</Types>`}function eu(r){return`<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rel-${r.id}" Target="${r.target}" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/>
</Relationships>`}function Us(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const t=Math.random()*16|0;return(r==="x"?t:t&3|8).toString(16)})}class $o{constructor(t){this.top=0,this.array=new Float32Array(t)}write(t){this.array[this.top++]=t.x,this.array[this.top++]=t.y,this.array[this.top++]=t.z}}class Mx{constructor(t){this.top=0,this.array=new Float32Array(t)}write(t){this.array[this.top++]=t.x,this.array[this.top++]=t.y}}class Sn{constructor(t){this.plane=null,this.front=null,this.back=null,this.polygons=[],t&&this.build(t)}clone(){const t=new Sn;return t.plane=this.plane&&this.plane.clone(),t.front=this.front&&this.front.clone(),t.back=this.back&&this.back.clone(),t.polygons=this.polygons.map(e=>e.clone()),t}invert(){for(let e=0;e<this.polygons.length;e++)this.polygons[e].flip();this.plane&&this.plane.flip(),this.front&&this.front.invert(),this.back&&this.back.invert();const t=this.front;this.front=this.back,this.back=t}clipPolygons(t){if(!this.plane)return t.slice();let e=new Array,n=new Array;for(let i=0;i<t.length;i++)this.plane.splitPolygon(t[i],e,n,e,n);return this.front&&(e=this.front.clipPolygons(e)),this.back?n=this.back.clipPolygons(n):n=[],e.concat(n)}clipTo(t){this.polygons=t.clipPolygons(this.polygons),this.front&&this.front.clipTo(t),this.back&&this.back.clipTo(t)}allPolygons(){let t=this.polygons.slice();return this.front&&(t=t.concat(this.front.allPolygons())),this.back&&(t=t.concat(this.back.allPolygons())),t}build(t){if(!t.length)return;this.plane||(this.plane=t[0].plane.clone());const e=[],n=[];for(let i=0;i<t.length;i++)this.plane.splitPolygon(t[i],this.polygons,this.polygons,e,n);e.length&&(this.front||(this.front=new Sn),this.front.build(e)),n.length&&(this.back||(this.back=new Sn),this.back.build(n))}}class Xe{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}clone(){return new Xe(this.x,this.y,this.z)}negate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}times(t){return this.x*=t,this.y*=t,this.z*=t,this}dividedBy(t){return this.x/=t,this.y/=t,this.z/=t,this}lerp(t,e){return this.add(new Xe().copy(t).sub(this).times(e))}unit(){return this.dividedBy(this.length())}length(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2))}normalize(){return this.unit()}cross(t){const e=this.clone(),n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}toVector3(){return new q(this.x,this.y,this.z)}}class vi{constructor(t,e){this.normal=t,this.w=e,this.normal=t,this.w=e}clone(){return new vi(this.normal.clone(),this.w)}flip(){this.normal.negate(),this.w=-this.w}splitPolygon(t,e,n,i,s){let h=0;const f=[];for(let p=0;p<t.vertices.length;p++){const u=this.normal.dot(t.vertices[p].pos)-this.w,g=u<-vi.EPSILON?2:u>vi.EPSILON?1:0;h|=g,f.push(g)}switch(h){case 0:(this.normal.dot(t.plane.normal)>0?e:n).push(t);break;case 1:i.push(t);break;case 2:s.push(t);break;case 3:{const p=[],u=[];for(let g=0;g<t.vertices.length;g++){const _=(g+1)%t.vertices.length,m=f[g],d=f[_],y=t.vertices[g],x=t.vertices[_];if(m!=2&&p.push(y),m!=1&&u.push(m!=2?y.clone():y),(m|d)==3){const v=(this.w-this.normal.dot(y.pos))/this.normal.dot(new Xe().copy(x.pos).sub(y.pos)),E=y.interpolate(x,v);p.push(E),u.push(E.clone())}}p.length>=3&&i.push(new rr(p,t.shared)),u.length>=3&&s.push(new rr(u,t.shared));break}}}static fromPoints(t,e,n){const i=new Xe().copy(e).sub(t).cross(new Xe().copy(n).sub(t)).normalize();return new vi(i.clone(),i.dot(t))}}vi.EPSILON=1e-5;class rr{constructor(t,e){this.vertices=t,this.shared=e,this.plane=vi.fromPoints(t[0].pos,t[1].pos,t[2].pos)}clone(){return new rr(this.vertices.map(t=>t.clone()),this.shared)}flip(){this.vertices.reverse().map(t=>t.flip()),this.plane.flip()}}class Xs{constructor(t,e,n,i){this.pos=new Xe().copy(t),this.normal=new Xe().copy(e),this.uv=new Xe().copy(n),this.uv.z=0,i&&(this.color=new Xe().copy(i))}clone(){return new Xs(this.pos,this.normal,this.uv,this.color)}flip(){this.normal.negate()}interpolate(t,e){return new Xs(this.pos.clone().lerp(t.pos,e),this.normal.clone().lerp(t.normal,e),this.uv.clone().lerp(t.uv,e),this.color&&t.color&&this.color.clone().lerp(t.color,e))}}class Me{constructor(){this.polygons=[]}static fromPolygons(t){const e=new Me;return e.polygons=t,e}static fromGeometry(t,e){let n=[];const i=t.attributes.position,s=t.attributes.normal,o=t.attributes.uv,a=t.attributes.color,l=t.groups;let c;if(t.index)c=t.index.array;else{c=new Uint16Array(i.array.length/i.itemSize|0);for(let f=0;f<c.length;f++)c[f]=f}const h=c.length/3|0;n=new Array(h);for(let f=0,p=0,u=c.length;f<u;f+=3,p++){const g=new Array(3);for(let _=0;_<3;_++){const m=c[f+_],d=m*3,y=m*2,x=i.array[d],v=i.array[d+1],E=i.array[d+2],A=s.array[d],T=s.array[d+1],P=s.array[d+2],S=o?.array[y],w=o?.array[y+1];g[_]=new Xs(new Xe(x,v,E),new Xe(A,T,P),new Xe(S,w,0),a&&new Xe(a.array[d],a.array[d+1],a.array[d+2]))}if(e===void 0&&l&&l.length>0)for(const _ of l)f>=_.start&&f<_.start+_.count&&(n[p]=new rr(g,_.materialIndex));else n[p]=new rr(g,e)}return Me.fromPolygons(n.filter(f=>!Number.isNaN(f.plane.normal.x)))}static toGeometry(t,e){let n=0;const i=t.polygons;for(const u of i)n+=u.vertices.length-2;const s=new sn,o=new $o(n*3*3),a=new $o(n*3*3),l=new Mx(n*2*3);let c;const h=[],f=[];for(const u of i){const g=u.vertices,_=g.length;u.shared!==void 0&&(h[u.shared]||(h[u.shared]=[])),_&&g[0].color!==void 0&&(c||(c=new $o(n*3*3)));for(let m=3;m<=_;m++)(u.shared===void 0?f:h[u.shared]).push(o.top/3,o.top/3+1,o.top/3+2),o.write(g[0].pos),o.write(g[m-2].pos),o.write(g[m-1].pos),a.write(g[0].normal),a.write(g[m-2].normal),a.write(g[m-1].normal),l&&(l.write(g[0].uv),l.write(g[m-2].uv),l.write(g[m-1].uv)),c&&(c.write(g[0].color),c.write(g[m-2].color),c.write(g[m-1].color))}s.setAttribute("position",new ye(o.array,3)),s.setAttribute("normal",new ye(a.array,3)),l&&s.setAttribute("uv",new ye(l.array,2)),c&&s.setAttribute("color",new ye(c.array,3));for(let u=0;u<h.length;u++)h[u]===void 0&&(h[u]=[]);if(h.length){let u=[],g=0;for(let _=0;_<h.length;_++)s.addGroup(g,h[_].length,_),g+=h[_].length,u=u.concat(h[_]);s.addGroup(g,f.length,h.length),u=u.concat(f),s.setIndex(u)}const p=new ge().copy(e).invert();return s.applyMatrix4(p),s.computeBoundingSphere(),s.computeBoundingBox(),s}static fromMesh(t,e){const n=Me.fromGeometry(t.geometry,e),i=new q,s=new Wt;s.getNormalMatrix(t.matrix);for(let o=0;o<n.polygons.length;o++){const a=n.polygons[o];for(let l=0;l<a.vertices.length;l++){const c=a.vertices[l];c.pos.copy(i.copy(c.pos.toVector3()).applyMatrix4(t.matrix)),c.normal.copy(i.copy(c.normal.toVector3()).applyMatrix3(s))}}return n}static toMesh(t,e,n){const i=Me.toGeometry(t,e),s=new Fe(i,n);return s.matrix.copy(e),s.matrix.decompose(s.position,s.quaternion,s.scale),s.rotation.setFromQuaternion(s.quaternion),s.updateMatrixWorld(),s.castShadow=s.receiveShadow=!0,s}static union(t,e){const n=Me.fromMesh(t),i=Me.fromMesh(e);return Me.toMesh(n.union(i),t.matrix,t.material)}static subtract(t,e){const n=Me.fromMesh(t),i=Me.fromMesh(e);return Me.toMesh(n.subtract(i),t.matrix,t.material)}static intersect(t,e){const n=Me.fromMesh(t),i=Me.fromMesh(e);return Me.toMesh(n.intersect(i),t.matrix,t.material)}clone(){const t=new Me;return t.polygons=this.polygons.map(e=>e.clone()).filter(e=>Number.isFinite(e.plane.w)),t}toPolygons(){return this.polygons}union(t){const e=new Sn(this.clone().polygons),n=new Sn(t.clone().polygons);return e.clipTo(n),n.clipTo(e),n.invert(),n.clipTo(e),n.invert(),e.build(n.allPolygons()),Me.fromPolygons(e.allPolygons())}subtract(t){const e=new Sn(this.clone().polygons),n=new Sn(t.clone().polygons);return e.invert(),e.clipTo(n),n.clipTo(e),n.invert(),n.clipTo(e),n.invert(),e.build(n.allPolygons()),e.invert(),Me.fromPolygons(e.allPolygons())}intersect(t){const e=new Sn(this.clone().polygons),n=new Sn(t.clone().polygons);return e.invert(),n.clipTo(e),n.invert(),e.clipTo(n),n.clipTo(e),e.build(n.allPolygons()),e.invert(),Me.fromPolygons(e.allPolygons())}inverse(){const t=this.clone();for(const e of t.polygons)e.flip();return t}toMesh(t,e){return Me.toMesh(this,t,e)}toGeometry(t){return Me.toGeometry(this,t)}}const nu={type:"change"},Nl={type:"start"},Xh={type:"end"},ws=new wl,iu=new Kn,Sx=Math.cos(70*ks.DEG2RAD),Ae=new q,We=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jo=1e-6;class Ex extends xm{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new ii,this._lastTargetPosition=new q,this._quat=new ii().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cc,this._sphericalDelta=new Cc,this._scale=1,this._panOffset=new q,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new q,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tx.bind(this),this._onPointerDown=wx.bind(this),this._onPointerUp=Ax.bind(this),this._onContextMenu=Nx.bind(this),this._onMouseWheel=Px.bind(this),this._onKeyDown=Ix.bind(this),this._onTouchStart=Lx.bind(this),this._onTouchMove=Dx.bind(this),this._onMouseDown=Cx.bind(this),this._onMouseMove=Rx.bind(this),this._interceptControlDown=Ux.bind(this),this._interceptControlUp=Ox.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nu),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),i<-Math.PI?i+=We:i>Math.PI&&(i-=We),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ae.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ws.origin.copy(this.object.position),ws.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ws.direction))<Sx?this.object.lookAt(this.target):(iu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ws.intersectPlane(iu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>jo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jo||this._lastTargetPosition.distanceToSquared(this.target)>jo?(this.dispatchEvent(nu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ae.copy(i).sub(this.target);let s=Ae.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function wx(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Tx(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Ax(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xh),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Cx(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=fe.DOLLY;break;case $i.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=fe.ROTATE}break;case $i.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Nl)}function Rx(r){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Px(r){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(r.preventDefault(),this.dispatchEvent(Nl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Xh))}function Ix(r){this.enabled!==!1&&this._handleKeyDown(r)}function Lx(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=fe.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=fe.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Nl)}function Dx(r){switch(this._trackPointer(r),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=fe.NONE}}function Nx(r){this.enabled!==!1&&r.preventDefault()}function Ux(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ox(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ru={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class qs{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new Yx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new oy(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,n,i){const s=new qx,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](s));s.setPlugins(o),s.setTextureUtils(this.textureUtils),s.writeAsync(t,e,i).catch(n)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,i,s,e)})}}const Kt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Zo="KHR_mesh_quantization",rn={};rn[dn]=Kt.NEAREST;rn[sh]=Kt.NEAREST_MIPMAP_NEAREST;rn[vr]=Kt.NEAREST_MIPMAP_LINEAR;rn[vn]=Kt.LINEAR;rn[Cs]=Kt.LINEAR_MIPMAP_NEAREST;rn[Qn]=Kt.LINEAR_MIPMAP_LINEAR;rn[Jn]=Kt.CLAMP_TO_EDGE;rn[Os]=Kt.REPEAT;rn[Fs]=Kt.MIRRORED_REPEAT;const su={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Fx=new Qt,ou=12,Bx=1179937895,zx=2,au=8,kx=1313821514,Hx=5130562;function Mr(r,t){return r.length===t.length&&r.every(function(e,n){return e===t[n]})}function Vx(r){return new TextEncoder().encode(r).buffer}function Gx(r){return Mr(r.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Wx(r,t,e){const n={min:new Array(r.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(r.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=t;i<t+e;i++)for(let s=0;s<r.itemSize;s++){let o;r.itemSize>4?o=r.array[i*r.itemSize+s]:(s===0?o=r.getX(i):s===1?o=r.getY(i):s===2?o=r.getZ(i):s===3&&(o=r.getW(i)),r.normalized===!0&&(o=ks.normalize(o,r.array))),n.min[s]=Math.min(n.min[s],o),n.max[s]=Math.max(n.max[s],o)}return n}function qh(r){return Math.ceil(r/4)*4}function Ko(r,t=0){const e=qh(r.byteLength);if(e!==r.byteLength){const n=new Uint8Array(e);if(n.set(new Uint8Array(r)),t!==0)for(let i=r.byteLength;i<e;i++)n[i]=t;return n.buffer}return r}function lu(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Xx(r,t){if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas){let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),r.convertToBlob({type:t,quality:e})}else return new Promise(e=>r.toBlob(e,t))}class qx{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+$s}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const i=this,s=i.buffers,o=i.json;n=i.options;const a=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(s,{type:"application/octet-stream"}),h=Object.keys(a),f=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),f.length>0&&(o.extensionsRequired=f),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){const p=new FileReader;p.readAsArrayBuffer(c),p.onloadend=function(){const u=Ko(p.result),g=new DataView(new ArrayBuffer(au));g.setUint32(0,u.byteLength,!0),g.setUint32(4,Hx,!0);const _=Ko(Vx(JSON.stringify(o)),32),m=new DataView(new ArrayBuffer(au));m.setUint32(0,_.byteLength,!0),m.setUint32(4,kx,!0);const d=new ArrayBuffer(ou),y=new DataView(d);y.setUint32(0,Bx,!0),y.setUint32(4,zx,!0);const x=ou+m.byteLength+_.byteLength+g.byteLength+u.byteLength;y.setUint32(8,x,!0);const v=new Blob([d,m,_,g,u],{type:"application/octet-stream"}),E=new FileReader;E.readAsArrayBuffer(v),E.onloadend=function(){e(E.result)}}}else if(o.buffers&&o.buffers.length>0){const p=new FileReader;p.readAsDataURL(c),p.onloadend=function(){const u=p.result;o.buffers[0].uri=u,e(o)}}else e(o)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const s=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&s.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const o in s.gltfExtensions)e.extensions[o]=s.gltfExtensions[o],i[o]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(e.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(t,i)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const n=new q;for(let i=0,s=t.count;i<s;i++)if(Math.abs(n.fromBufferAttribute(t,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),i=new q;for(let s=0,o=n.count;s<o;s++)i.fromBufferAttribute(n,s),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(s,i.x,i.y,i.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const i={};(e.offset.x!==0||e.offset.y!==0)&&(i.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(i.rotation=e.rotation,n=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(i.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function n(u){return u.colorSpace===Oe?function(_){return _<.04045?_*.0773993808:Math.pow(_*.9478672986+.0521327014,2.4)}:function(_){return _}}t instanceof Oo&&(t=await this.decompressTextureAsync(t)),e instanceof Oo&&(e=await this.decompressTextureAsync(e));const i=t?t.image:null,s=e?e.image:null,o=Math.max(i?i.width:0,s?s.width:0),a=Math.max(i?i.height:0,s?s.height:0),l=lu();l.width=o,l.height=a;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);const h=c.getImageData(0,0,o,a);if(i){c.drawImage(i,0,0,o,a);const u=n(t),g=c.getImageData(0,0,o,a).data;for(let _=2;_<g.length;_+=4)h.data[_]=u(g[_]/256)*256}if(s){c.drawImage(s,0,0,o,a);const u=n(e),g=c.getImageData(0,0,o,a).data;for(let _=1;_<g.length;_+=4)h.data[_]=u(g[_]/256)*256}c.putImageData(h,0,0);const p=(t||e).clone();return p.source=new Zs(l),p.colorSpace=Bn,p.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),p}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,i,s){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(e){case Kt.BYTE:case Kt.UNSIGNED_BYTE:a=1;break;case Kt.SHORT:case Kt.UNSIGNED_SHORT:a=2;break;default:a=4}let l=t.itemSize*a;s===Kt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=qh(i*l),h=new DataView(new ArrayBuffer(c));let f=0;for(let g=n;g<n+i;g++){for(let _=0;_<t.itemSize;_++){let m;t.itemSize>4?m=t.array[g*t.itemSize+_]:(_===0?m=t.getX(g):_===1?m=t.getY(g):_===2?m=t.getZ(g):_===3&&(m=t.getW(g)),t.normalized===!0&&(m=ks.normalize(m,t.array))),e===Kt.FLOAT?h.setFloat32(f,m,!0):e===Kt.INT?h.setInt32(f,m,!0):e===Kt.UNSIGNED_INT?h.setUint32(f,m,!0):e===Kt.SHORT?h.setInt16(f,m,!0):e===Kt.UNSIGNED_SHORT?h.setUint16(f,m,!0):e===Kt.BYTE?h.setInt8(f,m):e===Kt.UNSIGNED_BYTE&&h.setUint8(f,m),f+=a}f%l!==0&&(f+=l-f%l)}const p={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return s!==void 0&&(p.target=s),s===Kt.ARRAY_BUFFER&&(p.byteStride=l),this.byteOffset+=c,o.bufferViews.push(p),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const s=new FileReader;s.readAsArrayBuffer(t),s.onloadend=function(){const o=Ko(s.result),a={buffer:e.processBuffer(o),byteOffset:e.byteOffset,byteLength:o.byteLength};e.byteOffset+=o.byteLength,i(n.bufferViews.push(a)-1)}})}processAccessor(t,e,n,i){const s=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(t.array.constructor===Float32Array)a=Kt.FLOAT;else if(t.array.constructor===Int32Array)a=Kt.INT;else if(t.array.constructor===Uint32Array)a=Kt.UNSIGNED_INT;else if(t.array.constructor===Int16Array)a=Kt.SHORT;else if(t.array.constructor===Uint16Array)a=Kt.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)a=Kt.BYTE;else if(t.array.constructor===Uint8Array)a=Kt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=t.count),i===0)return null;const l=Wx(t,n,i);let c;e!==void 0&&(c=t===e.index?Kt.ELEMENT_ARRAY_BUFFER:Kt.ARRAY_BUFFER);const h=this.processBufferView(t,a,n,i,c),f={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:i,max:l.max,min:l.min,type:o[t.itemSize]};return t.normalized===!0&&(f.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(f)-1}processImage(t,e,n,i="image/png"){if(t!==null){const s=this,o=s.cache,a=s.json,l=s.options,c=s.pending;o.images.has(t)||o.images.set(t,{});const h=o.images.get(t),f=i+":flipY/"+n.toString();if(h[f]!==void 0)return h[f];a.images||(a.images=[]);const p={mimeType:i},u=lu();u.width=Math.min(t.width,l.maxTextureSize),u.height=Math.min(t.height,l.maxTextureSize);const g=u.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,u.height),g.scale(1,-1)),t.data!==void 0){e!==fn&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const m=new Uint8ClampedArray(t.height*t.width*4);for(let d=0;d<m.length;d+=4)m[d+0]=t.data[d+0],m[d+1]=t.data[d+1],m[d+2]=t.data[d+2],m[d+3]=t.data[d+3];g.putImageData(new ImageData(m,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)g.drawImage(t,0,0,u.width,u.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(Xx(u,i).then(m=>s.processBufferViewImage(m)).then(m=>{p.bufferView=m})):p.uri=_h.getDataURL(u,i);const _=a.images.push(p)-1;return h[f]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:rn[t.magFilter],minFilter:rn[t.minFilter],wrapS:rn[t.wrapS],wrapT:rn[t.wrapT]};return e.samplers.push(n)-1}async processTextureAsync(t){const n=this.options,i=this.cache,s=this.json;if(i.textures.has(t))return i.textures.get(t);s.textures||(s.textures=[]),t instanceof Oo&&(t=await this.decompressTextureAsync(t,n.maxTextureSize));let o=t.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,o)};t.name&&(a.name=t.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(t,a)});const l=s.textures.push(a)-1;return i.textures.set(t,l),l}async processMaterialAsync(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const s=t.color.toArray().concat([t.opacity]);if(Mr(s,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=s),t.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=t.metalness,i.pbrMetallicRoughness.roughnessFactor=t.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const a=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(t.map){const a={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(a,t.map),i.pbrMetallicRoughness.baseColorTexture=a}if(t.emissive){const a=t.emissive;if(Math.max(a.r,a.g,a.b)>0&&(i.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const c={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(c,t.emissiveMap),i.emissiveTexture=c}}if(t.normalMap){const a={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(a.scale=t.normalScale.x),this.applyTextureTransform(a,t.normalMap),i.normalTexture=a}if(t.aoMap){const a={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(a.strength=t.aoMapIntensity),this.applyTextureTransform(a,t.aoMap),i.occlusionTexture=a}t.transparent?i.alphaMode="BLEND":t.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=t.alphaTest),t.side===En&&(i.doubleSided=!0),t.name!==""&&(i.name=t.name),this.serializeUserData(t,i),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(t,i)});const o=n.materials.push(i)-1;return e.materials.set(t,o),o}async processMeshAsync(t){const e=this.cache,n=this.json,i=[t.geometry.uuid];if(Array.isArray(t.material))for(let v=0,E=t.material.length;v<E;v++)i.push(t.material[v].uuid);else i.push(t.material.uuid);const s=i.join(":");if(e.meshes.has(s))return e.meshes.get(s);const o=t.geometry;let a;t.isLineSegments?a=Kt.LINES:t.isLineLoop?a=Kt.LINE_LOOP:t.isLine?a=Kt.LINE_STRIP:t.isPoints?a=Kt.POINTS:a=t.material.wireframe?Kt.LINES:Kt.TRIANGLES;const l={},c={},h=[],f=[],p={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},u=o.getAttribute("normal");u!==void 0&&!this.isNormalizedNormalAttribute(u)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(u)));let g=null;for(let v in o.attributes){if(v.slice(0,5)==="morph")continue;const E=o.attributes[v];if(v=p[v]||v.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)||(v="_"+v),e.attributes.has(this.getUID(E))){c[v]=e.attributes.get(this.getUID(E));continue}g=null;const T=E.array;v==="JOINTS_0"&&!(T instanceof Uint16Array)&&!(T instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new ye(new Uint16Array(T),E.itemSize,E.normalized)):(T instanceof Uint32Array||T instanceof Int32Array)&&!v.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${v}" converted to type FLOAT.`),g=qs.Utils.toFloat32BufferAttribute(E));const P=this.processAccessor(g||E,o);P!==null&&(v.startsWith("_")||this.detectMeshQuantization(v,E),c[v]=P,e.attributes.set(this.getUID(E),P))}if(u!==void 0&&o.setAttribute("normal",u),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const v=[],E=[],A={};if(t.morphTargetDictionary!==void 0)for(const T in t.morphTargetDictionary)A[t.morphTargetDictionary[T]]=T;for(let T=0;T<t.morphTargetInfluences.length;++T){const P={};let S=!1;for(const w in o.morphAttributes){if(w!=="position"&&w!=="normal"){S||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),S=!0);continue}const D=o.morphAttributes[w][T],R=w.toUpperCase(),U=o.attributes[w];if(e.attributes.has(this.getUID(D,!0))){P[R]=e.attributes.get(this.getUID(D,!0));continue}const b=D.clone();if(!o.morphTargetsRelative)for(let F=0,$=D.count;F<$;F++)for(let V=0;V<D.itemSize;V++)V===0&&b.setX(F,D.getX(F)-U.getX(F)),V===1&&b.setY(F,D.getY(F)-U.getY(F)),V===2&&b.setZ(F,D.getZ(F)-U.getZ(F)),V===3&&b.setW(F,D.getW(F)-U.getW(F));P[R]=this.processAccessor(b,o),e.attributes.set(this.getUID(U,!0),P[R])}f.push(P),v.push(t.morphTargetInfluences[T]),t.morphTargetDictionary!==void 0&&E.push(A[T])}l.weights=v,E.length>0&&(l.extras={},l.extras.targetNames=E)}const _=Array.isArray(t.material);if(_&&o.groups.length===0)return null;let m=!1;if(_&&o.index===null){const v=[];for(let E=0,A=o.attributes.position.count;E<A;E++)v[E]=E;o.setIndex(v),m=!0}const d=_?t.material:[t.material],y=_?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let v=0,E=y.length;v<E;v++){const A={mode:a,attributes:c};if(this.serializeUserData(o,A),f.length>0&&(A.targets=f),o.index!==null){let P=this.getUID(o.index);(y[v].start!==void 0||y[v].count!==void 0)&&(P+=":"+y[v].start+":"+y[v].count),e.attributes.has(P)?A.indices=e.attributes.get(P):(A.indices=this.processAccessor(o.index,o,y[v].start,y[v].count),e.attributes.set(P,A.indices)),A.indices===null&&delete A.indices}const T=await this.processMaterialAsync(d[y[v].materialIndex]);T!==null&&(A.material=T),h.push(A)}m===!0&&o.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(v){v.writeMesh&&v.writeMesh(t,l)});const x=n.meshes.push(l)-1;return e.meshes.set(s,x),x}detectMeshQuantization(t,e){if(this.extensionsUsed[Zo])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");const i=t.split("_",1)[0];ru[i]&&ru[i].includes(n)&&(this.extensionsUsed[Zo]=!0,this.extensionsRequired[Zo]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:i.perspective={aspectRatio:t.aspect,yfov:ks.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(i.name=t.type),e.cameras.push(i)-1}processAnimation(t,e){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),t=qs.Utils.mergeMorphTargetTracks(t.clone(),e);const s=t.tracks,o=[],a=[];for(let c=0;c<s.length;++c){const h=s[c],f=se.parseTrackName(h.name);let p=se.findNode(e,f.nodeName);const u=su[f.propertyName];if(f.objectName==="bones"&&(p.isSkinnedMesh===!0?p=p.skeleton.getBoneByName(f.objectIndex):p=void 0),!p||!u){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}const g=1;let _=h.values.length/h.times.length;u===su.morphTargetInfluences&&(_/=p.morphTargetInfluences.length);let m;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",_/=3):h.getInterpolation()===xd?m="STEP":m="LINEAR",a.push({input:this.processAccessor(new ye(h.times,g)),output:this.processAccessor(new ye(h.values,_)),interpolation:m}),o.push({sampler:a.length-1,target:{node:i.get(p),path:u}})}const l={name:t.name||"clip_"+n.animations.length,samplers:a,channels:o};return this.serializeUserData(t,l),n.animations.push(l),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,i=e.nodes[n.get(t)],s=t.skeleton;if(s===void 0)return null;const o=t.skeleton.bones[0];if(o===void 0)return null;const a=[],l=new Float32Array(s.bones.length*16),c=new ge;for(let f=0;f<s.bones.length;++f)a.push(n.get(s.bones[f])),c.copy(s.boneInverses[f]),c.multiply(t.bindMatrix).toArray(l,f*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new ye(l,16)),joints:a,skeleton:n.get(o)}),i.skin=e.skins.length-1}async processNodeAsync(t){const e=this.json,n=this.options,i=this.nodeMap;e.nodes||(e.nodes=[]);const s={};if(n.trs){const a=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();Mr(a,[0,0,0,1])||(s.rotation=a),Mr(l,[0,0,0])||(s.translation=l),Mr(c,[1,1,1])||(s.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),Gx(t.matrix)===!1&&(s.matrix=t.matrix.elements);if(t.name!==""&&(s.name=String(t.name)),this.serializeUserData(t,s),t.isMesh||t.isLine||t.isPoints){const a=await this.processMeshAsync(t);a!==null&&(s.mesh=a)}else t.isCamera&&(s.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);const o=e.nodes.push(s)-1;if(i.set(t,o),t.children.length>0){const a=[];for(let l=0,c=t.children.length;l<c;l++){const h=t.children[l];if(h.visible||n.onlyVisible===!1){const f=await this.processNodeAsync(h);f!==null&&a.push(f)}}a.length>0&&(s.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(t,s)}),o}async processSceneAsync(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const i={};t.name!==""&&(i.name=t.name),e.scenes.push(i);const s=[];for(let o=0,a=t.children.length;o<a;o++){const l=t.children[o];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&s.push(c)}}s.length>0&&(i.nodes=s),this.serializeUserData(t,i)}async processObjectsAsync(t){const e=new Vs;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);await this.processSceneAsync(e)}async processInputAsync(t){const e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(t)});const n=[];for(let i=0;i<t.length;i++)t[i]instanceof Vs?await this.processSceneAsync(t[i]):n.push(t[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<e.animations.length;++i)this.processAnimation(e.animations[i],t[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,n=this.plugins.length;e<n;e++)await t(this.plugins[e])}}class Yx{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const n=this.writer,i=n.json,s=n.extensionsUsed,o={};t.name&&(o.name=t.name),o.color=t.color.toArray(),o.intensity=t.intensity,t.isDirectionalLight?o.type="directional":t.isPointLight?(o.type="point",t.distance>0&&(o.range=t.distance)):t.isSpotLight&&(o.type="spot",t.distance>0&&(o.range=t.distance),o.spot={},o.spot.innerConeAngle=(1-t.penumbra)*t.angle,o.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},s[this.name]=!0);const a=i.extensions[this.name].lights;a.push(o),e.extensions=e.extensions||{},e.extensions[this.name]={light:a.length-1}}}class $x{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},i[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class jx{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.clearcoatFactor=t.clearcoat,t.clearcoatMap){const o={index:await n.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(o,t.clearcoatMap),s.clearcoatTexture=o}if(s.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const o={index:await n.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,t.clearcoatRoughnessMap),s.clearcoatRoughnessTexture=o}if(t.clearcoatNormalMap){const o={index:await n.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(o.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(o,t.clearcoatNormalMap),s.clearcoatNormalTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class Zx{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const i=this.writer.extensionsUsed,s={};s.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class Kx{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.iridescenceFactor=t.iridescence,t.iridescenceMap){const o={index:await n.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(o,t.iridescenceMap),s.iridescenceTexture=o}if(s.iridescenceIor=t.iridescenceIOR,s.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],s.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const o={index:await n.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(o,t.iridescenceThicknessMap),s.iridescenceThicknessTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class Jx{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.transmissionFactor=t.transmission,t.transmissionMap){const o={index:await n.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(o,t.transmissionMap),s.transmissionTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class Qx{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.thicknessFactor=t.thickness,t.thicknessMap){const o={index:await n.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(o,t.thicknessMap),s.thicknessTexture=o}t.attenuationDistance!==1/0&&(s.attenuationDistance=t.attenuationDistance),s.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class ty{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const i=this.writer.extensionsUsed,s={};s.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class ey{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(Fx)&&!t.specularIntensityMap&&!t.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,s={};if(t.specularIntensityMap){const o={index:await n.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(o,t.specularIntensityMap),s.specularTexture=o}if(t.specularColorMap){const o={index:await n.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(o,t.specularColorMap),s.specularColorTexture=o}s.specularFactor=t.specularIntensity,s.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class ny{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const n=this.writer,i=n.extensionsUsed,s={};if(t.sheenRoughnessMap){const o={index:await n.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(o,t.sheenRoughnessMap),s.sheenRoughnessTexture=o}if(t.sheenColorMap){const o={index:await n.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(o,t.sheenColorMap),s.sheenColorTexture=o}s.sheenRoughnessFactor=t.sheenRoughness,s.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class iy{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,s={};if(t.anisotropyMap){const o={index:await n.processTextureAsync(t.anisotropyMap)};n.applyTextureTransform(o,t.anisotropyMap),s.anisotropyTexture=o}s.anisotropyStrength=t.anisotropy,s.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class ry{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,s={};s.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class sy{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const n=this.writer,i=n.extensionsUsed,s={};if(t.bumpMap){const o={index:await n.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(o,t.bumpMap),s.bumpTexture=o}s.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=s,i[this.name]=!0}}class oy{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const n=this.writer,i=t,s=new Float32Array(i.count*3),o=new Float32Array(i.count*4),a=new Float32Array(i.count*3),l=new ge,c=new q,h=new ii,f=new q;for(let u=0;u<i.count;u++)i.getMatrixAt(u,l),l.decompose(c,h,f),c.toArray(s,u*3),h.toArray(o,u*4),f.toArray(a,u*3);const p={TRANSLATION:n.processAccessor(new ye(s,3)),ROTATION:n.processAccessor(new ye(o,4)),SCALE:n.processAccessor(new ye(a,3))};i.instanceColor&&(p._COLOR_0=n.processAccessor(i.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:p},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}qs.Utils={insertKeyframe:function(r,t){const n=r.getValueSize(),i=new r.TimeBufferType(r.times.length+1),s=new r.ValueBufferType(r.values.length+n),o=r.createInterpolant(new r.ValueBufferType(n));let a;if(r.times.length===0){i[0]=t;for(let l=0;l<n;l++)s[l]=0;a=0}else if(t<r.times[0]){if(Math.abs(r.times[0]-t)<.001)return 0;i[0]=t,i.set(r.times,1),s.set(o.evaluate(t),0),s.set(r.values,n),a=0}else if(t>r.times[r.times.length-1]){if(Math.abs(r.times[r.times.length-1]-t)<.001)return r.times.length-1;i[i.length-1]=t,i.set(r.times,0),s.set(r.values,0),s.set(o.evaluate(t),r.values.length),a=i.length-1}else for(let l=0;l<r.times.length;l++){if(Math.abs(r.times[l]-t)<.001)return l;if(r.times[l]<t&&r.times[l+1]>t){i.set(r.times.slice(0,l+1),0),i[l+1]=t,i.set(r.times.slice(l+1),l+2),s.set(r.values.slice(0,(l+1)*n),0),s.set(o.evaluate(t),(l+1)*n),s.set(r.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return r.times=i,r.values=s,a},mergeMorphTargetTracks:function(r,t){const e=[],n={},i=r.tracks;for(let s=0;s<i.length;++s){let o=i[s];const a=se.parseTrackName(o.name),l=se.findNode(t,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){e.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(yd)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let f;if(n[l.uuid]===void 0){f=o.clone();const u=new f.ValueBufferType(c*f.times.length);for(let g=0;g<f.times.length;g++)u[g*c+h]=f.values[g];f.name=(a.nodeName||"")+".morphTargetInfluences",f.values=u,n[l.uuid]=f,e.push(f);continue}const p=o.createInterpolant(new o.ValueBufferType(1));f=n[l.uuid];for(let u=0;u<f.times.length;u++)f.values[u*c+h]=p.evaluate(f.times[u]);for(let u=0;u<o.times.length;u++){const g=this.insertKeyframe(f,o.times[u]);f.values[g*c+h]=o.values[u]}}return r.tracks=e,r},toFloat32BufferAttribute:function(r){const t=new ye(new Float32Array(r.count*r.itemSize),r.itemSize,!1);if(!r.normalized&&!r.isInterleavedBufferAttribute)return t.array.set(r.array),t;for(let e=0,n=r.count;e<n;e++)for(let i=0;i<r.itemSize;i++)t.setComponent(e,i,r.getComponent(e,i));return t}};class ay{parse(t){let e="",n=0,i=0,s=0;const o=new q,a=new Qt,l=new q,c=new wt,h=[];function f(g){let _=0,m=0,d=0;const y=g.geometry,x=new Wt,v=y.getAttribute("position"),E=y.getAttribute("normal"),A=y.getAttribute("uv"),T=y.getIndex();if(e+="o "+g.name+`
`,g.material&&g.material.name&&(e+="usemtl "+g.material.name+`
`),v!==void 0)for(let P=0,S=v.count;P<S;P++,_++)o.fromBufferAttribute(v,P),o.applyMatrix4(g.matrixWorld),e+="v "+o.x+" "+o.y+" "+o.z+`
`;if(A!==void 0)for(let P=0,S=A.count;P<S;P++,d++)c.fromBufferAttribute(A,P),e+="vt "+c.x+" "+c.y+`
`;if(E!==void 0){x.getNormalMatrix(g.matrixWorld);for(let P=0,S=E.count;P<S;P++,m++)l.fromBufferAttribute(E,P),l.applyMatrix3(x).normalize(),e+="vn "+l.x+" "+l.y+" "+l.z+`
`}if(T!==null)for(let P=0,S=T.count;P<S;P+=3){for(let w=0;w<3;w++){const D=T.getX(P+w)+1;h[w]=n+D+(E||A?"/"+(A?i+D:"")+(E?"/"+(s+D):""):"")}e+="f "+h.join(" ")+`
`}else for(let P=0,S=v.count;P<S;P+=3){for(let w=0;w<3;w++){const D=P+w+1;h[w]=n+D+(E||A?"/"+(A?i+D:"")+(E?"/"+(s+D):""):"")}e+="f "+h.join(" ")+`
`}n+=_,i+=d,s+=m}function p(g){let _=0;const m=g.geometry,d=g.type,y=m.getAttribute("position");if(e+="o "+g.name+`
`,y!==void 0)for(let x=0,v=y.count;x<v;x++,_++)o.fromBufferAttribute(y,x),o.applyMatrix4(g.matrixWorld),e+="v "+o.x+" "+o.y+" "+o.z+`
`;if(d==="Line"){e+="l ";for(let x=1,v=y.count;x<=v;x++)e+=n+x+" ";e+=`
`}if(d==="LineSegments")for(let x=1,v=x+1,E=y.count;x<E;x+=2,v=x+1)e+="l "+(n+x)+" "+(n+v)+`
`;n+=_}function u(g){let _=0;const m=g.geometry,d=m.getAttribute("position"),y=m.getAttribute("color");if(e+="o "+g.name+`
`,d!==void 0){for(let x=0,v=d.count;x<v;x++,_++)o.fromBufferAttribute(d,x),o.applyMatrix4(g.matrixWorld),e+="v "+o.x+" "+o.y+" "+o.z,y!==void 0&&(a.fromBufferAttribute(y,x),ie.workingToColorSpace(a,Oe),e+=" "+a.r+" "+a.g+" "+a.b),e+=`
`;e+="p ";for(let x=1,v=d.count;x<=v;x++)e+=n+x+" ";e+=`
`}n+=_}return t.traverse(function(g){g.isMesh===!0&&f(g),g.isLine===!0&&p(g),g.isPoints===!0&&u(g)}),e}}class ly{parse(t,e,n={}){function i(x){t.traverse(function(v){if(v.isMesh===!0||v.isPoints){const E=v,A=E.geometry;A.hasAttribute("position")===!0&&x(E,A)}})}n=Object.assign({binary:!1,excludeAttributes:[],littleEndian:!1},n);const o=n.excludeAttributes;let a=!0,l=!1,c=!1,h=!1,f=0,p=0;t.traverse(function(x){if(x.isMesh===!0){const E=x.geometry,A=E.getAttribute("position"),T=E.getAttribute("normal"),P=E.getAttribute("uv"),S=E.getAttribute("color"),w=E.getIndex();if(A===void 0)return;f+=A.count,p+=w?w.count/3:A.count/3,T!==void 0&&(l=!0),P!==void 0&&(h=!0),S!==void 0&&(c=!0)}else if(x.isPoints){const E=x.geometry,A=E.getAttribute("position"),T=E.getAttribute("normal"),P=E.getAttribute("color");f+=A.count,T!==void 0&&(l=!0),P!==void 0&&(c=!0),a=!1}});const u=new Qt;if(a=a&&o.indexOf("index")===-1,l=l&&o.indexOf("normal")===-1,c=c&&o.indexOf("color")===-1,h=h&&o.indexOf("uv")===-1,a&&p!==Math.floor(p))return console.error("PLYExporter: Failed to generate a valid PLY file with triangle indices because the number of indices is not divisible by 3."),null;const g=4;let _=`ply
format ${n.binary?n.littleEndian?"binary_little_endian":"binary_big_endian":"ascii"} 1.0
element vertex ${f}
property float x
property float y
property float z
`;l===!0&&(_+=`property float nx
property float ny
property float nz
`),h===!0&&(_+=`property float s
property float t
`),c===!0&&(_+=`property uchar red
property uchar green
property uchar blue
`),a===!0&&(_+=`element face ${p}
property list uchar int vertex_index
`),_+=`end_header
`;const m=new q,d=new Wt;let y=null;if(n.binary===!0){const x=new TextEncoder().encode(_),v=f*(12+(l?12:0)+(c?3:0)+(h?8:0)),E=a?p*(g*3+1):0,A=new DataView(new ArrayBuffer(x.length+v+E));new Uint8Array(A.buffer).set(x,0);let T=x.length,P=x.length+v,S=0;i(function(w,D){const R=D.getAttribute("position"),U=D.getAttribute("normal"),b=D.getAttribute("uv"),F=D.getAttribute("color"),$=D.getIndex();d.getNormalMatrix(w.matrixWorld);for(let V=0,J=R.count;V<J;V++)m.fromBufferAttribute(R,V),m.applyMatrix4(w.matrixWorld),A.setFloat32(T,m.x,n.littleEndian),T+=4,A.setFloat32(T,m.y,n.littleEndian),T+=4,A.setFloat32(T,m.z,n.littleEndian),T+=4,l===!0&&(U!=null?(m.fromBufferAttribute(U,V),m.applyMatrix3(d).normalize(),A.setFloat32(T,m.x,n.littleEndian),T+=4,A.setFloat32(T,m.y,n.littleEndian),T+=4,A.setFloat32(T,m.z,n.littleEndian),T+=4):(A.setFloat32(T,0,n.littleEndian),T+=4,A.setFloat32(T,0,n.littleEndian),T+=4,A.setFloat32(T,0,n.littleEndian),T+=4)),h===!0&&(b!=null?(A.setFloat32(T,b.getX(V),n.littleEndian),T+=4,A.setFloat32(T,b.getY(V),n.littleEndian),T+=4):(A.setFloat32(T,0,n.littleEndian),T+=4,A.setFloat32(T,0,n.littleEndian),T+=4)),c===!0&&(F!=null?(u.fromBufferAttribute(F,V),ie.workingToColorSpace(u,Oe),A.setUint8(T,Math.floor(u.r*255)),T+=1,A.setUint8(T,Math.floor(u.g*255)),T+=1,A.setUint8(T,Math.floor(u.b*255)),T+=1):(A.setUint8(T,255),T+=1,A.setUint8(T,255),T+=1,A.setUint8(T,255),T+=1));if(a===!0)if($!==null)for(let V=0,J=$.count;V<J;V+=3)A.setUint8(P,3),P+=1,A.setUint32(P,$.getX(V+0)+S,n.littleEndian),P+=g,A.setUint32(P,$.getX(V+1)+S,n.littleEndian),P+=g,A.setUint32(P,$.getX(V+2)+S,n.littleEndian),P+=g;else for(let V=0,J=R.count;V<J;V+=3)A.setUint8(P,3),P+=1,A.setUint32(P,S+V,n.littleEndian),P+=g,A.setUint32(P,S+V+1,n.littleEndian),P+=g,A.setUint32(P,S+V+2,n.littleEndian),P+=g;S+=R.count}),y=A.buffer}else{let x=0,v="",E="";i(function(A,T){const P=T.getAttribute("position"),S=T.getAttribute("normal"),w=T.getAttribute("uv"),D=T.getAttribute("color"),R=T.getIndex();d.getNormalMatrix(A.matrixWorld);for(let U=0,b=P.count;U<b;U++){m.fromBufferAttribute(P,U),m.applyMatrix4(A.matrixWorld);let F=m.x+" "+m.y+" "+m.z;l===!0&&(S!=null?(m.fromBufferAttribute(S,U),m.applyMatrix3(d).normalize(),F+=" "+m.x+" "+m.y+" "+m.z):F+=" 0 0 0"),h===!0&&(w!=null?F+=" "+w.getX(U)+" "+w.getY(U):F+=" 0 0"),c===!0&&(D!=null?(u.fromBufferAttribute(D,U),ie.workingToColorSpace(u,Oe),F+=" "+Math.floor(u.r*255)+" "+Math.floor(u.g*255)+" "+Math.floor(u.b*255)):F+=" 255 255 255"),v+=F+`
`}if(a===!0){if(R!==null)for(let U=0,b=R.count;U<b;U+=3)E+=`3 ${R.getX(U+0)+x}`,E+=` ${R.getX(U+1)+x}`,E+=` ${R.getX(U+2)+x}
`;else for(let U=0,b=P.count;U<b;U+=3)E+=`3 ${x+U} ${x+U+1} ${x+U+2}
`;p+=R?R.count/3:P.count/3}x+=P.count}),y=`${_}${v}${a?`${E}
`:`
`}`}return typeof e=="function"&&requestAnimationFrame(()=>e(y)),y}}class cy{parse(t,e={}){e=Object.assign({binary:!1},e);const n=e.binary,i=[];let s=0;t.traverse(function(d){if(d.isMesh){const y=d.geometry,x=y.index,v=y.getAttribute("position");s+=x!==null?x.count/3:v.count/3,i.push({object3d:d,geometry:y})}});let o,a=80;if(n===!0){const d=s*2+s*3*4*4+80+4,y=new ArrayBuffer(d);o=new DataView(y),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new q,c=new q,h=new q,f=new q,p=new q,u=new q;for(let d=0,y=i.length;d<y;d++){const x=i[d].object3d,v=i[d].geometry,E=v.index,A=v.getAttribute("position");if(E!==null)for(let T=0;T<E.count;T+=3){const P=E.getX(T+0),S=E.getX(T+1),w=E.getX(T+2);g(P,S,w,A,x)}else for(let T=0;T<A.count;T+=3){const P=T+0,S=T+1,w=T+2;g(P,S,w,A,x)}}return n===!1&&(o+=`endsolid exported
`),o;function g(d,y,x,v,E){l.fromBufferAttribute(v,d),c.fromBufferAttribute(v,y),h.fromBufferAttribute(v,x),E.isSkinnedMesh===!0&&(E.applyBoneTransform(d,l),E.applyBoneTransform(y,c),E.applyBoneTransform(x,h)),l.applyMatrix4(E.matrixWorld),c.applyMatrix4(E.matrixWorld),h.applyMatrix4(E.matrixWorld),_(l,c,h),m(l),m(c),m(h),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function _(d,y,x){f.subVectors(x,y),p.subVectors(d,y),f.cross(p).normalize(),u.copy(f).normalize(),n===!0?(o.setFloat32(a,u.x,!0),a+=4,o.setFloat32(a,u.y,!0),a+=4,o.setFloat32(a,u.z,!0),a+=4):(o+="	facet normal "+u.x+" "+u.y+" "+u.z+`
`,o+=`		outer loop
`)}function m(d){n===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):o+="			vertex "+d.x+" "+d.y+" "+d.z+`
`}}}class cu extends Js{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth===void 0&&(e.depth=50),e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}function uu(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new sn;let c=0;for(let h=0;h<r.length;++h){const f=r[h];let p=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;s[u]===void 0&&(s[u]=[]),s[u].push(f.attributes[u]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in f.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0;const f=[];for(let p=0;p<r.length;++p){const u=r[p].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+h);h+=r[p].attributes.position.count}l.setIndex(f)}for(const h in s){const f=hu(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in o){const f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<f;++p){const u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][p]);const g=hu(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function hu(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new ye(o,e,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let p=0,u=h.count;p<u;p++)for(let g=0;g<e;g++){const _=h.getComponent(p,g);a.setComponent(p+f,g,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}class fu extends Pl{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new om(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new uy(t)}}class uy{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=hy(t,e,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function hy(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const f=fy(h,i,a,l,e);a+=f.offsetX,o.push(f.path)}}return o}function fy(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new vm;let a,l,c,h,f,p,u,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=_.length;m<d;)switch(_[m++]){case"m":a=_[m++]*t+e,l=_[m++]*t+n,o.moveTo(a,l);break;case"l":a=_[m++]*t+e,l=_[m++]*t+n,o.lineTo(a,l);break;case"q":c=_[m++]*t+e,h=_[m++]*t+n,f=_[m++]*t+e,p=_[m++]*t+n,o.quadraticCurveTo(f,p,c,h);break;case"b":c=_[m++]*t+e,h=_[m++]*t+n,f=_[m++]*t+e,p=_[m++]*t+n,u=_[m++]*t+e,g=_[m++]*t+n,o.bezierCurveTo(f,p,u,g,c,h);break}}return{offsetX:s.ha*t,path:o}}class dy{scene;meshes={};meshesPosition={};qrCodeData=null;texts={};camera=null;constructor(t){this.scene=new Vs,this.scene.background=new Qt(t)}createCube(t,e,n,i,s,o,a,l){const c=new kn(i,s,o),h=new Tl({color:a}),f=new Fe(c,h);f.position.set(t,e,n);const p=new Bo(c),u=new ms(p,new Ds({color:0}));return f.add(u),this.scene.add(f),l&&(this.meshes[l]=f,this.meshesPosition[l]=[t,e,n]),f}createText(t,e,n,i,s,o,a,l){new fu().load(ql("/fonts/helvetiker_regular.typeface.json"),h=>{const f=new cu(l,{font:h,size:o,depth:s,curveSegments:12,bevelEnabled:!1});f.computeBoundingBox();const p=new pr({color:a}),u=f.boundingBox;if(u===null)return;const g=-.5*(u.max.x-u.min.x),_=-.5*(u.max.y-u.min.y),m=new Fe(f,p);m.position.set(e+g,n+_,i),this.scene.add(m),this.meshes[t]=m,this.meshesPosition[t]=[e,n,i],this.texts[t]=l})}createQRCode(t,e,n,i,s,o,a){const l=Math.sqrt(a.length),c=s/l,h=c*l,f=-h/2+c/2,p=h/2-c/2,u=[];for(let d=0;d<l;d++)for(let y=0;y<l;y++)if(a[d*l+y]==1){const x=new kn(c,c,o);x.translate(f+y*c,p-d*c,o/2),u.push(x)}const g=uu(u,!1),_=new pr({color:0}),m=new Fe(g,_);m.position.set(e,n,i),this.scene.add(m),this.meshes[t]=m,this.meshesPosition[t]=[e,n,i]}createArcGeometry(t,e,n,i,s){const o=new Ar;o.absarc(0,0,t,i,s,!1),o.lineTo((t-e)*Math.cos(s),(t-e)*Math.sin(s)),o.absarc(0,0,t-e,s,i,!0),o.lineTo(t*Math.cos(i),t*Math.sin(i));const a={depth:n,bevelEnabled:!1};return new Js(o,a)}createArc(t,e,n,i,s,o){const a=this.createArcGeometry(t,e,n,i,s),l=new pr({color:o}),c=new Fe(a,l);return c.position.set(0,0,0),c}createCircleGeometry(t,e){return new Al(t,t,e,50,1,!1)}createCircle(t,e,n){const i=this.createCircleGeometry(t,e),s=new pr({color:n});return new Fe(i,s)}createWifiIcon(t,e,n,i,s,o){const a=this.createArc(s,1,o,Math.PI*.25,Math.PI*.75,0),l=this.createArc(s*.6,1,o,Math.PI*.25,Math.PI*.75,0),c=this.createCircle(1,o,0);c.rotateX(Math.PI/2),c.position.set(0,0,o/2);const h=new xr;h.add(a,l,c),h.position.set(e,n,i),this.scene.add(h),this.meshes[t]=h,this.meshesPosition[t]=[e,n,i]}createSlotedStand(){if(Object.keys(this.meshes).includes("slotedStand")&&this.scene.children.includes(this.meshes.slotedStand))return;const t=this.meshes.stand;t.updateMatrix();const e=this.meshes.card;e.updateMatrix();const n=Me.subtract(t,e),i=new Bo(n.geometry),s=new ms(i,new Ds({color:0}));n.add(s),this.scene.add(n),this.meshes.slotedStand=n}setObjectAngle(t,e,n,i){this.meshes[t].rotation.set(Math.PI*e/180,Math.PI*n/180,Math.PI*i/180)}setObjectPosition(t,e,n,i,s=!1){const o=this.meshes[t];if(!o)return;let a=0,l=0;if(s){const c=o.geometry;c.computeBoundingBox();const h=c.boundingBox;if(h===null)return;a=-.5*(h.max.x-h.min.x),l=-.5*(h.max.y-h.min.y)}e=e===null?o.position.x:e,n=n===null?o.position.y:n,i=i===null?o.position.z:i,o.position.set(e+a,n+l,i),this.meshesPosition[t]=[e,n,i]}setObjectOffset(t,e,n,i){const s=this.meshes[t],o=this.meshesPosition[t];s.position.set(o[0]+e,o[1]+n,o[2]+i)}setObjectDimension(t,e,n,i){const s=this.meshes[t];if(s.isMesh){const o=s;let a=null;if(o.geometry instanceof kn){a=new kn(e,n,i);const l=new Bo(a),c=new ms(l,new Ds({color:0}));o.children.filter(h=>h instanceof ms).forEach(h=>{o.remove(h),h.geometry.dispose()}),o.add(c)}a&&(o.geometry.dispose(),o.geometry=a)}}resizeQRCode(t){this.scene.remove(this.meshes.qrcode),this.createQRCode("qrcode",0,5,1,t,1,this.qrCodeData)}resizeText(t,e){new fu().load(ql("/fonts/helvetiker_regular.typeface.json"),i=>{const s=new cu(this.texts[t],{font:i,size:e,depth:1,curveSegments:12,bevelEnabled:!1}),[o,a,l]=this.meshesPosition[t];s.computeBoundingBox();const c=s.boundingBox;if(c===null)return;const h=o-.5*(c.max.x-c.min.x),f=a-.5*(c.max.y-c.min.y),p=this.meshes[t];p.position.set(h,f,l),p.geometry.dispose(),p.geometry=s})}resizeIcon(t){const e=this.meshes.wifiIcon.children.map(n=>n);e[0].geometry=this.createArcGeometry(t,t/6,1,Math.PI*.25,Math.PI*.75),e[1].geometry=this.createArcGeometry(t*.6,t/6,1,Math.PI*.25,Math.PI*.75),e[2].geometry=this.createCircleGeometry(t/7,1)}hideObject(t){Object.keys(this.meshes).includes(t)&&this.scene.remove(this.meshes[t])}showObject(t){this.scene.add(this.meshes[t])}generateModel=(t,e)=>{this.qrCodeData=e,this.createCube(0,0,0,50,75,2,16777215,"card"),this.createText("ssidText",0,30,1,1,5,0,t),this.createQRCode("qrcode",0,5,1,40,1,e),this.createWifiIcon("wifiIcon",0,-25,1,6,1),this.createCube(0,-38,0,50,5,50,16777215,"stand"),this.setObjectAngle("stand",15,0,0)};render(t){const e=new cn(75,t.clientWidth/t.clientHeight,.1,1e3);e.position.z=75;const n=new nx({canvas:t});n.setSize(t.clientWidth,t.clientHeight);const i=new Ex(e,n.domElement),s=this.scene;function o(){requestAnimationFrame(o),i.update(),n.render(s,e)}o()}exportModel(t,e){return new Promise((n,i)=>{switch(e){case De.GLTF:new qs().parse(t,a=>{const l=new Blob([a],{type:"application/octet-stream"});n(l)},a=>{i(new Error(a.message))},{binary:!0});break;case De.OBJ:const s=new ay().parse(t);n(new Blob([s],{type:"application/octet-stream"}));break;case De.PLY:new ly().parse(t,a=>{const l=new Blob([a],{type:"application/octet-stream"});n(l)},{binary:!0});break;case De.STL:const o=new cy().parse(t,{binary:!0});n(new Blob([o],{type:"application/octet-stream"}));break;case De._3MF:n(dx(t));break;default:i(new Error("Unsupported format"))}})}exportStand(t){this.createSlotedStand(),this.scene.remove(this.meshes.slotedStand),this.meshes.slotedStand.rotation.set(0,0,0),this.meshes.slotedStand.updateMatrix();const e=this.exportModel(this.meshes.slotedStand,t);return delete this.meshes.slotedStand,e}getContentModel(t=0){const e=this.meshes.ssidText.geometry.clone();e.translate(...this.meshes.ssidText.position.toArray());const n=this.meshes.qrcode.geometry.clone();n.translate(...this.meshes.qrcode.position.toArray()),this.meshes.wifiIcon.position;const i=this.meshes.wifiIcon.children.map(a=>{const l=a.geometry.clone();return l.applyMatrix4(a.matrixWorld),l}),s=uu([e,n,...i].map(a=>a.index?a.toNonIndexed():a)),o=new pr({color:t});return new Fe(s,o)}exportCardContent(t){const e=new Vs;return e.add(this.meshes.card.clone()),e.add(this.getContentModel()),this.exportModel(e,t)}async createZip(t){const e=new eh;for(const i of t)e.file(i.name,i.blob);return await e.generateAsync({type:"blob"})}async export(t,e){let n;switch(t){case De.GLTF:n="gltf";break;case De.OBJ:n="obj";break;case De.PLY:n="ply";break;case De.STL:n="stl";break;case De._3MF:n="3mf";break}let i=[];switch(e){case Fn.Separate:const s=await this.exportModel(this.meshes.card,t),o=await this.exportModel(this.getContentModel(),t),a=await this.exportStand(t);i=[{name:`card.${n}`,blob:s},{name:`content.${n}`,blob:o},{name:`stand.${n}`,blob:a}];break;case Fn.CardContentAndStand:const l=await this.exportCardContent(t),c=await this.exportStand(t);i=[{name:`card-and-content.${n}`,blob:l},{name:`stand.${n}`,blob:c}];break;case Fn.Single:const h=await this.exportModel(this.scene,t);i=[{name:`model.${n}`,blob:h}];break}return await this.createZip(i)}}const pn=Ys(nn.WifiInfo),eo=Ys(null),dl=Ys(null),pl=Ys();var py=Te("<option> </option>"),my=Te('<div class="mt-2 flex flex-col text-xl"><label> </label> <select class="mt-1 rounded-lg bg-white px-2 py-1"></select></div>');function du(r,t){let e=oe(t,"id",8),n=oe(t,"label",8),i=oe(t,"items",8),s=oe(t,"value",12);var o=my(),a=Jt(o),l=Jt(a,!0);Zt(a);var c=Bt(a,2);qe(()=>{s(),ju(()=>{e(),i()})}),Nf(c,5,i,Lf,(h,f)=>{var p=py(),u=Jt(p,!0);Zt(p);var g={};qe(()=>{yi(u,(nt(f),Re(()=>nt(f).label))),g!==(g=(nt(f),Re(()=>nt(f).value)))&&(p.value=(p.__value=(nt(f),Re(()=>nt(f).value)))??"")}),le(h,p)}),Zt(c),Zt(o),qe(()=>{he(a,"for",e()),yi(l,n()),he(c,"id",e())}),Ju(c,s),le(r,o)}var gy=(r,t)=>Tn(pn,nn.ModelPreview),_y=Te('<div class="flex h-full w-full flex-col lg:grid lg:grid-cols-2"><canvas class="mx-auto lg:m-auto" width="500" height="500"></canvas> <div class="mx-auto mt-5 flex flex-col lg:mx-0 lg:my-auto lg:h-[500px] lg:w-7/12"><h2 class="text-2xl font-bold">Export:</h2> <!> <!></div> <div class="mx-auto mt-10 lg:col-span-2"><button class="ml-0 w-48 rounded-lg bg-gray-500 px-2 py-1 text-2xl text-white hover:bg-gray-500/50 lg:ml-auto">Back</button> <button class="ml-4 w-56 rounded-lg bg-blue-600 px-2 py-1 text-2xl text-white hover:bg-blue-600/50">Download Model</button></div></div>');function vy(r,t){Br(t,!1);const e=()=>hn(pl,"$modelRenderer",i),n=()=>hn(pn,"$currentPageStore",i),[i,s]=Hr(),o={GLTF:De.GLTF,OBJ:De.OBJ,PLY:De.PLY,STL:De.STL,"3MF":De._3MF};let a=ee();const l=v=>{v&&e().render(v)};let c=ee(De._3MF),h=ee(Fn.CardContentAndStand);const f=async()=>{const v=await e().export(nt(c),nt(h)),E=document.createElement("a");document.body.appendChild(E),E.style="display: none";const A=window.URL.createObjectURL(v);E.href=A,E.download="3d-wifi-qrcode.zip",E.click(),window.URL.revokeObjectURL(A),document.body.removeChild(E)};Ce(()=>nt(a),()=>{l(nt(a))}),gl(),Vr();var p=_y(),u=Jt(p);_l(u,v=>ne(a,v),()=>nt(a));var g=Bt(u,2),_=Bt(Jt(g),2);{let v=we(()=>Re(()=>Object.keys(o).map(E=>({label:E,value:o[E]}))));du(_,{id:"format-select",label:"Export Format:",get items(){return nt(v)},get value(){return nt(c)},set value(E){ne(c,E)},$$legacy:!0})}var m=Bt(_,2);{let v=we(()=>(Cf(Fn),Re(()=>[{label:"Separate Models",value:Fn.Separate},{label:"Base with Content and Stand",value:Fn.CardContentAndStand},{label:"Single Model",value:Fn.Single}])));du(m,{id:"parts-select",label:"Models:",get items(){return nt(v)},get value(){return nt(h)},set value(E){ne(h,E)},$$legacy:!0})}Zt(g);var d=Bt(g,2),y=Jt(d);y.__click=[gy,n];var x=Bt(y,2);x.__click=f,Zt(d),Zt(p),le(r,p),zr(),s()}Gr(["click"]);var xy=kr('<svg viewBox="0 0 33 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.1667 9.16666H5.83332C5.12608 9.16666 4.4478 9.07008 3.9477 8.89818C3.44761 8.72627 3.16666 8.49311 3.16666 8.25V2.74999C3.16666 2.50688 3.44761 2.27372 3.9477 2.10181C4.4478 1.92991 5.12608 1.83333 5.83332 1.83333H27.1667C27.8739 1.83333 28.5522 1.92991 29.0523 2.10181C29.5524 2.27372 29.8333 2.50688 29.8333 2.74999V8.25C29.8333 8.49311 29.5524 8.72627 29.0523 8.89818C28.5522 9.07008 27.8739 9.16666 27.1667 9.16666Z" fill="white"></path></svg>');function yy(r,t){let e=oe(t,"width",8,32),n=oe(t,"height",8,32);var i=xy();qe(()=>{he(i,"width",e()),he(i,"height",n())}),le(r,i)}var by=kr('<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6667 5.33333V26.6667C26.6667 27.3739 26.3857 28.0522 25.8856 28.5523C25.3855 29.0524 24.7073 29.3333 24 29.3333H8.00001C7.29277 29.3333 6.61449 29.0524 6.11439 28.5523C5.61429 28.0522 5.33334 27.3739 5.33334 26.6667L5.33334 5.33333C5.33334 4.62608 5.61429 3.94781 6.11439 3.44771C6.61449 2.94761 7.29277 2.66666 8.00001 2.66666H24C24.7073 2.66666 25.3855 2.94761 25.8856 3.44771C26.3857 3.94781 26.6667 4.62608 26.6667 5.33333Z" fill="white"></path></svg>');function My(r,t){let e=oe(t,"width",8,32),n=oe(t,"height",8,32);var i=by();qe(()=>{he(i,"width",e()),he(i,"height",n())}),le(r,i)}var Sy=kr('<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0V11.0769H11.0769V0H0ZM13.5385 0V2.46154H16V0H13.5385ZM16 2.46154V4.92308H13.5385V9.84615H16V7.38462H18.4615V2.46154H16ZM16 9.84615V13.5385H4.92308V16H2.46154V18.4615H7.38462V16H9.84615V18.4615H16V16H18.4615V18.4615H22.1538V16H24.6154V13.5385H18.4615V9.84615H16ZM24.6154 16V18.4615H32V16H29.5385V13.5385H27.0769V16H24.6154ZM2.46154 16V13.5385H0V16H2.46154ZM20.9231 0V11.0769H32V0H20.9231ZM2.46154 2.46154H8.61538V8.61538H2.46154V2.46154ZM23.3846 2.46154H29.5385V8.61538H23.3846V2.46154ZM3.69231 3.69231V7.38462H7.38462V3.69231H3.69231ZM24.6154 3.69231V7.38462H28.3077V3.69231H24.6154ZM13.5385 19.6923V22.1538H16V19.6923H13.5385ZM16 22.1538V24.6154H13.5385V29.5385H16V27.0769H20.9231V24.6154H23.3846V22.1538H25.8462V24.6154H23.3846V27.0769H20.9231V32H23.3846V29.5385H25.8462V27.0769H27.0769V29.5385H25.8462V32H28.3077V29.5385H29.5385V27.0769H32V22.1538H29.5385V19.6923H20.9231V22.1538H16ZM29.5385 29.5385V32H32V29.5385H29.5385ZM16 29.5385V32H18.4615V29.5385H16ZM0 20.9231V32H11.0769V20.9231H0ZM2.46154 23.3846H8.61538V29.5385H2.46154V23.3846ZM3.69231 24.6154V28.3077H7.38462V24.6154H3.69231Z" fill="white"></path></svg>');function Ey(r,t){let e=oe(t,"width",8,32),n=oe(t,"height",8,32);var i=Sy();qe(()=>{he(i,"width",e()),he(i,"height",n())}),le(r,i)}var wy=Te('<div class="mt-2 flex"><label class="text-xl"> </label> <input class="my-auto ml-2 h-6 w-6" type="checkbox"/></div>');function pu(r,t){let e=oe(t,"id",8),n=oe(t,"label",8),i=oe(t,"checked",12);var s=wy(),o=Jt(s),a=Jt(o,!0);Zt(o);var l=Bt(o,2);xi(l),Zt(s),qe(()=>{he(o,"for",e()),yi(a,n()),he(l,"id",e())}),Qu(l,i),le(r,s)}var Ty=kr('<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.272 21.414C3.64706 21.7889 4.15568 21.9996 4.686 21.9996C5.21633 21.9996 5.72495 21.7889 6.1 21.414L16 11.514L25.9 21.414C26.2772 21.7783 26.7824 21.9799 27.3068 21.9754C27.8312 21.9708 28.3328 21.7605 28.7036 21.3896C29.0745 21.0188 29.2848 20.5172 29.2894 19.9928C29.2939 19.4684 29.0923 18.9632 28.728 18.586L17.414 7.272C17.0389 6.89706 16.5303 6.68643 16 6.68643C15.4697 6.68643 14.9611 6.89706 14.586 7.272L3.272 18.586C2.89706 18.9611 2.68643 19.4697 2.68643 20C2.68643 20.5303 2.89706 21.0389 3.272 21.414Z" fill="black"></path></svg>');function Ay(r,t){let e=oe(t,"width",8,32),n=oe(t,"height",8,32);var i=Ty();qe(()=>{he(i,"width",e()),he(i,"height",n())}),le(r,i)}var Cy=(r,t)=>ne(t,!nt(t)),Ry=Te('<div class="flex w-[400px] flex-col"><button class="mt-2 flex cursor-pointer justify-between"><h3 class="text-xl font-bold"> </h3> <div class="my-auto"><!></div></button> <!></div>');function mr(r,t){let e=oe(t,"title",8),n=ee(!1);var i=Ry(),s=Jt(i);s.__click=[Cy,n];var o=Jt(s),a=Jt(o,!0);Zt(o);var l=Bt(o,2),c=Jt(l);Ay(c,{width:24,height:24}),Zt(l),Zt(s);var h=Bt(s,2);{var f=p=>{var u=As(),g=tn(u);If(g,t,"default",{}),le(p,u)};_r(h,p=>{nt(n)||p(f)})}Zt(i),qe(()=>{yi(a,e()),Bf(l,`transform: rotate(${nt(n)?0:180}deg)`)}),le(r,i)}Gr(["click"]);var Py=Te('<div class="mt-2 flex"><label class="my-auto text-xl"> </label> <input class="ml-2 w-12 rounded-lg bg-white px-1 py-1 text-center" type="number"/> <span class="my-auto ml-2 text-xl"> </span></div>');function di(r,t){let e=oe(t,"id",8),n=oe(t,"label",8),i=oe(t,"value",12),s=oe(t,"min",8,void 0),o=oe(t,"max",8,void 0),a=oe(t,"step",8,1),l=oe(t,"unit",8,void 0);var c=Py(),h=Jt(c),f=Jt(h,!0);Zt(h);var p=Bt(h,2);xi(p);var u=Bt(p,2),g=Jt(u,!0);Zt(u),Zt(c),qe(()=>{he(h,"for",e()),yi(f,n()),he(p,"id",e()),he(p,"min",s()),he(p,"max",o()),he(p,"step",a()),yi(g,l())}),Cr(p,i),le(r,c)}var Iy=Te('<div class="mt-2"><label class="text-xl"> </label> <div class="flex"><input class="w-[calc(100%-72px)]" type="range"/> <input class="ml-2 w-16 rounded-lg bg-white px-1 py-1 text-center" type="number"/></div></div>');function Qe(r,t){let e=oe(t,"id",8),n=oe(t,"label",8),i=oe(t,"value",12),s=oe(t,"min",8,void 0),o=oe(t,"max",8,void 0),a=oe(t,"step",8,void 0);var l=Iy(),c=Jt(l),h=Jt(c,!0);Zt(c);var f=Bt(c,2),p=Jt(f);xi(p);var u=Bt(p,2);xi(u),Zt(f),Zt(l),qe(()=>{he(c,"for",e()),yi(h,n()),he(p,"id",e()),he(p,"min",s()),he(p,"max",o()),he(p,"step",a()),he(u,"id",`${e()}-number`),he(u,"min",s()),he(u,"max",o()),he(u,"step",a())}),Cr(p,i),Cr(u,i),le(r,l)}const Ly=(r,t)=>{Tn(pn,nn.QRPreview)},Dy=(r,t)=>{Tn(pn,nn.ExportOptions)};var Ny=(r,t)=>ne(t,!nt(t)),Uy=(r,t)=>ne(t,!nt(t)),Oy=(r,t)=>ne(t,!nt(t)),Fy=Te("<!> <!> <!> <!> <!> <!> <!>",1),By=Te("<!> <!> <!>",1),zy=Te("<!> <!> <!>",1),ky=Te("<!> <!> <!> <!>",1),Hy=Te("<!> <!> <!> <!> <!>",1),Vy=Te('<div class="flex h-full w-full flex-col lg:grid lg:grid-cols-2"><div class="flex flex-col items-center justify-center"><canvas width="450" height="450"></canvas> <div class="mt-4 flex"><button><!></button> <button><!></button> <button><!></button></div></div> <div class="mx-auto mt-5 flex flex-col lg:mx-0 lg:my-auto lg:mt-0 lg:max-h-[500px] lg:overflow-y-auto"><h2 class="text-2xl font-bold">3D Model Options:</h2> <!> <!> <!> <!> <!></div> <div class="col-span-2 mx-auto mt-6"><button class="ml-auto w-48 rounded-lg bg-gray-500 px-2 py-1 text-2xl text-white hover:bg-gray-500/50">Back</button> <button class="ml-4 w-48 rounded-lg bg-blue-600 px-2 py-1 text-2xl text-white hover:bg-blue-600/50">Next</button></div></div>');function Gy(r,t){Br(t,!1);const e=()=>hn(pl,"$modelRenderer",o),n=()=>hn(pn,"$currentPageStore",o),i=()=>hn(eo,"$wifiInfoStore",o),s=()=>hn(dl,"$qrCodeData",o),[o,a]=Hr();let l=ee(),c=ee(75),h=ee(0),f=ee(-38),p=ee(0),u=ee(50),g=ee(5),_=ee(30),m=ee(50),d=ee(75),y=ee(2),x=ee(40),v=ee(0),E=ee(5),A=ee(5),T=ee(0),P=ee(30),S=ee(6),w=ee(0),D=ee(0),R=ee(-25),U=ee(!0),b=ee(!0),F=ee(!0),$=ee(!0),V=ee(!0);const J=(W,I,C)=>{!W||I===null||C===null||(Tn(pl,new dy(8947848)),e().generateModel(I.ssid,C),e().render(W))},tt=(W,I,C)=>{e()&&(e().setObjectDimension("card",W,I,C),e().setObjectPosition("ssidText",null,null,C/2),e().setObjectPosition("qrcode",null,null,C/2),e().setObjectPosition("wifiIcon",null,null,C/2))},ut=(W,I)=>{e()&&(I?e().showObject(W):e().hideObject(W))},X=(W,I)=>{e()&&(ut("qrcode",W),ut("ssidText",W),ut("wifiIcon",W),ut("card",I))},Z=(W,I)=>{e()&&(I?I&&!W?(e().hideObject("stand"),e().createSlotedStand()):(e().hideObject("slotedStand"),e().showObject("stand")):(e().hideObject("stand"),e().hideObject("slotedStand")))};Ce(()=>(nt(l),i(),s()),()=>{J(nt(l),i(),s())}),Ce(()=>(e(),nt(c)),()=>{e()?.setObjectAngle("stand",90-nt(c),0,0)}),Ce(()=>(nt(m),nt(d),nt(y)),()=>{tt(nt(m),nt(d),nt(y))}),Ce(()=>(e(),nt(u),nt(g),nt(_)),()=>{e()?.setObjectDimension("stand",nt(u),nt(g),nt(_))}),Ce(()=>(e(),nt(x)),()=>{e()?.resizeQRCode(nt(x))}),Ce(()=>(e(),nt(A)),()=>{e()?.resizeText("ssidText",nt(A))}),Ce(()=>(e(),nt(T),nt(P)),()=>{e()?.setObjectPosition("ssidText",nt(T),nt(P),null,!0)}),Ce(()=>(e(),nt(S)),()=>{e()?.resizeIcon(nt(S))}),Ce(()=>(e(),nt(w)),()=>{e()?.setObjectAngle("wifiIcon",0,0,nt(w))}),Ce(()=>(e(),nt(D),nt(R)),()=>{e()?.setObjectPosition("wifiIcon",nt(D),nt(R),null,!1)}),Ce(()=>nt(U),()=>{ut("ssidText",nt(U))}),Ce(()=>nt(b),()=>{ut("wifiIcon",nt(b))}),Ce(()=>(e(),nt(h),nt(f),nt(p)),()=>{e()?.setObjectPosition("stand",nt(h),nt(f),nt(p))}),Ce(()=>(nt(V),nt(F)),()=>{X(nt(V),nt(F))}),Ce(()=>(nt(F),nt($)),()=>{Z(nt(F),nt($))}),Ce(()=>(e(),nt(v),nt(E)),()=>{e()?.setObjectPosition("qrcode",nt(v),nt(E),null)}),gl(),Vr();var xt=Vy(),gt=Jt(xt),ft=Jt(gt);_l(ft,W=>ne(l,W),()=>nt(l));var st=Bt(ft,2),ct=Jt(st);ct.__click=[Ny,V];var dt=Jt(ct);Ey(dt,{}),Zt(ct);var _t=Bt(ct,2);_t.__click=[Uy,F];var St=Jt(_t);My(St,{width:48,height:48}),Zt(_t);var Ut=Bt(_t,2);Ut.__click=[Oy,$];var jt=Jt(Ut);yy(jt,{width:48,height:48}),Zt(Ut),Zt(st),Zt(gt);var H=Bt(gt,2),M=Bt(Jt(H),2);mr(M,{title:"Stand Options:",children:(W,I)=>{var C=Fy(),z=tn(C);Qe(z,{id:"tilt-angle-input",label:"Stand Tile Angle:",min:60,max:90,get value(){return nt(c)},set value(Et){ne(c,Et)},$$legacy:!0});var Y=Bt(z,2);{let Et=we(()=>-nt(m));Qe(Y,{id:"stand-x-input",label:"Stand Horizontal Position:",get min(){return nt(Et)},get max(){return nt(m)},step:.1,get value(){return nt(h)},set value(ht){ne(h,ht)},$$legacy:!0})}var ot=Bt(Y,2);{let Et=we(()=>-nt(d)/2-5),ht=we(()=>nt(d)/2+5);Qe(ot,{id:"stand-y-input",label:"Stand Vertical Position:",get min(){return nt(Et)},get max(){return nt(ht)},step:.1,get value(){return nt(f)},set value(Ct){ne(f,Ct)},$$legacy:!0})}var Q=Bt(ot,2);{let Et=we(()=>-nt(_)/2),ht=we(()=>nt(_)/2);Qe(Q,{id:"stand-z-input",label:"Stand Depth Position:",get min(){return nt(Et)},get max(){return nt(ht)},step:.1,get value(){return nt(p)},set value(Ct){ne(p,Ct)},$$legacy:!0})}var Mt=Bt(Q,2);di(Mt,{id:"stand-width-input",label:"Stand Width:",min:1,step:.1,unit:"mm",get value(){return nt(u)},set value(Et){ne(u,Et)},$$legacy:!0});var pt=Bt(Mt,2);di(pt,{id:"stand-height-input",label:"Stand Depth:",min:1,step:.1,unit:"mm",get value(){return nt(_)},set value(Et){ne(_,Et)},$$legacy:!0});var At=Bt(pt,2);di(At,{id:"stand-depth-input",label:"Stand Thickness:",min:1,step:.1,unit:"mm",get value(){return nt(g)},set value(Et){ne(g,Et)},$$legacy:!0}),le(W,C)},$$slots:{default:!0}});var G=Bt(M,2);mr(G,{title:"Card Options:",children:(W,I)=>{var C=By(),z=tn(C);di(z,{id:"card-width-input",label:"Card Width:",min:1,step:.1,unit:"mm",get value(){return nt(m)},set value(Q){ne(m,Q)},$$legacy:!0});var Y=Bt(z,2);di(Y,{id:"card-height-input",label:"Card Height:",min:1,step:.1,unit:"mm",get value(){return nt(d)},set value(Q){ne(d,Q)},$$legacy:!0});var ot=Bt(Y,2);di(ot,{id:"card-depth-input",label:"Card Thickness:",min:1,step:.1,unit:"mm",get value(){return nt(y)},set value(Q){ne(y,Q)},$$legacy:!0}),le(W,C)},$$slots:{default:!0}});var k=Bt(G,2);mr(k,{title:"QR Code Options:",children:(W,I)=>{var C=zy(),z=tn(C);Qe(z,{id:"qr-size-input",label:"QR Code Size:",min:1,get max(){return nt(m)},get value(){return nt(x)},set value(Q){ne(x,Q)},$$legacy:!0});var Y=Bt(z,2);{let Q=we(()=>(nt(m),Re(()=>Math.floor(-nt(m)/2)))),Mt=we(()=>(nt(m),Re(()=>Math.ceil(nt(m)/2))));Qe(Y,{id:"qr-x-input",label:"QR Code Horizontal Position:",get min(){return nt(Q)},get max(){return nt(Mt)},step:.1,get value(){return nt(v)},set value(pt){ne(v,pt)},$$legacy:!0})}var ot=Bt(Y,2);{let Q=we(()=>(nt(d),Re(()=>Math.floor(-nt(d)/2)))),Mt=we(()=>(nt(d),Re(()=>Math.ceil(nt(d)/2))));Qe(ot,{id:"qr-y-input",label:"QR Code Vertical Position:",get min(){return nt(Q)},get max(){return nt(Mt)},step:.1,get value(){return nt(E)},set value(pt){ne(E,pt)},$$legacy:!0})}le(W,C)},$$slots:{default:!0}});var L=Bt(k,2);mr(L,{title:"WiFi Name Options:",children:(W,I)=>{var C=ky(),z=tn(C);pu(z,{id:"show-name-input",label:"Show WiFi SSID:",get checked(){return nt(U)},set checked(Mt){ne(U,Mt)},$$legacy:!0});var Y=Bt(z,2);di(Y,{id:"name-size-input",label:"Text Size:",min:1,step:.5,get value(){return nt(A)},set value(Mt){ne(A,Mt)},$$legacy:!0});var ot=Bt(Y,2);{let Mt=we(()=>(nt(m),Re(()=>Math.ceil(-nt(m)/2)))),pt=we(()=>(nt(m),Re(()=>Math.floor(nt(m)/2))));Qe(ot,{id:"name-x-input",label:"Text Horizontal Position:",get min(){return nt(Mt)},get max(){return nt(pt)},step:.1,get value(){return nt(T)},set value(At){ne(T,At)},$$legacy:!0})}var Q=Bt(ot,2);{let Mt=we(()=>(nt(d),Re(()=>Math.ceil(-nt(d)/2)))),pt=we(()=>(nt(d),Re(()=>Math.floor(nt(d)/2))));Qe(Q,{id:"name-y-input",label:"Text Vertical Position:",get min(){return nt(Mt)},get max(){return nt(pt)},step:.1,get value(){return nt(P)},set value(At){ne(P,At)},$$legacy:!0})}le(W,C)},$$slots:{default:!0}});var N=Bt(L,2);mr(N,{title:"WiFi Icon Options",children:(W,I)=>{var C=Hy(),z=tn(C);pu(z,{id:"show-icon-input",label:"Show WiFi Icon:",get checked(){return nt(b)},set checked(pt){ne(b,pt)},$$legacy:!0});var Y=Bt(z,2);Qe(Y,{id:"wifi-icon-size-input",label:"Icon Size:",min:1,get max(){return nt(m)},step:.1,get value(){return nt(S)},set value(pt){ne(S,pt)},$$legacy:!0});var ot=Bt(Y,2);Qe(ot,{id:"wifi-icon-rotation-input",label:"Icon Rotation:",min:0,max:360,step:1,get value(){return nt(w)},set value(pt){ne(w,pt)},$$legacy:!0});var Q=Bt(ot,2);{let pt=we(()=>(nt(m),Re(()=>Math.ceil(-nt(m)/2)))),At=we(()=>(nt(m),Re(()=>Math.floor(nt(m)/2))));Qe(Q,{id:"wifi-x-input",label:"Icon Horizontal Position:",get min(){return nt(pt)},get max(){return nt(At)},step:1,get value(){return nt(D)},set value(Et){ne(D,Et)},$$legacy:!0})}var Mt=Bt(Q,2);{let pt=we(()=>(nt(d),Re(()=>Math.ceil(-nt(d)/2)))),At=we(()=>(nt(d),Re(()=>Math.floor(nt(d)/2))));Qe(Mt,{id:"wifi-y-input",label:"Icon Vertical Position:",get min(){return nt(pt)},get max(){return nt(At)},step:1,get value(){return nt(R)},set value(Et){ne(R,Et)},$$legacy:!0})}le(W,C)},$$slots:{default:!0}}),Zt(H);var B=Bt(H,2),K=Jt(B);K.__click=[Ly,n];var rt=Bt(K,2);rt.__click=[Dy,n],Zt(B),Zt(xt),qe(()=>{lo(ct,1,`flex items-center rounded-lg ${nt(V)?"bg-blue-600":"bg-gray-500"} px-2 py-1 text-xl text-white ${nt(V)?"hover:bg-blue-600/50":"hover:bg-gray-500/50"}`),lo(_t,1,`mx-4 flex rounded-lg ${nt(F)?"bg-blue-600":"bg-gray-500"} px-2 py-1 text-xl text-white ${nt(F)?"hover:bg-blue-600/50":"hover:bg-gray-500/50"}`),lo(Ut,1,`flex rounded-lg ${nt($)?"bg-blue-600":"bg-gray-500"} px-2 py-1 text-xl text-white ${nt($)?"hover:bg-blue-600/50":"hover:bg-gray-500/50"}`)}),le(r,xt),zr(),a()}Gr(["click"]);var Gi={},Jo,mu;function Wy(){return mu||(mu=1,Jo=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Jo}var Qo={},Zn={},gu;function Ti(){if(gu)return Zn;gu=1;let r;const t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Zn.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},Zn.getSymbolTotalCodewords=function(n){return t[n]},Zn.getBCHDigit=function(e){let n=0;for(;e!==0;)n++,e>>>=1;return n},Zn.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');r=n},Zn.isKanjiModeEnabled=function(){return typeof r<"u"},Zn.toSJIS=function(n){return r(n)},Zn}var ta={},_u;function Ul(){return _u||(_u=1,(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function t(e){if(typeof e!="string")throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+e)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,i){if(r.isValid(n))return n;try{return t(n)}catch{return i}}})(ta)),ta}var ea,vu;function Xy(){if(vu)return ea;vu=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},ea=r,ea}var na,xu;function qy(){if(xu)return na;xu=1;function r(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return r.prototype.set=function(t,e,n,i){const s=t*this.size+e;this.data[s]=n,i&&(this.reservedBit[s]=!0)},r.prototype.get=function(t,e){return this.data[t*this.size+e]},r.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},r.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},na=r,na}var ia={},yu;function Yy(){return yu||(yu=1,(function(r){const t=Ti().getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,s=t(n),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-o;return a.push(6),a.reverse()},r.getPositions=function(n){const i=[],s=r.getRowColCoords(n),o=s.length;for(let a=0;a<o;a++)for(let l=0;l<o;l++)a===0&&l===0||a===0&&l===o-1||a===o-1&&l===0||i.push([s[a],s[l]]);return i}})(ia)),ia}var ra={},bu;function $y(){if(bu)return ra;bu=1;const r=Ti().getSymbolSize,t=7;return ra.getPositions=function(n){const i=r(n);return[[0,0],[i-t,0],[0,i-t]]},ra}var sa={},Mu;function jy(){return Mu||(Mu=1,(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};r.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},r.from=function(i){return r.isValid(i)?parseInt(i,10):void 0},r.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,l=0,c=null,h=null;for(let f=0;f<s;f++){a=l=0,c=h=null;for(let p=0;p<s;p++){let u=i.get(f,p);u===c?a++:(a>=5&&(o+=t.N1+(a-5)),c=u,a=1),u=i.get(p,f),u===h?l++:(l>=5&&(o+=t.N1+(l-5)),h=u,l=1)}a>=5&&(o+=t.N1+(a-5)),l>=5&&(o+=t.N1+(l-5))}return o},r.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let l=0;l<s-1;l++){const c=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(c===4||c===0)&&o++}return o*t.N2},r.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,l=0;for(let c=0;c<s;c++){a=l=0;for(let h=0;h<s;h++)a=a<<1&2047|i.get(c,h),h>=10&&(a===1488||a===93)&&o++,l=l<<1&2047|i.get(h,c),h>=10&&(l===1488||l===93)&&o++}return o*t.N3},r.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let l=0;l<o;l++)s+=i.data[l];return Math.abs(Math.ceil(s*100/o/5)-10)*t.N4};function e(n,i,s){switch(n){case r.Patterns.PATTERN000:return(i+s)%2===0;case r.Patterns.PATTERN001:return i%2===0;case r.Patterns.PATTERN010:return s%3===0;case r.Patterns.PATTERN011:return(i+s)%3===0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case r.Patterns.PATTERN101:return i*s%2+i*s%3===0;case r.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case r.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let l=0;l<o;l++)s.isReserved(l,a)||s.xor(l,a,e(i,l,a))},r.getBestMask=function(i,s){const o=Object.keys(r.Patterns).length;let a=0,l=1/0;for(let c=0;c<o;c++){s(c),r.applyMask(c,i);const h=r.getPenaltyN1(i)+r.getPenaltyN2(i)+r.getPenaltyN3(i)+r.getPenaltyN4(i);r.applyMask(c,i),h<l&&(l=h,a=c)}return a}})(sa)),sa}var Ts={},Su;function Yh(){if(Su)return Ts;Su=1;const r=Ul(),t=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],e=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Ts.getBlocksCount=function(i,s){switch(s){case r.L:return t[(i-1)*4+0];case r.M:return t[(i-1)*4+1];case r.Q:return t[(i-1)*4+2];case r.H:return t[(i-1)*4+3];default:return}},Ts.getTotalCodewordsCount=function(i,s){switch(s){case r.L:return e[(i-1)*4+0];case r.M:return e[(i-1)*4+1];case r.Q:return e[(i-1)*4+2];case r.H:return e[(i-1)*4+3];default:return}},Ts}var oa={},gr={},Eu;function Zy(){if(Eu)return gr;Eu=1;const r=new Uint8Array(512),t=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)r[i]=n,t[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)r[i]=r[i-255]})(),gr.log=function(n){if(n<1)throw new Error("log("+n+")");return t[n]},gr.exp=function(n){return r[n]},gr.mul=function(n,i){return n===0||i===0?0:r[t[n]+t[i]]},gr}var wu;function Ky(){return wu||(wu=1,(function(r){const t=Zy();r.mul=function(n,i){const s=new Uint8Array(n.length+i.length-1);for(let o=0;o<n.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=t.mul(n[o],i[a]);return s},r.mod=function(n,i){let s=new Uint8Array(n);for(;s.length-i.length>=0;){const o=s[0];for(let l=0;l<i.length;l++)s[l]^=t.mul(i[l],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},r.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let s=0;s<n;s++)i=r.mul(i,new Uint8Array([1,t.exp(s)]));return i}})(oa)),oa}var aa,Tu;function Jy(){if(Tu)return aa;Tu=1;const r=Ky();function t(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}return t.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},t.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const s=r.mod(i,this.genPoly),o=this.degree-s.length;if(o>0){const a=new Uint8Array(this.degree);return a.set(s,o),a}return s},aa=t,aa}var la={},ca={},ua={},Au;function $h(){return Au||(Au=1,ua.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),ua}var yn={},Cu;function jh(){if(Cu)return yn;Cu=1;const r="[0-9]+",t="[A-Z $%*+\\-./:]+";let e="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";e=e.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+e+`)(?:.|[\r
]))+`;yn.KANJI=new RegExp(e,"g"),yn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),yn.BYTE=new RegExp(n,"g"),yn.NUMERIC=new RegExp(r,"g"),yn.ALPHANUMERIC=new RegExp(t,"g");const i=new RegExp("^"+e+"$"),s=new RegExp("^"+r+"$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return yn.testKanji=function(l){return i.test(l)},yn.testNumeric=function(l){return s.test(l)},yn.testAlphanumeric=function(l){return o.test(l)},yn}var Ru;function Ai(){return Ru||(Ru=1,(function(r){const t=$h(),e=jh();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!t.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},r.getBestModeForData=function(s){return e.testNumeric(s)?r.NUMERIC:e.testAlphanumeric(s)?r.ALPHANUMERIC:e.testKanji(s)?r.KANJI:r.BYTE},r.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},r.isValid=function(s){return s&&s.bit&&s.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+i)}}r.from=function(s,o){if(r.isValid(s))return s;try{return n(s)}catch{return o}}})(ca)),ca}var Pu;function Qy(){return Pu||(Pu=1,(function(r){const t=Ti(),e=Yh(),n=Ul(),i=Ai(),s=$h(),o=7973,a=t.getBCHDigit(o);function l(p,u,g){for(let _=1;_<=40;_++)if(u<=r.getCapacity(_,g,p))return _}function c(p,u){return i.getCharCountIndicator(p,u)+4}function h(p,u){let g=0;return p.forEach(function(_){const m=c(_.mode,u);g+=m+_.getBitsLength()}),g}function f(p,u){for(let g=1;g<=40;g++)if(h(p,g)<=r.getCapacity(g,u,i.MIXED))return g}r.from=function(u,g){return s.isValid(u)?parseInt(u,10):g},r.getCapacity=function(u,g,_){if(!s.isValid(u))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=i.BYTE);const m=t.getSymbolTotalCodewords(u),d=e.getTotalCodewordsCount(u,g),y=(m-d)*8;if(_===i.MIXED)return y;const x=y-c(_,u);switch(_){case i.NUMERIC:return Math.floor(x/10*3);case i.ALPHANUMERIC:return Math.floor(x/11*2);case i.KANJI:return Math.floor(x/13);case i.BYTE:default:return Math.floor(x/8)}},r.getBestVersionForData=function(u,g){let _;const m=n.from(g,n.M);if(Array.isArray(u)){if(u.length>1)return f(u,m);if(u.length===0)return 1;_=u[0]}else _=u;return l(_.mode,_.getLength(),m)},r.getEncodedBits=function(u){if(!s.isValid(u)||u<7)throw new Error("Invalid QR Code version");let g=u<<12;for(;t.getBCHDigit(g)-a>=0;)g^=o<<t.getBCHDigit(g)-a;return u<<12|g}})(la)),la}var ha={},Iu;function tb(){if(Iu)return ha;Iu=1;const r=Ti(),t=1335,e=21522,n=r.getBCHDigit(t);return ha.getEncodedBits=function(s,o){const a=s.bit<<3|o;let l=a<<10;for(;r.getBCHDigit(l)-n>=0;)l^=t<<r.getBCHDigit(l)-n;return(a<<10|l)^e},ha}var fa={},da,Lu;function eb(){if(Lu)return da;Lu=1;const r=Ai();function t(e){this.mode=r.NUMERIC,this.data=e.toString()}return t.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i,s,o;for(i=0;i+3<=this.data.length;i+=3)s=this.data.substr(i,3),o=parseInt(s,10),n.put(o,10);const a=this.data.length-i;a>0&&(s=this.data.substr(i),o=parseInt(s,10),n.put(o,a*3+1))},da=t,da}var pa,Du;function nb(){if(Du)return pa;Du=1;const r=Ai(),t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function e(n){this.mode=r.ALPHANUMERIC,this.data=n}return e.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let s;for(s=0;s+2<=this.data.length;s+=2){let o=t.indexOf(this.data[s])*45;o+=t.indexOf(this.data[s+1]),i.put(o,11)}this.data.length%2&&i.put(t.indexOf(this.data[s]),6)},pa=e,pa}var ma,Nu;function ib(){if(Nu)return ma;Nu=1;const r=Ai();function t(e){this.mode=r.BYTE,typeof e=="string"?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}return t.getBitsLength=function(n){return n*8},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(e){for(let n=0,i=this.data.length;n<i;n++)e.put(this.data[n],8)},ma=t,ma}var ga,Uu;function rb(){if(Uu)return ga;Uu=1;const r=Ai(),t=Ti();function e(n){this.mode=r.KANJI,this.data=n}return e.getBitsLength=function(i){return i*13},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let s=t.toSJIS(this.data[i]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},ga=e,ga}var _a={exports:{}},Ou;function sb(){return Ou||(Ou=1,(function(r){var t={single_source_shortest_paths:function(e,n,i){var s={},o={};o[n]=0;var a=t.PriorityQueue.make();a.push(n,0);for(var l,c,h,f,p,u,g,_,m;!a.empty();){l=a.pop(),c=l.value,f=l.cost,p=e[c]||{};for(h in p)p.hasOwnProperty(h)&&(u=p[h],g=f+u,_=o[h],m=typeof o[h]>"u",(m||_>g)&&(o[h]=g,a.push(h,g),s[h]=c))}if(typeof i<"u"&&typeof o[i]>"u"){var d=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(d)}return s},extract_shortest_path_from_predecessor_list:function(e,n){for(var i=[],s=n;s;)i.push(s),e[s],s=e[s];return i.reverse(),i},find_path:function(e,n,i){var s=t.single_source_shortest_paths(e,n,i);return t.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(e){var n=t.PriorityQueue,i={},s;e=e||{};for(s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,n){return e.cost-n.cost},push:function(e,n){var i={value:e,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=t})(_a)),_a.exports}var Fu;function ob(){return Fu||(Fu=1,(function(r){const t=Ai(),e=eb(),n=nb(),i=ib(),s=rb(),o=jh(),a=Ti(),l=sb();function c(d){return unescape(encodeURIComponent(d)).length}function h(d,y,x){const v=[];let E;for(;(E=d.exec(x))!==null;)v.push({data:E[0],index:E.index,mode:y,length:E[0].length});return v}function f(d){const y=h(o.NUMERIC,t.NUMERIC,d),x=h(o.ALPHANUMERIC,t.ALPHANUMERIC,d);let v,E;return a.isKanjiModeEnabled()?(v=h(o.BYTE,t.BYTE,d),E=h(o.KANJI,t.KANJI,d)):(v=h(o.BYTE_KANJI,t.BYTE,d),E=[]),y.concat(x,v,E).sort(function(T,P){return T.index-P.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function p(d,y){switch(y){case t.NUMERIC:return e.getBitsLength(d);case t.ALPHANUMERIC:return n.getBitsLength(d);case t.KANJI:return s.getBitsLength(d);case t.BYTE:return i.getBitsLength(d)}}function u(d){return d.reduce(function(y,x){const v=y.length-1>=0?y[y.length-1]:null;return v&&v.mode===x.mode?(y[y.length-1].data+=x.data,y):(y.push(x),y)},[])}function g(d){const y=[];for(let x=0;x<d.length;x++){const v=d[x];switch(v.mode){case t.NUMERIC:y.push([v,{data:v.data,mode:t.ALPHANUMERIC,length:v.length},{data:v.data,mode:t.BYTE,length:v.length}]);break;case t.ALPHANUMERIC:y.push([v,{data:v.data,mode:t.BYTE,length:v.length}]);break;case t.KANJI:y.push([v,{data:v.data,mode:t.BYTE,length:c(v.data)}]);break;case t.BYTE:y.push([{data:v.data,mode:t.BYTE,length:c(v.data)}])}}return y}function _(d,y){const x={},v={start:{}};let E=["start"];for(let A=0;A<d.length;A++){const T=d[A],P=[];for(let S=0;S<T.length;S++){const w=T[S],D=""+A+S;P.push(D),x[D]={node:w,lastCount:0},v[D]={};for(let R=0;R<E.length;R++){const U=E[R];x[U]&&x[U].node.mode===w.mode?(v[U][D]=p(x[U].lastCount+w.length,w.mode)-p(x[U].lastCount,w.mode),x[U].lastCount+=w.length):(x[U]&&(x[U].lastCount=w.length),v[U][D]=p(w.length,w.mode)+4+t.getCharCountIndicator(w.mode,y))}}E=P}for(let A=0;A<E.length;A++)v[E[A]].end=0;return{map:v,table:x}}function m(d,y){let x;const v=t.getBestModeForData(d);if(x=t.from(y,v),x!==t.BYTE&&x.bit<v.bit)throw new Error('"'+d+'" cannot be encoded with mode '+t.toString(x)+`.
 Suggested mode is: `+t.toString(v));switch(x===t.KANJI&&!a.isKanjiModeEnabled()&&(x=t.BYTE),x){case t.NUMERIC:return new e(d);case t.ALPHANUMERIC:return new n(d);case t.KANJI:return new s(d);case t.BYTE:return new i(d)}}r.fromArray=function(y){return y.reduce(function(x,v){return typeof v=="string"?x.push(m(v,null)):v.data&&x.push(m(v.data,v.mode)),x},[])},r.fromString=function(y,x){const v=f(y,a.isKanjiModeEnabled()),E=g(v),A=_(E,x),T=l.find_path(A.map,"start","end"),P=[];for(let S=1;S<T.length-1;S++)P.push(A.table[T[S]].node);return r.fromArray(u(P))},r.rawSplit=function(y){return r.fromArray(f(y,a.isKanjiModeEnabled()))}})(fa)),fa}var Bu;function ab(){if(Bu)return Qo;Bu=1;const r=Ti(),t=Ul(),e=Xy(),n=qy(),i=Yy(),s=$y(),o=jy(),a=Yh(),l=Jy(),c=Qy(),h=tb(),f=Ai(),p=ob();function u(A,T){const P=A.size,S=s.getPositions(T);for(let w=0;w<S.length;w++){const D=S[w][0],R=S[w][1];for(let U=-1;U<=7;U++)if(!(D+U<=-1||P<=D+U))for(let b=-1;b<=7;b++)R+b<=-1||P<=R+b||(U>=0&&U<=6&&(b===0||b===6)||b>=0&&b<=6&&(U===0||U===6)||U>=2&&U<=4&&b>=2&&b<=4?A.set(D+U,R+b,!0,!0):A.set(D+U,R+b,!1,!0))}}function g(A){const T=A.size;for(let P=8;P<T-8;P++){const S=P%2===0;A.set(P,6,S,!0),A.set(6,P,S,!0)}}function _(A,T){const P=i.getPositions(T);for(let S=0;S<P.length;S++){const w=P[S][0],D=P[S][1];for(let R=-2;R<=2;R++)for(let U=-2;U<=2;U++)R===-2||R===2||U===-2||U===2||R===0&&U===0?A.set(w+R,D+U,!0,!0):A.set(w+R,D+U,!1,!0)}}function m(A,T){const P=A.size,S=c.getEncodedBits(T);let w,D,R;for(let U=0;U<18;U++)w=Math.floor(U/3),D=U%3+P-8-3,R=(S>>U&1)===1,A.set(w,D,R,!0),A.set(D,w,R,!0)}function d(A,T,P){const S=A.size,w=h.getEncodedBits(T,P);let D,R;for(D=0;D<15;D++)R=(w>>D&1)===1,D<6?A.set(D,8,R,!0):D<8?A.set(D+1,8,R,!0):A.set(S-15+D,8,R,!0),D<8?A.set(8,S-D-1,R,!0):D<9?A.set(8,15-D-1+1,R,!0):A.set(8,15-D-1,R,!0);A.set(S-8,8,1,!0)}function y(A,T){const P=A.size;let S=-1,w=P-1,D=7,R=0;for(let U=P-1;U>0;U-=2)for(U===6&&U--;;){for(let b=0;b<2;b++)if(!A.isReserved(w,U-b)){let F=!1;R<T.length&&(F=(T[R]>>>D&1)===1),A.set(w,U-b,F),D--,D===-1&&(R++,D=7)}if(w+=S,w<0||P<=w){w-=S,S=-S;break}}}function x(A,T,P){const S=new e;P.forEach(function(b){S.put(b.mode.bit,4),S.put(b.getLength(),f.getCharCountIndicator(b.mode,A)),b.write(S)});const w=r.getSymbolTotalCodewords(A),D=a.getTotalCodewordsCount(A,T),R=(w-D)*8;for(S.getLengthInBits()+4<=R&&S.put(0,4);S.getLengthInBits()%8!==0;)S.putBit(0);const U=(R-S.getLengthInBits())/8;for(let b=0;b<U;b++)S.put(b%2?17:236,8);return v(S,A,T)}function v(A,T,P){const S=r.getSymbolTotalCodewords(T),w=a.getTotalCodewordsCount(T,P),D=S-w,R=a.getBlocksCount(T,P),U=S%R,b=R-U,F=Math.floor(S/R),$=Math.floor(D/R),V=$+1,J=F-$,tt=new l(J);let ut=0;const X=new Array(R),Z=new Array(R);let xt=0;const gt=new Uint8Array(A.buffer);for(let _t=0;_t<R;_t++){const St=_t<b?$:V;X[_t]=gt.slice(ut,ut+St),Z[_t]=tt.encode(X[_t]),ut+=St,xt=Math.max(xt,St)}const ft=new Uint8Array(S);let st=0,ct,dt;for(ct=0;ct<xt;ct++)for(dt=0;dt<R;dt++)ct<X[dt].length&&(ft[st++]=X[dt][ct]);for(ct=0;ct<J;ct++)for(dt=0;dt<R;dt++)ft[st++]=Z[dt][ct];return ft}function E(A,T,P,S){let w;if(Array.isArray(A))w=p.fromArray(A);else if(typeof A=="string"){let F=T;if(!F){const $=p.rawSplit(A);F=c.getBestVersionForData($,P)}w=p.fromString(A,F||40)}else throw new Error("Invalid data");const D=c.getBestVersionForData(w,P);if(!D)throw new Error("The amount of data is too big to be stored in a QR Code");if(!T)T=D;else if(T<D)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+D+`.
`);const R=x(T,P,w),U=r.getSymbolSize(T),b=new n(U);return u(b,T),g(b),_(b,T),d(b,P,0),T>=7&&m(b,T),y(b,R),isNaN(S)&&(S=o.getBestMask(b,d.bind(null,b,P))),o.applyMask(S,b),d(b,P,S),{modules:b,version:T,errorCorrectionLevel:P,maskPattern:S,segments:w}}return Qo.create=function(T,P){if(typeof T>"u"||T==="")throw new Error("No input text");let S=t.M,w,D;return typeof P<"u"&&(S=t.from(P.errorCorrectionLevel,t.M),w=c.from(P.version),D=o.from(P.maskPattern),P.toSJISFunc&&r.setToSJISFunction(P.toSJISFunc)),E(T,w,S,D)},Qo}var va={},xa={},zu;function Zh(){return zu||(zu=1,(function(r){function t(e){if(typeof e=="number"&&(e=e.toString()),typeof e!="string")throw new Error("Color should be defined as hex string");let n=e.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+e);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:t(n.color.dark||"#000000ff"),light:t(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},r.getImageWidth=function(n,i){const s=r.getScale(n,i);return Math.floor((n+i.margin*2)*s)},r.qrToImageData=function(n,i,s){const o=i.modules.size,a=i.modules.data,l=r.getScale(o,s),c=Math.floor((o+s.margin*2)*l),h=s.margin*l,f=[s.color.light,s.color.dark];for(let p=0;p<c;p++)for(let u=0;u<c;u++){let g=(p*c+u)*4,_=s.color.light;if(p>=h&&u>=h&&p<c-h&&u<c-h){const m=Math.floor((p-h)/l),d=Math.floor((u-h)/l);_=f[a[m*o+d]?1:0]}n[g++]=_.r,n[g++]=_.g,n[g++]=_.b,n[g]=_.a}}})(xa)),xa}var ku;function lb(){return ku||(ku=1,(function(r){const t=Zh();function e(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(s,o,a){let l=a,c=o;typeof l>"u"&&(!o||!o.getContext)&&(l=o,o=void 0),o||(c=n()),l=t.getOptions(l);const h=t.getImageWidth(s.modules.size,l),f=c.getContext("2d"),p=f.createImageData(h,h);return t.qrToImageData(p.data,s,l),e(f,c,h),f.putImageData(p,0,0),c},r.renderToDataURL=function(s,o,a){let l=a;typeof l>"u"&&(!o||!o.getContext)&&(l=o,o=void 0),l||(l={});const c=r.render(s,o,l),h=l.type||"image/png",f=l.rendererOpts||{};return c.toDataURL(h,f.quality)}})(va)),va}var ya={},Hu;function cb(){if(Hu)return ya;Hu=1;const r=Zh();function t(i,s){const o=i.a/255,a=s+'="'+i.hex+'"';return o<1?a+" "+s+'-opacity="'+o.toFixed(2).slice(1)+'"':a}function e(i,s,o){let a=i+s;return typeof o<"u"&&(a+=" "+o),a}function n(i,s,o){let a="",l=0,c=!1,h=0;for(let f=0;f<i.length;f++){const p=Math.floor(f%s),u=Math.floor(f/s);!p&&!c&&(c=!0),i[f]?(h++,f>0&&p>0&&i[f-1]||(a+=c?e("M",p+o,.5+u+o):e("m",l,0),l=0,c=!1),p+1<s&&i[f+1]||(a+=e("h",h),h=0)):l++}return a}return ya.render=function(s,o,a){const l=r.getOptions(o),c=s.modules.size,h=s.modules.data,f=c+l.margin*2,p=l.color.light.a?"<path "+t(l.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",u="<path "+t(l.color.dark,"stroke")+' d="'+n(h,c,l.margin)+'"/>',g='viewBox="0 0 '+f+" "+f+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+g+' shape-rendering="crispEdges">'+p+u+`</svg>
`;return typeof a=="function"&&a(null,m),m},ya}var Vu;function ub(){if(Vu)return Gi;Vu=1;const r=Wy(),t=ab(),e=lb(),n=cb();function i(s,o,a,l,c){const h=[].slice.call(arguments,1),f=h.length,p=typeof h[f-1]=="function";if(!p&&!r())throw new Error("Callback required as last argument");if(p){if(f<2)throw new Error("Too few arguments provided");f===2?(c=a,a=o,o=l=void 0):f===3&&(o.getContext&&typeof c>"u"?(c=l,l=void 0):(c=l,l=a,a=o,o=void 0))}else{if(f<1)throw new Error("Too few arguments provided");return f===1?(a=o,o=l=void 0):f===2&&!o.getContext&&(l=a,a=o,o=void 0),new Promise(function(u,g){try{const _=t.create(a,l);u(s(_,o,l))}catch(_){g(_)}})}try{const u=t.create(a,l);c(null,s(u,o,l))}catch(u){c(u)}}return Gi.create=t.create,Gi.toCanvas=i.bind(null,e.render),Gi.toDataURL=i.bind(null,e.renderToDataURL),Gi.toString=i.bind(null,function(s,o,a){return n.render(s,a)}),Gi}var hb=ub();const fb=th(hb),db=async(r,t,e,n)=>{let i="";return t.length===0?i=`WIFI:T:nopass;S:${r};;`:i=e?`WIFI:T:WPA;S:${r};P:${t};H:true;;`:`WIFI:T:WPA;S:${r};P:${t};;`,fb.create(i,{errorCorrectionLevel:n}).modules.data},pb=(r,t)=>{Tn(pn,nn.WifiInfo)},mb=(r,t)=>{Tn(pn,nn.ModelPreview)};var gb=Te('<div class="my-auto flex h-full w-full flex-col lg:grid lg:grid-cols-2"><div class="mt-5 flex flex-col items-center justify-center lg:my-auto lg:mt-0"><canvas class="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"></canvas> <h3 class="text-md mt-4 lg:text-xl">Scan the QR Code with a phone to verify</h3></div> <div class="mt-10 flex flex-col items-center justify-center lg:mt-0"><div class="flex flex-col lg:h-[360px]"><h2 class="mx-auto text-2xl font-bold lg:mr-auto lg:ml-0">QR Code Option:</h2> <div class="mt-2 flex w-min flex-col text-xl lg:mx-0 lg:ml-0 lg:grid lg:grid-cols-[auto_320px] lg:gap-x-4 lg:gap-y-3"><label for="error-level-input mt-2 lg:mt-0" class="my-auto text-nowrap">Error Correction Level:</label> <select id="error-level-input" class="rounded-lg bg-white px-2 py-1"><option>L (7%)</option><option>M (15%)</option><option>Q (25%)</option><option>H (30%)</option></select> <p class="col-span-2 text-sm text-nowrap">Error correction level M should be sufficient for most user.</p></div></div></div> <div class="col-span-2 mx-auto mt-10 flex"><button class="ml-auto w-48 rounded-lg bg-gray-500 px-2 py-1 text-2xl text-white hover:bg-gray-500/50">Back</button> <button class="ml-4 w-48 rounded-lg bg-blue-600 px-2 py-1 text-2xl text-white hover:bg-blue-600/50">Next</button></div></div>');function _b(r,t){Br(t,!1);const e=()=>hn(eo,"$wifiInfoStore",s),n=()=>hn(dl,"$qrCodeData",s),i=()=>hn(pn,"$currentPageStore",s),[s,o]=Hr();let a=ee(),l=ee("M"),c=!1;const h=async(w,D)=>{if(w===null){Tn(pn,nn.WifiInfo);return}Tn(dl,await db(w.ssid,w.password,w.isHidden,D))},f=(w,D=!1)=>{if(!nt(a)||w===null)return;const R=Math.sqrt(w.length),U=Math.ceil(300/R),b=U*R;Xl(a,nt(a).width=b),Xl(a,nt(a).height=b);const F=Math.round(b*.5)>>2;console.log(F);const $=b/2,V=nt(a).getContext("2d");if(V){V.fillStyle="black";for(let J=0;J<b;J++)for(let tt=0;tt<b;tt++)if(w[J*R+tt]==1){const ut=tt*U,X=J*U;V.beginPath(),V.fillRect(ut,X,U,U)}D&&(V.clearRect($-F,$-F,F*2,F*2),V.lineWidth=6,V.beginPath(),V.arc(b/2,b/2+F/2,F,-(Math.PI*3)/4,-Math.PI/4),V.stroke(),V.beginPath(),V.arc(b/2,b/2+F/2,F-10,-(Math.PI*3)/4,-Math.PI/4),V.stroke(),V.beginPath(),V.arc(b/2,b/2+F/2,F-20,-(Math.PI*3)/4,-Math.PI/4),V.stroke(),V.beginPath(),V.arc(b/2,b/2+F/2-F*.15,F*.1,0,2*Math.PI),V.fill())}};Ce(()=>(e(),nt(l)),()=>{h(e(),nt(l))}),Ce(()=>n(),()=>{f(n(),c)}),gl(),Vr();var p=gb(),u=Jt(p),g=Jt(u);_l(g,w=>ne(a,w),()=>nt(a)),Wl(2),Zt(u);var _=Bt(u,2),m=Jt(_),d=Bt(Jt(m),2),y=Bt(Jt(d),2);qe(()=>{nt(l),ju(()=>{})});var x=Jt(y);x.disabled=c,x.value=x.__value="L";var v=Bt(x);v.disabled=c,v.value=v.__value="M";var E=Bt(v);E.value=E.__value="Q";var A=Bt(E);A.value=A.__value="H",Zt(y),Wl(2),Zt(d),Zt(m),Zt(_);var T=Bt(_,2),P=Jt(T);P.__click=[pb,i];var S=Bt(P,2);S.__click=[mb,i],Zt(T),Zt(p),Ju(y,()=>nt(l),w=>ne(l,w)),le(r,p),zr(),o()}Gr(["click"]);var vb=kr(`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 147.586 147.586" xml:space="preserve"><g><path style="fill:#1D1D1B;" d="M48.712,94.208c-2.929,2.929-2.929,7.678,0,10.606c2.93,2.929,7.678,2.929,10.607,0
		c7.98-7.98,20.967-7.98,28.947,0c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197c2.929-2.929,2.929-7.678,0-10.606
		C85.044,80.378,62.542,80.378,48.712,94.208z"></path><path style="fill:#1D1D1B;" d="M26.73,72.225c-2.929,2.929-2.929,7.678,0,10.606s7.677,2.93,10.607,0
		c20.102-20.102,52.811-20.102,72.912,0c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197
		c2.929-2.929,2.929-7.678,0-10.606C94.906,46.275,52.681,46.275,26.73,72.225z"></path><path style="fill:#1D1D1B;" d="M145.39,47.692c-39.479-39.479-103.715-39.479-143.193,0c-2.929,2.929-2.929,7.678,0,10.606
		c2.93,2.929,7.678,2.929,10.607,0c16.29-16.291,37.95-25.262,60.989-25.262s44.699,8.972,60.989,25.262
		c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197C148.319,55.37,148.319,50.621,145.39,47.692z"></path><circle style="fill:#1D1D1B;" cx="73.793" cy="121.272" r="8.231"></circle></g></svg>`);function xb(r,t){let e=oe(t,"width",8,150),n=oe(t,"height",8,150);var i=vb();qe(()=>{he(i,"height",n()),he(i,"width",e())}),le(r,i)}const yb=(r,t,e,n,i,s)=>{if(nt(t).trim().length==0){alert("WiFi SSID cannot be empty");return}const o={ssid:nt(t),password:nt(e),isHidden:nt(n)};Tn(eo,o),Tn(pn,nn.QRPreview)};var bb=Te('<div class="mt-20 flex flex-col"><div class="mx-auto mb-6"><!></div> <div class="flex flex-col text-xl lg:grid lg:grid-cols-[auto_320px] lg:gap-x-3 lg:gap-y-4"><label for="ssid-input" class="my-auto">WiFi SSID:</label> <input id="ssid-input" class="rounded-lg bg-white px-2 py-1" type="text"/> <label for="password-input" class="mt-5 lg:my-auto lg:mt-0">WiFi Password:</label> <input id="password-input" class="rounded-lg bg-white px-2 py-1" type="password"/> <label for="hidden-input" class="mt-5 lg:my-auto lg:mt-0">Hidden Network:</label> <input id="hidden-input" class="my-auto mr-auto h-7 w-7 cursor-pointer rounded-lg bg-white px-2 py-1" type="checkbox"/></div> <button class="mx-auto mt-8 w-48 rounded-lg bg-blue-600 px-2 py-1 text-2xl text-white hover:bg-blue-600/50">Next</button></div>');function Mb(r,t){Br(t,!1);const e=()=>hn(eo,"$wifiInfoStore",i),n=()=>hn(pn,"$currentPageStore",i),[i,s]=Hr();let o=ee(""),a=ee(""),l=ee(!1);Vr();var c=bb(),h=Jt(c),f=Jt(h);xb(f,{}),Zt(h);var p=Bt(h,2),u=Bt(Jt(p),2);xi(u);var g=Bt(u,4);xi(g);var _=Bt(g,4);xi(_),Zt(p);var m=Bt(p,2);m.__click=[yb,o,a,l,e,n],Zt(c),Cr(u,()=>nt(o),d=>ne(o,d)),Cr(g,()=>nt(a),d=>ne(a,d)),Qu(_,()=>nt(l),d=>ne(l,d)),le(r,c),zr(),s()}Gr(["click"]);var Sb=Te('<h2 class="my-3 text-xl lg:text-2xl">Step 1: Enter WiFi Info</h2> <!>',1),Eb=Te('<h2 class="my-3 text-2xl">Step 2: Preview and verify QR Code</h2> <!>',1),wb=Te('<h2 class="my-3 text-2xl">Step 3: Preview the 3D model</h2> <!>',1),Tb=Te('<h2 class="my-3 text-2xl">Step 4: Export Options</h2> <!>',1),Ab=Te('<div class="flex h-full min-h-screen flex-col items-center bg-[#EFEFEF] px-2 py-4 font-nunito-sans lg:w-screen"><h1 class="w-full text-center text-2xl md:text-3xl">WiFi QR Code 3D Model Generator</h1> <!></div>');function Bb(r,t){Br(t,!1);const e=()=>hn(pn,"$currentPageStore",n),[n,i]=Hr();Vr();var s=Ab(),o=Bt(Jt(s),2);{var a=c=>{var h=Sb(),f=Bt(tn(h),2);Mb(f,{}),le(c,h)},l=c=>{var h=As(),f=tn(h);{var p=g=>{var _=Eb(),m=Bt(tn(_),2);_b(m,{}),le(g,_)},u=g=>{var _=As(),m=tn(_);{var d=x=>{var v=wb(),E=Bt(tn(v),2);Gy(E,{}),le(x,v)},y=x=>{var v=As(),E=tn(v);{var A=T=>{var P=Tb(),S=Bt(tn(P),2);vy(S,{}),le(T,P)};_r(E,T=>{e()==nn.ExportOptions&&T(A)},!0)}le(x,v)};_r(m,x=>{e()==nn.ModelPreview?x(d):x(y,!1)},!0)}le(g,_)};_r(f,g=>{e()==nn.QRPreview?g(p):g(u,!1)},!0)}le(c,h)};_r(o,c=>{e()==nn.WifiInfo?c(a):c(l,!1)})}Zt(s),le(r,s),zr(),i()}export{Bb as component,Ob as universal};
