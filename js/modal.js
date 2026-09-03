// ==========================================
// Project Details Modal
// Elliot.dev Portfolio
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("project-modal");

    if (!modal) return;

    const projects = {

        "shadow-ai": {
            image: "assets/images/banner-shadow-ai.jpg",
            title: "Shadow AI",
            status: "Finished",
            statusClass: "",
            fileTitle: "shadow-ai.json",
            description:
                "A private, local-first desktop AI assistant capable of " +
                "controlling an entire computer — voice commands, task " +
                "automation, and a locally-hosted LLM backend via Ollama. " +
                "Nothing is sent to the cloud; everything runs on-device.",
            stack: ["Python", "Electron", "Ollama", "FastAPI"],
            role: "Solo developer — architecture, AI integration, and UI.",
            note: null,
            links: [
                { label: "View Code", href: "https://github.com/ShadowFox486/Shadow-AI", primary: true }
            ]
        },

        "portfolio": {
            image: "assets/images/banner-portfolio.jpg",
            title: "Elliot.dev — This Portfolio",
            status: "Finished",
            statusClass: "",
            fileTitle: "portfolio.json",
            description:
                "The hacker-terminal themed site you're on right now. " +
                "Built from scratch with vanilla HTML, CSS, and JavaScript — " +
                "the Matrix rain background, boot-sequence loader, typing " +
                "terminal, and live system feed are all custom-built, no " +
                "frameworks.",
            stack: ["HTML5", "CSS3", "JavaScript"],
            role: "Solo developer — design, front-end, and animation.",
            note: null,
            links: [
                { label: "View Code", href: "https://github.com/ShadowFox486/ShadowFox486.github.io", primary: true }
            ]
        },

        "shadow-av": {
            image: "assets/images/banner-shadow-av.jpg",
            title: "Shadow AV",
            status: "Finished",
            statusClass: "",
            fileTitle: "shadow-av.json",
            description:
                "A next-generation Python antivirus application that scans " +
                "files and folders, reports detected threats in real time, " +
                "and can quarantine or remove malware.",
            stack: ["Python", "Security", "Malware Detection"],
            role: "Solo developer — architecture, malware detection, and UI.",
            note: null,
            links: [
                { label: "View Code", href: "https://github.com/ShadowFox486/Shadow-AV", primary: true }
            ]
        },
        "shadow-debugger": {
            image: "assets/images/banner-shadow-debugger.png",
            title: "Shadow Debugger",
            status: "In Progress",
            statusClass: "in-progress",
            fileTitle: "shadow-debugger.json",
            description:
                "A Python debugging tool that analyzes code, detects errors, " +
                "and provides suggestions for optimization and improvement.",
            stack: ["Python", "Security", "Debugging", "Code Analysis"],
            role: "N/A",
            note: "This project is currently under active development. More features coming soon.",
            links: []
        }
    };

    const els = {
        image: document.getElementById("modal-image"),
        title: document.getElementById("modal-title"),
        status: document.getElementById("modal-status"),
        description: document.getElementById("modal-description"),
        stack: document.getElementById("modal-stack"),
        role: document.getElementById("modal-role"),
        note: document.getElementById("modal-note"),
        actions: document.getElementById("modal-actions"),
        fileTitle: document.getElementById("modal-file-title")
    };

    function openModal(id) {

        const p = projects[id];

        if (!p) return;

        els.image.src = p.image;
        els.image.alt = p.title;
        els.title.textContent = p.title;
        els.fileTitle.textContent = p.fileTitle;

        els.status.textContent = p.status;
        els.status.className = "modal-status" + (p.statusClass ? " " + p.statusClass : "");

        els.description.textContent = p.description;

        els.stack.innerHTML = "";
        p.stack.forEach(tech => {
            const span = document.createElement("span");
            span.textContent = tech;
            els.stack.appendChild(span);
        });

        els.role.innerHTML = "<strong>Role:</strong> " + p.role;

        if (p.note) {
            els.note.style.display = "flex";
            els.note.textContent = p.note;
        } else {
            els.note.style.display = "none";
            els.note.textContent = "";
        }

        els.actions.innerHTML = "";
        p.links.forEach(link => {
            const a = document.createElement("a");
            a.href = link.href;
            a.target = "_blank";
            a.className = link.primary ? "btn" : "btn btn-ghost";
            a.textContent = link.label;
            els.actions.appendChild(a);
        });

        modal.classList.add("open");
        document.body.style.overflow = "hidden";

    }

    function closeModal() {

        modal.classList.remove("open");
        document.body.style.overflow = "";

    }

    document.querySelectorAll("[data-project]").forEach(el => {

        el.addEventListener("click", e => {

            // If a real link inside the card was clicked, let it work normally
            if (e.target.closest("a")) return;

            const id = el.getAttribute("data-project");

            openModal(id);

        });

    });

    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("modal-x").addEventListener("click", closeModal);

    modal.addEventListener("click", e => {

        if (e.target === modal) closeModal();

    });

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") closeModal();

    });

});