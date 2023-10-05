import React, { useState } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import Loading from "../components/Loading";
import { useNavigation } from "@react-navigation/native";

export default function ThanksScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const orderNumber = "#0" + (Math.random() * 1000).toFixed(0).toString().padStart(4, '0');;

  return (
    <View className="flex-1 bg-white justify-center items-center px-2">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Text className="text-center font-bold text-3xl mb-5">
            Your Order Number is {orderNumber}
          </Text>
          <Text className="">
            We will update you when it'll be hot & ready!
          </Text>
          <TouchableOpacity
            className="bg-pink-400 mt-8 rounded-3xl"
            onLongPress={() => navigation.navigate("Home")}>
            <Text className="text-white text-center p-4 font-bold text-xl">
              Long press to go back to the beginning
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
