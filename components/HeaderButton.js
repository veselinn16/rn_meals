import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import { Platform } from "react-native";

const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={26}
    color={Platform.OS === "android" ? "#fff" : Colors.primary}
  />
);

export default CustomHeaderButton;
