const questions = [

    {
        question: "What is the name of the underground facility where the T-virus outbreak occurs?",
        answers: [
            ["The Hive", 2],
            ["The Colony", 0],
            ["The Nest", 0],
            ["The Ark", 0]
        ]
    },

    {
        question: "In Resident Evil: Extinction, where does Alice first encounter Carlos Oliveira and the survivors traveling across the desert?",
        answers: [
            ["Texas", 0],
            ["Nevada", 2],
            ["California", 0],
            ["Arizona", 0]
        ]
    },

    {
        question: "Which Resident Evil movie character is transformed into the Nemesis after being captured and experimented on by Umbrella?",
        answers: [
            ["L.J.", 0],
            ["Michael Corvin", 0],
            ["Carlos Oliveira", 0],
            ["Matt Addison", 2]
        ]
    },

    {
        question: "In Resident Evil: Apocalypse, what special ability does Alice demonstrate after her exposure to the T-virus?",
        answers: [
            ["Enhanced strength and speed", 2],
            ["The ability to become invisible", 0],
            ["Telepathic control of infected creatures", 0],
            ["The ability to reverse the infection by touch", 0]
        ]
    },

    {
        question: "In Resident Evil (2002), what happens to Rain Ocampo after she is bitten by a Licker?",
        answers: [
            ["She is cured by the Red Queen", 0],
            ["She escapes the Hive completely healthy", 0],
            ["She dies before becoming fully infected", 2],
            ["She becomes a fully transformed Licker", 0]
        ]
    },

    {
        question: "Who released the T-virus in the Hive, causing the outbreak in Resident Evil (2002)?",
        answers: [
            ["Dr. James Marcus", 0],
            ["Spence Parks", 2],
            ["Albert Wesker", 0],
            ["Dr. Alexander Isaacs", 0]
        ]
    },

    {
        question: "How many different human test subjects were initially used by Umbrella for its testing program?",
        answers: [
            ["25", 0],
            ["50", 2],
            ["75", 0],
            ["100", 0]
        ]
    },

    {
        question: "Who was Albert Wesker in the Resident Evil movie series?",
        answers: [
            ["A former Umbrella executive who later opposed the corporation", 2],
            ["A S.T.A.R.S. officer who became infected with the T-virus", 0],
            ["A scientist who created the Red Queen", 0],
            ["A U.B.C.S. mercenary who worked with Carlos", 0]
        ]
    },

    {
        question: "Who created the T-virus in the Resident Evil movie series?",
        answers: [
            ["Dr. Charles Ashford", 0],
            ["Dr. James Marcus", 2],
            ["Dr. Alexander Isaacs", 0],
            ["Albert Wesker", 0]
        ]
    },

    {
        question: "What genetic disease did Alicia Marcus suffer from?",
        answers: [
            ["Progeria", 2],
            ["Huntington's disease", 0],
            ["Alzheimer's disease", 0],
            ["Muscular dystrophy", 0]
        ]
    },

    {
        question: "What was the relationship between Alicia Marcus and Alice?",
        answers: [
            ["They were biological sisters", 0],
            ["Alice was a clone created from Alicia Marcus", 2],
            ["Alicia was Alice's mother", 0],
            ["They were unrelated and only looked alike", 0]
        ]
    },

    {
        question: "Who created the Red Queen artificial intelligence?",
        answers: [
            ["Dr. James Marcus", 2],
            ["Dr. Alexander Isaacs", 0],
            ["Albert Wesker", 0],
            ["Dr. Charles Ashford", 0]
        ]
    },

    {
        question: "In Resident Evil (2002), what was Spence Parks's real reason for stealing the T-virus from the Hive?",
        answers: [
            ["He intended to sell it on the black market", 2],
            ["He wanted to destroy Umbrella's research", 0],
            ["He was secretly working for S.T.A.R.S.", 0],
            ["He was trying to develop a cure for Alice", 0]
        ]
    },

    {
        question: "How many movies are there in the original live-action Resident Evil film series starring Milla Jovovich as Alice?",
        answers: [
            ["5", 0],
            ["6", 2],
            ["7", 0],
            ["8", 0]
        ]
    },

    {
        question: "Which actor appeared in all six movies of the original live-action Resident Evil film series?",
        answers: [
            ["Milla Jovovich", 2],
            ["Ali Larter", 0],
            ["Iain Glen", 0],
            ["Wentworth Miller", 0]
        ]
    },

    {
        question: "What are the mutated dogs called in the Resident Evil movies?",
        answers: [
            ["Cerberus", 2],
            ["Lickers", 0],
            ["Hellhounds", 0],
            ["Dobermans", 0]
        ]
    },

    {
        question: "In Resident Evil: Apocalypse (2004), who injects Alice with the T-virus, transforming her into a powerful bio-weapon?",
        answers: [
            ["Dr. Alexander Isaacs", 0],
            ["Major Cain", 2],
            ["Dr. Charles Ashford", 0],
            ["Albert Wesker", 0]
        ]
    },

    {
        question: "What is the name of the rogue artificial intelligence that controls the Hive facility in the original Resident Evil (2002) movie?",
        answers: [
            ["The White Queen", 0],
            ["The Red Queen", 2],
            ["The Black Queen", 0],
            ["The Umbrella AI", 0]
        ]
    },

    {
        question: "Initially, Alice was an employee of the Umbrella Corporation, working in which role?",
        answers: [
            ["Lead scientist researching the T-virus", 0],
            ["Security operative guarding the entrance to the Hive", 2],
            ["U.B.C.S. mercenary", 0],
            ["Corporate executive overseeing Umbrella's bioweapons program", 0]
        ]
    },

    {
        question: "How did Alice lose her memory in the first Resident Evil (2002) movie?",
        answers: [
            ["The Red Queen erased her memories", 0],
            ["She was exposed to the T-virus", 0],
            ["She suffered a head injury after being knocked unconscious by Spence", 2],
            ["Umbrella deliberately erased her memories", 0]
        ]
    },

    {
        question: "What is the name of Claire Redfield's brother in the Resident Evil movie series?",
        answers: [
            ["Chris Redfield", 2],
            ["Carlos Redfield", 0],
            ["Leon Redfield", 0],
            ["Michael Redfield", 0]
        ]
    },

    {
        question: "What is Arcadia in the Resident Evil movie series?",
        answers: [
            ["A safe island", 0],
            ["A secured location in Alaska", 0],
            ["A ship", 2],
            ["A small safe city", 0]
        ]
    },

    {
        question: "What is written inside Alice's wedding band in Resident Evil (2002)?",
        answers: [
            ["Alice & Spence", 0],
            ["Property of Umbrella Corp.", 2],
            ["The Future Is Ours", 0],
            ["Umbrella Security Division", 0]
        ]
    },

    {
        question: "What does S.T.A.R.S. stand for in the Resident Evil movie series?",
        answers: [
            ["Special Tactics and Rescue Squad", 0],
            ["Special Tactics and Rescue Service", 2],
            ["Strategic Tactical Assault and Rescue Squad", 0],
            ["Special Threat Assessment and Response Service", 0]
        ]
    },

    {
        question: "What is the name of Alice's daughter in Resident Evil: Retribution?",
        answers: [
            ["Becky", 2],
            ["Angela", 0],
            ["Alicia", 0],
            ["Amy", 0]
        ]
    }

];


