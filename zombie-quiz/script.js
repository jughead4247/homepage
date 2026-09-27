const questions = [

    // DAY 1 — THE OUTBREAK

    {
        question: "The outbreak has just begun. You hear screaming outside. What do you do?",
        answers: [
            ["Look outside to understand what is happening", 1],
            ["Lock the doors, gather essentials and plan your next move", 5],
            ["Leave immediately before the streets become crowded", 2],
            ["Go outside to help whoever is screaming", 0]
        ]
    },

    {
        question: "You have ten minutes before you need to leave. What is most important?",
        answers: [
            ["Food, water and a few useful tools", 2],
            ["Take valuables in case money becomes useful later", 0],
            ["Water, medicine, food and something to carry everything", 5],
            ["Grab whatever can fit in your backpack", 1]
        ]
    },

    {
        question: "You reach a road filled with abandoned vehicles. What do you do?",
        answers: [
            ["Walk through the vehicles looking for supplies", 1],
            ["Take the first vehicle that looks usable", 2],
            ["Move around the area and find the least exposed route", 5],
            ["Stay on the road because it is the fastest route", 0]
        ]
    },

    // DAY 2 — ON THE MOVE

    {
        question: "Your group needs water. You find a stream outside the town.",
        answers: [
            ["Drink from it after checking that it looks clean", 0],
            ["Fill containers and treat the water before drinking", 5],
            ["Take only enough for today", 1],
            ["Search for bottled water instead", 2]
        ]
    },

    {
        question: "You spot a small pharmacy that appears abandoned.",
        answers: [
            ["Enter quickly before someone else arrives", 1],
            ["Ignore it and keep moving", 0],
            ["Observe the building and surroundings before entering", 5],
            ["Send one person inside while everyone waits outside", 2]
        ]
    },

    {
        question: "You hear several zombies nearby but they haven't noticed you.",
        answers: [
            ["Stay quiet and take a longer route around them", 5],
            ["Run before they get any closer", 1],
            ["Wait until they move away", 2],
            ["Try to distract them and pass through", 0]
        ]
    },

    // DAY 3 — SHELTER

    {
        question: "Your group finds an apparently abandoned house.",
        answers: [
            ["Check the main rooms quickly", 2],
            ["Search the house thoroughly for supplies", 1],
            ["Observe it from outside and check entrances before going in", 5],
            ["Enter immediately because night is approaching", 0]
        ]
    },

    {
        question: "Someone in your group has a deep wound.",
        answers: [
            ["Clean and treat the wound using available supplies", 5],
            ["Tell them to rest and see if it improves", 1],
            ["Use whatever medicine you can find", 2],
            ["Ignore it unless it becomes serious", 0]
        ]
    },

    // DAY 4 — PEOPLE

    {
        question: "A stranger approaches your shelter asking for food.",
        answers: [
            ["Give them food immediately", 1],
            ["Tell them to leave", 2],
            ["Speak from a safe position and assess the situation first", 5],
            ["Invite them inside to hear their story", 0]
        ]
    },

    {
        question: "Another survivor offers to trade useful supplies.",
        answers: [
            ["Trade carefully without revealing everything you have", 5],
            ["Trust them if they seem friendly", 1],
            ["Trade whatever they ask for", 0],
            ["Refuse all contact with outsiders", 2]
        ]
    },

    {
        question: "Two members of your group strongly disagree about where to go.",
        answers: [
            ["Let the group vote on everything", 2],
            ["Choose the route yourself without discussion", 1],
            ["Hear both sides and make a decision based on risk", 5],
            ["Follow whoever has the most experience", 0]
        ]
    },

    // DAY 5 — RESOURCES

    {
        question: "Your food supply is running low.",
        answers: [
            ["Reduce portions and start looking for a sustainable source", 5],
            ["Keep eating normally until the food is gone", 0],
            ["Send everyone out searching for food", 2],
            ["Save most of the food for emergencies", 1]
        ]
    },

    {
        question: "Heavy rain has made the roads dangerous.",
        answers: [
            ["Continue because stopping wastes time", 0],
            ["Wait for conditions to improve while protecting supplies", 5],
            ["Find a shortcut through unfamiliar terrain", 2],
            ["Split the group so some can continue ahead", 1]
        ]
    },

    {
        question: "You discover a large amount of canned food, but carrying everything will slow you down.",
        answers: [
            ["Take everything and deal with the weight later", 1],
            ["Take only what can be carried comfortably", 2],
            ["Prioritize high-value supplies while keeping the group mobile", 5],
            ["Leave it because stopping is too risky", 0]
        ]
    },

    // DAY 6 — ESCALATION

    {
        question: "You discover that the zombies have become faster than before.",
        answers: [
            ["Keep using the same survival strategy", 0],
            ["Avoid populated areas and change your plans", 5],
            ["Travel only during daylight", 2],
            ["Move faster and take more risks", 1]
        ]
    },

    {
        question: "Your vehicle breaks down far from your destination.",
        answers: [
            ["Stay with the vehicle and hope someone finds you", 1],
            ["Take essential supplies and plan the safest route on foot", 5],
            ["Walk directly toward the nearest town", 2],
            ["Spend the day trying to repair it", 0]
        ]
    },

    {
        question: "Your group discovers that another large group is approaching your location.",
        answers: [
            ["Hide and observe before deciding what to do", 5],
            ["Confront them immediately", 0],
            ["Leave everything behind and run", 1],
            ["Approach them openly and ask what they want", 2]
        ]
    },

    // DAY 7 — THE ENDGAME

    {
        question: "You finally reach a settlement claiming to be safe.",
        answers: [
            ["Enter immediately because safety is more important", 1],
            ["Stay outside and observe the settlement first", 5],
            ["Ask the guards about their rules and resources", 2],
            ["Leave because no settlement can be trusted", 0]
        ]
    },

    {
        question: "The settlement offers you a permanent place to stay. What matters most before accepting?",
        answers: [
            ["How comfortable the accommodation is", 0],
            ["How much food they provide", 2],
            ["Their security, leadership, resources and rules", 5],
            ["Whether other survivors seem friendly", 1]
        ]
    },

    {
        question: "You survived the first week. What is your biggest priority now?",
        answers: [
            ["Find a better weapon", 2],
            ["Rest and stop worrying about the future", 0],
            ["Build a sustainable supply of food, water, shelter and security", 5],
            ["Travel farther away from the outbreak", 1]
        ]
    }

];


