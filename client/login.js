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
import JobApps from "./jobapps";

const Login = ({ LoggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin = () => {
    fetch("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        // if successfully logged in
        if (data.email) {
          alert("Logged In!");
          setLoggedIn(true);
          // function to redirect to jobapps page
        }
      })
      .catch((err) => {
        console.log("There is an error in checkLogin", err);
      });
  };

  return (
    <Container className="container">
      {!LoggedIn && (
        <>
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
        </>
      )}
      {LoggedIn && <JobApps />}
    </Container>
  );
};

export default Login;
