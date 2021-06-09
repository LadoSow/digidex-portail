import { createStyles, makeStyles } from '@material-ui/core';
import CoverImage from '../../assets/img/DIGIDEX.jpg';

const useStyles = makeStyles(() => createStyles({
    container: {
        display: 'flex',
        minHeight: '100vh'
    },
    divImage: {
        '@media(minWidth: 780px)': {
            display: 'none',
        },
        height: 'auto',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${CoverImage})`
    },
    imageContent: {
        textAlign: 'initial',
        padding: '10px',
        margin:'20px 0px 20px 10px',
    },
    root: {
        padding:'25px 0 25px 50px'
    },
    info:{
        color:'red',
        fontSize: '10px',
        paddingLeft: '18px',
        paddingBottom: '10px'
    },
    form:{
        padding: '15px 40px 0 40px',
        minHeight:'350px'
    },
    start:{
        paddingLeft: '55px',
        paddingBottom: '50px'
    },
    submit:{
        width: '80%',
        height: '35px',
        border: '2px solid #589cd7',
        background: '#5d9acf7a',
        borderRadius: '20px',
        textTransform: 'none'
    },
    divConnexion: {
        borderLeft: '2px solid #989898',
        background: '#e2e0e085',
    },
}));

export {useStyles};