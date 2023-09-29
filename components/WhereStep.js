import { interfaceIcons } from "../assets/interface";
import WhereCard from "./WhereCard";
import { View, Text } from 'react-native';

export default function WhereStep({
  handleWhereChoice,
}) {

  return (
    <View className="h-[90vh] flex flex-col mx-auto w-full">
      <Text className="font-bold text-center text-2xl mb-2">
        Where will you be eating today?
      </Text>
      <View className="flex flex-col items-center mt-6 w-full">
        <WhereCard
          label="Eat In"
          imageSrc={interfaceIcons["restaurant"]}
          handleWhereChoice={handleWhereChoice}
        />
        <WhereCard
          label="Take Out"
          imageSrc={interfaceIcons["takeOut"]}
          handleWhereChoice={handleWhereChoice}
        />
      </View>
    </View>
  );
}
