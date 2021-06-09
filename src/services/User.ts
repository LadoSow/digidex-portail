import {USER_API_URL, GET_ME_USER, GET_ALL_USERS, AUTH_EMAIL, AUTH_API_URL} from '../config/api/User';
import {forThisUrl} from '../config/Axios';
import {User, Identifiant, Token, Password} from '../models';
import {getVal} from '../config/Encryption';

const http =  forThisUrl(USER_API_URL).getAxiosInstance();
const httpAuth =  forThisUrl(AUTH_API_URL).getAxiosInstance();

function auth(identifiant:Identifiant): Promise<Token>{
    return httpAuth.post(AUTH_EMAIL, identifiant)
        .catch(() => ({ data: undefined}))
        .then((res) => {
                return res.data;
            },
        );
}

function updateProfil(user:User): Promise<User>{
    return http.put(`/${getVal('id')}/`, user)
        .catch(() => ({ data: undefined}))
        .then((res) => {
                return res.data;
            },
        );
}

function updatePassword(password:Password): Promise<string>{
    /*
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",  Authorization: `Bearer ${getVal('token')}`
        }
    };
    */
    return http.put(`/${getVal('id')}/change_password/`, password)
        .catch(() => ({data: 'error'}))
        .then((res) => {
                if (res.data === 'error'){
                    return 'error';
                }
                else {
                    return 'success';
                }
            },
        );
}

function getAllUser(): Promise<User[]>{
    return http.get(GET_ALL_USERS)
        .catch(() => ({data: []}))
        .then((res) => {
                return res.data;
            },
        );
}

function getMeUser(token: string): Promise<User>{
    return http.get(`${GET_ME_USER}/?search=${token}`)
        .catch(() => ({data: undefined}))
        .then((res) => {
                return res.data;
            },
        );
}

function getMeUserByMail(email: string): Promise<User>{
    return http.get(`${GET_ALL_USERS}?email=${email}`)
        .catch(() => ({data: undefined}))
        .then((res) => {
                if (res.data)
                    return res.data.results[0];
                else
                    return undefined;
            },
        );
}

export {
    getAllUser,
    getMeUser,
    getMeUserByMail,
    auth,
    updateProfil,
    updatePassword
};