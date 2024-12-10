import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CircularButton } from "@/pagecomponents/employeePortal/components/CircularButton";
import { DotIndicator } from "@/pagecomponents/employeePortal/components/DotIndicator";
import { FeatureCard } from "@/pagecomponents/employeePortal/components/FeatureCard";
import { Header } from "@/pagecomponents/Header";
const navigationIcons = [
  { uri: "https://cdn.builder.io/api/v1/image/assets/...1" },
  { uri: "https://cdn.builder.io/api/v1/image/assets/...2" },
  { uri: "https://cdn.builder.io/api/v1/image/assets/...3" },
  { uri: "https://cdn.builder.io/api/v1/image/assets/...4" },
];

const bottomNavIcons = [
  { uri: "https://cdn.builder.io/api/v1/image/assets/...5" },
  { uri: "https://cdn.builder.io/api/v1/image/assets/...6" },
  { uri: "https://cdn.builder.io/api/v1/image/assets/...7" },
  { uri: "https://cdn.builder.io/api/v1/image/assets/...8" },
];

export default function EmployeePortal() {
  return (
    <View style={styles.container}>
      <Header/>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.employeeHighlight}>
          <Text style={styles.highlightText}>
            Gopal Verma
            {"\n"}
            was employee
            {"\n"}
            of the month
          </Text>
          <DotIndicator />
        </View>

        <FeatureCard title="Employee Tracker">
          <View style={styles.trackerContent}>
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/...tracker1" }}
              style={styles.trackerImage}
            />
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/...tracker2" }}
              style={styles.trackerIcon}
            />
          </View>
        </FeatureCard>

        <FeatureCard title="Mentor Program">
          <View style={styles.mentorContent} />
        </FeatureCard>

        <FeatureCard title="Employee Grievance">
          <View style={styles.grievanceContent} />
        </FeatureCard>
      </View>

      {/* Floating Button */}
      <View style={styles.floatingButton}>
        <CircularButton
          imageSource={{ uri: "https://cdn.builder.io/api/v1/image/assets/...button" }}
          size={55}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {bottomNavIcons.map((icon, index) => (
          <CircularButton key={index} imageSource={icon} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 67,
    height: 40, // Adjusted for better aspect ratio compatibility
  },
  navigationIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  employeeHighlight: {
    alignItems: "center",
    marginVertical: 20,
  },
  highlightText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  trackerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  trackerImage: {
    width: 100,
    height: 50,
  },
  trackerIcon: {
    width: 40,
    height: 40,
  },
  mentorContent: {
    height: 50,
    backgroundColor: "#f5f5f5",
  },
  grievanceContent: {
    height: 50,
    backgroundColor: "#f5f5f5",
  },
  floatingButton: {
    position: "absolute",
    bottom: 80,
    alignSelf: "center",
    zIndex: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#ddd",
  },
});
