import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "./MealItem";

const MealList = ({ listData, navigation }) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const renderMeal = itemData => {
    const { item } = itemData;
    const isFavoriteMeal = favoriteMeals.find(meal => meal === item);

    return (
      <MealItem
        onSelectMeal={() => {
          navigation.navigate("MealDetails", {
            meal: item,
            isFav: isFavoriteMeal
          });
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
        data={listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  }
});

export default MealList;
