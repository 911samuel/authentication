import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

import colors from "../config/Colors";

interface AppHeadingProps {
  title: string;
  fontSize?: number;
  marginBottom?: number;
  width?: number;
}

function AppHeading({
  title,
  fontSize = 24,
  width = 200,
  marginBottom = 50,
}: AppHeadingProps) {
  const headingStyles = {
    fontSize,
    width,
    marginBottom,
    ...styles.welcomeText,
  };

  return <Text style={headingStyles}>{title}</Text>;
}

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: "SpaceGrotesk_700Bold",
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
});

export default AppHeading;
