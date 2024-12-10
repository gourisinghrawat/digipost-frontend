import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth, database } from '@/constants/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation

export default function CitizenAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // For navigating to other screens

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Save user data in the Realtime Database
      const userRef = ref(database, `/citizens/${user.uid}`);
      await set(userRef, { email });

      console.log('Citizen signed up');
      alert('Sign Up Successful');
      navigation.navigate('home'); // Navigate to 'home' screen
    } catch (error) {
      console.error(error);
      alert(error.message); // Display error to the user
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Citizen signed in');
      alert('Sign In Successful');
      navigation.navigate('home'); // Navigate to 'home' screen
    } catch (error) {
      console.error(error);
      alert(error.message); // Display error to the user
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citizen Sign In / Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
