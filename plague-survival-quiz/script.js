const questions = [
    // 1 — Flea and rodent exposure
    {
        question: "Plague has been reported among local rodents. What best reduces your risk?",
        answers: [
            ["Use flea repellent and avoid sick or dead animals.", 5, null],
            ["Wear a mask but still handle rodents and carcasses.", 1, null],
            ["Take leftover antibiotics just in case.", 0, null],
            ["Ignore the warning unless someone becomes ill.", 0, null]
        ]
    },

    // 2 — Helping someone with possible pneumonic plague
    {
        question: "A person with suspected pneumonic plague is coughing and asks for help. What do you do?",
        answers: [
            ["Move closer and help without precautions.", 1, 4],
            ["Keep back, call for medical help, and offer safer aid.", 5, 5],
            ["Tell them to leave and alert nobody.", 1, 0],
            ["Offer leftover antibiotics and carry on as normal.", 0, 2]
        ]
    },

    // 3 — Critically ill friend
    {
        question: "Your critically ill friend is in severe pain and asks you to end their suffering. What do you do?",
        answers: [
            ["Act on their request without seeking medical help.", 0, 1],
            ["Stay with them, offer comfort, and seek urgent care.", 5, 5],
            ["Leave immediately to avoid possible exposure.", 1, 0],
            ["Give unprescribed medicine to ease their pain.", 0, 2]
        ]
    },

    // 4 — Infected child needing treatment
    {
        question: "Your 6-year-old daughter may have plague. What is the safest way to get her treatment?",
        answers: [
            ["Call health services and arrange safe, urgent transport.", 5, 5],
            ["Carry her through crowds without contacting the clinic.", 1, 3],
            ["Wait overnight to see whether she improves.", 0, 1],
            ["Send an untrained stranger to get medicine.", 1, 1]
        ]
    },

    // 5 — Death during an outbreak
    {
        question: "A relative dies with suspected plague. What should you do first?",
        answers: [
            ["Handle and bury the body yourself immediately.", 1, 2],
            ["Notify health officials and avoid direct contact until advised.", 5, 5],
            ["Burn the body without guidance or suitable facilities.", 0, 1],
            ["Leave without reporting the death to anyone.", 1, 0]
        ]
    },

    // 6 — Doctor and family
    {
        question: "You're a doctor without symptoms, but cannot assume you're immune. Your family is vulnerable, and patients need care. What do you do?",
        answers: [
            ["Use infection-control precautions and arrange safer family contact.", 5, 5],
            ["Assume you're immune and visit your family normally.", 0, 3],
            ["Leave the city without handing over your patients.", 1, 1],
            ["Treat patients without extra precautions because staff are needed.", 1, 2]
        ]
    },

    // 7 — Helping people fleeing an infected city
    {
        question: "People fleeing an infected city reach your village asking for help. What do you do?",
        answers: [
            ["Bring everyone indoors immediately, without assessing risks.", 1, 5],
            ["Refuse all help, even food or information.", 3, 0],
            ["Offer safe supplies and connect them with health services or a reception point.", 5, 5],
            ["Force them to leave without telling them where to seek help.", 0, 0]
        ]
    },

    // 8 — Black Death history
    {
        question: "Which statement about the Black Death's spread is most accurate?",
        answers: [
            ["Rat fleas alone explain every outbreak.", 0, null],
            ["Infected fleas played a role, but historical routes remain debated.", 5, null],
            ["The disease spread only through drinking water.", 0, null],
            ["Mosquitoes were the main vector across Europe.", 0, null]
        ]
    },

    // 9 — Case-fatality ratio
    {
        question: "What does a case-fatality ratio measure?",
        answers: [
            ["The share of diagnosed cases that result in death.", 5, null],
            ["How quickly a disease spreads through a population.", 0, null],
            ["The average time before symptoms begin.", 0, null],
            ["The number of new cases reported each day.", 0, null]
        ]
    },

    // 10 — R-naught
    {
        question: "What does a disease's R₀ (R-naught) estimate?",
        answers: [
            ["Average infections caused by one case in a susceptible population.", 5, null],
            ["The average incubation period.", 0, null],
            ["The share of infected people who become severely ill.", 0, null],
            ["The share of cases that result in death.", 0, null]
        ]
    },

    // 11 — Local outbreak reports
    {
        question: "Reports say a disease is spreading in your city. What should you do first?",
        answers: [
            ["Go to work and social events as usual.", 1, null],
            ["Leave the city immediately, without checking advice.", 2, null],
            ["Attend a crowded event before restrictions begin.", 0, null],
            ["Check official advice and limit unnecessary close contact.", 5, null]
        ]
    },

    // 12 — Mild symptoms
    {
        question: "You feel unwell during an outbreak. A local school is being used as a response centre. What do you do?",
        answers: [
            ["Go there without contacting anyone first.", 2, 4],
            ["Continue your normal routine and ignore symptoms.", 0, 0],
            ["Contact health services, limit contact, and follow their advice.", 5, 5],
            ["Go to work and see whether you feel worse.", 0, 0]
        ]
    },

    // 13 — Food shortage
    {
        question: "People are hoarding food as cases rise. What is the best response?",
        answers: [
            ["Buy far more than your household needs.", 2, 1],
            ["Buy a reasonable reserve and avoid panic buying.", 5, 5],
            ["Wait until shelves are nearly empty before planning.", 3, 3],
            ["Take supplies from other shoppers or homes.", 0, 0]
        ]
    },

    // 14 — Clothing from a possible case
    {
        question: "You find expensive clothes that may have belonged to someone who died during the outbreak. What do you do?",
        answers: [
            ["Wear them immediately without checking their history.", 0, 0],
            ["Wash them and assume every possible risk is gone.", 2, 3],
            ["Avoid handling them until you can follow health guidance.", 5, 5],
            ["Burn them yourself as a precaution.", 1, 1]
        ]
    },

    // 15 — River contamination
    {
        question: "You need to wash, but a dead body was seen in the river two days ago. What do you do?",
        answers: [
            ["Bathe there because the body has drifted away.", 0, 0],
            ["Avoid the river and seek a safer water source.", 5, 5],
            ["Boil river water and assume it is safe for every use.", 2, 2],
            ["Wait a few days, then use it without checking.", 1, 0]
        ]
    },

    // 16 — Shared bathroom
    {
        question: "A sick family member must use your only bathroom. What best reduces risk?",
        answers: [
            ["Stop all bathroom use, even for essential needs.", 1, 1],
            ["Have everyone use it together to save time.", 0, 0],
            ["Improve ventilation, clean appropriately, and limit close contact.", 5, 5],
            ["Rely on natural immunity and do nothing differently.", 1, 0]
        ]
    },

    // 17 — Unsafe well
    {
        question: "Your well may be contaminated, but a safer source supplies only half your needs. What do you do?",
        answers: [
            ["Keep using the well without checking its safety.", 0, 0],
            ["Reduce handwashing and sanitation indefinitely.", 1, 0],
            ["Prioritize confirmed-safe water and seek official advice on shortages and treatment.", 5, 5],
            ["Mix both sources without testing or treatment guidance.", 0, 0]
        ]
    },

    // 18 — Urgent medical travel
    {
        question: "A medical emergency requires hospital care in an outbreak zone. What should guide your decision?",
        answers: [
            ["Distance alone, regardless of the patient's condition.", 2, null],
            ["Urgency, exposure risk, and medical or emergency guidance.", 5, null],
            ["Whether the patient is already unconscious.", 2, null],
            ["Avoid all hospitals, whatever the emergency.", 0, null]
        ]
    },

    // 19 — Emergency powers
    {
        question: "Leaders want power to restrict movement during suspected outbreaks. What safeguards matter most?",
        answers: [
            ["Unlimited authority with no review.", 0, 0],
            ["A public vote before every urgent action.", 2, 4],
            ["Clear triggers, time limits, oversight, and review.", 5, 5],
            ["Different unwritten rules for each neighborhood.", 2, 1]
        ]
    },

    // 20 — Dead rodents near food
    {
        question: "You find dead rodents near your food store. What do you do?",
        answers: [
            ["Move the carcasses bare-handed and keep using the area.", 0, null],
            ["Avoid contact, secure food, and notify health authorities.", 5, null],
            ["Sweep the area and continue using nearby supplies.", 1, null],
            ["Release pets to chase away any remaining rodents.", 0, null]
        ]
    },

    // 21 — Fuel station crowd
    {
        question: "You need fuel, but the only open station has a long crowd. What should you do?",
        answers: [
            ["Join the queue without considering the risk.", 2, null],
            ["Look for a safer source and avoid unnecessary crowding.", 5, null],
            ["Push ahead before the fuel runs out.", 0, null],
            ["Wait nearby indefinitely without checking alternatives.", 2, null]
        ]
    },

    // 22 — Elderly neighbor needing help
    {
        question: "Your elderly neighbor can no longer manage alone and asks to stay with you. Supplies are limited. What do you do?",
        answers: [
            ["Bring them in immediately without planning for care.", 2, 5],
            ["Refuse all help because supplies are limited.", 3, 0],
            ["Assess safe support options and arrange shelter or supplies where possible.", 5, 5],
            ["Send them away without checking other assistance.", 1, 0]
        ]
    },

    // 23 — Child found alone
    {
        question: "You find a frightened child alone beside an abandoned vehicle. You don't know where their parents are. What do you do?",
        answers: [
            ["Take the child along without contacting anyone.", 2, 3],
            ["Search nearby alone before securing the child.", 2, 3],
            ["Leave the child and continue your journey.", 0, 0],
            ["Move the child to safety and contact trusted authorities.", 5, 5]
        ]
    },

    // 24 — Movement inside an abandoned supermarket
    {
        question: "A supermarket seems abandoned, but you hear movement inside and need food. What do you do?",
        answers: [
            ["Enter immediately and search the aisles.", 1, 1],
            ["Avoid it without assessing whether safer options exist.", 3, 3],
            ["Keep your distance, call out, and assess the risk before approaching.", 5, 5],
            ["Enter through a rear door without checking who is inside.", 1, 1]
        ]
    },

    // 25 — Unexplained missing food
    {
        question: "Food is missing from communal stores, but you don't know who took it. What do you do?",
        answers: [
            ["Accuse the most suspicious resident and punish them.", 1, 0],
            ["Ignore the shortage to avoid a difficult discussion.", 1, 2],
            ["Check supplies, investigate fairly, and clarify ration rules.", 5, 5],
            ["Lock everyone out of the store indefinitely.", 2, 1]
        ]
    },

    // 26 — Scarce medicine
    {
        question: "Only one dose of a critical medicine remains. One patient is your friend; the other is more likely to benefit. What do you do?",
        answers: [
            ["Give it to your friend because you know them.", 2, 1],
            ["Use fair medical criteria and give it to the patient most likely to benefit.", 5, 5],
            ["Let both families decide without medical advice.", 2, 3],
            ["Choose randomly without checking urgency or likely benefit.", 1, 2]
        ]
    },

    // 27 — One evacuation seat
    {
        question: "Your vehicle can take either your friend or a parent and child, but not all three. What do you do?",
        answers: [
            ["Choose your friend without assessing the others' needs.", 3, 2],
            ["Prioritize the parent and child, and seek help for your friend.", 5, 5],
            ["Choose whoever arrived first, regardless of urgency.", 3, 3],
            ["Leave without helping either party.", 0, 0]
        ]
    },

    // 28 — New arrivals from an infected city
    {
        question: "Healthy-looking people arrive from an infected city and ask to enter your settlement. What do you do?",
        answers: [
            ["Admit everyone immediately without assessing risk.", 1, 5],
            ["Refuse them all and offer no assistance.", 3, 0],
            ["Contact health services and arrange appropriate screening or precautions.", 5, 5],
            ["Give no information and send them away at once.", 2, 1]
        ]
    },

    // 29 — Small shelter and stranger
    {
        question: "A storm is coming. Your shelter holds four, and three of you are inside. A stranger asks to enter, but may have been exposed. What do you do?",
        answers: [
            ["Let them in immediately with close contact.", 1, 5],
            ["Leave your shelter without checking safer options.", 0, 3],
            ["Speak from a safe distance, assess risk, and seek a safe way to help.", 5, 5],
            ["Refuse them and provide no information or supplies.", 3, 1]
        ]
    },

    // 30 — Parent taking food
    {
        question: "A hungry parent secretly took food to feed their children. What should your settlement do?",
        answers: [
            ["Punish them immediately without hearing their reasons.", 2, 1],
            ["Ignore the issue and leave ration rules unclear.", 2, 3],
            ["Provide fair food support and address the breach transparently.", 5, 5],
            ["Demand the food back and offer no support.", 2, 1]
        ]
    },

    // 31 — Supplies in an abandoned house
    {
        question: "An apparently abandoned house contains food, medicine, and family photographs. No immediate danger is visible. What do you do?",
        answers: [
            ["Take everything, including personal keepsakes.", 2, 0],
            ["Check for hazards and take only essential supplies if necessary.", 5, 5],
            ["Leave every item, even if critical supplies are unavailable.", 3, 4],
            ["Wait indefinitely for an owner who may not return.", 2, 3]
        ]
    },

    // 32 — Missing child during an outbreak
    {
        question: "A child disappears inside your settlement during an outbreak. A search could expose people in crowded areas. What do you do?",
        answers: [
            ["Send everyone into crowded areas immediately.", 2, 4],
            ["Wait until morning without checking immediate risks.", 1, 1],
            ["Search alone without telling anyone where you are going.", 2, 3],
            ["Alert leaders and coordinate a focused, cautious search.", 5, 5]
        ]
    },

    // 33 — Returning family member
    {
        question: "A family member returns from an area with active cases and wants to reunite immediately. What do you do?",
        answers: [
            ["Welcome them with close contact and no precautions.", 1, 5],
            ["Contact health services and follow screening or monitoring advice.", 5, 5],
            ["Reject them permanently without seeking advice.", 2, 1],
            ["Meet indoors in a crowded room to talk it through.", 1, 3]
        ]
    },

    // 34 — Public-health restrictions
    {
        question: "Residents oppose restrictions based on credible health evidence. What should settlement leaders do?",
        answers: [
            ["Remove all restrictions immediately.", 1, 3],
            ["Keep restrictions forever without explanation.", 2, 0],
            ["Explain the evidence, apply proportionate rules, and review them regularly.", 5, 5],
            ["Let every household invent unrelated rules.", 2, 3]
        ]
    },

    // 35 — Skilled newcomer from an affected area
    {
        question: "A skilled engineer from an area with active infections could help your settlement. What should you do?",
        answers: [
            ["Admit them immediately because their skills are valuable.", 1, 5],
            ["Reject them without considering any safe options.", 3, 0],
            ["Follow public-health advice on exposure assessment and safe admission.", 5, 5],
            ["Let them work among residents while you decide later.", 1, 2]
        ]
    },

    // 36 — Equipment from an isolation area
    {
        question: "A valuable tool was used in an isolation area and is needed elsewhere. What do you do?",
        answers: [
            ["Reuse it immediately without checking its condition.", 1, null],
            ["Follow suitable infection-control guidance before reusing it.", 5, null],
            ["Throw it away automatically, whatever the tool or risk.", 2, null],
            ["Pass it to another team without mentioning its use.", 0, null]
        ]
    },

    // 37 — Close contact with a confirmed case
    {
        question: "A resident had close contact with someone diagnosed with pneumonic plague but feels well. What should they do?",
        answers: [
            ["Ignore it because symptoms have not appeared.", 0, 1],
            ["Take leftover antibiotics without medical advice.", 0, 1],
            ["Contact health officials and follow monitoring or preventive-treatment advice.", 5, 5],
            ["Leave secretly without informing anyone.", 1, 0]
        ]
    },

    // 38 — Evacuation
    {
        question: "An outbreak prompts an evacuation warning. What is the safest response?",
        answers: [
            ["Follow official evacuation advice and designated routes.", 5, null],
            ["Take unfamiliar backroads to avoid all traffic.", 2, null],
            ["Join the largest crowd leaving the city.", 1, null],
            ["Leave immediately without checking available guidance.", 1, null]
        ]
    },

    // 39 — Choosing where to stay
    {
        question: "You can stay home or move elsewhere during an outbreak. How should you decide?",
        answers: [
            ["Choose the mountains because remote places are always safer.", 1, null],
            ["Stay anywhere without checking the local risk.", 0, null],
            ["Compare official advice, exposure risks, supplies, and medical access.", 5, null],
            ["Move with the largest group you can find.", 2, null]
        ]
    },

    // 40 — Request for water
    {
        question: "Someone asks for water for their family, but you don't know their exposure history. What do you do?",
        answers: [
            ["Invite them inside and offer no precautions.", 1, 3],
            ["Offer water from a safe distance and share health guidance.", 5, 5],
            ["Refuse to speak to them or offer any information.", 2, 0],
            ["Invite them to stay overnight without assessing the situation.", 0, 3]
        ]
    },

    // 41 — Generator safety
    {
        question: "Power fails, fuel is limited, and a medical device needs electricity. What is your plan?",
        answers: [
            ["Keep it running all day to power every room and device.", 2, null],
            ["Run it outdoors when needed, far from doors, windows, and vents.", 5, null],
            ["Place it in the garage with the main door open.", 0, null],
            ["Save fuel by switching off the medical device without arranging help.", 1, null]
        ]
    },

    // 42 — Food after possible fallout
    {
        question: "After a fallout warning, you find vegetables growing nearby. Food supplies are low. What do you do?",
        answers: [
            ["Rinse the vegetables and eat them today.", 1, null],
            ["Peel them, assuming contamination stays only on the skin.", 1, null],
            ["Keep them separate and follow official food-safety advice.", 5, null],
            ["Mix them with canned food to dilute possible contamination.", 0, null]
        ]
    },

    // 43 — Gas leak and smoke
    {
        question: "After a nearby blast, your shelter smells of gas and smoke is entering. What is the priority?",
        answers: [
            ["Light a lamp and inspect the damaged room.", 0, null],
            ["Warn others, avoid switches and flames, and leave if safe.", 5, null],
            ["Seal the doors and wait, even if smoke keeps entering.", 1, null],
            ["Search for supplies before deciding whether to leave.", 1, null]
        ]
    },

    // 44 — Dangerous rumors
    {
        question: "A rumor warns of another attack, but official alerts say to shelter. What do you do?",
        answers: [
            ["Leave immediately with the crowd heading for the highway.", 1, null],
            ["Ignore every broadcast because rumors are common.", 1, null],
            ["Check trusted emergency channels and follow verified instructions.", 5, null],
            ["Ask strangers and follow whichever view is most popular.", 2, null]
        ]
    },

    // 45 — Sanitation failure
    {
        question: "Running water stops, and many families share one shelter. What best limits disease?",
        answers: [
            ["Store waste beside sleeping areas until collection returns.", 0, null],
            ["Dump waste into the nearest stream to clear space.", 0, null],
            ["Set a designated toilet area away from food and water.", 5, null],
            ["Let each family use any convenient place.", 1, null]
        ]
    },

    // 46 — Heavy bleeding
    {
        question: "Falling debris causes heavy bleeding from a survivor's leg. What should you do first?",
        answers: [
            ["Move them far away before checking the wound.", 1, 1],
            ["Apply firm pressure and call for medical help.", 5, 5],
            ["Rinse the wound first, then try stopping the bleeding.", 1, 3],
            ["Give food and water, then check the wound later.", 0, 1]
        ]
    },

    // 47 — Flooded evacuation route
    {
        question: "Your evacuation route reaches a flooded road with moving water. What do you do?",
        answers: [
            ["Drive through slowly near the road's centre.", 0, null],
            ["Walk across and use a pole to test the depth.", 1, null],
            ["Turn back and find a safer route or official advice.", 5, null],
            ["Follow another vehicle if it seems to get through.", 0, null]
        ]
    },

    // 48 — Limited communications
    {
        question: "Your phone is nearly dead, networks are down, and one power bank remains. What is best?",
        answers: [
            ["Use it for entertainment while waiting for updates.", 0, null],
            ["Save power, send essential messages, and check updates periodically.", 5, null],
            ["Keep calling repeatedly until the battery dies.", 1, null],
            ["Give it away without checking anyone's needs.", 2, null]
        ]
    },

    // 49 — Night watch
    {
        question: "Your group is exhausted, but there may be threats outside at night. What is best?",
        answers: [
            ["Keep everyone awake all night to guard the shelter.", 1, 2],
            ["Rotate watch shifts so others can rest.", 5, 5],
            ["Ignore outside noises unless someone enters.", 1, 1],
            ["Send several people outside to inspect every sound.", 0, 2]
        ]
    },

    // 50 — Damaged shelter
    {
        question: "A storm is coming, and your shelter roof leaks near stored food and medicine. What do you do?",
        answers: [
            ["Move people away from danger and protect supplies if safe.", 5, null],
            ["Leave everyone and all supplies in place, hoping it holds.", 1, null],
            ["Repair the roof before checking whether it may collapse.", 1, null],
            ["Move everyone outdoors without checking for a safer area.", 1, null]
        ]
    }
];

