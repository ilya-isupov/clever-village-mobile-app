import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from "react-native";
import { ApplicationProps } from "src/models/application-props.model";
import { ApplicationState } from "src/models/application-state.model";
import { MainStyles } from "../styles/main-styles";

export class AuthLoadingScreen extends React.Component<ApplicationProps, ApplicationState> {
  constructor(props: ApplicationProps) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    await setTimeout(() => {
      //
    }, 2000);
    const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={MainStyles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}