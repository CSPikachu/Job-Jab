import React, { Component } from "react";
import {
  Container,
  Heading,
  Box,
  Badge,
  Flex,
  Avatar,
  Text,
} from "@chakra-ui/react";

class JobApps extends Component {
  constructor() {
    super();
    this.state = {
      apps: [],
      colors: { true: "green", false: "red" },
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ apps: data });
      });
  }

  render() {
    const apps = this.state.apps.map((el, idx) => {
      return (
        // <Box
        //   bg="tomato"
        //   w="100%"
        //   p={4}
        //   color="white"
        //   key={idx}
        //   style={{ marginTop: "30px" }}
        // >
        //   <div className="appsContainer">
        //     <p className="apps">Application: {el.title}</p>
        //     <p className="apps">Source: {el.id}</p>
        //     <p className="apps">Status: {el.completed}</p>
        //     <p className="apps">Created at: {el.userId}</p>
        //   </div>
        // </Box>
        <Flex
          key={idx}
          style={{
            border: "1px solid grey",
            borderRadius: "10px",
            marginTop: "4px",
            padding: "20px",
          }}
        >
          <Avatar src="https://bit.ly/sage-adebayo" />
          <Box ml="3">
            <Text fontWeight="bold">
              {el.title}
              <Badge ml="1" colorScheme={this.state.colors[el.completed]}>
                {el.completed.toString()}
              </Badge>
            </Text>
            <Text fontSize="sm">{el.userId}</Text>
          </Box>
        </Flex>
      );
    });
    return (
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Heading style={{ padding: "20px" }}>Your Job Apps</Heading>
        <Heading>{apps}</Heading>
      </div>
    );
  }
}

export default JobApps;
