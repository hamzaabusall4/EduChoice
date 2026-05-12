import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FloatingMenu from "../components/FloatingMenu.tsx"; // ✅ أضفنا الكمبوننت

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

export default function SignupScreen({ navigation }: any) {

  // ✅ الصور من داخل المشروع
  const courses = [
    {
      id: "111",
      title: "Visual Design",
      author: "Luis John",
      price: "$250",
      image: require("../assets/homee.png"),
    },
    {
      id: "211",
      title: "UX Research",
      author: "Aina Asif",
      price: "$250",
      image: require("../assets/homee.png"),
    },
    {
      id: "1",
      title: "Visual Design",
      author: "Luis John",
      price: "$250",
      image: require("../assets/homee.png"),
    },
    {
      id: "2",
      title: "UX Research",
      author: "Aina Asif",
      price: "$250",
      image: require("../assets/homee.png"),
    },
    {
      id: "3",
      title: "UI Basics",
      author: "John Doe",
      price: "$200",
      image: require("../assets/homee.png"),
    },
    {
      id: "4",
      title: "Mobile Design",
      author: "Sara Ali",
      price: "$300",
      image: require("../assets/homee.png"),
    },
    {
      id: "5",
      title: "Web Design",
      author: "Ahmad Sam",
      price: "$220",
      image: require("../assets/homee.png"),
    },
    {
      id: "6",
      title: "Figma Mastery",
      author: "Lina Noor",
      price: "$280",
      image: require("../assets/homee.png"),
    },
    {
      id: "7",
      title: "UX Writing",
      author: "Omar Khaled",
      price: "$210",
      image: require("../assets/homee.png"),
    },
    {
      id: "8",
      title: "Design Systems",
      author: "Maya Ali",
      price: "$260",
      image: require("../assets/homee.png"),
    },
    {
      id: "9",
      title: "Prototyping",
      author: "Hassan Ali",
      price: "$240",
      image: require("../assets/homee.png"),
    },
    {
      id: "10",
      title: "User Testing",
      author: "Rana Sam",
      price: "$230",
      image: require("../assets/homee.png"),
    },
  ];

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.replace("Login");
  };
return (
  <View style={{ flex: 1 }}>

    {/* 🔥 الليست (scroll) */}
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 120 }}

      ListHeaderComponent={
        <View style={styles.container}>
          
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.hello}>Hello, Ahmed</Text>

            <View style={styles.headerRight}>
              <View style={styles.iconCircle}>
                <Ionicons name="notifications-outline" size={20} color="#000" />
              </View>

              <TouchableOpacity onPress={handleLogout}>
                <Image
                  source={{ uri: "https://i.pravatar.cc/100" }}
                  style={styles.avatar}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.lightText}>Let’s Learn 🎓</Text>
          <Text style={styles.boldText}>Something New</Text>

          <View style={styles.search}>
            <Ionicons name="search-outline" size={20} color="#999" />

            <TextInput
              placeholder="Search Course"
              placeholderTextColor="#999"
              style={styles.input}
            />

            <TouchableOpacity
              style={styles.filterBtn}
              onPress={() => navigation.navigate("SearchCourse")}
            >
              <Ionicons name="options-outline" size={18} color="#f4a261" />
            </TouchableOpacity>
          </View>

          <View style={styles.categories}>
            <View style={styles.activeCat}>
              <Text style={styles.activeText}>UI & UX</Text>
            </View>

            <View style={styles.cat}>
              <Text style={styles.catText}>Animation</Text>
            </View>

            <View style={styles.cat}>
              <Text style={styles.catText}>Graphic Design</Text>
            </View>
          </View>

          {/* 🔥 Trending */}
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Trending Courses 🔥</Text>
            <Text style={styles.link}>See All</Text>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={courses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.image} style={styles.cardImg} />

                <View style={styles.priceTag}>
                  <Text style={{ fontSize: 12 }}>{item.price}</Text>
                </View>

                <View style={{ padding: 12 }}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardAuthor}>
                    By: <Text style={styles.authorName}>{item.author}</Text>
                  </Text>
                </View>
              </View>
            )}
          />

          {/* 🔥 Popular (نفس التصميم بالضبط) */}
          <View style={[styles.rowBetween, { marginTop: 25 }]}>
            <Text style={styles.sectionTitle}>Popular Courses</Text>
            <Text style={styles.link}>See All</Text>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={courses}
            keyExtractor={(item) => item.id + "popular"}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.image} style={styles.cardImg} />

                <View style={styles.priceTag}>
                  <Text style={{ fontSize: 12 }}>{item.price}</Text>
                </View>

                <View style={{ padding: 12 }}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardAuthor}>
                    By: <Text style={styles.authorName}>{item.author}</Text>
                  </Text>
                </View>
              </View>
            )}
          />

        </View>
      }

      renderItem={() => null} // ❌ ما بدنا الليست العمودية
    />

    {/* 🔥 المنيو ثابت */}
    <FloatingMenu navigation={navigation} />

  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cabdb4",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  hello: {
    fontSize: 18,
    fontWeight: "600",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  lightText: {
    marginTop: 25,
    fontSize: 22,
    color: "#8a8a8a9d",
  },

  boldText: {
    fontSize: 32,
    fontWeight: "800",
    marginTop: 5,
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    elevation: 2,
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

  categories: {
    flexDirection: "row",
    marginTop: 15,
  },

  cat: {
    backgroundColor: "#eaeaea",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  catText: {
    fontSize: 13,
  },

  activeCat: {
    backgroundColor: "#0A3D4D",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  activeText: {
    color: "#fff",
    fontSize: 13,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  link: {
    color: "#0a7",
    fontSize: 13,
  },

  card: {
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginRight: 15,
    marginTop: 15,
    overflow: "hidden",
    elevation: 3,
  },

  cardImg: {
    width: "100%",
    height: 130,
  },

  priceTag: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },

  cardTitle: {
    fontWeight: "700",
    fontSize: 14,
  },

  cardAuthor: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },

  authorName: {
    color: "#0a7",
  },

  // 🔥 NEW (vertical list)
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 10,
    elevation: 2,
  },

  listImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },

  priceRight: {
    marginLeft: "auto",
    fontWeight: "700",
    color: "#0a7",
  },
});