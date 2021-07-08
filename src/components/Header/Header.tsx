import React from 'react';

import {makeStyles, createStyles} from '@material-ui/core';
import { useAuthContext} from '../../context';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import {getVal} from '../../config/Encryption';
import {MDBIcon} from 'mdb-react-ui-kit';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const useStyles = makeStyles(() =>
    createStyles({
        navbar: {
            backgroundColor: 'black !important',
            color: '#2cbbad !important'
        },
        navbarbrand:{
          color: '#2cbbad'
        },
        navlink:{
            color: '#2cbbad'
        }
    })
);

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const HeaderPage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const {signOut} = useAuthContext();

  const navDropdownTitle = (<span style={{color: '#2cbbad'}}> {getVal('profil')} <MDBIcon icon='user'/> </span>);
  const notifTitle = (<span style={{color: '#2cbbad'}}> <MDBIcon color={'white'} icon='bell' /> 1</span> );

  const handleClose = () => {
    setOpen(true);
  };

  return (
      <Navbar className={classes.navbar} sticky='top' bg='dark' expand='lg' variant='dark'>
          <Navbar.Brand>
              <strong className={classes.navbarbrand}>Portail Digidex</strong>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav'/>

          <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto' activeKey={sessionStorage.getItem('active')!} onSelect={(selectedKey)  => sessionStorage.setItem('active',selectedKey!)}>
                  <Nav.Item>
                      <Nav.Link eventKey={'/acceuil'} href='/acceuil'>Acceuil</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey={'/applications'} href='/applications'>Applications</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey={'/incidents'} href='/incidents'>Incidents</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <NavDropdown title={notifTitle} id='notif-nav-dropdown' style={{marginRight: '20px'}}>
                          <NavDropdown.Item>
                              <Alert hidden={open} onClose={handleClose} severity='error'> Notifications ici !</Alert>
                          </NavDropdown.Item>
                          {/*<NavDropdown.Item>
                              <Alert severity='warning'>Incident: Serveur #AOL ne répond plus !</Alert>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                              <Alert severity='success'>Informations: Incident tel résolu !</Alert>
                          </NavDropdown.Item>*/}
                      </NavDropdown>
                  </Nav.Item>
              </Nav>

              <Nav>
                  <NavDropdown title={navDropdownTitle} id='user-nav-dropdown' style={{marginRight: '20px'}}>
                      <NavDropdown.Item href='/profil'>
                          Modifier votre profil
                      </NavDropdown.Item>
                      <NavDropdown.Item href='/update-password'>
                          Modifier votre mot de passe
                      </NavDropdown.Item>

                      <NavDropdown.Divider />

                      <NavDropdown.Item onClick={signOut} href='/login'>
                          Déconnexion <MDBIcon style={{ marginLeft: '25px'}} icon='sign-out-alt' />
                      </NavDropdown.Item>
                  </NavDropdown>
              </Nav>

              <SettingsIcon fontSize={'small'} style={{ marginRight: '5px', marginBottom: '4px'}}/>

          </Navbar.Collapse>
      </Navbar>
  );
}

export default HeaderPage ;