// ==========================================
// Matrix Rain Background
// Elliot.dev Portfolio
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("matrix");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const chars =
        "アイウエオカキクケコサシスセソ0123456789ELLIOTSHADOWAI".split("");

    const fontSize = 16;

    let columns = 0;
    let drops = [];

    function resize() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        columns = Math.floor(canvas.width / fontSize);

        drops = new Array(columns).fill(1);

    }

    resize();

    window.addEventListener("resize", resize);

    function draw() {

        ctx.fillStyle = "rgba(5,5,5,0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {

            const char = chars[Math.floor(Math.random() * chars.length)];

            const x = i * fontSize;
            const y = drops[i] * fontSize;

            // Leading character brighter, trail dimmer
            ctx.fillStyle = Math.random() > 0.95 ? "#ccffdd" : "#00ff66";

            ctx.fillText(char, x, y);

            if (y > canvas.height && Math.random() > 0.975) {

                drops[i] = 0;

            }

            drops[i]++;

        }

    }

    // Respect reduced-motion preference
    const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {

        setInterval(draw, 45);

    }

});