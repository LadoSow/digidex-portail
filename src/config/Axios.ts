import axios, { AxiosResponse} from "axios";

const onSuccessResponse = (response: AxiosResponse) => response;

const onErrorResponse = (err: any) => {
    const status = (err && err.status) || (err && err.response ? err.response.status : 0);
    if (status === 500) {
        console.log('Erreur Interne, Réessayez plus tard');
    }
    if (status === 401) {
        console.log('unauthorized, logging out ...');
    }
    if (status === 400) {
        console.log('Mauvaise Requete, Réessayez...');
    }
    return Promise.reject(err.response);
};

export const forThisUrl = (apiURL: string) => {
    return {
        getAxiosInstance: () => {
            const client = axios.create({
                baseURL: apiURL,
                xsrfHeaderName: 'X-CSRFToken',
                xsrfCookieName: 'X-CSRFToken'
            });
            client.interceptors.response.use(onSuccessResponse, onErrorResponse);
            return client;
        }
    };
};