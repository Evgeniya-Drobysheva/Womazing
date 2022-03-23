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

var mySwiper = new Swiper('.swiper1', {

  loop: true,
  effect:'fade',

  pagination: {
    el: '.swiper-pagination1',
    type: 'bullets',
    clickable: true
  },
autoplay: {
  delay: 8000,
  disableOnInteraction: false
},
fadeEffect: {
  crossFade: true
},
});

var swiper = new Swiper('.swiper2', {
  // Optional parameters
  loop: true,

  pagination: {
    el: '.swiper-pagination2',
    type: 'bullets',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prev',
  },

  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },

});


var mylastSwiper = new Swiper('.swiper3', {

  loop: true,
  effect:'fade',

autoplay: {
  delay: 8000,
  disableOnInteraction: false
},

pagination: {
  el: '.swiper-pagination3',
  type: 'bullets',
  clickable: true
},
fadeEffect: {
  crossFade: true
},
});
