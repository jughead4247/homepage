// =========================================
// GLOBAL SITE MENU
// =========================================

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


    // CLOSE WHEN CLICKING OUTSIDE

    document.addEventListener(
        "click",
        function (event) {

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


    // CLOSE AFTER CLICKING A MENU LINK

    siteMenu
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

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

        });

}



// =========================================
// SEARCH DATA
// =========================================

const quizzes = [

    {
        title: "Zombie Apocalypse Quiz",

        description:
            "Test your knowledge and instincts about surviving a zombie apocalypse.",

        categories:
            "zombie apocalypse zombies undead zombie outbreak infection virus pandemic survival survival skills emergency disaster preparedness post-apocalyptic apocalypse food water shelter weapons zombies attack",

        url:
            "https://apocalypsequizzes.com/zombie-quiz/"
    },


    {
        title: "Ultimate Zombie Apocalypse Survival Test",

        description:
            "Put your survival skills, decisions, and preparation to the ultimate zombie apocalypse test.",

        categories:
            "zombie apocalypse survival test zombie survival undead outbreak infection pandemic emergency preparedness disaster survival skills shelter food water weapons first aid escape strategy post-apocalyptic survival",

        url:
            "https://apocalypsequizzes.com/ultimate-zombie-survival-test/"
    },


    {
        title: "How Prepared Are You for the Apocalypse?",

        description:
            "Find out how prepared you are for different apocalypse scenarios.",

        categories:
            "apocalypse preparedness survival preparation emergency disaster survival skills emergency kit food water shelter first aid supplies power blackout communication evacuation disaster planning zombie apocalypse nuclear apocalypse pandemic natural disaster post-apocalyptic",

        url:
            "https://apocalypsequizzes.com/apocalypse-preparedness-quiz/"
    },


    {
        title: "Nuclear Apocalypse Survival Quiz",

        description:
            "Test your knowledge of nuclear survival, fallout, shelter, and post-apocalyptic decisions.",

        categories:
            "nuclear apocalypse nuclear war nuclear bomb nuclear attack radiation fallout nuclear fallout nuclear winter radiation poisoning fallout shelter bunker EMP atomic bomb survival apocalypse disaster preparedness shelter supplies food water emergency nuclear disaster",

        url:
            "https://apocalypsequizzes.com/nuclear-apocalypse-quiz/"
    },


    {
        title: "The Walking Dead Knowledge Quiz",

        description:
            "Test your knowledge of The Walking Dead, its story, characters, and events.",

        categories:
            "The Walking Dead TWD zombie TV show zombies walkers undead apocalypse survival Rick Grimes Daryl Dixon Michonne Negan Carol Maggie Glenn Carl Shane Hershel Merle Alexandria Hilltop Kingdom Commonwealth Saviors Whisperers Governor Woodbury Atlanta prison survivors",

        url:
            "https://apocalypsequizzes.com/walking-dead-knowledge/"
    },


    {
        title: "The 100 Knowledge Quiz",

        description:
            "Test your knowledge of The 100 and its characters, story, and post-apocalyptic world.",

        categories:
            "The 100 TV show The 100 series Clarke Griffin Bellamy Blake Octavia Blake Raven Reyes Murphy Lexa Abby Kane Jaha Ark Arkadia Grounders Mount Weather Skaikru Wonkru Nightblood Praimfaya Sanctum Primes Eligius bunker apocalypse survival nuclear radiation",

        url:
            "https://apocalypsequizzes.com/the-100-knowledge/"
    },


    {
        title: "Silo Quiz",

        description:
            "Test your knowledge of Silo, its characters, secrets, factions, and major events across the series.",

        categories:
            "Silo TV show Silo series Juliette Nichols Bernard Sims Holston Allison George Lukas Walker Solo Martha underground bunker silo vault post-apocalyptic apocalypse outside cleaning relics IT department sheriff mechanical hard drive uprising survival",

        url:
            "https://apocalypsequizzes.com/silo-quiz/"
    },


    {
        title: "Resident Evil Quiz",

        description:
            "Test your knowledge of Resident Evil, zombies, monsters, characters, and its dangerous world.",

        categories:
            "Resident Evil RE biohazard zombie horror survival horror video game movie Raccoon City Leon Kennedy Claire Redfield Jill Valentine Chris Redfield Albert Wesker Ada Wong Ethan Winters Umbrella Corporation T-virus G-virus virus outbreak zombies Nemesis Tyrant STARS Spencer Mansion",

        url:
            "https://apocalypsequizzes.com/resident-evil-quiz/"
    },


    {
        title: "Love and Monsters Quiz",

        description:
            "Test your knowledge of the post-apocalyptic world, monsters, and story of Love and Monsters.",

        categories:
            "Love and Monsters movie zombie apocalypse monster apocalypse post-apocalyptic survival Joel Dawson Aimee Clyde Minnow Boy Dog monsters bunker underground colony surface survival journey creatures giant monsters frogs ants worms crabs apocalypse",

        url:
            "https://apocalypsequizzes.com/love-and-monsters-quiz/"
    },


    {
        title: "iZombie Quiz",

        description:
            "Test your knowledge of iZombie, its characters, story, zombies, and TV world.",

        categories:
            "iZombie TV show zombie series Liv Moore Olivia Moore Ravi Chakrabarti Major Lilywhite Blaine DeBeers Clive Babineaux Peyton Seattle zombies brains zombie outbreak infection Max Rager Fillmore Graves medical examiner police detective zombie cure visions",

        url:
            "https://apocalypsequizzes.com/izombie-quiz/"
    },


    {
        title: "The Walking Dead Characters Quiz",

        description:
            "How well do you know the characters of The Walking Dead?",

        categories:
            "The Walking Dead characters TWD characters Rick Grimes Daryl Dixon Michonne Negan Carol Peletier Maggie Rhee Glenn Rhee Carl Grimes Judith Shane Hershel Governor Merle Abraham Eugene Rosita Sasha Tara Ezekiel Alpha Beta Lydia Dwight Morgan Walking Dead survivors zombies walkers",

        url:
            "https://apocalypsequizzes.com/walking-dead-characters-quiz/"
    },


    {
        title: "Plague Outbreak Survival Quiz",

        description:
            "Test your knowledge and survival decisions during a dangerous plague outbreak.",

        categories:
            "plague outbreak survival disease pandemic epidemic infection virus bacteria contagion quarantine outbreak response public health survival disaster preparedness biological outbreak plague pandemic survival skills emergency supplies medicine food water shelter hygiene infection control",

        url:
            "https://apocalypsequizzes.com/plague-survival-quiz/"
    },


    {
        title: "Westworld Quiz",

        description:
            "Test your knowledge of Westworld, its characters, hosts, story, and mysterious world.",

        categories:
            "Westworld TV show Westworld series robots androids hosts artificial intelligence AI Dolores Abernathy Bernard Lowe Maeve Millay William Man in Black Robert Ford Arnold Charlotte Hale Teddy hosts park theme park sentience consciousness Rehoboam technology robots rebellion",

        url:
            "https://apocalypsequizzes.com/westworld-quiz/"
    },


    {
        title: "The Last of Us Quiz",

        description:
            "Test your knowledge of The Last of Us, Joel, Ellie, the Fireflies, Jackson, Seattle, the WLF, and the infected.",

        categories:
            "The Last of Us TLOU zombie TV show apocalypse survival Joel Ellie Cordyceps infected Fireflies Jackson Seattle WLF Washington Liberation Front Seraphites Abby Anderson Tommy Dina Tess Bill Frank Marlene Riley David Isaac Jesse Owen FEDRA Clicker Bloater Runner Stalker outbreak pandemic fungus infection",

        url:
            "https://apocalypsequizzes.com/last-of-us-quiz/"
    },


    {
        title: "Fallout TV Show Quiz",

        description:
            "Test your knowledge of Fallout, its characters, Vaults, factions, story, and post-apocalyptic world.",

        categories:
            "Fallout TV show Fallout series Lucy MacLean Cooper Howard Ghoul Hank MacLean Maximus Moldaver Vault 33 Vault 32 Vault 31 Vaults Brotherhood of Steel NCR New California Republic Shady Sands Enclave RobCo Mr House Securitron Great War wasteland post-apocalyptic apocalypse survival radiation nuclear war cold fusion",

        url:
            "https://apocalypsequizzes.com/fallout-tv-show-quiz/"
    },


    {
        title: "The Last Ship Quiz",

        description:
            "Test your knowledge of The Last Ship, Tom Chandler, Mike Slattery, the Nathan James, Dr. Rachel Scott, the Red Flu, and major events throughout the series.",

        categories:
            "The Last Ship TV show The Last Ship series Tom Chandler Mike Slattery Nathan James Rachel Scott Red Flu virus pandemic apocalypse survival Navy naval destroyer Eric Dane Adam Baldwin Rhona Mitra Danny Green Kara Foster Tex Nolan Quincy Tophet Sean Ramsey Jeffrey Michener Allison Shaw Takehaya Wolf Taylor Azima Kandie Niels Sørensen Giorgio Vellek Gustavo Barros Halsey Dr Rachel Scott Captain Chandler U.S. Navy Russian Vyerni Immunes vaccine outbreak pandemic post-apocalyptic",

        url:
            "https://apocalypsequizzes.com/the-last-ship-quiz/"
    },


    {
        title: "Z Nation Quiz",

        description:
            "Test your knowledge of Z Nation, its characters, zombies, survivors, and post-apocalyptic story.",

        categories:
            "Z Nation Z Nation TV show zombie zombies apocalypse post-apocalyptic survival undead Murphy Warren Addy Addy Carver Doc 10K Citizen Z Cassandra Mack Garnett Vasquez Lucy Kaya Simon Escorpion George Newmerica New America Z Weed zombie virus outbreak pandemic survivors zombie apocalypse television series",

        url:
            "https://apocalypsequizzes.com/z-nation-quiz/"
    },


    {
        title: "Station Eleven Quiz",

        description:
            "Test your knowledge of Station Eleven, its characters, the Georgia Flu, the Traveling Symphony, and its post-pandemic world.",

        categories:
            "Station Eleven Station Eleven TV show series pandemic plague Georgia Flu virus outbreak pandemic apocalypse post-apocalyptic survival Kirsten Raymonde Jeevan Chaudhary Arthur Leander Miranda Carroll Tyler Leander Prophet Clark Thompson Frank Chaudhary Sarah Traveling Symphony Museum of Civilization Severn City Airport Alex Elizabeth Colton Pingtree David Cody Hamlet King Lear Station Eleven novel",

        url:
            "https://apocalypsequizzes.com/station-eleven-quiz/"
    },


    {
        title: "Jericho Quiz",

        description:
            "Test your knowledge of Jericho, Jake Green, Robert Hawkins, Johnston Green, the nuclear attacks, Ravenwood, Jennings & Rall, and the post-nuclear world.",

        categories:
            "Jericho Jericho TV show Jericho series Jake Green Robert Hawkins Johnston Green Eric Green Stanley Richmond Emily Sullivan Ravenwood Jennings Rall nuclear attacks nuclear bombs nuclear war nuclear apocalypse nuclear explosion post-nuclear America post-apocalyptic apocalypse survival Kansas town sheriff mayor military government conspiracy terrorism nuclear fallout radiation disaster",

        url:
            "https://apocalypsequizzes.com/jericho-quiz/"
    },


    {
        title: "Snowpiercer Quiz",

        description:
            "Test your knowledge of Snowpiercer, Layton, Melanie Cavill, Mr. Wilford, Snowpiercer, Big Alice, the Freeze, New Eden, and major events throughout the series.",

        categories:
            "Snowpiercer Snowpiercer TV show Snowpiercer series Layton Andre Layton Melanie Cavill Mr Wilford Wilford Alexandra Cavill Big Alice Snowpiercer train Tailies Tail Breachmen Freeze CW-7 climate change apocalypse post-apocalyptic survival New Eden Pirate Train Night Car Ag-Sec Kronole Miles Pike Ruth Zarah Liana Asha Javi Milius Gemini Silo Djibouti revolution survivors train cars Wilford Industries Train Traincar snow freez",

        url:
            "https://apocalypsequizzes.com/snowpiercer-quiz/"
    },


    {
        title: "Fear the Walking Dead Quiz",

        description:
            "Think you know the survivors, communities, factions, locations and major events of Fear the Walking Dead? Test your knowledge and see how much of the series you really remember.",

        categories:
            "Fear the Walking Dead FTWD zombie TV show zombies walkers apocalypse survival Madison Clark Travis Manawa Alicia Clark Nick Clark Strand Morgan Jones June Dorie Dwight Sherry Daniel Salazar Luciana Galvez Victor Strand Virginia Teddy PADRE ranch dam stadium hotel communities factions locations survivors",

        url:
            "https://apocalypsequizzes.com/fear-the-walking-dead-quiz/"
    },


    {
        title: "Alice in Borderland Season 1 Quiz",

        description:
            "Test your knowledge of Alice in Borderland Season 1, its characters, games, story, and mysterious world.",

        categories:
            "Alice in Borderland Alice in Borderland Season 1 TV show series Arisu Ryohei Arisu Usagi Yuzuha Chishiya Shuntaro Chishiya Karube Daikichi Segawa Chota Morita Kuina Hikari Niragi Shibuki Ann Rizuna Aguni Morizono Hatter Mira Kano Last Boss games Borderland visas playing cards Beach survival dystopian survival",

        url:
            "https://apocalypsequizzes.com/alice-in-borderland-s1-trivia/"
    },


    {
        title: "Alice in Borderland Season 2 Quiz",

        description:
            "Test your knowledge of Alice in Borderland Season 2, including the Face Card games, characters, major events, and the King of Spades.",

        categories:
            "Alice in Borderland Alice in Borderland Season 2 TV show series Arisu Ryohei Arisu Usagi Yuzuha Usagi Chishiya Shuntaro Chishiya Kuina Hikari Niragi Aguni Morita Ann Rizuna Heiya Akane Heiya Banda Yaba Mira Kano Queen of Hearts King of Spades King of Clubs King of Diamonds King of Hearts Jack of Hearts Jack of Spades Jack of Clubs Jack of Diamonds Queen of Spades Queen of Clubs games Face Cards Borderland Beach visas playing cards survival dystopian survival",

        url:
            "https://apocalypsequizzes.com/alice-in-borderland-s2-trivia/"
    },


    {
        title: "Alice in Borderland Season 3 Quiz",

        description:
            "Test your knowledge of Alice in Borderland Season 3, including the Joker's tournament, characters, deadly games, and major events.",

        categories:
            "Alice in Borderland Alice in Borderland Season 3 TV show series Arisu Ryohei Arisu Usagi Yuzuha Usagi Chishiya Shuntaro Chishiya Kuina Hikari Niragi Banda Yaba Mira Kano Joker Joker's tournament Borderland games playing cards face cards survival dystopian survival characters events",

        url:
            "https://apocalypsequizzes.com/alice-in-borderland-s3-trivia/"
    },


    {
        title: "Alice in Borderland Games Quiz",

        description:
            "Test your knowledge of the deadly games in Alice in Borderland, including game rules, objectives, playing cards, challenges, and survival strategies.",

        categories:
            "Alice in Borderland Alice in Borderland games games quiz TV show series Borderland deadly games game rules game objectives playing cards cards Hearts Diamonds Clubs Spades Visa visas survival challenges challenges mechanics strategies survival strategy Arisu Ryohei Arisu Usagi Yuzuha Usagi Chishiya Shuntaro Chishiya Kuina Hikari Niragi Aguni Hatter Beach King of Spades King of Clubs King of Diamonds King of Hearts Queen of Spades Queen of Clubs Queen of Diamonds Queen of Hearts Jack of Spades Jack of Clubs Jack of Diamonds Jack of Hearts Joker Face Cards games Season 1 Season 2 Season 3 dystopian survival",

        url:
            "https://apocalypsequizzes.com/alice-in-borderland-games-trivia/"
    },


    {
        title: "World War Z Quiz",

        description:
            "Test your knowledge of World War Z, its characters, zombie outbreak, survival story, and major events.",

        categories:
            "World War Z World War Z movie zombie zombies apocalypse survival Gerry Lane Brad Pitt Karin Lane Segen Rachel Tommy Constance zombie outbreak virus pandemic infection undead Jerusalem Israel Korea South Korea Philadelphia aircraft research facility WHO United Nations zombies swarm outbreak survival post-apocalyptic",

        url:
            "https://apocalypsequizzes.com/world-war-z-quiz/"
    },


    {
        title: "2012 Movie Quiz",

        description:
            "Test your knowledge of 2012, its characters, catastrophic events, arks, locations, and survival story.",

        categories:
            "2012 2012 movie movie quiz apocalypse disaster survival Jackson Curtis Kate Curtis Noah Curtis Lilly Curtis Yuri Karpov Tamara Gordon Adrian Helmsley Charlie Frost Yellowstone supervolcano earthquakes tsunami eruption arks China Tibet Himalayas Los Angeles Washington DC Yellowstone National Park post-apocalyptic survival disaster movie",

        url:
            "https://apocalypsequizzes.com/2012-quiz/"
    },


    {
        title: "Train to Busan Quiz",

        description:
            "Test your knowledge of Train to Busan, its characters, zombie outbreak, survival journey, and major events.",

        categories:
            "Train to Busan Train to Busan movie zombie zombies apocalypse survival Seok-woo Su-an Sang-hwa Seong-kyeong Yong-suk Jin-hee Yong-guk Jin-seok infected outbreak Korea South Korea Seoul Busan KTX train railway station zombie outbreak infection undead passengers survival horror Korean movie post-apocalyptic",

        url:
            "https://apocalypsequizzes.com/train-to-busan-quiz/"
    },


    {
        title: "I Am Legend Quiz",

        description:
            "Test your knowledge of I Am Legend, Robert Neville, Sam, the Darkseekers, the Krippin Virus, and the survival story.",

        categories:
            "I Am Legend I Am Legend movie movie quiz Robert Neville Sam Darkseekers Krippin Virus Alice Krippin Anna Ethan Will Smith New York Washington Square Park South Street Seaport Times Square Fred virologist military outbreak virus infection infected cure laboratory survival apocalypse post-apocalyptic zombie movie",

        url:
            "https://apocalypsequizzes.com/i-am-legend-quiz/"
    },


    {
        title: "Edge of Tomorrow Quiz",

        description:
            "Test your knowledge of Edge of Tomorrow, Major William Cage, Rita Vrataski, the Mimics, the Omega, and the time-loop battle.",

        categories:
            "Edge of Tomorrow Edge of Tomorrow movie movie quiz Tom Cruise Emily Blunt Major William Cage Rita Vrataski Mimics Omega Alpha Operation Downfall United Defense Force UDF time loop alien invasion science fiction action movie survival apocalypse",

        url:
            "https://apocalypsequizzes.com/edge-of-tomorrow-quiz/"
    },


    {
        title: "The Tomorrow War Quiz",

        description:
            "Test your knowledge of The Tomorrow War, Dan Forester, Muri, the White Spikes, the future war, and the fight to save humanity.",

        categories:
            "The Tomorrow War The Tomorrow War movie movie quiz Chris Pratt Dan Forester Muri White Spikes aliens alien invasion future war time travel military survival apocalypse science fiction action movie humanity",

        url:
            "https://apocalypsequizzes.com/tomorrow-war-quiz/"
    },


    {
        title: "A Quiet Place Quiz",

        description:
            "Test your knowledge of A Quiet Place, its characters, creatures, survival rules, and major events.",

        categories:
            "A Quiet Place A Quiet Place movie movie quiz horror survival apocalypse John Krasinski Emily Blunt Lee Abbott Evelyn Abbott Regan Abbott Marcus Abbott Beau Abbott creatures monsters aliens sound hearing silence survival family Abbott family farm creatures invasion",

        url:
            "https://apocalypsequizzes.com/a-quiet-place-quiz/"
    },


    {
        title: "A Quiet Place Part II Quiz",

        description:
            "Test your knowledge of A Quiet Place Part II, its characters, creatures, survival story, and major events.",

        categories:
            "A Quiet Place Part II A Quiet Place Part 2 movie movie quiz horror survival apocalypse Emily Blunt Regan Abbott Marcus Abbott Evelyn Abbott Emmett Cillian Murphy Millicent Simmonds Noah Jupe Djimon Hounsou creatures monsters aliens sound hearing silence island survivors train marina radio survival family",

        url:
            "https://apocalypsequizzes.com/a-quiet-place-part-II-quiz/"
    },


        {
        title: "War of the Worlds Quiz",

        description:
            "Test your knowledge of War of the Worlds, Ray Ferrier, Rachel, Robbie, the Tripods, the alien invasion, and the fight for survival.",

        categories:
            "War of the Worlds War of the Worlds movie movie quiz Steven Spielberg Tom Cruise Ray Ferrier Rachel Ferrier Robbie Ferrier Dakota Fanning Tripods aliens alien invasion extraterrestrial invasion Boston New York New Jersey ferry red weed blood human tissue survival apocalypse science fiction",

        url:
            "https://apocalypsequizzes.com/war-of-the-worlds-quiz/"
    },


    {
        title: "Mad Max: Fury Road Quiz",

        description:
            "Test your knowledge of Mad Max: Fury Road, Max, Furiosa, Immortan Joe, the War Rig, the Citadel, and the fight for survival in the Wasteland.",

        categories:
            "Mad Max Fury Road Mad Max Fury Road movie movie quiz Mad Max Max Rockatansky Furiosa Imperator Furiosa Immortan Joe War Rig Citadel Wasteland Five Wives Nux Capable Toast Cheedo Dag Angharad Splendid Rictus Erectus Corpus Colossus People Eater Bullet Farmer War Boys Vuvalini Green Place Gastown Bullet Farm Doof Warrior survival apocalypse post-apocalyptic action movie",

        url:
            "https://apocalypsequizzes.com/mad-max-fury-road-quiz/"
    },


    {
        title: "Furiosa: A Mad Max Saga Quiz",

        description:
            "Test your knowledge of Furiosa: A Mad Max Saga, Furiosa, Dementus, Praetorian Jack, the Citadel, and the major events of the Wasteland.",

        categories:
            "Furiosa Furiosa A Mad Max Saga Furiosa movie movie quiz Mad Max Anya Taylor-Joy Chris Hemsworth Furiosa Imperator Furiosa Dementus Praetorian Jack Immortan Joe Citadel Biker Horde Dr Dementus History Man Mary Jabassa Valkyrie Octoboss Gastown Bullet Farm Green Place Wasteland Forty Day Wasteland War War Rig War Boys survival apocalypse post-apocalyptic action movie",

        url:
            "https://apocalypsequizzes.com/furiosa-a-mad-max-saga-quiz/"
    },


    {
        title: "The Maze Runner Quiz",

        description:
            "Test your knowledge of The Maze Runner, Thomas, the Glade, the Maze, the Grievers, Teresa, WCKD, and the fight to escape.",

        categories:
            "The Maze Runner The Maze Runner movie movie quiz Thomas Thomas Glader Glade Alby Newt Gally Minho Teresa Chuck Jeff Winston Frypan Ben Grievers Maze Runners Changing Pit WCKD World Catastrophe Killzone Department Flare virus Griever sting serum Maze sections Box Gladers experiment escape survival dystopian post-apocalyptic science fiction",

        url:
            "https://apocalypsequizzes.com/the-maze-runner-quiz/"
    },


    {
        title: "The Maze Runner: The Scorch Trials Quiz",

        description:
            "Test your knowledge of The Scorch Trials, Thomas, Teresa, the Scorch, WCKD, the Cranks, the Right Arm, and the fight for survival.",

        categories:
            "The Maze Runner The Scorch Trials Scorch Trials movie movie quiz Thomas Teresa Newt Minho Brenda Jorge Aris Winston Frypan WCKD Wicked World Catastrophe Killzone Department Scorch Cranks infected Flare virus Right Arm resistance survivors Janson Rat Man Ava Paige Marcus safe haven desert abandoned city tunnels mountains zombie infected post-apocalyptic dystopian survival",

        url:
            "https://apocalypsequizzes.com/maze-runner-the-scorch-trials-quiz/"
    },


    {
        title: "The Maze Runner: The Death Cure Quiz",

        description:
            "Test your knowledge of The Death Cure, Thomas, Newt, Teresa, WCKD, the Last City, the Right Arm, and the fight to save humanity.",

        categories:
            "The Maze Runner The Death Cure Death Cure movie movie quiz Thomas Newt Teresa Minho Brenda Jorge Gally WCKD Wicked World Catastrophe Killzone Department Janson Ava Paige Rat Man Right Arm Last City Dylan Frypan Lawrence virus Flare cure immune Cranks rescue train Berg Citadel Teresa betrayal sacrifice survival dystopian post-apocalyptic",

        url:
            "https://apocalypsequizzes.com/maze-runner-the-death-cure-quiz/"
    },


        {
        title: "The Hunger Games Quiz",

        description:
            "Test your knowledge of The Hunger Games, Katniss, Peeta, Gale, District 12, the Capitol, and the 74th Hunger Games.",

        categories:
            "The Hunger Games Hunger Games movie movie quiz Katniss Everdeen Peeta Mellark Gale Hawthorne Primrose Everdeen Haymitch Abernathy Effie Trinket Cinna Caesar Flickerman Seneca Crane District 12 Capitol Panem 74th Hunger Games tributes Career tributes Cato Clove Thresh Rue Marvel Glimmer Foxface tracker jackers nightlock berries Cornucopia Careers Gamemakers sponsors arena Mockingjay Girl on Fire survival dystopian apocalypse",

        url:
            "https://apocalypsequizzes.com/the-hunger-games-quiz/"
    },


    {
        title: "The Hunger Games: Catching Fire Quiz",

        description:
            "Test your knowledge of The Hunger Games: Catching Fire, Katniss, Peeta, the Quarter Quell, the Capitol, and the major events of the movie.",

        categories:
            "The Hunger Games Catching Fire Catching Fire movie movie quiz Katniss Everdeen Peeta Mellark Gale Hawthorne Haymitch Abernathy Effie Trinket Cinna Caesar Flickerman President Snow Finnick Odair Johanna Mason Beetee Wiress Mags Plutarch Heavensbee District 12 Capitol Panem Quarter Quell 75th Hunger Games tributes victors Career tributes arena Cornucopia Jabberjays tracker jackers mockingjay rebellion District 13 force field survival dystopian apocalypse",

        url:
            "https://apocalypsequizzes.com/the-hunger-games-catching-fire-quiz/"
    },


    {
        title: "The Hunger Games: Mockingjay – Part 1 Quiz",

        description:
            "Test your knowledge of The Hunger Games: Mockingjay – Part 1, Katniss, District 13, Peeta, the rebellion, and the major events of the movie.",

        categories:
            "The Hunger Games Mockingjay Part 1 Mockingjay Part 1 movie movie quiz Katniss Everdeen Peeta Mellark Gale Hawthorne Haymitch Abernathy Effie Trinket Plutarch Heavensbee President Snow Coin Alma Coin Boggs Finnick Odair Johanna Mason Beetee Cressida Castor Pollux Messalla District 13 Capitol rebellion resistance rebels propaganda propos Quarter Quell District 12 District 8 District 2 hospital bombing rescue Peeta hijacking tracker jacker Mockingjay survival dystopian apocalypse",

        url:
            "https://apocalypsequizzes.com/the-hunger-games-mockingjay-part-1-quiz/"
    },


    {
        title: "The Hunger Games: Mockingjay – Part 2 Quiz",

        description:
            "Test your knowledge of The Hunger Games: Mockingjay – Part 2, Katniss, the Capitol mission, District 13, Snow, Coin, the rebellion, and the final events.",

        categories:
            "The Hunger Games Mockingjay Part 2 Mockingjay Part 2 movie movie quiz Katniss Everdeen Peeta Mellark Gale Hawthorne President Snow Alma Coin Haymitch Abernathy Effie Trinket Plutarch Heavensbee Finnick Odair Johanna Mason Beetee Boggs Cressida Gale Hawthorne Capitol District 13 rebellion rebels Star Squad pods muttations sewer tunnels Capitol citizens Primrose Everdeen bombing District 12 execution arrow bow Hunger Games Panem survival dystopian apocalypse",

        url:
            "https://apocalypsequizzes.com/the-hunger-games-mockingjay-part-2-quiz/"
    },


        {
        title: "The Cloverfield Paradox Quiz",

        description:
            "Test your knowledge of The Cloverfield Paradox, the Shepard accelerator, Cloverfield Station, its crew, alternate realities, strange events, and the major events of the movie.",

        categories:
            "The Cloverfield Paradox Cloverfield Paradox movie movie quiz Ava Hamilton Ernst Schmidt Monk Acosta Kiel Mundy Volkov Tam Mina Jensen Mark Stambler Michael Hamilton Shepard particle accelerator Cloverfield Station alternate universe parallel universe dimensional anomaly gyroscope Earth energy crisis monsters demons beasts Russia Germany war children power cell reentry capsule Cloverfield monster science fiction horror space station survival apocalypse",

        url:
            "https://apocalypsequizzes.com/the-cloverfield-paradox-quiz/"
    },


    {
        title: "Zombieland Quiz",

        description:
            "Test your knowledge of Zombieland, its characters, rules, zombies, survival story, and major events.",

        categories:
            "Zombieland Zombieland movie movie quiz Columbus Tallahassee Wichita Little Rock Rule 1 Rule 2 Rule 3 Rule 17 Rule 18 Rule 22 Rule 31 Rule 32 zombies zombie apocalypse survival Pacific Playland Bill Murray 406 Winchester Twinkies zombie outbreak undead post-apocalyptic comedy horror",

        url:
            "https://apocalypsequizzes.com/zombieland-quiz/"
    },


    {
        title: "Zombieland: Double Tap Quiz",

        description:
            "Test your knowledge of Zombieland: Double Tap, its characters, rules, zombies, new survivors, and major events.",

        categories:
            "Zombieland Double Tap Zombieland 2 movie movie quiz Columbus Tallahassee Wichita Little Rock Madison Albuquerque Flagstaff Berkeley Nevada Rule 1 Rule 2 Rule 3 Rule 17 Rule 18 Rule 22 Rule 31 Rule 32 zombies zombie apocalypse survival Pacific Playland White House mall zombie outbreak undead post-apocalyptic comedy horror",

        url:
            "https://apocalypsequizzes.com/zombieland-double-tap-quiz/"
    },

{
        title: "Rise of the Planet of the Apes Quiz",

        description:
            "Test your knowledge of Rise of the Planet of the Apes, Caesar, Will Rodman, ALZ-112, Gen-Sys, and the ape uprising.",

        categories:
            "Rise of the Planet of the Apes Rise Planet of the Apes movie movie quiz Planet of the Apes Caesar Will Rodman William Rodman Caroline Aranha Charles Rodman Bright Eyes Cornelia Koba Maurice Rocket Buck Dodge Landon John Landon Steven Jacobs Robert Franklin Douglas Hunsiker Gen-Sys ALZ-112 ALZ-113 Alzheimer's disease Simian Flu simian virus ape uprising apes chimpanzees gorilla orangutan bonobo primate shelter San Francisco Golden Gate Bridge San Francisco Zoo Redwood forest survival apocalypse pandemic plague outbreak science fiction",

        url:
            "https://apocalypsequizzes.com/rise-of-planet-of-the-apes-quiz/"
    }

];


