gsap.from('p', {text: "typewriter effect with GSAP 3", duration: 3, ease: "power1.in", 
repeat: 1, yoyo: true});

gsap.from('h2', {
    text: {
        value: 'Here I am, Here are you!',
        newClass: "clip",
        oldClass: "oldClip"
    },
    ease: "power2",
    duration: 5
})