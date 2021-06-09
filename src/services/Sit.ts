import {SIT_API_URL, GET_ALL_SIT} from '../config/api/Sit';
import {forThisUrl} from '../config/Axios';
import {Sit} from '../models';

const http =  forThisUrl(SIT_API_URL).getAxiosInstance();

function getAllSit(): Promise<Sit[]>{
    return http.get(GET_ALL_SIT)
        .catch(() => ({data: []}))
        .then((res) => {
                return res.data;
            },
        );
}

export {
    getAllSit
};

