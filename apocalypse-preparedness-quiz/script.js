const questions = [

// ========================================================
// ENVIRONMENT
// ========================================================

{
    question: "Where do you currently live?",
    category: "environment",
    answers: [
        ["🌾 Rural area / farm / isolated property", 5],
        ["🏙️ Large city / urban area", 2],
        ["🏘️ Small town / suburban area", 3],
        ["🏢 Apartment or high-rise building", 2]
    ]
},


// ========================================================
// PHYSICAL
// ========================================================

{
    question: "What is your age group?",
    category: "physical",
    answers: [
        ["56 and above", 3],
        ["26–55", 5],
        ["0–15", 2],
        ["16–25", 4]
    ]
},

{
    question: "What is your primary mode of transportation?",
    category: "physical",
    answers: [
        ["🏍️ Motorcycle / scooter", 4],
        ["🚌 Public transportation / walking", 2],
        ["🚗 Car", 5],
        ["🚲 Bicycle", 3]
    ]
},


// ========================================================
// RESOURCES
// ========================================================

{
    question: "What type of weapons or defensive tools are available in your home?",
    category: "resources",
    answers: [
        ["🔫 Firearm", 3],
        ["🔪 Knife / screwdriver or other basic hand tools", 3],
        ["🔪 Machete", 4],
        ["🪓 Axe", 4]
    ]
},


// ========================================================
// PROFILE ONLY
// ========================================================

{
    question: "If you had to choose one defensive option during an apocalypse, which would you prefer?",
    category: "profile",
    answers: [
        ["❌ Neither", 0],
        ["🔪 Knife", 0],
        ["🔫 Gun", 0],
        ["🔫🔪 Both", 0]
    ]
},


// ========================================================
// MEDICAL
// ========================================================

{
    question: "How well do you understand medicines and basic medical care?",
    category: "medical",
    answers: [
        ["🩺 Pretty well — I have good knowledge of medicines and basic medical care", 5],
        ["🤷 I know very little about medicines", 2],
        ["❓ I have essentially no knowledge about medicines", 1],
        ["💊 I can identify and use some common/basic medicines", 3]
    ]
},

{
    question: "How well can you handle and treat a wound in an emergency?",
    category: "medical",
    answers: [
        ["🤝 I can assist someone else, but I'm not confident treating a wound myself", 2],
        ["🩹 Yes — I can treat most basic wounds myself", 5],
        ["😰 I struggle around blood and may faint or become unable to help", 1],
        ["🩹 Somewhat — I can handle minor wounds but may need help with more serious injuries", 4]
    ]
},


// ========================================================
// PROFILE ONLY
// ========================================================

{
    question: "How do you feel in enclosed or confined spaces?",
    category: "profile",
    answers: [
        ["😰 Very uncomfortable — I prefer open spaces", 0],
        ["😌 Comfortable — I have no problem being in enclosed spaces", 0],
        ["😨 Extremely uncomfortable — I may panic or feel unable to stay inside", 0],
        ["🙂 Slightly uncomfortable, but I can manage", 0]
    ]
},


// ========================================================
// MEDICAL
// ========================================================

{
    question: "Are you currently taking any medication on a regular basis?",
    category: "medical",
    answers: [
        ["🤷 Prefer not to say / unsure", 3],
        ["❌ No — I don't currently take any medication", 5],
        ["💊 Yes — I occasionally need medication", 4],
        ["💊 Yes — I take regular medication", 3]
    ]
},

{
    question: "Do you have any known allergies?",
    category: "medical",
    answers: [
        ["🤷 I'm not sure / I've never been tested", 4],
        ["🤧 Yes — I have one known allergy", 4],
        ["🤧 Yes — I have multiple known allergies", 3],
        ["✅ No — I don't have any known allergies", 5]
    ]
},


// ========================================================
// PHYSICAL
// ========================================================

{
    question: "How physically durable are you when you need to travel on foot?",
    category: "physical",
    answers: [
        ["🥾 I can walk for most of the day if necessary", 5],
        ["🚶 I can comfortably walk several kilometers", 4],
        ["🪑 I have limited walking endurance and would struggle with long distances", 1],
        ["🚶‍♂️ I can walk short distances, but I prefer using transportation", 2]
    ]
},

{
    question: "How would you describe your running stamina?",
    category: "physical",
    answers: [
        ["🏃 Moderate — I can run a few kilometers before needing a break", 4],
        ["🏃 High — I can run for a long distance without stopping", 5],
        ["😮‍💨 Very low — I struggle to run or avoid running whenever possible", 1],
        ["🏃 Low — I can run only short distances", 2]
    ]
},


// ========================================================
// RESOURCES
// ========================================================

{
    question: "What type of flashlight or portable light do you have available?",
    category: "resources",
    answers: [
        ["🔌 Rechargeable / USB-charging flashlight", 4],
        ["📱 Phone flashlight only", 2],
        ["☀️ Solar-powered light / flashlight", 5],
        ["🔋 Battery-powered flashlight", 4]
    ]
},


// ========================================================
// PRACTICAL
// ========================================================

{
    question: "How well can you cook for yourself?",
    category: "practical",
    answers: [
        ["🥪 I can prepare only very basic food", 2],
        ["🍳 I can cook simple everyday meals", 4],
        ["❌ I don't know how to cook", 1],
        ["👨‍🍳 I can prepare a wide variety of meals from basic ingredients", 5]
    ]
},

{
    question: "How well can you start a fire without modern appliances?",
    category: "practical",
    answers: [
        ["🔥 I can start a fire, but only with some assistance", 3],
        ["🪨 I can start a fire using a fire starter, flint, or similar tools", 5],
        ["🥶 I would freeze up and probably be unable to start one in an emergency", 1],
        ["🔥 I can start a fire using matches, a lighter, or similar methods", 4]
    ]
},


// ========================================================
// PROFILE ONLY
// ========================================================

{
    question: "How well could you function without your smartphone during an emergency?",
    category: "profile",
    answers: [
        ["😕 With difficulty — I rely on it for many things", 0],
        ["📵 Easily — I can function normally without it", 0],
        ["😰 Not well — I would struggle to function without it", 0],
        ["🙂 Mostly — I can manage most important tasks without it", 0]
    ]
},

{
    question: "What type of footwear do you usually wear?",
    category: "resources",
    answers: [
        ["👟 Sports shoes / sneakers", 4],
        ["🥾 Sturdy boots / work boots", 5],
        ["🩴 Sandals / flip-flops", 2],
        ["👞 Formal shoes / other footwear", 2]
    ]
},

{
    question: "What type of clothing do you usually wear on a daily basis?",
    category: "resources",
    answers: [
        ["🩳 Light, loose clothing", 3],
        ["👕 Comfortable, durable everyday clothes", 5],
        ["👔 Formal or office-style clothing", 2],
        ["👖 Jeans / trousers with a regular shirt or T-shirt", 4]
    ]
},


// ========================================================
// RESOURCES
// ========================================================

{
    question: "How much water do you currently have stored at home?",
    category: "resources",
    answers: [
        ["💧 Enough for several days", 4],
        ["💧 Enough for several weeks", 5],
        ["❌ No stored water beyond what I normally use", 1],
        ["💧 Only a small amount, such as a few bottles", 2]
    ]
},

{
    question: "What is your home's main source of electricity?",
    category: "resources",
    answers: [
        ["🔋 A combination of two or more sources / other backup system", 5],
        ["☀️ Solar power system", 4],
        ["⛽ Generator", 4],
        ["⚡ Electricity grid / power line", 2]
    ]
},


// ========================================================
// PROFILE ONLY
// ========================================================

{
    question: "In a major emergency, would you prefer to survive alone or with other people?",
    category: "profile",
    answers: [
        ["👥 Small group — I prefer a few trusted people", 0],
        ["🤷 No strong preference — it would depend on the situation", 0],
        ["👤 Alone — I work better independently", 0],
        ["👨‍👩‍👧‍👦 Large group — I feel safer with more people around", 0]
    ]
},


// ========================================================
// PRACTICAL
// ========================================================

{
    question: "What best describes your current occupation or background?",
    category: "practical",
    answers: [
        ["🎓 Student", 3],
        ["🔧 Skilled / blue-collar work — construction, mechanic, technician, trades, etc.", 5],
        ["🌾 Farming / agriculture / outdoor work", 5],
        ["👔 Other professional / specialized work", 4],
        ["💻 Office / computer / IT-based work", 3],
        ["❌ Not currently working / retired / other", 2],
        ["🛡️ Defence / police / security / emergency services", 5],
        ["🛒 Retail / sales / customer service", 2]
    ]
},


// ========================================================
// PROFILE ONLY
// ========================================================

{
    question: "How comfortable are you around animals?",
    category: "profile",
    answers: [
        ["🐦 I'm comfortable with birds and smaller animals, but not necessarily larger animals", 0],
        ["😨 I prefer to stay away from animals as much as possible", 0],
        ["🐕 I'm comfortable with common pets like dogs and cats", 0],
        ["🐾 I'm comfortable around almost all types of animals", 0]
    ]
},


// ========================================================
// PHYSICAL
// ========================================================

{
    question: "How well can you climb when necessary?",
    category: "physical",
    answers: [
        ["🪜 I can comfortably climb stairs and basic ladders", 3],
        ["🌳 I can climb trees, pipes, fences, or similar structures", 4],
        ["🧗 I can handle difficult or uneven terrain and challenging climbs", 5],
        ["🛗 I prefer lifts and avoid climbing whenever possible", 1]
    ]
},


// ========================================================
// PROFILE ONLY
// ========================================================

{
    question: "Which environment do you generally prefer spending your time in?",
    category: "profile",
    answers: [
        ["🌳 Mostly outdoors — I enjoy spending time outside", 0],
        ["🏠 Mostly indoors — I feel more comfortable inside", 0],
        ["🤷 It depends on the situation — I don't have a strong preference", 0],
        ["⚖️ Both — I'm equally comfortable indoors and outdoors", 0]
    ]
},

{
    question: "What best describes your current living situation?",
    category: "profile",
    answers: [
        ["👫 I live with a partner / spouse", 0],
        ["🏠 Other / prefer not to say", 0],
        ["👤 I live alone", 0],
        ["👨‍👩‍👧‍👦 I live with family", 0],
        ["🏠 I live with roommates / other people", 0]
    ]
},

{
    question: "How comfortable are you caring for children or babies during an emergency?",
    category: "profile",
    answers: [
        ["🙂 Somewhat comfortable — I can help with basic needs but may need guidance", 0],
        ["👶 Very comfortable — I can confidently care for and handle children or babies", 0],
        ["😣 I strongly dislike handling or caring for children or babies", 0],
        ["😐 I would try to avoid responsibility for children or babies if possible", 0]
    ]
},


// ========================================================
// PRACTICAL
// ========================================================

{
    question: "How good are you at understanding and following directions?",
    category: "practical",
    answers: [
        ["👍 Good — I can follow normal directions without much difficulty", 4],
        ["😕 Poor — I often have difficulty understanding or remembering directions", 1],
        ["🧭 Very good — I can quickly understand and follow detailed directions", 5],
        ["🤔 Average — I may need directions repeated or explained", 2]
    ]
},

{
    question: "How well do you understand farming or gardening?",
    category: "practical",
    answers: [
        ["🌱 Fairly well — I understand basic planting, watering, and plant care", 3],
        ["❌ Not at all — I have little or no experience with farming or gardening", 1],
        ["🌿 A little — I have some practical experience but would need guidance", 2],
        ["🌾 Very well — I can grow and maintain crops or a vegetable garden independently", 5]
    ]
},

{
    question: "How do you usually make sure your drinking water is safe?",
    category: "practical",
    answers: [
        ["🔥 I boil water before drinking when necessary", 5],
        ["💧 I filter or purify it before drinking", 5],
        ["🚰 I usually drink tap water directly without additional treatment", 1],
        ["🧴 I mainly rely on packaged/bottled drinking water", 3]
    ]
}

];


