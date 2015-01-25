//---------------------------------- on doc ready ----------------------------------
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

//---------------------------------- on window load ----------------------------------
$(window).load(function(){
  bannerHeight();
  $('section').fadeIn();
  vAlign();
});

//--------------------------------- on window resize ---------------------------------
$(window).resize(function(){
	bannerHeight();
  vAlign()
});

//--------------------------------- on window scroll ---------------------------------
$(window).scroll(function(){
  navBar()
});

//------------------------------------ functions -------------------------------------

function bannerHeight(){
	pageHeight = $(window).height();
	$('.banner-overlay, #simple3D, section.full-height, .match-parent-height').css('height', pageHeight);
  $('.about').css('marginTop', pageHeight)
};

function vAlign(){
  var $vaChild = $('.v-align');
  $vaChild.each(function(){
    var vaChildHeight = $(this).height();
    var vaParentHeight = $(this).parent().height();

    var topOffset = (vaParentHeight - vaChildHeight) / 2;
    $(this).css('paddingTop', topOffset);

    console.log('child height: ' + vaChildHeight + '  parent height: ' + vaParentHeight + '  offset: ' + topOffset)
  });
}

function navBar(){
  //nav bar positioning
  var $navBar = $('header');
  var navBarHeight = $navBar.height();
  pageOffset = pageHeight - navBarHeight;
  scrollPos = $(window).scrollTop();
  if(pageOffset < scrollPos){
    $navBar.addClass('scroll');
  }else{
    $navBar.removeClass('scroll');
  }
}