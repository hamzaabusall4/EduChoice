import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/learn.png")} // حط الصورة هون
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.smallText}>Learn on your own</Text>

        <Text style={styles.title}>Schedule</Text>

        <Text style={styles.description}>
          Access courses on the go, anytime, from anywhere.
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.dots}>
          <View style={styles.dotInactive} />
          <View style={styles.dotActive} />
          <View style={styles.dotInactive} />
        </View>

        <TouchableOpacity>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-between",
    paddingVertical: 40,
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 30,
  },

  textContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
  },

  smallText: {
    fontSize: 18,
    color: "#555",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#0F7C82",
    marginVertical: 10,
  },

  description: {
    fontSize: 18,
    color: "#777",
    lineHeight: 26,
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  skip: {
    fontSize: 18,
    color: "#333",
  },

  next: {
    fontSize: 18,
    color: "#333",
  },

  dots: {
    flexDirection: "row",
    alignItems: "center",
  },

  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#0F7C82",
    marginHorizontal: 5,
  },

  dotInactive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#B0BEC5",
    marginHorizontal: 5,
  },
});