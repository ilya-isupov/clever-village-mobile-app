import SMS from "react-native-sms-x";

export class SmsService {
    static sendSmsToController(phone: any, message: string, callback: Function): void {
        SMS.send(12345, phone, message, callback);
    }
}