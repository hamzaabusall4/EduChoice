import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      
      {/* LOGO */}
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
      />

      {/* TEXT */}
      <Text style={styles.title}>SALFORD</Text>
      <Text style={styles.subtitle}>Best Education For You</Text>

      {/* BOTTOM DESIGN */}
      <View style={styles.bottom}>
        <View style={styles.circle1}>
          <View style={styles.circle2}>
            <View style={styles.circle3} />
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1F1",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: 160,
    height: 160,
    marginTop: 120,
  },

  title: {
    fontSize: 62,
    fontWeight: "bold",
    color: "#0e1f27",
  },

  subtitle: {
    fontSize: 16,
    color: "#2C7A7B",
    marginBottom: 20,
  },

  bottom: {
    width: "100%",
    height: 260,
    overflow: "hidden",
    alignItems: "center",
  },

  circle1: {
    // position: "absolute",
    // bottom: -250,
    width: 600,
    height: 600,
    borderRadius: 300,
    backgroundColor: "#6db4ba",
    alignItems: "center",
    justifyContent: "center",
  },

  circle2: {
    width: 450,
    height: 450,
    borderRadius: 225,
    backgroundColor: "#2C8C92",
    alignItems: "center",
    justifyContent: "center",
  },

  circle3: {
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: "#13696c",
  },
});