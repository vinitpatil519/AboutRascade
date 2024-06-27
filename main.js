var tl = gsap.timeline()

// Page slide-up animation
gsap.from(".page2 .aboutrascade24, .page2 p,.page2 .about2,.page2 .vitchennai,.page2 .about3,.page2 .ieeeras", {
  y:200,   
  opacity:0,
  delay:1,
  duration:0.7,
  scrollTrigger:{
      trigger:".page2 .aboutrascade24",
      scroller:"body",
      // markers:true,       
      start:"top 70%",    
      end:"top 25%",      
      scrub:3,         
  }
})

gsap.from(".page2 .rascadelogo, .page2 .raslogo, .page2 .vitlogo", {
  y:150,
  opacity:0,
  delay:1,
  duration:1.5,
  scrollTrigger:{
      trigger:".page2 .aboutrascade24",
      scroller:"body",
      // markers:true,       
      start:"top 70%",    
      end:"top 25%",      
      scrub:3,         
  }
})


// ROCKET ANIMATION


// tl.to(".page2 .rocket", {
//   x:740,
//   delay:1,
//   duration:0.8,
//   ease: "power2.out"
// })
// tl.to(".page2 .rocket",{
//   rotate: 0,
//   delay:0.3,
//   duration:0.8,
//   ease: "power2.out"
// })
// tl.to(".page2 .rocket", {
//   y:-450,
//   delay:0.3,
//   duration:0.8,
//   ease: "power2.out"
// })
// tl.to(".page2 .rocket",{
//   rotate: 90,
//   delay:0.3,
//   duration:0.8,
//   ease: "power2.out"
// })
// tl.to(".page2 .rocket", {
//   x:860,
//   delay:0.3,
//   duration:1,
//   opacity: 0,
//   ease: "power2.out"
// })

