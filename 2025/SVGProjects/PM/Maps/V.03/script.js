const abortionData = { /* your JSON here */ 
"Iceland": {
    "current_laws": {
      "on_demand_up_to_weeks": 22,
      "after_weeks": "health emergencies, fetal abnormalities",
      "healthcare_coverage": true
    },
    "timeline": [
      { "year": 1935, "event": "Abortion legalized under restrictive conditions" },
      { "year": 2019, "event": "On-demand abortion legalized up to 22 weeks" }
    ],
    "activism": "Strong women's movement and progressive policy"
  },
  "Norway": {
    "current_laws": {
      "on_demand_up_to_weeks": 12,
      "after_weeks": "health, fetal abnormalities, committee approval",
      "healthcare_coverage": true
    },
    "timeline": [
      { "year": 1960, "event": "Abortion permitted under restrictive conditions" },
      { "year": 1978, "event": "On-demand abortion legalized up to 12 weeks" }
    ],
    "activism": "1978 reform influenced by advocates for women's health"
  },
  "Ireland": {
    "current_laws": {
      "on_demand_up_to_weeks": 12,
      "after_weeks": "health risks, fetal abnormalities",
      "healthcare_coverage": true
    },
    "timeline": [
      { "year": 1861, "event": "Offences against the Person Act criminalized abortion" },
      { "year": 2018, "event": "Eighth Amendment repealed by referendum" },
      { "year": 2019, "event": "New abortion law came into force" }
    ],
    "activism": "Together for Yes, strong grassroots movement for change"
  },
  "United_Kingdom": {
    "current_laws": {
      "on_demand_up_to_weeks": 24,
      "after_weeks": "health risks, fetal abnormalities",
      "healthcare_coverage": true
    },
    "timeline": [
      { "year": 1861, "event": "Offences against the Person Act criminalized abortion" },
      { "year": 1967, "event": "Abortion Act legalized abortion under conditions" },
      { "year": 2019, "event": "Northern Ireland decriminalized abortion" }
    ],
    "activism": "1967 reform influenced by health advocates; 2019 change due to human rights campaigns"
  },
  "Argentina": {
    "current_laws": {
      "on_demand_up_to_weeks": 14,
      "after_weeks": " rape, health risks",
      "healthcare_coverage": true
    },
    "timeline": [
      { "year": 1921, "event": "Abortion permitted in cases of rape or health danger" },
      { "year": 2020, "event": "On-demand abortion legalized up to 14 weeks" }
    ],
    "activism": "Green Wave movement (Marea Verde) played key role in legalization"
  },
  "Colombia": {
    "current_laws": {
      "on_demand_up_to_weeks": 24,
      "after_weeks": " health risks, rape, fetal abnormalities",
      "healthcare_coverage": true
    },
    "timeline": [
      { "year": 2006, "event": "Constitutional Court legalized abortion under certain conditions" },
      { "year": 2022, "event": "Constitutional Court extends on-demand abortion to 24 weeks" }
    ],
    "activism": "Colombian feminists and Causa Justa movement challenged restrictive laws"
  },
  "Mexico": {
    "current_laws": {
      "on_demand_up_to_weeks": 12,
      "after_weeks": " health, rape, fetal abnormalities (varies by state)"
    },
    "timeline": [
      { "year": 2007, "event": "Mexico City legalized abortion up to 12 weeks" },
      { "year": 2021, "event": "Supreme Court ruling decriminalized abortion nationally" }
    ],
    "activism": "Marea Verde and advocates successfully challenged restrictive laws"
  },
  "Canada": {
    "current_laws": {
      "on_demand_up_to_weeks": " no legal limit",
      "after_weeks": " governed by health care providers’ judgment",
      "healthcare_coverage": true
    },
    "timeline": [
      { "year": 1969, "event": "Law amended to allow abortion under certain conditions" },
      { "year": 1988, "event": "Supreme Court struck down abortion law in R v Morgentaler" }
    ],
    "activism": "Dr. Henry Morgentaler challenged restrictive laws; Supreme Court ruling made abortion a matter of health care"
  },
  "United_States": {
    "current_laws": {
      "on_demand_up_to_weeks": " varies by state",
      "after_weeks": " health, rape, fetal abnormalities (varies by state)"
    },
    "timeline": [
      { "year": 1973, "event": "Roe v Wade legalized abortion across USA" },
      { "year": 2022, "event": "Dobbs v Jackson overturned Roe v Wade, allowing states to regulate abortion" }
    ],
    "activism": "Deep political divisions; ongoing legal battles over abortion access"
  },
  "Germany": {
    "current_laws": {
      "on_demand_up_to_weeks": 12,
      "after_weeks": " health risks, rape, fetal abnormalities",
      "healthcare_coverage": true
    },
    "timeline": [
      { "year": 1976, "event": "Indications Model legalized abortion under conditions" },
      { "year": 1995, "event": "Current framework after reunification; abortion legal within first 12 weeks with counseling" }
    ],
    "activism": "Debate influenced by women's groups and German Constitutional Court decisions"
  }

};



class CountryAbortionInfo {
    constructor(data, wrapperInfoSelector, outerContainerSelector) {
        this.data = data;
        this.wrapperInfo = document.querySelector(wrapperInfoSelector);
        this.outerContainer = document.querySelector(outerContainerSelector);
    }

    formatCountryName(name) {
        return name.replace(/_/g, '-');
    }

    createTextInfo(country, info) {
        const div = document.createElement("div");
        const className = `text-info text-${this.formatCountryName(country)}`;
        div.className = className;

        let originalDate = info.timeline[0]?.year || "N/A";
        let summary = info.timeline[0]?.event || "";
        let currentStatus = `Abortion is legal on demand up to ${info.current_laws.on_demand_up_to_weeks} weeks. After that: ${info.current_laws.after_weeks}.`;
        if (info.current_laws.healthcare_coverage) {
            currentStatus += ` Covered by public healthcare.`;
        }

        div.innerHTML = `
            <h2>${country.replace(/_/g, ' ')}</h2>
            <div class="info">
                <div class="original-date">${originalDate}</div>
                <div class="summary">${summary}</div>
                <div class="current-status">${currentStatus}</div>
            </div>
        `;
        this.wrapperInfo.appendChild(div);
    }

    createSlider(country, timeline) {
        const outerDiv = document.createElement("div");
        outerDiv.className = `outer outer-${this.formatCountryName(country)}`;
        
        const sliderDiv = document.createElement("div");
        sliderDiv.className = "slider";

        timeline.forEach((entry, index) => {
            const section = document.createElement("section");
            section.innerHTML = `
                <div class="inner">
                    <img src="${index % 2 === 0 ? "avatar3_big.png" : "bird.png"}" alt="" />
                    <div class="content">
                        <h2>${entry.year}</h2>
                        <p>${entry.event}</p>
                    </div>
                </div>
            `;
            sliderDiv.appendChild(section);
        });

        outerDiv.appendChild(sliderDiv);
        this.outerContainer.appendChild(outerDiv);
    }

    generateAll() {
        for (const [country, info] of Object.entries(this.data)) {
            this.createTextInfo(country, info);
            this.createSlider(country, info.timeline);
        }
    }
}



///////// To animate /////////

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
