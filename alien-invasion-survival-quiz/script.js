
const alienSurvivalQuestions = [

    // SECTION 1 — FIRST CONTACT AND ALIEN INTENTIONS

    {
        question: "Alien ships appear above a city. Aircraft vanish from radar, but the aliens haven't attacked civilians. What do you do?",
        answers: [
            ["Observe from cover and compare independent reports.", 5, null],
            ["Move toward a fallback site while monitoring events.", 4, null],
            ["Ask the ships to identify themselves.", 2, null],
            ["Approach the city outskirts for a closer view.", 1, null]
        ]
    },

    {
        question: "An alien craft crashes near your village. You hear movement inside, but nobody else knows. What do you do?",
        answers: [
            ["Approach carefully while keeping an escape route.", 1, null],
            ["Mark the site and observe from a safe distance.", 5, null],
            ["Report the crash through a trusted channel.", 4, null],
            ["Gather a small team to investigate the wreck.", 2, null]
        ]
    },

    {
        question: "An alien message says, 'We come in peace. We seek human representatives,' but offers no details. How do you respond?",
        answers: [
            ["Share your location and offer to meet.", 1, null],
            ["Ignore the message until more becomes clear.", 3, null],
            ["Prepare to relocate while monitoring further messages.", 5, null],
            ["Reply publicly without revealing your location.", 4, null]
        ]
    },

    {
        question: "Aliens offer to treat a critically injured survivor inside a sealed chamber. Their equipment is unfamiliar. What do you do?",
        answers: [
            ["Accept immediately because time may be running out.", 2, 4],
            ["Decline the procedure but request medical supplies.", 3, 4],
            ["Ask whether treatment can begin outside the chamber.", 4, 5],
            ["Request an explanation and the safest possible assessment.", 5, 5]
        ]
    },

    {
        question: "An alien ship offers evacuation to another world, claiming Earth will soon be uninhabitable. Boarding starts in an hour. What do you do?",
        answers: [
            ["Check the evidence and prepare a fallback plan.", 5, 4],
            ["Board with a small group and learn more later.", 2, 3],
            ["Help others prepare while keeping your own options open.", 3, 4],
            ["Decline and concentrate on securing your shelter.", 3, 3]
        ]
    },


    // SECTION 2 — STEALTH, HIDING AND ESCAPE

    {
        question: "An alien drone scans the building where you're hiding but hasn't spotted you. What do you do?",
        answers: [
            ["Remain still and wait for it to leave.", 4, null],
            ["Stay behind solid cover and locate an exit.", 5, null],
            ["Move toward the doorway when it turns away.", 2, null],
            ["Create a distant distraction and move only if safe.", 3, null]
        ]
    },

    {
        question: "Alien soldiers enter the house below you. The stairs are blocked, and the roof has a dangerous drop. What do you do?",
        answers: [
            ["Climb onto the roof before they arrive.", 1, null],
            ["Make noise elsewhere to draw them away.", 2, null],
            ["Stay hidden and listen for another exit.", 5, null],
            ["Check the roof route and landing before moving.", 4, null]
        ]
    },

    {
        question: "An alien patrol blocks your village's main road. A forest track offers another route, but its condition is unknown. What do you do?",
        answers: [
            ["Follow another vehicle without knowing where it is going.", 1, null],
            ["Watch patrol movements for a safer opening.", 4, null],
            ["Stay concealed and gather more information.", 3, null],
            ["Check the track's condition before committing to it.", 5, null]
        ]
    },

    {
        question: "Someone outside your hiding place screams for help at exactly the same interval each time. You cannot see them. What do you do?",
        answers: [
            ["Mark the spot, stay back and alert your group.", 5, null],
            ["Approach slowly while keeping an escape route.", 1, null],
            ["Call from cover and listen for a changing response.", 3, null],
            ["Study the pattern for signs of a trap.", 4, null]
        ]
    },

    {
        question: "An alien patrol usually repeats its route every twenty minutes. Tonight, a new patrol heads toward your hiding place. What do you do?",
        answers: [
            ["Create a distraction while others remain hidden.", 2, null],
            ["Cancel the plan and adapt to the new patrol.", 5, null],
            ["Keep the original timing because it worked before.", 1, null],
            ["Stay concealed and wait for a safer opening.", 4, null]
        ]
    },


    // SECTION 3 — INVASION AND EVACUATION

    {
        question: "Aliens destroy nearby military bases within minutes. Your militia wants to defend town hall, despite the enemy's long-range weapons. What do you do?",
        answers: [
            ["Join the militia and defend town hall.", 1, 3],
            ["Move militia supplies before choosing a position.", 3, 3],
            ["Help civilians reach shelter away from fixed targets.", 5, 5],
            ["Track alien movements while keeping an escape route.", 4, 3]
        ]
    },

    {
        question: "Your city is under attack. Explosions are distant, roads are jammed, and soldiers are withdrawing. You live near the centre. What do you do?",
        answers: [
            ["Follow the main traffic in case others know more.", 1, null],
            ["Shelter away from windows and reassess before moving.", 5, null],
            ["Take a checked alternate route toward a safe destination.", 4, null],
            ["Head toward the largest base for organised protection.", 2, null]
        ]
    },

    {
        question: "A giant alien machine advances through your district. Your car has little fuel, and traffic is jammed on one narrow road. What do you do?",
        answers: [
            ["Join the traffic and move through gaps if possible.", 1, null],
            ["Wait inside a sturdy building until it passes.", 3, null],
            ["Check side roads leading away from the machine.", 5, null],
            ["Leave the car and seek solid cover on foot.", 4, null]
        ]
    },

    {
        question: "A drone follows the last vehicle in your convoy through an isolated valley. What do you do?",
        answers: [
            ["Scatter the vehicles and lose contact with one another.", 1, null],
            ["Accelerate toward the next settlement as a group.", 2, null],
            ["Stop under suitable cover and check whether the drone follows.", 3, null],
            ["Change route together and assess whether you're tracked.", 5, null]
        ]
    },

    {
        question: "A bridge on your escape route is destroyed. Alien forces are closing in, and two detours appear on your map. What do you do?",
        answers: [
            ["Return to the previous road despite greater exposure.", 1, null],
            ["Take the nearest detour without checking its condition.", 2, null],
            ["Check whether a safe foot crossing is actually possible.", 3, null],
            ["Compare distance, cover, shelter and road conditions.", 5, null]
        ]
    },

    {
        question: "Your family refuses to flee an approaching alien army, trusting the military to protect the village. What do you do?",
        answers: [
            ["Arrange transport and a safe destination for their departure.", 5, 5],
            ["Leave alone and hope they follow later.", 2, 2],
            ["Agree on a route and deadline, then act before it is too late.", 4, 5],
            ["Wait until alien soldiers arrive to prove the danger.", 0, 1]
        ]
    },


    // SECTION 4 — ALIEN TECHNOLOGY AND UNKNOWN HAZARDS

    {
        question: "Your scout finds a damaged alien drone. Its shell is cracked, but a light still blinks inside. What do you do?",
        answers: [
            ["Move it to your shelter for closer examination.", 0, null],
            ["Cover it with debris before continuing.", 1, null],
            ["Mark its position and avoid touching it.", 5, null],
            ["Open the shell carefully to inspect its components.", 1, null]
        ]
    },

    {
        question: "Your resistance finds an alien weapon, but nobody understands its controls or safety mechanisms. What do you do?",
        answers: [
            ["Carry it as backup against stronger alien forces.", 0, null],
            ["Inspect it with available tools before considering use.", 2, null],
            ["Move it away from the shelter without knowing how it works.", 1, null],
            ["Keep everyone clear and seek a safer assessment.", 5, null]
        ]
    },

    {
        question: "Blue mist surrounds a crashed alien ship. Nearby plants change colour, and a bird lies motionless. What do you do?",
        answers: [
            ["Cover your face and inspect the changed plants.", 1, null],
            ["Approach quickly while holding your breath.", 0, null],
            ["Approach from upwind, assuming that makes it safe.", 2, null],
            ["Move away, warn others and avoid the mist.", 5, null]
        ]
    },

    {
        question: "Several people hear a voice through radios that appear switched off. It urges them toward an alien landing site. What do you do?",
        answers: [
            ["Send one person to investigate while others stay back.", 1, null],
            ["Follow the instructions because several people heard them.", 0, null],
            ["Destroy the radios and switch to face-to-face contact.", 3, null],
            ["Verify the situation independently before acting.", 5, null]
        ]
    },

    {
        question: "Alien screens display accurate names and locations of hidden survivors. Your group fears its own location is exposed. What do you do?",
        answers: [
            ["Stop contacting other survivor groups entirely.", 2, null],
            ["Broadcast false locations using every available device.", 1, null],
            ["Keep using the screens because the information is public.", 0, null],
            ["Limit digital exposure and switch to safer communications.", 5, null]
        ]
    },

    {
        question: "An alien device activates in a warehouse. A sixty-second countdown begins, and nearby machines shut down. What do you do?",
        answers: [
            ["Try to dismantle it before the countdown ends.", 0, null],
            ["Stay nearby and record what happens at zero.", 0, null],
            ["Warn others, evacuate the area and avoid experimenting.", 5, null],
            ["Move it outside before its effects spread further.", 1, null]
        ]
    },


    // SECTION 5 — ALIEN WEAKNESSES AND ADAPTATION

    {
        question: "An alien soldier retreats from an area containing a strange mineral. You've witnessed this only once. What do you do?",
        answers: [
            ["Approach another patrol to test whether it happens again.", 1, null],
            ["Collect the mineral and prepare to use it against patrols.", 2, null],
            ["Share the discovery so other groups can investigate safely.", 4, null],
            ["Seek independent evidence before relying on the weakness.", 5, null]
        ]
    },

    {
        question: "A sound pattern has disabled alien drones several times. Today, a drone ignores it and keeps approaching. What do you do?",
        answers: [
            ["Increase the volume and continue the same tactic.", 1, null],
            ["Try it elsewhere to check whether the failure repeats.", 2, null],
            ["Warn other groups and suspend the tactic until reassessed.", 4, null],
            ["Stop relying on it and prepare another escape route.", 5, null]
        ]
    },

    {
        question: "An alien vehicle sits beside the mineral that seemed to repel alien soldiers. It looks deliberately abandoned. What do you do?",
        answers: [
            ["Collect a supply and distribute it before confirming its effects.", 2, null],
            ["Use the mineral immediately because it worked before.", 1, null],
            ["Leave the discovery alone rather than risk investigating it.", 3, null],
            ["Treat the scene as possible bait and verify the evidence.", 5, null]
        ]
    },


    // SECTION 6 — ESSENTIAL RESOURCES

    {
        question: "Your group has water for two days, but the nearest confirmed supply is four days away. Local streams may be contaminated. What do you do?",
        answers: [
            ["Ration current supplies and assume they will last until arrival.", 1, null],
            ["Start travelling and hope to find safe water along the route.", 2, null],
            ["Treat the nearest stream with your existing supplies without checking what may contaminate it.", 2, null],
            ["Seek safer sources, use suitable treatment methods and plan for the shortfall.", 5, null]
        ]
    },

    {
        question: "Your generator powers life-support equipment for a critically ill survivor. Its noise may attract alien hunters, and fuel is limited. What do you do?",
        answers: [
            ["Switch it off during patrols and restart it later.", 1, 2],
            ["Keep it running without changing anything because the equipment is essential.", 3, 4],
            ["Move the patient while keeping the generator running, without checking the risks.", 2, 4],
            ["Reduce noise where possible, check backup power and prepare for discovery.", 5, 5]
        ]
    },

    {
        question: "Your rooftop garden provides vital food, but alien drones frequently scan nearby roofs. What do you do?",
        answers: [
            ["Stop growing food and rely entirely on scavenging.", 1, null],
            ["Expand the garden before supplies run out.", 1, null],
            ["Move the garden, accepting some losses to reduce detection risk.", 3, null],
            ["Conceal the garden better and develop other food sources.", 5, null]
        ]
    },


    // SECTION 7 — TRUST, INFILTRATION AND COLLABORATION

    {
        question: "A stranger arrives with a high fever, claiming they spent three days near an alien landing site. They beg to enter your shelter. What do you do?",
        answers: [
            ["Let them in immediately because refusing help would be cruel.", 1, 4],
            ["Refuse entry and direct them toward another settlement.", 2, 2],
            ["Search them for weapons before bringing them inside.", 1, 3],
            ["Offer help in a separate area while assessing the risks.", 5, 5]
        ]
    },

    {
        question: "A trusted scout returns after days missing. They know your routes and passwords but cannot explain their escape. What do you do?",
        answers: [
            ["Assume they're an alien duplicate and attack them.", 0, 0],
            ["Restore full access because they've always been trustworthy.", 1, 4],
            ["Send them away because uncertainty is too dangerous.", 2, 2],
            ["Keep them safe, verify key details and assess their condition.", 5, 5]
        ]
    },

    {
        question: "A caller uses your missing teammate's voice and private nickname, but their reported location is far away. They demand you open the shelter door. What do you do?",
        answers: [
            ["Send someone out to search while others stay inside.", 1, null],
            ["Ignore the call and change the group's contact procedures.", 4, null],
            ["Open the door because they know private information.", 0, 3],
            ["Verify the caller before changing security procedures.", 5, null]
        ]
    },

    {
        question: "A scout returns from an alien site with dark marks spreading beneath their skin. They feel fine, but the marks are new. What do you do?",
        answers: [
            ["Retrace their route to identify possible exposure.", 2, 3],
            ["Keep them with the group and monitor the marks.", 1, 4],
            ["Send them away without support until their condition becomes clearer.", 1, 1],
            ["Limit close contact and seek medical assessment.", 5, 5]
        ]
    },

    {
        question: "A human family traded survivor locations to aliens for medicine for their sick child. An angry crowd demands punishment. What do you do?",
        answers: [
            ["Expel them immediately without checking whether the threat continues.", 2, 2],
            ["Use their knowledge to learn how aliens found the shelter.", 4, 4],
            ["Secure the family, investigate the evidence and prevent retaliation.", 5, 5],
            ["Let the crowd decide because the victims deserve a say.", 1, 2]
        ]
    },

    {
        question: "A cult worshipping the invaders offers food and shelter. Its members demand a survivor they consider an enemy of the aliens. What do you do?",
        answers: [
            ["Refuse the offer and leave before tensions rise.", 4, 3],
            ["Accept only if nobody is handed over, while preparing a safe exit.", 3, 4],
            ["Pretend to share their beliefs to learn their plans.", 3, 2],
            ["Question their motives and negotiate without surrendering anyone.", 5, 5]
        ]
    },

    {
        question: "An alien technician claims to have defected and offers patrol schedules. It asks you to remove an unknown device from its body. What do you do?",
        answers: [
            ["Remove it immediately to prove your group can be trusted.", 0, 4],
            ["Take the patrol information but leave the alien behind.", 3, 2],
            ["Refuse all contact because the defector may be dangerous.", 2, 2],
            ["Keep a safe distance and assess the claims and device.", 5, 4]
        ]
    },


    // SECTION 8 — MORAL DILEMMAS AND IMPULSE CONTROL

    {
        question: "You find a wounded alien soldier separated from its unit. It has stopped attacking, but you don't know whether it understands human gestures. What do you do?",
        answers: [
            ["Leave it supplies from a distance and withdraw.", 3, 4],
            ["Kill it before it can reveal your location.", 2, 0],
            ["Remove its equipment and bring it inside for questioning.", 2, 2],
            ["Keep a safe distance and consider cautious communication.", 5, 5]
        ]
    },

    {
        question: "An alien soldier drops its weapon and raises its hands. Your group wants revenge for family members killed by aliens. What do you do?",
        answers: [
            ["Withdraw while keeping watch in case another patrol arrives.", 3, 3],
            ["Kill it before it can recover or call for help.", 2, 0],
            ["Let the angriest members decide what happens.", 0, 1],
            ["Keep it covered from a safe distance and assess whether restraint is possible.", 5, 5]
        ]
    },

    {
        question: "An alien patrol killed your brother yesterday. Tonight, you spot three soldiers from that unit near the ruins. Your friend wants revenge. What do you do?",
        answers: [
            ["Attack while the soldiers appear unprepared.", 1, 1],
            ["Let your friend attack while you cover the escape.", 1, 2],
            ["Discuss the risks and assess whether success is realistic.", 5, 4],
            ["Follow them to learn their route and numbers.", 4, 3]
        ]
    },

    {
        question: "Your radio confirms six survivors, including your closest friend, are held at an alien checkpoint. They may be moved soon, but guard numbers are unknown. What do you do?",
        answers: [
            ["Create a diversion and hope the captives escape.", 2, 3],
            ["Seek negotiations while preparing another option.", 4, 5],
            ["Gather everyone available and storm the checkpoint.", 1, 3],
            ["Locate the captives, assess the guards and plan a fallback.", 5, 5]
        ]
    },

    {
        question: "An isolated alien scout repairs equipment near your shelter. A group member claims it took part in an attack but has no proof. What do you do?",
        answers: [
            ["Try to capture it and study its technology.", 2, null],
            ["Move the group away rather than risk confrontation.", 5, null],
            ["Attack before it can call for help.", 1, 1],
            ["Observe from cover and gather more information.", 4, null]
        ]
    },

    {
        question: "Human captives are visible inside an alien convoy approaching a bridge. Your group has weapons, but hidden escorts may be nearby. What do you do?",
        answers: [
            ["Attack now because the captives may lose their chance.", 1, 4],
            ["Try communicating with the convoy before deciding.", 2, 4],
            ["Create a diversion before attempting the rescue.", 3, 4],
            ["Track the convoy and seek a safer interception point.", 5, 4]
        ]
    },

    {
        question: "Your resistance plans to destroy an alien power station. It could weaken patrols but also cut power to a hospital and water pumps. What do you do?",
        answers: [
            ["Destroy it because weakening the aliens is worth the cost.", 2, 1],
            ["Delay until you know which human systems depend on it.", 4, 4],
            ["Choose another target with fewer risks to essential services.", 5, 5],
            ["Consider a limited operation to reduce civilian harm.", 4, 5]
        ]
    },


    // SECTION 9 — RESISTANCE AND ENDGAME

    {
        question: "Alien artillery pauses near a town. Your exhausted team believes a quick attack could stop another bombardment, but two members are already lost. What do you do?",
        answers: [
            ["Attack while the artillery is not firing.", 1, 2],
            ["Withdraw, warn the town and seek another solution.", 4, 4],
            ["Vote immediately and follow the majority's decision.", 2, 3],
            ["Observe and assess whether an attack could realistically help.", 5, 4]
        ]
    },

    {
        question: "An alien broadcast boasts of destroying your home and dares survivors to fight back. Your settlement wants to attack tonight but has no clear target. What do you do?",
        answers: [
            ["Join because doing nothing makes the group look weak.", 0, 2],
            ["Strike a nearby patrol without knowing its strength.", 1, 2],
            ["Move vulnerable people to safety before deciding.", 4, 5],
            ["Set a clear objective and withdrawal conditions first.", 5, 4]
        ]
    },

    {
        question: "Your team reaches an alien detention centre and finds twice as many captives as expected. An alarm sounds, a teammate is injured and the exit is blocked. What do you do?",
        answers: [
            ["Keep freeing captives despite the blocked exit.", 1, 4],
            ["Split the team between rescuing captives and finding an exit without checking coordination.", 2, 3],
            ["Withdraw if possible and plan another rescue opportunity.", 3, 3],
            ["Get the injured teammate to cover, find an exit and reassess rescue options.", 5, 4]
        ]
    },

    {
        question: "A resistance mission fails after someone changes the meeting place. The group suspects a traitor, but has no proof. Another mission is planned tomorrow. What do you do?",
        answers: [
            ["Cancel every mission until the suspected person confesses.", 1, null],
            ["Proceed as planned because delay could cost another chance.", 1, null],
            ["Give different people different false details to identify a leak.", 4, null],
            ["Limit sensitive details and review the failure first.", 5, null]
        ]
    },

    {
        question: "An alien-controlled district offers water, power and medicine for human labour. Those who refuse lose access to supplies. What do you do?",
        answers: [
            ["Launch an immediate attack on the control centre.", 0, 2],
            ["Accept the conditions because essential supplies come first.", 3, 4],
            ["Refuse contact and leave without preparing for the journey.", 1, 2],
            ["Weigh the terms, risks, alternatives and vulnerable people's needs.", 5, 5]
        ]
    },

    {
        question: "Aliens offer a ceasefire if humans surrender all weapons. Your community cannot win outright, but disarmament may leave it vulnerable. What do you do?",
        answers: [
            ["Accept immediately and discard all emergency equipment.", 0, null],
            ["Reject the offer without examining its terms.", 2, null],
            ["Pretend to agree while secretly preparing an attack.", 2, null],
            ["Assess the terms, credibility, enforcement and alternatives.", 5, null]
        ]
    },

    {
        question: "A broadcast orders civilians to gather at a stadium beside an alien checkpoint. It uses government symbols, but trusted local channels say nothing. What do you do?",
        answers: [
            ["Head there early before the roads become crowded.", 0, null],
            ["Ignore it and remain hidden indefinitely.", 2, null],
            ["Observe the site from a safe distance without approaching the checkpoint.", 3, null],
            ["Verify the message while preparing another route.", 5, null]
        ]
    },

    {
        question: "After months of occupation, alien ships begin leaving Earth. Some survivors want to rebuild; others fear a trap. What do you do?",
        answers: [
            ["Follow the ships to ensure they never come back.", 0, null],
            ["Return to normal life once the ships disappear.", 1, null],
            ["Stay hidden permanently in case the aliens return.", 2, null],
            ["Verify the withdrawal and restore services gradually.", 5, null]
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
// INITIALIZE THE ALIEN INVASION QUIZ
// ============================================================

// Shuffle all 50 questions.
const questions = shuffleArray(alienSurvivalQuestions);

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
        description = "Several of your choices overlook important safety priorities. Review stealth, evacuation planning and how to respond to unfamiliar alien technology.";
        survival = "Review threat assessment and emergency planning";
    } else if (survivalPercentage <= 40) {
        title = "Needs More Preparation";
        description = "You recognize some survival priorities, but several decisions could expose you to avoidable risks. Practice assessing threats, verifying information and protecting essential supplies.";
        survival = "Build stronger survival decision-making";
    } else if (survivalPercentage <= 60) {
        title = "Developing Survival Judgment";
        description = "You understand several important survival principles. More attention to stealth, safe movement, unfamiliar hazards and reliable information would strengthen your decisions.";
        survival = "Core skills present; keep improving";
    } else if (survivalPercentage <= 80) {
        title = "Strong Survival Decisions";
        description = "Your choices generally favor sensible risk assessment, careful resource use and cooperation. You recognize that patience and reliable information can be as important as taking action.";
        survival = "Strong overall decision-making";
    } else if (survivalPercentage <= 95) {
        title = "Very Strong Safety Judgment";
        description = "You consistently select safety-focused options across most scenarios. Your answers show careful thinking about immediate threats, escape plans and long-term group survival.";
        survival = "Very strong survival decisions";
    } else {
        title = "Consistently Safety-Focused";
        description = "You selected the highest-scoring options in nearly every scenario. You show strong awareness of threat assessment, risk management and community needs.";
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
        "https://apocalypsequizzes.com/alien-invasion-survival-quiz/";

    const shareText =
        `👽 I scored ${finalScore} on the Alien Invasion Survival Quiz!\n\n` +
        `${title}\n` +
        `Decision profile: ${survival}\n` +
        `❤️ Compassion & Ethics: ${morality}\n\n` +
        `How would YOU survive an alien invasion?`;

    const shareData = {
        title: "Alien Invasion Survival Quiz",
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