// =========================================
// SEARCH ELEMENTS
// =========================================

const searchInput =
    document.getElementById(
        "quiz-search-input"
    );

const searchForm =
    document.getElementById(
        "quiz-search"
    );

const searchGrid =
    document.getElementById(
        "search-grid"
    );

const resultsHeader =
    document.getElementById(
        "search-results-header"
    );

const noResults =
    document.getElementById(
        "no-results"
    );



// =========================================
// PAGINATION SETTINGS
// =========================================

const RESULTS_PER_PAGE = 20;



// =========================================
// GET URL PARAMETERS
// =========================================

const urlParams =
    new URLSearchParams(
        window.location.search
    );



function getSearchQuery() {

    return (
        urlParams.get("q") || ""
    )
        .toLowerCase()
        .trim();

}



function getCurrentPage() {

    const page =
        parseInt(
            urlParams.get("page"),
            10
        );

    if (
        isNaN(page) ||
        page < 1
    ) {

        return 1;

    }

    return page;

}



// =========================================
// CREATE SEARCH URL
// =========================================

function createSearchURL(
    query,
    page
) {

    const params =
        new URLSearchParams();


    if (query !== "") {

        params.set(
            "q",
            query
        );

    }


    if (page > 1) {

        params.set(
            "page",
            page
        );

    }


    const queryString =
        params.toString();


    return queryString
        ? "/search/?" + queryString
        : "/search/";

}



