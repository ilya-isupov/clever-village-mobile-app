import React from "react";
import { ApplicationProps } from "../../models/application-props.model";
import { ApplicationState } from "../../models/application-state.model";
import { Text, View } from "react-native";
import { MainStyles } from "../styles/main-styles";
import { Locale } from "../localization/locale";

export class HomeScreen extends React.Component<ApplicationProps, ApplicationState> {
  static navigationOptions = {
    tabBarLabel: Locale.navigation.home,
    title: Locale.navigation.home
  };

  render() {
    return (
      <View style={MainStyles.container}>
        <Text>Widgets screen</Text>
        <Text onPress={() => { this.props.navigation.navigate("Settings"); }}>Go to settings screen</Text>
      </View>
    );
  }
}