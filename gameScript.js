//set questions
//questions: element 1: question name, element 2: person, element 3: environment, element 4: happiness, element 5: army, element 6: money

//array 1 is for [element 1: question text, element 2: person who said that, element 3: option 1, element 4: option 2, element 5: minimum year required, element 6: day of that year]
//if option 1(right button) is choosed array 2 of elements is choosed
//if option 2(left button) is choosed array 3 of elements is choosed

var questions = [
    [["Enemy armies are at borders! We must do something.", "Mann, Army General", "Buy more weapons", "I don't care", "2070", "1"], ["0", "0", "10", "-10"], ["0", "-10", "-5", "5"]],
    [["A homeless child is at your door.", "Hall, Housekeeper", "Send him to jail", "Build a home", "2070", "1"], ["0", "-5", "0", "0"], ["0", "5", "0", "5"]],
    [["The citizens are rioting! They want better salary.", "Jackson, Vice President", "Fine.", "No.", "2070", "1"], ["0", "10", "0", "-5"], ["0", "-10", "0", "0"]],
    [["Oh, honey, this housekeeper is annoying, she cleans everything!", "Zeherman, First Lady", "That's her job", "Well...", "2070", "1"], ["0", "0", "0", "0"], ["0", "0", "0", "0"]],
    [["We should reopen some software companies.", "A.I.", "Fine", "No", "2091", "51"], ["0", "5", "0", "10"], ["0", "0", "0", "-5"]],
    [["Banks from south cities were robbed!", "Jeff, Economist", "I'm busy", "Mr. General!", "2070", "1"], ["0", "-5", "0", "-10"], ["0", "0", "-5", "0"]],
    [["We need more funds for sciene.", "Scott, Scientist", "Yes", "You have enough", "2070", "1"], ["5", "0", "5", "-5"], ["-5", "0", "0", "5"]],
    [["Our employees are sick, should we close today?", "Smith, Chef", "OK", "They're fine", "2070", "1"], ["0", "5", "0", "-5"], ["0", "-10", "0", "-5"]],
    [["I suggest to reopen hotels, this can improve economy.", "Hall, Housekeeper", "Sure", "Better no.", "2070", "1"], ["0", "5", "0", "10"], ["0", "-5", "0", "5"]],
    [["Some factories put garbage in rivers. That's unacceptable!", "Raphael, Ecologist", "They will stop", "They pay for that", "2070", "1"], ["5", "5", "0", "-5"], ["-10", "-5", "0", "-5"]],
    [["Some dangerous criminals escaped. We should send army.", "Mann, Army General", "Send army", "It's nothing wrong", "2070", "1"], ["0", "5", "-5", "0"], ["0", "-5", "0", "-5"]],
    [["We should use code-generating software instead of human developers.", "A.I.", "Of course!", "No", "2091", "51"], ["0", "-5", "0", "10"], ["0", "5", "0", "0"]],
    [["Our economy is weak! We should raise taxes.", "Jackson, Vice President", "Great idea!", "It's not required", "2070", "1"], ["0", "-10", "0", "5"], ["0", "5", "0", "-10"]],
    [["Mr. President, west countries asked us for a peace treaty but they want some money.", "Mann, Army General", "We will accept", "Never!", "2070, 2"], ["10", "10", "10", "-10"], ["-5", "-5", "-5", "5"]],
    [["Radiation level is increasing in south. We must do something!", "Raphael, Ecologist", "I agree", "I disagree", "2070", "1"], ["10", "5", "0", "-5"], ["-10", "-5", "0", "0"]],
    [["Can we use nuclear energy for researches?", "Scott, Scientist", "Never", "Sure.", "2070", "1"], ["-10", "-5", "0", "10"], ["5", "0", "0", "-5"]],
    [["A plane crashed near capital! Survivors need help urgently.", "Walker, Investigation Agent", "I will send it", "They're fine", "2070", "1"], ["0", "5", "0", "-5"], ["0", "-5", "0", "0"]],
    [["A virus is spreading! We should close borders now.", "Mann, Army General", "Close them", "No.", "2070", "1"], ["0", "-10", "5", "0"], ["-5", "0", "-5", "-5"]],
    [["I want a new car.", "Zeherman, First Lady", "No honey", "Sure.", "2070", "1"], ["0", "0", "0", "-5"], ["0", "0", "0", "0"]],
    [["A stock crash is causing financial problems.", "Jeff, Economist", "Damn!", "Oh...", "2070", "1"], ["0", "0", "0", "-10"], ["0", "0", "0", "-10"]],
    [["Presidential house is old and dirty!", "Hall, Housekeeper", "I'll do something", "I don't care", "2070", "1"], ["0", "0", "0", "-5"], ["0", "0", "0", "0"]],
    [["Soldiers are starving but I need more imported vegetables!", "Smith, Chef", "Yes", "No", "2070","1"], ["0", "10", "5", "-5"], ["0", "-5", "-5", "0"]],
    [["Somebody take control over hospital computers, invest more in cybersecurity.", "A.I.", "Yes", "Shut up!", "2091", "51"], ["0", "0", "5", "-5"], ["0", "-10", "-10", "0"]],
    [["We should replace human workes with robots in factories.", "Jackson, Vice President", "Great idea!", "No", "2070", "1"], ["0", "-10", "0", "10"], ["0", "10", "0", "-5"]],
    [["We found a terrorist group in north!", "Walker, Investigation Agent", "Send army", "Don't worry", "2070", "1"], ["0", "5", "-5", "0"], ["0", "-10", "0", "-5"]],
    [["This pollution... We should do something!", "Raphael, Ecologist", "Yeah", "It's fine", "2070", "1"], ["5", "5", "0", "-5"], ["-5", "-5", "0", "0"]],
    [["Reopen nuclear powerplants, this will help economy.", "Mann, Army General", "Great!", "Not again...", "2070", "1"], ["-10", "-5", "5", "10"], ["5", "5", "-5", "5"]],
    [["Peoples don't like our vegetables, we should import others.", "Smith, Chef", "Yes", "No", "2070", "1"], ["0", "5", "0", "-5"], ["0", "-10", "0", "5"]],
    [["Our research technology is obsolete, we need a new one.", "Scott, Scientist", "Ok", "Not now", "2070", "1"], ["5", "5", "5", "-10"], ["-5", "0", "-5", "5"]],
    [["Give people less salary, keep more for us!", "Zeherman, First Lady", "Good idea!", "That's corruption!", "2070", "1"], ["0", "-5", "0", "5"], ["0", "5", "0", "-5"]],
    [["Computer viruses are everywhere. We need better protection.", "A.I.", "Alright", "Bye.", "2091", "51"], ["0","5", "5", "-5"], ["0", "-5", "-10", "0"]],
    [["Because of cryptocurrency investing we make a lot of profit!", "Jeff, Economist", "Government is rich!", "Citizens are rich!", "2070", "1"], ["0", "0", "0", "10"], ["5", "5", "5", "0"]],
    [["We should plant more trees!", "Raphael, Ecologist", "Yeah", "No", "2070", "1"], ["5", "5", "0", "-5"], ["-5", "-5", "0", "0"]],
    [["This morning I found a bullet near your office!", "Hall, Housekeeper", "Mr. Agent!", "It's fine", "2070", "1"], ["0", "0", "-5", "0"], ["0", "0", "0", "0"]],
    [["There is a giant bushfire near capital! What we should do?", "Jackson, Vice President", "Save peoples", "Extinguish the fire", "2070", "1"], ["0", "5", "-10", "0"], ["0", "-10", "-5", "0"]],
    [["Our tanks are old and broken.", "Mann, Army General", "I will buy new", "Who cares...", "2070", "1"], ["0", "0", "5", "-5"], ["0", "0", "-10", "0"]],
    [["Peoples are starving. We need to import more food!", "Smith, Chef", "OK", "They're fine", "2070", "1"], ["0", "10", "0", "-5"], ["-5", "-10", "0", "5"]],
    [["RED WARNING: The national database is corrupted!", "A.I.", "Fix it", "Does it matter?", "2091", "51"], ["0", "0", "5", "0"], ["0", "0", "-10", "-10"]],
    [["Our researchers needs more funds. Instead, we can create a new weapon.", "Scott, Scientist", "Alright", "No way!", "2070", "1"], ["0", "0", "10", "-5"], ["0", "-5", "-5", "5"]],
    [["Mafia is all over the country. Send soliders now!", "Walker, Investigation Agent", "Yes", "I don't care.", "2070", "1"], ["0", "5", "-5", "0"], ["0", "-10", "0", "-10"]],
    [["I think the army general doesn't like me... He is very angry when I'm near him.", "Zeherman, First Lady", "He's the general", "Mr. General!", "2070", "1"], ["0", "0", "5", "0"], ["0", "5", "-5", "0"]],
    [["Thousands of citizens are homeless and it's winter.", "Jackson, Vice President", "Improvise something", "And?", "2070", "1"], ["0", "10", "0", "-5"], ["0", "-10", "-5", "0"]],
    [["Should we cut some of scientist budget?", "Jeff, Economist", "Of course!", "No", "2070", "1"], ["0", "-5", "0", "-10"], ["0", "0", "-5", "0"]],
    [["An ambassador which visited us lost a great amount of money and I found it near your house.", "Hall, Housekeeper", "Government is rich!", "Send back to him", "2070", "1"], ["0", "-5", "10", "0"], ["0", "5", "0", "0"]],
    [["Our country internet is slow. We need new technology!", "A.I.", "Scientist will do!", "It's fast enough", "2091", "51"], ["0", "5", "5", "-5"], ["0", "-5", "0", "0"]]
];

