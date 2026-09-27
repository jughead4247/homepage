const questions = [

    {
        question: "The outbreak has just begun. You wake up to no mobile network, sirens, neighbors shouting, and reports of violent attacks. You hear screaming outside. What do you do?",
        answers: [
            ["Look outside", 3, null],
            ["Secure your home", 5, null],
            ["Leave immediately", 2, null],
            ["Check the rooftop", 3, null]
        ]
    },

    {
        question: "You have 30 minutes before the electricity goes out. What is most important?",
        answers: [
            ["Clothes", 1, null],
            ["Food, water, medicine, and tools", 5, null],
            ["Valuables", 0, null],
            ["Whatever fits in your bag", 3, null]
        ]
    },

    {
        question: "You hear pounding on a door downstairs. What do you do?",
        answers: [
            ["Barricade and observe", 5, null],
            ["Help the neighbors", 3, 5],
            ["Leave immediately", 4, 2],
            ["Check the rooftop", 3, null]
        ]
    },

    {
        question: "Your neighbor is asking for help, but you don't know if they're infected. What do you do?",
        answers: [
            ["Open the door", 1, 4],
            ["Shoot through the door", 0, 0],
            ["Assess them from safety", 5, 5],
            ["Ignore them", 3, 2]
        ]
    },

    {
        question: "The power is out, and you hear screams outside. What do you do?",
        answers: [
            ["Investigate", 1, 3],
            ["Stay inside", 5, 3],
            ["Turn on the lights", 0, null],
            ["Search for survivors", 2, 5]
        ]
    },

    {
        question: "Something hits your neighbor's door, and the sound is now outside your floor. What do you do?",
        answers: [
            ["Stay silent", 5, null],
            ["Prepare to fight", 3, null],
            ["Move to the rooftop", 4, null],
            ["Escape through the balcony", 2, null]
        ]
    },

    {
        question: "You hear 3–4 people moving toward your floor. What do you do?",
        answers: [
            ["Stay silent", 5, null],
            ["Announce yourself", 3, 4],
            ["Ambush them", 2, 1],
            ["Escape to the rooftop", 4, 3]
        ]
    },

    {
        question: "Unknown people outside know you're inside and ask, \"How many people are inside?\" What do you say?",
        answers: [
            ["\"Two.\"", 2, 3],
            ["\"More than you.\"", 3, 2],
            ["\"Enough.\"", 4, 3],
            ["Stay silent", 5, 3]
        ]
    },

    {
        question: "An infected person suddenly lunges at you. How do you react?",
        answers: [
            ["Attack immediately", 3, 2],
            ["Step aside and attack", 5, 2],
            ["Create distance", 4, 3],
            ["Swing wildly", 1, 1]
        ]
    },

    {
        question: "You can take only three priority categories. What do you choose?",
        answers: [
            ["Food and water", 4, null],
            ["Medical supplies", 4, null],
            ["Weapons", 3, null],
            ["Balanced supplies", 5, null]
        ]
    },

    {
        question: "You have 10 liters of water for three people. What do you do?",
        answers: [
            ["Drink freely", 1, 1],
            ["Ration it", 5, 4],
            ["Give most to one person", 2, 2],
            ["Throw some away", 0, 0]
        ]
    },

    {
        question: "One member is using much more food and water than everyone else. What do you do?",
        answers: [
            ["Let them", 1, 1],
            ["Confront them", 3, 3],
            ["Set rations", 5, 5],
            ["Give them less", 2, 1]
        ]
    },

    {
        question: "Your group needs a leader. Who would you support?",
        answers: [
            ["Strongest", 3, 2],
            ["Most experienced", 5, 4],
            ["Most trusted", 4, 5],
            ["Most strategic", 4, 3]
        ]
    },

    {
        question: "One group member is becoming aggressive toward others. How do you handle the situation?",
        answers: [
            ["Confront them", 3, 3],
            ["Avoid them", 2, 2],
            ["Talk privately", 5, 5],
            ["Remove them", 4, 1]
        ]
    },

    {
        question: "Your best friend from before the outbreak has become unstable and is no longer fit for the group. What do you do?",
        answers: [
            ["Give another chance", 2, 5],
            ["Talk to them", 4, 5],
            ["Restrict their role", 5, 3],
            ["Remove them", 5, 1]
        ]
    },

    {
        question: "One group member refuses to follow safety rules. What do you do?",
        answers: [
            ["Ignore them", 1, 2],
            ["Set rules and consequences", 5, 5],
            ["Abandon them", 3, 1],
            ["Let them decide", 2, 3]
        ]
    },

    {
        question: "Two members start arguing loudly while zombies are nearby. What do you prioritize?",
        answers: [
            ["Let them argue", 1, 2],
            ["Keep everyone quiet", 5, 4],
            ["Leave them behind", 3, 0],
            ["Shout louder", 0, 0]
        ]
    },

    {
        question: "Two members strongly disagree about where to go. What do you do?",
        answers: [
            ["Let everyone vote", 4, 5],
            ["Decide yourself", 3, 2],
            ["Hear both sides and assess the risks", 5, 5],
            ["Let them decide", 2, 3]
        ]
    },

    {
        question: "You discover that someone has been secretly stealing supplies to feed their family. What do you do?",
        answers: [
            ["Punish them", 3, 1],
            ["Forgive them", 2, 5],
            ["Fix the ration system", 5, 5],
            ["Restrict their access", 4, 2]
        ]
    },

    {
        question: "A member secretly takes extra food. What is the biggest problem?",
        answers: [
            ["Lost food", 3, 2],
            ["Loss of trust", 5, 5],
            ["Their hunger", 3, 4],
            ["The container", 1, 1]
        ]
    },

    {
        question: "You have only one packet of chips left. Who gets it?",
        answers: [
            ["Elderly person", 3, 4],
            ["Pregnant woman", 4, 4],
            ["7-year-old child", 4, 5],
            ["Group leader", 5, 2]
        ]
    },

    {
        question: "You can save only one: a 5-year-old child or an elderly man. Who do you save?",
        answers: [
            ["The child", 4, 5],
            ["The elderly man", 3, 4],
            ["Whoever is closer", 5, 3],
            ["Try to save both", 2, 5]
        ]
    },

    {
        question: "You can save only one: your doctor or your leader. Who do you save?",
        answers: [
            ["Doctor", 5, 4],
            ["Leader", 4, 3],
            ["Whoever is closer", 3, 3],
            ["Try to save both", 2, 5]
        ]
    },

    {
        question: "You hear a child crying for help inside a building surrounded by zombies. What do you do?",
        answers: [
            ["Rescue alone", 2, 5],
            ["Take the whole group", 2, 4],
            ["Send two people", 5, 5],
            ["Leave the child", 4, 0]
        ]
    },

    {
        question: "Three zombies are blocking your route. What do you do?",
        answers: [
            ["Observe them", 4, 3],
            ["Distract them", 3, 3],
            ["Kill the nearest one", 4, 1],
            ["Move between them", 5, 3]
        ]
    },

    {
        question: "Several zombies are nearby but haven't noticed you. What do you do?",
        answers: [
            ["Take a longer route", 5, 3],
            ["Run", 2, 2],
            ["Wait", 4, 3],
            ["Distract them", 2, 2]
        ]
    },

    {
        question: "You discover zombies are attracted to loud sounds. What do you do?",
        answers: [
            ["Use the car horn", 0, 2],
            ["Fire your gun", 0, 1],
            ["Stay quiet", 5, 4],
            ["Play music", 1, 2]
        ]
    },

    {
        question: "You reach a road filled with abandoned vehicles. What do you do?",
        answers: [
            ["Search the vehicles", 3, 3],
            ["Take one", 2, 2],
            ["Find a less exposed route", 5, 4],
            ["Stay on the road", 1, 2]
        ]
    },

    {
        question: "You find a parked car with the keys inside. What do you check first?",
        answers: [
            ["Radio", 2, null],
            ["Fuel, condition, and surroundings", 5, null],
            ["Glove compartment", 3, null],
            ["Paint", 0, null]
        ]
    },

    {
        question: "You need to travel a long distance. Which route would you choose?",
        answers: [
            ["Highway", 2, null],
            ["Back roads", 4, null],
            ["Rural routes", 5, null],
            ["Change routes frequently", 3, null]
        ]
    },

    {
        question: "Choose your main mode of transportation.",
        answers: [
            ["Car", 4, null],
            ["Truck", 5, null],
            ["Motorcycle", 3, null],
            ["On foot", 2, null]
        ]
    },

    {
        question: "You can take only one small utility item. Which do you choose?",
        answers: [
            ["Knife", 5, null],
            ["Flashlight", 4, null],
            ["Matches", 3, null],
            ["Rope", 3, null]
        ]
    },

    {
        question: "You find a friendly dog following your group. What do you do?",
        answers: [
            ["Keep it", 4, 5],
            ["Shoo it away", 5, 3],
            ["Feed it and leave", 3, 4],
            ["Kill it for food", 3, 0]
        ]
    },

    {
        question: "You find an apparently abandoned house. What do you do?",
        answers: [
            ["Check the rooms", 3, null],
            ["Search thoroughly", 4, null],
            ["Observe from outside first", 5, null],
            ["Enter immediately", 1, null]
        ]
    },

    {
        question: "You spot a small pharmacy that appears abandoned. What do you do?",
        answers: [
            ["Enter quickly", 2, null],
            ["Ignore it", 3, null],
            ["Observe it first", 5, null],
            ["Break in", 1, null]
        ]
    },

    {
        question: "Four armed people are looting a pharmacy. What do you do?",
        answers: [
            ["Wait for them to leave", 5, 3],
            ["Change route", 4, 4],
            ["Observe them", 5, 3],
            ["Approach them", 2, 4]
        ]
    },

    {
        question: "A stranger approaches your shelter asking for food. What do you do?",
        answers: [
            ["Give them food", 3, 5],
            ["Tell them to leave", 4, 2],
            ["Assess them from safety", 5, 5],
            ["Invite them inside", 1, 4]
        ]
    },

    {
        question: "Another survivor offers to trade supplies. What do you do?",
        answers: [
            ["Trade carefully", 5, 5],
            ["Trust them", 2, 4],
            ["Trade whatever they want", 1, 2],
            ["Refuse", 3, 3]
        ]
    },

    {
        question: "A survivor claims to know a safe shelter. What do you do?",
        answers: [
            ["Trust them", 1, 4],
            ["Assume they're dangerous", 3, 2],
            ["Verify their information", 5, 5],
            ["Give them supplies", 1, 5]
        ]
    },

    {
        question: "You find a warehouse with possible food, but hear movement inside. What do you do?",
        answers: [
            ["Rush inside", 1, 1],
            ["Observe and plan", 5, 4],
            ["Set it on fire", 0, 0],
            ["Send the weakest person", 0, 0]
        ]
    },

    {
        question: "You find a large amount of canned food, but carrying it all will slow you down. What do you do?",
        answers: [
            ["Take everything", 2, 2],
            ["Take what you can carry", 4, 4],
            ["Prioritize valuable supplies", 5, 5],
            ["Leave it", 3, 3]
        ]
    },

    {
        question: "Your group needs water and finds a stream outside town. What do you do?",
        answers: [
            ["Drink it", 1, 2],
            ["Treat it first", 5, 4],
            ["Take enough for today", 3, 3],
            ["Avoid it", 4, 3]
        ]
    },

    {
        question: "Your food supply is running low. What do you do?",
        answers: [
            ["Reduce portions and find more", 5, 4],
            ["Eat normally", 1, 2],
            ["Send everyone searching", 2, 3],
            ["Save most of it", 4, 3]
        ]
    },

    {
        question: "You have enough food for only 5 of your 8 group members. What do you do?",
        answers: [
            ["Equal rations", 4, 5],
            ["Send people for food", 3, 3],
            ["Prioritize vulnerable members", 5, 5],
            ["Leave some behind", 2, 0]
        ]
    },

    {
        question: "You find a large military supply cache in a zombie-infested area. What do you do?",
        answers: [
            ["Take the risk", 2, 2],
            ["Leave it", 4, 3],
            ["Send a scout", 5, 4],
            ["Wait", 3, 3]
        ]
    },

    {
        question: "Heavy rain has made the roads dangerous. What do you do?",
        answers: [
            ["Continue", 1, 2],
            ["Wait safely", 5, 4],
            ["Take an unfamiliar shortcut", 2, 2],
            ["Split the group", 1, 1]
        ]
    },

    {
        question: "Your vehicle breaks down far from your destination. What do you do?",
        answers: [
            ["Stay with it", 2, 3],
            ["Take supplies and continue on foot", 5, 4],
            ["Walk to the nearest town", 3, 3],
            ["Repair it", 3, 3]
        ]
    },

    {
        question: "You're low on fuel. You can reach a town for supplies or head toward a guaranteed water source. Which do you choose?",
        answers: [
            ["Town", 3, 3],
            ["Water", 5, 4],
            ["Split the group", 2, 2],
            ["Search first", 4, 4]
        ]
    },

    {
        question: "Your vehicle may cause a bridge to collapse. What do you do?",
        answers: [
            ["Cross quickly", 1, 2],
            ["Continue on foot", 4, 3],
            ["Find another route", 5, 4],
            ["Test it first", 3, 3]
        ]
    },

    {
        question: "Your wife becomes pregnant while you're still traveling. What do you do?",
        answers: [
            ["Find a doctor", 5, 5],
            ["Find a community", 4, 5],
            ["Settle somewhere safe", 4, 5],
            ["Continue traveling", 2, 2]
        ]
    },

    {
        question: "A member has a deep, bleeding wound and you suspect a zombie bite. What do you do?",
        answers: [
            ["Use medical supplies", 4, 4],
            ["Use makeshift bandages", 3, 3],
            ["Quarantine and observe", 5, 3],
            ["Treat and quarantine", 5, 5]
        ]
    },

    {
        question: "You can treat either one critically injured person or three mildly injured people. What do you choose?",
        answers: [
            ["Critical patient", 4, 3],
            ["Three patients", 5, 5],
            ["Divide medicine", 2, 4],
            ["Group vote", 3, 5]
        ]
    },

    {
        question: "Your best fighter is becoming reckless and putting everyone at risk. What do you do?",
        answers: [
            ["Remove combat duties", 5, 4],
            ["Confront them", 4, 4],
            ["Keep them", 2, 2],
            ["Monitor them", 3, 3]
        ]
    },

    {
        question: "A trusted member makes a mistake that attracts zombies and gets someone injured. What do you do?",
        answers: [
            ["Forgive them", 2, 5],
            ["Remove responsibilities", 5, 4],
            ["Punish them", 3, 1],
            ["Let the group decide", 4, 5]
        ]
    },

    {
        question: "A trusted member secretly hides a zombie bite. What do you do?",
        answers: [
            ["Isolate them", 5, 4],
            ["Question them first", 3, 4],
            ["Let the group decide", 3, 5],
            ["Expel them", 4, 1]
        ]
    },

    {
        question: "A member wants to leave the group with their share of supplies. What do you do?",
        answers: [
            ["Let them take everything", 1, 3],
            ["Give a fair share", 5, 5],
            ["Convince them to stay", 3, 4],
            ["Don't let them leave", 2, 0]
        ]
    },

    {
        question: "A grieving member has stopped contributing to the group. What do you do?",
        answers: [
            ["Give them time", 4, 5],
            ["Force them back", 2, 1],
            ["Reduce responsibilities", 5, 4],
            ["Remove them", 3, 1]
        ]
    },

    {
        question: "You discover your leader is secretly keeping extra food. What do you do?",
        answers: [
            ["Confront privately", 4, 5],
            ["Expose them", 3, 4],
            ["Remove them", 5, 3],
            ["Keep quiet", 1, 1]
        ]
    },

    {
        question: "You receive a radio message claiming there is a safe settlement 50 km away. What do you do?",
        answers: [
            ["Leave immediately", 2, 3],
            ["Ignore it", 3, 2],
            ["Gather information first", 5, 4],
            ["Send everyone separately", 1, 2]
        ]
    },

    {
        question: "Another large group is approaching your location. What do you do?",
        answers: [
            ["Hide and observe", 5, 4],
            ["Confront them", 1, 1],
            ["Run", 3, 2],
            ["Approach them openly", 3, 5]
        ]
    },

    {
        question: "Another large community approaches your territory, but you don't know whether they're friendly. What do you do?",
        answers: [
            ["Attack", 1, 1],
            ["Let them in", 2, 5],
            ["Communicate and observe", 5, 5],
            ["Abandon the settlement", 3, 2]
        ]
    },

    {
        question: "You discover that another group may be occupying a location you planned to use as a base. What do you do?",
        answers: [
            ["Confront them", 2, 2],
            ["Find another location", 5, 4],
            ["Observe them first", 5, 5],
            ["Offer to share it", 4, 5]
        ]
    },

    {
        question: "Where would you establish your base?",
        answers: [
            ["Supermarket", 2, null],
            ["Farmhouse", 4, null],
            ["Police station", 5, null],
            ["Mountain settlement", 5, null]
        ]
    },

    {
        question: "Your settlement can shelter only half of the people asking for help. Who do you accept?",
        answers: [
            ["Most vulnerable", 4, 5],
            ["Most useful", 5, 2],
            ["Families", 4, 4],
            ["Nobody", 2, 1]
        ]
    },

    {
        question: "A settlement demands your weapons before letting you enter. What do you do?",
        answers: [
            ["Surrender", 2, 3],
            ["Refuse", 3, 3],
            ["Negotiate", 5, 5],
            ["Pretend to agree", 4, 2]
        ]
    },

    {
        question: "You finally reach a settlement claiming to be safe. What do you do?",
        answers: [
            ["Enter immediately", 2, 3],
            ["Observe it first", 5, 4],
            ["Ask about rules and resources", 5, 5],
            ["Leave", 3, 3]
        ]
    },

    {
        question: "The settlement offers you a permanent place to stay. What matters most?",
        answers: [
            ["Comfort", 2, 2],
            ["Food", 4, 4],
            ["Security, leadership, resources, and rules", 5, 5],
            ["Friendly people", 3, 5]
        ]
    },

    {
        question: "Your settlement has been safe for months, and people are becoming careless. What do you do?",
        answers: [
            ["Increase restrictions", 3, 2],
            ["Let them relax", 2, 4],
            ["Regular drills", 5, 4],
            ["Wait for danger", 1, 1]
        ]
    },

    {
        question: "Your settlement's walls can no longer withstand a major attack. What do you do?",
        answers: [
            ["Reinforce them", 4, 4],
            ["Build new walls", 5, 4],
            ["Relocate", 3, 3],
            ["Create escape routes", 5, 5]
        ]
    },

    {
        question: "Your settlement is attacked. You can defend only the food storage or the medical center. Which do you protect?",
        answers: [
            ["Food storage", 4, 3],
            ["Medical center", 5, 5],
            ["Split defenders", 3, 4],
            ["Evacuate supplies", 4, 4]
        ]
    },

    {
        question: "A skilled hunter refuses to follow group rules. What do you do?",
        answers: [
            ["Give privileges", 3, 2],
            ["Same rules", 5, 5],
            ["Limited independence", 4, 4],
            ["Ask them to leave", 3, 2]
        ]
    },

    {
        question: "One group member is extremely useful but constantly challenges your leadership. What do you do?",
        answers: [
            ["Remove them", 3, 2],
            ["Ignore them", 2, 2],
            ["Give them responsibility", 5, 4],
            ["Work with them", 5, 5]
        ]
    },

    {
        question: "You can broadcast your location to ask for help, but dangerous people may hear it. What do you do?",
        answers: [
            ["Broadcast", 2, 4],
            ["Stay silent", 5, 3],
            ["Fake location", 4, 2],
            ["Send a coded message", 5, 4]
        ]
    },

    {
        question: "You discover a possible cure, but testing it could be dangerous. Who decides whether it is used?",
        answers: [
            ["Doctor", 5, 4],
            ["Leader", 3, 3],
            ["Patient", 2, 5],
            ["Entire group", 4, 5]
        ]
    },

    {
        question: "A captured enemy claims to have information about a much larger hostile group. What do you do?",
        answers: [
            ["Trade freedom for information", 4, 4],
            ["Keep and question them", 5, 2],
            ["Don't trust them", 3, 3],
            ["Use the information and imprison them", 4, 1]
        ]
    },

    {
        question: "You discover zombies have become faster than before. What do you do?",
        answers: [
            ["Keep the same strategy", 0, 2],
            ["Change your plans", 5, 4],
            ["Travel only during daylight", 4, 3],
            ["Take more risks", 1, 1]
        ]
    },

    {
        question: "The zombies are behaving differently than before. What do you assume?",
        answers: [
            ["Nothing changed", 1, 2],
            ["The situation is evolving", 5, 4],
            ["They're becoming friendly", 0, 4],
            ["They'll disappear", 0, 1]
        ]
    },

    {
        question: "Your shelter has been discovered by a large group of zombies. You have two escape routes. What matters most?",
        answers: [
            ["Which looks better", 1, 2],
            ["Threats and destination", 5, 4],
            ["Which is shorter", 2, 2],
            ["Flip a coin", 0, 1]
        ]
    },

    {
        question: "You hear that a remote island may be unaffected. You have one chance to reach it. What do you do?",
        answers: [
            ["Go", 3, 3],
            ["Stay", 4, 3],
            ["Send scouts", 5, 4],
            ["Gather information", 5, 4]
        ]
    },

    {
        question: "You discover a large amount of supplies, but taking them will slow the group and increase the risk of being caught. What do you do?",
        answers: [
            ["Take everything", 2, 2],
            ["Take only essentials", 4, 4],
            ["Take high-value supplies", 5, 5],
            ["Leave everything", 3, 3]
        ]
    },

    {
        question: "A member of your group has become emotionally unstable after losing someone close to them. What do you do?",
        answers: [
            ["Give them time", 4, 5],
            ["Keep them busy", 4, 3],
            ["Watch them closely", 5, 3],
            ["Remove them", 2, 1]
        ]
    },

    {
        question: "Your group has a chance to rescue another group, but doing so will consume most of your remaining fuel. What do you do?",
        answers: [
            ["Rescue them", 3, 5],
            ["Leave them", 4, 2],
            ["Limited rescue", 5, 5],
            ["Contact them first", 5, 4]
        ]
    },

    {
        question: "Your group discovers that another large group is approaching your location. You don't know their intentions. What do you do?",
        answers: [
            ["Hide and observe", 5, 4],
            ["Prepare to attack", 2, 1],
            ["Contact them", 4, 5],
            ["Leave", 3, 3]
        ]
    },

    {
        question: "Children born after the outbreak have never seen the old world. What should they learn?",
        answers: [
            ["Survival only", 4, 3],
            ["History and survival", 5, 5],
            ["Forget the old world", 2, 1],
            ["Military skills", 4, 3]
        ]
    },

    {
        question: "Years into the outbreak, your settlement is stable but resources are becoming harder to find. What should you focus on?",
        answers: [
            ["Better weapons", 3, 2],
            ["Food and water production", 5, 5],
            ["Explore farther", 3, 4],
            ["Move again", 2, 3]
        ]
    },

    {
        question: "Your group has survived for years. What should become your biggest priority?",
        answers: [
            ["Expansion", 2, 2],
            ["Sustainable survival", 5, 5],
            ["Finding other survivors", 4, 4],
            ["Returning to cities", 2, 3]
        ]
    },

    {
        question: "A member of your group secretly takes extra medicine for their family. What do you do?",
        answers: [
            ["Punish them", 3, 1],
            ["Forgive them", 2, 5],
            ["Set stricter rules", 5, 4],
            ["Give them less access", 4, 3]
        ]
    },

    {
        question: "Your settlement has limited resources, but a doctor arrives asking for protection in exchange for medical knowledge. What do you do?",
        answers: [
            ["Accept them", 4, 5],
            ["Refuse them", 2, 2],
            ["Test their knowledge first", 5, 4],
            ["Trade protection for medicine", 5, 5]
        ]
    },

    {
        question: "A group member discovers that their family may still be alive far away. Leaving could endanger the entire group. What do you do?",
        answers: [
            ["Let them go", 3, 5],
            ["Stop them", 2, 1],
            ["Send a small team", 5, 5],
            ["Search for information first", 5, 4]
        ]
    },

    {
        question: "After years of survival, you discover a functioning community offering a chance to rebuild civilization. What do you do?",
        answers: [
            ["Join them", 4, 5],
            ["Stay independent", 3, 3],
            ["Investigate first", 5, 4],
            ["Send representatives", 5, 5]
        ]
    }

];

