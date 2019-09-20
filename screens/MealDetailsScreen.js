import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Meal Details screen</Text>
      <Button
        title="Go back to categories"
        onPress={() => navigation.popToTop()}
      />
      <Text>{navigation.getParam("meal").title}</Text>
    </View>
  );
};

CategoriesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: navigationData.navigation.getParam("meal").title
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
