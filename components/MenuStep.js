import { Text, View } from "react-native";
import Tab from "./Tab";
import ItemGrid from "./ItemGrid";

export default function MenuStep({ handleAddToMenu, categories, items }) {
  return (
    <View className="flex flex-col mx-auto w-full">
      <Text className="font-bold text-center text-2xl">Go ahead and choose!</Text>
      <View className="mt-6">
        {categories.map((category) => (
          <Tab
            title={category.label}
            title2={category.japaneseLabel}
            icon={category.icon}
            key={category.label}>
            <ItemGrid
              items={items}
              category={category}
              handleAddToMenu={handleAddToMenu}
            />
          </Tab>
        ))}
      </View>
    </View>
  );
}
