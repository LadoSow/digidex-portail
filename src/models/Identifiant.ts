import { JsonProperty, Serializable } from "typescript-json-serializer";

@Serializable()
export class Identifiant{
    @JsonProperty({ name: 'username' })
    private _username: string;
    @JsonProperty({ name: 'password' })
    private _password: string;

    constructor( username:string, password:string) {
        this._username = username;
        this._password = password;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
}