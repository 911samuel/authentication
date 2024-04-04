import React from 'react';
import { Image, StyleSheet } from "react-native";


function AppImage() {
    return (
      <Image
        style={styles.logo}
        source={require("../assets/shopping-cart.png")}
      />
    );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginBottom: 76,
  },
});

export default AppImage;