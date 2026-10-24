const nuclearWinterQuestions = [

    // PART 1 — THE BLAST AND THE FIRST HOURS

    {
        question: "A blinding flash lights the sky near your city. You are indoors beside a window, and a blast wave may follow. What do you do?",
        answers: [
            ["Move away from windows, get low, and protect your head.", 5, null],
            ["Look outside to judge the explosion's size.", 1, null],
            ["Reach your vehicle and prepare to escape.", 1, null],
            ["Run outside before nearby buildings are damaged.", 1, null]
        ]
    },

    {
        question: "A distant city has been struck. Officials warn that radioactive fallout may reach your area soon. What is your priority?",
        answers: [
            ["Pack valuables before choosing a shelter.", 1, null],
            ["Drive into open countryside before roads become blocked.", 1, null],
            ["Wait outside until you see fallout arriving.", 0, null],
            ["Enter a substantial building and reach its basement or center.", 5, null]
        ]
    },

    {
        question: "You can reach a concrete apartment basement, a wooden cabin, or a parked car. Fallout may be approaching. Which offers the best protection?",
        answers: [
            ["Choose the basement, with substantial material shielding you from outside.", 5, null],
            ["Choose the car because its doors and windows can be closed.", 1, null],
            ["Choose the cabin's upper floor, away from possible flooding.", 1, null],
            ["Choose the isolated cabin, away from other people.", 2, null]
        ]
    },

    {
        question: "An underground parking structure offers shelter, but one entrance is partly blocked and ventilation is poor. What do you do?",
        answers: [
            ["Move in and seal every opening to retain heat.", 1, null],
            ["Check access, structural hazards, flooding, and airflow first.", 5, null],
            ["Use the deepest corner without checking surrounding hazards.", 1, null],
            ["Store supplies there while searching for another location.", 2, null]
        ]
    },

    {
        question: "After several weeks, water leaks through your shelter's ceiling and temperatures are falling. You can afford either major repairs or one relocation. What's your plan?",
        answers: [
            ["Stay and repair the damage, even if supplies run low.", 3, null],
            ["Split the group between the shelter and a nearby building.", 2, null],
            ["Leave immediately without checking the destination.", 1, null],
            ["Assess alternatives and prepare essentials before relocating.", 5, null]
        ]
    },

    {
        question: "You are outdoors when fallout begins arriving. Your planned shelter is twenty minutes away, but an occupied building is only two minutes away. What do you do?",
        answers: [
            ["Continue to your planned shelter because you know it.", 2, null],
            ["Enter the nearest suitable building and move toward its interior.", 5, null],
            ["Hide inside your vehicle until the dust settles.", 1, null],
            ["Cover your face and wait behind an outdoor wall.", 1, null]
        ]
    },

    {
        question: "Your shelter is secure, but its ventilation system draws air from outside. Fallout is expected nearby. What should you do?",
        answers: [
            ["Keep the system running at full power.", 1, null],
            ["Seal every vent permanently, regardless of air needs.", 1, null],
            ["Open windows to prevent dust accumulating inside.", 0, null],
            ["Close windows and doors, and stop outside-air intake if possible.", 5, null]
        ]
    },

    {
        question: "A family member returns from outdoors covered in fine grey dust. Everyone wants them inside immediately. What is the best response?",
        answers: [
            ["Bring them inside normally and clean their clothes later.", 2, null],
            ["Brush the dust off vigorously at the entrance.", 1, null],
            ["Remove outer clothing before entry if safe, bag it, then wash exposed skin.", 5, null],
            ["Keep them outdoors until a full shower is possible.", 0, null]
        ]
    },

    {
        question: "Your shelter has food and water for two days. Someone wants to drive to a supermarket during a fallout warning. What do you decide?",
        answers: [
            ["Send a small team because supplies may disappear soon.", 2, null],
            ["Send everyone while roads are still passable.", 1, null],
            ["Leave immediately and decide where to get supplies later.", 1, null],
            ["Stay sheltered and check reliable updates before considering travel.", 5, null]
        ]
    },

    {
        question: "An old alert orders evacuation, but a newer broadcast says shelter in place. The newer source is unclear. What do you do?",
        answers: [
            ["Follow the first alert because it arrived earlier.", 2, null],
            ["Follow whichever message recommends the fastest escape.", 1, null],
            ["Check official channels quickly and follow confirmed instructions.", 5, null],
            ["Ignore both and follow nearby residents' evacuation plans.", 1, null]
        ]
    },


    // PART 2 — FALLOUT, RADIATION AND CONTAMINATION

    {
        question: "Dark snow falls after a fallout plume passes overhead. Your settlement's water supply is dwindling. What do you do?",
        answers: [
            ["Use protected water and follow reliable testing or treatment guidance.", 5, null],
            ["Melt the snow because boiling should make it safe.", 1, null],
            ["Scrape off the top layer and melt what remains.", 1, null],
            ["Mix melted snow with stored water to dilute contamination.", 0, null]
        ]
    },

    {
        question: "Your sealed water containers are almost empty. A large tank outside collected rain during the fallout warning. What's your decision?",
        answers: [
            ["Drink from the tank because rainwater is naturally clean.", 1, null],
            ["Boil the tank water and use it for every need.", 1, null],
            ["Mix tank water with bottled water before drinking it.", 1, null],
            ["Prioritize protected supplies and assess the tank water's safety.", 5, null]
        ]
    },

    {
        question: "A village pump still works, but its groundwater may have been affected by fallout. Stored water is nearly gone. What's your next step?",
        answers: [
            ["Seek reliable testing and suitable treatment before drinking it.", 5, null],
            ["Drink directly because groundwater is naturally filtered.", 2, null],
            ["Switch to a nearby stream without checking its safety.", 1, null],
            ["Collect fresh outdoor snow instead.", 1, null]
        ]
    },

    {
        question: "A nearby shop has sealed cans and packaged food, but fresh food was left uncovered outdoors during fallout. Your group is hungry. What do you take?",
        answers: [
            ["Take everything because contamination cannot be seen.", 0, null],
            ["Wash exposed food and assume it is safe afterward.", 2, null],
            ["Prioritize sealed food, wipe package exteriors, and avoid exposed food until cleared.", 5, null],
            ["Take only fresh food because it needs less preparation.", 1, null]
        ]
    },

    {
        question: "Your only radiation meter was dropped. It now shows unusually low readings outside, and someone wants to leave shelter. What do you do?",
        answers: [
            ["Check the instrument and seek reliable measurements before trusting it.", 5, null],
            ["Trust the readings because the device still switches on.", 1, null],
            ["Assume radiation has disappeared because the numbers are falling.", 0, null],
            ["Abandon the area permanently and ignore all future measurements.", 1, null]
        ]
    },

    {
        question: "A map suggests the fallout plume travelled away from your settlement. Dust has fallen locally, and recent measurements are unavailable. What do you do?",
        answers: [
            ["Treat the map as proof that your area is safe.", 1, null],
            ["Stay protected and seek current local measurements and official guidance.", 5, null],
            ["Leave because any visible dust means the shelter has failed.", 1, null],
            ["Check wind direction yourself, then go outdoors.", 0, null]
        ]
    },

    {
        question: "A trader claims iodine tablets protect against every type of radiation. Residents want to leave shelter to buy them. What do you do?",
        answers: [
            ["Buy as many tablets as possible before supplies disappear.", 1, null],
            ["Give tablets to anyone who reports radiation symptoms.", 0, null],
            ["Reject all iodine medicines and rely only on bottled water.", 1, null],
            ["Stay sheltered; don't leave for KI, which doesn't protect against the main hazards of nuclear-bomb fallout.", 5, null]
        ]
    },

    {
        question: "Two people return from a potentially contaminated area with severe nausea and vomiting. Their radiation exposure is unknown. What do you do?",
        answers: [
            ["Assume it is radiation sickness and wait for symptoms to pass.", 1, null],
            ["Seek urgent medical help, report possible exposure, and limit contamination spread.", 5, null],
            ["Give both people the same medicine from the emergency kit.", 2, null],
            ["Send them back outside until others feel safer.", 0, null]
        ]
    },

    {
        question: "Someone insists a cloth mask makes it safe to walk through a fallout zone. They want to retrieve supplies nearby. What do you tell them?",
        answers: [
            ["A cloth mask cannot shield penetrating radiation or make the trip safe.", 5, null],
            ["A mask makes short trips safe if the route is direct.", 1, null],
            ["A thicker scarf provides enough protection for most journeys.", 1, null],
            ["A mask blocks radiation if it covers the nose and mouth.", 0, null]
        ]
    },

    {
        question: "Your settlement's fields look normal after fallout. People want to harvest crops because there is no visible dust. What do you do?",
        answers: [
            ["Harvest everything because plants show no visible damage.", 2, null],
            ["Seek reliable food-safety assessment before eating potentially exposed crops.", 5, null],
            ["Wash the crops and assume any contamination is gone.", 2, null],
            ["Burn the entire harvest without seeking further information.", 0, null]
        ]
    },


    // PART 3 — SHELTER, HEALTH AND CRITICAL INFRASTRUCTURE

    {
        question: "Three people in your enclosed shelter develop headaches, dizziness, and nausea. A fuel heater is running, but nobody smells smoke. What do you do?",
        answers: [
            ["Move them to another room and keep the heater running.", 1, null],
            ["Open a small window and monitor symptoms for an hour.", 1, null],
            ["Get everyone into fresh air immediately; seek emergency help and stop the heater only if safe.", 5, null],
            ["Give them water and let them rest near the heater.", 0, null]
        ]
    },

    {
        question: "A resident needs temperature-sensitive medication. The refrigerator has failed, its temperature history is uncertain, and supplies are low. What do you do?",
        answers: [
            ["Seek qualified advice about the medicine's safety and available alternatives.", 5, null],
            ["Continue using it because replacement may be impossible.", 2, null],
            ["Stop treatment until refrigeration can be restored.", 1, null],
            ["Move it to the coldest room and reduce the prescribed dose.", 1, null]
        ]
    },

    {
        question: "Your generator powers heating, lights, and radio. A serious fault could destroy it unless you shut it down for repairs. What do you do?",
        answers: [
            ["Keep it running until it fails completely.", 1, null],
            ["Shut it down safely and prioritize essential repairs.", 5, null],
            ["Disconnect the radio but ignore the underlying fault.", 2, null],
            ["Dismantle it immediately to salvage smaller parts.", 1, null]
        ]
    },

    {
        question: "A nearby hospital needs electricity for critical equipment. Your only generator powers your water system and heating. What is your response?",
        answers: [
            ["Discuss essential loads, fuel limits, and feasible shared-power options.", 5, 5],
            ["Give them the generator and improvise at your shelter.", 2, 4],
            ["Refuse because your settlement depends on its power.", 3, 2],
            ["Give them all your fuel but keep the failing generator.", 2, 3]
        ]
    },

    {
        question: "Your settlement's pump fails, and replacement parts are unavailable. A nearby village may have a manual pump. What do you do?",
        answers: [
            ["Wait for modern equipment before attempting another solution.", 1, null],
            ["Depend on a distant stream indefinitely.", 2, null],
            ["Investigate repairs or a manual pump, and verify the water is safe before use.", 5, null],
            ["Abandon the settlement before checking other water options.", 0, null]
        ]
    },

    {
        question: "Dim skies have crippled your solar panels. Batteries are draining, and stored diesel will last one month. How should you respond?",
        answers: [
            ["Maintain normal power use and hope sunlight returns soon.", 1, null],
            ["Reduce demand and reserve power for essential systems.", 5, null],
            ["Shut down everything until the skies become brighter.", 1, null],
            ["Use all remaining fuel before the generator deteriorates.", 1, null]
        ]
    },

    {
        question: "A sudden thaw causes your latrine to overflow. Your well lies downhill, and sanitation repairs require scarce fuel and materials. What do you do?",
        answers: [
            ["Keep using the latrine and check the well each day.", 1, null],
            ["Cover the overflow with snow and continue using the well.", 0, null],
            ["Secure the area, address the waste, and protect the water supply.", 5, null],
            ["Close the latrine and let each family handle its own waste.", 1, null]
        ]
    },

    {
        question: "An old power station might restore water and heating to several settlements. It needs fuel and skilled workers, but its output is uncertain. What's your plan?",
        answers: [
            ["Send all available workers and fuel to restart it quickly.", 2, 3],
            ["Refuse to help unless full power is guaranteed.", 2, 2],
            ["Contribute your equipment first and negotiate terms later.", 1, 2],
            ["Offer staged support with clear targets and shared responsibility.", 5, 5]
        ]
    },

    {
        question: "Batteries are nearly exhausted, but your settlement needs updates from distant communities. What's the best communication plan?",
        answers: [
            ["Keep trying to contact others throughout the day.", 1, null],
            ["Schedule brief, efficient contacts and prioritize urgent messages.", 5, null],
            ["Stop all transmissions until electricity becomes reliable.", 2, null],
            ["Send people on frequent trips to deliver every message.", 1, null]
        ]
    },


    // PART 4 — TRAVEL, RESCUE AND DANGEROUS LOCATIONS

    {
        question: "A radio operator reports warmer weather and food distribution on a distant coast. The report is unverified, and your fuel is limited. What do you do?",
        answers: [
            ["Leave immediately before roads become crowded.", 1, null],
            ["Ignore the report and remain where you are indefinitely.", 2, null],
            ["Send everyone on foot to preserve vehicle fuel.", 1, null],
            ["Verify the report, estimate travel needs, and plan a fallback.", 5, null]
        ]
    },

    {
        question: "Your convoy reaches an abandoned highway blocked by vehicles. Snow is falling, daylight is fading, and a narrow forest road branches off. What do you choose?",
        answers: [
            ["Push through the blockage before nightfall.", 1, null],
            ["Take the forest road without checking its destination.", 1, null],
            ["Check whether the highway can be cleared safely; otherwise choose a verified alternative.", 5, null],
            ["Split the convoy and send groups along both routes.", 1, null]
        ]
    },

    {
        question: "Your vehicle breaks down several kilometres from shelter. Temperatures are falling, and a fallout warning has been issued. What is your first move?",
        answers: [
            ["Start walking toward the distant settlement immediately.", 1, null],
            ["Seek the nearest suitable shelter from cold and fallout using a safe route.", 5, null],
            ["Keep the engine running continuously, regardless of fuel or exhaust hazards.", 0, null],
            ["Split the group so someone can reach help faster.", 1, null]
        ]
    },

    {
        question: "Lights shine from an industrial complex at night. It might contain shelter and supplies, but its occupants and hazards are unknown. What do you do?",
        answers: [
            ["Approach openly and request entry immediately.", 3, null],
            ["Sneak inside before anyone notices your group.", 2, null],
            ["Assume the occupants are hostile and leave without assessment.", 2, null],
            ["Observe safely, assess hazards, and approach only with an exit plan.", 5, null]
        ]
    },

    {
        question: "A damaged depot may contain fuel, but a strong chemical smell comes from one entrance. Your settlement is running low. What do you do?",
        answers: [
            ["Enter quickly before another group reaches the fuel.", 0, null],
            ["Stay clear, remain upwind if possible, and seek qualified help.", 5, null],
            ["Use a torch to inspect the dark interior.", 0, null],
            ["Send one person inside while the others wait outside.", 1, null]
        ]
    },

    {
        question: "A family is trapped beneath a damaged building. Fallout may be approaching, and protective equipment is limited. What do you decide?",
        answers: [
            ["Send your entire group into the building to rescue them.", 1, 3],
            ["Wait for perfect information, even if the delay costs lives.", 1, 2],
            ["Ask another settlement to attempt the rescue without offering help.", 2, 1],
            ["Assess structural and fallout hazards before planning a limited rescue.", 5, 5]
        ]
    },

    {
        question: "An evacuated city may contain machinery and supplies your settlement needs for another year. The route is hazardous. What is your approach?",
        answers: [
            ["Identify priority supplies, assess hazards, and set a return deadline.", 5, null],
            ["Send a large team to recover everything useful.", 2, null],
            ["Avoid the city entirely because all urban areas are unsafe.", 2, null],
            ["Move the entire settlement into the city to access its resources.", 0, null]
        ]
    },


    // PART 5 — SURVIVING THE NUCLEAR WINTER

    {
        question: "Your shelter begins filling with smoke from a nearby fire. Fallout may still be present outside. What should you prioritize?",
        answers: [
            ["Stay inside because fallout is always the greater danger.", 0, null],
            ["Open every window and wait for the smoke to clear.", 1, null],
            ["Escape the immediate danger and reach the safest nearby shelter.", 5, null],
            ["Send everyone outside and decide where to go afterward.", 1, null]
        ]
    },

    {
        question: "Your first crop barely grows after weeks of dim sunlight and freezing nights. You have enough seed for one more attempt. What do you do?",
        answers: [
            ["Test hardier crops and methods before using more seed.", 5, null],
            ["Replant the same crop using the same methods.", 2, null],
            ["Abandon farming and rely entirely on scavenging.", 1, null],
            ["Use all remaining seed in a large indoor garden.", 1, null]
        ]
    },

    {
        question: "Artificial lights could grow fresh food indoors, but the garden would consume much of your generator fuel. What's your decision?",
        answers: [
            ["Approve the entire project and solve fuel shortages later.", 1, null],
            ["Reject it because plants cannot grow without natural sunlight.", 1, null],
            ["Run a small trial and compare food production with energy use.", 5, null],
            ["Power the garden first and reduce heat for the settlement.", 0, null]
        ]
    },

    {
        question: "Your goats grazed near a field that may have received fallout. They appear healthy, but the settlement needs milk and meat. What do you do?",
        answers: [
            ["Stop using their milk and meat until their safety is assessed.", 5, null],
            ["Use the milk but avoid eating the meat.", 1, null],
            ["Slaughter the animals before they lose condition.", 1, null],
            ["Release them far away and rely entirely on crop production.", 1, null]
        ]
    },

    {
        question: "Your settlement has ten days of food at current consumption. The next supply run is uncertain, and people resent smaller portions. What do you do?",
        answers: [
            ["Cut portions sharply without explaining why.", 3, 1],
            ["Share the inventory, set fair rules, and review them regularly.", 5, 5],
            ["Keep portions unchanged to avoid immediate conflict.", 2, 3],
            ["Let every family manage its own food independently.", 2, 3]
        ]
    },

    {
        question: "A long outage has warmed your freezer, which contains meat, dairy, and vegetables. You don't know how long they have been above safe temperatures. What do you do?",
        answers: [
            ["Cook everything because heat makes all stored food safe.", 1, null],
            ["Taste small portions and discard anything suspicious.", 0, null],
            ["Check available temperature information and guidance; discard perishables if safety cannot be established.", 5, null],
            ["Give the meat to the strongest workers to avoid waste.", 1, null]
        ]
    },

    {
        question: "A research station may contain hardy seeds and growing records. The round trip takes two dangerous days, and you have one week's food. What do you do?",
        answers: [
            ["Send everyone to recover as much as possible.", 1, null],
            ["Ignore the station and preserve all current supplies.", 2, null],
            ["Send inexperienced members to protect your most skilled workers.", 1, null],
            ["Assess the route and send an equipped team if worthwhile.", 5, null]
        ]
    },


    // PART 6 — TRUST, CONFLICT AND REBUILDING

    {
        question: "A nearby town reports that radiation levels have fallen and invites survivors back. Your settlement has no recent measurements. What do you do?",
        answers: [
            ["If guidance permits, send an equipped team with reliable radiation monitoring and a safe return plan.", 5, null],
            ["Move everyone before other survivors claim the buildings.", 1, null],
            ["Avoid the town permanently because recovery is impossible.", 2, null],
            ["Send one person alone to investigate the entire area.", 1, null]
        ]
    },

    {
        question: "Mercenaries offer protection from raiders but demand half your food and control of your guards. What do you do?",
        answers: [
            ["Accept because any protection is worth the cost.", 3, 2],
            ["Refuse and rely entirely on your own defences.", 2, 3],
            ["Negotiate clear limits and compare other security options.", 5, 5],
            ["Pay now and plan to remove them later.", 1, 1]
        ]
    },

    {
        question: "A rival group holds one of your people and demands your only working generator for their release. What do you do?",
        answers: [
            ["Verify the hostage's condition and explore safer alternatives.", 5, 4],
            ["Hand over the generator to secure their release.", 2, 5],
            ["Refuse because surrender will encourage more demands.", 3, 1],
            ["Launch an immediate rescue regardless of the risks.", 1, 2]
        ]
    },

    {
        question: "An armed stranger carrying medicine claims to have escaped a violent group and asks for shelter. What do you do?",
        answers: [
            ["Let them enter the settlement immediately.", 2, 4],
            ["Turn them away without hearing their explanation.", 2, 2],
            ["Seize their bag and detain them indefinitely.", 1, 0],
            ["Assess them from a safe distance and set clear conditions.", 5, 5]
        ]
    },

    {
        question: "A faction blames technology for civilization's collapse and demands that you destroy your generators, radios, and machinery. What's your response?",
        answers: [
            ["Destroy the equipment to secure their alliance.", 1, 2],
            ["Reject their demands and end the discussion.", 3, 3],
            ["Hear their concerns but retain useful technology with clear safeguards.", 5, 5],
            ["Pretend to agree while secretly sabotaging their equipment.", 1, 0]
        ]
    },

    {
        question: "Your settlement can power either a communal hall or a radio searching for missing survivors. Fuel cannot keep both running continuously. What do you choose?",
        answers: [
            ["Keep the hall open to preserve social bonds.", 3, 4],
            ["Schedule both uses and track their practical value.", 5, 5],
            ["Prioritize the radio and hope someone responds.", 4, 5],
            ["Save all fuel until one option proves worthwhile.", 2, 3]
        ]
    },

    {
        question: "Weeks of heavy snow have piled onto your shelter's roof. Beams creak and cracks appear, but fallout may still be outside. What do you do?",
        answers: [
            ["Stay beneath the strongest section and wait for visible collapse.", 1, null],
            ["Send everyone onto the roof to clear the snow immediately.", 1, null],
            ["Ignore the cracks because the roof has held so far.", 0, null],
            ["Move everyone away by the safest route, then shelter in a safer structure.", 5, null]
        ]
    }

];