// ============================================================
// ELEMENTS
// ============================================================

const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const shareButton = document.getElementById("share-btn");
const challengeButton = document.getElementById("challenge-btn");

const backButton = document.getElementById("back-btn");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const homeInfo = document.getElementById("home-info");
const suggestionsCard = document.getElementById("suggestions-card");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");

const resultTitle = document.getElementById("result-title");
const finalScore = document.getElementById("final-score");
const resultDescription = document.getElementById("result-description");
const rightNowDescription =
    document.getElementById("right-now-description");

const physicalScore = document.getElementById("physical-score");
const medicalScore = document.getElementById("medical-score");
const resourcesScore = document.getElementById("resources-score");
const practicalScore = document.getElementById("practical-score");
const environmentScore = document.getElementById("environment-score");

const strengthArea = document.getElementById("strength-area");
const weaknessArea = document.getElementById("weakness-area");


// ============================================================
// QUIZ VARIABLES
// ============================================================

let currentQuestion = 0;

let selectedAnswers =
    new Array(questions.length).fill(null);

let totalScore = 0;

let categoryScores = {
    physical: 0,
    medical: 0,
    resources: 0,
    practical: 0,
    environment: 0
};


// ============================================================
// CATEGORY NAMES
// ============================================================

const categoryNames = {
    physical: "💪 Physical",
    medical: "🩺 Medical",
    resources: "💧 Resources",
    practical: "🛠️ Practical Skills",
    environment: "🏠 Environment"
};


