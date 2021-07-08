import React from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}
function sleep(ms:number) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}


const Notification = () => {
    const [open, setOpen] = React.useState(true);

    function afficher()
    {
        setOpen(false);
        sleep(5000).then(()=> {
            setOpen(true);
        });
    }

    sleep(50000).then(()=> {
        afficher();
    });

    return (
        <div hidden={open} style={{ marginBottom: '15px'}}>
            <Alert severity='warning'>
                Incident: Le serveur #SRV54567 ne répond plus !
            </Alert>
        </div>
    );
}

export default Notification;