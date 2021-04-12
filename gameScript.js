//set questions
//questions: element 1: question name, element 2: person, element 3: environment, element 4: happiness, element 5: army, element 6: money

//array 1 is for [element 1: question text, element 2: person who said that, element 3: option 1, element 4: option 2, element 5: minimum year required, element 6: day of that year]
//if option 1(right button) is choosed array 2 of elements is choosed
//if option 2(left button) is choosed array 3 of elements is choosed

const questions = [
    [["Enemy armies are at borders! We must do something.", "Mann, Army General", "Buy more weapons", "I don't care", "2070", "1"], ["0", "0", "10", "-10"], ["0", "-10", "-5", "5"]],
    [["A homeless child is at your door.", "Hall, Housekeeper", "Send him to jail", "Build a home", "2070", "1"], ["0", "-5", "0", "0"], ["0", "5", "0", "5"]],
    [["The citizens are rioting! They want better salary.", "Jackson, Vice President", "Fine.", "No.", "2070", "1"], ["0", "10", "0", "-5"], ["0", "-10", "0", "0"]],
    [["Oh, honey, this housekeeper is annoying, she cleans everything!", "Zeherman, First Lady", "That's her job", "Well...", "2070", "1"], ["0", "0", "0", "0"], ["0", "0", "0", "0"]],
    [["We should reopen some software companies.", "A.I.", "Fine", "No", "2091", "51"], ["0", "5", "0", "10"], ["0", "0", "0", "-5"]],
    [["Banks from south cities were robbed!", "Jeff, Economist", "I'm busy", "Mr. General!", "2070", "1"], ["0", "-5", "0", "-10"], ["0", "0", "-5", "0"]],
    [["War has ended but the general don't let us go home!", "Miller, Solider", "Mr. General!", "And?", "2118", "342"], ["0", "5", "-5", "0"], ["0", "-10", "5", "0"]],
    [["We need more funds for sciene.", "Scott, Scientist", "Yes", "You have enough", "2070", "1"], ["5", "0", "5", "-5"], ["-5", "0", "0", "5"]],
    [["Our employees are sick, should we close today?", "Smith, Chef", "OK", "They're fine", "2070", "1"], ["0", "5", "0", "-5"], ["0", "-10", "0", "-5"]],
    [["I suggest to reopen hotels, this can improve economy.", "Hall, Housekeeper", "Sure", "Better no.", "2070", "1"], ["0", "5", "0", "10"], ["0", "-5", "0", "5"]],
    [["Some factories put garbage in rivers. That's unacceptable!", "Raphael, Ecologist", "They will stop", "They pay for that", "2070", "1"], ["5", "5", "0", "-5"], ["-10", "-5", "0", "-5"]],
    [["Some dangerous criminals escaped. We should send army.", "Mann, Army General", "Send army", "It's nothing wrong", "2070", "1"], ["0", "5", "-5", "0"], ["0", "-5", "0", "-5"]],
    [["We should use code-generating software instead of human developers.", "A.I.", "Of course!", "No", "2091", "51"], ["0", "-5", "0", "10"], ["0", "5", "0", "0"]],
    [["Our economy is weak! We should raise taxes.", "Jackson, Vice President", "Great idea!", "It's not required", "2070", "1"], ["0", "-10", "0", "5"], ["0", "5", "0", "-10"]],
    [["Mr. President, west countries asked us for a peace treaty but they want some money.", "Mann, Army General", "We will accept", "Never!", "2070, 2"], ["10", "10", "10", "-10"], ["-5", "-5", "-5", "5"]],
    [["Radiation level is increasing in south. We must do something!", "Raphael, Ecologist", "I agree", "I disagree", "2070", "1"], ["10", "5", "0", "-5"], ["-10", "-5", "0", "0"]],
    [["The radiation on the battlefield is increasing!", "Miller, Solider", "We surrender!", "Shut up!", "2118", "342"], ["5", "5", "5", "0"], ["-5", "-5", "-5", "-5"]],
    [["Can we use nuclear energy for researches?", "Scott, Scientist", "Never", "Sure.", "2070", "1"], ["-10", "-5", "0", "10"], ["5", "0", "0", "-5"]],
    [["A plane crashed near capital! Survivors need help urgently.", "Walker, Investigation Agent", "I will send it", "They're fine", "2070", "1"], ["0", "5", "0", "-5"], ["0", "-5", "0", "0"]],
    [["A virus is spreading! We should close borders now.", "Mann, Army General", "Close them", "No.", "2070", "1"], ["0", "-10", "5", "0"], ["-5", "0", "-5", "-5"]],
    [["I want a new car.", "Zeherman, First Lady", "No honey", "Sure.", "2070", "1"], ["0", "0", "0", "-5"], ["0", "0", "0", "0"]],
    [["A stock crash is causing financial problems.", "Jeff, Economist", "Damn!", "Oh...", "2070", "1"], ["0", "0", "0", "-10"], ["0", "0", "0", "-10"]],
    [["Presidential house is old and dirty!", "Hall, Housekeeper", "I'll do something", "I don't care", "2070", "1"], ["0", "0", "0", "-5"], ["0", "0", "0", "0"]],
    [["Soldiers are starving but I need more imported vegetables!", "Smith, Chef", "Yes", "No", "2070","1"], ["0", "10", "5", "-5"], ["0", "-5", "-5", "0"]],
    [["Somebody take control over hospital computers, invest more in cybersecurity.", "A.I.", "Yes", "Shut up!", "2091", "51"], ["0", "0", "5", "-5"], ["0", "-10", "-10", "0"]],
    [["We should replace human workes with robots in factories.", "Jackson, Vice President", "Great idea!", "No", "2070", "1"], ["0", "-10", "0", "10"], ["0", "10", "0", "-5"]],
    [["I feel sick and I can't go to war!", "Miller, Solider", "No way!", "Fine.", "2118", "342"], ["0", "10", "-5", "0"], ["0", "-5", "5", "0"]],
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
    [["Me and soldiers are hungry. Help us!", "Miller, Solider", "Don't worry", "Go away!", "2118", "342"], ["0", "10", "5", "-5"], ["0", "-10", "-5", "5"]],
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
//if [id to redirect] is 0, chapter ends
//if [id to redirect] is "end()" - the game has come to an end

//"default" isn't a person, it's an information about what happened to player

const info = [
    [["...", "???"], ["What...", "2"], ["Where I am?", "2"], ["1", "1", "2070", "1"]],
    [["Oh, you are here...", "???"], ["What?", "3"], ["What?", "3"], ["1", "2", "2070", "1"]],
    [["It seems you lost your memories along the way...", "???"], ["Who am I?", "4"], ["Oh...", "4"], ["1", "3", "2070", "1"]],
    [["You are in 2070, in an apocalyptic future, humans played with nuclear and biological weapons. You are the leader of the few surviving countries.", "???"], ["Oh...", "5"], ["Scary", "5"], ["1", "4", "2070", "1"]],
    [["Oh, you are a robot. Every time you die you travel in time before you died.", "???"], ["I can't die?", "6"], ["Amazing!", "6"], ["1", "5", "2070", "1"]],
    [["However, if your system is disabled, you will completely die.", "???"], ["Fine", "7"], ["Alright", "7"] ["1", "6", "2070", "1"]],
    [["Maintain the balance of environment, happiness, army and money. Don't have too much or too less.", "???"], ["OK", "8"], ["Easy...", "8"], ["1", "7", "2070", "1"]],
    [["Now go, I will be back in few years...", "???"], ["Wait...", "9"], ["Hey", "9"], ["1", "8", "2070", "1"]],
    [["The entity who talked to you dissapears.", "default"], ["...", "0"], ["...", "0"], ["1", "9", "2070", "1"]],
    [["You feel like you can't breathe anymore. Time freezes.", "default"], ["Wait...", "2"], ["Hey", "2"], ["2", "1", "2075", "195"]],
    [["I'm back...", "???",] ["Explain more", "3"], ["HEY", "3"], ["2", "2", "2075", "195"]],
    [["Somebody, from some year, altered spacetime.", "???"], ["Spacetime?", "4.1"], ["...", "4.2"], ["2", "3", "2075", "195"]],
    [["Probably they tried to make a time machine, but they failed. Now chronology is affected.", "???"], ["Oh...", "5"], ["Scary", "5"], ["2", "4.1", "2075", "195"]],
    [["If you want to fix this, you have to get rid of somebody.", "???"], ["What??", "5"], ["Anything!", "5"], ["2", "4.2", "2075", "195"]],
    [["An alien entity traveled in time and reached here. Kill him until 2160 or you'll be trapped here forever!", "???"], ["But...", "6"], ["What??", "6"], ["2", "5", "2075", "195"]],
    [["You feel normal again.", "default"], ["...", "0"], ["...", "0"], ["2", "6", "2075", "195"]],

    [["Mr. President, somebody wants to talk with you.", "Jackson, Vice President"], ["Alright", "2"], ["...", "2"], ["3", "1", "2091", "51"]],
    [["Connection established.", "A.I."], ["Security?!", "3.2"], ["Hi!", "3.1"], ["3", "2", "2091", "51"]],
    [["Hi, Mr. President. I'm Artificial Intelligence, for short A.I.", "A.I."], ["Oh...", "0"], ["Hi", "0"], ["3", "3.1", "2091", "51"]],
    [["Don't worry, I'm on your side.", "A.I."], ["Ok.", "0"], ["Mr. General!", "4"], ["3", "3.2", "2091", "51"]],
    [["This is A.I. It was made to help governamment, don't panic.", "Mann, Army General"], ["Hey A.I.", "3.1"], ["Hmm...", "0"], ["3", "4", "2091", "51"]],

    [["Now I know everything!", "Scott, Scientist"], ["What?", "2"], ["???", "2"], ["4", "1", "2103", "12"]],
    [["You aren't a human, you can travel in time every time you die.", "Scott, Scientist"], ["Yes...", "3"], ["That means...", "3"], ["4", "2", "2103", "12"]],
    [["Also gravitational field is altered because somebody from an alternative future tried to create an time machine.","Scott, Scientist"]["Yes...", "4"], ["That means...", "4"], ["4", "3", "2103", "12"]],
    [["Our future shouldn't be like this, but chronology was badly affected.", "Scott, Scientist"], ["Solutions?", "5"], ["Help!", "5"], ["4", "4", "2103", "12"]],
    [["I don't know, but I'm sure you know somebody who can help.", "Scott, Scientist"], ["Really?", "6"], ["Who?!", "6"], ["4", "5", "2103", "12"]],
    [["Scott leaves the room. You go back to work.", "default"], ["...", "0"], ["...", "0"], ["4", "6", "2103", "12"]],

    [["Sir, somebody is at door!", "Hall, Housekeeper"], ["...", "2"], ["Okay", "2"], ["5", "1", "2118", "342"]],
    [["I'm Miller, one of your soldiers, I'm a human but my equipment looks like a robot.", "Miller, Solider"], ["Hello!", "0"], ["Oh...", "0"], ["5", "2", "2118", "342"]],

    [["Hey...", "Miller, Solider"], ["What?", "2"], ["Yes?", "2"], ["6", "1", "2124", "45"]],
    [["You work so hard... Let's go to a beer!", "Miller, Solider"], ["I don't need", "3.1"], ["Sure", "3.2"], ["6", "2", "2124", "45"]],
    [["Oh, c'mon, relax!", "Miller, Solider"], ["Not now", "4.1"], ["Ok", "3.2"], ["6", "3.1", "2124", "45"]],
    [["It was a trap, Miller captured you!", "default"], ["...", "4.2"], ["...", "4.2"], ["6", "3.2", "2124", "45"]],
    [["Miller leaves you alone. He looks angry.", "default"], ["...", "0"], ["...", "0"], ["6", "4.1", "2124", "45"]],
    [["I know what you want to do!", "Miller, Solider"], ["WHAT?", "5"], ["HEY!", "5"], ["6", "4.2", "2124", "45"]],
    [["You are searching for somebody...", "Miller, Solider"], ["...", "6"], ["HELP!!", "6"], ["6", "5", "2124", "45"]],
    [["...for me", "Alien"], ["You...", "7"], ["Oh my...", "7"], ["6", "6", "2124", "45"]],
    [["You, humans, destroyed your planet and at the same time the entire universe!", "Alien"], ["But...", "8"], ["No!", "8"], ["6", "7", "2124", "45"]],
    [["Now we are all trapped in this future, because of your scientists!", "Alien"], ["...", "9"], ["...", "9"], ["6", "8", "2124", "45"]],
    [["Every civilization in the universe was affected by the altered chronology caused by humans.", "Alien"], ["Oh", "10"], ["...", "10"], ["6", "9", "2124", "45"]],
    [["You will pay for this!", "Alien"], ["Noo!", "11"], ["But...", "11"], ["6", "10", "2124", "45"]],
    [["Alien killed you with his gun and turned off your system. The End. (Scenario 1: Killed by Alien)", "default"], ["...", "end()"], ["...", "end()"], ["6", "11", "2124", "45"]]
];

//events (like pandemics, wars and nuclear attack) descrease or increase a value(environment/happiness/army/money) for 3 years and 200 days

//array 1: text and person who said that
//array 2: option 1 text and id to which question to redirect
//array 3: option 2 text and id to which question to redirect
//array 4: chapter, id, which value is changing, "increasing or descreasing?" (last two values are avalaible only at id 2)
//if id is 0, chapter ends

const events = [
    [["Somebody attacked us with atomic bombs. We don't know who did this, radiation level is increasing!", "Mann, Army General"], ["What?!", "2"], ["Terrible!", "2"], ["1", "1"]],
    [["Radioactivity affects environment, this may be the full end.", "default"], ["...", "0"], ["...", "0"], ["1", "2", "environment", "descrease"]],

    [["A war is iminent. I'm afraid the single thing we can do is to fight!", "Jackson, Vice President"], ["Oh no...", "2"], ["Bad", "2"], ["2", "1"]],
    [["Load the bullets, start the tanks, defend the country!", "default"], ["...", "0"], ["...", "0"], ["2", "2", "army", "descrease"]],

    [["A virus escaped from laboratories! I'm afraid that we started a pandemic.", "Scott, Scientist"], ["Ahh!", "2"], ["Awful!", "2"], ["3", "1"]],
    [["As soon as the first human was infected, your country and the entire world is in danger.", "default"], ["...", "0"], ["...", "0"], ["3", "2", "happiness", "descrease"]],

    [["A lot of oil was found in country! Money is increasing.", "Jeff, Economist"], ["Yay!", "2"], ["Amazing!", "2"], ["4", "1"]],
    [["Money aren't always good, beware or they can turn against you!", "default"], ["...", "0"], ["...", "0"], ["4", "2", "money", "increase"]],

    [["A lot of hospitals are under siege! Peoples won't like that.", "Mann, Army General"], ["Oh no", "2"], ["Damn it!", "2"], ["5", "1"]],
    [["Without hospitals, dead rate is increasing. This can be the end.", "default"], ["...", "0"], ["...", "0"], ["5", "2", "happiness", "descrease"]]
];

//question history
let qHistory = [];

//question number(for choose())
let questionNumber;

//normal question? (for choose())
let QuestionType = "normal";

//get year
let year = localStorage.getItem("year");

//set day(if not already setted)
if(localStorage.getItem("day") == null){
    localStorage.setItem("day", "1");
}

//get day
let day = parseInt(localStorage.getItem("day"));

//days & years since starting
let DaysInPower = 0;
let YearsInPower = 0;

//game values
let environment = 25;
let happiness = 25;
let army = 25;
let money = 25;

//random integer function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//choose a question
function choose(){

    //get elements
    const text = document.getElementById("text");
    const characterImg = document.getElementById("CharacterImage");
    const optionOne = document.getElementById("OptionOne");
    const optionTwo = document.getElementById("OptionTwo");
    const GameRect = document.getElementById("GameRect");
    const CharacterName = document.getElementById("Name");
    const TimeText = document.getElementById("Time");
    const Sbtn = document.getElementById("SettingsBtn");

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
        
        //set opacity
        text.style.opacity = 1;
        characterImg.style.opacity = 1;
        optionOne.style.opacity = 1;
        optionTwo.style.opacity = 1;
        GameRect.style.opacity = 1;
        CharacterName.style.opacity = 0.5;
        Sbtn.style.opacity = 1;

        //check the type of question
        if(environment >= 0 && happiness >= 0 && army >= 0 && money >= 0 && environment <= 50 && happiness <= 50 && army <= 50 && money <= 50){
            //check for story
            for(let i; i < 6; i++){

            }
            QuestionType = "normal"
        }else{
            QuestionType = "died";
        }

        if(QuestionType == "normal"){
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

                //days in power
                if(YearsInPower == 0){
                    TimeText.textContent = DaysInPower.toString() + " days in power";
                }else{
                    TimeText.textContent = DaysInPower.toString() + " years and " + DaysInPower.toString() + " days in power";
                }
                
                //change year
                if(DaysInPower > 365){
                    DaysInPower = 1;
                    YearsInPower += 1;
                }
            }else{
                choose();
            }
        }else{
            if(QuestionType = "died"){
                
                //if a value is 0 
                optionOne.textContent = "...";
                optionTwo.textContent = "...";
                characterImg.src = "default.svg";
                CharacterName.textContent = "...";

                //enable buttons
                optionOne.disabled = false;
                optionTwo.disabled = false;
                
                //died scenarios
                if(environment < 0){
                    text.textContent = "The radiation level is deadly. You died instantly.";
                }
                if(happiness < 0){
                    text.textContent = "Peoples hated you and started a revolution. Army general killed you.";
                }
                if(army < 0){
                    text.textContent = "Because you have no army, other states conquered your country. You and army general are killed.";
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
        }
    }, 600);
}

