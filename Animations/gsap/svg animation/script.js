

GSDevTools.create();
// TextPlugin.create();

// gsap.to('h3', {text: "typewriter effect with GSAP 3", duration: 2}, "-=0.5");
// function init() {
    let tl = gsap.timeline({defaults:{opacity: 0, ease: "back"}});
    tl.to('h3', {text: "this is my text GSAP 3", ease: "power1.in", duration:2, opacity: 1})
    tl.from('#demo', {ease: "linear", autoAlpha: 0})
    .from("h1", {x:80, duration: 1})
    .from("h2", {x:-80, duration: 1}, "<")
    .from("#main p", {y:30}, "-=0.2")
    .from("button", {y:50}, "-=0.4")
    .from("#items > g", {scale:0, transformOrigin: "50% 50%", stagger: 0.1}, "-=0.5");

    
// }



window.addEventListener("load", e => {
    // init();
})
