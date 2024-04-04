import React from "react";
import { ImageBackground, StyleSheet, StatusBar } from "react-native"; // Import StatusBar
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import SIgnInScreen from "./app/screens/SignInScreen";

export default function App() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("./app/assets/background.jpg")}
    >
      <StatusBar barStyle="light-content" /> 
      {/* <WelcomeScreen /> */}
      {/* < SignUpScreen /> */}
      < SIgnInScreen />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    paddingTop: StatusBar.currentHeight || 0, 
  },
});
