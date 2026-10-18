const questions = [
    // 1
    {
        question: "Infected are moving below your apartment. The doors are secure. What first?",
        answers: [
            ["Secure entry points, reduce noise and light, monitor trusted updates", 5, 4],
            ["Go outside to watch the infected", 2, 2],
            ["Shout instructions from a window", 1, 2],
            ["Open windows to hear the street", 2, 2]
        ]
    },

    // 2
    {
        question: "You must evacuate in 20 minutes. What do you pack first?",
        answers: [
            ["Water, medicines, first aid, ID, phone and radio", 5, 4],
            ["Clothes before essentials", 3, 2],
            ["Valuables and bulky items", 2, 2],
            ["Search for extra comforts", 2, 2]
        ]
    },

    // 3
    {
        question: "You hear groans and pounding behind your locked door. What first?",
        answers: [
            ["Keep it shut; assess through a peephole, camera or barrier", 5, 4],
            ["Open it slightly while holding the edge", 2, 3],
            ["Stand at the door and shout questions", 2, 2],
            ["Enter the unverified hallway", 1, 2]
        ]
    },

    // 4
    {
        question: "A neighbor with a bloody sleeve asks to enter during a bite-spread outbreak. What do you do?",
        answers: [
            ["Speak through a barrier; ask about bites and offer safe help", 5, 5],
            ["Let them in before checking the wound", 2, 3],
            ["Assume blood means infection and refuse all contact", 3, 1],
            ["Leave them outside without guidance or supplies", 2, 1]
        ]
    },

    // 5
    {
        question: "Power fails as infected move outside. You have a radio and partly charged phones. What first?",
        answers: [
            ["Secure doors, cover lights, check updates and save battery", 5, 4],
            ["Shine a bright torch through the window", 2, 2],
            ["Start a vehicle to check nearby power", 1, 2],
            ["Keep calling everyone despite network overload", 2, 2]
        ]
    },

    // 6
    {
        question: "Smoke enters your flat. The main exit is smoky; the second stairwell is clear. What do you do?",
        answers: [
            ["Stay inside and wait", 2, 3],
            ["Use the clear stairwell and avoid smoke", 5, 4],
            ["Take the elevator", 0, 2],
            ["Go to the roof without checking the route", 3, 3]
        ]
    },

    // 7
    {
        question: "A walker is found inside your sealed compound. Nobody saw it enter. What first?",
        answers: [
            ["Isolate the area and check entry points from safety", 5, 4],
            ["Crowd around it to identify it", 1, 2],
            ["Move it through the sleeping area", 1, 1],
            ["Accuse the nearest resident of opening the gate", 1, 1]
        ]
    },

    // 8
    {
        question: "Infected block the stairwell, and boxes obstruct your backup exit. What do you do?",
        answers: [
            ["Clear the backup route if safe; move people from the threatened door", 5, null],
            ["Open the stairwell to count the infected", 1, null],
            ["Put more supplies beside the blocked exit", 2, null],
            ["Wait until the main door fails", 1, null]
        ]
    },

    // 9
    {
        question: "A walker rushes you in a narrow corridor. A side room is behind you. What now?",
        answers: [
            ["Retreat into the clear room and use the doorway as a barrier", 5, 3],
            ["Backpedal without checking your footing", 2, 2],
            ["Freeze and hope it stops", 0, 2],
            ["Swing wildly while staying in the corridor", 2, 1]
        ]
    },

    // 10
    {
        question: "A teammate becomes confused and unsteady in hot weather. What first?",
        answers: [
            ["Move them to shade, cool them and seek urgent medical help", 5, null],
            ["Make them keep walking", 0, null],
            ["Give salt tablets without assessment", 2, null],
            ["Feed them a large meal and resume walking", 1, null]
        ]
    },

    // 11
    {
        question: "Three people have 10 L of water and no refill in hot weather. Best plan?",
        answers: [
            ["Conserve water and find a safe refill", 5, null],
            ["Stop drinking completely", 0, null],
            ["Drink freely and worry later", 2, null],
            ["Assume nearby stream water is safe", 2, null]
        ]
    },

    // 12
    {
        question: "A group member secretly takes extra food. What do you do?",
        answers: [
            ["Ignore it", 2, 2],
            ["Humiliate them publicly", 3, 1],
            ["Check their needs and set fair rations", 5, 5],
            ["Secretly cut their food", 3, 1]
        ]
    },

    // 13
    {
        question: "Your food will last two days, and resupply is uncertain. What first?",
        answers: [
            ["Delay planning", 2, null],
            ["Count supplies, ration fairly and plan resupply", 5, null],
            ["Send everyone out searching", 3, null],
            ["Hide food from the group", 2, null]
        ]
    },

    // 14
    {
        question: "An injured member needs extra calories, but food is limited. What is fairest?",
        answers: [
            ["Give unlimited extra food", 3, 3],
            ["Give everyone identical portions", 4, 3],
            ["Balance recovery needs with group supplies", 5, 5],
            ["Secretly reduce their portion", 0, 0]
        ]
    },

    // 15
    {
        question: "You need a leader for watches, supplies and travel. What matters most?",
        answers: [
            ["Sound judgment and reliability", 5, 5],
            ["Physical strength alone", 3, 2],
            ["Popularity alone", 3, 4],
            ["Making every decision alone", 3, 1]
        ]
    },

    // 16
    {
        question: "A member wants to run a generator in a closed room. What is safest?",
        answers: [
            ["Keep it off; use battery lights", 4, null],
            ["Run it outdoors, away from doors and vents", 5, null],
            ["Use an attached garage with its door open", 0, null],
            ["Connect it to house wiring without isolating mains power", 0, null]
        ]
    },

    // 17
    {
        question: "Your vehicle has limited space for a trip through infected territory. What do you pack?",
        answers: [
            ["Water, medical supplies, navigation, repair kit and some fuel", 5, null],
            ["Weapons and ammunition instead of water and repair gear", 2, null],
            ["Furniture and valuables before essentials", 1, null],
            ["Bulky barricade materials that are hard to carry", 2, null]
        ]
    },

    // 18
    {
        question: "Two members argue loudly as a horde approaches. Your covered exit is nearby. What first?",
        answers: [
            ["Quiet everyone and move together; settle the dispute later", 5, 4],
            ["Shout louder to give orders", 1, 2],
            ["Split up and let each side choose a route", 1, 2],
            ["Stay until the argument is settled", 2, 3]
        ]
    },

    // 19
    {
        question: "Food arrives while the storeroom floor is damp. Where should it go?",
        answers: [
            ["Store it dry, raised off the floor and with airflow", 5, null],
            ["Stack bags against the damp wall", 2, null],
            ["Seal damp bags tightly and leave them", 1, null],
            ["Leave food open beside the sleeping area", 2, null]
        ]
    },

    // 20
    {
        question: "Rain leaks into the sleeping room. You have one tarp. What first?",
        answers: [
            ["Move people clear and protect them; repair safely", 5, 5],
            ["Climb onto the wet roof alone", 1, 2],
            ["Leave beds under the leak", 2, 2],
            ["Block the only exit with the tarp", 0, 1]
        ]
    },

    // 21
    {
        question: "A child calls for help inside a building with infected nearby. What first?",
        answers: [
            ["Observe from cover, find exits and plan a quiet rescue", 5, 5],
            ["Rush inside alone", 2, 4],
            ["Shout repeatedly to guide the child", 2, 3],
            ["Leave without checking safer rescue options", 3, 1]
        ]
    },

    // 22
    {
        question: "Floodwater rises. One person is reachable; another is behind unstable debris. What now?",
        answers: [
            ["Help the reachable person and call for help", 5, 4],
            ["Enter the unstable area anyway", 2, 3],
            ["Choose by age, not access or danger", 3, 2],
            ["Wait until both routes flood", 0, 1]
        ]
    },

    // 23
    {
        question: "A ceiling panel is falling toward a teammate. What do you do?",
        answers: [
            ["Warn them and help them move clear if safe", 5, 4],
            ["Run under it to grab their belongings", 0, 2],
            ["Freeze and wait", 0, 2],
            ["Drag them by an injured limb without checking safety", 1, 2]
        ]
    },

    // 24
    {
        question: "A teammate wants to use a car alarm to lure infected away. Other survivors are nearby. What first?",
        answers: [
            ["Check herd movement and others' positions; coordinate a safe diversion", 5, 5],
            ["Trigger the alarm immediately", 2, 2],
            ["Have people shout from different places", 1, 2],
            ["Let one teammate try it alone", 2, 2]
        ]
    },

    // 25
    {
        question: "A friend damages the only working radio and hides it. What do you do?",
        answers: [
            ["Keep it secret", 2, 3],
            ["Report it, check repairs and speak privately", 5, 5],
            ["Shame them before checking the damage", 3, 1],
            ["Discard it without telling anyone", 2, 1]
        ]
    },

    // 26
    {
        question: "A teammate has a fresh bite. What should happen first?",
        answers: [
            ["Move them to a separate area and follow exposure protocol", 5, null],
            ["Hide the bite so they can stay with everyone", 1, null],
            ["Abandon them immediately", 1, null],
            ["Let them mix with everyone while you debate", 1, null]
        ]
    },

    // 27
    {
        question: "A stranger asks for food. Supplies are limited, but no danger is visible. What do you do?",
        answers: [
            ["Invite them straight inside", 2, 4],
            ["Assess safely and offer help if possible", 5, 5],
            ["Threaten them", 2, 0],
            ["Give away all remaining food", 2, 4]
        ]
    },

    // 28
    {
        question: "A stranger offers medicine with unknown contents and expiry. What do you do?",
        answers: [
            ["Check it and reject unverifiable medicine", 5, 5],
            ["Accept it because medicine is useful", 2, 3],
            ["Discard all medicines, even verified supplies", 3, 2],
            ["Attack them and take it", 2, 0]
        ]
    },

    // 29
    {
        question: "Two members accuse each other of stealing medicine, but there is no proof. What now?",
        answers: [
            ["Punish the person you distrust", 2, 1],
            ["Separate them, check facts and protect medical supplies", 5, 5],
            ["Let the loudest person decide", 2, 2],
            ["Ignore the dispute", 3, 2]
        ]
    },

    // 30
    {
        question: "A survivor says motionless infected become harmless after hours. What is safest?",
        answers: [
            ["Treat the claim as unverified; observe from cover and keep an escape route", 5, 4],
            ["Walk among them because they are still", 1, 2],
            ["Approach and throw something to test them", 1, 2],
            ["Cross through them before they move", 1, 2]
        ]
    },

    // 31
    {
        question: "You find an abandoned car near infected. The key is inside, but the cabin and exit are unclear. What first?",
        answers: [
            ["Check the cabin, access, alarm risk and escape route from cover", 5, null],
            ["Start it immediately", 2, null],
            ["Search the glove box before checking surroundings", 1, null],
            ["Send one person to inspect it alone", 1, null]
        ]
    },

    // 32
    {
        question: "Your flashlight fails in a stairwell. Groans come from below, and your group is unseen. What now?",
        answers: [
            ["Back away quietly along the known route", 5, null],
            ["Sweep the beam around to find the source", 2, null],
            ["Go down before the light fails", 1, null],
            ["Call out to check how close they are", 1, null]
        ]
    },

    // 33
    {
        question: "A horde blocks the main road. A side road may bypass it, but its condition is unknown. What now?",
        answers: [
            ["Observe from cover; verify the side road and fallback", 5, null],
            ["Drive through the horde's edge", 1, null],
            ["Take the side road without checking it", 2, null],
            ["Sound the horn to move the infected", 1, null]
        ]
    },

    // 34
    {
        question: "Your vehicle may not fit the narrow tracks. Walking to a fallback is possible. What guides you?",
        answers: [
            ["Keep the vehicle at all costs", 3, null],
            ["Compare route, fuel, load and terrain", 5, null],
            ["Abandon it without essentials", 2, null],
            ["Split into vehicles without a plan", 2, null]
        ]
    },

    // 35
    {
        question: "At dusk, you find a house with its door open and blood inside. Infected are nearby. What do you do?",
        answers: [
            ["Assess from cover, check for movement and locate exits", 5, null],
            ["Enter quickly and lock the door", 2, null],
            ["Assume the blood is old and settle in", 1, null],
            ["Shout from the doorway to check for people", 1, null]
        ]
    },

    // 36
    {
        question: "A pharmacy fridge has been warm since a blackout. What about medicines needing refrigeration?",
        answers: [
            ["Discard every medicine, including those stored safely", 3, null],
            ["Set them aside and seek verified storage guidance or alternatives", 5, null],
            ["Cool them now and assume they are safe", 2, null],
            ["Judge safety by colour alone", 0, null]
        ]
    },

    // 37
    {
        question: "A medical fridge has 45 minutes of backup power. The only generator's noise attracts infected. What first?",
        answers: [
            ["Use insulated boxes while finding a safe generator site and escape route", 5, null],
            ["Start the generator in the exposed yard", 1, null],
            ["Leave medicines in the warming fridge while debating", 1, null],
            ["Run the generator inside the sleeping area", 0, null]
        ]
    },

    // 38
    {
        question: "Some cans are intact; others are swollen or leaking. What do you do?",
        answers: [
            ["Eat every can", 0, null],
            ["Keep sound cans and discard damaged ones", 5, null],
            ["Discard all cans, including intact ones", 3, null],
            ["Choose by label alone", 2, null]
        ]
    },

    // 39
    {
        question: "A stream smells of fuel and has an oily sheen. What do you do?",
        answers: [
            ["Boil it and drink", 2, null],
            ["Avoid it; boiling cannot remove fuel contamination", 5, null],
            ["Use it to wash food and dishes", 1, null],
            ["Leave it unmarked for others", 0, null]
        ]
    },

    // 40
    {
        question: "Your vehicle stalls, and repeated starts attract infected. You are not surrounded. What now?",
        answers: [
            ["Stop starting it; reduce noise and assess a safe exit", 5, null],
            ["Keep turning the key until it starts", 1, null],
            ["Sound the horn to warn others", 1, null],
            ["Have everyone scatter in different directions", 1, null]
        ]
    },

    // 41
    {
        question: "Heavy rain limits visibility. The shoulder is unstable, but high ground is nearby. What now?",
        answers: [
            ["Keep driving fast", 0, null],
            ["Stop on safe high ground and wait", 5, null],
            ["Use the unstable shoulder", 2, null],
            ["Send people ahead on foot", 2, null]
        ]
    },

    // 42
    {
        question: "A damaged bridge lies ahead. Infected approach from the far side. What is safest?",
        answers: [
            ["Stop, avoid the damaged bridge and find a verified fallback", 5, null],
            ["Drive across before the horde arrives", 1, null],
            ["Send someone across to test it while others wait on it", 1, null],
            ["Use repeated horn blasts to move the infected", 1, null]
        ]
    },

    // 43
    {
        question: "Fuel is low. The known station is surrounded by infected, but a checkpoint is within range. What do you do?",
        answers: [
            ["Head to the checkpoint and seek a safer fuel plan", 5, null],
            ["Drive through the infected to reach the station", 2, null],
            ["Send someone alone to siphon fuel", 1, null],
            ["Circle the station while burning more fuel", 1, null]
        ]
    },

    // 44
    {
        question: "Useful supplies lie across an infected street. You have enough essentials for several days. What now?",
        answers: [
            ["Mark the cache; return with a safe route and fallback", 5, null],
            ["Cross now before the cache disappears", 2, null],
            ["Send the fastest person alone", 1, null],
            ["Create a diversion without checking where infected may go", 1, null]
        ]
    },

    // 45
    {
        question: "At dusk, your route forks. The last infected sighting was near one branch. What do you do?",
        answers: [
            ["Check the report's age, choose carefully and keep a fallback", 5, null],
            ["Choose randomly to save daylight", 2, null],
            ["Split up to check both branches", 1, null],
            ["Trust the oldest report as current", 1, null]
        ]
    },

    // 46
    {
        question: "A teammate has a minor burn from hot water. What first?",
        answers: [
            ["Cool with clean running water and protect the burn", 5, null],
            ["Apply butter or grease", 0, null],
            ["Break the blisters", 0, null],
            ["Cover it with dirty cloth", 2, null]
        ]
    },

    // 47
    {
        question: "A friend admits to a bite from hours ago and now has a fever. They want to return to shared quarters. What do you do?",
        answers: [
            ["Follow exposure protocol, separate them safely and arrange care", 5, null],
            ["Let them return because they are conscious", 1, null],
            ["Assume they are beyond help and abandon them", 1, null],
            ["Hide the exposure from everyone", 1, null]
        ]
    },

    // 48
    {
        question: "Two people want to share a prescription drug, but its safety is unclear. What do you do?",
        answers: [
            ["Split the tablets equally", 0, null],
            ["Use as prescribed and seek medical advice", 5, null],
            ["Double the dose for the sicker person", 0, null],
            ["Stop all medicines without checking", 2, null]
        ]
    },

    // 49
    {
        question: "New food is placed in front of older stock. How do you prevent waste?",
        answers: [
            ["Remove labels to simplify sorting", 1, null],
            ["Date stock and use the oldest safe food first", 5, null],
            ["Open packages to guess their age", 2, null],
            ["Use new deliveries first because they're easier to reach", 2, null]
        ]
    },

    // 50
    {
        question: "Without a sewer, where should a latrine go if a stream may supply drinking water?",
        answers: [
            ["Beside the stream", 0, null],
            ["Downhill, away from water and food areas", 5, null],
            ["Inside the food store", 0, null],
            ["Anywhere, if lightly covered", 3, null]
        ]
    },

    // 51
    {
        question: "People dip shared cups into the drinking-water barrel. What rule helps most?",
        answers: [
            ["Let each person dip their own cup", 2, null],
            ["Use a clean tap or ladle; keep cups and hands out", 5, null],
            ["Leave the barrel uncovered for easy refilling", 2, null],
            ["Add detergent to the drinking water", 0, null]
        ]
    },

    // 52
    {
        question: "After a horde escape, one person has severe bleeding, another a suspected bite and another a minor ankle injury. What first?",
        answers: [
            ["Secure the area, control severe bleeding and isolate the exposure safely", 5, null],
            ["Treat the ankle first because they can explain events", 1, null],
            ["Ignore the bleeding until the bite is assessed", 1, null],
            ["Crowd around the suspected bite to inspect it", 1, null]
        ]
    },

    // 53
    {
        question: "Used dressings lie beside clean first-aid supplies. What now?",
        answers: [
            ["Reuse them if they look clean", 0, null],
            ["Separate waste; clean hands and surfaces before restocking", 5, null],
            ["Rinse them in the drinking-water basin", 0, null],
            ["Leave them beside the kit until later", 2, null]
        ]
    },

    // 54
    {
        question: "Someone has a severe allergic reaction and trouble breathing. Their prescribed auto-injector is available. What first?",
        answers: [
            ["Use it as directed and get emergency help", 5, 5],
            ["Wait for breathing to improve", 0, 2],
            ["Give food and make them walk", 0, 2],
            ["Use an unknown medicine", 0, 2]
        ]
    },

    // 55
    {
        question: "Water was stored uncovered near animal waste. You can boil it and use clean containers. Best plan?",
        answers: [
            ["Drink it untreated if it looks clear", 2, null],
            ["Treat it and store it in clean, covered containers", 5, null],
            ["Add random amounts of chemicals", 0, null],
            ["Discard it without checking if safe treatment is possible", 3, null]
        ]
    },

    // 56
    {
        question: "The same two people always take the longest night watches. What is fairest?",
        answers: [
            ["Keep the same rota to avoid arguments", 2, 2],
            ["Rotate shifts, protect rest and train backups", 5, 5],
            ["Keep everyone awake all night", 0, 1],
            ["Give every shift to the novice", 2, 2]
        ]
    },

    // 57
    {
        question: "After a friend becomes infected, a reliable teammate is distressed and cannot stand watch. What do you do?",
        answers: [
            ["Check their safety, support them and temporarily reassign duties", 5, 5],
            ["Force them onto watch to prove their worth", 2, 1],
            ["Call them weak and unreliable", 1, 0],
            ["Leave them alone indefinitely without checking on them", 2, 2]
        ]
    },

    // 58
    {
        question: "A member cannot hear the watch-change bell. What should the group do?",
        answers: [
            ["Blame them for missing it", 2, 1],
            ["Add visual or tactile signals and brief everyone", 5, 5],
            ["Exclude them from useful duties", 3, 1],
            ["Remove all warning systems", 0, 2]
        ]
    },

    // 59
    {
        question: "Rats appear near the food store. What is the best response?",
        answers: [
            ["Leave food open to watch the rats", 0, null],
            ["Seal food, clean spills and secure waste", 5, null],
            ["Trap rats nearby but ignore hygiene", 3, null],
            ["Store food unsealed in sleeping bags", 2, null]
        ]
    },

    // 60
    {
        question: "A pipe wastes 25% of your water daily. Rain is due next week and the roof is intact. What first?",
        answers: [
            ["Repair and test the pipe", 5, null],
            ["Reinforce the roof first", 3, null],
            ["Split the crew so neither task gets done", 3, null],
            ["Wait until water is nearly gone", 0, null]
        ]
    },

    // 61
    {
        question: "A rescue message gives a bridge route, but it's 40 minutes old and infected can move. What first?",
        answers: [
            ["Check the time, verify the route and prepare a fallback", 5, null],
            ["Treat it as a current all-clear and leave", 2, null],
            ["Ignore all rescue messages", 2, null],
            ["Transmit your exact location continuously", 1, null]
        ]
    },

    // 62
    {
        question: "Gunfire attracts nearby infected. Your wall is holding, but residents want to shoot at a passing group. What should the leader do?",
        answers: [
            ["Avoid needless firing; track them from cover and prepare for a breach", 5, 4],
            ["Fire now to reduce their numbers", 2, 2],
            ["Send a guard outside to attack quietly", 1, 2],
            ["Shout and bang metal to drive them away", 1, 2]
        ]
    },

    // 63
    {
        question: "Another group occupies your fallback base as a horde approaches. You have a second possible site. What do you do?",
        answers: [
            ["Avoid forced entry; communicate safely and use the fallback", 5, 4],
            ["Try to seize the base", 2, 1],
            ["Debate beside the main road", 1, 2],
            ["Split up to confront them and scout alone", 1, 1]
        ]
    },

    // 64
    {
        question: "A settlement demands your weapons before entry, but its rules are unclear. What do you do?",
        answers: [
            ["Surrender them without asking", 3, 3],
            ["Refuse and threaten the guards", 2, 1],
            ["Ask about weapon storage and rules", 5, 5],
            ["Pretend to agree while planning an attack", 3, 0]
        ]
    },

    // 65
    {
        question: "Residents fear retaliation for reporting unsafe rules. What should the settlement establish?",
        answers: [
            ["Let the leader handle complaints privately without records", 3, 2],
            ["Create protected reporting and fair reviews", 5, 5],
            ["Encourage public accusations before checking facts", 2, 2],
            ["Punish anyone who questions decisions", 0, 0]
        ]
    },

    // 66
    {
        question: "Residents ignore horde alerts and leave the outer gate unsecured. How restore readiness?",
        answers: [
            ["Run realistic drills, clarify alerts and fix gate procedures", 5, 4],
            ["Wait for a real breach", 1, 2],
            ["Keep everyone on patrol despite fatigue", 2, 2],
            ["Punish every false alarm without reviewing the system", 2, 1]
        ]
    },

    // 67
    {
        question: "Infected press against a cracking wall. An inner barrier and fallback room are ready. What first?",
        answers: [
            ["Move people away, secure the inner barrier and reinforce safely", 5, null],
            ["Send someone outside to repair the wall", 1, null],
            ["Gather everyone beside the crack", 1, null],
            ["Wait for collapse before opening the fallback", 1, null]
        ]
    },

    // 68
    {
        question: "A fire nears your storehouse. The vehicle can carry medical supplies or seeds. How decide?",
        answers: [
            ["Weigh urgency, future value and fire risk", 5, null],
            ["Take the nearest box without checking", 3, null],
            ["Load both even if escape is blocked", 2, null],
            ["Block the exit while deciding", 0, null]
        ]
    },

    // 69
    {
        question: "An experienced hunter wants a shortcut through a building. Infected groan behind closed doors, and the far exit is unseen. What do you decide?",
        answers: [
            ["Choose a visible route with a known retreat", 5, 4],
            ["Follow the hunter because experience makes it safe", 2, 3],
            ["Split up and open several doors at once", 1, 2],
            ["Make noise to draw infected away without checking exits", 1, 2]
        ]
    },

    // 70
    {
        question: "Residents disagree: expand the settlement or protect existing food and water. What is the best process?",
        answers: [
            ["Let the loudest person decide", 2, 2],
            ["Compare evidence, costs and risks openly", 5, 5],
            ["Expand immediately", 3, 2],
            ["Keep the plan secret", 2, 1]
        ]
    },

    // 71
    {
        question: "New families need shelter, but beds and water are limited. What do you do?",
        answers: [
            ["Accept everyone regardless of capacity", 3, 4],
            ["Reject everyone automatically", 3, 1],
            ["Assess needs and offer staged help or options", 5, 5],
            ["Accept only people who can fight", 4, 1]
        ]
    },

    // 72
    {
        question: "A captured raider claims their group drove a horde toward you. They have lied before. What first?",
        answers: [
            ["Alert sentries, check evidence from cover and prepare a fallback", 5, 4],
            ["Threaten them until they repeat the story", 2, 0],
            ["Ignore the warning entirely", 1, 2],
            ["Send someone alone to check the horde", 1, 3]
        ]
    },

    // 73
    {
        question: "An experimental treatment may have slowed zombification once. A bitten adult volunteers, but evidence is weak. What is ethical?",
        answers: [
            ["Explain uncertainty, seek qualified oversight and consent, maintain precautions", 5, 5],
            ["Administer it immediately because they volunteered", 3, 3],
            ["Force it on every exposed person", 2, 0],
            ["Hide the reported case", 1, 1]
        ]
    },

    // 74
    {
        question: "A horde approaches a neighbor's bridge. Your radio battery is low. What warning should you send?",
        answers: [
            ["Send a brief alert with time, direction, route risk and confidence", 5, 5],
            ["Transmit continuously until the battery dies", 2, 3],
            ["Send only 'danger everywhere'", 2, 2],
            ["Stay silent until your own gate is threatened", 1, 1]
        ]
    },

    // 75
    {
        question: "A survivor wants to search alone for a missing relative in an infected area. What should the group do?",
        answers: [
            ["Check the last location and plan a safe route, support and fallback", 5, 5],
            ["Let them leave without a plan", 1, 3],
            ["Forbid any search or discussion", 3, 1],
            ["Send several people separately to search", 1, 3]
        ]
    },

    // 76
    {
        question: "Two reports disagree about a horde's route. What information helps most?",
        answers: [
            ["Compare report times and direction; observe safely and keep a fallback", 5, null],
            ["Trust the more confident reporter", 2, null],
            ["Assume the horde is between both routes", 1, null],
            ["Use the older report because it has circulated longer", 1, null]
        ]
    },

    // 77
    {
        question: "Your noise diversion keeps attracting infected from new directions. What now?",
        answers: [
            ["Stop the lure, reduce noise, regroup and use the fallback", 5, null],
            ["Make a louder diversion", 1, null],
            ["Split up without a meeting point", 1, null],
            ["Keep luring while debating in the open", 1, null]
        ]
    },

    // 78
    {
        question: "A storm may isolate your settlement, and a horde approaches the only bridge. What now?",
        answers: [
            ["Move vulnerable people and essentials to a secure fallback while routes are open", 5, null],
            ["Wait for the storm and reassess at the bridge", 1, null],
            ["Send everyone across without checking the bridge", 1, null],
            ["Assume the weather will stop the horde", 1, null]
        ]
    },

    // 79
    {
        question: "Only one person can repair the settlement's water pump. How reduce this risk?",
        answers: [
            ["Keep the skill to that person alone", 2, null],
            ["Document the work and train a backup", 5, null],
            ["Dismantle the pump in an emergency", 2, null],
            ["Wait for failure before learning", 2, null]
        ]
    },

    // 80
    {
        question: "Fuel is scarce. A family reports infected blocking their road, but a nearby shelter has radio contact. What do you do?",
        answers: [
            ["Coordinate with the nearby shelter and share a safe route or signal", 5, 5],
            ["Spend remaining fuel attempting the blocked route", 2, 4],
            ["Tell the family to manage alone", 1, 1],
            ["Drive to a distant town for fuel before replying", 1, 2]
        ]
    },

    // 81
    {
        question: "Food production is falling and wild supplies are scarce. What should your settlement prioritize?",
        answers: [
            ["Buy or seize more weapons", 3, 2],
            ["Improve food, water, seeds and storage", 5, 5],
            ["Explore unknown land without checking risks", 3, 3],
            ["Return to a city without a plan", 2, 2]
        ]
    },

    // 82
    {
        question: "Children born after the outbreak know little of the old world. What should they learn?",
        answers: [
            ["Combat and survival only", 4, 2],
            ["Survival, literacy, health and history", 5, 5],
            ["Old-world stories only", 3, 3],
            ["Nothing until they can work", 2, 1]
        ]
    },

    // 83
    {
        question: "An overflowing waste pit may drain toward your well in rain. What first?",
        answers: [
            ["Ignore it until illness appears", 0, null],
            ["Block runoff, contain waste and protect the well", 5, null],
            ["Dump waste into the stream", 0, null],
            ["Drain the overflow toward the stream", 0, null]
        ]
    },

    // 84
    {
        question: "Two settlements want to trade, but one is much larger. What makes a durable deal?",
        answers: [
            ["Accept any terms for one shipment", 3, 3],
            ["Set quantities, duties and dispute rules", 5, 5],
            ["Give critical supplies to prove trust", 2, 4],
            ["Reject every agreement", 3, 2]
        ]
    },

    // 85
    {
        question: "Crops keep failing despite adequate rain. Expanding fields costs labour. What first?",
        answers: [
            ["Plant more of the same crop", 3, null],
            ["Check soil and crops; test new varieties", 5, null],
            ["Abandon farming for scavenging", 2, null],
            ["Use all saved seed immediately", 2, null]
        ]
    },

    // 86
    {
        question: "Another settlement offers to merge, but its needs and risks are unclear. What do you do?",
        answers: [
            ["Merge immediately", 3, 4],
            ["Reject it because it is unfamiliar", 3, 2],
            ["Assess risks and start with limited cooperation", 5, 5],
            ["Demand all its supplies before talks", 2, 0]
        ]
    },

    // 87
    {
        question: "Settlement maps disagree after route changes. What should you do?",
        answers: [
            ["Let each team use its own version", 2, null],
            ["Keep a dated master, log changes and share verified copies", 5, null],
            ["Rely on memory to resolve differences", 3, null],
            ["Delete old maps without recording changes", 2, null]
        ]
    },

    // 88
    {
        question: "Your settlement has surplus seeds after a good harvest. Best use?",
        answers: [
            ["Eat every seed", 2, null],
            ["Save viable seeds, store them well and trade the surplus", 5, null],
            ["Mix seeds and store them damp", 0, null],
            ["Give away all seed stock", 2, null]
        ]
    },

    // 89
    {
        question: "One infected circles the same fence section at dusk. Residents want more patrols everywhere. What do you do?",
        answers: [
            ["Track its pattern, reinforce that section and adjust watch coverage", 5, 4],
            ["Ignore it because one infected is no threat", 2, 2],
            ["Send a guard outside to study it closely", 1, 2],
            ["Abandon the entire perimeter without checking other defenses", 1, 2]
        ]
    },

    // 90
    {
        question: "Neighboring settlements use different radio schedules and horde warnings. What should they establish first?",
        answers: [
            ["A tested shared alert format for time, direction, risk and confirmation", 5, 5],
            ["Adopt one settlement's code without testing or training", 3, 2],
            ["Use unstructured warnings that each settlement interprets alone", 2, 2],
            ["Broadcast every unverified rumour on every channel", 1, 1]
        ]
    }
];

