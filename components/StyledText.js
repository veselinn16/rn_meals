import React from "react";
import { Text, StyleSheet } from "react-native";

const StyledText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    fontSize: 16
  }
});

export default StyledText;
