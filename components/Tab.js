import { useState } from "react";
import { interfaceIcons } from "../assets/interface";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Tab({ children, title, title2, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className={`py-2 ${isOpen ? "border-b-4" : "border-b-2"}`}>
      <TouchableOpacity
        className={`cursor-pointer border-black p-[20px] flex flex-row justify-start gap-8 ${
          isOpen ? "font-bold" : "font-normal"
        }`}
        onPress={handleTabClick}>
        <View className="flex-none h-20 w-20 p-2">
          <Image className="max-w-full max-h-full object-contain" source={icon} alt="category-icon" />
        </View>
        <View className="flex-grow">
          <Text>
            {title} | {title2 && title2}
          </Text>
        </View>
        <View className="flex-none h-20 w-20 p-2 justify-self-end">
          {!isOpen ? (
            <Image
              source={interfaceIcons["angleDown"]}
              className="max-w-full max-h-full object-contain"
              alt="folded-icon"
            />
          ) : (
            <Image
              source={interfaceIcons["angleUp"]}
              className="max-w-full max-h-full object-contain"
              alt="folded-icon"
            />
          )}
        </View>
      </TouchableOpacity>
      <View
        className={`origin-top transition-all duration-2000 ease-in-out ${
          isOpen
            ? "opacity-100 h-auto my-8"
            : "opacity-0 h-0 my-0 overflow-hidden"
        }`}>
        {children}
      </View>
    </View>
  );
}
