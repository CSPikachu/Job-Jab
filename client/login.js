import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Heading,
  Button,
  extendTheme,
} from '@chakra-ui/react';
import './css/styles.scss';
import JobApps from './jobapps';

const Login = ({ LoggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkLogin = () => {
    fetch('/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        // if successfully logged in
        if (data.email) {
          setLoggedIn(true);
          // function to redirect to jobapps page
        }
      })
      .catch((err) => {
        alert('email does not exist!');
        console.log('There is an error in checkLogin', err);
      });
  };

  const brand = {
    100: '#708d8a',
  };

  return (
    <div>
      {!LoggedIn && (
        <Container className='container'>
          <Heading className='headers'>Login</Heading>
          <FormControl id='register'>
            <FormLabel>Email address</FormLabel>
            <Input
              type='email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormLabel style={{ marginTop: '10px' }}>Password</FormLabel>
            <Input
              type='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              type='submit'
              onClick={() => {
                checkLogin();
              }}
              bg='#708d8a'
              _hover={{ color: '#708d8a', bg: '#eaf1f3' }}
              style={{ marginTop: '12px' }}
            >
              Submit
            </Button>
          </FormControl>
        </Container>
      )}
      {LoggedIn && <JobApps />}
    </div>
  );
};

export default Login;
