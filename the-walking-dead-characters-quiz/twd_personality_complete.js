/* ============================================================
   THE WALKING DEAD — PERSONALITY QUIZ ENGINE
   30 questions • 16 traits • 19 characters

   Calibration:
   - theoretical min/max normalization per trait
   - neutral/moderate profile is centered around ~62
   - wider profile spread than previous version
   - character-specific signature matching
   - overall personality matching
   - personality-shape matching
   - deterministic signature activation
   - deterministic result accessibility
   - deterministic near-tie diversity
   - final profile remains 5–95

   IMPORTANT:
   This is designed as a FUN CHARACTER-MATCHING QUIZ.
   It is intentionally optimized for recognizable results,
   rather than scientific personality measurement.
   ============================================================ */

const TRAIT_KEYS = [
    "selfPreservation", "courage", "empathy", "loyalty",
    "morality", "pragmatism", "ruthlessness", "leadership",
    "independence", "trust", "charisma", "manipulation",
    "strategy", "hope", "emotionalControl", "riskAppetite"
];

const TWD_TRAITS = [
    "Self-Preservation", "Courage", "Empathy", "Loyalty",
    "Morality", "Pragmatism", "Ruthlessness", "Leadership",
    "Independence", "Trust", "Charisma", "Manipulation",
    "Strategy", "Hope", "Emotional Control", "Risk Appetite"
];

const TRAIT_WEIGHTS = {
    selfPreservation: 1.0,
    courage: 1.0,
    empathy: 1.0,
    loyalty: 1.0,
    morality: 1.0,
    pragmatism: 1.0,
    ruthlessness: 0.9,
    leadership: 1.0,
    independence: 0.9,
    trust: 0.8,
    charisma: 0.8,
    manipulation: 0.9,
    strategy: 1.0,
    hope: 0.9,
    emotionalControl: 0.9,
    riskAppetite: 0.9
};


/* ------------------------------------------------------------
   CHARACTER MATRIX

   Order exactly matches TRAIT_KEYS.
   ------------------------------------------------------------ */

const TWD_CHARACTERS = {

    rick: {
        name: "Rick Grimes",
        image: "images/rick.jpg",
        scores: [
            68, 94, 66, 94,
            72, 82, 48, 96,
            68, 46, 78, 32,
            95, 80, 78, 82
        ]
    },

    daryl: {
        name: "Daryl Dixon",
        image: "images/daryl.jpg",
        scores: [
            95, 94, 72, 96,
            70, 82, 54, 62,
            97, 34, 42, 30,
            88, 76, 91, 90
        ]
    },

    carol: {
        name: "Carol Peletier",
        image: "images/carol.jpg",
        scores: [
            96, 84, 64, 84,
            56, 96, 88, 68,
            94, 36, 58, 94,
            96, 72, 84, 80
        ]
    },

    shane: {
        name: "Shane Walsh",
        image: "images/shane.jpg",
        scores: [
            86, 95, 44, 68,
            34, 95, 91, 84,
            82, 30, 76, 66,
            80, 52, 42, 97
        ]
    },

    glenn: {
        name: "Glenn Rhee",
        image: "images/glenn.jpg",
        scores: [
            58, 84, 96, 95,
            95, 66, 20, 58,
            62, 88, 76, 18,
            70, 95, 78, 68
        ]
    },

    michonne: {
        name: "Michonne",
        image: "images/michonne.jpg",
        scores: [
            86, 95, 76, 93,
            86, 82, 58, 84,
            97, 42, 58, 32,
            93, 80, 96, 74
        ]
    },

    maggie: {
        name: "Maggie Greene",
        image: "images/maggie.jpg",
        scores: [
            76, 90, 84, 97,
            84, 82, 60, 91,
            84, 54, 80, 32,
            86, 94, 80, 78
        ]
    },

    hershel: {
        name: "Hershel Greene",
        image: "images/hershel.jpg",
        scores: [
            54, 72, 98, 93,
            98, 60, 10, 68,
            50, 95, 78, 10,
            64, 91, 89, 30
        ]
    },

    abraham: {
        name: "Abraham Ford",
        image: "images/abraham.jpg",
        scores: [
            82, 98, 54, 82,
            58, 91, 72, 89,
            82, 42, 92, 26,
            78, 64, 72, 98
        ]
    },

    eugene: {
        name: "Eugene Porter",
        image: "images/eugene.jpg",
        scores: [
            94, 44, 66, 72,
            62, 87, 16, 42,
            78, 42, 58, 76,
            98, 78, 72, 20
        ]
    },

    negan: {
        name: "Negan",
        image: "images/negan.jpg",
        scores: [
            82, 90, 42, 62,
            30, 97, 96, 98,
            70, 30, 98, 97,
            90, 62, 86, 88
        ]
    },

    governor: {
        name: "The Governor",
        image: "images/governor.jpg",
        scores: [
            96, 82, 18, 54,
            10, 94, 98, 96,
            84, 12, 94, 98,
            93, 42, 58, 80
        ]
    },

    morgan: {
        name: "Morgan Jones",
        image: "images/morgan.jpg",
        scores: [
            62, 72, 97, 90,
            95, 48, 28, 54,
            62, 68, 48, 18,
            64, 94, 28, 42
        ]
    },

    gabriel: {
        name: "Gabriel Stokes",
        image: "images/gabriel.jpg",
        scores: [
            70, 54, 87, 76,
            93, 62, 24, 52,
            44, 64, 58, 32,
            68, 98, 82, 34
        ]
    },

    ezekiel: {
        name: "Ezekiel",
        image: "images/ezekiel.jpg",
        scores: [
            58, 72, 90, 91,
            80, 62, 22, 95,
            56, 74, 98, 54,
            72, 97, 76, 58
        ]
    },

    gregory: {
        name: "Gregory",
        image: "images/gregory.jpg",
        scores: [
            97, 18, 26, 24,
            30, 78, 18, 54,
            62, 20, 76, 93,
            64, 36, 24, 10
        ]
    },

    gareth: {
        name: "Gareth",
        image: "images/gareth.jpg",
        scores: [
            93, 80, 10, 46,
            8, 97, 98, 76,
            86, 8, 60, 97,
            93, 34, 88, 74
        ]
    },

    dawn: {
        name: "Dawn Lerner",
        image: "images/dawn.jpg",
        scores: [
            78, 68, 48, 68,
            38, 88, 54, 97,
            52, 28, 72, 70,
            80, 48, 72, 52
        ]
    },

    bob: {
        name: "Bob Stookey",
        image: "images/bob.jpg",
        scores: [
            56, 72, 98, 91,
            93, 56, 14, 44,
            56, 97, 68, 8,
            60, 97, 91, 50
        ]
    }
};


/* ------------------------------------------------------------
   CHARACTER SIGNATURES
   ------------------------------------------------------------ */

