import React, { useState, useEffect } from 'react';

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    checkForWinner();
    checkIfTie();
  }, [board]);

  const handlePress = (index) => {
    if (board[index] || gameOver) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const checkForWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert(`Player ${board[a]} has won!`);
        setGameOver(true);
        return;
      }
    }
  };

  const checkIfTie = () => {
    if (board.every(cell => cell !== null) && !gameOver) {
      alert("It's a tie!");
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameOver(false);
  };

  const renderCell = (index) => {
    return (
      <div key={index} className="cell" onClick={() => handlePress(index)}>
        {board[index]}
      </div>
    );
  };

  return (
    
    <div className='body'>
      <div className="container">
      <h1 className='world'>Tik Tak</h1>
      <div className="board">
        {Array(9).fill(null).map((_, index) => renderCell(index))}
      </div>
      <button className="resetButton" onClick={resetGame}>
        Reset Game
      </button>
    </div>
    </div>
  );
};

export default GameBoard;