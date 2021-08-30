const initialState = {
  player: 'O',
  board: Array(9).fill(''),
  winner: ''
};

export const game = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER':
      return {
        ...state,
        player: action.payload,
      }
    case 'SET_BOARD':
      return {
        ...state,
        board: action.payload
      }
    case 'SET_WINNER':
      return {
        ...state,
        winner: action.payload
      }
    default:
      return state;
  }
};