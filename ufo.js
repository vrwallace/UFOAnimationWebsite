/* Hello, if you use this code, please give me credit somewhere on your site with a link back to https://vonwallace.com*/
/* This code is for the UFO animation on my site. It's a bit messy, but it works. */
/*I am learning JavaScript, so I am sure there are better ways to do this.*/
/* if you wish to make changes to the code / improve it, please do so and let me know. I am always looking to learn more. */



/*document.addEventListener("DOMContentLoaded", function () {
        var parser = new DOMParser();

        var svgString = `
                       <svg class="ufo" id="ufo" width="120" height="120" viewBox="0 0 120 120" filter="url(#f1)" style="visibility: hidden; pointer-events: all;">
    <defs>
        <filter id="f1" x="-10%" y="-10%" width="200%" height="200%">
            <feOffset result="offOut" in="SourceGraphic" dx="5" dy="5" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
    </defs>
    <g transform="translate(10, 10)">
        <!-- Your SVG elements here -->
        <ellipse cx="50" cy="50" rx="50" ry="25" id="ufoLimePart" style="fill:lime"/>
        <ellipse cx="50" cy="42" rx="30" ry="12" id="ufoBluePart" style="fill:blue"/>
        <circle cx="50" cy="25" r="15" id="alienBump" style="fill:green"/>
        <circle id="left-eye" cx="45" cy="20" r="3" style="fill:white"/>
        <circle id="right-eye" cx="55" cy="20" r="3" style="fill:white"/>
        <circle id="left-pupil" cx="45" cy="20" r="1.5" style="fill:black"/>
        <circle id="right-pupil" cx="55" cy="20" r="1.5" style="fill:black"/>
        <line id="left-antenna" x1="50" y1="15" x2="48" y2="5" style="stroke:white;stroke-width:2"/>
        <line id="right-antenna" x1="50" y1="15" x2="52" y2="5" style="stroke:white;stroke-width:2"/>
        <g id="ufo-arms" transform="rotate(0,50,25)">
            <line id="left-arm" x1="40" y1="25" x2="35" y2="15" style="stroke:white;stroke-width:2"/>
            <line id="right-arm" x1="60" y1="25" x2="65" y2="15" style="stroke:white;stroke-width:2"/>
        </g>
        <path id="mouth" d="M 45 30 Q 50 35 55 30" stroke="black" fill="transparent"/>
        <path id="tongue" d="M 45 30 Q 50 35 55 30" stroke="pink" fill="pink" style="display: none;"/>
    </g>
    <rect id="catchAll" width="100%" height="100%" fill="transparent" style="cursor:pointer;"/>
</svg>

        `;
       // Create a new div and set its innerHTML
    var speechBubbleMarkup = `
  <div id="speech-bubble" class="speech-bubble">
    <p id="speech-text"></p>
  </div>
`;

    //const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    //const doc = new DOMParser().parseFromString(svgString, 'image/svg+xml');

    var svgElement = parser.parseFromString(svgString, "image/svg+xml").documentElement;
    console.log(svgElement.namespaceURI);
// Parse the speechBubbleMarkup string to a div element
    var divElement = parser.parseFromString(speechBubbleMarkup, "text/html").body.firstChild;


// Get the parent element before replacing the child
    var parentElement = document.getElementById("UFOHTML").parentNode;

// Replace the existing SVG with the new one

    //const ufoElement = document.getElementById("UFOHTML");

    //parentElement.replaceChild(svgElement, ufoElement);

    parentElement.replaceChild(svgElement, document.getElementById("UFOHTML"));

// Get the existing speech bubble div
    //var existingSpeechBubble = document.getElementById("speech-bubblei");
    var parentElement = document.getElementById("speech-bubblei").parentNode;

// Replace the existing speech bubble div with the new one
    parentElement.replaceChild(divElement, document.getElementById("speech-bubblei"));
});*/





