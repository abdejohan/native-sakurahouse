import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Hero() {
  const navigation = useNavigation();

  return (
    <View className="relative isolate h-[90vh] px-4 mx-auto w-full py-20 items-center">
      <Text className="text-3xl px-10 font-bold tracking-tight text-black sm:text-6xl text-center">
        Experience the essence of Japanese cuisine 🌸
      </Text>
      <TouchableOpacity
        className="mt-4 py-5 px-6 rounded-xl bg-pink-100"
        onPress={() => {
          navigation.navigate("Where");
        }}>
        <Text className="text-black font-bold text-[24px]">Touch to Start</Text>
      </TouchableOpacity>
    </View>
  );
}
