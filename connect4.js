var board;
var gameover = false;

var rows = 6;
var columns = 7;

var currentColumns;

var playerCat ="C";
var playerDog ="D";
var currentPlayer = playerCat;

window.onload = function() {
    setGame();
}
function setGame() {
    board = [];
    for (let c = 0; c < columns; c++)
    let row = [];
    for (let r = 0; r < rows; r++)
        row.push('');

}
