const questions = [

// Decision 1
{
    question: "Your phone warns: BALLISTIC MISSILE THREAT—SEEK SHELTER NOW. Missiles may be minutes away. What do you do?",
    answers: [
        ["Drive toward a larger city, hoping it is safer.", 1, null],
        ["Step outside to check the warning.", 0, null],
        ["Move inside the strongest nearby building.", 5, null],
        ["Call relatives and compare what they have heard.", 2, null]
    ]
},

// Decision 2 — Prioritize sheltering; only collect items immediately within reach
{
    question: "The alert arrives while you're indoors. You have seconds to grab nearby essentials without delaying shelter. What do you take?",
    answers: [
        ["Grab food and water, even if shelter is delayed.", 2, null],
        ["Take nearby medicine, phone, power bank and ID.", 5, null],
        ["Collect valuables and weapons before anything else.", 1, null],
        ["Leave to search for a better-stocked bag.", 0, null]
    ]
},

// Decision 3
{
    question: "Which nearby shelter is best?",
    answers: [
        ["Use a basement under a large concrete building.", 5, null],
        ["Stay in your car inside an underground garage.", 4, null],
        ["Choose a small house with large windows and a food supply.", 2, null],
        ["Choose an open field beyond the city, far from buildings.", 0, null]
    ]
},

// Decision 4 — Replace the fictional “ash and fallout storm” framing
{
    question: "Your brother hasn't reached the shelter, and officials warn fallout may arrive soon. What do you do?",
    answers: [
        ["Secure the shelter and follow official guidance.", 5, 3],
        ["Keep the entrance open until he arrives, whatever happens.", 1, 4],
        ["Try contacting him briefly, then secure the shelter.", 5, 5],
        ["Ask one person to go outside and look for him.", 0, 3]
    ]
},

// Decision 5
{
    question: "A blinding flash appears on the horizon. What do you do?",
    answers: [
        ["Keep watching to judge where the explosion occurred.", 1, null],
        ["Drop behind cover and shield your head and eyes.", 5, null],
        ["Move to a window to see what happened.", 0, null],
        ["Get into your car and leave the area at once.", 2, null]
    ]
},

// Decision 6 — Clarify the immediate action during blast effects
{
    question: "The shockwave hits. The building shakes and windows shatter above you. What now?",
    answers: [
        ["Run outside before the building suffers more damage.", 1, null],
        ["Get low, shield your head, and stay away from windows.", 5, null],
        ["Go upstairs to check on people while the building shakes.", 1, null],
        ["Get into your car and try to drive away immediately.", 2, null]
    ]
},

// Decision 7
{
    question: "A broadcast warns that fallout may be approaching. You're inside a concrete building. What do you do?",
    answers: [
        ["Stay inside, away from exterior walls and the roof.", 5, null],
        ["Leave now and drive as far away as possible, despite fallout.", 1, null],
        ["Step outside to check whether radioactive dust is falling.", 0, null],
        ["Open the windows to improve indoor ventilation.", 1, null]
    ]
},

// Decision 8 — Replace the “ash and fallout storm” framing
{
    question: "Your shelter is sealed during a fallout warning. Someone knocks, but you can't identify them. What now?",
    answers: [
        ["Open the door immediately without checking who is outside.", 0, 4],
        ["Keep it closed until guidance or conditions improve.", 5, 2],
        ["Talk through the door and assess risks before entry.", 5, 5],
        ["Send someone outside to identify and question the visitor.", 0, 3]
    ]
},

// Decision 9
{
    question: "Broken lower-floor windows let fine dust inside. What do you do?",
    answers: [
        ["Avoid the damaged area and block more incoming dust.", 5, null],
        ["Open every nearby window to clear dust from the building.", 1, null],
        ["Sweep dust toward the exit and push it outside.", 1, null],
        ["Ignore it; dust this far away is probably harmless.", 0, null]
    ]
},

// Decision 10
{
    question: "A man with a serious leg cut calls for help. You have basic first-aid supplies. What do you do?",
    answers: [
        ["Stop the bleeding and move him to safety if possible.", 5, 5],
        ["Leave him because you may need supplies later.", 2, 0],
        ["Ask him to crawl toward you while you stay sheltered.", 3, 3],
        ["Move him outside for better light while treating him.", 1, 1]
    ]
},

// Decision 11 — Avoid going outside during a fallout warning to collect rain or wash
{
    question: "Fallout may be present when heavy rain starts. People want to collect rain or wash outdoors. What should you do?",
    answers: [
        ["Go outside and collect rainwater before it stops.", 1, null],
        ["Wash outdoors to remove possible fallout from skin.", 0, null],
        ["Stay sheltered; avoid rainwater and wash off indoors.", 5, null],
        ["Leave containers outside and assume water will be safe.", 1, null]
    ]
},

// Decision 12 — Do not imply ordinary filtering or boiling makes water safe from radioactive contamination
{
    question: "Rainwater collected during possible fallout may be contaminated. Safe drinking water is low. What now?",
    answers: [
        ["Drink it because it looks clear and clean.", 0, null],
        ["Boil or filter it, assuming it removes radiation.", 1, null],
        ["Keep it separate, save safe water and seek advice.", 5, null],
        ["Mix it with bottled water to stretch your supply.", 0, null]
    ]
},

// Decision 13
{
    question: "Your phone has no signal, but an emergency radio receives government updates intermittently. What do you do?",
    answers: [
        ["Ignore radio broadcasts and rely on other survivors.", 1, null],
        ["Check for updates at intervals to conserve batteries.", 5, null],
        ["Leave the building and search for a much stronger signal.", 1, null],
        ["Move the radio batteries to your phone instead.", 2, null]
    ]
},

// Decision 14
{
    question: "On day two, water pressure drops. Stored water will last three days at normal use. What do you do?",
    answers: [
        ["Use stored water normally until it runs out.", 1, null],
        ["Conserve stored water and seek another safe source.", 5, null],
        ["Send someone outside to search for more water.", 2, null],
        ["Fill every container, even if the source seems unsafe.", 2, null]
    ]
},

// Decision 15
{
    question: "You have a week's food. An abandoned supermarket may be contaminated. What do you do?",
    answers: [
        ["Send several people to gather as much food as possible.", 2, null],
        ["Stay inside and ration the food you have.", 4, null],
        ["Assess the risks, then send a small team if safe.", 5, null],
        ["Wait and hope the supermarket remains untouched.", 2, null]
    ]
},

// Decision 16
{
    question: "Days have passed in your stocked bunker. You lack a radiation meter, and some want supplies outside. What now?",
    answers: [
        ["Leave now simply because several days have passed.", 2, null],
        ["Stay inside until supplies are nearly gone.", 3, null],
        ["Check reliable updates, and leave when risks fall.", 5, null],
        ["Send someone outside to check if it looks safe.", 1, null]
    ]
},

// Decision 17
{
    question: "You don't know the weapon's yield or burst conditions. What distance is definitely safe from the blast?",
    answers: [
        ["A distance of 20 km should be enough for most blast conditions.", 2, null],
        ["A distance of 50 km should provide plenty of protection.", 2, null],
        ["A distance of 100 km should be enough to be safe.", 2, null],
        ["No single safe distance applies to every weapon and condition.", 5, null]
    ]
},

// Decision 18
{
    question: "Your bunker is 80 km away and undamaged, but you're downwind. Someone says you're safe. What do you do?",
    answers: [
        ["Agree; 80 km is so far away that fallout is no concern.", 0, null],
        ["Leave immediately before the fallout cloud gets here.", 2, null],
        ["Stay sheltered and follow official fallout updates.", 5, null],
        ["Go outside to check whether you can see the fallout.", 1, null]
    ]
},

// Decision 19
{
    question: "You don't know the weapon's size and have no radiation meter. How can you judge when it's safe to leave?",
    answers: [
        ["Check whether a fallout cloud can be seen.", 2, null],
        ["Look for black rain; if absent, assume it's safe.", 1, null],
        ["Watch animals; normal behavior means radiation is low.", 1, null],
        ["Ignore appearances; seek reliable radiation readings.", 5, null]
    ]
},

// Decision 20 — Make contamination reduction steps specific
{
    question: "Someone returns from outside covered in dust during possible fallout. What should happen before they enter the clean area?",
    answers: [
        ["Let them walk straight into the shelter with the group.", 1, 0],
        ["Remove outer clothes, bag them and wash exposed skin.", 5, 5],
        ["Shake their clothes outside to loosen and remove dust.", 0, 1],
        ["Send them back outside until someone identifies the dust.", 1, 1]
    ]
},

// Decision 21
{
    question: "A frightened woman knocks at night. Separated from her family, she asks for water and shelter. What do you do?",
    answers: [
        ["Let her inside immediately without asking questions.", 2, 4],
        ["Refuse help because your supplies are limited.", 2, 1],
        ["Talk from safety and offer help if it's safe.", 5, 5],
        ["Ask her to wait outside while the group decides.", 3, 3]
    ]
},

// Decision 22 — Use shared batteries strategically
{
    question: "Your radio and flashlight share limited batteries. Government updates come occasionally. What's the best plan?",
    answers: [
        ["Use the radio periodically and flashlight as needed.", 5, null],
        ["Keep both devices on until the batteries run out.", 1, null],
        ["Move the batteries to your phone, despite no signal.", 2, null],
        ["Stop checking updates and save all batteries for later.", 2, null]
    ]
},

// Decision 23
{
    question: "A group member says shelter is too dangerous and wants to leave for another community. What do you do?",
    answers: [
        ["Let them leave alone; everyone can decide for themselves.", 3, 3],
        ["Physically stop them from leaving, even if they disagree.", 2, 2],
        ["Check the risks and updates, then decide together.", 5, 5],
        ["Leave with them at once, without checking current conditions.", 2, 3]
    ]
},

// Decision 24
{
    question: "You hear movement outside at night. It could be people or animals, and your 12-person group is exhausted. What now?",
    answers: [
        ["Keep everyone awake and listening all night.", 2, null],
        ["Set rotating watches so the rest can sleep.", 5, null],
        ["Ignore noises unless someone actually enters.", 2, null],
        ["Send several people outside to investigate.", 1, null]
    ]
},

// Decision 25 — Symptoms alone do not confirm radiation sickness
{
    question: "After possible fallout exposure, a member develops vomiting, weakness and fatigue. What should you do?",
    answers: [
        ["Assume radiation sickness and isolate them without assessment.", 2, 2],
        ["Ignore the symptoms until they become much more severe.", 1, 1],
        ["Move them to a clean area, provide care and seek medical help.", 5, 5],
        ["Send them toward a hospital without checking route or guidance.", 0, 0]
    ]
},

// Decision 26 — Add carbon-monoxide safety for generators
{
    question: "Your generator has fuel for five days. You need power for medicine and communications, but fuel is limited. What plan is best?",
    answers: [
        ["Keep it running to power every device, even nonessential ones.", 2, null],
        ["Operate outdoors, 20+ feet from doors, windows and vents.", 5, null],
        ["Run it in the garage with the door open and windows raised.", 0, null],
        ["Use the fuel now for devices you may not need urgently.", 2, null]
    ]
},

// Decision 27 — Remove the radiation-mutation stereotype
{
    question: "A survivor says a nearby town has unusual illnesses caused by radiation but offers no evidence. What do you do?",
    answers: [
        ["Accept the claim as fact and turn back without checking.", 2, null],
        ["Ignore the warning and continue on your planned route.", 2, null],
        ["Enter the town to inspect the illnesses and look for evidence.", 1, null],
        ["Treat it as unverified and seek reliable information first.", 5, null]
    ]
},

// Decision 28 — Assess behavior and actual risk, not appearance
{
    question: "A badly injured man with unusual symptoms approaches. You don't know the cause. What now?",
    answers: [
        ["Attack first because his unusual appearance seems threatening.", 0, 0],
        ["Keep distance, speak calmly and assess if help is safe.", 5, 5],
        ["Approach him right away and try to examine his injuries.", 2, 4],
        ["Take him to your settlement without assessing the risks.", 1, 4]
    ]
},

// Decision 29 — Test food-safety judgment rather than another supply-run scenario
{
    question: "In a dusty shop, you find canned food and bottled drinks. Some containers leak, bulge or are damaged. What do you choose?",
    answers: [
        ["Use all the food if the contents look normal.", 1, null],
        ["Open every can and bottle to inspect the contents first.", 1, null],
        ["Choose intact, sealed food and avoid damaged containers.", 5, null],
        ["Reject even sealed, intact food from the shop.", 2, null]
    ]
},

// Decision 30
{
    question: "An armed group controlling a warehouse asks how many people live in your shelter. They aren't openly hostile. What do you say?",
    answers: [
        ["Share the full details to build trust and cooperation.", 2, 4],
        ["Give them a false count of your group and supplies.", 3, 2],
        ["Share only basic details that won't endanger your group.", 5, 5],
        ["Threaten them first so they cannot intimidate or pressure you.", 1, 0]
    ]
},

// Decision 31 — Protect safe water instead of repeating the rationing question
{
    question: "You have six sealed bottles of safe water; other sources may be contaminated. How do you protect them?",
    answers: [
        ["Open every bottle and pour them into one container.", 1, null],
        ["Keep bottles sealed and away from possible contamination.", 5, null],
        ["Mix safe bottled water with collected rainwater.", 0, null],
        ["Use bottled water for cleaning and drink untreated water.", 1, null]
    ]
},

// Decision 32
{
    question: "Food is running low after several weeks. You have seeds, but soil and water safety are unknown. What do you do?",
    answers: [
        ["Plant all seeds now, without waiting for safety checks.", 3, 3],
        ["Eat the seeds now to stretch your current food supply.", 1, 2],
        ["Save seeds, ration supplies and check soil and water safety.", 5, 5],
        ["Plant some seeds but keep the rest in reserve for later.", 5, 4]
    ]
},

// Decision 33
{
    question: "Food will last two more weeks. Crops may be available outside the city, but travel is risky. What do you do?",
    answers: [
        ["Stay and ration what remains until food is gone.", 3, null],
        ["Move everyone to the farming area right away.", 2, null],
        ["Inspect the area before moving the whole group.", 5, null],
        ["Send everyone except elderly and injured residents.", 1, null]
    ]
},

// Decision 34
{
    question: "Your group argues over equal food portions versus extra calories for dangerous work. How do you resolve it?",
    answers: [
        ["Give every person exactly the same portion.", 4, 4],
        ["Give larger portions to those doing dangerous work.", 4, 5],
        ["Agree on fair portions for needs and heavy work.", 5, 5],
        ["Let the strongest members decide everyone's portions.", 1, 0]
    ]
},

// Decision 35
{
    question: "Your shelter is becoming unsafe, but moving is risky. You have supplies for a difficult journey. What now?",
    answers: [
        ["Stay for good because travel always carries risks.", 2, null],
        ["Move the whole group immediately, without planning.", 2, null],
        ["Prepare to move when staying is the greater risk.", 5, null],
        ["Send scouts first and delay other preparations.", 4, null]
    ]
},

// Decision 36
{
    question: "Scouts find a town 40 km away with homes, farmland and water, but damaged power. You don't know why it was abandoned. What do you do?",
    answers: [
        ["Move everyone into town before checking the risks.", 1, null],
        ["Ignore the town and remain in your current location.", 2, null],
        ["Send a small team to inspect it before relocating.", 5, null],
        ["Wait until another group moves in and reports back.", 3, null]
    ]
},

// Decision 37 — Do not assume appearance, boiling or ordinary treatment proves water is safe
{
    question: "Your settlement finds natural water that may have fallout contamination. Stored water is low. What now?",
    answers: [
        ["Drink it because it looks clean and clear.", 0, null],
        ["Boil it and assume radioactive material is removed.", 1, null],
        ["Seek testing or official advice before using it.", 5, null],
        ["Reject it even if later tests confirm it's safe.", 2, null]
    ]
},

// Decision 38
{
    question: "Your settlement has 31 people, and one person can't manage everything. What system do you set up?",
    answers: [
        ["Keep total control of the settlement yourself.", 2, 2],
        ["Let the strongest members run the community.", 2, 1],
        ["Set clear roles and rules, with community input.", 5, 5],
        ["Let everyone make their own rules and decisions.", 1, 1]
    ]
},

// Decision 39
{
    question: "A nearby settlement offers seeds, medicine and tools for your food, batteries and equipment. They propose regular trade. What do you do?",
    answers: [
        ["Trade away as much of your stock as possible.", 4, 4],
        ["Refuse every deal because supplies are too valuable.", 2, 2],
        ["Trade carefully while protecting essential reserves.", 5, 5],
        ["Demand their goods before offering anything in return.", 1, 0]
    ]
},

// Decision 40
{
    question: "Children live in your settlement. Food is sufficient, but some adults want everyone old enough to work full-time. What do you do?",
    answers: [
        ["Require all older children to work full-time.", 2, 1],
        ["Prioritize children because they cannot protect themselves.", 4, 5],
        ["Protect their needs, education and age-appropriate tasks.", 5, 5],
        ["Send them to another settlement with more resources.", 2, 3]
    ]
},

// Decision 41
{
    question: "A year later, your 60-person settlement has farms, basic healthcare, a workshop and nearby allies. What should it prioritize?",
    answers: [
        ["Strengthen defenses against possible attackers.", 4, 3],
        ["Increase food production above every other priority.", 4, 3],
        ["Balance food, safety, education, health and cooperation.", 5, 5],
        ["Expand aggressively and take nearby settlements by force.", 1, 0]
    ]
},

// Decision 42 — Replace the ambiguous “End his suffering” choice
{
    question: "A seriously ill survivor is in pain; their prognosis is uncertain and medical supplies are limited. What should you do?",
    answers: [
        ["Stop helping because recovery now seems uncertain.", 1, 1],
        ["Use every supply on them, despite the others' urgent needs.", 2, 4],
        ["Offer comfort, seek advice and allocate medicine fairly.", 5, 5],
        ["Give medicine without checking whether it is suitable.", 0, 1]
    ]
},

// Decision 43 — Make the child-rescue choices distinct
{
    question: "You find a frightened, hungry child alone. Your food lasts six weeks, and relatives are unknown. What do you do?",
    answers: [
        ["Bring the child to safety and seek relatives.", 5, 5],
        ["Leave food and move on without seeking more help.", 1, 2],
        ["Keep the child, without trying to find relatives.", 3, 4],
        ["Send the child alone toward the nearest settlement.", 0, 1]
    ]
},

// Decision 44 — Use fair medical criteria for scarce medicine
{
    question: "Only one dose of critical medicine remains. An engineer and an elderly survivor both need it. How do you choose?",
    answers: [
        ["Choose the engineer because their skills are valuable.", 3, 1],
        ["Choose the elderly survivor because age should decide.", 2, 3],
        ["Choose based on medical urgency and likely benefit.", 5, 5],
        ["Let them decide without knowing the medical facts.", 2, 4]
    ]
},

// Decision 45
{
    question: "You find a badly injured, unarmed man from a group that attacked you weeks ago. What do you do?",
    answers: [
        ["Leave him because he belonged to your enemy group.", 1, 0],
        ["Kill him now in case he becomes a threat again.", 0, 0],
        ["Treat him and bring him back under guard.", 5, 5],
        ["Give supplies and leave him away from your settlement.", 3, 3]
    ]
},

// Decision 46
{
    question: "A member secretly stored enough food for three people for two weeks, fearing shortages. What do you do?",
    answers: [
        ["Confiscate the hidden food and punish the member who hid it.", 4, 3],
        ["Take the hidden food but forgive them for not telling anyone.", 4, 4],
        ["Let them keep it as a personal emergency reserve.", 2, 5],
        ["Discuss it and set fair rules for personal food reserves.", 5, 5]
    ]
},

// Decision 47
{
    question: "A stranger asks for shelter and may have a contagious illness. Supplies are limited. What do you do?",
    answers: [
        ["Refuse entry entirely to protect the rest of the settlement.", 2, 1],
        ["Let them enter because they urgently need help.", 1, 4],
        ["Keep them separate, offer basic care and assess symptoms.", 5, 5],
        ["Give supplies but do not let them stay in the settlement.", 4, 3]
    ]
},

// Decision 48
{
    question: "Another settlement with children and elderly people asks for food. Your supplies are limited. How do you respond?",
    answers: [
        ["Send food immediately, despite the loss to your reserves.", 2, 5],
        ["Ignore the request because your settlement comes first.", 3, 1],
        ["Offer less food and discuss trade or cooperation.", 5, 5],
        ["Ask for more details before deciding whether to help.", 5, 4]
    ]
},

// Decision 49
{
    question: "A skilled hunter and mechanic has threatened another resident. The group wants him expelled. What do you do?",
    answers: [
        ["Expel him immediately to prevent further problems.", 4, 3],
        ["Keep him because his skills are too valuable to lose.", 3, 2],
        ["Warn him and set consequences for any future threats.", 5, 5],
        ["Let the settlement vote on whether he should stay.", 4, 4]
    ]
},

// Decision 50
{
    question: "You find a bunker with a year's food and medicine, occupied by three people who refuse to share. What do you do?",
    answers: [
        ["Take the bunker by force to secure its supplies.", 1, 0],
        ["Leave them alone and search elsewhere for supplies.", 3, 3],
        ["Offer a trade and try to build cooperation.", 5, 5],
        ["Surround them and pressure them to share resources.", 2, 1]
    ]
}

];


