import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Platform } from "react-native";
import { TouchableOpacity } from "react-native";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

const ios = Platform.OS === "ios";

function Header() {

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <SafeAreaView className={ios ? "mb-2" : "mb-3"}>
      <StatusBar style="light" />
      <View className="flex-row justify-between items-center mx-4 my-3">
        <TouchableOpacity onPress={toggleMenu}>
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="#ec4899" />
        </TouchableOpacity>
        <Text className="text-3xl font-bold text-pink-400">🌸 SakuraHouse</Text>
        <TouchableOpacity onPress={""}>
          <MagnifyingGlassIcon size="30" strokeWidth={2} color="#ec4899" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Header;
