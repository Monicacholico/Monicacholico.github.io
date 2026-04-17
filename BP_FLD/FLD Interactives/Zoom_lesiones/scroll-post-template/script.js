/**
 * Sticky leg + scroll-sync zoom.
 * Zoom targets: elements in .fld-ls__copy with data-zoom-id (see zoom-config.json)
 * or legacy data-zoom-bg + data-zoom-scale on the element.
 *
 * Config load order per .fld-ls root:
 * 1) <script type="application/json" class="fld-ls-zoom-data">…</script> inside the article
 * 2) fetch("zoom-config.json") relative to the page URL (needs local server / WP)
 */
(function () {
    "use strict";

    function loadZoomMap(root) {
        var inline = root.querySelector('script.fld-ls-zoom-data[type="application/json"]');
        if (inline && inline.textContent.trim()) {
            try {
                return Promise.resolve(JSON.parse(inline.textContent.trim()));
            } catch (e) {
                console.warn("fld-ls: invalid inline zoom JSON", e);
                return Promise.resolve({});
            }
        }
        return fetch("zoom-config.json")
            .then(function (r) {
                return r.ok ? r.json() : {};
            })
            .catch(function () {
                return {};
            });
    }

    function resolveZoom(el, zoomMap) {
        var id = el.getAttribute("data-zoom-id");
        var bg;
        var scale;
        if (id && zoomMap && zoomMap[id]) {
            var z = zoomMap[id];
            var x = z.x != null ? String(z.x) : "50%";
            var y = z.y != null ? String(z.y) : "50%";
            bg = x + " " + y;
            scale = typeof z.scale === "number" ? z.scale : parseFloat(z.scale, 10);
        } else {
            bg = el.getAttribute("data-zoom-bg") || "50% 50%";
            scale = parseFloat(el.getAttribute("data-zoom-scale") || "1", 10);
        }
        if (isNaN(scale)) scale = 1;
        return { bg: bg, scale: scale };
    }

    function initFldLs(root, zoomMap) {
        if (!root || root.dataset.fldLsInit === "1") return;
        zoomMap = zoomMap || {};

        var imageEl = root.querySelector(".fld-ls__image");
        var sections = root.querySelectorAll(
            ".fld-ls__copy [data-zoom-id], .fld-ls__copy [data-zoom-bg]"
        );
        if (!imageEl || !sections.length) return;

        root.dataset.fldLsInit = "1";

        var useGsap = typeof gsap !== "undefined";
        // if (useGsap) {
        //     root.classList.add("fld-ls--gsap");
        //     gsap.set(imageEl, { transformOrigin: "50% 50%" });
        // }

        var lastEl = null;

        function applyFromSection(el) {
            if (!el || el === lastEl) return;
            lastEl = el;
            var z = resolveZoom(el, zoomMap);
            if (useGsap) {
                gsap.to(imageEl, {
                    overwrite: "auto",
                    duration: 0.75,
                    ease: "power2.inOut",
                    backgroundPosition: z.bg,
                    scale: z.scale,
                });
            } else {
                imageEl.style.backgroundPosition = z.bg;
                imageEl.style.transform = "scale(" + z.scale + ")";
            }
        }

        function sectionNearestViewportCenter() {
            var mid = window.innerHeight * 0.55;
            console.log('mid',mid);
            var best = null;
            var bestDist = Infinity;
            for (var i = 0; i < sections.length; i++) {
                var sec = sections[i];
                var rect = sec.getBoundingClientRect();
                console.log('section',rect);
                if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
                var secMid = rect.top + rect.height * 0.35;
                var dist = Math.abs(secMid - mid);
                if (dist < bestDist) {
                    bestDist = dist;
                    best = sec;
                }
            }
            return best;
        }

        var ticking = false;
        function onScrollOrResize() {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(function () {
                ticking = false;
                var el = sectionNearestViewportCenter();
                if (el) applyFromSection(el);
            });
        }

        window.addEventListener("scroll", onScrollOrResize, { passive: true });
        window.addEventListener("resize", onScrollOrResize, { passive: true });
        onScrollOrResize();
    }

    function boot() {
        document.querySelectorAll(".fld-ls").forEach(function (root) {
            loadZoomMap(root).then(function (map) {
                initFldLs(root, map);
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        boot();
    }
})();
