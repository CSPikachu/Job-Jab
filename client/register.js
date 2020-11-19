import React from 'react';
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

const Register = () => {
  return (
    <Container className='container'>
      <Heading className='headers'>JOB JAB REGISTER</Heading>
      <FormControl id='register'>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormLabel>Password</FormLabel>
        <Input type='password' />
        <Button style={{ marginTop: '8px' }} colorScheme='teal'>
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default Register;
