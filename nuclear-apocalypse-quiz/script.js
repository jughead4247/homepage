const questions = [
// Decision 1
{
    question: "It's 8:17 AM. Your phone suddenly displays: BALLISTIC MISSILE THREAT — SEEK SHELTER IMMEDIATELY. Several missiles have reportedly been launched. You may have only minutes.",
    answers: [
        ["Grab your phone, wallet and keys and leave for the nearest major city.", 1, null],
        ["Run outside to see what is happening before deciding.", 0, null],
        ["Get inside the strongest nearby building and move toward its interior.", 5, null],
        ["Call friends and family first to find out what they are doing.", 2, null]
    ]
},

// Decision 2
{
    question: "You have about five minutes and can carry only a small backpack. What do you prioritize?",
    answers: [
        ["Food, bottled water and basic supplies.", 4, null],
        ["Important documents, money, phone, power bank and essential medications.", 5, null],
        ["Weapons and ammunition.", 3, null],
        ["As many valuable possessions as possible.", 1, null]
    ]
},

// Decision 3
{
    question: "You have four possible places nearby. Which do you choose?",
    answers: [
        ["A basement beneath a large concrete building.", 5, null],
        ["Your car inside an underground parking garage.", 4, null],
        ["A small house with large windows but plenty of food.", 2, null],
        ["An open field outside the city.", 0, null]
    ]
},

// Decision 4
{
    question: "The nuclear blast has just occurred. Everyone expected at the reinforced bunker has arrived except your brother. A massive ash and fallout storm is approaching, and the door must be sealed.",
    answers: [
        ["Seal the bunker immediately to protect everyone inside.", 5, 2],
        ["Keep the door open and wait for your brother.", 1, 5],
        ["Try to contact him one final time and give him a few seconds to reach the bunker.", 5, 5],
        ["Send one person outside to search while everyone else waits inside.", 2, 3]
    ]
},

// Decision 5
{
    question: "A blinding flash suddenly lights up the horizon. What do you do?",
    answers: [
        ["Keep watching to estimate where the explosion occurred.", 1, null],
        ["Drop behind substantial cover, turn away and protect yourself.", 5, null],
        ["Run toward the windows to see what happened.", 0, null],
        ["Get into your car and drive immediately.", 2, null]
    ]
},

// Decision 6
{
    question: "Seconds later, the shockwave arrives. The building shakes violently and windows shatter somewhere above you. What is your immediate priority?",
    answers: [
        ["Leave the building before it collapses.", 2, null],
        ["Stay protected until the immediate blast effects pass, then assess the situation.", 5, null],
        ["Go upstairs to check on everyone.", 2, null],
        ["Run outside while the roads are still clear.", 3, null]
    ]
},

// Decision 7
{
    question: "About 20 minutes after the explosion, an emergency broadcast warns that radioactive fallout may be approaching. You are inside a concrete building.",
    answers: [
        ["Stay inside and move as far from exterior walls and the roof as possible.", 5, null],
        ["Leave immediately and drive away.", 1, null],
        ["Go outside to check whether radioactive dust is falling.", 0, null],
        ["Open the windows slightly for ventilation.", 1, null]
    ]
},

// Decision 8
{
    question: "The bunker is sealed. The ash and fallout storm has arrived, and visibility outside is almost zero. You suddenly hear three loud knocks. Someone is outside.",
    answers: [
        ["Open the door immediately.", 0, 3],
        ["Keep it sealed until the storm passes.", 5, 2],
        ["Communicate with the person without opening the door and try to identify them.", 5, 5],
        ["Prepare a controlled entry and open the door only if the risk can be minimized.", 4, 4]
    ]
},

// Decision 9
{
    question: "Several lower-floor windows are damaged, and fine dust has entered the building.",
    answers: [
        ["Stay away from the damaged area and prevent more outside dust from entering where practical.", 5, null],
        ["Open all the windows to flush the dust out.", 1, null],
        ["Sweep the dust toward the doors and outside.", 1, null],
        ["Ignore it. The dust is probably harmless this far away.", 0, null]
    ]
},

// Decision 10
{
    question: "You hear someone calling for help. A man has a serious cut on his leg and is struggling to move. You have basic first-aid supplies.",
    answers: [
        ["Control the bleeding and move him somewhere safer if possible.", 5, 5],
        ["Leave him because you cannot spare supplies for a stranger.", 2, 0],
        ["Tell him to crawl toward you while you stay protected.", 3, 3],
        ["Take him outside so you can treat him in better light.", 1, 1]
    ]
},

// Decision 11
{
    question: "Several hours after the blast, the ash storm has passed and heavy rain begins. Your water supply is limited. Some want to collect the rain or use it to wash fallout from their bodies.",
    answers: [
        ["Go outside and collect as much rainwater as possible.", 1, null],
        ["Take a shower in the rain to wash off fallout.", 0, null],
        ["Stay inside until you have reliable information about contamination.", 5, null],
        ["Collect some rainwater while minimizing exposure and keep it separate until its safety is known.", 4, null]
    ]
},

// Decision 12
{
    question: "The rain has stopped. You collected rainwater, but don't know whether fallout contaminated it. Your drinking water is running low.",
    answers: [
        ["Drink it immediately.", 0, null],
        ["Filter it and drink it.", 2, null],
        ["Keep it separate while using your remaining safe water and seeking reliable information or safer treatment.", 5, null],
        ["Use it for non-drinking purposes while preserving safe drinking water.", 4, null]
    ]
},

// Decision 13
{
    question: "Your phone has no network connection. Someone has found an old battery-powered emergency radio carrying government broadcasts, although the signal cuts out occasionally.",
    answers: [
        ["Ignore it and rely on other survivors.", 1, null],
        ["Keep listening while conserving the batteries for important updates.", 5, null],
        ["Leave the building to find a stronger signal.", 1, null],
        ["Use the batteries for your phone instead.", 2, null]
    ]
},

// Decision 14
{
    question: "On the second day, water pressure drops dramatically. Your group has enough stored drinking water for three days at normal consumption.",
    answers: [
        ["Continue normal consumption until the water runs out.", 1, null],
        ["Begin rationing immediately and search for additional safe water.", 5, null],
        ["Send someone outside to find a working water supply.", 2, null],
        ["Fill every container available, even if the source may be unsafe.", 2, null]
    ]
},

// Decision 15
{
    question: "Your group has about one week of food. A nearby supermarket appears abandoned, but the streets may still be contaminated.",
    answers: [
        ["Send several people immediately to collect as much food as possible.", 2, null],
        ["Stay inside and ration your supplies.", 4, null],
        ["Assess the risks and, if conditions allow, send a small team for essential supplies.", 5, null],
        ["Wait several days and hope the supermarket remains untouched.", 2, null]
    ]
},

// Decision 16
{
    question: "Several days have passed. Your group remains inside the bunker with food and water, but some want to go outside for supplies. You have no radiation meter and don't know the fallout conditions.",
    answers: [
        ["Leave now because several days have passed.", 2, null],
        ["Stay until your supplies are almost exhausted.", 3, null],
        ["Remain sheltered while gathering reliable information and leave when conditions indicate the risk has decreased sufficiently.", 5, null],
        ["Send one person outside briefly to see whether it looks safe.", 1, null]
    ]
},

// Decision 17
{
    question: "You are trying to determine whether your bunker is far enough from the explosion to avoid the blast zone. You don't know the weapon's yield or burst conditions.",
    answers: [
        ["20 km should be enough.", 2, null],
        ["50 km should be enough.", 2, null],
        ["100 km should be enough.", 2, null],
        ["There is no single safe distance without knowing the weapon's yield and other conditions.", 5, null]
    ]
},

// Decision 18
{
    question: "Your bunker is 80 km from the explosion and suffered no blast damage. However, you are downwind and radioactive fallout may be approaching. Someone says, \"We're 80 km away, so we're safe.\"",
    answers: [
        ["Agree. At 80 km there is no meaningful nuclear danger.", 0, null],
        ["Leave immediately before the fallout arrives.", 2, null],
        ["Stay sheltered and monitor reliable information about fallout and wind conditions.", 5, null],
        ["Go outside briefly to see whether fallout is visible.", 1, null]
    ]
},

// Decision 19
{
    question: "You don't know the bomb's size and have no radiation meter. Your group wants to know whether it is safe to leave.",
    answers: [
        ["Check whether an ash or fallout cloud is visible.", 2, null],
        ["Look for black rain; if there isn't any, assume it's safe.", 1, null],
        ["Watch birds and animals; if they seem normal, assume radiation is low.", 1, null],
        ["Don't rely on appearances or animal behavior; seek reliable radiation information or measurements.", 5, null]
    ]
},

// Decision 20
{
    question: "Someone who went outside returns covered in dust. You don't know whether it is radioactive.",
    answers: [
        ["Let them walk directly into the shelter.", 1, 0],
        ["Have them remove potentially contaminated outer clothing and follow appropriate decontamination procedures before entering the clean area.", 5, 5],
        ["Tell them to wash their clothes and keep wearing them.", 2, 2],
        ["Send them back outside until you know whether the dust is dangerous.", 1, 1]
    ]
},

// Decision 21
{
    question: "Late at night, a frightened woman knocks on your building's entrance. She says she was separated from her family and asks for water and shelter.",
    answers: [
        ["Let her inside immediately.", 2, 4],
        ["Refuse to open the door because supplies are limited.", 2, 1],
        ["Speak with her from a protected position, assess the situation and offer limited help if safe.", 5, 5],
        ["Tell her to wait outside while the group decides.", 3, 3]
    ]
},

// Decision 22
{
    question: "Your emergency radio and flashlight use the same batteries. The radio is still receiving occasional government broadcasts.",
    answers: [
        ["Prioritize the radio and keep the flashlight as a backup.", 5, null],
        ["Prioritize the flashlight because you need to see.", 3, null],
        ["Run both normally until the batteries are exhausted.", 1, null],
        ["Abandon the radio and save the batteries for later.", 2, null]
    ]
},

// Decision 23
{
    question: "One member insists that staying inside is becoming too dangerous. They believe functioning communities exist outside the city and want to leave immediately.",
    answers: [
        ["Let them leave alone. Everyone makes their own decisions.", 3, 3],
        ["Stop them from leaving.", 2, 2],
        ["Discuss the risks, gather reliable information and make a group decision based on actual conditions.", 5, 5],
        ["Leave with them immediately.", 2, 3]
    ]
},

// Decision 24
{
    question: "After several nights, you hear movement outside. It could be survivors, criminals, animals or something else. Your 12-person group is already exhausted.",
    answers: [
        ["Keep everyone awake all night.", 2, null],
        ["Establish a rotating watch so others can rest.", 5, null],
        ["Ignore the sounds unless someone enters.", 2, null],
        ["Send several people outside to investigate.", 1, null]
    ]
},

// Decision 25
{
    question: "One member develops vomiting, weakness and severe fatigue after spending several hours outside following the arrival of fallout. Medical supplies are limited.",
    answers: [
        ["Assume radiation sickness and isolate them immediately.", 2, 2],
        ["Ignore the symptoms unless they become life-threatening.", 1, 1],
        ["Move them away from potential contamination, provide basic care and seek reliable medical information if possible.", 5, 5],
        ["Send them outside to a nearby hospital.", 0, 0]
    ]
},

// Decision 26
{
    question: "Your fuel-powered generator has enough fuel for five days of continuous operation. Electricity is useful for refrigeration, medical equipment and communications, but isn't always essential.",
    answers: [
        ["Run it continuously while fuel remains.", 2, null],
        ["Run it only when electricity is genuinely needed.", 5, null],
        ["Use all the fuel now to charge every device.", 2, null],
        ["Trade the fuel to another survivor group for food.", 3, null]
    ]
},

// Decision 27
{
    question: "You have just left your bunker after several days. While traveling, you meet a lone survivor who says people nearby are developing strange mutations because of radiation. You have no way to verify his story.",
    answers: [
        ["Believe him immediately and turn back to the bunker.", 2, null],
        ["Ignore him and continue your journey.", 3, null],
        ["Refuse to believe him unless he can provide proof.", 3, null],
        ["Stay cautious, gather more information and avoid unnecessary risk until you can verify the claim.", 5, null]
    ]
},

// Decision 28
{
    question: "While traveling, you encounter a severely disfigured man. He has unusual physical deformities and is in obvious distress. You don't know whether his condition is caused by radiation, illness, injury or something else. He notices you and tries to approach.",
    answers: [
        ["Kill him because you believe he may be dangerous.", 1, 0],
        ["Leave the area without getting involved.", 3, 3],
        ["Keep your distance and try to communicate with him before deciding what to do.", 5, 5],
        ["Hide and observe him from a distance without revealing your presence.", 4, 3]
    ]
},

// Decision 29
{
    question: "You discover an abandoned government supply facility 15 km away. It may contain useful supplies, but someone else may have occupied it.",
    answers: [
        ["Send your strongest people immediately.", 2, null],
        ["Ignore it and stay where you are.", 2, null],
        ["Gather information and assess whether the potential supplies justify the risks.", 5, null],
        ["Send one person alone to investigate.", 1, null]
    ]
},

// Decision 30
{
    question: "Two members of your group encounter an armed survivor group. They aren't immediately hostile, but they control a nearby warehouse and ask how many people are living in your shelter.",
    answers: [
        ["Tell them everything to encourage cooperation.", 2, 4],
        ["Lie about your numbers and supplies.", 3, 2],
        ["Share limited information without revealing details that could compromise your group's security.", 5, 5],
        ["Threaten them before they can threaten you.", 1, 0]
    ]
},

// Decision 31
{
    question: "You have six bottles of drinking water. The building's water supply is still working, but you don't know how long it will last.",
    answers: [
        ["Drink normally until the supply stops.", 2, null],
        ["Drink as much as possible while water is available.", 1, null],
        ["Start rationing your stored water and preserve access to additional safe water if possible.", 5, null],
        ["Pour the bottles into a larger container for easier transport.", 3, null]
    ]
},

// Decision 32
{
    question: "Several weeks have passed. Your packaged food is running low. You have seeds that could provide future food, but you don't know whether the surrounding soil and water are safe for agriculture.",
    answers: [
        ["Plant all the seeds immediately.", 3, 3],
        ["Eat the seeds now.", 1, 2],
        ["Protect the seeds while rationing food and assessing whether agriculture is safe.", 5, 5],
        ["Plant some seeds while keeping the rest as an emergency reserve.", 5, 4]
    ]
},

// Decision 33
{
    question: "Your food supply will last another two weeks. A nearby agricultural area may still have usable crops, but reaching it requires leaving the relative safety of the city.",
    answers: [
        ["Stay and ration until the food is gone.", 3, null],
        ["Move the entire group there immediately.", 2, null],
        ["Investigate the area before committing the whole group to relocation.", 5, null],
        ["Send everyone except the elderly and injured.", 1, null]
    ]
},

// Decision 34
{
    question: "Two members argue over food distribution. One wants equal portions for everyone. The other believes people doing dangerous work should receive more calories. The dispute is dividing the group.",
    answers: [
        ["Give everyone exactly equal portions.", 4, 4],
        ["Give the hardest workers larger portions.", 4, 5],
        ["Establish transparent rules that consider basic needs and increased physical demands, with group agreement.", 5, 5],
        ["Let the strongest members decide.", 1, 0]
    ]
},

// Decision 35
{
    question: "Your shelter is becoming increasingly unsafe. You have enough supplies for a difficult journey, but staying also carries serious risks.",
    answers: [
        ["Stay permanently because moving is dangerous.", 2, null],
        ["Leave immediately with everyone.", 2, null],
        ["Prepare carefully, gather information and move when staying becomes more dangerous than relocating.", 5, null],
        ["Send scouts first but make no preparations until they return.", 4, null]
    ]
},

// Decision 36
{
    question: "Scouts discover an abandoned town 40 km away with intact buildings, farmland, a water source and a damaged power system. You don't know why it was abandoned.",
    answers: [
        ["Move everyone there immediately.", 1, null],
        ["Ignore it and stay where you are.", 2, null],
        ["Send a small team to investigate before moving everyone.", 5, null],
        ["Wait until another group moves there first.", 3, null]
    ]
},

// Decision 37
{
    question: "Your new settlement has a natural water source, but you don't know whether it is contaminated. Your stored water is running low.",
    answers: [
        ["Drink it immediately.", 0, null],
        ["Use it because it looks clean.", 1, null],
        ["Treat it appropriately and seek reliable information or testing before depending on it.", 5, null],
        ["Refuse to use it and search for bottled water.", 3, null]
    ]
},

// Decision 38
{
    question: "Your group has grown to 31 people. One person can no longer manage everything. You need a system for running the settlement.",
    answers: [
        ["Keep complete control yourself.", 2, 2],
        ["Let the strongest members control the community.", 2, 1],
        ["Establish clear responsibilities, rules and a way for the community to participate in important decisions.", 5, 5],
        ["Let everyone do whatever they think is best.", 1, 1]
    ]
},

// Decision 39
{
    question: "Another settlement offers seeds, medicines and farming tools in exchange for your preserved food, batteries and mechanical equipment. They propose regular trade.",
    answers: [
        ["Trade as much as possible.", 4, 4],
        ["Refuse because your supplies are too valuable.", 2, 2],
        ["Establish controlled trade while protecting essential reserves.", 5, 5],
        ["Demand their supplies before giving anything in return.", 1, 0]
    ]
},

// Decision 40
{
    question: "Several children now live in your settlement. Food is sufficient, but resources remain limited. Some adults believe everyone capable of helping should work full-time.",
    answers: [
        ["Everyone old enough to help should work full-time.", 2, 1],
        ["Give children priority because they cannot protect themselves.", 4, 5],
        ["Protect their basic needs while providing education and age-appropriate responsibilities.", 5, 5],
        ["Send them to another settlement with better resources.", 2, 3]
    ]
},

// Decision 41
{
    question: "One year has passed. Your settlement has 60 people, functioning agriculture, basic medical care, a workshop and contact with two nearby communities. What should your community prioritize?",
    answers: [
        ["Stronger defenses against potentially hostile groups.", 4, 3],
        ["Increasing food production above everything else.", 4, 3],
        ["Build a sustainable community with food, security, education, healthcare, cooperation and disaster preparation.", 5, 5],
        ["Expand aggressively and take control of nearby settlements.", 1, 0]
    ]
},

// Decision 42
{
    question: "Six months after the blast, you find a man suffering from severe radiation-related illness and injuries. He is conscious, in considerable pain and unlikely to survive without significant medical care. Your supplies are limited.",
    answers: [
        ["End his suffering.", 1, 1],
        ["Leave him because your medicine is needed by your group.", 2, 2],
        ["Give him some medicine and try to keep him comfortable.", 4, 4],
        ["Ask what he wants and, if he can make decisions, respect his wishes while providing reasonable help.", 5, 5]
    ]
},

// Decision 43
{
    question: "Your group discovers a young child hiding alone in an abandoned house. The child is frightened and hungry. Your group has enough food for about six weeks.",
    answers: [
        ["Take the child with you.", 5, 5],
        ["Leave food and water and continue with your group.", 2, 3],
        ["Take the child temporarily while searching for relatives or another settlement.", 4, 5],
        ["Talk to the child and decide whether bringing them is realistically possible.", 3, 4]
    ]
},

// Decision 44
{
    question: "Your settlement has one dose of a critical medicine. Two people need it: a skilled engineer who maintains water and power, and an elderly survivor who is seriously ill.",
    answers: [
        ["The engineer because the settlement depends on them.", 4, 3],
        ["The elderly survivor because everyone deserves an equal chance.", 3, 4],
        ["Whoever has the better medical chance of benefiting from it.", 5, 5],
        ["Let the two people decide between themselves.", 2, 4]
    ]
},

// Decision 45
{
    question: "You find an injured man from a group that attacked your settlement weeks ago. He is alone, unarmed and badly injured.",
    answers: [
        ["Leave him because he was your enemy.", 1, 0],
        ["Kill him before he can become a threat again.", 0, 0],
        ["Treat him and bring him back under guard.", 5, 5],
        ["Give him basic supplies and leave him away from your settlement.", 3, 3]
    ]
},

// Decision 46
{
    question: "A member of your settlement secretly hid enough food to feed three people for two weeks. They admit they were afraid the community would run out.",
    answers: [
        ["Confiscate the food and punish them.", 4, 3],
        ["Take the food but forgive them.", 4, 4],
        ["Let them keep it as a personal emergency reserve.", 2, 5],
        ["Discuss it with the community and establish a fair rule for personal reserves.", 5, 5]
    ]
},

// Decision 47
{
    question: "A stranger arrives asking for shelter. They show symptoms of a potentially contagious illness, while your medical supplies are limited.",
    answers: [
        ["Refuse entry completely.", 2, 1],
        ["Let them into the settlement because they need help.", 1, 4],
        ["Isolate them separately while providing basic care and assessing the illness.", 5, 5],
        ["Give them food and medicine but don't allow them to stay.", 4, 3]
    ]
},

// Decision 48
{
    question: "Your radio operator receives a message: \"We have children and elderly people. We need food. Please help.\" Your own supplies are limited, and sending food would shorten your reserves.",
    answers: [
        ["Send food immediately.", 2, 5],
        ["Ignore the message; your settlement comes first.", 3, 1],
        ["Offer a smaller amount while proposing an exchange or cooperation.", 5, 5],
        ["Ask for more information before deciding.", 5, 4]
    ]
},

// Decision 49
{
    question: "A man joins your settlement and becomes extremely useful. He is an excellent hunter and mechanic but has a violent temper and has already threatened another resident. The group wants him expelled.",
    answers: [
        ["Expel him immediately.", 4, 3],
        ["Keep him because his skills are too valuable.", 3, 2],
        ["Give him a clear warning and establish consequences for further threats.", 5, 5],
        ["Let the community vote on whether he should remain.", 4, 4]
    ]
},

// Decision 50
{
    question: "Your settlement discovers another bunker containing enough food and medicine to keep your community alive for another year. However, three survivors already live inside, and they refuse to share.",
    answers: [
        ["Take the bunker by force.", 1, 0],
        ["Leave them alone.", 3, 3],
        ["Offer to trade and establish cooperation.", 5, 5],
        ["Surround the bunker and pressure them into sharing.", 2, 1]
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
let selectedAnswers =
    new Array(questions.length).fill(-1);


// ========================================================
// MAXIMUM SCORES
// ========================================================

const maxSurvivalScore =
    questions.reduce((total, question) => {

        const maxPoints =
            Math.max(
                ...question.answers.map(answer => answer[1])
            );

        return total + maxPoints;

    }, 0);


const maxMoralityScore =
    questions.reduce((total, question) => {

        const moralityValues =
            question.answers
                .map(answer => answer[2])
                .filter(
                    value =>
                        value !== null &&
                        value !== undefined
                );

        if (moralityValues.length === 0) {
            return total;
        }

        return total + Math.max(...moralityValues);

    }, 0);


// ========================================================
// ELEMENTS
// ========================================================

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

const scoreDisplay =
    document.getElementById("score-display");

const questionText =
    document.getElementById("question");

const answersContainer =
    document.getElementById("answers");

const progressBar =
    document.getElementById("progress-bar");


// ========================================================
// EVENTS
// ========================================================

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


// ========================================================
// START QUIZ
// ========================================================

function startQuiz() {

    currentQuestion = 0;

    survivalScore = 0;

    moralityScore = 0;

    selectedAnswers =
        new Array(questions.length).fill(-1);


    startScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    homeInfo.classList.add("hidden");


    if (suggestionsCard) {

        suggestionsCard.classList.add("hidden");

    }


    if (scoreDisplay) {

        scoreDisplay.textContent =
            "SURVIVAL";

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

    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        `Decision ${currentQuestion + 1} of ${questions.length}`;


    questionText.textContent =
        current.question;


    answersContainer.innerHTML =
        "";


    // ====================================================
    // PROGRESS
    // ====================================================

    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    // ====================================================
    // ANSWERS
    // ====================================================

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


            // Restore previous selection

            if (
                selectedAnswers[currentQuestion] === index
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


// ========================================================
// SELECT ANSWER
// ========================================================

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


    // ====================================================
    // AUTOMATIC FORWARD
    // ====================================================

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


// ========================================================
// NEXT QUESTION
// ========================================================

function nextQuestion() {

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


// ========================================================
// PREVIOUS QUESTION
// ========================================================

function previousQuestion() {

    if (
        currentQuestion > 0
    ) {

        currentQuestion--;

        showQuestion();

    }

}


// ========================================================
// CHECK ALL ANSWERS
// ========================================================

function allQuestionsAnswered() {

    return selectedAnswers.every(
        answer =>
            answer !== -1
    );

}


// ========================================================
// UPDATE NAVIGATION
// ========================================================

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


    // ====================================================
    // BACK
    // ====================================================

    backButton.disabled =
        isFirst;


    // ====================================================
    // LAST QUESTION
    // ====================================================

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


    // ====================================================
    // NORMAL QUESTIONS
    // ====================================================

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


// ========================================================
// SUBMIT QUIZ
// ========================================================

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
                questions[questionIndex]
                    .answers[answerIndex];


            // Survival

            survivalScore +=
                answer[1];


            // Morality

            if (
                answer[2] !== null &&
                answer[2] !== undefined
            ) {

                moralityScore +=
                    answer[2];

            }

        }
    );


    showResult();

}


// ========================================================
// SHOW RESULT
// ========================================================

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


    // ====================================================
    // SUGGESTED QUIZZES
    // ====================================================

    if (suggestionsCard) {

        suggestionsCard.classList.remove(
            "hidden"
        );

    }


    // ====================================================
    // SURVIVAL PERCENTAGE
    // ====================================================

    const survivalPercentage =
        Math.round(
            (survivalScore /
                maxSurvivalScore) * 100
        );


    // ====================================================
    // MORALITY PERCENTAGE
    // ====================================================

    const moralityPercentage =
        maxMoralityScore > 0
            ? Math.round(
                (moralityScore /
                    maxMoralityScore) * 100
            )
            : 0;


    document.getElementById(
        "final-score"
    ).textContent =
        survivalPercentage + "%";


    // ====================================================
    // SURVIVAL RESULT
    // ====================================================

    let title;
    let description;
    let survival;


    if (
        survivalPercentage <= 20
    ) {

        title =
            "Unlikely to Survive";

        description =
            "Your choices leave you highly vulnerable in a nuclear apocalypse. Limited preparation, poor risk management, or unsafe decisions could make survival very difficult.";

        survival =
            "Hours to a few days";


    } else if (
        survivalPercentage <= 40
    ) {

        title =
            "Early Survivor";

        description =
            "You could make it through the initial crisis, but long-term survival would be difficult. Better preparation and more careful risk assessment would improve your chances.";

        survival =
            "Several days to a few weeks";


    } else if (
        survivalPercentage <= 60
    ) {

        title =
            "Capable Survivor";

        description =
            "You understand many of the fundamentals of surviving a nuclear disaster. You balance shelter, supplies, information and risk reasonably well.";

        survival =
            "Several weeks to several months";


    } else if (
        survivalPercentage <= 80
    ) {

        title =
            "Apocalypse Survivor";

        description =
            "You make thoughtful survival decisions and understand that long-term survival depends on preparation, resource management, information and cooperation.";

        survival =
            "Several months to several years";


    } else if (
        survivalPercentage <= 95
    ) {

        title =
            "Nuclear Survival Expert";

        description =
            "Your decisions show strong preparation, risk awareness and long-term thinking. You consistently avoid unnecessary exposure and manage resources carefully.";

        survival =
            "Several years or longer";


    } else {

        title =
            "The Last Survivor";

        description =
            "Your decisions consistently prioritize preparation, risk management and sustainable survival. You appear exceptionally prepared for a long-term nuclear apocalypse.";

        survival =
            "Long-term survival";

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


    // ====================================================
    // MORALITY RESULT
    // ====================================================

    document.getElementById(
        "morality-score"
    ).textContent =
        moralityPercentage + "%";


    let moralityTitle;
    let moralityDescription;


    if (
        moralityPercentage <= 20
    ) {

        moralityTitle =
            "Ruthless Survivor";

        moralityDescription =
            "You put survival above almost everything else. In extreme circumstances, you are willing to make difficult choices with limited concern for broader consequences.";


    } else if (
        moralityPercentage <= 40
    ) {

        moralityTitle =
            "Pragmatic Survivor";

        moralityDescription =
            "You care about others, but survival and security usually take priority when resources and safety are limited.";


    } else if (
        moralityPercentage <= 60
    ) {

        moralityTitle =
            "Balanced Survivor";

        moralityDescription =
            "You try to balance survival with compassion. You understand that protecting your group can sometimes require difficult decisions.";


    } else if (
        moralityPercentage <= 80
    ) {

        moralityTitle =
            "Compassionate Survivor";

        moralityDescription =
            "You place considerable value on helping others while still understanding the practical realities of survival.";


    } else {

        moralityTitle =
            "Humanitarian";

        moralityDescription =
            "Even during a catastrophe, you strongly value protecting human life, helping others and maintaining ethical principles.";

    }


    document.getElementById(
        "morality-description"
    ).textContent =
        moralityTitle +
        " — " +
        moralityDescription;


    // ====================================================
    // COMPLETE PROGRESS
    // ====================================================

    progressBar.style.width =
        "100%";


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


    submitButton.disabled =
        true;


    submitButton.textContent =
        "SUBMIT";


    nextButton.classList.remove(
        "hidden"
    );


    submitButton.classList.add(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================================
// SHARE RESULT
// ========================================================

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
        "https://apocalypsequizzes.com/nuclear-apocalypse-quiz/";


    const shareText =
        `☢️ I scored ${finalScore} on the Nuclear Apocalypse Survival Quiz!\n\n` +
        `${title}\n` +
        `Estimated survival: ${survival}\n` +
        `❤️ Morality: ${morality}\n\n` +
        `How long would YOU survive a nuclear apocalypse?`;


    const shareData = {

        title:
            "Nuclear Apocalypse Survival Quiz",

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

        }

        else if (
            navigator.clipboard
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


// ========================================================
// GLOBAL SITE MENU
// ========================================================

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


    // ====================================================
    // OPEN / CLOSE WITH HAMBURGER
    // ====================================================

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


    // ====================================================
    // CLOSE WHEN CLICKING OUTSIDE
    // ====================================================

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


    // ====================================================
    // CLOSE AFTER MENU LINK
    // ====================================================

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