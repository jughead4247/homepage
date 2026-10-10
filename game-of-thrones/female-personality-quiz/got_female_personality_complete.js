"use strict";

/* ============================================================
QUIZ CONFIGURATION — GAME OF THRONES FEMALE CHARACTERS
============================================================ */

const QUIZ_CONFIG = {
    id: "got-female",

    name: "Game of Thrones Female Character Quiz",

    title: "Which Game of Thrones Female Character Are You?",

    traitProfileDescription:
        "your personality profile",

    shareTitle:
        "My Game of Thrones Female Character Quiz Result",

    challengeTitle:
        "Take the Game of Thrones Female Character Quiz",

    resultDescription:
        "is your closest personality match among the female characters of Game of Thrones, based on your answers."
};

/* ============================================================
TRAITS
18 TRAITS
============================================================ */

const TRAIT_KEYS = [
    "honor", "courage", "loyalty", "compassion", "morality",
    "pragmatism", "ruthlessness", "ambition", "leadership",
    "independence", "intelligence", "strategy", "manipulation",
    "charisma", "determination", "selfPreservation", "adaptability",
    "protectiveness"
];

const TRAITS = {
    honor: "Honor",
    courage: "Courage",
    loyalty: "Loyalty",
    compassion: "Compassion",
    morality: "Morality",
    pragmatism: "Pragmatism",
    ruthlessness: "Ruthlessness",
    ambition: "Ambition",
    leadership: "Leadership",
    independence: "Independence",
    intelligence: "Intelligence",
    strategy: "Strategy",
    manipulation: "Manipulation",
    charisma: "Charisma",
    determination: "Determination",
    selfPreservation: "Self-Preservation",
    adaptability: "Adaptability",
    protectiveness: "Protectiveness"
};

const TRAIT_WEIGHTS = {
    honor: 1.00,
    courage: 1.00,
    loyalty: 1.00,
    compassion: 0.95,
    morality: 0.95,
    pragmatism: 1.00,
    ruthlessness: 0.90,
    ambition: 1.00,
    leadership: 1.00,
    independence: 0.95,
    intelligence: 1.00,
    strategy: 1.00,
    manipulation: 0.90,
    charisma: 0.85,
    determination: 1.00,
    selfPreservation: 0.90,
    adaptability: 0.95,
    protectiveness: 1.00
};

/* ============================================================
CHARACTERS
16 FEMALE CHARACTER ROSTER

Core: 85–100 | Secondary: 50–84 | Minor: 1–49 | Zero: absent/incompatible
============================================================ */

const CHARACTERS = {

    daenerys: {
        name: "Daenerys Targaryen",
        image: "../images/daenerys.png",
        traits: {
            honor: 55, courage: 82, loyalty: 72, compassion: 84, morality: 62,
            pragmatism: 65, ruthlessness: 80, ambition: 99, leadership: 96,
            independence: 78, intelligence: 72, strategy: 78, manipulation: 58,
            charisma: 82, determination: 99, selfPreservation: 48,
            adaptability: 79, protectiveness: 82
        },
        description:
            "An ambitious and charismatic leader driven by liberation, conviction and an increasingly uncompromising sense of destiny."
    },

    cersei: {
        name: "Cersei Lannister",
        image: "../images/cersei.png",
        traits: {
            honor: 15, courage: 62, loyalty: 82, compassion: 25, morality: 18,
            pragmatism: 78, ruthlessness: 99, ambition: 88, leadership: 78,
            independence: 76, intelligence: 68, strategy: 82, manipulation: 82,
            charisma: 62, determination: 82, selfPreservation: 78,
            adaptability: 65, protectiveness: 99
        },
        description:
            "A fiercely ambitious survivor who protects her children and power through manipulation, ruthlessness and an uncompromising determination to defeat her enemies."
    },

    arya: {
        name: "Arya Stark",
        image: "../images/arya.png",
        traits: {
            honor: 38, courage: 88, loyalty: 68, compassion: 42, morality: 35,
            pragmatism: 68, ruthlessness: 82, ambition: 25, leadership: 32,
            independence: 99, intelligence: 78, strategy: 65, manipulation: 45,
            charisma: 45, determination: 99, selfPreservation: 82,
            adaptability: 97, protectiveness: 72
        },
        description:
            "An intensely independent survivor who adapts to dangerous circumstances and pursues her goals with courage, determination and a formidable capacity for vengeance."
    },

    sansa: {
        name: "Sansa Stark",
        image: "../images/sansa.png",
        traits: {
            honor: 45, courage: 72, loyalty: 78, compassion: 48, morality: 68,
            pragmatism: 84, ruthlessness: 48, ambition: 48, leadership: 82,
            independence: 78, intelligence: 84, strategy: 96, manipulation: 48,
            charisma: 48, determination: 82, selfPreservation: 82,
            adaptability: 99, protectiveness: 82
        },
        description:
            "A resilient political survivor who learns from betrayal and uses intelligence, strategic patience and adaptability to protect her people and secure her position."
    },

    catelyn: {
        name: "Catelyn Stark",
        image: "../images/catelyn.png",
        traits: {
            honor: 82, courage: 72, loyalty: 99, compassion: 94, morality: 78,
            pragmatism: 78, ruthlessness: 35, ambition: 25, leadership: 62,
            independence: 55, intelligence: 72, strategy: 78, manipulation: 35,
            charisma: 58, determination: 82, selfPreservation: 62,
            adaptability: 62, protectiveness: 99
        },
        description:
            "A fiercely devoted mother whose loyalty, compassion and protective instincts drive her to make difficult decisions for the people she loves."
    },

    brienne: {
        name: "Brienne of Tarth",
        image: "../images/brienne.png",
        traits: {
            honor: 99, courage: 99, loyalty: 99, compassion: 82, morality: 96,
            pragmatism: 48, ruthlessness: 12, ambition: 18, leadership: 65,
            independence: 82, intelligence: 58, strategy: 48, manipulation: 8,
            charisma: 38, determination: 82, selfPreservation: 35,
            adaptability: 72, protectiveness: 82
        },
        description:
            "An exceptionally principled warrior who treats honor, courage and loyalty as sacred responsibilities, even when keeping her promises comes at a personal cost."
    },

    ygritte: {
        name: "Ygritte",
        image: "../images/ygritte.png",
        traits: {
            honor: 42, courage: 96, loyalty: 82, compassion: 58, morality: 45,
            pragmatism: 58, ruthlessness: 48, ambition: 18, leadership: 45,
            independence: 99, intelligence: 62, strategy: 48, manipulation: 12,
            charisma: 78, determination: 82, selfPreservation: 58,
            adaptability: 99, protectiveness: 65
        },
        description:
            "A fiercely independent wildling warrior who values freedom, loyalty and living on her own terms rather than submitting to the expectations of others."
    },

    melisandre: {
        name: "Melisandre",
        image: "../images/melisandre.png",
        traits: {
            honor: 25, courage: 58, loyalty: 58, compassion: 25, morality: 35,
            pragmatism: 58, ruthlessness: 78, ambition: 78, leadership: 48,
            independence: 58, intelligence: 82, strategy: 82, manipulation: 99,
            charisma: 72, determination: 99, selfPreservation: 45,
            adaptability: 78, protectiveness: 48
        },
        description:
            "A determined priestess whose unwavering faith, strategic influence and willingness to manipulate events are shaped by her belief in a greater purpose."
    },

    margaery: {
        name: "Margaery Tyrell",
        image: "../images/margaery.png",
        traits: {
            honor: 45, courage: 58, loyalty: 68, compassion: 78, morality: 58,
            pragmatism: 88, ruthlessness: 42, ambition: 92, leadership: 72,
            independence: 65, intelligence: 92, strategy: 82, manipulation: 96,
            charisma: 99, determination: 78, selfPreservation: 72,
            adaptability: 82, protectiveness: 68
        },
        description:
            "A charming and intelligent political operator who combines social influence, calculated manipulation and genuine compassion to advance her ambitions."
    },

    yara: {
        name: "Yara Greyjoy",
        image: "../images/yara.png",
        traits: {
            honor: 58, courage: 96, loyalty: 82, compassion: 52, morality: 48,
            pragmatism: 82, ruthlessness: 68, ambition: 78, leadership: 94,
            independence: 99, intelligence: 72, strategy: 78, manipulation: 35,
            charisma: 82, determination: 94, selfPreservation: 68,
            adaptability: 82, protectiveness: 78
        },
        description:
            "A fearless ironborn leader who values independence, freedom and strength, and is willing to fight to secure her people's future."
    },

    olenna: {
        name: "Olenna Tyrell",
        image: "../images/olenna.png",
        traits: {
            honor: 30, courage: 82, loyalty: 96, compassion: 65, morality: 25,
            pragmatism: 72, ruthlessness: 88, ambition: 55, leadership: 72,
            independence: 78, intelligence: 72, strategy: 72, manipulation: 60,
            charisma: 78, determination: 99, selfPreservation: 40,
            adaptability: 72, protectiveness: 92
        },
        description:
            "A sharp-witted political strategist who relies on intelligence, blunt honesty, manipulation and ruthless practicality to defend her family and house."
    },

    ellaria: {
        name: "Ellaria Sand",
        image: "../images/ellaria.png",
        traits: {
            honor: 38, courage: 82, loyalty: 96, compassion: 48, morality: 35,
            pragmatism: 48, ruthlessness: 88, ambition: 48, leadership: 45,
            independence: 82, intelligence: 48, strategy: 48, manipulation: 48,
            charisma: 78, determination: 99, selfPreservation: 42,
            adaptability: 45, protectiveness: 82
        },
        description:
            "A passionate and fiercely loyal woman whose love for her family hardens into relentless determination and a willingness to pursue vengeance at devastating cost."
    },

    missandei: {
        name: "Missandei",
        image: "../images/missandei.png",
        traits: {
            honor: 82, courage: 78, loyalty: 99, compassion: 96, morality: 82,
            pragmatism: 68, ruthlessness: 12, ambition: 35, leadership: 52,
            independence: 68, intelligence: 82, strategy: 72, manipulation: 25,
            charisma: 72, determination: 82, selfPreservation: 58,
            adaptability: 82, protectiveness: 82
        },
        description:
            "A compassionate and intelligent adviser whose loyalty, moral conviction and quiet courage help her stand beside those she believes in."
    },

    meera: {
        name: "Meera Reed",
        image: "../images/meera.png",
        traits: {
            honor: 78, courage: 94, loyalty: 99, compassion: 78, morality: 72,
            pragmatism: 68, ruthlessness: 28, ambition: 18, leadership: 48,
            independence: 82, intelligence: 62, strategy: 58, manipulation: 8,
            charisma: 42, determination: 99, selfPreservation: 68,
            adaptability: 82, protectiveness: 99
        },
        description:
            "A courageous and selfless protector who endures extraordinary hardship to keep those in her care alive, rarely putting her own safety first."
    },

    gilly: {
        name: "Gilly",
        image: "../images/gilly.png",
        traits: {
            honor: 58, courage: 72, loyalty: 94, compassion: 99, morality: 82,
            pragmatism: 68, ruthlessness: 8, ambition: 12, leadership: 28,
            independence: 58, intelligence: 68, strategy: 42, manipulation: 8,
            charisma: 35, determination: 82, selfPreservation: 78,
            adaptability: 82, protectiveness: 99
        },
        description:
            "A compassionate survivor who grows beyond a life shaped by fear and abuse, finding strength in adaptability, loyalty and protecting her children."
    },

    lyanna: {
        name: "Lyanna Mormont",
        image: "images/lyanna.png",
        traits: {
            honor: 94, courage: 99, loyalty: 82, compassion: 58, morality: 78,
            pragmatism: 72, ruthlessness: 48, ambition: 58, leadership: 94,
            independence: 82, intelligence: 72, strategy: 72, manipulation: 18,
            charisma: 82, determination: 99, selfPreservation: 48,
            adaptability: 78, protectiveness: 82
        },
        description:
            "A bold young leader whose courage, honor and determination command respect, even when she must stand against far more powerful opponents."
    }
};

