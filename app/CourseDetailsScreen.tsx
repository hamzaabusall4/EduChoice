import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FloatingMenu from "../components/FloatingMenu";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CourseDetailsScreen({ navigation, route }: any) {
  const { course } = route.params;

  const [isPurchased, setIsPurchased] = useState(false);

  const lessons = [
    "Advance Prototyping",
    "UI Design With Figma",
    "How To Become UX Designer",
    "Art Director & Design Leadership",
    "Build Own Portfolio",
  ];

  useEffect(() => {
    const checkPurchase = async () => {
      const data = await AsyncStorage.getItem("purchasedCourses");
      const purchased = data ? JSON.parse(data) : [];

      if (purchased.includes(course.id)) {
        setIsPurchased(true);
      }
    };

    checkPurchase();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconCircle} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={18} />
          </TouchableOpacity>

          <Text style={styles.title}>Course Details</Text>

          <View style={styles.iconCircle}>
            <Ionicons name="notifications-outline" size={18} />
          </View>
        </View>

        {/* Info */}
        <View style={styles.info}>
          <Text style={styles.small}>Course 1</Text>

          <Text style={styles.bigTitle}>
            {course.title || "UI & UX Design Basic"}
          </Text>

          <Text style={styles.desc}>
            UI Refers To The Screens, Buttons, Toggles, Icons, And Other Visual...
          </Text>

          {/* Stats */}
          <View style={styles.stats}>
            <View style={styles.blue}>
              <Text style={styles.white}>16 Courses</Text>
            </View>

            <View style={styles.orange}>
              <Text style={styles.white}>235+ Lessons</Text>
            </View>
          </View>
        </View>

        {/* Lessons */}
        <View style={styles.list}>
          {lessons.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => {
                if (isPurchased) {
                  navigation.navigate("CoursePlayer", {
                    course,
                    lesson: item,
                  });
                }
              }}
            >
              {/* Left */}
              <View>
                <Text style={styles.cardTitle}>{item}</Text>

                <Text style={styles.meta}>
                  📘 48 Lessons • 📚 25 Chapters
                </Text>
              </View>

              {/* Right */}
              <View style={styles.right}>
                <Text style={styles.time}>2hr 45min</Text>

                <View style={styles.arrow}>
                  <Ionicons
                    name={isPurchased ? "arrow-forward" : "lock-closed"}
                    size={14}
                    color="#fff"
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* Floating + */}
      {/* <View style={styles.floating}>
        <Ionicons name="add" size={28} color="#fff" />
      </View> */}

      <FloatingMenu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cec3bb",
    paddingTop: 50,
  },

  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconCircle: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "700",
  },

  info: {
    padding: 20,
  },

  small: {
    color: "#777",
  },

  bigTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 5,
  },

  desc: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },

  stats: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
  },

  blue: {
    backgroundColor: "#0A3D4D",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },

  orange: {
    backgroundColor: "#f4a340",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },

  white: {
    color: "#fff",
    fontWeight: "600",
  },

  list: {
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: "#f3f3f3",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    fontWeight: "700",
  },

  meta: {
    fontSize: 11,
    color: "#777",
    marginTop: 5,
  },

  right: {
    alignItems: "flex-end",
  },

  time: {
    fontSize: 11,
    color: "#777",
  },

  arrow: {
    marginTop: 5,
    backgroundColor: "#0A3D4D",
    width: 25,
    height: 25,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  
});