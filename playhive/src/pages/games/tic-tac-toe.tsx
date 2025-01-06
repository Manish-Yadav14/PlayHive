import { useState } from 'react';

const TicTacToe = () => {
  const [turn, setTurn] = useState(true); // true = 'O', false = 'X'
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState<string | null>(null); // Winner state
  const [bgColor, setBgColor] = useState('#1E293B'); // Board background color

  const handleClick = (index: number) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = turn ? 'O' : 'X';
      setBoard(newBoard);
      setTurn(!turn);
      setBgColor(turn ? 'black' : '#1E293B');
      setTimeout(() => checkWinner(newBoard), 300);
    }
  };

  const checkWinner = (board: any) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (board.every((cell: any) => cell !== '')) {
      setWinner('It\'s a draw!');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setTurn(true);
    setWinner(null);
    setBgColor('#1E293B');
  };

  return (
    <div
      className="min-h-screen h-full flex flex-col items-center justify-center"
      style={{
        backgroundColor: bgColor,
        backgroundImage: "url('/board.png')",
        backgroundSize: 'cover',
      }}
    >
      <div className="text-center mb-6">
        {winner ? (
          <h2 className="text-3xl font-bold text-green-500 mb-4">
            {winner === "It's a draw!" ? winner : `${winner} wins! 🎉`}
          </h2>
        ) : (
          <h2 className="text-2xl font-medium text-white">
            Current Turn: <span className="font-bold text-orange-500">{turn ? 'O' : 'X'}</span>
          </h2>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 w-[400px] sm:w-[500px]">
        {board.map((value, index) => (
          <button
            key={index}
            className="h-24 w-24 sm:h-32 sm:w-32 bg-blue-600 text-white text-5xl sm:text-7xl font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
            onClick={() => handleClick(index)}
            disabled={!!value || Boolean(winner)}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Conditionally render Play Again button only if there's a winner */}
      {winner && (
        <div className="mt-6">
          <button
            className="m-2 p-2 bg-green-500 text-white font-bold text-xl rounded-lg hover:bg-green-600"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
