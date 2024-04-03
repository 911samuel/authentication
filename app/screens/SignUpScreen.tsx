import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  SpaceGrotesk_700Bold
} from "@expo-google-fonts/space-grotesk";

import colors from "../config/Colors"
import AppButton from "../components/AppButton";
import AppImage from "../components/AppImage";
import AppInput from "../components/AppInput";

function SignUpScreen() {
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
      <View>
        <Text style={styles.welcomeText}>CREATE ACCOUNT</Text>
        <AppInput label="Email" />
        <AppInput label="Password" />
        <AppInput label="Confirm Password" />
        <AppButton title="SIGN UP" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
});

export default SignUpScreen;
