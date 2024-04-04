import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/Colors";

function AppHeading() {
  return <Text style={styles.welcomeText}>WELCOME TO ON_CREATION</Text>;
}

const styles = StyleSheet.create({
  welcomeText: {
    width: 220,
    fontFamily: "SpaceGrotesk_700Bold",
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 76,
    textAlign: "center",
  },
});

export default AppHeading;
