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
      className={`${itemOpen === item ? "" : "" } w-[30%] h-full aspect-[9/12] my-2 mx-auto flex flex-col justify-between relative rounded-3xl`}>
      <View className="w-full h-full rounded-3xl">
        <Image className="rounded-3xl h-full" src={item?.image} alt="Card Image" />
      </View>
      <View className="w-full h-[50%] flex flex-col items-center justify-center rounded-b-3xl absolute bottom-0">
          <Text className="text-white font-medium text-xl text-center">{item.title}</Text>
          <Text className="text-white italic">${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}
