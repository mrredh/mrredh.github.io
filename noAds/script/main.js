$('.sitesForm').submit(function () {
  var siteadr = $('.siteAdress').val();
  var sitenm = $('.siteName').val();
  $('.sitenm').text(sitenm);
  $('.siteadr').text(siteadr);
  $('.resultBlock, .siteReads').css('display', 'block');
  if (document.getElementById('preloaderDflt').checked) {
    $('.oPreloader').css('display', 'block');
  }
  else if (document.getElementById('preloaderLine').checked) {
    $('.tPreloader').css('display', 'block');
  }
  var curPos=$(document).scrollTop();
  var height = 420;
  $("body,html").animate({"scrollTop":height}, 2000);
  return false;
});


function selectText(elementId) {
  var doc = document,
    text = doc.getElementById(elementId),
    range,
    selection;
  if (doc.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(text);
    range.select();
  }
  else if (window.getSelection) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

$('#resultSite').click(function() {
  selectText(this.id);
  document.execCommand('copy');
  $('.siteRes#resultSite').css('filter', 'blur(5px)');
  $('.resultBlock .copied').css('opacity', '1');
  $('.resultBlock .copied').css('transform', 'scale(1)');
  $('.siteRes#resultSite').css('opacity', '0.55');
  setTimeout(function () {
    $('.resultBlock .copied').css('opacity', '');
    $('.resultBlock .copied').css('transform', 'scale(0.7)');
    $('.siteRes#resultSite').css('opacity', '');
    $('.siteRes#resultSite').css('filter', 'blur(0)');
    return;
  }, 1000);
});

$('#resultSite2').click(function() {
  selectText(this.id);
  document.execCommand('copy');
  $('.siteRes#resultSite2').css('filter', 'blur(5px)');
  $('.resultBlock .copied').css('opacity', '1');
  $('.resultBlock .copied').css('transform', 'scale(1)');
  $('.siteRes#resultSite2').css('opacity', '0.55');
  setTimeout(function () {
    $('.resultBlock .copied').css('opacity', '');
    $('.resultBlock .copied').css('transform', 'scale(0.7)');
    $('.siteRes#resultSite2').css('opacity', '');
    $('.siteRes#resultSite2').css('filter', 'blur(0)');
    return;
  }, 1000);
});

$('.resultUcoz').submit(function() {
  $('.resultBlock, .siteReads').css('display', 'block');
  var curPos=$(document).scrollTop();
  var height=$("body").height();
  $("body,html").animate({"scrollTop":height}, 8000);
  return false;
});


$('#homePg').click(function() {
  location.href = 'https://mrredh.github.io/noAds';
});

$('#wixPg').click(function() {
  location.href = 'removewix';
});

$('#wixPg2').click(function() {
  location.href = 'removewix';
});

$('#wixPg3').click(function() {
  location.href = '../removewix';
});

$('#ucozPg').click(function() {
  location.href = 'removeucoz';
});

$('#ucozPg2').click(function() {
  location.href = 'removeucoz';
});

$('#ucozPg3').click(function() {
  location.href = '../removeucoz';
});

/*$(document).ready(function(){
  $('.modal').modal({
    inDuration: 600,
    outDuration: 400
  });
});

$('html').contextmenu(function() {
  $('#connect').modal('open');
  $('.container').css('filter', 'blur(10px)');
  return false;
});*/

$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('nav').css('margin-top', '-4px');
    $('nav').css('height', '58px');
    $('nav').css('box-shadow', '0 0 8px rgba(0,0,0,0.4)');
  }
  else {
    $('nav').css('margin-top', '');
    $('nav').css('height', '');
    $('nav').css('box-shadow', '');
  }
});
