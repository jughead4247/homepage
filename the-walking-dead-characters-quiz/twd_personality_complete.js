"use strict";

/* ============================================================
QUIZ CONFIG
============================================================ */

const QUIZ_CONFIG = {
    id: "twd",
    name: "Walking Dead",
    title: "Walking Dead Personality Quiz",
    traitProfileDescription:
        "your personality profile",
    shareTitle:
        "My Walking Dead Personality Result",
    challengeTitle:
        "Walking Dead Personality Quiz",
    resultDescription:
        "is your closest personality match based on your personality profile."
};

/* ============================================================
TRAITS
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

const TRAITS = {
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
FRANCHISE DATA
============================================================ */

/*
Paste your existing TWD data here unchanged:

const QUESTIONS = [...]
const CHARACTERS = {...}
const CHARACTER_SIGNATURES = {...}
const CHARACTER_ACCESSIBILITY = {...}
*/

/* ============================================================
   QUESTIONS
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

];



/* ============================================================
   CHARACTER PROFILES
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
   CHARACTER SIGNATURES
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
   CHARACTER ACCESSIBILITY
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
AFFINITY SETTINGS
============================================================ */

const AFFINITY_COVERAGE_EXPONENT = 1.15;
const AFFINITY_VOLUME_REFERENCE = 700;
const AFFINITY_VOLUME_WEIGHT = 0.30;
const AFFINITY_COVERAGE_WEIGHT = 0.70;

/* ============================================================
BASIC HELPERS
============================================================ */

function clamp(value, min = 0, max = 100) {
    return Math.max(
        min,
        Math.min(max, value)
    );
}

function getTraitLabel(trait) {
    return TRAITS[trait] || trait;
}

function getCharacterTraitValue(character, trait) {

    const index =
        CHARACTER_SCORE_KEYS.indexOf(trait);

    if (index === -1) {
        return 0;
    }

    return Number(
        character.scores[index]
    ) || 0;
}

function getTraitSimilarity(
    userValue,
    characterValue
) {

    return Math.max(
        0,
        100 -
        Math.abs(
            Number(userValue) -
            Number(characterValue)
        )
    );
}

/* ============================================================
PERSONALITY CALCULATION
============================================================ */

