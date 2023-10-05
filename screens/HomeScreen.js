import { View, ScrollView, Platform, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import Confetti from 'react-confetti'

const ios = Platform.OS === "ios";
var { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);

  return (
    <View className="flex-1 bg-white">
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}>
          {/* <Image
            source={interfaceIcons["sakuraBg"]}
            alt="sakura-bg"
            className="absolute w-full opacity-40"
          /> */}
          <Hero />
        </ScrollView>
      )}
    </View>
  );
}
