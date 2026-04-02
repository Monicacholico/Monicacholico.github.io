function init() {
    const ad = document.querySelector(".ad");
    ad.style.visibility = "visible";
    let device;
    let currentIndex = 0;
    let indexForImage;

    addEventListener("resize", (event) => {});

    onresize = (event) => {
        let curwid = window.innerWidth;

        if (curwid > 1024) {
            device = "desktop";
        } else if (curwid <= 1024 && curwid > 767) {
            device = "tablet";
        } else if (curwid <= 768 && curwid >= 350) {
            device = "mobile";
        } else if (curwid < 350) {
            device = "mobile-mini";
        }

        // if (window.innerWidth < 768) { device = "mobile"; }
        // else { device = "desktop"; }

        console.log(device);
    };

    onresize();

    let zoomInfo = [
        /* :::::::: Frame 0 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: "0 0",
                scale: 1,
            },
            tablet: {
                backgroundPosition: "0 0",
                scale: 1,
            },
            mobile: {
                backgroundPosition: "0% 0",
                scale: 1,
            },
            "mobile-mini": {
                backgroundPosition: "0% 0%",
                scale: 1,
            },
        },

        /* :::::::: Frame 1 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: "0% 0%",
                scale: 1.65,
            },
            tablet: {
                backgroundPosition: "0% 0%",
                scale: 1.1,
            },
            mobile: {
                backgroundPosition: "6% 0px",
                scale: 1.1,
            },
            "mobile-mini": {
                backgroundPosition: "6% 0px",
                scale: 1.1,
            },
        },

        /* :::::::: Frame 2 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: "0% 0%",
                scale: 1.6,
            },
            tablet: {
                backgroundPosition: "0% 0%",
                scale: 1.2,
            },
            mobile: {
                backgroundPosition: "56% 9px",
                scale: 1.2,
            },
            "mobile-mini": {
                backgroundPosition: "56% 9px",
                scale: 1.2,
            },
        },

        /* :::::::: Frame 3 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: "0 0",
                scale: 1.65,
            },
            tablet: {
                backgroundPosition: "0 0",
                scale: 1.2,
            },
            mobile: {
                backgroundPosition: "100%",
                scale: 1.1,
            },
            "mobile-mini": {
                backgroundPosition: "100%",
                scale: 1.1,
            },
        },
        {
            desktop: {
                x: -170,
                y: 87,
                scale: 1.8,
            },
            tablet: {
                x: -241,
                y: 87,
                scale: 1.8,
            },
            mobile: {
                x: "-11%",
                y: "16%",
                scale: 1.8,
            },
            "mobile-mini": {
                x: "11%",
                y: "16%",
                scale: 1.8,
            },
        },
    ];
    let moveLeft = [
        /* :::::::: Frame 0 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "-379.5px 19.85px",
                    2: "190.65px 10.9px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "40.65px -5.1px",
                    2: "0px 0px",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "40.65px -5.1px",
                    2: "0px 0px",
                },
            },
            "mobile-mini": {
                backgroundPosition: {
                    1: "40.65px -5.1px",
                    2: "0px 0px",
                },
            },
        },

        /* :::::::: Frame 1 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "-379.5px 19.85px",
                    2: "190.65px 10.9px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "-519.35px -5.1px",
                    2: "40.65px -5.1px",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "56% 9px",
                    2: "6% 0px",
                },
            },
            "mobile-mini": {
                backgroundPosition: {
                    1: "56% 9px",
                    2: "6% 0px",
                },
            },
        },

        /* :::::::: Frame 2 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "-861px 0px",
                    2: "-379.5px 19.85px",
                    // 2: "190.65px 10.9px",
                },
            },

            tablet: {
                backgroundPosition: {
                    1: "-1029.35px -5.1px",
                    2: "-519.35px -5.1px",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "100%",
                    2: "56% 9px",
                },
            },
            "mobile-mini": {
                backgroundPosition: {
                    1: "100%",
                    2: "56% 9px",
                },
            },
        },

        /* :::::::: Frame 3 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "-379.5px 19.85px",
                    2: "190.65px 10.9px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "-1029.35px -5.1px",
                    2: "-519.35px -5.1px",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "100%",
                    2: "56% 9px",
                },
            },
            "mobile-mini": {
                backgroundPosition: {
                    1: "100%",
                    2: "56% 9px",
                },
            },
        },
    ];
    let moveRight = [
        /* :::::::: Frame 0 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "",
                    2: "",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "",
                    2: "",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "",
                    2: "",
                },
            },
            "mobile-mini": {
                backgroundPosition: {
                    1: "",
                    2: "",
                },
            },
        },

        /* :::::::: Frame 1 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "190.65px 10.9px",
                    2: "-379.5px 19.85px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "40.65px -5.1px",
                    2: "-519.35px -5.1px",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "6% 0px",
                    2: "56% 9px",
                },
            },
            "mobile-mini": {
                backgroundPosition: {
                    1: "6% 0px",
                    2: "56% 9px",
                },
            },
        },

        /* :::::::: Frame 2 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "190.65px 10.9px",
                    2: "-379.5px 19.85px",
                    // 2: "190.65px 10.9px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "40.65px -5.1px",
                    2: "-519.35px -5.1px",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "6% 0px",
                    2: "56% 9px",
                },
            },
            "mobile-mini": {
                backgroundPosition: {
                    1: "6% 0px",
                    2: "56% 9px",
                },
            },
        },

        /* :::::::: Frame 3 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "-379.5px 19.85px",
                    2: "-861px 0px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "-519.35px -5.1px",
                    2: "-1029.35px -5.1px",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "56%",
                    2: "100%",
                },
            },
            "mobile-mini": {
                backgroundPosition: {
                    1: "56%",
                    2: "100%",
                },
            },
        },
    ];

    let totalItem = zoomInfo.length;
    for (var i = 0; i < totalItem; i++) {
        var tempItem = document.querySelector(".overlay.frame-" + i);
        tempItem.setAttribute("data-index", i);
        tempItem.addEventListener("click", (event) => {
            console.log(event.currentTarget.dataset.index);
            let index = Number(event.currentTarget.dataset.index);
            currentIndex = index;
            updateContent(currentIndex);

            ET.track({
                type: "interactionURL",
                location: "spot-" + currentIndex,
            });
        });
    }
    window.addEventListener('click', (e) => {
        console.log(e.target);
    })

    TweenMax.set(".image-container", {
        scale: zoomInfo[currentIndex][device]["scale"],
        backgroundPosition: `${zoomInfo[currentIndex][device]["backgroundPosition"]}`,
        // alpha: 1,
    });

    let zoom = (whatPosition, scale) => {
        // console.log("whatPosition: ", whatPosition);
        ad.classList.add("zoomed");
        console.log({ indexForImage });
        if (indexForImage == 2 || indexForImage == 3) {
            // gsap.to(".image-container", {
            //     duration: 1,
            //     backgroundPosition: whatPosition,
            //     ease: "power1.in",
            // });
            // gsap.to(
            //     ".image-container",
            //     {
            //         duration: 1,
            //         scale: scale,
            //         ease: "power1.in",
            //     },
            //     "<=+1"
            // );
            TweenMax.to(".image-container", {
                duration: 1,
                scale: scale,
                ease: "slow(0.7, 0.7, false)",
            });
            TweenMax.to(".image-container", {
                duration: 1,
                backgroundPosition: whatPosition,
                ease: "slow(0.7, 0.7, false)",
            }, "<=-.25");
        } else {
            TweenMax.to(".image-container", {
                duration: 1,
                scale: scale,
                ease: "slow(0.7, 0.7, false)",
            });
            TweenMax.to(".image-container", {
                duration: 1,
                backgroundPosition: whatPosition,
                ease: "slow(0.7, 0.7, false)",
            }, "<=-.1");
        }
    };

    let unZoom = () => {
        ad.classList.remove("zoomed");
        gsap.to(".image-container", { backgroundPosition: "0% 0%", delay: 1 });
        gsap.to(".image-container", { scale: 1 , delay: 1});
    };

    const moveZoomed = (from, to) => {
        // console.log(moveRight[currentIndex][device]["backgroundPosition"][1], moveRight[currentIndex][device]["backgroundPosition"][2]);
        TweenMax.fromTo(
            ".image-container",
            { backgroundPosition: from },
            { backgroundPosition: to, duration: 1 }
        );
    };

    let updateContent = (index) => {
        console.group("updateContent");
        console.log("index: ", index);
        console.groupEnd();

        document.querySelector(".ad").setAttribute("data-index", index);
        indexForImage = +document.querySelector(".ad").dataset.index;

        return indexForImage;
    };

    updateContent(currentIndex);
    console.log({ indexForImage });
    let currentSpotStyle;

    let arrowLeft = document.querySelector(".arrow-left");
    arrowLeft.addEventListener("click", () => {
        // console.log("arrow left clicked");
        currentIndex--;
        console.group("arrow-Left");
        console.log("total item: ", totalItem);
        console.log("current index: ", currentIndex);
        setTimeout(() => {
            ad.dataset.spotIndex = "";
        }, 1001);
        if (currentIndex == 0) {
            ad.classList.remove("traveling");
            // emptyText();
            tlFront.reverse();
            unZoom();
            setTimeout(() => {
                waittoClickAgain4User();
            }, 2000);
            // document.querySelector(".frontImage").style.display = "block";
        } else {
            ad.classList.add("traveling");
            moveZoomed(
                moveLeft[currentIndex][device]["backgroundPosition"][1],
                moveLeft[currentIndex][device]["backgroundPosition"][2]
            );
        }

        console.log("current index after modification: ", currentIndex);
        // console.groupEnd();

        setTimeout(() => {
            updateContent(currentIndex);
        }, 250);
        ET.track({
            type: "slideURL",
            location: "slide-" + currentIndex,
        });
    });

    let arrowRight = document.querySelector(".arrow-right");
    arrowRight.addEventListener("click", () => {
        ad.classList.add("traveling");
        // console.log("data spot index = ", ad.dataset.spotIndex);
        currentIndex++;
        // console.group("arrow-Right");
        // console.log("total item: ", totalItem);
        // console.log("current index: ", currentIndex);
        setTimeout(() => {
            ad.dataset.spotIndex = "";
        }, 1001);
        if (currentIndex != 4 && currentIndex != 5) {
            moveZoomed(
                moveRight[currentIndex][device]["backgroundPosition"][1],
                moveRight[currentIndex][device]["backgroundPosition"][2]
            );
        } else if (currentIndex == 4) {
            ad.classList.remove("traveling");
            document.querySelector(".backImage").style.zIndex = "999";
            document.querySelector(".backImage").style.opacity = "1";
            document.querySelector(".backImage").style.transition = "opacity 1s ease-out";
        }

        if (currentIndex == totalItem - 0) {
            document.querySelector(".backImage").style.opacity = "0";
            document.querySelector(".backImage").style.transition = "opacity 1s ease-out";
            ad.classList.remove("traveling");
            currentIndex = 0;
            tlFront.reverse();
            unZoom();
            ET.track({
                type: "interactionURL",
                location: "replay",
            });
            setTimeout(() => {
                waittoClickAgain4User();
            }, 1500);
        }

        // console.log("current index after modification: ", currentIndex);
        // console.groupEnd();
        if( currentIndex == 4) {
            updateContent(currentIndex);
        } else {
            setTimeout(() => {
                updateContent(currentIndex);
            }, 250);
        }
        ET.track({
            type: "slideURL",
            location: "slide-" + currentIndex,
        });
    });

    let CTA = document.querySelector(".cta");
    CTA.addEventListener("click", () => {
        ET.exit({
            type: "clickURL",
            location: "cta",
        });
    });

    let Logo = document.querySelector(".logo");
    Logo.addEventListener("click", () => {
        ET.exit({
            type: "clickURL",
            location: "logo",
        });
    });

    const allOverlays = [...document.querySelectorAll(".overlay")];

    allOverlays.filter((overlay, index) => {
        if (
            overlay.classList.contains("frame-1") ||
            overlay.classList.contains("frame-2") ||
            overlay.classList.contains("frame-3")
        ) {
            overlay
                .querySelector(".content .title")
                .addEventListener("click", (e) => {
                    // console.log("my in i need ", index);
                    ad.setAttribute("data-spot-index", index);
                    // staggerText();
                    tlFront.play();
                    setTimeout(() => {
                        zoom(
                            zoomInfo[index][device]["backgroundPosition"],
                            zoomInfo[index][device]["scale"]
                        );
                    }, 500);
                });
        }
    });

    const allContents = [...document.querySelectorAll(".title")];

    const waittoClickAgain4User = () => {
        console.log('are you working?')
        allContents.forEach((content, index) => {
            content.style.pointerEvents = 'auto';
        })
    }

    const tlFront = gsap.timeline({
        paused: true,
        onComplete: () => {
            console.log("animation completed");
            allContents.forEach((content, index) => {
                content.style.pointerEvents = 'none';
            })
        },
    });
console.log(indexForImage);


    // } else {
        // tlFront.to(".frontImage", {
        //     scale: 20,
        //     duration: 0.75,
        //     ease: "circ.Out",
        // });
        tlFront.to(
            ".border",
            {
                duration: 0.25,
                opacity: 0.1,
            },
            // "<=-0.1"
            // "<="
        );
        tlFront.to(".frontImage", {
            opacity: 0,
            duration: .75,
        }), "<=-0.1";
        tlFront.to(
            ".border",
            {
                duration: 1,
                opacity: 0,
            },
            "<="
        );
        // tlFront.add(() => {
        //     document.querySelector(".overlay-container").style.zIndex = 999;
        // }, "<=-1");
    // }


    const emptyText = () => {
        // if(!ad.classList.contains("traveling" && !ad.classList)) {
        console.log("empting everything here");
        document.querySelectorAll(".overlay .summary").forEach((text, i) => {
            // text.innerHTML = "";
            text.style.height = '60px';
        });
        // }
    };

  
const tlFront2 = gsap.timeline({paused: true});

// if(currentIndex === 4) {
    tlFront2.to(".frontImage", {
        opacity: 1,
        duration: 0.45,
    });
    tlFront2.to(
        ".border",
        {
            duration: 0.55,
            opacity: 0.9,
        },
        // "<=-0.1"
        "<="
    );
    tlFront2.to(
        ".border",
        {
            duration: 1,
            opacity: 0,
        },
        "<="
    );


    const staggerText = () => {
        document.querySelectorAll(".overlay .summary").forEach((text, i) => {
                gsap.to (text, {
                    height: "auto",
                    duration: .5, 
                    ease: "power1.in",
                    delay: .5
                })
        });
    };
    

}

window.addEventListener("load", () => {
    setTimeout(() => {
        init();
    }, 50);
});

