let screenFaceHome = document.getElementById("screen-face-home")
let screenFaceGuest = document.getElementById("screen-face-guest")




let count = 0
let score = 0

function homeScore1() {
    count = count + 1
    screenFaceHome.innerText = count
}

function homeScore2() {
    count = count + 2
    screenFaceHome.innerText = count
}

function homeScore3() {
    count = count + 3
    screenFaceHome.innerText = count
}

function guestScore1() {
    score = score + 1
    screenFaceGuest.innerText = score
}

function guestScore2() {
    score = score + 2
    screenFaceGuest.innerText = score
}
function guestScore3() {
     score = score + 3
    screenFaceGuest.innerText = score
}