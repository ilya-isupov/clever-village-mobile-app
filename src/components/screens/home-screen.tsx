import React from "react";
import { ApplicationProps } from "../../models/application-props.model";
import { ApplicationState } from "../../models/application-state.model";
import { Locale } from "../localization/locale";
import { SmsService } from "../services/sms.service";
import SmsListener from "react-native-android-sms-listener";
import {
  Container,
  Header,
  Body,
  Right,
  Card,
  Title,
  Button,
  Text,
  Icon,
  Content,
  CardItem,
  Left
} from "native-base";
import { StateService } from "../services/state.service";
import { StoreService } from "../services/store.service";
import { SystemState } from "src/models/system-state.model";
import { MainStyles } from "../styles/main-styles";
import { ControllerCommand } from "src/models/controller-command.model";
import { ControllerCommands } from "../controller-commands/controller-commands";

export class HomeScreen extends React.Component<ApplicationProps, ApplicationState> {
  static navigationOptions = {
    tabBarLabel: Locale.navigation.home,
    title: Locale.navigation.home,
    tabBarIcon: () => (
      <Icon name="home" color={"#000"} />
    )
  };

  smsService: SmsService = new SmsService();
  stateService: StateService = new StateService();
  storeService: StoreService = new StoreService();

  constructor(props: ApplicationProps) {
    super(props);
    this.state = this.props.navigation.getParam("state") || this.stateService.getInitialApplicationState(); 
    this.storeService.getStoredParams().then((params) => {
      this.setState(params);
    });
  }

  getStatus = () => {
    this.sendCommand(ControllerCommands.getStatus);
  }

  setBurnMachinePowerOn = () => {
    this.sendCommand(ControllerCommands.burnMachinePowerOn);
  }

  setBurnMachinePowerOff = () => {
    this.sendCommand(ControllerCommands.burnMachinePowerOff);
  }

  burnMachineStartHeating = () => {
    this.sendCommand(ControllerCommands.burnMachineStartHeating);
  }

  sendCommand = (command: ControllerCommand) => {
    this.setState({
      isStatusActual: false,
      loading: true
    });
    let message = this.smsService.preparePayloadForSend(command, this.state.password);
    let result: boolean = this.smsService.sendSmsToController(
      this.state.phone, 
      message, 
      () => {
        let subscription = SmsListener.addListener((message: any) => {
          if (message.originatingAddress === this.state.phone) {
            let controllerResponse = message.body;
            //let controllerResponse = "{\"airTemperature\": \"15\", \"burnTemperature\": \"45\", \"burnMachinePower\": \"ON\", \"burnMachineHeating\": \"ON\"}";
            let systemState: SystemState = JSON.parse(controllerResponse);
            this.setState({
              systemState: systemState,
              isStatusActual: true,
              loading: false
            });
            subscription.remove();
          }
      });
    });
    if (!result) {
      this.setState({
        loading: false
      });
    }
  }

  checkButtonState() {
    return {
      burnMachinePowerOn: this.state.isStatusActual && this.state.systemState.burnMachinePower === "OFF" ? true : false,
      burnMachinePowerOff: this.state.isStatusActual && this.state.systemState.burnMachinePower === "ON" ? true : false,
      burnMachineStartHeating: this.state.isStatusActual && this.state.systemState.burnMachinePower === "ON" ? true : false
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.getStatus}>
              <Icon name="refresh" />
            </Button>
          </Left>
          <Body>
            <Title>{Locale.navigation.home}</Title>
          </Body>
          <Right>            
            <Button transparent onPress={() =>
              this.props.navigation.navigate({
                routeName: "Settings",
                params: { state: this.state }
              })}>
              <Icon name="settings" />
            </Button>
            <Button transparent onPress={() =>
              this.props.navigation.navigate({
                routeName: "Auth"
              })}>
              <Icon name="log-out" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem header>
              <Text>Температура</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Вода в отоплении: {this.state.systemState.burnTemperature}</Text>
                <Text>Котельная: {this.state.systemState.airTemperature}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Управление котлом</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Состояние: {this.state.systemState.burnMachinePower}</Text>
                <Text>Розжиг: {this.state.systemState.burnMachinePower}</Text>
              </Body>
            </CardItem>
            <CardItem style={MainStyles.container}>
              <Button block iconLeft
                disabled={!this.checkButtonState().burnMachinePowerOn}
                style={MainStyles.fullButton}
                onPress={this.setBurnMachinePowerOn}>
                <Icon name="checkmark-circle" />
                <Text>Включить</Text>
              </Button>
            </CardItem>
            <CardItem style={MainStyles.container}>
              <Button block iconLeft
                disabled={!this.checkButtonState().burnMachinePowerOff}
                style={MainStyles.fullButton}
                onPress={this.setBurnMachinePowerOff}>
                <Icon name="close-circle" />
                <Text>Выключить</Text>
              </Button>
            </CardItem>
            <CardItem style={MainStyles.container}>
              <Button block iconLeft
                disabled={!this.checkButtonState().burnMachineStartHeating}
                style={MainStyles.fullButton}
                onPress={this.burnMachineStartHeating}>
                <Icon name="sunny" />
                <Text>Розжиг</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>

      </Container>

    );
  }
}