import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FloatingMenu from "../components/FloatingMenu";

export default function MyCoursesScreen({ navigation }: any) {
  const [courses, setCourses] = useState<any[]>([]);

  const allCourses = [
    {
      id: "1",
      title: "Introduction To Programming",
      image: require("../assets/homee.png"),
    },
    {
      id: "2",
      title: "UI Design With Figma",
      image: require("../assets/courses.png"),
    },
    {
      id: "3",
      title: "Build Own Portfolio",
      image: require("../assets/courses.png"),
    },
  ];

  useEffect(() => {
    const load = async () => {
      const data = await AsyncStorage.getItem("purchasedCourses");
      const purchased = data ? JSON.parse(data) : [];

      const filtered = allCourses.filter((c) =>
        purchased.includes(c.id)
      );

      setCourses(filtered);
    };

    load();
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("CourseDetails", {
          course: { ...item, isPurchased: true },
        })
      }
    >
      {/* TOP RIGHT TIME */}
      <Text style={styles.time}>⏱ 39min</Text>

      {/* LEFT */}
      <View style={styles.content}>
        <Text style={styles.small}>Your progress</Text>

        <Text style={styles.progressText}>75% to complete</Text>

        {/* PROGRESS BAR */}
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />

          {/* DOTS */}
          <View style={styles.dot} />
          <View style={[styles.dot, { left: "50%" }]} />
          <View style={[styles.dot, { left: "75%" }]} />
        </View>

        <Text style={styles.titleCourse}>{item.title}</Text>

        <Text style={styles.author}>
          By: <Text style={{ color: "#0A3D4D" }}>John Smith</Text>
        </Text>

        <Text style={styles.meta}>
          📘 48 Lessons • ⏱ 2hr 45min
        </Text>
      </View>

      {/* IMAGE */}
      <Image source={item.image} style={styles.img} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Courses</Text>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <FloatingMenu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0c7be",
    padding: 20,
  },

  header: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 18,
    marginBottom: 18,
    elevation: 3,
    position: "relative",
  },

  content: {
    paddingRight: 90,
  },

  small: {
    fontSize: 11,
    color: "#aaa",
  },

  progressText: {
    fontSize: 13,
    color: "#0A3D4D",
    fontWeight: "600",
    marginBottom: 8,
  },

  progressBar: {
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginBottom: 12,
    position: "relative",
    overflow: "hidden",
  },

  progressFill: {
    width: "75%",
    height: "100%",
    backgroundColor: "#0A3D4D",
    borderRadius: 10,
  },

  dot: {
    position: "absolute",
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#333",
    top: 1,
    left: "25%",
  },

  titleCourse: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 3,
  },

  author: {
    fontSize: 12,
    color: "#777",
    marginBottom: 4,
  },

  meta: {
    fontSize: 11,
    color: "#777",
  },

  img: {
    position: "absolute",
    right: 15,
    bottom: 15,
    width: 75,
    height: 75,
    borderRadius: 20,
  },

  time: {
    position: "absolute",
    top: 15,
    right: 15,
    fontSize: 11,
    color: "#777",
  },
});