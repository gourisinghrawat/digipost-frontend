import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { HeaderIcons } from "@/pagecomponents/orders/components/HeaderIcons";
import { NavigationBar } from "@/pagecomponents/orders/components/NavigationBar";
import { OrderDetails } from "@/pagecomponents/orders/components/OrderDetails";
import { SustainabilityNotice } from "@/pagecomponents/orders/components/SustainabilityNotice";
import deliveryIcon from "@/assets/icons/delivery.png";
import homeIcon from "@/assets/icons/home.png";
import orderIcon from "@/assets/icons/order.png";
import PackIcon from "@/assets/icons/pack.png";

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
          {/* <HeaderIcons /> */}
        </View>

        <Text style={styles.orderTitle}>Order Status</Text>
        <View style={styles.orderSection}>
          <View style={styles.progressContainer}>
            <View style={styles.stepContainer}>
              <View style={[styles.iconBackground, styles.completed]}>
                <Image source={orderIcon} style={styles.orderIcon} />
              </View>
              <Text style={styles.stepText}>Ordered</Text>
            </View>
            <View style={styles.connector} />
            <View style={styles.stepContainer}>
              <View style={[styles.iconBackground, styles.completed]}>
                <Image source={PackIcon} style={styles.orderIcon} />
              </View>
              <Text style={styles.stepText}>Packed</Text>
            </View>
            <View style={styles.connector} />
            <View style={styles.stepContainer}>
              <View style={[styles.iconBackground, styles.pending]}>
                <Image source={homeIcon} style={styles.orderIcon} />
              </View>
              <Text style={styles.stepText}>Out for Delivery</Text>
            </View>
            <View style={styles.connector} />
            <View style={styles.stepContainer}>
              <View style={[styles.iconBackground, styles.current]}>
                <Image source={deliveryIcon} style={styles.orderIcon} />
              </View>
              <Text style={styles.stepText}>Delivered</Text>
            </View>
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
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginHorizontal: "auto",
    maxWidth: 480,
    paddingBottom: 20,
    backgroundColor: "#f9f9f9",
  },
  mainContent: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  logo: {
    width: 60,
    height: 40,
  },
  orderTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginVertical: 15,
  },
  orderSection: {
    paddingHorizontal: 20,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  stepContainer: {
    alignItems: "center",
  },
  iconBackground: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  completed: {
    backgroundColor: "#4caf50",
  },
  current: {
    backgroundColor: "#ff5722",
  },
  pending: {
    backgroundColor: "#e0e0e0",
  },
  orderIcon: {
    width: 30,
    height: 30,
  },
  stepText: {
    marginTop: 8,
    fontSize: 12,
    color: "#555",
  },
  connector: {
    flex: 1,
    height: 2,
    backgroundColor: "#ddd",
  },
  floatingButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  floatingButtonIcon: {
    width: 30,
    height: 30,
    tintColor: "#fff",
  },
});
