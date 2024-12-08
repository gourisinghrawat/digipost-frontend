import { StyleSheet } from "react-native";
import * as React from "react";
import { ScrollView, View } from "react-native";

import { Header } from "../../pagecomponents/Header";
import { HeroSection } from "../../pagecomponents/homeScreen/HeroSection";
import { SustainabilityCard } from "../../pagecomponents/homeScreen/SustainabilityCard";
import { ServiceGrid } from "../../pagecomponents/homeScreen/ServiceGrid";
import { DocumentSection } from "../../pagecomponents/homeScreen/DocumentSection";
import { FloatingActionButton } from "../../pagecomponents/homeScreen/FloatingActionButton";
import { BottomNavigation } from "../../pagecomponents/homeScreen/BottomNavigation";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
      >
        <Header />
        <HeroSection />
        <SustainabilityCard />
        <DocumentSection />
        <ServiceGrid />
        <FloatingActionButton />
      </ScrollView>

      {/* Bottom Navigation (Fixed at the Bottom) */}
      <View style={styles.bottomNavigation}>
        <BottomNavigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff", // Adjust to match your app's theme
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    alignItems: "center", // Center align the content
    paddingVertical: 20,
  },
  bottomNavigation: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    backgroundColor: "#fff", // Match your app's footer background
    paddingVertical: 10, // Add spacing around the navigation
  },
});
