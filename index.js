const readline = require('readline');
const TicTacToe = require('./tictactoe');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const game = new TicTacToe();

console.log(chalk.green('✔ Welcome to Tic Tac Toe!'));

function askMove() {
  game.printBoard();
  rl.question(`Player ${game.currentPlayer}, enter position (0-8): `, (input) => {
    const pos = parseInt(input);
    if (isNaN(pos)) {
      console.log('⚠️ Please enter a number.');
      return askMove();
    }
    if (game.makeMove(pos)) {
      const winner = game.checkWin();
      if (winner) {
        game.printBoard();
        console.log(`🎉 Player ${winner} wins!`);
        return rl.close();
      }
      if (game.isDraw()) {
        game.printBoard();
        console.log("🤝 It's a draw!");
        return rl.close();
      }
      game.switchPlayer();
    }
    askMove();
  });
}

console.log('🎮 Welcome to Tic Tac Toe!');
askMove();
