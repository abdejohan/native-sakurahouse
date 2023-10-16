import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import {
  MapPinIcon,
  BanknotesIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";


const NavigationSteps = ({
  currentScreen
}) => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row justify-around py-4 items-center bg-white border border-gray-300">
      <TouchableOpacity
        onPress={() => navigation.navigate("Where")}
        className="flex justify-around items-center">
        <MapPinIcon
          color={currentScreen === "Where" ? "pink" : "gray"}
          size={24}
        />
        <Text className={`${currentScreen === "Where" ? "text-pink-300" : "text-gray-400"}  mt-2`}>Where</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Menu")}
        className="flex justify-around items-center">
        <ShoppingCartIcon
          color={currentScreen === "Menu" ? "pink" : "gray"}
          size={24}
        />
        <Text className={`${currentScreen === "Menu" ? "text-pink-300" : "text-gray-400"}  mt-2`}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Payment")}
        className="flex justify-around items-center">
        <BanknotesIcon
          color={currentScreen === "Payment" ? "pink" : "gray"}
          size={24}
        />
        <Text className={`${currentScreen === "Payment" ? "text-pink-300" : "text-gray-400"}  mt-2`}>Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationSteps;
