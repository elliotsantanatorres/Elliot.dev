// ==========================================
// Shadow Terminal Typing Animation
// Elliot.dev Portfolio
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const typing = document.getElementById("typing");

    if (!typing) return;

    const commands = [

        "whoami",
        "python shadow_ai.py --status",
        "ls ~/projects/",
        "cat skills.txt",
        "curl github.com/ShadowFox486",
        "echo $AVAILABILITY"

    ];

    let commandIndex = 0;
    let charIndex = 0;

    function type() {

        if (charIndex < commands[commandIndex].length) {

            typing.textContent =
                commands[commandIndex].substring(0, charIndex + 1);

            charIndex++;

            setTimeout(type, 55);

        } else {

            setTimeout(erase, 2200);

        }

    }

    function erase() {

        if (charIndex > 0) {

            charIndex--;

            typing.textContent =
                commands[commandIndex].substring(0, charIndex);

            setTimeout(erase, 25);

        } else {

            commandIndex = (commandIndex + 1) % commands.length;

            setTimeout(type, 400);

        }

    }

    type();

});