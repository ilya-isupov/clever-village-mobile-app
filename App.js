import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Widgets screen</Text>
        <Text onPress={() => {this.props.navigation.navigate("Settings")}}>Go to settings screen</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings screen</Text>
        <Text onPress={() => {this.props.navigation.navigate("Home")}}>Go to Home screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
}, {
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}