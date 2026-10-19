"use strict";

/* ============================================================
GAME OF THRONES MALE PERSONALITY QUIZ
PROVISIONAL CONFIGURATION + CHARACTER / ROUTE DATA

33 male character results
23 personality traits
10 hidden behavioral routes

Discipline, Resilience and Impulsiveness are newly added traits.
All new scores and character profiles are provisional.

Question bank, scoring engine and result rendering are not included.
============================================================ */


/* ============================================================
QUIZ CONFIGURATION
============================================================ */

const QUIZ_CONFIG = {
    id: "got-male",
    name: "Game of Thrones Male Characters",
    title: "Game of Thrones Male Characters Personality Quiz",
    traitProfileDescription: "your personality profile",
    shareTitle: "My Game of Thrones Male Character Result",
    challengeTitle: "Game of Thrones Male Characters Personality Quiz",
    resultDescription:
        "is your closest Game of Thrones male character personality match based on your personality profile."
};


/* ============================================================
TRAITS — 23 PERSONALITY DIMENSIONS
============================================================ */

const TRAIT_KEYS = [
    "honor",
    "courage",
    "loyalty",
    "compassion",
    "morality",
    "pragmatism",
    "ruthlessness",
    "ambition",
    "leadership",
    "independence",
    "intelligence",
    "strategy",
    "manipulation",
    "charisma",
    "pride",
    "determination",
    "riskTaking",
    "selfPreservation",
    "emotionalControl",
    "curiosity",
    "discipline",
    "resilience",
    "impulsiveness"
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
    pride: "Pride",
    determination: "Determination",
    riskTaking: "Risk Taking",
    selfPreservation: "Self-Preservation",
    emotionalControl: "Emotional Control",
    curiosity: "Curiosity",
    discipline: "Discipline",
    resilience: "Resilience",
    impulsiveness: "Impulsiveness"
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
    pride: 0.85,
    determination: 1.00,
    riskTaking: 0.90,
    selfPreservation: 0.90,
    emotionalControl: 0.90,
    curiosity: 0.80,
    discipline: 0.95,
    resilience: 0.95,
    impulsiveness: 0.90
};


/* ============================================================
CHARACTERS
33 MALE CHARACTER RESULTS

Each character starts with the original 20 trait scores.
The three additional traits are merged into every profile below.
All scores use a provisional 0–100 scale.
============================================================ */

const CHARACTERS = {

    jon: {
        name: "Jon Snow",
        image: "../images/jon.png",
        traits: {
            honor: 94, courage: 92, loyalty: 94, compassion: 82, morality: 58,
            pragmatism: 50, ruthlessness: 15, ambition: 30, leadership: 58,
            independence: 52, intelligence: 55, strategy: 52, manipulation: 10,
            charisma: 52, pride: 40, determination: 84, riskTaking: 60,
            selfPreservation: 52, emotionalControl: 75, curiosity: 50
        },
        description:
            "A duty-driven protector who repeatedly puts loyalty and the lives of others above personal power."
    },

    tyrion: {
        name: "Tyrion Lannister",
        image: "../images/tyrion.png",
        traits: {
            honor: 42, courage: 44, loyalty: 42, compassion: 70, morality: 45,
            pragmatism: 100, ruthlessness: 36, ambition: 42, leadership: 42,
            independence: 48, intelligence: 100, strategy: 98, manipulation: 60,
            charisma: 78, pride: 46, determination: 45, riskTaking: 48,
            selfPreservation: 76, emotionalControl: 82, curiosity: 55
        },
        description:
            "A clever survivor who relies on intelligence, wit and practical judgment rather than brute force."
    },

    jaime: {
        name: "Jaime Lannister",
        image: "../images/jaime.png",
        traits: {
            honor: 88, courage: 96, loyalty: 93, compassion: 76, morality: 48,
            pragmatism: 48, ruthlessness: 42, ambition: 32, leadership: 48,
            independence: 86, intelligence: 48, strategy: 45, manipulation: 20,
            charisma: 48, pride: 68, determination: 82, riskTaking: 79,
            selfPreservation: 48, emotionalControl: 48, curiosity: 35
        },
        description:
            "A formidable warrior whose identity is shaped by loyalty, courage and a complicated relationship with honor."
    },

    bran: {
        name: "Bran Stark",
        image: "../images/bran.png",
        traits: {
            honor: 40, courage: 48, loyalty: 68, compassion: 42, morality: 45,
            pragmatism: 75, ruthlessness: 5, ambition: 18, leadership: 45,
            independence: 60, intelligence: 100, strategy: 95, manipulation: 20,
            charisma: 28, pride: 18, determination: 78, riskTaking: 40,
            selfPreservation: 48, emotionalControl: 78, curiosity: 100
        },
        description:
            "An observant and unconventional thinker whose search for knowledge leads him beyond ordinary human perspective."
    },

    ned: {
        name: "Ned Stark",
        image: "../images/ned.png",
        traits: {
            honor: 99, courage: 82, loyalty: 96, compassion: 81, morality: 98,
            pragmatism: 34, ruthlessness: 0, ambition: 10, leadership: 84,
            independence: 60, intelligence: 62, strategy: 56, manipulation: 0,
            charisma: 58, pride: 45, determination: 82, riskTaking: 52,
            selfPreservation: 28, emotionalControl: 78, curiosity: 28
        },
        description:
            "A principled leader who treats honor, duty and loyalty as obligations even when they become dangerous."
    },

    robb: {
        name: "Robb Stark",
        image: "../images/robb.png",
        traits: {
            honor: 84, courage: 94, loyalty: 95, compassion: 48, morality: 64,
            pragmatism: 48, ruthlessness: 45, ambition: 44, leadership: 86,
            independence: 48, intelligence: 69, strategy: 82, manipulation: 20,
            charisma: 90, pride: 48, determination: 84, riskTaking: 70,
            selfPreservation: 42, emotionalControl: 49, curiosity: 31
        },
        description:
            "A charismatic battlefield leader whose loyalty and sense of honor can outweigh political calculation."
    },

    joffrey: {
        name: "Joffrey Baratheon",
        image: "../images/joffrey.png",
        traits: {
            honor: 12, courage: 28, loyalty: 24, compassion: 0, morality: 10,
            pragmatism: 35, ruthlessness: 99, ambition: 92, leadership: 45,
            independence: 32, intelligence: 48, strategy: 58, manipulation: 45,
            charisma: 48, pride: 98, determination: 48, riskTaking: 76,
            selfPreservation: 78, emotionalControl: 15, curiosity: 30
        },
        description:
            "A volatile ruler defined by entitlement, cruelty, pride and an intense need to dominate."
    },

    tywin: {
        name: "Tywin Lannister",
        image: "../images/tywin.png",
        traits: {
            honor: 42, courage: 48, loyalty: 45, compassion: 12, morality: 38,
            pragmatism: 92, ruthlessness: 88, ambition: 90, leadership: 78,
            independence: 48, intelligence: 82, strategy: 94, manipulation: 48,
            charisma: 45, pride: 48, determination: 90, riskTaking: 43,
            selfPreservation: 48, emotionalControl: 82, curiosity: 35
        },
        description:
            "A calculating power broker who values order, legacy and results above sentiment."
    },

    robert: {
        name: "Robert Baratheon",
        image: "../images/robert.png",
        traits: {
            honor: 58, courage: 99, loyalty: 68, compassion: 35, morality: 42,
            pragmatism: 44, ruthlessness: 48, ambition: 34, leadership: 90,
            independence: 82, intelligence: 40, strategy: 35, manipulation: 18,
            charisma: 98, pride: 81, determination: 55, riskTaking: 95,
            selfPreservation: 36, emotionalControl: 32, curiosity: 30
        },
        description:
            "A charismatic warrior who thrives on courage, freedom, risk and the life of a conqueror."
    },

    stannis: {
        name: "Stannis Baratheon",
        image: "../images/stannis.png",
        traits: {
            honor: 97, courage: 81, loyalty: 48, compassion: 24, morality: 84,
            pragmatism: 52, ruthlessness: 48, ambition: 91, leadership: 84,
            independence: 73, intelligence: 48, strategy: 86, manipulation: 28,
            charisma: 30, pride: 74, determination: 99, riskTaking: 48,
            selfPreservation: 44, emotionalControl: 69, curiosity: 27
        },
        description:
            "A relentlessly determined claimant who sees duty and rightful authority as matters of principle."
    },

    renly: {
        name: "Renly Baratheon",
        image: "../images/renly.png",
        traits: {
            honor: 48, courage: 55, loyalty: 70, compassion: 55, morality: 48,
            pragmatism: 68, ruthlessness: 20, ambition: 100, leadership: 100,
            independence: 60, intelligence: 70, strategy: 68, manipulation: 52,
            charisma: 100, pride: 65, determination: 58, riskTaking: 60,
            selfPreservation: 65, emotionalControl: 72, curiosity: 45
        },
        description:
            "A charming political contender who relies on popularity, alliances and an appealing vision of leadership."
    },

    theon: {
        name: "Theon Greyjoy",
        image: "../images/theon.png",
        traits: {
            honor: 42, courage: 48, loyalty: 72, compassion: 46, morality: 40,
            pragmatism: 45, ruthlessness: 45, ambition: 95, leadership: 49,
            independence: 45, intelligence: 48, strategy: 48, manipulation: 48,
            charisma: 48, pride: 100, determination: 78, riskTaking: 82,
            selfPreservation: 100, emotionalControl: 45, curiosity: 31
        },
        description:
            "A deeply conflicted survivor whose need for identity and recognition repeatedly collides with loyalty and fear."
    },

    ramsay: {
        name: "Ramsay Bolton",
        image: "../images/ramsay.png",
        traits: {
    honor: 0,
    courage: 70,
    loyalty: 0,
    compassion: 0,
    morality: 0,
    pragmatism: 35,
    ruthlessness: 100,
    ambition: 72,
    leadership: 25,
    independence: 62,
    intelligence: 42,
    strategy: 60,
    manipulation: 100,
    charisma: 25,
    pride: 100,
    determination: 65,
    riskTaking: 72,
    selfPreservation: 42,
    emotionalControl: 10,
    curiosity: 25
},
        description:
            "A sadistic predator who combines manipulation, cruelty and calculated intimidation."
    },

    littlefinger: {
        name: "Petyr Baelish",
        image: "../images/littlefinger.png",
        traits: {
            honor: 8, courage: 25, loyalty: 18, compassion: 10, morality: 12,
            pragmatism: 84, ruthlessness: 48, ambition: 92, leadership: 48,
            independence: 71, intelligence: 84, strategy: 90, manipulation: 94,
            charisma: 78, pride: 46, determination: 73, riskTaking: 48,
            selfPreservation: 80, emotionalControl: 48, curiosity: 72
        },
        description:
            "A master manipulator who turns information, patience and ambition into political leverage."
    },

    varys: {
        name: "Varys",
        image: "../images/varys.png",
        traits: {
            honor: 45, courage: 32, loyalty: 48, compassion: 46, morality: 48,
            pragmatism: 84, ruthlessness: 10, ambition: 18, leadership: 38,
            independence: 44, intelligence: 98, strategy: 99, manipulation: 95,
            charisma: 42, pride: 12, determination: 62, riskTaking: 22,
            selfPreservation: 81, emotionalControl: 92, curiosity: 84
        },
        description:
            "A patient information broker who prefers influence, intelligence and long-term stability to personal glory."
    },

    bronn: {
        name: "Bronn",
        image: "../images/bronn.png",
        traits: {
            honor: 18, courage: 48, loyalty: 35, compassion: 18, morality: 24,
            pragmatism: 98, ruthlessness: 48, ambition: 46, leadership: 44,
            independence: 91, intelligence: 45, strategy: 45, manipulation: 33,
            charisma: 76, pride: 48, determination: 82, riskTaking: 90,
            selfPreservation: 97, emotionalControl: 45, curiosity: 35
        },
        description:
            "A pragmatic mercenary who values survival, freedom, money and knowing when to take a calculated risk."
    },

    hound: {
        name: "The Hound",
        image: "../images/hound.png",
        traits: {
            honor: 33, courage: 97, loyalty: 68, compassion: 72, morality: 44,
            pragmatism: 45, ruthlessness: 32, ambition: 20, leadership: 42,
            independence: 95, intelligence: 48, strategy: 46, manipulation: 5,
            charisma: 30, pride: 47, determination: 48, riskTaking: 69,
            selfPreservation: 92, emotionalControl: 82, curiosity: 30
        },
        description:
            "A hardened survivor whose outward brutality hides a strong instinct to protect the vulnerable."
    },

    samwell: {
        name: "Samwell Tarly",
        image: "../images/samwell.png",
        traits: {
            honor: 48, courage: 48, loyalty: 91, compassion: 95, morality: 83,
            pragmatism: 48, ruthlessness: 5, ambition: 16, leadership: 42,
            independence: 38, intelligence: 98, strategy: 48, manipulation: 18,
            charisma: 36, pride: 28, determination: 81, riskTaking: 26,
            selfPreservation: 46, emotionalControl: 64, curiosity: 96
        },
        description:
            "A compassionate scholar whose courage grows from empathy, knowledge and persistence."
    },

    tormund: {
        name: "Tormund Giantsbane",
        image: "../images/tormund.png",
        traits: {
            honor: 42, courage: 94, loyalty: 82, compassion: 48, morality: 47,
            pragmatism: 45, ruthlessness: 34, ambition: 22, leadership: 78,
            independence: 92, intelligence: 38, strategy: 34, manipulation: 10,
            charisma: 90, pride: 58, determination: 83, riskTaking: 89,
            selfPreservation: 70, emotionalControl: 49, curiosity: 40
        },
        description:
            "A fearless free spirit who combines warrior courage with loyalty, humor and independence."
    },

    davos: {
        name: "Davos Seaworth",
        image: "../images/davos.png",
        traits: {
            honor: 82, courage: 48, loyalty: 97, compassion: 93, morality: 94,
            pragmatism: 92, ruthlessness: 12, ambition: 16, leadership: 45,
            independence: 42, intelligence: 76, strategy: 48, manipulation: 12,
            charisma: 45, pride: 28, determination: 48, riskTaking: 38,
            selfPreservation: 44, emotionalControl: 81, curiosity: 34
        },
        description:
            "A loyal and humane adviser who balances conscience with practical judgment."
    },

    jorah: {
        name: "Jorah Mormont",
        image: "../images/jorah.png",
        traits: {
            honor: 92, courage: 84, loyalty: 99, compassion: 48, morality: 48,
            pragmatism: 78, ruthlessness: 28, ambition: 35, leadership: 48,
            independence: 40, intelligence: 48, strategy: 48, manipulation: 20,
            charisma: 45, pride: 45, determination: 97, riskTaking: 45,
            selfPreservation: 48, emotionalControl: 64, curiosity: 35
        },
        description:
            "A devoted protector whose loyalty and determination repeatedly overcome fear, shame and self-interest."
    },

    greyWorm: {
        name: "Grey Worm",
        image: "../images/greyworm.png",
        traits: {
            honor: 78, courage: 88, loyalty: 95, compassion: 55, morality: 65,
            pragmatism: 72, ruthlessness: 55, ambition: 20, leadership: 65,
            independence: 35, intelligence: 48, strategy: 70, manipulation: 5,
            charisma: 25, pride: 48, determination: 94, riskTaking: 72,
            selfPreservation: 42, emotionalControl: 82, curiosity: 20
        },
        description:
            "A disciplined soldier whose courage, commitment and growing independence shape his identity as a leader."
    },

    oberyn: {
        name: "Oberyn Martell",
        image: "../images/oberyn.png",
        traits: {
            honor: 42, courage: 94, loyalty: 48, compassion: 38, morality: 45,
            pragmatism: 48, ruthlessness: 62, ambition: 57, leadership: 48,
            independence: 86, intelligence: 71, strategy: 58, manipulation: 48,
            charisma: 98, pride: 84, determination: 82, riskTaking: 96,
            selfPreservation: 40, emotionalControl: 48, curiosity: 48
        },
        description:
            "A charismatic and dangerous free spirit driven by passion, pride, vengeance and personal freedom."
    },

    highSparrow: {
        name: "The High Sparrow",
        image: "../images/highsparrow.png",
        traits: {
    honor: 95,
    courage: 45,
    loyalty: 85,
    compassion: 75,
    morality: 95,
    pragmatism: 15,
    ruthlessness: 45,
    ambition: 40,
    leadership: 90,
    independence: 70,
    intelligence: 62,
    strategy: 60,
    manipulation: 15,
    charisma: 85,
    pride: 10,
    determination: 100,
    riskTaking: 25,
    selfPreservation: 20,
    emotionalControl: 96,
    curiosity: 20
},
        description:
            "A disciplined religious leader whose conviction and public influence become tools for reshaping power."
    },

    qyburn: {
        name: "Qyburn",
        image: "../images/qyburn.png",
        traits: {
    honor: 5,
    courage: 25,
    loyalty: 35,
    compassion: 5,
    morality: 5,
    pragmatism: 96,
    ruthlessness: 75,
    ambition: 85,
    leadership: 20,
    independence: 25,
    intelligence: 100,
    strategy: 92,
    manipulation: 72,
    charisma: 25,
    pride: 20,
    determination: 90,
    riskTaking: 25,
    selfPreservation: 78,
    emotionalControl: 92,
    curiosity: 100
},
        description:
            "An obsessive experimenter who places forbidden knowledge and scientific curiosity above conventional ethics."
    },

    euron: {
        name: "Euron Greyjoy",
        image: "../images/euron.png",
        traits: {
            honor: 5, courage: 85, loyalty: 10, compassion: 0, morality: 5,
            pragmatism: 55, ruthlessness: 86, ambition: 91, leadership: 72,
            independence: 88, intelligence: 56, strategy: 58, manipulation: 72,
            charisma: 75, pride: 92, determination: 80, riskTaking: 98,
            selfPreservation: 42, emotionalControl: 35, curiosity: 42
        },
        description:
            "A reckless and domineering opportunist who pursues power through intimidation, spectacle and dangerous risks."
    },

    gendry: {
        name: "Gendry",
        image: "../images/gendry.png",
        traits: {
            honor: 72, courage: 100, loyalty: 100, compassion: 68, morality: 72,
            pragmatism: 64, ruthlessness: 22, ambition: 20, leadership: 42,
            independence: 60, intelligence: 45, strategy: 38, manipulation: 5,
            charisma: 48, pride: 35, determination: 100, riskTaking: 58,
            selfPreservation: 55, emotionalControl: 58, curiosity: 30
        },
        description:
            "A grounded and hardworking survivor who values honesty, personal freedom and standing by those he trusts."
    },

    jaqen: {
        name: "Jaqen H'ghar",
        image: "../images/jaqen.png",
        traits: {
            honor: 30, courage: 65, loyalty: 10, compassion: 18, morality: 35,
            pragmatism: 85, ruthlessness: 40, ambition: 10, leadership: 20,
            independence: 93, intelligence: 82, strategy: 88, manipulation: 62,
            charisma: 45, pride: 20, determination: 78, riskTaking: 52,
            selfPreservation: 78, emotionalControl: 98, curiosity: 45
        },
        description:
            "An enigmatic and controlled operative who follows a strict code while concealing his intentions and identity."
    },

    nightKing: {
        name: "The Night King",
        image: "../images/nightking.png",
        traits: {
            honor: 5, courage: 84, loyalty: 0, compassion: 0, morality: 0,
            pragmatism: 48, ruthlessness: 100, ambition: 55, leadership: 78,
            independence: 73, intelligence: 48, strategy: 92, manipulation: 20,
            charisma: 18, pride: 52, determination: 100, riskTaking: 41,
            selfPreservation: 90, emotionalControl: 100, curiosity: 8
        },
        description:
            "An almost emotionless force of relentless purpose, domination and destruction."
    },

    hodor: {
        name: "Hodor",
        image: "../images/hodor.png",
        traits: {
            honor: 58, courage: 70, loyalty: 100, compassion: 100, morality: 60,
            pragmatism: 45, ruthlessness: 0, ambition: 5, leadership: 5,
            independence: 18, intelligence: 20, strategy: 15, manipulation: 0,
            charisma: 28, pride: 15, determination: 95, riskTaking: 50,
            selfPreservation: 10, emotionalControl: 50, curiosity: 30
        },
        description:
            "A gentle and deeply loyal protector whose defining strength is his willingness to put another person's safety first."
    },

    drogo: {
        name: "Khal Drogo",
        image: "../images/drogo.png",
        traits: {
            honor: 48, courage: 94, loyalty: 83, compassion: 28, morality: 36,
            pragmatism: 82, ruthlessness: 92, ambition: 45, leadership: 84,
            independence: 74, intelligence: 39, strategy: 44, manipulation: 6,
            charisma: 72, pride: 88, determination: 84, riskTaking: 48,
            selfPreservation: 48, emotionalControl: 48, curiosity: 24
        },
        description:
            "A dominant warrior leader defined by courage, pride, strength, loyalty and ruthless action."
    },

    viserys: {
        name: "Viserys Targaryen",
        image: "../images/viserys.png",
        traits: {
            honor: 12, courage: 22, loyalty: 30, compassion: 8, morality: 18,
            pragmatism: 42, ruthlessness: 72, ambition: 98, leadership: 49,
            independence: 45, intelligence: 48, strategy: 47, manipulation: 78,
            charisma: 71, pride: 100, determination: 48, riskTaking: 34,
            selfPreservation: 94, emotionalControl: 20, curiosity: 29
        },
        description:
            "A desperate claimant whose entitlement, ambition and fear make him increasingly volatile."
    },

    mance: {
        name: "Mance Rayder",
        image: "../images/mance.png",
        traits: {
            honor: 48, courage: 83, loyalty: 48, compassion: 45, morality: 45,
            pragmatism: 93, ruthlessness: 18, ambition: 34, leadership: 95,
            independence: 92, intelligence: 49, strategy: 81, manipulation: 26,
            charisma: 94, pride: 42, determination: 84, riskTaking: 48,
            selfPreservation: 48, emotionalControl: 78, curiosity: 51
        },
        description:
            "A charismatic leader who values freedom, survival and unity over rigid institutions."
    }
};


