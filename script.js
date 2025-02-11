function loadingAnimaton(){
    
let tl = gsap.timeline()

tl.from('.loader h1', {
    y: 150,
    duration: 0.5,
    delay: 0.6,
    stagger: 0.3,
})
tl.from('.line1-part1', {
  opacity: 0,
  onStart: function () {
    let h5Timer = document.querySelector(".line1-part1 h5");
    let grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5Timer.innerHTML = grow++;
      } else {
        h5Timer.innerHTML = 100;
      }
    }, 33);
  },
});

tl.to('.line h2',{
    animationName: 'anime',
    opacity: 1,
})

tl.to('.loader',{
    opacity:0,
    duration: 0.2,
    delay: 4,

})
tl.from('#page1', {
    y:1600,
    delay:0.2,
    duration:0.5,
    ease: Power4,
})
tl.to('.loader', {
    display: 'none',
})
tl.from('.nav', {
    opacity: 0,
})
tl.from('#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1', {
    y: 200,
    stagger: 0.2,

})
}


function cursorAnimation(){
    document.addEventListener('mousemove', function(dets){
        gsap.to('.crsr', {
            left: dets.x,
            top: dets.y,
        })
    })
    
    Shery.makeMagnet(".nav-part2 h4", {
        
      });
}

loadingAnimaton();
cursorAnimation();