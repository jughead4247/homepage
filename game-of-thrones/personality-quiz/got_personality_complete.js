"use strict";

/* ============================================================
GAME OF THRONES PERSONALITY QUIZ
============================================================ */

const QUIZ_CONFIG = {
    id: "got",
    name: "Game of Thrones",
    title: "Game of Thrones Personality Quiz",
    traitProfileDescription: "your personality profile",
    shareTitle: "My Game of Thrones Personality Result",
    challengeTitle: "Game of Thrones Personality Quiz",
    resultDescription:
        "is your closest Game of Thrones personality match based on your personality profile."
};


/* ============================================================
TRAITS
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
    "curiosity"
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
    curiosity: "Curiosity"
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
    curiosity: 0.80
};


/* ============================================================
CHARACTERS

33 CHARACTER ROSTER
VERSION 3 — BALANCED PERSONALITY MATRIX

Core:      3–4 traits, 85–100
Secondary: 1–3 traits, 50–84
Minor:     remaining traits, 1–49
Zero:      genuinely absent / strongly incompatible

IMPORTANT:
Do not change CHARACTER_ROUTES or the 50 questions yet.
This matrix is the new baseline for stress-testing.
============================================================ */

const CHARACTERS = {

    jon: {
    name: "Jon Snow",
    image: "images/jon.png",
    traits: {
        honor:96,
        courage:94,
        loyalty:96,
        compassion:90,
        morality:49,
        pragmatism:38,
        ruthlessness:10,
        ambition:18,
        leadership:48,
        independence:45,
        intelligence:45,
        strategy:45,
        manipulation:5,
        charisma:45,
        pride:35,
        determination:84,
        riskTaking:59,
        selfPreservation:45,
        emotionalControl:70,
        curiosity:44
    },
    description:
        "A duty-driven protector who repeatedly puts loyalty and the lives of others above personal power."
},



    daenerys: {
    name: "Daenerys Targaryen",
    image: "images/daenerys.png",
    traits: {
        honor:35,
        courage:89,
        loyalty:48,
        compassion:84,
        morality:48,
        pragmatism:44,
        ruthlessness:78,
        ambition:94,
        leadership:90,
        independence:82,
        intelligence:49,
        strategy:65,
        manipulation:48,
        charisma:78,
        pride:49,
        determination:87,
        riskTaking:76,
        selfPreservation:48,
        emotionalControl:49,
        curiosity:42
    },
    description:
        "An ambitious leader driven by liberation, conviction and an increasingly uncompromising sense of destiny."
},


    tyrion: {
        name: "Tyrion Lannister",
        image: "images/tyrion.png",
        traits: {
            honor:42,
            courage:44,
            loyalty:48,
            compassion:76,
            morality:45,
            pragmatism:94,
            ruthlessness:36,
            ambition:47,
            leadership:49,
            independence:48,
            intelligence:96,
            strategy:91,
            manipulation:48,
            charisma:84,
            pride:46,
            determination:45,
            riskTaking:48,
            selfPreservation:72,
            emotionalControl:86,
            curiosity:48
        },
        description:
            "A clever survivor who relies on intelligence, wit and practical judgment rather than brute force."
    },


    cersei: {
    name: "Cersei Lannister",
    image: "images/cersei.png",
    traits: {
        honor:20,
        courage:45,
        loyalty:72,
        compassion:18,
        morality:22,
        pragmatism:46,
        ruthlessness:88,
        ambition:95,
        leadership:45,
        independence:48,
        intelligence:47,
        strategy:75,
        manipulation:92,
        charisma:45,
        pride:90,
        determination:48,
        riskTaking:48,
        selfPreservation:78,
        emotionalControl:35,
        curiosity:42
    },
    description:
        "A fiercely ambitious survivor who protects her family and power through manipulation, ruthlessness and resolve."
},


    jaime: {
        name: "Jaime Lannister",
        image: "images/jaime.png",
        traits: {
            honor:88,
            courage:96,
            loyalty:93,
            compassion:76,
            morality:48,
            pragmatism:48,
            ruthlessness:42,
            ambition:32,
            leadership:48,
            independence:86,
            intelligence:48,
            strategy:45,
            manipulation:20,
            charisma:48,
            pride:68,
            determination:82,
            riskTaking:79,
            selfPreservation:48,
            emotionalControl:48,
            curiosity:35
        },
        description:
            "A formidable warrior whose identity is shaped by loyalty, courage and a complicated relationship with honor."
    },


    arya: {
    name: "Arya Stark",
    image: "images/arya.png",
    traits: {
        honor:35,
        courage:91,
        loyalty:48,
        compassion:28,
        morality:34,
        pragmatism:48,
        ruthlessness:89,
        ambition:22,
        leadership:38,
        independence:96,
        intelligence:71,
        strategy:49,
        manipulation:46,
        charisma:42,
        pride:48,
        determination:89,
        riskTaking:82,
        selfPreservation:78,
        emotionalControl:72,
        curiosity:45
    },
    description:
        "An intensely independent survivor who turns courage, adaptability and vengeance into weapons."
},


    sansa: { 
        name: "Sansa Stark",
        image: "images/sansa.png",
        traits: { 
            honor:45, 
            courage:45, 
            loyalty:48, 
            compassion:48, 
            morality:48, 
            pragmatism:78, 
            ruthlessness:40, 
            ambition:45, 
            leadership:72, 
            independence:45, 
            intelligence:82, 
            strategy:97, 
            manipulation:45, 
            charisma:48, 
            pride:48, 
            determination:45, 
            riskTaking:45, 
            selfPreservation:95, 
            emotionalControl:92, 
            curiosity:45 
        }, description: 
              "A survivor who learns to navigate power through patience, political awareness and practical judgment." },


    ned: {
    name: "Ned Stark",
    image: "images/ned.png",
    traits: {
        honor:99,
        courage:82,
        loyalty:96,
        compassion:81,
        morality:98,
        pragmatism:34,
        ruthlessness:0,
        ambition:10,
        leadership:84,
        independence:60,
        intelligence:62,
        strategy:56,
        manipulation:0,
        charisma:58,
        pride:45,
        determination:82,
        riskTaking:52,
        selfPreservation:28,
        emotionalControl:78,
        curiosity:28
    },
    description:
        "A principled leader who treats honor, duty and loyalty as obligations even when they become dangerous."
},


    robb: {
    name: "Robb Stark",
    image: "images/robb.png",
    traits: {
        honor:84,
        courage:94,
        loyalty:95,
        compassion:48,
        morality:64,
        pragmatism:48,
        ruthlessness:45,
        ambition:44,
        leadership:86,
        independence:48,
        intelligence:69,
        strategy:82,
        manipulation:20,
        charisma:90,
        pride:48,
        determination:84,
        riskTaking:70,
        selfPreservation:42,
        emotionalControl:49,
        curiosity:31
    },
    description:
        "A charismatic battlefield leader whose loyalty and sense of honor can outweigh political calculation."
},


    catelyn: {
        name: "Catelyn Stark",
        image: "images/catelyn.png",
        traits: {
            honor:82,
            courage:45,
            loyalty:99,
            compassion:91,
            morality:92,
            pragmatism:78,
            ruthlessness:44,
            ambition:24,
            leadership:48,
            independence:45,
            intelligence:48,
            strategy:72,
            manipulation:35,
            charisma:48,
            pride:45,
            determination:90,
            riskTaking:38,
            selfPreservation:48,
            emotionalControl:48,
            curiosity:39
        },
        description:
            "A fiercely protective mother who combines compassion and loyalty with practical political judgment."
    },


    joffrey: {
        name: "Joffrey Baratheon",
        image: "images/joffrey.png",
        traits: {
            honor:12,
            courage:28,
            loyalty:24,
            compassion:0,
            morality:10,
            pragmatism:35,
            ruthlessness:99,
            ambition:92,
            leadership:45,
            independence:32,
            intelligence:48,
            strategy:58,
            manipulation:45,
            charisma:48,
            pride:98,
            determination:48,
            riskTaking:76,
            selfPreservation:78,
            emotionalControl:15,
            curiosity:30
        },
        description:
            "A volatile ruler defined by entitlement, cruelty, pride and an intense need to dominate."
    },


    tywin: {
    name: "Tywin Lannister",
    image: "images/tywin.png",
    traits: {
        honor:42,
        courage:48,
        loyalty:45,
        compassion:12,
        morality:38,
        pragmatism:92,
        ruthlessness:88,
        ambition:90,
        leadership:78,
        independence:48,
        intelligence:82,
        strategy:94,
        manipulation:48,
        charisma:45,
        pride:48,
        determination:48,
        riskTaking:43,
        selfPreservation:48,
        emotionalControl:82,
        curiosity:35
    },
    description:
        "A calculating power broker who values order, legacy and results above sentiment."
},


    robert: {
        name: "Robert Baratheon",
        image: "images/robert.png",
        traits: {
            honor:58,
            courage:99,
            loyalty:68,
            compassion:35,
            morality:42,
            pragmatism:44,
            ruthlessness:48,
            ambition:34,
            leadership:90,
            independence:82,
            intelligence:40,
            strategy:35,
            manipulation:18,
            charisma:98,
            pride:81,
            determination:55,
            riskTaking:95,
            selfPreservation:36,
            emotionalControl:32,
            curiosity:30
        },
        description:
            "A charismatic warrior who thrives on courage, freedom, risk and the life of a conqueror."
    },


    stannis: {
    name: "Stannis Baratheon",
    image: "images/stannis.png",
    traits: {
        honor:97,
        courage:81,
        loyalty:48,
        compassion:24,
        morality:84,
        pragmatism:52,
        ruthlessness:48,
        ambition:91,
        leadership:84,
        independence:73,
        intelligence:48,
        strategy:86,
        manipulation:28,
        charisma:30,
        pride:74,
        determination:99,
        riskTaking:48,
        selfPreservation:44,
        emotionalControl:69,
        curiosity:27
    },
    description:
        "A relentlessly determined claimant who sees duty and rightful authority as matters of principle."
},


    theon: {
        name: "Theon Greyjoy",
        image: "images/theon.png",
        traits: {
            honor:42,
            courage:48,
            loyalty:72,
            compassion:46,
            morality:40,
            pragmatism:45,
            ruthlessness:45,
            ambition:86,
            leadership:49,
            independence:45,
            intelligence:48,
            strategy:48,
            manipulation:48,
            charisma:48,
            pride:94,
            determination:78,
            riskTaking:82,
            selfPreservation:90,
            emotionalControl:45,
            curiosity:31
        },
        description:
            "A deeply conflicted survivor whose need for identity and recognition repeatedly collides with loyalty and fear."
    },


    ramsay: {
    name: "Ramsay Bolton",
    image: "images/ramsay.png",
    traits: {
        honor:8,
        courage:83,
        loyalty:0,
        compassion:0,
        morality:5,
        pragmatism:45,
        ruthlessness:96,
        ambition:82,
        leadership:48,
        independence:77,
        intelligence:48,
        strategy:75,
        manipulation:94,
        charisma:44,
        pride:90,
        determination:74,
        riskTaking:84,
        selfPreservation:56,
        emotionalControl:20,
        curiosity:45
    },
    description:
        "A sadistic predator who combines manipulation, cruelty and calculated intimidation."
},


    littlefinger: {
    name: "Petyr Baelish",
    image: "images/littlefinger.png",
    traits: {
        honor:8,
        courage:25,
        loyalty:18,
        compassion:10,
        morality:12,
        pragmatism:84,
        ruthlessness:48,
        ambition:92,
        leadership:48,
        independence:71,
        intelligence:84,
        strategy:90,
        manipulation:94,
        charisma:78,
        pride:46,
        determination:73,
        riskTaking:48,
        selfPreservation:80,
        emotionalControl:48,
        curiosity:72
    },
    description:
        "A master manipulator who turns information, patience and ambition into political leverage."
},


    varys: {
    name: "Varys",
    image: "images/varys.png",
    traits: {
        honor:45,
        courage:32,
        loyalty:48,
        compassion:46,
        morality:48,
        pragmatism:84,
        ruthlessness:10,
        ambition:18,
        leadership:38,
        independence:44,
        intelligence:98,
        strategy:99,
        manipulation:95,
        charisma:42,
        pride:12,
        determination:62,
        riskTaking:22,
        selfPreservation:81,
        emotionalControl:92,
        curiosity:84
    },
    description:
        "A patient information broker who prefers influence, intelligence and long-term stability to personal glory."
},

    bronn: {
        name: "Bronn",
        image: "images/bronn.png",
        traits: {
            honor:18,
            courage:48,
            loyalty:35,
            compassion:18,
            morality:24,
            pragmatism:98,
            ruthlessness:48,
            ambition:46,
            leadership:44,
            independence:91,
            intelligence:45,
            strategy:45,
            manipulation:33,
            charisma:76,
            pride:48,
            determination:82,
            riskTaking:90,
            selfPreservation:97,
            emotionalControl:45,
            curiosity:35
        },
        description:
            "A pragmatic mercenary who values survival, freedom, money and knowing when to take a calculated risk."
    },


    hound: {
    name: "The Hound",
    image: "images/hound.png",
    traits: {
        honor:33,
        courage:97,
        loyalty:68,
        compassion:72,
        morality:44,
        pragmatism:45,
        ruthlessness:32,
        ambition:20,
        leadership:42,
        independence:95,
        intelligence:48,
        strategy:46,
        manipulation:5,
        charisma:30,
        pride:47,
        determination:48,
        riskTaking:69,
        selfPreservation:92,
        emotionalControl:82,
        curiosity:30
    },
    description:
        "A hardened survivor whose outward brutality hides a strong instinct to protect the vulnerable."
},


    brienne: {
    name: "Brienne of Tarth",
    image: "images/brienne.png",
    traits: {
        honor:96,
        courage:94,
        loyalty:95,
        compassion:80,
        morality:78,
        pragmatism:42,
        ruthlessness:0,
        ambition:18,
        leadership:48,
        independence:70,
        intelligence:48,
        strategy:45,
        manipulation:0,
        charisma:22,
        pride:35,
        determination:90,
        riskTaking:48,
        selfPreservation:36,
        emotionalControl:48,
        curiosity:31
    },
    description:
        "An exceptionally principled warrior who treats promises, loyalty and protection as sacred responsibilities."
},


    samwell: {
        name: "Samwell Tarly",
        image: "images/samwell.png",
        traits: {
            honor:48,
            courage:48,
            loyalty:91,
            compassion:95,
            morality:83,
            pragmatism:48,
            ruthlessness:5,
            ambition:16,
            leadership:42,
            independence:38,
            intelligence:98,
            strategy:48,
            manipulation:18,
            charisma:36,
            pride:28,
            determination:81,
            riskTaking:26,
            selfPreservation:46,
            emotionalControl:64,
            curiosity:96
        },
        description:
            "A compassionate scholar whose courage grows from empathy, knowledge and persistence."
    },


    tormund: {
    name: "Tormund Giantsbane",
    image: "images/tormund.png",
    traits: {
        honor:42,
        courage:94,
        loyalty:82,
        compassion:48,
        morality:47,
        pragmatism:45,
        ruthlessness:34,
        ambition:22,
        leadership:78,
        independence:92,
        intelligence:38,
        strategy:34,
        manipulation:10,
        charisma:90,
        pride:58,
        determination:83,
        riskTaking:89,
        selfPreservation:70,
        emotionalControl:49,
        curiosity:40
    },
    description:
        "A fearless free spirit who combines warrior courage with loyalty, humor and independence."
},


    ygritte: {
    name: "Ygritte",
    image: "images/ygritte.png",
    traits: {
        honor:30,
        courage:92,
        loyalty:88,
        compassion:42,
        morality:35,
        pragmatism:44,
        ruthlessness:42,
        ambition:18,
        leadership:42,
        independence:94,
        intelligence:44,
        strategy:41,
        manipulation:8,
        charisma:78,
        pride:74,
        determination:48,
        riskTaking:84,
        selfPreservation:48,
        emotionalControl:48,
        curiosity:46
    },
    description:
        "A fiercely independent warrior who values freedom, loyalty and living on her own terms."
},


    davos: {
        name: "Davos Seaworth",
        image: "images/davos.png",
        traits: {
            honor:82,
            courage:48,
            loyalty:97,
            compassion:93,
            morality:94,
            pragmatism:92,
            ruthlessness:12,
            ambition:16,
            leadership:45,
            independence:42,
            intelligence:76,
            strategy:48,
            manipulation:12,
            charisma:45,
            pride:28,
            determination:48,
            riskTaking:38,
            selfPreservation:44,
            emotionalControl:81,
            curiosity:34
        },
        description:
            "A loyal and humane adviser who balances conscience with practical judgment."
    },


    melisandre: {
        name: "Melisandre",
        image: "images/melisandre.png",
        traits: {
            honor:28,
            courage:48,
            loyalty:18,
            compassion:14,
            morality:32,
            pragmatism:48,
            ruthlessness:48,
            ambition:91,
            leadership:46,
            independence:45,
            intelligence:78,
            strategy:89,
            manipulation:88,
            charisma:45,
            pride:48,
            determination:97,
            riskTaking:68,
            selfPreservation:42,
            emotionalControl:84,
            curiosity:82
        },
        description:
            "A driven believer who combines conviction, strategic influence and an unwavering sense of purpose."
    },


    jorah: { name: "Jorah Mormont", image: "images/jorah.png", traits: { honor:92, courage:84, loyalty:99, compassion:48, morality:48, pragmatism:78, ruthlessness:28, ambition:35, leadership:48, independence:40, intelligence:48, strategy:48, manipulation:20, charisma:45, pride:45, determination:97, riskTaking:45, selfPreservation:48, emotionalControl:64, curiosity:35 }, description: "A devoted protector whose loyalty and determination repeatedly overcome fear, shame and self-interest." },


    oberyn: {
    name: "Oberyn Martell",
    image: "images/oberyn.png",
    traits: {
        honor:42,
        courage:94,
        loyalty:48,
        compassion:38,
        morality:45,
        pragmatism:48,
        ruthlessness:62,
        ambition:57,
        leadership:48,
        independence:86,
        intelligence:71,
        strategy:58,
        manipulation:48,
        charisma:98,
        pride:84,
        determination:82,
        riskTaking:96,
        selfPreservation:40,
        emotionalControl:48,
        curiosity:48
    },
    description:
        "A charismatic and dangerous free spirit driven by passion, pride, vengeance and personal freedom."
},


    margaery: {
        name: "Margaery Tyrell",
        image: "images/margaery.png",
        traits: {
            honor:42,
            courage:38,
            loyalty:68,
            compassion:77,
            morality:48,
            pragmatism:82,
            ruthlessness:38,
            ambition:91,
            leadership:48,
            independence:48,
            intelligence:92,
            strategy:45,
            manipulation:94,
            charisma:99,
            pride:48,
            determination:48,
            riskTaking:44,
            selfPreservation:48,
            emotionalControl:84,
            curiosity:48
        },
        description:
            "A socially intelligent political player who uses charm, empathy and calculated influence to gain power."
    },


    drogo: {
    name: "Khal Drogo",
    image: "images/drogo.png",
    traits: {
        honor:48,
        courage:94,
        loyalty:83,
        compassion:28,
        morality:36,
        pragmatism:82,
        ruthlessness:92,
        ambition:45,
        leadership:84,
        independence:74,
        intelligence:39,
        strategy:44,
        manipulation:6,
        charisma:72,
        pride:88,
        determination:84,
        riskTaking:48,
        selfPreservation:48,
        emotionalControl:48,
        curiosity:24
    },
    description:
        "A dominant warrior leader defined by courage, pride, strength, loyalty and ruthless action."
},


    viserys: {
        name: "Viserys Targaryen",
        image: "images/viserys.png",
        traits: {
            honor:12,
            courage:22,
            loyalty:30,
            compassion:8,
            morality:18,
            pragmatism:42,
            ruthlessness:72,
            ambition:98,
            leadership:49,
            independence:45,
            intelligence:48,
            strategy:47,
            manipulation:78,
            charisma:71,
            pride:100,
            determination:48,
            riskTaking:34,
            selfPreservation:94,
            emotionalControl:20,
            curiosity:29
        },
        description:
            "A desperate claimant whose entitlement, ambition and fear make him increasingly volatile."
    },


    nightKing: {
    name: "The Night King",
    image: "images/nightking.png",
    traits: {
        honor:5,
        courage:84,
        loyalty:0,
        compassion:0,
        morality:0,
        pragmatism:48,
        ruthlessness:100,
        ambition:55,
        leadership:78,
        independence:73,
        intelligence:48,
        strategy:92,
        manipulation:20,
        charisma:18,
        pride:52,
        determination:100,
        riskTaking:41,
        selfPreservation:90,
        emotionalControl:100,
        curiosity:8
    },
    description:
        "An almost emotionless force of relentless purpose, domination and destruction."
},


    mance: {
        name: "Mance Rayder",
        image: "images/mance.png",
        traits: {
            honor:48,
            courage:83,
            loyalty:48,
            compassion:45,
            morality:45,
            pragmatism:93,
            ruthlessness:18,
            ambition:34,
            leadership:95,
            independence:92,
            intelligence:49,
            strategy:81,
            manipulation:26,
            charisma:94,
            pride:42,
            determination:84,
            riskTaking:48,
            selfPreservation:48,
            emotionalControl:78,
            curiosity:51
        },
        description:
            "A charismatic leader who values freedom, survival and unity over rigid institutions."
    }

};


