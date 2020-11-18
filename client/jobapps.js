import React, { Component } from "react";
import {
  Container,
  Heading,
  Box,
  Badge,
  Flex,
  Avatar,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";

class JobApps extends Component {
  constructor() {
    super();
    this.state = {
      apps: [],
      colors: {
        1: "yellow",
        2: "orange",
        3: "blue",
        4: "purple",
        5: "grey",
        6: "red",
        7: "green",
        8: "pink",
      },
      sourceImage: {
        LinkedIn:
          "https://www.flaticon.com/svg/static/icons/svg/174/174857.svg",
        Indeed:
          "https://pbs.twimg.com/profile_images/465901126684913664/sTJZxF5G.jpeg",
        Monster:
          "https://media.glassdoor.com/sqll/3411/monster-worldwide-squarelogo-1439837319741.png",
      },
    };
  }

  componentDidMount() {
    fetch("/jobapps/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ apps: data });
      });
  }

  render() {
    const apps = this.state.apps.map((el, idx) => {
      return (
        <Flex
          key={idx}
          style={{
            border: "1px solid grey",
            borderRadius: "10px",
            marginTop: "4px",
            padding: "20px",
          }}
        >
          <Avatar src={this.state.sourceImage[el.sourcename]} />
          <Box ml="3">
            <Text fontWeight="bold">
              {el.application_name}
              <Badge ml="1" colorScheme={this.state.colors[el.status_id]}>
                {el.status}
              </Badge>
            </Text>
            <Text fontSize="sm">{el.application_folder_link}</Text>
            <Text fontSize="sm">{el.date_submitted}</Text>
            <Badge colorScheme="teal">{"$" + el.offer_salary}</Badge>
          </Box>
        </Flex>
      );
    });
    return (
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Heading style={{ padding: "20px" }}>Your Job Apps</Heading>
        <Button>+ New Job App </Button>
        <Heading>{apps}</Heading>
      </div>
    );
  }
}

export default JobApps;
