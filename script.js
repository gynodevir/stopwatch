let sesd = 25;
let bd = 8;

function adds() {
    if (sesd >= 60) {
        alert("no exceeding");
    } else {
        sesd += 1;
        document.getElementById("number-display1").innerText = sesd;
        document.getElementById("hr").innerText = sesd;
    }
}

function subs() {
    if (sesd <= 0) {
        alert("no negative");
    } else {
        sesd -= 1;
        document.getElementById("number-display1").innerText = sesd;
        document.getElementById("hr").innerText = sesd;
    }
}

function addb() {
    if (bd >= 60) {
        alert("no exceeding");
    } else {
        bd += 1;
        document.getElementById("number-display").innerText = bd;
    }
}

function subb() {
    if (bd <= 0) {
        alert("no negative");
    } else {
        bd -= 1;
        document.getElementById("number-display").innerText = bd;
    }
}

let starttimer;
let start = document.getElementById("start");
let ms = document.getElementById("hr");
let ss = document.getElementById("sec");
let bm = document.getElementById("number-display");
let bs = 60;
start.addEventListener('click', function () {
    if (starttimer == undefined) {
        starttimer = setInterval(timer, 1000);
    } else {
        alert("Timer is already running");
    }
});
let reset = document.getElementById("reset");
reset.addEventListener('click',function(){
    ms.innerText=25
    ss.innerText="00"
    bm.innerText=8
    clearInterval(starttimer);
    starttimer = undefined; 

})



function timer() {
    // session time counter
    if (ms.innerText != 0 && ss.innerText == 0) {
        ms.innerText--;
        ss.innerText = 59;
    } else if (ms.innerText != 0) {
        ss.innerText--;
    } else if (ms.innerText == 0 && ss.innerText != 0) {
        ss.innerText--;
    }

    // break time counter
    else if (ms.innerText == 0 && ss.innerText == 0) {
        if (bm.innerText != 0 && bs != 0) {
            bs--;
        } else if (bm.innerText != 0 && bs == 0) {
            bm.innerText--;
            bs = 59;
        }
        else if(bm.innerText==0 && bs==0)
        {
            clearInterval(starttimer); 
        }
        console.log(bs);
    } 
    else if(ms.innerText == 0 && ss.innerText == 0 && bm.innerText==0){
        clearInterval(starttimer);  // Stop the timer
    }
}
