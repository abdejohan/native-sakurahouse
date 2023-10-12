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
          contentContainerStyle={{ paddingBottom: 10 }}>
          <View className="w-[90vw] mx-auto flex items-center justify-center">
            <View className="h-24 w-24 mt-4 mb-4 ">
              <Image
                className="max-w-full max-h-full"
                source={sakura}
                alt="sakura-logo"
              />
            </View>
            <Text className="text-3xl font-black text-white">My Order</Text>
            {/* <Text className="font-lg">{where}</Text> */}
            {orderExample.map((item, index) => (
              <View
                key={`${item}${index}orderitem`}
                className="flex flex-row justify-start">
                <Text className="text-white w-10">x{item.quantity}</Text>
                <Text className="text-white w-20">
                  ${(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            ))}

            <View className="flex flex-row items-center justify-between mt-4 w-full">
              <View>
                <Text className="text-white">Total</Text>
                <Text className="text-white">$24.99</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Thanks")}
                className="flex flex-row justify-between bg-pink-500 py-2 px-4 rounded-xl">
                <Text className="text-white text-lg font-bold">Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
