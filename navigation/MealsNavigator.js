import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
// import { createTabsNavigator } from "react-navigation-tabs";
// import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealCategoryScreen from "../screens/MealCategoryScreen";
import MealDetails from "../screens/MealDetailsScreen";

import { Platform } from "react-native";

import Colors from "../constants/colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories"
      }
    },
    MealCategories: MealCategoryScreen,
    MealDetails: MealDetails
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary
    }
  }
);

export default createAppContainer(MealsNavigator);
