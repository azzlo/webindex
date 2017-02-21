$(document).ready(function(){
  var is_top
  if ($(window).scrollTop() > $(window).height()) {
    is_top = false;
    changeNavStyle('bottom', true);
  }else {
    is_top = true;
  }
  $(window).scroll(function () {
    var scroll_top = $(window).scrollTop();
    var height_html = $(window).height();
    if (scroll_top > height_html) {
      changeNavStyle('bottom');
      is_top = false;
    }else {
      changeNavStyle('top');
      is_top = true;
    }
  });

  function changeNavStyle(position, bottom){
    if (position == 'top' && !is_top){
      $('.navbar').css('background', 'none');
      $('.navbar').css('box-shadow', 'none');
      $('img.logo').css("width", "256px");
    }
    if (position == 'bottom' && is_top){
      $('.navbar').css('background', '#FFFFFF');
      $('.navbar').css('box-shadow', '0 1px 6px grey');
      $('img.logo').css('width', '120px');
    }
    if (bottom){
      $('.navbar').css('background', '#FFFFFF');
      $('.navbar').css('box-shadow', '0 1px 6px grey');
      $('img.logo').css('width', '120px');
    }
  }
  //object.addEventListener("scroll", myScript);
  //<element onscroll="myScript">
});
