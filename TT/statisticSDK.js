!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=i(o),u=n(4),a=i(u),c=n(5),s=i(c),p=function(){function e(){(0,a["default"])(this,e),this.HOST="http://stastistics.maka.im",this.API_PROJECT_PV="/api/project/pv",this.API_PROJECT_UV="/api/project/uv",this.API_PROJECT_SHARE="/api/project/share",this.API_PROJECT_REGION="/api/project/region",this.API_PROJECT_LEAVE="/api/project/leave",this.API_PROJECT_TAIL_AD="/api/project/tail_ad",this.API_PROJECT_PAGE_TIME="/api/project/page_leave"}return(0,s["default"])(e,[{key:"setData",value:function(e){var t=this;this.uid=e.uid,this.pid=e.pid,this.second=0,this.from=t.getParam("from"),this.pageInterval=null,this.countPv(0),this.getProvince(),this.interval=setInterval(function(){t.second+=30,t.second>300?clearInterval(t.interval):t.countLeave()},3e4)}},{key:"countPv",value:function(e){var t=this,n=e+1,i="?uid="+t.uid+"&pid="+t.pid+"&page="+n,o="&source="+t.getViewSource(),r=t.getNowFormatDate()+"_"+t.uid+"_"+t.pid+"_uv";clearInterval(t.pageInterval),t.countLeavePage(n,1);var u=0;t.pageInterval=setInterval(function(){u+=5,t.countLeavePage(n,u)},5e3),$.getScript(t.HOST+t.API_PROJECT_PV+i+o).done(function(e){var o=t.getCookie(r);null==o?$.getScript(t.HOST+t.API_PROJECT_UV+i).done(function(e){t.setCookie(r,n)}):o.indexOf(n)<0&&$.getScript(t.HOST+t.API_PROJECT_UV+i).done(function(e){t.setCookie(r,o+"-"+n)})})}},{key:"countShare",value:function(e){var t=this,n="?uid="+t.uid+"&pid="+t.pid+"&source="+e;$.getScript(t.HOST+t.API_PROJECT_SHARE+n).done(function(e){})}},{key:"countRegion",value:function(e){var t=this,n="?uid="+t.uid+"&pid="+t.pid+"&province="+e;$.getScript(t.HOST+t.API_PROJECT_REGION+n).done(function(e){})}},{key:"countLeave",value:function(){var e=this,t="?uid="+e.uid+"&pid="+e.pid+"&duration="+e.second;$.getScript(e.HOST+e.API_PROJECT_LEAVE+t).done(function(e){})}},{key:"countLeavePage",value:function(e,t){var n=this,i="?uid="+n.uid+"&pid="+n.pid+"&duration="+t+"&page="+e;$.getScript(n.HOST+n.API_PROJECT_PAGE_TIME+i).done(function(e){})}},{key:"countTailAd",value:function(){var e=this,t="?uid="+e.uid+"&pid="+e.pid;$.getScript(e.HOST+e.API_PROJECT_TAIL_AD+t).done(function(e){})}},{key:"getDevice",value:function(){return/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"iPhone":/(Android)/i.test(navigator.userAgent)?"Android":"other"}},{key:"getViewSource",value:function(){var e=this,t="from="+e.from;return null==e.from&&(t="none"),t}},{key:"getProvince",value:function(){var e=this;$.ajax({url:"https://geo.maka.im/geoip",type:"GET",dataType:"json",success:function(t){var n=t.Province;e.countRegion(n?n:"其它"),n||Sentry&&Sentry.withScope(function(e){e.setLevel("info");var n=new Error("Unknow ip: "+(0,r["default"])(t));Sentry.captureException(n)})},error:function(t){e.countRegion("其它"),Sentry&&Sentry.withScope(function(e){e.setLevel("info");var n=new Error("Request ip error: "+(0,r["default"])(t));Sentry.captureException(n)})}})}},{key:"setCookie",value:function(e,t,n,i){var o=1,r=new Date,u=i?i:"/";n?r.setTime(r.getTime()+parseInt(n)):r.setTime(r.getTime()+24*o*60*60*1e3),document.cookie=e+"="+escape(t)+";expires="+r.toGMTString()+";path="+u}},{key:"getCookie",value:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}},{key:"getParam",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}},{key:"getNowFormatDate",value:function(){var e=new Date,t=0,n=0,i=0,o="";return t=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),o+=t,o+=n>=10?n:"0"+n,o+=i>=10?i:"0"+i}}]),e}();window.statisticSDK=new p,t["default"]=window.statisticSDK},function(e,t,n){e.exports={"default":n(2),__esModule:!0}},function(e,t,n){var i=n(3);e.exports=function(e){return(i.JSON&&i.JSON.stringify||JSON.stringify).apply(JSON,arguments)}},function(e,t){var n=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var o=n(6),r=i(o);t["default"]=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r["default"])(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()},function(e,t,n){e.exports={"default":n(7),__esModule:!0}},function(e,t,n){var i=n(8);e.exports=function(e,t,n){return i.setDesc(e,t,n)}},function(e,t){var n=Object;e.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}}]);