import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  SpaceGrotesk_400Regular,
} from "@expo-google-fonts/space-grotesk";

import colors from "../config/Colors";

interface AppInputProps {
  label: string;
}

function AppInput({ label }: AppInputProps) {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_400Regular,
  });

  if (!fontsLoaded) {
    console.log("not found")
    return null; 
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "transparent",
    width: 200,
    height: 44,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.neutral,
    marginBottom: 20,
  },
  inputText: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 14,
    color: colors.primary,
    marginLeft: 20,
  },
});

export default AppInput;
