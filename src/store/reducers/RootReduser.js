const ChangePositionWolf = "CHANGE_POSITION";
const ChangePositionEggs = "CHANGE_POSITION_EGGS";
const AddEggs = "ADD_EGGS";
const DeleteEggs = "DELETE_EGGS";
const MoveAllEggs = "MOVE_ALL_EGGS";
const startGameOrStop = "GAME_START_OR_STOP";
const setScore = "SET_SCORE";

export const AddEggsMore = () => {
  return {
    type: AddEggs,
  };
};
export const upScore = () => {
  return {
    type: setScore,
  };
};
export const gameStartOrStop = () => {
  return {
    type: startGameOrStop,
  };
};
export const MoveEggsAll = () => {
  return {
    type: MoveAllEggs,
  };
};
export const moveEggs = (id) => {
  return {
    type: ChangePositionEggs,
    id,
  };
};
export const deleteEgg = (id) => {
  return {
    type: DeleteEggs,
    id,
  };
};

export const movePosition = (position) => {
  return {
    type: ChangePositionWolf,
    position,
  };
};

const initionalState = {
  leftTopEggs: [],
  position: "1",
  start: false,
  score: 0,
};

const MainRecucer = (state = initionalState, action) => {
  switch (action.type) {
    case "CHANGE_POSITION":
      return {
        ...state,
        position: action.position,
      };
    case "SET_SCORE":
      return {
        ...state,
        score: state.score + 1,
      };
    case "GAME_START_OR_STOP":
      return {
        ...state,
        start: !state.start,
      };
    case "MOVE_ALL_EGGS":
      return {
        ...state,
        leftTopEggs: state.leftTopEggs.map((el) => {
          return { ...el, position: el.position + 1 };
        }),
      };
    case "DELETE_EGGS":
      return {
        ...state,
        leftTopEggs: state.leftTopEggs.filter((el) => el.id !== action.id),
      };
    case "ADD_EGGS":
      return {
        ...state,
        leftTopEggs: [
          ...state.leftTopEggs,
          { id: state.leftTopEggs.length + 1, position: 1 },
        ],
      };
    case "CHANGE_POSITION_EGGS":
      return {
        ...state,
        leftTopEggs: state.leftTopEggs.map((el) => {
          console.log(el.id, action.id);
          return el.id === action.id
            ? { ...el, position: el.position + 1 }
            : { ...el };
        }),
      };

    default:
      return state;
  }
};
export default MainRecucer;
