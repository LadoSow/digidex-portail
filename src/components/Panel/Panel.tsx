import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol} from 'mdb-react-ui-kit';

interface CardProps {
    title: string;
    content: number;
}

const Panel: React.FC<CardProps> = ({title, content}) =>  {
    return (
        <MDBCol style={{ maxWidth: '15rem', marginLeft:'65px', marginTop:'20px'}}>
            <MDBCard style={{boxShadow: '1px 2px 4px #8080806b'}}>
                <MDBCardBody style={{borderLeft: '8px solid #2cbbad', borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px'}}>
                    <MDBCardTitle tag='h5'>{title}</MDBCardTitle>
                    <MDBCardText>
                        {content}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default Panel;