import React from 'react';
import styled from 'styled-components';


const StyledLink = styled.a`
    color: #AD974F;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
export default ({ route, params, href, children, className }) => (
    <aLink route={route} params={params} href={href} passHref>
      <StyledLink className={className}>{children}</StyledLink>
    </aLink>
);


