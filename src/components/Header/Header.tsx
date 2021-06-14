import React from 'react';

import {makeStyles, createStyles} from '@material-ui/core';
import { useAuthContext} from '../../context';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import {getVal} from '../../config/Encryption';
import {MDBIcon} from 'mdb-react-ui-kit';

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


const HeaderPage = () => {
  const classes = useStyles();
  const {signOut} = useAuthContext();

  const navDropdownTitle = (<span style={{color: '#2cbbad'}}> {getVal('profil')} <MDBIcon icon='user'/> </span>);

  return (
      <Navbar className={classes.navbar} sticky='top' bg='dark' expand='lg' variant='dark'>
          <Navbar.Brand>
              <strong className={classes.navbarbrand}>Portail Digidex</strong>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav'/>

          <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                  <Nav.Link href='/acceuil'>Acceuil</Nav.Link>

                  <Nav.Link href='/applications'>Applications</Nav.Link>
              </Nav>

              <Nav>
                  <NavDropdown title={navDropdownTitle} id='basic-nav-dropdown' style={{marginRight: '20px'}}>
                      <NavDropdown.Item href='/profil'>
                          Modifier votre profil
                      </NavDropdown.Item>
                      <NavDropdown.Item href='/update-password'>
                          Modifier votre mot de passe
                      </NavDropdown.Item>

                      <NavDropdown.Divider />

                      <NavDropdown.Item onClick={signOut} href='/login'>
                          Déconnexion &nbsp;&nbsp;&nbsp; <MDBIcon className='text-default' icon='sign-out-alt' />
                      </NavDropdown.Item>
                  </NavDropdown>
              </Nav>

              <SettingsIcon fontSize={'small'} style={{ marginRight: '5px', marginBottom: '4px'}}/>

          </Navbar.Collapse>
      </Navbar>
  );
}

export default HeaderPage ;