import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Image, ScrollView } from "react-native";
import { View } from "react-native";
import Loading from "../components/Loading";
import { categories, items } from "../constants";
import { Text } from "react-native";
import CategoriesStep from "../components/CategoriesScreen/CategoriesStep";
import { useEffect } from "react";
import { Dimensions } from "react-native";
import ItemPanel from "../components/CategoriesScreen/ItemPanel";
import sakura from "../assets/sakuraFestival/sakura-1.png";
import { TouchableOpacity } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";

const { height } = Dimensions.get("window");

const CategoriesScreen = () => {
  const [loading, setLoading] = useState(false);
  const [itemOpen, setItemOpen] = useState(null);
  const [categorySelected, setCategorySelected] = useState("");

  const handleAddToMenu = (item) => {
    console.log(item);
  };

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
            {!categorySelected ? (
              <>
                <View className="h-14 w-14 mt-4 mb-8">
                  <Image
                    className="max-w-full max-h-full"
                    source={sakura}
                    alt="sakura-logo"
                  />
                </View>
                <Text className="tracking-widest font-black text-[32px] mb-2">
                  Hey,
                </Text>
                <Text className="tracking-widest font-medium text-[28px] mb-2">
                  what will you eat?
                </Text>
              </>
            ) : (
              <TouchableOpacity className="flex flex-row items-center" onPress={() => setCategorySelected("")}>
                <ChevronLeftIcon color="black" size={24} />
                <Text className="font-black text-xl">Back</Text>
              </TouchableOpacity>
            )}
            <CategoriesStep
              categories={categories}
              items={items}
              itemOpen={itemOpen}
              setItemOpen={setItemOpen}
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
          </ScrollView>
          <ItemPanel itemOpen={itemOpen} setItemOpen={setItemOpen} handleAddToMenu={handleAddToMenu} />
        </>
      )}
    </View>
  );
};

export default CategoriesScreen;