const CHARACTER_SIGNATURES = {

    rick: {
        primary: {
            leadership: 1.7,
            courage: 1.6,
            loyalty: 1.6,
            strategy: 1.5
        },
        secondary: {
            morality: 1.15,
            hope: 1.15,
            charisma: 1.10
        }
    },

    daryl: {
        primary: {
            independence: 1.7,
            selfPreservation: 1.6,
            loyalty: 1.6,
            courage: 1.5
        },
        secondary: {
            emotionalControl: 1.2,
            strategy: 1.15,
            riskAppetite: 1.1
        }
    },

    carol: {
        primary: {
            pragmatism: 1.7,
            strategy: 1.6,
            manipulation: 1.6,
            selfPreservation: 1.5
        },
        secondary: {
            independence: 1.2,
            ruthlessness: 1.15,
            emotionalControl: 1.1
        }
    },

    shane: {
        primary: {
            courage: 1.7,
            riskAppetite: 1.7,
            pragmatism: 1.6,
            ruthlessness: 1.5
        },
        secondary: {
            leadership: 1.2,
            independence: 1.15,
            selfPreservation: 1.1
        }
    },

    glenn: {
        primary: {
            empathy: 1.7,
            morality: 1.7,
            loyalty: 1.6,
            trust: 1.5
        },
        secondary: {
            hope: 1.2,
            courage: 1.15,
            emotionalControl: 1.1
        }
    },

    michonne: {
        primary: {
            independence: 1.7,
            courage: 1.6,
            emotionalControl: 1.6,
            strategy: 1.5
        },
        secondary: {
            loyalty: 1.2,
            selfPreservation: 1.15,
            morality: 1.1
        }
    },

    maggie: {
        primary: {
            loyalty: 1.7,
            leadership: 1.6,
            courage: 1.5,
            hope: 1.5
        },
        secondary: {
            empathy: 1.2,
            morality: 1.15,
            strategy: 1.1
        }
    },

    hershel: {
        primary: {
            morality: 1.8,
            empathy: 1.7,
            trust: 1.6,
            loyalty: 1.5
        },
        secondary: {
            emotionalControl: 1.2,
            hope: 1.15,
            charisma: 1.1
        }
    },

    abraham: {
        primary: {
            courage: 1.8,
            riskAppetite: 1.7,
            leadership: 1.6,
            pragmatism: 1.5
        },
        secondary: {
            charisma: 1.2,
            loyalty: 1.15,
            selfPreservation: 1.1
        }
    },

    eugene: {
        primary: {
            strategy: 1.8,
            selfPreservation: 1.6,
            pragmatism: 1.5,
            manipulation: 1.4
        },
        secondary: {
            independence: 1.2,
            charisma: 1.1,
            emotionalControl: 1.1
        }
    },

    negan: {
        primary: {
            charisma: 1.8,
            manipulation: 1.8,
            ruthlessness: 1.7,
            leadership: 1.6
        },
        secondary: {
            pragmatism: 1.25,
            strategy: 1.15,
            riskAppetite: 1.1
        }
    },

    governor: {
        primary: {
            manipulation: 1.9,
            ruthlessness: 1.8,
            leadership: 1.6,
            charisma: 1.6
        },
        secondary: {
            selfPreservation: 1.25,
            strategy: 1.2,
            pragmatism: 1.1
        }
    },

    morgan: {
        primary: {
            empathy: 1.8,
            morality: 1.7,
            hope: 1.6,
            loyalty: 1.5
        },
        secondary: {
            trust: 1.25,
            emotionalControl: 1.1,
            courage: 1.1
        }
    },

    gabriel: {
        primary: {
            morality: 1.7,
            hope: 1.7,
            empathy: 1.5,
            emotionalControl: 1.5
        },
        secondary: {
            trust: 1.2,
            loyalty: 1.15,
            strategy: 1.1
        }
    },

    ezekiel: {
        primary: {
            charisma: 1.8,
            leadership: 1.7,
            hope: 1.6,
            loyalty: 1.5
        },
        secondary: {
            empathy: 1.25,
            morality: 1.15,
            courage: 1.1
        }
    },

    gregory: {
        primary: {
            selfPreservation: 1.8,
            manipulation: 1.7,
            charisma: 1.5,
            pragmatism: 1.4
        },
        secondary: {
            independence: 1.2,
            strategy: 1.1,
            trust: 0.8
        }
    },

    gareth: {
        primary: {
            ruthlessness: 1.9,
            manipulation: 1.8,
            pragmatism: 1.7,
            selfPreservation: 1.5
        },
        secondary: {
            strategy: 1.3,
            riskAppetite: 1.1,
            leadership: 1.05
        }
    },

    dawn: {
        primary: {
            leadership: 1.7,
            pragmatism: 1.6,
            selfPreservation: 1.5,
            strategy: 1.4
        },
        secondary: {
            manipulation: 1.15,
            emotionalControl: 1.1,
            charisma: 1.05
        }
    },

    bob: {
        primary: {
            empathy: 1.8,
            morality: 1.6,
            trust: 1.6,
            hope: 1.5
        },
        secondary: {
            emotionalControl: 1.25,
            loyalty: 1.2,
            courage: 1.1
        }
    }
};


/* ------------------------------------------------------------
   CHARACTER ACCESSIBILITY

   Game-design adjustment only.

   Higher = slightly easier to reach.
   Lower = slightly less likely when matches are otherwise close.
   ------------------------------------------------------------ */

const CHARACTER_ACCESSIBILITY = {

    rick: 4.5,
    daryl: 4.5,
    carol: 4.0,
    shane: 3.5,
    glenn: 2.5,
    michonne: 4.0,
    maggie: 3.5,
    hershel: 2.5,
    abraham: 3.5,
    eugene: 3.0,
    negan: 4.5,
    governor: 3.5,
    morgan: 3.0,
    gabriel: 1.5,
    ezekiel: 3.0,
    gregory: 1.5,
    gareth: 2.5,
    dawn: 1.0,
    bob: 2.0
};


/* ------------------------------------------------------------
   QUESTIONS
   ------------------------------------------------------------ */

