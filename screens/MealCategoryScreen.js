import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/testData";

const MealCategoryScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMeal = itemData => {
    const { item } = itemData;

    return (
      <MealItem
        onSelectMeal={() => {
          navigation.navigate("MealDetails", { meal: item });
        }}
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        image={item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  }
});

export default MealCategoryScreen;
