particlesJS("particlesJS", {
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable":false
      }
    },
    "color": {"value":"#246d4e"},
    "shape": {
      "type": "circle",
      "polygon": {"nb_sides": 3},
    },
    "opacity": {
      "value": 0.2,
      "random": true,
      "anim": {"enable": true, "speed": 0.5, "opacity_min": 0.04, "sync": false}
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {"enable": false, "speed": 4, "size_min": 0.3, "sync": false}
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {"enable":false,"rotateX":600,"rotateY":600}
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {"enable":true,"mode":"repulse"},
      "onclick": {"enable":true,"mode":"remove"},
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 150,
        "duration": 1.5
      },
      "remove": {"particles_nb":4}
    }
  },
  "retina_detect": true
});

var count_particles, stats, update;
count_particles = document.querySelector('.js-count-particles');
update = function() {
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    //count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);


$('.phone .play').click(function() {
  var play = $(this);
  var video = play.parent().find('video');

  $(this).css('opacity', '0');
  video.trigger('play');
  video.attr('controls', 'true');
  setTimeout(function() {
    play.css('z-index', '-1');
  }, 200)
})

$('.scrolling').click(function() {
  $('html').animate({scrollTop: $(this).offset().top + 70}, 600);
})

$('.modalTrigger').click(function() {
  var modalWindow = $(this).attr('modalWindow');

  $(modalWindow).css('z-index', '99');
  $('body').append('<div class="modalOverlay"></div>');
  setTimeout(function() {
    $(modalWindow).css('opacity', '1');
    $('body').find('.modalOverlay').css('opacity', '1');
  }, 300)
})

$('.modal .modalHeader .close').click(function() {
  var modalWindow = $(this).parent().parent();

  modalWindow.css('opacity', '');
  $('body').find('.modalOverlay').css('opacity', '');
  setTimeout(function() {
    modalWindow.css('z-index', '');
    $('body').find('.modalOverlay').remove();
  }, 300)
})

$('body').on('click', '.modalOverlay', function() {
  var modalWindow = $('.modal');

  modalWindow.css('opacity', '');
  $('body').find('.modalOverlay').css('opacity', '');
  setTimeout(function() {
    modalWindow.css('z-index', '');
    $('body').find('.modalOverlay').remove();
  }, 300)
})



$(window).scroll(function() {
  if ($(this).scrollTop() > 60) {
    $('nav').addClass('scroll');
  }
  else {
    $('nav').removeClass('scroll');
  }
})
