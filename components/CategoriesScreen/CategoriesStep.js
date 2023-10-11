import { Text, View } from "react-native";
import CategoryGrid from "./CategoriesGrid";
import { useState } from "react";
import ItemsGrid from "./ItemsGrid";

export default function CategoriesStep({ categories, items, itemOpen, setItemOpen, categorySelected, setCategorySelected }) {

  return (
    <View className="flex flex-col w-full h-full">
      <CategoryGrid
        categories={categories}
        setCategorySelected={setCategorySelected}
        categorySelected={categorySelected}
      />
      {categorySelected && (
        <ItemsGrid items={items} category={categorySelected} itemOpen={itemOpen} setItemOpen={setItemOpen} />
      )}
    </View>
  );
}
