gsap.set(".container", {visibility:"visible"});

gsap.registerPlugin(ScrollTrigger);

mastertl = gsap.timeline()


onload = gsap.timeline()

onload.from('.logo', {
    delay: 0.5,
    duration: 5,
    opacity: 0,
    scale: 0,
    stagger: 0.25
 })