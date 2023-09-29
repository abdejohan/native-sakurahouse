import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Hero() {
  const navigation = useNavigation();

  return (
    <View className="relative isolate h-[90vh] px-4 mx-auto w-full py-20 items-center">
      <Text className="text-4xl px-5 font-bold tracking-tight text-black sm:text-6xl text-center">
        Experience the essence of Japanese cuisine.
      </Text>
      <Text className="p-5 text-lg leading-8 text-black text-center">
        Immerse yourself in authentic flavors and enjoy a remarkable dining
        experience. Savor our exquisite sushi, sashimi, and more meticulously
        prepared dishes by our skilled chefs.
      </Text>
      <TouchableOpacity
        className="mt-4 py-5 px-6 rounded-3xl bg-pink-400"
        onPress={() => {
          navigation.navigate("Where");
        }}>
        <Text className="text-white font-bold text-[24px]">Start Order</Text>
      </TouchableOpacity>
    </View>
  );
}