// =========================================
// DISPLAY PAGINATION
// =========================================

function displayPagination(
    totalResults,
    currentPage,
    query
) {

    const totalPages =
        Math.ceil(
            totalResults /
            RESULTS_PER_PAGE
        );


    // REMOVE OLD PAGINATION

    const oldPagination =
        document.querySelector(
            ".search-pagination-wrapper"
        );

    if (oldPagination) {

        oldPagination.remove();

    }


    // NO PAGINATION NEEDED

    if (totalPages <= 1) {

        return;

    }


    const wrapper =
        document.createElement("div");

    wrapper.className =
        "pagination-wrapper search-pagination-wrapper";


    const pagination =
        document.createElement("div");

    pagination.className =
        "pagination";


    // FIRST PAGE

    if (currentPage === 1) {

        const first =
            document.createElement("span");

        first.className =
            "pagination-btn disabled";

        first.textContent =
            "First Page";

        pagination.appendChild(first);

    } else {

        const first =
            document.createElement("a");

        first.className =
            "pagination-btn";

        first.href =
            createSearchURL(
                query,
                1
            );

        first.textContent =
            "First Page";

        pagination.appendChild(first);

    }


    // BACK

    if (currentPage === 1) {

        const back =
            document.createElement("span");

        back.className =
            "pagination-btn disabled";

        back.textContent =
            "Back";

        pagination.appendChild(back);

    } else {

        const back =
            document.createElement("a");

        back.className =
            "pagination-btn";

        back.href =
            createSearchURL(
                query,
                currentPage - 1
            );

        back.textContent =
            "Back";

        pagination.appendChild(back);

    }


    // PAGE NUMBERS

    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        if (page === currentPage) {

            const current =
                document.createElement("span");

            current.className =
                "pagination-btn active";

            current.textContent =
                page;

            pagination.appendChild(
                current
            );

        } else {

            const pageLink =
                document.createElement("a");

            pageLink.className =
                "pagination-btn";

            pageLink.href =
                createSearchURL(
                    query,
                    page
                );

            pageLink.textContent =
                page;

            pagination.appendChild(
                pageLink
            );

        }

    }


    // NEXT

    if (
        currentPage >= totalPages
    ) {

        const next =
            document.createElement("span");

        next.className =
            "pagination-btn disabled";

        next.textContent =
            "Next";

        pagination.appendChild(next);

    } else {

        const next =
            document.createElement("a");

        next.className =
            "pagination-btn";

        next.href =
            createSearchURL(
                query,
                currentPage + 1
            );

        next.textContent =
            "Next";

        pagination.appendChild(next);

    }


    // LAST PAGE

    if (
        currentPage >= totalPages
    ) {

        const last =
            document.createElement("span");

        last.className =
            "pagination-btn disabled";

        last.textContent =
            "Last Page";

        pagination.appendChild(last);

    } else {

        const last =
            document.createElement("a");

        last.className =
            "pagination-btn";

        last.href =
            createSearchURL(
                query,
                totalPages
            );

        last.textContent =
            "Last Page";

        pagination.appendChild(last);

    }


    wrapper.appendChild(
        pagination
    );


    searchGrid.parentNode.appendChild(
        wrapper
    );

}



