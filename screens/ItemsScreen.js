import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { items } from "../constants";
import Loading from "../components/Loading";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import ItemsGrid from "../components/ItemsScreen/ItemsGrid";

const ItemsScreen = (fromPreviousScreen) => {
  const [loading, setLoading] = useState(false);
  const category = fromPreviousScreen.route.params.category;

  const handleAddToMenu = (item) => {
    console.log(item)
  };

  return (
    <View className="flex-1 bg-white">
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          className="px-4">
          <Text className="tracking-wider font-bold text-center px-4 text-[32px] mb-2">
            {category.label} | {category.japaneseLabel}
          </Text>
          <Text className="tracking-wider italic text-center px-4 text-[14px] mb-2">
            {category.description}
          </Text>
          <ItemsGrid category={category} items={items} handleAddToMenu={handleAddToMenu} />
        </ScrollView>
      )}
    </View>
  );
};

export default ItemsScreen;
