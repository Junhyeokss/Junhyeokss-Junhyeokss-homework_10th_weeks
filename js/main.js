$(function () {
  AOS.init();
  $(".main_slide").slick({
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    fade: true,
  });

  $(".menu_slide").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4,
        },
      },
    ],
  });
  $(".sns_slide").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4,
        },
      },
    ],
  });
  $(".arrows .xi-arrow-left").on("click", function () {
    $(".menu_slide").slick("slickNext");
  });
  $(".arrows .xi-arrow-right").on("click", function () {
    $(".menu_slide").slick("slickPrev");
  });
});
