/* ============================================================
   THE WALKING DEAD — PERSONALITY QUIZ ENGINE
   v5 — NORMALIZED AFFINITY + CORRECT TRAIT MAPPING EDITION

   30 questions
   18 TWD-specific situations
   12 general apocalypse / zombie situations

   19 possible characters

   DESIGN GOALS
   ------------------------------------------------------------
   - recognizable and enjoyable results
   - every character has legitimate routes to #1
   - major characters are easier to reach
   - supporting characters remain possible
   - deterministic results
   - no random result selection
   - character affinity + personality traits
   - strong character identity
   - balanced result distribution
   - built-in 100,000-run distribution simulator

   IMPORTANT BALANCING CHANGES IN v5
   ------------------------------------------------------------
   1. CHARACTER SCORE TRAIT ORDER IS NOW EXPLICITLY MAPPED.

      The character score arrays use:

      courage
      leadership
      compassion
      strategy
      morality
      pragmatism
      riskTaking
      survival
      independence
      trust
      charisma
      manipulation
      loyalty
      hope
      emotionalControl
      ruthlessness

      This is different from TRAIT_KEYS.

      The previous scoring engine compared character scores
      against TRAIT_KEYS by array index, causing incorrect
      trait comparisons.

   2. AFFINITY IS NORMALIZED PER CHARACTER.

      Characters with more affinity routes no longer receive
      an automatic advantage merely because they have more
      opportunities to collect raw affinity.

   3. AFFINITY IS THE MAIN CHARACTER-IDENTITY SIGNAL.

   4. PERSONALITY MATCHING REMAINS IMPORTANT BUT CANNOT
      OVERRIDE THE QUESTION-BASED CHARACTER ROUTES.

   5. SIGNATURE ACTIVATION IS SMALL.

   6. ACCESSIBILITY IS SMALL.

   7. RELATIVE AFFINITY ROUTE BONUS HELPS SPARSE CHARACTERS
      BECOME POSSIBLE WHEN A PLAYER CONSISTENTLY CHOOSES
      THEIR specific routes.

   8. NO RANDOM RESULT FORCING.

   This is an entertainment personality quiz.
   The balancing is intentionally designed for variety and
   enjoyable character results rather than scientific
   personality measurement.
============================================================ */


/* ============================================================
   1. TRAITS
============================================================ */

const TRAIT_KEYS = [
    "survival",
    "courage",
    "compassion",
    "loyalty",
    "morality",
    "pragmatism",
    "ruthlessness",
    "leadership",
    "independence",
    "trust",
    "charisma",
    "manipulation",
    "strategy",
    "hope",
    "emotionalControl",
    "riskTaking"
];

const TWD_TRAITS = {
    survival: "Survival Instinct",
    courage: "Courage",
    compassion: "Compassion",
    loyalty: "Loyalty",
    morality: "Morality",
    pragmatism: "Pragmatism",
    ruthlessness: "Ruthlessness",
    leadership: "Leadership",
    independence: "Independence",
    trust: "Trust",
    charisma: "Charisma",
    manipulation: "Manipulation",
    strategy: "Strategy",
    hope: "Hope",
    emotionalControl: "Emotional Control",
    riskTaking: "Risk Taking"
};


/* ============================================================
   2. TRAIT WEIGHTS
============================================================ */

const TRAIT_WEIGHTS = {
    survival: 1.00,
    courage: 1.00,
    compassion: 0.95,
    loyalty: 1.00,
    morality: 0.90,
    pragmatism: 1.00,
    ruthlessness: 0.90,
    leadership: 1.00,
    independence: 0.95,
    trust: 0.80,
    charisma: 0.85,
    manipulation: 0.90,
    strategy: 1.00,
    hope: 0.85,
    emotionalControl: 0.90,
    riskTaking: 0.90
};


/* ============================================================
   3. CHARACTER SCORE ORDER
============================================================

   IMPORTANT:

   This is the order used by every CHARACTERS[id].scores array.

   DO NOT change this order unless every character score array
   is changed accordingly.

============================================================ */

const CHARACTER_SCORE_KEYS = [
    "courage",
    "leadership",
    "compassion",
    "strategy",
    "morality",
    "pragmatism",
    "riskTaking",
    "survival",
    "independence",
    "trust",
    "charisma",
    "manipulation",
    "loyalty",
    "hope",
    "emotionalControl",
    "ruthlessness"
];


/* ============================================================
   4. CHARACTER PROFILES
============================================================ */

const CHARACTERS = {

    rick: {
        name: "Rick Grimes",
        image: "images/rick.jpg",
        scores: [
            78,94,72,95,
            82,84,42,92,
            62,52,82,42,
            98,84,86,72
        ]
    },

    daryl: {
        name: "Daryl Dixon",
        image: "images/daryl.jpg",
        scores: [
            96,82,68,91,
            72,82,58,98,
            99,34,42,30,
            94,72,91,86
        ]
    },

    carol: {
        name: "Carol Peletier",
        image: "images/carol.jpg",
        scores: [
            88,78,62,94,
            55,96,72,95,
            94,35,58,94,
            88,68,96,91
        ]
    },

    shane: {
        name: "Shane Walsh",
        image: "images/shane.jpg",
        scores: [
            94,91,42,68,
            30,94,96,89,
            78,25,72,78,
            76,42,48,98
        ]
    },

    glenn: {
        name: "Glenn Rhee",
        image: "images/glenn.jpg",
        scores: [
            72,68,98,82,
            94,64,42,68,
            58,94,70,18,
            96,91,82,48
        ]
    },

    michonne: {
        name: "Michonne",
        image: "images/michonne.jpg",
        scores: [
            91,82,74,94,
            82,82,52,92,
            98,42,58,48,
            94,76,98,72
        ]
    },

    maggie: {
        name: "Maggie Greene",
        image: "images/maggie.jpg",
        scores: [
            86,91,84,88,
            90,78,55,88,
            68,82,80,38,
            94,92,82,68
        ]
    },

    hershel: {
        name: "Hershel Greene",
        image: "images/hershel.jpg",
        scores: [
            48,62,99,82,
            99,58,10,64,
            42,97,76,12,
            88,94,96,18
        ]
    },

    abraham: {
        name: "Abraham Ford",
        image: "images/abraham.jpg",
        scores: [
            97,91,54,76,
            54,92,94,93,
            72,40,84,40,
            82,60,76,96
        ]
    },

    eugene: {
        name: "Eugene Porter",
        image: "images/eugene.jpg",
        scores: [
            48,38,42,99,
            58,95,18,72,
            88,28,58,72,
            58,34,94,24
        ]
    },

    negan: {
        name: "Negan",
        image: "images/negan.jpg",
        scores: [
            78,96,28,82,
            18,91,82,91,
            76,24,99,99,
            72,46,94,99
        ]
    },

    governor: {
        name: "The Governor",
        image: "images/governor.jpg",
        scores: [
            86,91,18,84,
            10,92,82,92,
            82,12,94,99,
            70,28,82,99
        ]
    },

    morgan: {
        name: "Morgan Jones",
        image: "images/morgan.jpg",
        scores: [
            56,42,98,48,
            99,34,18,42,
            54,91,36,12,
            92,99,94,10
        ]
    },

    gabriel: {
        name: "Gabriel Stokes",
        image: "images/gabriel.jpg",
        scores: [
            42,48,92,58,
            99,46,12,38,
            38,94,54,18,
            84,98,91,10
        ]
    },

    ezekiel: {
        name: "Ezekiel",
        image: "images/ezekiel.jpg",
        scores: [
            66,91,86,72,
            82,62,32,72,
            52,82,99,62,
            88,99,78,42
        ]
    },

    gregory: {
        name: "Gregory",
        image: "images/gregory.jpg",
        scores: [
            24,28,22,42,
            22,91,18,78,
            76,22,86,96,
            28,18,34,54
        ]
    },

    gareth: {
        name: "Gareth",
        image: "images/gareth.jpg",
        scores: [
            82,48,8,84,
            6,97,78,96,
            82,8,72,99,
            16,6,82,99
        ]
    },

    dawn: {
        name: "Dawn Lerner",
        image: "images/dawn.jpg",
        scores: [
            58,94,32,91,
            38,88,36,82,
            46,26,64,76,
            54,32,88,68
        ]
    },

    bob: {
        name: "Bob Stookey",
        image: "images/bob.jpg",
        scores: [
            52,42,99,62,
            97,48,18,48,
            42,98,62,10,
            91,96,96,14
        ]
    }
};


/* ============================================================
   5. CHARACTER ACCESSIBILITY
============================================================ */

const CHARACTER_ACCESSIBILITY = {

    rick: 8.0,
    daryl: 8.0,
    carol: 8.0,

    michonne: 7.5,
    maggie: 7.5,
    negan: 7.5,

    shane: 7.0,
    abraham: 7.0,
    governor: 6.8,
    ezekiel: 6.5,

    glenn: 6.2,
    eugene: 6.0,
    hershel: 5.8,
    morgan: 5.8,

    gabriel: 4.8,
    bob: 4.5,
    gareth: 4.3,

    gregory: 3.8,
    dawn: 3.8
};

const ACCESSIBILITY_MIN = 3.8;
const ACCESSIBILITY_MAX = 8.0;
const ACCESSIBILITY_BONUS_MAX = 4.0;

