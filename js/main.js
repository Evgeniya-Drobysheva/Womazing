// Sticky header

$(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    if (scroll < 400) {
      $('.header').removeClass('sticky');
    } else {
      $('.header').addClass('sticky');
    }
  });
  
  // Modal
  
  $('.btn-tel').on('click', function() {
      $('.wrapper-modal').fadeIn();
    })
  
    $('.overlay').on('click', function() {
      $('.wrapper-modal').fadeOut();
    })
  
    $('.modal-close').on('click', function() {
      $('.wrapper-modal').fadeOut();
    })
  
    $('.btn_modal').on('click', function() {
      $('.wrapper-modal').fadeOut();
    });
  
    $('.modal-form').children().on('click', function (e) {
      e.stopPropagation();
    });
  
  // Scroll
  $(function(){
  
    $('.offer__btn-down').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#collection').offset().top }, 1000);
      e.preventDefault();
    });
      
    });