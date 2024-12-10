import * as React from "react";
import { View, StyleSheet } from "react-native";
import {Header} from "../../pagecomponents/Header";
import BlogContent from "../../pagecomponents/blog/BlogContent";
import ShareButton from "../../pagecomponents/blog/ShareButton";
import SocialLinks from "../../pagecomponents/blog/SocialLinks";

function BlogLayout() {
  return (
    <View style={styles.container}>
      <Header />
      <BlogContent />
      
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
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
});

export default BlogLayout;
