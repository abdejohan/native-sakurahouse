import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function CategoryCard({ category, categorySelected, setCategorySelected }) {

  return (
    <TouchableOpacity
      className="w-[47%] rounded-3xl aspect-[9/11] mx-auto my-2 py-3 flex flex-col items-center justify-center bg-pink-100"
      onPress={() => {
        categorySelected !== category ? setCategorySelected(category) : setCategorySelected("")
      }}
    >
      <View className="h-28 w-28 p-4 mt-4">
        <Image
          className="max-w-full max-h-full object-contain"
          source={category?.icon}
          alt="Category Image"
        />
      </View>
      <View className="flex justify-start pb-6 text-center">
        <Text className="font-bold text-lg w-full">{category.label} | {category.japaneseLabel}</Text>
      </View>
    </TouchableOpacity>
  );
}
