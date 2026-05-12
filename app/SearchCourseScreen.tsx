import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FloatingMenu from "../components/FloatingMenu.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SearchCourseScreen({ navigation }: any) {

  const [purchased, setPurchased] = useState<string[]>([]);

  const courses = [
    {
      id: "1",
      title: "Introduction To Programming",
      author: "John Smith",
      price: "$250",
      image: require("../assets/homee.png"),
    },
    {
      id: "2",
      title: "Cybersecurity Essentials",
      author: "Mily Davis",
      price: "$250",
      image: require("../assets/courses.png"),
    },
    {
      id: "23",
      title: "Cybersecurity Essentials",
      author: "Mily Davis",
      price: "$250",
      image: require("../assets/courses.png"),
    },
    {
      id: "42",
      title: "Cybersecurity Essentials",
      author: "Mily Davis",
      price: "$250",
      image: require("../assets/courses.png"),
    },


     {
      id: "24",
      title: "Cybersecurity Essentials",
      author: "Mily Davis",
      price: "$250",
      image: require("../assets/courses.png"),
    }, {
      id: "209",
      title: "Cybersecurity Essentials",
      author: "Mily Davis",
      price: "$250",
      image: require("../assets/homee.png"),
    },
     {
      id: "28",
      title: "Cybersecurity Essentials",
      author: "Mily Davis",
      price: "$250",
      image: require("../assets/courses.png"),
    },
     {
      id: "20",
      title: "Cybersecurity Essentials",
      author: "Mily Davis",
      price: "$250",
      image: require("../assets/homee.png"),
    },

    {
      id: "25",
      title: "Cybersecurity Essentials",
      author: "Mily Davis",
      price: "$250",
      image: require("../assets/courses.png"),
    },
    {
      id: "26",
      title: "Cybersecurity Essentials",
      author: "Mily Davis",
      price: "$250",
      image: require("../assets/courses.png"),
    },
    {
      id: "27",
      title: "Cybersecurity Essentials",
      author: "Mily Davis",
      price: "$250",
      image: require("../assets/courses.png"),
    },
  ];

  // ✅ تحميل الكورسات المشتراة
  useEffect(() => {
    const load = async () => {
      const data = await AsyncStorage.getItem("purchasedCourses");
      setPurchased(data ? JSON.parse(data) : []);
    };

    load();
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Search course</Text>

      {/* SEARCH */}
      <View style={styles.search}>
        <Ionicons name="search-outline" size={20} color="#999" />

        <TextInput
          placeholder="Search Course"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <View style={styles.filterBtn}>
          <Ionicons name="options-outline" size={18} color="#f4a261" />
        </View>
      </View>

      {/* LIST */}
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}



            
          onPress={() => {
  if (purchased.includes(item.id)) {
    // ✅ مشترك → يدخل مباشرة
    navigation.navigate("CourseDetails", {
      course: {
        ...item,
        isPurchased: true,
      },
    });
  } else {
    // ❌ مش مشترك → يروح للخطط
    navigation.navigate("Subscription", {
      course: item,
    });
  }
}}
          >
            <Image source={item.image} style={styles.image} />

            <View style={styles.price}>
              <Text>{item.price}</Text>
            </View>

            {/* 🔒 / ✅ */}
            <View style={styles.lock}>
              <Ionicons
                name={purchased.includes(item.id) ? "checkmark" : "lock-closed"}
                size={16}
                color="#fff"
              />
            </View>

            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.author}>
              By: <Text style={{ color: "#0a7" }}>{item.author}</Text>
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* MENU */}
      <FloatingMenu navigation={navigation} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cec2bc",
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 20,
    marginBottom: 15,
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    marginLeft: 10,
  },

  filterBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#f4a261",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 20,
  },

  price: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  lock: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#0A3D4D",
    borderRadius: 10,
    padding: 5,
  },

  courseTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 10,
  },

  author: {
    fontSize: 13,
    color: "#777",
  },
});