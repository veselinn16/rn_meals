import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  Button,
  StyleSheet
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import StyledText from "../components/StyledText";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <StyledText>{props.children}</StyledText>
    </View>
  );
};

const CategoriesScreen = ({ navigation }) => {
  const meal = navigation.getParam("meal");

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

CategoriesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: navigationData.navigation.getParam("meal").title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("marked as fav")}
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

export default CategoriesScreen;
