import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { HeaderIcons } from "@/pagecomponents/orders/components/HeaderIcons";
import { NavigationBar } from "@/pagecomponents/orders/components/NavigationBar";
import { OrderDetails } from "@/pagecomponents/orders/components/OrderDetails";
import { SustainabilityNotice } from "@/pagecomponents/orders/components/SustainabilityNotice";

export default function OrderScreen() {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/358b848687af257d9afef9e80b28f819061e85c5e299a2be191bdb8591268554?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
            }}
            style={styles.logo}
          />
          <HeaderIcons />
        </View>

        <View style={styles.orderSection}>
          <View style={styles.orderHeader}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/210b2289526503470a4c510058a451c492ef315df578d17735fec64d6767fdc9?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
              }}
              style={styles.orderIcon}
            />
            <Text style={styles.orderTitle}>order</Text>
          </View>

          <View style={styles.orderContent}>
            <OrderDetails
              orderNo="1234"
              address="16 sf mig Flats Cblock Rishi Nagar"
              expectedDate="12 Dec 2024"
              expectedTime="2:00pm"
            />
            <SustainabilityNotice />
          </View>
        </View>

        <NavigationBar />
      </View>

      <View style={styles.floatingButtonContainer}>
        <View style={styles.floatingButton}>
          <View style={styles.floatingButtonContent}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/9876eab1605c8015c58d234775625f6064ce58b505996a4480689fbdf47876a2?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
              }}
              style={styles.floatingButtonIcon}
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
    marginHorizontal: "auto",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 79,
    overflow: "hidden",
  },
  mainContent: {
    minHeight: 844,
    width: "100%",
  },
  header: {
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logo: {
    width: 67,
    aspectRatio: 1.68,
  },
  orderSection: {
    minHeight: 714,
    width: "100%",
    fontFamily: "Roboto, sans-serif",
  },
  orderHeader: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  orderIcon: {
    width: 50,
    aspectRatio: 1,
  },
  orderTitle: {
    fontSize: 23,
    fontWeight: "500",
    color: "#0D271A",
  },
  orderContent: {
    marginTop: 10,
    color: "#353535",
  },
  floatingButtonContainer: {
    zIndex: 10,
    marginTop: -154,
    width: 74,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  floatingButton: {
    borderRadius: 100,
    width: "100%",
    paddingHorizontal: 10,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  floatingButtonContent: {
    minHeight: 35,
    width: "100%",
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  floatingButtonIcon: {
    width: 24,
    aspectRatio: 1,
  },
});
