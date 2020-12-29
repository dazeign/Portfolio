// const logo = document.querySelector('.logo');
// const quickLinks = document.querySelector('.quick_links');
// const menu = document.querySelector('.menu_icon');
// const slider1 = document.querySelector('.slider1');
// const slider2 = document.querySelector('.slider2');

// const bannerText = document.querySelector('.banner_text');


// const tl = new TimelineMax();

// tl.fromTo(slider1, 0, {transform: 100}, {opacity: 0});
// tl.fromTo(slider2, 0, {opacity: 100}, {opacity: 0});



// let tl = gsap.timeline({
//    scrollTrigger: {
//       trigger: ".banner_text",
//       start: "bottom center"
//    }
// })

gsap.to('.slider1', {duration: 1, x: '-100%', delay: .2, ease: 'power2.in'});
gsap.to('.slider2', {duration: 1, x: '100%', delay: .2, ease: 'power2.in'});
gsap.from('.logo, .quick_links, .quick_social_links, .menu_icon', {duration: .5, opacity: 0.3, delay: 1.2, ease: 'bounce'});
gsap.from('.banner_text h3', {duration: 1, opacity: 0, delay: 1.5, y: '-100%', scale: 0.5});
gsap.from('.branding_interaction h4', {duration: 1, opacity: 0, delay: 1.7, ease: 'bounce'});
gsap.from('.branding_interaction p', {duration: 1, opacity: 0, delay: 2, scale: 0.5});
gsap.from('.banner_text a', {duration: 1, opacity: 0, delay: 2.2,});