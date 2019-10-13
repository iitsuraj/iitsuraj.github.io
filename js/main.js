$(document).ready(function() {
  var swiper = new Swiper(".swiper-container", {
    grabCursor: true,
    spaceBetween: 30,
    slidesPerView: "auto",
    dragable: true,
    lazy: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button"
    }
  });
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
      })
      .to(cover, 1, {
        scaleX: 0,
        transformOrigin: "left",
        ease: Power1.easeIn
      });
  });
});
