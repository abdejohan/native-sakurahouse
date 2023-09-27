import { View, Text, ScrollView } from "react-native";

const stats = [
  { id: 1, name: "Prepared Today", value: "44 dishes" },
  { id: 2, name: "Average Order Amout", value: "$28.19" },
  { id: 3, name: "Number of 5-Stars Ratings", value: "Over 1,800" },
];

export default function Stats() {
  return (
    <View className="grid grid-cols-1 text-center">
      {stats.map((stat) => (
        <View key={stat.id} className="w-full p-4 text-center">
          <Text className="text-base leading-7 text-gray-600">{stat.name}</Text>
          <Text className="text-3xl font-semibold tracking-tight text-gray-900 hover:text-pink-500">
            {stat.value}
          </Text>
        </View>
      ))}
    </View>
  );
}
