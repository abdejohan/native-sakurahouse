import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Hero() {
  return (
    <View className='relative isolate h-[90vh] px-4 mx-auto w-full py-20 sm:py-48 lg:py-56 items-center'>
      <Text className='text-4xl px-5 font-bold tracking-tight text-black sm:text-6xl text-center'>
      Experience the essence of Japanese cuisine.
      </Text>
      <Text className='p-5 text-lg leading-8 text-black text-center'>
        Immerse yourself in authentic flavors and enjoy a remarkable dining experience. Savor our exquisite sushi, sashimi, and more meticulously prepared dishes by our skilled chefs.
      </Text>
      <TouchableOpacity
        className='mt-4 font-medium p-6 rounded-full bg-pink-500 hover:bg-pink-400'
        onPress={() => {
          // Add your onPress functionality here
        }}
      >
        <Text className="text-white font-bold text-xl">Start Your Order</Text>
      </TouchableOpacity>
    </View>
  );
}