/* ============================================================
ADDITIONAL TRAIT SCORES
DISCIPLINE, RESILIENCE, IMPULSIVENESS

These scores are merged into the original 20-trait character profiles.
Each character will have 23 traits after this section executes.
============================================================ */

const ADDITIONAL_TRAIT_SCORES = {

    jon: {
        discipline: 80,
        resilience: 82,
        impulsiveness: 30
    },

    tyrion: {
        discipline: 60,
        resilience: 82,
        impulsiveness: 60
    },

    jaime: {
        discipline: 65,
        resilience: 86,
        impulsiveness: 65
    },

    bran: {
        discipline: 75,
        resilience: 75,
        impulsiveness: 25
    },

    ned: {
        discipline: 92,
        resilience: 88,
        impulsiveness: 28
    },

    robb: {
        discipline: 70,
        resilience: 75,
        impulsiveness: 72
    },

    joffrey: {
        discipline: 15,
        resilience: 30,
        impulsiveness: 95
    },

    tywin: {
        discipline: 95,
        resilience: 80,
        impulsiveness: 25
    },

    robert: {
        discipline: 35,
        resilience: 58,
        impulsiveness: 82
    },

    stannis: {
        discipline: 98,
        resilience: 90,
        impulsiveness: 25
    },

    renly: {
        discipline: 62,
        resilience: 68,
        impulsiveness: 58
    },

    theon: {
        discipline: 40,
        resilience: 82,
        impulsiveness: 75
    },

    ramsay: {
        discipline: 25,
    resilience: 35,
    impulsiveness: 95
    },

    littlefinger: {
        discipline: 78,
        resilience: 65,
        impulsiveness: 38
    },

    varys: {
        discipline: 90,
        resilience: 76,
        impulsiveness: 22
    },

    bronn: {
        discipline: 55,
        resilience: 75,
        impulsiveness: 66
    },

    hound: {
        discipline: 65,
        resilience: 83,
        impulsiveness: 60
    },

    samwell: {
        discipline: 70,
        resilience: 90,
        impulsiveness: 30
    },

    tormund: {
        discipline: 45,
        resilience: 82,
        impulsiveness: 77
    },

    davos: {
        discipline: 78,
        resilience: 84,
        impulsiveness: 40
    },

    jorah: {
        discipline: 75,
        resilience: 88,
        impulsiveness: 48
    },

    greyWorm: {
        discipline: 96,
        resilience: 86,
        impulsiveness: 25
    },

    oberyn: {
        discipline: 45,
        resilience: 75,
        impulsiveness: 82
    },

    highSparrow: {
        discipline: 95,
    resilience: 80,
    impulsiveness: 10
    },

    qyburn: {
        discipline: 85,
    resilience: 75,
    impulsiveness: 15
    },

    euron: {
        discipline: 35,
        resilience: 60,
        impulsiveness: 93
    },

    gendry: {
        discipline: 65,
        resilience: 78,
        impulsiveness: 48
    },

    jaqen: {
        discipline: 98,
        resilience: 70,
        impulsiveness: 15
    },

    nightKing: {
        discipline: 100,
        resilience: 100,
        impulsiveness: 5
    },

    hodor: {
        discipline: 50,
        resilience: 78,
        impulsiveness: 18
    },

    drogo: {
        discipline: 75,
        resilience: 70,
        impulsiveness: 62
    },

    viserys: {
        discipline: 20,
        resilience: 25,
        impulsiveness: 90
    },

    mance: {
        discipline: 80,
        resilience: 88,
        impulsiveness: 42
    }
};


/* ============================================================
MERGE ADDITIONAL TRAITS INTO CHARACTER PROFILES

Each character must receive:
- discipline
- resilience
- impulsiveness

Full profile validation runs once in the logic section.
============================================================ */

for (const [characterKey, additionalTraits]
    of Object.entries(ADDITIONAL_TRAIT_SCORES)) {

    if (
        !Object.prototype.hasOwnProperty.call(
            CHARACTERS,
            characterKey
        )
    ) {
        throw new Error(
            `Additional trait scores reference an unknown character: ${characterKey}`
        );
    }

    Object.assign(
        CHARACTERS[characterKey].traits,
        additionalTraits
    );

}

/* ============================================================
HIDDEN BEHAVIORAL ROUTES
These are not shown to the user.
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


/* ============================================================
CHARACTER ROUTES
Five route affinities per character.

Order indicates intended route relevance, not final scoring weight.
============================================================ */

const CHARACTER_ROUTES = {

    jon: [
    "duty",
    "compassion",
    "protection",
    "freedom",
    "warrior"
],

    tyrion: [
        "cunning", "strategy", "survival", "compassion", "power"
    ],

    jaime: [
        "duty", "warrior", "protection", "freedom", "survival"
    ],

    bran: [
        "strategy", "compassion", "duty", "survival", "freedom"
    ],

    ned: [
        "duty", "protection", "compassion", "warrior", "strategy"
    ],

    robb: [
        "duty", "warrior", "power", "protection", "strategy"
    ],

    joffrey: [
        "power", "vengeance", "survival", "cunning", "warrior"
    ],

    tywin: [
        "power", "strategy", "cunning", "duty", "survival"
    ],

    robert: [
        "warrior", "freedom", "power", "survival", "protection"
    ],

    stannis: [
        "duty", "power", "strategy", "warrior", "vengeance"
    ],

    renly: [
        "power", "strategy", "cunning", "freedom", "protection"
    ],

    theon: [
        "survival", "power", "freedom", "warrior", "duty"
    ],

    ramsay: [
        "vengeance", "power", "cunning", "survival", "warrior"
    ],

    littlefinger: [
        "cunning", "power", "strategy", "survival", "freedom"
    ],

    varys: [
        "strategy", "cunning", "protection", "survival", "duty"
    ],

    bronn: [
        "survival", "freedom", "warrior", "strategy", "power"
    ],

    hound: [
        "freedom", "warrior", "survival", "protection", "compassion"
    ],

    samwell: [
        "compassion", "strategy", "duty", "protection", "survival"
    ],

    tormund: [
        "warrior", "freedom", "protection", "compassion", "survival"
    ],

    davos: [
        "compassion", "duty", "survival", "strategy", "protection"
    ],

    jorah: [
        "duty", "protection", "warrior", "survival", "compassion"
    ],

    greyWorm: [
        "duty", "warrior", "protection", "survival", "strategy"
    ],

    oberyn: [
        "vengeance", "warrior", "power", "freedom", "strategy"
    ],

    highSparrow: [
        "power", "duty", "compassion", "strategy", "protection"
    ],

    qyburn: [
        "cunning", "strategy", "power", "survival", "duty"
    ],

    euron: [
        "power", "warrior", "cunning", "freedom", "vengeance"
    ],

    gendry: [
        "survival", "freedom", "warrior", "duty", "protection"
    ],

    jaqen: [
        "cunning", "strategy", "survival", "freedom", "warrior"
    ],

    nightKing: [
        "vengeance", "warrior", "strategy", "power", "survival"
    ],

    hodor: [
        "protection", "compassion", "duty", "survival", "warrior"
    ],

    drogo: [
        "warrior", "power", "protection", "survival", "freedom"
    ],

    viserys: [
        "power", "survival", "cunning", "vengeance", "freedom"
    ],

    mance: [
        "freedom", "strategy", "warrior", "protection", "survival"
    ]
};



