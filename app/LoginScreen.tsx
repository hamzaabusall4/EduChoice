import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  // ✅ Configure Google
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "YOUR_WEB_CLIENT_ID", // 🔥 حط Web Client ID من Firebase
    });
  }, []);

  // ================= LOGIN =================
const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert("Error", "Please fill all fields");
    return;
  }

  try {
    const res = await fetch("http://10.0.2.2:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      await AsyncStorage.setItem("token", data.token);
      navigation.replace("Home");
    } else {
      Alert.alert("Error", data.message);
    }
  } catch (error) {
  console.log(error); // ✅ استخدمناه
  Alert.alert("Error", "Server not reachable");
}
};

  // ================= GOOGLE LOGIN =================
  const handleGoogleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    // 🔥 مهم جداً: امسح أي session قديم
    await GoogleSignin.signOut();

    const userInfo = await GoogleSignin.signIn();

    // ✅ تأكد إنه فعلياً في user
    if (userInfo?.data?.user?.email) {
      await AsyncStorage.setItem("token", "google_login");
      navigation.replace("Home");
    }

  } catch (error) {
  console.log("Google Error:", error);

  const err = error as any; // 🔥 الحل هون

  if (
    err?.code === "SIGN_IN_CANCELLED" ||
    err?.message?.includes("cancel")
  ) {
    return;
  }

  Alert.alert("Error", "Google login failed");
}
};

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Enter your details to log in</Text>

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

     

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>



 <View style={styles.row}>
        <TouchableOpacity
          style={styles.rememberRow}
          onPress={() => setRemember(!remember)}
        >
          <View style={[styles.checkbox, remember && styles.checkboxActive]} />
          <Text style={styles.rememberText}>Remember Me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Coming soon")}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>



      
      <Text style={styles.or}>Or</Text>

      {/* ✅ Google */}
      <TouchableOpacity style={styles.socialBtn} onPress={handleGoogleLogin}>
        <Text>Sign in with Google</Text>
      </TouchableOpacity>

      {/* ✅ Apple */}
      <TouchableOpacity
        style={styles.socialBtn}
        onPress={() => Alert.alert("Apple login coming soon")}
      >
        <Text>Sign in with Apple</Text>
      </TouchableOpacity>

      {/* ✅ Signup */}
      <Text style={styles.bottom}>
        Don’t have an account?{" "}
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9cfcf",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 49,
    fontWeight: "bold",
    color: "#197C80",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
  },

  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#197C80",
    marginRight: 8,
  },

  checkboxActive: {
    backgroundColor: "#197C80",
  },

  rememberText: {
    marginVertical: 23,
    fontSize: 12,
  },

  forgot: {
    marginVertical: 23,
    fontSize: 12,
    color: "#777",
  },

  button: {
    backgroundColor: "#0F5B63",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  or: {
    textAlign: "center",
    fontSize:21,
    marginVertical: 1,
    color: "#777",
  },

  socialBtn: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
  },

  bottom: {
    textAlign: "center",
    marginTop: 20,
    color: "#777",
  },

  signup: {
    color: "#197C80",
    fontWeight: "bold",
  },
});