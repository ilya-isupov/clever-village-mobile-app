import React from "react";
import { ApplicationProps } from "../../models/application-props.model";
import { ApplicationState } from "../../models/application-state.model";
import { View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { MainStyles } from "../styles/main-styles";
import { Locale } from "../localization/locale";

export class ControlsScreen extends React.Component<ApplicationProps, ApplicationState> {
  static navigationOptions = {
    tabBarLabel: Locale.navigation.controls,
    title: Locale.navigation.controls,
    tabBarIcon: () => (
      <Icon name="power-settings-new" size={28} color="#000" />
    )
  };

  turnBurnerOn = async () => {
    // await AsyncStorage.getItem("controllerPhone").then((phone: string) => {
    //   //
    // });
  }

  render() {
    return (
      <View style={MainStyles.container}>
        <Button buttonStyle={MainStyles.button} title="Включить горелку" onPress={this.turnBurnerOn}></Button>
        <Button buttonStyle={MainStyles.button} title="Выключить горелку" onPress={this.turnBurnerOn}></Button>
        <Button buttonStyle={MainStyles.button} title="Разжечь горелку" onPress={this.turnBurnerOn}></Button>
      </View>
    );
  }
}