/* ============================================================
HIDDEN BEHAVIORAL ROUTES
Each character has five routes. The first three routes are primary.
============================================================ */

const ROUTES = {
    duty: "Duty",
    protection: "Protection",
    power: "Power",
    cunning: "Cunning",
    strategy: "Strategy",
    survival: "Survival",
    freedom: "Freedom",
    warrior: "Warrior",
    compassion: "Compassion",
    vengeance: "Vengeance"
};

const CHARACTER_ROUTES = {
    daenerys: ["power", "protection", "warrior", "compassion", "duty"],
    cersei: ["power", "cunning", "protection", "survival", "vengeance"],
    arya: ["freedom", "vengeance", "warrior", "survival", "protection"],
    sansa: ["survival", "strategy", "power", "duty", "cunning"],
    catelyn: ["protection", "duty", "compassion", "strategy", "survival"],
    brienne: ["duty", "warrior", "compassion", "protection", "freedom"],
    ygritte: ["freedom", "warrior", "survival", "protection", "vengeance"],
    melisandre: ["strategy", "cunning", "power", "vengeance", "survival"],
    margaery: ["power", "cunning", "strategy", "compassion", "protection"],
    yara: ["freedom", "warrior", "power", "survival", "strategy"],
    olenna: ["cunning", "strategy", "power", "protection", "survival"],
    ellaria: ["vengeance", "warrior", "freedom", "protection", "survival"],
    missandei: ["compassion", "duty", "protection", "strategy", "survival"],
    meera: ["protection", "duty", "warrior", "survival", "compassion"],
    gilly: ["survival", "compassion", "protection", "duty", "freedom"],
    lyanna: ["duty", "warrior", "power", "freedom", "protection"]
};

/* ============================================================
35 QUESTIONS
Five answers per question. No direct character affinity.
Only TRAIT_KEYS and ROUTES listed above are used.
The leadership/accountability questions are spread through the quiz.
============================================================ */

