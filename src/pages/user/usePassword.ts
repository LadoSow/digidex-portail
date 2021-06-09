import {useState} from 'react';
import { FormikValues } from 'formik';
import * as Yup from 'yup';
import {Builder} from 'builder-pattern';
import { error, success } from '../../notifications/Toaster';
import {Password} from '../../models';
import {useUserContext} from '../../context';

interface UserFormData {
    oldpassword: string,
    newpassword: string,
}

function formiktoData(values: FormikValues):UserFormData {
    return Builder<UserFormData>()
        .oldpassword(values.oldpassword)
        .newpassword(values.newpassword)
        .build();
}

function toPassword( data: UserFormData): Password {
    return Builder<Password>()
        .old_password(data.oldpassword)
        .new_password(data.newpassword)
        .build();
}

export function usePassword() {
    const [hidden, setHidden] =  useState(true);
    const {modifyPassword} = useUserContext();

    const initialForm =  {
        oldpassword: '',
        newpassword: '',
    };

    const updatePassword = (values: FormikValues) => {
        const passwordToUpdate = toPassword(formiktoData(values));
        modifyPassword(passwordToUpdate).then(r => {
            if (r === 'error'){
                error('🚨 Erreur !', {
                    onOpen: () => {
                        setHidden(false);
                    },
                    onClose:() => {
                        setHidden(true);
                    }
                });
            }
            else{
                success('🎉 Mot de passe modifié !');
            }
        });
    };

    const validation = Yup.object().shape({
        oldpassword: Yup.string()
            .required('Obligatoire *'),
        newpassword: Yup.string()
            .required('Obligatoire *')
            .min(8, 'Le nouveau mot de passe doit contenir au moins 8 caractères')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,18}$/, 'Le nouveau mot de passe doit comporter au moins 1 chiffre, 1e lettre majuscule, 1 caractère spécial')
    });

    return {
        initialForm,
        formiktoData,
        updatePassword,
        hidden,
        validation
    };
}

