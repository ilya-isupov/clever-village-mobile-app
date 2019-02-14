import SMS from "react-native-sms-x";
import { Toast } from "native-base";
import { ControllerCommand } from "src/models/controller-command.model";

export class SmsService {
    phoneRegexp: RegExp = new RegExp(/^(?:\+\d{1})\d{10}(?:,(?:\+\d{2})?\d{10})*$/);

    sendSmsToController(phone: string, message: string, callback: Function): boolean {
        let errorMsg: string = "";
        let isError: boolean = false;
        if (!phone) {
            errorMsg = "Введите номер контроллера";
            isError = true;            
        } else if (phone.match(this.phoneRegexp)) {
            Toast.show({
                text: "Загрузка....",
                type: "success",
                duration: 7000
            });
            SMS.send(12345, phone, message, callback);
            return true;
        } else {
            errorMsg = `Некорректный номер: ${phone}`;  
            isError = true;      
        }
        if(isError) {
            Toast.show({
                text: errorMsg,
                buttonText: "Ok",
                type: "danger",
                duration: 5000
            });            
        }
        return false;
    }

    preparePayloadForSend(message: ControllerCommand, password: string) {
        return `PSWD${password}&CMD=${message}`;
    }
}