const questions = [

{
question: "You discover that a powerful lord is secretly plotting against your family. What do you do?",
answers: [
{text: "Confront him openly and make it clear that threatening your family will have consequences.", traits: ["courage", "ruthlessness", "determination"], route: "warrior"},
{text: "Gather evidence and quietly develop a plan to expose him at the right moment.", traits: ["intelligence", "strategy", "determination"], route: "strategy"},
{text: "Strengthen your family's position before he has a chance to act.", traits: ["leadership", "ambition", "protectiveness"], route: "power"},
{text: "Find out what he wants and determine whether his plans can be turned to your advantage.", traits: ["intelligence", "pragmatism", "manipulation"], route: "cunning"},
{text: "Protect your loved ones and prepare an escape in case everything goes wrong.", traits: ["protectiveness", "selfPreservation", "pragmatism"], route: "survival"}
]},

{
question: "What matters most to you when making a difficult decision?",
answers: [
{text: "Staying true to your principles, even when doing so comes at a cost.", traits: ["honor", "morality", "determination"], route: "duty"},
{text: "Protecting the people who depend on you.", traits: ["protectiveness", "compassion", "loyalty"], route: "protection"},
{text: "Achieving the outcome that gives you the greatest long-term advantage.", traits: ["strategy", "pragmatism", "ambition"], route: "power"},
{text: "Preserving your freedom and refusing to let others control your life.", traits: ["independence", "courage", "determination"], route: "freedom"},
{text: "Doing what is necessary to survive, even if the choice is unpleasant.", traits: ["selfPreservation", "pragmatism", "adaptability"], route: "survival"}
]},

{
question: "Someone publicly humiliates you in front of people whose respect you need. How do you respond?",
answers: [
{text: "Challenge the person immediately and demand an answer for their actions.", traits: ["courage", "determination", "honor"], route: "warrior"},
{text: "Remain composed, remember the insult and wait for the right opportunity to make them regret it.", traits: ["intelligence", "strategy", "determination"], route: "vengeance"},
{text: "Use charm and wit to turn the audience against the person who humiliated you.", traits: ["charisma", "intelligence", "manipulation"], route: "cunning"},
{text: "Ignore the insult and concentrate on becoming too powerful to be treated that way again.", traits: ["ambition", "leadership", "determination"], route: "power"},
{text: "Withdraw, study what happened and avoid giving that person another opportunity to hurt you.", traits: ["selfPreservation", "adaptability", "pragmatism"], route: "survival"}
]},

{
question: "You are placed in charge of a group during a dangerous crisis. What is your first priority?",
answers: [
{text: "Establish clear leadership and make sure everyone understands what must be done.", traits: ["leadership", "determination", "pragmatism"], route: "power"},
{text: "Identify the most vulnerable people and get them to safety.", traits: ["compassion", "protectiveness", "leadership"], route: "protection"},
{text: "Assess the danger, available resources and possible escape routes.", traits: ["intelligence", "strategy", "pragmatism"], route: "strategy"},
{text: "Encourage everyone to stand together and face the threat courageously.", traits: ["courage", "loyalty", "determination"], route: "warrior"},
{text: "Work out who can be trusted before deciding how to proceed.", traits: ["intelligence", "selfPreservation", "strategy"], route: "cunning"}
]},

/* Moved earlier to break up the leadership/accountability cluster. */
{
question: "During a mission to defend a settlement, one of your sworn swords disobeys your orders to rescue civilians. The rescue succeeds, but the mission is compromised. How do you respond?",
answers: [
{text: "Recognize the lives saved and listen to why they believed the rescue was necessary.", traits: ["compassion", "intelligence", "protectiveness"], route: "compassion"},
{text: "Enforce your authority because orders cannot be ignored whenever someone disagrees with them.", traits: ["leadership", "determination", "pragmatism"], route: "power"},
{text: "Reconsider your original orders and ask whether protecting the civilians should have been part of the plan.", traits: ["adaptability", "intelligence", "protectiveness"], route: "strategy"},
{text: "Review the circumstances carefully before deciding whether their actions were justified.", traits: ["morality", "pragmatism", "determination"], route: "duty"},
{text: "Support their decision because saving innocent lives mattered more than completing the mission as planned.", traits: ["compassion", "morality", "courage"], route: "protection"}
]},

{
question: "A close friend betrays your trust to protect themselves. What would you do?",
answers: [
{text: "End the friendship; once trust is broken, I cannot pretend the relationship is unchanged.", traits: ["loyalty", "selfPreservation", "determination"], route: "survival"},
{text: "Try to understand why they did it before deciding whether forgiveness is possible.", traits: ["compassion", "intelligence", "adaptability"], route: "compassion"},
{text: "Keep the relationship useful while quietly reconsidering how much information you share.", traits: ["pragmatism", "selfPreservation", "strategy"], route: "cunning"},
{text: "Give them another chance if they prove their loyalty through their actions.", traits: ["loyalty", "determination", "compassion"], route: "protection"},
{text: "Make sure they regret betraying you.", traits: ["ruthlessness", "determination", "pragmatism"], route: "vengeance"}
]},

{
question: "You are offered enormous power, but accepting it would require sacrifices. What would you do?",
answers: [
{text: "Accept if the power allows you to change an unjust system.", traits: ["ambition", "leadership", "morality"], route: "power"},
{text: "Accept only if the sacrifices do not endanger the people you love.", traits: ["protectiveness", "loyalty", "compassion"], route: "protection"},
{text: "Examine the costs carefully and negotiate for better terms before committing.", traits: ["pragmatism", "intelligence", "strategy"], route: "strategy"},
{text: "Refuse if gaining power means surrendering your independence to someone else.", traits: ["independence", "determination", "courage"], route: "freedom"},
{text: "Accept if it is the only realistic way to secure your future.", traits: ["selfPreservation", "ambition", "pragmatism"], route: "survival"}
]},

{
question: "Which quality would help you most in King's Landing?",
answers: [
{text: "The courage to stand up to powerful people.", traits: ["courage", "honor", "determination"], route: "warrior"},
{text: "The intelligence to understand what people really want.", traits: ["intelligence", "strategy", "adaptability"], route: "cunning"},
{text: "The patience to survive political games without revealing your intentions.", traits: ["strategy", "selfPreservation", "pragmatism"], route: "survival"},
{text: "The ability to earn trust and persuade people to support you.", traits: ["charisma", "compassion", "leadership"], route: "compassion"},
{text: "The instinct to recognize danger before it becomes impossible to escape.", traits: ["selfPreservation", "adaptability", "intelligence"], route: "survival"}
]},

/* Moved forward so it does not sit beside the other closing governance questions. */
{
question: "A low-ranking servant notices a serious threat that your powerful advisers have overlooked. What do you do?",
answers: [
{text: "Take the warning seriously immediately, regardless of the servant's social position.", traits: ["honor", "determination", "adaptability"], route: "duty"},
{text: "Ask the servant to explain what they observed and compare it with other available information.", traits: ["intelligence", "strategy", "pragmatism"], route: "strategy"},
{text: "Quietly investigate the threat yourself before alerting people who might dismiss the warning.", traits: ["selfPreservation", "intelligence", "strategy"], route: "cunning"},
{text: "Reward the servant for speaking up and give them a chance to contribute further information.", traits: ["compassion", "charisma", "protectiveness"], route: "compassion"},
{text: "Order discreet precautions to protect the settlement while your advisers verify the warning.", traits: ["leadership", "pragmatism", "protectiveness"], route: "protection"}
]},

{
question: "You discover that someone innocent will be punished for a crime they did not commit. What do you do?",
answers: [
{text: "Speak out against the injustice, even if it puts you in danger.", traits: ["courage", "morality", "honor"], route: "warrior"},
{text: "Gather proof and devise a way to expose the real culprit.", traits: ["intelligence", "strategy", "determination"], route: "strategy"},
{text: "Find a way to get the innocent person out of danger first.", traits: ["compassion", "protectiveness", "adaptability"], route: "protection"},
{text: "Use your influence to persuade those in power to reconsider.", traits: ["charisma", "intelligence", "leadership"], route: "compassion"},
{text: "If the system cannot be changed immediately, use practical means to keep the punishment from causing further harm.", traits: ["pragmatism", "strategy", "protectiveness"], route: "protection"}
]},

{
question: "You must choose between loyalty to your family and doing what you believe is right. What guides you?",
answers: [
{text: "Family comes first; the people you love should never face danger alone.", traits: ["loyalty", "protectiveness", "compassion"], route: "protection"},
{text: "Your principles must matter, even when the people closest to you disagree.", traits: ["honor", "morality", "independence"], route: "duty"},
{text: "You look for a solution that protects your family without abandoning your conscience.", traits: ["compassion", "pragmatism", "loyalty"], route: "compassion"},
{text: "You consider the long-term consequences before deciding which obligation matters more.", traits: ["intelligence", "strategy", "pragmatism"], route: "strategy"},
{text: "You refuse to let either side dictate your choice and follow your own judgment.", traits: ["independence", "determination", "intelligence"], route: "freedom"}
]},

/* Moved forward to separate it from the ending leadership questions. */
{
question: "Your house can avoid severe punishment if a loyal ally accepts blame for a failure that was partly your responsibility. What do you do?",
answers: [
{text: "Confess your own involvement, even if doing so places your position and future at risk.", traits: ["honor", "morality", "determination"], route: "duty"},
{text: "Protect your house first, believing that preserving it will allow you to help others later.", traits: ["protectiveness", "pragmatism", "ambition"], route: "power"},
{text: "Find a solution that prevents the ally from being sacrificed while limiting the damage to your house.", traits: ["compassion", "strategy", "protectiveness"], route: "protection"},
{text: "Examine whether accepting the blame would actually protect your people or merely postpone a greater disaster.", traits: ["intelligence", "pragmatism", "strategy"], route: "strategy"},
{text: "Refuse to decide immediately until you understand who will suffer most under each possible outcome.", traits: ["intelligence", "compassion", "pragmatism"], route: "compassion"}
]},

{
question: "You have defeated a dangerous enemy who is now powerless and in your custody. What do you do?",
answers: [
{text: "Ensure they face a fair punishment for their actions, without allowing hatred to decide their fate.", traits: ["morality", "honor", "determination"], route: "duty"},
{text: "Keep them imprisoned because their knowledge and connections could still be useful.", traits: ["intelligence", "pragmatism", "strategy"], route: "cunning"},
{text: "Show mercy if you believe they genuinely no longer pose a threat.", traits: ["compassion", "morality", "adaptability"], route: "compassion"},
{text: "Use their defeat to secure political advantages and strengthen your own position.", traits: ["ambition", "leadership", "strategy"], route: "power"},
{text: "Punish them decisively now so they cannot escape justice or return to threaten your people.", traits: ["ruthlessness", "protectiveness", "determination"], route: "vengeance"}
]},

{
question: "You have the opportunity to escape a dangerous situation, but someone you care about is still trapped. What do you do?",
answers: [
{text: "Turn back to rescue them, even if it puts your own life at risk.", traits: ["courage", "loyalty", "protectiveness"], route: "protection"},
{text: "Find a clever way to rescue them without sacrificing both of you.", traits: ["intelligence", "strategy", "compassion"], route: "strategy"},
{text: "Secure your escape first so you can return with help.", traits: ["selfPreservation", "pragmatism", "strategy"], route: "survival"},
{text: "Refuse to retreat until you have exhausted every possible way to reach them, even if another approach would be safer.", traits: ["determination", "courage", "loyalty"], route: "warrior"},
{text: "Withdraw if staying cannot help them, then seek another way to get them out.", traits: ["pragmatism", "intelligence", "selfPreservation"], route: "survival"}
]},

{
question: "How would you prefer to gain influence over others?",
answers: [
{text: "By proving that you are capable, decisive and worthy of leadership.", traits: ["leadership", "determination", "courage"], route: "power"},
{text: "By earning affection and building strong personal relationships.", traits: ["charisma", "compassion", "loyalty"], route: "compassion"},
{text: "By understanding people's desires, fears and weaknesses.", traits: ["intelligence", "manipulation", "strategy"], route: "cunning"},
{text: "By demonstrating courage and refusing to back down from challenges.", traits: ["courage", "determination", "leadership"], route: "warrior"},
{text: "By becoming indispensable through knowledge, competence and reliability.", traits: ["intelligence", "loyalty", "pragmatism"], route: "duty"}
]},

{
question: "A political alliance offers you security but requires you to obey someone you distrust. What do you do?",
answers: [
{text: "Accept temporarily while working toward a position of greater independence.", traits: ["strategy", "independence", "pragmatism"], route: "cunning"},
{text: "Reject the alliance because security is not worth surrendering your freedom.", traits: ["independence", "courage", "determination"], route: "freedom"},
{text: "Negotiate safeguards and make sure the arrangement benefits both sides.", traits: ["pragmatism", "intelligence", "strategy"], route: "strategy"},
{text: "Accept if it protects your family or the people who depend on you.", traits: ["protectiveness", "loyalty", "compassion"], route: "protection"},
{text: "Search for another ally who offers a better balance of security and control.", traits: ["intelligence", "adaptability", "independence"], route: "freedom"}
]},

{
question: "You have been wronged, and the person responsible has escaped punishment. What matters most to you?",
answers: [
{text: "Making sure the person can never hurt you or your loved ones again.", traits: ["protectiveness", "determination", "ruthlessness"], route: "protection"},
{text: "Ensuring that the person faces consequences proportionate to their wrongdoing.", traits: ["honor", "morality", "determination"], route: "duty"},
{text: "Finding a way to defeat them without destroying your own future.", traits: ["strategy", "pragmatism", "intelligence"], route: "strategy"},
{text: "Moving forward rather than allowing resentment to control your life.", traits: ["adaptability", "independence", "compassion"], route: "freedom"},
{text: "Wait until you have enough power and information to make them pay on your terms.", traits: ["intelligence", "strategy", "determination"], route: "vengeance"}
]},

{
question: "Your family expects you to follow a path that would strengthen your house, but it conflicts with the life you want for yourself. What do you do?",
answers: [
{text: "Accept the responsibility because the needs of your family outweigh your personal wishes.", traits: ["loyalty", "honor", "protectiveness"], route: "duty"},
{text: "Refuse to surrender your future simply because others have decided what is appropriate for you.", traits: ["independence", "determination", "courage"], route: "freedom"},
{text: "Negotiate a compromise that protects your family's interests while preserving some independence.", traits: ["pragmatism", "intelligence", "protectiveness"], route: "protection"},
{text: "Appear to accept their decision while quietly creating other opportunities for yourself.", traits: ["manipulation", "strategy", "independence"], route: "cunning"},
{text: "Examine the long-term consequences before deciding whether resisting is worth the cost.", traits: ["intelligence", "pragmatism", "strategy"], route: "survival"}
]},

{
question: "A powerful enemy holds you captive and wants to use you as leverage against your allies. How would you respond?",
answers: [
{text: "Refuse to cooperate, even if doing so makes your captivity more dangerous.", traits: ["courage", "honor", "determination"], route: "duty"},
{text: "Observe your captors, learn their weaknesses and wait for an opportunity to escape.", traits: ["intelligence", "adaptability", "selfPreservation"], route: "survival"},
{text: "Negotiate for better conditions while concealing your real intentions.", traits: ["charisma", "strategy", "pragmatism"], route: "cunning"},
{text: "Cooperate enough to survive, protecting your strength until you have a genuine opportunity to act.", traits: ["selfPreservation", "pragmatism", "adaptability"], route: "survival"},
{text: "Attempt to turn the captors against one another so that their control over you weakens.", traits: ["manipulation", "intelligence", "strategy"], route: "cunning"}
]},

{
question: "Your plans suddenly collapse because an unexpected betrayal changes everything. What is your next move?",
answers: [
{text: "Rebuild your plan using whatever information and resources remain.", traits: ["intelligence", "strategy", "adaptability"], route: "strategy"},
{text: "Confront the traitor and make an example of them.", traits: ["ruthlessness", "determination", "courage"], route: "vengeance"},
{text: "Change direction immediately and focus on surviving the consequences.", traits: ["adaptability", "selfPreservation", "pragmatism"], route: "survival"},
{text: "Seek help from people who still trust you and reorganize together.", traits: ["loyalty", "leadership", "compassion"], route: "compassion"},
{text: "Identify who benefited from the betrayal and use that knowledge to outmaneuver them.", traits: ["intelligence", "strategy", "manipulation"], route: "cunning"}
]},

{
question: "What kind of leader would you want to become?",
answers: [
{text: "A respected leader who protects people and keeps their promises.", traits: ["honor", "protectiveness", "leadership"], route: "duty"},
{text: "A powerful leader who can impose order and make difficult decisions.", traits: ["leadership", "ruthlessness", "determination"], route: "power"},
{text: "A strategic leader who anticipates threats before they emerge.", traits: ["strategy", "intelligence", "pragmatism"], route: "strategy"},
{text: "A leader who inspires loyalty by understanding people's hopes and fears.", traits: ["charisma", "compassion", "intelligence"], route: "compassion"},
{text: "A leader who refuses to follow traditions that prevent necessary change.", traits: ["independence", "determination", "ambition"], route: "freedom"}
]},

/* Moved forward from the end to break up the similar leadership questions. */
{
question: "A decision you made as a leader has caused serious harm to people who trusted you. What do you do?",
answers: [
{text: "Admit your mistake publicly and take responsibility for the consequences.", traits: ["honor", "morality", "determination"], route: "duty"},
{text: "Concentrate on repairing the damage first, then examine how the decision went wrong.", traits: ["compassion", "protectiveness", "pragmatism"], route: "compassion"},
{text: "Explain the difficult circumstances that influenced your decision while recognizing that those harmed deserve an answer.", traits: ["intelligence", "pragmatism", "compassion"], route: "compassion"},
{text: "Consult your advisers, reconsider your approach and make whatever changes are needed to prevent another failure.", traits: ["intelligence", "strategy", "adaptability"], route: "strategy"},
{text: "Protect your authority while finding a practical way to resolve the crisis before it grows worse.", traits: ["pragmatism", "leadership", "selfPreservation"], route: "power"}
]},

{
question: "Someone you love makes a terrible mistake that could endanger everyone. How would you respond?",
answers: [
{text: "Help them repair the damage while making sure they understand their responsibility.", traits: ["morality", "determination", "compassion"], route: "duty"},
{text: "Protect them from immediate consequences and deal with the situation afterward.", traits: ["loyalty", "protectiveness", "compassion"], route: "protection"},
{text: "Insist that they face the consequences, regardless of your relationship.", traits: ["honor", "morality", "determination"], route: "duty"},
{text: "Develop a practical solution that limits the damage to everyone involved.", traits: ["pragmatism", "intelligence", "strategy"], route: "strategy"},
{text: "Take control of the situation yourself if you believe they cannot be trusted to fix it.", traits: ["leadership", "determination", "pragmatism"], route: "power"}
]},

{
question: "A belief that has guided many of your decisions is challenged by convincing evidence. What do you do?",
answers: [
{text: "Accept the evidence and let go of the belief, even if it forces you to rethink who you are.", traits: ["adaptability", "independence", "morality"], route: "freedom"},
{text: "Investigate the evidence carefully before deciding whether your beliefs need to change.", traits: ["intelligence", "strategy", "pragmatism"], route: "strategy"},
{text: "Consult people you trust who understand the issue better than you do.", traits: ["loyalty", "intelligence", "compassion"], route: "compassion"},
{text: "Hold firmly to your conviction unless the evidence becomes impossible to dismiss.", traits: ["determination", "honor", "morality"], route: "duty"},
{text: "Adapt your actions to the new information while avoiding a public admission that you were wrong.", traits: ["adaptability", "pragmatism", "manipulation"], route: "cunning"}
]},

{
question: "You must negotiate with someone who is more powerful than you. What approach would you take?",
answers: [
{text: "Speak confidently and make your demands clear.", traits: ["courage", "charisma", "determination"], route: "warrior"},
{text: "Learn what they value and offer an exchange that benefits both sides.", traits: ["pragmatism", "intelligence", "compassion"], route: "compassion"},
{text: "Conceal your weaknesses while searching for leverage.", traits: ["manipulation", "strategy", "selfPreservation"], route: "cunning"},
{text: "Appeal to their sense of duty, justice or responsibility.", traits: ["honor", "charisma", "morality"], route: "duty"},
{text: "Avoid unnecessary confrontation and secure the most important concessions first.", traits: ["pragmatism", "strategy", "selfPreservation"], route: "survival"}
]},

{
question: "You joined a movement because you believed in its cause, but its leader begins committing acts you cannot defend. What do you do?",
answers: [
{text: "Remain involved and try to change the leader's decisions from within.", traits: ["strategy", "compassion", "leadership"], route: "strategy"},
{text: "Leave the movement because its actions have betrayed the principles that brought you there.", traits: ["honor", "morality", "independence"], route: "freedom"},
{text: "Publicly challenge the leader, even if it divides the movement and weakens its chances of victory.", traits: ["courage", "determination", "morality"], route: "warrior"},
{text: "Continue supporting the cause while quietly helping the people harmed by its leadership.", traits: ["protectiveness", "compassion", "loyalty"], route: "protection"},
{text: "Decide whether replacing the leader could save the movement, then build support for a replacement if necessary.", traits: ["leadership", "strategy", "determination"], route: "power"}
]},

{
question: "You learn a secret that could destroy a powerful person's reputation. What would you do with it?",
answers: [
{text: "Reveal it if doing so exposes serious wrongdoing and prevents further harm.", traits: ["morality", "courage", "determination"], route: "duty"},
{text: "Keep it private unless it becomes necessary to defend yourself or others.", traits: ["loyalty", "pragmatism", "selfPreservation"], route: "survival"},
{text: "Use it as leverage to negotiate a better position.", traits: ["manipulation", "intelligence", "pragmatism"], route: "cunning"},
{text: "Verify the information and study the consequences before acting.", traits: ["intelligence", "strategy", "pragmatism"], route: "strategy"},
{text: "Reveal it when the moment is right to make them answer for the harm they caused.", traits: ["determination", "ruthlessness", "intelligence"], route: "vengeance"}
]},

{
question: "What would you find hardest to forgive?",
answers: [
{text: "Someone deliberately harming an innocent person.", traits: ["compassion", "morality", "protectiveness"], route: "protection"},
{text: "Someone betraying a promise made to you or your family.", traits: ["honor", "loyalty", "determination"], route: "duty"},
{text: "Someone abusing power to control or humiliate others.", traits: ["morality", "independence", "courage"], route: "warrior"},
{text: "Someone destroying everything you worked hard to achieve.", traits: ["ambition", "determination", "pragmatism"], route: "power"},
{text: "Someone abandoning you when your life depended on them.", traits: ["loyalty", "protectiveness", "compassion"], route: "vengeance"}
]},

{
question: "You are responsible for making a decision that will affect an entire kingdom. How do you approach it?",
answers: [
{text: "Consider the people most likely to suffer and prioritize reducing their hardship.", traits: ["compassion", "morality", "protectiveness"], route: "compassion"},
{text: "Evaluate the likely outcomes and choose the option that offers long-term stability.", traits: ["strategy", "pragmatism", "intelligence"], route: "strategy"},
{text: "Make the decision decisively and accept responsibility for the consequences.", traits: ["leadership", "determination", "courage"], route: "power"},
{text: "Consult people with different perspectives before committing.", traits: ["intelligence", "adaptability", "compassion"], route: "compassion"},
{text: "Choose the path that gives your kingdom the greatest independence and strength.", traits: ["ambition", "leadership", "independence"], route: "freedom"}
]},

{
question: "You must live among people who distrust you and reject your background. How would you adapt?",
answers: [
{text: "Demonstrate your reliability through consistent actions.", traits: ["loyalty", "determination", "pragmatism"], route: "duty"},
{text: "Learn their customs and try to understand what lies behind their hostility.", traits: ["adaptability", "intelligence", "compassion"], route: "compassion"},
{text: "Build relationships with influential people who can help change their opinions.", traits: ["charisma", "intelligence", "manipulation"], route: "cunning"},
{text: "Refuse to hide who you are simply to gain acceptance.", traits: ["independence", "courage", "determination"], route: "freedom"},
{text: "Keep your distance, observe carefully and reveal only what is necessary.", traits: ["selfPreservation", "strategy", "pragmatism"], route: "survival"}
]},

{
question: "Which compromise would you be most willing to make?",
answers: [
{text: "Giving up personal recognition to protect someone you love.", traits: ["loyalty", "protectiveness", "compassion"], route: "protection"},
{text: "Delaying an important goal to secure a better opportunity later.", traits: ["pragmatism", "strategy", "determination"], route: "strategy"},
{text: "Pretending to agree with someone while quietly pursuing a different plan.", traits: ["manipulation", "intelligence", "adaptability"], route: "cunning"},
{text: "Accepting temporary hardship to preserve your principles.", traits: ["honor", "morality", "determination"], route: "duty"},
{text: "Abandoning a familiar way of life to gain greater freedom.", traits: ["independence", "adaptability", "courage"], route: "freedom"}
]},

{
question: "You are surrounded by people who are afraid to oppose an unjust ruler. What would you do?",
answers: [
{text: "Set an example by openly challenging the ruler's actions.", traits: ["courage", "honor", "determination"], route: "warrior"},
{text: "Organize resistance carefully so that people are not sacrificed needlessly.", traits: ["strategy", "intelligence", "protectiveness"], route: "strategy"},
{text: "Persuade influential people to withdraw their support from the ruler.", traits: ["charisma", "manipulation", "intelligence"], route: "cunning"},
{text: "Help vulnerable people survive while looking for an opportunity to escape.", traits: ["protectiveness", "compassion", "pragmatism"], route: "protection"},
{text: "Build enough strength and influence to make opposition effective.", traits: ["ambition", "leadership", "determination"], route: "power"}
]},

{
question: "What would you most want people to remember about you?",
answers: [
{text: "That you stood by your principles when it mattered most.", traits: ["honor", "morality", "determination"], route: "duty"},
{text: "That you protected those who could not protect themselves.", traits: ["protectiveness", "compassion", "loyalty"], route: "protection"},
{text: "That you changed the balance of power and achieved what others thought impossible.", traits: ["ambition", "determination", "leadership"], route: "power"},
{text: "That you were clever enough to survive and overcome difficult circumstances.", traits: ["intelligence", "adaptability", "pragmatism"], route: "survival"},
{text: "That you lived freely and never allowed fear to decide your entire life.", traits: ["independence", "courage", "determination"], route: "freedom"}
]},

{
question: "A trusted adviser recommends a plan that seems effective but morally troubling. What do you do?",
answers: [
{text: "Reject it if it violates principles you are unwilling to abandon.", traits: ["honor", "morality", "determination"], route: "duty"},
{text: "Examine whether the harm is necessary and whether a better option exists.", traits: ["morality", "intelligence", "strategy"], route: "strategy"},
{text: "Consider the consequences of refusing it before making a decision.", traits: ["pragmatism", "strategy", "intelligence"], route: "survival"},
{text: "Modify the plan to protect innocent people while preserving its useful elements.", traits: ["compassion", "pragmatism", "protectiveness"], route: "protection"},
{text: "Question the adviser's motives and investigate what they may be concealing.", traits: ["intelligence", "strategy", "manipulation"], route: "cunning"}
]},

{
question: "You lose your home, social position and most of the life you once knew. What becomes your first priority?",
answers: [
{text: "Secure food, shelter and safety before attempting anything more ambitious.", traits: ["selfPreservation", "pragmatism", "adaptability"], route: "survival"},
{text: "Find allies who can help you rebuild what you have lost.", traits: ["charisma", "loyalty", "leadership"], route: "compassion"},
{text: "Discover a new purpose that gives your life meaning beyond your former position.", traits: ["determination", "independence", "adaptability"], route: "freedom"},
{text: "Rebuild your influence so that you will never again be entirely at another person's mercy.", traits: ["ambition", "leadership", "strategy"], route: "power"},
{text: "Preserve the traditions, memories and relationships that connect you to the life you lost.", traits: ["honor", "loyalty", "protectiveness"], route: "compassion"}
]}

];