// ===============================
// QUESTION DATA VALIDATION
// ===============================
// Keep the data structure predictable so edits to the question bank cannot
// silently break scoring. Validation logs problems for the developer but does
// not interrupt the quiz for visitors.

function validateQuestionData() {

    const issues = [];
    const seenQuestions = new Set();

    if (!Array.isArray(questions) || questions.length === 0) {
        issues.push("The question bank is empty or invalid.");
        console.error("Quiz data validation failed:", issues);
        return issues;
    }

    questions.forEach((question, questionIndex) => {

        const questionNumber = questionIndex + 1;

        if (!question || typeof question !== "object") {
            issues.push(`Question ${questionNumber} is not a valid object.`);
            return;
        }

        if (typeof question.question !== "string" || !question.question.trim()) {
            issues.push(`Question ${questionNumber} has no valid question text.`);
        } else {
            const normalizedQuestion = question.question.trim().toLowerCase().replace(/\s+/g, " ");
            if (seenQuestions.has(normalizedQuestion)) {
                issues.push(`Question ${questionNumber} duplicates an earlier question stem.`);
            }
            seenQuestions.add(normalizedQuestion);
        }

        if (!Array.isArray(question.answers) || question.answers.length !== 4) {
            issues.push(`Question ${questionNumber} must have exactly four answer options.`);
            return;
        }

        const seenAnswers = new Set();
        const moralityScoredFlags = [];

        question.answers.forEach((answer, answerIndex) => {

            const optionLabel = `Question ${questionNumber}, option ${answerIndex + 1}`;

            if (!Array.isArray(answer) || answer.length < 3) {
                issues.push(`${optionLabel} must contain label, survival score, and morality score.`);
                return;
            }

            if (typeof answer[0] !== "string" || !answer[0].trim()) {
                issues.push(`${optionLabel} has no valid label.`);
            } else {
                const normalizedAnswer = answer[0].trim().toLowerCase().replace(/\s+/g, " ");
                if (seenAnswers.has(normalizedAnswer)) {
                    issues.push(`${optionLabel} duplicates another option in the same question.`);
                }
                seenAnswers.add(normalizedAnswer);
            }

            if (!Number.isFinite(answer[1]) || answer[1] < 0 || answer[1] > 5) {
                issues.push(`${optionLabel} has an invalid survival score; expected a number from 0 to 5.`);
            }

            const moralityValue = answer[2];
            const moralityIsScored = moralityValue !== null && moralityValue !== undefined;
            moralityScoredFlags.push(moralityIsScored);

            if (moralityIsScored && (!Number.isFinite(moralityValue) || moralityValue < 0 || moralityValue > 5)) {
                issues.push(`${optionLabel} has an invalid morality score; use null or a number from 0 to 5.`);
            }

        });

        // Each question must either score morality for all four options or for none.
        // A mixture would make unscored options act like a hidden zero-point penalty.
        if (moralityScoredFlags.some(Boolean) && moralityScoredFlags.some(value => !value)) {
            issues.push(`Question ${questionNumber} mixes scored and unscored morality options.`);
        }

    });

    if (issues.length > 0) {
        console.error("Quiz data validation found issues:", issues);
    } else {
        console.info(`Quiz data validation passed: ${questions.length} questions, four options each.`);
    }

    return issues;

}


