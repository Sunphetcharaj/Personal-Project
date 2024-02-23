//game variables

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

// Cite#1 I got this function from a video and I'll cite his github repo in README.md
// function to create the tiles rather than me making 42 tiles individually

function setGame() {
    board = [];
  
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // JS
            row.push(' ');
            // HTML
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

