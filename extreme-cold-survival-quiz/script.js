const extremeColdSurvivalQuestions = [

    // PART 1 — IMMEDIATE SURVIVAL: COLD, SHELTER AND INJURIES

    {
        question: "The Last Heater Fails: A storm is coming, fuel will last three days, and temperatures are falling. What do you do first?",
        answers: [
            ["Heat fewer rooms on a rotating schedule.", 4, null],
            ["Keep normal heating until the storm arrives.", 1, null],
            ["Burn spare furniture to stretch the fuel.", 2, null],
            ["Move everyone into one insulated room and ration heat.", 5, null]
        ]
    },

    {
        question: "You're Overheating While Travelling: You're hauling a sled through deep snow. Sweat is soaking your clothes, but the wind is freezing.",
        answers: [
            ["Adjust your layers before sweating worsens.", 5, null],
            ["Remove most insulation for the entire journey.", 1, null],
            ["Keep moving and change clothes at shelter.", 2, null],
            ["Stop for a long rest in the wind.", 0, null]
        ]
    },

    {
        question: "Your Companion Becomes Confused: After hours outside, your companion stumbles, slurs their speech and becomes unusually sleepy.",
        answers: [
            ["Give them a strong drink and let them rest.", 0, null],
            ["Place them directly beside a hot stove.", 0, null],
            ["Shelter them, remove wet clothes, insulate them, gently warm their core and seek urgent help.", 5, null],
            ["Keep them walking to stay active.", 1, null]
        ]
    },

    {
        question: "You Suspect Frostbite: Your fingers are numb, pale and waxy. You're now inside a warm shelter.",
        answers: [
            ["Protect them, seek medical care and rewarm safely if refreezing is avoidable.", 5, null],
            ["Rub them firmly to restore circulation.", 0, null],
            ["Protect them and return to work when pain fades.", 1, null],
            ["Hold them close to an open flame.", 0, null]
        ]
    },

    {
        question: "Your Shelter Is Losing Heat: An abandoned house has broken windows and enough material to repair only part of it.",
        answers: [
            ["Heat every room before making repairs.", 1, null],
            ["Seal drafts and concentrate in one room.", 5, null],
            ["Repair the largest window first.", 2, null],
            ["Leave broken windows unrepaired and rely on the fire.", 1, null]
        ]
    },

    {
        question: "Stranded in a Blizzard: You have a tarp, two blankets and a shovel. Visibility is near zero, and shelter is kilometres away.",
        answers: [
            ["Build a windbreak nearby and mark your location.", 5, null],
            ["Dig into the snow without checking the site.", 2, null],
            ["Keep walking until familiar landmarks reappear.", 1, null],
            ["Split up to search for separate shelters.", 0, null]
        ]
    },

    {
        question: "Your Boots Have Been Wet for Two Days: Your feet are numb, swollen and painful. You have one dry pair of socks left.",
        answers: [
            ["Warm your feet directly beside a fire.", 0, null],
            ["Tighten your wet boots and keep walking.", 1, null],
            ["Take shelter, dry your feet and seek medical care.", 5, null],
            ["Save them for the next long journey.", 1, null]
        ]
    },

    {
        question: "The Silent Poisoning: Everyone wakes with headaches, nausea and dizziness. Your fuel-burning heater seems normal, and nobody smells anything unusual.",
        answers: [
            ["Open a window but keep the heater running.", 1, null],
            ["Give everyone water and wait for improvement.", 0, null],
            ["Turn up the heat and stay indoors.", 0, null],
            ["Move everyone outdoors immediately and seek emergency help.", 5, null]
        ]
    },

    {
        question: "The Clothing Shortage: Blankets are plentiful, but dry gloves, socks and insulating layers are scarce. A shipment may arrive next week.",
        answers: [
            ["Reserve the remaining clothing for strong workers.", 3, 2],
            ["Prioritise vulnerable people and limit outdoor work.", 5, 5],
            ["Distribute it equally regardless of exposure.", 3, 3],
            ["Store the clothing for a worse emergency.", 2, 2]
        ]
    },

    {
        question: "The Collapsing Roof: Heavy snow weighs on your shelter, and the beams begin creaking. Clearing the roof would expose workers to dangerous conditions.",
        answers: [
            ["Send workers onto the roof immediately.", 0, null],
            ["Keep everyone inside until the storm passes.", 1, null],
            ["Cut through the roof to release the snow.", 1, null],
            ["Move everyone out of the danger zone and seek safer shelter.", 5, null]
        ]
    },


    // PART 2 — WATER AND FROZEN INFRASTRUCTURE

    {
        question: "Snow Near an Industrial Site: Your water is nearly gone. Fresh snow covers the ground around an abandoned factory and a busy road.",
        answers: [
            ["Collect the deepest snow near the factory.", 1, null],
            ["Mix snow from several places and inspect the meltwater.", 1, null],
            ["Remove the top layer and collect roadside snow.", 0, null],
            ["Find a cleaner source away from contamination.", 5, null]
        ]
    },

    {
        question: "The Dangerous River: A fast river is nearby, but ice covers its banks. You have no rope or rescue equipment.",
        answers: [
            ["Find a safer collection point or another source.", 5, null],
            ["Walk onto the ice to reach the current.", 0, null],
            ["Send the lightest person across first.", 0, null],
            ["Break a hole near the bank and lean over.", 0, null]
        ]
    },

    {
        question: "Water Uses Too Much Fuel: Snow is plentiful, but fuel is scarce. You need daily drinking water and must also cook.",
        answers: [
            ["Melt only one drink at a time.", 2, null],
            ["Eat snow directly to save fuel.", 0, null],
            ["Wait until everyone feels thirsty.", 1, null],
            ["Melt batches and insulate the containers.", 5, null]
        ]
    },

    {
        question: "Your Water Tank Smells Strange: Stored water has developed an unusual smell, and you don't know why.",
        answers: [
            ["Find another source and investigate the cause.", 5, null],
            ["Add salt to make the water safer.", 0, null],
            ["Keep drinking it but avoid cooking with it.", 0, null],
            ["Boil it and assume every contaminant is gone.", 1, null]
        ]
    },

    {
        question: "The Pipes Are Frozen: Your pump works, but the house pipes are frozen. You have basic tools, insulation and a portable heater.",
        answers: [
            ["Thaw accessible pipes gradually and check for leaks.", 5, null],
            ["Strike the pipes to break the ice.", 0, null],
            ["Run the pump continuously until water returns.", 1, null],
            ["Apply an open flame to frozen joints.", 0, null]
        ]
    },

    {
        question: "Water Must Last Seven Days: Twelve people share one tank, and you don't know when another source will be available.",
        answers: [
            ["Let everyone take water whenever needed.", 1, 3],
            ["Give most water to people doing physical work.", 2, 2],
            ["Divide supplies equally without tracking usage.", 2, 4],
            ["Track essential uses and ration carefully.", 5, 5]
        ]
    },

    {
        question: "The Water Pump Stops: Your settlement's electric pump fails during a freezing night. Stored water is limited, and spare parts are scarce.",
        answers: [
            ["Connect an unrelated motor and test it immediately.", 1, null],
            ["Wait for grid power before making a backup plan.", 1, null],
            ["Check compatibility and attempt a controlled repair.", 5, null],
            ["Abandon the pump and melt snow indefinitely.", 2, null]
        ]
    },

    {
        question: "The Frozen Sewage System: Sewage backs up near your water storage after the waste system freezes. You cannot abandon the settlement overnight.",
        answers: [
            ["Keep using the system while avoiding the backup.", 0, null],
            ["Protect drinking water and establish temporary sanitation.", 5, null],
            ["Pour chemicals into the drains and wait.", 1, null],
            ["Move the water tank without changing waste handling.", 2, null]
        ]
    },


    // PART 3 — TRAVEL THROUGH A FROZEN WORLD

    {
        question: "Two Routes to Safety: Strong winds are forecast. The exposed plateau is shorter, while the sheltered forest route takes twice as long. Your supplies can cover the longer journey if rationed.",
        answers: [
            ["Choose the sheltered forest route and ration supplies.", 5, null],
            ["Follow whichever route has the freshest tracks.", 1, null],
            ["Let the fastest travellers decide.", 1, null],
            ["Take the plateau to save a day's food.", 2, null]
        ]
    },

    {
        question: "Your Vehicle Is Stranded: Deep snow blocks the road. Your engine works, and the vehicle offers shelter, but the settlement is far away.",
        answers: [
            ["Keep revving until the vehicle moves.", 1, null],
            ["Stay inside, clear the exhaust, ventilate and signal; run the engine intermittently.", 5, null],
            ["Leave everything and start walking.", 2, null],
            ["Sleep outside beside the vehicle to save fuel.", 0, null]
        ]
    },

    {
        question: "A Frozen Lake Shortcut: Crossing a frozen lake would save hours, but you can't judge the ice thickness. A longer road is available.",
        answers: [
            ["Send the heaviest person to test the ice.", 0, null],
            ["Take the road unless the ice is reliably assessed.", 5, null],
            ["Follow a previous traveller's footprints.", 1, null],
            ["Walk where the snow looks thickest.", 1, null]
        ]
    },

    {
        question: "A Whiteout Erases the Trail: Your compass works, but landmarks vanish. Two companions are exhausted, and the wind is worsening.",
        answers: [
            ["Keep moving in the original direction.", 1, null],
            ["Find shelter and reassess navigation and conditions.", 5, null],
            ["Send a scout ahead for a landmark.", 2, null],
            ["Follow faint tracks until they reach a road.", 1, null]
        ]
    },

    {
        question: "Your Injured Companion Falls Behind: Your companion has a serious leg injury. Supplies are limited, and shelter may close at sunset.",
        answers: [
            ["Make them walk through the pain.", 0, null],
            ["Leave food and mark their location.", 1, null],
            ["Continue quickly and send help later.", 1, null],
            ["Stabilise the injury and reassess transport and timing.", 5, null]
        ]
    },

    {
        question: "The Freezing-Rain Disaster: Your group is halfway through a supply run when snow turns to freezing rain. Clothes get wet, footing worsens and visibility drops.",
        answers: [
            ["Continue before conditions worsen further.", 2, null],
            ["Split up so part of the group can finish.", 0, null],
            ["Seek shelter, protect wet clothing and reassess the journey.", 5, null],
            ["Take shelter and abandon the supplies permanently.", 2, null]
        ]
    },

    {
        question: "The Bridge Nobody Inspected: A wooden bridge spans a frozen river. A recent thaw has cracked the ice around its supports, and one support appears shifted.",
        answers: [
            ["Send one person across while the convoy waits.", 1, null],
            ["Avoid crossing until it's checked; seek another route if uncertain.", 5, null],
            ["Cross quickly before it deteriorates further.", 0, null],
            ["Send the heaviest vehicle to test it.", 0, null]
        ]
    },

    {
        question: "The Slope Above Your Settlement: Fresh cracks appear on a snow-covered slope above your home. More snow is forecast, but relocating would be costly.",
        answers: [
            ["Stay because previous storms caused no disaster.", 1, null],
            ["Send workers up to remove the snow.", 0, null],
            ["Move people out of the potential slide path and plan a safe evacuation.", 5, null],
            ["Move everyone without checking escape routes.", 2, null]
        ]
    },

    {
        question: "The Fogged Goggles: Frost keeps fogging your scout's goggles. Removing them improves vision briefly but exposes their face to severe cold.",
        answers: [
            ["Continue because stopping delays the group.", 1, null],
            ["Have the scout follow closely behind someone.", 2, null],
            ["Remove the goggles for the rest of the journey.", 0, null],
            ["Stop in shelter, clear the lenses and adjust the goggles before continuing.", 5, null]
        ]
    },

    {
        question: "The Last Dogs Are Exhausted: Your sled dogs have travelled for days, and one person is also struggling. The next shelter is still far away.",
        answers: [
            ["Assess the dogs, people and remaining options.", 5, 5],
            ["Feed the dogs your remaining food and continue.", 2, 3],
            ["Push the dogs harder to reach shelter.", 1, 0],
            ["Abandon the sled and walk immediately.", 2, 2]
        ]
    },


    // PART 4 — POWER, MEDICINE AND COMMUNICATION

    {
        question: "Solar Panels Under Snow: Your panels sit on an icy roof, and your batteries are nearly depleted. Clearing snow could restore power.",
        answers: [
            ["Climb up immediately and clear the panels.", 0, null],
            ["Assess safe access and clear reachable panels.", 5, null],
            ["Leave them covered until the battery dies.", 1, null],
            ["Use the generator for every electrical device.", 2, null]
        ]
    },

    {
        question: "Your Last Battery: It can power one device for several hours: a radio, navigation unit, medical monitor or work lamp.",
        answers: [
            ["Save it for a possible future emergency.", 2, null],
            ["Divide the charge equally among all devices.", 2, null],
            ["Power the most critical service first.", 5, null],
            ["Use the lamp to make work easier.", 1, null]
        ]
    },

    {
        question: "The Generator Develops a Fault: Your mechanic is sick, but you have the manual, basic tools and spare parts.",
        answers: [
            ["Follow the manual and inspect it safely.", 5, null],
            ["Run it harder to see whether it recovers.", 0, null],
            ["Replace parts randomly until it starts.", 1, null],
            ["Strip it for parts before finding the fault.", 1, null]
        ]
    },

    {
        question: "A Weak Radio Signal: Every evening, you hear a possible settlement, distress beacon or automated transmitter. Battery power is limited.",
        answers: [
            ["Leave immediately in the signal's direction.", 1, null],
            ["Transmit continuously until someone responds.", 1, null],
            ["Make brief contact attempts, log the signal and plan a cautious investigation.", 5, null],
            ["Ignore it because the source is uncertain.", 2, null]
        ]
    },

    {
        question: "The Clinic Refrigerator Fails: Insulin and other sensitive medicines may have been stored outside their required temperatures. You don't know for how long.",
        answers: [
            ["Check records and seek guidance on safe use.", 5, null],
            ["Discard everything without checking its history.", 2, null],
            ["Use medicines that look normal.", 1, null],
            ["Freeze everything to preserve it.", 0, null]
        ]
    },

    {
        question: "The Train's Power Shortage: Your mobile settlement has limited power. Food production, heating and water all need electricity.",
        answers: [
            ["Keep food production at full power.", 2, null],
            ["Divide electricity equally among all carriages.", 1, null],
            ["Prioritise essentials and reduce operating schedules.", 5, null],
            ["Shut down food production to preserve heat.", 2, null]
        ]
    },


    // PART 5 — SETTLEMENTS, TRUST AND CONFLICT

    {
        question: "Mercenaries Demand Half Your Supplies: An armed group claims it controls the only safe road to a warmer settlement.",
        answers: [
            ["Offer all your fuel to make them leave.", 2, null],
            ["Negotiate while protecting your group and options.", 5, null],
            ["Hand over supplies before they become hostile.", 2, null],
            ["Refuse and challenge them to a fight.", 1, null]
        ]
    },

    {
        question: "An Injured Stranger Arrives: A stranger claims raiders attacked their caravan. They know an untouched warehouse's location but may have been followed.",
        answers: [
            ["Turn them away without hearing their story.", 2, 1],
            ["Provide basic aid and assess the risks.", 5, 5],
            ["Confine them until they reveal the route.", 1, 0],
            ["Let them in and show them your stores.", 2, 3]
        ]
    },

    {
        question: "Your Engineer Demands Privileges: Your only generator expert demands extra food and permanent authority over the settlement.",
        answers: [
            ["Negotiate duties while training backup workers.", 5, 5],
            ["Agree because the engineer is irreplaceable.", 3, 2],
            ["Give them control of all food and fuel.", 2, 0],
            ["Remove them and hope someone learns the job.", 2, 2]
        ]
    },

    {
        question: "Refugees Arrive During a Storm: Ten people reach your shelter, which fits six comfortably. A nearby outbuilding needs repairs, and supplies are low.",
        answers: [
            ["Assess needs and safely expand capacity.", 5, 5],
            ["Admit the first six people who arrive.", 3, 3],
            ["Admit everyone without checking the shelter's limits.", 1, 3],
            ["Turn everyone away to protect existing supplies.", 3, 1]
        ]
    },

    {
        question: "Unequal Heat Distribution: Central rooms stay warm, but distant families use more fuel and suffer repeated failures. The system favours those who settled first.",
        answers: [
            ["Keep current allocation to avoid disputes.", 2, 2],
            ["Move everyone into the central rooms immediately.", 2, 3],
            ["Assess heat loss and redistribute by need.", 5, 5],
            ["Give every room the same fuel allowance.", 3, 3]
        ]
    },

    {
        question: "The Settlement Wants to Split: One faction wants to stay; another wants half the supplies to seek warmer territory. The disagreement is turning dangerous.",
        answers: [
            ["Verify the alternative and consider a safe scouting mission.", 5, 4],
            ["Forbid departure and use force if necessary.", 2, 0],
            ["Let the largest faction take all the supplies.", 1, 1],
            ["Split supplies without checking either group's prospects.", 2, 3]
        ]
    },

    {
        question: "Two Enemies Share One Cabin: Two armed strangers arrive during a blizzard. Each claims the other is dangerous, and neither wants to share the shelter.",
        answers: [
            ["Make them settle their dispute before helping.", 1, 0],
            ["Separate them, establish rules and assess the risk.", 5, 5],
            ["Shelter one person and send the other away.", 3, 2],
            ["Take their weapons and assume the conflict is over.", 3, 2]
        ]
    },

    {
        question: "Your Settlement Must Choose a Leader: The current leader hides food shortages. A challenger promises equality but lacks management experience.",
        answers: [
            ["Keep the leader because stability matters most.", 3, 2],
            ["Split leadership between both candidates.", 2, 3],
            ["Replace them because secrecy is unacceptable.", 2, 2],
            ["Demand transparent records and shared oversight.", 5, 5]
        ]
    },


    // PART 6 — LONG-TERM SURVIVAL AND CRITICAL DECISIONS

    {
        question: "A Sudden Thaw Threatens Your Shelter: Snow melts rapidly, and water begins pooling around buildings and storage areas.",
        answers: [
            ["Stay indoors until temperatures fall again.", 1, null],
            ["Check drainage and protect critical supplies.", 5, null],
            ["Move supplies uphill without checking flood paths.", 2, null],
            ["Start planting while the weather is warm.", 2, null]
        ]
    },

    {
        question: "The Medical Supply Run: A survivor's wound is worsening. An abandoned clinic may have supplies, but reaching it means crossing an exposed street in severe weather.",
        answers: [
            ["Wait until the injured person cannot walk.", 1, null],
            ["Send the fastest person alone.", 2, null],
            ["Send a prepared team only if the route is passable; set a return time.", 5, null],
            ["Search every nearby building before choosing a route.", 2, null]
        ]
    },

    {
        question: "Your Settlement Is Running Out of Food: You have ten days of food. A nearby colony has stopped responding, and an expedition might find supplies.",
        answers: [
            ["Send strong workers without a return plan.", 1, null],
            ["Send a prepared team with a return plan.", 5, null],
            ["Wait until the food is nearly gone.", 1, null],
            ["Divide rations and hope for contact.", 2, null]
        ]
    },

    {
        question: "Twelve Days of Food Remain: Storms may block travel for three weeks. Some residents want smaller meals now; others fear morale will collapse.",
        answers: [
            ["Keep normal meals until the storm begins.", 2, 3],
            ["Permanently skip the largest daily meal.", 2, 3],
            ["Adjust portions to the shortage and track reserves.", 5, 5],
            ["Give extra food to whoever complains most.", 1, 1]
        ]
    },

    {
        question: "An Abandoned Supermarket: The store has been without power for weeks. You can carry little and have one hour before dark.",
        answers: [
            ["Collect the heaviest items first.", 2, null],
            ["Prioritise packaged, shelf-stable food.", 5, null],
            ["Explore every aisle before choosing supplies.", 1, null],
            ["Search refrigerated goods at the back.", 0, null]
        ]
    },

    {
        question: "Your Greenhouse Is Damaged: Cracked panels and frozen soil limit production. You have materials to repair only a small area.",
        answers: [
            ["Plant the fastest-growing seeds immediately.", 3, null],
            ["Heat the whole greenhouse before repairs.", 1, null],
            ["Abandon farming until the climate improves.", 1, null],
            ["Seal leaks and insulate a smaller growing area.", 5, null]
        ]
    },

    {
        question: "Months Without Sunlight: Outdoor crops have failed. You have limited electricity, a cellar and stored seeds. What do you try first?",
        answers: [
            ["Trial small batches of sprouts using strict hygiene.", 5, null],
            ["Plant ordinary crops outdoors in the snow.", 0, null],
            ["Plant every seed in a warm room without grow lights.", 1, null],
            ["Use all generator fuel for artificial grow lights.", 2, null]
        ]
    },

    {
        question: "Livestock Feed Is Running Out: Your goats and chickens provide food, but keeping them alive consumes scarce human supplies.",
        answers: [
            ["Keep all animals and reduce human portions.", 2, 2],
            ["Release the animals into the frozen wilderness.", 0, 1],
            ["Slaughter every animal before feed runs out.", 3, 3],
            ["Calculate feed needs and reduce the herd if necessary.", 5, 4]
        ]
    }

];