// =========================================
// DISPLAY QUIZZES
// =========================================

function displayQuizzes(
    results,
    query
) {

    searchGrid.innerHTML = "";


    // NO RESULTS

    if (results.length === 0) {

        noResults.hidden = false;

        resultsHeader.textContent =
            "No quizzes found";

        displayPagination(
            0,
            1,
            query
        );

        return;

    }


    noResults.hidden = true;


    const totalResults =
        results.length;


    const totalPages =
        Math.ceil(
            totalResults /
            RESULTS_PER_PAGE
        );


    let currentPage =
        getCurrentPage();


    // PREVENT INVALID PAGE NUMBERS

    if (
        currentPage > totalPages
    ) {

        currentPage =
            totalPages;

    }


    const startIndex =
        (
            currentPage - 1
        ) *
        RESULTS_PER_PAGE;


    const endIndex =
        startIndex +
        RESULTS_PER_PAGE;


    const pageResults =
        results.slice(
            startIndex,
            endIndex
        );


    // RESULTS HEADER

    resultsHeader.textContent =
        "Showing " +
        (
            startIndex + 1
        ) +
        "–" +
        (
            startIndex +
            pageResults.length
        ) +
        " of " +
        totalResults +
        " quizzes";


    // CREATE CARDS

    pageResults.forEach(
        function (quiz) {

            const card =
                document.createElement("a");

            card.className =
                "search-card";

            card.href =
                quiz.url;


            card.innerHTML = `

                <div class="search-card-content">

                    <h2>
                        ${quiz.title}
                    </h2>

                </div>

            `;


            searchGrid.appendChild(
                card
            );

        }
    );


    // PAGINATION

    displayPagination(
        totalResults,
        currentPage,
        query
    );

}



