import React from "react";
import { ApplicationProps } from "../../models/application-props.model";
import { ApplicationState } from "../../models/application-state.model";
import { Text, View } from "react-native";
import { MainStyles } from "../styles/main-styles";
import { Locale } from "../localization/locale";
import { Icon, Input } from "react-native-elements";

export class SettingsScreen extends React.Component<ApplicationProps, ApplicationState> {
  static navigationOptions = {
    tabBarLabel: Locale.navigation.settings,
    title: Locale.navigation.settings,
    tabBarIcon: () => (
      <Icon name="reorder" size={28} color="#000" />
    )
  };
  render() {
    return (
      <View style={MainStyles.container}>
        <Text style={MainStyles.textLabel}>Телефон контроллера:</Text>
        <Input
          placeholder="Telephone"
          leftIcon={
            <Icon
              name="call"
              size={24}
              color="black"
            />
          }
        />
        <Text style={MainStyles.textLabel}>Пароль:</Text>
        <Input
          placeholder="Password"
          leftIcon={
            <Icon
              name="security"
              size={24}
              color="black"
            />
          }
        />
      </View>
    );
  }
}