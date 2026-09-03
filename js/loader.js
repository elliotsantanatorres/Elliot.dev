// ==========================================
// Shadow OS Loader
// Elliot.dev Portfolio
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const bootLog = document.getElementById("boot-log");
    const loaderBar = document.getElementById("loader-bar");

    if (!loader || !bootLog || !loaderBar) return;

    const bootMessages = [

        "[ OK ] Booting Shadow OS",
        "[ OK ] Loading Kernel",
        "[ OK ] Initializing Matrix Engine",
        "[ OK ] Starting Secure Network",
        "[ OK ] Loading Python Runtime",
        "[ OK ] Connecting FastAPI",
        "[ OK ] Connecting Ollama",
        "[ OK ] Loading Electron",
        "[ OK ] Authenticating Elliot Santana Torres",
        "[ OK ] Starting Portfolio Interface",
        "[ DONE ] System Ready"

    ];

    let index = 0;

    function nextLine() {

        if (index < bootMessages.length) {

            const line = document.createElement("div");

            line.textContent = bootMessages[index];

            bootLog.appendChild(line);

            bootLog.scrollTop = bootLog.scrollHeight;

            loaderBar.style.width =
                `${((index + 1) / bootMessages.length) * 100}%`;

            index++;

            setTimeout(nextLine, 350);

        } else {

            setTimeout(() => {

                loader.classList.add("hide");

                setTimeout(() => {

                    loader.remove();

                }, 1000);

            }, 700);

        }

    }

    nextLine();

});