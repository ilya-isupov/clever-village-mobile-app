import React from "react";
import { ApplicationProps } from "../../models/application-props.model";
import { ApplicationState } from "../../models/application-state.model";
import { ActivityIndicator } from "react-native";
import { Locale } from "../localization/locale";
import { SmsService } from "../services/sms.service";
import SmsListener from "react-native-android-sms-listener";
import { Container, Header, Body, Right, Card, Title, Button, Text, Icon, Content, CardItem } from 'native-base';
import { MainStyles } from "../styles/main-styles";

export class HomeScreen extends React.Component<ApplicationProps, ApplicationState> {
  static navigationOptions = {
    tabBarLabel: Locale.navigation.home,
    title: Locale.navigation.home,
    tabBarIcon: () => (
      <Icon name="home" color={"#000"} />
    )
  };

  constructor(props: ApplicationProps) {
    super(props);
    this.state = {
      loading: false,
      phone: "+79101474692",
      commandStatus: "Нет сообщений"
    }
  }

  getStatus = () => {
    this.setState({
      loading: true
    });
    SmsService.sendSmsToController(this.state.phone, "Test message without UI", () => {
      let subscription = SmsListener.addListener((message: any) => {
        if (message.originatingAddress === this.state.phone) {
          this.setState({
            commandStatus: `${message.body}`
          });
          subscription.remove();
          this.setState({
            loading: false
          });
        }

      });
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>{ Locale.navigation.home }</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.getStatus}>
              <Icon name='refresh' />
            </Button>
          </Right>
        </Header>
        <Content style={MainStyles.pageContent}>
          {
            this.state.loading &&
            <ActivityIndicator />

          }
          <Card>
            <CardItem header>
              <Text>Температура</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Воздух: 54 С</Text>
                <Text>Результат: {this.state.commandStatus}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Отопление</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Состояние: Выключено</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button block iconLeft onPress={this.getStatus}>
                <Icon name='power' />
                <Text>Включить</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>

      </Container>

    );
  }
}