const TWD_PERSONALITY_QUESTIONS = [

{
    id: 1,
    question:
        "You find a backpack full of canned food while scavenging. What's your first move?",
    answers: [
        {
            text: "Take what we need and keep moving.",
            traits: ["selfPreservation", "pragmatism"]
        },
        {
            text: "Check if there's enough to share with the group.",
            traits: ["empathy", "loyalty"]
        },
        {
            text: "Take everything. Who knows when we'll find food again?",
            traits: ["selfPreservation", "riskAppetite"]
        },
        {
            text: "Look around first. A stash like this might have a reason.",
            traits: ["strategy", "selfPreservation"]
        },
        {
            text: "Celebrate. For once, the apocalypse is actually giving us something.",
            traits: ["hope", "charisma"]
        }
    ]
},

{
    id: 2,
    question:
        "A walker suddenly appears behind your group. What do you do?",
    answers: [
        {
            text: "Deal with it before anyone else even notices.",
            traits: ["courage", "emotionalControl"]
        },
        {
            text: "Warn everyone and get the group moving.",
            traits: ["leadership", "loyalty"]
        },
        {
            text: "Freeze for half a second... then swing.",
            traits: ["courage", "selfPreservation"]
        },
        {
            text: "Let someone else handle it while I watch for more walkers.",
            traits: ["strategy", "selfPreservation"]
        },
        {
            text: "Make a joke afterward because nobody needs more panic.",
            traits: ["charisma", "emotionalControl"]
        }
    ]
},

{
    id: 3,
    question:
        "Your group has one working car and five people. Unfortunately, six people need a ride.",
    answers: [
        {
            text: "We figure out another way. Nobody gets left behind.",
            traits: ["loyalty", "empathy"]
        },
        {
            text: "The people most useful to the group go in the car.",
            traits: ["pragmatism", "strategy"]
        },
        {
            text: "I'll stay behind and catch up later.",
            traits: ["independence", "loyalty"]
        },
        {
            text: "Everyone gets in. We'll deal with the consequences later.",
            traits: ["hope", "riskAppetite"]
        },
        {
            text: "I'm driving. We'll find room somehow.",
            traits: ["leadership", "courage"]
        }
    ]
},

{
    id: 4,
    question:
        "You meet a stranger who claims they have a safe camp nearby. What's your reaction?",
    answers: [
        {
            text: "Great. Let's go. We could use some good news.",
            traits: ["hope", "trust"]
        },
        {
            text: "Sounds nice. Now tell me what you're not telling us.",
            traits: ["strategy", "independence"]
        },
        {
            text: "We stay here until we know more.",
            traits: ["selfPreservation", "emotionalControl"]
        },
        {
            text: "I'll talk to them. People usually reveal more than they realize.",
            traits: ["charisma", "manipulation"]
        },
        {
            text: "Give them a chance. Not everyone is out to get us.",
            traits: ["empathy", "trust"]
        }
    ]
},

{
    id: 5,
    question:
        "Someone in your group eats the last chocolate bar without telling anyone.",
    answers: [
        {
            text: "Seriously? That's war.",
            traits: ["ruthlessness", "charisma"]
        },
        {
            text: "Laugh it off. It's a chocolate bar.",
            traits: ["emotionalControl", "hope"]
        },
        {
            text: "Ask why they did it before getting angry.",
            traits: ["empathy", "morality"]
        },
        {
            text: "Make sure they don't get near the food supply again.",
            traits: ["strategy", "selfPreservation"]
        },
        {
            text: "I'll make them wish they'd saved me a piece.",
            traits: ["manipulation", "charisma"]
        }
    ]
},

{
    id: 6,
    question:
        "You hear a gunshot somewhere in the woods. Your group wants to investigate.",
    answers: [
        {
            text: "Let's go. Someone might need help.",
            traits: ["courage", "empathy"]
        },
        {
            text: "Absolutely not. That's how people die.",
            traits: ["selfPreservation", "pragmatism"]
        },
        {
            text: "We watch from a distance first.",
            traits: ["strategy", "emotionalControl"]
        },
        {
            text: "I'll go. If it's trouble, we'll know soon enough.",
            traits: ["riskAppetite", "independence"]
        },
        {
            text: "We go together. Nobody wanders off alone.",
            traits: ["leadership", "loyalty"]
        }
    ]
},

{
    id: 7,
    question:
        "Your best friend does something incredibly stupid and nearly gets everyone killed.",
    answers: [
        {
            text: "They're my friend. We deal with it and move on.",
            traits: ["loyalty", "empathy"]
        },
        {
            text: "They get one warning. Next time, they're out.",
            traits: ["pragmatism", "leadership"]
        },
        {
            text: "I want to know exactly what happened first.",
            traits: ["strategy", "emotionalControl"]
        },
        {
            text: "I'll tear into them, but I'll still have their back.",
            traits: ["loyalty", "courage"]
        },
        {
            text: "Maybe it's time to remind everyone who's actually keeping us alive.",
            traits: ["leadership", "charisma"]
        }
    ]
},

{
    id: 8,
    question:
        "You find a house that looks completely abandoned. What are you checking first?",
    answers: [
        {
            text: "Food and water.",
            traits: ["selfPreservation", "pragmatism"]
        },
        {
            text: "Windows, doors and possible escape routes.",
            traits: ["strategy", "selfPreservation"]
        },
        {
            text: "Signs that someone might still live here.",
            traits: ["empathy", "morality"]
        },
        {
            text: "Weapons.",
            traits: ["courage", "riskAppetite"]
        },
        {
            text: "A bathroom. At this point, that's treasure.",
            traits: ["charisma", "hope"]
        }
    ]
},

{
    id: 9,
    question:
        "The group can't agree where to go next. Everyone starts arguing.",
    answers: [
        {
            text: "I'll make the call and get everyone moving.",
            traits: ["leadership", "courage"]
        },
        {
            text: "Let everyone speak before deciding.",
            traits: ["empathy", "loyalty"]
        },
        {
            text: "Pick whichever option gives us the best chance of surviving.",
            traits: ["strategy", "pragmatism"]
        },
        {
            text: "Fine. I'll go my own way.",
            traits: ["independence", "selfPreservation"]
        },
        {
            text: "Calm everyone down first. Then we decide.",
            traits: ["emotionalControl", "charisma"]
        }
    ]
},

{
    id: 10,
    question:
        "A stranger offers your group a large supply of food... in exchange for your weapons.",
    answers: [
        {
            text: "No weapons, no deal.",
            traits: ["selfPreservation", "pragmatism"]
        },
        {
            text: "Take the deal. We need the food.",
            traits: ["riskAppetite", "pragmatism"]
        },
        {
            text: "Pretend to agree and look for another way.",
            traits: ["manipulation", "strategy"]
        },
        {
            text: "Ask what happens if we refuse.",
            traits: ["courage", "emotionalControl"]
        },
        {
            text: "Try negotiating a better deal.",
            traits: ["charisma", "leadership"]
        }
    ]
},

{
    id: 11,
    question:
        "You have one free afternoon at a relatively safe camp. What are you doing?",
    answers: [
        {
            text: "Sleeping. Obviously.",
            traits: ["selfPreservation", "emotionalControl"]
        },
        {
            text: "Training with a weapon.",
            traits: ["courage", "riskAppetite"]
        },
        {
            text: "Checking supplies and preparing for tomorrow.",
            traits: ["strategy", "pragmatism"]
        },
        {
            text: "Hanging out with everyone.",
            traits: ["charisma", "loyalty"]
        },
        {
            text: "Finding somewhere quiet and enjoying the fact that we're still alive.",
            traits: ["hope", "independence"]
        }
    ]
},

{
    id: 12,
    question:
        "A heavily armed group is blocking the road ahead. They haven't noticed you yet.",
    answers: [
        {
            text: "Find another route.",
            traits: ["selfPreservation", "pragmatism"]
        },
        {
            text: "Watch them and figure out what they're doing.",
            traits: ["strategy", "emotionalControl"]
        },
        {
            text: "Talk our way through.",
            traits: ["charisma", "manipulation"]
        },
        {
            text: "Hit them before they can hit us.",
            traits: ["ruthlessness", "riskAppetite"]
        },
        {
            text: "Stay together and prepare for whatever happens.",
            traits: ["leadership", "loyalty"]
        }
    ]
},

{
    id: 13,
    question:
        "Someone asks you, 'Do you really think things will ever go back to normal?'",
    answers: [
        {
            text: "Yes. We just have to survive long enough.",
            traits: ["hope", "morality"]
        },
        {
            text: "Normal is gone. We need to build something new.",
            traits: ["pragmatism", "leadership"]
        },
        {
            text: "I don't think about it. Tomorrow is what matters.",
            traits: ["selfPreservation", "emotionalControl"]
        },
        {
            text: "Maybe not. But that doesn't mean we stop fighting.",
            traits: ["courage", "hope"]
        },
        {
            text: "Honestly? I'm starting to like the new rules.",
            traits: ["independence", "riskAppetite"]
        }
    ]
},

{
    id: 14,
    question:
        "You catch someone secretly stealing medicine from the group's supplies.",
    answers: [
        {
            text: "Ask who they need it for.",
            traits: ["empathy", "morality"]
        },
        {
            text: "Take it back and warn them.",
            traits: ["leadership", "pragmatism"]
        },
        {
            text: "Find out how long they've been stealing first.",
            traits: ["strategy", "emotionalControl"]
        },
        {
            text: "Make an example of them.",
            traits: ["ruthlessness", "leadership"]
        },
        {
            text: "Keep quiet and use the information later if necessary.",
            traits: ["manipulation", "strategy"]
        }
    ]
},

{
    id: 15,
    question:
        "Walkers are surrounding your building and the only escape is across a shaky roof.",
    answers: [
        {
            text: "I'm going first.",
            traits: ["courage", "riskAppetite"]
        },
        {
            text: "I'll figure out the safest route.",
            traits: ["strategy", "selfPreservation"]
        },
        {
            text: "Everyone crosses together.",
            traits: ["loyalty", "leadership"]
        },
        {
            text: "If someone falls, keep moving. Don't let everyone die.",
            traits: ["pragmatism", "emotionalControl"]
        },
        {
            text: "Well... this is going to be interesting.",
            traits: ["riskAppetite", "charisma"]
        }
    ]
},

{
    id: 16,
    question:
        "Someone new joins the group and immediately starts flirting with you.",
    answers: [
        {
            text: "Flirt back. The apocalypse is no excuse to be boring.",
            traits: ["charisma", "riskAppetite"]
        },
        {
            text: "Keep things friendly. I don't trust them yet.",
            traits: ["trust", "selfPreservation"]
        },
        {
            text: "See what they want before deciding anything.",
            traits: ["strategy", "manipulation"]
        },
        {
            text: "Give them a chance. Life is short.",
            traits: ["hope", "empathy"]
        },
        {
            text: "Ignore it. We have bigger problems.",
            traits: ["emotionalControl", "pragmatism"]
        }
    ]
},

{
    id: 17,
    question:
        "You discover your group has been followed for several miles.",
    answers: [
        {
            text: "Set a trap.",
            traits: ["strategy", "ruthlessness"]
        },
        {
            text: "Keep moving and avoid a fight.",
            traits: ["selfPreservation", "pragmatism"]
        },
        {
            text: "Turn around and confront them.",
            traits: ["courage", "riskAppetite"]
        },
        {
            text: "Find out who they are first.",
            traits: ["strategy", "emotionalControl"]
        },
        {
            text: "Let them think they're following us... for now.",
            traits: ["manipulation", "independence"]
        }
    ]
},

{
    id: 18,
    question:
        "Your group has to choose one person to lead a dangerous supply run.",
    answers: [
        {
            text: "Me. At least I know what I'm getting everyone into.",
            traits: ["leadership", "courage"]
        },
        {
            text: "The person with the most experience.",
            traits: ["trust", "pragmatism"]
        },
        {
            text: "Whoever is best at getting in and out unnoticed.",
            traits: ["strategy", "selfPreservation"]
        },
        {
            text: "Someone who won't hesitate when things go bad.",
            traits: ["riskAppetite", "ruthlessness"]
        },
        {
            text: "Let's decide together.",
            traits: ["loyalty", "empathy"]
        }
    ]
},

{
    id: 19,
    question:
        "You find a working radio. You hear a voice asking for help.",
    answers: [
        {
            text: "Answer immediately.",
            traits: ["empathy", "hope"]
        },
        {
            text: "Listen for a while before responding.",
            traits: ["strategy", "selfPreservation"]
        },
        {
            text: "Ask for their location and what they can offer us.",
            traits: ["pragmatism", "charisma"]
        },
        {
            text: "Ignore it. It could be a trap.",
            traits: ["selfPreservation", "emotionalControl"]
        },
        {
            text: "Respond, but don't tell them where we are.",
            traits: ["trust", "strategy"]
        }
    ]
},

{
    id: 20,
    question:
        "Be honest: what's your biggest apocalypse luxury?",
    answers: [
        {
            text: "A hot shower.",
            traits: ["hope", "emotionalControl"]
        },
        {
            text: "A comfortable bed.",
            traits: ["selfPreservation", "pragmatism"]
        },
        {
            text: "Good food that isn't canned.",
            traits: ["hope", "charisma"]
        },
        {
            text: "A huge collection of weapons.",
            traits: ["courage", "riskAppetite"]
        },
        {
            text: "Five minutes where nobody asks me to solve anything.",
            traits: ["independence", "emotionalControl"]
        }
    ]
},

{
    id: 21,
    question:
        "A member of your group is bitten. Everyone knows what comes next.",
    answers: [
        {
            text: "Stay with them. They're still one of us.",
            traits: ["empathy", "loyalty"]
        },
        {
            text: "Do what has to be done before they turn.",
            traits: ["pragmatism", "emotionalControl"]
        },
        {
            text: "Look for another option until the very last second.",
            traits: ["hope", "morality"]
        },
        {
            text: "Ask them what they want.",
            traits: ["empathy", "morality"]
        },
        {
            text: "Keep everyone safe first. Personal feelings come second.",
            traits: ["selfPreservation", "leadership"]
        }
    ]
},

{
    id: 22,
    question:
        "Someone from a rival group offers you information in exchange for a favor.",
    answers: [
        {
            text: "Take the deal. Information is valuable.",
            traits: ["pragmatism", "strategy"]
        },
        {
            text: "Ask what happens if they betray us.",
            traits: ["selfPreservation", "emotionalControl"]
        },
        {
            text: "Try to get the information without giving anything back.",
            traits: ["manipulation", "charisma"]
        },
        {
            text: "Trust them if their story checks out.",
            traits: ["trust", "hope"]
        },
        {
            text: "Make them regret underestimating us.",
            traits: ["ruthlessness", "courage"]
        }
    ]
},

{
    id: 23,
    question:
        "You get one completely peaceful evening with your group. What happens?",
    answers: [
        {
            text: "Everyone eats, drinks and tells stupid stories.",
            traits: ["charisma", "hope"]
        },
        {
            text: "I stay near the people I care about.",
            traits: ["loyalty", "empathy"]
        },
        {
            text: "I finally relax.",
            traits: ["emotionalControl", "hope"]
        },
        {
            text: "I'm still checking the perimeter.",
            traits: ["selfPreservation", "strategy"]
        },
        {
            text: "I start planning tomorrow's next move.",
            traits: ["leadership", "strategy"]
        }
    ]
},

{
    id: 24,
    question:
        "A dangerous person threatens someone you care about. They tell you to back off.",
    answers: [
        {
            text: "I back off and find another way to protect them.",
            traits: ["strategy", "selfPreservation"]
        },
        {
            text: "They just made this personal.",
            traits: ["loyalty", "riskAppetite"]
        },
        {
            text: "Try talking them down.",
            traits: ["charisma", "emotionalControl"]
        },
        {
            text: "Threaten them right back.",
            traits: ["courage", "ruthlessness"]
        },
        {
            text: "Wait until they think they've won.",
            traits: ["manipulation", "strategy"]
        }
    ]
},

{
    id: 25,
    question:
        "You have to choose between saving a stranger or securing a huge supply of medicine for your group.",
    answers: [
        {
            text: "Save the stranger. A life is a life.",
            traits: ["morality", "empathy"]
        },
        {
            text: "Take the medicine. It could save many more people.",
            traits: ["pragmatism", "strategy"]
        },
        {
            text: "Try to do both, even if it means taking a huge risk.",
            traits: ["hope", "riskAppetite"]
        },
        {
            text: "Let someone else make the call.",
            traits: ["trust", "emotionalControl"]
        },
        {
            text: "Depends. What can the stranger offer us?",
            traits: ["pragmatism", "manipulation"]
        }
    ]
},

{
    id: 26,
    question:
        "Your group discovers an abandoned amusement park that looks surprisingly safe.",
    answers: [
        {
            text: "We're checking it out. Maybe there's food.",
            traits: ["riskAppetite", "hope"]
        },
        {
            text: "Nope. That's exactly how horror movies start.",
            traits: ["selfPreservation", "emotionalControl"]
        },
        {
            text: "I'll scout it first.",
            traits: ["strategy", "independence"]
        },
        {
            text: "Everyone stays together. Let's have some fun for once.",
            traits: ["leadership", "charisma"]
        },
        {
            text: "If there's a roller coaster, I'm going first.",
            traits: ["courage", "riskAppetite"]
        }
    ]
},

{
    id: 27,
    question:
        "Someone in the group constantly challenges your decisions.",
    answers: [
        {
            text: "Let them speak. They might have a point.",
            traits: ["empathy", "trust"]
        },
        {
            text: "Tell them they can lead if they think they can do better.",
            traits: ["leadership", "courage"]
        },
        {
            text: "Figure out why they're really doing it.",
            traits: ["strategy", "manipulation"]
        },
        {
            text: "Ignore them and keep doing what works.",
            traits: ["independence", "pragmatism"]
        },
        {
            text: "Turn the disagreement into a joke.",
            traits: ["charisma", "emotionalControl"]
        }
    ]
},

{
    id: 28,
    question:
        "You discover someone in your group has secretly been helping a rival group.",
    answers: [
        {
            text: "Hear them out before deciding anything.",
            traits: ["empathy", "trust"]
        },
        {
            text: "They're a traitor. They're out.",
            traits: ["ruthlessness", "pragmatism"]
        },
        {
            text: "Find out what information they gave away.",
            traits: ["strategy", "selfPreservation"]
        },
        {
            text: "Use them to feed the rival group false information.",
            traits: ["manipulation", "strategy"]
        },
        {
            text: "Give them one chance to prove themselves.",
            traits: ["loyalty", "hope"]
        }
    ]
},

{
    id: 29,
    question:
        "The group is exhausted, supplies are low and everyone is starting to lose hope. What do you do?",
    answers: [
        {
            text: "Remind everyone how far we've already come.",
            traits: ["hope", "leadership"]
        },
        {
            text: "Stop wasting energy and focus only on survival.",
            traits: ["pragmatism", "selfPreservation"]
        },
        {
            text: "Come up with a new plan before things get worse.",
            traits: ["strategy", "leadership"]
        },
        {
            text: "Stay close to the people who need support.",
            traits: ["empathy", "loyalty"]
        },
        {
            text: "Take a dangerous chance. We can't stay like this forever.",
            traits: ["riskAppetite", "courage"]
        }
    ]
},

{
    id: 30,
    question:
        "It's late at night. Everyone is asleep. You hear something outside the camp.",
    answers: [
        {
            text: "Grab a weapon and investigate.",
            traits: ["courage", "riskAppetite"]
        },
        {
            text: "Wake the others and prepare everyone.",
            traits: ["leadership", "loyalty"]
        },
        {
            text: "Stay hidden and figure out exactly what it is.",
            traits: ["strategy", "selfPreservation"]
        },
        {
            text: "Quietly go outside alone.",
            traits: ["independence", "emotionalControl"]
        },
        {
            text: "Wake someone I trust and deal with it together.",
            traits: ["trust", "loyalty"]
        }
    ]
}

];