/* ============================================================
VALIDATION
============================================================ */

const EXPECTED_CHARACTER_COUNT = 16;
const EXPECTED_QUESTION_COUNT = 35;
const EXPECTED_TRAIT_COUNT = 18;
const EXPECTED_ANSWERS_PER_QUESTION = 5;
const EXPECTED_TRAITS_PER_ANSWER = 3;

function clamp(value, min = 0, max = 100) {
    const numeric = Number(value);

    if (!Number.isFinite(numeric)) {
        return min;
    }

    return Math.max(
        min,
        Math.min(max, numeric)
    );
}


function validateData() {

    const errors = [];

    const characterIds =
        Object.keys(CHARACTERS);

    const traitKeys =
        new Set(TRAIT_KEYS);

    /* --------------------------------------------------------
    CONFIGURATION COUNTS
    -------------------------------------------------------- */

    if (
        characterIds.length !==
        EXPECTED_CHARACTER_COUNT
    ) {
        errors.push(
            `Expected ${EXPECTED_CHARACTER_COUNT} characters, ` +
            `found ${characterIds.length}.`
        );
    }

    if (
        questions.length !==
        EXPECTED_QUESTION_COUNT
    ) {
        errors.push(
            `Expected ${EXPECTED_QUESTION_COUNT} questions, ` +
            `found ${questions.length}.`
        );
    }

    if (
        TRAIT_KEYS.length !==
        EXPECTED_TRAIT_COUNT
    ) {
        errors.push(
            `Expected ${EXPECTED_TRAIT_COUNT} traits, ` +
            `found ${TRAIT_KEYS.length}.`
        );
    }

    if (
        Object.keys(TRAITS).length !==
        TRAIT_KEYS.length
    ) {
        errors.push(
            "TRAITS labels do not match TRAIT_KEYS."
        );
    }

    if (
        Object.keys(TRAIT_WEIGHTS).length !==
        TRAIT_KEYS.length
    ) {
        errors.push(
            "TRAIT_WEIGHTS do not match TRAIT_KEYS."
        );
    }

    /* --------------------------------------------------------
    TRAIT DEFINITIONS
    -------------------------------------------------------- */

    TRAIT_KEYS.forEach(trait => {

        if (
            !Object.prototype.hasOwnProperty.call(
                TRAITS,
                trait
            )
        ) {
            errors.push(
                `Missing display label for trait "${trait}".`
            );
        }

        if (
            !Object.prototype.hasOwnProperty.call(
                TRAIT_WEIGHTS,
                trait
            )
        ) {
            errors.push(
                `Missing weight for trait "${trait}".`
            );
        } else if (
            !Number.isFinite(
                TRAIT_WEIGHTS[trait]
            ) ||
            TRAIT_WEIGHTS[trait] <= 0
        ) {
            errors.push(
                `Invalid weight for trait "${trait}".`
            );
        }

    });

    /* --------------------------------------------------------
    QUESTION VALIDATION
    -------------------------------------------------------- */

    questions.forEach((question, qi) => {

        if (
            !question ||
            typeof question.question !== "string" ||
            !question.question.trim()
        ) {
            errors.push(
                `Question ${qi + 1} has no valid question text.`
            );
        }

        if (
            !Array.isArray(question?.answers) ||
            question.answers.length !==
                EXPECTED_ANSWERS_PER_QUESTION
        ) {
            errors.push(
                `Question ${qi + 1} must have exactly ` +
                `${EXPECTED_ANSWERS_PER_QUESTION} answers.`
            );

            return;
        }

        question.answers.forEach((answer, ai) => {

            const prefix =
                `Q${qi + 1} A${ai + 1}`;

            if (
                !answer ||
                typeof answer.text !== "string" ||
                !answer.text.trim()
            ) {
                errors.push(
                    `${prefix}: missing or invalid answer text.`
                );
            }

            /* Validate route */

            if (
                typeof answer.route !== "string" ||
                !Object.prototype.hasOwnProperty.call(
                    ROUTES,
                    answer.route
                )
            ) {
                errors.push(
                    `${prefix}: invalid route.`
                );
            }

            /* Validate traits */

            if (!Array.isArray(answer.traits)) {

                errors.push(
                    `${prefix}: traits must be an array.`
                );

                return;
            }

            if (
                answer.traits.length !==
                EXPECTED_TRAITS_PER_ANSWER
            ) {
                errors.push(
                    `${prefix}: expected exactly ` +
                    `${EXPECTED_TRAITS_PER_ANSWER} traits, ` +
                    `found ${answer.traits.length}.`
                );
            }

            if (
                new Set(answer.traits).size !==
                answer.traits.length
            ) {
                errors.push(
                    `${prefix}: duplicate traits found.`
                );
            }

            answer.traits.forEach(trait => {

                if (!traitKeys.has(trait)) {

                    errors.push(
                        `${prefix}: invalid trait "${trait}".`
                    );

                }

            });

        });

    });

    /* --------------------------------------------------------
    CHARACTER VALIDATION
    -------------------------------------------------------- */

    characterIds.forEach(id => {

        const character =
            CHARACTERS[id];

        if (
            !character ||
            typeof character.name !== "string" ||
            !character.name.trim()
        ) {
            errors.push(
                `${id}: missing or invalid character name.`
            );

            return;
        }

        const characterTraits =
            character.traits || {};

        TRAIT_KEYS.forEach(trait => {

            if (
                !Object.prototype.hasOwnProperty.call(
                    characterTraits,
                    trait
                )
            ) {
                errors.push(
                    `${id}: missing trait "${trait}".`
                );

                return;
            }

            const value =
                characterTraits[trait];

            if (
                typeof value !== "number" ||
                !Number.isFinite(value) ||
                value < 0 ||
                value > 100
            ) {
                errors.push(
                    `${id}: invalid value for trait "${trait}".`
                );
            }

        });

        /* Detect unsupported character trait keys */

        Object.keys(characterTraits).forEach(trait => {

            if (!traitKeys.has(trait)) {

                errors.push(
                    `${id}: unexpected trait "${trait}".`
                );

            }

        });

        /* Every character must have five behavioral routes */

        const characterRoutes =
            CHARACTER_ROUTES[id];

        if (
            !Array.isArray(characterRoutes) ||
            characterRoutes.length !== 5
        ) {
            errors.push(
                `${id}: expected exactly five character routes.`
            );
        } else {

            characterRoutes.forEach(route => {

                if (
                    !Object.prototype.hasOwnProperty.call(
                        ROUTES,
                        route
                    )
                ) {
                    errors.push(
                        `${id}: invalid route "${route}".`
                    );
                }

            });

            if (
                new Set(characterRoutes).size !==
                characterRoutes.length
            ) {
                errors.push(
                    `${id}: duplicate character routes found.`
                );
            }

        }

    });

    /* Detect route profiles without matching characters */

    Object.keys(CHARACTER_ROUTES).forEach(id => {

        if (
            !Object.prototype.hasOwnProperty.call(
                CHARACTERS,
                id
            )
        ) {
            errors.push(
                `Character routes reference unknown character "${id}".`
            );
        }

    });

    /* --------------------------------------------------------
    VALIDATION RESULT
    -------------------------------------------------------- */

    if (errors.length) {

        console.error(
            "GoT female quiz validation errors:",
            errors
        );

        errors.forEach(error => {
            console.error(error);
        });

        return false;
    }

    console.log(
        "GoT Female Personality Quiz validated: " +
        `${questions.length} questions, ` +
        `${characterIds.length} characters, ` +
        `${TRAIT_KEYS.length} traits, ` +
        `${Object.keys(ROUTES).length} routes.`
    );

    return true;
}

