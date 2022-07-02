$(document).ready(function () {
   $(".product-box").hover(function () {
     $(this).find('.prodicon').toggleClass("fa-bounce");
     // $(this).toggleClass("prodicon-hover");
     // $(this).toggleClass("fa-bounce");
   });

 });

 var initialSrc = "images/brand.png";
 var scrollSrc = "images/brand-white.png";

var navbarbg = function(){
  var windowscroll = $(window).scrollTop();
  var windowsize = $(window).width();
   // console.log(windowsize);
   if ( (windowscroll > 100) || (windowsize < 975 ) ) {
       $(".navbar").removeClass("navbar-light").addClass("navbar-dark bg-dark");
       $(".logo").attr("src", scrollSrc);
   }
   else {
      $(".navbar").removeClass("navbar-dark bg-dark").addClass("navbar-light");
      $(".logo").attr("src", initialSrc);
   }
}

$(document).ready(navbarbg);
$(window).resize(navbarbg);
$(window).scroll(navbarbg);
