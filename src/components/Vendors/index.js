import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';

const VendorsPage = () => (
    <div>
        <h1>Vendors</h1>
        <p>The Vendors Page is accesible by every signed in user.</p>
        <h2>You can find our associated vendors below:</h2>
        <ul>
            <li>
                Vendor 1
            </li>
            <li>
                Vendor 2
            </li>
        </ul>
    </div>

       
);

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
    )(VendorsPage);