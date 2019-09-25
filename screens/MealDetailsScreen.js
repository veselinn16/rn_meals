import React, { useCallback, useEffect } from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import StyledText from "../components/StyledText";
import { toggleFavorite } from "../store/actions/meals";
import { useDispatch, useSelector } from "react-redux";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <StyledText>{props.children}</StyledText>
    </View>
  );
};

const MealDetailsScreen = ({ navigation }) => {
  const meal = navigation.getParam("meal");
  const isAfavoriteMeal = useSelector(state =>
    state.meals.favoriteMeals.find(curMeal => curMeal === meal)
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(meal.id));
  }, [dispatch, meal.id]);

  useEffect(() => {
    navigation.setParams({
      toggleFav: toggleFavoriteHandler
    });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFav: isAfavoriteMeal });
  }, [isAfavoriteMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      {/* <View style={styles.detailsContainer}> */}
      {/* <StyledText>{meal.duration}m</StyledText>
        <StyledText>{meal.complexity.toUpperCase()}</StyledText>
        <StyledText>{meal.affordability.toUpperCase()}</StyledText> */}
      {/* </View> */}
      <View style={{}}>
        <Text style={styles.title}>Ingredients</Text>
        {meal.ingredients.map((ingredient, i) => (
          <ListItem key={i}>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {meal.steps.map((step, i) => (
          <ListItem key={i}>
            {i + 1}. {step}
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const favHandler = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: navigationData.navigation.getParam("meal").title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={favHandler}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  detailsContainer: {
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15
  },
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    textAlign: "center"
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailsScreen;
