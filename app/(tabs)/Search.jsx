import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { database } from "@/constants/firebase";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";

const DashboardScreen = () => {
  const [postOfficeId, setPostOfficeId] = useState(""); // User input
  const [postOfficeData, setPostOfficeData] = useState(null); // Data to display
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Function to fetch post office details by ID
  const getPostOfficeDetails = async () => {
    if (!postOfficeId.trim()) {
      Alert.alert("Please enter a Post Office ID.");
      return;
    }

    setIsLoading(true);
    try {
      const postOfficeRef = query(
        ref(database, "postofficesdata"),
        orderByChild("Post_Office_ID"),
        equalTo(Number(postOfficeId.trim()))
      );

      const snapshot = await get(postOfficeRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const [key, record] = Object.entries(data)[0]; // Get the first record
        setPostOfficeData(record); // Set the state with the fetched record
      } else {
        Alert.alert("No Post Office found for the provided ID.");
      }
    } catch (error) {
      Alert.alert("Error fetching data:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Post Office Search</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.input}
        placeholder="Enter Post Office ID"
        value={postOfficeId}
        onChangeText={setPostOfficeId}
        keyboardType="numeric"
      />

      <Button title="Search" onPress={getPostOfficeDetails} disabled={isLoading} />

      {/* Loading Spinner */}
      {isLoading && <Text>Loading...</Text>}

      {/* Display Post Office Data */}
      {postOfficeData && (
        <View style={styles.detailsContainer}>
          {Object.entries(postOfficeData).map(([key, value], index) => (
            <Text key={index} style={styles.detail}>
              {key}: {value}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DashboardScreen;

