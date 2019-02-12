import React from "react";
import { ApplicationProps } from "../../models/application-props.model";
import { ApplicationState } from "../../models/application-state.model";
import { MainStyles } from "../styles/main-styles";
import { Locale } from "../localization/locale";
import { Container, Header, Body, Title, Icon, Content, Form, Item, Input, Label } from 'native-base';


export class SettingsScreen extends React.Component<ApplicationProps, ApplicationState> {
  static navigationOptions = {
    tabBarLabel: Locale.navigation.settings,
    title: Locale.navigation.settings,
    tabBarIcon: () => (
      <Icon name="settings" color={"#000"} />
    )
  };
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>{ Locale.navigation.settings }</Title>
          </Body>
        </Header>
        <Content style={MainStyles.pageContent}>
          <Form>
            <Item stackedLabel>
              <Label>Номер контроллера</Label>
              <Icon active name='call' />
              <Input />
            </Item>
            <Item stackedLabel last>
              <Icon active name='medical' />
              <Label>Пароль</Label>
              <Input />
            </Item>
          </Form>
        </Content>

      </Container>
    );
  }
}