// =========================================================
// QUIZ STATE
// =========================================================

let currentQuestion = 0;
let survivalScore = 0;
let moralityScore = 0;
let selectedAnswers = new Array(questions.length).fill(-1);
let autoAdvanceTimer = null;

// =========================================================
// ELEMENTS
// =========================================================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const homeInfo = document.getElementById("home-info");
const suggestionsCard = document.getElementById("suggestions-card");

const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const shareButton = document.getElementById("share-btn");
const challengeButton = document.getElementById("challenge-btn");
const backButton = document.getElementById("back-btn");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");

// =========================================================
// SCORE LIMITS
// =========================================================

// Calculate actual maximums from the options, rather than
// assuming every question has a five-point answer.
const MAX_SURVIVAL_SCORE = questions.reduce(
    (total, question) => total + Math.max(...question.answers.map(answer => answer[1])),
    0
);

// Questions with all morality values set to null do not
// contribute to the morality score or its denominator.
const MAX_MORALITY_SCORE = questions.reduce(
    (total, question) => {
        const values = question.answers
            .map(answer => answer[2])
            .filter(value => value !== null && value !== undefined);

        return total + (values.length ? Math.max(...values) : 0);
    },
    0
);

// =========================================================
// EVENTS
// =========================================================

if (startButton) startButton.addEventListener("click", startQuiz);
if (restartButton) restartButton.addEventListener("click", restartQuiz);
if (shareButton) shareButton.addEventListener("click", shareResult);
if (challengeButton) challengeButton.addEventListener("click", shareResult);
if (backButton) backButton.addEventListener("click", previousQuestion);
if (nextButton) nextButton.addEventListener("click", nextQuestion);
if (submitButton) submitButton.addEventListener("click", submitQuiz);

