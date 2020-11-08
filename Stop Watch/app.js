var min = 0;
var sec = 0;
var msec = 0;
var interval;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

function timer() {
    msec++
    msecHeading.innerHTML = msec
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec
        msec = 0
    }
    else if (sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = 0
    }
}
function start() {
    interval = setInterval(timer, 10)
     document.getElementById('start').disabled=true
   document.getElementById('start').style.backgroundColor='red'
   document.getElementById('stop').style.backgroundColor='black'
    document.getElementById('reset').style.backgroundColor='black'
}
function stop() {
    clearInterval(interval)
    document.getElementById('start').disabled=false
    document.getElementById('start').style.backgroundColor='black'
    document.getElementById('stop').style.backgroundColor='red'
}
function reset() {
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
    document.getElementById('start').disabled=false
    document.getElementById('start').style.backgroundColor='black'
    document.getElementById('stop').style.backgroundColor='black'
    document.getElementById('reset').style.backgroundColor='black'
}