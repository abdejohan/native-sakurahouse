import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import Loading from "../components/Loading";
import { categories } from "../constants";
import { Text } from "react-native";
import CategoriesStep from "../components/CategoriesScreen/CategoriesStep";

const CategoriesScreen = () => {
  const [loading, setLoading] = useState(false);

  return (
    <View className="flex-1 bg-white">
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          className="px-4">
          <Text className="tracking-wider font-bold text-center text-[32px] mb-2">
            What will you be eating today?
          </Text>
          <CategoriesStep categories={categories} />
        </ScrollView>
      )}
    </View>
  );
};

export default CategoriesScreen;
