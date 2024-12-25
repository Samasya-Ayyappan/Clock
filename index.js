
let digit = document.getElementById("digital");
let Hour = document.getElementById("Hour")
let Minute = document.getElementById("Minute")
let Second = document.getElementById("Second")
let local = document.getElementById("Local");
function time() {
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    digit.innerText = `${hours} : ${min} : ${sec}`;
    Second.style.rotate = 90 + sec * 6 + "deg";
    Minute.style.rotate = 90 + min * 6 + "deg";
    if (hours > 11) {
        local.innerText = `${hours - 12} : ${min} : ${sec} PM`;
        Hour.style.rotate = 90 + (hours - 12) * 30 + "deg";
    }
    else {
        local.innerText = `${hours} : ${min} : ${sec} AM`;
        Hour.style.rotate = 90 + hours * 30 + "deg";
    }
}
setInterval(time, 1000);
