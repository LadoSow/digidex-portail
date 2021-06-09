import { JsonProperty, Serializable } from "typescript-json-serializer";

@Serializable()
export class Token{
    @JsonProperty({ name: 'refresh' })
    private _refresh: string;
    @JsonProperty({ name: 'access' })
    private _access: string;

    constructor( refresh:string, access:string) {
        this._refresh = refresh;
        this._access = access;
    }
    public get refresh(): string {
        return this._refresh;
    }
    public set refresh(value: string) {
        this._refresh = value;
    }
    public get access(): string {
        return this._access;
    }
    public set access(value: string) {
        this._access = value;
    }
}