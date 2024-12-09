import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { ImageBackground } from "react-native-web";

export const RoleCard = ({ title, description, imageUrl }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      fitContent
      source={{ uri: imageUrl }}
      style={styles.roleCardContainer}
    >
     
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  roleCardContainer: {
    borderRadius: 20,
    position: "relative",
    display: "flex",
    aspectRatio: "1",
    minHeight: 150,
    width: 150,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 85,
    paddingBottom: 20,
    flexDirection: "column",
    alignItems: "stretch",
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: "700",
    position: "relative",
  },
  roleDescription: {
    textOverflow: "ellipsis",
    fontSize: 8,
    fontWeight: "400",
    position: "relative",
    marginTop: 4,
  },
});
