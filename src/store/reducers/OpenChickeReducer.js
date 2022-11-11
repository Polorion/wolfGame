const moveOpen = "MOVE_OPEN";
const openStart = "OPEN_START";

export const moveOpenEgg = () => {
  return {
    type: moveOpen,
  };
};
export const startOpenEgg = (from) => {
  return {
    type: openStart,
    from,
  };
};

const initialState = {
  openChickenLeft: [
    {
      id: 1,
      position: 1,
    },
    {
      id: 2,
      position: 2,
    },
    {
      id: 3,
      position: 3,
    },
    {
      id: 4,
      position: 4,
    },
    {
      id: 5,
      position: 5,
    },
  ],
  openChickenPositionLeft: [],
  openChickenRight: [
    {
      id: 1,
      position: 1,
    },
    {
      id: 2,
      position: 2,
    },
    {
      id: 3,
      position: 3,
    },
    {
      id: 4,
      position: 4,
    },
    {
      id: 5,
      position: 5,
    },
  ],
  openChickenPositionRight: [],
};

const openChickenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_START": {
      return {
        ...state,
        [action.from]: [1, ...state[action.from]],
      };
    }
    case "MOVE_OPEN": {
      return {
        ...state,
        openChickenPositionLeft: state.openChickenPositionLeft
          .map((el) => {
            return el + 1;
          })
          .filter((el) => {
            return el < 6;
          }),
        openChickenPositionRight: state.openChickenPositionRight
          .map((el) => {
            return el + 1;
          })
          .filter((el) => {
            return el < 6;
          }),
      };
    }
    default:
      return state;
  }
};
export default openChickenReducer;
