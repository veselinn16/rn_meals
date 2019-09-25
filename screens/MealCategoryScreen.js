import React from "react";
import { View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import StyledText from "../components/StyledText";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/testData";

const MealCategoryScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (displayedMeals.length < 1) {
    return (
      <View style={styles.content}>
        <StyledText>No meals match the filter criteria!</StyledText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

export default MealCategoryScreen;
