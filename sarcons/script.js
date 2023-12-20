$(document).ready(function () {
  setTimeout(function() {
    $('body').css('overflow', 'auto');
    $('#logoPrl').addClass('loaded');
    setTimeout(function() {
      $('.preload').css('opacity', '0');
    }, 200);
    setTimeout(function() {
      $('.preload').css('display', 'none');
    }, 1000);
  }, 800);

  setTimeout(function() {
    $('.name').css({'opacity': '1', 'transform': 'translate(0, 0)'});
    $('.collapsible li').each(function (index) {
      var collapsibleLi = $(this);
      setTimeout(function () {
        collapsibleLi.addClass('animact');
      }, index * 200);
    });
    $('.collapsible-header img').each(function (index) {
      var collapsibleImg = $(this);
      setTimeout(function () {
        collapsibleImg.addClass('animact');
      }, index * 200);
    });
  }, 1450);


  $('.collapsible.destroy').collapsible('destroy');

  // Анимации карточек

  /*$(window).scroll(function() {
    $('.card').each(function(index) {
      var cardPosition = $(this).offset().top;
      var windowHeight = $(window).height();
      var scrollPosition = $(window).scrollTop();
      var card = $(this);

      if (cardPosition < scrollPosition + windowHeight - 100) {
        setTimeout(function () {
          card.addClass('animact');
        }, index * 200);
      }
    });
  });*/

  /*setTimeout(function() {
    $('.card').each(function (index) {
      var card = $(this);
      setTimeout(function () {
        card.addClass('animact');
      }, index * 200);
    });
  }, 1100);*/


  // Появление меню при пролистывании
  // Функция для обновления высоты при изменении размера окна
  function updateParallaxHeight() {
    var parallaxHeight = $('.parallax-container').outerHeight();
    $(window).data('parallaxHeight', parallaxHeight - 30);
  }

  // Инициализация
  updateParallaxHeight();

  // Вызывается при прокрутке
  $(window).bind('scroll', function () {
    var parallaxHeight = $(window).data('parallaxHeight');
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > parallaxHeight) {
      $('.navbar-fixed').addClass('scrolled');
      $('.navbar-fixed .pagename').css({
        'opacity': '1',
        'transform': 'scale(1) translate(-50%, 0)'
      });
      $('.logoMini img').css({
        'opacity': '1',
        'transform': 'translate(0, 0)'
      });
    }
    else {
      $('.navbar-fixed').removeClass('scrolled');
      $('.navbar-fixed .pagename').css({
        'opacity': '0',
        'transform': 'scale(1.2) translate(-45%, 0)'
      });
      $('.logoMini img').css({
        'opacity': '0',
        'transform': 'translate(0, 60px)'
      });
    }
  });

  // Пересчитываем высоту при изменении размера окна
  $(window).resize(function () {
    updateParallaxHeight();
  });


  // Появление списка при пролистывании (страница записи)
  function updateMenuHeight() {
    var menuHeight = $('.orderMenu').outerHeight();
    $(window).data('menuHeight', menuHeight - 30);
  }

  updateMenuHeight();

  $(window).bind('scroll', function () {
    var menuHeight = $(window).data('menuHeight');
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > menuHeight) {
      $('.fixedMenu').css('z-index','999');
      setTimeout(function() {
        $('.fixedMenu').css({
          'opacity':'1',
          'transform':'translate(0, 0)'
        });
      }, 10);
    }
    else {
      $('.fixedMenu').css('z-index','-1');
      setTimeout(function() {
        $('.fixedMenu').css({
          'opacity':'0',
          'transform':'translate(0, 40px)'
        });
      }, 10);
    }
  });

  $(window).resize(function () {
    updateMenuHeight();
  });
});

// Bump Effect
/*$(window).scroll(function() {
    var windowHeight = $(window).height();
    var documentHeight = Math.max($(document).height(), $(document.body).height(), $(document.documentElement).height());
    var scrollPosition = $(window).scrollTop();

    // Проверяем, достигли ли мы конца страницы
    if (scrollPosition + windowHeight >= documentHeight) {
        console.log('Достигнут низ страницы');
    }
    if (scrollPosition === 0) {
      $('body').css('margin-top', '60px');
      setTimeout(function() {
        $('body').css('margin-top', '0');
      }, 300);
      console.log('Достигнут верх страницы');
    }
});*/


/*$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 590) {
    $('.navbar-fixed').addClass('scrolled');
    $('.navbar-fixed .pagename').css({
      'opacity': '1',
      'transform': 'scale(1) translate(-50%, 0)'
    });
  } else {
    $('.navbar-fixed').removeClass('scrolled');
    $('.navbar-fixed .pagename').css({
      'opacity': '0',
      'transform': 'scale(1.2) translate(-45%, 0)'
    });
  }
});*/


$('body').on('click', '#order', function() {
  window.open('../order/index.html', '_blank');

  /*
  $('body').append('<div class="transit"></div>');

  setTimeout(function() {
    location.href = '../order/index.html';
  }, 1200);
  setTimeout(function() {
    $('.transit').css({
      'opacity': '0',
      'position': 'relative'
    });
  }, 1210);
  */
});



$('#orderForm').click(function() {
  window.open('https://forms.yandex.ru/u/627c9bbd400994416fd6eb11/', '_blank');
});

$('a.close').click(function() {
  location.href = '../fortepiano/index.html';
});

$('#downloadFiz').click(function() {
  location.href = 'files/Для_физических_лиц.zip'
});

$('#downloadYur').click(function() {
  location.href = 'files/Для_юридических_лиц.zip'
});
