import React, {useEffect,useState} from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { IconButton } from "@/pagecomponents/dashboard/components/IconButton";
import { StatCard } from "@/pagecomponents/dashboard/components/StatCard";
import { Header } from "@/pagecomponents/Header";
import { usePostOffice } from "@/context/PostOfficeContext";
import { database } from "@/constants/firebase";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";

const statsData = [
  { title: "Statastics", icon: require("@/assets/images/graph.png") },
  { title: "Upload Data", icon: require("@/assets/images/upload.png") },
  { title: "Carbon Footprint", icon: require("@/assets/images/carbon.png") },
  { title: "Localized Eco Solutions", icon: require("@/assets/images/eco.png") },
];



const getrecordforsolutions = async (regionvalue, typevalue) => {
  try {
    console.log(regionvalue);
    console.log(typevalue);
    const dbRef = ref(database, "solutiontable");
    
    // Fetch all records in the solutiontable
    const allRecordsSnapshot = await get(dbRef);
    if (allRecordsSnapshot.exists()) {
      const allRecords = allRecordsSnapshot.val();
      console.log("All records in solutiontable:", allRecords);

      // Filter records by region and type of post office
      const filteredRecords = Object.values(allRecords).filter(record => 
        record.Region === regionvalue && record.Office_Type=== typevalue
      );

      if (filteredRecords.length > 0) {
        console.log("Matching records:", filteredRecords);
        return filteredRecords;
      } else {
        console.log("No matching records found");
        return null;
      }
    } else {
      console.log("No records found in solutiontable");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
  


    // const postOfficeRef = query(
    //   ref(database, 'postofficesdata'),
    //   orderByChild('Post_Office_ID'),
    //   equalTo(Number(postOfficeId.trim()))
    // );
    // const snapshot = await get(postOfficeRef);
    
    // const w = query(
    //   ref(database, 'solutiontable'),
    //   orderByChild('aqi_range'),
    //   equalTo(Number(aqiValue))
    // );
    // const snapshot = await get(w);
    // if (snapshot.exists()) {
    //   const data = snapshot.val();
    //   const [key, record] = Object.entries(data)[0];
    //   console.log("Record found:", record);
    //   return record.plants;
    // } else {
    //   console.log("No record found for the specified AQI");
    //   return null;
    // }



const getRecordByAQI = async (aqiValue) => {
  try {
    console.log(aqiValue)
    const dbRef = ref(database, "aqiplanttable");
    const allRecordsSnapshot = await get(dbRef);
    if (allRecordsSnapshot.exists()) {
      console.log("All records in aqiplanttable:", allRecordsSnapshot.val());
    } else {
      console.log("No records found in aqiplanttable");
    }


    // const postOfficeRef = query(
    //   ref(database, 'postofficesdata'),
    //   orderByChild('Post_Office_ID'),
    //   equalTo(Number(postOfficeId.trim()))
    // );
    // const snapshot = await get(postOfficeRef);
    const q = query(dbRef, orderByChild("aqi_range"), equalTo(aqiValue));
    
    const w = query(
      ref(database, 'aqiplanttable'),
      orderByChild('aqi_range'),
      equalTo(Number(aqiValue))
    );
    const snapshot = await get(w);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const [key, record] = Object.entries(data)[0];
      console.log("Record found:", record);
      return record.plants;
    } else {
      console.log("No record found for the specified AQI");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};





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
  const [region, setregion]=useState(null);
  const [type, settype]=useState(null);
  const [suggestedsolutions, setsuggestedsolutions]=useState(null);
  const [solutionrecord, setsolutionrecord]=useState(null);



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


      const region = nestedData['Region'];
      setregion(region);
      console.log(region)

      const type = nestedData['Type_of_Post_Office'];
      settype(type);
      console.log(type)


      const AQI = nestedData['Typical_AQI_Range'];
      setAQI(AQI);


      // const suggestedplants = nestedData['Suggested_Plants_for_Plantation'];
      // setsuggestedplants(suggestedplants);


      console.log(AQI)
      const extractedFields = Object.entries(nestedData).reduce((acc, [key, value]) => {
        acc[key] = value;
        console.log(`${key}: ${value}`);
        return acc;
      }, {});

      // You can now use extractedFields as needed
      console.log('Extracted Fields:', extractedFields);
      console.log((typeof AQI))
    } else {
      console.log('No post office data found');
    }
  }, [postOfficeData]);


  useEffect(() => {
    const fetchSuggestedPlants = async () => {
      console.log(AQI);
      const plants = await getRecordByAQI(AQI);
      if (plants) {
        setsuggestedplants(plants);
      }
    };
  
    if (AQI) {
      fetchSuggestedPlants();
    }
  }, [AQI]);
  

  useEffect(() => {
    const fetchsolutions = async () => {
      console.log(region);
      const solutions = await getrecordforsolutions(region,type);
      if (solutions) {
        console.log(solutions);
        setsuggestedsolutions(solutions);
        console.log(suggestedsolutions);
        console.log(4);
        const [key, record] = Object.entries(suggestedsolutions)[0];
        renderTable(record);

      }
    };
  
    if (region && type) {
      fetchsolutions();
    }
  }, [region,type]);
  
  


  const renderTable = (record) => {
    return (
      <View style={styles.tableContainer}>
        <Text style={styles.tableHeader}>Fuel Usage Solutions</Text>
        <Text style={styles.tableRow}>{record.Fuel_Usage_Solutions}</Text>
        
        <Text style={styles.tableHeader}>Community Engagement Actvities</Text>
        <Text style={styles.tableRow}>{record.Community_Engagement}</Text>

        <Text style={styles.tableHeader}>General Infrastrcture</Text>
        <Text style={styles.tableRow}>{record.General_Infrastructure_Checklist}</Text>
        
        <Text style={styles.tableHeader}>Water Usage Solutions</Text>
        <Text style={styles.tableRow}>{record.Water_Usage_Solutions}</Text>
        
        <Text style={styles.tableHeader}>Energy Solutions</Text>
        <Text style={styles.tableRow}>{record.Energy_Usage_Solutions}</Text>
        
      </View>
    );
  };


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

      <Text style={styles.title}>Suggested Solutions</Text>
      {Object.keys(suggestedsolutions).length > 0 && renderTable(suggestedsolutions[Object.keys(suggestedsolutions)[0]])}




    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  tableRow: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
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
