export class UserLogin{
    private _username:String;
    private _password:String;

    

    get username(): String {
        return this._username;
    }
    get password(): String {
        return this._password;
    }
    set username(value: String) {
        this._username = value;
    }
    set password(value: String) {
        this._password = value;
    }
}