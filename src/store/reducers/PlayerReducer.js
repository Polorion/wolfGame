const ChangePositionPlayer = "CHANGE_POSITION_PLAYER";
const setScore = "SET_SCORE";
const setMiss = "SET_MISS";
const setOwner = "SET_OWNER";
const gameIsRun = "GAME_IS_RUN";
const resetScore = "RESET_SCORE";
export const movePositionPlayer = (position) => {
  return {
    type: ChangePositionPlayer,
    position,
  };
};
export const resetAllScore = () => {
  return {
    type: resetScore,
  };
};
export const runGame = () => {
  return {
    type: gameIsRun,
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
  gameIsRun: false,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_POSITION_PLAYER":
      return {
        ...state,
        positionPlayer: action.position,
      };
    case "RESET_SCORE":
      return {
        ...state,
        score: 0,
        missedEggs: 0,
      };
    case "SET_OWNER":
      return {
        ...state,
        owner: action.owner,
      };
    case "GAME_IS_RUN":
      return {
        ...state,
        gameIsRun: !state.gameIsRun,
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
