//A list of various word types to be used in message generation
const adverbList = ["Never", "Always", "Sometimes", "Occasionally", "Seldom"];
const verbList = ["code", "program", "use bash", "write JS", "write python", "learn to code"];
const adjectiveList = ["while sleeping", "on a bike", "while running", "while eating a hamburger", "while drunk", "with the homies"];

//function that will generate a random message
const generateMessage = function(){

    //Begin by randomly choosing one word from word lists
    const adverb = adverbList[Math.floor(Math.random() * adverbList.length)];
    const verb = verbList[Math.floor(Math.random() * verbList.length)];
    const adjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];

    //generate the message by using string interpolation
    const message = `${adverb} ${verb} while ${adjective}!`;

    //log the message to the console
    console.log(message);
};

generateMessage();