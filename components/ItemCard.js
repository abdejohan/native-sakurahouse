import { useNavigation } from "@react-navigation/native";
import AddButton from "./AddButton";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function ItemCard ({
  item,
  index,
  handleAddToMenu
}) {
    const navigation = useNavigation();

  return (
    <View
      key={`${index}${item.title}itemcard`}
      className="relative rounded-xl "
    >
      <TouchableOpacity
        className="w-full flex flex-col flex-row h-min-[400px] h-[400px] cursor-pointer rounded-xl bg-pink-100 hover:bg-pink-200 relative shadow-lg overflow-hidden "
        onPress={() => navigation.navigate(`/itemes/${item.id}`)}
      >
        <View className="pb-0 pb-5 h-[60%] h-[50%] w-full absolute right-0">
          <Image
            className="h-[100%] object-cover rounded-xl"
            src={item?.image}
            alt="Card Image"
          />
        </View>
        <View className="px-6 py-4 flex flex-col h-[40%] h-[50%] w-full absolute bottom-0">
          <Text className="font-bold mb-2">{item.title}</Text>
          <Text className="text-gray-700 line-clamp-3">
            {item.description}
          </Text>
          <Text className="mt-3 font-bold">${item.price.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
      {
        handleAddToMenu && (
          <AddButton
            handleAddToMenu={handleAddToMenu}
            item={item}
          />
        )
      }
    </View>
  );
};
