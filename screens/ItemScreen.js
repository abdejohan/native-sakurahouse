import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import { styles, theme } from "../theme";
import Loading from "../components/loading";
import { useNavigation, useRoute } from "@react-navigation/native";

const ios = Platform.OS == "ios";
var { width, height } = Dimensions.get("window");

export default function ItemScreen() {
  const [loading, setLoading] = useState(false);
  const { params: item } = useRoute();
  const navigation = useNavigation();

  return (
    <>
      <LinearGradient
        colors={["transparent", "#ec489945"]}
        style={{ width, height: height * 0.4 }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0"
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className="flex-1 p-4">
        <View className="w-full">
          <SafeAreaView
            className={`flex-row justify-between p-2 w-full ${
              ios ? "mb-2" : "mb-3"
            }`}>
            <TouchableOpacity className="" onPress={() => navigation.goBack()}>
              <ChevronLeftIcon size="28" strokeWidth={2.5} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("heart touched")}>
              <HeartIcon size="35" color="black" />
            </TouchableOpacity>
          </SafeAreaView>
          {loading ? (
            <Loading />
          ) : (
            <View className="border border-black flex flex-col items-center justify-center">
              <Text className="text-black text-3xl">
                {item.title} | {item.japaneseTitle}
              </Text>
              <Text className="text-black text-xl my-5">${item.price.toFixed(2)}</Text>
              <View className="h-40 w-full">
                <Image
                  className="h-full object-contain"
                  src={item?.image}
                  alt="Card Image"
                />
              </View>
              <Text className="text-black my-5">{item.description}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}
