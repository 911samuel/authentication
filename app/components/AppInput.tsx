import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import {
  useFonts,
  SpaceGrotesk_400Regular,
} from "@expo-google-fonts/space-grotesk";

import colors from "../config/Colors";

interface AppInputProps {
  label: string;
  marginBottom?: number;
}

function AppInput({ label, marginBottom = 20 }: AppInputProps) {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_400Regular,
  });

  if (!fontsLoaded) {
    console.log("Font not loaded");
    return null;
  }

  return (
    <View style={[styles.inputContainer, { marginBottom }]}>
      <Text style={styles.inputText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "transparent",
    height: 44,
    width: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.neutral,
    justifyContent: "center",
    paddingLeft: 20,
  },
  inputText: {
    fontFamily: "SpaceGrotesk_400Regular",
    fontSize: 14,
    color: colors.primary,
  },
});

export default AppInput;
