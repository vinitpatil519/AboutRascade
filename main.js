gsap.from(".page2 .aboutrascade24, .page2 p,.page2 .about2,.page2 .vitchennai,.page2 .about3,.page2 .ieeeras", {
  y:300,   
  opacity:0,
  delay:1,
  duration:1,
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
  y:250,
  opacity:0,
  delay:1,
  duration:1,
  scrollTrigger:{
      trigger:".page2 .aboutrascade24",
      scroller:"body",
      // markers:true,       
      start:"top 70%",    
      end:"top 25%",      
      scrub:3,         
  }
})