const questions = [

/* ============================================================
CATEGORY 1 — GAME OF THRONES SCENARIOS
QUESTIONS 1–28
============================================================ */

{
    question: "Your house owns a Valyrian steel sword with a mysterious symbol on its damaged hilt. What do you do?",
    answers: [
        {text: "Restore it while preserving its history and traditions.", traits: ["honor", "discipline", "determination"], route: "duty"},
        {text: "Give it to the warrior best able to protect our people.", traits: ["courage", "leadership", "loyalty"], route: "protection"},
        {text: "Investigate the symbol and discover the sword's origins.", traits: ["curiosity", "intelligence", "strategy"], route: "strategy"},
        {text: "Trade it for resources to help struggling families.", traits: ["compassion", "pragmatism", "morality"], route: "compassion"},
        {text: "Hide it until I understand its value and possible risks.", traits: ["selfPreservation", "emotionalControl", "pragmatism"], route: "survival"}
    ]
},

{
    question: "A dying lord's heir has a disputed claim. Revealing the truth could prevent injustice but trigger civil war. What do you do?",
    answers: [
        {text: "Reveal the evidence and let a legitimate process decide.", traits: ["honor", "morality", "courage"], route: "duty"},
        {text: "Investigate further before risking the realm's stability.", traits: ["curiosity", "intelligence", "discipline"], route: "strategy"},
        {text: "Keep it secret if supporting the heir preserves peace.", traits: ["pragmatism", "loyalty", "emotionalControl"], route: "survival"},
        {text: "Use the secret to gain influence over the future ruler.", traits: ["manipulation", "ambition", "intelligence"], route: "power"},
        {text: "Reveal it when it can shift power, even if war follows.", traits: ["riskTaking", "determination", "ruthlessness"], route: "cunning"}
    ]
},

{
    question: "A captured enemy scout spied on you to protect their threatened family. Their information could save your soldiers. What do you do?",
    answers: [
        {text: "Protect their family in exchange for honest cooperation.", traits: ["compassion", "loyalty", "morality"], route: "protection"},
        {text: "Turn them into a double agent and control what they reveal.", traits: ["manipulation", "intelligence", "strategy"], route: "cunning"},
        {text: "Keep them imprisoned until their information is verified.", traits: ["discipline", "selfPreservation", "emotionalControl"], route: "survival"},
        {text: "Use their information to strike the enemy commander first.", traits: ["determination", "ruthlessness", "leadership"], route: "warrior"},
        {text: "Exchange them for something valuable and move on.", traits: ["pragmatism", "ambition", "selfPreservation"], route: "power"}
    ]
},

{
    question: "A young man from a rival house arrives at your castle under a peace agreement. How would you treat him?",
    answers: [
        {text: "Raise him fairly and teach him to honor the agreement.", traits: ["honor", "compassion", "discipline"], route: "duty"},
        {text: "Build a genuine friendship that could preserve peace.", traits: ["loyalty", "charisma", "compassion"], route: "protection"},
        {text: "Learn his family's politics to better understand our rivals.", traits: ["curiosity", "intelligence", "strategy"], route: "cunning"},
        {text: "Train him to become capable, regardless of his future allegiance.", traits: ["leadership", "determination", "discipline"], route: "warrior"},
        {text: "Remind him that his family's past actions still carry a price.", traits: ["pride", "ruthlessness", "determination"], route: "vengeance"}
    ]
},

{
    question: "An old chronicle contradicts the accepted story of a famous historical event. What do you do?",
    answers: [
        {text: "Follow the evidence, even if it challenges accepted beliefs.", traits: ["curiosity", "intelligence", "independence"], route: "strategy"},
        {text: "Verify the claims through other records first.", traits: ["discipline", "intelligence", "emotionalControl"], route: "strategy"},
        {text: "Consider whether revealing the truth would unfairly harm innocents.", traits: ["compassion", "morality", "pragmatism"], route: "compassion"},
        {text: "Reveal it so powerful families cannot control history.", traits: ["honor", "determination", "courage"], route: "duty"},
        {text: "Keep it secret until I know who would benefit.", traits: ["manipulation", "selfPreservation", "strategy"], route: "cunning"}
    ]
},

{
    question: "A raven brings a message that sounds unlike its supposed sender. How do you respond?",
    answers: [
        {text: "Request confirmation through an authenticated reply.", traits: ["discipline", "emotionalControl", "pragmatism"], route: "duty"},
        {text: "Compare its wording with earlier letters for hidden clues.", traits: ["curiosity", "intelligence", "strategy"], route: "strategy"},
        {text: "Warn anyone at risk while checking whether it is genuine.", traits: ["loyalty", "leadership", "compassion"], route: "protection"},
        {text: "Send harmless information and observe the sender's response.", traits: ["manipulation", "intelligence", "selfPreservation"], route: "cunning"},
        {text: "Delay major decisions until the threat is clearer.", traits: ["emotionalControl", "pragmatism", "selfPreservation"], route: "survival"}
    ]
},

{
    question: "Villagers ask to use pastureland after losing access to their usual grazing fields. What do you do?",
    answers: [
        {text: "Correct the arrangement if the villagers were treated unfairly.", traits: ["morality", "honor", "determination"], route: "duty"},
        {text: "Allow limited access with rules to protect the land.", traits: ["pragmatism", "leadership", "compassion"], route: "protection"},
        {text: "Work with villagers and landholders on a lasting agreement.", traits: ["charisma", "strategy", "compassion"], route: "compassion"},
        {text: "Explore better land management to improve productivity.", traits: ["curiosity", "intelligence", "pragmatism"], route: "strategy"},
        {text: "Avoid changing ownership until I understand the political risks.", traits: ["selfPreservation", "discipline", "strategy"], route: "survival"}
    ]
},

{
    question: "At a peace ceremony, you're asked to wear the colors of a house that recently fought yours. What do you do?",
    answers: [
        {text: "Wear them if the gesture genuinely helps secure peace.", traits: ["discipline", "pragmatism", "compassion"], route: "protection"},
        {text: "Suggest a compromise that respects both houses' histories.", traits: ["honor", "charisma", "strategy"], route: "strategy"},
        {
    text: "Refuse until the other house pays for the losses it inflicted.",
    traits: ["pride", "ruthlessness", "determination"],
    route: "vengeance"
},
        {text: "Accept publicly while subtly asserting our independence.", traits: ["independence", "manipulation", "charisma"], route: "cunning"},
        {text: "Treat it as a formality and focus on the negotiations.", traits: ["pragmatism", "emotionalControl", "strategy"], route: "survival"}
    ]
},

{
    question: "An enemy who once humiliated your family is captured and offers valuable intelligence for their life. What do you do?",
    answers: [
        {text: "Trade verified intelligence for mercy.", traits: ["pragmatism", "emotionalControl", "morality"], route: "strategy"},
        {text: "Demand an admission of wrongdoing and an effort to repair the harm.", traits: ["honor", "determination", "pride"], route: "duty"},
        {text: "Use their knowledge to gain more advantages before deciding their fate.", traits: ["intelligence", "manipulation", "ambition"], route: "cunning"},
        {
    text: "Make them suffer for humiliating my family, even if their intelligence could help us.",
    traits: ["ruthlessness", "pride", "determination"],
    route: "vengeance"
},
        {text: "Release them under strict conditions if it ends the feud.", traits: ["compassion", "pragmatism", "leadership"], route: "protection"}
    ]
},

{
    question: "A ferryman refuses to take displaced families across the river unless they pay more than they can afford. What do you do?",
    answers: [
        {text: "Pay their fare and help them reach safety.", traits: ["compassion", "loyalty", "courage"], route: "protection"},
        {text: "Negotiate a fair price or delayed payment.", traits: ["pragmatism", "charisma", "strategy"], route: "compassion"},
        {
    text: "Demand compensation and a fair penalty for exploiting desperate families.",
    traits: ["honor", "morality", "determination"],
    route: "duty"
},
        {text: "Offer the ferryman a useful deal in exchange for helping now.", traits: ["intelligence", "manipulation", "pragmatism"], route: "cunning"},
        {text: "Check for danger before escalating the confrontation.", traits: ["selfPreservation", "emotionalControl", "curiosity"], route: "survival"}
    ]
},

{
    question: "The royal fleet needs ships, but local shipwrights are repairing fishing boats that sustain the town. What do you do?",
    answers: [
        {text: "Schedule both projects according to their urgency.", traits: ["strategy", "leadership", "pragmatism"], route: "strategy"},
        {text: "Prioritize the fleet if the kingdom faces a serious threat.", traits: ["honor", "discipline", "determination"], route: "duty"},
        {text: "Protect the fishing industry if families depend on it for food.", traits: ["compassion", "morality", "leadership"], route: "protection"},
        {text: "Negotiate help from other ports to share the burden.", traits: ["charisma", "intelligence", "strategy"], route: "compassion"},
        {text: "Seek investors or captured ships to ease the shortage.", traits: ["curiosity", "ambition", "riskTaking"], route: "power"}
    ]
},

{
    question: "A dragon nests near the farms that supply your castle. What should happen next?",
    answers: [
        {text: "Move nearby families and livestock to safety.", traits: ["leadership", "compassion", "discipline"], route: "protection"},
        {text: "Observe the dragon from a safe distance.", traits: ["curiosity", "intelligence", "emotionalControl"], route: "strategy"},
        {text: "See whether it can be guided away without a fight.", traits: ["courage", "independence", "riskTaking"], route: "warrior"},
        {text: "Consult experienced dragonkeepers before acting.", traits: ["discipline", "pragmatism", "curiosity"], route: "duty"},
        {text: "Prepare defenses in case it threatens the farms or supplies.", traits: ["selfPreservation", "strategy", "determination"], route: "survival"}
    ]
},

{
    question: "A northern house sends warriors but refuses to place its commander under an outsider. What do you do?",
    answers: [
        {text: "Create a command arrangement that respects their traditions.", traits: ["pragmatism", "leadership", "strategy"], route: "strategy"},
        {text: "Insist on one chain of command for the whole army.", traits: ["discipline", "determination", "leadership"], route: "duty"},
        {text: "Give their commander a separate force with shared objectives.", traits: ["intelligence", "charisma", "pragmatism"], route: "strategy"},
        {text: "Decide whether their help is worth the political cost.", traits: ["independence", "selfPreservation", "strategy"], route: "survival"},
        {text: "Build trust with their commander instead of demanding submission.", traits: ["charisma", "loyalty", "leadership"], route: "protection"}
    ]
},

{
    question: "Workers discover a sealed passage leading beyond your castle walls. Nobody knows why it was built. What do you do?",
    answers: [
        {text: "Secure it until its safety can be checked.", traits: ["discipline", "selfPreservation", "pragmatism"], route: "survival"},
        {text: "Send a prepared team to map and document it.", traits: ["curiosity", "intelligence", "strategy"], route: "strategy"},
        {text: "Keep it secret until I understand its strategic value.", traits: ["manipulation", "selfPreservation", "strategy"], route: "cunning"},
        {text: "See whether it could help civilians escape during an attack.", traits: ["compassion", "leadership", "determination"], route: "protection"},
        {text: "Preserve its markings and search the castle's old records.", traits: ["honor", "curiosity", "discipline"], route: "duty"}
    ]
},

{
    question: "A maester wants to examine battlefield remains to investigate a disease that might spread. What do you do?",
    answers: [
        {text: "Allow the study with precautions if it could save lives.", traits: ["curiosity", "compassion", "pragmatism"], route: "protection"},
        {text: "Ask for a clear research plan and intended use of the findings.", traits: ["intelligence", "strategy", "discipline"], route: "strategy"},
        {text: "Consult the dead soldiers' families before any examination.", traits: ["honor", "loyalty", "compassion"], route: "duty"},
        {text: "Fund the work if its discoveries could strengthen the realm.", traits: ["ambition", "curiosity", "leadership"], route: "power"},
        {text: "Limit the study to a remote area until risks are understood.", traits: ["selfPreservation", "emotionalControl", "pragmatism"], route: "survival"}
    ]
},

{
    question: "Guards have left a remote settlement, and villagers want to organize their own defense. What do you do?",
    answers: [
        {text: "Train volunteers and establish clear rules.", traits: ["discipline", "leadership", "courage"], route: "warrior"},
        {text: "Help build defenses and arrange for guards to return.", traits: ["compassion", "pragmatism", "leadership"], route: "protection"},
        {text: "Let villagers take responsibility for their own safety.", traits: ["independence", "determination", "leadership"], route: "freedom"},
        {text: "Assess the threats before deciding what training and equipment they need.", traits: ["intelligence", "strategy", "curiosity"], route: "strategy"},
        {text: "Set limits to prevent the militia from abusing its power.", traits: ["morality", "discipline", "emotionalControl"], route: "duty"}
    ]
},

{
    question: "Three captains each insist on leading an expedition. How do you settle the dispute?",
    answers: [
        {text: "Choose the captain with the strongest record.", traits: ["leadership", "pragmatism", "discipline"], route: "duty"},
        {text: "Assign each captain a phase suited to their strengths.", traits: ["strategy", "intelligence", "leadership"], route: "strategy"},
        {text: "Hear their concerns and find a compromise.", traits: ["charisma", "compassion", "loyalty"], route: "compassion"},
        {text: "Choose quickly and forbid further arguments.", traits: ["ruthlessness", "pride", "leadership"], route: "power"},
        {text: "Test their teamwork before choosing a leader.", traits: ["curiosity", "emotionalControl", "pragmatism"], route: "strategy"}
    ]
},

{
    question: "A wounded direwolf enters your camp. Some soldiers fear it; others see an omen. What do you do?",
    answers: [
        {text: "Calm the camp and assess the animal's injuries.", traits: ["compassion", "emotionalControl", "pragmatism"], route: "protection"},
        {text: "Ask an experienced handler to examine it.", traits: ["discipline", "curiosity", "strategy"], route: "strategy"},
        {text: "Give it space and let it leave undisturbed.", traits: ["independence", "compassion", "emotionalControl"], route: "freedom"},
        {text: "Defend the camp if necessary, but avoid needless killing.", traits: ["courage", "morality", "determination"], route: "warrior"},
        {
    text: "Use the soldiers' beliefs about the direwolf to influence their loyalties.",
    traits: ["intelligence", "manipulation", "curiosity"],
    route: "cunning"}
    ]
},

{
    question: "Your ally asks you to betray a trusted companion to secure victory and end the war. What do you do?",
    answers: [
        {text: "Refuse to betray someone who trusted me.", traits: ["loyalty", "honor", "determination"], route: "duty"},
        {text: "Find another plan that avoids sacrificing the companion.", traits: ["intelligence", "strategy", "compassion"], route: "strategy"},
        {text: "Accept if the sacrifice is truly necessary to save many lives.", traits: ["pragmatism", "ruthlessness", "emotionalControl"], route: "power"},
        {text: "Pretend to agree while secretly preparing an alternative.", traits: ["manipulation", "loyalty", "independence"], route: "cunning"},
        {text: "Leave the alliance rather than surrender my own judgment.", traits: ["pride", "independence", "courage"], route: "freedom"}
    ]
},

{
    question: "An enemy castle refuses to surrender. You could starve nearby civilians to force the garrison's hand. What do you do?",
    answers: [
        {text: "Find another way to defeat the garrison without starving civilians.", traits: ["compassion", "strategy", "determination"], route: "protection"},
        {text: "Refuse to target civilians, even if battle becomes more dangerous.", traits: ["honor", "courage", "morality"], route: "warrior"},
        {text: "Order the blockade if it could end the war sooner.", traits: ["pragmatism", "ruthlessness", "emotionalControl"], route: "strategy"},
        {text: "Secretly arrange food for civilians while maintaining public pressure.", traits: ["compassion", "manipulation", "intelligence"], route: "cunning"},
        {text: "Abandon the siege if its cost to my forces becomes too high.", traits: ["selfPreservation", "pragmatism", "independence"], route: "survival"}
    ]
},

{
    question: "Two religious groups want shrines in your town, but residents fear their rivalry could cause unrest. What do you do?",
    answers: [
        {text: "Allow both under equal rules and prevent harassment.", traits: ["morality", "compassion", "discipline"], route: "duty"},
        {text: "Hear residents' concerns and bring both groups together.", traits: ["charisma", "curiosity", "strategy"], route: "compassion"},
        {text: "Set clear rules for gatherings and public behavior.", traits: ["leadership", "pragmatism", "emotionalControl"], route: "strategy"},
        {text: "Encourage both groups to work together on community needs.", traits: ["compassion", "loyalty", "leadership"], route: "protection"},
        {text: "Delay approval until the security risks are clear.", traits: ["selfPreservation", "pragmatism", "determination"], route: "survival"}
    ]
},

{
    question: "A shipwreck leaves enemy soldiers and ordinary passengers stranded on your coast. What do you do?",
    answers: [
        {text: "Rescue everyone possible, regardless of which side they served.", traits: ["compassion", "morality", "courage"], route: "protection"},
        {text: "Save passengers first, then secure the soldiers.", traits: ["leadership", "pragmatism", "strategy"], route: "survival"},
        {text: "Organize the rescue carefully to protect the settlement.", traits: ["discipline", "strategy", "determination"], route: "duty"},
        {text: "Use the opportunity to learn why the enemy ship was here.", traits: ["curiosity", "intelligence", "strategy"], route: "cunning"},
        {text: "Let healers and guards prioritize people by urgency, not rank.", traits: ["compassion", "leadership", "morality"], route: "compassion"}
    ]
},

{
    question: "During a blizzard, wildlings seek shelter at your gate. Your stores are limited, and their intentions are uncertain. What do you do?",
    answers: [
        {text: "Offer temporary shelter under clear rules and guard supervision.", traits: ["compassion", "discipline", "pragmatism"], route: "protection"},
        {text: "Hear their story and discuss what they can offer in return.", traits: ["curiosity", "charisma", "strategy"], route: "compassion"},
        {text: "Check their identities and intentions before admitting them.", traits: ["selfPreservation", "discipline", "emotionalControl"], route: "survival"},
        {text: "Shelter families and vulnerable people first, while remaining watchful.", traits: ["loyalty", "compassion", "pragmatism"], route: "protection"},
        {text: "Explore a lasting agreement to prevent future conflict.", traits: ["independence", "strategy", "leadership"], route: "freedom"}
    ]
},

{
    question: "Workers find sealed jars of wildfire in an abandoned cellar. The contents may still be dangerous. What do you do?",
    answers: [
        {text: "Secure the area and call qualified experts.", traits: ["discipline", "selfPreservation", "pragmatism"], route: "survival"},
        {text: "Search old records to learn who stored them and why.", traits: ["curiosity", "intelligence", "strategy"], route: "strategy"},
        {text: "Evacuate nearby residents until the risk is understood.", traits: ["leadership", "compassion", "determination"], route: "protection"},
        {text: "Prevent anyone from secretly claiming the wildfire for personal gain.", traits: ["morality", "emotionalControl", "strategy"], route: "duty"},
        {text: "Assess its defensive value without using it recklessly.", traits: ["pragmatism", "curiosity", "ambition"], route: "power"}
    ]
},

{
    question: "A new lord wants to rebuild trust after his predecessor brutally punished a neighboring community. What do you advise?",
    answers: [
        {text: "Acknowledge the harm and create a fair way to address grievances.", traits: ["honor", "morality", "compassion"], route: "duty"},
        {text: "Begin with repairs, compensation and practical improvements.", traits: ["pragmatism", "leadership", "determination"], route: "protection"},
        {text: "Ask community leaders what changes they need most.", traits: ["curiosity", "charisma", "compassion"], route: "compassion"},
        {
    text: "Refuse reconciliation until those responsible suffer for what they did, even if peace remains out of reach.",
    traits: ["ruthlessness", "determination", "pride"],
    route: "vengeance"
},
        {text: "Create oversight and rules to prevent future abuses.", traits: ["discipline", "leadership", "morality"], route: "strategy"}
    ]
},

{
    question: "After a battle, you find wounded enemy knights being robbed by looters. What do you do?",
    answers: [
        {
    text: "Make them return what they took and punish them under battlefield law.",
    traits: ["honor", "discipline", "determination"],
    route: "duty"
},
        {text: "Secure the area and organize guards and medical aid.", traits: ["leadership", "discipline", "pragmatism"], route: "protection"},
        {text: "Check for useful intelligence while preserving identification evidence.", traits: ["intelligence", "strategy", "curiosity"], route: "cunning"},
        {text: "Allow essential supply recovery but forbid cruelty or humiliation.", traits: ["pragmatism", "morality", "emotionalControl"], route: "survival"},
        {text: "Make the looters return the goods and punish them harshly.", traits: ["ruthlessness", "determination", "leadership"], route: "vengeance"}
    ]
},

{
    question: "At a royal council, the king blames your commander for a disastrous campaign, though you know the king's orders caused the defeat. What do you do?",
    answers: [
        {
            text: "Tell the truth, even if it angers the king.",
            traits: ["honor", "courage", "morality"],
            route: "duty"
        },
        {
            text: "Defend the commander privately and seek a fair correction.",
            traits: ["loyalty", "charisma", "compassion"],
            route: "protection"
        },
        {
            text: "Present the evidence carefully and let the facts speak.",
            traits: ["intelligence", "strategy", "discipline"],
            route: "strategy"
        },
        {
            text: "Stay silent until I understand the political consequences.",
            traits: ["selfPreservation", "emotionalControl", "pragmatism"],
            route: "survival"
        },
        {
            text: "Use the blame to gain leverage over the king and commander.",
            traits: ["manipulation", "ambition", "intelligence"],
            route: "cunning"
        }
    ]
},

{
    question: "The Iron Bank reveals your house has huge debts and offers relief in exchange for political concessions. What do you do?",
    answers: [
        {text: "Audit the original agreements before accepting new terms.", traits: ["curiosity", "discipline", "intelligence"], route: "strategy"},
        {text: "Negotiate terms that protect financial stability and independence.", traits: ["pragmatism", "determination", "independence"], route: "freedom"},
        {text: "Accept if it prevents hardship for the people who depend on us.", traits: ["compassion", "leadership", "pragmatism"], route: "protection"},
        {text: "Seek other support before revealing how desperate we are.", traits: ["selfPreservation", "intelligence", "strategy"], route: "cunning"},
        {text: "Create a strict repayment plan and cut unnecessary spending.", traits: ["discipline", "determination", "leadership"], route: "duty"}
    ]
},


/* ============================================================
CATEGORY 2 — PURE PERSONALITY
QUESTIONS 29–36
============================================================ */

{
    question: "A long-term project has become slow and repetitive. What keeps you going?",
    answers: [
        {text: "Following a routine, even when motivation fades.", traits: ["discipline", "determination", "emotionalControl"], route: "duty"},
        {text: "Remembering the goal and adjusting my approach.", traits: ["resilience", "pragmatism", "determination"], route: "strategy"},
        {text: "Finding a new challenge to make the work interesting.", traits: ["curiosity", "independence", "riskTaking"], route: "freedom"},
        {text: "Getting encouragement from people who support me.", traits: ["loyalty", "compassion", "determination"], route: "protection"},
        {text: "Taking a break and deciding whether the goal still matters.", traits: ["selfPreservation", "emotionalControl", "pragmatism"], route: "survival"}
    ]
},

{
    question: "Someone you respect gives blunt criticism of something you've worked hard to improve. What do you do?",
    answers: [
        {text: "Ask for examples so I know what to improve.", traits: ["curiosity", "intelligence", "discipline"], route: "strategy"},
        {text: "Reflect on it, then decide which parts are useful.", traits: ["emotionalControl", "resilience", "pragmatism"], route: "survival"},
        {text: "Use it as motivation to prove I can do better.", traits: ["determination", "pride", "resilience"], route: "warrior"},
        {text: "Explain my reasoning and discuss our differences.", traits: ["charisma", "independence", "courage"], route: "freedom"},
        {text: "Accept fair criticism, even when it's uncomfortable.", traits: ["discipline", "morality", "determination"], route: "duty"}
    ]
},

{
    question: "Several unexpected problems disrupt your carefully planned day. What's your response?",
    answers: [
        {text: "Reorganize priorities and make a new plan.", traits: ["strategy", "discipline", "pragmatism"], route: "strategy"},
        {text: "Handle the biggest problem immediately and sort out details later.", traits: ["impulsiveness", "courage", "riskTaking"], route: "warrior"},
        {text: "Stay calm, ask for help and tackle problems one at a time.", traits: ["emotionalControl", "resilience", "compassion"], route: "protection"},
        {text: "Abandon the original plan and explore a new opportunity.", traits: ["independence", "curiosity", "resilience"], route: "freedom"},
        {text: "Protect essential commitments and postpone less important tasks.", traits: ["pragmatism", "determination", "selfPreservation"], route: "survival"}
    ]
},

{
    question: "Several urgent tasks compete for your attention. How do you choose what comes first?",
    answers: [
        {text: "Rank them by consequences and tackle the most important.", traits: ["discipline", "strategy", "pragmatism"], route: "strategy"},
        {text: "Finish the quickest task first to build momentum.", traits: ["determination", "pragmatism", "impulsiveness"], route: "warrior"},
        {text: "Ask those affected which responsibility matters most.", traits: ["compassion", "leadership", "curiosity"], route: "protection"},
        {text: "Choose the task with the greatest future opportunity.", traits: ["ambition", "independence", "strategy"], route: "power"},
        {text: "Set limits to avoid exhausting myself trying to do everything.", traits: ["selfPreservation", "emotionalControl", "resilience"], route: "survival"}
    ]
},

{
    question: "Someone in a group has a useful idea but is too nervous to speak. What do you do?",
    answers: [
        {text: "Invite them to share and give them time to explain.", traits: ["compassion", "charisma", "leadership"], route: "compassion"},
        {text: "Ask a question that makes it easier for them to contribute.", traits: ["curiosity", "emotionalControl", "compassion"], route: "protection"},
        {text: "Give everyone a structured turn to speak.", traits: ["discipline", "leadership", "morality"], route: "duty"},
        {text: "Let them decide whether to speak for themselves.", traits: ["independence", "pragmatism", "emotionalControl"], route: "freedom"},
        {text: "Talk with them afterward if the group setting feels uncomfortable.", traits: ["compassion", "loyalty", "selfPreservation"], route: "protection"}
    ]
},

{
    question: "You're struggling to learn a new skill. What do you do?",
    answers: [
        {text: "Practice the basics regularly until they become natural.", traits: ["discipline", "determination", "resilience"], route: "duty"},
        {text: "Ask an experienced person to identify my mistakes.", traits: ["curiosity", "intelligence", "pragmatism"], route: "strategy"},
        {text: "Try a different learning method.", traits: ["independence", "curiosity", "resilience"], route: "freedom"},
        {text: "Attempt a difficult challenge before I feel fully ready.", traits: ["courage", "riskTaking", "impulsiveness"], route: "warrior"},
        {text: "Keep improving patiently without comparing myself to others.", traits: ["emotionalControl", "resilience", "determination"], route: "survival"}
    ]
},

{
    question: "You've saved for an important goal when an exciting opportunity appears. What do you do?",
    answers: [
        {text: "Stick to my plan rather than chase a temporary distraction.", traits: ["discipline", "determination", "selfPreservation"], route: "duty"},
        {text: "Compare its cost, time and long-term value before deciding.", traits: ["pragmatism", "strategy", "emotionalControl"], route: "strategy"},
        {text: "Take the chance; memorable experiences are worth some uncertainty.", traits: ["impulsiveness", "riskTaking", "independence"], route: "freedom"},
        {text: "Find a way to enjoy it without abandoning my goal.", traits: ["pragmatism", "discipline", "resilience"], route: "survival"},
        {text: "Invite someone close to share the experience.", traits: ["compassion", "loyalty", "charisma"], route: "protection"}
    ]
},

{
    question: "You receive a vague assignment, and nobody is available to explain it. What do you do?",
    answers: [
        {text: "Define success and work through the task step by step.", traits: ["discipline", "intelligence", "determination"], route: "duty"},
        {text: "Start reasonably and adjust as new information arrives.", traits: ["resilience", "pragmatism", "independence"], route: "freedom"},
        {text: "Explore several possible approaches before choosing one.", traits: ["curiosity", "strategy", "intelligence"], route: "strategy"},
        {text: "Ask people who have handled similar tasks for advice.", traits: ["loyalty", "curiosity", "pragmatism"], route: "compassion"},
        {text: "Choose the quickest plausible approach and correct it later if needed.", traits: ["impulsiveness", "riskTaking", "determination"], route: "warrior"}
    ]
},


/* ============================================================
CATEGORY 3 — FUN, CASUAL AND ENTERTAINING
QUESTIONS 37–50
============================================================ */

{
    question: "After a long journey, what would you order at a tavern?",
    answers: [
        {text: "A hearty roast to share with friends.", traits: ["loyalty", "compassion", "charisma"], route: "protection"},
        {text: "The mysterious house specialty.", traits: ["curiosity", "riskTaking", "impulsiveness"], route: "freedom"},
        {text: "A simple, reliable meal for tomorrow's journey.", traits: ["pragmatism", "discipline", "selfPreservation"], route: "survival"},
        {text: "Something expensive that I rarely get to enjoy.", traits: ["ambition", "pride", "riskTaking"], route: "power"},
        {text: "Whatever the local regulars recommend.", traits: ["curiosity", "charisma", "pragmatism"], route: "compassion"}
    ]
},

{
    question: "Which animal companion would you choose for your castle?",
    answers: [
        {text: "A loyal hound that follows me everywhere.", traits: ["loyalty", "compassion", "determination"], route: "protection"},
        {text: "A clever raven that can learn unusual tricks.", traits: ["curiosity", "intelligence", "discipline"], route: "strategy"},
        {text: "A spirited horse ready for adventure.", traits: ["independence", "courage", "riskTaking"], route: "freedom"},
        {text: "A watchful cat that comes and goes as it pleases.", traits: ["independence", "emotionalControl", "selfPreservation"], route: "survival"},
        {text: "A young direwolf to raise alongside me.", traits: ["loyalty", "resilience", "determination"], route: "duty"}
    ]
},

{
    question: "Which room would you choose for a week at an old castle?",
    answers: [
        {text: "A tower room overlooking the countryside.", traits: ["curiosity", "independence", "emotionalControl"], route: "freedom"},
        {text: "A warm room near the kitchens and conversation.", traits: ["charisma", "compassion", "loyalty"], route: "compassion"},
        {text: "A quiet chamber filled with old books and maps.", traits: ["intelligence", "curiosity", "discipline"], route: "strategy"},
        {text: "A comfortable room near the main hall and important guests.", traits: ["charisma", "ambition", "leadership"], route: "power"},
        {text: "A practical room near the courtyard and road.", traits: ["pragmatism", "independence", "selfPreservation"], route: "survival"}
    ]
},

{
    question: "You unexpectedly receive 100 gold dragons. What would you do with the money?",
    answers: [
        {text: "Invest it for a steady return.", traits: ["pragmatism", "discipline", "strategy"], route: "strategy"},
        {text: "Treat friends to a memorable evening.", traits: ["charisma", "impulsiveness", "riskTaking"], route: "freedom"},
        {text: "Buy supplies for future journeys.", traits: ["selfPreservation", "pragmatism", "determination"], route: "survival"},
        {text: "Fund something useful for my community.", traits: ["compassion", "leadership", "morality"], route: "protection"},
        {text: "Save most of it and buy one long-desired item.", traits: ["discipline", "selfPreservation", "independence"], route: "duty"}
    ]
},

{
    question: "Which tavern competition would you most enjoy?",
    answers: [
        {text: "An arm-wrestling contest to test my strength.", traits: ["courage", "pride", "determination"], route: "warrior"},
        {text: "A riddle contest that rewards clever answers.", traits: ["intelligence", "curiosity", "strategy"], route: "strategy"},
        {text: "A storytelling contest to win over the crowd.", traits: ["charisma", "curiosity", "riskTaking"], route: "freedom"},
        {text: "A team challenge that requires cooperation.", traits: ["leadership", "loyalty", "discipline"], route: "protection"},
        {text: "A dice game where one throw can change everything.", traits: ["riskTaking", "impulsiveness", "independence"], route: "freedom"}
    ]
},

{
    question: "What personal sigil would best represent you?",
    answers: [
        {text: "A mountain standing firm through every storm.", traits: ["resilience", "discipline", "determination"], route: "duty"},
        {text: "A falcon soaring freely above the clouds.", traits: ["independence", "ambition", "courage"], route: "freedom"},
        {text: "A clever fox with a knowing expression.", traits: ["intelligence", "manipulation", "curiosity"], route: "cunning"},
        {text: "An oak tree sheltering smaller plants.", traits: ["compassion", "loyalty", "leadership"], route: "protection"},
        {text: "A blazing comet crossing the night sky.", traits: ["riskTaking", "impulsiveness", "determination"], route: "warrior"}
    ]
},

{
    question: "A master offers to teach you one skill instantly. Which would you choose?",
    answers: [
        {text: "Masterful swordsmanship.", traits: ["courage", "discipline", "determination"], route: "warrior"},
        {text: "Understanding every language and ancient inscription.", traits: ["curiosity", "intelligence", "strategy"], route: "strategy"},
        {text: "Persuading people without pressuring them.", traits: ["charisma", "compassion", "manipulation"], route: "compassion"},
        {text: "Advanced healing skills to help the injured.", traits: ["compassion", "curiosity", "loyalty"], route: "protection"},
        {text: "Staying calm and focused under any pressure.", traits: ["emotionalControl", "resilience", "discipline"], route: "survival"}
    ]
},

{
    question: "Which attraction would draw you in at a busy market fair?",
    answers: [
        {text: "Curiosities collected from distant lands.", traits: ["curiosity", "independence", "riskTaking"], route: "freedom"},
        {text: "A timed puzzle-solving contest.", traits: ["intelligence", "discipline", "strategy"], route: "strategy"},
        {text: "A lively performance full of jokes and music.", traits: ["charisma", "impulsiveness", "compassion"], route: "compassion"},
        {text: "A demonstration of archery, swordplay or horsemanship.", traits: ["courage", "determination", "discipline"], route: "warrior"},
        {text: "A stall featuring local food and regional traditions.", traits: ["curiosity", "charisma", "pragmatism"], route: "protection"}
    ]
},

{
    question: "A storm traps you overnight at a roadside inn. How do you spend the evening?",
    answers: [
        {text: "Join the travelers and turn the delay into a lively night.", traits: ["charisma", "riskTaking", "impulsiveness"], route: "freedom"},
        {text: "Play a strategy game with anyone willing to challenge me.", traits: ["intelligence", "discipline", "strategy"], route: "strategy"},
        {text: "Listen to stories from people who have traveled far.", traits: ["curiosity", "compassion", "intelligence"], route: "compassion"},
        {text: "Rest, repair my belongings and prepare for tomorrow.", traits: ["discipline", "pragmatism", "selfPreservation"], route: "survival"},
        {text: "Find something fun to do with my companions.", traits: ["loyalty", "charisma", "compassion"], route: "protection"}
    ]
},

{
    question: "You must travel across Westeros for a week. Which journey sounds best?",
    answers: [
        {text: "Horseback, with freedom to explore along the way.", traits: ["independence", "curiosity", "riskTaking"], route: "freedom"},
        {text: "By ship, discovering coastlines and unfamiliar ports.", traits: ["curiosity", "pragmatism", "emotionalControl"], route: "strategy"},
        {text: "With a well-organized caravan and planned supplies.", traits: ["discipline", "selfPreservation", "strategy"], route: "survival"},
        {text: "With close companions who make the journey enjoyable.", traits: ["loyalty", "charisma", "compassion"], route: "protection"},
        {text: "By the fastest route so I can start exploring sooner.", traits: ["determination", "impulsiveness", "ambition"], route: "warrior"}
    ]
},

{
    question: "What would you most enjoy making for a castle-wide creative challenge?",
    answers: [
        {text: "A working miniature bridge with clever engineering.", traits: ["intelligence", "curiosity", "discipline"], route: "strategy"},
        {text: "A sturdy tool people could use every day.", traits: ["pragmatism", "determination", "discipline"], route: "duty"},
        {text: "A colorful decoration to make a room more welcoming.", traits: ["charisma", "compassion", "curiosity"], route: "compassion"},
        {text: "A daring design nobody has tried before.", traits: ["independence", "riskTaking", "impulsiveness"], route: "freedom"},
        {text: "A clever device with a surprising hidden mechanism.", traits: ["intelligence", "manipulation", "curiosity"], route: "cunning"}
    ]
},

{
    question: "What harmless tradition would you invent for your friends?",
    answers: [
        {text: "An annual challenge to beat our previous achievements.", traits: ["determination", "discipline", "resilience"], route: "warrior"},
        {text: "A surprise gift exchange.", traits: ["compassion", "curiosity", "charisma"], route: "compassion"},
        {text: "An evening when everyone teaches the group something.", traits: ["curiosity", "leadership", "loyalty"], route: "protection"},
        {text: "A ridiculous contest with changing rules.", traits: ["impulsiveness", "riskTaking", "independence"], route: "freedom"},
        {text: "A relaxed gathering to share stories from the week.", traits: ["loyalty", "emotionalControl", "compassion"], route: "protection"}
    ]
},

{
    question: "You can give yourself a humorous castle title for one day. Which suits you?",
    answers: [
        {text: "Keeper of the Endless Plans.", traits: ["strategy", "discipline", "intelligence"], route: "strategy"},
        {text: "Champion of Questionable Adventures.", traits: ["riskTaking", "impulsiveness", "courage"], route: "warrior"},
        {text: "Protector of Snacks and Good Company.", traits: ["compassion", "loyalty", "charisma"], route: "protection"},
        {text: "Master of Finding a Better Way.", traits: ["curiosity", "pragmatism", "independence"], route: "freedom"},
        {text: "Guardian of the Emergency Supplies.", traits: ["selfPreservation", "discipline", "pragmatism"], route: "survival"}
    ]
},

{
    question: "At a royal tournament, you're invited to compete against experienced knights. What appeals to you most?",
    answers: [
        {text: "Prove my ability through discipline and skill.", traits: ["discipline", "determination", "courage"], route: "warrior"},
        {text: "Meet influential people and build valuable connections.", traits: ["charisma", "ambition", "strategy"], route: "power"},
        {text: "Study the competitors and identify their weaknesses.", traits: ["intelligence", "curiosity", "strategy"], route: "strategy"},
        {text: "Take chances and make the crowd remember me.", traits: ["charisma", "riskTaking", "impulsiveness"], route: "freedom"},
        {text: "Decline if the prize isn't worth the risk of injury.", traits: ["selfPreservation", "pragmatism", "emotionalControl"], route: "survival"}
    ]
}

];


