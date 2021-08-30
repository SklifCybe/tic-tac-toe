export const setPlayer = (player) => ({
  type: 'SET_PLAYER',
  payload: player
});

export const setBoard = (board) => ({
  type: 'SET_BOARD',
  payload: board
});

export const setWinner = (player) => ({
  type: 'SET_WINNER',
  payload: player
});