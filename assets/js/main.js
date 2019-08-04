$('.banner-slick').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
});

wow = new WOW(
  {
    animateClass: 'animated',
    mobile: false,
    offset: 100,
  }
);
wow.init();
