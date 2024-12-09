import * as React from "react";
import { Image, StyleSheet } from "react-native";

export const NavigationIcon = ({ source }) => {
  return <Image resizeMode="contain" source={source} style={styles.navIcon} />;
};

const styles = StyleSheet.create({
  navIcon: {
    width: 24,
    aspectRatio: 1,
    alignSelf: "stretch",
  },
});
