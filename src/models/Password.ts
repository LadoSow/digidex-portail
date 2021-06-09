import {JsonProperty, Serializable} from 'typescript-json-serializer';

@Serializable()
export class Password{
    @JsonProperty({ name: 'old_password' })
    private _oldpassword: string;
    @JsonProperty({ name: 'new_password' })
    private _newpassword: string;

    constructor( old_password:string, new_password:string) {
        this._oldpassword = old_password;
        this._newpassword = new_password;
    }
    public get old_password(): string {
        return this._oldpassword;
    }
    public set old_password(value: string) {
        this._oldpassword = value;
    }
    public get new_password(): string {
        return this._newpassword;
    }
    public set new_password(value: string) {
        this._newpassword = value;
    }
}