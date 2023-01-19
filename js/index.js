// Scores
let homeCurrentScore = document.getElementById("home-score");
let awayCurrentScore = document.getElementById("away-score");
let homeScore = 0;
let awayScore = 0;
// Home
function homeScorePlus1() {
    homeScore += 1;
    homeCurrentScore.textContent = homeScore;
}

function homeScorePlus2() {
    homeScore += 2;
    homeCurrentScore.textContent = homeScore;
}

function homeScorePlus3() {
    homeScore += 3;
    homeCurrentScore.textContent = homeScore;
}
// Away
function awayScorePlus1() {
    awayScore += 1;
    awayCurrentScore.textContent = awayScore;
}

function awayScorePlus2() {
    awayScore += 2;
    awayCurrentScore.textContent = awayScore;
}

function awayScorePlus3() {
    awayScore += 3;
    awayCurrentScore.textContent = awayScore;
}

function resetScore() {
    homeCurrentScore.textContent = 0;
    awayCurrentScore.textContent = 0;
    homeScore = 0;
    awayScore = 0;
}