$(document).ready(function() {
  var tl = new TimelineMax();
  var cover = $(".cover");
  tl.to(cover, 1, {
    scaleX: 0,
    transformOrigin: "left",
    ease: Power1.easeIn
  });
  var aboutNav = $("#about-nav");
  var projectNav = $("#project-nav");
  aboutNav.click(function() {
    aboutNav.prop("disabled", true);
    tl.to(cover, 1, {
      scaleX: 1,
      transformOrigin: "left",
      ease: Power1.easeIn
    })
      .to(".holder", 1, {
        display: "none"
      })
      .to(".about-info", 1, {
        display: "block"
      })
      .to(cover, 1, {
        scaleX: 0,
        transformOrigin: "left",
        ease: Power1.easeIn
      });
    $(this).attr("disabled", false);
  });
  projectNav.click(function() {
    tl.to(cover, 1, {
      scaleX: 1,
      transformOrigin: "left",
      ease: Power1.easeIn
    })
      .to(".holder", 1, {
        display: "none"
      })
      .to(".project-infos", 1, {
        display: "block"
      });
    $(".project-infos").css("display", "block");
    var swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      grabCursor: true,
      spaceBetween: 30,
      centeredSlides: true,
      slidesPerView: "auto",
      mousewheel: true,
      dragable: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    tl.to(cover, 1, {
      scaleX: 0,
      transformOrigin: "left",
      ease: Power1.easeIn
    });
  });
});
