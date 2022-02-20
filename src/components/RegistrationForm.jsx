import React, { useState } from 'react';
import { Button, Form, Container, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { Redirect } from 'react-router';
import RegistrationSuccess from './RegistrationSuccess';

function RegistrationForm() {

  const url = "http://localhost:8899/api/v1/user/register";

  const [signupComplete, setSignupComplete] = useState(false);

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    password: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
    setSignupComplete(true);
  };
  
  const createUser = async (props) => {
    const payload = user;
    console.log("User to be created: " + payload);
    const {data : createdUser} = await axios.post(url, payload);
    console.log(createdUser);
  } 

  const handleChange = (e) => {
    const name = e.target.name;
    console.log("Event is " + e.target.name) // todo - remove
    setUser({...user, [e.target.name] : e.target.value});
  }

  return (<div>
    <Segment>
      <Container style={{width: 400}}>
              {!signupComplete && <Form handleSubmit={handleSubmit}>
              <Form.Input fluid label='First name' placeholder='Required' value={user.firstName} name='firstName' onChange={handleChange} />
              <Form.Input fluid label='Middle names' placeholder='Optional' name='middleName' onChange={handleChange}/>
              <Form.Input fluid label='Surname' placeholder='Required' value={user.lastName} name='lastName' onChange={handleChange} />
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Email (Required)' type='email' value={user.email} name='email' onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Required' type='password' value={user.password} name='password' onChange={handleChange} />
                </Form.Field>
                <Button onClick={handleSubmit} type='submit'>Sign up</Button>
            </Form>}
            {signupComplete && <RegistrationSuccess email={user.email} />}
        </Container>
    </Segment>
  </div>);
}


export default RegistrationForm