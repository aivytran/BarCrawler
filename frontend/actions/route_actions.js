export const ADD_BAR = "ADD_BAR";
export const DELETE_BAR = "DELETE_BAR";
export const ADD_LEGS_TO_ROUTE = "ADD_LEGS_TO_ROUTE";

export const addBar = bar => ({
  type: ADD_BAR,
  bar
});

export const deleteBar = barName => ({
  type: DELETE_BAR,
  barName
});

export const addLegsToRoute = legs => ({
  type: ADD_LEGS_TO_ROUTE,
  legs
});
