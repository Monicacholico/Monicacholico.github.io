
function init() {
    gsap.from('p', {text: "typewriter effect with GSAP 3", duration: 3, ease: "power1.in", 
    repeat: 1, yoyo: true});
    
    gsap.from('h2', {
        text: {
            value: 'Classic me, Classic you!',
            newClass: "clip",
            oldClass: "oldClip"
        },
        ease: "power2",
        duration: 5
    })
    document.querySelector('h2').style.visibility = 'visible';
}

window.addEventListener('load', init);