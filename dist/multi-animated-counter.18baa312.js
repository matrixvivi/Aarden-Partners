parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"in1Q":[function(require,module,exports) {
$(function(){var t=["#counters_1","#counters_2","#counters_3","#counters_hero"],n=".counter",o=3e3;function a(){elValFromTop=[];var a=$(window).height(),i=$(this).scrollTop();t.forEach(function(t,r){try{elValFromTop[r]=Math.ceil($(t).offset().top)}catch(c){return}a+i>elValFromTop[r]&&function(t){var a,i,r,c=0;$(n).each(function(){a=$(this).attr("data-TargetNum"),i=$(this).attr("data-Speed"),r=$(this).attr("data-Direction"),easing=$(this).attr("data-Easing"),null==i&&(i=o),$(this).addClass("c_"+c),e(a,c,i,t,r,easing),c++})}(t)})}function e(t,o,a,i,r,c){null==c&&(c="swing"),$(i+" "+n+".c_"+o).animate({num:t},{duration:+a,easing:c,step:function(n){"reverse"==r?$(this).text(t-Math.floor(n)):$(this).text(Math.floor(n))},complete:e})}$(window).on("scroll",function(){a()}),a()});
},{}]},{},["in1Q"], null)
//# sourceMappingURL=/multi-animated-counter.18baa312.js.map