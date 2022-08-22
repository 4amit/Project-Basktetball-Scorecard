let homescore = document.getElementById("homeScore");
// console.log(homescore);

let guestscore = document.getElementById("guestScore");
// console.log(guestscore);

let scoreOne = 0;
let scoreTwo = 0;
let oneHome = document.getElementById("plus-point-one-home");

function addOneHome () {
    scoreOne += 1;
    homescore.innerText = scoreOne;
    };

    function addTwoHome () {
        scoreOne += 2;
    homescore.innerText = scoreOne;
    };

    function addThreeHome () {
        scoreOne += 3;
    homescore.innerText = scoreOne;
    };

    function addOneGuest () {
        scoreTwo += 1;
    guestscore.innerText = scoreTwo;
    };

    function addTwoGuest () {
        scoreTwo += 2;
    guestscore.innerText = scoreTwo;
    };

    function addThreeGuest () {
        scoreTwo += 3;
        guestscore.innerText = scoreTwo;
    };