// ===============================
// QUIZ STATE
// ===============================

let currentQuestion = 0;
let survivalScore = 0;
let moralityScore = 0;

// Store selected answer for every question.
// -1 = unanswered
let selectedAnswers = new Array(questions.length).fill(-1);


// ===============================
// ELEMENTS
// ===============================

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
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");


// ===============================
// EVENTS
// ===============================

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", shareResult);
challengeButton.addEventListener("click", shareResult);

backButton.addEventListener("click", previousQuestion);
nextButton.addEventListener("click", nextQuestion);
submitButton.addEventListener("click", submitQuiz);


// ===============================
// START QUIZ
// ===============================

function startQuiz() {

    currentQuestion = 0;
    survivalScore = 0;
    moralityScore = 0;

    selectedAnswers =
        new Array(questions.length).fill(-1);

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    homeInfo.classList.add("hidden");

    if (suggestionsCard) {
        suggestionsCard.classList.add("hidden");
    }

    showQuestion();

}


// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Decision ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent =
        current.question;

    answersContainer.innerHTML = "";


    // ===============================
    // PROGRESS
    // ===============================

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width =
        `${progress}%`;


    // ===============================
    // ANSWERS
    // ===============================

    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer";
        button.type = "button";

        button.textContent =
            answer[0];


        // Restore previous selection

        if (
            selectedAnswers[currentQuestion] === index
        ) {

            button.classList.add("selected");

        }


        button.addEventListener("click", () => {

            selectAnswer(index);

        });


        answersContainer.appendChild(button);

    });


    // ===============================
    // NAVIGATION
    // ===============================

    updateNavigation();

}


