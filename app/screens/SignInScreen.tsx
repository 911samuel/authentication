import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import AppButton from "../components/AppButton";
import AppImage from "../components/AppImage";
import AppInput from "../components/AppInput";
import AppHeading from "../components/AppHeading";
import AppContainer from "../components/AppContainer";
import colors from "../config/Colors";

function SIgnInScreen() {
  return (
    <AppContainer>
      <AppImage image={require("../assets/shopping-cart.png")} />
      <AppHeading title="LOGIN ACCOUNT" marginBottom={30} width={220} />
      <View style={styles.login}>
        <AppInput label="Email" />
        <AppInput label="Password" marginBottom={10} />
        <Text style={styles.forgot}>forgot password?</Text>
      </View>
      <AppButton title="LOGIN" />
      <Text style={styles.loginWith}>or Login with</Text>
      <view style={styles.socialMediaIcons}>
        <Image style={styles.icon} source={require("../assets/google.png")} />
        <Image style={styles.icon} source={require("../assets/facebook.png")} />
        <Image style={styles.icon} source={require("../assets/apple.png")} />
      </view>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  forgot: {
    fontSize: 14,
    textAlign: "right",
    color: colors.primary,
    marginBottom: 30,
  },
  login: {
    width: 200,
  },
  loginWith: {
    alignSelf: "center",
    color: colors.primary,
    fontSize: 18,
    marginTop: 20,
  },
  socialMediaIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    width: 200,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default SIgnInScreen;
