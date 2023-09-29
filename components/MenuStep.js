import { Text, View } from "react-native";
import Tab from "./Tab";
import ItemGrid from "./ItemGrid";

export default function MenuStep({ handleAddToMenu, categories, items }) {
  return (
    <View className="min-h-[90vh] mx-auto w-full mb-14">
      <Text className="font-bold text-xl mb-2">What will you eat today?</Text>
      <Text>
        Browse within our menu, select your items add them to your card and
        order!
      </Text>
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