/* ============================================================
HIDDEN BEHAVIORAL ROUTES

IMPORTANT:
These are NOT shown to the user.
They are the behavioral bridge between answers and characters.
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

    jon:       ["duty","protection","warrior","compassion","freedom"],
    daenerys:  ["power","protection","warrior","compassion","duty"],
    tyrion:    ["cunning","strategy","survival","compassion","power"],
    cersei:    ["power","cunning","protection","survival","vengeance"],
    jaime:     ["duty","warrior","protection","freedom","survival"],
    arya:      ["freedom","vengeance","warrior","survival","protection"],
    sansa:     ["survival","strategy","power","protection","duty"],
    ned:       ["duty","protection","compassion","warrior","strategy"],
    robb:      ["duty","warrior","power","protection","strategy"],
    catelyn:   ["protection","duty","compassion","strategy","survival"],
    joffrey:   ["power","vengeance","survival","warrior","cunning"],
    tywin:     ["power","strategy","cunning","duty","survival"],
    robert:    ["warrior","freedom","power","survival","protection"],
    stannis:   ["duty","power","strategy","warrior","vengeance"],
    theon:     ["survival","power","freedom","warrior","duty"],
    ramsay:    ["vengeance","power","cunning","survival","warrior"],
    littlefinger:["cunning","power","strategy","survival","freedom"],
    varys:     ["strategy","cunning","protection","survival","duty"],
    bronn:     ["survival","freedom","warrior","strategy","power"],
    hound:     ["freedom","warrior","survival","protection","compassion"],
    brienne:   ["duty","warrior","compassion","protection","freedom"],
    samwell:   ["compassion","strategy","duty","protection","survival"],
    tormund:   ["warrior","freedom","protection","compassion","survival"],
    ygritte:   ["freedom","warrior","vengeance","protection","survival"],
    davos:     ["compassion","duty","survival","strategy","protection"],
    melisandre:["strategy","cunning","power","vengeance","survival"],
    jorah:     ["duty","protection","warrior","survival","compassion"],
    oberyn:    ["vengeance","warrior","power","freedom","protection"],
    margaery:  ["power","cunning","compassion","strategy","protection"],
    drogo:     ["warrior","power","protection","survival","freedom"],
    viserys:   ["power","survival","cunning","vengeance","freedom"],
    nightKing: ["vengeance","warrior","strategy","power","survival"],
    mance:     ["freedom","strategy","warrior","protection","survival"]
};


/* ============================================================
50 QUESTIONS

Five answers per question.
No direct character affinity.
============================================================ */