/* ------------------------------------------------------------
   Validation
   ------------------------------------------------------------ */

function validateTWDData() {

    const errors = [];

    const forbidden = [
        "authority",
        "humility",
        "stubbornness",
        "caution"
    ];


    TWD_PERSONALITY_QUESTIONS.forEach(q => {

        if (
            !q.id ||
            !q.question ||
            !Array.isArray(q.answers) ||
            q.answers.length !== 5
        ) {
            errors.push(
                `Q${q.id}: must have a question and exactly 5 answers.`
            );
        }


        q.answers.forEach((a, i) => {

            if (!Array.isArray(a.traits)) {

                errors.push(
                    `Q${q.id} answer ${i + 1}: traits must be an array.`
                );

                return;
            }


            a.traits.forEach(trait => {

                if (!TRAIT_KEYS.includes(trait)) {

                    errors.push(
                        `Q${q.id} answer ${i + 1}: undefined trait "${trait}".`
                    );

                }


                if (forbidden.includes(trait)) {

                    errors.push(
                        `Q${q.id} answer ${i + 1}: forbidden trait "${trait}".`
                    );

                }

            });

        });

    });


    Object.entries(TWD_CHARACTERS).forEach(
        ([id, character]) => {

            if (
                !Array.isArray(character.scores) ||
                character.scores.length !== TRAIT_KEYS.length
            ) {

                errors.push(
                    `${id}: character has ` +
                    `${character.scores?.length || 0} scores; ` +
                    `expected ${TRAIT_KEYS.length}.`
                );

            }

        }
    );


    Object.entries(TWD_CHARACTERS).forEach(
        ([id]) => {

            const signature =
                CHARACTER_SIGNATURES[id];


            if (!signature) {

                errors.push(
                    `${id}: missing CHARACTER_SIGNATURES entry.`
                );

                return;
            }


            const signatureTraits = [
                ...Object.keys(signature.primary || {}),
                ...Object.keys(signature.secondary || {})
            ];


            signatureTraits.forEach(trait => {

                if (!TRAIT_KEYS.includes(trait)) {

                    errors.push(
                        `${id}: signature contains undefined trait "${trait}".`
                    );

                }

            });

        }
    );


    if (
        TWD_PERSONALITY_QUESTIONS.length !== 30
    ) {

        errors.push(
            `Expected 30 questions; found ` +
            `${TWD_PERSONALITY_QUESTIONS.length}.`
        );

    }


    if (
        Object.keys(TWD_CHARACTERS).length !== 19
    ) {

        errors.push(
            `Expected 19 characters; found ` +
            `${Object.keys(TWD_CHARACTERS).length}.`
        );

    }


    return {
        valid: errors.length === 0,
        errors
    };
}