// ============================================================
// START QUIZ
// ============================================================

function startQuiz() {

    currentQuestion = 0;

    selectedAnswers =
        new Array(questions.length).fill(null);

    totalScore = 0;

    categoryScores = {
        physical: 0,
        medical: 0,
        resources: 0,
        practical: 0,
        environment: 0
    };

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    homeInfo.classList.add("hidden");

    if (suggestionsCard) {
        suggestionsCard.classList.add("hidden");
    }

    progressBar.style.width = "0%";

    showQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// SHOW QUESTION
// ============================================================

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

    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer";
        button.type = "button";
        button.textContent = answer[0];

        if (
            selectedAnswers[currentQuestion] === index
        ) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {

            selectAnswer(index);

        });

        answersContainer.appendChild(button);

    });

    updateNavigation();
}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(answerIndex) {

    selectedAnswers[currentQuestion] =
        answerIndex;

    const buttons =
        answersContainer.querySelectorAll(".answer");

    buttons.forEach((button, index) => {

        button.classList.toggle(
            "selected",
            index === answerIndex
        );

    });

    updateNavigation();

    const questionAtSelection =
        currentQuestion;

    setTimeout(() => {

        if (
            currentQuestion === questionAtSelection &&
            selectedAnswers[questionAtSelection] === answerIndex &&
            currentQuestion < questions.length - 1
        ) {

            currentQuestion++;

            showQuestion();

        }

    }, 180);
}


