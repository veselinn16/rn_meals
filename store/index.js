import { createStore, combineReducers } from "redux";
import mealsReducer from "./reducers/meals";

const rootReducer = combineReducers({
  meals: mealsReducer
});

export default createStore(rootReducer);
