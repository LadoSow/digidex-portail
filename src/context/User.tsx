import React, {createContext, useContext, useState} from 'react';
import {Password, User} from '../models';
import {getMeUserByMail, updatePassword, updateProfil} from '../services';

interface UserContextData{
    user: User | undefined;
    meUser(mail: string): Promise<User | undefined>;
    modifyPassword(password: Password): Promise<string | undefined>;
    modifyProfil(user: User): Promise<User | undefined>;
}

const UserContext =  createContext<UserContextData>({} as any as UserContextData);

const UserProvider: React.FC = ({children}) => {
    const userData: UserContextData = Provider();
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

function Provider(){
    const [user, setUser] =  useState<User>();
    async function meUser(mail: string): Promise<User | undefined>{
        const result = await getMeUserByMail(mail);
        if (result) {
            setUser(result);
        }
        return result;
    }

    async function modifyPassword(password: Password): Promise<string | undefined>{
        return await updatePassword(password);
    }

    async function modifyProfil(user: User): Promise<User | undefined>{
        const result = await updateProfil(user);
        if (result) {
            setUser(result);
        }
        return result;
    }

    return{
        user,
        meUser,
        modifyPassword,
        modifyProfil
    };
}

function useUserContext() {
    return useContext<UserContextData>(UserContext);
}

export {UserProvider, useUserContext};