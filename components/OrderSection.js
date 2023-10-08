import React, { useRef, useState } from "react";
import {
  ScrollView,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../constants/index";
import WhereStep from "./WhereStep";
import { items } from "../constants/index";
import MenuStep from "./MenuStep";
import OrderTotal from "./OrderTotal";

export default function OrderSection() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  const handlePlaceOrder = (order, totalPrice) => {
    let newOrder = [];

    order.forEach((item) => {
      const existingItem = newOrder.find((item) => item.itemId === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        newOrder.push({ itemId: item.id, itemTitle: item.title, quantity: 1 });
      }
    });

    const data = {
      items: newOrder,
      totalPrice: totalPrice,
    };

    axios
      .post("/api/orders", data)
      .then(() => {
        // toast.sucess('Order placed successfully!');
        setOrder([]);
        setTotalPrice(0);
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAddToMenu = (item) => {
    const updatedOrder = [...order, item];
    setOrder(updatedOrder);

    const totalPrice = updatedOrder.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0);
    setTotalPrice(totalPrice);
  };


  return (
    <ScrollView className="flex-1 p-4" ref={scrollViewRef}>
      <WhereStep />
      <MenuStep
        handleAddToMenu={handleAddToMenu}
        categories={categories}
        items={items}
      />
      <OrderTotal
        order={order}
        totalPrice={totalPrice}
        handlePlaceOrder={handlePlaceOrder}
        numberOfPersons={numberOfPersons}
      />
    </ScrollView>
  );
}
