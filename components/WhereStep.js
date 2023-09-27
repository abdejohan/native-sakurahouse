import { interfaceIcons } from "../assets/interface";
import WhereCard from "./WhereCard";
import { View, Text } from 'react-native';

export default function WhereStep({ handleEatingPlace }) {

  return (
    <View className="p-4">
      <Text className="font-bold text-xl mb-2">
        Where will you be eating today?
      </Text>
      <Text className="mb-4">
        Select if you will be eating at our restaurant or will you be eating
        out?
      </Text>
      <View className="grid grid-cols-1 grid-cols-3 place-items-center">
        <WhereCard
          label="Eat In"
          description="Enjoy eating within our beautiful restaurant"
          imageSrc={interfaceIcons["restaurant"]}
          handleEatingPlace={handleEatingPlace}
        />
        <WhereCard
          label="Take Out"
          description="Wait for us to prepare and pack your order and take it out"
          imageSrc={interfaceIcons["takeOut"]}
          handleEatingPlace={handleEatingPlace}
        />
        <WhereCard
          label="Deliver It"
          description="Get comfortable while we deliver your order"
          imageSrc={interfaceIcons["delivery"]}
          handleEatingPlace={handleEatingPlace}
        />
      </View>
    </View>
  );
}
