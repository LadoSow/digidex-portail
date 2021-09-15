import {createTheme, createStyles, makeStyles} from '@material-ui/core';
import Cover from '../../assets/img/update.png';
import {frFR} from '@material-ui/data-grid';

const useStyles = makeStyles(() => createStyles({
    container: {
        display: 'flex',
        minHeight: '80vh'
    },
    divImage: {
        '@media only screen and (max-width: 650px)': {
            display: 'none',
        },
        height: 'auto',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${Cover})`,
        backgroundPosition: 'center'
    },
    root: {
        color:'#1f3798'
    },
    title: {
        padding:'25px 0 25px 95px'
    },
    info:{
        color:'red',
        fontSize: '10px',
        paddingLeft: '18px',
        paddingBottom: '10px'
    },
    form:{
        padding: '15px 40px 0 40px',
        minHeight:'125px'
    },
    table:{
        paddingLeft: '108px'
    },
    start:{
        paddingLeft: '65px',
        paddingBottom: '10px'
    },
    margin: {
        margin: theme.spacing(2),
        '& .MuiFormHelperText-root.Mui-error': {
            color: '#34c65f',
        },
        '& .MuiFormLabel-root.Mui-error ': {
            color: '#34c65f',
        },
        ' & .MuiInput-underline.Mui-error:after': {
            borderBottomColor: '#34c65f',
        }
    },
    submit:{
        width: '120px',
        border: '2px solid #4a5ba6',
        borderRadius:'20px',
        background: '#caedd5',
        textTransform: 'none',
        color: '#4a5ba6',
        fontWeight: 'bold',
    },
    initialise:{
        border: '2px solid #4a5ba6',
        borderRadius:'20px',
        background: '#caedd5',
        textTransform: 'none',
        color: '#4a5ba6',
        fontWeight: 'bold',
    }
}));

const theme = createTheme(
    {
        palette: {
            primary: { main: '#0f9fa8' },
        },
    },
    frFR,
);

export {useStyles, theme};