import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FloatingMenu from "../components/FloatingMenu";

export default function CoursePlayerScreen({ navigation, route }: any) {
  const course = route?.params?.course;

  return (
    <View style={styles.container}>
      <ScrollView>

        {/* 🔙 Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} />
          </TouchableOpacity>

          <Text style={styles.title}>Course Playing</Text>

          <Ionicons name="notifications-outline" size={22} />
        </View>

        {/* 🎥 Video */}
        <View style={styles.videoBox}>
          <Image
            source={
              course?.image
                ? course.image
                : require("../assets/it.png")
            }
            style={styles.video}
          />

          <View style={styles.playBtn}>
            <Ionicons name="play" size={28} color="#fff" />
          </View>
        </View>

        {/* 📚 Info */}
        <View style={styles.info}>

          {/* 🔢 Meta */}
          <Text style={styles.meta}>
            📘 48 Lessons • 📚 25 Chapters
          </Text>

          {/* 🧠 Title */}
          <Text style={styles.courseTitle}>
            {course?.title || "UI & UX Design Basic"}
          </Text>

          {/* 👥 Avatars */}
          <View style={styles.users}>
            {[1, 2, 3, 4].map((_, i) => (
              <Image
                key={i}
                source={require("../assets/it.png")}
                style={styles.avatar}
              />
            ))}

            <View style={styles.plus}>
              <Text style={styles.plusText}>16+</Text>
            </View>
          </View>

          {/* 📄 Description */}
          <Text style={styles.descTitle}>Description</Text>
          <Text style={styles.desc}>
            A UI UX Designer Is A Professional Who Identifies New Opportunities
            To Create Better User Experiences. Aesthetically Pleasing Branding
            Strategies Help Them Effectively Reach More Customers. They Also Ensure
            That The End-To-End Journey Meets Desired Outcomes.
          </Text>

          {/* 📅 Lessons */}
          {[
            "Introduction to UI/UX Design",
            "User Research & Analysis",
            "Wireframing Basics",
          ].map((item, index) => (
            <View key={index} style={styles.lessonRow}>
              <View style={styles.circle}>
                <Ionicons name="book-outline" size={16} color="#fff" />
              </View>

              <View>
                <Text style={styles.week}>Week {index + 1}</Text>
                <Text style={styles.lesson}>{item}</Text>
              </View>
            </View>
          ))}

        </View>
      </ScrollView>

      {/* 🔻 Bottom Menu */}
      <FloatingMenu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3c8c0",
    paddingTop: 50,
  },

  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontWeight: "700",
  },

  videoBox: {
    marginTop: 20,
    alignItems: "center",
  },

  video: {
    width: "90%",
    height: 200,
    borderRadius: 20,
  },

  playBtn: {
    position: "absolute",
    top: "40%",
    backgroundColor: "#0A3D4D",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    padding: 20,
  },

  meta: {
    color: "#777",
    marginBottom: 5,
    fontSize: 12,
  },

  courseTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  users: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: -10,
    borderWidth: 2,
    borderColor: "#fff",
  },

  plus: {
    backgroundColor: "#0A3D4D",
    borderRadius: 15,
    paddingHorizontal: 8,
    marginLeft: 8,
  },

  plusText: {
    color: "#fff",
    fontSize: 10,
  },

  descTitle: {
    marginTop: 15,
    fontWeight: "700",
  },

  desc: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },

  lessonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  circle: {
    backgroundColor: "#0A3D4D",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  week: {
    fontSize: 11,
    color: "#777",
  },

  lesson: {
    fontWeight: "600",
  },
});