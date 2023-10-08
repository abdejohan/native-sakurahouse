import { Text, View } from "react-native";
import CategoryGrid from "./CategoriesGrid";

export default function CategoriesStep({ handleAddToMenu, categories, items }) {
  return (
    <View className="flex flex-col w-full h-[90vh]">
      <Text className="font-bold text-center text-2xl">
        Go ahead and choose!
      </Text>
      <CategoryGrid categories={categories} />
    </View>
  );
}
