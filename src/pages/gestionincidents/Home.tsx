import React from 'react';
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import {Container, Grid} from '@material-ui/core';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Notification from './components/Notification';
import Panel from "../../components/Panel/Panel";

const HomeIncident = () => {
    return (
        <Container>
            <MDBCol>
                <MDBRow>
                    <div style={{ width: '100%', marginTop: '10px'}}>
                        <Notification/>
                    </div>
                </MDBRow>
                <MDBRow>
                    <MDBRow style={{ paddingLeft: '80px'}}>
                        Statistiques des incidents de cette semaine :
                    </MDBRow>
                    <MDBRow>
                        <Panel title='Total' content={25}/>
                        <Panel title='Résolus' content={18} />
                        <Panel title='En cours' content={5}/>
                        <Panel title='Critiques' content={2}/>
                    </MDBRow>
                </MDBRow>
                <MDBRow>
                    <Grid container direction='row' justifyContent='center' alignItems='center' style={{marginTop: '50px'}}>
                        <LineChart/>
                        <PieChart/>
                    </Grid>
                </MDBRow>
            </MDBCol>
        </Container>
    );
}

export default HomeIncident;