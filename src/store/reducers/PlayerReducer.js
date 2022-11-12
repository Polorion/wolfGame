const ChangePositionPlayer = "CHANGE_POSITION_PLAYER";
const setScore = "SET_SCORE";
const setMiss = "SET_MISS";
const setOwner = "SET_OWNER";
export const movePositionPlayer = (position) => {
  return {
    type: ChangePositionPlayer,
    position,
  };
};
export const choiceOwner = (owner) => {
  return {
    type: setOwner,
    owner,
  };
};
export const upScore = () => {
  return {
    type: setScore,
  };
};
export const missedEggs = () => {
  return {
    type: setMiss,
  };
};

const initialState = {
  positionPlayer: "1",
  score: 0,
  missedEggs: 0,
  owner: null,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_POSITION_PLAYER":
      return {
        ...state,
        positionPlayer: action.position,
      };
    case "SET_OWNER":
      return {
        ...state,
        owner: action.owner,
      };
    case "SET_SCORE":
      return {
        ...state,
        score: state.score + 1,
      };
    case "SET_MISS":
      return {
        ...state,
        missedEggs: state.missedEggs + 1,
      };

    default:
      return state;
  }
};

export default playerReducer;
