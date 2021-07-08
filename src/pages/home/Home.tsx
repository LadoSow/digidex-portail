import React from 'react';
import {MDBRow, MDBCol} from 'mdb-react-ui-kit';
import CardComponent from '../../components/Card/Card';
import Panel from '../../components/Panel/Panel';
import {useHomeContext} from '../../context';
import {Container} from '@material-ui/core';
import {ADMIN} from '../../config/Host';
import Notification from '../gestionincidents/components/Notification';

const Home = () => {
    const {applications, domaines, sits} = useHomeContext();

    return (
        <Container disableGutters>
            <MDBCol>
                <MDBRow>
                    <div style={{width: '90%', margin: '10px auto'}}>
                        <Notification/>
                    </div>
                </MDBRow>
                <MDBRow>
                    <Panel title='Applications' content={applications.length}/>
                    <Panel title='Domaines' content={domaines.length} />
                    <Panel title='Sites' content={sits.length}/>
                    <Panel title='Autres' content={0}/>
                </MDBRow>
                <MDBRow>
                    <CardComponent content={'Ce sont les applications de vos domaines dont vous avez l\'autorisation d\'accès.'} title='Applications' color='info' location='/applications'/>
                    <CardComponent content={'Modifier ici les informations sur votre identité: nom, prénom...'} title='Profil' location='/profil'/>
                    <CardComponent content={'Page de l\'administrateur, ne doivent y accéder que ceux ayant le statut.'} title='Admin' color='info' location={ADMIN} target={'_blank'}/>
                </MDBRow>
            </MDBCol>
        </Container>
    );
}

export default Home;