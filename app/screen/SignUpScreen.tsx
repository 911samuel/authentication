import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/Colors"
import AppButton from "../components/AppButton";
import AppImage from "../components/AppImage";
import AppInput from "../components/AppInput";

function SignUpScreen() {
  return (
    <View style={styles.container}>
      <AppImage />
      <View style={styles.signUpContainer}>
        <Text style={styles.welcomeText}>CREATE ACCOUNT</Text>
        <AppInput label="Email" />
        <AppInput label="Password" />
        <AppInput label="Confirm Password" />
        <AppButton title="SIGN UP" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
  },
  
  signUpContainer: {},
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
});

export default SignUpScreen;
