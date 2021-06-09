import { JsonProperty, Serializable } from "typescript-json-serializer";

@Serializable()
export class Sit{
    @JsonProperty({ name: 'id' })
    private _id: string;
    @JsonProperty({ name: 'libelle' })
    private _libelle: string;
    @JsonProperty({ name: 'create_at' })
    private _create_at: string;
    @JsonProperty({ name: 'modify_at' })
    private _modify_at: string;

    constructor(id:string, libelle:string, create_at:string, modify_at:string) {
        this._id = id;
        this._libelle = libelle;
        this._create_at = create_at;
        this._modify_at = modify_at;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get libelle(): string {
        return this._libelle;
    }
    public set libelle(value: string) {
        this._libelle = value;
    }
    public get create_at(): string {
        return this._create_at;
    }
    public set create_at(value: string) {
        this._create_at = value;
    }
    public get modify_at(): string {
        return this._modify_at;
    }
    public set modify_at(value: string) {
        this._modify_at = value;
    }
}