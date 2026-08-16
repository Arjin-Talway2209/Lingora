/* =================================
   LINGORA
   Main JavaScript
================================= */


/* =================================
   DATA
================================= */

let xp = 0;

let streak = 0;

let hearts = 5;

let progress = 0;


/* =================================
   ELEMENT HELPERS
================================= */

function showModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.add("active");
    }

}


function closeModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.remove("active");
    }

}


/* =================================
   START LEARNING
================================= */

function openStartScreen() {

    showModal("startScreen");

}


/* =================================
   LEVEL SELECTION
================================= */

function chooseLevel(level) {

    if (level === "beginner") {

        closeModal("startScreen");

        alert(
            "🌱 Welcome to Lingora!\n\n" +
            "You will start at German A1, Lesson 1."
        );

        return;
    }


    if (level === "little") {

        closeModal("startScreen");

        alert(
            "📖 Great!\n\n" +
            "We'll give you a short beginner check."
        );

        return;
    }


    if (level === "test") {

        closeModal("startScreen");

        alert(
            "🎯 Placement Test\n\n" +
            "The test will determine your German level."
        );

        return;
    }

}


/* =================================
   LOGIN
================================= */

function openLogin() {

    closeModal("signupModal");

    showModal("loginModal");

}


function login(event) {

    event.preventDefault();

    alert(
        "Login system will be connected later."
    );

}


/* =================================
   SIGN UP
================================= */

function openSignup() {

    closeModal("loginModal");

    showModal("signupModal");

}


function signup(event) {

    event.preventDefault();

    alert(
        "Account creation will be connected later."
    );

}


/* =================================
   SWITCH ACCOUNT WINDOWS
================================= */

function switchToSignup() {

    closeModal("loginModal");

    showModal("signupModal");

}


function switchToLogin() {

    closeModal("signupModal");

    showModal("loginModal");

}


/* =================================
   LESSONS
================================= */

function openLesson(number) {

    if (number === 1) {

        addXP(20);

        progress = 25;

        updateProgress();

        alert(
            "🎉 Lesson completed!\n\n" +
            "+20 XP"
        );

        return;
    }


    if (number === 2) {

        alert(
            "📚 Lesson 2 is coming soon!"
        );

        return;
    }

}


function lockedLesson() {

    alert(
        "🔒 Complete the previous lesson first!"
    );

}


/* =================================
   PRACTICE
================================= */

function practice(type) {

    alert(
        "📚 " +
        type +
        " practice is coming soon!"
    );

}


/* =================================
   XP
================================= */

function addXP(amount) {

    xp += amount;

    const element =
        document.getElementById("xp");

    if (element) {

        element.textContent = xp;

    }

}


/* =================================
   PROGRESS
================================= */

function updateProgress() {

    const fill =
        document.getElementById("progressFill");

    const text =
        document.getElementById("progressText");


    if (fill) {

        fill.style.width =
            progress + "%";

    }


    if (text) {

        text.textContent =
            progress + "%";

    }

}


/* =================================
   DARK MODE
================================= */

const darkModeButton =
    document.getElementById("darkMode");


if (darkModeButton) {

    darkModeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("dark");


            if (
                document.body.classList.contains("dark")
            ) {

                darkModeButton.textContent = "☀️";

            } else {

                darkModeButton.textContent = "🌙";

            }

        }
    );

}


/* =================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains("modal")
        ) {

            event.target.classList.remove("active");

        }

    }
);


/* =================================
   ESCAPE KEY
================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            document
                .querySelectorAll(".modal.active")
                .forEach(function (modal) {

                    modal.classList.remove("active");

                });

        }

    }
);
