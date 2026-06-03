import"./DsnmJJEf.js";import{V as nm,f as im,a0 as rm,ax as sm,a1 as om,c as am,Y as lm}from"./fqWCngPn.js";import{s as cm,w as Le,g as ui,m as Zh}from"./Cg3AWEwn.js";import{a as hm,c as um}from"./CyR0vac7.js";import{p as fm,b as dm,r as pm,_ as t_}from"./D-4tHAVf.js";import{a as e_,b as mm}from"./cPKGvlvi.js";var n_=im("<div><!></div>");function e3(e,t){nm(t,!0);let n=fm(t,"ref",15,null),i=pm(t,["$$slots","$$events","$$legacy","ref","class","children"]);var r=n_();hm(r,a=>({"data-slot":"card",class:a,...i}),[()=>um("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",t.class)]);var s=rm(r);cm(s,()=>t.children??sm),om(r),dm(r,a=>n(a),()=>n()),am(e,r),lm()}var i_=im("<div><!></div>");function n3(e,t){nm(t,!0);let n=fm(t,"ref",15,null),i=pm(t,["$$slots","$$events","$$legacy","ref","class","children"]);var r=i_();hm(r,a=>({"data-slot":"card-content",class:a,...i}),[()=>um("px-6",t.class)]);var s=rm(r);cm(s,()=>t.children??sm),om(r),dm(r,a=>n(a),()=>n()),am(e,r),lm()}function r_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function gm(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var n=function i(){var r=!1;try{r=this instanceof i}catch{}return r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var r=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return e[i]}})}),n}const Mf=Le(null),Sf=Le(null);async function i3(e=fetch){Sf.set(null);try{const t=await e(e_,{credentials:"include",cache:"no-store"});if(!t.ok)throw new Error(`Auth status request failed (${t.status})`);const n=await t.json();Mf.set({loggedIn:!!n.loggedIn,debugHeaders:n.debugHeaders??{}})}catch(t){Mf.set({loggedIn:!1,debugHeaders:{}}),Sf.set(t instanceof Error?t.message:"Failed to fetch auth status")}}const r3=Le(null),_m=Le(null),hl=Le(null),vm=Le(null),xm=Le(null),ym=Le(null),s_=Le({}),s3=Le(null);function o_(){_m.set(null),hl.set(null),vm.set(null),xm.set(null),ym.set(null)}var Ns=typeof self<"u"?self:{};function Ir(){throw Error("Invalid UTF8")}function Ef(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let ea,Xl;const a_=typeof TextDecoder<"u";let l_;const c_=typeof TextEncoder<"u";function Mm(e){if(c_)e=(l_||=new TextEncoder).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let r=0;r<e.length;r++){var t=e.charCodeAt(r);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&r<e.length){const s=e.charCodeAt(++r);if(s>=56320&&s<=57343){t=1024*(t-55296)+s-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}r--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}var Jh,$a;t:{for(var wf=["CLOSURE_FLAGS"],jl=Ns,ql=0;ql<wf.length;ql++)if((jl=jl[wf[ql]])==null){$a=null;break t}$a=jl}var No,Tf=$a&&$a[610401301];Jh=Tf!=null&&Tf;const bf=Ns.navigator;function Vc(e){return!!Jh&&!!No&&No.brands.some((({brand:t})=>t&&t.indexOf(e)!=-1))}function li(e){var t;return(t=Ns.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(e)!=-1}function ur(){return!!Jh&&!!No&&No.brands.length>0}function Yl(){return ur()?Vc("Chromium"):(li("Chrome")||li("CriOS"))&&!(!ur()&&li("Edge"))||li("Silk")}function ul(e){return ul[" "](e),e}No=bf&&bf.userAgentData||null,ul[" "]=function(){};var h_=!ur()&&(li("Trident")||li("MSIE"));!li("Android")||Yl(),Yl(),li("Safari")&&(Yl()||!ur()&&li("Coast")||!ur()&&li("Opera")||!ur()&&li("Edge")||(ur()?Vc("Microsoft Edge"):li("Edg/"))||ur()&&Vc("Opera"));var Sm={},bo=null;function u_(e){const t=e.length;let n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function h(d){for(;f<s.length;){const m=s.charAt(f++),g=bo[m];if(g!=null)return g;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m)}return d}Em();let f=0;for(;;){const d=h(-1),m=h(0),g=h(64),_=h(64);if(_===64&&d===-1)break;a(d<<2|m>>4),g!=64&&(a(m<<4&240|g>>2),_!=64&&a(g<<6&192|_))}})(e,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function Em(){if(!bo){bo={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=e.concat(t[n].split(""));Sm[n]=i;for(let r=0;r<i.length;r++){const s=i[r];bo[s]===void 0&&(bo[s]=r)}}}}var wm=typeof Uint8Array<"u",Tm=!h_&&typeof btoa=="function";function Af(e){if(!Tm){var t;t===void 0&&(t=0),Em(),t=Sm[t];var n=Array(Math.floor(e.length/3)),i=t[64]||"";let f=0,d=0;for(;f<e.length-2;f+=3){var r=e[f],s=e[f+1],a=e[f+2],h=t[r>>2];r=t[(3&r)<<4|s>>4],s=t[(15&s)<<2|a>>6],a=t[63&a],n[d++]=h+r+s+a}switch(h=0,a=i,e.length-f){case 2:a=t[(15&(h=e[f+1]))<<2]||i;case 1:e=e[f],n[d]=t[e>>2]+t[(3&e)<<4|h>>4]+a+i}return n.join("")}for(t="",n=0,i=e.length-10240;n<i;)t+=String.fromCharCode.apply(null,e.subarray(n,n+=10240));return t+=String.fromCharCode.apply(null,n?e.subarray(n):e),btoa(t)}const Rf=/[-_.]/g,f_={"-":"+",_:"/",".":"="};function d_(e){return f_[e]||""}function bm(e){if(!Tm)return u_(e);Rf.test(e)&&(e=e.replace(Rf,d_)),e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Qr(e){return wm&&e!=null&&e instanceof Uint8Array}var Fs={};function ts(){return p_||=new Yi(null,Fs)}function Qh(e){Am(Fs);var t=e.g;return(t=t==null||Qr(t)?t:typeof t=="string"?bm(t):null)==null?t:e.g=t}var Yi=class{h(){return new Uint8Array(Qh(this)||0)}constructor(e,t){if(Am(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let p_,m_;function Am(e){if(e!==Fs)throw Error("illegal external caller")}function Rm(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function Hc(e){return Rm(e=Error(e),"warning"),e}function tu(e){if(e!=null){var t=m_??={},n=t[e]||0;n>=5||(t[e]=n+1,Rm(e=Error(),"incident"),(function(i){Ns.setTimeout((()=>{throw i}),0)})(e))}}var fl=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Js(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var g_=Js("jas",void 0,!0),Cf=Js(void 0,"0di"),po=Js(void 0,"1oa"),Os=Js(void 0,Symbol()),__=Js(void 0,"0actk"),Cm=Js(void 0,"8utk");const Yt=fl?g_:"Ea",Pm={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},Lm=Object.defineProperties;function dl(e,t){fl||Yt in e||Lm(e,Pm),e[Yt]|=t}function on(e,t){fl||Yt in e||Lm(e,Pm),e[Yt]=t}function Qs(e){return dl(e,34),e}function v_(e,t){on(t,-15615&(0|e))}function Wc(e,t){on(t,-15581&(34|e))}function pl(){return typeof BigInt=="function"}function zn(e){return Array.prototype.slice.call(e)}var eu,Yo={};function ml(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object}function nu(e,t){if(e!=null){if(typeof e=="string")e=e?new Yi(e,Fs):ts();else if(e.constructor!==Yi)if(Qr(e))e=e.length?new Yi(new Uint8Array(e),Fs):ts();else{if(!t)throw Error();e=void 0}}return e}const Pf=[];function br(e){if(2&e)throw Error()}on(Pf,55),eu=Object.freeze(Pf);class Lf{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}function iu(e){return Os?e[Os]:void 0}var x_=Object.freeze({});function gl(e){return e.Na=!0,e}var y_=gl((e=>typeof e=="number")),If=gl((e=>typeof e=="string")),M_=gl((e=>typeof e=="boolean")),_l=typeof Ns.BigInt=="function"&&typeof Ns.BigInt(0)=="bigint";function pr(e){var t=e;if(If(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(y_(t)&&!Number.isSafeInteger(t))throw Error(String(t));return _l?BigInt(e):e=M_(e)?e?"1":"0":If(e)?e.trim()||"0":String(e)}var Xc=gl((e=>_l?e>=E_&&e<=T_:e[0]==="-"?Df(e,S_):Df(e,w_)));const S_=Number.MIN_SAFE_INTEGER.toString(),E_=_l?BigInt(Number.MIN_SAFE_INTEGER):void 0,w_=Number.MAX_SAFE_INTEGER.toString(),T_=_l?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Df(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const i=e[n],r=t[n];if(i>r)return!1;if(i<r)return!0}}const b_=typeof Uint8Array.prototype.slice=="function";let Im,Oe=0,Ze=0;function Uf(e){const t=e>>>0;Oe=t,Ze=(e-t)/4294967296>>>0}function es(e){if(e<0){Uf(-e);const[t,n]=au(Oe,Ze);Oe=t>>>0,Ze=n>>>0}else Uf(e)}function ru(e){const t=Im||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+e,!0),Ze=0,Oe=t.getUint32(0,!0)}function su(e,t){const n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Fo(e,t)}function ou(e,t){const n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=su(e,t))=="number"?n?-e:e:n?"-"+e:e}function Fo(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else pl()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+Nf(n)+Nf(e));return n}function Nf(e){return e=String(e),"0000000".slice(e.length)+e}function Dm(){var e=Oe,t=Ze;if(2147483648&t)if(pl())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=au(e,t);e="-"+Fo(n,i)}else e=Fo(e,t);return e}function vl(e){if(e.length<16)es(Number(e));else if(pl())e=BigInt(e),Oe=Number(e&BigInt(4294967295))>>>0,Ze=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");Ze=Oe=0;const n=e.length;for(let i=t,r=(n-t)%6+t;r<=n;i=r,r+=6){const s=Number(e.slice(i,r));Ze*=1e6,Oe=1e6*Oe+s,Oe>=4294967296&&(Ze+=Math.trunc(Oe/4294967296),Ze>>>=0,Oe>>>=0)}if(t){const[i,r]=au(Oe,Ze);Oe=i,Ze=r}}}function au(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}const Oo=typeof BigInt=="function"?BigInt.asIntN:void 0,A_=typeof BigInt=="function"?BigInt.asUintN:void 0,mr=Number.isSafeInteger,xl=Number.isFinite,Bs=Math.trunc,R_=pr(0);function Ar(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Um(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const C_=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Bo(e){switch(typeof e){case"bigint":return!0;case"number":return xl(e);case"string":return C_.test(e);default:return!1}}function to(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return xl(e)?0|e:void 0}function Nm(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return xl(e)?e>>>0:void 0}function Ff(e){if(e[0]==="-")return!1;const t=e.length;return t<20||t===20&&Number(e.substring(0,6))<184467}function Fm(e){const t=e.length;return e[0]==="-"?t<20||t===20&&Number(e.substring(0,7))>-922337:t<19||t===19&&Number(e.substring(0,6))<922337}function Om(e){return Fm(e)?e:(vl(e),Dm())}function lu(e){return e=Bs(e),mr(e)||(es(e),e=ou(Oe,Ze)),e}function Bm(e){var t=Bs(Number(e));return mr(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Om(e))}function Of(e){var t=Bs(Number(e));return mr(t)?pr(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),pl()?pr(Oo(64,BigInt(e))):pr(Om(e)))}function Bf(e){if(mr(e))e=pr(lu(e));else{if(e=Bs(e),mr(e))e=String(e);else{const t=String(e);Fm(t)?e=t:(es(e),e=Dm())}e=pr(e)}return e}function jc(e){return e==null?e:typeof e=="bigint"?(Xc(e)?e=Number(e):(e=Oo(64,e),e=Xc(e)?Number(e):String(e)),e):Bo(e)?typeof e=="number"?lu(e):Bm(e):void 0}function P_(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(A_(64,e));if(Bo(e)){if(t==="string")return t=Bs(Number(e)),mr(t)&&t>=0?e=String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Ff(e)||(vl(e),e=Fo(Oe,Ze))),e;if(t==="number")return(e=Bs(e))>=0&&mr(e)?e:(function(n){if(n<0){es(n);var i=Fo(Oe,Ze);return n=Number(i),mr(n)?n:i}return Ff(i=String(n))?i:(es(n),su(Oe,Ze))})(e)}}function km(e){if(typeof e!="string")throw Error();return e}function eo(e){if(e!=null&&typeof e!="string")throw Error();return e}function ks(e){return e==null||typeof e=="string"?e:void 0}function cu(e,t,n,i){if(e!=null&&typeof e=="object"&&e.W===Yo)return e;if(!Array.isArray(e))return n?2&i?((e=t[Cf])||(Qs((e=new t).u),e=t[Cf]=e),t=e):t=new t:t=void 0,t;let r=n=0|e[Yt];return r===0&&(r|=32&i),r|=2&i,r!==n&&on(e,r),new t(e)}function L_(e,t,n){if(t)t:{if(!Bo(t=e))throw Hc("int64");switch(typeof t){case"string":t=Of(t);break t;case"bigint":t=pr(Oo(64,t));break t;default:t=Bf(t)}}else e=typeof(t=e),t=t==null?t:e==="bigint"?pr(Oo(64,t)):Bo(t)?e==="string"?Of(t):Bf(t):void 0;return(e=t)==null?n?R_:void 0:e}function I_(e){return e}const D_={};let U_=(function(){try{return ul(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Kl{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const N_=U_?(Object.setPrototypeOf(Kl.prototype,Map.prototype),Object.defineProperties(Kl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Kl):class extends Map{constructor(){super()}};function kf(e){return e}function $l(e){if(2&e.M)throw Error("Cannot mutate an immutable Map")}var Ui=class extends N_{constructor(e,t,n=kf,i=kf){super();let r=0|e[Yt];r|=64,on(e,r),this.M=r,this.I=t,this.S=n,this.X=this.I?F_:i;for(let s=0;s<e.length;s++){const a=e[s],h=n(a[0],!1,!0);let f=a[1];t?f===void 0&&(f=null):f=i(a[1],!1,!0,void 0,void 0,r),super.set(h,f)}}La(){var e=G_;if(this.size!==0)return Array.from(super.entries(),(t=>(t[0]=e(t[0]),t[1]=e(t[1]),t)))}da(e=O_){const t=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=e(i[0]),i[1]=e(i[1]),t.push(i);return t}clear(){$l(this),super.clear()}delete(e){return $l(this),super.delete(this.S(e,!0,!1))}entries(){if(this.I){var e=super.keys();e=new Lf(e,B_,this)}else e=super.entries();return e}values(){if(this.I){var e=super.keys();e=new Lf(e,Ui.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.I?super.forEach(((n,i,r)=>{e.call(t,r.get(i),i,r)})):super.forEach(e,t)}set(e,t){return $l(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.X(t,!0,!0,this.I,!1,this.M))}Ja(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.I?e===void 0?null:e:this.X(e,!1,!0,void 0,!1,this.M),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.I;return n?((n=this.X(t,!1,!0,n,this.pa,this.M))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function F_(e,t,n,i,r,s){return e=cu(e,i,n,s),r&&(e=Sl(e)),e}function O_(e){return e}function B_(e){return[e,this.get(e)]}let k_,zm,Gm,z_;function zf(){return k_||=new Ui(Qs([]),void 0,void 0,void 0,D_)}function qc(e,t,n,i,r){if(e!=null){if(Array.isArray(e)){const s=0|e[Yt];return e.length===0&&1&s?void 0:r&&2&s?e:yl(e,t,n,i!==void 0,r)}return t(e,i)}}function yl(e,t,n,i,r){const s=i||n?0|e[Yt]:0,a=i?!!(32&s):void 0;let h=0;const f=(i=zn(e)).length;for(let E=0;E<f;E++){var d=i[E];if(E===f-1&&ml(d)){var m=t,g=n,_=a,M=r;let S;for(let x in d){const v=qc(d[x],m,g,_,M);v!=null&&((S??={})[x]=v)}d=S}else d=qc(i[E],t,n,a,r);i[E]=d,d!=null&&(h=E+1)}return h<f&&(i.length=h),n&&((e=iu(e))&&(i[Os]=zn(e)),n(s,i)),i}function G_(e){return qc(e,hu,void 0,void 0,!1)}function hu(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return Xc(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Qr(e))return Qr(e)&&tu(Cm),Af(e);if(e.W===Yo)return Vm(e);if(e instanceof Yi){const t=e.g;return t==null?"":typeof t=="string"?t:e.g=Af(t)}return e instanceof Ui?e.La():void 0}return e}function Vm(e){var t=e.u;e=yl(t,hu,void 0,void 0,!1);var n=0|t[Yt];if((t=e.length)&&!(512&n)){var i=e[t-1],r=!1;ml(i)?(t--,r=!0):i=void 0;var s=t-(n=512&n?0:-1),a=(zm??I_)(s,n,e,i);if(i&&(e[t]=void 0),s<a&&i){for(var h in s=!0,i){const f=+h;f<=a?(e[r=f+n]=i[h],t=Math.max(r+1,t),r=!1,delete i[h]):s=!1}s&&(i=void 0)}for(s=t-1;t>0;s=t-1)if((h=e[s])==null)t--,r=!0;else{if(!((s-=n)>=a))break;(i??={})[s]=h,t--,r=!0}r&&(e.length=t),i&&e.push(i)}return e}function gr(e,t,n){return e=Hm(e,t[0],t[1],n?1:2),t!==Gm&&n&&dl(e,8192),e}function Hm(e,t,n,i){if(e==null){var r=96;n?(e=[n],r|=512):e=[],t&&(r=-16760833&r|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(8192&(r=0|e[Yt])||!(64&r)||2&r||tu(__),1024&r)throw Error("farr");if(64&r)return e;if(i===1||i===2||(r|=64),n&&(r|=512,n!==e[0]))throw Error("mid");t:{var s=(n=e).length;if(s){var a=s-1;if(ml(i=n[a])){if((a-=t=512&(r|=256)?0:-1)>=1024)throw Error("pvtlmt");for(var h in i)(s=+h)<a&&(n[s+t]=i[h],delete i[h]);r=-16760833&r|(1023&a)<<14;break t}}if(t){if((h=Math.max(t,s-(512&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&h)<<14}}}return on(e,r),e}function Yc(e,t,n=Wc){if(e!=null){if(wm&&e instanceof Uint8Array)return t?e:new Uint8Array(e);if(Array.isArray(e)){var i=0|e[Yt];return 2&i?e:(t&&=i===0||!!(32&i)&&!(64&i||!(16&i)),t?(on(e,34|i),4&i&&Object.freeze(e),e):yl(e,Yc,4&i?Wc:n,!0,!0))}return e.W===Yo?e=2&(i=0|(n=e.u)[Yt])?e:new e.constructor(Ml(n,i,!0)):e instanceof Ui&&!(2&e.M)&&(n=Qs(e.da(Yc)),e=new Ui(n,e.I,e.S,e.X)),e}}function Ml(e,t,n){const i=n||2&t?Wc:v_,r=!!(32&t);return e=(function(s,a,h){const f=zn(s);var d=f.length;const m=256&a?f[d-1]:void 0;for(d+=m?-1:0,a=512&a?1:0;a<d;a++)f[a]=h(f[a]);if(m){a=f[a]={};for(const g in m)a[g]=h(m[g])}return(s=iu(s))&&(f[Os]=zn(s)),f})(e,t,(s=>Yc(s,r,i))),dl(e,32|(n?2:0)),e}function Sl(e){const t=e.u,n=0|t[Yt];return 2&n?new e.constructor(Ml(t,n,!1)):e}function zs(e,t){return tr(e=e.u,0|e[Yt],t)}function tr(e,t,n){if(n===-1)return null;const i=n+(512&t?0:-1),r=e.length-1;return i>=r&&256&t?e[r][n]:i<=r?e[i]:void 0}function ke(e,t,n){const i=e.u;let r=0|i[Yt];return br(r),Ke(i,r,t,n),e}function Ke(e,t,n,i){const r=512&t?0:-1,s=n+r;var a=e.length-1;return s>=a&&256&t?(e[a][n]=i,t):s<=a?(e[s]=i,t):(i!==void 0&&(n>=(a=t>>14&1023||536870912)?i!=null&&(e[a+r]={[n]:i},on(e,t|=256)):e[s]=i),t)}function Ia(e,t){let n=0|(e=e.u)[Yt];const i=tr(e,n,t),r=Ar(i);return r!=null&&r!==i&&Ke(e,n,t,r),r}function Wm(e){let t=0|(e=e.u)[Yt];const n=tr(e,t,1),i=nu(n,!0);return i!=null&&i!==n&&Ke(e,t,1,i),i}function Wr(){return x_===void 0?2:4}function Xr(e,t,n,i,r){const s=e.u,a=2&(e=0|s[Yt])?1:i;r=!!r;let h=0|(i=uu(s,e,t))[Yt];if(!(4&h)){4&h&&(i=zn(i),h=Ki(h,e),e=Ke(s,e,t,i));let f=0,d=0;for(;f<i.length;f++){const m=n(i[f]);m!=null&&(i[d++]=m)}d<f&&(i.length=d),h=fu(h,e),n=-2049&(20|h),h=n&=-4097,on(i,h),2&h&&Object.freeze(i)}return a===1||a===4&&32&h?qi(h)||(r=h,h|=2,h!==r&&on(i,h),Object.freeze(i)):(a===2&&qi(h)&&(i=zn(i),h=Ki(h,e),h=_r(h,e,r),on(i,h),e=Ke(s,e,t,i)),qi(h)||(t=h,h=_r(h,e,r),h!==t&&on(i,h))),i}function uu(e,t,n){return e=tr(e,t,n),Array.isArray(e)?e:eu}function fu(e,t){return e===0&&(e=Ki(e,t)),1|e}function qi(e){return!!(2&e)&&!!(4&e)||!!(1024&e)}function Xm(e){e=zn(e);for(let t=0;t<e.length;t++){const n=e[t]=zn(e[t]);Array.isArray(n[1])&&(n[1]=Qs(n[1]))}return e}function Kc(e,t,n,i){let r=0|(e=e.u)[Yt];br(r),Ke(e,r,t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function no(e,t,n,i){br(t);let r=uu(e,t,n);const s=r!==eu;if(64&t||!(8192&t)||!s){const a=s?0|r[Yt]:0;let h=a;(!s||2&h||qi(h)||4&h&&!(32&h))&&(r=zn(r),h=Ki(h,t),t=Ke(e,t,n,r)),h=-13&fu(h,t),h=_r(i?-17&h:16|h,t,!0),h!==a&&on(r,h)}return r}function Zl(e,t){var n=Dg;return pu(du(e=e.u),e,0|e[Yt],n)===t?t:-1}function du(e){if(fl)return e[po]??(e[po]=new Map);if(po in e)return e[po];const t=new Map;return Object.defineProperty(e,po,{value:t}),t}function jm(e,t,n,i){const r=du(e),s=pu(r,e,t,n);return s!==i&&(s&&(t=Ke(e,t,s)),r.set(n,i)),t}function pu(e,t,n,i){let r=e.get(i);if(r!=null)return r;r=0;for(let s=0;s<i.length;s++){const a=i[s];tr(t,n,a)!=null&&(r!==0&&(n=Ke(t,n,r)),r=a)}return e.set(i,r),r}function mu(e,t,n){let i=0|e[Yt];const r=tr(e,i,n);let s;if(r!=null&&r.W===Yo)return(t=Sl(r))!==r&&Ke(e,i,n,t),t.u;if(Array.isArray(r)){const a=0|r[Yt];s=2&a?gr(Ml(r,a,!1),t,!0):64&a?r:gr(s,t,!0)}else s=gr(void 0,t,!0);return s!==r&&Ke(e,i,n,s),s}function qm(e,t,n){let i=0|(e=e.u)[Yt];const r=tr(e,i,n);return(t=cu(r,t,!1,i))!==r&&t!=null&&Ke(e,i,n,t),t}function Ee(e,t,n){if((t=qm(e,t,n))==null)return t;let i=0|(e=e.u)[Yt];if(!(2&i)){const r=Sl(t);r!==t&&Ke(e,i,n,t=r)}return t}function Ym(e,t,n,i,r,s,a){e=e.u;var h=!!(2&t);const f=h?1:r;s=!!s,a&&=!h;var d=0|(r=uu(e,t,i))[Yt];if(!(h=!!(4&d))){var m=r,g=t;const _=!!(2&(d=fu(d,t)));_&&(g|=2);let M=!_,E=!0,S=0,x=0;for(;S<m.length;S++){const v=cu(m[S],n,!1,g);if(v instanceof n){if(!_){const O=!!(2&(0|v.u[Yt]));M&&=!O,E&&=O}m[x++]=v}}x<S&&(m.length=x),d|=4,d=E?16|d:-17&d,on(m,d=M?8|d:-9&d),_&&Object.freeze(m)}if(a&&!(8&d||!r.length&&(f===1||f===4&&32&d))){for(qi(d)&&(r=zn(r),d=Ki(d,t),t=Ke(e,t,i,r)),n=r,a=d,m=0;m<n.length;m++)(d=n[m])!==(g=Sl(d))&&(n[m]=g);a|=8,on(n,a=n.length?-17&a:16|a),d=a}return f===1||f===4&&32&d?qi(d)||(t=d,(d|=!r.length||16&d&&(!h||32&d)?2:1024)!==t&&on(r,d),Object.freeze(r)):(f===2&&qi(d)&&(on(r=zn(r),d=_r(d=Ki(d,t),t,s)),t=Ke(e,t,i,r)),qi(d)||(i=d,(d=_r(d,t,s))!==i&&on(r,d))),r}function Ji(e,t,n){const i=0|e.u[Yt];return Ym(e,i,t,n,Wr(),!1,!(2&i))}function Qt(e,t,n,i){return i==null&&(i=void 0),ke(e,n,i)}function Po(e,t,n,i){i==null&&(i=void 0);t:{let r=0|(e=e.u)[Yt];if(br(r),i==null){const s=du(e);if(pu(s,e,r,n)!==t)break t;s.set(n,0)}else r=jm(e,r,n,t);Ke(e,r,t,i)}}function Ki(e,t){return-1025&(e=32|(2&t?2|e:-3&e))}function _r(e,t,n){return 32&t&&n||(e&=-33),e}function El(e,t,n){br(0|e.u[Yt]),Xr(e,t,ks,2,!0).push(km(n))}function Za(e,t,n,i){const r=0|e.u[Yt];br(r),e=Ym(e,r,n,t,2,!0),i=i??new n,e.push(i),e[Yt]=2&(0|i.u[Yt])?-9&e[Yt]:-17&e[Yt]}function ci(e,t){return to(zs(e,t))}function fi(e,t){return ks(zs(e,t))}function Qe(e,t){return Ia(e,t)??0}function ko(e,t,n){if(n!=null&&typeof n!="boolean")throw e=typeof n,Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`);ke(e,t,n)}function Ni(e,t,n){if(n!=null){if(typeof n!="number"||!xl(n))throw Hc("int32");n|=0}ke(e,t,n)}function Xt(e,t,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);ke(e,t,n)}function Ja(e,t,n){{const a=e.u;let h=0|a[Yt];if(br(h),n==null)Ke(a,h,t);else{var i=e=0|n[Yt],r=qi(e),s=r||Object.isFrozen(n);for(r||(e=0),s||(n=zn(n),i=0,e=_r(e=Ki(e,h),h,!0),s=!1),e|=21,r=0;r<n.length;r++){const f=n[r],d=km(f);Object.is(f,d)||(s&&(n=zn(n),i=0,e=_r(e=Ki(e,h),h,!0),s=!1),n[r]=d)}e!==i&&(s&&(n=zn(n),e=_r(e=Ki(e,h),h,!0)),on(n,e)),Ke(a,h,t,n)}}}function Km(e,t){return Error(`Invalid wire type: ${e} (at position ${t})`)}function gu(){return Error("Failed to read varint, encoding is invalid.")}function $m(e,t){return Error(`Tried to read past the end of the data ${t} > ${e}`)}function _u(e){if(typeof e=="string")return{buffer:bm(e),O:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),O:!1};if(e.constructor===Uint8Array)return{buffer:e,O:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),O:!1};if(e.constructor===Yi)return{buffer:Qh(e)||new Uint8Array(0),O:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function vu(e,t){let n,i=0,r=0,s=0;const a=e.h;let h=e.g;do n=a[h++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);for(s>32&&(r|=(127&n)>>4),s=3;s<32&&128&n;s+=7)n=a[h++],r|=(127&n)<<s;if(Jr(e,h),n<128)return t(i>>>0,r>>>0);throw gu()}function xu(e){let t=0,n=e.g;const i=n+10,r=e.h;for(;n<i;){const s=r[n++];if(t|=s,(128&s)==0)return Jr(e,n),!!(127&t)}throw gu()}function xr(e){const t=e.h;let n=e.g,i=t[n++],r=127&i;if(128&i&&(i=t[n++],r|=(127&i)<<7,128&i&&(i=t[n++],r|=(127&i)<<14,128&i&&(i=t[n++],r|=(127&i)<<21,128&i&&(i=t[n++],r|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw gu();return Jr(e,n),r}function Qi(e){return xr(e)>>>0}function $c(e){var t=e.h;const n=e.g,i=t[n],r=t[n+1],s=t[n+2];return t=t[n+3],Jr(e,e.g+4),(i<<0|r<<8|s<<16|t<<24)>>>0}function Zc(e){var t=$c(e);e=2*(t>>31)+1;const n=t>>>23&255;return t&=8388607,n==255?t?NaN:e*(1/0):n==0?1401298464324817e-60*e*t:e*Math.pow(2,n-150)*(t+8388608)}function V_(e){return xr(e)}function Jl(e,t,{aa:n=!1}={}){e.aa=n,t&&(t=_u(t),e.h=t.buffer,e.m=t.O,e.j=0,e.l=e.h.length,e.g=e.j)}function Jr(e,t){if(e.g=t,t>e.l)throw $m(e.l,t)}function Zm(e,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);const n=e.g,i=n+t;if(i>e.l)throw $m(t,e.l-n);return e.g=i,n}function Jm(e,t){if(t==0)return ts();var n=Zm(e,t);return e.aa&&e.m?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):b_?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?ts():new Yi(n,Fs)}Ui.prototype.toJSON=void 0;var Gf=[];function Qm(e){var t=e.g;if(t.g==t.l)return!1;e.l=e.g.g;var n=Qi(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5))throw Km(n,e.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${e.l})`);return e.m=t,e.h=n,!0}function Da(e){switch(e.h){case 0:e.h!=0?Da(e):xu(e.g);break;case 1:Jr(e=e.g,e.g+8);break;case 2:if(e.h!=2)Da(e);else{var t=Qi(e.g);Jr(e=e.g,e.g+t)}break;case 5:Jr(e=e.g,e.g+4);break;case 3:for(t=e.m;;){if(!Qm(e))throw Error("Unmatched start-group tag: stream EOF");if(e.h==4){if(e.m!=t)throw Error("Unmatched end-group tag");break}Da(e)}break;default:throw Km(e.h,e.l)}}function Ko(e,t,n){const i=e.g.l,r=Qi(e.g),s=e.g.g+r;let a=s-i;if(a<=0&&(e.g.l=s,n(t,e,void 0,void 0,void 0),a=s-e.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=s,e.g.l=i,t}function yu(e){var t=Qi(e.g),n=Zm(e=e.g,t);if(e=e.h,a_){var i,r=e;(i=Xl)||(i=Xl=new TextDecoder("utf-8",{fatal:!0})),t=n+t,r=n===0&&t===r.length?r:r.subarray(n,t);try{var s=i.decode(r)}catch(h){if(ea===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ea=!0}catch{ea=!1}}throw!ea&&(Xl=void 0),h}}else{t=(s=n)+t,n=[];let h,f=null;for(;s<t;){var a=e[s++];a<128?n.push(a):a<224?s>=t?Ir():(h=e[s++],a<194||(192&h)!=128?(s--,Ir()):n.push((31&a)<<6|63&h)):a<240?s>=t-1?Ir():(h=e[s++],(192&h)!=128||a===224&&h<160||a===237&&h>=160||(192&(i=e[s++]))!=128?(s--,Ir()):n.push((15&a)<<12|(63&h)<<6|63&i)):a<=244?s>=t-2?Ir():(h=e[s++],(192&h)!=128||h-144+(a<<28)>>30!=0||(192&(i=e[s++]))!=128||(192&(r=e[s++]))!=128?(s--,Ir()):(a=(7&a)<<18|(63&h)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):Ir(),n.length>=8192&&(f=Ef(f,n),n.length=0)}s=Ef(f,n)}return s}function tg(e){const t=Qi(e.g);return Jm(e.g,t)}function wl(e,t,n){var i=Qi(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var na=[];function Mi(e,t,n){t.g?t.m(e,t.g,t.h,n):t.m(e,t.h,n)}var Ot=class{constructor(e,t){this.u=Hm(e,t)}toJSON(){try{var e=Vm(this)}finally{zm=void 0}return e}l(){var e=w1;return e.g?e.l(this,e.g,e.h):e.l(this,e.h,e.defaultValue)}clone(){const e=this.u;return new this.constructor(Ml(e,0|e[Yt],!1))}O(){return!!(2&(0|this.u[Yt]))}};function Vf(e){return e?/^\d+$/.test(e)?(vl(e),new Jc(Oe,Ze)):null:H_||=new Jc(0,0)}Ot.prototype.W=Yo,Ot.prototype.toString=function(){return this.u.toString()};var Jc=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let H_;function Hf(e){return e?/^-?\d+$/.test(e)?(vl(e),new Qc(Oe,Ze)):null:W_||=new Qc(0,0)}var Qc=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let W_;function Rs(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function io(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Tl(e,t){if(t>=0)io(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function zo(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Gs(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function ti(e,t,n){io(e.g,8*t+n)}function Mu(e,t){return ti(e,t,2),t=e.g.end(),Gs(e,t),t.push(e.h),t}function Su(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function bl(e,t,n){ti(e,t,2),io(e.g,n.length),Gs(e,e.g.end()),Gs(e,n)}function Qa(e,t,n,i){n!=null&&(t=Mu(e,t),i(n,e),Su(e,t))}function Si(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Eu=Si(),eg=Si(),wu=Si(),Tu=Si(),ng=Si(),ig=Si(),bu=Si(),rg=Si(),sg=Si(),ro=class{constructor(e,t,n){this.g=e,this.h=t,e=Eu,this.l=!!e&&n===e||!1}};function Al(e,t){return new ro(e,t,Eu)}function og(e,t,n,i,r){Qa(e,n,hg(t,i),r)}const X_=Al((function(e,t,n,i,r){return e.h===2&&(Ko(e,mu(t,i,n),r),!0)}),og),j_=Al((function(e,t,n,i,r){return e.h===2&&(Ko(e,mu(t,i,n),r),!0)}),og);var Rl=Symbol(),Au=Symbol(),Wf=Symbol(),Xf=Symbol();let ag,lg;function is(e,t,n,i){var r=i[e];if(r)return r;(r={}).Ma=i,r.T=(function(g){switch(typeof g){case"boolean":return Gm||=[0,void 0,!0];case"number":return g>0?void 0:g===0?z_||=[0,void 0]:[-g,void 0];case"string":return[0,g];case"object":return g}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ga=s,typeof(s=i[++a])=="function"&&(r.la=!0,ag??=s,lg??=i[a+1],s=i[a+=2]));const h={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var f=0;f<s.length;f++)h[s[f]]=s;s=i[++a]}for(f=1;s!==void 0;){let g;typeof s=="number"&&(f+=s,s=i[++a]);var d=void 0;if(s instanceof ro?g=s:(g=X_,a--),g?.l){s=i[++a],d=i;var m=a;typeof s=="function"&&(s=s(),d[m]=s),d=s}for(m=f+1,typeof(s=i[++a])=="number"&&s<0&&(m-=s,s=i[++a]);f<m;f++){const _=h[f];d?n(r,f,g,d,_):t(r,f,g,_)}}return i[e]=r}function cg(e){return Array.isArray(e)?e[0]instanceof ro?e:[j_,e]:[e,void 0]}function hg(e,t){return e instanceof Ot?e.u:Array.isArray(e)?gr(e,t,!1):void 0}function Ru(e,t,n,i){const r=n.g;e[t]=i?(s,a,h)=>r(s,a,h,i):r}function Cu(e,t,n,i,r){const s=n.g;let a,h;e[t]=(f,d,m)=>s(f,d,m,h||=is(Au,Ru,Cu,i).T,a||=Pu(i),r)}function Pu(e){let t=e[Wf];if(t!=null)return t;const n=is(Au,Ru,Cu,e);return t=n.la?(i,r)=>ag(i,r,n):(i,r)=>{const s=0|i[Yt];for(;Qm(r)&&r.h!=4;){var a=r.m,h=n[a];if(h==null){var f=n.ga;f&&(f=f[a])&&(f=q_(f))!=null&&(h=n[a]=f)}h!=null&&h(r,i,a)||(a=(h=r).l,Da(h),h.fa?h=void 0:(f=h.g.g-a,h.g.g=a,h=Jm(h.g,f)),a=i,h&&((f=a[Os])?f.push(h):a[Os]=[h]))}return 8192&s&&Qs(i),!0},e[Wf]=t}function q_(e){const t=(e=cg(e))[0].g;if(e=e[1]){const n=Pu(e),i=is(Au,Ru,Cu,e).T;return(r,s,a)=>t(r,s,a,i,n)}return t}function Cl(e,t,n){e[t]=n.h}function Pl(e,t,n,i){let r,s;const a=n.h;e[t]=(h,f,d)=>a(h,f,d,s||=is(Rl,Cl,Pl,i).T,r||=ug(i))}function ug(e){let t=e[Xf];if(!t){const n=is(Rl,Cl,Pl,e);t=(i,r)=>fg(i,r,n),e[Xf]=t}return t}function fg(e,t,n){(function(i,r,s){const a=512&r?0:-1,h=i.length,f=h+((r=64&r?256&r:!!h&&ml(i[h-1]))?-1:0);for(let d=0;d<f;d++)s(d-a,i[d]);if(r){i=i[h-1];for(const d in i)!isNaN(d)&&s(+d,i[d])}})(e,0|e[Yt]|(n.T[1]?512:0),((i,r)=>{if(r!=null){var s=(function(a,h){var f=a[h];if(f)return f;if((f=a.ga)&&(f=f[h])){var d=(f=cg(f))[0].h;if(f=f[1]){const m=ug(f),g=is(Rl,Cl,Pl,f).T;f=a.la?lg(g,m):(_,M,E)=>d(_,M,E,g,m)}else f=d;return a[h]=f}})(n,i);s&&s(t,r,i)}})),(e=iu(e))&&(function(i,r){Gs(i,i.g.end());for(let s=0;s<r.length;s++)Gs(i,Qh(r[s])||new Uint8Array(0))})(t,e)}function so(e,t){if(Array.isArray(t)){var n=0|t[Yt];if(4&n)return t;for(var i=0,r=0;i<t.length;i++){const s=e(t[i]);s!=null&&(t[r++]=s)}return r<i&&(t.length=r),on(t,-6145&(5|n)),2&n&&Object.freeze(t),t}}function In(e,t,n){return new ro(e,t,n)}function oo(e,t,n){return new ro(e,t,n)}function Dn(e,t,n){Ke(e,0|e[Yt],t,n)}var Y_=Al((function(e,t,n,i,r){return e.h===2&&(e=Ko(e,gr([void 0,void 0],i,!0),r),br(i=0|t[Yt]),(r=tr(t,i,n))instanceof Ui?(2&r.M)!=0?((r=r.da()).push(e),Ke(t,i,n,r)):r.Ja(e):Array.isArray(r)?(2&(0|r[Yt])&&Ke(t,i,n,r=Xm(r)),r.push(e)):Ke(t,i,n,[e]),!0)}),(function(e,t,n,i,r){if(t instanceof Ui)t.forEach(((s,a)=>{Qa(e,n,gr([a,s],i,!1),r)}));else if(Array.isArray(t))for(let s=0;s<t.length;s++){const a=t[s];Array.isArray(a)&&Qa(e,n,gr(a,i,!1),r)}}));function dg(e,t,n){if(t=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(Oo(64,i));if(Bo(i)){if(r==="string")return Bm(i);if(r==="number")return lu(i)}})(t),t!=null&&(typeof t=="string"&&Hf(t),t!=null))switch(ti(e,n,0),typeof t){case"number":e=e.g,es(t),Rs(e,Oe,Ze);break;case"bigint":n=BigInt.asUintN(64,t),n=new Qc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Rs(e.g,n.h,n.g);break;default:n=Hf(t),Rs(e.g,n.h,n.g)}}function pg(e,t,n){(t=to(t))!=null&&t!=null&&(ti(e,n,0),Tl(e.g,t))}function mg(e,t,n){(t=Um(t))!=null&&(ti(e,n,0),e.g.g.push(t?1:0))}function gg(e,t,n){(t=ks(t))!=null&&bl(e,n,Mm(t))}function _g(e,t,n,i,r){Qa(e,n,hg(t,i),r)}function vg(e,t,n){t==null||typeof t=="string"||t instanceof Yi||(Qr(t)?Qr(t)&&tu(Cm):t=void 0),t!=null&&bl(e,n,_u(t).buffer)}function xg(e,t,n){return(e.h===5||e.h===2)&&(t=no(t,0|t[Yt],n,!1),e.h==2?wl(e,Zc,t):t.push(Zc(e.g)),!0)}var Wi=In((function(e,t,n){if(e.h!==1)return!1;var i=e.g;e=$c(i);const r=$c(i);i=2*(r>>31)+1;const s=r>>>20&2047;return e=4294967296*(1048575&r)+e,Dn(t,n,s==2047?e?NaN:i*(1/0):s==0?5e-324*i*e:i*Math.pow(2,s-1075)*(e+4503599627370496)),!0}),(function(e,t,n){(t=Ar(t))!=null&&(ti(e,n,1),e=e.g,(n=Im||=new DataView(new ArrayBuffer(8))).setFloat64(0,+t,!0),Oe=n.getUint32(0,!0),Ze=n.getUint32(4,!0),zo(e,Oe),zo(e,Ze))}),Si()),an=In((function(e,t,n){return e.h===5&&(Dn(t,n,Zc(e.g)),!0)}),(function(e,t,n){(t=Ar(t))!=null&&(ti(e,n,5),e=e.g,ru(t),zo(e,Oe))}),bu),K_=oo(xg,(function(e,t,n){if((t=so(Ar,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&(ti(i,r,5),i=i.g,ru(s),zo(i,Oe))}}),bu),Lu=oo(xg,(function(e,t,n){if((t=so(Ar,t))!=null&&t.length){ti(e,n,2),io(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,ru(t[i]),zo(n,Oe)}}),bu),yr=In((function(e,t,n){return e.h===0&&(Dn(t,n,vu(e.g,ou)),!0)}),dg,ig),Ql=In((function(e,t,n){return e.h===0&&(Dn(t,n,(e=vu(e.g,ou))===0?void 0:e),!0)}),dg,ig),$_=In((function(e,t,n){return e.h===0&&(Dn(t,n,vu(e.g,su)),!0)}),(function(e,t,n){if((t=P_(t))!=null&&(typeof t=="string"&&Vf(t),t!=null))switch(ti(e,n,0),typeof t){case"number":e=e.g,es(t),Rs(e,Oe,Ze);break;case"bigint":n=BigInt.asUintN(64,t),n=new Jc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Rs(e.g,n.h,n.g);break;default:n=Vf(t),Rs(e.g,n.h,n.g)}}),Si()),Je=In((function(e,t,n){return e.h===0&&(Dn(t,n,xr(e.g)),!0)}),pg,Tu),Ll=oo((function(e,t,n){return(e.h===0||e.h===2)&&(t=no(t,0|t[Yt],n,!1),e.h==2?wl(e,xr,t):t.push(xr(e.g)),!0)}),(function(e,t,n){if((t=so(to,t))!=null&&t.length){n=Mu(e,n);for(let i=0;i<t.length;i++)Tl(e.g,t[i]);Su(e,n)}}),Tu),bs=In((function(e,t,n){return e.h===0&&(Dn(t,n,(e=xr(e.g))===0?void 0:e),!0)}),pg,Tu),We=In((function(e,t,n){return e.h===0&&(Dn(t,n,xu(e.g)),!0)}),mg,eg),Cs=In((function(e,t,n){return e.h===0&&(Dn(t,n,(e=xu(e.g))===!1?void 0:e),!0)}),mg,eg),xn=oo((function(e,t,n){return e.h===2&&(e=yu(e),no(t,0|t[Yt],n,!1).push(e),!0)}),(function(e,t,n){if((t=so(ks,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&bl(i,r,Mm(s))}}),wu),fr=In((function(e,t,n){return e.h===2&&(Dn(t,n,(e=yu(e))===""?void 0:e),!0)}),gg,wu),Ce=In((function(e,t,n){return e.h===2&&(Dn(t,n,yu(e)),!0)}),gg,wu),hn=(function(e,t,n=Eu){return new ro(e,t,n)})((function(e,t,n,i,r){return e.h===2&&(i=gr(void 0,i,!0),no(t,0|t[Yt],n,!0).push(i),Ko(e,i,r),!0)}),(function(e,t,n,i,r){if(Array.isArray(t))for(let s=0;s<t.length;s++)_g(e,t[s],n,i,r)})),Re=Al((function(e,t,n,i,r,s){return e.h===2&&(jm(t,0|t[Yt],s,n),Ko(e,t=mu(t,i,n),r),!0)}),_g),yg=In((function(e,t,n){return e.h===2&&(Dn(t,n,tg(e)),!0)}),vg,rg),Z_=oo((function(e,t,n){return(e.h===0||e.h===2)&&(t=no(t,0|t[Yt],n,!1),e.h==2?wl(e,Qi,t):t.push(Qi(e.g)),!0)}),(function(e,t,n){if((t=so(Nm,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&(ti(i,r,0),io(i.g,s))}}),ng),J_=In((function(e,t,n){return e.h===0&&(Dn(t,n,(e=Qi(e.g))===0?void 0:e),!0)}),(function(e,t,n){(t=Nm(t))!=null&&t!=null&&(ti(e,n,0),io(e.g,t))}),ng),Zn=In((function(e,t,n){return e.h===0&&(Dn(t,n,xr(e.g)),!0)}),(function(e,t,n){(t=to(t))!=null&&(t=parseInt(t,10),ti(e,n,0),Tl(e.g,t))}),sg);class Q_{constructor(t,n){this.h=t,this.g=n,this.l=Ee,this.m=Qt,this.defaultValue=void 0}register(){ul(this)}}function Ei(e,t){return new Q_(e,t)}function Rr(e,t){return(n,i)=>{if(na.length){const s=na.pop();s.o(i),Jl(s.g,n,i),n=s}else n=new class{constructor(s,a){if(Gf.length){const h=Gf.pop();Jl(h,s,a),s=h}else s=new class{constructor(h,f){this.h=null,this.m=!1,this.g=this.l=this.j=0,Jl(this,h,f)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({fa:s=!1}={}){this.fa=s}}(n,i);try{const s=new e,a=s.u;Pu(t)(a,n);var r=s}finally{n.g.clear(),n.m=-1,n.h=-1,na.length<100&&na.push(n)}return r}}function Il(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};fg(this.u,t,is(Rl,Cl,Pl,e)),Gs(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,r=i.length;let s=0;for(let a=0;a<r;a++){const h=i[a];n.set(h,s),s+=h.length}return t.l=[n],n}}var jf=class extends Ot{constructor(e){super(e)}},qf=[0,fr,In((function(e,t,n){return e.h===2&&(Dn(t,n,(e=tg(e))===ts()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof Ot){const i=t.Oa;return void(i&&(t=i(t),t!=null&&bl(e,n,_u(t).buffer)))}if(Array.isArray(t))return}vg(e,t,n)}),rg)];let tc,Yf=globalThis.trustedTypes;function Kf(e){tc===void 0&&(tc=(function(){let n=null;if(!Yf)return n;try{const i=r=>r;n=Yf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})());var t=tc;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(t?t.createScriptURL(e):e)}function t1(e,...t){if(t.length===0)return Kf(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return Kf(n)}var Mg=[0,Je,Zn,We,-1,Ll,Zn,-1],e1=class extends Ot{constructor(e){super(e)}},Sg=[0,We,Ce,We,Zn,-1,oo((function(e,t,n){return(e.h===0||e.h===2)&&(t=no(t,0|t[Yt],n,!1),e.h==2?wl(e,V_,t):t.push(xr(e.g)),!0)}),(function(e,t,n){if((t=so(to,t))!=null&&t.length){n=Mu(e,n);for(let i=0;i<t.length;i++)Tl(e.g,t[i]);Su(e,n)}}),sg),Ce,-1,[0,We,-1],Zn,We,-1],Eg=[0,Ce,-2],$f=class extends Ot{constructor(e){super(e)}},wg=[0],Tg=[0,Je,We,1,We,-3],Qn=class extends Ot{constructor(e){super(e,2)}},ln={};ln[336783863]=[0,Ce,We,-1,Je,[0,[1,2,3,4,5,6,7,8,9],Re,wg,Re,Sg,Re,Eg,Re,Tg,Re,Mg,Re,[0,Ce,-2],Re,[0,Ce,Zn],Re,[0,Zn,Ce,-1],Re,[0,Zn,-1]],[0,Ce],We,[0,[1,3],[2,4],Re,[0,Ll],-1,Re,[0,xn],-1,hn,[0,Ce,-1]],Ce];var Zf=[0,Ql,-1,Cs,-3,Ql,Ll,fr,bs,Ql,-1,Cs,bs,Cs,-2,fr];function ei(e,t){Kc(e,2,eo(t),"")}function ze(e,t){El(e,3,t)}function ye(e,t){El(e,4,t)}var Ln=class extends Ot{constructor(e){super(e,500)}o(e){return Qt(this,0,7,e)}},Lo=[-1,{}],Jf=[0,Ce,1,Lo],Qf=[0,Ce,xn,Lo];function ni(e,t){Za(e,1,Ln,t)}function Ve(e,t){El(e,10,t)}function Te(e,t){El(e,15,t)}var Wn=class extends Ot{constructor(e){super(e,500)}o(e){return Qt(this,0,1001,e)}},bg=[-500,hn,[-500,fr,-1,xn,-3,[-2,ln,We],hn,qf,bs,-1,Jf,Qf,hn,[0,fr,Cs],fr,Zf,bs,xn,987,xn],4,hn,[-500,Ce,-1,[-1,{}],998,Ce],hn,[-500,Ce,xn,-1,[-2,{},We],997,xn,-1],bs,hn,[-500,Ce,xn,Lo,998,xn],xn,bs,Jf,Qf,hn,[0,fr,-1,Lo],xn,-2,Zf,fr,-1,Cs,[0,Cs,J_],978,Lo,hn,qf];Wn.prototype.g=Il(bg);var n1=Rr(Wn,bg),i1=class extends Ot{constructor(e){super(e)}},Ag=class extends Ot{constructor(e){super(e)}g(){return Ji(this,i1,1)}},Rg=[0,hn,[0,Je,an,Ce,-1]],Dl=Rr(Ag,Rg),r1=class extends Ot{constructor(e){super(e)}},s1=class extends Ot{constructor(e){super(e)}},ec=class extends Ot{constructor(e){super(e)}h(){return Ee(this,r1,2)}g(){return Ji(this,s1,5)}},Cg=Rr(class extends Ot{constructor(e){super(e)}},[0,xn,Ll,Lu,[0,Zn,[0,Je,-3],[0,an,-3],[0,Je,-1,[0,hn,[0,Je,-2]]],hn,[0,an,-1,Ce,an]],Ce,-1,yr,hn,[0,Je,an],xn,yr]),Pg=class extends Ot{constructor(e){super(e)}},Ps=Rr(class extends Ot{constructor(e){super(e)}},[0,hn,[0,an,-4]]),Lg=class extends Ot{constructor(e){super(e)}},$o=Rr(class extends Ot{constructor(e){super(e)}},[0,hn,[0,an,-4]]),o1=class extends Ot{constructor(e){super(e)}},a1=[0,Je,-1,Lu,Zn],Ig=class extends Ot{constructor(e){super(e)}};Ig.prototype.g=Il([0,an,-4,yr]);var l1=class extends Ot{constructor(e){super(e)}},c1=Rr(class extends Ot{constructor(e){super(e)}},[0,hn,[0,1,Je,Ce,Rg],yr]),td=class extends Ot{constructor(e){super(e)}},h1=class extends Ot{constructor(e){super(e)}ma(){const e=Wm(this);return e??ts()}},u1=class extends Ot{constructor(e){super(e)}},Dg=[1,2],f1=Rr(class extends Ot{constructor(e){super(e)}},[0,hn,[0,Dg,Re,[0,Lu],Re,[0,yg],Je,Ce],yr]),Iu=class extends Ot{constructor(e){super(e)}},Ug=[0,Ce,Je,an,xn,-1],ed=class extends Ot{constructor(e){super(e)}},d1=[0,We,-1],nd=class extends Ot{constructor(e){super(e)}},Ua=[1,2,3,4,5],tl=class extends Ot{constructor(e){super(e)}g(){return Wm(this)!=null}h(){return fi(this,2)!=null}},je=class extends Ot{constructor(e){super(e)}g(){return Um(zs(this,2))??!1}},Ng=[0,yg,Ce,[0,Je,yr,-1],[0,$_,yr]],nn=[0,Ng,We,[0,Ua,Re,Tg,Re,Sg,Re,Mg,Re,wg,Re,Eg],Zn],Ul=class extends Ot{constructor(e){super(e)}},Du=[0,nn,an,-1,Je],p1=Ei(502141897,Ul);ln[502141897]=Du;var m1=Rr(class extends Ot{constructor(e){super(e)}},[0,[0,Zn,-1,K_,Z_],a1]),Fg=class extends Ot{constructor(e){super(e)}},Og=class extends Ot{constructor(e){super(e)}},Uu=[0,nn,an,[0,nn],We],Bg=[0,nn,Du,Uu,an,[0,[0,Ng]]],g1=Ei(508968150,Og);ln[508968150]=Bg,ln[508968149]=Uu;var kg=class extends Ot{constructor(e){super(e)}},_1=Ei(513916220,kg);ln[513916220]=[0,nn,Bg,Je];var as=class extends Ot{constructor(e){super(e)}h(){return Ee(this,Iu,2)}g(){ke(this,2)}},zg=[0,nn,Ug];ln[478825465]=zg;var v1=class extends Ot{constructor(e){super(e)}},Gg=class extends Ot{constructor(e){super(e)}},Nu=class extends Ot{constructor(e){super(e)}},Fu=class extends Ot{constructor(e){super(e)}},Vg=class extends Ot{constructor(e){super(e)}},id=[0,nn,[0,nn],zg,-1],Hg=[0,nn,an,Je],Ou=[0,nn,an],Wg=[0,nn,Hg,Ou,an],x1=Ei(479097054,Vg);ln[479097054]=[0,nn,Wg,id],ln[463370452]=id,ln[464864288]=Hg;var y1=Ei(462713202,Fu);ln[462713202]=Wg,ln[474472470]=Ou;var M1=class extends Ot{constructor(e){super(e)}},Xg=class extends Ot{constructor(e){super(e)}},jg=class extends Ot{constructor(e){super(e)}},qg=class extends Ot{constructor(e){super(e)}},Bu=[0,nn,an,-1,Je],th=[0,nn,an,We];qg.prototype.g=Il([0,nn,Ou,[0,nn],Du,Uu,Bu,th]);var Yg=class extends Ot{constructor(e){super(e)}},S1=Ei(456383383,Yg);ln[456383383]=[0,nn,Ug];var Kg=class extends Ot{constructor(e){super(e)}},E1=Ei(476348187,Kg);ln[476348187]=[0,nn,d1];var $g=class extends Ot{constructor(e){super(e)}},rd=class extends Ot{constructor(e){super(e)}},Zg=[0,Zn,-1],w1=Ei(458105876,class extends Ot{constructor(e){super(e)}g(){var e=this.u;const t=0|e[Yt],n=2&t;return e=(function(i,r,s){var a=rd;const h=2&r;let f=!1;if(s==null){if(h)return zf();s=[]}else if(s.constructor===Ui){if((2&s.M)==0||h)return s;s=s.da()}else Array.isArray(s)?f=!!(2&(0|s[Yt])):s=[];if(h){if(!s.length)return zf();f||(f=!0,Qs(s))}else f&&(f=!1,s=Xm(s));return f||(64&(0|s[Yt])?s[Yt]&=-33:32&r&&dl(s,32)),Ke(i,r,2,a=new Ui(s,a,L_,void 0)),a})(e,t,tr(e,t,2)),!n&&rd&&(e.pa=!0),e}});ln[458105876]=[0,Zg,Y_,[!0,yr,[0,Ce,-1,xn]]];var ku=class extends Ot{constructor(e){super(e)}},Jg=Ei(458105758,ku);ln[458105758]=[0,nn,Ce,Zg];var Qg=class extends Ot{constructor(e){super(e)}},T1=Ei(443442058,Qg);ln[443442058]=[0,nn,Ce,Je,an,xn,-1,We,an],ln[514774813]=Bu;var t0=class extends Ot{constructor(e){super(e)}},b1=Ei(516587230,t0);function eh(e,t){return t=t?t.clone():new Iu,e.displayNamesLocale!==void 0?ke(t,1,eo(e.displayNamesLocale)):e.displayNamesLocale===void 0&&ke(t,1),e.maxResults!==void 0?Ni(t,2,e.maxResults):"maxResults"in e&&ke(t,2),e.scoreThreshold!==void 0?Xt(t,3,e.scoreThreshold):"scoreThreshold"in e&&ke(t,3),e.categoryAllowlist!==void 0?Ja(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&ke(t,4),e.categoryDenylist!==void 0?Ja(t,5,e.categoryDenylist):"categoryDenylist"in e&&ke(t,5),t}function zu(e,t=-1,n=""){return{categories:e.map((i=>({index:ci(i,1)??0??-1,score:Qe(i,2)??0,categoryName:fi(i,3)??""??"",displayName:fi(i,4)??""??""}))),headIndex:t,headName:n}}function e0(e){var t=Xr(e,3,Ar,Wr()),n=Xr(e,2,to,Wr()),i=Xr(e,1,ks,Wr()),r=Xr(e,9,ks,Wr());const s={categories:[],keypoints:[]};for(let a=0;a<t.length;a++)s.categories.push({score:t[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((t=Ee(e,ec,4)?.h())&&(s.boundingBox={originX:ci(t,1)??0,originY:ci(t,2)??0,width:ci(t,3)??0,height:ci(t,4)??0,angle:0}),Ee(e,ec,4)?.g().length)for(const a of Ee(e,ec,4).g())s.keypoints.push({x:Ia(a,1)??0,y:Ia(a,2)??0,score:Ia(a,4)??0,label:fi(a,3)??""});return s}function Nl(e){const t=[];for(const n of Ji(e,Lg,1))t.push({x:Qe(n,1)??0,y:Qe(n,2)??0,z:Qe(n,3)??0,visibility:Qe(n,4)??0});return t}function Io(e){const t=[];for(const n of Ji(e,Pg,1))t.push({x:Qe(n,1)??0,y:Qe(n,2)??0,z:Qe(n,3)??0,visibility:Qe(n,4)??0});return t}function sd(e){return Array.from(e,(t=>t>127?t-256:t))}function od(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,r=0;for(let s=0;s<e.length;s++)n+=e[s]*t[s],i+=e[s]*e[s],r+=t[s]*t[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let ia;ln[516587230]=[0,nn,Bu,th,an],ln[518928384]=th;const A1=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function n0(){if(ia===void 0)try{await WebAssembly.instantiate(A1),ia=!0}catch{ia=!1}return ia}async function mo(e,t=t1``){const n=await n0()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var cr=class{};function i0(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function ad(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,i)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(t)}))}importScripts(e.toString())}function r0(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function qt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function ld(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=r0(t);return!e.l||i===e.i.canvas.width&&r===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=r),[i,r]}function cd(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let r=0;r<t.length;r++)i[r]=e.i.stringToNewUTF8(t[r]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const r of i)e.i._free(r);e.i._free(t)}function Ti(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function nr(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}cr.forVisionTasks=function(e){return mo("vision",e)},cr.forTextTasks=function(e){return mo("text",e)},cr.forGenAiExperimentalTasks=function(e){return mo("genai_experimental",e)},cr.forGenAiTasks=function(e){return mo("genai",e)},cr.forAudioTasks=function(e){return mo("audio",e)},cr.isSimdSupported=function(){return n0()};async function R1(e,t,n,i){return e=await(async(r,s,a,h,f)=>{if(s&&await ad(s),!self.ModuleFactory||a&&(await ad(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&f&&((s=self.Module).locateFile=f.locateFile,f.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=f.mainScriptUrlOrBlob)),f=await self.ModuleFactory(self.Module||f),self.ModuleFactory=self.Module=void 0,new r(f,h)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await e.o(i),e}function nc(e,t){const n=Ee(e.baseOptions,tl,1)||new tl;typeof t=="string"?(ke(n,2,eo(t)),ke(n,1)):t instanceof Uint8Array&&(ke(n,1,nu(t,!1)),ke(n,2)),Qt(e.baseOptions,0,1,n)}function hd(e){try{const t=e.G.length;if(t===1)throw Error(e.G[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.G.map((n=>n.message)).join(", "))}finally{e.G=[]}}function Nt(e,t){e.B=Math.max(e.B,t)}function Fl(e,t){e.A=new Ln,ei(e.A,"PassThroughCalculator"),ze(e.A,"free_memory"),ye(e.A,"free_memory_unused_out"),Ve(t,"free_memory"),ni(t,e.A)}function Vs(e,t){ze(e.A,t),ye(e.A,t+"_unused_out")}function Ol(e){e.g.addBoolToStream(!0,"free_memory",e.B)}var nh=class{constructor(e){this.g=e,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){if(t){const n=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(Ee(this.baseOptions,tl,1)?.g()||Ee(this.baseOptions,tl,1)?.h()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=Ee(i.baseOptions,nd,3);if(!s){var a=s=new nd,h=new $f;Po(a,4,Ua,h)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new e1,Po(r,2,Ua,a)):(r=s,a=new $f,Po(r,4,Ua,a))),Qt(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),nc(this,"/model.dat"),this.m(),this.J()}));if(n.modelAssetBuffer instanceof Uint8Array)nc(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:h}=await i.read();if(a)break;r.push(h),s+=h.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{nc(this,i),this.m(),this.J()}))}return this.m(),this.J(),Promise.resolve()}J(){}ca(){let e;if(this.g.ca((t=>{e=n1(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,i)=>{this.G.push(Error(i))})),this.g.Ha(),this.g.setGraph(e,t),this.A=void 0,hd(this)}finishProcessing(){this.g.finishProcessing(),hd(this)}close(){this.A=void 0,this.g.closeGraph()}};function Pn(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}nh.prototype.close=nh.prototype.close;class C1{constructor(t,n,i,r){this.g=t,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function ud(e,t,n){const i=e.g;if(n=Pn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function fd(e,t){const n=e.g,i=Pn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Pn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.P),n.vertexAttribPointer(e.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Pn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.J),n.vertexAttribPointer(e.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new C1(n,i,r,s)}function Gu(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function Zo(e,t,n,i){return Gu(e,t),e.h||(e.m(),e.C()),n?(e.s||(e.s=fd(e,!0)),n=e.s):(e.v||(e.v=fd(e,!1)),n=e.v),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function Mr(e,t,n){return Gu(e,t),e=Pn(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Bl(e,t,n){Gu(e,t),e.A||(e.A=Pn(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function Vu(e){e.g?.bindFramebuffer(e.g.FRAMEBUFFER,null)}var ao=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=Pn(e.createProgram(),"Failed to create WebGL program"),this.Z=ud(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.Y=ud(this,this.G(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.P=e.getAttribLocation(this.h,"aVertex"),this.J=e.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.Z),e.deleteShader(this.Y)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}},P1=class extends ao{G(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}C(){const e=this.g;e.activeTexture(e.TEXTURE1),this.B=Mr(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.j=Mr(this,e,e.NEAREST)}m(){super.m();const e=this.g;this.L=Pn(e.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.U=Pn(e.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.K=Pn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();const e=this.g;e.uniform1i(this.K,0),e.uniform1i(this.L,1),e.uniform1i(this.U,2)}close(){this.B&&this.g.deleteTexture(this.B),this.j&&this.g.deleteTexture(this.j),super.close()}},L1=class extends ao{G(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}C(){const e=this.g;e.activeTexture(e.TEXTURE1),this.j=Mr(this,e),e.activeTexture(e.TEXTURE2),this.B=Mr(this,e)}m(){super.m();const e=this.g;this.K=Pn(e.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.L=Pn(e.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.H=Pn(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();const e=this.g;e.uniform1i(this.H,0),e.uniform1i(this.K,1),e.uniform1i(this.L,2)}close(){this.j&&this.g.deleteTexture(this.j),this.B&&this.g.deleteTexture(this.B),super.close()}};function Xi(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function ih(e){var t=Xi(e,1);if(!t){if(t=Xi(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);const i=Hs(e);var n=Hu(e);if(Bl(n,i,s0(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<t.length;++r,s+=4)t[r]=n[s]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function s0(e){let t=Xi(e,2);if(!t){const n=Hs(e);t=a0(e);const i=ih(e),r=o0(e);n.texImage2D(n.TEXTURE_2D,0,r,e.width,e.height,0,n.RED,n.FLOAT,i),rh(e)}return t}function Hs(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Pn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function o0(e){if(e=Hs(e),!ra)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))ra=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");ra=e.R16F}return ra}function Hu(e){return e.l||(e.l=new ao),e.l}function a0(e){const t=Hs(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Xi(e,2);return n||(n=Mr(Hu(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function rh(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var ra,cn=class{constructor(e,t,n,i,r,s,a){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--dd===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Da(){return!!Xi(this,0)}ja(){return!!Xi(this,1)}R(){return!!Xi(this,2)}ia(){return(t=Xi(e=this,0))||(t=ih(e),t=new Uint8Array(t.map((n=>255*n))),e.g.push(t)),t;var e,t}ha(){return ih(this)}N(){return s0(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=Hs(this),r=Hu(this);i.activeTexture(i.TEXTURE1),n=Mr(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=o0(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Bl(r,i,n),Zo(r,i,!1,(()=>{a0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),rh(this)})),Vu(r),rh(this)}}e.push(n)}return new cn(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Hs(this).deleteTexture(Xi(this,2)),dd=-1}};cn.prototype.close=cn.prototype.close,cn.prototype.clone=cn.prototype.clone,cn.prototype.getAsWebGLTexture=cn.prototype.N,cn.prototype.getAsFloat32Array=cn.prototype.ha,cn.prototype.getAsUint8Array=cn.prototype.ia,cn.prototype.hasWebGLTexture=cn.prototype.R,cn.prototype.hasFloat32Array=cn.prototype.ja,cn.prototype.hasUint8Array=cn.prototype.Da;var dd=250;const I1={color:"white",lineWidth:4,radius:6};function ic(e){return{...I1,fillColor:(e=e||{}).color,...e}}function Oi(e,t){return e instanceof Function?e(t):e}function pd(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function go(e){if(!e.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return e.l}function Go(e){if(!e.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return e.j}function md(e,t,n){if(t.R())n(t.N());else{const i=t.ja()?t.ha():t.ia();e.m=e.m??new ao;const r=Go(e);n((e=new cn([i],t.m,!1,r.canvas,e.m,t.width,t.height)).N()),e.close()}}function gd(e,t,n,i){const r=(function(h){return h.g||(h.g=new P1),h.g})(e),s=Go(e),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;Zo(r,s,!0,(()=>{(function(f,d,m,g){const _=f.g;if(_.activeTexture(_.TEXTURE0),_.bindTexture(_.TEXTURE_2D,d),_.activeTexture(_.TEXTURE1),_.bindTexture(_.TEXTURE_2D,f.B),_.texImage2D(_.TEXTURE_2D,0,_.RGBA,_.RGBA,_.UNSIGNED_BYTE,m),f.H&&(function(M,E){if(M!==E)return!1;M=M.entries(),E=E.entries();for(const[x,v]of M){M=x;const O=v;var S=E.next();if(S.done)return!1;const[U,C]=S.value;if(S=C,M!==U||O[0]!==S[0]||O[1]!==S[1]||O[2]!==S[2]||O[3]!==S[3])return!1}return!!E.next().done})(f.H,g))_.activeTexture(_.TEXTURE2),_.bindTexture(_.TEXTURE_2D,f.j);else{f.H=g;const M=Array(1024).fill(0);g.forEach(((E,S)=>{if(E.length!==4)throw Error(`Color at index ${S} is not a four-channel value.`);M[4*S]=E[0],M[4*S+1]=E[1],M[4*S+2]=E[2],M[4*S+3]=E[3]})),_.activeTexture(_.TEXTURE2),_.bindTexture(_.TEXTURE_2D,f.j),_.texImage2D(_.TEXTURE_2D,0,_.RGBA,256,1,0,_.RGBA,_.UNSIGNED_BYTE,new Uint8Array(M))}})(r,t,a,i),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4);const h=r.g;h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,null),h.activeTexture(h.TEXTURE1),h.bindTexture(h.TEXTURE_2D,null),h.activeTexture(h.TEXTURE2),h.bindTexture(h.TEXTURE_2D,null)}))}function _d(e,t,n,i){const r=Go(e),s=(function(f){return f.h||(f.h=new L1),f.h})(e),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,h=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;Zo(s,r,!0,(()=>{var f=s.g;f.activeTexture(f.TEXTURE0),f.bindTexture(f.TEXTURE_2D,t),f.activeTexture(f.TEXTURE1),f.bindTexture(f.TEXTURE_2D,s.j),f.texImage2D(f.TEXTURE_2D,0,f.RGBA,f.RGBA,f.UNSIGNED_BYTE,a),f.activeTexture(f.TEXTURE2),f.bindTexture(f.TEXTURE_2D,s.B),f.texImage2D(f.TEXTURE_2D,0,f.RGBA,f.RGBA,f.UNSIGNED_BYTE,h),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4),r.bindTexture(r.TEXTURE_2D,null),(f=s.g).activeTexture(f.TEXTURE0),f.bindTexture(f.TEXTURE_2D,null),f.activeTexture(f.TEXTURE1),f.bindTexture(f.TEXTURE_2D,null),f.activeTexture(f.TEXTURE2),f.bindTexture(f.TEXTURE_2D,null)}))}var On=class{constructor(e,t){typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.j=t):this.j=e}wa(e,t){if(e){var n=go(this);t=ic(t),n.save();var i=n.canvas,r=0;for(const s of e)n.fillStyle=Oi(t.fillColor,{index:r,from:s}),n.strokeStyle=Oi(t.color,{index:r,from:s}),n.lineWidth=Oi(t.lineWidth,{index:r,from:s}),(e=new Path2D).arc(s.x*i.width,s.y*i.height,Oi(t.radius,{index:r,from:s}),0,2*Math.PI),n.fill(e),n.stroke(e),++r;n.restore()}}va(e,t,n){if(e&&t){var i=go(this);n=ic(n),i.save();var r=i.canvas,s=0;for(const a of t){i.beginPath(),t=e[a.start];const h=e[a.end];t&&h&&(i.strokeStyle=Oi(n.color,{index:s,from:t,to:h}),i.lineWidth=Oi(n.lineWidth,{index:s,from:t,to:h}),i.moveTo(t.x*r.width,t.y*r.height),i.lineTo(h.x*r.width,h.y*r.height)),++s,i.stroke()}i.restore()}}sa(e,t){const n=go(this);t=ic(t),n.save(),n.beginPath(),n.lineWidth=Oi(t.lineWidth,{}),n.strokeStyle=Oi(t.color,{}),n.fillStyle=Oi(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}ta(e,t,n=[0,0,0,255]){this.l?(function(i,r,s,a){const h=Go(i);md(i,r,(f=>{gd(i,f,s,a),(f=go(i)).drawImage(h.canvas,0,0,f.canvas.width,f.canvas.height)}))})(this,e,n,t):gd(this,e.N(),n,t)}ua(e,t,n){this.l?(function(i,r,s,a){const h=Go(i);md(i,r,(f=>{_d(i,f,s,a),(f=go(i)).drawImage(h.canvas,0,0,f.canvas.width,f.canvas.height)}))})(this,e,t,n):_d(this,e.N(),t,n)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function Ri(e,t){switch(t){case 0:return e.g.find((n=>n instanceof ImageData));case 1:return e.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function l0(e){var t=Ri(e,0);if(!t){t=Ws(e);const n=kl(e),i=new Uint8Array(e.width*e.height*4);Bl(n,t,Na(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),Vu(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function Na(e){let t=Ri(e,2);if(!t){const n=Ws(e);t=Fa(e);const i=Ri(e,1)||l0(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Ao(e)}return t}function Ws(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Pn(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function kl(e){return e.l||(e.l=new ao),e.l}function Fa(e){const t=Ws(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Ri(e,2);return n||(n=Mr(kl(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Ao(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function vd(e){const t=Ws(e);return Zo(kl(e),t,!0,(()=>(function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,a=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=a,n})(e,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))))}On.prototype.close=On.prototype.close,On.prototype.drawConfidenceMask=On.prototype.ua,On.prototype.drawCategoryMask=On.prototype.ta,On.prototype.drawBoundingBox=On.prototype.sa,On.prototype.drawConnectors=On.prototype.va,On.prototype.drawLandmarks=On.prototype.wa,On.lerp=function(e,t,n,i,r){return pd(i*(1-(e-t)/(n-t))+r*(1-(n-e)/(n-t)),i,r)},On.clamp=pd;var pn=class{constructor(e,t,n,i,r,s,a){this.g=e,this.j=t,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--xd===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ca(){return!!Ri(this,0)}ka(){return!!Ri(this,1)}R(){return!!Ri(this,2)}Aa(){return l0(this)}za(){var e=Ri(this,1);return e||(Na(this),Fa(this),e=vd(this),Ao(this),this.g.push(e),this.j=!0),e}N(){return Na(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){const i=Ws(this),r=kl(this);i.activeTexture(i.TEXTURE1),n=Mr(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Bl(r,i,n),Zo(r,i,!1,(()=>{Fa(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ao(this)})),Vu(r),Ao(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Na(this),Fa(this),n=vd(this),Ao(this)}e.push(n)}return new pn(e,this.ka(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ri(this,1).close(),this.m&&Ws(this).deleteTexture(Ri(this,2)),xd=-1}};pn.prototype.close=pn.prototype.close,pn.prototype.clone=pn.prototype.clone,pn.prototype.getAsWebGLTexture=pn.prototype.N,pn.prototype.getAsImageBitmap=pn.prototype.za,pn.prototype.getAsImageData=pn.prototype.Aa,pn.prototype.hasWebGLTexture=pn.prototype.R,pn.prototype.hasImageBitmap=pn.prototype.ka,pn.prototype.hasImageData=pn.prototype.Ca;var xd=250;function wi(...e){return e.map((([t,n])=>({start:t,end:n})))}const D1=(function(e){return class extends e{Ha(){this.i._registerModelResourcesGraphService()}}})((yd=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:i0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),qt(this,i||"input_audio",(s=>{qt(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){Ti(this,"__graph_config__",(t=>{e(t)})),qt(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,r){const s=4*e.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(e,this.g/4),qt(this,i,(a=>{this.i._addAudioToInputStream(this.g,t,n,a,r)}))}addGpuBufferToStream(e,t,n){qt(this,t,(i=>{const[r,s]=ld(this,e,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(e,t,n){qt(this,t,(i=>{this.i._addBoolToInputStream(e,i,n)}))}addDoubleToStream(e,t,n){qt(this,t,(i=>{this.i._addDoubleToInputStream(e,i,n)}))}addFloatToStream(e,t,n){qt(this,t,(i=>{this.i._addFloatToInputStream(e,i,n)}))}addIntToStream(e,t,n){qt(this,t,(i=>{this.i._addIntToInputStream(e,i,n)}))}addUintToStream(e,t,n){qt(this,t,(i=>{this.i._addUintToInputStream(e,i,n)}))}addStringToStream(e,t,n){qt(this,t,(i=>{qt(this,e,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(e,t,n){qt(this,t,(i=>{cd(this,Object.keys(e),(r=>{cd(this,Object.values(e),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(e).length,i,n)}))}))}))}addProtoToStream(e,t,n,i){qt(this,n,(r=>{qt(this,t,(s=>{const a=this.i._malloc(e.length);this.i.HEAPU8.set(e,a),this.i._addProtoToInputStream(a,e.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(e,t){qt(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){qt(this,t,(i=>{const r=this.i._allocateBoolVector(e.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(e,t,n){qt(this,t,(i=>{const r=this.i._allocateDoubleVector(e.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(e,t,n){qt(this,t,(i=>{const r=this.i._allocateFloatVector(e.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(e,t,n){qt(this,t,(i=>{const r=this.i._allocateIntVector(e.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(e,t,n){qt(this,t,(i=>{const r=this.i._allocateUintVector(e.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(e,t,n){qt(this,t,(i=>{const r=this.i._allocateStringVector(e.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of e)qt(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(e,t){qt(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){qt(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){qt(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){qt(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){qt(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){qt(this,t,(n=>{qt(this,e,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(e,t,n){qt(this,n,(i=>{qt(this,t,(r=>{const s=this.i._malloc(e.length);this.i.HEAPU8.set(e,s),this.i._addProtoToInputSidePacket(s,e.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(e,t){qt(this,t,(n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(e,t){qt(this,t,(n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(e,t){qt(this,t,(n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(e,t){qt(this,t,(n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(e,t){qt(this,t,(n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(e,t){qt(this,t,(n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of e)qt(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(e,t){Ti(this,e,t),qt(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){nr(this,e,t),qt(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){Ti(this,e,t),qt(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){nr(this,e,t),qt(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){Ti(this,e,t),qt(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){nr(this,e,t),qt(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){Ti(this,e,t),qt(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){nr(this,e,t),qt(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){Ti(this,e,t),qt(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){nr(this,e,t),qt(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){Ti(this,e,t),qt(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){nr(this,e,t),qt(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){Ti(this,e,t),qt(this,e,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(e,t,n){nr(this,e,t),qt(this,e,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ti(this,e,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,r)})),qt(this,e,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends yd{get ea(){return this.i}oa(e,t,n){qt(this,t,(i=>{const[r,s]=ld(this,e,i);this.ea._addBoundTextureAsImageToStream(i,r,s,n)}))}V(e,t){Ti(this,e,t),qt(this,e,(n=>{this.ea._attachImageListener(n)}))}ba(e,t){nr(this,e,t),qt(this,e,(n=>{this.ea._attachImageVectorListener(n)}))}}));var yd,di=class extends D1{};async function ve(e,t,n){return(async function(i,r,s,a){return R1(i,r,s,a)})(e,n.canvas??(i0()?void 0:document.createElement("canvas")),t,n)}function c0(e,t,n,i){if(e.U){const s=new Ig;if(n?.regionOfInterest){if(!e.na)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Xt(s,1,(r.left+r.right)/2),Xt(s,2,(r.top+r.bottom)/2),Xt(s,4,r.right-r.left),Xt(s,3,r.bottom-r.top)}else Xt(s,1,.5),Xt(s,2,.5),Xt(s,4,1),Xt(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Xt(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,h]=r0(t);n=Qe(s,3)*h/a,r=Qe(s,4)*a/h,Xt(s,4,n),Xt(s,3,r)}}e.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.oa(t,e.Z,i??performance.now()),e.finishProcessing()}function pi(e,t,n){if(e.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");c0(e,t,n,e.B+1)}function Fi(e,t,n,i){if(!e.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");c0(e,t,n,i)}function Xs(e,t,n,i){var r=t.data;const s=t.width,a=s*(t=t.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return e=new cn([r],n,!1,e.g.i.canvas,e.P,s,t),i?e.clone():e}var Hn=class extends nh{constructor(e,t,n,i){super(e),this.g=e,this.Z=t,this.U=n,this.na=i,this.P=new ao}l(e,t=!0){if("runningMode"in e&&ko(this.baseOptions,2,!!e.runningMode&&e.runningMode!=="IMAGE"),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};Hn.prototype.close=Hn.prototype.close;var ii=class extends Hn{constructor(e,t){super(new di(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Qt(e=this.h=new Ul,0,1,t=new je),Xt(this.h,2,.5),Xt(this.h,3,.3)}get baseOptions(){return Ee(this.h,je,1)}set baseOptions(e){Qt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&Xt(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&Xt(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}D(e,t){return this.j={detections:[]},pi(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},Fi(this,e,n,t),this.j}m(){var e=new Wn;Ve(e,"image_in"),Ve(e,"norm_rect_in"),Te(e,"detections");const t=new Qn;Mi(t,p1,this.h);const n=new Ln;ei(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),ze(n,"IMAGE:image_in"),ze(n,"NORM_RECT:norm_rect_in"),ye(n,"DETECTIONS:detections"),n.o(t),ni(e,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=Cg(s),this.j.detections.push(e0(i));Nt(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Nt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ii.prototype.detectForVideo=ii.prototype.F,ii.prototype.detect=ii.prototype.D,ii.prototype.setOptions=ii.prototype.o,ii.createFromModelPath=async function(e,t){return ve(ii,e,{baseOptions:{modelAssetPath:t}})},ii.createFromModelBuffer=function(e,t){return ve(ii,e,{baseOptions:{modelAssetBuffer:t}})},ii.createFromOptions=function(e,t){return ve(ii,e,t)};var Wu=wi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Xu=wi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),ju=wi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),h0=wi([474,475],[475,476],[476,477],[477,474]),qu=wi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Yu=wi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),u0=wi([469,470],[470,471],[471,472],[472,469]),Ku=wi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),f0=[...Wu,...Xu,...ju,...qu,...Yu,...Ku],d0=wi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Md(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var $e=class extends Hn{constructor(e,t){super(new di(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Qt(e=this.h=new Og,0,1,t=new je),this.v=new Fg,Qt(this.h,0,3,this.v),this.s=new Ul,Qt(this.h,0,2,this.s),Ni(this.s,4,1),Xt(this.s,2,.5),Xt(this.v,2,.5),Xt(this.h,4,.5)}get baseOptions(){return Ee(this.h,je,1)}set baseOptions(e){Qt(this.h,0,1,e)}o(e){return"numFaces"in e&&Ni(this.s,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&Xt(this.s,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&Xt(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&Xt(this.v,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}D(e,t){return Md(this),pi(this,e,t),this.j}F(e,t,n){return Md(this),Fi(this,e,n,t),this.j}m(){var e=new Wn;Ve(e,"image_in"),Ve(e,"norm_rect"),Te(e,"face_landmarks");const t=new Qn;Mi(t,g1,this.h);const n=new Ln;ei(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),ze(n,"IMAGE:image_in"),ze(n,"NORM_RECT:norm_rect"),ye(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),ni(e,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=$o(s),this.j.faceLandmarks.push(Nl(i));Nt(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{Nt(this,i)})),this.outputFaceBlendshapes&&(Te(e,"blendshapes"),ye(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Dl(s),this.j.faceBlendshapes.push(zu(i.g()??[]));Nt(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{Nt(this,i)}))),this.outputFacialTransformationMatrixes&&(Te(e,"face_geometry"),ye(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Ee(m1(s),o1,2))&&this.j.facialTransformationMatrixes.push({rows:ci(i,1)??0??0,columns:ci(i,2)??0??0,data:Xr(i,3,Ar,Wr()).slice()??[]});Nt(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{Nt(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};$e.prototype.detectForVideo=$e.prototype.F,$e.prototype.detect=$e.prototype.D,$e.prototype.setOptions=$e.prototype.o,$e.createFromModelPath=function(e,t){return ve($e,e,{baseOptions:{modelAssetPath:t}})},$e.createFromModelBuffer=function(e,t){return ve($e,e,{baseOptions:{modelAssetBuffer:t}})},$e.createFromOptions=function(e,t){return ve($e,e,t)},$e.FACE_LANDMARKS_LIPS=Wu,$e.FACE_LANDMARKS_LEFT_EYE=Xu,$e.FACE_LANDMARKS_LEFT_EYEBROW=ju,$e.FACE_LANDMARKS_LEFT_IRIS=h0,$e.FACE_LANDMARKS_RIGHT_EYE=qu,$e.FACE_LANDMARKS_RIGHT_EYEBROW=Yu,$e.FACE_LANDMARKS_RIGHT_IRIS=u0,$e.FACE_LANDMARKS_FACE_OVAL=Ku,$e.FACE_LANDMARKS_CONTOURS=f0,$e.FACE_LANDMARKS_TESSELATION=d0;var bi=class extends Hn{constructor(e,t){super(new di(e,t),"image_in","norm_rect",!0),Qt(e=this.j=new kg,0,1,t=new je)}get baseOptions(){return Ee(this.j,je,1)}set baseOptions(e){Qt(this.j,0,1,e)}o(e){return super.l(e)}Ka(e,t,n){const i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:n,pi(this,e,i??{}),!this.h)return this.s}m(){var e=new Wn;Ve(e,"image_in"),Ve(e,"norm_rect"),Te(e,"stylized_image");const t=new Qn;Mi(t,_1,this.j);const n=new Ln;ei(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),ze(n,"IMAGE:image_in"),ze(n,"NORM_RECT:norm_rect"),ye(n,"STYLIZED_IMAGE:stylized_image"),n.o(t),ni(e,n),this.g.V("stylized_image",((i,r)=>{var s=!this.h,a=i.data,h=i.width;const f=h*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*f){const d=new Uint8ClampedArray(4*f);for(let m=0;m<f;++m)d[4*m]=a[3*m],d[4*m+1]=a[3*m+1],d[4*m+2]=a[3*m+2],d[4*m+3]=255;a=new ImageData(d,h,i)}else{if(a.length!==4*f)throw Error("Unsupported channel count: "+a.length/f);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),h,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);h=new pn([a],!1,!1,this.g.i.canvas,this.P,h,i),this.s=s=s?h.clone():h,this.h&&this.h(s),Nt(this,r)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),Nt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};bi.prototype.stylize=bi.prototype.Ka,bi.prototype.setOptions=bi.prototype.o,bi.createFromModelPath=function(e,t){return ve(bi,e,{baseOptions:{modelAssetPath:t}})},bi.createFromModelBuffer=function(e,t){return ve(bi,e,{baseOptions:{modelAssetBuffer:t}})},bi.createFromOptions=function(e,t){return ve(bi,e,t)};var $u=wi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Sd(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function Ed(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function wd(e,t=!0){const n=[];for(const r of e){var i=Dl(r);e=[];for(const s of i.g())i=t&&ci(s,1)!=null?ci(s,1)??0:-1,e.push({score:Qe(s,2)??0,index:i,categoryName:fi(s,3)??""??"",displayName:fi(s,4)??""??""});n.push(e)}return n}var jn=class extends Hn{constructor(e,t){super(new di(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Qt(e=this.j=new Vg,0,1,t=new je),this.s=new Fu,Qt(this.j,0,2,this.s),this.C=new Nu,Qt(this.s,0,3,this.C),this.v=new Gg,Qt(this.s,0,2,this.v),this.h=new v1,Qt(this.j,0,3,this.h),Xt(this.v,2,.5),Xt(this.s,4,.5),Xt(this.C,2,.5)}get baseOptions(){return Ee(this.j,je,1)}set baseOptions(e){Qt(this.j,0,1,e)}o(e){if(Ni(this.v,3,e.numHands??1),"minHandDetectionConfidence"in e&&Xt(this.v,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Xt(this.s,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Xt(this.C,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new as,n=t,i=eh(e.cannedGesturesClassifierOptions,Ee(this.h,as,3)?.h());Qt(n,0,2,i),Qt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&Ee(this.h,as,3)?.g();return e.customGesturesClassifierOptions?(Qt(n=t=new as,0,2,i=eh(e.customGesturesClassifierOptions,Ee(this.h,as,4)?.h())),Qt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&Ee(this.h,as,4)?.g(),this.l(e)}Fa(e,t){return Sd(this),pi(this,e,t),Ed(this)}Ga(e,t,n){return Sd(this),Fi(this,e,n,t),Ed(this)}m(){var e=new Wn;Ve(e,"image_in"),Ve(e,"norm_rect"),Te(e,"hand_gestures"),Te(e,"hand_landmarks"),Te(e,"world_hand_landmarks"),Te(e,"handedness");const t=new Qn;Mi(t,x1,this.j);const n=new Ln;ei(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),ze(n,"IMAGE:image_in"),ze(n,"NORM_RECT:norm_rect"),ye(n,"HAND_GESTURES:hand_gestures"),ye(n,"LANDMARKS:hand_landmarks"),ye(n,"WORLD_LANDMARKS:world_hand_landmarks"),ye(n,"HANDEDNESS:handedness"),n.o(t),ni(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=$o(s);const a=[];for(const h of Ji(i,Lg,1))a.push({x:Qe(h,1)??0,y:Qe(h,2)??0,z:Qe(h,3)??0,visibility:Qe(h,4)??0});this.landmarks.push(a)}Nt(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Nt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=Ps(s);const a=[];for(const h of Ji(i,Pg,1))a.push({x:Qe(h,1)??0,y:Qe(h,2)??0,z:Qe(h,3)??0,visibility:Qe(h,4)??0});this.worldLandmarks.push(a)}Nt(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Nt(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...wd(i,!1)),Nt(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{Nt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...wd(i)),Nt(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Nt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Td(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}jn.prototype.recognizeForVideo=jn.prototype.Ga,jn.prototype.recognize=jn.prototype.Fa,jn.prototype.setOptions=jn.prototype.o,jn.createFromModelPath=function(e,t){return ve(jn,e,{baseOptions:{modelAssetPath:t}})},jn.createFromModelBuffer=function(e,t){return ve(jn,e,{baseOptions:{modelAssetBuffer:t}})},jn.createFromOptions=function(e,t){return ve(jn,e,t)},jn.HAND_CONNECTIONS=$u;var kn=class extends Hn{constructor(e,t){super(new di(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Qt(e=this.h=new Fu,0,1,t=new je),this.s=new Nu,Qt(this.h,0,3,this.s),this.j=new Gg,Qt(this.h,0,2,this.j),Ni(this.j,3,1),Xt(this.j,2,.5),Xt(this.s,2,.5),Xt(this.h,4,.5)}get baseOptions(){return Ee(this.h,je,1)}set baseOptions(e){Qt(this.h,0,1,e)}o(e){return"numHands"in e&&Ni(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&Xt(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Xt(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Xt(this.s,2,e.minHandPresenceConfidence??.5),this.l(e)}D(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],pi(this,e,t),Td(this)}F(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Fi(this,e,n,t),Td(this)}m(){var e=new Wn;Ve(e,"image_in"),Ve(e,"norm_rect"),Te(e,"hand_landmarks"),Te(e,"world_hand_landmarks"),Te(e,"handedness");const t=new Qn;Mi(t,y1,this.h);const n=new Ln;ei(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),ze(n,"IMAGE:image_in"),ze(n,"NORM_RECT:norm_rect"),ye(n,"LANDMARKS:hand_landmarks"),ye(n,"WORLD_LANDMARKS:world_hand_landmarks"),ye(n,"HANDEDNESS:handedness"),n.o(t),ni(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=$o(s),this.landmarks.push(Nl(i));Nt(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Nt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=Ps(s),this.worldLandmarks.push(Io(i));Nt(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Nt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const h=[];for(const f of i){i=Dl(f);const d=[];for(const m of i.g())d.push({score:Qe(m,2)??0,index:ci(m,1)??0??-1,categoryName:fi(m,3)??""??"",displayName:fi(m,4)??""??""});h.push(d)}a.call(s,...h),Nt(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Nt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};kn.prototype.detectForVideo=kn.prototype.F,kn.prototype.detect=kn.prototype.D,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=function(e,t){return ve(kn,e,{baseOptions:{modelAssetPath:t}})},kn.createFromModelBuffer=function(e,t){return ve(kn,e,{baseOptions:{modelAssetBuffer:t}})},kn.createFromOptions=function(e,t){return ve(kn,e,t)},kn.HAND_CONNECTIONS=$u;var p0=wi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function bd(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Ad(e){try{if(!e.C)return e.h;e.C(e.h)}finally{Ol(e)}}function sa(e,t){e=$o(e),t.push(Nl(e))}var He=class extends Hn{constructor(e,t){super(new di(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Qt(e=this.j=new qg,0,1,t=new je),this.K=new Nu,Qt(this.j,0,2,this.K),this.Y=new M1,Qt(this.j,0,3,this.Y),this.s=new Ul,Qt(this.j,0,4,this.s),this.H=new Fg,Qt(this.j,0,5,this.H),this.v=new Xg,Qt(this.j,0,6,this.v),this.L=new jg,Qt(this.j,0,7,this.L),Xt(this.s,2,.5),Xt(this.s,3,.3),Xt(this.H,2,.5),Xt(this.v,2,.5),Xt(this.v,3,.3),Xt(this.L,2,.5),Xt(this.K,2,.5)}get baseOptions(){return Ee(this.j,je,1)}set baseOptions(e){Qt(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&Xt(this.s,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&Xt(this.s,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&Xt(this.H,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Xt(this.v,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&Xt(this.v,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&Xt(this.L,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Xt(this.K,2,e.minHandLandmarksConfidence??.5),this.l(e)}D(e,t,n){const i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:n,bd(this),pi(this,e,i),Ad(this)}F(e,t,n,i){const r=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,bd(this),Fi(this,e,r,t),Ad(this)}m(){var e=new Wn;Ve(e,"input_frames_image"),Te(e,"pose_landmarks"),Te(e,"pose_world_landmarks"),Te(e,"face_landmarks"),Te(e,"left_hand_landmarks"),Te(e,"left_hand_world_landmarks"),Te(e,"right_hand_landmarks"),Te(e,"right_hand_world_landmarks");const t=new Qn,n=new jf;Kc(n,1,eo("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(r,s){if(s!=null)if(Array.isArray(s))ke(r,2,yl(s,hu,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof Yi||Qr(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Kc(r,2,nu(s,!1),ts())}})(n,this.j.g());const i=new Ln;ei(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Za(i,8,jf,n),ze(i,"IMAGE:input_frames_image"),ye(i,"POSE_LANDMARKS:pose_landmarks"),ye(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),ye(i,"FACE_LANDMARKS:face_landmarks"),ye(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),ye(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),ye(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),ye(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),ni(e,i),Fl(this,e),this.g.attachProtoListener("pose_landmarks",((r,s)=>{sa(r,this.h.poseLandmarks),Nt(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{Nt(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=Ps(r),a.push(Io(r)),Nt(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{Nt(this,r)})),this.outputPoseSegmentationMasks&&(ye(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Vs(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[Xs(this,r,!0,!this.C)],Nt(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],Nt(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{sa(r,this.h.faceLandmarks),Nt(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{Nt(this,r)})),this.outputFaceBlendshapes&&(Te(e,"extra_blendshapes"),ye(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Dl(r),a.push(zu(r.g()??[]))),Nt(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{Nt(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{sa(r,this.h.leftHandLandmarks),Nt(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{Nt(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=Ps(r),a.push(Io(r)),Nt(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{Nt(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{sa(r,this.h.rightHandLandmarks),Nt(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{Nt(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=Ps(r),a.push(Io(r)),Nt(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{Nt(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};He.prototype.detectForVideo=He.prototype.F,He.prototype.detect=He.prototype.D,He.prototype.setOptions=He.prototype.o,He.createFromModelPath=function(e,t){return ve(He,e,{baseOptions:{modelAssetPath:t}})},He.createFromModelBuffer=function(e,t){return ve(He,e,{baseOptions:{modelAssetBuffer:t}})},He.createFromOptions=function(e,t){return ve(He,e,t)},He.HAND_CONNECTIONS=$u,He.POSE_CONNECTIONS=p0,He.FACE_LANDMARKS_LIPS=Wu,He.FACE_LANDMARKS_LEFT_EYE=Xu,He.FACE_LANDMARKS_LEFT_EYEBROW=ju,He.FACE_LANDMARKS_LEFT_IRIS=h0,He.FACE_LANDMARKS_RIGHT_EYE=qu,He.FACE_LANDMARKS_RIGHT_EYEBROW=Yu,He.FACE_LANDMARKS_RIGHT_IRIS=u0,He.FACE_LANDMARKS_FACE_OVAL=Ku,He.FACE_LANDMARKS_CONTOURS=f0,He.FACE_LANDMARKS_TESSELATION=d0;var ri=class extends Hn{constructor(e,t){super(new di(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Qt(e=this.h=new Yg,0,1,t=new je)}get baseOptions(){return Ee(this.h,je,1)}set baseOptions(e){Qt(this.h,0,1,e)}o(e){return Qt(this.h,0,2,eh(e,Ee(this.h,Iu,2))),this.l(e)}qa(e,t){return this.j={classifications:[]},pi(this,e,t),this.j}ra(e,t,n){return this.j={classifications:[]},Fi(this,e,n,t),this.j}m(){var e=new Wn;Ve(e,"input_image"),Ve(e,"norm_rect"),Te(e,"classifications");const t=new Qn;Mi(t,S1,this.h);const n=new Ln;ei(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),ze(n,"IMAGE:input_image"),ze(n,"NORM_RECT:norm_rect"),ye(n,"CLASSIFICATIONS:classifications"),n.o(t),ni(e,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=(function(s){const a={classifications:Ji(s,l1,1).map((h=>zu(Ee(h,Ag,4)?.g()??[],ci(h,2)??0,fi(h,3)??"")))};return jc(zs(s,2))!=null&&(a.timestampMs=jc(zs(s,2))??0),a})(c1(i)),Nt(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{Nt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ri.prototype.classifyForVideo=ri.prototype.ra,ri.prototype.classify=ri.prototype.qa,ri.prototype.setOptions=ri.prototype.o,ri.createFromModelPath=function(e,t){return ve(ri,e,{baseOptions:{modelAssetPath:t}})},ri.createFromModelBuffer=function(e,t){return ve(ri,e,{baseOptions:{modelAssetBuffer:t}})},ri.createFromOptions=function(e,t){return ve(ri,e,t)};var qn=class extends Hn{constructor(e,t){super(new di(e,t),"image_in","norm_rect",!0),this.h=new Kg,this.embeddings={embeddings:[]},Qt(e=this.h,0,1,t=new je)}get baseOptions(){return Ee(this.h,je,1)}set baseOptions(e){Qt(this.h,0,1,e)}o(e){var t=this.h,n=Ee(this.h,ed,2);return n=n?n.clone():new ed,e.l2Normalize!==void 0?ko(n,1,e.l2Normalize):"l2Normalize"in e&&ke(n,1),e.quantize!==void 0?ko(n,2,e.quantize):"quantize"in e&&ke(n,2),Qt(t,0,2,n),this.l(e)}xa(e,t){return pi(this,e,t),this.embeddings}ya(e,t,n){return Fi(this,e,n,t),this.embeddings}m(){var e=new Wn;Ve(e,"image_in"),Ve(e,"norm_rect"),Te(e,"embeddings_out");const t=new Qn;Mi(t,E1,this.h);const n=new Ln;ei(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),ze(n,"IMAGE:image_in"),ze(n,"NORM_RECT:norm_rect"),ye(n,"EMBEDDINGS:embeddings_out"),n.o(t),ni(e,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=f1(i),this.embeddings=(function(s){return{embeddings:Ji(s,u1,1).map((a=>{const h={headIndex:ci(a,3)??0??-1,headName:fi(a,4)??""??""};if(qm(a,td,Zl(a,1))!==void 0)a=Xr(a=Ee(a,td,Zl(a,1)),1,Ar,Wr()),h.floatEmbedding=a.slice();else{const f=new Uint8Array(0);h.quantizedEmbedding=Ee(a,h1,Zl(a,2))?.ma()?.h()??f}return h})),timestampMs:jc(zs(s,2))??0}})(i),Nt(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{Nt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};qn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=od(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=od(sd(e.quantizedEmbedding),sd(t.quantizedEmbedding))}return e},qn.prototype.embedForVideo=qn.prototype.ya,qn.prototype.embed=qn.prototype.xa,qn.prototype.setOptions=qn.prototype.o,qn.createFromModelPath=function(e,t){return ve(qn,e,{baseOptions:{modelAssetPath:t}})},qn.createFromModelBuffer=function(e,t){return ve(qn,e,{baseOptions:{modelAssetBuffer:t}})},qn.createFromOptions=function(e,t){return ve(qn,e,t)};var sh=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};function Rd(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Cd(e){try{const t=new sh(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{Ol(e)}}sh.prototype.close=sh.prototype.close;var Bn=class extends Hn{constructor(e,t){super(new di(e,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ku,this.v=new $g,Qt(this.h,0,3,this.v),Qt(e=this.h,0,1,t=new je)}get baseOptions(){return Ee(this.h,je,1)}set baseOptions(e){Qt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?ke(this.h,2,eo(e.displayNamesLocale)):"displayNamesLocale"in e&&ke(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}J(){(function(e){const t=Ji(e.ca(),Ln,1).filter((n=>(fi(n,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(Ee(t[0],Qn,7)?.l()?.g()??new Map).forEach(((n,i)=>{e.s[Number(i)]=fi(n,1)??""}))})(this)}segment(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,Rd(this),pi(this,e,i),Cd(this)}Ia(e,t,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Rd(this),Fi(this,e,r,t),Cd(this)}Ba(){return this.s}m(){var e=new Wn;Ve(e,"image_in"),Ve(e,"norm_rect");const t=new Qn;Mi(t,Jg,this.h);const n=new Ln;ei(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),ze(n,"IMAGE:image_in"),ze(n,"NORM_RECT:norm_rect"),n.o(t),ni(e,n),Fl(this,e),this.outputConfidenceMasks&&(Te(e,"confidence_masks"),ye(n,"CONFIDENCE_MASKS:confidence_masks"),Vs(this,"confidence_masks"),this.g.ba("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Xs(this,s,!0,!this.j))),Nt(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Nt(this,i)}))),this.outputCategoryMask&&(Te(e,"category_mask"),ye(n,"CATEGORY_MASK:category_mask"),Vs(this,"category_mask"),this.g.V("category_mask",((i,r)=>{this.categoryMask=Xs(this,i,!1,!this.j),Nt(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Nt(this,i)}))),Te(e,"quality_scores"),ye(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Nt(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Nt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Bn.prototype.getLabels=Bn.prototype.Ba,Bn.prototype.segmentForVideo=Bn.prototype.Ia,Bn.prototype.segment=Bn.prototype.segment,Bn.prototype.setOptions=Bn.prototype.o,Bn.createFromModelPath=function(e,t){return ve(Bn,e,{baseOptions:{modelAssetPath:t}})},Bn.createFromModelBuffer=function(e,t){return ve(Bn,e,{baseOptions:{modelAssetBuffer:t}})},Bn.createFromOptions=function(e,t){return ve(Bn,e,t)};var oh=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};oh.prototype.close=oh.prototype.close;var U1=class extends Ot{constructor(e){super(e)}},ls=[0,Je,-2],el=[0,Wi,-3,We,Wi,-1],Pd=[0,el],Ld=[0,el,Je,-1],rc=class extends Ot{constructor(e){super(e)}},Id=[0,Wi,-1,We],N1=class extends Ot{constructor(e){super(e)}},Dd=class extends Ot{constructor(e){super(e)}},ah=[1,2,3,4,5,6,7,8,9,10,14,15],m0=class extends Ot{constructor(e){super(e)}};m0.prototype.g=Il([0,hn,[0,ah,Re,el,Re,[0,el,ls],Re,Pd,Re,[0,Pd,ls],Re,Id,Re,[0,Wi,-3,We,Zn],Re,[0,Wi,-3,We],Re,[0,Ce,Wi,-2,We,Je,We,-1,2,Wi,ls],Re,Ld,Re,[0,Ld,ls],Wi,ls,Ce,Re,[0,Wi,-3,We,ls,-1],Re,[0,hn,Id]],Ce,[0,Ce,Je,-1,We]]);var Ai=class extends Hn{constructor(e,t){super(new di(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ku,this.s=new $g,Qt(this.h,0,3,this.s),Qt(e=this.h,0,1,t=new je)}get baseOptions(){return Ee(this.h,je,1)}set baseOptions(e){Qt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new m0;const s=new Dd;var a=new U1;if(Ni(a,1,255),Qt(s,0,12,a),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var h=new rc;ko(h,3,!0),Xt(h,1,t.keypoint.x),Xt(h,2,t.keypoint.y),Po(s,5,ah,h)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(h of(a=new N1,t.scribble))ko(t=new rc,3,!0),Xt(t,1,h.x),Xt(t,2,h.y),Za(a,1,rc,t);Po(s,15,ah,a)}Za(i,1,Dd,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),pi(this,e,r);t:{try{const d=new oh(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var f=d;break t}this.j(d)}finally{Ol(this)}f=void 0}return f}m(){var e=new Wn;Ve(e,"image_in"),Ve(e,"roi_in"),Ve(e,"norm_rect_in");const t=new Qn;Mi(t,Jg,this.h);const n=new Ln;ei(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),ze(n,"IMAGE:image_in"),ze(n,"ROI:roi_in"),ze(n,"NORM_RECT:norm_rect_in"),n.o(t),ni(e,n),Fl(this,e),this.outputConfidenceMasks&&(Te(e,"confidence_masks"),ye(n,"CONFIDENCE_MASKS:confidence_masks"),Vs(this,"confidence_masks"),this.g.ba("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Xs(this,s,!0,!this.j))),Nt(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Nt(this,i)}))),this.outputCategoryMask&&(Te(e,"category_mask"),ye(n,"CATEGORY_MASK:category_mask"),Vs(this,"category_mask"),this.g.V("category_mask",((i,r)=>{this.categoryMask=Xs(this,i,!1,!this.j),Nt(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Nt(this,i)}))),Te(e,"quality_scores"),ye(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Nt(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Nt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ai.prototype.segment=Ai.prototype.segment,Ai.prototype.setOptions=Ai.prototype.o,Ai.createFromModelPath=function(e,t){return ve(Ai,e,{baseOptions:{modelAssetPath:t}})},Ai.createFromModelBuffer=function(e,t){return ve(Ai,e,{baseOptions:{modelAssetBuffer:t}})},Ai.createFromOptions=function(e,t){return ve(Ai,e,t)};var si=class extends Hn{constructor(e,t){super(new di(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Qt(e=this.h=new Qg,0,1,t=new je)}get baseOptions(){return Ee(this.h,je,1)}set baseOptions(e){Qt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?ke(this.h,2,eo(e.displayNamesLocale)):"displayNamesLocale"in e&&ke(this.h,2),e.maxResults!==void 0?Ni(this.h,3,e.maxResults):"maxResults"in e&&ke(this.h,3),e.scoreThreshold!==void 0?Xt(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&ke(this.h,4),e.categoryAllowlist!==void 0?Ja(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&ke(this.h,5),e.categoryDenylist!==void 0?Ja(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&ke(this.h,6),this.l(e)}D(e,t){return this.j={detections:[]},pi(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},Fi(this,e,n,t),this.j}m(){var e=new Wn;Ve(e,"input_frame_gpu"),Ve(e,"norm_rect"),Te(e,"detections");const t=new Qn;Mi(t,T1,this.h);const n=new Ln;ei(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),ze(n,"IMAGE:input_frame_gpu"),ze(n,"NORM_RECT:norm_rect"),ye(n,"DETECTIONS:detections"),n.o(t),ni(e,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=Cg(s),this.j.detections.push(e0(i));Nt(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Nt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};si.prototype.detectForVideo=si.prototype.F,si.prototype.detect=si.prototype.D,si.prototype.setOptions=si.prototype.o,si.createFromModelPath=async function(e,t){return ve(si,e,{baseOptions:{modelAssetPath:t}})},si.createFromModelBuffer=function(e,t){return ve(si,e,{baseOptions:{modelAssetBuffer:t}})},si.createFromOptions=function(e,t){return ve(si,e,t)};var lh=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((e=>{e.close()}))}};function Ud(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Nd(e){try{const t=new lh(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.s)return t;e.s(t)}finally{Ol(e)}}lh.prototype.close=lh.prototype.close;var Tn=class extends Hn{constructor(e,t){super(new di(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Qt(e=this.h=new t0,0,1,t=new je),this.v=new jg,Qt(this.h,0,3,this.v),this.j=new Xg,Qt(this.h,0,2,this.j),Ni(this.j,4,1),Xt(this.j,2,.5),Xt(this.v,2,.5),Xt(this.h,4,.5)}get baseOptions(){return Ee(this.h,je,1)}set baseOptions(e){Qt(this.h,0,1,e)}o(e){return"numPoses"in e&&Ni(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&Xt(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&Xt(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&Xt(this.v,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}D(e,t,n){const i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:n,Ud(this),pi(this,e,i),Nd(this)}F(e,t,n,i){const r=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,Ud(this),Fi(this,e,r,t),Nd(this)}m(){var e=new Wn;Ve(e,"image_in"),Ve(e,"norm_rect"),Te(e,"normalized_landmarks"),Te(e,"world_landmarks"),Te(e,"segmentation_masks");const t=new Qn;Mi(t,b1,this.h);const n=new Ln;ei(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),ze(n,"IMAGE:image_in"),ze(n,"NORM_RECT:norm_rect"),ye(n,"NORM_LANDMARKS:normalized_landmarks"),ye(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),ni(e,n),Fl(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=$o(s),this.landmarks.push(Nl(i));Nt(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],Nt(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=Ps(s),this.worldLandmarks.push(Io(i));Nt(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],Nt(this,i)})),this.outputSegmentationMasks&&(ye(n,"SEGMENTATION_MASK:segmentation_masks"),Vs(this,"segmentation_masks"),this.g.ba("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>Xs(this,s,!0,!this.s))),Nt(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],Nt(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Tn.prototype.detectForVideo=Tn.prototype.F,Tn.prototype.detect=Tn.prototype.D,Tn.prototype.setOptions=Tn.prototype.o,Tn.createFromModelPath=function(e,t){return ve(Tn,e,{baseOptions:{modelAssetPath:t}})},Tn.createFromModelBuffer=function(e,t){return ve(Tn,e,{baseOptions:{modelAssetBuffer:t}})},Tn.createFromOptions=function(e,t){return ve(Tn,e,t)},Tn.POSE_CONNECTIONS=p0;var pe={};const F1=Object.prototype.toString;function Vo(e){const t=F1.call(e);return t.endsWith("Array]")&&!t.includes("Big")}const O1=Object.freeze(Object.defineProperty({__proto__:null,isAnyArray:Vo},Symbol.toStringTag,{value:"Module"})),B1=gm(O1);function k1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Vo(e))throw new TypeError("input must be an array");if(e.length===0)throw new TypeError("input must not be empty");var n=t.fromIndex,i=n===void 0?0:n,r=t.toIndex,s=r===void 0?e.length:r;if(i<0||i>=e.length||!Number.isInteger(i))throw new Error("fromIndex must be a positive integer smaller than length");if(s<=i||s>e.length||!Number.isInteger(s))throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");for(var a=e[i],h=i+1;h<s;h++)e[h]>a&&(a=e[h]);return a}function z1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Vo(e))throw new TypeError("input must be an array");if(e.length===0)throw new TypeError("input must not be empty");var n=t.fromIndex,i=n===void 0?0:n,r=t.toIndex,s=r===void 0?e.length:r;if(i<0||i>=e.length||!Number.isInteger(i))throw new Error("fromIndex must be a positive integer smaller than length");if(s<=i||s>e.length||!Number.isInteger(s))throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");for(var a=e[i],h=i+1;h<s;h++)e[h]<a&&(a=e[h]);return a}function G1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Vo(e)){if(e.length===0)throw new TypeError("input must not be empty")}else throw new TypeError("input must be an array");var n;if(t.output!==void 0){if(!Vo(t.output))throw new TypeError("output option must be an array if specified");n=t.output}else n=new Array(e.length);var i=z1(e),r=k1(e);if(i===r)throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");var s=t.min,a=s===void 0?t.autoMinMax?i:0:s,h=t.max,f=h===void 0?t.autoMinMax?r:1:h;if(a>=f)throw new RangeError("min option must be smaller than max option");for(var d=(f-a)/(r-i),m=0;m<e.length;m++)n[m]=(e[m]-i)*d+a;return n}const V1=Object.freeze(Object.defineProperty({__proto__:null,default:G1},Symbol.toStringTag,{value:"Module"})),H1=gm(V1);var Fd;function W1(){if(Fd)return pe;Fd=1,Object.defineProperty(pe,"__esModule",{value:!0});var e=B1,t=H1;const n=" ".repeat(2),i=" ".repeat(4);function r(){return s(this)}function s(y,l={}){const{maxRows:c=15,maxColumns:o=10,maxNumSize:u=8,padMinus:p="auto"}=l;return`${y.constructor.name} {
${n}[
${i}${a(y,c,o,u,p)}
${n}]
${n}rows: ${y.rows}
${n}columns: ${y.columns}
}`}function a(y,l,c,o,u){const{rows:p,columns:T}=y,R=Math.min(p,l),L=Math.min(T,c),D=[];if(u==="auto"){u=!1;t:for(let K=0;K<R;K++)for(let z=0;z<L;z++)if(y.get(K,z)<0){u=!0;break t}}for(let K=0;K<R;K++){let z=[];for(let it=0;it<L;it++)z.push(h(y.get(K,it),o,u));D.push(`${z.join(" ")}`)}return L!==T&&(D[D.length-1]+=` ... ${T-c} more columns`),R!==p&&D.push(`... ${p-l} more rows`),D.join(`
${i}`)}function h(y,l,c){return(y>=0&&c?` ${f(y,l-1)}`:f(y,l)).padEnd(l)}function f(y,l){let c=y.toString();if(c.length<=l)return c;let o=y.toFixed(l);if(o.length>l&&(o=y.toFixed(Math.max(0,l-(o.length-l)))),o.length<=l&&!o.startsWith("0.000")&&!o.startsWith("-0.000"))return o;let u=y.toExponential(l);return u.length>l&&(u=y.toExponential(Math.max(0,l-(u.length-l)))),u.slice(0)}function d(y,l){y.prototype.add=function(o){return typeof o=="number"?this.addS(o):this.addM(o)},y.prototype.addS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)+o);return this},y.prototype.addM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)+o.get(u,p));return this},y.add=function(o,u){return new l(o).add(u)},y.prototype.sub=function(o){return typeof o=="number"?this.subS(o):this.subM(o)},y.prototype.subS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)-o);return this},y.prototype.subM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)-o.get(u,p));return this},y.sub=function(o,u){return new l(o).sub(u)},y.prototype.subtract=y.prototype.sub,y.prototype.subtractS=y.prototype.subS,y.prototype.subtractM=y.prototype.subM,y.subtract=y.sub,y.prototype.mul=function(o){return typeof o=="number"?this.mulS(o):this.mulM(o)},y.prototype.mulS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)*o);return this},y.prototype.mulM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)*o.get(u,p));return this},y.mul=function(o,u){return new l(o).mul(u)},y.prototype.multiply=y.prototype.mul,y.prototype.multiplyS=y.prototype.mulS,y.prototype.multiplyM=y.prototype.mulM,y.multiply=y.mul,y.prototype.div=function(o){return typeof o=="number"?this.divS(o):this.divM(o)},y.prototype.divS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)/o);return this},y.prototype.divM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)/o.get(u,p));return this},y.div=function(o,u){return new l(o).div(u)},y.prototype.divide=y.prototype.div,y.prototype.divideS=y.prototype.divS,y.prototype.divideM=y.prototype.divM,y.divide=y.div,y.prototype.mod=function(o){return typeof o=="number"?this.modS(o):this.modM(o)},y.prototype.modS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)%o);return this},y.prototype.modM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)%o.get(u,p));return this},y.mod=function(o,u){return new l(o).mod(u)},y.prototype.modulus=y.prototype.mod,y.prototype.modulusS=y.prototype.modS,y.prototype.modulusM=y.prototype.modM,y.modulus=y.mod,y.prototype.and=function(o){return typeof o=="number"?this.andS(o):this.andM(o)},y.prototype.andS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)&o);return this},y.prototype.andM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)&o.get(u,p));return this},y.and=function(o,u){return new l(o).and(u)},y.prototype.or=function(o){return typeof o=="number"?this.orS(o):this.orM(o)},y.prototype.orS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)|o);return this},y.prototype.orM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)|o.get(u,p));return this},y.or=function(o,u){return new l(o).or(u)},y.prototype.xor=function(o){return typeof o=="number"?this.xorS(o):this.xorM(o)},y.prototype.xorS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)^o);return this},y.prototype.xorM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)^o.get(u,p));return this},y.xor=function(o,u){return new l(o).xor(u)},y.prototype.leftShift=function(o){return typeof o=="number"?this.leftShiftS(o):this.leftShiftM(o)},y.prototype.leftShiftS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)<<o);return this},y.prototype.leftShiftM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)<<o.get(u,p));return this},y.leftShift=function(o,u){return new l(o).leftShift(u)},y.prototype.signPropagatingRightShift=function(o){return typeof o=="number"?this.signPropagatingRightShiftS(o):this.signPropagatingRightShiftM(o)},y.prototype.signPropagatingRightShiftS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)>>o);return this},y.prototype.signPropagatingRightShiftM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)>>o.get(u,p));return this},y.signPropagatingRightShift=function(o,u){return new l(o).signPropagatingRightShift(u)},y.prototype.rightShift=function(o){return typeof o=="number"?this.rightShiftS(o):this.rightShiftM(o)},y.prototype.rightShiftS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)>>>o);return this},y.prototype.rightShiftM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)>>>o.get(u,p));return this},y.rightShift=function(o,u){return new l(o).rightShift(u)},y.prototype.zeroFillRightShift=y.prototype.rightShift,y.prototype.zeroFillRightShiftS=y.prototype.rightShiftS,y.prototype.zeroFillRightShiftM=y.prototype.rightShiftM,y.zeroFillRightShift=y.rightShift,y.prototype.not=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,~this.get(o,u));return this},y.not=function(o){return new l(o).not()},y.prototype.abs=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.abs(this.get(o,u)));return this},y.abs=function(o){return new l(o).abs()},y.prototype.acos=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.acos(this.get(o,u)));return this},y.acos=function(o){return new l(o).acos()},y.prototype.acosh=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.acosh(this.get(o,u)));return this},y.acosh=function(o){return new l(o).acosh()},y.prototype.asin=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.asin(this.get(o,u)));return this},y.asin=function(o){return new l(o).asin()},y.prototype.asinh=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.asinh(this.get(o,u)));return this},y.asinh=function(o){return new l(o).asinh()},y.prototype.atan=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.atan(this.get(o,u)));return this},y.atan=function(o){return new l(o).atan()},y.prototype.atanh=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.atanh(this.get(o,u)));return this},y.atanh=function(o){return new l(o).atanh()},y.prototype.cbrt=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.cbrt(this.get(o,u)));return this},y.cbrt=function(o){return new l(o).cbrt()},y.prototype.ceil=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.ceil(this.get(o,u)));return this},y.ceil=function(o){return new l(o).ceil()},y.prototype.clz32=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.clz32(this.get(o,u)));return this},y.clz32=function(o){return new l(o).clz32()},y.prototype.cos=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.cos(this.get(o,u)));return this},y.cos=function(o){return new l(o).cos()},y.prototype.cosh=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.cosh(this.get(o,u)));return this},y.cosh=function(o){return new l(o).cosh()},y.prototype.exp=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.exp(this.get(o,u)));return this},y.exp=function(o){return new l(o).exp()},y.prototype.expm1=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.expm1(this.get(o,u)));return this},y.expm1=function(o){return new l(o).expm1()},y.prototype.floor=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.floor(this.get(o,u)));return this},y.floor=function(o){return new l(o).floor()},y.prototype.fround=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.fround(this.get(o,u)));return this},y.fround=function(o){return new l(o).fround()},y.prototype.log=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.log(this.get(o,u)));return this},y.log=function(o){return new l(o).log()},y.prototype.log1p=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.log1p(this.get(o,u)));return this},y.log1p=function(o){return new l(o).log1p()},y.prototype.log10=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.log10(this.get(o,u)));return this},y.log10=function(o){return new l(o).log10()},y.prototype.log2=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.log2(this.get(o,u)));return this},y.log2=function(o){return new l(o).log2()},y.prototype.round=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.round(this.get(o,u)));return this},y.round=function(o){return new l(o).round()},y.prototype.sign=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.sign(this.get(o,u)));return this},y.sign=function(o){return new l(o).sign()},y.prototype.sin=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.sin(this.get(o,u)));return this},y.sin=function(o){return new l(o).sin()},y.prototype.sinh=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.sinh(this.get(o,u)));return this},y.sinh=function(o){return new l(o).sinh()},y.prototype.sqrt=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.sqrt(this.get(o,u)));return this},y.sqrt=function(o){return new l(o).sqrt()},y.prototype.tan=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.tan(this.get(o,u)));return this},y.tan=function(o){return new l(o).tan()},y.prototype.tanh=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.tanh(this.get(o,u)));return this},y.tanh=function(o){return new l(o).tanh()},y.prototype.trunc=function(){for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.set(o,u,Math.trunc(this.get(o,u)));return this},y.trunc=function(o){return new l(o).trunc()},y.pow=function(o,u){return new l(o).pow(u)},y.prototype.pow=function(o){return typeof o=="number"?this.powS(o):this.powM(o)},y.prototype.powS=function(o){for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)**o);return this},y.prototype.powM=function(o){if(o=l.checkMatrix(o),this.rows!==o.rows||this.columns!==o.columns)throw new RangeError("Matrices dimensions must be equal");for(let u=0;u<this.rows;u++)for(let p=0;p<this.columns;p++)this.set(u,p,this.get(u,p)**o.get(u,p));return this}}function m(y,l,c){let o=c?y.rows:y.rows-1;if(l<0||l>o)throw new RangeError("Row index out of range")}function g(y,l,c){let o=c?y.columns:y.columns-1;if(l<0||l>o)throw new RangeError("Column index out of range")}function _(y,l){if(l.to1DArray&&(l=l.to1DArray()),l.length!==y.columns)throw new RangeError("vector size must be the same as the number of columns");return l}function M(y,l){if(l.to1DArray&&(l=l.to1DArray()),l.length!==y.rows)throw new RangeError("vector size must be the same as the number of rows");return l}function E(y,l){if(!e.isAnyArray(l))throw new TypeError("row indices must be an array");for(let c=0;c<l.length;c++)if(l[c]<0||l[c]>=y.rows)throw new RangeError("row indices are out of range")}function S(y,l){if(!e.isAnyArray(l))throw new TypeError("column indices must be an array");for(let c=0;c<l.length;c++)if(l[c]<0||l[c]>=y.columns)throw new RangeError("column indices are out of range")}function x(y,l,c,o,u){if(arguments.length!==5)throw new RangeError("expected 4 arguments");if(O("startRow",l),O("endRow",c),O("startColumn",o),O("endColumn",u),l>c||o>u||l<0||l>=y.rows||c<0||c>=y.rows||o<0||o>=y.columns||u<0||u>=y.columns)throw new RangeError("Submatrix indices are out of range")}function v(y,l=0){let c=[];for(let o=0;o<y;o++)c.push(l);return c}function O(y,l){if(typeof l!="number")throw new TypeError(`${y} must be a number`)}function U(y){if(y.isEmpty())throw new Error("Empty matrix has no elements to index")}function C(y){let l=v(y.rows);for(let c=0;c<y.rows;++c)for(let o=0;o<y.columns;++o)l[c]+=y.get(c,o);return l}function V(y){let l=v(y.columns);for(let c=0;c<y.rows;++c)for(let o=0;o<y.columns;++o)l[o]+=y.get(c,o);return l}function k(y){let l=0;for(let c=0;c<y.rows;c++)for(let o=0;o<y.columns;o++)l+=y.get(c,o);return l}function j(y){let l=v(y.rows,1);for(let c=0;c<y.rows;++c)for(let o=0;o<y.columns;++o)l[c]*=y.get(c,o);return l}function $(y){let l=v(y.columns,1);for(let c=0;c<y.rows;++c)for(let o=0;o<y.columns;++o)l[o]*=y.get(c,o);return l}function P(y){let l=1;for(let c=0;c<y.rows;c++)for(let o=0;o<y.columns;o++)l*=y.get(c,o);return l}function I(y,l,c){const o=y.rows,u=y.columns,p=[];for(let T=0;T<o;T++){let R=0,L=0,D=0;for(let K=0;K<u;K++)D=y.get(T,K)-c[T],R+=D,L+=D*D;l?p.push((L-R*R/u)/(u-1)):p.push((L-R*R/u)/u)}return p}function G(y,l,c){const o=y.rows,u=y.columns,p=[];for(let T=0;T<u;T++){let R=0,L=0,D=0;for(let K=0;K<o;K++)D=y.get(K,T)-c[T],R+=D,L+=D*D;l?p.push((L-R*R/o)/(o-1)):p.push((L-R*R/o)/o)}return p}function et(y,l,c){const o=y.rows,u=y.columns,p=o*u;let T=0,R=0,L=0;for(let D=0;D<o;D++)for(let K=0;K<u;K++)L=y.get(D,K)-c,T+=L,R+=L*L;return l?(R-T*T/p)/(p-1):(R-T*T/p)/p}function tt(y,l){for(let c=0;c<y.rows;c++)for(let o=0;o<y.columns;o++)y.set(c,o,y.get(c,o)-l[c])}function nt(y,l){for(let c=0;c<y.rows;c++)for(let o=0;o<y.columns;o++)y.set(c,o,y.get(c,o)-l[o])}function ht(y,l){for(let c=0;c<y.rows;c++)for(let o=0;o<y.columns;o++)y.set(c,o,y.get(c,o)-l)}function ot(y){const l=[];for(let c=0;c<y.rows;c++){let o=0;for(let u=0;u<y.columns;u++)o+=y.get(c,u)**2/(y.columns-1);l.push(Math.sqrt(o))}return l}function xt(y,l){for(let c=0;c<y.rows;c++)for(let o=0;o<y.columns;o++)y.set(c,o,y.get(c,o)/l[c])}function rt(y){const l=[];for(let c=0;c<y.columns;c++){let o=0;for(let u=0;u<y.rows;u++)o+=y.get(u,c)**2/(y.rows-1);l.push(Math.sqrt(o))}return l}function At(y,l){for(let c=0;c<y.rows;c++)for(let o=0;o<y.columns;o++)y.set(c,o,y.get(c,o)/l[o])}function Dt(y){const l=y.size-1;let c=0;for(let o=0;o<y.columns;o++)for(let u=0;u<y.rows;u++)c+=y.get(u,o)**2/l;return Math.sqrt(c)}function Zt(y,l){for(let c=0;c<y.rows;c++)for(let o=0;o<y.columns;o++)y.set(c,o,y.get(c,o)/l)}class St{static from1DArray(l,c,o){if(l*c!==o.length)throw new RangeError("data length does not match given dimensions");let p=new q(l,c);for(let T=0;T<l;T++)for(let R=0;R<c;R++)p.set(T,R,o[T*c+R]);return p}static rowVector(l){let c=new q(1,l.length);for(let o=0;o<l.length;o++)c.set(0,o,l[o]);return c}static columnVector(l){let c=new q(l.length,1);for(let o=0;o<l.length;o++)c.set(o,0,l[o]);return c}static zeros(l,c){return new q(l,c)}static ones(l,c){return new q(l,c).fill(1)}static rand(l,c,o={}){if(typeof o!="object")throw new TypeError("options must be an object");const{random:u=Math.random}=o;let p=new q(l,c);for(let T=0;T<l;T++)for(let R=0;R<c;R++)p.set(T,R,u());return p}static randInt(l,c,o={}){if(typeof o!="object")throw new TypeError("options must be an object");const{min:u=0,max:p=1e3,random:T=Math.random}=o;if(!Number.isInteger(u))throw new TypeError("min must be an integer");if(!Number.isInteger(p))throw new TypeError("max must be an integer");if(u>=p)throw new RangeError("min must be smaller than max");let R=p-u,L=new q(l,c);for(let D=0;D<l;D++)for(let K=0;K<c;K++){let z=u+Math.round(T()*R);L.set(D,K,z)}return L}static eye(l,c,o){c===void 0&&(c=l),o===void 0&&(o=1);let u=Math.min(l,c),p=this.zeros(l,c);for(let T=0;T<u;T++)p.set(T,T,o);return p}static diag(l,c,o){let u=l.length;c===void 0&&(c=u),o===void 0&&(o=c);let p=Math.min(u,c,o),T=this.zeros(c,o);for(let R=0;R<p;R++)T.set(R,R,l[R]);return T}static min(l,c){l=this.checkMatrix(l),c=this.checkMatrix(c);let o=l.rows,u=l.columns,p=new q(o,u);for(let T=0;T<o;T++)for(let R=0;R<u;R++)p.set(T,R,Math.min(l.get(T,R),c.get(T,R)));return p}static max(l,c){l=this.checkMatrix(l),c=this.checkMatrix(c);let o=l.rows,u=l.columns,p=new this(o,u);for(let T=0;T<o;T++)for(let R=0;R<u;R++)p.set(T,R,Math.max(l.get(T,R),c.get(T,R)));return p}static checkMatrix(l){return St.isMatrix(l)?l:new q(l)}static isMatrix(l){return l!=null&&l.klass==="Matrix"}get size(){return this.rows*this.columns}apply(l){if(typeof l!="function")throw new TypeError("callback must be a function");for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)l.call(this,c,o);return this}to1DArray(){let l=[];for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)l.push(this.get(c,o));return l}to2DArray(){let l=[];for(let c=0;c<this.rows;c++){l.push([]);for(let o=0;o<this.columns;o++)l[c].push(this.get(c,o))}return l}toJSON(){return this.to2DArray()}isRowVector(){return this.rows===1}isColumnVector(){return this.columns===1}isVector(){return this.rows===1||this.columns===1}isSquare(){return this.rows===this.columns}isEmpty(){return this.rows===0||this.columns===0}isSymmetric(){if(this.isSquare()){for(let l=0;l<this.rows;l++)for(let c=0;c<=l;c++)if(this.get(l,c)!==this.get(c,l))return!1;return!0}return!1}isDistance(){if(!this.isSymmetric())return!1;for(let l=0;l<this.rows;l++)if(this.get(l,l)!==0)return!1;return!0}isEchelonForm(){let l=0,c=0,o=-1,u=!0,p=!1;for(;l<this.rows&&u;){for(c=0,p=!1;c<this.columns&&p===!1;)this.get(l,c)===0?c++:this.get(l,c)===1&&c>o?(p=!0,o=c):(u=!1,p=!0);l++}return u}isReducedEchelonForm(){let l=0,c=0,o=-1,u=!0,p=!1;for(;l<this.rows&&u;){for(c=0,p=!1;c<this.columns&&p===!1;)this.get(l,c)===0?c++:this.get(l,c)===1&&c>o?(p=!0,o=c):(u=!1,p=!0);for(let T=c+1;T<this.rows;T++)this.get(l,T)!==0&&(u=!1);l++}return u}echelonForm(){let l=this.clone(),c=0,o=0;for(;c<l.rows&&o<l.columns;){let u=c;for(let p=c;p<l.rows;p++)l.get(p,o)>l.get(u,o)&&(u=p);if(l.get(u,o)===0)o++;else{l.swapRows(c,u);let p=l.get(c,o);for(let T=o;T<l.columns;T++)l.set(c,T,l.get(c,T)/p);for(let T=c+1;T<l.rows;T++){let R=l.get(T,o)/l.get(c,o);l.set(T,o,0);for(let L=o+1;L<l.columns;L++)l.set(T,L,l.get(T,L)-l.get(c,L)*R)}c++,o++}}return l}reducedEchelonForm(){let l=this.echelonForm(),c=l.columns,o=l.rows,u=o-1;for(;u>=0;)if(l.maxRow(u)===0)u--;else{let p=0,T=!1;for(;p<o&&T===!1;)l.get(u,p)===1?T=!0:p++;for(let R=0;R<u;R++){let L=l.get(R,p);for(let D=p;D<c;D++){let K=l.get(R,D)-L*l.get(u,D);l.set(R,D,K)}}u--}return l}set(){throw new Error("set method is unimplemented")}get(){throw new Error("get method is unimplemented")}repeat(l={}){if(typeof l!="object")throw new TypeError("options must be an object");const{rows:c=1,columns:o=1}=l;if(!Number.isInteger(c)||c<=0)throw new TypeError("rows must be a positive integer");if(!Number.isInteger(o)||o<=0)throw new TypeError("columns must be a positive integer");let u=new q(this.rows*c,this.columns*o);for(let p=0;p<c;p++)for(let T=0;T<o;T++)u.setSubMatrix(this,this.rows*p,this.columns*T);return u}fill(l){for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)this.set(c,o,l);return this}neg(){return this.mulS(-1)}getRow(l){m(this,l);let c=[];for(let o=0;o<this.columns;o++)c.push(this.get(l,o));return c}getRowVector(l){return q.rowVector(this.getRow(l))}setRow(l,c){m(this,l),c=_(this,c);for(let o=0;o<this.columns;o++)this.set(l,o,c[o]);return this}swapRows(l,c){m(this,l),m(this,c);for(let o=0;o<this.columns;o++){let u=this.get(l,o);this.set(l,o,this.get(c,o)),this.set(c,o,u)}return this}getColumn(l){g(this,l);let c=[];for(let o=0;o<this.rows;o++)c.push(this.get(o,l));return c}getColumnVector(l){return q.columnVector(this.getColumn(l))}setColumn(l,c){g(this,l),c=M(this,c);for(let o=0;o<this.rows;o++)this.set(o,l,c[o]);return this}swapColumns(l,c){g(this,l),g(this,c);for(let o=0;o<this.rows;o++){let u=this.get(o,l);this.set(o,l,this.get(o,c)),this.set(o,c,u)}return this}addRowVector(l){l=_(this,l);for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)this.set(c,o,this.get(c,o)+l[o]);return this}subRowVector(l){l=_(this,l);for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)this.set(c,o,this.get(c,o)-l[o]);return this}mulRowVector(l){l=_(this,l);for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)this.set(c,o,this.get(c,o)*l[o]);return this}divRowVector(l){l=_(this,l);for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)this.set(c,o,this.get(c,o)/l[o]);return this}addColumnVector(l){l=M(this,l);for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)this.set(c,o,this.get(c,o)+l[c]);return this}subColumnVector(l){l=M(this,l);for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)this.set(c,o,this.get(c,o)-l[c]);return this}mulColumnVector(l){l=M(this,l);for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)this.set(c,o,this.get(c,o)*l[c]);return this}divColumnVector(l){l=M(this,l);for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)this.set(c,o,this.get(c,o)/l[c]);return this}mulRow(l,c){m(this,l);for(let o=0;o<this.columns;o++)this.set(l,o,this.get(l,o)*c);return this}mulColumn(l,c){g(this,l);for(let o=0;o<this.rows;o++)this.set(o,l,this.get(o,l)*c);return this}max(l){if(this.isEmpty())return NaN;switch(l){case"row":{const c=new Array(this.rows).fill(Number.NEGATIVE_INFINITY);for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.get(o,u)>c[o]&&(c[o]=this.get(o,u));return c}case"column":{const c=new Array(this.columns).fill(Number.NEGATIVE_INFINITY);for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.get(o,u)>c[u]&&(c[u]=this.get(o,u));return c}case void 0:{let c=this.get(0,0);for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.get(o,u)>c&&(c=this.get(o,u));return c}default:throw new Error(`invalid option: ${l}`)}}maxIndex(){U(this);let l=this.get(0,0),c=[0,0];for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.get(o,u)>l&&(l=this.get(o,u),c[0]=o,c[1]=u);return c}min(l){if(this.isEmpty())return NaN;switch(l){case"row":{const c=new Array(this.rows).fill(Number.POSITIVE_INFINITY);for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.get(o,u)<c[o]&&(c[o]=this.get(o,u));return c}case"column":{const c=new Array(this.columns).fill(Number.POSITIVE_INFINITY);for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.get(o,u)<c[u]&&(c[u]=this.get(o,u));return c}case void 0:{let c=this.get(0,0);for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.get(o,u)<c&&(c=this.get(o,u));return c}default:throw new Error(`invalid option: ${l}`)}}minIndex(){U(this);let l=this.get(0,0),c=[0,0];for(let o=0;o<this.rows;o++)for(let u=0;u<this.columns;u++)this.get(o,u)<l&&(l=this.get(o,u),c[0]=o,c[1]=u);return c}maxRow(l){if(m(this,l),this.isEmpty())return NaN;let c=this.get(l,0);for(let o=1;o<this.columns;o++)this.get(l,o)>c&&(c=this.get(l,o));return c}maxRowIndex(l){m(this,l),U(this);let c=this.get(l,0),o=[l,0];for(let u=1;u<this.columns;u++)this.get(l,u)>c&&(c=this.get(l,u),o[1]=u);return o}minRow(l){if(m(this,l),this.isEmpty())return NaN;let c=this.get(l,0);for(let o=1;o<this.columns;o++)this.get(l,o)<c&&(c=this.get(l,o));return c}minRowIndex(l){m(this,l),U(this);let c=this.get(l,0),o=[l,0];for(let u=1;u<this.columns;u++)this.get(l,u)<c&&(c=this.get(l,u),o[1]=u);return o}maxColumn(l){if(g(this,l),this.isEmpty())return NaN;let c=this.get(0,l);for(let o=1;o<this.rows;o++)this.get(o,l)>c&&(c=this.get(o,l));return c}maxColumnIndex(l){g(this,l),U(this);let c=this.get(0,l),o=[0,l];for(let u=1;u<this.rows;u++)this.get(u,l)>c&&(c=this.get(u,l),o[0]=u);return o}minColumn(l){if(g(this,l),this.isEmpty())return NaN;let c=this.get(0,l);for(let o=1;o<this.rows;o++)this.get(o,l)<c&&(c=this.get(o,l));return c}minColumnIndex(l){g(this,l),U(this);let c=this.get(0,l),o=[0,l];for(let u=1;u<this.rows;u++)this.get(u,l)<c&&(c=this.get(u,l),o[0]=u);return o}diag(){let l=Math.min(this.rows,this.columns),c=[];for(let o=0;o<l;o++)c.push(this.get(o,o));return c}norm(l="frobenius"){switch(l){case"max":return this.max();case"frobenius":return Math.sqrt(this.dot(this));default:throw new RangeError(`unknown norm type: ${l}`)}}cumulativeSum(){let l=0;for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)l+=this.get(c,o),this.set(c,o,l);return this}dot(l){St.isMatrix(l)&&(l=l.to1DArray());let c=this.to1DArray();if(c.length!==l.length)throw new RangeError("vectors do not have the same size");let o=0;for(let u=0;u<c.length;u++)o+=c[u]*l[u];return o}mmul(l){l=q.checkMatrix(l);let c=this.rows,o=this.columns,u=l.columns,p=new q(c,u),T=new Float64Array(o);for(let R=0;R<u;R++){for(let L=0;L<o;L++)T[L]=l.get(L,R);for(let L=0;L<c;L++){let D=0;for(let K=0;K<o;K++)D+=this.get(L,K)*T[K];p.set(L,R,D)}}return p}mpow(l){if(!this.isSquare())throw new RangeError("Matrix must be square");if(!Number.isInteger(l)||l<0)throw new RangeError("Exponent must be a non-negative integer");let c=q.eye(this.rows),o=this;for(let u=l;u>=1;u/=2)(u&1)!==0&&(c=c.mmul(o)),o=o.mmul(o);return c}strassen2x2(l){l=q.checkMatrix(l);let c=new q(2,2);const o=this.get(0,0),u=l.get(0,0),p=this.get(0,1),T=l.get(0,1),R=this.get(1,0),L=l.get(1,0),D=this.get(1,1),K=l.get(1,1),z=(o+D)*(u+K),it=(R+D)*u,pt=o*(T-K),Q=D*(L-u),at=(o+p)*K,Tt=(R-o)*(u+T),H=(p-D)*(L+K),dt=z+Q-at+H,It=pt+at,ne=it+Q,ie=z-it+pt+Tt;return c.set(0,0,dt),c.set(0,1,It),c.set(1,0,ne),c.set(1,1,ie),c}strassen3x3(l){l=q.checkMatrix(l);let c=new q(3,3);const o=this.get(0,0),u=this.get(0,1),p=this.get(0,2),T=this.get(1,0),R=this.get(1,1),L=this.get(1,2),D=this.get(2,0),K=this.get(2,1),z=this.get(2,2),it=l.get(0,0),pt=l.get(0,1),Q=l.get(0,2),at=l.get(1,0),Tt=l.get(1,1),H=l.get(1,2),dt=l.get(2,0),It=l.get(2,1),ne=l.get(2,2),ie=(o+u+p-T-R-K-z)*Tt,Be=(o-T)*(-pt+Tt),Vt=R*(-it+pt+at-Tt-H-dt+ne),Jt=(-o+T+R)*(it-pt+Tt),A=(T+R)*(-it+pt),w=o*it,B=(-o+D+K)*(it-Q+H),W=(-o+D)*(Q-H),N=(D+K)*(-it+Q),ct=(o+u+p-R-L-D-K)*H,ut=K*(-it+Q+at-Tt-H-dt+It),vt=(-p+K+z)*(Tt+dt-It),_t=(p-z)*(Tt-It),Ut=p*dt,Ht=(K+z)*(-dt+It),Lt=(-p+R+L)*(H+dt-ne),re=(p-L)*(H-ne),ge=(R+L)*(-dt+ne),Wt=u*at,le=L*It,ue=T*Q,Ft=D*pt,ce=z*ne,Me=w+Ut+Wt,Sn=ie+Jt+A+w+vt+Ut+Ht,er=w+B+N+ct+Ut+Lt+ge,En=Be+Vt+Jt+w+Ut+Lt+re,Pr=Be+Jt+A+w+le,Ge=Ut+Lt+re+ge+ue,Un=w+B+W+ut+vt+_t+Ut,Nn=vt+_t+Ut+Ht+Ft,mn=w+B+W+N+ce;return c.set(0,0,Me),c.set(0,1,Sn),c.set(0,2,er),c.set(1,0,En),c.set(1,1,Pr),c.set(1,2,Ge),c.set(2,0,Un),c.set(2,1,Nn),c.set(2,2,mn),c}mmulStrassen(l){l=q.checkMatrix(l);let c=this.clone(),o=c.rows,u=c.columns,p=l.rows,T=l.columns;u!==p&&console.warn(`Multiplying ${o} x ${u} and ${p} x ${T} matrix: dimensions do not match.`);function R(z,it,pt){let Q=z.rows,at=z.columns;if(Q===it&&at===pt)return z;{let Tt=St.zeros(it,pt);return Tt=Tt.setSubMatrix(z,0,0),Tt}}let L=Math.max(o,p),D=Math.max(u,T);c=R(c,L,D),l=R(l,L,D);function K(z,it,pt,Q){if(pt<=512||Q<=512)return z.mmul(it);pt%2===1&&Q%2===1?(z=R(z,pt+1,Q+1),it=R(it,pt+1,Q+1)):pt%2===1?(z=R(z,pt+1,Q),it=R(it,pt+1,Q)):Q%2===1&&(z=R(z,pt,Q+1),it=R(it,pt,Q+1));let at=parseInt(z.rows/2,10),Tt=parseInt(z.columns/2,10),H=z.subMatrix(0,at-1,0,Tt-1),dt=it.subMatrix(0,at-1,0,Tt-1),It=z.subMatrix(0,at-1,Tt,z.columns-1),ne=it.subMatrix(0,at-1,Tt,it.columns-1),ie=z.subMatrix(at,z.rows-1,0,Tt-1),Be=it.subMatrix(at,it.rows-1,0,Tt-1),Vt=z.subMatrix(at,z.rows-1,Tt,z.columns-1),Jt=it.subMatrix(at,it.rows-1,Tt,it.columns-1),A=K(St.add(H,Vt),St.add(dt,Jt),at,Tt),w=K(St.add(ie,Vt),dt,at,Tt),B=K(H,St.sub(ne,Jt),at,Tt),W=K(Vt,St.sub(Be,dt),at,Tt),N=K(St.add(H,It),Jt,at,Tt),ct=K(St.sub(ie,H),St.add(dt,ne),at,Tt),ut=K(St.sub(It,Vt),St.add(Be,Jt),at,Tt),vt=St.add(A,W);vt.sub(N),vt.add(ut);let _t=St.add(B,N),Ut=St.add(w,W),Ht=St.sub(A,w);Ht.add(B),Ht.add(ct);let Lt=St.zeros(2*vt.rows,2*vt.columns);return Lt=Lt.setSubMatrix(vt,0,0),Lt=Lt.setSubMatrix(_t,vt.rows,0),Lt=Lt.setSubMatrix(Ut,0,vt.columns),Lt=Lt.setSubMatrix(Ht,vt.rows,vt.columns),Lt.subMatrix(0,pt-1,0,Q-1)}return K(c,l,L,D)}scaleRows(l={}){if(typeof l!="object")throw new TypeError("options must be an object");const{min:c=0,max:o=1}=l;if(!Number.isFinite(c))throw new TypeError("min must be a number");if(!Number.isFinite(o))throw new TypeError("max must be a number");if(c>=o)throw new RangeError("min must be smaller than max");let u=new q(this.rows,this.columns);for(let p=0;p<this.rows;p++){const T=this.getRow(p);T.length>0&&t(T,{min:c,max:o,output:T}),u.setRow(p,T)}return u}scaleColumns(l={}){if(typeof l!="object")throw new TypeError("options must be an object");const{min:c=0,max:o=1}=l;if(!Number.isFinite(c))throw new TypeError("min must be a number");if(!Number.isFinite(o))throw new TypeError("max must be a number");if(c>=o)throw new RangeError("min must be smaller than max");let u=new q(this.rows,this.columns);for(let p=0;p<this.columns;p++){const T=this.getColumn(p);T.length&&t(T,{min:c,max:o,output:T}),u.setColumn(p,T)}return u}flipRows(){const l=Math.ceil(this.columns/2);for(let c=0;c<this.rows;c++)for(let o=0;o<l;o++){let u=this.get(c,o),p=this.get(c,this.columns-1-o);this.set(c,o,p),this.set(c,this.columns-1-o,u)}return this}flipColumns(){const l=Math.ceil(this.rows/2);for(let c=0;c<this.columns;c++)for(let o=0;o<l;o++){let u=this.get(o,c),p=this.get(this.rows-1-o,c);this.set(o,c,p),this.set(this.rows-1-o,c,u)}return this}kroneckerProduct(l){l=q.checkMatrix(l);let c=this.rows,o=this.columns,u=l.rows,p=l.columns,T=new q(c*u,o*p);for(let R=0;R<c;R++)for(let L=0;L<o;L++)for(let D=0;D<u;D++)for(let K=0;K<p;K++)T.set(u*R+D,p*L+K,this.get(R,L)*l.get(D,K));return T}kroneckerSum(l){if(l=q.checkMatrix(l),!this.isSquare()||!l.isSquare())throw new Error("Kronecker Sum needs two Square Matrices");let c=this.rows,o=l.rows,u=this.kroneckerProduct(q.eye(o,o)),p=q.eye(c,c).kroneckerProduct(l);return u.add(p)}transpose(){let l=new q(this.columns,this.rows);for(let c=0;c<this.rows;c++)for(let o=0;o<this.columns;o++)l.set(o,c,this.get(c,o));return l}sortRows(l=Ne){for(let c=0;c<this.rows;c++)this.setRow(c,this.getRow(c).sort(l));return this}sortColumns(l=Ne){for(let c=0;c<this.columns;c++)this.setColumn(c,this.getColumn(c).sort(l));return this}subMatrix(l,c,o,u){x(this,l,c,o,u);let p=new q(c-l+1,u-o+1);for(let T=l;T<=c;T++)for(let R=o;R<=u;R++)p.set(T-l,R-o,this.get(T,R));return p}subMatrixRow(l,c,o){if(c===void 0&&(c=0),o===void 0&&(o=this.columns-1),c>o||c<0||c>=this.columns||o<0||o>=this.columns)throw new RangeError("Argument out of range");let u=new q(l.length,o-c+1);for(let p=0;p<l.length;p++)for(let T=c;T<=o;T++){if(l[p]<0||l[p]>=this.rows)throw new RangeError(`Row index out of range: ${l[p]}`);u.set(p,T-c,this.get(l[p],T))}return u}subMatrixColumn(l,c,o){if(c===void 0&&(c=0),o===void 0&&(o=this.rows-1),c>o||c<0||c>=this.rows||o<0||o>=this.rows)throw new RangeError("Argument out of range");let u=new q(o-c+1,l.length);for(let p=0;p<l.length;p++)for(let T=c;T<=o;T++){if(l[p]<0||l[p]>=this.columns)throw new RangeError(`Column index out of range: ${l[p]}`);u.set(T-c,p,this.get(T,l[p]))}return u}setSubMatrix(l,c,o){if(l=q.checkMatrix(l),l.isEmpty())return this;let u=c+l.rows-1,p=o+l.columns-1;x(this,c,u,o,p);for(let T=0;T<l.rows;T++)for(let R=0;R<l.columns;R++)this.set(c+T,o+R,l.get(T,R));return this}selection(l,c){E(this,l),S(this,c);let o=new q(l.length,c.length);for(let u=0;u<l.length;u++){let p=l[u];for(let T=0;T<c.length;T++){let R=c[T];o.set(u,T,this.get(p,R))}}return o}trace(){let l=Math.min(this.rows,this.columns),c=0;for(let o=0;o<l;o++)c+=this.get(o,o);return c}clone(){return this.constructor.copy(this,new q(this.rows,this.columns))}static copy(l,c){for(const[o,u,p]of l.entries())c.set(o,u,p);return c}sum(l){switch(l){case"row":return C(this);case"column":return V(this);case void 0:return k(this);default:throw new Error(`invalid option: ${l}`)}}product(l){switch(l){case"row":return j(this);case"column":return $(this);case void 0:return P(this);default:throw new Error(`invalid option: ${l}`)}}mean(l){const c=this.sum(l);switch(l){case"row":{for(let o=0;o<this.rows;o++)c[o]/=this.columns;return c}case"column":{for(let o=0;o<this.columns;o++)c[o]/=this.rows;return c}case void 0:return c/this.size;default:throw new Error(`invalid option: ${l}`)}}variance(l,c={}){if(typeof l=="object"&&(c=l,l=void 0),typeof c!="object")throw new TypeError("options must be an object");const{unbiased:o=!0,mean:u=this.mean(l)}=c;if(typeof o!="boolean")throw new TypeError("unbiased must be a boolean");switch(l){case"row":{if(!e.isAnyArray(u))throw new TypeError("mean must be an array");return I(this,o,u)}case"column":{if(!e.isAnyArray(u))throw new TypeError("mean must be an array");return G(this,o,u)}case void 0:{if(typeof u!="number")throw new TypeError("mean must be a number");return et(this,o,u)}default:throw new Error(`invalid option: ${l}`)}}standardDeviation(l,c){typeof l=="object"&&(c=l,l=void 0);const o=this.variance(l,c);if(l===void 0)return Math.sqrt(o);for(let u=0;u<o.length;u++)o[u]=Math.sqrt(o[u]);return o}center(l,c={}){if(typeof l=="object"&&(c=l,l=void 0),typeof c!="object")throw new TypeError("options must be an object");const{center:o=this.mean(l)}=c;switch(l){case"row":{if(!e.isAnyArray(o))throw new TypeError("center must be an array");return tt(this,o),this}case"column":{if(!e.isAnyArray(o))throw new TypeError("center must be an array");return nt(this,o),this}case void 0:{if(typeof o!="number")throw new TypeError("center must be a number");return ht(this,o),this}default:throw new Error(`invalid option: ${l}`)}}scale(l,c={}){if(typeof l=="object"&&(c=l,l=void 0),typeof c!="object")throw new TypeError("options must be an object");let o=c.scale;switch(l){case"row":{if(o===void 0)o=ot(this);else if(!e.isAnyArray(o))throw new TypeError("scale must be an array");return xt(this,o),this}case"column":{if(o===void 0)o=rt(this);else if(!e.isAnyArray(o))throw new TypeError("scale must be an array");return At(this,o),this}case void 0:{if(o===void 0)o=Dt(this);else if(typeof o!="number")throw new TypeError("scale must be a number");return Zt(this,o),this}default:throw new Error(`invalid option: ${l}`)}}toString(l){return s(this,l)}[Symbol.iterator](){return this.entries()}*entries(){for(let l=0;l<this.rows;l++)for(let c=0;c<this.columns;c++)yield[l,c,this.get(l,c)]}*values(){for(let l=0;l<this.rows;l++)for(let c=0;c<this.columns;c++)yield this.get(l,c)}}St.prototype.klass="Matrix",typeof Symbol<"u"&&(St.prototype[Symbol.for("nodejs.util.inspect.custom")]=r);function Ne(y,l){return y-l}function Pe(y){return y.every(l=>typeof l=="number")}St.random=St.rand,St.randomInt=St.randInt,St.diagonal=St.diag,St.prototype.diagonal=St.prototype.diag,St.identity=St.eye,St.prototype.negate=St.prototype.neg,St.prototype.tensorProduct=St.prototype.kroneckerProduct;class q extends St{data;#t(l,c){if(this.data=[],Number.isInteger(c)&&c>=0)for(let o=0;o<l;o++)this.data.push(new Float64Array(c));else throw new TypeError("nColumns must be a positive integer");this.rows=l,this.columns=c}constructor(l,c){if(super(),q.isMatrix(l))this.#t(l.rows,l.columns),q.copy(l,this);else if(Number.isInteger(l)&&l>=0)this.#t(l,c);else if(e.isAnyArray(l)){const o=l;if(l=o.length,c=l?o[0].length:0,typeof c!="number")throw new TypeError("Data must be a 2D array with at least one element");this.data=[];for(let u=0;u<l;u++){if(o[u].length!==c)throw new RangeError("Inconsistent array dimensions");if(!Pe(o[u]))throw new TypeError("Input data contains non-numeric values");this.data.push(Float64Array.from(o[u]))}this.rows=l,this.columns=c}else throw new TypeError("First argument must be a positive number or an array")}set(l,c,o){return this.data[l][c]=o,this}get(l,c){return this.data[l][c]}removeRow(l){return m(this,l),this.data.splice(l,1),this.rows-=1,this}addRow(l,c){return c===void 0&&(c=l,l=this.rows),m(this,l,!0),c=Float64Array.from(_(this,c)),this.data.splice(l,0,c),this.rows+=1,this}removeColumn(l){g(this,l);for(let c=0;c<this.rows;c++){const o=new Float64Array(this.columns-1);for(let u=0;u<l;u++)o[u]=this.data[c][u];for(let u=l+1;u<this.columns;u++)o[u-1]=this.data[c][u];this.data[c]=o}return this.columns-=1,this}addColumn(l,c){typeof c>"u"&&(c=l,l=this.columns),g(this,l,!0),c=M(this,c);for(let o=0;o<this.rows;o++){const u=new Float64Array(this.columns+1);let p=0;for(;p<l;p++)u[p]=this.data[o][p];for(u[p++]=c[o];p<this.columns+1;p++)u[p]=this.data[o][p-1];this.data[o]=u}return this.columns+=1,this}}d(St,q);class Et extends St{#t;get size(){return this.#t.size}get rows(){return this.#t.rows}get columns(){return this.#t.columns}get diagonalSize(){return this.rows}static isSymmetricMatrix(l){return q.isMatrix(l)&&l.klassType==="SymmetricMatrix"}static zeros(l){return new this(l)}static ones(l){return new this(l).fill(1)}constructor(l){if(super(),q.isMatrix(l)){if(!l.isSymmetric())throw new TypeError("not symmetric data");this.#t=q.copy(l,new q(l.rows,l.rows))}else if(Number.isInteger(l)&&l>=0)this.#t=new q(l,l);else if(this.#t=new q(l),!this.isSymmetric())throw new TypeError("not symmetric data")}clone(){const l=new Et(this.diagonalSize);for(const[c,o,u]of this.upperRightEntries())l.set(c,o,u);return l}toMatrix(){return new q(this)}get(l,c){return this.#t.get(l,c)}set(l,c,o){return this.#t.set(l,c,o),this.#t.set(c,l,o),this}removeCross(l){return this.#t.removeRow(l),this.#t.removeColumn(l),this}addCross(l,c){c===void 0&&(c=l,l=this.diagonalSize);const o=c.slice();return o.splice(l,1),this.#t.addRow(l,o),this.#t.addColumn(l,c),this}applyMask(l){if(l.length!==this.diagonalSize)throw new RangeError("Mask size do not match with matrix size");const c=[];for(const[o,u]of l.entries())u||c.push(o);c.reverse();for(const o of c)this.removeCross(o);return this}toCompact(){const{diagonalSize:l}=this,c=new Array(l*(l+1)/2);for(let o=0,u=0,p=0;p<c.length;p++)c[p]=this.get(u,o),++o>=l&&(o=++u);return c}static fromCompact(l){const c=l.length,o=(Math.sqrt(8*c+1)-1)/2;if(!Number.isInteger(o))throw new TypeError(`This array is not a compact representation of a Symmetric Matrix, ${JSON.stringify(l)}`);const u=new Et(o);for(let p=0,T=0,R=0;R<c;R++)u.set(p,T,l[R]),++p>=o&&(p=++T);return u}*upperRightEntries(){for(let l=0,c=0;l<this.diagonalSize;void 0){const o=this.get(l,c);yield[l,c,o],++c>=this.diagonalSize&&(c=++l)}}*upperRightValues(){for(let l=0,c=0;l<this.diagonalSize;void 0)yield this.get(l,c),++c>=this.diagonalSize&&(c=++l)}}Et.prototype.klassType="SymmetricMatrix";class yt extends Et{static isDistanceMatrix(l){return Et.isSymmetricMatrix(l)&&l.klassSubType==="DistanceMatrix"}constructor(l){if(super(l),!this.isDistance())throw new TypeError("Provided arguments do no produce a distance matrix")}set(l,c,o){return l===c&&(o=0),super.set(l,c,o)}addCross(l,c){return c===void 0&&(c=l,l=this.diagonalSize),c=c.slice(),c[l]=0,super.addCross(l,c)}toSymmetricMatrix(){return new Et(this)}clone(){const l=new yt(this.diagonalSize);for(const[c,o,u]of this.upperRightEntries())c!==o&&l.set(c,o,u);return l}toCompact(){const{diagonalSize:l}=this,c=(l-1)*l/2,o=new Array(c);for(let u=1,p=0,T=0;T<o.length;T++)o[T]=this.get(p,u),++u>=l&&(u=++p+1);return o}static fromCompact(l){const c=l.length;if(c===0)return new this(0);const o=(Math.sqrt(8*c+1)+1)/2;if(!Number.isInteger(o))throw new TypeError(`This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(l)}`);const u=new this(o);for(let p=1,T=0,R=0;R<c;R++)u.set(p,T,l[R]),++p>=o&&(p=++T+1);return u}}yt.prototype.klassSubType="DistanceMatrix";class kt extends St{constructor(l,c,o){super(),this.matrix=l,this.rows=c,this.columns=o}}class te extends kt{constructor(l,c){g(l,c),super(l,l.rows,1),this.column=c}set(l,c,o){return this.matrix.set(l,this.column,o),this}get(l){return this.matrix.get(l,this.column)}}class oe extends kt{constructor(l,c){S(l,c),super(l,l.rows,c.length),this.columnIndices=c}set(l,c,o){return this.matrix.set(l,this.columnIndices[c],o),this}get(l,c){return this.matrix.get(l,this.columnIndices[c])}}class qe extends kt{constructor(l){super(l,l.rows,l.columns)}set(l,c,o){return this.matrix.set(l,this.columns-c-1,o),this}get(l,c){return this.matrix.get(l,this.columns-c-1)}}class xe extends kt{constructor(l){super(l,l.rows,l.columns)}set(l,c,o){return this.matrix.set(this.rows-l-1,c,o),this}get(l,c){return this.matrix.get(this.rows-l-1,c)}}class X extends kt{constructor(l,c){m(l,c),super(l,1,l.columns),this.row=c}set(l,c,o){return this.matrix.set(this.row,c,o),this}get(l,c){return this.matrix.get(this.row,c)}}class Ie extends kt{constructor(l,c){E(l,c),super(l,c.length,l.columns),this.rowIndices=c}set(l,c,o){return this.matrix.set(this.rowIndices[l],c,o),this}get(l,c){return this.matrix.get(this.rowIndices[l],c)}}class Kt extends kt{constructor(l,c,o){E(l,c),S(l,o),super(l,c.length,o.length),this.rowIndices=c,this.columnIndices=o}set(l,c,o){return this.matrix.set(this.rowIndices[l],this.columnIndices[c],o),this}get(l,c){return this.matrix.get(this.rowIndices[l],this.columnIndices[c])}}class Se extends kt{constructor(l,c,o,u,p){x(l,c,o,u,p),super(l,o-c+1,p-u+1),this.startRow=c,this.startColumn=u}set(l,c,o){return this.matrix.set(this.startRow+l,this.startColumn+c,o),this}get(l,c){return this.matrix.get(this.startRow+l,this.startColumn+c)}}class $t extends kt{constructor(l){super(l,l.columns,l.rows)}set(l,c,o){return this.matrix.set(c,l,o),this}get(l,c){return this.matrix.get(c,l)}}class Fe extends St{constructor(l,c={}){const{rows:o=1}=c;if(l.length%o!==0)throw new Error("the data length is not divisible by the number of rows");super(),this.rows=o,this.columns=l.length/o,this.data=l}set(l,c,o){let u=this._calculateIndex(l,c);return this.data[u]=o,this}get(l,c){let o=this._calculateIndex(l,c);return this.data[o]}_calculateIndex(l,c){return l*this.columns+c}}class bt extends St{constructor(l){super(),this.data=l,this.rows=l.length,this.columns=l[0].length}set(l,c,o){return this.data[l][c]=o,this}get(l,c){return this.data[l][c]}}function he(y,l){if(e.isAnyArray(y))return y[0]&&e.isAnyArray(y[0])?new bt(y):new Fe(y,l);throw new Error("the argument is not an array")}class Ye{constructor(l){l=bt.checkMatrix(l);let c=l.clone(),o=c.rows,u=c.columns,p=new Float64Array(o),T=1,R,L,D,K,z,it,pt,Q,at;for(R=0;R<o;R++)p[R]=R;for(Q=new Float64Array(o),L=0;L<u;L++){for(R=0;R<o;R++)Q[R]=c.get(R,L);for(R=0;R<o;R++){for(at=Math.min(R,L),z=0,D=0;D<at;D++)z+=c.get(R,D)*Q[D];Q[R]-=z,c.set(R,L,Q[R])}for(K=L,R=L+1;R<o;R++)Math.abs(Q[R])>Math.abs(Q[K])&&(K=R);if(K!==L){for(D=0;D<u;D++)it=c.get(K,D),c.set(K,D,c.get(L,D)),c.set(L,D,it);pt=p[K],p[K]=p[L],p[L]=pt,T=-T}if(L<o&&c.get(L,L)!==0)for(R=L+1;R<o;R++)c.set(R,L,c.get(R,L)/c.get(L,L))}this.LU=c,this.pivotVector=p,this.pivotSign=T}isSingular(){let l=this.LU,c=l.columns;for(let o=0;o<c;o++)if(l.get(o,o)===0)return!0;return!1}solve(l){l=q.checkMatrix(l);let c=this.LU;if(c.rows!==l.rows)throw new Error("Invalid matrix dimensions");if(this.isSingular())throw new Error("LU matrix is singular");let u=l.columns,p=l.subMatrixRow(this.pivotVector,0,u-1),T=c.columns,R,L,D;for(D=0;D<T;D++)for(R=D+1;R<T;R++)for(L=0;L<u;L++)p.set(R,L,p.get(R,L)-p.get(D,L)*c.get(R,D));for(D=T-1;D>=0;D--){for(L=0;L<u;L++)p.set(D,L,p.get(D,L)/c.get(D,D));for(R=0;R<D;R++)for(L=0;L<u;L++)p.set(R,L,p.get(R,L)-p.get(D,L)*c.get(R,D))}return p}get determinant(){let l=this.LU;if(!l.isSquare())throw new Error("Matrix must be square");let c=this.pivotSign,o=l.columns;for(let u=0;u<o;u++)c*=l.get(u,u);return c}get lowerTriangularMatrix(){let l=this.LU,c=l.rows,o=l.columns,u=new q(c,o);for(let p=0;p<c;p++)for(let T=0;T<o;T++)p>T?u.set(p,T,l.get(p,T)):p===T?u.set(p,T,1):u.set(p,T,0);return u}get upperTriangularMatrix(){let l=this.LU,c=l.rows,o=l.columns,u=new q(c,o);for(let p=0;p<c;p++)for(let T=0;T<o;T++)p<=T?u.set(p,T,l.get(p,T)):u.set(p,T,0);return u}get pivotPermutationVector(){return Array.from(this.pivotVector)}}function be(y,l){let c=0;return Math.abs(y)>Math.abs(l)?(c=l/y,Math.abs(y)*Math.sqrt(1+c*c)):l!==0?(c=y/l,Math.abs(l)*Math.sqrt(1+c*c)):0}class F{constructor(l){l=bt.checkMatrix(l);let c=l.clone(),o=l.rows,u=l.columns,p=new Float64Array(u),T,R,L,D;for(L=0;L<u;L++){let K=0;for(T=L;T<o;T++)K=be(K,c.get(T,L));if(K!==0){for(c.get(L,L)<0&&(K=-K),T=L;T<o;T++)c.set(T,L,c.get(T,L)/K);for(c.set(L,L,c.get(L,L)+1),R=L+1;R<u;R++){for(D=0,T=L;T<o;T++)D+=c.get(T,L)*c.get(T,R);for(D=-D/c.get(L,L),T=L;T<o;T++)c.set(T,R,c.get(T,R)+D*c.get(T,L))}}p[L]=-K}this.QR=c,this.Rdiag=p}solve(l){l=q.checkMatrix(l);let c=this.QR,o=c.rows;if(l.rows!==o)throw new Error("Matrix row dimensions must agree");if(!this.isFullRank())throw new Error("Matrix is rank deficient");let u=l.columns,p=l.clone(),T=c.columns,R,L,D,K;for(D=0;D<T;D++)for(L=0;L<u;L++){for(K=0,R=D;R<o;R++)K+=c.get(R,D)*p.get(R,L);for(K=-K/c.get(D,D),R=D;R<o;R++)p.set(R,L,p.get(R,L)+K*c.get(R,D))}for(D=T-1;D>=0;D--){for(L=0;L<u;L++)p.set(D,L,p.get(D,L)/this.Rdiag[D]);for(R=0;R<D;R++)for(L=0;L<u;L++)p.set(R,L,p.get(R,L)-p.get(D,L)*c.get(R,D))}return p.subMatrix(0,T-1,0,u-1)}isFullRank(){let l=this.QR.columns;for(let c=0;c<l;c++)if(this.Rdiag[c]===0)return!1;return!0}get upperTriangularMatrix(){let l=this.QR,c=l.columns,o=new q(c,c),u,p;for(u=0;u<c;u++)for(p=0;p<c;p++)u<p?o.set(u,p,l.get(u,p)):u===p?o.set(u,p,this.Rdiag[u]):o.set(u,p,0);return o}get orthogonalMatrix(){let l=this.QR,c=l.rows,o=l.columns,u=new q(c,o),p,T,R,L;for(R=o-1;R>=0;R--){for(p=0;p<c;p++)u.set(p,R,0);for(u.set(R,R,1),T=R;T<o;T++)if(l.get(R,R)!==0){for(L=0,p=R;p<c;p++)L+=l.get(p,R)*u.get(p,T);for(L=-L/l.get(R,R),p=R;p<c;p++)u.set(p,T,u.get(p,T)+L*l.get(p,R))}}return u}}class b{constructor(l,c={}){if(l=bt.checkMatrix(l),l.isEmpty())throw new Error("Matrix must be non-empty");let o=l.rows,u=l.columns;const{computeLeftSingularVectors:p=!0,computeRightSingularVectors:T=!0,autoTranspose:R=!1}=c;let L=!!p,D=!!T,K=!1,z;if(o<u)if(!R)z=l.clone(),console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");else{z=l.transpose(),o=z.rows,u=z.columns,K=!0;let w=L;L=D,D=w}else z=l.clone();let it=Math.min(o,u),pt=Math.min(o+1,u),Q=new Float64Array(pt),at=new q(o,it),Tt=new q(u,u),H=new Float64Array(u),dt=new Float64Array(o),It=new Float64Array(pt);for(let w=0;w<pt;w++)It[w]=w;let ne=Math.min(o-1,u),ie=Math.max(0,Math.min(u-2,o)),Be=Math.max(ne,ie);for(let w=0;w<Be;w++){if(w<ne){Q[w]=0;for(let B=w;B<o;B++)Q[w]=be(Q[w],z.get(B,w));if(Q[w]!==0){z.get(w,w)<0&&(Q[w]=-Q[w]);for(let B=w;B<o;B++)z.set(B,w,z.get(B,w)/Q[w]);z.set(w,w,z.get(w,w)+1)}Q[w]=-Q[w]}for(let B=w+1;B<u;B++){if(w<ne&&Q[w]!==0){let W=0;for(let N=w;N<o;N++)W+=z.get(N,w)*z.get(N,B);W=-W/z.get(w,w);for(let N=w;N<o;N++)z.set(N,B,z.get(N,B)+W*z.get(N,w))}H[B]=z.get(w,B)}if(L&&w<ne)for(let B=w;B<o;B++)at.set(B,w,z.get(B,w));if(w<ie){H[w]=0;for(let B=w+1;B<u;B++)H[w]=be(H[w],H[B]);if(H[w]!==0){H[w+1]<0&&(H[w]=0-H[w]);for(let B=w+1;B<u;B++)H[B]/=H[w];H[w+1]+=1}if(H[w]=-H[w],w+1<o&&H[w]!==0){for(let B=w+1;B<o;B++)dt[B]=0;for(let B=w+1;B<o;B++)for(let W=w+1;W<u;W++)dt[B]+=H[W]*z.get(B,W);for(let B=w+1;B<u;B++){let W=-H[B]/H[w+1];for(let N=w+1;N<o;N++)z.set(N,B,z.get(N,B)+W*dt[N])}}if(D)for(let B=w+1;B<u;B++)Tt.set(B,w,H[B])}}let Vt=Math.min(u,o+1);if(ne<u&&(Q[ne]=z.get(ne,ne)),o<Vt&&(Q[Vt-1]=0),ie+1<Vt&&(H[ie]=z.get(ie,Vt-1)),H[Vt-1]=0,L){for(let w=ne;w<it;w++){for(let B=0;B<o;B++)at.set(B,w,0);at.set(w,w,1)}for(let w=ne-1;w>=0;w--)if(Q[w]!==0){for(let B=w+1;B<it;B++){let W=0;for(let N=w;N<o;N++)W+=at.get(N,w)*at.get(N,B);W=-W/at.get(w,w);for(let N=w;N<o;N++)at.set(N,B,at.get(N,B)+W*at.get(N,w))}for(let B=w;B<o;B++)at.set(B,w,-at.get(B,w));at.set(w,w,1+at.get(w,w));for(let B=0;B<w-1;B++)at.set(B,w,0)}else{for(let B=0;B<o;B++)at.set(B,w,0);at.set(w,w,1)}}if(D)for(let w=u-1;w>=0;w--){if(w<ie&&H[w]!==0)for(let B=w+1;B<u;B++){let W=0;for(let N=w+1;N<u;N++)W+=Tt.get(N,w)*Tt.get(N,B);W=-W/Tt.get(w+1,w);for(let N=w+1;N<u;N++)Tt.set(N,B,Tt.get(N,B)+W*Tt.get(N,w))}for(let B=0;B<u;B++)Tt.set(B,w,0);Tt.set(w,w,1)}let Jt=Vt-1,A=Number.EPSILON;for(;Vt>0;){let w,B;for(w=Vt-2;w>=-1&&w!==-1;w--){const W=Number.MIN_VALUE+A*Math.abs(Q[w]+Math.abs(Q[w+1]));if(Math.abs(H[w])<=W||Number.isNaN(H[w])){H[w]=0;break}}if(w===Vt-2)B=4;else{let W;for(W=Vt-1;W>=w&&W!==w;W--){let N=(W!==Vt?Math.abs(H[W]):0)+(W!==w+1?Math.abs(H[W-1]):0);if(Math.abs(Q[W])<=A*N){Q[W]=0;break}}W===w?B=3:W===Vt-1?B=1:(B=2,w=W)}switch(w++,B){case 1:{let W=H[Vt-2];H[Vt-2]=0;for(let N=Vt-2;N>=w;N--){let ct=be(Q[N],W),ut=Q[N]/ct,vt=W/ct;if(Q[N]=ct,N!==w&&(W=-vt*H[N-1],H[N-1]=ut*H[N-1]),D)for(let _t=0;_t<u;_t++)ct=ut*Tt.get(_t,N)+vt*Tt.get(_t,Vt-1),Tt.set(_t,Vt-1,-vt*Tt.get(_t,N)+ut*Tt.get(_t,Vt-1)),Tt.set(_t,N,ct)}break}case 2:{let W=H[w-1];H[w-1]=0;for(let N=w;N<Vt;N++){let ct=be(Q[N],W),ut=Q[N]/ct,vt=W/ct;if(Q[N]=ct,W=-vt*H[N],H[N]=ut*H[N],L)for(let _t=0;_t<o;_t++)ct=ut*at.get(_t,N)+vt*at.get(_t,w-1),at.set(_t,w-1,-vt*at.get(_t,N)+ut*at.get(_t,w-1)),at.set(_t,N,ct)}break}case 3:{const W=Math.max(Math.abs(Q[Vt-1]),Math.abs(Q[Vt-2]),Math.abs(H[Vt-2]),Math.abs(Q[w]),Math.abs(H[w])),N=Q[Vt-1]/W,ct=Q[Vt-2]/W,ut=H[Vt-2]/W,vt=Q[w]/W,_t=H[w]/W,Ut=((ct+N)*(ct-N)+ut*ut)/2,Ht=N*ut*(N*ut);let Lt=0;(Ut!==0||Ht!==0)&&(Ut<0?Lt=0-Math.sqrt(Ut*Ut+Ht):Lt=Math.sqrt(Ut*Ut+Ht),Lt=Ht/(Ut+Lt));let re=(vt+N)*(vt-N)+Lt,ge=vt*_t;for(let Wt=w;Wt<Vt-1;Wt++){let le=be(re,ge);le===0&&(le=Number.MIN_VALUE);let ue=re/le,Ft=ge/le;if(Wt!==w&&(H[Wt-1]=le),re=ue*Q[Wt]+Ft*H[Wt],H[Wt]=ue*H[Wt]-Ft*Q[Wt],ge=Ft*Q[Wt+1],Q[Wt+1]=ue*Q[Wt+1],D)for(let ce=0;ce<u;ce++)le=ue*Tt.get(ce,Wt)+Ft*Tt.get(ce,Wt+1),Tt.set(ce,Wt+1,-Ft*Tt.get(ce,Wt)+ue*Tt.get(ce,Wt+1)),Tt.set(ce,Wt,le);if(le=be(re,ge),le===0&&(le=Number.MIN_VALUE),ue=re/le,Ft=ge/le,Q[Wt]=le,re=ue*H[Wt]+Ft*Q[Wt+1],Q[Wt+1]=-Ft*H[Wt]+ue*Q[Wt+1],ge=Ft*H[Wt+1],H[Wt+1]=ue*H[Wt+1],L&&Wt<o-1)for(let ce=0;ce<o;ce++)le=ue*at.get(ce,Wt)+Ft*at.get(ce,Wt+1),at.set(ce,Wt+1,-Ft*at.get(ce,Wt)+ue*at.get(ce,Wt+1)),at.set(ce,Wt,le)}H[Vt-2]=re;break}case 4:{if(Q[w]<=0&&(Q[w]=Q[w]<0?-Q[w]:0,D))for(let W=0;W<=Jt;W++)Tt.set(W,w,-Tt.get(W,w));for(;w<Jt&&!(Q[w]>=Q[w+1]);){let W=Q[w];if(Q[w]=Q[w+1],Q[w+1]=W,D&&w<u-1)for(let N=0;N<u;N++)W=Tt.get(N,w+1),Tt.set(N,w+1,Tt.get(N,w)),Tt.set(N,w,W);if(L&&w<o-1)for(let N=0;N<o;N++)W=at.get(N,w+1),at.set(N,w+1,at.get(N,w)),at.set(N,w,W);w++}Vt--;break}}}if(K){let w=Tt;Tt=at,at=w}this.m=o,this.n=u,this.s=Q,this.U=at,this.V=Tt}solve(l){let c=l,o=this.threshold,u=this.s.length,p=q.zeros(u,u);for(let it=0;it<u;it++)Math.abs(this.s[it])<=o?p.set(it,it,0):p.set(it,it,1/this.s[it]);let T=this.U,R=this.rightSingularVectors,L=R.mmul(p),D=R.rows,K=T.rows,z=q.zeros(D,K);for(let it=0;it<D;it++)for(let pt=0;pt<K;pt++){let Q=0;for(let at=0;at<u;at++)Q+=L.get(it,at)*T.get(pt,at);z.set(it,pt,Q)}return z.mmul(c)}solveForDiagonal(l){return this.solve(q.diag(l))}inverse(){let l=this.V,c=this.threshold,o=l.rows,u=l.columns,p=new q(o,this.s.length);for(let K=0;K<o;K++)for(let z=0;z<u;z++)Math.abs(this.s[z])>c&&p.set(K,z,l.get(K,z)/this.s[z]);let T=this.U,R=T.rows,L=T.columns,D=new q(o,R);for(let K=0;K<o;K++)for(let z=0;z<R;z++){let it=0;for(let pt=0;pt<L;pt++)it+=p.get(K,pt)*T.get(z,pt);D.set(K,z,it)}return D}get condition(){return this.s[0]/this.s[Math.min(this.m,this.n)-1]}get norm2(){return this.s[0]}get rank(){let l=Math.max(this.m,this.n)*this.s[0]*Number.EPSILON,c=0,o=this.s;for(let u=0,p=o.length;u<p;u++)o[u]>l&&c++;return c}get diagonal(){return Array.from(this.s)}get threshold(){return Number.EPSILON/2*Math.max(this.m,this.n)*this.s[0]}get leftSingularVectors(){return this.U}get rightSingularVectors(){return this.V}get diagonalMatrix(){return q.diag(this.s)}}function J(y,l=!1){return y=bt.checkMatrix(y),l?new b(y).inverse():lt(y,q.eye(y.rows))}function lt(y,l,c=!1){return y=bt.checkMatrix(y),l=bt.checkMatrix(l),c?new b(y).solve(l):y.isSquare()?new Ye(y).solve(l):new F(y).solve(l)}function ft(y){if(y=q.checkMatrix(y),y.isSquare()){if(y.columns===0)return 1;let l,c,o,u;if(y.columns===2)return l=y.get(0,0),c=y.get(0,1),o=y.get(1,0),u=y.get(1,1),l*u-c*o;if(y.columns===3){let p,T,R;return p=new Kt(y,[1,2],[1,2]),T=new Kt(y,[1,2],[0,2]),R=new Kt(y,[1,2],[0,1]),l=y.get(0,0),c=y.get(0,1),o=y.get(0,2),l*ft(p)-c*ft(T)+o*ft(R)}else return new Ye(y).determinant}else throw Error("determinant can only be calculated for a square matrix")}function st(y,l){let c=[];for(let o=0;o<y;o++)o!==l&&c.push(o);return c}function jt(y,l,c,o=1e-9,u=1e-9){if(y>u)return new Array(l.rows+1).fill(0);{let p=l.addRow(c,[0]);for(let T=0;T<p.rows;T++)Math.abs(p.get(T,0))<o&&p.set(T,0,0);return p.to1DArray()}}function Mt(y,l={}){const{thresholdValue:c=1e-9,thresholdError:o=1e-9}=l;y=q.checkMatrix(y);let u=y.rows,p=new q(u,u);for(let T=0;T<u;T++){let R=q.columnVector(y.getRow(T)),L=y.subMatrixRow(st(u,T)).transpose(),K=new b(L).solve(R),z=q.sub(R,L.mmul(K)).abs().max();p.setRow(T,jt(z,K,T,c,o))}return p}function Bt(y,l=Number.EPSILON){if(y=q.checkMatrix(y),y.isEmpty())return y.transpose();let c=new b(y,{autoTranspose:!0}),o=c.leftSingularVectors,u=c.rightSingularVectors,p=c.diagonal;for(let T=0;T<p.length;T++)Math.abs(p[T])>l?p[T]=1/p[T]:p[T]=0;return u.mmul(q.diag(p).mmul(o.transpose()))}function zt(y,l=y,c={}){y=new q(y);let o=!1;if(typeof l=="object"&&!q.isMatrix(l)&&!e.isAnyArray(l)?(c=l,l=y,o=!0):l=new q(l),y.rows!==l.rows)throw new TypeError("Both matrices must have the same number of rows");const{center:u=!0}=c;u&&(y=y.center("column"),o||(l=l.center("column")));const p=y.transpose().mmul(l);for(let T=0;T<p.rows;T++)for(let R=0;R<p.columns;R++)p.set(T,R,p.get(T,R)*(1/(y.rows-1)));return p}function gt(y,l=y,c={}){y=new q(y);let o=!1;if(typeof l=="object"&&!q.isMatrix(l)&&!e.isAnyArray(l)?(c=l,l=y,o=!0):l=new q(l),y.rows!==l.rows)throw new TypeError("Both matrices must have the same number of rows");const{center:u=!0,scale:p=!0}=c;u&&(y.center("column"),o||l.center("column")),p&&(y.scale("column"),o||l.scale("column"));const T=y.standardDeviation("column",{unbiased:!0}),R=o?T:l.standardDeviation("column",{unbiased:!0}),L=y.transpose().mmul(l);for(let D=0;D<L.rows;D++)for(let K=0;K<L.columns;K++)L.set(D,K,L.get(D,K)*(1/(T[D]*R[K]))*(1/(y.rows-1)));return L}class Pt{constructor(l,c={}){const{assumeSymmetric:o=!1}=c;if(l=bt.checkMatrix(l),!l.isSquare())throw new Error("Matrix is not a square matrix");if(l.isEmpty())throw new Error("Matrix must be non-empty");let u=l.columns,p=new q(u,u),T=new Float64Array(u),R=new Float64Array(u),L=l,D,K,z=!1;if(o?z=!0:z=l.isSymmetric(),z){for(D=0;D<u;D++)for(K=0;K<u;K++)p.set(D,K,L.get(D,K));ee(u,R,T,p),Gt(u,R,T,p)}else{let it=new q(u,u),pt=new Float64Array(u);for(K=0;K<u;K++)for(D=0;D<u;D++)it.set(D,K,L.get(D,K));Rt(u,it,pt,p),ae(u,R,T,p,it)}this.n=u,this.e=R,this.d=T,this.V=p}get realEigenvalues(){return Array.from(this.d)}get imaginaryEigenvalues(){return Array.from(this.e)}get eigenvectorMatrix(){return this.V}get diagonalMatrix(){let l=this.n,c=this.e,o=this.d,u=new q(l,l),p,T;for(p=0;p<l;p++){for(T=0;T<l;T++)u.set(p,T,0);u.set(p,p,o[p]),c[p]>0?u.set(p,p+1,c[p]):c[p]<0&&u.set(p,p-1,c[p])}return u}}function ee(y,l,c,o){let u,p,T,R,L,D,K,z;for(L=0;L<y;L++)c[L]=o.get(y-1,L);for(R=y-1;R>0;R--){for(z=0,T=0,D=0;D<R;D++)z=z+Math.abs(c[D]);if(z===0)for(l[R]=c[R-1],L=0;L<R;L++)c[L]=o.get(R-1,L),o.set(R,L,0),o.set(L,R,0);else{for(D=0;D<R;D++)c[D]/=z,T+=c[D]*c[D];for(u=c[R-1],p=Math.sqrt(T),u>0&&(p=-p),l[R]=z*p,T=T-u*p,c[R-1]=u-p,L=0;L<R;L++)l[L]=0;for(L=0;L<R;L++){for(u=c[L],o.set(L,R,u),p=l[L]+o.get(L,L)*u,D=L+1;D<=R-1;D++)p+=o.get(D,L)*c[D],l[D]+=o.get(D,L)*u;l[L]=p}for(u=0,L=0;L<R;L++)l[L]/=T,u+=l[L]*c[L];for(K=u/(T+T),L=0;L<R;L++)l[L]-=K*c[L];for(L=0;L<R;L++){for(u=c[L],p=l[L],D=L;D<=R-1;D++)o.set(D,L,o.get(D,L)-(u*l[D]+p*c[D]));c[L]=o.get(R-1,L),o.set(R,L,0)}}c[R]=T}for(R=0;R<y-1;R++){if(o.set(y-1,R,o.get(R,R)),o.set(R,R,1),T=c[R+1],T!==0){for(D=0;D<=R;D++)c[D]=o.get(D,R+1)/T;for(L=0;L<=R;L++){for(p=0,D=0;D<=R;D++)p+=o.get(D,R+1)*o.get(D,L);for(D=0;D<=R;D++)o.set(D,L,o.get(D,L)-p*c[D])}}for(D=0;D<=R;D++)o.set(D,R+1,0)}for(L=0;L<y;L++)c[L]=o.get(y-1,L),o.set(y-1,L,0);o.set(y-1,y-1,1),l[0]=0}function Gt(y,l,c,o){let u,p,T,R,L,D,K,z,it,pt,Q,at,Tt,H,dt,It;for(T=1;T<y;T++)l[T-1]=l[T];l[y-1]=0;let ne=0,ie=0,Be=Number.EPSILON;for(D=0;D<y;D++){for(ie=Math.max(ie,Math.abs(c[D])+Math.abs(l[D])),K=D;K<y&&!(Math.abs(l[K])<=Be*ie);)K++;if(K>D)do{for(u=c[D],z=(c[D+1]-u)/(2*l[D]),it=be(z,1),z<0&&(it=-it),c[D]=l[D]/(z+it),c[D+1]=l[D]*(z+it),pt=c[D+1],p=u-c[D],T=D+2;T<y;T++)c[T]-=p;for(ne=ne+p,z=c[K],Q=1,at=Q,Tt=Q,H=l[D+1],dt=0,It=0,T=K-1;T>=D;T--)for(Tt=at,at=Q,It=dt,u=Q*l[T],p=Q*z,it=be(z,l[T]),l[T+1]=dt*it,dt=l[T]/it,Q=z/it,z=Q*c[T]-dt*u,c[T+1]=p+dt*(Q*u+dt*c[T]),L=0;L<y;L++)p=o.get(L,T+1),o.set(L,T+1,dt*o.get(L,T)+Q*p),o.set(L,T,Q*o.get(L,T)-dt*p);z=-dt*It*Tt*H*l[D]/pt,l[D]=dt*z,c[D]=Q*z}while(Math.abs(l[D])>Be*ie);c[D]=c[D]+ne,l[D]=0}for(T=0;T<y-1;T++){for(L=T,z=c[T],R=T+1;R<y;R++)c[R]<z&&(L=R,z=c[R]);if(L!==T)for(c[L]=c[T],c[T]=z,R=0;R<y;R++)z=o.get(R,T),o.set(R,T,o.get(R,L)),o.set(R,L,z)}}function Rt(y,l,c,o){let u=0,p=y-1,T,R,L,D,K,z,it;for(z=u+1;z<=p-1;z++){for(it=0,D=z;D<=p;D++)it=it+Math.abs(l.get(D,z-1));if(it!==0){for(L=0,D=p;D>=z;D--)c[D]=l.get(D,z-1)/it,L+=c[D]*c[D];for(R=Math.sqrt(L),c[z]>0&&(R=-R),L=L-c[z]*R,c[z]=c[z]-R,K=z;K<y;K++){for(T=0,D=p;D>=z;D--)T+=c[D]*l.get(D,K);for(T=T/L,D=z;D<=p;D++)l.set(D,K,l.get(D,K)-T*c[D])}for(D=0;D<=p;D++){for(T=0,K=p;K>=z;K--)T+=c[K]*l.get(D,K);for(T=T/L,K=z;K<=p;K++)l.set(D,K,l.get(D,K)-T*c[K])}c[z]=it*c[z],l.set(z,z-1,it*R)}}for(D=0;D<y;D++)for(K=0;K<y;K++)o.set(D,K,D===K?1:0);for(z=p-1;z>=u+1;z--)if(l.get(z,z-1)!==0){for(D=z+1;D<=p;D++)c[D]=l.get(D,z-1);for(K=z;K<=p;K++){for(R=0,D=z;D<=p;D++)R+=c[D]*o.get(D,K);for(R=R/c[z]/l.get(z,z-1),D=z;D<=p;D++)o.set(D,K,o.get(D,K)+R*c[D])}}}function ae(y,l,c,o,u){let p=y-1,T=0,R=y-1,L=Number.EPSILON,D=0,K=0,z=0,it=0,pt=0,Q=0,at=0,Tt=0,H,dt,It,ne,ie,Be,Vt,Jt,A,w,B,W,N,ct,ut;for(H=0;H<y;H++)for((H<T||H>R)&&(c[H]=u.get(H,H),l[H]=0),dt=Math.max(H-1,0);dt<y;dt++)K=K+Math.abs(u.get(H,dt));for(;p>=T;){for(ne=p;ne>T&&(Q=Math.abs(u.get(ne-1,ne-1))+Math.abs(u.get(ne,ne)),Q===0&&(Q=K),!(Math.abs(u.get(ne,ne-1))<L*Q));)ne--;if(ne===p)u.set(p,p,u.get(p,p)+D),c[p]=u.get(p,p),l[p]=0,p--,Tt=0;else if(ne===p-1){if(Vt=u.get(p,p-1)*u.get(p-1,p),z=(u.get(p-1,p-1)-u.get(p,p))/2,it=z*z+Vt,at=Math.sqrt(Math.abs(it)),u.set(p,p,u.get(p,p)+D),u.set(p-1,p-1,u.get(p-1,p-1)+D),Jt=u.get(p,p),it>=0){for(at=z>=0?z+at:z-at,c[p-1]=Jt+at,c[p]=c[p-1],at!==0&&(c[p]=Jt-Vt/at),l[p-1]=0,l[p]=0,Jt=u.get(p,p-1),Q=Math.abs(Jt)+Math.abs(at),z=Jt/Q,it=at/Q,pt=Math.sqrt(z*z+it*it),z=z/pt,it=it/pt,dt=p-1;dt<y;dt++)at=u.get(p-1,dt),u.set(p-1,dt,it*at+z*u.get(p,dt)),u.set(p,dt,it*u.get(p,dt)-z*at);for(H=0;H<=p;H++)at=u.get(H,p-1),u.set(H,p-1,it*at+z*u.get(H,p)),u.set(H,p,it*u.get(H,p)-z*at);for(H=T;H<=R;H++)at=o.get(H,p-1),o.set(H,p-1,it*at+z*o.get(H,p)),o.set(H,p,it*o.get(H,p)-z*at)}else c[p-1]=Jt+z,c[p]=Jt+z,l[p-1]=at,l[p]=-at;p=p-2,Tt=0}else{if(Jt=u.get(p,p),A=0,Vt=0,ne<p&&(A=u.get(p-1,p-1),Vt=u.get(p,p-1)*u.get(p-1,p)),Tt===10){for(D+=Jt,H=T;H<=p;H++)u.set(H,H,u.get(H,H)-Jt);Q=Math.abs(u.get(p,p-1))+Math.abs(u.get(p-1,p-2)),Jt=A=.75*Q,Vt=-.4375*Q*Q}if(Tt===30&&(Q=(A-Jt)/2,Q=Q*Q+Vt,Q>0)){for(Q=Math.sqrt(Q),A<Jt&&(Q=-Q),Q=Jt-Vt/((A-Jt)/2+Q),H=T;H<=p;H++)u.set(H,H,u.get(H,H)-Q);D+=Q,Jt=A=Vt=.964}for(Tt=Tt+1,ie=p-2;ie>=ne&&(at=u.get(ie,ie),pt=Jt-at,Q=A-at,z=(pt*Q-Vt)/u.get(ie+1,ie)+u.get(ie,ie+1),it=u.get(ie+1,ie+1)-at-pt-Q,pt=u.get(ie+2,ie+1),Q=Math.abs(z)+Math.abs(it)+Math.abs(pt),z=z/Q,it=it/Q,pt=pt/Q,!(ie===ne||Math.abs(u.get(ie,ie-1))*(Math.abs(it)+Math.abs(pt))<L*(Math.abs(z)*(Math.abs(u.get(ie-1,ie-1))+Math.abs(at)+Math.abs(u.get(ie+1,ie+1))))));)ie--;for(H=ie+2;H<=p;H++)u.set(H,H-2,0),H>ie+2&&u.set(H,H-3,0);for(It=ie;It<=p-1&&(ct=It!==p-1,It!==ie&&(z=u.get(It,It-1),it=u.get(It+1,It-1),pt=ct?u.get(It+2,It-1):0,Jt=Math.abs(z)+Math.abs(it)+Math.abs(pt),Jt!==0&&(z=z/Jt,it=it/Jt,pt=pt/Jt)),Jt!==0);It++)if(Q=Math.sqrt(z*z+it*it+pt*pt),z<0&&(Q=-Q),Q!==0){for(It!==ie?u.set(It,It-1,-Q*Jt):ne!==ie&&u.set(It,It-1,-u.get(It,It-1)),z=z+Q,Jt=z/Q,A=it/Q,at=pt/Q,it=it/z,pt=pt/z,dt=It;dt<y;dt++)z=u.get(It,dt)+it*u.get(It+1,dt),ct&&(z=z+pt*u.get(It+2,dt),u.set(It+2,dt,u.get(It+2,dt)-z*at)),u.set(It,dt,u.get(It,dt)-z*Jt),u.set(It+1,dt,u.get(It+1,dt)-z*A);for(H=0;H<=Math.min(p,It+3);H++)z=Jt*u.get(H,It)+A*u.get(H,It+1),ct&&(z=z+at*u.get(H,It+2),u.set(H,It+2,u.get(H,It+2)-z*pt)),u.set(H,It,u.get(H,It)-z),u.set(H,It+1,u.get(H,It+1)-z*it);for(H=T;H<=R;H++)z=Jt*o.get(H,It)+A*o.get(H,It+1),ct&&(z=z+at*o.get(H,It+2),o.set(H,It+2,o.get(H,It+2)-z*pt)),o.set(H,It,o.get(H,It)-z),o.set(H,It+1,o.get(H,It+1)-z*it)}}}if(K!==0){for(p=y-1;p>=0;p--)if(z=c[p],it=l[p],it===0)for(ne=p,u.set(p,p,1),H=p-1;H>=0;H--){for(Vt=u.get(H,H)-z,pt=0,dt=ne;dt<=p;dt++)pt=pt+u.get(H,dt)*u.get(dt,p);if(l[H]<0)at=Vt,Q=pt;else if(ne=H,l[H]===0?u.set(H,p,Vt!==0?-pt/Vt:-pt/(L*K)):(Jt=u.get(H,H+1),A=u.get(H+1,H),it=(c[H]-z)*(c[H]-z)+l[H]*l[H],Be=(Jt*Q-at*pt)/it,u.set(H,p,Be),u.set(H+1,p,Math.abs(Jt)>Math.abs(at)?(-pt-Vt*Be)/Jt:(-Q-A*Be)/at)),Be=Math.abs(u.get(H,p)),L*Be*Be>1)for(dt=H;dt<=p;dt++)u.set(dt,p,u.get(dt,p)/Be)}else if(it<0)for(ne=p-1,Math.abs(u.get(p,p-1))>Math.abs(u.get(p-1,p))?(u.set(p-1,p-1,it/u.get(p,p-1)),u.set(p-1,p,-(u.get(p,p)-z)/u.get(p,p-1))):(ut=Y(0,-u.get(p-1,p),u.get(p-1,p-1)-z,it),u.set(p-1,p-1,ut[0]),u.set(p-1,p,ut[1])),u.set(p,p-1,0),u.set(p,p,1),H=p-2;H>=0;H--){for(w=0,B=0,dt=ne;dt<=p;dt++)w=w+u.get(H,dt)*u.get(dt,p-1),B=B+u.get(H,dt)*u.get(dt,p);if(Vt=u.get(H,H)-z,l[H]<0)at=Vt,pt=w,Q=B;else if(ne=H,l[H]===0?(ut=Y(-w,-B,Vt,it),u.set(H,p-1,ut[0]),u.set(H,p,ut[1])):(Jt=u.get(H,H+1),A=u.get(H+1,H),W=(c[H]-z)*(c[H]-z)+l[H]*l[H]-it*it,N=(c[H]-z)*2*it,W===0&&N===0&&(W=L*K*(Math.abs(Vt)+Math.abs(it)+Math.abs(Jt)+Math.abs(A)+Math.abs(at))),ut=Y(Jt*pt-at*w+it*B,Jt*Q-at*B-it*w,W,N),u.set(H,p-1,ut[0]),u.set(H,p,ut[1]),Math.abs(Jt)>Math.abs(at)+Math.abs(it)?(u.set(H+1,p-1,(-w-Vt*u.get(H,p-1)+it*u.get(H,p))/Jt),u.set(H+1,p,(-B-Vt*u.get(H,p)-it*u.get(H,p-1))/Jt)):(ut=Y(-pt-A*u.get(H,p-1),-Q-A*u.get(H,p),at,it),u.set(H+1,p-1,ut[0]),u.set(H+1,p,ut[1]))),Be=Math.max(Math.abs(u.get(H,p-1)),Math.abs(u.get(H,p))),L*Be*Be>1)for(dt=H;dt<=p;dt++)u.set(dt,p-1,u.get(dt,p-1)/Be),u.set(dt,p,u.get(dt,p)/Be)}for(H=0;H<y;H++)if(H<T||H>R)for(dt=H;dt<y;dt++)o.set(H,dt,u.get(H,dt));for(dt=y-1;dt>=T;dt--)for(H=T;H<=R;H++){for(at=0,It=T;It<=Math.min(dt,R);It++)at=at+o.get(H,It)*u.get(It,dt);o.set(H,dt,at)}}}function Y(y,l,c,o){let u,p;return Math.abs(c)>Math.abs(o)?(u=o/c,p=c+u*o,[(y+u*l)/p,(l-u*y)/p]):(u=c/o,p=o+u*c,[(u*y+l)/p,(u*l-y)/p])}class mt{constructor(l){if(l=bt.checkMatrix(l),!l.isSymmetric())throw new Error("Matrix is not symmetric");let c=l,o=c.rows,u=new q(o,o),p=!0,T,R,L;for(R=0;R<o;R++){let D=0;for(L=0;L<R;L++){let K=0;for(T=0;T<L;T++)K+=u.get(L,T)*u.get(R,T);K=(c.get(R,L)-K)/u.get(L,L),u.set(R,L,K),D=D+K*K}for(D=c.get(R,R)-D,p&&=D>0,u.set(R,R,Math.sqrt(Math.max(D,0))),L=R+1;L<o;L++)u.set(R,L,0)}this.L=u,this.positiveDefinite=p}isPositiveDefinite(){return this.positiveDefinite}solve(l){l=bt.checkMatrix(l);let c=this.L,o=c.rows;if(l.rows!==o)throw new Error("Matrix dimensions do not match");if(this.isPositiveDefinite()===!1)throw new Error("Matrix is not positive definite");let u=l.columns,p=l.clone(),T,R,L;for(L=0;L<o;L++)for(R=0;R<u;R++){for(T=0;T<L;T++)p.set(L,R,p.get(L,R)-p.get(T,R)*c.get(L,T));p.set(L,R,p.get(L,R)/c.get(L,L))}for(L=o-1;L>=0;L--)for(R=0;R<u;R++){for(T=L+1;T<o;T++)p.set(L,R,p.get(L,R)-p.get(T,R)*c.get(T,L));p.set(L,R,p.get(L,R)/c.get(L,L))}return p}get lowerTriangularMatrix(){return this.L}}class wt{constructor(l,c={}){l=bt.checkMatrix(l);let{Y:o}=c;const{scaleScores:u=!1,maxIterations:p=1e3,terminationCriteria:T=1e-10}=c;let R;if(o){if(e.isAnyArray(o)&&typeof o[0]=="number"?o=q.columnVector(o):o=bt.checkMatrix(o),o.rows!==l.rows)throw new Error("Y should have the same number of rows as X");R=o.getColumnVector(0)}else R=l.getColumnVector(0);let L=1,D,K,z,it;for(let pt=0;pt<p&&L>T;pt++)z=l.transpose().mmul(R).div(R.transpose().mmul(R).get(0,0)),z=z.div(z.norm()),D=l.mmul(z).div(z.transpose().mmul(z).get(0,0)),pt>0&&(L=D.clone().sub(it).pow(2).sum()),it=D.clone(),o?(K=o.transpose().mmul(D).div(D.transpose().mmul(D).get(0,0)),K=K.div(K.norm()),R=o.mmul(K).div(K.transpose().mmul(K).get(0,0))):R=D;if(o){let pt=l.transpose().mmul(D).div(D.transpose().mmul(D).get(0,0));pt=pt.div(pt.norm());let Q=l.clone().sub(D.clone().mmul(pt.transpose())),at=R.transpose().mmul(D).div(D.transpose().mmul(D).get(0,0)),Tt=o.clone().sub(D.clone().mulS(at.get(0,0)).mmul(K.transpose()));this.t=D,this.p=pt.transpose(),this.w=z.transpose(),this.q=K,this.u=R,this.s=D.transpose().mmul(D),this.xResidual=Q,this.yResidual=Tt,this.betas=at}else this.w=z.transpose(),this.s=D.transpose().mmul(D).sqrt(),u?this.t=D.clone().div(this.s.get(0,0)):this.t=D,this.xResidual=l.sub(D.mmul(z.transpose()))}}return pe.AbstractMatrix=St,pe.CHO=mt,pe.CholeskyDecomposition=mt,pe.DistanceMatrix=yt,pe.EVD=Pt,pe.EigenvalueDecomposition=Pt,pe.LU=Ye,pe.LuDecomposition=Ye,pe.Matrix=q,pe.MatrixColumnSelectionView=oe,pe.MatrixColumnView=te,pe.MatrixFlipColumnView=qe,pe.MatrixFlipRowView=xe,pe.MatrixRowSelectionView=Ie,pe.MatrixRowView=X,pe.MatrixSelectionView=Kt,pe.MatrixSubView=Se,pe.MatrixTransposeView=$t,pe.NIPALS=wt,pe.Nipals=wt,pe.QR=F,pe.QrDecomposition=F,pe.SVD=b,pe.SingularValueDecomposition=b,pe.SymmetricMatrix=Et,pe.WrapperMatrix1D=Fe,pe.WrapperMatrix2D=bt,pe.correlation=gt,pe.covariance=zt,pe.default=q,pe.determinant=ft,pe.inverse=J,pe.linearDependencies=Mt,pe.pseudoInverse=Bt,pe.solve=lt,pe.wrap=he,pe}var zl=W1();const Od=r_(zl),X1=zl.Matrix,j1=zl.SingularValueDecomposition;Od.Matrix?Od.Matrix:zl.Matrix;var Sr=typeof Float32Array<"u"?Float32Array:Array;function jr(){var e=new Sr(9);return Sr!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function Oa(e){var t=new Sr(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function nl(e,t,n,i,r,s,a,h,f){var d=new Sr(9);return d[0]=e,d[1]=t,d[2]=n,d[3]=i,d[4]=r,d[5]=s,d[6]=a,d[7]=h,d[8]=f,d}function Ba(e,t,n,i,r,s,a,h,f,d){return e[0]=t,e[1]=n,e[2]=i,e[3]=r,e[4]=s,e[5]=a,e[6]=h,e[7]=f,e[8]=d,e}function g0(e,t){if(e===t){var n=t[1],i=t[2],r=t[5];e[1]=t[3],e[2]=t[6],e[3]=n,e[5]=t[7],e[6]=i,e[7]=r}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function q1(e){var t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],h=e[6],f=e[7],d=e[8];return t*(d*s-a*f)+n*(-d*r+a*h)+i*(f*r-s*h)}function _0(e,t,n){var i=t[0],r=t[1],s=t[2],a=t[3],h=t[4],f=t[5],d=t[6],m=t[7],g=t[8],_=n[0],M=n[1],E=n[2],S=n[3],x=n[4],v=n[5],O=n[6],U=n[7],C=n[8];return e[0]=_*i+M*a+E*d,e[1]=_*r+M*h+E*m,e[2]=_*s+M*f+E*g,e[3]=S*i+x*a+v*d,e[4]=S*r+x*h+v*m,e[5]=S*s+x*f+v*g,e[6]=O*i+U*a+C*d,e[7]=O*r+U*h+C*m,e[8]=O*s+U*f+C*g,e}function Ae(){var e=new Sr(3);return Sr!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function Rn(e){var t=new Sr(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Dr(e,t,n){var i=new Sr(3);return i[0]=e,i[1]=t,i[2]=n,i}function v0(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Pi(e,t,n,i){return e[0]=t,e[1]=n,e[2]=i,e}function x0(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function An(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function Y1(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function K1(e,t){var n=t[0]-e[0],i=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(n*n+i*i+r*r)}function ch(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function yn(e,t){var n=t[0],i=t[1],r=t[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e}function $1(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function qr(e,t,n){var i=t[0],r=t[1],s=t[2],a=n[0],h=n[1],f=n[2];return e[0]=r*f-s*h,e[1]=s*a-i*f,e[2]=i*h-r*a,e}function hh(e,t,n){var i=t[0],r=t[1],s=t[2];return e[0]=i*n[0]+r*n[3]+s*n[6],e[1]=i*n[1]+r*n[4]+s*n[7],e[2]=i*n[2]+r*n[5]+s*n[8],e}(function(){var e=Ae();return function(t,n,i,r,s,a){var h,f;for(n||(n=3),i||(i=0),r?f=Math.min(r*n+i,t.length):f=t.length,h=i;h<f;h+=n)e[0]=t[h],e[1]=t[h+1],e[2]=t[h+2],s(e,e,a),t[h]=e[0],t[h+1]=e[1],t[h+2]=e[2];return t}})();const rn={NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,MOUTH_LEFT:9,MOUTH_RIGHT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32};let Z1=class{poseLandmarker;mirrorActions;debug;engaged;humanSewPoses;humanWristPoses;humanHandPoses;controllerState;latestPoseResults=null;_tempVec3_1=Ae();_tempVec3_2=Ae();_tempVec3_3=Ae();_tempVec3_4=Ae();_tempVec3_5=Ae();_tempMat3_1=jr();_tempMat3_2=jr();R_STD_CAM=nl(0,1,0,0,0,-1,-1,0,0);constructor(t={}){this.debug=t.debug??!1,this.mirrorActions=t.mirrorActions??!1,this.engaged=!1,this.controllerState=null,this._resetInternalState(),this._initializeMediaPipe()}async _initializeMediaPipe(){try{const t=await cr.forVisionTasks("/wasm");this.poseLandmarker=await Tn.createFromOptions(t,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",delegate:"GPU"},runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5})}catch(t){this.debug&&console.error("Error initializing MediaPipe:",t)}}_displayControls(){console.log("MediaPipe Teleoperation Device Controls:"),console.log("- Raise both arms to shoulder height: Start pose tracking"),console.log("- Lower arms: Stop pose tracking")}_resetInternalState(){this.humanSewPoses={left:{S:null,E:null,W:null},right:{S:null,E:null,W:null},R_world_body:null},this.humanWristPoses={left:null,right:null},this.humanHandPoses={left:{landmarks:null,confidence:0},right:{landmarks:null,confidence:0}},this.engaged=!1}async processFrame(t){if(!this.poseLandmarker)return;const n=performance.now(),i=this.poseLandmarker.detectForVideo(t,n);this._processPoseResults(i)}_processPoseResults(t){this.latestPoseResults=t;try{if(t.landmarks&&t.worldLandmarks&&t.landmarks.length>0){const s=this._getBodyCentricCoordinates(t);if(s){const a=t.worldLandmarks[0],h=a[rn.LEFT_SHOULDER],f=a[rn.LEFT_ELBOW],d=a[rn.LEFT_WRIST],m=a[rn.RIGHT_SHOULDER],g=a[rn.RIGHT_ELBOW],_=a[rn.RIGHT_WRIST],M=[h,f,d].every(S=>S.visibility&&S.visibility>.05),E=[m,g,_].every(S=>S.visibility&&S.visibility>.05);M&&s.left?this.humanSewPoses.left=s.left:this.humanSewPoses.left={S:null,E:null,W:null},E&&s.right?this.humanSewPoses.right=s.right:this.humanSewPoses.right={S:null,E:null,W:null},M&&E&&s.body_frame?this.humanSewPoses.R_world_body=s.body_frame.R_world_body:this.humanSewPoses.R_world_body=null,this._checkEngagement()}else this.humanSewPoses.left={S:null,E:null,W:null},this.humanSewPoses.right={S:null,E:null,W:null},this.humanSewPoses.R_world_body=null,this._checkEngagement()}else this.humanSewPoses.left={S:null,E:null,W:null},this.humanSewPoses.right={S:null,E:null,W:null},this.humanSewPoses.R_world_body=null,this._checkEngagement();const n=null,i=this._computeWristRotationFromHand("left",t,this.humanSewPoses),r=this._computeWristRotationFromHand("right",t,this.humanSewPoses);this.controllerState={sew_poses:this._cloneSewPoses(this.humanSewPoses),wrist_poses:{left:i,right:r},torso_angles:n,engaged:this.engaged}}catch(n){this.debug&&console.error("Error processing pose landmarks:",n)}}_transformToBodyFrame(t){Pi(this._tempVec3_2,t.x,t.y,t.z),An(this._tempVec3_4,this._tempVec3_2,this._tempVec3_3);const n=Ae();return hh(n,this._tempVec3_4,this._tempMat3_2),n}_getBodyCentricCoordinates(t){if(!t.worldLandmarks||t.worldLandmarks.length===0)return null;const n=t.worldLandmarks[0],i=n[rn.LEFT_SHOULDER],r=n[rn.RIGHT_SHOULDER],s=n[rn.LEFT_HIP],a=n[rn.RIGHT_HIP];Pi(this._tempVec3_1,(i.x+r.x)/2,(i.y+r.y)/2,(i.z+r.z)/2),Pi(this._tempVec3_2,(s.x+a.x)/2,(s.y+a.y)/2,(s.z+a.z)/2),v0(this._tempVec3_3,this._tempVec3_1),Pi(this._tempVec3_4,i.x-r.x,i.y-r.y,i.z-r.z),yn(this._tempVec3_4,this._tempVec3_4),An(this._tempVec3_5,this._tempVec3_2,this._tempVec3_1),ch(this._tempVec3_5,this._tempVec3_5),yn(this._tempVec3_5,this._tempVec3_5),qr(this._tempVec3_1,this._tempVec3_4,this._tempVec3_5),yn(this._tempVec3_1,this._tempVec3_1),Ba(this._tempMat3_1,this._tempVec3_1[0],this._tempVec3_1[1],this._tempVec3_1[2],this._tempVec3_4[0],this._tempVec3_4[1],this._tempVec3_4[2],this._tempVec3_5[0],this._tempVec3_5[1],this._tempVec3_5[2]),g0(this._tempMat3_2,this._tempMat3_1);const h=jr();_0(h,this.R_STD_CAM,this._tempMat3_1);const f={left:{S:this._transformToBodyFrame(n[rn.LEFT_SHOULDER]),E:this._transformToBodyFrame(n[rn.LEFT_ELBOW]),W:this._transformToBodyFrame(n[rn.LEFT_WRIST])},right:{S:this._transformToBodyFrame(n[rn.RIGHT_SHOULDER]),E:this._transformToBodyFrame(n[rn.RIGHT_ELBOW]),W:this._transformToBodyFrame(n[rn.RIGHT_WRIST])},body_frame:{origin:Rn(this._tempVec3_3),x_axis:Rn(this._tempVec3_1),y_axis:Rn(this._tempVec3_4),z_axis:Rn(this._tempVec3_5),R_world_body:h}};return Pi(f.body_frame.y_axis,i.x-r.x,i.y-r.y,i.z-r.z),yn(f.body_frame.y_axis,f.body_frame.y_axis),f}_computeWristRotationFromHand(t,n,i){try{if(!n.worldLandmarks||n.worldLandmarks.length===0)return null;const r=n.worldLandmarks[0],a=i[t].W;if(!a)return null;const h=t==="left"?rn.LEFT_PINKY:rn.RIGHT_PINKY,f=t==="left"?rn.LEFT_INDEX:rn.RIGHT_INDEX,d=this._transformToBodyFrame(r[h]),m=this._transformToBodyFrame(r[f]),g=Ae();x0(g,d,m),Y1(g,g,.5);const _=Ae();An(_,g,a),yn(_,_);const M=Ae();An(M,d,a);const E=Ae();An(E,m,a);const S=Ae();qr(S,E,M),yn(S,S);const x=Ae();qr(x,_,S),yn(x,x);const v=nl(_[0],_[1],_[2],S[0],S[1],S[2],x[0],x[1],x[2]);return qr(S,x,_),yn(S,S),Ba(v,_[0],_[1],_[2],S[0],S[1],S[2],x[0],x[1],x[2]),Ba(v,_[0],_[1],_[2],S[0],S[1],S[2],x[0],x[1],x[2]),v}catch(r){return this.debug&&console.error(`Error computing wrist rotation for ${t} hand:`,r),null}}_checkEngagement(){const t=this.humanSewPoses.left,n=this.humanSewPoses.right,i=t.S!==null&&t.E!==null&&t.W!==null,r=n.S!==null&&n.E!==null&&n.W!==null;this.engaged=i&&r}startControl(){this._resetInternalState(),this.engaged=!0}getControllerState(){return this.controllerState||{sew_poses:this._cloneSewPoses(this.humanSewPoses),wrist_poses:{left:null,right:null},torso_angles:null,engaged:this.engaged}}getSewAndWristPoses(){return{sew_poses:this._cloneSewPoses(this.humanSewPoses),wrist_poses:{left:null,right:null}}}getLatestPoseResults(){return this.latestPoseResults}getLatestHandResults(){return null}close(){this.poseLandmarker&&(this.poseLandmarker.close(),this.poseLandmarker=void 0)}_cloneSEWPose(t){return{S:t.S?Rn(t.S):null,E:t.E?Rn(t.E):null,W:t.W?Rn(t.W):null}}_cloneSewPoses(t){return{left:this._cloneSEWPose(t.left),right:this._cloneSEWPose(t.right),R_world_body:t.R_world_body?Oa(t.R_world_body):null}}};const gn={NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,MOUTH_LEFT:9,MOUTH_RIGHT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32},Bd={WRIST:0,THUMB_CMC:1,THUMB_MCP:2,THUMB_IP:3,THUMB_TIP:4,INDEX_FINGER_MCP:5,INDEX_FINGER_PIP:6,INDEX_FINGER_DIP:7,INDEX_FINGER_TIP:8,MIDDLE_FINGER_MCP:9,MIDDLE_FINGER_PIP:10,MIDDLE_FINGER_DIP:11,MIDDLE_FINGER_TIP:12,RING_FINGER_MCP:13,RING_FINGER_PIP:14,RING_FINGER_DIP:15,RING_FINGER_TIP:16,PINKY_MCP:17,PINKY_PIP:18,PINKY_DIP:19,PINKY_TIP:20};class J1{poseLandmarker;handLandmarker;mirrorActions;debug;engaged;humanSewPoses;humanWristPoses;humanHandPoses;controllerState;latestPoseResults=null;latestHandResults=null;_tempVec3_1=Ae();_tempVec3_2=Ae();_tempVec3_3=Ae();_tempVec3_4=Ae();_tempVec3_5=Ae();_tempMat3_1=jr();_tempMat3_2=jr();R_STD_CAM=nl(0,0,-1,1,0,0,0,-1,0);constructor(t={}){this.debug=t.debug??!1,this.mirrorActions=t.mirrorActions??!1,this.engaged=!1,this.controllerState=null,this._resetInternalState(),this._initializeMediaPipe()}async _initializeMediaPipe(){try{const t=await cr.forVisionTasks("/wasm");this.poseLandmarker=await Tn.createFromOptions(t,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",delegate:"GPU"},runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5}),this.handLandmarker=await kn.createFromOptions(t,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5})}catch(t){this.debug&&console.error("Error initializing MediaPipe:",t)}}_displayControls(){console.log("MediaPipe Teleoperation Device Controls:"),console.log("- Raise both arms to shoulder height: Start pose tracking"),console.log("- Lower arms: Stop pose tracking")}_resetInternalState(){this.humanSewPoses={left:{S:null,E:null,W:null},right:{S:null,E:null,W:null},R_world_body:null},this.humanWristPoses={left:null,right:null},this.humanHandPoses={left:{landmarks:null,confidence:0},right:{landmarks:null,confidence:0}},this.engaged=!1}async processFrame(t){if(!this.poseLandmarker||!this.handLandmarker)return;const n=performance.now(),i=this.poseLandmarker.detectForVideo(t,n);this._processPoseResults(i);const r=this.handLandmarker.detectForVideo(t,n);this.latestHandResults=r,this._processHandResults(r)}_processPoseResults(t){this.latestPoseResults=t;try{if(t.landmarks&&t.worldLandmarks&&t.landmarks.length>0){const i=this._getBodyCentricCoordinates(t);if(i){const r=t.landmarks[0],s=r[gn.LEFT_SHOULDER],a=r[gn.LEFT_ELBOW],h=r[gn.LEFT_WRIST],f=r[gn.RIGHT_SHOULDER],d=r[gn.RIGHT_ELBOW],m=r[gn.RIGHT_WRIST],g=[s,a,h].every(M=>M.visibility&&M.visibility>.05),_=[f,d,m].every(M=>M.visibility&&M.visibility>.05);g&&i.left?this.humanSewPoses.left=i.left:this.humanSewPoses.left={S:null,E:null,W:null},_&&i.right?this.humanSewPoses.right=i.right:this.humanSewPoses.right={S:null,E:null,W:null},g&&_&&i.body_frame?this.humanSewPoses.R_world_body=i.body_frame.R_world_body:this.humanSewPoses.R_world_body=null,this._checkEngagement()}else this.humanSewPoses.left={S:null,E:null,W:null},this.humanSewPoses.right={S:null,E:null,W:null},this.humanSewPoses.R_world_body=null,this._checkEngagement()}else this.humanSewPoses.left={S:null,E:null,W:null},this.humanSewPoses.right={S:null,E:null,W:null},this.humanSewPoses.R_world_body=null,this._checkEngagement();let n=null;this.humanSewPoses.R_world_body&&(n=this._computeTorsoAngles(this.humanSewPoses.R_world_body)),this.controllerState={sew_poses:this._cloneSewPoses(this.humanSewPoses),wrist_poses:this._cloneWristPoses(this.humanWristPoses),hand_poses:this._cloneHandPoses(this.humanHandPoses),torso_angles:n,engaged:this.engaged}}catch(n){this.debug&&console.error("Error processing pose landmarks:",n)}}_processHandResults(t){if(!t.landmarks||!t.handedness||t.landmarks.length===0){this.humanWristPoses.left=null,this.humanWristPoses.right=null,this.humanHandPoses.left={landmarks:null,confidence:0},this.humanHandPoses.right={landmarks:null,confidence:0};return}try{if(t.landmarks&&t.handedness&&t.worldLandmarks){const n=this._getHandCentricCoordinates(t);if(n){for(const i of["left","right"])if(n[i]){const r=this._computeWristRotationFromHand(i,n[i].landmarks);r&&(this.humanWristPoses[i]=r),this.humanHandPoses[i]={landmarks:n[i].landmarks,confidence:n[i].confidence||0}}}}}catch(n){this.debug&&console.error("Error processing hand landmarks:",n)}}_transformToBodyFrame(t){Pi(this._tempVec3_2,t.x,t.y,t.z),An(this._tempVec3_4,this._tempVec3_2,this._tempVec3_3);const n=Ae();return hh(n,this._tempVec3_4,this._tempMat3_1),n}_getBodyCentricCoordinates(t){if(!t.worldLandmarks||t.worldLandmarks.length===0)return null;const n=t.worldLandmarks[0],i=n[gn.LEFT_SHOULDER],r=n[gn.RIGHT_SHOULDER],s=n[gn.LEFT_HIP],a=n[gn.RIGHT_HIP];Pi(this._tempVec3_1,(i.x+r.x)/2,(i.y+r.y)/2,(i.z+r.z)/2),Pi(this._tempVec3_2,(s.x+a.x)/2,(s.y+a.y)/2,(s.z+a.z)/2),v0(this._tempVec3_3,this._tempVec3_1),Pi(this._tempVec3_4,i.x-r.x,i.y-r.y,i.z-r.z),yn(this._tempVec3_4,this._tempVec3_4),An(this._tempVec3_5,this._tempVec3_2,this._tempVec3_1),ch(this._tempVec3_5,this._tempVec3_5),yn(this._tempVec3_5,this._tempVec3_5),qr(this._tempVec3_1,this._tempVec3_4,this._tempVec3_5),yn(this._tempVec3_1,this._tempVec3_1),Ba(this._tempMat3_1,this._tempVec3_1[0],this._tempVec3_4[0],this._tempVec3_5[0],this._tempVec3_1[1],this._tempVec3_4[1],this._tempVec3_5[1],this._tempVec3_1[2],this._tempVec3_4[2],this._tempVec3_5[2]);const h=jr();_0(h,this.R_STD_CAM,this._tempMat3_1);const f={left:{S:this._transformToBodyFrame(n[gn.LEFT_SHOULDER]),E:this._transformToBodyFrame(n[gn.LEFT_ELBOW]),W:this._transformToBodyFrame(n[gn.LEFT_WRIST])},right:{S:this._transformToBodyFrame(n[gn.RIGHT_SHOULDER]),E:this._transformToBodyFrame(n[gn.RIGHT_ELBOW]),W:this._transformToBodyFrame(n[gn.RIGHT_WRIST])},body_frame:{origin:Rn(this._tempVec3_3),x_axis:Rn(this._tempVec3_1),y_axis:Rn(this._tempVec3_4),z_axis:Rn(this._tempVec3_5),R_world_body:h}};return Pi(f.body_frame.y_axis,i.x-r.x,i.y-r.y,i.z-r.z),yn(f.body_frame.y_axis,f.body_frame.y_axis),f}_getHandCentricCoordinates(t){if(!t.worldLandmarks||!this.humanSewPoses.left.W||!this.humanSewPoses.right.W||!this.humanSewPoses.R_world_body)return null;const n={},i=g0(jr(),this.humanSewPoses.R_world_body);for(let r=0;r<t.landmarks.length;r++){const s=t.worldLandmarks[r],a=t.handedness[r],f=a[0].categoryName.toLowerCase()==="left"?"right":"left",d=f==="left"?this.humanSewPoses.left.W:this.humanSewPoses.right.W,m=s[Bd.WRIST],g=Dr(m.x,m.y,m.z),_={},M=["WRIST","THUMB_CMC","THUMB_MCP","THUMB_IP","THUMB_TIP","INDEX_FINGER_MCP","INDEX_FINGER_PIP","INDEX_FINGER_DIP","INDEX_FINGER_TIP","MIDDLE_FINGER_MCP","MIDDLE_FINGER_PIP","MIDDLE_FINGER_DIP","MIDDLE_FINGER_TIP","RING_FINGER_MCP","RING_FINGER_PIP","RING_FINGER_DIP","RING_FINGER_TIP","PINKY_MCP","PINKY_PIP","PINKY_DIP","PINKY_TIP"];for(const E of M){const S=Bd[E],x=s[S],v=Dr(x.x,x.y,x.z),O=An(Ae(),v,g),U=hh(Ae(),O,i),C=x0(Ae(),U,d);_[E.toLowerCase()]=C}n[f]={landmarks:_,confidence:a[0].score||0}}return n}_computeWristRotationFromHand(t,n){try{const i=n.wrist,r=n.index_finger_mcp,s=n.pinky_mcp,a=n.ring_finger_mcp,h=n.middle_finger_mcp;if(!i||!r||!s)return null;let f;h&&a?f=Dr((r[0]+h[0]+a[0]+s[0])/4,(r[1]+h[1]+a[1]+s[1])/4,(r[2]+h[2]+a[2]+s[2])/4):h?f=Dr((r[0]+h[0]+s[0])/3,(r[1]+h[1]+s[1])/3,(r[2]+h[2]+s[2])/3):f=Dr((r[0]+s[0])/2,(r[1]+s[1])/2,(r[2]+s[2])/2);const d=An(Ae(),f,i);yn(d,d);const m=[];if(r&&m.push(An(Ae(),r,i)),h&&m.push(An(Ae(),h,i)),a&&m.push(An(Ae(),a,i)),s&&m.push(An(Ae(),s,i)),m.length<2)return null;const g=new X1(m.map(k=>[k[0],k[1],k[2]])),M=new j1(g).rightSingularVectors,E=M.getColumn(M.columns-1),S=Dr(E[0],E[1],E[2]);yn(S,S);const x=An(Ae(),r,i),v=An(Ae(),s,i),O=qr(Ae(),x,v);yn(O,O),$1(S,O)<0&&ch(S,S);const U=S,C=qr(Ae(),d,U);yn(C,C);const V=nl(d[0],U[0],C[0],d[1],U[1],C[1],d[2],U[2],C[2]);return Math.abs(q1(V)-1)>.1?(this.debug&&console.warn(`Invalid rotation matrix computed for ${t} hand`),null):V}catch(i){return this.debug&&console.error(`Error computing wrist rotation for ${t} hand:`,i),null}}_computeGraspFromHand(t,n){try{if(!n.landmarks||n.confidence<.5)return 0;const i=n.landmarks,r=i.thumb_tip,s=i.index_finger_tip;return!r||!s?0:K1(r,s)<.04?1:0}catch(i){return this.debug&&console.error(`Error computing grasp for ${t} hand:`,i),0}}_computeTorsoAngles(t){const n=t[6],i=t[7],r=t[8],s=t[3],a=t[0];let h=0,f=0,d=0;return Math.abs(n)<.99999?(f=Math.asin(n),h=Math.atan2(-i,r),d=Math.atan2(-s,a)):(f=Math.sign(n)*Math.PI/2,h=Math.atan2(t[1],t[4]),d=0),Dr(d,h,f)}_checkEngagement(){const t=this.humanSewPoses.left,n=this.humanSewPoses.right,i=t.S!==null&&t.E!==null&&t.W!==null,r=n.S!==null&&n.E!==null&&n.W!==null;this.engaged=i&&r}startControl(){this._resetInternalState(),this.engaged=!0}getControllerState(){return this.controllerState||{sew_poses:this._cloneSewPoses(this.humanSewPoses),wrist_poses:this._cloneWristPoses(this.humanWristPoses),hand_poses:this._cloneHandPoses(this.humanHandPoses),torso_angles:null,engaged:this.engaged}}getSewAndWristPoses(){return{sew_poses:this._cloneSewPoses(this.humanSewPoses),wrist_poses:this._cloneWristPoses(this.humanWristPoses)}}getLatestPoseResults(){return this.latestPoseResults}getLatestHandResults(){return this.latestHandResults}close(){this.poseLandmarker&&(this.poseLandmarker.close(),this.poseLandmarker=void 0),this.handLandmarker&&(this.handLandmarker.close(),this.handLandmarker=void 0)}_cloneSEWPose(t){return{S:t.S?Rn(t.S):null,E:t.E?Rn(t.E):null,W:t.W?Rn(t.W):null}}_cloneSewPoses(t){return{left:this._cloneSEWPose(t.left),right:this._cloneSEWPose(t.right),R_world_body:t.R_world_body?Oa(t.R_world_body):null}}_cloneWristPoses(t){return{left:t.left?Oa(t.left):null,right:t.right?Oa(t.right):null}}_cloneHandData(t){const n=t.landmarks?{}:null;if(n&&t.landmarks)for(const i in t.landmarks)n[i]=Rn(t.landmarks[i]);return{landmarks:n,confidence:t.confidence}}_cloneHandPoses(t){return{left:this._cloneHandData(t.left),right:this._cloneHandData(t.right)}}_copyObject(t){return typeof structuredClone=="function"?structuredClone(t):JSON.parse(JSON.stringify(t))}}const Ho=Le(null),Cr=Le(null),Zu=Le(!1),Ju=Le(!1);function a3(e={}){const t=ui(Ho);t&&t.close();const n=e.useHands?J1:Z1,i=new n({debug:e.debug??!1,mirrorActions:e.mirrorActions??!1});return Ho.set(i),i}function l3(){Zu.set(!0),Ho.subscribe(e=>{e&&e.startControl()})()}function c3(){Zu.set(!1),Ju.set(!1),Cr.set(null)}function h3(e){const t=e.getControllerState();Cr.set(t),Ju.set(t.engaged)}function Q1(){const e=ui(Cr);return e?{sew_poses:e.sew_poses,wrist_poses:e.wrist_poses,torso_angles:"torso_angles"in e?e.torso_angles:null}:{sew_poses:{left:{S:null,E:null,W:null},right:{S:null,E:null,W:null},R_world_body:null},wrist_poses:{left:null,right:null},torso_angles:null}}function t2(){const e=ui(Cr);return!e||!("hand_poses"in e)?{left:null,right:null}:{left:e.hand_poses.left?.landmarks??null,right:e.hand_poses.right?.landmarks??null}}function u3(){const e=ui(Ho);e&&e.close(),Ho.set(null),Cr.set(null),Zu.set(!1),Ju.set(!1)}const zr=Le(null),Ro=Le({left:null,right:null});function f3(e){const t=ui(hl);if(!t)return console.warn("MuJoCo simulation not available"),!1;const n=ui(zr);if(!n||n.length===0)return console.warn("No control commands available to apply"),!1;try{for(let i=0;i<n.length;i++)t.ctrl&&i<t.ctrl.length&&(t.ctrl[i]=n[i]);return!0}catch(i){return console.error("Failed to apply control commands to MuJoCo simulation:",i),!1}}function d3(e="both",t={left:0,right:10}){const n=ui(hl);if(!n)return console.warn("MuJoCo simulation not available"),!1;const i=ui(Ro);let r=!0;try{if((e==="left"||e==="both")&&i.left)for(let s=0;s<i.left.length;s++){const a=t.left+s;n.ctrl&&a<n.ctrl.length&&(n.ctrl[a]=i.left[s])}if((e==="right"||e==="both")&&i.right)for(let s=0;s<i.right.length;s++){const a=t.right+s;n.ctrl&&a<n.ctrl.length&&(n.ctrl[a]=i.right[s])}return r}catch(s){return console.error("Failed to apply hand control commands to MuJoCo simulation:",s),!1}}async function e2(){return t_(()=>import("./Bp_JJo1a.js"),[],import.meta.url)}let ws=null,oa=null;async function y0(e={}){return ws||(oa||(oa=(async()=>{if(e.wasmUrl)return ws=await import(e.wasmUrl),ws;const t=await e2();return ws=t,t})().catch(t=>{throw oa=null,t})),oa)}function il(){return ws}class n2{module=null;async initialize(t={}){this.module=await y0(t)}isReady(){return this.module!==null||il()!==null}async solveIK(t){if(!t.left&&!t.right)throw new Error("At least one arm pose is required to solve IK");const n=this.ensureModule(),i={left_arm:[],right_arm:[]},r={},s={};if(t.left){const h=this.solveArm(n,"left",t.left);i.left_arm=h.q,r.left=h,s.left_arm=new Float64Array(h.q)}if(t.right){const h=this.solveArm(n,"right",t.right);i.right_arm=h.q,r.right=h,s.right_arm=new Float64Array(h.q)}if(t.torsoRotation){const h=kd(t.torsoRotation),f=n.g1_torso_ik(h);i.torso=Array.from(f),s.torso=f,r.torsoRotation=Array.from(h)}else t.torso&&t.torso.length===3&&(i.torso=t.torso,s.torso=new Float64Array(t.torso));Object.keys(r).length>0&&(i.metadata=r);const a=n.g1_to_actuator_qpos(s);return i.control_commands=Array.from(a),i}destroy(){this.module=null}ensureModule(){if(!this.module){const t=il();if(!t)throw new Error("SEW-Mimic runtime not initialized. Call initialize() first.");this.module=t}return this.module}solveArm(t,n,i){const r=sc(i.shoulder),s=sc(i.elbow),a=sc(i.wrist),h=i.wristRotation?kd(i.wristRotation):null,f=t.g1_arm_from_points(n,r,s,a,h);return{q:Array.from(f.q),isLeastSquares:f.isLeastSquares}}}function sc(e){const t=i2(e);if(!t)throw new Error("Invalid vector provided to SEW-Mimic solver");return new Float64Array(t)}function i2(e){if(!e)return null;if(e instanceof Float32Array||e instanceof Float64Array)return Array.from(e.slice(0,3));if(Array.isArray(e))return e.slice(0,3).map(Number);if(typeof e=="object"){const t=e,n=["x","y","z"];if(n.every(r=>typeof t[r]=="number"))return n.map(r=>Number(t[r]));const i=Object.values(t).filter(r=>typeof r=="number");if(i.length>=3)return i.slice(0,3).map(Number)}return null}function kd(e){if(!e)return new Float64Array(9);if(e instanceof Float32Array||e instanceof Float64Array){const t=Array.from(e);return new Float64Array(t.slice(0,9))}else if(Array.isArray(e)){if(e.length===9&&e.every(t=>typeof t=="number"))return new Float64Array(e);if(e.length===3&&e.every(t=>Array.isArray(t))){const t=e.flat().slice(0,9).map(Number);return new Float64Array(t)}}else if(typeof e=="object"){const n=Object.values(e).filter(i=>typeof i=="number");if(n.length>=9)return new Float64Array(n.slice(0,9).map(Number))}throw new Error("Invalid wrist rotation supplied to SEW-Mimic solver")}class r2{module=null;async initialize(t={}){this.module=await y0(t)}isReady(){return this.module!==null||il()!==null}async solveIK(t){const n=this.ensureModule(),i=this.convertFingerPositions(t.fingers),r=n.ah_ik_from_positions(i,t.filterAlpha??1),s=this.parseIKResult(r),a={fingers:s},h=this.buildActuatorSpec(s),f=n.ah_to_actuator_qpos(h);return a.control_commands=Array.from(f),a}getJointGroupMetadata(){return this.ensureModule().ah_get_joint_group_metadata()}setJointGroupMetadata(t){this.ensureModule().ah_set_joint_group_metadata(t)}resetJointGroupMetadata(){this.ensureModule().ah_reset_joint_group_metadata()}destroy(){this.module=null}ensureModule(){if(!this.module){const t=il();if(!t)throw new Error("SEW-Mimic runtime not initialized. Call initialize() first.");this.module=t}return this.module}convertFingerPositions(t){const n={},i=["thumb","index","middle","ring","pinky"];for(const r of i){const s=t[r];s&&(n[r]={mcp:oc(s.mcp),pip:oc(s.pip),tip:oc(s.tip)})}return n}parseIKResult(t){const n={};if(typeof t!="object"||t===null)return n;const i=t,r=["thumb","index","middle","ring","pinky"];for(const s of r){const a=i[s];Array.isArray(a)&&a.length>=2&&(n[s]=[Number(a[0]),Number(a[1])])}return n}buildActuatorSpec(t){const n={},i=["thumb","index","middle","ring","pinky"];for(const r of i){const s=t[r];s&&(n[r]=[s[0],s[1]])}return n}}function oc(e){return e instanceof Float32Array||e instanceof Float64Array?Array.from(e):[...e]}const ka=Le(null),zd=Le(!1),za=Le(!1),Gd=Le(null),Ga=Le(!1),s2=Le(null),o2=Le(0),Va=Le(null),Vd=Le(!1),Ha=Le(!1),Hd=Le(null),a2=Le({left:null,right:null}),l2=Le(0),c2=Zh([Cr],([e])=>{if(!e)return!1;const t=!!(e.sew_poses.left.S&&e.sew_poses.left.E&&e.sew_poses.left.W),n=!!(e.sew_poses.right.S&&e.sew_poses.right.E&&e.sew_poses.right.W);return e.engaged&&(t||n)}),h2=Zh([Cr],([e])=>{if(!e||!("hand_poses"in e))return!1;const t=e.hand_poses;if(!t)return!1;const n=!!t.left?.landmarks,i=!!t.right?.landmarks;return n||i}),p3=Zh([za,Ga,Ha,c2,h2,Cr],([e,t,n,i,r,s])=>({runtime:e,solver:t,handSolver:n,bodyTracking:i,handTracking:r,canSolveIK:e&&t&&i,canSolveHandIK:n&&r,sewPoses:s?.sew_poses??null,wristPoses:s?.wrist_poses??null,handPoses:s&&"hand_poses"in s?s.hand_poses:null}));let _o=null,vo=null,ac=0,lc=0;const rl=.2;function u2(e){if(e<=0)return;const t=1e3/e;ac=ac*(1-rl)+t*rl,o2.set(Math.round(ac))}function f2(e){if(e<=0)return;const t=1e3/e;lc=lc*(1-rl)+t*rl,l2.set(Math.round(lc))}async function M0(e={}){const t=ui(ka);if(t&&t.isReady())return za.set(!0),Ga.set(!0),t;_o||(_o=(async()=>{zd.set(!0),Gd.set(null);try{const n=new n2;return await n.initialize(e),ka.set(n),za.set(!0),Ga.set(!0),n}catch(n){const i=n instanceof Error?n.message:"Unknown error while initializing SEW-Mimic";throw Gd.set(i),ka.set(null),za.set(!1),Ga.set(!1),n}finally{zd.set(!1)}})());try{const n=await _o;return _o=null,n}catch(n){throw _o=null,n}}async function m3(e={}){await M0(e)}async function d2(){let e=ui(ka);if(!e||!e.isReady())try{e=await M0()}catch(h){return zr.set(null),console.error("Failed to initialize SEW-Mimic controller:",h),null}if(!e||!e.isReady())return zr.set(null),console.error("SEW-Mimic controller not ready after initialization"),null;const t=Q1(),n=Wd(t.sew_poses.left);n&&t.wrist_poses?.left&&(n.wristRotation=t.wrist_poses.left);const i=Wd(t.sew_poses.right);i&&t.wrist_poses?.right&&(i.wristRotation=t.wrist_poses.right);const r=t.torso_angles?Array.from(t.torso_angles):void 0,s=t.sew_poses.R_world_body;if(!n&&!i)return zr.set(null),null;const a=performance.now();try{const h=await e.solveIK({left:n??void 0,right:i??void 0,torso:r,torsoRotation:s??void 0});return a!==null&&mm&&typeof performance<"u"&&u2(performance.now()-a),s2.set(h),h?.control_commands&&h.control_commands.length>0?zr.set(h.control_commands):zr.set(null),h}catch(h){return zr.set(null),console.error("SEW-Mimic IK solve failed:",h),null}}async function p2(e={}){const t=ui(Va);if(t&&t.isReady())return Ha.set(!0),t;vo||(vo=(async()=>{Vd.set(!0),Hd.set(null);try{const n=new r2;return await n.initialize(e),Va.set(n),Ha.set(!0),n}catch(n){const i=n instanceof Error?n.message:"Unknown error while initializing Hand IK";throw Hd.set(i),Va.set(null),Ha.set(!1),n}finally{Vd.set(!1)}})());try{const n=await vo;return vo=null,n}catch(n){throw vo=null,n}}async function m2(){let e=ui(Va);if(!e||!e.isReady())try{e=await p2()}catch(s){return Ro.set({left:null,right:null}),console.error("Failed to initialize Hand IK controller:",s),{left:null,right:null}}if(!e||!e.isReady())return Ro.set({left:null,right:null}),console.error("Hand IK controller not ready after initialization"),{left:null,right:null};const t=t2(),n={left:null,right:null},i={left:null,right:null},r=performance.now();try{if(t.left){const s=Xd(t.left);if(s){const a=await e.solveIK({fingers:s});n.left=a,i.left=a.control_commands??null}}if(t.right){const s=Xd(t.right);if(s){const a=await e.solveIK({fingers:s});n.right=a,i.right=a.control_commands??null}}return r!==null&&mm&&typeof performance<"u"&&f2(performance.now()-r),a2.set(n),Ro.set(i),n}catch(s){return Ro.set({left:null,right:null}),console.error("Hand IK solve failed:",s),{left:null,right:null}}}async function g3(){const[e,t]=await Promise.all([d2(),m2()]);return{arm:e,hands:t}}function Wd(e){if(!e||typeof e!="object")return null;const t=e,n=cc(t.S??t.shoulder),i=cc(t.E??t.elbow),r=cc(t.W??t.wrist),s=t.R_T??t.R??t.wristRotation??t.rotation;return!n||!i||!r?null:{shoulder:n,elbow:i,wrist:r,wristRotation:s}}function cc(e){if(!e)return null;if(e instanceof Float32Array||e instanceof Float64Array||Array.isArray(e))return e;if(typeof e=="object"){const t=e,n=["x","y","z"];if(n.every(r=>typeof t[r]=="number"))return n.map(r=>Number(t[r]));const i=Object.values(t).filter(r=>typeof r=="number");if(i.length>=3)return i.slice(0,3).map(Number)}return null}function Xd(e){const t=O=>{if(O)return[O[0],O[1],O[2]]},n={},i=t(e.thumb_mcp),r=t(e.thumb_ip),s=t(e.thumb_tip);i&&r&&s&&(n.thumb={mcp:i,pip:r,tip:s});const a=t(e.index_finger_mcp),h=t(e.index_finger_pip),f=t(e.index_finger_tip);a&&h&&f&&(n.index={mcp:a,pip:h,tip:f});const d=t(e.middle_finger_mcp),m=t(e.middle_finger_pip),g=t(e.middle_finger_tip);d&&m&&g&&(n.middle={mcp:d,pip:m,tip:g});const _=t(e.ring_finger_mcp),M=t(e.ring_finger_pip),E=t(e.ring_finger_tip);_&&M&&E&&(n.ring={mcp:_,pip:M,tip:E});const S=t(e.pinky_mcp),x=t(e.pinky_pip),v=t(e.pinky_tip);return S&&x&&v&&(n.pinky={mcp:S,pip:x,tip:v}),!n.index||!n.pinky?null:n}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qu="179",_3={ROTATE:0,DOLLY:1,PAN:2},v3={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},g2=0,jd=1,_2=2,S0=1,v2=2,Hi=3,Er=0,Gn=1,ji=2,vr=0,Ls=1,qd=2,Yd=3,Kd=4,x2=5,Vr=100,y2=101,M2=102,S2=103,E2=104,w2=200,T2=201,b2=202,A2=203,uh=204,fh=205,R2=206,C2=207,P2=208,L2=209,I2=210,D2=211,U2=212,N2=213,F2=214,dh=0,ph=1,mh=2,js=3,gh=4,_h=5,vh=6,xh=7,tf=0,O2=1,B2=2,$i=0,k2=1,z2=2,G2=3,V2=4,H2=5,W2=6,X2=7,E0=300,qs=301,Ys=302,yh=303,Mh=304,Gl=306,Yr=1e3,Kr=1001,Sh=1002,Jn=1003,j2=1004,aa=1005,Li=1006,hc=1007,$r=1008,xi=1009,w0=1010,T0=1011,Wo=1012,ef=1013,ns=1014,Ii=1015,lo=1016,nf=1017,rf=1018,Xo=1020,b0=35902,A0=1021,R0=1022,hi=1023,jo=1026,qo=1027,sf=1028,of=1029,C0=1030,af=1031,lf=1033,Wa=33776,Xa=33777,ja=33778,qa=33779,Eh=35840,wh=35841,Th=35842,bh=35843,Ah=36196,Rh=37492,Ch=37496,Ph=37808,Lh=37809,Ih=37810,Dh=37811,Uh=37812,Nh=37813,Fh=37814,Oh=37815,Bh=37816,kh=37817,zh=37818,Gh=37819,Vh=37820,Hh=37821,Ya=36492,Wh=36494,Xh=36495,P0=36283,jh=36284,qh=36285,Yh=36286,q2=3200,Y2=3201,cf=0,K2=1,dr="",ai="srgb",Ks="srgb-linear",sl="linear",De="srgb",cs=7680,$d=519,$2=512,Z2=513,J2=514,L0=515,Q2=516,tv=517,ev=518,nv=519,Zd=35044,Jd="300 es",Di=2e3,ol=2001;class rs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qd=1234567;const Do=Math.PI/180,$s=180/Math.PI;function co(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[e&255]+_n[e>>8&255]+_n[e>>16&255]+_n[e>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function me(e,t,n){return Math.max(t,Math.min(n,e))}function hf(e,t){return(e%t+t)%t}function iv(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)}function rv(e,t,n){return e!==t?(n-e)/(t-e):0}function Uo(e,t,n){return(1-n)*e+n*t}function sv(e,t,n,i){return Uo(e,t,1-Math.exp(-n*i))}function ov(e,t=1){return t-Math.abs(hf(e,t*2)-t)}function av(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function lv(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function cv(e,t){return e+Math.floor(Math.random()*(t-e+1))}function hv(e,t){return e+Math.random()*(t-e)}function uv(e){return e*(.5-Math.random())}function fv(e){e!==void 0&&(Qd=e);let t=Qd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dv(e){return e*Do}function pv(e){return e*$s}function mv(e){return(e&e-1)===0&&e!==0}function gv(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function _v(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function vv(e,t,n,i,r){const s=Math.cos,a=Math.sin,h=s(n/2),f=a(n/2),d=s((t+i)/2),m=a((t+i)/2),g=s((t-i)/2),_=a((t-i)/2),M=s((i-t)/2),E=a((i-t)/2);switch(r){case"XYX":e.set(h*m,f*g,f*_,h*d);break;case"YZY":e.set(f*_,h*m,f*g,h*d);break;case"ZXZ":e.set(f*g,f*_,h*m,h*d);break;case"XZX":e.set(h*m,f*E,f*M,h*d);break;case"YXY":e.set(f*M,h*m,f*E,h*d);break;case"ZYZ":e.set(f*E,f*M,h*m,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ts(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function wn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const x3={DEG2RAD:Do,RAD2DEG:$s,generateUUID:co,clamp:me,euclideanModulo:hf,mapLinear:iv,inverseLerp:rv,lerp:Uo,damp:sv,pingpong:ov,smoothstep:av,smootherstep:lv,randInt:cv,randFloat:hv,randFloatSpread:uv,seededRandom:fv,degToRad:dv,radToDeg:pv,isPowerOfTwo:mv,ceilPowerOfTwo:gv,floorPowerOfTwo:_v,setQuaternionFromProperEuler:vv,normalize:wn,denormalize:Ts};class _e{constructor(t=0,n=0){_e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=me(this.x,t.x,n.x),this.y=me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=me(this.x,t,n),this.y=me(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jo{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,a,h){let f=i[r+0],d=i[r+1],m=i[r+2],g=i[r+3];const _=s[a+0],M=s[a+1],E=s[a+2],S=s[a+3];if(h===0){t[n+0]=f,t[n+1]=d,t[n+2]=m,t[n+3]=g;return}if(h===1){t[n+0]=_,t[n+1]=M,t[n+2]=E,t[n+3]=S;return}if(g!==S||f!==_||d!==M||m!==E){let x=1-h;const v=f*_+d*M+m*E+g*S,O=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const V=Math.sqrt(U),k=Math.atan2(V,v*O);x=Math.sin(x*k)/V,h=Math.sin(h*k)/V}const C=h*O;if(f=f*x+_*C,d=d*x+M*C,m=m*x+E*C,g=g*x+S*C,x===1-h){const V=1/Math.sqrt(f*f+d*d+m*m+g*g);f*=V,d*=V,m*=V,g*=V}}t[n]=f,t[n+1]=d,t[n+2]=m,t[n+3]=g}static multiplyQuaternionsFlat(t,n,i,r,s,a){const h=i[r],f=i[r+1],d=i[r+2],m=i[r+3],g=s[a],_=s[a+1],M=s[a+2],E=s[a+3];return t[n]=h*E+m*g+f*M-d*_,t[n+1]=f*E+m*_+d*g-h*M,t[n+2]=d*E+m*M+h*_-f*g,t[n+3]=m*E-h*g-f*_-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,a=t._order,h=Math.cos,f=Math.sin,d=h(i/2),m=h(r/2),g=h(s/2),_=f(i/2),M=f(r/2),E=f(s/2);switch(a){case"XYZ":this._x=_*m*g+d*M*E,this._y=d*M*g-_*m*E,this._z=d*m*E+_*M*g,this._w=d*m*g-_*M*E;break;case"YXZ":this._x=_*m*g+d*M*E,this._y=d*M*g-_*m*E,this._z=d*m*E-_*M*g,this._w=d*m*g+_*M*E;break;case"ZXY":this._x=_*m*g-d*M*E,this._y=d*M*g+_*m*E,this._z=d*m*E+_*M*g,this._w=d*m*g-_*M*E;break;case"ZYX":this._x=_*m*g-d*M*E,this._y=d*M*g+_*m*E,this._z=d*m*E-_*M*g,this._w=d*m*g+_*M*E;break;case"YZX":this._x=_*m*g+d*M*E,this._y=d*M*g+_*m*E,this._z=d*m*E-_*M*g,this._w=d*m*g-_*M*E;break;case"XZY":this._x=_*m*g-d*M*E,this._y=d*M*g-_*m*E,this._z=d*m*E+_*M*g,this._w=d*m*g+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],a=n[1],h=n[5],f=n[9],d=n[2],m=n[6],g=n[10],_=i+h+g;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(m-f)*M,this._y=(s-d)*M,this._z=(a-r)*M}else if(i>h&&i>g){const M=2*Math.sqrt(1+i-h-g);this._w=(m-f)/M,this._x=.25*M,this._y=(r+a)/M,this._z=(s+d)/M}else if(h>g){const M=2*Math.sqrt(1+h-i-g);this._w=(s-d)/M,this._x=(r+a)/M,this._y=.25*M,this._z=(f+m)/M}else{const M=2*Math.sqrt(1+g-i-h);this._w=(a-r)/M,this._x=(s+d)/M,this._y=(f+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,a=t._w,h=n._x,f=n._y,d=n._z,m=n._w;return this._x=i*m+a*h+r*d-s*f,this._y=r*m+a*f+s*h-i*d,this._z=s*m+a*d+i*f-r*h,this._w=a*m-i*h-r*f-s*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let h=a*t._w+i*t._x+r*t._y+s*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const f=1-h*h;if(f<=Number.EPSILON){const M=1-n;return this._w=M*a+n*this._w,this._x=M*i+n*this._x,this._y=M*r+n*this._y,this._z=M*s+n*this._z,this.normalize(),this}const d=Math.sqrt(f),m=Math.atan2(d,h),g=Math.sin((1-n)*m)/d,_=Math.sin(n*m)/d;return this._w=a*g+this._w*_,this._x=i*g+this._x*_,this._y=r*g+this._y*_,this._z=s*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(tp.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(tp.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,a=t.y,h=t.z,f=t.w,d=2*(a*r-h*i),m=2*(h*n-s*r),g=2*(s*i-a*n);return this.x=n+f*d+a*g-h*m,this.y=i+f*m+h*d-s*g,this.z=r+f*g+s*m-a*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=me(this.x,t.x,n.x),this.y=me(this.y,t.y,n.y),this.z=me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=me(this.x,t,n),this.y=me(this.y,t,n),this.z=me(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,a=n.x,h=n.y,f=n.z;return this.x=r*f-s*h,this.y=s*a-i*f,this.z=i*h-r*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new Z,tp=new Jo;class fe{constructor(t,n,i,r,s,a,h,f,d){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,h,f,d)}set(t,n,i,r,s,a,h,f,d){const m=this.elements;return m[0]=t,m[1]=r,m[2]=h,m[3]=n,m[4]=s,m[5]=f,m[6]=i,m[7]=a,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],h=i[3],f=i[6],d=i[1],m=i[4],g=i[7],_=i[2],M=i[5],E=i[8],S=r[0],x=r[3],v=r[6],O=r[1],U=r[4],C=r[7],V=r[2],k=r[5],j=r[8];return s[0]=a*S+h*O+f*V,s[3]=a*x+h*U+f*k,s[6]=a*v+h*C+f*j,s[1]=d*S+m*O+g*V,s[4]=d*x+m*U+g*k,s[7]=d*v+m*C+g*j,s[2]=_*S+M*O+E*V,s[5]=_*x+M*U+E*k,s[8]=_*v+M*C+E*j,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],h=t[5],f=t[6],d=t[7],m=t[8];return n*a*m-n*h*d-i*s*m+i*h*f+r*s*d-r*a*f}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],h=t[5],f=t[6],d=t[7],m=t[8],g=m*a-h*d,_=h*f-m*s,M=d*s-a*f,E=n*g+i*_+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/E;return t[0]=g*S,t[1]=(r*d-m*i)*S,t[2]=(h*i-r*a)*S,t[3]=_*S,t[4]=(m*n-r*f)*S,t[5]=(r*s-h*n)*S,t[6]=M*S,t[7]=(i*f-d*n)*S,t[8]=(a*n-i*s)*S,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,a,h){const f=Math.cos(s),d=Math.sin(s);return this.set(i*f,i*d,-i*(f*a+d*h)+a+t,-r*d,r*f,-r*(-d*a+f*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(fc.makeScale(t,n)),this}rotate(t){return this.premultiply(fc.makeRotation(-t)),this}translate(t,n){return this.premultiply(fc.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new fe;function I0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function al(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function xv(){const e=al("canvas");return e.style.display="block",e}const ep={};function Is(e){e in ep||(ep[e]=!0,console.warn(e))}function yv(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const np=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ip=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mv(){const e={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===De&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===De&&(r.r=Ds(r.r),r.g=Ds(r.g),r.b=Ds(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dr?sl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Is("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Is("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ks]:{primaries:t,whitePoint:i,transfer:sl,toXYZ:np,fromXYZ:ip,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:i,transfer:De,toXYZ:np,fromXYZ:ip,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),e}const we=Mv();function Zi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ds(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let hs;class Sv{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hs===void 0&&(hs=al("canvas")),hs.width=t.width,hs.height=t.height;const r=hs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=hs}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=al("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Zi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zi(n[i]/255)*255):n[i]=Zi(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ev=0;class uf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=co(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,h=r.length;a<h;a++)r[a].isDataTexture?s.push(dc(r[a].image)):s.push(dc(r[a]))}else s=dc(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function dc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Sv.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wv=0;const pc=new Z;class Mn extends rs{constructor(t=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,i=Kr,r=Kr,s=Li,a=$r,h=hi,f=xi,d=Mn.DEFAULT_ANISOTROPY,m=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=co(),this.name="",this.source=new uf(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=f,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==E0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yr:t.x=t.x-Math.floor(t.x);break;case Kr:t.x=t.x<0?0:1;break;case Sh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yr:t.y=t.y-Math.floor(t.y);break;case Kr:t.y=t.y<0?0:1;break;case Sh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=E0;Mn.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,n=0,i=0,r=1){Xe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const f=t.elements,d=f[0],m=f[4],g=f[8],_=f[1],M=f[5],E=f[9],S=f[2],x=f[6],v=f[10];if(Math.abs(m-_)<.01&&Math.abs(g-S)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+S)<.1&&Math.abs(E+x)<.1&&Math.abs(d+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,C=(M+1)/2,V=(v+1)/2,k=(m+_)/4,j=(g+S)/4,$=(E+x)/4;return U>C&&U>V?U<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(U),r=k/i,s=j/i):C>V?C<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),i=k/r,s=$/r):V<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(V),i=j/s,r=$/s),this.set(i,r,s,n),this}let O=Math.sqrt((x-E)*(x-E)+(g-S)*(g-S)+(_-m)*(_-m));return Math.abs(O)<.001&&(O=1),this.x=(x-E)/O,this.y=(g-S)/O,this.z=(_-m)/O,this.w=Math.acos((d+M+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=me(this.x,t.x,n.x),this.y=me(this.y,t.y,n.y),this.z=me(this.z,t.z,n.z),this.w=me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=me(this.x,t,n),this.y=me(this.y,t,n),this.z=me(this.z,t,n),this.w=me(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tv extends rs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Xe(0,0,t,n),this.scissorTest=!1,this.viewport=new Xe(0,0,t,n);const r={width:t,height:n,depth:i.depth},s=new Mn(r);this.textures=[];const a=i.count;for(let h=0;h<a;h++)this.textures[h]=s.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new uf(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends Tv{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class D0 extends Mn{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bv extends Mn{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(t=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(mi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(mi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=mi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,h=s.count;a<h;a++)t.isMesh===!0?t.getVertexPosition(a,mi):mi.fromBufferAttribute(s,a),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),la.copy(i.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xo),ca.subVectors(this.max,xo),us.subVectors(t.a,xo),fs.subVectors(t.b,xo),ds.subVectors(t.c,xo),ir.subVectors(fs,us),rr.subVectors(ds,fs),Ur.subVectors(us,ds);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Ur.z,Ur.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Ur.z,0,-Ur.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Ur.y,Ur.x,0];return!mc(n,us,fs,ds,ca)||(n=[1,0,0,0,1,0,0,0,1],!mc(n,us,fs,ds,ca))?!1:(ha.crossVectors(ir,rr),n=[ha.x,ha.y,ha.z],mc(n,us,fs,ds,ca))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],mi=new Z,la=new ss,us=new Z,fs=new Z,ds=new Z,ir=new Z,rr=new Z,Ur=new Z,xo=new Z,ca=new Z,ha=new Z,Nr=new Z;function mc(e,t,n,i,r){for(let s=0,a=e.length-3;s<=a;s+=3){Nr.fromArray(e,s);const h=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),f=t.dot(Nr),d=n.dot(Nr),m=i.dot(Nr);if(Math.max(-Math.max(f,d,m),Math.min(f,d,m))>h)return!1}return!0}const Av=new ss,yo=new Z,gc=new Z;class ho{constructor(t=new Z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Av.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yo.subVectors(t,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yo.copy(t.center).add(gc)),this.expandByPoint(yo.copy(t.center).sub(gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ki=new Z,_c=new Z,ua=new Z,sr=new Z,vc=new Z,fa=new Z,xc=new Z;class ff{constructor(t=new Z,n=new Z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ki.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){_c.copy(t).add(n).multiplyScalar(.5),ua.copy(n).sub(t).normalize(),sr.copy(this.origin).sub(_c);const s=t.distanceTo(n)*.5,a=-this.direction.dot(ua),h=sr.dot(this.direction),f=-sr.dot(ua),d=sr.lengthSq(),m=Math.abs(1-a*a);let g,_,M,E;if(m>0)if(g=a*f-h,_=a*h-f,E=s*m,g>=0)if(_>=-E)if(_<=E){const S=1/m;g*=S,_*=S,M=g*(g+a*_+2*h)+_*(a*g+_+2*f)+d}else _=s,g=Math.max(0,-(a*_+h)),M=-g*g+_*(_+2*f)+d;else _=-s,g=Math.max(0,-(a*_+h)),M=-g*g+_*(_+2*f)+d;else _<=-E?(g=Math.max(0,-(-a*s+h)),_=g>0?-s:Math.min(Math.max(-s,-f),s),M=-g*g+_*(_+2*f)+d):_<=E?(g=0,_=Math.min(Math.max(-s,-f),s),M=_*(_+2*f)+d):(g=Math.max(0,-(a*s+h)),_=g>0?s:Math.min(Math.max(-s,-f),s),M=-g*g+_*(_+2*f)+d);else _=a>0?-s:s,g=Math.max(0,-(a*_+h)),M=-g*g+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(_c).addScaledVector(ua,_),M}intersectSphere(t,n){ki.subVectors(t.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),h=i-a,f=i+a;return f<0?null:h<0?this.at(f,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,a,h,f;const d=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(i=(t.min.x-_.x)*d,r=(t.max.x-_.x)*d):(i=(t.max.x-_.x)*d,r=(t.min.x-_.x)*d),m>=0?(s=(t.min.y-_.y)*m,a=(t.max.y-_.y)*m):(s=(t.max.y-_.y)*m,a=(t.min.y-_.y)*m),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),g>=0?(h=(t.min.z-_.z)*g,f=(t.max.z-_.z)*g):(h=(t.max.z-_.z)*g,f=(t.min.z-_.z)*g),i>f||h>r)||((h>i||i!==i)&&(i=h),(f<r||r!==r)&&(r=f),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,n,i,r,s){vc.subVectors(n,t),fa.subVectors(i,t),xc.crossVectors(vc,fa);let a=this.direction.dot(xc),h;if(a>0){if(r)return null;h=1}else if(a<0)h=-1,a=-a;else return null;sr.subVectors(this.origin,t);const f=h*this.direction.dot(fa.crossVectors(sr,fa));if(f<0)return null;const d=h*this.direction.dot(vc.cross(sr));if(d<0||f+d>a)return null;const m=-h*sr.dot(xc);return m<0?null:this.at(m/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(t,n,i,r,s,a,h,f,d,m,g,_,M,E,S,x){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,h,f,d,m,g,_,M,E,S,x)}set(t,n,i,r,s,a,h,f,d,m,g,_,M,E,S,x){const v=this.elements;return v[0]=t,v[4]=n,v[8]=i,v[12]=r,v[1]=s,v[5]=a,v[9]=h,v[13]=f,v[2]=d,v[6]=m,v[10]=g,v[14]=_,v[3]=M,v[7]=E,v[11]=S,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/ps.setFromMatrixColumn(t,0).length(),s=1/ps.setFromMatrixColumn(t,1).length(),a=1/ps.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),h=Math.sin(i),f=Math.cos(r),d=Math.sin(r),m=Math.cos(s),g=Math.sin(s);if(t.order==="XYZ"){const _=a*m,M=a*g,E=h*m,S=h*g;n[0]=f*m,n[4]=-f*g,n[8]=d,n[1]=M+E*d,n[5]=_-S*d,n[9]=-h*f,n[2]=S-_*d,n[6]=E+M*d,n[10]=a*f}else if(t.order==="YXZ"){const _=f*m,M=f*g,E=d*m,S=d*g;n[0]=_+S*h,n[4]=E*h-M,n[8]=a*d,n[1]=a*g,n[5]=a*m,n[9]=-h,n[2]=M*h-E,n[6]=S+_*h,n[10]=a*f}else if(t.order==="ZXY"){const _=f*m,M=f*g,E=d*m,S=d*g;n[0]=_-S*h,n[4]=-a*g,n[8]=E+M*h,n[1]=M+E*h,n[5]=a*m,n[9]=S-_*h,n[2]=-a*d,n[6]=h,n[10]=a*f}else if(t.order==="ZYX"){const _=a*m,M=a*g,E=h*m,S=h*g;n[0]=f*m,n[4]=E*d-M,n[8]=_*d+S,n[1]=f*g,n[5]=S*d+_,n[9]=M*d-E,n[2]=-d,n[6]=h*f,n[10]=a*f}else if(t.order==="YZX"){const _=a*f,M=a*d,E=h*f,S=h*d;n[0]=f*m,n[4]=S-_*g,n[8]=E*g+M,n[1]=g,n[5]=a*m,n[9]=-h*m,n[2]=-d*m,n[6]=M*g+E,n[10]=_-S*g}else if(t.order==="XZY"){const _=a*f,M=a*d,E=h*f,S=h*d;n[0]=f*m,n[4]=-g,n[8]=d*m,n[1]=_*g+S,n[5]=a*m,n[9]=M*g-E,n[2]=E*g-M,n[6]=h*m,n[10]=S*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rv,t,Cv)}lookAt(t,n,i){const r=this.elements;return Yn.subVectors(t,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),or.crossVectors(i,Yn),or.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),or.crossVectors(i,Yn)),or.normalize(),da.crossVectors(Yn,or),r[0]=or.x,r[4]=da.x,r[8]=Yn.x,r[1]=or.y,r[5]=da.y,r[9]=Yn.y,r[2]=or.z,r[6]=da.z,r[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],h=i[4],f=i[8],d=i[12],m=i[1],g=i[5],_=i[9],M=i[13],E=i[2],S=i[6],x=i[10],v=i[14],O=i[3],U=i[7],C=i[11],V=i[15],k=r[0],j=r[4],$=r[8],P=r[12],I=r[1],G=r[5],et=r[9],tt=r[13],nt=r[2],ht=r[6],ot=r[10],xt=r[14],rt=r[3],At=r[7],Dt=r[11],Zt=r[15];return s[0]=a*k+h*I+f*nt+d*rt,s[4]=a*j+h*G+f*ht+d*At,s[8]=a*$+h*et+f*ot+d*Dt,s[12]=a*P+h*tt+f*xt+d*Zt,s[1]=m*k+g*I+_*nt+M*rt,s[5]=m*j+g*G+_*ht+M*At,s[9]=m*$+g*et+_*ot+M*Dt,s[13]=m*P+g*tt+_*xt+M*Zt,s[2]=E*k+S*I+x*nt+v*rt,s[6]=E*j+S*G+x*ht+v*At,s[10]=E*$+S*et+x*ot+v*Dt,s[14]=E*P+S*tt+x*xt+v*Zt,s[3]=O*k+U*I+C*nt+V*rt,s[7]=O*j+U*G+C*ht+V*At,s[11]=O*$+U*et+C*ot+V*Dt,s[15]=O*P+U*tt+C*xt+V*Zt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],a=t[1],h=t[5],f=t[9],d=t[13],m=t[2],g=t[6],_=t[10],M=t[14],E=t[3],S=t[7],x=t[11],v=t[15];return E*(+s*f*g-r*d*g-s*h*_+i*d*_+r*h*M-i*f*M)+S*(+n*f*M-n*d*_+s*a*_-r*a*M+r*d*m-s*f*m)+x*(+n*d*g-n*h*M-s*a*g+i*a*M+s*h*m-i*d*m)+v*(-r*h*m-n*f*g+n*h*_+r*a*g-i*a*_+i*f*m)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],h=t[5],f=t[6],d=t[7],m=t[8],g=t[9],_=t[10],M=t[11],E=t[12],S=t[13],x=t[14],v=t[15],O=g*x*d-S*_*d+S*f*M-h*x*M-g*f*v+h*_*v,U=E*_*d-m*x*d-E*f*M+a*x*M+m*f*v-a*_*v,C=m*S*d-E*g*d+E*h*M-a*S*M-m*h*v+a*g*v,V=E*g*f-m*S*f-E*h*_+a*S*_+m*h*x-a*g*x,k=n*O+i*U+r*C+s*V;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/k;return t[0]=O*j,t[1]=(S*_*s-g*x*s-S*r*M+i*x*M+g*r*v-i*_*v)*j,t[2]=(h*x*s-S*f*s+S*r*d-i*x*d-h*r*v+i*f*v)*j,t[3]=(g*f*s-h*_*s-g*r*d+i*_*d+h*r*M-i*f*M)*j,t[4]=U*j,t[5]=(m*x*s-E*_*s+E*r*M-n*x*M-m*r*v+n*_*v)*j,t[6]=(E*f*s-a*x*s-E*r*d+n*x*d+a*r*v-n*f*v)*j,t[7]=(a*_*s-m*f*s+m*r*d-n*_*d-a*r*M+n*f*M)*j,t[8]=C*j,t[9]=(E*g*s-m*S*s-E*i*M+n*S*M+m*i*v-n*g*v)*j,t[10]=(a*S*s-E*h*s+E*i*d-n*S*d-a*i*v+n*h*v)*j,t[11]=(m*h*s-a*g*s-m*i*d+n*g*d+a*i*M-n*h*M)*j,t[12]=V*j,t[13]=(m*S*r-E*g*r+E*i*_-n*S*_-m*i*x+n*g*x)*j,t[14]=(E*h*r-a*S*r-E*i*f+n*S*f+a*i*x-n*h*x)*j,t[15]=(a*g*r-m*h*r+m*i*f-n*g*f-a*i*_+n*h*_)*j,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=t.x,h=t.y,f=t.z,d=s*a,m=s*h;return this.set(d*a+i,d*h-r*f,d*f+r*h,0,d*h+r*f,m*h+i,m*f-r*a,0,d*f-r*h,m*f+r*a,s*f*f+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,a=n._y,h=n._z,f=n._w,d=s+s,m=a+a,g=h+h,_=s*d,M=s*m,E=s*g,S=a*m,x=a*g,v=h*g,O=f*d,U=f*m,C=f*g,V=i.x,k=i.y,j=i.z;return r[0]=(1-(S+v))*V,r[1]=(M+C)*V,r[2]=(E-U)*V,r[3]=0,r[4]=(M-C)*k,r[5]=(1-(_+v))*k,r[6]=(x+O)*k,r[7]=0,r[8]=(E+U)*j,r[9]=(x-O)*j,r[10]=(1-(_+S))*j,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const a=ps.set(r[4],r[5],r[6]).length(),h=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],gi.copy(this);const d=1/s,m=1/a,g=1/h;return gi.elements[0]*=d,gi.elements[1]*=d,gi.elements[2]*=d,gi.elements[4]*=m,gi.elements[5]*=m,gi.elements[6]*=m,gi.elements[8]*=g,gi.elements[9]*=g,gi.elements[10]*=g,n.setFromRotationMatrix(gi),i.x=s,i.y=a,i.z=h,this}makePerspective(t,n,i,r,s,a,h=Di,f=!1){const d=this.elements,m=2*s/(n-t),g=2*s/(i-r),_=(n+t)/(n-t),M=(i+r)/(i-r);let E,S;if(f)E=s/(a-s),S=a*s/(a-s);else if(h===Di)E=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(h===ol)E=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=m,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=S,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,i,r,s,a,h=Di,f=!1){const d=this.elements,m=2/(n-t),g=2/(i-r),_=-(n+t)/(n-t),M=-(i+r)/(i-r);let E,S;if(f)E=1/(a-s),S=a/(a-s);else if(h===Di)E=-2/(a-s),S=-(a+s)/(a-s);else if(h===ol)E=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=m,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=g,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=E,d[14]=S,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const ps=new Z,gi=new Ue,Rv=new Z(0,0,0),Cv=new Z(1,1,1),or=new Z,da=new Z,Yn=new Z,rp=new Ue,sp=new Jo;class yi{constructor(t=0,n=0,i=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],h=r[8],f=r[1],d=r[5],m=r[9],g=r[2],_=r[6],M=r[10];switch(n){case"XYZ":this._y=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-me(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(f,s));break;case"ZYX":this._y=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(f,s)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,s)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return rp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rp,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return sp.setFromEuler(this),this.setFromQuaternion(sp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class df{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pv=0;const op=new Z,ms=new Jo,zi=new Ue,pa=new Z,Mo=new Z,Lv=new Z,Iv=new Jo,ap=new Z(1,0,0),lp=new Z(0,1,0),cp=new Z(0,0,1),hp={type:"added"},Dv={type:"removed"},gs={type:"childadded",child:null},yc={type:"childremoved",child:null};class tn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new Z,n=new yi,i=new Jo,r=new Z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new fe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ms.setFromAxisAngle(t,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,n){return ms.setFromAxisAngle(t,n),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(ap,t)}rotateY(t){return this.rotateOnAxis(lp,t)}rotateZ(t){return this.rotateOnAxis(cp,t)}translateOnAxis(t,n){return op.copy(t).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ap,t)}translateY(t){return this.translateOnAxis(lp,t)}translateZ(t){return this.translateOnAxis(cp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?pa.copy(t):pa.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Mo,pa,this.up):zi.lookAt(pa,Mo,this.up),this.quaternion.setFromRotationMatrix(zi),r&&(zi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(zi),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hp),gs.child=t,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Dv),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hp),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,t,Lv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,Iv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let d=0,m=f.length;d<m;d++){const g=f[d];s(t.shapes,g)}else s(t.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,d=this.material.length;f<d;f++)h.push(s(t.materials,this.material[f]));r.material=h}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];r.animations.push(s(t.animations,f))}}if(n){const h=a(t.geometries),f=a(t.materials),d=a(t.textures),m=a(t.images),g=a(t.shapes),_=a(t.skeletons),M=a(t.animations),E=a(t.nodes);h.length>0&&(i.geometries=h),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),M.length>0&&(i.animations=M),E.length>0&&(i.nodes=E)}return i.object=r,i;function a(h){const f=[];for(const d in h){const m=h[d];delete m.metadata,f.push(m)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new Z(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new Z,Gi=new Z,Mc=new Z,Vi=new Z,_s=new Z,vs=new Z,up=new Z,Sc=new Z,Ec=new Z,wc=new Z,Tc=new Xe,bc=new Xe,Ac=new Xe;class vi{constructor(t=new Z,n=new Z,i=new Z){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),_i.subVectors(t,n),r.cross(_i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){_i.subVectors(r,n),Gi.subVectors(i,n),Mc.subVectors(t,n);const a=_i.dot(_i),h=_i.dot(Gi),f=_i.dot(Mc),d=Gi.dot(Gi),m=Gi.dot(Mc),g=a*d-h*h;if(g===0)return s.set(0,0,0),null;const _=1/g,M=(d*f-h*m)*_,E=(a*m-h*f)*_;return s.set(1-M-E,E,M)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,n,i,r,s,a,h,f){return this.getBarycoord(t,n,i,r,Vi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(s,Vi.x),f.addScaledVector(a,Vi.y),f.addScaledVector(h,Vi.z),f)}static getInterpolatedAttribute(t,n,i,r,s,a){return Tc.setScalar(0),bc.setScalar(0),Ac.setScalar(0),Tc.fromBufferAttribute(t,n),bc.fromBufferAttribute(t,i),Ac.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Tc,s.x),a.addScaledVector(bc,s.y),a.addScaledVector(Ac,s.z),a}static isFrontFacing(t,n,i,r){return _i.subVectors(i,n),Gi.subVectors(t,n),_i.cross(Gi).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),_i.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return vi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return vi.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let a,h;_s.subVectors(r,i),vs.subVectors(s,i),Sc.subVectors(t,i);const f=_s.dot(Sc),d=vs.dot(Sc);if(f<=0&&d<=0)return n.copy(i);Ec.subVectors(t,r);const m=_s.dot(Ec),g=vs.dot(Ec);if(m>=0&&g<=m)return n.copy(r);const _=f*g-m*d;if(_<=0&&f>=0&&m<=0)return a=f/(f-m),n.copy(i).addScaledVector(_s,a);wc.subVectors(t,s);const M=_s.dot(wc),E=vs.dot(wc);if(E>=0&&M<=E)return n.copy(s);const S=M*d-f*E;if(S<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(i).addScaledVector(vs,h);const x=m*E-M*g;if(x<=0&&g-m>=0&&M-E>=0)return up.subVectors(s,r),h=(g-m)/(g-m+(M-E)),n.copy(r).addScaledVector(up,h);const v=1/(x+S+_);return a=S*v,h=_*v,n.copy(i).addScaledVector(_s,a).addScaledVector(vs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Rc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class se{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,n),this}setRGB(t,n,i,r=we.workingColorSpace){return this.r=t,this.g=n,this.b=i,we.colorSpaceToWorking(this,r),this}setHSL(t,n,i,r=we.workingColorSpace){if(t=hf(t,1),n=me(n,0,1),i=me(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Rc(a,s,t+1/3),this.g=Rc(a,s,t),this.b=Rc(a,s,t-1/3)}return we.colorSpaceToWorking(this,r),this}setStyle(t,n=ai){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],h=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ai){const i=U0[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return we.workingToColorSpace(vn.copy(this),t),Math.round(me(vn.r*255,0,255))*65536+Math.round(me(vn.g*255,0,255))*256+Math.round(me(vn.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.workingToColorSpace(vn.copy(this),n);const i=vn.r,r=vn.g,s=vn.b,a=Math.max(i,r,s),h=Math.min(i,r,s);let f,d;const m=(h+a)/2;if(h===a)f=0,d=0;else{const g=a-h;switch(d=m<=.5?g/(a+h):g/(2-a-h),a){case i:f=(r-s)/g+(r<s?6:0);break;case r:f=(s-i)/g+2;break;case s:f=(i-r)/g+4;break}f/=6}return t.h=f,t.s=d,t.l=m,t}getRGB(t,n=we.workingColorSpace){return we.workingToColorSpace(vn.copy(this),n),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=ai){we.workingToColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,r=vn.b;return t!==ai?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(ar),this.setHSL(ar.h+t,ar.s+n,ar.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ar),t.getHSL(ma);const i=Uo(ar.h,ma.h,n),r=Uo(ar.s,ma.s,n),s=Uo(ar.l,ma.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new se;se.NAMES=U0;let Uv=0;class os extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=co(),this.name="",this.type="Material",this.blending=Ls,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uh&&(i.blendSrc=this.blendSrc),this.blendDst!==fh&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$d&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const h in s){const f=s[h];delete f.metadata,a.push(f)}return a}if(n){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pf extends os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new Z,ga=new _e;let Nv=0;class Vn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nv++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Zd,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ga.fromBufferAttribute(this,n),ga.applyMatrix3(t),this.setXY(n,ga.x,ga.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ts(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ts(n,this.array)),n}setX(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ts(n,this.array)),n}setY(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ts(n,this.array)),n}setZ(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ts(n,this.array)),n}setW(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),r=wn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),r=wn(r,this.array),s=wn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zd&&(t.usage=this.usage),t}}class N0 extends Vn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class F0 extends Vn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class en extends Vn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let Fv=0;const oi=new Ue,Cc=new tn,xs=new Z,Kn=new ss,So=new ss,dn=new Z;class Xn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(I0(t)?F0:N0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new fe().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,n,i){return oi.makeTranslation(t,n,i),this.applyMatrix4(oi),this}scale(t,n,i){return oi.makeScale(t,n,i),this.applyMatrix4(oi),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(i,3))}else{const i=Math.min(t.length,n.count);for(let r=0;r<i;r++){const s=t[r];n.setXYZ(r,s.x,s.y,s.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),n)for(let s=0,a=n.length;s<a;s++){const h=n[s];So.setFromBufferAttribute(h),this.morphTargetsRelative?(dn.addVectors(Kn.min,So.min),Kn.expandByPoint(dn),dn.addVectors(Kn.max,So.max),Kn.expandByPoint(dn)):(Kn.expandByPoint(So.min),Kn.expandByPoint(So.max))}Kn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)dn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(dn));if(n)for(let s=0,a=n.length;s<a;s++){const h=n[s],f=this.morphTargetsRelative;for(let d=0,m=h.count;d<m;d++)dn.fromBufferAttribute(h,d),f&&(xs.fromBufferAttribute(t,d),dn.add(xs)),r=Math.max(r,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),h=[],f=[];for(let $=0;$<i.count;$++)h[$]=new Z,f[$]=new Z;const d=new Z,m=new Z,g=new Z,_=new _e,M=new _e,E=new _e,S=new Z,x=new Z;function v($,P,I){d.fromBufferAttribute(i,$),m.fromBufferAttribute(i,P),g.fromBufferAttribute(i,I),_.fromBufferAttribute(s,$),M.fromBufferAttribute(s,P),E.fromBufferAttribute(s,I),m.sub(d),g.sub(d),M.sub(_),E.sub(_);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(S.copy(m).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(G),x.copy(g).multiplyScalar(M.x).addScaledVector(m,-E.x).multiplyScalar(G),h[$].add(S),h[P].add(S),h[I].add(S),f[$].add(x),f[P].add(x),f[I].add(x))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let $=0,P=O.length;$<P;++$){const I=O[$],G=I.start,et=I.count;for(let tt=G,nt=G+et;tt<nt;tt+=3)v(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const U=new Z,C=new Z,V=new Z,k=new Z;function j($){V.fromBufferAttribute(r,$),k.copy(V);const P=h[$];U.copy(P),U.sub(V.multiplyScalar(V.dot(P))).normalize(),C.crossVectors(k,P);const G=C.dot(f[$])<0?-1:1;a.setXYZW($,U.x,U.y,U.z,G)}for(let $=0,P=O.length;$<P;++$){const I=O[$],G=I.start,et=I.count;for(let tt=G,nt=G+et;tt<nt;tt+=3)j(t.getX(tt+0)),j(t.getX(tt+1)),j(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let _=0,M=i.count;_<M;_++)i.setXYZ(_,0,0,0);const r=new Z,s=new Z,a=new Z,h=new Z,f=new Z,d=new Z,m=new Z,g=new Z;if(t)for(let _=0,M=t.count;_<M;_+=3){const E=t.getX(_+0),S=t.getX(_+1),x=t.getX(_+2);r.fromBufferAttribute(n,E),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,x),m.subVectors(a,s),g.subVectors(r,s),m.cross(g),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),d.fromBufferAttribute(i,x),h.add(m),f.add(m),d.add(m),i.setXYZ(E,h.x,h.y,h.z),i.setXYZ(S,f.x,f.y,f.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let _=0,M=n.count;_<M;_+=3)r.fromBufferAttribute(n,_+0),s.fromBufferAttribute(n,_+1),a.fromBufferAttribute(n,_+2),m.subVectors(a,s),g.subVectors(r,s),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)dn.fromBufferAttribute(t,n),dn.normalize(),t.setXYZ(n,dn.x,dn.y,dn.z)}toNonIndexed(){function t(h,f){const d=h.array,m=h.itemSize,g=h.normalized,_=new d.constructor(f.length*m);let M=0,E=0;for(let S=0,x=f.length;S<x;S++){h.isInterleavedBufferAttribute?M=f[S]*h.data.stride+h.offset:M=f[S]*m;for(let v=0;v<m;v++)_[E++]=d[M++]}return new Vn(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xn,i=this.index.array,r=this.attributes;for(const h in r){const f=r[h],d=t(f,i);n.setAttribute(h,d)}const s=this.morphAttributes;for(const h in s){const f=[],d=s[h];for(let m=0,g=d.length;m<g;m++){const _=d[m],M=t(_,i);f.push(M)}n.morphAttributes[h]=f}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let h=0,f=a.length;h<f;h++){const d=a[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const f in i){const d=i[f];t.data.attributes[f]=d.toJSON(t.data)}const r={};let s=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],m=[];for(let g=0,_=d.length;g<_;g++){const M=d[g];m.push(M.toJSON(t.data))}m.length>0&&(r[f]=m,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const d in r){const m=r[d];this.setAttribute(d,m.clone(n))}const s=t.morphAttributes;for(const d in s){const m=[],g=s[d];for(let _=0,M=g.length;_<M;_++)m.push(g[_].clone(n));this.morphAttributes[d]=m}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let d=0,m=a.length;d<m;d++){const g=a[d];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fp=new Ue,Fr=new ff,_a=new ho,dp=new Z,va=new Z,xa=new Z,ya=new Z,Pc=new Z,Ma=new Z,pp=new Z,Sa=new Z;class Cn extends tn{constructor(t=new Xn,n=new pf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const h=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const h=this.morphTargetInfluences;if(s&&h){Ma.set(0,0,0);for(let f=0,d=s.length;f<d;f++){const m=h[f],g=s[f];m!==0&&(Pc.fromBufferAttribute(g,t),a?Ma.addScaledVector(Pc,m):Ma.addScaledVector(Pc.sub(n),m))}n.add(Ma)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),Fr.copy(t.ray).recast(t.near),!(_a.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(_a,dp)===null||Fr.origin.distanceToSquared(dp)>(t.far-t.near)**2))&&(fp.copy(s).invert(),Fr.copy(t.ray).applyMatrix4(fp),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Fr)))}_computeIntersections(t,n,i){let r;const s=this.geometry,a=this.material,h=s.index,f=s.attributes.position,d=s.attributes.uv,m=s.attributes.uv1,g=s.attributes.normal,_=s.groups,M=s.drawRange;if(h!==null)if(Array.isArray(a))for(let E=0,S=_.length;E<S;E++){const x=_[E],v=a[x.materialIndex],O=Math.max(x.start,M.start),U=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let C=O,V=U;C<V;C+=3){const k=h.getX(C),j=h.getX(C+1),$=h.getX(C+2);r=Ea(this,v,t,i,d,m,g,k,j,$),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const E=Math.max(0,M.start),S=Math.min(h.count,M.start+M.count);for(let x=E,v=S;x<v;x+=3){const O=h.getX(x),U=h.getX(x+1),C=h.getX(x+2);r=Ea(this,a,t,i,d,m,g,O,U,C),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(f!==void 0)if(Array.isArray(a))for(let E=0,S=_.length;E<S;E++){const x=_[E],v=a[x.materialIndex],O=Math.max(x.start,M.start),U=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let C=O,V=U;C<V;C+=3){const k=C,j=C+1,$=C+2;r=Ea(this,v,t,i,d,m,g,k,j,$),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const E=Math.max(0,M.start),S=Math.min(f.count,M.start+M.count);for(let x=E,v=S;x<v;x+=3){const O=x,U=x+1,C=x+2;r=Ea(this,a,t,i,d,m,g,O,U,C),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function Ov(e,t,n,i,r,s,a,h){let f;if(t.side===Gn?f=i.intersectTriangle(a,s,r,!0,h):f=i.intersectTriangle(r,s,a,t.side===Er,h),f===null)return null;Sa.copy(h),Sa.applyMatrix4(e.matrixWorld);const d=n.ray.origin.distanceTo(Sa);return d<n.near||d>n.far?null:{distance:d,point:Sa.clone(),object:e}}function Ea(e,t,n,i,r,s,a,h,f,d){e.getVertexPosition(h,va),e.getVertexPosition(f,xa),e.getVertexPosition(d,ya);const m=Ov(e,t,n,i,va,xa,ya,pp);if(m){const g=new Z;vi.getBarycoord(pp,va,xa,ya,g),r&&(m.uv=vi.getInterpolatedAttribute(r,h,f,d,g,new _e)),s&&(m.uv1=vi.getInterpolatedAttribute(s,h,f,d,g,new _e)),a&&(m.normal=vi.getInterpolatedAttribute(a,h,f,d,g,new Z),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:h,b:f,c:d,normal:new Z,materialIndex:0};vi.getNormal(va,xa,ya,_.normal),m.face=_,m.barycoord=g}return m}class uo extends Xn{constructor(t=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const h=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const f=[],d=[],m=[],g=[];let _=0,M=0;E("z","y","x",-1,-1,i,n,t,a,s,0),E("z","y","x",1,-1,i,n,-t,a,s,1),E("x","z","y",1,1,t,i,n,r,a,2),E("x","z","y",1,-1,t,i,-n,r,a,3),E("x","y","z",1,-1,t,n,i,r,s,4),E("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(f),this.setAttribute("position",new en(d,3)),this.setAttribute("normal",new en(m,3)),this.setAttribute("uv",new en(g,2));function E(S,x,v,O,U,C,V,k,j,$,P){const I=C/j,G=V/$,et=C/2,tt=V/2,nt=k/2,ht=j+1,ot=$+1;let xt=0,rt=0;const At=new Z;for(let Dt=0;Dt<ot;Dt++){const Zt=Dt*G-tt;for(let St=0;St<ht;St++){const Ne=St*I-et;At[S]=Ne*O,At[x]=Zt*U,At[v]=nt,d.push(At.x,At.y,At.z),At[S]=0,At[x]=0,At[v]=k>0?1:-1,m.push(At.x,At.y,At.z),g.push(St/j),g.push(1-Dt/$),xt+=1}}for(let Dt=0;Dt<$;Dt++)for(let Zt=0;Zt<j;Zt++){const St=_+Zt+ht*Dt,Ne=_+Zt+ht*(Dt+1),Pe=_+(Zt+1)+ht*(Dt+1),q=_+(Zt+1)+ht*Dt;f.push(St,Ne,q),f.push(Ne,Pe,q),rt+=6}h.addGroup(M,rt,P),M+=rt,_+=xt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function bn(e){const t={};for(let n=0;n<e.length;n++){const i=Zs(e[n]);for(const r in i)t[r]=i[r]}return t}function Bv(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function O0(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const kv={clone:Zs,merge:bn};var zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zv,this.fragmentShader=Gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=Bv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class B0 extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new Z,mp=new _e,gp=new _e;class $n extends B0{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-t/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-t/lr.z)}getViewSize(t,n){return this.getViewBounds(t,mp,gp),n.subVectors(gp,mp)}setViewOffset(t,n,i,r,s,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Do*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const f=a.fullWidth,d=a.fullHeight;s+=a.offsetX*r/f,n-=a.offsetY*i/d,r*=a.width/f,i*=a.height/d}const h=this.filmOffset;h!==0&&(s+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,Ms=1;class Vv extends tn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(ys,Ms,t,n);r.layers=this.layers,this.add(r);const s=new $n(ys,Ms,t,n);s.layers=this.layers,this.add(s);const a=new $n(ys,Ms,t,n);a.layers=this.layers,this.add(a);const h=new $n(ys,Ms,t,n);h.layers=this.layers,this.add(h);const f=new $n(ys,Ms,t,n);f.layers=this.layers,this.add(f);const d=new $n(ys,Ms,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,h,f]=n;for(const d of n)this.remove(d);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,h,f,d,m]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,a),t.setRenderTarget(i,2,r),t.render(n,h),t.setRenderTarget(i,3,r),t.render(n,f),t.setRenderTarget(i,4,r),t.render(n,d),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),t.render(n,m),t.setRenderTarget(g,_,M),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class k0 extends Mn{constructor(t=[],n=qs,i,r,s,a,h,f,d,m){super(t,n,i,r,s,a,h,f,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hv extends wr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new k0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new uo(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:vr});s.uniforms.tEquirect.value=n;const a=new Cn(r,s),h=n.minFilter;return n.minFilter===$r&&(n.minFilter=Li),new Vv(1,10,this).update(t,a),n.minFilter=h,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,r);t.setRenderTarget(s)}}class Zr extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wv={type:"move"};class Lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,a=null;const h=this._targetRay,f=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){a=!0;for(const S of t.hand.values()){const x=n.getJointPose(S,i),v=this._getHandJoint(d,S);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const m=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=m.position.distanceTo(g.position),M=.02,E=.005;d.inputState.pinching&&_>M+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=M-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Wv)))}return h!==null&&(h.visible=r!==null),f!==null&&(f.visible=s!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Zr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class z0{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new se(t),this.near=n,this.far=i}clone(){return new z0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class y3 extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class G0 extends Mn{constructor(t=null,n=1,i=1,r,s,a,h,f,d=Jn,m=Jn,g,_){super(null,a,h,f,d,m,r,s,g,_),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _p extends Vn{constructor(t,n,i,r=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ss=new Ue,vp=new Ue,wa=[],xp=new ss,Xv=new Ue,Eo=new Cn,wo=new ho;class yp extends Cn{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new _p(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Xv)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ss),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ss),xp.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(xp)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ho),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ss),wo.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(wo)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let h=0;h<i.length;h++)i[h]=r[a+h]}raycast(t,n){const i=this.matrixWorld,r=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(i),t.ray.intersectsSphere(wo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ss),vp.multiplyMatrices(i,Ss),Eo.matrixWorld=vp,Eo.raycast(t,wa);for(let a=0,h=wa.length;a<h;a++){const f=wa[a];f.instanceId=s,f.object=this,n.push(f)}wa.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new _p(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new G0(new Float32Array(r*this.count),r,this.count,sf,Ii));const s=this.morphTexture.source.data.data;let a=0;for(let d=0;d<i.length;d++)a+=i[d];const h=this.geometry.morphTargetsRelative?1:1-a,f=r*t;s[f]=h,s.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ic=new Z,jv=new Z,qv=new fe;class hr{constructor(t=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=Ic.subVectors(i,n).cross(jv.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||qv.getNormalMatrix(t),r=this.coplanarPoint(Ic).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new ho,Yv=new _e(.5,.5),Ta=new Z;class mf{constructor(t=new hr,n=new hr,i=new hr,r=new hr,s=new hr,a=new hr){this.planes=[t,n,i,r,s,a]}set(t,n,i,r,s,a){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(i),h[3].copy(r),h[4].copy(s),h[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Di,i=!1){const r=this.planes,s=t.elements,a=s[0],h=s[1],f=s[2],d=s[3],m=s[4],g=s[5],_=s[6],M=s[7],E=s[8],S=s[9],x=s[10],v=s[11],O=s[12],U=s[13],C=s[14],V=s[15];if(r[0].setComponents(d-a,M-m,v-E,V-O).normalize(),r[1].setComponents(d+a,M+m,v+E,V+O).normalize(),r[2].setComponents(d+h,M+g,v+S,V+U).normalize(),r[3].setComponents(d-h,M-g,v-S,V-U).normalize(),i)r[4].setComponents(f,_,x,C).normalize(),r[5].setComponents(d-f,M-_,v-x,V-C).normalize();else if(r[4].setComponents(d-f,M-_,v-x,V-C).normalize(),n===Di)r[5].setComponents(d+f,M+_,v+x,V+C).normalize();else if(n===ol)r[5].setComponents(f,_,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(t){Or.center.set(0,0,0);const n=Yv.distanceTo(t.center);return Or.radius=.7071067811865476+n,Or.applyMatrix4(t.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ta.x=r.normal.x>0?t.max.x:t.min.x,Ta.y=r.normal.y>0?t.max.y:t.min.y,Ta.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class V0 extends os{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ll=new Z,cl=new Z,Mp=new Ue,To=new ff,ba=new ho,Dc=new Z,Sp=new Z;class Kv extends tn{constructor(t=new Xn,n=new V0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ll.fromBufferAttribute(n,r-1),cl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ll.distanceTo(cl);t.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(r),ba.radius+=s,t.ray.intersectsSphere(ba)===!1)return;Mp.copy(r).invert(),To.copy(t.ray).applyMatrix4(Mp);const h=s/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,d=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const M=Math.max(0,a.start),E=Math.min(m.count,a.start+a.count);for(let S=M,x=E-1;S<x;S+=d){const v=m.getX(S),O=m.getX(S+1),U=Aa(this,t,To,f,v,O,S);U&&n.push(U)}if(this.isLineLoop){const S=m.getX(E-1),x=m.getX(M),v=Aa(this,t,To,f,S,x,E-1);v&&n.push(v)}}else{const M=Math.max(0,a.start),E=Math.min(_.count,a.start+a.count);for(let S=M,x=E-1;S<x;S+=d){const v=Aa(this,t,To,f,S,S+1,S);v&&n.push(v)}if(this.isLineLoop){const S=Aa(this,t,To,f,E-1,M,E-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const h=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=s}}}}}function Aa(e,t,n,i,r,s,a){const h=e.geometry.attributes.position;if(ll.fromBufferAttribute(h,r),cl.fromBufferAttribute(h,s),n.distanceSqToSegment(ll,cl,Dc,Sp)>i)return;Dc.applyMatrix4(e.matrixWorld);const d=t.ray.origin.distanceTo(Dc);if(!(d<t.near||d>t.far))return{distance:d,point:Sp.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}class M3 extends Mn{constructor(t,n,i,r,s,a,h,f,d){super(t,n,i,r,s,a,h,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class H0 extends Mn{constructor(t,n,i=ns,r,s,a,h=Jn,f=Jn,d,m=jo,g=1){if(m!==jo&&m!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:g};super(_,r,s,a,h,f,m,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uf(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gf extends Xn{constructor(t=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],h=[],f=[],d=[],m=n/2,g=Math.PI/2*t,_=n,M=2*g+_,E=i*2+s,S=r+1,x=new Z,v=new Z;for(let O=0;O<=E;O++){let U=0,C=0,V=0,k=0;if(O<=i){const P=O/i,I=P*Math.PI/2;C=-m-t*Math.cos(I),V=t*Math.sin(I),k=-t*Math.cos(I),U=P*g}else if(O<=i+s){const P=(O-i)/s;C=-m+P*n,V=t,k=0,U=g+P*_}else{const P=(O-i-s)/i,I=P*Math.PI/2;C=m+t*Math.sin(I),V=t*Math.cos(I),k=t*Math.sin(I),U=g+_+P*g}const j=Math.max(0,Math.min(1,U/M));let $=0;O===0?$=.5/r:O===E&&($=-.5/r);for(let P=0;P<=r;P++){const I=P/r,G=I*Math.PI*2,et=Math.sin(G),tt=Math.cos(G);v.x=-V*tt,v.y=C,v.z=V*et,h.push(v.x,v.y,v.z),x.set(-V*tt,k,V*et),x.normalize(),f.push(x.x,x.y,x.z),d.push(I+$,j)}if(O>0){const P=(O-1)*S;for(let I=0;I<r;I++){const G=P+I,et=P+I+1,tt=O*S+I,nt=O*S+I+1;a.push(G,et,tt),a.push(et,nt,tt)}}}this.setIndex(a),this.setAttribute("position",new en(h,3)),this.setAttribute("normal",new en(f,3)),this.setAttribute("uv",new en(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gf(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class W0 extends Xn{constructor(t=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],h=[],f=[],d=new Z,m=new _e;a.push(0,0,0),h.push(0,0,1),f.push(.5,.5);for(let g=0,_=3;g<=n;g++,_+=3){const M=i+g/n*r;d.x=t*Math.cos(M),d.y=t*Math.sin(M),a.push(d.x,d.y,d.z),h.push(0,0,1),m.x=(a[_]/t+1)/2,m.y=(a[_+1]/t+1)/2,f.push(m.x,m.y)}for(let g=1;g<=n;g++)s.push(g,g+1,0);this.setIndex(s),this.setAttribute("position",new en(a,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new W0(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qo extends Xn{constructor(t=1,n=1,i=1,r=32,s=1,a=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:h,thetaLength:f};const d=this;r=Math.floor(r),s=Math.floor(s);const m=[],g=[],_=[],M=[];let E=0;const S=[],x=i/2;let v=0;O(),a===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(m),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(M,2));function O(){const C=new Z,V=new Z;let k=0;const j=(n-t)/i;for(let $=0;$<=s;$++){const P=[],I=$/s,G=I*(n-t)+t;for(let et=0;et<=r;et++){const tt=et/r,nt=tt*f+h,ht=Math.sin(nt),ot=Math.cos(nt);V.x=G*ht,V.y=-I*i+x,V.z=G*ot,g.push(V.x,V.y,V.z),C.set(ht,j,ot).normalize(),_.push(C.x,C.y,C.z),M.push(tt,1-I),P.push(E++)}S.push(P)}for(let $=0;$<r;$++)for(let P=0;P<s;P++){const I=S[P][$],G=S[P+1][$],et=S[P+1][$+1],tt=S[P][$+1];(t>0||P!==0)&&(m.push(I,G,tt),k+=3),(n>0||P!==s-1)&&(m.push(G,et,tt),k+=3)}d.addGroup(v,k,0),v+=k}function U(C){const V=E,k=new _e,j=new Z;let $=0;const P=C===!0?t:n,I=C===!0?1:-1;for(let et=1;et<=r;et++)g.push(0,x*I,0),_.push(0,I,0),M.push(.5,.5),E++;const G=E;for(let et=0;et<=r;et++){const nt=et/r*f+h,ht=Math.cos(nt),ot=Math.sin(nt);j.x=P*ot,j.y=x*I,j.z=P*ht,g.push(j.x,j.y,j.z),_.push(0,I,0),k.x=ht*.5+.5,k.y=ot*.5*I+.5,M.push(k.x,k.y),E++}for(let et=0;et<r;et++){const tt=V+et,nt=G+et;C===!0?m.push(nt,nt+1,tt):m.push(nt+1,nt,tt),$+=3}d.addGroup(v,$,C===!0?1:2),v+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _f extends Qo{constructor(t=1,n=1,i=32,r=1,s=!1,a=0,h=Math.PI*2){super(0,t,n,i,r,s,a,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:h}}static fromJSON(t){return new _f(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ta extends Xn{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,a=n/2,h=Math.floor(i),f=Math.floor(r),d=h+1,m=f+1,g=t/h,_=n/f,M=[],E=[],S=[],x=[];for(let v=0;v<m;v++){const O=v*_-a;for(let U=0;U<d;U++){const C=U*g-s;E.push(C,-O,0),S.push(0,0,1),x.push(U/h),x.push(1-v/f)}}for(let v=0;v<f;v++)for(let O=0;O<h;O++){const U=O+d*v,C=O+d*(v+1),V=O+1+d*(v+1),k=O+1+d*v;M.push(U,C,k),M.push(C,V,k)}this.setIndex(M),this.setAttribute("position",new en(E,3)),this.setAttribute("normal",new en(S,3)),this.setAttribute("uv",new en(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.width,t.height,t.widthSegments,t.heightSegments)}}class Us extends Xn{constructor(t=1,n=32,i=16,r=0,s=Math.PI*2,a=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:h},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const f=Math.min(a+h,Math.PI);let d=0;const m=[],g=new Z,_=new Z,M=[],E=[],S=[],x=[];for(let v=0;v<=i;v++){const O=[],U=v/i;let C=0;v===0&&a===0?C=.5/n:v===i&&f===Math.PI&&(C=-.5/n);for(let V=0;V<=n;V++){const k=V/n;g.x=-t*Math.cos(r+k*s)*Math.sin(a+U*h),g.y=t*Math.cos(a+U*h),g.z=t*Math.sin(r+k*s)*Math.sin(a+U*h),E.push(g.x,g.y,g.z),_.copy(g).normalize(),S.push(_.x,_.y,_.z),x.push(k+C,1-U),O.push(d++)}m.push(O)}for(let v=0;v<i;v++)for(let O=0;O<n;O++){const U=m[v][O+1],C=m[v][O],V=m[v+1][O],k=m[v+1][O+1];(v!==0||a>0)&&M.push(U,C,k),(v!==i-1||f<Math.PI)&&M.push(C,V,k)}this.setIndex(M),this.setAttribute("position",new en(E,3)),this.setAttribute("normal",new en(S,3)),this.setAttribute("uv",new en(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $v extends os{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vf extends $v{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Zv extends os{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jv extends os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qv extends os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Vl extends tn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class S3 extends Vl{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const Uc=new Ue,Ep=new Z,wp=new Z;class X0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Ep.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ep),wp.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(wp),n.updateMatrixWorld(),Uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class tx extends X0{constructor(){super(new $n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,i=$s*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Tp extends Vl{constructor(t,n,i=0,r=Math.PI/3,s=0,a=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new tx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class j0 extends B0{constructor(t=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,h=r+n,f=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,a=s+d*this.view.width,h-=m*this.view.offsetY,f=h-m*this.view.height}this.projectionMatrix.makeOrthographic(s,a,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ex extends X0{constructor(){super(new j0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bp extends Vl{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new ex}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class E3 extends Vl{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class nx extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class q0{constructor(t){this.value=t}clone(){return new q0(this.value.clone===void 0?this.value:this.value.clone())}}const Ap=new Ue;class w3{constructor(t,n,i=0,r=1/0){this.ray=new ff(t,n),this.near=i,this.far=r,this.camera=null,this.layers=new df,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Ap.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ap),this}intersectObject(t,n=!0,i=[]){return Kh(t,this,i,n),i.sort(Rp),i}intersectObjects(t,n=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Kh(t[r],this,i,n);return i.sort(Rp),i}}function Rp(e,t){return e.distance-t.distance}function Kh(e,t,n,i){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(r=!1),r===!0&&i===!0){const s=e.children;for(let a=0,h=s.length;a<h;a++)Kh(s[a],t,n,!0)}}class T3{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(me(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Cp=new Z;let Ra,Nc;class b3 extends tn{constructor(t=new Z(0,0,1),n=new Z(0,0,0),i=1,r=16776960,s=i*.2,a=s*.2){super(),this.type="ArrowHelper",Ra===void 0&&(Ra=new Xn,Ra.setAttribute("position",new en([0,0,0,0,1,0],3)),Nc=new _f(.5,1,5,1),Nc.translate(0,-.5,0)),this.position.copy(n),this.line=new Kv(Ra,new V0({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Cn(Nc,new pf({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,s,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Cp.set(t.z,0,-t.x).normalize();const n=Math.acos(t.y);this.quaternion.setFromAxisAngle(Cp,n)}}setLength(t,n=t*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,t-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class A3 extends rs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Pp(e,t,n,i){const r=ix(i);switch(n){case A0:return e*t;case sf:return e*t/r.components*r.byteLength;case of:return e*t/r.components*r.byteLength;case C0:return e*t*2/r.components*r.byteLength;case af:return e*t*2/r.components*r.byteLength;case R0:return e*t*3/r.components*r.byteLength;case hi:return e*t*4/r.components*r.byteLength;case lf:return e*t*4/r.components*r.byteLength;case Wa:case Xa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ja:case qa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wh:case bh:return Math.max(e,16)*Math.max(t,8)/4;case Eh:case Th:return Math.max(e,8)*Math.max(t,8)/2;case Ah:case Rh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ch:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case kh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case zh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Gh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Vh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Hh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ya:case Wh:case Xh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case P0:case jh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case qh:case Yh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ix(e){switch(e){case xi:case w0:return{byteLength:1,components:1};case Wo:case T0:case lo:return{byteLength:2,components:1};case nf:case rf:return{byteLength:2,components:4};case ns:case ef:case Ii:return{byteLength:4,components:1};case b0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Y0(){let e=null,t=!1,n=null,i=null;function r(s,a){n(s,a),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function rx(e){const t=new WeakMap;function n(h,f){const d=h.array,m=h.usage,g=d.byteLength,_=e.createBuffer();e.bindBuffer(f,_),e.bufferData(f,d,m),h.onUploadCallback();let M;if(d instanceof Float32Array)M=e.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=e.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?M=e.HALF_FLOAT:M=e.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=e.SHORT;else if(d instanceof Uint32Array)M=e.UNSIGNED_INT;else if(d instanceof Int32Array)M=e.INT;else if(d instanceof Int8Array)M=e.BYTE;else if(d instanceof Uint8Array)M=e.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:g}}function i(h,f,d){const m=f.array,g=f.updateRanges;if(e.bindBuffer(d,h),g.length===0)e.bufferSubData(d,0,m);else{g.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<g.length;M++){const E=g[_],S=g[M];S.start<=E.start+E.count+1?E.count=Math.max(E.count,S.start+S.count-E.start):(++_,g[_]=S)}g.length=_+1;for(let M=0,E=g.length;M<E;M++){const S=g[M];e.bufferSubData(d,S.start*m.BYTES_PER_ELEMENT,m,S.start,S.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function s(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=t.get(h);f&&(e.deleteBuffer(f.buffer),t.delete(h))}function a(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const m=t.get(h);(!m||m.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,f));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,h,f),d.version=h.version}}return{get:r,remove:s,update:a}}var sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ox=`#ifdef USE_ALPHAHASH
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
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ux=`#ifdef USE_AOMAP
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
#endif`,fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dx=`#ifdef USE_BATCHING
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
#endif`,px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vx=`#ifdef USE_IRIDESCENCE
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
#endif`,xx=`#ifdef USE_BUMPMAP
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
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rx=`#define PI 3.141592653589793
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
} // validated`,Cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Px=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jx=`#ifdef USE_GRADIENTMAP
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
}`,qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$x=`uniform bool receiveShadow;
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
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
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
#endif`,iy=`struct PhysicalMaterial {
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
}`,ry=`
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ly=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,py=`#if defined( USE_POINTS_UV )
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
#endif`,my=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
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
#endif`,My=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
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
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,By=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hy=`float getShadowMask() {
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
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xy=`#ifdef USE_SKINNING
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
#endif`,jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,Yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sM=`uniform sampler2D t2D;
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`#include <common>
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
}`,uM=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,fM=`#define DISTANCE
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
}`,dM=`#define DISTANCE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`uniform float scale;
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
}`,_M=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,xM=`uniform vec3 diffuse;
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
}`,yM=`#define LAMBERT
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
}`,MM=`#define LAMBERT
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
}`,SM=`#define MATCAP
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
}`,EM=`#define MATCAP
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
}`,wM=`#define NORMAL
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
}`,TM=`#define NORMAL
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
}`,bM=`#define PHONG
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
}`,AM=`#define PHONG
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
}`,RM=`#define STANDARD
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
}`,CM=`#define STANDARD
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
}`,PM=`#define TOON
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
}`,LM=`#define TOON
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
}`,IM=`uniform float size;
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
}`,DM=`uniform vec3 diffuse;
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
}`,UM=`#include <common>
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
}`,NM=`uniform vec3 color;
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
}`,FM=`uniform float rotation;
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
}`,OM=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:sx,alphahash_pars_fragment:ox,alphamap_fragment:ax,alphamap_pars_fragment:lx,alphatest_fragment:cx,alphatest_pars_fragment:hx,aomap_fragment:ux,aomap_pars_fragment:fx,batching_pars_vertex:dx,batching_vertex:px,begin_vertex:mx,beginnormal_vertex:gx,bsdfs:_x,iridescence_fragment:vx,bumpmap_pars_fragment:xx,clipping_planes_fragment:yx,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:Sx,clipping_planes_vertex:Ex,color_fragment:wx,color_pars_fragment:Tx,color_pars_vertex:bx,color_vertex:Ax,common:Rx,cube_uv_reflection_fragment:Cx,defaultnormal_vertex:Px,displacementmap_pars_vertex:Lx,displacementmap_vertex:Ix,emissivemap_fragment:Dx,emissivemap_pars_fragment:Ux,colorspace_fragment:Nx,colorspace_pars_fragment:Fx,envmap_fragment:Ox,envmap_common_pars_fragment:Bx,envmap_pars_fragment:kx,envmap_pars_vertex:zx,envmap_physical_pars_fragment:Zx,envmap_vertex:Gx,fog_vertex:Vx,fog_pars_vertex:Hx,fog_fragment:Wx,fog_pars_fragment:Xx,gradientmap_pars_fragment:jx,lightmap_pars_fragment:qx,lights_lambert_fragment:Yx,lights_lambert_pars_fragment:Kx,lights_pars_begin:$x,lights_toon_fragment:Jx,lights_toon_pars_fragment:Qx,lights_phong_fragment:ty,lights_phong_pars_fragment:ey,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:ry,lights_fragment_maps:sy,lights_fragment_end:oy,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:ly,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:hy,map_fragment:uy,map_pars_fragment:fy,map_particle_fragment:dy,map_particle_pars_fragment:py,metalnessmap_fragment:my,metalnessmap_pars_fragment:gy,morphinstance_vertex:_y,morphcolor_vertex:vy,morphnormal_vertex:xy,morphtarget_pars_vertex:yy,morphtarget_vertex:My,normal_fragment_begin:Sy,normal_fragment_maps:Ey,normal_pars_fragment:wy,normal_pars_vertex:Ty,normal_vertex:by,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Py,iridescence_pars_fragment:Ly,opaque_fragment:Iy,packing:Dy,premultiplied_alpha_fragment:Uy,project_vertex:Ny,dithering_fragment:Fy,dithering_pars_fragment:Oy,roughnessmap_fragment:By,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:zy,shadowmap_pars_vertex:Gy,shadowmap_vertex:Vy,shadowmask_pars_fragment:Hy,skinbase_vertex:Wy,skinning_pars_vertex:Xy,skinning_vertex:jy,skinnormal_vertex:qy,specularmap_fragment:Yy,specularmap_pars_fragment:Ky,tonemapping_fragment:$y,tonemapping_pars_fragment:Zy,transmission_fragment:Jy,transmission_pars_fragment:Qy,uv_pars_fragment:tM,uv_pars_vertex:eM,uv_vertex:nM,worldpos_vertex:iM,background_vert:rM,background_frag:sM,backgroundCube_vert:oM,backgroundCube_frag:aM,cube_vert:lM,cube_frag:cM,depth_vert:hM,depth_frag:uM,distanceRGBA_vert:fM,distanceRGBA_frag:dM,equirect_vert:pM,equirect_frag:mM,linedashed_vert:gM,linedashed_frag:_M,meshbasic_vert:vM,meshbasic_frag:xM,meshlambert_vert:yM,meshlambert_frag:MM,meshmatcap_vert:SM,meshmatcap_frag:EM,meshnormal_vert:wM,meshnormal_frag:TM,meshphong_vert:bM,meshphong_frag:AM,meshphysical_vert:RM,meshphysical_frag:CM,meshtoon_vert:PM,meshtoon_frag:LM,points_vert:IM,points_frag:DM,shadow_vert:UM,shadow_frag:NM,sprite_vert:FM,sprite_frag:OM},Ct={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ci={basic:{uniforms:bn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:bn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:bn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:bn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:bn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new se(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:bn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:bn([Ct.points,Ct.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:bn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:bn([Ct.common,Ct.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:bn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:bn([Ct.sprite,Ct.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:bn([Ct.common,Ct.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:bn([Ct.lights,Ct.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ci.physical={uniforms:bn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Ca={r:0,b:0,g:0},Br=new yi,BM=new Ue;function kM(e,t,n,i,r,s,a){const h=new se(0);let f=s===!0?0:1,d,m,g=null,_=0,M=null;function E(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?n:t).get(C)),C}function S(U){let C=!1;const V=E(U);V===null?v(h,f):V&&V.isColor&&(v(V,1),C=!0);const k=e.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(U,C){const V=E(C);V&&(V.isCubeTexture||V.mapping===Gl)?(m===void 0&&(m=new Cn(new uo(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Zs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,j,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),Br.copy(C.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.material.uniforms.envMap.value=V,m.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(BM.makeRotationFromEuler(Br)),m.material.toneMapped=we.getTransfer(V.colorSpace)!==De,(g!==V||_!==V.version||M!==e.toneMapping)&&(m.material.needsUpdate=!0,g=V,_=V.version,M=e.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):V&&V.isTexture&&(d===void 0&&(d=new Cn(new ta(2,2),new Tr({name:"BackgroundMaterial",uniforms:Zs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=V,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=we.getTransfer(V.colorSpace)!==De,V.matrixAutoUpdate===!0&&V.updateMatrix(),d.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||_!==V.version||M!==e.toneMapping)&&(d.material.needsUpdate=!0,g=V,_=V.version,M=e.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function v(U,C){U.getRGB(Ca,O0(e)),i.buffers.color.setClear(Ca.r,Ca.g,Ca.b,C,a)}function O(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),f=C,v(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(U){f=U,v(h,f)},render:S,addToRenderList:x,dispose:O}}function zM(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=_(null);let s=r,a=!1;function h(I,G,et,tt,nt){let ht=!1;const ot=g(tt,et,G);s!==ot&&(s=ot,d(s.object)),ht=M(I,tt,et,nt),ht&&E(I,tt,et,nt),nt!==null&&t.update(nt,e.ELEMENT_ARRAY_BUFFER),(ht||a)&&(a=!1,C(I,G,et,tt),nt!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function f(){return e.createVertexArray()}function d(I){return e.bindVertexArray(I)}function m(I){return e.deleteVertexArray(I)}function g(I,G,et){const tt=et.wireframe===!0;let nt=i[I.id];nt===void 0&&(nt={},i[I.id]=nt);let ht=nt[G.id];ht===void 0&&(ht={},nt[G.id]=ht);let ot=ht[tt];return ot===void 0&&(ot=_(f()),ht[tt]=ot),ot}function _(I){const G=[],et=[],tt=[];for(let nt=0;nt<n;nt++)G[nt]=0,et[nt]=0,tt[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:et,attributeDivisors:tt,object:I,attributes:{},index:null}}function M(I,G,et,tt){const nt=s.attributes,ht=G.attributes;let ot=0;const xt=et.getAttributes();for(const rt in xt)if(xt[rt].location>=0){const Dt=nt[rt];let Zt=ht[rt];if(Zt===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(Zt=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(Zt=I.instanceColor)),Dt===void 0||Dt.attribute!==Zt||Zt&&Dt.data!==Zt.data)return!0;ot++}return s.attributesNum!==ot||s.index!==tt}function E(I,G,et,tt){const nt={},ht=G.attributes;let ot=0;const xt=et.getAttributes();for(const rt in xt)if(xt[rt].location>=0){let Dt=ht[rt];Dt===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(Dt=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(Dt=I.instanceColor));const Zt={};Zt.attribute=Dt,Dt&&Dt.data&&(Zt.data=Dt.data),nt[rt]=Zt,ot++}s.attributes=nt,s.attributesNum=ot,s.index=tt}function S(){const I=s.newAttributes;for(let G=0,et=I.length;G<et;G++)I[G]=0}function x(I){v(I,0)}function v(I,G){const et=s.newAttributes,tt=s.enabledAttributes,nt=s.attributeDivisors;et[I]=1,tt[I]===0&&(e.enableVertexAttribArray(I),tt[I]=1),nt[I]!==G&&(e.vertexAttribDivisor(I,G),nt[I]=G)}function O(){const I=s.newAttributes,G=s.enabledAttributes;for(let et=0,tt=G.length;et<tt;et++)G[et]!==I[et]&&(e.disableVertexAttribArray(et),G[et]=0)}function U(I,G,et,tt,nt,ht,ot){ot===!0?e.vertexAttribIPointer(I,G,et,nt,ht):e.vertexAttribPointer(I,G,et,tt,nt,ht)}function C(I,G,et,tt){S();const nt=tt.attributes,ht=et.getAttributes(),ot=G.defaultAttributeValues;for(const xt in ht){const rt=ht[xt];if(rt.location>=0){let At=nt[xt];if(At===void 0&&(xt==="instanceMatrix"&&I.instanceMatrix&&(At=I.instanceMatrix),xt==="instanceColor"&&I.instanceColor&&(At=I.instanceColor)),At!==void 0){const Dt=At.normalized,Zt=At.itemSize,St=t.get(At);if(St===void 0)continue;const Ne=St.buffer,Pe=St.type,q=St.bytesPerElement,Et=Pe===e.INT||Pe===e.UNSIGNED_INT||At.gpuType===ef;if(At.isInterleavedBufferAttribute){const yt=At.data,kt=yt.stride,te=At.offset;if(yt.isInstancedInterleavedBuffer){for(let oe=0;oe<rt.locationSize;oe++)v(rt.location+oe,yt.meshPerAttribute);I.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let oe=0;oe<rt.locationSize;oe++)x(rt.location+oe);e.bindBuffer(e.ARRAY_BUFFER,Ne);for(let oe=0;oe<rt.locationSize;oe++)U(rt.location+oe,Zt/rt.locationSize,Pe,Dt,kt*q,(te+Zt/rt.locationSize*oe)*q,Et)}else{if(At.isInstancedBufferAttribute){for(let yt=0;yt<rt.locationSize;yt++)v(rt.location+yt,At.meshPerAttribute);I.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let yt=0;yt<rt.locationSize;yt++)x(rt.location+yt);e.bindBuffer(e.ARRAY_BUFFER,Ne);for(let yt=0;yt<rt.locationSize;yt++)U(rt.location+yt,Zt/rt.locationSize,Pe,Dt,Zt*q,Zt/rt.locationSize*yt*q,Et)}}else if(ot!==void 0){const Dt=ot[xt];if(Dt!==void 0)switch(Dt.length){case 2:e.vertexAttrib2fv(rt.location,Dt);break;case 3:e.vertexAttrib3fv(rt.location,Dt);break;case 4:e.vertexAttrib4fv(rt.location,Dt);break;default:e.vertexAttrib1fv(rt.location,Dt)}}}}O()}function V(){$();for(const I in i){const G=i[I];for(const et in G){const tt=G[et];for(const nt in tt)m(tt[nt].object),delete tt[nt];delete G[et]}delete i[I]}}function k(I){if(i[I.id]===void 0)return;const G=i[I.id];for(const et in G){const tt=G[et];for(const nt in tt)m(tt[nt].object),delete tt[nt];delete G[et]}delete i[I.id]}function j(I){for(const G in i){const et=i[G];if(et[I.id]===void 0)continue;const tt=et[I.id];for(const nt in tt)m(tt[nt].object),delete tt[nt];delete et[I.id]}}function $(){P(),a=!0,s!==r&&(s=r,d(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:$,resetDefaultState:P,dispose:V,releaseStatesOfGeometry:k,releaseStatesOfProgram:j,initAttributes:S,enableAttribute:x,disableUnusedAttributes:O}}function GM(e,t,n){let i;function r(d){i=d}function s(d,m){e.drawArrays(i,d,m),n.update(m,i,1)}function a(d,m,g){g!==0&&(e.drawArraysInstanced(i,d,m,g),n.update(m,i,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,m,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E];n.update(M,i,1)}function f(d,m,g,_){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<d.length;E++)a(d[E],m[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(i,d,0,m,0,_,0,g);let E=0;for(let S=0;S<g;S++)E+=m[S]*_[S];n.update(E,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function VM(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const j=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(j){return!(j!==hi&&i.convert(j)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(j){const $=j===lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(j!==xi&&i.convert(j)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&j!==Ii&&!$)}function f(j){if(j==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";j="mediump"}return j==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const m=f(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const g=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),x=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),O=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),U=e.getParameter(e.MAX_VARYING_VECTORS),C=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,k=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:f,textureFormatReadable:a,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:S,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:V,maxSamples:k}}function HM(e){const t=this;let n=null,i=0,r=!1,s=!1;const a=new hr,h=new fe,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const M=g.length!==0||_||i!==0||r;return r=_,i=g.length,M},this.beginShadows=function(){s=!0,m(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,_){n=m(g,_,0)},this.setState=function(g,_,M){const E=g.clippingPlanes,S=g.clipIntersection,x=g.clipShadows,v=e.get(g);if(!r||E===null||E.length===0||s&&!x)s?m(null):d();else{const O=s?0:i,U=O*4;let C=v.clippingState||null;f.value=C,C=m(E,_,U,M);for(let V=0;V!==U;++V)C[V]=n[V];v.clippingState=C,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=O}};function d(){f.value!==n&&(f.value=n,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(g,_,M,E){const S=g!==null?g.length:0;let x=null;if(S!==0){if(x=f.value,E!==!0||x===null){const v=M+S*4,O=_.matrixWorldInverse;h.getNormalMatrix(O),(x===null||x.length<v)&&(x=new Float32Array(v));for(let U=0,C=M;U!==S;++U,C+=4)a.copy(g[U]).applyMatrix4(O,h),a.normal.toArray(x,C),x[C+3]=a.constant}f.value=x,f.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,x}}function WM(e){let t=new WeakMap;function n(a,h){return h===yh?a.mapping=qs:h===Mh&&(a.mapping=Ys),a}function i(a){if(a&&a.isTexture){const h=a.mapping;if(h===yh||h===Mh)if(t.has(a)){const f=t.get(a).texture;return n(f,a.mapping)}else{const f=a.image;if(f&&f.height>0){const d=new Hv(f.height);return d.fromEquirectangularTexture(e,a),t.set(a,d),a.addEventListener("dispose",r),n(d.texture,a.mapping)}else return null}}return a}function r(a){const h=a.target;h.removeEventListener("dispose",r);const f=t.get(h);f!==void 0&&(t.delete(h),f.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const As=4,Lp=[.125,.215,.35,.446,.526,.582],Hr=20,Fc=new j0,Ip=new se;let Oc=null,Bc=0,kc=0,zc=!1;const Gr=(1+Math.sqrt(5))/2,Es=1/Gr,Dp=[new Z(-Gr,Es,0),new Z(Gr,Es,0),new Z(-Es,0,Gr),new Z(Es,0,Gr),new Z(0,Gr,-Es),new Z(0,Gr,Es),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],XM=new Z;class Up{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100,s={}){const{size:a=256,position:h=XM}=s;Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,i,r,f,h),n>0&&this._blur(f,0,0,n),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oc,Bc,kc),this._renderer.xr.enabled=zc,t.scissorTest=!1,Pa(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===qs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:lo,format:hi,colorSpace:Ks,depthBuffer:!1},r=Np(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Np(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jM(s)),this._blurMaterial=qM(s,t,n)}return r}_compileMaterial(t){const n=new Cn(this._lodPlanes[0],t);this._renderer.compile(n,Fc)}_sceneToCubeUV(t,n,i,r,s){const f=new $n(90,1,n,i),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,M=g.toneMapping;g.getClearColor(Ip),g.toneMapping=$i,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null));const S=new pf({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),x=new Cn(new uo,S);let v=!1;const O=t.background;O?O.isColor&&(S.color.copy(O),t.background=null,v=!0):(S.color.copy(Ip),v=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(f.up.set(0,d[U],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x+m[U],s.y,s.z)):C===1?(f.up.set(0,0,d[U]),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y+m[U],s.z)):(f.up.set(0,d[U],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y,s.z+m[U]));const V=this._cubeSize;Pa(r,C*V,U>2?V:0,V,V),g.setRenderTarget(r),v&&g.render(x,f),g.render(t,f)}x.geometry.dispose(),x.material.dispose(),g.toneMapping=M,g.autoClear=_,t.background=O}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===qs||t.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Cn(this._lodPlanes[0],s),h=s.uniforms;h.envMap.value=t;const f=this._cubeSize;Pa(n,0,0,3*f,2*f),i.setRenderTarget(n),i.render(a,Fc)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),h=Dp[(r-s-1)%Dp.length];this._blur(t,s-1,s,a,h)}n.autoClear=i}_blur(t,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,a,h){const f=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Cn(this._lodPlanes[r],d),_=d.uniforms,M=this._sizeLods[i]-1,E=isFinite(s)?Math.PI/(2*M):2*Math.PI/(2*Hr-1),S=s/E,x=isFinite(s)?1+Math.floor(m*S):Hr;x>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Hr}`);const v=[];let O=0;for(let j=0;j<Hr;++j){const $=j/S,P=Math.exp(-$*$/2);v.push(P),j===0?O+=P:j<x&&(O+=2*P)}for(let j=0;j<v.length;j++)v[j]=v[j]/O;_.envMap.value=t.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=a==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=E,_.mipInt.value=U-i;const C=this._sizeLods[r],V=3*C*(r>U-As?r-U+As:0),k=4*(this._cubeSize-C);Pa(n,V,k,3*C,2*C),f.setRenderTarget(n),f.render(g,Fc)}}function jM(e){const t=[],n=[],i=[];let r=e;const s=e-As+1+Lp.length;for(let a=0;a<s;a++){const h=Math.pow(2,r);n.push(h);let f=1/h;a>e-As?f=Lp[a-e+As-1]:a===0&&(f=0),i.push(f);const d=1/(h-2),m=-d,g=1+d,_=[m,m,g,m,g,g,m,m,g,g,m,g],M=6,E=6,S=3,x=2,v=1,O=new Float32Array(S*E*M),U=new Float32Array(x*E*M),C=new Float32Array(v*E*M);for(let k=0;k<M;k++){const j=k%3*2/3-1,$=k>2?0:-1,P=[j,$,0,j+2/3,$,0,j+2/3,$+1,0,j,$,0,j+2/3,$+1,0,j,$+1,0];O.set(P,S*E*k),U.set(_,x*E*k);const I=[k,k,k,k,k,k];C.set(I,v*E*k)}const V=new Xn;V.setAttribute("position",new Vn(O,S)),V.setAttribute("uv",new Vn(U,x)),V.setAttribute("faceIndex",new Vn(C,v)),t.push(V),r>As&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Np(e,t,n){const i=new wr(e,t,n);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pa(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function qM(e,t,n){const i=new Float32Array(Hr),r=new Z(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Fp(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Op(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function xf(){return`

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
	`}function YM(e){let t=new WeakMap,n=null;function i(h){if(h&&h.isTexture){const f=h.mapping,d=f===yh||f===Mh,m=f===qs||f===Ys;if(d||m){let g=t.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new Up(e)),g=d?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return d&&M&&M.height>0||m&&M&&r(M)?(n===null&&(n=new Up(e)),g=d?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",s),g.texture):null}}}return h}function r(h){let f=0;const d=6;for(let m=0;m<d;m++)h[m]!==void 0&&f++;return f===d}function s(h){const f=h.target;f.removeEventListener("dispose",s);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function KM(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Is("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $M(e,t,n,i){const r={},s=new WeakMap;function a(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",a),delete r[_.id];const M=s.get(_);M&&(t.remove(M),s.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(g,_){return r[_.id]===!0||(_.addEventListener("dispose",a),r[_.id]=!0,n.memory.geometries++),_}function f(g){const _=g.attributes;for(const M in _)t.update(_[M],e.ARRAY_BUFFER)}function d(g){const _=[],M=g.index,E=g.attributes.position;let S=0;if(M!==null){const O=M.array;S=M.version;for(let U=0,C=O.length;U<C;U+=3){const V=O[U+0],k=O[U+1],j=O[U+2];_.push(V,k,k,j,j,V)}}else if(E!==void 0){const O=E.array;S=E.version;for(let U=0,C=O.length/3-1;U<C;U+=3){const V=U+0,k=U+1,j=U+2;_.push(V,k,k,j,j,V)}}else return;const x=new(I0(_)?F0:N0)(_,1);x.version=S;const v=s.get(g);v&&t.remove(v),s.set(g,x)}function m(g){const _=s.get(g);if(_){const M=g.index;M!==null&&_.version<M.version&&d(g)}else d(g);return s.get(g)}return{get:h,update:f,getWireframeAttribute:m}}function ZM(e,t,n){let i;function r(_){i=_}let s,a;function h(_){s=_.type,a=_.bytesPerElement}function f(_,M){e.drawElements(i,M,s,_*a),n.update(M,i,1)}function d(_,M,E){E!==0&&(e.drawElementsInstanced(i,M,s,_*a,E),n.update(M,i,E))}function m(_,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,M,0,s,_,0,E);let x=0;for(let v=0;v<E;v++)x+=M[v];n.update(x,i,1)}function g(_,M,E,S){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<_.length;v++)d(_[v]/a,M[v],S[v]);else{x.multiDrawElementsInstancedWEBGL(i,M,0,s,_,0,S,0,E);let v=0;for(let O=0;O<E;O++)v+=M[O]*S[O];n.update(v,i,1)}}this.setMode=r,this.setIndex=h,this.render=f,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function JM(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,h){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=h*(s/3);break;case e.LINES:n.lines+=h*(s/2);break;case e.LINE_STRIP:n.lines+=h*(s-1);break;case e.LINE_LOOP:n.lines+=h*s;break;case e.POINTS:n.points+=h*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function QM(e,t,n){const i=new WeakMap,r=new Xe;function s(a,h,f){const d=a.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(h);if(_===void 0||_.count!==g){let P=function(){j.dispose(),i.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let U=0;M===!0&&(U=1),E===!0&&(U=2),S===!0&&(U=3);let C=h.attributes.position.count*U,V=1;C>t.maxTextureSize&&(V=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const k=new Float32Array(C*V*4*g),j=new D0(k,C,V,g);j.type=Ii,j.needsUpdate=!0;const $=U*4;for(let I=0;I<g;I++){const G=x[I],et=v[I],tt=O[I],nt=C*V*4*I;for(let ht=0;ht<G.count;ht++){const ot=ht*$;M===!0&&(r.fromBufferAttribute(G,ht),k[nt+ot+0]=r.x,k[nt+ot+1]=r.y,k[nt+ot+2]=r.z,k[nt+ot+3]=0),E===!0&&(r.fromBufferAttribute(et,ht),k[nt+ot+4]=r.x,k[nt+ot+5]=r.y,k[nt+ot+6]=r.z,k[nt+ot+7]=0),S===!0&&(r.fromBufferAttribute(tt,ht),k[nt+ot+8]=r.x,k[nt+ot+9]=r.y,k[nt+ot+10]=r.z,k[nt+ot+11]=tt.itemSize===4?r.w:1)}}_={count:g,texture:j,size:new _e(C,V)},i.set(h,_),h.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)f.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const E=h.morphTargetsRelative?1:1-M;f.getUniforms().setValue(e,"morphTargetBaseInfluence",E),f.getUniforms().setValue(e,"morphTargetInfluences",d)}f.getUniforms().setValue(e,"morphTargetsTexture",_.texture,n),f.getUniforms().setValue(e,"morphTargetsTextureSize",_.size)}return{update:s}}function tS(e,t,n,i){let r=new WeakMap;function s(f){const d=i.render.frame,m=f.geometry,g=t.get(f,m);if(r.get(g)!==d&&(t.update(g),r.set(g,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),r.get(f)!==d&&(n.update(f.instanceMatrix,e.ARRAY_BUFFER),f.instanceColor!==null&&n.update(f.instanceColor,e.ARRAY_BUFFER),r.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;r.get(_)!==d&&(_.update(),r.set(_,d))}return g}function a(){r=new WeakMap}function h(f){const d=f.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:a}}const K0=new Mn,Bp=new H0(1,1),$0=new D0,Z0=new bv,J0=new k0,kp=[],zp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Hp=new Float32Array(4);function fo(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=kp[r];if(s===void 0&&(s=new Float32Array(r),kp[r]=s),t!==0){i.toArray(s,0);for(let a=1,h=0;a!==t;++a)h+=n,e[a].toArray(s,h)}return s}function un(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function fn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Hl(e,t){let n=zp[t];n===void 0&&(n=new Int32Array(t),zp[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function eS(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function nS(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2fv(this.addr,t),fn(n,t)}}function iS(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(un(n,t))return;e.uniform3fv(this.addr,t),fn(n,t)}}function rS(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4fv(this.addr,t),fn(n,t)}}function sS(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),fn(n,t)}else{if(un(n,i))return;Hp.set(i),e.uniformMatrix2fv(this.addr,!1,Hp),fn(n,i)}}function oS(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),fn(n,t)}else{if(un(n,i))return;Vp.set(i),e.uniformMatrix3fv(this.addr,!1,Vp),fn(n,i)}}function aS(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),fn(n,t)}else{if(un(n,i))return;Gp.set(i),e.uniformMatrix4fv(this.addr,!1,Gp),fn(n,i)}}function lS(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function cS(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2iv(this.addr,t),fn(n,t)}}function hS(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3iv(this.addr,t),fn(n,t)}}function uS(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4iv(this.addr,t),fn(n,t)}}function fS(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function dS(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2uiv(this.addr,t),fn(n,t)}}function pS(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3uiv(this.addr,t),fn(n,t)}}function mS(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4uiv(this.addr,t),fn(n,t)}}function gS(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(Bp.compareFunction=L0,s=Bp):s=K0,n.setTexture2D(t||s,r)}function _S(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Z0,r)}function vS(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||J0,r)}function xS(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||$0,r)}function yS(e){switch(e){case 5126:return eS;case 35664:return nS;case 35665:return iS;case 35666:return rS;case 35674:return sS;case 35675:return oS;case 35676:return aS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return hS;case 35669:case 35673:return uS;case 5125:return fS;case 36294:return dS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return _S;case 35680:case 36300:case 36308:case 36293:return vS;case 36289:case 36303:case 36311:case 36292:return xS}}function MS(e,t){e.uniform1fv(this.addr,t)}function SS(e,t){const n=fo(t,this.size,2);e.uniform2fv(this.addr,n)}function ES(e,t){const n=fo(t,this.size,3);e.uniform3fv(this.addr,n)}function wS(e,t){const n=fo(t,this.size,4);e.uniform4fv(this.addr,n)}function TS(e,t){const n=fo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function bS(e,t){const n=fo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function AS(e,t){const n=fo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function RS(e,t){e.uniform1iv(this.addr,t)}function CS(e,t){e.uniform2iv(this.addr,t)}function PS(e,t){e.uniform3iv(this.addr,t)}function LS(e,t){e.uniform4iv(this.addr,t)}function IS(e,t){e.uniform1uiv(this.addr,t)}function DS(e,t){e.uniform2uiv(this.addr,t)}function US(e,t){e.uniform3uiv(this.addr,t)}function NS(e,t){e.uniform4uiv(this.addr,t)}function FS(e,t,n){const i=this.cache,r=t.length,s=Hl(n,r);un(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let a=0;a!==r;++a)n.setTexture2D(t[a]||K0,s[a])}function OS(e,t,n){const i=this.cache,r=t.length,s=Hl(n,r);un(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||Z0,s[a])}function BS(e,t,n){const i=this.cache,r=t.length,s=Hl(n,r);un(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||J0,s[a])}function kS(e,t,n){const i=this.cache,r=t.length,s=Hl(n,r);un(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||$0,s[a])}function zS(e){switch(e){case 5126:return MS;case 35664:return SS;case 35665:return ES;case 35666:return wS;case 35674:return TS;case 35675:return bS;case 35676:return AS;case 5124:case 35670:return RS;case 35667:case 35671:return CS;case 35668:case 35672:return PS;case 35669:case 35673:return LS;case 5125:return IS;case 36294:return DS;case 36295:return US;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return kS}}class GS{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=yS(n.type)}}class VS{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zS(n.type)}}class HS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const h=r[s];h.setValue(t,n[h.id],i)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function Wp(e,t){e.seq.push(t),e.map[t.id]=t}function WS(e,t,n){const i=e.name,r=i.length;for(Gc.lastIndex=0;;){const s=Gc.exec(i),a=Gc.lastIndex;let h=s[1];const f=s[2]==="]",d=s[3];if(f&&(h=h|0),d===void 0||d==="["&&a+2===r){Wp(n,d===void 0?new GS(h,e,t):new VS(h,e,t));break}else{let g=n.map[h];g===void 0&&(g=new HS(h),Wp(n,g)),n=g}}}class Ka{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),a=t.getUniformLocation(n,s.name);WS(s,a,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,a=n.length;s!==a;++s){const h=n[s],f=i[h.id];f.needsUpdate!==!1&&h.setValue(t,f.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in n&&i.push(a)}return i}}function Xp(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const XS=37297;let jS=0;function qS(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let a=r;a<s;a++){const h=a+1;i.push(`${h===t?">":" "} ${h}: ${n[a]}`)}return i.join(`
`)}const jp=new fe;function YS(e){we._getMatrix(jp,we.workingColorSpace,e);const t=`mat3( ${jp.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(e)){case sl:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function qp(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const h=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+qS(e.getShaderSource(t),h)}else return s}function KS(e,t){const n=YS(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function $S(e,t){let n;switch(t){case k2:n="Linear";break;case z2:n="Reinhard";break;case G2:n="Cineon";break;case V2:n="ACESFilmic";break;case W2:n="AgX";break;case X2:n="Neutral";break;case H2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const La=new Z;function ZS(){we.getLuminanceCoefficients(La);const e=La.x.toFixed(4),t=La.y.toFixed(4),n=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JS(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function QS(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function tE(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),a=s.name;let h=1;s.type===e.FLOAT_MAT2&&(h=2),s.type===e.FLOAT_MAT3&&(h=3),s.type===e.FLOAT_MAT4&&(h=4),n[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:h}}return n}function Co(e){return e!==""}function Yp(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eE=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(e){return e.replace(eE,iE)}const nE=new Map;function iE(e,t){let n=de[t];if(n===void 0){const i=nE.get(t);if(i!==void 0)n=de[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $h(n)}const rE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(e){return e.replace(rE,sE)}function sE(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zp(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function oE(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===S0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===v2?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Hi&&(t="SHADOWMAP_TYPE_VSM"),t}function aE(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case qs:case Ys:t="ENVMAP_TYPE_CUBE";break;case Gl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lE(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function cE(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case tf:t="ENVMAP_BLENDING_MULTIPLY";break;case O2:t="ENVMAP_BLENDING_MIX";break;case B2:t="ENVMAP_BLENDING_ADD";break}return t}function hE(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function uE(e,t,n,i){const r=e.getContext(),s=n.defines;let a=n.vertexShader,h=n.fragmentShader;const f=oE(n),d=aE(n),m=lE(n),g=cE(n),_=hE(n),M=JS(n),E=QS(s),S=r.createProgram();let x,v,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Co).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Co).join(`
`),v.length>0&&(v+=`
`)):(x=[Zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),v=[Zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?de.tonemapping_pars_fragment:"",n.toneMapping!==$i?$S("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,KS("linearToOutputTexel",n.outputColorSpace),ZS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),a=$h(a),a=Yp(a,n),a=Kp(a,n),h=$h(h),h=Yp(h,n),h=Kp(h,n),a=$p(a),h=$p(h),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",n.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=O+x+a,C=O+v+h,V=Xp(r,r.VERTEX_SHADER,U),k=Xp(r,r.FRAGMENT_SHADER,C);r.attachShader(S,V),r.attachShader(S,k),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function j(G){if(e.debug.checkShaderErrors){const et=r.getProgramInfoLog(S)||"",tt=r.getShaderInfoLog(V)||"",nt=r.getShaderInfoLog(k)||"",ht=et.trim(),ot=tt.trim(),xt=nt.trim();let rt=!0,At=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(rt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,S,V,k);else{const Dt=qp(r,V,"vertex"),Zt=qp(r,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ht+`
`+Dt+`
`+Zt)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(ot===""||xt==="")&&(At=!1);At&&(G.diagnostics={runnable:rt,programLog:ht,vertexShader:{log:ot,prefix:x},fragmentShader:{log:xt,prefix:v}})}r.deleteShader(V),r.deleteShader(k),$=new Ka(r,S),P=tE(r,S)}let $;this.getUniforms=function(){return $===void 0&&j(this),$};let P;this.getAttributes=function(){return P===void 0&&j(this),P};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(S,XS)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jS++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=V,this.fragmentShader=k,this}let fE=0;class dE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new pE(t),n.set(t,i)),i}}class pE{constructor(t){this.id=fE++,this.code=t,this.usedTimes=0}}function mE(e,t,n,i,r,s,a){const h=new df,f=new dE,d=new Set,m=[],g=r.logarithmicDepthBuffer,_=r.vertexTextures;let M=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(P){return d.add(P),P===0?"uv":`uv${P}`}function x(P,I,G,et,tt){const nt=et.fog,ht=tt.geometry,ot=P.isMeshStandardMaterial?et.environment:null,xt=(P.isMeshStandardMaterial?n:t).get(P.envMap||ot),rt=xt&&xt.mapping===Gl?xt.image.height:null,At=E[P.type];P.precision!==null&&(M=r.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const Dt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Zt=Dt!==void 0?Dt.length:0;let St=0;ht.morphAttributes.position!==void 0&&(St=1),ht.morphAttributes.normal!==void 0&&(St=2),ht.morphAttributes.color!==void 0&&(St=3);let Ne,Pe,q,Et;if(At){const T=Ci[At];Ne=T.vertexShader,Pe=T.fragmentShader}else Ne=P.vertexShader,Pe=P.fragmentShader,f.update(P),q=f.getVertexShaderID(P),Et=f.getFragmentShaderID(P);const yt=e.getRenderTarget(),kt=e.state.buffers.depth.getReversed(),te=tt.isInstancedMesh===!0,oe=tt.isBatchedMesh===!0,qe=!!P.map,xe=!!P.matcap,X=!!xt,Ie=!!P.aoMap,Kt=!!P.lightMap,Se=!!P.bumpMap,$t=!!P.normalMap,Fe=!!P.displacementMap,bt=!!P.emissiveMap,he=!!P.metalnessMap,Ye=!!P.roughnessMap,be=P.anisotropy>0,F=P.clearcoat>0,b=P.dispersion>0,J=P.iridescence>0,lt=P.sheen>0,ft=P.transmission>0,st=be&&!!P.anisotropyMap,jt=F&&!!P.clearcoatMap,Mt=F&&!!P.clearcoatNormalMap,Bt=F&&!!P.clearcoatRoughnessMap,zt=J&&!!P.iridescenceMap,gt=J&&!!P.iridescenceThicknessMap,Pt=lt&&!!P.sheenColorMap,ee=lt&&!!P.sheenRoughnessMap,Gt=!!P.specularMap,Rt=!!P.specularColorMap,ae=!!P.specularIntensityMap,Y=ft&&!!P.transmissionMap,mt=ft&&!!P.thicknessMap,wt=!!P.gradientMap,y=!!P.alphaMap,l=P.alphaTest>0,c=!!P.alphaHash,o=!!P.extensions;let u=$i;P.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(u=e.toneMapping);const p={shaderID:At,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:Pe,defines:P.defines,customVertexShaderID:q,customFragmentShaderID:Et,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:oe,batchingColor:oe&&tt._colorsTexture!==null,instancing:te,instancingColor:te&&tt.instanceColor!==null,instancingMorph:te&&tt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:yt===null?e.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ks,alphaToCoverage:!!P.alphaToCoverage,map:qe,matcap:xe,envMap:X,envMapMode:X&&xt.mapping,envMapCubeUVHeight:rt,aoMap:Ie,lightMap:Kt,bumpMap:Se,normalMap:$t,displacementMap:_&&Fe,emissiveMap:bt,normalMapObjectSpace:$t&&P.normalMapType===K2,normalMapTangentSpace:$t&&P.normalMapType===cf,metalnessMap:he,roughnessMap:Ye,anisotropy:be,anisotropyMap:st,clearcoat:F,clearcoatMap:jt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:Bt,dispersion:b,iridescence:J,iridescenceMap:zt,iridescenceThicknessMap:gt,sheen:lt,sheenColorMap:Pt,sheenRoughnessMap:ee,specularMap:Gt,specularColorMap:Rt,specularIntensityMap:ae,transmission:ft,transmissionMap:Y,thicknessMap:mt,gradientMap:wt,opaque:P.transparent===!1&&P.blending===Ls&&P.alphaToCoverage===!1,alphaMap:y,alphaTest:l,alphaHash:c,combine:P.combine,mapUv:qe&&S(P.map.channel),aoMapUv:Ie&&S(P.aoMap.channel),lightMapUv:Kt&&S(P.lightMap.channel),bumpMapUv:Se&&S(P.bumpMap.channel),normalMapUv:$t&&S(P.normalMap.channel),displacementMapUv:Fe&&S(P.displacementMap.channel),emissiveMapUv:bt&&S(P.emissiveMap.channel),metalnessMapUv:he&&S(P.metalnessMap.channel),roughnessMapUv:Ye&&S(P.roughnessMap.channel),anisotropyMapUv:st&&S(P.anisotropyMap.channel),clearcoatMapUv:jt&&S(P.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&S(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&S(P.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&S(P.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&S(P.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&S(P.sheenColorMap.channel),sheenRoughnessMapUv:ee&&S(P.sheenRoughnessMap.channel),specularMapUv:Gt&&S(P.specularMap.channel),specularColorMapUv:Rt&&S(P.specularColorMap.channel),specularIntensityMapUv:ae&&S(P.specularIntensityMap.channel),transmissionMapUv:Y&&S(P.transmissionMap.channel),thicknessMapUv:mt&&S(P.thicknessMap.channel),alphaMapUv:y&&S(P.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&($t||be),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!ht.attributes.uv&&(qe||y),fog:!!nt,useFog:P.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:kt,skinning:tt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:St,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:P.dithering,shadowMapEnabled:e.shadowMap.enabled&&G.length>0,shadowMapType:e.shadowMap.type,toneMapping:u,decodeVideoTexture:qe&&P.map.isVideoTexture===!0&&we.getTransfer(P.map.colorSpace)===De,decodeVideoTextureEmissive:bt&&P.emissiveMap.isVideoTexture===!0&&we.getTransfer(P.emissiveMap.colorSpace)===De,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===ji,flipSided:P.side===Gn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:o&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(o&&P.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return p.vertexUv1s=d.has(1),p.vertexUv2s=d.has(2),p.vertexUv3s=d.has(3),d.clear(),p}function v(P){const I=[];if(P.shaderID?I.push(P.shaderID):(I.push(P.customVertexShaderID),I.push(P.customFragmentShaderID)),P.defines!==void 0)for(const G in P.defines)I.push(G),I.push(P.defines[G]);return P.isRawShaderMaterial===!1&&(O(I,P),U(I,P),I.push(e.outputColorSpace)),I.push(P.customProgramCacheKey),I.join()}function O(P,I){P.push(I.precision),P.push(I.outputColorSpace),P.push(I.envMapMode),P.push(I.envMapCubeUVHeight),P.push(I.mapUv),P.push(I.alphaMapUv),P.push(I.lightMapUv),P.push(I.aoMapUv),P.push(I.bumpMapUv),P.push(I.normalMapUv),P.push(I.displacementMapUv),P.push(I.emissiveMapUv),P.push(I.metalnessMapUv),P.push(I.roughnessMapUv),P.push(I.anisotropyMapUv),P.push(I.clearcoatMapUv),P.push(I.clearcoatNormalMapUv),P.push(I.clearcoatRoughnessMapUv),P.push(I.iridescenceMapUv),P.push(I.iridescenceThicknessMapUv),P.push(I.sheenColorMapUv),P.push(I.sheenRoughnessMapUv),P.push(I.specularMapUv),P.push(I.specularColorMapUv),P.push(I.specularIntensityMapUv),P.push(I.transmissionMapUv),P.push(I.thicknessMapUv),P.push(I.combine),P.push(I.fogExp2),P.push(I.sizeAttenuation),P.push(I.morphTargetsCount),P.push(I.morphAttributeCount),P.push(I.numDirLights),P.push(I.numPointLights),P.push(I.numSpotLights),P.push(I.numSpotLightMaps),P.push(I.numHemiLights),P.push(I.numRectAreaLights),P.push(I.numDirLightShadows),P.push(I.numPointLightShadows),P.push(I.numSpotLightShadows),P.push(I.numSpotLightShadowsWithMaps),P.push(I.numLightProbes),P.push(I.shadowMapType),P.push(I.toneMapping),P.push(I.numClippingPlanes),P.push(I.numClipIntersection),P.push(I.depthPacking)}function U(P,I){h.disableAll(),I.supportsVertexTextures&&h.enable(0),I.instancing&&h.enable(1),I.instancingColor&&h.enable(2),I.instancingMorph&&h.enable(3),I.matcap&&h.enable(4),I.envMap&&h.enable(5),I.normalMapObjectSpace&&h.enable(6),I.normalMapTangentSpace&&h.enable(7),I.clearcoat&&h.enable(8),I.iridescence&&h.enable(9),I.alphaTest&&h.enable(10),I.vertexColors&&h.enable(11),I.vertexAlphas&&h.enable(12),I.vertexUv1s&&h.enable(13),I.vertexUv2s&&h.enable(14),I.vertexUv3s&&h.enable(15),I.vertexTangents&&h.enable(16),I.anisotropy&&h.enable(17),I.alphaHash&&h.enable(18),I.batching&&h.enable(19),I.dispersion&&h.enable(20),I.batchingColor&&h.enable(21),I.gradientMap&&h.enable(22),P.push(h.mask),h.disableAll(),I.fog&&h.enable(0),I.useFog&&h.enable(1),I.flatShading&&h.enable(2),I.logarithmicDepthBuffer&&h.enable(3),I.reversedDepthBuffer&&h.enable(4),I.skinning&&h.enable(5),I.morphTargets&&h.enable(6),I.morphNormals&&h.enable(7),I.morphColors&&h.enable(8),I.premultipliedAlpha&&h.enable(9),I.shadowMapEnabled&&h.enable(10),I.doubleSided&&h.enable(11),I.flipSided&&h.enable(12),I.useDepthPacking&&h.enable(13),I.dithering&&h.enable(14),I.transmission&&h.enable(15),I.sheen&&h.enable(16),I.opaque&&h.enable(17),I.pointsUvs&&h.enable(18),I.decodeVideoTexture&&h.enable(19),I.decodeVideoTextureEmissive&&h.enable(20),I.alphaToCoverage&&h.enable(21),P.push(h.mask)}function C(P){const I=E[P.type];let G;if(I){const et=Ci[I];G=kv.clone(et.uniforms)}else G=P.uniforms;return G}function V(P,I){let G;for(let et=0,tt=m.length;et<tt;et++){const nt=m[et];if(nt.cacheKey===I){G=nt,++G.usedTimes;break}}return G===void 0&&(G=new uE(e,I,P,s),m.push(G)),G}function k(P){if(--P.usedTimes===0){const I=m.indexOf(P);m[I]=m[m.length-1],m.pop(),P.destroy()}}function j(P){f.remove(P)}function $(){f.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:C,acquireProgram:V,releaseProgram:k,releaseShaderCache:j,programs:m,dispose:$}}function gE(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let h=e.get(a);return h===void 0&&(h={},e.set(a,h)),h}function i(a){e.delete(a)}function r(a,h,f){e.get(a)[h]=f}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function _E(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Jp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Qp(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function a(g,_,M,E,S,x){let v=e[t];return v===void 0?(v={id:g.id,object:g,geometry:_,material:M,groupOrder:E,renderOrder:g.renderOrder,z:S,group:x},e[t]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=M,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=S,v.group=x),t++,v}function h(g,_,M,E,S,x){const v=a(g,_,M,E,S,x);M.transmission>0?i.push(v):M.transparent===!0?r.push(v):n.push(v)}function f(g,_,M,E,S,x){const v=a(g,_,M,E,S,x);M.transmission>0?i.unshift(v):M.transparent===!0?r.unshift(v):n.unshift(v)}function d(g,_){n.length>1&&n.sort(g||_E),i.length>1&&i.sort(_||Jp),r.length>1&&r.sort(_||Jp)}function m(){for(let g=t,_=e.length;g<_;g++){const M=e[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:h,unshift:f,finish:m,sort:d}}function vE(){let e=new WeakMap;function t(i,r){const s=e.get(i);let a;return s===void 0?(a=new Qp,e.set(i,[a])):r>=s.length?(a=new Qp,s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function xE(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Z,color:new se};break;case"SpotLight":n={position:new Z,direction:new Z,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return e[t.id]=n,n}}}function yE(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let ME=0;function SE(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function EE(e){const t=new xE,n=yE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new Z);const r=new Z,s=new Ue,a=new Ue;function h(d){let m=0,g=0,_=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let M=0,E=0,S=0,x=0,v=0,O=0,U=0,C=0,V=0,k=0,j=0;d.sort(SE);for(let P=0,I=d.length;P<I;P++){const G=d[P],et=G.color,tt=G.intensity,nt=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)m+=et.r*tt,g+=et.g*tt,_+=et.b*tt;else if(G.isLightProbe){for(let ot=0;ot<9;ot++)i.probe[ot].addScaledVector(G.sh.coefficients[ot],tt);j++}else if(G.isDirectionalLight){const ot=t.get(G);if(ot.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const xt=G.shadow,rt=n.get(G);rt.shadowIntensity=xt.intensity,rt.shadowBias=xt.bias,rt.shadowNormalBias=xt.normalBias,rt.shadowRadius=xt.radius,rt.shadowMapSize=xt.mapSize,i.directionalShadow[M]=rt,i.directionalShadowMap[M]=ht,i.directionalShadowMatrix[M]=G.shadow.matrix,O++}i.directional[M]=ot,M++}else if(G.isSpotLight){const ot=t.get(G);ot.position.setFromMatrixPosition(G.matrixWorld),ot.color.copy(et).multiplyScalar(tt),ot.distance=nt,ot.coneCos=Math.cos(G.angle),ot.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ot.decay=G.decay,i.spot[S]=ot;const xt=G.shadow;if(G.map&&(i.spotLightMap[V]=G.map,V++,xt.updateMatrices(G),G.castShadow&&k++),i.spotLightMatrix[S]=xt.matrix,G.castShadow){const rt=n.get(G);rt.shadowIntensity=xt.intensity,rt.shadowBias=xt.bias,rt.shadowNormalBias=xt.normalBias,rt.shadowRadius=xt.radius,rt.shadowMapSize=xt.mapSize,i.spotShadow[S]=rt,i.spotShadowMap[S]=ht,C++}S++}else if(G.isRectAreaLight){const ot=t.get(G);ot.color.copy(et).multiplyScalar(tt),ot.halfWidth.set(G.width*.5,0,0),ot.halfHeight.set(0,G.height*.5,0),i.rectArea[x]=ot,x++}else if(G.isPointLight){const ot=t.get(G);if(ot.color.copy(G.color).multiplyScalar(G.intensity),ot.distance=G.distance,ot.decay=G.decay,G.castShadow){const xt=G.shadow,rt=n.get(G);rt.shadowIntensity=xt.intensity,rt.shadowBias=xt.bias,rt.shadowNormalBias=xt.normalBias,rt.shadowRadius=xt.radius,rt.shadowMapSize=xt.mapSize,rt.shadowCameraNear=xt.camera.near,rt.shadowCameraFar=xt.camera.far,i.pointShadow[E]=rt,i.pointShadowMap[E]=ht,i.pointShadowMatrix[E]=G.shadow.matrix,U++}i.point[E]=ot,E++}else if(G.isHemisphereLight){const ot=t.get(G);ot.skyColor.copy(G.color).multiplyScalar(tt),ot.groundColor.copy(G.groundColor).multiplyScalar(tt),i.hemi[v]=ot,v++}}x>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const $=i.hash;($.directionalLength!==M||$.pointLength!==E||$.spotLength!==S||$.rectAreaLength!==x||$.hemiLength!==v||$.numDirectionalShadows!==O||$.numPointShadows!==U||$.numSpotShadows!==C||$.numSpotMaps!==V||$.numLightProbes!==j)&&(i.directional.length=M,i.spot.length=S,i.rectArea.length=x,i.point.length=E,i.hemi.length=v,i.directionalShadow.length=O,i.directionalShadowMap.length=O,i.pointShadow.length=U,i.pointShadowMap.length=U,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=O,i.pointShadowMatrix.length=U,i.spotLightMatrix.length=C+V-k,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=j,$.directionalLength=M,$.pointLength=E,$.spotLength=S,$.rectAreaLength=x,$.hemiLength=v,$.numDirectionalShadows=O,$.numPointShadows=U,$.numSpotShadows=C,$.numSpotMaps=V,$.numLightProbes=j,i.version=ME++)}function f(d,m){let g=0,_=0,M=0,E=0,S=0;const x=m.matrixWorldInverse;for(let v=0,O=d.length;v<O;v++){const U=d[v];if(U.isDirectionalLight){const C=i.directional[g];C.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),g++}else if(U.isSpotLight){const C=i.spot[M];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),M++}else if(U.isRectAreaLight){const C=i.rectArea[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(x),a.identity(),s.copy(U.matrixWorld),s.premultiply(x),a.extractRotation(s),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),E++}else if(U.isPointLight){const C=i.point[_];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(x),_++}else if(U.isHemisphereLight){const C=i.hemi[S];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(x),S++}}}return{setup:h,setupView:f,state:i}}function tm(e){const t=new EE(e),n=[],i=[];function r(m){d.camera=m,n.length=0,i.length=0}function s(m){n.push(m)}function a(m){i.push(m)}function h(){t.setup(n)}function f(m){t.setupView(n,m)}const d={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:h,setupLightsView:f,pushLight:s,pushShadow:a}}function wE(e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let h;return a===void 0?(h=new tm(e),t.set(r,[h])):s>=a.length?(h=new tm(e),a.push(h)):h=a[s],h}function i(){t=new WeakMap}return{get:n,dispose:i}}const TE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bE=`uniform sampler2D shadow_pass;
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
}`;function AE(e,t,n){let i=new mf;const r=new _e,s=new _e,a=new Xe,h=new Jv({depthPacking:Y2}),f=new Qv,d={},m=n.maxTextureSize,g={[Er]:Gn,[Gn]:Er,[ji]:ji},_=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:TE,fragmentShader:bE}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new Xn;E.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Cn(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S0;let v=this.type;this.render=function(k,j,$){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;const P=e.getRenderTarget(),I=e.getActiveCubeFace(),G=e.getActiveMipmapLevel(),et=e.state;et.setBlending(vr),et.buffers.depth.getReversed()?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const tt=v!==Hi&&this.type===Hi,nt=v===Hi&&this.type!==Hi;for(let ht=0,ot=k.length;ht<ot;ht++){const xt=k[ht],rt=xt.shadow;if(rt===void 0){console.warn("THREE.WebGLShadowMap:",xt,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;r.copy(rt.mapSize);const At=rt.getFrameExtents();if(r.multiply(At),s.copy(rt.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(s.x=Math.floor(m/At.x),r.x=s.x*At.x,rt.mapSize.x=s.x),r.y>m&&(s.y=Math.floor(m/At.y),r.y=s.y*At.y,rt.mapSize.y=s.y)),rt.map===null||tt===!0||nt===!0){const Zt=this.type!==Hi?{minFilter:Jn,magFilter:Jn}:{};rt.map!==null&&rt.map.dispose(),rt.map=new wr(r.x,r.y,Zt),rt.map.texture.name=xt.name+".shadowMap",rt.camera.updateProjectionMatrix()}e.setRenderTarget(rt.map),e.clear();const Dt=rt.getViewportCount();for(let Zt=0;Zt<Dt;Zt++){const St=rt.getViewport(Zt);a.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),et.viewport(a),rt.updateMatrices(xt,Zt),i=rt.getFrustum(),C(j,$,rt.camera,xt,this.type)}rt.isPointLightShadow!==!0&&this.type===Hi&&O(rt,$),rt.needsUpdate=!1}v=this.type,x.needsUpdate=!1,e.setRenderTarget(P,I,G)};function O(k,j){const $=t.update(S);_.defines.VSM_SAMPLES!==k.blurSamples&&(_.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new wr(r.x,r.y)),_.uniforms.shadow_pass.value=k.map.texture,_.uniforms.resolution.value=k.mapSize,_.uniforms.radius.value=k.radius,e.setRenderTarget(k.mapPass),e.clear(),e.renderBufferDirect(j,null,$,_,S,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,e.setRenderTarget(k.map),e.clear(),e.renderBufferDirect(j,null,$,M,S,null)}function U(k,j,$,P){let I=null;const G=$.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(G!==void 0)I=G;else if(I=$.isPointLight===!0?f:h,e.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0||j.alphaToCoverage===!0){const et=I.uuid,tt=j.uuid;let nt=d[et];nt===void 0&&(nt={},d[et]=nt);let ht=nt[tt];ht===void 0&&(ht=I.clone(),nt[tt]=ht,j.addEventListener("dispose",V)),I=ht}if(I.visible=j.visible,I.wireframe=j.wireframe,P===Hi?I.side=j.shadowSide!==null?j.shadowSide:j.side:I.side=j.shadowSide!==null?j.shadowSide:g[j.side],I.alphaMap=j.alphaMap,I.alphaTest=j.alphaToCoverage===!0?.5:j.alphaTest,I.map=j.map,I.clipShadows=j.clipShadows,I.clippingPlanes=j.clippingPlanes,I.clipIntersection=j.clipIntersection,I.displacementMap=j.displacementMap,I.displacementScale=j.displacementScale,I.displacementBias=j.displacementBias,I.wireframeLinewidth=j.wireframeLinewidth,I.linewidth=j.linewidth,$.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const et=e.properties.get(I);et.light=$}return I}function C(k,j,$,P,I){if(k.visible===!1)return;if(k.layers.test(j.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&I===Hi)&&(!k.frustumCulled||i.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,k.matrixWorld);const tt=t.update(k),nt=k.material;if(Array.isArray(nt)){const ht=tt.groups;for(let ot=0,xt=ht.length;ot<xt;ot++){const rt=ht[ot],At=nt[rt.materialIndex];if(At&&At.visible){const Dt=U(k,At,P,I);k.onBeforeShadow(e,k,j,$,tt,Dt,rt),e.renderBufferDirect($,null,tt,Dt,k,rt),k.onAfterShadow(e,k,j,$,tt,Dt,rt)}}}else if(nt.visible){const ht=U(k,nt,P,I);k.onBeforeShadow(e,k,j,$,tt,ht,null),e.renderBufferDirect($,null,tt,ht,k,null),k.onAfterShadow(e,k,j,$,tt,ht,null)}}const et=k.children;for(let tt=0,nt=et.length;tt<nt;tt++)C(et[tt],j,$,P,I)}function V(k){k.target.removeEventListener("dispose",V);for(const $ in d){const P=d[$],I=k.target.uuid;I in P&&(P[I].dispose(),delete P[I])}}}const RE={[dh]:ph,[mh]:vh,[gh]:xh,[js]:_h,[ph]:dh,[vh]:mh,[xh]:gh,[_h]:js};function CE(e,t){function n(){let Y=!1;const mt=new Xe;let wt=null;const y=new Xe(0,0,0,0);return{setMask:function(l){wt!==l&&!Y&&(e.colorMask(l,l,l,l),wt=l)},setLocked:function(l){Y=l},setClear:function(l,c,o,u,p){p===!0&&(l*=u,c*=u,o*=u),mt.set(l,c,o,u),y.equals(mt)===!1&&(e.clearColor(l,c,o,u),y.copy(mt))},reset:function(){Y=!1,wt=null,y.set(-1,0,0,0)}}}function i(){let Y=!1,mt=!1,wt=null,y=null,l=null;return{setReversed:function(c){if(mt!==c){const o=t.get("EXT_clip_control");c?o.clipControlEXT(o.LOWER_LEFT_EXT,o.ZERO_TO_ONE_EXT):o.clipControlEXT(o.LOWER_LEFT_EXT,o.NEGATIVE_ONE_TO_ONE_EXT),mt=c;const u=l;l=null,this.setClear(u)}},getReversed:function(){return mt},setTest:function(c){c?yt(e.DEPTH_TEST):kt(e.DEPTH_TEST)},setMask:function(c){wt!==c&&!Y&&(e.depthMask(c),wt=c)},setFunc:function(c){if(mt&&(c=RE[c]),y!==c){switch(c){case dh:e.depthFunc(e.NEVER);break;case ph:e.depthFunc(e.ALWAYS);break;case mh:e.depthFunc(e.LESS);break;case js:e.depthFunc(e.LEQUAL);break;case gh:e.depthFunc(e.EQUAL);break;case _h:e.depthFunc(e.GEQUAL);break;case vh:e.depthFunc(e.GREATER);break;case xh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}y=c}},setLocked:function(c){Y=c},setClear:function(c){l!==c&&(mt&&(c=1-c),e.clearDepth(c),l=c)},reset:function(){Y=!1,wt=null,y=null,l=null,mt=!1}}}function r(){let Y=!1,mt=null,wt=null,y=null,l=null,c=null,o=null,u=null,p=null;return{setTest:function(T){Y||(T?yt(e.STENCIL_TEST):kt(e.STENCIL_TEST))},setMask:function(T){mt!==T&&!Y&&(e.stencilMask(T),mt=T)},setFunc:function(T,R,L){(wt!==T||y!==R||l!==L)&&(e.stencilFunc(T,R,L),wt=T,y=R,l=L)},setOp:function(T,R,L){(c!==T||o!==R||u!==L)&&(e.stencilOp(T,R,L),c=T,o=R,u=L)},setLocked:function(T){Y=T},setClear:function(T){p!==T&&(e.clearStencil(T),p=T)},reset:function(){Y=!1,mt=null,wt=null,y=null,l=null,c=null,o=null,u=null,p=null}}}const s=new n,a=new i,h=new r,f=new WeakMap,d=new WeakMap;let m={},g={},_=new WeakMap,M=[],E=null,S=!1,x=null,v=null,O=null,U=null,C=null,V=null,k=null,j=new se(0,0,0),$=0,P=!1,I=null,G=null,et=null,tt=null,nt=null;const ht=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,xt=0;const rt=e.getParameter(e.VERSION);rt.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),ot=xt>=1):rt.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),ot=xt>=2);let At=null,Dt={};const Zt=e.getParameter(e.SCISSOR_BOX),St=e.getParameter(e.VIEWPORT),Ne=new Xe().fromArray(Zt),Pe=new Xe().fromArray(St);function q(Y,mt,wt,y){const l=new Uint8Array(4),c=e.createTexture();e.bindTexture(Y,c),e.texParameteri(Y,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(Y,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<wt;o++)Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?e.texImage3D(mt,0,e.RGBA,1,1,y,0,e.RGBA,e.UNSIGNED_BYTE,l):e.texImage2D(mt+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,l);return c}const Et={};Et[e.TEXTURE_2D]=q(e.TEXTURE_2D,e.TEXTURE_2D,1),Et[e.TEXTURE_CUBE_MAP]=q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[e.TEXTURE_2D_ARRAY]=q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Et[e.TEXTURE_3D]=q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),h.setClear(0),yt(e.DEPTH_TEST),a.setFunc(js),Se(!1),$t(jd),yt(e.CULL_FACE),Ie(vr);function yt(Y){m[Y]!==!0&&(e.enable(Y),m[Y]=!0)}function kt(Y){m[Y]!==!1&&(e.disable(Y),m[Y]=!1)}function te(Y,mt){return g[Y]!==mt?(e.bindFramebuffer(Y,mt),g[Y]=mt,Y===e.DRAW_FRAMEBUFFER&&(g[e.FRAMEBUFFER]=mt),Y===e.FRAMEBUFFER&&(g[e.DRAW_FRAMEBUFFER]=mt),!0):!1}function oe(Y,mt){let wt=M,y=!1;if(Y){wt=_.get(mt),wt===void 0&&(wt=[],_.set(mt,wt));const l=Y.textures;if(wt.length!==l.length||wt[0]!==e.COLOR_ATTACHMENT0){for(let c=0,o=l.length;c<o;c++)wt[c]=e.COLOR_ATTACHMENT0+c;wt.length=l.length,y=!0}}else wt[0]!==e.BACK&&(wt[0]=e.BACK,y=!0);y&&e.drawBuffers(wt)}function qe(Y){return E!==Y?(e.useProgram(Y),E=Y,!0):!1}const xe={[Vr]:e.FUNC_ADD,[y2]:e.FUNC_SUBTRACT,[M2]:e.FUNC_REVERSE_SUBTRACT};xe[S2]=e.MIN,xe[E2]=e.MAX;const X={[w2]:e.ZERO,[T2]:e.ONE,[b2]:e.SRC_COLOR,[uh]:e.SRC_ALPHA,[I2]:e.SRC_ALPHA_SATURATE,[P2]:e.DST_COLOR,[R2]:e.DST_ALPHA,[A2]:e.ONE_MINUS_SRC_COLOR,[fh]:e.ONE_MINUS_SRC_ALPHA,[L2]:e.ONE_MINUS_DST_COLOR,[C2]:e.ONE_MINUS_DST_ALPHA,[D2]:e.CONSTANT_COLOR,[U2]:e.ONE_MINUS_CONSTANT_COLOR,[N2]:e.CONSTANT_ALPHA,[F2]:e.ONE_MINUS_CONSTANT_ALPHA};function Ie(Y,mt,wt,y,l,c,o,u,p,T){if(Y===vr){S===!0&&(kt(e.BLEND),S=!1);return}if(S===!1&&(yt(e.BLEND),S=!0),Y!==x2){if(Y!==x||T!==P){if((v!==Vr||C!==Vr)&&(e.blendEquation(e.FUNC_ADD),v=Vr,C=Vr),T)switch(Y){case Ls:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case qd:e.blendFunc(e.ONE,e.ONE);break;case Yd:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Kd:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ls:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case qd:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Yd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}O=null,U=null,V=null,k=null,j.set(0,0,0),$=0,x=Y,P=T}return}l=l||mt,c=c||wt,o=o||y,(mt!==v||l!==C)&&(e.blendEquationSeparate(xe[mt],xe[l]),v=mt,C=l),(wt!==O||y!==U||c!==V||o!==k)&&(e.blendFuncSeparate(X[wt],X[y],X[c],X[o]),O=wt,U=y,V=c,k=o),(u.equals(j)===!1||p!==$)&&(e.blendColor(u.r,u.g,u.b,p),j.copy(u),$=p),x=Y,P=!1}function Kt(Y,mt){Y.side===ji?kt(e.CULL_FACE):yt(e.CULL_FACE);let wt=Y.side===Gn;mt&&(wt=!wt),Se(wt),Y.blending===Ls&&Y.transparent===!1?Ie(vr):Ie(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),s.setMask(Y.colorWrite);const y=Y.stencilWrite;h.setTest(y),y&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),bt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?yt(e.SAMPLE_ALPHA_TO_COVERAGE):kt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(Y){I!==Y&&(Y?e.frontFace(e.CW):e.frontFace(e.CCW),I=Y)}function $t(Y){Y!==g2?(yt(e.CULL_FACE),Y!==G&&(Y===jd?e.cullFace(e.BACK):Y===_2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):kt(e.CULL_FACE),G=Y}function Fe(Y){Y!==et&&(ot&&e.lineWidth(Y),et=Y)}function bt(Y,mt,wt){Y?(yt(e.POLYGON_OFFSET_FILL),(tt!==mt||nt!==wt)&&(e.polygonOffset(mt,wt),tt=mt,nt=wt)):kt(e.POLYGON_OFFSET_FILL)}function he(Y){Y?yt(e.SCISSOR_TEST):kt(e.SCISSOR_TEST)}function Ye(Y){Y===void 0&&(Y=e.TEXTURE0+ht-1),At!==Y&&(e.activeTexture(Y),At=Y)}function be(Y,mt,wt){wt===void 0&&(At===null?wt=e.TEXTURE0+ht-1:wt=At);let y=Dt[wt];y===void 0&&(y={type:void 0,texture:void 0},Dt[wt]=y),(y.type!==Y||y.texture!==mt)&&(At!==wt&&(e.activeTexture(wt),At=wt),e.bindTexture(Y,mt||Et[Y]),y.type=Y,y.texture=mt)}function F(){const Y=Dt[At];Y!==void 0&&Y.type!==void 0&&(e.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function b(){try{e.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function J(){try{e.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function lt(){try{e.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{e.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function st(){try{e.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function jt(){try{e.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Mt(){try{e.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Bt(){try{e.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function zt(){try{e.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gt(){try{e.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pt(Y){Ne.equals(Y)===!1&&(e.scissor(Y.x,Y.y,Y.z,Y.w),Ne.copy(Y))}function ee(Y){Pe.equals(Y)===!1&&(e.viewport(Y.x,Y.y,Y.z,Y.w),Pe.copy(Y))}function Gt(Y,mt){let wt=d.get(mt);wt===void 0&&(wt=new WeakMap,d.set(mt,wt));let y=wt.get(Y);y===void 0&&(y=e.getUniformBlockIndex(mt,Y.name),wt.set(Y,y))}function Rt(Y,mt){const y=d.get(mt).get(Y);f.get(mt)!==y&&(e.uniformBlockBinding(mt,y,Y.__bindingPointIndex),f.set(mt,y))}function ae(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),m={},At=null,Dt={},g={},_=new WeakMap,M=[],E=null,S=!1,x=null,v=null,O=null,U=null,C=null,V=null,k=null,j=new se(0,0,0),$=0,P=!1,I=null,G=null,et=null,tt=null,nt=null,Ne.set(0,0,e.canvas.width,e.canvas.height),Pe.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),h.reset()}return{buffers:{color:s,depth:a,stencil:h},enable:yt,disable:kt,bindFramebuffer:te,drawBuffers:oe,useProgram:qe,setBlending:Ie,setMaterial:Kt,setFlipSided:Se,setCullFace:$t,setLineWidth:Fe,setPolygonOffset:bt,setScissorTest:he,activeTexture:Ye,bindTexture:be,unbindTexture:F,compressedTexImage2D:b,compressedTexImage3D:J,texImage2D:zt,texImage3D:gt,updateUBOMapping:Gt,uniformBlockBinding:Rt,texStorage2D:Mt,texStorage3D:Bt,texSubImage2D:lt,texSubImage3D:ft,compressedTexSubImage2D:st,compressedTexSubImage3D:jt,scissor:Pt,viewport:ee,reset:ae}}function PE(e,t,n,i,r,s,a){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new _e,m=new WeakMap;let g;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,b){return M?new OffscreenCanvas(F,b):al("canvas")}function S(F,b,J){let lt=1;const ft=be(F);if((ft.width>J||ft.height>J)&&(lt=J/Math.max(ft.width,ft.height)),lt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const st=Math.floor(lt*ft.width),jt=Math.floor(lt*ft.height);g===void 0&&(g=E(st,jt));const Mt=b?E(st,jt):g;return Mt.width=st,Mt.height=jt,Mt.getContext("2d").drawImage(F,0,0,st,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+st+"x"+jt+")."),Mt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),F;return F}function x(F){return F.generateMipmaps}function v(F){e.generateMipmap(F)}function O(F){return F.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?e.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function U(F,b,J,lt,ft=!1){if(F!==null){if(e[F]!==void 0)return e[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let st=b;if(b===e.RED&&(J===e.FLOAT&&(st=e.R32F),J===e.HALF_FLOAT&&(st=e.R16F),J===e.UNSIGNED_BYTE&&(st=e.R8)),b===e.RED_INTEGER&&(J===e.UNSIGNED_BYTE&&(st=e.R8UI),J===e.UNSIGNED_SHORT&&(st=e.R16UI),J===e.UNSIGNED_INT&&(st=e.R32UI),J===e.BYTE&&(st=e.R8I),J===e.SHORT&&(st=e.R16I),J===e.INT&&(st=e.R32I)),b===e.RG&&(J===e.FLOAT&&(st=e.RG32F),J===e.HALF_FLOAT&&(st=e.RG16F),J===e.UNSIGNED_BYTE&&(st=e.RG8)),b===e.RG_INTEGER&&(J===e.UNSIGNED_BYTE&&(st=e.RG8UI),J===e.UNSIGNED_SHORT&&(st=e.RG16UI),J===e.UNSIGNED_INT&&(st=e.RG32UI),J===e.BYTE&&(st=e.RG8I),J===e.SHORT&&(st=e.RG16I),J===e.INT&&(st=e.RG32I)),b===e.RGB_INTEGER&&(J===e.UNSIGNED_BYTE&&(st=e.RGB8UI),J===e.UNSIGNED_SHORT&&(st=e.RGB16UI),J===e.UNSIGNED_INT&&(st=e.RGB32UI),J===e.BYTE&&(st=e.RGB8I),J===e.SHORT&&(st=e.RGB16I),J===e.INT&&(st=e.RGB32I)),b===e.RGBA_INTEGER&&(J===e.UNSIGNED_BYTE&&(st=e.RGBA8UI),J===e.UNSIGNED_SHORT&&(st=e.RGBA16UI),J===e.UNSIGNED_INT&&(st=e.RGBA32UI),J===e.BYTE&&(st=e.RGBA8I),J===e.SHORT&&(st=e.RGBA16I),J===e.INT&&(st=e.RGBA32I)),b===e.RGB&&J===e.UNSIGNED_INT_5_9_9_9_REV&&(st=e.RGB9_E5),b===e.RGBA){const jt=ft?sl:we.getTransfer(lt);J===e.FLOAT&&(st=e.RGBA32F),J===e.HALF_FLOAT&&(st=e.RGBA16F),J===e.UNSIGNED_BYTE&&(st=jt===De?e.SRGB8_ALPHA8:e.RGBA8),J===e.UNSIGNED_SHORT_4_4_4_4&&(st=e.RGBA4),J===e.UNSIGNED_SHORT_5_5_5_1&&(st=e.RGB5_A1)}return(st===e.R16F||st===e.R32F||st===e.RG16F||st===e.RG32F||st===e.RGBA16F||st===e.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function C(F,b){let J;return F?b===null||b===ns||b===Xo?J=e.DEPTH24_STENCIL8:b===Ii?J=e.DEPTH32F_STENCIL8:b===Wo&&(J=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ns||b===Xo?J=e.DEPTH_COMPONENT24:b===Ii?J=e.DEPTH_COMPONENT32F:b===Wo&&(J=e.DEPTH_COMPONENT16),J}function V(F,b){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==Jn&&F.minFilter!==Li?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function k(F){const b=F.target;b.removeEventListener("dispose",k),$(b),b.isVideoTexture&&m.delete(b)}function j(F){const b=F.target;b.removeEventListener("dispose",j),I(b)}function $(F){const b=i.get(F);if(b.__webglInit===void 0)return;const J=F.source,lt=_.get(J);if(lt){const ft=lt[b.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&P(F),Object.keys(lt).length===0&&_.delete(J)}i.remove(F)}function P(F){const b=i.get(F);e.deleteTexture(b.__webglTexture);const J=F.source,lt=_.get(J);delete lt[b.__cacheKey],a.memory.textures--}function I(F){const b=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(b.__webglFramebuffer[lt]))for(let ft=0;ft<b.__webglFramebuffer[lt].length;ft++)e.deleteFramebuffer(b.__webglFramebuffer[lt][ft]);else e.deleteFramebuffer(b.__webglFramebuffer[lt]);b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer[lt])}else{if(Array.isArray(b.__webglFramebuffer))for(let lt=0;lt<b.__webglFramebuffer.length;lt++)e.deleteFramebuffer(b.__webglFramebuffer[lt]);else e.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&e.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let lt=0;lt<b.__webglColorRenderbuffer.length;lt++)b.__webglColorRenderbuffer[lt]&&e.deleteRenderbuffer(b.__webglColorRenderbuffer[lt]);b.__webglDepthRenderbuffer&&e.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=F.textures;for(let lt=0,ft=J.length;lt<ft;lt++){const st=i.get(J[lt]);st.__webglTexture&&(e.deleteTexture(st.__webglTexture),a.memory.textures--),i.remove(J[lt])}i.remove(F)}let G=0;function et(){G=0}function tt(){const F=G;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),G+=1,F}function nt(F){const b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function ht(F,b){const J=i.get(F);if(F.isVideoTexture&&he(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&J.__version!==F.version){const lt=F.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(J,F,b);return}}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,J.__webglTexture,e.TEXTURE0+b)}function ot(F,b){const J=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){Et(J,F,b);return}n.bindTexture(e.TEXTURE_2D_ARRAY,J.__webglTexture,e.TEXTURE0+b)}function xt(F,b){const J=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){Et(J,F,b);return}n.bindTexture(e.TEXTURE_3D,J.__webglTexture,e.TEXTURE0+b)}function rt(F,b){const J=i.get(F);if(F.version>0&&J.__version!==F.version){yt(J,F,b);return}n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture,e.TEXTURE0+b)}const At={[Yr]:e.REPEAT,[Kr]:e.CLAMP_TO_EDGE,[Sh]:e.MIRRORED_REPEAT},Dt={[Jn]:e.NEAREST,[j2]:e.NEAREST_MIPMAP_NEAREST,[aa]:e.NEAREST_MIPMAP_LINEAR,[Li]:e.LINEAR,[hc]:e.LINEAR_MIPMAP_NEAREST,[$r]:e.LINEAR_MIPMAP_LINEAR},Zt={[$2]:e.NEVER,[nv]:e.ALWAYS,[Z2]:e.LESS,[L0]:e.LEQUAL,[J2]:e.EQUAL,[ev]:e.GEQUAL,[Q2]:e.GREATER,[tv]:e.NOTEQUAL};function St(F,b){if(b.type===Ii&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Li||b.magFilter===hc||b.magFilter===aa||b.magFilter===$r||b.minFilter===Li||b.minFilter===hc||b.minFilter===aa||b.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(F,e.TEXTURE_WRAP_S,At[b.wrapS]),e.texParameteri(F,e.TEXTURE_WRAP_T,At[b.wrapT]),(F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY)&&e.texParameteri(F,e.TEXTURE_WRAP_R,At[b.wrapR]),e.texParameteri(F,e.TEXTURE_MAG_FILTER,Dt[b.magFilter]),e.texParameteri(F,e.TEXTURE_MIN_FILTER,Dt[b.minFilter]),b.compareFunction&&(e.texParameteri(F,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(F,e.TEXTURE_COMPARE_FUNC,Zt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Jn||b.minFilter!==aa&&b.minFilter!==$r||b.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");e.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ne(F,b){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",k));const lt=b.source;let ft=_.get(lt);ft===void 0&&(ft={},_.set(lt,ft));const st=nt(b);if(st!==F.__cacheKey){ft[st]===void 0&&(ft[st]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ft[st].usedTimes++;const jt=ft[F.__cacheKey];jt!==void 0&&(ft[F.__cacheKey].usedTimes--,jt.usedTimes===0&&P(b)),F.__cacheKey=st,F.__webglTexture=ft[st].texture}return J}function Pe(F,b,J){return Math.floor(Math.floor(F/J)/b)}function q(F,b,J,lt){const st=F.updateRanges;if(st.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,b.width,b.height,J,lt,b.data);else{st.sort((gt,Pt)=>gt.start-Pt.start);let jt=0;for(let gt=1;gt<st.length;gt++){const Pt=st[jt],ee=st[gt],Gt=Pt.start+Pt.count,Rt=Pe(ee.start,b.width,4),ae=Pe(Pt.start,b.width,4);ee.start<=Gt+1&&Rt===ae&&Pe(ee.start+ee.count-1,b.width,4)===Rt?Pt.count=Math.max(Pt.count,ee.start+ee.count-Pt.start):(++jt,st[jt]=ee)}st.length=jt+1;const Mt=e.getParameter(e.UNPACK_ROW_LENGTH),Bt=e.getParameter(e.UNPACK_SKIP_PIXELS),zt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,b.width);for(let gt=0,Pt=st.length;gt<Pt;gt++){const ee=st[gt],Gt=Math.floor(ee.start/4),Rt=Math.ceil(ee.count/4),ae=Gt%b.width,Y=Math.floor(Gt/b.width),mt=Rt,wt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(e.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(e.TEXTURE_2D,0,ae,Y,mt,wt,J,lt,b.data)}F.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,Mt),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(e.UNPACK_SKIP_ROWS,zt)}}function Et(F,b,J){let lt=e.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(lt=e.TEXTURE_2D_ARRAY),b.isData3DTexture&&(lt=e.TEXTURE_3D);const ft=Ne(F,b),st=b.source;n.bindTexture(lt,F.__webglTexture,e.TEXTURE0+J);const jt=i.get(st);if(st.version!==jt.__version||ft===!0){n.activeTexture(e.TEXTURE0+J);const Mt=we.getPrimaries(we.workingColorSpace),Bt=b.colorSpace===dr?null:we.getPrimaries(b.colorSpace),zt=b.colorSpace===dr||Mt===Bt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let gt=S(b.image,!1,r.maxTextureSize);gt=Ye(b,gt);const Pt=s.convert(b.format,b.colorSpace),ee=s.convert(b.type);let Gt=U(b.internalFormat,Pt,ee,b.colorSpace,b.isVideoTexture);St(lt,b);let Rt;const ae=b.mipmaps,Y=b.isVideoTexture!==!0,mt=jt.__version===void 0||ft===!0,wt=st.dataReady,y=V(b,gt);if(b.isDepthTexture)Gt=C(b.format===qo,b.type),mt&&(Y?n.texStorage2D(e.TEXTURE_2D,1,Gt,gt.width,gt.height):n.texImage2D(e.TEXTURE_2D,0,Gt,gt.width,gt.height,0,Pt,ee,null));else if(b.isDataTexture)if(ae.length>0){Y&&mt&&n.texStorage2D(e.TEXTURE_2D,y,Gt,ae[0].width,ae[0].height);for(let l=0,c=ae.length;l<c;l++)Rt=ae[l],Y?wt&&n.texSubImage2D(e.TEXTURE_2D,l,0,0,Rt.width,Rt.height,Pt,ee,Rt.data):n.texImage2D(e.TEXTURE_2D,l,Gt,Rt.width,Rt.height,0,Pt,ee,Rt.data);b.generateMipmaps=!1}else Y?(mt&&n.texStorage2D(e.TEXTURE_2D,y,Gt,gt.width,gt.height),wt&&q(b,gt,Pt,ee)):n.texImage2D(e.TEXTURE_2D,0,Gt,gt.width,gt.height,0,Pt,ee,gt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Y&&mt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,Gt,ae[0].width,ae[0].height,gt.depth);for(let l=0,c=ae.length;l<c;l++)if(Rt=ae[l],b.format!==hi)if(Pt!==null)if(Y){if(wt)if(b.layerUpdates.size>0){const o=Pp(Rt.width,Rt.height,b.format,b.type);for(const u of b.layerUpdates){const p=Rt.data.subarray(u*o/Rt.data.BYTES_PER_ELEMENT,(u+1)*o/Rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,l,0,0,u,Rt.width,Rt.height,1,Pt,p)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,l,0,0,0,Rt.width,Rt.height,gt.depth,Pt,Rt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,l,Gt,Rt.width,Rt.height,gt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?wt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,l,0,0,0,Rt.width,Rt.height,gt.depth,Pt,ee,Rt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,l,Gt,Rt.width,Rt.height,gt.depth,0,Pt,ee,Rt.data)}else{Y&&mt&&n.texStorage2D(e.TEXTURE_2D,y,Gt,ae[0].width,ae[0].height);for(let l=0,c=ae.length;l<c;l++)Rt=ae[l],b.format!==hi?Pt!==null?Y?wt&&n.compressedTexSubImage2D(e.TEXTURE_2D,l,0,0,Rt.width,Rt.height,Pt,Rt.data):n.compressedTexImage2D(e.TEXTURE_2D,l,Gt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?wt&&n.texSubImage2D(e.TEXTURE_2D,l,0,0,Rt.width,Rt.height,Pt,ee,Rt.data):n.texImage2D(e.TEXTURE_2D,l,Gt,Rt.width,Rt.height,0,Pt,ee,Rt.data)}else if(b.isDataArrayTexture)if(Y){if(mt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,Gt,gt.width,gt.height,gt.depth),wt)if(b.layerUpdates.size>0){const l=Pp(gt.width,gt.height,b.format,b.type);for(const c of b.layerUpdates){const o=gt.data.subarray(c*l/gt.data.BYTES_PER_ELEMENT,(c+1)*l/gt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,c,gt.width,gt.height,1,Pt,ee,o)}b.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Pt,ee,gt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Gt,gt.width,gt.height,gt.depth,0,Pt,ee,gt.data);else if(b.isData3DTexture)Y?(mt&&n.texStorage3D(e.TEXTURE_3D,y,Gt,gt.width,gt.height,gt.depth),wt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Pt,ee,gt.data)):n.texImage3D(e.TEXTURE_3D,0,Gt,gt.width,gt.height,gt.depth,0,Pt,ee,gt.data);else if(b.isFramebufferTexture){if(mt)if(Y)n.texStorage2D(e.TEXTURE_2D,y,Gt,gt.width,gt.height);else{let l=gt.width,c=gt.height;for(let o=0;o<y;o++)n.texImage2D(e.TEXTURE_2D,o,Gt,l,c,0,Pt,ee,null),l>>=1,c>>=1}}else if(ae.length>0){if(Y&&mt){const l=be(ae[0]);n.texStorage2D(e.TEXTURE_2D,y,Gt,l.width,l.height)}for(let l=0,c=ae.length;l<c;l++)Rt=ae[l],Y?wt&&n.texSubImage2D(e.TEXTURE_2D,l,0,0,Pt,ee,Rt):n.texImage2D(e.TEXTURE_2D,l,Gt,Pt,ee,Rt);b.generateMipmaps=!1}else if(Y){if(mt){const l=be(gt);n.texStorage2D(e.TEXTURE_2D,y,Gt,l.width,l.height)}wt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Pt,ee,gt)}else n.texImage2D(e.TEXTURE_2D,0,Gt,Pt,ee,gt);x(b)&&v(lt),jt.__version=st.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function yt(F,b,J){if(b.image.length!==6)return;const lt=Ne(F,b),ft=b.source;n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+J);const st=i.get(ft);if(ft.version!==st.__version||lt===!0){n.activeTexture(e.TEXTURE0+J);const jt=we.getPrimaries(we.workingColorSpace),Mt=b.colorSpace===dr?null:we.getPrimaries(b.colorSpace),Bt=b.colorSpace===dr||jt===Mt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const zt=b.isCompressedTexture||b.image[0].isCompressedTexture,gt=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let c=0;c<6;c++)!zt&&!gt?Pt[c]=S(b.image[c],!0,r.maxCubemapSize):Pt[c]=gt?b.image[c].image:b.image[c],Pt[c]=Ye(b,Pt[c]);const ee=Pt[0],Gt=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type),ae=U(b.internalFormat,Gt,Rt,b.colorSpace),Y=b.isVideoTexture!==!0,mt=st.__version===void 0||lt===!0,wt=ft.dataReady;let y=V(b,ee);St(e.TEXTURE_CUBE_MAP,b);let l;if(zt){Y&&mt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,y,ae,ee.width,ee.height);for(let c=0;c<6;c++){l=Pt[c].mipmaps;for(let o=0;o<l.length;o++){const u=l[o];b.format!==hi?Gt!==null?Y?wt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,o,0,0,u.width,u.height,Gt,u.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,o,ae,u.width,u.height,0,u.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?wt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,o,0,0,u.width,u.height,Gt,Rt,u.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,o,ae,u.width,u.height,0,Gt,Rt,u.data)}}}else{if(l=b.mipmaps,Y&&mt){l.length>0&&y++;const c=be(Pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,y,ae,c.width,c.height)}for(let c=0;c<6;c++)if(gt){Y?wt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,0,0,Pt[c].width,Pt[c].height,Gt,Rt,Pt[c].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,ae,Pt[c].width,Pt[c].height,0,Gt,Rt,Pt[c].data);for(let o=0;o<l.length;o++){const p=l[o].image[c].image;Y?wt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,o+1,0,0,p.width,p.height,Gt,Rt,p.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,o+1,ae,p.width,p.height,0,Gt,Rt,p.data)}}else{Y?wt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,0,0,Gt,Rt,Pt[c]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,ae,Gt,Rt,Pt[c]);for(let o=0;o<l.length;o++){const u=l[o];Y?wt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,o+1,0,0,Gt,Rt,u.image[c]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+c,o+1,ae,Gt,Rt,u.image[c])}}}x(b)&&v(e.TEXTURE_CUBE_MAP),st.__version=ft.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function kt(F,b,J,lt,ft,st){const jt=s.convert(J.format,J.colorSpace),Mt=s.convert(J.type),Bt=U(J.internalFormat,jt,Mt,J.colorSpace),zt=i.get(b),gt=i.get(J);if(gt.__renderTarget=b,!zt.__hasExternalTextures){const Pt=Math.max(1,b.width>>st),ee=Math.max(1,b.height>>st);ft===e.TEXTURE_3D||ft===e.TEXTURE_2D_ARRAY?n.texImage3D(ft,st,Bt,Pt,ee,b.depth,0,jt,Mt,null):n.texImage2D(ft,st,Bt,Pt,ee,0,jt,Mt,null)}n.bindFramebuffer(e.FRAMEBUFFER,F),bt(b)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,ft,gt.__webglTexture,0,Fe(b)):(ft===e.TEXTURE_2D||ft>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,lt,ft,gt.__webglTexture,st),n.bindFramebuffer(e.FRAMEBUFFER,null)}function te(F,b,J){if(e.bindRenderbuffer(e.RENDERBUFFER,F),b.depthBuffer){const lt=b.depthTexture,ft=lt&&lt.isDepthTexture?lt.type:null,st=C(b.stencilBuffer,ft),jt=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=Fe(b);bt(b)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Mt,st,b.width,b.height):J?e.renderbufferStorageMultisample(e.RENDERBUFFER,Mt,st,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,st,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,jt,e.RENDERBUFFER,F)}else{const lt=b.textures;for(let ft=0;ft<lt.length;ft++){const st=lt[ft],jt=s.convert(st.format,st.colorSpace),Mt=s.convert(st.type),Bt=U(st.internalFormat,jt,Mt,st.colorSpace),zt=Fe(b);J&&bt(b)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,zt,Bt,b.width,b.height):bt(b)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,zt,Bt,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,Bt,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function oe(F,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=i.get(b.depthTexture);lt.__renderTarget=b,(!lt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ht(b.depthTexture,0);const ft=lt.__webglTexture,st=Fe(b);if(b.depthTexture.format===jo)bt(b)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ft,0,st):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ft,0);else if(b.depthTexture.format===qo)bt(b)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ft,0,st):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function qe(F){const b=i.get(F),J=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){const lt=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),lt){const ft=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,lt.removeEventListener("dispose",ft)};lt.addEventListener("dispose",ft),b.__depthDisposeCallback=ft}b.__boundDepthTexture=lt}if(F.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const lt=F.texture.mipmaps;lt&&lt.length>0?oe(b.__webglFramebuffer[0],F):oe(b.__webglFramebuffer,F)}else if(J){b.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[lt]),b.__webglDepthbuffer[lt]===void 0)b.__webglDepthbuffer[lt]=e.createRenderbuffer(),te(b.__webglDepthbuffer[lt],F,!1);else{const ft=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer[lt];e.bindRenderbuffer(e.RENDERBUFFER,st),e.framebufferRenderbuffer(e.FRAMEBUFFER,ft,e.RENDERBUFFER,st)}}else{const lt=F.texture.mipmaps;if(lt&&lt.length>0?n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=e.createRenderbuffer(),te(b.__webglDepthbuffer,F,!1);else{const ft=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,st),e.framebufferRenderbuffer(e.FRAMEBUFFER,ft,e.RENDERBUFFER,st)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(F,b,J){const lt=i.get(F);b!==void 0&&kt(lt.__webglFramebuffer,F,F.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),J!==void 0&&qe(F)}function X(F){const b=F.texture,J=i.get(F),lt=i.get(b);F.addEventListener("dispose",j);const ft=F.textures,st=F.isWebGLCubeRenderTarget===!0,jt=ft.length>1;if(jt||(lt.__webglTexture===void 0&&(lt.__webglTexture=e.createTexture()),lt.__version=b.version,a.memory.textures++),st){J.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Mt]=[];for(let Bt=0;Bt<b.mipmaps.length;Bt++)J.__webglFramebuffer[Mt][Bt]=e.createFramebuffer()}else J.__webglFramebuffer[Mt]=e.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)J.__webglFramebuffer[Mt]=e.createFramebuffer()}else J.__webglFramebuffer=e.createFramebuffer();if(jt)for(let Mt=0,Bt=ft.length;Mt<Bt;Mt++){const zt=i.get(ft[Mt]);zt.__webglTexture===void 0&&(zt.__webglTexture=e.createTexture(),a.memory.textures++)}if(F.samples>0&&bt(F)===!1){J.__webglMultisampledFramebuffer=e.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ft.length;Mt++){const Bt=ft[Mt];J.__webglColorRenderbuffer[Mt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,J.__webglColorRenderbuffer[Mt]);const zt=s.convert(Bt.format,Bt.colorSpace),gt=s.convert(Bt.type),Pt=U(Bt.internalFormat,zt,gt,Bt.colorSpace,F.isXRRenderTarget===!0),ee=Fe(F);e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,Pt,F.width,F.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Mt,e.RENDERBUFFER,J.__webglColorRenderbuffer[Mt])}e.bindRenderbuffer(e.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=e.createRenderbuffer(),te(J.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(st){n.bindTexture(e.TEXTURE_CUBE_MAP,lt.__webglTexture),St(e.TEXTURE_CUBE_MAP,b);for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Bt=0;Bt<b.mipmaps.length;Bt++)kt(J.__webglFramebuffer[Mt][Bt],F,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Bt);else kt(J.__webglFramebuffer[Mt],F,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);x(b)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(jt){for(let Mt=0,Bt=ft.length;Mt<Bt;Mt++){const zt=ft[Mt],gt=i.get(zt);let Pt=e.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Pt=F.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Pt,gt.__webglTexture),St(Pt,zt),kt(J.__webglFramebuffer,F,zt,e.COLOR_ATTACHMENT0+Mt,Pt,0),x(zt)&&v(Pt)}n.unbindTexture()}else{let Mt=e.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Mt=F.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Mt,lt.__webglTexture),St(Mt,b),b.mipmaps&&b.mipmaps.length>0)for(let Bt=0;Bt<b.mipmaps.length;Bt++)kt(J.__webglFramebuffer[Bt],F,b,e.COLOR_ATTACHMENT0,Mt,Bt);else kt(J.__webglFramebuffer,F,b,e.COLOR_ATTACHMENT0,Mt,0);x(b)&&v(Mt),n.unbindTexture()}F.depthBuffer&&qe(F)}function Ie(F){const b=F.textures;for(let J=0,lt=b.length;J<lt;J++){const ft=b[J];if(x(ft)){const st=O(F),jt=i.get(ft).__webglTexture;n.bindTexture(st,jt),v(st),n.unbindTexture()}}}const Kt=[],Se=[];function $t(F){if(F.samples>0){if(bt(F)===!1){const b=F.textures,J=F.width,lt=F.height;let ft=e.COLOR_BUFFER_BIT;const st=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,jt=i.get(F),Mt=b.length>1;if(Mt)for(let zt=0;zt<b.length;zt++)n.bindFramebuffer(e.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,jt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Bt=F.texture.mipmaps;Bt&&Bt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let zt=0;zt<b.length;zt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ft|=e.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ft|=e.STENCIL_BUFFER_BIT)),Mt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,jt.__webglColorRenderbuffer[zt]);const gt=i.get(b[zt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,gt,0)}e.blitFramebuffer(0,0,J,lt,0,0,J,lt,ft,e.NEAREST),f===!0&&(Kt.length=0,Se.length=0,Kt.push(e.COLOR_ATTACHMENT0+zt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Kt.push(st),Se.push(st),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Se)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Kt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Mt)for(let zt=0;zt<b.length;zt++){n.bindFramebuffer(e.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.RENDERBUFFER,jt.__webglColorRenderbuffer[zt]);const gt=i.get(b[zt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,jt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.TEXTURE_2D,gt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&f){const b=F.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[b])}}}function Fe(F){return Math.min(r.maxSamples,F.samples)}function bt(F){const b=i.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(F){const b=a.render.frame;m.get(F)!==b&&(m.set(F,b),F.update())}function Ye(F,b){const J=F.colorSpace,lt=F.format,ft=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==Ks&&J!==dr&&(we.getTransfer(J)===De?(lt!==hi||ft!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function be(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=tt,this.resetTextureUnits=et,this.setTexture2D=ht,this.setTexture2DArray=ot,this.setTexture3D=xt,this.setTextureCube=rt,this.rebindTextures=xe,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=bt}function LE(e,t){function n(i,r=dr){let s;const a=we.getTransfer(r);if(i===xi)return e.UNSIGNED_BYTE;if(i===nf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===rf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===b0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===w0)return e.BYTE;if(i===T0)return e.SHORT;if(i===Wo)return e.UNSIGNED_SHORT;if(i===ef)return e.INT;if(i===ns)return e.UNSIGNED_INT;if(i===Ii)return e.FLOAT;if(i===lo)return e.HALF_FLOAT;if(i===A0)return e.ALPHA;if(i===R0)return e.RGB;if(i===hi)return e.RGBA;if(i===jo)return e.DEPTH_COMPONENT;if(i===qo)return e.DEPTH_STENCIL;if(i===sf)return e.RED;if(i===of)return e.RED_INTEGER;if(i===C0)return e.RG;if(i===af)return e.RG_INTEGER;if(i===lf)return e.RGBA_INTEGER;if(i===Wa||i===Xa||i===ja||i===qa)if(a===De)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eh||i===wh||i===Th||i===bh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Eh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Th)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ah||i===Rh||i===Ch)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ah||i===Rh)return a===De?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ch)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ph||i===Lh||i===Ih||i===Dh||i===Uh||i===Nh||i===Fh||i===Oh||i===Bh||i===kh||i===zh||i===Gh||i===Vh||i===Hh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ph)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ih)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hh)return a===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ya||i===Wh||i===Xh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ya)return a===De?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===P0||i===jh||i===qh||i===Yh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ya)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class Q0 extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const IE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DE=`
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

}`;class UE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new Q0(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Tr({vertexShader:IE,fragmentShader:DE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Cn(new ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NE extends rs{constructor(t,n){super();const i=this;let r=null,s=1,a=null,h="local-floor",f=1,d=null,m=null,g=null,_=null,M=null,E=null;const S=new UE,x={},v=n.getContextAttributes();let O=null,U=null;const C=[],V=[],k=new _e;let j=null;const $=new $n;$.viewport=new Xe;const P=new $n;P.viewport=new Xe;const I=[$,P],G=new nx;let et=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Et=C[q];return Et===void 0&&(Et=new Lc,C[q]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(q){let Et=C[q];return Et===void 0&&(Et=new Lc,C[q]=Et),Et.getGripSpace()},this.getHand=function(q){let Et=C[q];return Et===void 0&&(Et=new Lc,C[q]=Et),Et.getHandSpace()};function nt(q){const Et=V.indexOf(q.inputSource);if(Et===-1)return;const yt=C[Et];yt!==void 0&&(yt.update(q.inputSource,q.frame,d||a),yt.dispatchEvent({type:q.type,data:q.inputSource}))}function ht(){r.removeEventListener("select",nt),r.removeEventListener("selectstart",nt),r.removeEventListener("selectend",nt),r.removeEventListener("squeeze",nt),r.removeEventListener("squeezestart",nt),r.removeEventListener("squeezeend",nt),r.removeEventListener("end",ht),r.removeEventListener("inputsourceschange",ot);for(let q=0;q<C.length;q++){const Et=V[q];Et!==null&&(V[q]=null,C[q].disconnect(Et))}et=null,tt=null,S.reset();for(const q in x)delete x[q];t.setRenderTarget(O),M=null,_=null,g=null,r=null,U=null,Pe.stop(),i.isPresenting=!1,t.setPixelRatio(j),t.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(O=t.getRenderTarget(),r.addEventListener("select",nt),r.addEventListener("selectstart",nt),r.addEventListener("selectend",nt),r.addEventListener("squeeze",nt),r.addEventListener("squeezestart",nt),r.addEventListener("squeezeend",nt),r.addEventListener("end",ht),r.addEventListener("inputsourceschange",ot),v.xrCompatible!==!0&&await n.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(r,n)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,kt=null,te=null;v.depth&&(te=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=v.stencil?qo:jo,kt=v.stencil?Xo:ns);const oe={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:s};_=g.createProjectionLayer(oe),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new wr(_.textureWidth,_.textureHeight,{format:hi,type:xi,depthTexture:new H0(_.textureWidth,_.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};M=new XRWebGLLayer(r,n,yt),r.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new wr(M.framebufferWidth,M.framebufferHeight,{format:hi,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(f),d=null,a=await r.requestReferenceSpace(h),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ot(q){for(let Et=0;Et<q.removed.length;Et++){const yt=q.removed[Et],kt=V.indexOf(yt);kt>=0&&(V[kt]=null,C[kt].disconnect(yt))}for(let Et=0;Et<q.added.length;Et++){const yt=q.added[Et];let kt=V.indexOf(yt);if(kt===-1){for(let oe=0;oe<C.length;oe++)if(oe>=V.length){V.push(yt),kt=oe;break}else if(V[oe]===null){V[oe]=yt,kt=oe;break}if(kt===-1)break}const te=C[kt];te&&te.connect(yt)}}const xt=new Z,rt=new Z;function At(q,Et,yt){xt.setFromMatrixPosition(Et.matrixWorld),rt.setFromMatrixPosition(yt.matrixWorld);const kt=xt.distanceTo(rt),te=Et.projectionMatrix.elements,oe=yt.projectionMatrix.elements,qe=te[14]/(te[10]-1),xe=te[14]/(te[10]+1),X=(te[9]+1)/te[5],Ie=(te[9]-1)/te[5],Kt=(te[8]-1)/te[0],Se=(oe[8]+1)/oe[0],$t=qe*Kt,Fe=qe*Se,bt=kt/(-Kt+Se),he=bt*-Kt;if(Et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(he),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),te[10]===-1)q.projectionMatrix.copy(Et.projectionMatrix),q.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{const Ye=qe+bt,be=xe+bt,F=$t-he,b=Fe+(kt-he),J=X*xe/be*Ye,lt=Ie*xe/be*Ye;q.projectionMatrix.makePerspective(F,b,J,lt,Ye,be),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Dt(q,Et){Et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Et=q.near,yt=q.far;S.texture!==null&&(S.depthNear>0&&(Et=S.depthNear),S.depthFar>0&&(yt=S.depthFar)),G.near=P.near=$.near=Et,G.far=P.far=$.far=yt,(et!==G.near||tt!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),et=G.near,tt=G.far),G.layers.mask=q.layers.mask|6,$.layers.mask=G.layers.mask&3,P.layers.mask=G.layers.mask&5;const kt=q.parent,te=G.cameras;Dt(G,kt);for(let oe=0;oe<te.length;oe++)Dt(te[oe],kt);te.length===2?At(G,$,P):G.projectionMatrix.copy($.projectionMatrix),Zt(q,G,kt)};function Zt(q,Et,yt){yt===null?q.matrix.copy(Et.matrixWorld):(q.matrix.copy(yt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Et.projectionMatrix),q.projectionMatrixInverse.copy(Et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$s*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(_===null&&M===null))return f},this.setFoveation=function(q){f=q,_!==null&&(_.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(G)},this.getCameraTexture=function(q){return x[q]};let St=null;function Ne(q,Et){if(m=Et.getViewerPose(d||a),E=Et,m!==null){const yt=m.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let kt=!1;yt.length!==G.cameras.length&&(G.cameras.length=0,kt=!0);for(let xe=0;xe<yt.length;xe++){const X=yt[xe];let Ie=null;if(M!==null)Ie=M.getViewport(X);else{const Se=g.getViewSubImage(_,X);Ie=Se.viewport,xe===0&&(t.setRenderTargetTextures(U,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(U))}let Kt=I[xe];Kt===void 0&&(Kt=new $n,Kt.layers.enable(xe),Kt.viewport=new Xe,I[xe]=Kt),Kt.matrix.fromArray(X.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(X.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),xe===0&&(G.matrix.copy(Kt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),kt===!0&&G.cameras.push(Kt)}const te=r.enabledFeatures;if(te&&te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){const xe=g.getDepthInformation(yt[0]);xe&&xe.isValid&&xe.texture&&S.init(xe,r.renderState)}if(te&&te.includes("camera-access")&&(t.state.unbindTexture(),g))for(let xe=0;xe<yt.length;xe++){const X=yt[xe].camera;if(X){let Ie=x[X];Ie||(Ie=new Q0,x[X]=Ie);const Kt=g.getCameraImage(X);Ie.sourceTexture=Kt}}}for(let yt=0;yt<C.length;yt++){const kt=V[yt],te=C[yt];kt!==null&&te!==void 0&&te.update(kt,Et,d||a)}St&&St(q,Et),Et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Et}),E=null}const Pe=new Y0;Pe.setAnimationLoop(Ne),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}}const kr=new yi,FE=new Ue;function OE(e,t){function n(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function i(x,v){v.color.getRGB(x.fogColor.value,O0(e)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function r(x,v,O,U,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(x,v):v.isMeshToonMaterial?(s(x,v),g(x,v)):v.isMeshPhongMaterial?(s(x,v),m(x,v)):v.isMeshStandardMaterial?(s(x,v),_(x,v),v.isMeshPhysicalMaterial&&M(x,v,C)):v.isMeshMatcapMaterial?(s(x,v),E(x,v)):v.isMeshDepthMaterial?s(x,v):v.isMeshDistanceMaterial?(s(x,v),S(x,v)):v.isMeshNormalMaterial?s(x,v):v.isLineBasicMaterial?(a(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?f(x,v,O,U):v.isSpriteMaterial?d(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,n(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Gn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,n(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Gn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,n(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,n(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const O=t.get(v),U=O.envMap,C=O.envMapRotation;U&&(x.envMap.value=U,kr.copy(C),kr.x*=-1,kr.y*=-1,kr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),x.envMapRotation.value.setFromMatrix4(FE.makeRotationFromEuler(kr)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,x.aoMapTransform))}function a(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform))}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function f(x,v,O,U){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*O,x.scale.value=U*.5,v.map&&(x.map.value=v.map,n(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,O){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=O.texture,x.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function S(x,v){const O=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(O.matrixWorld),x.nearDistance.value=O.shadow.camera.near,x.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BE(e,t,n,i){let r={},s={},a=[];const h=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function f(O,U){const C=U.program;i.uniformBlockBinding(O,C)}function d(O,U){let C=r[O.id];C===void 0&&(E(O),C=m(O),r[O.id]=C,O.addEventListener("dispose",x));const V=U.program;i.updateUBOMapping(O,V);const k=t.render.frame;s[O.id]!==k&&(_(O),s[O.id]=k)}function m(O){const U=g();O.__bindingPointIndex=U;const C=e.createBuffer(),V=O.__size,k=O.usage;return e.bindBuffer(e.UNIFORM_BUFFER,C),e.bufferData(e.UNIFORM_BUFFER,V,k),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,U,C),C}function g(){for(let O=0;O<h;O++)if(a.indexOf(O)===-1)return a.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const U=r[O.id],C=O.uniforms,V=O.__cache;e.bindBuffer(e.UNIFORM_BUFFER,U);for(let k=0,j=C.length;k<j;k++){const $=Array.isArray(C[k])?C[k]:[C[k]];for(let P=0,I=$.length;P<I;P++){const G=$[P];if(M(G,k,P,V)===!0){const et=G.__offset,tt=Array.isArray(G.value)?G.value:[G.value];let nt=0;for(let ht=0;ht<tt.length;ht++){const ot=tt[ht],xt=S(ot);typeof ot=="number"||typeof ot=="boolean"?(G.__data[0]=ot,e.bufferSubData(e.UNIFORM_BUFFER,et+nt,G.__data)):ot.isMatrix3?(G.__data[0]=ot.elements[0],G.__data[1]=ot.elements[1],G.__data[2]=ot.elements[2],G.__data[3]=0,G.__data[4]=ot.elements[3],G.__data[5]=ot.elements[4],G.__data[6]=ot.elements[5],G.__data[7]=0,G.__data[8]=ot.elements[6],G.__data[9]=ot.elements[7],G.__data[10]=ot.elements[8],G.__data[11]=0):(ot.toArray(G.__data,nt),nt+=xt.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,et,G.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function M(O,U,C,V){const k=O.value,j=U+"_"+C;if(V[j]===void 0)return typeof k=="number"||typeof k=="boolean"?V[j]=k:V[j]=k.clone(),!0;{const $=V[j];if(typeof k=="number"||typeof k=="boolean"){if($!==k)return V[j]=k,!0}else if($.equals(k)===!1)return $.copy(k),!0}return!1}function E(O){const U=O.uniforms;let C=0;const V=16;for(let j=0,$=U.length;j<$;j++){const P=Array.isArray(U[j])?U[j]:[U[j]];for(let I=0,G=P.length;I<G;I++){const et=P[I],tt=Array.isArray(et.value)?et.value:[et.value];for(let nt=0,ht=tt.length;nt<ht;nt++){const ot=tt[nt],xt=S(ot),rt=C%V,At=rt%xt.boundary,Dt=rt+At;C+=At,Dt!==0&&V-Dt<xt.storage&&(C+=V-Dt),et.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=C,C+=xt.storage}}}const k=C%V;return k>0&&(C+=V-k),O.__size=C,O.__cache={},this}function S(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function x(O){const U=O.target;U.removeEventListener("dispose",x);const C=a.indexOf(U.__bindingPointIndex);a.splice(C,1),e.deleteBuffer(r[U.id]),delete r[U.id],delete s[U.id]}function v(){for(const O in r)e.deleteBuffer(r[O]);a=[],r={},s={}}return{bind:f,update:d,dispose:v}}class R3{constructor(t={}){const{canvas:n=xv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=a;const E=new Uint32Array(4),S=new Int32Array(4);let x=null,v=null;const O=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let V=!1;this._outputColorSpace=ai;let k=0,j=0,$=null,P=-1,I=null;const G=new Xe,et=new Xe;let tt=null;const nt=new se(0);let ht=0,ot=n.width,xt=n.height,rt=1,At=null,Dt=null;const Zt=new Xe(0,0,ot,xt),St=new Xe(0,0,ot,xt);let Ne=!1;const Pe=new mf;let q=!1,Et=!1;const yt=new Ue,kt=new Z,te=new Xe,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function xe(){return $===null?rt:1}let X=i;function Ie(A,w){return n.getContext(A,w)}try{const A={alpha:!0,depth:r,stencil:s,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qu}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",y,!1),n.addEventListener("webglcontextcreationerror",l,!1),X===null){const w="webgl2";if(X=Ie(w,A),X===null)throw Ie(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Kt,Se,$t,Fe,bt,he,Ye,be,F,b,J,lt,ft,st,jt,Mt,Bt,zt,gt,Pt,ee,Gt,Rt,ae;function Y(){Kt=new KM(X),Kt.init(),Gt=new LE(X,Kt),Se=new VM(X,Kt,t,Gt),$t=new CE(X,Kt),Se.reversedDepthBuffer&&_&&$t.buffers.depth.setReversed(!0),Fe=new JM(X),bt=new gE,he=new PE(X,Kt,$t,bt,Se,Gt,Fe),Ye=new WM(C),be=new YM(C),F=new rx(X),Rt=new zM(X,F),b=new $M(X,F,Fe,Rt),J=new tS(X,b,F,Fe),gt=new QM(X,Se,he),Mt=new HM(bt),lt=new mE(C,Ye,be,Kt,Se,Rt,Mt),ft=new OE(C,bt),st=new vE,jt=new wE(Kt),zt=new kM(C,Ye,be,$t,J,M,f),Bt=new AE(C,J,Se),ae=new BE(X,Fe,Se,$t),Pt=new GM(X,Kt,Fe),ee=new ZM(X,Kt,Fe),Fe.programs=lt.programs,C.capabilities=Se,C.extensions=Kt,C.properties=bt,C.renderLists=st,C.shadowMap=Bt,C.state=$t,C.info=Fe}Y();const mt=new NE(C,X);this.xr=mt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=Kt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Kt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(A){A!==void 0&&(rt=A,this.setSize(ot,xt,!1))},this.getSize=function(A){return A.set(ot,xt)},this.setSize=function(A,w,B=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=A,xt=w,n.width=Math.floor(A*rt),n.height=Math.floor(w*rt),B===!0&&(n.style.width=A+"px",n.style.height=w+"px"),this.setViewport(0,0,A,w)},this.getDrawingBufferSize=function(A){return A.set(ot*rt,xt*rt).floor()},this.setDrawingBufferSize=function(A,w,B){ot=A,xt=w,rt=B,n.width=Math.floor(A*B),n.height=Math.floor(w*B),this.setViewport(0,0,A,w)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(Zt)},this.setViewport=function(A,w,B,W){A.isVector4?Zt.set(A.x,A.y,A.z,A.w):Zt.set(A,w,B,W),$t.viewport(G.copy(Zt).multiplyScalar(rt).round())},this.getScissor=function(A){return A.copy(St)},this.setScissor=function(A,w,B,W){A.isVector4?St.set(A.x,A.y,A.z,A.w):St.set(A,w,B,W),$t.scissor(et.copy(St).multiplyScalar(rt).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){$t.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){At=A},this.setTransparentSort=function(A){Dt=A},this.getClearColor=function(A){return A.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(A=!0,w=!0,B=!0){let W=0;if(A){let N=!1;if($!==null){const ct=$.texture.format;N=ct===lf||ct===af||ct===of}if(N){const ct=$.texture.type,ut=ct===xi||ct===ns||ct===Wo||ct===Xo||ct===nf||ct===rf,vt=zt.getClearColor(),_t=zt.getClearAlpha(),Ut=vt.r,Ht=vt.g,Lt=vt.b;ut?(E[0]=Ut,E[1]=Ht,E[2]=Lt,E[3]=_t,X.clearBufferuiv(X.COLOR,0,E)):(S[0]=Ut,S[1]=Ht,S[2]=Lt,S[3]=_t,X.clearBufferiv(X.COLOR,0,S))}else W|=X.COLOR_BUFFER_BIT}w&&(W|=X.DEPTH_BUFFER_BIT),B&&(W|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",y,!1),n.removeEventListener("webglcontextcreationerror",l,!1),zt.dispose(),st.dispose(),jt.dispose(),bt.dispose(),Ye.dispose(),be.dispose(),J.dispose(),Rt.dispose(),ae.dispose(),lt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",L),mt.removeEventListener("sessionend",D),K.stop()};function wt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function y(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=Fe.autoReset,w=Bt.enabled,B=Bt.autoUpdate,W=Bt.needsUpdate,N=Bt.type;Y(),Fe.autoReset=A,Bt.enabled=w,Bt.autoUpdate=B,Bt.needsUpdate=W,Bt.type=N}function l(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function c(A){const w=A.target;w.removeEventListener("dispose",c),o(w)}function o(A){u(A),bt.remove(A)}function u(A){const w=bt.get(A).programs;w!==void 0&&(w.forEach(function(B){lt.releaseProgram(B)}),A.isShaderMaterial&&lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,w,B,W,N,ct){w===null&&(w=oe);const ut=N.isMesh&&N.matrixWorld.determinant()<0,vt=It(A,w,B,W,N);$t.setMaterial(W,ut);let _t=B.index,Ut=1;if(W.wireframe===!0){if(_t=b.getWireframeAttribute(B),_t===void 0)return;Ut=2}const Ht=B.drawRange,Lt=B.attributes.position;let re=Ht.start*Ut,ge=(Ht.start+Ht.count)*Ut;ct!==null&&(re=Math.max(re,ct.start*Ut),ge=Math.min(ge,(ct.start+ct.count)*Ut)),_t!==null?(re=Math.max(re,0),ge=Math.min(ge,_t.count)):Lt!=null&&(re=Math.max(re,0),ge=Math.min(ge,Lt.count));const Wt=ge-re;if(Wt<0||Wt===1/0)return;Rt.setup(N,W,vt,B,_t);let le,ue=Pt;if(_t!==null&&(le=F.get(_t),ue=ee,ue.setIndex(le)),N.isMesh)W.wireframe===!0?($t.setLineWidth(W.wireframeLinewidth*xe()),ue.setMode(X.LINES)):ue.setMode(X.TRIANGLES);else if(N.isLine){let Ft=W.linewidth;Ft===void 0&&(Ft=1),$t.setLineWidth(Ft*xe()),N.isLineSegments?ue.setMode(X.LINES):N.isLineLoop?ue.setMode(X.LINE_LOOP):ue.setMode(X.LINE_STRIP)}else N.isPoints?ue.setMode(X.POINTS):N.isSprite&&ue.setMode(X.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Is("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))ue.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ft=N._multiDrawStarts,ce=N._multiDrawCounts,Me=N._multiDrawCount,Sn=_t?F.get(_t).bytesPerElement:1,er=bt.get(W).currentProgram.getUniforms();for(let En=0;En<Me;En++)er.setValue(X,"_gl_DrawID",En),ue.render(Ft[En]/Sn,ce[En])}else if(N.isInstancedMesh)ue.renderInstances(re,Wt,N.count);else if(B.isInstancedBufferGeometry){const Ft=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ce=Math.min(B.instanceCount,Ft);ue.renderInstances(re,Wt,ce)}else ue.render(re,Wt)};function p(A,w,B){A.transparent===!0&&A.side===ji&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Tt(A,w,B),A.side=Er,A.needsUpdate=!0,Tt(A,w,B),A.side=ji):Tt(A,w,B)}this.compile=function(A,w,B=null){B===null&&(B=A),v=jt.get(B),v.init(w),U.push(v),B.traverseVisible(function(N){N.isLight&&N.layers.test(w.layers)&&(v.pushLight(N),N.castShadow&&v.pushShadow(N))}),A!==B&&A.traverseVisible(function(N){N.isLight&&N.layers.test(w.layers)&&(v.pushLight(N),N.castShadow&&v.pushShadow(N))}),v.setupLights();const W=new Set;return A.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ct=N.material;if(ct)if(Array.isArray(ct))for(let ut=0;ut<ct.length;ut++){const vt=ct[ut];p(vt,B,N),W.add(vt)}else p(ct,B,N),W.add(ct)}),v=U.pop(),W},this.compileAsync=function(A,w,B=null){const W=this.compile(A,w,B);return new Promise(N=>{function ct(){if(W.forEach(function(ut){bt.get(ut).currentProgram.isReady()&&W.delete(ut)}),W.size===0){N(A);return}setTimeout(ct,10)}Kt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let T=null;function R(A){T&&T(A)}function L(){K.stop()}function D(){K.start()}const K=new Y0;K.setAnimationLoop(R),typeof self<"u"&&K.setContext(self),this.setAnimationLoop=function(A){T=A,mt.setAnimationLoop(A),A===null?K.stop():K.start()},mt.addEventListener("sessionstart",L),mt.addEventListener("sessionend",D),this.render=function(A,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(w),w=mt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,w,$),v=jt.get(A,U.length),v.init(w),U.push(v),yt.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),Pe.setFromProjectionMatrix(yt,Di,w.reversedDepth),Et=this.localClippingEnabled,q=Mt.init(this.clippingPlanes,Et),x=st.get(A,O.length),x.init(),O.push(x),mt.enabled===!0&&mt.isPresenting===!0){const ct=C.xr.getDepthSensingMesh();ct!==null&&z(ct,w,-1/0,C.sortObjects)}z(A,w,0,C.sortObjects),x.finish(),C.sortObjects===!0&&x.sort(At,Dt),qe=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,qe&&zt.addToRenderList(x,A),this.info.render.frame++,q===!0&&Mt.beginShadows();const B=v.state.shadowsArray;Bt.render(B,A,w),q===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,N=x.transmissive;if(v.setupLights(),w.isArrayCamera){const ct=w.cameras;if(N.length>0)for(let ut=0,vt=ct.length;ut<vt;ut++){const _t=ct[ut];pt(W,N,A,_t)}qe&&zt.render(A);for(let ut=0,vt=ct.length;ut<vt;ut++){const _t=ct[ut];it(x,A,_t,_t.viewport)}}else N.length>0&&pt(W,N,A,w),qe&&zt.render(A),it(x,A,w);$!==null&&j===0&&(he.updateMultisampleRenderTarget($),he.updateRenderTargetMipmap($)),A.isScene===!0&&A.onAfterRender(C,A,w),Rt.resetDefaultState(),P=-1,I=null,U.pop(),U.length>0?(v=U[U.length-1],q===!0&&Mt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,O.pop(),O.length>0?x=O[O.length-1]:x=null};function z(A,w,B,W){if(A.visible===!1)return;if(A.layers.test(w.layers)){if(A.isGroup)B=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(w);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pe.intersectsSprite(A)){W&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(yt);const ut=J.update(A),vt=A.material;vt.visible&&x.push(A,ut,vt,B,te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pe.intersectsObject(A))){const ut=J.update(A),vt=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),te.copy(A.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),te.copy(ut.boundingSphere.center)),te.applyMatrix4(A.matrixWorld).applyMatrix4(yt)),Array.isArray(vt)){const _t=ut.groups;for(let Ut=0,Ht=_t.length;Ut<Ht;Ut++){const Lt=_t[Ut],re=vt[Lt.materialIndex];re&&re.visible&&x.push(A,ut,re,B,te.z,Lt)}}else vt.visible&&x.push(A,ut,vt,B,te.z,null)}}const ct=A.children;for(let ut=0,vt=ct.length;ut<vt;ut++)z(ct[ut],w,B,W)}function it(A,w,B,W){const N=A.opaque,ct=A.transmissive,ut=A.transparent;v.setupLightsView(B),q===!0&&Mt.setGlobalState(C.clippingPlanes,B),W&&$t.viewport(G.copy(W)),N.length>0&&Q(N,w,B),ct.length>0&&Q(ct,w,B),ut.length>0&&Q(ut,w,B),$t.buffers.depth.setTest(!0),$t.buffers.depth.setMask(!0),$t.buffers.color.setMask(!0),$t.setPolygonOffset(!1)}function pt(A,w,B,W){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[W.id]===void 0&&(v.state.transmissionRenderTarget[W.id]=new wr(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?lo:xi,minFilter:$r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const ct=v.state.transmissionRenderTarget[W.id],ut=W.viewport||G;ct.setSize(ut.z*C.transmissionResolutionScale,ut.w*C.transmissionResolutionScale);const vt=C.getRenderTarget(),_t=C.getActiveCubeFace(),Ut=C.getActiveMipmapLevel();C.setRenderTarget(ct),C.getClearColor(nt),ht=C.getClearAlpha(),ht<1&&C.setClearColor(16777215,.5),C.clear(),qe&&zt.render(B);const Ht=C.toneMapping;C.toneMapping=$i;const Lt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),v.setupLightsView(W),q===!0&&Mt.setGlobalState(C.clippingPlanes,W),Q(A,B,W),he.updateMultisampleRenderTarget(ct),he.updateRenderTargetMipmap(ct),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let ge=0,Wt=w.length;ge<Wt;ge++){const le=w[ge],ue=le.object,Ft=le.geometry,ce=le.material,Me=le.group;if(ce.side===ji&&ue.layers.test(W.layers)){const Sn=ce.side;ce.side=Gn,ce.needsUpdate=!0,at(ue,B,W,Ft,ce,Me),ce.side=Sn,ce.needsUpdate=!0,re=!0}}re===!0&&(he.updateMultisampleRenderTarget(ct),he.updateRenderTargetMipmap(ct))}C.setRenderTarget(vt,_t,Ut),C.setClearColor(nt,ht),Lt!==void 0&&(W.viewport=Lt),C.toneMapping=Ht}function Q(A,w,B){const W=w.isScene===!0?w.overrideMaterial:null;for(let N=0,ct=A.length;N<ct;N++){const ut=A[N],vt=ut.object,_t=ut.geometry,Ut=ut.group;let Ht=ut.material;Ht.allowOverride===!0&&W!==null&&(Ht=W),vt.layers.test(B.layers)&&at(vt,w,B,_t,Ht,Ut)}}function at(A,w,B,W,N,ct){A.onBeforeRender(C,w,B,W,N,ct),A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),N.onBeforeRender(C,w,B,W,A,ct),N.transparent===!0&&N.side===ji&&N.forceSinglePass===!1?(N.side=Gn,N.needsUpdate=!0,C.renderBufferDirect(B,w,W,N,A,ct),N.side=Er,N.needsUpdate=!0,C.renderBufferDirect(B,w,W,N,A,ct),N.side=ji):C.renderBufferDirect(B,w,W,N,A,ct),A.onAfterRender(C,w,B,W,N,ct)}function Tt(A,w,B){w.isScene!==!0&&(w=oe);const W=bt.get(A),N=v.state.lights,ct=v.state.shadowsArray,ut=N.state.version,vt=lt.getParameters(A,N.state,ct,w,B),_t=lt.getProgramCacheKey(vt);let Ut=W.programs;W.environment=A.isMeshStandardMaterial?w.environment:null,W.fog=w.fog,W.envMap=(A.isMeshStandardMaterial?be:Ye).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?w.environmentRotation:A.envMapRotation,Ut===void 0&&(A.addEventListener("dispose",c),Ut=new Map,W.programs=Ut);let Ht=Ut.get(_t);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===ut)return dt(A,vt),Ht}else vt.uniforms=lt.getUniforms(A),A.onBeforeCompile(vt,C),Ht=lt.acquireProgram(vt,_t),Ut.set(_t,Ht),W.uniforms=vt.uniforms;const Lt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=Mt.uniform),dt(A,vt),W.needsLights=ie(A),W.lightsStateVersion=ut,W.needsLights&&(Lt.ambientLightColor.value=N.state.ambient,Lt.lightProbe.value=N.state.probe,Lt.directionalLights.value=N.state.directional,Lt.directionalLightShadows.value=N.state.directionalShadow,Lt.spotLights.value=N.state.spot,Lt.spotLightShadows.value=N.state.spotShadow,Lt.rectAreaLights.value=N.state.rectArea,Lt.ltc_1.value=N.state.rectAreaLTC1,Lt.ltc_2.value=N.state.rectAreaLTC2,Lt.pointLights.value=N.state.point,Lt.pointLightShadows.value=N.state.pointShadow,Lt.hemisphereLights.value=N.state.hemi,Lt.directionalShadowMap.value=N.state.directionalShadowMap,Lt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Lt.spotShadowMap.value=N.state.spotShadowMap,Lt.spotLightMatrix.value=N.state.spotLightMatrix,Lt.spotLightMap.value=N.state.spotLightMap,Lt.pointShadowMap.value=N.state.pointShadowMap,Lt.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Ht,W.uniformsList=null,Ht}function H(A){if(A.uniformsList===null){const w=A.currentProgram.getUniforms();A.uniformsList=Ka.seqWithValue(w.seq,A.uniforms)}return A.uniformsList}function dt(A,w){const B=bt.get(A);B.outputColorSpace=w.outputColorSpace,B.batching=w.batching,B.batchingColor=w.batchingColor,B.instancing=w.instancing,B.instancingColor=w.instancingColor,B.instancingMorph=w.instancingMorph,B.skinning=w.skinning,B.morphTargets=w.morphTargets,B.morphNormals=w.morphNormals,B.morphColors=w.morphColors,B.morphTargetsCount=w.morphTargetsCount,B.numClippingPlanes=w.numClippingPlanes,B.numIntersection=w.numClipIntersection,B.vertexAlphas=w.vertexAlphas,B.vertexTangents=w.vertexTangents,B.toneMapping=w.toneMapping}function It(A,w,B,W,N){w.isScene!==!0&&(w=oe),he.resetTextureUnits();const ct=w.fog,ut=W.isMeshStandardMaterial?w.environment:null,vt=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ks,_t=(W.isMeshStandardMaterial?be:Ye).get(W.envMap||ut),Ut=W.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ht=!!B.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Lt=!!B.morphAttributes.position,re=!!B.morphAttributes.normal,ge=!!B.morphAttributes.color;let Wt=$i;W.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Wt=C.toneMapping);const le=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ue=le!==void 0?le.length:0,Ft=bt.get(W),ce=v.state.lights;if(q===!0&&(Et===!0||A!==I)){const mn=A===I&&W.id===P;Mt.setState(W,A,mn)}let Me=!1;W.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ce.state.version||Ft.outputColorSpace!==vt||N.isBatchedMesh&&Ft.batching===!1||!N.isBatchedMesh&&Ft.batching===!0||N.isBatchedMesh&&Ft.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ft.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ft.instancing===!1||!N.isInstancedMesh&&Ft.instancing===!0||N.isSkinnedMesh&&Ft.skinning===!1||!N.isSkinnedMesh&&Ft.skinning===!0||N.isInstancedMesh&&Ft.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ft.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ft.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ft.instancingMorph===!1&&N.morphTexture!==null||Ft.envMap!==_t||W.fog===!0&&Ft.fog!==ct||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Mt.numPlanes||Ft.numIntersection!==Mt.numIntersection)||Ft.vertexAlphas!==Ut||Ft.vertexTangents!==Ht||Ft.morphTargets!==Lt||Ft.morphNormals!==re||Ft.morphColors!==ge||Ft.toneMapping!==Wt||Ft.morphTargetsCount!==ue)&&(Me=!0):(Me=!0,Ft.__version=W.version);let Sn=Ft.currentProgram;Me===!0&&(Sn=Tt(W,w,N));let er=!1,En=!1,Pr=!1;const Ge=Sn.getUniforms(),Un=Ft.uniforms;if($t.useProgram(Sn.program)&&(er=!0,En=!0,Pr=!0),W.id!==P&&(P=W.id,En=!0),er||I!==A){$t.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ge.setValue(X,"projectionMatrix",A.projectionMatrix),Ge.setValue(X,"viewMatrix",A.matrixWorldInverse);const Fn=Ge.map.cameraPosition;Fn!==void 0&&Fn.setValue(X,kt.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&Ge.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ge.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,En=!0,Pr=!0)}if(N.isSkinnedMesh){Ge.setOptional(X,N,"bindMatrix"),Ge.setOptional(X,N,"bindMatrixInverse");const mn=N.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ge.setValue(X,"boneTexture",mn.boneTexture,he))}N.isBatchedMesh&&(Ge.setOptional(X,N,"batchingTexture"),Ge.setValue(X,"batchingTexture",N._matricesTexture,he),Ge.setOptional(X,N,"batchingIdTexture"),Ge.setValue(X,"batchingIdTexture",N._indirectTexture,he),Ge.setOptional(X,N,"batchingColorTexture"),N._colorsTexture!==null&&Ge.setValue(X,"batchingColorTexture",N._colorsTexture,he));const Nn=B.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&gt.update(N,B,Sn),(En||Ft.receiveShadow!==N.receiveShadow)&&(Ft.receiveShadow=N.receiveShadow,Ge.setValue(X,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Un.envMap.value=_t,Un.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&w.environment!==null&&(Un.envMapIntensity.value=w.environmentIntensity),En&&(Ge.setValue(X,"toneMappingExposure",C.toneMappingExposure),Ft.needsLights&&ne(Un,Pr),ct&&W.fog===!0&&ft.refreshFogUniforms(Un,ct),ft.refreshMaterialUniforms(Un,W,rt,xt,v.state.transmissionRenderTarget[A.id]),Ka.upload(X,H(Ft),Un,he)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ka.upload(X,H(Ft),Un,he),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ge.setValue(X,"center",N.center),Ge.setValue(X,"modelViewMatrix",N.modelViewMatrix),Ge.setValue(X,"normalMatrix",N.normalMatrix),Ge.setValue(X,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const mn=W.uniformsGroups;for(let Fn=0,Wl=mn.length;Fn<Wl;Fn++){const Lr=mn[Fn];ae.update(Lr,Sn),ae.bind(Lr,Sn)}}return Sn}function ne(A,w){A.ambientLightColor.needsUpdate=w,A.lightProbe.needsUpdate=w,A.directionalLights.needsUpdate=w,A.directionalLightShadows.needsUpdate=w,A.pointLights.needsUpdate=w,A.pointLightShadows.needsUpdate=w,A.spotLights.needsUpdate=w,A.spotLightShadows.needsUpdate=w,A.rectAreaLights.needsUpdate=w,A.hemisphereLights.needsUpdate=w}function ie(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,w,B){const W=bt.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),bt.get(A.texture).__webglTexture=w,bt.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:B,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,w){const B=bt.get(A);B.__webglFramebuffer=w,B.__useDefaultFramebuffer=w===void 0};const Be=X.createFramebuffer();this.setRenderTarget=function(A,w=0,B=0){$=A,k=w,j=B;let W=!0,N=null,ct=!1,ut=!1;if(A){const _t=bt.get(A);if(_t.__useDefaultFramebuffer!==void 0)$t.bindFramebuffer(X.FRAMEBUFFER,null),W=!1;else if(_t.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(_t.__hasExternalTextures)he.rebindTextures(A,bt.get(A.texture).__webglTexture,bt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Lt=A.depthTexture;if(_t.__boundDepthTexture!==Lt){if(Lt!==null&&bt.has(Lt)&&(A.width!==Lt.image.width||A.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Ut=A.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ut=!0);const Ht=bt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[w])?N=Ht[w][B]:N=Ht[w],ct=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?N=bt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?N=Ht[B]:N=Ht,G.copy(A.viewport),et.copy(A.scissor),tt=A.scissorTest}else G.copy(Zt).multiplyScalar(rt).floor(),et.copy(St).multiplyScalar(rt).floor(),tt=Ne;if(B!==0&&(N=Be),$t.bindFramebuffer(X.FRAMEBUFFER,N)&&W&&$t.drawBuffers(A,N),$t.viewport(G),$t.scissor(et),$t.setScissorTest(tt),ct){const _t=bt.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+w,_t.__webglTexture,B)}else if(ut){const _t=w;for(let Ut=0;Ut<A.textures.length;Ut++){const Ht=bt.get(A.textures[Ut]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ut,Ht.__webglTexture,B,_t)}}else if(A!==null&&B!==0){const _t=bt.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,_t.__webglTexture,B)}P=-1},this.readRenderTargetPixels=function(A,w,B,W,N,ct,ut,vt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t){$t.bindFramebuffer(X.FRAMEBUFFER,_t);try{const Ut=A.textures[vt],Ht=Ut.format,Lt=Ut.type;if(!Se.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=A.width-W&&B>=0&&B<=A.height-N&&(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+vt),X.readPixels(w,B,W,N,Gt.convert(Ht),Gt.convert(Lt),ct))}finally{const Ut=$!==null?bt.get($).__webglFramebuffer:null;$t.bindFramebuffer(X.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,w,B,W,N,ct,ut,vt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),_t)if(w>=0&&w<=A.width-W&&B>=0&&B<=A.height-N){$t.bindFramebuffer(X.FRAMEBUFFER,_t);const Ut=A.textures[vt],Ht=Ut.format,Lt=Ut.type;if(!Se.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,re),X.bufferData(X.PIXEL_PACK_BUFFER,ct.byteLength,X.STREAM_READ),A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+vt),X.readPixels(w,B,W,N,Gt.convert(Ht),Gt.convert(Lt),0);const ge=$!==null?bt.get($).__webglFramebuffer:null;$t.bindFramebuffer(X.FRAMEBUFFER,ge);const Wt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await yv(X,Wt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,re),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ct),X.deleteBuffer(re),X.deleteSync(Wt),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,w=null,B=0){const W=Math.pow(2,-B),N=Math.floor(A.image.width*W),ct=Math.floor(A.image.height*W),ut=w!==null?w.x:0,vt=w!==null?w.y:0;he.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,B,0,0,ut,vt,N,ct),$t.unbindTexture()};const Vt=X.createFramebuffer(),Jt=X.createFramebuffer();this.copyTextureToTexture=function(A,w,B=null,W=null,N=0,ct=null){ct===null&&(N!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=N,N=0):ct=0);let ut,vt,_t,Ut,Ht,Lt,re,ge,Wt;const le=A.isCompressedTexture?A.mipmaps[ct]:A.image;if(B!==null)ut=B.max.x-B.min.x,vt=B.max.y-B.min.y,_t=B.isBox3?B.max.z-B.min.z:1,Ut=B.min.x,Ht=B.min.y,Lt=B.isBox3?B.min.z:0;else{const Nn=Math.pow(2,-N);ut=Math.floor(le.width*Nn),vt=Math.floor(le.height*Nn),A.isDataArrayTexture?_t=le.depth:A.isData3DTexture?_t=Math.floor(le.depth*Nn):_t=1,Ut=0,Ht=0,Lt=0}W!==null?(re=W.x,ge=W.y,Wt=W.z):(re=0,ge=0,Wt=0);const ue=Gt.convert(w.format),Ft=Gt.convert(w.type);let ce;w.isData3DTexture?(he.setTexture3D(w,0),ce=X.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(he.setTexture2DArray(w,0),ce=X.TEXTURE_2D_ARRAY):(he.setTexture2D(w,0),ce=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,w.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,w.unpackAlignment);const Me=X.getParameter(X.UNPACK_ROW_LENGTH),Sn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),er=X.getParameter(X.UNPACK_SKIP_PIXELS),En=X.getParameter(X.UNPACK_SKIP_ROWS),Pr=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,le.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,le.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ut),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ht),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Lt);const Ge=A.isDataArrayTexture||A.isData3DTexture,Un=w.isDataArrayTexture||w.isData3DTexture;if(A.isDepthTexture){const Nn=bt.get(A),mn=bt.get(w),Fn=bt.get(Nn.__renderTarget),Wl=bt.get(mn.__renderTarget);$t.bindFramebuffer(X.READ_FRAMEBUFFER,Fn.__webglFramebuffer),$t.bindFramebuffer(X.DRAW_FRAMEBUFFER,Wl.__webglFramebuffer);for(let Lr=0;Lr<_t;Lr++)Ge&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,bt.get(A).__webglTexture,N,Lt+Lr),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,bt.get(w).__webglTexture,ct,Wt+Lr)),X.blitFramebuffer(Ut,Ht,ut,vt,re,ge,ut,vt,X.DEPTH_BUFFER_BIT,X.NEAREST);$t.bindFramebuffer(X.READ_FRAMEBUFFER,null),$t.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(N!==0||A.isRenderTargetTexture||bt.has(A)){const Nn=bt.get(A),mn=bt.get(w);$t.bindFramebuffer(X.READ_FRAMEBUFFER,Vt),$t.bindFramebuffer(X.DRAW_FRAMEBUFFER,Jt);for(let Fn=0;Fn<_t;Fn++)Ge?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Nn.__webglTexture,N,Lt+Fn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Nn.__webglTexture,N),Un?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,mn.__webglTexture,ct,Wt+Fn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,mn.__webglTexture,ct),N!==0?X.blitFramebuffer(Ut,Ht,ut,vt,re,ge,ut,vt,X.COLOR_BUFFER_BIT,X.NEAREST):Un?X.copyTexSubImage3D(ce,ct,re,ge,Wt+Fn,Ut,Ht,ut,vt):X.copyTexSubImage2D(ce,ct,re,ge,Ut,Ht,ut,vt);$t.bindFramebuffer(X.READ_FRAMEBUFFER,null),$t.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Un?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(ce,ct,re,ge,Wt,ut,vt,_t,ue,Ft,le.data):w.isCompressedArrayTexture?X.compressedTexSubImage3D(ce,ct,re,ge,Wt,ut,vt,_t,ue,le.data):X.texSubImage3D(ce,ct,re,ge,Wt,ut,vt,_t,ue,Ft,le):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ct,re,ge,ut,vt,ue,Ft,le.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ct,re,ge,le.width,le.height,ue,le.data):X.texSubImage2D(X.TEXTURE_2D,ct,re,ge,ut,vt,ue,Ft,le);X.pixelStorei(X.UNPACK_ROW_LENGTH,Me),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Sn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,er),X.pixelStorei(X.UNPACK_SKIP_ROWS,En),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Pr),ct===0&&w.generateMipmaps&&X.generateMipmap(ce),$t.unbindTexture()},this.copyTextureToTexture3D=function(A,w,B=null,W=null,N=0){return Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,w,B,W,N)},this.initRenderTarget=function(A){bt.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),$t.unbindTexture()},this.resetState=function(){k=0,j=0,$=null,$t.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}class yf extends Cn{constructor(t,n={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new $n;const i=this;n.color!==void 0?new se(n.color):new se(8355711);const r=n.textureWidth||512,s=n.textureHeight||512,a=n.clipBias||0;n.shader||yf.ReflectorShader;const h=n.multisample!==void 0?n.multisample:4,f=n.texture||void 0,d=new hr,m=new Z,g=new Z,_=new Z,M=new Ue,E=new Z(0,0,-1),S=new Xe,x=new Z,v=new Z,O=new Xe,U=new Ue,C=this.camera,V=new wr(r,s,{samples:h,type:lo});this.material=new vf({map:f}),this.material.uniforms={tDiffuse:{value:V.texture},textureMatrix:{value:U}},this.material.onBeforeCompile=k=>{let j=k.vertexShader.indexOf("void main() {");k.vertexShader=k.vertexShader.slice(0,j)+`
uniform mat4 textureMatrix;
varying vec4 vUv3;
`+k.vertexShader.slice(j-1,-1)+"	vUv3 = textureMatrix * vec4( position, 1.0 ); }",j=k.fragmentShader.indexOf("void main() {"),k.fragmentShader=`
uniform sampler2D tDiffuse; 
 varying vec4 vUv3;
`+k.fragmentShader.slice(0,j)+k.fragmentShader.slice(j-1,-1)+`	gl_FragColor = vec4( mix( texture2DProj( tDiffuse,  vUv3 ).rgb, gl_FragColor.rgb , 0.5), 1.0 );
				}`,k.uniforms.tDiffuse={value:V.texture},k.uniforms.textureMatrix={value:U},this.material.uniforms=k.uniforms,this.material.userData.shader=k},this.receiveShadow=!0,this.onBeforeRender=function(k,j,$){if(g.setFromMatrixPosition(i.matrixWorld),_.setFromMatrixPosition($.matrixWorld),M.extractRotation(i.matrixWorld),m.set(0,0,1),m.applyMatrix4(M),x.subVectors(g,_),x.dot(m)>0)return;x.reflect(m).negate(),x.add(g),M.extractRotation($.matrixWorld),E.set(0,0,-1),E.applyMatrix4(M),E.add(_),v.subVectors(g,E),v.reflect(m).negate(),v.add(g),C.position.copy(x),C.up.set(0,1,0),C.up.applyMatrix4(M),C.up.reflect(m),C.lookAt(v),C.far=$.far,C.updateMatrixWorld(),C.projectionMatrix.copy($.projectionMatrix),U.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),U.multiply(C.projectionMatrix),U.multiply(C.matrixWorldInverse),U.multiply(i.matrixWorld),d.setFromNormalAndCoplanarPoint(m,g),d.applyMatrix4(C.matrixWorldInverse),S.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const P=C.projectionMatrix;O.x=(Math.sign(S.x)+P.elements[8])/P.elements[0],O.y=(Math.sign(S.y)+P.elements[9])/P.elements[5],O.z=-1,O.w=(1+P.elements[10])/P.elements[14],S.multiplyScalar(2/S.dot(O)),P.elements[2]=S.x,P.elements[6]=S.y,P.elements[10]=S.z+1-a,P.elements[14]=S.w,i.visible=!1;const I=k.getRenderTarget(),G=k.xr.enabled,et=k.shadowMap.autoUpdate,tt=k.outputEncoding,nt=k.toneMapping;k.xr.enabled=!1,k.shadowMap.autoUpdate=!1,k.toneMapping=$i,k.setRenderTarget(V),k.state.buffers.depth.setMask(!0),k.autoClear===!1&&k.clear(),k.render(j,C),k.xr.enabled=G,k.shadowMap.autoUpdate=et,k.outputEncoding=tt,k.toneMapping=nt,k.setRenderTarget(I);const ht=$.viewport;ht!==void 0&&k.state.viewport(ht),i.visible=!0},this.getRenderTarget=function(){return V},this.dispose=function(){V.dispose(),i.material.dispose()}}}function kE(e,t,n,i=!0){return i?n.set(e[t*3+0],e[t*3+2],-e[t*3+1]):n.set(e[t*3+0],e[t*3+1],e[t*3+2])}function zE(e,t,n,i=!0){return i?n.set(-e[t*4+1],-e[t*4+3],e[t*4+2],-e[t*4+0]):n.set(e[t*4+0],e[t*4+1],e[t*4+2],e[t*4+3])}function C3(e){return e.set(e.x,-e.z,e.y)}function GE(e,t){let n=new TextDecoder("utf-8"),i=new Uint8Array(e.names),r=e.name_jntadr[t],s=r;for(;s<i.length&&i[s]!==0;)s++;let a=i.subarray(r,s);return n.decode(a)}function P3(){return Math.sqrt(-2*Math.log(Math.random()))*Math.cos(2*Math.PI*Math.random())}const em={metal:{metalness:.75,roughness:.4,reflectivity:.45,envMapIntensity:1.2,clearcoat:.1,clearcoatRoughness:.1},black:{metalness:.2,roughness:.6,envMapIntensity:.25,clearcoat:.05,clearcoatRoughness:.2},glow:{color:new se(.2,.4,1),metalness:.05,roughness:.2,envMapIntensity:0,clearcoat:.2,clearcoatRoughness:.05,emissive:new se(.4,.6,1),emissiveIntensity:1}};function VE(e,t,n){let i=t;for(;i<e.length&&e[i]!==0;)i++;return n.decode(e.subarray(t,i))}function HE(e,t,n,i,r,s){let a=new Us(n[0]*.5);if(t!=e.mjtGeom.mjGEOM_PLANE.value){if(t!=e.mjtGeom.mjGEOM_HFIELD.value){if(t==e.mjtGeom.mjGEOM_SPHERE.value)a=new Us(n[0]);else if(t==e.mjtGeom.mjGEOM_CAPSULE.value)a=new gf(n[0],n[1]*2,20,20);else if(t==e.mjtGeom.mjGEOM_ELLIPSOID.value)a=new Us(1);else if(t==e.mjtGeom.mjGEOM_CYLINDER.value)a=new Qo(n[0],n[0],n[1]*2);else if(t==e.mjtGeom.mjGEOM_BOX.value)a=new uo(n[0]*2,n[2]*2,n[1]*2);else if(t==e.mjtGeom.mjGEOM_MESH.value){let h=i.geom_dataid[r];if(h in s)a=s[h];else{a=new Xn;let f=i.mesh_vert.subarray(i.mesh_vertadr[h]*3,(i.mesh_vertadr[h]+i.mesh_vertnum[h])*3);for(let _=0;_<f.length;_+=3){let M=f[_+1];f[_+1]=f[_+2],f[_+2]=-M}let d=i.mesh_normal.subarray(i.mesh_vertadr[h]*3,(i.mesh_vertadr[h]+i.mesh_vertnum[h])*3);for(let _=0;_<d.length;_+=3){let M=d[_+1];d[_+1]=d[_+2],d[_+2]=-M}let m=i.mesh_texcoord.subarray(i.mesh_texcoordadr[h]*2,(i.mesh_texcoordadr[h]+i.mesh_vertnum[h])*2),g=i.mesh_face.subarray(i.mesh_faceadr[h]*3,(i.mesh_faceadr[h]+i.mesh_facenum[h])*3);a.setAttribute("position",new Vn(f,3)),a.setAttribute("normal",new Vn(d,3)),a.setAttribute("uv",new Vn(m,2)),a.setIndex(Array.from(g)),s[h]=a}}}}return a}function WE(e,t,n,i){let r,s=[e.geom_rgba[t*4+0],e.geom_rgba[t*4+1],e.geom_rgba[t*4+2],e.geom_rgba[t*4+3]],a=null;const h=e.geom_matid[t];if(h!=-1){a=VE(i,e.name_matadr[h],n),s=[e.mat_rgba[h*4+0],e.mat_rgba[h*4+1],e.mat_rgba[h*4+2],e.mat_rgba[h*4+3]],r=void 0;let d=e.mat_texid[h];if(d!=-1){let m=e.tex_width[d],g=e.tex_height[d],_=e.tex_adr[d],M=e.tex_rgb,E=new Uint8Array(m*g*4);for(let S=0;S<m*g;S++)E[S*4+0]=M[_+(S*3+0)],E[S*4+1]=M[_+(S*3+1)],E[S*4+2]=M[_+(S*3+2)],E[S*4+3]=1;r=new G0(E,m,g,hi,xi),d==2?(r.repeat=new _e(50,50),r.wrapS=Yr,r.wrapT=Yr):(r.repeat=new _e(1,1),r.wrapS=Yr,r.wrapT=Yr),r.needsUpdate=!0}}const f={color:new se(s[0],s[1],s[2]),transparent:s[3]<1,opacity:s[3],specularIntensity:h!=-1?e.mat_specular[h]*.5:0,reflectivity:h!=-1?e.mat_reflectance[h]:.05,roughness:h!=-1?1-e.mat_shininess[h]:.5,metalness:h!=-1?.1:0,map:r};return a&&em[a]&&Object.assign(f,em[a]),new vf(f)}function XE(e,t,n,i,r){if(!(t in e)){e[t]=new Zr;let s=n.name_bodyadr[t],a=s;for(;a<r.length&&r[a]!==0;)a++;let h=r.subarray(s,a);e[t].name=i.decode(h),e[t].bodyID=t,e[t].has_custom_mesh=!1}}function jE(e,t,n){const i=[];for(let r=0;r<e.nlight;r++){let s=new Tp;e.light_directional[r]?s=new bp:s=new Tp,s.decay=e.light_attenuation[r]*100,s.penumbra=.5,s.castShadow=!0,s.shadow.mapSize.width=1024,s.shadow.mapSize.height=1024,s.shadow.camera.near=1,s.shadow.camera.far=10,t[0]?t[0].add(s):n.add(s),i.push(s)}if(e.nlight==0){let r=new bp;n.add(r)}return i}async function L3(){this.scene.remove(this.scene.getObjectByName("MuJoCo Root")),[this.model,this.state,this.simulation,this.bodies,this.lights]=await qE(this.mujoco,this.params.scene,this),this.simulation.forward();for(let e=0;e<this.updateGUICallbacks.length;e++)this.updateGUICallbacks[e](this.model,this.simulation,this.params)}async function qE(e,t,n){n.simulation!=null&&(n.simulation.free(),n.model=null,n.state=null,n.simulation=null,o_());try{n.model=e.Model.load_from_xml("/working/"+t),console.log("Mujoco model loaded:",n.model),window.mujocoModel=n.model,window.getJointName=GE}catch(x){console.error("Failed to load model from xml: ",x),alert("Failed to load model from xml: "+x);return}n.state=new e.State(n.model),n.simulation=new e.Simulation(n.model,n.state);let i=n.model,r=n.state,s=n.simulation,a=new TextDecoder("utf-8"),h=new Uint8Array(i.names),d=a.decode(i.names).split(a.decode(new ArrayBuffer(1))),m=new Zr;m.name="MuJoCo Root",n.scene.add(m);let g={},_={},M,E=new vf;E.color=new se(1,1,1);for(let x=0;x<i.ngeom;x++){if(!(i.geom_group[x]<3))continue;let v=i.geom_bodyid[x],O=i.geom_type[x],U=[i.geom_size[x*3+0],i.geom_size[x*3+1],i.geom_size[x*3+2]];XE(g,v,i,a,h);let C=HE(e,O,U,i,x,_);O==e.mjtGeom.mjGEOM_MESH.value&&(g[v].has_custom_mesh=!0),E=WE(i,x,a,h);let V=new Cn;O==0?(V=new yf(new ta(100,100),{clipBias:.003,texture:E.map}),V.rotateX(-Math.PI/2)):V=new Cn(C,E),V.castShadow=x!=0,V.receiveShadow=O!=7,V.bodyID=v,g[v].add(V),kE(i.geom_pos,x,V.position),O!=0&&zE(i.geom_quat,x,V.quaternion),O==4&&V.scale.set(U[0],U[2],U[1])}let S=new Zv;S.color=new se(.8,.3,.3),m.cylinders=new yp(new Qo(1,1,1),S,1023),m.cylinders.receiveShadow=!0,m.cylinders.castShadow=!0,m.add(m.cylinders),m.spheres=new yp(new Us(1,10,10),S,1023),m.spheres.receiveShadow=!0,m.spheres.castShadow=!0,m.add(m.spheres),M=jE(i,g,m);for(let x=0;x<i.nbody;x++)x==0||!g[0]?m.add(g[x]):(g[x]||(console.log("Body without Geometry detected; adding to bodies",x,g[x]),g[x]=new Zr,g[x].name=d[x+1],g[x].bodyID=x,g[x].has_custom_mesh=!1),g[0].add(g[x]));return n.mujocoRoot=m,_m.set(i),hl.set(s),vm.set(r),xm.set(g),ym.set(M),[i,r,s,g,M]}async function I3(e){let t=["22_humanoids.xml","adhesion.xml","arm26.xml","balloons.xml","flag.xml","hammock.xml","humanoid.xml","humanoid_body.xml","mug.obj","mug.png","mug.xml","scene.xml","simple.xml","slider_crank.xml","model_with_tendon.xml"],n=t.map(r=>fetch("./examples/scenes/"+r)),i=await Promise.all(n);for(let r=0;r<i.length;r++){let s=t[r].split("/"),a="/working/";for(let h=0;h<s.length-1;h++)a+=s[h],e.FS.analyzePath(a).exists||e.FS.mkdir(a),a+="/";console.log(e.FS),t[r].endsWith(".png")||t[r].toLowerCase().endsWith(".stl")||t[r].endsWith(".skn")?e.FS.writeFile("/working/"+t[r],new Uint8Array(await i[r].arrayBuffer())):e.FS.writeFile("/working/"+t[r],await i[r].text())}}function YE(e,t){const n=t.split("/").filter(r=>r.length>0);let i="";for(const r of n)if(i=i+"/"+r,i!=="")try{e.lookupPath(i,{})}catch{e.mkdir(i)}}async function D3(e,t){const n=t.lastIndexOf("/"),i=n===-1?"":t.substring(0,n),r=i?`${i}/index.json`:"index.json",s=await fetch(`/${r}`);if(!s.ok)throw new Error(`Failed to fetch asset index file: /${r}`);const a=await s.json();if(!Array.isArray(a))throw new Error(`Asset index file is not a JSON array: /${r}`);await Promise.all(a.map(async f=>{const d=i?`${i}/${f}`:f,m=await fetch(`/${d}`);if(!m.ok){console.error(`Failed to fetch asset: /${d}`);return}const g=await m.arrayBuffer(),_=`/working/${d}`,M=_.substring(0,_.lastIndexOf("/"));YE(e.FS,M),e.FS.writeFile(_,new Uint8Array(g)),console.log(`Loaded ${d} into ${_}`)}));const h=t.split("/")[1]?.replace(".xml","");h&&s_.update(f=>({...f,[h]:t}))}export{b3 as $,ph as A,q2 as B,A3 as C,H0 as D,rs as E,Er as F,os as G,Mn as H,On as I,Xn as J,Tn as K,Li as L,_3 as M,dr as N,j0 as O,hr as P,Jo as Q,ff as R,T3 as S,v3 as T,xi as U,Z as V,wr as W,Vn as X,Xe as Y,w3 as Z,kn as _,Zu as a,L3 as a0,Zr as a1,W0 as a2,$v as a3,yf as a4,M3 as a5,z0 as a6,tn as a7,bp as a8,S3 as a9,r_ as aA,i3 as aB,s_ as aC,M0 as aD,I3 as aE,Sf as aF,m3 as aG,r3 as aa,D3 as ab,E3 as ac,R3 as ad,v2 as ae,qE as af,o2 as ag,P3 as ah,kE as ai,zE as aj,C3 as ak,Ue as al,e3 as am,n3 as an,zd as ao,za as ap,Gd as aq,Ga as ar,p3 as as,s2 as at,hl as au,zr as av,g3 as aw,f3 as ax,d3 as ay,Mf as az,c3 as b,Cr as c,u3 as d,l3 as e,_e as f,x3 as g,ai as h,a3 as i,qo as j,Xo as k,ns as l,q0 as m,y3 as n,Cn as o,se as p,Gn as q,ji as r,s3 as s,Ho as t,h3 as u,Tr as v,Ks as w,vr as x,Qu as y,$n as z};
