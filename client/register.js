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

const Register = () => {
  return (
    <Container>
      <Heading>JOB JAB REGISTER</Heading>
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

export default Register;
