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
    <View style={styles.container}>
      <AppImage />
      < AppHeading />
      <AppButton title={"SIGN UP"} />
      <AppButton title={"LOGIN"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 123,
  },
});

export default WelcomeScreen;
