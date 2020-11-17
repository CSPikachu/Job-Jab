import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Heading,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Container>
      <Heading>JOB JAB LOGIN</Heading>
      <FormControl id="register">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <Button colorScheme="teal">Submit</Button>
      </FormControl>
    </Container>
  );
};

export default Login;