// =====================================================
// QUIZ STATE
// =====================================================

let currentQuestion = 0;

let selectedAnswers =
    new Array(questions.length).fill(null);


// =====================================================
// ELEMENTS
// =====================================================

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


// =====================================================
// BUTTON EVENTS
// =====================================================

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


// =====================================================
// START QUIZ
// =====================================================

function startQuiz() {

    currentQuestion = 0;

    selectedAnswers =
        new Array(questions.length).fill(null);


    startScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    homeInfo.classList.add("hidden");

    suggestionsCard.classList.add("hidden");


    progressBar.style.width = "0%";


    showQuestion();

}


// =====================================================
// SHOW QUESTION
// =====================================================

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
                selectedAnswers[currentQuestion] === index
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.addEventListener(
                "click",
                function () {

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


// =====================================================
// SELECT ANSWER
// =====================================================

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


    const selectedQuestion =
        currentQuestion;


    setTimeout(
        function () {

            if (
                currentQuestion === selectedQuestion &&
                selectedAnswers[selectedQuestion] === answerIndex &&
                currentQuestion < questions.length - 1
            ) {

                currentQuestion++;

                showQuestion();

            }

        },
        300
    );

}


// =====================================================
// NEXT
// =====================================================

function goNext() {

    if (
        selectedAnswers[currentQuestion] === null
    ) {

        return;

    }


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        if (
            selectedAnswers.every(
                answer => answer !== null
            )
        ) {

            showResult();

        }

        return;

    }


    currentQuestion++;

    showQuestion();

}


// =====================================================
// BACK
// =====================================================

function goBack() {

    if (
        currentQuestion <= 0
    ) {

        return;

    }


    currentQuestion--;

    showQuestion();

}


// =====================================================
// NAVIGATION
// =====================================================

function updateNavigation() {

    const isFirst =
        currentQuestion === 0;


    const isLast =
        currentQuestion ===
        questions.length - 1;


    const currentAnswered =
        selectedAnswers[currentQuestion] !== null;


    const allAnswered =
        selectedAnswers.every(
            answer => answer !== null
        );


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

    } else {

        nextButton.classList.remove(
            "hidden"
        );

        submitButton.classList.add(
            "hidden"
        );


        nextButton.textContent =
            "Next →";


        nextButton.disabled =
            !currentAnswered;

    }

}


// =====================================================
// CALCULATE SCORE
// =====================================================

function calculateScore() {

    let points = 0;

    let correctAnswers = 0;


    selectedAnswers.forEach(
        (answerIndex, questionIndex) => {

            if (
                answerIndex === null
            ) {

                return;

            }


            const answer =
                questions[questionIndex]
                    .answers[answerIndex];


            if (
                answer[1] === 2
            ) {

                correctAnswers++;

                points += 2;

            }

        }
    );


    return {
        points,
        correctAnswers
    };

}