function calculateAccessibilityBonus(characterId) {

    const value =
        Number(CHARACTER_ACCESSIBILITY[characterId]);

    if (!Number.isFinite(value)) {
        return 0;
    }

    const normalized =
        (
            value - ACCESSIBILITY_MIN
        ) /
        (
            ACCESSIBILITY_MAX - ACCESSIBILITY_MIN
        );

    return Math.max(
        0,
        Math.min(
            ACCESSIBILITY_BONUS_MAX,
            normalized * ACCESSIBILITY_BONUS_MAX
        )
    );
}


/* ============================================================
   6. CHARACTER SIGNATURES
============================================================ */

const CHARACTER_SIGNATURES = {

    rick: {
        primary: [
            "leadership",
            "courage",
            "loyalty",
            "strategy"
        ],
        secondary: [
            "morality",
            "hope",
            "charisma"
        ]
    },

    daryl: {
        primary: [
            "independence",
            "survival",
            "loyalty",
            "courage"
        ],
        secondary: [
            "emotionalControl",
            "strategy",
            "riskTaking"
        ]
    },

    carol: {
        primary: [
            "pragmatism",
            "strategy",
            "manipulation",
            "survival"
        ],
        secondary: [
            "independence",
            "ruthlessness",
            "emotionalControl"
        ]
    },

    shane: {
        primary: [
            "courage",
            "riskTaking",
            "pragmatism",
            "ruthlessness"
        ],
        secondary: [
            "leadership",
            "independence",
            "survival"
        ]
    },

    glenn: {
        primary: [
            "compassion",
            "morality",
            "loyalty",
            "trust"
        ],
        secondary: [
            "hope",
            "courage",
            "emotionalControl"
        ]
    },

    michonne: {
        primary: [
            "independence",
            "courage",
            "emotionalControl",
            "strategy"
        ],
        secondary: [
            "loyalty",
            "survival",
            "morality"
        ]
    },

    maggie: {
        primary: [
            "loyalty",
            "leadership",
            "courage",
            "hope"
        ],
        secondary: [
            "compassion",
            "morality",
            "strategy"
        ]
    },

    hershel: {
        primary: [
            "morality",
            "compassion",
            "trust",
            "loyalty"
        ],
        secondary: [
            "emotionalControl",
            "hope",
            "charisma"
        ]
    },

    abraham: {
        primary: [
            "courage",
            "riskTaking",
            "leadership",
            "pragmatism"
        ],
        secondary: [
            "charisma",
            "loyalty",
            "survival"
        ]
    },

    eugene: {
        primary: [
            "strategy",
            "survival",
            "pragmatism",
            "manipulation"
        ],
        secondary: [
            "independence",
            "charisma",
            "emotionalControl"
        ]
    },

    negan: {
        primary: [
            "charisma",
            "manipulation",
            "ruthlessness",
            "leadership"
        ],
        secondary: [
            "pragmatism",
            "strategy",
            "riskTaking"
        ]
    },

    governor: {
        primary: [
            "manipulation",
            "ruthlessness",
            "leadership",
            "charisma"
        ],
        secondary: [
            "survival",
            "strategy",
            "pragmatism"
        ]
    },

    morgan: {
        primary: [
            "compassion",
            "morality",
            "hope",
            "loyalty"
        ],
        secondary: [
            "trust",
            "emotionalControl",
            "courage"
        ]
    },

    gabriel: {
        primary: [
            "morality",
            "hope",
            "compassion",
            "emotionalControl"
        ],
        secondary: [
            "trust",
            "loyalty",
            "strategy"
        ]
    },

    ezekiel: {
        primary: [
            "charisma",
            "leadership",
            "hope",
            "loyalty"
        ],
        secondary: [
            "compassion",
            "morality",
            "courage"
        ]
    },

    gregory: {
        primary: [
            "survival",
            "manipulation",
            "charisma",
            "pragmatism"
        ],
        secondary: [
            "independence",
            "strategy"
        ]
    },

    gareth: {
        primary: [
            "ruthlessness",
            "manipulation",
            "pragmatism",
            "survival"
        ],
        secondary: [
            "strategy",
            "riskTaking",
            "leadership"
        ]
    },

    dawn: {
        primary: [
            "leadership",
            "pragmatism",
            "survival",
            "strategy"
        ],
        secondary: [
            "manipulation",
            "emotionalControl",
            "charisma"
        ]
    },

    bob: {
        primary: [
            "compassion",
            "morality",
            "trust",
            "hope"
        ],
        secondary: [
            "emotionalControl",
            "loyalty",
            "courage"
        ]
    }
};


/* ============================================================
   7. QUESTIONS
============================================================ */

