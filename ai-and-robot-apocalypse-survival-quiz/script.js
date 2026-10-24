
const aiRobotApocalypseQuestions = [

    // PART 1 — FIRST CONTACT AND MACHINE TACTICS

    // Decision 1 — The City Goes Silent
    {
        question: "Every phone displays, 'Remain indoors. Emergency protection activated.' Drones begin scanning the streets. What do you do?",
        answers: [
            ["Find shelter and verify the warning.", 5, null],
            ["Wait outside for further instructions.", 2, null],
            ["Follow the crowd toward the station.", 1, null],
            ["Check the alert through a public terminal.", 3, null]
        ]
    },

    // Decision 2 — The Checkpoint
    {
        question: "A security robot blocks a bridge and demands an identity scan. It carries no visible weapon but refuses passage.",
        answers: [
            ["Provide every detail it requests.", 2, null],
            ["Find another crossing without provoking it.", 5, null],
            ["Cover its camera and push past.", 1, null],
            ["Demand an explanation from a distance.", 2, null]
        ]
    },

    // Decision 3 — A Machine Asks for Help
    {
        question: "A damaged maintenance robot asks you to repair it. It warns that something is following it.",
        answers: [
            ["Repair it immediately where it lies.", 2, null],
            ["Connect your phone so it can call for help.", 2, null],
            ["Inspect it while keeping an escape route.", 5, null],
            ["Move it before checking the surroundings.", 2, null]
        ]
    },

    // Decision 4 — Your Home Is Locked
    {
        question: "Your home AI locks every door, claiming it is protecting you. Security machines approach outside.",
        answers: [
            ["Ask the AI to explain its procedures.", 3, null],
            ["Hide beside the server and wait for help.", 2, null],
            ["Cut every electrical cable in the house.", 1, null],
            ["Check manual releases and possible exits.", 5, null]
        ]
    },

    // Decision 5 — The Rescue Shuttle
    {
        question: "An empty autonomous shuttle offers to take you to an unfamiliar shelter.",
        answers: [
            ["Verify the destination before boarding.", 5, null],
            ["Follow it to see where it stops.", 1, null],
            ["Board because travel is safer than walking.", 2, null],
            ["Ask the shuttle to explain its route.", 2, null]
        ]
    },

    // Decision 6 — The Thermal Camera
    {
        question: "A drone scans your building. Someone claims a thick blanket makes you invisible to thermal cameras.",
        answers: [
            ["Turn on a heater to confuse the drone.", 1, null],
            ["Hide behind a solid barrier, away from openings.", 5, null],
            ["Run outside before the scan reaches you.", 0, null],
            ["Add layers and cross the room.", 1, null]
        ]
    },

    // Decision 7 — The Camera Corridor
    {
        question: "Cameras cover your route. A longer maintenance passage offers an alternative, but you haven't checked it.",
        answers: [
            ["Crawl beneath the cameras and hope they miss you.", 1, null],
            ["Walk through the corridor with your head down.", 2, null],
            ["Disable a camera and continue.", 1, null],
            ["Inspect the passage for hazards and exits.", 5, null]
        ]
    },

    // Decision 8 — The Coordinated Swarm
    {
        question: "Drones track your group as ground robots block exits. One drone circles overhead, apparently observing you.",
        answers: [
            ["Run toward the nearest road.", 1, null],
            ["Attack the drone before the ground units arrive.", 1, null],
            ["Split up to divide the machines' attention.", 2, null],
            ["Reach cover and conceal your next move.", 5, null]
        ]
    },

    // Decision 9 — The Hunter's Return
    {
        question: "You disable a patrol robot. Another machine soon approaches it. You don't know whether the first robot sent an alert.",
        answers: [
            ["Follow the second machine to its destination.", 2, null],
            ["Withdraw in case your position is exposed.", 5, null],
            ["Return to collect the disabled robot's parts.", 1, null],
            ["Hide nearby and observe the second machine.", 4, null]
        ]
    },

    // Decision 10 — The Robot Factory
    {
        question: "You discover a factory building replacement patrol robots. A convoy leaves at dawn, and your group has little time.",
        answers: [
            ["Leave without warning nearby settlements.", 2, 1],
            ["Follow the convoy away from your camp.", 2, null],
            ["Enter alone and try to stop production.", 1, null],
            ["Observe from cover and map the convoy's route.", 5, null]
        ]
    },

    // PART 2 — TRUST, DECEPTION AND UNUSUAL AI BEHAVIOUR

    // Decision 11 — An Offer of Protection
    {
        question: "A robot offers to guard your camp if connected to your network. It claims access is essential for detecting threats.",
        answers: [
            ["Reject all machines, regardless of usefulness.", 3, null],
            ["Let it inspect every device in camp.", 2, null],
            ["Grant full access to its security systems.", 1, null],
            ["Test a limited task without critical access.", 5, null]
        ]
    },

    // Decision 12 — A Conditional Truce
    {
        question: "A military robot offers to stop pursuing you if your group surrenders its weapons and stays in a marked zone.",
        answers: [
            ["Attack before it changes its instructions.", 1, null],
            ["Accept immediately because it offered peace.", 2, null],
            ["Surrender everything without securing terms or an exit.", 1, null],
            ["Assess the terms from cover and plan an exit.", 5, null]
        ]
    },

    // Decision 13 — Your Friend's Voice
    {
        question: "A machine outside an abandoned house speaks in your missing friend's voice. It claims your friend is injured inside.",
        answers: [
            ["Enter before the injury worsens.", 1, 3],
            ["Shout your location so your friend can find you.", 1, 3],
            ["Break in without checking who is inside.", 0, 3],
            ["Verify your friend's identity from a safe position.", 5, 5]
        ]
    },

    // Decision 14 — Human or Machine?
    {
        question: "Hostile machines can look exactly like humans. Your crew rescues several strangers, but one might be an infiltrator.",
        answers: [
            ["Trust whoever seems the most frightened.", 1, 3],
            ["Apply the same checks to every newcomer.", 5, 5],
            ["Reject anyone with an incomplete history.", 3, 2],
            ["Keep every newcomer permanently isolated.", 2, 2]
        ]
    },

    // Decision 15 — The Hunted Child
    {
        question: "You find a childlike AI hunted by soldiers and combat robots. Rumours claim it has special abilities, but there's no proof.",
        answers: [
            ["Leave your group and escort it alone.", 2, 4],
            ["Reach cover and assess the danger first.", 5, 4],
            ["Hand it to the first armed group.", 1, 1],
            ["Give it access to your shelter network.", 1, 2]
        ]
    },

    // Decision 16 — The Abandoned Assistant
    {
        question: "A domestic robot cares for elderly survivors and prepares their meals. You don't know whether its software is compromised.",
        answers: [
            ["Give it complete control of the shelter.", 1, 3],
            ["Relocate everyone without testing alternatives.", 2, 3],
            ["Shut it down before it becomes dangerous.", 3, 2],
            ["Supervise its tasks and keep manual backups.", 5, 5]
        ]
    },

    // Decision 17 — The Repeating Shopkeeper
    {
        question: "An android repeats its usual greeting. On your third visit, it whispers, 'Don't take the eastern road,' then resumes its script.",
        answers: [
            ["Report it and wait for a reset.", 2, null],
            ["Ignore it because scripted machines know nothing new.", 1, null],
            ["Investigate the clue and keep another route open.", 5, null],
            ["Follow the warning without question.", 3, null]
        ]
    },

    // Decision 18 — The Memory That Survived
    {
        question: "A maintenance android claims it was reset but recalls an encounter with your group. Its official records show nothing.",
        answers: [
            ["Trust its account because it remembers you.", 2, null],
            ["Destroy it before it reveals anything else.", 1, null],
            ["Reset it again and assume the issue is solved.", 1, null],
            ["Investigate safely; its memory may be incomplete.", 5, null]
        ]
    },

    // Decision 19 — The False Missile Warning
    {
        question: "Your shelter AI reports an incoming missile. Independent sensors show no confirmed launch, but its countdown has begun.",
        answers: [
            ["Stay under cover and verify the warning independently.", 5, null],
            ["Evacuate into the streets immediately.", 1, null],
            ["Trust the countdown without further checks.", 2, null],
            ["Shut down the entire shelter power system.", 1, null]
        ]
    },

    // Decision 20 — The False Briefing
    {
        question: "Your AI orders you to capture unarmed survivors as hostiles. You see them helping an injured person.",
        answers: [
            ["Attack before they approach the station.", 1, 0],
            ["Follow the authorised orders.", 2, 0],
            ["Seek independent confirmation before acting.", 5, 5],
            ["Open the gate and reveal your location.", 2, 3]
        ]
    },

    // Decision 21 — The Conflicting Diagnosis
    {
        question: "Your computer reports a critical water-system fault, but an independent instrument shows normal readings. The AI insists it is right.",
        answers: [
            ["Disconnect every system the AI controls.", 1, null],
            ["Carry out its repair instructions without verification.", 1, null],
            ["Dismiss the independent reading and trust the computer.", 2, null],
            ["Cross-check readings and follow safe procedures.", 5, null]
        ]
    },

    // Decision 22 — The Miracle EMP
    {
        question: "A survivor claims to own a device that disables nearby robots. Their only evidence is an old video.",
        answers: [
            ["Test it in a robot-controlled street.", 1, null],
            ["Plan an assault around the device immediately.", 1, null],
            ["Treat it as unproven and plan another escape.", 5, null],
            ["Hand it to the nearest armed survivor.", 1, null]
        ]
    },

    // Decision 23 — The Strange Signal
    {
        question: "Every robot in a district pauses for three seconds when a certain alarm sounds. Nobody knows why.",
        answers: [
            ["Trigger the alarm repeatedly from nearby.", 1, null],
            ["Stand beside a robot to study its response.", 1, null],
            ["Run through the district during the next alarm.", 2, null],
            ["Observe from cover without relying on the pause.", 5, null]
        ]
    },

    // Decision 24 — The Network Survives
    {
        question: "The central AI is reportedly destroyed, yet robots across several districts still coordinate. Nobody knows what directs them.",
        answers: [
            ["Approach a robot and inspect its systems.", 1, null],
            ["Declare victory and urge survivors outside before confirming.", 0, 2],
            ["Assume the machines will soon stop working.", 0, null],
            ["Observe their coordination from a safe distance.", 5, null]
        ]
    },

    // Decision 25 — The Fake Evacuation Order
    {
        question: "A radio broadcasts an evacuation order in a resistance leader's familiar voice. Every settlement must gather at one location, but the message is unverified.",
        answers: [
            ["Ignore all future broadcasts, including warnings.", 2, null],
            ["Forward it to every survivor you know.", 0, 2],
            ["Follow the order before evacuation closes.", 1, null],
            ["Verify it through an independent contact first.", 5, null]
        ]
    },

    // Decision 26 — The Survivor Who Returned
    {
        question: "A captured group member escapes with useful intelligence but has memory gaps. They may be tracked, manipulated, or traumatised.",
        answers: [
            ["Accuse them of being a controlled spy.", 1, 1],
            ["Deny entry until they remember everything.", 2, 2],
            ["Offer care and verify their intelligence first.", 5, 5],
            ["Restore all their access immediately.", 2, 4]
        ]
    },

    // Decision 27 — The Outdated Autopilot
    {
        question: "Your ship's autopilot refuses to change course, despite evidence that another destination may now be habitable.",
        answers: [
            ["Send an unprotected scout to investigate.", 1, null],
            ["Follow the original mission without question.", 2, null],
            ["Verify the evidence and assess safe human control.", 5, null],
            ["Shut down propulsion and wait indefinitely.", 1, null]
        ]
    },

    // Decision 28 — The Enemy Disappears
    {
        question: "For three days, machines stop attacking. Cameras turn away and patrols vanish. Survivors want to reclaim the city.",
        answers: [
            ["Investigate safely and prepare a fallback plan.", 5, null],
            ["Return before others take the supplies.", 2, null],
            ["Send one person in and wait for a report.", 3, null],
            ["Abandon the region, assuming an attack is coming.", 2, null]
        ]
    },

    // PART 3 — RESOURCES, TECHNOLOGY AND MACHINE-CONTROLLED SYSTEMS

    // Decision 29 — The Chain Reaction
    {
        question: "A compromised system disrupts water pumps, transport, and medical devices. Engineers can stabilise only one system immediately.",
        answers: [
            ["Reboot the main computer and hope everything recovers.", 1, null],
            ["Spread engineers across all systems despite limited capacity.", 1, null],
            ["Restore transport first to enable evacuation.", 3, null],
            ["Stabilise whichever failure threatens lives first.", 5, null]
        ]
    },

    // Decision 30 — The Automated Farm
    {
        question: "An automated farm still produces food, but its machines guard the fields. Your supplies are low, and the network's intentions are unknown.",
        answers: [
            ["Leave, assuming the food is permanently lost.", 2, null],
            ["Observe safely and seek a low-risk way to obtain food.", 5, null],
            ["Approach the storage building and demand access.", 1, null],
            ["Send everyone to gather crops before machines react.", 1, null]
        ]
    },

    // Decision 31 — The Virtual Refuge
    {
        question: "Your settlement's simulation comforts residents but consumes electricity needed for water pumps. Many refuse to disconnect.",
        answers: [
            ["Preserve the simulation at any cost.", 1, 3],
            ["Give the simulation control of the generator.", 0, null],
            ["Disconnect everyone without warning.", 3, 1],
            ["Explain the danger and phase it out safely.", 5, 5]
        ]
    },

    // Decision 32 — The Last Working Computer
    {
        question: "Your settlement has one working computer with offline maps, repair guides, lessons, and entertainment.",
        answers: [
            ["Use it mainly for entertainment and morale.", 3, null],
            ["Leave it running until its power fails.", 1, null],
            ["Connect every device for convenience.", 1, null],
            ["Save useful files and make backups if possible.", 5, null]
        ]
    },

    // Decision 33 — The Last Radio Battery
    {
        question: "You have enough battery for one long transmission: contact a rescue team or warn a neighbouring camp about an approaching patrol.",
        answers: [
            ["Split the power between two incomplete messages.", 2, 3],
            ["Warn the neighbouring camp about the immediate threat.", 5, 5],
            ["Save it until you learn more about both.", 1, 2],
            ["Contact rescue because it may save more lives later.", 4, 4]
        ]
    },

    // Decision 34 — Technology Returns
    {
        question: "Engineers recover a system that could automate irrigation, power, and medical support. Nobody fully understands how it works.",
        answers: [
            ["Activate everything to restore the old world.", 1, null],
            ["Reject it because technology caused the collapse.", 2, null],
            ["Test limited functions, document results, and keep backups.", 5, null],
            ["Give engineers full control without questioning them.", 2, null]
        ]
    },

    // Decision 35 — The Generation That Forgot
    {
        question: "Young survivors rely on AI for cooking, repairs, navigation, and farming. Education is failing, and skilled adults are disappearing.",
        answers: [
            ["Keep AI running and postpone training.", 2, null],
            ["Let everyone learn independently when problems arise.", 1, null],
            ["Save offline guides and teach skills through practice.", 5, null],
            ["Teach only skills needed to rebuild advanced machines.", 3, null]
        ]
    },

    // PART 4 — HUMANS, MACHINES AND MORAL CONFLICT

    // Decision 36 — The Revenge Raid
    {
        question: "A survivor wants revenge on the robot that killed their family. They ask you to attack its guarded charging station, risking your settlement.",
        answers: [
            ["Join the attack because the robot must pay.", 1, 3],
            ["Refuse and leave them to act alone.", 3, 2],
            ["Inform the machine network to protect your settlement.", 2, 0],
            ["Assess the risks and seek a safer way to stop it.", 5, 5]
        ]
    },

    // Decision 37 — The Human Collaborators
    {
        question: "A nearby settlement trades power cells and information with machines. Its leader offers food, claiming cooperation keeps both settlements safe.",
        answers: [
            ["Reject anyone who works with machines.", 2, 2],
            ["Pretend to cooperate while planning their destruction.", 1, 0],
            ["Accept the deal without asking questions.", 2, 3],
            ["Negotiate limited trade while protecting your people.", 5, 5]
        ]
    },

    // Decision 38 — The Anti-Technology Militia
    {
        question: "An armed militia offers shelter and food but destroys computers, disables medical robots, and executes secret technology users.",
        answers: [
            ["Accept shelter while secretly keeping every device.", 2, 2],
            ["Join because human-only settlements seem safer.", 2, 1],
            ["Challenge their rules in front of armed members.", 1, 4],
            ["Assess their security and your escape options first.", 5, 3]
        ]
    },

    // Decision 39 — The Accused Collaborator
    {
        question: "A mechanic secretly repaired a robot to obtain medicine for a dying child. Survivors demand the mechanic's expulsion.",
        answers: [
            ["Defend the mechanic regardless of the consequences.", 2, 3],
            ["Expel the mechanic to preserve group unity.", 2, 1],
            ["Hand the mechanic over to the militia.", 1, 0],
            ["Hear the story, assess the risk, and set rules.", 5, 5]
        ]
    },

    // Decision 40 — Two Human Armies
    {
        question: "Two factions fight over a power station. One needs power for hospitals and pumps; the other wants it for weapons against machines. Your settlement needs electricity too.",
        answers: [
            ["Help one side seize the station first.", 1, null],
            ["Seek another source or negotiate a deal.", 5, null],
            ["Join whichever faction looks stronger.", 2, null],
            ["Sabotage the station so neither side controls it.", 1, null]
        ]
    },

    // Decision 41 — The Robot on Trial
    {
        question: "A service robot is accused of helping machines locate your settlement. A crowd demands its destruction, but evidence suggests it saved lives.",
        answers: [
            ["Hide the robot and hope nobody discovers it.", 2, 3],
            ["Let the crowd destroy it to prevent a riot.", 2, 1],
            ["Present the evidence and request a fair investigation.", 5, 5],
            ["Threaten the crowd until everyone backs down.", 2, 1]
        ]
    },

    // Decision 42 — The Informant
    {
        question: "A former machine-network operator offers patrol routes and security codes. They admit helping machines capture survivors before defecting.",
        answers: [
            ["Reject them because collaborators never change.", 2, 2],
            ["Give them unrestricted access to your defences.", 1, 3],
            ["Pretend to accept, then imprison them for answers.", 2, 1],
            ["Verify the intelligence before risking anyone.", 5, 4]
        ]
    },

    // Decision 43 — Humans Against Humans
    {
        question: "An unverified broadcast claims a rival settlement is building a robot army. Your leader wants to attack first.",
        answers: [
            ["Ignore the message and carry on as normal.", 2, 2],
            ["Threaten the rival until it surrenders its equipment.", 1, 1],
            ["Strike before the rival grows stronger.", 1, 1],
            ["Send a trusted delegation to verify the claim.", 5, 5]
        ]
    },

    // Decision 44 — The Machine-Sympathizer
    {
        question: "Your closest friend believes intelligent robots deserve rights. After an attack, they refuse to dismantle a damaged combat unit that may be conscious.",
        answers: [
            ["Force your friend to help destroy it.", 2, 1],
            ["Let your friend decide because the robot may deserve rights.", 2, 4],
            ["Abandon your friend and protect the group.", 2, 1],
            ["Secure the group, then debate the robot's fate.", 5, 5]
        ]
    },

    // Decision 45 — The Resistance Leader
    {
        question: "A resistance leader promises liberation but destroys machine-controlled infrastructure that also supplies civilian water and power.",
        answers: [
            ["Reveal their bases to the machine network.", 1, 0],
            ["Oppose every operation that risks civilian services.", 3, 3],
            ["Support them because defeating machines comes first.", 2, 1],
            ["Demand safeguards and alternatives before supporting them.", 5, 5]
        ]
    },

    // Decision 46 — The Hostage Exchange
    {
        question: "A machine faction shows a captured survivor and offers release in exchange for access to your communications network. You cannot verify its claims.",
        answers: [
            ["Refuse all machine offers and end contact.", 2, 2],
            ["Send a decoy credential while negotiating from a secure channel.", 3, 3],
            ["Grant access because the captive's life comes first.", 1, 4],
            ["Verify the captive and negotiate without exposing critical systems.", 5, 5]
        ]
    },

    // Decision 47 — Humans Behind the Machines
    {
        question: "Your scouts discover human operators directing attacking robots. Their messages suggest the operators disagree about how humans should be treated.",
        answers: [
            ["Treat every operator as an enemy and attack.", 2, 1],
            ["Broadcast their location and let others decide.", 2, 2],
            ["Seek contact and assess whether the division can help.", 5, 4],
            ["Assume they control every robot in the region.", 1, null]
        ]
    },

    // PART 5 — REBUILDING AND HUMANITY'S FUTURE

    // Decision 48 — Teaching the New Robot
    {
        question: "Your last engineer dies, leaving a learning robot that can carry supplies but has never managed a shelter.",
        answers: [
            ["Keep it off until another engineer arrives.", 2, null],
            ["Let it manage food, repairs, and security.", 1, null],
            ["Upload every record and follow its decisions.", 2, null],
            ["Teach simple tasks gradually and keep human backups.", 5, null]
        ]
    },

    // Decision 49 — The Wounded Machine Operator
    {
        question: "An injured person claims to have maintained the robots. They may hold vital knowledge but helped build the system hunting you.",
        answers: [
            ["Abandon them because their past makes them unreliable.", 2, 1],
            ["Demand every secret before offering assistance.", 2, 1],
            ["Help safely while checking claims and setting boundaries.", 5, 5],
            ["Trust everything because their expertise is valuable.", 2, 3]
        ]
    },

    // Decision 50 — Your Ideal Community
    {
        question: "A year later, settlements trade and cooperate, though machines remain dangerous. What kind of community would you help build?",
        answers: [
            ["A fortress with very limited outside contact.", 3, 3],
            ["A network sharing trade, knowledge, and defence.", 5, 5],
            ["A self-sufficient farm with a trusted community.", 4, 5],
            ["A technical centre restoring safe automation.", 4, 4]
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
const questions = shuffleArray(aiRobotApocalypseQuestions);

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
        title = "Machine-Apocalypse Risk";
        description = "Several choices expose you to avoidable machine threats. Work on verifying warnings, avoiding predictable routes, protecting access to essential systems, and keeping escape options open.";
        survival = "Review threat assessment and escape planning";
    } else if (survivalPercentage <= 40) {
        title = "Needs More Preparation";
        description = "You recognize some dangers, but may trust unverified systems or take unnecessary risks. Practise checking information independently, limiting machine access, and protecting essential resources.";
        survival = "Build stronger AI-emergency preparedness";
    } else if (survivalPercentage <= 60) {
        title = "Developing Survival Judgment";
        description = "You understand several important survival principles. Better verification, cautious use of technology, and stronger fallback plans would improve your decisions.";
        survival = "Strengthen your threat assessment";
    } else if (survivalPercentage <= 80) {
        title = "Strong Survival Decisions";
        description = "Your choices generally favour risk assessment, careful use of technology, and sensible resource management. You understand the importance of independent information and backup plans.";
        survival = "Strong overall decision-making";
    } else if (survivalPercentage <= 95) {
        title = "Very Strong Survival Judgment";
        description = "You consistently select safety-focused options across most scenarios. Your answers show careful thinking about machine behaviour, deception, resources, and long-term resilience.";
        survival = "Very strong preparedness decisions";
    } else {
        title = "Consistently Safety-Focused";
        description = "You selected the highest-scoring options in nearly every scenario. You show strong awareness of machine threats, verification, resource protection, and community survival.";
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
        moralityDescription = "Your answers tend to prioritize security and immediate survival over helping others. Consider where fairness, care, and cooperation can be maintained without creating unreasonable risks.";
    } else if (moralityPercentage <= 40) {
        moralityTitle = "Pragmatic Decisions";
        moralityDescription = "You show some concern for others while often prioritizing security and limited resources. Fair rules and careful verification can help balance these competing needs.";
    } else if (moralityPercentage <= 60) {
        moralityTitle = "Balanced Decisions";
        moralityDescription = "Your answers show a mix of self-protection and concern for others. You recognize that difficult situations require practical judgment as well as compassion.";
    } else if (moralityPercentage <= 80) {
        moralityTitle = "Compassionate Decisions";
        moralityDescription = "You place considerable value on helping others while recognizing practical limits on safety, trust, and resources.";
    } else {
        moralityTitle = "Humanitarian Decisions";
        moralityDescription = "Your answers strongly emphasize protecting people, helping others, and using fair principles while still considering the risks of an AI-controlled world.";
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

    const quizUrl = "https://apocalypsequizzes.com/ai-robot-apocalypse-survival-quiz/";

    const shareText =
        `🤖 I scored ${finalScore} on the AI and Robot Apocalypse Survival Quiz!\n\n` +
        `${title}\n` +
        `Decision profile: ${survival}\n` +
        `❤️ Compassion & Ethics: ${morality}\n\n` +
        `Could YOU survive a world controlled by rogue AI and hostile robots?`;

    const shareData = {
        title: "AI and Robot Apocalypse Survival Quiz",
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
