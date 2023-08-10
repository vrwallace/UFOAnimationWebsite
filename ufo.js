/* Hello, if you use this code, please give me credit somewhere on your site with a link back to https://vonwallace.com*/
/* This code is for the UFO animation on my site. It's a bit messy, but it works. */
/*I am learning JavaScript, so I am sure there are better ways to do this.*/
/* if you wish to make changes to the code / improve it, please do so and let me know. I am always looking to learn more. */


document.addEventListener("DOMContentLoaded", function () {


    const ufo = document.querySelector('#ufo');
    var alienBump = document.getElementById("alienBump");


    const leftPupil = document.querySelector('#left-pupil');
    const rightPupil = document.querySelector('#right-pupil');
    const leftEye = document.querySelector('#left-eye');
    const rightEye = document.querySelector('#right-eye');

    const tongue = document.querySelector('#tongue');
    const ufoArms = document.querySelector('#ufo-arms');

    function waveArms() {
        // Get random direction of rotation: 1 or -1
        let direction = Math.random() < 0.5 ? 1 : -1;
        // Rotate the arms by 20 degrees in the chosen direction
        ufoArms.setAttribute("transform", `rotate(${20 * direction},50,25)`);

        setTimeout(function () {
            // Rotate the arms back to their original position after 1 second
            ufoArms.setAttribute("transform", "rotate(0,50,25)");
        }, 2000);
    }


    ufo.addEventListener('click', waveArms);
    ufo.addEventListener('click', function () {

        let responseSound;

        /* if (Math.random() < 0.50) {
           responseSound = document.querySelector('#');
        } else {
           responseSound = document.querySelector('#');
        }*/

        responseSound = document.querySelector('#redalert');

        responseSound.play();

        setTimeout(function () {
            responseSound.pause();
            responseSound.currentTime = 0;
        }, 5000);

    });

    function stickOutTonguet() {

        let alienSayingsinsults = ["Your brain is smaller than a Martian microbe.", "You're less evolved than a Venusian amoeba.", "You're as slow as a slug from Saturn.", "You couldn't pilot a spaceship to save your life.", "You wouldn't last a day on the dark side of the moon.", "You're denser than a black hole.", "Your technological understanding is pre-galactic.", "Even a Zogblop has better manners.", "Your fashion sense is so last millennium.", "You couldn't navigate your way out of a nebula.", "You have the charisma of a Cryxian slug.", "You're slower than a solar flare.", "Your thinking is as slow as a time dilation.", "You're as bright as a black dwarf star.", "You couldn't decipher a simple interstellar code.", "You're as clueless as a caveman in a comet.", "You have the agility of a lunar lander.", "Your knowledge of the universe is as empty as a vacuum.", "You're as appealing as a supernova to a star.", "Your dance moves are worse than a gyrating Gorgon.", "Your singing would scare a Siren of Saturn.", "Your logic is as twisted as a wormhole.", "You're less useful than a broken hyperdrive.", "Your cooking is worse than boiled Barkon beans.", "Your aim is worse than a Stormtrooper's.", "You're as stealthy as a supernova.", "You have the social skills of a solitary Saturnite.", "You're less impressive than a one-ring planet.", "Your jokes are as funny as a quantum paradox.", "Your creativity is as barren as the moon.", "Your conversations are as exciting as watching paint dry on Pluto.", "You're as persistent as a comet without a tail.", "Your face looks like a cratered moon.", "You couldn't win a fight against a lunar moth.", "Your style is as outdated as dial-up Internet.", "You have the leadership skills of a lost lemming.", "You're less reliable than a rusty rocket.", "Your bravery is less than a fleeing Fendorian.", "You're more boring than binary code.", "Your personality is as flat as the surface of Mercury.", "You're as warm as a star without fusion.", "Your voice grates like a rusty spaceship hatch.", "You're less sophisticated than a single-celled Saturnian.", "You're as intelligent as an asteroid.", "You're as brave as a human watching an alien movie.", "Your knowledge of the universe wouldn't fill a thimble.", "You're as exciting as a nebula without stars.", "Your attention span is shorter than a quantum leap.", "You're as cuddly as a cactus on Mars.", "You're as charming as a charging Rhinorian.", "Your brain is as small as a proton.", "Your understanding of the cosmos is microscopic.", "You're as light as a neutron star.", "You're as smooth as an asteroid field.", "You're as useful as a chocolate teapot in a supernova.", "Your planning skills are like those of a comet headed for the sun.", "You're as unpredictable as a quantum particle.", "You're as balanced as a one-legged Zebulon.", "Your sense of direction is worse than a drunken Denebian.", "You're as grounded as a spaceship in orbit.", "Your vision is as narrow as a black hole.", "You're as lost as a meteor in a meteor shower.", "Your cooking is worse than Grilgan gruel.", "Your memory is as short as a mayfly from Mercury.", "You're as sturdy as a sandcastle on the moon.", "You're as flexible as a metal meteorite.", "Your sense of timing is like a clock in a black hole.", "You're as original as a copycat Krylorian.", "You're as welcoming as a black hole.", "You're as quick as a snail on Saturn.", "You're as transparent as a Venusian vapor.", "Your problem-solving skills are like those of a lost Lunarian.", "Your arguments are as thin as Martian air.", "You're as trustworthy as a two-headed Titanian.", "Your code is more tangled than an Orion's Belt knot.", "You're more annoying than a mosquito from Mars.", "You couldn't hit the broad side of a barn on the moon.", "You're as delicate as a daisy in a supernova.", "You're as sharp as a sphere.", "You have the stamina of a sloth from Saturn.", "You're as stubborn as a silicon-based life form.", "You're as clumsy as a Clanger in a china shop.", "Your hair looks like an alien furball.", "You're more forgettable than a far-off galaxy.", "You're as gentle as a Jupiterian juggernaut.", "Your height wouldn't intimidate an Ewok.", "You're as dainty as a dinosaur from Draco.", "You're as soft as a supernova.", "You're as powerful as a drained battery.", "Your strength is less than a newborn Nebulan.", "Your hygiene is worse than a mud"];

        if (window.crypto && window.crypto.getRandomValues) {
            let arrayLength = alienSayingsinsults.length;
            let randomIndex = window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32 * arrayLength | 0;
            let randomSaying = alienSayingsinsults[randomIndex];
            changeSpeechBubbleText(randomSaying);
        } else {

            let randomSaying = alienSayingsinsults[Math.floor(Math.random() * alienSayingsinsults.length)];
            changeSpeechBubbleText(randomSaying);
        }
        // Make the tongue visible
        tongue.style.display = 'inline';

        // Hide the tongue after 1 second
        setTimeout(function () {
            tongue.style.display = 'none';
        }, 1000);

        // UFO is moving right
        //leftPupil.setAttribute('cx', '46');
        leftPupil.setAttribute('cx', '49');
        // UFO is moving left

        //rightPupil.setAttribute('cx', '54');
        rightPupil.setAttribute('cx', '51');


        mouth.setAttribute('d', 'M 45 30 Q 50 25 55 30');

        // After 1 second, reset the mouth
        setTimeout(function () {
            mouth.setAttribute('d', 'M 45 30 Q 50 35 55 30');
        }, 5000);

        leftPupil.style.fill = 'red';
        rightPupil.style.fill = 'red';
        leftEye.setAttribute("r", "6");
        rightEye.setAttribute("r", "6");

        /*// Trigger the lightning effect
        document.body.classList.add('lightningEffect');
        // Remove the lightning effect after a short duration
        setTimeout(() => {
            document.body.classList.remove('lightningEffect');
        }, 5000);*/


        // After 1 second, change the color back to black
        setTimeout(function () {
            leftPupil.style.fill = 'black';
            rightPupil.style.fill = 'black';
            leftEye.setAttribute("r", "3");
            rightEye.setAttribute("r", "3");

        }, 4000);

        // Return pupils to center after 1 second
        setTimeout(function () {
            leftPupil.setAttribute('cx', '45');
            rightPupil.setAttribute('cx', '55');
        }, 3000);


    }

    // Add event listener for click event

    ufo.addEventListener('click', stickOutTonguet);


    let previousUfoX = 0;  // Variable to store the previous x-coordinate of the UFO


    function animateUFO() {
        if (!ufo) {
            console.log('ufo Element not found!');
            return;
        }

        const ufoWidth = ufo.getBoundingClientRect().width;
        const ufoHeight = ufo.getBoundingClientRect().height;
        //const navBar = document.querySelector('.navbar');
        //const navBarHeight = navBar.getBoundingClientRect().height * 2;

        const navbar = document.querySelector('.navbar');
        const navBarHeight = navbar.offsetHeight+(ufoHeight*2);


        let ufox, ufoy;


        if (window.crypto && window.crypto.getRandomValues) {
            const randomX = window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
            const randomY = window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;

            ufox = randomX * (window.innerWidth - ufoWidth * 2);
            ufoy = navBarHeight + randomY * (window.innerHeight - navBarHeight - ufoHeight * 2);
        } else {
            ufox = Math.random() * (window.innerWidth - ufo.getBoundingClientRect().width * 2);
            ufoy = navBarHeight + Math.random() * (window.innerHeight - navBarHeight - ufo.getBoundingClientRect().height * 2);
        }


        const speechBubble = document.querySelector('#speech-bubble');


        let bubbleX = ufox + 60;
        let bubbleY = ufoy - 90;


        // Check if speech bubble will be cut off at the right or bottom edge and adjust position
        if (bubbleX + speechBubble.offsetWidth > window.innerWidth) {
            bubbleX = window.innerWidth - speechBubble.offsetWidth;
        }
        if (bubbleY + speechBubble.offsetHeight > window.innerHeight) {
            bubbleY = window.innerHeight - speechBubble.offsetHeight;
        }

        // Check if speech bubble will be cut off at the left or top edge and adjust position
        if (bubbleX < 0) {
            bubbleX = 0;
        }
        if (bubbleY < 0) {
            bubbleY = 0;
        }

        ufo.style.left = `${ufox}px`;
        ufo.style.top = `${ufoy}px`;

        speechBubble.style.left = `${bubbleX}px`;
        speechBubble.style.top = `${bubbleY}px`;

        //


        if (ufox > previousUfoX) {
            // UFO is moving right
            leftPupil.setAttribute('cx', '46');
            rightPupil.setAttribute('cx', '56');
            ufoArms.setAttribute("transform", `rotate(${20 * 1},50,25)`);
            //  ufo.style.boxShadow = '-10px 10px 20px rgba(0, 0, 0, 0.2)';
            document.getElementById('f1').children[0].setAttribute('dx', '-5');
            /* setTimeout(function() {
                     document.getElementById('f1').children[0].setAttribute('dx', '0');
                 }, 4000); // Same duration as your setInterval*/


        } else {
            // UFO is moving left
            leftPupil.setAttribute('cx', '44');
            rightPupil.setAttribute('cx', '54');
            ufoArms.setAttribute("transform", `rotate(${20 * -1},50,25)`);
            //ufo.style.boxShadow = '10px 10px 20px rgba(0, 0, 0, 0.2)';
            document.getElementById('f1').children[0].setAttribute('dx', '5');
            /* setTimeout(function() {
                     document.getElementById('f1').children[0].setAttribute('dx', '0');
                 }, 4000); // Same duration as your setInterval*/
        }


        // Return pupils to center after 1 second
        setTimeout(function () {
            leftPupil.setAttribute('cx', '45');
            rightPupil.setAttribute('cx', '55');
        }, 2000);

        // Update the previous x-coordinate for the next comparison
        previousUfoX = ufox;

        setTimeout(function () {
            // Rotate the arms back to their original position after 1 second
            ufoArms.setAttribute("transform", "rotate(0,50,25)");
        }, 2000);


    }

    //


    setInterval(animateUFO, 4000); // Move UFO every 4 seconds
    animateUFO(); // Move UFO immediately

});


