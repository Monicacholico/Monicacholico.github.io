(function () {
    "use strict";

    function getLang() {
        const p = new URLSearchParams(window.location.search).get("lang");
        return p === "en" ? "en" : "es";
    }

    function pickDevice() {
        const w = window.innerWidth;
        if (w > 1024) return "desktop";
        if (w > 767) return "tablet";
        if (w >= 350) return "mobile";
        return "mobile-mini";
    }

    function t(obj, lang) {
        if (!obj) return "";
        return obj[lang] || obj.es || "";
    }

    function buildOverlays(container, copy, lang, injuries) {
        const frame0 = document.createElement("div");
        frame0.className = "overlay frame-0 active";
        frame0.dataset.index = "0";
        frame0.innerHTML =
            '<div class="intro-inner">' +
            '<h1 class="special-title"></h1>' +
            '<p class="special-summary"></p>' +
            '<p class="disclaimer"></p>' +
            '<p class="pick-label"></p>' +
            '<div class="injury-grid" role="list"></div>' +
            "</div>" +
            '<div class="gradient" aria-hidden="true"></div>';

        frame0.querySelector(".special-title").textContent = t(copy.intro.title, lang);
        frame0.querySelector(".special-summary").textContent = t(copy.intro.summary, lang);
        frame0.querySelector(".disclaimer").textContent = t(copy.intro.disclaimer, lang);
        frame0.querySelector(".pick-label").textContent = t(copy.intro.pickLabel, lang);

        const grid = frame0.querySelector(".injury-grid");
        injuries.forEach((inj, i) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "injury-chip";
            btn.setAttribute("role", "listitem");
            btn.dataset.injuryIndex = String(i + 1);
            btn.textContent = t(inj.title, lang);
            grid.appendChild(btn);
        });
        container.appendChild(frame0);

        injuries.forEach((inj, i) => {
            const idx = i + 1;
            const el = document.createElement("div");
            el.className = "overlay frame-" + idx;
            el.dataset.index = String(idx);
            el.innerHTML =
                '<div class="content">' +
                '<span class="dot" aria-hidden="true"></span>' +
                "<h2 class=\"title\"></h2>" +
                '<p class="summary"></p>' +
                "</div>" +
                '<div class="gradient" aria-hidden="true"></div>';
            el.querySelector(".title").textContent = t(inj.title, lang);
            el.querySelector(".summary").textContent = t(inj.summary, lang);
            container.appendChild(el);
        });
    }

    function setFrame(ad, overlays, index) {
        ad.dataset.index = String(index);
        overlays.forEach(function (el) {
            el.classList.toggle("active", Number(el.dataset.index) === index);
        });
    }

    function updateArrows(ad, currentIndex) {
        var left = ad.querySelector(".arrow-left");
        var right = ad.querySelector(".arrow-right");
        if (currentIndex === 0) {
            left.disabled = true;
            right.disabled = true;
        } else {
            left.disabled = false;
            right.disabled = false;
        }
    }

    function zoomTo(device, imageEl, state) {
        gsap.to(imageEl, {
            duration: 0.85,
            ease: "power2.inOut",
            backgroundPosition: state.backgroundPosition,
            scale: state.scale,
        });
    }

    function init() {
        var lang = getLang();
        document.documentElement.lang = lang;

        fetch("copy.json")
            .then(function (r) {
                if (!r.ok) throw new Error("copy.json " + r.status);
                return r.json();
            })
            .then(function (copy) {
                var injuries = copy.injuries || [];
                var maxIndex = injuries.length;
                var device = pickDevice();
                var ad = document.querySelector(".ad");
                var imageEl = document.querySelector(".image-container");
                var frontEl = document.querySelector(".frontImage");
                var overlayContainer = document.querySelector(".overlay-container");

                buildOverlays(overlayContainer, copy, lang, injuries);
                var overlays = overlayContainer.querySelectorAll(".overlay");

                gsap.set(imageEl, {
                    transformOrigin: "50% 50%",
                    scale: copy.introZoom[device].scale,
                    backgroundPosition: copy.introZoom[device].backgroundPosition,
                });

                var currentIndex = 0;

                function getStateForFrame(index) {
                    if (index === 0) return copy.introZoom[device];
                    return injuries[index - 1].zoom[device];
                }

                function goToFrame(index) {
                    currentIndex = index;
                    setFrame(ad, overlays, index);
                    zoomTo(device, imageEl, getStateForFrame(index));
                    if (index === 0) {
                        gsap.to(frontEl, { opacity: 1, duration: 0.5, ease: "power2.out" });
                        ad.classList.remove("zoomed");
                    } else {
                        gsap.to(frontEl, { opacity: 0, duration: 0.45, ease: "power2.in" });
                        ad.classList.add("zoomed");
                    }
                    updateArrows(ad, index);
                }

                overlayContainer.querySelectorAll(".injury-chip").forEach(function (btn) {
                    btn.addEventListener("click", function () {
                        var idx = Number(btn.dataset.injuryIndex);
                        goToFrame(idx);
                    });
                });

                overlays.forEach(function (overlay) {
                    var idx = Number(overlay.dataset.index);
                    if (idx === 0) return;
                    overlay.addEventListener("click", function () {
                        goToFrame(idx);
                    });
                });

                ad.querySelector(".arrow-left").addEventListener("click", function () {
                    if (currentIndex <= 0) return;
                    if (currentIndex === 1) goToFrame(0);
                    else goToFrame(currentIndex - 1);
                });

                ad.querySelector(".arrow-right").addEventListener("click", function () {
                    if (currentIndex === 0) return;
                    if (currentIndex >= maxIndex) goToFrame(0);
                    else goToFrame(currentIndex + 1);
                });

                updateArrows(ad, 0);

                var resizeTimer;
                window.addEventListener("resize", function () {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(function () {
                        device = pickDevice();
                        zoomTo(device, imageEl, getStateForFrame(currentIndex));
                    }, 150);
                });

                ad.style.visibility = "visible";
            })
            .catch(function (e) {
                console.error(e);
                document.querySelector(".ad").innerHTML =
                    "<p style=\"padding:1rem;font-family:system-ui;color:#eae2b7\">No se pudo cargar copy.json. Ábrelo desde un servidor local o WordPress (no file://).</p>";
                document.querySelector(".ad").style.visibility = "visible";
            });
    }

    window.addEventListener("load", function () {
        setTimeout(init, 30);
    });
})();
