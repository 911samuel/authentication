import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
export default AppContainer;
