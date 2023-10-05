import React, { useState } from "react";
import { Button, Image, TouchableOpacity } from "react-native";
import minusCircle from "../assets/interface/minus-circle.png";

export default function RemoveButton({
    handleAddToMenu,
    item }) {

  const handlePress = () => {
    handleAddToMenu(item);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`h-10 w-10 m-1`}>
      <Image source={minusCircle} alt="atc-icon" className="max-w-full max-h-full" />
    </TouchableOpacity>
  );
}