let currentQuestion = 0;
let score = 0;

let selectedAnswers =
    new Array(questions.length).fill(-1);


/* ===============================
   ELEMENTS
================================ */

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const homeInfo =
    document.getElementById("home-info");

const suggestionsCard =
    document.getElementById("suggestions-card");


const startButton =
    document.getElementById("start-btn");

const restartButton =
    document.getElementById("restart-btn");

const shareButton =
    document.getElementById("share-btn");

const challengeButton =
    document.getElementById("challenge-btn");


const backButton =
    document.getElementById("back-btn");

const nextButton =
    document.getElementById("next-btn");

const submitButton =
    document.getElementById("submit-btn");


const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question");

const answersContainer =
    document.getElementById("answers");

const progressBar =
    document.getElementById("progress-bar");


/* ===============================
   EVENTS
================================ */

startButton.addEventListener(
    "click",
    startQuiz
);

restartButton.addEventListener(
    "click",
    restartQuiz
);

shareButton.addEventListener(
    "click",
    shareResult
);

challengeButton.addEventListener(
    "click",
    shareResult
);

backButton.addEventListener(
    "click",
    goBack
);

nextButton.addEventListener(
    "click",
    goNext
);

submitButton.addEventListener(
    "click",
    showResult
);


/* ===============================
   START QUIZ
================================ */

function startQuiz() {

    currentQuestion = 0;

    score = 0;

    selectedAnswers =
        new Array(questions.length).fill(-1);


    startScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    homeInfo.classList.add("hidden");


    if (suggestionsCard) {

        suggestionsCard.classList.add("hidden");

    }


    progressBar.style.width = "0%";


    showQuestion();

}


/* ===============================
   SHOW QUESTION
================================ */

function showQuestion() {

    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    questionText.textContent =
        current.question;


    answersContainer.innerHTML = "";


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    current.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer";

            button.type =
                "button";


            button.textContent =
                answer[0];


            if (
                selectedAnswers[currentQuestion]
                === index
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.addEventListener(
                "click",
                () => {
                    selectAnswer(index);
                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );


    updateNavigation();

}


/* ===============================
   SELECT ANSWER
================================ */

function selectAnswer(answerIndex) {

    selectedAnswers[currentQuestion] =
        answerIndex;


    const buttons =
        answersContainer.querySelectorAll(
            ".answer"
        );


    buttons.forEach(
        (button, index) => {

            button.classList.toggle(
                "selected",
                index === answerIndex
            );

        }
    );


    updateNavigation();


    const questionAtSelection =
        currentQuestion;


    setTimeout(() => {

        if (
            currentQuestion === questionAtSelection &&
            selectedAnswers[questionAtSelection]
                === answerIndex &&
            currentQuestion <
                questions.length - 1
        ) {

            currentQuestion++;

            showQuestion();

        }

    }, 180);

}


/* ===============================
   NEXT QUESTION
================================ */

function goNext() {

    if (
        selectedAnswers[currentQuestion]
        === -1
    ) {

        return;

    }


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        if (allQuestionsAnswered()) {

            showResult();

        }

        return;

    }


    currentQuestion++;

    showQuestion();

}


/* ===============================
   BACK
================================ */

function goBack() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

}


