import React from 'react';
import {Grid, Container, Typography, Button, TextField} from '@material-ui/core';
import {Form, Formik} from 'formik';
import {useLogin} from './useLogin';
import { useStyles } from'./style';

export default function LoginPage() {
    const classes = useStyles();

    const { initialForm, hidden, validation, connexion} = useLogin();

    return (
        <Container disableGutters className={classes.container}>
            <Grid container item xs={5} className={classes.divImage} alignItems='flex-end' direction='row' justify='flex-start'/>

            <Grid className={classes.divConnexion} container item xs={7} direction='column' justify='center' alignItems='stretch'>
                <Grid className={classes.root}>
                    <Typography variant={'h3'} style={{color: "#5c99da"}}>
                        Se connecter
                    </Typography>
                </Grid>
                <Grid>
                    <Grid container direction='column' justify='flex-start' alignItems='stretch'>
                        <Formik validationSchema={validation} initialValues={initialForm} onSubmit={connexion}>
                            {({errors, touched, values, handleChange}) => (
                            <Form>
                                <Grid className={classes.form}>
                                    <Grid className={classes.start}>
                                        <Typography style={{color: "#569cd9"}}>
                                            Renseignez votre login et mot de passe
                                        </Typography>
                                    </Grid>
                                    <Grid container item justify='center' spacing={2}>
                                        <Grid item xs={10} sm={10} >
                                            <TextField
                                                fullWidth
                                                id='email'
                                                name='email'
                                                label='Email'
                                                value={values.email}
                                                onChange={handleChange}
                                                helperText={errors.email && touched.email ? errors.email : ''}
                                                error={Boolean(errors.email && touched.email)}
                                                InputLabelProps={{shrink: true}}
                                            />
                                        </Grid>
                                        <Grid item xs={10} sm={10} >
                                            <TextField
                                                fullWidth
                                                type={'password'}
                                                id='password'
                                                name='password'
                                                label='Mot de passe'
                                                value={values.password}
                                                onChange={handleChange}
                                                helperText={errors.password && touched.password ? errors.password : ''}
                                                error={Boolean(errors.password && touched.password)}
                                                InputLabelProps={{shrink: true}}
                                            />
                                        </Grid>

                                        <div hidden={hidden} className={classes.info} >Login ou mot de passe incorrect</div>
                                    </Grid>
                                    <Grid container item justify='center' style={{padding: "35px"}} spacing={2}>
                                        <Grid item xs={5} sm={5} >
                                            <Button type={'submit'} className={classes.submit}>Connexion</Button>
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
}
