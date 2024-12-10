import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const images = [
    require("../../assets/images/slider1.png"),
    require("../../assets/images/slider2.png"),
    // Add more images as needed
  ];

  const dots = Array(images.length).fill(null);

  // Function to handle the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <View style={styles.heroContainer}>
      <View style={styles.heroContent}>
        <Image source={images[currentIndex]} style={styles.image} />
        <View style={styles.dotContainer}>
          {dots.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={prevImage} style={styles.navButton}>
            <Text style={styles.navText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={nextImage} style={styles.navButton}>
            <Text style={styles.navText}>{">"}</Text>
          </TouchableOpacity>
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
    position: "relative",
  },
  image: {
    height: 390,
    width: 230,
    borderRadius: 20,
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
  activeDot: {
    backgroundColor: "#FF5733", // Active dot color
  },
  navigation: {
    position: "absolute",
    top: "50%",
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 30,
  },
  navText: {
    color: "#FFF",
    fontSize: 24,
  },
});