// ===============================
// SELECT ANSWER
// ===============================

function selectAnswer(answerIndex) {

    selectedAnswers[currentQuestion] =
        answerIndex;


    // Highlight selected answer

    const buttons =
        answersContainer.querySelectorAll(".answer");


    buttons.forEach((button, index) => {

        button.classList.toggle(
            "selected",
            index === answerIndex
        );

    });


    updateNavigation();


    // Remember which question was selected
    // before the automatic movement.

    const questionAtSelection =
        currentQuestion;


    // ===============================
    // AUTOMATICALLY MOVE FORWARD
    // ===============================

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


// ===============================
// NEXT QUESTION
// ===============================

function nextQuestion() {

    if (
        selectedAnswers[currentQuestion] === -1
    ) {

        return;

    }


    if (
        currentQuestion === questions.length - 1
    ) {

        if (allQuestionsAnswered()) {

            submitQuiz();

        }

        return;

    }


    currentQuestion++;

    showQuestion();

}


// ===============================
// PREVIOUS QUESTION
// ===============================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

}


// ===============================
// CHECK ALL ANSWERS
// ===============================

function allQuestionsAnswered() {

    return selectedAnswers.every(
        answer => answer !== -1
    );

}


// ===============================
// UPDATE NAVIGATION
// ===============================

