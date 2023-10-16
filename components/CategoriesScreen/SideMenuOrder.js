import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { orderExample } from "../../constants";
import { Image } from "react-native";
import { MinusIcon, PlusIcon, XMarkIcon } from "react-native-heroicons/solid";
import { Animated } from "react-native";

const SideMenuOrder = ({ sideOrderOpen, setSideOrderOpen }) => {
  const [order, setOrder] = useState(orderExample);
  const translateXAnim = new Animated.Value(-100);

  Animated.spring(translateXAnim, {
    toValue: sideOrderOpen ? 0 : -100,
    useNativeDriver: false,
  }).start();

  const navigation = useNavigation();

  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#00000020",
        zIndex: 1,
      }}>
      <Animated.View
        style={{
          height: "100%",
          transform: [{ translateX: translateXAnim }],
          zIndex: 2,
        }}>
        <View
          id="side-order"
          className="pr-4 pl-4 pt-20 bg-pink-50 absolute right-0 w-[70%] min-h-[100vh] h-full">
          <View className="flex flex-row justify-between items-start">
            <View className="flex flex-col">
              <Text className="text-lg font-black">My</Text>
              <Text className="text-lg font-black">Order</Text>
              <Text className="text-gray-400 text-xs mt-2 mb-6">Take Out</Text>
            </View>
            <TouchableOpacity onPress={() => setSideOrderOpen(!sideOrderOpen)}>
              <XMarkIcon color="black" size={30} />
            </TouchableOpacity>
          </View>
          {order.map((item, index) => (
            <View
              key={`${item}${index}-orderitem`}
              className="flex flex-col justify-center items-center py-4 border-b border-pink-200">
              <View className="w-12 aspect-square rounded-xl mb-3">
                <Image
                  className="h-full min-w-full rounded-xl"
                  src={item?.image}
                  alt="Card Image"
                />
              </View>
              <Text className="text-center text-xs italic font-medium">
                {item.title}
              </Text>
              <Text className="text-center text-xs font-bold text-pink-500 my-1">
                ${(item.price * item.quantitySelected).toFixed(2)}
              </Text>
              <View className="flex flex-row items-center">
                <TouchableOpacity
                  className={`w-4 h-2 m-1 px-4 py-3 bg-gray-100 flex justify-center items-center rounded-xl`}>
                  <MinusIcon color="black" size={18} />
                </TouchableOpacity>
                <Text className="px-1 text-center font-medium text-xs">
                  {item.quantitySelected}
                </Text>
                <TouchableOpacity
                  className={`w-4 h-2 m-1 px-4 py-3 bg-pink-500 flex justify-center items-center rounded-xl`}>
                  <PlusIcon color="white" size={18} />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <View className="flex flex-col items-center justify-between mt-4">
            <Text>Total</Text>
            <Text>$24.99</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Payment")}
              className="flex flex-row justify-between bg-pink-500 mt-4 py-2 px-4 rounded-xl">
              <Text className="text-white text-center text-lg font-bold">
                Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default SideMenuOrder;
