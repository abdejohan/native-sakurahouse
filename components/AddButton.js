import { interfaceIcons } from "../assets/interface";
import React, { useState } from "react";
import { Button, Image, TouchableOpacity } from "react-native";

export default function AddButton({ handleAddToMenu, item }) {

  const handlePress = () => {
    handleAddToMenu(item);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`rounded-xl bg-pink-400 w-12 aspect-square text-white animate-ping`}>
      <Image source={interfaceIcons["plus"]} alt="atc-icon" className="max-w-full max-h-full object-contain" />
    </TouchableOpacity>
  );
}
