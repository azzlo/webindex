var axolotlClickCount = 0

$(document).ready(function(){
  var is_top
  if ($(window).scrollTop() > $(window).height()) {
    is_top = false;
    changeNavStyle('bottom', true);
  }else {
    is_top = true;
    changeNavStyle('top', false);
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
      $('.navbar nav-link').css('color', '#FFF');

      $('img.logo').css("width", "256px");
      $('img.logo').css('filter', 'invert(1) brightness(100)');
    }
    if (position == 'top' && is_top){
      $('.navbar').css('background', 'none');
      $('.navbar').css('box-shadow', 'none');
      $('.navbar .nav-link').css('color', '#fff');
      $('img.logo').css("width", "256px");
      $('img.logo').css('filter', 'invert(1) brightness(100)');
    }
    if (position == 'bottom' && is_top){
      $('.navbar').css('background', '#FFFFFF');
      $('.navbar').css('box-shadow', '0 1px 6px grey');
      $('.navbar .nav-link').css('color', '#333');

      $('img.logo').css('width', '120px');
      $('img.logo').css('filter', 'invert(0) brightness(2)');
    }
    if (bottom){
      $('.navbar').css('background', '#FFFFFF');
      $('.navbar').css('box-shadow', '0 1px 6px grey');
      $('.navbar .nav-link').css('color', '#333');

      $('img.logo').css('width', '120px');
      $('img.logo').css('filter', 'invert(0) brightness(2)');
    }
  }
  //object.addEventListener("scroll", myScript);
  //<element onscroll="myScript">
  $('#axolotl').on("click", axolotlInteraction);
});

function axolotlInteraction(){
  axolotlClickCount += 1;
  switch (axolotlClickCount) {
    case 1:
      $("#axolotl").css("transform", "translate(0%, 0% )")
      $("#axolotl img").css("transform", "scaleX(-1)")
      $("#axolotl img").css("filter", "FlipH")
      $("#axolotl").css("right", "calc(100% - 143px)")
      break;
    case 2:
      $("#axolotl img").css("height", "200px")
      $("#axolotl img").css("transform", "scaleX(1)")
      $("#axolotl img").css("filter", "FlipH")
      $("#axolotl").css("bottom", "60px")
      $("#axolotl").css("right", "calc(100% - 110px)")
      break;
    case 3:
      $("#axolotl img").css("height", "150px")
      $("#axolotl img").css("transform", "scaleX(-1)")
      $("#axolotl img").css("filter", "FlipH")
      $("#axolotl").css("bottom", "50px")
      $("#axolotl").css("right", "calc(100% - 80px)")
      break;
    default:
      break;
  }
}
