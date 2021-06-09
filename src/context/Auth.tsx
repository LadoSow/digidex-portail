import React, {createContext, useContext, useState} from 'react';
import {Identifiant, Token, User} from '../models';
import {auth, getMeUserByMail} from '../services';
import {setVal, getVal} from '../config/Encryption';

interface AuthContextData {
    user: User | undefined;
    signIn(identifiant: Identifiant): Promise<Token | undefined>;
    meUser(token: string): Promise<User | undefined>;
    signOut() : void;
    getToken() : string | null;
}

const AuthContext = createContext<AuthContextData>({} as any as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
    const authData: AuthContextData = Provider();
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

let domaines = '';
function concatDomaine(element:string) {
    domaines = domaines + element + '|';
}

function Provider() {
    const [user, setUser] =  useState<User>();

    function getToken(){
        return getVal('token');
    }

    async function signIn(identifiant: Identifiant): Promise<Token | undefined>{
        const result = await auth(identifiant);
        if (result) {
            setVal('token', result.access);
        }
        return result;
    }

    async function meUser(mail: string): Promise<User | undefined>{
        const result = await getMeUserByMail(mail);
        if (result) {
            setUser(result);
            result.domaine.forEach(element => concatDomaine(element));
            setVal('profil', result.first_name.concat(' ', result.last_name));
            setVal('domaines', domaines);
            setVal('id', result.id);
            setVal('mail', result.email);
        }
        return result;
    }

    function signOut(){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('profil');
        sessionStorage.removeItem('domaines');
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('mail');
    }

    return {
        user,
        signIn,
        meUser,
        signOut,
        getToken
    };
}

function useAuthContext() {
    return useContext<AuthContextData>(AuthContext);
}

export {AuthProvider, useAuthContext};