/* ============================================================
RUN VALIDATION
============================================================ */

if (!validateData()) {
    throw new Error(
        "Game of Thrones Female Characters Quiz data validation failed."
    );
}

/* ============================================================
TRAIT AND ROUTE OPPORTUNITY NORMALIZATION

A trait's maximum opportunity is the number of questions
where that trait appears in at least one answer.

A route's maximum opportunity is the number of questions
where that route appears in at least one answer.

Each question counts only once per trait or route.
============================================================ */

const TRAIT_OPPORTUNITY = {};
const ROUTE_OPPORTUNITY = {};

TRAIT_KEYS.forEach(trait => {

    TRAIT_OPPORTUNITY[trait] = 0;

});

Object.keys(ROUTES).forEach(route => {

    ROUTE_OPPORTUNITY[route] = 0;

});


questions.forEach(question => {

    const traitsPresent = new Set();
    const routesPresent = new Set();

    if (!Array.isArray(question.answers)) {
        return;
    }

    question.answers.forEach(answer => {

        if (!answer) {
            return;
        }

        if (Array.isArray(answer.traits)) {

            answer.traits.forEach(trait => {

                if (
                    Object.prototype.hasOwnProperty.call(
                        TRAIT_OPPORTUNITY,
                        trait
                    )
                ) {
                    traitsPresent.add(trait);
                }

            });

        }

        if (
            answer.route &&
            Object.prototype.hasOwnProperty.call(
                ROUTE_OPPORTUNITY,
                answer.route
            )
        ) {
            routesPresent.add(answer.route);
        }

    });

    traitsPresent.forEach(trait => {

        TRAIT_OPPORTUNITY[trait]++;

    });

    routesPresent.forEach(route => {

        ROUTE_OPPORTUNITY[route]++;

    });

});


/* ============================================================
PERSONALITY CALCULATION
============================================================ */

function isValidAnswerIndex(
    question,
    answerIndex
) {

    return (
        Number.isInteger(answerIndex) &&
        answerIndex >= 0 &&
        Array.isArray(question?.answers) &&
        answerIndex < question.answers.length
    );

}


function calculateRouteProfile(personality) {

    const result = {};

    Object.keys(ROUTES).forEach(route => {

        const opportunity =
            Number(
                ROUTE_OPPORTUNITY[route]
            ) || 0;

        const raw =
            Number(
                personality?.routeRaw?.[route]
            ) || 0;

        result[route] =
            opportunity > 0
                ? clamp(
                    (raw / opportunity) * 100
                )
                : 0;

    });

    return result;
}


function calculatePersonality(answerIndexes) {

    const raw = {};
    const maxScores = {};

    const routeRaw = {};
    const routeMaxScores = {};

    const selections =
        Array.isArray(answerIndexes)
            ? answerIndexes
            : [];

    /* --------------------------------------------------------
    INITIALIZE TRAIT COUNTS
    -------------------------------------------------------- */

    TRAIT_KEYS.forEach(trait => {

        raw[trait] = 0;

        maxScores[trait] =
            TRAIT_OPPORTUNITY[trait] || 0;

    });

    /* --------------------------------------------------------
    INITIALIZE ROUTE COUNTS
    -------------------------------------------------------- */

    Object.keys(ROUTES).forEach(route => {

        routeRaw[route] = 0;

        routeMaxScores[route] =
            ROUTE_OPPORTUNITY[route] || 0;

    });

    /* --------------------------------------------------------
    COUNT SELECTED ANSWERS
    -------------------------------------------------------- */

    questions.forEach(
        (question, questionIndex) => {

            const answerIndex =
                selections[questionIndex];

            if (
                !isValidAnswerIndex(
                    question,
                    answerIndex
                )
            ) {
                return;
            }

            const answer =
                question.answers[answerIndex];

            /* Count each selected trait once */

            const selectedTraits =
                new Set(answer.traits || []);

            selectedTraits.forEach(trait => {

                if (
                    Object.prototype.hasOwnProperty.call(
                        raw,
                        trait
                    )
                ) {
                    raw[trait]++;
                }

            });

            /* Count selected behavioral route */

            if (
                answer.route &&
                Object.prototype.hasOwnProperty.call(
                    routeRaw,
                    answer.route
                )
            ) {
                routeRaw[answer.route]++;
            }

        }
    );

    /* --------------------------------------------------------
    NORMALIZE TRAIT PROFILE
    Values: 0–100
    -------------------------------------------------------- */

    const profile = {};

    TRAIT_KEYS.forEach(trait => {

        const max =
            Number(maxScores[trait]) || 0;

        profile[trait] =
            max > 0
                ? Math.round(
                    clamp(
                        (raw[trait] / max) * 100
                    )
                )
                : 0;

    });

    /* --------------------------------------------------------
    NORMALIZE ROUTE PROFILE
    Values: 0–100
    -------------------------------------------------------- */

    const routeProfile =
        calculateRouteProfile({
            routeRaw
        });

    /* --------------------------------------------------------
    COMPLETION

    Only valid selected answers count as completed.
    Invalid, missing, negative or out-of-range indexes
    do not increase completion.
    -------------------------------------------------------- */

    const answered =
        questions.reduce(
            (count, question, questionIndex) => {

                return count +
                    (
                        isValidAnswerIndex(
                            question,
                            selections[questionIndex]
                        )
                            ? 1
                            : 0
                    );

            },
            0
        );

    const completion =
        questions.length > 0
            ? Math.round(
                (answered / questions.length) * 100
            )
            : 0;

    return {
        raw,
        maxScores,
        profile,

        routeRaw,
        routeMaxScores,
        routeProfile,

        completion
    };

}


