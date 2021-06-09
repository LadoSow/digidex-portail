import React, {createContext, useState, useContext, useEffect} from 'react';
import {Application, Domaine, Sit} from '../models';
import {getAllApplication, getAllDomaine, getAllSit} from '../services';

interface HomeContextData{
    applications: Application[];
    domaines: Domaine[];
    sits: Sit[];
}

const HomeContext =  createContext<HomeContextData>({} as any as HomeContextData);

const HomeProvider: React.FC = ({children}) => {
    const homeData = Provider();
    return (
        <HomeContext.Provider value={homeData}>
            {children}
        </HomeContext.Provider>
    );
};

function Provider(){
    const [applications, setApplications] = useState<Application[]>([]);
    const [domaines, setDomaines] = useState<Domaine[]>([]);
    const [sits, setSits] = useState<Sit[]>([]);

    useEffect(() => {
        getApplications().catch(() => ({}));
        getDomaines().catch(() => ({}));
        getSites().catch(() => ({}));

    }, []);

    async function getApplications(): Promise<Application[] | undefined>{
        const result = await getAllApplication();
        if (result) {
            setApplications(result);
        }
        return result;
    }
    async function getDomaines(): Promise<Domaine[] | undefined>{
        const result = await getAllDomaine();
        if (result) {
            setDomaines(result);
        }
        return result;
    }
    async function getSites(): Promise<Sit[] | undefined>{
        const result = await getAllSit();
        if (result) {
            setSits(result);
        }
        return result;
    }

    return{
        applications,
        domaines,
        sits
    };
}

function useHomeContext() {
    return useContext<HomeContextData>(HomeContext);
}

export {HomeProvider, useHomeContext};