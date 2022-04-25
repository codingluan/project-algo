const prompt = require('prompt-sync')();

const gameBoard = new Array(9).fill('  ');
let currentPlayer = '';
const playerPos = { 'X': [], 'O': [] };
let position;

// Build board UI function
const boardUI = (values) => {
    console.log('\n');

    console.log('      |      |     ');
    console.log(`  ${values[0]}  |  ${values[1]}  |  ${values[2]}  `);
    console.log('______|______|_____');

    console.log('      |      |     ');
    console.log(`  ${values[3]}  |  ${values[4]}  |  ${values[5]}  `);
    console.log('______|______|_____');

    console.log('      |      |     ');
    console.log(`  ${values[6]}  |  ${values[7]}  |  ${values[8]}  `);
    console.log('      |      |     ');
}

const switchUser = (_currentPlayer) => {
    if (_currentPlayer === '') {
        return Math.random() > 0.5 ? 'X' : 'O';
    }

    if (_currentPlayer === 'X') {
        return 'O';
    }

    return 'X';
}

const checkWinner = (_playerPos) => {
    const winningCombos = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    let result = [];
    for (combo of winningCombos) {
        result = [];
        for (let i = 0; i < 3; i++) {
            result.push(_playerPos.includes(combo[i]));
        }
        if (!result.includes(false)) return true;
    }
    return false;
}

boardUI(gameBoard);

while (true) {
    currentPlayer = switchUser(currentPlayer);

    position = prompt(`Player ${currentPlayer === 'X' ? '❌' : '⭕'}'s turn. Which position? `);

    if (gameBoard[position - 1] != '  ') {
        console.error('\n😤 Nope! You can\'t get away with it\n');
        console.log('👇 Try another move!')
        currentPlayer = switchUser(currentPlayer);
        continue;
    }

    playerPos[currentPlayer].push(Number(position));

    gameBoard[position - 1] = `${currentPlayer === 'X' ? '❌' : '⭕'}`;

    boardUI(gameBoard);

    if (checkWinner(playerPos[currentPlayer])) {
        console.log(`🏅 Player ${currentPlayer === 'X' ? '❌' : '⭕'} wins!`);
        break;
    }

    if (playerPos['X'].length + playerPos['O'].length === 9) {
        console.log(`😝 DRAW!`);
        break;
    }
}