$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var video = $('#videoId').val();
    var videoId = video.split('=')[1];

    var api_key = "AIzaSyAvhl41PZNSvNZ8kdTzt6kMW8QbVI9co5Q";
    var url = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=" + api_key + "&videoId=" + videoId;
    var result = "";

    $('#results').empty();

    // Get data from YouTube API
    $.get(url, function(data) {
      var array = data.items;
      var rand = array[Math.floor(Math.random() * array.length)];
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


      // Log YouTube data
      console.log(rand);
    });
  });


  // Img Replace
  $('body').on('click', '#profImg', function() {
    $('.reImg').css({
      'opacity': '1',
      'margin-left': '-80px',
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
    var imgUrl = $('#reImg input').val();
    $('.comment img').attr('src', imgUrl);
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

  $('.videoInp').keyup(function() {
    if ($('.videoInp').val() != '') {
      $('.inputDiv').css('margin-left', '10px');
      $('.btnDiv').css({
        'margin-left': '-15px',
        'opacity': '1',
        'transform': 'scale(1)',
      });
      setTimeout(function() {
        $('.btnDiv').css('z-index', '2');
      }, 700);
    }
    else {
      $('.inputDiv').css('margin-left', '');
      $('.btnDiv').css({
        'margin-left': '',
        'opacity': '',
        'transform': '',
      });
      setTimeout(function() {
        $('.btnDiv').css('z-index', '');
      }, 200);
    }
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

$('body').append('<p id="cpr" style="display:block">Made by <a target="_blank" href="https://youtube.com/MrREDHoibin">RedH</a></p>');
