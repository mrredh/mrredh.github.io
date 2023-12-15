$(window).bind('scroll', function () {
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
});


$('body').on('click', '#order', function() {
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
});

$('#orderForm').click(function() {
  window.open('https://forms.yandex.ru/u/627c9bbd400994416fd6eb11/', '_blank');
});

$('a.close').click(function() {
  location.href = '../fortepiano/index.html';
});
