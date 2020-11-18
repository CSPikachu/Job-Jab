import React, { Component } from "react";
import {
  Heading,
  Box,
  Badge,
  Flex,
  Avatar,
  Button,
  Text,
} from "@chakra-ui/react";
import NewAppModal from "./newAppModal";

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
    fetch("/jobapps")
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
            <Button
              onClick={() => {
                deleteApp(el.id);
              }}
            >
              Delete Application
            </Button>
          </Box>
        </Flex>
      );
    });
    return (
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Heading style={{ padding: "20px" }}>Your Job Apps</Heading>
        <NewAppModal />
        <Heading>{apps}</Heading>
      </div>
    );
  }
}

const deleteApp = (app) => {
  console.log("delete");
  console.log("app", app);
  fetch("/jobapps/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // Authorization: token,
    },
    // body: JSON.stringify({ id: app }),
  });
  // .then(res=> res.json())
  // .then(data => {

  // })
};

export default JobApps;