// ============================================================
// SHUFFLE QUESTIONS AND ANSWERS
// ============================================================

// Randomize an array using Fisher–Yates.
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

    // Process questions in a random order.
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

        // Keep each answer's text and scores together.
        question.answers = bestPermutations[
            Math.floor(Math.random() * bestPermutations.length)
        ];

        question.answers.forEach((answer, position) => {
            if (answer[1] === highestScore) {
                positionCounts[position]++;
            }
        });
    }

    // Shuffle profile answers without score balancing.
    questions
        .filter(question => question.category === "profile")
        .forEach(question => {
            question.answers = shuffleArray(question.answers);
        });
}


// ============================================================
// INITIALIZE THE NUCLEAR WINTER SURVIVAL QUIZ
// ============================================================

// Shuffle all 50 questions.
const questions = shuffleArray(nuclearWinterQuestions);

// Balance answer positions once per quiz initialization.
balanceAnswerOptions(questions);


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

        submitButton.textContent = allAnswered
            ? "SUBMIT"
            : "ANSWER ALL QUESTIONS";
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
    const survivalPercentage = Math.round(
        (survivalScore / maxSurvivalScore) * 100
    );

    // Morality / compassion-and-ethics percentage
    const moralityPercentage = maxMoralityScore > 0
        ? Math.round((moralityScore / maxMoralityScore) * 100)
        : 0;

    document.getElementById("final-score").textContent =
        survivalPercentage + "%";

    // ====================================================
    // SURVIVAL DECISION PROFILE
    // This quiz does not predict real-world survival time.
    // ====================================================

    let title;
    let description;
    let survival;

    if (survivalPercentage <= 20) {
        title = "High-Risk Choices";
        description = "Several of your choices overlook important safety priorities. Review shelter selection, fallout protection, evacuation planning and safe resource management.";
        survival = "Review threat assessment and emergency planning";
    } else if (survivalPercentage <= 40) {
        title = "Needs More Preparation";
        description = "You recognize some survival priorities, but several decisions could expose you to avoidable risks. Practice assessing fallout hazards, protecting supplies and planning safe movement.";
        survival = "Build stronger survival decision-making";
    } else if (survivalPercentage <= 60) {
        title = "Developing Survival Judgment";
        description = "You understand several important survival principles. More attention to radiation safety, shelter protection, resource management and reliable information would strengthen your decisions.";
        survival = "Core skills present; keep improving";
    } else if (survivalPercentage <= 80) {
        title = "Strong Survival Decisions";
        description = "Your choices generally favor sensible risk assessment, careful resource use and cooperation. You recognize that shelter, reliable information and long-term planning are essential during a nuclear winter.";
        survival = "Strong overall decision-making";
    } else if (survivalPercentage <= 95) {
        title = "Very Strong Safety Judgment";
        description = "You consistently select safety-focused options across most scenarios. Your answers show careful thinking about fallout protection, shelter, essential supplies and community survival.";
        survival = "Very strong survival decisions";
    } else {
        title = "Consistently Safety-Focused";
        description = "You selected the highest-scoring options in nearly every scenario. You show strong awareness of radiation hazards, risk management, resource conservation and community needs.";
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

    const quizUrl =
        "https://apocalypsequizzes.com/nuclear-winter-survival-quiz/";

    const shareText =
        `☢️ I scored ${finalScore} on the Nuclear Winter Survival Quiz!\n\n` +
        `${title}\n` +
        `Decision profile: ${survival}\n` +
        `❤️ Compassion & Ethics: ${morality}\n\n` +
        `Could YOU survive a nuclear winter?`;

    const shareData = {
        title: "Nuclear Winter Survival Quiz",
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
