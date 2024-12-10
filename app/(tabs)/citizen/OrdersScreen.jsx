import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import OrderCard from "../../../pagecomponents/orders/OrderCard";
import NavigationIcon from "../../../pagecomponents/orders/NavigationIcon";

const orderData = [
  {
    orderNo: "1234",
    address: "16 sf mig Flats Cblock Rishi Nagar",
    date: "12 Dec 2024",
    time: "2:00pm",
  },
  {
    orderNo: "1234",
    address: "16 sf mig Flats Cblock Rishi Nagar",
    date: "12 Dec 2024",
    time: "2:00pm",
  },
  {
    orderNo: "1234",
    address: "16 sf mig Flats Cblock Rishi Nagar",
    date: "12 Dec 2024",
    time: "2:00pm",
  },
];

const navigationIcons = [
  {
    uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/c7391fd78daa05433d21d83cf789b63f228fd67cf14d9e81531f2c0517ed842e?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/e75e68aed395d6a5ee1b51737770040e38815615edd0678b73f7849835c5b162?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/c31b35ca87ef75553756789b1814a2fbfd3808bd1bb67265af8d644ca7360338?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/90ed304ab5073b89753cdae23a6986362450da401ddb1ed503d297f69a209cea?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/ae066ce6891e04e95378d2dbacad46fec9639dde9f8863654b8f96508fc3d818?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
];

const OrdersScreen = () => {
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
          <View style={styles.headerIcons}>
            {[2, 3, 4, 5].map((num) => (
              <Image
                key={num}
                resizeMode="contain"
                source={{ uri: `http://b.io/ext_${num}-` }}
                style={styles.headerIcon}
              />
            ))}
          </View>
        </View>

        <View style={styles.ordersSection}>
          <View style={styles.ordersTitleContainer}>
            <View style={styles.ordersTitle}>
              <Image
                resizeMode="contain"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/210b2289526503470a4c510058a451c492ef315df578d17735fec64d6767fdc9?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
                }}
                style={styles.ordersTitleIcon}
              />
              <View style={styles.ordersTitleText}>
                <Text>Your Orders</Text>
              </View>
            </View>
          </View>

          <View style={styles.ordersList}>
            {orderData.map((order, index) => (
              <OrderCard key={index} {...order} />
            ))}
          </View>
        </View>

        <View style={styles.navigation}>
          {navigationIcons.map((icon, index) => (
            <NavigationIcon key={index} iconSource={icon} />
          ))}
        </View>
      </View>

      <View style={styles.floatingButton}>
        <View style={styles.floatingButtonInner}>
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
};

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    marginHorizontal: "auto",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 79,
    flexDirection: "column",
    overflow: "hidden",
  },
  mainContent: {
    display: "flex",
    minHeight: 844,
    width: "100%",
    flexDirection: "column",
  },
  header: {
    alignSelf: "stretch",
    display: "flex",
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logo: {
    width: 67,
    aspectRatio: 1.68,
  },
  headerIcons: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    gap: 23,
    flexDirection: "row",
  },
  headerIcon: {
    width: 24,
    aspectRatio: 1,
  },
  ordersSection: {
    display: "flex",
    minHeight: 714,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    fontFamily: "Roboto, sans-serif",
  },
  ordersTitleContainer: {
    padding: 20,
  },
  ordersTitle: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: 10,
    fontSize: 23,
    color: "#0D271A",
    fontWeight: "500",
    flexDirection: "row",
  },
  ordersTitleIcon: {
    width: 50,
    aspectRatio: 1,
  },
  ordersTitleText: {
    flex: 1,
  },
  ordersList: {
    marginTop: 10,
    width: "100%",
  },
  navigation: {
    display: "flex",
    width: "100%",
    padding: 10,
    alignItems: "center",
    gap: 25,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  floatingButton: {
    zIndex: 10,
    display: "flex",
    marginTop: -154,
    width: 74,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  floatingButtonInner: {
    borderRadius: 100,
    display: "flex",
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  floatingButtonContent: {
    display: "flex",
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

export default OrdersScreen;
