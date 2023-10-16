import { View, ScrollView, Platform, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import Confetti from "react-confetti";
import sakura from "../assets/sakuraFestival/sakura-1.png";
import { Text } from "react-native";
import { orderExample } from "../constants";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";

var { width, height } = Dimensions.get("window");

export default function PaymentScreen() {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-green-700">
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10, paddingTop: 24 }}>
          <View className="w-[90vw] p-4 mx-auto flex items-center justify-center mt-4">
          <TouchableOpacity
            className="flex flex-row w-full items-center"
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon color="white" size={24} />
            <Text className="font-black text-white text-xl">Back</Text>
          </TouchableOpacity>
            <View className="h-24 w-24 mt-4 mb-4">
              <Image
                className="max-w-full max-h-full"
                source={sakura}
                alt="sakura-logo"
              />
            </View>
            <View className="flex justify-start w-full">
              <Text className="text-3xl font-black text-white">My</Text>
              <Text className="text-3xl font-black text-white">Order</Text>
              <Text className="text-gray-300 mt-1 mb-6">Take Out</Text>
            </View>
            {/* <Text className="font-lg">{where}</Text> */}
            {orderExample.map((item, index) => (
              <View
                key={`${item}${index}orderitem`}
                className="flex w-full flex-row items-center py-4 justify-between border-b border-gray-300">
                <View className="w-12 aspect-square rounded-xl">
                  <Image
                    className="h-full min-w-full rounded-xl"
                    src={item?.image}
                    alt="Card Image"
                  />
                </View>
                <Text className="text-white w-20">{item.title}</Text>
                <Text className="text-gray-300 w-20">
                  ${(item.price * item.quantitySelected).toFixed(2)}
                </Text>
                <Text className="text-white w-10">{item.quantitySelected}</Text>
              </View>
            ))}

            <View className="flex flex-row items-center justify-between mt-8 w-full">
              <View>
                <Text className="text-gray-300">Total</Text>
                <Text className="text-white font-bold text-3xl">$24.99</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Thanks")}
                className="flex flex-row justify-between bg-pink-200 py-2 px-4 rounded-xl">
                <Text className="text-black text-xl font-bold">Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
