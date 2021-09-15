import React, {useEffect, useState} from 'react';
import { FormikValues } from 'formik';
import {Builder} from 'builder-pattern';
import {Sit, User} from '../../models';
import {useHomeContext, useUserContext} from '../../context';
import {getVal} from '../../config/Encryption';
import {error, success, warning} from '../../notifications/Toaster';
import {MenuItem} from '@material-ui/core';

interface UserFormData {
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    sit: string,
}

function formiktoData(values: FormikValues):UserFormData {
    return Builder<UserFormData>()
        .firstname(values.firstname)
        .lastname(values.lastname)
        .username(values.username)
        .email(values.email)
        .sit(values.sit)
        .build();
}

function toUser( data: UserFormData): User {
    // si un seul est vide
    if (data.email === '' && data.username !== '' && data.sit !== ''){
        return Builder<User>()
            .username(data.username)
            .sit(
                Builder<Sit>()
                    .id(data.sit)
                    .build()
            )
            .build();
    }
    else if (data.username === '' && data.email !== '' && data.sit !== ''){
        return Builder<User>()
            .email(data.email)
            .sit(
                Builder<Sit>()
                    .id(data.sit)
                    .build()
            )
            .build();
    }
    else if (data.sit === '' && data.email !== '' && data.username !== ''){
        return Builder<User>()
            .username(data.username)
            .email(data.email)
            .build();
    }
    // si deux sont vides
    else if (data.email === '' && data.username === '' && data.sit !== ''){
        return Builder<User>()
            .sit(
                Builder<Sit>()
                    .id(data.sit)
                    .build()
            )
            .build();
    }
    else if (data.email === '' && data.sit === '' && data.username !== ''){
        return Builder<User>()
            .username(data.username)
            .build();
    }
    else if (data.username === '' && data.sit === '' && data.email !== ''){
        return Builder<User>()
            .email(data.email)
            .build();
    }
    // rien n'est vide
    else{
        return Builder<User>()
            .email(data.email)
            .username(data.username)
            .sit(
                Builder<Sit>()
                    .id(data.sit)
                    .build()
            )
            .build();
    }
}

export function useProfil() {
    const {meUser, modifyProfil} = useUserContext();
    const [user, setUser] =  useState<User>();

    useEffect(() => {
        meUser(getVal('mail') || '').then(res => {
            setUser(res);
        });
    }, [meUser]);

    const initialForm =  {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        sit: '',
    };

    const afficheSitLibelle = (user: User | undefined) => {
        if (user && user.sit){
            return user.sit.libelle;
        }
        else
            return 'Aucun';
    };

    const update = (values: FormikValues) => {
        if (values.email === '' && values.sit === '' && values.username === ''){
            warning('Vous devez saisir au moins une donnée pour effectuer une modification !');
        }
        else{
            const userToUpdate = toUser(formiktoData(values));
            modifyProfil(userToUpdate).then(r => {
                if (r){
                    success('Profil mis à jour !');
                }
                else{
                    error('Un souci, Réessayez plus tard !');
                }
            });
        }
    };

    return {
        user,
        initialForm,
        formiktoData,
        update,
        afficheSitLibelle
    };
}

export function SitOption(){
    const {sits} = useHomeContext();

    if (sits && sits.length) {
        return sits.map((sit) => {
            return <MenuItem key={sit.id} value={sit.id}>{sit.libelle}</MenuItem>;
        });
    } else {
        return <MenuItem value=''> Aucun </MenuItem>;
    }
}