/* ------------------------------------------------------------
   Personality calculation
   ------------------------------------------------------------ */

function calculatePersonality(answerIndexes) {

    const rawScores = {};
    const maxScores = {};
    const minScores = {};


    TRAIT_KEYS.forEach(trait => {

        rawScores[trait] = 0;
        maxScores[trait] = 0;
        minScores[trait] = 0;

    });


    let answeredQuestions = 0;


    /* --------------------------------------------------------
       FIXED TRAIT ACCUMULATION

       Each answer contains an array such as:

           ["empathy", "loyalty"]

       Therefore each selected trait contributes 1 point.

       The previous version incorrectly used Object.entries()
       on this array, which produced:

           0 -> "empathy"
           1 -> "loyalty"

       rather than incrementing the actual trait names.
       -------------------------------------------------------- */

    TWD_PERSONALITY_QUESTIONS.forEach(
        question => {

            const selectedIndex =
                answerIndexes?.[question.id];


            if (
                selectedIndex === undefined ||
                selectedIndex === null
            ) {
                return;
            }


            const answer =
                question.answers[selectedIndex];


            if (!answer) return;


            answeredQuestions++;


            (answer.traits || []).forEach(
                trait => {

                    if (!TRAIT_KEYS.includes(trait)) {
                        return;
                    }


                    rawScores[trait] += 1;

                }
            );

        }
    );


    /* --------------------------------------------------------
       THEORETICAL RANGE

       Each question can contribute either:

       0 = trait absent from answer
       1 = trait present in answer

       Therefore min/max are calculated across every possible
       answer for every trait.
       -------------------------------------------------------- */

    TWD_PERSONALITY_QUESTIONS.forEach(
        question => {

            TRAIT_KEYS.forEach(trait => {

                const values =
                    question.answers.map(
                        answer =>
                            Array.isArray(answer.traits) &&
                            answer.traits.includes(trait)
                                ? 1
                                : 0
                    );


                maxScores[trait] +=
                    Math.max(...values);


                minScores[trait] +=
                    Math.min(...values);

            });

        }
    );


    const profile = {};


    TRAIT_KEYS.forEach(trait => {

        const min =
            minScores[trait];

        const max =
            maxScores[trait];

        const raw =
            rawScores[trait];


        if (max === min) {

            profile[trait] = 62;

            return;
        }


        const normalized =
            ((raw - min) /
            (max - min)) * 100;


        /*
         * Wider personality separation.
         */

        let score =
            62 +
            ((normalized - 50) * 2.0);


        score =
            Math.max(
                5,
                Math.min(
                    95,
                    score
                )
            );


        profile[trait] =
            Math.round(score);

    });


    return {

        profile,

        rawScores,

        minScores,

        maxScores,

        answeredQuestions,

        completionPercent:
            Math.round(
                (
                    answeredQuestions /
                    TWD_PERSONALITY_QUESTIONS.length
                ) * 100
            )

    };
}


