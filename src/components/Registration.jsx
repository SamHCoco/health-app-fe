import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import axios from 'axios';

function RegistrationForm() {
  
  const handleSubmit = e => {
    e.preventDefault();
  };


  return (<Container>
            <Form>
              <Form.Group widths='equal'>
                  <Form.Input fluid label='First name' placeholder='First name' />
                  <Form.Input fluid label='Middle names' placeholder='(Optional)' />
                  <Form.Input fluid label='Surname' placeholder='Surname' />
              </Form.Group>
              <Form.Field>
                  <label>Username</label>
                  <input placeholder='Email' />
              </Form.Field>
              <Form.Field>
                  <label>Password</label>
                  <input placeholder='Password' type='password' />
              </Form.Field>
              <Button type='submit'>Sign up</Button>
          </Form>
        </Container>);
}


export default RegistrationForm