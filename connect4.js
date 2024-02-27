//game variables

var playerCat = "C";
var playerDog = "D";
var currentPlayer = playerCat;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;
var currentColumns = [];

var count = 0;
let totalMoves = 0;

//game start
window.onload = function() {
    startGame();
}

// function to create the tiles rather than me making 42 tiles individually
//cite#1
// * Title: (js-connect-four) * Author:(Yip, K) * Date: (2022) * Code version:(source code) * Availability:(https://github.com/codyseibert/js-connect-four?tab=MIT-1-ov-file) * **/

function startGame() {
    board = [];
    currentColumns = [5, 5, 5, 5, 5, 5, 5];
    gameOver = false;
    gameTied = false
    
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            
            row.push(' ');
            
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);

        totalMoves = 0;
    }
}

// function to place pieces in turns
//cite#1
// * Title: (js-connect-four) * Author:(Yip, K) * Date: (2022) * Code version:(source code) * Availability:(https://github.com/codyseibert/js-connect-four?tab=MIT-1-ov-file) * **/

function setPiece() {
    if (gameOver ) {
    return;
    }

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = currentColumns[c];
    if (r < 0 ) {
        return;
    }

    board[r][c] = currentPlayer;
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currentPlayer == playerCat) {
        tile.classList.add("cat-chip");
        currentPlayer = playerDog;
        document.getElementById("chat").innerHTML = 'Player Dogs Turn!'
    }
    else {
        tile.classList.add("dog-chip")
        currentPlayer = playerCat
        document.getElementById("chat").innerHTML = 'Player Cats Turn!'
        
    }

    r -= 1;
    currentColumns[c] = r;
    
    //check for win condition or draw

    checkWinner();
    checkDraw();

    
}
// checking horizontal win condition
//cite#1
// * Title: (js-connect-four) * Author:(Yip, K) * Date: (2022) * Code version:(source code) * Availability:(https://github.com/codyseibert/js-connect-four?tab=MIT-1-ov-file) * **/

function checkWinner() {

    // checkin horizontal win condition
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++){
           if (board[r][c] != ' ') {
               if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                   setWinner(r, c);
                   return;
               }
           }
        }
    }

    // checking vertical win condition

    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // checking anti diag win condition

    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // function for diagonal win condition
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

//function for winner
    function setWinner(r, c) {
        let winner = document.getElementById("chat");
        if (board[r][c] == playerCat) {
            winner.innerText = "Cat Wins!";
            gameOver = true;
        } else {
            winner.innerText = "Dog Wins!";
            gameOver = true;
        }
    }
}
//cite#2 
//function for Draw condition
//used chatgpt to help me figure out how to make a draw function
function checkDraw() {
    if (totalMoves === rows * columns) {
        let winner = document.getElementById("chat");
        winner.innerText = "It's a Draw!";
        gameOver = true;
    }
}