const questions = [

{
    question:
        "Your group is living in a prison, and several survivors disagree about whether to stay or leave. What do you do?",

    answers: [
        {
            text: "Take responsibility and make a clear decision for the group.",
            traits: ["leadership","courage"],
            affinity: {rick:4, maggie:2}
        },
        {
            text: "Scout the surrounding area yourself before deciding.",
            traits: ["independence","strategy"],
            affinity: {daryl:4, michonne:2}
        },
        {
            text: "Look for a practical compromise that keeps everyone alive.",
            traits: ["pragmatism","loyalty"],
            affinity: {carol:3, hershel:2, rick:1}
        },
        {
            text: "Push the group to leave before the situation becomes worse.",
            traits: ["riskTaking","courage"],
            affinity: {shane:4, abraham:2}
        },
        {
            text: "Keep morale high and convince everyone that the group can make it work.",
            traits: ["hope","charisma"],
            affinity: {ezekiel:4, gabriel:1}
        }
    ]
},

{
    question:
        "A stranger appears outside your group's settlement asking for shelter. Nobody knows anything about them.",

    answers: [
        {
            text: "Let them in, but keep someone watching them.",
            traits: ["compassion","strategy"],
            affinity: {rick:2, carol:3}
        },
        {
            text: "Refuse until they prove they can be trusted.",
            traits: ["survival","independence"],
            affinity: {daryl:4, michonne:2}
        },
        {
            text: "Give them a chance because everyone deserves one.",
            traits: ["compassion","morality"],
            affinity: {glenn:4, bob:2}
        },
        {
            text: "Question them aggressively until you know what they want.",
            traits: ["strategy","emotionalControl"],
            affinity: {michonne:3, dawn:2, rick:1}
        },
        {
            text: "Offer protection, but make it clear that your rules come first.",
            traits: ["leadership","pragmatism"],
            affinity: {negan:3, governor:3}
        }
    ]
},

{
    question:
        "A powerful settlement offers your group safety, food and weapons, but you suspect its leader is hiding something.",

    answers: [
        {
            text: "Accept temporarily while quietly investigating the leader.",
            traits: ["strategy","pragmatism"],
            affinity: {rick:3, carol:3, eugene:1}
        },
        {
            text: "Reject the offer. A suspicious leader is too dangerous.",
            traits: ["independence","survival"],
            affinity: {daryl:3, michonne:3}
        },
        {
            text: "Try to establish a genuine relationship before judging them.",
            traits: ["trust","compassion"],
            affinity: {glenn:3, hershel:3}
        },
        {
            text: "Study the leader and look for leverage in case things turn hostile.",
            traits: ["manipulation","strategy"],
            affinity: {carol:4, eugene:2}
        },
        {
            text: "Take the deal. Security matters more than uncertainty.",
            traits: ["pragmatism","survival"],
            affinity: {gregory:3, dawn:2, governor:2}
        }
    ]
},

{
    question:
        "Your closest ally makes a decision you believe will endanger everyone. What do you do?",

    answers: [
        {
            text: "Confront them directly, even if it damages the friendship.",
            traits: ["courage","morality"],
            affinity: {rick:4, michonne:1}
        },
        {
            text: "Watch them carefully and wait for proof before acting.",
            traits: ["strategy","emotionalControl"],
            affinity: {daryl:3, carol:3}
        },
        {
            text: "Tell them privately that the group comes before either of you.",
            traits: ["loyalty","leadership"],
            affinity: {maggie:4, rick:2}
        },
        {
            text: "If they become a genuine threat, remove them before they hurt someone.",
            traits: ["ruthlessness","pragmatism"],
            affinity: {shane:4, carol:3}
        },
        {
            text: "Try to understand why they made the decision before judging them.",
            traits: ["compassion","trust"],
            affinity: {glenn:3, hershel:3}
        }
    ]
},

{
    question:
        "Someone in your settlement is secretly planning to hurt one of the children. Nobody else believes you.",

    answers: [
        {
            text: "Warn everyone and confront the person openly.",
            traits: ["courage","leadership"],
            affinity: {rick:3, maggie:2}
        },
        {
            text: "Keep the information secret and quietly prepare a way to stop them.",
            traits: ["strategy","emotionalControl"],
            affinity: {carol:5, michonne:2}
        },
        {
            text: "Talk to the person and try to understand what is driving them.",
            traits: ["compassion","morality"],
            affinity: {hershel:3, glenn:3}
        },
        {
            text: "Get the child out of danger immediately and deal with the threat later.",
            traits: ["survival","loyalty"],
            affinity: {daryl:4, carol:3}
        },
        {
            text: "Manipulate the person into revealing their intentions.",
            traits: ["manipulation","strategy"],
            affinity: {carol:4, governor:2, eugene:2}
        }
    ]
},

{
    question:
        "Your group discovers infected people who were once members of a family. Some survivors believe they should be treated as people.",

    answers: [
        {
            text: "There is still a moral line you refuse to cross without certainty.",
            traits: ["morality","compassion"],
            affinity: {hershel:5, morgan:2}
        },
        {
            text: "Accept reality and do whatever is necessary to protect the living.",
            traits: ["pragmatism","survival"],
            affinity: {daryl:3, shane:3}
        },
        {
            text: "Try to find another solution even if it takes longer.",
            traits: ["hope","morality"],
            affinity: {glenn:3, bob:3}
        },
        {
            text: "The group cannot survive if emotions control every decision.",
            traits: ["emotionalControl","pragmatism"],
            affinity: {michonne:3, rick:2, dawn:2}
        },
        {
            text: "Protect the people who are still alive, whatever the emotional cost.",
            traits: ["loyalty","courage"],
            affinity: {maggie:4, abraham:2}
        }
    ]
},

{
    question:
        "A friend is trapped inside a building surrounded by walkers. Going after them could expose the entire group.",

    answers: [
        {
            text: "Go in. Leaving them behind is not acceptable.",
            traits: ["loyalty","courage"],
            affinity: {glenn:4, daryl:2}
        },
        {
            text: "Organize a careful rescue with several people.",
            traits: ["leadership","strategy"],
            affinity: {rick:4, maggie:2}
        },
        {
            text: "Find another entrance or distraction before taking the risk.",
            traits: ["strategy","survival"],
            affinity: {carol:3, eugene:3}
        },
        {
            text: "If rescuing them risks everyone, the group must come first.",
            traits: ["pragmatism","emotionalControl"],
            affinity: {michonne:3, shane:3}
        },
        {
            text: "Try something extremely risky if it gives them even a small chance.",
            traits: ["riskTaking","compassion"],
            affinity: {glenn:3, abraham:3}
        }
    ]
},

{
    question:
        "Your group reaches a peaceful settlement where most residents have never faced a serious walker attack.",

    answers: [
        {
            text: "Teach them how dangerous the outside world really is.",
            traits: ["leadership","survival"],
            affinity: {rick:4, michonne:2}
        },
        {
            text: "Keep your distance until you know whether they can handle themselves.",
            traits: ["independence","emotionalControl"],
            affinity: {daryl:4, carol:2}
        },
        {
            text: "Help them adapt without destroying the community's sense of normal life.",
            traits: ["compassion","hope"],
            affinity: {maggie:3, glenn:3}
        },
        {
            text: "Take advantage of the safety while quietly preparing an escape plan.",
            traits: ["strategy","survival"],
            affinity: {eugene:4, gregory:2}
        },
        {
            text: "Build relationships and become one of the people holding the community together.",
            traits: ["charisma","leadership"],
            affinity: {ezekiel:4, rick:2}
        }
    ]
},

{
    question:
        "A stronger group demands regular supplies from your settlement in exchange for leaving you alone.",

    answers: [
        {
            text: "Refuse and prepare your people for a fight.",
            traits: ["courage","leadership"],
            affinity: {rick:3, shane:3}
        },
        {
            text: "Pay temporarily while searching for a way to break free.",
            traits: ["pragmatism","strategy"],
            affinity: {carol:4, eugene:2}
        },
        {
            text: "Negotiate directly and try to understand what they actually want.",
            traits: ["charisma","strategy"],
            affinity: {maggie:3, ezekiel:2, negan:2}
        },
        {
            text: "Give them what they want if it keeps innocent people alive.",
            traits: ["compassion","pragmatism"],
            affinity: {hershel:3, gabriel:2}
        },
        {
            text: "Find their weakness and make sure they regret threatening you.",
            traits: ["ruthlessness","manipulation"],
            affinity: {negan:4, carol:2, governor:2}
        }
    ]
},

{
    question:
        "An enemy leader tries to intimidate you by publicly humiliating one of your friends.",

    answers: [
        {
            text: "Stay calm and refuse to give them the reaction they want.",
            traits: ["emotionalControl","courage"],
            affinity: {michonne:3, daryl:3}
        },
        {
            text: "Challenge them openly, even if it makes things worse.",
            traits: ["courage","riskTaking"],
            affinity: {abraham:4, shane:3}
        },
        {
            text: "Play along temporarily and look for a better opportunity.",
            traits: ["strategy","manipulation"],
            affinity: {carol:4, eugene:3}
        },
        {
            text: "Use humor and confidence to take control of the conversation.",
            traits: ["charisma","emotionalControl"],
            affinity: {negan:5, ezekiel:2}
        },
        {
            text: "Protect your friend regardless of the consequences.",
            traits: ["loyalty","morality"],
            affinity: {rick:3, maggie:3}
        }
    ]
},

{
    question:
        "You arrive at a settlement advertising itself as a safe haven, but something about the place feels wrong.",

    answers: [
        {
            text: "Enter cautiously and keep an escape route ready.",
            traits: ["strategy","survival"],
            affinity: {rick:3, daryl:3}
        },
        {
            text: "Observe the settlement from outside before anyone enters.",
            traits: ["independence","strategy"],
            affinity: {michonne:4, carol:2}
        },
        {
            text: "Give the people a chance unless you have actual evidence of danger.",
            traits: ["trust","morality"],
            affinity: {glenn:4, bob:2}
        },
        {
            text: "Assume it is a trap and prepare to fight your way out.",
            traits: ["survival","ruthlessness"],
            affinity: {daryl:3, shane:3}
        },
        {
            text: "Talk to the leaders and figure out what they really want.",
            traits: ["charisma","manipulation"],
            affinity: {eugene:3, negan:3, governor:2}
        }
    ]
},

{
    question:
        "A settlement has food but poor defenses. Your group has fighters but limited supplies.",

    answers: [
        {
            text: "Create an alliance and divide responsibilities.",
            traits: ["leadership","loyalty"],
            affinity: {rick:3, maggie:4}
        },
        {
            text: "Train their people to defend themselves.",
            traits: ["leadership","strategy"],
            affinity: {abraham:3, daryl:3}
        },
        {
            text: "Trade protection for food.",
            traits: ["pragmatism","strategy"],
            affinity: {eugene:3, dawn:3}
        },
        {
            text: "Use diplomacy and make both communities feel valued.",
            traits: ["charisma","compassion"],
            affinity: {ezekiel:4, hershel:2}
        },
        {
            text: "Take control before another group exploits their weakness.",
            traits: ["ruthlessness","leadership"],
            affinity: {governor:4, negan:3}
        }
    ]
},

{
    question:
        "Someone inside your community may secretly be working for an enemy group.",

    answers: [
        {
            text: "Investigate quietly without accusing anyone prematurely.",
            traits: ["strategy","emotionalControl"],
            affinity: {carol:4, michonne:2}
        },
        {
            text: "Confront suspicious people directly.",
            traits: ["courage","leadership"],
            affinity: {rick:3, shane:3}
        },
        {
            text: "Protect everyone until you know the truth.",
            traits: ["loyalty","compassion"],
            affinity: {maggie:3, glenn:3}
        },
        {
            text: "Use deception to expose the infiltrator.",
            traits: ["manipulation","strategy"],
            affinity: {carol:4, eugene:2}
        },
        {
            text: "Assume betrayal is inevitable and prepare accordingly.",
            traits: ["survival","pragmatism"],
            affinity: {daryl:3, governor:3}
        }
    ]
},

{
    question:
        "An enemy who previously hurt your group is now helpless and asks you not to kill them.",

    answers: [
        {
            text: "Spare them. Killing someone helpless crosses a line.",
            traits: ["morality","compassion"],
            affinity: {morgan:5, hershel:3}
        },
        {
            text: "Spare them, but make sure they can never threaten anyone again.",
            traits: ["morality","pragmatism"],
            affinity: {michonne:3, rick:2}
        },
        {
            text: "Kill them before they get another opportunity.",
            traits: ["ruthlessness","survival"],
            affinity: {shane:3, governor:3, gareth:3}
        },
        {
            text: "Let the group decide rather than making the choice yourself.",
            traits: ["trust","morality"],
            affinity: {gabriel:4, hershel:2}
        },
        {
            text: "Use the situation to learn why they became your enemy.",
            traits: ["compassion","strategy"],
            affinity: {glenn:3, bob:3}
        }
    ]
},

{
    question:
        "Your group needs to reach another settlement, but nobody knows the safest route.",

    answers: [
        {
            text: "Take the route with the fewest unknowns, even if it is longer.",
            traits: ["strategy","survival"],
            affinity: {eugene:5, daryl:2}
        },
        {
            text: "Scout several routes and compare the risks.",
            traits: ["strategy","emotionalControl"],
            affinity: {michonne:3, eugene:3}
        },
        {
            text: "Take the shortest route and deal with problems as they appear.",
            traits: ["riskTaking","courage"],
            affinity: {abraham:4, shane:3}
        },
        {
            text: "Ask people who know the area rather than guessing.",
            traits: ["trust","pragmatism"],
            affinity: {glenn:3, hershel:2, maggie:2}
        },
        {
            text: "Create a convincing story to obtain information from another group.",
            traits: ["manipulation","charisma"],
            affinity: {eugene:4, negan:3}
        }
    ]
},

{
    question:
        "Your people are frightened after losing several members. What do you do?",

    answers: [
        {
            text: "Give them a realistic plan and ask them to keep moving.",
            traits: ["leadership","hope"],
            affinity: {rick:3, maggie:3}
        },
        {
            text: "Give them something to believe in and restore their morale.",
            traits: ["charisma","hope"],
            affinity: {ezekiel:5, gabriel:2}
        },
        {
            text: "Let everyone grieve before making another major decision.",
            traits: ["compassion","emotionalControl"],
            affinity: {hershel:4, bob:3}
        },
        {
            text: "Focus on practical survival rather than emotions.",
            traits: ["pragmatism","survival"],
            affinity: {daryl:3, carol:3}
        },
        {
            text: "Turn their anger into motivation against the enemy.",
            traits: ["leadership","riskTaking"],
            affinity: {abraham:3, shane:3, negan:2}
        }
    ]
},

{
    question:
        "A settlement has strict rules and heavily armed guards. The rules keep people safe, but some are clearly unfair.",

    answers: [
        {
            text: "Follow the rules temporarily while working to change them.",
            traits: ["pragmatism","strategy"],
            affinity: {rick:2, eugene:3, dawn:2}
        },
        {
            text: "Challenge the leadership immediately.",
            traits: ["courage","independence"],
            affinity: {michonne:3, shane:3}
        },
        {
            text: "Work within the system to protect the people being mistreated.",
            traits: ["morality","strategy"],
            affinity: {carol:3, maggie:3}
        },
        {
            text: "Keep your head down. Surviving comes first.",
            traits: ["survival","emotionalControl"],
            affinity: {daryl:3, gregory:4}
        },
        {
            text: "Take control of the system yourself.",
            traits: ["leadership","ruthlessness"],
            affinity: {dawn:4, governor:3}
        }
    ]
},

{
    question:
        "A powerful enemy asks you to hand over another member of your settlement in exchange for safety.",

    answers: [
        {
            text: "Refuse. You don't sacrifice your people to save yourself.",
            traits: ["loyalty","morality"],
            affinity: {maggie:4, rick:3}
        },
        {
            text: "Pretend to cooperate while searching for another solution.",
            traits: ["manipulation","strategy"],
            affinity: {carol:4, eugene:3}
        },
        {
            text: "If one person must be sacrificed to save dozens, consider it.",
            traits: ["pragmatism","survival"],
            affinity: {gregory:4, governor:3, gareth:2}
        },
        {
            text: "Try to negotiate a different price.",
            traits: ["charisma","strategy"],
            affinity: {negan:3, ezekiel:3}
        },
        {
            text: "Attack before they can force the decision on you.",
            traits: ["courage","riskTaking"],
            affinity: {abraham:4, shane:3}
        }
    ]
},


/* ============================================================
   GENERAL APOCALYPSE / ZOMBIE
============================================================ */

{
    question:
        "You find a supermarket with enough food to support your group for weeks, but a large herd of walkers is moving nearby.",

    answers: [
        {
            text: "Take only what you can carry and leave immediately.",
            traits: ["survival","pragmatism"],
            affinity: {daryl:3, carol:2, eugene:2}
        },
        {
            text: "Risk staying longer because the supplies are too valuable.",
            traits: ["riskTaking","pragmatism"],
            affinity: {shane:3, abraham:3}
        },
        {
            text: "Secure the building and create a defensive position.",
            traits: ["strategy","leadership"],
            affinity: {rick:4, dawn:2}
        },
        {
            text: "Make sure everyone gets enough before taking anything for yourself.",
            traits: ["compassion","loyalty"],
            affinity: {glenn:4, bob:3}
        },
        {
            text: "Use the herd as a distraction to gain access to other supplies.",
            traits: ["strategy","riskTaking"],
            affinity: {eugene:4, carol:3}
        }
    ]
},

{
    question:
        "You discover a survivor with a serious injury who cannot travel quickly.",

    answers: [
        {
            text: "Slow the group down and carry them if necessary.",
            traits: ["compassion","loyalty"],
            affinity: {glenn:4, bob:3}
        },
        {
            text: "Leave supplies and create a safe place for them before moving on.",
            traits: ["pragmatism","compassion"],
            affinity: {hershel:3, maggie:3}
        },
        {
            text: "If they cannot keep up, the group must continue.",
            traits: ["survival","pragmatism"],
            affinity: {daryl:3, shane:3, gregory:2}
        },
        {
            text: "Organize the group so different people take turns helping them.",
            traits: ["leadership","loyalty"],
            affinity: {rick:4, maggie:3}
        },
        {
            text: "Ask the injured survivor what they want rather than deciding for them.",
            traits: ["morality","independence"],
            affinity: {michonne:3, morgan:3}
        }
    ]
},

{
    question:
        "You have enough ammunition for only one serious fight.",

    answers: [
        {
            text: "Avoid every unnecessary confrontation.",
            traits: ["strategy","emotionalControl"],
            affinity: {daryl:3, eugene:3}
        },
        {
            text: "Save it for the biggest threat.",
            traits: ["pragmatism","strategy"],
            affinity: {rick:3, michonne:3}
        },
        {
            text: "Use it now to eliminate a dangerous enemy.",
            traits: ["ruthlessness","courage"],
            affinity: {shane:3, governor:3, gareth:3}
        },
        {
            text: "Use it only if innocent people are directly threatened.",
            traits: ["morality","loyalty"],
            affinity: {maggie:3, hershel:3}
        },
        {
            text: "Create a trap that lets you win without wasting ammunition.",
            traits: ["strategy","manipulation"],
            affinity: {carol:4, eugene:3}
        }
    ]
},

{
    question:
        "Your group reaches a river. The bridge is damaged, but crossing it would save several days of travel.",

    answers: [
        {
            text: "Find another route. A dangerous shortcut isn't worth the risk.",
            traits: ["survival","emotionalControl"],
            affinity: {daryl:3, hershel:2, eugene:2}
        },
        {
            text: "Inspect the bridge carefully and cross if the risk is manageable.",
            traits: ["strategy","courage"],
            affinity: {michonne:4, rick:2}
        },
        {
            text: "Cross immediately. Every day matters.",
            traits: ["riskTaking","courage"],
            affinity: {abraham:4, shane:3}
        },
        {
            text: "Have the strongest people secure the crossing for everyone.",
            traits: ["leadership","loyalty"],
            affinity: {rick:3, maggie:3}
        },
        {
            text: "Find a way to turn the dangerous crossing into an advantage.",
            traits: ["strategy","pragmatism"],
            affinity: {carol:3, eugene:4}
        }
    ]
},

{
    question:
        "A stranger offers your group a large amount of food but refuses to explain where it came from.",

    answers: [
        {
            text: "Accept it, but investigate quietly.",
            traits: ["pragmatism","strategy"],
            affinity: {carol:4, eugene:2}
        },
        {
            text: "Refuse. If you don't know the source, you don't know the danger.",
            traits: ["survival","independence"],
            affinity: {daryl:4, michonne:2}
        },
        {
            text: "Ask questions and give them a chance to explain.",
            traits: ["trust","compassion"],
            affinity: {glenn:4, hershel:2}
        },
        {
            text: "Take the food. Survival sometimes requires uncomfortable choices.",
            traits: ["pragmatism","survival"],
            affinity: {gregory:4, governor:2, gareth:2}
        },
        {
            text: "Use the offer to negotiate for even more information.",
            traits: ["charisma","manipulation"],
            affinity: {negan:4, ezekiel:2}
        }
    ]
},

{
    question:
        "Your settlement has enough food for two months, but winter could last four.",

    answers: [
        {
            text: "Immediately impose strict rationing.",
            traits: ["pragmatism","leadership"],
            affinity: {rick:3, dawn:3}
        },
        {
            text: "Search for new food sources before restricting everyone.",
            traits: ["strategy","riskTaking"],
            affinity: {daryl:3, abraham:3}
        },
        {
            text: "Make sure the vulnerable receive enough even if others get less.",
            traits: ["compassion","morality"],
            affinity: {hershel:4, bob:3}
        },
        {
            text: "Use diplomacy to establish a trade relationship with another settlement.",
            traits: ["charisma","strategy"],
            affinity: {maggie:4, ezekiel:3}
        },
        {
            text: "Keep the shortage secret until you know how serious it will become.",
            traits: ["manipulation","survival"],
            affinity: {carol:4, gregory:3}
        }
    ]
},

{
    question:
        "You discover a small group living peacefully in a remote cabin. They have no idea how bad the outside world has become.",

    answers: [
        {
            text: "Warn them and offer to help them prepare.",
            traits: ["compassion","leadership"],
            affinity: {rick:3, maggie:3}
        },
        {
            text: "Leave them alone. Their survival isn't your responsibility.",
            traits: ["independence","emotionalControl"],
            affinity: {daryl:4, michonne:2}
        },
        {
            text: "Invite them to join your community.",
            traits: ["hope","trust"],
            affinity: {ezekiel:4, glenn:3}
        },
        {
            text: "Assess whether their supplies could help your group.",
            traits: ["pragmatism","survival"],
            affinity: {eugene:3, gregory:3, gareth:2}
        },
        {
            text: "Approach carefully and determine whether they could become a threat.",
            traits: ["strategy","survival"],
            affinity: {carol:4, rick:2}
        }
    ]
},

{
    question:
        "Someone in your group steals medicine intended for another survivor.",

    answers: [
        {
            text: "Demand that they return it immediately.",
            traits: ["morality","leadership"],
            affinity: {rick:3, maggie:3}
        },
        {
            text: "Find out why they stole it before deciding what to do.",
            traits: ["compassion","strategy"],
            affinity: {morgan:4, hershel:3}
        },
        {
            text: "Punish them severely so nobody tries it again.",
            traits: ["ruthlessness","leadership"],
            affinity: {negan:4, governor:3}
        },
        {
            text: "Quietly replace the medicine and monitor the person afterward.",
            traits: ["strategy","emotionalControl"],
            affinity: {carol:4, michonne:2}
        },
        {
            text: "If the medicine was genuinely needed, let the person keep it.",
            traits: ["compassion","morality"],
            affinity: {bob:4, gabriel:3}
        }
    ]
},

{
    question:
        "A massive walker herd is approaching your settlement and there is no time to evacuate everyone.",

    answers: [
        {
            text: "Take command and organize everyone into specific roles.",
            traits: ["leadership","strategy"],
            affinity: {rick:5, maggie:2}
        },
        {
            text: "Find the most dangerous point and deal with it personally.",
            traits: ["courage","riskTaking"],
            affinity: {abraham:4, shane:3}
        },
        {
            text: "Find a hidden escape route for the people who cannot fight.",
            traits: ["strategy","compassion"],
            affinity: {carol:4, daryl:3}
        },
        {
            text: "Stay with the people who are frightened and keep them calm.",
            traits: ["hope","compassion"],
            affinity: {ezekiel:4, bob:3}
        },
        {
            text: "Use the herd's movement to create a trap.",
            traits: ["strategy","manipulation"],
            affinity: {eugene:3, michonne:3, carol:2}
        }
    ]
},

{
    question:
        "You find an abandoned military vehicle with weapons, fuel and medical supplies.",

    answers: [
        {
            text: "Take everything useful and leave before someone else arrives.",
            traits: ["survival","pragmatism"],
            affinity: {daryl:3, eugene:3}
        },
        {
            text: "Secure the area first. The supplies may be bait.",
            traits: ["strategy","emotionalControl"],
            affinity: {michonne:4, carol:2}
        },
        {
            text: "Take the supplies but leave something useful for another survivor.",
            traits: ["compassion","morality"],
            affinity: {glenn:4, bob:3}
        },
        {
            text: "Use the weapons to strengthen your settlement's position.",
            traits: ["leadership","strategy"],
            affinity: {rick:3, maggie:3}
        },
        {
            text: "Take the weapons first. Whoever controls them has leverage.",
            traits: ["ruthlessness","pragmatism"],
            affinity: {negan:4, governor:3, gareth:2}
        }
    ]
},

{
    question:
        "A member of your group wants to leave because they believe your settlement has become too dangerous.",

    answers: [
        {
            text: "Try to convince them to stay, but respect their decision.",
            traits: ["loyalty","trust"],
            affinity: {maggie:3, glenn:3}
        },
        {
            text: "Ask them to explain exactly what they think is wrong.",
            traits: ["strategy","compassion"],
            affinity: {rick:3, hershel:3}
        },
        {
            text: "Let them go. Everyone has to make their own survival choices.",
            traits: ["independence","emotionalControl"],
            affinity: {daryl:4, michonne:2}
        },
        {
            text: "Stop them if their departure could expose the settlement.",
            traits: ["pragmatism","survival"],
            affinity: {dawn:3, governor:3}
        },
        {
            text: "Offer them a deal that gives them a reason to stay.",
            traits: ["charisma","manipulation"],
            affinity: {negan:3, ezekiel:3, gregory:2}
        }
    ]
},

{
    question:
        "You have one night to decide whether to attack an enemy camp before they discover your location.",

    answers: [
        {
            text: "Attack before they can become a bigger threat.",
            traits: ["courage","riskTaking"],
            affinity: {shane:4, abraham:3}
        },
        {
            text: "Gather more information. Attacking blind is too dangerous.",
            traits: ["strategy","emotionalControl"],
            affinity: {daryl:3, michonne:3, eugene:2}
        },
        {
            text: "Find a way to disable the camp without killing anyone.",
            traits: ["morality","compassion"],
            affinity: {morgan:4, hershel:3}
        },
        {
            text: "Create a plan that forces them to leave without realizing you caused it.",
            traits: ["manipulation","strategy"],
            affinity: {carol:5, governor:2, gareth:2}
        },
        {
            text: "Bring everyone together and make the decision as a group.",
            traits: ["leadership","loyalty"],
            affinity: {rick:4, maggie:3, ezekiel:2}
        }
    ]
}


/* ============================================================
   END QUESTIONS
============================================================ */

];


