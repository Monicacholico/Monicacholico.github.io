const // firstDots = ["#dot1", "#dot1-2", "#dot1-3", "#dot1-4"],
    //     secondDots = ["#dot2", "#dot2-2", "#dot2-3", "#dot2-4"],
    map = document.getElementById("map"),
    group2 = ["#outlines", ".hotspot"];
(firstDots = document.querySelectorAll(".dot1")),
    (secondDots = document.querySelectorAll(".dot2"));

gsap.registerPlugin(ScrollTrigger);
// console.log('working?');

// for the horizontal scroll

// gsap.set(map, { fill: 'transparent' });

//repeating the hotspots
function revolveOne() {
    var tl = new TimelineMax({
        repeat: -1,
    });

    tl.add("begin1");
    tl.fromTo(
        firstDots,
        1,
        {
            opacity: 0,
            scale: 0,
            transformOrigin: "50% 50%",
        },
        {
            transformOrigin: "50% 50%",
            opacity: 1,
            scale: 1.5,
            ease: Sine.easeOut,
        },
        "begin1"
    );
    tl.to(
        firstDots,
        0.5,
        {
            opacity: 0,
            transformOrigin: "50% 50%",
            scale: 2,
            ease: Sine.easeOut,
        },
        "begin1+=1"
    );

    return tl;
}

function revolveTwo() {
    var tl = new TimelineMax({
        repeat: -1,
    });

    tl.add("begin2");
    tl.fromTo(
        secondDots,
        1,
        {
            opacity: 0,
            scale: 0,
            transformOrigin: "50% 50%",
        },
        {
            transformOrigin: "50% 50%",
            opacity: 1,
            scale: 3,
            ease: Sine.easeOut,
        },
        "begin2+=0.5"
    );
    tl.to(
        secondDots,
        0.5,
        {
            opacity: 0,
            transformOrigin: "50% 50%",
            scale: 3.5,
            ease: Sine.easeOut,
        },
        "begin2+=1.5"
    );

    return tl;
}

var repeat = new TimelineMax();
//adding a relative label becuase otherwise the first will go on forever
repeat.add("beginBase");
repeat.add(revolveOne(), "beginBase");
repeat.add(revolveTwo(), "beginBase");

//interaction
function zoomIn(country) {
    //zooming in part
    var currentCountry = document.getElementById(country),
        s = currentCountry.getBBox(),
        newView = "" + s.x + " " + s.y + " " + (s.width + 200) + " " + s.height,
        group1 = [
            ".text-" + country,
            ".timeline-" + country,
            ".x-out",
            ".outer-" + country,
        ],
        tl = new TimelineMax();

    tl.add("zIn");
    tl.fromTo(
        map,
        1.5,
        {
            attr: { viewBox: "0 0 1795.2 875.1" },
        },
        {
            attr: { viewBox: newView },
        },
        "zIn"
    );
    tl.to(
        [".text-" + country, ".timeline-" + country, ".outer-" + country],
        0.1,
        {
            // display: "flex",
            visibility: "visible",
        },
        "zIn"
    );
    tl.fromTo(
        group2,
        0.25,
        {
            opacity: 1,
        },
        {
            opacity: 0,
            ease: Circ.easeIn,
        },
        "zIn"
    );
    tl.fromTo(
        currentCountry,
        0.35,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            ease: Circ.easeOut,
        },
        "zIn+=0.5"
    );
    tl.fromTo(
        group1,
        0.5,
        {
            opacity: 0,
        },
        {
            opacity: 0.65,
            ease: Sine.easeOut,
        },
        "zIn+=1"
    );
}

function zoomOut(geo) {
    //zooming out part
    var currentArea = document.getElementById(geo),
        group3 = [
            ".text-" + geo,
            ".timeline-" + geo,
            ".outer-" + geo,
            ".x-out",
        ],
        tl = new TimelineMax();

    tl.add("zOut");
    tl.to(
        [group3],
        0.5,
        {
            opacity: 0,
            ease: Sine.easeIn,
        },
        "zOut"
    );
    tl.to(
        ".x-out",
        {
            opacity: 0,
            ease: Sine.easeIn,
        },
        "zOut+=0.5"
    );
    tl.to(
        map,
        1,
        {
            attr: { viewBox: "0 0 1795.2 875.1" },
        },
        "zOut"
    );
    tl.to(
        group2,
        0.25,
        {
            opacity: 1,
            ease: Sine.easeOut,
        },
        "zOut+=2"
    );
    tl.to(
        [".text-" + geo, ".timeline-" + geo, ".outer-" + geo],
        // [".text-" + geo, ".timeline-" + geo],
        0.1,
        {
            // display: "none",
            visibility: "hidden",
        },
        "zOut+=1"
    );
    tl.to(
        currentArea,
        1,
        {
            opacity: 0,
            ease: Sine.easeIn,
        },
        "zOut+=0.4"
    );
}

