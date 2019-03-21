import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';

const TeamPage = () => (
    <div>
        <h1>Team Page</h1>
        <p>The Team Page is accessible by every signed in user.</p>
    </div>
);

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
    )(TeamPage);