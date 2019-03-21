import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import AboutPage from '../About';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import VendorPage from '../Vendors';
import VenuePage from '../Venues';
import TeamPage from '../Team';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

import '../../index.css';

/* Below specify what components will render according to Browser Router */
const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr />

            <Route exact path={ROUTES.ABOUT} component={AboutPage} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route exact path={ROUTES.ADMIN} component={AdminPage} />
            <Route exact path={ROUTES.VENDORS} component={VendorPage} />
            <Route exact path={ROUTES.VENUES} component={VenuePage} />
            <Route exact path={ROUTES.TEAM} component={TeamPage} />
        </div>
    </Router>
);

export default withAuthentication(App);