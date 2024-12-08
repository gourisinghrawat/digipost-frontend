import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as React from "react";
import { View } from "react-native";
import {Header} from "../../pagecomponents/Header";
import {HeroSection} from "../../pagecomponents/homeScreen/HeroSection";
import {SustainabilityCard} from "../../pagecomponents/homeScreen/SustainabilityCard";
import {ServiceGrid} from "../../pagecomponents/homeScreen/ServiceGrid";
import {DocumentSection} from "../../pagecomponents/homeScreen/DocumentSection";
import {FloatingActionButton} from "../../pagecomponents/homeScreen/FloatingActionButton";
import {BottomNavigation} from "../../pagecomponents/homeScreen/BottomNavigation";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <HeroSection />
      <SustainabilityCard />
      <DocumentSection />
      <ServiceGrid />
      <FloatingActionButton />
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 13,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
});