function changeSpeechBubbleText(text) {
    const bubble = document.querySelector('#speech-bubble');
    const bubbleText = document.querySelector('#speech-text');

    bubble.style.opacity = 1;
    bubbleText.textContent = text;

    // Check screen width
    let displayDuration;
    if (window.innerWidth <= 768) {
        // If the screen is small (<= 768px), show for 3 seconds
        displayDuration = 7000;
    } else {
        // If the screen is large, show for 10 seconds
        displayDuration = 12000;
    }

    setTimeout(function () {
        bubble.style.opacity = 0;
    }, displayDuration);
}


document.addEventListener("DOMContentLoaded", function () {
    const leftPupil = document.querySelector('#left-pupil');
    const rightPupil = document.querySelector('#right-pupil');

    function blink() {
        // Begin by assuming both eyes will blink
        let blinkLeft = true;
        let blinkRight = true;
        let blinkDuration = 200;  // Default blink duration

        // 3% of the time, only one eye will blink
        if (Math.random() < 0.03) {
            // Randomly choose which eye will blink
            if (Math.random() < 0.5) {
                blinkRight = false;  // Only the left eye will blink
            } else {
                blinkLeft = false;   // Only the right eye will blink
            }
            blinkDuration = 1500;  // Increase blink duration for one-eye blink
        }

        if (blinkLeft) {
            leftPupil.setAttribute("r", "0");
            setTimeout(function () {
                leftPupil.setAttribute("r", "1.5");
            }, blinkDuration);
        }

        if (blinkRight) {
            rightPupil.setAttribute("r", "0");
            setTimeout(function () {
                rightPupil.setAttribute("r", "1.5");
            }, blinkDuration);
        }
    }

    setInterval(blink, 2000); // Start blinking process every 2 seconds
});


