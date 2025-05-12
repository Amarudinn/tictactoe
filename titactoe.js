class TicTacToe {
    constructor() {
        this.board = Array(9).fill(' ');
        this.currentPlayer = 'X';
    }

    printBoard() {
        const b = this.board;
        console.log(`
 ${b[0]} | ${b[1]} | ${b[2]}
---+---+---
 ${b[3]} | ${b[4]} | ${b[5]}
---+---+---
 ${b[6]} | ${b[7]} | ${b[8]}
`);
    }

    makeMove(position) {
        if (position < 0 || position > 8 || this.board[position] !== ' ') {
            console.log('❌ Invalid move. Try again.');
            return false;
        }
        this.board[position] = this.currentPlayer;
        return true;
    }

    checkWin() {
        const b = this.board;
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
            [0, 4, 8], [2, 4, 6]           // diagonals
        ];
        for (let [a, b1, c] of lines) {
            if (this.board[a] !== ' ' && this.board[a] === this.board[b1] && this.board[a] === this.board[c]) {
                return this.board[a];
            }
        }
        return null;
    }

    isDraw() {
        return this.board.every(cell => cell !== ' ');
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
}

module.exports = TicTacToe;
