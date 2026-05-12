import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PaymentScreen({ navigation, route }: any) {
const { price, course } = route.params;
  const [method, setMethod] = useState("visa");

  // ✅ حالة البوب أب
  const [showSuccess, setShowSuccess] = useState(false);

  // 🔥 دالة الدفع (Mock)
  const pay = async () => {
    setShowSuccess(true);
  };

  return (
    <View style={styles.container}>

      {/* 🔙 Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} />
        </TouchableOpacity>

        <Text style={styles.title}>Payment Method</Text>

        <Ionicons name="notifications-outline" size={22} />
      </View>

      {/* 🔥 Title */}
      <Text style={styles.bigText}>Add Payment Method</Text>
      <Text style={styles.subText}>
        Provide Your Payment Method Details Below
      </Text>

      {/* 💳 Payment Type */}
      <Text style={styles.label}>Payment Type</Text>

      <View style={styles.methods}>
        {["visa", "paypal", "gpay"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.method}
            onPress={() => setMethod(item)}
          >
            <View style={styles.radio}>
              {method === item && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.methodText}>
              {item === "visa" ? "VISA" : item === "paypal" ? "PayPal" : "G Pay"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 💳 Inputs */}
      <View style={styles.inputBox}>
        <Ionicons name="card-outline" size={18} color="#777" />
        <TextInput placeholder="Enter Card Number" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="person-outline" size={18} color="#777" />
        <TextInput placeholder="Enter Card Holder Name" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="calendar-outline" size={18} color="#777" />
        <TextInput placeholder="Enter Expiry Date" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="lock-closed-outline" size={18} color="#777" />
        <TextInput
          placeholder="Enter CVV"
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* 🔥 Button */}
      <TouchableOpacity style={styles.btn} onPress={pay}>
        <Text style={styles.btnText}>Pay ${price}</Text>
      </TouchableOpacity>

      {/* ✅ SUCCESS POPUP */}
      {showSuccess && (
        <View style={styles.overlay}>
          <View style={styles.modal}>

            <View style={styles.iconCircle}>
              <Ionicons name="checkmark" size={40} color="#0A3D4D" />
            </View>

            <Text style={styles.successTitle}>
              Your Subscription Is Successful!
            </Text>

            <Text style={styles.successSub}>
              Enjoy Unlimited Access.
            </Text>

            <TouchableOpacity
              style={styles.successBtn}

              
             onPress={async () => {
  const existing = await AsyncStorage.getItem("purchasedCourses");
  let purchased = existing ? JSON.parse(existing) : [];

  // نضيف الكورس الحالي
  purchased.push(course.id);

  await AsyncStorage.setItem("purchasedCourses", JSON.stringify(purchased));

  navigation.replace("CourseDetails", {
    course: { ...course, isPurchased: true },
  });
}}


            >
              <Text style={styles.successBtnText}>Go to Courses</Text>
            </TouchableOpacity>

          </View>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5ded9",
    padding: 20,
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontWeight: "700",
  },

  bigText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "700",
  },

  subText: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },

  label: {
    marginTop: 20,
    fontWeight: "600",
  },

  methods: {
    flexDirection: "row",
    marginTop: 10,
    gap: 15,
  },

  method: {
    flexDirection: "row",
    alignItems: "center",
  },

  methodText: {
    marginLeft: 5,
    fontWeight: "600",
  },

  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#1B7C85",
    justifyContent: "center",
    alignItems: "center",
  },

  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1B7C85",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
  },

  input: {
    marginLeft: 10,
    flex: 1,
  },

  btn: {
    marginTop: 30,
    backgroundColor: "#1B7C85",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "700",
  },

  // 🔥 POPUP STYLES
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
  },

  iconCircle: {
    backgroundColor: "#e6f4f1",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  successTitle: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },

  successSub: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
    marginBottom: 20,
    textAlign: "center",
  },

  successBtn: {
    backgroundColor: "#0A3D4D",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
  },

  successBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
});