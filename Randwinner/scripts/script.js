$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var video = $('#videoId').val();
    if (video.indexOf('youtu.be') > -1) {
      var videoId = video.split('/')[3];
    }
    else if (video.indexOf('youtube.com') > -1) {
      var cutLnk = video.split('=')[1];
      var videoId = cutLnk.split('&')[0];
    }
    else if (video == '') {
      Materialize.toast('Отдай ссылку на видео', 4000);
    }
    else {
      Materialize.toast('Чё за хуйня, этот ваш ' + video + '?!', 4000);
    }

    var api_key = "AIzaSyB32XnA29u9yy2pF7HqQNkauc91QJlVrFw";
    var url = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=" + api_key + "&videoId=" + videoId;
    var result = "";

    $('#results').empty();

    // Get data from YouTube API
    $.get(url, function(data) {
      var array = data.items;
      var rand = array[Math.floor(Math.random() * array.length)];
      var date = rand.snippet.topLevelComment.snippet.publishedAt;
      result = `
          <div class="comment">
            <img src="${rand.snippet.topLevelComment.snippet.authorProfileImageUrl}" id="profImg">
            <span class="likes">
              <i class="material-icons left">thumb_up_alt</i>
              <input value="${rand.snippet.topLevelComment.snippet.likeCount}">
            </span>
            <input class="h5" value="${rand.snippet.topLevelComment.snippet.authorDisplayName}" spellcheck="false"><br>
            <textarea class="p" spellcheck="false">${rand.snippet.topLevelComment.snippet.textOriginal}</textarea>
            <br>
          </div>
      `;
      $('#results').append(result);
      
      //<input class="date" value="${date.replace(/-/g,".").replace(/T/g," в ")}">


      // Adaptive Textarea Height
      var txtHeight = $('.p:first').get(0).scrollHeight + 'px';
      $('.p').css('height', txtHeight);

      var textarea = document.querySelector('textarea');
      textarea.addEventListener('keyup', function() {
        if(this.scrollTop > 0){
          this.style.height = this.scrollHeight + "px";
        }
        else{
          this.style.height = this.scrollHeight + "px";
        }
      });


      // Adaptive Comment Header
      var h5 = $('.h5');
      if (h5.val().length > 15) {
        h5.css({
          'margin-top': '0',
          'margin-bottom': '5px',
          'font-size': '25px',
        });
      };

      h5.keyup(function() {
        if (h5.val().length > 15) {
          h5.css({
            'margin-top': '0',
            'margin-bottom': '5px',
            'font-size': '25px',
          });
        }
        else {
          h5.css({
            'margin-top': '',
            'margin-bottom': '',
            'font-size': '',
          });
        }
      });



      // Log YouTube data
      console.log(rand);
    });
  });


  // Img Replace
  $('body').on('click', '#profImg', function() {
    $('.reImg').css({
      'opacity': '1',
      'margin-left': '50px',
      'z-index': '1',
    });
  });
  $('.btnClose').click(function() {
    $('.reImg').css({
      'opacity': '',
      'margin-left': '',
      'z-index': '',
    });
  });

  $('#reImg #replace').click(function() {
    var imgUrl = $('#reImg input');
    if (imgUrl.val() == '') {
      Materialize.toast('Мне чё, из ануса аву достать?!', 4000);
      $(imgUrl).css('animation', 'errInp 0.6s ease');
      $(imgUrl).focus();
    }
    else {
      var imgUrl = $('#reImg input').val();
      $('.comment img').attr('src', imgUrl);
    }
  });

  $('#selectComm').click(function() {
    var commUrl = $('#videoId').val();
    if (commUrl != '') {
      window.open(
        commUrl,
        '_blank'
      );
    }
  });

  // Reset replace img block
  $('.btnDiv').click(function() {
    $('.reImg').css({
      'opacity': '',
      'margin-left': '',
      'z-index': '',
    });
  });


  // Inputs Options
  $('.videoInp').focusin(function() {
    $('.inputDiv, .btnDiv').addClass('border');
  });
  $('.videoInp').focusout(function() {
    $('.inputDiv, .btnDiv').removeClass('border');
  });

  $('#clearBtn').click(function() {
    $('.videoInp').val('');
    clsInp();
  });

  $('.videoInp').keyup(clsInp);

  function clsInp() {
    if ($('.videoInp').val() != '') {
      $('.inputDiv').css('margin-left', '10px');
      $('.btnDiv').css('animation', 'btnSlide 0.5s ease forwards');
      $('.block').css('margin-top', '-490px');
      $('.inpC').css('margin-top', '5px');
      $('#clearBtn').css({
        'opacity': '1',
        'z-index': '2',
      });
      $('#clearBtn>i').css({
        'margin-left': '0',
        'transform': 'rotate(0)',
      });
      setTimeout(function() {
        $('.btnDiv, .btnDiv button').css('z-index', '2');
      }, 700);
    }
    else {
      $('.inputDiv').css('margin-left', '');
      $('.btnDiv').css('animation', 'btnOutSlide 0.5s ease forwards');
      $('.block').css('margin-top', '');
      $('.inpC').css('margin-top', '');
      $('.comment').css('animation', 'commOut 0.4s ease');
      $('#clearBtn').css({
        'opacity': '',
        'z-index': '',
      });
      $('#clearBtn>i').css({
        'margin-left': '',
        'transform': '',
      });
      setTimeout(function() {
        $('.btnDiv, .btnDiv button').css('z-index', '');
        $('.comment').remove();
      }, 400);
    }
  }



  // JSON
  var changeLg = {
    "change_log": [
      {"change":
        "1. Теперь поле ввода поддерживает ссылки любого вида, будь то сокращённые или любые другие. И не стоит пытаться достать комменты с порнхаба — вы будете посланы нахуй."
      },
      {"change":
        "2. Улучшена адаптация под разное разрешение экрана или окна браузера"
      },
      {"change":
        "3. Немнго подтянут UI"
      },
    ],
    "bugs": [
      {"bug":
        "1. Яндекс хуеет от размытия и анимаций (проходит после нескольких перезагрузок). При использовании Гугла или других браузеров, на движке webkit, всё ок."
      },
      {"bug":
        "2. При задрачивании кнопки обновления комментариев, включится защита от DDOS-атак, выползет ошибка Api и ничего работать больше нихуя не будет."
      },
    ]
  };

  $(changeLg.change_log).each(function(index, item) {
    $('#changes').append('<p>' + item.change + '<p/>');
  });
  $(changeLg.bugs).each(function(index, item) {
    $('#bugs').append('<p>' + item.bug + '</p>');
  });


  // Dialog Windows
  $('#close').click(function() {
    $(this).css({
      'animation': 'cBtnOut 0.4s ease forwards',
      'z-index': '-4',
    });
    $('#change_log').css({
      'animation': 'cBtnIn 0.4s ease forwards',
      'z-index': '',
    });
    $('.content').css({
      'filter': '',
      'z-index': '',
    });
    $('.dialog#changeLg').css({
      'opacity': '',
      'margin-top': '',
    });
    setTimeout(function() {
      $('.dialog').css('z-index', '');
    }, 200);
  });


  $('#change_log').click(function() {
    $(this).css({
      'animation': 'cBtnOut 0.4s ease forwards',
      'z-index': '-4',
    });
    $('#close').css({
      'animation': 'cBtnIn 0.4s ease forwards',
      'z-index': '4',
    });
    $('.dialog#changeLg').css('z-index', '5');
    $('.content').css({
      'filter': 'blur(5px)',
      'z-index': '-1',
    });
    setTimeout(function() {
      $('.dialog#changeLg').css({
        'opacity': '1',
        'margin-top': '-300px',
      });
    }, 200);
  });
});


// Particles Settings
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#222"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 5,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#fff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 5,
        "duration": 0,
        "opacity": 8,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

console.log('Чё ты тут забыл? Не лезь, убъёт блядь!');
$('.content').append('<p id="cpr" style="display:block">Made by <a target="_blank" href="https://youtube.com/MrREDHoibin">RedH</a></p>');