document.addEventListener("DOMContentLoaded", function () {
    const tongue = document.querySelector('#tongue');

    function stickOutTongue() {
        // 3% chance to stick out tongue
        if (Math.random() < 0.12) {
            tongue.style.display = "inline";

            setTimeout(function () {
                tongue.style.display = "none";
            }, 1000);  // Hide tongue after 1 second
        }
    }

    setInterval(stickOutTongue, 2000); // Stick out tongue every 10 seconds
});


document.addEventListener("DOMContentLoaded", function () {
    function randomlyShowSpeechBubble() {
        // Array of alien sayings

        let alienSayings = ["John 3:16 - 'God loved the world, gave His only Son.'",
            "Romans 5:8 - 'God shows His love: Christ died for us.'",
            "1 John 4:16 - 'God is love. Live in love, live in God.'",
            "Ephesians 2:4-5 - 'God loved us, even in our sins.'",
            "1 John 4:9 - 'God sent His Son, so we might live.'",
            "Psalm 136:26 - 'Give thanks. His love endures forever.'",
            "Romans 8:39 - 'Nothing separates us from God's love.'",
            "1 John 3:1 - 'See Father's love. We are God's children.'",
            "Jeremiah 31:3 - 'I loved you with an everlasting love.'",
            "Zephaniah 3:17 - 'The LORD rejoices over you with gladness.'",
            "Isaiah 43:4 - 'You are precious and honored in my sight.'",
            "Ephesians 3:19 - 'Know the love of Christ that surpasses knowledge.'",
            "Psalm 86:15 - 'Lord, you are compassionate and gracious.'",
            "1 John 4:19 - 'We love because He first loved us.'",
            "1 John 4:8 - 'God is love.'",
            "John 15:13 - 'Greater love: to lay down one's life for friends.'",
            "1 Peter 5:7 - 'Cast all your anxiety on him. He cares for you.'",
            "Romans 8:28 - 'God works for the good of those who love Him.'",
            "Psalm 136:2 - 'God's steadfast love endures forever.'",
            "1 Corinthians 2:9 - 'God prepares unimaginable things for those who love Him.'",
            "Exodus 34:6 - 'God is compassionate, gracious, slow to anger.'",
            "Deuteronomy 7:9 - 'God's faithful love endures to a thousand generations.'",
            "1 John 4:10 - 'God’s love: sent his Son to be the savior.'",
            "Ephesians 3:17 - 'Christ dwells in hearts through faith.'",
            "Romans 5:5 - 'God's love is poured into our hearts.'",
            "Psalm 103:17 - 'God's love is from everlasting to everlasting.'",
            "Psalm 33:5 - 'He loves righteousness and justice.'",
            "Psalm 130:7 - 'With the LORD is steadfast love.'",
            "Psalm 100:5 - 'The LORD is good, his steadfast love endures.'",
            "Romans 5:8 - 'Christ died for us.'",
            "1 John 4:16 - 'God is love.'",
            "1 John 4:8 - 'God is love.'",
            "Deuteronomy 4:31 - 'The LORD your God is a merciful God.'",
            "Psalm 46:1 - 'God is our refuge and strength.'",
            "Isaiah 40:28 - 'God's understanding is unsearchable.'",
            "Psalm 145:8 - 'The LORD is gracious and merciful.'",
            "Isaiah 63:7 - 'I will mention of the kindnesses of the LORD.'",
            "Lamentations 3:22 - 'God's mercies never come to an end.'",
            "Psalm 36:5 - 'Your steadfast love, O LORD, extends to the heavens.'",
            "Psalm 23:1 - 'The LORD is my shepherd; I shall not want.'",
            "Philippians 4:19 - 'God supplies every need of yours.'",
            "Psalm 18:2 - 'The LORD is my rock and my fortress.'",
            "Psalm 145:18 - 'The LORD is near to all who call on him.'",
            "Psalm 40:5 - 'You have multiplied, O LORD my God.'",
            "Psalm 94:19 - 'Your consolations cheer my soul.'",
            "Psalm 145:9 - 'The LORD is good to all.'",
            "Psalm 145:13 - 'The LORD is faithful in all his words.'",
            "Psalm 145:14 - 'The LORD raises up all who are bowed down.'",
            "Psalm 62:7 - 'In God is my salvation and my glory.'",
            "Psalm 27:1 - 'The LORD is my light and my salvation.'",
            "Psalm 118:1 - 'Give thanks to the Lord, for He is good.'",
            "Psalm 46:1 - 'God is our refuge and strength.'",
            "Deuteronomy 31:6 - 'The Lord your God goes with you.'",
            "Psalm 146:2 - 'I will praise the Lord all my life.'",
            "1 John 4:16 - 'We have known and believed the love that God has for us.'",
            "1 John 3:16 - 'He laid down His life for us.'",
            "Romans 5:5 - 'The love of God has been poured out in our hearts.'",
            "1 John 4:4 - 'He who is in you is greater than he who is in the world.'",
            "1 Corinthians 1:9 - 'God is faithful.'",
            "1 Corinthians 2:9 - 'God has prepared for those who love Him.'",
            "1 Corinthians 16:24 - 'My love be with you all in Christ Jesus.'",
            "Psalm 136:26 - 'Give thanks to the God of heaven.'",
            "2 Corinthians 1:3 - 'The Father of compassion and the God of all comfort.'",
            "Ephesians 3:18 - 'Grasp how wide and long and high and deep is the love of Christ.'",
            "Psalm 100:5 - 'For the LORD is good and His love endures forever.'",
            "Jeremiah 31:3 - 'I have loved you with an everlasting love.'",
            "Zephaniah 3:17 - 'The LORD your God is in your midst.'",
            "John 3:16 - 'God so loved the world.'",
            "Romans 8:38-39 - 'Nothing can separate us from the love of God.'",
            "Psalm 86:15 - 'O Lord, are a God merciful and gracious.'",
            "Psalm 103:8 - 'The LORD is merciful and gracious.'",
            "Lamentations 3:22 - 'The steadfast love of the LORD never ceases.'",
            "Isaiah 54:10 - 'My steadfast love shall not depart from you.'",
            "1 John 3:1 - 'We should be called children of God.'",
            "Psalm 147:3 - 'He heals the brokenhearted and binds up their wounds.'",
            "Isaiah 43:4 - 'You are precious in my eyes, and honored, and I love you.'",
            "1 John 4:10 - 'He loved us and sent his Son.'",
            "Psalm 63:3 - 'Your steadfast love is better than life.'",
            "Psalm 136:23 - 'His steadfast love endures forever.'",
            "Romans 5:2-5 - 'Hope does not put us to shame, because God’s love.'",
            "Psalm 31:7 - 'I will rejoice and be glad in your steadfast love.'",
            "1 John 4:7 - 'Let us love one another, for love is from God.'",
            "1 John 4:9 - 'God sent his only Son into the world.'",
            "Galatians 2:20 - 'Christ loved me and gave himself for me.'",
            "Romans 13:10 - 'Love does no harm to a neighbor.'",
            "1 John 4:20 - 'If anyone says, I love God, and hates his brother, he is a liar.'",
            "1 Corinthians 13:13 - 'Now these three remain: faith, hope and love. But the greatest of these is love.'",
            "John 13:34 - 'Just as I have loved you, you also are to love one another.'",
            "1 Corinthians 16:14 - 'Let all that you do be done in love.'",
            "1 Peter 4:8 - 'Above all, keep loving one another earnestly.'",
            "Proverbs 10:12 - 'Hatred stirs up strife, but love covers all offenses.'",
            "1 John 4:18 - 'Perfect love casts out fear.'",
            "Ephesians 5:2 - 'Walk in love, as Christ loved us.'",
            "1 Corinthians 13:4-7 - 'Love is patient and kind.'",
            "Galatians 5:22 - 'The fruit of the Spirit is love.'",
            "1 John 3:18 - 'Let us not love in word or talk but in deed and in truth.'"];


        // 3% chance to show a speech bubble
        if (Math.random() < 0.03) {
            if (window.crypto && window.crypto.getRandomValues) {
                let arrayLength = alienSayings.length;
                let randomIndex = window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32 * arrayLength | 0;
                let randomSaying = alienSayings[randomIndex];
                changeSpeechBubbleText(randomSaying);
            } else {

                // Pick a random saying from the array
                let randomSaying = alienSayings[Math.floor(Math.random() * alienSayings.length)];

                // Call the function to show the speech bubble
                changeSpeechBubbleText(randomSaying);
            }
        }

    }

// Call the function every 10 seconds
    setInterval(randomlyShowSpeechBubble, 14000);
});

