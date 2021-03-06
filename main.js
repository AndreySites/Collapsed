//respect the E.U. laws about localStorage
var close = document.getElementsByClassName("closebtn");
var accepted = false;

//other values
var year;

//get elements (NOTE: yearInfo is showing year at menu) (NOTE 2: Year is "Year" paragraph)
//(NOTE 3: space = "press space to continue" paragraph)

var space = document.getElementById("space");
var yearInfo = document.getElementById("yearInfo");
var Year = document.getElementById("Year");
var delStorageBtn = document.getElementById("delStorageBtn");

//display states at start(when user have to accept localStorage)
space.style.display = "block";
yearInfo.style.display = "block";

//when click alert close button
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        //accepting alert
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
        main();
    }
}

//year changing animation scripts

let start; // set on the first step to the timestamp provided
final = 0; // parse out the final number (real value is set at the end of the main() function)
const duration = 4000; // duration in ms
const step = ts => {
    if (!start) {
        start = ts;
    }
    // get the time passed as a fraction of total duration
    let progress = (ts - start) / duration;
        
    yearInfo.textContent = Math.floor(progress * final); //set the text
        
    if (progress < 1) {

        // if we're not 100% complete, request another animation frame
        requestAnimationFrame(step) ;
    }

    //if it's more than year value, set at year value
    if(yearInfo.textContent > final){
        yearInfo.textContent = year;
            
        //show start button
        space.style.opacity = "1";

        //launch game when press space or tap
        document.addEventListener('keyup', event => {
            
            if (event.code == 'Space') {
                //hide shown elements 
                space.style.opacity = "0";
                yearInfo.style.opacity = "0";
                Year.style.opacity = "0";

                //switch(after 600ms)
                setTimeout(function(){window.location.href = "gamePage.html"; }, 600);
            }
        })
    }
}

function main(){
    //show elements
    yearInfo.style.opacity = "1";
    Year.style.opacity = "1";
    space.style.opacity = "0";

    //if localStorage doesn't exist, create it
    if (localStorage.getItem("year") == null) {
        localStorage.setItem("year", "2070");
    }
    
    //set year
    year = parseInt(localStorage.getItem("year"));
        
    // start the animation
    start = 0;
    final = parseInt(year, 10);
    requestAnimationFrame(step)
}

//delete localStorage
function delStorage(){
    localStorage.removeItem("year");
    delStorageBtn.style.opacity = "0";
}