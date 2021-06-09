import React from 'react';
import {useStyles} from './style';
import {Button, Container, Grid, InputAdornment, TextField, Typography} from '@material-ui/core';
import {Form, Formik} from 'formik';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {usePassword} from './usePassword';
import {NotificationContainer} from '../../notifications/Toaster';

const EditPassword = () => {
    const classes = useStyles();
    const {updatePassword, initialForm, validation, hidden} = usePassword();

    return (
        <Container disableGutters className={classes.container}>

            <Grid container item xs={4} className={classes.divImage}  alignItems='stretch' direction='column' justify='center'/>
            <Grid container item xs={8} direction='column' justify='flex-start' alignItems='stretch'>
                <Grid className={classes.title}>
                    <Typography variant={'h4'}>
                        Mot de passe:
                    </Typography>
                </Grid>
                <Grid>
                    <NotificationContainer />

                    <Grid container direction='column' justify='flex-start' alignItems='stretch'>
                        <Formik validationSchema={validation} initialValues={initialForm} onSubmit={updatePassword}>
                            {({errors, touched, handleReset, values, handleChange}) => (
                                <Form>
                                    <Grid className={classes.form}>
                                        <Grid className={classes.start}>
                                            <Typography variant={'subtitle2'} >
                                                Renseigner votre nouveau mot de passe
                                            </Typography>
                                        </Grid>
                                        <Grid container item justify='center' spacing={2}>
                                            <Grid item xs={10} sm={10} >
                                                <Grid item xs={12} sm={12} >
                                                    <TextField
                                                        fullWidth
                                                        className={classes.margin}
                                                        id='oldpassword'
                                                        name='oldpassword'
                                                        label='Ancien mot de passe'
                                                        value={values.oldpassword}
                                                        onChange={handleChange}
                                                        helperText={errors.oldpassword && touched.oldpassword ? errors.oldpassword : ''}
                                                        error={Boolean(errors.oldpassword && touched.oldpassword)}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position='start'>
                                                                    <LockIcon className={classes.root}/>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                    <div hidden={hidden} className={classes.info}>Votre ancien mot de passe ne correspond pas</div>
                                                </Grid>
                                                <Grid item xs={12} sm={12} >
                                                    <TextField
                                                        fullWidth
                                                        className={classes.margin}
                                                        id='newpassword'
                                                        name='newpassword'
                                                        label='Nouveau mot de passe'
                                                        value={values.newpassword}
                                                        onChange={handleChange}
                                                        helperText={errors.newpassword && touched.newpassword ? errors.newpassword : ''}
                                                        error={Boolean(errors.newpassword && touched.newpassword)}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position='start'>
                                                                    <LockOpenIcon className={classes.root}/>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid className={classes.table}>
                                        <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
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

export default EditPassword;
