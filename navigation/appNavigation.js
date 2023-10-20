import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WhereScreen from "../screens/WhereScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import ThanksScreen from "../screens/ThanksScreen";
import PaymentScreen from "../screens/PaymentScreen";
import Header from "../components/Header";
import NavigationSteps from "../components/NavigationSteps";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenListeners={{
        state: (e) => {
          // Do something with the state
          console.log('Current Screen', e.data.state.routeNames[e.data.state.index]);
        },
      }}      
      >
        <Stack.Screen
          name="Where"
          options={{ headerShown: false }}
          component={WhereScreen}
        />
        <Stack.Screen
          name="Menu"
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
      <NavigationSteps />
      <Header />
    </NavigationContainer>
  );
}
