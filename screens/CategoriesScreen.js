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
import { categories, items, orderExample } from "../constants";
import Loading from "../components/Loading";
import CategoriesStep from "../components/CategoriesScreen/CategoriesStep";
import ItemPanel from "../components/CategoriesScreen/ItemPanel";
import sakura from "../assets/sakuraFestival/sakura-1.png";
import {
  ChevronLeftIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import SideMenuOrder from "../components/CategoriesScreen/SideMenuOrder";

const { height } = Dimensions.get("window");

const CategoriesScreen = () => {
  const [loading, setLoading] = useState(false);
  const [sideOrderOpen, setSideOrderOpen] = useState(false);
  const [itemOpen, setItemOpen] = useState(null);
  const [order, setOrder] = useState(orderExample);
  const [categorySelected, setCategorySelected] = useState("");
  const [thereisacategoryselected, setthereisacategoryselected] =
    useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const scaleAnim = useState(new Animated.Value(1))[0];
  const translateYAnim = new Animated.Value(-100);
  const translateYReverseAnim = new Animated.Value(100);

  const handleAddToMenu = (item) => {
    console.log(item);
  };

  useEffect(() => {
    if (itemOpen) {
      this._panel.show((height / 100) * 80);
    } else {
      this._panel.hide();
    }
  }, [itemOpen]);

  useEffect(() => {
    if (categorySelected.length === 0) setthereisacategoryselected(false);
    else setthereisacategoryselected(true);
  }, [categorySelected]);

  useEffect(() => {
    if (thereisacategoryselected) {
      console.log("its category selected");
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateYReverseAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [thereisacategoryselected, sideOrderOpen]);

  console.log(translateYAnim);

  return (
    <View className="flex-1 bg-pink-100">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: 10,
              paddingTop: 24,
            }}>
            <Animated.View
              style={{
                opacity: fadeAnim,
                transform: [
                  {
                    translateY: thereisacategoryselected
                      ? translateYReverseAnim
                      : translateYAnim,
                  },
                ],
              }}
              className="w-[90vw] mx-auto p-4 mt-4 min-h-[100vh]">
              <View className="flex flex-row">
                <View className="w-[70%] bg-red-200 bg-purple-100">
                  {!categorySelected ? (
                    <>
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
                    </>
                  ) : (
                    <TouchableOpacity
                      className="flex flex-row justify-start items-center bg-blue-100 h-12"
                      onPress={() => setCategorySelected("")}>
                      <ChevronLeftIcon color="black" size={24} />
                      <Text className="font-black text-xl">Back</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <TouchableOpacity
                  className="w-[30%] p-2 flex items-end justify-end bg-red-100"
                  onPress={() => setSideOrderOpen(!sideOrderOpen)}>
                  <ShoppingCartIcon color="black" size={30} />
                </TouchableOpacity>
              </View>
              <CategoriesStep
                categories={categories}
                items={items}
                itemOpen={itemOpen}
                setItemOpen={setItemOpen}
                categorySelected={categorySelected}
                setCategorySelected={setCategorySelected}
                fadeAnim={fadeAnim}
                translateYAnim={translateYAnim}
              />
            </Animated.View>
            {sideOrderOpen && (
              <SideMenuOrder
                sideOrderOpen={sideOrderOpen}
                setSideOrderOpen={setSideOrderOpen}
              />
            )}
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