document.addEventListener("DOMContentLoaded", function () {



    const ufo = document.querySelector('#ufo');
    var alienBump = document.getElementById("alienBump");


    const leftPupil = document.querySelector('#left-pupil');
    const rightPupil = document.querySelector('#right-pupil');

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

       // responseSound = document.querySelector('#donteverletgo');

        //responseSound.play();
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
        leftPupil.setAttribute('cx', '46');

        // UFO is moving left

        rightPupil.setAttribute('cx', '54');

        //const originalMouthPath = mouth.getAttribute('d');


        mouth.setAttribute('d', 'M 45 30 Q 50 25 55 30');
        // After 1 second, reset the mouth
        setTimeout(function () {
            mouth.setAttribute('d', 'M 45 30 Q 50 35 55 30');
        }, 5000);

        leftPupil.style.fill = 'red';
        rightPupil.style.fill = 'red';

        // After 1 second, change the color back to black
        setTimeout(function () {
            leftPupil.style.fill = 'black';
            rightPupil.style.fill = 'black';
        }, 4000);

        // Return pupils to center after 1 second
        setTimeout(function () {
            leftPupil.setAttribute('cx', '45');
            rightPupil.setAttribute('cx', '55');
        }, 3000);


    }

    // Add event listener for click event
    /* ufo.addEventListener('click', stickOutTonguet);*/
    ufo.addEventListener('click', stickOutTonguet);


    let previousUfoX = 0;  // Variable to store the previous x-coordinate of the UFO


    function animateUFO() {
        if (!ufo) {
            console.log('ufo Element not found!');
            return;}

        const ufoWidth = ufo.getBoundingClientRect().width;
        const ufoHeight = ufo.getBoundingClientRect().height;
        const navBar = document.querySelector('.navbar');
        const navBarHeight = navBar.getBoundingClientRect().height*2;

        let ufox, ufoy;

       /* if (window.crypto && window.crypto.getRandomValues) {
            const randomX = window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
            const randomY = window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;

            ufox = randomX * (window.innerWidth - ufoWidth * 2);
            ufoy = randomY * (window.innerHeight - ufoHeight * 2);
        } else {
            ufox = Math.random() * (window.innerWidth - ufo.getBoundingClientRect().width * 2);
            ufoy = Math.random() * (window.innerHeight - ufo.getBoundingClientRect().height * 2);

        }*/

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
            displayDuration = 5000;
        } else {
            // If the screen is large, show for 10 seconds
            displayDuration = 10000;
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
        let alienSayings = ["Greetings, Earthlings!", "Do not be afraid, we come in peace.", "Take me to your leader.", "Your planet is quite fascinating!", "We've been observing your kind for centuries.", "We're not so different, you and I.", "In our world, you are the alien.", "We can travel across galaxies in a blink.", "Time is just a concept for us.", "Our technology is far beyond your understanding.", "You have much to learn, Earthling.", "Human emotions are quite intriguing.", "We have no use for money in our world.", "Fear not our appearance, it's merely different, not dangerous.", "You call it magic, we call it science.", "We communicate through telepathy.", "I've seen stars you've never heard of.", "Interstellar travel is as common for us as taking a walk.", "I come from a place where the sun never sets.", "We mastered immortality eons ago.", "Your Earth food is quite...interesting.", "We are all made of stardust, after all.", "Our species has no concept of war.", "Earth's music is quite melodious.", "Your oceans are akin to our skies.", "In our realm, time travels you.", "Your 'Internet' is quaint compared to our data spheres.", "We've known about Earth since before your Great Pyramids were built.", "We exist in dimensions you cannot perceive.", "Our planet's hue is a color you've never seen.", "You're not alone in the universe.", "We have found no other species as unique as humans.", "Our lifespan is not limited by time.", "We do not need oxygen to survive.", "Gravity affects us differently.", "The universe is full of surprises.", "Your languages are fascinatingly diverse.", "We've learned to harness the energy of black holes.", "We've observed your movies about aliens. They're mostly incorrect.", "We are all citizens of the cosmos.", "We've decoded your DNA structure.", "Stars are our stepping stones.", "We've seen the beginning and end of galaxies.", "We have observed and learned from your world wars.", "We do not age as you do.", "The concept of sleep is foreign to us.", "We have no concept of countries or borders.", "Your planet's wildlife is fascinating.", "We've visited Earth in different epochs.", "Our planet is much larger than Earth.", "Your sense of humor is truly unique.", "We know of life forms that you cannot comprehend.", "The idea of death is alien to us.", "Your dreams are intriguing.", "Your sense of taste is unique.", "You have a beautiful planet."];


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
    setInterval(randomlyShowSpeechBubble, 10000);
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