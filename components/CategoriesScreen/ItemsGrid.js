import { Text, View } from "react-native";
import ItemCard from "./ItemCard";

export default function ItemsGrid({ items, category, itemOpen, setItemOpen }) {




  return (
      <View className="mt-14">
        <Text className="tracking-widest font-black text-[24px] mb-2">
          {category.label}
        </Text>
        <View className="flex flex-row flex-wrap">
          {items.map((item, index) => {
            if (item.category == category.label) {
              return (
                <ItemCard
                  key={`${index}${item._id}-itemcard`}
                  item={item}
                  index={index}
                  itemOpen={itemOpen}
                  setItemOpen={setItemOpen}
                />
              );
            }
            return null;
          })}
        </View>
      </View>
  );
}