function updateNavigation() {

    const isFirst =
        currentQuestion === 0;

    const isLast =
        currentQuestion === questions.length - 1;

    const currentAnswered =
        selectedAnswers[currentQuestion] !== -1;

    const allAnswered =
        allQuestionsAnswered();


    // ===============================
    // BACK
    // ===============================

    backButton.disabled =
        isFirst;


    // ===============================
    // LAST QUESTION
    // ===============================

    if (isLast) {

        nextButton.classList.add("hidden");

        submitButton.classList.remove("hidden");

        submitButton.disabled =
            !allAnswered;

        submitButton.textContent =
            allAnswered
                ? "SUBMIT"
                : "ANSWER ALL QUESTIONS";

    }


    // ===============================
    // NORMAL QUESTIONS
    // ===============================

    else {

        submitButton.classList.add("hidden");

        nextButton.classList.remove("hidden");

        nextButton.textContent =
            "Next →";

        nextButton.disabled =
            !currentAnswered;

    }

}


// ===============================
// SUBMIT QUIZ
// ===============================

function submitQuiz() {

    if (!allQuestionsAnswered()) {

        return;

    }


    // ===============================
    // CALCULATE SCORES
    // ===============================

    survivalScore = 0;
    moralityScore = 0;


    selectedAnswers.forEach(
        (answerIndex, questionIndex) => {

            const answer =
                questions[questionIndex]
                    .answers[answerIndex];


            // Survival points

            survivalScore +=
                answer[1];


            // Morality points

            if (
                answer[2] !== null &&
                answer[2] !== undefined
            ) {

                moralityScore +=
                    answer[2];

            }

        }
    );


    showResult();

}


