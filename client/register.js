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
} from '@chakra-ui/react';
import './css/styles.scss';
import JobApps from './jobapps';

const Register = ({ LoggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = () => {
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.email === email) {
          alert('Success!');
          setLoggedIn(true);
          // function to direct to jobapps page
        } else {
          alert('Email already exists');
        }
      })
      .catch((err) => {
        console.log('There is an error in registerUser', err);
      });
  };

  return (
    <Container className='container'>
      {!LoggedIn && (
        <>
          <Heading className='headers'>Register a New Account</Heading>
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
              onClick={registerUser}
              style={{ marginTop: '12px' }}
              bg='#708d8a'
              _hover={{ color: '#708d8a', bg: '#eaf1f3' }}
            >
              Submit
            </Button>
          </FormControl>
        </>
      )}
      {LoggedIn && <JobApps />}
    </Container>
  );
};

export default Register;
