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

  //Replace all SVG images with inline SVG
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Replace image with new SVG
            $img.replaceWith($svg);
        });
    });

});

//---------------------------------- on window load ----------------------------------
$(window).load(function(){
  bannerHeight();
  $('section').fadeIn();
  vAlign();
  fixArrow();
});

//--------------------------------- on window resize ---------------------------------
$(window).resize(function(){
	bannerHeight();
  vAlign();
});

//--------------------------------- on window scroll ---------------------------------
$(window).scroll(function(){
  navBar();
  fixArrow();
  rotateArrow();
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
  });
}

function navBar(){
  //nav bar positioning
  var $navBar = $('header');
  var navBarHeight = $navBar.height();
  scrollPos = $(window).scrollTop();
  pageOffset = pageHeight - navBarHeight;
  if(pageOffset < scrollPos){
    $navBar.addClass('scroll');
  }else{
    $navBar.removeClass('scroll');
  }
}

//artificial fixed positioning on scroll arrows
function fixArrow(){
  scrollPos = $(window).scrollTop();

  $('section').each(function(){
    var sectionOffset = $(this).offset();
    var sectionHeight = $(this).height();
    var $triangle = $(this).children('.js-fixed');

    var scrollValue = (scrollPos - sectionOffset.top) + sectionHeight - 175;
    console.log(scrollValue)
    $triangle.css('top', scrollValue)
  });
}

function rotateArrow(){
  scrollPos = $(window).scrollTop();
  var contactTop = $('section.contact').offset();
  var contactHeight = $('section.contact').height();
  var contactCalc = contactHeight / 1.5;
  if(scrollPos > (contactTop.top - contactCalc)){
    $('.z-one').addClass('rotate');
  }
  if(scrollPos < (contactTop.top - contactCalc)){
    $('.z-one').removeClass('rotate');
  }
}