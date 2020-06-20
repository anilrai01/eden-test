$(function () {
  //Click on goto Top
  $(".goToTop").click(function () {
    // console.log("Heyy");
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $(".goToTop").addClass("show-goto");
    } else {
      $(".goToTop").removeClass("show-goto");
    }
  });
});
