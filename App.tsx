import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomeScreen from "./app/screen/WelcomScreen";
import SignUpScreen from "./app/screen/SignUpScreen";

export default function App() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("./app/assets/background.jpg")}
    >
      <SignUpScreen />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
});