/* ============================================================
TRAIT MATCHING
============================================================ */

function getCharacterTraitValue(
    character,
    trait
) {

    return clamp(
        character?.traits?.[trait] ?? 0
    );

}


function getTraitSimilarity(
    userValue,
    characterValue
) {

    return (
        100 -
        Math.abs(
            clamp(userValue) -
            clamp(characterValue)
        )
    );

}


/* ============================================================
CORE TRAIT FIT

Uses the character's four strongest core traits.
The first core trait receives the greatest weight.
============================================================ */

function calculateCoreFit(
    character,
    profile
) {

    const coreTraits =
        TRAIT_KEYS
            .map(trait => ({
                trait,
                value:
                    getCharacterTraitValue(
                        character,
                        trait
                    )
            }))
            .filter(
                item => item.value >= 85
            )
            .sort(
                (a, b) =>
                    b.value - a.value
            )
            .slice(0, 4);

    if (!coreTraits.length) {
        return 0;
    }

    const weights = [
        1.35,
        1.27,
        1.19,
        1.11
    ];

    let total = 0;
    let weightTotal = 0;

    coreTraits.forEach(
        (item, index) => {

            const weight =
                weights[index] || 1;

            total +=
                getTraitSimilarity(
                    profile[item.trait] || 0,
                    item.value
                ) * weight;

            weightTotal += weight;

        }
    );

    return weightTotal
        ? total / weightTotal
        : 0;

}


/* ============================================================
SECONDARY FIT

Traits rated 50–84 for the character.
============================================================ */

function calculateSecondaryFit(
    character,
    profile
) {

    const secondaryTraits =
        TRAIT_KEYS
            .map(trait => ({
                trait,
                value:
                    getCharacterTraitValue(
                        character,
                        trait
                    )
            }))
            .filter(
                item =>
                    item.value >= 50 &&
                    item.value < 85
            );

    if (!secondaryTraits.length) {
        return 0;
    }

    let total = 0;

    secondaryTraits.forEach(item => {

        total +=
            getTraitSimilarity(
                profile[item.trait] || 0,
                item.value
            );

    });

    return total /
        secondaryTraits.length;

}


/* ============================================================
MINOR FIT

Traits rated 1–49 for the character.
============================================================ */

function calculateMinorFit(
    character,
    profile
) {

    const minorTraits =
        TRAIT_KEYS
            .map(trait => ({
                trait,
                value:
                    getCharacterTraitValue(
                        character,
                        trait
                    )
            }))
            .filter(
                item =>
                    item.value > 0 &&
                    item.value < 50
            );

    if (!minorTraits.length) {
        return 50;
    }

    let total = 0;

    minorTraits.forEach(item => {

        total +=
            getTraitSimilarity(
                profile[item.trait] || 0,
                item.value
            );

    });

    return total /
        minorTraits.length;

}


/* ============================================================
OVERALL TRAIT FIT

Weighted similarity across all 18 traits.
============================================================ */

function calculateOverallTraitFit(
    character,
    profile
) {

    let total = 0;
    let weightTotal = 0;

    TRAIT_KEYS.forEach(trait => {

        const weight =
            Number(
                TRAIT_WEIGHTS[trait]
            ) || 1;

        total +=
            getTraitSimilarity(
                profile[trait] || 0,
                getCharacterTraitValue(
                    character,
                    trait
                )
            ) * weight;

        weightTotal += weight;

    });

    return weightTotal
        ? total / weightTotal
        : 0;

}



/* ============================================================
CONTRADICTION PENALTY
GAME OF THRONES FEMALE CHARACTER QUIZ

Penalizes character matches when the user's strongest traits
are comparatively weak in the character's profile.

Core trait:      85+
Secondary trait: 50–84
Minor trait:     above 0 and below 50

Maximum penalty: 3.75 points.
============================================================ */

function calculateContradictionPenalty(
    character,
    profile
) {

    if (
        !character ||
        !profile ||
        !Array.isArray(TRAIT_KEYS) ||
        TRAIT_KEYS.length === 0
    ) {
        return 0;
    }


    /* --------------------------------------------------------
       COLLECT ALL TRAIT VALUES
    -------------------------------------------------------- */

    const traits = TRAIT_KEYS.map(trait => {

        const rawUserValue =
            Number(profile[trait]);

        const rawCharacterValue =
            Number(
                getCharacterTraitValue(
                    character,
                    trait
                )
            );

        return {

            trait,

            userValue:
                Number.isFinite(rawUserValue)
                    ? Math.max(
                        0,
                        Math.min(100, rawUserValue)
                    )
                    : 0,

            characterValue:
                Number.isFinite(rawCharacterValue)
                    ? Math.max(
                        0,
                        Math.min(100, rawCharacterValue)
                    )
                    : 0

        };

    });


    /* --------------------------------------------------------
       CALCULATE USER'S AVERAGE TRAIT SCORE
    -------------------------------------------------------- */

    const averageUserValue =

        traits.reduce(
            (sum, item) =>
                sum + item.userValue,
            0
        ) / traits.length;


    /* --------------------------------------------------------
       IDENTIFY THE FIVE STRONGEST ABOVE-AVERAGE TRAITS
    -------------------------------------------------------- */

    const strongestTraits =

        traits

            .filter(
                item =>
                    item.userValue >
                    averageUserValue
            )

            .sort(
                (a, b) =>
                    b.userValue -
                    a.userValue
            )

            .slice(0, 5);


    if (strongestTraits.length === 0) {
        return 0;
    }


    /* --------------------------------------------------------
       NORMALIZE TRAIT PROMINENCE
    -------------------------------------------------------- */

    const maximumProminence = Math.max(
        ...strongestTraits.map(
            item =>
                item.userValue -
                averageUserValue
        )
    );


    if (
        !Number.isFinite(maximumProminence) ||
        maximumProminence <= 0
    ) {
        return 0;
    }


    /* --------------------------------------------------------
       CALCULATE CONTRADICTIONS

       A character trait below 50 receives a penalty when
       the corresponding user trait is among their strongest.

       Stronger user traits receive greater relative weight.
    -------------------------------------------------------- */

    let penalty = 0;


    strongestTraits.forEach(item => {

        if (item.characterValue >= 50) {
            return;
        }


        const prominence =

            (
                item.userValue -
                averageUserValue
            ) / maximumProminence;


        const characterWeakness =

            (
                50 -
                item.characterValue
            ) / 50;


        penalty +=

            0.75 *
            prominence *
            characterWeakness;

    });


    /* --------------------------------------------------------
       RETURN BOUNDED PENALTY
    -------------------------------------------------------- */

    return Number(
        Math.max(
            0,
            Math.min(3.75, penalty)
        ).toFixed(6)
    );

}


/* ============================================================
CHARACTER ROUTE FIT

First three character routes: primary.
Last two character routes: secondary.
============================================================ */

function calculateCharacterRouteFit(
    characterId,
    personality
) {

    const routes =
        CHARACTER_ROUTES[characterId] || [];

    if (!routes.length) {
        return {
            primary: 0,
            secondary: 0
        };
    }

    const profile =
        personality?.routeProfile || {};

    const primaryRoutes =
        routes.slice(0, 3);

    const secondaryRoutes =
        routes.slice(3);

    const primaryWeights = [
        1.20,
        1.10,
        1.00
    ];

    let primaryTotal = 0;
    let primaryWeightTotal = 0;

    primaryRoutes.forEach(
        (route, index) => {

            const weight =
                primaryWeights[index] || 1;

            primaryTotal +=
                clamp(profile[route] || 0) *
                weight;

            primaryWeightTotal += weight;

        }
    );

    const primary =
        primaryWeightTotal > 0
            ? primaryTotal / primaryWeightTotal
            : 0;

    let secondary = 0;

    if (secondaryRoutes.length) {

        secondary =
            secondaryRoutes.reduce(
                (sum, route) =>
                    sum +
                    clamp(profile[route] || 0),
                0
            ) /
            secondaryRoutes.length;

    }

    return {
        primary,
        secondary
    };

}


/* ============================================================
FINAL CHARACTER MATCH

40% core traits
20% secondary traits
5% minor traits
15% primary route
10% secondary route
10% overall trait profile

Contradiction penalty is subtracted afterwards.
============================================================ */

function calculateCharacterMatch(
    characterId,
    personality
) {

    const character =
        CHARACTERS[characterId];

    if (!character || !personality) {
        return 0;
    }

    const profile =
        personality.profile || {};

    const core =
        calculateCoreFit(
            character,
            profile
        );

    const secondary =
        calculateSecondaryFit(
            character,
            profile
        );

    const minor =
        calculateMinorFit(
            character,
            profile
        );

    const overall =
        calculateOverallTraitFit(
            character,
            profile
        );

    const routes =
        calculateCharacterRouteFit(
            characterId,
            personality
        );

    
    const contradiction =
        calculateContradictionPenalty(
            character,
            profile
        );

    const score =
        (core * 0.45) +
        (secondary * 0.15) +
        (minor * 0.05) +
        (routes.primary * 0.20) +
        (routes.secondary * 0.10) +
        (overall * 0.05) -
        contradiction;

    return clamp(score);

}

/* ============================================================
ALL CHARACTER MATCHES

Returns every character sorted by match score, highest first.
============================================================ */

function calculateAllCharacterMatches(
    personality
) {

    return Object.keys(CHARACTERS)
        .map(id => ({

            id,

            name:
                CHARACTERS[id].name,

            image:
                CHARACTERS[id].image || "",

            score:
                calculateCharacterMatch(
                    id,
                    personality
                ),

            character:
                CHARACTERS[id]

        }))
        .sort((a, b) => {

            if (b.score !== a.score) {
                return b.score - a.score;
            }

            return a.name.localeCompare(b.name);

        });

}


/* ============================================================
TRAIT RESULT DISPLAY

18 traits:
Strongest 5
Middle 8
Weakest 5
============================================================ */

function getTraitRanking(profile) {

    return TRAIT_KEYS
        .map(trait => ({

            trait,

            value:
                clamp(
                    profile?.[trait] ?? 0
                )

        }))
        .sort((a, b) => {

            if (b.value !== a.value) {
                return b.value - a.value;
            }

            return TRAITS[a.trait].localeCompare(
                TRAITS[b.trait]
            );

        });

}


/* ============================================================
HTML ESCAPING
============================================================ */

function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* ============================================================
RENDER TRAIT LISTS

Uses the existing UI element IDs:
- strongest-traits
- trait-profile
- lowest-traits
============================================================ */

