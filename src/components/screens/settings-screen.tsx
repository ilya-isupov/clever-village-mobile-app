import React from "react";
import { ApplicationProps } from "../../models/application-props.model";
import { ApplicationState } from "../../models/application-state.model";
import { Text, View } from "react-native";
import { MainStyles } from "../styles/main-styles";
import { Locale } from "../localization/locale";

export class SettingsScreen extends React.Component<ApplicationProps, ApplicationState> {
  static navigationOptions = {
    tabBarLabel: Locale.navigation.settings,
    title: "Настройки"
  };
    render() {
      return (
        <View style={MainStyles.container}>
          <Text>Settings screen</Text>
          <Text onPress={() => { this.props.navigation.navigate("Home"); }}>Go to Home screen</Text>
        </View>
      );
    }
  }