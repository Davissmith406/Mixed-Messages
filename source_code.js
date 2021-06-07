//A list of various word types to be used in message generation
let adverbList = [];
let verbList = [];
let adjectiveList = [];

//function that will generate a random message
const generateMessage = function(){

    //Begin by randomly choosing one word from word lists
    let adverb = adverbList[Math.floor(Math.random() * adverbList.length)];
    let verb = verbList[Math.floor(Math.random() * verbList.length)];
    let adjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];

    
};

generateMessage();