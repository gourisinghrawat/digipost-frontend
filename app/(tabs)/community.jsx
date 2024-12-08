import { StyleSheet, Image, Platform } from 'react-native';
import * as React from "react";
import { View, Text } from "react-native";
import { Header } from "../../pagecomponents/Header";
import { CategorySection } from "../../pagecomponents/CategorySection";
import {
  quizGamesData,
  ngoData,
  communityData,
  stateData,
} from "../../data/ExploreData";
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function CommunityScreen() {
  return (
    <View style={styles.screenContainer}>
      <Header />

      <View style={styles.mainContent}>
        <CategorySection
          title="Quizzes & Games"
          data={quizGamesData}
          imageStyle={styles.gameImage}
        />

        <CategorySection
          title="Connect with a cause"
          data={ngoData}
          imageStyle={styles.ngoImage}
        />

        <CategorySection
          title="Community"
          data={communityData}
          imageStyle={styles.communityImage}
        />

        <CategorySection
          title="Browse by state"
          data={stateData}
          imageStyle={styles.stateImage}
        />

        <Text style={styles.helplineText}>
          Toll Free Enquiry Helpline:{"\n"}
          98XXX-XXXXX{"\n"}
          9:00 AM - 6:00 PM{"\n"}
          (Except Sundays & Gazetted Holidays){"\n"}
          IVRS facility is available 24*7*365
        </Text>
      </View>

      <View style={styles.floatingButton}>
        <View style={styles.buttonInner}>
          <View style={styles.buttonIconContainer}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/9876eab1605c8015c58d234775625f6064ce58b505996a4480689fbdf47876a2?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
              }}
              style={styles.buttonIcon}
            />
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 79,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
  mainContent: {
    display: "flex",
    minHeight: 717,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
  },
  gameImage: {
    borderRadius: 20,
  },
  ngoImage: {
    borderRadius: 1000,
  },
  communityImage: {
    borderRadius: 100,
  },
  stateImage: {
    borderRadius: 20,
    aspectRatio: 1.6,
    minHeight: 50,
  },
  helplineText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    fontSize: 11,
    fontWeight: "500",
    marginTop: 10,
  },
  floatingButton: {
    zIndex: 10,
    display: "flex",
    marginTop: -86,
    width: 74,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonInner: {
    borderRadius: 100,
    display: "flex",
    width: "100%",
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  buttonIconContainer: {
    display: "flex",
    minHeight: 35,
    width: "100%",
    padding: 6,
    alignItems: "center",
    gap: 10,
    overflow: "hidden",
    justifyContent: "center",
  },
  buttonIcon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    width: 24,
    aspectRatio: 1,
  },
});