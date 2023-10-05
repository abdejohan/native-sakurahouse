import { useNavigation } from "@react-navigation/native";
import AddButton from "./AddButton";
import { View, Text, TouchableOpacity, Image } from "react-native";
import RemoveButton from "./RemoveButton";

export default function ItemCard({ item, index, handleAddToMenu }) {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate("Item", item);
  };

  return (
    <TouchableOpacity
      key={`${index}${item.title}itemcard`}
      className="w-full h-60 flex flex-col rounded-xl overflow-hidden my-2"
      onPress={() => handlePress(item)}>
      <View className="h-[70%] w-full">
        <Image
          className="h-[100%] object-cover rounded-t-xl"
          src={item?.image}
          alt="Card Image"
        />
      </View>
      <View className="flex flex-row items-center justify-between px-4 bg-pink-100 h-[30%] w-full absolute bottom-0">
        <View>
          <Text className="font-medium text-xl">{item.title}</Text>
          <Text className="italic text-xs">
            ${item.price.toFixed(2)} for {item.specification}
          </Text>
        </View>
        {handleAddToMenu && (
          <View className="flex flex-row bg-white rounded-3xl">
            <RemoveButton handleAddToMenu={handleAddToMenu} item={item} />
            <AddButton handleAddToMenu={handleAddToMenu} item={item} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