// ============================================================
// EXTREME COLD SURVIVAL QUIZ
// ============================================================

// Keep your complete extremeColdSurvivalQuestions array here,
// exactly as supplied in your previous message.


// ============================================================
// SHUFFLE QUESTIONS AND ANSWERS
// ============================================================

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


// ============================================================
// BALANCE THE POSITIONS OF HIGHEST-SCORING ANSWERS
// ============================================================

function getPermutations(items) {
    if (items.length <= 1) return [items];

    const results = [];

    items.forEach((item, index) => {
        const remaining = items.filter((_, i) => i !== index);

        getPermutations(remaining).forEach(permutation => {
            results.push([item, ...permutation]);
        });
    });

    return results;
}

function balanceAnswerOptions(questions) {
    // Index 0 = A, 1 = B, 2 = C, 3 = D.
    const positionCounts = [0, 0, 0, 0];

    const eligibleQuestions = shuffleArray(
        questions.filter(
            question =>
                question.category !== "profile" &&
                question.answers.length === 4
        )
    );

    for (const question of eligibleQuestions) {
        const highestScore = Math.max(
            ...question.answers.map(answer => answer[1])
        );

        let bestCost = Infinity;
        let bestPermutations = [];

        for (const permutation of getPermutations(question.answers)) {
            const counts = [...positionCounts];

            permutation.forEach((answer, position) => {
                if (answer[1] === highestScore) {
                    counts[position]++;
                }
            });

            const cost = counts.reduce(
                (total, count) => total + count * count,
                0
            );

            if (cost < bestCost) {
                bestCost = cost;
                bestPermutations = [permutation];
            } else if (cost === bestCost) {
                bestPermutations.push(permutation);
            }
        }

        question.answers = bestPermutations[
            Math.floor(Math.random() * bestPermutations.length)
        ];

        question.answers.forEach((answer, position) => {
            if (answer[1] === highestScore) {
                positionCounts[position]++;
            }
        });
    }

    questions
        .filter(question => question.category === "profile")
        .forEach(question => {
            question.answers = shuffleArray(question.answers);
        });
}


