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

  //smoothscroll
  $('a.scroll').smoothScroll();

  //get positioning values of each section
  $('.section').each(function(){
    var sectionHeight = $(this).height();
    var sectionOffset = $(this).offset();
  });

});

$(window).load(function(){
  bannerHeight();
  vAlign()
});

$(window).resize(function(){
	bannerHeight();
  vAlign()
});

function bannerHeight(){
	var pageHeight = $(window).height();
	$('.banner-overlay, #simple3D, section.full-height, .match-parent-height').css('height', pageHeight);
}

function vAlign(){
  var $vaChild = $('.v-align');
  $vaChild.each(function(){
    var vaChildHeight = $(this).height();
    var vaParentHeight = $(this).parent().height();

    var offset = (vaParentHeight - vaChildHeight) / 2;
    $(this).css('marginTop', offset);
  });

}