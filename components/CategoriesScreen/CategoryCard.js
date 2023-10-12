import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function CategoryCard({ category, categorySelected, setCategorySelected }) {

  return (
    <TouchableOpacity
      className={`${categorySelected === category ? "bg-pink-200 border" : "bg-pink-100"} w-[45%] aspect-[9/10] rounded-3xl mx-auto my-2 py-3 flex flex-col items-center justify-center`}
      onPress={() => {
        categorySelected !== category ? setCategorySelected(category) : setCategorySelected("")
      }}
    >
      <View className="h-20 w-20 p-1 mb-4">
        <Image
          className="max-w-full max-h-full"
          source={category?.icon}
          alt="Category Image"
        />
      </View>
      <View className="text-center">
        <Text className={`${categorySelected === category ? "font-black" : "font-normal"}  text-lg w-full`}>{category.label}</Text>
      </View>
    </TouchableOpacity>
  );
}