/* ===============================
   ALL ANSWERED
================================ */

function allQuestionsAnswered() {

    return selectedAnswers.every(
        answer => answer !== -1
    );

}


/* ===============================
   NAVIGATION
================================ */

function updateNavigation() {

    const isFirst =
        currentQuestion === 0;


    const isLast =
        currentQuestion ===
        questions.length - 1;


    const currentAnswered =
        selectedAnswers[currentQuestion]
        !== -1;


    const allAnswered =
        allQuestionsAnswered();


    backButton.disabled =
        isFirst;


    if (isLast) {

        nextButton.classList.add(
            "hidden"
        );

        submitButton.classList.remove(
            "hidden"
        );


        submitButton.disabled =
            !allAnswered;


        submitButton.textContent =
            allAnswered
                ? "SUBMIT"
                : "Answer All Questions";

    }

    else {

        submitButton.classList.add(
            "hidden"
        );

        nextButton.classList.remove(
            "hidden"
        );


        nextButton.textContent =
            "Next →";


        nextButton.disabled =
            !currentAnswered;

    }

}


/* ===============================
   CALCULATE SCORE
================================ */

function calculateScore() {

    let totalScore = 0;


    selectedAnswers.forEach(
        (answerIndex, questionIndex) => {

            if (answerIndex !== -1) {

                totalScore +=
                    questions[questionIndex]
                        .answers[answerIndex][1];

            }

        }
    );


    return totalScore;

}


/* ===============================
   SHOW RESULT
================================ */

function showResult() {

    if (!allQuestionsAnswered()) {
        return;
    }


    score = calculateScore();


    const totalQuestions =
        questions.length;


    /*
        SURVIVAL CHOICE BREAKDOWN

        5 points     = strongest survival choices
        3–4 points   = strong survival choices
        1–2 points   = weaker survival choices
        0 points     = lowest-value survival choices

        None of these are considered "wrong".
        The categories simply show how the
        player's selected answers were scored.
    */

    const fivePointChoices =
        selectedAnswers.filter(
            (answerIndex, questionIndex) =>
                questions[questionIndex]
                    .answers[answerIndex][1] === 5
        ).length;


    const threeFourPointChoices =
        selectedAnswers.filter(
            (answerIndex, questionIndex) => {

                const points =
                    questions[questionIndex]
                        .answers[answerIndex][1];

                return points >= 3 && points <= 4;
            }
        ).length;


    const oneTwoPointChoices =
        selectedAnswers.filter(
            (answerIndex, questionIndex) => {

                const points =
                    questions[questionIndex]
                        .answers[answerIndex][1];

                return points >= 1 && points <= 2;
            }
        ).length;


    const zeroPointChoices =
        selectedAnswers.filter(
            (answerIndex, questionIndex) =>
                questions[questionIndex]
                    .answers[answerIndex][1] === 0
        ).length;


    /* =========================
       VISIBILITY
    ========================= */

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");


    if (suggestionsCard) {

        suggestionsCard.classList.remove(
            "hidden"
        );

    }


    /* =========================
       MAIN RESULT
    ========================= */

    document.getElementById(
        "final-score"
    ).textContent = score;


    /* =========================
       RESULT BREAKDOWN
    ========================= */

    document.getElementById(
        "five-point-count"
    ).textContent =
        fivePointChoices;


    document.getElementById(
        "three-four-count"
    ).textContent =
        threeFourPointChoices;


    document.getElementById(
        "one-two-count"
    ).textContent =
        oneTwoPointChoices;


    document.getElementById(
        "zero-point-count"
    ).textContent =
        zeroPointChoices;


    /* =========================
       RESULT LEVEL
    ========================= */

    let title;
    let description;
    let survival;
    let icon;


    if (score <= 20) {

        title =
            "☠️ Zombie Food";

        description =
            "You probably wouldn't make it very far. Your biggest enemy isn't necessarily the zombies — it's your decision-making.";

        survival =
            "Hours to a few days";

        icon =
            "☠️";

    }

    else if (score <= 45) {

        title =
            "🧟 Short-Term Survivor";

        description =
            "You might survive the initial chaos, but long-term survival would be difficult. Panic and poor preparation could eventually catch up with you.";

        survival =
            "Several days to a few weeks";

        icon =
            "🧟";

    }

    else if (score <= 70) {

        title =
            "🏃 Survivor";

        description =
            "You have a decent chance. You understand that surviving isn't just about fighting zombies. Food, water, shelter and information matter.";

        survival =
            "Several weeks to a few months";

        icon =
            "🏃";

    }

    else if (score <= 90) {

        title =
            "🔥 Apocalypse Survivor";

        description =
            "You're surprisingly difficult to kill. You plan ahead, avoid unnecessary risks and understand that other survivors can be dangerous.";

        survival =
            "Several months to several years";

        icon =
            "🔥";

    }

    else {

        title =
            "👑 The Last Human Alive";

        description =
            "You don't merely survive the apocalypse — you've basically turned it into a long-term project. You prepare before everyone else realizes there's a problem.";

        survival =
            "5+ years";

        icon =
            "👑";

    }


    document.getElementById(
        "result-title"
    ).textContent =
        title;


    document.getElementById(
        "result-description"
    ).textContent =
        description;


    document.getElementById(
        "survival-time"
    ).textContent =
        survival;


    document.getElementById(
        "result-icon"
    ).textContent =
        icon;


    progressBar.style.width =
        "100%";

}
/* ===============================
   RESTART
================================ */

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    selectedAnswers =
        new Array(questions.length).fill(-1);


    resultScreen.classList.add(
        "hidden"
    );


    quizScreen.classList.add(
        "hidden"
    );


    startScreen.classList.remove(
        "hidden"
    );


    homeInfo.classList.remove(
        "hidden"
    );


    if (suggestionsCard) {

        suggestionsCard.classList.add(
            "hidden"
        );

    }


    progressBar.style.width =
        "0%";

}


