import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function SplashScreen({ navigation }: any) {
  const [step, setStep] = useState(0);

  const data = [
    {
      title1: "Explore a wide range of",
      title2: "IT Courses",
      desc: "From coding to cybersecurity, we have it all!",
      image: require("../assets/it.png"),
    },
    {
      title1: "Learn on your own ",
      title2: "Schedule",
      desc: "Access courses on the go, anytime, from anywhere.",
      image: require("../assets/pag3.png"),
    },
    {
      title1: "Ready to dive into ",
      title2: "Learning?",
      desc: "Access courses on the go, anytime, from anywhere.",
      image: require("../assets/pag4.png"),
    },
  ];

  const lastIndex = data.length - 1;

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={data[step].image} style={styles.image} />

      {/* Text */}
      <View>
        <Text style={styles.title1}>{data[step].title1}</Text>
        <Text style={styles.title2}>{data[step].title2}</Text>
        <Text style={styles.desc}>{data[step].desc}</Text>
      </View>

      {/* Bottom */}
      <View style={styles.bottom}>
        
        {/* Skip */}
        {step !== lastIndex ? (
          <TouchableOpacity onPress={() => setStep(lastIndex)}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 50 }} />
        )}

        {/* Dots */}
        <View style={styles.dots}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                step === index && styles.active,
              ]}
            />
          ))}
        </View>

        {/* Next */}
        <TouchableOpacity
         onPress={() => {
  if (step < lastIndex) {
    setStep(step + 1);
  } else {
    navigation.replace("Login"); 
  }
}}
        >
          <Text style={styles.next}>
            {step === lastIndex ? "Start" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
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
  backgroundColor: "#93b3b3",
  borderRadius: 30,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 2,
  },

  title1: {
    fontSize: 22,
    color: "#333",
  },

  title2: {
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

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dots: {
    flexDirection: "row",
    gap: 8,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },

  active: {
    backgroundColor: "#197C80",
  },

  skip: {
    color: "#999",
    fontSize: 16,
  },

  next: {
    color: "#197C80",
    fontSize: 16,
    fontWeight: "bold",
  },
});