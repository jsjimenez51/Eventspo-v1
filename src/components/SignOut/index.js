import React from 'react';

import { withFirebase } from '../Firebase';
import Button from '../Styled/button';

const SignOutButton = ({ firebase }) => (
    <Button type="button" onClick={firebase.doSignOut}>
        Sign Out
    </Button>
);
// higher order component build
export default withFirebase(SignOutButton);