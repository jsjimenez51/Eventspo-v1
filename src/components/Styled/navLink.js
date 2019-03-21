import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavLink = styled(Link)`
    color: #AD974F;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default (props) => <NavLink {...props} />;