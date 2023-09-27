import React from 'react';
import { View, Text } from 'react-native';
import { categories } from '../constants/index';
import CategoryCard from './CategoryCard';

export default function CategoryList () {

  return (
    <View className="w-full p-4">
      <Text className="font-bold text-xl mb-2">Categories | カテゴリー</Text>
      <View className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.label} />
        ))}
      </View>
    </View>
  );
};
