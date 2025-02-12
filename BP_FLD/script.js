window.addEventListener("load", () => {
    /* to rotate pointe shoes 3D image */

    const section = document.querySelector("section");
    section.style.visibility = "visible";
    section.style.opacity = 1;

    const playPointeShoeSpotOne = gsap.timeline({ paused: true });
    const playPointeShoeSpot2 = gsap.timeline({ paused: true });
    const playPointeShoeSpot3 = gsap.timeline({
        paused: true,
        onComplete: () => {
            // pointe.style.zoom = '180%';
            // pointe.style.left = '-110px';
            // pointe.style.bottom = '3320px';
        },
    });
    const playPointeShoeSpot4 = gsap.timeline({ paused: true });
    const playPointeShoeSpot5 = gsap.timeline({ paused: true });
    const playPointeShoeSpot6 = gsap.timeline({ paused: true });
    const playPointeShoeSpot7 = gsap.timeline({
        paused: true,
        onComplete: () => {
            playPointeShoeSpot7Ver.play();
        },
    });
    const playPointeShoeSpot7Ver = gsap.timeline({ paused: true });
    const pointe = document.querySelector(".pointe");

    playPointeShoeSpotOne.to(pointe, {
        duration: 1,
        backgroundPosition: "-1480px 0px",
        ease: "SteppedEase(3)",
    });
    // playPointeShoeSpotOne.to(pointe, { x: 0, duration: 1, }, "<=-1.5");
    playPointeShoeSpot2.to(pointe, {
        duration: 1,
        backgroundPosition: "-1480px -2600px",
        bottom: "3610px",
        ease: "SteppedEase(5)",
    });
    if(window.matchMedia('(max-width: 767px)').matches) {
        playPointeShoeSpot2.to(pointe, { x: -90, duration: 1 }, "<=-1.5");
    }
    playPointeShoeSpot3.to(pointe, {
        duration: 1,
        backgroundPosition: "-2480px 100px",
        bottom: "3190px",
        height: "3670px",
        // left: '-110px',
        // zoom: '180%',
        ease: "SteppedEase(2)",
    });
    if(window.matchMedia('(max-width: 767px)').matches) {
        playPointeShoeSpot3.to(pointe, { x: -190, y: -100, duration: 1 }, "<=-1.5");
    } else {
        playPointeShoeSpot3.to(pointe, { x: -150, duration: 1 }, "<=-1.5");
    }
    playPointeShoeSpot4.to(pointe, {
        duration: 1,
        backgroundPosition: "-3980px 100px",
        // bottom: '3190px',
        // left: '-110px',
        // zoom: '180%',
        ease: "SteppedEase(3)",
    });
    if(window.matchMedia('(max-width: 767px)').matches) {
        playPointeShoeSpot4.to(pointe, { x: -240, duration: 1 }, "<=-1.5");
    } 
    playPointeShoeSpot5.to(pointe, {
        duration: 1,
        backgroundPosition: "-5580px 100px",
        // bottom: '3190px',
        // left: '-110px',
        // zoom: '180%',
        ease: "SteppedEase(3)",
    });
    if(window.matchMedia('(max-width: 767px)').matches) {
        playPointeShoeSpot5.to(pointe, { x: -180, duration: 1 }, "<=-1.5");
    } 
    playPointeShoeSpot6.to(pointe, {
        duration: 1,
        backgroundPosition: "-4550px 100px",
        ease: "SteppedEase(2)",
    });
    playPointeShoeSpot7.to(pointe, {
        duration: 1,
        // backgroundPosition: '-7650px 2740px',
        backgroundPosition: "-7650px 100px",
        ease: "SteppedEase(6)",
    });
    playPointeShoeSpot7Ver.to(pointe, {
        backgroundPosition: "-7650px 2760px",
        ease: "SteppedEase(5)",
    });
    if(window.matchMedia('(max-width: 767px)').matches) {
        playPointeShoeSpot7Ver.to(pointe, { x: -90, duration: 1 }, "<=-1.5");
    } 

    const allSpots = [...document.querySelectorAll(".spot")];
    // console.log(allSpots)
    const allSummaries = document.querySelectorAll(".summary");
    const mainContainer = document.querySelector(".zoom-container");
    let currentIdx = 0;
    let device;

    whatDevice = () => {
        let deviceWidth = window.innerWidth;
        if (deviceWidth > 1024) {
            device = "desktop";
        } else if (deviceWidth <= 1024 && deviceWidth > 767) {
            device = "tablet";
        } else if (deviceWidth <= 768 && deviceWidth >= 350) {
            device = "mobile";
        } else if (deviceWidth < 350) {
            device = "minimobile";
        }
        console.log(device);
    };

    whatDevice();

    const headlineSpans = document.querySelectorAll(".headline span");
    const headlineSpansBottom = document.querySelectorAll(
        ".headline-bottom span"
    );

    const headlineTl = gsap.timeline({ paused: true });
    headlineTl.to(headlineSpans, {
        opacity: 0,
        duration: 0.15,
        ease: "sine.out",
        stagger: 0.08,
    });
    headlineTl.to(
        headlineSpansBottom,
        { opacity: 1, duration: 0.15, ease: "sine.in", stagger: 0.08 },
        "<=+.25"
    );

    let spotsPos = [
        /* SPOT 0*/

        {
            desktop: {
                x: "100",
                y: "-140",
                scale: "2",
            },
            tablet: {
                x: "",
                y: "",
                scale: "",
            },
            mobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            minimobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
        },
        /* SPOT 1 */
        {
            desktop: {
                x: "-160",
                y: "-440",
                scale: "3.5",
                // translate(-160px, -440px) scale(3.5, 3.5)
            },
            tablet: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            mobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            minimobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
        },
        /* SPOT 2 */
        {
            desktop: {
                x: "-60",
                y: "-360",
                scale: "3.5",
            },
            tablet: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            mobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            minimobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
        },
        /* SPOT 3 */
        {
            desktop: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            tablet: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            mobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            minimobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
        },
        /* SPOT 4 */
        {
            desktop: {
                x: "100",
                y: "-230",
                scale: "3",
            },
            tablet: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            mobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            minimobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
        },
        /* SPOT 5 */
        {
            desktop: {
                x: "10",
                y: "-300",
                scale: "2.5",
            },
            tablet: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            mobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            minimobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
        },
        /* SPOT 6 */
        {
            desktop: {
                x: "240",
                y: "-180",
                scale: "2.5",
            },
            tablet: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            mobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
            minimobile: {
                x: "230",
                y: "-160",
                scale: "2.5",
            },
        },
    ];
    // console.log(allSummaries);
    let zoomSpot = (thisX, thisY, thisScale) => {
        TweenMax.to(".zoom-img", {
            duration: 1,
            scale: thisScale,
            x: thisX,
            y: thisY,
        });

        // gsap.to(`.allSumaries[${currentIdx}]`, {display: 'flex', duration: 1})
    };

    let updateSpots = (index) => {
        mainContainer.setAttribute("data-index", currentIdx);
        document.querySelector('#app').setAttribute('data-index', currentIdx);
        // console.log(spotsPos[index])
        zoomSpot(
            spotsPos[index][device]["x"],
            spotsPos[index][device]["y"],
            spotsPos[index][device]["scale"]
        );
    };
    // updateSpots(currentIdx);

    const spotAnimations = () => {
        
    }

    allSpots.forEach((spot, id) => {
        // console.log(allSpots)
        spot.setAttribute("data-index", id);
        spot.addEventListener("click", (e) => {
            console.log("im working");
            let idx = Number(e.currentTarget.dataset.index);
            console.log(idx);
            // playPointeShoe.play()
            if (idx === 0) {
                if(document.querySelector('.pointe').classList.contains('reset')) {
                    document.querySelector('.pointe').classList.remove('reset');
                }
                if(document.getElementById('app').classList.contains('replay')) {
                    document.getElementById('app').classList.remove('replay');
                }
                headlineTl.play();
                playPointeShoeSpotOne.play();
            }
            if (idx === 1) {
                playPointeShoeSpot2.play();
            }
            if (idx === 2) {
                playPointeShoeSpot3.play();
            }
            if (idx === 3) {
                playPointeShoeSpot4.play();
            }
            if (idx === 4) {
                playPointeShoeSpot5.play();
            }
            if (idx === 5) {
                playPointeShoeSpot6.play();
            }
            if (idx === 6) {
                playPointeShoeSpot7.play();
            }
            currentIdx = idx;
            
            updateSpots(currentIdx);
            allSummaries.forEach((summary, id) => {
                // console.log({currentIdx});
                // console.log({id});

                if (currentIdx === id) {
                    gsap.to(summary, { display: "flex" });
                    gsap.to(
                        summary,
                        { opacity: 1, duration: 1, ease: "sine.out" },
                        "<=+.5"
                    );
                }
            });
            // spot.nextElementSibling.style.opacity = 1;
        });

    });

/* navigation arrows */

    let arrowLeft = document.querySelector(".arrow-left");
    arrowLeft.addEventListener("click", () => {
        console.log("arrow left clicked");
        currentIdx--;
        console.group("arrow-Left");
        // console.log("total item: ", totalItem);
        console.log("current index: ", currentIdx);
        if (currentIdx === 0) {
            headlineTl.play();
            playPointeShoeSpotOne.reverse();
        }
        if (currentIdx === 1) {
            playPointeShoeSpot2.reverse();
        }
        if (currentIdx === 2) {
            playPointeShoeSpot3.reverse();
        }
        if (currentIdx === 3) {
            playPointeShoeSpot4.reverse();
        }
        if (currentIdx === 4) {
            playPointeShoeSpot5.reverse();
        }
        if (currentIdx === 5) {
            playPointeShoeSpot6.reverse();
        }
        if (currentIdx === 6) {
            playPointeShoeSpot7Ver.reverse();
        }

        if (currentIdx < 0) {currentIdx = 0 ;}

        console.log("current index after modification: ", currentIdx);
        console.groupEnd();

        updateSpots(currentIdx);
        //   ET.track({
        //     type: "slideURL",
        //     location: "product-" + currentIndex,
        //   });

        allSummaries.forEach((summary, id) => {
            // console.log({currentIdx});
            // console.log({id});
    
            if (currentIdx === id) {
                gsap.to(summary, { display: "none" });
                gsap.to(
                    summary,
                    { opacity: 0, duration: 1, ease: "sine.out" },
                    "<=+.5"
                );
            }
        });

        
    });

    let arrowRight = document.querySelector(".arrow-right");
  arrowRight.addEventListener("click", () => {
    // currentIdx++;
    console.group("arrow-Right");
    // console.log("total item: ", totalItem);
    console.log("current index: ", currentIdx);

    // if (currentIdx === 0) {
    //     headlineTl.play();
    //     playPointeShoeSpotOne.play();
    // }
    // if (currentIdx === 1) {
    //     playPointeShoeSpot2.play();
    // }
    // if (currentIdx === 2) {
    //     playPointeShoeSpot3.play();
    // }
    // if (currentIdx === 3) {
    //     playPointeShoeSpot4.play();
    // }
    // if (currentIdx === 4) {
    //     playPointeShoeSpot5.play();
    // }
    // if (currentIdx === 5) {
    //     playPointeShoeSpot6.play();
    // }
    // if (currentIdx === 6) {
    //     playPointeShoeSpot7.play();
    // }

    allSummaries.forEach((summary, id) => {
        // console.log({currentIdx});
        // console.log({id});

        // if (currentIdx === id) {
            gsap.to(summary, { display: "flex" });
            gsap.to(
                summary,
                { opacity: 0, duration: 1, ease: "sine.out" },
                "<=+.5"
            );
        // }
    });

    if (currentIdx < 0 || currentIdx == 6) {
      currentIdx = 0;
      playPointeShoeSpot7.reverse();
      playPointeShoeSpot7Ver.reverse();
      playPointeShoeSpot6.reverse();
      playPointeShoeSpot5.reverse();
      playPointeShoeSpot4.reverse();
      playPointeShoeSpot3.reverse();
      playPointeShoeSpot2.reverse();
      playPointeShoeSpotOne.reverse();
      document.querySelector('.pointe').classList.add('reset');
      document.getElementById('app').classList.add('replay');
      updateSpots(currentIdx);
     
      allSummaries.forEach((summary, id) => {
        // console.log({currentIdx});
        // console.log({id});

        // if (currentIdx === id) {
            gsap.to(summary, { display: "none" });
            gsap.to(
                summary,
                { opacity: 0, duration: 1, ease: "sine.out" },
                "<=+.5"
            );
        // }
    });
    if(currentIdx === 0) {
    }
 
    }

    console.log("current index after modification: ", currentIdx);
    console.groupEnd();

    // updateSpots(currentIdx);

  });

    const displayingSpots = gsap.timeline({});
});

window.addEventListener('click', e => {
    console.log(e.target)
})