/* ===============================
   SHARE RESULT
================================ */

async function shareResult() {

    const title =
        document.getElementById(
            "result-title"
        ).textContent;


    const survival =
        document.getElementById(
            "survival-time"
        ).textContent;


    const finalScore =
        document.getElementById(
            "final-score"
        ).textContent;


    const quizUrl =
        "https://apocalypsequizzes.com/zombie-quiz/";


    const shareText =
        `🧟 I scored ${finalScore}/100 on the Zombie Apocalypse Survival Test!\n\n` +
        `${title}\n` +
        `Estimated survival: ${survival}\n\n` +
        `How long would YOU survive?`;


    const shareData = {

        title:
            "Zombie Apocalypse Survival Test",

        text:
            shareText,

        url:
            quizUrl

    };


    try {

        if (navigator.share) {

            await navigator.share(
                shareData
            );

        }

        else if (
            navigator.clipboard &&
            navigator.clipboard.writeText
        ) {

            await navigator.clipboard.writeText(
                shareText +
                "\n\n" +
                quizUrl
            );


            alert(
                "Your result has been copied! You can paste it anywhere."
            );

        }

        else {

            alert(
                shareText +
                "\n\n" +
                quizUrl
            );

        }

    }

    catch (error) {

        console.log(
            "Sharing cancelled."
        );

    }

}


/* ===============================
   GLOBAL SITE MENU
================================ */

const menuToggle =
    document.getElementById(
        "menu-toggle"
    );


const siteMenu =
    document.getElementById(
        "site-menu"
    );


if (
    menuToggle &&
    siteMenu
) {


    /* OPEN / CLOSE */

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            const isOpen =
                menuToggle.getAttribute(
                    "aria-expanded"
                ) === "true";


            siteMenu.hidden =
                isOpen;


            menuToggle.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Open navigation"
                    : "Close navigation"
            );

        }
    );


    /* CLOSE OUTSIDE */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !siteMenu.hidden &&
                !siteMenu.contains(
                    event.target
                ) &&
                !menuToggle.contains(
                    event.target
                )
            ) {

                siteMenu.hidden =
                    true;


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        }
    );


    /* CLOSE AFTER LINK */

    siteMenu
        .querySelectorAll("a")
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        siteMenu.hidden =
                            true;


                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        menuToggle.setAttribute(
                            "aria-label",
                            "Open navigation"
                        );

                    }
                );

            }
        );

}