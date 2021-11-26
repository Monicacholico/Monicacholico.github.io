const map = (x, a, b, c, d) => {
    // returns value in range [c, d]
    return ((x - a) * (d - c)) / (b - a) + c;
  }

const startPosition = 0;
const endPosition = document.documentElement.offsetHeight - window.innerHeight;

// Logic to retrieve scroll position
// Set variable
let docScroll = window.pageYOffset || document.documentElement.scrollTop;

// Add event listener for scroll to update docScroll variable
window.addEventListener("scroll", () => {
  docScroll = window.pageYOffset || document.documentElement.scrollTop;
});

// Animate Video
const video = document.querySelector("video");
console.log(video);

const animate = () => {
  const progressVal = map(docScroll, startPosition, endPosition, 0, 1);
  const duration = video.duration || 0;
  video.currentTime = progressVal * duration;
  requestAnimationFrame(animate);
}

animate();