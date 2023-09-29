import { View, Text, TouchableOpacity, Image } from "react-native";

export default function WhereCard({
  label,
  description,
  imageSrc,
  handleWhereChoice,
}) {

  const handlePress = () => {
    handleWhereChoice(label);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-full rounded-3xl my-2 py-3 flex flex-col items-center justify-center bg-pink-100">
      <View className="h-40 w-40 p-4">
        <Image
          className="max-w-full max-h-full object-contain"
          source={imageSrc}
          alt={label}
        />
      </View>
      <View className="pb-6 text-center">
        <Text className="font-bold text-xl w-full">{label}</Text>
        <Text className="text-gray-700 mt-2">{description}</Text>
      </View>
    </TouchableOpacity>
  );
}
