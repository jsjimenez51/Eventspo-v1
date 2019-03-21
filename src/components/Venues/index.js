import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';

const VenuesPage = () => (
    <div>
        <h1>Venues</h1>
        <p>The Venues Page is accessible to every signed in user.</p>
    </div>
);

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
    )(VenuesPage);