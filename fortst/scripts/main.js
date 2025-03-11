function parallax() {
  var scroll = $(window).scrollTop();

  $('header .parallaxed.one').css('transform', 'translate(-'+ (0+(scroll)*.2) +'px, '+ (0+(scroll)*.3) +'px) rotate(-'+ (5+(scroll)*.05) +'deg)');
  $('header .parallaxed.two').css({'transform': 'translate(-'+ (0+(scroll)*.1) +'px, '+ (0+(scroll)*.4) +'px) rotate(-'+ (0+(scroll)*.1) +'deg)', 'filter': 'blur('+scroll/75+'px) grayscale(1) contrast(0.1) brightness(1.85)'});
  $('header .parallaxed.three').css('transform', 'translate(-'+ (0+(scroll)*.2) +'px, '+ (0+(scroll)*.2) +'px) rotate(-'+ (10+(scroll)*.1) +'deg)');
  $('header .parallaxed.four').css({'transform': 'translate('+ (0+(scroll)*.1) +'px, '+ (0+(scroll)*.3) +'px) rotate('+ (15+(scroll)*.07) +'deg)', 'filter': 'blur('+scroll/75+'px) grayscale(1) contrast(0.1) brightness(1.85)'});
  $('header .parallaxed.five').css('transform', 'translate('+ (0+(scroll)*.1) +'px, '+ (0+(scroll)*.1) +'px) rotate('+ (10+(scroll)*.05) +'deg)');
  $('header .parallaxed.six').css({'transform': 'translate('+ (0+(scroll)*.1) +'px, '+ (0+(scroll)*.2) +'px) rotate('+ (5+(scroll)*.02) +'deg)', 'filter': 'blur('+scroll/75+'px) grayscale(1) contrast(0.1) brightness(1.85)'});
}

$('header .video .play').click(function() {
  var video = $(this).parent().find('video');
  var videoPlay = $(this);
  videoPlay.css('opacity', '0');
  video.css('opacity', '1');
  video.trigger('play');
  video.css('pointer-events', 'all');
  setTimeout(function() {
    videoPlay.css('display', 'none');
  }, 400)
})

$('.scrolling').click(function() {
  $('html').animate({scrollTop: $('#scrolled').offset().top - 120}, 400);
})

function modalOpen(modal) {
  $(modal).css('display', 'block');
  $('body').append('<div class="modalOverlay"></div>');
  setTimeout(function() {
    $(modal).css('opacity', '1');
    $('body').find('.modalOverlay').css('opacity', '1');
  }, 100)
}

function modalClose(modal) {
  $(modal).css('opacity', '0');
  $('body').find('.modalOverlay').css('opacity', '0');
  setTimeout(function() {
    $(modal).css('display', 'none');
    $('.modalOverlay').remove();
  }, 500)
}

$('.modalTrigger').click(function() {
  var modal = $(this).attr('trigger');
  modalOpen(modal)
})

$('.modal .close').click(function() {
  var modal = $(this).parent().parent();
  modalClose(modal);
})

$('body').on('click', '.modalOverlay', function() {
  var modal = $('.modal');
  modalClose(modal);
})

function scrollNav() {
  if ($(this).scrollTop() > 200) {
    $('nav').addClass('scroll');
  }
  else {
    $('nav').removeClass('scroll');
  }
}

$(window).scroll(function() {
  parallax();
  scrollNav();
})
