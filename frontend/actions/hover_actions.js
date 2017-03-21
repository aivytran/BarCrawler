export const UPDATE_HOVER_BAR = "UPDATE_HOVER_BAR";
export const DELETE_HOVER_BAR = "DELETE_HOVER_BAR";

export const changeHoverBar = barName => ({
  type: UPDATE_HOVER_BAR,
  barName
});

export const deleteHoverBar = barName => ({
  type: DELETE_HOVER_BAR,
  barName
});
