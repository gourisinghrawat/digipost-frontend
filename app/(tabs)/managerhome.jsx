import React, {useEffect,useState} from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { IconButton } from "@/pagecomponents/dashboard/components/IconButton";
import { StatCard } from "@/pagecomponents/dashboard/components/StatCard";
import { Header } from "@/pagecomponents/Header";
import { usePostOffice } from "@/context/PostOfficeContext";


const statsData = [
  { title: "Statastics", icon: require("@/assets/images/graph.png") },
  { title: "Upload Data", icon: require("@/assets/images/upload.png") },
  { title: "Carbon Footprint", icon: require("@/assets/images/carbon.png") },
  { title: "Localized Eco Solutions", icon: require("@/assets/images/eco.png") },
];

const bottomNavIcons = [
  { source: require("@/assets/icons/mapicon.png") },
  { source: require("@/assets/icons/mapicon.png") },
  { source: require("@/assets/icons/mapicon.png") },
  { source: require("@/assets/icons/mapicon.png") },
];

export default function DashboardScreen() {
  const { postOfficeId, postOfficeData } = usePostOffice();
  const [rankValue, setRankValue] = useState(null);
  const [score, setscore]=useState(null);
  const [AQI, setAQI]=useState(null);
  const [suggestedplants, setsuggestedplants]=useState(null);


  useEffect(() => {
    if (postOfficeData) {
      console.log('Post Office Data:', JSON.stringify(postOfficeData, null, 2));
      console.log('Post Office ID:', postOfficeId);

      // Extract the dynamic key
      const dynamicKey = Object.keys(postOfficeData)[0];
      const nestedData = postOfficeData[dynamicKey];

      // Access the Rank value
      const rank = nestedData['Rank'];
      console.log('Rank:', rank);
      setRankValue(rank);

      const score = nestedData['Score'];
      setscore(score);


      const AQI = nestedData['Typical_AQI_Range'];
      setAQI(AQI);


      const suggestedplants = nestedData['Suggested_Plants_for_Plantation'];
      setsuggestedplants(suggestedplants);


      console.log(AQI)
      const extractedFields = Object.entries(nestedData).reduce((acc, [key, value]) => {
        acc[key] = value;
        console.log(`${key}: ${value}`);
        return acc;
      }, {});

      // You can now use extractedFields as needed
      console.log('Extracted Fields:', extractedFields);
    } else {
      console.log('No post office data found');
    }
  }, [postOfficeData]);
  
  return (

    <ScrollView style={styles.container}>
      <Header/>

      <View style={styles.profileSection}>
        <View style={styles.profileBanner}>
          <Text style={styles.profileText}>
            gopal Verma{"\n"}was employee{"\n"}of the month
          </Text>
          <View style={styles.rankContainer}>
          <Text style={styles.rankText}>
              Rank: {rankValue}
            </Text>
            </View>
            <View style={styles.rankContainer}>
          <Text style={styles.rankText}>
              Score: {score}
            </Text>
            </View>

            <View style={styles.rankContainer}>
          <Text style={styles.rankText}>
              AQI: {AQI}
            </Text>
            </View>

            

        </View>
        <View style={styles.dotIndicators}>
          {[...Array(6)].map((_, index) => (
            <View key={index} style={styles.dot} />
          ))}
        </View>
      </View>
      <Header/>
      <View style={styles.statsGrid}>
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </View>

      <View style={styles.floatingButton}>
        <View style={styles.floatingButtonInner}>
          <IconButton source={require("@/assets/images/logo.png")} size={24} />
        </View>
      </View>

      <View style={styles.bottomNav}>
        {bottomNavIcons.map((icon, index) => (
          <IconButton key={index} {...icon} size={30} />
        ))}
      </View>
      
      <View style={styles.suggestedPlantsCard}>
        <Text style={styles.suggestedPlantsTitle}>Suggested Plants</Text>
        <Text style={styles.suggestedPlantsText}>{suggestedplants}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  rankText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    width: 67,
    height: 40,
  },
  navigationIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 23,
  },
  profileSection: {
    width: "100%",
  },
  profileBanner: {
    aspectRatio: 1.69,
    padding: 24,
    paddingTop: 99,
    backgroundColor: "#000",
  },
  profileText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 23,
    color: "#EEE",
    fontWeight: "700",
  },
  dotIndicators: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    marginTop: 10,
  },
  floatingButton: {
    position: "absolute",
    bottom: 70,
    alignSelf: "center",
    zIndex: 10,
  },
  floatingButtonInner: {
    backgroundColor: "#fff",
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  rankContainer: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
});
