

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