document.addEventListener("DOMContentLoaded", function () {
    let refererHost = document.referrer !== "" ? new URL(document.referrer).host : null;
    let currentHost = window.location.host;

    if (refererHost !== currentHost) {
        // "The user came from an external referrer."
        greet();
    } else {
        // "The user came from the same domain."

    }


    function greet() {
        let alienSayingspage = ["Welcome home, star-sailor.", "Return in peace, cosmic voyager.", "Greetings, interstellar gaucho.", "Salutations, celestial wanderer.", "Eternal peace, photon wrangler.", "Hello, moon marauder.", "At ease, comet tamer.", "Good to see you, nebula nomad.", "Welcome back, space sojourner.", "Well met, quasar cowboy.", "Salute, supernova sheriff.", "Hello, asteroid adventurer.", "Glad tidings, pulsar pioneer.", "Greetings, galactic guacho.", "Hello, planet prowler.", "A warm welcome, star surfer.", "Be at peace, black hole bandit.", "Welcome, void vagabond.", "Honor upon you, astral ascendant.", "Good to see you, celestial cavalier.", "Greetings, intergalactic explorer.", "Well arrived, solar slinger.", "Welcome home, cosmic castaway.", "A pleasure, asteroid ace.", "Pleasant returns, cosmic cosmonaut.", "Well returned, galaxy gaucho.", "Greetings, solar drifter.", "Welcome, interstellar inquirer.", "Hello, nebula navigator.", "Salute, starlight stalker.", "Rejoice, cosmic voyager.", "Welcome, asteroid ascetic.", "Be well, celestial explorer.", "Greetings, quantum quester.", "Welcome home, stellar strider.", "Hello, cosmic conqueror.", "Welcome, astral adventurer.", "Salutations, galactic gunslinger.", "Well met, celestial centurion.", "Welcome home, planetary pioneer.", "Hello, universe unraveller.", "Welcome, dimensional drifter.", "Greetings, lightyear lancer.", "Welcome back, spacetime sojourner.", "Hello, void voyager.", "Greetings, cosmic caretaker.", "Salute, interstellar insurgent.", "Hello, celestial chaser.", "Well arrived, dark matter duelist.", "Greetings, supernova sentinel.", "Hello, nebula nomad.", "Good journey, star stepper.", "Peaceful travels, interstellar instigator.", "Greetings, quantum quixote.", "Hello, cosmic cavalier.", "Well met, stellar surveyor.", "Welcome, constellation collector.", "Hello, multiverse marauder.", "Salutations, stardust shepherd.", "Well returned, event horizon evader.", "Greetings, galaxy gambler.", "Hello, cosmos commander.", "Welcome, exoplanet explorer.", "Hello, warp walker.", "Greetings, astral athlete.", "Salute, black hole buccaneer.", "Well arrived, cosmic cartographer.", "Welcome home, solar swashbuckler.", "Hello, cosmic chrononaut.", "Greetings, singularity skipper.", "Salutations, comet cowboy.", "Hello, planet's pilgrim.", "Greetings, photon pioneer.", "Welcome, gravity gunslinger.", "Hello, celestial charioteer.", "Well met, hyperdrive hermit.", "Greetings, nebula navigator.", "Hello, dark matter marshal.", "Welcome, interstellar investigator.", "Hello, spacetime swashbuckler.", "Greetings, starfield sheriff.", "Welcome, universe umpire.", "Hello, celestial centurion.", "Greetings, galaxy gunslinger.", "Welcome, quasar quartermaster.", "Hello, cosmic cartographer.", "Greetings, astral aviator.", "Welcome, exoplanet excavator.", "Hello, wormhole wrangler.", "Greetings, black hole bandit.", "Welcome, supernova scout.", "Hello, cosmic cosmonaut.", "Greetings, astral acrobat.", "Welcome, singularity skipper.", "Hello, space cowboy.", "Greetings, celestial cruiser.", "Welcome, universe unraveller.", "Hello, astral astronaut.", "Greetings, galaxy gallivanter.", "Welcome, starfield sentinel."];


        if (window.crypto && window.crypto.getRandomValues) {
            let arrayLength = alienSayingspage.length;
            let randomIndex = window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32 * arrayLength | 0;
            let randomSaying = alienSayingspage[randomIndex];
            changeSpeechBubbleText(randomSaying);
        } else {

            let randomSaying = alienSayingspage[Math.floor(Math.random() * alienSayingspage.length)];
            changeSpeechBubbleText(randomSaying);
        }
    }


});


