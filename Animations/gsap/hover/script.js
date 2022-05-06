const items = document.querySelectorAll('.item');
gsap.defaults({duration: 0.3});


items.forEach((item, index) => {
    const tl = gsap.timeline({paused: true})
.to(item.querySelector(".text"), {backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
 backgroundColor: "#f3ec78", webkitBackgroundClip: 'text', webkitTextFillColor:"transparent", x: 20, scale: 1.3, transformOrigin: "left center"})
.to(item.querySelector(".dot"), {backgroundColor: "crimson", scale: 1.5}, 0);

    item.addEventListener('mouseenter', () => {
        tl.play();
    })
    
    item.addEventListener('mouseleave', () => {
        tl.reverse();
    })
})




// items.forEach( item => {


// })
