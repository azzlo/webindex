(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({full_width: true});



  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
$('.slider').slider({full_width: true});
    });
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');
$('.slider').slider('pause');

$(document).ready(function(){
     $('.carousel').carousel();
   });
       
