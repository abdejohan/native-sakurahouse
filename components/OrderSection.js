import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { categories } from '../constants/index';

// import DishGrid from "../Dishes/DishGrid";
// import Tab from "../Tab";
// import Button from "../Button";
import WhereStep from "./WhereStep";
// import OrderCard from "./OrderCard";


const ORDER_STEPS = {
  WHERE: 0,
  WHO: 1,
  WHAT: 2,
};

export default function OrderSection({ dishes }) {
  const navigation = useNavigation();

  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [step, setStep] = useState(ORDER_STEPS.WHERE);
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  const smoothScrolling = (targetId) => {
    navigation.navigate(targetId);
  };

  const handleEatingPlace = () => {
    smoothScrolling("who");
    setStep(ORDER_STEPS.WHO);
  };

  const handleNumberOfPeople = () => {
    smoothScrolling("what");
    setStep(ORDER_STEPS.WHAT);
  };

  const handleInputChange = (value) => {
    const parsedValue = parseInt(value, 10);
    const newValue = isNaN(parsedValue) || parsedValue < 1 ? 1 : parsedValue;
    setNumberOfPersons(newValue);
  };

  const handleAddToMenu = (dish) => {
    const updatedOrder = [...order, dish];
    setOrder(updatedOrder);

    const totalPrice = updatedOrder.reduce((accumulator, currentDish) => {
      return accumulator + currentDish.price;
    }, 0);
    setTotalPrice(totalPrice);
  };

  const handlePlaceOrder = (order, totalPrice) => {
    let newOrder = [];

    order.forEach((dish) => {
      const existingDish = newOrder.find((item) => item.dishId === dish.id);

      if (existingDish) {
        existingDish.quantity += 1;
      } else {
        newOrder.push({ dishId: dish.id, dishTitle: dish.title, quantity: 1 });
      }
    });

    const data = {
      dishes: newOrder,
      totalPrice: totalPrice,
    };

    axios
      .post('/api/orders', data)
      .then(() => {
        // toast.sucess('Order placed successfully!');
        setOrder([]);
        setTotalPrice(0);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ScrollView className="flex-1">
      <WhereStep handleEatingPlace={handleEatingPlace} />
      <View className="p-4">
        <Text className="font-bold text-xl mb-2">How many persons?</Text>
        <Text className="mb-2">
          Select the number of persons this order will be for
        </Text>
        <View className="my-2">
          <View className="relative mb-5 w-full">
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
      <View className="p-4">
        <Text className="font-bold text-xl mb-2">What will you eat today?</Text>
        <Text>
          Browse within our menu, select your items add them to your card and order!
        </Text>
        {/* {categories.map((category) => (
          <Tab
            title={category.label}
            title2={category.japaneseLabel}
            icon={category.icon}
            key={category.label}
            className="mb-4"
          >
            <DishGrid
              dishes={dishes}
              category={category}
              handleAddToMenu={handleAddToMenu}
            />
          </Tab>
        ))} */}
        {/* <OrderCard
          order={order}
          totalPrice={totalPrice}
          handlePlaceOrder={handlePlaceOrder}
          numberOfPersons={numberOfPersons}
        /> */}
      </View>
    </ScrollView>
  );  
}