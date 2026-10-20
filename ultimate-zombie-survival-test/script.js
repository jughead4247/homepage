const questions = [
    // Content target: 48 zombie-focused questions plus 52 broader survival / group-decision questions.

        // ZOMBIE-FOCUSED QUESTION Q1
    {
        question: "Infected are on your street. Your apartment doors are secure. What first?",
        answers: [
            ["Secure doors, hide lights, stay quiet; follow trusted updates", 5, 4],
            ["Leave to get a closer look at the infected movement", 2, 2],
            ["Shout instructions from a window to nearby residents", 1, 2],
            ["Keep the windows open so you can hear the street better", 2, 2]
        ]
    },

        {
        question: "You must evacuate in 20 minutes. What do you pack first?",
        answers: [
            ["Water, meds, first aid, ID, phone/radio", 5, 4],
            ["Clothes before essentials", 3, 2],
            ["Valuables and bulky items", 2, 2],
            ["Spend the time searching for preferred extras", 2, 2]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q3
    {
        question: "In a bite-spread outbreak, someone pounds and groans outside your locked door. What first?",
        answers: [
            ["Keep it shut; check through a peephole or camera", 5, 4],
            ["Open it slightly while holding the edge", 2, 3],
            ["Shout through the door to identify them", 2, 2],
            ["Enter an unverified hallway to escape the noise", 1, 2]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q4
    {
        question: "A bloodied neighbor seeks entry during a bite-spread outbreak, but you can't inspect the wound. What now?",
        answers: [
            ["Talk through a barrier; ask about bites and offer safe help", 5, 5],
            ["Let them in immediately and check the wound afterward", 2, 3],
            ["Assume blood means infection and refuse all contact", 3, 1],
            ["Leave them outside without guidance or supplies", 2, 1]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q5
    {
        question: "Power fails at night as infected roam nearby. You have a radio and partly charged phones. What now?",
        answers: [
            ["Secure doors, hide lights, monitor updates, save batteries", 5, 4],
            ["Use a bright torch at the window to track the group", 2, 2],
            ["Start a vehicle to check the power outage", 1, 2],
            ["Keep calling contacts despite the overloaded network", 2, 2]
        ]
    },

    {
                question: "Smoke fills your flat; one exit is smoky, but a second stairwell is clear. What now?",
                answers: [
                    ["Stay inside and wait", 2, 3],
                    ["Use the clear stairwell; avoid smoke", 5, 4],
                    ["Use the elevator", 0, 2],
                    ["Go to the roof without checking the exit", 3, 3]
                ]
            },

        // ZOMBIE-FOCUSED QUESTION Q7
    {
        question: "A walker appears inside a sealed compound, but no one saw it enter. What should the watch leader do?",
        answers: [
            ["Secure the area and check entry points from cover", 5, 4],
            ["Gather a crowd around the walker to confirm what it is", 1, 2],
            ["Move it through sleeping areas before checking the wall", 1, 1],
            ["Blame a nearby resident and start a confrontation", 1, 1]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q8
    {
        question: "Infected press toward the stairwell; boxes block your backup exit. What's the priority?",
        answers: [
            ["Clear a safe backup route; move people away from the door", 5, null],
            ["Open the threatened stairwell to count infected", 1, null],
            ["Stack more supplies beside the blocked exit", 2, null],
            ["Wait until the main door fails before planning", 1, null]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q9
    {
        question: "A walker rushes you in a corridor; a side room is open behind you. What do you do?",
        answers: [
            ["Retreat into the clear room and use its doorway as a barrier", 5, 3],
            ["Backpedal quickly without checking your footing", 2, 2],
            ["Freeze and hope the walker stops", 0, 2],
            ["Swing wildly while trapped in the corridor", 2, 1]
        ]
    },

            {
        question: "During a hot march, a teammate becomes confused and unsteady. What first?",
        answers: [
            ["Move them to shade, cool them and get urgent help", 5, null],
            ["Make them keep walking to finish the route", 0, null],
            ["Give salt tablets without assessing their condition", 2, null],
            ["Give a large meal and resume the march immediately", 1, null]
        ]
    },

    {
                question: "Three people have 10 L of water in hot weather and no confirmed refill. What's the plan?",
                answers: [
                    ["Ration safely, seek a verified refill and avoid unsafe water", 5, null],
                    ["Stop drinking until another source appears", 0, null],
                    ["Drink without planning and hope supplies last", 2, null],
                    ["Use a nearby stream because it looks clear", 1, null]
                ]
            },

    {
                question: "A member takes extra food beyond the agreed ration. What do you do?",
                answers: [
                    ["Ignore it", 2, 2],
                    ["Humiliate them publicly", 3, 1],
                    ["Check needs; set fair rations", 5, 5],
                    ["Secretly cut their food", 3, 1]
                ]
            },

    {
                question: "Food will last two days, and there's no resupply plan. What's first?",
                answers: [
                    ["Postpone planning", 2, null],
                    ["Count food, ration fairly, plan resupply", 5, null],
                    ["Send everyone out searching", 3, null],
                    ["Hide food from the group", 2, null]
                ]
            },

    {
                question: "An injured member needs extra food, but supplies are tight. What's fair?",
                answers: [
                    ["Give unlimited extra food", 3, 3],
                    ["Keep portions identical in all cases", 4, 3],
                    ["Balance recovery needs with group supplies", 5, 5],
                    ["Secretly reduce their portion", 0, 0]
                ]
            },

    {
                question: "What matters most in a leader managing watches, supplies and travel?",
                answers: [
                    ["Sound judgment and reliability", 5, 5],
                    ["Physical strength alone", 3, 2],
                    ["Popularity alone", 3, 4],
                    ["Making every decision alone", 3, 1]
                ]
            },

        {
        question: "Someone wants to run a generator in a closed room. What's safest?",
        answers: [
            ["Use it outdoors, far from doors and vents—or keep it off", 5, null],
            ["Run it in an attached garage with the door open", 0, null],
            ["Place it beside an open window to vent the exhaust", 0, null],
            ["Connect it without isolating the home's mains power", 0, null]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q17
    {
        question: "Your vehicle has little cargo space, and engine noise attracts infected. What do you pack?",
        answers: [
            ["Pack water, medicine, navigation, repair kit and fuel", 5, null],
            ["Pack weapons first, leaving little room for essentials", 2, null],
            ["Pack bulky furniture and valuables before essentials", 1, null],
            ["Pack heavy barricade materials you can't carry easily", 2, null]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q18
    {
        question: "Two people argue loudly as a horde approaches your exit. What first?",
        answers: [
            ["Quiet everyone and follow the planned route; settle it later", 5, 4],
            ["Shout over them so the whole group hears your orders", 1, 2],
            ["Split up so each side can choose its own route", 1, 2],
            ["Stay in place until the argument is completely resolved", 2, 3]
        ]
    },

        {
        question: "A food delivery arrives while the storeroom floor is damp. Where should it go?",
        answers: [
            ["Store it dry, raised off the floor, with airflow", 5, null],
            ["Stack bags against the damp wall", 2, null],
            ["Seal damp bags tightly and leave them untouched", 1, null],
            ["Leave food open beside the sleeping area", 2, null]
        ]
    },

        {
        question: "Rain leaks into the sleeping room; only one tarp is available. What's first?",
        answers: [
            ["Move people clear; protect them and repair from safety", 5, 5],
            ["Climb onto the wet roof alone", 1, 2],
            ["Leave beds under the leak until the rain stops", 2, 2],
            ["Block the only exit with the tarp", 0, 1]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q21
    {
        question: "A child calls for help in a building with infected nearby. You don't know a safe exit. What first?",
        answers: [
            ["Watch from cover, check exits and plan a quiet rescue", 5, 5],
            ["Rush inside alone and follow the child's voice", 2, 4],
            ["Shout repeatedly to guide the child toward you", 2, 3],
            ["Leave without checking for a safer rescue option", 3, 1]
        ]
    },

    {
                question: "Floodwater rises: one survivor is reachable; another is behind unstable debris. What now?",
                answers: [
                    ["Help the reachable one; call for help", 5, 4],
                    ["Enter the unstable area anyway", 2, 3],
                    ["Choose by age, not access or danger", 3, 2],
                    ["Wait until both routes flood", 0, 1]
                ]
            },

        {
        question: "A ceiling panel is falling toward a teammate. You have seconds. What do you do?",
        answers: [
            ["Warn them; help them move clear if safe", 5, 4],
            ["Run under it to grab their belongings", 0, 2],
            ["Freeze and wait", 0, 2],
            ["Drag them by an injured limb without checking safety", 1, 2]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q24
    {
        question: "A car-alarm diversion is proposed, but the horde route and others' positions are unclear. What first?",
        answers: [
            ["Check herd route and others' positions before diverting", 5, 5],
            ["Trigger the alarm, assuming infected will move away", 2, 2],
            ["Have everyone shout from different places to split the herd", 1, 2],
            ["Let one teammate try it alone while others wait", 2, 2]
        ]
    },

    {
                question: "Your friend damages and hides the only working radio. What do you do?",
                answers: [
                    ["Keep it secret", 2, 3],
                    ["Report it; check repairs; speak privately", 5, 5],
                    ["Shame them before checking the damage", 3, 1],
                    ["Discard the radio without telling anyone", 2, 1]
                ]
            },

        // ZOMBIE-FOCUSED QUESTION Q26
    {
        question: "After escaping, you find a fresh bite on an alert teammate. Bites spread infection. What first?",
        answers: [
            ["Separate them, report the bite and follow exposure protocol", 5, null],
            ["Hide the bite to keep them in shared quarters", 1, null],
            ["Declare them beyond help and abandon them immediately", 1, null],
            ["Let them mingle while the group debates the bite", 1, null]
        ]
    },

    {
                question: "A stranger asks for food, and supplies are limited. No danger is visible. What do you do?",
                answers: [
                    ["Invite them straight inside", 2, 4],
                    ["Assess safely; offer help if feasible", 5, 5],
                    ["Threaten them", 2, 0],
                    ["Give away all remaining food", 2, 4]
                ]
            },

            {
        question: "A survivor offers medicine with unknown contents or expiry. What do you do?",
        answers: [
            ["Check it; reject unverifiable medicine", 5, 5],
            ["Accept it; medicine is useful", 2, 3],
            ["Discard all medicines, including verified stock", 3, 2],
            ["Attack them and take it", 2, 0]
        ]
    },

    {
                question: "Two members accuse each other of stealing medicine, but there's no proof. What now?",
                answers: [
                    ["Punish the person you distrust", 2, 1],
                    ["Separate them; check facts; protect care", 5, 5],
                    ["Let the loudest decide", 2, 2],
                    ["Ignore the dispute", 3, 2]
                ]
            },

        // ZOMBIE-FOCUSED QUESTION Q30
    {
        question: "A survivor claims motionless infected become harmless and wants to cross them. What do you do?",
        answers: [
            ["Don't trust it; watch from cover and keep an escape route", 5, 4],
            ["Walk through because stillness proves they're harmless", 1, 2],
            ["Approach and throw something to test their reaction", 1, 2],
            ["Take the shortest path through them before they move", 1, 2]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q31
    {
        question: "An abandoned car has a key but sits near infected. Its cabin and exit aren't clear. What first?",
        answers: [
            ["Check the cabin, alarm risk and escape route from cover", 5, null],
            ["Start it now and deal with noise afterward", 2, null],
            ["Search the glove box before checking your surroundings", 1, null],
            ["Send one person alone into the open to inspect it", 1, null]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q32
    {
        question: "Your flashlight fails in a stairwell; groans come from below, but your group is unseen. What now?",
        answers: [
            ["Retreat quietly along your known route; avoid that stairwell", 5, null],
            ["Sweep the failing beam around to find the source", 2, null],
            ["Go down quickly before the light fails completely", 1, null],
            ["Call out to determine whether the groans are close", 1, null]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q33
    {
        question: "A horde blocks the main road. A side road might bypass it, but isn't verified. What now?",
        answers: [
            ["Watch from cover; verify the side road and a fallback", 5, null],
            ["Drive through the horde's edge before it spreads", 1, null],
            ["Take the side road without checking for blockages", 2, null],
            ["Honk to make the infected leave the road", 1, null]
        ]
    },

    {
                question: "Your vehicle may not fit narrow tracks; walking to a fallback is possible. What guides your choice?",
                answers: [
                    ["Keep the vehicle at all costs", 3, null],
                    ["Compare route, fuel, load and terrain", 5, null],
                    ["Abandon it without essentials", 2, null],
                    ["Split up across vehicles without a plan", 2, null]
                ]
            },

            // ZOMBIE-FOCUSED QUESTION Q35
    {
        question: "At dusk, you find an open house with a blood trail inside; infected are nearby. How do you check it?",
        answers: [
            ["Check movement and exits from cover; don't enter blind", 5, null],
            ["Enter quickly and lock the front door behind you", 2, null],
            ["Assume the blood is old and skip the room check", 1, null],
            ["Shout from the doorway to see if anyone answers", 1, null]
        ]
    },

            {
        question: "A pharmacy fridge warmed during a long blackout. What about refrigerated medicines?",
        answers: [
            ["Discard all medicines without checking their storage needs", 3, null],
            ["Set them aside; check safe-storage guidance or alternatives", 5, null],
            ["Cool them now and assume their potency is restored", 2, null],
            ["Judge whether they are safe by colour alone", 0, null]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q37
    {
        question: "Fridge backup: 45 min. Generator noise may draw infected; insulated boxes are ready. What first?",
        answers: [
            ["Insulate medicines; assess a safe generator site and exit", 5, null],
            ["Start the exposed generator and deal with infected later", 1, null],
            ["Leave the medicines warming while the group debates", 1, null],
            ["Run the generator inside the sleeping quarters", 0, null]
        ]
    },

        {
        question: "Some cans are intact; others are swollen or leaking. What do you do?",
        answers: [
            ["Eat every can", 0, null],
            ["Keep sound cans; discard damaged ones", 5, null],
            ["Discard sound cans along with damaged ones", 3, null],
            ["Choose by label alone", 2, null]
        ]
    },

        {
        question: "A stream smells of fuel and has an oily sheen. What do you do?",
        answers: [
            ["Boil it and drink", 2, null],
            ["Avoid it; boiling will not remove fuel contamination", 5, null],
            ["Use it to wash food or dishes instead", 1, null],
            ["Leave it unmarked so others may use it", 0, null]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q40
    {
        question: "Your vehicle stalls; repeated starts attract infected, but you're not surrounded. What now?",
        answers: [
            ["Stop restarting; stay quiet and assess a safe exit", 5, null],
            ["Keep turning the key until the engine catches", 1, null],
            ["Sound the horn to warn other survivors nearby", 1, null],
            ["Have everyone scatter in different directions", 1, null]
        ]
    },

    {
                question: "Heavy rain ruins visibility, the shoulder is unstable, and high ground is near. What now?",
                answers: [
                    ["Keep driving fast", 0, null],
                    ["Stop at safe high ground and wait", 5, null],
                    ["Use the unstable shoulder", 2, null],
                    ["Send people ahead on foot", 2, null]
                ]
            },

                // ZOMBIE-FOCUSED QUESTION Q42
    {
        question: "A damaged bridge lies ahead, with infected approaching from the far side. What's safest?",
        answers: [
            ["Stop; avoid the damaged bridge and find a verified fallback", 5, null],
            ["Drive across before the horde reaches the near side", 1, null],
            ["Send one person across the damaged bridge to test it", 1, null],
            ["Honk repeatedly to draw the infected away", 1, null]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q43
    {
        question: "Fuel is low; infected surround the station, but a defended checkpoint is in range. What's the plan?",
        answers: [
            ["Head to the checkpoint and request safe resupply", 5, null],
            ["Drive through the station crowd because fuel is vital", 2, null],
            ["Send one person alone to siphon fuel", 1, null],
            ["Circle the station until an opening appears", 1, null]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q44
    {
        question: "An infected street separates you from a supply cache, but you have days of essentials. What now?",
        answers: [
            ["Mark the cache; return only with a safe route and fallback", 5, null],
            ["Cross now because the cache might be gone tomorrow", 2, null],
            ["Send the fastest person alone while others wait", 1, null],
            ["Make a loud diversion that may draw infected to your shelter", 1, null]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q45
    {
        question: "At dusk, your route forks; infected were last seen near one branch. Shelter remains ahead. What now?",
        answers: [
            ["Pause safely; check the report's age and plan a fallback", 5, null],
            ["Choose a branch at random to avoid losing more daylight", 2, null],
            ["Split the group to check both branches faster", 1, null],
            ["Trust the oldest report as if infected never move", 1, null]
        ]
    },

    {
                question: "A member gets a minor hot-water burn. What's first?",
                answers: [
                    ["Cool with clean running water; protect it", 5, null],
                    ["Apply butter or grease", 0, null],
                    ["Break the blisters", 0, null],
                    ["Cover it with dirty cloth", 2, null]
                ]
            },

        // ZOMBIE-FOCUSED QUESTION Q47
    {
        question: "A teammate reveals a bite from hours ago and now has a fever. They want back into camp. What now?",
        answers: [
            ["Separate them, follow exposure rules and arrange care", 5, null],
            ["Let them return because they're still conscious", 1, null],
            ["Treat fever as proof they've turned and abandon them", 1, null],
            ["Hide the exposure to avoid upsetting the group", 1, null]
        ]
    },

    {
                question: "Two people want to share a prescription drug, but its safety is unclear. What do you do?",
                answers: [
                    ["Split the tablets equally", 0, null],
                    ["Use as prescribed; seek medical advice", 5, null],
                    ["Double the dose for the sicker person", 0, null],
                    ["Stop all medication without checking", 2, null]
                ]
            },

        {
        question: "New supplies hide older food in storage. What's the fix?",
        answers: [
            ["Remove labels to make sorting simpler", 1, null],
            ["Date stock and use the oldest safe items first", 5, null],
            ["Open packages to guess which is oldest", 2, null],
            ["Use new deliveries first because they're easier to reach", 2, null]
        ]
    },

    {
                question: "Where should you put a latrine if a nearby stream may supply drinking water?",
                answers: [
                    ["Beside the stream", 0, null],
                    ["Downhill, away from water and food areas", 5, null],
                    ["Inside the food store", 0, null],
                    ["Anywhere if lightly covered", 3, null]
                ]
            },

        {
        question: "People dip cups into the drinking-water barrel. What rule helps most?",
        answers: [
            ["Let each person dip their own cup", 2, null],
            ["Use a clean tap or ladle; keep hands and cups out", 5, null],
            ["Leave the barrel uncovered for faster refilling", 2, null],
            ["Add detergent to the stored drinking water", 0, null]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q52
    {
        question: "After a horde escape, one survivor bleeds heavily; others have a bite and ankle injury. What first?",
        answers: [
            ["Secure room, control bleeding, handle the bite separately", 5, null],
            ["Treat the ankle first because they can explain what happened", 1, null],
            ["Ignore the bleeding until the bite question is settled", 1, null],
            ["Crowd around the suspected bite to inspect it", 1, null]
        ]
    },

                {
        question: "Used dressings are left beside clean first-aid supplies. What now?",
        answers: [
            ["Reuse them if they look clean", 0, null],
            ["Separate used dressings; clean hands and surfaces", 5, null],
            ["Rinse them in the communal drinking-water basin", 0, null],
            ["Leave them beside the kit until the next treatment", 2, null]
        ]
    },

    {
                question: "Severe allergy and breathing trouble; a prescribed auto-injector is ready. What first?",
                answers: [
                    ["Use as directed; get emergency help", 5, 5],
                    ["Wait for breathing to improve", 0, 2],
                    ["Give food and make them walk", 0, 2],
                    ["Use an unknown medicine", 0, 2]
                ]
            },

        {
        question: "Water was stored uncovered near animal waste. What's the safest plan?",
        answers: [
            ["Use it untreated if it looks clear", 2, null],
            ["Treat water; store in clean, covered containers", 5, null],
            ["Add random amounts of chemicals", 0, null],
            ["Discard it without checking if safe treatment is possible", 3, null]
        ]
    },

    {
                question: "The same two people always take the longest night watches. What's the fix?",
                answers: [
                    ["Keep the rota to avoid arguments", 2, 2],
                    ["Rotate shifts, protect rest, add backups", 5, 5],
                    ["Make everyone stay awake all night", 0, 1],
                    ["Give every shift to the novice", 2, 2]
                ]
            },

        // ZOMBIE-FOCUSED QUESTION Q57
    {
        question: "After losing a friend to infection, a teammate says they can't stand watch tonight. What now?",
        answers: [
            ["Support them, check safety and reassign watch without blame", 5, 5],
            ["Force them onto watch to prove they are still useful", 2, 1],
            ["Tell the group they are weak and unreliable", 1, 0],
            ["Leave them alone without checking whether they need help", 2, 2]
        ]
    },

    {
                question: "A member can't hear the watch-change bell. What should the group do?",
                answers: [
                    ["Blame them for missing it", 2, 1],
                    ["Add visual/tactile signals; brief all", 5, 5],
                    ["Exclude them from useful duties", 3, 1],
                    ["Remove all warning systems", 0, 2]
                ]
            },

    {
                question: "Rats have appeared near the food store. What first?",
                answers: [
                    ["Leave food open to watch the rats", 0, null],
                    ["Seal food, clean spills and secure waste", 5, null],
                    ["Trap rats near food; ignore hygiene", 3, null],
                    ["Store food unsealed in sleeping bags", 2, null]
                ]
            },

    {
                question: "A pipe wastes 25% of your water daily; rain is due next week. What should you fix first?",
                answers: [
                    ["Repair and test the pipe first", 5, null],
                    ["Reinforce the roof first", 3, null],
                    ["Split the crew so neither task gets done", 3, null],
                    ["Wait until water is nearly gone", 0, null]
                ]
            },

        // ZOMBIE-FOCUSED QUESTION Q61
    {
        question: "A 40-minute-old rescue alert gives a bridge route, but hordes move. What should you check first?",
        answers: [
            ["Check the report's age, verify the route and plan a fallback", 5, null],
            ["Treat the old broadcast as a current all-clear", 2, null],
            ["Ignore all rescue messages because infected can move", 2, null],
            ["Broadcast your exact location continuously while deciding", 1, null]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q62
    {
        question: "Gunfire attracts infected; the wall holds, but residents want to shoot passersby. What's best?",
        answers: [
            ["Avoid needless gunfire; watch from cover and guard the wall", 5, 4],
            ["Fire to reduce numbers, regardless of the noise", 2, 2],
            ["Send a guard outside to attack them at close range", 1, 2],
            ["Have residents shout and bang metal to drive them away", 1, 2]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q63
    {
        question: "Another group holds your fallback as a horde approaches. A second site may be reachable. What now?",
        answers: [
            ["Avoid forced entry; communicate safely; use the second site", 5, 4],
            ["Seize the occupied base before the group can refuse", 2, 1],
            ["Debate beside the main road while the horde approaches", 1, 2],
            ["Split up to confront the group and scout alone", 1, 1]
        ]
    },

    {
                question: "A settlement demands your weapons for entry, but its rules are unclear. What do you do?",
                answers: [
                    ["Surrender them without asking", 3, 3],
                    ["Refuse and threaten the guards", 2, 1],
                    ["Ask about weapon storage and rules", 5, 5],
                    ["Pretend to agree and plan an attack", 3, 0]
                ]
            },

        {
        question: "Residents fear retaliation for reporting unsafe rules. What should the settlement create?",
        answers: [
            ["Let the leader handle complaints with no records", 3, 2],
            ["Create a protected reporting and fair review process", 5, 5],
            ["Encourage public accusations before checking facts", 2, 2],
            ["Punish anyone who questions decisions", 0, 0]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q66
    {
        question: "After months without a breach, residents ignore alerts and leave the gate open. How restore readiness?",
        answers: [
            ["Run brief breach drills, clarify alerts and fix the gate", 5, 4],
            ["Wait for a real breach to make residents take it seriously", 1, 2],
            ["Keep everyone on patrol regardless of fatigue", 2, 2],
            ["Punish every false alarm without reviewing the system", 2, 1]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q67
    {
        question: "Infected press against a cracking wall; an inner barrier and fallback room are ready. What's first?",
        answers: [
            ["Move residents back; reinforce from behind the inner barrier", 5, null],
            ["Send someone outside to repair the wall under pressure", 1, null],
            ["Gather everyone next to the crack to watch for movement", 1, null],
            ["Wait for the wall to collapse before opening the fallback", 1, null]
        ]
    },

    {
                question: "A fire nears your storehouse; your vehicle can carry medicine or seeds. How do you decide?",
                answers: [
                    ["Weigh urgency, future value and fire risk", 5, null],
                    ["Take the nearest box without checking", 3, null],
                    ["Load both, even if escape is blocked", 2, null],
                    ["Block the exit while deciding", 0, null]
                ]
            },

            // ZOMBIE-FOCUSED QUESTION Q69
    {
        question: "A hunter wants to cross a building with infected behind doors and no visible exit. What now?",
        answers: [
            ["Choose a visible route with a retreat; avoid blind rooms", 5, 4],
            ["Trust the hunter to make unseen rooms safe", 2, 3],
            ["Split up and open several doors at once", 1, 2],
            ["Make noise to lure infected without checking exits", 1, 2]
        ]
    },

    {
                question: "Residents disagree over expanding the settlement or protecting food and water. How decide?",
                answers: [
                    ["Let the loudest decide", 2, 2],
                    ["Compare evidence, costs and risks openly", 5, 5],
                    ["Expand immediately", 3, 2],
                    ["Keep the plan secret", 2, 1]
                ]
            },

    {
                question: "New families need shelter, but beds and water are limited. What's fair?",
                answers: [
                    ["Accept everyone regardless of capacity", 3, 4],
                    ["Reject everyone automatically", 3, 1],
                    ["Assess needs; offer staged help or options", 5, 5],
                    ["Accept only people who can fight", 4, 1]
                ]
            },

        // ZOMBIE-FOCUSED QUESTION Q72
    {
        question: "A captured raider says their group sent a horde toward you. They've lied before. What first?",
        answers: [
            ["Alert sentries, verify from cover and prepare the fallback", 5, 4],
            ["Threaten the captive for more details", 2, 0],
            ["Ignore the warning because the captive has lied before", 1, 2],
            ["Send one person alone to check the reported horde", 1, 3]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q73
    {
        question: "A bitten volunteer wants an unproven treatment said to slow zombification. What's ethical?",
        answers: [
            ["Explain risks; seek oversight and consent; keep precautions", 5, 5],
            ["Give it immediately because the adult volunteered", 3, 3],
            ["Force it on everyone exposed, without consent", 2, 0],
            ["Hide the reported case to prevent questions", 1, 1]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q74
    {
        question: "A horde nears a neighbor's bridge; your radio battery is low. What warning do you send?",
        answers: [
            ["Send time, direction, risk and confidence; request a reply", 5, 5],
            ["Broadcast on every channel until the battery dies", 2, 3],
            ["Send only 'danger everywhere' without location or timing", 2, 2],
            ["Stay silent until the horde threatens your own gate", 1, 1]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q75
    {
        question: "A survivor wants to search alone for a missing relative in an infected area. How respond?",
        answers: [
            ["Verify last location; plan route, support and fallback", 5, 5],
            ["Let them leave without checking the route or return plan", 1, 3],
            ["Forbid any search and refuse to discuss alternatives", 3, 1],
            ["Send separate searchers in different directions", 1, 3]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q76
    {
        question: "Someone suggests infected blood on clothes to sneak past a horde. The tactic is unproven. What now?",
        answers: [
            ["Reject it; avoid infected fluids and plan a quiet retreat", 5, null],
            ["Test it on one person at close range before deciding", 1, null],
            ["Apply blood to exposed skin to maximize coverage", 1, null],
            ["Wait until the horde is close, then sprint through it", 2, null]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q77
    {
        question: "Your noise lure attracts infected from new directions instead of clearing the route. What now?",
        answers: [
            ["Stop the lure; stay quiet, regroup and use the fallback", 5, null],
            ["Make a louder diversion at the same location", 1, null],
            ["Split into smaller groups without a meeting point", 1, null],
            ["Keep the lure running while the group debates in the open", 1, null]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q78
    {
        question: "A storm may isolate your settlement as a horde nears its only dry-weather bridge. What now?",
        answers: [
            ["Move vulnerable people and essentials before routes close", 5, null],
            ["Wait until the storm starts and reassess at the bridge", 1, null],
            ["Send everyone over the bridge without checking it", 1, null],
            ["Ignore the horde because weather will certainly stop it", 1, null]
        ]
    },

    {
                question: "Only one person can repair the settlement's water pump. How reduce that risk?",
                answers: [
                    ["Keep the skill with them alone", 2, null],
                    ["Document the work and train a backup", 5, null],
                    ["Dismantle it during an emergency", 2, null],
                    ["Wait for failure before learning", 2, null]
                ]
            },

            // ZOMBIE-FOCUSED QUESTION Q80
    {
        question: "Fuel is low, and infected block a family's road. A nearby shelter can coordinate by radio. What now?",
        answers: [
            ["Coordinate with the closer shelter and share a safe route", 5, 5],
            ["Spend the last fuel driving into the infected", 2, 4],
            ["Tell the family to manage alone without useful information", 1, 1],
            ["Drive to the distant town for more fuel before replying", 1, 2]
        ]
    },

    {
                question: "Food production is falling and wild supplies are scarce. What should the settlement prioritize?",
                answers: [
                    ["Buy or seize more weapons", 3, 2],
                    ["Improve food, water, seeds and storage", 5, 5],
                    ["Explore unknown land without checking risk", 3, 3],
                    ["Return to a city without a plan", 2, 2]
                ]
            },

    {
                question: "Children born after the outbreak know little of the old world. What should they learn?",
                answers: [
                    ["Combat and survival only", 4, 2],
                    ["Teach survival, literacy, health and history", 5, 5],
                    ["Old-world stories only", 3, 3],
                    ["Nothing until they can work", 2, 1]
                ]
            },

        {
        question: "A waste pit may overflow toward your well in heavy rain. What's the priority?",
        answers: [
            ["Ignore it until illness appears", 0, null],
            ["Block runoff, contain waste, protect well", 5, null],
            ["Dump waste into the stream", 0, null],
            ["Dig a drain that directs overflow toward the stream", 0, null]
        ]
    },

    {
                question: "Two settlements want to trade, but one is much larger. What makes a fair deal?",
                answers: [
                    ["Accept any terms for one shipment", 3, 3],
                    ["Set quantities, duties and dispute rules", 5, 5],
                    ["Give critical supplies to prove trust", 2, 4],
                    ["Reject every agreement", 3, 2]
                ]
            },

    {
                question: "Crops fail despite enough rain, and new fields require labour. What's first?",
                answers: [
                    ["Plant more of the same crop", 3, null],
                    ["Check soil and crops; test new varieties", 5, null],
                    ["Abandon farming for scavenging", 2, null],
                    ["Use all saved seed immediately", 2, null]
                ]
            },

    {
                question: "Another settlement offers to merge, but its needs and risks are unclear. What's the best process?",
                answers: [
                    ["Merge immediately", 3, 4],
                    ["Reject it because it is unfamiliar", 3, 2],
                    ["Assess risks; start with limited cooperation", 5, 5],
                    ["Demand all its supplies before talks", 2, 0]
                ]
            },

        {
        question: "Settlement maps conflict after route changes. What should you do?",
        answers: [
            ["Let each team keep using its own version", 2, null],
            ["Keep one dated master map, log changes and share copies", 5, null],
            ["Rely on memory to resolve contradictions", 3, null],
            ["Delete old maps without recording what changed", 2, null]
        ]
    },

    {
                question: "Your settlement has spare seeds after a good harvest. What's the best use?",
                answers: [
                    ["Eat every seed", 2, null],
                    ["Save viable seed; store well; trade surplus", 5, null],
                    ["Mix seeds and store them damp", 0, null],
                    ["Give away all seed stock", 2, null]
                ]
            },

        // ZOMBIE-FOCUSED QUESTION Q89
    {
        question: "One infected circles the same fence at dusk; residents want patrols everywhere. What should you do?",
        answers: [
            ["Log its pattern, reinforce that fence and adjust patrols", 5, 4],
            ["Ignore the pattern because one infected seems harmless", 2, 2],
            ["Send a guard outside to study it up close each evening", 1, 2],
            ["Abandon the perimeter without checking other defenses", 1, 2]
        ]
    },

            // ZOMBIE-FOCUSED QUESTION Q90
    {
        question: "Neighboring settlements use different radio schedules and horde alerts. What should they standardize?",
        answers: [
            ["Agree on alerts with time, direction, confidence and reply", 5, 5],
            ["Adopt one code without testing or training", 3, 2],
            ["Use unclear warnings that each settlement interprets alone", 2, 2],
            ["Broadcast every unverified rumour on every channel", 1, 1]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q91
    {
        question: "Transmission is uncertain: a teammate is splashed by infected blood while moving a body. What now?",
        answers: [
            ["Assume no bite means no risk and continue as normal", 1, 2],
            ["Declare everyone nearby infected and abandon them", 1, 0],
            ["Avoid contact, clean skin and clothing safely, report it", 5, 5],
            ["Hide the exposure so the group is not alarmed", 1, 1]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q92
    {
        question: "Anyone can reanimate after death, even without a bite. A teammate dies from another injury. What first?",
        answers: [
            ["Leave the body unguarded in the shared sleeping area", 1, 1],
            ["Secure the area; alert others and follow body protocol", 5, 5],
            ["Crowd around and move the body without precautions", 1, 2],
            ["Hide the death so nobody becomes upset", 1, 2]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q93
    {
        question: "A new infected group sprints in bursts, unlike the slow ones expected. How should the patrol react?",
        answers: [
            ["Approach closer to measure their speed", 1, 2],
            ["Keep the old plan because earlier infected moved slowly", 1, 2],
            ["Fire repeatedly, even if the noise attracts more infected", 1, 2],
            ["Warn the team from cover and use the planned fallback", 5, 5]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q94
    {
        question: "An infected enters a food store near living quarters; doors can separate them. What first?",
        answers: [
            ["Close doors, move residents away and plan removal from cover", 5, 5],
            ["Send someone through the storeroom to retrieve supplies", 1, 2],
            ["Open every door and let infected enter living quarters", 1, 1],
            ["Ignore it until someone needs food", 2, 2]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q95
    {
        question: "A frightened dog keeps barking as infected approach your shelter. What should the group do?",
        answers: [
            ["Punish the dog loudly until it stops", 1, 1],
            ["Release it to draw the infected away from the shelter", 1, 2],
            ["If safe, calm and secure the dog indoors; reduce noise", 5, 5],
            ["Put the dog outside unprotected to test if infected follow", 1, 1]
        ]
    },

        // ZOMBIE-FOCUSED QUESTION Q96
    {
        question: "A flooded underpass is shortest, but depth and current are unknown; infected are submerged. What now?",
        answers: [
            ["Wade through quickly before the infected can react", 1, 2],
            ["Avoid unknown floodwater; use a verified higher route", 5, 5],
            ["Send one person into the water to test its depth", 1, 2],
            ["Drive into it at speed so the vehicle cannot stall", 0, 1]
        ]
    },

    {
        question: "People get headaches and dizziness near an indoor generator, but smell nothing. What first?",
        answers: [
            ["Open one window and continue using the generator", 1, 2],
            ["Search the room for the exact source before moving anyone", 1, 2],
            ["Give everyone water and let them rest inside", 1, 2],
            ["Move everyone to fresh air, call for help; stop source if safe", 5, 5]
        ]
    },

    {
        question: "A survivor is unresponsive and not breathing normally. An AED is available. What do you do?",
        answers: [
            ["Call for help, start CPR as trained and use the AED promptly", 5, 5],
            ["Give them water and wait for them to wake", 0, 1],
            ["Shake them hard and force them to stand", 0, 1],
            ["Search for medicine before checking breathing", 1, 2]
        ]
    },

    {
        question: "Your group must cross a crowded evacuation point, and phones may fail. What should the leader plan?",
        answers: [
            ["Let everyone choose a route and destination independently", 1, 1],
            ["Rely on messages and make no backup plan", 2, 2],
            ["Set buddy pairs, meeting points and a signal if separated", 5, 5],
            ["Wait until someone gets lost before agreeing what to do", 1, 2]
        ]
    },

    {
        question: "A wheelchair user can't use the broken stairs; a longer ramp looks clear. What's the safest plan?",
        answers: [
            ["Take the stairs and assume the survivor can catch up", 1, 1],
            ["Check ramp safety; assign help and keep everyone together", 5, 5],
            ["Carry them down broken steps without suitable equipment", 1, 1],
            ["Leave the wheelchair user behind until others reach safety", 1, 0]
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

    progressBar.style.width = "0%";

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
        survivalPercentage + "%";


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
        `🧟 I scored ${finalScore} on The Ultimate Zombie Apocalypse Survival Test!\n\n` +
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
        `🧟 I scored ${finalScore} on The Ultimate Zombie Apocalypse Survival Test!\n\n` +
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
