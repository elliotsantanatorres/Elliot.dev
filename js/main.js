// ==========================================
// Elliot.dev Main JavaScript
// Version 1.0
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Navbar
    // ==========================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    // ==========================
    // Progress Bar
    // ==========================

    const progress = document.querySelector(".progress-bar");

    function updateProgress() {

        const scroll =
            document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const percent = (scroll / height) * 100;

        progress.style.width = percent + "%";

    }

    window.addEventListener("scroll", updateProgress);

    // ==========================
    // Reveal Animation
    // ==========================

    const reveals = document.querySelectorAll(".reveal");

    function revealSections() {

        const trigger = window.innerHeight * 0.85;

        reveals.forEach(section => {

            const top = section.getBoundingClientRect().top;

            if (top < trigger) {

                section.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", revealSections);

    revealSections();

    // ==========================
    // Back To Top
    // ==========================

    const topButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    // ==========================
    // Mobile Menu
    // ==========================

    const menuBtn = document.querySelector(".menu-toggle");

    const menu = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

    // ==========================
    // Close Menu
    // ==========================

    document.querySelectorAll(".nav-links a")
        .forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });

    // ==========================
    // Contact Form (Formspree)
    // ==========================
    // Submits in the background via fetch so the page doesn't
    // reload — Formspree delivers the message straight to your inbox.

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", e => {

            e.preventDefault();

            const button = contactForm.querySelector("button[type=submit]");
            const originalText = button.textContent;

            button.textContent = "Sending...";
            button.disabled = true;

            fetch(contactForm.action, {

                method: "POST",
                body: new FormData(contactForm),
                headers: { "Accept": "application/json" }

            })
            .then(res => {

                if (res.ok) {

                    button.textContent = "Message Sent ✔";

                    setTimeout(() => {

                        button.textContent = originalText;
                        button.disabled = false;
                        contactForm.reset();

                    }, 2500);

                } else {

                    throw new Error("Formspree responded with an error");

                }

            })
            .catch(err => {

                console.error("Contact form error:", err);

                button.textContent = "Failed — try again";

                setTimeout(() => {

                    button.textContent = originalText;
                    button.disabled = false;

                }, 2500);

            });

        });

    }

    // ==========================
    // Active Navigation
    // ==========================

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });

});