/* ============================================================
   8. VALIDATION
============================================================ */

function validateQuiz() {

    const errors = [];

    if (questions.length !== 30) {

        errors.push(
            `Expected 30 questions, found ${questions.length}.`
        );

    }


    const characterIds =
        Object.keys(CHARACTERS);


    if (characterIds.length !== 19) {

        errors.push(
            `Expected 19 characters, found ${characterIds.length}.`
        );

    }


    /* --------------------------------------------------------
       Validate trait order
    -------------------------------------------------------- */

    if (
        CHARACTER_SCORE_KEYS.length !==
        TRAIT_KEYS.length
    ) {

        errors.push(
            "CHARACTER_SCORE_KEYS and TRAIT_KEYS length mismatch."
        );

    }


    CHARACTER_SCORE_KEYS.forEach(trait => {

        if (!TRAIT_KEYS.includes(trait)) {

            errors.push(
                `Character score order contains unknown trait "${trait}".`
            );

        }

    });


    /* --------------------------------------------------------
       Validate questions
    -------------------------------------------------------- */

    questions.forEach((q, qi) => {

        if (
            !q.question ||
            typeof q.question !== "string"
        ) {

            errors.push(
                `Question ${qi + 1}: missing question text.`
            );

        }


        if (
            !Array.isArray(q.answers) ||
            q.answers.length !== 5
        ) {

            errors.push(
                `Question ${qi + 1}: expected exactly 5 answers.`
            );

            return;

        }


        q.answers.forEach((answer, ai) => {

            if (!answer.text) {

                errors.push(
                    `Question ${qi + 1}, answer ${ai + 1}: missing text.`
                );

            }


            if (
                !Array.isArray(answer.traits) ||
                answer.traits.length < 2
            ) {

                errors.push(
                    `Question ${qi + 1}, answer ${ai + 1}: invalid traits.`
                );

            }


            (answer.traits || []).forEach(trait => {

                if (!TRAIT_KEYS.includes(trait)) {

                    errors.push(
                        `Question ${qi + 1}, answer ${ai + 1}: ` +
                        `unknown trait "${trait}".`
                    );

                }

            });


            if (
                !answer.affinity ||
                typeof answer.affinity !== "object"
            ) {

                errors.push(
                    `Question ${qi + 1}, answer ${ai + 1}: ` +
                    `missing affinity.`
                );

            }
            else {

                Object.entries(answer.affinity).forEach(
                    ([id, value]) => {

                        if (!CHARACTERS[id]) {

                            errors.push(
                                `Question ${qi + 1}, answer ${ai + 1}: ` +
                                `unknown character "${id}".`
                            );

                        }


                        if (
                            typeof value !== "number" ||
                            !Number.isFinite(value) ||
                            value <= 0
                        ) {

                            errors.push(
                                `Question ${qi + 1}, answer ${ai + 1}: ` +
                                `invalid affinity value for "${id}".`
                            );

                        }

                    }
                );

            }

        });

    });


    /* --------------------------------------------------------
       Character validation
    -------------------------------------------------------- */

    characterIds.forEach(id => {

        const character =
            CHARACTERS[id];


        if (
            !Array.isArray(character.scores) ||
            character.scores.length !==
                CHARACTER_SCORE_KEYS.length
        ) {

            errors.push(
                `${id}: expected ${CHARACTER_SCORE_KEYS.length} ` +
                `character trait scores.`
            );

        }


        if (!CHARACTER_SIGNATURES[id]) {

            errors.push(
                `${id}: missing signature.`
            );

        }


        if (
            CHARACTER_ACCESSIBILITY[id] ===
            undefined
        ) {

            errors.push(
                `${id}: missing accessibility.`
            );

        }

    });


    /* --------------------------------------------------------
       Count affinity routes
    -------------------------------------------------------- */

    const affinityCounts = {};

    characterIds.forEach(id => {

        affinityCounts[id] = 0;

    });


    questions.forEach(q => {

        q.answers.forEach(answer => {

            Object.keys(
                answer.affinity || {}
            ).forEach(id => {

                if (
                    affinityCounts[id] !==
                    undefined
                ) {

                    affinityCounts[id]++;

                }

            });

        });

    });


    const MIN_AFFINITY_ROUTES = 5;


    characterIds.forEach(id => {

        if (
            affinityCounts[id] <
            MIN_AFFINITY_ROUTES
        ) {

            errors.push(
                `${id}: only ${affinityCounts[id]} ` +
                `affinity routes. Minimum required: ` +
                `${MIN_AFFINITY_ROUTES}.`
            );

        }

    });


    /* --------------------------------------------------------
       Validation failed
    -------------------------------------------------------- */

    if (errors.length) {

        console.error(
            "TWD QUIZ VALIDATION FAILED",
            errors
        );

        console.table(
            characterIds.map(id => ({
                Character:
                    CHARACTERS[id].name,

                ID:
                    id,

                "Affinity Routes":
                    affinityCounts[id],

                Required:
                    MIN_AFFINITY_ROUTES,

                Status:
                    affinityCounts[id] >=
                    MIN_AFFINITY_ROUTES
                        ? "PASS"
                        : "FAIL"
            }))
        );

        return false;

    }


    /* --------------------------------------------------------
       Validation passed
    -------------------------------------------------------- */

    console.log(
        "%cTHE WALKING DEAD QUIZ VALIDATION PASSED",
        "font-weight:bold;"
    );

    console.log(
        `Questions: ${questions.length}`
    );

    console.log(
        `Characters: ${characterIds.length}`
    );

    console.log(
        `Character score traits: ${CHARACTER_SCORE_KEYS.length}`
    );

    console.log(
        `Minimum affinity routes: ${MIN_AFFINITY_ROUTES}`
    );


    console.table(
        characterIds.map(id => ({
            Character:
                CHARACTERS[id].name,

            ID:
                id,

            "Affinity Routes":
                affinityCounts[id]
        }))
    );


    console.log(
        "All 19 characters have sufficient affinity routes."
    );


    return true;
}


