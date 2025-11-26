const scroll = new FeatherScroll({
  smooth: true, // Enable smooth scrolling
  duration: 1.2, // Scroll duration (seconds)
  easing: (t) => 1 - Math.pow(1 - t, 3), // Easing function
  direction: 'vertical', // 'vertical' | 'horizontal'
  gestureDirection: 'both', // Mouse/touch gesture control
  mouseSensitivity: 1, // Sensitivity for wheel scrolling
  touchSensitivity: 2, // Sensitivity for touch scrolling
  infinite: false // Infinite scrolling
});
Shery.mouseFollower()
Shery.makeMagnet("nav h4,a",{
    strength:30,
})
Shery.makeMagnet(".btmnav h4",{strength:20})
gsap.from(".page1 nav h4,a",{
    y:70,duration:1,ease:"power4.out",
})
gsap.from(".h1 h2",{
    y:120,duration:1,ease:"power3.out",
})
gsap.from(".h2 h1",{
    y:120,duration:1,ease:"power4.out",
})
gsap.from(".h2 h6",{
    y:70,duration:1,ease:"power4.out",
})
gsap.from(".h6 #av1",{
    y:-30,
    ease:"circ.out",duration:2,
})
gsap.from(".h6 #av2",{
    y:30,
    ease:"circ.out",duration:2,
})
gsap.from("#btm",{
    y:50,ease:"back.inout",duration:1,opacity:0
})
document.querySelectorAll(".anim").forEach(function(elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: "power2.out",
            top: diff * 0.2,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 1),
        });
    })
})
document.querySelectorAll(".anim").forEach(function(elem) {
    elem.addEventListener("mouseleave", function(dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: "power3",
        });
    })
})