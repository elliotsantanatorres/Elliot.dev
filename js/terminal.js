// ==========================================
// Shadow AI Live Terminal
// Elliot.dev Portfolio
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const terminal = document.getElementById("system-terminal");

    if (!terminal) return;

    const logs = [

        "[INFO] Initializing Shadow AI...",
        "[INFO] Loading Python Runtime...",
        "[OK] FastAPI Connected",
        "[OK] Electron Connected",
        "[OK] Ollama Running",
        "[OK] AI Models Loaded",
        "[INFO] Memory Usage Stable",
        "[INFO] Monitoring System...",
        "[SUCCESS] Desktop Automation Enabled",
        "[SUCCESS] Voice Module Online",
        "[SUCCESS] Browser Control Enabled",
        "[SUCCESS] Secure Connection Established",
        "[STATUS] Waiting for Commands...",
        "[STATUS] System Healthy",
        "[STATUS] CPU Usage: 12%",
        "[STATUS] RAM Usage: 2.4 GB",
        "[STATUS] GPU Usage: 8%",
        "[STATUS] AI Response Time: 0.42s",
        "[STATUS] Listening..."
    ];

    let index = 0;

    function addLog() {

        const line = document.createElement("div");

        line.classList.add("terminal-line");

        line.textContent = logs[index];

        terminal.appendChild(line);

        terminal.scrollTop = terminal.scrollHeight;

        if (terminal.children.length > 18) {
            terminal.removeChild(terminal.firstChild);
        }

        index++;

        if(index >= logs.length){

            index = 0;

        }

    }

    addLog();

    setInterval(addLog,1800);

});