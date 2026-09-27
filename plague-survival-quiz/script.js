const questions = [

    // =========================================================
    // 1
    // =========================================================

    {
        question: "What is the primary defence against infection during a plague outbreak?",
        answers: [
            ["Wear a face mask", 5, null],
            ["Carry a firearm", 0, null],
            ["Take antibiotics", 3, null],
            ["Exercise regularly", 1, null]
        ]
    },


    // =========================================================
    // 2
    // =========================================================

    {
        question: "A person is coughing and approaches you for help during a plague outbreak. What do you do?",
        answers: [
            ["Help them directly", 2, 5],
            ["Keep distance and offer safe help", 5, 3],
            ["Tell them to leave", 3, 0],
            ["Walk away immediately", 3, 1]
        ]
    },


    // =========================================================
    // 3
    // =========================================================

    {
        question: "A close friend is critically ill, coughing blood and in severe pain. They beg you to end their suffering. What do you do?",
        answers: [
            ["Honor their request", 2, 5],
            ["Stay beside them", 0, 4],
            ["Continue medical treatment", 5, 3],
            ["Leave to avoid infection", 3, 0]
        ]
    },


    // =========================================================
    // 4
    // =========================================================

    {
        question: "You are in an infected area with your 6-year-old daughter, who is infected. Treatment is available in a nearby safe zone. What do you do?",
        answers: [
            ["Take her to the safe zone", 0, 5],
            ["Stay where you are", 2, 2],
            ["Contact authorities first", 2, 3],
            ["Send someone else", 0, 0]
        ]
    },


    // =========================================================
    // 5
    // =========================================================

    {
        question: "A family member dies during the plague outbreak. What do you do with the body?",
        answers: [
            ["Bury them respectfully", 3, 5],
            ["Cremate them safely", 5, 4],
            ["Leave and evacuate", 0, 0],
            ["Follow official guidance", 5, 3]
        ]
    },


    // =========================================================
    // 6
    // =========================================================

    {
        question: "You are a doctor who appears immune to the plague, but your family is not. The city is collapsing and you can leave. What do you do?",
        answers: [
            ["Leave with your family", 4, 3],
            ["Stay and treat patients", 3, 5],
            ["Isolate from your family but continue working", 5, 4],
            ["Leave alone and survive", 2, 0]
        ]
    },


    // =========================================================
    // 7
    // =========================================================

    {
        question: "You live in a village with your family. People fleeing an infected city arrive asking for shelter. What do you do?",
        answers: [
            ["Let them stay", 0, 5],
            ["Refuse them entry", 4, 0],
            ["Give supplies and send them on", 5, 4],
            ["Force them to leave", 2, 0]
        ]
    },


    // =========================================================
    // 8
    // =========================================================

    {
        question: "What was the primary biological vector responsible for spreading the Black Death across Europe?",
        answers: [
            ["Migratory birds", 1, null],
            ["Fleas living on rats", 5, null],
            ["Contaminated water", 3, null],
            ["Mosquitoes", 1, null]
        ]
    },


    // =========================================================
    // 9
    // =========================================================

    {
        question: "What does \"mortality rate\" mean?",
        answers: [
            ["Percentage who recover", 0, null],
            ["Percentage who die", 5, null],
            ["Rate of disease spread", 0, null],
            ["Number who become infected", 0, null]
        ]
    },


    // =========================================================
    // 10
    // =========================================================

    {
        question: "What does a disease's R₀ (R-naught) measure?",
        answers: [
            ["Average infections caused by one case", 5, null],
            ["Average incubation period", 0, null],
            ["Percentage becoming severely ill", 0, null],
            ["Percentage resulting in death", 0, null]
        ]
    },


    // =========================================================
    // 11
    // =========================================================

    {
        question: "There are reports of a disease spreading in your city. What do you do?",
        answers: [
            ["Go to work normally", 1, null],
            ["Leave the city", 3, null],
            ["Attend the baseball game", 0, null],
            ["Stay home and limit contact", 5, null]
        ]
    },


    // =========================================================
    // 12
    // =========================================================

    {
        question: "A town quarantine center has been set up at a local high school. You start feeling slightly unwell. What do you do?",
        answers: [
            ["Go to the quarantine center", 2, 5],
            ["Continue your usual routine", 1, 0],
            ["Stay home and monitor symptoms", 5, 4],
            ["Go to work for now", 0, 0]
        ]
    },


    // =========================================================
    // 13
    // =========================================================

    {
        question: "A disease is spreading in your city, and people are beginning to hoard food. What do you do?",
        answers: [
            ["Buy as much as possible", 2, 1],
            ["Buy enough for one week", 5, 4],
            ["Wait and monitor events", 4, 3],
            ["Take abandoned supplies", 1, 0]
        ]
    },


    // =========================================================
    // 14
    // =========================================================

    {
        question: "You find expensive clothes that may have belonged to someone who died from the disease. What do you do?",
        answers: [
            ["Wear them immediately — you only live once", 0, 0],
            ["Wash them before using them", 1, 3],
            ["Leave them untouched", 5, 5],
            ["Burn them as a precaution", 2, 2]
        ]
    },


    // =========================================================
    // 15
    // =========================================================

    {
        question: "After 30 days of an outbreak, you haven't bathed in a week. You saw a dead body floating in a river two days ago. What do you do?",
        answers: [
            ["Bathe there since it's gone", 0, 0],
            ["Avoid the river for now", 5, 5],
            ["Boil water before bathing", 2, 3],
            ["Wait several more days", 0, 0]
        ]
    },


    // =========================================================
    // 16
    // =========================================================

    {
        question: "A sick family member must use the household's only bathroom. What reduces transmission?",
        answers: [
            ["Stop bathroom use", 1, 1],
            ["Everyone uses it together", 0, 0],
            ["Clean it properly and limit contact", 5, 5],
            ["Rely on natural immunity", 1, 0]
        ]
    },


    // =========================================================
    // 17
    // =========================================================

    {
        question: "Your main well is contaminated, but a cleaner source provides only half your needs. What is best?",
        answers: [
            ["Use only the well", 0, 0],
            ["Reduce sanitation standards", 0, 0],
            ["Use the cleaner source and treat the rest", 5, 5],
            ["Mix both sources untreated", 0, 0]
        ]
    },


    // =========================================================
    // 18
    // =========================================================

    {
        question: "A severe emergency requires a hospital in an outbreak zone. What determines whether to travel?",
        answers: [
            ["Distance alone", 2, null],
            ["Medical urgency versus exposure risk", 5, null],
            ["Whether the patient is unconscious", 3, null],
            ["Avoid hospitals entirely", 1, null]
        ]
    },


    // =========================================================
    // 19
    // =========================================================

    {
        question: "Leaders want power to restrict movement whenever they suspect an outbreak. What makes such authority safer?",
        answers: [
            ["Unlimited authority", 1, 0],
            ["Unanimous public approval", 2, 5],
            ["Clear triggers, limits, and review", 5, 4],
            ["Separate rules for each neighborhood", 3, 2]
        ]
    },


    // =========================================================
    // 20
    // =========================================================

    {
        question: "You find a sealed backpack outside an abandoned house. It contains food, medicine, and personal items, but you don't know who left it. What do you do?",
        answers: [
            ["Take everything immediately", 2, 0],
            ["Leave it where it is", 3, 0],
            ["Inspect it cautiously before deciding", 5, 0],
            ["Burn the entire bag", 1, 0]
        ]
    },


    // =========================================================
    // 21
    // =========================================================

    {
        question: "You need fuel, but the only open station has a long crowd and there may be infected people in it. What do you do?",
        answers: [
            ["Join the queue", 2, 0],
            ["Leave and find another source", 5, 0],
            ["Push ahead before fuel runs out", 1, 0],
            ["Wait nearby for the crowd to disappear", 3, 0]
        ]
    },


    // =========================================================
    // 22
    // =========================================================

    {
        question: "Your elderly neighbor knocks on your door asking to stay with your family because they can no longer care for themselves. Your supplies are limited. What do you do?",
        answers: [
            ["Take them in", 3, 5],
            ["Refuse them", 4, 0],
            ["Give them supplies and send them away", 4, 2],
            ["Ask another household to help", 5, 1]
        ]
    },


    // =========================================================
    // 23
    // =========================================================

    {
        question: "While travelling, you find a frightened child alone beside an abandoned vehicle. You don't know where their parents are. What do you do?",
        answers: [
            ["Take the child with you", 4, 5],
            ["Search for their family", 3, 3],
            ["Leave them because travel is risky", 2, 0],
            ["Contact the nearest authority or safe group", 5, 2]
        ]
    },


    // =========================================================
    // 24
    // =========================================================

    {
        question: "A supermarket appears abandoned, but you hear movement inside. You need food. What do you do?",
        answers: [
            ["Enter immediately", 1, 1],
            ["Avoid the building", 4, 3],
            ["Call out before approaching further", 5, 5],
            ["Enter through a rear door", 2, 2]
        ]
    },


    // =========================================================
    // 25
    // =========================================================

    {
        question: "Your settlement discovers that someone has been secretly taking extra food from communal stores. What do you do?",
        answers: [
            ["Punish them immediately", 2, 1],
            ["Ignore it to avoid conflict", 1, 3],
            ["Investigate and address the shortage fairly", 5, 5],
            ["Remove communal food access completely", 3, 1]
        ]
    },


    // =========================================================
    // 26
    // =========================================================

    {
        question: "Your settlement has one remaining dose of a critical medicine. Two people need it: one is a close friend, while the other has a better chance of surviving with treatment. What do you do?",
        answers: [
            ["Give it to your friend", 3, 2],
            ["Give it to the other patient", 5, 5],
            ["Let both families decide", 3, 2],
            ["Choose randomly", 2, 2]
        ]
    },


    // =========================================================
    // 27
    // =========================================================

    {
        question: "Your vehicle has one remaining seat during an evacuation. A stranger with a young child asks for it, but one of your friends is also waiting. What do you do?",
        answers: [
            ["Give it to your friend", 3, 2],
            ["Give it to the parent and child", 4, 5],
            ["Decide based on who arrived first", 3, 3],
            ["Refuse both and leave", 0, 0]
        ]
    },


    // =========================================================
    // 28
    // =========================================================

    {
        question: "A group arrives at your settlement after travelling from an infected city. They appear healthy but have nowhere else to go. Letting them in could increase risk; refusing them could leave them exposed. What do you do?",
        answers: [
            ["Admit them immediately", 1, 5],
            ["Refuse entry completely", 3, 0],
            ["Create a controlled screening/quarantine arrangement", 5, 3],
            ["Give them supplies and send them away", 4, 2]
        ]
    },


    // =========================================================
    // 29
    // =========================================================

    {
        question: "A storm is approaching. You find a small shelter that can safely hold only four people. You are already with three others when a stranger arrives. He may be infected or maybe not.",
        answers: [
            ["Let them in", 2, 5],
            ["Leave the shelter", 1, 3],
            ["Give them supplies instead", 4, 2],
            ["Keep the shelter for your group", 5, 1]
        ]
    },


    // =========================================================
    // 30
    // =========================================================

    {
        question: "You discover that a hungry parent has been secretly taking food from your settlement's stores to feed their children.",
        answers: [
            ["Report them", 3, 2],
            ["Forgive them", 2, 5],
            ["Give them a separate food allowance", 5, 5],
            ["Demand the food back", 2, 1]
        ]
    },


    // =========================================================
    // 31
    // =========================================================

    {
        question: "You find an apparently abandoned house containing food, medicine, and family photographs. There are no signs of infection.",
        answers: [
            ["Take everything", 2, 0],
            ["Take only essential supplies", 5, 3],
            ["Leave everything", 3, 5],
            ["Wait for the owner", 4, 4]
        ]
    },


    // =========================================================
    // 32
    // =========================================================

    {
        question: "A child disappears inside your settlement during an outbreak. Searching may require several people to enter crowded areas.",
        answers: [
            ["Search immediately", 4, 5],
            ["Wait until morning", 2, 1],
            ["Send one person", 3, 4],
            ["Ask nearby households to search", 5, 3]
        ]
    },


    // =========================================================
    // 33
    // =========================================================

    {
        question: "A family member returns after months away. They want to immediately reunite with everyone.",
        answers: [
            ["Welcome them normally", 0, 5],
            ["Quarantine them initially", 5, 3],
            ["Refuse them entry", 2, 1],
            ["Meet them outside only", 3, 2]
        ]
    },


    // =========================================================
    // 34
    // =========================================================

    {
        question: "Your settlement leader introduces unpopular restrictions based on credible health information. Residents demand that the rules be removed.",
        answers: [
            ["Remove them immediately", 2, 3],
            ["Keep them without explanation", 3, 1],
            ["Explain the evidence and review them", 5, 5],
            ["Let each household decide", 2, 4]
        ]
    },


    // =========================================================
    // 35
    // =========================================================

    {
        question: "A highly skilled engineer arrives seeking shelter. They could dramatically improve your settlement, but they come from an area with active infections.",
        answers: [
            ["Admit them immediately", 0, 5],
            ["Refuse them", 3, 0],
            ["Quarantine and assess them first", 5, 3],
            ["Give them supplies and send them away", 3, 2]
        ]
    },


    // =========================================================
    // 36
    // =========================================================

    {
        question: "A valuable tool was used inside an isolation area and is now needed elsewhere.",
        answers: [
            ["Use it immediately", 1, 0],
            ["Clean it appropriately first", 5, 0],
            ["Throw it away", 3, 0],
            ["Give it to the isolation team", 3, 0]
        ]
    },


    // =========================================================
    // 37
    // =========================================================

    {
        question: "Your settlement votes on whether to admit a group of 10 healthy-looking newcomers. Your own family opposes admitting them because supplies are already tight.",
        answers: [
            ["Vote against them", 3, 3],
            ["Vote for them", 3, 5],
            ["Abstain", 2, 2],
            ["Support temporary admission with conditions", 5, 4]
        ]
    },


    // =========================================================
    // 38
    // =========================================================

    {
        question: "People are leaving the city after an outbreak begins. What is the safest choice?",
        answers: [
            ["Stay in the city and wait", 3, null],
            ["Follow the crowded highway", 1, null],
            ["Take backroads and avoid crowds", 5, null],
            ["Leave with the largest group", 2, null]
        ]
    },


    // =========================================================
    // 39
    // =========================================================

    {
        question: "An outbreak is spreading, and you need to choose where to stay. Which is the best option?",
        answers: [
            ["Stay in the city", 1, null],
            ["Enter a crowded quarantine shelter", 2, null],
            ["Move to a remote mountain area", 5, null],
            ["Stay in an abandoned house in town", 3, null]
        ]
    },


    // =========================================================
    // 40
    // =========================================================

    {
        question: "Someone arrives at your home claiming their family needs water. You don't know whether they are infected. What do you do?",
        answers: [
            ["Let them inside", 1, 3],
            ["Give water from a safe distance", 5, 5],
            ["Refuse to speak to them", 3, 0],
            ["Invite them to stay overnight", 0, 3]
        ]
    }

];


