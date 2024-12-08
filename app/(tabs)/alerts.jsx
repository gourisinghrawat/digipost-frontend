import * as React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { NotificationItem } from "../../pagecomponents/notifications/NotificationItem";
import { EventCard } from "../../pagecomponents/notifications/EventCard";
import { NavigationIcon } from "../../pagecomponents/notifications/NavigationIcon";

const notifications = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/912d33a20f65b2f0bcd2ea0afd2a899ecc102667e01485ceeb44bc013acebb0e?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "Order Update",
    message: "Your Order Has been dispatched from...",
    time: "2hrs Ago",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/f1083510b9dc44c4bbb32f3f7bfb11b23943aa743005a74f877db7221b8c1a46?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "New Blog",
    message: "@indiapost posted blog",
    time: "2hrs Ago",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/cd34911208889699a3c992d162a12d2ae64944569cd8237dab6da852e559cfdb?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "New Feature",
    message: "Earn new Badges by...",
    time: "12hrs Ago",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/da3187e6b1f8d25436512c02472f416b4b9a48212e5c8c7d65e2f1bb675a9c8f?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
    title: "New Blog",
    message: "@user1234 posted blog",
    time: "14hrs Ago",
  },
];

const events = [
  {
    title: "Plantation drive",
    description:
      "Lorem ipsum dolor sit amet consectetur. In diam condimentum vitae mauris lorem. Turpis mi sit egestas viverra odio et. Blandit eget ultrices integer risus. Sed nisi nibh id ullamcorper nulla risus diam tempor.",
  },
  {
    title: "Write letter to freedom fighters",
    description:
      "Lorem ipsum dolor sit amet consectetur. In diam condimentum vitae mauris lorem. Turpis mi sit egestas viverra odio et. Blandit eget ultrices integer risus. Sed nisi nibh id ullamcorper nulla risus diam tempor.",
  },
];

const navigationIcons = [
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/c7391fd78daa05433d21d83cf789b63f228fd67cf14d9e81531f2c0517ed842e?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/10473768f550df78cfa54a3a89a901ae27980614ac2a96a77112443f1702f902?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/657013327f62f04dd468dbc64284e66fbe238b8a7045cf21df5b8886169cf00c?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/6cd84ba17d43f2ed96093f1df8d9d4e6409fb6abea187bd2b4325ea09a2223f1?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
  "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/ed26036740134003d37a52ab45b2527677835f94aef55ee6bae20b6181dc217c?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
];

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/358b848687af257d9afef9e80b28f819061e85c5e299a2be191bdb8591268554?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
          }}
          style={styles.logo}
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

      <View style={styles.mainContent}>
        <View style={styles.notificationsHeader}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/1bb18aaefdfb518f46c4c783de1b55ddef5127ab886dc60c1a05b2221cfb1b46?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
            }}
            style={styles.menuIcon}
          />
        </View>

        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}

        <View style={styles.eventsSection}>
          <Text style={styles.sectionTitle}>Current Events</Text>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </View>
      </View>

      <View style={styles.navigation}>
        {navigationIcons.map((icon, index) => (
          <NavigationIcon key={index} icon={icon} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 480,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 67,
    aspectRatio: 1.68,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 23,
  },
  headerIcon: {
    width: 24,
    aspectRatio: 1,
  },
  mainContent: {
    padding: 22,
  },
  notificationsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 23,
    fontWeight: "500",
    color: "#0D271A",
    fontFamily: "Roboto, sans-serif",
  },
  menuIcon: {
    width: 24,
    aspectRatio: 1,
  },
  eventsSection: {
    marginTop: 12,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 312,
    width: "100%",
    alignSelf: "center",
    marginTop: 16,
    gap: 15,
  },
});
