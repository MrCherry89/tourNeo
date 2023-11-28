$(document).ready(function () {
  $(".experts-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: $(
      ".our-experts .slider-nav-wrap .slider-navigation .slick-prev"
    ),
    nextArrow: $(
      ".our-experts .slider-nav-wrap .slider-navigation .slick-next"
    ),
  });

  $(".our-clients-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(
      ".our-clients .slider-nav-wrap .slider-navigation .slick-prev"
    ),
    nextArrow: $(
      ".our-clients .slider-nav-wrap .slider-navigation .slick-next"
    ),
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });

  $(".tariff-item .drop-arrow").on("click", function () {
    $(this).closest(".tariff-item").find(".list-wrap").toggleClass("show");
    $(this).find("img").toggleClass("rotate");
  });

  // $(".advantages-slider").slick({
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   fade: true,
  //   speed: 800,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: $(".advantages-slider-wrap  .slider-navigation .slick-prev"),
  //   nextArrow: $(".advantages-slider-wrap  .slider-navigation .slick-next"),
  // });

  $(".hotels-select .top").on("click", function (e) {
    e.stopPropagation();
    $(this).find("span .arrow").toggleClass("rotate");
    $(this).closest(".hotels-select").toggleClass("active");
    $(this).closest(".hotels-select").find(".bottom").toggleClass("show");
  });

  $(".hotels-select").on("click", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", function () {
    $(".hotels-select span .arrow").removeClass("rotate");
    $(".hotels-select").find(".bottom").removeClass("show");
    $(".hotels-select").removeClass("active");
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".select .select-head").on("click", function () {
    $(this).find("img").toggleClass("rotate");
    $(this).closest(".select").find(".select-body").toggleClass("open");
  });

  // $(".phone-number-input").inputmask({
  //   mask: "+7 (999) 999 - 99 - 99",
  // });

  // $(".drop-item .item-head").on("click", function () {
  //   $(this).closest(".drop-item").find(".item-body").toggleClass("open");
  //   $(this)
  //     .closest(".drop-item")
  //     .find(".item-head .down-arrow")
  //     .toggleClass("rotate");
  // });

  // $(".info-item .item-head").on("click", function () {
  //   $(this).closest(".info-item").find(".item-body").toggleClass("hide");
  //   $(this).closest(".info-item").toggleClass("bg");
  //   $(this)
  //     .closest(".info-item")
  //     .find(".item-head .down-arrow")
  //     .toggleClass("rotateation");
  // });

  $(".application-blocks3 .block .top .arrow").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".block").find(".bottom").toggleClass("hide");
  });
});
