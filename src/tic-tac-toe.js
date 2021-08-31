class TicTacToe {
    constructor() {

    }
    currentPlayer = 'x';
    gameField = [
        [ null, null, null],
        [ null, null, null],
        [ null, null, null],
    ]
    winner = null ;

    getCurrentPlayerSymbol() {
     return this.currentPlayer
    }

    nextTurn(rowIndex, colIndex) {
     if(this.gameField[rowIndex][colIndex]) {
         return ;
     }
     this.gameField[rowIndex][colIndex] = this.currentPlayer;
     this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
    }

    isFinished(rowIndex, colIndex) {
        if(rowIndex !== null) {
            return false;
        } else {
            return winner
        }      
         
    }

    getWinner(rowIndex, colIndex) {
      function equals3(a, b, c) {
          return (a==b && b==c && a!==null);
      }


      
      for ( rowIndex = 0; rowIndex < 3; rowIndex++) {
          if (equals3(this.gameField[rowIndex][0], this.gameField[rowIndex][1], this.gameField[rowIndex][2]) ) {
              console.log(winner)
              winner = this.gameField[rowIndex][0];
          }
      }

      for ( colIndex= 0; colIndex < 3; colIndex++) {
        if (equals3(this.gameField[0][colIndex],this.gameField[0][colIndex],this.gameField[0][colIndex]) ) {
           winner = this.gameField[0][colIndex];
        }
    }

    if (equals3(this.gameField[0][0],this.gameField[1][1],this.gameField[2][2]) ){
       winner = this.gameField[0][0];
    }
    if (equals3(this.gameField[2][0],this.gameField[1][1],this.gameField[0][2])) {
        winner = this.gameField[2][0];
    }
     
    if (winner == null) {
        return null
    }else {
        console.log(winner)
    return winner;
    }
    

    }

    noMoreTurns() {
        for (let i = 0; i < this.gameField.length; i++) {
            for (let j = 0; j < this.gameField[i].length; j++) {
                if (this.gameField[i][j] === null) return false;
            }
        }
        return true
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        
             return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
