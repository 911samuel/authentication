import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";

import colors from "../config/Colors";
import AppImage from "../components/AppImage";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_700Bold,
  });

  if (!fontsLoaded) {
    console.log("not found");
    return null;
  }
  return (
    <View style={styles.container}>
      <AppImage />
      <Text style={styles.welcomeText}>WELCOME TO ONCREATION</Text>
      <AppButton title={"SIGN UP"} />
      <AppButton title={"LOGIN"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontFamily: "SpaceGrotesk_700Bold",
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 70,
  },
});

export default WelcomeScreen;
