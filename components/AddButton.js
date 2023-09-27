import { interfaceIcons } from "../assets/interface";
import React, { useState } from "react";
import { Button, Image, TouchableOpacity } from "react-native";

export default function AddButton({ handleAddToMenu, dish }) {
  const [isPinging, setIsPinging] = useState(false);

  const handlePress = () => {
    setIsPinging(true);
    handleAddToMenu(dish);

    setTimeout(() => {
      setIsPinging(false);
    }, 1000);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`rounded-xl absolute bottom-3 right-3 bg-pink-500 hover:bg-pink-400 w-12 aspect-square text-white ${
        isPinging ? "animate-ping" : "hover:animate-spin"
      }`}>
      <Image source={interfaceIcons["plus"]} alt="atc-icon" className="m-2" />
    </TouchableOpacity>
  );
}
