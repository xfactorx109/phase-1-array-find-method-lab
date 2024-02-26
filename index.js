// code your solution here
function superbowlWin(record) {
    const winningGame = record.find(game => game.result === "W");

    if (winningGame) {
        return winningGame.year;
    } else {
        return undefined;
    }
}