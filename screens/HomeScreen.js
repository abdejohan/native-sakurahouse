import {
  View,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import Loading from "../components/loading";
import Hero from "../components/Hero";
import { interfaceIcons } from "../assets/interface";

const ios = Platform.OS === "ios";

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
          <Image
            source={interfaceIcons["sakuraBg"]}
            alt="sakura-bg"
            className="absolute w-full opacity-40"
          />
          <Hero />
        </ScrollView>
      )}
    </View>
  );
}
