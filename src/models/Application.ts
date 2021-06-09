import { JsonProperty, Serializable } from "typescript-json-serializer";

@Serializable()
export class Application{
    @JsonProperty({ name: 'id' })
    private _id: string;
    @JsonProperty({ name: 'nom' })
    private _nom: string;
    @JsonProperty({ name: 'lien' })
    private _lien: string;
    @JsonProperty({ name: 'domaines' })
    private _domaines: string[];
    @JsonProperty({ name: 'avatar' })
    private _avatar: string;
    @JsonProperty({ name: 'create_at' })
    private _create_at: string;
    @JsonProperty({ name: 'modify_at' })
    private _modify_at: string;

    constructor(id:string, nom:string, lien:string, domaines:string[], avatar:string, create_at:string, modify_at:string) {
        this._id = id;
        this._nom = nom;
        this._lien = lien;
        this._domaines = domaines;
        this._avatar = avatar;
        this._create_at = create_at;
        this._modify_at = modify_at;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get lien(): string {
        return this._lien;
    }
    public set lien(value: string) {
        this._lien = value;
    }
    public get domaines(): string[] {
        return this._domaines;
    }
    public set domaines(value: string[]) {
        this._domaines = value;
    }
    public get avatar(): string {
        return this._avatar;
    }
    public set avatar(value: string) {
        this._avatar = value;
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