/* ============================================================
GAME OF THRONES MALE PERSONALITY QUIZ
LOGIC, VALIDATION AND CHARACTER MATCHING
============================================================ */


/* ============================================================
EXPECTED CONFIGURATION
============================================================ */

const EXPECTED_CHARACTER_COUNT = 33;
const EXPECTED_QUESTION_COUNT = 50;
const EXPECTED_TRAIT_COUNT = 23;
const EXPECTED_ROUTE_COUNT = 10;
const EXPECTED_ANSWERS_PER_QUESTION = 5;
const EXPECTED_TRAITS_PER_ANSWER = 3;


/* ============================================================
UTILITY — CLAMP
============================================================ */

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


/* ============================================================
QUESTION OPPORTUNITY COLLECTION

Each question contributes at most one opportunity per trait
and one opportunity per route, regardless of how many answer
options contain them.
============================================================ */

function collectQuestionOpportunities(question) {

    const traits = new Set();
    const routes = new Set();

    if (!Array.isArray(question?.answers)) {

        return {
            traits,
            routes
        };

    }

    const validTraits =
        new Set(TRAIT_KEYS);

    const validRoutes =
        new Set(Object.keys(ROUTES));


    question.answers.forEach(answer => {

        if (!answer || typeof answer !== "object") {
            return;
        }


        if (Array.isArray(answer.traits)) {

            answer.traits.forEach(trait => {

                if (validTraits.has(trait)) {
                    traits.add(trait);
                }

            });

        }


        if (
            typeof answer.route === "string" &&
            validRoutes.has(answer.route)
        ) {

            routes.add(answer.route);

        }

    });


    return {
        traits,
        routes
    };

}


