import {Application} from '../../models';
import {GridCellParams, GridColDef} from '@material-ui/data-grid';
import {Button} from '@material-ui/core';

function disableButton(value:string){
    return value === '';
}

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 130 },
    { field: 'nom', headerName: 'Nom', width: 300 },
    { field: 'action', headerName: 'Action', width: 130, renderCell: (params: GridCellParams) => (
        <Button disabled={disableButton(params.value as string)} onClick={() => {window.open(params.value as string)}} variant='contained' color='primary' size='small' style={{ marginLeft: 16 , textTransform: 'none'}}>
            Ouvrir
        </Button>)
    },
];

export function ApplicationList(domaineValue: string, applications:Application[]){
    const rows = [ { id:0, nom: 'Aucune Application', action: '' } ];

    if (applications){
        const filtre = applications.filter((application) => {
            return (application.domaines.find(domaine => domaine === domaineValue));
        });

        if (filtre && filtre.length) {
            let idTable = 0;
            rows.pop();
            filtre.map((application) => {
                idTable += 1;
                return rows.push({id:idTable, nom:application.nom, action:application.lien});
            });
            return rows;
        }
        else {
            return rows;
        }
    }
    else {
        return rows;
    }
}