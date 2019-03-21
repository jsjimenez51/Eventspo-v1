import React from 'react';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import palmLogo from '../../icons/whitePalm.png';
import NavUL from '../Styled/navUl';
import NavBar from '../Styled/navBar';
import NavLink from '../Styled/navLink';
import NavLogo from '../Styled/navLogo';
import NavLI from '../Styled/navLi';

const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? (
            <NavigationAuth authUser={authUser} />
            ) : (
                <NavigationNonAuth />
            )
        }
    </AuthUserContext.Consumer>
);


const NavigationAuth = ({ authUser }) => (
    <NavBar>
        <NavLogo src={palmLogo} alt='Eventspo logo'/>
        <NavUL>
            <NavLI>
                <NavLink to={ROUTES.ABOUT}>Landing</NavLink>
            </NavLI>
            <NavLI>
                <NavLink to={ROUTES.HOME}>Home</NavLink>
            </NavLI>
            <NavLI>
                <NavLink to={ROUTES.VENDORS}>Vendors</NavLink>
            </NavLI>
            <NavLI>
                <NavLink to={ROUTES.VENUES}>Venues</NavLink>
            </NavLI>
            <NavLI>
                <NavLink to={ROUTES.TEAM}>Team</NavLink>
            </NavLI>
            <NavLI>
                <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
            </NavLI>
            {authUser.roles.includes(ROLES.ADMIN) && (
            <NavLI>
                <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
            </NavLI>
            )}
            <NavLI>
                <SignOutButton />
            </NavLI>
        </NavUL>
    </NavBar>
);

const NavigationNonAuth = () => (
    <NavBar>
        <NavLogo src={palmLogo} alt='Eventspo logo'/>
        <NavUL>
            <NavLI>
                <NavLink to={ROUTES.ABOUT}>Landing</NavLink>
            </NavLI>
            <NavLI>
                <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
            </NavLI>
        </NavUL>
    </NavBar>
);

export default Navigation;