//respect the E.U. laws about localStorage
var close = document.getElementsByClassName("closebtn");
var Alert = document.getElementById("alert");

//other values
var year;

//get elements (NOTE: yearInfo is showing year at menu) (NOTE 2: Year is "Year" paragraph)
//(NOTE 3: space = "press space to continue" paragraph)

var space = document.getElementById("space");
var yearInfo = document.getElementById("yearInfo");
var Year = document.getElementById("Year");
var delStorageBtn = document.getElementById("delStorageBtn");

//display state and opacity at start
yearInfo.style.opacity = "0";
Year.style.opacity = "0";
space.style.opacity = "0";

yearInfo.style.display = "block";
Year.style.display = "block";
space.style.display = "block";

//close button(at localStorage)
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){

    var div = this.parentElement;
    div.style.opacity = "0";
    
    main();
    }
}

//year changing animation scripts

let start; //set on the first step to the timestamp provided
final = 0; //parse out the final number (real value is set at the end of the main() function)
const duration = 4000; //duration in ms
const step = ts => {
    if (!start) {
        start = ts;
    }
    // get the time passed as a fraction of total duration
    let progress = (ts - start) / duration;
        
    yearInfo.textContent = Math.floor(progress * final); //set the text
        
    if (progress < 1) {
        //if we're not 100% complete, request another animation frame
        requestAnimationFrame(step) ;
    }

    //if it's more than year value, set at year value
    if(yearInfo.textContent > final){
        yearInfo.textContent = year;
            
        //show start button
        space.style.opacity = "1";

        //launch game when press space
        document.addEventListener('keyup', event => {
            
            if (event.code == 'Space') {
                
                //beep sound
                beep = new sound("beep.wav");
                beep.play(false);

                //hide shown elements 
                space.style.opacity = "0";
                yearInfo.style.opacity = "0";
                Year.style.opacity = "0";

                //lower volume (fast but gradually)
                for(let i = 100; i > 0; i--){
                    menuTheme.pause();
                    menuTheme.setVolume(i / 100);
                    menuTheme.play(true);
                }

                //switch(after 600ms)
                setTimeout(function(){window.location.href = "gamePage.html"}, 600);
            }
        })
    }
}

function main(){

    //set opacity of elements
    yearInfo.style.opacity = "1";
    Year.style.opacity = "1";
    space.style.opacity = "0";

    //disable Alert box after hiding it;
    setTimeout(function(){Alert.style.display = "none"}, 600)

    //menu theme
    menuTheme = new sound("MenuSound.wav");
    menuTheme.setVolume(1.00);
    menuTheme.play(true);

    //make delStorageBtn and closebtn hidden and unclickable
    setTimeout(function(){delStorageBtn.style.display = "none"}, 600);
    setTimeout(function(){closebtn.style.display = "none"}, 600);

    //if localStorage doesn't exist, create it
    if (localStorage.getItem("year") == null) {
        localStorage.setItem("year", "2070");
    }
    
    //set year
    year = parseInt(localStorage.getItem("year"));
        
    //start the animation
    start = 0;
    final = parseInt(year, 10);
    requestAnimationFrame(step)
}

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

//sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
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