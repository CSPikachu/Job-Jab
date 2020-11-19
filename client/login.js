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

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin = () => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        // if successfully logged in
        if (data.test) {
          alert("Logged In!");
          setLoggedIn(true);
          // function to redirect to jobapps page
        } else {
          alert("uhoh");
        }
      })
      .catch((err) => {
        console.log("There is an error in checkLogin", err);
      });
  };

  return (
    <Container className="container">
      <Heading className="headers">JOB JAB LOGIN</Heading>
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
          onClick={() => {
            checkLogin();
          }}
          colorScheme="teal"
          style={{ marginTop: "8px" }}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default Login;