/* ============================================================
   9. ANSWER PROFILE
============================================================ */

function calculatePersonality(answerIndexes) {

    const rawScores = {};

    TRAIT_KEYS.forEach(trait => {

        rawScores[trait] = 0;

    });


    const characterAffinity = {};

    Object.keys(CHARACTERS).forEach(id => {

        characterAffinity[id] = 0;

    });


    let answeredQuestions = 0;


    answerIndexes.forEach(
        (answerIndex, questionIndex) => {

            const question =
                questions[questionIndex];

            if (!question) return;


            const answer =
                question.answers[answerIndex];

            if (!answer) return;


            answeredQuestions++;


            (answer.traits || []).forEach(
                trait => {

                    if (
                        rawScores[trait] !==
                        undefined
                    ) {

                        rawScores[trait]++;

                    }

                }
            );


            Object.entries(
                answer.affinity || {}
            ).forEach(
                ([characterId, value]) => {

                    if (
                        characterAffinity[
                            characterId
                        ] !== undefined
                    ) {

                        characterAffinity[
                            characterId
                        ] +=
                            Number(value) || 0;

                    }

                }
            );

        }
    );


    /* --------------------------------------------------------
       Trait opportunity counts
    -------------------------------------------------------- */

    const minScores = {};
    const maxScores = {};


    TRAIT_KEYS.forEach(trait => {

        let min = 0;
        let max = 0;


        questions.forEach(question => {

            let present = false;


            question.answers.forEach(answer => {

                if (
                    (answer.traits || [])
                        .includes(trait)
                ) {

                    present = true;

                }

            });


            if (present) {

                max++;

            }

        });


        minScores[trait] = min;
        maxScores[trait] = max;

    });


    /* --------------------------------------------------------
       Normalize personality profile
    -------------------------------------------------------- */

    const profile = {};


    TRAIT_KEYS.forEach(trait => {

        const raw =
            rawScores[trait];

        const max =
            maxScores[trait];


        let normalized = 50;


        if (max > 0) {

            normalized =
                (raw / max) * 100;

        }


        profile[trait] =
            Math.round(
                Math.max(
                    0,
                    Math.min(
                        100,
                        normalized
                    )
                )
            );

    });


    return {

        profile,

        rawScores,

        minScores,

        maxScores,

        characterAffinity,

        answeredQuestions,

        completionPercent:
            Math.round(
                (
                    answeredQuestions /
                    questions.length
                ) * 100
            )

    };

}


