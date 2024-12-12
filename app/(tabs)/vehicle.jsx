


import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";

export default function VehicleMaintenance() {
  const [vehicleData, setVehicleData] = useState({ mileage: "", engine_temp: "", oil_quality: "" });
  const [result, setResult] = useState(null);

  const handleTrainModel = async () => {
    try {
      const response = await axios.get("http://localhost:5000/train-vehicle-maintenance");
      Alert.alert("Model Trained", `Metrics saved at: ${response.data.metrics}`);
    } catch (error) {
      console.error("Error training model:", error);
      Alert.alert("Error", "Failed to train the model.");
    }
  };

  const handlePredict = async () => {
    try {
      const response = await axios.post("http://localhost:5000/predict-vehicle-maintenance", {
        vehicle_data: [parseFloat(vehicleData.mileage), parseFloat(vehicleData.engine_temp), parseFloat(vehicleData.oil_quality)]
      });
      setResult(response.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error);
      Alert.alert("Error", "Failed to make a prediction.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicle Maintenance Predictor</Text>
      <Button title="Train Model" onPress={handleTrainModel} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mileage (km)"
          keyboardType="numeric"
          onChangeText={(text) => setVehicleData({ ...vehicleData, mileage: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Engine Temperature (°C)"
          keyboardType="numeric"
          onChangeText={(text) => setVehicleData({ ...vehicleData, engine_temp: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Oil Quality (1-10)"
          keyboardType="numeric"
          onChangeText={(text) => setVehicleData({ ...vehicleData, oil_quality: text })}
        />
      </View>
      <Button title="Predict Maintenance" onPress={handlePredict} />
      {result && <Text style={styles.result}>Prediction: {result}</Text>}
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
