const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

// Play game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    showWinner(winner, computerChoice);
}

//Get computer choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


// Get game winner
function getWinner(p, c) {
    if (p === c) {
        return 'Draw';
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'Computer';
        } else {
            return 'Player';
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'Computer';
        } else {
            return 'Player';
        }
    } else if (p === 'scissors') {
        if (c === rock) {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}

function showWinner(winner, computerChoice) {
    if (winner === 'Player') {
        // Increment player score
        scoreboard.player++;
        // Show modal result
        result.innerHTML = `<h1 class="text-win">You win</h1> <i class="fas fa-hand-${computerChoice} fa-10x"></i><p>Computer chose <strong>${computerChoice}</strong></p>`;
    } else if (winner === 'Computer') {
        // Increment computer score
        scoreboard.computer++;
        // Show modal result
        result.innerHTML = `<h1 class="text-lose">You lose</h1> <i class="fas fa-hand-${computerChoice} fa-10x"></i><p>Computer chose <strong>${computerChoice}</strong></p>`
    } else {
        result.innerHTML = `<h1>It's a draw</h1> <i class="fas fa-hand-${computerChoice} fa-10x"></i><p>Computer chose <strong>${computerChoice}</strong></p>`;
    }
    // Show score
    score.innerHTML = `<p>Player: ${scoreboard.player}</p><p>Computer: ${scoreboard.computer}</p>`;

    modal.style.display = 'block';
}

//restart game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `<p>Player: 0</p><p>Computer: 0</p>`;
}

// Clear modal
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }

}


// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);