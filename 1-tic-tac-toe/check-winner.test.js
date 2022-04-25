const checkWinner = require('./check-winner');

it('chooses the X as winner', () => {
    const xPos = [1, 6, 9, 3];
    const isWinning = checkWinner(xPos);
    expect(isWinning).toEqual(true);
})