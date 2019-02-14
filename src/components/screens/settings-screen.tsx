import React from "react";
import { ApplicationProps } from "../../models/application-props.model";
import { ApplicationState } from "../../models/application-state.model";
import { Locale } from "../localization/locale";
import { Container, Header, Body, Button, Title, Icon, Content, Form, Item, Input, Label, Left } from "native-base";
import { AsyncStorage } from "react-native";
import { StoreService } from "../services/store.service";
import { StateService } from "../services/state.service";


export class SettingsScreen extends React.Component<ApplicationProps, ApplicationState> {
  static navigationOptions = {
    tabBarLabel: Locale.navigation.settings,
    title: Locale.navigation.settings,
    tabBarIcon: () => (
      <Icon name="settings" color={"#000"} />
    )
  };

  storeService: StoreService = new StoreService();
  stateService: StateService = new StateService();

  constructor(props: ApplicationProps) {
    super(props);
    this.state = this.props.navigation.getParam("state");
  }

  

  storeParams = async () => {
    await AsyncStorage.setItem("controllerPhone", this.state.phone);
    await AsyncStorage.setItem("controllerPassword", this.state.password);
  }

  navigateHome = async () => {
    await this.storeParams();
    this.props.navigation.navigate({
      routeName: "Home",
      params: { state: this.state }
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.navigateHome}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{ Locale.navigation.settings }</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>Номер контроллера</Label>
              <Icon active name="call" />
              <Input 
                keyboardType="phone-pad"
                onChangeText={(phone: string) => this.setState({phone: phone})}
                onBlur={this.storeParams}
                value={this.state.phone} />
            </Item>
            <Item stackedLabel last>
              <Icon active name="key" />
              <Label>Пароль контроллера</Label>
              <Input
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={(password: string) => this.setState({password: password})}
                onBlur={this.storeParams}
                value={this.state.password} />
            </Item>
          </Form>
        </Content>

      </Container>
    );
  }
}