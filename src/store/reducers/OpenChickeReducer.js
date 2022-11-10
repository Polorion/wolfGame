const moveOpen = "MOVE_OPEN";
const openStart = "OPEN_START";

export const moveOpenEgg = () => {
  return {
    type: moveOpen,
  };
};
export const startOpenEgg = () => {
  return {
    type: openStart,
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
  openChickenPosition: [1],
};

const openChickenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_START": {
      return {
        ...state,
        openChickenPosition: [1, ...state.openChickenPosition],
      };
    }
    case "MOVE_OPEN": {
      return {
        ...state,
        openChickenPosition: state.openChickenPosition
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
