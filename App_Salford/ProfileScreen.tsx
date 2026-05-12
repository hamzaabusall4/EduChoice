import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FloatingMenu from "../components/FloatingMenu";


export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconCircle}>
          <Ionicons name="arrow-back" size={18} />
        </TouchableOpacity>

        <Text style={styles.title}>Profile</Text>

        <View style={styles.iconCircle}>
          <Ionicons name="notifications-outline" size={18} />
        </View>
      </View>

      {/* User */}
      <View style={styles.userCard}>
        <Image
          source={require("../assets/it.png")}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.name}>Muhammad Ahmed</Text>
          <Text style={styles.email}>example@email.com</Text>
        </View>
      </View>

      {/* Options */}
      <View style={styles.list}>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("MyCourses")}
        >
          <Text>Your Current Courses</Text>
          <Ionicons name="arrow-forward" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text>Your History</Text>
          <Ionicons name="arrow-forward" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text>Certifications Earned</Text>
          <Ionicons name="arrow-forward" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text>Settings</Text>
          <Ionicons name="arrow-forward" />
        </TouchableOpacity>

      </View>

      {/* زر */}
            <FloatingMenu navigation={navigation} />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c4b8b0",
    padding: 20,
    paddingTop: 50,
  },

  header: {
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

  userCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  name: {
    fontWeight: "700",
  },

  email: {
    fontSize: 12,
    color: "#777",
  },

  list: {
    marginTop: 20,
  },

  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  floating: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "#0A3D4D",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});