function renderTraitLists(profile) {

    const ranking =
        getTraitRanking(profile);

    const strongest =
        ranking.slice(0, 5);

    const weakest =
        ranking
            .slice(-5)
            .reverse();

    const middle =
        ranking.slice(5, ranking.length - 5);


    const strongestElement =
        document.getElementById(
            "strongest-traits"
        );

    const lowestElement =
        document.getElementById(
            "lowest-traits"
        );

    const profileElement =
        document.getElementById(
            "trait-profile"
        );


    /* --------------------------------------------------------
    STRONGEST FIVE TRAITS
    -------------------------------------------------------- */

    if (strongestElement) {

        strongestElement.innerHTML =
            strongest.map(item => `

                <div class="trait-row">

                    <span>
                        ${escapeHtml(
                            TRAITS[item.trait]
                        )}
                    </span>

                    <strong>
                        ${item.value}%
                    </strong>

                </div>

            `).join("");

    }


    /* --------------------------------------------------------
    WEAKEST FIVE TRAITS
    -------------------------------------------------------- */

    if (lowestElement) {

        lowestElement.innerHTML =
            weakest.map(item => `

                <div class="trait-row">

                    <span>
                        ${escapeHtml(
                            TRAITS[item.trait]
                        )}
                    </span>

                    <strong>
                        ${item.value}%
                    </strong>

                </div>

            `).join("");

    }


    /* --------------------------------------------------------
    MIDDLE EIGHT TRAITS
    -------------------------------------------------------- */

    if (profileElement) {

        profileElement.innerHTML =
            middle.map(item => `

                <div class="trait-row">

                    <span>
                        ${escapeHtml(
                            TRAITS[item.trait]
                        )}
                    </span>

                    <strong>
                        ${item.value}%
                    </strong>

                </div>

            `).join("");

    }

}

/* ============================================================
UI STATE
============================================================ */

let currentQuestion = 0;
let answerIndexes = [];
let latestPersonality = null;
let latestMatches = [];


/* ============================================================
DOM
============================================================ */

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

const backButton =
    document.getElementById("back-btn");

const nextButton =
    document.getElementById("next-btn");

const submitButton =
    document.getElementById("submit-btn");

const restartButton =
    document.getElementById("restart-btn");

const shareButton =
    document.getElementById("share-btn");

const challengeButton =
    document.getElementById("challenge-btn");

const questionNumberElement =
    document.getElementById("question-number");

const progressTextElement =
    document.getElementById("progress-text");

const progressBarElement =
    document.getElementById("progress-bar");

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const resultTitleElement =
    document.getElementById("result-title");

const winnerImageElement =
    document.getElementById("winner-image");

const resultDescriptionElement =
    document.getElementById("result-description");

const topMatchesElement =
    document.getElementById("top-matches");

const strongestTraitsElement =
    document.getElementById("strongest-traits");

const lowestTraitsElement =
    document.getElementById("lowest-traits");

const traitProfileElement =
    document.getElementById("trait-profile");


/* ============================================================
SCREEN CONTROL
============================================================ */

function showScreen(screen) {

    if (!screen) {
        return;
    }

    startScreen?.classList.add("hidden");
    quizScreen?.classList.add("hidden");
    resultScreen?.classList.add("hidden");

    screen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ============================================================
CURRENT ANSWER
============================================================ */

function getSelectedIndex() {

    const question =
        questions[currentQuestion];

    if (!question) {
        return null;
    }

    const index =
        answerIndexes[currentQuestion];

    return (
        Number.isInteger(index) &&
        index >= 0 &&
        index < question.answers.length
    )
        ? index
        : null;

}


/* ============================================================
ALL QUESTIONS ANSWERED
============================================================ */

function allQuestionsAnswered() {

    return questions.every(
        (question, index) => {

            const answer =
                answerIndexes[index];

            return (
                Number.isInteger(answer) &&
                answer >= 0 &&
                answer < question.answers.length
            );

        }
    );

}


/* ============================================================
NAVIGATION STATE
============================================================ */

function updateNavigation() {

    const first =
        currentQuestion === 0;

    const last =
        currentQuestion === questions.length - 1;

    const answered =
        getSelectedIndex() !== null;

    const complete =
        allQuestionsAnswered();


    /* --------------------------------------------------------
    BACK BUTTON
    -------------------------------------------------------- */

    if (backButton) {

        backButton.disabled = first;

    }


    /* --------------------------------------------------------
    LAST QUESTION
    -------------------------------------------------------- */

    if (last) {

        /*
           Use the hidden class rather than inline display,
           because the existing CSS may use display:none !important.
        */

        nextButton?.classList.add("hidden");

        submitButton?.classList.remove("hidden");


        if (submitButton) {

            submitButton.disabled = !complete;

            submitButton.textContent =
                complete
                    ? "SEE MY RESULT"
                    : "ANSWER ALL QUESTIONS";

        }

        return;

    }


    /* --------------------------------------------------------
    QUESTIONS BEFORE THE LAST
    -------------------------------------------------------- */

    submitButton?.classList.add("hidden");

    nextButton?.classList.remove("hidden");


    if (nextButton) {

        nextButton.textContent = "NEXT →";

        nextButton.disabled = !answered;

    }

}


/* ============================================================
QUESTION RENDERING
============================================================ */

function renderQuestion() {

    const question =
        questions[currentQuestion];

    if (!question) {
        return;
    }


    /* --------------------------------------------------------
    QUESTION NUMBER
    -------------------------------------------------------- */

    if (questionNumberElement) {

        questionNumberElement.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;

    }


    /* --------------------------------------------------------
    PROGRESS TEXT
    -------------------------------------------------------- */

    if (progressTextElement) {

        progressTextElement.textContent =
            "GOT Personality Test";

    }


    /* --------------------------------------------------------
    PROGRESS BAR
    -------------------------------------------------------- */

    if (progressBarElement) {

        const percent =
            (
                (currentQuestion + 1) /
                questions.length
            ) * 100;

        progressBarElement.style.width =
            `${percent}%`;

    }


    /* --------------------------------------------------------
    QUESTION TEXT
    -------------------------------------------------------- */

    if (questionElement) {

        questionElement.textContent =
            question.question;

    }


    /* --------------------------------------------------------
    ANSWER OPTIONS
    -------------------------------------------------------- */

    if (answersElement) {

        answersElement.innerHTML = "";

        const selectedIndex =
            getSelectedIndex();


        question.answers.forEach(
            (answer, index) => {

                const button =
                    document.createElement("button");

                button.type = "button";

                button.className = "answer";

                button.textContent =
                    answer.text;


                if (selectedIndex === index) {

                    button.classList.add("selected");

                }


                button.addEventListener(
                    "click",
                    () => selectAnswer(index)
                );


                answersElement.appendChild(button);

            }
        );

    }


    updateNavigation();

}


/* ============================================================
ANSWER SELECTION
============================================================ */

function selectAnswer(answerIndex) {

    const question =
        questions[currentQuestion];

    if (!question) {
        return;
    }


    if (
        !Number.isInteger(answerIndex) ||
        !question.answers[answerIndex]
    ) {
        return;
    }


    /* Save the selected answer */

    answerIndexes[currentQuestion] =
        answerIndex;


    /* Update visual selection */

    const buttons =
        answersElement?.querySelectorAll(".answer") || [];


    buttons.forEach(
        (button, index) => {

            button.classList.toggle(
                "selected",
                index === answerIndex
            );

        }
    );


    updateNavigation();


    /* --------------------------------------------------------
    AUTOMATIC ADVANCE

    Automatically move to the next question after selection.
    If the user changes their answer during the delay,
    do not advance using the outdated selection.
    -------------------------------------------------------- */

    const questionAtSelection =
        currentQuestion;

    const selectedAnswerAtSelection =
        answerIndex;


    setTimeout(
        () => {

            const currentSavedAnswer =
                answerIndexes[questionAtSelection];


            if (
                currentQuestion === questionAtSelection &&
                currentSavedAnswer === selectedAnswerAtSelection &&
                currentQuestion < questions.length - 1
            ) {

                currentQuestion++;

                renderQuestion();

            }

        },
        180
    );

}


/* ============================================================
NEXT
============================================================ */

function goNext() {

    if (getSelectedIndex() === null) {
        return;
    }


    if (currentQuestion === questions.length - 1) {

        submitQuiz();

        return;

    }


    currentQuestion++;

    renderQuestion();

}


/* ============================================================
BACK
============================================================ */

function goBack() {

    if (currentQuestion <= 0) {
        return;
    }


    currentQuestion--;

    renderQuestion();

}


/* ============================================================
START QUIZ
============================================================ */

function startQuiz() {

    currentQuestion = 0;

    answerIndexes =
        new Array(questions.length);

    latestPersonality = null;

    latestMatches = [];


    if (submitButton) {

        submitButton.disabled = false;

    }


    /*
       Hide SEO and information content while the quiz runs.
    */

    homeInfo?.classList.add("hidden");

    suggestionsCard?.classList.add("hidden");


    showScreen(quizScreen);

    renderQuestion();

}


/* ============================================================
SUBMIT QUIZ — GAME OF THRONES
============================================================ */

function submitQuiz() {

    if (!allQuestionsAnswered()) {

        const firstMissing =
            questions.findIndex(
                (question, index) => {

                    const value =
                        answerIndexes[index];

                    return (
                        !Number.isInteger(value) ||
                        value < 0 ||
                        value >= question.answers.length
                    );

                }
            );


        if (firstMissing >= 0) {

            currentQuestion = firstMissing;

            renderQuestion();

        }

        return;

    }


    if (submitButton) {

        submitButton.disabled = true;

    }


    try {

        /*
           calculatePersonality already creates the normalized
           trait profile and route profile.

           Do not recalculate routeProfile separately.
        */

        latestPersonality =
            calculatePersonality(answerIndexes);


        latestMatches =
            calculateAllCharacterMatches(
                latestPersonality
            );


        if (
            !Array.isArray(latestMatches) ||
            latestMatches.length === 0
        ) {

            throw new Error(
                "No Game of Thrones character matches returned."
            );

        }


        /* Render the result using the existing result renderer */

        renderResults();

        showScreen(resultScreen);


        /* Restore information and suggested quizzes */

        homeInfo?.classList.remove("hidden");

        suggestionsCard?.classList.remove("hidden");


    } catch (error) {

        console.error(
            "Unable to calculate GOT result:",
            error
        );


        if (submitButton) {

            submitButton.disabled = false;

        }


        alert(
            "There was a problem calculating your result. " +
            "Please refresh the page and try again."
        );

    }

}


/* ============================================================
RESULT RENDERING — GAME OF THRONES
============================================================ */

function renderResults() {

    const winner =
        latestMatches[0];

    if (!winner) {

        console.error(
            "No winning character available."
        );

        return;

    }


    /* --------------------------------------------------------
    RESULT TITLE
    -------------------------------------------------------- */

    if (resultTitleElement) {

        resultTitleElement.textContent =
            `You are most like ${winner.name}`;

    }


    /* --------------------------------------------------------
RESULT DESCRIPTION — CHARACTER-SPECIFIC
-------------------------------------------------------- */

if (resultDescriptionElement) {

    const characterDescription =
        winner.character?.description ||
        CHARACTERS[winner.id]?.description;

    resultDescriptionElement.textContent =
        characterDescription ||
        `${winner.name} ${QUIZ_CONFIG.resultDescription}`;

}

    /* --------------------------------------------------------
    WINNER PORTRAIT
    -------------------------------------------------------- */

    if (winnerImageElement) {

        const image =
            winner.character?.image ||
            winner.image ||
            "";

        const imageWrap =
            winnerImageElement.closest(".winner-image-wrap");


        /* Clear previous image handlers */

        winnerImageElement.onload = null;

        winnerImageElement.onerror = null;


        if (!image) {

            winnerImageElement.removeAttribute("src");

            winnerImageElement.alt = "";

            winnerImageElement.style.display = "none";


            if (imageWrap) {

                imageWrap.style.display = "none";

            }

        } else {

            winnerImageElement.alt =
                `${winner.name} character portrait`;

            winnerImageElement.decoding = "async";

            winnerImageElement.style.display = "block";


            if (imageWrap) {

                imageWrap.style.display = "";

            }


            winnerImageElement.onerror = () => {

                winnerImageElement.onload = null;

                winnerImageElement.onerror = null;

                winnerImageElement.removeAttribute("src");

                winnerImageElement.alt = "";

                winnerImageElement.style.display = "none";


                if (imageWrap) {

                    imageWrap.style.display = "none";

                }


                console.warn(
                    `Character image could not load: ${image}`
                );

            };


            winnerImageElement.src = image;

        }

    }


    /* --------------------------------------------------------
    TOP THREE CHARACTER MATCHES
    -------------------------------------------------------- */

    renderTopMatches(
        latestMatches.slice(0, 3)
    );


    /* --------------------------------------------------------
    TRAIT RESULTS
    -------------------------------------------------------- */

    if (latestPersonality?.profile) {

        renderTraitResults(
            latestPersonality.profile
        );

    }

}


/* ============================================================
TOP MATCHES
============================================================ */

function renderTopMatches(matches) {

    if (!topMatchesElement) {
        return;
    }


    topMatchesElement.innerHTML = "";


    matches.slice(0, 3).forEach(
        (match, index) => {

            const row =
                document.createElement("div");

            row.className = "match-item";


            /* Rank */

            const rank =
                document.createElement("div");

            rank.className = "match-rank";

            rank.textContent =
                `#${index + 1}`;


            /* Character image */

            const image =
                document.createElement("img");

            image.className = "match-thumb";

            image.alt =
                `${match.name} portrait`;

            image.loading = "lazy";


            const imagePath =
                match.image ||
                match.character?.image ||
                "";


            if (imagePath) {

                image.src = imagePath;


                /*
                   Hide broken images while retaining the
                   character's rank and name.
                */

                image.onerror = function () {

                    image.removeAttribute("src");

                    image.style.display = "none";


                    console.warn(
                        "Top match image failed to load:",
                        imagePath
                    );

                };

            } else {

                image.style.display = "none";

            }


            /* Character name */

            const name =
                document.createElement("div");

            name.className = "match-name";

            name.textContent =
                match.name;


            row.append(
                rank,
                image,
                name
            );


            topMatchesElement.appendChild(row);

        }
    );

}


/* ============================================================
TRAIT RESULTS
============================================================ */

function renderTraitResults(profile) {

    const ranking =
        TRAIT_KEYS
            .map(trait => ({

                trait,

                label: TRAITS[trait],

                value: clamp(
                    profile[trait]
                )

            }))
            .sort(
                (a, b) =>
                    b.value - a.value ||
                    a.label.localeCompare(b.label)
            );


    /*
       STRONGEST FIVE TRAITS
    */

    const strongest =
        ranking.slice(0, 5);


    /*
       WEAKEST FIVE TRAITS
    */

    const lowest =
        ranking
            .slice(-5)
            .reverse();


    /*
       FULL PROFILE

       Display all 18 traits, including those already shown
       in the strongest and weakest sections.
    */

    renderTraitList(
        strongestTraitsElement,
        strongest
    );


    renderTraitList(
        lowestTraitsElement,
        lowest
    );


    renderFullProfile(
        ranking
    );

}


/* ============================================================
TRAIT LIST
============================================================ */

function renderTraitList(container, list) {

    if (!container) {
        return;
    }


    container.innerHTML = "";


    list.forEach(
        trait => {

            const row =
                document.createElement("div");

            row.className = "trait-row";


            /* Trait heading and value */

            const top =
                document.createElement("div");

            top.className = "trait-top";


            const name =
                document.createElement("span");

            name.className = "trait-name";

            name.textContent =
                trait.label ||
                TRAITS[trait.trait] ||
                trait.trait;


            const value =
                document.createElement("span");

            value.className = "trait-value";

            value.textContent =
                `${Math.round(trait.value)}%`;


            top.append(
                name,
                value
            );


            /* Trait progress bar */

            const track =
                document.createElement("div");

            track.className = "trait-bar";


            const fill =
                document.createElement("div");

            fill.className = "trait-fill";

            fill.style.width =
                `${clamp(trait.value)}%`;


            track.appendChild(fill);


            row.append(
                top,
                track
            );


            container.appendChild(row);

        }
    );

}


/* ============================================================
FULL TRAIT PROFILE
============================================================ */

function renderFullProfile(ranking) {

    if (!traitProfileElement) {
        return;
    }


    traitProfileElement.innerHTML = "";


    ranking.forEach(
        trait => {

            const row =
                document.createElement("div");

            row.className = "profile-row";


            /* Trait label */

            const label =
                document.createElement("div");

            label.className = "profile-label";


            const name =
                document.createElement("span");

            name.textContent =
                trait.label ||
                TRAITS[trait.trait] ||
                trait.trait;


            const value =
                document.createElement("span");

            value.textContent =
                `${Math.round(trait.value)}%`;


            label.append(
                name,
                value
            );


            /* Progress bar */

            const track =
                document.createElement("div");

            track.className = "profile-track";


            const fill =
                document.createElement("div");

            fill.className = "profile-fill";

            fill.style.width =
                `${clamp(trait.value)}%`;


            track.appendChild(fill);


            row.append(
                label,
                track
            );


            traitProfileElement.appendChild(row);

        }
    );

}


/* ============================================================
RESTART
============================================================ */

function restartQuiz() {

    currentQuestion = 0;

    answerIndexes = [];

    latestPersonality = null;

    latestMatches = [];


    if (submitButton) {

        submitButton.disabled = false;

        submitButton.textContent =
            "SEE MY RESULT";

    }


    /*
       Keep the suggested quiz section hidden on the start screen.
    */

    suggestionsCard?.classList.add("hidden");


    /* Restore the informational section */

    homeInfo?.classList.remove("hidden");


    showScreen(startScreen);

}


/* ============================================================
SHARE
============================================================ */

async function copyText(text) {

    /* Modern clipboard API */

    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        await navigator.clipboard.writeText(text);

        return;

    }


    /* Fallback for environments without the Clipboard API */

    const textarea =
        document.createElement("textarea");


    textarea.value = text;

    textarea.style.position = "fixed";

    textarea.style.left = "-9999px";

    textarea.style.top = "0";

    textarea.style.opacity = "0";


    document.body.appendChild(textarea);


    textarea.focus();

    textarea.select();


    const successful =
        document.execCommand("copy");


    textarea.remove();


    if (!successful) {

        throw new Error(
            "Copy operation failed."
        );

    }

}


