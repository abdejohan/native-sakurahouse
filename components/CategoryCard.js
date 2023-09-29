import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CategoryCard ({ category }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="w-full rounded-3xl my-2 py-3 flex flex-col items-center justify-center bg-pink-100"
      // onPress={() => navigation.navigate(`categories/${category.label}`)}
    >
      <View className="h-40 w-40 p-4">
        <Image
          className="max-w-full max-h-full object-contain"
          source={category?.icon}
          alt="Category Image"
        />
      </View>
      <View className="pb-6 text-center">
        <Text className="font-bold text-xl w-full">{category.label}</Text>
        <Text className="text-gray-700 mt-2">{category.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
