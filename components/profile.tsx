import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import "nativewind";

export default function Profile() {
  return (
    <>
      <ImageBackground
        source={require("../assets/bg.png")}
        className="flex-1 items-center justify-center"
      >
        <View className="flex h-[60vh] items-center justify-between">
            <Image source={require('../assets/gradient-b.png')} className="z-0 rotate-180 mt-[-180px] absolute"/>
            <View>
                <Text>UserName</Text>
            </View>
            <Image source={require('../assets/gradient-b.png')} className="z-0 mt-[200px] absolute"/>
        </View>
        <StatusBar style="auto"/>
      </ImageBackground>
    </>
  );
}
