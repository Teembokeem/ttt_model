console.log("js Linked");

/*model*/

var won = false;
var currentPlayer = "X";
var board = [
  "","","", //0,1,2
  "","","", //3,4,5
  "","",""  //6,7,8
];

// 1. Start The Game
// 2. Move (changes turn)
//   input:
//   --whose turn,
//   --what cell
//
//   outputs:
//   --fill in cell with the right player
//   --calculate if ther eis a winner
//   --changes turn

var move = function(cellIndex) {
  board[cellIndex] = currentPlayer;
  if (gameWon()) {
    won = true;
  } else {
    if (currentPlayer = 'X') {
      currentPlayer = 'O';
    } else if (currentPlayer != 'X') {
      currentPlayer = 'X';
    }
  }  // currentPlayer = (currentPlayer === 0 "X" ? "O" : "X");
}

// 3. Win Condition
var gameWon = function() {

}