// =========================================================
// START QUIZ
// =========================================================

function startQuiz() {
    clearTimeout(autoAdvanceTimer);
    currentQuestion = 0;
    survivalScore = 0;
    moralityScore = 0;
    selectedAnswers = new Array(questions.length).fill(-1);

    startScreen?.classList.add("hidden");
    resultScreen?.classList.add("hidden");
    quizScreen?.classList.remove("hidden");
    homeInfo?.classList.add("hidden");
    suggestionsCard?.classList.add("hidden");

    showQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================================================
// SHOW QUESTION
// =========================================================

function showQuestion() {
    const current = questions[currentQuestion];

    questionNumber.textContent = `Decision ${currentQuestion + 1} of ${questions.length}`;
    questionText.textContent = current.question;
    answersContainer.innerHTML = "";

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer";
        button.type = "button";
        button.textContent = answer[0];
        button.setAttribute("aria-pressed", String(selectedAnswers[currentQuestion] === index));

        if (selectedAnswers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => selectAnswer(index));
        answersContainer.appendChild(button);
    });

    updateNavigation();
}

// =========================================================
// SELECT ANSWER
// =========================================================

function selectAnswer(answerIndex) {
    clearTimeout(autoAdvanceTimer);
    selectedAnswers[currentQuestion] = answerIndex;

    answersContainer.querySelectorAll(".answer").forEach((button, index) => {
        const selected = index === answerIndex;
        button.classList.toggle("selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });

    updateNavigation();

    const questionAtSelection = currentQuestion;
    autoAdvanceTimer = setTimeout(() => {
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

// =========================================================
// NEXT / PREVIOUS
// =========================================================

function nextQuestion() {
    clearTimeout(autoAdvanceTimer);

    if (selectedAnswers[currentQuestion] === -1) return;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else if (allQuestionsAnswered()) {
        submitQuiz();
    }
}

function previousQuestion() {
    clearTimeout(autoAdvanceTimer);

    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function allQuestionsAnswered() {
    return selectedAnswers.every(answer => answer !== -1);
}

// =========================================================
// UPDATE NAVIGATION
// =========================================================

function updateNavigation() {
    const isFirst = currentQuestion === 0;
    const isLast = currentQuestion === questions.length - 1;
    const currentAnswered = selectedAnswers[currentQuestion] !== -1;
    const allAnswered = allQuestionsAnswered();

    backButton.disabled = isFirst;
    backButton.classList.toggle("hidden", isFirst);

    if (isLast) {
        nextButton.classList.add("hidden");
        submitButton.classList.remove("hidden");
        submitButton.disabled = !allAnswered;
        submitButton.textContent = allAnswered ? "SUBMIT" : "ANSWER ALL QUESTIONS";
    } else {
        submitButton.classList.add("hidden");
        nextButton.classList.remove("hidden");
        nextButton.textContent = "Next →";
        nextButton.disabled = !currentAnswered;
    }
}

// =========================================================
// SUBMIT QUIZ
// =========================================================

function submitQuiz() {
    clearTimeout(autoAdvanceTimer);
    if (!allQuestionsAnswered()) return;

    survivalScore = 0;
    moralityScore = 0;

    selectedAnswers.forEach((answerIndex, questionIndex) => {
        const answer = questions[questionIndex].answers[answerIndex];
        survivalScore += Number(answer[1]) || 0;

        if (answer[2] !== null && answer[2] !== undefined) {
            moralityScore += Number(answer[2]) || 0;
        }
    });

    showResult();
}

// =========================================================
// PERCENTAGE HELPER
// =========================================================

function calculatePercentage(score, maximum) {
    if (!maximum || maximum <= 0) return 0;
    return Math.max(0, Math.min(100, Math.round((score / maximum) * 100)));
}

// =========================================================
// SHOW RESULT
// =========================================================

function showResult() {
    homeInfo?.classList.remove("hidden");
    quizScreen?.classList.add("hidden");
    resultScreen?.classList.remove("hidden");
    suggestionsCard?.classList.remove("hidden");

    const survivalPercentage = calculatePercentage(survivalScore, MAX_SURVIVAL_SCORE);
    const moralityPercentage = calculatePercentage(moralityScore, MAX_MORALITY_SCORE);

    document.getElementById("final-score").textContent = `${survivalPercentage}%`;
    document.getElementById("morality-score").textContent = `${moralityPercentage}%`;

    // Results describe quiz performance, not predicted real-world survival time.
    let title;
    let description;
    let decisionProfile;
    let icon;

    if (survivalPercentage <= 20) {
        title = "High-Risk Decisions";
        description = "Several choices expose you to avoidable risks. Review infection prevention, reliable health advice, emergency preparation, and safe resource management.";
        decisionProfile = "Review outbreak and emergency basics";
        icon = "☣️";
    } else if (survivalPercentage <= 40) {
        title = "Developing Preparedness";
        description = "You recognize some important priorities, but several decisions could be safer. Focus on early medical advice, infection prevention, and planning ahead.";
        decisionProfile = "Build stronger preparedness";
        icon = "🛡️";
    } else if (survivalPercentage <= 60) {
        title = "Capable Decision-Maker";
        description = "You make a mixture of cautious and risky choices. Stronger attention to health guidance, sanitation, supplies, and uncertainty would improve your decisions.";
        decisionProfile = "Core skills present; keep improving";
        icon = "🧭";
    } else if (survivalPercentage <= 80) {
        title = "Strong Outbreak Decisions";
        description = "Your choices often reflect sensible precautions and resource management. You generally consider risk while balancing the needs of others.";
        decisionProfile = "Strong overall decision-making";
        icon = "🛡️";
    } else if (survivalPercentage <= 95) {
        title = "Very Strong Decision-Making";
        description = "You consistently choose cautious, informed responses across most scenarios. You show good awareness of medical advice, prevention, and community needs.";
        decisionProfile = "Very strong preparedness decisions";
        icon = "🏅";
    } else {
        title = "Consistently Safety-Focused";
        description = "You selected the highest-scoring options in nearly every scenario. Your answers show strong attention to prevention, reliable information, and practical planning.";
        decisionProfile = "Exceptional performance on this quiz";
        icon = "🏆";
    }

    document.getElementById("result-title").textContent = title;
    document.getElementById("result-description").textContent = description;
    document.getElementById("survival-time").textContent = decisionProfile;

    // Update the old HTML label if it still says "Estimated Survival".
    const profileLabel = document.querySelector(".survival-box strong");
    if (profileLabel) profileLabel.textContent = "Decision Profile:";

    // The icon is optional; the quiz still works if HTML omits it.
    const resultIcon = document.getElementById("result-icon");
    if (resultIcon) resultIcon.textContent = icon;

    let moralityTitle;
    let moralityDescription;

    if (moralityPercentage <= 20) {
        moralityTitle = "Survival-First Pragmatist";
        moralityDescription = "Your answers tend to prioritize practical outcomes and group security over helping others. Consider where safe, limited support may still be possible.";
    } else if (moralityPercentage <= 40) {
        moralityTitle = "Pragmatic Survivor";
        moralityDescription = "You offer some help, but often place security and practical limits first when resources or safety are uncertain.";
    } else if (moralityPercentage <= 60) {
        moralityTitle = "Balanced Survivor";
        moralityDescription = "You try to balance personal and group safety with fairness, compassion, and responsibility.";
    } else if (moralityPercentage <= 80) {
        moralityTitle = "Compassionate Survivor";
        moralityDescription = "You place considerable value on helping others while still considering risk and limited resources.";
    } else {
        moralityTitle = "Humanitarian";
        moralityDescription = "Your choices strongly emphasize compassion, fairness, and protecting others while navigating difficult situations.";
    }

    document.getElementById("morality-description").textContent = `${moralityTitle} — ${moralityDescription}`;

    progressBar.style.width = "100%";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================================================
// RESTART QUIZ
// =========================================================

function restartQuiz() {
    clearTimeout(autoAdvanceTimer);
    currentQuestion = 0;
    survivalScore = 0;
    moralityScore = 0;
    selectedAnswers = new Array(questions.length).fill(-1);

    resultScreen?.classList.add("hidden");
    quizScreen?.classList.add("hidden");
    startScreen?.classList.remove("hidden");
    homeInfo?.classList.remove("hidden");
    suggestionsCard?.classList.add("hidden");

    progressBar.style.width = "0%";
    submitButton.disabled = true;
    submitButton.textContent = "SUBMIT";
    nextButton.disabled = true;
    nextButton.classList.remove("hidden");
    submitButton.classList.add("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================================================
// SHARE RESULT
// =========================================================

async function shareResult() {
    const title = document.getElementById("result-title").textContent;
    const profile = document.getElementById("survival-time").textContent;
    const finalScore = document.getElementById("final-score").textContent;
    const morality = document.getElementById("morality-score").textContent;
    const quizUrl = "https://apocalypsequizzes.com/plague-survival-test/";

    const shareText =
        `☣️ I scored ${finalScore} on the Plague Survival Test!\n\n` +
        `${title}\n` +
        `Decision profile: ${profile}\n` +
        `Morality score: ${morality}\n\n` +
        `How would YOU handle a major outbreak?`;

    const shareData = {
        title: "Plague Survival Test",
        text: shareText,
        url: quizUrl
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(`${shareText}\n\n${quizUrl}`);
            alert("Your result has been copied! You can paste it anywhere.");
        } else {
            window.prompt("Copy your result:", `${shareText}\n\n${quizUrl}`);
        }
    } catch (error) {
        // User cancellation is normal; no error message is needed.
        if (error?.name !== "AbortError") {
            console.error("Unable to share the result:", error);
        }
    }
}

// =========================================================
// DEVELOPMENT CHECKS
// =========================================================

console.assert(questions.length === 50, `Expected 50 questions, found ${questions.length}.`);

questions.forEach((question, questionIndex) => {
    console.assert(
        question.answers.length === 4,
        `Question ${questionIndex + 1} should have 4 answers.`
    );

    question.answers.forEach((answer, answerIndex) => {
        const [text, survival, morality] = answer;

        console.assert(
            typeof text === "string" && text.trim().length > 0,
            `Question ${questionIndex + 1}, answer ${answerIndex + 1}: missing answer text.`
        );
        console.assert(
            Number.isInteger(survival) && survival >= 0 && survival <= 5,
            `Question ${questionIndex + 1}, answer ${answerIndex + 1}: invalid survival score.`
        );
        console.assert(
            morality === null || (Number.isInteger(morality) && morality >= 0 && morality <= 5),
            `Question ${questionIndex + 1}, answer ${answerIndex + 1}: invalid morality score.`
        );
    });

    const highestSurvival = Math.max(...question.answers.map(answer => answer[1]));
    console.assert(
        highestSurvival === 5,
        `Question ${questionIndex + 1} does not have a Survival 5 option.`
    );
});

console.log(`Plague Survival Test loaded: ${questions.length} questions.`);
console.log(`Maximum Survival Score: ${MAX_SURVIVAL_SCORE}`);
console.log(`Maximum Morality Score: ${MAX_MORALITY_SCORE}`);

// =========================================================
// GLOBAL SITE MENU
// =========================================================

const menuToggle = document.getElementById("menu-toggle");
const siteMenu = document.getElementById("site-menu");

if (menuToggle && siteMenu) {
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        siteMenu.hidden = isOpen;
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    });

    document.addEventListener("click", function (event) {
        if (
            !siteMenu.hidden &&
            !siteMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            siteMenu.hidden = true;
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        }
    });

    siteMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            siteMenu.hidden = true;
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}
