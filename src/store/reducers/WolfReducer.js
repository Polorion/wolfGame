const ChangePositionPlayer = "CHANGE_POSITION_PLAYER";
const setScore = "SET_SCORE";
export const movePositionPlayer = (position) => {
  return {
    type: ChangePositionPlayer,
    position,
  };
};

const initialState = {
  positionPlayer: "1",
  score: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_POSITION_PLAYER":
      return {
        ...state,
        positionPlayer: action.position,
      };
    case "SET_SCORE":
      return {
        ...state,
        score: state.score + 1,
      };

    default:
      return state;
  }
};

export default playerReducer;
