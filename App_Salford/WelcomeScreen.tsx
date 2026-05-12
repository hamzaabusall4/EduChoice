import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/wlcoummm.png")}
        style={styles.image}
      />

      <Text style={styles.small}>Welcome to</Text>
      <Text style={styles.title}>SALFORD</Text>

      <Text style={styles.desc}>
        Unlock the best IT courses for your career growth.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfedf0",
    padding: 20,
    justifyContent: "center",
  },

  image: {
  width: "100%",
  height: 420,
  backgroundColor: "#d99f76",
  borderRadius: 30,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 2,
  },

  small: {
    fontSize: 18,
  color: "#d7d6d5",
  marginBottom: 5,
  },

  title: {
    fontSize: 48,
  fontWeight: "900",
  color: "#087E8B",
  letterSpacing: 1,
  marginBottom: 10,
  },

  desc: {
   fontSize: 16,
  color: "#666",
  lineHeight: 24,
  marginBottom: 35,
  },

  button: {
   backgroundColor: "#0f6b6f",
  paddingVertical: 16,
  borderRadius: 30,
  alignItems: "center",
  width: 180,
  },

  buttonText: {
     color: "#fff",
  fontSize: 16,
  fontWeight: "600",
  },
});