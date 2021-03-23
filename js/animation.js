gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.destaque', {
    y: '-30%',
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
})

gsap.from(".transition-projeto-destaque", {
    scrollTrigger: {
        trigger: '.transition-projeto-destaque',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from(".transition-skills", {
    scrollTrigger: {
        trigger: '.transition-skills',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from(".transition-projetos", {
    scrollTrigger: {
        trigger: '.transition-projetos',
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

var nav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 180 || document.documentElement.scrollTop >= 180) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
};

window.onload = function() {
    "use strict";
    if (document.body.scrollTop >= 180 || document.documentElement.scrollTop >= 180) {
      nav.classList.add("nav-scroll");
    } else {
      nav.classList.remove("nav-scroll");
    }
  };