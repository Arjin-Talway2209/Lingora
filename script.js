let xp = 0;
let streak = 0;
let hearts = 5;
let progress = 0;


/* =========================
   START LEARNING
========================= */

function startLearning() {

    document
        .getElementById("learn")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   OPEN LESSON
========================= */

function openLesson(number) {

    if (number === 1) {

        addXP(20);

        progress = 25;

        updateProgress();

        alert("🎉 Great job! You completed Greetings!");

    }

    if (number === 2) {

        alert("📚 Lesson 2 is coming next!");

    }

}


/* =========================
   PRACTICE
========================= */

function practice(type) {

    if (type === "vocabulary") {

        alert("🧠 Vocabulary practice is coming soon!");

    }

    if (type === "listening") {

        alert("🎧 Listening practice is coming soon!");

    }

    if (type === "grammar") {

        alert("✍️ Grammar practice is coming soon!");

    }

}


/* =========================
   XP
========================= */

function addXP(amount) {

    xp += amount;

    document.getElementById("xp").textContent = xp;

}


/* =========================
   PROGRESS
========================= */

function updateProgress() {

    document.getElementById("progressFill").style.width =
        progress + "%";

    document.getElementById("progressText").textContent =
        progress + "%";

}


/* =========================
   DARK MODE
========================= */

const darkButton =
    document.getElementById("darkMode");

darkButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkButton.textContent = "☀️";

    } else {

        darkButton.textContent = "🌙";

    }

});
