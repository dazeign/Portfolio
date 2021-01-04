// banner area
gsap.to('.slider1', {duration: 1, x: '-100%', delay: .2, ease: 'power2.in'});
gsap.to('.slider2', {duration: 1, x: '100%', delay: .2, ease: 'power2.in'});
gsap.from('.logo, .quick_links, .quick_social_links, .menu_icon', {duration: .5, opacity: 0.3, delay: 1.2, ease: 'elastic'});
gsap.from('.banner_text h3', {duration: 1, opacity: 0, delay: 1.5, y: '-100%', scale: 2});
gsap.from('.branding_interaction h4', {duration: 1, opacity: 0, delay: 1.7});
gsap.from('.branding_interaction p', {duration: 1, opacity: 0, delay: 2, scale: 1.5});
gsap.from('.banner_text a', {duration: 1, opacity: 0, delay: 2.2,});

// gsap.register(ScrollTrigger);
// gsap.from(
//    ".section_title", {
//       duration: 3, x: "-50vw", ease: "linear",
//       ScrollTrigger:{
//          trigger: ".section_title",
//          start: "20px 80%",
//          end: "bottom 100px",
//          markers: true,
//          toggleActions: "restart pause resume none"
//       }
//    }
// )

gsap.register(ScrollTrigger);

gsap.from(
   '.service_area .section_title', {
      ScrollTrigger:{
         trigger: '.section_title',
         start: 'top center',
         markers: true,
      }
   }
)