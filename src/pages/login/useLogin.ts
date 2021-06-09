import { FormikValues } from 'formik';
import {Builder} from 'builder-pattern';
import {Identifiant} from '../../models';
import {useAuthContext} from '../../context';
import {useState} from 'react';
import * as Yup from 'yup';

const initialForm =  {
    email: '',
    password: '',
};

interface UserFormData {
    email: string;
    password: string;
}

function formiktoData(values: FormikValues):UserFormData {
    return Builder<UserFormData>()
        .email(values.username)
        .password(values.password)
        .build();
}

function toIdentifiant( data: UserFormData, username:string): Identifiant {
    return Builder<Identifiant>()
        .username(username)
        .password(data.password)
        .build();
}

export function useLogin() {
    const {signIn, meUser} = useAuthContext();
    const [hidden, setHidden] =  useState(true);

    const validation = Yup.object().shape({
        email: Yup.string().required('Obligatoire *'),
        password: Yup.string().required('Obligatoire *')
    });

    function connexion(values: FormikValues) {
        let userToSign:Identifiant;
        meUser(values.email).then(r => {
            if (r){
                userToSign=toIdentifiant(formiktoData(values), r.username);
                signIn(userToSign).then((res) => {
                    if (res){
                        window.location.href='/acceuil';
                    }
                    else {
                        setHidden(false);
                    }
                });
            }
        });
    }

    return {
        initialForm,
        formiktoData,
        hidden,
        validation,
        connexion
    };
}

