$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 1
        }
      },{
      breakpoint: 948,
      settings: {
        slidesToShow: 3
      }
    },  
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2 
      }
    } ]
  });
});