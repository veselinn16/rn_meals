import { MEALS } from "../../data/testData";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      // if it returns -1 the meal is not part of the favorites
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.payload
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        return {
          ...state,
          // favoriteMeals: state.favoriteMeals.concat(state.meals[existingIndex])
          favoriteMeals: state.favoriteMeals.concat(
            state.meals.find(meal => meal.id === action.payload)
          )
        };
      }
    case SET_FILTERS:
      const filters = action.payload;

      const newFilteredMeals = state.meals.filter(meal => {
        if (filters.glutenFree && !meal.isGlutenFree) return false;
        if (filters.lactoseFree && !meal.isLactoseFree) return false;
        if (filters.vegetarian && !meal.isVegetarian) return false;
        if (filters.vegan && !meal.isVegan) return false;
        return true;
      });

      return { ...state, filteredMeals: newFilteredMeals };
    default:
      return state;
  }
};
