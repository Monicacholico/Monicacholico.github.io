

let tl = gsap.timeline({defaults:{opacity: 0, ease: "back"}});
tl.from('#demo', {ease: "linear"})
.from("h1", {x:80})
.from("h2", {x:-80})
.from("#main p", {y:30})
.from("button", {y:30})
.from("#items > g", {scale:0, transformOrigin: "50% 50%" })
