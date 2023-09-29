import { Text, TouchableOpacity, View } from "react-native";

export default function OrderTotal({
  order,
  totalPrice,
  handlePlaceOrder,
}) {

  let newObjOrder = {};
  order.forEach((item) => {
    if (newObjOrder[item.id]) {
      newObjOrder[item.id].quantity += 1;
    } else {
      newObjOrder[item.id] = {
        ...item,
        quantity: 1,
      };
    }
  });

  const updatedOrder = Object.values(newObjOrder);

  return (
    <View className="min-h-[90vh] my-4">
      <Text className="font-bold text-xl mb-2">Here's your shopping card:</Text>
      <Text>
        Check if every article and quantity are good for you before going
        forward.
      </Text>
      <View className="bg-pink-100 p-4 mt-4 mb-14 rounded-3xl">
        {updatedOrder.map((item, index) => (
          <View
            key={`${item}${index}orderitem`}
            className="flex flex-row justify-start">
            <Text className="w-10">x{item.quantity}</Text>
            <Text className="w-60">
              {item.title} {item.specification}
            </Text>
            {/* <Text>(${item.price.toFixed(2)})</Text> */}
            <Text className="w-20">${(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        ))}
        <TouchableOpacity
          className="flex flex-row justify-between mt-4 bg-pink-500 py-2 px-4 rounded-xl"
          onPress={() => handlePlaceOrder(order, totalPrice)}>
          <Text className="text-white text-lg font-bold">Place Order</Text>
          <Text className="text-white text-lg font-bold">Total: ${totalPrice.toFixed(2)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
