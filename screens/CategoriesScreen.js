import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import Loading from "../components/Loading";
import { categories, items } from "../constants";
import { Text } from "react-native";
import CategoriesStep from "../components/CategoriesScreen/CategoriesStep";
import { useEffect } from "react";
import { Dimensions } from "react-native";
import ItemPanel from "../components/CategoriesScreen/ItemPanel";

const { height } = Dimensions.get("window");

const CategoriesScreen = () => {
  const [loading, setLoading] = useState(false);
  const [itemOpen, setItemOpen] = useState(null);

  useEffect(() => {
    if (itemOpen) {
      this._panel.show((height / 100) * 80);
    } else {
      this._panel.hide();
    }
  }, [itemOpen]);

  return (
    <View className="flex-1 bg-white">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
            className="px-4">
            <Text className="tracking-wider font-bold text-center text-[32px] mb-2">
              What will you be eating today?
            </Text>
            <CategoriesStep
              categories={categories}
              items={items}
              itemOpen={itemOpen}
              setItemOpen={setItemOpen}
            />
          </ScrollView>
          <ItemPanel itemOpen={itemOpen} setItemOpen={setItemOpen} />
        </>
      )}
    </View>
  );
};

export default CategoriesScreen;