// =========================================================
// QUIZ STATE
// =========================================================

let currentQuestion = 0;

let survivalScore = 0;
let moralityScore = 0;

let selectedAnswers =
    new Array(questions.length).fill(-1);


// =========================================================
// ELEMENTS
// =========================================================

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


// =========================================================
// SCORE LIMITS
// =========================================================

/*
    Survival maximum:

    Every question has a maximum possible survival
    value of 5.

    40 questions × 5 = 200.
*/

const MAX_SURVIVAL_SCORE =
    questions.length * 5;


/*
    Morality maximum is calculated from the questions
    that actually contain morality scoring.

    Questions using null do not contribute.
*/

const MAX_MORALITY_SCORE =
    questions.reduce(
        (total, question) => {

            const hasMorality =
                question.answers.some(
                    answer =>
                        answer[2] !== null &&
                        answer[2] !== undefined
                );

            return total +
                (hasMorality ? 5 : 0);

        },
        0
    );


// =========================================================
// EVENTS
// =========================================================

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
    previousQuestion
);

nextButton.addEventListener(
    "click",
    nextQuestion
);

submitButton.addEventListener(
    "click",
    submitQuiz
);


// =========================================================
// START QUIZ
// =========================================================

function startQuiz() {

    currentQuestion = 0;

    survivalScore = 0;

    moralityScore = 0;

    selectedAnswers =
        new Array(
            questions.length
        ).fill(-1);


    startScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.remove(
        "hidden"
    );

    homeInfo.classList.add(
        "hidden"
    );


    // Suggestions should not be visible
    // while taking the quiz.

    if (suggestionsCard) {

        suggestionsCard.classList.add(
            "hidden"
        );

    }


    showQuestion();

}


