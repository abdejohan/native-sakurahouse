import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function CoversNumberStep({ setNumberOfPersons, handleNumberOfPeople }) {

    const handleInputChange = (value) => {
        const parsedValue = parseInt(value, 10);
        const newValue = isNaN(parsedValue) || parsedValue < 1 ? 1 : parsedValue;
        setNumberOfPersons(newValue);
      };

  return (
    <View className="my-4">
      <Text className="font-bold text-xl mb-2">How many covers?</Text>
      <Text className="mb-2">
        Select the number of persons this order will be for
      </Text>
      <View className="my-2">
        <View className="relative w-full">
          <TextInput
            onChangeText={handleInputChange}
            keyboardType="numeric"
            defaultValue="1"
            className="p-4 bg-white border-2 rounded-md"
          />
          <Text className="absolute text-md duration-150 transform -translate-y-3 top-5 left-4 bg-white">
            Number Of Persons
          </Text>
        </View>
        <TouchableOpacity onPress={handleNumberOfPeople}>
          {/* <Button variant={1} label="Next step" /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}
