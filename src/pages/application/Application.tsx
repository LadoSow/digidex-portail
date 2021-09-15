import React from 'react';
import {Grid, Container, Typography, ThemeProvider} from '@material-ui/core';
import {DataGrid} from '@material-ui/data-grid';
import { useStyles, theme} from'./style';
import {Formik, Form, Field, FormikValues} from 'formik';
import {DomaineOption} from './DomaineOption';
import {ApplicationList, columns} from './ApplicationList';
import {useHomeContext} from '../../context';

const Application = () =>  {
    const classes = useStyles();
    const {applications} = useHomeContext();
    const initialValues={domaine:''};
    const search = (values: FormikValues) => {
        ApplicationList(values.domaine, applications);
    };
    const populateGrid = (values: string) => {
        return ApplicationList(values, applications);
    };

    return (
        <Container disableGutters className={classes.container}>
            <Grid container item xs={4} className={classes.divImage}  alignItems='stretch' direction='column' justifyContent='center'/>

            <Grid container item xs={8} direction='column' justifyContent='flex-start' alignItems='stretch'>
                <Grid className={classes.root}>
                    <Typography variant={'h4'}>
                        Applications
                    </Typography>
                </Grid>
                <Grid>
                    <Grid container direction='column' justifyContent='flex-start' alignItems='stretch' className={classes.form}>
                        <Formik initialValues={initialValues} onSubmit={search} >
                            {({values }) => (
                            <Form>
                                    <Grid className={classes.formContent}>
                                        <Grid className={classes.start}>
                                            <Typography variant={'subtitle2'} >
                                                Sélectionnez un domaine pour voir ses applications.
                                            </Typography>
                                        </Grid>
                                        <Grid container item justifyContent='center' spacing={2}>
                                            <Grid item xs={12} sm={12} >
                                                <Field className={classes.select} as='select' name='domaine' >
                                                    <option value=''>{''}</option>
                                                    {DomaineOption()}
                                                </Field>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Grid style={{ height: '60vh', width: '100%' }}>
                                            <ThemeProvider theme={theme}>
                                                <DataGrid rows={populateGrid(values.domaine)} columns={columns} autoPageSize={true} disableSelectionOnClick/>
                                            </ThemeProvider>
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

export default Application;
