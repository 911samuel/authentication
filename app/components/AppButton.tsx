import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  useFonts,
  SpaceGrotesk_500Medium
} from "@expo-google-fonts/space-grotesk";

import colors from "../config/Colors"

interface AppButtonProps {
  title: String;
  onPress?: () => void;
}

function AppButton({ title, onPress }: AppButtonProps) {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_500Medium
  });

  if (!fontsLoaded) {
    console.log("not found");
    return null;
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.accent,
    width: 200,
    height: 44,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  buttonText: {
    fontFamily: "SpaceGrotesk_500Medium",
    fontSize: 24,
    color: colors.primary,
    textAlign: "center",
  },
});

export default AppButton;