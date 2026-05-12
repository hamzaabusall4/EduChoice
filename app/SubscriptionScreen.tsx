import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SubscriptionScreen({ navigation, route }: any) {
  const { course } = route.params;

  const plans = [
    {
      id: "basic",
      title: "Basic Plan",
      price: 9.99,
      desc: "Unlock Essential Courses And Features.",
    },
    {
      id: "pro",
      title: "Pro Plan",
      price: 9.99,
      desc: "Get Certificates And Offline Access.",
    },
    {
      id: "premium",
      title: "Premium Plan",
      price: 9.99,
      desc: "Exclusive Content And VIP Support.",
    },
  ];

  const [selected, setSelected] = useState("premium");

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Subscription Plans</Text>

        <Ionicons name="notifications-outline" size={22} />
      </View>

      {/* Title */}
      <Text style={styles.mainTitle}>
        Choose The Right Plan For{"\n"}Your Learning Journey.
      </Text>

      {/* Basic */}
      <TouchableOpacity
        style={styles.lightCard}
        onPress={() => setSelected("basic")}
      >
        <View>
          <Text style={styles.planTitle}>Basic Plan</Text>
          <Text style={styles.planDesc}>
            Unlock Essential Courses And Features.
          </Text>
        </View>

        <View>
          <Text style={styles.price}>$9.99</Text>
          <Text style={styles.month}>Monthly</Text>
        </View>
      </TouchableOpacity>

      {/* Pro */}
      <TouchableOpacity
        style={styles.lightCard}
        onPress={() => setSelected("pro")}
      >
        <View>
          <Text style={styles.planTitle}>Pro Plan</Text>
          <Text style={styles.planDesc}>
            Get Certificates And Offline Access.
          </Text>
        </View>

        <View>
          <Text style={styles.price}>$9.99</Text>
          <Text style={styles.month}>Monthly</Text>
        </View>
      </TouchableOpacity>

      {/* Premium */}
      <View style={styles.premiumCard}>
        <Text style={styles.premiumTitle}>Premium Plan</Text>

        <Text style={styles.premiumDesc}>
          Exclusive Content And VIP Support.
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.premiumPrice}>$9.99</Text>
          <Text style={styles.premiumMonth}>Monthly</Text>
        </View>

        {[
          "Access To All Courses",
          "Certification On Completion",
          "Offline Access",
          "Premium Support",
          "Access To Exclusive Content",
        ].map((item, i) => (
          <View key={i} style={styles.featureRow}>
            <Ionicons name="checkmark-circle" size={18} color="#fff" />
            <Text style={styles.featureText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* 🔥 السعر حسب الاختيار */}
      <View style={styles.bottom}>
        <Text style={styles.totalText}>
          Selected Plan: {selected.toUpperCase()}
        </Text>

        <TouchableOpacity
          style={styles.subscribeBtn}
          onPress={() =>
            navigation.navigate("Payment", {
              course,
              plan: selected,
              price: 9.99,
            })
          }
        >
          <Text style={styles.subscribeText}>Subscribe Now</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0c5bd",
    padding: 20,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontWeight: "700",
  },

  mainTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 20,
  },

  lightCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  planTitle: {
    fontWeight: "700",
  },

  planDesc: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },

  price: {
    fontWeight: "700",
    color: "#0A3D4D",
  },

  month: {
    fontSize: 12,
    color: "#777",
  },

  premiumCard: {
    backgroundColor: "#0A3D4D",
    padding: 20,
    borderRadius: 25,
    marginTop: 0,
  },

  premiumTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  premiumDesc: {
    color: "#ddd",
    marginTop: 0,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },

  premiumPrice: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  premiumMonth: {
    color: "#ddd",
  },

  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  featureText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: 12,
  },

  bottom: {
    marginTop: 20,
  },

  totalText: {
    fontWeight: "600",
    marginBottom: 10,
  },

  subscribeBtn: {
    backgroundColor: "#0A3D4D",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  subscribeText: {
    color: "#fff",
    fontWeight: "700",
  },
});