// =====================================================
// SHOW RESULT
// =====================================================

function showResult() {

    const scoreData =
        calculateScore();


    const points =
        scoreData.points;


    const correctAnswers =
        scoreData.correctAnswers;


    const totalQuestions =
        questions.length;


    const incorrectAnswers =
        totalQuestions - correctAnswers;


    const accuracy =
        Math.round(
            (correctAnswers / totalQuestions) * 100
        );


    quizScreen.classList.add(
        "hidden"
    );


    resultScreen.classList.remove(
        "hidden"
    );


    homeInfo.classList.remove(
        "hidden"
    );


    suggestionsCard.classList.remove(
        "hidden"
    );


    document.getElementById(
        "final-score"
    ).textContent =
        `${points}/50`;


    document.getElementById(
        "correct-count"
    ).textContent =
        correctAnswers;


    document.getElementById(
        "incorrect-count"
    ).textContent =
        incorrectAnswers;


    document.getElementById(
        "total-count"
    ).textContent =
        totalQuestions;


    document.getElementById(
        "accuracy-percent"
    ).textContent =
        `${accuracy}%`;


    let title;

    let description;

    let knowledge;

    let icon;


    // =================================================
    // RESULT LEVELS
    // =================================================

    if (points <= 10) {

        title =
            "🧟 Zombie-Level Knowledge";


        description =
            "The T-virus has definitely infected your memory. You may need another trip through the Resident Evil movies.";


        knowledge =
            "Casual Viewer";


        icon =
            "🧟";


    } else if (points <= 20) {

        title =
            "🏚️ Raccoon City Survivor";


        description =
            "You've seen the movies and remember the major events, but plenty of Umbrella secrets still escaped you.";


        knowledge =
            "Casual Fan";


        icon =
            "🏚️";


    } else if (points <= 30) {

        title =
            "🔥 Umbrella Survivor";


        description =
            "You know Alice, Umbrella and the major events of the series, but some of the deeper movie trivia caught you out.";


        knowledge =
            "Good Fan";


        icon =
            "🔥";


    } else if (points <= 40) {

        title =
            "⚔️ Biohazard Expert";


        description =
            "Impressive. You remember a lot of characters, creatures, locations and obscure details from the Resident Evil movies.";


        knowledge =
            "Dedicated Fan";


        icon =
            "⚔️";


    } else if (points <= 48) {

        title =
            "👑 Umbrella Elite";


        description =
            "Excellent knowledge. You remember details that many Resident Evil fans would have forgotten.";


        knowledge =
            "Expert Fan";


        icon =
            "👑";


    } else {

        title =
            "🧠 Resident Evil Encyclopedia";


        description =
            "You don't just remember the movies — you remember the tiny details. Even Umbrella would have trouble hiding anything from you.";


        knowledge =
            "Ultimate Fan";


        icon =
            "🧠";

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
        "knowledge-level"
    ).textContent =
        knowledge;


    document.getElementById(
        "result-icon"
    ).textContent =
        icon;


    progressBar.style.width =
        "100%";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =====================================================
// RESTART QUIZ
// =====================================================

function restartQuiz() {

    currentQuestion = 0;


    selectedAnswers =
        new Array(questions.length).fill(null);


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


    suggestionsCard.classList.add(
        "hidden"
    );


    progressBar.style.width =
        "0%";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =====================================================
// SHARE RESULT
// =====================================================

async function shareResult() {

    const title =
        document.getElementById(
            "result-title"
        ).textContent;


    const knowledge =
        document.getElementById(
            "knowledge-level"
        ).textContent;


    const finalScore =
        document.getElementById(
            "final-score"
        ).textContent;


    const quizUrl =
        "https://apocalypsequizzes.com/resident-evil-quiz/";


    const shareText =
        `🧟 I scored ${finalScore} on the Resident Evil Movie Quiz!\n\n` +
        `${title}\n` +
        `Knowledge level: ${knowledge}\n\n` +
        `How well do YOU know the Resident Evil movies?`;


    const shareData = {

        title:
            "Resident Evil Movie Quiz",

        text:
            shareText,

        url:
            quizUrl

    };


    try {

        if (
            navigator.share
        ) {

            await navigator.share(
                shareData
            );

        } else {

            await navigator.clipboard.writeText(
                shareText +
                "\n\n" +
                quizUrl
            );


            alert(
                "Your result has been copied! You can paste it anywhere."
            );

        }

    } catch (error) {

        console.log(
            "Sharing cancelled."
        );

    }

}


// =====================================================
// GLOBAL SITE MENU
// =====================================================

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


    // =================================================
    // OPEN / CLOSE WITH HAMBURGER
    // =================================================

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


    // =================================================
    // CLOSE WHEN CLICKING OUTSIDE
    // =================================================

    document.addEventListener(
        "click",
        function (event) {

            if (
                !siteMenu.hidden &&
                !siteMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
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


    // =================================================
    // CLOSE AFTER CLICKING A MENU LINK
    // =================================================

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