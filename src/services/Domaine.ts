import {GET_ALL_DOMAINE, DOMAINE_API_URL} from '../config/api/Domaine';
import {forThisUrl} from '../config/Axios';
import {Domaine} from '../models';

const http =  forThisUrl(DOMAINE_API_URL).getAxiosInstance();

function getAllDomaine(): Promise<Domaine[]>{
    return http.get(GET_ALL_DOMAINE)
        .catch(() => ({data: []}))
        .then((res) => {
            return res.data;
        },
    );
}

export {
    getAllDomaine
};

