import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import "nativewind";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        source={require("../assets/bg.png")}
        className="flex-1 items-center justify-center"
      >
        <View className="flex h-[60vh] items-center justify-between">
          <Image
            source={require("../assets/gradient-b.png")}
            className="z-0 rotate-180 mt-[-180px] absolute"
          />
          <View className="z-10 flex flex-row items-center justify-between w-[40vh] bottom-[120px]">
            <View>
             <Text>UserName</Text>
             <Text>Level: </Text>
            </View>
            
            <Pressable onPress={() => navigation.goBack()} className="z-10">
              <Text className="text-2xl decoration-2 underline">Go Back</Text>
            </Pressable>
          </View>
          
          <View className="rounded-3xl w-[40vh] h-[70vh] bottom-[50px] bg-[#6e6e6e] z-10">
            {/* This will contain the quest / tasks */}
          </View>
          <Image
            source={require("../assets/gradient-b.png")}
            className="z-0 mt-[200px] absolute"
          />
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </>
  );
}