/* ============================================================
VALIDATE DATA
============================================================ */

function validateData() {

    const errors = [];

    const characterIds =
        Object.keys(CHARACTERS);

    const traitKeys =
        new Set(TRAIT_KEYS);

    const routeIds =
        Object.keys(ROUTES);

    const questionList =
        Array.isArray(questions)
            ? questions
            : [];


    /* --------------------------------------------------------
    CONFIGURATION COUNTS
    -------------------------------------------------------- */

    if (!Array.isArray(questions)) {

        errors.push(
            "Questions must be defined as an array."
        );

    }


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
        questionList.length !==
        EXPECTED_QUESTION_COUNT
    ) {

        errors.push(
            `Expected ${EXPECTED_QUESTION_COUNT} questions, ` +
            `found ${questionList.length}.`
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


    if (traitKeys.size !== TRAIT_KEYS.length) {

        errors.push(
            "TRAIT_KEYS contains duplicate trait identifiers."
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


    if (
        routeIds.length !==
        EXPECTED_ROUTE_COUNT
    ) {

        errors.push(
            `Expected ${EXPECTED_ROUTE_COUNT} routes, ` +
            `found ${routeIds.length}.`
        );

    }


    if (
        Object.keys(CHARACTER_ROUTES).length !==
        characterIds.length
    ) {

        errors.push(
            "CHARACTER_ROUTES count does not match CHARACTERS."
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


    /* Detect extra trait labels */

    Object.keys(TRAITS).forEach(trait => {

        if (!traitKeys.has(trait)) {

            errors.push(
                `Unexpected trait label "${trait}".`
            );

        }

    });


    /* Detect extra trait weights */

    Object.keys(TRAIT_WEIGHTS).forEach(trait => {

        if (!traitKeys.has(trait)) {

            errors.push(
                `Unexpected trait weight "${trait}".`
            );

        }

    });


    /* --------------------------------------------------------
    ROUTE DEFINITIONS
    -------------------------------------------------------- */

    routeIds.forEach(route => {

        if (
            typeof ROUTES[route] !== "string" ||
            !ROUTES[route].trim()
        ) {

            errors.push(
                `Missing or invalid display label for route "${route}".`
            );

        }

    });


    /* --------------------------------------------------------
    QUESTION VALIDATION
    -------------------------------------------------------- */

    const traitQuestionCoverage =
        Object.fromEntries(
            TRAIT_KEYS.map(trait => [trait, 0])
        );

    const routeQuestionCoverage =
        Object.fromEntries(
            routeIds.map(route => [route, 0])
        );


    questionList.forEach((question, qi) => {

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


        const questionTraits = new Set();
        const questionRoutes = new Set();


        question.answers.forEach((answer, ai) => {

            const prefix =
                `Q${qi + 1} A${ai + 1}`;


            /* Validate answer object before reading properties */

            if (
                !answer ||
                typeof answer !== "object" ||
                Array.isArray(answer)
            ) {

                errors.push(
                    `${prefix}: answer must be a valid object.`
                );

                return;

            }


            /* Validate answer text */

            if (
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
                    `${prefix}: invalid route "${answer.route}".`
                );

            } else {

                questionRoutes.add(answer.route);

            }


            /* Validate trait array */

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

                } else {

                    questionTraits.add(trait);

                }

            });

        });


        /* Count each available trait and route once per question */

        questionTraits.forEach(trait => {

            traitQuestionCoverage[trait]++;

        });

        questionRoutes.forEach(route => {

            routeQuestionCoverage[route]++;

        });

    });


    /* --------------------------------------------------------
    TRAIT AND ROUTE COVERAGE
    -------------------------------------------------------- */

    TRAIT_KEYS.forEach(trait => {

        if (
            traitQuestionCoverage[trait] === 0
        ) {

            errors.push(
                `Trait "${trait}" is not used by any valid answer.`
            );

        }

    });


    routeIds.forEach(route => {

        if (
            routeQuestionCoverage[route] === 0
        ) {

            errors.push(
                `Route "${route}" is not used by any valid answer.`
            );

        }

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


        if (
            typeof character.image !== "string" ||
            !character.image.trim()
        ) {

            errors.push(
                `${id}: missing or invalid image path.`
            );

        }


        if (
            typeof character.description !== "string" ||
            !character.description.trim()
        ) {

            errors.push(
                `${id}: missing or invalid character description.`
            );

        }


        const characterTraits =
            character.traits || {};


        /* Validate all required traits */

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


        /* Detect unexpected trait keys */

        Object.keys(characterTraits).forEach(trait => {

            if (!traitKeys.has(trait)) {

                errors.push(
                    `${id}: unexpected trait "${trait}".`
                );

            }

        });


        /* Validate character route profile */

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


    /* --------------------------------------------------------
    CHARACTER-ROUTE MAP VALIDATION
    -------------------------------------------------------- */

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
            "Game of Thrones Male Personality Quiz validation errors:",
            errors
        );

        errors.forEach(error => {
            console.error(error);
        });

        return false;

    }


    console.log(
        "Game of Thrones Male Personality Quiz validated: " +
        `${questionList.length} questions, ` +
        `${characterIds.length} characters, ` +
        `${TRAIT_KEYS.length} traits, ` +
        `${routeIds.length} routes.`
    );

    return true;

}


/* ============================================================
RUN VALIDATION
============================================================ */

if (!validateData()) {

    throw new Error(
        "Game of Thrones Male Personality Quiz data validation failed."
    );

}


/* ============================================================
TRAIT AND ROUTE OPPORTUNITY NORMALIZATION

Global opportunity:
The number of questions where a trait or route appears
in at least one answer.

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

    const {
        traits,
        routes
    } = collectQuestionOpportunities(question);


    traits.forEach(trait => {

        TRAIT_OPPORTUNITY[trait]++;

    });


    routes.forEach(route => {

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



/* ============================================================
NORMALIZE SELECTION PREFERENCE

Scores answers by how strongly they differ from random
selection. Expected random selection is approximately 50.

One standard deviation above expectation adds 15 points.
One standard deviation below expectation removes 15 points.
============================================================ */

function normalizeSelectionPreference(
    rawCount,
    opportunityCount,
    expectedCount
) {
    const opportunities =
        Number(opportunityCount) || 0;

    const observed =
        Number(rawCount) || 0;

    const expected =
        Number(expectedCount) || 0;

    if (opportunities <= 0) {
        return 50;
    }

    const expectedRate = clamp(
        expected / opportunities,
        0,
        1
    );

    /*
    No measurable preference signal exists when every
    available answer either includes or excludes the trait.
    */
    if (
        expectedRate <= 0 ||
        expectedRate >= 1
    ) {
        return 50;
    }

    /*
    Approximate the variance of random selections.
    This uses the aggregate expected rate across questions.
    */
    const expectedVariance =
        opportunities *
        expectedRate *
        (1 - expectedRate);

    if (
        !Number.isFinite(expectedVariance) ||
        expectedVariance <= 0
    ) {
        return 50;
    }

    const standardDeviation =
        Math.sqrt(expectedVariance);

    const zScore =
        (observed - expected) /
        standardDeviation;

    const score =
        50 + (15 * zScore);

    return Math.round(
        clamp(score, 0, 100)
    );
}

/* ============================================================
CALCULATE NORMALIZED ROUTE PROFILE
============================================================ */

function calculateRouteProfile(
    personality,
    opportunityCounts,
    expectedCounts
) {
    const result = {};

    Object.keys(ROUTES).forEach(route => {
        result[route] = normalizeSelectionPreference(
            personality?.routeRaw?.[route] ?? 0,
            opportunityCounts?.[route] ?? 0,
            expectedCounts?.[route] ?? 0
        );
    });

    return result;
}


/* ============================================================
CALCULATE PERSONALITY PROFILE

Trait and route profiles are calibrated against the options
available in the questions the user actually answered.
============================================================ */

function calculatePersonality(answerIndexes) {
    const raw = {};
    const maxScores = {};
    const expectedTraitScores = {};

    const routeRaw = {};
    const routeMaxScores = {};
    const expectedRouteScores = {};

    const selections = Array.isArray(answerIndexes)
        ? answerIndexes
        : [];

    TRAIT_KEYS.forEach(trait => {
        raw[trait] = 0;
        maxScores[trait] = 0;
        expectedTraitScores[trait] = 0;
    });

    Object.keys(ROUTES).forEach(route => {
        routeRaw[route] = 0;
        routeMaxScores[route] = 0;
        expectedRouteScores[route] = 0;
    });

    let answered = 0;

    questions.forEach((question, questionIndex) => {
        const answerIndex = selections[questionIndex];

        if (!isValidAnswerIndex(question, answerIndex)) {
            return;
        }

        const answer = question.answers[answerIndex];
        const answerCount = question.answers.length;

        answered++;

        const {
            traits: availableTraits,
            routes: availableRoutes
        } = collectQuestionOpportunities(question);

        /*
         * Count how many answer choices include each trait
         * or route. This establishes the expected selection
         * rate for this question.
         */
        const traitOptionCounts = {};
        const routeOptionCounts = {};

        question.answers.forEach(option => {
            const optionTraits = new Set(
                Array.isArray(option?.traits)
                    ? option.traits
                    : []
            );

            optionTraits.forEach(trait => {
                if (
                    Object.prototype.hasOwnProperty.call(
                        traitOptionCounts,
                        trait
                    )
                ) {
                    traitOptionCounts[trait]++;
                } else {
                    traitOptionCounts[trait] = 1;
                }
            });

            const route = option?.route;

            if (typeof route === "string") {
                routeOptionCounts[route] =
                    (routeOptionCounts[route] || 0) + 1;
            }
        });

        /*
         * Each available trait or route receives one
         * opportunity per answered question.
         */
        availableTraits.forEach(trait => {
            maxScores[trait]++;

            expectedTraitScores[trait] +=
                (traitOptionCounts[trait] || 0) / answerCount;
        });

        availableRoutes.forEach(route => {
            routeMaxScores[route]++;

            expectedRouteScores[route] +=
                (routeOptionCounts[route] || 0) / answerCount;
        });

        /*
         * Count traits selected by the user's chosen answer.
         */
        const selectedTraits = new Set(answer.traits || []);

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

        /*
         * Count the selected route.
         */
        if (
            answer.route &&
            Object.prototype.hasOwnProperty.call(
                routeRaw,
                answer.route
            )
        ) {
            routeRaw[answer.route]++;
        }
    });

    /*
     * Normalize trait scores against their expected rates.
     */
    const profile = {};

    TRAIT_KEYS.forEach(trait => {
        profile[trait] = normalizeSelectionPreference(
            raw[trait],
            maxScores[trait],
            expectedTraitScores[trait]
        );
    });

    /*
     * Normalize route scores using the same principle.
     */
    const routeProfile = calculateRouteProfile(
        { routeRaw },
        routeMaxScores,
        expectedRouteScores
    );

    const completion = questions.length > 0
        ? Math.round(
            (answered / questions.length) * 100
        )
        : 0;

    return {
        raw,
        maxScores,
        expectedTraitScores,
        profile,
        routeRaw,
        routeMaxScores,
        expectedRouteScores,
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
CORE TRAIT SELECTION

Uses each character's four highest trait values, including
characters whose defining scores do not reach 85.

These traits are excluded from the secondary and minor fit
calculations to prevent the same trait being counted twice
in those separate score components.
============================================================ */

function getCoreTraitEntries(character) {

    return TRAIT_KEYS
        .map((trait, index) => ({

            trait,

            index,

            value:
                getCharacterTraitValue(
                    character,
                    trait
                )

        }))
        .sort((a, b) => {

            if (b.value !== a.value) {
                return b.value - a.value;
            }

            return a.index - b.index;

        })
        .slice(0, 4);

}


/* ============================================================
CORE TRAIT FIT
============================================================ */

function calculateCoreFit(
    character,
    profile
) {

    const coreTraits =
        getCoreTraitEntries(character);


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
                    profile[item.trait] ?? 0,
                    item.value
                ) * weight;


            weightTotal += weight;

        }
    );


    return weightTotal > 0
        ? total / weightTotal
        : 0;

}


