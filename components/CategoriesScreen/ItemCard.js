import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function ItemCard({
  item,
  index,
  itemOpen,
  setItemOpen,
}) {


  return (
    <TouchableOpacity
      onPress={() => setItemOpen(item)}
      key={`${index}${item.title}-itemcard`}
      className={`${itemOpen === item ? "" : "" } w-[28%] aspect-[1/2] m-1 flex flex-col justify-between`}>
      <View className="max-w-full aspect-square rounded-full">
        <Image className="h-full min-w-full rounded-full" src={item?.image} alt="Card Image" />
      </View>
      <View className="w-full h-[50%] px-1 pb-4 mt-2 flex flex-col items-center justify-between">
          <Text className="text-black text-xs font-medium italic text-center">{item.title}</Text>
          <Text className="text-pink-500 font-bold text-xs">${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}
