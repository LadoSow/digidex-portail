import React from 'react';
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import {Container, Grid} from '@material-ui/core';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Notification from './components/Notification';

const HomeIncident = () => {
    return (
        <Container>
            <MDBCol>
                <MDBRow>
                    <div style={{height: '75px', width: '100%', marginTop: '10px'}}>
                        <Notification/>
                    </div>
                </MDBRow>
                <MDBRow>
                    <Grid container direction='row' justify='center' alignItems='center'>
                        <LineChart/>
                        <PieChart/>
                    </Grid>
                </MDBRow>
            </MDBCol>
        </Container>
    );
}

export default HomeIncident;