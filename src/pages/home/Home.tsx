import React from 'react';
import {  MDBRow, MDBCol} from 'mdbreact';
import CardComponent from '../../components/Card/Card';
import Panel from '../../components/Panel/Panel';
import {useHomeContext} from '../../context';
import {Container} from '@material-ui/core';

const Home = () => {
    const {applications, domaines, sits} = useHomeContext();

    return (
        <Container disableGutters>
            <MDBCol>
                <MDBRow>
                    <Panel title='Applications' content={applications.length}/>
                    <Panel title='Domaines' content={domaines.length} />
                    <Panel title='Sites' content={sits.length}/>
                    <Panel title='Autres' content={0}/>
                </MDBRow>
                <MDBRow>
                    <CardComponent content={'Ce sont les applications de vos domaines dont vous avez l\'autorisation d\'accès.'} title='Applications' color='info' location='/applications'/>
                    <CardComponent content={'Modifier ici les informations sur votre identité: nom, prénom...'} title='Profil' location='/profil'/>
                    <CardComponent content={'Some quick example text to build on the card title and make up the bulk cards'} title='Autres' color='info' location='/acceuil'/>
                </MDBRow>
            </MDBCol>
        </Container>
    );
}
// #2cbbad
export default Home;