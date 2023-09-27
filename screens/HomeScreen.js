import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';
import { styles } from '../theme';
import Hero from '../components/Hero';
import CategoryList from '../components/CategoryList';
import OrderSection from '../components/OrderSection';

const ios = Platform.OS === 'ios';

export default function HomeScreen() {

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      {/* search bar */}
      <SafeAreaView className={ios? "mb-2": "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4 my-3">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="black" />
          <Text style={styles.text} className="text-3xl font-bold">Sakura House</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {
        loading? (
          <Loading />
        ):(
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 10}}
          >
            <Hero />
            <CategoryList />
            <OrderSection dishes={undefined} /> 
          </ScrollView>
        )
      }
      
  </View>
      

   
  )
}