/* ============================================================
   10. TRAIT SIMILARITY
============================================================ */

function getTraitSimilarity(
    userValue,
    characterValue
) {

    const difference =
        Math.abs(
            Number(userValue) -
            Number(characterValue)
        );


    return Math.max(
        0,
        100 - difference
    );

}


/* ============================================================
   11. GET CHARACTER TRAIT VALUE
============================================================

   This function fixes the previous array-order problem.

   NEVER directly use:

       character.scores[TRAIT_KEYS.indexOf(trait)]

   because the character score order is different.

============================================================ */

function getCharacterTraitValue(
    character,
    trait
) {

    const index =
        CHARACTER_SCORE_KEYS.indexOf(
            trait
        );


    if (
        index === -1 ||
        !character ||
        !Array.isArray(character.scores)
    ) {

        return 50;

    }


    return Number(
        character.scores[index] ?? 50
    );

}


/* ============================================================
   12. CORE SIGNATURE MATCH
============================================================ */

function calculateCoreSignatureScore(
    userProfile,
    character,
    signature
) {

    const primary =
        signature?.primary || [];


    if (!primary.length) {

        return 50;

    }


    let total = 0;
    let weightTotal = 0;


    primary.forEach(
        (trait, index) => {

            const userValue =
                Number(
                    userProfile[trait] ??
                    50
                );


            const characterValue =
                getCharacterTraitValue(
                    character,
                    trait
                );


            const similarity =
                getTraitSimilarity(
                    userValue,
                    characterValue
                );


            const weight =
                1.35 -
                (index * 0.08);


            total +=
                similarity * weight;

            weightTotal +=
                weight;

        }
    );


    return weightTotal
        ? total / weightTotal
        : 50;

}


/* ============================================================
   13. SECONDARY MATCH
============================================================ */

function calculateSecondaryScore(
    userProfile,
    character,
    signature
) {

    const secondary =
        signature?.secondary || [];


    if (!secondary.length) {

        return 50;

    }


    let total = 0;
    let weightTotal = 0;


    secondary.forEach(trait => {

        const similarity =
            getTraitSimilarity(
                Number(
                    userProfile[trait] ??
                    50
                ),
                getCharacterTraitValue(
                    character,
                    trait
                )
            );


        total += similarity;
        weightTotal++;

    });


    return weightTotal
        ? total / weightTotal
        : 50;

}


/* ============================================================
   14. OVERALL TRAIT MATCH
============================================================ */

function calculateOverallTraitScore(
    userProfile,
    character
) {

    let total = 0;
    let weightTotal = 0;


    TRAIT_KEYS.forEach(trait => {

        const weight =
            TRAIT_WEIGHTS[trait] ||
            1;


        const similarity =
            getTraitSimilarity(
                Number(
                    userProfile[trait] ??
                    50
                ),
                getCharacterTraitValue(
                    character,
                    trait
                )
            );


        total +=
            similarity * weight;

        weightTotal +=
            weight;

    });


    return weightTotal
        ? total / weightTotal
        : 50;

}


/* ============================================================
   15. SIGNATURE ACTIVATION
============================================================

   Maximum = 8

   This is intentionally small.

============================================================ */

function calculateSignatureActivation(
    userProfile,
    character,
    signature
) {

    const primary =
        signature?.primary || [];


    let veryClose = 0;
    let close = 0;


    primary.forEach(trait => {

        const difference =
            Math.abs(
                Number(
                    userProfile[trait] ??
                    50
                ) -
                getCharacterTraitValue(
                    character,
                    trait
                )
            );


        if (difference <= 8) {

            veryClose++;

        }
        else if (difference <= 15) {

            close++;

        }

    });


    let bonus = 0;


    if (veryClose >= 2) {

        bonus += 2;

    }


    if (veryClose >= 3) {

        bonus += 2;

    }


    if (veryClose >= 4) {

        bonus += 2;

    }


    if (
        close +
        veryClose >= 3
    ) {

        bonus += 1;

    }


    if (
        close +
        veryClose >= 4
    ) {

        bonus += 1;

    }


    return Math.min(
        8,
        bonus
    );

}


/* ============================================================
   16. CHARACTER AFFINITY MAXIMUMS
============================================================

   THIS IS THE MAIN BALANCING CHANGE.

   For each character, calculate the maximum affinity that
   could theoretically be obtained from the existing question
   bank.

   Each question contributes only its highest available
   affinity value for that character.

   Example:

   If a character has:

       Q1: max 4
       Q2: max 0
       Q3: max 3
       Q4: max 5

   their theoretical maximum is:

       4 + 0 + 3 + 5 = 12

   A character with fewer affinity routes is therefore judged
   against a smaller maximum instead of automatically losing
   to characters with many routes.

============================================================ */

const CHARACTER_AFFINITY_MAX = {};


Object.keys(
    CHARACTERS
).forEach(characterId => {

    let maximum = 0;


    questions.forEach(question => {

        let questionMaximum = 0;


        question.answers.forEach(answer => {

            const value =
                Number(
                    answer.affinity?.[
                        characterId
                    ] || 0
                );


            if (
                value >
                questionMaximum
            ) {

                questionMaximum =
                    value;

            }

        });


        maximum +=
            questionMaximum;

    });


    CHARACTER_AFFINITY_MAX[
        characterId
    ] = maximum;

});


/* ============================================================
   17. HYBRID AFFINITY SCORE — v6
============================================================

   Affinity now considers BOTH:

   1. Route coverage
      How much of this character's available route the player
      followed.

   2. Route volume
      How substantial the character's overall affinity network is.

   This prevents a character with only a handful of routes from
   becoming disproportionately easy to obtain simply because
   the player selected most of those routes.

   Rare characters remain possible, but broad-route characters
   receive a natural advantage.

============================================================ */

