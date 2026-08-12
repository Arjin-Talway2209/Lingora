function hideStartScreen() {

    document
        .getElementById("startScreen")
        .classList.remove("active");

}


function chooseLevel(level) {

    if (level === "beginner") {

        alert(
            "🌱 Welcome to Lingora!\n\n" +
            "You'll start from German A1, Lesson 1."
        );

    }

    if (level === "little") {

        alert(
            "📖 Great!\n\n" +
            "We'll give you a short beginner check first."
        );

    }

    if (level === "test") {

        alert(
            "🎯 Placement Test\n\n" +
            "The Lingora placement test is coming next!"
        );

    }

}
