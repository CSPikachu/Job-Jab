import React, { useState } from "react";
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

const Register = ({ LoggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.email === email) {
          alert("Success!");
          // function to direct to jobapps page
        } else {
          alert("Email already exists");
        }
      })
      .catch((err) => {
        console.log("There is an error in registerUser", err);
      });
  };

  return (
    <Container className="container">
      <Heading className="headers">JOB JAB REGISTER</Heading>
      <FormControl id="register">
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          type="submit"
          onClick={registerUser}
          style={{ marginTop: "8px" }}
          colorScheme="teal"
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default Register;
