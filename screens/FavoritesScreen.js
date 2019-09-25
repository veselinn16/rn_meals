import React from "react";
import { View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import StyledText from "../components/StyledText";

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if (!favMeals.length) {
    return (
      <View style={styles.content}>
        <StyledText>No Favorite Meals Selected!</StyledText>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          size={23}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FavoritesScreen;
