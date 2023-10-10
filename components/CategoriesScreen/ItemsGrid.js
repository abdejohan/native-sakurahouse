import { Text, View } from "react-native";
import ItemCard from "./ItemCard";

export default function ItemsGrid({ items, category, itemOpen, setItemOpen }) {

  const handleAddToMenu = (item) => {
    console.log(item);
  };


  return (
    <>
      <View className="mt-5">
        <Text className="tracking-wider font-bold text-center px-4 text-[32px] mb-2">
          {category.label} | {category.japaneseLabel}
        </Text>
        <Text className="tracking-wider italic text-center px-4 text-[14px] mb-2">
          {category.description}
        </Text>
        <View className="flex flex-row flex-wrap mt-8 justify-center">
          {items.map((item, index) => {
            if (item.category == category.label) {
              return (
                <ItemCard
                  key={`${index}${item._id}-itemcard`}
                  item={item}
                  index={index}
                  handleAddToMenu={handleAddToMenu}
                  setItemOpen={setItemOpen}
                />
              );
            }
            return null;
          })}
        </View>
      </View>
    </>
  );
}
