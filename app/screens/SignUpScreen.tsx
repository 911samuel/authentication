import React from "react";
import { View } from "react-native";
import {
  useFonts,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";

import colors from "../config/Colors";
import AppButton from "../components/AppButton";
import AppImage from "../components/AppImage";
import AppInput from "../components/AppInput";
import AppHeading from "../components/AppHeading";
import AppContainer from "../components/AppContainer";

function SignUpScreen() {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_700Bold,
  });

  if (!fontsLoaded) {
    console.log("not found");
    return null;
  }
  return (
    <AppContainer>
      <AppImage image={require("../assets/shopping-cart.png")} />
      <AppHeading title="CREATE ACCOUNT" marginBottom={30} />
      <AppInput label="Email" />
      <AppInput label="Password" />
      <AppInput label="Confirm Password" />
      <AppButton title="SIGN UP" marginTop={20} />
    </AppContainer>
  );
}

export default SignUpScreen;
