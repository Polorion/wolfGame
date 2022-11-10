const changeActiveEgg = "CHANGE_ACTIVE_EGG";
const eggStart = "EGG_START";

export const aggEgg = () => {
  return {
    type: eggStart,
  };
};
export const moveEgg = () => {
  return {
    type: changeActiveEgg,
  };
};
const initialState = {
  chickenTopLeft: [
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
  activeEggs: [],
};

const chickenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EGG_START": {
      return {
        ...state,
        activeEggs: [0, ...state.activeEggs],
      };
    }
    case "CHANGE_ACTIVE_EGG": {
      return {
        ...state,
        activeEggs: state.activeEggs
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
export default chickenReducer;