/* ------------------------------------------------------------
   Helper: weighted trait similarity
   ------------------------------------------------------------ */

function getTraitSimilarity(
    userScore,
    characterScore
) {

    return Math.max(
        0,
        Math.min(
            100,
            100 -
            Math.abs(
                userScore -
                characterScore
            )
        )
    );
}


/* ------------------------------------------------------------
   Character matching
   ------------------------------------------------------------ */

function calculateCharacterMatch(
    userProfile,
    character,
    characterId = null
) {

    const signature =
        characterId
            ? CHARACTER_SIGNATURES[characterId]
            : null;


    /* ========================================================
       NEW CHARACTER-SIGNATURE SYSTEM
       ======================================================== */

    if (signature) {

        /* ----------------------------------------------------
           1. SIGNATURE SCORE

           Primary traits = strongest
           Secondary traits = moderate
           Remaining traits = weak background influence
           ---------------------------------------------------- */

        let signatureScore = 0;
        let signatureWeightTotal = 0;


        Object.entries(
            signature.primary || {}
        ).forEach(
            ([trait, weight]) => {

                const index =
                    TRAIT_KEYS.indexOf(trait);

                if (index === -1) return;


                const userScore =
                    Number(
                        userProfile[trait] ?? 62
                    );


                const characterScore =
                    Number(
                        character.scores[index] ?? 62
                    );


                const similarity =
                    getTraitSimilarity(
                        userScore,
                        characterScore
                    );


                const baseWeight =
                    TRAIT_WEIGHTS[trait] ?? 1;


                const finalWeight =
                    weight *
                    baseWeight;


                signatureScore +=
                    similarity *
                    finalWeight;


                signatureWeightTotal +=
                    finalWeight;

            }
        );


        Object.entries(
            signature.secondary || {}
        ).forEach(
            ([trait, weight]) => {

                const index =
                    TRAIT_KEYS.indexOf(trait);

                if (index === -1) return;


                const userScore =
                    Number(
                        userProfile[trait] ?? 62
                    );


                const characterScore =
                    Number(
                        character.scores[index] ?? 62
                    );


                const similarity =
                    getTraitSimilarity(
                        userScore,
                        characterScore
                    );


                const baseWeight =
                    TRAIT_WEIGHTS[trait] ?? 1;


                const finalWeight =
                    weight *
                    baseWeight;


                signatureScore +=
                    similarity *
                    finalWeight;


                signatureWeightTotal +=
                    finalWeight;

            }
        );


        /*
         * Background traits.

         * They matter, but only at 30% of their normal weight.
         */

        TRAIT_KEYS.forEach(
            (trait, index) => {

                const isPrimary =
                    Object.prototype.hasOwnProperty.call(
                        signature.primary || {},
                        trait
                    );


                const isSecondary =
                    Object.prototype.hasOwnProperty.call(
                        signature.secondary || {},
                        trait
                    );


                if (
                    isPrimary ||
                    isSecondary
                ) {
                    return;
                }


                const userScore =
                    Number(
                        userProfile[trait] ?? 62
                    );


                const characterScore =
                    Number(
                        character.scores[index] ?? 62
                    );


                const similarity =
                    getTraitSimilarity(
                        userScore,
                        characterScore
                    );


                const baseWeight =
                    TRAIT_WEIGHTS[trait] ?? 1;


                const backgroundWeight =
                    baseWeight *
                    0.30;


                signatureScore +=
                    similarity *
                    backgroundWeight;


                signatureWeightTotal +=
                    backgroundWeight;

            }
        );


        signatureScore =
            signatureWeightTotal > 0
                ? signatureScore /
                  signatureWeightTotal
                : 0;


        /* ----------------------------------------------------
           2. OVERALL PERSONALITY SCORE

           Every trait participates here.

           This stops the signature from completely ignoring
           the rest of the user's personality profile.
           ---------------------------------------------------- */

        let overallScore = 0;
        let overallWeightTotal = 0;


        TRAIT_KEYS.forEach(
            (trait, index) => {

                const userScore =
                    Number(
                        userProfile[trait] ?? 62
                    );


                const characterScore =
                    Number(
                        character.scores[index] ?? 62
                    );


                const similarity =
                    getTraitSimilarity(
                        userScore,
                        characterScore
                    );


                const weight =
                    TRAIT_WEIGHTS[trait] ?? 1;


                overallScore +=
                    similarity *
                    weight;


                overallWeightTotal +=
                    weight;

            }
        );


        overallScore =
            overallWeightTotal > 0
                ? overallScore /
                  overallWeightTotal
                : 0;


        /* ----------------------------------------------------
           3. PERSONALITY SHAPE

           Compare traits relative to the user's own average.

           Example:

           User:
           strategy = very high
           empathy = low

           Character:
           strategy = very high
           empathy = low

           Even if their absolute scores are not identical,
           the shape of the personality is similar.
           ---------------------------------------------------- */

        const userScores =
            TRAIT_KEYS.map(
                trait =>
                    Number(
                        userProfile[trait] ?? 62
                    )
            );


        const characterScores =
            character.scores.map(
                value =>
                    Number(
                        value ?? 62
                    )
            );


        const userAverage =
            userScores.reduce(
                (sum, value) =>
                    sum + value,
                0
            ) /
            userScores.length;


        const characterAverage =
            characterScores.reduce(
                (sum, value) =>
                    sum + value,
                0
            ) /
            characterScores.length;


        let shapeDifference = 0;
        let shapeWeightTotal = 0;


        TRAIT_KEYS.forEach(
            (trait, index) => {

                const userRelative =
                    userScores[index] -
                    userAverage;


                const characterRelative =
                    characterScores[index] -
                    characterAverage;


                let shapeWeight =
                    0.20;


                if (
                    Object.prototype.hasOwnProperty.call(
                        signature.primary || {},
                        trait
                    )
                ) {

                    shapeWeight =
                        0.45;

                } else if (
                    Object.prototype.hasOwnProperty.call(
                        signature.secondary || {},
                        trait
                    )
                ) {

                    shapeWeight =
                        0.30;

                }


                shapeDifference +=
                    Math.abs(
                        userRelative -
                        characterRelative
                    ) *
                    shapeWeight;


                shapeWeightTotal +=
                    shapeWeight;

            }
        );


        const shapeSimilarity =
            shapeWeightTotal > 0
                ? Math.max(
                    0,
                    Math.min(
                        100,
                        100 -
                        (
                            shapeDifference /
                            shapeWeightTotal
                        )
                    )
                )
                : 0;


        /* ----------------------------------------------------
           4. SIGNATURE ACTIVATION BONUS

           This is deliberately deterministic.

           If a user is extremely close to several defining
           traits of a character, that character receives a
           small additional boost.

           Maximum intended influence is modest compared with
           the main 60/25/15 scoring system.
           ---------------------------------------------------- */

        let signatureActivation =
            0;


        Object.entries(
            signature.primary || {}
        ).forEach(
            ([trait, weight]) => {

                const index =
                    TRAIT_KEYS.indexOf(trait);

                if (index === -1) return;


                const userScore =
                    Number(
                        userProfile[trait] ?? 62
                    );


                const characterScore =
                    Number(
                        character.scores[index] ?? 62
                    );


                const difference =
                    Math.abs(
                        userScore -
                        characterScore
                    );


                if (difference <= 6) {

                    signatureActivation +=
                        1.75 *
                        weight;

                } else if (difference <= 12) {

                    signatureActivation +=
                        0.85 *
                        weight;

                }

            }
        );


        /*
         * Prevent this extra mechanism from becoming dominant.
         */

        signatureActivation =
            Math.min(
                7,
                signatureActivation
            );


        /* ----------------------------------------------------
           5. FINAL MATCH

           60% signature
           25% overall profile
           15% personality shape
           + deterministic signature activation
           ---------------------------------------------------- */

        const combinedScore =
            (
                signatureScore *
                0.60
            ) +
            (
                overallScore *
                0.25
            ) +
            (
                shapeSimilarity *
                0.15
            ) +
            signatureActivation;


        return Math.max(
            0,
            Math.min(
                100,
                combinedScore
            )
        );
    }


    /* ========================================================
       BACKWARD-COMPATIBILITY FALLBACK

       Used only when characterId is not supplied.
       ======================================================== */

    let absoluteDifference = 0;
    let shapeDifference = 0;
    let weightTotal = 0;

    const userScores = [];
    const characterScores = [];


    TRAIT_KEYS.forEach(
        (trait, index) => {

            const userScore =
                Number(
                    userProfile[trait] ?? 62
                );


            const characterScore =
                Number(
                    character.scores[index] ?? 62
                );


            let fingerprintWeight = 1.0;


            if (
                characterScore >= 85 ||
                characterScore <= 30
            ) {

                fingerprintWeight = 1.65;

            } else if (
                characterScore >= 78 ||
                characterScore <= 40
            ) {

                fingerprintWeight = 1.25;

            } else {

                fingerprintWeight = 0.75;

            }


            const baseWeight =
                TRAIT_WEIGHTS[trait] ?? 1;


            const weight =
                baseWeight *
                fingerprintWeight;


            absoluteDifference +=
                Math.abs(
                    userScore -
                    characterScore
                ) *
                weight;


            userScores.push(
                userScore
            );


            characterScores.push(
                characterScore
            );


            weightTotal +=
                weight;

        }
    );


    const userAverage =
        userScores.reduce(
            (a, b) => a + b,
            0
        ) /
        userScores.length;


    const characterAverage =
        characterScores.reduce(
            (a, b) => a + b,
            0
        ) /
        characterScores.length;


    TRAIT_KEYS.forEach(
        (trait, index) => {

            const characterScore =
                characterScores[index];


            let fingerprintWeight = 1.0;


            if (
                characterScore >= 85 ||
                characterScore <= 30
            ) {

                fingerprintWeight = 1.65;

            } else if (
                characterScore >= 78 ||
                characterScore <= 40
            ) {

                fingerprintWeight = 1.25;

            } else {

                fingerprintWeight = 0.75;

            }


            const baseWeight =
                TRAIT_WEIGHTS[trait] ?? 1;


            const weight =
                baseWeight *
                fingerprintWeight;


            const userRelative =
                userScores[index] -
                userAverage;


            const characterRelative =
                characterScores[index] -
                characterAverage;


            shapeDifference +=
                Math.abs(
                    userRelative -
                    characterRelative
                ) *
                weight;

        }
    );


    const absoluteScore =
        weightTotal > 0
            ? absoluteDifference /
              (100 * weightTotal)
            : 0;


    const shapeScore =
        weightTotal > 0
            ? shapeDifference /
              (100 * weightTotal)
            : 0;


    const combinedDifference =
        (
            absoluteScore *
            0.60
        ) +
        (
            shapeScore *
            0.40
        );


    const similarity =
        100 -
        (
            combinedDifference *
            100
        );


    return Math.max(
        0,
        Math.min(
            100,
            similarity
        )
    );
}


