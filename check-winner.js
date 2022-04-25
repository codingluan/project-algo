module.exports = function checkWinner(_playerPos) {
    const gameBoard = new Array(9).fill('  ');

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