//info are for story;

//array 1: text and person who said that
//array 2: option 1 text and id to which question to redirect
//array 3: option 2 text and id to which question to redirect
//array 4: chapter, id, year, day of that year
//if id is 0, chapter ends

//"default" isn't a person, it's an information about what happened to player

var info = [
    [["...", "???"], ["What...", "2"], ["Where I am?", "2"], ["1", "1", "2070", "1"]],
    [["Oh, you are here...", "???"], ["What?", "3"], ["What?", "3"], ["1", "2", "2070", "1"]],
    [["It seems you lost your memories along the way...", "???"], ["Who am I?", "4"], ["Oh...", "4"], ["1", "3", "2070", "1"]],
    [["You are in 2070, humans played with nuclear and biological weapons. You are the leader of the few surviving countries.", "???"], ["Oh...", "5"], ["Scary", "5"], ["1", "4", "2070", "1"]],
    [["Oh, you are a robot. Every time you die you travel in time before you died.", "???"], ["I can't die?", "6"], ["Amazing!", "6"], ["1", "5", "2070", "1"]],
    [["However, if your system is disabled, you will completely die.", "???"], ["Fine", "7"], ["Alright", "7"] ["1", "6", "2070", "1"]],
    [["Maintain the balance of environment, happiness, army and money. Don't have too much or too less.", "???"], ["OK", "8"], ["Easy...", "8"], ["1", "7", "2070", "1"]],
    [["Now go, I will be back in few years...", "???"], ["Wait...", "9"], ["Hey", "9"], ["1", "8", "2070", "1"]],
    [["The entity who talked to you dissapears.", "default"], ["...", "0"], ["...", "0"], ["1", "9", "2070", "1"]],

    [["You feel like you can't breathe anymore. Time freezes.", "default"], ["Wait...", "2"], ["Hey", "2"], ["2", "1", "2075", "195"]],
    [["I'm back...", "???",] ["Explain more", "3"], ["HEY", "3"], ["2", "2", "2075", "195"]],
    [["Somebody, from some year, altered spacetime.", "???"], ["Spacetime?", "4.1"], ["...", "4.2"], ["2", "3", "2075", "195"]],
    [["Probably they tried to make a time machine, but they failed. Now chronology is affected.", "???"], ["Oh...", "5"], ["Scary", "5"], ["2", "4.1", "2075", "195"]],
    [["If you want to fix this, you have to do something for me.", "???"], ["What??", "5"], ["Anything!", "5"], ["2", "4.2", "2075", "195"]],
    [["An alien entity traveled in time and reached here. Find it until 2160 or you'll regret!", "???"], ["But...", "6"], ["What??", "6"], ["2", "5", "2075", "195"]],
    [["You feel normal again.", "default"], ["...", "0"], ["...", "0"], ["2", "6", "2075", "195"]],

    [["Mr. President, somebody wants to talk with you.", "Jackson, Vice President"], ["Alright", "2"], ["...", "2"], ["3", "1", "2091", "51"]],
    [["Connection established.", "A.I."], ["Security?!", "3.2"], ["Hi!", "3.1"], ["3", "2", "2091", "51"]],
    [["Hi, Mr. President. I'm Artificial Intelligence, for short A.I.", "A.I."], ["Oh...", "0"], ["Hi", "0"], ["3", "3.1", "2091", "51"]],
    [["Don't worry, I'm on your side.", "A.I."], ["Ok.", "0"], ["Mr. General!", "4"], ["3", "3.2", "2091", "51"]],
    [["This is A.I. It was made to help governamment, don't panic.", "Mann, Army General"], ["Hey A.I.", "3.1"], ["Hmm...", "0"], ["3", "4", "2091", "51"]]
];