function timelineCountry(country) {
    //timeline part
    const timeLine = document.querySelector(
        ".timeline-" + country + " .timeline-graph"
    );
    const dates = gsap.utils.toArray(
        ".timeline-" + country + " .timeline-list li"
    );
    console.log(dates);
    var tl = new TimelineMax();
    tl.add("beginTimeline");
    tl.fromTo(
        timeLine,
        { width: 0 },
        { width: "100%", duration: 3, ease: Sine.easeOut },
        "beginTimeline+=0.5"
    );
    tl.fromTo(
        timeLine,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: Sine.easeOut },
        "beginTimeline+=1"
    );
}

const hotspot = document.querySelectorAll(".hotspot");
const xOut = document.querySelector(".x-out");

hotspot.forEach((spot) =>
    spot.addEventListener("click", function () {
        const area = this.getAttribute("data-name");
        xOut.setAttribute("data-info", area);
        zoomIn(area);
        timelineCountry(area);
        timelineHistory(area);
    })
);

xOut.addEventListener("click", function () {
    const area = this.getAttribute("data-info");
    zoomOut(area);
});

// animation for the timeline history

function timelineHistory(country) {
    const smallImages = gsap.utils.toArray(".img-container img");
    const slider = document.querySelector(`.outer.outer-${country} .slider`);
    console.log(slider);
    const sections = gsap.utils.toArray(`.outer-${country} .slider section`);
    console.log(sections);
    const hearts = gsap.utils.toArray(".img-container img");
    console.log(hearts);

    let tl = gsap.timeline({
        defaults: {
            ease: "none",
        },
       
        scrollTrigger: {
            trigger: slider,
            pin: true,
            scrub: 2,
            end: () => "+=" + slider.offsetWidth,
        },
    });

    tl.to(slider, {
        xPercent: -66,
    });
    

    sections.forEach((stop, i) => {
        //  tl.to('.all-outer-sliders', {opacity: 1});
        tl.from(stop.querySelector(".content"), {
            yPercent: -120,
            opacity: 0,
            ease: "sine.out",
            duration: 1,
            scrollTrigger: {
                trigger: stop.querySelector(".content"),
                start: "left center",
                end: "left center",
                containerAnimation: tl,
                scrub: true,
                // markers: true
            },
        })
        .add(() => { console.log( 'im down here')})
    });

    smallImages.forEach((img, i) => {
        gsap.from(img, {
            xPercent: img.dataset.distance,
            scrollTrigger: {
                scrub: 0.3,
            },
        });
    });
}



// HTML factory for the timeline
// class TimelineFactory {
//     constructor(country) {
//         this.country = country;
//         this.textInfo = document.querySelector(`.text-info.text-${country}`);
//         this.timeline = document.querySelector(`.outer.outer-${country}`);
//     }


//     createTextInfo() {
//         this.textInfo.innerHTML = `
//             <h2>${this.country}</h2>
//             <div class="info">
//                 <div class="original-date">1967</div>
//                 <div class="summary">
//                     Abortion is legal on request up to 12 weeks of pregnancy, with later-term abortions allowed for specific medical reasons or fetal abnormalities.
//                 </div>
//                 <div class="current-status">
//                     Abortion is available on request up to 12 weeks of pregnancy. After 12 weeks, it's permitted if there is risk to health, severe fetal abnormalities.
//                 </div>
//             </div>
//         `;
//     }

//     createTimelineItem(year, description) {
//         const item = document.createElement("li");
//         item.innerHTML = `<span>${year}</span> ${description}`;
//         this.timelineList.appendChild(item);
//     }

//     createTimelineGraph() {
//         // Logic to create the timeline graph
//     }
//     render() {
//         // Render the timeline
//         this.timelineGraph.style.display = "block";
//         this.timelineList.style.display = "block";
//     }
//     clear() {
//         // Clear the timeline
//         this.timelineList.innerHTML = "";
//         this.timelineGraph.style.display = "none";
//         this.timelineList.style.display = "none";
//     }
//     addEventListeners() {
//         // Add event listeners for interaction
//         this.timeline.addEventListener("click", (e) => {
//             if (e.target.tagName === "LI") {
//                 const year = e.target.querySelector("span").textContent;
//                 console.log(`Clicked on year: ${year}`);
//                 // Handle the click event
//             }
//         });
//     }
//     init() {
//         // Initialize the timeline
//         this.clear();
//         this.addEventListeners();
//         this.render();
//     }
//     addItem(year, description) {
//         this.createTimelineItem(year, description);
//         this.render();
//     }
// }