const AFFINITY_COVERAGE_EXPONENT = 1.15;
const AFFINITY_VOLUME_REFERENCE = 700;
const AFFINITY_VOLUME_WEIGHT = 0.30;
const AFFINITY_COVERAGE_WEIGHT = 0.70;


function calculateAffinityScore(
    characterId,
    rawAffinity
) {

    const maximum =
        Number(
            CHARACTER_AFFINITY_MAX[
                characterId
            ] || 0
        );


    if (maximum <= 0) {

        return 0;

    }


    const raw =
        Math.max(
            0,
            Number(rawAffinity) || 0
        );


    /* --------------------------------------------------------
       Route coverage
    -------------------------------------------------------- */

    const coverage =
        Math.max(
            0,
            Math.min(
                1,
                raw / maximum
            )
        );


    /*
       Exponent > 1 deliberately makes partial route coverage
       less powerful.

       Example:

       50% coverage does NOT become 50 points.

       It becomes approximately 43.5 points.
    */

    const coverageScore =
        Math.pow(
            coverage,
            AFFINITY_COVERAGE_EXPONENT
        ) * 100;


    /* --------------------------------------------------------
       Route volume
    -------------------------------------------------------- */

    /*
       Soft saturation.

       This rewards characters with substantial affinity
       networks without allowing raw affinity to dominate.

       ~124 max  -> relatively small
       ~300 max  -> moderate
       ~600 max  -> strong
       ~900 max  -> near maximum
    */

    const volumeScore =
        (
            maximum /
            (
                maximum +
                AFFINITY_VOLUME_REFERENCE
            )
        ) * 100;


    /* --------------------------------------------------------
       Hybrid
    -------------------------------------------------------- */

    return (
        (coverageScore *
            AFFINITY_COVERAGE_WEIGHT) +

        (volumeScore *
            AFFINITY_VOLUME_WEIGHT)
    );

}

/* ============================================================
   18. ROUTE IDENTITY BONUS — v6
============================================================

   Rewards strong character-specific answer patterns.

   The thresholds are deliberately more demanding than v5,
   because affinity itself already measures route coverage.

   Maximum = 5

============================================================ */

function calculateRouteIdentityBonus(
    characterId,
    rawAffinity
) {

    const maximum =
        Number(
            CHARACTER_AFFINITY_MAX[
                characterId
            ] || 0
        );


    if (maximum <= 0) {

        return 0;

    }


    const ratio =
        Math.max(
            0,
            Math.min(
                1,
                (
                    Number(rawAffinity) || 0
                ) / maximum
            )
        );


    if (ratio >= 0.72) {

        return 5.0;

    }


    if (ratio >= 0.58) {

        return 4.0;

    }


    if (ratio >= 0.44) {

        return 2.5;

    }


    if (ratio >= 0.30) {

        return 1.25;

    }


    if (ratio >= 0.18) {

        return 0.35;

    }


    return 0;

}

/* ============================================================
   19. FINAL CHARACTER MATCH
============================================================

   FINAL WEIGHTS

       Core signature       28%
       Normalized affinity  42%
       Overall traits       14%
       Secondary traits     10%
       Baseline              6%

       Signature activation +0 to +8
       Route identity       +0 to +6
       Accessibility        +0 to +2.5

   Total base weighting = 100%.

============================================================ */

function calculateCharacterMatch(
    userProfile,
    character,
    characterId,
    characterAffinity
) {

    const signature =
        CHARACTER_SIGNATURES[
            characterId
        ];


    const coreScore =
        calculateCoreSignatureScore(
            userProfile,
            character,
            signature
        );


    const affinityScore =
        calculateAffinityScore(
            characterId,
            characterAffinity?.[
                characterId
            ] || 0
        );


    const overallScore =
        calculateOverallTraitScore(
            userProfile,
            character
        );


    const secondaryScore =
        calculateSecondaryScore(
            userProfile,
            character,
            signature
        );


    const activation =
        calculateSignatureActivation(
            userProfile,
            character,
            signature
        );


    const routeIdentity =
        calculateRouteIdentityBonus(
            characterId,
            characterAffinity?.[
                characterId
            ] || 0
        );


    const accessibility =
        calculateAccessibilityBonus(
            characterId
        );


    let score =
    (coreScore * 0.30) +
    (affinityScore * 0.40) +
    (overallScore * 0.14) +
    (secondaryScore * 0.10) +
    (50 * 0.06);


    score +=
        activation;


    score +=
        routeIdentity;


    score +=
        accessibility;


    return Math.min(
        100,
        Math.max(
            0,
            score
        )
    );

}


/* ============================================================
   20. FINAL PERSONALITY
============================================================ */

function calculateFinalPersonality(
    answerIndexes
) {

    const personality =
        calculatePersonality(
            answerIndexes
        );


    const userProfile =
        personality.profile;


    const characterAffinity =
        personality.characterAffinity;


    const results =
        Object.entries(
            CHARACTERS
        )
        .map(
            ([id, character]) => {

                const rawAffinity =
                    Number(
                        characterAffinity[id] ||
                        0
                    );


                const affinityMaximum =
                    Number(
                        CHARACTER_AFFINITY_MAX[
                            id
                        ] || 0
                    );


                const affinityRatio =
                    affinityMaximum > 0
                        ? rawAffinity /
                          affinityMaximum
                        : 0;


                const score =
                    calculateCharacterMatch(
                        userProfile,
                        character,
                        id,
                        characterAffinity
                    );


                return {

                    id,

                    name:
                        character.name,

                    image:
                        character.image,

                    score,

                    affinity:
                        rawAffinity,

                    affinityMaximum,

                    affinityRatio,

                    coreSignature:
                        calculateCoreSignatureScore(
                            userProfile,
                            character,
                            CHARACTER_SIGNATURES[id]
                        ),

                    overall:
                        calculateOverallTraitScore(
                            userProfile,
                            character
                        ),

                    secondary:
                        calculateSecondaryScore(
                            userProfile,
                            character,
                            CHARACTER_SIGNATURES[id]
                        ),

                    activation:
                        calculateSignatureActivation(
                            userProfile,
                            character,
                            CHARACTER_SIGNATURES[id]
                        ),

                    routeIdentity:
                        calculateRouteIdentityBonus(
                            id,
                            rawAffinity
                        ),

                    accessibilityBonus:
                        calculateAccessibilityBonus(
                            id
                        )

                };

            }
        );


    /* --------------------------------------------------------
       Deterministic sorting
    -------------------------------------------------------- */

    results.sort(
        (a, b) => {

            if (
                b.score !==
                a.score
            ) {

                return (
                    b.score -
                    a.score
                );

            }


            if (
                b.affinity !==
                a.affinity
            ) {

                return (
                    b.affinity -
                    a.affinity
                );

            }


            if (
                b.affinityRatio !==
                a.affinityRatio
            ) {

                return (
                    b.affinityRatio -
                    a.affinityRatio
                );

            }


            return a.id.localeCompare(
                b.id
            );

        }
    );


    const winner =
        results[0] ||
        null;


    const second =
        results[1] ||
        null;


    const third =
        results[2] ||
        null;


    /* --------------------------------------------------------
       Strongest traits
    -------------------------------------------------------- */

    const strongestTraits =
        TRAIT_KEYS
            .map(trait => ({

                id:
                    trait,

                name:
                    TWD_TRAITS[trait],

                score:
                    userProfile[trait]

            }))
            .sort(
                (a, b) =>
                    b.score -
                    a.score
            );


    return {

        winner,

        second,

        third,

        results,

        profile:
            userProfile,

        rawScores:
            personality.rawScores,

        minScores:
            personality.minScores,

        maxScores:
            personality.maxScores,

        characterAffinity,

        strongestTraits,

        answeredQuestions:
            personality.answeredQuestions,

        completionPercent:
            personality.completionPercent

    };

}


/* ============================================================
   21. DETERMINISTIC SEEDED RANDOM
============================================================

   Used ONLY by the simulator.

   The actual quiz result NEVER uses randomness.

============================================================ */

function createSeededRandom(seed) {

    let value =
        Number(seed) >>> 0;


    return function () {

        value +=
            0x6D2B79F5;


        let t =
            value;


        t =
            Math.imul(
                t ^ (t >>> 15),
                t | 1
            );


        t ^=
            t +
            Math.imul(
                t ^ (t >>> 7),
                t | 61
            );


        return (
            (t ^ (t >>> 14)) >>> 0
        ) / 4294967296;

    };

}


/* ============================================================
   22. SIMULATION
============================================================ */