/* ============================================================
SECONDARY FIT

Character traits scored from 50–84, excluding the four
traits already used by the core fit.
============================================================ */

function calculateSecondaryFit(
    character,
    profile
) {

    const coreTraitKeys =
        new Set(
            getCoreTraitEntries(character)
                .map(item => item.trait)
        );


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
                    !coreTraitKeys.has(item.trait) &&
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
                profile[item.trait] ?? 0,
                item.value
            );

    });


    return total /
        secondaryTraits.length;

}


/* ============================================================
MINOR FIT

Character traits scored above 0 and below 50, excluding
traits already used by the core fit.
============================================================ */

function calculateMinorFit(
    character,
    profile
) {

    const coreTraitKeys =
        new Set(
            getCoreTraitEntries(character)
                .map(item => item.trait)
        );


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
                    !coreTraitKeys.has(item.trait) &&
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
                profile[item.trait] ?? 0,
                item.value
            );

    });


    return total /
        minorTraits.length;

}


/* ============================================================
OVERALL TRAIT FIT

Weighted similarity across all 23 personality traits.
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
                profile[trait] ?? 0,
                getCharacterTraitValue(
                    character,
                    trait
                )
            ) * weight;


        weightTotal += weight;

    });


    return weightTotal > 0
        ? total / weightTotal
        : 0;

}


/* ============================================================
CONTRADICTION PENALTY

Penalizes a match if the user's strongest above-average
traits are unusually weak in the character's profile.

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
    COLLECT TRAIT VALUES
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
    CALCULATE USER AVERAGE
    -------------------------------------------------------- */

    const averageUserValue =

        traits.reduce(
            (sum, item) =>
                sum + item.userValue,
            0
        ) / traits.length;


    /* --------------------------------------------------------
    IDENTIFY FIVE STRONGEST ABOVE-AVERAGE TRAITS
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


    if (!strongestTraits.length) {
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
                clamp(profile[route] ?? 0) *
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
                    clamp(profile[route] ?? 0),
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

Core trait fit:      45%
Secondary trait fit: 15%
Minor trait fit:      5%
Primary route fit:   20%
Secondary route fit: 10%
Overall trait fit:    5%

Contradiction penalty is subtracted afterwards.
============================================================ */

