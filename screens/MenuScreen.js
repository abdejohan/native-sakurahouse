import React, { useState } from "react";
import Loading from "../components/Loading";
import { ScrollView, Text, View } from "react-native";
import MenuStep from "../components/MenuStep";
import { categories, items } from "../constants/index";
import OrderTotal from "../components/OrderTotal";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function MenuScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToMenu = (item) => {
    const updatedOrder = [...order, item];
    setOrder(updatedOrder);

    const totalPrice = updatedOrder.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0);
    setTotalPrice(totalPrice);
  };

  const handlePlaceOrder = (order, totalPrice) => {
    navigation.navigate("Thanks");

    // let newOrder = [];
    // order.forEach((item) => {
    //   const existingItem = newOrder.find((item) => item.itemId === item.id);

    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //   } else {
    //     newOrder.push({ itemId: item.id, itemTitle: item.title, quantity: 1 });
    //   }
    // });

    // const data = {
    //   items: newOrder,
    //   totalPrice: totalPrice,
    // };

    // axios
    //   .post("/api/orders", data)
    //   .then(() => {
    //     setOrder([]);
    //     setTotalPrice(0);
    //     navigation.navigate({
    //         name: "Thanks",
    //         params: {
    //           order: newOrder,
    //           totalPrice: totalPrice,
    //         },
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <View className="flex-1 bg-white">
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          className="p-4"
        >
          <MenuStep
            handleAddToMenu={handleAddToMenu}
            categories={categories}
            items={items}
          />
          {/* <OrderTotal
            order={order}
            totalPrice={totalPrice}
            handlePlaceOrder={handlePlaceOrder}
          /> */}
        </ScrollView>
      )}
    </View>
  );
}
