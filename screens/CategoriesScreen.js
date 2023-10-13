import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { categories, items, orderExample } from "../constants";
import Loading from "../components/Loading";
import CategoriesStep from "../components/CategoriesScreen/CategoriesStep";
import ItemPanel from "../components/CategoriesScreen/ItemPanel";
import sakura from "../assets/sakuraFestival/sakura-1.png";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import SideMenuOrder from "../components/CategoriesScreen/SideMenuOrder";

const { height } = Dimensions.get("window");

const CategoriesScreen = () => {
  const [loading, setLoading] = useState(false);
  const [itemOpen, setItemOpen] = useState(null);
  const [order, setOrder] = useState(orderExample);
  const [categorySelected, setCategorySelected] = useState("");
  const [prevCategorySelected, setPrevCategorySelected] = useState("");
  const fadeAnim = useState(new Animated.Value(0))[0];
  const scaleAnim = useState(new Animated.Value(1))[0];
  const translateYAnim = new Animated.Value(-100);
  const translateYRevertAnim = new Animated.Value(100);

  const handleAddToMenu = (item) => {
    console.log(item);
  };

  const navigation = useNavigation()

  const renderCategoriesStep = () => {
    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [
            {
              translateY: categorySelected
                ? translateYRevertAnim
                : translateYAnim,
            },
          ],
        }}>
        <CategoriesStep
          categories={categories}
          items={items}
          itemOpen={itemOpen}
          setItemOpen={setItemOpen}
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      </Animated.View>
    );
  };

  useEffect(() => {
    if (itemOpen) {
      this._panel.show((height / 100) * 80);
    } else {
      this._panel.hide();
    }
  }, [itemOpen]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(
        categorySelected ? translateYRevertAnim : translateYAnim,
        {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }
      ),
    ]).start();
  }, [categorySelected]);

  return (
    <View className="flex-1 bg-white">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: 10,
              paddingTop: 24,
            }}
            className="w-[100vw]">
            <View className="w-[66%] px-4 min-h-[100vh] mt-4">
              {!categorySelected ? (
                <Animated.View
                  style={{
                    opacity: fadeAnim,
                    transform: [{ translateY: translateYAnim }],
                  }}>
                  <View className="h-14 w-14 mt-4 mb-4">
                    <Image
                      className="max-w-full max-h-full"
                      source={sakura}
                      alt="sakura-logo"
                    />
                  </View>
                  <Text className="tracking-widest font-black text-[28px] mb-2">
                    Hey,
                  </Text>
                  <Text className="tracking-widest font-medium text-[24px] mb-2">
                    what will you eat?
                  </Text>
                </Animated.View>
              ) : (
                <Animated.View
                  style={{
                    opacity: fadeAnim,
                    transform: [{ translateY: translateYRevertAnim }],
                  }}>
                  <TouchableOpacity
                    className="flex flex-row items-center"
                    onPress={() => setCategorySelected("")}>
                    <ChevronLeftIcon color="black" size={24} />
                    <Text className="font-black text-xl">Back</Text>
                  </TouchableOpacity>
                </Animated.View>
              )}
              {renderCategoriesStep()}
            </View>
            <SideMenuOrder />
          </ScrollView>
          <ItemPanel
            itemOpen={itemOpen}
            setItemOpen={setItemOpen}
            handleAddToMenu={handleAddToMenu}
          />
        </>
      )}
    </View>
  );
};

export default CategoriesScreen;
