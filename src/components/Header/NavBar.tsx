import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from 'mdbreact';
import {makeStyles, createStyles} from '@material-ui/core';
import { useAuthContext} from '../../context';
import {getVal} from "../../config/Encryption";

const useStyles = makeStyles(() =>
    createStyles({
        navbar: {
            backgroundColor: 'black',
            color: '#2cbbad'
        },
        navbarbrand:{
          color: '#2cbbad'
        },
        navlink:{
            color: '#2cbbad'
        }
    })
);


const NavbarPage = () => {
  const classes = useStyles();
  const {signOut} = useAuthContext();
  const state = {
    isOpen: false
  };

  const toggleCollapse = () => {
    return !state.isOpen;
  }

  return (
    <MDBNavbar className={classes.navbar} position='fixed' color='black' dark expand='md'>
        <MDBNavbarBrand>
          <strong className={classes.navbarbrand} >Portail Digidex</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => {toggleCollapse();}}/>
        <MDBCollapse id='navbarCollapse3' isOpen={state.isOpen} navbar>
          <MDBNavbarNav left>
             <MDBNavItem active>
              <MDBNavLink to='/acceuil'>Acceuil</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
                <MDBNavLink to='/applications'>Applications</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
              <MDBNavbarNav right style={{position: 'absolute', right: 0}}>
                  <MDBNavItem style={{marginRight: '20px'}}>
                      <MDBDropdown className='pr-3'>
                          <MDBDropdownToggle style={{color: '#2cbbad'}} nav caret className='text-default'>
                              {getVal('profil')} &nbsp;
                              <MDBIcon icon='user' />
                          </MDBDropdownToggle>
                          <MDBDropdownMenu className='dropdown-default'>
                              <MDBDropdownItem href='/profil'>Modifier votre profil</MDBDropdownItem>
                              <MDBDropdownItem href='/update-password'>Modifier votre mot de passe</MDBDropdownItem>
                              <MDBDropdownItem divider />
                              <MDBDropdownItem onClick={signOut} href='/login'>Déconnexion &nbsp;&nbsp;&nbsp; <MDBIcon className='text-default' icon='sign-out-alt' /></MDBDropdownItem>
                          </MDBDropdownMenu>
                      </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink style={{color: '#2cbbad'}} className='waves-effect waves-light' to='#!'>
                          <MDBIcon className='text-default pr-3' icon='cog' />
                      </MDBNavLink>
                  </MDBNavItem>
              </MDBNavbarNav>
        </MDBCollapse> 
      </MDBNavbar>  
  );
}

export default NavbarPage ;