import React from "react";
import { ApplicationProps } from "../../models/application-props.model";
import { ApplicationState } from "../../models/application-state.model";
import { Text, View, AsyncStorage } from "react-native";
import { Button, Icon, Card } from "react-native-elements";
import { MainStyles } from "../styles/main-styles";
import { Locale } from "../localization/locale";
import { SmsService } from "../services/sms.service";

export class HomeScreen extends React.Component<ApplicationProps, ApplicationState> {
  static navigationOptions = {
    tabBarLabel: Locale.navigation.home,
    title: Locale.navigation.home,
    tabBarIcon: () => (
      <Icon name="home" size={28} color="#000" />
    )
  };

  getStatus = () => {
    SmsService.sendSmsToController("PSWD06021991&COM=getStatus");
    // await AsyncStorage.getItem("controllerPhone").then((phone: string) => {
    //   //
    // });
  }

  render() {
    return (
      <View style={MainStyles.container}>
        <Button buttonStyle={{
          ...MainStyles.button,
          width: 250,
          height: 60
        }} title="Получить статус" onPress={this.getStatus}></Button>
        <Card containerStyle={MainStyles.card} title={Locale.screens.home.burnPower}>
          <View>
            <Text>Состояние: Выключено</Text>
            <Button buttonStyle={MainStyles.button} title="Включить" onPress={this.getStatus}></Button>
          </View>
        </Card>
        <Card containerStyle={MainStyles.card} title={Locale.screens.home.temperature}>
          <View>
            <Text>Отопление: 54 С</Text>
            <Text>Воздух: 54 С</Text>
          </View>
        </Card>
      </View>
    );
  }
}