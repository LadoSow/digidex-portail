import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
    cardbutton: {
        textAlign: 'center',
        width: '90%',
        color: 'white',
        fontWeight: 'bold',
        padding: '15px',
        marginLeft: '6%'
    },
    cardtitle:{
        textAlign: 'center',
        fontSize: '25px',
        color: 'black'
    },
    cardcontent:{
        fontSize: '14px',
        color: 'gray'
    },
}));

export {useStyles};