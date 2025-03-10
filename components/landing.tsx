import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import "nativewind";

export default function Landing() {
  return (
    <>
      <ImageBackground
        source={require("../assets/bg.png")}
        className="flex-1 items-center justify-center"
      >
        <View className="flex h-[60vh] items-center justify-between">
          <Image
            source={require("../assets/logo.png")}
            className="object-contain scale-[0.9] mt-[-60px]"
          />

          <View className="flex-col items-center mt-[100px]">
            <Pressable className="z-20 top-[280px] border-black border-[3px] w-[250px] h-[60px] rounded-[20px] items-center justify-center">
              <Text className="text-2xl font-bold">Login</Text>
            </Pressable>
            <Pressable className="z-10 top-[300px] border-black border-[3px] w-[200px] h-[60px] rounded-[20px] items-center justify-center">
                <Text className="text-2xl font-bold">Use Local</Text>
            </Pressable>
            <Image source={require('../assets/gradient-b.png')} className="z-0 bottom-10"/>
          </View>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </>
  );
}
