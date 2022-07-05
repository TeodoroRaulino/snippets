$('.owl-carousel').owlCarousel({
    loop:true,
    margin:60,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoWidth: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  })
  