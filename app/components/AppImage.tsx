import React from "react";
import { Image, StyleSheet } from "react-native";

interface AppImageProps {
  image: any; 
}

const AppImage: React.FC<AppImageProps> = ({ image }) => {
  return <Image style={styles.logo} source={image} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginBottom: 70,
    marginTop: 123,
  },
});

export default AppImage;
