
export const useWinner = (board) => {
  const combineWinners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < combineWinners.length; i++) {
    const [a, b, c] = combineWinners[i];
    if (board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (!board.includes('')) {
    return 'DRAW';
  }

  return '';
};