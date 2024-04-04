import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";

import colors from "../config/Colors";
import AppImage from "../components/AppImage";
import AppButton from "../components/AppButton";
import AppHeading from "../components/AppHeading";
import { useNavigation } from "@react-navigation/native";
import AppContainer from "../components/AppContainer";

function WelcomeScreen() {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_700Bold,
  });

  // const navigation = useNavigation();

  // const handleSignUp = () => {
  //   navigation.navigate("SignUp");
  // };

  // const handleLogin = () => {
  //   navigation.navigate("SignIn");
  // };

  if (!fontsLoaded) {
    console.log("not found");
    return null;
  }

  return (
    <AppContainer>
      <AppImage image={require("../assets/shopping-cart.png")} />
      <AppHeading
        title="WELCOME TO ON_CREATION"
        fontSize={28} 
        width={228}
      />
      <AppButton title={"SIGN UP"} marginBottom={40} />
      <AppButton title={"LOGIN"} backgroundColor="tomato"/>
    </AppContainer>
  );
}

export default WelcomeScreen;
