// ==========================================
// Elliot.dev
// Cyberpunk Targeting Cursor
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = document.createElement("div");
    dot.className = "cursor-dot";

    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    ring.innerHTML =
        '<span class="c-tl"></span><span class="c-tr"></span>' +
        '<span class="c-bl"></span><span class="c-br"></span>';

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rotation = 0;

    document.addEventListener("mousemove", e => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";

    });

    function animate() {

        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;

        rotation += 0.4;

        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";
        ring.style.transform =
            "translate(-50%,-50%) rotate(" + rotation + "deg)";

        requestAnimationFrame(animate);

    }

    animate();

    document.addEventListener("mousedown", () => {

        ring.classList.add("click");

    });

    document.addEventListener("mouseup", () => {

        ring.classList.remove("click");

    });

    const hoverTargets =
        "a,button,.btn,.project-card,.skill-card,.project-details-btn,input,textarea";

    document.querySelectorAll(hoverTargets).forEach(item => {

        item.addEventListener("mouseenter", () => {

            ring.classList.add("hover");
            dot.classList.add("hover");

            if (item.closest(".project-card.danger")) {

                ring.classList.add("danger");

            }

        });

        item.addEventListener("mouseleave", () => {

            ring.classList.remove("hover");
            dot.classList.remove("hover");
            ring.classList.remove("danger");

        });

    });

});