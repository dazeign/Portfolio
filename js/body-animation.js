gsap.set(".container", {visibility:"visible"});

gsap.registerPlugin(ScrollTrigger);

mastertl = gsap.timeline()


onload = gsap.timeline()

// onload.from('.header-area', {
//     delay: 0.5,
//     duration: 2,
//     opacity: 0,
//     scale: 0,
//     x: -150,
//  })
 onload.from('.header-area', {
    duration: 0.5,
    y: -20,
    opacity: 1,
 }, '-=2.5')