// Function to set colors randomly
document.addEventListener("DOMContentLoaded", function () {
    function setRandomColors() {
        // Get the elements by their IDs
        var alienBump = document.getElementById('alienBump');
        var ufoLimePart = document.getElementById('ufoLimePart');
        var ufoBluePart = document.getElementById('ufoBluePart');
        var mouth = document.getElementById('mouth');
        var tongue = document.getElementById('tongue');
        var leftAntenna = document.getElementById('left-antenna');
        var rightAntenna = document.getElementById('right-antenna');
        //var alienColor = document.getElementById("alienBump").style.fill;


        // Generate a random number between 0 and 1
        var randomNum = Math.random();

        // Set colors based on random number
        if (randomNum >= 0.5) {
            // 50% chance: Alien is pink and the lime part is pink
            alienBump.style.fill = 'deeppink';
            ufoLimePart.style.fill = 'pink';
            ufoBluePart.style.fill = 'purple'; // Set blue part to blue when the alien is pink
            //mouth.style.stroke= 'red';
            //tongue.style.fill = 'red'; // Set tongue to green when the alien is pink
            leftAntenna.style.stroke = 'white'; // Set left antenna to red when the alien is pink
            rightAntenna.style.stroke = 'white'; // Set right antenna to red when the alien is pink
            // Create the bow SVG paths
            var bowTop = document.createElementNS("http://www.w3.org/2000/svg", "path");
            bowTop.setAttribute("d", "M45,20 Q50,15 55,20 T65,20");
            bowTop.setAttribute("fill", "yellow");

            var bowBottom = document.createElementNS("http://www.w3.org/2000/svg", "path");
            bowBottom.setAttribute("d", "M45,20 Q50,25 55,20 T65,20");
            bowBottom.setAttribute("fill", "yellow");

            // Append the bow paths to the SVG
            var svg = document.getElementById("ufo"); // replace 'yourSvgId' with the id of your SVG element
            svg.appendChild(bowTop);
            svg.appendChild(bowBottom);


        } else {
            // 50% chance: Alien is green and the lime part is lime
            alienBump.style.fill = 'green';
            ufoLimePart.style.fill = 'lime';
            ufoBluePart.style.fill = 'blue'; // Set blue part back to blue when the alien is green
            leftAntenna.style.stroke = 'white'; // Set left antenna back to white when the alien is green
            rightAntenna.style.stroke = 'white'; // Set right antenna back to white when the alien is green
            // rightAntenna.style.display = 'none';
        }
        var ufoSVG = document.querySelector('#ufo');
        ufoSVG.style.visibility = 'visible';


    }

// Call the setRandomColors() function on page load
    window.addEventListener('load', setRandomColors);
});

