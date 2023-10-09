import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import minusCircle from "../../assets/interface/minus-circle.png";
import add from "../../assets/interface/add.png";
import { TextInput } from "react-native";

export default function ItemCard({
  item,
  index,
  handleAddToMenu,
  setItemOpen,
}) {
  const handlePress = () => {
    handleAddToMenu(item);
  };



  return (
    <TouchableOpacity
      onPress={() => setItemOpen(item)}
      key={`${index}${item.title}-itemcard`}
      className="w-[47%] h-full rounded-3xl aspect-[9/13] my-2 mx-auto flex flex-col justify-between relative">
      <View className="w-full h-[50%] bg-gray-100 rounded-t-3xl">
        <Image className="rounded-t-3xl h-full" src={item?.image} alt="Card Image" />
      </View>
      <View className="w-full h-[50%] flex flex-col items-start justify-start px-4 bg-pink-100 rounded-b-3xl absolute bottom-0">
        <View className="my-3">
          <Text className="font-medium text-xl">{item.title}</Text>
          <Text className="italic text-xs">
            ${item.price.toFixed(2)} for {item.specification}
          </Text>
        </View>
        {handleAddToMenu && (
          <View className="flex flex-row bg-white rounded-3xl">
            <TouchableOpacity onPress={handlePress} className={`h-10 w-10 m-1`}>
              <Image
                source={minusCircle}
                alt="atc-icon"
                className="max-w-full max-h-full"
              />
            </TouchableOpacity>
            <TextInput
              className="h-10 w-10 m-1 bg-gray-100 rounded-xl"
              value={item.quantity}
              onChangeText={(text) => {
                item.quantity = text;
              }}
            />
            <TouchableOpacity onPress={handlePress} className={`h-10 w-10 m-1`}>
              <Image
                source={add}
                alt="atc-icon"
                className="max-w-full max-h-full"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
