import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { StatCard } from "../../pagecomponents/postOffice/components/StatCard";
import { PlantSuggestionCard } from "../../pagecomponents/postOffice/components/PlantSuggestionCard";
import { Header } from "../../pagecomponents/Header";


const stats = [
  { icon: require("../../assets/images/trophy.png"), value: "123.78", label: "Rank" },
  { icon: require("../../assets/images/coin.png"), value: "123.78", label: "Score" },
  { icon: require("../../assets/images/aqi.png"), value: "123.78", label: "Aqi" },
];

const plantSuggestions = [
  { icon: require("../../assets/images/plant.png"), title: "Spider Plant" },
  { icon: require("../../assets/images/plant.png"), title: "Spider Plant" },
  { icon: require("../../assets/images/plant.png"), title: "Spider Plant" },
];

export default function PostOfficeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Header/>

      <View style={styles.mainContent}>
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>
            #1 Rank{"\n"}
            Indore Post Office:{"\n"}
            Leading the Way in Sustainability
          </Text>
          <View style={styles.dotIndicators}>
            {[...Array(6)].map((_, index) => (
              <View key={index} style={styles.dot} />
            ))}
          </View>
        </View>

        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </View>

        {/* <View style={styles.suggestionsContainer}>
          <PlantSuggestionCard/>
        </View> */}
      </View>

      <View style={styles.fabContainer}>
        
      </View>

      <View style={styles.bottomNav}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 67,
    height: 40,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 23,
  },
  mainContent: {
    height: 714,
    alignItems: "center",
  },
  titleSection: {
    width: "100%",
    alignItems: "center",
  },
  titleText: {
    padding: 24,
    paddingTop: 71,
    paddingBottom: 32,
    fontFamily: "Roboto",
    fontSize: 19,
    color: "#250000",
    fontWeight: "700",
  },
  dotIndicators: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
  },
  statsContainer: {
    flexDirection: "row",
    gap: 30,
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  suggestionsContainer: {
    width: "100%",
    padding: 10,
  },
  fabContainer: {
    position: "absolute",
    bottom: 84,
    alignSelf: "center",
  },
  fab: {
    backgroundColor: "#FFFFFF",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bottomNav: {
    flexDirection: "row",
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  bottomNavIcon: {
    width: 50,
  },
});
