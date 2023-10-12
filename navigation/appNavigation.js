import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WhereScreen from "../screens/WhereScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import ThanksScreen from "../screens/ThanksScreen";
import PaymentScreen from "../screens/PaymentScreen";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name="Where"
          options={{ headerShown: false }}
          component={WhereScreen}
        />
        <Stack.Screen
          name="Categories"
          options={{ headerShown: false }}
          component={CategoriesScreen}
        />
        <Stack.Screen
          name="Thanks"
          options={{ headerShown: false }}
          component={ThanksScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Payment"
          options={{ headerShown: false }}
          component={PaymentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
