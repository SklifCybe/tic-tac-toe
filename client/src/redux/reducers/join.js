const initialState = {
  roomId: '',
  userName: ''
};

export const join = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ROOM-ID':
      return {
        ...state,
        roomId: action.payload,
      }
    case 'SET_USER-NAME':
      return {
        ...state,
        userName: action.payload
      }
    default:
      return state;
  }
};