const questions = [

{
question:"You are offered a powerful position, but accepting it means breaking an oath you made years ago. What matters most?",
answers:[
{text:"An oath is an oath. I keep it even if I lose the opportunity.",traits:["honor","loyalty","determination"],route:"duty"},
{text:"I would judge whether keeping it still protects the people who depended on me.",traits:["compassion","morality","pragmatism"],route:"protection"},
{text:"I would take the position if it gave me enough power to change things.",traits:["ambition","leadership","riskTaking"],route:"power"},
{text:"I would look for a way to accept the position without technically breaking the oath.",traits:["intelligence","strategy","manipulation"],route:"cunning"},
{text:"If the oath puts my life or future at risk, I come first.",traits:["selfPreservation","independence","pragmatism"],route:"survival"}
]},

{
question:"A colleague takes credit for something you did. What is your first instinct?",
answers:[
{text:"Confront them directly and make the truth known.",traits:["courage","pride","determination"],route:"warrior"},
{text:"Document everything and expose them when the timing is right.",traits:["intelligence","strategy","emotionalControl"],route:"strategy"},
{text:"Let it go unless it seriously damages my position.",traits:["pragmatism","selfPreservation","emotionalControl"],route:"survival"},
{text:"Make sure they regret crossing me.",traits:["ruthlessness","pride","determination"],route:"vengeance"},
{text:"Try to resolve it privately before turning it into a conflict.",traits:["compassion","morality","charisma"],route:"compassion"}
]},

{
question:"The king dies without an obvious heir. What should the realm do first?",
answers:[
{text:"Follow the strongest legitimate claim, whatever the consequences.",traits:["honor","morality","determination"],route:"duty"},
{text:"Find the candidate most capable of keeping the realm stable.",traits:["pragmatism","strategy","leadership"],route:"strategy"},
{text:"Back the claimant who can actually win and hold the throne.",traits:["ambition","leadership","riskTaking"],route:"power"},
{text:"Use the uncertainty to build alliances and improve my own position.",traits:["manipulation","intelligence","ambition"],route:"cunning"},
{text:"Avoid the succession struggle unless my survival requires involvement.",traits:["selfPreservation","independence","pragmatism"],route:"survival"}
]},

{
question:"You arrive at a feast where you know almost nobody. What are you most likely to do?",
answers:[
{text:"Find one trustworthy person and stay with them.",traits:["loyalty","emotionalControl","compassion"],route:"protection"},
{text:"Observe the room and work out who actually has influence.",traits:["intelligence","strategy","curiosity"],route:"strategy"},
{text:"Introduce myself confidently and make connections.",traits:["charisma","courage","independence"],route:"freedom"},
{text:"Look for the most powerful person and make myself useful.",traits:["ambition","manipulation","pragmatism"],route:"power"},
{text:"Stay quiet, watch everyone and avoid unnecessary attention.",traits:["selfPreservation","emotionalControl","curiosity"],route:"survival"}
]},

{
question:"A dangerous criminal is secretly protected because they have been supporting a poor family. What should happen?",
answers:[
{text:"Protecting innocent people does not excuse serious wrongdoing.",traits:["morality","honor","determination"],route:"duty"},
{text:"Find a solution that protects the family without ignoring the crime.",traits:["compassion","pragmatism","strategy"],route:"protection"},
{text:"Use the criminal's situation as leverage to gain information or cooperation.",traits:["intelligence","manipulation","pragmatism"],route:"cunning"},
{text:"If the criminal threatens my people, remove the threat permanently.",traits:["ruthlessness","courage","selfPreservation"],route:"protection"},
{text:"If the criminal is useful, I would tolerate them for now.",traits:["pragmatism","ambition","riskTaking"],route:"power"}
]},

{
question:"You must travel through a dangerous region. There is a shorter route with serious danger and a longer safe route.",
answers:[
{text:"Take the dangerous route. Delay creates its own risks.",traits:["courage","riskTaking","determination"],route:"warrior"},
{text:"Take the safer route unless the mission makes speed essential.",traits:["selfPreservation","pragmatism","strategy"],route:"survival"},
{text:"Choose whichever route gives the group the best chance overall.",traits:["leadership","strategy","compassion"],route:"protection"},
{text:"Find information first and see whether the dangerous route is really as bad as claimed.",traits:["intelligence","curiosity","strategy"],route:"strategy"},
{text:"Take the dangerous route if it gives me a chance to gain something important.",traits:["ambition","independence","riskTaking"],route:"power"}
]},

{
question:"A close friend betrays you to protect their family. How do you react?",
answers:[
{text:"I understand why they did it, even if it hurts.",traits:["compassion","loyalty","emotionalControl"],route:"compassion"},
{text:"The betrayal matters more than the reason. Trust is broken.",traits:["pride","loyalty","determination"],route:"vengeance"},
{text:"I would ask what happened before deciding what they deserve.",traits:["intelligence","morality","curiosity"],route:"strategy"},
{text:"I would forgive them if keeping them as an ally benefits both of us.",traits:["pragmatism","strategy","selfPreservation"],route:"cunning"},
{
    text:"Family comes first. I cannot blame them for choosing theirs.",
    traits:["loyalty","compassion","pragmatism"],
    route:"protection"
}
]},

{
question:"You suddenly become responsible for fifty frightened people during a crisis. What do you do first?",
answers:[
{text:"Give clear orders and establish discipline.",traits:["leadership","courage","determination"],route:"warrior"},
{text:"Make sure the weakest people are protected first.",traits:["compassion","leadership","loyalty"],route:"protection"},
{text:"Assess resources, threats and escape routes before acting.",traits:["strategy","intelligence","pragmatism"],route:"strategy"},
{text:"Take control firmly. Panic cannot be allowed to weaken authority.",traits:["leadership","ruthlessness","determination"],route:"power"},
{text:"Make sure I have a safe way out if everything collapses.",traits:["selfPreservation","pragmatism","riskTaking"],route:"survival"}
]},

{
question:"A powerful lord offers you favor in exchange for supporting them politically.",
answers:[
{text:"Accept only if I genuinely believe they are right.",traits:["honor","morality","loyalty"],route:"duty"},
{text:"Accept if it protects my family or people.",traits:["compassion","pragmatism","loyalty"],route:"protection"},
{text:"Accept immediately. Political influence is too valuable to waste.",traits:["ambition","leadership","charisma"],route:"power"},
{text:"Accept, but quietly build alternatives in case they fall.",traits:["strategy","manipulation","selfPreservation"],route:"cunning"},
{text:"Refuse. I would rather remain independent.",traits:["independence","pride","determination"],route:"freedom"}
]},

{
question:"A member of your family commits an act that seriously harms innocent people. What matters most?",
answers:[
{text:"They should face consequences regardless of who they are.",traits:["morality","honor","determination"],route:"duty"},
{text:"I would protect them only long enough to prevent further harm.",traits:["compassion","loyalty","pragmatism"],route:"protection"},
{text:"If exposing them would cause a larger disaster, I would keep it quiet.",traits:["pragmatism","selfPreservation","strategy"],route:"survival"},
{text:"Use the scandal to weaken anyone who threatens my family's position.",traits:["manipulation","ambition","strategy"],route:"cunning"},
{text:"If they deliberately hurt people, they have crossed a line.",traits:["ruthlessness","morality","determination"],route:"duty"}
]},

{
question:"You discover that a rival house has a spy inside your circle. What do you do?",
answers:[
{text:"Confront the suspected spy and demand the truth.",traits:["courage","determination","honor"],route:"warrior"},
{text:"Feed them controlled information and use them against the rival.",traits:["manipulation","intelligence","strategy"],route:"cunning"},
{text:"Quietly remove them before they can do more damage.",traits:["pragmatism","selfPreservation","ruthlessness"],route:"survival"},
{text:"Try to discover who sent them and why.",traits:["curiosity","intelligence","strategy"],route:"strategy"},
{text:"Protect my people first, then deal with the political consequences.",traits:["loyalty","compassion","leadership"],route:"protection"}
]},

{
question:"If you could spend one peaceful week anywhere in Westeros, which would appeal to you most?",
answers:[
{text:"The North, surrounded by people I trust.",traits:["loyalty","independence","honor"],route:"duty"},
{text:"A great library or learned center.",traits:["intelligence","curiosity","emotionalControl"],route:"strategy"},
{text:"A wealthy court where politics and influence matter.",traits:["ambition","charisma","manipulation"],route:"power"},
{text:"A remote place far from kings and politics.",traits:["independence","selfPreservation","courage"],route:"freedom"},
{text:"A lively port or city where anything can happen.",traits:["riskTaking","charisma","curiosity"],route:"freedom"}
]},

{
question:"A law is legal but clearly unfair to ordinary people. What should a ruler do?",
answers:[
{text:"Change it because justice matters more than technical legality.",traits:["morality","compassion","honor"],route:"compassion"},
{text:"Keep it until a practical replacement is ready.",traits:["pragmatism","strategy","leadership"],route:"strategy"},
{text:"Change it if doing so strengthens public support.",traits:["ambition","charisma","leadership"],route:"power"},
{text:"Keep it if changing it would create dangerous instability.",traits:["selfPreservation","pragmatism","determination"],route:"survival"},
{text:"Use the issue to expose and punish corrupt officials.",traits:["ruthlessness","determination","morality"],route:"duty"}
]},

{
question:"A damaging rumor about you is spreading. What is your response?",
answers:[
{text:"Confront whoever started it.",traits:["courage","pride","determination"],route:"warrior"},
{text:"Ignore it unless it begins affecting people I care about.",traits:["emotionalControl","loyalty","compassion"],route:"protection"},
{text:"Find out who started it and why before acting.",traits:["intelligence","curiosity","strategy"],route:"strategy"},
{text:"Turn the rumor to my advantage.",traits:["charisma","manipulation","intelligence"],route:"cunning"},
{text:"Protect my reputation because it is a shield against future threats.",traits:["selfPreservation","pride","pragmatism"],route:"survival"}
]},

{
question:"You love someone, but your duty requires you to make a decision that may hurt them.",
answers:[
{text:"Duty comes first.",traits:["honor","determination","morality"],route:"duty"},
{text:"I would search for a third option before choosing.",traits:["strategy","compassion","intelligence"],route:"protection"},
{text:"I would choose the person I love.",traits:["loyalty","independence","courage"],route:"freedom"},
{text:"I would weigh the long-term consequences rather than the emotion of the moment.",traits:["pragmatism","emotionalControl","strategy"],route:"strategy"},
{text:"If choosing them costs me everything, I need to know whether they would do the same.",traits:["selfPreservation","loyalty","pride"],route:"survival"}
]},

{
question:"Winter has caused a severe food shortage. What should the leader do?",
answers:[
{text:"Distribute food according to need.",traits:["compassion","morality","leadership"],route:"protection"},
{text:"Control supplies strictly and prioritize the people essential to survival.",traits:["pragmatism","strategy","leadership"],route:"survival"},
{text:"Secure more food by taking it from a weaker neighboring region.",traits:["ruthlessness","ambition","riskTaking"],route:"power"},
{text:"Build alliances and trade networks to solve the shortage.",traits:["charisma","strategy","intelligence"],route:"cunning"},
{text:"Ask everyone to sacrifice equally.",traits:["honor","loyalty","determination"],route:"duty"}
]},

{
question:"A rival becomes unexpectedly popular among your people. What do you do?",
answers:[
{text:"Earn their loyalty through better leadership.",traits:["leadership","charisma","determination"],route:"power"},
{text:"Study why people support them and adapt.",traits:["intelligence","strategy","curiosity"],route:"strategy"},
{text:"Expose weaknesses or wrongdoing if they have any.",traits:["manipulation","ruthlessness","strategy"],route:"cunning"},
{text:"Ignore popularity and remain focused on my principles.",traits:["honor","independence","morality"],route:"duty"},
{text:"Make sure they cannot become a threat to the people I protect.",traits:["compassion","selfPreservation","loyalty"],route:"protection"}
]},

{
question:"An enemy captures someone you love and offers a trade.",
answers:[
{text:"I would risk almost anything to save them.",traits:["loyalty","courage","determination"],route:"protection"},
{text:"I would negotiate first and avoid giving the enemy unnecessary power.",traits:["strategy","pragmatism","intelligence"],route:"cunning"},
{text:"I would attack immediately.",traits:["courage","riskTaking","ruthlessness"],route:"warrior"},
{text:"I would assess whether the rescue endangers many more lives.",traits:["morality","pragmatism","leadership"],route:"duty"},
{text:"I would make sure I have a way to survive if the rescue fails.",traits:["selfPreservation","strategy","emotionalControl"],route:"survival"}
]},

{
question:"A friend asks for your honest opinion about a decision you think is terrible.",
answers:[
{text:"Tell them exactly what I think.",traits:["honor","courage","loyalty"],route:"duty"},
{text:"Be honest, but choose my words carefully so I do not hurt them unnecessarily.",traits:["compassion","charisma","emotionalControl"],route:"compassion"},
{text:"Ask questions first. I may not know everything they know.",traits:["curiosity","intelligence","emotionalControl"],route:"strategy"},
{text:"Tell them what will keep our relationship strongest.",traits:["loyalty","pragmatism","selfPreservation"],route:"protection"},
{text:"If their decision affects my interests, I will be completely direct.",traits:["independence","pride","determination"],route:"freedom"}
]},

{
question:"After a major defeat, the population is frightened. What should the leader say?",
answers:[
{text:"Tell the truth, even if it is frightening.",traits:["honor","morality","courage"],route:"duty"},
{text:"Give people hope and confidence.",traits:["charisma","leadership","compassion"],route:"protection"},
{text:"Explain a practical plan for surviving what comes next.",traits:["strategy","pragmatism","intelligence"],route:"survival"},
{text:"Use the crisis to rally people behind a stronger authority.",traits:["ambition","leadership","determination"],route:"power"},
{text:"Reveal only what people need to know.",traits:["emotionalControl","manipulation","strategy"],route:"cunning"}
]},

{
question:"A rival house offers an alliance that could end a war, but you distrust its leaders.",
answers:[
{text:"Honor the agreement if it is formally made.",traits:["honor","loyalty","morality"],route:"duty"},
{text:"Accept, but prepare for betrayal.",traits:["strategy","selfPreservation","pragmatism"],route:"survival"},
{text:"Use the alliance to gain enough strength to dominate later.",traits:["ambition","leadership","strategy"],route:"power"},
{text:"Test them with small commitments before trusting them.",traits:["intelligence","curiosity","emotionalControl"],route:"cunning"},
{text:"Reject them. I would rather remain free than depend on them.",traits:["independence","pride","determination"],route:"freedom"}
]},

{
question:"You face an enemy army much stronger than yours.",
answers:[
{text:"Fight anyway. Retreat would betray what we stand for.",traits:["courage","honor","determination"],route:"warrior"},
{text:"Find terrain or tactics that remove their advantage.",traits:["strategy","intelligence","pragmatism"],route:"strategy"},
{text:"Negotiate if it saves the people who depend on me.",traits:["compassion","leadership","morality"],route:"protection"},
{text:"Look for a weakness inside their command.",traits:["manipulation","curiosity","strategy"],route:"cunning"},
{text:"Preserve as much of my force as possible and fight another day.",traits:["selfPreservation","pragmatism","independence"],route:"survival"}
]},

{
question:"You witness an execution you believe is unjust. What do you do?",
answers:[
{text:"Intervene, even if it puts my life at risk.",traits:["courage","morality","honor"],route:"duty"},
{text:"Gather proof and challenge the decision properly.",traits:["intelligence","strategy","determination"],route:"strategy"},
{text:"Free the person immediately if I have the chance.",traits:["compassion","riskTaking","courage"],route:"protection"},
{text:"Use the injustice to turn people against the person responsible.",traits:["charisma","manipulation","ambition"],route:"cunning"},
{text:"If the authority becomes a threat, make sure they cannot repeat it.",traits:["ruthlessness","determination","morality"],route:"protection"}
]},

{
question:"At a royal feast, you realize several powerful people are watching you.",
answers:[
{text:"Enjoy myself. I will not change who I am for them.",traits:["independence","charisma","courage"],route:"freedom"},
{text:"Observe who talks to whom and what they are trying to accomplish.",traits:["intelligence","strategy","curiosity"],route:"strategy"},
{text:"Use the opportunity to build relationships with influential people.",traits:["charisma","ambition","manipulation"],route:"power"},
{text:"Stay close to people I trust.",traits:["loyalty","emotionalControl","compassion"],route:"protection"},
{text:"Say as little as possible and avoid becoming a target.",traits:["selfPreservation","pragmatism","emotionalControl"],route:"survival"}
]},

{
question:"Someone who betrayed you years ago suddenly asks for forgiveness.",
answers:[
{text:"Forgive them if they genuinely accept responsibility.",traits:["compassion","morality","emotionalControl"],route:"compassion"},
{text:"Forgiveness is possible, but trust must be earned again.",traits:["loyalty","pragmatism","determination"],route:"duty"},
{text:"Use their regret to gain something useful.",traits:["manipulation","strategy","pragmatism"],route:"cunning"},
{text:"They crossed a line. Some things cannot be forgiven.",traits:["pride","ruthlessness","determination"],route:"vengeance"},
{text:"I would forgive them if keeping peace benefits everyone.",traits:["pragmatism","leadership","compassion"],route:"protection"}
]},

{
question:"You discover something strange that no one else understands.",
answers:[
{text:"Investigate it until I understand what it is.",traits:["curiosity","intelligence","determination"],route:"strategy"},
{text:"Keep it secret until I know whether it is dangerous.",traits:["selfPreservation","emotionalControl","pragmatism"],route:"survival"},
{text:"Tell trusted people and work together to understand it.",traits:["loyalty","compassion","curiosity"],route:"protection"},
{text:"Find out whether it can give me an advantage.",traits:["ambition","strategy","riskTaking"],route:"power"},
{text:"Approach it if there is a real chance of understanding it.",traits:["courage","curiosity","independence"],route:"warrior"}
]},

{
question:"The Night's Watch asks you to help defend the Wall.",
answers:[
{text:"Go. If the realm needs defending, someone has to stand there.",traits:["honor","courage","determination"],route:"duty"},
{text:"Go if I can protect people who cannot protect themselves.",traits:["compassion","loyalty","courage"],route:"protection"},
{text:"Go only after understanding the threat and our chances.",traits:["strategy","intelligence","pragmatism"],route:"strategy"},
{text:"Go if it offers me a meaningful purpose or chance to prove myself.",traits:["ambition","pride","determination"],route:"power"},
{text:"Refuse unless there is no other way to survive.",traits:["selfPreservation","independence","pragmatism"],route:"survival"}
]},

{
question:"You suddenly gain significant political influence. What do you do first?",
answers:[
{text:"Use it to protect people who would otherwise be ignored.",traits:["compassion","leadership","morality"],route:"protection"},
{text:"Build a network so I cannot easily be removed.",traits:["strategy","selfPreservation","manipulation"],route:"cunning"},
{text:"Push the changes I believe are necessary.",traits:["ambition","determination","leadership"],route:"power"},
{text:"Keep my independence and avoid becoming someone's servant.",traits:["independence","pride","courage"],route:"freedom"},
{text:"Gather information before making major moves.",traits:["intelligence","curiosity","emotionalControl"],route:"strategy"}
]},

{
question:"Two people you care about are in a bitter argument. What do you do?",
answers:[
{text:"Try to understand both sides and find common ground.",traits:["compassion","emotionalControl","charisma"],route:"compassion"},
{text:"Tell them directly who is wrong.",traits:["honor","courage","determination"],route:"duty"},
{text:"Keep them from damaging each other until they calm down.",traits:["compassion","leadership","pragmatism"],route:"protection"},
{text:"Use the dispute to understand what each person really wants.",traits:["intelligence","curiosity","strategy"],route:"cunning"},
{text:"Stay out unless the conflict threatens me or my interests.",traits:["independence","selfPreservation","pragmatism"],route:"survival"}
]},

{
question:"You are told that sacrificing one innocent person could save a thousand others.",
answers:[
{text:"I cannot deliberately sacrifice an innocent person.",traits:["morality","compassion","honor"],route:"duty"},
{text:"I would consider it if every other option truly failed.",traits:["pragmatism","strategy","emotionalControl"],route:"strategy"},
{text:"If I am responsible for the thousand lives, I may have to make the terrible choice.",traits:["leadership","determination","morality"],route:"protection"},
{text:"I would find a way to make someone else take responsibility.",traits:["manipulation","selfPreservation","strategy"],route:"cunning"},
{text:"One life is a price I am willing to pay if the outcome is worth it.",traits:["ruthlessness","riskTaking","pragmatism"],route:"strategy"}
]},

{
question:"How would you most want people to remember you?",
answers:[
{text:"As someone who kept their word.",traits:["honor","loyalty","morality"],route:"duty"},
{text:"As someone who protected others.",traits:["compassion","courage","leadership"],route:"protection"},
{text:"As someone who changed the world.",traits:["ambition","determination","leadership"],route:"power"},
{text:"As someone nobody could outsmart.",traits:["intelligence","strategy","manipulation"],route:"cunning"},
{text:"As someone who lived freely and on their own terms.",traits:["independence","riskTaking","pride"],route:"freedom"}
]},

{
question:"You hear a valuable secret about someone powerful.",
answers:[
{text:"Keep it unless revealing it prevents serious harm.",traits:["morality","loyalty","emotionalControl"],route:"duty"},
{text:"Store it as insurance for the future.",traits:["strategy","selfPreservation","intelligence"],route:"survival"},
{text:"Use it to gain influence over them.",traits:["manipulation","ambition","pragmatism"],route:"cunning"},
{text:"Reveal it if they deserve to be exposed.",traits:["ruthlessness","determination","morality"],route:"vengeance"},
{text:"Tell the people who need to know.",traits:["compassion","leadership","loyalty"],route:"protection"}
]},

{
question:"Your castle is under siege and food is running low.",
answers:[
{text:"Hold the walls as long as possible.",traits:["courage","honor","determination"],route:"warrior"},
{text:"Ration supplies carefully and search for a way out.",traits:["pragmatism","strategy","selfPreservation"],route:"survival"},
{text:"Protect civilians and vulnerable people first.",traits:["compassion","leadership","loyalty"],route:"protection"},
{text:"Send someone to negotiate or deceive the enemy.",traits:["intelligence","manipulation","strategy"],route:"cunning"},
{text:"Launch a risky attack to break the siege.",traits:["riskTaking","courage","ambition"],route:"warrior"}
]},


{
    question: "A skilled adviser strongly disagrees with a plan you believe is necessary. What do you do?",
    answers: [
        {
            text: "Hear their objections and change the plan if they reveal a serious flaw.",
            traits: ["curiosity", "intelligence", "pragmatism"],
            route: "strategy"
        },
        {
            text: "Explain my reasoning and ask them to stand with the group.",
            traits: ["leadership", "charisma", "loyalty"],
            route: "protection"
        },
        {
            text: "Make the final decision and expect them to carry it out.",
            traits: ["leadership", "determination", "pride"],
            route: "power"
        },
        {
            text: "Find a compromise that preserves the goal while giving them room to act.",
            traits: ["strategy", "compassion", "pragmatism"],
            route: "compassion"
        },
        {
            text: "If they cannot accept my decision, I would rather continue without them.",
            traits: ["independence", "selfPreservation", "determination"],
            route: "freedom"
        }
    ]
},

{
question:"You must make an important decision with incomplete information.",
answers:[
{text:"Act on principle and accept the uncertainty.",traits:["honor","courage","determination"],route:"duty"},
{text:"Delay until I can gather enough information.",traits:["intelligence","curiosity","strategy"],route:"strategy"},
{text:"Choose the option that keeps the most people safe.",traits:["compassion","leadership","pragmatism"],route:"protection"},
{text:"Choose the option that gives me the most leverage later.",traits:["ambition","manipulation","strategy"],route:"power"},
{text:"Choose whatever gives me the best chance of surviving if wrong.",traits:["selfPreservation","pragmatism","riskTaking"],route:"survival"}
]},

{
question:"A dragon suddenly appears above your settlement.",
answers:[
{text:"Get people to safety immediately.",traits:["leadership","compassion","courage"],route:"protection"},
{text:"Study its behavior before deciding how to respond.",traits:["intelligence","curiosity","emotionalControl"],route:"strategy"},
{text:"Try to find out whether it can be controlled or used.",traits:["ambition","riskTaking","strategy"],route:"power"},
{text:"Stay out of its way and survive.",traits:["selfPreservation","pragmatism","independence"],route:"survival"},
{text:"Approach it if there is even a chance of understanding it.",traits:["courage","curiosity","independence"],route:"warrior"}
]},

{
question:"A highly useful soldier repeatedly breaks your rules.",
answers:[
{text:"Rules exist for a reason. Discipline must come first.",traits:["honor","leadership","determination"],route:"duty"},
{text:"Keep them if their results save lives, but set limits.",traits:["pragmatism","leadership","compassion"],route:"protection"},
{text:"Use their reputation as long as it benefits the cause.",traits:["ambition","strategy","ruthlessness"],route:"power"},
{text:"Find out why they break the rules and whether they can be controlled.",traits:["intelligence","manipulation","curiosity"],route:"cunning"},
{text:"If they become a threat, remove them.",traits:["selfPreservation","ruthlessness","determination"],route:"survival"}
]},

{
question:"Your group can escape, but one person must stay behind to buy time.",
answers:[
{text:"I would volunteer myself.",traits:["courage","loyalty","compassion"],route:"protection"},
{text:"Choose whoever freely agrees to do it.",traits:["morality","honor","determination"],route:"duty"},
{text:"Choose the person whose sacrifice gives the group the best chance.",traits:["pragmatism","strategy","leadership"],route:"strategy"},
{text:"If nobody volunteers, I would make the decision necessary to save the group.",traits:["ruthlessness","leadership","selfPreservation"],route:"power"},
{text:"Find another escape route rather than accepting the sacrifice.",traits:["independence","curiosity","riskTaking"],route:"freedom"}
]},

{
question:"You are offered a promotion with more money but less freedom.",
answers:[
{text:"Take it if it gives me greater ability to help others.",traits:["leadership","ambition","compassion"],route:"protection"},
{text:"Reject it. Freedom matters more than wealth.",traits:["independence","pride","riskTaking"],route:"freedom"},
{text:"Take it if I can negotiate better terms.",traits:["pragmatism","intelligence","strategy"],route:"cunning"},
{text:"Take it. Security is valuable.",traits:["selfPreservation","pragmatism","determination"],route:"survival"},
{text:"Accept if I gave my word to someone who depends on me.",traits:["loyalty","honor","determination"],route:"duty"}
]},

{
question:"Someone deliberately insults you in front of a crowd.",
answers:[
{text:"Ignore it. They want a reaction.",traits:["emotionalControl","pragmatism","intelligence"],route:"strategy"},
{text:"Answer them directly.",traits:["courage","pride","charisma"],route:"warrior"},
{text:"Humiliate them with words instead of violence.",traits:["charisma","intelligence","manipulation"],route:"cunning"},
{text:"Make sure they never do it again.",traits:["ruthlessness","determination","pride"],route:"vengeance"},
{text:"Leave. I have nothing to prove to them.",traits:["independence","emotionalControl","selfPreservation"],route:"freedom"}
]},

{
question:"You discover a conspiracy against the ruler you serve.",
answers:[
{text:"Warn the ruler immediately.",traits:["loyalty","honor","courage"],route:"duty"},
{text:"Investigate quietly before revealing anything.",traits:["strategy","intelligence","emotionalControl"],route:"strategy"},
{text:"Use the conspiracy to strengthen my own position.",traits:["ambition","manipulation","pragmatism"],route:"power"},
{text:"Protect the people who would suffer if the conspiracy succeeds.",traits:["compassion","leadership","loyalty"],route:"protection"},
{text:"Stay out unless the conspiracy threatens me directly.",traits:["selfPreservation","independence","pragmatism"],route:"survival"}
]},

{
question:"Which life sounds most appealing?",
answers:[
{text:"A respected life of duty and responsibility.",traits:["honor","loyalty","morality"],route:"duty"},
{text:"A powerful life where I can shape events.",traits:["ambition","leadership","determination"],route:"power"},
{text:"A free life with few rules and no master.",traits:["independence","riskTaking","courage"],route:"freedom"},
{text:"A quiet life where I can keep the people I love safe.",traits:["compassion","loyalty","selfPreservation"],route:"protection"},
{text:"A life where I survive anything and owe nobody anything.",traits:["pragmatism","selfPreservation","independence"],route:"survival"}
]},

{
question:"A friend is trapped inside a dangerous building.",
answers:[
{text:"Go in immediately.",traits:["courage","loyalty","riskTaking"],route:"warrior"},
{text:"Find the safest way to get them out.",traits:["strategy","intelligence","compassion"],route:"protection"},
{text:"Bring others and make a coordinated rescue.",traits:["leadership","loyalty","determination"],route:"duty"},
{text:"If the rescue is impossible, I will not throw away more lives.",traits:["pragmatism","selfPreservation","emotionalControl"],route:"survival"},
{text:"Use the situation to lure the enemy into a trap.",traits:["manipulation","strategy","ruthlessness"],route:"cunning"}
]},


{
    question: "You discover that one of your own decisions caused avoidable harm. What do you do?",
    answers: [
        {
            text: "Admit the mistake openly and accept the consequences.",
            traits: ["honor", "morality", "determination"],
            route: "duty"
        },
        {
            text: "Focus first on helping those harmed and repairing the damage.",
            traits: ["compassion", "leadership", "loyalty"],
            route: "protection"
        },
        {
            text: "Trace the failure carefully and change the plan so it does not happen again.",
            traits: ["intelligence", "curiosity", "strategy"],
            route: "strategy"
        },
        {
            text: "Control what I disclose until I understand the full consequences.",
            traits: ["emotionalControl", "pragmatism", "selfPreservation"],
            route: "survival"
        },
        {
            text: "Negotiate the least damaging outcome and protect my ability to act.",
            traits: ["pragmatism", "manipulation", "selfPreservation"],
            route: "cunning"
        }
    ]
},

{
question:"A respected person claims a prophecy says you have an important destiny.",
answers:[
{text:"Destiny does not excuse me from my responsibilities.",traits:["honor","morality","determination"],route:"duty"},
{text:"I would investigate whether the prophecy is credible.",traits:["curiosity","intelligence","strategy"],route:"strategy"},
{text:"If it gives me influence, I would use it.",traits:["ambition","charisma","leadership"],route:"power"},
{text:"I would be cautious. Believing it could make me reckless.",traits:["selfPreservation","emotionalControl","pragmatism"],route:"survival"},
{text:"If destiny calls for action, I would act.",traits:["courage","riskTaking","determination"],route:"warrior"}
]},

{
question:"You are offered a seat on the Small Council. What is most attractive about it?",
answers:[
{text:"The ability to serve the realm responsibly.",traits:["honor","leadership","morality"],route:"duty"},
{text:"Access to information and strategic influence.",traits:["intelligence","strategy","curiosity"],route:"strategy"},
{text:"A direct path to greater power.",traits:["ambition","leadership","determination"],route:"power"},
{text:"The ability to protect people from bad decisions.",traits:["compassion","pragmatism","loyalty"],route:"protection"},
{text:"The ability to build connections and protect my own position.",traits:["manipulation","charisma","selfPreservation"],route:"cunning"}
]},

{
question:"Your family asks you to support a decision you believe is wrong.",
answers:[
{text:"Refuse. Family cannot make wrong right.",traits:["morality","honor","determination"],route:"duty"},
{text:"Support them if the decision protects the family from a greater threat.",traits:["loyalty","pragmatism","compassion"],route:"protection"},
{text:"Try to change their decision without openly opposing them.",traits:["strategy","manipulation","intelligence"],route:"cunning"},
{text:"Choose my own path. I will not surrender my independence.",traits:["independence","pride","courage"],route:"freedom"},
{text:"Support them only if doing so does not endanger me.",traits:["selfPreservation","pragmatism","emotionalControl"],route:"survival"}
]},

{
question:"Your side suffers a devastating defeat. What is your next move?",
answers:[
{text:"Rally everyone and fight again.",traits:["leadership","courage","determination"],route:"warrior"},
{text:"Withdraw, preserve resources and rebuild.",traits:["selfPreservation","pragmatism","strategy"],route:"survival"},
{text:"Find out exactly why we lost.",traits:["intelligence","curiosity","strategy"],route:"strategy"},
{text:"Use the defeat to remove rivals and consolidate power.",traits:["ambition","ruthlessness","manipulation"],route:"power"},
{text:"Make sure the people who died did not die for nothing.",traits:["loyalty","honor","morality"],route:"duty"}
]},

{
question:"If you were suddenly offered the Iron Throne, what would matter most?",
answers:[
{text:"Whether I could rule justly.",traits:["morality","honor","leadership"],route:"duty"},
{text:"Whether I could protect the realm from its enemies.",traits:["courage","strategy","compassion"],route:"protection"},
{text:"The ability to shape the future according to my vision.",traits:["ambition","determination","leadership"],route:"power"},
{text:"The influence and information that come with the position.",traits:["intelligence","manipulation","strategy"],route:"cunning"},
{text:"Whether taking it would destroy the life I actually want.",traits:["independence","selfPreservation","pragmatism"],route:"freedom"}
]},

{
question:"Everything collapses at once. Your allies are divided, enemies are closing in and there is no perfect choice.",
answers:[
{text:"Stand by my principles and do what I believe is right.",traits:["honor","morality","determination"],route:"duty"},
{text:"Protect the people closest to me first.",traits:["loyalty","compassion","courage"],route:"protection"},
{text:"Take control and force a path through the chaos.",traits:["leadership","ambition","riskTaking"],route:"power"},
{text:"Find the hidden advantage and turn the situation around.",traits:["intelligence","strategy","manipulation"],route:"cunning"},
{text:"Do whatever is necessary to survive.",traits:["selfPreservation","pragmatism","independence"],route:"survival"}
]}

];


