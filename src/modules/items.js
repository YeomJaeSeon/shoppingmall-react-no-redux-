import data from "../data/data.json";

// Actions
const ACTIONS = {
  SHOW_ALL: "SHOW_ALL",
  SELECT_SKIRT: "SELECT_SKIRT",
  SELECT_TSHIRT: "SELECT_TSHIRT",
  SELECT_PANTS: "SELECT_PANTS",
  SELECT_BLUE: "SELECT_BLUE",
  SELECT_YELLOW: "SELECT_YELLOW",
  SELECT_PINK: "SELECT_PINK",
};

// Action Creators
export const showAllAction = () => {
  return {
    type: ACTIONS.SHOW_ALL,
  };
};
export const selectSkirtAction = () => {
  return {
    type: ACTIONS.SELECT_SKIRT,
  };
};
export const selectTshirtAction = () => {
  return {
    type: ACTIONS.SELECT_TSHIRT,
  };
};
export const selectPantsAction = () => {
  return {
    type: ACTIONS.SELECT_PANTS,
  };
};
export const selectBlueAction = () => {
  return {
    type: ACTIONS.SELECT_BLUE,
  };
};
export const selectYellowAction = () => {
  return {
    type: ACTIONS.SELECT_YELLOW,
  };
};
export const selectPinkAction = () => {
  return {
    type: ACTIONS.SELECT_PINK,
  };
};

const initialState = { content: data.items, display: data.items };

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_ALL:
      return { content: state.content, display: state.content };
    case ACTIONS.SELECT_SKIRT:
      return {
        content: state.content,
        display: state.content.filter((value) => value.type === "skirt"),
      };
    case ACTIONS.SELECT_TSHIRT:
      return {
        content: state.content,
        display: state.content.filter((value) => value.type === "tshirt"),
      };
    case ACTIONS.SELECT_PANTS:
      return {
        content: state.content,
        display: state.content.filter((value) => value.type === "pants"),
      };
    case ACTIONS.SELECT_BLUE:
      return {
        content: state.content,
        display: state.content.filter((value) => value.color === "blue"),
      };
    case ACTIONS.SELECT_YELLOW:
      return {
        content: state.content,
        display: state.content.filter((value) => value.color === "yellow"),
      };
    case ACTIONS.SELECT_PINK:
      return {
        content: state.content,
        display: state.content.filter((value) => value.color === "pink"),
      };
    default:
      return state;
  }
};

export default itemsReducer;