// ============================================================
// NEXT QUESTION
// ============================================================

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


// ============================================================
// PREVIOUS QUESTION
// ============================================================

function goBack() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


// ============================================================
// UPDATE NAVIGATION
// ============================================================

function updateNavigation() {

    if (!backButton || !nextButton || !submitButton) {
        return;
    }

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

        nextButton.classList.add("hidden");

        submitButton.classList.remove("hidden");

        submitButton.disabled =
            !allAnswered;

        submitButton.textContent =
            allAnswered
                ? "SUBMIT"
                : "Answer All Questions";

    } else {

        submitButton.classList.add("hidden");

        nextButton.classList.remove("hidden");

        nextButton.textContent =
            "Next →";

        nextButton.disabled =
            !currentAnswered;
    }
}


// ============================================================
// CALCULATE SCORE
// ============================================================

function calculateScore() {

    let score = 0;

    selectedAnswers.forEach(
        (answerIndex, questionIndex) => {

            if (answerIndex !== null) {

                score +=
                    questions[questionIndex]
                        .answers[answerIndex][1];

            }

        }
    );

    return score;
}


// ============================================================
// CALCULATE CATEGORY SCORES
// ============================================================

function calculateCategoryScores() {

    categoryScores = {
        physical: 0,
        medical: 0,
        resources: 0,
        practical: 0,
        environment: 0
    };

    selectedAnswers.forEach(
        (answerIndex, questionIndex) => {

            if (answerIndex === null) {
                return;
            }

            const question =
                questions[questionIndex];

            const category =
                question.category;

            if (
                categoryScores[category] !== undefined
            ) {

                categoryScores[category] +=
                    question.answers[answerIndex][1];

            }

        }
    );
}


// ============================================================
// MAXIMUM CATEGORY SCORE
// ============================================================

function getCategoryMaximum(category) {

    return questions
        .filter(
            question =>
                question.category === category
        )
        .reduce(
            (total, question) => {

                const maximum =
                    Math.max(
                        ...question.answers.map(
                            answer => answer[1]
                        )
                    );

                return total + maximum;

            },
            0
        );
}


// ============================================================
// FINISH / SHOW RESULT
// ============================================================