/* ============================================================
VALIDATION
============================================================ */

function clamp(value, min = 0, max = 100) {
    return Math.max(
        min,
        Math.min(max, Number(value) || 0)
    );
}

function validateData() {

    const errors = [];

    const characterIds =
        Object.keys(CHARACTERS);

    if (characterIds.length !== 33) {
        errors.push(
            `Expected 33 characters, found ${characterIds.length}.`
        );
    }

    if (questions.length !== 50) {
        errors.push(
            `Expected 50 questions, found ${questions.length}.`
        );
    }

    questions.forEach((question, qi) => {

        if (
            !Array.isArray(question.answers) ||
            question.answers.length !== 5
        ) {
            errors.push(
                `Question ${qi + 1} must have exactly 5 answers.`
            );
            return;
        }

        question.answers.forEach((answer, ai) => {

            if (
                !answer.route ||
                !Object.prototype.hasOwnProperty.call(
                    ROUTES,
                    answer.route
                )
            ) {
                errors.push(
                    `Q${qi + 1} A${ai + 1}: invalid route.`
                );
            }

            (answer.traits || []).forEach(trait => {

                if (!TRAIT_KEYS.includes(trait)) {
                    errors.push(
                        `Q${qi + 1} A${ai + 1}: invalid trait ${trait}.`
                    );
                }

            });

        });

    });

    characterIds.forEach(id => {

        TRAIT_KEYS.forEach(trait => {

            if (
                !Object.prototype.hasOwnProperty.call(
                    CHARACTERS[id].traits,
                    trait
                )
            ) {
                errors.push(
                    `${id}: missing trait ${trait}.`
                );
            }

        });

        (CHARACTER_ROUTES[id] || []).forEach(route => {

            if (!Object.prototype.hasOwnProperty.call(
                ROUTES,
                route
            )) {
                errors.push(
                    `${id}: invalid route ${route}.`
                );
            }

        });

    });

    if (errors.length) {

        console.error(
    "GoT quiz validation errors:",
    errors
);

errors.forEach(error => {
    console.error(error);
});

        return false;
    }

    console.log(
        `GoT Personality Quiz validated: ` +
        `${questions.length} questions, ` +
        `${characterIds.length} characters, ` +
        `${TRAIT_KEYS.length} traits, ` +
        `${Object.keys(ROUTES).length} routes.`
    );

    return true;
}


