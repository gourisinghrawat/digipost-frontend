// import * as React from "react";
// import { View, StyleSheet, Image } from "react-native";
// import { ImageBackground } from "react-native-web";

// export default function HeroContainer() {
//   return (
//     <View style={styles.heroContainer}>
//       <ImageBackground
//         resizeMode="cover"
//         fitContent
//         source={{
//           uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/e4a7700fbcd2ecc5d18f544fb2f095a2dcb0ad1d3073330609a396fe059a74ac?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
//         }}
//         style={styles.heroImage}
//       >
//         <View style={styles.imageOverlay} />
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   heroContainer: {
//     display: "flex",
//     marginLeft: "auto",
//     marginRight: "auto",
//     maxWidth: 480,
//     width: "100%",
//     paddingLeft: 24,
//     paddingRight: 24,
//     paddingTop: 321,
//     paddingBottom: 321,
//     flexDirection: "column",
//     overflow: "hidden",
//     alignItems: "stretch",
//     justifyContent: "center",
//     backgroundColor: "#EEC200"
//   },
//   heroImage: {
//     position: "relative",
//     display: "flex",
//     aspectRatio: "1.68",
//     paddingLeft: 68,
//     paddingRight: 68,
//     paddingTop: 46,
//     paddingBottom: 97,
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   imageOverlay: {
//     position: "relative",
//     display: "flex",
//     width: 22,
//     flexShrink: "0",
//     height: 60,
//   },
// });








//--------------------------------------------------------------------------------------
//CODE IF GRAPHS FOR PREDICTIVE ANALYTICS TO BE DISPLAYED
//--------------------------------------------------------------------------------------


// import React, { useState, useEffect } from "react";
// import { View, Image, ActivityIndicator, StyleSheet, Text } from "react-native";
// import axios from "axios";

// export default function Graphs() {
//   const [loading, setLoading] = useState(true);
//   const [plots, setPlots] = useState({});

//   useEffect(() => {
//     const fetchPlots = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/generate-forecast-plots");
//         setPlots(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching plots:", error);
//       }
//     };

//     fetchPlots();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading Forecast...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Forecast Plot</Text>
//       <Image source={{ uri: `http://localhost:5000/get-plot/${plots.forecast_plot.split("/").pop()}` }} style={styles.image} />
//       <Text style={styles.title}>Components Plot</Text>
//       <Image source={{ uri: `http://localhost:5000/get-plot/${plots.components_plot.split("/").pop()}` }} style={styles.image} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f9f9f9",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginVertical: 10,
//   },
//   image: {
//     width: "100%",
//     height: 300,
//     resizeMode: "contain",
//     marginBottom: 20,
//   },
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });







//--------------------------------------------------------------------------------------
//CODE IF POST OFFICE AI ANALYSIS ['Average_Sales', 'Growth_Rate', 'Performance'] TO BE DONE
//--------------------------------------------------------------------------------------




// import React, { useState, useEffect } from "react";
// import { View, Text, Image, ActivityIndicator, StyleSheet, Button } from "react-native";
// import axios from "axios";

// export default function AnalysisResults() {
//   const [loading, setLoading] = useState(true);
//   const [results, setResults] = useState(null);

//   const fetchAnalysisResults = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/run-ai-analysis");
//       setResults(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching analysis results:", error);
//     }
//   };

//   useEffect(() => {
//     fetchAnalysisResults();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading AI Analysis...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>AI Analysis Results</Text>
//       <Image
//         source={{ uri: `http://localhost:5000/get-output/${results.plot.split("/").pop()}` }}
//         style={styles.image}
//       />
//       <Button
//         title="Download CSV"
//         onPress={() => {
//           // Open CSV in a browser or download it
//           window.open(`http://localhost:5000/get-output/${results.csv.split("/").pop()}`);
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f9f9f9",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   image: {
//     width: "100%",
//     height: 300,
//     resizeMode: "contain",
//     marginBottom: 20,
//   },
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });








//--------------------------------------------------------------------------------------
//CODE IF VEHICLE SMTH SMTH TO BE DONE
//--------------------------------------------------------------------------------------




// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
// import axios from "axios";

// export default function VehicleMaintenance() {
//   const [vehicleData, setVehicleData] = useState({ mileage: "", engine_temp: "", oil_quality: "" });
//   const [result, setResult] = useState(null);

//   const handleTrainModel = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/train-vehicle-maintenance");
//       Alert.alert("Model Trained", `Metrics saved at: ${response.data.metrics}`);
//     } catch (error) {
//       console.error("Error training model:", error);
//       Alert.alert("Error", "Failed to train the model.");
//     }
//   };

//   const handlePredict = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/predict-vehicle-maintenance", {
//         vehicle_data: [parseFloat(vehicleData.mileage), parseFloat(vehicleData.engine_temp), parseFloat(vehicleData.oil_quality)]
//       });
//       setResult(response.data.prediction);
//     } catch (error) {
//       console.error("Error making prediction:", error);
//       Alert.alert("Error", "Failed to make a prediction.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Vehicle Maintenance Predictor</Text>
//       <Button title="Train Model" onPress={handleTrainModel} />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Mileage (km)"
//           keyboardType="numeric"
//           onChangeText={(text) => setVehicleData({ ...vehicleData, mileage: text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Engine Temperature (°C)"
//           keyboardType="numeric"
//           onChangeText={(text) => setVehicleData({ ...vehicleData, engine_temp: text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Oil Quality (1-10)"
//           keyboardType="numeric"
//           onChangeText={(text) => setVehicleData({ ...vehicleData, oil_quality: text })}
//         />
//       </View>
//       <Button title="Predict Maintenance" onPress={handlePredict} />
//       {result && <Text style={styles.result}>Prediction: {result}</Text>}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f9f9f9",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   result: {
//     marginTop: 20,
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "green",
//   },
// });






//--------------------------------------------------------------------------------------
//CODE IF PACKAGING MATERIAL PRED TO BE DONE
//--------------------------------------------------------------------------------------


import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";

export default function PackagingPrediction() {
  const [itemType, setItemType] = useState("");
  const [sustainabilityScore, setSustainabilityScore] = useState("");
  const [result, setResult] = useState(null);

  const handleTrainModel = async () => {
    try {
      const response = await axios.get("http://localhost:5000/train-packaging-model");
      Alert.alert("Model Trained", response.data.status);
    } catch (error) {
      console.error("Error training model:", error);
      Alert.alert("Error", "Failed to train the model.");
    }
  };

  const handlePredict = async () => {
    try {
      const response = await axios.post("http://localhost:5000/predict-packaging", {
        item_type: itemType,
        sustainability_score: parseInt(sustainabilityScore),
      });
      setResult(response.data.predicted_packaging);
    } catch (error) {
      console.error("Error making prediction:", error);
      Alert.alert("Error", "Failed to make a prediction.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Packaging Prediction</Text>
      <Button title="Train Model" onPress={handleTrainModel} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Item Type (e.g., electronics)"
          value={itemType}
          onChangeText={(text) => setItemType(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sustainability Score (1-10)"
          keyboardType="numeric"
          value={sustainabilityScore}
          onChangeText={(text) => setSustainabilityScore(text)}
        />
      </View>
      <Button title="Predict Packaging" onPress={handlePredict} />
      {result && <Text style={styles.result}>Suggested Packaging: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});
