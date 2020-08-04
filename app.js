const button = document.getElementById('button');
const rollResult = document.getElementById('rollResult');
const score = document.getElementById('score');

const dice = {
    sides: 20,
    roll() {
      return Math.floor(Math.random() * this.sides) + 1;
    }
}
const scoreTrack = {
    rollResultNum: 0,
    scoreNum: 0,
    calc () {
        this.scoreNum += this.rollResultNum;
    },
}
const playAgain = () => {
    button.textContent = 'Play Again?';
    scoreTrack.rollResultNum = 0;
    scoreTrack.scoreNum = 0;
}


//Prints dice roll & score to the page
button.addEventListener('click',() => {
    button.textContent = 'Roll';
    scoreTrack.rollResultNum = dice.roll();
    scoreTrack.calc();
    rollResult.src = `img/dice${scoreTrack.rollResultNum}.png`;
    score.textContent = scoreTrack.scoreNum;
    console.log(scoreTrack.scoreNum)
    if (scoreTrack.rollResultNum == 1) {
        score.innerHTML = "You lose!";
        playAgain();
    }
    else if (scoreTrack.scoreNum >= 40){
        score.innerHTML = `You win! Score: ${scoreTrack.scoreNum}.`;
        playAgain();
    }
})