
const pines = document.querySelectorAll("path.pine");
const pineStrokes = document.querySelectorAll("path.pine-stroke");

function startAnimation() {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  tl.to([pines, pineStrokes], { scale: 1.5, duration: 1, ease: "Sine.out" });
//   tl.to(pines, { x: 0, duration: 10, ease: "none" });
  tl.staggerFrom([pines, pineStrokes], { x: 400, duration: 1, ease: "none" }, 0.5);
//   tl.to(pines, { x: 0, duration: 10, ease: "none" });
}

const master = gsap.timeline();
master.add(startAnimation());
// master.play();