// ===============================
// SHOW RESULT
// ===============================

function showResult() {

    homeInfo.classList.remove("hidden");

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    // Suggested quizzes are outside
    // result-screen, so show them separately.

    if (suggestionsCard) {

        suggestionsCard.classList.remove("hidden");

    }


    // ===============================
    // SURVIVAL SCORE
    // ===============================

    const survivalPercentage =
        Math.round(
            (survivalScore / 450) * 100
        );


    // ===============================
    // MORALITY SCORE
    // ===============================

    const moralityPercentage =
        Math.round(
            (moralityScore / 394) * 100
        );


    document.getElementById("final-score").textContent =
        survivalPercentage;


    // ===============================
    // SURVIVAL RESULT
    // ===============================

    let title;
    let description;
    let survival;


    if (survivalPercentage <= 20) {

        title =
            "Zombie Food";

        description =
            "You probably wouldn't make it very far. Your biggest enemy isn't necessarily the zombies — it's your decision-making.";

        survival =
            "Hours to a few days";


    } else if (survivalPercentage <= 45) {

        title =
            "Short-Term Survivor";

        description =
            "You might survive the initial chaos, but long-term survival would be difficult. Panic and poor preparation could eventually catch up with you.";

        survival =
            "Several days to a few weeks";


    } else if (survivalPercentage <= 70) {

        title =
            "Survivor";

        description =
            "You have a decent chance. You understand that surviving isn't just about fighting zombies. Food, water, shelter and information matter.";

        survival =
            "Several weeks to a few months";


    } else if (survivalPercentage <= 90) {

        title =
            "Apocalypse Survivor";

        description =
            "You're surprisingly difficult to take down. You plan ahead, avoid unnecessary risks and understand that other survivors can be dangerous.";

        survival =
            "Several months to several years";


    } else {

        title =
            "The Last Human Alive";

        description =
            "You don't merely survive the apocalypse — you've basically turned it into a long-term project. You prepare before everyone else realizes there's a problem.";

        survival =
            "5+ years";

    }


    document.getElementById("result-title").textContent =
        title;

    document.getElementById("result-description").textContent =
        description;

    document.getElementById("survival-time").textContent =
        survival;


    // ===============================
    // MORALITY RESULT
    // ===============================

    document.getElementById("morality-score").textContent =
        moralityPercentage + "%";


    let moralityTitle;
    let moralityDescription;


    if (moralityPercentage <= 20) {

        moralityTitle =
            "Ruthless Survivor";

        moralityDescription =
            "You put survival above almost everything else. In the apocalypse, you are willing to make difficult choices without letting emotions get in the way.";


    } else if (moralityPercentage <= 40) {

        moralityTitle =
            "Pragmatic Survivor";

        moralityDescription =
            "You care about others, but survival comes first when resources and safety are limited.";


    } else if (moralityPercentage <= 60) {

        moralityTitle =
            "Balanced Survivor";

        moralityDescription =
            "You try to balance survival with compassion. You understand that protecting your group sometimes requires difficult choices.";


    } else if (moralityPercentage <= 80) {

        moralityTitle =
            "Compassionate Survivor";

        moralityDescription =
            "You place considerable value on helping others while still understanding the realities of survival.";


    } else {

        moralityTitle =
            "Humanitarian";

        moralityDescription =
            "Even during the apocalypse, you strongly believe that protecting human life and helping others should remain a priority.";

    }


    document.getElementById("morality-description").textContent =
        moralityTitle + " — " + moralityDescription;


    progressBar.style.width =
        "100%";

}


