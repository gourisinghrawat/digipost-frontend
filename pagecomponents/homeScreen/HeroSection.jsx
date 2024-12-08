import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export function HeroSection() {
  const dots = Array(6).fill(null);

  return (
    <View style={styles.heroContainer}>
      <View style={styles.heroContent}>
        <Text style={styles.heroText}>
          From Heart to Home, the Sustainable Way.
        </Text>
        <View style={styles.dotContainer}>
          {dots.map((_, index) => (
            <View key={index} style={styles.dot} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    alignSelf: "stretch",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  heroContent: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    minHeight: 231,
    width: "100%",
    padding: 24,
    paddingTop: 99,
    paddingBottom: 32,
  },
  heroText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 28,
    color: "#EEE",
    fontWeight: "700",
  },
  dotContainer: {
    alignSelf: "center",
    display: "flex",
    marginTop: 10,
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  dot: {
    borderRadius: 50,
    width: 8,
    height: 8,
    backgroundColor: "#FFF",
  },
});
