import {createMuiTheme, createStyles, makeStyles} from '@material-ui/core';
import CoverImage from '../../assets/img/nos-services.png';
import {frFR} from '@material-ui/data-grid';

const useStyles = makeStyles(() => createStyles({
    container: {
        display: 'flex',
        minHeight: '100vh'
    },
    divImage: {
        '@media only screen and (max-width: 650px)': {
            display: 'none',
        },
        height: 'auto',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${CoverImage})`
    },
    root: {
        padding:'25px 0 25px 95px'
    },
    form:{
        padding: '0 10px 0 105px',
    },
    formContent:{
        paddingTop: '15px',
        minHeight:'125px'
    },
    start:{
        paddingBottom: '10px'
    },
    select:{
        width: '100%',
        height: '35px',
        border: '2px solid #0f9fa8',
        background: '#0f9fa854',
        borderRadius: '5px'
    },
    submit:{
        width: '100%',
        height: '35px',
        border: '2px solid #0f9fa8',
        background: '#0f9fa854',
        borderRadius: '5px',
        textTransform: 'none'
    }
}));

const theme = createMuiTheme(
    {
        palette: {
            primary: { main: '#0f9fa8' },
        },
    },
    frFR,
);

export {useStyles, theme};