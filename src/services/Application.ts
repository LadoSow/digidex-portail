import {GET_ALL_APPLICATION, APPLICATION_API_URL} from '../config/api/Application';
import {forThisUrl} from '../config/Axios';
import {Application} from '../models';

const http =  forThisUrl(APPLICATION_API_URL).getAxiosInstance();

function getAllApplication(): Promise<Application[]>{
    return http.get(GET_ALL_APPLICATION)
        .catch(() => ({data: []}))
        .then((res) => {
            return res.data;

            /*
            TODO: REVOIR LA DESERIALIZATION
            if (res.data) {
                return res.data.map(
                    (application: any) => deserialize<Application>(application, Application)
                );
            }
            else return res.data;
            */
        }
    );
}

export {
    getAllApplication
};