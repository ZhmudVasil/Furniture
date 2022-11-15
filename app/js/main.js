$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });

  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplayspeed: 1000,
  });

  $(".contact-slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplayspeed: 1000,
    slidesToShow: 10,
    slidesToScroll: 10,
  });

  $(".article-slider__box").slick({
    prevArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
    nextArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/arrow-slide-right.svg" alt="arrow left"></button>',
  });

  var mixer = mixitup(".gallary__inner", {
    load: {
      filter: ".living",
    },
  });
});
