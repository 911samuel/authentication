import { View } from "react-native";
import React from "react";

import colors from "../config/Colors";
import AppButton from "../components/AppButton";
import AppImage from "../components/AppImage";
import AppInput from "../components/AppInput";
import AppHeading from "../components/AppHeading";
import AppContainer from "../components/AppContainer";


function SignUpSuccessfully() {
    return (
      <AppContainer>
        <AppImage image={require("../assets/shopping-cart.png")} />
        <AppHeading title="CONGRATULATIONS!" />
        <AppButton title={"SIGN UP"} />
        <AppButton title={"LOGIN"} />
      </AppContainer>
    );
}

export default SignUpSuccessfully;