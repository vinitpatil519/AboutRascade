var tl = gsap.timeline()

// Page slide-up animation
gsap.from(".page2 .aboutrascade24, .page2 p,.page2 .about2,.page2 .vitchennai,.page2 .about3,.page2 .ieeeras", {
  y:100,   
  opacity:0,
  delay:1,
  duration:0.7,
  scrollTrigger:{
      trigger:".page2 .aboutrascade24",
      scroller:"body",
      // markers:true,       
      start:"top 90%",    
      end:"top 70%",      
      scrub:3,         
  }
})

gsap.from(".page2 .raslogo, .page2 .vitlogo", {
  y:200,
  opacity:0,
  delay:1,
  duration:0.7,
  scrollTrigger:{
      trigger:".page2 .aboutrascade24",
      scroller:"body",
      // markers:true,       
      start:"top 95%",    
      end:"top 75%",      
      scrub:3,         
  }
})


// ROCKET ANIMATION FOR DESKTOP FRAME

if(screen.width>screen.height){
  tl.to(".page2 .rocket", {
    x:-75,
    scrollTrigger:{
        trigger:".page2 .aboutrascade24",
        scroller:"body",
        // markers:true,       
        start:"top 90%",    
        end:"top 80%",      
        scrub:3,         
    }
  })
  tl.to(".page2 .rocket", {
    rotate:"-180deg",
    scrollTrigger:{
        trigger:".page2 .aboutrascade24",
        scroller:"body",
        // markers:true,       
        start:"top 80%",    
        end:"top 70%",      
        scrub:3,         
    }
  })
  tl.to(".page2 .rocket", {
    y:420,
    scrollTrigger:{
        trigger:".page2 .aboutrascade24",
        scroller:"body",
        // markers:true,       
        start:"top 70%",    
        end:"top 40%",      
        scrub:3,         
    }
  })
  tl.to(".page2 .rocket", {
    rotate:"-90deg",
    scrollTrigger:{
        trigger:".page2 .aboutrascade24",
        scroller:"body",
        // markers:true,       
        start:"top 35%",    
        end:"top 30%",      
        scrub:3,         
    }
  })
  tl.to(".page2 .rocket", {
    x:-1100,
        opacity:0,
    delay:0.1,
    
    scrollTrigger:{
        trigger:".page2 .aboutrascade24",
        scroller:"body",
        // markers:true,       
        start:"top 30%",    
        // end:"top 150%",      
        scrub:3,         
    }
  })
}

// ROCKET ANIMATION FOR MOBILE FRAME

if(screen.height>screen.width){
  tl.to(".page2 .rocketmob", {
    y:75,
    scrollTrigger:{
        trigger:".page2 .aboutrascade24",
        scroller:"body",
        // markers:true,       
        start:"top 90%",    
        end:"top 80%",      
        scrub:3,         
    }
  })
  tl.to(".page2 .rocketmob", {
    rotate:"90deg",
    scrollTrigger:{
        trigger:".page2 .aboutrascade24",
        scroller:"body",
        // markers:true,       
        start:"top 80%",    
        end:"top 70%",      
        scrub:3,         
    }
  })
  tl.to(".page2 .rocketmob", {
    x:100,
    scrollTrigger:{
        trigger:".page2 .aboutrascade24",
        scroller:"body",
        // markers:true,       
        start:"top 70%",    
        end:"top 60%",      
        scrub:3,         
    }
  })
  tl.to(".page2 .rocketmob", {
    rotate:"180deg",
    scrollTrigger:{
        trigger:".page2 .aboutrascade24",
        scroller:"body",
        // markers:true,       
        start:"top 60%",    
        end:"top 50%",      
        scrub:2,         
    }
  })
  tl.to(".page2 .rocketmob", {
    y:400,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 .aboutrascade24",
        scroller:"body",
        // markers:true,       
        start:"top 50%",    
        end:"top 10%",      
        scrub:4,         
    }
  })
}
