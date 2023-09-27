import { Text, TouchableOpacity, View } from "react-native";

export default function OrderTotal({
  order,
  totalPrice,
  handlePlaceOrder,
  numberOfPersons,
}) {
  const emojis = [
    "👨 ",
    "👱‍♀️ ",
    "👧 ",
    "👩‍🦰 ",
    "👩‍🦳 ",
    "👶 ",
    "👧🏾 ",
    "🧓🏾 ",
    "👨🏿‍🦱 ",
    "👨🏾‍🦳 ",
    "👨🏾 ",
    "👩🏻 ",
    "👩🏻‍🦲 ",
    "🧒🏼 ",
    "👨🏼‍🦰 ",
    "👨🏼 ",
    "👨🏼‍🦳 ",
    "👸🏼 ",
    "👦🏻 ",
    "👱🏻‍♀️ ",
    "👨🏻 ",
    "👸🏻 ",
    "👳🏻‍♀️ ",
    "👧🏻 ",
    "👨🏾‍🦳 ",
    "🤶🏾 ",
    "👧🏾 ",
    "👴🏾 ",
    "👲🏾 ",
    "👩🏿‍🦲 ",
    "👨🏿 ",
    "🧓🏿 ",
    "👨🏿‍🦳 ",
    "👱🏿‍♀️ ",
    "👨‍🦱 ",
    "👨🏻 ",
    "🧔🏽 ",
  ];

  const emojisArray = new Array(numberOfPersons).fill(null).map(() => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  });

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
    <View className="bg-pink-100 hover:bg-pink-200 rounded-lg shadow-lg p-5 w-full mt-4 mb-14">
      <Text className="font-bold text-xl mb-2">Order - Items selected: </Text>
      <Text className="mb-4">
        For {numberOfPersons} {numberOfPersons === 1 ? "person" : "people"}{" "}
        {emojisArray}
      </Text>
      {updatedOrder.map((item, index) => (
        <Text key={`${item}${index}orderitem`}>
          x{item.quantity} {item.title}
        </Text>
      ))}
      <Text className='my-4'>Total Price: <Text className="font-bold">${totalPrice.toFixed(2)}</Text>
      </Text>
      <TouchableOpacity
        className="bg-pink-500 hover:bg-pink-400 font-medium py-2 px-4 rounded"
        onPress={() => handlePlaceOrder(order, totalPrice)}>
        <Text className="text-white">Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}
