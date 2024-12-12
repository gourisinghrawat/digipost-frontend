import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function BlogContent() {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/559848186a854878c6f3aa1cdca3fb2403eb46fa1ce067bf88665246d1157039?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
            }}
            style={styles.titleIcon}
          />
          <View style={styles.titleText}>
            <Text>Blogs</Text>
          </View>
        </View>
        <View style={styles.menuIconWrapper}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/0fe3c92d70f947bd8019826ed857d2fb/d0c4d26b2c915c38cd4b2da29cbc67a185a34d50ca136e8da6517b72a69c192b?apiKey=0fe3c92d70f947bd8019826ed857d2fb&",
            }}
            style={styles.menuIcon}
          />
        </View>
      </View>
      <View style={styles.blogText}>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Tincidunt nullam faucibus
          proin donec iaculis volutpat. Aliquam nunc odio sit lectus amet
          imperdiet. Nunc ultrices ultricies ornare est. Malesuada ac cursus
          integer quam maecenas aenean aliquam. Nisl fringilla eu tortor in
          etiam pharetra purus lorem posuere. Laoreet nunc euismod pulvinar
          porta. Adipiscing tempus eu in auctor fringilla massa enim ut. Risus
          sed posuere tincidunt hac elit ut laoreet. Commodo eget blandit
          dignissim adipiscing. Elit hendrerit vel sed tellus leo. Eget sed
          consectetur eu lectus ultrices. Non augue bibendum non nascetur sem
          senectus sem malesuada. Tellus imperdiet tempor magna ultrices enim.
          {"\n\n"}
          Felis adipiscing tortor facilisis in ultrices ut. Maecenas consequat
          ornare faucibus eros. Diam nulla est nulla volutpat elementum. Justo
          viverra ac viverra ac in sollicitudin nunc vitae quis. Id quis
          dignissim facilisis arcu eu duis. Mi augue purus malesuada euismod
          venenatis gravida pellentesque nullam proin. Tellus ultrices facilisis
          risus mauris id facilisis ut. Arcu integer tellus cursus aliquet arcu
          placerat. Feugiat in sit dignissim aliquet. Suspendisse aliquam massa
          dui netus. Feugiat convallis non non elementum id amet urna.
          {"\n\n"}
          Tortor vel suspendisse magnis ut egestas et vel ultricies. Suspendisse
          mauris amet commodo sit. Nisl nulla tincidunt sit viverra pharetra.
          Faucibus platea amet ultricies consectetur cras sit ante nisl massa.
          Aliquam consequat ipsum dignissim pulvinar. Euismod viverra risus
          rhoncus ultrices libero. Velit faucibus nec venenatis ipsum fusce urna
          vel nullam. Erat cras gravida pharetra mattis adipiscing felis turpis.
          {"\n\n"}
          Aliquet nisl hendrerit pellentesque quam non odio. Sem blandit
          interdum lacinia nunc. Aliquam vulputate iaculis dignissim proin. Dui
          aenean id facilisis pharetra dictumst fringilla. Bibendum massa
          fringilla non quis mauris.
          {"\n\n"}
          Tempus massa odio scelerisque vestibulum blandit gravida donec eu
          nulla. Malesuada venenatis lacus eget in est. Sollicitudin posuere
          interdum eu amet volutpat interdum amet. Semper sodales at cras sed
          ullamcorper neque sollicitudin volutpat. Tortor eu mauris amet
          condimentum dui quis in. Tristique sagittis mattis facilisis nisi ac
          tellus nulla. Cursus sodales habitant tincidunt nec lobortis egestas
          tincidunt. Leo aliquam nisl ultricies consequat risus sed ut tellus.
          Mattis urna dictumst posuere purus est sem. Placerat amet duis amet
          in.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    height: 714,
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
  titleContainer: {
    display: "flex",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 20,
    alignItems: "center",
    gap: "40px 100px",
    justifyContent: "space-between",
  },
  titleWrapper: {
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    alignItems: "center",
    gap: 10,
    fontFamily: "Roboto, sans-serif",
    fontSize: 23,
    color: "#0D271A",
    fontWeight: "500",
  },
  titleIcon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    width: 50,
    flexShrink: "0",
    aspectRatio: "1",
  },
  titleText: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
  menuIconWrapper: {
    alignItems: "stretch",
    alignSelf: "stretch",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "column",
    overflow: "hidden",
    justifyContent: "center",
    width: 24,
  },
  menuIcon: {
    position: "relative",
    display: "flex",
    width: 20,
    aspectRatio: "1.43",
  },
  blogText: {
    color: "#000",
    fontFamily: "Roboto, sans-serif",
    fontSize: 23,
    fontWeight: "400",
    alignSelf: "center",
    marginTop: 10,
  },
});

export default BlogContent;
