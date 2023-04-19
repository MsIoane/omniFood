

//For the sticky navication 
$(document).ready(function (){

    var waypoint = new Waypoint({
        element: document.querySelector('.section-feature'),
        handler: function(direction) {
          if(direction == "down"){
             $('nav').addClass('sticky');
          }else{
            $('nav').removeClass('sticky');
          } 
        },
        offset: 60 
      })

 // Scroll on buttns

 $('.js--scroll-to-plan').click(function(){
     $('html, body').animate({scrollTop: $('.section-plans').offset().top}, 1000);
 });

 $('.js--scroll-to-start').click(function(){
    $('html, body').animate({scrollTop: $('.section-feature').offset().top}, 1000);
});
  
// Animation on scroll
$('.js--wp-1').waypoint(function(){
    $('.js--wp-1').addClass('animate__animated  animate__fadeIn')
},{offset:'50%'})

$('.js--wp-2').waypoint(function(){
    $('.js--wp-2').addClass('animate__animated  animate__fadeInUp')
},{offset:'50%'})

$('.js--wp-3').waypoint(function(){
    $('.js--wp-3').addClass('animate__animated  animate__fadeIn')
},{offset:'50%'});

//Mobile nav
$('.js--nav--icon').click(function(){
    var nav = $('.main-nav');
    var icon = $('.js--nav--icon i');

    nav.slideToggle(200);
    
    if (icon.hasClass('ion-md-menu')) {
        icon.removeClass('ion-md-menu');
        icon.addClass('ion-md-close');
    } else {
       icon.removeClass('ion-md-close');
       icon.addClass('ion-md-menu');
    }
})
 
});