import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/shopping-cart-icon-29078.jpg")}
      />
      <View style={styles.signUpContainer}>
        <Text style={styles.welcomeText}>CREATE ACCOUNT</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Password</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Confirm Password</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </View>
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 70,
  },
  signUpContainer: {},
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: "transparent",
    width: 270,
    height: 44,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    marginTop: 17,
    borderWidth: 1,
    borderColor: "#808080",
  },
  inputText: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
    marginLeft: 20,
  },
  buttonContainer: {
    backgroundColor: "blue",
    width: 214,
    height: 44,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 17,
  },
  buttonText: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default SignUpScreen;
