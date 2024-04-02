import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/Colors"

interface AppButtonProps {
  title: String;
  onPress?: () => void;
}

function AppButton({ title, onPress }: AppButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.accent,
    width: 150,
    height: 34,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 24,
    color: colors.primary,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default AppButton;