/* ------------------------------------------------------------
   Strongest / lowest traits
   ------------------------------------------------------------ */

function getStrongestTraits(
    profile,
    count = 3
) {

    return TRAIT_KEYS
        .map(
            (trait, index) => ({
                trait,
                label: TWD_TRAITS[index],
                score: profile[trait]
            })
        )
        .sort(
            (a, b) => {

                if (b.score !== a.score) {
                    return b.score - a.score;
                }

                return (
                    TRAIT_KEYS.indexOf(a.trait) -
                    TRAIT_KEYS.indexOf(b.trait)
                );

            }
        )
        .slice(
            0,
            count
        );
}


function getLowestTraits(
    profile,
    count = 3
) {

    return TRAIT_KEYS
        .map(
            (trait, index) => ({
                trait,
                label: TWD_TRAITS[index],
                score: profile[trait]
            })
        )
        .sort(
            (a, b) => {

                if (a.score !== b.score) {
                    return a.score - b.score;
                }

                return (
                    TRAIT_KEYS.indexOf(a.trait) -
                    TRAIT_KEYS.indexOf(b.trait)
                );

            }
        )
        .slice(
            0,
            count
        );
}


/* ------------------------------------------------------------
   Final result
   ------------------------------------------------------------ */

function calculateFinalPersonality(
    answerIndexes
) {

    const personality =
        calculatePersonality(
            answerIndexes
        );


    const results =
        Object.entries(
            TWD_CHARACTERS
        )
        .map(
            ([id, character]) => {

                /*
                 * Main character-specific matching.
                 */

                const baseSimilarity =
                    calculateCharacterMatch(
                        personality.profile,
                        character,
                        id
                    );


                /*
                 * Accessibility adjustment.

                 * This remains deliberately modest.
                 */

                const accessibilityBonus =
                    CHARACTER_ACCESSIBILITY[id] ?? 0;


                const scoreBeforeDiversity =
                    Math.min(
                        100,
                        baseSimilarity +
                        accessibilityBonus
                    );


                return {
                    id,
                    name: character.name,
                    image: character.image,

                    /*
                     * Keep precise score internally.
                     * It will only be rounded after final
                     * ranking has been completed.
                     */

                    rawSimilarity:
                        scoreBeforeDiversity,

                    similarity:
                        Math.round(
                            scoreBeforeDiversity
                        )
                };

            }
        );


    /* --------------------------------------------------------
       FIND CURRENT BEST SCORE
       -------------------------------------------------------- */

    const bestRawScore =
        results.reduce(
            (
                best,
                result
            ) =>
                Math.max(
                    best,
                    result.rawSimilarity
                ),
            0
        );


    /* --------------------------------------------------------
       DETERMINISTIC NEAR-TIE DIVERSITY

       If several characters are already extremely close to
       first place, give the runner-up a small deterministic
       boost.

       This prevents the same handful of characters from
       dominating every ambiguous profile.

       It does NOT randomly select a character.

       The same answers always produce the same result.
       -------------------------------------------------------- */

    results.forEach(result => {

        const distance =
            bestRawScore -
            result.rawSimilarity;


        let diversityBonus = 0;


        if (distance <= 2) {

            diversityBonus = 1.75;

        } else if (distance <= 4) {

            diversityBonus = 1.25;

        } else if (distance <= 7) {

            diversityBonus = 0.60;

        }


        result.finalSimilarity =
            Math.min(
                100,
                result.rawSimilarity +
                diversityBonus
            );

    });


    /* --------------------------------------------------------
       FINAL DETERMINISTIC SORT

       1. Final score
       2. Raw score
       3. Character ID

       Therefore identical answers always produce identical
       ordering, even if two characters have exactly the same
       score.
       -------------------------------------------------------- */

    results.sort(
        (a, b) => {

            if (
                b.finalSimilarity !==
                a.finalSimilarity
            ) {

                return (
                    b.finalSimilarity -
                    a.finalSimilarity
                );

            }


            if (
                b.rawSimilarity !==
                a.rawSimilarity
            ) {

                return (
                    b.rawSimilarity -
                    a.rawSimilarity
                );

            }


            return a.id.localeCompare(
                b.id
            );

        }
    );


    /* --------------------------------------------------------
       ROUND ONLY AFTER RANKING
       -------------------------------------------------------- */

    results.forEach(result => {

        result.similarity =
            Math.round(
                result.finalSimilarity
            );

        delete result.rawSimilarity;
        delete result.finalSimilarity;

    });


    const strongestTraits =
        getStrongestTraits(
            personality.profile,
            3
        );


    const lowestTraits =
        getLowestTraits(
            personality.profile,
            3
        );


    return {

        profile:
            personality.profile,

        rawScores:
            personality.rawScores,

        answeredQuestions:
            personality.answeredQuestions,

        completionPercent:
            personality.completionPercent,

        results,

        winner:
            results[0] || null,

        second:
            results[1] || null,

        third:
            results[2] || null,

        strongestTraits,

        lowestTraits

    };
}