//events (like pandemics, wars and nuclear attack) descrease or increase a value(environment/happiness/army/money) for 3 years and 200 days

//array 1: text and person who said that
//array 2: option 1 text and id to which question to redirect
//array 3: option 2 text and id to which question to redirect
//array 4: chapter, id, which value is changing, "increasing or descreasing?" (last two values are avalaible only at id 2)
//if id is 0, chapter ends

var events = [
    [["Somebody attacked us with atomic bombs. We don't know who did this, radiation level is increasing!", "Mann, Army General"], ["What?!", "2"], ["Terrible!", "2"], ["1", "1"]],
    [["Radioactivity affects environment, this may be the full end.", "default"], ["...", "0"], ["...", "0"], ["1", "2", "environment", "descrease"]],

    [["A war is iminent. I'm afraid the single thing we can do is to fight!", "Jackson, Vice President"], ["Oh no...", "2"], ["Bad", "2"], ["2", "1"]],
    [["Load the bullets, start the tanks, defend the country!", "default"], ["...", "0"], ["...", "0"], ["2", "2", "environment", "descrease"]],

    [["A virus escaped from laboratories! I'm afraid that we started a pandemic.", "Scott, Scientist"], ["Ahh!", "2"], ["Awful!", "2"], ["3", "1"]],
    [["As soon as the first human was infected, your country and the entire world is in danger.", "default"], ["...", "0"], ["...", "0"], ["3", "2", "environment", "descrease"]],

    [["A lot of oil was found in country! Money is increasing.", "Jeff, Economist"], ["Yay!", "2"], ["Amazing!", "2"], ["4", "1"]],
    [["Money aren't always good, beware or they can turn against you!", "default"], ["...", "0"], ["...", "0"], ["4", "2", "money", "increase"]],

    [["A lot of hospitals are under siege! Peoples won't like that.", "Mann, Army General"], ["Oh no", "2"], ["Damn it!", "2"], ["5", "1"]],
    [["Without hospitals, dead rate is increasing. This can be ", "default"], ["...", "0"], ["...", "0"], ["5", "2", "happiness", "descrease"]]
];

