//A list of various word types to be used in message generation
const adverbList = ["Never"];
const verbList = ["code"];
const adjectiveList = ["sleeping"];

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