async function shareResult() {

    const winner =
        latestMatches[0];

    if (!winner) {
        return;
    }


    const text =
        `I got ${winner.name} in the Game of Thrones Personality Quiz!`;


    const url =
        window.location.href;


    /* Use the native share dialog when available */

    if (navigator.share) {

        try {

            await navigator.share({

                title: QUIZ_CONFIG.shareTitle,

                text,

                url

            });

            return;

        } catch (error) {

            if (error.name === "AbortError") {

                return;

            }

        }

    }


    /* Clipboard fallback */

    const shareText =
        `${text}\n${url}`;


    try {

        await copyText(shareText);

        alert(
            "Your result and quiz link have been copied!"
        );

    } catch {

        prompt(
            "Copy your result:",
            shareText
        );

    }

}


/* ============================================================
CHALLENGE FRIENDS
============================================================ */

async function challengeFriends() {

    const winner =
        latestMatches[0];


    let text =
        "I just took the Game of Thrones Personality Quiz.";


    if (winner) {

        text += ` I got ${winner.name}!`;

    }


    text +=
        " Which Game of Thrones character will you get?";


    const url =
        window.location.href;


    /* Native sharing */

    if (navigator.share) {

        try {

            await navigator.share({

                title: QUIZ_CONFIG.challengeTitle,

                text,

                url

            });

            return;

        } catch (error) {

            if (error.name === "AbortError") {

                return;

            }

        }

    }


    /* Clipboard fallback */

    const challengeText =
        `${text}\n${url}`;


    try {

        await copyText(challengeText);

        alert(
            "Challenge message and quiz link copied!"
        );

    } catch {

        prompt(
            "Copy this challenge:",
            challengeText
        );

    }

}


/* ============================================================
EVENT HANDLERS
============================================================ */

startButton?.addEventListener(
    "click",
    startQuiz
);

backButton?.addEventListener(
    "click",
    goBack
);

nextButton?.addEventListener(
    "click",
    goNext
);

submitButton?.addEventListener(
    "click",
    submitQuiz
);

restartButton?.addEventListener(
    "click",
    restartQuiz
);

shareButton?.addEventListener(
    "click",
    shareResult
);

challengeButton?.addEventListener(
    "click",
    challengeFriends
);


/* ============================================================
INITIALIZATION

The logic section already calls validateData().
Do not call it a second time here.
============================================================ */

/*
   Establish the initial screen state.
*/

startScreen?.classList.remove("hidden");

quizScreen?.classList.add("hidden");

resultScreen?.classList.add("hidden");

homeInfo?.classList.remove("hidden");

suggestionsCard?.classList.add("hidden");


console.log(
    `Loaded ${QUIZ_CONFIG.title}: ` +
    `${questions.length} questions, ` +
    `${Object.keys(CHARACTERS).length} characters, ` +
    `${TRAIT_KEYS.length} traits, ` +
    `${Object.keys(ROUTES).length} hidden routes.`
);


/* ============================================================
SITE MENU
============================================================ */

const menuToggle =
    document.getElementById("menu-toggle");

const siteMenu =
    document.getElementById("site-menu");


if (menuToggle && siteMenu) {

    menuToggle.addEventListener(
        "click",
        function(event) {

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
                isOpen
                    ? "Open navigation"
                    : "Close navigation"
            );

        }
    );


    /* Close the menu when clicking outside */

    document.addEventListener(
        "click",
        function(event) {

            if (
                !siteMenu.hidden &&
                !siteMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                siteMenu.hidden = true;


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


    /* Close the menu after choosing a navigation link */

    siteMenu
        .querySelectorAll("a")
        .forEach(
            function(link) {

                link.addEventListener(
                    "click",
                    function() {

                        siteMenu.hidden = true;


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
