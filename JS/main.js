$(document).ready(function(){
	bannerHeight();
});

$(window).resize(function(){
	bannerHeight();
});

function bannerHeight(){
	var pageHeight = $(window).height();
	$('.banner-overlay, #simple3D').css('height', pageHeight);
}

$(document).ready(function(){

$('.hamburger-container').click(function(){
       var $hamburger = $(this).find('.hamburger')
       var $nav = $('nav ul')
       if(!$hamburger.hasClass('active')){
           $hamburger.removeClass('dormant');
           $hamburger.addClass('active');
           $nav.addClass('active').slideDown();
       }else{
           $hamburger.removeClass('active');
           $hamburger.addClass('dormant');
           $nav.removeClass('active').slideUp();
       }
   });
   
   
   $("#simple3D").simple3D({
   moveX:3, // 1 - 5
   moveY:3, // 1 - 5
   bgImage:true, // use background image mode
   targetAll:true,
   reverseX: true,
   reverseY: true
   });
   
   
   
   });