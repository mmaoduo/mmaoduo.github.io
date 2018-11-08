(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js .slide0').hasAttr('src')) { a='src'; } $('.js .slide0').attr(a, (dpi>1) ? 'images/gou-gou-1262.jpeg' : 'images/gou-gou-631.jpeg');
var a='data-src'; if($('.js .slide1').hasAttr('src')) { a='src'; } $('.js .slide1').attr(a, (dpi>1) ? 'images/02-overhead-shot-1262.png' : 'images/02-overhead-shot-631.png');
var a='data-src'; if($('.js .slide2').hasAttr('src')) { a='src'; } $('.js .slide2').attr(a, (dpi>1) ? 'images/55da9ddfb98b5-1262.png' : 'images/55da9ddfb98b5-631.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 450,dots: true,arrows: true,infinite: false,autoplay: true,pauseOnHover: true,autoplaySpeed: 4450});
});