/* ------------------------------------------------------------
   Completion / answer helpers
   ------------------------------------------------------------ */

function isQuizComplete(
    answerIndexes
) {

    return TWD_PERSONALITY_QUESTIONS.every(
        q => {

            const index =
                answerIndexes?.[q.id];


            return (
                Number.isInteger(index) &&
                index >= 0 &&
                index < q.answers.length
            );

        }
    );
}


function getUnansweredQuestions(
    answerIndexes
) {

    return TWD_PERSONALITY_QUESTIONS
        .filter(
            q => {

                const index =
                    answerIndexes?.[q.id];


                return (
                    !Number.isInteger(index) ||
                    index < 0 ||
                    index >= q.answers.length
                );

            }
        )
        .map(
            q => q.id
        );
}


function createEmptyTraitScores() {

    const scores = {};


    TRAIT_KEYS.forEach(
        trait => {

            scores[trait] = 62;

        }
    );


    return scores;
}


/* ------------------------------------------------------------
   Automatic validation on load
   ------------------------------------------------------------ */

const TWD_ENGINE_VALIDATION =
    validateTWDData();


if (!TWD_ENGINE_VALIDATION.valid) {

    console.error(
        "TWD personality data validation failed:",
        TWD_ENGINE_VALIDATION.errors
    );

} else {

    console.log(
        `TWD Personality Engine loaded successfully: ` +
        `${TWD_PERSONALITY_QUESTIONS.length} questions, ` +
        `${Object.keys(TWD_CHARACTERS).length} characters, ` +
        `${TRAIT_KEYS.length} traits.`
    );

}


/* ------------------------------------------------------------
   Browser/global compatibility
   ------------------------------------------------------------ */

if (typeof window !== "undefined") {

    Object.assign(
        window,
        {

            TRAIT_KEYS,

            TWD_TRAITS,

            TRAIT_WEIGHTS,

            TWD_CHARACTERS,

            CHARACTER_SIGNATURES,

            CHARACTER_ACCESSIBILITY,

            TWD_PERSONALITY_QUESTIONS,

            TWD_ENGINE_VALIDATION,

            createEmptyTraitScores,

            calculatePersonality,

            calculateCharacterMatch,

            getStrongestTraits,

            getLowestTraits,

            calculateFinalPersonality,

            isQuizComplete,

            getUnansweredQuestions,

            validateTWDData

        }
    );

}
