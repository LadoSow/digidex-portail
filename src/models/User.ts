import { JsonProperty, Serializable } from 'typescript-json-serializer';
import {Sit} from './Sit';
import {Group} from "./Group";

@Serializable()
export class User{
    @JsonProperty({ name: 'id' })
    private _id: string;
    @JsonProperty({ name: 'matricule' })
    private _matricule: string;
    @JsonProperty({ name: 'password' })
    private _password: string;
    @JsonProperty({ name: 'first_name' })
    private _first_name: string;
    @JsonProperty({ name: 'last_name' })
    private _last_name: string;
    @JsonProperty({ name: 'username' })
    private _username: string;
    @JsonProperty({ name: 'email' })
    private _email: string;
    @JsonProperty({ name: 'domaine' })
    private _domaine: [];
    @JsonProperty({ name: 'sit' })
    private _sit: Sit;
    @JsonProperty({ name: 'avatar' })
    private _avatar: string;
    @JsonProperty({ name: 'is_active' })
    private _is_active: boolean;
    @JsonProperty({ name: 'groups' })
    private _groups: Group[];
    @JsonProperty({ name: 'create_by' })
    private _create_by: string;
    @JsonProperty({ name: 'modified_by' })
    private _modified_by: string;
    @JsonProperty({ name: 'date_joined' })
    private _date_joined: string;
    @JsonProperty({ name: 'modified' })
    private _modified: string;

    constructor(id:string, first_name:string, password:string, last_name:string,  domaine:[],
                sit:Sit, email:string, avatar: string, matricule:string,
                is_active:boolean, groups:[], username:string, modified_by:string,
                create_by:string, date_joined:string, modified:string) {
        this._id = id;
        this._password = password;
        this._matricule = matricule;
        this._first_name = first_name;
        this._last_name = last_name;
        this._username = username;
        this._email = email;
        this._domaine = domaine;
        this._sit = sit;
        this._avatar = avatar;
        this._is_active = is_active;
        this._groups = groups;
        this._create_by = create_by;
        this._modified_by = modified_by;
        this._date_joined = date_joined;
        this._modified = modified;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get matricule(): string {
        return this._matricule;
    }
    public set matricule(value: string) {
        this._matricule = value;
    }
    public get first_name(): string {
        return this._first_name;
    }
    public set first_name(value: string) {
        this._first_name = value;
    }
    public get last_name(): string {
        return this._last_name;
    }
    public set last_name(value: string) {
        this._last_name = value;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get domaine(): [] {
        return this._domaine;
    }
    public set domaine(value: []) {
        this._domaine = value;
    }
    public get sit(): Sit {
        return this._sit;
    }
    public set sit(value: Sit) {
        this._sit = value;
    }
    public get avatar(): string {
        return this._avatar;
    }
    public set avatar(value: string) {
        this._avatar = value;
    }
    public get is_active(): boolean {
        return this._is_active;
    }
    public set is_active(value: boolean) {
        this._is_active = value;
    }
    public get groups(): Group[] {
        return this._groups;
    }
    public set groups(value: Group[]) {
        this._groups = value;
    }
    public get create_by(): string {
        return this._create_by;
    }
    public set create_by(value: string) {
        this._create_by = value;
    }
    public get modified_by(): string {
        return this._modified_by;
    }
    public set modified_by(value: string) {
        this._modified_by = value;
    }
    public get date_joined(): string {
        return this._date_joined;
    }
    public set date_joined(value: string) {
        this._date_joined = value;
    }
    public get modified(): string {
        return this._modified;
    }
    public set modified(value: string) {
        this._modified = value;
    }
}