// ========================================================
// QUIZ STATE
// ========================================================

let currentQuestion = 0;
let survivalScore = 0;
let moralityScore = 0;

// -1 = unanswered
let selectedAnswers = new Array(questions.length).fill(-1);


// ========================================================
// MAXIMUM SCORES
// ========================================================

const maxSurvivalScore = questions.reduce((total, question) => {
    const maxPoints = Math.max(...question.answers.map(answer => answer[1]));
    return total + maxPoints;
}, 0);

const maxMoralityScore = questions.reduce((total, question) => {
    const moralityValues = question.answers
        .map(answer => answer[2])
        .filter(value => value !== null && value !== undefined);

    if (moralityValues.length === 0) {
        return total;
    }

    return total + Math.max(...moralityValues);
}, 0);


// ========================================================
// ELEMENTS
// ========================================================

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
const scoreDisplay = document.getElementById("score-display");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");


// ========================================================
// EVENTS
// ========================================================

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", shareResult);
challengeButton.addEventListener("click", shareResult);
backButton.addEventListener("click", previousQuestion);
nextButton.addEventListener("click", nextQuestion);
submitButton.addEventListener("click", submitQuiz);


// ========================================================
// START QUIZ
// ========================================================

function startQuiz() {
    currentQuestion = 0;
    survivalScore = 0;
    moralityScore = 0;
    selectedAnswers = new Array(questions.length).fill(-1);

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    homeInfo.classList.add("hidden");

    if (suggestionsCard) {
        suggestionsCard.classList.add("hidden");
    }

    if (scoreDisplay) {
        scoreDisplay.textContent = "SURVIVAL";
    }

    showQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ========================================================
// SHOW QUESTION
// ========================================================

function showQuestion() {
    const current = questions[currentQuestion];

    questionNumber.textContent = `Decision ${currentQuestion + 1} of ${questions.length}`;
    questionText.textContent = current.question;
    answersContainer.innerHTML = "";

    // Progress
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Answers
    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer";
        button.type = "button";
        button.textContent = answer[0];

        // Restore previous selection
        if (selectedAnswers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answersContainer.appendChild(button);
    });

    updateNavigation();
}


