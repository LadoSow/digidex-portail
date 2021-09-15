import React from 'react';
import {Button, Container, Grid, TextField, Typography, InputAdornment} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DraftsRoundedIcon from '@material-ui/icons/DraftsRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import BusinessIcon from '@material-ui/icons/Business';
import {Form, Formik} from 'formik';
import {useStyles} from './style';
import {SitOption, useProfil} from './useProfil';
import {NotificationContainer} from '../../notifications/Toaster';

const EditUser = () => {
    const classes = useStyles();
    const {afficheSitLibelle, update, user, initialForm} = useProfil();

    return (
        <Container disableGutters className={classes.container}>
            <Grid container item xs={4} className={classes.divImage}  alignItems='stretch' direction='column' justifyContent='center'/>
            <Grid container item xs={8} direction='column' justifyContent='flex-start' alignItems='stretch'>
                <Grid className={classes.title}>
                    <Typography variant={'h4'}>
                        Votre Profil:
                    </Typography>
                </Grid>
                <Grid>
                    <NotificationContainer />
                    <Grid container direction='column' justifyContent='flex-start' alignItems='stretch'>
                        <Formik initialValues={initialForm} onSubmit={update}>
                            {({handleReset, values, handleChange}) => (
                            <Form>
                                <Grid className={classes.form}>
                                    <Grid className={classes.start}>
                                        <Typography variant={'subtitle2'} >
                                            Modifier les informations de votre profil
                                        </Typography>
                                    </Grid>
                                    <Grid container item justifyContent='center' spacing={2}>
                                        <Grid item xs={10} sm={10} >
                                            <Grid container spacing={2}>
                                                <Grid item xs={6} sm={6} >
                                                    <TextField
                                                        disabled
                                                        fullWidth
                                                        className={classes.margin}
                                                        id='firstname'
                                                        name='firstname'
                                                        placeholder={user?.first_name}
                                                        label='Prénom'
                                                        value={values.firstname}
                                                        onChange={handleChange}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position='start'>
                                                                    <PersonRoundedIcon className={classes.root}/>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={6} sm={6} >
                                                    <TextField
                                                        disabled
                                                        fullWidth
                                                        className={classes.margin}
                                                        id='lastname'
                                                        name='lastname'
                                                        placeholder={user?.last_name}
                                                        label='Nom'
                                                        value={values.lastname}
                                                        onChange={handleChange}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position='start'>
                                                                    <AccountCircle className={classes.root}/>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <TextField
                                                    fullWidth
                                                    className={classes.margin}
                                                    id='email'
                                                    name='email'
                                                    placeholder={user?.email}
                                                    label='Email'
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position='start'>
                                                                <DraftsRoundedIcon className={classes.root}/>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <TextField
                                                    fullWidth
                                                    className={classes.margin}
                                                    id='username'
                                                    name='username'
                                                    placeholder={user?.username}
                                                    label='Username'
                                                    value={values.username}
                                                    onChange={handleChange}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position='start'>
                                                                <VpnKeyRoundedIcon className={classes.root} />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </Grid>
                                            <Grid container spacing={2}>
                                                <Grid  item xs={4} sm={4}>
                                                    <TextField
                                                        disabled
                                                        fullWidth
                                                        className={classes.margin}
                                                        id='sitactuel'
                                                        name='sitactuel'
                                                        placeholder={afficheSitLibelle(user)}
                                                        label='Site Actuel'
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position='start'>
                                                                    <BusinessIcon className={classes.root} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid  item xs={8} sm={8}>
                                                    <TextField
                                                        select
                                                        fullWidth
                                                        className={classes.margin}
                                                        id='sit'
                                                        name='sit'
                                                        label='Sélectionner votre nouveau site'
                                                        value={values.sit}
                                                        onChange={handleChange}
                                                    >
                                                        {SitOption()}
                                                    </TextField>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid className={classes.table}>
                                    <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
                                        <Grid item>
                                            <Button type={'submit'} className={classes.submit}>Modifier</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button onClick={handleReset} className={classes.initialise}>Réinitialiser</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditUser;
