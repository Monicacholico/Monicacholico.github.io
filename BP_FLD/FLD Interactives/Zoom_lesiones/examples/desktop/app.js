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
                scale: 1.4,
            },
            tablet: {
                backgroundPosition: "0 0",
                scale: 1,
            },
            mobile: {
                backgroundPosition: "0 0",
                scale: 1,
            },
            "mobile-mini": {
                backgroundPosition: "0 0",
                scale: 1,
            },
        },

        /* :::::::: Frame 1 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: "-29% 14px",
                scale: 1.6,
            },
            tablet: {
                backgroundPosition: "0 0",
                scale: 1.1,
            },
            mobile: {
                backgroundPosition: "6%",
                scale: 1.1,
            },
            "mobile-mini": {
                backgroundPosition: "6%",
                scale: 1.1,
            },
        },

        /* :::::::: Frame 2 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: "56% 20px",
                scale: 1.6,
            },
            tablet: {
                backgroundPosition: "86% -30px",
                scale: 1.2,
            },
            mobile: {
                backgroundPosition: "56%",
                scale: 1.1,
            },
            "mobile-mini": {
                backgroundPosition: "56%",
                scale: 1.4,
            },
        },

        /* :::::::: Frame 3 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: "132% -8px",
                scale: 1.6,
            },
            tablet: {
                backgroundPosition: "153% -20px",
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
        /* :::::::: Frame 4 ::::::::::: */
        /* :::::::::::::::::::::::::::: */
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
                    1: "0",
                    2: "0",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "0 0",
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
                x: "0%",
                y: "0%",
                // scale: 1,
            },
        },

        /* :::::::: Frame 1 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "56% 20px",
                    2: "-29% 14px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "86% -30px",
                    2: "0% 0%",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "-791px 30px",
                    2: "-128px 30px",
                },
            },
            "mobile-mini": {
                x: "8%",
                y: "0%",
                // scale: 1.2,
            },
        },

        /* :::::::: Frame 2 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "132% -8px",
                    2: "56% 20px",
                    // 2: "190.65px 10.9px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "153% -20px",
                    2: "86% -30px",
                },
            },
            mobile: {
                // backgroundPosition: {
                // 1: "-1414px 30px",
                // 1: "-791px 30px",
                // 2: "-128px 30px"
                backgroundPosition: {
                    1: "-1414px 30px",
                    2: "-791px 30px",
                },
                // }
            },
            "mobile-mini": {
                x: "12%",
                y: "0%",
                // scale: 1.4,
            },
        },

        /* :::::::: Frame 3 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "132% -8px",
                    2: "56% 20px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "153% -20px",
                    2: "86% -30px",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "-1414px 30px",
                    2: "-791px 30px",
                },
            },
            "mobile-mini": {
                x: "-1%",
                y: "13%",
                scale: 1.6,
            },
        }

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
                    1: "-29% 14px",
                    2: "56% 20px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "0 0",
                    2: "83% -30px",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "-128px 30px",
                    2: "-791px 30px",
                },
            },
            "mobile-mini": {
                x: "8%",
                y: "0%",
                // scale: 1.2,
            },
        },

        /* :::::::: Frame 2 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "-20%",
                    2: "56% 20px",
                    // 2: "190.65px 10.9px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "0 0",
                    2: "86% -30px",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "-128px 30px",
                    2: "-791px 30px",
                },
            },
            "mobile-mini": {
                x: "12%",
                y: "0%",
                // scale: 1.4,
            },
        },

        /* :::::::: Frame 3 ::::::::::: */
        /* :::::::::::::::::::::::::::: */

        {
            desktop: {
                backgroundPosition: {
                    1: "56% 20px",
                    2: "132% -8px",
                },
            },
            tablet: {
                backgroundPosition: {
                    1: "86% -30px",
                    2: "153% -20px",
                },
            },
            mobile: {
                backgroundPosition: {
                    1: "-791px 30px",
                    2: "-1414px 30px",
                },
            },
            "mobile-mini": {
                x: "-1%",
                y: "13%",
                scale: 1.6,
            },
        }
    ];

    let totalItem = zoomInfo.length;
    for (var i = 0; i < totalItem; i++) {
        var tempItem = document.querySelector(".overlay.frame-" + i);
        tempItem.setAttribute("data-index", i);
        tempItem.addEventListener("click", (event) => {
            // console.log(event.currentTarget.dataset.index);
            let index = Number(event.currentTarget.dataset.index);
            currentIndex = index;
            // console.log('your hitting', currentIndex);
            // console.log(currentIndex);
            updateContent(currentIndex);
            ET.track({
                type: "interactionURL",
                location: "spot-" + currentIndex,
            });
        });
    }

    TweenMax.set(".image-container", {
        scale: zoomInfo[currentIndex][device]["scale"],
        backgroundPosition: `${zoomInfo[currentIndex][device]["backgroundPosition"]}`,
        alpha: 1,
    });

    let zoom = (whatPosition, scale) => {
        console.log("whatPosition: ", whatPosition);
        ad.classList.add("zoomed");
        TweenMax.to(".image-container", {
            duration: 1,
            scale: scale,
            backgroundPosition: whatPosition,
        });
    };

    let unZoom = () => {
        ad.classList.remove("zoomed");
        gsap.to(".image-container", { backgroundPosition: "0% 0%", duration:1, ease:"slow", delay: .75 });
        gsap.to(".image-container", { scale: 1.4 , duration:1, ease:"slow", delay: .75});
    };

    const moveZoomed = (from, to) => {
        console.log(
            moveRight[currentIndex][device]["backgroundPosition"][1],
            moveRight[currentIndex][device]["backgroundPosition"][2]
        );
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

    let currentSpotStyle;

    const spotClicked = (e, index) => {
        console.log("spot clicked");
        console.log(e.currentTarget);
        console.log("this index?: ", e.currentTarget.dataset.index);
        const ad = document.querySelector(".ad");
        console.log({ index });
        console.log({ indexForImage });
        if (index === indexForImage) {
            currentSpotStyle = window.getComputedStyle(
                document.querySelector(".image-container img")
            ).transformOrigin;
        }
        // console.log(currentSpotStyle);
        return currentSpotStyle;
    };

    let arrowLeft = document.querySelector(".arrow-left");
    arrowLeft.addEventListener("click", () => {
        // console.log("arrow left clicked");
        currentIndex--;
        // console.group("arrow-Left");
        // console.log("total item: ", totalItem);
        // console.log("current index: ", currentIndex);
        setTimeout(() => {
            ad.dataset.spotIndex = "";
        }, 1001);
        if (currentIndex == 0) {
            ad.classList.remove("traveling");
            ad.dataset.path = "";
            emptyText();
            // tlFront.reverse();
            if (device == "tablet") {
            //     gsap.to(".image-container", { duration: 1, scale: 1.4, delay: 1 });
            // } else
            //  {
                gsap.to(".image-container", { duration: 1, scale: 1 });
            }
            // document.querySelector(".frontImage").style.display = "block";
            setTimeout(() => {
                unZoom();
            }, 1500);
        } else {
            // setTextSummary();
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
            ad.dataset.path = "";
            emptyText();
            // document.querySelector(".border").style.zIndex = "-1";
            document.querySelector(".backImage").style.zIndex = "999";
            document.querySelector(".backImage").style.opacity = "1";
            document.querySelector(".backImage").style.transition = "opacity 1s ease-out";
            
            // tlFront.reverse();
            // setTimeout(() => {
                // console.log("now this is happening");
                // unZoom();
                // }, 500);
                // tlFront.reverse();
            }
            
            if (currentIndex == totalItem - 0) {
                // document.querySelector(".border").style.zIndex = "999";
                // document.querySelector(".frontImage").style.display = "block";
                document.querySelector(".backImage").style.zIndex = "-1";
                document.querySelector(".backImage").style.opacity = "0";
                // document.querySelector(".backImage").style.transition = "opacity 3s ease-out";
            ad.classList.remove("traveling");
            // ad.classList.add('replay');
            ad.dataset.path = "";
            emptyText();
            currentIndex = 0;
            // tlFront.reverse();
            // setTimeout(() => {
                unZoom();
            // }, 1500);
            ET.track({
                type: "interactionURL",
                location: "replay",
            });
        }

        console.log("current index after modification: ", currentIndex);
        // console.groupEnd();
        if (currentIndex == 4) {
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
            overlay.addEventListener("click", (e) => {
                // setTextSummary()
                console.log("my in i need ", index);
                ad.setAttribute("data-spot-index", index);
                ad.setAttribute("data-path", index);
                staggerText();
                // tlFront.play();
                setTimeout(() => {
                    zoom(
                        zoomInfo[index][device]["backgroundPosition"],
                        zoomInfo[index][device]["scale"]
                    );
                }, 500);
            });
        }
    });

    const tlFront = gsap.timeline({
        paused: true,
        onComplete: () => {
            console.log("animation completed");
            console.log('is this being reversed?')
            // document.querySelector(".frontImage").style.display = "none";
        },
    });

    // tlFront.to(".frontImage", {
    //     scale: 20,
    //     duration: 0.75,
    //     ease: "circ.Out",
    // });
    tlFront.to(
        ".border",
        {
            duration:.25,
            opacity: 0.1,
        },
        
    );
    tlFront.to(".frontImage", {
        opacity: 0,
        duration: .75,
    }), "<=+0.25";
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

    tlFrontTest4 = gsap.timeline({ paused: true });

    // const summaries = [
    //     "Collagen, a key component of skin’s protein framework, is boosted during sleep. The Creme’s CollaNight-8™ complex supports skin’s natural collagen for firmer skin.",
    //     "Ingredients in CollaNight-8 help combat the irritation that follows exposure to sunlight, pollution and other environmental aggressors during the day.",
    //     "Insufficient sleep can impact oil production. The Creme helps control oil and noticeably tightens pores.",
    // ];

    const emptyText = () => {
        // if(!ad.classList.contains("traveling" && !ad.classList)) {
        console.log("empting everything here");
        document.querySelectorAll(".overlay .summary").forEach((text, i) => {
            // text.innerHTML = "";
            text.style.height = "60px";
        });
        // }
    };

    // const staggerText = () => {
    //     document.querySelectorAll(".overlay .summary").forEach((text, i) => {
    //         console.log(i);
    //         if (
    //             !ad.classList.contains(
    //                 "traveling" && !ad.dataset.spotIndex == ""
    //             )
    //         ) {
    //             console.log("need to fill out this text");
    //             summaries.forEach((summary, index) => {
    //                 if (i == index) {
    //                     gsap.to(text, {
    //                         duration: 1,
    //                         text: summary,
    //                         ease: "power4.out",
    //                         delay: 1.5,
    //                     });
    //                 }
    //             });
    //         }
    //     });
    // };

    const staggerText = () => {
        document.querySelectorAll(".overlay .summary").forEach((text, i) => {
            gsap.to(text, {
                height: "auto",
                duration: 0.5,
                ease: "power1.in",
                delay: 1,
            });
        });
    };
}

window.addEventListener("load", () => {
    setTimeout(() => {
        init();
    }, 50);
});