//question history
var qHistory = [];

//question number(for choose())
var questionNumber;

//get year
var year = localStorage.getItem("year");

//set day(if not already setted)
if(localStorage.getItem("day") == null){
    localStorage.setItem("day", "1");
}

//get day
var day = localStorage.getItem("day");

//get elements
var text = document.getElementById("text");
var characterImg = document.getElementById("CharacterImage");
var optionOne = document.getElementById("OptionOne");
var optionTwo = document.getElementById("OptionTwo");
var GameRect = document.getElementById("GameRect");
var CharacterName = document.getElementById("Name");

//set initial opacity
text.style.opacity = 1;
characterImg.opacity = 1;
optionOne.style.opacity = 1;
optionTwo.style.opacity = 1;
GameRect.style.opacity = 1;
CharacterName.style.opacity = 1;

//game values
var environment = 25;
var happiness = 25;
var army = 25;
var money = 25;

//random integer function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//choose a question
function choose(){

    //effect
    text.style.opacity = 0;
    characterImg.style.opacity = 0;
    optionOne.style.opacity = 0;
    optionTwo.style.opacity = 0;
    GameRect.style.opacity = 0;
    CharacterName.style.opacity = 0;

    //disable buttons
    optionOne.disabled = true;
    optionTwo.disabled = true;
    
    //choose the question
    questionNumber = getRandomInt(0, questions.length - 1);
    let textData;

    //show question (after 600ms)
    setTimeout(function(){
        
        text.style.opacity = 1;
        characterImg.style.opacity = 1;
        optionOne.style.opacity = 1;
        optionTwo.style.opacity = 1;
        GameRect.style.opacity = 1;
        CharacterName.style.opacity = 0.5;

        if(environment >= 0 && happiness >= 0 && army >= 0 && money >= 0 && environment <= 50 && happiness <= 50 && army <= 50 && money <= 50)
        {
            //get&set character name
            let characterName = questions[questionNumber][0][1];
            characterImg.src = characterName.split(",")[0] + ".svg";
            
            //set text
            CharacterName.textContent = questions[questionNumber][0][1];

            //write options on buttons
            optionOne.textContent = questions[questionNumber][0][2];
            optionTwo.textContent = questions[questionNumber][0][3];
            
            //check if year, day and qHistory is valid for that question
            if(year >= questions[questionNumber][0][4] && day >= questions[questionNumber][0][5]){
                textData = questions[questionNumber][0][0];
                
                //show result
                text.textContent = textData;
                
                //enable buttons
                optionOne.disabled = false;
                optionTwo.disabled = false;

            }else{
                choose();
            }
        }else{
            //if a value is 0

            optionOne.textContent = "...";
            optionTwo.textContent = "...";
            characterImg.src = "default.svg";
            CharacterName.textContent = "";

            if(environment < 0){
                text.textContent = "The radiation level is deadly. You died instantly.";
            }
            if(happiness < 0){
                text.textContent = "Peoples hated you and started a revolution. Army general killed you.";
            }
            if(army < 0){
                text.textContent = "Because you have no army, others countries have attacked. You and army general are killed.";
            }
            if(money < 0){
                text.textContent = "Poverty anger peoples. They killed you.";
            }
            if(environment > 50){
                text.textContent = "Since the environment returned to normal, people thought they didn't need you anymore. They killed you.";
            }
            if(happiness > 50){
                text.textContent = "Citizens love you but an world leader was jealous and send an atomic bomb to you. You died instantly.";
            }
            if(army > 50){
                text.textContent = "Because the army is too strong, they took over the government. You died in battle.";
            }
            if(money > 50){
                text.textContent = "So much money made bankers more strong than you. You was killed by them.";
            }
        }
    }, 600);
}

