$('.count').counterUp({
    delay: 10,
    time: 1000
});



// init Isotope


var $grid = $('.portfolio-item').isotope({
    // options
  });
  // filter items on button click
    $('.portfolio-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

  });
    $('.portfolio-menu li').click(function() {
        
        $(".portfolio-menu li").removeClass('active');
        $(this).addClass('active');

  });



// magnific pop up



$('.popImg').magnificPopup({
    type:'image',
    gallery:{
        enabled:true
      }

});


// owl carousel


  $('.owl-carousel').owlCarousel({

    margin: 15,
    loop: true,
    startPosition: 2,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      575: {
        items: 2,
        nav: false
      },
      992: {
        items: 3,
        nav: false
      }
    }
  });




// aos

AOS.init();



// for navbar close


$('#navbarIcon').click(function(){

  $('#navbarNav').removeClass('collapse');
  $('#navbarNav').addClass('navbar-mobile');

  $('#Overly').removeClass('ovarlyOff');
  $('#Overly').addClass('ovarlyOn');

  $('#navClose').removeClass('d-none');
  $('#navClose').addClass('d-block');

  $('.header-top-content').addClass('navToggleOpacity');
  $('.navbar-brand').addClass('navToggleOpacity');
  $('#navbarIcon').addClass('navToggleOpacity');
});

// for navbar close-------------


$('.nav-dismiss').click(function(){
  $('#navbarNav').removeClass('navbar-mobile');
  $('#navbarNav').addClass('collapse');

  $('#Overly').removeClass('ovarlyOn');
  $('#Overly').addClass('ovarlyOff');

  $('#navClose').removeClass('d-block');
  $('#navClose').addClass('d-none');

  $('.header-top-content').removeClass('navToggleOpacity');
  $('.navbar-brand').removeClass('navToggleOpacity');
  $('#navbarIcon').removeClass('navToggleOpacity');

});




// scroll on up


$(window).scroll(function(){
  if($(this).scrollTop()> 100){
      $(".topIcon").fadeIn(2000);
  }else{
      $('.topIcon').fadeOut(2000)
  }
});

$(".topIcon").click(function(){
  $("html,body").animate({
      scrollTop:0
  },)
})
