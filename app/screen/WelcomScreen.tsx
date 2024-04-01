import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/shopping-cart-icon-29078.jpg")}
      />
      <Text style={styles.welcomeText}>WELCOME TO ONCREATION</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
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
  welcomeText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
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

export default WelcomScreen;