// ========================================================
// SELECT ANSWER
// ========================================================

function selectAnswer(answerIndex) {
    selectedAnswers[currentQuestion] = answerIndex;

    const buttons = answersContainer.querySelectorAll(".answer");
    buttons.forEach((button, index) => {
        button.classList.toggle("selected", index === answerIndex);
    });

    updateNavigation();

    const questionAtSelection = currentQuestion;

    // Automatically advance after selection, unless the user has navigated elsewhere.
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


// ========================================================
// NEXT QUESTION
// ========================================================

function nextQuestion() {
    if (selectedAnswers[currentQuestion] === -1) {
        return;
    }

    if (currentQuestion === questions.length - 1) {
        if (allQuestionsAnswered()) {
            submitQuiz();
        }
        return;
    }

    currentQuestion++;
    showQuestion();
}


// ========================================================
// PREVIOUS QUESTION
// ========================================================

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}


// ========================================================
// CHECK ALL ANSWERS
// ========================================================

function allQuestionsAnswered() {
    return selectedAnswers.every(answer => answer !== -1);
}


// ========================================================
// UPDATE NAVIGATION
// ========================================================

function updateNavigation() {
    const isFirst = currentQuestion === 0;
    const isLast = currentQuestion === questions.length - 1;
    const currentAnswered = selectedAnswers[currentQuestion] !== -1;
    const allAnswered = allQuestionsAnswered();

    // Back
    backButton.disabled = isFirst;

    // Last question
    if (isLast) {
        nextButton.classList.add("hidden");
        submitButton.classList.remove("hidden");
        submitButton.disabled = !allAnswered;
        submitButton.textContent = allAnswered ? "SUBMIT" : "ANSWER ALL QUESTIONS";
    } else {
        // Normal questions
        submitButton.classList.add("hidden");
        nextButton.classList.remove("hidden");
        nextButton.textContent = "Next →";
        nextButton.disabled = !currentAnswered;
    }
}