//launch first question at start
choose();

//optionOne function
function opOne(){
    if(environment >= 0 && happiness >= 0 && army >= 0 && money >= 0 && environment <= 50 && happiness <= 50 && army <= 50 && money <= 50){
        environment += parseInt(questions[questionNumber][1][0]);
        happiness += parseInt(questions[questionNumber][1][1]);
        army += parseInt(questions[questionNumber][1][2]);
        money += parseInt(questions[questionNumber][1][3]);
        choose();
    }
}

//optionTwo function
function opTwo(){
    if(environment >= 0 && happiness >= 0 && army >= 0 && money >= 0 && environment <= 50 && happiness <= 50 && army <= 50 && money <= 50){
        environment += parseInt(questions[questionNumber][2][0]);
        happiness += parseInt(questions[questionNumber][2][1]);
        army += parseInt(questions[questionNumber][2][2]);
        money += parseInt(questions[questionNumber][2][3]);
        choose();
    }
}

//settings window
var settingsWindow = document.getElementById("settingsWindow");
settingsWindow.style.opacity = 0;
settingsWindow.style.display = "none";

//When the user clicks anywhere outside of the settings window, close it
window.onclick = function(event) {
    if (event.target == settingsWindow) {
        settingsWindow.style.opacity = 0;
        if(settingsWindow.style.opacity == 0){
            settingsWindow.style.display = "none";
        }
    }
}

//settings

//delete localStorage
function delStorage(){
    if(localStorage.getItem("year") != null){
        var answer = confirm("This will delete progress and when you will start game again new files will be created. Are you sure?");
        if (answer == true){
            if(localStorage.getItem("day") != null){
                localStorage.removeItem("day");
            }
            localStorage.removeItem("year");
            alert("Existent files deleted");
        }
    }else{
        alert("No files detected.");
    }
}

//volumeSlider
var slider = document.getElementById("volumeSlider");
var showvolume = document.getElementById("showvolume");
showvolume.textContent = "Volume " + slider.value + "%";

//Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    showvolume.textContent = "Volume " + this.value + "%";
}

//sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "block";
    document.body.appendChild(this.sound);

    //play
    this.play = function(IsLoop){
        this.sound.loop = IsLoop;
        this.sound.play();
    }

    //volume
    this.setVolume = function(volumeValue){
        this.sound.volume = volumeValue;
    }

    //pause
    this.pause = function(){
        this.sound.pause();
    }
}