import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container className="container">
      <Heading className="headers">Job Jab</Heading>
      <Text>
        Welcome to Job Jab, an application to store all your job applications!
      </Text>
    </Container>
  );
};

export default HomePage;
