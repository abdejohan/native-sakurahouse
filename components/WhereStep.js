import { interfaceIcons } from "../assets/interface";
import WhereCard from "./WhereCard";
import { View, Text } from 'react-native';

export default function WhereStep({
  handleWhereChoice,
}) {

  return (
    <View className="h-[90vh] mx-auto w-full">
      <Text className="font-bold text-xl mb-2">
        Where will you be eating today?
      </Text>
      <Text className="mb-4">
        Select if you will be eating at our restaurant or will you be eating
        out?
      </Text>
      <View className="flex flex-col items-center mt-6 w-full">
        <WhereCard
          label="Eat In"
          description="Enjoy eating within our restaurant."
          imageSrc={interfaceIcons["restaurant"]}
          handleWhereChoice={handleWhereChoice}
        />
        <WhereCard
          label="Take Out"
          description="We pack your order for you to eat out."
          imageSrc={interfaceIcons["takeOut"]}
          handleWhereChoice={handleWhereChoice}
        />
      </View>
    </View>
  );
}
