import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Animated, Easing } from "react-native";
import angleCircleDown from "../assets/interface/angle-circle-down.png";

export default function Tab({ children, title, title2, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className={`py-2 ${isOpen ? "fixed" : ""}`}>
      <TouchableOpacity
        activeOpacity={0.8}
        className={`cursor-pointer border-black p-2 flex flex-row justify-center items-center gap-8 ${
          isOpen ? "font-bold" : "font-normal"
        }`}
        onPress={handleTabClick}>
        <View className="flex-none h-8 w-8 justify-self-start">
          <Image
            source={angleCircleDown}
            className={`max-w-full max-h-full object-contain p-2`}
            alt="folded-icon"
          />
        </View>
        <View className="flex-grow">
          <Text className={`text-lg ${isOpen ? "font-bold" : ""}`}>
            {title} | {title2 && title2}
          </Text>
        </View>
        <View className="flex-none h-20 w-20 p-3 bg-pink-100 rounded-full">
          <Image
            className="max-w-full max-h-full"
            source={icon}
            alt="category-icon"
          />
        </View>
      </TouchableOpacity>
      <View
        className={` ${
          isOpen
            ? "opacity-100 h-auto mb-6"
            : "opacity-0 h-0 my-0 overflow-hidden"
        }`}>
        {children}
      </View>
    </View>
  );
}
