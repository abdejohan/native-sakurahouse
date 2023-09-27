import { Text, View } from "react-native";
import Tab from "./Tab";
import ItemGrid from "./ItemGrid";

export default function MenuStep({
    handleAddToMenu,
    categories,
    items
}) {
  return (
    <View className="p-4">
      <Text className="font-bold text-xl mb-2">What will you eat today?</Text>
      <Text>
        Browse within our menu, select your items add them to your card and
        order!
      </Text>
      {categories.map((category) => (
        <Tab
          title={category.label}
          title2={category.japaneseLabel}
          icon={category.icon}
          key={category.label}
          className="mb-4">
          <ItemGrid
            items={items}
            category={category}
            handleAddToMenu={handleAddToMenu}
          />
        </Tab>
      ))}
    </View>
  );
}
