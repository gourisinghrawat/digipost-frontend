import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export const EventCard = ({ title, description }) => {
  return (
    <View style={styles.eventContainer}>
      <View style={styles.eventHeader}>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.registerButton}>Register Now</Text>
      </View>
      <Text style={styles.eventDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    borderRadius: 20,
    minHeight: 145,
    width: "100%",
    padding: 20,
    paddingTop: 78,
  },
  eventHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eventTitle: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "700",
  },
  registerButton: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "500",
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  eventDescription: {
    color: "#FFF",
    fontSize: 8,
    marginTop: 4,
  },
});
