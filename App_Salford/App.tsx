import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchCourseScreen from "./screens/SearchCourseScreen";
import CourseDetailsScreen from "./screens/CourseDetailsScreen";
import MyCoursesScreen from "./screens/MyCoursesScreen";

// Screens
import SplashScreen from "./screens/SplashScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import PaymentScreen from "./screens/PaymentScreen";
import CoursePlayerScreen from "./screens/CoursePlayerScreen";
import SubscriptionScreen from "./screens/SubscriptionScreen";
import ProfileScreen from "./screens/ProfileScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      setTimeout(async () => {
        try {
          const token = await AsyncStorage.getItem("token");

          if (token) {
            setInitialRoute("Home"); 
          } else {
            setInitialRoute("Welcome");
          }
        } catch (e) {
          console.log(e);
          setInitialRoute("Login");
        }
      }, 2000);
    };

    init();
  }, []);

  
  if (!initialRoute) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialRoute}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SearchCourse" component={SearchCourseScreen} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="CoursePlayer" component={CoursePlayerScreen} />
        <Stack.Screen name="MyCourses" component={MyCoursesScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        
      </Stack.Navigator>   
    </NavigationContainer>
  );
} 