import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/testData";

const MealCategoryScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

MealCategoryScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  );

  return {
    headerTitle: selectedCategory.title
  };
};

export default MealCategoryScreen;
