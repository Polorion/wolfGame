const ChangePositionPlayer = "CHANGE_POSITION_PLAYER";
const setScore = "SET_SCORE";
const setMiss = "SET_MISS";
const setOwner = "SET_OWNER";
const gameIsRun = "GAME_IS_RUN";
const resetScore = "RESET_SCORE";
const setSpawn = "SET_SPAWN";
const setSpeedMove = "SET_SPEED_MOVE";
const startedGame = "STARTED_GAME";
export const movePositionPlayer = (position) => {
  return {
    type: ChangePositionPlayer,
    position,
  };
};
export const setSpeedSpawnEdd = (time) => {
  return {
    type: setSpawn,
    time,
  };
};
export const setSpeedMoveEgg = (time) => {
  return {
    type: setSpeedMove,
    time,
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
export const gameIsStarted = () => {
  return {
    type: startedGame,
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
  gameIsStart: false,
  positionPlayer: "1",
  score: 0,
  missedEggs: 0,
  owner: null,
  gameIsRun: false,
  speedEggSpawn: 3000,
  speedEggMove: 1000,
  typeGame: 1,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STARTED_GAME":
      return {
        ...state,
        gameIsStart: true,
      };
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
    case "SET_SPAWN":
      return {
        ...state,
        speedEggSpawn: action.time,
      };
    case "SET_SPEED_MOVE":
      return {
        ...state,
        speedEggMove: action.time,
      };

    default:
      return state;
  }
};

export default playerReducer;