// ===============================
// RESTART
// ===============================

function restartQuiz() {

    currentQuestion = 0;

    survivalScore = 0;

    moralityScore = 0;

    selectedAnswers =
        new Array(questions.length).fill(-1);


    resultScreen.classList.add("hidden");

    quizScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");


    if (suggestionsCard) {

        suggestionsCard.classList.add("hidden");

    }


    progressBar.style.width =
        "0%";


    submitButton.disabled =
        true;

    submitButton.textContent =
        "SUBMIT";

}


// ===============================
// SHARE
// ===============================

async function shareResult() {

    const title =
        document.getElementById("result-title")
            .textContent;

    const survival =
        document.getElementById("survival-time")
            .textContent;

    const finalScore =
        document.getElementById("final-score")
            .textContent;


    const quizUrl =
        "https://apocalypsequizzes.com/ultimate-zombie-survival-test/";


    const shareText =
        `🧟 I scored ${finalScore}% on The Ultimate Zombie Apocalypse Survival Test!\n\n` +
        `${title}\n` +
        `Estimated survival: ${survival}\n\n` +
        `How long would YOU survive?`;


    const shareData = {

        title:
            "The Ultimate Zombie Apocalypse Survival Test",

        text:
            shareText,

        url:
            quizUrl

    };


    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(
                shareText +
                "\n\n" +
                quizUrl
            );

            alert(
                "Your result has been copied! You can paste it anywhere."
            );

        }

    } catch (error) {

        console.log(
            "Sharing cancelled."
        );

    }

}


// ===============================
// GLOBAL SITE MENU
// ===============================

const menuToggle =
    document.getElementById("menu-toggle");

const siteMenu =
    document.getElementById("site-menu");


if (menuToggle && siteMenu) {


    // OPEN / CLOSE WITH HAMBURGER

    menuToggle.addEventListener(
        "click",
        function (event) {

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


    // CLOSE WHEN CLICKING OUTSIDE

    document.addEventListener(
        "click",
        function (event) {

            if (
                !siteMenu.hidden &&
                !siteMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
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


    // CLOSE AFTER CLICKING A MENU LINK

    siteMenu
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

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

        });

}