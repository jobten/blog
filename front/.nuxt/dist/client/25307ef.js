(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{329:function(e,r,t){"use strict";var n=t(4),o=t(33),c=t(46),f=t(194),h=t(93),l=t(13),d=t(69).f,v=t(94).f,m=t(12).f,y=t(330).trim,w=n.Number,x=w,k=w.prototype,_="Number"==c(t(131)(k)),A="trim"in String.prototype,R=function(e){var r=h(e,!1);if("string"==typeof r&&r.length>2){var t,n,o,c=(r=A?r.trim():y(r,3)).charCodeAt(0);if(43===c||45===c){if(88===(t=r.charCodeAt(2))||120===t)return NaN}else if(48===c){switch(r.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+r}for(var code,f=r.slice(2),i=0,l=f.length;i<l;i++)if((code=f.charCodeAt(i))<48||code>o)return NaN;return parseInt(f,n)}}return+r};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var r=arguments.length<1?0:e,t=this;return t instanceof w&&(_?l((function(){k.valueOf.call(t)})):"Number"!=c(t))?f(new x(R(r)),t,w):R(r)};for(var C,I=t(7)?d(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;I.length>F;F++)o(x,C=I[F])&&!o(w,C)&&m(w,C,v(x,C));w.prototype=k,k.constructor=w,t(15)(n,"Number",w)}},330:function(e,r,t){var n=t(6),o=t(47),c=t(13),f=t(331),h="["+f+"]",l=RegExp("^"+h+h+"*"),d=RegExp(h+h+"*$"),v=function(e,r,t){var o={},h=c((function(){return!!f[e]()||"​"!="​"[e]()})),l=o[e]=h?r(m):f[e];t&&(o[t]=l),n(n.P+n.F*h,"String",o)},m=v.trim=function(e,r){return e=String(o(e)),1&r&&(e=e.replace(l,"")),2&r&&(e=e.replace(d,"")),e};e.exports=v},331:function(e,r){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},332:function(e,r,t){var content=t(342);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(45).default)("041bdd28",content,!0,{sourceMap:!1})},340:function(e,r,t){e.exports=function(e){"use strict";var r=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function t(e,r){var a=e[0],b=e[1],t=e[2],n=e[3];b=((b+=((t=((t+=((n=((n+=((a=((a+=(b&t|~b&n)+r[0]-680876936|0)<<7|a>>>25)+b|0)&b|~a&t)+r[1]-389564586|0)<<12|n>>>20)+a|0)&a|~n&b)+r[2]+606105819|0)<<17|t>>>15)+n|0)&n|~t&a)+r[3]-1044525330|0)<<22|b>>>10)+t|0,b=((b+=((t=((t+=((n=((n+=((a=((a+=(b&t|~b&n)+r[4]-176418897|0)<<7|a>>>25)+b|0)&b|~a&t)+r[5]+1200080426|0)<<12|n>>>20)+a|0)&a|~n&b)+r[6]-1473231341|0)<<17|t>>>15)+n|0)&n|~t&a)+r[7]-45705983|0)<<22|b>>>10)+t|0,b=((b+=((t=((t+=((n=((n+=((a=((a+=(b&t|~b&n)+r[8]+1770035416|0)<<7|a>>>25)+b|0)&b|~a&t)+r[9]-1958414417|0)<<12|n>>>20)+a|0)&a|~n&b)+r[10]-42063|0)<<17|t>>>15)+n|0)&n|~t&a)+r[11]-1990404162|0)<<22|b>>>10)+t|0,b=((b+=((t=((t+=((n=((n+=((a=((a+=(b&t|~b&n)+r[12]+1804603682|0)<<7|a>>>25)+b|0)&b|~a&t)+r[13]-40341101|0)<<12|n>>>20)+a|0)&a|~n&b)+r[14]-1502002290|0)<<17|t>>>15)+n|0)&n|~t&a)+r[15]+1236535329|0)<<22|b>>>10)+t|0,b=((b+=((t=((t+=((n=((n+=((a=((a+=(b&n|t&~n)+r[1]-165796510|0)<<5|a>>>27)+b|0)&t|b&~t)+r[6]-1069501632|0)<<9|n>>>23)+a|0)&b|a&~b)+r[11]+643717713|0)<<14|t>>>18)+n|0)&a|n&~a)+r[0]-373897302|0)<<20|b>>>12)+t|0,b=((b+=((t=((t+=((n=((n+=((a=((a+=(b&n|t&~n)+r[5]-701558691|0)<<5|a>>>27)+b|0)&t|b&~t)+r[10]+38016083|0)<<9|n>>>23)+a|0)&b|a&~b)+r[15]-660478335|0)<<14|t>>>18)+n|0)&a|n&~a)+r[4]-405537848|0)<<20|b>>>12)+t|0,b=((b+=((t=((t+=((n=((n+=((a=((a+=(b&n|t&~n)+r[9]+568446438|0)<<5|a>>>27)+b|0)&t|b&~t)+r[14]-1019803690|0)<<9|n>>>23)+a|0)&b|a&~b)+r[3]-187363961|0)<<14|t>>>18)+n|0)&a|n&~a)+r[8]+1163531501|0)<<20|b>>>12)+t|0,b=((b+=((t=((t+=((n=((n+=((a=((a+=(b&n|t&~n)+r[13]-1444681467|0)<<5|a>>>27)+b|0)&t|b&~t)+r[2]-51403784|0)<<9|n>>>23)+a|0)&b|a&~b)+r[7]+1735328473|0)<<14|t>>>18)+n|0)&a|n&~a)+r[12]-1926607734|0)<<20|b>>>12)+t|0,b=((b+=((t=((t+=((n=((n+=((a=((a+=(b^t^n)+r[5]-378558|0)<<4|a>>>28)+b|0)^b^t)+r[8]-2022574463|0)<<11|n>>>21)+a|0)^a^b)+r[11]+1839030562|0)<<16|t>>>16)+n|0)^n^a)+r[14]-35309556|0)<<23|b>>>9)+t|0,b=((b+=((t=((t+=((n=((n+=((a=((a+=(b^t^n)+r[1]-1530992060|0)<<4|a>>>28)+b|0)^b^t)+r[4]+1272893353|0)<<11|n>>>21)+a|0)^a^b)+r[7]-155497632|0)<<16|t>>>16)+n|0)^n^a)+r[10]-1094730640|0)<<23|b>>>9)+t|0,b=((b+=((t=((t+=((n=((n+=((a=((a+=(b^t^n)+r[13]+681279174|0)<<4|a>>>28)+b|0)^b^t)+r[0]-358537222|0)<<11|n>>>21)+a|0)^a^b)+r[3]-722521979|0)<<16|t>>>16)+n|0)^n^a)+r[6]+76029189|0)<<23|b>>>9)+t|0,b=((b+=((t=((t+=((n=((n+=((a=((a+=(b^t^n)+r[9]-640364487|0)<<4|a>>>28)+b|0)^b^t)+r[12]-421815835|0)<<11|n>>>21)+a|0)^a^b)+r[15]+530742520|0)<<16|t>>>16)+n|0)^n^a)+r[2]-995338651|0)<<23|b>>>9)+t|0,b=((b+=((n=((n+=(b^((a=((a+=(t^(b|~n))+r[0]-198630844|0)<<6|a>>>26)+b|0)|~t))+r[7]+1126891415|0)<<10|n>>>22)+a|0)^((t=((t+=(a^(n|~b))+r[14]-1416354905|0)<<15|t>>>17)+n|0)|~a))+r[5]-57434055|0)<<21|b>>>11)+t|0,b=((b+=((n=((n+=(b^((a=((a+=(t^(b|~n))+r[12]+1700485571|0)<<6|a>>>26)+b|0)|~t))+r[3]-1894986606|0)<<10|n>>>22)+a|0)^((t=((t+=(a^(n|~b))+r[10]-1051523|0)<<15|t>>>17)+n|0)|~a))+r[1]-2054922799|0)<<21|b>>>11)+t|0,b=((b+=((n=((n+=(b^((a=((a+=(t^(b|~n))+r[8]+1873313359|0)<<6|a>>>26)+b|0)|~t))+r[15]-30611744|0)<<10|n>>>22)+a|0)^((t=((t+=(a^(n|~b))+r[6]-1560198380|0)<<15|t>>>17)+n|0)|~a))+r[13]+1309151649|0)<<21|b>>>11)+t|0,b=((b+=((n=((n+=(b^((a=((a+=(t^(b|~n))+r[4]-145523070|0)<<6|a>>>26)+b|0)|~t))+r[11]-1120210379|0)<<10|n>>>22)+a|0)^((t=((t+=(a^(n|~b))+r[2]+718787259|0)<<15|t>>>17)+n|0)|~a))+r[9]-343485551|0)<<21|b>>>11)+t|0,e[0]=a+e[0]|0,e[1]=b+e[1]|0,e[2]=t+e[2]|0,e[3]=n+e[3]|0}function n(s){var i,e=[];for(i=0;i<64;i+=4)e[i>>2]=s.charCodeAt(i)+(s.charCodeAt(i+1)<<8)+(s.charCodeAt(i+2)<<16)+(s.charCodeAt(i+3)<<24);return e}function o(a){var i,e=[];for(i=0;i<64;i+=4)e[i>>2]=a[i]+(a[i+1]<<8)+(a[i+2]<<16)+(a[i+3]<<24);return e}function c(s){var i,e,r,o,c,f,h=s.length,l=[1732584193,-271733879,-1732584194,271733878];for(i=64;i<=h;i+=64)t(l,n(s.substring(i-64,i)));for(e=(s=s.substring(i-64)).length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=0;i<e;i+=1)r[i>>2]|=s.charCodeAt(i)<<(i%4<<3);if(r[i>>2]|=128<<(i%4<<3),i>55)for(t(l,r),i=0;i<16;i+=1)r[i]=0;return o=(o=8*h).toString(16).match(/(.*?)(.{0,8})$/),c=parseInt(o[2],16),f=parseInt(o[1],16)||0,r[14]=c,r[15]=f,t(l,r),l}function f(e){var t,s="";for(t=0;t<4;t+=1)s+=r[e>>8*t+4&15]+r[e>>8*t&15];return s}function h(e){var i;for(i=0;i<e.length;i+=1)e[i]=f(e[i]);return e.join("")}function l(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function d(e){var r,t=[],n=e.length;for(r=0;r<n-1;r+=2)t.push(parseInt(e.substr(r,2),16));return String.fromCharCode.apply(String,t)}function v(){this.reset()}return h(c("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function r(e,r){return(e=0|e||0)<0?Math.max(e+r,0):Math.min(e,r)}ArrayBuffer.prototype.slice=function(t,n){var o,c,f,h,l=this.byteLength,d=r(t,l),v=l;return n!==e&&(v=r(n,l)),d>v?new ArrayBuffer(0):(o=v-d,c=new ArrayBuffer(o),f=new Uint8Array(c),h=new Uint8Array(this,d,o),f.set(h),c)}}(),v.prototype.append=function(e){return this.appendBinary(l(e)),this},v.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var i,r=this._buff.length;for(i=64;i<=r;i+=64)t(this._hash,n(this._buff.substring(i-64,i)));return this._buff=this._buff.substring(i-64),this},v.prototype.end=function(e){var i,r,t=this._buff,n=t.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<n;i+=1)o[i>>2]|=t.charCodeAt(i)<<(i%4<<3);return this._finish(o,n),r=h(this._hash),e&&(r=d(r)),this.reset(),r},v.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},v.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},v.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},v.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},v.prototype._finish=function(e,r){var n,o,c,i=r;if(e[i>>2]|=128<<(i%4<<3),i>55)for(t(this._hash,e),i=0;i<16;i+=1)e[i]=0;n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(n[2],16),c=parseInt(n[1],16)||0,e[14]=o,e[15]=c,t(this._hash,e)},v.hash=function(e,r){return v.hashBinary(l(e),r)},v.hashBinary=function(content,e){var r=h(c(content));return e?d(r):r},v.ArrayBuffer=function(){this.reset()},v.ArrayBuffer.prototype.append=function(e){var i,r,n,c,f,h=(r=this._buff.buffer,n=e,c=!0,(f=new Uint8Array(r.byteLength+n.byteLength)).set(new Uint8Array(r)),f.set(new Uint8Array(n),r.byteLength),c?f:f.buffer),l=h.length;for(this._length+=e.byteLength,i=64;i<=l;i+=64)t(this._hash,o(h.subarray(i-64,i)));return this._buff=i-64<l?new Uint8Array(h.buffer.slice(i-64)):new Uint8Array(0),this},v.ArrayBuffer.prototype.end=function(e){var i,r,t=this._buff,n=t.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<n;i+=1)o[i>>2]|=t[i]<<(i%4<<3);return this._finish(o,n),r=h(this._hash),e&&(r=d(r)),this.reset(),r},v.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},v.ArrayBuffer.prototype.getState=function(){var e,r=v.prototype.getState.call(this);return r.buff=(e=r.buff,String.fromCharCode.apply(null,new Uint8Array(e))),r},v.ArrayBuffer.prototype.setState=function(e){return e.buff=function(e,r){var i,t=e.length,n=new ArrayBuffer(t),o=new Uint8Array(n);for(i=0;i<t;i+=1)o[i]=e.charCodeAt(i);return r?o:n}(e.buff,!0),v.prototype.setState.call(this,e)},v.ArrayBuffer.prototype.destroy=v.prototype.destroy,v.ArrayBuffer.prototype._finish=v.prototype._finish,v.ArrayBuffer.hash=function(e,r){var n=h(function(a){var i,e,r,n,c,f,h=a.length,l=[1732584193,-271733879,-1732584194,271733878];for(i=64;i<=h;i+=64)t(l,o(a.subarray(i-64,i)));for(a=i-64<h?a.subarray(i-64):new Uint8Array(0),e=a.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=0;i<e;i+=1)r[i>>2]|=a[i]<<(i%4<<3);if(r[i>>2]|=128<<(i%4<<3),i>55)for(t(l,r),i=0;i<16;i+=1)r[i]=0;return n=(n=8*h).toString(16).match(/(.*?)(.{0,8})$/),c=parseInt(n[2],16),f=parseInt(n[1],16)||0,r[14]=c,r[15]=f,t(l,r),l}(new Uint8Array(e)));return r?d(n):n},v}()},341:function(e,r,t){"use strict";t(332)},342:function(e,r,t){(r=t(44)(!1)).push([e.i,"#drag{height:100px;line-height:100px;border:2px dashed #eee;text-align:center}.cube-container .cube{width:14px;height:14px;line-height:12px;border:1px solid #000;background:#eee;float:left}.cube-container .cube>.success{background:green}.cube-container .cube>.uploading{background:#00f}.cube-container .cube>.error{background:red}",""]),e.exports=r},362:function(e,r,t){"use strict";t.r(r);var n=t(9),o=(t(23),t(34),t(24),t(329),t(21),t(22),t(95),t(10),t(20),t(2)),c=t(340),f=t.n(c),h={mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("/user/info");case 2:r.sent,e.bindEvents();case 4:case"end":return r.stop()}}),r)})))()},data:function(){return{file:null,hashProgress:0,chunks:[]}},computed:{cubeWidth:function(){return 16*Math.ceil(Math.sqrt(this.chunks.length))},uploadProgress:function(){if(!this.file||this.chunks.length)return 0;var e=this.chunks.map((function(e){return e.chunk.size*e.progress})).reduce((function(e,r){return e+r}),0);return parseInt((100*e/this.file.size).toFixed(2))}},methods:{bindEvents:function(){var e=this,r=this.$refs.drag;r.addEventListener("dragover",(function(e){r.style.borderColor="red",e.preventDefault()})),r.addEventListener("dragleave",(function(e){r.style.borderColor="#eee",e.preventDefault()})),r.addEventListener("drop",(function(t){var n=t.dataTransfer.files;r.style.borderColor="#eee",e.file=n[0],t.preventDefault()}))},blobToString:function(e){return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r){var t=new FileReader;t.onload=function(){console.log(t.result);var e=t.result.split("").map((function(e){return e.charCodeAt()})).map((function(e){return e.toString(16).toUpperCase()})).join("");r(e)},t.readAsBinaryString(e)})));case 1:case"end":return r.stop()}}),r)})))()},isGif:function(e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.blobToString(e.slice(0,6));case 2:return n=t.sent,o="47 49 46 38 39 61"==n||"47 49 46 38 37 61"==n,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})))()},isPng:function(e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.blobToString(e.slice(0,8));case 2:return n=t.sent,o="89 50 4E 47 0D 0A 1A 0A"==n,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})))()},isJpg:function(e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.size,t.next=3,r.blobToString(e.slice(0,2));case 3:return o=t.sent,t.next=6,r.blobToString(e.slice(-2,n));case 6:return c=t.sent,f="FF D8"==o&&"FF D9"==c,t.abrupt("return",f);case 9:case"end":return t.stop()}}),t)})))()},isImage:function(e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.isGif(e);case 2:if(t.t0=t.sent,t.t0){t.next=7;break}return t.next=6,r.isPng(e);case 6:t.t0=t.sent;case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t)})))()},createFileChunk:function(e){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10485760,t=[],n=0;n<this.file.size;)t.push({index:n,file:this.file.slice(n,n+r)}),n+=r;return t},calculateHashWorker:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r){e.worker=new Worker("/hash.js"),e.worker.postMessage({chunks:e.chunks}),e.worker.onmessage=function(t){var n=t.data,progress=n.progress,o=n.hash;e.hashProgress=Number(progress.toFixed(2)),o&&r(o)}})));case 1:case"end":return r.stop()}}),r)})))()},calculateHashIdle:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.chunks,r.abrupt("return",new Promise((function(r){var n=new f.a.ArrayBuffer,c=0,h=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=new FileReader;t.readAsArrayBuffer(r),t.onload=function(r){n.append(r.target.result),e()}})));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var f=Object(o.a)(regeneratorRuntime.mark((function o(f){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(c<t.length&&f.timeRemaining()>1)){o.next=7;break}return o.next=3,h(t[c].file);case 3:++c<t.length?e.hashProgress=Number((100*c/t.length).toFixed(2)):(e.hashProgress=100,r(n.end())),o.next=0;break;case 7:window.requestIdleCallback(l);case 8:case"end":return o.stop()}}),o)})));return function(e){return f.apply(this,arguments)}}();window.requestIdleCallback(l)})));case 2:case"end":return r.stop()}}),r)})))()},calculateHashSample:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r){for(var t=new f.a.ArrayBuffer,n=new FileReader,o=e.file,c=o.size,h=[o.slice(0,2097152)],l=2097152;l<c;){if(l+2097152>=c)h.push(o.slice(l,l+2097152));else{var d=l+1048576,v=l+2097152;h.push(o.slice(l,l+2)),h.push(o.slice(d,d+2)),h.push(o.slice(v-2,v))}l+=2097152}n.readAsArrayBuffer(new Blob(h)),n.onload=function(n){t.append(n.target.result),e.hashProgress=100,r(t.end())}})));case 1:case"end":return r.stop()}}),r)})))()},uploadFile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var t,n,o,c,f,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.file){r.next=2;break}return r.abrupt("return");case 2:return t=e.createFileChunk(e.file),r.next=5,e.calculateHashSample();case 5:return n=r.sent,e.hash=n,r.next=9,e.$http.post("/checkfile",{hash:e.hash,ext:e.file.name.split(".").pop()});case 9:if(o=r.sent,c=o.data,f=c.uploaded,h=c.uploadedList,!f){r.next=15;break}return r.abrupt("return",e.$message.success("秒传成功"));case 15:return e.chunks=t.map((function(e,r){var t=n+"-"+r;return{hash:n,name:t,index:r,chunk:e.file,progress:h.indexOf(t)>-1?100:0}})),r.next=18,e.uploadChunks(h);case 18:case"end":return r.stop()}}),r)})))()},uploadChunks:function(){var e=arguments,r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:[],o=r.chunks.filter((function(e){return-1==n.indexOf(e.name)})).map((function(e,r){var form=new FormData;return form.append("chunk",e.chunk),form.append("hash",e.hash),form.append("name",e.name),{form:form,index:e.index,error:0}})).map((function(e){var form=e.form,t=e.index;return r.$http.post("/uploadfile",form,{onUploadProgress:function(progress){r.chunks[t].progress=Number((progress.loaded/progress.total*100).toFixed(2))}})})),t.next=4,Promise.all(o);case 4:return t.next=6,r.mergeRequest();case 6:case"end":return t.stop()}}),t)})))()},sendRequest:function(e){var r=arguments,t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r.length>1&&void 0!==r[1]?r[1]:4,n.abrupt("return",new Promise((function(r,n){for(var f=e.length,h=0,l=!1,d=function(){var c=Object(o.a)(regeneratorRuntime.mark((function o(){var c,form,v;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!l){o.next=2;break}return o.abrupt("return");case 2:if(!(c=e.shift())){o.next=15;break}return form=c.form,v=c.index,o.prev=5,o.next=8,t.$http.post("/uploadfile",form,{onUploadProgress:function(progress){t.chunks[v].progress=Number((progress.loaded/progress.total*100).toFixed(2))}});case 8:h==f-1?r():(h++,d()),o.next=15;break;case 11:o.prev=11,o.t0=o.catch(5),t.chunks[v].progress=-1,c.error<3?(c.error++,e.unshift(c),d()):(l=!0,n());case 15:case"end":return o.stop()}}),o,null,[[5,11]])})));return function(){return c.apply(this,arguments)}}();c>0;)setTimeout((function(){d()}),2e3*Math.random()),c-=1})));case 2:case"end":return n.stop()}}),n)})))()},mergeRequest:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$http.post("/mergefile",{ext:e.file.name.split(".").pop(),size:10485760,hash:e.hash});case 2:return t=r.sent,n=t.data.url,r.next=6,e.$http.put("/user/info",{url:"/api"+n});case 6:case"end":return r.stop()}}),r)})))()},handleFileChange:function(e){var r=Object(n.a)(e.target.files,1)[0];r&&(this.file=r)}}},l=(t(341),t(14)),component=Object(l.a)(h,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v("用户中心")]),e._v(" "),t("i",{staticClass:"el-icon-loading"}),e._v(" "),t("div",{ref:"drag",attrs:{id:"drag"}},[t("input",{attrs:{type:"file",name:"file"},on:{change:e.handleFileChange}})]),e._v(" "),t("div",[t("el-progress",{attrs:{"stroke-width":20,"text-inside":!0,percentage:e.uploadProgress}})],1),e._v(" "),t("div",[t("el-button",{on:{click:e.uploadFile}},[e._v("上传")])],1),e._v(" "),t("div",[t("p",[e._v("计算hash的进度")]),e._v(" "),t("el-progress",{attrs:{"stroke-width":20,"text-inside":!0,percentage:e.hashProgress}})],1),e._v(" "),t("div",[t("div",{staticClass:"cube-container",style:{width:e.cubeWidth+"px"}},e._l(e.chunks,(function(r){return t("div",{key:r.name,staticClass:"cube"},[t("div",{class:{uploading:r.progress>0&&r.progress<100,success:100==r.progress,error:r.progress<0},style:{height:r.progress+"%"}},[r.progress<100&&r.progress>0?t("i",{staticClass:"el-icon-loading",staticStyle:{color:"#f56c6c"}}):e._e()])])})),0)])])}),[],!1,null,null,null);r.default=component.exports}}]);