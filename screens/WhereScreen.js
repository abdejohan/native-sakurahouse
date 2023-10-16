import React, { useState } from "react";
import { View, ScrollView, Button, Text, Animated, Dimensions } from "react-native";
import Loading from "../components/Loading";
import WhereStep from "../components/WhereScreen/WhereStep";
import { useNavigation } from "@react-navigation/native";


export default function WhereScreen() {
  const [loading, setLoading] = useState(false);
  const [whereChoice, setWhereChoice] = useState("");
  const navigation = useNavigation();

  const handleWhereChoice = (choice) => {    
    setWhereChoice(choice);
    navigation.navigate("Menu", { whereChoice });
  };


  return (
    <View className="flex-1 bg-white">
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          className="px-4">
          <WhereStep handleWhereChoice={handleWhereChoice} />
        </ScrollView>
      )}
    </View>
  );
}