// Function to pucker the alien's lips.
document.addEventListener("DOMContentLoaded", function () {
    function puckerLips() {
        const mouth = document.querySelector('#mouth');

        // Adjust the path to create a "puckered" appearance.
        mouth.setAttribute("d", "M 45 30 Q 50 40 55 30");

        // Change the color to pink.
        mouth.setAttribute("stroke", "pink");
        mouth.setAttribute("fill", "pink");

        // After 5 seconds, change the mouth back to its original appearance.
        setTimeout(() => {
            mouth.setAttribute("d", "M 45 30 Q 50 35 55 30");
            mouth.setAttribute("stroke", "black");
            mouth.setAttribute("fill", "transparent");
        }, 5000);
    }

// Call puckerLips every 10 seconds, but only 3% of the time.
    setInterval(() => {
        if (Math.random() < 0.03) {
            puckerLips();
        }
    }, 10000);
});

document.addEventListener("DOMContentLoaded", function () {
    function surprise() {
        // Get the elements
        const leftEye = document.querySelector('#left-eye');
        const rightEye = document.querySelector('#right-eye');
        const mouth = document.querySelector('#mouth');

        // Make the pupils bigger (more surprised)
        leftEye.setAttribute("r", "6");
        rightEye.setAttribute("r", "6");

        // Change the shape of the mouth to a surprised look
        mouth.setAttribute("d", "M 45 30 Q 50 25 55 30");

        // After 2 seconds, change the face back to its original appearance
        setTimeout(() => {
            leftEye.setAttribute("r", "3");
            rightEye.setAttribute("r", "3");
            mouth.setAttribute("d", "M 45 30 Q 50 35 55 30");
        }, 2000);
    }

    // Call surprise every 10 seconds, but only 3% of the time.
    setInterval(() => {
        if (Math.random() < 0.03) {
            surprise();
        }
    }, 10000);
});

