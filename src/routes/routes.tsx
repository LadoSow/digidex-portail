import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../pages/home/Home';
import EditUser from '../pages/user/Profil';
import LoginPage from '../pages/login/Login';
import Application from '../pages/application/Application';
import {HomeProvider, UserProvider, AuthProvider, useAuthContext} from '../context';
import NavbarPage from '../components/Header/NavBar';
import FooterPage from '../components/Footer/Footer';
import EditPassword from '../pages/user/Password';

const AllRoutes = () => {
    return (
        <AuthProvider>
            <Switch>
                <Route path='/login'>
                        <LoginPage/>
                </Route>
                <PrivateRoute exact strict path='/'>
                    <NavbarPage/>
                        <HomeProvider>
                            <Home/>
                        </HomeProvider>
                    <FooterPage/>
                </PrivateRoute>
                <PrivateRoute path='/acceuil'>
                    <NavbarPage/>
                        <HomeProvider>
                            <Home/>
                        </HomeProvider>
                    <FooterPage/>
                </PrivateRoute>
                <PrivateRoute path='/applications'>
                    <NavbarPage/>
                        <HomeProvider>
                            <Application/>
                        </HomeProvider>
                    <FooterPage/>
                </PrivateRoute>
                <PrivateRoute path='/profil'>
                    <NavbarPage/>
                    <HomeProvider>
                        <UserProvider>
                            <EditUser/>
                        </UserProvider>
                    </HomeProvider>
                    <FooterPage/>
                </PrivateRoute>
                <PrivateRoute path='/update-password'>
                    <NavbarPage/>
                        <UserProvider>
                            <EditPassword/>
                        </UserProvider>
                    <FooterPage/>
                </PrivateRoute>
            </Switch>
        </AuthProvider>
    );
};

// @ts-ignore
function PrivateRoute({ children, ...rest }) {
    const {getToken} = useAuthContext();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                getToken() ? (
                    children
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: location } }} />
                )
            }
        />
    );
}

export default AllRoutes;