// ========================================================
// SUBMIT QUIZ
// ========================================================

function submitQuiz() {
    if (!allQuestionsAnswered()) {
        return;
    }

    survivalScore = 0;
    moralityScore = 0;

    selectedAnswers.forEach((answerIndex, questionIndex) => {
        const answer = questions[questionIndex].answers[answerIndex];

        // Survival
        survivalScore += answer[1];

        // Morality / compassion-and-ethics score
        if (answer[2] !== null && answer[2] !== undefined) {
            moralityScore += answer[2];
        }
    });

    showResult();
}


// ========================================================
// SHOW RESULT
// ========================================================

function showResult() {
    homeInfo.classList.remove("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    // Suggested quizzes
    if (suggestionsCard) {
        suggestionsCard.classList.remove("hidden");
    }

    // Survival decision percentage
    const survivalPercentage = Math.round((survivalScore / maxSurvivalScore) * 100);

    // Morality / compassion-and-ethics percentage
    const moralityPercentage = maxMoralityScore > 0
        ? Math.round((moralityScore / maxMoralityScore) * 100)
        : 0;

    document.getElementById("final-score").textContent = survivalPercentage + "%";

    // ====================================================
    // SURVIVAL DECISION PROFILE
    // This quiz does not predict real-world survival time.
    // ====================================================

    let title;
    let description;
    let survival;

    if (survivalPercentage <= 20) {
        title = "High-Risk Choices";
        description = "Several of your choices overlook important safety priorities. Review immediate sheltering, fallout protection and safe water decisions.";
        survival = "Review sheltering and contamination basics";
    } else if (survivalPercentage <= 40) {
        title = "Needs More Preparation";
        description = "You recognize some survival priorities, but several decisions could expose you to avoidable risks. Practice assessing hazards and protecting essential supplies.";
        survival = "Build stronger emergency preparedness";
    } else if (survivalPercentage <= 60) {
        title = "Developing Survival Judgment";
        description = "You understand several important survival principles. More attention to sheltering, reliable information and contamination risks would strengthen your decisions.";
        survival = "Core skills present; keep improving";
    } else if (survivalPercentage <= 80) {
        title = "Strong Survival Decisions";
        description = "Your choices generally favor sensible risk assessment, careful resource use and cooperation. You also recognize that reliable information matters.";
        survival = "Strong overall decision-making";
    } else if (survivalPercentage <= 95) {
        title = "Very Strong Safety Judgment";
        description = "You consistently select safety-focused options across most scenarios. Your answers show careful thinking about immediate hazards and longer-term needs.";
        survival = "Very strong preparedness decisions";
    } else {
        title = "Consistently Safety-Focused";
        description = "You selected the highest-scoring options in nearly every scenario. You show strong awareness of sheltering, risk management and community needs.";
        survival = "Exceptional performance on this quiz";
    }

    document.getElementById("result-title").textContent = title;
    document.getElementById("result-description").textContent = description;
    document.getElementById("survival-time").textContent = survival;

    // ====================================================
    // COMPASSION & ETHICS RESULT
    // ====================================================

    document.getElementById("morality-score").textContent = moralityPercentage + "%";

    let moralityTitle;
    let moralityDescription;

    if (moralityPercentage <= 20) {
        moralityTitle = "Survival-First Decisions";
        moralityDescription = "Your answers tend to prioritize security and immediate survival over helping others. Consider where basic care, fairness and cooperation can be maintained without creating unreasonable risks.";
    } else if (moralityPercentage <= 40) {
        moralityTitle = "Pragmatic Decisions";
        moralityDescription = "You show some concern for others, while often prioritizing security and limited resources. Fair rules can help balance these competing needs.";
    } else if (moralityPercentage <= 60) {
        moralityTitle = "Balanced Decisions";
        moralityDescription = "Your answers show a mix of self-protection and concern for others. You recognize that difficult situations require both practical judgment and compassion.";
    } else if (moralityPercentage <= 80) {
        moralityTitle = "Compassionate Decisions";
        moralityDescription = "You place considerable value on helping others while still recognizing practical limits on safety and resources.";
    } else {
        moralityTitle = "Humanitarian Decisions";
        moralityDescription = "Your answers strongly emphasize protecting human life, helping others and using fair principles, while still making decisions within the scenarios' constraints.";
    }

    document.getElementById("morality-description").textContent =
        moralityTitle + " — " + moralityDescription;

    // Complete progress
    progressBar.style.width = "100%";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ========================================================
// RESTART QUIZ
// ========================================================

function restartQuiz() {
    currentQuestion = 0;
    survivalScore = 0;
    moralityScore = 0;
    selectedAnswers = new Array(questions.length).fill(-1);

    resultScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    homeInfo.classList.remove("hidden");

    if (suggestionsCard) {
        suggestionsCard.classList.add("hidden");
    }

    progressBar.style.width = "0%";
    submitButton.disabled = true;
    submitButton.textContent = "SUBMIT";
    nextButton.classList.remove("hidden");
    submitButton.classList.add("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ========================================================
// SHARE RESULT
// ========================================================

async function shareResult() {
    const title = document.getElementById("result-title").textContent;
    const survival = document.getElementById("survival-time").textContent;
    const finalScore = document.getElementById("final-score").textContent;
    const morality = document.getElementById("morality-score").textContent;

    const quizUrl = "https://apocalypsequizzes.com/nuclear-apocalypse-quiz/";

    const shareText =
        `☢️ I scored ${finalScore} on the Nuclear Apocalypse Survival Quiz!\n\n` +
        `${title}\n` +
        `Decision profile: ${survival}\n` +
        `❤️ Compassion & Ethics: ${morality}\n\n` +
        `How would YOU handle a nuclear apocalypse?`;

    const shareData = {
        title: "Nuclear Apocalypse Survival Quiz",
        text: shareText,
        url: quizUrl
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(shareText + "\n\n" + quizUrl);
            alert("Your result has been copied! You can paste it anywhere.");
        } else {
            alert(shareText + "\n\n" + quizUrl);
        }
    } catch (error) {
        // Sharing can be cancelled by the user; no action is needed.
        console.log("Sharing cancelled.");
    }
}


// ========================================================
// GLOBAL SITE MENU
// ========================================================

const menuToggle = document.getElementById("menu-toggle");
const siteMenu = document.getElementById("site-menu");

if (menuToggle && siteMenu) {
    // Open / close with hamburger
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();

        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        siteMenu.hidden = isOpen;
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    });

    // Close when clicking outside
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

    // Close after menu link
    siteMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            siteMenu.hidden = true;
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}
