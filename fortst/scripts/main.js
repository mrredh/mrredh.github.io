function parallax() {
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();

  //$('header .content .heading').css('padding', 'calc(6vw - '+ (scroll)*.5 +'px)');
  if ($(window).scrollTop() < 200) {
    $('header .content .heading').css({
      // 'margin': '0 '+ (scroll)/7 +'px',
      // 'padding': 'calc(6vw - '+ (scroll)/7 +'px)',
      // 'border-radius': 'calc(50px - '+ (scroll)/7 +'px)'
      'clip-path': 'inset('+ (scroll)/70 +'vw round calc(50px - '+ (scroll)/7 +'px)'
    })
  }
  if ($(window).scrollTop() < 400) {
    $('header video, header .videoControl').css({
      'opacity': 1-(scroll)/350,
      'transform': 'translateY(-'+ (scroll)/5 +'px)'
    });
    $('header .content .desc').css('opacity', 0.4+(scroll)/700);
    $('header .book').css({
      'opacity': 0+(scroll)/500,
      'transform': 'translateY(calc(7.4vw - '+ (scroll)/60 +'vw))'
    })
  }
}


function scrollBlock() {
  var scroll = $(window).scrollTop();
  var blockTop = $('.block').offset().top + 400;
  var windowHeight = $(window).height();

  if (blockTop <= scroll + windowHeight) {
    var newMargin = 100 - ((scroll + windowHeight - blockTop) / 2);
    var newBorderRad = 50 - ((scroll + windowHeight - blockTop) / 10);

    if (newMargin >= 0) {
      $('.block').css({
        'clip-path': 'inset('+ newMargin +'px round '+ newBorderRad +'px)'
        // 'margin': '0 '+newMargin + 'px',
        // 'border-radius': newBorderRad + 'px'
      })
    }
    else {
      $('.block').css({
        'clip-path': 'inset(0px round 0px)'
        // 'margin': '0px',
        // 'border-radius': '0px'
      })
    }
  }
}


function scrollName() {
  var scroll = $(window).scrollTop();
  var headingTop = $('.heading h1').offset().top - 35;
  var windowHeight = $(window).height();

  if (headingTop < scroll) {
    $('nav .name').addClass('visible');
    console.log(headingTop+'>'+scroll);
  }
  else {
    $('nav .name').removeClass('visible');
    console.log(headingTop+'<'+scroll);
  }
}


function scrollNav() {
  if ($(this).scrollTop() > 0) {
    $('nav').addClass('scroll');
  }
  else {
    $('nav').removeClass('scroll');
  }
}


function anim() {
  $('.animated').each(function(index) {
    var position = $(this).offset().top;
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();
    var element = $(this);

    if (position < scrollPosition + windowHeight - 250) {
      element.removeClass('animated');
    }
  })
}


$('header .videoControl.play').click(function() {
  var video = $(this).parent().find('video');
  var videoPlay = $(this);
  var videoPause = $(this).parent().find('.videoControl.pause');

  videoPlay.css('display', 'none');
  videoPause.css('display', 'block');
  video.trigger('play');
})

$('header .videoControl.pause').click(function() {
  var video = $(this).parent().find('video');
  var videoPause = $(this);
  var videoPlay = $(this).parent().find('.videoControl.play');

  videoPause.css('display', 'none');
  videoPlay.css('display', 'block');
  video.trigger('pause');
})


// $('header .video .play').click(function() {
//   var video = $(this).parent().find('video');
//   var videoPlay = $(this);
//   videoPlay.css('opacity', '0');
//   video.css('opacity', '1');
//   video.trigger('play');
//   video.css('pointer-events', 'all');
//   setTimeout(function() {
//     videoPlay.css('display', 'none');
//   }, 400)
// })

$('.scrolling').click(function() {
  $('html').animate({scrollTop: $('#scrolled').offset().top - 120}, 800);
})

$('section h3 span').click(function() {
  $('html').animate({scrollTop: $('#courseOrder').offset().top - 120}, 800);
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

$(window).scroll(function() {
  parallax();
  scrollNav();
  scrollName();
  scrollBlock();
  anim();
})

$(document).ready(function() {
  parallax();
})

$(window).bind('load', function() {
  anim();
})
