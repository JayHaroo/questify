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
        <View className="items-center">
          <Image
            source={require("../assets/logo.png")}
            className="object-contain scale-[0.9]"
          />

          <View>
            <Pressable className="border-black border-[3px] w-[200px] h-[70px] rounded-[30px] items-center justify-center">
              <Text className="text-2xl font-bold">Login</Text>
            </Pressable>
          </View>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </>
  );
}
