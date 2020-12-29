const logo = document.querySelector('.logo');
const quickLinks = document.querySelector('.quick_links');
const menu = document.querySelector('.menu_icon');

const bannerText = document.querySelector('.banner_text');


const tl = new TimelineMax();

tl.fromTo(slider1,1, {zIndex: "99"}, {zIndex: "-99"});



// let tl = gsap.timeline({
//    scrollTrigger: {
//       trigger: ".banner_text",
//       start: "bottom center"
//    }
// })
