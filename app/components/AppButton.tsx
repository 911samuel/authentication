import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  useFonts,
  SpaceGrotesk_500Medium,
} from "@expo-google-fonts/space-grotesk";

import colors from "../config/Colors";

interface AppButtonProps {
  title: string;
  onPress?: () => void;
  marginTop?: number;
  marginBottom?: number;
  backgroundColor?: string;
}

function AppButton({
  title,
  onPress,
  marginTop= 0,
  marginBottom = 0,
  backgroundColor,
}: AppButtonProps) {
  const [fontsLoaded] = useFonts({ SpaceGrotesk_500Medium });

  const buttonContainerStyle = {
    marginBottom,
    marginTop,
    backgroundColor: backgroundColor || colors.primaryButton,
    ...styles.buttonContainer,
  };

  if (!fontsLoaded) {
    console.log("Font not loaded");
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonContainerStyle}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    height: 44,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "SpaceGrotesk_500Medium",
    fontSize: 24,
    color: colors.primary,
    textAlign: "center",
  },
});

export default AppButton;
