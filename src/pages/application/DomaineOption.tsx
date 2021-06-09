import React from 'react';
import {useHomeContext} from '../../context';
import {getVal} from '../../config/Encryption';

export function DomaineOption(){
    const {domaines} = useHomeContext();
    const domaineUser = getVal('domaines')?.split('|');

    if (domaines && domaines.length && domaineUser?.length && domaineUser) {

        const filtre = domaines.filter((domaine) => {
            return (domaineUser.find(userdomaine => userdomaine === domaine.id));
        });

        if (filtre && filtre.length) {
            return filtre.map((domaine) => {
                return <option key={domaine.id} value={domaine.id}>{domaine.libelle}</option>;
            });
        }
        else
            return <option value=''> Aucun </option>;
    } else {
        return <option value=''> Aucun </option>;
    }
}