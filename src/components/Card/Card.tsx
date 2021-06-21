import React from 'react';
import CoverImage1 from '../../assets/img/img.jpeg';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol} from 'mdb-react-ui-kit';
import { useStyles } from'./style';


interface CardProps {
    title: string;
    color?: any;
    location: string;
    content?: string;
    target?:string;
}

const CardComponent: React.FC<CardProps> = ({title, color, location, content, target}) => {
    const classes = useStyles();

    return (
        <MDBCol style={{ maxWidth: '22rem', margin:'50px'}}>
            <MDBCard style={{boxShadow: '0 1px 5px #8080804f'}}>
                <MDBCardImage className='img-fluid' src={CoverImage1} />
                <MDBCardBody>
                    <MDBCardTitle className={classes.cardtitle}>{title}</MDBCardTitle>
                    <MDBCardText className={classes.cardcontent}>{content}</MDBCardText>
                    <MDBBtn color={color} className={classes.cardbutton} href={location} target={target!}>Ouvrir</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default CardComponent;