import { View, Text, TouchableOpacity, Image } from "react-native";

export default function WhereCard({
  label,
  imageSrc,
  handleWhereChoice,
}) {

  const handlePress = () => {
    handleWhereChoice(label);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-[60%] aspect-[9/10] rounded-3xl my-2 py-3 flex flex-col justify-center items-center bg-pink-100">
      <View className="h-32 w-32 p-2 mb-4">
        <Image
          className="max-w-full max-h-full"
          source={imageSrc}
          alt={label}
        />
      </View>
      <View className="py-2 text-center absolute bottom-5">
        <Text className="text-center font-bold text-xl">{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
