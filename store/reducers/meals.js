import { MEALS } from "../../data/testData";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
