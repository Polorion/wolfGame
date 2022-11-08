const MoveEggs = "MOVE_EGGS";
const StopTop = "STOP_TOP";
const UpActiveEggs = "UP_ACTIVE_EGGS";
const ChangePosition = "CHANGE_POSITION";

export const movingEggs = () => {
  return {
    type: MoveEggs,
  };
};
export const stopTop = () => {
  return {
    type: StopTop,
  };
};
export const upActiveAggs = () => {
  return {
    type: UpActiveEggs,
  };
};

export const movePosition = (position) => {
  return {
    type: ChangePosition,
    position,
  };
};

const initionalState = {
  eggs: [
    {
      id: 1,
      top: 20,
      left: 30,
      active: false,
    },
    { id: 2, top: 30, left: 80, active: false },
    { id: 3, top: 40, left: 130, active: false },
    {
      id: 4,
      top: 50,
      left: 190,
      active: false,
    },
    { id: 5, top: 400, left: 190, active: false },
  ],
  activeEggs: 0,
  start: true,
  position: "1",
};

const MainRecucer = (state = initionalState, action) => {
  switch (action.type) {
    case "CHANGE_POSITION":
      return {
        ...state,
        position: action.position,
      };
    case "UP_ACTIVE_EGGS":
      return { ...state, activeEggs: state.activeEggs + 1 };
    case "STOP_TOP":
      return {
        ...state,
        start: false,
      };
    case "MOVE_EGGS": {
      return {
        ...state,

        eggs: state.eggs.map((el) => {
          if (el.id === state.activeEggs) {
            return { ...el, active: true };
          } else {
            return { ...el, active: false };
          }
        }),
      };
    }
    default:
      return state;
  }
};
export default MainRecucer;
