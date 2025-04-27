// let homeScoreEl = document.getElementById("home-score");
// let guestScoreEl = document.getElementById("guest-score");

homeScore = 0
guestScore = 0

function addPoints(team, num) {
    if(team == 'home') {
        homeScore += num
        updateScore('home-score', homeScore)
        // homeScoreEl.innerText = homeScore
    }
   else {
        guestScore += num
        updateScore('guest-score', guestScore)
        // guestScoreEl.innerText = guestScore
   }
}

// Added a function to bounce out the score when a point is achieved
function updateScore(element, score) {
    const scoreEl = document.getElementById(element)
    scoreEl.textContent = score

    scoreEl.classList.add('pop') // Pop is created in the CSS

    setTimeout(() => {
        scoreEl.classList.remove('pop')
    }, 300); // Lasts .3 seconds
}