function showResult() {

    if (
        !selectedAnswers.every(
            answer => answer !== null
        )
    ) {
        return;
    }

    totalScore =
        calculateScore();

    calculateCategoryScores();

    const maximumScore =
        questions.reduce(
            (total, question) => {

                const maximum =
                    Math.max(
                        ...question.answers.map(
                            answer => answer[1]
                        )
                    );

                return total + maximum;

            },
            0
        );

    const percentage =
        maximumScore > 0
            ? Math.round(
                (totalScore / maximumScore) * 100
            )
            : 0;

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");

    if (suggestionsCard) {
        suggestionsCard.classList.remove("hidden");
    }

    /*
     * The Preparedness result page uses a separate
     * percentage element, so only the number is inserted.
     */
    finalScore.textContent =
        percentage;

    setResult(percentage);

    updateCategoryScores();

    updateStrengthWeakness();

    progressBar.style.width =
        "100%";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// RESULT LEVEL
// ============================================================

function setResult(score) {

    if (score <= 20) {

        resultTitle.textContent =
            "BARELY PREPARED";

        resultDescription.textContent =
            "You currently have very few advantages for a sudden apocalypse. Your biggest priority would be building basic supplies, practical skills and a reliable emergency plan.";

        rightNowDescription.textContent =
            "If everything changed right now, you would probably be forced to improvise quickly. Your first priority would be finding safety, water, food and reliable people.";

    }

    else if (score <= 40) {

        resultTitle.textContent =
            "UNDERPREPARED";

        resultDescription.textContent =
            "You have some useful advantages, but several important weaknesses could become serious problems during a prolonged crisis.";

        rightNowDescription.textContent =
            "You could probably manage the initial shock, but shortages and loss of normal services would expose your weak areas fairly quickly.";

    }

    else if (score <= 60) {

        resultTitle.textContent =
            "REASONABLY PREPARED";

        resultDescription.textContent =
            "You have a decent foundation. You possess several useful advantages, although there is still plenty of room to improve your preparedness.";

        rightNowDescription.textContent =
            "You would have a reasonable chance of handling the initial disruption, especially if you can stay calm and use your existing resources wisely.";

    }

    else if (score <= 80) {

        resultTitle.textContent =
            "WELL PREPARED";

        resultDescription.textContent =
            "You have built a strong collection of skills, resources and advantages. You would be better positioned than most people if normal life suddenly disappeared.";

        rightNowDescription.textContent =
            "You would enter the crisis with several important advantages. Your biggest challenge would be maintaining those advantages as the situation continues.";

    }

    else {

        resultTitle.textContent =
            "HIGHLY PREPARED";

        resultDescription.textContent =
            "You have an impressive combination of skills, resources, adaptability and environmental advantages. You are about as prepared as an ordinary person can reasonably be.";

        rightNowDescription.textContent =
            "If the apocalypse started right now, you would have a strong starting position. Your biggest challenge would be avoiding unnecessary risks and protecting your resources.";

    }
}


// ============================================================
// UPDATE CATEGORY SCORES
// ============================================================

function updateCategoryScores() {

    const categoryElements = {
        physical: physicalScore,
        medical: medicalScore,
        resources: resourcesScore,
        practical: practicalScore,
        environment: environmentScore
    };

    Object.keys(categoryElements).forEach(
        category => {

            const maximumScore =
                getCategoryMaximum(category);

            const percentage =
                maximumScore > 0
                    ? Math.round(
                        (
                            categoryScores[category] /
                            maximumScore
                        ) * 100
                    )
                    : 0;

            if (categoryElements[category]) {

                categoryElements[category].textContent =
                    `${percentage}%`;

            }

        }
    );
}


// ============================================================
// STRONGEST / WEAKEST AREA
// ============================================================

function updateStrengthWeakness() {

    const categories = [
        "physical",
        "medical",
        "resources",
        "practical",
        "environment"
    ];

    const categoryPercentages = {};

    categories.forEach(
        category => {

            const maximumScore =
                getCategoryMaximum(category);

            categoryPercentages[category] =
                maximumScore > 0
                    ? (
                        categoryScores[category] /
                        maximumScore
                    ) * 100
                    : 0;

        }
    );


    let strongest =
        categories[0];

    let weakest =
        categories[0];


    categories.forEach(
        category => {

            if (
                categoryPercentages[category] >
                categoryPercentages[strongest]
            ) {

                strongest =
                    category;

            }

            if (
                categoryPercentages[category] <
                categoryPercentages[weakest]
            ) {

                weakest =
                    category;

            }

        }
    );


    if (strengthArea) {

        strengthArea.textContent =
            categoryNames[strongest];

    }

    if (weaknessArea) {

        weaknessArea.textContent =
            categoryNames[weakest];

    }
}


// ============================================================
// RESTART
// ============================================================

function restartQuiz() {

    currentQuestion = 0;

    selectedAnswers =
        new Array(questions.length).fill(null);

    totalScore = 0;

    categoryScores = {
        physical: 0,
        medical: 0,
        resources: 0,
        practical: 0,
        environment: 0
    };

    resultScreen.classList.add("hidden");

    quizScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");

    if (suggestionsCard) {
        suggestionsCard.classList.add("hidden");
    }

    progressBar.style.width =
        "0%";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// SHARE RESULT
// ============================================================

async function shareResult() {

    const score =
        finalScore.textContent;

    const title =
        resultTitle.textContent;

    const quizUrl =
        window.location.href;

    const shareText =
        `🧟 I scored ${score}% on the How Prepared Are You for the Apocalypse? quiz!\n\n` +
        `${title}\n\n` +
        `How prepared are YOU?`;

    const shareData = {
        title:
            "How Prepared Are You for the Apocalypse?",
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
            typeof navigator.clipboard.writeText ===
            "function"
        ) {

            await navigator.clipboard.writeText(
                `${shareText}\n\n${quizUrl}`
            );

            alert(
                "Your result has been copied! You can paste it anywhere."
            );

        }

        else {

            fallbackCopy(
                `${shareText}\n\n${quizUrl}`
            );

        }

    }

    catch (error) {

        console.log(
            "Sharing cancelled."
        );

    }
}


// ============================================================
// CHALLENGE FRIENDS
// ============================================================

async function challengeFriends() {

    const score =
        finalScore.textContent;

    const challengeText =
        `🧟 I scored ${score}% on the Apocalypse Preparedness Quiz!\n\n` +
        `How prepared are YOU?\n\n` +
        `${window.location.href}`;

    const shareData = {
        title:
            "Apocalypse Preparedness Challenge",
        text:
            challengeText,
        url:
            window.location.href
    };

    try {

        if (navigator.share) {

            await navigator.share(
                shareData
            );

        }

        else if (
            navigator.clipboard &&
            typeof navigator.clipboard.writeText ===
            "function"
        ) {

            await navigator.clipboard.writeText(
                challengeText
            );

            alert(
                "Challenge copied! You can now paste it and send it to your friends."
            );

        }

        else {

            fallbackCopy(
                challengeText
            );

        }

    }

    catch (error) {

        console.log(
            "Challenge sharing cancelled."
        );

    }
}


// ============================================================
// COPY FALLBACK
// ============================================================

function fallbackCopy(text) {

    const textarea =
        document.createElement("textarea");

    textarea.value =
        text;

    textarea.style.position =
        "fixed";

    textarea.style.left =
        "-9999px";

    textarea.style.top =
        "0";

    document.body.appendChild(
        textarea
    );

    textarea.focus();

    textarea.select();

    try {

        const successful =
            document.execCommand("copy");

        if (successful) {

            alert(
                "Copied! You can now paste and share it with your friends."
            );

        }

        else {

            alert(text);

        }

    }

    catch (error) {

        alert(text);

    }

    document.body.removeChild(
        textarea
    );
}


// ============================================================
// BUTTON EVENTS
// ============================================================

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
    challengeFriends
);

if (backButton) {

    backButton.addEventListener(
        "click",
        goBack
    );

}

if (nextButton) {

    nextButton.addEventListener(
        "click",
        goNext
    );

}

if (submitButton) {

    submitButton.addEventListener(
        "click",
        showResult
    );
}


// ============================================================
// GLOBAL SITE MENU
// ============================================================

const menuToggle =
    document.getElementById("menu-toggle");

const siteMenu =
    document.getElementById("site-menu");

if (menuToggle && siteMenu) {

    // OPEN / CLOSE WITH HAMBURGER

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


    // CLOSE WHEN CLICKING OUTSIDE

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


    // CLOSE AFTER CLICKING A MENU LINK

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