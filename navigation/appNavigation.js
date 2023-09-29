import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WhereScreen from "../screens/WhereScreen";
import ItemScreen from "../screens/ItemScreen";
import SearchScreen from "../screens/SearchScreen";
import Header from "../components/Header";
import MenuScreen from "../screens/MenuScreen";
import ThanksScreen from "../screens/ThanksScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Where"
          options={{ headerShown: false }}
          component={WhereScreen}
        />
        <Stack.Screen
          name="Menu"
          options={{ headerShown: false }}
          component={MenuScreen}
        />
        <Stack.Screen
          name="Thanks"
          options={{ headerShown: false }}
          component={ThanksScreen}
        />
        <Stack.Screen
          name="Item"
          options={{ headerShown: false }}
          component={ItemScreen}
        />
        {/* <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
