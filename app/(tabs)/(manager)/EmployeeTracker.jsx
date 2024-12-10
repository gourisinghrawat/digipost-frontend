import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import EmployeeCard from "../../../pagecomponents/employeeTracker/components/EmployeeCard";
import NavigationIcon from "../../../pagecomponents/employeeTracker/components/NavigationIcon";

const employeeData = [
  {
    name: "Gopal Verma",
    rank: 1,
    badges: 5,
    points: 200,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/346af10a8fd213b23846f07ad2505b741aa8b962f75ca9eb0710b9c1f2fa682c?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    name: "Vijay",
    rank: 2,
    badges: 5,
    points: 200,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/bb21d0b9c1e6b9ff0ec3f15d410b85f3e364b43a1aa468baf732332434b94bd6?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
  {
    name: "Maya Verma",
    rank: 3,
    badges: 5,
    points: 200,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/9262431dfea79d6d2a1342a046a2bde1e08d8dabf6a6c2199488926660c4701c?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  },
];

const navigationIcons = [
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/5e933818c179bca8d9a90eb75fea9518f4be9454daa2ec2aa42cf815e287388a?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/1538c53ec974389edcb318403c53c4a0ca00d08ddb38aeadc5cdd8ae3151b42a?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/90ed304ab5073b89753cdae23a6986362450da401ddb1ed503d297f69a209cea?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/ae066ce6891e04e95378d2dbacad46fec9639dde9f8863654b8f96508fc3d818?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
];

function EmployeeTracker() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/358b848687af257d9afef9e80b28f819061e85c5e299a2be191bdb8591268554?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
          }}
          style={styles.logoImage}
        />
        <View style={styles.headerIcons}>
          {["ext_2-", "ext_3-", "ext_4-", "ext_5-"].map((icon, index) => (
            <Image
              key={index}
              resizeMode="contain"
              source={{ uri: `http://b.io/${icon}` }}
              style={styles.headerIcon}
            />
          ))}
        </View>
      </View>

      <View style={styles.employeeHighlight}>
        <View style={styles.highlightText}>
          <Text style={styles.highlightContent}>
            gopal Verma
            {"\n"}
            was employee {"\n"}
            of the month
          </Text>
        </View>
        <View style={styles.dotIndicators}>
          {[...Array(6)].map((_, index) => (
            <View key={index} style={styles.dot} />
          ))}
        </View>
      </View>

      <View style={styles.trackerSection}>
        <View style={styles.trackerHeader}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/bc25506c50b328b517c4ea066be94bdd0ffa6c748b96027c134091efeb5d258b?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
            }}
            style={styles.trackerIcon}
          />
          <View style={styles.trackerTitle}>
            <Text style={styles.trackerTitleText}>Employee Tracker</Text>
          </View>
        </View>

        <View style={styles.employeeList}>
          {employeeData.map((employee, index) => (
            <EmployeeCard key={index} {...employee} />
          ))}
        </View>
      </View>

      <View style={styles.floatingButton}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContent}>
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

      <View style={styles.navigation}>
        {navigationIcons.map((icon, index) => (
          <NavigationIcon key={index} imageUrl={icon} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    marginHorizontal: "auto",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logoImage: {
    width: 67,
    aspectRatio: 1.68,
  },
  headerIcons: {
    display: "flex",
    alignItems: "center",
    gap: 23,
    flexDirection: "row",
  },
  headerIcon: {
    width: 24,
    aspectRatio: 1,
  },
  employeeHighlight: {
    display: "flex",
    minHeight: 714,
    width: "100%",
    flexDirection: "column",
  },
  highlightText: {
    minHeight: 231,
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 99,
    paddingBottom: 32,
  },
  highlightContent: {
    fontFamily: "Roboto",
    fontSize: 23,
    color: "#EEE",
    fontWeight: "700",
  },
  dotIndicators: {
    alignSelf: "center",
    display: "flex",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "#000",
  },
  trackerSection: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  trackerHeader: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  trackerIcon: {
    width: 50,
    aspectRatio: 1,
  },
  trackerTitle: {
    flex: 1,
  },
  trackerTitleText: {
    fontSize: 23,
    color: "#0D271A",
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  employeeList: {
    marginTop: 10,
  },
  floatingButton: {
    zIndex: 10,
    display: "flex",
    marginTop: -84,
    width: 74,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    borderRadius: 100,
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  buttonContent: {
    minHeight: 35,
    width: "100%",
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    width: 24,
    aspectRatio: 1,
  },
  navigation: {
    display: "flex",
    marginTop: 9,
    width: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default EmployeeTracker;
