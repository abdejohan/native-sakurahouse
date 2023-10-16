import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { orderExample } from '../../constants';
import { Image } from 'react-native';
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid';

const SideMenuOrder = () => {
  const [order, setOrder] = useState(orderExample);
  const navigation = useNavigation();

  const decrementQuantity = (index) => {
    const updatedOrder = [...order];
    if (updatedOrder[index].quantitySelected >= 1) {
      updatedOrder[index].quantitySelected -= 1;
      setOrder(updatedOrder);
    }
  };

  const incrementQuantity = (index) => {
    const updatedOrder = [...order];
    updatedOrder[index].quantitySelected += 1;
    setOrder(updatedOrder);
  };

  return (
    <View
      id="side-order"
      className="pr-4 pl-4 pt-20 bg-pink-50 absolute right-0 w-[33%] min-h-[100vh] h-full"
    >
      <Text className="text-lg font-black">My</Text>
      <Text className="text-lg font-black">Order</Text>
      <Text className="text-gray-400 text-xs mt-2 mb-6">Take Out</Text>
      {order.map((item, index) => (
        <View
          key={`${item}${index}-orderitem`}
          className="flex flex-col justify-center items-center py-4 border-b border-pink-200"
        >
          <View className="w-12 aspect-square rounded-full mb-3">
            <Image
              className="h-full min-w-full rounded-full"
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
              onPress={() => decrementQuantity(index)}
              className={`w-4 h-2 m-1 px-4 py-3 bg-gray-300 flex justify-center items-center rounded-xl`}
            >
              <MinusIcon color="white" size={18} />
            </TouchableOpacity>
            <Text className="px-1 text-center font-medium text-xs">
              {item.quantitySelected}
            </Text>
            <TouchableOpacity
              onPress={() => incrementQuantity(index)}
              className={`w-4 h-2 m-1 px-4 py-3 bg-pink-500 flex justify-center items-center rounded-xl`}
            >
              <PlusIcon color="white" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View className="flex flex-col items-center justify-between mt-4">
        <Text>Total</Text>
        <Text>$24.99</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Payment')}
          className="flex flex-row justify-between bg-pink-500 mt-4 py-2 px-4 rounded-xl"
        >
          <Text className="text-white text-center text-lg font-bold">
            Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SideMenuOrder;