//launch first question at start
choose();

//optionOne function
function opOne(){
    if(QuestionType == "normal"){
        //change values
        environment += parseInt(questions[questionNumber][1][0]);
        happiness += parseInt(questions[questionNumber][1][1]);
        army += parseInt(questions[questionNumber][1][2]);
        money += parseInt(questions[questionNumber][1][3]);

        //change day
        //add days after every question
        let AddDays = getRandomInt(5, 25);
        DaysInPower += AddDays;
        day += parseInt(AddDays);

        //check if year change needed
        let dayFromFile = parseInt(localStorage.getItem("day"));
        let yearFromFile = parseInt(localStorage.getItem("year"));
        if(dayFromFile > 365){
            day -= 365;
            localStorage.setItem("year", yearFromFile + 1);
        }
        
        //save day data
        localStorage.setItem("day", day);

        //next
        choose();
    }
    if(QuestionType == "died"){
        //back to menu
        window.location.href = "index.html";
    }
}

//optionTwo function
function opTwo(){
    if(QuestionType == "normal"){
        //change values
        environment += parseInt(questions[questionNumber][2][0]);
        happiness += parseInt(questions[questionNumber][2][1]);
        army += parseInt(questions[questionNumber][2][2]);
        money += parseInt(questions[questionNumber][2][3]);

        //change day
        //add days after every question
        let AddDays = getRandomInt(5, 25);
        DaysInPower += AddDays;
        day += parseInt(AddDays);

        //check if year change needed
        let dayFromFile = parseInt(localStorage.getItem("day"));
        let yearFromFile = parseInt(localStorage.getItem("year"));
        if(dayFromFile > 365){
            day -= 365;
            localStorage.setItem("year", yearFromFile + 1);
        }

        //save day data
        localStorage.setItem("day", day);

        //next
        choose();
    }
    if(QuestionType == "died"){
        //back to menu
        window.location.href = "index.html";
    }
}

//Sbtn function
function openSettings(){
    settingsWindow.style.opacity = 1;
    settingsWindow.style.display = "block";
}

//settings window
const settingsWindow = document.getElementById("settingsWindow");
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
        const answer = confirm("This will delete progress and when you will start game again new files will be created. Are you sure?");
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
const slider = document.getElementById("volumeSlider");
const showvolume = document.getElementById("showvolume");
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