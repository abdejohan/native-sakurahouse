import React from "react";
import CategoryCard from "./CategoryCard";
import { View } from "react-native-animatable";

const CategoriesGrid = ({ categories }) => {

  return (
    <View className="flex flex-row flex-wrap mt-8 justify-center">
      {categories.map((category) => (
        <CategoryCard
            category={category}
            key={category.label}
        />
      ))}
    </View>
  );
};

export default CategoriesGrid;