// ============================================================
// INITIALIZE THE EXTREME COLD SURVIVAL QUIZ
// ============================================================

// Shuffle all 50 questions.
const questions = shuffleArray(extremeColdSurvivalQuestions);

// Balance answer positions once per quiz initialization.
balanceAnswerOptions(questions);


// ========================================================
// QUIZ STATE
// ========================================================

let currentQuestion = 0;
let survivalScore = 0;
let moralityScore = 0;

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
        scoreDisplay.textContent = "SURVIVAL TRIVIA";
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

    questionNumber.textContent =
        `Decision ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = current.question;
    answersContainer.innerHTML = "";

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer";
        button.type = "button";
        button.textContent = answer[0];

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

    backButton.disabled = isFirst;

    if (isLast) {
        nextButton.classList.add("hidden");
        submitButton.classList.remove("hidden");
        submitButton.disabled = !allAnswered;

        submitButton.textContent = allAnswered
            ? "SUBMIT"
            : "ANSWER ALL QUESTIONS";
    } else {
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

        survivalScore += answer[1];

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

    if (suggestionsCard) {
        suggestionsCard.classList.remove("hidden");
    }

    const survivalPercentage = Math.round(
        (survivalScore / maxSurvivalScore) * 100
    );

    const moralityPercentage = maxMoralityScore > 0
        ? Math.round((moralityScore / maxMoralityScore) * 100)
        : 0;

    document.getElementById("final-score").textContent =
        survivalPercentage + "%";


    // ====================================================
    // SURVIVAL DECISION PROFILE
    // ====================================================

    let title;
    let description;
    let survival;

    if (survivalPercentage <= 20) {
        title = "High-Risk Choices";
        description = "Several of your choices overlook important safety priorities. Review cold-weather shelter, frostbite prevention, safe travel and emergency planning.";
        survival = "Review cold-weather survival and emergency planning";
    } else if (survivalPercentage <= 40) {
        title = "Needs More Preparation";
        description = "You recognize some survival priorities, but several decisions could expose you to avoidable risks. Practice managing heat, protecting water supplies and assessing dangerous weather.";
        survival = "Build stronger cold-weather survival decisions";
    } else if (survivalPercentage <= 60) {
        title = "Developing Survival Judgment";
        description = "You understand several important survival principles. More attention to hypothermia, safe movement, essential resources and group planning would strengthen your decisions.";
        survival = "Core skills present; keep improving";
    } else if (survivalPercentage <= 80) {
        title = "Strong Survival Decisions";
        description = "Your choices generally favor sensible risk assessment, careful resource use and cooperation. You recognize that preparation and protecting vulnerable people matter in extreme cold.";
        survival = "Strong overall decision-making";
    } else if (survivalPercentage <= 95) {
        title = "Very Strong Safety Judgment";
        description = "You consistently select safety-focused options across most scenarios. Your answers show careful thinking about cold exposure, shelter, water, travel and long-term settlement needs.";
        survival = "Very strong survival decisions";
    } else {
        title = "Consistently Safety-Focused";
        description = "You selected the highest-scoring options in nearly every scenario. You show strong awareness of cold-weather hazards, resource management and community survival.";
        survival = "Exceptional performance on this quiz";
    }

    document.getElementById("result-title").textContent = title;
    document.getElementById("result-description").textContent = description;
    document.getElementById("survival-time").textContent = survival;


    // ====================================================
    // COMPASSION & ETHICS RESULT
    // ====================================================

    document.getElementById("morality-score").textContent =
        moralityPercentage + "%";

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

    const quizUrl =
        "https://apocalypsequizzes.com/extreme-cold-survival-quiz/";

    const shareText =
        `❄️ I scored ${finalScore} on the Extreme Cold Survival Quiz!\n\n` +
        `${title}\n` +
        `Decision profile: ${survival}\n` +
        `❤️ Compassion & Ethics: ${morality}\n\n` +
        `How would YOU survive an extreme cold apocalypse?`;

    const shareData = {
        title: "Extreme Cold Survival Quiz",
        text: shareText,
        url: quizUrl
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(
                shareText + "\n\n" + quizUrl
            );

            alert("Your result has been copied! You can paste it anywhere.");
        } else {
            alert(shareText + "\n\n" + quizUrl);
        }
    } catch (error) {
        console.log("Sharing cancelled.");
    }
}


// ========================================================
// GLOBAL SITE MENU
// ========================================================

const menuToggle = document.getElementById("menu-toggle");
const siteMenu = document.getElementById("site-menu");

if (menuToggle && siteMenu) {

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();

        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        siteMenu.hidden = isOpen;

        menuToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Open navigation" : "Close navigation"
        );
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
