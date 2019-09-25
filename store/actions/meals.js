export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = mealId => ({
  type: TOGGLE_FAVORITE,
  payload: mealId
});

export const setFilters = filterSettings => ({
  type: SET_FILTERS,
  payload: filterSettings
});
