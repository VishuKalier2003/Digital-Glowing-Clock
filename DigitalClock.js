// Clock id to refer to a tag in HTML
var clock = document.getElementById('clock');
var clock_shadow = document.getElementById('display');
// declaring function for getting time
function gettingTime() {
    // in-built method to get exact date and time of the current place
    let day = new Date();
    let hr = day.getHours(); // getting hours
    let min = day.getMinutes(); // getting minutes
    let sec = day.getSeconds(); // getting seconds
    let variable; // variable declared for meridians
    if (sec === 60) {
        sec = 0;
        min++;
    }
    if (min === 60) {
        min = 0;
        hr++;
    }
    if (hr === 23) {
        hr = 0;
        sec = 0;
        min = 0;
    }
    if (hr < 12) {
        variable = "AM";
    } else {
        variable = "PM";
    }
    // function for calling recursively at specific time intervals continuously
    setTimeout(gettingTime, 1000); // 1000 milliseconds or 1 seconds
    if (sec < 10) { sec = "0" + sec; }
    if (min < 10) { min = "0" + min; }
    if (hr < 10) { hr = "0" + hr; }
    clock.textContent = hr + ":" + min + ":" + sec + " " + variable;
    clock_shadow.textContent = hr + ":" + min + ":" + sec + " " + variable;
}

gettingTime();