function calculateCharacterMatch(
    characterId,
    personality
) {

    const character =
        CHARACTERS[characterId];


    if (
        !character ||
        !personality ||
        !personality.profile
    ) {

        return 0;

    }


    const profile =
        personality.profile;


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

Returns all characters sorted by match score, highest first.
Exact ties are resolved alphabetically for determinism.
============================================================ */

function calculateAllCharacterMatches(
    personality
) {

    if (
        !personality ||
        !personality.profile
    ) {

        return [];

    }


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

Legacy helper retained for compatibility.

Elements:
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
        ranking.slice(
            5,
            ranking.length - 5
        );


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
    MIDDLE THIRTEEN TRAITS
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
GAME OF THRONES MALE PERSONALITY QUIZ
============================================================ */

let currentQuestion = 0;
let answerIndexes = [];
let latestPersonality = null;
let latestMatches = [];

/* Prevent stale automatic-advance timers. */
let autoAdvanceTimer = null;

const AUTO_ADVANCE_DELAY = 250;


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
AUTOMATIC-ADVANCE TIMER
============================================================ */

function clearAutoAdvanceTimer() {
    if (autoAdvanceTimer !== null) {
        window.clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }
}

function scheduleAutoAdvance(questionAtSelection, selectedAnswerAtSelection) {
    clearAutoAdvanceTimer();

    autoAdvanceTimer = window.setTimeout(() => {
        autoAdvanceTimer = null;

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
    }, AUTO_ADVANCE_DELAY);
}



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

    if (
        !question ||
        !Array.isArray(question.answers)
    ) {
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

    if (
        !Array.isArray(questions) ||
        questions.length === 0
    ) {
        return false;
    }

    return questions.every(
        (question, index) => {

            if (
                !question ||
                !Array.isArray(question.answers) ||
                question.answers.length === 0
            ) {
                return false;
            }

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


    if (questionNumberElement) {

        questionNumberElement.textContent =
            `Question ${
                currentQuestion + 1
            } of ${
                questions.length
            }`;

    }


    if (progressTextElement) {

        progressTextElement.textContent =
            "GOT Personality Test";

    }


    if (progressBarElement) {

        const percent =
            (
                (currentQuestion + 1) /
                questions.length
            ) * 100;

        progressBarElement.style.width =
            `${percent}%`;

    }


    if (questionElement) {

        questionElement.textContent =
            question.question;

    }


    if (answersElement) {

        answersElement.innerHTML = "";


        const selectedIndex =
            getSelectedIndex();


        question.answers.forEach(
            (answer, index) => {

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "answer";

                button.textContent =
                    answer.text;


                if (
                    selectedIndex === index
                ) {

                    button.classList.add(
                        "selected"
                    );

                }


                button.addEventListener(
                    "click",
                    () =>
                        selectAnswer(index)
                );


                answersElement.appendChild(
                    button
                );

            }
        );

    }


    updateNavigation();

}


/* ============================================================
ANSWER SELECTION
============================================================ */

function selectAnswer(
    answerIndex
) {

    const question =
        questions[currentQuestion];

    if (!question) {
        return;
    }


    if (
        !Number.isInteger(
            answerIndex
        ) ||
        !question.answers[
            answerIndex
        ]
    ) {
        return;
    }


    answerIndexes[
        currentQuestion
    ] = answerIndex;


    const buttons =
        answersElement?.querySelectorAll(
            ".answer"
        ) || [];


    buttons.forEach(
        (button, index) => {

            button.classList.toggle(
                "selected",
                index === answerIndex
            );

        }
    );


    updateNavigation();


    /*
       Same automatic advance behavior
       as the working TWD quiz.
    */

    const questionAtSelection =
        currentQuestion;

    const selectedAnswerAtSelection =
        answerIndex;


    setTimeout(
        () => {

            const currentSavedAnswer =
                answerIndexes[
                    questionAtSelection
                ];


            if (
                currentQuestion ===
                    questionAtSelection &&

                currentSavedAnswer ===
                    selectedAnswerAtSelection &&

                currentQuestion <
                    questions.length - 1
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

    if (
        getSelectedIndex() === null
    ) {
        return;
    }


    if (
        currentQuestion ===
        questions.length - 1
    ) {

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

    if (
        currentQuestion <= 0
    ) {
        return;
    }


    currentQuestion--;

    renderQuestion();

}

/* ============================================================
NEXT
============================================================ */

function goNext() {

    if (getSelectedIndex() === null) {
        return;
    }

    clearAutoAdvanceTimer();


    if (currentQuestion >= questions.length - 1) {

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

    clearAutoAdvanceTimer();

    currentQuestion--;

    renderQuestion();

}

/* ============================================================
SHUFFLE QUESTIONS — FISHER-YATES
============================================================ */

function shuffleQuestionsInPlace(questionList) {

    for (
        let i = questionList.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [
            questionList[i],
            questionList[j]
        ] = [
            questionList[j],
            questionList[i]
        ];

    }

}

/* ============================================================
START QUIZ
Shuffle questions at the beginning of every attempt.
============================================================ */

function startQuiz() {

    clearAutoAdvanceTimer();

    /* Randomize all 50 questions. */
    shuffleQuestionsInPlace(questions);

    currentQuestion = 0;

    answerIndexes =
        new Array(questions.length);

    latestPersonality = null;

    latestMatches = [];

    if (submitButton) {

        submitButton.disabled = false;

        submitButton.textContent =
            "SEE MY RESULT";

    }

    homeInfo?.classList.add("hidden");

    suggestionsCard?.classList.add("hidden");

    showScreen(quizScreen);

    renderQuestion();

}

/* ============================================================
SUBMIT QUIZ
GAME OF THRONES MALE PERSONALITY QUIZ
============================================================ */

function submitQuiz() {

    clearAutoAdvanceTimer();


    /*
    Do not calculate or display a result unless every question
    has a valid selected answer.
    */

    if (!allQuestionsAnswered()) {

        const firstMissing =
            questions.findIndex(
                (question, index) => {

                    if (
                        !question ||
                        !Array.isArray(question.answers)
                    ) {
                        return true;
                    }

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
        Calculate the normalized personality and route profiles.
        */

        latestPersonality =
            calculatePersonality(answerIndexes);


        /*
        Match the personality profile against all 33 characters.
        */

        latestMatches =
            calculateAllCharacterMatches(
                latestPersonality
            );


        if (
            !Array.isArray(latestMatches) ||
            latestMatches.length === 0 ||
            !latestMatches[0]
        ) {

            throw new Error(
                "No Game of Thrones male character matches returned."
            );

        }


        /* Render results and display the result screen. */

        renderResults();

        showScreen(resultScreen);


        /* Restore the informational content below the quiz. */

        homeInfo?.classList.remove("hidden");

        suggestionsCard?.classList.remove("hidden");


    } catch (error) {

        console.error(
            "Unable to calculate Game of Thrones male quiz result:",
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
RESULT RENDERING
============================================================ */

function renderResults() {

    const winner =
        latestMatches[0];

    if (!winner) {

        throw new Error(
            "Cannot render results because the winning match is missing."
        );

    }


    /* --------------------------------------------------------
    RESULT TITLE
    -------------------------------------------------------- */

    if (resultTitleElement) {

        resultTitleElement.textContent =
            `You are most like ${winner.name}`;

    }


    /* --------------------------------------------------------
    RESULT DESCRIPTION
    -------------------------------------------------------- */

    if (resultDescriptionElement) {

        const characterDescription =
            winner.character?.description ||
            CHARACTERS[winner.id]?.description;

        resultDescriptionElement.textContent =
            characterDescription ||
            `${winner.name} ${QUIZ_CONFIG.resultDescription || ""}`;

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


        /* Remove handlers left over from an earlier result. */

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
    Displays the five strongest traits, five weakest traits,
    and the complete 23-trait profile.
    -------------------------------------------------------- */

    if (latestPersonality?.profile) {

        renderTraitResults(
            latestPersonality.profile
        );

    } else {

        console.warn(
            "The personality profile is missing from the quiz result."
        );

    }

}


/* ============================================================
TOP THREE CHARACTER MATCHES
============================================================ */

function renderTopMatches(matches) {

    if (!topMatchesElement) {
        return;
    }


    topMatchesElement.innerHTML = "";


    if (!Array.isArray(matches)) {
        return;
    }


    matches.slice(0, 3).forEach(
        (match, index) => {

            if (!match) {
                return;
            }

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

            image.decoding = "async";


            const imagePath =
                match.image ||
                match.character?.image ||
                "";


            if (imagePath) {

                image.onerror = function () {

                    image.removeAttribute("src");

                    image.style.display = "none";


                    console.warn(
                        "Top match image failed to load:",
                        imagePath
                    );

                };

                image.src = imagePath;

            } else {

                image.style.display = "none";

            }


            /* Character name */

            const name =
                document.createElement("div");

            name.className = "match-name";

            name.textContent =
                match.name || "Unknown character";


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
23 PERSONALITY TRAITS
============================================================ */

function renderTraitResults(profile) {

    if (!profile || typeof profile !== "object") {
        return;
    }


    const ranking =
        TRAIT_KEYS
            .map(trait => ({

                trait,

                label: TRAITS[trait] || trait,

                value: clamp(
                    profile[trait] ?? 0
                )

            }))
            .sort(
                (a, b) =>
                    b.value - a.value ||
                    a.label.localeCompare(b.label)
            );


    /* Strongest five traits */

    const strongest =
        ranking.slice(0, 5);


    /* Weakest five traits */

    const lowest =
        ranking
            .slice(-5)
            .reverse();


    /*
    Display the strongest traits, weakest traits,
    and the complete profile.
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
                `${Math.round(clamp(trait.value))}%`;


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
                `${Math.round(clamp(trait.value))}%`;


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

    clearAutoAdvanceTimer();

    currentQuestion = 0;

    answerIndexes = [];

    latestPersonality = null;

    latestMatches = [];


    if (submitButton) {

        submitButton.disabled = false;

        submitButton.textContent =
            "SEE MY RESULT";

    }


    /* Keep suggested quizzes hidden on the start screen. */

    suggestionsCard?.classList.add("hidden");


    /* Restore informational content. */

    homeInfo?.classList.remove("hidden");


    showScreen(startScreen);

}


/* ============================================================
COPY TEXT
============================================================ */

async function copyText(text) {

    /* Modern Clipboard API */

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

    textarea.setAttribute(
        "aria-hidden",
        "true"
    );

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


/* ============================================================
SHARE RESULT
============================================================ */

async function shareResult() {

    const winner =
        latestMatches[0];

    if (!winner) {
        return;
    }


    const text =
        `I got ${winner.name} in the ${QUIZ_CONFIG.title}!`;


    const url =
        window.location.href;


    /* Native share dialog */

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

            /*
            If native sharing fails for another reason,
            continue to the clipboard fallback.
            */

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
        `I just took the ${QUIZ_CONFIG.title}.`;


    if (winner) {

        text += ` I got ${winner.name}!`;

    }


    text +=
        " Which Game of Thrones character will you get?";


    const url =
        window.location.href;


    /* Native share dialog */

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

The logic section already runs validateData().
Do not run validation a second time here.
============================================================ */

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

    /*
    Keep the existing HTML menu state as the starting state.
    The toggle updates both the hidden property and ARIA state.
    */

    function setSiteMenuOpen(isOpen) {

        siteMenu.hidden = !isOpen;

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );

    }


    menuToggle.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            const isOpen =
                menuToggle.getAttribute("aria-expanded") === "true";

            setSiteMenuOpen(!isOpen);

        }
    );


    /* Close the menu when clicking outside. */

    document.addEventListener(
        "click",
        function(event) {

            const isOpen =
                menuToggle.getAttribute("aria-expanded") === "true";

            if (
                isOpen &&
                !siteMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                setSiteMenuOpen(false);

            }

        }
    );


    /* Close the menu after choosing a navigation link. */

    siteMenu
        .querySelectorAll("a")
        .forEach(
            function(link) {

                link.addEventListener(
                    "click",
                    function() {

                        setSiteMenuOpen(false);

                    }
                );

            }
        );

}

/*
============================================================
GAME OF THRONES MALE PERSONALITY QUIZ
UNIFIED SIMULATION / DIAGNOSTIC TOOLS

Development only. Does NOT run automatically.

Browser console:
    runGOTSimulation(100000)
    runGOTSimulation(100000, 12345)

    runGOTPenaltyComparison(25000)
    runGOTPenaltyComparison(25000, 12345)

Results are saved to:
    window.GOT_SIMULATION_RESULTS
    window.GOT_PENALTY_COMPARISON

Remove this entire block before production release.
============================================================
*/

(function registerGOTSimulationTools() {

    "use strict";

    const EXPECTED_QUESTION_COUNT = 50;
    const EXPECTED_CHARACTER_COUNT = 33;
    const EXPECTED_TRAIT_COUNT = 23;
    const EXPECTED_ROUTE_COUNT = 10;
    const EXPECTED_ANSWERS_PER_QUESTION = 5;

    const DEFAULT_SIMULATION_SEED = 20261006;


    /*
    ========================================================
    SEEDED RANDOM NUMBER GENERATOR
    ========================================================
    */

    function createGOTRandom(seedValue = DEFAULT_SIMULATION_SEED) {

        let seed = Math.trunc(
            Number(seedValue) || DEFAULT_SIMULATION_SEED
        );

        return function random() {

            seed |= 0;

            seed = (
                seed + 0x6D2B79F5
            ) | 0;

            let t = Math.imul(
                seed ^ (seed >>> 15),
                1 | seed
            );

            t += Math.imul(
                t ^ (t >>> 7),
                61 | t
            ) ^ t;

            return (
                (t ^ (t >>> 14)) >>> 0
            ) / 4294967296;

        };

    }


    /*
    ========================================================
    SHARED VALIDATION
    ========================================================
    */

    function validateGOTSimulationSetup() {

        const requiredFunctions = [
            "calculatePersonality",
            "calculateAllCharacterMatches",
            "calculateCoreFit",
            "calculateSecondaryFit",
            "calculateMinorFit",
            "calculateOverallTraitFit",
            "calculateCharacterRouteFit",
            "calculateContradictionPenalty",
            "getCharacterTraitValue",
            "clamp"
        ];

        const missingFunctions = requiredFunctions.filter(
            function (functionName) {
                return typeof window[functionName] === "undefined";
            }
        );

        /*
        Top-level function declarations are normally accessible
        through window in a classic browser script. The additional
        typeof checks below also verify the functions directly in
        this script's lexical scope.
        */

        const unavailableFunctions = requiredFunctions.filter(
            function (functionName) {

                try {

                    switch (functionName) {
                        case "calculatePersonality":
                            return typeof calculatePersonality !== "function";

                        case "calculateAllCharacterMatches":
                            return typeof calculateAllCharacterMatches !== "function";

                        case "calculateCoreFit":
                            return typeof calculateCoreFit !== "function";

                        case "calculateSecondaryFit":
                            return typeof calculateSecondaryFit !== "function";

                        case "calculateMinorFit":
                            return typeof calculateMinorFit !== "function";

                        case "calculateOverallTraitFit":
                            return typeof calculateOverallTraitFit !== "function";

                        case "calculateCharacterRouteFit":
                            return typeof calculateCharacterRouteFit !== "function";

                        case "calculateContradictionPenalty":
                            return typeof calculateContradictionPenalty !== "function";

                        case "getCharacterTraitValue":
                            return typeof getCharacterTraitValue !== "function";

                        case "clamp":
                            return typeof clamp !== "function";

                        default:
                            return true;
                    }

                } catch (error) {
                    return true;
                }

            }
        );

        if (
            !Array.isArray(questions) ||
            !CHARACTERS ||
            !Array.isArray(TRAIT_KEYS) ||
            !TRAITS ||
            !ROUTES ||
            typeof calculatePersonality !== "function" ||
            typeof calculateAllCharacterMatches !== "function"
        ) {

            console.error(
                "GOT simulation cannot start. " +
                "Quiz data or the matching engine is unavailable."
            );

            return false;

        }

        if (unavailableFunctions.length > 0) {

            console.error(
                "GOT simulation cannot start. Required functions are missing:",
                unavailableFunctions
            );

            return false;

        }

        const characterIds = Object.keys(CHARACTERS);
        const routeIds = Object.keys(ROUTES);

        const structure = {
            questions: questions.length,
            characters: characterIds.length,
            traits: TRAIT_KEYS.length,
            routes: routeIds.length
        };

        const structureIsValid =
            structure.questions === EXPECTED_QUESTION_COUNT &&
            structure.characters === EXPECTED_CHARACTER_COUNT &&
            structure.traits === EXPECTED_TRAIT_COUNT &&
            structure.routes === EXPECTED_ROUTE_COUNT;

        if (!structureIsValid) {

            console.error(
                "Unexpected GOT quiz structure. Expected 50 questions, " +
                "33 characters, 23 traits, and 10 routes.",
                structure
            );

            return false;

        }

        for (let q = 0; q < questions.length; q++) {

            const question = questions[q];

            if (
                !question ||
                !Array.isArray(question.answers) ||
                question.answers.length !== EXPECTED_ANSWERS_PER_QUESTION
            ) {

                console.error(
                    `Question ${q + 1} does not have exactly five answers.`
                );

                return false;

            }

        }

        return true;

    }


    /*
    ========================================================
    RANKING VALIDATION
    ========================================================
    */

    function getValidatedGOTMatches(personality, simulationNumber) {

        const matches = calculateAllCharacterMatches(personality);
        const expectedIds = Object.keys(CHARACTERS);

        if (
            !Array.isArray(matches) ||
            matches.length !== expectedIds.length
        ) {

            throw new Error(
                `Simulation ${simulationNumber}: character matcher ` +
                "returned an invalid number of results."
            );

        }

        const returnedIds = new Set();

        for (const match of matches) {

            if (
                !match ||
                typeof match.id !== "string" ||
                !Object.prototype.hasOwnProperty.call(CHARACTERS, match.id) ||
                !Number.isFinite(Number(match.score)) ||
                returnedIds.has(match.id)
            ) {

                throw new Error(
                    `Simulation ${simulationNumber}: invalid or duplicate ` +
                    "character match detected."
                );

            }

            returnedIds.add(match.id);

        }

        if (returnedIds.size !== expectedIds.length) {

            throw new Error(
                `Simulation ${simulationNumber}: one or more characters ` +
                "are missing from the ranking."
            );

        }

        return matches;

    }


    /*
    ========================================================
    MAIN SIMULATION
    ========================================================

    Measures:
    - Character win rates and top-three rates
    - Average character rank and score
    - Average matching-component scores
    - Best rank and best score
    - Character trait distributions
    - Trait selection frequencies and average profiles
    - Route selection frequencies and average profiles
    - Exact ties, near-ties, and winner margins
    - Whether all 33 characters are reachable
    ========================================================
    */

    function runGOTSimulation(
        simulationCount = 100000,
        seedValue = DEFAULT_SIMULATION_SEED
    ) {

        if (!validateGOTSimulationSetup()) {
            return null;
        }

        const SIMULATIONS = Math.max(
            1,
            Math.floor(Number(simulationCount) || 100000)
        );

        const INITIAL_SEED = Math.trunc(
            Number(seedValue) || DEFAULT_SIMULATION_SEED
        );

        const random = createGOTRandom(INITIAL_SEED);

        const characterIds = Object.keys(CHARACTERS);
        const routeIds = Object.keys(ROUTES);


        /*
        ----------------------------------------------------
        CHARACTER STORAGE
        ----------------------------------------------------
        */

        const stats = {};

        characterIds.forEach(function (id) {

            const character = CHARACTERS[id];

            let coreTraits = 0;
            let secondaryTraits = 0;
            let minorTraits = 0;
            let zeroTraits = 0;

            TRAIT_KEYS.forEach(function (trait) {

                const value = getCharacterTraitValue(
                    character,
                    trait
                );

                if (value >= 85) {
                    coreTraits++;
                } else if (value >= 50) {
                    secondaryTraits++;
                } else if (value > 0) {
                    minorTraits++;
                } else {
                    zeroTraits++;
                }

            });

            stats[id] = {
                name: character.name,

                wins: 0,
                top3: 0,

                rankTotal: 0,
                scoreTotal: 0,

                coreTotal: 0,
                secondaryTotal: 0,
                minorTotal: 0,
                overallTotal: 0,

                primaryRouteTotal: 0,
                secondaryRouteTotal: 0,

                contradictionTotal: 0,

                bestRank: Infinity,
                bestScore: -Infinity,

                coreTraits,
                secondaryTraits,
                minorTraits,
                zeroTraits
            };

        });


        /*
        ----------------------------------------------------
        TRAIT FREQUENCY STORAGE
        ----------------------------------------------------
        */

        const traitSelections = {};
        const traitProfileTotals = {};

        TRAIT_KEYS.forEach(function (trait) {

            traitSelections[trait] = 0;
            traitProfileTotals[trait] = 0;

        });


        /*
        ----------------------------------------------------
        ROUTE FREQUENCY STORAGE
        ----------------------------------------------------
        */

        const routeSelections = {};
        const routeProfileTotals = {};

        routeIds.forEach(function (route) {

            routeSelections[route] = 0;
            routeProfileTotals[route] = 0;

        });


        /*
        ----------------------------------------------------
        GLOBAL STATISTICS
        ----------------------------------------------------
        */

        let totalWinnerMargin = 0;
        let exactTies = 0;

        const nearTieCounts = {
            under025: 0,
            under050: 0,
            under100: 0,
            under200: 0
        };


        /*
        ----------------------------------------------------
        TIMER
        ----------------------------------------------------
        */

        const startTime = performance.now();


        /*
        ====================================================
        MAIN SIMULATION LOOP
        ====================================================
        */

        for (
            let simulation = 0;
            simulation < SIMULATIONS;
            simulation++
        ) {

            /*
            -----------------------------------------------
            GENERATE RANDOM ANSWERS
            -----------------------------------------------
            */

            const answerIndexes = new Array(questions.length);

            for (let q = 0; q < questions.length; q++) {

                const question = questions[q];

                const answerIndex = Math.floor(
                    random() * question.answers.length
                );

                answerIndexes[q] = answerIndex;

                const answer = question.answers[answerIndex];

                /*
                -------------------------------------------
                SELECTED TRAITS
                -------------------------------------------
                */

                if (
                    answer &&
                    Array.isArray(answer.traits)
                ) {

                    answer.traits.forEach(function (trait) {

                        if (
                            Object.prototype.hasOwnProperty.call(
                                traitSelections,
                                trait
                            )
                        ) {

                            traitSelections[trait]++;

                        }

                    });

                }

                /*
                -------------------------------------------
                SELECTED ROUTE
                -------------------------------------------
                */

                if (
                    answer &&
                    answer.route &&
                    Object.prototype.hasOwnProperty.call(
                        routeSelections,
                        answer.route
                    )
                ) {

                    routeSelections[answer.route]++;

                }

            }


            /*
            -----------------------------------------------
            RUN THE REAL PERSONALITY ENGINE
            -----------------------------------------------
            */

            const personality = calculatePersonality(answerIndexes);

            if (
                !personality ||
                !personality.profile ||
                !personality.routeProfile
            ) {

                throw new Error(
                    `Simulation ${simulation + 1}: ` +
                    "calculatePersonality did not return profile and routeProfile."
                );

            }


            /*
            -----------------------------------------------
            RECORD NORMALIZED PROFILE AVERAGES
            -----------------------------------------------
            */

            TRAIT_KEYS.forEach(function (trait) {

                traitProfileTotals[trait] +=
                    Number(personality.profile[trait]) || 0;

            });

            routeIds.forEach(function (route) {

                routeProfileTotals[route] +=
                    Number(personality.routeProfile[route]) || 0;

            });


            /*
            -----------------------------------------------
            RUN THE REAL CHARACTER MATCH ENGINE
            -----------------------------------------------
            */

            const matches = getValidatedGOTMatches(
                personality,
                simulation + 1
            );

            const winner = matches[0];
            const second = matches[1];

            const margin = second
                ? Number(winner.score) - Number(second.score)
                : Number(winner.score);

            totalWinnerMargin += margin;

            if (margin === 0) {
                exactTies++;
            }

            if (margin < 0.25) nearTieCounts.under025++;
            if (margin < 0.50) nearTieCounts.under050++;
            if (margin < 1.00) nearTieCounts.under100++;
            if (margin < 2.00) nearTieCounts.under200++;


            /*
            -----------------------------------------------
            MAP EACH CHARACTER TO ITS ACTUAL RANK AND SCORE
            -----------------------------------------------
            */

            const matchById = new Map();

            matches.forEach(function (match, index) {

                matchById.set(match.id, {
                    rank: index + 1,
                    score: Number(match.score)
                });

            });


            /*
            -----------------------------------------------
            MATCH COMPONENT DIAGNOSTICS
            -----------------------------------------------

            These component functions are the ones used by
            the current matching engine.
            -----------------------------------------------
            */

            characterIds.forEach(function (id) {

                const character = CHARACTERS[id];
                const item = stats[id];
                const matchData = matchById.get(id);

                const rank = matchData.rank;
                const actualScore = matchData.score;

                const core = calculateCoreFit(
                    character,
                    personality.profile
                );

                const secondary = calculateSecondaryFit(
                    character,
                    personality.profile
                );

                const minor = calculateMinorFit(
                    character,
                    personality.profile
                );

                const overall = calculateOverallTraitFit(
                    character,
                    personality.profile
                );

                const routes = calculateCharacterRouteFit(
                    id,
                    personality
                );

                const contradiction = calculateContradictionPenalty(
                    character,
                    personality.profile
                );


                /*
                -------------------------------------------
                ACCUMULATE COMPONENT TOTALS
                -------------------------------------------
                */

                item.rankTotal += rank;
                item.scoreTotal += actualScore;

                item.coreTotal += Number(core) || 0;
                item.secondaryTotal += Number(secondary) || 0;
                item.minorTotal += Number(minor) || 0;
                item.overallTotal += Number(overall) || 0;

                item.primaryRouteTotal +=
                    Number(routes.primary) || 0;

                item.secondaryRouteTotal +=
                    Number(routes.secondary) || 0;

                item.contradictionTotal +=
                    Number(contradiction) || 0;


                /*
                -------------------------------------------
                CHARACTER RANKING METRICS
                -------------------------------------------
                */

                if (rank <= 3) {
                    item.top3++;
                }

                if (rank < item.bestRank) {
                    item.bestRank = rank;
                }

                if (actualScore > item.bestScore) {
                    item.bestScore = actualScore;
                }

                if (rank === 1) {
                    item.wins++;
                }

            });

        }


        /*
        ====================================================
        CHARACTER RESULTS
        ====================================================
        */

        const characterResults = characterIds
            .map(function (id) {

                const item = stats[id];

                return {

                    Character: item.name,

                    Wins: item.wins,

                    "Win %": Number(
                        (
                            item.wins /
                            SIMULATIONS *
                            100
                        ).toFixed(3)
                    ),

                    "Top 3 %": Number(
                        (
                            item.top3 /
                            SIMULATIONS *
                            100
                        ).toFixed(3)
                    ),

                    "Avg Rank": Number(
                        (
                            item.rankTotal /
                            SIMULATIONS
                        ).toFixed(2)
                    ),

                    "Avg Score": Number(
                        (
                            item.scoreTotal /
                            SIMULATIONS
                        ).toFixed(2)
                    ),

                    "Avg Core": Number(
                        (
                            item.coreTotal /
                            SIMULATIONS
                        ).toFixed(2)
                    ),

                    "Avg Secondary": Number(
                        (
                            item.secondaryTotal /
                            SIMULATIONS
                        ).toFixed(2)
                    ),

                    "Avg Minor": Number(
                        (
                            item.minorTotal /
                            SIMULATIONS
                        ).toFixed(2)
                    ),

                    "Avg Overall": Number(
                        (
                            item.overallTotal /
                            SIMULATIONS
                        ).toFixed(2)
                    ),

                    "Avg Primary Route": Number(
                        (
                            item.primaryRouteTotal /
                            SIMULATIONS
                        ).toFixed(2)
                    ),

                    "Avg Secondary Route": Number(
                        (
                            item.secondaryRouteTotal /
                            SIMULATIONS
                        ).toFixed(2)
                    ),

                    "Avg Contradiction": Number(
                        (
                            item.contradictionTotal /
                            SIMULATIONS
                        ).toFixed(2)
                    ),

                    "Best Rank":
                        item.bestRank === Infinity
                            ? "—"
                            : item.bestRank,

                    "Best Score":
                        item.bestScore === -Infinity
                            ? 0
                            : Number(item.bestScore.toFixed(2)),

                    "Core Traits": item.coreTraits,

                    "Secondary Traits": item.secondaryTraits,

                    "Minor Traits": item.minorTraits,

                    "Zero Traits": item.zeroTraits

                };

            })
            .sort(function (a, b) {

                return b.Wins - a.Wins ||
                    a.Character.localeCompare(b.Character);

            });


        /*
        ====================================================
        TRAIT RESULTS
        ====================================================
        */

        const traitResults = TRAIT_KEYS
            .map(function (trait) {

                return {

                    Trait: TRAITS[trait],

                    /*
                    Percentage of simulated answers that
                    included this trait.

                    Each selected answer contributes three
                    trait selections, so trait percentages
                    across all traits will total about 300%.
                    */

                    "Answer Frequency %": Number(
                        (
                            traitSelections[trait] /
                            (
                                SIMULATIONS *
                                questions.length
                            ) *
                            100
                        ).toFixed(3)
                    ),

                    "Average Profile": Number(
                        (
                            traitProfileTotals[trait] /
                            SIMULATIONS
                        ).toFixed(2)
                    )

                };

            })
            .sort(function (a, b) {

                return b["Answer Frequency %"] -
                    a["Answer Frequency %"];

            });


        /*
        ====================================================
        ROUTE RESULTS
        ====================================================
        */

        const routeResults = routeIds
            .map(function (route) {

                return {

                    Route: ROUTES[route],

                    /*
                    One route is selected per answer.
                    These route percentages should total
                    approximately 100%.
                    */

                    "Selection %": Number(
                        (
                            routeSelections[route] /
                            (
                                SIMULATIONS *
                                questions.length
                            ) *
                            100
                        ).toFixed(3)
                    ),

                    "Average Profile": Number(
                        (
                            routeProfileTotals[route] /
                            SIMULATIONS
                        ).toFixed(2)
                    )

                };

            })
            .sort(function (a, b) {

                return b["Selection %"] - a["Selection %"];

            });


        /*
        ====================================================
        SUMMARY
        ====================================================
        */

        const elapsed = performance.now() - startTime;

        const summary = {

            simulations: SIMULATIONS,

            questions: questions.length,

            characters: characterIds.length,

            traits: TRAIT_KEYS.length,

            routes: routeIds.length,

            seed: INITIAL_SEED,

            runtimeMs: Number(elapsed.toFixed(2)),

            profilesPerSecond: Math.round(
                SIMULATIONS / (Math.max(elapsed, 0.01) / 1000)
            ),

            averageWinnerMargin: Number(
                (
                    totalWinnerMargin /
                    SIMULATIONS
                ).toFixed(3)
            ),

            exactTies: exactTies,

            exactTiePercent: Number(
                (
                    exactTies /
                    SIMULATIONS *
                    100
                ).toFixed(3)
            ),

            nearTieUnder025Percent: Number(
                (
                    nearTieCounts.under025 /
                    SIMULATIONS *
                    100
                ).toFixed(2)
            ),

            nearTieUnder050Percent: Number(
                (
                    nearTieCounts.under050 /
                    SIMULATIONS *
                    100
                ).toFixed(2)
            ),

            nearTieUnder100Percent: Number(
                (
                    nearTieCounts.under100 /
                    SIMULATIONS *
                    100
                ).toFixed(2)
            ),

            nearTieUnder200Percent: Number(
                (
                    nearTieCounts.under200 /
                    SIMULATIONS *
                    100
                ).toFixed(2)
            ),

            reachableCharacters: characterResults.filter(
                function (item) {
                    return item.Wins > 0;
                }
            ).length,

            allCharactersReachable: characterResults.every(
                function (item) {
                    return item.Wins > 0;
                }
            )

        };


        /*
        ====================================================
        OUTPUT
        ====================================================
        */

        console.log("==============================================");
        console.log("GOT MALE PERSONALITY SIMULATION COMPLETE");
        console.log("==============================================");

        console.log("SUMMARY");
        console.table([summary]);

        console.log("CHARACTER RESULTS");
        console.table(characterResults);

        console.log("TRAIT DISTRIBUTION");
        console.table(traitResults);

        console.log("ROUTE DISTRIBUTION");
        console.table(routeResults);


        /*
        ====================================================
        SAVE RESULTS
        ====================================================
        */

        const results = {
            summary,
            characters: characterResults,
            traits: traitResults,
            routes: routeResults
        };

        window.GOT_SIMULATION_RESULTS = results;

        console.log(
            "Results saved to window.GOT_SIMULATION_RESULTS"
        );

        return results;

    }


    /*
    ========================================================
    CONTRADICTION PENALTY COMPARISON
    ========================================================

    Uses identical simulated answers for both versions.

    WITH PENALTY:
        Uses calculateAllCharacterMatches(), the actual quiz
        matcher, including the contradiction penalty.

    WITHOUT PENALTY:
        Uses the current live scoring weights but omits only
        the contradiction penalty.

    This isolates the effect of the penalty without also
    changing the rest of the matching formula.
    ========================================================
    */

    function runGOTPenaltyComparison(
        simulationCount = 25000,
        seedValue = DEFAULT_SIMULATION_SEED
    ) {

        if (!validateGOTSimulationSetup()) {
            return null;
        }

        const SIMULATIONS = Math.max(
            1,
            Math.floor(Number(simulationCount) || 25000)
        );

        const INITIAL_SEED = Math.trunc(
            Number(seedValue) || DEFAULT_SIMULATION_SEED
        );

        const random = createGOTRandom(INITIAL_SEED);

        const characterIds = Object.keys(CHARACTERS);

        const winsWith = Object.fromEntries(
            characterIds.map(function (id) {
                return [id, 0];
            })
        );

        const winsWithout = Object.fromEntries(
            characterIds.map(function (id) {
                return [id, 0];
            })
        );

        const nearTiesWith = {
            lt025: 0,
            lt050: 0,
            lt100: 0,
            lt200: 0
        };

        const nearTiesWithout = {
            lt025: 0,
            lt050: 0,
            lt100: 0,
            lt200: 0
        };

        let winnerChanges = 0;

        let exactTiesWith = 0;
        let exactTiesWithout = 0;

        let marginWithTotal = 0;
        let marginWithoutTotal = 0;


        /*
        ----------------------------------------------------
        RECORD NEAR-TIE FREQUENCY
        ----------------------------------------------------
        */

        function recordMargin(counters, margin) {

            if (margin < 0.25) counters.lt025++;
            if (margin < 0.50) counters.lt050++;
            if (margin < 1.00) counters.lt100++;
            if (margin < 2.00) counters.lt200++;

        }


        /*
        ----------------------------------------------------
        DETERMINISTIC TIE-BREAKING
        ----------------------------------------------------
        */

        function sortMatches(matches) {

            return matches.sort(function (a, b) {

                if (b.score !== a.score) {
                    return b.score - a.score;
                }

                return a.name.localeCompare(b.name);

            });

        }


        /*
        ----------------------------------------------------
        TIMER
        ----------------------------------------------------
        */

        const startTime = performance.now();


        /*
        ====================================================
        MAIN COMPARISON LOOP
        ====================================================
        */

        for (let s = 0; s < SIMULATIONS; s++) {

            /*
            -----------------------------------------------
            GENERATE ONE RANDOM ANSWER SET
            -----------------------------------------------

            Both versions use these exact same answers.
            -----------------------------------------------
            */

            const answerIndexes = questions.map(function (question) {

                return Math.floor(
                    random() * question.answers.length
                );

            });


            /*
            -----------------------------------------------
            RUN CURRENT PERSONALITY ENGINE
            -----------------------------------------------
            */

            const personality = calculatePersonality(answerIndexes);

            if (
                !personality ||
                !personality.profile ||
                !personality.routeProfile
            ) {

                throw new Error(
                    `Penalty comparison ${s + 1}: ` +
                    "personality engine returned an invalid profile."
                );

            }


            /*
            -----------------------------------------------
            WITH PENALTY: ACTUAL LIVE MATCHER
            -----------------------------------------------
            */

            const withPenalty = getValidatedGOTMatches(
                personality,
                s + 1
            );


            /*
            -----------------------------------------------
            WITHOUT PENALTY: SAME WEIGHTS, NO PENALTY
            -----------------------------------------------

            Current quiz scoring:
                Core fit             0.45
                Secondary fit        0.15
                Minor fit            0.05
                Primary route fit    0.20
                Secondary route fit  0.10
                Overall trait fit    0.05

            These weights total 1.00.
            -----------------------------------------------
            */

            const withoutPenalty = [];

            for (const id of characterIds) {

                const character = CHARACTERS[id];

                const core = calculateCoreFit(
                    character,
                    personality.profile
                );

                const secondary = calculateSecondaryFit(
                    character,
                    personality.profile
                );

                const minor = calculateMinorFit(
                    character,
                    personality.profile
                );

                const overall = calculateOverallTraitFit(
                    character,
                    personality.profile
                );

                const routes = calculateCharacterRouteFit(
                    id,
                    personality
                );

                const baseScore =
                    core * 0.45 +
                    secondary * 0.15 +
                    minor * 0.05 +
                    routes.primary * 0.20 +
                    routes.secondary * 0.10 +
                    overall * 0.05;

                withoutPenalty.push({

                    id,

                    name: character.name,

                    score: clamp(baseScore)

                });

            }

            sortMatches(withoutPenalty);


            /*
            -----------------------------------------------
            COMPARE WINNERS
            -----------------------------------------------
            */

            const winnerWith = withPenalty[0];
            const winnerWithout = withoutPenalty[0];

            winsWith[winnerWith.id]++;
            winsWithout[winnerWithout.id]++;

            if (winnerWith.id !== winnerWithout.id) {
                winnerChanges++;
            }


            /*
            -----------------------------------------------
            COMPARE WINNER MARGINS
            -----------------------------------------------
            */

            const marginWith =
                Number(withPenalty[0].score) -
                Number(withPenalty[1].score);

            const marginWithout =
                Number(withoutPenalty[0].score) -
                Number(withoutPenalty[1].score);

            marginWithTotal += marginWith;
            marginWithoutTotal += marginWithout;

            if (marginWith === 0) {
                exactTiesWith++;
            }

            if (marginWithout === 0) {
                exactTiesWithout++;
            }

            recordMargin(nearTiesWith, marginWith);
            recordMargin(nearTiesWithout, marginWithout);

        }


        /*
        ====================================================
        CHARACTER WIN-RATE COMPARISON
        ====================================================
        */

        const characterResults = characterIds
            .map(function (id) {

                const withCount = winsWith[id];
                const withoutCount = winsWithout[id];

                const withPercent =
                    withCount / SIMULATIONS * 100;

                const withoutPercent =
                    withoutCount / SIMULATIONS * 100;

                return {

                    Character: CHARACTERS[id].name,

                    "Wins with penalty": withCount,

                    "Win % with penalty": Number(
                        withPercent.toFixed(3)
                    ),

                    "Wins without penalty": withoutCount,

                    "Win % without penalty": Number(
                        withoutPercent.toFixed(3)
                    ),

                    "Change in win %": Number(
                        (
                            withoutPercent -
                            withPercent
                        ).toFixed(3)
                    )

                };

            })
            .sort(function (a, b) {

                return (
                    b["Wins with penalty"] -
                    a["Wins with penalty"]
                ) || a.Character.localeCompare(b.Character);

            });


        /*
        ====================================================
        MARGIN SUMMARY
        ====================================================
        */

        function makeSummary(counters, averageMargin, exactTies) {

            return {

                "Average winner margin": Number(
                    averageMargin.toFixed(3)
                ),

                "Exact tie %": Number(
                    (
                        exactTies /
                        SIMULATIONS *
                        100
                    ).toFixed(3)
                ),

                "Margin < 0.25": Number(
                    (
                        counters.lt025 /
                        SIMULATIONS *
                        100
                    ).toFixed(2)
                ),

                "Margin < 0.50": Number(
                    (
                        counters.lt050 /
                        SIMULATIONS *
                        100
                    ).toFixed(2)
                ),

                "Margin < 1.00": Number(
                    (
                        counters.lt100 /
                        SIMULATIONS *
                        100
                    ).toFixed(2)
                ),

                "Margin < 2.00": Number(
                    (
                        counters.lt200 /
                        SIMULATIONS *
                        100
                    ).toFixed(2)
                )

            };

        }


        /*
        ====================================================
        FINAL RESULTS
        ====================================================
        */

        const elapsed = performance.now() - startTime;

        const results = {

            simulations: SIMULATIONS,

            seed: INITIAL_SEED,

            winnerChanges,

            winnerChangePercent: Number(
                (
                    winnerChanges /
                    SIMULATIONS *
                    100
                ).toFixed(2)
            ),

            withPenalty: makeSummary(
                nearTiesWith,
                marginWithTotal / SIMULATIONS,
                exactTiesWith
            ),

            withoutPenalty: makeSummary(
                nearTiesWithout,
                marginWithoutTotal / SIMULATIONS,
                exactTiesWithout
            ),

            characters: characterResults,

            runtimeMs: Number(elapsed.toFixed(2))

        };


        /*
        ====================================================
        OUTPUT
        ====================================================
        */

        window.GOT_PENALTY_COMPARISON = results;

        console.log("==============================================");
        console.log("GOT CONTRADICTION PENALTY COMPARISON");
        console.log("==============================================");

        console.log("OVERALL COMPARISON");

        console.table([{

            Simulations: results.simulations,

            Seed: results.seed,

            "Winner changes": results.winnerChanges,

            "Winner changes %": results.winnerChangePercent,

            RuntimeMs: results.runtimeMs

        }]);

        console.log("WITH CONTRADICTION PENALTY");
        console.table([results.withPenalty]);

        console.log("WITHOUT CONTRADICTION PENALTY");
        console.table([results.withoutPenalty]);

        console.log("CHARACTER WIN-RATE COMPARISON");
        console.table(results.characters);

        console.log(
            "Results saved to window.GOT_PENALTY_COMPARISON"
        );

        return results;

    }


    /*
    ========================================================
    BROWSER CONSOLE ACCESS
    ========================================================
    */

    window.runGOTSimulation = runGOTSimulation;
    window.runGOTPenaltyComparison = runGOTPenaltyComparison;

})();