// =========================================
// PERFORM SEARCH
// =========================================

function performSearch(
    updateURL = true
) {

    const query =
        searchInput.value
            .toLowerCase()
            .trim();


    // UPDATE URL WHEN SEARCHING

    if (updateURL) {

        const newURL =
            createSearchURL(
                query,
                1
            );

        window.history.pushState(
            {},
            "",
            newURL
        );

    }


    // SEARCH ALL QUIZZES

    let results;


    if (query === "") {

        results =
            quizzes;

    } else {

        results =
            quizzes.filter(
                function (quiz) {

                    const searchableText =
                        (
                            quiz.title +
                            " " +
                            quiz.description +
                            " " +
                            quiz.categories
                        ).toLowerCase();


                    return searchableText.includes(
                        query
                    );

                }
            );

    }


    displayQuizzes(
        results,
        query
    );

}



// =========================================
// SEARCH FORM
// =========================================

searchForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        performSearch(true);

    }
);



// =========================================
// LIVE SEARCH
// =========================================

searchInput.addEventListener(
    "input",
    function () {

        performSearch(true);

    }
);



// =========================================
// BROWSER BACK / FORWARD
// =========================================

window.addEventListener(
    "popstate",
    function () {

        const query =
            getSearchQuery();

        searchInput.value =
            query;


        let results;


        if (query === "") {

            results =
                quizzes;

        } else {

            results =
                quizzes.filter(
                    function (quiz) {

                        const searchableText =
                            (
                                quiz.title +
                                " " +
                                quiz.description +
                                " " +
                                quiz.categories
                            ).toLowerCase();


                        return searchableText.includes(
                            query
                        );

                    }
                );

        }


        displayQuizzes(
            results,
            query
        );

    }
);



// =========================================
// INITIAL PAGE LOAD
// =========================================

const initialQuery =
    getSearchQuery();

searchInput.value =
    initialQuery;


let initialResults;


if (initialQuery === "") {

    initialResults =
        quizzes;

} else {

    initialResults =
        quizzes.filter(
            function (quiz) {

                const searchableText =
                    (
                        quiz.title +
                        " " +
                        quiz.description +
                        " " +
                        quiz.categories
                    ).toLowerCase();


                return searchableText.includes(
                    initialQuery
                );

            }
        );

}


displayQuizzes(
    initialResults,
    initialQuery
);
