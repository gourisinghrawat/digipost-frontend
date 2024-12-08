import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Header } from "../../pagecomponents/Header";
import { UserInfo } from "../../pagecomponents/profileScreen/UserInfo";
import { BadgeSection } from "../../pagecomponents/profileScreen/BadgeSection";
import { OrderHistory } from "../../pagecomponents/profileScreen/OrderHistory";
import { BenefitsSection } from "../../pagecomponents/profileScreen/BenefitsSection";
import { RewardsFooter } from "../../pagecomponents/profileScreen/RewardsFooter";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <UserInfo />
      <BadgeSection />
      <OrderHistory />
      <BenefitsSection />
      <RewardsFooter />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 13,
  },
});
