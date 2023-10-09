import SlidingUpPanel from "rn-sliding-up-panel";
import {
  View,
  ScrollView,
  Button,
  Text,
  Animated,
  Dimensions,
} from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const { height } = Dimensions.get("window");

const ItemPanel = ({ itemOpen, setItemOpen }) => {
  const animatedValue = new Animated.Value(0);
  const draggableRange = { top: height - 120, bottom: 0 };

  return (
    <SlidingUpPanel
      ref={(c) => (this._panel = c)}
      animatedValue={animatedValue}
      draggableRange={draggableRange}
      snappingPoints={[((height / 100) * 45)]}
      onBottomReached={() => setItemOpen(null)}>
      <View className="flex-1 bg-white items-center justify-start px-4 relative rounded-3xl">
        {itemOpen && (
          <View className="flex items-center justify-start w-full">
            <TouchableOpacity
              className="absolute top-2 bg-gray-200 h-1 w-6 rounded-3xl"
              onPress={() => this._panel.hide()}
            />
            <View className="absolute top-6 flex flex-col items-center justify-start w-full">
              <Text className="text-xl font-bold ml-4 w-full align-start">{itemOpen && itemOpen.title}</Text>
              <Text className="text-sm italic ml-4 mb-2 w-full align-start">{itemOpen && itemOpen.specification}</Text>
              <View className="w-full flex-row ml-4 mb-2">
                <TouchableOpacity className="mr-2 w-auto px-4 py-2 bg-pink-400 rounded-2xl"><Text className="text-white text-lg font-medium">Order</Text></TouchableOpacity>
                <TouchableOpacity className="mr-2 w-auto px-4 py-2 bg-pink-400 rounded-2xl"><Text className="text-white text-lg font-medium">Customize</Text></TouchableOpacity>
              </View>
              <View className="h-52 w-full mb-4 self-start rounded-3xl">
                <Image
                  className="w-full h-full rounded-3xl"
                  src={itemOpen.image}
                  alt="item image"
                />
              </View>
              <Text className="text-xl font-bold text-pink-500">{itemOpen && "$" + itemOpen.price.toFixed(2)}</Text>
              <Text>{itemOpen && itemOpen.description}</Text>
            </View>
          </View>
        )}
      </View>
    </SlidingUpPanel>
  );
};

export default ItemPanel;

// <Button title="Show panel" onPress={() => this._panel.show()} />