// =========================================================
// SHOW QUESTION
// =========================================================

function showQuestion() {

    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        `Decision ${currentQuestion + 1} of ${questions.length}`;


    questionText.textContent =
        current.question;


    answersContainer.innerHTML = "";


    // =====================================================
    // PROGRESS
    // =====================================================

    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    // =====================================================
    // ANSWERS
    // =====================================================

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


            // Restore previous selection.

            if (
                selectedAnswers[currentQuestion] ===
                index
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


// =========================================================
// SELECT ANSWER
// =========================================================

function selectAnswer(answerIndex) {

    selectedAnswers[currentQuestion] =
        answerIndex;


    // Highlight selected answer.

    const answerButtons =
        answersContainer.querySelectorAll(
            ".answer"
        );


    answerButtons.forEach(
        (button, index) => {

            button.classList.toggle(
                "selected",
                index === answerIndex
            );

        }
    );


    updateNavigation();


    // Remember which question was selected
    // before automatic movement.

    const questionAtSelection =
        currentQuestion;


    // =====================================================
    // AUTOMATIC ADVANCE
    // =====================================================

    setTimeout(
        () => {

            if (
                currentQuestion ===
                questionAtSelection &&

                selectedAnswers[
                    questionAtSelection
                ] === answerIndex &&

                currentQuestion <
                questions.length - 1
            ) {

                currentQuestion++;

                showQuestion();

            }

        },
        180
    );

}


// =========================================================
// NEXT QUESTION
// =========================================================

function nextQuestion() {

    // Do not advance without an answer.

    if (
        selectedAnswers[currentQuestion] === -1
    ) {

        return;

    }


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        if (
            allQuestionsAnswered()
        ) {

            submitQuiz();

        }

        return;

    }


    currentQuestion++;

    showQuestion();

}


// =========================================================
// PREVIOUS QUESTION
// =========================================================

function previousQuestion() {

    if (
        currentQuestion > 0
    ) {

        currentQuestion--;

        showQuestion();

    }

}


// =========================================================
// CHECK ALL ANSWERS
// =========================================================

function allQuestionsAnswered() {

    return selectedAnswers.every(
        answer =>
            answer !== -1
    );

}


// =========================================================
// UPDATE NAVIGATION
// =========================================================

function updateNavigation() {

    const isFirst =
        currentQuestion === 0;

    const isLast =
        currentQuestion ===
        questions.length - 1;

    const currentAnswered =
        selectedAnswers[currentQuestion] !== -1;

    const allAnswered =
        allQuestionsAnswered();


    // =====================================================
    // BACK
    // =====================================================

    if (isFirst) {

        backButton.classList.add(
            "hidden"
        );

    } else {

        backButton.classList.remove(
            "hidden"
        );

    }


    // =====================================================
    // LAST QUESTION
    // =====================================================

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
                : "ANSWER ALL QUESTIONS";

    }


    // =====================================================
    // NORMAL QUESTIONS
    // =====================================================

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


// =========================================================
// SUBMIT QUIZ
// =========================================================

function submitQuiz() {

    if (
        !allQuestionsAnswered()
    ) {

        return;

    }


    survivalScore = 0;

    moralityScore = 0;


    selectedAnswers.forEach(
        (answerIndex, questionIndex) => {

            const answer =
                questions[
                    questionIndex
                ].answers[
                    answerIndex
                ];


            // =============================================
            // SURVIVAL
            // =============================================

            survivalScore +=
                Number(answer[1]) || 0;


            // =============================================
            // MORALITY
            // =============================================

            if (
                answer[2] !== null &&
                answer[2] !== undefined
            ) {

                moralityScore +=
                    Number(answer[2]) || 0;

            }

        }
    );


    showResult();

}


// =========================================================
// CALCULATE PERCENTAGE
// =========================================================

function calculatePercentage(
    score,
    maximum
) {

    if (
        !maximum ||
        maximum <= 0
    ) {

        return 0;

    }


    return Math.max(
        0,
        Math.min(
            100,
            Math.round(
                (score / maximum) * 100
            )
        )
    );

}


// =========================================================
// SHOW RESULT
// =========================================================

function showResult() {

    homeInfo.classList.remove(
        "hidden"
    );

    quizScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );


    // =====================================================
    // SUGGESTED QUIZZES
    // =====================================================

    // The suggestions card now sits outside
    // the result screen, so it must be shown separately.

    if (suggestionsCard) {

        suggestionsCard.classList.remove(
            "hidden"
        );

    }


    // =====================================================
    // SURVIVAL
    // =====================================================

    const survivalPercentage =
        calculatePercentage(
            survivalScore,
            MAX_SURVIVAL_SCORE
        );


    // =====================================================
    // MORALITY
    // =====================================================

    const moralityPercentage =
        calculatePercentage(
            moralityScore,
            MAX_MORALITY_SCORE
        );


    document.getElementById(
        "final-score"
    ).textContent =
        survivalPercentage;


    document.getElementById(
        "morality-score"
    ).textContent =
        moralityPercentage + "%";


    // =====================================================
    // SURVIVAL RESULT
    // =====================================================

    let title;
    let description;
    let survival;
    let icon;


    if (
        survivalPercentage <= 20
    ) {

        title =
            "Extremely Vulnerable";

        description =
            "Your decisions leave you highly exposed to infection, resource shortages, and dangerous situations. You would struggle to survive the early stages of a major outbreak.";

        survival =
            "Hours to a few days";

        icon =
            "☠️";


    } else if (
        survivalPercentage <= 45
    ) {

        title =
            "Short-Term Survivor";

        description =
            "You could make it through some of the initial chaos, but weaknesses in preparation, risk management, or resource decisions could become serious problems.";

        survival =
            "Several days to a few weeks";

        icon =
            "🦠";


    } else if (
        survivalPercentage <= 70
    ) {

        title =
            "Survivor";

        description =
            "You have a reasonable chance of making it through a prolonged outbreak. You understand that survival depends on more than medicine — information, sanitation, resources, shelter, and judgment all matter.";

        survival =
            "Several weeks to several months";

        icon =
            "🏃";


    } else if (
        survivalPercentage <= 90
    ) {

        title =
            "Outbreak Survivor";

        description =
            "You make careful decisions, manage risk well, and understand that avoiding unnecessary exposure is often more valuable than taking heroic risks.";

        survival =
            "Several months to several years";

        icon =
            "🔥";


    } else {

        title =
            "Master Survivor";

        description =
            "You consistently prioritize preparation, infection control, resources, information, and long-term stability. You don't simply react to the outbreak — you plan around it.";

        survival =
            "Several years";

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


    // =====================================================
    // MORALITY RESULT
    // =====================================================

    let moralityTitle;
    let moralityDescription;


    if (
        moralityPercentage <= 20
    ) {

        moralityTitle =
            "Ruthless Pragmatist";

        moralityDescription =
            "You tend to place survival and practical outcomes above compassion or social obligations. Difficult choices are easier for you when survival is at stake.";


    } else if (
        moralityPercentage <= 40
    ) {

        moralityTitle =
            "Pragmatic Survivor";

        moralityDescription =
            "You care about other people, but you are willing to put survival, security, and practical limits ahead of compassion when circumstances demand it.";


    } else if (
        moralityPercentage <= 60
    ) {

        moralityTitle =
            "Balanced Survivor";

        moralityDescription =
            "You try to balance survival with compassion, fairness, responsibility, and the needs of other people.";


    } else if (
        moralityPercentage <= 80
    ) {

        moralityTitle =
            "Compassionate Survivor";

        moralityDescription =
            "You place considerable value on protecting other people and maintaining fairness, even when resources and safety are limited.";


    } else {

        moralityTitle =
            "Humanitarian";

        moralityDescription =
            "You strongly value human life, compassion, fairness, responsibility, and helping others, even when doing so carries a personal cost.";

    }


    document.getElementById(
        "morality-description"
    ).textContent =
        moralityTitle +
        " — " +
        moralityDescription;


    // =====================================================
    // FINAL PROGRESS
    // =====================================================

    progressBar.style.width =
        "100%";

}


// =========================================================
// RESTART
// =========================================================

function restartQuiz() {

    currentQuestion = 0;

    survivalScore = 0;

    moralityScore = 0;

    selectedAnswers =
        new Array(
            questions.length
        ).fill(-1);


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


    // Hide suggestions when returning
    // to the start screen.

    if (suggestionsCard) {

        suggestionsCard.classList.add(
            "hidden"
        );

    }


    progressBar.style.width =
        "0%";


    submitButton.disabled =
        true;

    submitButton.textContent =
        "SUBMIT";


    nextButton.disabled =
        true;

}


// =========================================================
// SHARE
// =========================================================

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


    const morality =
        document.getElementById(
            "morality-score"
        ).textContent;


    const quizUrl =
        "https://apocalypsequizzes.com/plague-survival-test/";


    const shareText =
        `☣️ I scored ${finalScore}% on The Plague Survival Test!\n\n` +
        `${title}\n` +
        `Estimated survival: ${survival}\n` +
        `Morality Score: ${morality}\n\n` +
        `How long would YOU survive?`;


    const shareData = {

        title:
            "The Plague Survival Test",

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


// =========================================================
// DEVELOPMENT CHECKS
// =========================================================

/*
    These checks run silently in the browser console.
    They help prevent accidental scoring mistakes if
    questions are edited later.
*/

console.assert(
    questions.length === 40,
    `Expected 40 questions, found ${questions.length}.`
);


questions.forEach(
    (question, questionIndex) => {

        console.assert(
            question.answers.length === 4,
            `Question ${questionIndex + 1} should have 4 answers.`
        );


        question.answers.forEach(
            (answer, answerIndex) => {

                const survival =
                    answer[1];

                const morality =
                    answer[2];


                console.assert(
                    Number.isInteger(survival) &&
                    survival >= 0 &&
                    survival <= 5,
                    `Question ${questionIndex + 1}, answer ${answerIndex + 1}: invalid survival score.`
                );


                console.assert(
                    morality === null ||
                    (
                        Number.isInteger(morality) &&
                        morality >= 0 &&
                        morality <= 5
                    ),
                    `Question ${questionIndex + 1}, answer ${answerIndex + 1}: invalid morality score.`
                );

            }
        );


        const highestSurvival =
            Math.max(
                ...question.answers.map(
                    answer => answer[1]
                )
            );


        console.assert(
            highestSurvival === 5,
            `Question ${questionIndex + 1} does not have a Survival 5 option.`
        );


        const hasMorality =
            question.answers.some(
                answer =>
                    answer[2] !== null &&
                    answer[2] !== undefined
            );


        if (hasMorality) {

            const highestMorality =
                Math.max(
                    ...question.answers
                        .filter(
                            answer =>
                                answer[2] !== null &&
                                answer[2] !== undefined
                        )
                        .map(
                            answer => answer[2]
                        )
                );


            console.assert(
                highestMorality === 5,
                `Question ${questionIndex + 1} has morality scoring but no Morality 5 option.`
            );

        }

    }
);


// =========================================================
// DEVELOPMENT LOG
// =========================================================

console.log(
    `Plague Survival Test loaded: ${questions.length} questions.`
);

console.log(
    `Maximum Survival Score: ${MAX_SURVIVAL_SCORE}`
);

console.log(
    `Maximum Morality Score: ${MAX_MORALITY_SCORE}`
);


// =========================================================
// GLOBAL SITE MENU
// =========================================================

const menuToggle =
    document.getElementById("menu-toggle");

const siteMenu =
    document.getElementById("site-menu");


if (
    menuToggle &&
    siteMenu
) {

    // =====================================================
    // OPEN / CLOSE WITH HAMBURGER
    // =====================================================

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


    // =====================================================
    // CLOSE WHEN CLICKING OUTSIDE
    // =====================================================

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


    // =====================================================
    // CLOSE AFTER CLICKING A MENU LINK
    // =====================================================

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
