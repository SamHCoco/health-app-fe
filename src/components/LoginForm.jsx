import React, {useState} from 'react';
import { Button, Form, Container, Input } from 'semantic-ui-react';
import { useHistory} from 'react-router-dom';

import {authenticate} from '../service/authService';


function LoginForm({user}) {
    const history = useHistory();
   
    if (user) {
      history.push('/store');
    } else {
      console.log('Login user is null'); // todo - remove
    }

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
      });
      
    const handleSubmit = (e) => {
      e.preventDefault();
      try {
        authenticate(userLogin.email, userLogin.password, '/store');
      } catch (error) {
        console.log("Failed to authenticate username '" + userLogin.email + "':");
        console.log(error);
      }
    };

    const handleChange = (e) => {
      console.log("Event is " + e.target.name) // todo - remove
      setUserLogin({...userLogin, [e.target.name] : e.target.value});
    }

    return (<div>
                <Container style={{width: 400}}>
                        <Form handleSubmit={handleSubmit}>
                        <Form.Field>
                            <label>Username</label>
                            <Input placeholder='Username' type='email' value={userLogin.email} name='email' onChange={handleChange} icon='user' iconPosition='left' />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <Input placeholder='Password' type='password' value={userLogin.password} name='password' onChange={handleChange} icon='lock' iconPosition='left' />
                        </Form.Field>
                        <Button onClick={handleSubmit} type='submit'>Login</Button>
                    </Form>
                </Container>
            </div> );
}

export default LoginForm;