/* ============================================================
PERSONALITY CALCULATION
============================================================ */

function calculatePersonality(answerIndexes) {

    const raw = {};
    const maxScores = {};

    const routeRaw = {};
    const routeMaxScores = {};

    TRAIT_KEYS.forEach(trait => {
        raw[trait] = 0;
        maxScores[trait] = 0;
    });

    Object.keys(ROUTES).forEach(route => {
        routeRaw[route] = 0;
        routeMaxScores[route] = 0;
    });

    questions.forEach(
        (question, questionIndex) => {

            const answerIndex =
                answerIndexes[questionIndex];

            if (!Number.isInteger(answerIndex)) {
                return;
            }

            const answer =
                question.answers[answerIndex];

            if (!answer) {
                return;
            }

            (answer.traits || []).forEach(trait => {

                if (
                    Object.prototype
                        .hasOwnProperty
                        .call(raw, trait)
                ) {
                    raw[trait]++;
                }

            });

            if (
                answer.route &&
                Object.prototype
                    .hasOwnProperty
                    .call(routeRaw, answer.route)
            ) {
                routeRaw[answer.route]++;
            }

        }
    );

    /*
       Exactly like the current TWD normalization:
       a trait's maximum opportunity is determined by whether
       that trait appears anywhere in the question's five answers.
    */

    questions.forEach(question => {

        const traitsPresent = new Set();
        const routesPresent = new Set();

        question.answers.forEach(answer => {

            (answer.traits || []).forEach(
                trait => traitsPresent.add(trait)
            );

            if (answer.route) {
                routesPresent.add(answer.route);
            }

        });

        traitsPresent.forEach(trait => {

            if (
                Object.prototype
                    .hasOwnProperty
                    .call(maxScores, trait)
            ) {
                maxScores[trait]++;
            }

        });

        routesPresent.forEach(route => {

            if (
                Object.prototype
                    .hasOwnProperty
                    .call(routeMaxScores, route)
            ) {
                routeMaxScores[route]++;
            }

        });

    });

    const profile = {};
    const routeProfile = {};

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

    Object.keys(ROUTES).forEach(route => {

        const max =
            Number(routeMaxScores[route]) || 0;

        routeProfile[route] =
            max > 0
                ? (routeRaw[route] / max) * 100
                : 0;

    });

    const answered =
        answerIndexes.filter(
            Number.isInteger
        ).length;

    return {
        raw,
        maxScores,
        profile,
        routeRaw,
        routeMaxScores,
        routeProfile,
        completion:
            questions.length
                ? Math.round(
                    (answered /
                        questions.length) *
                    100
                )
                : 0
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
CONTRADICTION CONTROL

This is important for sparse profiles.

If a user is extremely high in a trait that is deliberately
zero for a character, that character should lose some score.
============================================================ */

function calculateContradictionPenalty(
    character,
    profile
) {

    let penalty = 0;

    TRAIT_KEYS.forEach(trait => {

        const userValue =
            clamp(profile[trait]);

        const characterValue =
            getCharacterTraitValue(
                character,
                trait
            );

        if (characterValue !== 0) {
            return;
        }

        if (userValue >= 90) {
            penalty += 10;
        } else if (userValue >= 75) {
            penalty += 7;
        } else if (userValue >= 60) {
            penalty += 4;
        } else if (userValue >= 45) {
            penalty += 1.5;
        }

    });

    return penalty;
}


/* ============================================================
ROUTE OPPORTUNITY NORMALIZATION
============================================================ */

const ROUTE_OPPORTUNITY = {};

Object.keys(ROUTES).forEach(
    route => {
        ROUTE_OPPORTUNITY[route] = 0;
    }
);

questions.forEach(question => {

    const routesPresent = new Set();

    question.answers.forEach(answer => {

        if (answer.route) {
            routesPresent.add(
                answer.route
            );
        }

    });

    routesPresent.forEach(route => {

        if (
            Object.prototype
                .hasOwnProperty
                .call(
                    ROUTE_OPPORTUNITY,
                    route
                )
        ) {
            ROUTE_OPPORTUNITY[route]++;
        }

    });

});


function calculateRouteProfile(
    personality
) {

    const result = {};

    Object.keys(ROUTES).forEach(route => {

        const max =
            Number(
                ROUTE_OPPORTUNITY[route]
            ) || 0;

        result[route] =
            max > 0
                ? clamp(
                    (
                        personality.routeRaw[route] /
                        max
                    ) * 100
                )
                : 0;

    });

    return result;
}


/* ============================================================
CHARACTER ROUTE FIT
============================================================ */

function calculateCharacterRouteFit(
    characterId,
    personality
) {

    const routes =
        CHARACTER_ROUTES[characterId] ||
        [];

    if (!routes.length) {
        return {
            primary: 0,
            secondary: 0
        };
    }

    const profile =
        personality.routeProfile;

    /*
       First three routes are primary.
       Last two are secondary.
    */

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
                (profile[route] || 0) *
                weight;

            primaryWeightTotal +=
                weight;

        }
    );

    const primary =
        primaryWeightTotal
            ? primaryTotal /
              primaryWeightTotal
            : 0;

    let secondary = 0;

    if (secondaryRoutes.length) {

        secondary =
            secondaryRoutes.reduce(
                (sum, route) =>
                    sum +
                    (profile[route] || 0),
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

Contradiction penalty applied afterwards.
============================================================ */

function calculateCharacterMatch(
    characterId,
    personality
) {

    const character =
        CHARACTERS[characterId];

    if (!character) {
        return 0;
    }

    const core =
        calculateCoreFit(
            character,
            personality.profile
        );

    const secondary =
        calculateSecondaryFit(
            character,
            personality.profile
        );

    const minor =
        calculateMinorFit(
            character,
            personality.profile
        );

    const overall =
        calculateOverallTraitFit(
            character,
            personality.profile
        );

    const routes =
        calculateCharacterRouteFit(
            characterId,
            personality
        );

    const contradiction =
        calculateContradictionPenalty(
            character,
            personality.profile
        );

    const score =
        (core * 0.40) +
        (secondary * 0.20) +
        (minor * 0.05) +
        (routes.primary * 0.15) +
        (routes.secondary * 0.10) +
        (overall * 0.10) -
        contradiction;

    return clamp(score);
}


/* ============================================================
ALL CHARACTER MATCHES
============================================================ */

function calculateAllCharacterMatches(
    personality
) {

    return Object.keys(CHARACTERS)
        
.map(id => ({
    id,
    name: CHARACTERS[id].name,
    image: CHARACTERS[id].image || "",
    score: calculateCharacterMatch(
        id,
        personality
    ),
    character: CHARACTERS[id]
}))
        .sort(
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

                return a.name.localeCompare(
                    b.name
                );

            }
        );
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
                    profile[trait]
                )
        }))
        .sort(
            (a, b) => {

                if (
                    b.value !==
                    a.value
                ) {
                    return (
                        b.value -
                        a.value
                    );
                }

                return TRAITS[
                    a.trait
                ].localeCompare(
                    TRAITS[b.trait]
                );

            }
        );
}