function calculatePersonality(answerIndexes) {

    const raw = {};
    const maxScores = {};
    const affinity = {};

    TRAIT_KEYS.forEach(trait => {
        raw[trait] = 0;
        maxScores[trait] = 0;
    });

    Object.keys(CHARACTERS).forEach(id => {
        affinity[id] = 0;
    });

    questions.forEach(
        (question, questionIndex) => {

            const answerIndex =
                answerIndexes[questionIndex];

            if (
                !Number.isInteger(answerIndex)
            ) {
                return;
            }

            const answer =
                question.answers[answerIndex];

            if (!answer) {
                return;
            }

            if (Array.isArray(answer.traits)) {

                answer.traits.forEach(trait => {

                    if (
                        Object.prototype
                            .hasOwnProperty
                            .call(raw, trait)
                    ) {
                        raw[trait] += 1;
                    }

                });

            }

            if (answer.affinity) {

                Object.entries(
                    answer.affinity
                ).forEach(
                    ([characterId, value]) => {

                        if (
                            Object.prototype
                                .hasOwnProperty
                                .call(
                                    affinity,
                                    characterId
                                )
                        ) {

                            affinity[characterId] +=
                                Number(value) || 0;

                        }

                    }
                );

            }

        }
    );

    questions.forEach(question => {

        const traitsPresent = new Set();

        question.answers.forEach(answer => {

            if (!Array.isArray(answer.traits)) {
                return;
            }

            answer.traits.forEach(trait => {
                traitsPresent.add(trait);
            });

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

    });

    const profile = {};

    TRAIT_KEYS.forEach(trait => {

        const max =
            Number(maxScores[trait]) || 0;

        const value =
            max > 0
                ? (raw[trait] / max) * 100
                : 0;

        profile[trait] =
            Math.round(
                clamp(value)
            );

    });

    const answered =
        answerIndexes.filter(
            Number.isInteger
        ).length;

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
        affinity,
        completion
    };
}

/* ============================================================
CHARACTER SCORING
============================================================ */

function calculateCoreSignatureScore(
    character,
    profile,
    signature
) {

    if (!signature?.primary?.length) {
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

    signature.primary.forEach(
        (trait, index) => {

            const weight =
                weights[index] || 1;

            total +=
                getTraitSimilarity(
                    profile[trait] || 0,
                    getCharacterTraitValue(
                        character,
                        trait
                    )
                ) * weight;

            weightTotal += weight;

        }
    );

    return weightTotal > 0
        ? total / weightTotal
        : 0;
}

function calculateSecondaryScore(
    character,
    profile,
    signature
) {

    if (!signature?.secondary?.length) {
        return 0;
    }

    let total = 0;

    signature.secondary.forEach(
        trait => {

            total +=
                getTraitSimilarity(
                    profile[trait] || 0,
                    getCharacterTraitValue(
                        character,
                        trait
                    )
                );

        }
    );

    return total /
        signature.secondary.length;
}

function calculateOverallTraitScore(
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

    return weightTotal > 0
        ? total / weightTotal
        : 0;
}

function calculateSignatureActivation(
    character,
    profile,
    signature
) {

    if (!signature?.primary?.length) {
        return 0;
    }

    let bonus = 0;

    signature.primary.forEach(trait => {

        const userValue =
            Number(profile[trait]) || 0;

        const characterValue =
            getCharacterTraitValue(
                character,
                trait
            );

        const difference =
            Math.abs(
                userValue -
                characterValue
            );

        if (difference <= 8) {
            bonus += 2;
        } else if (difference <= 15) {
            bonus += 1;
        }

    });

    return Math.min(8, bonus);
}

/* ============================================================
AFFINITY
============================================================ */

const CHARACTER_AFFINITY_MAX = {};

Object.keys(CHARACTERS).forEach(
    characterId => {

        let maximum = 0;

        questions.forEach(question => {

            let highest = 0;

            question.answers.forEach(answer => {

                const value =
                    Number(
                        answer.affinity?.[
                            characterId
                        ]
                    ) || 0;

                highest =
                    Math.max(
                        highest,
                        value
                    );

            });

            maximum += highest;

        });

        CHARACTER_AFFINITY_MAX[
            characterId
        ] = maximum;

    }
);

function calculateAffinityScore(
    characterId,
    rawAffinity
) {

    const maximum =
        Number(
            CHARACTER_AFFINITY_MAX[
                characterId
            ]
        ) || 0;

    if (maximum <= 0) {
        return 0;
    }

    const raw =
        Math.max(
            0,
            Number(rawAffinity) || 0
        );

    const coverage =
        clamp(
            raw / maximum,
            0,
            1
        );

    const coverageScore =
        Math.pow(
            coverage,
            AFFINITY_COVERAGE_EXPONENT
        ) * 100;

    const volumeScore =
        (
            maximum /
            (maximum +
                AFFINITY_VOLUME_REFERENCE)
        ) * 100;

    return (
        coverageScore *
        AFFINITY_COVERAGE_WEIGHT
    ) + (
        volumeScore *
        AFFINITY_VOLUME_WEIGHT
    );
}

function calculateRouteIdentityBonus(
    characterId,
    rawAffinity
) {

    const maximum =
        Number(
            CHARACTER_AFFINITY_MAX[
                characterId
            ]
        ) || 0;

    if (maximum <= 0) {
        return 0;
    }

    const ratio =
        clamp(
            (
                Number(rawAffinity) || 0
            ) / maximum,
            0,
            1
        );

    if (ratio >= 0.72) return 5.0;
    if (ratio >= 0.58) return 4.0;
    if (ratio >= 0.44) return 2.5;
    if (ratio >= 0.30) return 1.25;
    if (ratio >= 0.18) return 0.35;

    return 0;
}

/* ============================================================
ACCESSIBILITY
============================================================ */

function calculateAccessibilityBonus(
    characterId
) {

    const value =
        Number(
            CHARACTER_ACCESSIBILITY[
                characterId
            ]
        ) || ACCESSIBILITY_MIN;

    if (
        ACCESSIBILITY_MAX <=
        ACCESSIBILITY_MIN
    ) {
        return 0;
    }

    const normalized =
        clamp(
            (
                value -
                ACCESSIBILITY_MIN
            ) /
            (
                ACCESSIBILITY_MAX -
                ACCESSIBILITY_MIN
            ),
            0,
            1
        );

    return (
        Math.pow(
            normalized,
            1.5
        ) *
        ACCESSIBILITY_BONUS_MAX
    );
}

/* ============================================================
FINAL CHARACTER MATCH
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

    const signature =
        CHARACTER_SIGNATURES[
            characterId
        ] || {};

    const coreScore =
        calculateCoreSignatureScore(
            character,
            personality.profile,
            signature
        );

    const secondaryScore =
        calculateSecondaryScore(
            character,
            personality.profile,
            signature
        );

    const overallScore =
        calculateOverallTraitScore(
            character,
            personality.profile
        );

    const affinityScore =
        calculateAffinityScore(
            characterId,
            personality.affinity[
                characterId
            ]
        );

    const activation =
        calculateSignatureActivation(
            character,
            personality.profile,
            signature
        );

    const routeIdentity =
        calculateRouteIdentityBonus(
            characterId,
            personality.affinity[
                characterId
            ]
        );

    let score =
        (coreScore * 0.30) +
        (affinityScore * 0.40) +
        (overallScore * 0.14) +
        (secondaryScore * 0.10) +
        (50 * 0.06);

    score += activation;
    score += routeIdentity;

    const accessibilityValue =
        Number(
            CHARACTER_ACCESSIBILITY[
                characterId
            ]
        ) || ACCESSIBILITY_MIN;

    const normalizedAccessibility =
        clamp(
            (
                accessibilityValue -
                ACCESSIBILITY_MIN
            ) /
            (
                ACCESSIBILITY_MAX -
                ACCESSIBILITY_MIN
            ),
            0,
            1
        );

    const accessibilityMultiplier =
        0.75 +
        (
            0.25 *
            Math.pow(
                normalizedAccessibility,
                1.5
            )
        );

    score *=
        accessibilityMultiplier;

    return clamp(score);
}

/* ============================================================
FINAL RESULT
============================================================ */

function calculateFinalPersonality(
    answerIndexes
) {

    const personality =
        calculatePersonality(
            answerIndexes
        );

    const results =
        Object.keys(CHARACTERS)
            .map(characterId => {

                const character =
                    CHARACTERS[
                        characterId
                    ];

                const rawAffinity =
                    Number(
                        personality.affinity[
                            characterId
                        ]
                    ) || 0;

                const maximum =
                    Number(
                        CHARACTER_AFFINITY_MAX[
                            characterId
                        ]
                    ) || 0;

                const affinityRatio =
                    maximum > 0
                        ? rawAffinity / maximum
                        : 0;

                const signature =
                    CHARACTER_SIGNATURES[
                        characterId
                    ] || {};

                return {
                    id: characterId,
                    name: character.name,
                    image: character.image || "",
                    score:
                        calculateCharacterMatch(
                            characterId,
                            personality
                        ),
                    affinity:
                        rawAffinity,
                    affinityMaximum:
                        maximum,
                    affinityRatio,
                    coreSignature:
                        calculateCoreSignatureScore(
                            character,
                            personality.profile,
                            signature
                        ),
                    overall:
                        calculateOverallTraitScore(
                            character,
                            personality.profile
                        ),
                    secondary:
                        calculateSecondaryScore(
                            character,
                            personality.profile,
                            signature
                        ),
                    activation:
                        calculateSignatureActivation(
                            character,
                            personality.profile,
                            signature
                        ),
                    routeIdentity:
                        calculateRouteIdentityBonus(
                            characterId,
                            rawAffinity
                        ),
                    accessibilityBonus:
                        calculateAccessibilityBonus(
                            characterId
                        )
                };

            })
            .sort(
                (a, b) =>
                    b.score - a.score ||
                    b.affinity - a.affinity ||
                    b.affinityRatio -
                        a.affinityRatio ||
                    a.id.localeCompare(b.id)
            );

    const winner =
        results[0] || null;

    const strongestTraits =
        TRAIT_KEYS
            .map(trait => ({
                trait,
                label:
                    getTraitLabel(trait),
                score:
                    personality.profile[
                        trait
                    ] || 0
            }))
            .sort(
                (a, b) =>
                    b.score - a.score
            );

    return {
        config: QUIZ_CONFIG,
        winner,
        results,
        profile:
            personality.profile,
        raw:
            personality.raw,
        maxScores:
            personality.maxScores,
        affinity:
            personality.affinity,
        completion:
            personality.completion,
        strongestTraits
    };
}

window.calculatePersonality = calculatePersonality;
window.calculateFinalPersonality = calculateFinalPersonality;

/* ============================================================
VALIDATION
============================================================ */

function validateQuiz() {

    const errors = [];

    if (!questions.length) {
        errors.push("No questions found.");
    }

    if (!Object.keys(CHARACTERS).length) {
        errors.push("No characters found.");
    }

    if (
        CHARACTER_SCORE_KEYS.length !==
        TRAIT_KEYS.length
    ) {
        errors.push(
            "Trait score key count does not match trait count."
        );
    }

    questions.forEach(
        (question, index) => {

            if (
                !question.question ||
                !Array.isArray(
                    question.answers
                ) ||
                !question.answers.length
            ) {
                errors.push(
                    `Question ${index + 1} is invalid.`
                );

                return;
            }

            question.answers.forEach(
                (answer, answerIndex) => {

                    if (!answer.text) {
                        errors.push(
                            `Question ${index + 1}, answer ${answerIndex + 1}: missing text.`
                        );
                    }

                    if (
    !Array.isArray(answer.traits) ||
    answer.traits.length < 1
) {
                        errors.push(
                            `Question ${index + 1}, answer ${answerIndex + 1}: missing traits.`
                        );
                    }

                    (answer.traits || []).forEach(trait => {

    if (
        !TRAIT_KEYS.includes(trait)
    ) {
        errors.push(
            `Unknown trait "${trait}" in question ${index + 1}.`
        );
    }

});

                    Object.keys(
                        answer.affinity || {}
                    ).forEach(characterId => {

                        if (
                            !CHARACTERS[
                                characterId
                            ]
                        ) {
                            errors.push(
                                `Unknown character "${characterId}" in question ${index + 1}.`
                            );
                        }

                    });

                }
            );

        }
    );

    Object.entries(
        CHARACTERS
    ).forEach(
        ([id, character]) => {

            if (
                !Array.isArray(
                    character.scores
                ) ||
                character.scores.length !==
                    CHARACTER_SCORE_KEYS.length
            ) {
                errors.push(
                    `${id}: invalid character score array.`
                );
            }

            if (
                !CHARACTER_SIGNATURES[id]
            ) {
                errors.push(
                    `${id}: missing character signature.`
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

        }
    );

    if (errors.length) {

        console.error(
            `${QUIZ_CONFIG.name} quiz validation failed:`,
            errors
        );

        return false;
    }

    console.log(
    `${QUIZ_CONFIG.name} quiz validation passed.`,
    {
        questions: questions.length,
        characters:
            Object.keys(CHARACTERS).length,
        traits:
            TRAIT_KEYS.length
    }
);

    return true;
}

/* ============================================================
EXPORTS
============================================================ */

window.PERSONALITY_QUIZ_CONFIG =
    QUIZ_CONFIG;

window.PERSONALITY_QUESTIONS =
    questions;

window.PERSONALITY_TRAIT_KEYS =
    TRAIT_KEYS;

window.PERSONALITY_TRAITS =
    TRAITS;

window.PERSONALITY_CHARACTERS =
    CHARACTERS;

window.calculatePersonality =
    calculatePersonality;

window.calculateFinalPersonality =
    calculateFinalPersonality;

window.validateQuiz =
    validateQuiz;

window.getCharacterTraitValue =
    getCharacterTraitValue;

validateQuiz();

(() => {

"use strict";

/* ============================================================
CONFIG
============================================================ */

const config =
    window.PERSONALITY_QUIZ_CONFIG || {};

const questions =
    window.PERSONALITY_QUESTIONS || [];

const traits =
    window.PERSONALITY_TRAITS || {};

const traitKeys =
    window.PERSONALITY_TRAIT_KEYS || [];

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

const startBtn =
    document.getElementById("start-btn");

const backBtn =
    document.getElementById("back-btn");

const nextBtn =
    document.getElementById("next-btn");

const submitBtn =
    document.getElementById("submit-btn");

const restartBtn =
    document.getElementById("restart-btn");

const shareBtn =
    document.getElementById("share-btn");

const challengeBtn =
    document.getElementById("challenge-btn");

const questionNumber =
    document.getElementById("question-number");

const progressText =
    document.getElementById("progress-text") ||
    document.getElementById("score-display");

const progressBar =
    document.getElementById("progress-bar");

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const resultTitle =
    document.getElementById("result-title");

const winnerImage =
    document.getElementById("winner-image");

const resultDescription =
    document.getElementById("result-description");

const topMatches =
    document.getElementById("top-matches");

const strongestTraits =
    document.getElementById("strongest-traits");

const lowestTraits =
    document.getElementById("lowest-traits");

const traitProfile =
    document.getElementById("trait-profile");

    console.log("FINAL CHECK VALUES:", {
    questionsExists:
        typeof questions !== "undefined",

    questionsLength:
        typeof questions !== "undefined"
            ? questions.length
            : "UNDEFINED",

    calculatePersonality:
        typeof calculatePersonality,

    calculateFinalPersonality:
        typeof calculateFinalPersonality
});

console.log("QUESTIONS TYPE:", typeof questions, questions);

/* ============================================================
CHECK
============================================================ */

if (
    !questions ||
    !questions.length ||
    typeof calculatePersonality !==
        "function" ||
    typeof calculateFinalPersonality !==
        "function"
) {

    console.error(
        `${config.name || "Personality"} quiz engine failed to load.`
    );

    if (startBtn) {
        startBtn.disabled = true;
        startBtn.textContent = "QUIZ DATA ERROR";
    }

    return;
}

/* ============================================================
STATE
============================================================ */

let currentQuestion = 0;
let answerIndexes = [];
let lastResult = null;

/* ============================================================
SCREEN
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
START
============================================================ */

function startQuiz() {

    currentQuestion = 0;
    answerIndexes = [];
    lastResult = null;

    if (submitBtn) {
        submitBtn.disabled = false;
    }

    homeInfo?.classList.add("hidden");
    suggestionsCard?.classList.add("hidden");

    showScreen(quizScreen);
    renderQuestion();
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
QUESTION
============================================================ */

function renderQuestion() {

    const question =
        questions[currentQuestion];

    if (
        !question ||
        !questionNumber ||
        !progressBar ||
        !questionElement ||
        !answersElement
    ) {
        return;
    }

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const percent =
        Math.round(
            (
                (currentQuestion + 1) /
                questions.length
            ) * 100
        );

    if (progressText) {
    progressText.textContent =
        "TWD Personality Test";
}

    progressBar.style.width =
        `${percent}%`;

    questionElement.textContent =
        question.question;

    answersElement.innerHTML = "";

    const selectedIndex =
        getSelectedIndex();

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.type = "button";
            button.className = "answer";
            button.textContent = answer.text;

            if (
                selectedIndex === index
            ) {
                button.classList.add("selected");
            }

            button.addEventListener(
                "click",
                () => selectAnswer(index)
            );

            answersElement.appendChild(
                button
            );
        }
    );

    updateNavigation();
}

/* ============================================================
SELECT ANSWER
============================================================ */

function selectAnswer(answerIndex) {

    console.log("SELECT ANSWER CALLED", answerIndex);

    const question =
        questions[currentQuestion];

    if (!question) {
        return;
    }

    /*
       Store answer by QUESTION INDEX.

       This matches the personality engine's expected format.
    */

    answerIndexes[currentQuestion] =
        answerIndex;

    const buttons =
        answersElement.querySelectorAll(
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

    /*
       Automatically advance after a short delay.
       The delay prevents accidental double clicks.
    */

    const questionAtSelection =
        currentQuestion;

    const selectedAnswerAtSelection =
        answerIndex;

    setTimeout(() => {

        const selectedQuestion =
            questions[
                questionAtSelection
            ];

        if (!selectedQuestion) {
            return;
        }

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

    }, 180);

}


/* ============================================================
NAVIGATION
============================================================ */

function goNext() {

    if (getSelectedIndex() === null) {
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

function goBack() {

    if (currentQuestion <= 0) {
        return;
    }

    currentQuestion--;
    renderQuestion();
}

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

    if (backBtn) {
        backBtn.disabled = first;
    }

    if (last) {

        nextBtn?.classList.add("hidden");
        submitBtn?.classList.remove("hidden");

        if (submitBtn) {
            submitBtn.disabled = !complete;
            submitBtn.textContent =
                complete
                    ? "SEE MY RESULT"
                    : "Answer All questions";
        }

        return;
    }

    submitBtn?.classList.add("hidden");
    nextBtn?.classList.remove("hidden");

    if (nextBtn) {
        nextBtn.textContent = "Next →";
        nextBtn.disabled = !answered;
    }
}

/* ============================================================
SUBMIT
============================================================ */

function submitQuiz() {

    if (!allQuestionsAnswered()) {

        console.error(
            "Quiz is incomplete."
        );

        return;
    }

    if (submitBtn) {
        submitBtn.disabled = true;
    }

    try {

        const result =
            window.calculateFinalPersonality(
                answerIndexes
            );

        if (
            !result ||
            !result.winner
        ) {
            throw new Error(
                "No personality result returned."
            );
        }

        lastResult = result;

        renderResult(result);
        showScreen(resultScreen);

        homeInfo?.classList.remove("hidden");
        suggestionsCard?.classList.remove("hidden");

    } catch (error) {

        console.error(
            "Unable to calculate result:",
            error
        );

        if (submitBtn) {
            submitBtn.disabled = false;
        }

        alert(
            "There was a problem calculating your result. Please refresh the page and try again."
        );
    }
}

/* ============================================================
RESULT
============================================================ */

function renderResult(result) {

    const winner =
        result.winner;

    if (!winner) {
        return;
    }

    if (resultTitle) {
        resultTitle.textContent =
            `You are most like ${winner.name}`;
    }

    if (winnerImage) {

        if (winner.image) {
            winnerImage.src =
                winner.image;

            winnerImage.alt =
                winner.name;
        } else {
            winnerImage.removeAttribute("src");
            winnerImage.alt = "";
        }
    }

    if (resultDescription) {

        resultDescription.textContent =
            `${winner.name} ${config.resultDescription || "is your closest personality match."}`;
    }

    if (Array.isArray(result.results)) {

        renderTopMatches(
            result.results.slice(0, 3)
        );
    }

    if (Array.isArray(result.strongestTraits)) {

        const strongest =
            result.strongestTraits
                .slice()
                .sort(
                    (a, b) =>
                        Number(b.score) -
                        Number(a.score)
                )
                .slice(0, 5);

        renderTraitList(
            strongestTraits,
            strongest
        );
    }

    if (
        result.profile &&
        lowestTraits
    ) {

        const lowest =
            Object.entries(
                result.profile
            )
            .map(
                ([key, score]) => ({
                    trait: key,
                    label:
                        traits[key] || key,
                    score:
                        Number(score)
                })
            )
            .sort(
                (a, b) =>
                    a.score - b.score
            )
            .slice(0, 5);

        renderTraitList(
            lowestTraits,
            lowest
        );
    }

    if (result.profile) {
        renderFullProfile(
            result.profile
        );
    }
}

/* ============================================================
TOP MATCHES
============================================================ */

function renderTopMatches(matches) {

    if (!topMatches) {
        return;
    }

    topMatches.innerHTML = "";

    matches.forEach(
        (match, index) => {

            const row =
                document.createElement("div");

            row.className =
                "match-item";

            const rank =
                document.createElement("div");

            rank.className =
                "match-rank";

            rank.textContent =
                `#${index + 1}`;

            const image =
                document.createElement("img");

            image.className =
                "match-thumb";

            if (match.image) {
                image.src =
                    match.image;
            }

            image.alt =
                match.name;

            image.loading =
                "lazy";

            const name =
                document.createElement("div");

            name.className =
                "match-name";

            name.textContent =
                match.name;

            row.append(
                rank,
                image,
                name
            );

            topMatches.appendChild(row);
        }
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

    container.innerHTML = "";

    if (!Array.isArray(list)) {
        return;
    }

    list.forEach(trait => {

        const row =
            document.createElement("div");

        row.className =
            "trait-row";

        const top =
            document.createElement("div");

        top.className =
            "trait-top";

        const name =
            document.createElement("span");

        name.className =
            "trait-name";

        name.textContent =
            trait.label ||
            trait.name ||
            trait.trait ||
            trait.id ||
            "";

        const value =
            document.createElement("span");

        value.className =
            "trait-value";

        const score =
            Number(trait.score);

        value.textContent =
            Number.isFinite(score)
                ? `${Math.round(score)}%`
                : "0%";

        top.append(
            name,
            value
        );

        const bar =
            document.createElement("div");

        bar.className =
            "trait-bar";

        const fill =
            document.createElement("div");

        fill.className =
            "trait-fill";

        fill.style.width =
            `${Math.max(
                0,
                Math.min(
                    100,
                    Number.isFinite(score)
                        ? score
                        : 0
                )
            )}%`;

        bar.appendChild(fill);

        row.append(
            top,
            bar
        );

        container.appendChild(row);
    });
}

/* ============================================================
FULL PROFILE
============================================================ */

function renderFullProfile(profile) {

    if (!traitProfile) {
        return;
    }

    traitProfile.innerHTML = "";

    traitKeys.forEach(key => {

        const score =
            Number(
                profile[key] ?? 0
            );

        const row =
            document.createElement("div");

        row.className =
            "profile-row";

        const label =
            document.createElement("div");

        label.className =
            "profile-label";

        const name =
            document.createElement("span");

        name.textContent =
            traits[key] || key;

        const value =
            document.createElement("span");

        value.textContent =
            `${Math.round(score)}%`;

        label.append(
            name,
            value
        );

        const track =
            document.createElement("div");

        track.className =
            "profile-track";

        const fill =
            document.createElement("div");

        fill.className =
            "profile-fill";

        fill.style.width =
            `${Math.max(
                0,
                Math.min(100, score)
            )}%`;

        track.appendChild(fill);

        row.append(
            label,
            track
        );

        traitProfile.appendChild(row);
    });
}

/* ============================================================
RESTART
============================================================ */
function restartQuiz() {

    currentQuestion = 0;
    answerIndexes = [];
    lastResult = null;

    if (submitBtn) {
        submitBtn.disabled = false;
    }

    suggestionsCard?.classList.add("hidden");

    showScreen(startScreen);

}

/* ============================================================
SHARE
============================================================ */

async function shareResult() {

    if (
        !lastResult ||
        !lastResult.winner
    ) {
        return;
    }

    const winner =
        lastResult.winner;

    const text =
        `I got ${winner.name} in the ${config.name} Personality Quiz!`;

    const url =
        window.location.href;

    if (navigator.share) {

        try {

            await navigator.share({
                title:
                    config.shareTitle ||
                    `My ${config.name} Personality Result`,
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

    let text =
        `I just took the ${config.name} Personality Quiz.`;

    if (
        lastResult &&
        lastResult.winner
    ) {

        text +=
            ` I got ${lastResult.winner.name}!`;
    }

    text +=
        ` Which ${config.name} character will you get?`;

    const url =
        window.location.href;

    if (navigator.share) {

        try {

            await navigator.share({
                title:
                    config.challengeTitle ||
                    `${config.name} Personality Quiz`,
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
COPY
============================================================ */

async function copyText(text) {

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

/* ============================================================
EVENTS
============================================================ */

startBtn?.addEventListener(
    "click",
    startQuiz
);

backBtn?.addEventListener(
    "click",
    goBack
);

nextBtn?.addEventListener(
    "click",
    goNext
);

submitBtn?.addEventListener(
    "click",
    submitQuiz
);

restartBtn?.addEventListener(
    "click",
    restartQuiz
);

shareBtn?.addEventListener(
    "click",
    shareResult
);

challengeBtn?.addEventListener(
    "click",
    challengeFriends
);

/* ============================================================
EXTERNAL ACCESS
============================================================ */

window.PERSONALITY_QUIZ_UI = {
    startQuiz,
    renderQuestion,
    submitQuiz,
    getAnswers: () => [
        ...answerIndexes
    ]
};

})();

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
