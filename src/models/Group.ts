import {JsonProperty, Serializable} from 'typescript-json-serializer';

@Serializable()
export class Group{
    @JsonProperty({ name: 'name' })
    private _name: string;

    constructor( name:string) {
        this._name = name;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}