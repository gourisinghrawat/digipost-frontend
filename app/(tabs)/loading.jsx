import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ImageBackground } from "react-native-web";

export default function HeroContainer() {
  return (
    <View style={styles.heroContainer}>
      <ImageBackground
        resizeMode="cover"
        fitContent
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/e4a7700fbcd2ecc5d18f544fb2f095a2dcb0ad1d3073330609a396fe059a74ac?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
        }}
        style={styles.heroImage}
      >
        <View style={styles.imageOverlay} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 321,
    paddingBottom: 321,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#EEC200"
  },
  heroImage: {
    position: "relative",
    display: "flex",
    aspectRatio: "1.68",
    paddingLeft: 68,
    paddingRight: 68,
    paddingTop: 46,
    paddingBottom: 97,
    flexDirection: "column",
    alignItems: "center",
  },
  imageOverlay: {
    position: "relative",
    display: "flex",
    width: 22,
    flexShrink: "0",
    height: 60,
  },
});
