import SlidingUpPanel from "rn-sliding-up-panel";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions,
} from "react-native";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";

const { height } = Dimensions.get("window");

const ItemPanel = ({ itemOpen, setItemOpen, handleAddToMenu }) => {
  const animatedValue = new Animated.Value(0);
  const draggableRange = { top: height - 120, bottom: 0 };

  const handlePress = () => {
    handleAddToMenu(itemOpen);
  };

  return (
    <SlidingUpPanel
      ref={(c) => (this._panel = c)}
      animatedValue={animatedValue}
      draggableRange={draggableRange}
      onBottomReached={() => setItemOpen(null)}>
      <View className="flex-1 bg-pink-50 items-center justify-start px-4 relative rounded-xl">
        {itemOpen && (
          <View className="flex items-center justify-start w-full">
            <TouchableOpacity
              className="absolute top-2 bg-gray-200 h-1 w-6 rounded-xl"
              onPress={() => this._panel.hide()}
            />
            <View className="absolute top-6 flex flex-col items-center justify-start w-full">
              <View className="h-44 w-full mb-4 self-start">
                <Image
                  className="w-full h-full rounded-xl"
                  src={itemOpen.image}
                  alt="item image"
                />
              </View>
              <Text className="text-xl text-center font-black tracking-widest w-full">
                {itemOpen && itemOpen.title}
              </Text>
              <Text className="text-xl font-bold text-pink-500">
                {itemOpen && "$" + itemOpen.price.toFixed(2)}
              </Text>
              <Text className="text-sm italic text-center mb-2 w-full">
                {itemOpen && itemOpen.specification}
              </Text>
              <View className="flex flex-row bg-white rounded-xl">
                <TouchableOpacity
                  onPress={handlePress}
                  className={`h-10 w-10 m-1 bg-gray-100 rounded-xl flex justify-center items-center`}>
                  <MinusIcon color="black" size={24} />
                </TouchableOpacity>
                <TextInput
                  className="h-10 w-10 m-1 bg-gray-100 rounded-xl"
                  value={itemOpen.quantity}
                  onChangeText={(text) => {
                    itemOpen.quantitySelected = text;
                  }}
                />
                <TouchableOpacity
                  onPress={handlePress}
                  className={`h-10 w-10 m-1 bg-pink-400 rounded-xl flex justify-center items-center`}>
                  <PlusIcon color="white" size={24} />
                </TouchableOpacity>
              </View>
              <View className="w-full flex-row justify-center my-2">
                <TouchableOpacity className="w-auto mx-1 px-6 py-4 bg-gray-100 rounded-xl">
                  <Text className="text-black text-md font-black">
                    Customize
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setItemOpen(null)} className="w-auto mx-1 px-6 py-4 bg-pink-400 rounded-xl">
                  <Text className="text-white text-md font-black">Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </SlidingUpPanel>
  );
};

export default ItemPanel;

// <Button title="Show panel" onPress={() => this._panel.show()} />
