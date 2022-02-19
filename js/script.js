const timeline = gsap.timeline();
timeline.to(".animate",{
    delay: 3,
    duration: .5,
    opacity: 0
});
timeline.to(".animation",{
    delay: 1,
    duration: 1,
    y: "100%",
    ease: "power4.out"
});
timeline.to(".animation",{
    zIndex: -1
});