function simulateTWDResults(
    simulations = 100000,
    seed = 20261003
) {

    const random =
        createSeededRandom(
            seed
        );


    const counts = {};
    const secondCounts = {};
    const thirdCounts = {};
    const scoreTotals = {};


    Object.keys(
        CHARACTERS
    ).forEach(id => {

        counts[id] = 0;
        secondCounts[id] = 0;
        thirdCounts[id] = 0;
        scoreTotals[id] = 0;

    });


    for (
        let simulation = 0;
        simulation < simulations;
        simulation++
    ) {

        const answers = [];


        for (
            let q = 0;
            q < questions.length;
            q++
        ) {

            answers.push(
                Math.floor(
                    random() * 5
                )
            );

        }


        const result =
            calculateFinalPersonality(
                answers
            );


        if (result.winner) {

            counts[
                result.winner.id
            ]++;


            scoreTotals[
                result.winner.id
            ] +=
                result.winner.score;

        }


        if (result.second) {

            secondCounts[
                result.second.id
            ]++;

        }


        if (result.third) {

            thirdCounts[
                result.third.id
            ]++;

        }

    }


    const rows =
        Object.keys(
            CHARACTERS
        )
        .map(id => {

            const character =
                CHARACTERS[id];


            return {

                Character:
                    character.name,

                ID:
                    id,

                "#1":
                    counts[id],

                "% #1":
                    (
                        counts[id] /
                        simulations *
                        100
                    ).toFixed(2) + "%",

                "#2":
                    secondCounts[id],

                "#3":
                    thirdCounts[id],

                "Average winning score":
                    counts[id]
                        ? (
                            scoreTotals[id] /
                            counts[id]
                        ).toFixed(2)
                        : "—",

                "Affinity Max":
                    CHARACTER_AFFINITY_MAX[id]

            };

        })
        .sort(
            (a, b) =>
                b["#1"] -
                a["#1"]
        );


    console.log(
        "\n=================================================="
    );

    console.log(
        "THE WALKING DEAD — RESULT DISTRIBUTION"
    );

    console.log(
        "=================================================="
    );

    console.log(
        `Simulations: ${simulations}`
    );

    console.log(
        `Seed: ${seed}`
    );


    console.log(
        `Characters appearing: ${
            rows.filter(
                r => r["#1"] > 0
            ).length
        } / 19`
    );


    console.log(
        "\nDistribution:"
    );


    console.table(
        rows
    );


    const zeroWins =
        rows.filter(
            row =>
                row["#1"] === 0
        );


    if (zeroWins.length) {

        console.warn(
            "CHARACTERS WITH ZERO WINS:"
        );


        console.table(
            zeroWins
        );

    }
    else {

        console.log(
            "%cALL 19 CHARACTERS CAN WIN.",
            "color:green;font-weight:bold;"
        );

    }


    /* --------------------------------------------------------
       Top-two concentration
    -------------------------------------------------------- */

    const topTwo =
        rows[0]["#1"] +
        rows[1]["#1"];


    const topTwoPercent =
        topTwo /
        simulations *
        100;


    console.log(
        `Top two characters combined: ${
            topTwoPercent.toFixed(2)
        }%`
    );


    if (
        topTwoPercent >
        55
    ) {

        console.warn(
            "WARNING: result distribution is heavily concentrated."
        );

    }
    else if (
        topTwoPercent >
        45
    ) {

        console.warn(
            "NOTICE: result distribution is moderately concentrated."
        );

    }
    else {

        console.log(
            "%cDistribution concentration looks healthy.",
            "color:green;font-weight:bold;"
        );

    }


    /* --------------------------------------------------------
       Lowest five
    -------------------------------------------------------- */

    const lowestFive =
        rows
            .slice()
            .sort(
                (a, b) =>
                    a["#1"] -
                    b["#1"]
            )
            .slice(
                0,
                5
            );


    console.log(
        "\nLowest five result frequencies:"
    );


    console.table(
        lowestFive
    );


    /* --------------------------------------------------------
       Affinity diagnostics
    -------------------------------------------------------- */

    console.log(
        "\nCharacter affinity maximums:"
    );


    console.table(

        Object.keys(
            CHARACTERS
        )
        .map(id => ({

            Character:
                CHARACTERS[id].name,

            ID:
                id,

            "Affinity Max":
                CHARACTER_AFFINITY_MAX[id],

            Accessibility:
                CHARACTER_ACCESSIBILITY[id]

        }))

    );


    window.TWD_SIMULATION_RESULTS = {

        seed,

        simulations,

        rows,

        zeroWins

    };


    return (
        window.TWD_SIMULATION_RESULTS
    );

}


/* ============================================================
   23. ANSWER PROFILE DIAGNOSTIC
============================================================ */

function inspectTWDResult(
    answerIndexes
) {

    const result =
        calculateFinalPersonality(
            answerIndexes
        );


    console.log(
        "\n=================================================="
    );

    console.log(
        "TWD RESULT DIAGNOSTIC"
    );

    console.log(
        "=================================================="
    );


    console.log(
        "Winner:",
        result.winner
    );


    console.log(
        "Second:",
        result.second
    );


    console.log(
        "Third:",
        result.third
    );


    console.log(
        "\nTop 10:"
    );


    console.table(
        result.results
            .slice(0, 10)
            .map(r => ({

                Character:
                    r.name,

                Score:
                    Number(
                        r.score
                    ).toFixed(2),

                Affinity:
                    r.affinity,

                "Affinity Max":
                    r.affinityMaximum,

                "Affinity %":
                    (
                        r.affinityRatio *
                        100
                    ).toFixed(1) + "%",

                Core:
                    Number(
                        r.coreSignature
                    ).toFixed(2),

                Overall:
                    Number(
                        r.overall
                    ).toFixed(2),

                Secondary:
                    Number(
                        r.secondary
                    ).toFixed(2),

                Activation:
                    r.activation,

                Route:
                    r.routeIdentity,

                Accessibility:
                    Number(
                        r.accessibilityBonus
                    ).toFixed(2)

            }))
    );


    return result;

}


/* ============================================================
   24. EASY BROWSER TEST
============================================================ */

function testTWDQuiz() {

    const answers =
        questions.map(
            () => 0
        );


    const result =
        calculateFinalPersonality(
            answers
        );


    console.log(
        "TWD TEST RESULT"
    );


    console.table([

        result.winner,

        result.second,

        result.third

    ]);


    return result;

}


/* ============================================================
   25. ALL ANSWER POSITION TEST
============================================================ */

function testAllAnswerPatterns() {

    const results = [];


    for (
        let answerIndex = 0;
        answerIndex < 5;
        answerIndex++
    ) {

        const answers =
            questions.map(
                () => answerIndex
            );


        const result =
            calculateFinalPersonality(
                answers
            );


        results.push({

            AnswerPosition:
                answerIndex + 1,

            Winner:
                result.winner
                    ? result.winner.name
                    : "None",

            Score:
                result.winner
                    ? result.winner.score.toFixed(2)
                    : "—",

            Second:
                result.second
                    ? result.second.name
                    : "None",

            Third:
                result.third
                    ? result.third.name
                    : "None"

        });

    }


    console.log(
        "\nTWD ALL-ANSWER-POSITION TEST"
    );


    console.table(
        results
    );


    return results;

}


/* ============================================================
   26. AFFINITY ROUTE DIAGNOSTIC
============================================================

   Shows:

   - number of affinity routes
   - theoretical maximum
   - accessibility

   This is useful for future balancing without touching the
   questions themselves.

============================================================ */

function inspectTWDCharacterBalance() {

    const rows =
        Object.keys(
            CHARACTERS
        )
        .map(id => {

            let routeCount = 0;


            questions.forEach(question => {

                question.answers.forEach(answer => {

                    if (
                        Number(
                            answer.affinity?.[
                                id
                            ] || 0
                        ) > 0
                    ) {

                        routeCount++;

                    }

                });

            });


            return {

                Character:
                    CHARACTERS[id].name,

                ID:
                    id,

                "Affinity Routes":
                    routeCount,

                "Affinity Max":
                    CHARACTER_AFFINITY_MAX[id],

                Accessibility:
                    CHARACTER_ACCESSIBILITY[id],

                "Accessibility Bonus":
                    calculateAccessibilityBonus(id)

            };

        });


    console.table(
        rows
    );


    return rows;

}


/* ============================================================
   27. EXPOSE GLOBALS
============================================================ */

window.TWD_TRAITS =
    TWD_TRAITS;


window.TWD_TRAIT_KEYS =
    TRAIT_KEYS;


window.TWD_CHARACTER_SCORE_KEYS =
    CHARACTER_SCORE_KEYS;


window.TWD_CHARACTERS =
    CHARACTERS;


window.TWD_CHARACTER_SIGNATURES =
    CHARACTER_SIGNATURES;


window.TWD_QUESTIONS =
    questions;


window.TWD_CHARACTER_AFFINITY_MAX =
    CHARACTER_AFFINITY_MAX;


window.calculatePersonality =
    calculatePersonality;


window.calculateCharacterMatch =
    calculateCharacterMatch;


window.calculateFinalPersonality =
    calculateFinalPersonality;


window.validateTWDQuiz =
    validateQuiz;


window.simulateTWDResults =
    simulateTWDResults;


window.testTWDQuiz =
    testTWDQuiz;


window.testAllAnswerPatterns =
    testAllAnswerPatterns;


window.inspectTWDResult =
    inspectTWDResult;


window.inspectTWDCharacterBalance =
    inspectTWDCharacterBalance;


window.calculateAccessibilityBonus =
    calculateAccessibilityBonus;


window.calculateAffinityScore =
    calculateAffinityScore;


window.calculateRouteIdentityBonus =
    calculateRouteIdentityBonus;


/* ============================================================
   28. RUN VALIDATION
============================================================ */

validateQuiz();


/* ============================================================
   29. STARTUP MESSAGE
============================================================ */

console.log(
    "%cTWD Personality Quiz v5 loaded.",
    "font-weight:bold;"
);

console.log(
    "Run simulateTWDResults(100000, 20261003) to test distribution."
);

console.log(
    "Run inspectTWDCharacterBalance() to inspect affinity routes."
);

console.log(
    "Run testAllAnswerPatterns() for deterministic answer tests."
);
