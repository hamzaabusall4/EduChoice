import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function SignupScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    // ✅ تحقق من الحقول
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    // ✅ تحقق من الباسورد
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://10.0.2.2:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      // ✅ نجاح
      if (res.ok) {
        Alert.alert("Success", data.message);

        // 🔥 روح على login
        navigation.replace("Login");
      } else {
        // ❌ خطأ من السيرفر (مثلاً user موجود)
        Alert.alert("Error", data.message);
      }

    } catch (error) {
      console.log("ERROR:", error);
      Alert.alert("Error", "Server not reachable");
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subtitle}>Enter your details to Sign up</Text>

      <TextInput
        placeholder="abc@email.com"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        placeholder="Enter your password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />

      <TextInput
        placeholder="Confirm password"
        secureTextEntry
        style={styles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.bottom}>
        <Text style={{ color: "#666" }}>
          Joined us before?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#197C80", fontWeight: "bold" }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6cdcd",
    padding: 24,
    justifyContent: "center",
  
  },

  title: {
    fontSize:45,
    fontWeight: "bold",
    color: "#197C80",
    textAlign: "center",
    
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  button: {
    backgroundColor: "#0F5B63",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});