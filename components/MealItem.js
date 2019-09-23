import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from "react-native";

const MealItem = ({
  title,
  onSelectMeal,
  duration,
  complexity,
  affordability,
  image
}) => (
  <TouchableOpacity style={styles.mealItem} onPress={onSelectMeal}>
    <View stlye={{ ...styles.row, ...styles.mealHeader }}>
      <ImageBackground source={{ uri: image }} style={styles.bgImage}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </View>
    {/* MAKE THIS WORK */}
    {/* <View stlye={{ backgroundColor: "red" }}> */}
    {/* <Text>{duration}m</Text> */}
    {/* <Text>{complexity.toUpperCase()}</Text> */}
    {/* <Text>{affordability.toUpperCase()}</Text> */}
    {/* </View> */}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  row: {
    flexDirection: "row"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "#fff",
    textAlign: "center"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetails: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  }
});

export default MealItem;