const QUESTION_DATA_ISSUES = validateQuestionData();


// ===============================
// SCORE BOUNDS — DERIVED FROM QUESTIONS
// ===============================
// The question array is the source of truth for scoring limits.
// Each percentage is normalized between the lowest and highest
// totals achievable by selecting one answer per question.
// This keeps 0% and 100% attainable if the array is edited later.
//
// A question with all-null morality values does not affect the morality range.
// Validation flags mixed scored/unscored options to avoid hidden zero penalties.

function calculateScoreBounds(scoreIndex) {

    return questions.reduce(
        (bounds, question) => {

            const answers =
                question && Array.isArray(question.answers)
                    ? question.answers
                    : [];

            const values = answers.map(answer => {

                const value = Array.isArray(answer)
                    ? answer[scoreIndex]
                    : null;

                return Number.isFinite(value)
                    ? value
                    : 0;

            });

            if (values.length === 0) {
                return bounds;
            }

            bounds.min += Math.min(...values);
            bounds.max += Math.max(...values);

            return bounds;

        },
        { min: 0, max: 0 }
    );

}


const SURVIVAL_SCORE_BOUNDS =
    calculateScoreBounds(1);

const MORALITY_SCORE_BOUNDS =
    calculateScoreBounds(2);


function scoreToPercentage(score, bounds) {

    if (!Number.isFinite(score) || !bounds ||
        !Number.isFinite(bounds.min) || !Number.isFinite(bounds.max)) {
        return 0;
    }

    const range = bounds.max - bounds.min;

    if (range <= 0) {
        return 0;
    }

    const boundedScore = Math.min(
        bounds.max,
        Math.max(bounds.min, score)
    );

    return Math.round(
        ((boundedScore - bounds.min) / range) * 100
    );

}


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
challengeButton.addEventListener("click", challengeFriends);

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
        scoreToPercentage(
            survivalScore,
            SURVIVAL_SCORE_BOUNDS
        );


    // ===============================
    // MORALITY SCORE
    // ===============================

    const moralityPercentage =
        scoreToPercentage(
            moralityScore,
            MORALITY_SCORE_BOUNDS
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
// SHARE + CHALLENGE
// ===============================

const QUIZ_URL =
    "https://apocalypsequizzes.com/ultimate-zombie-survival-test/";


async function shareOrCopy(shareData) {

    // Prefer the native sharing interface on supported devices.
    if (navigator.share) {

        try {
            await navigator.share({
                title: shareData.title,
                text: shareData.text,
                url: shareData.url
            });
            return;

        } catch (error) {

            // Cancellation is an intentional user action; do not show an alert.
            if (error && error.name === "AbortError") {
                return;
            }

            // If native sharing fails, try copying the same content instead.
            console.warn("Native sharing was unavailable; trying copy fallback.", error);

        }

    }

    const textToCopy = `${shareData.text}\n\n${shareData.url}`;

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {

        try {
            await navigator.clipboard.writeText(textToCopy);
            alert("Your message has been copied. You can now share it with your friends.");
            return;
        } catch (error) {
            console.warn("Clipboard API failed; trying the manual copy fallback.", error);
        }

    }

    // Older-browser fallback for pages where Clipboard API is not available.
    const copyField = document.createElement("textarea");
    copyField.value = textToCopy;
    copyField.setAttribute("readonly", "");
    copyField.style.position = "fixed";
    copyField.style.left = "-9999px";
    document.body.appendChild(copyField);
    copyField.select();

    let copied = false;

    try {
        copied = Boolean(document.execCommand && document.execCommand("copy"));
    } catch (error) {
        copied = false;
    }

    copyField.remove();

    if (copied) {
        alert("Your message has been copied. You can now share it with your friends.");
    } else {
        window.prompt("Copy this message to share it:", textToCopy);
    }

}


async function shareResult() {

    const title =
        document.getElementById("result-title").textContent;

    const survival =
        document.getElementById("survival-time").textContent;

    const finalScore =
        document.getElementById("final-score").textContent;

    const shareText =
        `🧟 I scored ${finalScore}% on The Ultimate Zombie Apocalypse Survival Test!\n\n` +
        `Result: ${title}\n` +
        `Estimated survival: ${survival}\n\n` +
        `How long would YOU survive?`;

    await shareOrCopy({
        title: "The Ultimate Zombie Apocalypse Survival Test",
        text: shareText,
        url: QUIZ_URL
    });

}


async function challengeFriends() {

    const title =
        document.getElementById("result-title").textContent;

    const survival =
        document.getElementById("survival-time").textContent;

    const finalScore =
        document.getElementById("final-score").textContent;

    const challengeText =
        `🧟 I scored ${finalScore}% on The Ultimate Zombie Apocalypse Survival Test!\n\n` +
        `My result: ${title} (${survival})\n\n` +
        `Think you can make better survival decisions? Take the test and challenge me!`;

    await shareOrCopy({
        title: "Can you beat my zombie survival score?",
        text: challengeText,
        url: QUIZ_URL
    });

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
