import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/Colors";

interface AppInputProps {
  label: string;
}

function AppInput({ label }: AppInputProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "transparent",
    width: 220,
    height: 34,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.neutral,
    marginBottom: 20,
  },
  inputText: {
    color: colors.primary,
    fontWeight: "500",
    marginLeft: 20,
  },
});

export default AppInput;
