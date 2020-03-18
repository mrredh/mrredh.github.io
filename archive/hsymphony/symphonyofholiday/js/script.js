$(document).ready(function(){
		$('.prel').css('display', 'none');
	  });

      $('.newcontent .photovideo').addClass('waves-effect');
      $('.newcontent .photovideo').addClass('waves-orange');

      $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
          $('.scrollnav').css('opacity', '1');
          $('.scrollnav').css('margin-top', '0');
        }
        else {
          $('.scrollnav').css('opacity', '');
          $('.scrollnav').css('margin-top', '');
        }
      });


	  function showsearch() {
        $('#rightsearch').css("display", "block");
        $('#rightlinks').css("display", "none");
      }

      function closesearch() {
        $('#rightsearch').css("display", "none");
        $('#rightlinks').css("display", "");
        $('#rightlinks').css("animation", "rightlinks 0.5s ease");
      }


	  function modalshow() {
        $('body').css('overflow-y', 'hidden');
        $('.modallog').css("display", "block");
        $('.content').css("filter", "blur(30px)");
        $('.modallog').css("animation", "modalopen 0.5s ease");
        setTimeout(function() {
          $('.modalcontent').css("display", "block");
        }, 200);
      };

      function modalclose() {
        $('body').css('overflow-y', '');
        $('.content').css("filter", "");
        $('.modallog').css("animation", "modalout 0.5s ease");
        setTimeout(function() {
          $('.modallog').css("display", "none");
        }, 370);
      };

      $('.loginButton').click(function() {
				$('.modalcontent').append('<img class="loadinglog" src="https://cdn.dribbble.com/users/69182/screenshots/2152093/animated_loading__by__amiri.gif">');
        $('.loginButton').css('display', 'none');
        setTimeout(function() {
          $('.loadinglog').remove();
          $('.loginButton').css('display', 'block');
        }, 2500);
      });

document.getElementById('uidLogButton').style.display='none';document.getElementById('baseLogForm').style.display='';
