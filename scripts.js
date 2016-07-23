$(window).scroll(function() {
  if ($('#page-top').scrollTop() > 50) {
      $('.head-wrap').addClass('shrink');
  } else {
      $('.head-wrap').removeClass('shrink');
  }
});
$('.logo').click(function() {
    $('html,body').animate({
        scrollTop: $('html').offset().top},
        'slow');
});
$('.scroll-about, .continue').click(function() {
    $('html,body').animate({
        scrollTop: $('.about').offset().top},
        'slow');
});
$('.scroll-schedule').click(function() {
    $('html,body').animate({
        scrollTop: $('.schedule').offset().top},
        'slow');
});
$('.scroll-faq').click(function() {
    $('html,body').animate({
        scrollTop: $('.faq').offset().top},
        'slow');
});
$('.scroll-sponsor').click(function() {
    $('html,body').animate({
        scrollTop: $('.sponsor').offset().top},
        'slow');
});
$('.scroll-support').click(function() {
    $('html,body').animate({
        scrollTop: $('.support').offset().top},
        'slow');
});
$(document).on('scroll', function(e) {
  //Current-About
  if (window.pageYOffset >= $('.about').offset().top && window.pageYOffset < $('.schedule').offset().top) {
    $('.scroll-about').addClass('current');
  }
  else {
    $('.scroll-about').removeClass('current');
  };
  //Current-Schedule
  if (window.pageYOffset >= $('.schedule').offset().top && window.pageYOffset < $('.faq').offset().top) {
    $('.scroll-schedule').addClass('current');
  }
  else {
    $('.scroll-schedule').removeClass('current');
  };
  //Current-FAQ
  if (window.pageYOffset >= $('.faq').offset().top && window.pageYOffset < $('.sponsor').offset().top) {
    $('.scroll-faq').addClass('current');
  }
  else {
    $('.scroll-faq').removeClass('current');
  };
  //Current-Sponsor
  if (window.pageYOffset >= $('.sponsor').offset().top && window.pageYOffset < $('.support').offset().top) {
    $('.scroll-sponsor').addClass('current');
  }
  else {
    $('.scroll-sponsor').removeClass('current');
  };
  //Current-Support
  if (window.pageYOffset + 750 >= $('.support').offset().top && window.pageYOffset + 750 < $('.made').offset().top + 750) {
    $('.scroll-support').addClass('current');
  }
  else {
    $('.scroll-support').removeClass('current');
  };
});
