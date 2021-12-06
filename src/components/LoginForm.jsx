import React, {useState} from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import {authenticate} from '../service/authenticationService';


function LoginForm() {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
      });
      
      const handleSubmit = (e) => {
        e.preventDefault();
        authenticate(userLogin.email, userLogin.password);
      };

      const handleChange = (e) => {
        const name = e.target.name;
        console.log("Event is " + e.target.name) // todo - remove
        setUserLogin({...userLogin, [e.target.name] : e.target.value});
      }

    return (<div>
                <Container style={{width: 400}}>
                        <Form handleSubmit={handleSubmit}>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder='Username' type='email' value={userLogin.email} name='email' onChange={handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder='Password' type='password' value={userLogin.password} name='password' onChange={handleChange} />
                        </Form.Field>
                        <Button onClick={handleSubmit} type='submit'>Sign in</Button>
                    </Form>
                </Container>
            </div> );
}

export default LoginForm;