function escapeHtml(value) {

    return String(value)
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );

}


function renderTraitLists(profile) {

    const ranking =
        getTraitRanking(
            profile
        );

    /*
       Same basic result structure as TWD:
       strongest 5
       other 10
       weakest 5
    */

    const strongest =
        ranking.slice(0, 5);

    const weakest =
        ranking
            .slice(-5)
            .reverse();

    const middle =
        ranking.slice(5, -5);

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
        currentQuestion ===
        questions.length - 1;

    const answered =
        getSelectedIndex() !== null;

    const complete =
        allQuestionsAnswered();


    if (backButton) {

        backButton.disabled =
            first;

    }


    if (last) {

        /*
           Important:
           Use the hidden class rather than
           inline display because CSS contains
           display:none !important.
        */

        nextButton?.classList.add(
            "hidden"
        );

        submitButton?.classList.remove(
            "hidden"
        );


        if (submitButton) {

            submitButton.disabled =
                !complete;

            submitButton.textContent =
                complete
                    ? "SEE MY RESULT"
                    : "ANSWER ALL QUESTIONS";

        }

        return;

    }


    submitButton?.classList.add(
        "hidden"
    );

    nextButton?.classList.remove(
        "hidden"
    );


    if (nextButton) {

        nextButton.textContent =
            "NEXT →";

        nextButton.disabled =
            !answered;

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
START QUIZ
============================================================ */

function startQuiz() {

    currentQuestion = 0;

    answerIndexes =
        new Array(
            questions.length
        );

    latestPersonality = null;

    latestMatches = [];


    if (submitButton) {

        submitButton.disabled =
            false;

    }


    /*
       Hide SEO / information content
       while the interactive quiz is running.
    */

    homeInfo?.classList.add(
        "hidden"
    );


    suggestionsCard?.classList.add(
        "hidden"
    );


    showScreen(
        quizScreen
    );


    renderQuestion();

}




/* ============================================================
SUBMIT QUIZ — GAME OF THRONES
============================================================ */

function submitQuiz() {

    if (!allQuestionsAnswered()) {

        const firstMissing = answerIndexes.findIndex(
            (value, index) => {
                const question = questions[index];

                return (
                    !Number.isInteger(value) ||
                    value < 0 ||
                    !question ||
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

        // Use the original GOT scoring engine.
        latestPersonality =
            calculatePersonality(answerIndexes);

        latestPersonality.routeProfile =
            calculateRouteProfile(latestPersonality);

        latestMatches =
            calculateAllCharacterMatches(latestPersonality);

        if (
            !Array.isArray(latestMatches) ||
            latestMatches.length === 0
        ) {
            throw new Error(
                "No Game of Thrones character matches returned."
            );
        }

        // Original GOT renderer expects no arguments.
        renderResults();

        showScreen(resultScreen);

        // Restore the information and suggested quiz sections.
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
            "There was a problem calculating your result. Please refresh the page and try again."
        );
    }
}



/* ============================================================
RESULT RENDERING — GAME OF THRONES
============================================================ */

function renderResults() {

    const winner = latestMatches[0];

    if (!winner) {
        console.error("No winning character available.");
        return;
    }

    // Result title
    if (resultTitleElement) {
        resultTitleElement.textContent =
            `You are most like ${winner.name}`;
    }

    // Result description
    if (resultDescriptionElement) {
        resultDescriptionElement.textContent =
            `${winner.name} ${QUIZ_CONFIG.resultDescription}`;
    }

    // Winner portrait
    if (winnerImageElement) {

        const image =
            winner.character?.image ||
            winner.image ||
            "";

        const imageWrap =
            winnerImageElement.closest(".winner-image-wrap");

        // Remove handlers from any previous image.
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

    // Top three character matches
    renderTopMatches(latestMatches.slice(0, 3));

    // Strongest traits, lowest traits and full profile
    if (latestPersonality?.profile) {
        renderTraitResults(latestPersonality.profile);
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

matches.slice(0, 3).forEach((match, index) => {

    const row = document.createElement("div");
    row.className = "match-item";

    const rank = document.createElement("div");
    rank.className = "match-rank";
    rank.textContent = `#${index + 1}`;

    const image = document.createElement("img");
    image.className = "match-thumb";
    image.alt = match.name;
    image.loading = "lazy";

    const imagePath = match.image || match.character?.image || "";

    if (imagePath) {
        image.src = imagePath;

        image.onerror = function () {
            console.error("Top match image failed to load:", imagePath);
        };
    }

    const name = document.createElement("div");
    name.className = "match-name";
    name.textContent = match.name;

    row.append(rank, image, name);
    topMatchesElement.appendChild(row);
});

}


/* ============================================================
TRAIT RESULTS
============================================================ */

function renderTraitResults(
    profile
) {

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
                    a.label.localeCompare(
                        b.label
                    )
            );


    /*
       Strongest 5
    */

    const strongest =
        ranking.slice(0, 5);


    /*
       Lowest 5
    */

    const lowest =
        ranking
            .slice(-5)
            .reverse();


    /*
       Full profile
       IMPORTANT:
       Show ALL 20 traits here,
       not only the middle 10.
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

function renderTraitList(
    container,
    list
) {

    if (!container) {
        return;
    }


    container.innerHTML =
        "";


    list.forEach(
        trait => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "trait-row";


            const top =
                document.createElement(
                    "div"
                );

            top.className =
                "trait-top";


            const name =
                document.createElement(
                    "span"
                );

            name.className =
                "trait-name";

            name.textContent =
                trait.label ||
                TRAITS[trait.trait] ||
                trait.trait;


            const value =
                document.createElement(
                    "span"
                );

            value.className =
                "trait-value";

            value.textContent =
                `${Math.round(
                    trait.value
                )}%`;


            top.append(
                name,
                value
            );


            const track =
                document.createElement(
                    "div"
                );

            track.className =
                "trait-bar";


            const fill =
                document.createElement(
                    "div"
                );

            fill.className =
                "trait-fill";

            fill.style.width =
                `${clamp(
                    trait.value
                )}%`;


            track.appendChild(
                fill
            );


            row.append(
                top,
                track
            );


            container.appendChild(
                row
            );

        }
    );

}


/* ============================================================
FULL PROFILE
============================================================ */

function renderFullProfile(
    ranking
) {

    if (!traitProfileElement) {
        return;
    }


    traitProfileElement.innerHTML =
        "";


    ranking.forEach(
        trait => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "profile-row";


            const label =
                document.createElement(
                    "div"
                );

            label.className =
                "profile-label";


            const name =
                document.createElement(
                    "span"
                );

            name.textContent =
                trait.label ||
                TRAITS[trait.trait] ||
                trait.trait;


            const value =
                document.createElement(
                    "span"
                );

            value.textContent =
                `${Math.round(
                    trait.value
                )}%`;


            label.append(
                name,
                value
            );


            const track =
                document.createElement(
                    "div"
                );

            track.className =
                "profile-track";


            const fill =
                document.createElement(
                    "div"
                );

            fill.className =
                "profile-fill";

            fill.style.width =
                `${clamp(
                    trait.value
                )}%`;


            track.appendChild(
                fill
            );


            row.append(
                label,
                track
            );


            traitProfileElement.appendChild(
                row
            );

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

        submitButton.disabled =
            false;

    }


    suggestionsCard?.classList.add(
        "hidden"
    );


    homeInfo?.classList.remove(
        "hidden"
    );


    showScreen(
        startScreen
    );

}


/* ============================================================
SHARE
============================================================ */

async function copyText(
    text
) {

    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        await navigator.clipboard.writeText(
            text
        );

        return;

    }


    const textarea =
        document.createElement(
            "textarea"
        );


    textarea.value =
        text;

    textarea.style.position =
        "fixed";

    textarea.style.left =
        "-9999px";

    textarea.style.top =
        "0";

    textarea.style.opacity =
        "0";


    document.body.appendChild(
        textarea
    );


    textarea.focus();

    textarea.select();


    const successful =
        document.execCommand(
            "copy"
        );


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
        `I got ${
            winner.name
        } in the Game of Thrones Personality Quiz!`;


    const url =
        window.location.href;


    if (navigator.share) {

        try {

            await navigator.share({

                title:
                    QUIZ_CONFIG.shareTitle,

                text,

                url

            });

            return;

        } catch (error) {

            if (
                error.name ===
                "AbortError"
            ) {

                return;

            }

        }

    }


    const shareText =
        `${text}\n${url}`;


    try {

        await copyText(
            shareText
        );

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
CHALLENGE
============================================================ */

async function challengeFriends() {

    const winner =
        latestMatches[0];


    let text =
        "I just took the Game of Thrones Personality Quiz.";


    if (winner) {

        text +=
            ` I got ${
                winner.name
            }!`;

    }


    text +=
        " Which Game of Thrones character will you get?";


    const url =
        window.location.href;


    if (navigator.share) {

        try {

            await navigator.share({

                title:
                    QUIZ_CONFIG.challengeTitle,

                text,

                url

            });

            return;

        } catch (error) {

            if (
                error.name ===
                "AbortError"
            ) {

                return;

            }

        }

    }


    const challengeText =
        `${text}\n${url}`;


    try {

        await copyText(
            challengeText
        );

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
============================================================ */

const DATA_VALID =
    validateData();


if (!DATA_VALID) {

    console.error(
        "GoT quiz initialization stopped because validation failed."
    );


    if (startButton) {

        startButton.disabled =
            true;

        startButton.textContent =
            "QUIZ DATA ERROR";

    }

}


/*
   Establish the initial screen state.
*/

startScreen?.classList.remove(
    "hidden"
);

quizScreen?.classList.add(
    "hidden"
);

resultScreen?.classList.add(
    "hidden"
);

homeInfo?.classList.remove(
    "hidden"
);

suggestionsCard?.classList.add(
    "hidden"
);


console.log(
    `Loaded ${
        QUIZ_CONFIG.title
    }: ${
        questions.length
    } questions, ${
        Object.keys(CHARACTERS).length
    } characters, ${
        TRAIT_KEYS.length
    } traits, ${
        Object.keys(ROUTES).length
    } hidden routes.`
);


/* ============================================================
SITE MENU
============================================================ */

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

    menuToggle.addEventListener(
        "click",
        function(event) {

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


    document.addEventListener(
        "click",
        function(event) {

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


    siteMenu
        .querySelectorAll("a")
        .forEach(
            function(link) {

                link.addEventListener(
                    "click",
                    function() {

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
