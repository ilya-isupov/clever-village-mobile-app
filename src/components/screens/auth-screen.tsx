import React from "react";
import { ApplicationState } from "../../models/application-state.model";
import { ApplicationProps } from "../../models/application-props.model";
import { Locale } from "../localization/locale";
import { View, TextInput, AsyncStorage } from "react-native";
import { Button } from "react-native-elements";
import { MainStyles } from "../styles/main-styles";

export class AuthScreen extends React.Component<ApplicationProps, ApplicationState> {
    static navigationOptions = {
        tabBarLabel: Locale.navigation.auth,
        title: Locale.navigation.auth
    };

    _storeAuthentification = async () => {
        await AsyncStorage.setItem("userLogin", this.state.phone);
        this.props.navigation.navigate("Home", {phone: this.state.phone});
    }

    _onChangeLoginValue = (value: string) => {
        this.setState({
            phone: value
        });
    }

    render() {
        return (
            <View style={MainStyles.container}>
                <TextInput style={MainStyles.textInput}
                    editable={true}
                    maxLength={15}
                    onChangeText={this._onChangeLoginValue} />
                <Button buttonStyle={MainStyles.button} title={Locale.buttons.auth}
                    onPress={this._storeAuthentification}></Button>
            </View>
        );
    }
}