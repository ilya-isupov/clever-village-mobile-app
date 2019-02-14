import React from "react";
import { ApplicationProps } from "../../models/application-props.model";
import { Locale } from "../localization/locale";
import { AsyncStorage } from "react-native";
import {
    Container,
    Header,
    Body,
    Title,
    Button,
    Icon,
    Content,
    Item,
    Input,
    Text,
    Toast,
    View,
    Label
} from "native-base";
import { AuthState } from "src/models/auth-state.model";
import { MainStyles } from "../styles/main-styles";

export class AuthScreen extends React.Component<ApplicationProps, AuthState> {
    static navigationOptions = {
        tabBarLabel: Locale.navigation.auth,
        title: Locale.navigation.auth
    };

    constructor(props: ApplicationProps) {
        super(props);
        this.state = {
            password: "",
            logPassExists: false,
            storedPassword: "",
            loaded: false
        }
        this.loadAuthentification();        
    }

    loadAuthentification = () => {
        AsyncStorage.getItem("userPassword").then((pass: string | null) => {
            this.setState({
                storedPassword: pass || "",
                logPassExists: !!pass,
                loaded: true
            });
        });        
    }

    _storeAuthentification = async () => {
        await AsyncStorage.setItem("userPassword", this.state.password); 
        this.props.navigation.navigate("Home");       
    }

    _checkAuthentification = () => {
        if(this.state.storedPassword === this.state.password) {
            this.props.navigation.navigate("Home");
        } else {
            Toast.show({
                text: "Некорректный пароль",
                buttonText: "Ok",
                type: "danger",
                duration: 3000
            });
        }        
    }

    _onChangePasswordValue = (value: string) => {
        this.setState({
            password: value
        });
    }

    render() {
        return (
            this.state.loaded &&
            <Container>
                <Header>
                    <Body>
                        <Title>{Locale.navigation.auth}</Title>
                    </Body>
                </Header>
                <Content padder contentContainerStyle={MainStyles.authContainer}>
                    {
                        !this.state.logPassExists &&
                        <Text>
                            Для начала создайте пин-код для входа в приложение
                        </Text>
                    }
                    <Item inlineLabel style={MainStyles.formItem}>
                        <Label>
                            Пин-код
                        </Label>
                        <Input
                            keyboardType="number-pad"
                            secureTextEntry={true}
                            onChangeText={this._onChangePasswordValue}
                            value={this.state.password} />
                        <Icon active name="key" />
                    </Item>
                    {
                        this.state.logPassExists &&
                        <View style={MainStyles.fullWidthcontainer}>
                            <Button block iconLeft success onPress={this._checkAuthentification}>
                                <Icon name="log-in" />
                                <Text>{Locale.buttons.auth}</Text>
                            </Button>
                        </View>
                    }
                    
                    {
                        !this.state.logPassExists &&
                        <View style={MainStyles.fullWidthcontainer}>
                            <Button block iconRight success onPress={this._storeAuthentification}>
                                <Text>{Locale.buttons.saveAuth}</Text>
                                <Icon name="checkmark-circle-outline" />
                            </Button>
                        </View>
                    }
                </Content>
            </Container>
        )
    }
}