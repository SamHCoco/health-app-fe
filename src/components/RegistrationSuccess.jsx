import React from 'react';
import { Grid,  } from 'semantic-ui-react';

function RegistrationSuccess({ email }) {
    return (<div>
                Registration successful! <br/> 
                An email verification link has been sent to your email address <b>{email}</b>.
            </div>);
}

export default RegistrationSuccess;