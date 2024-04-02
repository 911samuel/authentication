import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/Colors";
import AppButton from "../components/AppButton";

function WelcomScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.welcomeText}>WELCOME TO ONCREATION</Text>
      <AppButton title={"SIGN UP"} />
      <AppButton title={"LOGIN"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 70,
  },
 
});

export default WelcomScreen;
