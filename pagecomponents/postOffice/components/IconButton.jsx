return (


  <ScrollView style={styles.container}>
    <Header/>

    <HeroSection/>
    <View style={styles.mainContent}>
      {/* <View style={styles.titleSection}>
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
      </View> */}

      <View style={styles.statsContainer}>
      <StatCard icon={require("../../assets/images/trophy.png")}
        value={rankValue}
        label={"Rank"}
      />
      <StatCard icon={require("../../assets/images/coin.png")}
        value={Math.floor(score)}
        label={"Score"}
      />
      <StatCard icon={require("../../assets/images/aqi.png")}
        value={AQI}
        label={"AQI"}
      />
        
      </View>

      <View style={styles.suggestionsContainer}>
      <PlantSuggestionCard/><PlantSuggestionCard/><PlantSuggestionCard/>
      </View>
    </View>
    
    <View style={styles.suggestedPlantsCard}>
      <Text style={styles.suggestedPlantsTitle}>Suggested Plants</Text>
      <Text style={styles.suggestedPlantsText}>{suggestedplants}</Text>
    </View>
  </ScrollView>
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





return (


  <ScrollView style={styles.container}>
    <Header/>

    <HeroSection/>
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
      
    </View>
    
    <View style={styles.suggestedPlantsCard}>
      <Text style={styles.suggestedPlantsTitle}>Suggested Plants</Text>
      <Text style={styles.suggestedPlantsText}>{suggestedplants}</Text>
    </View>
  </ScrollView>
);

}


const StringToList = () => {
  const [inputString, setInputString] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const convertToList = () => {
    // Split the string by commas and trim any extra spaces
    const listItems = inputString.split(',').map(item => item.trim());
    setList(listItems);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputString} 
        onChange={handleInputChange} 
        placeholder="Enter comma-separated words" 
      />
      <button onClick={convertToList}></button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


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

